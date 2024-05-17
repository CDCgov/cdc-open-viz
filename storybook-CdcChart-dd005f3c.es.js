import { r as ue, R as i } from "./storybook-index-45401197.es.js";
import { a as my, i as Dh, b as Oh, g as gy } from "./storybook-isSolr-6a0136d5.es.js";
import { _ as Xr, P as yy, D as vy, C as xy, A as by, F as Mh, g as Sy } from "./storybook-Filters-d0b59c22.es.js";
import { L as Qd, a as Ey } from "./storybook-coveUpdateWorker-36d7a51c.es.js";
import { B as Hf } from "./storybook-Button-d74e310e.es.js";
import { p as vm, P as fe } from "./storybook-index-43433e35.es.js";
import { d as ky } from "./storybook-debounce-cc216a80.es.js";
import { a as Wf } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { P as _h } from "./storybook-papaparse.min-b07ddc33.es.js";
import { H as Mi, T as wy } from "./storybook-index-e5bf02db.es.js";
import { _ as sn } from "./storybook-extends-70f3d2a3.es.js";
import { p as Nh, d as Ti, s as Wr, c as It, h as Fh, a as Sc, e as Vn, t as zu, f as Uo, m as Ad, i as zh, j as Wn, k as $h, l as Ty, n as Cy, G as Ay, o as ju, q as or, r as Uu, g as Go, T as yt, I as Bh } from "./storybook-InputToggle-388019bd.es.js";
import { D as xm } from "./storybook-DataTransform-b554456e.es.js";
import { t as Py, a as bn, f as bm, L as Ih, b as ts, g as Ci, S as Ry, M as Pd, D as Ly } from "./storybook-DataTable-e40c0001.es.js";
import { E as _r, L as Dy } from "./storybook-Loading-f180d060.es.js";
import { b as Ec, t as Oy, e as Sm, f as Hh, g as My, h as _y, j as Ny, k as Wh, m as Fy, G as rt, c as wn } from "./storybook-Group-e6c0d0df.es.js";
import { s as ls, t as Em, a as km, b as wm, d as Cs, B as hr, c as Hn, C as zy, S as Tm } from "./storybook-icon-check-d4f3700e.es.js";
import { R as $y } from "./storybook-index-633d712d.es.js";
import { e as bs, a as An, b as Pn, c as Rn, d as Ln, A as _i } from "./storybook-index-66852bf6.es.js";
import { i as Cm, m as Rd, c as Am, j as bu, k as Su, l as Eu, n as Vh, o as By, p as jh, b as Pm, d as Rm } from "./storybook-year-bedc547d.es.js";
import { a as Ct } from "./storybook-Icon-48ed169f.es.js";
import { C as Iy, V as Hy } from "./storybook-VizFilterEditor-5955fe69.es.js";
import { S as kt, T as Qe, C as ft, D as Wy } from "./storybook-DataTableEditor-f2f7b65f.es.js";
import { T as De } from "./storybook-Tooltip-edc0f7ab.es.js";
import { I as Ha } from "./storybook-InputSelect-a65afd95.es.js";
import { _ as Vy } from "./storybook-lodash-c15d8e1c.es.js";
import { u as jy, p as Uy, s as Ky, a as Yy } from "./storybook-useDataVizClasses-d9099587.es.js";
import { n as Uh } from "./storybook-numberFromString-24623c03.es.js";
import { c as Kh } from "./storybook-cacheBustingString-7a3dd9ba.es.js";
function Lm(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Yh(e) {
  let t = e, r = e;
  e.length === 1 && (t = (f, s) => e(f) - s, r = Xy(e));
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
  function o(f, s, c, d) {
    c == null && (c = 0), d == null && (d = f.length);
    const g = n(f, s, c, d - 1);
    return g > c && t(f[g - 1], s) > -t(f[g], s) ? g - 1 : g;
  }
  return { left: n, center: o, right: a };
}
function Xy(e) {
  return (t, r) => Lm(e(t), r);
}
function* qy(e, t) {
  if (t === void 0)
    for (let r of e)
      r != null && (r = +r) >= r && (yield r);
  else {
    let r = -1;
    for (let n of e)
      (n = t(n, ++r, e)) != null && (n = +n) >= n && (yield n);
  }
}
function Gy(e, t) {
  let r = 0, n, a = 0, o = 0;
  if (t === void 0)
    for (let f of e)
      f != null && (f = +f) >= f && (n = f - a, a += n / ++r, o += n * (f - a));
  else {
    let f = -1;
    for (let s of e)
      (s = t(s, ++f, e)) != null && (s = +s) >= s && (n = s - a, a += n / ++r, o += n * (s - a));
  }
  if (r > 1)
    return o / (r - 1);
}
function Zy(e, t) {
  const r = Gy(e, t);
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
function Dm(e, t, r = 0, n = e.length - 1, a = Lm) {
  for (; n > r; ) {
    if (n - r > 600) {
      const c = n - r + 1, d = t - r + 1, g = Math.log(c), y = 0.5 * Math.exp(2 * g / 3), v = 0.5 * Math.sqrt(g * y * (c - y) / c) * (d - c / 2 < 0 ? -1 : 1), E = Math.max(r, Math.floor(t - d * y / c + v)), k = Math.min(n, Math.floor(t + (c - d) * y / c + v));
      Dm(e, t, E, k, a);
    }
    const o = e[t];
    let f = r, s = n;
    for (ns(e, r, t), a(e[n], o) > 0 && ns(e, r, n); f < s; ) {
      for (ns(e, f, s), ++f, --s; a(e[f], o) < 0; )
        ++f;
      for (; a(e[s], o) > 0; )
        --s;
    }
    a(e[r], o) === 0 ? ns(e, r, s) : (++s, ns(e, s, n)), s <= t && (r = s + 1), t <= s && (n = s - 1);
  }
  return e;
}
function ns(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function Qy(e, t, r) {
  if (e = Float64Array.from(qy(e, r)), !!(n = e.length)) {
    if ((t = +t) <= 0 || n < 2)
      return us(e);
    if (t >= 1)
      return ss(e);
    var n, a = (n - 1) * t, o = Math.floor(a), f = ss(Dm(e, o).subarray(0, o + 1)), s = us(e.subarray(o + 1));
    return f + (s - f) * (a - o);
  }
}
function Jy(e, t) {
  let r = 0, n = 0;
  if (t === void 0)
    for (let a of e)
      a != null && (a = +a) >= a && (++r, n += a);
  else {
    let a = -1;
    for (let o of e)
      (o = t(o, ++a, e)) != null && (o = +o) >= o && (++r, n += o);
  }
  if (r)
    return n / r;
}
function ev(e, t) {
  return Qy(e, 0.5, t);
}
class Xh extends Map {
  constructor(t, r = rv) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null)
      for (const [n, a] of t)
        this.set(n, a);
  }
  get(t) {
    return super.get(qh(this, t));
  }
  has(t) {
    return super.has(qh(this, t));
  }
  set(t, r) {
    return super.set(tv(this, t), r);
  }
  delete(t) {
    return super.delete(nv(this, t));
  }
}
function qh({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function tv({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function nv({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function rv(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function av(e, t, r) {
  e = +e, t = +t, r = (a = arguments.length) < 2 ? (t = e, e = 0, 1) : a < 3 ? 1 : +r;
  for (var n = -1, a = Math.max(0, Math.ceil((t - e) / r)) | 0, o = new Array(a); ++n < a; )
    o[n] = e + n * r;
  return o;
}
const Gh = Symbol("implicit");
function Vf() {
  var e = new Xh(), t = [], r = [], n = Gh;
  function a(o) {
    let f = e.get(o);
    if (f === void 0) {
      if (n !== Gh)
        return n;
      e.set(o, f = t.push(o) - 1);
    }
    return r[f % r.length];
  }
  return a.domain = function(o) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new Xh();
    for (const f of o)
      e.has(f) || e.set(f, t.push(f) - 1);
    return a;
  }, a.range = function(o) {
    return arguments.length ? (r = Array.from(o), a) : r.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.copy = function() {
    return Vf(t, r).unknown(n);
  }, Ec.apply(a, arguments), a;
}
function jf() {
  var e = Vf().unknown(void 0), t = e.domain, r = e.range, n = 0, a = 1, o, f, s = !1, c = 0, d = 0, g = 0.5;
  delete e.unknown;
  function y() {
    var v = t().length, E = a < n, k = E ? a : n, M = E ? n : a;
    o = (M - k) / Math.max(1, v - c + d * 2), s && (o = Math.floor(o)), k += (M - k - o * (v - c)) * g, f = o * (1 - c), s && (k = Math.round(k), f = Math.round(f));
    var T = av(v).map(function(m) {
      return k + o * m;
    });
    return r(E ? T.reverse() : T);
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
    return o;
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
    return jf(t(), [n, a]).round(s).paddingInner(c).paddingOuter(d).align(g);
  }, Ec.apply(y(), arguments);
}
function Om(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Om(t());
  }, e;
}
function iv() {
  return Om(jf.apply(null, arguments).paddingInner(1));
}
function Mm(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, a = e[r], o = e[n], f;
  return o < a && (f = r, r = n, n = f, f = a, a = o, o = f), e[r] = t.floor(a), e[n] = t.ceil(o), e;
}
function Zh(e) {
  return Math.log(e);
}
function Qh(e) {
  return Math.exp(e);
}
function ov(e) {
  return -Math.log(-e);
}
function lv(e) {
  return -Math.exp(-e);
}
function sv(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function uv(e) {
  return e === 10 ? sv : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function cv(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Jh(e) {
  return (t, r) => -e(-t, r);
}
function dv(e) {
  const t = e(Zh, Qh), r = t.domain;
  let n = 10, a, o;
  function f() {
    return a = cv(n), o = uv(n), r()[0] < 0 ? (a = Jh(a), o = Jh(o), e(ov, lv)) : e(Zh, Qh), t;
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
    let v = a(d), E = a(g), k, M;
    const T = s == null ? 10 : +s;
    let m = [];
    if (!(n % 1) && E - v < T) {
      if (v = Math.floor(v), E = Math.ceil(E), d > 0) {
        for (; v <= E; ++v)
          for (k = 1; k < n; ++k)
            if (M = v < 0 ? k / o(-v) : k * o(v), !(M < d)) {
              if (M > g)
                break;
              m.push(M);
            }
      } else
        for (; v <= E; ++v)
          for (k = n - 1; k >= 1; --k)
            if (M = v > 0 ? k / o(-v) : k * o(v), !(M < d)) {
              if (M > g)
                break;
              m.push(M);
            }
      m.length * 2 < T && (m = Hh(d, g, T));
    } else
      m = Hh(v, E, Math.min(E - v, T)).map(o);
    return y ? m.reverse() : m;
  }, t.tickFormat = (s, c) => {
    if (s == null && (s = 10), c == null && (c = n === 10 ? "s" : ","), typeof c != "function" && (!(n % 1) && (c = My(c)).precision == null && (c.trim = !0), c = _y(c)), s === 1 / 0)
      return c;
    const d = Math.max(1, n * s / t.ticks().length);
    return (g) => {
      let y = g / o(Math.round(a(g)));
      return y * n < n - 0.5 && (y *= n), y <= d ? c(g) : "";
    };
  }, t.nice = () => r(Mm(r(), {
    floor: (s) => o(Math.floor(a(s))),
    ceil: (s) => o(Math.ceil(a(s)))
  })), t;
}
function _m() {
  const e = dv(Oy()).domain([1, 10]);
  return e.copy = () => Sm(e, _m()).base(e.base()), Ec.apply(e, arguments), e;
}
const Ku = Cm(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Ku.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Cm((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Ku);
Ku.range;
function fv(e, t, r, n, a, o) {
  const f = [
    [ls, 1, bu],
    [ls, 5, 5 * bu],
    [ls, 15, 15 * bu],
    [ls, 30, 30 * bu],
    [o, 1, Su],
    [o, 5, 5 * Su],
    [o, 15, 15 * Su],
    [o, 30, 30 * Su],
    [a, 1, Eu],
    [a, 3, 3 * Eu],
    [a, 6, 6 * Eu],
    [a, 12, 12 * Eu],
    [n, 1, Vh],
    [n, 2, 2 * Vh],
    [r, 1, By],
    [t, 1, jh],
    [t, 3, 3 * jh],
    [e, 1, Rd]
  ];
  function s(d, g, y) {
    const v = g < d;
    v && ([d, g] = [g, d]);
    const E = y && typeof y.range == "function" ? y : c(d, g, y), k = E ? E.range(d, +g + 1) : [];
    return v ? k.reverse() : k;
  }
  function c(d, g, y) {
    const v = Math.abs(g - d) / y, E = Ny(([, , T]) => T).right(f, v);
    if (E === f.length)
      return e.every(Wh(d / Rd, g / Rd, y));
    if (E === 0)
      return Ku.every(Math.max(Wh(d, g, y), 1));
    const [k, M] = f[v / f[E - 1][2] < f[E][2] / v ? E - 1 : E];
    return k.every(M);
  }
  return [s, c];
}
const [hv, pv] = fv(Am, wm, Rm, Pm, km, Em);
function mv(e) {
  return new Date(e);
}
function gv(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Nm(e, t, r, n, a, o, f, s, c, d) {
  var g = Fy(), y = g.invert, v = g.domain, E = d(".%L"), k = d(":%S"), M = d("%I:%M"), T = d("%I %p"), m = d("%a %d"), D = d("%b %d"), L = d("%B"), _ = d("%Y");
  function N(R) {
    return (c(R) < R ? E : s(R) < R ? k : f(R) < R ? M : o(R) < R ? T : n(R) < R ? a(R) < R ? m : D : r(R) < R ? L : _)(R);
  }
  return g.invert = function(R) {
    return new Date(y(R));
  }, g.domain = function(R) {
    return arguments.length ? v(Array.from(R, gv)) : v().map(mv);
  }, g.ticks = function(R) {
    var U = v();
    return e(U[0], U[U.length - 1], R ?? 10);
  }, g.tickFormat = function(R, U) {
    return U == null ? N : d(U);
  }, g.nice = function(R) {
    var U = v();
    return (!R || typeof R.range != "function") && (R = t(U[0], U[U.length - 1], R ?? 10)), R ? v(Mm(U, R)) : g;
  }, g.copy = function() {
    return Sm(g, Nm(e, t, r, n, a, o, f, s, c, d));
  }, g;
}
function yv() {
  return Ec.apply(Nm(hv, pv, Am, wm, Rm, Pm, km, Em, ls, Py).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var vv = Cs("domain", "range", "reverse", "align", "padding", "round");
function Jd(e) {
  return vv(jf(), e);
}
var xv = Cs("domain", "range", "reverse", "align", "padding", "round");
function Ko(e) {
  return xv(iv(), e);
}
var bv = Cs("domain", "range", "reverse", "clamp", "interpolate", "nice", "round");
function Sv(e) {
  return bv(yv(), e);
}
var Ev = Cs("domain", "range", "reverse", "base", "clamp", "interpolate", "nice", "round");
function Yu(e) {
  return Ev(_m(), e);
}
var kv = Cs("domain", "range", "reverse", "unknown");
function Fm(e) {
  return kv(Vf(), e);
}
function wv(e) {
  if ((typeof e == "function" || typeof e == "object" && e) && "valueOf" in e) {
    var t = e.valueOf();
    if (typeof t == "number")
      return t;
  }
  return e;
}
function Tv(e, t) {
  var r = e;
  return "ticks" in r ? r.ticks(t) : r.domain().filter(function(n, a, o) {
    return t == null || o.length <= t || a % Math.round((o.length - 1) / t) === 0;
  });
}
function Cv(e) {
  return e == null ? void 0 : e.toString();
}
var Ni = [], Av = function() {
  return Ni.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, Pv = function() {
  return Ni.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, ep = "ResizeObserver loop completed with undelivered notifications.", Rv = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: ep
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = ep), window.dispatchEvent(e);
}, Ss;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Ss || (Ss = {}));
var Fi = function(e) {
  return Object.freeze(e);
}, zm = function() {
  function e(t, r) {
    this.inlineSize = t, this.blockSize = r, Fi(this);
  }
  return e;
}(), $m = function() {
  function e(t, r, n, a) {
    return this.x = t, this.y = r, this.width = n, this.height = a, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Fi(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, r = t.x, n = t.y, a = t.top, o = t.right, f = t.bottom, s = t.left, c = t.width, d = t.height;
    return { x: r, y: n, top: a, right: o, bottom: f, left: s, width: c, height: d };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), Uf = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, Bm = function(e) {
  if (Uf(e)) {
    var t = e.getBBox(), r = t.width, n = t.height;
    return !r && !n;
  }
  var a = e, o = a.offsetWidth, f = a.offsetHeight;
  return !(o || f || e.getClientRects().length);
}, tp = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var r = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(r && e instanceof r.Element);
}, Lv = function(e) {
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
}, cs = typeof window < "u" ? window : {}, ku = /* @__PURE__ */ new WeakMap(), np = /auto|scroll/, Dv = /^tb|vertical/, Ov = /msie|trident/i.test(cs.navigator && cs.navigator.userAgent), Vr = function(e) {
  return parseFloat(e || "0");
}, Xo = function(e, t, r) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = !1), new zm((r ? t : e) || 0, (r ? e : t) || 0);
}, rp = Fi({
  devicePixelContentBoxSize: Xo(),
  borderBoxSize: Xo(),
  contentBoxSize: Xo(),
  contentRect: new $m(0, 0, 0, 0)
}), Im = function(e, t) {
  if (t === void 0 && (t = !1), ku.has(e) && !t)
    return ku.get(e);
  if (Bm(e))
    return ku.set(e, rp), rp;
  var r = getComputedStyle(e), n = Uf(e) && e.ownerSVGElement && e.getBBox(), a = !Ov && r.boxSizing === "border-box", o = Dv.test(r.writingMode || ""), f = !n && np.test(r.overflowY || ""), s = !n && np.test(r.overflowX || ""), c = n ? 0 : Vr(r.paddingTop), d = n ? 0 : Vr(r.paddingRight), g = n ? 0 : Vr(r.paddingBottom), y = n ? 0 : Vr(r.paddingLeft), v = n ? 0 : Vr(r.borderTopWidth), E = n ? 0 : Vr(r.borderRightWidth), k = n ? 0 : Vr(r.borderBottomWidth), M = n ? 0 : Vr(r.borderLeftWidth), T = y + d, m = c + g, D = M + E, L = v + k, _ = s ? e.offsetHeight - L - e.clientHeight : 0, N = f ? e.offsetWidth - D - e.clientWidth : 0, R = a ? T + D : 0, U = a ? m + L : 0, H = n ? n.width : Vr(r.width) - R - N, Y = n ? n.height : Vr(r.height) - U - _, Z = H + T + N + D, re = Y + m + _ + L, K = Fi({
    devicePixelContentBoxSize: Xo(Math.round(H * devicePixelRatio), Math.round(Y * devicePixelRatio), o),
    borderBoxSize: Xo(Z, re, o),
    contentBoxSize: Xo(H, Y, o),
    contentRect: new $m(y, c, H, Y)
  });
  return ku.set(e, K), K;
}, Hm = function(e, t, r) {
  var n = Im(e, r), a = n.borderBoxSize, o = n.contentBoxSize, f = n.devicePixelContentBoxSize;
  switch (t) {
    case Ss.DEVICE_PIXEL_CONTENT_BOX:
      return f;
    case Ss.BORDER_BOX:
      return a;
    default:
      return o;
  }
}, Wm = function() {
  function e(t) {
    var r = Im(t);
    this.target = t, this.contentRect = r.contentRect, this.borderBoxSize = Fi([r.borderBoxSize]), this.contentBoxSize = Fi([r.contentBoxSize]), this.devicePixelContentBoxSize = Fi([r.devicePixelContentBoxSize]);
  }
  return e;
}(), Vm = function(e) {
  if (Bm(e))
    return 1 / 0;
  for (var t = 0, r = e.parentNode; r; )
    t += 1, r = r.parentNode;
  return t;
}, Mv = function() {
  var e = 1 / 0, t = [];
  Ni.forEach(function(f) {
    if (f.activeTargets.length !== 0) {
      var s = [];
      f.activeTargets.forEach(function(d) {
        var g = new Wm(d.target), y = Vm(d.target);
        s.push(g), d.lastReportedSize = Hm(d.target, d.observedBox), y < e && (e = y);
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
}, ap = function(e) {
  Ni.forEach(function(r) {
    r.activeTargets.splice(0, r.activeTargets.length), r.skippedTargets.splice(0, r.skippedTargets.length), r.observationTargets.forEach(function(a) {
      a.isActive() && (Vm(a.target) > e ? r.activeTargets.push(a) : r.skippedTargets.push(a));
    });
  });
}, _v = function() {
  var e = 0;
  for (ap(e); Av(); )
    e = Mv(), ap(e);
  return Pv() && Rv(), e > 0;
}, Ld, jm = [], Nv = function() {
  return jm.splice(0).forEach(function(e) {
    return e();
  });
}, Fv = function(e) {
  if (!Ld) {
    var t = 0, r = document.createTextNode(""), n = { characterData: !0 };
    new MutationObserver(function() {
      return Nv();
    }).observe(r, n), Ld = function() {
      r.textContent = "".concat(t ? t-- : t++);
    };
  }
  jm.push(e), Ld();
}, zv = function(e) {
  Fv(function() {
    requestAnimationFrame(e);
  });
}, $u = 0, $v = function() {
  return !!$u;
}, Bv = 250, Iv = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, ip = [
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
], op = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Dd = !1, Hv = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var r = this;
    if (t === void 0 && (t = Bv), !Dd) {
      Dd = !0;
      var n = op(t);
      zv(function() {
        var a = !1;
        try {
          a = _v();
        } finally {
          if (Dd = !1, t = n - op(), !$v())
            return;
          a ? r.run(1e3) : t > 0 ? r.run(t) : r.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, r = function() {
      return t.observer && t.observer.observe(document.body, Iv);
    };
    document.body ? r() : cs.addEventListener("DOMContentLoaded", r);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), ip.forEach(function(r) {
      return cs.addEventListener(r, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), ip.forEach(function(r) {
      return cs.removeEventListener(r, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), ef = new Hv(), lp = function(e) {
  !$u && e > 0 && ef.start(), $u += e, !$u && ef.stop();
}, Wv = function(e) {
  return !Uf(e) && !Lv(e) && getComputedStyle(e).display === "inline";
}, Vv = function() {
  function e(t, r) {
    this.target = t, this.observedBox = r || Ss.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = Hm(this.target, this.observedBox, !0);
    return Wv(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), jv = function() {
  function e(t, r) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = r;
  }
  return e;
}(), wu = /* @__PURE__ */ new WeakMap(), sp = function(e, t) {
  for (var r = 0; r < e.length; r += 1)
    if (e[r].target === t)
      return r;
  return -1;
}, Tu = function() {
  function e() {
  }
  return e.connect = function(t, r) {
    var n = new jv(t, r);
    wu.set(t, n);
  }, e.observe = function(t, r, n) {
    var a = wu.get(t), o = a.observationTargets.length === 0;
    sp(a.observationTargets, r) < 0 && (o && Ni.push(a), a.observationTargets.push(new Vv(r, n && n.box)), lp(1), ef.schedule());
  }, e.unobserve = function(t, r) {
    var n = wu.get(t), a = sp(n.observationTargets, r), o = n.observationTargets.length === 1;
    a >= 0 && (o && Ni.splice(Ni.indexOf(n), 1), n.observationTargets.splice(a, 1), lp(-1));
  }, e.disconnect = function(t) {
    var r = this, n = wu.get(t);
    n.observationTargets.slice().forEach(function(a) {
      return r.unobserve(t, a.target);
    }), n.activeTargets.splice(0, n.activeTargets.length);
  }, e;
}(), Uv = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Tu.connect(this, t);
  }
  return e.prototype.observe = function(t, r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!tp(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Tu.observe(this, t, r);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!tp(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Tu.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    Tu.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
const Kv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ResizeObserver: Uv,
  ResizeObserverEntry: Wm,
  ResizeObserverSize: zm
}, Symbol.toStringTag, { value: "Module" })), Yv = /* @__PURE__ */ Wf(Kv);
var up = Ym, Ma = Km(vm), Xv = Km(ky), Ho = Zv(ue), qv = Yv, Gv = ["className", "children", "debounceTime", "ignoreDimensions", "parentSizeStyles", "enableDebounceLeadingCall"];
function Um(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Um = function(a) {
    return a ? r : t;
  })(e);
}
function Zv(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Um(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var f = a ? Object.getOwnPropertyDescriptor(e, o) : null;
      f && (f.get || f.set) ? Object.defineProperty(n, o, f) : n[o] = e[o];
    }
  return n.default = e, r && r.set(e, n), n;
}
function Km(e) {
  return e && e.__esModule ? e : { default: e };
}
function Xu() {
  return Xu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xu.apply(this, arguments);
}
function Qv(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var Jv = [];
function Ym(e) {
  var t = e.className, r = e.children, n = e.debounceTime, a = n === void 0 ? 300 : n, o = e.ignoreDimensions, f = o === void 0 ? Jv : o, s = e.parentSizeStyles, c = s === void 0 ? {
    width: "100%",
    height: "100%"
  } : s, d = e.enableDebounceLeadingCall, g = d === void 0 ? !0 : d, y = Qv(e, Gv), v = (0, Ho.useRef)(null), E = (0, Ho.useRef)(0), k = (0, Ho.useState)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), M = k[0], T = k[1], m = (0, Ho.useMemo)(function() {
    var D = Array.isArray(f) ? f : [f];
    return (0, Xv.default)(function(L) {
      T(function(_) {
        var N = Object.keys(_), R = N.filter(function(H) {
          return _[H] !== L[H];
        }), U = R.every(function(H) {
          return D.includes(H);
        });
        return U ? _ : L;
      });
    }, a, {
      leading: g
    });
  }, [a, g, f]);
  return (0, Ho.useEffect)(function() {
    var D = new qv.ResizeObserver(function(L) {
      L === void 0 && (L = []), L.forEach(function(_) {
        var N = _.contentRect, R = N.left, U = N.top, H = N.width, Y = N.height;
        E.current = window.requestAnimationFrame(function() {
          m({
            width: H,
            height: Y,
            top: U,
            left: R
          });
        });
      });
    });
    return v.current && D.observe(v.current), function() {
      window.cancelAnimationFrame(E.current), D.disconnect(), m != null && m.cancel && m.cancel();
    };
  }, [m]), /* @__PURE__ */ Ho.default.createElement("div", Xu({
    style: c,
    ref: v,
    className: t
  }, y), r(Xu({}, M, {
    ref: v.current,
    resize: m
  })));
}
Ym.propTypes = {
  className: Ma.default.string,
  debounceTime: Ma.default.number,
  enableDebounceLeadingCall: Ma.default.bool,
  ignoreDimensions: Ma.default.oneOfType([Ma.default.any, Ma.default.arrayOf(Ma.default.any)]),
  children: Ma.default.func.isRequired
};
var Od = /* @__PURE__ */ new Date(), Md = /* @__PURE__ */ new Date();
function fa(e, t, r, n) {
  function a(o) {
    return e(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
  }
  return a.floor = function(o) {
    return e(o = /* @__PURE__ */ new Date(+o)), o;
  }, a.ceil = function(o) {
    return e(o = new Date(o - 1)), t(o, 1), e(o), o;
  }, a.round = function(o) {
    var f = a(o), s = a.ceil(o);
    return o - f < s - o ? f : s;
  }, a.offset = function(o, f) {
    return t(o = /* @__PURE__ */ new Date(+o), f == null ? 1 : Math.floor(f)), o;
  }, a.range = function(o, f, s) {
    var c = [], d;
    if (o = a.ceil(o), s = s == null ? 1 : Math.floor(s), !(o < f) || !(s > 0))
      return c;
    do
      c.push(d = /* @__PURE__ */ new Date(+o)), t(o, s), e(o);
    while (d < o && o < f);
    return c;
  }, a.filter = function(o) {
    return fa(function(f) {
      if (f >= f)
        for (; e(f), !o(f); )
          f.setTime(f - 1);
    }, function(f, s) {
      if (f >= f)
        if (s < 0)
          for (; ++s <= 0; )
            for (; t(f, -1), !o(f); )
              ;
        else
          for (; --s >= 0; )
            for (; t(f, 1), !o(f); )
              ;
    });
  }, r && (a.count = function(o, f) {
    return Od.setTime(+o), Md.setTime(+f), e(Od), e(Md), Math.floor(r(Od, Md));
  }, a.every = function(o) {
    return o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? a.filter(n ? function(f) {
      return n(f) % o === 0;
    } : function(f) {
      return a.count(0, f) % o === 0;
    }) : a;
  }), a;
}
const ex = 1e3, Kf = ex * 60, tx = Kf * 60, Yf = tx * 24, Xm = Yf * 7;
var qm = fa(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Kf) / Yf,
  (e) => e.getDate() - 1
);
const Gm = qm;
qm.range;
function Hi(e) {
  return fa(function(t) {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setDate(t.getDate() + r * 7);
  }, function(t, r) {
    return (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Kf) / Xm;
  });
}
var Zm = Hi(0), qu = Hi(1), nx = Hi(2), rx = Hi(3), Zo = Hi(4), ax = Hi(5), ix = Hi(6);
Zm.range;
qu.range;
nx.range;
rx.range;
Zo.range;
ax.range;
ix.range;
var Xf = fa(function(e) {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, function(e, t) {
  e.setFullYear(e.getFullYear() + t);
}, function(e, t) {
  return t.getFullYear() - e.getFullYear();
}, function(e) {
  return e.getFullYear();
});
Xf.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : fa(function(t) {
    t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setFullYear(t.getFullYear() + r * e);
  });
};
const Es = Xf;
Xf.range;
var Qm = fa(function(e) {
  e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCDate(e.getUTCDate() + t);
}, function(e, t) {
  return (t - e) / Yf;
}, function(e) {
  return e.getUTCDate() - 1;
});
const Jm = Qm;
Qm.range;
function Wi(e) {
  return fa(function(t) {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, function(t, r) {
    return (r - t) / Xm;
  });
}
var eg = Wi(0), Gu = Wi(1), ox = Wi(2), lx = Wi(3), Qo = Wi(4), sx = Wi(5), ux = Wi(6);
eg.range;
Gu.range;
ox.range;
lx.range;
Qo.range;
sx.range;
ux.range;
var qf = fa(function(e) {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, function(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}, function(e) {
  return e.getUTCFullYear();
});
qf.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : fa(function(t) {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setUTCFullYear(t.getUTCFullYear() + r * e);
  });
};
const ks = qf;
qf.range;
function _d(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Nd(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function rs(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function cx(e) {
  var t = e.dateTime, r = e.date, n = e.time, a = e.periods, o = e.days, f = e.shortDays, s = e.months, c = e.shortMonths, d = as(a), g = is(a), y = as(o), v = is(o), E = as(f), k = is(f), M = as(s), T = is(s), m = as(c), D = is(c), L = {
    a: ce,
    A: he,
    b: ie,
    B: V,
    c: null,
    d: mp,
    e: mp,
    f: Mx,
    g: Vx,
    G: Ux,
    H: Lx,
    I: Dx,
    j: Ox,
    L: tg,
    m: _x,
    M: Nx,
    p: J,
    q: ne,
    Q: vp,
    s: xp,
    S: Fx,
    u: zx,
    U: $x,
    V: Bx,
    w: Ix,
    W: Hx,
    x: null,
    X: null,
    y: Wx,
    Y: jx,
    Z: Kx,
    "%": yp
  }, _ = {
    a: Ae,
    A: xe,
    b: Pe,
    B: le,
    c: null,
    d: gp,
    e: gp,
    f: Gx,
    g: ob,
    G: sb,
    H: Yx,
    I: Xx,
    j: qx,
    L: rg,
    m: Zx,
    M: Qx,
    p: _e,
    q: $e,
    Q: vp,
    s: xp,
    S: Jx,
    u: eb,
    U: tb,
    V: nb,
    w: rb,
    W: ab,
    x: null,
    X: null,
    y: ib,
    Y: lb,
    Z: ub,
    "%": yp
  }, N = {
    a: Z,
    A: re,
    b: K,
    B: q,
    c: me,
    d: hp,
    e: hp,
    f: Cx,
    g: fp,
    G: dp,
    H: pp,
    I: pp,
    j: Ex,
    L: Tx,
    m: Sx,
    M: kx,
    p: Y,
    q: bx,
    Q: Px,
    s: Rx,
    S: wx,
    u: mx,
    U: gx,
    V: yx,
    w: px,
    W: vx,
    x: W,
    X: se,
    y: fp,
    Y: dp,
    Z: xx,
    "%": Ax
  };
  L.x = R(r, L), L.X = R(n, L), L.c = R(t, L), _.x = R(r, _), _.X = R(n, _), _.c = R(t, _);
  function R(Te, ge) {
    return function(Re) {
      var oe = [], we = -1, Ce = 0, Be = Te.length, je, qe, ot;
      for (Re instanceof Date || (Re = /* @__PURE__ */ new Date(+Re)); ++we < Be; )
        Te.charCodeAt(we) === 37 && (oe.push(Te.slice(Ce, we)), (qe = cp[je = Te.charAt(++we)]) != null ? je = Te.charAt(++we) : qe = je === "e" ? " " : "0", (ot = ge[je]) && (je = ot(Re, qe)), oe.push(je), Ce = we + 1);
      return oe.push(Te.slice(Ce, we)), oe.join("");
    };
  }
  function U(Te, ge) {
    return function(Re) {
      var oe = rs(1900, void 0, 1), we = H(oe, Te, Re += "", 0), Ce, Be;
      if (we != Re.length)
        return null;
      if ("Q" in oe)
        return new Date(oe.Q);
      if ("s" in oe)
        return new Date(oe.s * 1e3 + ("L" in oe ? oe.L : 0));
      if (ge && !("Z" in oe) && (oe.Z = 0), "p" in oe && (oe.H = oe.H % 12 + oe.p * 12), oe.m === void 0 && (oe.m = "q" in oe ? oe.q : 0), "V" in oe) {
        if (oe.V < 1 || oe.V > 53)
          return null;
        "w" in oe || (oe.w = 1), "Z" in oe ? (Ce = Nd(rs(oe.y, 0, 1)), Be = Ce.getUTCDay(), Ce = Be > 4 || Be === 0 ? Gu.ceil(Ce) : Gu(Ce), Ce = Jm.offset(Ce, (oe.V - 1) * 7), oe.y = Ce.getUTCFullYear(), oe.m = Ce.getUTCMonth(), oe.d = Ce.getUTCDate() + (oe.w + 6) % 7) : (Ce = _d(rs(oe.y, 0, 1)), Be = Ce.getDay(), Ce = Be > 4 || Be === 0 ? qu.ceil(Ce) : qu(Ce), Ce = Gm.offset(Ce, (oe.V - 1) * 7), oe.y = Ce.getFullYear(), oe.m = Ce.getMonth(), oe.d = Ce.getDate() + (oe.w + 6) % 7);
      } else
        ("W" in oe || "U" in oe) && ("w" in oe || (oe.w = "u" in oe ? oe.u % 7 : "W" in oe ? 1 : 0), Be = "Z" in oe ? Nd(rs(oe.y, 0, 1)).getUTCDay() : _d(rs(oe.y, 0, 1)).getDay(), oe.m = 0, oe.d = "W" in oe ? (oe.w + 6) % 7 + oe.W * 7 - (Be + 5) % 7 : oe.w + oe.U * 7 - (Be + 6) % 7);
      return "Z" in oe ? (oe.H += oe.Z / 100 | 0, oe.M += oe.Z % 100, Nd(oe)) : _d(oe);
    };
  }
  function H(Te, ge, Re, oe) {
    for (var we = 0, Ce = ge.length, Be = Re.length, je, qe; we < Ce; ) {
      if (oe >= Be)
        return -1;
      if (je = ge.charCodeAt(we++), je === 37) {
        if (je = ge.charAt(we++), qe = N[je in cp ? ge.charAt(we++) : je], !qe || (oe = qe(Te, Re, oe)) < 0)
          return -1;
      } else if (je != Re.charCodeAt(oe++))
        return -1;
    }
    return oe;
  }
  function Y(Te, ge, Re) {
    var oe = d.exec(ge.slice(Re));
    return oe ? (Te.p = g.get(oe[0].toLowerCase()), Re + oe[0].length) : -1;
  }
  function Z(Te, ge, Re) {
    var oe = E.exec(ge.slice(Re));
    return oe ? (Te.w = k.get(oe[0].toLowerCase()), Re + oe[0].length) : -1;
  }
  function re(Te, ge, Re) {
    var oe = y.exec(ge.slice(Re));
    return oe ? (Te.w = v.get(oe[0].toLowerCase()), Re + oe[0].length) : -1;
  }
  function K(Te, ge, Re) {
    var oe = m.exec(ge.slice(Re));
    return oe ? (Te.m = D.get(oe[0].toLowerCase()), Re + oe[0].length) : -1;
  }
  function q(Te, ge, Re) {
    var oe = M.exec(ge.slice(Re));
    return oe ? (Te.m = T.get(oe[0].toLowerCase()), Re + oe[0].length) : -1;
  }
  function me(Te, ge, Re) {
    return H(Te, t, ge, Re);
  }
  function W(Te, ge, Re) {
    return H(Te, r, ge, Re);
  }
  function se(Te, ge, Re) {
    return H(Te, n, ge, Re);
  }
  function ce(Te) {
    return f[Te.getDay()];
  }
  function he(Te) {
    return o[Te.getDay()];
  }
  function ie(Te) {
    return c[Te.getMonth()];
  }
  function V(Te) {
    return s[Te.getMonth()];
  }
  function J(Te) {
    return a[+(Te.getHours() >= 12)];
  }
  function ne(Te) {
    return 1 + ~~(Te.getMonth() / 3);
  }
  function Ae(Te) {
    return f[Te.getUTCDay()];
  }
  function xe(Te) {
    return o[Te.getUTCDay()];
  }
  function Pe(Te) {
    return c[Te.getUTCMonth()];
  }
  function le(Te) {
    return s[Te.getUTCMonth()];
  }
  function _e(Te) {
    return a[+(Te.getUTCHours() >= 12)];
  }
  function $e(Te) {
    return 1 + ~~(Te.getUTCMonth() / 3);
  }
  return {
    format: function(Te) {
      var ge = R(Te += "", L);
      return ge.toString = function() {
        return Te;
      }, ge;
    },
    parse: function(Te) {
      var ge = U(Te += "", !1);
      return ge.toString = function() {
        return Te;
      }, ge;
    },
    utcFormat: function(Te) {
      var ge = R(Te += "", _);
      return ge.toString = function() {
        return Te;
      }, ge;
    },
    utcParse: function(Te) {
      var ge = U(Te += "", !0);
      return ge.toString = function() {
        return Te;
      }, ge;
    }
  };
}
var cp = { "-": "", _: " ", 0: "0" }, zn = /^\s*\d+/, dx = /^%/, fx = /[\\^$*+?|[\]().{}]/g;
function Kt(e, t, r) {
  var n = e < 0 ? "-" : "", a = (n ? -e : e) + "", o = a.length;
  return n + (o < r ? new Array(r - o + 1).join(t) + a : a);
}
function hx(e) {
  return e.replace(fx, "\\$&");
}
function as(e) {
  return new RegExp("^(?:" + e.map(hx).join("|") + ")", "i");
}
function is(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function px(e, t, r) {
  var n = zn.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function mx(e, t, r) {
  var n = zn.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function gx(e, t, r) {
  var n = zn.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function yx(e, t, r) {
  var n = zn.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function vx(e, t, r) {
  var n = zn.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function dp(e, t, r) {
  var n = zn.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function fp(e, t, r) {
  var n = zn.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function xx(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function bx(e, t, r) {
  var n = zn.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function Sx(e, t, r) {
  var n = zn.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function hp(e, t, r) {
  var n = zn.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function Ex(e, t, r) {
  var n = zn.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function pp(e, t, r) {
  var n = zn.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function kx(e, t, r) {
  var n = zn.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function wx(e, t, r) {
  var n = zn.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function Tx(e, t, r) {
  var n = zn.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function Cx(e, t, r) {
  var n = zn.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function Ax(e, t, r) {
  var n = dx.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function Px(e, t, r) {
  var n = zn.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function Rx(e, t, r) {
  var n = zn.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function mp(e, t) {
  return Kt(e.getDate(), t, 2);
}
function Lx(e, t) {
  return Kt(e.getHours(), t, 2);
}
function Dx(e, t) {
  return Kt(e.getHours() % 12 || 12, t, 2);
}
function Ox(e, t) {
  return Kt(1 + Gm.count(Es(e), e), t, 3);
}
function tg(e, t) {
  return Kt(e.getMilliseconds(), t, 3);
}
function Mx(e, t) {
  return tg(e, t) + "000";
}
function _x(e, t) {
  return Kt(e.getMonth() + 1, t, 2);
}
function Nx(e, t) {
  return Kt(e.getMinutes(), t, 2);
}
function Fx(e, t) {
  return Kt(e.getSeconds(), t, 2);
}
function zx(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function $x(e, t) {
  return Kt(Zm.count(Es(e) - 1, e), t, 2);
}
function ng(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Zo(e) : Zo.ceil(e);
}
function Bx(e, t) {
  return e = ng(e), Kt(Zo.count(Es(e), e) + (Es(e).getDay() === 4), t, 2);
}
function Ix(e) {
  return e.getDay();
}
function Hx(e, t) {
  return Kt(qu.count(Es(e) - 1, e), t, 2);
}
function Wx(e, t) {
  return Kt(e.getFullYear() % 100, t, 2);
}
function Vx(e, t) {
  return e = ng(e), Kt(e.getFullYear() % 100, t, 2);
}
function jx(e, t) {
  return Kt(e.getFullYear() % 1e4, t, 4);
}
function Ux(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Zo(e) : Zo.ceil(e), Kt(e.getFullYear() % 1e4, t, 4);
}
function Kx(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Kt(t / 60 | 0, "0", 2) + Kt(t % 60, "0", 2);
}
function gp(e, t) {
  return Kt(e.getUTCDate(), t, 2);
}
function Yx(e, t) {
  return Kt(e.getUTCHours(), t, 2);
}
function Xx(e, t) {
  return Kt(e.getUTCHours() % 12 || 12, t, 2);
}
function qx(e, t) {
  return Kt(1 + Jm.count(ks(e), e), t, 3);
}
function rg(e, t) {
  return Kt(e.getUTCMilliseconds(), t, 3);
}
function Gx(e, t) {
  return rg(e, t) + "000";
}
function Zx(e, t) {
  return Kt(e.getUTCMonth() + 1, t, 2);
}
function Qx(e, t) {
  return Kt(e.getUTCMinutes(), t, 2);
}
function Jx(e, t) {
  return Kt(e.getUTCSeconds(), t, 2);
}
function eb(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function tb(e, t) {
  return Kt(eg.count(ks(e) - 1, e), t, 2);
}
function ag(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Qo(e) : Qo.ceil(e);
}
function nb(e, t) {
  return e = ag(e), Kt(Qo.count(ks(e), e) + (ks(e).getUTCDay() === 4), t, 2);
}
function rb(e) {
  return e.getUTCDay();
}
function ab(e, t) {
  return Kt(Gu.count(ks(e) - 1, e), t, 2);
}
function ib(e, t) {
  return Kt(e.getUTCFullYear() % 100, t, 2);
}
function ob(e, t) {
  return e = ag(e), Kt(e.getUTCFullYear() % 100, t, 2);
}
function lb(e, t) {
  return Kt(e.getUTCFullYear() % 1e4, t, 4);
}
function sb(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Qo(e) : Qo.ceil(e), Kt(e.getUTCFullYear() % 1e4, t, 4);
}
function ub() {
  return "+0000";
}
function yp() {
  return "%";
}
function vp(e) {
  return +e;
}
function xp(e) {
  return Math.floor(+e / 1e3);
}
var Wo, tf, ig;
cb({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function cb(e) {
  return Wo = cx(e), tf = Wo.format, ig = Wo.parse, Wo.utcFormat, Wo.utcParse, Wo;
}
const xt = ue.createContext({}), Ft = {
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
    if (Ft.str(e) || Ft.num(e))
      return e === t;
    if (Ft.obj(e) && Ft.obj(t) && Object.keys(e).length + Object.keys(t).length === 0)
      return !0;
    let r;
    for (r in e)
      if (!(r in t))
        return !1;
    for (r in t)
      if (e[r] !== t[r])
        return !1;
    return Ft.und(r) ? e === t : !0;
  }
};
function db(e, t) {
  return t === void 0 && (t = !0), (r) => (Ft.arr(r) ? r : Object.keys(r)).reduce((n, a) => {
    const o = t ? a[0].toLowerCase() + a.substring(1) : a;
    return n[o] = e(o), n;
  }, e);
}
function og() {
  const e = ue.useState(!1), t = e[1];
  return ue.useCallback(() => t((n) => !n), []);
}
function Ai(e, t) {
  return Ft.und(e) || Ft.nul(e) ? t : e;
}
function Yo(e) {
  return Ft.und(e) ? [] : Ft.arr(e) ? e : [e];
}
function Dr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return Ft.fun(e) ? e(...r) : e;
}
function fb(e) {
  return e.to, e.from, e.config, e.onStart, e.onRest, e.onFrame, e.children, e.reset, e.reverse, e.force, e.immediate, e.delay, e.attach, e.destroyed, e.interpolateTo, e.ref, e.lazy, Xr(e, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);
}
function Fd(e) {
  const t = fb(e);
  if (Ft.und(t))
    return sn({
      to: t
    }, e);
  const r = Object.keys(e).reduce((n, a) => Ft.und(t[a]) ? sn({}, n, {
    [a]: e[a]
  }) : n, {});
  return sn({
    to: t
  }, r);
}
function hb(e, t) {
  return t && (Ft.fun(t) ? t(e) : Ft.obj(t) && (t.current = e)), e;
}
class Or {
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
class nf extends Or {
  constructor() {
    super(...arguments), this.payload = [], this.attach = () => this.payload.forEach((t) => t instanceof Or && t.addChild(this)), this.detach = () => this.payload.forEach((t) => t instanceof Or && t.removeChild(this));
  }
}
class lg extends Or {
  constructor() {
    super(...arguments), this.payload = {}, this.attach = () => Object.values(this.payload).forEach((t) => t instanceof Or && t.addChild(this)), this.detach = () => Object.values(this.payload).forEach((t) => t instanceof Or && t.removeChild(this));
  }
  getValue(t) {
    t === void 0 && (t = !1);
    const r = {};
    for (const n in this.payload) {
      const a = this.payload[n];
      t && !(a instanceof Or) || (r[n] = a instanceof Or ? a[t ? "getAnimatedValue" : "getValue"]() : a);
    }
    return r;
  }
  getAnimatedValue() {
    return this.getValue(!0);
  }
}
let Gf;
function pb(e, t) {
  Gf = {
    fn: e,
    transform: t
  };
}
let sg;
function mb(e) {
  sg = e;
}
let ug = (e) => typeof window < "u" ? window.requestAnimationFrame(e) : -1, Zu;
function gb(e) {
  Zu = e;
}
let cg = () => Date.now(), yb = (e) => e.current, dg;
function vb(e) {
  dg = e;
}
class xb extends lg {
  constructor(t, r) {
    super(), this.update = void 0, this.payload = t.style ? sn({}, t, {
      style: dg(t.style)
    }) : t, this.update = r, this.attach();
  }
}
const bb = (e) => Ft.fun(e) && !(e.prototype instanceof i.Component), Sb = (e) => ue.forwardRef((r, n) => {
  const a = og(), o = ue.useRef(!0), f = ue.useRef(null), s = ue.useRef(null), c = ue.useCallback((v) => {
    const E = f.current, k = () => {
      let M = !1;
      s.current && (M = Gf.fn(s.current, f.current.getAnimatedValue())), (!s.current || M === !1) && a();
    };
    f.current = new xb(v, k), E && E.detach();
  }, []);
  ue.useEffect(() => () => {
    o.current = !1, f.current && f.current.detach();
  }, []), ue.useImperativeHandle(n, () => yb(s)), c(r);
  const d = f.current.getValue();
  d.scrollTop, d.scrollLeft;
  const g = Xr(d, ["scrollTop", "scrollLeft"]), y = bb(e) ? void 0 : (v) => s.current = hb(v, n);
  return i.createElement(e, sn({}, g, {
    ref: y
  }));
});
let ds = !1;
const zi = /* @__PURE__ */ new Set(), fg = () => {
  if (!ds)
    return !1;
  let e = cg();
  for (let t of zi) {
    let r = !1;
    for (let n = 0; n < t.configs.length; n++) {
      let a = t.configs[n], o, f;
      for (let s = 0; s < a.animatedValues.length; s++) {
        let c = a.animatedValues[s];
        if (c.done)
          continue;
        let d = a.fromValues[s], g = a.toValues[s], y = c.lastPosition, v = g instanceof Or, E = Array.isArray(a.initialVelocity) ? a.initialVelocity[s] : a.initialVelocity;
        if (v && (g = g.getValue()), a.immediate) {
          c.setValue(g), c.done = !0;
          continue;
        }
        if (typeof d == "string" || typeof g == "string") {
          c.setValue(g), c.done = !0;
          continue;
        }
        if (a.duration !== void 0)
          y = d + a.easing((e - c.startTime) / a.duration) * (g - d), o = e >= c.startTime + a.duration;
        else if (a.decay)
          y = d + E / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (e - c.startTime))), o = Math.abs(c.lastPosition - y) < 0.1, o && (g = y);
        else {
          f = c.lastTime !== void 0 ? c.lastTime : e, E = c.lastVelocity !== void 0 ? c.lastVelocity : a.initialVelocity, e > f + 64 && (f = e);
          let k = Math.floor(e - f);
          for (let D = 0; D < k; ++D) {
            let L = -a.tension * (y - g), _ = -a.friction * E, N = (L + _) / a.mass;
            E = E + N * 1 / 1e3, y = y + E * 1 / 1e3;
          }
          let M = a.clamp && a.tension !== 0 ? d < g ? y > g : y < g : !1, T = Math.abs(E) <= a.precision, m = a.tension !== 0 ? Math.abs(g - y) <= a.precision : !0;
          o = M || T && m, c.lastVelocity = E, c.lastTime = e;
        }
        v && !a.toValues[s].done && (o = !1), o ? (c.value !== g && (y = g), c.done = !0) : r = !0, c.setValue(y), c.lastPosition = y;
      }
      t.props.onFrame && (t.values[a.name] = a.interpolation.getValue());
    }
    t.props.onFrame && t.props.onFrame(t.values), r || (zi.delete(t), t.stop(!0));
  }
  return zi.size ? ug(fg) : ds = !1, ds;
}, Eb = (e) => {
  zi.has(e) || zi.add(e), ds || (ds = !0, ug(fg));
}, kb = (e) => {
  zi.has(e) && zi.delete(e);
};
function Qu(e, t, r) {
  if (typeof e == "function")
    return e;
  if (Array.isArray(e))
    return Qu({
      range: e,
      output: t,
      extrapolate: r
    });
  if (Zu && typeof e.output[0] == "string")
    return Zu(e);
  const n = e, a = n.output, o = n.range || [0, 1], f = n.extrapolateLeft || n.extrapolate || "extend", s = n.extrapolateRight || n.extrapolate || "extend", c = n.easing || ((d) => d);
  return (d) => {
    const g = Tb(d, o);
    return wb(d, o[g], o[g + 1], a[g], a[g + 1], c, f, s, n.map);
  };
}
function wb(e, t, r, n, a, o, f, s, c) {
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
  return n === a ? n : t === r ? e <= t ? n : a : (t === -1 / 0 ? d = -d : r === 1 / 0 ? d = d - t : d = (d - t) / (r - t), d = o(d), n === -1 / 0 ? d = -d : a === 1 / 0 ? d = d + n : d = d * (a - n) + n, d);
}
function Tb(e, t) {
  for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r)
    ;
  return r - 1;
}
class Jo extends nf {
  constructor(t, r, n, a) {
    super(), this.calc = void 0, this.payload = t instanceof nf && !(t instanceof Jo) ? t.getPayload() : Array.isArray(t) ? t : [t], this.calc = Qu(r, n, a);
  }
  getValue() {
    return this.calc(...this.payload.map((t) => t.getValue()));
  }
  updateConfig(t, r, n) {
    this.calc = Qu(t, r, n);
  }
  interpolate(t, r, n) {
    return new Jo(this, t, r, n);
  }
}
const Cb = (e, t, r) => e && new Jo(e, t, r);
function hg(e, t) {
  "update" in e ? t.add(e) : e.getChildren().forEach((r) => hg(r, t));
}
class rf extends Or {
  constructor(t) {
    var r;
    super(), r = this, this.animatedStyles = /* @__PURE__ */ new Set(), this.value = void 0, this.startPosition = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.startTime = void 0, this.lastTime = void 0, this.done = !1, this.setValue = function(n, a) {
      a === void 0 && (a = !0), r.value = n, a && r.flush();
    }, this.value = t, this.startPosition = t, this.lastPosition = t;
  }
  flush() {
    this.animatedStyles.size === 0 && hg(this, this.animatedStyles), this.animatedStyles.forEach((t) => t.update());
  }
  clearStyles() {
    this.animatedStyles.clear();
  }
  getValue() {
    return this.value;
  }
  interpolate(t, r, n) {
    return new Jo(this, t, r, n);
  }
}
class Ab extends nf {
  constructor(t) {
    super(), this.payload = t.map((r) => new rf(r));
  }
  setValue(t, r) {
    r === void 0 && (r = !0), Array.isArray(t) ? t.length === this.payload.length && t.forEach((n, a) => this.payload[a].setValue(n, r)) : this.payload.forEach((n) => n.setValue(t, r));
  }
  getValue() {
    return this.payload.map((t) => t.getValue());
  }
  interpolate(t, r) {
    return new Jo(this, t, r);
  }
}
let Pb = 0;
class Rb {
  constructor() {
    this.id = void 0, this.idle = !0, this.hasChanged = !1, this.guid = 0, this.local = 0, this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.values = {}, this.configs = [], this.listeners = [], this.queue = [], this.localQueue = void 0, this.getValues = () => this.interpolations, this.id = Pb++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */
  update(t) {
    if (!t)
      return this;
    const r = Fd(t), n = r.delay, a = n === void 0 ? 0 : n, o = r.to, f = Xr(r, ["delay", "to"]);
    if (Ft.arr(o) || Ft.fun(o))
      this.queue.push(sn({}, f, {
        delay: a,
        to: o
      }));
    else if (o) {
      let s = {};
      Object.entries(o).forEach((c) => {
        let d = c[0], g = c[1];
        const y = sn({
          to: {
            [d]: g
          },
          delay: Dr(a, d)
        }, f), v = s[y.delay] && s[y.delay].to;
        s[y.delay] = sn({}, s[y.delay], y, {
          to: sn({}, v, y.to)
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
        let o = a.from, f = o === void 0 ? {} : o, s = a.to, c = s === void 0 ? {} : s;
        Ft.obj(f) && (this.merged = sn({}, f, this.merged)), Ft.obj(c) && (this.merged = sn({}, this.merged, c));
      });
      const r = this.local = ++this.guid, n = this.localQueue = this.queue;
      this.queue = [], n.forEach((a, o) => {
        let f = a.delay, s = Xr(a, ["delay"]);
        const c = (g) => {
          o === n.length - 1 && r === this.guid && g && (this.idle = !0, this.props.onRest && this.props.onRest(this.merged)), t && t();
        };
        let d = Ft.arr(s.to) || Ft.fun(s.to);
        f ? setTimeout(() => {
          r === this.guid && (d ? this.runAsync(s, c) : this.diff(s).start(c));
        }, f) : d ? this.runAsync(s, c) : this.diff(s).start(c);
      });
    } else
      Ft.fun(t) && this.listeners.push(t), this.props.onStart && this.props.onStart(), Eb(this);
    return this;
  }
  stop(t) {
    return this.listeners.forEach((r) => r(t)), this.listeners = [], this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */
  pause(t) {
    return this.stop(!0), t && kb(this), this;
  }
  runAsync(t, r) {
    var n = this;
    t.delay;
    let a = Xr(t, ["delay"]);
    const o = this.local;
    let f = Promise.resolve(void 0);
    if (Ft.arr(a.to))
      for (let s = 0; s < a.to.length; s++) {
        const c = s, d = sn({}, a, Fd(a.to[c]));
        Ft.arr(d.config) && (d.config = d.config[c]), f = f.then(() => {
          if (o === this.guid)
            return new Promise((g) => this.diff(d).start(g));
        });
      }
    else if (Ft.fun(a.to)) {
      let s = 0, c;
      f = f.then(() => a.to(
        // next(props)
        (d) => {
          const g = sn({}, a, Fd(d));
          if (Ft.arr(g.config) && (g.config = g.config[s]), s++, o === this.guid)
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
    this.props = sn({}, this.props, t);
    let r = this.props, n = r.from, a = n === void 0 ? {} : n, o = r.to, f = o === void 0 ? {} : o, s = r.config, c = s === void 0 ? {} : s, d = r.reverse, g = r.attach, y = r.reset, v = r.immediate;
    if (d) {
      var E = [f, a];
      a = E[0], f = E[1];
    }
    this.merged = sn({}, a, this.merged, f), this.hasChanged = !1;
    let k = g && g(this);
    if (this.animations = Object.entries(this.merged).reduce((M, T) => {
      let m = T[0], D = T[1], L = M[m] || {};
      const _ = Ft.num(D), N = Ft.str(D) && !D.startsWith("#") && !/\d/.test(D) && !sg[D], R = Ft.arr(D), U = !_ && !R && !N;
      let H = Ft.und(a[m]) ? D : a[m], Y = _ || R || N ? D : 1, Z = Dr(c, m);
      k && (Y = k.animations[m].parent);
      let re = L.parent, K = L.interpolation, q = Yo(k ? Y.getPayload() : Y), me, W = D;
      U && (W = Zu({
        range: [0, 1],
        output: [D, D]
      })(1));
      let se = K && K.getValue();
      const he = !Ft.und(re) && L.animatedValues.some((ne) => !ne.done), ie = !Ft.equ(W, se), V = !Ft.equ(W, L.previous), J = !Ft.equ(Z, L.config);
      if (y || V && ie || J) {
        if (_ || N)
          re = K = L.parent || new rf(H);
        else if (R)
          re = K = L.parent || new Ab(H);
        else if (U) {
          let ne = L.interpolation && L.interpolation.calc(L.parent.value);
          ne = ne !== void 0 && !y ? ne : H, L.parent ? (re = L.parent, re.setValue(0, !1)) : re = new rf(0);
          const Ae = {
            output: [ne, D]
          };
          L.interpolation ? (K = L.interpolation, L.interpolation.updateConfig(Ae)) : K = re.interpolate(Ae);
        }
        return q = Yo(k ? Y.getPayload() : Y), me = Yo(re.getPayload()), y && !U && re.setValue(H, !1), this.hasChanged = !0, me.forEach((ne) => {
          ne.startPosition = ne.value, ne.lastPosition = ne.value, ne.lastVelocity = he ? ne.lastVelocity : void 0, ne.lastTime = he ? ne.lastTime : void 0, ne.startTime = cg(), ne.done = !1, ne.animatedStyles.clear();
        }), Dr(v, m) && re.setValue(U ? Y : D, !1), sn({}, M, {
          [m]: sn({}, L, {
            name: m,
            parent: re,
            interpolation: K,
            animatedValues: me,
            toValues: q,
            previous: W,
            config: Z,
            fromValues: Yo(re.getValue()),
            immediate: Dr(v, m),
            initialVelocity: Ai(Z.velocity, 0),
            clamp: Ai(Z.clamp, !1),
            precision: Ai(Z.precision, 0.01),
            tension: Ai(Z.tension, 170),
            friction: Ai(Z.friction, 26),
            mass: Ai(Z.mass, 1),
            duration: Z.duration,
            easing: Ai(Z.easing, (ne) => ne),
            decay: Z.decay
          })
        });
      } else
        return ie ? M : (U && (re.setValue(1, !1), K.updateConfig({
          output: [W, W]
        })), re.done = !0, this.hasChanged = !0, sn({}, M, {
          [m]: sn({}, M[m], {
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
let Lb = 0;
const Bu = "enter", zd = "leave", $d = "update", Db = (e, t) => (typeof t == "function" ? e.map(t) : Yo(t)).map(String), af = (e) => {
  let t = e.items, r = e.keys, n = r === void 0 ? (o) => o : r, a = Xr(e, ["items", "keys"]);
  return t = Yo(t !== void 0 ? t : null), sn({
    items: t,
    keys: Db(t, n)
  }, a);
};
function Ob(e, t, r) {
  const n = sn({
    items: e,
    keys: t || ((D) => D)
  }, r), a = af(n), o = a.lazy, f = o === void 0 ? !1 : o;
  a.unique;
  const s = a.reset, c = s === void 0 ? !1 : s;
  a.enter, a.leave, a.update;
  const d = a.onDestroyed;
  a.keys, a.items;
  const g = a.onFrame, y = a.onRest, v = a.onStart, E = a.ref, k = Xr(a, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]), M = og(), T = ue.useRef(!1), m = ue.useRef({
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
  return ue.useImperativeHandle(n.ref, () => ({
    start: () => Promise.all(Array.from(m.current.instances).map((D) => {
      let L = D[1];
      return new Promise((_) => L.start(_));
    })),
    stop: (D) => Array.from(m.current.instances).forEach((L) => L[1].stop(D)),
    get controllers() {
      return Array.from(m.current.instances).map((D) => D[1]);
    }
  })), m.current = Mb(m.current, n), m.current.changed && m.current.transitions.forEach((D) => {
    const L = D.slot, _ = D.from, N = D.to, R = D.config, U = D.trail, H = D.key, Y = D.item;
    m.current.instances.has(H) || m.current.instances.set(H, new Rb());
    const Z = m.current.instances.get(H), re = sn({}, k, {
      to: N,
      from: _,
      config: R,
      ref: E,
      onRest: (K) => {
        m.current.mounted && (D.destroyed && (!E && !f && bp(m, H), d && d(Y)), !Array.from(m.current.instances).some((W) => !W[1].idle) && (E || f) && m.current.deleted.length > 0 && bp(m), y && y(Y, L, K));
      },
      onStart: v && (() => v(Y, L)),
      onFrame: g && ((K) => g(Y, L, K)),
      delay: U,
      reset: c && L === Bu
      // Update controller
    });
    Z.update(re), m.current.paused || Z.start();
  }), ue.useEffect(() => (m.current.mounted = T.current = !0, () => {
    m.current.mounted = T.current = !1, Array.from(m.current.instances).map((D) => D[1].destroy()), m.current.instances.clear();
  }), []), m.current.transitions.map((D) => {
    let L = D.item, _ = D.slot, N = D.key;
    return {
      item: L,
      key: N,
      state: _,
      props: m.current.instances.get(N).getValues()
    };
  });
}
function bp(e, t) {
  const r = e.current.deleted;
  for (let n of r) {
    let a = n.key;
    const o = (f) => f.key !== a;
    (Ft.und(t) || t === a) && (e.current.instances.delete(a), e.current.transitions = e.current.transitions.filter(o), e.current.deleted = e.current.deleted.filter(o));
  }
  e.current.forceUpdate();
}
function Mb(e, t) {
  let r = e.first, n = e.prevProps, a = Xr(e, ["first", "prevProps"]), o = af(t), f = o.items, s = o.keys, c = o.initial, d = o.from, g = o.enter, y = o.leave, v = o.update, E = o.trail, k = E === void 0 ? 0 : E, M = o.unique, T = o.config, m = o.order, D = m === void 0 ? [Bu, zd, $d] : m, L = af(n), _ = L.keys, N = L.items, R = sn({}, a.current), U = [...a.deleted], H = Object.keys(R), Y = new Set(H), Z = new Set(s), re = s.filter((se) => !Y.has(se)), K = a.transitions.filter((se) => !se.destroyed && !Z.has(se.originalKey)).map((se) => se.originalKey), q = s.filter((se) => Y.has(se)), me = -k;
  for (; D.length; )
    switch (D.shift()) {
      case Bu: {
        re.forEach((ce, he) => {
          M && U.find((ne) => ne.originalKey === ce) && (U = U.filter((ne) => ne.originalKey !== ce));
          const ie = s.indexOf(ce), V = f[ie], J = r && c !== void 0 ? "initial" : Bu;
          R[ce] = {
            slot: J,
            originalKey: ce,
            key: M ? String(ce) : Lb++,
            item: V,
            trail: me = me + k,
            config: Dr(T, V, J),
            from: Dr(r && c !== void 0 ? c || {} : d, V),
            to: Dr(g, V)
          };
        });
        break;
      }
      case zd: {
        K.forEach((ce) => {
          const he = _.indexOf(ce), ie = N[he], V = zd;
          U.unshift(sn({}, R[ce], {
            slot: V,
            destroyed: !0,
            left: _[Math.max(0, he - 1)],
            right: _[Math.min(_.length, he + 1)],
            trail: me = me + k,
            config: Dr(T, ie, V),
            to: Dr(y, ie)
          })), delete R[ce];
        });
        break;
      }
      case $d: {
        q.forEach((ce) => {
          const he = s.indexOf(ce), ie = f[he], V = $d;
          R[ce] = sn({}, R[ce], {
            item: ie,
            slot: V,
            trail: me = me + k,
            config: Dr(T, ie, V),
            to: Dr(v, ie)
          });
        });
        break;
      }
    }
  let W = s.map((se) => R[se]);
  return U.forEach((se) => {
    let ce = se.left;
    se.right;
    let he = Xr(se, ["left", "right"]), ie;
    (ie = W.findIndex((V) => V.originalKey === ce)) !== -1 && (ie += 1), ie = Math.max(0, ie), W = [...W.slice(0, ie), he, ...W.slice(ie)];
  }), sn({}, a, {
    changed: re.length || K.length || q.length,
    first: r && re.length === 0,
    transitions: W,
    current: R,
    deleted: U,
    prevProps: t
  });
}
class _b extends lg {
  constructor(t) {
    t === void 0 && (t = {}), super(), t.transform && !(t.transform instanceof Or) && (t = Gf.transform(t)), this.payload = t;
  }
}
const Ju = {
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
}, Mr = "[-+]?\\d*\\.?\\d+", ec = Mr + "%";
function kc() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const Nb = new RegExp("rgb" + kc(Mr, Mr, Mr)), Fb = new RegExp("rgba" + kc(Mr, Mr, Mr, Mr)), zb = new RegExp("hsl" + kc(Mr, ec, ec)), $b = new RegExp("hsla" + kc(Mr, ec, ec, Mr)), Bb = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Ib = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Hb = /^#([0-9a-fA-F]{6})$/, Wb = /^#([0-9a-fA-F]{8})$/;
function Vb(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Hb.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Ju.hasOwnProperty(e) ? Ju[e] : (t = Nb.exec(e)) ? (Vo(t[1]) << 24 | // r
  Vo(t[2]) << 16 | // g
  Vo(t[3]) << 8 | // b
  255) >>> // a
  0 : (t = Fb.exec(e)) ? (Vo(t[1]) << 24 | // r
  Vo(t[2]) << 16 | // g
  Vo(t[3]) << 8 | // b
  kp(t[4])) >>> // a
  0 : (t = Bb.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (t = Wb.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Ib.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    t[4] + t[4],
    // a
    16
  ) >>> 0 : (t = zb.exec(e)) ? (Sp(
    Ep(t[1]),
    // h
    Cu(t[2]),
    // s
    Cu(t[3])
    // l
  ) | 255) >>> // a
  0 : (t = $b.exec(e)) ? (Sp(
    Ep(t[1]),
    // h
    Cu(t[2]),
    // s
    Cu(t[3])
    // l
  ) | kp(t[4])) >>> // a
  0 : null;
}
function Bd(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function Sp(e, t, r) {
  const n = r < 0.5 ? r * (1 + t) : r + t - r * t, a = 2 * r - n, o = Bd(a, n, e + 1 / 3), f = Bd(a, n, e), s = Bd(a, n, e - 1 / 3);
  return Math.round(o * 255) << 24 | Math.round(f * 255) << 16 | Math.round(s * 255) << 8;
}
function Vo(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Ep(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function kp(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function Cu(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function wp(e) {
  let t = Vb(e);
  if (t === null)
    return e;
  t = t || 0;
  let r = (t & 4278190080) >>> 24, n = (t & 16711680) >>> 16, a = (t & 65280) >>> 8, o = (t & 255) / 255;
  return `rgba(${r}, ${n}, ${a}, ${o})`;
}
const Au = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, jb = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, Ub = new RegExp(`(${Object.keys(Ju).join("|")})`, "g"), Kb = (e) => {
  const t = e.output.map((a) => a.replace(jb, wp)).map((a) => a.replace(Ub, wp)), r = t[0].match(Au).map(() => []);
  t.forEach((a) => {
    a.match(Au).forEach((o, f) => r[f].push(+o));
  });
  const n = t[0].match(Au).map((a, o) => Qu(sn({}, e, {
    output: r[o]
  })));
  return (a) => {
    let o = 0;
    return t[0].replace(Au, () => n[o++](a)).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (f, s, c, d, g) => `rgba(${Math.round(s)}, ${Math.round(c)}, ${Math.round(d)}, ${g})`);
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
const Yb = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), Xb = ["Webkit", "Ms", "Moz", "O"];
fs = Object.keys(fs).reduce((e, t) => (Xb.forEach((r) => e[Yb(r, t)] = e[t]), e), fs);
function qb(e, t, r) {
  return t == null || typeof t == "boolean" || t === "" ? "" : !r && typeof t == "number" && t !== 0 && !(fs.hasOwnProperty(e) && fs[e]) ? t + "px" : ("" + t).trim();
}
const Tp = {};
vb((e) => new _b(e));
gb(Kb);
mb(Ju);
pb((e, t) => {
  if (e.nodeType && e.setAttribute !== void 0) {
    const a = t.style, o = t.children, f = t.scrollTop, s = t.scrollLeft, c = Xr(t, ["style", "children", "scrollTop", "scrollLeft"]), d = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter";
    f !== void 0 && (e.scrollTop = f), s !== void 0 && (e.scrollLeft = s), o !== void 0 && (e.textContent = o);
    for (let g in a)
      if (a.hasOwnProperty(g)) {
        var r = g.indexOf("--") === 0, n = qb(g, a[g], r);
        g === "float" && (g = "cssFloat"), r ? e.style.setProperty(g, n) : e.style[g] = n;
      }
    for (let g in c) {
      const y = d ? g : Tp[g] || (Tp[g] = g.replace(/([A-Z])/g, (v) => "-" + v.toLowerCase()));
      typeof e.getAttribute(y) < "u" && e.setAttribute(y, c[g]);
    }
    return;
  } else
    return !1;
}, (e) => e);
const Gb = [
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
], Zb = db(Sb, !1), Cp = Zb(Gb);
function Qb(e) {
  return e.innerRadius;
}
function Jb(e) {
  return e.outerRadius;
}
function e0(e) {
  return e.startAngle;
}
function t0(e) {
  return e.endAngle;
}
function n0(e) {
  return e && e.padAngle;
}
function r0(e, t, r, n, a, o, f, s) {
  var c = r - e, d = n - t, g = f - a, y = s - o, v = y * c - g * d;
  if (!(v * v < Vn))
    return v = (g * (t - o) - y * (e - a)) / v, [e + v * c, t + v * d];
}
function Pu(e, t, r, n, a, o, f) {
  var s = e - r, c = t - n, d = (f ? o : -o) / Uo(s * s + c * c), g = d * c, y = -d * s, v = e + g, E = t + y, k = r + g, M = n + y, T = (v + k) / 2, m = (E + M) / 2, D = k - v, L = M - E, _ = D * D + L * L, N = a - o, R = v * M - k * E, U = (L < 0 ? -1 : 1) * Uo(Cy(0, N * N * _ - R * R)), H = (R * L - D * U) / _, Y = (-R * D - L * U) / _, Z = (R * L + D * U) / _, re = (-R * D + L * U) / _, K = H - T, q = Y - m, me = Z - T, W = re - m;
  return K * K + q * q > me * me + W * W && (H = Z, Y = re), {
    cx: H,
    cy: Y,
    x01: -g,
    y01: -y,
    x11: H * (a / N - 1),
    y11: Y * (a / N - 1)
  };
}
function a0() {
  var e = Qb, t = Jb, r = It(0), n = null, a = e0, o = t0, f = n0, s = null;
  function c() {
    var d, g, y = +e.apply(this, arguments), v = +t.apply(this, arguments), E = a.apply(this, arguments) - Fh, k = o.apply(this, arguments) - Fh, M = zh(k - E), T = k > E;
    if (s || (s = d = Sc()), v < y && (g = v, v = y, y = g), !(v > Vn))
      s.moveTo(0, 0);
    else if (M > zu - Vn)
      s.moveTo(v * Ti(E), v * Wr(E)), s.arc(0, 0, v, E, k, !T), y > Vn && (s.moveTo(y * Ti(k), y * Wr(k)), s.arc(0, 0, y, k, E, T));
    else {
      var m = E, D = k, L = E, _ = k, N = M, R = M, U = f.apply(this, arguments) / 2, H = U > Vn && (n ? +n.apply(this, arguments) : Uo(y * y + v * v)), Y = Ad(zh(v - y) / 2, +r.apply(this, arguments)), Z = Y, re = Y, K, q;
      if (H > Vn) {
        var me = $h(H / y * Wr(U)), W = $h(H / v * Wr(U));
        (N -= me * 2) > Vn ? (me *= T ? 1 : -1, L += me, _ -= me) : (N = 0, L = _ = (E + k) / 2), (R -= W * 2) > Vn ? (W *= T ? 1 : -1, m += W, D -= W) : (R = 0, m = D = (E + k) / 2);
      }
      var se = v * Ti(m), ce = v * Wr(m), he = y * Ti(_), ie = y * Wr(_);
      if (Y > Vn) {
        var V = v * Ti(D), J = v * Wr(D), ne = y * Ti(L), Ae = y * Wr(L), xe;
        if (M < Nh && (xe = r0(se, ce, ne, Ae, V, J, he, ie))) {
          var Pe = se - xe[0], le = ce - xe[1], _e = V - xe[0], $e = J - xe[1], Te = 1 / Wr(Ty((Pe * _e + le * $e) / (Uo(Pe * Pe + le * le) * Uo(_e * _e + $e * $e))) / 2), ge = Uo(xe[0] * xe[0] + xe[1] * xe[1]);
          Z = Ad(Y, (y - ge) / (Te - 1)), re = Ad(Y, (v - ge) / (Te + 1));
        }
      }
      R > Vn ? re > Vn ? (K = Pu(ne, Ae, se, ce, v, re, T), q = Pu(V, J, he, ie, v, re, T), s.moveTo(K.cx + K.x01, K.cy + K.y01), re < Y ? s.arc(K.cx, K.cy, re, Wn(K.y01, K.x01), Wn(q.y01, q.x01), !T) : (s.arc(K.cx, K.cy, re, Wn(K.y01, K.x01), Wn(K.y11, K.x11), !T), s.arc(0, 0, v, Wn(K.cy + K.y11, K.cx + K.x11), Wn(q.cy + q.y11, q.cx + q.x11), !T), s.arc(q.cx, q.cy, re, Wn(q.y11, q.x11), Wn(q.y01, q.x01), !T))) : (s.moveTo(se, ce), s.arc(0, 0, v, m, D, !T)) : s.moveTo(se, ce), !(y > Vn) || !(N > Vn) ? s.lineTo(he, ie) : Z > Vn ? (K = Pu(he, ie, V, J, y, -Z, T), q = Pu(se, ce, ne, Ae, y, -Z, T), s.lineTo(K.cx + K.x01, K.cy + K.y01), Z < Y ? s.arc(K.cx, K.cy, Z, Wn(K.y01, K.x01), Wn(q.y01, q.x01), !T) : (s.arc(K.cx, K.cy, Z, Wn(K.y01, K.x01), Wn(K.y11, K.x11), !T), s.arc(0, 0, y, Wn(K.cy + K.y11, K.cx + K.x11), Wn(q.cy + q.y11, q.cx + q.x11), T), s.arc(q.cx, q.cy, Z, Wn(q.y11, q.x11), Wn(q.y01, q.x01), !T))) : s.arc(0, 0, y, _, L, T);
    }
    if (s.closePath(), d)
      return s = null, d + "" || null;
  }
  return c.centroid = function() {
    var d = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, g = (+a.apply(this, arguments) + +o.apply(this, arguments)) / 2 - Nh / 2;
    return [Ti(g) * d, Wr(g) * d];
  }, c.innerRadius = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : It(+d), c) : e;
  }, c.outerRadius = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : It(+d), c) : t;
  }, c.cornerRadius = function(d) {
    return arguments.length ? (r = typeof d == "function" ? d : It(+d), c) : r;
  }, c.padRadius = function(d) {
    return arguments.length ? (n = d == null ? null : typeof d == "function" ? d : It(+d), c) : n;
  }, c.startAngle = function(d) {
    return arguments.length ? (a = typeof d == "function" ? d : It(+d), c) : a;
  }, c.endAngle = function(d) {
    return arguments.length ? (o = typeof d == "function" ? d : It(+d), c) : o;
  }, c.padAngle = function(d) {
    return arguments.length ? (f = typeof d == "function" ? d : It(+d), c) : f;
  }, c.context = function(d) {
    return arguments.length ? (s = d ?? null, c) : s;
  }, c;
}
function pg(e) {
  this._context = e;
}
pg.prototype = {
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
function wc(e) {
  return new pg(e);
}
function Zf(e) {
  return e[0];
}
function Qf(e) {
  return e[1];
}
function mg() {
  var e = Zf, t = Qf, r = It(!0), n = null, a = wc, o = null;
  function f(s) {
    var c, d = s.length, g, y = !1, v;
    for (n == null && (o = a(v = Sc())), c = 0; c <= d; ++c)
      !(c < d && r(g = s[c], c, s)) === y && ((y = !y) ? o.lineStart() : o.lineEnd()), y && o.point(+e(g, c, s), +t(g, c, s));
    if (v)
      return o = null, v + "" || null;
  }
  return f.x = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : It(+s), f) : e;
  }, f.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : It(+s), f) : t;
  }, f.defined = function(s) {
    return arguments.length ? (r = typeof s == "function" ? s : It(!!s), f) : r;
  }, f.curve = function(s) {
    return arguments.length ? (a = s, n != null && (o = a(n)), f) : a;
  }, f.context = function(s) {
    return arguments.length ? (s == null ? n = o = null : o = a(n = s), f) : n;
  }, f;
}
function i0() {
  var e = Zf, t = null, r = It(0), n = Qf, a = It(!0), o = null, f = wc, s = null;
  function c(g) {
    var y, v, E, k = g.length, M, T = !1, m, D = new Array(k), L = new Array(k);
    for (o == null && (s = f(m = Sc())), y = 0; y <= k; ++y) {
      if (!(y < k && a(M = g[y], y, g)) === T)
        if (T = !T)
          v = y, s.areaStart(), s.lineStart();
        else {
          for (s.lineEnd(), s.lineStart(), E = y - 1; E >= v; --E)
            s.point(D[E], L[E]);
          s.lineEnd(), s.areaEnd();
        }
      T && (D[y] = +e(M, y, g), L[y] = +r(M, y, g), s.point(t ? +t(M, y, g) : D[y], n ? +n(M, y, g) : L[y]));
    }
    if (m)
      return s = null, m + "" || null;
  }
  function d() {
    return mg().defined(a).curve(f).context(o);
  }
  return c.x = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : It(+g), t = null, c) : e;
  }, c.x0 = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : It(+g), c) : e;
  }, c.x1 = function(g) {
    return arguments.length ? (t = g == null ? null : typeof g == "function" ? g : It(+g), c) : t;
  }, c.y = function(g) {
    return arguments.length ? (r = typeof g == "function" ? g : It(+g), n = null, c) : r;
  }, c.y0 = function(g) {
    return arguments.length ? (r = typeof g == "function" ? g : It(+g), c) : r;
  }, c.y1 = function(g) {
    return arguments.length ? (n = g == null ? null : typeof g == "function" ? g : It(+g), c) : n;
  }, c.lineX0 = c.lineY0 = function() {
    return d().x(e).y(r);
  }, c.lineY1 = function() {
    return d().x(e).y(n);
  }, c.lineX1 = function() {
    return d().x(t).y(r);
  }, c.defined = function(g) {
    return arguments.length ? (a = typeof g == "function" ? g : It(!!g), c) : a;
  }, c.curve = function(g) {
    return arguments.length ? (f = g, o != null && (s = f(o)), c) : f;
  }, c.context = function(g) {
    return arguments.length ? (g == null ? o = s = null : s = f(o = g), c) : o;
  }, c;
}
function o0(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function l0(e) {
  return e;
}
function s0() {
  var e = l0, t = o0, r = null, n = It(0), a = It(zu), o = It(0);
  function f(s) {
    var c, d = s.length, g, y, v = 0, E = new Array(d), k = new Array(d), M = +n.apply(this, arguments), T = Math.min(zu, Math.max(-zu, a.apply(this, arguments) - M)), m, D = Math.min(Math.abs(T) / d, o.apply(this, arguments)), L = D * (T < 0 ? -1 : 1), _;
    for (c = 0; c < d; ++c)
      (_ = k[E[c] = c] = +e(s[c], c, s)) > 0 && (v += _);
    for (t != null ? E.sort(function(N, R) {
      return t(k[N], k[R]);
    }) : r != null && E.sort(function(N, R) {
      return r(s[N], s[R]);
    }), c = 0, y = v ? (T - d * L) / v : 0; c < d; ++c, M = m)
      g = E[c], _ = k[g], m = M + (_ > 0 ? _ * y : 0) + L, k[g] = {
        data: s[g],
        index: c,
        value: _,
        startAngle: M,
        endAngle: m,
        padAngle: D
      };
    return k;
  }
  return f.value = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : It(+s), f) : e;
  }, f.sortValues = function(s) {
    return arguments.length ? (t = s, r = null, f) : t;
  }, f.sort = function(s) {
    return arguments.length ? (r = s, t = null, f) : r;
  }, f.startAngle = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : It(+s), f) : n;
  }, f.endAngle = function(s) {
    return arguments.length ? (a = typeof s == "function" ? s : It(+s), f) : a;
  }, f.padAngle = function(s) {
    return arguments.length ? (o = typeof s == "function" ? s : It(+s), f) : o;
  }, f;
}
var of = Array.prototype.slice;
function u0(e) {
  return e.source;
}
function c0(e) {
  return e.target;
}
function d0(e) {
  var t = u0, r = c0, n = Zf, a = Qf, o = null;
  function f() {
    var s, c = of.call(arguments), d = t.apply(this, c), g = r.apply(this, c);
    if (o || (o = s = Sc()), e(o, +n.apply(this, (c[0] = d, c)), +a.apply(this, c), +n.apply(this, (c[0] = g, c)), +a.apply(this, c)), s)
      return o = null, s + "" || null;
  }
  return f.source = function(s) {
    return arguments.length ? (t = s, f) : t;
  }, f.target = function(s) {
    return arguments.length ? (r = s, f) : r;
  }, f.x = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : It(+s), f) : n;
  }, f.y = function(s) {
    return arguments.length ? (a = typeof s == "function" ? s : It(+s), f) : a;
  }, f.context = function(s) {
    return arguments.length ? (o = s ?? null, f) : o;
  }, f;
}
function f0(e, t, r, n, a) {
  e.moveTo(t, r), e.bezierCurveTo(t = (t + n) / 2, r, t, a, n, a);
}
function h0() {
  return d0(f0);
}
function Wa() {
}
function tc(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function Tc(e) {
  this._context = e;
}
Tc.prototype = {
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
        tc(this, this._x1, this._y1);
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
        tc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function p0(e) {
  return new Tc(e);
}
function gg(e) {
  this._context = e;
}
gg.prototype = {
  areaStart: Wa,
  areaEnd: Wa,
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
        tc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function m0(e) {
  return new gg(e);
}
function yg(e) {
  this._context = e;
}
yg.prototype = {
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
        tc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function g0(e) {
  return new yg(e);
}
function vg(e, t) {
  this._basis = new Tc(e), this._beta = t;
}
vg.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length - 1;
    if (r > 0)
      for (var n = e[0], a = t[0], o = e[r] - n, f = t[r] - a, s = -1, c; ++s <= r; )
        c = s / r, this._basis.point(
          this._beta * e[s] + (1 - this._beta) * (n + c * o),
          this._beta * t[s] + (1 - this._beta) * (a + c * f)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
const y0 = function e(t) {
  function r(n) {
    return t === 1 ? new Tc(n) : new vg(n, t);
  }
  return r.beta = function(n) {
    return e(+n);
  }, r;
}(0.85);
function nc(e, t, r) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - r),
    e._x2,
    e._y2
  );
}
function Jf(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Jf.prototype = {
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
        nc(this, this._x1, this._y1);
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
        nc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const v0 = function e(t) {
  function r(n) {
    return new Jf(n, t);
  }
  return r.tension = function(n) {
    return e(+n);
  }, r;
}(0);
function eh(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
eh.prototype = {
  areaStart: Wa,
  areaEnd: Wa,
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
        nc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const x0 = function e(t) {
  function r(n) {
    return new eh(n, t);
  }
  return r.tension = function(n) {
    return e(+n);
  }, r;
}(0);
function th(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
th.prototype = {
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
        nc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const b0 = function e(t) {
  function r(n) {
    return new th(n, t);
  }
  return r.tension = function(n) {
    return e(+n);
  }, r;
}(0);
function nh(e, t, r) {
  var n = e._x1, a = e._y1, o = e._x2, f = e._y2;
  if (e._l01_a > Vn) {
    var s = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, c = 3 * e._l01_a * (e._l01_a + e._l12_a);
    n = (n * s - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / c, a = (a * s - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / c;
  }
  if (e._l23_a > Vn) {
    var d = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, g = 3 * e._l23_a * (e._l23_a + e._l12_a);
    o = (o * d + e._x1 * e._l23_2a - t * e._l12_2a) / g, f = (f * d + e._y1 * e._l23_2a - r * e._l12_2a) / g;
  }
  e._context.bezierCurveTo(n, a, o, f, e._x2, e._y2);
}
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
        nh(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const S0 = function e(t) {
  function r(n) {
    return t ? new xg(n, t) : new Jf(n, 0);
  }
  return r.alpha = function(n) {
    return e(+n);
  }, r;
}(0.5);
function bg(e, t) {
  this._context = e, this._alpha = t;
}
bg.prototype = {
  areaStart: Wa,
  areaEnd: Wa,
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
        nh(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const E0 = function e(t) {
  function r(n) {
    return t ? new bg(n, t) : new eh(n, 0);
  }
  return r.alpha = function(n) {
    return e(+n);
  }, r;
}(0.5);
function Sg(e, t) {
  this._context = e, this._alpha = t;
}
Sg.prototype = {
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
        nh(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const k0 = function e(t) {
  function r(n) {
    return t ? new Sg(n, t) : new th(n, 0);
  }
  return r.alpha = function(n) {
    return e(+n);
  }, r;
}(0.5);
function Eg(e) {
  this._context = e;
}
Eg.prototype = {
  areaStart: Wa,
  areaEnd: Wa,
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
function lf(e) {
  return new Eg(e);
}
function Ap(e) {
  return e < 0 ? -1 : 1;
}
function Pp(e, t, r) {
  var n = e._x1 - e._x0, a = t - e._x1, o = (e._y1 - e._y0) / (n || a < 0 && -0), f = (r - e._y1) / (a || n < 0 && -0), s = (o * a + f * n) / (n + a);
  return (Ap(o) + Ap(f)) * Math.min(Math.abs(o), Math.abs(f), 0.5 * Math.abs(s)) || 0;
}
function Rp(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Id(e, t, r) {
  var n = e._x0, a = e._y0, o = e._x1, f = e._y1, s = (o - n) / 3;
  e._context.bezierCurveTo(n + s, a + s * t, o - s, f - s * r, o, f);
}
function rc(e) {
  this._context = e;
}
rc.prototype = {
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
        Id(this, this._t0, Rp(this, this._t0));
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
          this._point = 3, Id(this, Rp(this, r = Pp(this, e, t)), r);
          break;
        default:
          Id(this, this._t0, r = Pp(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function kg(e) {
  this._context = new wg(e);
}
(kg.prototype = Object.create(rc.prototype)).point = function(e, t) {
  rc.prototype.point.call(this, t, e);
};
function wg(e) {
  this._context = e;
}
wg.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, n, a, o) {
    this._context.bezierCurveTo(t, e, n, r, o, a);
  }
};
function Iu(e) {
  return new rc(e);
}
function w0(e) {
  return new kg(e);
}
function Tg(e) {
  this._context = e;
}
Tg.prototype = {
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
        for (var n = Lp(e), a = Lp(t), o = 0, f = 1; f < r; ++o, ++f)
          this._context.bezierCurveTo(n[0][o], a[0][o], n[1][o], a[1][o], e[f], t[f]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Lp(e) {
  var t, r = e.length - 1, n, a = new Array(r), o = new Array(r), f = new Array(r);
  for (a[0] = 0, o[0] = 2, f[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t)
    a[t] = 1, o[t] = 4, f[t] = 4 * e[t] + 2 * e[t + 1];
  for (a[r - 1] = 2, o[r - 1] = 7, f[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t)
    n = a[t] / o[t - 1], o[t] -= n, f[t] -= n * f[t - 1];
  for (a[r - 1] = f[r - 1] / o[r - 1], t = r - 2; t >= 0; --t)
    a[t] = (f[t] - a[t + 1]) / o[t];
  for (o[r - 1] = (e[r] + a[r - 1]) / 2, t = 0; t < r - 1; ++t)
    o[t] = 2 * e[t + 1] - a[t + 1];
  return [a, o];
}
function T0(e) {
  return new Tg(e);
}
function Cc(e, t) {
  this._context = e, this._t = t;
}
Cc.prototype = {
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
function C0(e) {
  return new Cc(e, 0.5);
}
function A0(e) {
  return new Cc(e, 0);
}
function P0(e) {
  return new Cc(e, 1);
}
function el(e, t) {
  if ((f = e.length) > 1)
    for (var r = 1, n, a, o = e[t[0]], f, s = o.length; r < f; ++r)
      for (a = o, o = e[t[r]], n = 0; n < s; ++n)
        o[n][1] += o[n][0] = isNaN(a[n][1]) ? a[n][0] : a[n][1];
}
function tl(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; )
    r[t] = t;
  return r;
}
function R0(e, t) {
  return e[t];
}
function rh() {
  var e = It([]), t = tl, r = el, n = R0;
  function a(o) {
    var f = e.apply(this, arguments), s, c = o.length, d = f.length, g = new Array(d), y;
    for (s = 0; s < d; ++s) {
      for (var v = f[s], E = g[s] = new Array(c), k = 0, M; k < c; ++k)
        E[k] = M = [0, +n(o[k], v, k, o)], M.data = o[k];
      E.key = v;
    }
    for (s = 0, y = t(g); s < d; ++s)
      g[y[s]].index = s;
    return r(g, y), g;
  }
  return a.keys = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : It(of.call(o)), a) : e;
  }, a.value = function(o) {
    return arguments.length ? (n = typeof o == "function" ? o : It(+o), a) : n;
  }, a.order = function(o) {
    return arguments.length ? (t = o == null ? tl : typeof o == "function" ? o : It(of.call(o)), a) : t;
  }, a.offset = function(o) {
    return arguments.length ? (r = o ?? el, a) : r;
  }, a;
}
function L0(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, a = 0, o = e[0].length, f; a < o; ++a) {
      for (f = r = 0; r < n; ++r)
        f += e[r][a][1] || 0;
      if (f)
        for (r = 0; r < n; ++r)
          e[r][a][1] /= f;
    }
    el(e, t);
  }
}
function D0(e, t) {
  if ((c = e.length) > 0)
    for (var r, n = 0, a, o, f, s, c, d = e[t[0]].length; n < d; ++n)
      for (f = s = 0, r = 0; r < c; ++r)
        (o = (a = e[t[r]][n])[1] - a[0]) > 0 ? (a[0] = f, a[1] = f += o) : o < 0 ? (a[1] = s, a[0] = s += o) : (a[0] = 0, a[1] = o);
}
function O0(e, t) {
  if ((a = e.length) > 0) {
    for (var r = 0, n = e[t[0]], a, o = n.length; r < o; ++r) {
      for (var f = 0, s = 0; f < a; ++f)
        s += e[f][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    el(e, t);
  }
}
function M0(e, t) {
  if (!(!((f = e.length) > 0) || !((o = (a = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, a, o, f; n < o; ++n) {
      for (var s = 0, c = 0, d = 0; s < f; ++s) {
        for (var g = e[t[s]], y = g[n][1] || 0, v = g[n - 1][1] || 0, E = (y - v) / 2, k = 0; k < s; ++k) {
          var M = e[t[k]], T = M[n][1] || 0, m = M[n - 1][1] || 0;
          E += T - m;
        }
        c += y, d += E * y;
      }
      a[n - 1][1] += a[n - 1][0] = r, c && (r -= d / c);
    }
    a[n - 1][1] += a[n - 1][0] = r, el(e, t);
  }
}
function _0(e) {
  var t = e.map(N0);
  return tl(e).sort(function(r, n) {
    return t[r] - t[n];
  });
}
function N0(e) {
  for (var t = -1, r = 0, n = e.length, a, o = -1 / 0; ++t < n; )
    (a = +e[t][1]) > o && (o = a, r = t);
  return r;
}
function Cg(e) {
  var t = e.map(Ag);
  return tl(e).sort(function(r, n) {
    return t[r] - t[n];
  });
}
function Ag(e) {
  for (var t = 0, r = -1, n = e.length, a; ++r < n; )
    (a = +e[r][1]) && (t += a);
  return t;
}
function F0(e) {
  return Cg(e).reverse();
}
function z0(e) {
  var t = e.length, r, n, a = e.map(Ag), o = _0(e), f = 0, s = 0, c = [], d = [];
  for (r = 0; r < t; ++r)
    n = o[r], f < s ? (f += a[n], c.push(n)) : (s += a[n], d.push(n));
  return d.reverse().concat(c);
}
function $0(e) {
  return tl(e).reverse();
}
function gn(e, t) {
  e(t);
}
var Dp = {
  ascending: Cg,
  descending: F0,
  insideout: z0,
  none: tl,
  reverse: $0
};
function ah(e) {
  return e && Dp[e] || Dp.none;
}
var Op = {
  expand: L0,
  diverging: D0,
  none: el,
  silhouette: O0,
  wiggle: M0
};
function ih(e) {
  return e && Op[e] || Op.none;
}
function B0(e) {
  var t = e === void 0 ? {} : e, r = t.innerRadius, n = t.outerRadius, a = t.cornerRadius, o = t.startAngle, f = t.endAngle, s = t.padAngle, c = t.padRadius, d = a0();
  return r != null && gn(d.innerRadius, r), n != null && gn(d.outerRadius, n), a != null && gn(d.cornerRadius, a), o != null && gn(d.startAngle, o), f != null && gn(d.endAngle, f), s != null && gn(d.padAngle, s), c != null && gn(d.padRadius, c), d;
}
function oh(e) {
  var t = e === void 0 ? {} : e, r = t.x, n = t.x0, a = t.x1, o = t.y, f = t.y0, s = t.y1, c = t.defined, d = t.curve, g = i0();
  return r && gn(g.x, r), n && gn(g.x0, n), a && gn(g.x1, a), o && gn(g.y, o), f && gn(g.y0, f), s && gn(g.y1, s), c && g.defined(c), d && g.curve(d), g;
}
function Pg(e) {
  var t = e === void 0 ? {} : e, r = t.x, n = t.y, a = t.defined, o = t.curve, f = mg();
  return r && gn(f.x, r), n && gn(f.y, n), a && f.defined(a), o && f.curve(o), f;
}
function I0(e) {
  var t = e === void 0 ? {} : e, r = t.startAngle, n = t.endAngle, a = t.padAngle, o = t.value, f = t.sort, s = t.sortValues, c = s0();
  return (f === null || f != null) && c.sort(f), (s === null || s != null) && c.sortValues(s), o != null && c.value(o), a != null && gn(c.padAngle, a), r != null && gn(c.startAngle, r), n != null && gn(c.endAngle, n), c;
}
function H0(e) {
  var t = e.keys, r = e.value, n = e.order, a = e.offset, o = rh();
  return t && o.keys(t), r && gn(o.value, r), n && o.order(ah(n)), a && o.offset(ih(a)), o;
}
var W0 = ["className", "top", "left", "data", "centroid", "innerRadius", "outerRadius", "cornerRadius", "startAngle", "endAngle", "padAngle", "padRadius", "pieSort", "pieSortValues", "pieValue", "children", "fill"];
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
function V0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function j0(e) {
  var t = e.className, r = e.top, n = e.left, a = e.data, o = a === void 0 ? [] : a, f = e.centroid, s = e.innerRadius, c = s === void 0 ? 0 : s, d = e.outerRadius, g = e.cornerRadius, y = e.startAngle, v = e.endAngle, E = e.padAngle, k = e.padRadius, M = e.pieSort, T = e.pieSortValues, m = e.pieValue, D = e.children, L = e.fill, _ = L === void 0 ? "" : L, N = V0(e, W0), R = B0({
    innerRadius: c,
    outerRadius: d,
    cornerRadius: g,
    padRadius: k
  }), U = I0({
    startAngle: y,
    endAngle: v,
    padAngle: E,
    value: m,
    sort: M,
    sortValues: T
  }), H = U(o);
  return D ? /* @__PURE__ */ i.createElement(i.Fragment, null, D({
    arcs: H,
    path: R,
    pie: U
  })) : /* @__PURE__ */ i.createElement(rt, {
    className: "visx-pie-arcs-group",
    top: r,
    left: n
  }, H.map(function(Y, Z) {
    return /* @__PURE__ */ i.createElement("g", {
      key: "pie-arc-" + Z
    }, /* @__PURE__ */ i.createElement("path", sf({
      className: wn("visx-pie-arc", t),
      d: R(Y) || "",
      fill: _ == null || typeof _ == "string" ? _ : _(Y)
    }, N)), f == null ? void 0 : f(R.centroid(Y), Y));
  }));
}
var U0 = ["from", "to", "fill", "className", "innerRef"];
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
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Jt(e) {
  var t = e.from, r = t === void 0 ? {
    x: 0,
    y: 0
  } : t, n = e.to, a = n === void 0 ? {
    x: 1,
    y: 1
  } : n, o = e.fill, f = o === void 0 ? "transparent" : o, s = e.className, c = e.innerRef, d = K0(e, U0), g = r.x === a.x || r.y === a.y;
  return /* @__PURE__ */ i.createElement("line", uf({
    ref: c,
    className: wn("visx-line", s),
    x1: r.x,
    y1: r.y,
    x2: a.x,
    y2: a.y,
    fill: f,
    shapeRendering: g ? "crispEdges" : "auto"
  }, d));
}
var Y0 = ["children", "data", "x", "y", "fill", "className", "curve", "innerRef", "defined"];
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
function X0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function da(e) {
  var t = e.children, r = e.data, n = r === void 0 ? [] : r, a = e.x, o = e.y, f = e.fill, s = f === void 0 ? "transparent" : f, c = e.className, d = e.curve, g = e.innerRef, y = e.defined, v = y === void 0 ? function() {
    return !0;
  } : y, E = X0(e, Y0), k = Pg({
    x: a,
    y: o,
    defined: v,
    curve: d
  });
  return t ? /* @__PURE__ */ i.createElement(i.Fragment, null, t({
    path: k
  })) : /* @__PURE__ */ i.createElement("path", cf({
    ref: g,
    className: wn("visx-linepath", c),
    d: k(n) || "",
    fill: s,
    strokeLinecap: "round"
  }, E));
}
var q0 = ["children", "x", "x0", "x1", "y", "y0", "y1", "data", "defined", "className", "curve", "innerRef"];
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
function G0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Z0(e) {
  var t = e.children, r = e.x, n = e.x0, a = e.x1, o = e.y, f = e.y0, s = e.y1, c = e.data, d = c === void 0 ? [] : c, g = e.defined, y = g === void 0 ? function() {
    return !0;
  } : g, v = e.className, E = e.curve, k = e.innerRef, M = G0(e, q0), T = oh({
    x: r,
    x0: n,
    x1: a,
    y: o,
    y0: f,
    y1: s,
    defined: y,
    curve: E
  });
  return t ? /* @__PURE__ */ i.createElement(i.Fragment, null, t({
    path: T
  })) : /* @__PURE__ */ i.createElement("path", df({
    ref: k,
    className: wn("visx-area", v),
    d: T(d) || ""
  }, M));
}
var Q0 = ["x", "x0", "x1", "y", "y1", "y0", "yScale", "data", "defined", "className", "curve", "innerRef", "children"];
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
function J0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function eS(e) {
  var t = e.x, r = e.x0, n = e.x1, a = e.y, o = e.y1, f = e.y0, s = e.yScale, c = e.data, d = c === void 0 ? [] : c, g = e.defined, y = g === void 0 ? function() {
    return !0;
  } : g, v = e.className, E = e.curve, k = e.innerRef, M = e.children, T = J0(e, Q0), m = oh({
    x: t,
    x0: r,
    x1: n,
    defined: y,
    curve: E
  });
  return f == null ? m.y0(s.range()[0]) : gn(m.y0, f), a && !o && gn(m.y1, a), o && !a && gn(m.y1, o), M ? /* @__PURE__ */ i.createElement(i.Fragment, null, M({
    path: m
  })) : /* @__PURE__ */ i.createElement("path", ff({
    ref: k,
    className: wn("visx-area-closed", v),
    d: m(d) || ""
  }, T));
}
var tS = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
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
function nS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function rS(e) {
  var t = e.className, r = e.top, n = e.left, a = e.keys, o = e.data, f = e.curve, s = e.defined, c = e.x, d = e.x0, g = e.x1, y = e.y0, v = e.y1, E = e.value, k = e.order, M = e.offset, T = e.color, m = e.children, D = nS(e, tS), L = H0({
    keys: a,
    value: E,
    order: k,
    offset: M
  }), _ = oh({
    x: c,
    x0: d,
    x1: g,
    y0: y,
    y1: v,
    curve: f,
    defined: s
  }), N = L(o);
  return m ? /* @__PURE__ */ i.createElement(i.Fragment, null, m({
    stacks: N,
    path: _,
    stack: L
  })) : /* @__PURE__ */ i.createElement(rt, {
    top: r,
    left: n
  }, N.map(function(R, U) {
    return /* @__PURE__ */ i.createElement("path", hf({
      className: wn("visx-stack", t),
      key: "stack-" + U + "-" + (R.key || ""),
      d: _(R) || "",
      fill: T == null ? void 0 : T(R.key, U)
    }, D));
  }));
}
var aS = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
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
function iS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function oS(e) {
  var t = e.className, r = e.top, n = e.left, a = e.keys, o = e.data, f = e.curve, s = e.defined, c = e.x, d = e.x0, g = e.x1, y = e.y0, v = e.y1, E = e.value, k = e.order, M = e.offset, T = e.color, m = e.children, D = iS(e, aS);
  return /* @__PURE__ */ i.createElement(rS, ac({
    className: t,
    top: r,
    left: n,
    keys: a,
    data: o,
    curve: f,
    defined: s,
    x: c,
    x0: d,
    x1: g,
    y0: y,
    y1: v,
    value: E,
    order: k,
    offset: M,
    color: T
  }, D), m || function(L) {
    var _ = L.stacks, N = L.path;
    return _.map(function(R, U) {
      return /* @__PURE__ */ i.createElement("path", ac({
        className: wn("visx-area-stack", t),
        key: "area-stack-" + U + "-" + (R.key || ""),
        d: N(R) || "",
        fill: T == null ? void 0 : T(R.key, U)
      }, D));
    });
  });
}
function lh(e) {
  if ("bandwidth" in e)
    return e.bandwidth();
  var t = e.range(), r = e.domain();
  return Math.abs(t[t.length - 1] - t[0]) / r.length;
}
var lS = ["data", "className", "top", "left", "x0", "x0Scale", "x1Scale", "yScale", "color", "keys", "height", "children"];
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
function sS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Rg(e) {
  var t = e.data, r = e.className, n = e.top, a = e.left, o = e.x0, f = e.x0Scale, s = e.x1Scale, c = e.yScale, d = e.color, g = e.keys, y = e.height, v = e.children, E = sS(e, lS), k = lh(s), M = t.map(function(T, m) {
    return {
      index: m,
      x0: f(o(T)),
      bars: g.map(function(D, L) {
        var _ = T[D];
        return {
          index: L,
          key: D,
          value: _,
          width: k,
          x: s(D) || 0,
          y: c(_) || 0,
          color: d(D, L),
          height: y - (c(_) || 0)
        };
      })
    };
  });
  return v ? /* @__PURE__ */ i.createElement(i.Fragment, null, v(M)) : /* @__PURE__ */ i.createElement(rt, {
    className: wn("visx-bar-group", r),
    top: n,
    left: a
  }, M.map(function(T) {
    return /* @__PURE__ */ i.createElement(rt, {
      key: "bar-group-" + T.index + "-" + T.x0,
      left: T.x0
    }, T.bars.map(function(m) {
      return /* @__PURE__ */ i.createElement(hr, pf({
        key: "bar-group-bar-" + T.index + "-" + m.index + "-" + m.value + "-" + m.key,
        x: m.x,
        y: m.y,
        width: m.width,
        height: m.height,
        fill: m.color
      }, E));
    }));
  }));
}
function Lg(e) {
  return e == null ? void 0 : e[0];
}
function Dg(e) {
  return e == null ? void 0 : e[1];
}
var uS = ["data", "className", "top", "left", "x", "y0", "y1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
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
function cS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function dS(e) {
  var t = e.data, r = e.className, n = e.top, a = e.left, o = e.x, f = e.y0, s = f === void 0 ? Lg : f, c = e.y1, d = c === void 0 ? Dg : c, g = e.xScale, y = e.yScale, v = e.color, E = e.keys, k = e.value, M = e.order, T = e.offset, m = e.children, D = cS(e, uS), L = rh();
  E && L.keys(E), k && gn(L.value, k), M && L.order(ah(M)), T && L.offset(ih(T));
  var _ = L(t), N = lh(g), R = _.map(function(U, H) {
    var Y = U.key;
    return {
      index: H,
      key: Y,
      bars: U.map(function(Z, re) {
        var K = (y(s(Z)) || 0) - (y(d(Z)) || 0), q = y(d(Z)), me = "bandwidth" in g ? g(o(Z.data)) : Math.max((g(o(Z.data)) || 0) - N / 2);
        return {
          bar: Z,
          key: Y,
          index: re,
          height: K,
          width: N,
          x: me || 0,
          y: q || 0,
          color: v(U.key, re)
        };
      })
    };
  });
  return m ? /* @__PURE__ */ i.createElement(i.Fragment, null, m(R)) : /* @__PURE__ */ i.createElement(rt, {
    className: wn("visx-bar-stack", r),
    top: n,
    left: a
  }, R.map(function(U) {
    return U.bars.map(function(H) {
      return /* @__PURE__ */ i.createElement(hr, mf({
        key: "bar-stack-" + U.index + "-" + H.index,
        x: H.x,
        y: H.y,
        height: H.height,
        width: H.width,
        fill: H.color
      }, D));
    });
  }));
}
var fS = ["data", "className", "top", "left", "y", "x0", "x1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
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
function hS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function pS(e) {
  var t = e.data, r = e.className, n = e.top, a = e.left, o = e.y, f = e.x0, s = f === void 0 ? Lg : f, c = e.x1, d = c === void 0 ? Dg : c, g = e.xScale, y = e.yScale, v = e.color, E = e.keys, k = e.value, M = e.order, T = e.offset, m = e.children, D = hS(e, fS), L = rh();
  E && L.keys(E), k && gn(L.value, k), M && L.order(ah(M)), T && L.offset(ih(T));
  var _ = L(t), N = lh(y), R = _.map(function(U, H) {
    var Y = U.key;
    return {
      index: H,
      key: Y,
      bars: U.map(function(Z, re) {
        var K = (g(d(Z)) || 0) - (g(s(Z)) || 0), q = g(s(Z)), me = "bandwidth" in y ? y(o(Z.data)) : Math.max((y(o(Z.data)) || 0) - K / 2);
        return {
          bar: Z,
          key: Y,
          index: re,
          height: N,
          width: K,
          x: q || 0,
          y: me || 0,
          color: v(U.key, re)
        };
      })
    };
  });
  return m ? /* @__PURE__ */ i.createElement(i.Fragment, null, m(R)) : /* @__PURE__ */ i.createElement(rt, {
    className: wn("visx-bar-stack-horizontal", r),
    top: n,
    left: a
  }, R.map(function(U) {
    return U.bars.map(function(H) {
      return /* @__PURE__ */ i.createElement(hr, gf({
        key: "bar-stack-" + U.index + "-" + H.index,
        x: H.x,
        y: H.y,
        height: H.height,
        width: H.width,
        fill: H.color
      }, D));
    });
  }));
}
var Mp = "http://www.w3.org/2000/svg";
function mS(e) {
  var t = document.getElementById(e);
  if (!t) {
    var r = document.createElementNS(Mp, "svg");
    r.setAttribute("aria-hidden", "true"), r.style.opacity = "0", r.style.width = "0", r.style.height = "0", r.style.position = "absolute", r.style.top = "-100%", r.style.left = "-100%", r.style.pointerEvents = "none", t = document.createElementNS(Mp, "path"), t.setAttribute("id", e), r.appendChild(t), document.body.appendChild(r);
  }
  return t;
}
var gS = "__visx_splitpath_svg_path_measurement_id", _p = function() {
  return !0;
};
function yS(e) {
  var t = e.path, r = e.pointsInSegments, n = e.segmentation, a = n === void 0 ? "x" : n, o = e.sampleRate, f = o === void 0 ? 1 : o;
  try {
    var s = mS(gS);
    s.setAttribute("d", t);
    var c = s.getTotalLength(), d = r.length, g = r.map(function() {
      return [];
    });
    if (a === "x" || a === "y")
      for (var y = r.map(function(q) {
        var me;
        return (me = q.find(function(W) {
          return typeof W[a] == "number";
        })) == null ? void 0 : me[a];
      }), v = s.getPointAtLength(0), E = s.getPointAtLength(c), k = E[a] > v[a], M = k ? y.map(function(q) {
        return typeof q > "u" ? _p : function(me) {
          return me >= q;
        };
      }) : y.map(function(q) {
        return typeof q > "u" ? _p : function(me) {
          return me <= q;
        };
      }), T = 0, m = 0; m <= c; m += f) {
        for (var D = s.getPointAtLength(m), L = D[a]; T < d - 1 && M[T + 1](L); )
          T += 1;
        g[T].push(D);
      }
    else {
      var _ = r.map(function(q) {
        return q.length;
      }), N = _.reduce(function(q, me) {
        return q + me;
      }, 0), R = c / Math.max(1, N - 1), U = _.slice(0, d - 1);
      U.unshift(0);
      for (var H = 2; H < d; H += 1)
        U[H] += U[H - 1];
      for (var Y = 0; Y < d; Y += 1)
        U[Y] *= R;
      for (var Z = 0, re = 0; re <= c; re += f) {
        for (var K = s.getPointAtLength(re); Z < d - 1 && re >= U[Z + 1]; )
          Z += 1;
        g[Z].push(K);
      }
    }
    return g;
  } catch {
    return [];
  }
}
function yf() {
  return yf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, yf.apply(this, arguments);
}
var vS = function(t) {
  return t.x || 0;
}, xS = function(t) {
  return t.y || 0;
};
function Og(e) {
  var t = e.children, r = e.className, n = e.curve, a = e.defined, o = e.segmentation, f = e.sampleRate, s = e.segments, c = e.x, d = e.y, g = e.styles, y = ue.useMemo(function() {
    var k = typeof c == "number" || typeof c > "u" ? function() {
      return c;
    } : c, M = typeof d == "number" || typeof d > "u" ? function() {
      return d;
    } : d;
    return s.map(function(T) {
      return T.map(function(m, D) {
        return {
          x: k(m, D, T),
          y: M(m, D, T)
        };
      });
    });
  }, [c, d, s]), v = ue.useMemo(function() {
    var k = Pg({
      x: c,
      y: d,
      defined: a,
      curve: n
    });
    return k(s.flat()) || "";
  }, [c, d, a, n, s]), E = ue.useMemo(function() {
    return yS({
      path: v,
      segmentation: o,
      pointsInSegments: y,
      sampleRate: f
    });
  }, [v, o, y, f]);
  return /* @__PURE__ */ i.createElement("g", null, E.map(function(k, M) {
    return t ? /* @__PURE__ */ i.createElement(i.Fragment, {
      key: M
    }, t({
      index: M,
      segment: k,
      styles: g[M] || g[M % g.length]
    })) : /* @__PURE__ */ i.createElement(da, yf({
      key: M,
      className: r,
      data: k,
      x: vS,
      y: xS
    }, g[M] || g[M % g.length]));
  }));
}
Og.propTypes = {
  segments: fe.arrayOf(fe.array).isRequired,
  styles: fe.array.isRequired,
  children: fe.func,
  className: fe.string
};
var bS = ["tooltipOpen"];
function SS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
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
function Mg(e) {
  var t = ue.useState(ic({
    tooltipOpen: !1
  }, e)), r = t[0], n = t[1], a = ue.useCallback(function(f) {
    return n(typeof f == "function" ? function(s) {
      s.tooltipOpen;
      var c = SS(s, bS);
      return ic({}, f(c), {
        tooltipOpen: !0
      });
    } : {
      tooltipOpen: !0,
      tooltipLeft: f.tooltipLeft,
      tooltipTop: f.tooltipTop,
      tooltipData: f.tooltipData
    });
  }, [n]), o = ue.useCallback(function() {
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
    hideTooltip: o
  };
}
var ES = ["className", "top", "left", "offsetLeft", "offsetTop", "style", "children", "unstyled", "applyPositionStyle"];
function oc() {
  return oc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, oc.apply(this, arguments);
}
function kS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var _g = {
  position: "absolute",
  backgroundColor: "white",
  color: "#666666",
  padding: ".3rem .5rem",
  borderRadius: "3px",
  fontSize: "14px",
  boxShadow: "0 1px 2px rgba(33,33,33,0.2)",
  lineHeight: "1em",
  pointerEvents: "none"
}, sh = /* @__PURE__ */ i.forwardRef(function(e, t) {
  var r = e.className, n = e.top, a = e.left, o = e.offsetLeft, f = o === void 0 ? 10 : o, s = e.offsetTop, c = s === void 0 ? 10 : s, d = e.style, g = d === void 0 ? _g : d, y = e.children, v = e.unstyled, E = v === void 0 ? !1 : v, k = e.applyPositionStyle, M = k === void 0 ? !1 : k, T = kS(e, ES);
  return /* @__PURE__ */ i.createElement("div", oc({
    ref: t,
    className: wn("visx-tooltip", r),
    style: oc({
      top: n == null || c == null ? n : n + c,
      left: a == null || f == null ? a : a + f
    }, M && {
      position: "absolute"
    }, !E && g)
  }, T), y);
});
sh.propTypes = {
  children: fe.node,
  className: fe.string,
  left: fe.number,
  offsetLeft: fe.number,
  offsetTop: fe.number,
  top: fe.number,
  applyPositionStyle: fe.bool,
  unstyled: fe.bool
};
sh.displayName = "Tooltip";
const wS = sh;
function vf() {
  return vf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vf.apply(this, arguments);
}
function TS(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function CS(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, xf(e, t);
}
function xf(e, t) {
  return xf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, xf(e, t);
}
var Np = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0
};
function AS(e) {
  var t;
  return t = /* @__PURE__ */ function(r) {
    CS(n, r);
    function n(o) {
      var f;
      return f = r.call(this, o) || this, f.state = {
        rect: void 0,
        parentRect: void 0
      }, f.nodeRef = /* @__PURE__ */ i.createRef(), f.getRects = f.getRects.bind(TS(f)), f;
    }
    var a = n.prototype;
    return a.componentDidMount = function() {
      var f, s = this;
      this.node = (f = this.nodeRef) != null && f.current ? this.nodeRef.current : $y.findDOMNode(this), this.setState(function() {
        return s.getRects();
      });
    }, a.getRects = function() {
      if (!this.node)
        return this.state;
      var f = this.node, s = f.parentNode, c = f.getBoundingClientRect ? f.getBoundingClientRect() : Np, d = s != null && s.getBoundingClientRect ? s.getBoundingClientRect() : Np;
      return {
        rect: c,
        parentRect: d
      };
    }, a.render = function() {
      return /* @__PURE__ */ i.createElement(e, vf({
        nodeRef: this.nodeRef,
        getRects: this.getRects
      }, this.state, this.props));
    }, n;
  }(i.PureComponent), t.displayName = "withBoundingRects(" + (e.displayName || "") + ")", t;
}
var Ng = /* @__PURE__ */ ue.createContext({
  isFlippedVertically: !1,
  isFlippedHorizontally: !1
}), PS = Ng.Provider;
Ng.Consumer;
var RS = ["children", "getRects", "left", "offsetLeft", "offsetTop", "parentRect", "rect", "style", "top", "unstyled", "nodeRef"];
function lc() {
  return lc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, lc.apply(this, arguments);
}
function LS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Fg(e) {
  var t = e.children;
  e.getRects;
  var r = e.left, n = r === void 0 ? 0 : r, a = e.offsetLeft, o = a === void 0 ? 10 : a, f = e.offsetTop, s = f === void 0 ? 10 : f, c = e.parentRect, d = e.rect, g = e.style, y = g === void 0 ? _g : g, v = e.top, E = v === void 0 ? 0 : v, k = e.unstyled, M = k === void 0 ? !1 : k, T = e.nodeRef, m = LS(e, RS), D, L = !1, _ = !1;
  if (d && c) {
    var N = n, R = E;
    if (c.width) {
      var U = N + o + d.width - c.width, H = d.width - N - o;
      L = U > 0 && U > H;
    } else {
      var Y = N + o + d.width - window.innerWidth, Z = d.width - N - o;
      L = Y > 0 && Y > Z;
    }
    if (c.height) {
      var re = R + s + d.height - c.height, K = d.height - R - s;
      _ = re > 0 && re > K;
    } else
      _ = R + s + d.height > window.innerHeight;
    N = L ? N - d.width - o : N + o, R = _ ? R - d.height - s : R + s, N = Math.round(N), R = Math.round(R), D = "translate(" + N + "px, " + R + "px)";
  }
  return /* @__PURE__ */ i.createElement(wS, lc({
    ref: T,
    style: lc({
      left: 0,
      top: 0,
      transform: D
    }, !M && y)
  }, m), /* @__PURE__ */ i.createElement(PS, {
    value: {
      isFlippedVertically: !_,
      isFlippedHorizontally: !L
    }
  }, t));
}
Fg.propTypes = {
  nodeRef: fe.oneOfType([fe.string, fe.func, fe.object])
};
const zg = AS(Fg);
var nl = /* @__PURE__ */ function() {
  function e(r) {
    var n = r.x, a = n === void 0 ? 0 : n, o = r.y, f = o === void 0 ? 0 : o;
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
function DS(e, t) {
  return new nl({
    x: e.x + t.x,
    y: e.y + t.y
  });
}
function OS(e, t) {
  return new nl({
    x: e.x - t.x,
    y: e.y - t.y
  });
}
const MS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Point: nl,
  subtractPoints: OS,
  sumPoints: DS
}, Symbol.toStringTag, { value: "Module" }));
function _S(e) {
  return !!e && e instanceof Element;
}
function NS(e) {
  return !!e && (e instanceof SVGElement || "ownerSVGElement" in e);
}
function FS(e) {
  return !!e && "createSVGPoint" in e;
}
function zS(e) {
  return !!e && "getScreenCTM" in e;
}
function $S(e) {
  return !!e && "changedTouches" in e;
}
function BS(e) {
  return !!e && "clientX" in e;
}
function IS(e) {
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
var Hd = {
  x: 0,
  y: 0
};
function HS(e) {
  if (!e)
    return hs({}, Hd);
  if ($S(e))
    return e.changedTouches.length > 0 ? {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    } : hs({}, Hd);
  if (BS(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  var t = e == null ? void 0 : e.target, r = t && "getBoundingClientRect" in t ? t.getBoundingClientRect() : null;
  return r ? {
    x: r.x + r.width / 2,
    y: r.y + r.height / 2
  } : hs({}, Hd);
}
function bf(e, t) {
  if (!e || !t)
    return null;
  var r = HS(t), n = NS(e) ? e.ownerSVGElement : e, a = zS(n) ? n.getScreenCTM() : null;
  if (FS(n) && a) {
    var o = n.createSVGPoint();
    return o.x = r.x, o.y = r.y, o = o.matrixTransform(a.inverse()), new nl({
      x: o.x,
      y: o.y
    });
  }
  var f = e.getBoundingClientRect();
  return new nl({
    x: r.x - f.left - e.clientLeft,
    y: r.y - f.top - e.clientTop
  });
}
function Sf(e, t) {
  if (_S(e) && t)
    return bf(e, t);
  if (IS(e)) {
    var r = e, n = r.target;
    if (n)
      return bf(n, r);
  }
  return null;
}
const WS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  localPoint: Sf,
  touchPoint: bf
}, Symbol.toStringTag, { value: "Module" })), VS = new xm(), $g = (e) => {
  const { tableData: t, config: r, formatNumber: n, capitalize: a, formatDate: o, formatTooltipsDate: f, parseDate: s, setSharedFilter: c } = ue.useContext(xt), { xScale: d, yScale: g, showTooltip: y, hideTooltip: v } = e, { xAxis: E, visualizationType: k, orientation: M, yAxis: T, runtime: m } = r, D = VS.applySuppression(t, r.suppressedData), L = (W, se) => {
    const { x: ce, y: he } = se, V = {
      data: W || {},
      dataXPosition: ce + 10,
      dataYPosition: he
    };
    return {
      tooltipLeft: V.dataXPosition,
      tooltipTop: V.dataYPosition,
      tooltipData: V
    };
  }, _ = (W, se) => {
    W.stopPropagation();
    const ce = Sf(W), { x: he, y: ie } = ce, { data: V, arc: J } = se ?? {}, ne = U(he - Number(r.yAxis.size || 0)), Ae = k !== "Pie" ? r.series.filter((oe) => oe.tooltip === !0).map((oe) => oe.dataKey) : r.series.map((oe) => oe.dataKey);
    Ae.push(r.xAxis.dataKey), r.visualizationType === "Forecasting" && r.series.map((oe) => {
      oe.confidenceIntervals.map((we) => {
        we.showInTooltip && (Ae.push(we.high), Ae.push(we.low));
      });
    });
    function xe(oe) {
      let we = [];
      for (let Ce in oe)
        oe.hasOwnProperty(Ce) && we.push(oe[Ce].name);
      return we;
    }
    Ae.push(...xe(r.columns)), Ae.push(...xe(r.columns));
    const Pe = Z(ne, Ae), le = D.filter((oe) => oe[E.dataKey] === H(ie)), _e = M === "vertical" ? Pe : le, $e = (oe) => {
      const we = r.series.filter((Be) => Be.dataKey === oe)[0];
      return we != null && we.axis ? String(we.axis).toLowerCase() : "left";
    }, ge = (() => {
      var je, qe, ot;
      const oe = r.columns, we = [], Ce = [];
      for (const [Je, it] of Object.entries(oe)) {
        const Xe = {
          addColPrefix: r.columns[Je].prefix,
          addColSuffix: r.columns[Je].suffix,
          addColRoundTo: r.columns[Je].roundToPlace ? r.columns[Je].roundToPlace : "",
          addColCommas: r.columns[Je].commas
        };
        let Ie = null;
        r.visualizationType === "Pie" ? Ie = J == null ? void 0 : J.data[it.name] : Ie = (je = _e[0]) == null ? void 0 : je[it.name];
        const Me = bm(Ie, "left", !0, r, Xe);
        it.tooltips && we.push([it.label, Me]);
      }
      const Be = [];
      return we.forEach((Je) => {
        Be.push([Je[0], Je[1]]);
      }), k === "Pie" && Ce.push(
        // ignore
        [r.xAxis.dataKey, V],
        [r.runtime.yAxis.dataKey, n(J == null ? void 0 : J.data[r.runtime.yAxis.dataKey])],
        ["Percent", `${Math.round(((J == null ? void 0 : J.endAngle) - (J == null ? void 0 : J.startAngle)) * 180 / Math.PI / 360 * 100) + "%"}`]
      ), k === "Forest Plot" && Ce.push([r.xAxis.dataKey, H(ie)]), k !== "Pie" && k !== "Forest Plot" && Ce.push(
        ...(ot = (qe = re()) == null ? void 0 : qe.filter(Boolean)) == null ? void 0 : ot.flatMap((Je) => {
          var Xe, Ie, Me;
          const it = Je === r.xAxis.dataKey ? (Xe = _e[0]) == null ? void 0 : Xe[Je] : n((Ie = _e[0]) == null ? void 0 : Ie[Je], $e(Je));
          return (Me = _e == null ? void 0 : _e[0]) != null && Me[Je] ? [[Je, it, $e(Je)]] : [];
        })
      ), [...Ce, ...Be];
    })();
    if (!ge)
      return;
    const Re = L(ge, ce);
    y(Re);
  }, N = () => {
    r.visualizationType === "Area Chart" ? setTimeout(() => {
      v();
    }, 3e3) : v();
  }, R = (W) => {
    if (r.xAxis.type === "categorical" || r.visualizationType === "Combo") {
      let se = d.step();
      const he = Math.floor(Number(W) / se);
      return d.domain()[he - 1];
    }
    if (bn(r.xAxis) && r.visualizationType !== "Combo") {
      const se = Yh((V) => s(V[r.xAxis.dataKey])).left, ce = d.invert(d(W)), he = se(r.data, ce, 1);
      return s(r.data[he - 1][r.xAxis.dataKey]);
    }
  }, U = (W, se = !1) => {
    if (k !== "Pie" && M !== "horizontal") {
      if (d.type === "point" || E.type === "continuous" || bn(E)) {
        let ce = null, he = Number.MAX_VALUE, ie = W;
        return D.forEach((V) => {
          const J = bn(E) ? d(s(V[E.dataKey])) : d(V[E.dataKey]);
          let ne = r.barHeight;
          const Ae = Math.abs(Number(J - ie + (se ? ne * 2 : 0)));
          Ae <= he && (he = Ae, ce = (bn(E), V[E.dataKey]));
        }), ce;
      }
      if (r.xAxis.type === "categorical" || k === "Combo" && M !== "horizontal" && k !== "Forest Plot") {
        let he = (d.range()[1] - d.range()[0]) / (d.domain().length + 1);
        const V = Math.floor((Number(W) - he / 2) / he);
        return d.domain()[V];
      }
      if (bn(E) && k !== "Combo" && M !== "horizontal") {
        const ce = Yh((J) => s(J[r.xAxis.dataKey])).left, he = d.invert(W), ie = ce(r.data, he, 1);
        return s(r.data[ie - 1][r.xAxis.dataKey]);
      }
    }
  }, H = (W, se) => {
    if (k === "Pie")
      return;
    let ce = Number.MAX_VALUE, he = null;
    return D.forEach((ie, V) => {
      const J = g(k !== "Forest Plot" ? ie[r.xAxis.dataKey] : V), ne = Math.abs(J - W);
      ne < ce && (ce = ne, he = se ? ie[se] : ie[r.xAxis.dataKey]);
    }), he;
  }, Y = (W) => {
    var se, ce;
    try {
      const he = Sf(W), { x: ie } = he;
      if (!ie)
        throw new Error("COVE: no x value in handleTooltipClick.");
      let V = U(ie, !0), J = (se = r.data) == null ? void 0 : se.filter((ne) => ne[r.xAxis.dataKey] === V);
      if (!V)
        throw new Error("COVE: no closest x scale value in handleTooltipClick");
      if (bn(E) && V && (V = new Date(V), V = o(V), J = (ce = r.data) == null ? void 0 : ce.filter((ne) => o(new Date(ne[r.xAxis.dataKey])) === V)), !J[0])
        throw new Error(`COVE: no data found matching the closest xScale value: ${V}`);
      c && (r != null && r.uid) && (J != null && J[0]) && c(r.uid, J[0]);
    } catch (he) {
      console.error(he.message);
    }
  }, Z = (W, se) => {
    try {
      let ce;
      return E.type === "categorical" ? ce = D.filter((ie) => ie[E.dataKey] === W) : ce = D.filter((ie) => ie[E.dataKey] === W), !ce || ce.length === 0 ? [] : ce.map((ie) => Object.fromEntries(Object.entries(ie).filter(([V, J]) => se.includes(V))));
    } catch (ce) {
      console.error("COVE", ce);
    }
  }, re = () => {
    var W;
    try {
      let se, ce = [], he = [];
      if ((W = r.series) == null || W.forEach((ie) => {
        ie.type === "Forecasting" && (ce.push(ie.stageColumn), ie == null || ie.confidenceIntervals.forEach((V) => {
          V.showInTooltip === !0 && (he.push(V.low), he.push(V.high));
        }));
      }), !r.dashboard)
        switch (k) {
          case "Combo":
            se = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys, ...he];
            break;
          case "Forecasting":
            se = [m.xAxis.dataKey, ...ce, ...he];
            break;
          case "Line":
            se = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
            break;
          case "Area Chart":
            se = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
            break;
          case "Bar":
            se = M === "vertical" ? [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys] : [m.yAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
            break;
          case "Pie":
            se = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
          default:
            throw new Error("No visualization type found in handleTooltipMouseOver");
        }
      return r.dashboard && (se = [m.xAxis.dataKey, ...m == null ? void 0 : m.barSeriesKeys, ...m == null ? void 0 : m.lineSeriesKeys, ...ce, ...he]), se;
    } catch (se) {
      console.error("COVE", se);
    }
  }, K = (W) => {
    const { dataXPosition: se, dataYPosition: ce } = W;
    return {
      opacity: r.tooltips.opacity ? r.tooltips.opacity / 100 : 1,
      position: "absolute",
      backgroundColor: "white",
      borderRadius: "4px",
      transform: `translate(${se}px, ${Number(ce)}px)`
    };
  }, q = (W) => {
    var ce, he;
    let se = r.series.filter((ie) => ie.dataKey === W);
    return (ce = se[0]) != null && ce.name ? (he = se[0]) == null ? void 0 : he.name : W;
  };
  return {
    getIncludedTooltipSeries: re,
    getXValueFromCoordinate: U,
    getXValueFromCoordinateDate: R,
    getYScaleValues: Z,
    handleTooltipClick: Y,
    handleTooltipMouseOff: N,
    handleTooltipMouseOver: _,
    TooltipListItem: ({ item: W }) => {
      const [se, ce] = W, [he, ie, V] = ce;
      if (k === "Forest Plot")
        return he === r.xAxis.dataKey ? /* @__PURE__ */ i.createElement("li", { className: "tooltip-heading" }, `${a(r.xAxis.dataKey ? `${r.xAxis.dataKey}: ` : "")} ${bn(T) ? o(s(he, !1)) : ie}`) : /* @__PURE__ */ i.createElement("li", { className: "tooltip-body" }, `${q(he)}: ${n(ie, "left")}`);
      const J = r.tooltips.dateDisplayFormat ? f(s(ie, !1)) : o(s(ie, !1));
      return k === "Bar" && M === "horizontal" && he === r.xAxis.dataKey ? /* @__PURE__ */ i.createElement("li", { className: "tooltip-heading" }, `${a(r.runtime.yAxis.label ? `${r.runtime.yAxis.label}: ` : "")} ${r.xAxis.type === "date" ? J : ie}`) : he === r.xAxis.dataKey ? /* @__PURE__ */ i.createElement("li", { className: "tooltip-heading" }, `${a(r.runtime.xAxis.label ? `${r.runtime.xAxis.label}: ` : "")} ${bn(E) ? J : ie}`) : /* @__PURE__ */ i.createElement("li", { className: "tooltip-body" }, `${q(he)}: ${ie}`);
    },
    tooltipStyles: K
  };
};
function uh(e, { threshold: t = 0, root: r = null, rootMargin: n = "0%", freezeOnceVisible: a = !1 }) {
  const [o, f] = ue.useState(), s = (o == null ? void 0 : o.isIntersecting) && a, c = ([d]) => {
    f(d);
  };
  return ue.useEffect(() => {
    setTimeout(() => {
      const d = e == null ? void 0 : e.current;
      if (!!!window.IntersectionObserver || s || !d)
        return;
      const y = { threshold: t, root: r, rootMargin: n }, v = new IntersectionObserver(c, y);
      return v.observe(d), () => v.disconnect();
    }, 500);
  }, [e, t, r, n, s]), o;
}
const Ef = (e, t = !1) => {
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
var jS = ["flexDirection", "alignItems", "margin", "display", "children"];
function kf() {
  return kf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, kf.apply(this, arguments);
}
function US(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function sc(e) {
  var t = e.flexDirection, r = t === void 0 ? "row" : t, n = e.alignItems, a = n === void 0 ? "center" : n, o = e.margin, f = o === void 0 ? "0" : o, s = e.display, c = s === void 0 ? "flex" : s, d = e.children, g = US(e, jS);
  return /* @__PURE__ */ i.createElement("div", kf({
    className: "visx-legend-item",
    style: {
      display: c,
      alignItems: a,
      flexDirection: r,
      margin: f
    }
  }, g), d);
}
sc.propTypes = {
  alignItems: fe.string,
  margin: fe.oneOfType([fe.string, fe.number]),
  children: fe.node,
  display: fe.string
};
var KS = ["flex", "label", "margin", "align", "children"];
function wf() {
  return wf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wf.apply(this, arguments);
}
function YS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function uc(e) {
  var t = e.flex, r = t === void 0 ? "1" : t, n = e.label, a = e.margin, o = a === void 0 ? "5px 0" : a, f = e.align, s = f === void 0 ? "left" : f, c = e.children, d = YS(e, KS);
  return /* @__PURE__ */ i.createElement("div", wf({
    className: "visx-legend-label",
    style: {
      justifyContent: s,
      display: "flex",
      flex: r,
      margin: o
    }
  }, d), c || n);
}
uc.propTypes = {
  align: fe.string,
  label: fe.node,
  flex: fe.oneOfType([fe.string, fe.number]),
  margin: fe.oneOfType([fe.string, fe.number]),
  children: fe.node
};
function Tf() {
  return Tf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Tf.apply(this, arguments);
}
function ch(e) {
  var t = e.fill, r = e.width, n = e.height, a = e.style;
  return /* @__PURE__ */ i.createElement("div", {
    style: Tf({
      width: r,
      height: n,
      background: t
    }, a)
  });
}
ch.propTypes = {
  fill: fe.string,
  width: fe.oneOfType([fe.string, fe.number]),
  height: fe.oneOfType([fe.string, fe.number])
};
function Bg(e) {
  var t = e.fill, r = e.width, n = e.height, a = e.style, o = typeof r == "string" || typeof r > "u" ? 0 : r, f = typeof n == "string" || typeof n > "u" ? 0 : n, s = Math.max(o, f), c = s / 2;
  return /* @__PURE__ */ i.createElement("svg", {
    width: s,
    height: s
  }, /* @__PURE__ */ i.createElement(rt, {
    top: c,
    left: c
  }, /* @__PURE__ */ i.createElement("circle", {
    r: c,
    fill: t,
    style: a
  })));
}
Bg.propTypes = {
  fill: fe.string,
  width: fe.oneOfType([fe.string, fe.number]),
  height: fe.oneOfType([fe.string, fe.number])
};
function Ig(e) {
  var t = e.fill, r = e.width, n = e.height, a = e.style, o = typeof n == "string" || typeof n > "u" ? 0 : n, f = typeof (a == null ? void 0 : a.strokeWidth) == "number" ? a == null ? void 0 : a.strokeWidth : 2;
  return /* @__PURE__ */ i.createElement("svg", {
    width: r,
    height: n
  }, /* @__PURE__ */ i.createElement(rt, {
    top: o / 2 - f / 2
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
Ig.propTypes = {
  fill: fe.string,
  width: fe.oneOfType([fe.string, fe.number]),
  height: fe.oneOfType([fe.string, fe.number])
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
var Wd = function() {
};
function XS(e) {
  var t = e.shape, r = t === void 0 ? "rect" : t, n = e.fill, a = n === void 0 ? Wd : n, o = e.size, f = o === void 0 ? Wd : o, s = e.width, c = e.height, d = e.label, g = e.item, y = e.itemIndex, v = e.shapeStyle, E = v === void 0 ? Wd : v, k = {
    width: s,
    height: c,
    item: g,
    itemIndex: y,
    label: d,
    fill: a(ps({}, d)),
    size: f(ps({}, d)),
    style: E(ps({}, d))
  };
  return typeof r == "string" ? r === "circle" ? /* @__PURE__ */ i.createElement(Bg, k) : r === "line" ? /* @__PURE__ */ i.createElement(Ig, k) : /* @__PURE__ */ i.createElement(ch, k) : /* @__PURE__ */ i.isValidElement(r) ? /* @__PURE__ */ i.cloneElement(r, k) : r ? /* @__PURE__ */ i.createElement(r, k) : null;
}
function cc() {
  return cc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, cc.apply(this, arguments);
}
function Hg(e) {
  var t = e.shape, r = t === void 0 ? ch : t, n = e.width, a = e.height, o = e.margin, f = e.label, s = e.item, c = e.itemIndex, d = e.fill, g = e.size, y = e.shapeStyle;
  return /* @__PURE__ */ i.createElement("div", {
    className: "visx-legend-shape",
    style: {
      display: "flex",
      width: g ? g(cc({}, f)) : n,
      height: g ? g(cc({}, f)) : a,
      margin: o
    }
  }, XS({
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
Hg.propTypes = {
  itemIndex: fe.number.isRequired,
  margin: fe.oneOfType([fe.string, fe.number]),
  width: fe.oneOfType([fe.string, fe.number]),
  height: fe.oneOfType([fe.string, fe.number])
};
function Wg(e) {
  return e && typeof e == "object" && "value" in e && typeof e.value < "u" ? e.value : e;
}
function Fp(e) {
  return String(Wg(e));
}
function qS(e) {
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
var GS = ["className", "style", "scale", "shape", "domain", "fill", "size", "labelFormat", "labelTransform", "shapeWidth", "shapeHeight", "shapeMargin", "shapeStyle", "labelAlign", "labelFlex", "labelMargin", "itemMargin", "direction", "itemDirection", "legendLabelProps", "children"];
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
function ZS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var QS = {
  display: "flex"
};
function Vg(e) {
  var t = e.className, r = e.style, n = r === void 0 ? QS : r, a = e.scale, o = e.shape, f = e.domain, s = e.fill, c = s === void 0 ? Fp : s, d = e.size, g = d === void 0 ? Fp : d, y = e.labelFormat, v = y === void 0 ? Wg : y, E = e.labelTransform, k = E === void 0 ? qS : E, M = e.shapeWidth, T = M === void 0 ? 15 : M, m = e.shapeHeight, D = m === void 0 ? 15 : m, L = e.shapeMargin, _ = L === void 0 ? "2px 4px 2px 0" : L, N = e.shapeStyle, R = e.labelAlign, U = R === void 0 ? "left" : R, H = e.labelFlex, Y = H === void 0 ? "1" : H, Z = e.labelMargin, re = Z === void 0 ? "0 4px" : Z, K = e.itemMargin, q = K === void 0 ? "0" : K, me = e.direction, W = me === void 0 ? "column" : me, se = e.itemDirection, ce = se === void 0 ? "row" : se, he = e.legendLabelProps, ie = e.children, V = ZS(e, GS), J = f || ("domain" in a ? a.domain() : []), ne = k({
    scale: a,
    labelFormat: v
  }), Ae = J.map(ne);
  return ie ? /* @__PURE__ */ i.createElement(i.Fragment, null, ie(Ae)) : /* @__PURE__ */ i.createElement("div", {
    className: wn("visx-legend", t),
    style: ms({}, n, {
      flexDirection: W
    })
  }, Ae.map(function(xe, Pe) {
    return /* @__PURE__ */ i.createElement(sc, ms({
      key: "legend-" + xe.text + "-" + Pe,
      margin: q,
      flexDirection: ce
    }, V), /* @__PURE__ */ i.createElement(Hg, {
      shape: o,
      height: D,
      width: T,
      margin: _,
      item: J[Pe],
      itemIndex: Pe,
      label: xe,
      fill: c,
      size: g,
      shapeStyle: N
    }), /* @__PURE__ */ i.createElement(uc, ms({
      label: xe.text,
      flex: Y,
      margin: re,
      align: U
    }, he)));
  }));
}
Vg.propTypes = {
  children: fe.func,
  className: fe.string,
  domain: fe.array,
  shapeWidth: fe.oneOfType([fe.string, fe.number]),
  shapeHeight: fe.oneOfType([fe.string, fe.number]),
  shapeMargin: fe.oneOfType([fe.string, fe.number]),
  labelAlign: fe.string,
  labelFlex: fe.oneOfType([fe.string, fe.number]),
  labelMargin: fe.oneOfType([fe.string, fe.number]),
  itemMargin: fe.oneOfType([fe.string, fe.number]),
  fill: fe.func,
  size: fe.func,
  shapeStyle: fe.func
};
function JS(e) {
  return /* @__PURE__ */ i.createElement(Vg, e);
}
function eE(e) {
  let t = ["legend-container"], r = ["legend-container__inner"];
  return e.legend.position === "left" && t.push("left"), e.legend.position === "bottom" && (t.push("bottom"), r.push("bottom")), e.legend.position === "bottom" && e.legend.singleRow && r.push("single-row"), e.legend.reverseLabelOrder && (r.push("d-flex"), r.push("flex-column-reverse")), e.legend.position === "bottom" && e.legend.verticalSorted && r.push("vertical-sorted"), {
    containerClasses: t,
    innerClasses: r
  };
}
const Ac = (e, t) => {
  var M;
  const { formatDate: r, parseDate: n } = ue.useContext(xt);
  let a = [], o = "", f = [], s = [];
  ((M = e.series) == null ? void 0 : M.length) > 0 && e.data ? (a = e.series[0], o = e.series[0].dataKey, f = e.highlightedBarValues, s = e.data.map((T) => T[e.xAxis.dataKey])) : (a = [], o = "", f = [], s = []);
  const c = (T, m) => {
    const D = [...e.highlightedBarValues];
    D[m].borderWidth = T.target.value, t({
      ...e,
      highlightedBarValues: D
    });
  }, d = (T, m) => {
    T.preventDefault();
    const D = [...e.highlightedBarValues];
    D[m].value = T.target.value, D[m].dataKey = o, t({
      ...e,
      highlightedBarValues: D
    });
  }, g = (T, m) => {
    T.preventDefault();
    const D = [...e.highlightedBarValues];
    D.push({ dataKey: o }), t({
      ...e,
      highlightedBarValues: D
    });
  }, y = (T, m) => {
    T.preventDefault();
    const D = [...e.highlightedBarValues];
    D.splice(m, 1), t({
      ...e,
      highlightedBarValues: D
    });
  }, v = (T, m) => {
    const D = [...e.highlightedBarValues];
    D[m].color = T.target.value, t({
      ...e
    });
  }, E = (T, m) => {
    const D = [...e.highlightedBarValues];
    D[m].legendLabel = T.target.value, t({
      ...e,
      copyOfHighlightedBarValues: D
    });
  }, k = () => {
  };
  return k.checkFontColor = (T, m, D) => {
    if (e.xAxis.type === "date") {
      if (k.formatDates(m).includes(T))
        return "#000";
    } else if (m.includes(T))
      return "#000";
    return D;
  }, k.formatDates = (T) => T.map((m) => m ? r(n(m)) : !1), k.findDuplicates = (T) => {
    const m = {};
    return T == null ? void 0 : T.filter((L) => {
      const { legendLabel: _ } = L;
      return m[_] ? !1 : (m[_] = !0, !0);
    });
  }, {
    HighLightedBarUtils: k,
    highlightedSeries: a,
    highlightedSeriesKey: o,
    highlightedBarValues: f,
    highlightedSeriesValues: s,
    handleUpdateHighlightedBar: d,
    handleAddNewHighlightedBar: g,
    handleRemoveHighlightedBar: y,
    handleUpdateHighlightedBarColor: v,
    handleHighlightedBarLegendLabel: E,
    handleUpdateHighlightedBorderWidth: c
  };
}, Cf = (e) => {
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
}, jg = ue.forwardRef(({ config: e, colorScale: t, seriesHighlight: r, highlight: n, highlightReset: a, currentViewport: o, formatLabels: f, skipId: s = "legend" }, c) => {
  const { innerClasses: d, containerClasses: g } = eE(e), { runtime: y, orientation: v, legend: E } = e;
  if (!E)
    return null;
  const k = E.position === "bottom" || ["sm", "xs", "xxs"].includes(o), M = {
    marginBottom: k ? "15px" : "0px",
    marginTop: k && v === "horizontal" ? `${e.yAxis.label && e.isResponsiveTicks ? e.dynamicMarginTop : e.runtime.xAxis.size}px` : `${k ? e.dynamicMarginTop + 15 : 0}px`
  }, { HighLightedBarUtils: T } = Ac(e);
  let m = T.findDuplicates(e.highlightedBarValues);
  const D = ["sm", "xs", "xxs"].includes(o) ? { fontSize: "11px" } : null;
  return /* @__PURE__ */ i.createElement("aside", { ref: c, style: M, id: s || "legend", className: g.join(" "), role: "region", "aria-label": "legend", tabIndex: 0 }, E.label && /* @__PURE__ */ i.createElement("h3", null, Mi(E.label)), E.description && /* @__PURE__ */ i.createElement("p", { style: D }, Mi(E.description)), /* @__PURE__ */ i.createElement(JS, { scale: t, itemDirection: "row", labelMargin: "0 20px 0 0", shapeMargin: "0 10px 0" }, (L) => {
    var _, N;
    return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: d.join(" ") }, f(L).map((R, U) => {
      var Z, re, K, q;
      let H = ["legend-item", `legend-text--${R.text.replace(" ", "").toLowerCase()}`], Y = R.datum;
      if (e.exclusions.active && ((Z = e.exclusions.keys) != null && Z.includes(Y)))
        return null;
      if (y.seriesLabels) {
        let me = e.runtime.seriesLabelsAll.indexOf(Y);
        Y = e.runtime.seriesKeys[me], ((re = y == null ? void 0 : y.forecastingSeriesKeys) == null ? void 0 : re.length) > 0 && (Y = R.text);
      }
      return r.length > 0 && r.includes(Y) === !1 && H.push("inactive"), /* @__PURE__ */ i.createElement(
        sc,
        {
          className: H.join(" "),
          tabIndex: 0,
          key: `legend-quantile-${U}`,
          onKeyDown: (me) => {
            me.key === "Enter" && (me.preventDefault(), n(R));
          },
          onClick: (me) => {
            me.preventDefault(), n(R);
          },
          role: "button"
        },
        /* @__PURE__ */ i.createElement("div", null, e.visualizationType === "Line" && e.legend.lineMode ? /* @__PURE__ */ i.createElement("svg", { width: 40, height: 20 }, /* @__PURE__ */ i.createElement(Jt, { from: { x: 10, y: 10 }, to: { x: 40, y: 10 }, stroke: R.value, strokeWidth: 2, strokeDasharray: Cf((K = e.series[U]) != null && K.type ? (q = e.series[U]) == null ? void 0 : q.type : "") })) : /* @__PURE__ */ i.createElement("div", { style: { display: "flex", flexDirection: "column" } }, /* @__PURE__ */ i.createElement(Ih, { viewport: o, margin: "0", fill: R.value, display: !0 }))),
        /* @__PURE__ */ i.createElement(uc, { style: D, align: "left", margin: "0 0 0 4px" }, R.text)
      );
    }), m.map((R, U) => {
      let H = "legend-item", Y = R.legendLabel;
      return Y ? (r.length > 0 && r.includes(Y) === !1 && (H += " inactive"), /* @__PURE__ */ i.createElement(
        sc,
        {
          className: H,
          tabIndex: 0,
          key: `legend-quantile-${U}`,
          onKeyDown: (Z) => {
            Z.key === "Enter" && (Z.preventDefault(), n(R.legendLabel));
          },
          onClick: (Z) => {
            Z.preventDefault(), n(R.legendLabel);
          }
        },
        /* @__PURE__ */ i.createElement(Ih, { fill: "transparent", borderColor: R.color ? R.color : "rgba(255, 102, 1)" }),
        " ",
        /* @__PURE__ */ i.createElement(uc, { align: "left", margin: "0 0 0 4px" }, R.legendLabel ? R.legendLabel : R.value)
      )) : !1;
    })), /* @__PURE__ */ i.createElement(i.Fragment, null, ((_ = e == null ? void 0 : e.preliminaryData) == null ? void 0 : _.some((R) => R.label)) && ["Line", "Combo"].includes(e.visualizationType) && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("div", { className: e.legend.singleRow && k ? "legend-container__inner bottom single-row" : "" }, (N = e == null ? void 0 : e.preliminaryData) == null ? void 0 : N.map((R, U) => /* @__PURE__ */ i.createElement(i.Fragment, null, R.label && /* @__PURE__ */ i.createElement("div", { key: U, className: "legend-preliminary" }, /* @__PURE__ */ i.createElement("svg", null, R.style.includes("Dashed") ? /* @__PURE__ */ i.createElement(Jt, { from: { x: 10, y: 10 }, to: { x: 40, y: 10 }, stroke: "#000", strokeWidth: 2, strokeDasharray: Cf(R.style) }) : /* @__PURE__ */ i.createElement("circle", { r: 6, strokeWidth: 2, stroke: "#000", cx: 22, cy: 10, fill: "transparent" })), /* @__PURE__ */ i.createElement("span", null, " ", R.label))))))));
  }), r.length > 0 && /* @__PURE__ */ i.createElement(Hf, { onClick: (L) => a(L), style: { marginTop: "1rem" } }, "Reset"));
});
function dh(e) {
  return Ay({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" } }] })(e);
}
const Ug = (e, t, r, n) => (a) => {
  var v, E, k, M, T;
  const { visualizationType: o, visualizationSubType: f, series: s, runtime: c } = e, d = (m) => e.legend.reverseLabelOrder && e.legend.position === "bottom" ? m.reverse() : m, g = (v = e.legend) == null ? void 0 : v.colorCode;
  if (o === "Deviation Bar") {
    const [m, D] = ju[e.twoColor.palette], L = {
      datum: "X",
      index: 0,
      text: `Below ${e.xAxis.targetLabel}`,
      value: m
    }, _ = {
      datum: "X",
      index: 1,
      text: `Above ${e.xAxis.targetLabel}`,
      value: D
    };
    return d([L, _]);
  }
  if (o === "Bar" && f === "regular" && g && (s == null ? void 0 : s.length) === 1) {
    let m = or[e.palette];
    for (; t.length > m.length; )
      m = m.concat(m);
    m = m.slice(0, r.length);
    const D = /* @__PURE__ */ new Set();
    t.forEach((_) => D.add(_[g]));
    const L = Array.from(D).map((_, N) => ({
      datum: _,
      index: N,
      text: _,
      value: m[N]
    }));
    return d(L);
  }
  if (((E = c == null ? void 0 : c.forecastingSeriesKeys) == null ? void 0 : E.length) > 0) {
    let m = [];
    return (M = (k = e.runtime) == null ? void 0 : k.forecastingSeriesKeys) == null || M.map((D, L) => {
      var _;
      return (_ = D == null ? void 0 : D.stages) == null ? void 0 : _.map((N, R) => {
        var Y, Z, re, K;
        let U = (Y = Uu[N.color]) != null && Y[2] ? (Z = Uu[N.color]) == null ? void 0 : Z[2] : (re = or[N.color]) != null && re[2] ? (K = or[N.color]) == null ? void 0 : K[2] : "#ccc";
        const H = {
          datum: N.key,
          index: R,
          text: N.key,
          value: U
        };
        m.push(H);
      });
    }), e.runtime.barSeriesKeys && e.runtime.barSeriesKeys.forEach((D, L) => {
      let _ = or[e.palette][L] ? or[e.palette][L] : "#ccc";
      const N = {
        datum: D,
        index: L,
        text: D,
        value: _
      };
      m.push(N);
    }), d(m);
  }
  if (e.series.filter((m) => !!m.name).length > 0) {
    const m = /* @__PURE__ */ new Set();
    e.series.forEach((L) => {
      m.add(L.name || L.dataKey);
    });
    const D = Array.from(m).map((L, _) => ({
      datum: L,
      index: _,
      text: L,
      value: n(L)
    }));
    return d(D);
  }
  if ((e.visualizationType === "Bar" || e.visualizationType === "Combo") && e.visualizationSubType === "regular" && e.suppressedData) {
    const m = a.length - 1;
    let D = [];
    return (T = e.suppressedData) == null || T.forEach(({ label: L, icon: _ }, N) => {
      if (L && _) {
        const R = {
          datum: L,
          index: m + N,
          text: L,
          icon: /* @__PURE__ */ i.createElement(dh, { color: "#000", size: 15 })
        };
        D.push(R);
      }
    }), [...a, ...D];
  }
  return d(a);
}, Ru = ({ startAngle: e, endAngle: t }) => ({
  startAngle: e,
  endAngle: t
}), tE = (e) => {
  const { transformedData: t, config: r, colorScale: n, currentViewport: a, dimensions: o, highlight: f, highlightReset: s, seriesHighlight: c } = ue.useContext(xt), { tooltipData: d, showTooltip: g, hideTooltip: y, tooltipOpen: v, tooltipLeft: E, tooltipTop: k } = Mg(), { handleTooltipMouseOver: M, handleTooltipMouseOff: T, TooltipListItem: m } = $g({
    xScale: !1,
    yScale: !1,
    showTooltip: g,
    hideTooltip: y
  }), [D, L] = ue.useState(void 0), [_, N] = ue.useState(!1), R = Object.values(r.columns).filter((J) => J.showInViz), U = R.length > 0, H = U ? "pivotColumn" : void 0, Y = ue.useMemo(() => {
    if (U) {
      let J = [];
      const ne = r.yAxis.dataKey, Ae = R.map((le) => le.name), xe = [ne, ...Ae], Pe = r.xAxis.dataKey;
      return t.forEach((le) => {
        xe.forEach((_e) => {
          const $e = le[_e];
          $e && J.push({
            [H]: $e,
            [Pe]: `${le[Pe]} - ${_e}`
          });
        });
      }), J;
    }
    return t;
  }, [t, U]), Z = ue.useMemo(() => {
    if (U) {
      const J = {};
      Y.forEach((xe) => {
        J[xe[r.xAxis.dataKey]] || (J[xe[r.xAxis.dataKey]] = !0);
      });
      const ne = Object.entries(J).length;
      let Ae = r.customColors || or[r.palette];
      return Ae = Ae.slice(0, ne), Fm({
        domain: Object.keys(J),
        range: Ae,
        unknown: null
      });
    }
    return n;
  }, [n, U]), re = ue.useRef(), K = uh(re, {
    freezeOnceVisible: !1
  });
  ue.useEffect(() => {
    document.querySelector(".isEditor") && N((ne) => !0);
  }), ue.useEffect(() => {
    K != null && K.isIntersecting && r.animate && !_ && setTimeout(() => {
      N(!0);
    }, 500);
  }, [K == null ? void 0 : K.isIntersecting, r.animate]);
  const q = ({ arcs: J, path: ne, getKey: Ae }) => {
    const xe = Ob(J, Ae, {
      from: Ru,
      enter: Ru,
      update: Ru,
      leave: Ru
    });
    return ue.useEffect(() => {
      const Pe = setTimeout(() => {
        y();
      }, 500);
      return () => {
        clearTimeout(Pe);
      };
    }, [d]), /* @__PURE__ */ i.createElement(i.Fragment, null, xe.map(({ item: Pe, props: le, key: _e }, $e) => /* @__PURE__ */ i.createElement(rt, { className: Pe.data[r.xAxis.dataKey], key: `${_e}-${$e}`, style: { opacity: r.legend.behavior === "highlight" && c.length > 0 && c.indexOf(Pe.data[r.runtime.xAxis.dataKey]) === -1 ? 0.5 : 1 } }, /* @__PURE__ */ i.createElement(
      Cp.path,
      {
        d: Cb(
          [le.startAngle, le.endAngle],
          (Te, ge) => ne({
            ...Pe,
            startAngle: Te,
            endAngle: ge
          })
        ),
        fill: Z(Pe.data[r.runtime.xAxis.dataKey]),
        onMouseEnter: (Te) => M(Te, { data: Pe.data[r.runtime.xAxis.dataKey], arc: Pe }),
        onMouseLeave: (Te) => T()
      }
    ))), xe.map(({ item: Pe, key: le }, _e) => {
      const [$e, Te] = ne.centroid(Pe), ge = Pe.endAngle - Pe.startAngle >= 0.1;
      let Re = "#FFF";
      return Z(Pe.data[r.runtime.xAxis.dataKey]) && (Re = Go(Re, Z(Pe.data[r.runtime.xAxis.dataKey]))), /* @__PURE__ */ i.createElement(Cp.g, { key: `${le}${_e}` }, ge && /* @__PURE__ */ i.createElement(yt, { style: { fill: Re }, x: $e, y: Te, dy: ".33em", textAnchor: "middle", pointerEvents: "none" }, Math.round((Pe.endAngle - Pe.startAngle) * 180 / Math.PI / 360 * 100) + "%"));
    }));
  };
  let [me] = o;
  r && r.legend && !r.legend.hide && a === "lg" && (me = me * 0.73);
  const W = r.heights.vertical, se = Math.min(me, W) / 2, ce = W / 2, he = me / 2, ie = r.pieType === "Donut" ? 75 : se;
  ue.useEffect(() => {
    if (c.length > 0 && r.legend.behavior !== "highlight") {
      let J = [];
      Y.forEach((ne) => {
        c.indexOf(ne[r.runtime.xAxis.dataKey]) !== -1 && J.push(ne);
      }), L(J);
    } else
      L(void 0);
  }, [c]);
  const V = Ug(r, [], Y, Z);
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(_r, { component: "PieChart" }, /* @__PURE__ */ i.createElement("svg", { width: me, height: W, className: `animated-pie group ${r.animate === !1 || _ ? "animated" : ""}`, role: "img", "aria-label": Ef(r) }, /* @__PURE__ */ i.createElement(rt, { top: ce, left: he }, /* @__PURE__ */ i.createElement(
    j0,
    {
      data: D || Y,
      pieValue: (J) => J[H || r.runtime.yAxis.dataKey],
      pieSortValues: () => -1,
      innerRadius: se - ie,
      outerRadius: se
    },
    (J) => /* @__PURE__ */ i.createElement(q, { ...J, getKey: (ne) => ne.data[r.runtime.xAxis.dataKey] })
  ))), /* @__PURE__ */ i.createElement("div", { ref: re }), d && Object.entries(d.data).length > 0 && v && g && d.dataYPosition && d.dataXPosition && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${r.tooltips.opacity / 100}) !important`), /* @__PURE__ */ i.createElement(zg, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: E, top: k }, /* @__PURE__ */ i.createElement("ul", null, typeof d == "object" && Object.entries(d.data).map((J, ne) => /* @__PURE__ */ i.createElement(m, { item: J, key: ne })))))), /* @__PURE__ */ i.createElement(jg, { config: r, colorScale: Z, seriesHighlight: c, highlight: f, highlightReset: s, currentViewport: a, formatLabels: V }));
};
function As(e) {
  return e.split("-")[1];
}
function fh(e) {
  return e === "y" ? "height" : "width";
}
function $i(e) {
  return e.split("-")[0];
}
function Ps(e) {
  return ["top", "bottom"].includes($i(e)) ? "x" : "y";
}
function zp(e, t, r) {
  let { reference: n, floating: a } = e;
  const o = n.x + n.width / 2 - a.width / 2, f = n.y + n.height / 2 - a.height / 2, s = Ps(t), c = fh(s), d = n[c] / 2 - a[c] / 2, g = s === "x";
  let y;
  switch ($i(t)) {
    case "top":
      y = { x: o, y: n.y - a.height };
      break;
    case "bottom":
      y = { x: o, y: n.y + n.height };
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
  switch (As(t)) {
    case "start":
      y[s] -= d * (r && g ? -1 : 1);
      break;
    case "end":
      y[s] += d * (r && g ? -1 : 1);
  }
  return y;
}
function Kg(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function gs(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Yg(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: n, y: a, platform: o, rects: f, elements: s, strategy: c } = e, { boundary: d = "clippingAncestors", rootBoundary: g = "viewport", elementContext: y = "floating", altBoundary: v = !1, padding: E = 0 } = t, k = Kg(E), M = s[v ? y === "floating" ? "reference" : "floating" : y], T = gs(await o.getClippingRect({ element: (r = await (o.isElement == null ? void 0 : o.isElement(M))) == null || r ? M : M.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(s.floating)), boundary: d, rootBoundary: g, strategy: c })), m = y === "floating" ? { ...f.floating, x: n, y: a } : f.reference, D = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(s.floating)), L = await (o.isElement == null ? void 0 : o.isElement(D)) && await (o.getScale == null ? void 0 : o.getScale(D)) || { x: 1, y: 1 }, _ = gs(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: m, offsetParent: D, strategy: c }) : m);
  return { top: (T.top - _.top + k.top) / L.y, bottom: (_.bottom - T.bottom + k.bottom) / L.y, left: (T.left - _.left + k.left) / L.x, right: (_.right - T.right + k.right) / L.x };
}
const nE = Math.min, rE = Math.max;
function Af(e, t, r) {
  return rE(e, nE(t, r));
}
["top", "right", "bottom", "left"].reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const aE = { left: "right", right: "left", bottom: "top", top: "bottom" };
function dc(e) {
  return e.replace(/left|right|bottom|top/g, (t) => aE[t]);
}
function iE(e, t, r) {
  r === void 0 && (r = !1);
  const n = As(e), a = Ps(e), o = fh(a);
  let f = a === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (f = dc(f)), { main: f, cross: dc(f) };
}
const oE = { start: "end", end: "start" };
function Vd(e) {
  return e.replace(/start|end/g, (t) => oE[t]);
}
const lE = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var r;
    const { placement: n, middlewareData: a, rects: o, initialPlacement: f, platform: s, elements: c } = t, { mainAxis: d = !0, crossAxis: g = !0, fallbackPlacements: y, fallbackStrategy: v = "bestFit", fallbackAxisSideDirection: E = "none", flipAlignment: k = !0, ...M } = e, T = $i(n), m = $i(f) === f, D = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), L = y || (m || !k ? [dc(f)] : function(re) {
      const K = dc(re);
      return [Vd(re), K, Vd(K)];
    }(f));
    y || E === "none" || L.push(...function(re, K, q, me) {
      const W = As(re);
      let se = function(ce, he, ie) {
        const V = ["left", "right"], J = ["right", "left"], ne = ["top", "bottom"], Ae = ["bottom", "top"];
        switch (ce) {
          case "top":
          case "bottom":
            return ie ? he ? J : V : he ? V : J;
          case "left":
          case "right":
            return he ? ne : Ae;
          default:
            return [];
        }
      }($i(re), q === "start", me);
      return W && (se = se.map((ce) => ce + "-" + W), K && (se = se.concat(se.map(Vd)))), se;
    }(f, k, E, D));
    const _ = [f, ...L], N = await Yg(t, M), R = [];
    let U = ((r = a.flip) == null ? void 0 : r.overflows) || [];
    if (d && R.push(N[T]), g) {
      const { main: re, cross: K } = iE(n, o, D);
      R.push(N[re], N[K]);
    }
    if (U = [...U, { placement: n, overflows: R }], !R.every((re) => re <= 0)) {
      var H, Y;
      const re = (((H = a.flip) == null ? void 0 : H.index) || 0) + 1, K = _[re];
      if (K)
        return { data: { index: re, overflows: U }, reset: { placement: K } };
      let q = (Y = U.find((me) => me.overflows[0] <= 0)) == null ? void 0 : Y.placement;
      if (!q)
        switch (v) {
          case "bestFit": {
            var Z;
            const me = (Z = U.map((W) => [W.placement, W.overflows.filter((se) => se > 0).reduce((se, ce) => se + ce, 0)]).sort((W, se) => W[1] - se[1])[0]) == null ? void 0 : Z[0];
            me && (q = me);
            break;
          }
          case "initialPlacement":
            q = f;
        }
      if (n !== q)
        return { reset: { placement: q } };
    }
    return {};
  } };
}, sE = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: r, y: n } = t, a = await async function(o, f) {
      const { placement: s, platform: c, elements: d } = o, g = await (c.isRTL == null ? void 0 : c.isRTL(d.floating)), y = $i(s), v = As(s), E = Ps(s) === "x", k = ["left", "top"].includes(y) ? -1 : 1, M = g && E ? -1 : 1, T = typeof f == "function" ? f(o) : f;
      let { mainAxis: m, crossAxis: D, alignmentAxis: L } = typeof T == "number" ? { mainAxis: T, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...T };
      return v && typeof L == "number" && (D = v === "end" ? -1 * L : L), E ? { x: D * M, y: m * k } : { x: m * k, y: D * M };
    }(t, e);
    return { x: r + a.x, y: n + a.y, data: a };
  } };
}, uE = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: r, y: n, placement: a } = t, { mainAxis: o = !0, crossAxis: f = !1, limiter: s = { fn: (T) => {
      let { x: m, y: D } = T;
      return { x: m, y: D };
    } }, ...c } = e, d = { x: r, y: n }, g = await Yg(t, c), y = Ps($i(a)), v = y === "x" ? "y" : "x";
    let E = d[y], k = d[v];
    if (o) {
      const T = y === "y" ? "bottom" : "right";
      E = Af(E + g[y === "y" ? "top" : "left"], E, E - g[T]);
    }
    if (f) {
      const T = v === "y" ? "bottom" : "right";
      k = Af(k + g[v === "y" ? "top" : "left"], k, k - g[T]);
    }
    const M = s.fn({ ...t, [y]: E, [v]: k });
    return { ...M, data: { x: M.x - r, y: M.y - n } };
  } };
};
function wr(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function qr(e) {
  return wr(e).getComputedStyle(e);
}
const $p = Math.min, ys = Math.max, fc = Math.round;
function Xg(e) {
  const t = qr(e);
  let r = parseFloat(t.width), n = parseFloat(t.height);
  const a = e.offsetWidth, o = e.offsetHeight, f = fc(r) !== a || fc(n) !== o;
  return f && (r = a, n = o), { width: r, height: n, fallback: f };
}
function Va(e) {
  return Gg(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Lu;
function qg() {
  if (Lu)
    return Lu;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Lu = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Lu) : navigator.userAgent;
}
function Gr(e) {
  return e instanceof wr(e).HTMLElement;
}
function Ba(e) {
  return e instanceof wr(e).Element;
}
function Gg(e) {
  return e instanceof wr(e).Node;
}
function Bp(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof wr(e).ShadowRoot || e instanceof ShadowRoot;
}
function Pc(e) {
  const { overflow: t, overflowX: r, overflowY: n, display: a } = qr(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(a);
}
function cE(e) {
  return ["table", "td", "th"].includes(Va(e));
}
function Pf(e) {
  const t = /firefox/i.test(qg()), r = qr(e), n = r.backdropFilter || r.WebkitBackdropFilter;
  return r.transform !== "none" || r.perspective !== "none" || !!n && n !== "none" || t && r.willChange === "filter" || t && !!r.filter && r.filter !== "none" || ["transform", "perspective"].some((a) => r.willChange.includes(a)) || ["paint", "layout", "strict", "content"].some((a) => {
    const o = r.contain;
    return o != null && o.includes(a);
  });
}
function Zg() {
  return !/^((?!chrome|android).)*safari/i.test(qg());
}
function hh(e) {
  return ["html", "body", "#document"].includes(Va(e));
}
function Qg(e) {
  return Ba(e) ? e : e.contextElement;
}
const Jg = { x: 1, y: 1 };
function qo(e) {
  const t = Qg(e);
  if (!Gr(t))
    return Jg;
  const r = t.getBoundingClientRect(), { width: n, height: a, fallback: o } = Xg(t);
  let f = (o ? fc(r.width) : r.width) / n, s = (o ? fc(r.height) : r.height) / a;
  return f && Number.isFinite(f) || (f = 1), s && Number.isFinite(s) || (s = 1), { x: f, y: s };
}
function ws(e, t, r, n) {
  var a, o;
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const f = e.getBoundingClientRect(), s = Qg(e);
  let c = Jg;
  t && (n ? Ba(n) && (c = qo(n)) : c = qo(e));
  const d = s ? wr(s) : window, g = !Zg() && r;
  let y = (f.left + (g && ((a = d.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / c.x, v = (f.top + (g && ((o = d.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / c.y, E = f.width / c.x, k = f.height / c.y;
  if (s) {
    const M = wr(s), T = n && Ba(n) ? wr(n) : n;
    let m = M.frameElement;
    for (; m && n && T !== M; ) {
      const D = qo(m), L = m.getBoundingClientRect(), _ = getComputedStyle(m);
      L.x += (m.clientLeft + parseFloat(_.paddingLeft)) * D.x, L.y += (m.clientTop + parseFloat(_.paddingTop)) * D.y, y *= D.x, v *= D.y, E *= D.x, k *= D.y, y += L.x, v += L.y, m = wr(m).frameElement;
    }
  }
  return { width: E, height: k, top: v, right: y + E, bottom: v + k, left: y, x: y, y: v };
}
function Ia(e) {
  return ((Gg(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Rc(e) {
  return Ba(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function ey(e) {
  return ws(Ia(e)).left + Rc(e).scrollLeft;
}
function Ts(e) {
  if (Va(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || Bp(e) && e.host || Ia(e);
  return Bp(t) ? t.host : t;
}
function ty(e) {
  const t = Ts(e);
  return hh(t) ? t.ownerDocument.body : Gr(t) && Pc(t) ? t : ty(t);
}
function ny(e, t) {
  var r;
  t === void 0 && (t = []);
  const n = ty(e), a = n === ((r = e.ownerDocument) == null ? void 0 : r.body), o = wr(n);
  return a ? t.concat(o, o.visualViewport || [], Pc(n) ? n : []) : t.concat(n, ny(n));
}
function Ip(e, t, r) {
  return t === "viewport" ? gs(function(n, a) {
    const o = wr(n), f = Ia(n), s = o.visualViewport;
    let c = f.clientWidth, d = f.clientHeight, g = 0, y = 0;
    if (s) {
      c = s.width, d = s.height;
      const v = Zg();
      (v || !v && a === "fixed") && (g = s.offsetLeft, y = s.offsetTop);
    }
    return { width: c, height: d, x: g, y };
  }(e, r)) : Ba(t) ? gs(function(n, a) {
    const o = ws(n, !0, a === "fixed"), f = o.top + n.clientTop, s = o.left + n.clientLeft, c = Gr(n) ? qo(n) : { x: 1, y: 1 };
    return { width: n.clientWidth * c.x, height: n.clientHeight * c.y, x: s * c.x, y: f * c.y };
  }(t, r)) : gs(function(n) {
    const a = Ia(n), o = Rc(n), f = n.ownerDocument.body, s = ys(a.scrollWidth, a.clientWidth, f.scrollWidth, f.clientWidth), c = ys(a.scrollHeight, a.clientHeight, f.scrollHeight, f.clientHeight);
    let d = -o.scrollLeft + ey(n);
    const g = -o.scrollTop;
    return qr(f).direction === "rtl" && (d += ys(a.clientWidth, f.clientWidth) - s), { width: s, height: c, x: d, y: g };
  }(Ia(e)));
}
function Hp(e) {
  return Gr(e) && qr(e).position !== "fixed" ? e.offsetParent : null;
}
function Wp(e) {
  const t = wr(e);
  let r = Hp(e);
  for (; r && cE(r) && qr(r).position === "static"; )
    r = Hp(r);
  return r && (Va(r) === "html" || Va(r) === "body" && qr(r).position === "static" && !Pf(r)) ? t : r || function(n) {
    let a = Ts(n);
    for (; Gr(a) && !hh(a); ) {
      if (Pf(a))
        return a;
      a = Ts(a);
    }
    return null;
  }(e) || t;
}
function dE(e, t, r) {
  const n = Gr(t), a = Ia(t), o = ws(e, !0, r === "fixed", t);
  let f = { scrollLeft: 0, scrollTop: 0 };
  const s = { x: 0, y: 0 };
  if (n || !n && r !== "fixed")
    if ((Va(t) !== "body" || Pc(a)) && (f = Rc(t)), Gr(t)) {
      const c = ws(t, !0);
      s.x = c.x + t.clientLeft, s.y = c.y + t.clientTop;
    } else
      a && (s.x = ey(a));
  return { x: o.left + f.scrollLeft - s.x, y: o.top + f.scrollTop - s.y, width: o.width, height: o.height };
}
const fE = { getClippingRect: function(e) {
  let { element: t, boundary: r, rootBoundary: n, strategy: a } = e;
  const o = r === "clippingAncestors" ? function(d, g) {
    const y = g.get(d);
    if (y)
      return y;
    let v = ny(d).filter((T) => Ba(T) && Va(T) !== "body"), E = null;
    const k = qr(d).position === "fixed";
    let M = k ? Ts(d) : d;
    for (; Ba(M) && !hh(M); ) {
      const T = qr(M), m = Pf(M);
      (k ? m || E : m || T.position !== "static" || !E || !["absolute", "fixed"].includes(E.position)) ? E = T : v = v.filter((D) => D !== M), M = Ts(M);
    }
    return g.set(d, v), v;
  }(t, this._c) : [].concat(r), f = [...o, n], s = f[0], c = f.reduce((d, g) => {
    const y = Ip(t, g, a);
    return d.top = ys(y.top, d.top), d.right = $p(y.right, d.right), d.bottom = $p(y.bottom, d.bottom), d.left = ys(y.left, d.left), d;
  }, Ip(t, s, a));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: r, strategy: n } = e;
  const a = Gr(r), o = Ia(r);
  if (r === o)
    return t;
  let f = { scrollLeft: 0, scrollTop: 0 }, s = { x: 1, y: 1 };
  const c = { x: 0, y: 0 };
  if ((a || !a && n !== "fixed") && ((Va(r) !== "body" || Pc(o)) && (f = Rc(r)), Gr(r))) {
    const d = ws(r);
    s = qo(r), c.x = d.x + r.clientLeft, c.y = d.y + r.clientTop;
  }
  return { width: t.width * s.x, height: t.height * s.y, x: t.x * s.x - f.scrollLeft * s.x + c.x, y: t.y * s.y - f.scrollTop * s.y + c.y };
}, isElement: Ba, getDimensions: function(e) {
  return Gr(e) ? Xg(e) : e.getBoundingClientRect();
}, getOffsetParent: Wp, getDocumentElement: Ia, getScale: qo, async getElementRects(e) {
  let { reference: t, floating: r, strategy: n } = e;
  const a = this.getOffsetParent || Wp, o = this.getDimensions;
  return { reference: dE(t, await a(r), n), floating: { x: 0, y: 0, ...await o(r) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => qr(e).direction === "rtl" }, Vp = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), a = { platform: fE, ...r }, o = { ...a.platform, _c: n };
  return (async (f, s, c) => {
    const { placement: d = "bottom", strategy: g = "absolute", middleware: y = [], platform: v } = c, E = y.filter(Boolean), k = await (v.isRTL == null ? void 0 : v.isRTL(s));
    if (v == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), E.filter((N) => {
      let { name: R } = N;
      return R === "autoPlacement" || R === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    f && s || console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
    let M = await v.getElementRects({ reference: f, floating: s, strategy: g }), { x: T, y: m } = zp(M, d, k), D = d, L = {}, _ = 0;
    for (let N = 0; N < E.length; N++) {
      const { name: R, fn: U } = E[N], { x: H, y: Y, data: Z, reset: re } = await U({ x: T, y: m, initialPlacement: d, placement: D, strategy: g, middlewareData: L, rects: M, platform: v, elements: { reference: f, floating: s } });
      T = H ?? T, m = Y ?? m, L = { ...L, [R]: { ...L[R], ...Z } }, _ > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), re && _ <= 50 && (_++, typeof re == "object" && (re.placement && (D = re.placement), re.rects && (M = re.rects === !0 ? await v.getElementRects({ reference: f, floating: s, strategy: g }) : re.rects), { x: T, y: m } = zp(M, D, k)), N = -1);
    }
    return { x: T, y: m, placement: D, strategy: g, middlewareData: L };
  })(e, t, { ...a, platform: o });
};
var _a, Bi = { exports: {} }, jp = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
_a = jp, function() {
  var e = i, t = 60103, r = 60106;
  _a.Fragment = 60107;
  var n = 60108, a = 60114, o = 60109, f = 60110, s = 60112, c = 60113, d = 60120, g = 60115, y = 60116, v = 60121, E = 60122, k = 60117, M = 60129, T = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var m = Symbol.for;
    t = m("react.element"), r = m("react.portal"), _a.Fragment = m("react.fragment"), n = m("react.strict_mode"), a = m("react.profiler"), o = m("react.provider"), f = m("react.context"), s = m("react.forward_ref"), c = m("react.suspense"), d = m("react.suspense_list"), g = m("react.memo"), y = m("react.lazy"), v = m("react.block"), E = m("react.server.block"), k = m("react.fundamental"), m("react.scope"), m("react.opaque.id"), M = m("react.debug_trace_mode"), m("react.offscreen"), T = m("react.legacy_hidden");
  }
  var D = typeof Symbol == "function" && Symbol.iterator, L = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function _(ge) {
    for (var Re = arguments.length, oe = new Array(Re > 1 ? Re - 1 : 0), we = 1; we < Re; we++)
      oe[we - 1] = arguments[we];
    N("error", ge, oe);
  }
  function N(ge, Re, oe) {
    var we = L.ReactDebugCurrentFrame, Ce = "";
    if (Y) {
      var Be = U(Y.type), je = Y._owner;
      Ce += function(ot, Je, it) {
        var Xe = "";
        if (Je) {
          var Ie = Je.fileName, Me = Ie.replace(R, "");
          if (/^index\./.test(Me)) {
            var ut = Ie.match(R);
            if (ut) {
              var Ve = ut[1];
              Ve && (Me = Ve.replace(R, "") + "/" + Me);
            }
          }
          Xe = " (at " + Me + ":" + Je.lineNumber + ")";
        } else
          it && (Xe = " (created by " + it + ")");
        return `
    in ` + (ot || "Unknown") + Xe;
      }(Be, Y._source, je && U(je.type));
    }
    (Ce += we.getStackAddendum()) !== "" && (Re += "%s", oe = oe.concat([Ce]));
    var qe = oe.map(function(ot) {
      return "" + ot;
    });
    qe.unshift("Warning: " + Re), Function.prototype.apply.call(console[ge], console, qe);
  }
  var R = /^(.*)[\\\/]/;
  function U(ge) {
    if (ge == null)
      return null;
    if (typeof ge.tag == "number" && _("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof ge == "function")
      return ge.displayName || ge.name || null;
    if (typeof ge == "string")
      return ge;
    switch (ge) {
      case _a.Fragment:
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
    if (typeof ge == "object")
      switch (ge.$$typeof) {
        case f:
          return "Context.Consumer";
        case o:
          return "Context.Provider";
        case s:
          return we = ge, Ce = ge.render, Be = "ForwardRef", je = Ce.displayName || Ce.name || "", we.displayName || (je !== "" ? Be + "(" + je + ")" : Be);
        case g:
          return U(ge.type);
        case v:
          return U(ge.render);
        case y:
          var Re = (oe = ge)._status === 1 ? oe._result : null;
          if (Re)
            return U(Re);
      }
    var oe, we, Ce, Be, je;
    return null;
  }
  var H = {};
  L.ReactDebugCurrentFrame;
  var Y = null;
  function Z(ge) {
    Y = ge;
  }
  var re, K, q, me = L.ReactCurrentOwner, W = Object.prototype.hasOwnProperty, se = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ce(ge, Re, oe, we, Ce) {
    var Be, je = {}, qe = null, ot = null;
    for (Be in oe !== void 0 && (qe = "" + oe), function(Xe) {
      if (W.call(Xe, "key")) {
        var Ie = Object.getOwnPropertyDescriptor(Xe, "key").get;
        if (Ie && Ie.isReactWarning)
          return !1;
      }
      return Xe.key !== void 0;
    }(Re) && (qe = "" + Re.key), function(Xe) {
      if (W.call(Xe, "ref")) {
        var Ie = Object.getOwnPropertyDescriptor(Xe, "ref").get;
        if (Ie && Ie.isReactWarning)
          return !1;
      }
      return Xe.ref !== void 0;
    }(Re) && (ot = Re.ref, function(Xe, Ie) {
      if (typeof Xe.ref == "string" && me.current && Ie && me.current.stateNode !== Ie) {
        var Me = U(me.current.type);
        q[Me] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', U(me.current.type), Xe.ref), q[Me] = !0);
      }
    }(Re, Ce)), Re)
      W.call(Re, Be) && !se.hasOwnProperty(Be) && (je[Be] = Re[Be]);
    if (ge && ge.defaultProps) {
      var Je = ge.defaultProps;
      for (Be in Je)
        je[Be] === void 0 && (je[Be] = Je[Be]);
    }
    if (qe || ot) {
      var it = typeof ge == "function" ? ge.displayName || ge.name || "Unknown" : ge;
      qe && function(Xe, Ie) {
        var Me = function() {
          re || (re = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Ie));
        };
        Me.isReactWarning = !0, Object.defineProperty(Xe, "key", { get: Me, configurable: !0 });
      }(je, it), ot && function(Xe, Ie) {
        var Me = function() {
          K || (K = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Ie));
        };
        Me.isReactWarning = !0, Object.defineProperty(Xe, "ref", { get: Me, configurable: !0 });
      }(je, it);
    }
    return function(Xe, Ie, Me, ut, Ve, Ge, lt) {
      var ct = { $$typeof: t, type: Xe, key: Ie, ref: Me, props: lt, _owner: Ge, _store: {} };
      return Object.defineProperty(ct._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: !1 }), Object.defineProperty(ct, "_self", { configurable: !1, enumerable: !1, writable: !1, value: ut }), Object.defineProperty(ct, "_source", { configurable: !1, enumerable: !1, writable: !1, value: Ve }), Object.freeze && (Object.freeze(ct.props), Object.freeze(ct)), ct;
    }(ge, qe, ot, Ce, we, me.current, je);
  }
  q = {};
  var he, ie = L.ReactCurrentOwner;
  function V(ge) {
    Y = ge;
  }
  function J(ge) {
    return typeof ge == "object" && ge !== null && ge.$$typeof === t;
  }
  function ne() {
    if (ie.current) {
      var ge = U(ie.current.type);
      if (ge)
        return `

Check the render method of \`` + ge + "`.";
    }
    return "";
  }
  L.ReactDebugCurrentFrame, he = !1;
  var Ae = {};
  function xe(ge, Re) {
    if (ge._store && !ge._store.validated && ge.key == null) {
      ge._store.validated = !0;
      var oe = function(Ce) {
        var Be = ne();
        if (!Be) {
          var je = typeof Ce == "string" ? Ce : Ce.displayName || Ce.name;
          je && (Be = `

Check the top-level render call using <` + je + ">.");
        }
        return Be;
      }(Re);
      if (!Ae[oe]) {
        Ae[oe] = !0;
        var we = "";
        ge && ge._owner && ge._owner !== ie.current && (we = " It was passed a child from " + U(ge._owner.type) + "."), V(ge), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', oe, we), V(null);
      }
    }
  }
  function Pe(ge, Re) {
    if (typeof ge == "object") {
      if (Array.isArray(ge))
        for (var oe = 0; oe < ge.length; oe++) {
          var we = ge[oe];
          J(we) && xe(we, Re);
        }
      else if (J(ge))
        ge._store && (ge._store.validated = !0);
      else if (ge) {
        var Ce = function(qe) {
          if (qe === null || typeof qe != "object")
            return null;
          var ot = D && qe[D] || qe["@@iterator"];
          return typeof ot == "function" ? ot : null;
        }(ge);
        if (typeof Ce == "function" && Ce !== ge.entries)
          for (var Be, je = Ce.call(ge); !(Be = je.next()).done; )
            J(Be.value) && xe(Be.value, Re);
      }
    }
  }
  function le(ge) {
    var Re, oe = ge.type;
    if (oe != null && typeof oe != "string") {
      if (typeof oe == "function")
        Re = oe.propTypes;
      else {
        if (typeof oe != "object" || oe.$$typeof !== s && oe.$$typeof !== g)
          return;
        Re = oe.propTypes;
      }
      if (Re) {
        var we = U(oe);
        (function(Ce, Be, je, qe, ot) {
          var Je = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var it in Ce)
            if (Je(Ce, it)) {
              var Xe = void 0;
              try {
                if (typeof Ce[it] != "function") {
                  var Ie = Error((qe || "React class") + ": " + je + " type `" + it + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof Ce[it] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Ie.name = "Invariant Violation", Ie;
                }
                Xe = Ce[it](Be, it, qe, je, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Me) {
                Xe = Me;
              }
              !Xe || Xe instanceof Error || (Z(ot), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", qe || "React class", je, it, typeof Xe), Z(null)), Xe instanceof Error && !(Xe.message in H) && (H[Xe.message] = !0, Z(ot), _("Failed %s type: %s", je, Xe.message), Z(null));
            }
        })(Re, ge.props, "prop", we, ge);
      } else
        oe.PropTypes === void 0 || he || (he = !0, _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U(oe) || "Unknown"));
      typeof oe.getDefaultProps != "function" || oe.getDefaultProps.isReactClassApproved || _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function _e(ge, Re, oe, we, Ce, Be) {
    var je = function(Me) {
      return typeof Me == "string" || typeof Me == "function" || Me === _a.Fragment || Me === a || Me === M || Me === n || Me === c || Me === d || Me === T || typeof Me == "object" && Me !== null && (Me.$$typeof === y || Me.$$typeof === g || Me.$$typeof === o || Me.$$typeof === f || Me.$$typeof === s || Me.$$typeof === k || Me.$$typeof === v || Me[0] === E);
    }(ge);
    if (!je) {
      var qe = "";
      (ge === void 0 || typeof ge == "object" && ge !== null && Object.keys(ge).length === 0) && (qe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
      var ot, Je = function(Me) {
        return Me !== void 0 ? `

Check your code at ` + Me.fileName.replace(/^.*[\\\/]/, "") + ":" + Me.lineNumber + "." : "";
      }(Ce);
      qe += Je || ne(), ge === null ? ot = "null" : Array.isArray(ge) ? ot = "array" : ge !== void 0 && ge.$$typeof === t ? (ot = "<" + (U(ge.type) || "Unknown") + " />", qe = " Did you accidentally export a JSX literal instead of a component?") : ot = typeof ge, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ot, qe);
    }
    var it = ce(ge, Re, oe, Ce, Be);
    if (it == null)
      return it;
    if (je) {
      var Xe = Re.children;
      if (Xe !== void 0)
        if (we)
          if (Array.isArray(Xe)) {
            for (var Ie = 0; Ie < Xe.length; Ie++)
              Pe(Xe[Ie], ge);
            Object.freeze && Object.freeze(Xe);
          } else
            _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          Pe(Xe, ge);
    }
    return ge === _a.Fragment ? function(Me) {
      for (var ut = Object.keys(Me.props), Ve = 0; Ve < ut.length; Ve++) {
        var Ge = ut[Ve];
        if (Ge !== "children" && Ge !== "key") {
          V(Me), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ge), V(null);
          break;
        }
      }
      Me.ref !== null && (V(Me), _("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
    }(it) : le(it), it;
  }
  var $e = function(ge, Re, oe) {
    return _e(ge, Re, oe, !1);
  }, Te = function(ge, Re, oe) {
    return _e(ge, Re, oe, !0);
  };
  _a.jsx = $e, _a.jsxs = Te;
}(), Bi.exports = jp;
var jd, ry = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
jd = ry, function() {
  var e = {}.hasOwnProperty;
  function t() {
    for (var r = [], n = 0; n < arguments.length; n++) {
      var a = arguments[n];
      if (a) {
        var o = typeof a;
        if (o === "string" || o === "number")
          r.push(a);
        else if (Array.isArray(a)) {
          if (a.length) {
            var f = t.apply(null, a);
            f && r.push(f);
          }
        } else if (o === "object") {
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
  jd.exports ? (t.default = t, jd.exports = t) : window.classNames = t;
}();
var Up = ry.exports;
const Kp = (e, t, r) => {
  let n = null;
  return function(...a) {
    n && clearTimeout(n), n = setTimeout(() => {
      n = null, r || e.apply(this, a);
    }, t);
  };
}, hE = ({ content: e }) => Bi.exports.jsx("span", { dangerouslySetInnerHTML: { __html: e } }), pE = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, mE = ue.createContext({ getTooltipData: () => pE });
function ay(e = "DEFAULT_TOOLTIP_ID") {
  return ue.useContext(mE).getTooltipData(e);
}
const Yp = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: r = null, place: n = "top", offset: a = 10, strategy: o = "absolute", middlewares: f = [sE(Number(a)), lE(), uE({ padding: 5 })] }) => {
  if (!e)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  if (t === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  const s = f;
  return r ? (s.push({ name: "arrow", options: c = { element: r, padding: 5 }, async fn(d) {
    const { element: g, padding: y = 0 } = c || {}, { x: v, y: E, placement: k, rects: M, platform: T } = d;
    if (g == null)
      return console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const m = Kg(y), D = { x: v, y: E }, L = Ps(k), _ = fh(L), N = await T.getDimensions(g), R = L === "y" ? "top" : "left", U = L === "y" ? "bottom" : "right", H = M.reference[_] + M.reference[L] - D[L] - M.floating[_], Y = D[L] - M.reference[L], Z = await (T.getOffsetParent == null ? void 0 : T.getOffsetParent(g));
    let re = Z ? L === "y" ? Z.clientHeight || 0 : Z.clientWidth || 0 : 0;
    re === 0 && (re = M.floating[_]);
    const K = H / 2 - Y / 2, q = m[R], me = re - N[_] - m[U], W = re / 2 - N[_] / 2 + K, se = Af(q, W, me), ce = As(k) != null && W != se && M.reference[_] / 2 - (W < q ? m[R] : m[U]) - N[_] / 2 < 0;
    return { [L]: D[L] - (ce ? W < q ? q - W : me - W : 0), data: { [L]: se, centerOffset: W - se } };
  } }), Vp(e, t, { placement: n, strategy: o, middleware: s }).then(({ x: d, y: g, placement: y, middlewareData: v }) => {
    var E, k;
    const M = { left: `${d}px`, top: `${g}px` }, { x: T, y: m } = (E = v.arrow) !== null && E !== void 0 ? E : { x: 0, y: 0 };
    return { tooltipStyles: M, tooltipArrowStyles: { left: T != null ? `${T}px` : "", top: m != null ? `${m}px` : "", right: "", bottom: "", [(k = { top: "bottom", right: "left", bottom: "top", left: "right" }[y.split("-")[0]]) !== null && k !== void 0 ? k : "bottom"]: "-4px" } };
  })) : Vp(e, t, { placement: "bottom", strategy: o, middleware: s }).then(({ x: d, y: g }) => ({ tooltipStyles: { left: `${d}px`, top: `${g}px` }, tooltipArrowStyles: {} }));
  var c;
};
var Pi = { tooltip: "styles-module_tooltip__mnnfp", fixed: "styles-module_fixed__7ciUi", arrow: "styles-module_arrow__K0L3T", "no-arrow": "styles-module_no-arrow__KcFZN", clickable: "styles-module_clickable__Bv9o7", show: "styles-module_show__2NboJ", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const Xp = ({ id: e, className: t, classNameArrow: r, variant: n = "dark", anchorId: a, anchorSelect: o, place: f = "top", offset: s = 10, events: c = ["hover"], positionStrategy: d = "absolute", middlewares: g, wrapper: y, children: v = null, delayShow: E = 0, delayHide: k = 0, float: M = !1, noArrow: T = !1, clickable: m = !1, closeOnEsc: D = !1, style: L, position: _, afterShow: N, afterHide: R, content: U, html: H, isOpen: Y, setIsOpen: Z, activeAnchor: re, setActiveAnchor: K }) => {
  const q = ue.useRef(null), me = ue.useRef(null), W = ue.useRef(null), se = ue.useRef(null), [ce, he] = ue.useState({}), [ie, V] = ue.useState({}), [J, ne] = ue.useState(!1), [Ae, xe] = ue.useState(!1), Pe = ue.useRef(!1), le = ue.useRef(null), { anchorRefs: _e, setActiveAnchor: $e } = ay(e), Te = ue.useRef(!1), [ge, Re] = ue.useState([]), oe = ue.useRef(!1);
  ue.useLayoutEffect(() => (oe.current = !0, () => {
    oe.current = !1;
  }), []), ue.useEffect(() => {
    if (!J) {
      const Ve = setTimeout(() => {
        xe(!1);
      }, 150);
      return () => {
        clearTimeout(Ve);
      };
    }
    return () => null;
  }, [J]);
  const we = (Ve) => {
    oe.current && (Ve && xe(!0), setTimeout(() => {
      oe.current && (Z == null || Z(Ve), Y === void 0 && ne(Ve));
    }, 10));
  };
  ue.useEffect(() => {
    if (Y === void 0)
      return () => null;
    Y && xe(!0);
    const Ve = setTimeout(() => {
      ne(Y);
    }, 10);
    return () => {
      clearTimeout(Ve);
    };
  }, [Y]), ue.useEffect(() => {
    J !== Pe.current && (Pe.current = J, J ? N == null || N() : R == null || R());
  }, [J]);
  const Ce = (Ve = k) => {
    se.current && clearTimeout(se.current), se.current = setTimeout(() => {
      Te.current || we(!1);
    }, Ve);
  }, Be = (Ve) => {
    var Ge;
    if (!Ve)
      return;
    E ? (W.current && clearTimeout(W.current), W.current = setTimeout(() => {
      we(!0);
    }, E)) : we(!0);
    const lt = (Ge = Ve.currentTarget) !== null && Ge !== void 0 ? Ge : Ve.target;
    K(lt), $e({ current: lt }), se.current && clearTimeout(se.current);
  }, je = () => {
    m ? Ce(k || 100) : k ? Ce() : we(!1), W.current && clearTimeout(W.current);
  }, qe = ({ x: Ve, y: Ge }) => {
    Yp({ place: f, offset: s, elementReference: { getBoundingClientRect: () => ({ x: Ve, y: Ge, width: 0, height: 0, top: Ge, left: Ve, right: Ve, bottom: Ge }) }, tooltipReference: q.current, tooltipArrowReference: me.current, strategy: d, middlewares: g }).then((lt) => {
      Object.keys(lt.tooltipStyles).length && he(lt.tooltipStyles), Object.keys(lt.tooltipArrowStyles).length && V(lt.tooltipArrowStyles);
    });
  }, ot = (Ve) => {
    if (!Ve)
      return;
    const Ge = Ve, lt = { x: Ge.clientX, y: Ge.clientY };
    qe(lt), le.current = lt;
  }, Je = (Ve) => {
    Be(Ve), k && Ce();
  }, it = (Ve) => {
    const Ge = document.querySelector(`[id='${a}']`);
    Ge != null && Ge.contains(Ve.target) || ge.some((lt) => lt.contains(Ve.target)) || we(!1);
  }, Xe = (Ve) => {
    Ve.key === "Escape" && we(!1);
  }, Ie = Kp(Be, 50), Me = Kp(je, 50);
  ue.useEffect(() => {
    var Ve, Ge;
    const lt = new Set(_e);
    ge.forEach((Lt) => {
      lt.add({ current: Lt });
    });
    const ct = document.querySelector(`[id='${a}']`);
    ct && lt.add({ current: ct }), D && window.addEventListener("keydown", Xe);
    const wt = [];
    c.find((Lt) => Lt === "click") && (window.addEventListener("click", it), wt.push({ event: "click", listener: Je })), c.find((Lt) => Lt === "hover") && (wt.push({ event: "mouseenter", listener: Ie }, { event: "mouseleave", listener: Me }, { event: "focus", listener: Ie }, { event: "blur", listener: Me }), M && wt.push({ event: "mousemove", listener: ot }));
    const en = () => {
      Te.current = !0;
    }, an = () => {
      Te.current = !1, je();
    };
    return m && ((Ve = q.current) === null || Ve === void 0 || Ve.addEventListener("mouseenter", en), (Ge = q.current) === null || Ge === void 0 || Ge.addEventListener("mouseleave", an)), wt.forEach(({ event: Lt, listener: $t }) => {
      lt.forEach((Ot) => {
        var Gt;
        (Gt = Ot.current) === null || Gt === void 0 || Gt.addEventListener(Lt, $t);
      });
    }), () => {
      var Lt, $t;
      c.find((Ot) => Ot === "click") && window.removeEventListener("click", it), D && window.removeEventListener("keydown", Xe), m && ((Lt = q.current) === null || Lt === void 0 || Lt.removeEventListener("mouseenter", en), ($t = q.current) === null || $t === void 0 || $t.removeEventListener("mouseleave", an)), wt.forEach(({ event: Ot, listener: Gt }) => {
        lt.forEach((un) => {
          var Ne;
          (Ne = un.current) === null || Ne === void 0 || Ne.removeEventListener(Ot, Gt);
        });
      });
    };
  }, [Ae, _e, ge, D, c]), ue.useEffect(() => {
    let Ve = o ?? "";
    !Ve && e && (Ve = `[data-tooltip-id='${e}']`);
    const Ge = new MutationObserver((lt) => {
      const ct = [];
      lt.forEach((wt) => {
        if (wt.type === "attributes" && wt.attributeName === "data-tooltip-id" && wt.target.getAttribute("data-tooltip-id") === e && ct.push(wt.target), wt.type === "childList" && (re && [...wt.removedNodes].some((en) => !!en.contains(re) && (xe(!1), we(!1), K(null), !0)), Ve))
          try {
            const en = [...wt.addedNodes].filter((an) => an.nodeType === 1);
            ct.push(...en.filter((an) => an.matches(Ve))), ct.push(...en.flatMap((an) => [...an.querySelectorAll(Ve)]));
          } catch {
          }
      }), ct.length && Re((wt) => [...wt, ...ct]);
    });
    return Ge.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"] }), () => {
      Ge.disconnect();
    };
  }, [e, o, re]), ue.useEffect(() => {
    _ ? qe(_) : M ? le.current && qe(le.current) : Yp({ place: f, offset: s, elementReference: re, tooltipReference: q.current, tooltipArrowReference: me.current, strategy: d, middlewares: g }).then((Ve) => {
      oe.current && (Object.keys(Ve.tooltipStyles).length && he(Ve.tooltipStyles), Object.keys(Ve.tooltipArrowStyles).length && V(Ve.tooltipArrowStyles));
    });
  }, [J, re, U, H, f, s, d, _]), ue.useEffect(() => {
    var Ve;
    const Ge = document.querySelector(`[id='${a}']`), lt = [...ge, Ge];
    re && lt.includes(re) || K((Ve = ge[0]) !== null && Ve !== void 0 ? Ve : Ge);
  }, [a, ge, re]), ue.useEffect(() => () => {
    W.current && clearTimeout(W.current), se.current && clearTimeout(se.current);
  }, []), ue.useEffect(() => {
    let Ve = o;
    if (!Ve && e && (Ve = `[data-tooltip-id='${e}']`), Ve)
      try {
        const Ge = Array.from(document.querySelectorAll(Ve));
        Re(Ge);
      } catch {
        Re([]);
      }
  }, [e, o]);
  const ut = !!(H || U || v) && J && Object.keys(ce).length > 0;
  return Ae ? Bi.exports.jsxs(y, { id: e, role: "tooltip", className: Up("react-tooltip", Pi.tooltip, Pi[n], t, { [Pi.show]: ut, [Pi.fixed]: d === "fixed", [Pi.clickable]: m }), style: { ...L, ...ce }, ref: q, children: [H && Bi.exports.jsx(hE, { content: H }) || U || v, Bi.exports.jsx(y, { className: Up("react-tooltip-arrow", Pi.arrow, r, { [Pi["no-arrow"]]: T }), style: ie, ref: me })] }) : null;
}, iy = ({ id: e, anchorId: t, anchorSelect: r, content: n, html: a, className: o, classNameArrow: f, variant: s = "dark", place: c = "top", offset: d = 10, wrapper: g = "div", children: y = null, events: v = ["hover"], positionStrategy: E = "absolute", middlewares: k, delayShow: M = 0, delayHide: T = 0, float: m = !1, noArrow: D = !1, clickable: L = !1, closeOnEsc: _ = !1, style: N, position: R, isOpen: U, setIsOpen: H, afterShow: Y, afterHide: Z }) => {
  const [re, K] = ue.useState(n), [q, me] = ue.useState(a), [W, se] = ue.useState(c), [ce, he] = ue.useState(s), [ie, V] = ue.useState(d), [J, ne] = ue.useState(M), [Ae, xe] = ue.useState(T), [Pe, le] = ue.useState(m), [_e, $e] = ue.useState(g), [Te, ge] = ue.useState(v), [Re, oe] = ue.useState(E), [we, Ce] = ue.useState(null), { anchorRefs: Be, activeAnchor: je } = ay(e), qe = (it) => it == null ? void 0 : it.getAttributeNames().reduce((Xe, Ie) => {
    var Me;
    return Ie.startsWith("data-tooltip-") && (Xe[Ie.replace(/^data-tooltip-/, "")] = (Me = it == null ? void 0 : it.getAttribute(Ie)) !== null && Me !== void 0 ? Me : null), Xe;
  }, {}), ot = (it) => {
    const Xe = { place: (Ie) => {
      var Me;
      se((Me = Ie) !== null && Me !== void 0 ? Me : c);
    }, content: (Ie) => {
      K(Ie ?? n);
    }, html: (Ie) => {
      me(Ie ?? a);
    }, variant: (Ie) => {
      var Me;
      he((Me = Ie) !== null && Me !== void 0 ? Me : s);
    }, offset: (Ie) => {
      V(Ie === null ? d : Number(Ie));
    }, wrapper: (Ie) => {
      var Me;
      $e((Me = Ie) !== null && Me !== void 0 ? Me : g);
    }, events: (Ie) => {
      const Me = Ie == null ? void 0 : Ie.split(" ");
      ge(Me ?? v);
    }, "position-strategy": (Ie) => {
      var Me;
      oe((Me = Ie) !== null && Me !== void 0 ? Me : E);
    }, "delay-show": (Ie) => {
      ne(Ie === null ? M : Number(Ie));
    }, "delay-hide": (Ie) => {
      xe(Ie === null ? T : Number(Ie));
    }, float: (Ie) => {
      le(Ie === null ? m : !!Ie);
    } };
    Object.values(Xe).forEach((Ie) => Ie(null)), Object.entries(it).forEach(([Ie, Me]) => {
      var ut;
      (ut = Xe[Ie]) === null || ut === void 0 || ut.call(Xe, Me);
    });
  };
  ue.useEffect(() => {
    K(n);
  }, [n]), ue.useEffect(() => {
    me(a);
  }, [a]), ue.useEffect(() => {
    se(c);
  }, [c]), ue.useEffect(() => {
    var it;
    const Xe = new Set(Be);
    let Ie = r;
    if (!Ie && e && (Ie = `[data-tooltip-id='${e}']`), Ie)
      try {
        document.querySelectorAll(Ie).forEach((lt) => {
          Xe.add({ current: lt });
        });
      } catch {
        console.warn(`[react-tooltip] "${r}" is not a valid CSS selector`);
      }
    const Me = document.querySelector(`[id='${t}']`);
    if (Me && Xe.add({ current: Me }), !Xe.size)
      return () => null;
    const ut = (it = we ?? Me) !== null && it !== void 0 ? it : je.current, Ve = new MutationObserver((lt) => {
      lt.forEach((ct) => {
        var wt;
        if (!ut || ct.type !== "attributes" || !(!((wt = ct.attributeName) === null || wt === void 0) && wt.startsWith("data-tooltip-")))
          return;
        const en = qe(ut);
        ot(en);
      });
    }), Ge = { attributes: !0, childList: !1, subtree: !1 };
    if (ut) {
      const lt = qe(ut);
      ot(lt), Ve.observe(ut, Ge);
    }
    return () => {
      Ve.disconnect();
    };
  }, [Be, je, we, t, r]);
  const Je = { id: e, anchorId: t, anchorSelect: r, className: o, classNameArrow: f, content: re, html: q, place: W, variant: ce, offset: ie, wrapper: _e, events: Te, positionStrategy: Re, middlewares: k, delayShow: J, delayHide: Ae, float: Pe, noArrow: D, clickable: L, closeOnEsc: _, style: N, position: R, isOpen: U, setIsOpen: H, afterShow: Y, afterHide: Z, activeAnchor: we, setActiveAnchor: (it) => Ce(it) };
  return y ? Bi.exports.jsx(Xp, { ...Je, children: y }) : Bi.exports.jsx(Xp, { ...Je });
};
function qp(e, t) {
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
function gE(e, t) {
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
function Ud(e, t) {
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
function yE(e) {
  return e.depth;
}
function vE(e, t) {
  return e.sourceLinks.length ? e.depth : t - 1;
}
function Du(e) {
  return function() {
    return e;
  };
}
function Gp(e, t) {
  return hc(e.source, t.source) || e.index - t.index;
}
function Zp(e, t) {
  return hc(e.target, t.target) || e.index - t.index;
}
function hc(e, t) {
  return e.y0 - t.y0;
}
function Kd(e) {
  return e.value;
}
function xE(e) {
  return e.index;
}
function bE(e) {
  return e.nodes;
}
function SE(e) {
  return e.links;
}
function Qp(e, t) {
  const r = e.get(t);
  if (!r)
    throw new Error("missing: " + t);
  return r;
}
function Jp({ nodes: e }) {
  for (const t of e) {
    let r = t.y0, n = r;
    for (const a of t.sourceLinks)
      a.y0 = r + a.width / 2, r += a.width;
    for (const a of t.targetLinks)
      a.y1 = n + a.width / 2, n += a.width;
  }
}
function EE() {
  let e = 0, t = 0, r = 1, n = 1, a = 24, o = 8, f, s = xE, c = vE, d, g, y = bE, v = SE, E = 6;
  function k() {
    const W = { nodes: y.apply(null, arguments), links: v.apply(null, arguments) };
    return M(W), T(W), m(W), D(W), N(W), Jp(W), W;
  }
  k.update = function(W) {
    return Jp(W), W;
  }, k.nodeId = function(W) {
    return arguments.length ? (s = typeof W == "function" ? W : Du(W), k) : s;
  }, k.nodeAlign = function(W) {
    return arguments.length ? (c = typeof W == "function" ? W : Du(W), k) : c;
  }, k.nodeSort = function(W) {
    return arguments.length ? (d = W, k) : d;
  }, k.nodeWidth = function(W) {
    return arguments.length ? (a = +W, k) : a;
  }, k.nodePadding = function(W) {
    return arguments.length ? (o = f = +W, k) : o;
  }, k.nodes = function(W) {
    return arguments.length ? (y = typeof W == "function" ? W : Du(W), k) : y;
  }, k.links = function(W) {
    return arguments.length ? (v = typeof W == "function" ? W : Du(W), k) : v;
  }, k.linkSort = function(W) {
    return arguments.length ? (g = W, k) : g;
  }, k.size = function(W) {
    return arguments.length ? (e = t = 0, r = +W[0], n = +W[1], k) : [r - e, n - t];
  }, k.extent = function(W) {
    return arguments.length ? (e = +W[0][0], r = +W[1][0], t = +W[0][1], n = +W[1][1], k) : [[e, t], [r, n]];
  }, k.iterations = function(W) {
    return arguments.length ? (E = +W, k) : E;
  };
  function M({ nodes: W, links: se }) {
    for (const [he, ie] of W.entries())
      ie.index = he, ie.sourceLinks = [], ie.targetLinks = [];
    const ce = new Map(W.map((he, ie) => [s(he, ie, W), he]));
    for (const [he, ie] of se.entries()) {
      ie.index = he;
      let { source: V, target: J } = ie;
      typeof V != "object" && (V = ie.source = Qp(ce, V)), typeof J != "object" && (J = ie.target = Qp(ce, J)), V.sourceLinks.push(ie), J.targetLinks.push(ie);
    }
    if (g != null)
      for (const { sourceLinks: he, targetLinks: ie } of W)
        he.sort(g), ie.sort(g);
  }
  function T({ nodes: W }) {
    for (const se of W)
      se.value = se.fixedValue === void 0 ? Math.max(Ud(se.sourceLinks, Kd), Ud(se.targetLinks, Kd)) : se.fixedValue;
  }
  function m({ nodes: W }) {
    const se = W.length;
    let ce = new Set(W), he = /* @__PURE__ */ new Set(), ie = 0;
    for (; ce.size; ) {
      for (const V of ce) {
        V.depth = ie;
        for (const { target: J } of V.sourceLinks)
          he.add(J);
      }
      if (++ie > se)
        throw new Error("circular link");
      ce = he, he = /* @__PURE__ */ new Set();
    }
  }
  function D({ nodes: W }) {
    const se = W.length;
    let ce = new Set(W), he = /* @__PURE__ */ new Set(), ie = 0;
    for (; ce.size; ) {
      for (const V of ce) {
        V.height = ie;
        for (const { source: J } of V.targetLinks)
          he.add(J);
      }
      if (++ie > se)
        throw new Error("circular link");
      ce = he, he = /* @__PURE__ */ new Set();
    }
  }
  function L({ nodes: W }) {
    const se = qp(W, (ie) => ie.depth) + 1, ce = (r - e - a) / (se - 1), he = new Array(se);
    for (const ie of W) {
      const V = Math.max(0, Math.min(se - 1, Math.floor(c.call(null, ie, se))));
      ie.layer = V, ie.x0 = e + V * ce, ie.x1 = ie.x0 + a, he[V] ? he[V].push(ie) : he[V] = [ie];
    }
    if (d)
      for (const ie of he)
        ie.sort(d);
    return he;
  }
  function _(W) {
    const se = gE(W, (ce) => (n - t - (ce.length - 1) * f) / Ud(ce, Kd));
    for (const ce of W) {
      let he = t;
      for (const ie of ce) {
        ie.y0 = he, ie.y1 = he + ie.value * se, he = ie.y1 + f;
        for (const V of ie.sourceLinks)
          V.width = V.value * se;
      }
      he = (n - he + f) / (ce.length + 1);
      for (let ie = 0; ie < ce.length; ++ie) {
        const V = ce[ie];
        V.y0 += he * (ie + 1), V.y1 += he * (ie + 1);
      }
      K(ce);
    }
  }
  function N(W) {
    const se = L(W);
    f = Math.min(o, (n - t) / (qp(se, (ce) => ce.length) - 1)), _(se);
    for (let ce = 0; ce < E; ++ce) {
      const he = Math.pow(0.99, ce), ie = Math.max(1 - he, (ce + 1) / E);
      U(se, he, ie), R(se, he, ie);
    }
  }
  function R(W, se, ce) {
    for (let he = 1, ie = W.length; he < ie; ++he) {
      const V = W[he];
      for (const J of V) {
        let ne = 0, Ae = 0;
        for (const { source: Pe, value: le } of J.targetLinks) {
          let _e = le * (J.layer - Pe.layer);
          ne += q(Pe, J) * _e, Ae += _e;
        }
        if (!(Ae > 0))
          continue;
        let xe = (ne / Ae - J.y0) * se;
        J.y0 += xe, J.y1 += xe, re(J);
      }
      d === void 0 && V.sort(hc), H(V, ce);
    }
  }
  function U(W, se, ce) {
    for (let he = W.length, ie = he - 2; ie >= 0; --ie) {
      const V = W[ie];
      for (const J of V) {
        let ne = 0, Ae = 0;
        for (const { target: Pe, value: le } of J.sourceLinks) {
          let _e = le * (Pe.layer - J.layer);
          ne += me(J, Pe) * _e, Ae += _e;
        }
        if (!(Ae > 0))
          continue;
        let xe = (ne / Ae - J.y0) * se;
        J.y0 += xe, J.y1 += xe, re(J);
      }
      d === void 0 && V.sort(hc), H(V, ce);
    }
  }
  function H(W, se) {
    const ce = W.length >> 1, he = W[ce];
    Z(W, he.y0 - f, ce - 1, se), Y(W, he.y1 + f, ce + 1, se), Z(W, n, W.length - 1, se), Y(W, t, 0, se);
  }
  function Y(W, se, ce, he) {
    for (; ce < W.length; ++ce) {
      const ie = W[ce], V = (se - ie.y0) * he;
      V > 1e-6 && (ie.y0 += V, ie.y1 += V), se = ie.y1 + f;
    }
  }
  function Z(W, se, ce, he) {
    for (; ce >= 0; --ce) {
      const ie = W[ce], V = (ie.y1 - se) * he;
      V > 1e-6 && (ie.y0 -= V, ie.y1 -= V), se = ie.y0 - f;
    }
  }
  function re({ sourceLinks: W, targetLinks: se }) {
    if (g === void 0) {
      for (const { source: { sourceLinks: ce } } of se)
        ce.sort(Zp);
      for (const { target: { targetLinks: ce } } of W)
        ce.sort(Gp);
    }
  }
  function K(W) {
    if (g === void 0)
      for (const { sourceLinks: se, targetLinks: ce } of W)
        se.sort(Zp), ce.sort(Gp);
  }
  function q(W, se) {
    let ce = W.y0 - (W.sourceLinks.length - 1) * f / 2;
    for (const { target: he, width: ie } of W.sourceLinks) {
      if (he === se)
        break;
      ce += ie + f;
    }
    for (const { source: he, width: ie } of se.targetLinks) {
      if (he === W)
        break;
      ce -= ie;
    }
    return ce;
  }
  function me(W, se) {
    let ce = se.y0 - (se.targetLinks.length - 1) * f / 2;
    for (const { source: he, width: ie } of se.targetLinks) {
      if (he === W)
        break;
      ce += ie + f;
    }
    for (const { target: he, width: ie } of W.sourceLinks) {
      if (he === se)
        break;
      ce -= ie;
    }
    return ce;
  }
  return k;
}
function kE(e) {
  return [e.source.x1, e.y0];
}
function wE(e) {
  return [e.target.x0, e.y1];
}
function TE() {
  return h0().source(kE).target(wE);
}
var ja = {}, Ri = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var em;
function CE() {
  if (em)
    return Ri;
  em = 1;
  var e = ue;
  function t(x) {
    for (var A = "https://reactjs.org/docs/error-decoder.html?invariant=" + x, $ = 1; $ < arguments.length; $++)
      A += "&args[]=" + encodeURIComponent(arguments[$]);
    return "Minified React error #" + x + "; visit " + A + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, n = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, a = {}, o = {};
  function f(x) {
    return r.call(o, x) ? !0 : r.call(a, x) ? !1 : n.test(x) ? o[x] = !0 : (a[x] = !0, !1);
  }
  function s(x, A, $, G, be, B, I) {
    this.acceptsBooleans = A === 2 || A === 3 || A === 4, this.attributeName = G, this.attributeNamespace = be, this.mustUseProperty = $, this.propertyName = x, this.type = A, this.sanitizeURL = B, this.removeEmptyString = I;
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
  var E = /["'&<>]/;
  function k(x) {
    if (typeof x == "boolean" || typeof x == "number")
      return "" + x;
    x = "" + x;
    var A = E.exec(x);
    if (A) {
      var $ = "", G, be = 0;
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
        be !== G && ($ += x.substring(be, G)), be = G + 1, $ += A;
      }
      x = be !== G ? $ + x.substring(be, G) : $;
    }
    return x;
  }
  var M = /([A-Z])/g, T = /^ms-/, m = Array.isArray;
  function D(x, A) {
    return { insertionMode: x, selectedValue: A };
  }
  function L(x, A, $) {
    switch (A) {
      case "select":
        return D(1, $.value != null ? $.value : $.defaultValue);
      case "svg":
        return D(2, null);
      case "math":
        return D(3, null);
      case "foreignObject":
        return D(1, null);
      case "table":
        return D(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return D(5, null);
      case "colgroup":
        return D(7, null);
      case "tr":
        return D(6, null);
    }
    return 4 <= x.insertionMode || x.insertionMode === 0 ? D(1, null) : x;
  }
  var _ = /* @__PURE__ */ new Map();
  function N(x, A, $) {
    if (typeof $ != "object")
      throw Error(t(62));
    A = !0;
    for (var G in $)
      if (r.call($, G)) {
        var be = $[G];
        if (be != null && typeof be != "boolean" && be !== "") {
          if (G.indexOf("--") === 0) {
            var B = k(G);
            be = k(("" + be).trim());
          } else {
            B = G;
            var I = _.get(B);
            I !== void 0 || (I = k(B.replace(M, "-$1").toLowerCase().replace(T, "-ms-")), _.set(B, I)), B = I, be = typeof be == "number" ? be === 0 || r.call(y, G) ? "" + be : be + "px" : k(("" + be).trim());
          }
          A ? (A = !1, x.push(' style="', B, ":", be)) : x.push(";", B, ":", be);
        }
      }
    A || x.push('"');
  }
  function R(x, A, $, G) {
    switch ($) {
      case "style":
        N(x, A, G);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < $.length) || $[0] !== "o" && $[0] !== "O" || $[1] !== "n" && $[1] !== "N") {
      if (A = c.hasOwnProperty($) ? c[$] : null, A !== null) {
        switch (typeof G) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!A.acceptsBooleans)
              return;
        }
        switch ($ = A.attributeName, A.type) {
          case 3:
            G && x.push(" ", $, '=""');
            break;
          case 4:
            G === !0 ? x.push(" ", $, '=""') : G !== !1 && x.push(" ", $, '="', k(G), '"');
            break;
          case 5:
            isNaN(G) || x.push(" ", $, '="', k(G), '"');
            break;
          case 6:
            !isNaN(G) && 1 <= G && x.push(" ", $, '="', k(G), '"');
            break;
          default:
            A.sanitizeURL && (G = "" + G), x.push(" ", $, '="', k(G), '"');
        }
      } else if (f($)) {
        switch (typeof G) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (A = $.toLowerCase().slice(0, 5), A !== "data-" && A !== "aria-")
              return;
        }
        x.push(" ", $, '="', k(G), '"');
      }
    }
  }
  function U(x, A, $) {
    if (A != null) {
      if ($ != null)
        throw Error(t(60));
      if (typeof A != "object" || !("__html" in A))
        throw Error(t(61));
      A = A.__html, A != null && x.push("" + A);
    }
  }
  function H(x) {
    var A = "";
    return e.Children.forEach(x, function($) {
      $ != null && (A += $);
    }), A;
  }
  function Y(x, A, $, G) {
    x.push(K($));
    var be = $ = null, B;
    for (B in A)
      if (r.call(A, B)) {
        var I = A[B];
        if (I != null)
          switch (B) {
            case "children":
              $ = I;
              break;
            case "dangerouslySetInnerHTML":
              be = I;
              break;
            default:
              R(x, G, B, I);
          }
      }
    return x.push(">"), U(x, be, $), typeof $ == "string" ? (x.push(k($)), null) : $;
  }
  var Z = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, re = /* @__PURE__ */ new Map();
  function K(x) {
    var A = re.get(x);
    if (A === void 0) {
      if (!Z.test(x))
        throw Error(t(65, x));
      A = "<" + x, re.set(x, A);
    }
    return A;
  }
  function q(x, A, $, G, be) {
    switch (A) {
      case "select":
        x.push(K("select"));
        var B = null, I = null;
        for (tt in $)
          if (r.call($, tt)) {
            var te = $[tt];
            if (te != null)
              switch (tt) {
                case "children":
                  B = te;
                  break;
                case "dangerouslySetInnerHTML":
                  I = te;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  R(x, G, tt, te);
              }
          }
        return x.push(">"), U(x, I, B), B;
      case "option":
        I = be.selectedValue, x.push(K("option"));
        var ye = te = null, Ye = null, tt = null;
        for (B in $)
          if (r.call($, B)) {
            var Pt = $[B];
            if (Pt != null)
              switch (B) {
                case "children":
                  te = Pt;
                  break;
                case "selected":
                  Ye = Pt;
                  break;
                case "dangerouslySetInnerHTML":
                  tt = Pt;
                  break;
                case "value":
                  ye = Pt;
                default:
                  R(x, G, B, Pt);
              }
          }
        if (I != null)
          if ($ = ye !== null ? "" + ye : H(te), m(I)) {
            for (G = 0; G < I.length; G++)
              if ("" + I[G] === $) {
                x.push(' selected=""');
                break;
              }
          } else
            "" + I === $ && x.push(' selected=""');
        else
          Ye && x.push(' selected=""');
        return x.push(">"), U(x, tt, te), te;
      case "textarea":
        x.push(K("textarea")), tt = I = B = null;
        for (te in $)
          if (r.call($, te) && (ye = $[te], ye != null))
            switch (te) {
              case "children":
                tt = ye;
                break;
              case "value":
                B = ye;
                break;
              case "defaultValue":
                I = ye;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(91));
              default:
                R(
                  x,
                  G,
                  te,
                  ye
                );
            }
        if (B === null && I !== null && (B = I), x.push(">"), tt != null) {
          if (B != null)
            throw Error(t(92));
          if (m(tt) && 1 < tt.length)
            throw Error(t(93));
          B = "" + tt;
        }
        return typeof B == "string" && B[0] === `
` && x.push(`
`), B !== null && x.push(k("" + B)), null;
      case "input":
        x.push(K("input")), ye = tt = te = B = null;
        for (I in $)
          if (r.call($, I) && (Ye = $[I], Ye != null))
            switch (I) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, "input"));
              case "defaultChecked":
                ye = Ye;
                break;
              case "defaultValue":
                te = Ye;
                break;
              case "checked":
                tt = Ye;
                break;
              case "value":
                B = Ye;
                break;
              default:
                R(x, G, I, Ye);
            }
        return tt !== null ? R(x, G, "checked", tt) : ye !== null && R(x, G, "checked", ye), B !== null ? R(x, G, "value", B) : te !== null && R(x, G, "value", te), x.push("/>"), null;
      case "menuitem":
        x.push(K("menuitem"));
        for (var Cn in $)
          if (r.call($, Cn) && (B = $[Cn], B != null))
            switch (Cn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(400));
              default:
                R(x, G, Cn, B);
            }
        return x.push(">"), null;
      case "title":
        x.push(K("title")), B = null;
        for (Pt in $)
          if (r.call($, Pt) && (I = $[Pt], I != null))
            switch (Pt) {
              case "children":
                B = I;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(434));
              default:
                R(x, G, Pt, I);
            }
        return x.push(">"), B;
      case "listing":
      case "pre":
        x.push(K(A)), I = B = null;
        for (ye in $)
          if (r.call($, ye) && (te = $[ye], te != null))
            switch (ye) {
              case "children":
                B = te;
                break;
              case "dangerouslySetInnerHTML":
                I = te;
                break;
              default:
                R(x, G, ye, te);
            }
        if (x.push(">"), I != null) {
          if (B != null)
            throw Error(t(60));
          if (typeof I != "object" || !("__html" in I))
            throw Error(t(61));
          $ = I.__html, $ != null && (typeof $ == "string" && 0 < $.length && $[0] === `
` ? x.push(`
`, $) : x.push("" + $));
        }
        return typeof B == "string" && B[0] === `
` && x.push(`
`), B;
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
        for (var hn in $)
          if (r.call($, hn) && (B = $[hn], B != null))
            switch (hn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, A));
              default:
                R(x, G, hn, B);
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
        return Y(
          x,
          $,
          A,
          G
        );
      case "html":
        return be.insertionMode === 0 && x.push("<!DOCTYPE html>"), Y(x, $, A, G);
      default:
        if (A.indexOf("-") === -1 && typeof $.is != "string")
          return Y(x, $, A, G);
        x.push(K(A)), I = B = null;
        for (Ye in $)
          if (r.call($, Ye) && (te = $[Ye], te != null))
            switch (Ye) {
              case "children":
                B = te;
                break;
              case "dangerouslySetInnerHTML":
                I = te;
                break;
              case "style":
                N(x, G, te);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                f(Ye) && typeof te != "function" && typeof te != "symbol" && x.push(" ", Ye, '="', k(te), '"');
            }
        return x.push(">"), U(x, I, B), B;
    }
  }
  function me(x, A, $) {
    if (x.push('<!--$?--><template id="'), $ === null)
      throw Error(t(395));
    return x.push($), x.push('"></template>');
  }
  function W(x, A, $, G) {
    switch ($.insertionMode) {
      case 0:
      case 1:
        return x.push('<div hidden id="'), x.push(A.segmentPrefix), A = G.toString(16), x.push(A), x.push('">');
      case 2:
        return x.push('<svg aria-hidden="true" style="display:none" id="'), x.push(A.segmentPrefix), A = G.toString(16), x.push(A), x.push('">');
      case 3:
        return x.push('<math aria-hidden="true" style="display:none" id="'), x.push(A.segmentPrefix), A = G.toString(16), x.push(A), x.push('">');
      case 4:
        return x.push('<table hidden id="'), x.push(A.segmentPrefix), A = G.toString(16), x.push(A), x.push('">');
      case 5:
        return x.push('<table hidden><tbody id="'), x.push(A.segmentPrefix), A = G.toString(16), x.push(A), x.push('">');
      case 6:
        return x.push('<table hidden><tr id="'), x.push(A.segmentPrefix), A = G.toString(16), x.push(A), x.push('">');
      case 7:
        return x.push('<table hidden><colgroup id="'), x.push(A.segmentPrefix), A = G.toString(16), x.push(A), x.push('">');
      default:
        throw Error(t(397));
    }
  }
  function se(x, A) {
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
  var ce = /[<\u2028\u2029]/g;
  function he(x) {
    return JSON.stringify(x).replace(ce, function(A) {
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
  function ie(x, A) {
    return A = A === void 0 ? "" : A, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: A + "P:", segmentPrefix: A + "S:", boundaryPrefix: A + "B:", idPrefix: A, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: x };
  }
  function V(x, A, $, G) {
    return $.generateStaticMarkup ? (x.push(k(A)), !1) : (A === "" ? x = G : (G && x.push("<!-- -->"), x.push(k(A)), x = !0), x);
  }
  var J = Object.assign, ne = Symbol.for("react.element"), Ae = Symbol.for("react.portal"), xe = Symbol.for("react.fragment"), Pe = Symbol.for("react.strict_mode"), le = Symbol.for("react.profiler"), _e = Symbol.for("react.provider"), $e = Symbol.for("react.context"), Te = Symbol.for("react.forward_ref"), ge = Symbol.for("react.suspense"), Re = Symbol.for("react.suspense_list"), oe = Symbol.for("react.memo"), we = Symbol.for("react.lazy"), Ce = Symbol.for("react.scope"), Be = Symbol.for("react.debug_trace_mode"), je = Symbol.for("react.legacy_hidden"), qe = Symbol.for("react.default_value"), ot = Symbol.iterator;
  function Je(x) {
    if (x == null)
      return null;
    if (typeof x == "function")
      return x.displayName || x.name || null;
    if (typeof x == "string")
      return x;
    switch (x) {
      case xe:
        return "Fragment";
      case Ae:
        return "Portal";
      case le:
        return "Profiler";
      case Pe:
        return "StrictMode";
      case ge:
        return "Suspense";
      case Re:
        return "SuspenseList";
    }
    if (typeof x == "object")
      switch (x.$$typeof) {
        case $e:
          return (x.displayName || "Context") + ".Consumer";
        case _e:
          return (x._context.displayName || "Context") + ".Provider";
        case Te:
          var A = x.render;
          return x = x.displayName, x || (x = A.displayName || A.name || "", x = x !== "" ? "ForwardRef(" + x + ")" : "ForwardRef"), x;
        case oe:
          return A = x.displayName || null, A !== null ? A : Je(x.type) || "Memo";
        case we:
          A = x._payload, x = x._init;
          try {
            return Je(x(A));
          } catch {
          }
      }
    return null;
  }
  var it = {};
  function Xe(x, A) {
    if (x = x.contextTypes, !x)
      return it;
    var $ = {}, G;
    for (G in x)
      $[G] = A[G];
    return $;
  }
  var Ie = null;
  function Me(x, A) {
    if (x !== A) {
      x.context._currentValue2 = x.parentValue, x = x.parent;
      var $ = A.parent;
      if (x === null) {
        if ($ !== null)
          throw Error(t(401));
      } else {
        if ($ === null)
          throw Error(t(401));
        Me(x, $);
      }
      A.context._currentValue2 = A.value;
    }
  }
  function ut(x) {
    x.context._currentValue2 = x.parentValue, x = x.parent, x !== null && ut(x);
  }
  function Ve(x) {
    var A = x.parent;
    A !== null && Ve(A), x.context._currentValue2 = x.value;
  }
  function Ge(x, A) {
    if (x.context._currentValue2 = x.parentValue, x = x.parent, x === null)
      throw Error(t(402));
    x.depth === A.depth ? Me(x, A) : Ge(x, A);
  }
  function lt(x, A) {
    var $ = A.parent;
    if ($ === null)
      throw Error(t(402));
    x.depth === $.depth ? Me(x, $) : lt(x, $), A.context._currentValue2 = A.value;
  }
  function ct(x) {
    var A = Ie;
    A !== x && (A === null ? Ve(x) : x === null ? ut(A) : A.depth === x.depth ? Me(A, x) : A.depth > x.depth ? Ge(A, x) : lt(A, x), Ie = x);
  }
  var wt = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(x, A) {
    x = x._reactInternals, x.queue !== null && x.queue.push(A);
  }, enqueueReplaceState: function(x, A) {
    x = x._reactInternals, x.replace = !0, x.queue = [A];
  }, enqueueForceUpdate: function() {
  } };
  function en(x, A, $, G) {
    var be = x.state !== void 0 ? x.state : null;
    x.updater = wt, x.props = $, x.state = be;
    var B = { queue: [], replace: !1 };
    x._reactInternals = B;
    var I = A.contextType;
    if (x.context = typeof I == "object" && I !== null ? I._currentValue2 : G, I = A.getDerivedStateFromProps, typeof I == "function" && (I = I($, be), be = I == null ? be : J({}, be, I), x.state = be), typeof A.getDerivedStateFromProps != "function" && typeof x.getSnapshotBeforeUpdate != "function" && (typeof x.UNSAFE_componentWillMount == "function" || typeof x.componentWillMount == "function"))
      if (A = x.state, typeof x.componentWillMount == "function" && x.componentWillMount(), typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount(), A !== x.state && wt.enqueueReplaceState(x, x.state, null), B.queue !== null && 0 < B.queue.length)
        if (A = B.queue, I = B.replace, B.queue = null, B.replace = !1, I && A.length === 1)
          x.state = A[0];
        else {
          for (B = I ? A[0] : x.state, be = !0, I = I ? 1 : 0; I < A.length; I++) {
            var te = A[I];
            te = typeof te == "function" ? te.call(x, B, $, G) : te, te != null && (be ? (be = !1, B = J({}, B, te)) : J(B, te));
          }
          x.state = B;
        }
      else
        B.queue = null;
  }
  var an = { id: 1, overflow: "" };
  function Lt(x, A, $) {
    var G = x.id;
    x = x.overflow;
    var be = 32 - $t(G) - 1;
    G &= ~(1 << be), $ += 1;
    var B = 32 - $t(A) + be;
    if (30 < B) {
      var I = be - be % 5;
      return B = (G & (1 << I) - 1).toString(32), G >>= I, be -= I, { id: 1 << 32 - $t(A) + be | $ << be | G, overflow: B + x };
    }
    return { id: 1 << B | $ << be | G, overflow: x };
  }
  var $t = Math.clz32 ? Math.clz32 : un, Ot = Math.log, Gt = Math.LN2;
  function un(x) {
    return x >>>= 0, x === 0 ? 32 : 31 - (Ot(x) / Gt | 0) | 0;
  }
  function Ne(x, A) {
    return x === A && (x !== 0 || 1 / x === 1 / A) || x !== x && A !== A;
  }
  var At = typeof Object.is == "function" ? Object.is : Ne, Zt = null, Ht = null, Sn = null, bt = null, mn = !1, Dt = !1, jt = 0, yn = null, Tn = 0;
  function Le() {
    if (Zt === null)
      throw Error(t(321));
    return Zt;
  }
  function Ue() {
    if (0 < Tn)
      throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function vt() {
    return bt === null ? Sn === null ? (mn = !1, Sn = bt = Ue()) : (mn = !0, bt = Sn) : bt.next === null ? (mn = !1, bt = bt.next = Ue()) : (mn = !0, bt = bt.next), bt;
  }
  function et() {
    Ht = Zt = null, Dt = !1, Sn = null, Tn = 0, bt = yn = null;
  }
  function on(x, A) {
    return typeof A == "function" ? A(x) : A;
  }
  function St(x, A, $) {
    if (Zt = Le(), bt = vt(), mn) {
      var G = bt.queue;
      if (A = G.dispatch, yn !== null && ($ = yn.get(G), $ !== void 0)) {
        yn.delete(G), G = bt.memoizedState;
        do
          G = x(G, $.action), $ = $.next;
        while ($ !== null);
        return bt.memoizedState = G, [G, A];
      }
      return [bt.memoizedState, A];
    }
    return x = x === on ? typeof A == "function" ? A() : A : $ !== void 0 ? $(A) : A, bt.memoizedState = x, x = bt.queue = { last: null, dispatch: null }, x = x.dispatch = Fn.bind(null, Zt, x), [bt.memoizedState, x];
  }
  function En(x, A) {
    if (Zt = Le(), bt = vt(), A = A === void 0 ? null : A, bt !== null) {
      var $ = bt.memoizedState;
      if ($ !== null && A !== null) {
        var G = $[1];
        e:
          if (G === null)
            G = !1;
          else {
            for (var be = 0; be < G.length && be < A.length; be++)
              if (!At(A[be], G[be])) {
                G = !1;
                break e;
              }
            G = !0;
          }
        if (G)
          return $[0];
      }
    }
    return x = x(), bt.memoizedState = [x, A], x;
  }
  function Fn(x, A, $) {
    if (25 <= Tn)
      throw Error(t(301));
    if (x === Zt)
      if (Dt = !0, x = { action: $, next: null }, yn === null && (yn = /* @__PURE__ */ new Map()), $ = yn.get(A), $ === void 0)
        yn.set(A, x);
      else {
        for (A = $; A.next !== null; )
          A = A.next;
        A.next = x;
      }
  }
  function X() {
    throw Error(t(394));
  }
  function Fe() {
  }
  var Ze = { readContext: function(x) {
    return x._currentValue2;
  }, useContext: function(x) {
    return Le(), x._currentValue2;
  }, useMemo: En, useReducer: St, useRef: function(x) {
    Zt = Le(), bt = vt();
    var A = bt.memoizedState;
    return A === null ? (x = { current: x }, bt.memoizedState = x) : A;
  }, useState: function(x) {
    return St(on, x);
  }, useInsertionEffect: Fe, useLayoutEffect: function() {
  }, useCallback: function(x, A) {
    return En(function() {
      return x;
    }, A);
  }, useImperativeHandle: Fe, useEffect: Fe, useDebugValue: Fe, useDeferredValue: function(x) {
    return Le(), x;
  }, useTransition: function() {
    return Le(), [
      !1,
      X
    ];
  }, useId: function() {
    var x = Ht.treeContext, A = x.overflow;
    x = x.id, x = (x & ~(1 << 32 - $t(x) - 1)).toString(32) + A;
    var $ = He;
    if ($ === null)
      throw Error(t(404));
    return A = jt++, x = ":" + $.idPrefix + "R" + x, 0 < A && (x += "H" + A.toString(32)), x + ":";
  }, useMutableSource: function(x, A) {
    return Le(), A(x._source);
  }, useSyncExternalStore: function(x, A, $) {
    if ($ === void 0)
      throw Error(t(407));
    return $();
  } }, He = null, pt = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function at(x) {
    return console.error(x), null;
  }
  function mt() {
  }
  function dt(x, A, $, G, be, B, I, te, ye) {
    var Ye = [], tt = /* @__PURE__ */ new Set();
    return A = { destination: null, responseState: A, progressiveChunkSize: G === void 0 ? 12800 : G, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: tt, pingedTasks: Ye, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: be === void 0 ? at : be, onAllReady: B === void 0 ? mt : B, onShellReady: I === void 0 ? mt : I, onShellError: te === void 0 ? mt : te, onFatalError: ye === void 0 ? mt : ye }, $ = Wt(A, 0, null, $, !1, !1), $.parentFlushed = !0, x = Ke(A, x, null, $, tt, it, null, an), Ye.push(x), A;
  }
  function Ke(x, A, $, G, be, B, I, te) {
    x.allPendingTasks++, $ === null ? x.pendingRootTasks++ : $.pendingTasks++;
    var ye = { node: A, ping: function() {
      var Ye = x.pingedTasks;
      Ye.push(ye), Ye.length === 1 && Xt(x);
    }, blockedBoundary: $, blockedSegment: G, abortSet: be, legacyContext: B, context: I, treeContext: te };
    return be.add(ye), ye;
  }
  function Wt(x, A, $, G, be, B) {
    return { status: 0, id: -1, index: A, parentFlushed: !1, chunks: [], children: [], formatContext: G, boundary: $, lastPushedText: be, textEmbedded: B };
  }
  function Ut(x, A) {
    if (x = x.onError(A), x != null && typeof x != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof x + '" instead');
    return x;
  }
  function nn(x, A) {
    var $ = x.onShellError;
    $(A), $ = x.onFatalError, $(A), x.destination !== null ? (x.status = 2, x.destination.destroy(A)) : (x.status = 1, x.fatalError = A);
  }
  function Yt(x, A, $, G, be) {
    for (Zt = {}, Ht = A, jt = 0, x = $(G, be); Dt; )
      Dt = !1, jt = 0, Tn += 1, bt = null, x = $(G, be);
    return et(), x;
  }
  function Bt(x, A, $, G) {
    var be = $.render(), B = G.childContextTypes;
    if (B != null) {
      var I = A.legacyContext;
      if (typeof $.getChildContext != "function")
        G = I;
      else {
        $ = $.getChildContext();
        for (var te in $)
          if (!(te in B))
            throw Error(t(108, Je(G) || "Unknown", te));
        G = J({}, I, $);
      }
      A.legacyContext = G, Tt(x, A, be), A.legacyContext = I;
    } else
      Tt(x, A, be);
  }
  function Mt(x, A) {
    if (x && x.defaultProps) {
      A = J({}, A), x = x.defaultProps;
      for (var $ in x)
        A[$] === void 0 && (A[$] = x[$]);
      return A;
    }
    return A;
  }
  function _t(x, A, $, G, be) {
    if (typeof $ == "function")
      if ($.prototype && $.prototype.isReactComponent) {
        be = Xe($, A.legacyContext);
        var B = $.contextType;
        B = new $(G, typeof B == "object" && B !== null ? B._currentValue2 : be), en(B, $, G, be), Bt(x, A, B, $);
      } else {
        B = Xe($, A.legacyContext), be = Yt(x, A, $, G, B);
        var I = jt !== 0;
        if (typeof be == "object" && be !== null && typeof be.render == "function" && be.$$typeof === void 0)
          en(be, $, G, B), Bt(x, A, be, $);
        else if (I) {
          G = A.treeContext, A.treeContext = Lt(G, 1, 0);
          try {
            Tt(x, A, be);
          } finally {
            A.treeContext = G;
          }
        } else
          Tt(x, A, be);
      }
    else if (typeof $ == "string") {
      switch (be = A.blockedSegment, B = q(be.chunks, $, G, x.responseState, be.formatContext), be.lastPushedText = !1, I = be.formatContext, be.formatContext = L(I, $, G), vn(x, A, B), be.formatContext = I, $) {
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
          be.chunks.push("</", $, ">");
      }
      be.lastPushedText = !1;
    } else {
      switch ($) {
        case je:
        case Be:
        case Pe:
        case le:
        case xe:
          Tt(x, A, G.children);
          return;
        case Re:
          Tt(x, A, G.children);
          return;
        case Ce:
          throw Error(t(343));
        case ge:
          e: {
            $ = A.blockedBoundary, be = A.blockedSegment, B = G.fallback, G = G.children, I = /* @__PURE__ */ new Set();
            var te = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: I, errorDigest: null }, ye = Wt(x, be.chunks.length, te, be.formatContext, !1, !1);
            be.children.push(ye), be.lastPushedText = !1;
            var Ye = Wt(x, 0, null, be.formatContext, !1, !1);
            Ye.parentFlushed = !0, A.blockedBoundary = te, A.blockedSegment = Ye;
            try {
              if (vn(
                x,
                A,
                G
              ), x.responseState.generateStaticMarkup || Ye.lastPushedText && Ye.textEmbedded && Ye.chunks.push("<!-- -->"), Ye.status = 1, fn(te, Ye), te.pendingTasks === 0)
                break e;
            } catch (tt) {
              Ye.status = 4, te.forceClientRender = !0, te.errorDigest = Ut(x, tt);
            } finally {
              A.blockedBoundary = $, A.blockedSegment = be;
            }
            A = Ke(x, B, $, ye, I, A.legacyContext, A.context, A.treeContext), x.pingedTasks.push(A);
          }
          return;
      }
      if (typeof $ == "object" && $ !== null)
        switch ($.$$typeof) {
          case Te:
            if (G = Yt(x, A, $.render, G, be), jt !== 0) {
              $ = A.treeContext, A.treeContext = Lt($, 1, 0);
              try {
                Tt(x, A, G);
              } finally {
                A.treeContext = $;
              }
            } else
              Tt(x, A, G);
            return;
          case oe:
            $ = $.type, G = Mt($, G), _t(x, A, $, G, be);
            return;
          case _e:
            if (be = G.children, $ = $._context, G = G.value, B = $._currentValue2, $._currentValue2 = G, I = Ie, Ie = G = { parent: I, depth: I === null ? 0 : I.depth + 1, context: $, parentValue: B, value: G }, A.context = G, Tt(x, A, be), x = Ie, x === null)
              throw Error(t(403));
            G = x.parentValue, x.context._currentValue2 = G === qe ? x.context._defaultValue : G, x = Ie = x.parent, A.context = x;
            return;
          case $e:
            G = G.children, G = G($._currentValue2), Tt(x, A, G);
            return;
          case we:
            be = $._init, $ = be($._payload), G = Mt($, G), _t(
              x,
              A,
              $,
              G,
              void 0
            );
            return;
        }
      throw Error(t(130, $ == null ? $ : typeof $, ""));
    }
  }
  function Tt(x, A, $) {
    if (A.node = $, typeof $ == "object" && $ !== null) {
      switch ($.$$typeof) {
        case ne:
          _t(x, A, $.type, $.props, $.ref);
          return;
        case Ae:
          throw Error(t(257));
        case we:
          var G = $._init;
          $ = G($._payload), Tt(x, A, $);
          return;
      }
      if (m($)) {
        cn(x, A, $);
        return;
      }
      if ($ === null || typeof $ != "object" ? G = null : (G = ot && $[ot] || $["@@iterator"], G = typeof G == "function" ? G : null), G && (G = G.call($))) {
        if ($ = G.next(), !$.done) {
          var be = [];
          do
            be.push($.value), $ = G.next();
          while (!$.done);
          cn(x, A, be);
        }
        return;
      }
      throw x = Object.prototype.toString.call($), Error(t(31, x === "[object Object]" ? "object with keys {" + Object.keys($).join(", ") + "}" : x));
    }
    typeof $ == "string" ? (G = A.blockedSegment, G.lastPushedText = V(A.blockedSegment.chunks, $, x.responseState, G.lastPushedText)) : typeof $ == "number" && (G = A.blockedSegment, G.lastPushedText = V(A.blockedSegment.chunks, "" + $, x.responseState, G.lastPushedText));
  }
  function cn(x, A, $) {
    for (var G = $.length, be = 0; be < G; be++) {
      var B = A.treeContext;
      A.treeContext = Lt(B, G, be);
      try {
        vn(x, A, $[be]);
      } finally {
        A.treeContext = B;
      }
    }
  }
  function vn(x, A, $) {
    var G = A.blockedSegment.formatContext, be = A.legacyContext, B = A.context;
    try {
      return Tt(x, A, $);
    } catch (ye) {
      if (et(), typeof ye == "object" && ye !== null && typeof ye.then == "function") {
        $ = ye;
        var I = A.blockedSegment, te = Wt(x, I.chunks.length, null, I.formatContext, I.lastPushedText, !0);
        I.children.push(te), I.lastPushedText = !1, x = Ke(x, A.node, A.blockedBoundary, te, A.abortSet, A.legacyContext, A.context, A.treeContext).ping, $.then(x, x), A.blockedSegment.formatContext = G, A.legacyContext = be, A.context = B, ct(B);
      } else
        throw A.blockedSegment.formatContext = G, A.legacyContext = be, A.context = B, ct(B), ye;
    }
  }
  function zt(x) {
    var A = x.blockedBoundary;
    x = x.blockedSegment, x.status = 3, Vt(this, A, x);
  }
  function xn(x, A, $) {
    var G = x.blockedBoundary;
    x.blockedSegment.status = 3, G === null ? (A.allPendingTasks--, A.status !== 2 && (A.status = 2, A.destination !== null && A.destination.push(null))) : (G.pendingTasks--, G.forceClientRender || (G.forceClientRender = !0, x = $ === void 0 ? Error(t(432)) : $, G.errorDigest = A.onError(x), G.parentFlushed && A.clientRenderedBoundaries.push(G)), G.fallbackAbortableTasks.forEach(function(be) {
      return xn(be, A, $);
    }), G.fallbackAbortableTasks.clear(), A.allPendingTasks--, A.allPendingTasks === 0 && (G = A.onAllReady, G()));
  }
  function fn(x, A) {
    if (A.chunks.length === 0 && A.children.length === 1 && A.children[0].boundary === null) {
      var $ = A.children[0];
      $.id = A.id, $.parentFlushed = !0, $.status === 1 && fn(x, $);
    } else
      x.completedSegments.push(A);
  }
  function Vt(x, A, $) {
    if (A === null) {
      if ($.parentFlushed) {
        if (x.completedRootSegment !== null)
          throw Error(t(389));
        x.completedRootSegment = $;
      }
      x.pendingRootTasks--, x.pendingRootTasks === 0 && (x.onShellError = mt, A = x.onShellReady, A());
    } else
      A.pendingTasks--, A.forceClientRender || (A.pendingTasks === 0 ? ($.parentFlushed && $.status === 1 && fn(A, $), A.parentFlushed && x.completedBoundaries.push(A), A.fallbackAbortableTasks.forEach(zt, x), A.fallbackAbortableTasks.clear()) : $.parentFlushed && $.status === 1 && (fn(A, $), A.completedSegments.length === 1 && A.parentFlushed && x.partialBoundaries.push(A)));
    x.allPendingTasks--, x.allPendingTasks === 0 && (x = x.onAllReady, x());
  }
  function Xt(x) {
    if (x.status !== 2) {
      var A = Ie, $ = pt.current;
      pt.current = Ze;
      var G = He;
      He = x.responseState;
      try {
        var be = x.pingedTasks, B;
        for (B = 0; B < be.length; B++) {
          var I = be[B], te = x, ye = I.blockedSegment;
          if (ye.status === 0) {
            ct(I.context);
            try {
              Tt(te, I, I.node), te.responseState.generateStaticMarkup || ye.lastPushedText && ye.textEmbedded && ye.chunks.push("<!-- -->"), I.abortSet.delete(I), ye.status = 1, Vt(te, I.blockedBoundary, ye);
            } catch (Mn) {
              if (et(), typeof Mn == "object" && Mn !== null && typeof Mn.then == "function") {
                var Ye = I.ping;
                Mn.then(Ye, Ye);
              } else {
                I.abortSet.delete(I), ye.status = 4;
                var tt = I.blockedBoundary, Pt = Mn, Cn = Ut(te, Pt);
                if (tt === null ? nn(te, Pt) : (tt.pendingTasks--, tt.forceClientRender || (tt.forceClientRender = !0, tt.errorDigest = Cn, tt.parentFlushed && te.clientRenderedBoundaries.push(tt))), te.allPendingTasks--, te.allPendingTasks === 0) {
                  var hn = te.onAllReady;
                  hn();
                }
              }
            } finally {
            }
          }
        }
        be.splice(0, B), x.destination !== null && kn(x, x.destination);
      } catch (Mn) {
        Ut(x, Mn), nn(x, Mn);
      } finally {
        He = G, pt.current = $, $ === Ze && ct(A);
      }
    }
  }
  function Dn(x, A, $) {
    switch ($.parentFlushed = !0, $.status) {
      case 0:
        var G = $.id = x.nextSegmentId++;
        return $.lastPushedText = !1, $.textEmbedded = !1, x = x.responseState, A.push('<template id="'), A.push(x.placeholderPrefix), x = G.toString(16), A.push(x), A.push('"></template>');
      case 1:
        $.status = 2;
        var be = !0;
        G = $.chunks;
        var B = 0;
        $ = $.children;
        for (var I = 0; I < $.length; I++) {
          for (be = $[I]; B < be.index; B++)
            A.push(G[B]);
          be = On(x, A, be);
        }
        for (; B < G.length - 1; B++)
          A.push(G[B]);
        return B < G.length && (be = A.push(G[B])), be;
      default:
        throw Error(t(390));
    }
  }
  function On(x, A, $) {
    var G = $.boundary;
    if (G === null)
      return Dn(x, A, $);
    if (G.parentFlushed = !0, G.forceClientRender)
      return x.responseState.generateStaticMarkup || (G = G.errorDigest, A.push("<!--$!-->"), A.push("<template"), G && (A.push(' data-dgst="'), G = k(G), A.push(G), A.push('"')), A.push("></template>")), Dn(x, A, $), x = x.responseState.generateStaticMarkup ? !0 : A.push("<!--/$-->"), x;
    if (0 < G.pendingTasks) {
      G.rootSegmentID = x.nextSegmentId++, 0 < G.completedSegments.length && x.partialBoundaries.push(G);
      var be = x.responseState, B = be.nextSuspenseID++;
      return be = be.boundaryPrefix + B.toString(16), G = G.id = be, me(A, x.responseState, G), Dn(x, A, $), A.push("<!--/$-->");
    }
    if (G.byteSize > x.progressiveChunkSize)
      return G.rootSegmentID = x.nextSegmentId++, x.completedBoundaries.push(G), me(A, x.responseState, G.id), Dn(x, A, $), A.push("<!--/$-->");
    if (x.responseState.generateStaticMarkup || A.push("<!--$-->"), $ = G.completedSegments, $.length !== 1)
      throw Error(t(391));
    return On(x, A, $[0]), x = x.responseState.generateStaticMarkup ? !0 : A.push("<!--/$-->"), x;
  }
  function er(x, A, $) {
    return W(A, x.responseState, $.formatContext, $.id), On(x, A, $), se(A, $.formatContext);
  }
  function jn(x, A, $) {
    for (var G = $.completedSegments, be = 0; be < G.length; be++)
      rn(x, A, $, G[be]);
    if (G.length = 0, x = x.responseState, G = $.id, $ = $.rootSegmentID, A.push(x.startInlineScript), x.sentCompleteBoundaryFunction ? A.push('$RC("') : (x.sentCompleteBoundaryFunction = !0, A.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), G === null)
      throw Error(t(395));
    return $ = $.toString(16), A.push(G), A.push('","'), A.push(x.segmentPrefix), A.push($), A.push('")<\/script>');
  }
  function rn(x, A, $, G) {
    if (G.status === 2)
      return !0;
    var be = G.id;
    if (be === -1) {
      if ((G.id = $.rootSegmentID) === -1)
        throw Error(t(392));
      return er(x, A, G);
    }
    return er(x, A, G), x = x.responseState, A.push(x.startInlineScript), x.sentCompleteSegmentFunction ? A.push('$RS("') : (x.sentCompleteSegmentFunction = !0, A.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), A.push(x.segmentPrefix), be = be.toString(16), A.push(be), A.push('","'), A.push(x.placeholderPrefix), A.push(be), A.push('")<\/script>');
  }
  function kn(x, A) {
    try {
      var $ = x.completedRootSegment;
      if ($ !== null && x.pendingRootTasks === 0) {
        On(x, A, $), x.completedRootSegment = null;
        var G = x.responseState.bootstrapChunks;
        for ($ = 0; $ < G.length - 1; $++)
          A.push(G[$]);
        $ < G.length && A.push(G[$]);
      }
      var be = x.clientRenderedBoundaries, B;
      for (B = 0; B < be.length; B++) {
        var I = be[B];
        G = A;
        var te = x.responseState, ye = I.id, Ye = I.errorDigest, tt = I.errorMessage, Pt = I.errorComponentStack;
        if (G.push(te.startInlineScript), te.sentClientRenderFunction ? G.push('$RX("') : (te.sentClientRenderFunction = !0, G.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), ye === null)
          throw Error(t(395));
        if (G.push(ye), G.push('"'), Ye || tt || Pt) {
          G.push(",");
          var Cn = he(Ye || "");
          G.push(Cn);
        }
        if (tt || Pt) {
          G.push(",");
          var hn = he(tt || "");
          G.push(hn);
        }
        if (Pt) {
          G.push(",");
          var Mn = he(Pt);
          G.push(Mn);
        }
        if (!G.push(")<\/script>")) {
          x.destination = null, B++, be.splice(0, B);
          return;
        }
      }
      be.splice(0, B);
      var ur = x.completedBoundaries;
      for (B = 0; B < ur.length; B++)
        if (!jn(x, A, ur[B])) {
          x.destination = null, B++, ur.splice(0, B);
          return;
        }
      ur.splice(0, B);
      var Un = x.partialBoundaries;
      for (B = 0; B < Un.length; B++) {
        var Nr = Un[B];
        e: {
          be = x, I = A;
          var mr = Nr.completedSegments;
          for (te = 0; te < mr.length; te++)
            if (!rn(be, I, Nr, mr[te])) {
              te++, mr.splice(0, te);
              var Tr = !1;
              break e;
            }
          mr.splice(0, te), Tr = !0;
        }
        if (!Tr) {
          x.destination = null, B++, Un.splice(0, B);
          return;
        }
      }
      Un.splice(0, B);
      var cr = x.completedBoundaries;
      for (B = 0; B < cr.length; B++)
        if (!jn(x, A, cr[B])) {
          x.destination = null, B++, cr.splice(0, B);
          return;
        }
      cr.splice(0, B);
    } finally {
      x.allPendingTasks === 0 && x.pingedTasks.length === 0 && x.clientRenderedBoundaries.length === 0 && x.completedBoundaries.length === 0 && A.push(null);
    }
  }
  function pr(x, A) {
    try {
      var $ = x.abortableTasks;
      $.forEach(function(G) {
        return xn(G, x, A);
      }), $.clear(), x.destination !== null && kn(x, x.destination);
    } catch (G) {
      Ut(x, G), nn(x, G);
    }
  }
  function lr() {
  }
  function sr(x, A, $, G) {
    var be = !1, B = null, I = "", te = { push: function(Ye) {
      return Ye !== null && (I += Ye), !0;
    }, destroy: function(Ye) {
      be = !0, B = Ye;
    } }, ye = !1;
    if (x = dt(x, ie($, A ? A.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, lr, void 0, function() {
      ye = !0;
    }, void 0, void 0), Xt(x), pr(x, G), x.status === 1)
      x.status = 2, te.destroy(x.fatalError);
    else if (x.status !== 2 && x.destination === null) {
      x.destination = te;
      try {
        kn(x, te);
      } catch (Ye) {
        Ut(x, Ye), nn(x, Ye);
      }
    }
    if (be)
      throw B;
    if (!ye)
      throw Error(t(426));
    return I;
  }
  return Ri.renderToNodeStream = function() {
    throw Error(t(207));
  }, Ri.renderToStaticMarkup = function(x, A) {
    return sr(x, A, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Ri.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, Ri.renderToString = function(x, A) {
    return sr(x, A, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Ri.version = "18.2.0", Ri;
}
var Ou = {};
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tm;
function AE() {
  if (tm)
    return Ou;
  tm = 1;
  var e = ue;
  function t(b) {
    for (var P = "https://reactjs.org/docs/error-decoder.html?invariant=" + b, z = 1; z < arguments.length; z++)
      P += "&args[]=" + encodeURIComponent(arguments[z]);
    return "Minified React error #" + b + "; visit " + P + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = null, n = 0;
  function a(b, P) {
    if (P.length !== 0)
      if (512 < P.length)
        0 < n && (b.enqueue(new Uint8Array(r.buffer, 0, n)), r = new Uint8Array(512), n = 0), b.enqueue(P);
      else {
        var z = r.length - n;
        z < P.length && (z === 0 ? b.enqueue(r) : (r.set(P.subarray(0, z), n), b.enqueue(r), P = P.subarray(z)), r = new Uint8Array(512), n = 0), r.set(P, n), n += P.length;
      }
  }
  function o(b, P) {
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
  var y = Object.prototype.hasOwnProperty, v = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, E = {}, k = {};
  function M(b) {
    return y.call(k, b) ? !0 : y.call(E, b) ? !1 : v.test(b) ? k[b] = !0 : (E[b] = !0, !1);
  }
  function T(b, P, z, Q, Se, ve, Oe) {
    this.acceptsBooleans = P === 2 || P === 3 || P === 4, this.attributeName = Q, this.attributeNamespace = Se, this.mustUseProperty = z, this.propertyName = b, this.type = P, this.sanitizeURL = ve, this.removeEmptyString = Oe;
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
  var D = /[\-:]([a-z])/g;
  function L(b) {
    return b[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(b) {
    var P = b.replace(
      D,
      L
    );
    m[P] = new T(P, 1, !1, b, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(b) {
    var P = b.replace(D, L);
    m[P] = new T(P, 1, !1, b, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(b) {
    var P = b.replace(D, L);
    m[P] = new T(P, 1, !1, b, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(b) {
    m[b] = new T(b, 1, !1, b.toLowerCase(), null, !1, !1);
  }), m.xlinkHref = new T("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(b) {
    m[b] = new T(b, 1, !1, b.toLowerCase(), null, !0, !0);
  });
  var _ = {
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
  Object.keys(_).forEach(function(b) {
    N.forEach(function(P) {
      P = P + b.charAt(0).toUpperCase() + b.substring(1), _[P] = _[b];
    });
  });
  var R = /["'&<>]/;
  function U(b) {
    if (typeof b == "boolean" || typeof b == "number")
      return "" + b;
    b = "" + b;
    var P = R.exec(b);
    if (P) {
      var z = "", Q, Se = 0;
      for (Q = P.index; Q < b.length; Q++) {
        switch (b.charCodeAt(Q)) {
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
        Se !== Q && (z += b.substring(Se, Q)), Se = Q + 1, z += P;
      }
      b = Se !== Q ? z + b.substring(Se, Q) : z;
    }
    return b;
  }
  var H = /([A-Z])/g, Y = /^ms-/, Z = Array.isArray, re = d("<script>"), K = d("<\/script>"), q = d('<script src="'), me = d('<script type="module" src="'), W = d('" async=""><\/script>'), se = /(<\/|<)(s)(cript)/gi;
  function ce(b, P, z, Q) {
    return "" + P + (z === "s" ? "\\u0073" : "\\u0053") + Q;
  }
  function he(b, P, z, Q, Se) {
    b = b === void 0 ? "" : b, P = P === void 0 ? re : d('<script nonce="' + U(P) + '">');
    var ve = [];
    if (z !== void 0 && ve.push(P, c(("" + z).replace(se, ce)), K), Q !== void 0)
      for (z = 0; z < Q.length; z++)
        ve.push(q, c(U(Q[z])), W);
    if (Se !== void 0)
      for (Q = 0; Q < Se.length; Q++)
        ve.push(me, c(U(Se[Q])), W);
    return { bootstrapChunks: ve, startInlineScript: P, placeholderPrefix: d(b + "P:"), segmentPrefix: d(b + "S:"), boundaryPrefix: b + "B:", idPrefix: b, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function ie(b, P) {
    return { insertionMode: b, selectedValue: P };
  }
  function V(b) {
    return ie(b === "http://www.w3.org/2000/svg" ? 2 : b === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function J(b, P, z) {
    switch (P) {
      case "select":
        return ie(1, z.value != null ? z.value : z.defaultValue);
      case "svg":
        return ie(2, null);
      case "math":
        return ie(3, null);
      case "foreignObject":
        return ie(1, null);
      case "table":
        return ie(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return ie(5, null);
      case "colgroup":
        return ie(7, null);
      case "tr":
        return ie(6, null);
    }
    return 4 <= b.insertionMode || b.insertionMode === 0 ? ie(1, null) : b;
  }
  var ne = d("<!-- -->");
  function Ae(b, P, z, Q) {
    return P === "" ? Q : (Q && b.push(ne), b.push(c(U(P))), !0);
  }
  var xe = /* @__PURE__ */ new Map(), Pe = d(' style="'), le = d(":"), _e = d(";");
  function $e(b, P, z) {
    if (typeof z != "object")
      throw Error(t(62));
    P = !0;
    for (var Q in z)
      if (y.call(z, Q)) {
        var Se = z[Q];
        if (Se != null && typeof Se != "boolean" && Se !== "") {
          if (Q.indexOf("--") === 0) {
            var ve = c(U(Q));
            Se = c(U(("" + Se).trim()));
          } else {
            ve = Q;
            var Oe = xe.get(ve);
            Oe !== void 0 || (Oe = d(U(ve.replace(H, "-$1").toLowerCase().replace(Y, "-ms-"))), xe.set(ve, Oe)), ve = Oe, Se = typeof Se == "number" ? Se === 0 || y.call(_, Q) ? c("" + Se) : c(Se + "px") : c(U(("" + Se).trim()));
          }
          P ? (P = !1, b.push(Pe, ve, le, Se)) : b.push(_e, ve, le, Se);
        }
      }
    P || b.push(Re);
  }
  var Te = d(" "), ge = d('="'), Re = d('"'), oe = d('=""');
  function we(b, P, z, Q) {
    switch (z) {
      case "style":
        $e(b, P, Q);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < z.length) || z[0] !== "o" && z[0] !== "O" || z[1] !== "n" && z[1] !== "N") {
      if (P = m.hasOwnProperty(z) ? m[z] : null, P !== null) {
        switch (typeof Q) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!P.acceptsBooleans)
              return;
        }
        switch (z = c(P.attributeName), P.type) {
          case 3:
            Q && b.push(Te, z, oe);
            break;
          case 4:
            Q === !0 ? b.push(Te, z, oe) : Q !== !1 && b.push(Te, z, ge, c(U(Q)), Re);
            break;
          case 5:
            isNaN(Q) || b.push(Te, z, ge, c(U(Q)), Re);
            break;
          case 6:
            !isNaN(Q) && 1 <= Q && b.push(Te, z, ge, c(U(Q)), Re);
            break;
          default:
            P.sanitizeURL && (Q = "" + Q), b.push(Te, z, ge, c(U(Q)), Re);
        }
      } else if (M(z)) {
        switch (typeof Q) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (P = z.toLowerCase().slice(0, 5), P !== "data-" && P !== "aria-")
              return;
        }
        b.push(Te, c(z), ge, c(U(Q)), Re);
      }
    }
  }
  var Ce = d(">"), Be = d("/>");
  function je(b, P, z) {
    if (P != null) {
      if (z != null)
        throw Error(t(60));
      if (typeof P != "object" || !("__html" in P))
        throw Error(t(61));
      P = P.__html, P != null && b.push(c("" + P));
    }
  }
  function qe(b) {
    var P = "";
    return e.Children.forEach(b, function(z) {
      z != null && (P += z);
    }), P;
  }
  var ot = d(' selected=""');
  function Je(b, P, z, Q) {
    b.push(Me(z));
    var Se = z = null, ve;
    for (ve in P)
      if (y.call(P, ve)) {
        var Oe = P[ve];
        if (Oe != null)
          switch (ve) {
            case "children":
              z = Oe;
              break;
            case "dangerouslySetInnerHTML":
              Se = Oe;
              break;
            default:
              we(b, Q, ve, Oe);
          }
      }
    return b.push(Ce), je(b, Se, z), typeof z == "string" ? (b.push(c(U(z))), null) : z;
  }
  var it = d(`
`), Xe = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ie = /* @__PURE__ */ new Map();
  function Me(b) {
    var P = Ie.get(b);
    if (P === void 0) {
      if (!Xe.test(b))
        throw Error(t(65, b));
      P = d("<" + b), Ie.set(b, P);
    }
    return P;
  }
  var ut = d("<!DOCTYPE html>");
  function Ve(b, P, z, Q, Se) {
    switch (P) {
      case "select":
        b.push(Me("select"));
        var ve = null, Oe = null;
        for (Et in z)
          if (y.call(z, Et)) {
            var We = z[Et];
            if (We != null)
              switch (Et) {
                case "children":
                  ve = We;
                  break;
                case "dangerouslySetInnerHTML":
                  Oe = We;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  we(b, Q, Et, We);
              }
          }
        return b.push(Ce), je(b, Oe, ve), ve;
      case "option":
        Oe = Se.selectedValue, b.push(Me("option"));
        var ht = We = null, Rt = null, Et = null;
        for (ve in z)
          if (y.call(z, ve)) {
            var tn = z[ve];
            if (tn != null)
              switch (ve) {
                case "children":
                  We = tn;
                  break;
                case "selected":
                  Rt = tn;
                  break;
                case "dangerouslySetInnerHTML":
                  Et = tn;
                  break;
                case "value":
                  ht = tn;
                default:
                  we(b, Q, ve, tn);
              }
          }
        if (Oe != null)
          if (z = ht !== null ? "" + ht : qe(We), Z(Oe)) {
            for (Q = 0; Q < Oe.length; Q++)
              if ("" + Oe[Q] === z) {
                b.push(ot);
                break;
              }
          } else
            "" + Oe === z && b.push(ot);
        else
          Rt && b.push(ot);
        return b.push(Ce), je(b, Et, We), We;
      case "textarea":
        b.push(Me("textarea")), Et = Oe = ve = null;
        for (We in z)
          if (y.call(z, We) && (ht = z[We], ht != null))
            switch (We) {
              case "children":
                Et = ht;
                break;
              case "value":
                ve = ht;
                break;
              case "defaultValue":
                Oe = ht;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(91));
              default:
                we(b, Q, We, ht);
            }
        if (ve === null && Oe !== null && (ve = Oe), b.push(Ce), Et != null) {
          if (ve != null)
            throw Error(t(92));
          if (Z(Et) && 1 < Et.length)
            throw Error(t(93));
          ve = "" + Et;
        }
        return typeof ve == "string" && ve[0] === `
` && b.push(it), ve !== null && b.push(c(U("" + ve))), null;
      case "input":
        b.push(Me("input")), ht = Et = We = ve = null;
        for (Oe in z)
          if (y.call(z, Oe) && (Rt = z[Oe], Rt != null))
            switch (Oe) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, "input"));
              case "defaultChecked":
                ht = Rt;
                break;
              case "defaultValue":
                We = Rt;
                break;
              case "checked":
                Et = Rt;
                break;
              case "value":
                ve = Rt;
                break;
              default:
                we(b, Q, Oe, Rt);
            }
        return Et !== null ? we(
          b,
          Q,
          "checked",
          Et
        ) : ht !== null && we(b, Q, "checked", ht), ve !== null ? we(b, Q, "value", ve) : We !== null && we(b, Q, "value", We), b.push(Be), null;
      case "menuitem":
        b.push(Me("menuitem"));
        for (var In in z)
          if (y.call(z, In) && (ve = z[In], ve != null))
            switch (In) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(400));
              default:
                we(b, Q, In, ve);
            }
        return b.push(Ce), null;
      case "title":
        b.push(Me("title")), ve = null;
        for (tn in z)
          if (y.call(z, tn) && (Oe = z[tn], Oe != null))
            switch (tn) {
              case "children":
                ve = Oe;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(434));
              default:
                we(b, Q, tn, Oe);
            }
        return b.push(Ce), ve;
      case "listing":
      case "pre":
        b.push(Me(P)), Oe = ve = null;
        for (ht in z)
          if (y.call(z, ht) && (We = z[ht], We != null))
            switch (ht) {
              case "children":
                ve = We;
                break;
              case "dangerouslySetInnerHTML":
                Oe = We;
                break;
              default:
                we(b, Q, ht, We);
            }
        if (b.push(Ce), Oe != null) {
          if (ve != null)
            throw Error(t(60));
          if (typeof Oe != "object" || !("__html" in Oe))
            throw Error(t(61));
          z = Oe.__html, z != null && (typeof z == "string" && 0 < z.length && z[0] === `
` ? b.push(it, c(z)) : b.push(c("" + z)));
        }
        return typeof ve == "string" && ve[0] === `
` && b.push(it), ve;
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
        b.push(Me(P));
        for (var Yn in z)
          if (y.call(z, Yn) && (ve = z[Yn], ve != null))
            switch (Yn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, P));
              default:
                we(b, Q, Yn, ve);
            }
        return b.push(Be), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Je(b, z, P, Q);
      case "html":
        return Se.insertionMode === 0 && b.push(ut), Je(b, z, P, Q);
      default:
        if (P.indexOf("-") === -1 && typeof z.is != "string")
          return Je(b, z, P, Q);
        b.push(Me(P)), Oe = ve = null;
        for (Rt in z)
          if (y.call(z, Rt) && (We = z[Rt], We != null))
            switch (Rt) {
              case "children":
                ve = We;
                break;
              case "dangerouslySetInnerHTML":
                Oe = We;
                break;
              case "style":
                $e(b, Q, We);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                M(Rt) && typeof We != "function" && typeof We != "symbol" && b.push(Te, c(Rt), ge, c(U(We)), Re);
            }
        return b.push(Ce), je(b, Oe, ve), ve;
    }
  }
  var Ge = d("</"), lt = d(">"), ct = d('<template id="'), wt = d('"></template>'), en = d("<!--$-->"), an = d('<!--$?--><template id="'), Lt = d('"></template>'), $t = d("<!--$!-->"), Ot = d("<!--/$-->"), Gt = d("<template"), un = d('"'), Ne = d(' data-dgst="');
  d(' data-msg="'), d(' data-stck="');
  var At = d("></template>");
  function Zt(b, P, z) {
    if (a(b, an), z === null)
      throw Error(t(395));
    return a(b, z), o(b, Lt);
  }
  var Ht = d('<div hidden id="'), Sn = d('">'), bt = d("</div>"), mn = d('<svg aria-hidden="true" style="display:none" id="'), Dt = d('">'), jt = d("</svg>"), yn = d('<math aria-hidden="true" style="display:none" id="'), Tn = d('">'), Le = d("</math>"), Ue = d('<table hidden id="'), vt = d('">'), et = d("</table>"), on = d('<table hidden><tbody id="'), St = d('">'), En = d("</tbody></table>"), Fn = d('<table hidden><tr id="'), X = d('">'), Fe = d("</tr></table>"), Ze = d('<table hidden><colgroup id="'), He = d('">'), pt = d("</colgroup></table>");
  function at(b, P, z, Q) {
    switch (z.insertionMode) {
      case 0:
      case 1:
        return a(b, Ht), a(b, P.segmentPrefix), a(b, c(Q.toString(16))), o(b, Sn);
      case 2:
        return a(b, mn), a(b, P.segmentPrefix), a(b, c(Q.toString(16))), o(b, Dt);
      case 3:
        return a(b, yn), a(b, P.segmentPrefix), a(b, c(Q.toString(16))), o(b, Tn);
      case 4:
        return a(b, Ue), a(b, P.segmentPrefix), a(b, c(Q.toString(16))), o(b, vt);
      case 5:
        return a(b, on), a(b, P.segmentPrefix), a(b, c(Q.toString(16))), o(b, St);
      case 6:
        return a(b, Fn), a(b, P.segmentPrefix), a(b, c(Q.toString(16))), o(b, X);
      case 7:
        return a(
          b,
          Ze
        ), a(b, P.segmentPrefix), a(b, c(Q.toString(16))), o(b, He);
      default:
        throw Error(t(397));
    }
  }
  function mt(b, P) {
    switch (P.insertionMode) {
      case 0:
      case 1:
        return o(b, bt);
      case 2:
        return o(b, jt);
      case 3:
        return o(b, Le);
      case 4:
        return o(b, et);
      case 5:
        return o(b, En);
      case 6:
        return o(b, Fe);
      case 7:
        return o(b, pt);
      default:
        throw Error(t(397));
    }
  }
  var dt = d('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Ke = d('$RS("'), Wt = d('","'), Ut = d('")<\/script>'), nn = d('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), Yt = d('$RC("'), Bt = d('","'), Mt = d('")<\/script>'), _t = d('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Tt = d('$RX("'), cn = d('"'), vn = d(")<\/script>"), zt = d(","), xn = /[<\u2028\u2029]/g;
  function fn(b) {
    return JSON.stringify(b).replace(xn, function(P) {
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
  var Vt = Object.assign, Xt = Symbol.for("react.element"), Dn = Symbol.for("react.portal"), On = Symbol.for("react.fragment"), er = Symbol.for("react.strict_mode"), jn = Symbol.for("react.profiler"), rn = Symbol.for("react.provider"), kn = Symbol.for("react.context"), pr = Symbol.for("react.forward_ref"), lr = Symbol.for("react.suspense"), sr = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), $ = Symbol.for("react.scope"), G = Symbol.for("react.debug_trace_mode"), be = Symbol.for("react.legacy_hidden"), B = Symbol.for("react.default_value"), I = Symbol.iterator;
  function te(b) {
    if (b == null)
      return null;
    if (typeof b == "function")
      return b.displayName || b.name || null;
    if (typeof b == "string")
      return b;
    switch (b) {
      case On:
        return "Fragment";
      case Dn:
        return "Portal";
      case jn:
        return "Profiler";
      case er:
        return "StrictMode";
      case lr:
        return "Suspense";
      case sr:
        return "SuspenseList";
    }
    if (typeof b == "object")
      switch (b.$$typeof) {
        case kn:
          return (b.displayName || "Context") + ".Consumer";
        case rn:
          return (b._context.displayName || "Context") + ".Provider";
        case pr:
          var P = b.render;
          return b = b.displayName, b || (b = P.displayName || P.name || "", b = b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef"), b;
        case x:
          return P = b.displayName || null, P !== null ? P : te(b.type) || "Memo";
        case A:
          P = b._payload, b = b._init;
          try {
            return te(b(P));
          } catch {
          }
      }
    return null;
  }
  var ye = {};
  function Ye(b, P) {
    if (b = b.contextTypes, !b)
      return ye;
    var z = {}, Q;
    for (Q in b)
      z[Q] = P[Q];
    return z;
  }
  var tt = null;
  function Pt(b, P) {
    if (b !== P) {
      b.context._currentValue = b.parentValue, b = b.parent;
      var z = P.parent;
      if (b === null) {
        if (z !== null)
          throw Error(t(401));
      } else {
        if (z === null)
          throw Error(t(401));
        Pt(b, z);
      }
      P.context._currentValue = P.value;
    }
  }
  function Cn(b) {
    b.context._currentValue = b.parentValue, b = b.parent, b !== null && Cn(b);
  }
  function hn(b) {
    var P = b.parent;
    P !== null && hn(P), b.context._currentValue = b.value;
  }
  function Mn(b, P) {
    if (b.context._currentValue = b.parentValue, b = b.parent, b === null)
      throw Error(t(402));
    b.depth === P.depth ? Pt(b, P) : Mn(b, P);
  }
  function ur(b, P) {
    var z = P.parent;
    if (z === null)
      throw Error(t(402));
    b.depth === z.depth ? Pt(b, z) : ur(b, z), P.context._currentValue = P.value;
  }
  function Un(b) {
    var P = tt;
    P !== b && (P === null ? hn(b) : b === null ? Cn(P) : P.depth === b.depth ? Pt(P, b) : P.depth > b.depth ? Mn(P, b) : ur(P, b), tt = b);
  }
  var Nr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(b, P) {
    b = b._reactInternals, b.queue !== null && b.queue.push(P);
  }, enqueueReplaceState: function(b, P) {
    b = b._reactInternals, b.replace = !0, b.queue = [P];
  }, enqueueForceUpdate: function() {
  } };
  function mr(b, P, z, Q) {
    var Se = b.state !== void 0 ? b.state : null;
    b.updater = Nr, b.props = z, b.state = Se;
    var ve = { queue: [], replace: !1 };
    b._reactInternals = ve;
    var Oe = P.contextType;
    if (b.context = typeof Oe == "object" && Oe !== null ? Oe._currentValue : Q, Oe = P.getDerivedStateFromProps, typeof Oe == "function" && (Oe = Oe(z, Se), Se = Oe == null ? Se : Vt({}, Se, Oe), b.state = Se), typeof P.getDerivedStateFromProps != "function" && typeof b.getSnapshotBeforeUpdate != "function" && (typeof b.UNSAFE_componentWillMount == "function" || typeof b.componentWillMount == "function"))
      if (P = b.state, typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount(), P !== b.state && Nr.enqueueReplaceState(b, b.state, null), ve.queue !== null && 0 < ve.queue.length)
        if (P = ve.queue, Oe = ve.replace, ve.queue = null, ve.replace = !1, Oe && P.length === 1)
          b.state = P[0];
        else {
          for (ve = Oe ? P[0] : b.state, Se = !0, Oe = Oe ? 1 : 0; Oe < P.length; Oe++) {
            var We = P[Oe];
            We = typeof We == "function" ? We.call(b, ve, z, Q) : We, We != null && (Se ? (Se = !1, ve = Vt({}, ve, We)) : Vt(ve, We));
          }
          b.state = ve;
        }
      else
        ve.queue = null;
  }
  var Tr = { id: 1, overflow: "" };
  function cr(b, P, z) {
    var Q = b.id;
    b = b.overflow;
    var Se = 32 - Zr(Q) - 1;
    Q &= ~(1 << Se), z += 1;
    var ve = 32 - Zr(P) + Se;
    if (30 < ve) {
      var Oe = Se - Se % 5;
      return ve = (Q & (1 << Oe) - 1).toString(32), Q >>= Oe, Se -= Oe, { id: 1 << 32 - Zr(P) + Se | z << Se | Q, overflow: ve + b };
    }
    return { id: 1 << ve | z << Se | Q, overflow: b };
  }
  var Zr = Math.clz32 ? Math.clz32 : Ua, al = Math.log, il = Math.LN2;
  function Ua(b) {
    return b >>>= 0, b === 0 ? 32 : 31 - (al(b) / il | 0) | 0;
  }
  function ol(b, P) {
    return b === P && (b !== 0 || 1 / b === 1 / P) || b !== b && P !== P;
  }
  var Ka = typeof Object.is == "function" ? Object.is : ol, dr = null, Qr = null, ha = null, Qt = null, gr = !1, $n = !1, Cr = 0, yr = null, pa = 0;
  function vr() {
    if (dr === null)
      throw Error(t(321));
    return dr;
  }
  function Kn() {
    if (0 < pa)
      throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Ya() {
    return Qt === null ? ha === null ? (gr = !1, ha = Qt = Kn()) : (gr = !0, Qt = ha) : Qt.next === null ? (gr = !1, Qt = Qt.next = Kn()) : (gr = !0, Qt = Qt.next), Qt;
  }
  function Xa() {
    Qr = dr = null, $n = !1, ha = null, pa = 0, Qt = yr = null;
  }
  function Vi(b, P) {
    return typeof P == "function" ? P(b) : P;
  }
  function ji(b, P, z) {
    if (dr = vr(), Qt = Ya(), gr) {
      var Q = Qt.queue;
      if (P = Q.dispatch, yr !== null && (z = yr.get(Q), z !== void 0)) {
        yr.delete(Q), Q = Qt.memoizedState;
        do
          Q = b(Q, z.action), z = z.next;
        while (z !== null);
        return Qt.memoizedState = Q, [Q, P];
      }
      return [Qt.memoizedState, P];
    }
    return b = b === Vi ? typeof P == "function" ? P() : P : z !== void 0 ? z(P) : P, Qt.memoizedState = b, b = Qt.queue = { last: null, dispatch: null }, b = b.dispatch = ll.bind(null, dr, b), [Qt.memoizedState, b];
  }
  function Ui(b, P) {
    if (dr = vr(), Qt = Ya(), P = P === void 0 ? null : P, Qt !== null) {
      var z = Qt.memoizedState;
      if (z !== null && P !== null) {
        var Q = z[1];
        e:
          if (Q === null)
            Q = !1;
          else {
            for (var Se = 0; Se < Q.length && Se < P.length; Se++)
              if (!Ka(P[Se], Q[Se])) {
                Q = !1;
                break e;
              }
            Q = !0;
          }
        if (Q)
          return z[0];
      }
    }
    return b = b(), Qt.memoizedState = [b, P], b;
  }
  function ll(b, P, z) {
    if (25 <= pa)
      throw Error(t(301));
    if (b === dr)
      if ($n = !0, b = { action: z, next: null }, yr === null && (yr = /* @__PURE__ */ new Map()), z = yr.get(P), z === void 0)
        yr.set(P, b);
      else {
        for (P = z; P.next !== null; )
          P = P.next;
        P.next = b;
      }
  }
  function sl() {
    throw Error(t(394));
  }
  function ma() {
  }
  var ga = { readContext: function(b) {
    return b._currentValue;
  }, useContext: function(b) {
    return vr(), b._currentValue;
  }, useMemo: Ui, useReducer: ji, useRef: function(b) {
    dr = vr(), Qt = Ya();
    var P = Qt.memoizedState;
    return P === null ? (b = { current: b }, Qt.memoizedState = b) : P;
  }, useState: function(b) {
    return ji(Vi, b);
  }, useInsertionEffect: ma, useLayoutEffect: function() {
  }, useCallback: function(b, P) {
    return Ui(function() {
      return b;
    }, P);
  }, useImperativeHandle: ma, useEffect: ma, useDebugValue: ma, useDeferredValue: function(b) {
    return vr(), b;
  }, useTransition: function() {
    return vr(), [!1, sl];
  }, useId: function() {
    var b = Qr.treeContext, P = b.overflow;
    b = b.id, b = (b & ~(1 << 32 - Zr(b) - 1)).toString(32) + P;
    var z = ya;
    if (z === null)
      throw Error(t(404));
    return P = Cr++, b = ":" + z.idPrefix + "R" + b, 0 < P && (b += "H" + P.toString(32)), b + ":";
  }, useMutableSource: function(b, P) {
    return vr(), P(b._source);
  }, useSyncExternalStore: function(b, P, z) {
    if (z === void 0)
      throw Error(t(407));
    return z();
  } }, ya = null, Jr = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function ul(b) {
    return console.error(b), null;
  }
  function ea() {
  }
  function qa(b, P, z, Q, Se, ve, Oe, We, ht) {
    var Rt = [], Et = /* @__PURE__ */ new Set();
    return P = { destination: null, responseState: P, progressiveChunkSize: Q === void 0 ? 12800 : Q, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Et, pingedTasks: Rt, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: Se === void 0 ? ul : Se, onAllReady: ve === void 0 ? ea : ve, onShellReady: Oe === void 0 ? ea : Oe, onShellError: We === void 0 ? ea : We, onFatalError: ht === void 0 ? ea : ht }, z = Fr(P, 0, null, z, !1, !1), z.parentFlushed = !0, b = Ga(P, b, null, z, Et, ye, null, Tr), Rt.push(b), P;
  }
  function Ga(b, P, z, Q, Se, ve, Oe, We) {
    b.allPendingTasks++, z === null ? b.pendingRootTasks++ : z.pendingTasks++;
    var ht = { node: P, ping: function() {
      var Rt = b.pingedTasks;
      Rt.push(ht), Rt.length === 1 && Zi(b);
    }, blockedBoundary: z, blockedSegment: Q, abortSet: Se, legacyContext: ve, context: Oe, treeContext: We };
    return Se.add(ht), ht;
  }
  function Fr(b, P, z, Q, Se, ve) {
    return { status: 0, id: -1, index: P, parentFlushed: !1, chunks: [], children: [], formatContext: Q, boundary: z, lastPushedText: Se, textEmbedded: ve };
  }
  function zr(b, P) {
    if (b = b.onError(P), b != null && typeof b != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof b + '" instead');
    return b;
  }
  function va(b, P) {
    var z = b.onShellError;
    z(P), z = b.onFatalError, z(P), b.destination !== null ? (b.status = 2, g(b.destination, P)) : (b.status = 1, b.fatalError = P);
  }
  function Ki(b, P, z, Q, Se) {
    for (dr = {}, Qr = P, Cr = 0, b = z(Q, Se); $n; )
      $n = !1, Cr = 0, pa += 1, Qt = null, b = z(Q, Se);
    return Xa(), b;
  }
  function Za(b, P, z, Q) {
    var Se = z.render(), ve = Q.childContextTypes;
    if (ve != null) {
      var Oe = P.legacyContext;
      if (typeof z.getChildContext != "function")
        Q = Oe;
      else {
        z = z.getChildContext();
        for (var We in z)
          if (!(We in ve))
            throw Error(t(108, te(Q) || "Unknown", We));
        Q = Vt({}, Oe, z);
      }
      P.legacyContext = Q, Bn(b, P, Se), P.legacyContext = Oe;
    } else
      Bn(b, P, Se);
  }
  function Yi(b, P) {
    if (b && b.defaultProps) {
      P = Vt({}, P), b = b.defaultProps;
      for (var z in b)
        P[z] === void 0 && (P[z] = b[z]);
      return P;
    }
    return P;
  }
  function xa(b, P, z, Q, Se) {
    if (typeof z == "function")
      if (z.prototype && z.prototype.isReactComponent) {
        Se = Ye(z, P.legacyContext);
        var ve = z.contextType;
        ve = new z(Q, typeof ve == "object" && ve !== null ? ve._currentValue : Se), mr(ve, z, Q, Se), Za(b, P, ve, z);
      } else {
        ve = Ye(z, P.legacyContext), Se = Ki(b, P, z, Q, ve);
        var Oe = Cr !== 0;
        if (typeof Se == "object" && Se !== null && typeof Se.render == "function" && Se.$$typeof === void 0)
          mr(Se, z, Q, ve), Za(b, P, Se, z);
        else if (Oe) {
          Q = P.treeContext, P.treeContext = cr(Q, 1, 0);
          try {
            Bn(b, P, Se);
          } finally {
            P.treeContext = Q;
          }
        } else
          Bn(b, P, Se);
      }
    else if (typeof z == "string") {
      switch (Se = P.blockedSegment, ve = Ve(Se.chunks, z, Q, b.responseState, Se.formatContext), Se.lastPushedText = !1, Oe = Se.formatContext, Se.formatContext = J(Oe, z, Q), ba(b, P, ve), Se.formatContext = Oe, z) {
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
          Se.chunks.push(Ge, c(z), lt);
      }
      Se.lastPushedText = !1;
    } else {
      switch (z) {
        case be:
        case G:
        case er:
        case jn:
        case On:
          Bn(b, P, Q.children);
          return;
        case sr:
          Bn(b, P, Q.children);
          return;
        case $:
          throw Error(t(343));
        case lr:
          e: {
            z = P.blockedBoundary, Se = P.blockedSegment, ve = Q.fallback, Q = Q.children, Oe = /* @__PURE__ */ new Set();
            var We = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: Oe, errorDigest: null }, ht = Fr(b, Se.chunks.length, We, Se.formatContext, !1, !1);
            Se.children.push(ht), Se.lastPushedText = !1;
            var Rt = Fr(b, 0, null, Se.formatContext, !1, !1);
            Rt.parentFlushed = !0, P.blockedBoundary = We, P.blockedSegment = Rt;
            try {
              if (ba(
                b,
                P,
                Q
              ), Rt.lastPushedText && Rt.textEmbedded && Rt.chunks.push(ne), Rt.status = 1, Sa(We, Rt), We.pendingTasks === 0)
                break e;
            } catch (Et) {
              Rt.status = 4, We.forceClientRender = !0, We.errorDigest = zr(b, Et);
            } finally {
              P.blockedBoundary = z, P.blockedSegment = Se;
            }
            P = Ga(b, ve, z, ht, Oe, P.legacyContext, P.context, P.treeContext), b.pingedTasks.push(P);
          }
          return;
      }
      if (typeof z == "object" && z !== null)
        switch (z.$$typeof) {
          case pr:
            if (Q = Ki(b, P, z.render, Q, Se), Cr !== 0) {
              z = P.treeContext, P.treeContext = cr(z, 1, 0);
              try {
                Bn(b, P, Q);
              } finally {
                P.treeContext = z;
              }
            } else
              Bn(b, P, Q);
            return;
          case x:
            z = z.type, Q = Yi(z, Q), xa(b, P, z, Q, Se);
            return;
          case rn:
            if (Se = Q.children, z = z._context, Q = Q.value, ve = z._currentValue, z._currentValue = Q, Oe = tt, tt = Q = { parent: Oe, depth: Oe === null ? 0 : Oe.depth + 1, context: z, parentValue: ve, value: Q }, P.context = Q, Bn(b, P, Se), b = tt, b === null)
              throw Error(t(403));
            Q = b.parentValue, b.context._currentValue = Q === B ? b.context._defaultValue : Q, b = tt = b.parent, P.context = b;
            return;
          case kn:
            Q = Q.children, Q = Q(z._currentValue), Bn(b, P, Q);
            return;
          case A:
            Se = z._init, z = Se(z._payload), Q = Yi(z, Q), xa(b, P, z, Q, void 0);
            return;
        }
      throw Error(t(
        130,
        z == null ? z : typeof z,
        ""
      ));
    }
  }
  function Bn(b, P, z) {
    if (P.node = z, typeof z == "object" && z !== null) {
      switch (z.$$typeof) {
        case Xt:
          xa(b, P, z.type, z.props, z.ref);
          return;
        case Dn:
          throw Error(t(257));
        case A:
          var Q = z._init;
          z = Q(z._payload), Bn(b, P, z);
          return;
      }
      if (Z(z)) {
        Xi(b, P, z);
        return;
      }
      if (z === null || typeof z != "object" ? Q = null : (Q = I && z[I] || z["@@iterator"], Q = typeof Q == "function" ? Q : null), Q && (Q = Q.call(z))) {
        if (z = Q.next(), !z.done) {
          var Se = [];
          do
            Se.push(z.value), z = Q.next();
          while (!z.done);
          Xi(b, P, Se);
        }
        return;
      }
      throw b = Object.prototype.toString.call(z), Error(t(31, b === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : b));
    }
    typeof z == "string" ? (Q = P.blockedSegment, Q.lastPushedText = Ae(P.blockedSegment.chunks, z, b.responseState, Q.lastPushedText)) : typeof z == "number" && (Q = P.blockedSegment, Q.lastPushedText = Ae(P.blockedSegment.chunks, "" + z, b.responseState, Q.lastPushedText));
  }
  function Xi(b, P, z) {
    for (var Q = z.length, Se = 0; Se < Q; Se++) {
      var ve = P.treeContext;
      P.treeContext = cr(ve, Q, Se);
      try {
        ba(b, P, z[Se]);
      } finally {
        P.treeContext = ve;
      }
    }
  }
  function ba(b, P, z) {
    var Q = P.blockedSegment.formatContext, Se = P.legacyContext, ve = P.context;
    try {
      return Bn(b, P, z);
    } catch (ht) {
      if (Xa(), typeof ht == "object" && ht !== null && typeof ht.then == "function") {
        z = ht;
        var Oe = P.blockedSegment, We = Fr(b, Oe.chunks.length, null, Oe.formatContext, Oe.lastPushedText, !0);
        Oe.children.push(We), Oe.lastPushedText = !1, b = Ga(b, P.node, P.blockedBoundary, We, P.abortSet, P.legacyContext, P.context, P.treeContext).ping, z.then(b, b), P.blockedSegment.formatContext = Q, P.legacyContext = Se, P.context = ve, Un(ve);
      } else
        throw P.blockedSegment.formatContext = Q, P.legacyContext = Se, P.context = ve, Un(ve), ht;
    }
  }
  function cl(b) {
    var P = b.blockedBoundary;
    b = b.blockedSegment, b.status = 3, Gi(this, P, b);
  }
  function qi(b, P, z) {
    var Q = b.blockedBoundary;
    b.blockedSegment.status = 3, Q === null ? (P.allPendingTasks--, P.status !== 2 && (P.status = 2, P.destination !== null && P.destination.close())) : (Q.pendingTasks--, Q.forceClientRender || (Q.forceClientRender = !0, b = z === void 0 ? Error(t(432)) : z, Q.errorDigest = P.onError(b), Q.parentFlushed && P.clientRenderedBoundaries.push(Q)), Q.fallbackAbortableTasks.forEach(function(Se) {
      return qi(Se, P, z);
    }), Q.fallbackAbortableTasks.clear(), P.allPendingTasks--, P.allPendingTasks === 0 && (Q = P.onAllReady, Q()));
  }
  function Sa(b, P) {
    if (P.chunks.length === 0 && P.children.length === 1 && P.children[0].boundary === null) {
      var z = P.children[0];
      z.id = P.id, z.parentFlushed = !0, z.status === 1 && Sa(b, z);
    } else
      b.completedSegments.push(P);
  }
  function Gi(b, P, z) {
    if (P === null) {
      if (z.parentFlushed) {
        if (b.completedRootSegment !== null)
          throw Error(t(389));
        b.completedRootSegment = z;
      }
      b.pendingRootTasks--, b.pendingRootTasks === 0 && (b.onShellError = ea, P = b.onShellReady, P());
    } else
      P.pendingTasks--, P.forceClientRender || (P.pendingTasks === 0 ? (z.parentFlushed && z.status === 1 && Sa(P, z), P.parentFlushed && b.completedBoundaries.push(P), P.fallbackAbortableTasks.forEach(cl, b), P.fallbackAbortableTasks.clear()) : z.parentFlushed && z.status === 1 && (Sa(P, z), P.completedSegments.length === 1 && P.parentFlushed && b.partialBoundaries.push(P)));
    b.allPendingTasks--, b.allPendingTasks === 0 && (b = b.onAllReady, b());
  }
  function Zi(b) {
    if (b.status !== 2) {
      var P = tt, z = Jr.current;
      Jr.current = ga;
      var Q = ya;
      ya = b.responseState;
      try {
        var Se = b.pingedTasks, ve;
        for (ve = 0; ve < Se.length; ve++) {
          var Oe = Se[ve], We = b, ht = Oe.blockedSegment;
          if (ht.status === 0) {
            Un(Oe.context);
            try {
              Bn(We, Oe, Oe.node), ht.lastPushedText && ht.textEmbedded && ht.chunks.push(ne), Oe.abortSet.delete(Oe), ht.status = 1, Gi(We, Oe.blockedBoundary, ht);
            } catch (Xn) {
              if (Xa(), typeof Xn == "object" && Xn !== null && typeof Xn.then == "function") {
                var Rt = Oe.ping;
                Xn.then(Rt, Rt);
              } else {
                Oe.abortSet.delete(Oe), ht.status = 4;
                var Et = Oe.blockedBoundary, tn = Xn, In = zr(We, tn);
                if (Et === null ? va(We, tn) : (Et.pendingTasks--, Et.forceClientRender || (Et.forceClientRender = !0, Et.errorDigest = In, Et.parentFlushed && We.clientRenderedBoundaries.push(Et))), We.allPendingTasks--, We.allPendingTasks === 0) {
                  var Yn = We.onAllReady;
                  Yn();
                }
              }
            } finally {
            }
          }
        }
        Se.splice(0, ve), b.destination !== null && Qa(b, b.destination);
      } catch (Xn) {
        zr(b, Xn), va(b, Xn);
      } finally {
        ya = Q, Jr.current = z, z === ga && Un(P);
      }
    }
  }
  function Ea(b, P, z) {
    switch (z.parentFlushed = !0, z.status) {
      case 0:
        var Q = z.id = b.nextSegmentId++;
        return z.lastPushedText = !1, z.textEmbedded = !1, b = b.responseState, a(P, ct), a(P, b.placeholderPrefix), b = c(Q.toString(16)), a(P, b), o(P, wt);
      case 1:
        z.status = 2;
        var Se = !0;
        Q = z.chunks;
        var ve = 0;
        z = z.children;
        for (var Oe = 0; Oe < z.length; Oe++) {
          for (Se = z[Oe]; ve < Se.index; ve++)
            a(P, Q[ve]);
          Se = ka(b, P, Se);
        }
        for (; ve < Q.length - 1; ve++)
          a(P, Q[ve]);
        return ve < Q.length && (Se = o(P, Q[ve])), Se;
      default:
        throw Error(t(390));
    }
  }
  function ka(b, P, z) {
    var Q = z.boundary;
    if (Q === null)
      return Ea(b, P, z);
    if (Q.parentFlushed = !0, Q.forceClientRender)
      Q = Q.errorDigest, o(P, $t), a(P, Gt), Q && (a(P, Ne), a(P, c(U(Q))), a(P, un)), o(P, At), Ea(b, P, z);
    else if (0 < Q.pendingTasks) {
      Q.rootSegmentID = b.nextSegmentId++, 0 < Q.completedSegments.length && b.partialBoundaries.push(Q);
      var Se = b.responseState, ve = Se.nextSuspenseID++;
      Se = d(Se.boundaryPrefix + ve.toString(16)), Q = Q.id = Se, Zt(P, b.responseState, Q), Ea(b, P, z);
    } else if (Q.byteSize > b.progressiveChunkSize)
      Q.rootSegmentID = b.nextSegmentId++, b.completedBoundaries.push(Q), Zt(P, b.responseState, Q.id), Ea(b, P, z);
    else {
      if (o(P, en), z = Q.completedSegments, z.length !== 1)
        throw Error(t(391));
      ka(b, P, z[0]);
    }
    return o(P, Ot);
  }
  function Qi(b, P, z) {
    return at(P, b.responseState, z.formatContext, z.id), ka(b, P, z), mt(P, z.formatContext);
  }
  function Ji(b, P, z) {
    for (var Q = z.completedSegments, Se = 0; Se < Q.length; Se++)
      eo(b, P, z, Q[Se]);
    if (Q.length = 0, b = b.responseState, Q = z.id, z = z.rootSegmentID, a(P, b.startInlineScript), b.sentCompleteBoundaryFunction ? a(P, Yt) : (b.sentCompleteBoundaryFunction = !0, a(P, nn)), Q === null)
      throw Error(t(395));
    return z = c(z.toString(16)), a(P, Q), a(P, Bt), a(P, b.segmentPrefix), a(P, z), o(P, Mt);
  }
  function eo(b, P, z, Q) {
    if (Q.status === 2)
      return !0;
    var Se = Q.id;
    if (Se === -1) {
      if ((Q.id = z.rootSegmentID) === -1)
        throw Error(t(392));
      return Qi(b, P, Q);
    }
    return Qi(b, P, Q), b = b.responseState, a(P, b.startInlineScript), b.sentCompleteSegmentFunction ? a(P, Ke) : (b.sentCompleteSegmentFunction = !0, a(P, dt)), a(P, b.segmentPrefix), Se = c(Se.toString(16)), a(P, Se), a(P, Wt), a(P, b.placeholderPrefix), a(P, Se), o(P, Ut);
  }
  function Qa(b, P) {
    r = new Uint8Array(512), n = 0;
    try {
      var z = b.completedRootSegment;
      if (z !== null && b.pendingRootTasks === 0) {
        ka(b, P, z), b.completedRootSegment = null;
        var Q = b.responseState.bootstrapChunks;
        for (z = 0; z < Q.length - 1; z++)
          a(P, Q[z]);
        z < Q.length && o(P, Q[z]);
      }
      var Se = b.clientRenderedBoundaries, ve;
      for (ve = 0; ve < Se.length; ve++) {
        var Oe = Se[ve];
        Q = P;
        var We = b.responseState, ht = Oe.id, Rt = Oe.errorDigest, Et = Oe.errorMessage, tn = Oe.errorComponentStack;
        if (a(Q, We.startInlineScript), We.sentClientRenderFunction ? a(Q, Tt) : (We.sentClientRenderFunction = !0, a(
          Q,
          _t
        )), ht === null)
          throw Error(t(395));
        a(Q, ht), a(Q, cn), (Rt || Et || tn) && (a(Q, zt), a(Q, c(fn(Rt || "")))), (Et || tn) && (a(Q, zt), a(Q, c(fn(Et || "")))), tn && (a(Q, zt), a(Q, c(fn(tn)))), o(Q, vn);
      }
      Se.splice(0, ve);
      var In = b.completedBoundaries;
      for (ve = 0; ve < In.length; ve++)
        Ji(b, P, In[ve]);
      In.splice(0, ve), f(P), r = new Uint8Array(512), n = 0;
      var Yn = b.partialBoundaries;
      for (ve = 0; ve < Yn.length; ve++) {
        var Xn = Yn[ve];
        e: {
          Se = b, Oe = P;
          var wa = Xn.completedSegments;
          for (We = 0; We < wa.length; We++)
            if (!eo(
              Se,
              Oe,
              Xn,
              wa[We]
            )) {
              We++, wa.splice(0, We);
              var no = !1;
              break e;
            }
          wa.splice(0, We), no = !0;
        }
        if (!no) {
          b.destination = null, ve++, Yn.splice(0, ve);
          return;
        }
      }
      Yn.splice(0, ve);
      var Ja = b.completedBoundaries;
      for (ve = 0; ve < Ja.length; ve++)
        Ji(b, P, Ja[ve]);
      Ja.splice(0, ve);
    } finally {
      f(P), b.allPendingTasks === 0 && b.pingedTasks.length === 0 && b.clientRenderedBoundaries.length === 0 && b.completedBoundaries.length === 0 && P.close();
    }
  }
  function to(b, P) {
    try {
      var z = b.abortableTasks;
      z.forEach(function(Q) {
        return qi(Q, b, P);
      }), z.clear(), b.destination !== null && Qa(b, b.destination);
    } catch (Q) {
      zr(b, Q), va(b, Q);
    }
  }
  return Ou.renderToReadableStream = function(b, P) {
    return new Promise(function(z, Q) {
      var Se, ve, Oe = new Promise(function(Et, tn) {
        ve = Et, Se = tn;
      }), We = qa(b, he(P ? P.identifierPrefix : void 0, P ? P.nonce : void 0, P ? P.bootstrapScriptContent : void 0, P ? P.bootstrapScripts : void 0, P ? P.bootstrapModules : void 0), V(P ? P.namespaceURI : void 0), P ? P.progressiveChunkSize : void 0, P ? P.onError : void 0, ve, function() {
        var Et = new ReadableStream({ type: "bytes", pull: function(tn) {
          if (We.status === 1)
            We.status = 2, g(tn, We.fatalError);
          else if (We.status !== 2 && We.destination === null) {
            We.destination = tn;
            try {
              Qa(We, tn);
            } catch (In) {
              zr(We, In), va(We, In);
            }
          }
        }, cancel: function() {
          to(We);
        } }, { highWaterMark: 0 });
        Et.allReady = Oe, z(Et);
      }, function(Et) {
        Oe.catch(function() {
        }), Q(Et);
      }, Se);
      if (P && P.signal) {
        var ht = P.signal, Rt = function() {
          to(We, ht.reason), ht.removeEventListener("abort", Rt);
        };
        ht.addEventListener("abort", Rt);
      }
      Zi(We);
    });
  }, Ou.version = "18.2.0", Ou;
}
var Li = {};
/**
 * @license React
 * react-dom-server-legacy.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nm;
function PE() {
  return nm || (nm = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ue, t = "18.2.0", r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(l) {
      {
        for (var h = arguments.length, S = new Array(h > 1 ? h - 1 : 0), C = 1; C < h; C++)
          S[C - 1] = arguments[C];
        o("warn", l, S);
      }
    }
    function a(l) {
      {
        for (var h = arguments.length, S = new Array(h > 1 ? h - 1 : 0), C = 1; C < h; C++)
          S[C - 1] = arguments[C];
        o("error", l, S);
      }
    }
    function o(l, h, S) {
      {
        var C = r.ReactDebugCurrentFrame, F = C.getStackAddendum();
        F !== "" && (h += "%s", S = S.concat([F]));
        var ee = S.map(function(de) {
          return String(de);
        });
        ee.unshift("Warning: " + h), Function.prototype.apply.call(console[l], console, ee);
      }
    }
    function f(l) {
      l();
    }
    function s(l) {
    }
    function c(l, h) {
      d(l, h);
    }
    function d(l, h) {
      return l.push(h);
    }
    function g(l) {
    }
    function y(l) {
      l.push(null);
    }
    function v(l) {
      return l;
    }
    function E(l) {
      return l;
    }
    function k(l, h) {
      l.destroy(h);
    }
    function M(l) {
      {
        var h = typeof Symbol == "function" && Symbol.toStringTag, S = h && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return S;
      }
    }
    function T(l) {
      try {
        return m(l), !1;
      } catch {
        return !0;
      }
    }
    function m(l) {
      return "" + l;
    }
    function D(l, h) {
      if (T(l))
        return a("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", h, M(l)), m(l);
    }
    function L(l, h) {
      if (T(l))
        return a("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", h, M(l)), m(l);
    }
    function _(l) {
      if (T(l))
        return a("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", M(l)), m(l);
    }
    var N = Object.prototype.hasOwnProperty, R = 0, U = 1, H = 2, Y = 3, Z = 4, re = 5, K = 6, q = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", me = q + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", W = new RegExp("^[" + q + "][" + me + "]*$"), se = {}, ce = {};
    function he(l) {
      return N.call(ce, l) ? !0 : N.call(se, l) ? !1 : W.test(l) ? (ce[l] = !0, !0) : (se[l] = !0, a("Invalid attribute name: `%s`", l), !1);
    }
    function ie(l, h, S, C) {
      if (S !== null && S.type === R)
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
          var F = l.toLowerCase().slice(0, 5);
          return F !== "data-" && F !== "aria-";
        }
        default:
          return !1;
      }
    }
    function V(l) {
      return ne.hasOwnProperty(l) ? ne[l] : null;
    }
    function J(l, h, S, C, F, ee, de) {
      this.acceptsBooleans = h === H || h === Y || h === Z, this.attributeName = C, this.attributeNamespace = F, this.mustUseProperty = S, this.propertyName = l, this.type = h, this.sanitizeURL = ee, this.removeEmptyString = de;
    }
    var ne = {}, Ae = [
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
    Ae.forEach(function(l) {
      ne[l] = new J(
        l,
        R,
        !1,
        // mustUseProperty
        l,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(l) {
      var h = l[0], S = l[1];
      ne[h] = new J(
        h,
        U,
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
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(l) {
      ne[l] = new J(
        l,
        H,
        !1,
        // mustUseProperty
        l.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(l) {
      ne[l] = new J(
        l,
        H,
        !1,
        // mustUseProperty
        l,
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
    ].forEach(function(l) {
      ne[l] = new J(
        l,
        Y,
        !1,
        // mustUseProperty
        l.toLowerCase(),
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
    ].forEach(function(l) {
      ne[l] = new J(
        l,
        Y,
        !0,
        // mustUseProperty
        l,
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
    ].forEach(function(l) {
      ne[l] = new J(
        l,
        Z,
        !1,
        // mustUseProperty
        l,
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
    ].forEach(function(l) {
      ne[l] = new J(
        l,
        K,
        !1,
        // mustUseProperty
        l,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(l) {
      ne[l] = new J(
        l,
        re,
        !1,
        // mustUseProperty
        l.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var xe = /[\-\:]([a-z])/g, Pe = function(l) {
      return l[1].toUpperCase();
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
    ].forEach(function(l) {
      var h = l.replace(xe, Pe);
      ne[h] = new J(
        h,
        U,
        !1,
        // mustUseProperty
        l,
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
    ].forEach(function(l) {
      var h = l.replace(xe, Pe);
      ne[h] = new J(
        h,
        U,
        !1,
        // mustUseProperty
        l,
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
    ].forEach(function(l) {
      var h = l.replace(xe, Pe);
      ne[h] = new J(
        h,
        U,
        !1,
        // mustUseProperty
        l,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(l) {
      ne[l] = new J(
        l,
        U,
        !1,
        // mustUseProperty
        l.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var le = "xlinkHref";
    ne[le] = new J(
      "xlinkHref",
      U,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(l) {
      ne[l] = new J(
        l,
        U,
        !1,
        // mustUseProperty
        l.toLowerCase(),
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
    function $e(l, h) {
      return l + h.charAt(0).toUpperCase() + h.substring(1);
    }
    var Te = ["Webkit", "ms", "Moz", "O"];
    Object.keys(_e).forEach(function(l) {
      Te.forEach(function(h) {
        _e[$e(h, l)] = _e[l];
      });
    });
    var ge = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Re(l, h) {
      ge[h.type] || h.onChange || h.onInput || h.readOnly || h.disabled || h.value == null || a("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), h.onChange || h.readOnly || h.disabled || h.checked == null || a("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function oe(l, h) {
      if (l.indexOf("-") === -1)
        return typeof h.is == "string";
      switch (l) {
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
    var we = {
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
    }, Ce = {}, Be = new RegExp("^(aria)-[" + me + "]*$"), je = new RegExp("^(aria)[A-Z][" + me + "]*$");
    function qe(l, h) {
      {
        if (N.call(Ce, h) && Ce[h])
          return !0;
        if (je.test(h)) {
          var S = "aria-" + h.slice(4).toLowerCase(), C = we.hasOwnProperty(S) ? S : null;
          if (C == null)
            return a("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", h), Ce[h] = !0, !0;
          if (h !== C)
            return a("Invalid ARIA attribute `%s`. Did you mean `%s`?", h, C), Ce[h] = !0, !0;
        }
        if (Be.test(h)) {
          var F = h.toLowerCase(), ee = we.hasOwnProperty(F) ? F : null;
          if (ee == null)
            return Ce[h] = !0, !1;
          if (h !== ee)
            return a("Unknown ARIA attribute `%s`. Did you mean `%s`?", h, ee), Ce[h] = !0, !0;
        }
      }
      return !0;
    }
    function ot(l, h) {
      {
        var S = [];
        for (var C in h) {
          var F = qe(l, C);
          F || S.push(C);
        }
        var ee = S.map(function(de) {
          return "`" + de + "`";
        }).join(", ");
        S.length === 1 ? a("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", ee, l) : S.length > 1 && a("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", ee, l);
      }
    }
    function Je(l, h) {
      oe(l, h) || ot(l, h);
    }
    var it = !1;
    function Xe(l, h) {
      {
        if (l !== "input" && l !== "textarea" && l !== "select")
          return;
        h != null && h.value === null && !it && (it = !0, l === "select" && h.multiple ? a("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", l) : a("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", l));
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
    }, Me = function() {
    };
    {
      var ut = {}, Ve = /^on./, Ge = /^on[^A-Z]/, lt = new RegExp("^(aria)-[" + me + "]*$"), ct = new RegExp("^(aria)[A-Z][" + me + "]*$");
      Me = function(l, h, S, C) {
        if (N.call(ut, h) && ut[h])
          return !0;
        var F = h.toLowerCase();
        if (F === "onfocusin" || F === "onfocusout")
          return a("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ut[h] = !0, !0;
        if (C != null) {
          var ee = C.registrationNameDependencies, de = C.possibleRegistrationNames;
          if (ee.hasOwnProperty(h))
            return !0;
          var Ee = de.hasOwnProperty(F) ? de[F] : null;
          if (Ee != null)
            return a("Invalid event handler property `%s`. Did you mean `%s`?", h, Ee), ut[h] = !0, !0;
          if (Ve.test(h))
            return a("Unknown event handler property `%s`. It will be ignored.", h), ut[h] = !0, !0;
        } else if (Ve.test(h))
          return Ge.test(h) && a("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", h), ut[h] = !0, !0;
        if (lt.test(h) || ct.test(h))
          return !0;
        if (F === "innerhtml")
          return a("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ut[h] = !0, !0;
        if (F === "aria")
          return a("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ut[h] = !0, !0;
        if (F === "is" && S !== null && S !== void 0 && typeof S != "string")
          return a("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof S), ut[h] = !0, !0;
        if (typeof S == "number" && isNaN(S))
          return a("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", h), ut[h] = !0, !0;
        var ze = V(h), nt = ze !== null && ze.type === R;
        if (Ie.hasOwnProperty(F)) {
          var st = Ie[F];
          if (st !== h)
            return a("Invalid DOM property `%s`. Did you mean `%s`?", h, st), ut[h] = !0, !0;
        } else if (!nt && h !== F)
          return a("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", h, F), ut[h] = !0, !0;
        return typeof S == "boolean" && ie(h, S, ze, !1) ? (S ? a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', S, h, h, S, h) : a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', S, h, h, S, h, h, h), ut[h] = !0, !0) : nt ? !0 : ie(h, S, ze, !1) ? (ut[h] = !0, !1) : ((S === "false" || S === "true") && ze !== null && ze.type === Y && (a("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", S, h, S === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', h, S), ut[h] = !0), !0);
      };
    }
    var wt = function(l, h, S) {
      {
        var C = [];
        for (var F in h) {
          var ee = Me(l, F, h[F], S);
          ee || C.push(F);
        }
        var de = C.map(function(Ee) {
          return "`" + Ee + "`";
        }).join(", ");
        C.length === 1 ? a("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", de, l) : C.length > 1 && a("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", de, l);
      }
    };
    function en(l, h, S) {
      oe(l, h) || wt(l, h, S);
    }
    var an = function() {
    };
    {
      var Lt = /^(?:webkit|moz|o)[A-Z]/, $t = /^-ms-/, Ot = /-(.)/g, Gt = /;\s*$/, un = {}, Ne = {}, At = !1, Zt = !1, Ht = function(l) {
        return l.replace(Ot, function(h, S) {
          return S.toUpperCase();
        });
      }, Sn = function(l) {
        un.hasOwnProperty(l) && un[l] || (un[l] = !0, a(
          "Unsupported style property %s. Did you mean %s?",
          l,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Ht(l.replace($t, "ms-"))
        ));
      }, bt = function(l) {
        un.hasOwnProperty(l) && un[l] || (un[l] = !0, a("Unsupported vendor-prefixed style property %s. Did you mean %s?", l, l.charAt(0).toUpperCase() + l.slice(1)));
      }, mn = function(l, h) {
        Ne.hasOwnProperty(h) && Ne[h] || (Ne[h] = !0, a(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, l, h.replace(Gt, "")));
      }, Dt = function(l, h) {
        At || (At = !0, a("`NaN` is an invalid value for the `%s` css style property.", l));
      }, jt = function(l, h) {
        Zt || (Zt = !0, a("`Infinity` is an invalid value for the `%s` css style property.", l));
      };
      an = function(l, h) {
        l.indexOf("-") > -1 ? Sn(l) : Lt.test(l) ? bt(l) : Gt.test(h) && mn(l, h), typeof h == "number" && (isNaN(h) ? Dt(l, h) : isFinite(h) || jt(l, h));
      };
    }
    var yn = an, Tn = /["'&<>]/;
    function Le(l) {
      _(l);
      var h = "" + l, S = Tn.exec(h);
      if (!S)
        return h;
      var C, F = "", ee, de = 0;
      for (ee = S.index; ee < h.length; ee++) {
        switch (h.charCodeAt(ee)) {
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
        de !== ee && (F += h.substring(de, ee)), de = ee + 1, F += C;
      }
      return de !== ee ? F + h.substring(de, ee) : F;
    }
    function Ue(l) {
      return typeof l == "boolean" || typeof l == "number" ? "" + l : Le(l);
    }
    var vt = /([A-Z])/g, et = /^ms-/;
    function on(l) {
      return l.replace(vt, "-$1").toLowerCase().replace(et, "-ms-");
    }
    var St = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, En = !1;
    function Fn(l) {
      !En && St.test(l) && (En = !0, a("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(l)));
    }
    var X = Array.isArray;
    function Fe(l) {
      return X(l);
    }
    var Ze = "<script>", He = "<\/script>", pt = '<script src="', at = '<script type="module" src="', mt = '" async=""><\/script>';
    function dt(l) {
      return _(l), ("" + l).replace(Ke, Wt);
    }
    var Ke = /(<\/|<)(s)(cript)/gi, Wt = function(l, h, S, C) {
      return "" + h + (S === "s" ? "\\u0073" : "\\u0053") + C;
    };
    function Ut(l, h, S, C, F) {
      var ee = l === void 0 ? "" : l, de = h === void 0 ? Ze : '<script nonce="' + Ue(h) + '">', Ee = [];
      if (S !== void 0 && Ee.push(de, dt(S), He), C !== void 0)
        for (var ze = 0; ze < C.length; ze++)
          Ee.push(pt, Ue(C[ze]), mt);
      if (F !== void 0)
        for (var nt = 0; nt < F.length; nt++)
          Ee.push(at, Ue(F[nt]), mt);
      return {
        bootstrapChunks: Ee,
        startInlineScript: de,
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
    var nn = 0, Yt = 1, Bt = 2, Mt = 3, _t = 4, Tt = 5, cn = 6, vn = 7;
    function zt(l, h) {
      return {
        insertionMode: l,
        selectedValue: h
      };
    }
    function xn(l, h, S) {
      switch (h) {
        case "select":
          return zt(Yt, S.value != null ? S.value : S.defaultValue);
        case "svg":
          return zt(Bt, null);
        case "math":
          return zt(Mt, null);
        case "foreignObject":
          return zt(Yt, null);
        case "table":
          return zt(_t, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return zt(Tt, null);
        case "colgroup":
          return zt(vn, null);
        case "tr":
          return zt(cn, null);
      }
      return l.insertionMode >= _t || l.insertionMode === nn ? zt(Yt, null) : l;
    }
    var fn = null;
    function Vt(l) {
      var h = l.nextSuspenseID++;
      return l.boundaryPrefix + h.toString(16);
    }
    function Xt(l, h, S) {
      var C = l.idPrefix, F = ":" + C + "R" + h;
      return S > 0 && (F += "H" + S.toString(32)), F + ":";
    }
    function Dn(l) {
      return Ue(l);
    }
    var On = "<!-- -->";
    function er(l, h, S, C) {
      return h === "" ? C : (C && l.push(On), l.push(Dn(h)), !0);
    }
    function jn(l, h, S, C) {
      S && C && l.push(On);
    }
    var rn = /* @__PURE__ */ new Map();
    function kn(l) {
      var h = rn.get(l);
      if (h !== void 0)
        return h;
      var S = Ue(on(l));
      return rn.set(l, S), S;
    }
    var pr = ' style="', lr = ":", sr = ";";
    function x(l, h, S) {
      if (typeof S != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var C = !0;
      for (var F in S)
        if (N.call(S, F)) {
          var ee = S[F];
          if (!(ee == null || typeof ee == "boolean" || ee === "")) {
            var de = void 0, Ee = void 0, ze = F.indexOf("--") === 0;
            ze ? (de = Ue(F), L(ee, F), Ee = Ue(("" + ee).trim())) : (yn(F, ee), de = kn(F), typeof ee == "number" ? ee !== 0 && !N.call(_e, F) ? Ee = ee + "px" : Ee = "" + ee : (L(ee, F), Ee = Ue(("" + ee).trim()))), C ? (C = !1, l.push(pr, de, lr, Ee)) : l.push(sr, de, lr, Ee);
          }
        }
      C || l.push(G);
    }
    var A = " ", $ = '="', G = '"', be = '=""';
    function B(l, h, S, C) {
      switch (S) {
        case "style": {
          x(l, h, C);
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
        var F = V(S);
        if (F !== null) {
          switch (typeof C) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!F.acceptsBooleans)
                return;
          }
          var ee = F.attributeName, de = ee;
          switch (F.type) {
            case Y:
              C && l.push(A, de, be);
              return;
            case Z:
              C === !0 ? l.push(A, de, be) : C === !1 || l.push(A, de, $, Ue(C), G);
              return;
            case re:
              isNaN(C) || l.push(A, de, $, Ue(C), G);
              break;
            case K:
              !isNaN(C) && C >= 1 && l.push(A, de, $, Ue(C), G);
              break;
            default:
              F.sanitizeURL && (D(C, ee), C = "" + C, Fn(C)), l.push(A, de, $, Ue(C), G);
          }
        } else if (he(S)) {
          switch (typeof C) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var Ee = S.toLowerCase().slice(0, 5);
              if (Ee !== "data-" && Ee !== "aria-")
                return;
            }
          }
          l.push(A, S, $, Ue(C), G);
        }
      }
    }
    var I = ">", te = "/>";
    function ye(l, h, S) {
      if (h != null) {
        if (S != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof h != "object" || !("__html" in h))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var C = h.__html;
        C != null && (_(C), l.push("" + C));
      }
    }
    var Ye = !1, tt = !1, Pt = !1, Cn = !1, hn = !1, Mn = !1, ur = !1;
    function Un(l, h) {
      {
        var S = l[h];
        if (S != null) {
          var C = Fe(S);
          l.multiple && !C ? a("The `%s` prop supplied to <select> must be an array if `multiple` is true.", h) : !l.multiple && C && a("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", h);
        }
      }
    }
    function Nr(l, h, S) {
      Re("select", h), Un(h, "value"), Un(h, "defaultValue"), h.value !== void 0 && h.defaultValue !== void 0 && !Pt && (a("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Pt = !0), l.push($n("select"));
      var C = null, F = null;
      for (var ee in h)
        if (N.call(h, ee)) {
          var de = h[ee];
          if (de == null)
            continue;
          switch (ee) {
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
              B(l, S, ee, de);
              break;
          }
        }
      return l.push(I), ye(l, F, C), C;
    }
    function mr(l) {
      var h = "";
      return e.Children.forEach(l, function(S) {
        S != null && (h += S, !hn && typeof S != "string" && typeof S != "number" && (hn = !0, a("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), h;
    }
    var Tr = ' selected=""';
    function cr(l, h, S, C) {
      var F = C.selectedValue;
      l.push($n("option"));
      var ee = null, de = null, Ee = null, ze = null;
      for (var nt in h)
        if (N.call(h, nt)) {
          var st = h[nt];
          if (st == null)
            continue;
          switch (nt) {
            case "children":
              ee = st;
              break;
            case "selected":
              Ee = st, ur || (a("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ur = !0);
              break;
            case "dangerouslySetInnerHTML":
              ze = st;
              break;
            case "value":
              de = st;
            default:
              B(l, S, nt, st);
              break;
          }
        }
      if (F != null) {
        var gt;
        if (de !== null ? (D(de, "value"), gt = "" + de) : (ze !== null && (Mn || (Mn = !0, a("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), gt = mr(ee)), Fe(F))
          for (var ln = 0; ln < F.length; ln++) {
            D(F[ln], "value");
            var Nn = "" + F[ln];
            if (Nn === gt) {
              l.push(Tr);
              break;
            }
          }
        else
          D(F, "select.value"), "" + F === gt && l.push(Tr);
      } else
        Ee && l.push(Tr);
      return l.push(I), ye(l, ze, ee), ee;
    }
    function Zr(l, h, S) {
      Re("input", h), h.checked !== void 0 && h.defaultChecked !== void 0 && !tt && (a("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", h.type), tt = !0), h.value !== void 0 && h.defaultValue !== void 0 && !Ye && (a("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", h.type), Ye = !0), l.push($n("input"));
      var C = null, F = null, ee = null, de = null;
      for (var Ee in h)
        if (N.call(h, Ee)) {
          var ze = h[Ee];
          if (ze == null)
            continue;
          switch (Ee) {
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
              ee = ze;
              break;
            case "value":
              C = ze;
              break;
            default:
              B(l, S, Ee, ze);
              break;
          }
        }
      return ee !== null ? B(l, S, "checked", ee) : de !== null && B(l, S, "checked", de), C !== null ? B(l, S, "value", C) : F !== null && B(l, S, "value", F), l.push(te), null;
    }
    function al(l, h, S) {
      Re("textarea", h), h.value !== void 0 && h.defaultValue !== void 0 && !Cn && (a("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Cn = !0), l.push($n("textarea"));
      var C = null, F = null, ee = null;
      for (var de in h)
        if (N.call(h, de)) {
          var Ee = h[de];
          if (Ee == null)
            continue;
          switch (de) {
            case "children":
              ee = Ee;
              break;
            case "value":
              C = Ee;
              break;
            case "defaultValue":
              F = Ee;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              B(l, S, de, Ee);
              break;
          }
        }
      if (C === null && F !== null && (C = F), l.push(I), ee != null) {
        if (a("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), C != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (Fe(ee)) {
          if (ee.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          _(ee[0]), C = "" + ee[0];
        }
        _(ee), C = "" + ee;
      }
      return typeof C == "string" && C[0] === `
` && l.push(Qr), C !== null && (D(C, "value"), l.push(Dn("" + C))), null;
    }
    function il(l, h, S, C) {
      l.push($n(S));
      for (var F in h)
        if (N.call(h, F)) {
          var ee = h[F];
          if (ee == null)
            continue;
          switch (F) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(S + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              B(l, C, F, ee);
              break;
          }
        }
      return l.push(te), null;
    }
    function Ua(l, h, S) {
      l.push($n("menuitem"));
      for (var C in h)
        if (N.call(h, C)) {
          var F = h[C];
          if (F == null)
            continue;
          switch (C) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              B(l, S, C, F);
              break;
          }
        }
      return l.push(I), null;
    }
    function ol(l, h, S) {
      l.push($n("title"));
      var C = null;
      for (var F in h)
        if (N.call(h, F)) {
          var ee = h[F];
          if (ee == null)
            continue;
          switch (F) {
            case "children":
              C = ee;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              B(l, S, F, ee);
              break;
          }
        }
      l.push(I);
      {
        var de = Array.isArray(C) && C.length < 2 ? C[0] || null : C;
        Array.isArray(C) && C.length > 1 ? a("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : de != null && de.$$typeof != null ? a("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : de != null && typeof de != "string" && typeof de != "number" && a("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return C;
    }
    function Ka(l, h, S, C) {
      l.push($n(S));
      var F = null, ee = null;
      for (var de in h)
        if (N.call(h, de)) {
          var Ee = h[de];
          if (Ee == null)
            continue;
          switch (de) {
            case "children":
              F = Ee;
              break;
            case "dangerouslySetInnerHTML":
              ee = Ee;
              break;
            default:
              B(l, C, de, Ee);
              break;
          }
        }
      return l.push(I), ye(l, ee, F), typeof F == "string" ? (l.push(Dn(F)), null) : F;
    }
    function dr(l, h, S, C) {
      l.push($n(S));
      var F = null, ee = null;
      for (var de in h)
        if (N.call(h, de)) {
          var Ee = h[de];
          if (Ee == null)
            continue;
          switch (de) {
            case "children":
              F = Ee;
              break;
            case "dangerouslySetInnerHTML":
              ee = Ee;
              break;
            case "style":
              x(l, C, Ee);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              he(de) && typeof Ee != "function" && typeof Ee != "symbol" && l.push(A, de, $, Ue(Ee), G);
              break;
          }
        }
      return l.push(I), ye(l, ee, F), F;
    }
    var Qr = `
`;
    function ha(l, h, S, C) {
      l.push($n(S));
      var F = null, ee = null;
      for (var de in h)
        if (N.call(h, de)) {
          var Ee = h[de];
          if (Ee == null)
            continue;
          switch (de) {
            case "children":
              F = Ee;
              break;
            case "dangerouslySetInnerHTML":
              ee = Ee;
              break;
            default:
              B(l, C, de, Ee);
              break;
          }
        }
      if (l.push(I), ee != null) {
        if (F != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof ee != "object" || !("__html" in ee))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var ze = ee.__html;
        ze != null && (typeof ze == "string" && ze.length > 0 && ze[0] === `
` ? l.push(Qr, ze) : (_(ze), l.push("" + ze)));
      }
      return typeof F == "string" && F[0] === `
` && l.push(Qr), F;
    }
    var Qt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, gr = /* @__PURE__ */ new Map();
    function $n(l) {
      var h = gr.get(l);
      if (h === void 0) {
        if (!Qt.test(l))
          throw new Error("Invalid tag: " + l);
        h = "<" + l, gr.set(l, h);
      }
      return h;
    }
    var Cr = "<!DOCTYPE html>";
    function yr(l, h, S, C, F) {
      switch (Je(h, S), Xe(h, S), en(h, S, null), !S.suppressContentEditableWarning && S.contentEditable && S.children != null && a("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), F.insertionMode !== Bt && F.insertionMode !== Mt && h.indexOf("-") === -1 && typeof S.is != "string" && h.toLowerCase() !== h && a("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", h), h) {
        case "select":
          return Nr(l, S, C);
        case "option":
          return cr(l, S, C, F);
        case "textarea":
          return al(l, S, C);
        case "input":
          return Zr(l, S, C);
        case "menuitem":
          return Ua(l, S, C);
        case "title":
          return ol(l, S, C);
        case "listing":
        case "pre":
          return ha(l, S, h, C);
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
          return il(l, S, h, C);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return Ka(l, S, h, C);
        case "html":
          return F.insertionMode === nn && l.push(Cr), Ka(l, S, h, C);
        default:
          return h.indexOf("-") === -1 && typeof S.is != "string" ? Ka(l, S, h, C) : dr(l, S, h, C);
      }
    }
    var pa = "</", vr = ">";
    function Kn(l, h, S) {
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
          l.push(pa, h, vr);
      }
    }
    function Ya(l, h) {
      for (var S = h.bootstrapChunks, C = 0; C < S.length - 1; C++)
        c(l, S[C]);
      return C < S.length ? d(l, S[C]) : !0;
    }
    var Xa = '<template id="', Vi = '"></template>';
    function ji(l, h, S) {
      c(l, Xa), c(l, h.placeholderPrefix);
      var C = S.toString(16);
      return c(l, C), d(l, Vi);
    }
    var Ui = "<!--$-->", ll = '<!--$?--><template id="', sl = '"></template>', ma = "<!--$!-->", ga = "<!--/$-->", ya = "<template", Jr = '"', ul = ' data-dgst="', ea = ' data-msg="', qa = ' data-stck="', Ga = "></template>";
    function Fr(l, h) {
      return d(l, Ui);
    }
    function zr(l, h, S) {
      if (c(l, ll), S === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return c(l, S), d(l, sl);
    }
    function va(l, h, S, C, F) {
      var ee;
      return ee = d(l, ma), c(l, ya), S && (c(l, ul), c(l, Ue(S)), c(l, Jr)), C && (c(l, ea), c(l, Ue(C)), c(l, Jr)), F && (c(l, qa), c(l, Ue(F)), c(l, Jr)), ee = d(l, Ga), ee;
    }
    function Ki(l, h) {
      return d(l, ga);
    }
    function Za(l, h) {
      return d(l, ga);
    }
    function Yi(l, h) {
      return d(l, ga);
    }
    var xa = '<div hidden id="', Bn = '">', Xi = "</div>", ba = '<svg aria-hidden="true" style="display:none" id="', cl = '">', qi = "</svg>", Sa = '<math aria-hidden="true" style="display:none" id="', Gi = '">', Zi = "</math>", Ea = '<table hidden id="', ka = '">', Qi = "</table>", Ji = '<table hidden><tbody id="', eo = '">', Qa = "</tbody></table>", to = '<table hidden><tr id="', b = '">', P = "</tr></table>", z = '<table hidden><colgroup id="', Q = '">', Se = "</colgroup></table>";
    function ve(l, h, S, C) {
      switch (S.insertionMode) {
        case nn:
        case Yt:
          return c(l, xa), c(l, h.segmentPrefix), c(l, C.toString(16)), d(l, Bn);
        case Bt:
          return c(l, ba), c(l, h.segmentPrefix), c(l, C.toString(16)), d(l, cl);
        case Mt:
          return c(l, Sa), c(l, h.segmentPrefix), c(l, C.toString(16)), d(l, Gi);
        case _t:
          return c(l, Ea), c(l, h.segmentPrefix), c(l, C.toString(16)), d(l, ka);
        case Tt:
          return c(l, Ji), c(l, h.segmentPrefix), c(l, C.toString(16)), d(l, eo);
        case cn:
          return c(l, to), c(l, h.segmentPrefix), c(l, C.toString(16)), d(l, b);
        case vn:
          return c(l, z), c(l, h.segmentPrefix), c(l, C.toString(16)), d(l, Q);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Oe(l, h) {
      switch (h.insertionMode) {
        case nn:
        case Yt:
          return d(l, Xi);
        case Bt:
          return d(l, qi);
        case Mt:
          return d(l, Zi);
        case _t:
          return d(l, Qi);
        case Tt:
          return d(l, Qa);
        case cn:
          return d(l, P);
        case vn:
          return d(l, Se);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var We = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", ht = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Rt = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Et = We + ';$RS("', tn = '$RS("', In = '","', Yn = '")<\/script>';
    function Xn(l, h, S) {
      c(l, h.startInlineScript), h.sentCompleteSegmentFunction ? c(l, tn) : (h.sentCompleteSegmentFunction = !0, c(l, Et)), c(l, h.segmentPrefix);
      var C = S.toString(16);
      return c(l, C), c(l, In), c(l, h.placeholderPrefix), c(l, C), d(l, Yn);
    }
    var wa = ht + ';$RC("', no = '$RC("', Ja = '","', _c = '")<\/script>';
    function Nc(l, h, S, C) {
      if (c(l, h.startInlineScript), h.sentCompleteBoundaryFunction ? c(l, no) : (h.sentCompleteBoundaryFunction = !0, c(l, wa)), S === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var F = C.toString(16);
      return c(l, S), c(l, Ja), c(l, h.segmentPrefix), c(l, F), d(l, _c);
    }
    var Fc = Rt + ';$RX("', zc = '$RX("', $c = '"', Bc = ")<\/script>", dl = ",";
    function Ic(l, h, S, C, F, ee) {
      if (c(l, h.startInlineScript), h.sentClientRenderFunction ? c(l, zc) : (h.sentClientRenderFunction = !0, c(l, Fc)), S === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return c(l, S), c(l, $c), (C || F || ee) && (c(l, dl), c(l, fl(C || ""))), (F || ee) && (c(l, dl), c(l, fl(F || ""))), ee && (c(l, dl), c(l, fl(ee))), d(l, Bc);
    }
    var Hc = /[<\u2028\u2029]/g;
    function fl(l) {
      var h = JSON.stringify(l);
      return h.replace(Hc, function(S) {
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
    function Wc(l, h) {
      var S = Ut(h, void 0);
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
        generateStaticMarkup: l
      };
    }
    function hl() {
      return {
        insertionMode: Yt,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function Os(l, h, S, C) {
      return S.generateStaticMarkup ? (l.push(Ue(h)), !1) : er(l, h, S, C);
    }
    function Ms(l, h, S, C) {
      if (!h.generateStaticMarkup)
        return jn(l, h, S, C);
    }
    function pl(l, h) {
      return h.generateStaticMarkup ? !0 : Fr(l);
    }
    function tr(l, h, S, C, F) {
      return h.generateStaticMarkup ? !0 : va(l, h, S, C, F);
    }
    function Vc(l, h) {
      return h.generateStaticMarkup ? !0 : Ki(l);
    }
    function _s(l, h) {
      return h.generateStaticMarkup ? !0 : Yi(l);
    }
    var qn = Object.assign, Ns = Symbol.for("react.element"), ml = Symbol.for("react.portal"), ro = Symbol.for("react.fragment"), ao = Symbol.for("react.strict_mode"), io = Symbol.for("react.profiler"), ei = Symbol.for("react.provider"), ti = Symbol.for("react.context"), ni = Symbol.for("react.forward_ref"), Ta = Symbol.for("react.suspense"), gl = Symbol.for("react.suspense_list"), yl = Symbol.for("react.memo"), oo = Symbol.for("react.lazy"), jc = Symbol.for("react.scope"), Fs = Symbol.for("react.debug_trace_mode"), Uc = Symbol.for("react.legacy_hidden"), Kc = Symbol.for("react.default_value"), zs = Symbol.iterator, $s = "@@iterator";
    function pn(l) {
      if (l === null || typeof l != "object")
        return null;
      var h = zs && l[zs] || l[$s];
      return typeof h == "function" ? h : null;
    }
    function ri(l, h, S) {
      var C = l.displayName;
      if (C)
        return C;
      var F = h.displayName || h.name || "";
      return F !== "" ? S + "(" + F + ")" : S;
    }
    function vl(l) {
      return l.displayName || "Context";
    }
    function dn(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && a("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
        case ro:
          return "Fragment";
        case ml:
          return "Portal";
        case io:
          return "Profiler";
        case ao:
          return "StrictMode";
        case Ta:
          return "Suspense";
        case gl:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case ti:
            var h = l;
            return vl(h) + ".Consumer";
          case ei:
            var S = l;
            return vl(S._context) + ".Provider";
          case ni:
            return ri(l, l.render, "ForwardRef");
          case yl:
            var C = l.displayName || null;
            return C !== null ? C : dn(l.type) || "Memo";
          case oo: {
            var F = l, ee = F._payload, de = F._init;
            try {
              return dn(de(ee));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ca = 0, xl, bl, Sl, El, kl, Bs, Is;
    function lo() {
    }
    lo.__reactDisabledLog = !0;
    function wl() {
      {
        if (Ca === 0) {
          xl = console.log, bl = console.info, Sl = console.warn, El = console.error, kl = console.group, Bs = console.groupCollapsed, Is = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: lo,
            writable: !0
          };
          Object.defineProperties(console, {
            info: l,
            log: l,
            warn: l,
            error: l,
            group: l,
            groupCollapsed: l,
            groupEnd: l
          });
        }
        Ca++;
      }
    }
    function ai() {
      {
        if (Ca--, Ca === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: qn({}, l, {
              value: xl
            }),
            info: qn({}, l, {
              value: bl
            }),
            warn: qn({}, l, {
              value: Sl
            }),
            error: qn({}, l, {
              value: El
            }),
            group: qn({}, l, {
              value: kl
            }),
            groupCollapsed: qn({}, l, {
              value: Bs
            }),
            groupEnd: qn({}, l, {
              value: Is
            })
          });
        }
        Ca < 0 && a("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ii = r.ReactCurrentDispatcher, Aa;
    function oi(l, h, S) {
      {
        if (Aa === void 0)
          try {
            throw Error();
          } catch (F) {
            var C = F.stack.trim().match(/\n( *(at )?)/);
            Aa = C && C[1] || "";
          }
        return `
` + Aa + l;
      }
    }
    var li = !1, so;
    {
      var Hs = typeof WeakMap == "function" ? WeakMap : Map;
      so = new Hs();
    }
    function Tl(l, h) {
      if (!l || li)
        return "";
      {
        var S = so.get(l);
        if (S !== void 0)
          return S;
      }
      var C;
      li = !0;
      var F = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ee;
      ee = ii.current, ii.current = null, wl();
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
            } catch (ir) {
              C = ir;
            }
            Reflect.construct(l, [], de);
          } else {
            try {
              de.call();
            } catch (ir) {
              C = ir;
            }
            l.call(de.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ir) {
            C = ir;
          }
          l();
        }
      } catch (ir) {
        if (ir && C && typeof ir.stack == "string") {
          for (var Ee = ir.stack.split(`
`), ze = C.stack.split(`
`), nt = Ee.length - 1, st = ze.length - 1; nt >= 1 && st >= 0 && Ee[nt] !== ze[st]; )
            st--;
          for (; nt >= 1 && st >= 0; nt--, st--)
            if (Ee[nt] !== ze[st]) {
              if (nt !== 1 || st !== 1)
                do
                  if (nt--, st--, st < 0 || Ee[nt] !== ze[st]) {
                    var gt = `
` + Ee[nt].replace(" at new ", " at ");
                    return l.displayName && gt.includes("<anonymous>") && (gt = gt.replace("<anonymous>", l.displayName)), typeof l == "function" && so.set(l, gt), gt;
                  }
                while (nt >= 1 && st >= 0);
              break;
            }
        }
      } finally {
        li = !1, ii.current = ee, ai(), Error.prepareStackTrace = F;
      }
      var ln = l ? l.displayName || l.name : "", Nn = ln ? oi(ln) : "";
      return typeof l == "function" && so.set(l, Nn), Nn;
    }
    function Cl(l, h, S) {
      return Tl(l, !0);
    }
    function Al(l, h, S) {
      return Tl(l, !1);
    }
    function Ws(l) {
      var h = l.prototype;
      return !!(h && h.isReactComponent);
    }
    function Pa(l, h, S) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return Tl(l, Ws(l));
      if (typeof l == "string")
        return oi(l);
      switch (l) {
        case Ta:
          return oi("Suspense");
        case gl:
          return oi("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case ni:
            return Al(l.render);
          case yl:
            return Pa(l.type, h, S);
          case oo: {
            var C = l, F = C._payload, ee = C._init;
            try {
              return Pa(ee(F), h, S);
            } catch {
            }
          }
        }
      return "";
    }
    var Pl = {}, uo = r.ReactDebugCurrentFrame;
    function ta(l) {
      if (l) {
        var h = l._owner, S = Pa(l.type, l._source, h ? h.type : null);
        uo.setExtraStackFrame(S);
      } else
        uo.setExtraStackFrame(null);
    }
    function Rl(l, h, S, C, F) {
      {
        var ee = Function.call.bind(N);
        for (var de in l)
          if (ee(l, de)) {
            var Ee = void 0;
            try {
              if (typeof l[de] != "function") {
                var ze = Error((C || "React class") + ": " + S + " type `" + de + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[de] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ze.name = "Invariant Violation", ze;
              }
              Ee = l[de](h, de, C, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (nt) {
              Ee = nt;
            }
            Ee && !(Ee instanceof Error) && (ta(F), a("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", C || "React class", S, de, typeof Ee), ta(null)), Ee instanceof Error && !(Ee.message in Pl) && (Pl[Ee.message] = !0, ta(F), a("Failed %s type: %s", S, Ee.message), ta(null));
          }
      }
    }
    var Ll;
    Ll = {};
    var $r = {};
    Object.freeze($r);
    function Vs(l, h) {
      {
        var S = l.contextTypes;
        if (!S)
          return $r;
        var C = {};
        for (var F in S)
          C[F] = h[F];
        {
          var ee = dn(l) || "Unknown";
          Rl(S, C, "context", ee);
        }
        return C;
      }
    }
    function na(l, h, S, C) {
      {
        if (typeof l.getChildContext != "function") {
          {
            var F = dn(h) || "Unknown";
            Ll[F] || (Ll[F] = !0, a("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", F, F));
          }
          return S;
        }
        var ee = l.getChildContext();
        for (var de in ee)
          if (!(de in C))
            throw new Error((dn(h) || "Unknown") + '.getChildContext(): key "' + de + '" is not defined in childContextTypes.');
        {
          var Ee = dn(h) || "Unknown";
          Rl(C, ee, "child context", Ee);
        }
        return qn({}, S, ee);
      }
    }
    var ra;
    ra = {};
    var Dl = null, xr = null;
    function co(l) {
      l.context._currentValue2 = l.parentValue;
    }
    function fo(l) {
      l.context._currentValue2 = l.value;
    }
    function si(l, h) {
      if (l !== h) {
        co(l);
        var S = l.parent, C = h.parent;
        if (S === null) {
          if (C !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (C === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          si(S, C);
        }
        fo(h);
      }
    }
    function Ol(l) {
      co(l);
      var h = l.parent;
      h !== null && Ol(h);
    }
    function ui(l) {
      var h = l.parent;
      h !== null && ui(h), fo(l);
    }
    function js(l, h) {
      co(l);
      var S = l.parent;
      if (S === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      S.depth === h.depth ? si(S, h) : js(S, h);
    }
    function Us(l, h) {
      var S = h.parent;
      if (S === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      l.depth === S.depth ? si(l, S) : Us(l, S), fo(h);
    }
    function ho(l) {
      var h = xr, S = l;
      h !== S && (h === null ? ui(S) : S === null ? Ol(h) : h.depth === S.depth ? si(h, S) : h.depth > S.depth ? js(h, S) : Us(h, S), xr = S);
    }
    function ci(l, h) {
      var S;
      S = l._currentValue2, l._currentValue2 = h, l._currentRenderer2 !== void 0 && l._currentRenderer2 !== null && l._currentRenderer2 !== ra && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), l._currentRenderer2 = ra;
      var C = xr, F = {
        parent: C,
        depth: C === null ? 0 : C.depth + 1,
        context: l,
        parentValue: S,
        value: h
      };
      return xr = F, F;
    }
    function Ml(l) {
      var h = xr;
      if (h === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      h.context !== l && a("The parent context is not the expected context. This is probably a bug in React.");
      {
        var S = h.parentValue;
        S === Kc ? h.context._currentValue2 = h.context._defaultValue : h.context._currentValue2 = S, l._currentRenderer2 !== void 0 && l._currentRenderer2 !== null && l._currentRenderer2 !== ra && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), l._currentRenderer2 = ra;
      }
      return xr = h.parent;
    }
    function Yc() {
      return xr;
    }
    function Ra(l) {
      var h = l._currentValue2;
      return h;
    }
    function po(l) {
      return l._reactInternals;
    }
    function _l(l, h) {
      l._reactInternals = h;
    }
    var mo = {}, go = {}, di, yo, La, fi, vo, Da, xo, bo, So;
    {
      di = /* @__PURE__ */ new Set(), yo = /* @__PURE__ */ new Set(), La = /* @__PURE__ */ new Set(), xo = /* @__PURE__ */ new Set(), fi = /* @__PURE__ */ new Set(), bo = /* @__PURE__ */ new Set(), So = /* @__PURE__ */ new Set();
      var Ks = /* @__PURE__ */ new Set();
      Da = function(l, h) {
        if (!(l === null || typeof l == "function")) {
          var S = h + "_" + l;
          Ks.has(S) || (Ks.add(S), a("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", h, l));
        }
      }, vo = function(l, h) {
        if (h === void 0) {
          var S = dn(l) || "Component";
          fi.has(S) || (fi.add(S), a("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", S));
        }
      };
    }
    function Ys(l, h) {
      {
        var S = l.constructor, C = S && dn(S) || "ReactClass", F = C + "." + h;
        if (mo[F])
          return;
        a(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, h, h, C), mo[F] = !0;
      }
    }
    var Xs = {
      isMounted: function(l) {
        return !1;
      },
      enqueueSetState: function(l, h, S) {
        var C = po(l);
        C.queue === null ? Ys(l, "setState") : (C.queue.push(h), S != null && Da(S, "setState"));
      },
      enqueueReplaceState: function(l, h, S) {
        var C = po(l);
        C.replace = !0, C.queue = [h], S != null && Da(S, "setState");
      },
      enqueueForceUpdate: function(l, h) {
        var S = po(l);
        S.queue === null ? Ys(l, "forceUpdate") : h != null && Da(h, "setState");
      }
    };
    function Xc(l, h, S, C, F) {
      var ee = S(F, C);
      vo(h, ee);
      var de = ee == null ? C : qn({}, C, ee);
      return de;
    }
    function qc(l, h, S) {
      var C = $r, F = l.contextType;
      if ("contextType" in l) {
        var ee = (
          // Allow null for conditional declaration
          F === null || F !== void 0 && F.$$typeof === ti && F._context === void 0
        );
        if (!ee && !So.has(l)) {
          So.add(l);
          var de = "";
          F === void 0 ? de = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof F != "object" ? de = " However, it is set to a " + typeof F + "." : F.$$typeof === ei ? de = " Did you accidentally pass the Context.Provider instead?" : F._context !== void 0 ? de = " Did you accidentally pass the Context.Consumer instead?" : de = " However, it is set to an object with keys {" + Object.keys(F).join(", ") + "}.", a("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", dn(l) || "Component", de);
        }
      }
      typeof F == "object" && F !== null ? C = Ra(F) : C = S;
      var Ee = new l(h, C);
      {
        if (typeof l.getDerivedStateFromProps == "function" && (Ee.state === null || Ee.state === void 0)) {
          var ze = dn(l) || "Component";
          di.has(ze) || (di.add(ze), a("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", ze, Ee.state === null ? "null" : "undefined", ze));
        }
        if (typeof l.getDerivedStateFromProps == "function" || typeof Ee.getSnapshotBeforeUpdate == "function") {
          var nt = null, st = null, gt = null;
          if (typeof Ee.componentWillMount == "function" && Ee.componentWillMount.__suppressDeprecationWarning !== !0 ? nt = "componentWillMount" : typeof Ee.UNSAFE_componentWillMount == "function" && (nt = "UNSAFE_componentWillMount"), typeof Ee.componentWillReceiveProps == "function" && Ee.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? st = "componentWillReceiveProps" : typeof Ee.UNSAFE_componentWillReceiveProps == "function" && (st = "UNSAFE_componentWillReceiveProps"), typeof Ee.componentWillUpdate == "function" && Ee.componentWillUpdate.__suppressDeprecationWarning !== !0 ? gt = "componentWillUpdate" : typeof Ee.UNSAFE_componentWillUpdate == "function" && (gt = "UNSAFE_componentWillUpdate"), nt !== null || st !== null || gt !== null) {
            var ln = dn(l) || "Component", Nn = typeof l.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            La.has(ln) || (La.add(ln), a(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ln, Nn, nt !== null ? `
  ` + nt : "", st !== null ? `
  ` + st : "", gt !== null ? `
  ` + gt : ""));
          }
        }
      }
      return Ee;
    }
    function qs(l, h, S) {
      {
        var C = dn(h) || "Component", F = l.render;
        F || (h.prototype && typeof h.prototype.render == "function" ? a("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", C) : a("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", C)), l.getInitialState && !l.getInitialState.isReactClassApproved && !l.state && a("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", C), l.getDefaultProps && !l.getDefaultProps.isReactClassApproved && a("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", C), l.propTypes && a("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", C), l.contextType && a("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", C), l.contextTypes && a("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", C), h.contextType && h.contextTypes && !bo.has(h) && (bo.add(h), a("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", C)), typeof l.componentShouldUpdate == "function" && a("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", C), h.prototype && h.prototype.isPureReactComponent && typeof l.shouldComponentUpdate < "u" && a("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", dn(h) || "A pure component"), typeof l.componentDidUnmount == "function" && a("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", C), typeof l.componentDidReceiveProps == "function" && a("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", C), typeof l.componentWillRecieveProps == "function" && a("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", C), typeof l.UNSAFE_componentWillRecieveProps == "function" && a("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", C);
        var ee = l.props !== S;
        l.props !== void 0 && ee && a("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", C, C), l.defaultProps && a("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", C, C), typeof l.getSnapshotBeforeUpdate == "function" && typeof l.componentDidUpdate != "function" && !yo.has(h) && (yo.add(h), a("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", dn(h))), typeof l.getDerivedStateFromProps == "function" && a("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", C), typeof l.getDerivedStateFromError == "function" && a("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", C), typeof h.getSnapshotBeforeUpdate == "function" && a("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", C);
        var de = l.state;
        de && (typeof de != "object" || Fe(de)) && a("%s.state: must be set to an object or null", C), typeof l.getChildContext == "function" && typeof h.childContextTypes != "object" && a("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", C);
      }
    }
    function Gc(l, h) {
      var S = h.state;
      if (typeof h.componentWillMount == "function") {
        if (h.componentWillMount.__suppressDeprecationWarning !== !0) {
          var C = dn(l) || "Unknown";
          go[C] || (n(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            C
          ), go[C] = !0);
        }
        h.componentWillMount();
      }
      typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), S !== h.state && (a("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", dn(l) || "Component"), Xs.enqueueReplaceState(h, h.state, null));
    }
    function Zc(l, h, S, C) {
      if (l.queue !== null && l.queue.length > 0) {
        var F = l.queue, ee = l.replace;
        if (l.queue = null, l.replace = !1, ee && F.length === 1)
          h.state = F[0];
        else {
          for (var de = ee ? F[0] : h.state, Ee = !0, ze = ee ? 1 : 0; ze < F.length; ze++) {
            var nt = F[ze], st = typeof nt == "function" ? nt.call(h, de, S, C) : nt;
            st != null && (Ee ? (Ee = !1, de = qn({}, de, st)) : qn(de, st));
          }
          h.state = de;
        }
      } else
        l.queue = null;
    }
    function Eo(l, h, S, C) {
      qs(l, h, S);
      var F = l.state !== void 0 ? l.state : null;
      l.updater = Xs, l.props = S, l.state = F;
      var ee = {
        queue: [],
        replace: !1
      };
      _l(l, ee);
      var de = h.contextType;
      if (typeof de == "object" && de !== null ? l.context = Ra(de) : l.context = C, l.state === S) {
        var Ee = dn(h) || "Component";
        xo.has(Ee) || (xo.add(Ee), a("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", Ee));
      }
      var ze = h.getDerivedStateFromProps;
      typeof ze == "function" && (l.state = Xc(l, h, ze, F, S)), typeof h.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (Gc(h, l), Zc(ee, l, S, C));
    }
    var ko = {
      id: 1,
      overflow: ""
    };
    function Qc(l) {
      var h = l.overflow, S = l.id, C = S & ~Jc(S);
      return C.toString(32) + h;
    }
    function Nl(l, h, S) {
      var C = l.id, F = l.overflow, ee = wo(C) - 1, de = C & ~(1 << ee), Ee = S + 1, ze = wo(h) + ee;
      if (ze > 30) {
        var nt = ee - ee % 5, st = (1 << nt) - 1, gt = (de & st).toString(32), ln = de >> nt, Nn = ee - nt, ir = wo(h) + Nn, yu = Ee << Nn, vu = yu | ln, xu = gt + F;
        return {
          id: 1 << ir | vu,
          overflow: xu
        };
      } else {
        var Io = Ee << ee, hy = Io | de, py = F;
        return {
          id: 1 << ze | hy,
          overflow: py
        };
      }
    }
    function wo(l) {
      return 32 - ed(l);
    }
    function Jc(l) {
      return 1 << wo(l) - 1;
    }
    var ed = Math.clz32 ? Math.clz32 : Ar, td = Math.log, nd = Math.LN2;
    function Ar(l) {
      var h = l >>> 0;
      return h === 0 ? 32 : 31 - (td(h) / nd | 0) | 0;
    }
    function Fl(l, h) {
      return l === h && (l !== 0 || 1 / l === 1 / h) || l !== l && h !== h;
    }
    var To = typeof Object.is == "function" ? Object.is : Fl, Nt = null, aa = null, ia = null, qt = null, nr = !1, oa = !1, Co = 0, _n = null, Pr = 0, la = 25, br = !1, sa;
    function Rr() {
      if (Nt === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return br && a("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Nt;
    }
    function rd(l, h) {
      if (h === null)
        return a("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", sa), !1;
      l.length !== h.length && a(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, sa, "[" + l.join(", ") + "]", "[" + h.join(", ") + "]");
      for (var S = 0; S < h.length && S < l.length; S++)
        if (!To(l[S], h[S]))
          return !1;
      return !0;
    }
    function Gs() {
      if (Pr > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function Ao() {
      return qt === null ? ia === null ? (nr = !1, ia = qt = Gs()) : (nr = !0, qt = ia) : qt.next === null ? (nr = !1, qt = qt.next = Gs()) : (nr = !0, qt = qt.next), qt;
    }
    function zl(l, h) {
      Nt = h, aa = l, br = !1, Co = 0;
    }
    function ad(l, h, S, C) {
      for (; oa; )
        oa = !1, Co = 0, Pr += 1, qt = null, S = l(h, C);
      return hi(), S;
    }
    function Zs() {
      var l = Co !== 0;
      return l;
    }
    function hi() {
      br = !1, Nt = null, aa = null, oa = !1, ia = null, Pr = 0, _n = null, qt = null;
    }
    function id(l) {
      return br && a("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Ra(l);
    }
    function Qs(l) {
      return sa = "useContext", Rr(), Ra(l);
    }
    function Po(l, h) {
      return typeof h == "function" ? h(l) : h;
    }
    function od(l) {
      return sa = "useState", Js(
        Po,
        // useReducer has a special case to support lazy useState initializers
        l
      );
    }
    function Js(l, h, S) {
      if (l !== Po && (sa = "useReducer"), Nt = Rr(), qt = Ao(), nr) {
        var C = qt.queue, F = C.dispatch;
        if (_n !== null) {
          var ee = _n.get(C);
          if (ee !== void 0) {
            _n.delete(C);
            var de = qt.memoizedState, Ee = ee;
            do {
              var ze = Ee.action;
              br = !0, de = l(de, ze), br = !1, Ee = Ee.next;
            } while (Ee !== null);
            return qt.memoizedState = de, [de, F];
          }
        }
        return [qt.memoizedState, F];
      } else {
        br = !0;
        var nt;
        l === Po ? nt = typeof h == "function" ? h() : h : nt = S !== void 0 ? S(h) : h, br = !1, qt.memoizedState = nt;
        var st = qt.queue = {
          last: null,
          dispatch: null
        }, gt = st.dispatch = ud.bind(null, Nt, st);
        return [qt.memoizedState, gt];
      }
    }
    function eu(l, h) {
      Nt = Rr(), qt = Ao();
      var S = h === void 0 ? null : h;
      if (qt !== null) {
        var C = qt.memoizedState;
        if (C !== null && S !== null) {
          var F = C[1];
          if (rd(S, F))
            return C[0];
        }
      }
      br = !0;
      var ee = l();
      return br = !1, qt.memoizedState = [ee, S], ee;
    }
    function ld(l) {
      Nt = Rr(), qt = Ao();
      var h = qt.memoizedState;
      if (h === null) {
        var S = {
          current: l
        };
        return Object.seal(S), qt.memoizedState = S, S;
      } else
        return h;
    }
    function sd(l, h) {
      sa = "useLayoutEffect", a("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function ud(l, h, S) {
      if (Pr >= la)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (l === Nt) {
        oa = !0;
        var C = {
          action: S,
          next: null
        };
        _n === null && (_n = /* @__PURE__ */ new Map());
        var F = _n.get(h);
        if (F === void 0)
          _n.set(h, C);
        else {
          for (var ee = F; ee.next !== null; )
            ee = ee.next;
          ee.next = C;
        }
      }
    }
    function cd(l, h) {
      return eu(function() {
        return l;
      }, h);
    }
    function dd(l, h, S) {
      return Rr(), h(l._source);
    }
    function fd(l, h, S) {
      if (S === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return S();
    }
    function hd(l) {
      return Rr(), l;
    }
    function Ro() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function tu() {
      return Rr(), [!1, Ro];
    }
    function $l() {
      var l = aa, h = Qc(l.treeContext), S = mi;
      if (S === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var C = Co++;
      return Xt(S, h, C);
    }
    function pi() {
    }
    var nu = {
      readContext: id,
      useContext: Qs,
      useMemo: eu,
      useReducer: Js,
      useRef: ld,
      useState: od,
      useInsertionEffect: pi,
      useLayoutEffect: sd,
      useCallback: cd,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: pi,
      // Effects are not run in the server environment.
      useEffect: pi,
      // Debugging effect
      useDebugValue: pi,
      useDeferredValue: hd,
      useTransition: tu,
      useId: $l,
      // Subscriptions are not setup in a server environment.
      useMutableSource: dd,
      useSyncExternalStore: fd
    }, mi = null;
    function Lo(l) {
      mi = l;
    }
    function Bl(l) {
      try {
        var h = "", S = l;
        do {
          switch (S.tag) {
            case 0:
              h += oi(S.type, null, null);
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
    var Br = r.ReactCurrentDispatcher, Do = r.ReactDebugCurrentFrame, Oo = 0, ua = 1, ru = 2, Il = 3, ca = 4, pd = 0, au = 1, Sr = 2, md = 12800;
    function gd(l) {
      return console.error(l), null;
    }
    function gi() {
    }
    function Hl(l, h, S, C, F, ee, de, Ee, ze) {
      var nt = [], st = /* @__PURE__ */ new Set(), gt = {
        destination: null,
        responseState: h,
        progressiveChunkSize: C === void 0 ? md : C,
        status: pd,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: st,
        pingedTasks: nt,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: F === void 0 ? gd : F,
        onAllReady: ee === void 0 ? gi : ee,
        onShellReady: de === void 0 ? gi : de,
        onShellError: Ee === void 0 ? gi : Ee,
        onFatalError: ze === void 0 ? gi : ze
      }, ln = Ir(
        gt,
        0,
        null,
        S,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      ln.parentFlushed = !0;
      var Nn = yi(gt, l, null, ln, st, $r, Dl, ko);
      return nt.push(Nn), gt;
    }
    function Mo(l, h) {
      var S = l.pingedTasks;
      S.push(h), S.length === 1 && f(function() {
        return mu(l);
      });
    }
    function Lr(l, h) {
      return {
        id: fn,
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
    function yi(l, h, S, C, F, ee, de, Ee) {
      l.allPendingTasks++, S === null ? l.pendingRootTasks++ : S.pendingTasks++;
      var ze = {
        node: h,
        ping: function() {
          return Mo(l, ze);
        },
        blockedBoundary: S,
        blockedSegment: C,
        abortSet: F,
        legacyContext: ee,
        context: de,
        treeContext: Ee
      };
      return ze.componentStack = null, F.add(ze), ze;
    }
    function Ir(l, h, S, C, F, ee) {
      return {
        status: Oo,
        id: -1,
        // lazily assigned later
        index: h,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: C,
        boundary: S,
        lastPushedText: F,
        textEmbedded: ee
      };
    }
    var Er = null;
    function Wl() {
      return Er === null || Er.componentStack === null ? "" : Bl(Er.componentStack);
    }
    function rr(l, h) {
      l.componentStack = {
        tag: 0,
        parent: l.componentStack,
        type: h
      };
    }
    function Oa(l, h) {
      l.componentStack = {
        tag: 1,
        parent: l.componentStack,
        type: h
      };
    }
    function Vl(l, h) {
      l.componentStack = {
        tag: 2,
        parent: l.componentStack,
        type: h
      };
    }
    function ar(l) {
      l.componentStack === null ? a("Unexpectedly popped too many stack frames. This is a bug in React.") : l.componentStack = l.componentStack.parent;
    }
    var Hr = null;
    function jl(l, h) {
      {
        var S;
        typeof h == "string" ? S = h : h && typeof h.message == "string" ? S = h.message : S = String(h);
        var C = Hr || Wl();
        Hr = null, l.errorMessage = S, l.errorComponentStack = C;
      }
    }
    function vi(l, h) {
      var S = l.onError(h);
      if (S != null && typeof S != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof S + '" instead');
      return S;
    }
    function _o(l, h) {
      var S = l.onShellError;
      S(h);
      var C = l.onFatalError;
      C(h), l.destination !== null ? (l.status = Sr, k(l.destination, h)) : (l.status = au, l.fatalError = h);
    }
    function iu(l, h, S) {
      rr(h, "Suspense");
      var C = h.blockedBoundary, F = h.blockedSegment, ee = S.fallback, de = S.children, Ee = /* @__PURE__ */ new Set(), ze = Lr(l, Ee), nt = F.chunks.length, st = Ir(
        l,
        nt,
        ze,
        F.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      F.children.push(st), F.lastPushedText = !1;
      var gt = Ir(
        l,
        0,
        null,
        F.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      gt.parentFlushed = !0, h.blockedBoundary = ze, h.blockedSegment = gt;
      try {
        if (No(l, h, de), Ms(gt.chunks, l.responseState, gt.lastPushedText, gt.textEmbedded), gt.status = ua, Si(ze, gt), ze.pendingTasks === 0) {
          ar(h);
          return;
        }
      } catch (Nn) {
        gt.status = ca, ze.forceClientRender = !0, ze.errorDigest = vi(l, Nn), jl(ze, Nn);
      } finally {
        h.blockedBoundary = C, h.blockedSegment = F;
      }
      var ln = yi(l, ee, C, st, Ee, h.legacyContext, h.context, h.treeContext);
      ln.componentStack = h.componentStack, l.pingedTasks.push(ln), ar(h);
    }
    function ou(l, h, S, C) {
      rr(h, S);
      var F = h.blockedSegment, ee = yr(F.chunks, S, C, l.responseState, F.formatContext);
      F.lastPushedText = !1;
      var de = F.formatContext;
      F.formatContext = xn(de, S, C), No(l, h, ee), F.formatContext = de, Kn(F.chunks, S), F.lastPushedText = !1, ar(h);
    }
    function yd(l) {
      return l.prototype && l.prototype.isReactComponent;
    }
    function Ul(l, h, S, C, F) {
      var ee = {};
      zl(h, ee);
      var de = S(C, F);
      return ad(S, C, de, F);
    }
    function xi(l, h, S, C, F) {
      var ee = S.render();
      S.props !== F && (ql || a("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", dn(C) || "a component"), ql = !0);
      {
        var de = C.childContextTypes;
        if (de != null) {
          var Ee = h.legacyContext, ze = na(S, C, Ee, de);
          h.legacyContext = ze, Zn(l, h, ee), h.legacyContext = Ee;
          return;
        }
      }
      Zn(l, h, ee);
    }
    function lu(l, h, S, C) {
      Vl(h, S);
      var F = Vs(S, h.legacyContext), ee = qc(S, C, F);
      Eo(ee, S, C, F), xi(l, h, ee, S, C), ar(h);
    }
    var Kl = {}, bi = {}, Yl = {}, Xl = {}, ql = !1, su = !1, uu = !1, Gl = !1;
    function vd(l, h, S, C) {
      var F;
      if (F = Vs(S, h.legacyContext), Oa(h, S), S.prototype && typeof S.prototype.render == "function") {
        var ee = dn(S) || "Unknown";
        Kl[ee] || (a("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", ee, ee), Kl[ee] = !0);
      }
      var de = Ul(l, h, S, C, F), Ee = Zs();
      if (typeof de == "object" && de !== null && typeof de.render == "function" && de.$$typeof === void 0) {
        var ze = dn(S) || "Unknown";
        bi[ze] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", ze, ze, ze), bi[ze] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof de == "object" && de !== null && typeof de.render == "function" && de.$$typeof === void 0
      ) {
        {
          var nt = dn(S) || "Unknown";
          bi[nt] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", nt, nt, nt), bi[nt] = !0);
        }
        Eo(de, S, C, F), xi(l, h, de, S, C);
      } else if (xd(S), Ee) {
        var st = h.treeContext, gt = 1, ln = 0;
        h.treeContext = Nl(st, gt, ln);
        try {
          Zn(l, h, de);
        } finally {
          h.treeContext = st;
        }
      } else
        Zn(l, h, de);
      ar(h);
    }
    function xd(l) {
      {
        if (l && l.childContextTypes && a("%s(...): childContextTypes cannot be defined on a function component.", l.displayName || l.name || "Component"), typeof l.getDerivedStateFromProps == "function") {
          var h = dn(l) || "Unknown";
          Xl[h] || (a("%s: Function components do not support getDerivedStateFromProps.", h), Xl[h] = !0);
        }
        if (typeof l.contextType == "object" && l.contextType !== null) {
          var S = dn(l) || "Unknown";
          Yl[S] || (a("%s: Function components do not support contextType.", S), Yl[S] = !0);
        }
      }
    }
    function cu(l, h) {
      if (l && l.defaultProps) {
        var S = qn({}, h), C = l.defaultProps;
        for (var F in C)
          S[F] === void 0 && (S[F] = C[F]);
        return S;
      }
      return h;
    }
    function bd(l, h, S, C, F) {
      Oa(h, S.render);
      var ee = Ul(l, h, S.render, C, F), de = Zs();
      if (de) {
        var Ee = h.treeContext, ze = 1, nt = 0;
        h.treeContext = Nl(Ee, ze, nt);
        try {
          Zn(l, h, ee);
        } finally {
          h.treeContext = Ee;
        }
      } else
        Zn(l, h, ee);
      ar(h);
    }
    function Sd(l, h, S, C, F) {
      var ee = S.type, de = cu(ee, C);
      Ql(l, h, ee, de, F);
    }
    function Zl(l, h, S, C) {
      S._context === void 0 ? S !== S.Consumer && (Gl || (Gl = !0, a("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : S = S._context;
      var F = C.children;
      typeof F != "function" && a("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var ee = Ra(S), de = F(ee);
      Zn(l, h, de);
    }
    function Ed(l, h, S, C) {
      var F = S._context, ee = C.value, de = C.children, Ee;
      Ee = h.context, h.context = ci(F, ee), Zn(l, h, de), h.context = Ml(F), Ee !== h.context && a("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function Gn(l, h, S, C, F) {
      rr(h, "Lazy");
      var ee = S._payload, de = S._init, Ee = de(ee), ze = cu(Ee, C);
      Ql(l, h, Ee, ze, F), ar(h);
    }
    function Ql(l, h, S, C, F) {
      if (typeof S == "function")
        if (yd(S)) {
          lu(l, h, S, C);
          return;
        } else {
          vd(l, h, S, C);
          return;
        }
      if (typeof S == "string") {
        ou(l, h, S, C);
        return;
      }
      switch (S) {
        case Uc:
        case Fs:
        case ao:
        case io:
        case ro: {
          Zn(l, h, C.children);
          return;
        }
        case gl: {
          rr(h, "SuspenseList"), Zn(l, h, C.children), ar(h);
          return;
        }
        case jc:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case Ta: {
          iu(l, h, C);
          return;
        }
      }
      if (typeof S == "object" && S !== null)
        switch (S.$$typeof) {
          case ni: {
            bd(l, h, S, C, F);
            return;
          }
          case yl: {
            Sd(l, h, S, C, F);
            return;
          }
          case ei: {
            Ed(l, h, S, C);
            return;
          }
          case ti: {
            Zl(l, h, S, C);
            return;
          }
          case oo: {
            Gn(l, h, S, C);
            return;
          }
        }
      var ee = "";
      throw (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (S == null ? S : typeof S) + "." + ee));
    }
    function du(l, h) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      l[Symbol.toStringTag] === "Generator" && (su || a("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), su = !0), l.entries === h && (uu || a("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), uu = !0);
    }
    function Zn(l, h, S) {
      try {
        return Jl(l, h, S);
      } catch (C) {
        throw typeof C == "object" && C !== null && typeof C.then == "function" || (Hr = Hr !== null ? Hr : Wl()), C;
      }
    }
    function Jl(l, h, S) {
      if (h.node = S, typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Ns: {
            var C = S, F = C.type, ee = C.props, de = C.ref;
            Ql(l, h, F, ee, de);
            return;
          }
          case ml:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case oo: {
            var Ee = S, ze = Ee._payload, nt = Ee._init, st;
            try {
              st = nt(ze);
            } catch (Io) {
              throw typeof Io == "object" && Io !== null && typeof Io.then == "function" && rr(h, "Lazy"), Io;
            }
            Zn(l, h, st);
            return;
          }
        }
        if (Fe(S)) {
          fu(l, h, S);
          return;
        }
        var gt = pn(S);
        if (gt) {
          du(S, gt);
          var ln = gt.call(S);
          if (ln) {
            var Nn = ln.next();
            if (!Nn.done) {
              var ir = [];
              do
                ir.push(Nn.value), Nn = ln.next();
              while (!Nn.done);
              fu(l, h, ir);
              return;
            }
            return;
          }
        }
        var yu = Object.prototype.toString.call(S);
        throw new Error("Objects are not valid as a React child (found: " + (yu === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : yu) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof S == "string") {
        var vu = h.blockedSegment;
        vu.lastPushedText = Os(h.blockedSegment.chunks, S, l.responseState, vu.lastPushedText);
        return;
      }
      if (typeof S == "number") {
        var xu = h.blockedSegment;
        xu.lastPushedText = Os(h.blockedSegment.chunks, "" + S, l.responseState, xu.lastPushedText);
        return;
      }
      typeof S == "function" && a("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function fu(l, h, S) {
      for (var C = S.length, F = 0; F < C; F++) {
        var ee = h.treeContext;
        h.treeContext = Nl(ee, C, F);
        try {
          No(l, h, S[F]);
        } finally {
          h.treeContext = ee;
        }
      }
    }
    function kd(l, h, S) {
      var C = h.blockedSegment, F = C.chunks.length, ee = Ir(
        l,
        F,
        null,
        C.formatContext,
        // Adopt the parent segment's leading text embed
        C.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      C.children.push(ee), C.lastPushedText = !1;
      var de = yi(l, h.node, h.blockedBoundary, ee, h.abortSet, h.legacyContext, h.context, h.treeContext);
      h.componentStack !== null && (de.componentStack = h.componentStack.parent);
      var Ee = de.ping;
      S.then(Ee, Ee);
    }
    function No(l, h, S) {
      var C = h.blockedSegment.formatContext, F = h.legacyContext, ee = h.context, de = null;
      de = h.componentStack;
      try {
        return Zn(l, h, S);
      } catch (Ee) {
        if (hi(), typeof Ee == "object" && Ee !== null && typeof Ee.then == "function") {
          kd(l, h, Ee), h.blockedSegment.formatContext = C, h.legacyContext = F, h.context = ee, ho(ee), h.componentStack = de;
          return;
        } else
          throw h.blockedSegment.formatContext = C, h.legacyContext = F, h.context = ee, ho(ee), h.componentStack = de, Ee;
      }
    }
    function Fo(l, h, S, C) {
      var F = vi(l, C);
      if (h === null ? _o(l, C) : (h.pendingTasks--, h.forceClientRender || (h.forceClientRender = !0, h.errorDigest = F, jl(h, C), h.parentFlushed && l.clientRenderedBoundaries.push(h))), l.allPendingTasks--, l.allPendingTasks === 0) {
        var ee = l.onAllReady;
        ee();
      }
    }
    function hu(l) {
      var h = this, S = l.blockedBoundary, C = l.blockedSegment;
      C.status = Il, Ei(h, S, C);
    }
    function pu(l, h, S) {
      var C = l.blockedBoundary, F = l.blockedSegment;
      if (F.status = Il, C === null)
        h.allPendingTasks--, h.status !== Sr && (h.status = Sr, h.destination !== null && y(h.destination));
      else {
        if (C.pendingTasks--, !C.forceClientRender) {
          C.forceClientRender = !0;
          var ee = S === void 0 ? new Error("The render was aborted by the server without a reason.") : S;
          C.errorDigest = h.onError(ee);
          {
            var de = "The server did not finish this Suspense boundary: ";
            ee && typeof ee.message == "string" ? ee = de + ee.message : ee = de + String(ee);
            var Ee = Er;
            Er = l;
            try {
              jl(C, ee);
            } finally {
              Er = Ee;
            }
          }
          C.parentFlushed && h.clientRenderedBoundaries.push(C);
        }
        if (C.fallbackAbortableTasks.forEach(function(nt) {
          return pu(nt, h, S);
        }), C.fallbackAbortableTasks.clear(), h.allPendingTasks--, h.allPendingTasks === 0) {
          var ze = h.onAllReady;
          ze();
        }
      }
    }
    function Si(l, h) {
      if (h.chunks.length === 0 && h.children.length === 1 && h.children[0].boundary === null) {
        var S = h.children[0];
        S.id = h.id, S.parentFlushed = !0, S.status === ua && Si(l, S);
      } else {
        var C = l.completedSegments;
        C.push(h);
      }
    }
    function Ei(l, h, S) {
      if (h === null) {
        if (S.parentFlushed) {
          if (l.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          l.completedRootSegment = S;
        }
        if (l.pendingRootTasks--, l.pendingRootTasks === 0) {
          l.onShellError = gi;
          var C = l.onShellReady;
          C();
        }
      } else if (h.pendingTasks--, !h.forceClientRender) {
        if (h.pendingTasks === 0)
          S.parentFlushed && S.status === ua && Si(h, S), h.parentFlushed && l.completedBoundaries.push(h), h.fallbackAbortableTasks.forEach(hu, l), h.fallbackAbortableTasks.clear();
        else if (S.parentFlushed && S.status === ua) {
          Si(h, S);
          var F = h.completedSegments;
          F.length === 1 && h.parentFlushed && l.partialBoundaries.push(h);
        }
      }
      if (l.allPendingTasks--, l.allPendingTasks === 0) {
        var ee = l.onAllReady;
        ee();
      }
    }
    function zo(l, h) {
      var S = h.blockedSegment;
      if (S.status === Oo) {
        ho(h.context);
        var C = null;
        C = Er, Er = h;
        try {
          Zn(l, h, h.node), Ms(S.chunks, l.responseState, S.lastPushedText, S.textEmbedded), h.abortSet.delete(h), S.status = ua, Ei(l, h.blockedBoundary, S);
        } catch (ee) {
          if (hi(), typeof ee == "object" && ee !== null && typeof ee.then == "function") {
            var F = h.ping;
            ee.then(F, F);
          } else
            h.abortSet.delete(h), S.status = ca, Fo(l, h.blockedBoundary, S, ee);
        } finally {
          Er = C;
        }
      }
    }
    function mu(l) {
      if (l.status !== Sr) {
        var h = Yc(), S = Br.current;
        Br.current = nu;
        var C;
        C = Do.getCurrentStack, Do.getCurrentStack = Wl;
        var F = mi;
        Lo(l.responseState);
        try {
          var ee = l.pingedTasks, de;
          for (de = 0; de < ee.length; de++) {
            var Ee = ee[de];
            zo(l, Ee);
          }
          ee.splice(0, de), l.destination !== null && Bo(l, l.destination);
        } catch (ze) {
          vi(l, ze), _o(l, ze);
        } finally {
          Lo(F), Br.current = S, Do.getCurrentStack = C, S === nu && ho(h);
        }
      }
    }
    function ki(l, h, S) {
      switch (S.parentFlushed = !0, S.status) {
        case Oo: {
          var C = S.id = l.nextSegmentId++;
          return S.lastPushedText = !1, S.textEmbedded = !1, ji(h, l.responseState, C);
        }
        case ua: {
          S.status = ru;
          for (var F = !0, ee = S.chunks, de = 0, Ee = S.children, ze = 0; ze < Ee.length; ze++) {
            for (var nt = Ee[ze]; de < nt.index; de++)
              c(h, ee[de]);
            F = wi(l, h, nt);
          }
          for (; de < ee.length - 1; de++)
            c(h, ee[de]);
          return de < ee.length && (F = d(h, ee[de])), F;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function wi(l, h, S) {
      var C = S.boundary;
      if (C === null)
        return ki(l, h, S);
      if (C.parentFlushed = !0, C.forceClientRender)
        return tr(h, l.responseState, C.errorDigest, C.errorMessage, C.errorComponentStack), ki(l, h, S), _s(h, l.responseState);
      if (C.pendingTasks > 0) {
        C.rootSegmentID = l.nextSegmentId++, C.completedSegments.length > 0 && l.partialBoundaries.push(C);
        var F = C.id = Vt(l.responseState);
        return zr(h, l.responseState, F), ki(l, h, S), Za(h, l.responseState);
      } else {
        if (C.byteSize > l.progressiveChunkSize)
          return C.rootSegmentID = l.nextSegmentId++, l.completedBoundaries.push(C), zr(h, l.responseState, C.id), ki(l, h, S), Za(h, l.responseState);
        pl(h, l.responseState);
        var ee = C.completedSegments;
        if (ee.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var de = ee[0];
        return wi(l, h, de), Vc(h, l.responseState);
      }
    }
    function wd(l, h, S) {
      return Ic(h, l.responseState, S.id, S.errorDigest, S.errorMessage, S.errorComponentStack);
    }
    function es(l, h, S) {
      return ve(h, l.responseState, S.formatContext, S.id), wi(l, h, S), Oe(h, S.formatContext);
    }
    function $o(l, h, S) {
      for (var C = S.completedSegments, F = 0; F < C.length; F++) {
        var ee = C[F];
        gu(l, h, S, ee);
      }
      return C.length = 0, Nc(h, l.responseState, S.id, S.rootSegmentID);
    }
    function Td(l, h, S) {
      for (var C = S.completedSegments, F = 0; F < C.length; F++) {
        var ee = C[F];
        if (!gu(l, h, S, ee))
          return F++, C.splice(0, F), !1;
      }
      return C.splice(0, F), !0;
    }
    function gu(l, h, S, C) {
      if (C.status === ru)
        return !0;
      var F = C.id;
      if (F === -1) {
        var ee = C.id = S.rootSegmentID;
        if (ee === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return es(l, h, C);
      } else
        return es(l, h, C), Xn(h, l.responseState, F);
    }
    function Bo(l, h) {
      try {
        var S = l.completedRootSegment;
        S !== null && l.pendingRootTasks === 0 && (wi(l, h, S), l.completedRootSegment = null, Ya(h, l.responseState));
        var C = l.clientRenderedBoundaries, F;
        for (F = 0; F < C.length; F++) {
          var ee = C[F];
          if (!wd(l, h, ee)) {
            l.destination = null, F++, C.splice(0, F);
            return;
          }
        }
        C.splice(0, F);
        var de = l.completedBoundaries;
        for (F = 0; F < de.length; F++) {
          var Ee = de[F];
          if (!$o(l, h, Ee)) {
            l.destination = null, F++, de.splice(0, F);
            return;
          }
        }
        de.splice(0, F);
        var ze = l.partialBoundaries;
        for (F = 0; F < ze.length; F++) {
          var nt = ze[F];
          if (!Td(l, h, nt)) {
            l.destination = null, F++, ze.splice(0, F);
            return;
          }
        }
        ze.splice(0, F);
        var st = l.completedBoundaries;
        for (F = 0; F < st.length; F++) {
          var gt = st[F];
          if (!$o(l, h, gt)) {
            l.destination = null, F++, st.splice(0, F);
            return;
          }
        }
        st.splice(0, F);
      } finally {
        l.allPendingTasks === 0 && l.pingedTasks.length === 0 && l.clientRenderedBoundaries.length === 0 && l.completedBoundaries.length === 0 && (l.abortableTasks.size !== 0 && a("There was still abortable task at the root when we closed. This is a bug in React."), y(h));
      }
    }
    function Cd(l) {
      f(function() {
        return mu(l);
      });
    }
    function u(l, h) {
      if (l.status === au) {
        l.status = Sr, k(h, l.fatalError);
        return;
      }
      if (l.status !== Sr && l.destination === null) {
        l.destination = h;
        try {
          Bo(l, h);
        } catch (S) {
          vi(l, S), _o(l, S);
        }
      }
    }
    function p(l, h) {
      try {
        var S = l.abortableTasks;
        S.forEach(function(C) {
          return pu(C, l, h);
        }), S.clear(), l.destination !== null && Bo(l, l.destination);
      } catch (C) {
        vi(l, C), _o(l, C);
      }
    }
    function w() {
    }
    function O(l, h, S, C) {
      var F = !1, ee = null, de = "", Ee = {
        push: function(gt) {
          return gt !== null && (de += gt), !0;
        },
        destroy: function(gt) {
          F = !0, ee = gt;
        }
      }, ze = !1;
      function nt() {
        ze = !0;
      }
      var st = Hl(l, Wc(S, h ? h.identifierPrefix : void 0), hl(), 1 / 0, w, void 0, nt, void 0, void 0);
      if (Cd(st), p(st, C), u(st, Ee), F)
        throw ee;
      if (!ze)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return de;
    }
    function j(l, h) {
      return O(l, h, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function ae(l, h) {
      return O(l, h, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function pe() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function ke() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    Li.renderToNodeStream = pe, Li.renderToStaticMarkup = ae, Li.renderToStaticNodeStream = ke, Li.renderToString = j, Li.version = t;
  }()), Li;
}
var Mu = {};
/**
 * @license React
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rm;
function RE() {
  return rm || (rm = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ue, t = "18.2.0", r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(u) {
      {
        for (var p = arguments.length, w = new Array(p > 1 ? p - 1 : 0), O = 1; O < p; O++)
          w[O - 1] = arguments[O];
        o("warn", u, w);
      }
    }
    function a(u) {
      {
        for (var p = arguments.length, w = new Array(p > 1 ? p - 1 : 0), O = 1; O < p; O++)
          w[O - 1] = arguments[O];
        o("error", u, w);
      }
    }
    function o(u, p, w) {
      {
        var O = r.ReactDebugCurrentFrame, j = O.getStackAddendum();
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
        var w = p, O = c.length - d;
        O < w.length && (O === 0 ? u.enqueue(c) : (c.set(w.subarray(0, O), d), u.enqueue(c), w = w.subarray(O)), c = new Uint8Array(s), d = 0), c.set(w, d), d += w.length;
      }
    }
    function v(u, p) {
      return y(u, p), !0;
    }
    function E(u) {
      c && d > 0 && (u.enqueue(new Uint8Array(c.buffer, 0, d)), c = null, d = 0);
    }
    function k(u) {
      u.close();
    }
    var M = new TextEncoder();
    function T(u) {
      return M.encode(u);
    }
    function m(u) {
      return M.encode(u);
    }
    function D(u, p) {
      typeof u.error == "function" ? u.error(p) : u.close();
    }
    function L(u) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, w = p && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return w;
      }
    }
    function _(u) {
      try {
        return N(u), !1;
      } catch {
        return !0;
      }
    }
    function N(u) {
      return "" + u;
    }
    function R(u, p) {
      if (_(u))
        return a("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", p, L(u)), N(u);
    }
    function U(u, p) {
      if (_(u))
        return a("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", p, L(u)), N(u);
    }
    function H(u) {
      if (_(u))
        return a("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", L(u)), N(u);
    }
    var Y = Object.prototype.hasOwnProperty, Z = 0, re = 1, K = 2, q = 3, me = 4, W = 5, se = 6, ce = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", he = ce + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ie = new RegExp("^[" + ce + "][" + he + "]*$"), V = {}, J = {};
    function ne(u) {
      return Y.call(J, u) ? !0 : Y.call(V, u) ? !1 : ie.test(u) ? (J[u] = !0, !0) : (V[u] = !0, a("Invalid attribute name: `%s`", u), !1);
    }
    function Ae(u, p, w, O) {
      if (w !== null && w.type === Z)
        return !1;
      switch (typeof p) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (O)
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
    function xe(u) {
      return le.hasOwnProperty(u) ? le[u] : null;
    }
    function Pe(u, p, w, O, j, ae, pe) {
      this.acceptsBooleans = p === K || p === q || p === me, this.attributeName = O, this.attributeNamespace = j, this.mustUseProperty = w, this.propertyName = u, this.type = p, this.sanitizeURL = ae, this.removeEmptyString = pe;
    }
    var le = {}, _e = [
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
    _e.forEach(function(u) {
      le[u] = new Pe(
        u,
        Z,
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
      le[p] = new Pe(
        p,
        re,
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
      le[u] = new Pe(
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
      le[u] = new Pe(
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
      le[u] = new Pe(
        u,
        q,
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
      le[u] = new Pe(
        u,
        q,
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
      le[u] = new Pe(
        u,
        me,
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
      le[u] = new Pe(
        u,
        se,
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
      le[u] = new Pe(
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
    var $e = /[\-\:]([a-z])/g, Te = function(u) {
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
      var p = u.replace($e, Te);
      le[p] = new Pe(
        p,
        re,
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
      var p = u.replace($e, Te);
      le[p] = new Pe(
        p,
        re,
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
      var p = u.replace($e, Te);
      le[p] = new Pe(
        p,
        re,
        !1,
        // mustUseProperty
        u,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(u) {
      le[u] = new Pe(
        u,
        re,
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
    var ge = "xlinkHref";
    le[ge] = new Pe(
      "xlinkHref",
      re,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(u) {
      le[u] = new Pe(
        u,
        re,
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
    var Re = {
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
    function oe(u, p) {
      return u + p.charAt(0).toUpperCase() + p.substring(1);
    }
    var we = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Re).forEach(function(u) {
      we.forEach(function(p) {
        Re[oe(p, u)] = Re[u];
      });
    });
    var Ce = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Be(u, p) {
      Ce[p.type] || p.onChange || p.onInput || p.readOnly || p.disabled || p.value == null || a("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), p.onChange || p.readOnly || p.disabled || p.checked == null || a("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function je(u, p) {
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
    }, ot = {}, Je = new RegExp("^(aria)-[" + he + "]*$"), it = new RegExp("^(aria)[A-Z][" + he + "]*$");
    function Xe(u, p) {
      {
        if (Y.call(ot, p) && ot[p])
          return !0;
        if (it.test(p)) {
          var w = "aria-" + p.slice(4).toLowerCase(), O = qe.hasOwnProperty(w) ? w : null;
          if (O == null)
            return a("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", p), ot[p] = !0, !0;
          if (p !== O)
            return a("Invalid ARIA attribute `%s`. Did you mean `%s`?", p, O), ot[p] = !0, !0;
        }
        if (Je.test(p)) {
          var j = p.toLowerCase(), ae = qe.hasOwnProperty(j) ? j : null;
          if (ae == null)
            return ot[p] = !0, !1;
          if (p !== ae)
            return a("Unknown ARIA attribute `%s`. Did you mean `%s`?", p, ae), ot[p] = !0, !0;
        }
      }
      return !0;
    }
    function Ie(u, p) {
      {
        var w = [];
        for (var O in p) {
          var j = Xe(u, O);
          j || w.push(O);
        }
        var ae = w.map(function(pe) {
          return "`" + pe + "`";
        }).join(", ");
        w.length === 1 ? a("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", ae, u) : w.length > 1 && a("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", ae, u);
      }
    }
    function Me(u, p) {
      je(u, p) || Ie(u, p);
    }
    var ut = !1;
    function Ve(u, p) {
      {
        if (u !== "input" && u !== "textarea" && u !== "select")
          return;
        p != null && p.value === null && !ut && (ut = !0, u === "select" && p.multiple ? a("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", u) : a("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", u));
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
    }, lt = function() {
    };
    {
      var ct = {}, wt = /^on./, en = /^on[^A-Z]/, an = new RegExp("^(aria)-[" + he + "]*$"), Lt = new RegExp("^(aria)[A-Z][" + he + "]*$");
      lt = function(u, p, w, O) {
        if (Y.call(ct, p) && ct[p])
          return !0;
        var j = p.toLowerCase();
        if (j === "onfocusin" || j === "onfocusout")
          return a("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ct[p] = !0, !0;
        if (O != null) {
          var ae = O.registrationNameDependencies, pe = O.possibleRegistrationNames;
          if (ae.hasOwnProperty(p))
            return !0;
          var ke = pe.hasOwnProperty(j) ? pe[j] : null;
          if (ke != null)
            return a("Invalid event handler property `%s`. Did you mean `%s`?", p, ke), ct[p] = !0, !0;
          if (wt.test(p))
            return a("Unknown event handler property `%s`. It will be ignored.", p), ct[p] = !0, !0;
        } else if (wt.test(p))
          return en.test(p) && a("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", p), ct[p] = !0, !0;
        if (an.test(p) || Lt.test(p))
          return !0;
        if (j === "innerhtml")
          return a("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ct[p] = !0, !0;
        if (j === "aria")
          return a("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ct[p] = !0, !0;
        if (j === "is" && w !== null && w !== void 0 && typeof w != "string")
          return a("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof w), ct[p] = !0, !0;
        if (typeof w == "number" && isNaN(w))
          return a("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", p), ct[p] = !0, !0;
        var l = xe(p), h = l !== null && l.type === Z;
        if (Ge.hasOwnProperty(j)) {
          var S = Ge[j];
          if (S !== p)
            return a("Invalid DOM property `%s`. Did you mean `%s`?", p, S), ct[p] = !0, !0;
        } else if (!h && p !== j)
          return a("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", p, j), ct[p] = !0, !0;
        return typeof w == "boolean" && Ae(p, w, l, !1) ? (w ? a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', w, p, p, w, p) : a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', w, p, p, w, p, p, p), ct[p] = !0, !0) : h ? !0 : Ae(p, w, l, !1) ? (ct[p] = !0, !1) : ((w === "false" || w === "true") && l !== null && l.type === q && (a("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", w, p, w === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', p, w), ct[p] = !0), !0);
      };
    }
    var $t = function(u, p, w) {
      {
        var O = [];
        for (var j in p) {
          var ae = lt(u, j, p[j], w);
          ae || O.push(j);
        }
        var pe = O.map(function(ke) {
          return "`" + ke + "`";
        }).join(", ");
        O.length === 1 ? a("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", pe, u) : O.length > 1 && a("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", pe, u);
      }
    };
    function Ot(u, p, w) {
      je(u, p) || $t(u, p, w);
    }
    var Gt = function() {
    };
    {
      var un = /^(?:webkit|moz|o)[A-Z]/, Ne = /^-ms-/, At = /-(.)/g, Zt = /;\s*$/, Ht = {}, Sn = {}, bt = !1, mn = !1, Dt = function(u) {
        return u.replace(At, function(p, w) {
          return w.toUpperCase();
        });
      }, jt = function(u) {
        Ht.hasOwnProperty(u) && Ht[u] || (Ht[u] = !0, a(
          "Unsupported style property %s. Did you mean %s?",
          u,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Dt(u.replace(Ne, "ms-"))
        ));
      }, yn = function(u) {
        Ht.hasOwnProperty(u) && Ht[u] || (Ht[u] = !0, a("Unsupported vendor-prefixed style property %s. Did you mean %s?", u, u.charAt(0).toUpperCase() + u.slice(1)));
      }, Tn = function(u, p) {
        Sn.hasOwnProperty(p) && Sn[p] || (Sn[p] = !0, a(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, u, p.replace(Zt, "")));
      }, Le = function(u, p) {
        bt || (bt = !0, a("`NaN` is an invalid value for the `%s` css style property.", u));
      }, Ue = function(u, p) {
        mn || (mn = !0, a("`Infinity` is an invalid value for the `%s` css style property.", u));
      };
      Gt = function(u, p) {
        u.indexOf("-") > -1 ? jt(u) : un.test(u) ? yn(u) : Zt.test(p) && Tn(u, p), typeof p == "number" && (isNaN(p) ? Le(u, p) : isFinite(p) || Ue(u, p));
      };
    }
    var vt = Gt, et = /["'&<>]/;
    function on(u) {
      H(u);
      var p = "" + u, w = et.exec(p);
      if (!w)
        return p;
      var O, j = "", ae, pe = 0;
      for (ae = w.index; ae < p.length; ae++) {
        switch (p.charCodeAt(ae)) {
          case 34:
            O = "&quot;";
            break;
          case 38:
            O = "&amp;";
            break;
          case 39:
            O = "&#x27;";
            break;
          case 60:
            O = "&lt;";
            break;
          case 62:
            O = "&gt;";
            break;
          default:
            continue;
        }
        pe !== ae && (j += p.substring(pe, ae)), pe = ae + 1, j += O;
      }
      return pe !== ae ? j + p.substring(pe, ae) : j;
    }
    function St(u) {
      return typeof u == "boolean" || typeof u == "number" ? "" + u : on(u);
    }
    var En = /([A-Z])/g, Fn = /^ms-/;
    function X(u) {
      return u.replace(En, "-$1").toLowerCase().replace(Fn, "-ms-");
    }
    var Fe = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Ze = !1;
    function He(u) {
      !Ze && Fe.test(u) && (Ze = !0, a("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(u)));
    }
    var pt = Array.isArray;
    function at(u) {
      return pt(u);
    }
    var mt = m("<script>"), dt = m("<\/script>"), Ke = m('<script src="'), Wt = m('<script type="module" src="'), Ut = m('" async=""><\/script>');
    function nn(u) {
      return H(u), ("" + u).replace(Yt, Bt);
    }
    var Yt = /(<\/|<)(s)(cript)/gi, Bt = function(u, p, w, O) {
      return "" + p + (w === "s" ? "\\u0073" : "\\u0053") + O;
    };
    function Mt(u, p, w, O, j) {
      var ae = u === void 0 ? "" : u, pe = p === void 0 ? mt : m('<script nonce="' + St(p) + '">'), ke = [];
      if (w !== void 0 && ke.push(pe, T(nn(w)), dt), O !== void 0)
        for (var l = 0; l < O.length; l++)
          ke.push(Ke, T(St(O[l])), Ut);
      if (j !== void 0)
        for (var h = 0; h < j.length; h++)
          ke.push(Wt, T(St(j[h])), Ut);
      return {
        bootstrapChunks: ke,
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
    var _t = 0, Tt = 1, cn = 2, vn = 3, zt = 4, xn = 5, fn = 6, Vt = 7;
    function Xt(u, p) {
      return {
        insertionMode: u,
        selectedValue: p
      };
    }
    function Dn(u) {
      var p = u === "http://www.w3.org/2000/svg" ? cn : u === "http://www.w3.org/1998/Math/MathML" ? vn : _t;
      return Xt(p, null);
    }
    function On(u, p, w) {
      switch (p) {
        case "select":
          return Xt(Tt, w.value != null ? w.value : w.defaultValue);
        case "svg":
          return Xt(cn, null);
        case "math":
          return Xt(vn, null);
        case "foreignObject":
          return Xt(Tt, null);
        case "table":
          return Xt(zt, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return Xt(xn, null);
        case "colgroup":
          return Xt(Vt, null);
        case "tr":
          return Xt(fn, null);
      }
      return u.insertionMode >= zt || u.insertionMode === _t ? Xt(Tt, null) : u;
    }
    var er = null;
    function jn(u) {
      var p = u.nextSuspenseID++;
      return m(u.boundaryPrefix + p.toString(16));
    }
    function rn(u, p, w) {
      var O = u.idPrefix, j = ":" + O + "R" + p;
      return w > 0 && (j += "H" + w.toString(32)), j + ":";
    }
    function kn(u) {
      return St(u);
    }
    var pr = m("<!-- -->");
    function lr(u, p, w, O) {
      return p === "" ? O : (O && u.push(pr), u.push(T(kn(p))), !0);
    }
    function sr(u, p, w, O) {
      w && O && u.push(pr);
    }
    var x = /* @__PURE__ */ new Map();
    function A(u) {
      var p = x.get(u);
      if (p !== void 0)
        return p;
      var w = m(St(X(u)));
      return x.set(u, w), w;
    }
    var $ = m(' style="'), G = m(":"), be = m(";");
    function B(u, p, w) {
      if (typeof w != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var O = !0;
      for (var j in w)
        if (Y.call(w, j)) {
          var ae = w[j];
          if (!(ae == null || typeof ae == "boolean" || ae === "")) {
            var pe = void 0, ke = void 0, l = j.indexOf("--") === 0;
            l ? (pe = T(St(j)), U(ae, j), ke = T(St(("" + ae).trim()))) : (vt(j, ae), pe = A(j), typeof ae == "number" ? ae !== 0 && !Y.call(Re, j) ? ke = T(ae + "px") : ke = T("" + ae) : (U(ae, j), ke = T(St(("" + ae).trim())))), O ? (O = !1, u.push($, pe, G, ke)) : u.push(be, pe, G, ke);
          }
        }
      O || u.push(ye);
    }
    var I = m(" "), te = m('="'), ye = m('"'), Ye = m('=""');
    function tt(u, p, w, O) {
      switch (w) {
        case "style": {
          B(u, p, O);
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
        var j = xe(w);
        if (j !== null) {
          switch (typeof O) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!j.acceptsBooleans)
                return;
          }
          var ae = j.attributeName, pe = T(ae);
          switch (j.type) {
            case q:
              O && u.push(I, pe, Ye);
              return;
            case me:
              O === !0 ? u.push(I, pe, Ye) : O === !1 || u.push(I, pe, te, T(St(O)), ye);
              return;
            case W:
              isNaN(O) || u.push(I, pe, te, T(St(O)), ye);
              break;
            case se:
              !isNaN(O) && O >= 1 && u.push(I, pe, te, T(St(O)), ye);
              break;
            default:
              j.sanitizeURL && (R(O, ae), O = "" + O, He(O)), u.push(I, pe, te, T(St(O)), ye);
          }
        } else if (ne(w)) {
          switch (typeof O) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var ke = w.toLowerCase().slice(0, 5);
              if (ke !== "data-" && ke !== "aria-")
                return;
            }
          }
          u.push(I, T(w), te, T(St(O)), ye);
        }
      }
    }
    var Pt = m(">"), Cn = m("/>");
    function hn(u, p, w) {
      if (p != null) {
        if (w != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof p != "object" || !("__html" in p))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var O = p.__html;
        O != null && (H(O), u.push(T("" + O)));
      }
    }
    var Mn = !1, ur = !1, Un = !1, Nr = !1, mr = !1, Tr = !1, cr = !1;
    function Zr(u, p) {
      {
        var w = u[p];
        if (w != null) {
          var O = at(w);
          u.multiple && !O ? a("The `%s` prop supplied to <select> must be an array if `multiple` is true.", p) : !u.multiple && O && a("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", p);
        }
      }
    }
    function al(u, p, w) {
      Be("select", p), Zr(p, "value"), Zr(p, "defaultValue"), p.value !== void 0 && p.defaultValue !== void 0 && !Un && (a("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Un = !0), u.push(Kn("select"));
      var O = null, j = null;
      for (var ae in p)
        if (Y.call(p, ae)) {
          var pe = p[ae];
          if (pe == null)
            continue;
          switch (ae) {
            case "children":
              O = pe;
              break;
            case "dangerouslySetInnerHTML":
              j = pe;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              tt(u, w, ae, pe);
              break;
          }
        }
      return u.push(Pt), hn(u, j, O), O;
    }
    function il(u) {
      var p = "";
      return e.Children.forEach(u, function(w) {
        w != null && (p += w, !mr && typeof w != "string" && typeof w != "number" && (mr = !0, a("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), p;
    }
    var Ua = m(' selected=""');
    function ol(u, p, w, O) {
      var j = O.selectedValue;
      u.push(Kn("option"));
      var ae = null, pe = null, ke = null, l = null;
      for (var h in p)
        if (Y.call(p, h)) {
          var S = p[h];
          if (S == null)
            continue;
          switch (h) {
            case "children":
              ae = S;
              break;
            case "selected":
              ke = S, cr || (a("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), cr = !0);
              break;
            case "dangerouslySetInnerHTML":
              l = S;
              break;
            case "value":
              pe = S;
            default:
              tt(u, w, h, S);
              break;
          }
        }
      if (j != null) {
        var C;
        if (pe !== null ? (R(pe, "value"), C = "" + pe) : (l !== null && (Tr || (Tr = !0, a("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), C = il(ae)), at(j))
          for (var F = 0; F < j.length; F++) {
            R(j[F], "value");
            var ee = "" + j[F];
            if (ee === C) {
              u.push(Ua);
              break;
            }
          }
        else
          R(j, "select.value"), "" + j === C && u.push(Ua);
      } else
        ke && u.push(Ua);
      return u.push(Pt), hn(u, l, ae), ae;
    }
    function Ka(u, p, w) {
      Be("input", p), p.checked !== void 0 && p.defaultChecked !== void 0 && !ur && (a("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", p.type), ur = !0), p.value !== void 0 && p.defaultValue !== void 0 && !Mn && (a("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", p.type), Mn = !0), u.push(Kn("input"));
      var O = null, j = null, ae = null, pe = null;
      for (var ke in p)
        if (Y.call(p, ke)) {
          var l = p[ke];
          if (l == null)
            continue;
          switch (ke) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              pe = l;
              break;
            case "defaultValue":
              j = l;
              break;
            case "checked":
              ae = l;
              break;
            case "value":
              O = l;
              break;
            default:
              tt(u, w, ke, l);
              break;
          }
        }
      return ae !== null ? tt(u, w, "checked", ae) : pe !== null && tt(u, w, "checked", pe), O !== null ? tt(u, w, "value", O) : j !== null && tt(u, w, "value", j), u.push(Cn), null;
    }
    function dr(u, p, w) {
      Be("textarea", p), p.value !== void 0 && p.defaultValue !== void 0 && !Nr && (a("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Nr = !0), u.push(Kn("textarea"));
      var O = null, j = null, ae = null;
      for (var pe in p)
        if (Y.call(p, pe)) {
          var ke = p[pe];
          if (ke == null)
            continue;
          switch (pe) {
            case "children":
              ae = ke;
              break;
            case "value":
              O = ke;
              break;
            case "defaultValue":
              j = ke;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              tt(u, w, pe, ke);
              break;
          }
        }
      if (O === null && j !== null && (O = j), u.push(Pt), ae != null) {
        if (a("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), O != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (at(ae)) {
          if (ae.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          H(ae[0]), O = "" + ae[0];
        }
        H(ae), O = "" + ae;
      }
      return typeof O == "string" && O[0] === `
` && u.push(Cr), O !== null && (R(O, "value"), u.push(T(kn("" + O)))), null;
    }
    function Qr(u, p, w, O) {
      u.push(Kn(w));
      for (var j in p)
        if (Y.call(p, j)) {
          var ae = p[j];
          if (ae == null)
            continue;
          switch (j) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(w + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              tt(u, O, j, ae);
              break;
          }
        }
      return u.push(Cn), null;
    }
    function ha(u, p, w) {
      u.push(Kn("menuitem"));
      for (var O in p)
        if (Y.call(p, O)) {
          var j = p[O];
          if (j == null)
            continue;
          switch (O) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              tt(u, w, O, j);
              break;
          }
        }
      return u.push(Pt), null;
    }
    function Qt(u, p, w) {
      u.push(Kn("title"));
      var O = null;
      for (var j in p)
        if (Y.call(p, j)) {
          var ae = p[j];
          if (ae == null)
            continue;
          switch (j) {
            case "children":
              O = ae;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              tt(u, w, j, ae);
              break;
          }
        }
      u.push(Pt);
      {
        var pe = Array.isArray(O) && O.length < 2 ? O[0] || null : O;
        Array.isArray(O) && O.length > 1 ? a("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : pe != null && pe.$$typeof != null ? a("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : pe != null && typeof pe != "string" && typeof pe != "number" && a("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return O;
    }
    function gr(u, p, w, O) {
      u.push(Kn(w));
      var j = null, ae = null;
      for (var pe in p)
        if (Y.call(p, pe)) {
          var ke = p[pe];
          if (ke == null)
            continue;
          switch (pe) {
            case "children":
              j = ke;
              break;
            case "dangerouslySetInnerHTML":
              ae = ke;
              break;
            default:
              tt(u, O, pe, ke);
              break;
          }
        }
      return u.push(Pt), hn(u, ae, j), typeof j == "string" ? (u.push(T(kn(j))), null) : j;
    }
    function $n(u, p, w, O) {
      u.push(Kn(w));
      var j = null, ae = null;
      for (var pe in p)
        if (Y.call(p, pe)) {
          var ke = p[pe];
          if (ke == null)
            continue;
          switch (pe) {
            case "children":
              j = ke;
              break;
            case "dangerouslySetInnerHTML":
              ae = ke;
              break;
            case "style":
              B(u, O, ke);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ne(pe) && typeof ke != "function" && typeof ke != "symbol" && u.push(I, T(pe), te, T(St(ke)), ye);
              break;
          }
        }
      return u.push(Pt), hn(u, ae, j), j;
    }
    var Cr = m(`
`);
    function yr(u, p, w, O) {
      u.push(Kn(w));
      var j = null, ae = null;
      for (var pe in p)
        if (Y.call(p, pe)) {
          var ke = p[pe];
          if (ke == null)
            continue;
          switch (pe) {
            case "children":
              j = ke;
              break;
            case "dangerouslySetInnerHTML":
              ae = ke;
              break;
            default:
              tt(u, O, pe, ke);
              break;
          }
        }
      if (u.push(Pt), ae != null) {
        if (j != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof ae != "object" || !("__html" in ae))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var l = ae.__html;
        l != null && (typeof l == "string" && l.length > 0 && l[0] === `
` ? u.push(Cr, T(l)) : (H(l), u.push(T("" + l))));
      }
      return typeof j == "string" && j[0] === `
` && u.push(Cr), j;
    }
    var pa = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, vr = /* @__PURE__ */ new Map();
    function Kn(u) {
      var p = vr.get(u);
      if (p === void 0) {
        if (!pa.test(u))
          throw new Error("Invalid tag: " + u);
        p = m("<" + u), vr.set(u, p);
      }
      return p;
    }
    var Ya = m("<!DOCTYPE html>");
    function Xa(u, p, w, O, j) {
      switch (Me(p, w), Ve(p, w), Ot(p, w, null), !w.suppressContentEditableWarning && w.contentEditable && w.children != null && a("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), j.insertionMode !== cn && j.insertionMode !== vn && p.indexOf("-") === -1 && typeof w.is != "string" && p.toLowerCase() !== p && a("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", p), p) {
        case "select":
          return al(u, w, O);
        case "option":
          return ol(u, w, O, j);
        case "textarea":
          return dr(u, w, O);
        case "input":
          return Ka(u, w, O);
        case "menuitem":
          return ha(u, w, O);
        case "title":
          return Qt(u, w, O);
        case "listing":
        case "pre":
          return yr(u, w, p, O);
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
          return Qr(u, w, p, O);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return gr(u, w, p, O);
        case "html":
          return j.insertionMode === _t && u.push(Ya), gr(u, w, p, O);
        default:
          return p.indexOf("-") === -1 && typeof w.is != "string" ? gr(u, w, p, O) : $n(u, w, p, O);
      }
    }
    var Vi = m("</"), ji = m(">");
    function Ui(u, p, w) {
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
          u.push(Vi, T(p), ji);
      }
    }
    function ll(u, p) {
      for (var w = p.bootstrapChunks, O = 0; O < w.length - 1; O++)
        y(u, w[O]);
      return O < w.length ? v(u, w[O]) : !0;
    }
    var sl = m('<template id="'), ma = m('"></template>');
    function ga(u, p, w) {
      y(u, sl), y(u, p.placeholderPrefix);
      var O = T(w.toString(16));
      return y(u, O), v(u, ma);
    }
    var ya = m("<!--$-->"), Jr = m('<!--$?--><template id="'), ul = m('"></template>'), ea = m("<!--$!-->"), qa = m("<!--/$-->"), Ga = m("<template"), Fr = m('"'), zr = m(' data-dgst="'), va = m(' data-msg="'), Ki = m(' data-stck="'), Za = m("></template>");
    function Yi(u, p) {
      return v(u, ya);
    }
    function xa(u, p, w) {
      if (y(u, Jr), w === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return y(u, w), v(u, ul);
    }
    function Bn(u, p, w, O, j) {
      var ae;
      return ae = v(u, ea), y(u, Ga), w && (y(u, zr), y(u, T(St(w))), y(u, Fr)), O && (y(u, va), y(u, T(St(O))), y(u, Fr)), j && (y(u, Ki), y(u, T(St(j))), y(u, Fr)), ae = v(u, Za), ae;
    }
    function Xi(u, p) {
      return v(u, qa);
    }
    function ba(u, p) {
      return v(u, qa);
    }
    function cl(u, p) {
      return v(u, qa);
    }
    var qi = m('<div hidden id="'), Sa = m('">'), Gi = m("</div>"), Zi = m('<svg aria-hidden="true" style="display:none" id="'), Ea = m('">'), ka = m("</svg>"), Qi = m('<math aria-hidden="true" style="display:none" id="'), Ji = m('">'), eo = m("</math>"), Qa = m('<table hidden id="'), to = m('">'), b = m("</table>"), P = m('<table hidden><tbody id="'), z = m('">'), Q = m("</tbody></table>"), Se = m('<table hidden><tr id="'), ve = m('">'), Oe = m("</tr></table>"), We = m('<table hidden><colgroup id="'), ht = m('">'), Rt = m("</colgroup></table>");
    function Et(u, p, w, O) {
      switch (w.insertionMode) {
        case _t:
        case Tt:
          return y(u, qi), y(u, p.segmentPrefix), y(u, T(O.toString(16))), v(u, Sa);
        case cn:
          return y(u, Zi), y(u, p.segmentPrefix), y(u, T(O.toString(16))), v(u, Ea);
        case vn:
          return y(u, Qi), y(u, p.segmentPrefix), y(u, T(O.toString(16))), v(u, Ji);
        case zt:
          return y(u, Qa), y(u, p.segmentPrefix), y(u, T(O.toString(16))), v(u, to);
        case xn:
          return y(u, P), y(u, p.segmentPrefix), y(u, T(O.toString(16))), v(u, z);
        case fn:
          return y(u, Se), y(u, p.segmentPrefix), y(u, T(O.toString(16))), v(u, ve);
        case Vt:
          return y(u, We), y(u, p.segmentPrefix), y(u, T(O.toString(16))), v(u, ht);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function tn(u, p) {
      switch (p.insertionMode) {
        case _t:
        case Tt:
          return v(u, Gi);
        case cn:
          return v(u, ka);
        case vn:
          return v(u, eo);
        case zt:
          return v(u, b);
        case xn:
          return v(u, Q);
        case fn:
          return v(u, Oe);
        case Vt:
          return v(u, Rt);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var In = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", Yn = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Xn = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', wa = m(In + ';$RS("'), no = m('$RS("'), Ja = m('","'), _c = m('")<\/script>');
    function Nc(u, p, w) {
      y(u, p.startInlineScript), p.sentCompleteSegmentFunction ? y(u, no) : (p.sentCompleteSegmentFunction = !0, y(u, wa)), y(u, p.segmentPrefix);
      var O = T(w.toString(16));
      return y(u, O), y(u, Ja), y(u, p.placeholderPrefix), y(u, O), v(u, _c);
    }
    var Fc = m(Yn + ';$RC("'), zc = m('$RC("'), $c = m('","'), Bc = m('")<\/script>');
    function dl(u, p, w, O) {
      if (y(u, p.startInlineScript), p.sentCompleteBoundaryFunction ? y(u, zc) : (p.sentCompleteBoundaryFunction = !0, y(u, Fc)), w === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var j = T(O.toString(16));
      return y(u, w), y(u, $c), y(u, p.segmentPrefix), y(u, j), v(u, Bc);
    }
    var Ic = m(Xn + ';$RX("'), Hc = m('$RX("'), fl = m('"'), Wc = m(")<\/script>"), hl = m(",");
    function Os(u, p, w, O, j, ae) {
      if (y(u, p.startInlineScript), p.sentClientRenderFunction ? y(u, Hc) : (p.sentClientRenderFunction = !0, y(u, Ic)), w === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return y(u, w), y(u, fl), (O || j || ae) && (y(u, hl), y(u, T(pl(O || "")))), (j || ae) && (y(u, hl), y(u, T(pl(j || "")))), ae && (y(u, hl), y(u, T(pl(ae)))), v(u, Wc);
    }
    var Ms = /[<\u2028\u2029]/g;
    function pl(u) {
      var p = JSON.stringify(u);
      return p.replace(Ms, function(w) {
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
    var tr = Object.assign, Vc = Symbol.for("react.element"), _s = Symbol.for("react.portal"), qn = Symbol.for("react.fragment"), Ns = Symbol.for("react.strict_mode"), ml = Symbol.for("react.profiler"), ro = Symbol.for("react.provider"), ao = Symbol.for("react.context"), io = Symbol.for("react.forward_ref"), ei = Symbol.for("react.suspense"), ti = Symbol.for("react.suspense_list"), ni = Symbol.for("react.memo"), Ta = Symbol.for("react.lazy"), gl = Symbol.for("react.scope"), yl = Symbol.for("react.debug_trace_mode"), oo = Symbol.for("react.legacy_hidden"), jc = Symbol.for("react.default_value"), Fs = Symbol.iterator, Uc = "@@iterator";
    function Kc(u) {
      if (u === null || typeof u != "object")
        return null;
      var p = Fs && u[Fs] || u[Uc];
      return typeof p == "function" ? p : null;
    }
    function zs(u, p, w) {
      var O = u.displayName;
      if (O)
        return O;
      var j = p.displayName || p.name || "";
      return j !== "" ? w + "(" + j + ")" : w;
    }
    function $s(u) {
      return u.displayName || "Context";
    }
    function pn(u) {
      if (u == null)
        return null;
      if (typeof u.tag == "number" && a("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof u == "function")
        return u.displayName || u.name || null;
      if (typeof u == "string")
        return u;
      switch (u) {
        case qn:
          return "Fragment";
        case _s:
          return "Portal";
        case ml:
          return "Profiler";
        case Ns:
          return "StrictMode";
        case ei:
          return "Suspense";
        case ti:
          return "SuspenseList";
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case ao:
            var p = u;
            return $s(p) + ".Consumer";
          case ro:
            var w = u;
            return $s(w._context) + ".Provider";
          case io:
            return zs(u, u.render, "ForwardRef");
          case ni:
            var O = u.displayName || null;
            return O !== null ? O : pn(u.type) || "Memo";
          case Ta: {
            var j = u, ae = j._payload, pe = j._init;
            try {
              return pn(pe(ae));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ri = 0, vl, dn, Ca, xl, bl, Sl, El;
    function kl() {
    }
    kl.__reactDisabledLog = !0;
    function Bs() {
      {
        if (ri === 0) {
          vl = console.log, dn = console.info, Ca = console.warn, xl = console.error, bl = console.group, Sl = console.groupCollapsed, El = console.groupEnd;
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
        ri++;
      }
    }
    function Is() {
      {
        if (ri--, ri === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: tr({}, u, {
              value: vl
            }),
            info: tr({}, u, {
              value: dn
            }),
            warn: tr({}, u, {
              value: Ca
            }),
            error: tr({}, u, {
              value: xl
            }),
            group: tr({}, u, {
              value: bl
            }),
            groupCollapsed: tr({}, u, {
              value: Sl
            }),
            groupEnd: tr({}, u, {
              value: El
            })
          });
        }
        ri < 0 && a("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var lo = r.ReactCurrentDispatcher, wl;
    function ai(u, p, w) {
      {
        if (wl === void 0)
          try {
            throw Error();
          } catch (j) {
            var O = j.stack.trim().match(/\n( *(at )?)/);
            wl = O && O[1] || "";
          }
        return `
` + wl + u;
      }
    }
    var ii = !1, Aa;
    {
      var oi = typeof WeakMap == "function" ? WeakMap : Map;
      Aa = new oi();
    }
    function li(u, p) {
      if (!u || ii)
        return "";
      {
        var w = Aa.get(u);
        if (w !== void 0)
          return w;
      }
      var O;
      ii = !0;
      var j = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ae;
      ae = lo.current, lo.current = null, Bs();
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
              O = de;
            }
            Reflect.construct(u, [], pe);
          } else {
            try {
              pe.call();
            } catch (de) {
              O = de;
            }
            u.call(pe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (de) {
            O = de;
          }
          u();
        }
      } catch (de) {
        if (de && O && typeof de.stack == "string") {
          for (var ke = de.stack.split(`
`), l = O.stack.split(`
`), h = ke.length - 1, S = l.length - 1; h >= 1 && S >= 0 && ke[h] !== l[S]; )
            S--;
          for (; h >= 1 && S >= 0; h--, S--)
            if (ke[h] !== l[S]) {
              if (h !== 1 || S !== 1)
                do
                  if (h--, S--, S < 0 || ke[h] !== l[S]) {
                    var C = `
` + ke[h].replace(" at new ", " at ");
                    return u.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", u.displayName)), typeof u == "function" && Aa.set(u, C), C;
                  }
                while (h >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        ii = !1, lo.current = ae, Is(), Error.prepareStackTrace = j;
      }
      var F = u ? u.displayName || u.name : "", ee = F ? ai(F) : "";
      return typeof u == "function" && Aa.set(u, ee), ee;
    }
    function so(u, p, w) {
      return li(u, !0);
    }
    function Hs(u, p, w) {
      return li(u, !1);
    }
    function Tl(u) {
      var p = u.prototype;
      return !!(p && p.isReactComponent);
    }
    function Cl(u, p, w) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return li(u, Tl(u));
      if (typeof u == "string")
        return ai(u);
      switch (u) {
        case ei:
          return ai("Suspense");
        case ti:
          return ai("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case io:
            return Hs(u.render);
          case ni:
            return Cl(u.type, p, w);
          case Ta: {
            var O = u, j = O._payload, ae = O._init;
            try {
              return Cl(ae(j), p, w);
            } catch {
            }
          }
        }
      return "";
    }
    var Al = {}, Ws = r.ReactDebugCurrentFrame;
    function Pa(u) {
      if (u) {
        var p = u._owner, w = Cl(u.type, u._source, p ? p.type : null);
        Ws.setExtraStackFrame(w);
      } else
        Ws.setExtraStackFrame(null);
    }
    function Pl(u, p, w, O, j) {
      {
        var ae = Function.call.bind(Y);
        for (var pe in u)
          if (ae(u, pe)) {
            var ke = void 0;
            try {
              if (typeof u[pe] != "function") {
                var l = Error((O || "React class") + ": " + w + " type `" + pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw l.name = "Invariant Violation", l;
              }
              ke = u[pe](p, pe, O, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (h) {
              ke = h;
            }
            ke && !(ke instanceof Error) && (Pa(j), a("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", O || "React class", w, pe, typeof ke), Pa(null)), ke instanceof Error && !(ke.message in Al) && (Al[ke.message] = !0, Pa(j), a("Failed %s type: %s", w, ke.message), Pa(null));
          }
      }
    }
    var uo;
    uo = {};
    var ta = {};
    Object.freeze(ta);
    function Rl(u, p) {
      {
        var w = u.contextTypes;
        if (!w)
          return ta;
        var O = {};
        for (var j in w)
          O[j] = p[j];
        {
          var ae = pn(u) || "Unknown";
          Pl(w, O, "context", ae);
        }
        return O;
      }
    }
    function Ll(u, p, w, O) {
      {
        if (typeof u.getChildContext != "function") {
          {
            var j = pn(p) || "Unknown";
            uo[j] || (uo[j] = !0, a("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", j, j));
          }
          return w;
        }
        var ae = u.getChildContext();
        for (var pe in ae)
          if (!(pe in O))
            throw new Error((pn(p) || "Unknown") + '.getChildContext(): key "' + pe + '" is not defined in childContextTypes.');
        {
          var ke = pn(p) || "Unknown";
          Pl(O, ae, "child context", ke);
        }
        return tr({}, w, ae);
      }
    }
    var $r;
    $r = {};
    var Vs = null, na = null;
    function ra(u) {
      u.context._currentValue = u.parentValue;
    }
    function Dl(u) {
      u.context._currentValue = u.value;
    }
    function xr(u, p) {
      if (u !== p) {
        ra(u);
        var w = u.parent, O = p.parent;
        if (w === null) {
          if (O !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (O === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          xr(w, O);
        }
        Dl(p);
      }
    }
    function co(u) {
      ra(u);
      var p = u.parent;
      p !== null && co(p);
    }
    function fo(u) {
      var p = u.parent;
      p !== null && fo(p), Dl(u);
    }
    function si(u, p) {
      ra(u);
      var w = u.parent;
      if (w === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      w.depth === p.depth ? xr(w, p) : si(w, p);
    }
    function Ol(u, p) {
      var w = p.parent;
      if (w === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      u.depth === w.depth ? xr(u, w) : Ol(u, w), Dl(p);
    }
    function ui(u) {
      var p = na, w = u;
      p !== w && (p === null ? fo(w) : w === null ? co(p) : p.depth === w.depth ? xr(p, w) : p.depth > w.depth ? si(p, w) : Ol(p, w), na = w);
    }
    function js(u, p) {
      var w;
      w = u._currentValue, u._currentValue = p, u._currentRenderer !== void 0 && u._currentRenderer !== null && u._currentRenderer !== $r && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), u._currentRenderer = $r;
      var O = na, j = {
        parent: O,
        depth: O === null ? 0 : O.depth + 1,
        context: u,
        parentValue: w,
        value: p
      };
      return na = j, j;
    }
    function Us(u) {
      var p = na;
      if (p === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      p.context !== u && a("The parent context is not the expected context. This is probably a bug in React.");
      {
        var w = p.parentValue;
        w === jc ? p.context._currentValue = p.context._defaultValue : p.context._currentValue = w, u._currentRenderer !== void 0 && u._currentRenderer !== null && u._currentRenderer !== $r && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), u._currentRenderer = $r;
      }
      return na = p.parent;
    }
    function ho() {
      return na;
    }
    function ci(u) {
      var p = u._currentValue;
      return p;
    }
    function Ml(u) {
      return u._reactInternals;
    }
    function Yc(u, p) {
      u._reactInternals = p;
    }
    var Ra = {}, po = {}, _l, mo, go, di, yo, La, fi, vo, Da;
    {
      _l = /* @__PURE__ */ new Set(), mo = /* @__PURE__ */ new Set(), go = /* @__PURE__ */ new Set(), fi = /* @__PURE__ */ new Set(), di = /* @__PURE__ */ new Set(), vo = /* @__PURE__ */ new Set(), Da = /* @__PURE__ */ new Set();
      var xo = /* @__PURE__ */ new Set();
      La = function(u, p) {
        if (!(u === null || typeof u == "function")) {
          var w = p + "_" + u;
          xo.has(w) || (xo.add(w), a("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", p, u));
        }
      }, yo = function(u, p) {
        if (p === void 0) {
          var w = pn(u) || "Component";
          di.has(w) || (di.add(w), a("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", w));
        }
      };
    }
    function bo(u, p) {
      {
        var w = u.constructor, O = w && pn(w) || "ReactClass", j = O + "." + p;
        if (Ra[j])
          return;
        a(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, p, p, O), Ra[j] = !0;
      }
    }
    var So = {
      isMounted: function(u) {
        return !1;
      },
      enqueueSetState: function(u, p, w) {
        var O = Ml(u);
        O.queue === null ? bo(u, "setState") : (O.queue.push(p), w != null && La(w, "setState"));
      },
      enqueueReplaceState: function(u, p, w) {
        var O = Ml(u);
        O.replace = !0, O.queue = [p], w != null && La(w, "setState");
      },
      enqueueForceUpdate: function(u, p) {
        var w = Ml(u);
        w.queue === null ? bo(u, "forceUpdate") : p != null && La(p, "setState");
      }
    };
    function Ks(u, p, w, O, j) {
      var ae = w(j, O);
      yo(p, ae);
      var pe = ae == null ? O : tr({}, O, ae);
      return pe;
    }
    function Ys(u, p, w) {
      var O = ta, j = u.contextType;
      if ("contextType" in u) {
        var ae = (
          // Allow null for conditional declaration
          j === null || j !== void 0 && j.$$typeof === ao && j._context === void 0
        );
        if (!ae && !Da.has(u)) {
          Da.add(u);
          var pe = "";
          j === void 0 ? pe = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof j != "object" ? pe = " However, it is set to a " + typeof j + "." : j.$$typeof === ro ? pe = " Did you accidentally pass the Context.Provider instead?" : j._context !== void 0 ? pe = " Did you accidentally pass the Context.Consumer instead?" : pe = " However, it is set to an object with keys {" + Object.keys(j).join(", ") + "}.", a("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", pn(u) || "Component", pe);
        }
      }
      typeof j == "object" && j !== null ? O = ci(j) : O = w;
      var ke = new u(p, O);
      {
        if (typeof u.getDerivedStateFromProps == "function" && (ke.state === null || ke.state === void 0)) {
          var l = pn(u) || "Component";
          _l.has(l) || (_l.add(l), a("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", l, ke.state === null ? "null" : "undefined", l));
        }
        if (typeof u.getDerivedStateFromProps == "function" || typeof ke.getSnapshotBeforeUpdate == "function") {
          var h = null, S = null, C = null;
          if (typeof ke.componentWillMount == "function" && ke.componentWillMount.__suppressDeprecationWarning !== !0 ? h = "componentWillMount" : typeof ke.UNSAFE_componentWillMount == "function" && (h = "UNSAFE_componentWillMount"), typeof ke.componentWillReceiveProps == "function" && ke.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? S = "componentWillReceiveProps" : typeof ke.UNSAFE_componentWillReceiveProps == "function" && (S = "UNSAFE_componentWillReceiveProps"), typeof ke.componentWillUpdate == "function" && ke.componentWillUpdate.__suppressDeprecationWarning !== !0 ? C = "componentWillUpdate" : typeof ke.UNSAFE_componentWillUpdate == "function" && (C = "UNSAFE_componentWillUpdate"), h !== null || S !== null || C !== null) {
            var F = pn(u) || "Component", ee = typeof u.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            go.has(F) || (go.add(F), a(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, F, ee, h !== null ? `
  ` + h : "", S !== null ? `
  ` + S : "", C !== null ? `
  ` + C : ""));
          }
        }
      }
      return ke;
    }
    function Xs(u, p, w) {
      {
        var O = pn(p) || "Component", j = u.render;
        j || (p.prototype && typeof p.prototype.render == "function" ? a("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", O) : a("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", O)), u.getInitialState && !u.getInitialState.isReactClassApproved && !u.state && a("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", O), u.getDefaultProps && !u.getDefaultProps.isReactClassApproved && a("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", O), u.propTypes && a("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", O), u.contextType && a("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", O), u.contextTypes && a("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", O), p.contextType && p.contextTypes && !vo.has(p) && (vo.add(p), a("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", O)), typeof u.componentShouldUpdate == "function" && a("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", O), p.prototype && p.prototype.isPureReactComponent && typeof u.shouldComponentUpdate < "u" && a("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", pn(p) || "A pure component"), typeof u.componentDidUnmount == "function" && a("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", O), typeof u.componentDidReceiveProps == "function" && a("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", O), typeof u.componentWillRecieveProps == "function" && a("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", O), typeof u.UNSAFE_componentWillRecieveProps == "function" && a("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", O);
        var ae = u.props !== w;
        u.props !== void 0 && ae && a("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", O, O), u.defaultProps && a("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", O, O), typeof u.getSnapshotBeforeUpdate == "function" && typeof u.componentDidUpdate != "function" && !mo.has(p) && (mo.add(p), a("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", pn(p))), typeof u.getDerivedStateFromProps == "function" && a("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", O), typeof u.getDerivedStateFromError == "function" && a("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", O), typeof p.getSnapshotBeforeUpdate == "function" && a("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", O);
        var pe = u.state;
        pe && (typeof pe != "object" || at(pe)) && a("%s.state: must be set to an object or null", O), typeof u.getChildContext == "function" && typeof p.childContextTypes != "object" && a("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", O);
      }
    }
    function Xc(u, p) {
      var w = p.state;
      if (typeof p.componentWillMount == "function") {
        if (p.componentWillMount.__suppressDeprecationWarning !== !0) {
          var O = pn(u) || "Unknown";
          po[O] || (n(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            O
          ), po[O] = !0);
        }
        p.componentWillMount();
      }
      typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), w !== p.state && (a("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", pn(u) || "Component"), So.enqueueReplaceState(p, p.state, null));
    }
    function qc(u, p, w, O) {
      if (u.queue !== null && u.queue.length > 0) {
        var j = u.queue, ae = u.replace;
        if (u.queue = null, u.replace = !1, ae && j.length === 1)
          p.state = j[0];
        else {
          for (var pe = ae ? j[0] : p.state, ke = !0, l = ae ? 1 : 0; l < j.length; l++) {
            var h = j[l], S = typeof h == "function" ? h.call(p, pe, w, O) : h;
            S != null && (ke ? (ke = !1, pe = tr({}, pe, S)) : tr(pe, S));
          }
          p.state = pe;
        }
      } else
        u.queue = null;
    }
    function qs(u, p, w, O) {
      Xs(u, p, w);
      var j = u.state !== void 0 ? u.state : null;
      u.updater = So, u.props = w, u.state = j;
      var ae = {
        queue: [],
        replace: !1
      };
      Yc(u, ae);
      var pe = p.contextType;
      if (typeof pe == "object" && pe !== null ? u.context = ci(pe) : u.context = O, u.state === w) {
        var ke = pn(p) || "Component";
        fi.has(ke) || (fi.add(ke), a("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", ke));
      }
      var l = p.getDerivedStateFromProps;
      typeof l == "function" && (u.state = Ks(u, p, l, j, w)), typeof p.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Xc(p, u), qc(ae, u, w, O));
    }
    var Gc = {
      id: 1,
      overflow: ""
    };
    function Zc(u) {
      var p = u.overflow, w = u.id, O = w & ~Qc(w);
      return O.toString(32) + p;
    }
    function Eo(u, p, w) {
      var O = u.id, j = u.overflow, ae = ko(O) - 1, pe = O & ~(1 << ae), ke = w + 1, l = ko(p) + ae;
      if (l > 30) {
        var h = ae - ae % 5, S = (1 << h) - 1, C = (pe & S).toString(32), F = pe >> h, ee = ae - h, de = ko(p) + ee, Ee = ke << ee, ze = Ee | F, nt = C + j;
        return {
          id: 1 << de | ze,
          overflow: nt
        };
      } else {
        var st = ke << ae, gt = st | pe, ln = j;
        return {
          id: 1 << l | gt,
          overflow: ln
        };
      }
    }
    function ko(u) {
      return 32 - Nl(u);
    }
    function Qc(u) {
      return 1 << ko(u) - 1;
    }
    var Nl = Math.clz32 ? Math.clz32 : ed, wo = Math.log, Jc = Math.LN2;
    function ed(u) {
      var p = u >>> 0;
      return p === 0 ? 32 : 31 - (wo(p) / Jc | 0) | 0;
    }
    function td(u, p) {
      return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
    }
    var nd = typeof Object.is == "function" ? Object.is : td, Ar = null, Fl = null, To = null, Nt = null, aa = !1, ia = !1, qt = 0, nr = null, oa = 0, Co = 25, _n = !1, Pr;
    function la() {
      if (Ar === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return _n && a("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Ar;
    }
    function br(u, p) {
      if (p === null)
        return a("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Pr), !1;
      u.length !== p.length && a(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Pr, "[" + u.join(", ") + "]", "[" + p.join(", ") + "]");
      for (var w = 0; w < p.length && w < u.length; w++)
        if (!nd(u[w], p[w]))
          return !1;
      return !0;
    }
    function sa() {
      if (oa > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function Rr() {
      return Nt === null ? To === null ? (aa = !1, To = Nt = sa()) : (aa = !0, Nt = To) : Nt.next === null ? (aa = !1, Nt = Nt.next = sa()) : (aa = !0, Nt = Nt.next), Nt;
    }
    function rd(u, p) {
      Ar = p, Fl = u, _n = !1, qt = 0;
    }
    function Gs(u, p, w, O) {
      for (; ia; )
        ia = !1, qt = 0, oa += 1, Nt = null, w = u(p, O);
      return zl(), w;
    }
    function Ao() {
      var u = qt !== 0;
      return u;
    }
    function zl() {
      _n = !1, Ar = null, Fl = null, ia = !1, To = null, oa = 0, nr = null, Nt = null;
    }
    function ad(u) {
      return _n && a("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), ci(u);
    }
    function Zs(u) {
      return Pr = "useContext", la(), ci(u);
    }
    function hi(u, p) {
      return typeof p == "function" ? p(u) : p;
    }
    function id(u) {
      return Pr = "useState", Qs(
        hi,
        // useReducer has a special case to support lazy useState initializers
        u
      );
    }
    function Qs(u, p, w) {
      if (u !== hi && (Pr = "useReducer"), Ar = la(), Nt = Rr(), aa) {
        var O = Nt.queue, j = O.dispatch;
        if (nr !== null) {
          var ae = nr.get(O);
          if (ae !== void 0) {
            nr.delete(O);
            var pe = Nt.memoizedState, ke = ae;
            do {
              var l = ke.action;
              _n = !0, pe = u(pe, l), _n = !1, ke = ke.next;
            } while (ke !== null);
            return Nt.memoizedState = pe, [pe, j];
          }
        }
        return [Nt.memoizedState, j];
      } else {
        _n = !0;
        var h;
        u === hi ? h = typeof p == "function" ? p() : p : h = w !== void 0 ? w(p) : p, _n = !1, Nt.memoizedState = h;
        var S = Nt.queue = {
          last: null,
          dispatch: null
        }, C = S.dispatch = eu.bind(null, Ar, S);
        return [Nt.memoizedState, C];
      }
    }
    function Po(u, p) {
      Ar = la(), Nt = Rr();
      var w = p === void 0 ? null : p;
      if (Nt !== null) {
        var O = Nt.memoizedState;
        if (O !== null && w !== null) {
          var j = O[1];
          if (br(w, j))
            return O[0];
        }
      }
      _n = !0;
      var ae = u();
      return _n = !1, Nt.memoizedState = [ae, w], ae;
    }
    function od(u) {
      Ar = la(), Nt = Rr();
      var p = Nt.memoizedState;
      if (p === null) {
        var w = {
          current: u
        };
        return Object.seal(w), Nt.memoizedState = w, w;
      } else
        return p;
    }
    function Js(u, p) {
      Pr = "useLayoutEffect", a("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function eu(u, p, w) {
      if (oa >= Co)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (u === Ar) {
        ia = !0;
        var O = {
          action: w,
          next: null
        };
        nr === null && (nr = /* @__PURE__ */ new Map());
        var j = nr.get(p);
        if (j === void 0)
          nr.set(p, O);
        else {
          for (var ae = j; ae.next !== null; )
            ae = ae.next;
          ae.next = O;
        }
      }
    }
    function ld(u, p) {
      return Po(function() {
        return u;
      }, p);
    }
    function sd(u, p, w) {
      return la(), p(u._source);
    }
    function ud(u, p, w) {
      if (w === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return w();
    }
    function cd(u) {
      return la(), u;
    }
    function dd() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function fd() {
      return la(), [!1, dd];
    }
    function hd() {
      var u = Fl, p = Zc(u.treeContext), w = $l;
      if (w === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var O = qt++;
      return rn(w, p, O);
    }
    function Ro() {
    }
    var tu = {
      readContext: ad,
      useContext: Zs,
      useMemo: Po,
      useReducer: Qs,
      useRef: od,
      useState: id,
      useInsertionEffect: Ro,
      useLayoutEffect: Js,
      useCallback: ld,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: Ro,
      // Effects are not run in the server environment.
      useEffect: Ro,
      // Debugging effect
      useDebugValue: Ro,
      useDeferredValue: cd,
      useTransition: fd,
      useId: hd,
      // Subscriptions are not setup in a server environment.
      useMutableSource: sd,
      useSyncExternalStore: ud
    }, $l = null;
    function pi(u) {
      $l = u;
    }
    function nu(u) {
      try {
        var p = "", w = u;
        do {
          switch (w.tag) {
            case 0:
              p += ai(w.type, null, null);
              break;
            case 1:
              p += Hs(w.type, null, null);
              break;
            case 2:
              p += so(w.type, null, null);
              break;
          }
          w = w.parent;
        } while (w);
        return p;
      } catch (O) {
        return `
Error generating stack: ` + O.message + `
` + O.stack;
      }
    }
    var mi = r.ReactCurrentDispatcher, Lo = r.ReactDebugCurrentFrame, Bl = 0, Br = 1, Do = 2, Oo = 3, ua = 4, ru = 0, Il = 1, ca = 2, pd = 12800;
    function au(u) {
      return console.error(u), null;
    }
    function Sr() {
    }
    function md(u, p, w, O, j, ae, pe, ke, l) {
      var h = [], S = /* @__PURE__ */ new Set(), C = {
        destination: null,
        responseState: p,
        progressiveChunkSize: O === void 0 ? pd : O,
        status: ru,
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
        onError: j === void 0 ? au : j,
        onAllReady: ae === void 0 ? Sr : ae,
        onShellReady: pe === void 0 ? Sr : pe,
        onShellError: ke === void 0 ? Sr : ke,
        onFatalError: l === void 0 ? Sr : l
      }, F = Mo(
        C,
        0,
        null,
        w,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      F.parentFlushed = !0;
      var ee = Hl(C, u, null, F, S, ta, Vs, Gc);
      return h.push(ee), C;
    }
    function gd(u, p) {
      var w = u.pingedTasks;
      w.push(p), w.length === 1 && f(function() {
        return Si(u);
      });
    }
    function gi(u, p) {
      return {
        id: er,
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
    function Hl(u, p, w, O, j, ae, pe, ke) {
      u.allPendingTasks++, w === null ? u.pendingRootTasks++ : w.pendingTasks++;
      var l = {
        node: p,
        ping: function() {
          return gd(u, l);
        },
        blockedBoundary: w,
        blockedSegment: O,
        abortSet: j,
        legacyContext: ae,
        context: pe,
        treeContext: ke
      };
      return l.componentStack = null, j.add(l), l;
    }
    function Mo(u, p, w, O, j, ae) {
      return {
        status: Bl,
        id: -1,
        // lazily assigned later
        index: p,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: O,
        boundary: w,
        lastPushedText: j,
        textEmbedded: ae
      };
    }
    var Lr = null;
    function yi() {
      return Lr === null || Lr.componentStack === null ? "" : nu(Lr.componentStack);
    }
    function Ir(u, p) {
      u.componentStack = {
        tag: 0,
        parent: u.componentStack,
        type: p
      };
    }
    function Er(u, p) {
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
    function rr(u) {
      u.componentStack === null ? a("Unexpectedly popped too many stack frames. This is a bug in React.") : u.componentStack = u.componentStack.parent;
    }
    var Oa = null;
    function Vl(u, p) {
      {
        var w;
        typeof p == "string" ? w = p : p && typeof p.message == "string" ? w = p.message : w = String(p);
        var O = Oa || yi();
        Oa = null, u.errorMessage = w, u.errorComponentStack = O;
      }
    }
    function ar(u, p) {
      var w = u.onError(p);
      if (w != null && typeof w != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof w + '" instead');
      return w;
    }
    function Hr(u, p) {
      var w = u.onShellError;
      w(p);
      var O = u.onFatalError;
      O(p), u.destination !== null ? (u.status = ca, D(u.destination, p)) : (u.status = Il, u.fatalError = p);
    }
    function jl(u, p, w) {
      Ir(p, "Suspense");
      var O = p.blockedBoundary, j = p.blockedSegment, ae = w.fallback, pe = w.children, ke = /* @__PURE__ */ new Set(), l = gi(u, ke), h = j.chunks.length, S = Mo(
        u,
        h,
        l,
        j.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      j.children.push(S), j.lastPushedText = !1;
      var C = Mo(
        u,
        0,
        null,
        j.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      C.parentFlushed = !0, p.blockedBoundary = l, p.blockedSegment = C;
      try {
        if (Jl(u, p, pe), sr(C.chunks, u.responseState, C.lastPushedText, C.textEmbedded), C.status = Br, Fo(l, C), l.pendingTasks === 0) {
          rr(p);
          return;
        }
      } catch (ee) {
        C.status = ua, l.forceClientRender = !0, l.errorDigest = ar(u, ee), Vl(l, ee);
      } finally {
        p.blockedBoundary = O, p.blockedSegment = j;
      }
      var F = Hl(u, ae, O, S, ke, p.legacyContext, p.context, p.treeContext);
      F.componentStack = p.componentStack, u.pingedTasks.push(F), rr(p);
    }
    function vi(u, p, w, O) {
      Ir(p, w);
      var j = p.blockedSegment, ae = Xa(j.chunks, w, O, u.responseState, j.formatContext);
      j.lastPushedText = !1;
      var pe = j.formatContext;
      j.formatContext = On(pe, w, O), Jl(u, p, ae), j.formatContext = pe, Ui(j.chunks, w), j.lastPushedText = !1, rr(p);
    }
    function _o(u) {
      return u.prototype && u.prototype.isReactComponent;
    }
    function iu(u, p, w, O, j) {
      var ae = {};
      rd(p, ae);
      var pe = w(O, j);
      return Gs(w, O, pe, j);
    }
    function ou(u, p, w, O, j) {
      var ae = w.render();
      w.props !== j && (bi || a("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", pn(O) || "a component"), bi = !0);
      {
        var pe = O.childContextTypes;
        if (pe != null) {
          var ke = p.legacyContext, l = Ll(w, O, ke, pe);
          p.legacyContext = l, Gn(u, p, ae), p.legacyContext = ke;
          return;
        }
      }
      Gn(u, p, ae);
    }
    function yd(u, p, w, O) {
      Wl(p, w);
      var j = Rl(w, p.legacyContext), ae = Ys(w, O, j);
      qs(ae, w, O, j), ou(u, p, ae, w, O), rr(p);
    }
    var Ul = {}, xi = {}, lu = {}, Kl = {}, bi = !1, Yl = !1, Xl = !1, ql = !1;
    function su(u, p, w, O) {
      var j;
      if (j = Rl(w, p.legacyContext), Er(p, w), w.prototype && typeof w.prototype.render == "function") {
        var ae = pn(w) || "Unknown";
        Ul[ae] || (a("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", ae, ae), Ul[ae] = !0);
      }
      var pe = iu(u, p, w, O, j), ke = Ao();
      if (typeof pe == "object" && pe !== null && typeof pe.render == "function" && pe.$$typeof === void 0) {
        var l = pn(w) || "Unknown";
        xi[l] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", l, l, l), xi[l] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof pe == "object" && pe !== null && typeof pe.render == "function" && pe.$$typeof === void 0
      ) {
        {
          var h = pn(w) || "Unknown";
          xi[h] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", h, h, h), xi[h] = !0);
        }
        qs(pe, w, O, j), ou(u, p, pe, w, O);
      } else if (uu(w), ke) {
        var S = p.treeContext, C = 1, F = 0;
        p.treeContext = Eo(S, C, F);
        try {
          Gn(u, p, pe);
        } finally {
          p.treeContext = S;
        }
      } else
        Gn(u, p, pe);
      rr(p);
    }
    function uu(u) {
      {
        if (u && u.childContextTypes && a("%s(...): childContextTypes cannot be defined on a function component.", u.displayName || u.name || "Component"), typeof u.getDerivedStateFromProps == "function") {
          var p = pn(u) || "Unknown";
          Kl[p] || (a("%s: Function components do not support getDerivedStateFromProps.", p), Kl[p] = !0);
        }
        if (typeof u.contextType == "object" && u.contextType !== null) {
          var w = pn(u) || "Unknown";
          lu[w] || (a("%s: Function components do not support contextType.", w), lu[w] = !0);
        }
      }
    }
    function Gl(u, p) {
      if (u && u.defaultProps) {
        var w = tr({}, p), O = u.defaultProps;
        for (var j in O)
          w[j] === void 0 && (w[j] = O[j]);
        return w;
      }
      return p;
    }
    function vd(u, p, w, O, j) {
      Er(p, w.render);
      var ae = iu(u, p, w.render, O, j), pe = Ao();
      if (pe) {
        var ke = p.treeContext, l = 1, h = 0;
        p.treeContext = Eo(ke, l, h);
        try {
          Gn(u, p, ae);
        } finally {
          p.treeContext = ke;
        }
      } else
        Gn(u, p, ae);
      rr(p);
    }
    function xd(u, p, w, O, j) {
      var ae = w.type, pe = Gl(ae, O);
      Zl(u, p, ae, pe, j);
    }
    function cu(u, p, w, O) {
      w._context === void 0 ? w !== w.Consumer && (ql || (ql = !0, a("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : w = w._context;
      var j = O.children;
      typeof j != "function" && a("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var ae = ci(w), pe = j(ae);
      Gn(u, p, pe);
    }
    function bd(u, p, w, O) {
      var j = w._context, ae = O.value, pe = O.children, ke;
      ke = p.context, p.context = js(j, ae), Gn(u, p, pe), p.context = Us(j), ke !== p.context && a("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function Sd(u, p, w, O, j) {
      Ir(p, "Lazy");
      var ae = w._payload, pe = w._init, ke = pe(ae), l = Gl(ke, O);
      Zl(u, p, ke, l, j), rr(p);
    }
    function Zl(u, p, w, O, j) {
      if (typeof w == "function")
        if (_o(w)) {
          yd(u, p, w, O);
          return;
        } else {
          su(u, p, w, O);
          return;
        }
      if (typeof w == "string") {
        vi(u, p, w, O);
        return;
      }
      switch (w) {
        case oo:
        case yl:
        case Ns:
        case ml:
        case qn: {
          Gn(u, p, O.children);
          return;
        }
        case ti: {
          Ir(p, "SuspenseList"), Gn(u, p, O.children), rr(p);
          return;
        }
        case gl:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case ei: {
          jl(u, p, O);
          return;
        }
      }
      if (typeof w == "object" && w !== null)
        switch (w.$$typeof) {
          case io: {
            vd(u, p, w, O, j);
            return;
          }
          case ni: {
            xd(u, p, w, O, j);
            return;
          }
          case ro: {
            bd(u, p, w, O);
            return;
          }
          case ao: {
            cu(u, p, w, O);
            return;
          }
          case Ta: {
            Sd(u, p, w, O);
            return;
          }
        }
      var ae = "";
      throw (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (ae += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (w == null ? w : typeof w) + "." + ae));
    }
    function Ed(u, p) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      u[Symbol.toStringTag] === "Generator" && (Yl || a("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Yl = !0), u.entries === p && (Xl || a("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Xl = !0);
    }
    function Gn(u, p, w) {
      try {
        return Ql(u, p, w);
      } catch (O) {
        throw typeof O == "object" && O !== null && typeof O.then == "function" || (Oa = Oa !== null ? Oa : yi()), O;
      }
    }
    function Ql(u, p, w) {
      if (p.node = w, typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case Vc: {
            var O = w, j = O.type, ae = O.props, pe = O.ref;
            Zl(u, p, j, ae, pe);
            return;
          }
          case _s:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case Ta: {
            var ke = w, l = ke._payload, h = ke._init, S;
            try {
              S = h(l);
            } catch (st) {
              throw typeof st == "object" && st !== null && typeof st.then == "function" && Ir(p, "Lazy"), st;
            }
            Gn(u, p, S);
            return;
          }
        }
        if (at(w)) {
          du(u, p, w);
          return;
        }
        var C = Kc(w);
        if (C) {
          Ed(w, C);
          var F = C.call(w);
          if (F) {
            var ee = F.next();
            if (!ee.done) {
              var de = [];
              do
                de.push(ee.value), ee = F.next();
              while (!ee.done);
              du(u, p, de);
              return;
            }
            return;
          }
        }
        var Ee = Object.prototype.toString.call(w);
        throw new Error("Objects are not valid as a React child (found: " + (Ee === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : Ee) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof w == "string") {
        var ze = p.blockedSegment;
        ze.lastPushedText = lr(p.blockedSegment.chunks, w, u.responseState, ze.lastPushedText);
        return;
      }
      if (typeof w == "number") {
        var nt = p.blockedSegment;
        nt.lastPushedText = lr(p.blockedSegment.chunks, "" + w, u.responseState, nt.lastPushedText);
        return;
      }
      typeof w == "function" && a("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function du(u, p, w) {
      for (var O = w.length, j = 0; j < O; j++) {
        var ae = p.treeContext;
        p.treeContext = Eo(ae, O, j);
        try {
          Jl(u, p, w[j]);
        } finally {
          p.treeContext = ae;
        }
      }
    }
    function Zn(u, p, w) {
      var O = p.blockedSegment, j = O.chunks.length, ae = Mo(
        u,
        j,
        null,
        O.formatContext,
        // Adopt the parent segment's leading text embed
        O.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      O.children.push(ae), O.lastPushedText = !1;
      var pe = Hl(u, p.node, p.blockedBoundary, ae, p.abortSet, p.legacyContext, p.context, p.treeContext);
      p.componentStack !== null && (pe.componentStack = p.componentStack.parent);
      var ke = pe.ping;
      w.then(ke, ke);
    }
    function Jl(u, p, w) {
      var O = p.blockedSegment.formatContext, j = p.legacyContext, ae = p.context, pe = null;
      pe = p.componentStack;
      try {
        return Gn(u, p, w);
      } catch (ke) {
        if (zl(), typeof ke == "object" && ke !== null && typeof ke.then == "function") {
          Zn(u, p, ke), p.blockedSegment.formatContext = O, p.legacyContext = j, p.context = ae, ui(ae), p.componentStack = pe;
          return;
        } else
          throw p.blockedSegment.formatContext = O, p.legacyContext = j, p.context = ae, ui(ae), p.componentStack = pe, ke;
      }
    }
    function fu(u, p, w, O) {
      var j = ar(u, O);
      if (p === null ? Hr(u, O) : (p.pendingTasks--, p.forceClientRender || (p.forceClientRender = !0, p.errorDigest = j, Vl(p, O), p.parentFlushed && u.clientRenderedBoundaries.push(p))), u.allPendingTasks--, u.allPendingTasks === 0) {
        var ae = u.onAllReady;
        ae();
      }
    }
    function kd(u) {
      var p = this, w = u.blockedBoundary, O = u.blockedSegment;
      O.status = Oo, hu(p, w, O);
    }
    function No(u, p, w) {
      var O = u.blockedBoundary, j = u.blockedSegment;
      if (j.status = Oo, O === null)
        p.allPendingTasks--, p.status !== ca && (p.status = ca, p.destination !== null && k(p.destination));
      else {
        if (O.pendingTasks--, !O.forceClientRender) {
          O.forceClientRender = !0;
          var ae = w === void 0 ? new Error("The render was aborted by the server without a reason.") : w;
          O.errorDigest = p.onError(ae);
          {
            var pe = "The server did not finish this Suspense boundary: ";
            ae && typeof ae.message == "string" ? ae = pe + ae.message : ae = pe + String(ae);
            var ke = Lr;
            Lr = u;
            try {
              Vl(O, ae);
            } finally {
              Lr = ke;
            }
          }
          O.parentFlushed && p.clientRenderedBoundaries.push(O);
        }
        if (O.fallbackAbortableTasks.forEach(function(h) {
          return No(h, p, w);
        }), O.fallbackAbortableTasks.clear(), p.allPendingTasks--, p.allPendingTasks === 0) {
          var l = p.onAllReady;
          l();
        }
      }
    }
    function Fo(u, p) {
      if (p.chunks.length === 0 && p.children.length === 1 && p.children[0].boundary === null) {
        var w = p.children[0];
        w.id = p.id, w.parentFlushed = !0, w.status === Br && Fo(u, w);
      } else {
        var O = u.completedSegments;
        O.push(p);
      }
    }
    function hu(u, p, w) {
      if (p === null) {
        if (w.parentFlushed) {
          if (u.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          u.completedRootSegment = w;
        }
        if (u.pendingRootTasks--, u.pendingRootTasks === 0) {
          u.onShellError = Sr;
          var O = u.onShellReady;
          O();
        }
      } else if (p.pendingTasks--, !p.forceClientRender) {
        if (p.pendingTasks === 0)
          w.parentFlushed && w.status === Br && Fo(p, w), p.parentFlushed && u.completedBoundaries.push(p), p.fallbackAbortableTasks.forEach(kd, u), p.fallbackAbortableTasks.clear();
        else if (w.parentFlushed && w.status === Br) {
          Fo(p, w);
          var j = p.completedSegments;
          j.length === 1 && p.parentFlushed && u.partialBoundaries.push(p);
        }
      }
      if (u.allPendingTasks--, u.allPendingTasks === 0) {
        var ae = u.onAllReady;
        ae();
      }
    }
    function pu(u, p) {
      var w = p.blockedSegment;
      if (w.status === Bl) {
        ui(p.context);
        var O = null;
        O = Lr, Lr = p;
        try {
          Gn(u, p, p.node), sr(w.chunks, u.responseState, w.lastPushedText, w.textEmbedded), p.abortSet.delete(p), w.status = Br, hu(u, p.blockedBoundary, w);
        } catch (ae) {
          if (zl(), typeof ae == "object" && ae !== null && typeof ae.then == "function") {
            var j = p.ping;
            ae.then(j, j);
          } else
            p.abortSet.delete(p), w.status = ua, fu(u, p.blockedBoundary, w, ae);
        } finally {
          Lr = O;
        }
      }
    }
    function Si(u) {
      if (u.status !== ca) {
        var p = ho(), w = mi.current;
        mi.current = tu;
        var O;
        O = Lo.getCurrentStack, Lo.getCurrentStack = yi;
        var j = $l;
        pi(u.responseState);
        try {
          var ae = u.pingedTasks, pe;
          for (pe = 0; pe < ae.length; pe++) {
            var ke = ae[pe];
            pu(u, ke);
          }
          ae.splice(0, pe), u.destination !== null && $o(u, u.destination);
        } catch (l) {
          ar(u, l), Hr(u, l);
        } finally {
          pi(j), mi.current = w, Lo.getCurrentStack = O, w === tu && ui(p);
        }
      }
    }
    function Ei(u, p, w) {
      switch (w.parentFlushed = !0, w.status) {
        case Bl: {
          var O = w.id = u.nextSegmentId++;
          return w.lastPushedText = !1, w.textEmbedded = !1, ga(p, u.responseState, O);
        }
        case Br: {
          w.status = Do;
          for (var j = !0, ae = w.chunks, pe = 0, ke = w.children, l = 0; l < ke.length; l++) {
            for (var h = ke[l]; pe < h.index; pe++)
              y(p, ae[pe]);
            j = zo(u, p, h);
          }
          for (; pe < ae.length - 1; pe++)
            y(p, ae[pe]);
          return pe < ae.length && (j = v(p, ae[pe])), j;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function zo(u, p, w) {
      var O = w.boundary;
      if (O === null)
        return Ei(u, p, w);
      if (O.parentFlushed = !0, O.forceClientRender)
        return Bn(p, u.responseState, O.errorDigest, O.errorMessage, O.errorComponentStack), Ei(u, p, w), cl(p, u.responseState);
      if (O.pendingTasks > 0) {
        O.rootSegmentID = u.nextSegmentId++, O.completedSegments.length > 0 && u.partialBoundaries.push(O);
        var j = O.id = jn(u.responseState);
        return xa(p, u.responseState, j), Ei(u, p, w), ba(p, u.responseState);
      } else {
        if (O.byteSize > u.progressiveChunkSize)
          return O.rootSegmentID = u.nextSegmentId++, u.completedBoundaries.push(O), xa(p, u.responseState, O.id), Ei(u, p, w), ba(p, u.responseState);
        Yi(p, u.responseState);
        var ae = O.completedSegments;
        if (ae.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var pe = ae[0];
        return zo(u, p, pe), Xi(p, u.responseState);
      }
    }
    function mu(u, p, w) {
      return Os(p, u.responseState, w.id, w.errorDigest, w.errorMessage, w.errorComponentStack);
    }
    function ki(u, p, w) {
      return Et(p, u.responseState, w.formatContext, w.id), zo(u, p, w), tn(p, w.formatContext);
    }
    function wi(u, p, w) {
      for (var O = w.completedSegments, j = 0; j < O.length; j++) {
        var ae = O[j];
        es(u, p, w, ae);
      }
      return O.length = 0, dl(p, u.responseState, w.id, w.rootSegmentID);
    }
    function wd(u, p, w) {
      for (var O = w.completedSegments, j = 0; j < O.length; j++) {
        var ae = O[j];
        if (!es(u, p, w, ae))
          return j++, O.splice(0, j), !1;
      }
      return O.splice(0, j), !0;
    }
    function es(u, p, w, O) {
      if (O.status === Do)
        return !0;
      var j = O.id;
      if (j === -1) {
        var ae = O.id = w.rootSegmentID;
        if (ae === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return ki(u, p, O);
      } else
        return ki(u, p, O), Nc(p, u.responseState, j);
    }
    function $o(u, p) {
      g();
      try {
        var w = u.completedRootSegment;
        w !== null && u.pendingRootTasks === 0 && (zo(u, p, w), u.completedRootSegment = null, ll(p, u.responseState));
        var O = u.clientRenderedBoundaries, j;
        for (j = 0; j < O.length; j++) {
          var ae = O[j];
          mu(u, p, ae);
        }
        O.splice(0, j);
        var pe = u.completedBoundaries;
        for (j = 0; j < pe.length; j++) {
          var ke = pe[j];
          wi(u, p, ke);
        }
        pe.splice(0, j), E(p), g(p);
        var l = u.partialBoundaries;
        for (j = 0; j < l.length; j++) {
          var h = l[j];
          if (!wd(u, p, h)) {
            u.destination = null, j++, l.splice(0, j);
            return;
          }
        }
        l.splice(0, j);
        var S = u.completedBoundaries;
        for (j = 0; j < S.length; j++) {
          var C = S[j];
          wi(u, p, C);
        }
        S.splice(0, j);
      } finally {
        E(p), u.allPendingTasks === 0 && u.pingedTasks.length === 0 && u.clientRenderedBoundaries.length === 0 && u.completedBoundaries.length === 0 && (u.abortableTasks.size !== 0 && a("There was still abortable task at the root when we closed. This is a bug in React."), k(p));
      }
    }
    function Td(u) {
      f(function() {
        return Si(u);
      });
    }
    function gu(u, p) {
      if (u.status === Il) {
        u.status = ca, D(p, u.fatalError);
        return;
      }
      if (u.status !== ca && u.destination === null) {
        u.destination = p;
        try {
          $o(u, p);
        } catch (w) {
          ar(u, w), Hr(u, w);
        }
      }
    }
    function Bo(u, p) {
      try {
        var w = u.abortableTasks;
        w.forEach(function(O) {
          return No(O, u, p);
        }), w.clear(), u.destination !== null && $o(u, u.destination);
      } catch (O) {
        ar(u, O), Hr(u, O);
      }
    }
    function Cd(u, p) {
      return new Promise(function(w, O) {
        var j, ae, pe = new Promise(function(F, ee) {
          ae = F, j = ee;
        });
        function ke() {
          var F = new ReadableStream(
            {
              type: "bytes",
              pull: function(ee) {
                gu(h, ee);
              },
              cancel: function(ee) {
                Bo(h);
              }
            },
            // $FlowFixMe size() methods are not allowed on byte streams.
            {
              highWaterMark: 0
            }
          );
          F.allReady = pe, w(F);
        }
        function l(F) {
          pe.catch(function() {
          }), O(F);
        }
        var h = md(u, Mt(p ? p.identifierPrefix : void 0, p ? p.nonce : void 0, p ? p.bootstrapScriptContent : void 0, p ? p.bootstrapScripts : void 0, p ? p.bootstrapModules : void 0), Dn(p ? p.namespaceURI : void 0), p ? p.progressiveChunkSize : void 0, p ? p.onError : void 0, ae, ke, l, j);
        if (p && p.signal) {
          var S = p.signal, C = function() {
            Bo(h, S.reason), S.removeEventListener("abort", C);
          };
          S.addEventListener("abort", C);
        }
        Td(h);
      });
    }
    Mu.renderToReadableStream = Cd, Mu.version = t;
  }()), Mu;
}
var Ii, Rf;
process.env.NODE_ENV === "production" ? (Ii = CE(), Rf = AE()) : (Ii = PE(), Rf = RE());
ja.version = Ii.version;
ja.renderToString = Ii.renderToString;
ja.renderToStaticMarkup = Ii.renderToStaticMarkup;
ja.renderToNodeStream = Ii.renderToNodeStream;
ja.renderToStaticNodeStream = Ii.renderToStaticNodeStream;
ja.renderToReadableStream = Rf.renderToReadableStream;
const LE = ({ width: e, height: t, runtime: r }) => {
  var xe, Pe;
  const { config: n } = ue.useContext(xt), { sankey: a } = n, o = n == null ? void 0 : n.data[0], [f, s] = ue.useState(0), c = ue.useRef([]), [d, g] = ue.useState(""), y = (le) => {
    g(le);
  }, v = () => {
    g("");
  }, [E, k] = ue.useState(!1);
  ue.useEffect(() => {
    window.innerWidth < 768 && window.innerHeight > window.innerWidth && k(!0);
  }, [window.innerWidth]);
  const M = () => {
    k(!1);
  };
  ue.useEffect(() => {
    var _e;
    let le = 0;
    (_e = c == null ? void 0 : c.current) == null || _e.map(($e) => {
      const Te = $e == null ? void 0 : $e.getBoundingClientRect().width;
      Te > le && (le = Te);
    }), s(le);
  }, [c, a, window.innerWidth]);
  const T = Array.from(new Set((xe = o == null ? void 0 : o.links) == null ? void 0 : xe.flatMap((le) => [le.source, le.target]))), m = {
    nodes: T.map((le) => ({ id: le })),
    links: (Pe = o == null ? void 0 : o.links) == null ? void 0 : Pe.map((le) => ({
      source: T.findIndex((_e) => _e === le.source),
      target: T.findIndex((_e) => _e === le.target),
      value: le.value
    }))
  };
  let D = 5;
  const L = 50, _ = EE().nodeWidth(a.nodeSize.nodeWidth).nodePadding(a.nodePadding).iterations(a.iterations).nodeAlign(yE).extent([
    [a.margin.margin_x, Number(a.margin.margin_y)],
    [e - D - f, n.heights.vertical - L]
  ]), { nodes: N, links: R } = _(m), U = (le) => {
    var Re;
    let _e = 30, $e = 0, Te = "node-value--storynode", ge = !0;
    return (Re = o == null ? void 0 : o.storyNodeText) != null && Re.every((oe) => oe.StoryNode !== le) && (ge = !1, $e = 10, _e = 8, Te = "node-value"), { textPositionHorizontal: _e, textPositionVertical: $e, classStyle: Te, storyNodes: ge };
  }, H = (le) => {
    const _e = m.nodes.find((ge) => ge.id === le), $e = [], Te = [];
    return _e && (R.forEach((ge) => {
      const Re = ge.target, oe = ge.source;
      Re.id === le && $e.push(oe.id);
    }), $e.forEach((ge) => {
      R.forEach((Re) => {
        const oe = Re.target, we = Re.source;
        oe.id === d && we.id === ge && Te.push(Re);
      });
    })), { sourceNodes: $e, activeLinks: Te };
  }, Y = `${((o == null ? void 0 : o.tooltips.find((le) => le.node === d)) || {}).value}`, Z = `${((o == null ? void 0 : o.tooltips.find((le) => le.node === d)) || {}).summary}`, re = ((o == null ? void 0 : o.tooltips.find((le) => le.node === d)) || {}).column1Label, K = ((o == null ? void 0 : o.tooltips.find((le) => le.node === d)) || {}).column2Label, q = ((o == null ? void 0 : o.tooltips.find((le) => le.node === d)) || {}).column1, me = ((o == null ? void 0 : o.tooltips.find((le) => le.node === d)) || {}).column2, W = ({ columnData: le }) => /* @__PURE__ */ i.createElement("ul", null, le == null ? void 0 : le.map((_e, $e) => /* @__PURE__ */ i.createElement("li", { key: $e }, _e.label, ": ", _e.value, " (", _e.additional_info, "%)"))), se = ja.renderToString(/* @__PURE__ */ i.createElement(W, { columnData: q })), ce = ja.renderToString(/* @__PURE__ */ i.createElement(W, { columnData: me })), he = `<div class="sankey-chart__tooltip">
                    <span class="sankey-chart__tooltip--tooltip-header">${d}</span>
                    <span class="sankey-chart__tooltip--tooltip-header">${Y}</span>
                    <div class="divider"></div>
                    <span><strong>Summary: </strong>${Z}</span>
                    <div class="divider"></div>
                      <div class="sankey-chart__tooltip--info-section">
                        <div>
                          <span><strong>${re}<strong></span>
                          ${se}
                        </div>
                        <div>
                          <span><strong>${K}<strong></span>
                          ${ce}
                        </div>
                      </div>
                    </div>`, ie = m.nodes.map((le, _e) => {
    var Be, je;
    let { textPositionHorizontal: $e, textPositionVertical: Te, classStyle: ge, storyNodes: Re } = U(le.id), { sourceNodes: oe } = H(d), we = a.opacity.nodeOpacityDefault, Ce = a.nodeColor.default;
    return d !== le.id && d !== "" && !oe.includes(le.id) && (Ce = a.nodeColor.inactive, we = a.opacity.nodeOpacityInactive), /* @__PURE__ */ i.createElement(rt, { className: "", key: _e }, /* @__PURE__ */ i.createElement(
      "rect",
      {
        height: le.y1 - le.y0 + 2,
        width: _.nodeWidth(),
        x: le.x0,
        y: le.y0 - 1,
        fill: Ce,
        fillOpacity: we,
        rx: a.rxValue,
        "data-tooltip-html": o.tooltips && n.enableTooltips ? he : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${r.uniqueId}-sankey`,
        onClick: () => y(le.id),
        style: { pointerEvents: "visible", cursor: "pointer" }
      }
    ), Re ? /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
      yt,
      {
        x: le.x0 + $e,
        textAnchor: m.nodes.length - 1 === _e ? "end" : "start",
        verticalAnchor: "end",
        y: (le.y1 + le.y0) / 2 - 30,
        fill: a.nodeFontColor,
        fontWeight: "bold",
        style: { pointerEvents: "none" },
        className: "node-text"
      },
      (((Be = o == null ? void 0 : o.storyNodeText) == null ? void 0 : Be.find((qe) => qe.StoryNode === le.id)) || {}).segmentTextBefore
    ), /* @__PURE__ */ i.createElement(yt, { verticalAnchor: "end", className: ge, x: le.x0 + $e, y: (le.y1 + le.y0 + 25) / 2, fill: a.storyNodeFontColor || a.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, typeof le.value == "number" ? le.value.toLocaleString() : le.value), /* @__PURE__ */ i.createElement(
      yt,
      {
        x: le.x0 + $e,
        y: (le.y1 + le.y0) / 2 + 50,
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: m.nodes.length === _e ? "end" : "start",
        style: { pointerEvents: "none" },
        className: "node-text",
        verticalAnchor: "end"
      },
      (((je = o == null ? void 0 : o.storyNodeText) == null ? void 0 : je.find((qe) => qe.StoryNode === le.id)) || {}).segmentTextAfter
    )) : /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("text", { x: le.x0 + $e, y: (le.y1 + le.y0) / 2 + Te, dominantBaseline: "text-before-edge", fill: a.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, /* @__PURE__ */ i.createElement("tspan", { id: le.id, className: "node-id" }, le.id)), /* @__PURE__ */ i.createElement(
      "text",
      {
        x: le.x0 + $e,
        y: (le.y1 + le.y0) / 2 + 30,
        dominantBaseline: "text-before-edge",
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start",
        style: { pointerEvents: "none" }
      },
      /* @__PURE__ */ i.createElement("tspan", { className: ge }, a.nodeValueStyle.textBefore + (typeof le.value == "number" ? le.value.toLocaleString() : le.value) + a.nodeValueStyle.textAfter)
    )));
  }), V = R.map((le, _e) => {
    const Te = TE()(le);
    let ge = a.opacity.LinkOpacityDefault, Re = a.linkColor.default, { activeLinks: oe } = H(d);
    return !oe.includes(le) && d !== "" && (Re = a.linkColor.inactive, ge = a.opacity.LinkOpacityInactive), /* @__PURE__ */ i.createElement("path", { key: _e, d: Te, stroke: Re, fill: "none", strokeOpacity: ge, strokeWidth: le.width + 2 });
  }), J = m.nodes.reduce((le, _e) => Math.max(le, _e.depth), -1), Ae = m.nodes.filter((le) => le.depth === J).map((le, _e) => {
    var Be, je;
    let { textPositionHorizontal: $e, textPositionVertical: Te, classStyle: ge, storyNodes: Re } = U(le.id), { sourceNodes: oe } = H(d), we = a.opacity.nodeOpacityDefault, Ce = a.nodeColor.default;
    return d !== le.id && d !== "" && !oe.includes(le.id) && (Ce = a.nodeColor.inactive, we = a.opacity.nodeOpacityInactive), /* @__PURE__ */ i.createElement(rt, { className: "", key: _e, innerRef: (qe) => c.current[_e] = qe }, /* @__PURE__ */ i.createElement(
      "rect",
      {
        height: le.y1 - le.y0 + 2,
        width: _.nodeWidth(),
        x: le.x0,
        y: le.y0 - 1,
        fill: Ce,
        fillOpacity: we,
        rx: a.rxValue,
        "data-tooltip-html": o.tooltips && n.enableTooltips ? he : null,
        "data-tooltip-id": "tooltip",
        onClick: () => y(le.id),
        style: { pointerEvents: "visible", cursor: "pointer" }
      }
    ), Re ? /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
      yt,
      {
        x: le.x0 + $e,
        textAnchor: m.nodes.length - 1 === _e ? "end" : "start",
        verticalAnchor: "end",
        y: (le.y1 + le.y0) / 2 - 30,
        fill: a.nodeFontColor,
        fontWeight: "bold",
        style: { pointerEvents: "none" },
        className: "node-text"
      },
      (((Be = o == null ? void 0 : o.storyNodeText) == null ? void 0 : Be.find((qe) => qe.StoryNode === le.id)) || {}).segmentTextBefore
    ), /* @__PURE__ */ i.createElement(yt, { verticalAnchor: "end", className: ge, x: le.x0 + $e, y: (le.y1 + le.y0 + 25) / 2, fill: a.storyNodeFontColor || a.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, typeof le.value == "number" ? le.value.toLocaleString() : le.value), /* @__PURE__ */ i.createElement(
      yt,
      {
        x: le.x0 + $e,
        y: (le.y1 + le.y0) / 2 + 50,
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: m.nodes.length === _e ? "end" : "start",
        style: { pointerEvents: "none" },
        className: "node-text",
        verticalAnchor: "end"
      },
      (((je = o == null ? void 0 : o.storyNodeText) == null ? void 0 : je.find((qe) => qe.StoryNode === le.id)) || {}).segmentTextAfter
    )) : /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("text", { x: le.x0 + $e, y: (le.y1 + le.y0) / 2 + Te, dominantBaseline: "text-before-edge", fill: a.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, /* @__PURE__ */ i.createElement("tspan", { id: le.id, className: "node-id" }, le.id)), /* @__PURE__ */ i.createElement(
      "text",
      {
        x: le.x0 + $e,
        y: (le.y1 + le.y0) / 2 + 30,
        dominantBaseline: "text-before-edge",
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start",
        style: { pointerEvents: "none" }
      },
      /* @__PURE__ */ i.createElement("tspan", { className: ge }, a.nodeValueStyle.textBefore + (typeof le.value == "number" ? le.value.toLocaleString() : le.value) + a.nodeValueStyle.textAfter)
    )));
  });
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: "sankey-chart" }, /* @__PURE__ */ i.createElement("svg", { className: "sankey-chart__diagram", width: e, height: Number(n.heights.vertical), style: { overflow: "visible" } }, /* @__PURE__ */ i.createElement(rt, { className: "links" }, V), /* @__PURE__ */ i.createElement(rt, { className: "nodes" }, ie), /* @__PURE__ */ i.createElement(rt, { className: "finalNodes", style: { display: "none" } }, Ae)), /* @__PURE__ */ i.createElement(iy, { id: `cdc-open-viz-tooltip-${r.uniqueId}-sankey`, afterHide: () => v(), events: ["click"], place: "bottom", style: { backgroundColor: "rgba(238, 238, 238, 1)", color: "black", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" } }), E && /* @__PURE__ */ i.createElement("div", { className: "popup" }, /* @__PURE__ */ i.createElement("div", { className: "popup-content" }, /* @__PURE__ */ i.createElement("button", { className: "visually-hidden", onClick: M }, "Select for accessible version."), /* @__PURE__ */ i.createElement("p", null, /* @__PURE__ */ i.createElement("strong", null, "Please change the orientation of your screen or increase the size of your browser to view the diagram better."))))));
};
var DE = {
  top: "top",
  left: "left",
  right: "right",
  bottom: "bottom"
};
const Jn = DE;
function OE(e) {
  var t = e.labelOffset, r = e.labelProps, n = e.orientation, a = e.range, o = e.tickLabelFontSize, f = e.tickLength, s = n === Jn.left || n === Jn.top ? -1 : 1, c, d, g;
  if (n === Jn.top || n === Jn.bottom) {
    var y = n === Jn.bottom && typeof r.fontSize == "number" ? r.fontSize : 0;
    c = (Number(a[0]) + Number(a[a.length - 1])) / 2, d = s * (f + t + o + y);
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
function ME(e) {
  var t = e.hideTicks, r = e.horizontal, n = e.orientation, a = e.tickClassName, o = e.tickComponent, f = e.tickLabelProps, s = e.tickStroke, c = s === void 0 ? "#222" : s, d = e.tickTransform, g = e.ticks, y = e.strokeWidth, v = e.tickLineProps;
  return g.map(function(E) {
    var k, M = E.value, T = E.index, m = E.from, D = E.to, L = E.formattedValue, _ = (k = f[T]) != null ? k : {}, N = Math.max(10, typeof _.fontSize == "number" && _.fontSize || 0), R = D.y + (r && n !== Jn.top ? N : 0);
    return /* @__PURE__ */ i.createElement(rt, {
      key: "visx-tick-" + M + "-" + T,
      className: wn("visx-axis-tick", a),
      transform: d
    }, !t && /* @__PURE__ */ i.createElement(Jt, vs({
      from: m,
      to: D,
      stroke: c,
      strokeWidth: y,
      strokeLinecap: "square"
    }, v)), o ? o(vs({}, _, {
      x: D.x,
      y: R,
      formattedValue: L
    })) : /* @__PURE__ */ i.createElement(yt, vs({
      x: D.x,
      y: R
    }, _), L));
  });
}
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
var am = {
  textAnchor: "middle",
  fontFamily: "Arial",
  fontSize: 10,
  fill: "#222"
};
function _E(e) {
  var t = e.axisFromPoint, r = e.axisLineClassName, n = e.axisToPoint, a = e.hideAxisLine, o = e.hideTicks, f = e.horizontal, s = e.label, c = s === void 0 ? "" : s, d = e.labelClassName, g = e.labelOffset, y = g === void 0 ? 14 : g, v = e.labelProps, E = v === void 0 ? am : v, k = e.orientation, M = k === void 0 ? Jn.bottom : k, T = e.scale, m = e.stroke, D = m === void 0 ? "#222" : m, L = e.strokeDasharray, _ = e.strokeWidth, N = _ === void 0 ? 1 : _, R = e.tickClassName, U = e.tickComponent, H = e.tickLineProps, Y = e.tickLabelProps, Z = e.tickLength, re = Z === void 0 ? 8 : Z, K = e.tickStroke, q = K === void 0 ? "#222" : K, me = e.tickTransform, W = e.ticks, se = e.ticksComponent, ce = se === void 0 ? ME : se, he = pc({}, am, typeof Y == "object" ? Y : null), ie = W.map(function(J) {
    var ne = J.value, Ae = J.index;
    return typeof Y == "function" ? Y(ne, Ae, W) : he;
  }), V = Math.max.apply(Math, [10].concat(ie.map(function(J) {
    return typeof J.fontSize == "number" ? J.fontSize : 0;
  })));
  return /* @__PURE__ */ i.createElement(i.Fragment, null, ce({
    hideTicks: o,
    horizontal: f,
    orientation: M,
    scale: T,
    tickClassName: R,
    tickComponent: U,
    tickLabelProps: ie,
    tickStroke: q,
    tickTransform: me,
    ticks: W,
    strokeWidth: N,
    tickLineProps: H
  }), !a && /* @__PURE__ */ i.createElement(Jt, {
    className: wn("visx-axis-line", r),
    from: t,
    to: n,
    stroke: D,
    strokeWidth: N,
    strokeDasharray: L
  }), c && /* @__PURE__ */ i.createElement(yt, pc({
    className: wn("visx-axis-label", d)
  }, OE({
    labelOffset: y,
    labelProps: E,
    orientation: M,
    range: T.range(),
    tickLabelFontSize: V,
    tickLength: re
  }), E), c));
}
function NE(e, t) {
  t === void 0 && (t = "center");
  var r = e;
  if (t !== "start" && "bandwidth" in r) {
    var n = r.bandwidth();
    return t === "center" && (n /= 2), r.round() && (n = Math.round(n)), function(a) {
      var o = r(a);
      return typeof o == "number" ? o + n : o;
    };
  }
  return e;
}
function FE(e) {
  var t = e;
  return "tickFormat" in t ? t.tickFormat() : Cv;
}
function _u(e, t) {
  var r = e.x, n = e.y;
  return new nl(t ? {
    x: r,
    y: n
  } : {
    x: n,
    y: r
  });
}
function Lf() {
  return Lf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Lf.apply(this, arguments);
}
var Yd = 0;
function zE(e) {
  return e === void 0 && (e = Yd), typeof e == "number" ? {
    start: e,
    end: e
  } : Lf({
    start: Yd,
    end: Yd
  }, e);
}
var $E = ["children", "axisClassName", "hideAxisLine", "hideTicks", "hideZero", "innerRef", "left", "numTicks", "orientation", "rangePadding", "scale", "tickFormat", "tickLength", "tickValues", "top"];
function Df() {
  return Df = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Df.apply(this, arguments);
}
function BE(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Lc(e) {
  var t = e.children, r = t === void 0 ? _E : t, n = e.axisClassName, a = e.hideAxisLine, o = a === void 0 ? !1 : a, f = e.hideTicks, s = f === void 0 ? !1 : f, c = e.hideZero, d = c === void 0 ? !1 : c, g = e.innerRef, y = e.left, v = y === void 0 ? 0 : y, E = e.numTicks, k = E === void 0 ? 10 : E, M = e.orientation, T = M === void 0 ? Jn.bottom : M, m = e.rangePadding, D = m === void 0 ? 0 : m, L = e.scale, _ = e.tickFormat, N = e.tickLength, R = N === void 0 ? 8 : N, U = e.tickValues, H = e.top, Y = H === void 0 ? 0 : H, Z = BE(e, $E), re = _ ?? FE(L), K = T === Jn.left, q = T === Jn.top, me = q || T === Jn.bottom, W = NE(L), se = K || q ? -1 : 1, ce = L.range(), he = zE(D), ie = _u({
    x: Number(ce[0]) + 0.5 - he.start,
    y: 0
  }, me), V = _u({
    x: Number(ce[ce.length - 1]) + 0.5 + he.end,
    y: 0
  }, me), J = (U ?? Tv(L, k)).filter(function(Ae) {
    return !d || Ae !== 0 && Ae !== "0";
  }).map(function(Ae, xe) {
    return {
      value: Ae,
      index: xe
    };
  }), ne = J.map(function(Ae) {
    var xe = Ae.value, Pe = Ae.index, le = wv(W(xe));
    return {
      value: xe,
      index: Pe,
      from: _u({
        x: le,
        y: 0
      }, me),
      to: _u({
        x: le,
        y: R * se
      }, me),
      formattedValue: re(xe, Pe, J)
    };
  });
  return /* @__PURE__ */ i.createElement(rt, {
    className: wn("visx-axis", n),
    innerRef: g,
    top: Y,
    left: v
  }, r(Df({}, Z, {
    axisFromPoint: ie,
    axisToPoint: V,
    hideAxisLine: o,
    hideTicks: s,
    hideZero: d,
    horizontal: me,
    numTicks: k,
    orientation: T,
    rangePadding: D,
    scale: L,
    tickFormat: re,
    tickLength: R,
    tickPosition: W,
    tickSign: se,
    ticks: ne
  })));
}
var IE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
function HE(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var WE = {
  dx: "-0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "end"
};
function VE(e) {
  var t = e.axisClassName, r = e.labelOffset, n = r === void 0 ? 36 : r, a = e.tickLength, o = a === void 0 ? 8 : a, f = e.tickLabelProps, s = HE(e, IE), c = typeof f == "function" ? f : mc({}, WE, f);
  return /* @__PURE__ */ i.createElement(Lc, mc({
    axisClassName: wn("visx-axis-left", t),
    labelOffset: n,
    orientation: Jn.left,
    tickLabelProps: c,
    tickLength: o
  }, s));
}
var jE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
function UE(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var KE = {
  dx: "0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "start"
};
function YE(e) {
  var t = e.axisClassName, r = e.labelOffset, n = r === void 0 ? 36 : r, a = e.tickLength, o = a === void 0 ? 8 : a, f = e.tickLabelProps, s = UE(e, jE), c = typeof f == "function" ? f : gc({}, KE, f);
  return /* @__PURE__ */ i.createElement(Lc, gc({
    axisClassName: wn("visx-axis-right", t),
    labelOffset: n,
    orientation: Jn.right,
    tickLabelProps: c,
    tickLength: o
  }, s));
}
var XE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function yc() {
  return yc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, yc.apply(this, arguments);
}
function qE(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var GE = {
  dy: "-0.75em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function ZE(e) {
  var t = e.axisClassName, r = e.labelOffset, n = r === void 0 ? 8 : r, a = e.tickLength, o = a === void 0 ? 8 : a, f = e.tickLabelProps, s = qE(e, XE), c = typeof f == "function" ? f : yc({}, GE, f);
  return /* @__PURE__ */ i.createElement(Lc, yc({
    axisClassName: wn("visx-axis-top", t),
    labelOffset: n,
    orientation: Jn.top,
    tickLabelProps: c,
    tickLength: o
  }, s));
}
var QE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function vc() {
  return vc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vc.apply(this, arguments);
}
function JE(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var ek = {
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function Hu(e) {
  var t = e.axisClassName, r = e.labelOffset, n = r === void 0 ? 8 : r, a = e.tickLength, o = a === void 0 ? 8 : a, f = e.tickLabelProps, s = JE(e, QE), c = typeof f == "function" ? f : vc({}, ek, f);
  return /* @__PURE__ */ i.createElement(Lc, vc({
    axisClassName: wn("visx-axis-bottom", t),
    labelOffset: n,
    orientation: Jn.bottom,
    tickLabelProps: c,
    tickLength: o
  }, s));
}
const xs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  curveBasis: p0,
  curveBasisClosed: m0,
  curveBasisOpen: g0,
  curveBundle: y0,
  curveCardinal: v0,
  curveCardinalClosed: x0,
  curveCardinalOpen: b0,
  curveCatmullRom: S0,
  curveCatmullRomClosed: E0,
  curveCatmullRomOpen: k0,
  curveLinear: wc,
  curveLinearClosed: lf,
  curveMonotoneX: Iu,
  curveMonotoneY: w0,
  curveNatural: T0,
  curveStep: C0,
  curveStepAfter: P0,
  curveStepBefore: A0
}, Symbol.toStringTag, { value: "Module" })), tk = (e) => {
  var N;
  const { xScale: t, yScale: r, yMax: n, xMax: a, handleTooltipMouseOver: o, handleTooltipMouseOff: f, isDebug: s, children: c } = e;
  let { transformedData: d, config: g, handleLineType: y, parseDate: v, formatDate: E, formatNumber: k, seriesHighlight: M, colorScale: T, rawData: m } = ue.useContext(xt);
  const D = g.brush.active && ((N = g.brush.data) != null && N.length) ? g.brush.data : d;
  if (!D)
    return;
  const L = (R) => (bn(g.xAxis) ? t(v(R[g.xAxis.dataKey], !1)) : t(R[g.xAxis.dataKey])) + (t.bandwidth ? t.bandwidth() / 2 : 0), _ = (R, U, H = void 0) => r(R[H.dataKey]);
  return D && /* @__PURE__ */ i.createElement("svg", null, /* @__PURE__ */ i.createElement(_r, { component: "AreaChart" }, /* @__PURE__ */ i.createElement(rt, { className: "area-chart", key: "area-wrapper", left: Number(g.yAxis.size) }, (g.runtime.areaSeriesKeys || g.series).map((R, U) => {
    let H = D.map((K) => ({
      [g.xAxis.dataKey]: K[g.xAxis.dataKey],
      [R.dataKey]: K[R.dataKey]
    })), Y = xs[R.lineType], Z = g.legend.behavior === "highlight" && M.length > 0 && M.indexOf(R.dataKey) === -1, re = g.legend.behavior === "highlight" || M.length === 0 || M.indexOf(R.dataKey) !== -1;
    return /* @__PURE__ */ i.createElement(i.Fragment, { key: U }, /* @__PURE__ */ i.createElement(
      da,
      {
        data: H,
        x: (K) => L(K),
        y: (K) => _(K, U, R),
        stroke: re ? T ? T(g.runtime.seriesLabels ? g.runtime.seriesLabels[R.dataKey] : R.dataKey) : "#000" : "transparent",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        curve: Y,
        strokeDasharray: R.type ? y(R.type) : 0
      }
    ), /* @__PURE__ */ i.createElement(
      eS,
      {
        key: "area-chart",
        fill: re ? T ? T(g.runtime.seriesLabels ? g.runtime.seriesLabels[R.dataKey] : R.dataKey) : "#000" : "transparent",
        fillOpacity: Z ? 0.25 : 0.5,
        data: H,
        x: (K) => L(K),
        y: (K) => _(K, U, R),
        yScale: r,
        curve: Y,
        strokeDasharray: R.type ? y(R.type) : 0
      }
    ));
  }), /* @__PURE__ */ i.createElement(hr, { width: Number(a), height: Number(n), fill: "transparent", fillOpacity: 0.05, onMouseMove: (R) => o(R, m), onMouseLeave: f }))));
}, nk = ue.memo(tk), xc = {
  Linear: "curveLinear",
  Cardinal: "curveCardinal",
  Natural: "curveNatural",
  "Monotone X": "curveMonotoneX",
  Step: "curveStep"
}, rk = ({ xScale: e, yScale: t, yMax: r, xMax: n, handleTooltipMouseOver: a, handleTooltipMouseOff: o, isDebug: f }) => {
  var M;
  let { transformedData: s, config: c, seriesHighlight: d, colorScale: g, rawData: y } = ue.useContext(xt);
  const v = c.brush.active && ((M = c.brush.data) != null && M.length) ? c.brush.data : s;
  if (!v)
    return;
  const E = (T) => {
    if (c.xAxis.type === "categorical")
      return e(T);
    if (bn(c.xAxis)) {
      let m = new Date(T);
      return e(m);
    }
  }, k = 2;
  return v && /* @__PURE__ */ i.createElement("svg", { height: Number(r) }, /* @__PURE__ */ i.createElement(_r, { component: "AreaChartStacked" }, /* @__PURE__ */ i.createElement(rt, { className: "area-chart", key: "area-wrapper", left: Number(c.yAxis.size) + k / 2, height: Number(r), style: { overflow: "hidden" } }, /* @__PURE__ */ i.createElement(
    oS,
    {
      data: v,
      keys: c.runtime.areaSeriesKeys.map((T) => T.dataKey) || c.series.map((T) => T.dataKey),
      x0: (T) => E(T.data[c.xAxis.dataKey]),
      y0: (T) => Number(t(T[0])),
      y1: (T) => Number(t(T[1])),
      curve: xs[xc[c.stackedAreaChartLineType]]
    },
    ({ stacks: T, path: m }) => T.map((D, L) => {
      let _ = c.legend.behavior === "highlight" && d.length > 0 && d.indexOf(D.key) === -1, N = c.legend.behavior === "highlight" || d.length === 0 || d.indexOf(D.key) !== -1;
      return (
        // prettier-ignore
        /* @__PURE__ */ i.createElement(
          "path",
          {
            key: D.key,
            d: m(D) || "",
            strokeWidth: 2,
            stroke: N ? g ? g(c.runtime.seriesLabels ? c.runtime.seriesLabels[D.key] : D.key) : "#000" : "transparent",
            fillOpacity: _ ? 0.2 : 1,
            fill: N ? g ? g(c.runtime.seriesLabels ? c.runtime.seriesLabels[D.key] : D.key) : "#000" : "transparent"
          }
        )
      );
    })
  ), /* @__PURE__ */ i.createElement(hr, { width: Number(n), height: Number(r), fill: "transparent", onMouseMove: (T) => a(T, y), onMouseLeave: o }))));
}, ak = ue.memo(rk), Rs = () => {
  const { config: e, colorPalettes: t, tableData: r, updateConfig: n, parseDate: a, formatDate: o, setSeriesHighlight: f, seriesHighlight: s } = ue.useContext(xt), { orientation: c } = e, [d, g] = ue.useState(null), y = c === "horizontal", v = 1, E = e.lollipopSize === "large" ? 7 : e.lollipopSize === "medium" ? 6 : 5, k = e.lollipopSize === "large" ? 14 : e.lollipopSize === "medium" ? 12 : 10, M = e.yAxis.labelPlacement === "Below Bar", T = e.yAxis.displayNumbersOnBar, m = e.orientation === "horizontal" ? "yAxis" : "xAxis", D = e.barStyle === "rounded", L = e.visualizationSubType === "stacked", _ = e.tipRounding, N = e.roundingStyle === "standard" ? "8px" : e.roundingStyle === "shallow" ? "5px" : e.roundingStyle === "finger" ? "15px" : "0px", R = e.runtime.seriesKeys.length, U = { small: 16, medium: 18, large: 20 }, H = Object.keys(e.runtime.seriesLabels).length > 1, Z = e.visualizationType === "Bar" && e.legend.behavior === "isolate" && e.legend.axisAlign && (s != null && s.length) ? s : e.runtime.barSeriesKeys || e.runtime.seriesKeys;
  return ue.useEffect(() => {
    c === "horizontal" && !e.yAxis.labelPlacement && n({
      ...e,
      yAxis: {
        ...e,
        labelPlacement: "Below Bar"
      }
    });
  }, [e, n]), ue.useEffect(() => {
    e.isLollipopChart === !1 && e.barHeight < 25 && n({ ...e, barHeight: 25 });
  }, [e.isLollipopChart]), ue.useEffect(() => {
    e.visualizationSubType === "horizontal" && n({
      ...e,
      orientation: "horizontal"
    });
  }, []), ue.useEffect(() => {
    e.barStyle === "lollipop" && !e.isLollipopChart && n({ ...e, isLollipopChart: !0 }), (D || e.barStyle === "flat") && n({ ...e, isLollipopChart: !1 });
  }, [e.barStyle]), {
    generateIconSize: (V) => V < 4 ? 1 : V < 5 ? 4 : V < 10 ? 6 : V < 15 ? 7 : V < 20 || V < 90 ? 8 : 0,
    isHorizontal: y,
    barBorderWidth: v,
    lollipopBarWidth: E,
    lollipopShapeSize: k,
    isLabelBelowBar: M,
    displayNumbersOnBar: T,
    section: m,
    isRounded: D,
    isStacked: L,
    tipRounding: _,
    radius: N,
    stackCount: R,
    barStackedSeriesKeys: Z,
    fontSize: U,
    hasMultipleSeries: H,
    applyRadius: (V) => {
      if (V == null || !D)
        return {};
      let J = {};
      return (L && V + 1 === R || !L) && (J = y ? { borderRadius: `0 ${N}  ${N}  0` } : { borderRadius: `${N} ${N} 0 0` }), !L && V === -1 && (J = y ? { borderRadius: `${N} 0  0 ${N} ` } : { borderRadius: ` 0  0 ${N} ${N}` }), _ === "full" && L && V === 0 && R > 1 && (J = y ? { borderRadius: `${N} 0 0 ${N}` } : { borderRadius: `0 0 ${N} ${N}` }), _ === "full" && (L && V === 0 && R === 1 || !L) && (J = { borderRadius: N }), J;
    },
    updateBars: (V) => {
      if (e.visualizationType !== "Bar" && !y)
        return V;
      const J = [...V];
      let ne;
      const Ae = {
        stacked: e.barHeight,
        lollipop: E
      };
      L ? ne = Ae.stacked : ne = Ae[e.isLollipopChart ? "lollipop" : "stacked"] * R;
      const xe = M ? U[e.fontSize] * 1.2 : 0;
      let Pe = Number(e.barSpace), le = J.length * (ne + xe + Pe);
      return y && (e.heights.horizontal = le), J.map((_e, $e) => {
        let Te = 0;
        return _e.index !== 0 && (Te = (ne + Pe + xe) * $e), { ..._e, y: Te, height: ne };
      });
    },
    assignColorsToValues: (V, J, ne) => {
      if (!e.legend.colorCode && e.series.length > 1)
        return ne;
      const Ae = e.customColors ?? t[e.palette], xe = r.map(($e) => $e[e.legend.colorCode]);
      let Pe = /* @__PURE__ */ new Map(), le = [];
      for (let $e = 0; $e < xe.length; $e++)
        Pe.has(xe[$e]) || Pe.set(xe[$e], Ae[Pe.size % Ae.length]), le.push(Pe.get(xe[$e]));
      for (; le.length < V; )
        le = le.concat(le);
      return le[J];
    },
    getHighlightedBarColorByValue: (V) => {
      const J = e == null ? void 0 : e.highlightedBarValues.find((ne) => {
        if (ne.value)
          return e.xAxis.type === "date" ? o(a(ne.value)) === V : ne.value === V;
      });
      return J != null && J.color ? J.color : "rgba(255, 102, 1)";
    },
    getHighlightedBarByValue: (V) => {
      const J = e == null ? void 0 : e.highlightedBarValues.filter((ne) => {
        if (ne.value)
          return e.xAxis.type === "date" ? o(a(ne.value)) === V : ne.value === V;
      })[0];
      return J != null && J.color ? J : !1;
    },
    getAdditionalColumn: (V, J) => {
      if (!J)
        return "";
      const ne = e.columns, Ae = [];
      let xe = "";
      const Pe = r.find((le) => le[e.xAxis.dataKey] === J) || {};
      return Object.keys(ne).forEach((le) => {
        if (V && e.columns[le].series && e.columns[le].series !== V)
          return;
        const _e = {
          addColPrefix: e.columns[le].prefix,
          addColSuffix: e.columns[le].suffix,
          addColRoundTo: e.columns[le].roundToPlace ? e.columns[le].roundToPlace : "",
          addColCommas: e.columns[le].commas
        }, $e = bm(Pe[e.columns[le].name], "left", !0, e, _e);
        e.columns[le].tooltips && Ae.push([e.columns[le].label, $e]);
      }), Ae.forEach((le) => {
        xe += `${le[0]} : ${le[1]} <br/>`;
      }), xe;
    },
    hoveredBar: d,
    setHoveredBar: g,
    onMouseOverBar: (V, J) => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && J && f([J]), g(V);
    },
    onMouseLeaveBar: () => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && f([]);
    }
  };
}, Ls = ue.createContext(null), ph = ({ xScale: e, barWidth: t = 0, totalBarsInGroup: r = 1, yMax: n, handleTooltipMouseOff: a, handleTooltipMouseOver: o, handleTooltipClick: f, tooltipData: s, showTooltip: c, hideTooltip: d }) => {
  const { parseDate: g, config: y } = ue.useContext(xt), { runtime: v, regions: E, visualizationType: k, orientation: M, xAxis: T } = y, m = e.domain(), D = (N) => {
    let R;
    if (!(N != null && N.fromType) || N.fromType === "Fixed") {
      const U = new Date(N.from), H = g(ts(y.xAxis.dateParseFormat, U)).getTime();
      R = e(H), k === "Bar" && T.type === "date-time" && (R = R - t * r / 2);
    }
    if (N.fromType === "Previous Days") {
      const U = Number(N.from) || 0;
      m.map((re) => ts(y.xAxis.dateParseFormat, new Date(re)));
      const H = N.toType === "Last Date" ? new Date(m[m.length - 1]).getTime() : new Date(N.to), Y = y.xAxis.type === "categorical" ? ts(y.xAxis.dateParseFormat, H) : ts(y.xAxis.dateParseFormat, H), Z = new Date(Y);
      if (R = new Date(Z.setDate(Z.getDate() - Number(U))), T.type === "date") {
        R = new Date(ts(T.dateParseFormat, R)).getTime();
        let re = m[0], K = Math.abs(R - re);
        for (let q = 1; q < m.length; q++) {
          const me = Math.abs(R - m[q]);
          me < K && (K = me, re = m[q]);
        }
        R = re;
      }
      if (T.type === "categorical") {
        let re = m[0], K = Math.abs(new Date(R).getTime() - new Date(re).getTime());
        for (let q = 1; q < m.length; q++) {
          const me = Math.abs(new Date(R).getTime() - new Date(m[q]).getTime());
          me < K && (K = me, re = m[q]);
        }
        R = re;
      }
      R = e(R);
    }
    if (T.type === "categorical" && N.fromType !== "Previous Days" && (R = e(N.from)), k === "Line" || k === "Area Chart") {
      let U = Number(y.yAxis.size);
      e.bandwidth && (U += e.bandwidth() / 2), R = R + U;
    }
    return k === "Bar" && y.xAxis.type === "date-time" && N.fromType === "Previous Days" && (R = R - t * r / 2), R;
  }, L = (N) => {
    let R;
    if (T.type === "categorical" && (R = e(N.to)), bn(T) && ((!(N != null && N.toType) || N.toType === "Fixed") && (R = e(g(N.to).getTime())), (k === "Bar" || y.visualizationType === "Combo") && (R = N.toType !== "Last Date" ? e(g(N.to).getTime()) + t * r : R)), N.toType === "Last Date") {
      const U = m[m.length - 1];
      R = Number(e(U) + ((k === "Bar" || k === "Combo") && y.xAxis.type === "date" ? t * r : 0));
    }
    if (k === "Line" || k === "Area Chart") {
      let U = Number(y.yAxis.size);
      e.bandwidth && (U += e.bandwidth() / 2), R = R + U;
    }
    return k === "Bar" && y.xAxis.type === "date-time" && N.toType !== "Last Date" && (R = R - t * r / 2), (k === "Bar" || k === "Combo") && T.type === "categorical" && (R = R + (k === "Bar" || k === "Combo" ? t * r : 0)), R;
  }, _ = (N, R) => N - R;
  if (E && M === "vertical")
    return E.map((N) => {
      const R = D(N), U = L(N), H = _(U, R);
      if (!R || !U)
        return null;
      const Y = () => /* @__PURE__ */ i.createElement(
        "path",
        {
          stroke: "#333",
          d: `M${R} -5
                L${R} 5
                M${R} 0
                L${U} 0
                M${U} -5
                L${U} 5`
        }
      ), Z = () => /* @__PURE__ */ i.createElement("rect", { x: R, y: 0, width: H, height: n, fill: N.background, opacity: 0.3 });
      return /* @__PURE__ */ i.createElement(rt, { height: 100, fill: "red", className: "regions regions-group--line zzz", key: N.label, onMouseMove: o, onMouseLeave: a, handleTooltipClick: f, tooltipData: JSON.stringify(s), showTooltip: c }, /* @__PURE__ */ i.createElement(Y, null), /* @__PURE__ */ i.createElement(Z, null), /* @__PURE__ */ i.createElement(yt, { x: R + H / 2, y: 5, fill: N.color, verticalAnchor: "start", textAnchor: "middle" }, N.label));
    });
};
function Dc(e) {
  var J, ne;
  const { config: t, index: r, id: n, className: a, background: o, borderColor: f, borderWidth: s, width: c, height: d, x: g, y, onMouseOver: v, onMouseLeave: E, onClick: k, tooltipHtml: M, tooltipId: T, styleOverrides: m, seriesHighlight: D } = e, L = Math.max(0, c), _ = Math.max(0, d), N = t.orientation === "horizontal", R = t.barStyle === "rounded", U = t.visualizationSubType === "stacked", H = t.tipRounding, Y = t.visualizationType === "Combo" && ((ne = (J = t.runtime) == null ? void 0 : J.barSeriesKeys) == null ? void 0 : ne.length), Z = t.runtime.seriesKeys.length, re = t.visualizationType === "Bar" && t.legend.axisAlign && (D != null && D.length) ? D == null ? void 0 : D.length : 0, K = Y || re || Z;
  let q = t.roundingStyle === "standard" ? 8 : t.roundingStyle === "shallow" ? 5 : t.roundingStyle === "finger" ? 15 : 0;
  (q > L / 2 || q > _ / 2) && (q = Math.min(L / 2, _ / 2));
  const me = () => `M${g},${y + _}
      L${g},${y + q}
      Q${g},${y} ${g + q},${y}
      L${g + L - q},${y}
      Q${g + L},${y} ${g + L},${y + q}
      L${g + L},${y + _}
      L${g},${y + _}`, W = () => `M${g},${y + _}
      L${g},${y}
      L${g + L - q},${y}
      Q${g + L},${y} ${g + L},${y + q}
      L${g + L},${y + _ - q}
      Q${g + L},${y + _} ${g + L - q},${y + _}
      L${g},${y + _}`, se = () => `M${g + q},${y + _}
      Q${g},${y + _} ${g},${y + _ - q}
      L${g},${y}
      L${g + L},${y}
      L${g + L},${y + _ - q}
      Q${g + L},${y + _} ${g + L - q},${y + _}
      L${g + q},${y + _}`, ce = () => `M${g + q},${y + _}
      Q${g},${y + _} ${g},${y + _ - q}
      L${g},${y + q}
      Q${g},${y} ${g + q},${y}
      L${g + L},${y}
      L${g + L},${y + _}
      L${g + q},${y + _}`, he = () => `M${g + q},${y + _}
      Q${g},${y + _} ${g},${y + _ - q}
      L${g},${y + q}
      Q${g},${y} ${g + q},${y}
      L${g + L - q},${y}
      Q${g + L},${y} ${g + L},${y + q}
      L${g + L},${y + _ - q}
      Q${g + L},${y + _} ${g + L - q},${y + _}
      L${g + q},${y + _}`, ie = () => `M${g},${y}
      L${g + L},${y}
      L${g + L},${y + _}
      L${g},${y + _}
      L${g},${y}`;
  let V;
  return r == null || !R ? V = ie() : (V = ie(), (U && r + 1 === K || !U) && (V = N ? W() : me()), !U && r === -1 && (V = N ? ce() : se()), H === "full" && U && r === 0 && K > 1 && (V = N ? ce() : se()), H === "full" && (U && r === 0 && K === 1 || !U) && (V = he())), /* @__PURE__ */ i.createElement(
    "path",
    {
      id: n,
      className: a,
      d: V,
      fill: o,
      stroke: f,
      strokeWidth: s,
      onMouseOver: v,
      onMouseLeave: E,
      onClick: k,
      "data-tooltip-html": M,
      "data-tooltip-id": T,
      style: {
        transition: "all 0.2s linear",
        ...m
      }
    }
  );
}
const ik = () => {
  var H;
  const [e, t] = ue.useState(0), { xScale: r, yScale: n, xMax: a, yMax: o } = ue.useContext(Ls), { transformedData: f, colorScale: s, seriesHighlight: c, config: d, formatNumber: g, formatDate: y, parseDate: v, setSharedFilter: E } = ue.useContext(xt), { isHorizontal: k, barBorderWidth: M, applyRadius: T, hoveredBar: m, getAdditionalColumn: D, onMouseLeaveBar: L, onMouseOverBar: _, barStackedSeriesKeys: N } = Rs(), { orientation: R } = d, U = d.brush.active && ((H = d.brush.data) != null && H.length) ? d.brush.data : f;
  return d.visualizationSubType === "stacked" && !k && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(dS, { data: U, keys: N, x: (Y) => Y[d.runtime.xAxis.dataKey], xScale: r, yScale: n, color: s }, (Y) => Y.reverse().map(
    (Z) => Z.bars.map((re) => {
      let K = d.legend.behavior === "highlight" && c.length > 0 && c.indexOf(re.key) === -1, q = d.legend.behavior === "highlight" || c.length === 0 || c.indexOf(re.key) !== -1, me = d.xAxis.type === "date-time" ? d.barThickness * (r.range()[1] - r.range()[0]) : a / Z.bars.length, W = me * (d.xAxis.type === "date-time" ? 1 : d.barThickness || 0.8);
      me * (1 - (d.barThickness || 0.8)) / 2;
      const se = re.bar.data[d.runtime.xAxis.dataKey], ce = d.runtime.xAxis.type === "date" ? y(v(se)) : se, he = g(re.bar ? re.bar.data[re.key] : 0, "left");
      if (!he)
        return;
      const ie = r(d.runtime.xAxis.type === "date" ? v(se) : se) - (d.xAxis.type === "date" && d.xAxis.sortDates ? W / 2 : 0);
      T(Z.index);
      const V = d.runtime.xAxis.label ? `${d.runtime.xAxis.label}: ${ce}` : ce, J = D(m), ne = `${d.runtime.seriesLabels[re.key]}: ${he}`, Ae = `<ul>
                  <li class="tooltip-heading"">${V}</li>
                  <li class="tooltip-body ">${ne}</li>
                  <li class="tooltip-body ">${J}</li>
                    </li></ul>`;
      return t(W), /* @__PURE__ */ i.createElement(rt, { key: `${Z.index}--${re.index}--${R}` }, /* @__PURE__ */ i.createElement(rt, { key: `bar-stack-${Z.index}-${re.index}`, id: `barStack${Z.index}-${re.index}`, className: "stack vertical" }, /* @__PURE__ */ i.createElement(yt, { display: d.labels && q ? "block" : "none", opacity: K ? 0.5 : 1, x: ie + e / 2, y: re.y - 5, fill: "#000", textAnchor: "middle" }, he), Dc({
        config: d,
        seriesHighlight: c,
        index: Z.index,
        background: s(d.runtime.seriesLabels[re.key]),
        borderColor: "#333",
        borderStyle: "solid",
        borderWidth: `${d.barHasBorder === "true" ? M : 0}px`,
        width: W,
        height: re.height,
        x: ie,
        y: re.y,
        onMouseOver: () => _(ce, re.key),
        onMouseLeave: L,
        tooltipHtml: Ae,
        tooltipId: `cdc-open-viz-tooltip-${d.runtime.uniqueId}`,
        onClick: (xe) => {
          xe.preventDefault(), E && (re[d.xAxis.dataKey] = ce, E(d.uid, re));
        },
        styleOverrides: {
          animationDelay: `${Z.index * 0.5}s`,
          transformOrigin: `${W / 2}px ${re.y + re.height}px`,
          opacity: K ? 0.2 : 1,
          display: q ? "block" : "none"
        }
      })));
    })
  )), /* @__PURE__ */ i.createElement(ph, { xScale: r, yMax: o, barWidth: e, totalBarsInGroup: 1 }));
}, ok = () => {
  const { yMax: e, yScale: t, xScale: r } = ue.useContext(Ls), {
    animatedChart: n,
    colorScale: a,
    config: o,
    formatDate: f,
    formatNumber: s,
    getTextWidth: c,
    parseDate: d,
    seriesHighlight: g,
    setSharedFilter: y,
    transformedData: v
  } = ue.useContext(xt), { barBorderWidth: E, displayNumbersOnBar: k, fontSize: M, getAdditionalColumn: T, hoveredBar: m, isHorizontal: D, isLabelBelowBar: L, onMouseLeaveBar: _, onMouseOverBar: N, updateBars: R, barStackedSeriesKeys: U } = Rs(), { orientation: H, visualizationSubType: Y } = o;
  return o.visualizationSubType === "stacked" && D && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(pS, { data: v, keys: U, height: e, y: (Z) => Z[o.runtime.yAxis.dataKey], xScale: r, yScale: t, color: a, offset: "none" }, (Z) => Z.map(
    (re) => R(re.bars).map((K, q) => {
      const me = o.legend.behavior === "highlight" && g.length > 0 && g.indexOf(K.key) === -1, W = o.legend.behavior === "highlight" || g.length === 0 || g.indexOf(K.key) !== -1;
      o.barHeight = Number(o.barHeight);
      const se = Go("#000", a(o.runtime.seriesLabels[K.key])), ce = s(v[K.index][K.key], "left"), he = o.runtime.yAxis.type === "date" ? f(d(v[K.index][o.runtime.originalXAxis.dataKey])) : v[K.index][o.runtime.originalXAxis.dataKey], ie = o.runtime.yAxis.label ? `${o.runtime.yAxis.label}: ${he}` : he, V = c(ce, `normal ${M[o.fontSize]}px sans-serif`), J = T(m), ne = `${o.runtime.seriesLabels[K.key]}: ${ce}`, Ae = `<ul>
                  <li class="tooltip-heading"">${ie}</li>
                  <li class="tooltip-body ">${ne}</li>
                  <li class="tooltip-body ">${J}</li>
                    </li></ul>`;
      return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(rt, { key: q, id: `barStack${re.index}-${K.index}`, className: "stack horizontal" }, Dc({
        config: o,
        seriesHighlight: g,
        index: re.index,
        className: `animated-chart group ${n ? "animated" : ""}`,
        background: a(o.runtime.seriesLabels[K.key]),
        borderColor: "#333",
        borderStyle: "solid",
        borderWidth: `${o.barHasBorder === "true" ? E : 0}px`,
        width: K.width,
        height: K.height,
        x: K.x,
        y: K.y,
        onMouseOver: () => N(he, K.key),
        onMouseLeave: _,
        tooltipHtml: Ae,
        tooltipId: `cdc-open-viz-tooltip-${o.runtime.uniqueId}`,
        onClick: (xe) => {
          xe.preventDefault(), y && (K[o.xAxis.dataKey] = ce, y(o.uid, K));
        },
        styleOverrides: {
          animationDelay: `${re.index * 0.5}s`,
          transformOrigin: `${K.x}px 0`,
          opacity: me ? 0.2 : 1,
          display: W ? "block" : "none"
        }
      }), H === "horizontal" && Y === "stacked" && L && re.index === 0 && !o.yAxis.hideLabel && /* @__PURE__ */ i.createElement(
        yt,
        {
          x: `${K.x + (o.isLollipopChart ? 15 : 5)}`,
          y: K.y + K.height * 1.2,
          fill: "#000000",
          textAnchor: "start",
          verticalAnchor: "start"
        },
        he
      ), k && V < K.width && /* @__PURE__ */ i.createElement(
        yt,
        {
          display: W ? "block" : "none",
          x: K.x + re.bars[K.index].width / 2,
          y: K.y + K.height / 2,
          fill: se,
          textAnchor: "middle",
          verticalAnchor: "middle"
        },
        ce
      )));
    })
  )));
}, lk = () => {
  var V;
  const { xScale: e, yScale: t, xMax: r, yMax: n, seriesScale: a } = ue.useContext(Ls), [o, f] = ue.useState(0), [s, c] = ue.useState(0), {
    applyRadius: d,
    assignColorsToValues: g,
    barBorderWidth: y,
    generateIconSize: v,
    getAdditionalColumn: E,
    getHighlightedBarByValue: k,
    getHighlightedBarColorByValue: M,
    lollipopBarWidth: T,
    lollipopShapeSize: m,
    onMouseLeaveBar: D,
    onMouseOverBar: L,
    section: _
  } = Rs(), {
    colorScale: N,
    config: R,
    dashboardConfig: U,
    formatDate: H,
    formatNumber: Y,
    getXAxisData: Z,
    getYAxisData: re,
    isNumber: K,
    parseDate: q,
    seriesHighlight: me,
    setSharedFilter: W,
    transformedData: se
  } = ue.useContext(xt), { HighLightedBarUtils: ce } = Ac(R), he = R.brush.active && ((V = R.brush.data) != null && V.length) ? R.brush.data : se, ie = (J, ne) => {
    var Pe;
    let Ae = null;
    const xe = v(ne);
    return (Pe = R.suppressedData) == null || Pe.forEach((le) => {
      J.key === le.column && String(J.value) === String(le.value) && le.icon && (Ae = /* @__PURE__ */ i.createElement(dh, { color: "#000", size: xe }));
    }), Ae;
  };
  return R.visualizationSubType !== "stacked" && (R.visualizationType === "Bar" || R.visualizationType === "Combo") && R.orientation === "vertical" && /* @__PURE__ */ i.createElement(rt, null, /* @__PURE__ */ i.createElement(
    Rg,
    {
      data: he,
      keys: R.runtime.barSeriesKeys || R.runtime.seriesKeys,
      height: n,
      x0: (J) => {
        const ne = J[R.runtime.originalXAxis.dataKey];
        return bn(R.runtime.xAxis) ? q(ne) : ne;
      },
      x0Scale: e,
      x1Scale: a,
      yScale: t,
      color: () => ""
    },
    (J) => J.map((ne, Ae) => /* @__PURE__ */ i.createElement(rt, { className: `bar-group-${ne.index}-${ne.x0}--${Ae} ${R.orientation}`, key: `bar-group-${ne.index}-${ne.x0}--${Ae}`, id: `bar-group-${ne.index}-${ne.x0}--${Ae}`, left: ne.x0 }, ne.bars.map((xe, Pe) => {
      const le = R.useLogScale ? 0.1 : 0, _e = 20;
      let $e = R.highlightedBarValues.map((At) => At.value).filter((At) => At !== void 0);
      $e = R.xAxis.type === "date" ? ce.formatDates($e) : $e;
      let Te = R.legend.behavior === "highlight" && me.length > 0 && me.indexOf(xe.key) === -1, ge = R.legend.behavior === "highlight" || me.length === 0 || me.indexOf(xe.key) !== -1, Re = Math.abs(t(xe.value) - t(le)), oe = xe.value >= 0 && K(xe.value) ? xe.y : t(0);
      const we = xe.value >= 0 && K(xe.value) ? t(le) - _e : t(0), Ce = R.suppressedData.some((At) => xe.key === At.column && String(xe.value) === String(At.value)) ? we : oe;
      let Be = a.range()[1], je = R.isLollipopChart ? T : Be / ne.bars.length, qe = xe.x + (R.isLollipopChart ? (Be / ne.bars.length - T) / 2 : 0) - (R.xAxis.type === "date-time" ? Be / 2 : 0);
      f(je), c(ne.bars.length);
      let ot = Y(xe.value, "left"), Je = R.runtime[_].type === "date" ? H(q(he[ne.index][R.runtime.originalXAxis.dataKey])) : he[ne.index][R.runtime.originalXAxis.dataKey];
      const it = xe.value < 0 ? -1 : Pe, Xe = E(xe.key, he[ne.index][R.runtime.originalXAxis.dataKey]);
      let Ie = R.runtime.xAxis.label ? `${R.runtime.xAxis.label}: ${Je}` : Je;
      const Me = `${R.runtime.seriesLabels[xe.key]}: ${ot}`, ut = `<ul>
                  <li class="tooltip-heading">${Ie}</li>
                  <li class="tooltip-body ">${Me}</li>
                  ${Xe ? '<li class="tooltip-body ">' + Xe + "</li>" : ""}
                    </li></ul>`;
      let Ve = "#000000";
      Ve = ce.checkFontColor(ot, $e, Ve);
      let Ge = R.runtime.seriesLabels && R.runtime.seriesLabels[xe.key] ? N(R.runtime.seriesLabels[xe.key]) : N(xe.key);
      Ge = g(J.length, ne.index, Ge);
      const lt = R.isLollipopChart && R.lollipopColorStyle === "regular", ct = R.isLollipopChart && R.lollipopColorStyle === "two-tone", wt = $e == null ? void 0 : $e.includes(Je), en = M(Je), an = k(Je), Lt = wt ? en : R.barHasBorder === "true" ? "#000" : "transparent", $t = wt ? an.borderWidth : R.isLollipopChart ? 0 : R.barHasBorder === "true" ? y : 0, Ot = R.suppressedData.some((At) => xe.key === At.column && xe.value === At.value) ? "" : ot;
      let Gt = R.suppressedData.some((At) => xe.key === At.column && String(xe.value) === String(At.value)) ? _e : Re;
      const un = R.suppressedData.some((At) => xe.key === At.column && xe.value === At.value) ? "none" : "block", Ne = (At, Zt) => {
        var bt;
        let Ht = At, Sn = Zt || "#f2f2f2";
        if (U && ((bt = U.dashboard.sharedFilters) == null ? void 0 : bt.length) !== 0) {
          const { sharedFilters: mn } = U.dashboard;
          return Ht = mn.map((Dt) => Dt.setBy === R.uid ? Dt.resetLabel === Dt.active || Dt.active === se[ne.index][R.xAxis.dataKey] ? N(R.runtime.seriesLabels[xe.key]) : Sn : N(R.runtime.seriesLabels[xe.key]))[0], lt && (Ht = At), ct && (Ht = bs(At).brighten(1)), wt && (Ht = "transparent"), Ht;
        }
        return ct && (Ht = bs(At).brighten(1)), wt && (Ht = "transparent"), Ht;
      };
      return /* @__PURE__ */ i.createElement(rt, { key: `${ne.index}--${Pe}` }, /* @__PURE__ */ i.createElement(rt, { key: `bar-sub-group-${ne.index}-${ne.x0}-${Ce}--${Pe}` }, Dc({
        config: R,
        index: it,
        id: `barGroup${ne.index}`,
        background: Ne(N(R.runtime.seriesLabels[xe.key])),
        borderColor: Lt,
        borderStyle: "solid",
        borderWidth: `${$t}px`,
        width: je,
        height: Gt,
        x: qe,
        y: Ce,
        onMouseOver: () => L(Je, xe.key),
        onMouseLeave: D,
        tooltipHtml: ut,
        tooltipId: `cdc-open-viz-tooltip-${R.runtime.uniqueId}`,
        onClick: (At) => {
          At.preventDefault(), W && (xe[R.xAxis.dataKey] = Je, W(R.uid, xe));
        },
        styleOverrides: {
          transformOrigin: `0 ${Ce + Gt}px`,
          opacity: Te ? 0.2 : 1,
          display: ge ? "block" : "none",
          cursor: U ? "pointer" : "default"
        }
      }), /* @__PURE__ */ i.createElement(
        "g",
        {
          transform: `translate(${qe},${n - _e})`,
          onMouseOver: () => L(Je, xe.key),
          onMouseLeave: D,
          opacity: Te ? 0.2 : 1,
          display: ge ? "block" : "none",
          "data-tooltip-html": ut,
          "data-tooltip-id": `cdc-open-viz-tooltip-${R.runtime.uniqueId}`,
          onClick: (At) => {
            At.preventDefault(), W && (xe[R.xAxis.dataKey] = Je, W(R.uid, xe));
          }
        },
        ie(xe, je)
      ), /* @__PURE__ */ i.createElement(
        yt,
        {
          display: R.labels && ge ? "block" : "none",
          opacity: Te ? 0.5 : 1,
          x: qe + je / 2,
          y: Ce - 5,
          fill: Ve,
          textAnchor: "middle"
        },
        Ot
      ), R.isLollipopChart && R.lollipopShape === "circle" && /* @__PURE__ */ i.createElement(
        "circle",
        {
          display: un,
          cx: qe + m / 3.5,
          cy: xe.y,
          r: m / 2,
          fill: Ge,
          key: `circle--${xe.index}`,
          "data-tooltip-html": ut,
          "data-tooltip-id": `cdc-open-viz-tooltip-${R.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), R.isLollipopChart && R.lollipopShape === "square" && /* @__PURE__ */ i.createElement(
        "rect",
        {
          display: un,
          x: qe - T / 2,
          y: Ce,
          width: m,
          height: m,
          fill: Ge,
          key: `circle--${xe.index}`,
          "data-tooltip-html": ut,
          "data-tooltip-id": `cdc-open-viz-tooltip-${R.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ i.createElement("animate", { attributeName: "height", values: `0, ${m}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(R.confidenceKeys).length > 0 ? he.map((J) => {
    let ne, Ae, xe, Pe, le = 5;
    return ne = e(Z(J)) + (R.xAxis.type !== "date" || R.xAxis.type !== "date-time" ? a.range()[1] / 2 : 0), xe = t(re(J, R.confidenceKeys.lower)), Pe = t(re(J, R.confidenceKeys.upper)), /* @__PURE__ */ i.createElement(
      "path",
      {
        key: `confidence-interval-v-${Ae}-${J[R.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${ne - le} ${xe}
                    L${ne + le} ${xe}
                    M${ne} ${xe}
                    L${ne} ${Pe}
                    M${ne - le} ${Pe}
                    L${ne + le} ${Pe}`
      }
    );
  }) : "", /* @__PURE__ */ i.createElement(ph, { xScale: e, yMax: n, barWidth: o, totalBarsInGroup: s }));
}, sk = () => {
  const { xScale: e, yScale: t, yMax: r, seriesScale: n } = ue.useContext(Ls), { transformedData: a, colorScale: o, seriesHighlight: f, config: s, formatNumber: c, formatDate: d, parseDate: g, setSharedFilter: y, isNumber: v, getTextWidth: E, getYAxisData: k, getXAxisData: M } = ue.useContext(xt), {
    isHorizontal: T,
    barBorderWidth: m,
    updateBars: D,
    assignColorsToValues: L,
    section: _,
    fontSize: N,
    isLabelBelowBar: R,
    displayNumbersOnBar: U,
    lollipopBarWidth: H,
    lollipopShapeSize: Y,
    getHighlightedBarColorByValue: Z,
    getHighlightedBarByValue: re,
    generateIconSize: K,
    getAdditionalColumn: q,
    hoveredBar: me,
    onMouseLeaveBar: W,
    onMouseOverBar: se
  } = Rs(), { HighLightedBarUtils: ce } = Ac(s), he = (ie, V) => {
    var Ae;
    let J = null;
    const ne = K(V);
    return (Ae = s.suppressedData) == null || Ae.forEach((xe) => {
      ie.key === xe.column && String(ie.value) === String(xe.value) && xe.icon && (J = /* @__PURE__ */ i.createElement(dh, { color: "#000", size: ne }));
    }), J;
  };
  return s.visualizationSubType !== "stacked" && s.visualizationType === "Bar" && s.orientation === "horizontal" && /* @__PURE__ */ i.createElement(rt, null, /* @__PURE__ */ i.createElement(
    Rg,
    {
      data: a,
      keys: s.runtime.barSeriesKeys || s.runtime.seriesKeys,
      height: r,
      x0: (ie) => ie[s.runtime.originalXAxis.dataKey],
      x0Scale: t,
      x1Scale: n,
      yScale: e,
      color: () => ""
    },
    (ie) => D(ie).map((V, J) => /* @__PURE__ */ i.createElement(rt, { className: `bar-group-${V.index}-${V.x0}--${J} ${s.orientation}`, key: `bar-group-${V.index}-${V.x0}--${J}`, id: `bar-group-${V.index}-${V.x0}--${J}`, top: V.y }, V.bars.map((ne, Ae) => {
      const xe = s.useLogScale ? 0.1 : 0;
      let Pe = s.highlightedBarValues.map((Dt) => Dt.value).filter((Dt) => Dt !== void 0);
      Pe = s.xAxis.type === "date" ? ce.formatDates(Pe) : Pe;
      let le = s.legend.behavior === "highlight" && f.length > 0 && f.indexOf(ne.key) === -1, _e = s.legend.behavior === "highlight" || f.length === 0 || f.indexOf(ne.key) !== -1, $e = s.barHeight, Te = parseInt(s.isLollipopChart ? H : $e);
      isNaN(Te) && (Te = 25);
      let ge = ne.value >= 0 && v(ne.value) ? ne.y : t(xe);
      const Re = ne.value < 0 ? Math.abs(e(ne.value)) : e(xe), oe = Math.abs(e(ne.value) - e(xe)), we = 25, Ce = ne.value >= 0 && v(ne.value);
      let Be = ne.value && s.suppressedData.some(({ column: Dt, value: jt }) => ne.key === Dt && ne.value === jt) ? we : oe;
      const je = Ce ? e(0) : e(xe) - we, qe = s.suppressedData.some((Dt) => ne.key === Dt.column && String(ne.value) === String(Dt.value)) ? je : Re, ot = c(ne.value, "left"), Je = s.runtime[_].type === "date" ? d(g(a[V.index][s.runtime.originalXAxis.dataKey])) : a[V.index][s.runtime.originalXAxis.dataKey], it = Ce ? "above" : "below", Xe = s.suppressedData.some((Dt) => ne.key === Dt.column && ne.value === Dt.value) ? "" : ot;
      let Me = E(Je, `normal ${N[s.fontSize]}px sans-serif`) < oe - 5, ut = Me ? "end" : "start", Ve = "start", Ge = Me ? -5 : 5, lt = 10;
      it === "below" && (ut = Me ? "start" : "end", Ge = Me ? 5 : -5, s.isLollipopChart && (Ve = "end", lt = -10));
      const ct = ne.value < 0 ? -1 : Ae;
      let wt = s.runtime.yAxis.label ? `${s.runtime.yAxis.label}: ${Je}` : Je;
      const en = q(me), an = `${s.runtime.seriesLabels[ne.key]}: ${ot}`, Lt = `<ul>
                  <li class="tooltip-heading"">${wt}</li>
                  <li class="tooltip-body ">${an}</li>
                  <li class="tooltip-body ">${en}</li>
                    </li></ul>`;
      let $t = "#000000";
      $t = ce.checkFontColor(ot, Pe, $t);
      let Ot = s.runtime.seriesLabels && s.runtime.seriesLabels[ne.key] ? o(s.runtime.seriesLabels[ne.key]) : o(ne.key);
      Ot = L(ie.length, V.index, Ot);
      const Gt = s.isLollipopChart && s.lollipopColorStyle === "regular", un = s.isLollipopChart && s.lollipopColorStyle === "two-tone", Ne = Pe == null ? void 0 : Pe.includes(Je), At = Z(Je), Zt = re(Je), Ht = Ne ? At : s.barHasBorder === "true" ? "#000" : "transparent", Sn = Ne ? Zt.borderWidth : s.isLollipopChart ? 0 : s.barHasBorder === "true" ? m : 0, bt = s.suppressedData.some((Dt) => ne.key === Dt.column && ne.value === Dt.value) ? "none" : "block";
      Ot && $t && Me && ($t = Go("#000", Ot));
      const mn = () => Gt ? Ot : un ? bs(Ot).brighten(1) : Ne ? "transparent" : Ot;
      return /* @__PURE__ */ i.createElement(rt, { key: `${V.index}--${Ae}` }, /* @__PURE__ */ i.createElement(rt, { key: `bar-sub-group-${V.index}-${V.x0}-${ge}--${Ae}` }, Dc({
        config: s,
        index: ct,
        id: `barGroup${V.index}`,
        background: mn(),
        borderColor: Ht,
        borderStyle: "solid",
        borderWidth: `${Sn}px`,
        width: Be,
        height: Te,
        x: qe,
        y: $e * ne.index,
        onMouseOver: () => se(Je, ne.key),
        onMouseLeave: W,
        tooltipHtml: Lt,
        tooltipId: `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
        onClick: (Dt) => {
          Dt.preventDefault(), y && (ne[s.xAxis.dataKey] = ot, y(s.uid, ne));
        },
        styleOverrides: {
          transformOrigin: `0 ${ge + $e}px`,
          opacity: le ? 0.2 : 1,
          display: _e ? "block" : "none"
        }
      }), /* @__PURE__ */ i.createElement(
        "g",
        {
          transform: `translate(${qe},${$e * ne.index})`,
          onMouseOver: () => se(Je, ne.key),
          onMouseLeave: W,
          opacity: le ? 0.2 : 1,
          display: _e ? "block" : "none",
          "data-tooltip-html": Lt,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          onClick: (Dt) => {
            Dt.preventDefault(), y && (ne[s.xAxis.dataKey] = ot, y(s.uid, ne));
          }
        },
        he(ne, Be)
      ), !s.isLollipopChart && U && /* @__PURE__ */ i.createElement(
        yt,
        {
          display: _e ? "block" : "none",
          x: ne.y,
          y: s.barHeight / 2 + s.barHeight * ne.index,
          fill: $t,
          dx: Ge,
          verticalAnchor: "middle",
          textAnchor: ut
        },
        Xe
      ), s.isLollipopChart && U && /* @__PURE__ */ i.createElement(
        yt,
        {
          display: _e ? "block" : "none",
          x: ne.y,
          y: 0,
          fill: "#000000",
          dx: lt,
          textAnchor: Ve,
          verticalAnchor: "middle",
          fontWeight: "normal"
        },
        Xe
      ), R && !s.yAxis.hideLabel && /* @__PURE__ */ i.createElement(yt, { x: s.yAxis.hideAxis ? 0 : 5, y: V.height, dy: 4, verticalAnchor: "start", textAnchor: "start" }, s.runtime.yAxis.type === "date" ? d(g(a[V.index][s.runtime.originalXAxis.dataKey])) : T ? a[V.index][s.runtime.originalXAxis.dataKey] : c(a[V.index][s.runtime.originalXAxis.dataKey])), s.isLollipopChart && s.lollipopShape === "circle" && /* @__PURE__ */ i.createElement(
        "circle",
        {
          display: bt,
          cx: ne.y,
          cy: $e * ne.index + H / 2,
          r: Y / 2,
          fill: Ot,
          key: `circle--${ne.index}`,
          "data-tooltip-html": Lt,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), s.isLollipopChart && s.lollipopShape === "square" && /* @__PURE__ */ i.createElement(
        "rect",
        {
          display: bt,
          x: ne.y > 10 ? ne.y - Y / 2 : 0,
          y: 0 - H / 2,
          width: Y,
          height: Y,
          fill: Ot,
          key: `circle--${ne.index}`,
          "data-tooltip-html": Lt,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ i.createElement("animate", { attributeName: "height", values: `0, ${Y}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(s.confidenceKeys).length > 0 ? a.map((ie) => {
    let V, J, ne, Ae = 5;
    return V = t(M(ie)) - 0.75 * s.barHeight, J = e(k(ie, s.confidenceKeys.upper)), ne = e(k(ie, s.confidenceKeys.lower)), /* @__PURE__ */ i.createElement(
      "path",
      {
        key: `confidence-interval-h-${V}-${ie[s.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${ne} ${V - Ae}
                    L${ne} ${V + Ae}
                    M${ne} ${V}
                    L${J} ${V}
                    M${J} ${V - Ae}
                    L${J} ${V + Ae} `
      }
    );
  }) : "");
}, Nu = {
  Vertical: lk,
  Horizontal: sk,
  StackedVertical: ik,
  StackedHorizontal: ok
}, uk = ({ xScale: e, yScale: t, seriesScale: r, xMax: n, yMax: a, handleTooltipMouseOver: o, handleTooltipMouseOff: f, handleTooltipClick: s }) => {
  const { transformedData: c, config: d } = ue.useContext(xt), g = {
    xScale: e,
    yScale: t,
    xMax: n,
    yMax: a,
    seriesScale: r
  };
  return /* @__PURE__ */ i.createElement(_r, { component: "BarChart" }, /* @__PURE__ */ i.createElement(Ls.Provider, { value: g }, /* @__PURE__ */ i.createElement(rt, { left: parseFloat(d.runtime.yAxis.size) }, /* @__PURE__ */ i.createElement(Nu.StackedVertical, null), /* @__PURE__ */ i.createElement(Nu.StackedHorizontal, null), /* @__PURE__ */ i.createElement(Nu.Vertical, null), /* @__PURE__ */ i.createElement(Nu.Horizontal, null), /* @__PURE__ */ i.createElement(hr, { key: "bars", display: d.tooltips.singleSeries ? "none" : "block", width: Number(n), height: Number(a), fill: "transparent", fillOpacity: 0.05, onMouseMove: (y) => o(y, c), onMouseOut: f, onClick: (y) => s(y, c) }))));
};
function za() {
  return za = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, za.apply(this, arguments);
}
function Di(e) {
  var t = e.x1, r = e.x2, n = e.y1, a = e.y2;
  return {
    x1: n,
    x2: a,
    y1: t,
    y2: r
  };
}
function oy(e) {
  var t = e.left, r = t === void 0 ? 0 : t, n = e.top, a = n === void 0 ? 0 : n, o = e.className, f = e.max, s = e.min, c = e.firstQuartile, d = e.thirdQuartile, g = e.median, y = e.boxWidth, v = y === void 0 ? 10 : y, E = e.fill, k = e.fillOpacity, M = e.stroke, T = e.strokeWidth, m = e.rx, D = m === void 0 ? 2 : m, L = e.ry, _ = L === void 0 ? 2 : L, N = e.valueScale, R = e.outliers, U = R === void 0 ? [] : R, H = e.horizontal, Y = e.medianProps, Z = Y === void 0 ? {} : Y, re = e.maxProps, K = re === void 0 ? {} : re, q = e.minProps, me = q === void 0 ? {} : q, W = e.boxProps, se = W === void 0 ? {} : W, ce = e.outlierProps, he = ce === void 0 ? {} : ce, ie = e.container, V = ie === void 0 ? !1 : ie, J = e.containerProps, ne = J === void 0 ? {} : J, Ae = e.children, xe = H ? a : r, Pe = xe + (v || 0) / 2, le = N.range(), _e = N(s ?? 0), $e = N(c ?? 0), Te = N(g ?? 0), ge = N(d ?? 0), Re = N(f ?? 0), oe = {
    valueRange: le,
    center: Pe,
    offset: xe,
    boxWidth: v,
    max: {
      x1: Pe - (v || 0) / 4,
      x2: Pe + (v || 0) / 4,
      y1: Re,
      y2: Re
    },
    maxToThird: {
      x1: Pe,
      x2: Pe,
      y1: Re,
      y2: ge
    },
    median: {
      x1: xe,
      x2: xe + (v || 0),
      y1: Te,
      y2: Te
    },
    minToFirst: {
      x1: Pe,
      x2: Pe,
      y1: $e,
      y2: _e
    },
    min: {
      x1: Pe - (v || 0) / 4,
      x2: Pe + (v || 0) / 4,
      y1: _e,
      y2: _e
    },
    box: {
      x1: xe,
      x2: v || 0,
      y1: ge,
      y2: Math.abs(ge - $e)
    },
    container: {
      x1: xe,
      x2: v || 0,
      y1: Math.min.apply(Math, le),
      y2: Math.abs(le[0] - le[1])
    }
  };
  return H && (oe.max = Di(oe.max), oe.maxToThird = Di(oe.maxToThird), oe.box.y1 = $e, oe.box = Di(oe.box), oe.median = Di(oe.median), oe.minToFirst = Di(oe.minToFirst), oe.min = Di(oe.min), oe.container = Di(oe.container), oe.container.y1 = Math.min.apply(Math, le)), Ae ? /* @__PURE__ */ i.createElement(i.Fragment, null, Ae(oe)) : /* @__PURE__ */ i.createElement(rt, {
    className: wn("visx-boxplot", o)
  }, U.map(function(we, Ce) {
    var Be = H ? N(we) : Pe, je = H ? Pe : N(we);
    return /* @__PURE__ */ i.createElement("circle", za({
      key: "visx-boxplot-outlier-" + Ce,
      className: "visx-boxplot-outlier",
      cx: Be,
      cy: je,
      r: 4,
      stroke: M,
      strokeWidth: T,
      fill: E,
      fillOpacity: k
    }, he));
  }), /* @__PURE__ */ i.createElement("line", za({
    className: "visx-boxplot-max",
    x1: oe.max.x1,
    y1: oe.max.y1,
    x2: oe.max.x2,
    y2: oe.max.y2,
    stroke: M,
    strokeWidth: T
  }, K)), /* @__PURE__ */ i.createElement("line", {
    className: "visx-boxplot-max-to-third",
    x1: oe.maxToThird.x1,
    y1: oe.maxToThird.y1,
    x2: oe.maxToThird.x2,
    y2: oe.maxToThird.y2,
    stroke: M,
    strokeWidth: T
  }), /* @__PURE__ */ i.createElement("rect", za({
    className: "visx-boxplot-box",
    x: oe.box.x1,
    y: oe.box.y1,
    width: oe.box.x2,
    height: oe.box.y2,
    stroke: M,
    strokeWidth: T,
    fill: E,
    fillOpacity: k,
    rx: D,
    ry: _
  }, se)), /* @__PURE__ */ i.createElement("line", za({
    className: "visx-boxplot-median",
    x1: oe.median.x1,
    y1: oe.median.y1,
    x2: oe.median.x2,
    y2: oe.median.y2,
    stroke: M,
    strokeWidth: T
  }, Z)), /* @__PURE__ */ i.createElement("line", {
    className: "visx-boxplot-min-to-first",
    x1: oe.minToFirst.x1,
    y1: oe.minToFirst.y1,
    x2: oe.minToFirst.x2,
    y2: oe.minToFirst.y2,
    stroke: M,
    strokeWidth: T
  }), /* @__PURE__ */ i.createElement("line", za({
    className: "visx-boxplot-min",
    x1: oe.min.x1,
    y1: oe.min.y1,
    x2: oe.min.x2,
    y2: oe.min.y2,
    stroke: M,
    strokeWidth: T
  }, me)), V && /* @__PURE__ */ i.createElement("rect", za({
    x: oe.container.x1,
    y: oe.container.y1,
    width: oe.container.x2,
    height: oe.container.y2,
    fillOpacity: "0"
  }, ne)));
}
oy.propTypes = {
  max: fe.number,
  min: fe.number,
  firstQuartile: fe.number,
  thirdQuartile: fe.number,
  median: fe.number,
  boxWidth: fe.number,
  fill: fe.string,
  fillOpacity: fe.oneOfType([fe.number, fe.string]),
  stroke: fe.string,
  strokeWidth: fe.oneOfType([fe.number, fe.string]),
  rx: fe.number,
  ry: fe.number,
  outliers: fe.arrayOf(fe.number),
  container: fe.bool,
  children: fe.func
};
const ck = ({ xScale: e, yScale: t }) => {
  const { config: r, setConfig: n } = ue.useContext(xt), { boxplot: a } = r;
  ue.useEffect(() => {
    r.legend.hide === !1 && n({
      ...r,
      legend: {
        ...r.legend,
        hide: !0
      }
    });
  }, []);
  const o = `cdc-open-viz-tooltip-${r.runtime.uniqueId}`, f = (T) => `
      <strong>${T.columnCategory}</strong></br>
      ${a.labels.q1}: ${T.columnFirstQuartile}<br/>
      ${a.labels.q3}: ${T.columnThirdQuartile}<br/>
      ${a.labels.iqr}: ${T.columnIqr}<br/>
      ${a.labels.median}: ${T.columnMedian}
    `, s = (T) => Number(T.columnMax), c = (T) => Number(T.columnMin), d = (T) => Number(T.columnMedian), g = (T) => Number(T.columnThirdQuartile), y = (T) => Number(T.columnFirstQuartile), v = 0.5, E = e.bandwidth(), k = Math.min(40, E), M = or[r == null ? void 0 : r.palette][0] ? or[r == null ? void 0 : r.palette][0] : "#000";
  return /* @__PURE__ */ i.createElement(_r, { component: "BoxPlot" }, /* @__PURE__ */ i.createElement(rt, { className: "boxplot", key: "boxplot-group" }, a.plots.map((T, m) => {
    const D = E - k, L = 4;
    return /* @__PURE__ */ i.createElement(rt, { key: `boxplotplot-${m}` }, a.plotNonOutlierValues && T.nonOutlierValues.map((_, N) => /* @__PURE__ */ i.createElement("circle", { cx: e(T.columnCategory) + Number(r.yAxis.size) + E / 2, cy: t(_), r: L, fill: "#ccc", style: { opacity: 1, fillOpacity: 1, stroke: "black" }, key: `boxplot-${m}--circle-${N}` })), /* @__PURE__ */ i.createElement(
      oy,
      {
        "data-left": e(T.columnCategory) + r.yAxis.size + D / 2 + 0.5,
        key: `box-plot-${m}`,
        min: c(T),
        max: s(T),
        left: Number(e(T.columnCategory)) + Number(r.yAxis.size) + D / 2 + 0.5,
        firstQuartile: y(T),
        thirdQuartile: g(T),
        median: d(T),
        boxWidth: k,
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
          "data-tooltip-id": o,
          tabIndex: -1
        }
      }
    ));
  })));
}, dk = ({ xScale: e, yScale: t, getXAxisData: r, getYAxisData: n }) => {
  const { colorScale: a, transformedData: o, config: f, formatNumber: s, seriesHighlight: c, colorPalettes: d } = ue.useContext(xt);
  let g = 4.5;
  const y = Object.keys(f.runtime.seriesLabels).length > 1, v = (E, k) => `<div>
    ${f.legend.showLegendValuesTooltip && f.runtime.seriesLabels && y ? `${f.runtime.seriesLabels[k] || ""}<br/>` : ""}
    ${f.xAxis.label}: ${s(E[f.xAxis.dataKey], "bottom")} <br/>
    ${f.yAxis.label}: ${s(E[k], "left")}
</div>`;
  return /* @__PURE__ */ i.createElement(rt, { className: "scatter-plot", left: f.yAxis.size }, o.map((E, k) => f.runtime.seriesKeys.map((M, T) => {
    const m = f.legend.behavior === "highlight" && c.length > 0 && c.indexOf(M) === -1, D = f.legend.behavior === "highlight" || c.length === 0 || c.indexOf(M) !== -1, L = f.palette ? d[f.palette][T] : "#000";
    let _ = {
      filter: "unset",
      opacity: 1,
      stroke: D ? "black" : ""
    };
    return /* @__PURE__ */ i.createElement(
      "circle",
      {
        key: `${k}-${T}`,
        r: g,
        cx: e(E[f.xAxis.dataKey]),
        cy: t(E[M]),
        fill: D ? L : "transparent",
        fillOpacity: m ? 0.25 : 1,
        style: _,
        "data-tooltip-html": v(E, M),
        "data-tooltip-id": `cdc-open-viz-tooltip-${f.runtime.uniqueId}`,
        tabIndex: -1
      }
    );
  })));
};
function fk({ height: e, xScale: t }) {
  const { transformedData: r, config: n, formatNumber: a, twoColorPalette: o, getTextWidth: f, updateConfig: s, parseDate: c, formatDate: d, currentViewport: g } = ue.useContext(xt), { barStyle: y, tipRounding: v, roundingStyle: E, twoColor: k } = n, M = ue.useRef([]), [T, m] = ue.useState(window.innerWidth), D = E === "standard" ? "8px" : E === "shallow" ? "5px" : E === "finger" ? "15px" : "0px", L = { small: 16, medium: 18, large: 20 };
  n.barStyle;
  const _ = Number(n.xAxis.target), N = n.series[0].dataKey, R = Number(t.domain()[1]), H = r.some((ie) => ie[N] < 0) || _ > 0 || t.domain()[0] < 0, Y = n.barHasBorder === "true" ? 1 : 0, Z = n.lollipopSize === "large" ? 7 : n.lollipopSize === "medium" ? 6 : 5, re = n.lollipopSize === "large" ? 14 : n.lollipopSize === "medium" ? 12 : 10, K = Math.max(t(0), Math.min(t(_), t(R))), q = (ie) => {
    if (ie == null || y !== "rounded")
      return;
    let V = {};
    return ie === "left" && (V = { borderRadius: `${D} 0 0 ${D}` }), ie === "right" && (V = { borderRadius: `0 ${D} ${D} 0` }), v === "full" && (V = { borderRadius: D }), V;
  }, me = {
    calculate: function() {
      const V = r[0][N] < _ ? "left" : "right", J = `${n.xAxis.targetLabel} ${a(n.xAxis.target || 0, "left")}`, ne = f(J, `bold ${L[n.fontSize]}px sans-serif`);
      let Ae = n.isLollipopChart ? Z / 2 : Number(n.barHeight) / 2, xe = 0, Pe = 0, le = !1;
      V === "right" && (xe = -10, le = ne - xe < K, Pe = K - ne), V === "left" && (xe = 10, le = t(R) - K > ne + xe, Pe = K), this.text = J, this.y = Ae, this.x = Pe, this.padding = xe, this.showLabel = n.xAxis.showTargetLabel ? le : !1;
    }
  };
  me.calculate();
  const W = ue.useRef(null), se = uh(W, {});
  ue.useEffect(() => {
    const ie = () => {
      m(window.innerWidth), M.current.forEach((V) => {
        V.style.transition = "none", V.style.transform = "translate(0) scale(1)";
      });
    };
    return window.addEventListener("resize", ie), () => {
      window.removeEventListener("resize", ie);
    };
  }, []);
  const [ce, he] = ue.useState(!1);
  return ue.useEffect(() => {
    se != null && se.isIntersecting && setTimeout(() => {
      he(!0);
    }, 100);
  }, [se == null ? void 0 : se.isIntersecting, n.animate]), ue.useEffect(() => {
    M.current.forEach((ie, V) => {
      if (n.animate) {
        const J = _ / R * 100;
        ie.style.opacity = "0", ie.style.transform = `translate(${J / 1.07}%) scale(0, 1)`, setTimeout(() => {
          ie.style.opacity = "1", ie.style.transform = "translate(0) scale(1)", ie.style.transition = "transform 0.5s ease";
        }, 100);
      } else
        ie.style.transition = "none", ie.style.opacity = "0";
      n.animate || (ie.style.transition = "none", ie.style.opacity = "1");
    });
  }, [n.animate, n, ce]), /* @__PURE__ */ i.createElement(_r, { component: "Deviation Bar" }, /* @__PURE__ */ i.createElement(rt, { left: Number(n.xAxis.size) }, r.map((ie, V) => {
    const J = Number(ie[N]), ne = n.isLollipopChart ? Z : Number(n.barHeight), Ae = Number(n.barSpace), xe = Math.abs(t(J) - K), Pe = t(J), le = J > _ ? K : Pe, _e = J < _ ? "left" : "right";
    let $e = 0;
    $e = V !== 0 ? (Ae + ne + Y) * V : $e;
    const Te = (Ae + ne + Y) * r.length;
    n.heights.horizontal = Te;
    const Re = f(a(J, "left"), `normal ${L[n.fontSize]}px sans-serif`) < xe - 6, oe = Pe, we = $e + ne / 2, Ce = Pe, Be = $e + ne / 2, je = Pe, qe = $e - ne / 2, ot = q(_e), [Je, it] = o[k.palette], Xe = { left: Je, right: it }, Ie = Go("#000", Xe[_e]);
    let Me = hk(n.isLollipopChart, Re, re, Ie);
    const ut = a(J, "left"), Ve = n.runtime.yAxis.type === "date" ? d(c(r[V][n.runtime.originalXAxis.dataKey])) : r[V][n.runtime.originalXAxis.dataKey];
    let Ge = n.runtime.yAxis.label ? `${n.runtime.yAxis.label}: ${Ve}` : Ve, lt = n.runtime.xAxis.label ? `${n.runtime.xAxis.label}: ${ut}` : ut;
    const ct = `<div>
          ${Ge}<br />
          ${lt}
            </div>`;
    return /* @__PURE__ */ i.createElement(rt, { key: `deviation-bar-${n.orientation}-${N}-${V}` }, /* @__PURE__ */ i.createElement(
      "foreignObject",
      {
        ref: (wt) => {
          M.current[V] = wt;
        },
        x: le,
        y: $e,
        width: xe,
        height: ne,
        "data-tooltip-html": ct,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.runtime.uniqueId}`,
        tabIndex: -1
      },
      /* @__PURE__ */ i.createElement("div", { style: { width: xe, height: ne, border: `${Y}px solid #333`, backgroundColor: Xe[_e], ...ot } })
    ), n.yAxis.displayNumbersOnBar && /* @__PURE__ */ i.createElement(yt, { verticalAnchor: "middle", x: oe, y: we, ...Me[_e] }, a(ie[N], "left")), n.isLollipopChart && n.lollipopShape === "circle" && /* @__PURE__ */ i.createElement("circle", { cx: Ce, cy: Be, r: re / 2, fill: Xe[_e], style: { filter: "unset", opacity: 1 } }), n.isLollipopChart && n.lollipopShape === "square" && /* @__PURE__ */ i.createElement("rect", { x: je, y: qe, width: re, height: re, fill: Xe[_e], style: { opacity: 1, filter: "unset" } }));
  }), me.showLabel && /* @__PURE__ */ i.createElement(yt, { fontWeight: "bold", dx: me.padding, verticalAnchor: "middle", x: me.x, y: me.y }, me.text), H && /* @__PURE__ */ i.createElement(Jt, { from: { x: K, y: 0 }, to: { x: K, y: e }, stroke: "#333", strokeWidth: 2 })), /* @__PURE__ */ i.createElement("foreignObject", { y: e / 2, ref: W }));
}
function hk(e, t, r, n) {
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
const pk = ({ xScale: e, yScale: t, height: r, width: n, handleTooltipMouseOver: a, handleTooltipMouseOff: o }) => {
  var k;
  const { transformedData: f, rawData: s, config: c, seriesHighlight: d } = ue.useContext(xt), { xAxis: g, yAxis: y, legend: v, runtime: E } = c;
  return f && /* @__PURE__ */ i.createElement(_r, { component: "ForecastingChart" }, /* @__PURE__ */ i.createElement(rt, { className: "forecasting-items", key: "forecasting-items-wrapper", left: Number(y.size) }, (k = E.forecastingSeriesKeys) == null ? void 0 : k.map((M, T) => !M || !M.stages ? !1 : M.stages.map((m, D) => {
    var U;
    const { behavior: L } = v, _ = s.filter((H) => H[M.stageColumn] === m.key);
    let N = L === "highlight" && d.length > 0 && d.indexOf(m.key) === -1, R = L === "highlight" || d.length === 0 || d.indexOf(m.key) !== -1;
    return /* @__PURE__ */ i.createElement(rt, { className: `forecasting-areas-combo-${T}`, key: `forecasting-areas--stage-${m.key.replaceAll(" ", "-")}-${T}` }, (U = M.confidenceIntervals) == null ? void 0 : U.map((H, Y) => {
      const Z = Uu[m.color] || or[m.color] || !1, re = () => R && Z[2] ? Z[2] : "transparent", K = () => R && Z[1] ? Z[1] : "transparent";
      if (!(H.high === "" || H.low === ""))
        return /* @__PURE__ */ i.createElement(rt, { key: `forecasting-areas--stage-${m.key.replaceAll(" ", "-")}--group-${D}-${Y}` }, /* @__PURE__ */ i.createElement(
          Z0,
          {
            curve: Iu,
            data: _,
            fill: re(),
            opacity: N ? 0.1 : 0.5,
            x: (q) => e(Date.parse(q[g.dataKey])),
            y0: (q) => t(q[H.low]),
            y1: (q) => t(q[H.high])
          }
        ), Y === 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(da, { data: _, x: (q) => Number(e(Date.parse(q[g.dataKey]))), y: (q) => Number(t(q[H.high])), curve: Iu, stroke: K(), strokeWidth: 1, strokeOpacity: 1 }), /* @__PURE__ */ i.createElement(da, { data: _, x: (q) => Number(e(Date.parse(q[g.dataKey]))), y: (q) => Number(t(q[H.low])), curve: Iu, stroke: K(), strokeWidth: 1, strokeOpacity: 1 })));
    }));
  })), /* @__PURE__ */ i.createElement(rt, { key: "tooltip-hover-section" }, /* @__PURE__ */ i.createElement(hr, { key: "bars", width: Number(n), height: Number(r), fill: "transparent", fillOpacity: 0.05, onMouseMove: (M) => a(M, f), onMouseOut: o }))));
};
function Wu(e = "") {
  return typeof e == "number" ? !Number.isNaN(e) : typeof e == "string" ? e !== null && e !== "" && /\d+\.?\d*/.test(e) : !1;
}
function Oc(e, t) {
  const r = e.series.every(({ type: v }) => v === "Bar"), n = e.series.every(({ type: v }) => ["Line", "dashed-sm", "dashed-md", "dashed-lg"].includes(v)), a = (v) => (E) => v.reduce((k, M) => isNaN(Number(E[M])) ? k : k + Number(E[M]), 0), o = () => {
    let v = Math.max(...t.map((E) => Math.max(...e.runtime.seriesKeys.map((k) => Wu(E[k]) ? Number(c(E[k])) : 0))));
    if ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && r) && e.visualizationSubType === "stacked") {
      const E = t.map(a(e.runtime.seriesKeys)).filter((k) => !isNaN(k));
      v = Math.max(...E);
    }
    if (e.visualizationSubType === "stacked" && e.visualizationType === "Area Chart") {
      const E = t.map(a(e.runtime.seriesKeys));
      v = Math.max(...E);
    }
    if ((e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.series && e.series.dataKey && (v = Math.max(...t.map((E) => Wu(E[e.series.dataKey]) ? Number(c(E[e.series.dataKey])) : 0))), e.visualizationType === "Combo" && e.visualizationSubType === "stacked" && !r && e.runtime.barSeriesKeys && e.runtime.lineSeriesKeys) {
      const E = t.map(a(e.runtime.barSeriesKeys)), k = Math.max(...t.map((T) => Math.max(...e.runtime.lineSeriesKeys.map((m) => Number(c(T[m])))))), M = Math.max(...E);
      v = Math.max(M, k);
    }
    return v;
  }, f = () => {
    const v = Math.min(...t.map((E) => Math.min(...e.runtime.seriesKeys.map((k) => Wu(E[k]) ? Number(c(E[k])) : 1 / 0))));
    return String(v);
  }, s = () => e.runtime.seriesKeys ? e.runtime.seriesKeys.some((v) => t.some((E) => E[v] >= 0)) : !1, c = (v) => v === null || v === "" ? "" : typeof v == "string" ? v.replace(/[,$]/g, "") : v, d = Number(o()), g = Number(f()), y = s();
  return { minValue: g, maxValue: d, existPositiveValue: y, isAllLine: n };
}
function mh({ config: e, yMax: t = 0, data: r = [], updateConfig: n }) {
  var v, E, k, M;
  const a = e.visualizationType === "Combo" && e.orientation === "vertical", o = e.series && e.series.filter((T) => T.axis === "Right").map((T) => T.dataKey);
  let { minValue: f } = Oc(e, r);
  const s = (T) => {
    if (!T)
      return [0];
    let m = [];
    return T.map((D, L) => m = [...m, ...r.map((_) => Number(_[D]))]), m;
  };
  let c = Math.max.apply(null, s(o));
  e.yAxis.rightMax > c && (c = e.yAxis.rightMax), e.yAxis.rightMin < f && (f = e.yAxis.rightMin);
  const d = ((E = (v = e.runtime) == null ? void 0 : v.barSeriesKeys) == null ? void 0 : E.length) > 0, g = ((M = (k = e.runtime) == null ? void 0 : k.lineSeriesKeys) == null ? void 0 : M.length) > 0;
  return (d || g) && f > 0 && (f = 0), { yScaleRight: Hn({
    domain: [f, c],
    range: [t, 0]
  }), hasRightAxis: a };
}
const mk = (e) => {
  const { preliminaryData: t, data: r, stroke: n, strokeWidth: a, handleLineType: o, lineType: f, seriesKey: s } = e, c = t.filter((v) => v.seriesKey && v.column && v.value && v.type && v.style), d = (v) => c.find((E) => E.seriesKey === s && v[E.column] === E.value && E.type === "effect" && E.style !== "Open Circles");
  let g = [];
  const y = (v) => ({
    stroke: n,
    strokeWidth: a,
    strokeDasharray: v
  });
  return r.forEach((v, E) => {
    let k = d(v), M = y(o(k ? k.style : f));
    g.push(M), k && E > 0 && (g[E - 1] = y(o(k.style)));
  }), g;
}, gk = (e, t, r) => {
  const n = e.filter((o) => o.style === "Open Circles" && o.type === "effect").map((o) => ({ column: o.column, value: o.value, seriesKey: o.seriesKey }));
  let a = [];
  return t.forEach((o) => {
    n.some((f) => o[f.column] === f.value && f.seriesKey === r) && a.push(o);
  }), a;
}, Xd = (e) => {
  var L, _, N, R, U, H;
  const { config: t, d: r, displayArea: n, seriesKey: a, tooltipData: o, xScale: f, yScale: s, colorScale: c, parseDate: d, yScaleRight: g, data: y, circleData: v, dataIndex: E, mode: k } = e, { lineDatapointStyle: M } = t, T = (L = t == null ? void 0 : t.series.filter((Y) => Y.dataKey === a)) == null ? void 0 : L[0], m = (Y, Z, re, K, q) => {
    const me = re.runtime.seriesLabels || [];
    let W;
    return Y ? W = Z(me[K] || q) : W = "transparent", re.lineDatapointColor === "Lighter than Line" && W !== "transparent" && W && (W = bs(W).brighten(1)), W;
  }, D = (Y) => (t.xAxis.type === "categorical" ? f(Y) : f(d(Y))) + (f.bandwidth ? f.bandwidth() / 2 : 0);
  if (k === "ALWAYS_SHOW_POINTS") {
    if (M === "hidden")
      return /* @__PURE__ */ i.createElement(i.Fragment, null);
    if (M === "always show")
      return (v == null ? void 0 : v.some((Z) => Z[t.xAxis.dataKey] === r[t.xAxis.dataKey] && Z[a] === r[a])) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(
        "circle",
        {
          cx: D(r[t.xAxis.dataKey]),
          cy: T.axis === "Right" ? g(r[T.dataKey]) : s(r[T.dataKey]),
          r: 4.5,
          opacity: r[a] ? 1 : 0,
          fillOpacity: 1,
          fill: m(n, c, t, a, a),
          style: { filter: "unset", opacity: 1 }
        }
      );
  }
  if (k === "HOVER_POINTS" && M === "hover") {
    if (!o || !a || !o.data)
      return;
    let Y = (N = (_ = o == null ? void 0 : o.data) == null ? void 0 : _[0]) == null ? void 0 : N[1];
    if (!Y)
      return;
    let Z, re = o.data.filter((me) => me[0] === a), K = (R = re == null ? void 0 : re[0]) == null ? void 0 : R[0], q = (U = re == null ? void 0 : re[0]) == null ? void 0 : U[2];
    return K ? (o == null || o.data.indexOf(K), Z = (H = y == null ? void 0 : y.find((me) => me[t == null ? void 0 : t.xAxis.dataKey] === Y)) == null ? void 0 : H[a], o == null ? void 0 : o.data.map((me, W) => (t.runtime.seriesLabelsAll.indexOf(Y), isNaN(Z) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : (v == null ? void 0 : v.some((ce) => ce[t.xAxis.dataKey] === Y)) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(
      "circle",
      {
        cx: D(Y),
        cy: q === "right" ? g(Z) : s(Z),
        r: 4.5,
        opacity: 1,
        fillOpacity: 1,
        fill: m(n, c, t, K, a),
        style: { filter: "unset", opacity: 1 },
        key: `line-chart-circle--${JSON.stringify(me)}--${W}`
      }
    )))) : void 0;
  }
  return k === "ISOLATED_POINTS" && k && ((Z, re) => {
    const K = y[Z], q = y[Z - 1], me = y[Z + 1];
    if (Z === 0 && !me[re] || Z === y.length - 1 && !q[re] || Z !== 0 && K[re] && !q[re] && !me[re])
      return !0;
  })(E, a) ? /* @__PURE__ */ i.createElement("circle", { cx: D(r[t.xAxis.dataKey]), cy: T.axis === "Right" ? g(r[T.dataKey]) : s(r[T.dataKey]), r: 5.3, strokeWidth: 2, stroke: c(t.runtime.seriesLabels[a]), fill: c(t.runtime.seriesLabels[a]) }) : null;
}, im = (e) => {
  const {
    getXAxisData: t,
    getYAxisData: r,
    handleTooltipClick: n,
    handleTooltipMouseOff: a,
    handleTooltipMouseOver: o,
    tooltipData: f,
    xMax: s,
    xScale: c,
    yMax: d,
    yScale: g
  } = e, {
    colorScale: y,
    config: v,
    formatNumber: E,
    handleLineType: k,
    isNumber: M,
    parseDate: T,
    seriesHighlight: m,
    tableData: D,
    transformedData: L,
    updateConfig: _,
    rawData: N
  } = ue.useContext(xt), { yScaleRight: R } = mh({ config: v, yMax: d, data: L, updateConfig: _ });
  if (!o)
    return;
  const { lineDatapointStyle: U, showLineSeriesLabels: H, legend: Y } = v;
  return /* @__PURE__ */ i.createElement(_r, { component: "LineChart" }, /* @__PURE__ */ i.createElement(rt, { left: v.runtime.yAxis.size }, " ", (v.runtime.lineSeriesKeys || v.runtime.seriesKeys).map((Z, re) => {
    var ie;
    let K = v.series.filter((V) => V.dataKey === Z)[0].type;
    const q = v.series.filter((V) => V.dataKey === Z), me = q[0].axis ? q[0].axis : "left";
    let W = Y.behavior === "highlight" || m.length === 0 || m.indexOf(Z) !== -1;
    const se = gk(v.preliminaryData, N, Z);
    let ce = mk({ preliminaryData: v.preliminaryData, data: D, stroke: y(v.runtime.seriesLabels[Z]), strokeWidth: q[0].weight || 2, handleLineType: k, lineType: K, seriesKey: Z }), he = (V) => c(t(V)) + (c.bandwidth ? c.bandwidth() / 2 : 0);
    return /* @__PURE__ */ i.createElement(
      rt,
      {
        key: `series-${Z}`,
        opacity: Y.behavior === "highlight" && m.length > 0 && m.indexOf(Z) === -1 ? 0.5 : 1,
        display: Y.behavior === "highlight" || m.length === 0 && !Y.dynamicLegend || m.indexOf(Z) !== -1 ? "block" : "none"
      },
      L.map((V, J) => {
        const ne = v.series.find(({ dataKey: _e }) => _e === Z), { axis: Ae } = ne, xe = Object.keys(v.runtime.seriesLabels).length > 1, Pe = Ae === "Right" ? "rightLabel" : "label";
        let le = v.runtime.yAxis[Pe];
        return xe || (le = v.isLegendValue ? v.runtime.seriesLabels[Z] : le), V[Z] !== void 0 && V[Z] !== "" && V[Z] !== null && M(V[Z]) && /* @__PURE__ */ i.createElement(rt, { key: `series-${Z}-point-${J}`, className: "checkwidth" }, /* @__PURE__ */ i.createElement(hr, { key: "bars", width: Number(s), height: Number(d), fill: "transparent", fillOpacity: 0.05, onMouseMove: (_e) => o(_e, D), onMouseOut: a, onClick: (_e) => n(_e, L) }), /* @__PURE__ */ i.createElement(yt, { display: v.labels ? "block" : "none", x: he(V), y: me === "Right" ? R(r(V, Z)) : g(r(V, Z)), fill: "#000", textAnchor: "middle" }, E(V[Z], "left")), (U === "hidden" || U === "always show") && /* @__PURE__ */ i.createElement(
          Xd,
          {
            mode: "ALWAYS_SHOW_POINTS",
            dataIndex: J,
            circleData: se,
            data: L,
            d: V,
            config: v,
            seriesKey: Z,
            displayArea: W,
            tooltipData: f,
            xScale: c,
            yScale: g,
            colorScale: y,
            parseDate: T,
            yScaleRight: R,
            seriesAxis: me,
            key: `line-circle--${J}`
          }
        ), /* @__PURE__ */ i.createElement(
          Xd,
          {
            mode: "ISOLATED_POINTS",
            dataIndex: J,
            circleData: se,
            data: L,
            d: V,
            config: v,
            seriesKey: Z,
            displayArea: W,
            tooltipData: f,
            xScale: c,
            yScale: g,
            colorScale: y,
            parseDate: T,
            yScaleRight: R,
            seriesAxis: me,
            key: `isolated-circle-${J}`
          }
        ));
      }),
      /* @__PURE__ */ i.createElement(i.Fragment, null, U === "hover" && /* @__PURE__ */ i.createElement(
        Xd,
        {
          dataIndex: 0,
          mode: "HOVER_POINTS",
          circleData: se,
          data: L,
          config: v,
          seriesKey: Z,
          displayArea: W,
          tooltipData: f,
          xScale: c,
          yScale: g,
          colorScale: y,
          parseDate: T,
          yScaleRight: R,
          seriesAxis: me
        }
      )),
      (ie = v == null ? void 0 : v.preliminaryData) != null && ie.some((V) => V.value && V.column) ? /* @__PURE__ */ i.createElement(
        Og,
        {
          curve: xs[q[0].lineType],
          segments: (v.xAxis.type === "date-time" ? L.sort((V, J) => {
            let ne = t(V), Ae = t(J);
            return ne < Ae ? -1 : Ae < ne ? 1 : 0;
          }) : L).map((V) => [V]),
          segmentation: "x",
          x: (V) => he(V),
          y: (V) => me === "Right" ? R(r(V, Z)) : g(Number(r(V, Z))),
          styles: ce,
          defined: (V, J) => V[Z] !== "" && V[Z] !== null && V[Z] !== void 0
        }
      ) : /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
        da,
        {
          curve: xs[q[0].lineType],
          data: v.xAxis.type === "date-time" ? L.sort((V, J) => {
            let ne = t(V), Ae = t(J);
            return ne < Ae ? -1 : Ae < ne ? 1 : 0;
          }) : L,
          x: (V) => he(V),
          y: (V) => me === "Right" ? R(r(V, Z)) : g(Number(r(V, Z))),
          stroke: y(v.runtime.seriesLabels[Z]),
          strokeWidth: q[0].weight || 2,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: K ? k(K) : 0,
          defined: (V, J) => V[Z] !== "" && V[Z] !== null && V[Z] !== void 0
        }
      )),
      se.map((V, J) => /* @__PURE__ */ i.createElement("circle", { key: J, cx: he(V), cy: me === "Right" ? R(r(V, Z)) : g(Number(r(V, Z))), r: 6, strokeWidth: q[0].weight || 2, stroke: y ? y(v.runtime.seriesLabels[Z]) : "#000", fill: "#fff" })),
      v.animate && /* @__PURE__ */ i.createElement(
        da,
        {
          className: "animation",
          curve: xs[q[0].lineType],
          data: L,
          x: (V) => he(V),
          y: (V) => me === "Right" ? R(r(V, Z)) : g(Number(r(V, Z))),
          stroke: "#fff",
          strokeWidth: 3,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: K ? k(K) : 0,
          defined: (V, J) => V[Z] !== "" && V[Z] !== null && V[Z] !== void 0
        }
      ),
      H && (v.runtime.lineSeriesKeys || v.runtime.seriesKeys).map((V) => {
        let J;
        for (let ne = L.length - 1; ne >= 0; ne--)
          if (L[ne][V]) {
            J = L[ne];
            break;
          }
        return J ? /* @__PURE__ */ i.createElement("text", { x: he(J) + 5, y: g(r(J, V)), alignmentBaseline: "middle", fill: v.colorMatchLineSeriesLabels && y ? y(v.runtime.seriesLabels[V] || V) : "black" }, v.runtime.seriesLabels[V] || V) : /* @__PURE__ */ i.createElement(i.Fragment, null);
      })
    );
  }), v.legend.dynamicLegend && m.length === 0 && /* @__PURE__ */ i.createElement(yt, { x: s / 2, y: d / 2, fill: "black", textAnchor: "middle", color: "black" }, v.legend.dynamicLegendChartMessage)));
}, yk = (e) => {
  const { rawData: t, updateConfig: r } = ue.useContext(xt), { xScale: n, yScale: a, config: o, height: f, width: s, handleTooltipMouseOff: c, handleTooltipMouseOver: d } = e, { forestPlot: g } = o, y = o.xAxis.tickWidthMax + 10, [v, E] = ue.useState(!1);
  ue.useEffect(() => {
    try {
      const _ = ["estimateField", "lower", "upper", "estimateRadius"], N = o, R = 10;
      for (let U = 0; U < R; U++)
        _.forEach((H) => {
          var Y;
          o.forestPlot[H] && o.forestPlot[H] !== ((Y = N.columns[o.forestPlot[`additionalColumn${U}`]]) == null ? void 0 : Y.name) && (delete N.columns[`additionalColumn${U}`], N.columns[o.forestPlot[H]] = {}, N.columns[o.forestPlot[H]].dataKey = N.forestPlot[H], N.columns[o.forestPlot[H]].name = N.forestPlot[H], N.columns[o.forestPlot[H]].dataTable = !0, N.columns[o.forestPlot[H]].tooltips = !0, N.columns[o.forestPlot[H]].label = N.forestPlot[H]);
        });
      o.forestPlot.radius.scalingColumn && (N.columns[o.forestPlot.radius.scalingColumn] = {}, N.columns[o.forestPlot.radius.scalingColumn].dataKey = N.forestPlot.radius.scalingColumn, N.columns[o.forestPlot.radius.scalingColumn].name = N.forestPlot.radius.scalingColumn, N.columns[o.forestPlot.radius.scalingColumn].label = N.forestPlot.radius.scalingColumn, N.columns[o.forestPlot.radius.scalingColumn].dataTable = !0, N.columns[o.forestPlot.radius.scalingColumn].tooltips = !0), N.table.showVertical && (N.table.indexLabel = o.xAxis.dataKey), r(N);
    } catch (_) {
      console.log(_.message);
    }
  }, []), ue.useEffect(() => {
    !v && o.forestPlot.type === "Logarithmic" && (r({
      ...o,
      dataFormat: {
        ...o.dataFormat,
        roundTo: 2
      }
    }), E(!0));
  }, [o.forestPlot.type]);
  const k = o.data.find((_) => _[o.xAxis.dataKey] === o.forestPlot.pooledResult.column), M = k ? [
    { x: n(k[o.forestPlot.lower]), y: f - Number(o.forestPlot.rowHeight) },
    { x: n(k[o.forestPlot.estimateField]), y: f - g.pooledResult.diamondHeight - Number(o.forestPlot.rowHeight) },
    { x: n(k[o.forestPlot.upper]), y: f - Number(o.forestPlot.rowHeight) },
    { x: n(k[o.forestPlot.estimateField]), y: f + g.pooledResult.diamondHeight - Number(o.forestPlot.rowHeight) },
    { x: n(k[o.forestPlot.lower]), y: f - Number(o.forestPlot.rowHeight) }
  ] : [], T = o.forestPlot.rowHeight, m = [
    { x: 0, y: T },
    { x: s, y: T }
  ], D = [
    { x: 0, y: f },
    { x: s, y: f }
  ], L = Object.entries(o.columns).map((_) => _[1]).filter((_) => _.forestPlot === !0);
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(rt, { width: s }, g.title && /* @__PURE__ */ i.createElement(yt, { className: "forest-plot--title", x: g.type === "Linear" ? n(0) : n(1), y: 0, textAnchor: "middle", verticalAnchor: "start", fontSize: Ci(o.fontSize), fill: "black" }, g.title), g.lineOfNoEffect.show && g.type === "Linear" && /* @__PURE__ */ i.createElement(Jt, { from: { x: n(0), y: 0 + T }, to: { x: n(0), y: f }, className: "forestplot__line-of-no-effect", stroke: g.regression.baseLineColor || "black" }), g.lineOfNoEffect.show && g.type === "Logarithmic" && /* @__PURE__ */ i.createElement(Jt, { from: { x: n(1), y: 0 + T }, to: { x: n(1), y: f }, className: "forestplot__line-of-no-effect", stroke: g.regression.baseLineColor || "black" }), t.map((_, N) => {
    const R = Hn({
      domain: t.map((K) => K[g.radius.scalingColumn]),
      range: [g.radius.min, g.radius.max]
    }), U = g.radius.scalingColumn !== "" ? R(t[N][g.radius.scalingColumn]) : 4, H = g.colors.shape ? g.colors.shape : "black", Y = g.colors.line ? g.colors.line : "black", Z = 4;
    return _[o.xAxis.dataKey] === g.pooledResult.column ? /* @__PURE__ */ i.createElement(da, { data: M, x: (K) => K.x, y: (K) => K.y - Ci(o.fontSize) / 2, stroke: "black", strokeWidth: 2, fill: "black", curve: lf }) : /* @__PURE__ */ i.createElement(rt, null, /* @__PURE__ */ i.createElement(
      "path",
      {
        stroke: Y,
        strokeWidth: 1,
        className: "lower-ci",
        d: `
                    M${n(_[g.lower])} ${a(N) - Number(Z)}
                    L${n(_[g.lower])} ${a(N) + Number(Z)}
                `
      }
    ), /* @__PURE__ */ i.createElement(
      "path",
      {
        stroke: Y,
        strokeWidth: 1,
        className: "upper-ci",
        d: `
                    M${n(_[g.upper])} ${a(N) - Number(Z)}
                    L${n(_[g.upper])} ${a(N) + Number(Z)}
                `
      }
    ), /* @__PURE__ */ i.createElement("line", { stroke: Y, className: `line-${_[o.yAxis.dataKey]}`, key: N, x1: n(_[g.lower]), x2: n(_[g.upper]), y1: a(N), y2: a(N) }), g.shape === "circle" && /* @__PURE__ */ i.createElement(zy, { className: "forest-plot--circle", cx: n(Number(_[g.estimateField])), cy: a(N), r: g.radius.scalingColumn !== "" ? R(t[N][g.radius.scalingColumn]) : 4, fill: H, style: { opacity: 1, filter: "unset" } }), g.shape === "square" && /* @__PURE__ */ i.createElement("rect", { className: "forest-plot--square", x: n(Number(_[g.estimateField])), y: a(N) - U / 2, width: U, height: U, fill: H, style: { opacity: 1, filter: "unset" } }), g.shape === "text" && /* @__PURE__ */ i.createElement(yt, { className: "forest-plot--text", x: n(Number(_[g.estimateField])), y: a(N), textAnchor: "middle", verticalAnchor: "middle", fontSize: Ci(o.fontSize), fill: H }, _[g.estimateField]));
  }), M && g.regression.showDiamond && /* @__PURE__ */ i.createElement(da, { data: M, x: (_) => _.x, y: (_) => _.y, stroke: "black", strokeWidth: 2, fill: g.regression.baseLineColor, curve: lf }), g.regression.description && /* @__PURE__ */ i.createElement(yt, { x: 0 - Number(o.xAxis.size), width: s, y: f - o.forestPlot.rowHeight - Number(g.rowHeight) / 3, verticalAnchor: "start", textAnchor: "start", style: { fontWeight: "bold", fontSize: 12 } }, g.regression.description), /* @__PURE__ */ i.createElement(hr, { key: "forest-plot-tooltip-area", className: "forest-plot-tooltip-area", width: s, height: f, fill: "transparent", fillOpacity: 0.5, onMouseMove: (_) => d(_, t), onMouseOut: c })), /* @__PURE__ */ i.createElement(Jt, { from: m[0], to: m[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__top-line" }), /* @__PURE__ */ i.createElement(Jt, { from: D[0], to: D[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__bottom-line" }), L.map((_) => t.map((N, R) => /* @__PURE__ */ i.createElement(yt, { className: `${N[_.name]}`, x: _.forestPlotAlignRight ? s : _.forestPlotStartingPoint, y: a(R), textAnchor: _.forestPlotAlignRight ? "end" : "start", verticalAnchor: "middle", fontSize: Ci(o.fontSize), fill: "black" }, N[_.name]))), !g.hideDateCategoryCol && t.map((_, N) => /* @__PURE__ */ i.createElement(yt, { className: `${_[o.xAxis.dataKey]}`, x: 0, y: a(N), textAnchor: "start", verticalAnchor: "middle", fontSize: Ci(o.fontSize), fill: "black" }, _[o.xAxis.dataKey])), !g.hideDateCategoryCol && o.xAxis.dataKey && /* @__PURE__ */ i.createElement(yt, { className: o.xAxis.dataKey, x: 0, y: 0, textAnchor: "start", verticalAnchor: "start", fontSize: Ci(o.fontSize), fill: "black" }, o.xAxis.dataKey), L.map((_) => /* @__PURE__ */ i.createElement(yt, { className: `${_.label}`, x: _.forestPlotAlignRight ? s : _.forestPlotStartingPoint, y: 0, textAnchor: _.forestPlotAlignRight ? "end" : "start", verticalAnchor: "start", fontSize: Ci(o.fontSize), fill: "black" }, _.label)), g.leftLabel && /* @__PURE__ */ i.createElement(yt, { className: "forest-plot__left-label", x: g.type === "Linear" ? n(0) - 25 : n(1) - 25, y: f + y, textAnchor: "end", verticalAnchor: "start" }, g.leftLabel), g.rightLabel && /* @__PURE__ */ i.createElement(yt, { className: "forest-plot__right-label", x: g.type === "Linear" ? n(0) + 25 : n(1) + 25, y: f + y, textAnchor: "start", verticalAnchor: "start" }, g.rightLabel));
}, vk = ({ width: e, height: t, originalWidth: r }) => {
  var L;
  const { config: n, colorScale: a, transformedData: o, formatNumber: f, seriesHighlight: s, getTextWidth: c } = ue.useContext(xt);
  if (!n || ((L = n == null ? void 0 : n.series) == null ? void 0 : L.length) < 2)
    return;
  const d = n.barHasBorder === "true" ? 1 : 0, g = e / 2, y = { small: 16, medium: 18, large: 20 }, v = 1.02, E = {
    parentKey: n.dataDescription.seriesKey,
    dataKey: n.series[0].dataKey,
    dataKeyLabel: n.runtime.seriesLabels[n.series[0].dataKey] || n.series[0].dataKey,
    color: a(n.runtime.seriesLabels[n.series[0].dataKey]),
    max: Math.max.apply(
      Math,
      o.map((_) => _[n.series[0].dataKey])
    ),
    labelColor: ""
  }, k = {
    parentKey: n.dataDescription.seriesKey,
    dataKey: n.series[1].dataKey,
    dataKeyLabel: n.runtime.seriesLabels[n.series[1].dataKey] || n.series[1].dataKey,
    color: a(n.runtime.seriesLabels[n.series[1].dataKey]),
    max: Math.max.apply(
      Math,
      o.map((_) => _[n.series[1].dataKey])
    ),
    labelColor: ""
  }, M = Hn({
    domain: [0, Math.max(E.max * v, k.max * 1.1)],
    range: [0, g]
  });
  E.labelColor = E.color ? Go("#000", E.color) : "#000", k.labelColor = k.color ? Go("#000", k.color) : "#000";
  const T = n.yAxis.label ? `${n.yAxis.label}: ` : "", m = (_) => `<p>
				${n.dataDescription.seriesKey}: ${E.dataKeyLabel}<br/>
				${n.xAxis.dataKey}: ${_[n.xAxis.dataKey]}<br/>
				${T}${f(_[E.dataKey], "left")}
			</p>`, D = (_) => `<p>
				${n.dataDescription.seriesKey}: ${k.dataKeyLabel}<br/>
				${n.xAxis.dataKey}: ${_[n.xAxis.dataKey]}<br/>
				${T}${f(_[k.dataKey], "left")}
			</p>`;
  return e > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `
				#cdc-visualization__paired-bar-chart,
				 #cdc-visualization__paired-bar-chart > .visx-group {
					transform-origin: center
				}
				`), /* @__PURE__ */ i.createElement("svg", { id: "cdc-visualization__paired-bar-chart", width: r, height: t, viewBox: `0 0 ${e + Number(n.runtime.yAxis.size)} ${t}`, role: "img", tabIndex: 0 }, /* @__PURE__ */ i.createElement("title", null, `Paired bar chart graphic with the title ${n.title ? n.title : "No Title Found"}`), /* @__PURE__ */ i.createElement(rt, { top: 0, left: Number(n.xAxis.size) }, o.filter((_) => n.series[0].dataKey === E.dataKey).map((_, N) => {
    let R = n.legend.behavior === "highlight" && s.length > 0 && s.indexOf(n.series[0].dataKey) === -1, U = n.legend.behavior === "highlight" || s.length === 0 || s.indexOf(n.series[0].dataKey) !== -1, H = M(_[n.series[0].dataKey]), Y = Number(n.barHeight) ? Number(n.barHeight) : 25, Z = 0;
    Z = N !== 0 ? (Number(n.barSpace) + Y + d) * N : Z;
    const re = (Number(n.barSpace) + Y + d) * o.length;
    n.heights.horizontal = re;
    const q = c(f(_[E.dataKey], "left"), `normal ${y[n.fontSize]}px sans-serif`) < H - 5;
    return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(rt, { key: `group-${E.dataKey}-${_[n.xAxis.dataKey]}`, className: "horizontal" }, /* @__PURE__ */ i.createElement(
      hr,
      {
        id: `bar-${E.dataKey}-${_[n.dataDescription.xKey]}`,
        className: "bar group-1",
        key: `bar-${E.dataKey}-${_[n.dataDescription.xKey]}`,
        x: g - H,
        y: Z,
        width: M(_[n.series[0].dataKey]),
        height: Y,
        fill: E.color,
        "data-tooltip-html": m(_),
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.runtime.uniqueId}`,
        stroke: "#333",
        strokeWidth: d,
        opacity: R ? 0.5 : 1,
        display: U ? "block" : "none",
        tabIndex: -1
      }
    ), n.yAxis.displayNumbersOnBar && U && /* @__PURE__ */ i.createElement(yt, { textAnchor: q ? "start" : "end", dx: q ? 5 : -5, verticalAnchor: "middle", x: g - H, y: Z + n.barHeight / 2, fill: q ? E.labelColor : "#000" }, f(_[E.dataKey], "left"))));
  }), o.filter((_) => n.series[1].dataKey === k.dataKey).map((_, N) => {
    let R = M(_[n.series[1].dataKey]), U = n.legend.behavior === "highlight" && s.length > 0 && s.indexOf(n.series[1].dataKey) === -1, H = n.legend.behavior === "highlight" || s.length === 0 || s.indexOf(n.series[1].dataKey) !== -1, Y = n.barHeight ? Number(n.barHeight) : 25, Z = 0;
    Z = N !== 0 ? (Number(n.barSpace) + Y + d) * N : Z;
    const re = (Number(n.barSpace) + Y + d) * o.length;
    n.heights.horizontal = re;
    const q = c(f(_[k.dataKey], "left"), `normal ${y[n.fontSize]}px sans-serif`) < R - 5;
    return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `
                      .bar-${k.dataKey}-${_[n.xAxis.dataKey]} {
                          transform-origin: ${g}px ${Z}px
                      }
							      `), /* @__PURE__ */ i.createElement(rt, { key: `group-${k.dataKey}-${_[n.dataDescription.xKey]}`, className: "horizontal" }, /* @__PURE__ */ i.createElement(
      hr,
      {
        id: `bar-${k.dataKey}-${_[n.dataDescription.xKey]}`,
        className: "bar group-2",
        key: `bar-${k.dataKey}-${_[n.dataDescription.xKey]}`,
        x: g,
        y: Z,
        width: M(_[n.series[1].dataKey]),
        height: Y,
        fill: k.color,
        "data-tooltip-html": D(_),
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.runtime.uniqueId}`,
        strokeWidth: d,
        stroke: "#333",
        opacity: U ? 0.5 : 1,
        display: H ? "block" : "none",
        tabIndex: -1
      }
    ), n.yAxis.displayNumbersOnBar && H && /* @__PURE__ */ i.createElement(yt, { textAnchor: q ? "end" : "start", dx: q ? -5 : 5, verticalAnchor: "middle", x: g + R, y: Z + n.barHeight / 2, fill: q ? k.labelColor : "#000" }, f(_[k.dataKey], "left"))));
  }))));
}, ly = ({ config: e, minValue: t, maxValue: r, existPositiveValue: n, data: a, isAllLine: o }) => {
  let f = 0, s = 0, c = 0, d = 0;
  if (!a)
    return { min: f, max: s };
  const { visualizationType: g, series: y } = e, { max: v, min: E } = e.runtime.yAxis, k = n ? v >= r : v >= 0, M = e.useLogScale ? E >= 0 : E <= 0 && t >= 0 || E <= t && t < 0;
  f = E && M ? E : t, s = v && k ? v : Number.MIN_VALUE;
  const { lower: T, upper: m } = (e == null ? void 0 : e.confidenceKeys) || {};
  if (T && m && e.visualizationType === "Bar") {
    const D = f < 0 ? 1.1 : 0;
    s = Math.max(r, Math.max(...a.flatMap((L) => [L[m], L[T]])) * 1.15), f = Math.min(t, Math.min(...a.flatMap((L) => [L[m], L[T]])) * 1.15) * D;
  }
  if (e.series.filter((D) => (D == null ? void 0 : D.type) === "Forecasting")) {
    const {
      runtime: { forecastingSeriesKeys: D }
    } = e;
    if ((D == null ? void 0 : D.length) > 0) {
      let L = [];
      D.forEach((U) => {
        var H;
        (H = U.confidenceIntervals) == null || H.map((Y) => {
          L.push(Y.high), L.push(Y.low);
        });
      });
      const _ = a.map((U) => L.map((H) => U[H])), N = Math.max.apply(
        null,
        _.map((U) => U[0])
      ), R = Math.min.apply(
        null,
        _.map((U) => U[1])
      );
      N > s && (s = N), R < f && (f = R);
    }
  }
  if (g === "Combo")
    try {
      if (!a)
        throw new Error("COVE: missing data while getting min/max for combo chart.");
      let D = y.filter((N) => N.axis === "Left"), L = y.filter((N) => N.axis === "Right");
      const _ = (N, R, U, H = "left") => {
        let Y = 0;
        return (R.map((re) => re.dataKey) || []).forEach((re) => {
          let K = R.find((W) => W.dataKey === re), q = N.map((W) => W[re]), me = Math.max.apply(null, q);
          e.visualizationSubType === "stacked" && H === "left" && K.type === "Bar" && (Y += me), me > U && (U = me), U < Y && (U = Y);
        }), U;
      };
      c = _(a, D, c, "left"), d = _(a, L, d, "right"), c < v && (c = v);
    } catch (D) {
      console.error(D.message);
    }
  if ((g === "Bar" || g === "Combo" && !o) && f > 0 && (f = 0), (e.visualizationType === "Bar" || e.visualizationType === "Combo" && !o) && f < 0 && (f = f * 1.1), e.visualizationType === "Combo" && o && ((E == null || E === "") && f > 0 && (f = 0), E)) {
    const D = e.useLogScale ? E >= 0 && E < t : E < t;
    f = E && D ? E : t;
  }
  if (e.visualizationType === "Deviation Bar" && f > 0) {
    const D = Number(E) < Math.min(t, Number(e.xAxis.target));
    f = E && D ? E : 0;
  }
  if (e.visualizationType === "Line") {
    const D = e.useLogScale ? E >= 0 && E < t : E < t;
    f = E && D ? E : t;
  }
  if (s === Number.MIN_VALUE && (s = n ? r : 0), e.runtime.yAxis.paddingPercent) {
    let D = (s - f) * e.runtime.yAxis.paddingPercent;
    f -= D, s += D;
  }
  if (e.isLollipopChart && e.yAxis.displayNumbersOnBar) {
    const D = a.map((_) => _[e.series[0].dataKey]), L = Math.max(...D).toString().length;
    switch (!0) {
      case (L > 8 && L <= 12):
        s = s * 1.3;
        break;
      case (L > 4 && L <= 7):
        s = s * 1.1;
        break;
    }
  }
  return e.yAxis.enablePadding && (f < 0 ? (s *= 1 + e.yAxis.scalePadding * 2 / 100, f *= 1 + e.yAxis.scalePadding * 2 / 100) : s *= 1 + e.yAxis.scalePadding / 100), { min: f, max: s, leftMax: c, rightMax: d };
}, jr = {
  TIME: "time",
  LOG: "log",
  POINT: "point",
  LINEAR: "linear",
  BAND: "band"
}, xk = (e) => {
  let { xAxisDataMapped: t, xMax: r, yMax: n, min: a, max: o, config: f, data: s } = e;
  const { rawData: c, dimensions: d } = ue.useContext(xt), [g, y] = d, v = f.runtime.barSeriesKeys || f.runtime.seriesKeys, E = f.runtime.xAxis.type, k = f.orientation === "horizontal", M = (Y) => Y[f.runtime.originalXAxis.dataKey], T = s.map((Y) => M(Y)), { visualizationType: m } = f;
  let D = null, L = null, _ = null, N = null, R = null, U = null, H = null;
  if (k && (D = Sk({ min: a * 1.03, ...e }), D.type = f.useLogScale ? jr.LOG : jr.LINEAR, L = kk(E, t), L.rangeRound([0, n]), R = om(v, [0, n])), k || (H = om(T, [0, r], 0.5), D = qd(t, [0, r], 1 - f.barThickness), L = Ek(e), R = qd(v, [0, D.bandwidth()], 0)), f.xAxis.type === "date-time") {
    let Y = Math.min(...t), Z = Math.max(...t);
    Y -= (f.xAxis.padding ? f.xAxis.padding * 0.01 : 0) * (Z - Y), Z += (f.xAxis.padding ? f.xAxis.padding * 0.01 : 0) * (Z - Y), D = Sv({
      domain: [Y, Z],
      range: [0, r]
    }), H = D, D.type = jr.TIME, R = qd(v, [0, f.barThickness * r], 0);
  }
  if (f.visualizationType === "Deviation Bar") {
    const Y = f.isLollipopChart ? 1.05 : 1.03;
    L = Jd({
      domain: t,
      range: [0, n]
    }), D = Hn({
      domain: [a * Y, Math.max(Number(f.xAxis.target), o)],
      range: [0, r],
      round: !0,
      nice: !0
    }), D.type = jr.LINEAR;
  }
  if (f.visualizationType === "Scatter Plot" && f.xAxis.type === "continuous" && (D = Hn({
    domain: [0, Math.max.apply(null, D.domain())],
    range: [0, r]
  }), D.type = jr.LINEAR), m === "Box Plot") {
    const Y = [];
    if (f.boxplot.plots.map((q) => q.columnOutliers.map((me) => Y.push(me))) && !f.boxplot.hideOutliers) {
      let q = Math.min(...Y), me = Math.max(...Y);
      q < a && (a = q), me > o && (o = me);
    }
    let re = Math.min(...f.boxplot.plots.map((q) => q.columnLowerBounds)), K = Math.max(...f.boxplot.plots.map((q) => q.columnUpperBounds));
    re < a && (a = re), K > o && (o = K), L = Hn({
      range: [n, 0],
      round: !0,
      domain: [a, o]
    }), D = Jd({
      range: [0, r],
      round: !0,
      domain: f.boxplot.categories,
      padding: 0.4
    }), D.type = jr.BAND;
  }
  if (m === "Paired Bar") {
    let Z = Math.max.apply(
      Math,
      s.map((K) => {
        var q;
        return K[(q = f.series[0]) == null ? void 0 : q.dataKey];
      })
    ), re = Math.max.apply(
      Math,
      s.map((K) => {
        var q;
        return K[(q = f.series[1]) == null ? void 0 : q.dataKey];
      })
    );
    N = Hn({
      domain: [0, Math.max(Z, re) * 1.02],
      range: [r / 2, 0]
    }), _ = Hn({
      domain: N.domain(),
      range: [r / 2, r],
      nice: !0
    });
  }
  if (m === "Forest Plot") {
    const Y = () => f.forestPlot.regression.showDiamond || f.forestPlot.regression.description ? [0 + f.forestPlot.rowHeight * 2, n - f.forestPlot.rowHeight] : [0 + f.forestPlot.rowHeight * 2, n];
    L = Hn({
      domain: [0, c.length],
      range: Y()
    });
    const Z = 5, re = Number(f.forestPlot.leftWidthOffset) / 100 * r, K = Number(f.forestPlot.rightWidthOffset) / 100 * r, q = Number(f.forestPlot.rightWidthOffsetMobile) / 100 * r, me = Number(f.forestPlot.leftWidthOffsetMobile) / 100 * r;
    if (g > 480) {
      if (f.forestPlot.type === "Linear" && (D = Hn({
        domain: [Math.min(...s.map((W) => parseFloat(W[f.forestPlot.lower]))) - Z, Math.max(...s.map((W) => parseFloat(W[f.forestPlot.upper]))) + Z],
        range: [re, d[0] - K]
      }), D.type = jr.LINEAR), f.forestPlot.type === "Logarithmic") {
        let W = Math.max(...s.map((ce) => parseFloat(ce[f.forestPlot.upper]))), se = Math.min(...s.map((ce) => parseFloat(ce[f.forestPlot.lower])));
        D = Yu({
          domain: [se, W],
          range: [re, r - K],
          nice: !0
        }), D.type = jr.LOG;
      }
    } else if (f.forestPlot.type === "Linear" && (D = Hn({
      domain: [Math.min(...s.map((W) => parseFloat(W[f.forestPlot.lower]))) - Z, Math.max(...s.map((W) => parseFloat(W[f.forestPlot.upper]))) + Z],
      range: [me, r - q],
      type: jr.LINEAR
    })), f.forestPlot.type === "Logarithmic") {
      let W = Math.max(...s.map((ce) => parseFloat(ce[f.forestPlot.upper]))), se = Math.min(...s.map((ce) => parseFloat(ce[f.forestPlot.lower])));
      D = Yu({
        domain: [se, W],
        range: [re, r - K],
        nice: !0,
        base: W > 1 ? 10 : 2,
        round: !1,
        type: jr.LOG
      });
    }
  }
  return { xScale: D, yScale: L, seriesScale: R, g1xScale: N, g2xScale: _, xScaleNoPadding: U, xScaleBrush: H };
}, bk = (e, t, r) => {
  const n = t.domain();
  if (t.type === "time") {
    const a = e[e.length - 1], o = e[0], f = (a - o) / (r - 1), s = [];
    for (let c = a; c >= o; c -= f)
      s.push(c);
    return s[s.length - 1] !== o && s.push(o), s.reverse(), s;
  }
  if (n.length > 2) {
    const a = r || 1, o = [];
    for (let f = n.length; f > 0; f -= a) {
      const s = Math.max(Math.round(f) - 1, 0);
      o.push(n[s]);
    }
    return o.reverse(), o;
  }
}, Sk = ({ min: e, max: t, xMax: r, config: n }) => (e = n.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e, (n.useLogScale ? Yu : Hn)({
  domain: [e, t],
  range: [0, r],
  nice: n.useLogScale,
  zero: n.useLogScale
})), Ek = ({ min: e, max: t, yMax: r, config: n, leftMax: a }) => {
  e = n.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e;
  const o = n.useLogScale ? Yu : Hn;
  return n.visualizationType === "Combo" && (t = a), o({
    domain: [e, t],
    range: [r, 0],
    nice: n.useLogScale,
    zero: n.useLogScale
  });
}, kk = (e, t) => e === "date" ? Hn({
  domain: [Math.min(...t), Math.max(...t)]
}) : Ko({ domain: t, padding: 0.5 }), om = (e, t, r = 0) => Ko({
  domain: e,
  range: t,
  padding: r
}), qd = (e, t, r = 0) => Jd({
  domain: e,
  range: t,
  padding: r
});
function wk(e) {
  return { hasTopAxis: e.visualizationType === "Bar" || e.visualizationType === "Combo" || e.visualizationType === "Line" };
}
const Ds = () => {
  const { config: e } = ue.useContext(xt), { visualizationType: t, series: r, orientation: n, visualizationSubType: a } = e, o = [
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
  }, E = () => t === "Forest Plot" ? !1 : e.orientation === "horizontal" && (e.yAxis.labelPlacement === "Below Bar" || e.yAxis.labelPlacement === "On Date/Category Axis" || e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar"), k = () => {
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
  }, T = () => ["Line", "Bar", "Area Chart", "Combo"].includes(t) && n === "vertical", m = () => ["Box Plot", "Scatter Plot", "Pie"].includes(t) ? !1 : r == null ? void 0 : r.some((Ce) => Ce.type === "Bar" || Ce.type === "Paired Bar" || Ce.type === "Deviation Bar"), D = () => {
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
  }, L = !["Box Plot", "Forest Plot", "Spark Line"].includes(t);
  return {
    enabledChartTypes: o,
    headerColors: f,
    visCanAnimate: y,
    visHasAnchors: k,
    visHasBarBorders: m,
    visHasDataCutoff: D,
    visHasLabelOnData: g,
    visHasDataSuppression: M,
    visHasLegend: v,
    visHasLegendAxisAlign: () => t === "Bar" && a === "stacked" && e.legend.behavior === "isolate",
    visHasBrushChart: T,
    visHasNumbersOnBars: E,
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
    visSupportsPreliminaryData: () => {
      const we = e == null ? void 0 : e.series.some((Ce) => ["Line", "dashed-sm", "dashed-md", "dashed-lg"].includes(Ce == null ? void 0 : Ce.type));
      return !!(t === "Line" || t === "Combo" && we);
    },
    visSupportsRankByValue: () => !["Spark Line"].includes(t),
    visSupportsRegions: () => !["Forest Plot", "Pie", "Paired Bar", "Spark Line", "Sankey"].includes(t),
    visSupportsResponsiveTicks: () => !["Spark Line"].includes(t),
    visSupportsReverseColorPalette: () => !["Forest Plot", "Paired Bar", "Deviation Bar", "Sankey"].includes(t),
    visSupportsSequentialPallete: () => !["Paired Bar", "Deviation Bar", "Forest Plot", "Forecasting", "Sankey"].includes(t),
    visSupportsSuperTitle: c,
    visSupportsTooltipLines: () => !!["Combo", "Forecasting", "Area Chart", "Line", "Bar"].includes(t),
    visHasSelectableLegendValues: L,
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
var gh = {};
const Tk = /* @__PURE__ */ Wf(MS), Ck = /* @__PURE__ */ Wf(WS);
var yh = {};
yh.__esModule = !0;
yh.default = Ak;
var Fu = ue;
function Ak(e) {
  var t = (0, Fu.useState)(e), r = t[0], n = t[1], a = (0, Fu.useRef)(null), o = (0, Fu.useCallback)(function(f, s) {
    a.current = s || null, n(f);
  }, [n]);
  return (0, Fu.useLayoutEffect)(function() {
    a.current && (a.current(r), a.current = null);
  }, [r]), [r, o];
}
var vh = {}, xh = {};
xh.__esModule = !0;
xh.default = Pk;
function Pk(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
var bh = {};
bh.__esModule = !0;
bh.default = Dk;
function Rk(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Lk(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Lk(e, t) {
  if (e) {
    if (typeof e == "string")
      return lm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return lm(e, t);
  }
}
function lm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Dk(e, t) {
  for (var r = e, n = 1 / 0, a = Rk(t), o; !(o = a()).done; ) {
    var f = o.value, s = Math.sqrt(Math.pow(f.x - e.x, 2) + Math.pow(f.y - e.y, 2));
    s < n && (n = s, r = {
      x: f.x,
      y: f.y
    });
  }
  return r;
}
vh.__esModule = !0;
vh.default = Mk;
var sm = sy(xh), Ok = sy(bh);
function sy(e) {
  return e && e.__esModule ? e : { default: e };
}
function Mk(e, t, r) {
  var n, a, o, f;
  return r === void 0 && (r = {}), t.length > 0 ? (0, Ok.default)(e, t) : {
    x: (0, sm.default)(e.x, (n = r.xMin) != null ? n : -1 / 0, (a = r.xMax) != null ? a : 1 / 0),
    y: (0, sm.default)(e.y, (o = r.yMin) != null ? o : -1 / 0, (f = r.yMax) != null ? f : 1 / 0)
  };
}
var Sh = {};
Sh.__esModule = !0;
Sh.default = Fk;
var _k = ue;
function Nk(e, t, r) {
  if (r === void 0 && (r = 1), !e)
    return [];
  for (var n = [], a = e.getTotalLength(), o = 0; o <= a; o += r) {
    var f = e.getPointAtLength(o), s = f.matrixTransform(t);
    n.push(s);
  }
  return n;
}
function Fk(e) {
  var t = (0, _k.useMemo)(function() {
    if (!e)
      return [];
    var r = e.getCTM() || new DOMMatrix();
    return Nk(e, r);
  }, [e == null ? void 0 : e.getTotalLength()]);
  return t;
}
gh.__esModule = !0;
gh.default = Bk;
var Oi = ue, jo = Tk, um = Ck, zk = Eh(yh), cm = Eh(vh), $k = Eh(Sh);
function Eh(e) {
  return e && e.__esModule ? e : { default: e };
}
function Yr() {
  return Yr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Yr.apply(this, arguments);
}
function Bk(e) {
  var t = e === void 0 ? {} : e, r = t.resetOnStart, n = r === void 0 ? !1 : r, a = t.snapToPointer, o = a === void 0 ? !0 : a, f = t.onDragEnd, s = t.onDragMove, c = t.onDragStart, d = t.x, g = t.y, y = t.dx, v = t.dy, E = t.isDragging, k = t.restrict, M = k === void 0 ? {} : k, T = t.restrictToPath, m = (0, Oi.useRef)({
    x: d,
    y: g,
    dx: y,
    dy: v
  }), D = (0, zk.default)({
    x: d,
    y: g,
    dx: y ?? 0,
    dy: v ?? 0,
    isDragging: !1
  }), L = D[0], _ = D[1], N = (0, Oi.useState)(new jo.Point({
    x: 0,
    y: 0
  })), R = N[0], U = N[1];
  (0, Oi.useEffect)(function() {
    (m.current.x !== d || m.current.y !== g || m.current.dx !== y || m.current.dy !== v) && (m.current = {
      x: d,
      y: g,
      dx: y,
      dy: v
    }, _(function(K) {
      return Yr({}, K, {
        x: d,
        y: g,
        dx: y ?? 0,
        dy: v ?? 0
      });
    }));
  }), (0, Oi.useEffect)(function() {
    E !== void 0 && L.isDragging !== E && _(function(K) {
      return Yr({}, K, {
        isDragging: E
      });
    });
  }, [L.isDragging, E, _]);
  var H = (0, $k.default)(T), Y = (0, Oi.useCallback)(function(K) {
    K.persist(), _(function(q) {
      var me = q.x, W = me === void 0 ? 0 : me, se = q.y, ce = se === void 0 ? 0 : se, he = q.dx, ie = q.dy, V = new jo.Point({
        x: (W || 0) + he,
        y: (ce || 0) + ie
      }), J = (0, um.localPoint)(K) || new jo.Point({
        x: 0,
        y: 0
      }), ne = o ? J : V, Ae = (0, cm.default)(ne, H, M);
      return U((0, jo.subtractPoints)(V, J)), {
        isDragging: !0,
        dx: n ? 0 : q.dx,
        dy: n ? 0 : q.dy,
        x: n ? Ae.x : Ae.x - q.dx,
        y: n ? Ae.y : Ae.y - q.dy
      };
    }, c && function(q) {
      c(Yr({}, q, {
        event: K
      }));
    });
  }, [c, n, M, H, _, o]), Z = (0, Oi.useCallback)(function(K) {
    K.persist(), _(function(q) {
      if (!q.isDragging)
        return q;
      var me = q.x, W = me === void 0 ? 0 : me, se = q.y, ce = se === void 0 ? 0 : se, he = (0, um.localPoint)(K) || new jo.Point({
        x: 0,
        y: 0
      }), ie = o ? he : (0, jo.sumPoints)(he, R), V = (0, cm.default)(ie, H, M);
      return Yr({}, q, {
        dx: V.x - W,
        dy: V.y - ce
      });
    }, s && function(q) {
      q.isDragging && s(Yr({}, q, {
        event: K
      }));
    });
  }, [_, s, o, R, H, M]), re = (0, Oi.useCallback)(function(K) {
    K.persist(), _(function(q) {
      return Yr({}, q, {
        isDragging: !1
      });
    }, f && function(q) {
      f(Yr({}, q, {
        event: K
      }));
    });
  }, [f, _]);
  return Yr({}, L, {
    dragEnd: re,
    dragMove: Z,
    dragStart: Y
  });
}
var Mc = uy, os = kh(vm), Gd = kh(ue), Ik = kh(gh);
function kh(e) {
  return e && e.__esModule ? e : { default: e };
}
function uy(e) {
  var t = e.captureDragArea, r = t === void 0 ? !0 : t, n = e.snapToPointer, a = n === void 0 ? !0 : n, o = e.children, f = e.dx, s = e.dy, c = e.height, d = e.onDragEnd, g = e.onDragMove, y = e.onDragStart, v = e.resetOnStart, E = e.width, k = e.x, M = e.y, T = e.isDragging, m = e.restrict, D = e.restrictToPath, L = (0, Ik.default)({
    resetOnStart: v,
    snapToPointer: a,
    onDragEnd: d,
    onDragMove: g,
    onDragStart: y,
    x: k,
    y: M,
    dx: f,
    dy: s,
    isDragging: T,
    restrict: m,
    restrictToPath: D
  });
  return /* @__PURE__ */ Gd.default.createElement(Gd.default.Fragment, null, L.isDragging && r && /* @__PURE__ */ Gd.default.createElement("rect", {
    width: E,
    height: c,
    onPointerDown: L.dragStart,
    onPointerMove: L.dragMove,
    onPointerUp: L.dragEnd,
    fill: "transparent"
  }), o(L));
}
uy.propTypes = {
  children: os.default.func.isRequired,
  width: os.default.number.isRequired,
  height: os.default.number.isRequired,
  captureDragArea: os.default.bool,
  isDragging: os.default.bool
};
function bc(e, t) {
  if ("invert" in e && typeof e.invert < "u")
    return e.invert(t).valueOf();
  var r = e.range(), n = r[0], a = r[1], o = 0, f = "step" in e && typeof e.step < "u" ? e.step() : 1, s = f * (a - n) / Math.abs(a - n);
  if (s > 0)
    for (; t > n + s * (o + 1); )
      o += 1;
  else
    for (; t < n + s * (o + 1); )
      o += 1;
  return o;
}
function dm(e, t, r, n) {
  var a, o = bc(e, t + (t < r ? -n : n)), f = bc(e, r + (r < t ? -n : n)), s = Math.min(o, f), c = Math.max(o, f);
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
function wh(e) {
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
function kr() {
  return kr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, kr.apply(this, arguments);
}
function Hk(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Of(e, t);
}
function Of(e, t) {
  return Of = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Of(e, t);
}
var cy = /* @__PURE__ */ function(e) {
  Hk(t, e);
  function t() {
    for (var n, a = arguments.length, o = new Array(a), f = 0; f < a; f++)
      o[f] = arguments[f];
    return n = e.call.apply(e, [this].concat(o)) || this, n.handleDragStart = function(s) {
      var c = n.props, d = c.onBrushHandleChange, g = c.type, y = c.onBrushStart;
      d && d(g, wh(s.event)), y && y(s);
    }, n.handleDragMove = function(s) {
      var c = n.props, d = c.updateBrush, g = c.type, y = c.isControlled;
      !s.isDragging || y || d(function(v) {
        var E = v.start, k = v.end, M = 0, T = Math.max(E.x, k.x), m = Math.min(E.x, k.x), D = Math.max(E.y, k.y), L = Math.min(E.y, k.y);
        switch (g) {
          case "right":
            return M = T + s.dx, kr({}, v, {
              activeHandle: g,
              extent: kr({}, v.extent, {
                x0: Math.max(Math.min(M, E.x), v.bounds.x0),
                x1: Math.min(Math.max(M, E.x), v.bounds.x1)
              })
            });
          case "left":
            return M = m + s.dx, kr({}, v, {
              activeHandle: g,
              extent: kr({}, v.extent, {
                x0: Math.min(M, k.x),
                x1: Math.max(M, k.x)
              })
            });
          case "bottom":
            return M = D + s.dy, kr({}, v, {
              activeHandle: g,
              extent: kr({}, v.extent, {
                y0: Math.min(M, E.y),
                y1: Math.max(M, E.y)
              })
            });
          case "top":
            return M = L + s.dy, kr({}, v, {
              activeHandle: g,
              extent: kr({}, v.extent, {
                y0: Math.min(M, k.y),
                y1: Math.max(M, k.y)
              })
            });
          default:
            return v;
        }
      });
    }, n.handleDragEnd = function() {
      var s = n.props, c = s.updateBrush, d = s.onBrushEnd, g = s.onBrushHandleChange, y = s.isControlled;
      y || c(function(v) {
        var E = v.start, k = v.end, M = v.extent;
        E.x = Math.min(M.x0, M.x1), E.y = Math.min(M.y0, M.y0), k.x = Math.max(M.x0, M.x1), k.y = Math.max(M.y0, M.y1);
        var T = kr({}, v, {
          start: E,
          end: k,
          activeHandle: null,
          isBrushing: !1,
          extent: {
            x0: Math.min(E.x, k.x),
            x1: Math.max(E.x, k.x),
            y0: Math.min(E.y, k.y),
            y1: Math.max(E.y, k.y)
          }
        });
        return d && d(T), T;
      }), g && g();
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var a = this, o = this.props, f = o.stageWidth, s = o.stageHeight, c = o.brush, d = o.type, g = o.handle, y = o.isControlled, v = o.isDragInProgress, E = o.renderBrushHandle, k = g.x, M = g.y, T = g.width, m = g.height, D = d === "right" || d === "left" ? "ew-resize" : "ns-resize";
    return /* @__PURE__ */ i.createElement(Mc, {
      width: f,
      height: s,
      onDragStart: this.handleDragStart,
      onDragMove: this.handleDragMove,
      onDragEnd: this.handleDragEnd,
      resetOnStart: !0,
      isDragging: y ? v : void 0
    }, function(L) {
      var _ = L.dragStart, N = L.dragEnd, R = L.dragMove, U = L.isDragging;
      return /* @__PURE__ */ i.createElement("g", null, U && /* @__PURE__ */ i.createElement("rect", {
        fill: "transparent",
        width: f,
        height: s,
        style: {
          cursor: D
        },
        onPointerMove: R,
        onPointerUp: y ? void 0 : N,
        onPointerLeave: y ? void 0 : N
      }), !E && /* @__PURE__ */ i.createElement("rect", {
        x: k,
        y: M,
        width: T,
        height: m,
        fill: "transparent",
        className: "visx-brush-handle-" + d,
        onPointerDown: _,
        onPointerMove: R,
        onPointerUp: y ? void 0 : N,
        style: {
          cursor: D,
          pointerEvents: c.activeHandle || c.isBrushing ? "none" : "all"
        }
      }), E && /* @__PURE__ */ i.createElement("g", {
        onPointerDown: _,
        onPointerMove: R,
        onPointerUp: y ? void 0 : N
      }, E(kr({}, a.props.handle, {
        height: s,
        className: "visx-brush-handle-" + d,
        isBrushActive: c.extent.x0 !== -1 && c.extent.x1 !== -1
      }))));
    });
  }, t;
}(i.Component);
cy.propTypes = {
  stageWidth: fe.number.isRequired,
  stageHeight: fe.number.isRequired,
  updateBrush: fe.func.isRequired,
  onBrushStart: fe.func,
  onBrushEnd: fe.func,
  handle: fe.shape({
    x: fe.number.isRequired,
    y: fe.number.isRequired,
    width: fe.number.isRequired,
    height: fe.number.isRequired
  }).isRequired,
  isControlled: fe.bool,
  isDragInProgress: fe.bool,
  onBrushHandleChange: fe.func,
  renderBrushHandle: fe.func
};
function fr() {
  return fr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, fr.apply(this, arguments);
}
function Wk(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Mf(e, t);
}
function Mf(e, t) {
  return Mf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Mf(e, t);
}
var Th = /* @__PURE__ */ function(e) {
  Wk(t, e);
  function t() {
    for (var n, a = arguments.length, o = new Array(a), f = 0; f < a; f++)
      o[f] = arguments[f];
    return n = e.call.apply(e, [this].concat(o)) || this, n.cornerDragMove = function(s) {
      var c = n.props, d = c.updateBrush, g = c.type;
      s.isDragging && d(function(y) {
        var v = y.start, E = y.end, k = Math.max(v.x, E.x), M = Math.min(v.x, E.x), T = Math.max(v.y, E.y), m = Math.min(v.y, E.y), D = 0, L = 0;
        switch (g) {
          case "topRight":
            return D = k + s.dx, L = m + s.dy, fr({}, y, {
              activeHandle: g,
              extent: fr({}, y.extent, {
                x0: Math.max(Math.min(D, v.x), y.bounds.x0),
                x1: Math.min(Math.max(D, v.x), y.bounds.x1),
                y0: Math.max(Math.min(L, E.y), y.bounds.y0),
                y1: Math.min(Math.max(L, E.y), y.bounds.y1)
              })
            });
          case "topLeft":
            return D = M + s.dx, L = m + s.dy, fr({}, y, {
              activeHandle: g,
              extent: fr({}, y.extent, {
                x0: Math.max(Math.min(D, E.x), y.bounds.x0),
                x1: Math.min(Math.max(D, E.x), y.bounds.x1),
                y0: Math.max(Math.min(L, E.y), y.bounds.y0),
                y1: Math.min(Math.max(L, E.y), y.bounds.y1)
              })
            });
          case "bottomLeft":
            return D = M + s.dx, L = T + s.dy, fr({}, y, {
              activeHandle: g,
              extent: fr({}, y.extent, {
                x0: Math.max(Math.min(D, E.x), y.bounds.x0),
                x1: Math.min(Math.max(D, E.x), y.bounds.x1),
                y0: Math.max(Math.min(L, v.y), y.bounds.y0),
                y1: Math.min(Math.max(L, v.y), y.bounds.y1)
              })
            });
          case "bottomRight":
            return D = k + s.dx, L = T + s.dy, fr({}, y, {
              activeHandle: g,
              extent: fr({}, y.extent, {
                x0: Math.max(Math.min(D, v.x), y.bounds.x0),
                x1: Math.min(Math.max(D, v.x), y.bounds.x1),
                y0: Math.max(Math.min(L, v.y), y.bounds.y0),
                y1: Math.min(Math.max(L, v.y), y.bounds.y1)
              })
            });
          default:
            return y;
        }
      });
    }, n.cornerDragEnd = function() {
      var s = n.props, c = s.updateBrush, d = s.onBrushEnd;
      c(function(g) {
        var y = g.start, v = g.end, E = g.extent;
        y.x = Math.min(E.x0, E.x1), y.y = Math.min(E.y0, E.y0), v.x = Math.max(E.x0, E.x1), v.y = Math.max(E.y0, E.y1);
        var k = fr({}, g, {
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
        return d && d(k), k;
      });
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var a = this.props, o = a.type, f = a.brush, s = a.stageWidth, c = a.stageHeight, d = a.style, g = a.corner, y = (d == null ? void 0 : d.cursor) || (o === "topLeft" || o === "bottomRight" ? "nwse-resize" : "nesw-resize"), v = f.activeHandle || f.isBrushing ? "none" : "all";
    return /* @__PURE__ */ i.createElement(Mc, {
      width: s,
      height: c,
      onDragMove: this.cornerDragMove,
      onDragEnd: this.cornerDragEnd,
      resetOnStart: !0
    }, function(E) {
      var k = E.dragMove, M = E.dragEnd, T = E.dragStart, m = E.isDragging;
      return /* @__PURE__ */ i.createElement("g", null, m && /* @__PURE__ */ i.createElement("rect", {
        fill: "transparent",
        width: s,
        height: c,
        style: {
          cursor: y
        },
        onPointerMove: k,
        onPointerUp: M
      }), /* @__PURE__ */ i.createElement("rect", fr({
        fill: "transparent",
        onPointerDown: T,
        onPointerMove: k,
        onPointerUp: M,
        className: "visx-brush-corner-" + o,
        style: fr({
          cursor: y,
          pointerEvents: v
        }, d)
      }, g)));
    });
  }, t;
}(i.Component);
Th.propTypes = {
  stageWidth: fe.number.isRequired,
  stageHeight: fe.number.isRequired,
  updateBrush: fe.func.isRequired,
  onBrushEnd: fe.func,
  corner: fe.shape({
    x: fe.number.isRequired,
    y: fe.number.isRequired,
    width: fe.number.isRequired,
    height: fe.number.isRequired
  }).isRequired
};
Th.defaultProps = {
  style: {}
};
function $a() {
  return $a = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $a.apply(this, arguments);
}
function Vk(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, _f(e, t);
}
function _f(e, t) {
  return _f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, _f(e, t);
}
var jk = {
  cursor: "move"
}, Ch = /* @__PURE__ */ function(e) {
  Vk(t, e);
  function t() {
    for (var n, a = arguments.length, o = new Array(a), f = 0; f < a; f++)
      o[f] = arguments[f];
    return n = e.call.apply(e, [this].concat(o)) || this, n.selectionDragStart = function(s) {
      var c = n.props, d = c.onMoveSelectionChange, g = c.onBrushStart;
      d && d("move", wh(s.event)), g && g(s);
    }, n.selectionDragMove = function(s) {
      var c = n.props, d = c.updateBrush, g = c.isControlled;
      g || d(function(y) {
        var v = y.start, E = v.x, k = v.y, M = y.end, T = M.x, m = M.y, D = s.dx > 0 ? Math.min(s.dx, y.bounds.x1 - T) : Math.max(s.dx, y.bounds.x0 - E), L = s.dy > 0 ? Math.min(s.dy, y.bounds.y1 - m) : Math.max(s.dy, y.bounds.y0 - k);
        return $a({}, y, {
          isBrushing: !0,
          extent: $a({}, y.extent, {
            x0: E + D,
            x1: T + D,
            y0: k + L,
            y1: m + L
          })
        });
      });
    }, n.selectionDragEnd = function() {
      var s = n.props, c = s.updateBrush, d = s.onBrushEnd, g = s.onMoveSelectionChange, y = s.isControlled;
      y || c(function(v) {
        var E = $a({}, v, {
          isBrushing: !1,
          start: $a({}, v.start, {
            x: Math.min(v.extent.x0, v.extent.x1),
            y: Math.min(v.extent.y0, v.extent.y1)
          }),
          end: $a({}, v.end, {
            x: Math.max(v.extent.x0, v.extent.x1),
            y: Math.max(v.extent.y0, v.extent.y1)
          })
        });
        return d && d(E), E;
      }), g && g();
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var a = this.props, o = a.width, f = a.height, s = a.stageWidth, c = a.stageHeight, d = a.brush, g = a.disableDraggingSelection, y = a.onMouseLeave, v = a.onMouseMove, E = a.onMouseUp, k = a.onClick, M = a.selectedBoxStyle, T = a.isControlled, m = a.isDragInProgress;
    return /* @__PURE__ */ i.createElement(Mc, {
      width: o,
      height: f,
      resetOnStart: !0,
      onDragStart: this.selectionDragStart,
      onDragMove: this.selectionDragMove,
      onDragEnd: this.selectionDragEnd,
      isDragging: T ? m : void 0
    }, function(D) {
      var L = D.isDragging, _ = D.dragStart, N = D.dragEnd, R = D.dragMove;
      return /* @__PURE__ */ i.createElement("g", null, L && /* @__PURE__ */ i.createElement("rect", {
        width: s,
        height: c,
        fill: "transparent",
        onPointerUp: T ? void 0 : N,
        onPointerMove: R,
        onPointerLeave: T ? void 0 : N,
        style: jk
      }), /* @__PURE__ */ i.createElement("rect", $a({
        x: Math.min(d.extent.x0, d.extent.x1),
        y: Math.min(d.extent.y0, d.extent.y1),
        width: o,
        height: f,
        className: "visx-brush-selection",
        onPointerDown: g ? void 0 : _,
        onPointerLeave: function(H) {
          y && y(H);
        },
        onPointerMove: function(H) {
          R(H), v && v(H);
        },
        onPointerUp: function(H) {
          T || N(H), E && E(H);
        },
        onClick: function(H) {
          k && k(H);
        },
        style: {
          pointerEvents: d.isBrushing || d.activeHandle ? "none" : "all",
          cursor: g ? void 0 : "move"
        }
      }, M)));
    });
  }, t;
}(i.Component);
Ch.propTypes = {
  width: fe.number.isRequired,
  height: fe.number.isRequired,
  stageWidth: fe.number.isRequired,
  stageHeight: fe.number.isRequired,
  updateBrush: fe.func.isRequired,
  onMoveSelectionChange: fe.func,
  onBrushStart: fe.func,
  onBrushEnd: fe.func,
  disableDraggingSelection: fe.bool.isRequired,
  onMouseLeave: fe.func,
  onMouseMove: fe.func,
  onMouseUp: fe.func,
  onClick: fe.func,
  isControlled: fe.bool,
  isDragInProgress: fe.bool
};
Ch.defaultProps = {
  onMouseLeave: null,
  onMouseUp: null,
  onMouseMove: null,
  onClick: null
};
function Nf() {
  return Nf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Nf.apply(this, arguments);
}
function Ff(e) {
  return /* @__PURE__ */ i.createElement(hr, Nf({
    className: "visx-brush-overlay",
    fill: "transparent",
    x: 0,
    y: 0
  }, e));
}
Ff.propTypes = {
  width: fe.number.isRequired,
  height: fe.number.isRequired,
  onClick: fe.func,
  onDoubleClick: fe.func,
  onPointerDown: fe.func,
  onPointerLeave: fe.func,
  onPointerMove: fe.func,
  onPointerUp: fe.func
};
function Qn() {
  return Qn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qn.apply(this, arguments);
}
function Uk(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, zf(e, t);
}
function zf(e, t) {
  return zf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, zf(e, t);
}
var Ah = /* @__PURE__ */ function(e) {
  Uk(t, e);
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
        var E = v.start, k = v.end, M = v.extent;
        E.x = Math.min(M.x0, M.x1), E.y = Math.min(M.y0, M.y0), k.x = Math.max(M.x0, M.x1), k.y = Math.max(M.y0, M.y1);
        var T = Qn({}, v, {
          activeHandle: null,
          isBrushing: !1,
          brushingType: void 0
        });
        return d && d(T), g && (T = Qn({}, T, a.getIdleState())), T;
      });
    }, a.handleWindowPointerMove = function(s) {
      var c = a.props.useWindowMoveEvents, d = a.state, g = d.brushingType, y = d.isBrushing, v = d.brushPageOffset, E = d.start;
      if (!(!c || !y)) {
        var k = s.pageX - ((v == null ? void 0 : v.pageX) || 0), M = s.pageY - ((v == null ? void 0 : v.pageY) || 0);
        ["left", "right", "top", "bottom"].includes(g ?? "") && a.updateBrush(function(T) {
          var m = T.start, D = m.x, L = m.y, _ = T.end, N = _.x, R = _.y;
          return Qn({}, T, {
            isBrushing: !0,
            extent: Qn({}, T.extent, a.getExtent({
              x: g === "left" ? Math.min(Math.max(D + k, T.bounds.x0), T.bounds.x1) : D,
              y: g === "top" ? Math.min(Math.max(L + M, T.bounds.y0), T.bounds.y1) : L
            }, {
              x: g === "right" ? Math.min(Math.max(N + k, T.bounds.x0), T.bounds.x1) : N,
              y: g === "bottom" ? Math.min(Math.max(R + M, T.bounds.y0), T.bounds.y1) : R
            }))
          });
        }), g === "move" && a.updateBrush(function(T) {
          var m = T.start, D = m.x, L = m.y, _ = T.end, N = _.x, R = _.y, U = k > 0 ? Math.min(k, T.bounds.x1 - N) : Math.max(k, T.bounds.x0 - D), H = M > 0 ? Math.min(M, T.bounds.y1 - R) : Math.max(M, T.bounds.y0 - L);
          return Qn({}, T, {
            isBrushing: !0,
            extent: Qn({}, T.extent, {
              x0: D + U,
              y0: L + H,
              x1: N + U,
              y1: R + H
            })
          });
        }), g === "select" && a.updateBrush(function(T) {
          var m = T.start, D = m.x, L = m.y, _ = {
            x: Math.min(Math.max(D + k, T.bounds.x0), T.bounds.x1),
            y: Math.min(Math.max(L + M, T.bounds.y0), T.bounds.y1)
          }, N = a.getExtent(E, _), R = Qn({}, T, {
            end: _,
            extent: N
          });
          return R;
        });
      }
    }, a.getExtent = function(s, c) {
      var d = a.props, g = d.brushDirection, y = d.width, v = d.height, E = g === "vertical" ? 0 : Math.min(s.x || 0, c.x || 0), k = g === "vertical" ? y : Math.max(s.x || 0, c.x || 0), M = g === "horizontal" ? 0 : Math.min(s.y || 0, c.y || 0), T = g === "horizontal" ? v : Math.max(s.y || 0, c.y || 0);
      return {
        x0: E,
        x1: k,
        y0: M,
        y1: T
      };
    }, a.handleDragStart = function(s) {
      var c = a.props, d = c.onBrushStart, g = c.left, y = c.top, v = c.inheritedMargin, E = c.useWindowMoveEvents, k = v != null && v.left ? v.left : 0, M = v != null && v.top ? v.top : 0, T = {
        x: (s.x || 0) + s.dx - g - k,
        y: (s.y || 0) + s.dy - y - M
      }, m = Qn({}, T);
      d && d(T), a.updateBrush(function(D) {
        return Qn({}, D, {
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
          brushPageOffset: E ? wh(s.event) : void 0
        });
      });
    }, a.handleBrushStart = function(s) {
      var c = a.props, d = c.onBrushStart, g = c.left, y = c.top, v = c.inheritedMargin;
      if (d) {
        var E = v != null && v.left ? v.left : 0, k = v != null && v.top ? v.top : 0, M = {
          x: (s.x || 0) + s.dx - g - E,
          y: (s.y || 0) + s.dy - y - k
        };
        d(M);
      }
    }, a.handleDragMove = function(s) {
      var c = a.props, d = c.left, g = c.top, y = c.inheritedMargin, v = c.useWindowMoveEvents;
      if (!(!s.isDragging || v)) {
        var E = (y == null ? void 0 : y.left) || 0, k = (y == null ? void 0 : y.top) || 0, M = {
          x: (s.x || 0) + s.dx - d - E,
          y: (s.y || 0) + s.dy - g - k
        };
        a.updateBrush(function(T) {
          var m = T.start, D = a.getExtent(m, M);
          return Qn({}, T, {
            end: M,
            extent: D
          });
        });
      }
    }, a.handleDragEnd = function() {
      var s = a.props, c = s.onBrushEnd, d = s.resetOnEnd, g = s.useWindowMoveEvents;
      g || a.updateBrush(function(y) {
        var v = y.extent, E = Qn({}, y, {
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
        return c && c(E), d && (E = Qn({}, E, a.getIdleState())), E;
      });
    }, a.getBrushWidth = function() {
      var s = a.state.extent, c = s.x0, d = s.x1;
      return Math.max(Math.max(c, d) - Math.min(c, d), 0);
    }, a.getBrushHeight = function() {
      var s = a.state.extent, c = s.y1, d = s.y0;
      return Math.max(Math.max(d, c) - Math.min(d, c), 0);
    }, a.handles = function() {
      var s = a.props.handleSize, c = a.state.extent, d = c.x0, g = c.x1, y = c.y0, v = c.y1, E = s / 2, k = a.getBrushWidth(), M = a.getBrushHeight();
      return {
        top: {
          x: d - E,
          y: y - E,
          height: s,
          width: k + s
        },
        bottom: {
          x: d - E,
          y: v - E,
          height: s,
          width: k + s
        },
        right: {
          x: g - E,
          y: y - E,
          height: M + s,
          width: s
        },
        left: {
          x: d - E,
          y: y - E,
          height: M + s,
          width: s
        }
      };
    }, a.corners = function() {
      var s = a.props.handleSize, c = a.state.extent, d = c.x0, g = c.x1, y = c.y0, v = c.y1, E = s / 2, k = s, M = s;
      return {
        topLeft: {
          x: Math.min(d, g) - E,
          y: Math.min(y, v) - E,
          width: k,
          height: M
        },
        topRight: {
          x: Math.max(d, g) - E,
          y: Math.min(y, v) - E,
          width: k,
          height: M
        },
        bottomLeft: {
          x: Math.min(d, g) - E,
          y: Math.max(y, v) - E,
          width: k,
          height: M
        },
        bottomRight: {
          x: Math.max(d, g) - E,
          y: Math.max(y, v) - E,
          width: k,
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
        var g = Qn({}, d, {
          brushingType: s,
          isBrushing: s !== void 0
        });
        return (c || s === void 0) && (g.brushPageOffset = c), g;
      });
    };
    var o = n.initialBrushPosition, f = o ? a.getExtent(o.start, o.end) : {
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
    var o = this;
    (this.props.width !== a.width || this.props.height !== a.height) && this.setState(function(f) {
      var s = f.start, c = f.end, d = f.extent;
      if (!(d.x0 === -1 && d.x1 === -1 && d.y0 === -1 && d.y1 === -1)) {
        var g = o.props.width / a.width, y = o.props.height / a.height;
        s = {
          x: g * d.x0,
          y: y * d.y0
        }, c = {
          x: g * d.x1,
          y: y * d.y1
        }, d = o.getExtent(s, c);
      }
      return {
        start: s,
        end: c,
        extent: d,
        bounds: {
          x0: 0,
          x1: o.props.width,
          y0: 0,
          y1: o.props.height
        }
      };
    });
  }, r.componentDidMount = function() {
    this.props.useWindowMoveEvents && (window.addEventListener("mouseup", this.handleWindowPointerUp), window.addEventListener("mousemove", this.handleWindowPointerMove));
  }, r.componentWillUnmount = function() {
    this.props.useWindowMoveEvents && (window.removeEventListener("mouseup", this.handleWindowPointerUp), window.removeEventListener("mousemove", this.handleWindowPointerMove));
  }, r.render = function() {
    var a = this, o = this.state, f = o.start, s = o.end, c = this.props, d = c.top, g = c.left, y = c.width, v = c.height, E = c.onMouseLeave, k = c.onMouseUp, M = c.onMouseMove, T = c.onBrushEnd, m = c.onClick, D = c.resizeTriggerAreas, L = c.selectedBoxStyle, _ = c.disableDraggingSelection, N = c.disableDraggingOverlay, R = c.clickSensitivity, U = c.useWindowMoveEvents, H = c.renderBrushHandle, Y = this.state.brushingType, Z = this.handles(), re = this.corners(), K = this.getBrushWidth(), q = this.getBrushHeight(), me = new Set(D);
    return /* @__PURE__ */ i.createElement(rt, {
      className: "visx-brush",
      top: d,
      left: g
    }, N ? /* @__PURE__ */ i.createElement(Ff, {
      width: y,
      height: v,
      onClick: function(se) {
        var ce = a.mouseUpTime - a.mouseDownTime;
        m && ce < R && m(se);
      },
      style: {
        cursor: "default"
      }
    }) : /* @__PURE__ */ i.createElement(Mc, {
      width: y,
      height: v,
      resetOnStart: !0,
      onDragStart: this.handleDragStart,
      onDragMove: this.handleDragMove,
      onDragEnd: this.handleDragEnd,
      isDragging: U ? Y === "select" : void 0
    }, function(W) {
      var se = W.dragStart, ce = W.isDragging, he = W.dragMove, ie = W.dragEnd;
      return /* @__PURE__ */ i.createElement(Ff, {
        width: y,
        height: v,
        onDoubleClick: function() {
          return a.reset();
        },
        onClick: function(J) {
          var ne = a.mouseUpTime - a.mouseDownTime;
          m && ne < R && m(J);
        },
        onPointerDown: function(J) {
          a.mouseDownTime = Date.now(), se(J);
        },
        onPointerLeave: function(J) {
          E && E(J);
        },
        onPointerMove: function(J) {
          !ce && M && M(J), ce && he(J);
        },
        onPointerUp: function(J) {
          a.mouseUpTime = Date.now(), k && k(J), ie(J);
        },
        style: {
          cursor: "crosshair"
        }
      });
    }), f && s && /* @__PURE__ */ i.createElement(Ch, {
      updateBrush: this.updateBrush,
      width: K,
      height: q,
      stageWidth: y,
      stageHeight: v,
      brush: this.state,
      disableDraggingSelection: _,
      onBrushEnd: T,
      onBrushStart: this.handleBrushStart,
      onMouseLeave: E,
      onMouseMove: M,
      onMouseUp: k,
      onMoveSelectionChange: this.handleBrushingTypeChange,
      onClick: m,
      selectedBoxStyle: L,
      isControlled: U,
      isDragInProgress: U ? Y === "move" : void 0
    }), f && s && Object.keys(Z).filter(function(W) {
      return me.has(W);
    }).map(function(W) {
      var se = Z[W];
      return se && /* @__PURE__ */ i.createElement(cy, {
        key: "handle-" + W,
        type: W,
        handle: se,
        stageWidth: y,
        stageHeight: v,
        updateBrush: a.updateBrush,
        brush: a.state,
        onBrushStart: a.handleBrushStart,
        onBrushEnd: T,
        isControlled: U,
        isDragInProgress: U ? Y === W : void 0,
        onBrushHandleChange: a.handleBrushingTypeChange,
        renderBrushHandle: H
      });
    }), f && s && Object.keys(re).filter(function(W) {
      return me.has(W);
    }).map(function(W) {
      var se = re[W];
      return se && /* @__PURE__ */ i.createElement(Th, {
        key: "corner-" + W,
        type: W,
        brush: a.state,
        updateBrush: a.updateBrush,
        stageWidth: y,
        stageHeight: v,
        corner: se,
        onBrushEnd: T
      });
    }));
  }, t;
}(i.Component);
Ah.propTypes = {
  brushDirection: fe.oneOf(["horizontal", "vertical", "both"]),
  width: fe.number.isRequired,
  height: fe.number.isRequired,
  left: fe.number.isRequired,
  top: fe.number.isRequired,
  onChange: fe.func,
  handleSize: fe.number,
  resizeTriggerAreas: fe.array,
  onBrushStart: fe.func,
  onBrushEnd: fe.func,
  onMouseLeave: fe.func,
  onMouseUp: fe.func,
  onMouseMove: fe.func,
  onClick: fe.func,
  clickSensitivity: fe.number,
  disableDraggingSelection: fe.bool,
  disableDraggingOverlay: fe.bool,
  resetOnEnd: fe.bool,
  useWindowMoveEvents: fe.bool,
  renderBrushHandle: fe.func
};
Ah.defaultProps = {
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
function Kk(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, $f(e, t);
}
function $f(e, t) {
  return $f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, $f(e, t);
}
var fm = 2, hm = "steelblue", Ph = /* @__PURE__ */ function(e) {
  Kk(t, e);
  function t() {
    for (var n, a = arguments.length, o = new Array(a), f = 0; f < a; f++)
      o[f] = arguments[f];
    return n = e.call.apply(e, [this].concat(o)) || this, n.handleChange = function(s) {
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
        var d = s.x, g = s.y, y = n.props, v = y.xScale, E = y.yScale, k = bc(v, d), M = bc(E, g);
        c({
          x: "invert" in v && typeof v.invert < "u" ? k : v.domain()[k],
          y: "invert" in E && typeof E.invert < "u" ? M : E.domain()[M]
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
    var o = this.props, f = o.xScale, s = o.yScale, c = a.extent, d = c.x0, g = c.x1, y = c.y0, v = c.y1, E = dm(f, d || 0, g || 0, fm), k = dm(s, y || 0, v || 0, fm), M = {
      x0: E.start || 0,
      x1: E.end || 0,
      xValues: E.values,
      y0: k.start || 0,
      y1: k.end || 0,
      yValues: k.values
    };
    return M;
  }, r.render = function() {
    var a = this.props, o = a.xScale, f = a.yScale, s = a.height, c = a.width, d = a.margin, g = a.brushDirection, y = a.initialBrushPosition, v = a.innerRef, E = a.resizeTriggerAreas, k = a.brushRegion, M = a.yAxisOrientation, T = a.xAxisOrientation, m = a.selectedBoxStyle, D = a.disableDraggingSelection, L = a.disableDraggingOverlay, _ = a.resetOnEnd, N = a.onMouseLeave, R = a.onMouseMove, U = a.onClick, H = a.handleSize, Y = a.useWindowMoveEvents, Z = a.renderBrushHandle;
    if (!o || !f)
      return null;
    var re, K, q, me, W = d != null && d.left ? d.left : 0, se = d != null && d.top ? d.top : 0, ce = d != null && d.right ? d.right : 0, he = d != null && d.bottom ? d.bottom : 0;
    return k === "chart" ? (q = 0, me = 0, re = c, K = s) : k === "yAxis" ? (me = 0, K = s, M === "right" ? (q = c, re = ce) : (q = -W, re = W)) : (q = 0, re = c, T === "bottom" ? (me = s, K = he) : (me = -se, K = se)), /* @__PURE__ */ i.createElement(Ah, {
      width: re,
      height: K,
      left: q,
      top: me,
      brushDirection: g,
      disableDraggingSelection: D,
      disableDraggingOverlay: L,
      handleSize: H,
      inheritedMargin: d,
      initialBrushPosition: y,
      ref: v,
      resetOnEnd: _,
      resizeTriggerAreas: E,
      selectedBoxStyle: m,
      onBrushEnd: this.handleBrushEnd,
      onBrushStart: this.handleBrushStart,
      onChange: this.handleChange,
      onClick: U,
      onMouseLeave: N,
      onMouseMove: R,
      useWindowMoveEvents: Y,
      renderBrushHandle: Z
    });
  }, t;
}(ue.Component);
Ph.propTypes = {
  height: fe.number,
  width: fe.number,
  onChange: fe.func,
  onBrushEnd: fe.func,
  brushDirection: fe.oneOf(["vertical", "horizontal", "both"]),
  resizeTriggerAreas: fe.array,
  brushRegion: fe.oneOf(["xAxis", "yAxis", "chart"]),
  yAxisOrientation: fe.oneOf(["left", "right"]),
  xAxisOrientation: fe.oneOf(["top", "bottom"]),
  disableDraggingSelection: fe.bool,
  disableDraggingOverlay: fe.bool,
  resetOnEnd: fe.bool,
  handleSize: fe.number,
  useWindowMoveEvents: fe.bool,
  renderBrushHandle: fe.func
};
Ph.defaultProps = {
  xScale: null,
  yScale: null,
  onChange: null,
  height: 0,
  width: 0,
  selectedBoxStyle: {
    fill: hm,
    fillOpacity: 0.2,
    stroke: hm,
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
const Yk = Ph, Xk = (e) => {
  const { transformedData: t, config: r, parseDate: n, formatDate: a, updateConfig: o } = ue.useContext(xt), { fontSize: f } = Rs(), [s, c] = ue.useState([...t]), d = ue.useRef(null), g = 15, [y, v] = ue.useState({
    startPosition: 0,
    endPosition: 0,
    startValue: "",
    endValue: ""
  }), E = {
    start: { x: 0 },
    end: { x: e.xMax }
  }, k = {
    fill: "#ddd",
    stroke: "blue",
    fillOpacity: 0.8,
    strokeOpacity: 0,
    rx: g
  }, M = (m) => {
    var H;
    if (!m)
      return;
    const { xValues: D } = m, L = (H = r.xAxis) == null ? void 0 : H.dataKey, _ = t.filter((Y) => D.includes(Y[L])), N = D.slice().reverse().find((Y) => Y !== void 0), R = D.find((Y) => Y !== void 0), U = (Y) => bn(r.runtime.xAxis) ? a(n(Y)) : Y;
    v((Y) => {
      var Z, re;
      return {
        ...Y,
        startPosition: (Z = d.current) == null ? void 0 : Z.state.start.x,
        endPosition: (re = d.current) == null ? void 0 : re.state.end.x,
        endValue: U(N),
        startValue: U(R)
      };
    }), c(_);
  };
  ue.useEffect(() => {
    o({
      ...r,
      brush: {
        ...r.brush,
        data: s
      }
    });
  }, [s]), ue.useEffect(() => {
    r.brush.active || c(t);
  }, [r.brush.active]);
  const T = () => {
    const m = Number(r.xAxis.tickRotation) > 0 ? Number(r.xAxis.tickRotation) : 0;
    let D = 0;
    const L = 20;
    return r.xAxis.label || (!r.isResponsiveTicks && m && (D = Number(m + r.xAxis.tickWidthMax) / 1.6), !r.isResponsiveTicks && !m && (D = Number(r.xAxis.labelOffset) - L), r.isResponsiveTicks && r.dynamicMarginTop && (D = Number(r.xAxis.labelOffset + r.xAxis.tickWidthMax / 1.6)), r.isResponsiveTicks && !r.dynamicMarginTop && (D = Number(r.xAxis.labelOffset - L))), r.xAxis.label && (!r.isResponsiveTicks && m && (D = Number(r.xAxis.tickWidthMax + m)), !r.isResponsiveTicks && !m && (D = r.xAxis.labelOffset + L), r.isResponsiveTicks && !m && (D = Number(r.dynamicMarginTop ? r.dynamicMarginTop : r.xAxis.labelOffset) + L)), D;
  };
  if (["Line", "Bar", "Area Chart", "Combo"].includes(r.visualizationType))
    return /* @__PURE__ */ i.createElement(rt, { display: r.brush.active ? "block" : "none", top: Number(e.yMax) + T(), left: Number(r.runtime.yAxis.size), pointerEvents: "fill" }, /* @__PURE__ */ i.createElement("rect", { fill: "#eee", width: e.xMax, height: r.brush.height, rx: g }), /* @__PURE__ */ i.createElement(
      Yk,
      {
        renderBrushHandle: (m) => {
          var D;
          return /* @__PURE__ */ i.createElement(qk, { textProps: y, fontSize: f[r.fontSize], ...m, isBrushing: (D = d.current) == null ? void 0 : D.state.isBrushing });
        },
        innerRef: d,
        useWindowMoveEvents: !0,
        selectedBoxStyle: k,
        xScale: e.xScaleBrush,
        yScale: e.yScale,
        width: e.xMax,
        resizeTriggerAreas: ["left", "right"],
        height: r.brush.height,
        handleSize: 8,
        brushDirection: "horizontal",
        initialBrushPosition: E,
        onChange: M
      }
    ));
}, qk = (e) => {
  const { x: t, isBrushActive: r, isBrushing: n, className: a, textProps: o } = e, f = 8;
  if (!r)
    return null;
  const s = a.includes("left"), c = s ? "scale(-1, 1)" : "translate(0,0)", d = s ? "end" : "start";
  return /* @__PURE__ */ i.createElement(rt, { left: t + f / 2, top: -2 }, /* @__PURE__ */ i.createElement(yt, { pointerEvents: "visiblePainted", dominantBaseline: "hanging", x: 0, verticalAnchor: "start", textAnchor: d, fontSize: e.fontSize / 1.4, dy: 10, y: 15 }, s ? o.startValue : o.endValue), /* @__PURE__ */ i.createElement("path", { cursor: "ew-resize", d: "M0.5,10A6,6 0 0 1 6.5,16V14A6,6 0 0 1 0.5,20ZM2.5,18V12M4.5,18V12", fill: n ? "#297EF1" : "#666", strokeWidth: "1", transform: c }));
}, Ur = (e) => {
  var mn, Dt, jt, yn, Tn;
  const { transformedData: t, dimensions: r, config: n, parseDate: a, formatDate: o, currentViewport: f, formatNumber: s, handleChartAriaLabels: c, updateConfig: d, handleLineType: g, getTextWidth: y } = ue.useContext(xt), { visualizationType: v, visualizationSubType: E, orientation: k, xAxis: M, yAxis: T, runtime: m, debugSvg: D } = n;
  let [L] = r;
  n && n.legend && !n.legend.hide && n.legend.position !== "bottom" && ["lg", "md"].includes(f) && (L = L * 0.73);
  const { horizontal: _ } = n.heights, N = k === "horizontal" || n.visualizationType === "Forest Plot", R = !0;
  let U = n.aspectRatio ? L * n.aspectRatio : n.visualizationType === "Forest Plot" ? n.heights.vertical : n.heights[k];
  const H = L - m.yAxis.size - (v === "Combo" ? n.yAxis.rightAxisSize : 0);
  let Y = U - (k === "horizontal" ? 0 : m.xAxis.size);
  n.visualizationType === "Forest Plot" && (U = U + n.data.length * n.forestPlot.rowHeight, Y = Y + n.data.length * n.forestPlot.rowHeight, L = r[0]), (mn = n.brush) != null && mn.active && (U = U + ((Dt = n.brush) == null ? void 0 : Dt.height));
  const { minValue: Z, maxValue: re, existPositiveValue: K, isAllLine: q } = Oc(n, t), { visSupportsReactTooltip: me } = Ds(), { hasTopAxis: W } = wk(n), [se, ce] = ue.useState(!1), [he, ie] = ue.useState({ x: 0, y: 0 }), V = ue.useRef(), J = ue.useRef(), ne = uh(V, {
    freezeOnceVisible: !1
  }), Ae = (Le) => bn(n.runtime.xAxis) ? a(Le[n.runtime.originalXAxis.dataKey]).getTime() : Le[n.runtime.originalXAxis.dataKey], xe = (Le, Ue) => Le[Ue], Pe = n.brush.active && ((jt = n.brush.data) != null && jt.length) ? n.brush.data.map((Le) => Ae(Le)) : t.map((Le) => Ae(Le)), le = n.orientation === "horizontal" || n.visualizationType === "Forest Plot" ? "yAxis" : "xAxis", _e = { data: t, config: n, minValue: Z, maxValue: re, isAllLine: q, existPositiveValue: K, xAxisDataMapped: Pe, xMax: H, yMax: Y }, { min: $e, max: Te, leftMax: ge, rightMax: Re } = ly(_e), { yScaleRight: oe, hasRightAxis: we } = mh({ config: n, yMax: Y, data: t, updateConfig: d }), { xScale: Ce, yScale: Be, seriesScale: je, g1xScale: qe, g2xScale: ot, xScaleNoPadding: Je, xScaleBrush: it } = xk({ ..._e, min: $e, max: Te, leftMax: ge, rightMax: Re, dimensions: r }), [Xe, Ie] = ue.useState(null);
  ue.useEffect(() => {
    var Le;
    Ie((Le = J == null ? void 0 : J.current) == null ? void 0 : Le.getBoundingClientRect());
  }, [J, n.legend]);
  const Me = (Le, Ue) => {
    if (n.useLogScale && Le === 0.1 && (Le = 0), !(n.data && !n.data[Ue] && v === "Forest Plot"))
      return n.visualizationType === "Forest Plot" ? n.data[Ue][n.xAxis.dataKey] : bn(m.yAxis) ? o(a(Le)) : k === "vertical" ? s(Le, "left", R) : Le;
  }, ut = (Le) => (n.useLogScale && Le === 0.1 && (Le = 0), bn(m.xAxis) && n.visualizationType !== "Forest Plot" ? o(Le) : k === "horizontal" && n.visualizationType !== "Forest Plot" ? s(Le, "left", R) : n.xAxis.type === "continuous" && n.visualizationType !== "Forest Plot" ? s(Le, "bottom", R) : n.visualizationType === "Forest Plot" ? s(Le, "left", n.dataFormat.abbreviated, n.runtime.xAxis.prefix, n.runtime.xAxis.suffix, Number(n.dataFormat.roundTo)) : Le), Ve = (Le) => {
    const { numTicks: Ue } = m[Le];
    let vt;
    return Le === "yAxis" && (vt = N && !Ue ? t.length : N && Ue ? Ue : !N && !Ue ? void 0 : !N && Ue && Ue, vt === void 0 && !n.dataFormat.roundTo && (Number(Te) <= 3 ? vt = 2 : vt = 4), Number(vt) > Number(Te) && (vt = Number($e) < 0 ? Math.round(Te) * 2 : Math.round(Te))), Le === "xAxis" && (vt = N && !Ue ? void 0 : N && Ue ? Ue : !N && !Ue ? void 0 : !N && Ue && Ue, N && vt === void 0 && !n.dataFormat.roundTo && (Te <= 3 ? vt = 2 : vt = 4), n.visualizationType === "Forest Plot" && (vt = n.yAxis.numTicks !== "" ? n.yAxis.numTicks : 4)), vt;
  }, { tooltipData: Ge, showTooltip: lt, hideTooltip: ct, tooltipOpen: wt, tooltipLeft: en, tooltipTop: an } = Mg(), {
    handleTooltipMouseOver: Lt,
    handleTooltipClick: $t,
    handleTooltipMouseOff: Ot,
    tooltipStyles: Gt,
    TooltipListItem: un,
    getXValueFromCoordinateDate: Ne,
    getXValueFromCoordinate: At
  } = $g({
    xScale: Ce,
    yScale: Be,
    showTooltip: lt,
    hideTooltip: ct
  });
  ue.useEffect(() => {
    document.querySelector(".isEditor") && ce((Ue) => !0);
  }), ue.useEffect(() => {
    (ne == null ? void 0 : ne.isIntersecting) === !0 && n.animate && setTimeout(() => {
      ce((Le) => !0);
    }, 500);
  }, [ne == null ? void 0 : ne.isIntersecting, n.animate]);
  const Zt = () => {
    const { visualizationType: Le } = n;
    return Le === "Combo" && m.forecastingSeriesKeys > 0 || Le === "Area Chart" || Le === "Line" || Le === "Bar";
  }, Ht = Number(k === "horizontal" ? n.xAxis.size : n.yAxis.size), Sn = () => n.visualizationType === "Forest Plot" ? n.data.length : Ve("yAxis"), bt = (Le) => {
    const Ue = Le.currentTarget.getBoundingClientRect(), vt = Le.clientX - Ue.left, et = Le.clientY - Ue.top;
    ie({
      x: vt,
      y: et
    });
  };
  return isNaN(L) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(_r, { component: "LinearChart" }, /* @__PURE__ */ i.createElement("div", { style: { width: `${L}px`, height: `${U}px`, overflow: "visible" }, className: "tooltip-boundary" }, /* @__PURE__ */ i.createElement(
    "svg",
    {
      onMouseMove: bt,
      width: "100%",
      height: "100%",
      className: `linear ${n.animate ? "animated" : ""} ${se && n.animate ? "animate" : ""} ${D && "debug"}`,
      role: "img",
      "aria-label": c(n),
      ref: J,
      style: { overflow: "visible" }
    },
    /* @__PURE__ */ i.createElement(hr, { width: L, height: U, fill: "transparent" }),
    " ",
    !["Spark Line", "Forest Plot"].includes(v) && /* @__PURE__ */ i.createElement(VE, { scale: Be, tickLength: n.useLogScale ? 6 : 8, left: Number(m.yAxis.size) - n.yAxis.axisPadding, label: ((yn = m.yAxis.yAxis) == null ? void 0 : yn.label) || m.yAxis.label, stroke: "#333", tickFormat: (Le, Ue) => Me(Le, Ue), numTicks: Sn() }, (Le) => {
      const Ue = n.orientation === "horizontal" ? (Le.axisToPoint.y - Le.axisFromPoint.y) / 2 : (Le.axisFromPoint.y - Le.axisToPoint.y) / 2, vt = Y / Le.ticks.length / 2 - Y / Le.ticks.length * (1 - n.barThickness) + 5;
      return /* @__PURE__ */ i.createElement(rt, { className: "left-axis" }, Le.ticks.map((et, on) => {
        const St = Le.ticks[0].to.y, En = 15, Fn = String(et.value).startsWith("1") || et.value === 0.1 ? "block" : "none", X = Fn === "block" ? 7 : 0, Fe = { x: et.to.x - X, y: et.to.y };
        return /* @__PURE__ */ i.createElement(rt, { key: `vx-tick-${et.value}-${on}`, className: "vx-axis-tick" }, !m.yAxis.hideTicks && /* @__PURE__ */ i.createElement(Jt, { key: `${et.value}--hide-hideTicks`, from: et.from, to: n.useLogScale ? Fe : et.to, stroke: n.yAxis.tickColor, display: k === "horizontal" ? "none" : "block" }), m.yAxis.gridLines ? /* @__PURE__ */ i.createElement(Jt, { key: `${et.value}--hide-hideGridLines`, display: (n.useLogScale && Fn).toString(), from: { x: et.from.x + H, y: et.from.y }, to: et.from, stroke: "rgba(0,0,0,0.3)" }) : "", k === "horizontal" && E !== "stacked" && n.yAxis.labelPlacement === "On Date/Category Axis" && !n.yAxis.hideLabel && /* @__PURE__ */ i.createElement(
          yt,
          {
            transform: `translate(${et.to.x - 5}, ${n.isLollipopChart ? et.to.y - St : et.to.y - St + (Number(n.barHeight * n.series.length) - En) / 2}) rotate(-${n.runtime.horizontal && n.runtime.yAxis.tickRotation || 0})`,
            verticalAnchor: "start",
            textAnchor: "end"
          },
          et.formattedValue
        ), k === "horizontal" && E === "stacked" && n.yAxis.labelPlacement === "On Date/Category Axis" && !n.yAxis.hideLabel && /* @__PURE__ */ i.createElement(yt, { transform: `translate(${et.to.x - 5}, ${et.to.y - St + (Number(n.barHeight) - En) / 2}) rotate(-${m.horizontal ? m.yAxis.tickRotation : 0})`, verticalAnchor: "start", textAnchor: "end" }, et.formattedValue), k === "horizontal" && v === "Paired Bar" && !n.yAxis.hideLabel && /* @__PURE__ */ i.createElement(yt, { transform: `translate(${et.to.x - 5}, ${et.to.y - St + Number(n.barHeight) / 2}) rotate(-${m.horizontal ? m.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, et.formattedValue), k === "horizontal" && v === "Deviation Bar" && !n.yAxis.hideLabel && /* @__PURE__ */ i.createElement(yt, { transform: `translate(${et.to.x - 5}, ${n.isLollipopChart ? et.to.y - St + 2 : et.to.y - St + Number(n.barHeight) / 2}) rotate(-${m.horizontal ? m.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, et.formattedValue), k === "vertical" && v !== "Paired Bar" && !n.yAxis.hideLabel && /* @__PURE__ */ i.createElement(
          yt,
          {
            display: n.useLogScale ? Fn : "block",
            dx: n.useLogScale ? -6 : 0,
            x: n.runtime.horizontal ? et.from.x + 2 : et.to.x,
            y: et.to.y + (n.runtime.horizontal ? vt : 0),
            angle: -Number(n.yAxis.tickRotation) || 0,
            verticalAnchor: n.runtime.horizontal ? "start" : "middle",
            textAnchor: n.runtime.horizontal ? "start" : "end",
            fill: n.yAxis.tickLabelColor
          },
          et.formattedValue
        ));
      }), !n.yAxis.hideAxis && /* @__PURE__ */ i.createElement(Jt, { from: Le.axisFromPoint, to: m.horizontal ? { x: 0, y: n.visualizationType === "Forest Plot" ? U : Number(_) } : Le.axisToPoint, stroke: "#000" }), Be.domain()[0] < 0 && /* @__PURE__ */ i.createElement(Jt, { from: { x: Le.axisFromPoint.x, y: Be(0) }, to: { x: H, y: Be(0) }, stroke: "#333" }), v === "Bar" && k === "horizontal" && Ce.domain()[0] < 0 && /* @__PURE__ */ i.createElement(Jt, { from: { x: Ce(0), y: 0 }, to: { x: Ce(0), y: Y }, stroke: "#333", strokeWidth: 2 }), /* @__PURE__ */ i.createElement(yt, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${-1 * m.yAxis.size}, ${Ue}) rotate(-90)`, fontWeight: "bold", fill: n.yAxis.labelColor }, Le.label));
    }),
    we && /* @__PURE__ */ i.createElement(YE, { scale: oe, left: Number(L - n.yAxis.rightAxisSize), label: n.yAxis.rightLabel, tickFormat: (Le) => s(Le, "right"), numTicks: m.yAxis.rightNumTicks || void 0, labelOffset: 45 }, (Le) => {
      const Ue = n.orientation === "horizontal" ? (Le.axisToPoint.y - Le.axisFromPoint.y) / 2 : (Le.axisFromPoint.y - Le.axisToPoint.y) / 2, vt = Y / Le.ticks.length / 2 - Y / Le.ticks.length * (1 - n.barThickness) + 5;
      return /* @__PURE__ */ i.createElement(rt, { className: "right-axis" }, Le.ticks.map((et, on) => /* @__PURE__ */ i.createElement(rt, { key: `vx-tick-${et.value}-${on}`, className: "vx-axis-tick" }, !m.yAxis.rightHideTicks && /* @__PURE__ */ i.createElement(Jt, { from: et.from, to: et.to, display: m.horizontal ? "none" : "block", stroke: n.yAxis.rightAxisTickColor }), m.yAxis.rightGridLines ? /* @__PURE__ */ i.createElement(Jt, { from: { x: et.from.x + H, y: et.from.y }, to: et.from, stroke: "rgba(0,0,0,0.3)" }) : "", !n.yAxis.rightHideLabel && /* @__PURE__ */ i.createElement(yt, { x: et.to.x, y: et.to.y + (m.horizontal ? vt : 0), verticalAnchor: m.horizontal ? "start" : "middle", textAnchor: "start", fill: n.yAxis.rightAxisTickLabelColor }, et.formattedValue))), !n.yAxis.rightHideAxis && /* @__PURE__ */ i.createElement(Jt, { from: Le.axisFromPoint, to: Le.axisToPoint, stroke: "#333" }), /* @__PURE__ */ i.createElement(yt, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${n.yAxis.rightLabelOffsetSize ? n.yAxis.rightLabelOffsetSize : 0}, ${Ue}) rotate(-90)`, fontWeight: "bold", fill: n.yAxis.rightAxisLabelColor }, Le.label));
    }),
    W && n.topAxis.hasLine && /* @__PURE__ */ i.createElement(
      ZE,
      {
        stroke: "#333",
        left: Number(m.yAxis.size),
        scale: Ce,
        hideTicks: !0,
        hideZero: !0,
        tickLabelProps: () => ({
          fill: "transparent"
        })
      }
    ),
    v !== "Paired Bar" && v !== "Spark Line" && /* @__PURE__ */ i.createElement(
      Hu,
      {
        top: m.horizontal && n.visualizationType !== "Forest Plot" ? Number(_) + Number(n.xAxis.axisPadding) : n.visualizationType === "Forest Plot" ? Y + Number(n.xAxis.axisPadding) : Y,
        left: n.visualizationType !== "Forest Plot" ? Number(m.yAxis.size) : 0,
        label: m.xAxis.label,
        tickFormat: ut,
        scale: Ce,
        stroke: "#333",
        numTicks: Ve("xAxis"),
        tickStroke: "#333",
        tickValues: n.xAxis.manual ? bk(Pe, Ce, n.xAxis.type === "date-time" ? Ve("xAxis") : n.xAxis.manualStep) : void 0
      },
      (Le) => {
        const Ue = n.visualizationType !== "Forest Plot" ? (Le.axisToPoint.x - Le.axisFromPoint.x) / 2 : r[0] / 2, vt = (dt) => /\s/.test(dt), et = Le.ticks.some((dt) => vt(dt.value)), on = { small: 16, medium: 18, large: 20 }, St = 8, En = Math.max(...Le.ticks.map((dt) => y(dt.formattedValue, `normal ${on[n.fontSize]}px sans-serif`))), Fn = et ? 180 : 100, X = Le.ticks.map((dt) => y(dt.formattedValue, `normal ${on[n.fontSize]}px sans-serif`)), Fe = X.reduce((dt, Ke) => dt + Ke, Fn), Ze = (H - Fe) / (Le.ticks.length - 1);
        let He = [0];
        for (let dt = 1; dt < X.length; dt++)
          He[dt] = He[dt - 1] + X[dt - 1] + Ze;
        let pt = !1;
        X.forEach((dt, Ke) => {
          if (He[Ke] + X[Ke] > He[Ke + 1]) {
            pt = !0;
            return;
          }
        });
        const at = pt && n.isResponsiveTicks ? En + St + 20 : 0, mt = Number(n.xAxis.tickRotation) > 0 ? Number(n.xAxis.tickRotation) : 0;
        return n.dynamicMarginTop = at, n.xAxis.tickWidthMax = En, /* @__PURE__ */ i.createElement(rt, { className: "bottom-axis", width: r[0] }, Le.ticks.map((dt, Ke, Wt) => {
          const Ut = String(dt.value).startsWith("1") || dt.value === 0.1 ? "block" : "none", nn = Ut === "block" ? 16 : St, Yt = { x: dt.to.x, y: nn };
          let Bt = y(dt.formattedValue, `normal ${on[n.fontSize]}px sans-serif`), Mt = 100 / Wt.length;
          n.yAxis.tickRotation = n.isResponsiveTicks && n.orientation === "horizontal" ? 0 : n.yAxis.tickRotation, n.xAxis.tickRotation = n.isResponsiveTicks && n.orientation === "vertical" ? 0 : n.xAxis.tickRotation;
          const _t = n.isResponsiveTicks && pt ? -Number(n.xAxis.maxTickRotation) || -90 : -Number(n.runtime.xAxis.tickRotation);
          return /* @__PURE__ */ i.createElement(rt, { key: `vx-tick-${dt.value}-${Ke}`, className: "vx-axis-tick" }, !n.xAxis.hideTicks && /* @__PURE__ */ i.createElement(Jt, { from: dt.from, to: k === "horizontal" && n.useLogScale ? Yt : dt.to, stroke: n.xAxis.tickColor, strokeWidth: Ut === "block" && n.useLogScale ? 1.3 : 1 }), !n.xAxis.hideLabel && /* @__PURE__ */ i.createElement(
            yt,
            {
              dy: n.orientation === "horizontal" && n.useLogScale ? 8 : 0,
              display: n.orientation === "horizontal" && n.useLogScale ? Ut : "block",
              x: dt.to.x,
              y: dt.to.y,
              angle: _t,
              verticalAnchor: _t < -50 ? "middle" : "start",
              textAnchor: _t ? "end" : "middle",
              width: pt && !n.isResponsiveTicks && !Number(n[le].tickRotation) ? Mt : Bt,
              fill: n.xAxis.tickLabelColor
            },
            dt.formattedValue
          ));
        }), !n.xAxis.hideAxis && /* @__PURE__ */ i.createElement(Jt, { from: Le.axisFromPoint, to: Le.axisToPoint, stroke: "#333" }), /* @__PURE__ */ i.createElement(
          yt,
          {
            x: Ue,
            y: n.visualizationType === "Forest Plot" ? n.xAxis.tickWidthMax + 40 : n.orientation === "horizontal" ? at || n.xAxis.labelOffset : n.isResponsiveTicks && at && !N ? at : Number(mt) && !n.isResponsiveTicks && !N ? Number(mt + En / 1.3) : Number(n.xAxis.labelOffset),
            textAnchor: "middle",
            verticalAnchor: "start",
            fontWeight: "bold",
            fill: n.xAxis.labelColor
          },
          Le.label
        ));
      }
    ),
    v === "Paired Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Hu, { top: Y, left: Number(m.yAxis.size), label: m.xAxis.label, tickFormat: bn(m.xAxis) ? o : s, scale: qe, stroke: "#333", tickStroke: "#333", numTicks: m.xAxis.numTicks || void 0 }, (Le) => /* @__PURE__ */ i.createElement(rt, { className: "bottom-axis" }, Le.ticks.map((Ue, vt) => {
      const et = Ue.index !== 0 ? n.yAxis.tickRotation : 0, on = Ue.index !== 0 && n.yAxis.tickRotation && n.yAxis.tickRotation > 0 ? "end" : "middle";
      return /* @__PURE__ */ i.createElement(rt, { key: `vx-tick-${Ue.value}-${vt}`, className: "vx-axis-tick" }, !m.yAxis.hideTicks && /* @__PURE__ */ i.createElement(Jt, { from: Ue.from, to: Ue.to, stroke: "#333" }), !m.yAxis.hideLabel && /* @__PURE__ */ i.createElement(yt, { x: Ue.to.x, y: Ue.to.y, angle: -et, verticalAnchor: "start", textAnchor: on }, s(Ue.value, "left")));
    }), !m.yAxis.hideAxis && /* @__PURE__ */ i.createElement(Jt, { from: Le.axisFromPoint, to: Le.axisToPoint, stroke: "#333" }))), /* @__PURE__ */ i.createElement(
      Hu,
      {
        top: Y,
        left: Number(m.yAxis.size),
        label: m.xAxis.label,
        tickFormat: bn(m.xAxis) ? o : m.xAxis.dataKey !== "Year" ? s : (Le) => Le,
        scale: ot,
        stroke: "#333",
        tickStroke: "#333",
        numTicks: m.xAxis.numTicks || void 0
      },
      (Le) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(rt, { className: "bottom-axis" }, Le.ticks.map((Ue, vt) => {
        const et = Ue.index !== 0 ? n.yAxis.tickRotation : 0, on = Ue.index !== 0 && n.yAxis.tickRotation && n.yAxis.tickRotation > 0 ? "end" : "middle";
        return /* @__PURE__ */ i.createElement(rt, { key: `vx-tick-${Ue.value}-${vt}`, className: "vx-axis-tick" }, !m.yAxis.hideTicks && /* @__PURE__ */ i.createElement(Jt, { from: Ue.from, to: Ue.to, stroke: "#333" }), !m.yAxis.hideLabel && /* @__PURE__ */ i.createElement(yt, { x: Ue.to.x, y: Ue.to.y, angle: -et, verticalAnchor: "start", textAnchor: on }, s(Ue.value, "left")));
      }), !m.yAxis.hideAxis && /* @__PURE__ */ i.createElement(Jt, { from: Le.axisFromPoint, to: Le.axisToPoint, stroke: "#333" })), /* @__PURE__ */ i.createElement(rt, null, /* @__PURE__ */ i.createElement(yt, { x: H / 2, y: n.xAxis.labelOffset, stroke: "#333", textAnchor: "middle", verticalAnchor: "start" }, m.xAxis.label)))
    )),
    v === "Deviation Bar" && ((Tn = n.series) == null ? void 0 : Tn.length) === 1 && /* @__PURE__ */ i.createElement(fk, { animatedChart: se, xScale: Ce, yScale: Be, width: H, height: Y }),
    v === "Paired Bar" && /* @__PURE__ */ i.createElement(vk, { originalWidth: L, width: H, height: Y }),
    v === "Scatter Plot" && /* @__PURE__ */ i.createElement(
      dk,
      {
        xScale: Ce,
        yScale: Be,
        getXAxisData: Ae,
        getYAxisData: xe,
        xMax: H,
        yMax: Y,
        handleTooltipMouseOver: Lt,
        handleTooltipMouseOff: Ot,
        handleTooltipClick: $t,
        tooltipData: Ge,
        showTooltip: lt
      }
    ),
    v === "Box Plot" && /* @__PURE__ */ i.createElement(ck, { xScale: Ce, yScale: Be }),
    (v === "Area Chart" && n.visualizationSubType === "regular" || v === "Combo") && /* @__PURE__ */ i.createElement(nk, { xScale: Ce, yScale: Be, yMax: Y, xMax: H, chartRef: J, width: H, height: Y, handleTooltipMouseOver: Lt, handleTooltipMouseOff: Ot, tooltipData: Ge, showTooltip: lt }),
    (v === "Area Chart" && n.visualizationSubType === "stacked" || v === "Combo") && /* @__PURE__ */ i.createElement(ak, { xScale: Ce, yScale: Be, yMax: Y, xMax: H, chartRef: J, width: H, height: Y, handleTooltipMouseOver: Lt, handleTooltipMouseOff: Ot, tooltipData: Ge, showTooltip: lt }),
    (v === "Bar" || v === "Combo") && /* @__PURE__ */ i.createElement(
      uk,
      {
        xScale: Ce,
        yScale: Be,
        seriesScale: je,
        xMax: H,
        yMax: Y,
        getXAxisData: Ae,
        getYAxisData: xe,
        animatedChart: se,
        visible: se,
        handleTooltipMouseOver: Lt,
        handleTooltipMouseOff: Ot,
        handleTooltipClick: $t,
        tooltipData: Ge,
        showTooltip: lt,
        chartRef: J
      }
    ),
    (v === "Line" || v === "Combo") && /* @__PURE__ */ i.createElement(
      im,
      {
        xScale: Ce,
        yScale: Be,
        getXAxisData: Ae,
        getYAxisData: xe,
        xMax: H,
        yMax: Y,
        seriesStyle: n.series,
        handleTooltipMouseOver: Lt,
        handleTooltipMouseOff: Ot,
        handleTooltipClick: $t,
        tooltipData: Ge,
        showTooltip: lt,
        chartRef: J
      }
    ),
    (v === "Forecasting" || v === "Combo") && /* @__PURE__ */ i.createElement(
      pk,
      {
        showTooltip: lt,
        tooltipData: Ge,
        xScale: Ce,
        yScale: Be,
        width: H,
        le: !0,
        height: Y,
        xScaleNoPadding: Je,
        chartRef: J,
        getXValueFromCoordinate: At,
        handleTooltipMouseOver: Lt,
        handleTooltipMouseOff: Ot,
        isBrush: !1
      }
    ),
    n.yAxis.anchors && n.yAxis.anchors.map((Le) => /* @__PURE__ */ i.createElement(Jt, { strokeDasharray: g(Le.lineStyle), stroke: "rgba(0,0,0,1)", className: "customAnchor", from: { x: 0 + n.yAxis.size, y: Be(Le.value) }, to: { x: H, y: Be(Le.value) }, display: m.horizontal ? "none" : "block" })),
    v === "Forest Plot" && /* @__PURE__ */ i.createElement(
      yk,
      {
        xScale: Ce,
        yScale: Be,
        seriesScale: je,
        width: L,
        height: U,
        getXAxisData: Ae,
        getYAxisData: xe,
        animatedChart: se,
        visible: se,
        handleTooltipMouseOver: Lt,
        handleTooltipMouseOff: Ot,
        handleTooltipClick: $t,
        tooltipData: Ge,
        showTooltip: lt,
        chartRef: J,
        config: n
      }
    ),
    ["Line", "Bar", "Combo", "Area Chart"].includes(n.visualizationType) && !N && /* @__PURE__ */ i.createElement(Xk, { xScaleBrush: it, yScale: Be, xMax: H, yMax: Y }),
    v !== "Bar" && v !== "Paired Bar" && v !== "Box Plot" && v !== "Area Chart" && v !== "Scatter Plot" && v !== "Deviation Bar" && v !== "Forecasting" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(im, { xScale: Ce, yScale: Be, getXAxisData: Ae, getYAxisData: xe, xMax: H, yMax: Y, seriesStyle: n.series })),
    n.yAxis.anchors && n.yAxis.anchors.map((Le, Ue) => {
      let vt = Be(Le.value);
      if (!Le.value)
        return;
      const et = k === "horizontal" && v === "Bar" ? n.barHeight / 4 : 0;
      if (vt)
        return (
          // prettier-ignore
          /* @__PURE__ */ i.createElement(
            Jt,
            {
              key: `yAxis-${Le.value}--${Ue}`,
              strokeDasharray: g(Le.lineStyle),
              stroke: Le.color ? Le.color : "rgba(0,0,0,1)",
              className: "anchor-y",
              from: { x: 0 + Ht, y: vt - et },
              to: { x: L - n.yAxis.rightAxisSize, y: vt - et }
            }
          )
        );
    }),
    n.xAxis.anchors && n.xAxis.anchors.map((Le, Ue) => {
      let vt = M;
      k === "horizontal" && (vt = T);
      let et = bn(vt) ? Ce(a(Le.value, !1)) : Ce(Le.value);
      if (et)
        return (
          // prettier-ignore
          /* @__PURE__ */ i.createElement(
            Jt,
            {
              key: `xAxis-${Le.value}--${Ue}`,
              strokeDasharray: g(Le.lineStyle),
              stroke: Le.color ? Le.color : "rgba(0,0,0,1)",
              fill: Le.color ? Le.color : "rgba(0,0,0,1)",
              className: "anchor-x",
              from: { x: Number(et) + Number(Ht), y: 0 },
              to: { x: Number(et) + Number(Ht), y: Y }
            }
          )
        );
    }),
    n.visualizationType !== "Bar" && n.visualizationType !== "Combo" && /* @__PURE__ */ i.createElement(ph, { xScale: Ce, handleTooltipClick: $t, handleTooltipMouseOff: Ot, handleTooltipMouseOver: Lt, showTooltip: lt, hideTooltip: ct, tooltipData: Ge, yMax: Y, width: L }),
    Zt && lt && Ge && n.visual.verticalHoverLine && /* @__PURE__ */ i.createElement(rt, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ i.createElement(Jt, { from: { x: Ge.dataXPosition - 10, y: 0 }, to: { x: Ge.dataXPosition - 10, y: Y }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" })),
    Zt && lt && Ge && n.visual.horizontalHoverLine && /* @__PURE__ */ i.createElement(rt, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: n.yAxis.size ? n.yAxis.size : 0 }, /* @__PURE__ */ i.createElement(Jt, { from: { x: 0, y: Ge.dataYPosition }, to: { x: H, y: Ge.dataYPosition }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    n.filters && n.filters.values.length === 0 && t.length === 0 && /* @__PURE__ */ i.createElement(yt, { x: Number(n.yAxis.size) + Number(H / 2), y: U / 2 - n.xAxis.size / 2, textAnchor: "middle" }, n.chartMessage.noData),
    n.visualizationType === "Bar" && n.tooltips.singleSeries && n.visual.horizontalHoverLine && /* @__PURE__ */ i.createElement(rt, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: n.yAxis.size ? n.yAxis.size : 0 }, /* @__PURE__ */ i.createElement(Jt, { from: { x: 0, y: he.y }, to: { x: H, y: he.y }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    n.visualizationType === "Bar" && n.tooltips.singleSeries && n.visual.verticalHoverLine && /* @__PURE__ */ i.createElement(rt, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ i.createElement(Jt, { from: { x: he.x, y: 0 }, to: { x: he.x, y: Y }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" }))
  ), Ge && Object.entries(Ge.data).length > 0 && wt && lt && Ge.dataYPosition && Ge.dataXPosition && !n.tooltips.singleSeries && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${n.tooltips.opacity / 100}) !important`), /* @__PURE__ */ i.createElement(zg, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: en, top: an }, /* @__PURE__ */ i.createElement("ul", null, typeof Ge == "object" && Object.entries(Ge.data).map((Le, Ue) => /* @__PURE__ */ i.createElement(un, { item: Le, key: Ue }))))), me() && /* @__PURE__ */ i.createElement(iy, { id: `cdc-open-viz-tooltip-${m.uniqueId}`, variant: "light", arrowColor: "rgba(0,0,0,0)", className: "tooltip", style: { background: `rgba(255,255,255, ${n.tooltips.opacity / 100})`, color: "black" } }), /* @__PURE__ */ i.createElement("div", { className: "animation-trigger", ref: V })));
};
var Gk = ["id", "markerWidth", "markerHeight", "markerUnits", "children"];
function Bf() {
  return Bf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Bf.apply(this, arguments);
}
function Zk(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function dy(e) {
  var t = e.id, r = e.markerWidth, n = r === void 0 ? 3 : r, a = e.markerHeight, o = a === void 0 ? 3 : a, f = e.markerUnits, s = f === void 0 ? "userSpaceOnUse" : f, c = e.children, d = Zk(e, Gk);
  return /* @__PURE__ */ i.createElement("defs", null, /* @__PURE__ */ i.createElement("marker", Bf({
    id: t,
    markerWidth: n,
    markerHeight: o,
    markerUnits: s
  }, d), c));
}
dy.propTypes = {
  id: fe.string.isRequired,
  size: fe.number,
  markerWidth: fe.oneOfType([fe.string, fe.number]),
  markerHeight: fe.oneOfType([fe.string, fe.number]),
  markerUnits: fe.string,
  refX: fe.oneOfType([fe.string, fe.number]),
  refY: fe.oneOfType([fe.string, fe.number]),
  strokeWidth: fe.number,
  children: fe.node.isRequired
};
var Qk = ["id", "size", "strokeWidth"];
function If() {
  return If = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, If.apply(this, arguments);
}
function Jk(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function ew(e) {
  var t = e.id, r = e.size, n = r === void 0 ? 9 : r, a = e.strokeWidth, o = a === void 0 ? 1 : a, f = Jk(e, Qk), s = n + o * 2, c = n, d = s / 2, g = "0 0, " + n + " " + n / 2 + ", 0 " + n;
  return /* @__PURE__ */ i.createElement(dy, If({
    id: t,
    markerWidth: s,
    markerHeight: s,
    refX: c,
    refY: d,
    orient: "auto",
    markerUnits: "strokeWidth",
    fill: "none",
    strokeWidth: o
  }, f), /* @__PURE__ */ i.createElement("g", {
    transform: "translate(" + o + ", " + o + ")"
  }, /* @__PURE__ */ i.createElement("polyline", {
    points: g
  })));
}
const tw = (e) => {
  var re;
  const { width: t, height: r } = e, { transformedData: n, config: a, parseDate: o, formatDate: f, seriesHighlight: s, formatNumber: c, colorScale: d, handleChartAriaLabels: g } = ue.useContext(xt);
  let y = Number(t);
  const { minValue: v, maxValue: E } = Oc(a, n), k = { top: 5, right: 10, bottom: 10, left: 10 }, M = Number(r), T = y - a.runtime.yAxis.size, m = M - k.top - 20, D = (K) => a.runtime.xAxis.type === "date" ? o(K[a.runtime.originalXAxis.dataKey]).getTime() : K[a.runtime.originalXAxis.dataKey], L = (K, q) => K[q];
  let _, N;
  const { max: R, min: U } = a.runtime.yAxis, H = Number(R) >= Number(E), Y = Number(U) <= Number(v);
  if (n) {
    let K = Number(U && Y ? U : v), q = Number(R && H ? R : Number.MIN_VALUE);
    if (q === Number.MIN_VALUE && (q = E), a.runtime.yAxis.paddingPercent) {
      let W = (q - K) * a.runtime.yAxis.paddingPercent;
      K -= W, q += W;
    }
    let me = n.map((W) => D(W));
    a.runtime.horizontal ? (_ = Hn({
      domain: [K, q],
      range: [0, T]
    }), N = a.runtime.xAxis.type === "date" ? Hn({ domain: [Math.min(...me), Math.max(...me)] }) : Ko({ domain: me, padding: 0.5 }), Ko({
      domain: a.runtime.barSeriesKeys || a.runtime.seriesKeys,
      range: [0, m]
    }), N.rangeRound([0, m])) : (K = K < 0 ? K * 1.11 : K, N = Hn({
      domain: [K, q],
      range: [m - k.bottom, k.top]
    }), _ = Ko({
      domain: me,
      range: [k.left, y - k.right]
    }), Ko({
      domain: a.runtime.barSeriesKeys || a.runtime.seriesKeys,
      range: [0, T]
    }));
  }
  const Z = [_.domain()[0], _.domain()[_.domain().length - 1]];
  return /* @__PURE__ */ i.createElement(_r, { component: "SparkLine" }, /* @__PURE__ */ i.createElement("svg", { role: "img", "aria-label": g(a), width: t, height: 100, className: "sparkline", tabIndex: 0 }, /* @__PURE__ */ i.createElement("title", null, `Spark line graphic with the title ${a.title ? a.title : "No Title Found"}`), ((re = a.runtime.lineSeriesKeys) == null ? void 0 : re.length) > 0 ? a.runtime.lineSeriesKeys : a.runtime.seriesKeys.map((K, q) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    rt,
    {
      style: { width: y },
      className: "sparkline-group",
      key: `series-${K}`,
      opacity: a.legend.behavior === "highlight" && s.length > 0 && s.indexOf(K) === -1 ? 0.5 : 1,
      display: a.legend.behavior === "highlight" || s.length === 0 || s.indexOf(K) !== -1 ? "block" : "none"
    },
    n.map((me, W) => /* @__PURE__ */ i.createElement(rt, { key: `series-${K}-point-${W}` }, /* @__PURE__ */ i.createElement(yt, { display: a.labels ? "block" : "none", x: _(D(me)), y: N(L(me, K)), fill: d ? d(a.runtime.seriesLabels ? a.runtime.seriesLabels[K] : K) : "#000", textAnchor: "middle" }, c(me[K])))),
    /* @__PURE__ */ i.createElement(
      da,
      {
        curve: wc,
        data: n,
        x: (me) => _(D(me)),
        y: (me) => N(L(me, K)),
        stroke: d ? d(a.runtime.seriesLabels ? a.runtime.seriesLabels[K] : K) : "#000",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        markerEnd: `url(#arrow--${q})`
      }
    ),
    /* @__PURE__ */ i.createElement(ew, { id: `arrow--${q}`, refX: 2, size: 6, markerEnd: `url(#arrow--${q})`, strokeOpacity: 1, fillOpacity: 1, fill: d ? d(a.runtime.seriesLabels ? a.runtime.seriesLabels[K] : K) : "#000" })
  ), /* @__PURE__ */ i.createElement(
    Hu,
    {
      top: m + k.top,
      hideAxisLine: !0,
      hideTicks: !0,
      scale: _,
      tickValues: Z,
      tickFormat: (me) => a.xAxis.type === "date" ? f(me) : null,
      stroke: "black",
      tickStroke: "black",
      tickLabelProps: () => ({
        fill: "black",
        fontSize: 11,
        textAnchor: "middle"
      })
    }
  )))));
}, nw = ue.forwardRef((e, t) => {
  const {
    config: r,
    colorScale: n,
    seriesHighlight: a,
    highlight: o,
    tableData: f,
    highlightReset: s,
    transformedData: c,
    currentViewport: d
  } = ue.useContext(xt);
  if (!r.legend)
    return null;
  const g = Ug(r, f, c, n);
  return !["Box Plot", "Pie"].includes(r.visualizationType) && /* @__PURE__ */ i.createElement(jg, { ref: t, skipId: e.skipId || "legend", config: r, colorScale: n, seriesHighlight: a, highlight: o, highlightReset: s, currentViewport: d, formatLabels: g });
}), Zd = {
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
}, Vu = (e) => /* @__PURE__ */ ue.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...e }, /* @__PURE__ */ ue.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), rw = ({ name: e }) => {
  var s, c, d, g, y;
  const { config: t, rawData: r, updateConfig: n } = ue.useContext(xt);
  if (t.visualizationType !== "Forest Plot")
    return;
  const a = (v) => {
    v.orientation === "horizontal" && (v.labels = !1), v.table.show === void 0 && (v.table.show = !isDashboard), v.visualizationType === "Combo" && (v.orientation = "vertical");
  }, o = (v = !0) => {
    let E = {};
    return r.forEach((k) => {
      Object.keys(k).forEach((M) => E[M] = !0);
    }), v && Object.keys(E).forEach((k) => {
      (t.series && t.series.filter((M) => M.dataKey === k).length > 0 || t.confidenceKeys && Object.keys(t.confidenceKeys).includes(k)) && delete E[k];
    }), Object.keys(E);
  }, f = (v, E, k, M) => {
    if (v === "boxplot" && E === "legend") {
      n({
        ...t,
        [v]: {
          ...t[v],
          [E]: {
            ...t.boxplot[E],
            [k]: M
          }
        }
      });
      return;
    }
    if (v === "boxplot" && E === "labels") {
      n({
        ...t,
        [v]: {
          ...t[v],
          [E]: {
            ...t.boxplot[E],
            [k]: M
          }
        }
      });
      return;
    }
    if (v === "forestPlot" && E) {
      let L = {
        ...t,
        [v]: {
          ...t[v],
          [E]: {
            ...t.forestPlot[E],
            [k]: M
          }
        }
      };
      n(L);
      return;
    }
    if (v === "columns" && E !== "" && k !== "") {
      n({
        ...t,
        [v]: {
          ...t[v],
          [E]: {
            ...t[v][E],
            [k]: M
          }
        }
      });
      return;
    }
    if (v === null && E === null) {
      let L = { ...t, [k]: M };
      a(L), n(L);
      return;
    }
    const T = Array.isArray(t[v]);
    let m = T ? [...t[v], M] : { ...t[v], [k]: M };
    E !== null && (T ? (m = [...t[v]], m[E] = { ...m[E], [k]: M }) : typeof M == "string" ? m[E] = M : m = { ...t[v], [E]: { ...t[v][E], [k]: M } });
    let D = { ...t, [v]: m };
    a(D), n(D);
  };
  return /* @__PURE__ */ i.createElement(An, null, /* @__PURE__ */ i.createElement(Pn, null, /* @__PURE__ */ i.createElement(Rn, null, e, (!t.forestPlot.estimateField || !t.forestPlot.upper || !t.forestPlot.lower) && /* @__PURE__ */ i.createElement(Vu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(
    kt,
    {
      value: t.xAxis.dataKey || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Study Column",
      initial: "Select",
      required: !0,
      updateField: f,
      options: o(!1),
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
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
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Linear - Typically used for continuous outcomes. Line of no effect is positioned on 0 (zero) ", /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("br", null), " Logarithmic - Typically used for binary outcomes such as risk ratios and odds ratios. Line of no effect is positioned on 1.")))
    }
  ), /* @__PURE__ */ i.createElement(Qe, { type: "text", value: ((s = t.forestPlot) == null ? void 0 : s.title) || "", updateField: f, section: "forestPlot", fieldName: "title", label: "Plot Title" }), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("h4", null, "Column Settings"), /* @__PURE__ */ i.createElement(
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
      options: o(!1)
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
      options: o(!1)
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
      options: o(!1)
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
  ))), /* @__PURE__ */ i.createElement(ft, { value: ((d = (c = t.forestPlot) == null ? void 0 : c.lineOfNoEffect) == null ? void 0 : d.show) || !1, section: "forestPlot", subsection: "lineOfNoEffect", fieldName: "show", label: "Show Line of No Effect", updateField: f }), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("h4", null, "Width Settings"), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Left (%)"), /* @__PURE__ */ i.createElement(
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
  )), /* @__PURE__ */ i.createElement(Qe, { type: "number", min: 20, max: 45, value: t.forestPlot.rowHeight ? t.forestPlot.rowHeight : 10, updateField: f, section: "forestPlot", fieldName: "rowHeight", label: "Row Height", placeholder: "10" }), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("h4", null, "Labels Settings"), /* @__PURE__ */ i.createElement(Qe, { type: "text", value: ((g = t.forestPlot) == null ? void 0 : g.leftLabel) || "", updateField: f, section: "forestPlot", fieldName: "leftLabel", label: "Left Label" }), /* @__PURE__ */ i.createElement(Qe, { type: "text", value: ((y = t.forestPlot) == null ? void 0 : y.rightLabel) || "", updateField: f, section: "forestPlot", fieldName: "rightLabel", label: "Right Label" }), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement(
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
      options: o(!1)
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
}, rl = i.createContext(), aw = (e) => {
  const { updateConfig: t, config: r, rawData: n } = ue.useContext(xt), { getColumns: a, selectComponent: o } = e, f = ["Line", "dashed-sm", "dashed-md", "dashed-lg"], s = (c, d, g) => {
    let y = [...r.series];
    if (y[c][g] = d, g === "type" && d === "Bar" && (y[c].axis = "Left"), y[c].type === "Forecasting") {
      let v = Array.from(new Set(n.map((k) => k[y[c].dataKey]))), E = [];
      v.forEach((k) => {
        E.push({ key: k });
      }), y[c].stages = E, y[c].stageColumn = y[c].dataKey;
    }
    t({ ...r, series: y });
  };
  return /* @__PURE__ */ i.createElement(rl.Provider, { value: { updateSeries: s, supportedRightAxisTypes: f, getColumns: a, selectComponent: o } }, e.children);
}, iw = (e) => {
  const { config: t, updateConfig: r } = ue.useContext(xt), { series: n, index: a } = e;
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
  return Object.keys(xc).map((c) => s.push(xc[c])), /* @__PURE__ */ i.createElement(
    Ha,
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
}, ow = (e) => {
  const { config: t } = ue.useContext(xt), { updateSeries: r } = ue.useContext(rl), { index: n, series: a } = e, o = () => {
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
      Ha,
      {
        initial: "Select an option",
        value: a.type,
        label: "Series Type",
        onChange: (f) => {
          r(n, f.target.value, "type");
        },
        options: o()
      }
    );
}, lw = (e) => {
  const { config: t, updateConfig: r, rawData: n } = ue.useContext(xt), { updateSeries: a, getColumns: o } = ue.useContext(rl), { index: f, series: s } = e;
  return /* @__PURE__ */ i.createElement(
    Ha,
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
      options: o(!1)
    }
  );
}, sw = (e) => {
  const { config: t, rawData: r } = ue.useContext(xt), { updateSeries: n } = ue.useContext(rl), { index: a, series: o } = e;
  if (o.type !== "Forecasting" || !r || !o.stageColumn)
    return;
  let f = new Set(r.map((s) => s[o.stageColumn]));
  return f = Array.from(f), f = f.filter((s) => s !== void 0), /* @__PURE__ */ i.createElement(
    Ha,
    {
      initial: "Select an option",
      value: o.stageItem,
      label: "Forecasting Item Column",
      onChange: (s) => {
        n(a, s.target.value, "stageItem");
      },
      options: f
    }
  );
}, uw = (e) => {
  const { config: t } = ue.useContext(xt), { updateSeries: r, supportedRightAxisTypes: n } = ue.useContext(rl), { index: a, series: o } = e;
  if (!(t.visualizationType !== "Combo" || !o) && n.includes(o.type))
    return /* @__PURE__ */ i.createElement(
      Ha,
      {
        initial: "Select an option",
        value: o.axis ? o.axis : "Left",
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
}, cw = (e) => {
  var o;
  const { config: t, updateConfig: r } = ue.useContext(xt), { index: n, series: a } = e;
  if (a.type === "Forecasting" && a)
    return (o = a == null ? void 0 : a.stages) == null ? void 0 : o.map((f, s) => {
      var c, d, g, y;
      return /* @__PURE__ */ i.createElement(
        Ha,
        {
          key: `${f}--${s}`,
          initial: "Select an option",
          value: (d = (c = t.series) == null ? void 0 : c[n].stages) != null && d[s].color ? (y = (g = t.series) == null ? void 0 : g[n].stages) == null ? void 0 : y[s].color : "Select",
          label: `${f.key} Series Color`,
          onChange: (v) => {
            const E = [...t.series], k = E[n].stages;
            k[s].color = v.target.value, E[n] = { ...E[n], stages: k }, r({
              ...t,
              series: E
            });
          },
          options: Object.keys(Uu)
        }
      );
    });
}, dw = (e) => {
  var f;
  const { config: t, updateConfig: r } = ue.useContext(xt), { series: n, index: a } = e, { getColumns: o } = ue.useContext(rl);
  if (n.type === "Forecasting")
    return /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Confidence Interval Groups"), /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement(_i, { allowZeroExpanded: !0 }, (f = n == null ? void 0 : n.confidenceIntervals) == null ? void 0 : f.map((s, c) => {
      const d = s.showInTooltip ? s.showInTooltip : !1, g = (y, v, E) => {
        y.preventDefault();
        let k = [...t.series];
        k[v].confidenceIntervals[E].showInTooltip = !d, r({
          ...t,
          series: k
        });
      };
      return /* @__PURE__ */ i.createElement(An, { className: "series-item series-item--chart", key: `${c}` }, /* @__PURE__ */ i.createElement(Pn, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Rn, { className: "accordion__button accordion__button" }, "Group ", c + 1, /* @__PURE__ */ i.createElement(
        "button",
        {
          className: "series-list__remove",
          onClick: (y) => {
            y.preventDefault();
            const v = [...t.series[a].confidenceIntervals];
            v.splice(c, 1);
            const E = [...t.series];
            E[a] = { ...E[a], confidenceIntervals: [...v] }, r({
              ...t,
              series: E
            });
          }
        },
        "Remove"
      )))), /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement("div", { className: "input-group" }, /* @__PURE__ */ i.createElement("label", { htmlFor: "showInTooltip" }, "Show In Tooltip"), /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox--small", onClick: (y) => g(y, a, c) }, /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, d && /* @__PURE__ */ i.createElement(Tm, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ i.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: "showInTooltip", checked: d || !1, readOnly: !0 }))), /* @__PURE__ */ i.createElement(
        Ha,
        {
          initial: "Select an option",
          value: t.series[a].confidenceIntervals[c].low ? t.series[a].confidenceIntervals[c].low : "Select",
          label: "Low Confidence Interval",
          onChange: (y) => {
            const v = [...t.series[a].confidenceIntervals];
            v[c].low = y.target.value;
            const E = [...t.series];
            E[a] = { ...E[a], confidenceIntervals: v }, r({
              ...t,
              series: E
            });
          },
          options: o()
        }
      ), /* @__PURE__ */ i.createElement(
        Ha,
        {
          initial: "Select an option",
          value: t.series[a].confidenceIntervals[c].high ? t.series[a].confidenceIntervals[c].high : "Select",
          label: "High Confidence Interval",
          onChange: (y) => {
            const v = [...t.series[a].confidenceIntervals];
            v[c].high = y.target.value;
            const E = [...t.series];
            E[a] = { ...E[a], confidenceIntervals: v }, r({
              ...t,
              series: E
            });
          },
          options: o()
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
}, fw = (e) => {
  const { series: t, index: r } = e, { config: n, updateConfig: a } = ue.useContext(xt);
  if (!["Line", "Combo", "dashed-sm", "dashed-md", "dashed-lg"].includes(t.type))
    return;
  const f = (s, c, d, g) => {
    let y = [...n.series], v = { ...n.runtime.seriesLabels };
    y[s].weight = c && Math.max(Number(d), Math.min(Number(g), Number(c))), v[y[s].dataKey] = y[s].weight ? y[s].weight : y[s].dataKey;
    const E = {
      ...n,
      series: y,
      runtime: {
        ...n.runtime,
        seriesLabels: v
      }
    };
    a(E);
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", { htmlFor: "series-weight" }, "Line Weight"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "number",
      key: `series-weight-${r}`,
      value: t.weight ? t.weight : "",
      min: "1",
      max: "9",
      onChange: (s) => {
        f(r, s.target.value, s.target.min, s.target.max);
      }
    }
  ));
}, hw = (e) => {
  const { series: t, index: r } = e, { config: n, updateConfig: a } = ue.useContext(xt);
  if (!["Bar", "Line", "Area Chart", "Combo", "Deviation Bar", "Paired Bar", "Scatter Plot", "dashed-sm", "dashed-md", "dashed-lg"].includes(t.type))
    return;
  const f = (s, c) => {
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
}, pw = (e) => {
  const { series: t, index: r } = e, { config: n, updateConfig: a } = ue.useContext(xt);
  if (["Paired Bar", "Scatter Plot", "Deviation Bar"].includes(n.visualizationType))
    return;
  const o = (f) => {
    let s = [...n.series];
    s[f].tooltip && s[f].tooltip, s[f].tooltip = !s[f].tooltip, a({
      ...n,
      series: s
    });
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: "input-group" }, /* @__PURE__ */ i.createElement("label", { htmlFor: `series-tooltip--${r}` }, "Show In Tooltip"), /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox--small", onClick: (f) => o(r) }, /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, t.tooltip && /* @__PURE__ */ i.createElement(Tm, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ i.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: `series-tooltip--${r}`, checked: t.tooltip ? t.tooltip : !1, readOnly: !0 }))));
}, mw = (e) => {
  const { config: t, updateConfig: r } = ue.useContext(xt), { series: n, index: a } = e, o = (s) => {
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
    s.preventDefault(), o(c.dataKey);
  };
  return t.series && t.series.length > 1 && /* @__PURE__ */ i.createElement("button", { className: "series-list__remove", onClick: (s) => f(s, n) }, "Remove");
}, fy = (e) => {
  const { config: t } = ue.useContext(xt), { series: r, getItemStyle: n, sortableItemStyles: a, chartsWithOptions: o, index: f } = e;
  return /* @__PURE__ */ i.createElement(yy, { key: r.dataKey, draggableId: `draggableFilter-${r.dataKey}`, index: f }, (s, c) => /* @__PURE__ */ i.createElement("div", { key: f, className: c.isDragging ? "currently-dragging" : "", style: n(c.isDragging, s.draggableProps.style, a), ref: s.innerRef, ...s.draggableProps, ...s.dragHandleProps }, /* @__PURE__ */ i.createElement(_i, { allowZeroExpanded: !0 }, /* @__PURE__ */ i.createElement(An, { className: "series-item series-item--chart" }, /* @__PURE__ */ i.createElement(Pn, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(Rn, { className: o.includes(t.visualizationType) ? "accordion__button" : "accordion__button hide-arrow" }, /* @__PURE__ */ i.createElement(Ct, { display: "move", size: 15, style: { cursor: "default" } }), r.dataKey, /* @__PURE__ */ i.createElement(Kr.Button.Remove, { series: r, index: f }))), o.includes(t.visualizationType) && /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(Kr.Input.Name, { series: r, index: f }), /* @__PURE__ */ i.createElement(Kr.Input.Weight, { series: r, index: f }), /* @__PURE__ */ i.createElement(Kr.Dropdown.SeriesType, { series: r, index: f }), /* @__PURE__ */ i.createElement(Kr.Dropdown.AxisPosition, { series: r, index: f }), /* @__PURE__ */ i.createElement(Kr.Dropdown.LineType, { series: r, index: f }), /* @__PURE__ */ i.createElement(Kr.Dropdown.ForecastingColor, { series: r, index: f }), /* @__PURE__ */ i.createElement(Kr.Dropdown.ConfidenceInterval, { series: r, index: f }), /* @__PURE__ */ i.createElement(Kr.Checkbox.DisplayInTooltip, { series: r, index: f }))))));
}, gw = (e) => {
  const { series: t, getItemStyle: r, sortableItemStyles: n, chartsWithOptions: a } = e;
  return t.map((o, f) => /* @__PURE__ */ i.createElement(fy, { getItemStyle: r, sortableItemStyles: n, chartsWithOptions: a, series: o, index: f, key: `series-list-${f}` }));
}, Kr = {
  Wrapper: aw,
  Dropdown: {
    SeriesType: ow,
    AxisPosition: uw,
    ConfidenceInterval: dw,
    LineType: iw,
    ForecastingStage: lw,
    ForecastingColumn: sw,
    ForecastingColor: cw
  },
  Input: {
    Name: hw,
    Weight: fw
  },
  Checkbox: {
    DisplayInTooltip: pw
  },
  Button: {
    Remove: mw
  },
  Item: fy,
  List: gw
}, yw = ue.memo(({ config: e, updateConfig: t }) => {
  let r = (c, d, g) => {
    let y = [];
    e.regions && (y = [...e.regions]), y[g][c] = d, t({ ...e, regions: y });
  }, n = (c, d, g, y, v) => r(g, y, v), a = (c) => {
    let d = [];
    e.regions && (d = [...e.regions]), d.splice(c, 1), t({ ...e, regions: d });
  }, o = () => {
    let c = [];
    e.regions && (c = [...e.regions]), c.push({}), t({ ...e, regions: c });
  };
  const f = ["Fixed", "Previous Days"], s = ["Last Date", "Fixed"];
  return /* @__PURE__ */ i.createElement(i.Fragment, null, e.regions && e.regions.map(({ label: c, color: d, from: g, to: y, background: v, range: E = "Custom" }, k) => {
    var M;
    return /* @__PURE__ */ i.createElement("div", { className: "edit-block", key: `region-${k}` }, /* @__PURE__ */ i.createElement(
      "button",
      {
        type: "button",
        className: "remove-column",
        onClick: (T) => {
          T.preventDefault(), a(k);
        }
      },
      "Remove"
    ), /* @__PURE__ */ i.createElement(Qe, { value: c, label: "Region Label", fieldName: "label", i: k, updateField: n }), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(Qe, { value: d, label: "Text Color", fieldName: "color", updateField: (T, m, D, L) => r(D, L, k) }), /* @__PURE__ */ i.createElement(Qe, { value: v, label: "Background", fieldName: "background", updateField: (T, m, D, L) => r(D, L, k) })), /* @__PURE__ */ i.createElement(
      kt,
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
    ), (e.regions[k].fromType === "Fixed" || e.regions[k].fromType === "Previous Days" || !e.regions[k].fromType) && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
      Qe,
      {
        value: g,
        label: e.regions[k].fromType === "Fixed" || !((M = e.regions[k]) != null && M.fromType) ? "From Value" : "Previous Number of Days",
        fieldName: "from",
        updateField: (T, m, D, L) => r(D, L, k),
        tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "When using categorical (linear scale) match the data set value. When using date (linear / date time scale) match the x-axis value.")))
      }
    )), /* @__PURE__ */ i.createElement(
      kt,
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
        options: s
      }
    ), (e.regions[k].toType === "Fixed" || !e.regions[k].toType) && /* @__PURE__ */ i.createElement(Qe, { value: y, label: "To Value", fieldName: "to", updateField: (T, m, D, L) => r(D, L, k) }));
  }), !e.regions && /* @__PURE__ */ i.createElement("p", { style: { textAlign: "center" } }, "There are currently no regions."), /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "btn full-width",
      onClick: (c) => {
        c.preventDefault(), o();
      }
    },
    "Add Region"
  ));
}), vw = ({ name: e }) => {
  const { visSupportsRegions: t } = Ds(), { config: r, updateConfig: n } = ue.useContext(xt);
  return t() ? /* @__PURE__ */ i.createElement(An, null, /* @__PURE__ */ i.createElement(Pn, null, /* @__PURE__ */ i.createElement(Rn, null, e)), /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(yw, { config: r, updateConfig: n }))) : null;
}, Rh = ue.createContext(null), Lh = () => {
  const e = ue.useContext(Rh);
  if (e === null)
    throw new Error("COVE: editor panel context is null.");
  return e;
}, xw = (e) => {
  const { config: t } = ue.useContext(xt), { updateField: r } = Lh(), { enabledChartTypes: n, visHasNumbersOnBars: a, visHasLabelOnData: o, visSupportsChartHeight: f, visSupportsSuperTitle: s, visSupportsFootnotes: c } = Ds(), { visualizationType: d, visualizationSubType: g, barStyle: y } = t, v = () => (d === "Bar" || d === "Deviation Bar") && g !== "stacked" && (t.orientation === "horizontal" || t.orientation === "vertical") ? ["flat", "rounded", "lollipop"] : ["flat", "rounded"];
  return /* @__PURE__ */ i.createElement(An, null, " ", /* @__PURE__ */ i.createElement(Pn, null, /* @__PURE__ */ i.createElement(Rn, null, "General")), /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(kt, { value: d, fieldName: "visualizationType", label: "Chart Type", updateField: r, options: n }), (d === "Bar" || d === "Combo" || d === "Area Chart") && /* @__PURE__ */ i.createElement(kt, { value: g || "Regular", fieldName: "visualizationSubType", label: "Chart Subtype", updateField: r, options: ["regular", "stacked"] }), d === "Area Chart" && g === "stacked" && /* @__PURE__ */ i.createElement(kt, { value: t.stackedAreaChartLineType || "Linear", fieldName: "stackedAreaChartLineType", label: "Stacked Area Chart Line Type", updateField: r, options: Object.keys(xc) }), d === "Bar" && /* @__PURE__ */ i.createElement(kt, { value: t.orientation || "vertical", fieldName: "orientation", label: "Orientation", updateField: r, options: ["vertical", "horizontal"] }), d === "Deviation Bar" && /* @__PURE__ */ i.createElement(kt, { label: "Orientation", options: ["horizontal"] }), (d === "Bar" || d === "Deviation Bar") && /* @__PURE__ */ i.createElement(kt, { value: t.isLollipopChart ? "lollipop" : y || "flat", fieldName: "barStyle", label: "bar style", updateField: r, options: v() }), (d === "Bar" || d === "Deviation Bar") && y === "rounded" && /* @__PURE__ */ i.createElement(kt, { value: t.tipRounding || "top", fieldName: "tipRounding", label: "tip rounding", updateField: r, options: ["top", "full"] }), (d === "Bar" || d === "Deviation Bar") && y === "rounded" && /* @__PURE__ */ i.createElement(kt, { value: t.roundingStyle || "standard", fieldName: "roundingStyle", label: "rounding style", updateField: r, options: ["standard", "shallow", "finger"] }), d === "Bar" && t.orientation === "horizontal" && /* @__PURE__ */ i.createElement(kt, { value: t.yAxis.labelPlacement || "Below Bar", section: "yAxis", fieldName: "labelPlacement", label: "Label Placement", updateField: r, options: ["Below Bar", "On Date/Category Axis"] }), a() ? /* @__PURE__ */ i.createElement(ft, { value: t.yAxis.displayNumbersOnBar, section: "yAxis", fieldName: "displayNumbersOnBar", label: t.isLollipopChart ? "Display Numbers after Bar" : "Display Numbers on Bar", updateField: r }) : o() && /* @__PURE__ */ i.createElement(ft, { value: t.labels, fieldName: "labels", label: "Display label on data", updateField: r }), d === "Pie" && /* @__PURE__ */ i.createElement(kt, { fieldName: "pieType", label: "Pie Chart Type", updateField: r, options: ["Regular", "Donut"] }), /* @__PURE__ */ i.createElement(
    Qe,
    {
      value: t.title || "Chart Title",
      fieldName: "title",
      id: "title",
      label: "Title",
      placeholder: "Chart Title",
      updateField: r,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Title is required to set the name of the download file but can be hidden using the option below.")))
    }
  ), /* @__PURE__ */ i.createElement(ft, { value: t.showTitle, fieldName: "showTitle", label: "Show Title", updateField: r }), s() && /* @__PURE__ */ i.createElement(
    Qe,
    {
      value: t.superTitle,
      updateField: r,
      fieldName: "superTitle",
      label: "Super Title",
      placeholder: "Super Title",
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Super Title")))
    }
  ), /* @__PURE__ */ i.createElement(
    Qe,
    {
      type: "textarea",
      value: t.introText,
      updateField: r,
      fieldName: "introText",
      label: "Message",
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Intro Text")))
    }
  ), /* @__PURE__ */ i.createElement(
    Qe,
    {
      type: "textarea",
      value: t.description,
      fieldName: "description",
      label: "Subtext/Citation",
      updateField: r,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), c() && /* @__PURE__ */ i.createElement(
    Qe,
    {
      type: "textarea",
      value: t.footnotes,
      updateField: r,
      fieldName: "footnotes",
      label: "Footnotes",
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Footnotes")))
    }
  ), f() && t.orientation === "vertical" && /* @__PURE__ */ i.createElement(Qe, { type: "number", value: t.heights.vertical, section: "heights", fieldName: "vertical", label: "Chart Height", updateField: r })));
}, bw = (e) => {
  const { config: t } = ue.useContext(xt), { boxplot: r } = t;
  if (t.visualizationType !== "Box Plot")
    return;
  const { updateField: n } = Lh();
  return /* @__PURE__ */ i.createElement(An, null, /* @__PURE__ */ i.createElement(Pn, null, /* @__PURE__ */ i.createElement(Rn, null, e.name)), /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement("h4", { style: { fontSize: "18px" } }, "Labels for 5-Number Summary"), /* @__PURE__ */ i.createElement(
    Qe,
    {
      type: "text",
      value: r.labels.maximum,
      fieldName: "maximum",
      section: "boxplot",
      subsection: "labels",
      label: "Maximum",
      updateField: n,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Highest value, excluding outliers")))
    }
  ), /* @__PURE__ */ i.createElement(
    Qe,
    {
      type: "text",
      value: r.labels.q3,
      fieldName: "q3",
      section: "boxplot",
      subsection: "labels",
      label: "Upper Quartile",
      updateField: n,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Represented by top line of box. 25% of data are higher.")))
    }
  ), /* @__PURE__ */ i.createElement(
    Qe,
    {
      type: "text",
      value: r.labels.median,
      fieldName: "median",
      section: "boxplot",
      subsection: "labels",
      label: "Median",
      updateField: n,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Middle data point. Half of data are higher value.")))
    }
  ), /* @__PURE__ */ i.createElement(
    Qe,
    {
      type: "text",
      value: r.labels.q1,
      fieldName: "q1",
      section: "boxplot",
      subsection: "labels",
      label: "Lower Quartile",
      updateField: n,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Represented by bottom line of box. 25% of data are lower.")))
    }
  ), /* @__PURE__ */ i.createElement(
    Qe,
    {
      type: "text",
      value: r.labels.minimum,
      fieldName: "minimum",
      section: "boxplot",
      subsection: "labels",
      label: "Minimum",
      updateField: n,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Lowest value, excluding outliers")))
    }
  ), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("h4", { style: { fontSize: "18px" } }, "Labels for Additional Measures"), /* @__PURE__ */ i.createElement(Qe, { type: "text", value: r.labels.iqr, fieldName: "iqr", section: "boxplot", subsection: "labels", label: "Interquartile Range", updateField: n }), /* @__PURE__ */ i.createElement(Qe, { type: "text", value: r.labels.total, fieldName: "total", section: "boxplot", subsection: "labels", label: "Total", updateField: n }), /* @__PURE__ */ i.createElement(Qe, { type: "text", value: r.labels.mean, fieldName: "mean", section: "boxplot", subsection: "labels", label: "Mean", updateField: n }), /* @__PURE__ */ i.createElement(Qe, { type: "text", value: r.labels.outliers, fieldName: "outliers", section: "boxplot", subsection: "labels", label: "Outliers", updateField: n }), /* @__PURE__ */ i.createElement(Qe, { type: "text", value: r.labels.values, fieldName: "values", section: "boxplot", subsection: "labels", label: "Values", updateField: n })));
}, Sw = (e, t) => {
  let r = [], n = [], a = [];
  if (e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar") {
    const o = e.twoColor.isPaletteReversed;
    r = Object.keys(ju).filter((f) => o ? f.endsWith("reverse") : !f.endsWith("reverse"));
  } else {
    const o = [], f = [];
    for (const s in or) {
      const c = s.startsWith("sequential"), d = s.startsWith("qualitative"), g = s.endsWith("reverse");
      c && (!e.isPaletteReversed && !g || e.isPaletteReversed && g) && o.push(s), d && (!e.isPaletteReversed && !g || e.isPaletteReversed && g) && f.push(s);
    }
    n = o, a = f;
  }
  return ue.useEffect(() => {
    let o = "";
    e.twoColor.isPaletteReversed && !e.twoColor.palette.endsWith("reverse") && (o = e.twoColor.palette + "reverse"), !e.twoColor.isPaletteReversed && e.twoColor.palette.endsWith("reverse") && (o = e.twoColor.palette.slice(0, -7)), t({ ...e, twoColor: { ...e.twoColor, palette: o } });
  }, [e.twoColor.isPaletteReversed]), ue.useEffect(() => {
    let o = "";
    e.isPaletteReversed && !e.palette.endsWith("reverse") && (o = e.palette + "reverse"), !e.isPaletteReversed && e.palette.endsWith("reverse") && (o = e.palette.slice(0, -7)), t({ ...e, palette: o });
  }, [e.isPaletteReversed]), { twoColorPalettes: r, sequential: n, nonSequential: a };
}, Ew = (e) => {
  var U;
  const { config: t, updateConfig: r, colorPalettes: n, twoColorPalette: a } = ue.useContext(xt), { visual: o } = t, { setLollipopShape: f, updateField: s } = Lh(), { visHasBarBorders: c, visCanAnimate: d, visSupportsNonSequentialPallete: g, headerColors: y, visSupportsTooltipOpacity: v, visSupportsTooltipLines: E, visSupportsBarSpace: k, visSupportsBarThickness: M, visHasDataCutoff: T, visSupportsSequentialPallete: m, visSupportsReverseColorPalette: D } = Ds(), { twoColorPalettes: L, sequential: _, nonSequential: N } = Sw(t, r), R = (H, Y) => {
    if (console.log("value", Y), H === "storyNodeFontColor") {
      r({
        ...t,
        sankey: {
          ...t.sankey,
          storyNodeFontColor: Y
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
            default: Y
          }
        }
      });
  };
  return /* @__PURE__ */ i.createElement(An, null, /* @__PURE__ */ i.createElement(Pn, null, /* @__PURE__ */ i.createElement(Rn, null, "Visual")), /* @__PURE__ */ i.createElement(Ln, null, t.isLollipopChart && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("fieldset", { className: "header" }, /* @__PURE__ */ i.createElement("legend", { className: "edit-label" }, "Lollipop Shape"), /* @__PURE__ */ i.createElement(
    "div",
    {
      onChange: (H) => {
        f(H.target.value);
      }
    },
    /* @__PURE__ */ i.createElement("label", { className: "radio-label" }, /* @__PURE__ */ i.createElement("input", { type: "radio", name: "lollipopShape", value: "circle", checked: t.lollipopShape === "circle" }), "Circle"),
    /* @__PURE__ */ i.createElement("label", { className: "radio-label" }, /* @__PURE__ */ i.createElement("input", { type: "radio", name: "lollipopShape", value: "square", checked: t.lollipopShape === "square" }), "Square")
  )), /* @__PURE__ */ i.createElement(kt, { value: t.lollipopColorStyle ? t.lollipopColorStyle : "two-tone", fieldName: "lollipopColorStyle", label: "Lollipop Color Style", updateField: s, options: ["regular", "two-tone"] }), /* @__PURE__ */ i.createElement(kt, { value: t.lollipopSize ? t.lollipopSize : "small", fieldName: "lollipopSize", label: "Lollipop Size", updateField: s, options: ["small", "medium", "large"] })), t.visualizationType === "Box Plot" && /* @__PURE__ */ i.createElement("fieldset", { className: "fieldset fieldset--boxplot" }, /* @__PURE__ */ i.createElement("legend", { className: "" }, "Box Plot Settings"), /* @__PURE__ */ i.createElement(kt, { value: t.boxplot.borders, fieldName: "borders", section: "boxplot", label: "Box Plot Borders", updateField: s, options: ["true", "false"] }), /* @__PURE__ */ i.createElement(ft, { value: t.boxplot.plotOutlierValues, fieldName: "plotOutlierValues", section: "boxplot", label: "Plot Outliers", updateField: s }), /* @__PURE__ */ i.createElement(ft, { value: t.boxplot.plotNonOutlierValues, fieldName: "plotNonOutlierValues", section: "boxplot", label: "Plot non-outlier values", updateField: s })), /* @__PURE__ */ i.createElement(kt, { value: t.fontSize, fieldName: "fontSize", label: "Font Size", updateField: s, options: ["small", "medium", "large"] }), c() && /* @__PURE__ */ i.createElement(kt, { value: t.barHasBorder, fieldName: "barHasBorder", label: "Bar Borders", updateField: s, options: ["true", "false"] }), d() && /* @__PURE__ */ i.createElement(ft, { value: t.animate, fieldName: "animate", label: "Animate Visualization", updateField: s }), (((U = t.series) == null ? void 0 : U.some((H) => H.type === "Line" || H.type === "dashed-lg" || H.type === "dashed-sm" || H.type === "dashed-md")) && t.visualizationType === "Combo" || t.visualizationType === "Line") && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(kt, { value: t.lineDatapointStyle, fieldName: "lineDatapointStyle", label: "Line Datapoint Style", updateField: s, options: ["hidden", "hover", "always show"] }), /* @__PURE__ */ i.createElement(kt, { value: t.lineDatapointColor, fieldName: "lineDatapointColor", label: "Line Datapoint Color", updateField: s, options: ["Same as Line", "Lighter than Line"] })), /* @__PURE__ */ i.createElement("label", { className: "header" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Header Theme"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, y.map((H) => /* @__PURE__ */ i.createElement(
    "button",
    {
      title: H,
      key: H,
      onClick: (Y) => {
        Y.preventDefault(), r({ ...t, theme: H });
      },
      className: t.theme === H ? "selected " + H : H
    }
  )))), (g() || g()) && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Chart Color Palette")), D() && /* @__PURE__ */ i.createElement(Bh, { fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: s, value: t.isPaletteReversed }), m() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", null, "Sequential"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, _.map((H) => {
    const Y = {
      backgroundColor: n[H][2]
    }, Z = {
      backgroundColor: n[H][3]
    }, re = {
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
      /* @__PURE__ */ i.createElement("span", { style: Y }),
      /* @__PURE__ */ i.createElement("span", { style: Z }),
      /* @__PURE__ */ i.createElement("span", { style: re })
    );
  }))), g() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", null, "Non-Sequential"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, N.map((H) => {
    const Y = {
      backgroundColor: n[H][2]
    }, Z = {
      backgroundColor: n[H][4]
    }, re = {
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
      /* @__PURE__ */ i.createElement("span", { style: Y }),
      /* @__PURE__ */ i.createElement("span", { style: Z }),
      /* @__PURE__ */ i.createElement("span", { style: re })
    );
  })))), t.visualizationType === "Sankey" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ i.createElement("input", { type: "color", value: t.sankey.nodeColor.default, id: "storyNodeColor", name: "storyNodeColor", onChange: (H) => R("nodeColor", H.target.value) }), /* @__PURE__ */ i.createElement("label", { htmlFor: "storyNodeColor" }, "Story Node Color")), /* @__PURE__ */ i.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ i.createElement("input", { type: "color", value: t.sankey.storyNodeFontColor || "red", id: "storyNodeFontColor", name: "storyNodeFontColor", onChange: (H) => R("storyNodeFontColor", H.target.value) }), /* @__PURE__ */ i.createElement("label", { htmlFor: "storyNodeFontColor" }, "Story Node Font Color")), /* @__PURE__ */ i.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ i.createElement("input", { type: "color", value: t.sankey.linkColor.default, id: "linkColor", name: "linkColor", onChange: (H) => R("linkColor", H.target.value) }), /* @__PURE__ */ i.createElement("label", { htmlFor: "linkColor" }, "Link Color"))), (t.visualizationType === "Paired Bar" || t.visualizationType === "Deviation Bar") && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Bh, { section: "twoColor", fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: s, value: t.twoColor.isPaletteReversed }), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, L.map((H) => {
    const Y = {
      backgroundColor: a[H][0]
    }, Z = {
      backgroundColor: a[H][1]
    };
    return /* @__PURE__ */ i.createElement(
      "button",
      {
        title: H,
        key: H,
        onClick: (re) => {
          re.preventDefault(), r({ ...t, twoColor: { ...t.twoColor, palette: H } });
        },
        className: t.twoColor.palette === H ? "selected" : ""
      },
      /* @__PURE__ */ i.createElement("span", { className: "two-color", style: Y }),
      /* @__PURE__ */ i.createElement("span", { className: "two-color", style: Z })
    );
  }))), T() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    Qe,
    {
      value: t.dataCutoff,
      type: "number",
      fieldName: "dataCutoff",
      className: "number-narrow",
      label: "Data Cutoff",
      updateField: s,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Any value below the cut-off value is included in a special "less than" category. This option supports special conditions like suppressed data.')))
    }
  )), M() && t.orientation === "horizontal" && !t.isLollipopChart && t.yAxis.labelPlacement !== "On Bar" && /* @__PURE__ */ i.createElement(Qe, { type: "number", value: t.barHeight || "25", fieldName: "barHeight", label: " Bar Thickness", updateField: s, min: 15 }), (t.visualizationType === "Bar" && t.orientation !== "horizontal" || t.visualizationType === "Combo") && /* @__PURE__ */ i.createElement(Qe, { value: t.barThickness, type: "number", fieldName: "barThickness", label: "Bar Thickness", updateField: s }), k() && /* @__PURE__ */ i.createElement(Qe, { type: "number", value: t.barSpace || "15", fieldName: "barSpace", label: "Bar Space", updateField: s, min: 0 }), (t.visualizationType === "Bar" || t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ i.createElement(ft, { value: t.topAxis.hasLine, section: "topAxis", fieldName: "hasLine", label: "Add Top Axis Line", updateField: s }), t.visualizationType === "Spark Line" && /* @__PURE__ */ i.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ i.createElement(ft, { value: o == null ? void 0 : o.border, section: "visual", fieldName: "border", label: "Show Border", updateField: s }), /* @__PURE__ */ i.createElement(ft, { value: o == null ? void 0 : o.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: s }), /* @__PURE__ */ i.createElement(ft, { value: o == null ? void 0 : o.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: s }), /* @__PURE__ */ i.createElement(ft, { value: o == null ? void 0 : o.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: s }), /* @__PURE__ */ i.createElement(ft, { value: o == null ? void 0 : o.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: s })), (t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ i.createElement(ft, { value: t.showLineSeriesLabels, fieldName: "showLineSeriesLabels", label: "Append Series Name to End of Line Charts", updateField: s }), (t.visualizationType === "Line" || t.visualizationType === "Combo") && t.showLineSeriesLabels && /* @__PURE__ */ i.createElement(ft, { value: t.colorMatchLineSeriesLabels, fieldName: "colorMatchLineSeriesLabels", label: "Match Series Color to Name at End of Line Charts", updateField: s }), E() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ft, { value: o.verticalHoverLine, fieldName: "verticalHoverLine", section: "visual", label: "Vertical Hover Line", updateField: s }), /* @__PURE__ */ i.createElement(ft, { value: o.horizontalHoverLine, fieldName: "horizontalHoverLine", section: "visual", label: "Horizontal Hover Line", updateField: s })), v() && /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Tooltip Opacity"), /* @__PURE__ */ i.createElement(
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
  )), t.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(ft, { value: t.tooltips.singleSeries, fieldName: "singleSeries", section: "tooltips", label: "SHOW HOVER FOR SINGLE DATA SERIES", updateField: s }), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "No Data Message"), /* @__PURE__ */ i.createElement(
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
}, kw = () => {
  var s, c, d;
  const { config: e, updateConfig: t } = ue.useContext(xt), r = (s = e.data) == null ? void 0 : s[0], { updateField: n } = ue.useContext(Rh);
  if (e.visualizationType !== "Sankey")
    return;
  const a = (g, y, v) => {
    let E = [];
    r != null && r.storyNodeText && (E = [...r == null ? void 0 : r.storyNodeText]), E[v][g] = y, t({
      ...e,
      sankey: {
        ...e.sankey,
        data: {
          ...e.sankey.data,
          storyNodeText: E
        }
      }
    });
  }, o = () => {
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
  return /* @__PURE__ */ i.createElement(An, null, /* @__PURE__ */ i.createElement(Pn, null, /* @__PURE__ */ i.createElement(Rn, null, "Sankey Settings")), /* @__PURE__ */ i.createElement(Ln, null, (r == null ? void 0 : r.storyNodeText) && (r == null ? void 0 : r.storyNodeText.map(({ StoryNode: g, segmentTextBefore: y, segmentTextAfter: v }, E) => /* @__PURE__ */ i.createElement("div", { key: E, style: { border: "1px solid black", margin: "15px auto", padding: "15px", borderRadius: "10px" } }, /* @__PURE__ */ i.createElement("label", null, "Story Node Text", /* @__PURE__ */ i.createElement("input", { type: "text", value: g, fieldName: "StoryNode", label: "StoryNode", onChange: (k) => a("StoryNode", k.target.value, E) })), /* @__PURE__ */ i.createElement("label", null, "Story Text Before", /* @__PURE__ */ i.createElement("input", { type: "text", value: y, fieldName: "segmentTextBefore", label: "Segment Text Before", onChange: (k) => a("segmentTextBefore", k.target.value, E) })), /* @__PURE__ */ i.createElement("label", null, "Story Text After", /* @__PURE__ */ i.createElement("input", { type: "text", value: v, fieldName: "segmentTextAfter", label: "Segment Text After", onChange: (k) => a("segmentTextAfter", k.target.value, E) })), /* @__PURE__ */ i.createElement(Hf, { onClick: (k) => f(E), className: "btn", style: { background: "tomato" } }, "Remove Story Node")))), `Total Story Nodes: ${(c = r == null ? void 0 : r.storyNodeText) == null ? void 0 : c.length}`, ((d = r == null ? void 0 : r.storyNodeText) == null ? void 0 : d.length) < 3 && /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "btn full-width",
      onClick: (g) => {
        g.preventDefault(), o();
      }
    },
    "Add StoryNode"
  ), /* @__PURE__ */ i.createElement(ft, { value: e.enableTooltips, fieldName: "enableTooltips", label: "Enable Tooltips", updateField: n })));
}, Na = {
  ForestPlot: rw,
  Series: Kr,
  Regions: vw,
  General: xw,
  BoxPlot: bw,
  Visual: Ew,
  Sankey: kw
};
ue.memo(({ config: e, updateConfig: t, data: r }) => {
  const n = () => {
    const c = /* @__PURE__ */ new Set();
    return r.forEach((d) => {
      Object.keys(d).forEach((g) => {
        c.add(g);
      });
    }), [...c];
  }, a = () => ["star"];
  let o = (c) => {
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
      onClick: (E) => {
        E.preventDefault(), o(v);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement(kt, { value: d, initial: "Select", fieldName: "column", label: "Column", updateField: (E, k, M, T) => s(M, T, v), options: n() }), /* @__PURE__ */ i.createElement(Qe, { value: g, fieldName: "value", label: "Value", updateField: (E, k, M, T) => s(M, T, v) }), /* @__PURE__ */ i.createElement(kt, { value: y, initial: "Select", fieldName: "icon", label: "Icon", updateField: (E, k, M, T) => s(M, T, v), options: a() }), /* @__PURE__ */ i.createElement(Qe, { value: c, fieldName: "label", label: "Label", placeholder: "suppressed", updateField: (E, k, M, T) => s(M, T, v) }))), /* @__PURE__ */ i.createElement("button", { type: "button", onClick: f, className: "btn full-width" }, "Add Suppression Class"));
});
const ww = ue.memo(({ config: e, updateConfig: t, data: r }) => {
  const n = () => {
    const d = /* @__PURE__ */ new Set();
    return r.forEach((g) => {
      Object.keys(g).forEach((y) => {
        d.add(y);
      });
    }), [...d];
  }, a = () => e.visualizationType === "Line" || e.visualizationType === "Combo" ? ["effect"] : ["suppression"], o = () => {
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
  return /* @__PURE__ */ i.createElement(i.Fragment, null, e.preliminaryData && e.preliminaryData.map(({ seriesKey: d, type: g, label: y, column: v, value: E, style: k }, M) => {
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
    ), /* @__PURE__ */ i.createElement(kt, { value: g, initial: "Select", fieldName: "type", label: "Type", updateField: (m, D, L, _) => c(L, _, M), options: a() }), /* @__PURE__ */ i.createElement(kt, { value: d, initial: "Select", fieldName: "seriesKey", label: "ASSOCIATE TO SERIES", updateField: (m, D, L, _) => c(L, _, M), options: e.runtime.lineSeriesKeys ?? ((T = e.runtime) == null ? void 0 : T.seriesKeys) }), /* @__PURE__ */ i.createElement(kt, { value: v, initial: "Select", fieldName: "column", label: "COLUMN WITH CONFIGURATION VALUE", updateField: (m, D, L, _) => c(L, _, M), options: n() }), /* @__PURE__ */ i.createElement(Qe, { value: E, fieldName: "value", label: "VALUE TO TRIGGER", updateField: (m, D, L, _) => c(L, _, M) }), /* @__PURE__ */ i.createElement(kt, { value: k, initial: "Select", fieldName: "style", label: "Style", updateField: (m, D, L, _) => c(L, _, M), options: o() }), /* @__PURE__ */ i.createElement(Qe, { value: y, fieldName: "label", label: "Label", placeholder: "", updateField: (m, D, L, _) => c(L, _, M) }));
  }), /* @__PURE__ */ i.createElement("button", { type: "button", onClick: s, className: "btn full-width" }, e.visualizationType === "Line" || e.visualizationType === "Combo" ? "Add Special Line" : e.visualizationType === "Bar" ? " Add Special Bar" : "Add Special Line/Bar"));
}), Tw = () => {
  var fn, Vt, Xt, Dn, On, er, jn, rn, kn, pr, lr, sr, x, A, $, G, be;
  const {
    config: e,
    updateConfig: t,
    tableData: r,
    transformedData: n,
    loading: a,
    colorScale: o,
    colorPalettes: f,
    twoColorPalette: s,
    unfilteredData: c,
    excludedData: d,
    isDashboard: g,
    setParentConfig: y,
    missingRequiredSections: v,
    isDebug: E,
    setFilteredData: k,
    lineOptions: M,
    rawData: T,
    highlight: m,
    highlightReset: D
  } = ue.useContext(xt), { minValue: L, maxValue: _, existPositiveValue: N, isAllLine: R } = Oc(e, c), U = { data: n, config: e }, { leftMax: H, rightMax: Y } = ly(U), {
    headerColors: Z,
    visSupportsTooltipLines: re,
    visSupportsNonSequentialPallete: K,
    visSupportsSequentialPallete: q,
    visSupportsReverseColorPalette: me,
    visHasLabelOnData: W,
    visHasNumbersOnBars: se,
    visHasAnchors: ce,
    visHasBarBorders: he,
    visHasDataCutoff: ie,
    visHasSelectableLegendValues: V,
    visCanAnimate: J,
    visHasLegend: ne,
    visHasLegendAxisAlign: Ae,
    visHasBrushChart: xe,
    visSupportsDateCategoryAxis: Pe,
    visSupportsValueAxisMin: le,
    visSupportsValueAxisMax: _e,
    visSupportsDateCategoryAxisLabel: $e,
    visSupportsDateCategoryAxisLine: Te,
    visSupportsDateCategoryAxisTicks: ge,
    visSupportsDateCategoryTickRotation: Re,
    visSupportsDateCategoryNumTicks: oe,
    visSupportsDateCategoryAxisPadding: we,
    visSupportsRegions: Ce,
    visSupportsFilters: Be,
    visSupportsPreliminaryData: je,
    visSupportsValueAxisGridLines: qe,
    visSupportsValueAxisLine: ot,
    visSupportsValueAxisTicks: Je,
    visSupportsValueAxisLabels: it,
    visSupportsBarSpace: Xe,
    visSupportsBarThickness: Ie,
    visSupportsFootnotes: Me,
    visSupportsSuperTitle: ut,
    visSupportsDataCutoff: Ve,
    visSupportsChartHeight: Ge,
    visSupportsLeftValueAxis: lt,
    visSupportsTooltipOpacity: ct,
    visSupportsRankByValue: wt,
    visSupportsResponsiveTicks: en,
    visSupportsDateCategoryHeight: an,
    visHasDataSuppression: Lt
  } = Ds();
  ue.useEffect(() => {
    let B = [];
    e.series && (B = e.series.map((I) => ({
      ...I,
      type: e.visualizationType === "Combo" ? "Bar" : e.visualizationType ? e.visualizationType : "Bar",
      axis: "Left"
    }))), t({
      ...e,
      series: B
    });
  }, [e.visualizationType]), ue.useEffect(() => {
    e.visualizationType === "Scatter Plot" && t({
      ...e,
      xAxis: {
        ...e.xAxis,
        type: "continuous"
      }
    });
  }, []), ue.useEffect(() => {
    e.visualizationType !== "Bar" && t({ ...e, tooltips: { ...e.tooltips, singleSeries: !1 } });
  }, [e.visualizationType]);
  const { hasRightAxis: $t } = mh({ config: e, yMax: e.yAxis.size, data: e.data, updateConfig: t }), Ot = (B, I) => ({
    ...I
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
  }, un = (B) => {
    B.orientation === "horizontal" && (B.labels = !1), B.table.show === void 0 && (B.table.show = !g), B.visualizationType === "Combo" && (B.orientation = "vertical"), bn(B.xAxis) && !B.xAxis.padding && (B.xAxis.padding = 6);
  }, Ne = (B, I, te, ye) => {
    if (E && console.log("#COVE: CHART: EditorPanel: section, subsection, fieldName, newValue", B, I, te, ye), B === "boxplot" && I === "legend") {
      t({
        ...e,
        [B]: {
          ...e[B],
          [I]: {
            ...e.boxplot[I],
            [te]: ye
          }
        }
      });
      return;
    }
    if (B === "boxplot" && I === "labels") {
      t({
        ...e,
        [B]: {
          ...e[B],
          [I]: {
            ...e.boxplot[I],
            [te]: ye
          }
        }
      });
      return;
    }
    const Ye = (hn) => hn === 0 ? !0 : !!hn;
    if (B === "columns" && Ye(I) && Ye(te)) {
      t({
        ...e,
        columns: {
          ...e.columns,
          [I]: {
            ...e.columns[I],
            [te]: ye
          }
        }
      });
      return;
    }
    if (B === null && I === null) {
      Ye(te) || console.error("fieldName is required");
      let hn = { ...e, [te]: ye };
      un(hn), t(hn);
      return;
    }
    const tt = Array.isArray(e[B]);
    let Pt = tt ? [...e[B], ye] : { ...e[B], [te]: ye };
    Ye(I) && (tt ? (Pt = [...e[B]], Pt[I] = { ...Pt[I], [te]: ye }) : typeof ye == "string" ? Pt[I] = ye : Ye(te) && (Pt = { ...e[B], [I]: { ...e[B][I], [te]: ye } }));
    let Cn = { ...e, [B]: Pt };
    un(Cn), t(Cn);
  }, [At, Zt] = ue.useState(!0);
  if (a)
    return null;
  ue.useEffect(() => {
    var B;
    (B = e.general) != null && B.boxplot && (e.general.boxplot.firstQuartilePercentage || t({
      ...e,
      boxplot: {
        ...e.boxplot,
        firstQuartilePercentage: 25
      }
    }));
  }, [e]);
  const Ht = (B) => {
    t({
      ...e,
      lollipopShape: B
    });
  }, Sn = (B) => {
    let I = e.series ? [...e.series] : [], te = Array.from(new Set(n.map((Ye) => Ye[B]))), ye = [];
    te.forEach((Ye) => {
      ye.push({ key: Ye });
    }), e.visualizationType === "Forecasting" ? I.push({ dataKey: B, type: e.visualizationType, stages: ye, stageColumn: B, axis: "Left", tooltip: !0 }) : I.push({ dataKey: B, type: e.visualizationType, axis: "Left", tooltip: !0 }), t({ ...e, series: I });
  }, bt = (B) => {
    const I = e.series[0].dataKey, te = n.sort((Ye, tt) => Ye[I] - tt[I]), ye = B === "asc" ? te : te.reverse();
    t({ ...e }, ye);
  }, mn = (B) => {
    let I = [...e.exclusions.keys];
    I.push(B);
    let te = { ...e.exclusions, keys: I };
    t({ ...e, exclusions: te });
  }, Dt = (B) => {
    let I = -1, te = [...e.exclusions.keys];
    for (let ye = 0; ye < te.length; ye++)
      if (te[ye] === B) {
        I = ye;
        break;
      }
    if (I !== -1) {
      te.splice(I, 1);
      let ye = { ...e.exclusions, keys: te }, Ye = { ...e, exclusions: ye };
      te.length === 0 && delete Ye.exclusions.keys, t(Ye);
    }
  }, jt = (B = !0) => {
    let I = {};
    if (c.forEach((te) => {
      Object.keys(te).forEach((ye) => I[ye] = !0);
    }), B) {
      const { lower: te, upper: ye } = e.confidenceKeys || {};
      Object.keys(I).forEach((Ye) => {
        (e.series && e.series.filter((tt) => tt.dataKey === Ye).length > 0 || e.confidenceKeys && Object.keys(e.confidenceKeys).includes(Ye) && (te && ye || te || ye) && Ye !== te && Ye !== ye) && delete I[Ye];
      });
    }
    return Object.keys(I);
  }, yn = (B) => {
    if (!B)
      return [];
    const I = /* @__PURE__ */ new Set();
    for (let te = 0; te < B.length; te++)
      for (const [ye] of Object.entries(B[te]))
        I.add(ye);
    return Array.from(I);
  }, Tn = (B, I = !1) => {
    let te = [];
    return d.forEach((ye) => {
      te.push(ye[B]);
    }), I ? [...new Set(te)] : te;
  }, Le = () => {
    Zt(!At), t({
      ...e,
      showEditorPanel: !At
    });
  }, Ue = () => {
    let B = JSON.parse(JSON.stringify(e));
    return v() === !1 && delete B.newViz, delete B.runtime, B;
  };
  ue.useEffect(() => {
    if (y) {
      const B = Ue();
      y(B);
    }
  }, [e]), ue.useEffect(() => {
    const B = e.xAxis.anchors.length > 0 ? e.xAxis.anchors : [], I = e.yAxis.anchors.length > 0 ? e.yAxis.anchors : [];
    t({
      ...e,
      xAxis: {
        ...e.xAxis,
        anchors: I
      },
      yAxis: {
        ...e.yAxis,
        anchors: B
      }
    });
  }, [e.orientation]), ue.useEffect(() => {
    e.visualizationType === "Paired Bar" && t({
      ...e,
      orientation: "horizontal"
    });
  }, []), ue.useEffect(() => {
    e.orientation === "horizontal" && t({
      ...e,
      lollipopShape: e.lollipopShape
    });
  }, [e.isLollipopChart, e.lollipopShape]), ue.useEffect(() => {
    e.visualizationType === "Deviation Bar" && t({ ...e, orientation: "horizontal" });
  }, [e.visualizationType]);
  const vt = ue.useCallback(() => {
    const B = [...e.exclusions.keys];
    return /* @__PURE__ */ i.createElement("ul", { className: "series-list" }, B.map((I, te) => /* @__PURE__ */ i.createElement("li", { key: I }, /* @__PURE__ */ i.createElement("div", { className: "series-list__name", "data-title": I }, /* @__PURE__ */ i.createElement("div", { className: "series-list__name--text" }, I)), /* @__PURE__ */ i.createElement("button", { className: "series-list__remove", onClick: () => Dt(I) }, "×"))));
  }, [e]), et = (B, I) => {
    let te = e.series, [ye] = te.splice(B, 1);
    te.splice(I, 0, ye), t({ ...e, series: te });
  };
  e.isLollipopChart && ((fn = e == null ? void 0 : e.series) == null ? void 0 : fn.length) > 1 && (e.runtime.editorErrorMessage = "Lollipop charts must use only one data series"), e.visualizationType === "Paired Bar" && ((Vt = e == null ? void 0 : e.series) == null ? void 0 : Vt.length) !== 2 && (e.runtime.editorErrorMessage = "Paired Bar charts must use exactly two data series"), e.visualizationType === "Deviation Bar" && ((Xt = e == null ? void 0 : e.series) == null ? void 0 : Xt.length) !== 1 && (e.runtime.editorErrorMessage = "Deviation Bar charts must use exactly one data series"), e.isLollipopChart && ((Dn = e == null ? void 0 : e.series) == null ? void 0 : Dn.length) === 0 && (e.runtime.editorErrorMessage = "Add a data series");
  const on = e.orientation === "horizontal" ? "xAxis" : "yAxis", [St, En] = ue.useState({ maxMsg: "", minMsg: "", rightMaxMessage: "", minMsgRight: "" }), Fn = () => {
    const B = e[on].max, I = e[on].rightMax;
    let te = "", ye = "";
    if (e.visualizationType !== "Combo")
      switch (!0) {
        case (B && parseFloat(B) < parseFloat(_) && N):
          te = "Max value must be more than " + _;
          break;
        case (B && parseFloat(B) < 0 && !N):
          te = "Value must be more than or equal to 0";
          break;
        default:
          te = "";
      }
    if (e.visualizationType === "Combo")
      switch (!0) {
        case (B && parseFloat(B) < H):
          te = "Max value must be more than " + H;
          break;
        case (I && parseFloat(I) < Y):
          ye = "Max value must be more than " + Y;
          break;
        case (B && parseFloat(B) < 0 && !N):
          te = "Value must be more than or equal to 0";
          break;
        default:
          te = "";
      }
    En((Ye) => ({ ...Ye, maxMsg: te, rightMaxMessage: ye }));
  }, X = () => {
    const B = parseFloat(e[on].min);
    let I = Number(L), te = "";
    switch (!0) {
      case (e.useLogScale && ["Line", "Combo", "Bar"].includes(e.visualizationType) && B < 0):
        te = "Negative numbers are not supported in logarithmic scale";
        break;
      case ((e.visualizationType === "Line" || e.visualizationType === "Spark Line") && B > I):
        te = "Value should not exceed " + L;
        break;
      case (e.visualizationType === "Combo" && R && B > I):
        te = "Value should not exceed " + L;
        break;
      case ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && !R) && I > 0 && B > 0):
        te = e.useLogScale ? "Value must be equal to 0" : "Value must be less than or equal to 0";
        break;
      case (e.visualizationType === "Deviation Bar" && B >= Math.min(I, e.xAxis.target)):
        te = "Value must be less than " + Math.min(I, e.xAxis.target);
        break;
      case (e.visualizationType !== "Deviation Bar" && B && I < 0 && B > I):
        te = "Value should not exceed " + L;
        break;
      default:
        te = "";
    }
    En((ye) => ({ ...ye, minMsg: te }));
  };
  ue.useEffect(() => {
    X(), Fn();
  }, [L, _, e]);
  const Fe = ((On = e == null ? void 0 : e.dataKey) == null ? void 0 : On.includes("http://")) || ((er = e == null ? void 0 : e.dataKey) == null ? void 0 : er.includes("https://")), Ze = () => {
    var B, I;
    if (E !== void 0 && E && !((B = e == null ? void 0 : e.xAxis) != null && B.dataKey)) {
      let te = jt(!1);
      if (te.includes("Date"))
        return "Date";
      if (te.includes("Race"))
        return "Race";
      if (te.includes("Month"))
        return "Month";
    }
    return ((I = e == null ? void 0 : e.xAxis) == null ? void 0 : I.dataKey) || "";
  }, He = () => {
    if (E !== void 0 && E && jt(!1).length > 0) {
      let B = jt(!1).filter((I) => I !== Ze());
      if (B.length > 0)
        return B[0];
    }
    return "";
  };
  if (E && !e.xAxis.dataKey && (e.xAxis.dataKey = Ze()), E && ((jn = e == null ? void 0 : e.series) == null ? void 0 : jn.length) === 0) {
    let B = He();
    B !== "" && Sn(B), E && console.log("### COVE DEBUG: Chart: Setting default datacol=", B);
  }
  const pt = ["Area Chart", "Combo", "Line", "Bar", "Forecasting", "Scatter Plot", "Paired Bar", "Deviation Bar"], at = [
    /* @__PURE__ */ i.createElement("option", { value: "", key: "Select Option" }, "- Select Option -")
  ];
  if (e.data && e.series) {
    Object.keys(((rn = e.data) == null ? void 0 : rn[0]) || []).map((I) => {
      const te = e == null ? void 0 : e.series.some((ye) => ye.dataKey === I);
      if (I !== e.xAxis.dataKey && !te)
        return at.push(
          /* @__PURE__ */ i.createElement("option", { value: I, key: I }, I)
        );
    });
    let B = {};
    e.data.forEach((I) => {
      Object.keys(I).forEach((te) => {
        B[te] = B[te] || [];
        const ye = typeof I[te] == "number" ? I[te].toString() : I[te];
        B[te].indexOf(ye) === -1 && B[te].push(ye);
      });
    });
  }
  if (!e.data && n) {
    if (!n[0])
      return;
    Object.keys(n[0]).map((I) => {
      const te = n.some((ye) => ye.dataKey === I);
      if (I !== e.xAxis.dataKey && !te)
        return at.push(
          /* @__PURE__ */ i.createElement("option", { value: I, key: I }, I)
        );
    });
    let B = {};
    n.forEach((I) => {
      Object.keys(I).forEach((te) => {
        B[te] = B[te] || [];
        const ye = typeof I[te] == "number" ? I[te].toString() : I[te];
        B[te].indexOf(ye) === -1 && B[te].push(ye);
      });
    });
  }
  const mt = (B) => {
    const I = Vy.cloneDeep(e.columns);
    delete I[B], t({
      ...e,
      columns: I
    });
  }, dt = async (B, I, te) => {
    switch (I) {
      case "name":
        t({
          ...e,
          columns: {
            ...e.columns,
            [B]: {
              ...e.columns[B],
              [I]: te
            }
          }
        });
        break;
      default:
        t({
          ...e,
          columns: {
            ...e.columns,
            [B]: {
              ...e.columns[B],
              [I]: te
            }
          }
        });
        break;
    }
  }, {
    highlightedBarValues: Ke,
    highlightedSeriesValues: Wt,
    handleUpdateHighlightedBar: Ut,
    handleAddNewHighlightedBar: nn,
    handleRemoveHighlightedBar: Yt,
    handleUpdateHighlightedBarColor: Bt,
    handleHighlightedBarLegendLabel: Mt,
    handleUpdateHighlightedBorderWidth: _t
  } = Ac(e, t), Tt = e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1, cn = () => {
    const B = n.map((I) => I[e.legend.colorCode]);
    return Tt ? B : jt(!1).filter((I) => I !== e.xAxis.dataKey);
  }, vn = (B) => {
    t({ ...e, legend: { ...e.legend, seriesHighlight: B } });
  }, zt = (B, I, te) => {
    var tt;
    const ye = { ...e[B], [I]: te }, Ye = { ...e, [B]: ye };
    te === "highlight" && ((tt = e.legend.seriesHighlight) != null && tt.length) && (Ye.legend.seriesHighlight.length = 0), t(Ye);
  }, xn = {
    addNewExclusion: mn,
    data: n,
    editColumn: dt,
    getColumns: jt,
    getDataValueOptions: yn,
    getDataValues: Tn,
    getItemStyle: Ot,
    handleSeriesChange: et,
    handleAddNewHighlightedBar: nn,
    setCategoryAxis: Ze,
    sortSeries: bt,
    updateField: Ne,
    warningMsg: St,
    highlightedBarValues: Ke,
    handleHighlightedBarLegendLabel: Mt,
    handleUpdateHighlightedBar: Ut,
    handleRemoveHighlightedBar: Yt,
    isPaletteReversed: e.isPaletteReversed,
    highlightedSeriesValues: Wt,
    handleUpdateHighlightedBorderWidth: _t,
    handleUpdateHighlightedBarColor: Bt,
    setLollipopShape: Ht
  };
  return /* @__PURE__ */ i.createElement(Rh.Provider, { value: xn }, /* @__PURE__ */ i.createElement(_r, { component: "EditorPanel" }, /* @__PURE__ */ i.createElement(Qd.Sidebar, { displayPanel: At, isDashboard: g, title: "Configure Chart", onBackClick: Le }, /* @__PURE__ */ i.createElement(_i, { allowZeroExpanded: !0 }, /* @__PURE__ */ i.createElement(Na.General, { name: "General" }), /* @__PURE__ */ i.createElement(Na.ForestPlot, { name: "Forest Plot Settings" }), /* @__PURE__ */ i.createElement(Na.Sankey, { name: "Sankey" }), e.visualizationType !== "Pie" && e.visualizationType !== "Forest Plot" && e.visualizationType !== "Sankey" && /* @__PURE__ */ i.createElement(An, null, /* @__PURE__ */ i.createElement(Pn, null, /* @__PURE__ */ i.createElement(Rn, null, "Data Series ", (!e.series || e.series.length === 0 || e.visualizationType === "Paired Bar" && e.series.length < 2) && /* @__PURE__ */ i.createElement(Vu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(Ln, null, (!e.series || e.series.length === 0) && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement("p", { className: "warning" }, "At least one series is required"), (!e.series || e.series.length === 0 || e.series.length < 2) && e.visualizationType === "Paired Bar" && /* @__PURE__ */ i.createElement("p", { className: "warning" }, "Select two data series for paired bar chart (e.g., Male and Female)."), /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    kt,
    {
      fieldName: "visualizationType",
      label: "Add Data Series",
      initial: "Select",
      onChange: (B) => {
        B.target.value !== "" && B.target.value !== "Select" && Sn(B.target.value), B.target.value = "";
      },
      options: jt()
    }
  ), e.series && e.series.length !== 0 && /* @__PURE__ */ i.createElement(Na.Series.Wrapper, { getColumns: jt }, /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("legend", { className: "edit-label float-left" }, "Displaying"), /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "A data series is a set of related data points plotted in a chart and typically represented in the chart legend.")))), /* @__PURE__ */ i.createElement(vy, { onDragEnd: ({ source: B, destination: I }) => et(B.index, I.index) }, /* @__PURE__ */ i.createElement(xy, { droppableId: "filter_order" }, (B) => /* @__PURE__ */ i.createElement("ul", { ...B.droppableProps, className: "series-list", ref: B.innerRef }, /* @__PURE__ */ i.createElement(Na.Series.List, { series: e.series, getItemStyle: Ot, sortableItemStyles: Gt, chartsWithOptions: pt }), B.placeholder))))), e.series && e.series.length <= 1 && e.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Confidence Keys"), /* @__PURE__ */ i.createElement(kt, { value: e.confidenceKeys.upper || "", section: "confidenceKeys", fieldName: "upper", label: "Upper", updateField: Ne, initial: "Select", options: jt() }), /* @__PURE__ */ i.createElement(kt, { value: e.confidenceKeys.lower || "", section: "confidenceKeys", fieldName: "lower", label: "Lower", updateField: Ne, initial: "Select", options: jt() })), wt() && e.series && e.series.length === 1 && /* @__PURE__ */ i.createElement(kt, { fieldName: "visualizationType", label: "Rank by Value", initial: "Select", onChange: (B) => bt(B.target.value), options: ["asc", "desc"] }), je() && /* @__PURE__ */ i.createElement(ww, { config: e, updateConfig: t, data: n }))), /* @__PURE__ */ i.createElement(Na.BoxPlot, { name: "Measures" }), lt() && /* @__PURE__ */ i.createElement(An, null, /* @__PURE__ */ i.createElement(Pn, null, /* @__PURE__ */ i.createElement(Rn, null, e.visualizationType === "Pie" ? "Data Format" : e.orientation === "vertical" ? "Left Value Axis" : "Value Axis", e.visualizationType === "Pie" && !e.yAxis.dataKey && /* @__PURE__ */ i.createElement(Vu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(Ln, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement(
    kt,
    {
      value: e.yAxis.dataKey || "",
      section: "yAxis",
      fieldName: "dataKey",
      label: "Data Column",
      initial: "Select",
      required: !0,
      updateField: Ne,
      options: jt(!1),
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Select the source data to be visually represented.")))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Qe, { value: e.yAxis.label, section: "yAxis", fieldName: "label", label: "Label ", updateField: Ne }), e.runtime.seriesKeys && e.runtime.seriesKeys.length === 1 && !["Box Plot", "Deviation Bar", "Forest Plot"].includes(e.visualizationType) && /* @__PURE__ */ i.createElement(ft, { value: e.isLegendValue, fieldName: "isLegendValue", label: "Use Legend Value in Hover", updateField: Ne }), /* @__PURE__ */ i.createElement(Qe, { value: e.yAxis.numTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "numTicks", label: "Number of ticks", className: "number-narrow", updateField: Ne }), /* @__PURE__ */ i.createElement(
    Qe,
    {
      value: e.yAxis.size,
      type: "number",
      section: "yAxis",
      fieldName: "size",
      label: e.orientation === "horizontal" ? "Size (Height)" : "Size (Width)",
      className: "number-narrow",
      updateField: Ne,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, `Increase the size if elements in the ${e.orientation} axis are being crowded or hidden behind other elements.  Decrease if less space is required for the value axis.`)))
    }
  ), e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(ft, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: Ne }), (e.orientation === "vertical" || !e.isResponsiveTicks) && /* @__PURE__ */ i.createElement(Qe, { value: e.yAxis.tickRotation || 0, type: "number", min: 0, section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: Ne }), e.isResponsiveTicks && e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(
    Qe,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: Ne,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" && /* @__PURE__ */ i.createElement(Qe, { value: e.xAxis.labelOffset, section: "xAxis", fieldName: "labelOffset", label: "Label offset", type: "number", className: "number-narrow", updateField: Ne }), qe() && /* @__PURE__ */ i.createElement(ft, { value: e.yAxis.gridLines, section: "yAxis", fieldName: "gridLines", label: "Show Gridlines", updateField: Ne }), /* @__PURE__ */ i.createElement(ft, { value: e.yAxis.enablePadding, section: "yAxis", fieldName: "enablePadding", label: "Add Padding to Value Axis Scale", updateField: Ne }), e.yAxis.enablePadding && /* @__PURE__ */ i.createElement(Qe, { type: "number", section: "yAxis", fieldName: "scalePadding", label: "Padding Percentage", className: "number-narrow", updateField: Ne, value: e.yAxis.scalePadding }), e.visualizationSubType === "regular" && e.visualizationType !== "Forest Plot" && /* @__PURE__ */ i.createElement(ft, { value: e.useLogScale, fieldName: "useLogScale", label: "use logarithmic scale", updateField: Ne })), /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ i.createElement(ft, { value: e.dataFormat.commas, section: "dataFormat", fieldName: "commas", label: "Add commas", updateField: Ne }), /* @__PURE__ */ i.createElement(
    ft,
    {
      value: e.dataFormat.abbreviated,
      section: "dataFormat",
      fieldName: "abbreviated",
      label: "Abbreviate Axis Values",
      updateField: Ne,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  ), /* @__PURE__ */ i.createElement(Qe, { value: e.dataFormat.roundTo ? e.dataFormat.roundTo : 0, type: "number", section: "dataFormat", fieldName: "roundTo", label: "Round to decimal point", className: "number-narrow", updateField: Ne, min: 0 }), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(
    Qe,
    {
      value: e.dataFormat.prefix,
      section: "dataFormat",
      fieldName: "prefix",
      label: "Prefix",
      updateField: Ne,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    Qe,
    {
      value: e.dataFormat.suffix,
      section: "dataFormat",
      fieldName: "suffix",
      label: "Suffix",
      updateField: Ne,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), e.orientation === "horizontal" ? (
    // horizontal - x is vertical y is horizontal
    /* @__PURE__ */ i.createElement(i.Fragment, null, ot() && /* @__PURE__ */ i.createElement(ft, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Ne }), it() && /* @__PURE__ */ i.createElement(ft, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Label", updateField: Ne }), Je() && /* @__PURE__ */ i.createElement(ft, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: Ne }), _e() && /* @__PURE__ */ i.createElement(Qe, { value: e.xAxis.max, section: "xAxis", fieldName: "max", label: "max value", type: "number", placeholder: "Auto", updateField: Ne }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, St.maxMsg), le() && /* @__PURE__ */ i.createElement(Qe, { value: e.xAxis.min, section: "xAxis", fieldName: "min", type: "number", label: "min value", placeholder: "Auto", updateField: Ne }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, St.minMsg), e.visualizationType === "Deviation Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Qe, { value: e.xAxis.target, section: "xAxis", fieldName: "target", type: "number", label: "Deviation point", placeholder: "Auto", updateField: Ne }), /* @__PURE__ */ i.createElement(Qe, { value: e.xAxis.targetLabel || "Target", section: "xAxis", fieldName: "targetLabel", type: "text", label: "Deviation point Label", updateField: Ne }), /* @__PURE__ */ i.createElement(ft, { value: e.xAxis.showTargetLabel, section: "xAxis", fieldName: "showTargetLabel", label: "Show Deviation point label", updateField: Ne })))
  ) : e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ft, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Ne }), /* @__PURE__ */ i.createElement(ft, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Label", updateField: Ne }), /* @__PURE__ */ i.createElement(ft, { value: e.yAxis.hideTicks, section: "yAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: Ne }), /* @__PURE__ */ i.createElement(Qe, { value: e.yAxis.max, section: "yAxis", fieldName: "max", type: "number", label: "left axis max value", placeholder: "Auto", updateField: Ne }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, St.maxMsg), /* @__PURE__ */ i.createElement(Qe, { value: e.yAxis.min, section: "yAxis", fieldName: "min", type: "number", label: "left axis min value", placeholder: "Auto", updateField: Ne }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, St.minMsg)), ce() && e.orientation !== "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(_i, { allowZeroExpanded: !0 }, (pr = (kn = e.yAxis) == null ? void 0 : kn.anchors) == null ? void 0 : pr.map((B, I) => /* @__PURE__ */ i.createElement(An, { className: "series-item series-item--chart", key: `yaxis-anchors-2-${I}` }, /* @__PURE__ */ i.createElement(Pn, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Rn, { className: "accordion__button accordion__button" }, "Anchor ", I + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (te) => {
        te.preventDefault();
        const ye = [...e.yAxis.anchors];
        ye.splice(I, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: ye
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[I].value ? e.yAxis.anchors[I].value : "",
      onChange: (te) => {
        te.preventDefault();
        const ye = [...e.yAxis.anchors];
        ye[I].value = te.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: ye
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Color"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[I].color ? e.yAxis.anchors[I].color : "",
      onChange: (te) => {
        te.preventDefault();
        const ye = [...e.yAxis.anchors];
        ye[I].color = te.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: ye
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.yAxis.anchors[I].lineStyle || "",
      onChange: (te) => {
        const ye = [...e.yAxis.anchors];
        ye[I].lineStyle = te.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: ye
          }
        });
      }
    },
    /* @__PURE__ */ i.createElement("option", null, "Select"),
    M.map((te) => /* @__PURE__ */ i.createElement("option", { key: te.key }, te.value))
  )))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (B) => {
        B.preventDefault();
        const I = [...e.yAxis.anchors];
        I.push({}), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: I
          }
        });
      }
    },
    "Add Anchor"
  )), ce() && e.orientation === "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(_i, { allowZeroExpanded: !0 }, (sr = (lr = e.xAxis) == null ? void 0 : lr.anchors) == null ? void 0 : sr.map((B, I) => /* @__PURE__ */ i.createElement(An, { className: "series-item series-item--chart", key: `xaxis-anchors-${I}` }, /* @__PURE__ */ i.createElement(Pn, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Rn, { className: "accordion__button accordion__button" }, "Anchor ", I + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (te) => {
        te.preventDefault();
        const ye = [...e.xAxis.anchors];
        ye.splice(I, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: ye
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[I].value ? e.xAxis.anchors[I].value : "",
      onChange: (te) => {
        te.preventDefault();
        const ye = [...e.xAxis.anchors];
        ye[I].value = te.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: ye
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Color"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[I].color ? e.xAxis.anchors[I].color : "",
      onChange: (te) => {
        te.preventDefault();
        const ye = [...e.xAxis.anchors];
        ye[I].color = te.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: ye
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.xAxis.anchors[I].lineStyle || "",
      onChange: (te) => {
        const ye = [...e.xAxis.anchors];
        ye[I].lineStyle = te.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: ye
          }
        });
      }
    },
    /* @__PURE__ */ i.createElement("option", null, "Select"),
    M.map((te) => /* @__PURE__ */ i.createElement("option", { key: te.key }, te.value))
  )))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (B) => {
        B.preventDefault();
        const I = [...e.xAxis.anchors];
        I.push({}), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: I
          }
        });
      }
    },
    "Add Anchor"
  )))), $t && /* @__PURE__ */ i.createElement(An, null, /* @__PURE__ */ i.createElement(Pn, null, /* @__PURE__ */ i.createElement(Rn, null, "Right Value Axis")), /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(Qe, { value: e.yAxis.rightLabel, section: "yAxis", fieldName: "rightLabel", label: "Label", updateField: Ne }), /* @__PURE__ */ i.createElement(Qe, { value: e.yAxis.rightNumTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "rightNumTicks", label: "Number of ticks", className: "number-narrow", updateField: Ne }), /* @__PURE__ */ i.createElement(Qe, { value: e.yAxis.rightAxisSize, type: "number", section: "yAxis", fieldName: "rightAxisSize", label: "Size (Width)", className: "number-narrow", updateField: Ne }), /* @__PURE__ */ i.createElement(Qe, { value: e.yAxis.rightLabelOffsetSize, type: "number", section: "yAxis", fieldName: "rightLabelOffsetSize", label: "Label Offset", className: "number-narrow", updateField: Ne }), /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ i.createElement(ft, { value: e.dataFormat.rightCommas, section: "dataFormat", fieldName: "rightCommas", label: "Add commas", updateField: Ne }), /* @__PURE__ */ i.createElement(Qe, { value: e.dataFormat.rightRoundTo, type: "number", section: "dataFormat", fieldName: "rightRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: Ne, min: 0 }), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(
    Qe,
    {
      value: e.dataFormat.rightPrefix,
      section: "dataFormat",
      fieldName: "rightPrefix",
      label: "Prefix",
      updateField: Ne,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    Qe,
    {
      value: e.dataFormat.rightSuffix,
      section: "dataFormat",
      fieldName: "rightSuffix",
      label: "Suffix",
      updateField: Ne,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), /* @__PURE__ */ i.createElement(ft, { value: e.yAxis.rightHideAxis, section: "yAxis", fieldName: "rightHideAxis", label: "Hide Axis", updateField: Ne }), /* @__PURE__ */ i.createElement(ft, { value: e.yAxis.rightHideLabel, section: "yAxis", fieldName: "rightHideLabel", label: "Hide Label", updateField: Ne }), /* @__PURE__ */ i.createElement(ft, { value: e.yAxis.rightHideTicks, section: "yAxis", fieldName: "rightHideTicks", label: "Hide Ticks", updateField: Ne }), /* @__PURE__ */ i.createElement(Qe, { value: e.yAxis.max, section: "yAxis", fieldName: "rightMax", type: "number", label: "right axis max value", placeholder: "Auto", updateField: Ne }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, St.rightMaxMessage), /* @__PURE__ */ i.createElement(Qe, { value: e.yAxis.min, section: "yAxis", fieldName: "rightMin", type: "number", label: "right axis min value", placeholder: "Auto", updateField: Ne }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, St.minMsg))), Pe() && /* @__PURE__ */ i.createElement(An, null, /* @__PURE__ */ i.createElement(Pn, null, /* @__PURE__ */ i.createElement(Rn, null, e.visualizationType === "Pie" ? "Segments" : "Date/Category Axis", !e.xAxis.dataKey && /* @__PURE__ */ i.createElement(Vu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(Ln, null, e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, e.visualizationType !== "Forest Plot" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Data Scaling Type", /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none", display: "inline-block" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, "Linear scales are employed for quantitative data, while time scales are used for time-series data."))), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.xAxis.type,
      onChange: (B) => t({
        ...e,
        xAxis: {
          ...e.xAxis,
          type: B.target.value
        }
      })
    },
    /* @__PURE__ */ i.createElement("option", { value: "categorical" }, "Categorical (Linear Scale)"),
    /* @__PURE__ */ i.createElement("option", { value: "date" }, "Date (Linear Scale)"),
    /* @__PURE__ */ i.createElement("option", { value: "date-time" }, "Date (Date Time Scale)"),
    e.visualizationType === "Scatter Plot" && /* @__PURE__ */ i.createElement("option", { value: "continuous" }, "Continuous")
  )), /* @__PURE__ */ i.createElement(ft, { value: e.xAxis.manual, section: "xAxis", fieldName: "manual", label: "Manual Ticks", updateField: Ne }), we() && /* @__PURE__ */ i.createElement(
    Qe,
    {
      value: e.xAxis.padding,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "padding",
      label: "Padding (Percent)",
      className: "number-narrow",
      updateField: Ne,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "For use with date scale. Extends the earliest and latest dates represented on the scale by the percentage specified.")))
    }
  )), /* @__PURE__ */ i.createElement(
    kt,
    {
      value: e.xAxis.dataKey || Ze() || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Data Key",
      initial: "Select",
      required: !0,
      updateField: Ne,
      options: jt(!1),
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
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
      updateField: Ne,
      options: jt(!1),
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Select the source row or column that contains the segment labels. Depending on the data structure, it may be listed as "Key."')))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Qe, { value: e.xAxis.label, section: "xAxis", fieldName: "label", label: "Label", updateField: Ne }), e.xAxis.type === "continuous" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    Qe,
    {
      value: e.dataFormat.bottomPrefix,
      section: "dataFormat",
      fieldName: "bottomPrefix",
      label: "Prefix",
      updateField: Ne,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    Qe,
    {
      value: e.dataFormat.bottomSuffix,
      section: "dataFormat",
      fieldName: "bottomSuffix",
      label: "Suffix",
      updateField: Ne,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    ft,
    {
      value: e.dataFormat.bottomAbbreviated,
      section: "dataFormat",
      fieldName: "bottomAbbreviated",
      label: "Abbreviate Axis Values",
      updateField: Ne,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  )), bn(e.xAxis) && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("p", { style: { padding: "1.5em 0 0.5em", fontSize: ".9rem", lineHeight: "1rem" } }, "Format how charts should parse and display your dates using", " ", /* @__PURE__ */ i.createElement("a", { href: "https://github.com/d3/d3-time-format#locale_format", target: "_blank", rel: "noreferrer" }, "these guidelines"), "."), /* @__PURE__ */ i.createElement(
    Qe,
    {
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "This field specifies the pattern used to read and interpret dates in your dataset, ensuring the dates are correctly understood and processed. "))),
      value: e.xAxis.dateParseFormat,
      section: "xAxis",
      fieldName: "dateParseFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "Date Parse Format",
      updateField: Ne
    }
  ), /* @__PURE__ */ i.createElement(
    Qe,
    {
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, " Adjusts the date display format on the axis for clear, visual date representation."))),
      value: e.xAxis.dateDisplayFormat,
      section: "xAxis",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "AXIS DATE DISPLAY FORMAT",
      updateField: Ne
    }
  ), /* @__PURE__ */ i.createElement(
    Qe,
    {
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Specify a custom format for displaying dates in data table. If left empty, dates will adopt the Axis Date Display format. "))),
      value: e.table.dateDisplayFormat,
      section: "table",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "DATA TABLE DATE DISPLAY FORMAT",
      updateField: Ne
    }
  ), /* @__PURE__ */ i.createElement(
    Qe,
    {
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Specify a custom format for displaying dates on hovers. If left empty, dates will adopt the Axis Date Display format. "))),
      value: e.tooltips.dateDisplayFormat,
      section: "tooltips",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "HOVER DATE DISPLAY FORMAT",
      updateField: Ne
    }
  )), /* @__PURE__ */ i.createElement(
    ft,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: e.xAxis.type === "date" ? "Limit by start and/or end dates" : "Exclude one or more values",
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "When this option is checked, you can select source-file values for exclusion from the date/category axis. "))),
      updateField: Ne
    }
  ), e.exclusions.active && /* @__PURE__ */ i.createElement(i.Fragment, null, e.xAxis.type === "categorical" && /* @__PURE__ */ i.createElement(i.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ i.createElement(vt, null)), /* @__PURE__ */ i.createElement(
    kt,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (B) => {
        B.target.value !== "" && B.target.value !== "Select" && mn(B.target.value), B.target.value = "";
      },
      options: Tn(e.xAxis.dataKey, !0)
    }
  )), e.xAxis.type === "date" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Qe, { type: "date", section: "exclusions", fieldName: "dateStart", label: "Start Date", updateField: Ne, value: e.exclusions.dateStart || "" }), /* @__PURE__ */ i.createElement(Qe, { type: "date", section: "exclusions", fieldName: "dateEnd", label: "End Date", updateField: Ne, value: e.exclusions.dateEnd || "" }))), oe() && e.xAxis.type !== "date-time" && e.xAxis.manual && /* @__PURE__ */ i.createElement(Qe, { value: e.xAxis.manualStep, placeholder: "Auto", type: "number", min: 1, section: "xAxis", fieldName: "manualStep", label: "Step count", className: "number-narrow", updateField: Ne }), oe() && (e.xAxis.type === "date-time" || !e.xAxis.manual) && /* @__PURE__ */ i.createElement(Qe, { value: e.xAxis.numTicks, placeholder: "Auto", type: "number", min: 1, section: "xAxis", fieldName: "numTicks", label: "Number of ticks", className: "number-narrow", updateField: Ne }), an() && /* @__PURE__ */ i.createElement(Qe, { value: e.xAxis.size, type: "number", min: 0, section: "xAxis", fieldName: "size", label: e.orientation === "horizontal" ? "Size (Width)" : "Size (Height)", className: "number-narrow", updateField: Ne }), (e.xAxis.type === "continuous" || e.forestPlot.type === "Logarithmic") && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ft, { value: e.dataFormat.bottomCommas, section: "dataFormat", fieldName: "bottomCommas", label: "Add commas", updateField: Ne }), /* @__PURE__ */ i.createElement(Qe, { value: e.dataFormat.bottomRoundTo, type: "number", section: "dataFormat", fieldName: "bottomRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: Ne, min: 0 })), en() && e.orientation === "vertical" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(ft, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: Ne }), (e.orientation === "horizontal" || !e.isResponsiveTicks) && Re() && /* @__PURE__ */ i.createElement(Qe, { value: e.xAxis.tickRotation, type: "number", min: 0, section: "xAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: Ne }), e.orientation === "vertical" && e.isResponsiveTicks && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(
    Qe,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: Ne,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" ? /* @__PURE__ */ i.createElement(i.Fragment, null, Te() && /* @__PURE__ */ i.createElement(ft, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Ne }), $e() && /* @__PURE__ */ i.createElement(ft, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Label", updateField: Ne })) : /* @__PURE__ */ i.createElement(i.Fragment, null, Te() && /* @__PURE__ */ i.createElement(ft, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Ne }), $e() && /* @__PURE__ */ i.createElement(ft, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Label", updateField: Ne }), ge() && /* @__PURE__ */ i.createElement(ft, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: Ne })), ((x = e.series) == null ? void 0 : x.length) === 1 && e.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", { htmlFor: "barHighlight" }, "Bar Highlighting"), e.series.length === 1 && Ke.map((B, I) => /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("div", { className: "edit-block", key: `highlighted-bar-${I}` }, /* @__PURE__ */ i.createElement("button", { className: "remove-column", onClick: (te) => Yt(te, I) }, "Remove"), /* @__PURE__ */ i.createElement("p", null, "Highlighted Bar ", I + 1), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Value"), /* @__PURE__ */ i.createElement("select", { value: e.highlightedBarValues[I].value, onChange: (te) => Ut(te, I) }, /* @__PURE__ */ i.createElement("option", { value: "" }, "- Select Value -"), Wt && [...new Set(Wt)].sort().map((te) => /* @__PURE__ */ i.createElement("option", { key: `special-class-value-option-${I}-${te}` }, te)))), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Color"), /* @__PURE__ */ i.createElement("input", { type: "text", value: e.highlightedBarValues[I].color ? e.highlightedBarValues[I].color : "", onChange: (te) => Bt(te, I) })), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Border Width"), /* @__PURE__ */ i.createElement("input", { max: "5", min: "0", type: "number", value: e.highlightedBarValues[I].borderWidth ? e.highlightedBarValues[I].borderWidth : "", onChange: (te) => _t(te, I) })), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Legend Label"), /* @__PURE__ */ i.createElement("input", { type: "text", value: e.highlightedBarValues[I].legendLabel ? e.highlightedBarValues[I].legendLabel : "", onChange: (te) => Mt(te, I) }))))), /* @__PURE__ */ i.createElement("button", { className: "btn full-width", onClick: (B) => nn(B) }, "Add Highlighted Bar"))), e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    ft,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: "Exclude one or more values",
      updateField: Ne,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "When this option is checked, you can select values for exclusion from the pie segments.")))
    }
  ), e.exclusions.active && /* @__PURE__ */ i.createElement(i.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ i.createElement(vt, null)), /* @__PURE__ */ i.createElement(
    kt,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (B) => {
        B.target.value !== "" && B.target.value !== "Select" && mn(B.target.value), B.target.value = "";
      },
      options: Tn(e.xAxis.dataKey, !0)
    }
  ))), ce() && e.orientation !== "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(_i, { allowZeroExpanded: !0 }, ($ = (A = e.xAxis) == null ? void 0 : A.anchors) == null ? void 0 : $.map((B, I) => /* @__PURE__ */ i.createElement(An, { className: "series-item series-item--chart", key: `xaxis-anchors-2-${I}` }, /* @__PURE__ */ i.createElement(Pn, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Rn, { className: "accordion__button accordion__button" }, "Anchor ", I + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (te) => {
        te.preventDefault();
        const ye = [...e.xAxis.anchors];
        ye.splice(I, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: ye
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[I].value ? e.xAxis.anchors[I].value : "",
      onChange: (te) => {
        te.preventDefault();
        const ye = [...e.xAxis.anchors];
        ye[I].value = te.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: ye
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Color"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[I].color ? e.xAxis.anchors[I].color : "",
      onChange: (te) => {
        te.preventDefault();
        const ye = [...e.xAxis.anchors];
        ye[I].color = te.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: ye
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.xAxis.anchors[I].lineStyle || "",
      onChange: (te) => {
        const ye = [...e.xAxis.anchors];
        ye[I].lineStyle = te.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: ye
          }
        });
      }
    },
    /* @__PURE__ */ i.createElement("option", null, "Select"),
    M.map((te) => /* @__PURE__ */ i.createElement("option", { key: te.key }, te.value))
  )))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (B) => {
        B.preventDefault();
        const I = [...e.xAxis.anchors];
        I.push({}), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: I
          }
        });
      }
    },
    "Add Anchor"
  )), ce() && e.orientation === "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(_i, { allowZeroExpanded: !0 }, (be = (G = e.yAxis) == null ? void 0 : G.anchors) == null ? void 0 : be.map((B, I) => /* @__PURE__ */ i.createElement(An, { className: "series-item series-item--chart", key: `accordion-yaxis-anchors-${I}` }, /* @__PURE__ */ i.createElement(Pn, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Rn, { className: "accordion__button accordion__button" }, "Anchor ", I + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (te) => {
        te.preventDefault();
        const ye = [...e.yAxis.anchors];
        ye.splice(I, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: ye
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[I].value ? e.yAxis.anchors[I].value : "",
      onChange: (te) => {
        te.preventDefault();
        const ye = [...e.yAxis.anchors];
        ye[I].value = te.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: ye
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Color"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[I].color ? e.yAxis.anchors[I].color : "",
      onChange: (te) => {
        te.preventDefault();
        const ye = [...e.yAxis.anchors];
        ye[I].color = te.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: ye
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.yAxis.anchors[I].lineStyle || "",
      onChange: (te) => {
        const ye = [...e.yAxis.anchors];
        ye[I].lineStyle = te.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: ye
          }
        });
      }
    },
    /* @__PURE__ */ i.createElement("option", null, "Select"),
    M.map((te) => /* @__PURE__ */ i.createElement("option", { key: te.key }, te.value))
  )))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (B) => {
        B.preventDefault();
        const I = [...e.yAxis.anchors];
        I.push({}), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: I
          }
        });
      }
    },
    "Add Anchor"
  )))), /* @__PURE__ */ i.createElement(Na.Regions, { name: "Regions" }), e.visualizationType !== "Box Plot" && /* @__PURE__ */ i.createElement(An, null, /* @__PURE__ */ i.createElement(Pn, null, /* @__PURE__ */ i.createElement(Rn, null, "Columns")), /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(Iy, { config: e, updateField: Ne, deleteColumn: mt }), " ")), ne() && /* @__PURE__ */ i.createElement(An, null, /* @__PURE__ */ i.createElement(Pn, null, /* @__PURE__ */ i.createElement(Rn, null, "Legend")), /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(ft, { value: e.legend.reverseLabelOrder, section: "legend", fieldName: "reverseLabelOrder", label: "Reverse Labels", updateField: Ne }), /* @__PURE__ */ i.createElement(
    ft,
    {
      value: !!e.legend.hide,
      section: "legend",
      fieldName: "hide",
      label: "Hide Legend",
      updateField: Ne,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "With a single-series chart, consider hiding the legend to reduce visual clutter.")))
    }
  ), e.visualizationType === "Line" && /* @__PURE__ */ i.createElement(ft, { value: e.legend.lineMode, section: "legend", fieldName: "lineMode", label: "Show Lined Style Legend", updateField: Ne }), e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1 && /* @__PURE__ */ i.createElement(kt, { value: e.legend.colorCode, section: "legend", fieldName: "colorCode", label: "Color code by category", initial: "Select", updateField: Ne, options: yn(n) }), /* @__PURE__ */ i.createElement(kt, { value: e.legend.behavior, section: "legend", fieldName: "behavior", label: "Legend Behavior (When clicked)", updateField: (...[B, , I, te]) => zt(B, I, te), options: ["highlight", "isolate"] }), Ae() && /* @__PURE__ */ i.createElement(ft, { value: e.legend.axisAlign, fieldName: "axisAlign", section: "legend", label: "Align to Axis on Isolate", updateField: Ne }), e.legend.behavior === "highlight" && e.tooltips.singleSeries && /* @__PURE__ */ i.createElement(ft, { value: e.legend.highlightOnHover, section: "legend", fieldName: "highlightOnHover", label: "HIGHLIGHT DATA SERIES ON HOVER", updateField: Ne }), V && e.legend.behavior === "isolate" && !Tt && /* @__PURE__ */ i.createElement("fieldset", { className: "primary-fieldset edit-block", key: "additional-highlight-values" }, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Isolate Data Series", /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(Ct, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "You can choose data series that are shown on load. Others will be added when the user clicks on them in the legend."))))), e.legend.seriesHighlight && e.legend.seriesHighlight.map((B, I) => /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: `${B}-${I}` }, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (te) => {
        te.preventDefault();
        const ye = [...e.legend.seriesHighlight];
        ye.splice(I, 1), Ne("legend", null, "seriesHighlight", ye), ye.length || D();
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement(
    kt,
    {
      value: e.legend.seriesHighlight[I],
      fieldName: "seriesHighlight",
      label: "Isolate Value",
      onChange: (te) => {
        const ye = [...e.legend.seriesHighlight];
        ye.includes(te.target.value) || (ye[I] = te.target.value, vn([...ye]));
      },
      options: cn()
    }
  ))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (B) => {
        B.preventDefault();
        const I = cn(), te = [...e.legend.seriesHighlight];
        if (te.length < I.length) {
          const [Ye] = I.filter((tt) => !te.includes(tt));
          te.push(Ye), vn([...te]);
        }
      }
    },
    "Add Isolate Value"
  )), /* @__PURE__ */ i.createElement(Qe, { value: e.legend.label, section: "legend", fieldName: "label", label: "Title", updateField: Ne }), /* @__PURE__ */ i.createElement(kt, { value: e.legend.position, section: "legend", fieldName: "position", label: "Position", updateField: Ne, options: ["right", "left", "bottom"] }), e.legend.position === "bottom" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ft, { value: e.legend.singleRow, section: "legend", fieldName: "singleRow", label: "Single Row Legend", updateField: Ne }), /* @__PURE__ */ i.createElement(ft, { value: e.legend.verticalSorted, section: "legend", fieldName: "verticalSorted", label: "Vertical sorted Legend", updateField: Ne })), /* @__PURE__ */ i.createElement(Qe, { type: "textarea", value: e.legend.description, updateField: Ne, section: "legend", fieldName: "description", label: "Legend Description" }))), Be() && /* @__PURE__ */ i.createElement(An, null, /* @__PURE__ */ i.createElement(Pn, null, /* @__PURE__ */ i.createElement(Rn, null, "Filters")), /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(Hy, { config: e, updateField: Ne, rawData: T }))), /* @__PURE__ */ i.createElement(Na.Visual, { name: "Visual" }), e.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement(An, null, /* @__PURE__ */ i.createElement(Pn, null, /* @__PURE__ */ i.createElement(Rn, null, "Data Table")), /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(Wy, { config: e, columns: Object.keys(n[0] || {}), updateField: Ne, isDashboard: g, isLoadedFromUrl: Fe }), " "))), e.type !== "Spark Line" && /* @__PURE__ */ i.createElement(by, { loadConfig: t, state: e, convertStateToConfig: Ue }))));
}, pm = (e) => {
  let t = "", r = Math.abs(e);
  return r >= 1e9 ? (t = "B", e = e / 1e9) : r >= 1e6 ? (t = "M", e = e / 1e6) : r >= 1e3 && (t = "K", e = e / 1e3), e + t;
}, Cw = (e) => {
  e.sort((d, g) => d - g);
  const t = Math.floor(e.length / 2), r = e.length % 2 === 0, n = r ? e.slice(0, t) : e.slice(0, t + 1), a = r ? e.slice(t) : e.slice(t + 1), o = Math.floor(n.length / 2), f = r ? (n[o - 1] + n[o]) / 2 : n[o], s = Math.floor(a.length / 2), c = r ? (a[s - 1] + a[s]) / 2 : a[s];
  return { q1: f, q3: c };
}, Aw = (e, t) => e.toString().localeCompare(t.toString(), "en", { numeric: !0 }), Pw = (e, t) => t.toString().localeCompare(e.toString(), "en", { numeric: !0 }), Fa = (e, t) => {
  let r = [];
  return t.forEach((n) => {
    let a = !0;
    e.filter((o) => o.type !== "url").forEach((o) => {
      n[o.columnName] != o.active && (a = !1);
    }), a && r.push(n);
  }), r;
}, Rw = [
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
], mm = (e = "#000000", t = !1) => {
  let r = bs(e), n = t ? r.brighten(0.5).hex() : r.saturate(1.3).hex();
  return [e, n, r.darken(0.3).hex()];
}, gm = (e, t, r) => {
  var g, y;
  const n = t.position === "bottom" || ["sm", "xs", "xxs"].includes(r), a = e.orientation === "horizontal", o = Number(e.xAxis.tickRotation) > 0 ? Number(e.xAxis.tickRotation) : 0, f = (g = e == null ? void 0 : e.brush) == null ? void 0 : g.active, s = 20, c = (y = e == null ? void 0 : e.brush) == null ? void 0 : y.height;
  let d = 0;
  return !n && a && !e.yAxis.label && (d = Number(e.xAxis.labelOffset)), !n && a && e.yAxis.label && !e.isResponsiveTicks && (d = Number(e.runtime.xAxis.size) + Number(e.xAxis.labelOffset)), !n && a && e.yAxis.label && e.isResponsiveTicks && (d = e.dynamicMarginTop + s), !n && a && !e.yAxis.label && e.isResponsiveTicks && (d = e.dynamicMarginTop ? e.dynamicMarginTop - s : Number(e.xAxis.labelOffset) - s), !n && a && e.yAxis.label && e.isResponsiveTicks && (d = e.dynamicMarginTop ? e.dynamicMarginTop + s : Number(e.xAxis.labelOffset)), !a && !n && e.xAxis.label && o && !e.isResponsiveTicks && (d = f ? c + e.xAxis.tickWidthMax + -e.xAxis.size + e.xAxis.labelOffset + s : e.xAxis.tickWidthMax + s + -e.xAxis.size + e.xAxis.labelOffset), !a && !n && !e.xAxis.label && o && e.isResponsiveTicks, !a && !n && !e.xAxis.label && o && !e.dynamicMarginTop && !e.isResponsiveTicks && (d = f ? e.xAxis.tickWidthMax + c + s + -e.xAxis.size : 0), !a && !n && e.xAxis.label && !o && !e.isResponsiveTicks && (d = f ? c + -e.xAxis.size + e.xAxis.labelOffset + s : -e.xAxis.size + e.xAxis.labelOffset + s), !a && !n && e.xAxis.label && e.dynamicMarginTop && e.isResponsiveTicks && (d = f ? c + e.xAxis.labelOffset + -e.xAxis.size + e.xAxis.tickWidthMax : e.dynamicMarginTop + -e.xAxis.size + s), !a && !n && !e.xAxis.label && e.dynamicMarginTop && e.isResponsiveTicks && (d = f ? c + e.xAxis.labelOffset + -e.xAxis.size + e.xAxis.tickWidthMax : e.dynamicMarginTop + -e.xAxis.size - s), !a && !n && e.xAxis.label && !e.dynamicMarginTop && e.isResponsiveTicks && (d = f ? c + e.xAxis.labelOffset + -e.xAxis.size + 25 : e.xAxis.labelOffset + -e.xAxis.size + s), !a && !n && !e.xAxis.label && !e.dynamicMarginTop && e.isResponsiveTicks && (d = -e.xAxis.size + s + e.xAxis.labelOffset), !a && !n && !e.xAxis.label && !o && !e.dynamicMarginTop && !e.isResponsiveTicks && (d = f ? c + -e.xAxis.size + e.xAxis.labelOffset : 0), `${d}px`;
};
const ym = (e) => {
  const t = /(?:\.([^.]+))$/, r = /[?&]wt=(csv|json)(?:&|$)/, n = new URL(e, window.location.origin), a = n.pathname, o = n.search, f = t.exec(a);
  if (f && f[1])
    return f[1];
  const s = r.exec(o);
  return s && s[1] ? s[1] : "";
};
function iT({ configUrl: e, config: t, isEditor: r = !1, isDebug: n = !1, isDashboard: a = !1, setConfig: o, setEditing: f, hostname: s, link: c, setSharedFilter: d, setSharedFilterValue: g, dashboardConfig: y }) {
  var jt, yn, Tn, Le, Ue, vt, et, on, St, En, Fn;
  const v = new xm(), [E, k] = ue.useState(!0), [M, T] = ue.useState(null), [m, D] = ue.useState({}), [L, _] = ue.useState(m.data || []), [N, R] = ue.useState(void 0), [U, H] = ue.useState(void 0), [Y, Z] = ue.useState(t && ((yn = (jt = t == null ? void 0 : t.legend) == null ? void 0 : jt.seriesHighlight) != null && yn.length) ? [...(Tn = t == null ? void 0 : t.legend) == null ? void 0 : Tn.seriesHighlight] : []), [re, K] = ue.useState("lg"), [q, me] = ue.useState([]), [W, se] = ue.useState(), [ce, he] = ue.useState(), [ie, V] = ue.useState(!1), [J, ne] = ue.useState([]), [Ae] = ue.useState(`cove-${Math.random().toString(16).slice(-4)}`);
  ue.useRef(/* @__PURE__ */ new Map()), ue.useRef();
  const xe = ue.useRef(null);
  n && console.log("Chart config, isEditor", m, r);
  let { legend: Pe, title: le, description: _e, visualizationType: $e } = m;
  r && (!le || le === "") && (le = "Chart Title"), m.table && (!((Le = m.table) != null && Le.label) || ((Ue = m.table) == null ? void 0 : Ue.label) === "") && (m.table.label = "Data Table");
  const { barBorderClass: Te, lineDatapointClass: ge, contentClasses: Re, sparkLineStyles: oe } = jy(m), we = ue.useId(), Ce = (vt = m.legend) != null && vt.hide ? m != null && m.title ? `dataTableSection__${m.title.replace(/\s/g, "")}` : "dataTableSection" : we, Be = async () => {
    var X;
    if (m.dataUrl) {
      const Fe = new URL(m.runtimeDataUrl || m.dataUrl, window.location.origin);
      let Ze = Object.fromEntries(new URLSearchParams(Fe.search)), He = !1;
      if ((X = m.filters) == null || X.forEach((mt) => {
        mt.type === "url" && Ze[mt.queryParameter] !== decodeURIComponent(mt.active) && (Ze[mt.queryParameter] = mt.active, He = !0);
      }), (!m.formattedData || m.formattedData.urlFiltered) && !He)
        return;
      let pt = `${Fe.origin}${Fe.pathname}${Object.keys(Ze).map((mt, dt) => {
        let Ke = dt === 0 ? "?" : "&";
        return Ke += mt + "=", Ke += Ze[mt], Ke;
      }).join("")}`, at = [];
      try {
        const mt = ym(Fe.href);
        mt === "csv" || Dh(pt) ? at = await fetch(pt).then((dt) => dt.text()).then((dt) => _h.parse(dt, {
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0
        }).data) : mt === "json" || Oh(pt) ? at = await fetch(pt).then((dt) => dt.json()) : at = [];
      } catch {
        console.error(`Cannot parse URL: ${pt}`), at = [];
      }
      m.dataDescription && (at = v.autoStandardize(at), at = v.developerStandardize(at, m.dataDescription)), Object.assign(at, { urlFiltered: !0 }), qe({ ...m, runtimeDataUrl: pt, data: at, formattedData: at }), at && (_(at), R(at), H(Fa(m.filters, at)));
    }
  }, je = async () => {
    let X = t || await (await fetch(e)).json(), Fe = X.data || [];
    const Ze = X.filters ? X.filters.filter((at) => at.type === "url").length > 0 : !1;
    if (X.dataUrl && !Ze)
      try {
        const at = ym(X.dataUrl);
        (at === "csv" || Dh(X.dataUrl)) && (Fe = await fetch(X.dataUrl + `?v=${Kh()}`).then((mt) => mt.text()).then((mt) => (mt = mt.replace(/(".*?")|,/g, (...Ke) => Ke[1] || "|"), mt = mt.replace(/["]+/g, ""), _h.parse(mt, {
          //quotes: "true",  // dont need these
          //quoteChar: "'",  // has no effect that I can tell
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0,
          delimiter: "|"
          // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
        }).data))), (at === "json" || Oh(X.dataUrl)) && (Fe = await fetch(X.dataUrl + `?v=${Kh()}`).then((mt) => mt.json()));
      } catch {
        console.error(`COVE: Cannot parse URL: ${X.dataUrl}`), Fe = [];
      }
    X.dataDescription && (Fe = v.autoStandardize(Fe), Fe = v.developerStandardize(Fe, X.dataDescription)), Fe && (_(Fe), R(Fe)), X !== void 0 && X.table !== void 0 && (!X.table || !X.table.showVertical) && (X.table = X.table || {}, X.table.showVertical = !1);
    let He = { ...Zd, ...X };
    He.filters && He.filters.forEach((at, mt) => {
      const dt = Sy(at);
      dt && (He.filters[mt].active = dt);
    }), He.visualizationType === "Box Plot" && (He.legend.hide = !0), He.table.show === void 0 && (He.table.show = !a), He.series.map((at) => {
      at.tooltip || (at.tooltip = !0), at.axis || (at.axis = "Left");
    }), !He.data && Fe && (He.data = Fe);
    const pt = { ...await Ey(He) };
    qe(pt, Fe);
  }, qe = (X, Fe) => {
    var at, mt, dt;
    let Ze = Fe || L;
    Object.keys(Zd).forEach((Ke) => {
      X[Ke] && typeof X[Ke] == "object" && !Array.isArray(X[Ke]) && (X[Ke] = { ...Zd[Ke], ...X[Ke] });
    });
    let He = [];
    if (X.exclusions && X.exclusions.active)
      if (X.xAxis.type === "categorical" && ((at = X.exclusions.keys) == null ? void 0 : at.length) > 0)
        He = Ze.filter((Ke) => !X.exclusions.keys.includes(Ke[X.xAxis.dataKey]));
      else if (bn(X.xAxis) && (X.exclusions.dateStart || X.exclusions.dateEnd) && X.xAxis.dateParseFormat) {
        const Ke = (Bt) => new Date(Bt).getTime();
        let Wt = Ke(X.exclusions.dateStart), Ut = Ke(X.exclusions.dateEnd) + 86399999, nn = typeof Wt !== void 0 && isNaN(Wt) === !1, Yt = typeof Ut !== void 0 && isNaN(Ut) === !1;
        nn && Yt ? He = Ze.filter((Bt) => Ke(Bt[X.xAxis.dataKey]) >= Wt && Ke(Bt[X.xAxis.dataKey]) <= Ut) : nn ? He = Ze.filter((Bt) => Ke(Bt[X.xAxis.dataKey]) >= Wt) : Yt && (He = Ze.filter((Bt) => Ke(Bt[X.xAxis.dataKey]) <= Ut));
      } else
        He = Fe || L;
    else
      He = Fe || L;
    R(He);
    let pt = [];
    if (X.filters && (X.filters.forEach((Ke, Wt) => {
      let Ut = [];
      Ut = Ke.orderedValues || ot(Ke.columnName, He).sort(Ke.order === "desc" ? Pw : Aw), X.filters[Wt].values = Ut, X.filters[Wt].active = X.filters[Wt].active || Ut[0], X.filters[Wt].filterStyle = X.filters[Wt].filterStyle ? X.filters[Wt].filterStyle : "dropdown";
    }), pt = Fa(X.filters, He), H(pt)), X.xAxis.type === "date-time" && X.barThickness > 0.1 ? X.barThickness = 0.035 : X.xAxis.type !== "date-time" && X.barThickness < 0.1 && (X.barThickness = 0.35), X.runtime = {}, X.runtime.seriesLabels = {}, X.runtime.seriesLabelsAll = [], X.runtime.originalXAxis = X.xAxis, X.visualizationType === "Pie" ? (X.runtime.seriesKeys = (Fe || Ze).map((Ke) => Ke[X.xAxis.dataKey]), X.runtime.seriesLabelsAll = X.runtime.seriesKeys) : X.runtime.seriesKeys = X.series ? X.series.map((Ke) => (X.runtime.seriesLabels[Ke.dataKey] = Ke.name || Ke.label || Ke.dataKey, X.runtime.seriesLabelsAll.push(Ke.name || Ke.dataKey), Ke.dataKey)) : [], X.visualizationType === "Box Plot" && X.series) {
      let Ke = He ? He.map((Mt) => Mt[X.xAxis.dataKey]) : Ze.map((Mt) => Mt[X.xAxis.dataKey]), Wt = He ? He.map((Mt) => {
        var _t;
        return Number(Mt[(_t = X == null ? void 0 : X.series[0]) == null ? void 0 : _t.dataKey]);
      }) : Ze.map((Mt) => {
        var _t;
        return Number(Mt[(_t = X == null ? void 0 : X.series[0]) == null ? void 0 : _t.dataKey]);
      });
      const nn = function(Mt) {
        return Mt.filter(function(_t, Tt, cn) {
          return cn.indexOf(_t) === Tt;
        });
      }(Ke);
      let Yt = [];
      const Bt = [];
      if (!nn)
        return;
      nn.forEach((Mt) => {
        try {
          if (!Mt)
            throw new Gt("No groups resolved in box plots");
          let _t = He ? He.filter((rn) => rn[X.xAxis.dataKey] === Mt) : Ze.filter((rn) => rn[X.xAxis.dataKey] === Mt), Tt = _t.map((rn) => {
            var kn;
            return Number(rn[(kn = X == null ? void 0 : X.series[0]) == null ? void 0 : kn.dataKey]);
          }), cn = Tt.sort((rn, kn) => rn - kn);
          const vn = Cw(cn);
          if (!_t)
            throw new Gt("boxplots dont have data yet");
          if (!Bt)
            throw new Gt("boxplots dont have plots yet");
          X.boxplot.firstQuartilePercentage === "" && (X.boxplot.firstQuartilePercentage = 0), X.boxplot.thirdQuartilePercentage === "" && (X.boxplot.thirdQuartilePercentage = 0);
          const zt = vn.q1, xn = vn.q3, fn = xn - zt, Vt = zt - (xn - zt) * 1.5, Xt = xn + (xn - zt) * 1.5, Dn = cn.filter((rn) => rn < Vt || rn > Xt);
          let On = Tt;
          On = On.filter((rn) => !Dn.includes(rn));
          const er = us(Tt) || 0, jn = ss([er, zt - 1.5 * fn]);
          Bt.push({
            columnCategory: Mt,
            columnMax: us([ss(Tt), zt + 1.5 * fn]),
            columnThirdQuartile: Number(xn).toFixed(X.dataFormat.roundTo),
            columnMedian: Number(ev(Tt)).toFixed(X.dataFormat.roundTo),
            columnFirstQuartile: zt.toFixed(X.dataFormat.roundTo),
            columnMin: jn,
            columnTotal: Tt.reduce((rn, kn) => rn + kn, 0),
            columnSd: Number(Zy(Tt)).toFixed(X.dataFormat.roundTo),
            columnMean: Number(Jy(Tt)).toFixed(X.dataFormat.roundTo),
            columnIqr: Number(fn).toFixed(X.dataFormat.roundTo),
            columnLowerBounds: jn,
            columnUpperBounds: us([ss(cn), zt + 1.5 * fn]),
            columnOutliers: Dn,
            values: Tt,
            nonOutlierValues: On
          });
        } catch (_t) {
          console.error("COVE: ", _t.message);
        }
      }), Yt = JSON.parse(JSON.stringify(Bt)), Yt.map((Mt) => (Mt.columnIqr = void 0, Mt.nonOutlierValues = void 0, Mt.columnLowerBounds = void 0, Mt.columnUpperBounds = void 0, null)), X.boxplot.allValues = Wt, X.boxplot.categories = nn, X.boxplot.plots = Bt, X.boxplot.tableData = Yt;
    }
    X.visualizationType === "Combo" && X.series && (X.runtime.barSeriesKeys = [], X.runtime.lineSeriesKeys = [], X.runtime.areaSeriesKeys = [], X.runtime.forecastingSeriesKeys = [], X.series.forEach((Ke) => {
      Ke.type === "Area Chart" && X.runtime.areaSeriesKeys.push(Ke), Ke.type === "Forecasting" && X.runtime.forecastingSeriesKeys.push(Ke), (Ke.type === "Bar" || Ke.type === "Combo") && X.runtime.barSeriesKeys.push(Ke.dataKey), (Ke.type === "Line" || Ke.type === "dashed-sm" || Ke.type === "dashed-md" || Ke.type === "dashed-lg") && X.runtime.lineSeriesKeys.push(Ke.dataKey), Ke.type === "Combo" && (Ke.type = "Bar");
    })), X.visualizationType === "Forecasting" && X.series && (X.runtime.forecastingSeriesKeys = [], X.series.forEach((Ke) => {
      Ke.type === "Forecasting" && X.runtime.forecastingSeriesKeys.push(Ke);
    })), X.visualizationType === "Area Chart" && X.series && (X.runtime.areaSeriesKeys = [], X.series.forEach((Ke) => {
      X.runtime.areaSeriesKeys.push({ ...Ke, type: "Area Chart" });
    })), X.visualizationType === "Bar" && X.orientation === "horizontal" || ["Deviation Bar", "Paired Bar", "Forest Plot"].includes(X.visualizationType) ? (X.runtime.xAxis = X.yAxis.yAxis ? X.yAxis.yAxis : X.yAxis, X.runtime.yAxis = X.xAxis.xAxis ? X.xAxis.xAxis : X.xAxis, X.runtime.horizontal = !1, X.orientation = "horizontal") : ["Box Plot", "Scatter Plot", "Area Chart", "Line", "Forecasting"].includes(X.visualizationType) ? (X.runtime.xAxis = X.xAxis, X.runtime.yAxis = X.yAxis, X.runtime.horizontal = !1, X.orientation = "vertical") : (X.runtime.xAxis = X.xAxis, X.runtime.yAxis = X.yAxis, X.runtime.horizontal = !1), X.runtime.uniqueId = Date.now(), X.runtime.editorErrorMessage = X.visualizationType === "Pie" && !X.yAxis.dataKey ? "Data Key property in Y Axis section must be set for pie charts." : "", X.runtime.editorErrorMessage = X.visualizationType === "Sankey" && !X.description ? "SUBTEXT/CITATION field is empty: A description of the Sankey Diagram data must be inputted." : "", (mt = X.legend.seriesHighlight) != null && mt.length && Z((dt = X.legend) == null ? void 0 : dt.seriesHighlight), D(X);
  }, ot = (X, Fe = this.state.data) => {
    const Ze = [];
    return Fe.forEach((He) => {
      const pt = He[X];
      pt && Ze.includes(pt) === !1 && Ze.push(pt);
    }), Ze;
  }, Je = (X, Fe) => {
    let Ze = m.visualizationType === "Bar" && m.visualizationSubType === "horizontal" ? m.xAxis.dataKey : m.yAxis.sortKey, He = parseFloat(X[Ze]), pt = parseFloat(Fe[Ze]);
    return He < pt ? m.sortData === "ascending" ? 1 : -1 : He > pt ? m.sortData === "ascending" ? -1 : 1 : 0;
  }, it = new my((X) => {
    for (let Fe of X) {
      let { width: Ze, height: He } = Fe.contentRect, pt = gy(Ze), at = 32, mt = 350;
      K(pt), r && (Ze = Ze - mt), Fe.target.dataset.lollipop === "true" && (Ze = Ze - 2.5), Ze = Ze - at, me([Ze, He]);
    }
  }), Xe = ue.useCallback((X) => {
    X !== null && it.observe(X), he(X);
  }, []);
  function Ie(X) {
    return Object.keys(X).length === 0;
  }
  ue.useEffect(() => {
    je();
  }, []), ue.useEffect(() => {
    Be();
  }, [JSON.stringify(m.filters)]), ue.useEffect(() => {
    ce && !Ie(m) && !ie && (Uy("cove_loaded", { config: m }), V(!0));
  }, [ce, m]), ue.useEffect(() => {
    const X = (Fe) => {
      let Ze = [];
      Ze.push(Fe.detail), se(Ze);
    };
    return Ky("cove_filterData", (Fe) => X(Fe)), () => {
      Yy("cove_filterData", X);
    };
  }, [m]), ue.useEffect(() => {
    if (W && W[0] && !W[0].hasOwnProperty("active")) {
      let Fe = { ...m };
      delete Fe.filters, D(Fe), H(Fa(W, N));
    }
    if (W && W.length > 0 && W.length > 0 && W[0].hasOwnProperty("active")) {
      let X = { ...m, filters: W };
      D(X), H(Fa(W, N));
    }
  }, [W]), t && ue.useEffect(() => {
    je();
  }, [t.data]), ue.useEffect(() => {
    var X;
    if (L && m.xAxis && ((X = m.runtime) != null && X.seriesKeys)) {
      const Fe = ["Paired Bar", "Deviation Bar"].includes(m.visualizationType) ? m.twoColor.palette : m.palette, Ze = { ...or, ...ju };
      let He = m.customColors || Ze[Fe], pt = m.runtime.seriesKeys.length, at;
      for (; pt > He.length; )
        He = He.concat(He);
      He = He.slice(0, pt), at = () => Fm({
        domain: m.runtime.seriesLabelsAll,
        range: He,
        unknown: null
      }), T(at), k(!1);
    }
    m && L && m.sortData && L.sort(Je);
  }, [m, L]);
  const Me = (X) => {
    if (Y.length + 1 === m.runtime.seriesKeys.length && m.visualizationType !== "Forecasting") {
      ut();
      return;
    }
    const Fe = [...Y];
    let Ze = X.datum;
    m.runtime.seriesLabels && m.runtime.seriesKeys.forEach((He) => {
      m.runtime.seriesLabels[He] === X.datum && (Ze = He);
    }), Fe.indexOf(Ze) !== -1 ? Fe.splice(Fe.indexOf(Ze), 1) : Fe.push(Ze), Z(Fe);
  }, ut = () => {
    try {
      const X = xe.current;
      if (!X)
        throw new Gt("No legend available to set previous focus on.");
      X.focus();
    } catch (X) {
      console.error("COVE:", X.message);
    }
    Z([]);
  }, Ve = m.orientation === "horizontal" ? "yAxis" : "xAxis", Ge = (X, Fe = !0) => {
    let Ze = ig(m.runtime[Ve].dateParseFormat)(X);
    return Ze || (Fe && (m.runtime.editorErrorMessage = `Error parsing date "${X}". Try reviewing your data and date parse settings in the X Axis section.`), /* @__PURE__ */ new Date());
  }, lt = (X) => tf(m.runtime[Ve].dateDisplayFormat)(X), ct = (X) => tf(m.tooltips.dateDisplayFormat)(X);
  function wt(X, Fe) {
    const He = document.createElement("canvas").getContext("2d");
    if (!He) {
      console.error("2d context not found");
      return;
    }
    return He.font = Fe || getComputedStyle(document.body).font, Math.ceil(He.measureText(X).width);
  }
  const en = (X, Fe, Ze = !1, He, pt, at) => {
    if (isNaN(X) || !X)
      return X;
    const mt = X < 0;
    (Fe === void 0 || !Fe) && (Fe = "left"), mt && (X = Math.abs(X));
    let {
      dataFormat: { commas: dt, abbreviated: Ke, roundTo: Wt, prefix: Ut, suffix: nn, rightRoundTo: Yt, bottomRoundTo: Bt, rightPrefix: Mt, rightSuffix: _t, bottomPrefix: Tt, bottomSuffix: cn, bottomAbbreviated: vn }
    } = m;
    String(X).indexOf(",") !== -1 && (X = X.replaceAll(",", ""));
    let zt = X, xn = {
      useGrouping: !!dt
      // for old chart data table to work right cant just leave this to undefined
    };
    if (Fe === "left" || Fe === void 0) {
      let Xt;
      at !== void 0 ? Xt = at ? Number(at) : 0 : Xt = Wt ? Number(Wt) : 0, xn = {
        useGrouping: at ? !0 : !!m.dataFormat.commas,
        minimumFractionDigits: Xt,
        maximumFractionDigits: Xt
      };
    }
    Fe === "right" && (xn = {
      useGrouping: !!m.dataFormat.rightCommas,
      minimumFractionDigits: Yt ? Number(Yt) : 0,
      maximumFractionDigits: Yt ? Number(Yt) : 0
    });
    const fn = () => m.forestPlot.type === "Logarithmic" && !Bt ? 2 : Number(Bt) ? Number(Bt) : 0;
    if (Fe === "bottom" && (xn = {
      useGrouping: !!m.dataFormat.bottomCommas,
      minimumFractionDigits: fn(),
      maximumFractionDigits: fn()
    }), X = Uh(X), isNaN(X))
      return m.runtime.editorErrorMessage = `Unable to parse number from data ${zt}. Try reviewing your data and selections in the Data Series section.`, zt;
    if (!m.dataFormat)
      return X;
    if (m.dataCutoff) {
      let Xt = Uh(m.dataCutoff);
      X < Xt && (X = Xt);
    }
    Fe === "left" && dt && Ke && Ze || Fe === "bottom" && dt && Ke && Ze ? X = X : X = X.toLocaleString("en-US", xn);
    let Vt = "";
    return Ke && Fe === "left" && Ze && (X = pm(parseFloat(X))), vn && Fe === "bottom" && Ze && (X = pm(parseFloat(X))), He && Fe === "left" ? Vt = He + Vt : Ut && Fe === "left" && (Vt += Ut), Mt && Fe === "right" && (Vt += Mt), Tt && Fe === "bottom" && (Vt += Tt), Vt += X, pt && Fe === "left" ? Vt += pt : nn && Fe === "left" && (Vt += nn), _t && Fe === "right" && (Vt += _t), cn && Fe === "bottom" && (Vt += cn), mt && (Vt = "-" + Vt), String(Vt);
  }, an = {
    "Paired Bar": /* @__PURE__ */ i.createElement(Ur, null),
    Forecasting: /* @__PURE__ */ i.createElement(Ur, null),
    Bar: /* @__PURE__ */ i.createElement(Ur, null),
    Line: /* @__PURE__ */ i.createElement(Ur, null),
    Combo: /* @__PURE__ */ i.createElement(Ur, null),
    Pie: /* @__PURE__ */ i.createElement(tE, null),
    "Box Plot": /* @__PURE__ */ i.createElement(Ur, null),
    "Area Chart": /* @__PURE__ */ i.createElement(Ur, null),
    "Scatter Plot": /* @__PURE__ */ i.createElement(Ur, null),
    "Deviation Bar": /* @__PURE__ */ i.createElement(Ur, null),
    "Forest Plot": /* @__PURE__ */ i.createElement(Ur, null)
  }, Lt = () => {
    if (m.visualizationType === "Sankey" || m.visualizationType === "Forecasting" || m.visualizationType === "Forest Plot")
      return !1;
    if (m.visualizationType === "Pie") {
      if ((m == null ? void 0 : m.yAxis.dataKey) === void 0)
        return !0;
    } else if ((m == null ? void 0 : m.series) === void 0 || !((m == null ? void 0 : m.series.length) > 0))
      return !0;
    return !m.xAxis.dataKey;
  }, $t = (X, Fe) => {
    if (X === null || X === "" || X === void 0)
      return "";
    if (typeof X == "string" && X.length > 0 && m.legend.type === "equalnumber")
      return X;
    let Ze = X, He;
    if (Object.keys(m.columns).length > 0 && Object.keys(m.columns).forEach(function(pt) {
      var at = m.columns[pt];
      at.name === Fe && (He = at);
    }), He === void 0 && (He = m.type === "chart" ? m.dataFormat : m.primary, He.useCommas = He.commas, He.roundToPlace = He.roundTo ? He.roundTo : ""), He) {
      let pt = !1, at = 0;
      Number(X) && (He.roundToPlace >= 0 && (pt = He.roundToPlace ? He.roundToPlace !== "" || He.roundToPlace !== null : !1, at = He.roundToPlace ? Number(He.roundToPlace) : 0, He.hasOwnProperty("roundToPlace") && pt && (Ze = Number(X).toFixed(at))), He.hasOwnProperty("useCommas") && He.useCommas === !0 && (Ze = Number(X).toLocaleString("en-US", {
        style: "decimal",
        minimumFractionDigits: pt ? at : 0,
        maximumFractionDigits: pt ? at : 5
      }))), Ze = (He.prefix || "") + Ze + (He.suffix || "");
    }
    return Ze;
  }, Ot = () => {
    const X = (Ze) => {
      Ze && Ze.preventDefault();
      let He = { ...m };
      delete He.newViz, qe(He);
    }, Fe = {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gridArea: "content"
    };
    return /* @__PURE__ */ i.createElement("section", { className: "waiting", style: Fe }, /* @__PURE__ */ i.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ i.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ i.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ i.createElement(Hf, { className: "btn", style: { margin: "1em auto" }, disabled: Lt(), onClick: (Ze) => X(Ze) }, "I'm Done")));
  }, Gt = () => {
    const X = {
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
    return /* @__PURE__ */ i.createElement("section", { className: "waiting", style: X }, /* @__PURE__ */ i.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ i.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ i.createElement("p", null, m.runtime.editorErrorMessage)));
  }, un = (X) => {
    try {
      if (!X)
        throw new Gt("COVE: No rowObj in applyLegendToRow");
      if (m.type === "navigation") {
        let Fe = or[m.color] || or.bluegreenreverse;
        return mm(Fe[3]);
      }
      return mm();
    } catch (Fe) {
      console.error("COVE: ", Fe);
    }
  }, Ne = (X) => {
    var Fe;
    return Array.isArray(X) ? m.visualizationType === "Forecasting" ? X : (Fe = m == null ? void 0 : m.xAxis) != null && Fe.dataKey ? v.cleanData(X, m.xAxis.dataKey) : X : [];
  }, At = (X) => X;
  let Zt = /* @__PURE__ */ i.createElement(Dy, null);
  const Ht = () => {
    const X = ["chart-container", "p-relative"];
    return m.legend.position === "bottom" && X.push("bottom"), m.legend.hide && X.push("legend-hidden"), ge && X.push(ge), m.barHasBorder || X.push("chart-bar--no-border"), n && X.push("debug"), X.push(...Re), X;
  };
  if (!E) {
    const X = /* @__PURE__ */ i.createElement("a", { href: `#data-table-${m.dataKey}`, className: "margin-left-href" }, m.dataKey, " (Go to Table)");
    Zt = /* @__PURE__ */ i.createElement(i.Fragment, null, r && /* @__PURE__ */ i.createElement(Tw, null), /* @__PURE__ */ i.createElement(Qd.Responsive, { isEditor: r }, m.newViz && /* @__PURE__ */ i.createElement(Ot, null), m.newViz === void 0 && r && m.runtime && ((et = m.runtime) == null ? void 0 : et.editorErrorMessage) && /* @__PURE__ */ i.createElement(Gt, null), !Lt() && !m.newViz && /* @__PURE__ */ i.createElement("div", { className: "cdc-chart-inner-container cove-component__content", "aria-label": Ef(m), tabIndex: 0 }, /* @__PURE__ */ i.createElement(wy, { showTitle: m.showTitle, isDashboard: a, title: le, superTitle: m.superTitle, classes: ["chart-title", `${m.theme}`, "cove-component__header"], style: void 0 }), m.filters && !W && m.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement(Mh, { config: m, setConfig: D, setFilteredData: H, filteredData: U, excludedData: N, filterData: Fa, dimensions: q }), /* @__PURE__ */ i.createElement(Ry, { skipId: Ce, skipMessage: "Skip Over Chart Container" }), (m == null ? void 0 : m.introText) && m.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement("section", { className: "introText" }, Mi(m.introText)), /* @__PURE__ */ i.createElement("div", { style: { marginBottom: gm(m, Pe, re) }, className: Ht().join(" ") }, m.visualizationType !== "Spark Line" && an[m.visualizationType], m.visualizationType === "Spark Line" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Mh, { config: m, setConfig: D, setFilteredData: H, filteredData: U, excludedData: N, filterData: Fa, dimensions: q }), (m == null ? void 0 : m.introText) && /* @__PURE__ */ i.createElement("section", { className: "introText", style: { padding: "0px 0 35px" } }, Mi(m.introText)), /* @__PURE__ */ i.createElement("div", { style: { height: "100px", width: "100%", ...oe } }, /* @__PURE__ */ i.createElement(up, null, (Fe) => /* @__PURE__ */ i.createElement(tw, { width: Fe.width, height: Fe.height }))), _e && /* @__PURE__ */ i.createElement("div", { className: "subtext", style: { padding: "35px 0 15px" } }, Mi(_e))), m.visualizationType === "Sankey" && /* @__PURE__ */ i.createElement(up, { "aria-hidden": "true" }, (Fe) => /* @__PURE__ */ i.createElement(LE, { runtime: m.runtime, width: Fe.width, height: Fe.height })), !m.legend.hide && m.visualizationType !== "Spark Line" && m.visualizationType !== "Sankey" && /* @__PURE__ */ i.createElement(nw, { ref: xe })), a && m.table && m.table.show && m.table.showDataTableLink ? X : c && c, _e && m.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement("div", { className: "column " + m.isResponsiveTicks ? "subtext--responsive-ticks" : "subtext" }, Mi(_e)), /* @__PURE__ */ i.createElement(Pd.Section, { classes: ["download-buttons"] }, m.table.showDownloadImgButton && /* @__PURE__ */ i.createElement(Pd.Button, { text: "Download Image", title: "Download Chart as Image", type: "image", state: m, elementToCapture: Ae }), m.table.showDownloadPdfButton && /* @__PURE__ */ i.createElement(Pd.Button, { text: "Download PDF", title: "Download Chart as PDF", type: "pdf", state: m, elementToCapture: Ae })), (m.xAxis.dataKey && m.table.show && m.visualizationType !== "Spark Line" && m.visualizationType !== "Sankey" || m.visualizationType === "Sankey" && m.table.show) && /* @__PURE__ */ i.createElement(
      Ly,
      {
        config: m,
        rawData: m.visualizationType === "Sankey" ? (St = (on = m == null ? void 0 : m.data) == null ? void 0 : on[0]) == null ? void 0 : St.tableData : m.table.customTableConfig ? Fa(m.filters, m.data) : m.data,
        runtimeData: m.visualizationType === "Sankey" ? (Fn = (En = m == null ? void 0 : m.data) == null ? void 0 : En[0]) == null ? void 0 : Fn.tableData : v.applySuppression(U || N, m.suppressedData),
        expandDataTable: m.table.expanded,
        columns: m.columns,
        displayDataAsText: $t,
        displayGeoName: At,
        applyLegendToRow: un,
        tableTitle: m.table.label,
        indexTitle: m.table.indexLabel,
        vizTitle: le,
        viewport: re,
        tabbingId: Ce,
        colorScale: M
      }
    ), (m == null ? void 0 : m.footnotes) && /* @__PURE__ */ i.createElement("section", { className: "footnotes" }, Mi(m.footnotes)))));
  }
  const Dt = {
    capitalize: (X) => X.charAt(0).toUpperCase() + X.slice(1),
    computeMarginBottom: gm,
    getXAxisData: (X) => bn(m.runtime.xAxis) ? Ge(X[m.runtime.originalXAxis.dataKey]).getTime() : X[m.runtime.originalXAxis.dataKey],
    getYAxisData: (X, Fe) => X[Fe],
    config: m,
    setConfig: D,
    rawData: L ?? {},
    excludedData: N,
    transformedData: Ne(U || N),
    // do this right before passing to components
    tableData: U || N,
    // do not clean table data
    unfilteredData: L,
    seriesHighlight: Y,
    colorScale: M,
    dimensions: q,
    currentViewport: re,
    parseDate: Ge,
    formatDate: lt,
    formatTooltipsDate: ct,
    formatNumber: en,
    loading: E,
    updateConfig: qe,
    colorPalettes: or,
    isDashboard: a,
    setParentConfig: o,
    missingRequiredSections: Lt,
    setEditing: f,
    setFilteredData: H,
    handleChartAriaLabels: Ef,
    highlight: Me,
    highlightReset: ut,
    legend: Pe,
    setSeriesHighlight: Z,
    dynamicLegendItems: J,
    setDynamicLegendItems: ne,
    filterData: Fa,
    imageId: Ae,
    handleLineType: Cf,
    lineOptions: Rw,
    isNumber: Wu,
    getTextWidth: wt,
    twoColorPalette: ju,
    isEditor: r,
    isDebug: n,
    setSharedFilter: d,
    setSharedFilterValue: g,
    dashboardConfig: y,
    debugSvg: n
  };
  return /* @__PURE__ */ i.createElement(xt.Provider, { value: Dt }, /* @__PURE__ */ i.createElement(Qd.VisualizationWrapper, { config: m, isEditor: r, currentViewport: re, ref: Xe, imageId: Ae, showEditorPanel: m == null ? void 0 : m.showEditorPanel }, Zt));
}
export {
  iT as C
};
