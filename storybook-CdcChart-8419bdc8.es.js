import { r as ue, R as i } from "./storybook-index-45401197.es.js";
import { a as py, i as Dh, b as Oh, g as my } from "./storybook-isSolr-6a0136d5.es.js";
import { _ as Xr, P as gy, D as yy, C as vy, A as xy, F as Mh, g as by } from "./storybook-Filters-d0b59c22.es.js";
import { L as Qd, a as Sy } from "./storybook-coveUpdateWorker-d145772b.es.js";
import { B as Hf } from "./storybook-Button-d74e310e.es.js";
import { p as ym, P as fe } from "./storybook-index-43433e35.es.js";
import { d as Ey } from "./storybook-debounce-cc216a80.es.js";
import { a as Wf } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { P as _h } from "./storybook-papaparse.min-b07ddc33.es.js";
import { H as Mi, T as ky } from "./storybook-index-e5bf02db.es.js";
import { _ as un } from "./storybook-extends-70f3d2a3.es.js";
import { p as Nh, d as Ti, s as Wr, c as It, h as Fh, a as Sc, e as Vn, t as $u, f as Uo, m as Ad, i as $h, j as Wn, k as zh, l as wy, n as Ty, G as Cy, o as ju, q as or, r as Uu, g as Go, T as xt, I as Bh } from "./storybook-InputToggle-388019bd.es.js";
import { D as vm } from "./storybook-DataTransform-b554456e.es.js";
import { t as Ay, a as Sn, f as xm, L as Ih, b as ts, g as Ci, S as Py, M as Pd, D as Ry } from "./storybook-DataTable-e40c0001.es.js";
import { E as _r, L as Ly } from "./storybook-Loading-f180d060.es.js";
import { b as Ec, t as Dy, e as bm, f as Hh, g as Oy, h as My, j as _y, k as Wh, m as Ny, G as nt, c as wn } from "./storybook-Group-e6c0d0df.es.js";
import { s as ls, t as Sm, a as Em, b as km, d as Cs, B as hr, c as Hn, C as Fy } from "./storybook-Circle-c4db6c75.es.js";
import { R as $y } from "./storybook-index-633d712d.es.js";
import { e as bs, a as An, b as Pn, c as Rn, d as Ln, A as _i } from "./storybook-index-66852bf6.es.js";
import { i as wm, m as Rd, c as Tm, j as bu, k as Su, l as Eu, n as Vh, o as zy, p as jh, b as Cm, d as Am } from "./storybook-year-bedc547d.es.js";
import { a as kt } from "./storybook-Icon-48ed169f.es.js";
import { C as By, V as Iy } from "./storybook-VizFilterEditor-5955fe69.es.js";
import { S as wt, T as Ze, C as ft, D as Hy } from "./storybook-DataTableEditor-f2f7b65f.es.js";
import { T as De } from "./storybook-Tooltip-edc0f7ab.es.js";
import { I as Ha } from "./storybook-InputSelect-a65afd95.es.js";
import { S as Pm } from "./storybook-icon-check-0ef17e76.es.js";
import { _ as Wy } from "./storybook-lodash-c15d8e1c.es.js";
import { u as Vy, p as jy, s as Uy, a as Ky } from "./storybook-useDataVizClasses-707a8d8e.es.js";
import { n as Uh } from "./storybook-numberFromString-24623c03.es.js";
import { c as Kh } from "./storybook-cacheBustingString-7a3dd9ba.es.js";
function Rm(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Yh(e) {
  let t = e, n = e;
  e.length === 1 && (t = (f, s) => e(f) - s, n = Yy(e));
  function r(f, s, c, d) {
    for (c == null && (c = 0), d == null && (d = f.length); c < d; ) {
      const g = c + d >>> 1;
      n(f[g], s) < 0 ? c = g + 1 : d = g;
    }
    return c;
  }
  function a(f, s, c, d) {
    for (c == null && (c = 0), d == null && (d = f.length); c < d; ) {
      const g = c + d >>> 1;
      n(f[g], s) > 0 ? d = g : c = g + 1;
    }
    return c;
  }
  function o(f, s, c, d) {
    c == null && (c = 0), d == null && (d = f.length);
    const g = r(f, s, c, d - 1);
    return g > c && t(f[g - 1], s) > -t(f[g], s) ? g - 1 : g;
  }
  return { left: r, center: o, right: a };
}
function Yy(e) {
  return (t, n) => Rm(e(t), n);
}
function* Xy(e, t) {
  if (t === void 0)
    for (let n of e)
      n != null && (n = +n) >= n && (yield n);
  else {
    let n = -1;
    for (let r of e)
      (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
  }
}
function qy(e, t) {
  let n = 0, r, a = 0, o = 0;
  if (t === void 0)
    for (let f of e)
      f != null && (f = +f) >= f && (r = f - a, a += r / ++n, o += r * (f - a));
  else {
    let f = -1;
    for (let s of e)
      (s = t(s, ++f, e)) != null && (s = +s) >= s && (r = s - a, a += r / ++n, o += r * (s - a));
  }
  if (n > 1)
    return o / (n - 1);
}
function Gy(e, t) {
  const n = qy(e, t);
  return n && Math.sqrt(n);
}
function ss(e, t) {
  let n;
  if (t === void 0)
    for (const r of e)
      r != null && (n < r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let a of e)
      (a = t(a, ++r, e)) != null && (n < a || n === void 0 && a >= a) && (n = a);
  }
  return n;
}
function us(e, t) {
  let n;
  if (t === void 0)
    for (const r of e)
      r != null && (n > r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let a of e)
      (a = t(a, ++r, e)) != null && (n > a || n === void 0 && a >= a) && (n = a);
  }
  return n;
}
function Lm(e, t, n = 0, r = e.length - 1, a = Rm) {
  for (; r > n; ) {
    if (r - n > 600) {
      const c = r - n + 1, d = t - n + 1, g = Math.log(c), y = 0.5 * Math.exp(2 * g / 3), v = 0.5 * Math.sqrt(g * y * (c - y) / c) * (d - c / 2 < 0 ? -1 : 1), E = Math.max(n, Math.floor(t - d * y / c + v)), k = Math.min(r, Math.floor(t + (c - d) * y / c + v));
      Lm(e, t, E, k, a);
    }
    const o = e[t];
    let f = n, s = r;
    for (ns(e, n, t), a(e[r], o) > 0 && ns(e, n, r); f < s; ) {
      for (ns(e, f, s), ++f, --s; a(e[f], o) < 0; )
        ++f;
      for (; a(e[s], o) > 0; )
        --s;
    }
    a(e[n], o) === 0 ? ns(e, n, s) : (++s, ns(e, s, r)), s <= t && (n = s + 1), t <= s && (r = s - 1);
  }
  return e;
}
function ns(e, t, n) {
  const r = e[t];
  e[t] = e[n], e[n] = r;
}
function Zy(e, t, n) {
  if (e = Float64Array.from(Xy(e, n)), !!(r = e.length)) {
    if ((t = +t) <= 0 || r < 2)
      return us(e);
    if (t >= 1)
      return ss(e);
    var r, a = (r - 1) * t, o = Math.floor(a), f = ss(Lm(e, o).subarray(0, o + 1)), s = us(e.subarray(o + 1));
    return f + (s - f) * (a - o);
  }
}
function Qy(e, t) {
  let n = 0, r = 0;
  if (t === void 0)
    for (let a of e)
      a != null && (a = +a) >= a && (++n, r += a);
  else {
    let a = -1;
    for (let o of e)
      (o = t(o, ++a, e)) != null && (o = +o) >= o && (++n, r += o);
  }
  if (n)
    return r / n;
}
function Jy(e, t) {
  return Zy(e, 0.5, t);
}
class Xh extends Map {
  constructor(t, n = nv) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null)
      for (const [r, a] of t)
        this.set(r, a);
  }
  get(t) {
    return super.get(qh(this, t));
  }
  has(t) {
    return super.has(qh(this, t));
  }
  set(t, n) {
    return super.set(ev(this, t), n);
  }
  delete(t) {
    return super.delete(tv(this, t));
  }
}
function qh({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) ? e.get(r) : n;
}
function ev({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function tv({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) && (n = e.get(r), e.delete(r)), n;
}
function nv(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function rv(e, t, n) {
  e = +e, t = +t, n = (a = arguments.length) < 2 ? (t = e, e = 0, 1) : a < 3 ? 1 : +n;
  for (var r = -1, a = Math.max(0, Math.ceil((t - e) / n)) | 0, o = new Array(a); ++r < a; )
    o[r] = e + r * n;
  return o;
}
const Gh = Symbol("implicit");
function Vf() {
  var e = new Xh(), t = [], n = [], r = Gh;
  function a(o) {
    let f = e.get(o);
    if (f === void 0) {
      if (r !== Gh)
        return r;
      e.set(o, f = t.push(o) - 1);
    }
    return n[f % n.length];
  }
  return a.domain = function(o) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new Xh();
    for (const f of o)
      e.has(f) || e.set(f, t.push(f) - 1);
    return a;
  }, a.range = function(o) {
    return arguments.length ? (n = Array.from(o), a) : n.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (r = o, a) : r;
  }, a.copy = function() {
    return Vf(t, n).unknown(r);
  }, Ec.apply(a, arguments), a;
}
function jf() {
  var e = Vf().unknown(void 0), t = e.domain, n = e.range, r = 0, a = 1, o, f, s = !1, c = 0, d = 0, g = 0.5;
  delete e.unknown;
  function y() {
    var v = t().length, E = a < r, k = E ? a : r, M = E ? r : a;
    o = (M - k) / Math.max(1, v - c + d * 2), s && (o = Math.floor(o)), k += (M - k - o * (v - c)) * g, f = o * (1 - c), s && (k = Math.round(k), f = Math.round(f));
    var T = rv(v).map(function(m) {
      return k + o * m;
    });
    return n(E ? T.reverse() : T);
  }
  return e.domain = function(v) {
    return arguments.length ? (t(v), y()) : t();
  }, e.range = function(v) {
    return arguments.length ? ([r, a] = v, r = +r, a = +a, y()) : [r, a];
  }, e.rangeRound = function(v) {
    return [r, a] = v, r = +r, a = +a, s = !0, y();
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
    return jf(t(), [r, a]).round(s).paddingInner(c).paddingOuter(d).align(g);
  }, Ec.apply(y(), arguments);
}
function Dm(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Dm(t());
  }, e;
}
function av() {
  return Dm(jf.apply(null, arguments).paddingInner(1));
}
function Om(e, t) {
  e = e.slice();
  var n = 0, r = e.length - 1, a = e[n], o = e[r], f;
  return o < a && (f = n, n = r, r = f, f = a, a = o, o = f), e[n] = t.floor(a), e[r] = t.ceil(o), e;
}
function Zh(e) {
  return Math.log(e);
}
function Qh(e) {
  return Math.exp(e);
}
function iv(e) {
  return -Math.log(-e);
}
function ov(e) {
  return -Math.exp(-e);
}
function lv(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function sv(e) {
  return e === 10 ? lv : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function uv(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Jh(e) {
  return (t, n) => -e(-t, n);
}
function cv(e) {
  const t = e(Zh, Qh), n = t.domain;
  let r = 10, a, o;
  function f() {
    return a = uv(r), o = sv(r), n()[0] < 0 ? (a = Jh(a), o = Jh(o), e(iv, ov)) : e(Zh, Qh), t;
  }
  return t.base = function(s) {
    return arguments.length ? (r = +s, f()) : r;
  }, t.domain = function(s) {
    return arguments.length ? (n(s), f()) : n();
  }, t.ticks = (s) => {
    const c = n();
    let d = c[0], g = c[c.length - 1];
    const y = g < d;
    y && ([d, g] = [g, d]);
    let v = a(d), E = a(g), k, M;
    const T = s == null ? 10 : +s;
    let m = [];
    if (!(r % 1) && E - v < T) {
      if (v = Math.floor(v), E = Math.ceil(E), d > 0) {
        for (; v <= E; ++v)
          for (k = 1; k < r; ++k)
            if (M = v < 0 ? k / o(-v) : k * o(v), !(M < d)) {
              if (M > g)
                break;
              m.push(M);
            }
      } else
        for (; v <= E; ++v)
          for (k = r - 1; k >= 1; --k)
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
    if (s == null && (s = 10), c == null && (c = r === 10 ? "s" : ","), typeof c != "function" && (!(r % 1) && (c = Oy(c)).precision == null && (c.trim = !0), c = My(c)), s === 1 / 0)
      return c;
    const d = Math.max(1, r * s / t.ticks().length);
    return (g) => {
      let y = g / o(Math.round(a(g)));
      return y * r < r - 0.5 && (y *= r), y <= d ? c(g) : "";
    };
  }, t.nice = () => n(Om(n(), {
    floor: (s) => o(Math.floor(a(s))),
    ceil: (s) => o(Math.ceil(a(s)))
  })), t;
}
function Mm() {
  const e = cv(Dy()).domain([1, 10]);
  return e.copy = () => bm(e, Mm()).base(e.base()), Ec.apply(e, arguments), e;
}
const Ku = wm(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Ku.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? wm((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Ku);
Ku.range;
function dv(e, t, n, r, a, o) {
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
    [r, 1, Vh],
    [r, 2, 2 * Vh],
    [n, 1, zy],
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
    const v = Math.abs(g - d) / y, E = _y(([, , T]) => T).right(f, v);
    if (E === f.length)
      return e.every(Wh(d / Rd, g / Rd, y));
    if (E === 0)
      return Ku.every(Math.max(Wh(d, g, y), 1));
    const [k, M] = f[v / f[E - 1][2] < f[E][2] / v ? E - 1 : E];
    return k.every(M);
  }
  return [s, c];
}
const [fv, hv] = dv(Tm, km, Am, Cm, Em, Sm);
function pv(e) {
  return new Date(e);
}
function mv(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function _m(e, t, n, r, a, o, f, s, c, d) {
  var g = Ny(), y = g.invert, v = g.domain, E = d(".%L"), k = d(":%S"), M = d("%I:%M"), T = d("%I %p"), m = d("%a %d"), D = d("%b %d"), L = d("%B"), _ = d("%Y");
  function N(R) {
    return (c(R) < R ? E : s(R) < R ? k : f(R) < R ? M : o(R) < R ? T : r(R) < R ? a(R) < R ? m : D : n(R) < R ? L : _)(R);
  }
  return g.invert = function(R) {
    return new Date(y(R));
  }, g.domain = function(R) {
    return arguments.length ? v(Array.from(R, mv)) : v().map(pv);
  }, g.ticks = function(R) {
    var j = v();
    return e(j[0], j[j.length - 1], R ?? 10);
  }, g.tickFormat = function(R, j) {
    return j == null ? N : d(j);
  }, g.nice = function(R) {
    var j = v();
    return (!R || typeof R.range != "function") && (R = t(j[0], j[j.length - 1], R ?? 10)), R ? v(Om(j, R)) : g;
  }, g.copy = function() {
    return bm(g, _m(e, t, n, r, a, o, f, s, c, d));
  }, g;
}
function gv() {
  return Ec.apply(_m(fv, hv, Tm, km, Am, Cm, Em, Sm, ls, Ay).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var yv = Cs("domain", "range", "reverse", "align", "padding", "round");
function Jd(e) {
  return yv(jf(), e);
}
var vv = Cs("domain", "range", "reverse", "align", "padding", "round");
function Ko(e) {
  return vv(av(), e);
}
var xv = Cs("domain", "range", "reverse", "clamp", "interpolate", "nice", "round");
function bv(e) {
  return xv(gv(), e);
}
var Sv = Cs("domain", "range", "reverse", "base", "clamp", "interpolate", "nice", "round");
function Yu(e) {
  return Sv(Mm(), e);
}
var Ev = Cs("domain", "range", "reverse", "unknown");
function Nm(e) {
  return Ev(Vf(), e);
}
function kv(e) {
  if ((typeof e == "function" || typeof e == "object" && e) && "valueOf" in e) {
    var t = e.valueOf();
    if (typeof t == "number")
      return t;
  }
  return e;
}
function wv(e, t) {
  var n = e;
  return "ticks" in n ? n.ticks(t) : n.domain().filter(function(r, a, o) {
    return t == null || o.length <= t || a % Math.round((o.length - 1) / t) === 0;
  });
}
function Tv(e) {
  return e == null ? void 0 : e.toString();
}
var Ni = [], Cv = function() {
  return Ni.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, Av = function() {
  return Ni.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, ep = "ResizeObserver loop completed with undelivered notifications.", Pv = function() {
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
}, Fm = function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, Fi(this);
  }
  return e;
}(), $m = function() {
  function e(t, n, r, a) {
    return this.x = t, this.y = n, this.width = r, this.height = a, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Fi(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, n = t.x, r = t.y, a = t.top, o = t.right, f = t.bottom, s = t.left, c = t.width, d = t.height;
    return { x: n, y: r, top: a, right: o, bottom: f, left: s, width: c, height: d };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), Uf = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, zm = function(e) {
  if (Uf(e)) {
    var t = e.getBBox(), n = t.width, r = t.height;
    return !n && !r;
  }
  var a = e, o = a.offsetWidth, f = a.offsetHeight;
  return !(o || f || e.getClientRects().length);
}, tp = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var n = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(n && e instanceof n.Element);
}, Rv = function(e) {
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
}, cs = typeof window < "u" ? window : {}, ku = /* @__PURE__ */ new WeakMap(), np = /auto|scroll/, Lv = /^tb|vertical/, Dv = /msie|trident/i.test(cs.navigator && cs.navigator.userAgent), Vr = function(e) {
  return parseFloat(e || "0");
}, Xo = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new Fm((n ? t : e) || 0, (n ? e : t) || 0);
}, rp = Fi({
  devicePixelContentBoxSize: Xo(),
  borderBoxSize: Xo(),
  contentBoxSize: Xo(),
  contentRect: new $m(0, 0, 0, 0)
}), Bm = function(e, t) {
  if (t === void 0 && (t = !1), ku.has(e) && !t)
    return ku.get(e);
  if (zm(e))
    return ku.set(e, rp), rp;
  var n = getComputedStyle(e), r = Uf(e) && e.ownerSVGElement && e.getBBox(), a = !Dv && n.boxSizing === "border-box", o = Lv.test(n.writingMode || ""), f = !r && np.test(n.overflowY || ""), s = !r && np.test(n.overflowX || ""), c = r ? 0 : Vr(n.paddingTop), d = r ? 0 : Vr(n.paddingRight), g = r ? 0 : Vr(n.paddingBottom), y = r ? 0 : Vr(n.paddingLeft), v = r ? 0 : Vr(n.borderTopWidth), E = r ? 0 : Vr(n.borderRightWidth), k = r ? 0 : Vr(n.borderBottomWidth), M = r ? 0 : Vr(n.borderLeftWidth), T = y + d, m = c + g, D = M + E, L = v + k, _ = s ? e.offsetHeight - L - e.clientHeight : 0, N = f ? e.offsetWidth - D - e.clientWidth : 0, R = a ? T + D : 0, j = a ? m + L : 0, H = r ? r.width : Vr(n.width) - R - N, Y = r ? r.height : Vr(n.height) - j - _, Q = H + T + N + D, re = Y + m + _ + L, K = Fi({
    devicePixelContentBoxSize: Xo(Math.round(H * devicePixelRatio), Math.round(Y * devicePixelRatio), o),
    borderBoxSize: Xo(Q, re, o),
    contentBoxSize: Xo(H, Y, o),
    contentRect: new $m(y, c, H, Y)
  });
  return ku.set(e, K), K;
}, Im = function(e, t, n) {
  var r = Bm(e, n), a = r.borderBoxSize, o = r.contentBoxSize, f = r.devicePixelContentBoxSize;
  switch (t) {
    case Ss.DEVICE_PIXEL_CONTENT_BOX:
      return f;
    case Ss.BORDER_BOX:
      return a;
    default:
      return o;
  }
}, Hm = function() {
  function e(t) {
    var n = Bm(t);
    this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = Fi([n.borderBoxSize]), this.contentBoxSize = Fi([n.contentBoxSize]), this.devicePixelContentBoxSize = Fi([n.devicePixelContentBoxSize]);
  }
  return e;
}(), Wm = function(e) {
  if (zm(e))
    return 1 / 0;
  for (var t = 0, n = e.parentNode; n; )
    t += 1, n = n.parentNode;
  return t;
}, Ov = function() {
  var e = 1 / 0, t = [];
  Ni.forEach(function(f) {
    if (f.activeTargets.length !== 0) {
      var s = [];
      f.activeTargets.forEach(function(d) {
        var g = new Hm(d.target), y = Wm(d.target);
        s.push(g), d.lastReportedSize = Im(d.target, d.observedBox), y < e && (e = y);
      }), t.push(function() {
        f.callback.call(f.observer, s, f.observer);
      }), f.activeTargets.splice(0, f.activeTargets.length);
    }
  });
  for (var n = 0, r = t; n < r.length; n++) {
    var a = r[n];
    a();
  }
  return e;
}, ap = function(e) {
  Ni.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(a) {
      a.isActive() && (Wm(a.target) > e ? n.activeTargets.push(a) : n.skippedTargets.push(a));
    });
  });
}, Mv = function() {
  var e = 0;
  for (ap(e); Cv(); )
    e = Ov(), ap(e);
  return Av() && Pv(), e > 0;
}, Ld, Vm = [], _v = function() {
  return Vm.splice(0).forEach(function(e) {
    return e();
  });
}, Nv = function(e) {
  if (!Ld) {
    var t = 0, n = document.createTextNode(""), r = { characterData: !0 };
    new MutationObserver(function() {
      return _v();
    }).observe(n, r), Ld = function() {
      n.textContent = "".concat(t ? t-- : t++);
    };
  }
  Vm.push(e), Ld();
}, Fv = function(e) {
  Nv(function() {
    requestAnimationFrame(e);
  });
}, zu = 0, $v = function() {
  return !!zu;
}, zv = 250, Bv = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, ip = [
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
}, Dd = !1, Iv = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var n = this;
    if (t === void 0 && (t = zv), !Dd) {
      Dd = !0;
      var r = op(t);
      Fv(function() {
        var a = !1;
        try {
          a = Mv();
        } finally {
          if (Dd = !1, t = r - op(), !$v())
            return;
          a ? n.run(1e3) : t > 0 ? n.run(t) : n.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, n = function() {
      return t.observer && t.observer.observe(document.body, Bv);
    };
    document.body ? n() : cs.addEventListener("DOMContentLoaded", n);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), ip.forEach(function(n) {
      return cs.addEventListener(n, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), ip.forEach(function(n) {
      return cs.removeEventListener(n, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), ef = new Iv(), lp = function(e) {
  !zu && e > 0 && ef.start(), zu += e, !zu && ef.stop();
}, Hv = function(e) {
  return !Uf(e) && !Rv(e) && getComputedStyle(e).display === "inline";
}, Wv = function() {
  function e(t, n) {
    this.target = t, this.observedBox = n || Ss.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = Im(this.target, this.observedBox, !0);
    return Hv(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), Vv = function() {
  function e(t, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = n;
  }
  return e;
}(), wu = /* @__PURE__ */ new WeakMap(), sp = function(e, t) {
  for (var n = 0; n < e.length; n += 1)
    if (e[n].target === t)
      return n;
  return -1;
}, Tu = function() {
  function e() {
  }
  return e.connect = function(t, n) {
    var r = new Vv(t, n);
    wu.set(t, r);
  }, e.observe = function(t, n, r) {
    var a = wu.get(t), o = a.observationTargets.length === 0;
    sp(a.observationTargets, n) < 0 && (o && Ni.push(a), a.observationTargets.push(new Wv(n, r && r.box)), lp(1), ef.schedule());
  }, e.unobserve = function(t, n) {
    var r = wu.get(t), a = sp(r.observationTargets, n), o = r.observationTargets.length === 1;
    a >= 0 && (o && Ni.splice(Ni.indexOf(r), 1), r.observationTargets.splice(a, 1), lp(-1));
  }, e.disconnect = function(t) {
    var n = this, r = wu.get(t);
    r.observationTargets.slice().forEach(function(a) {
      return n.unobserve(t, a.target);
    }), r.activeTargets.splice(0, r.activeTargets.length);
  }, e;
}(), jv = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Tu.connect(this, t);
  }
  return e.prototype.observe = function(t, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!tp(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Tu.observe(this, t, n);
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
const Uv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ResizeObserver: jv,
  ResizeObserverEntry: Hm,
  ResizeObserverSize: Fm
}, Symbol.toStringTag, { value: "Module" })), Kv = /* @__PURE__ */ Wf(Uv);
var up = Km, Ma = Um(ym), Yv = Um(Ey), Ho = Gv(ue), Xv = Kv, qv = ["className", "children", "debounceTime", "ignoreDimensions", "parentSizeStyles", "enableDebounceLeadingCall"];
function jm(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (jm = function(a) {
    return a ? n : t;
  })(e);
}
function Gv(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var n = jm(t);
  if (n && n.has(e))
    return n.get(e);
  var r = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var f = a ? Object.getOwnPropertyDescriptor(e, o) : null;
      f && (f.get || f.set) ? Object.defineProperty(r, o, f) : r[o] = e[o];
    }
  return r.default = e, n && n.set(e, r), r;
}
function Um(e) {
  return e && e.__esModule ? e : { default: e };
}
function Xu() {
  return Xu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Xu.apply(this, arguments);
}
function Zv(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var Qv = [];
function Km(e) {
  var t = e.className, n = e.children, r = e.debounceTime, a = r === void 0 ? 300 : r, o = e.ignoreDimensions, f = o === void 0 ? Qv : o, s = e.parentSizeStyles, c = s === void 0 ? {
    width: "100%",
    height: "100%"
  } : s, d = e.enableDebounceLeadingCall, g = d === void 0 ? !0 : d, y = Zv(e, qv), v = (0, Ho.useRef)(null), E = (0, Ho.useRef)(0), k = (0, Ho.useState)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), M = k[0], T = k[1], m = (0, Ho.useMemo)(function() {
    var D = Array.isArray(f) ? f : [f];
    return (0, Yv.default)(function(L) {
      T(function(_) {
        var N = Object.keys(_), R = N.filter(function(H) {
          return _[H] !== L[H];
        }), j = R.every(function(H) {
          return D.includes(H);
        });
        return j ? _ : L;
      });
    }, a, {
      leading: g
    });
  }, [a, g, f]);
  return (0, Ho.useEffect)(function() {
    var D = new Xv.ResizeObserver(function(L) {
      L === void 0 && (L = []), L.forEach(function(_) {
        var N = _.contentRect, R = N.left, j = N.top, H = N.width, Y = N.height;
        E.current = window.requestAnimationFrame(function() {
          m({
            width: H,
            height: Y,
            top: j,
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
  }, y), n(Xu({}, M, {
    ref: v.current,
    resize: m
  })));
}
Km.propTypes = {
  className: Ma.default.string,
  debounceTime: Ma.default.number,
  enableDebounceLeadingCall: Ma.default.bool,
  ignoreDimensions: Ma.default.oneOfType([Ma.default.any, Ma.default.arrayOf(Ma.default.any)]),
  children: Ma.default.func.isRequired
};
var Od = /* @__PURE__ */ new Date(), Md = /* @__PURE__ */ new Date();
function fa(e, t, n, r) {
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
  }, n && (a.count = function(o, f) {
    return Od.setTime(+o), Md.setTime(+f), e(Od), e(Md), Math.floor(n(Od, Md));
  }, a.every = function(o) {
    return o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? a.filter(r ? function(f) {
      return r(f) % o === 0;
    } : function(f) {
      return a.count(0, f) % o === 0;
    }) : a;
  }), a;
}
const Jv = 1e3, Kf = Jv * 60, ex = Kf * 60, Yf = ex * 24, Ym = Yf * 7;
var Xm = fa(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Kf) / Yf,
  (e) => e.getDate() - 1
);
const qm = Xm;
Xm.range;
function Hi(e) {
  return fa(function(t) {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setDate(t.getDate() + n * 7);
  }, function(t, n) {
    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Kf) / Ym;
  });
}
var Gm = Hi(0), qu = Hi(1), tx = Hi(2), nx = Hi(3), Zo = Hi(4), rx = Hi(5), ax = Hi(6);
Gm.range;
qu.range;
tx.range;
nx.range;
Zo.range;
rx.range;
ax.range;
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
  }, function(t, n) {
    t.setFullYear(t.getFullYear() + n * e);
  });
};
const Es = Xf;
Xf.range;
var Zm = fa(function(e) {
  e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCDate(e.getUTCDate() + t);
}, function(e, t) {
  return (t - e) / Yf;
}, function(e) {
  return e.getUTCDate() - 1;
});
const Qm = Zm;
Zm.range;
function Wi(e) {
  return fa(function(t) {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, function(t, n) {
    return (n - t) / Ym;
  });
}
var Jm = Wi(0), Gu = Wi(1), ix = Wi(2), ox = Wi(3), Qo = Wi(4), lx = Wi(5), sx = Wi(6);
Jm.range;
Gu.range;
ix.range;
ox.range;
Qo.range;
lx.range;
sx.range;
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
  }, function(t, n) {
    t.setUTCFullYear(t.getUTCFullYear() + n * e);
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
function rs(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function ux(e) {
  var t = e.dateTime, n = e.date, r = e.time, a = e.periods, o = e.days, f = e.shortDays, s = e.months, c = e.shortMonths, d = as(a), g = is(a), y = as(o), v = is(o), E = as(f), k = is(f), M = as(s), T = is(s), m = as(c), D = is(c), L = {
    a: ce,
    A: he,
    b: ie,
    B: V,
    c: null,
    d: mp,
    e: mp,
    f: Ox,
    g: Wx,
    G: jx,
    H: Rx,
    I: Lx,
    j: Dx,
    L: eg,
    m: Mx,
    M: _x,
    p: Z,
    q: ne,
    Q: vp,
    s: xp,
    S: Nx,
    u: Fx,
    U: $x,
    V: zx,
    w: Bx,
    W: Ix,
    x: null,
    X: null,
    y: Hx,
    Y: Vx,
    Z: Ux,
    "%": yp
  }, _ = {
    a: Ae,
    A: ve,
    b: Re,
    B: le,
    c: null,
    d: gp,
    e: gp,
    f: qx,
    g: ib,
    G: lb,
    H: Kx,
    I: Yx,
    j: Xx,
    L: ng,
    m: Gx,
    M: Zx,
    p: _e,
    q: Be,
    Q: vp,
    s: xp,
    S: Qx,
    u: Jx,
    U: eb,
    V: tb,
    w: nb,
    W: rb,
    x: null,
    X: null,
    y: ab,
    Y: ob,
    Z: sb,
    "%": yp
  }, N = {
    a: Q,
    A: re,
    b: K,
    B: q,
    c: me,
    d: hp,
    e: hp,
    f: Tx,
    g: fp,
    G: dp,
    H: pp,
    I: pp,
    j: Sx,
    L: wx,
    m: bx,
    M: Ex,
    p: Y,
    q: xx,
    Q: Ax,
    s: Px,
    S: kx,
    u: px,
    U: mx,
    V: gx,
    w: hx,
    W: yx,
    x: W,
    X: se,
    y: fp,
    Y: dp,
    Z: vx,
    "%": Cx
  };
  L.x = R(n, L), L.X = R(r, L), L.c = R(t, L), _.x = R(n, _), _.X = R(r, _), _.c = R(t, _);
  function R(Te, ge) {
    return function(Le) {
      var oe = [], we = -1, Ce = 0, Ie = Te.length, Ue, qe, at;
      for (Le instanceof Date || (Le = /* @__PURE__ */ new Date(+Le)); ++we < Ie; )
        Te.charCodeAt(we) === 37 && (oe.push(Te.slice(Ce, we)), (qe = cp[Ue = Te.charAt(++we)]) != null ? Ue = Te.charAt(++we) : qe = Ue === "e" ? " " : "0", (at = ge[Ue]) && (Ue = at(Le, qe)), oe.push(Ue), Ce = we + 1);
      return oe.push(Te.slice(Ce, we)), oe.join("");
    };
  }
  function j(Te, ge) {
    return function(Le) {
      var oe = rs(1900, void 0, 1), we = H(oe, Te, Le += "", 0), Ce, Ie;
      if (we != Le.length)
        return null;
      if ("Q" in oe)
        return new Date(oe.Q);
      if ("s" in oe)
        return new Date(oe.s * 1e3 + ("L" in oe ? oe.L : 0));
      if (ge && !("Z" in oe) && (oe.Z = 0), "p" in oe && (oe.H = oe.H % 12 + oe.p * 12), oe.m === void 0 && (oe.m = "q" in oe ? oe.q : 0), "V" in oe) {
        if (oe.V < 1 || oe.V > 53)
          return null;
        "w" in oe || (oe.w = 1), "Z" in oe ? (Ce = Nd(rs(oe.y, 0, 1)), Ie = Ce.getUTCDay(), Ce = Ie > 4 || Ie === 0 ? Gu.ceil(Ce) : Gu(Ce), Ce = Qm.offset(Ce, (oe.V - 1) * 7), oe.y = Ce.getUTCFullYear(), oe.m = Ce.getUTCMonth(), oe.d = Ce.getUTCDate() + (oe.w + 6) % 7) : (Ce = _d(rs(oe.y, 0, 1)), Ie = Ce.getDay(), Ce = Ie > 4 || Ie === 0 ? qu.ceil(Ce) : qu(Ce), Ce = qm.offset(Ce, (oe.V - 1) * 7), oe.y = Ce.getFullYear(), oe.m = Ce.getMonth(), oe.d = Ce.getDate() + (oe.w + 6) % 7);
      } else
        ("W" in oe || "U" in oe) && ("w" in oe || (oe.w = "u" in oe ? oe.u % 7 : "W" in oe ? 1 : 0), Ie = "Z" in oe ? Nd(rs(oe.y, 0, 1)).getUTCDay() : _d(rs(oe.y, 0, 1)).getDay(), oe.m = 0, oe.d = "W" in oe ? (oe.w + 6) % 7 + oe.W * 7 - (Ie + 5) % 7 : oe.w + oe.U * 7 - (Ie + 6) % 7);
      return "Z" in oe ? (oe.H += oe.Z / 100 | 0, oe.M += oe.Z % 100, Nd(oe)) : _d(oe);
    };
  }
  function H(Te, ge, Le, oe) {
    for (var we = 0, Ce = ge.length, Ie = Le.length, Ue, qe; we < Ce; ) {
      if (oe >= Ie)
        return -1;
      if (Ue = ge.charCodeAt(we++), Ue === 37) {
        if (Ue = ge.charAt(we++), qe = N[Ue in cp ? ge.charAt(we++) : Ue], !qe || (oe = qe(Te, Le, oe)) < 0)
          return -1;
      } else if (Ue != Le.charCodeAt(oe++))
        return -1;
    }
    return oe;
  }
  function Y(Te, ge, Le) {
    var oe = d.exec(ge.slice(Le));
    return oe ? (Te.p = g.get(oe[0].toLowerCase()), Le + oe[0].length) : -1;
  }
  function Q(Te, ge, Le) {
    var oe = E.exec(ge.slice(Le));
    return oe ? (Te.w = k.get(oe[0].toLowerCase()), Le + oe[0].length) : -1;
  }
  function re(Te, ge, Le) {
    var oe = y.exec(ge.slice(Le));
    return oe ? (Te.w = v.get(oe[0].toLowerCase()), Le + oe[0].length) : -1;
  }
  function K(Te, ge, Le) {
    var oe = m.exec(ge.slice(Le));
    return oe ? (Te.m = D.get(oe[0].toLowerCase()), Le + oe[0].length) : -1;
  }
  function q(Te, ge, Le) {
    var oe = M.exec(ge.slice(Le));
    return oe ? (Te.m = T.get(oe[0].toLowerCase()), Le + oe[0].length) : -1;
  }
  function me(Te, ge, Le) {
    return H(Te, t, ge, Le);
  }
  function W(Te, ge, Le) {
    return H(Te, n, ge, Le);
  }
  function se(Te, ge, Le) {
    return H(Te, r, ge, Le);
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
  function Z(Te) {
    return a[+(Te.getHours() >= 12)];
  }
  function ne(Te) {
    return 1 + ~~(Te.getMonth() / 3);
  }
  function Ae(Te) {
    return f[Te.getUTCDay()];
  }
  function ve(Te) {
    return o[Te.getUTCDay()];
  }
  function Re(Te) {
    return c[Te.getUTCMonth()];
  }
  function le(Te) {
    return s[Te.getUTCMonth()];
  }
  function _e(Te) {
    return a[+(Te.getUTCHours() >= 12)];
  }
  function Be(Te) {
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
      var ge = j(Te += "", !1);
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
      var ge = j(Te += "", !0);
      return ge.toString = function() {
        return Te;
      }, ge;
    }
  };
}
var cp = { "-": "", _: " ", 0: "0" }, $n = /^\s*\d+/, cx = /^%/, dx = /[\\^$*+?|[\]().{}]/g;
function jt(e, t, n) {
  var r = e < 0 ? "-" : "", a = (r ? -e : e) + "", o = a.length;
  return r + (o < n ? new Array(n - o + 1).join(t) + a : a);
}
function fx(e) {
  return e.replace(dx, "\\$&");
}
function as(e) {
  return new RegExp("^(?:" + e.map(fx).join("|") + ")", "i");
}
function is(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function hx(e, t, n) {
  var r = $n.exec(t.slice(n, n + 1));
  return r ? (e.w = +r[0], n + r[0].length) : -1;
}
function px(e, t, n) {
  var r = $n.exec(t.slice(n, n + 1));
  return r ? (e.u = +r[0], n + r[0].length) : -1;
}
function mx(e, t, n) {
  var r = $n.exec(t.slice(n, n + 2));
  return r ? (e.U = +r[0], n + r[0].length) : -1;
}
function gx(e, t, n) {
  var r = $n.exec(t.slice(n, n + 2));
  return r ? (e.V = +r[0], n + r[0].length) : -1;
}
function yx(e, t, n) {
  var r = $n.exec(t.slice(n, n + 2));
  return r ? (e.W = +r[0], n + r[0].length) : -1;
}
function dp(e, t, n) {
  var r = $n.exec(t.slice(n, n + 4));
  return r ? (e.y = +r[0], n + r[0].length) : -1;
}
function fp(e, t, n) {
  var r = $n.exec(t.slice(n, n + 2));
  return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function vx(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function xx(e, t, n) {
  var r = $n.exec(t.slice(n, n + 1));
  return r ? (e.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function bx(e, t, n) {
  var r = $n.exec(t.slice(n, n + 2));
  return r ? (e.m = r[0] - 1, n + r[0].length) : -1;
}
function hp(e, t, n) {
  var r = $n.exec(t.slice(n, n + 2));
  return r ? (e.d = +r[0], n + r[0].length) : -1;
}
function Sx(e, t, n) {
  var r = $n.exec(t.slice(n, n + 3));
  return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1;
}
function pp(e, t, n) {
  var r = $n.exec(t.slice(n, n + 2));
  return r ? (e.H = +r[0], n + r[0].length) : -1;
}
function Ex(e, t, n) {
  var r = $n.exec(t.slice(n, n + 2));
  return r ? (e.M = +r[0], n + r[0].length) : -1;
}
function kx(e, t, n) {
  var r = $n.exec(t.slice(n, n + 2));
  return r ? (e.S = +r[0], n + r[0].length) : -1;
}
function wx(e, t, n) {
  var r = $n.exec(t.slice(n, n + 3));
  return r ? (e.L = +r[0], n + r[0].length) : -1;
}
function Tx(e, t, n) {
  var r = $n.exec(t.slice(n, n + 6));
  return r ? (e.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function Cx(e, t, n) {
  var r = cx.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function Ax(e, t, n) {
  var r = $n.exec(t.slice(n));
  return r ? (e.Q = +r[0], n + r[0].length) : -1;
}
function Px(e, t, n) {
  var r = $n.exec(t.slice(n));
  return r ? (e.s = +r[0], n + r[0].length) : -1;
}
function mp(e, t) {
  return jt(e.getDate(), t, 2);
}
function Rx(e, t) {
  return jt(e.getHours(), t, 2);
}
function Lx(e, t) {
  return jt(e.getHours() % 12 || 12, t, 2);
}
function Dx(e, t) {
  return jt(1 + qm.count(Es(e), e), t, 3);
}
function eg(e, t) {
  return jt(e.getMilliseconds(), t, 3);
}
function Ox(e, t) {
  return eg(e, t) + "000";
}
function Mx(e, t) {
  return jt(e.getMonth() + 1, t, 2);
}
function _x(e, t) {
  return jt(e.getMinutes(), t, 2);
}
function Nx(e, t) {
  return jt(e.getSeconds(), t, 2);
}
function Fx(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function $x(e, t) {
  return jt(Gm.count(Es(e) - 1, e), t, 2);
}
function tg(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Zo(e) : Zo.ceil(e);
}
function zx(e, t) {
  return e = tg(e), jt(Zo.count(Es(e), e) + (Es(e).getDay() === 4), t, 2);
}
function Bx(e) {
  return e.getDay();
}
function Ix(e, t) {
  return jt(qu.count(Es(e) - 1, e), t, 2);
}
function Hx(e, t) {
  return jt(e.getFullYear() % 100, t, 2);
}
function Wx(e, t) {
  return e = tg(e), jt(e.getFullYear() % 100, t, 2);
}
function Vx(e, t) {
  return jt(e.getFullYear() % 1e4, t, 4);
}
function jx(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? Zo(e) : Zo.ceil(e), jt(e.getFullYear() % 1e4, t, 4);
}
function Ux(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + jt(t / 60 | 0, "0", 2) + jt(t % 60, "0", 2);
}
function gp(e, t) {
  return jt(e.getUTCDate(), t, 2);
}
function Kx(e, t) {
  return jt(e.getUTCHours(), t, 2);
}
function Yx(e, t) {
  return jt(e.getUTCHours() % 12 || 12, t, 2);
}
function Xx(e, t) {
  return jt(1 + Qm.count(ks(e), e), t, 3);
}
function ng(e, t) {
  return jt(e.getUTCMilliseconds(), t, 3);
}
function qx(e, t) {
  return ng(e, t) + "000";
}
function Gx(e, t) {
  return jt(e.getUTCMonth() + 1, t, 2);
}
function Zx(e, t) {
  return jt(e.getUTCMinutes(), t, 2);
}
function Qx(e, t) {
  return jt(e.getUTCSeconds(), t, 2);
}
function Jx(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function eb(e, t) {
  return jt(Jm.count(ks(e) - 1, e), t, 2);
}
function rg(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Qo(e) : Qo.ceil(e);
}
function tb(e, t) {
  return e = rg(e), jt(Qo.count(ks(e), e) + (ks(e).getUTCDay() === 4), t, 2);
}
function nb(e) {
  return e.getUTCDay();
}
function rb(e, t) {
  return jt(Gu.count(ks(e) - 1, e), t, 2);
}
function ab(e, t) {
  return jt(e.getUTCFullYear() % 100, t, 2);
}
function ib(e, t) {
  return e = rg(e), jt(e.getUTCFullYear() % 100, t, 2);
}
function ob(e, t) {
  return jt(e.getUTCFullYear() % 1e4, t, 4);
}
function lb(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Qo(e) : Qo.ceil(e), jt(e.getUTCFullYear() % 1e4, t, 4);
}
function sb() {
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
var Wo, tf, ag;
ub({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function ub(e) {
  return Wo = ux(e), tf = Wo.format, ag = Wo.parse, Wo.utcFormat, Wo.utcParse, Wo;
}
const bt = ue.createContext({}), Ft = {
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
    let n;
    for (n in e)
      if (!(n in t))
        return !1;
    for (n in t)
      if (e[n] !== t[n])
        return !1;
    return Ft.und(n) ? e === t : !0;
  }
};
function cb(e, t) {
  return t === void 0 && (t = !0), (n) => (Ft.arr(n) ? n : Object.keys(n)).reduce((r, a) => {
    const o = t ? a[0].toLowerCase() + a.substring(1) : a;
    return r[o] = e(o), r;
  }, e);
}
function ig() {
  const e = ue.useState(!1), t = e[1];
  return ue.useCallback(() => t((r) => !r), []);
}
function Ai(e, t) {
  return Ft.und(e) || Ft.nul(e) ? t : e;
}
function Yo(e) {
  return Ft.und(e) ? [] : Ft.arr(e) ? e : [e];
}
function Dr(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return Ft.fun(e) ? e(...n) : e;
}
function db(e) {
  return e.to, e.from, e.config, e.onStart, e.onRest, e.onFrame, e.children, e.reset, e.reverse, e.force, e.immediate, e.delay, e.attach, e.destroyed, e.interpolateTo, e.ref, e.lazy, Xr(e, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);
}
function Fd(e) {
  const t = db(e);
  if (Ft.und(t))
    return un({
      to: t
    }, e);
  const n = Object.keys(e).reduce((r, a) => Ft.und(t[a]) ? un({}, r, {
    [a]: e[a]
  }) : r, {});
  return un({
    to: t
  }, n);
}
function fb(e, t) {
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
    const n = this.children.indexOf(t);
    this.children.splice(n, 1), this.children.length === 0 && this.detach();
  }
}
class nf extends Or {
  constructor() {
    super(...arguments), this.payload = [], this.attach = () => this.payload.forEach((t) => t instanceof Or && t.addChild(this)), this.detach = () => this.payload.forEach((t) => t instanceof Or && t.removeChild(this));
  }
}
class og extends Or {
  constructor() {
    super(...arguments), this.payload = {}, this.attach = () => Object.values(this.payload).forEach((t) => t instanceof Or && t.addChild(this)), this.detach = () => Object.values(this.payload).forEach((t) => t instanceof Or && t.removeChild(this));
  }
  getValue(t) {
    t === void 0 && (t = !1);
    const n = {};
    for (const r in this.payload) {
      const a = this.payload[r];
      t && !(a instanceof Or) || (n[r] = a instanceof Or ? a[t ? "getAnimatedValue" : "getValue"]() : a);
    }
    return n;
  }
  getAnimatedValue() {
    return this.getValue(!0);
  }
}
let Gf;
function hb(e, t) {
  Gf = {
    fn: e,
    transform: t
  };
}
let lg;
function pb(e) {
  lg = e;
}
let sg = (e) => typeof window < "u" ? window.requestAnimationFrame(e) : -1, Zu;
function mb(e) {
  Zu = e;
}
let ug = () => Date.now(), gb = (e) => e.current, cg;
function yb(e) {
  cg = e;
}
class vb extends og {
  constructor(t, n) {
    super(), this.update = void 0, this.payload = t.style ? un({}, t, {
      style: cg(t.style)
    }) : t, this.update = n, this.attach();
  }
}
const xb = (e) => Ft.fun(e) && !(e.prototype instanceof i.Component), bb = (e) => ue.forwardRef((n, r) => {
  const a = ig(), o = ue.useRef(!0), f = ue.useRef(null), s = ue.useRef(null), c = ue.useCallback((v) => {
    const E = f.current, k = () => {
      let M = !1;
      s.current && (M = Gf.fn(s.current, f.current.getAnimatedValue())), (!s.current || M === !1) && a();
    };
    f.current = new vb(v, k), E && E.detach();
  }, []);
  ue.useEffect(() => () => {
    o.current = !1, f.current && f.current.detach();
  }, []), ue.useImperativeHandle(r, () => gb(s)), c(n);
  const d = f.current.getValue();
  d.scrollTop, d.scrollLeft;
  const g = Xr(d, ["scrollTop", "scrollLeft"]), y = xb(e) ? void 0 : (v) => s.current = fb(v, r);
  return i.createElement(e, un({}, g, {
    ref: y
  }));
});
let ds = !1;
const $i = /* @__PURE__ */ new Set(), dg = () => {
  if (!ds)
    return !1;
  let e = ug();
  for (let t of $i) {
    let n = !1;
    for (let r = 0; r < t.configs.length; r++) {
      let a = t.configs[r], o, f;
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
        v && !a.toValues[s].done && (o = !1), o ? (c.value !== g && (y = g), c.done = !0) : n = !0, c.setValue(y), c.lastPosition = y;
      }
      t.props.onFrame && (t.values[a.name] = a.interpolation.getValue());
    }
    t.props.onFrame && t.props.onFrame(t.values), n || ($i.delete(t), t.stop(!0));
  }
  return $i.size ? sg(dg) : ds = !1, ds;
}, Sb = (e) => {
  $i.has(e) || $i.add(e), ds || (ds = !0, sg(dg));
}, Eb = (e) => {
  $i.has(e) && $i.delete(e);
};
function Qu(e, t, n) {
  if (typeof e == "function")
    return e;
  if (Array.isArray(e))
    return Qu({
      range: e,
      output: t,
      extrapolate: n
    });
  if (Zu && typeof e.output[0] == "string")
    return Zu(e);
  const r = e, a = r.output, o = r.range || [0, 1], f = r.extrapolateLeft || r.extrapolate || "extend", s = r.extrapolateRight || r.extrapolate || "extend", c = r.easing || ((d) => d);
  return (d) => {
    const g = wb(d, o);
    return kb(d, o[g], o[g + 1], a[g], a[g + 1], c, f, s, r.map);
  };
}
function kb(e, t, n, r, a, o, f, s, c) {
  let d = c ? c(e) : e;
  if (d < t) {
    if (f === "identity")
      return d;
    f === "clamp" && (d = t);
  }
  if (d > n) {
    if (s === "identity")
      return d;
    s === "clamp" && (d = n);
  }
  return r === a ? r : t === n ? e <= t ? r : a : (t === -1 / 0 ? d = -d : n === 1 / 0 ? d = d - t : d = (d - t) / (n - t), d = o(d), r === -1 / 0 ? d = -d : a === 1 / 0 ? d = d + r : d = d * (a - r) + r, d);
}
function wb(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
class Jo extends nf {
  constructor(t, n, r, a) {
    super(), this.calc = void 0, this.payload = t instanceof nf && !(t instanceof Jo) ? t.getPayload() : Array.isArray(t) ? t : [t], this.calc = Qu(n, r, a);
  }
  getValue() {
    return this.calc(...this.payload.map((t) => t.getValue()));
  }
  updateConfig(t, n, r) {
    this.calc = Qu(t, n, r);
  }
  interpolate(t, n, r) {
    return new Jo(this, t, n, r);
  }
}
const Tb = (e, t, n) => e && new Jo(e, t, n);
function fg(e, t) {
  "update" in e ? t.add(e) : e.getChildren().forEach((n) => fg(n, t));
}
class rf extends Or {
  constructor(t) {
    var n;
    super(), n = this, this.animatedStyles = /* @__PURE__ */ new Set(), this.value = void 0, this.startPosition = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.startTime = void 0, this.lastTime = void 0, this.done = !1, this.setValue = function(r, a) {
      a === void 0 && (a = !0), n.value = r, a && n.flush();
    }, this.value = t, this.startPosition = t, this.lastPosition = t;
  }
  flush() {
    this.animatedStyles.size === 0 && fg(this, this.animatedStyles), this.animatedStyles.forEach((t) => t.update());
  }
  clearStyles() {
    this.animatedStyles.clear();
  }
  getValue() {
    return this.value;
  }
  interpolate(t, n, r) {
    return new Jo(this, t, n, r);
  }
}
class Cb extends nf {
  constructor(t) {
    super(), this.payload = t.map((n) => new rf(n));
  }
  setValue(t, n) {
    n === void 0 && (n = !0), Array.isArray(t) ? t.length === this.payload.length && t.forEach((r, a) => this.payload[a].setValue(r, n)) : this.payload.forEach((r) => r.setValue(t, n));
  }
  getValue() {
    return this.payload.map((t) => t.getValue());
  }
  interpolate(t, n) {
    return new Jo(this, t, n);
  }
}
let Ab = 0;
class Pb {
  constructor() {
    this.id = void 0, this.idle = !0, this.hasChanged = !1, this.guid = 0, this.local = 0, this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.values = {}, this.configs = [], this.listeners = [], this.queue = [], this.localQueue = void 0, this.getValues = () => this.interpolations, this.id = Ab++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */
  update(t) {
    if (!t)
      return this;
    const n = Fd(t), r = n.delay, a = r === void 0 ? 0 : r, o = n.to, f = Xr(n, ["delay", "to"]);
    if (Ft.arr(o) || Ft.fun(o))
      this.queue.push(un({}, f, {
        delay: a,
        to: o
      }));
    else if (o) {
      let s = {};
      Object.entries(o).forEach((c) => {
        let d = c[0], g = c[1];
        const y = un({
          to: {
            [d]: g
          },
          delay: Dr(a, d)
        }, f), v = s[y.delay] && s[y.delay].to;
        s[y.delay] = un({}, s[y.delay], y, {
          to: un({}, v, y.to)
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
        Ft.obj(f) && (this.merged = un({}, f, this.merged)), Ft.obj(c) && (this.merged = un({}, this.merged, c));
      });
      const n = this.local = ++this.guid, r = this.localQueue = this.queue;
      this.queue = [], r.forEach((a, o) => {
        let f = a.delay, s = Xr(a, ["delay"]);
        const c = (g) => {
          o === r.length - 1 && n === this.guid && g && (this.idle = !0, this.props.onRest && this.props.onRest(this.merged)), t && t();
        };
        let d = Ft.arr(s.to) || Ft.fun(s.to);
        f ? setTimeout(() => {
          n === this.guid && (d ? this.runAsync(s, c) : this.diff(s).start(c));
        }, f) : d ? this.runAsync(s, c) : this.diff(s).start(c);
      });
    } else
      Ft.fun(t) && this.listeners.push(t), this.props.onStart && this.props.onStart(), Sb(this);
    return this;
  }
  stop(t) {
    return this.listeners.forEach((n) => n(t)), this.listeners = [], this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */
  pause(t) {
    return this.stop(!0), t && Eb(this), this;
  }
  runAsync(t, n) {
    var r = this;
    t.delay;
    let a = Xr(t, ["delay"]);
    const o = this.local;
    let f = Promise.resolve(void 0);
    if (Ft.arr(a.to))
      for (let s = 0; s < a.to.length; s++) {
        const c = s, d = un({}, a, Fd(a.to[c]));
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
          const g = un({}, a, Fd(d));
          if (Ft.arr(g.config) && (g.config = g.config[s]), s++, o === this.guid)
            return c = new Promise((y) => this.diff(g).start(y));
        },
        // cancel()
        function(d) {
          return d === void 0 && (d = !0), r.stop(d);
        }
      ).then(() => c));
    }
    f.then(n);
  }
  diff(t) {
    this.props = un({}, this.props, t);
    let n = this.props, r = n.from, a = r === void 0 ? {} : r, o = n.to, f = o === void 0 ? {} : o, s = n.config, c = s === void 0 ? {} : s, d = n.reverse, g = n.attach, y = n.reset, v = n.immediate;
    if (d) {
      var E = [f, a];
      a = E[0], f = E[1];
    }
    this.merged = un({}, a, this.merged, f), this.hasChanged = !1;
    let k = g && g(this);
    if (this.animations = Object.entries(this.merged).reduce((M, T) => {
      let m = T[0], D = T[1], L = M[m] || {};
      const _ = Ft.num(D), N = Ft.str(D) && !D.startsWith("#") && !/\d/.test(D) && !lg[D], R = Ft.arr(D), j = !_ && !R && !N;
      let H = Ft.und(a[m]) ? D : a[m], Y = _ || R || N ? D : 1, Q = Dr(c, m);
      k && (Y = k.animations[m].parent);
      let re = L.parent, K = L.interpolation, q = Yo(k ? Y.getPayload() : Y), me, W = D;
      j && (W = Zu({
        range: [0, 1],
        output: [D, D]
      })(1));
      let se = K && K.getValue();
      const he = !Ft.und(re) && L.animatedValues.some((ne) => !ne.done), ie = !Ft.equ(W, se), V = !Ft.equ(W, L.previous), Z = !Ft.equ(Q, L.config);
      if (y || V && ie || Z) {
        if (_ || N)
          re = K = L.parent || new rf(H);
        else if (R)
          re = K = L.parent || new Cb(H);
        else if (j) {
          let ne = L.interpolation && L.interpolation.calc(L.parent.value);
          ne = ne !== void 0 && !y ? ne : H, L.parent ? (re = L.parent, re.setValue(0, !1)) : re = new rf(0);
          const Ae = {
            output: [ne, D]
          };
          L.interpolation ? (K = L.interpolation, L.interpolation.updateConfig(Ae)) : K = re.interpolate(Ae);
        }
        return q = Yo(k ? Y.getPayload() : Y), me = Yo(re.getPayload()), y && !j && re.setValue(H, !1), this.hasChanged = !0, me.forEach((ne) => {
          ne.startPosition = ne.value, ne.lastPosition = ne.value, ne.lastVelocity = he ? ne.lastVelocity : void 0, ne.lastTime = he ? ne.lastTime : void 0, ne.startTime = ug(), ne.done = !1, ne.animatedStyles.clear();
        }), Dr(v, m) && re.setValue(j ? Y : D, !1), un({}, M, {
          [m]: un({}, L, {
            name: m,
            parent: re,
            interpolation: K,
            animatedValues: me,
            toValues: q,
            previous: W,
            config: Q,
            fromValues: Yo(re.getValue()),
            immediate: Dr(v, m),
            initialVelocity: Ai(Q.velocity, 0),
            clamp: Ai(Q.clamp, !1),
            precision: Ai(Q.precision, 0.01),
            tension: Ai(Q.tension, 170),
            friction: Ai(Q.friction, 26),
            mass: Ai(Q.mass, 1),
            duration: Q.duration,
            easing: Ai(Q.easing, (ne) => ne),
            decay: Q.decay
          })
        });
      } else
        return ie ? M : (j && (re.setValue(1, !1), K.updateConfig({
          output: [W, W]
        })), re.done = !0, this.hasChanged = !0, un({}, M, {
          [m]: un({}, M[m], {
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
let Rb = 0;
const Bu = "enter", $d = "leave", zd = "update", Lb = (e, t) => (typeof t == "function" ? e.map(t) : Yo(t)).map(String), af = (e) => {
  let t = e.items, n = e.keys, r = n === void 0 ? (o) => o : n, a = Xr(e, ["items", "keys"]);
  return t = Yo(t !== void 0 ? t : null), un({
    items: t,
    keys: Lb(t, r)
  }, a);
};
function Db(e, t, n) {
  const r = un({
    items: e,
    keys: t || ((D) => D)
  }, n), a = af(r), o = a.lazy, f = o === void 0 ? !1 : o;
  a.unique;
  const s = a.reset, c = s === void 0 ? !1 : s;
  a.enter, a.leave, a.update;
  const d = a.onDestroyed;
  a.keys, a.items;
  const g = a.onFrame, y = a.onRest, v = a.onStart, E = a.ref, k = Xr(a, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]), M = ig(), T = ue.useRef(!1), m = ue.useRef({
    mounted: !1,
    first: !0,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!r.ref,
    instances: !T.current && /* @__PURE__ */ new Map(),
    forceUpdate: M
  });
  return ue.useImperativeHandle(r.ref, () => ({
    start: () => Promise.all(Array.from(m.current.instances).map((D) => {
      let L = D[1];
      return new Promise((_) => L.start(_));
    })),
    stop: (D) => Array.from(m.current.instances).forEach((L) => L[1].stop(D)),
    get controllers() {
      return Array.from(m.current.instances).map((D) => D[1]);
    }
  })), m.current = Ob(m.current, r), m.current.changed && m.current.transitions.forEach((D) => {
    const L = D.slot, _ = D.from, N = D.to, R = D.config, j = D.trail, H = D.key, Y = D.item;
    m.current.instances.has(H) || m.current.instances.set(H, new Pb());
    const Q = m.current.instances.get(H), re = un({}, k, {
      to: N,
      from: _,
      config: R,
      ref: E,
      onRest: (K) => {
        m.current.mounted && (D.destroyed && (!E && !f && bp(m, H), d && d(Y)), !Array.from(m.current.instances).some((W) => !W[1].idle) && (E || f) && m.current.deleted.length > 0 && bp(m), y && y(Y, L, K));
      },
      onStart: v && (() => v(Y, L)),
      onFrame: g && ((K) => g(Y, L, K)),
      delay: j,
      reset: c && L === Bu
      // Update controller
    });
    Q.update(re), m.current.paused || Q.start();
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
  const n = e.current.deleted;
  for (let r of n) {
    let a = r.key;
    const o = (f) => f.key !== a;
    (Ft.und(t) || t === a) && (e.current.instances.delete(a), e.current.transitions = e.current.transitions.filter(o), e.current.deleted = e.current.deleted.filter(o));
  }
  e.current.forceUpdate();
}
function Ob(e, t) {
  let n = e.first, r = e.prevProps, a = Xr(e, ["first", "prevProps"]), o = af(t), f = o.items, s = o.keys, c = o.initial, d = o.from, g = o.enter, y = o.leave, v = o.update, E = o.trail, k = E === void 0 ? 0 : E, M = o.unique, T = o.config, m = o.order, D = m === void 0 ? [Bu, $d, zd] : m, L = af(r), _ = L.keys, N = L.items, R = un({}, a.current), j = [...a.deleted], H = Object.keys(R), Y = new Set(H), Q = new Set(s), re = s.filter((se) => !Y.has(se)), K = a.transitions.filter((se) => !se.destroyed && !Q.has(se.originalKey)).map((se) => se.originalKey), q = s.filter((se) => Y.has(se)), me = -k;
  for (; D.length; )
    switch (D.shift()) {
      case Bu: {
        re.forEach((ce, he) => {
          M && j.find((ne) => ne.originalKey === ce) && (j = j.filter((ne) => ne.originalKey !== ce));
          const ie = s.indexOf(ce), V = f[ie], Z = n && c !== void 0 ? "initial" : Bu;
          R[ce] = {
            slot: Z,
            originalKey: ce,
            key: M ? String(ce) : Rb++,
            item: V,
            trail: me = me + k,
            config: Dr(T, V, Z),
            from: Dr(n && c !== void 0 ? c || {} : d, V),
            to: Dr(g, V)
          };
        });
        break;
      }
      case $d: {
        K.forEach((ce) => {
          const he = _.indexOf(ce), ie = N[he], V = $d;
          j.unshift(un({}, R[ce], {
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
      case zd: {
        q.forEach((ce) => {
          const he = s.indexOf(ce), ie = f[he], V = zd;
          R[ce] = un({}, R[ce], {
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
  return j.forEach((se) => {
    let ce = se.left;
    se.right;
    let he = Xr(se, ["left", "right"]), ie;
    (ie = W.findIndex((V) => V.originalKey === ce)) !== -1 && (ie += 1), ie = Math.max(0, ie), W = [...W.slice(0, ie), he, ...W.slice(ie)];
  }), un({}, a, {
    changed: re.length || K.length || q.length,
    first: n && re.length === 0,
    transitions: W,
    current: R,
    deleted: j,
    prevProps: t
  });
}
class Mb extends og {
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
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const _b = new RegExp("rgb" + kc(Mr, Mr, Mr)), Nb = new RegExp("rgba" + kc(Mr, Mr, Mr, Mr)), Fb = new RegExp("hsl" + kc(Mr, ec, ec)), $b = new RegExp("hsla" + kc(Mr, ec, ec, Mr)), zb = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Bb = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Ib = /^#([0-9a-fA-F]{6})$/, Hb = /^#([0-9a-fA-F]{8})$/;
function Wb(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Ib.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Ju.hasOwnProperty(e) ? Ju[e] : (t = _b.exec(e)) ? (Vo(t[1]) << 24 | // r
  Vo(t[2]) << 16 | // g
  Vo(t[3]) << 8 | // b
  255) >>> // a
  0 : (t = Nb.exec(e)) ? (Vo(t[1]) << 24 | // r
  Vo(t[2]) << 16 | // g
  Vo(t[3]) << 8 | // b
  kp(t[4])) >>> // a
  0 : (t = zb.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (t = Hb.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Bb.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    t[4] + t[4],
    // a
    16
  ) >>> 0 : (t = Fb.exec(e)) ? (Sp(
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
function Bd(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Sp(e, t, n) {
  const r = n < 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - r, o = Bd(a, r, e + 1 / 3), f = Bd(a, r, e), s = Bd(a, r, e - 1 / 3);
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
  let t = Wb(e);
  if (t === null)
    return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, r = (t & 16711680) >>> 16, a = (t & 65280) >>> 8, o = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${a}, ${o})`;
}
const Au = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, Vb = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, jb = new RegExp(`(${Object.keys(Ju).join("|")})`, "g"), Ub = (e) => {
  const t = e.output.map((a) => a.replace(Vb, wp)).map((a) => a.replace(jb, wp)), n = t[0].match(Au).map(() => []);
  t.forEach((a) => {
    a.match(Au).forEach((o, f) => n[f].push(+o));
  });
  const r = t[0].match(Au).map((a, o) => Qu(un({}, e, {
    output: n[o]
  })));
  return (a) => {
    let o = 0;
    return t[0].replace(Au, () => r[o++](a)).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (f, s, c, d, g) => `rgba(${Math.round(s)}, ${Math.round(c)}, ${Math.round(d)}, ${g})`);
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
const Kb = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), Yb = ["Webkit", "Ms", "Moz", "O"];
fs = Object.keys(fs).reduce((e, t) => (Yb.forEach((n) => e[Kb(n, t)] = e[t]), e), fs);
function Xb(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : !n && typeof t == "number" && t !== 0 && !(fs.hasOwnProperty(e) && fs[e]) ? t + "px" : ("" + t).trim();
}
const Tp = {};
yb((e) => new Mb(e));
mb(Ub);
pb(Ju);
hb((e, t) => {
  if (e.nodeType && e.setAttribute !== void 0) {
    const a = t.style, o = t.children, f = t.scrollTop, s = t.scrollLeft, c = Xr(t, ["style", "children", "scrollTop", "scrollLeft"]), d = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter";
    f !== void 0 && (e.scrollTop = f), s !== void 0 && (e.scrollLeft = s), o !== void 0 && (e.textContent = o);
    for (let g in a)
      if (a.hasOwnProperty(g)) {
        var n = g.indexOf("--") === 0, r = Xb(g, a[g], n);
        g === "float" && (g = "cssFloat"), n ? e.style.setProperty(g, r) : e.style[g] = r;
      }
    for (let g in c) {
      const y = d ? g : Tp[g] || (Tp[g] = g.replace(/([A-Z])/g, (v) => "-" + v.toLowerCase()));
      typeof e.getAttribute(y) < "u" && e.setAttribute(y, c[g]);
    }
    return;
  } else
    return !1;
}, (e) => e);
const qb = [
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
], Gb = cb(bb, !1), Cp = Gb(qb);
function Zb(e) {
  return e.innerRadius;
}
function Qb(e) {
  return e.outerRadius;
}
function Jb(e) {
  return e.startAngle;
}
function e0(e) {
  return e.endAngle;
}
function t0(e) {
  return e && e.padAngle;
}
function n0(e, t, n, r, a, o, f, s) {
  var c = n - e, d = r - t, g = f - a, y = s - o, v = y * c - g * d;
  if (!(v * v < Vn))
    return v = (g * (t - o) - y * (e - a)) / v, [e + v * c, t + v * d];
}
function Pu(e, t, n, r, a, o, f) {
  var s = e - n, c = t - r, d = (f ? o : -o) / Uo(s * s + c * c), g = d * c, y = -d * s, v = e + g, E = t + y, k = n + g, M = r + y, T = (v + k) / 2, m = (E + M) / 2, D = k - v, L = M - E, _ = D * D + L * L, N = a - o, R = v * M - k * E, j = (L < 0 ? -1 : 1) * Uo(Ty(0, N * N * _ - R * R)), H = (R * L - D * j) / _, Y = (-R * D - L * j) / _, Q = (R * L + D * j) / _, re = (-R * D + L * j) / _, K = H - T, q = Y - m, me = Q - T, W = re - m;
  return K * K + q * q > me * me + W * W && (H = Q, Y = re), {
    cx: H,
    cy: Y,
    x01: -g,
    y01: -y,
    x11: H * (a / N - 1),
    y11: Y * (a / N - 1)
  };
}
function r0() {
  var e = Zb, t = Qb, n = It(0), r = null, a = Jb, o = e0, f = t0, s = null;
  function c() {
    var d, g, y = +e.apply(this, arguments), v = +t.apply(this, arguments), E = a.apply(this, arguments) - Fh, k = o.apply(this, arguments) - Fh, M = $h(k - E), T = k > E;
    if (s || (s = d = Sc()), v < y && (g = v, v = y, y = g), !(v > Vn))
      s.moveTo(0, 0);
    else if (M > $u - Vn)
      s.moveTo(v * Ti(E), v * Wr(E)), s.arc(0, 0, v, E, k, !T), y > Vn && (s.moveTo(y * Ti(k), y * Wr(k)), s.arc(0, 0, y, k, E, T));
    else {
      var m = E, D = k, L = E, _ = k, N = M, R = M, j = f.apply(this, arguments) / 2, H = j > Vn && (r ? +r.apply(this, arguments) : Uo(y * y + v * v)), Y = Ad($h(v - y) / 2, +n.apply(this, arguments)), Q = Y, re = Y, K, q;
      if (H > Vn) {
        var me = zh(H / y * Wr(j)), W = zh(H / v * Wr(j));
        (N -= me * 2) > Vn ? (me *= T ? 1 : -1, L += me, _ -= me) : (N = 0, L = _ = (E + k) / 2), (R -= W * 2) > Vn ? (W *= T ? 1 : -1, m += W, D -= W) : (R = 0, m = D = (E + k) / 2);
      }
      var se = v * Ti(m), ce = v * Wr(m), he = y * Ti(_), ie = y * Wr(_);
      if (Y > Vn) {
        var V = v * Ti(D), Z = v * Wr(D), ne = y * Ti(L), Ae = y * Wr(L), ve;
        if (M < Nh && (ve = n0(se, ce, ne, Ae, V, Z, he, ie))) {
          var Re = se - ve[0], le = ce - ve[1], _e = V - ve[0], Be = Z - ve[1], Te = 1 / Wr(wy((Re * _e + le * Be) / (Uo(Re * Re + le * le) * Uo(_e * _e + Be * Be))) / 2), ge = Uo(ve[0] * ve[0] + ve[1] * ve[1]);
          Q = Ad(Y, (y - ge) / (Te - 1)), re = Ad(Y, (v - ge) / (Te + 1));
        }
      }
      R > Vn ? re > Vn ? (K = Pu(ne, Ae, se, ce, v, re, T), q = Pu(V, Z, he, ie, v, re, T), s.moveTo(K.cx + K.x01, K.cy + K.y01), re < Y ? s.arc(K.cx, K.cy, re, Wn(K.y01, K.x01), Wn(q.y01, q.x01), !T) : (s.arc(K.cx, K.cy, re, Wn(K.y01, K.x01), Wn(K.y11, K.x11), !T), s.arc(0, 0, v, Wn(K.cy + K.y11, K.cx + K.x11), Wn(q.cy + q.y11, q.cx + q.x11), !T), s.arc(q.cx, q.cy, re, Wn(q.y11, q.x11), Wn(q.y01, q.x01), !T))) : (s.moveTo(se, ce), s.arc(0, 0, v, m, D, !T)) : s.moveTo(se, ce), !(y > Vn) || !(N > Vn) ? s.lineTo(he, ie) : Q > Vn ? (K = Pu(he, ie, V, Z, y, -Q, T), q = Pu(se, ce, ne, Ae, y, -Q, T), s.lineTo(K.cx + K.x01, K.cy + K.y01), Q < Y ? s.arc(K.cx, K.cy, Q, Wn(K.y01, K.x01), Wn(q.y01, q.x01), !T) : (s.arc(K.cx, K.cy, Q, Wn(K.y01, K.x01), Wn(K.y11, K.x11), !T), s.arc(0, 0, y, Wn(K.cy + K.y11, K.cx + K.x11), Wn(q.cy + q.y11, q.cx + q.x11), T), s.arc(q.cx, q.cy, Q, Wn(q.y11, q.x11), Wn(q.y01, q.x01), !T))) : s.arc(0, 0, y, _, L, T);
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
    return arguments.length ? (n = typeof d == "function" ? d : It(+d), c) : n;
  }, c.padRadius = function(d) {
    return arguments.length ? (r = d == null ? null : typeof d == "function" ? d : It(+d), c) : r;
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
function hg(e) {
  this._context = e;
}
hg.prototype = {
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
  return new hg(e);
}
function Zf(e) {
  return e[0];
}
function Qf(e) {
  return e[1];
}
function pg() {
  var e = Zf, t = Qf, n = It(!0), r = null, a = wc, o = null;
  function f(s) {
    var c, d = s.length, g, y = !1, v;
    for (r == null && (o = a(v = Sc())), c = 0; c <= d; ++c)
      !(c < d && n(g = s[c], c, s)) === y && ((y = !y) ? o.lineStart() : o.lineEnd()), y && o.point(+e(g, c, s), +t(g, c, s));
    if (v)
      return o = null, v + "" || null;
  }
  return f.x = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : It(+s), f) : e;
  }, f.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : It(+s), f) : t;
  }, f.defined = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : It(!!s), f) : n;
  }, f.curve = function(s) {
    return arguments.length ? (a = s, r != null && (o = a(r)), f) : a;
  }, f.context = function(s) {
    return arguments.length ? (s == null ? r = o = null : o = a(r = s), f) : r;
  }, f;
}
function a0() {
  var e = Zf, t = null, n = It(0), r = Qf, a = It(!0), o = null, f = wc, s = null;
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
      T && (D[y] = +e(M, y, g), L[y] = +n(M, y, g), s.point(t ? +t(M, y, g) : D[y], r ? +r(M, y, g) : L[y]));
    }
    if (m)
      return s = null, m + "" || null;
  }
  function d() {
    return pg().defined(a).curve(f).context(o);
  }
  return c.x = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : It(+g), t = null, c) : e;
  }, c.x0 = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : It(+g), c) : e;
  }, c.x1 = function(g) {
    return arguments.length ? (t = g == null ? null : typeof g == "function" ? g : It(+g), c) : t;
  }, c.y = function(g) {
    return arguments.length ? (n = typeof g == "function" ? g : It(+g), r = null, c) : n;
  }, c.y0 = function(g) {
    return arguments.length ? (n = typeof g == "function" ? g : It(+g), c) : n;
  }, c.y1 = function(g) {
    return arguments.length ? (r = g == null ? null : typeof g == "function" ? g : It(+g), c) : r;
  }, c.lineX0 = c.lineY0 = function() {
    return d().x(e).y(n);
  }, c.lineY1 = function() {
    return d().x(e).y(r);
  }, c.lineX1 = function() {
    return d().x(t).y(n);
  }, c.defined = function(g) {
    return arguments.length ? (a = typeof g == "function" ? g : It(!!g), c) : a;
  }, c.curve = function(g) {
    return arguments.length ? (f = g, o != null && (s = f(o)), c) : f;
  }, c.context = function(g) {
    return arguments.length ? (g == null ? o = s = null : s = f(o = g), c) : o;
  }, c;
}
function i0(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function o0(e) {
  return e;
}
function l0() {
  var e = o0, t = i0, n = null, r = It(0), a = It($u), o = It(0);
  function f(s) {
    var c, d = s.length, g, y, v = 0, E = new Array(d), k = new Array(d), M = +r.apply(this, arguments), T = Math.min($u, Math.max(-$u, a.apply(this, arguments) - M)), m, D = Math.min(Math.abs(T) / d, o.apply(this, arguments)), L = D * (T < 0 ? -1 : 1), _;
    for (c = 0; c < d; ++c)
      (_ = k[E[c] = c] = +e(s[c], c, s)) > 0 && (v += _);
    for (t != null ? E.sort(function(N, R) {
      return t(k[N], k[R]);
    }) : n != null && E.sort(function(N, R) {
      return n(s[N], s[R]);
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
    return arguments.length ? (t = s, n = null, f) : t;
  }, f.sort = function(s) {
    return arguments.length ? (n = s, t = null, f) : n;
  }, f.startAngle = function(s) {
    return arguments.length ? (r = typeof s == "function" ? s : It(+s), f) : r;
  }, f.endAngle = function(s) {
    return arguments.length ? (a = typeof s == "function" ? s : It(+s), f) : a;
  }, f.padAngle = function(s) {
    return arguments.length ? (o = typeof s == "function" ? s : It(+s), f) : o;
  }, f;
}
var of = Array.prototype.slice;
function s0(e) {
  return e.source;
}
function u0(e) {
  return e.target;
}
function c0(e) {
  var t = s0, n = u0, r = Zf, a = Qf, o = null;
  function f() {
    var s, c = of.call(arguments), d = t.apply(this, c), g = n.apply(this, c);
    if (o || (o = s = Sc()), e(o, +r.apply(this, (c[0] = d, c)), +a.apply(this, c), +r.apply(this, (c[0] = g, c)), +a.apply(this, c)), s)
      return o = null, s + "" || null;
  }
  return f.source = function(s) {
    return arguments.length ? (t = s, f) : t;
  }, f.target = function(s) {
    return arguments.length ? (n = s, f) : n;
  }, f.x = function(s) {
    return arguments.length ? (r = typeof s == "function" ? s : It(+s), f) : r;
  }, f.y = function(s) {
    return arguments.length ? (a = typeof s == "function" ? s : It(+s), f) : a;
  }, f.context = function(s) {
    return arguments.length ? (o = s ?? null, f) : o;
  }, f;
}
function d0(e, t, n, r, a) {
  e.moveTo(t, n), e.bezierCurveTo(t = (t + r) / 2, n, t, a, r, a);
}
function f0() {
  return c0(d0);
}
function Wa() {
}
function tc(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6
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
function h0(e) {
  return new Tc(e);
}
function mg(e) {
  this._context = e;
}
mg.prototype = {
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
function p0(e) {
  return new mg(e);
}
function gg(e) {
  this._context = e;
}
gg.prototype = {
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
        var n = (this._x0 + 4 * this._x1 + e) / 6, r = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(n, r) : this._context.moveTo(n, r);
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
function m0(e) {
  return new gg(e);
}
function yg(e, t) {
  this._basis = new Tc(e), this._beta = t;
}
yg.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e = this._x, t = this._y, n = e.length - 1;
    if (n > 0)
      for (var r = e[0], a = t[0], o = e[n] - r, f = t[n] - a, s = -1, c; ++s <= n; )
        c = s / n, this._basis.point(
          this._beta * e[s] + (1 - this._beta) * (r + c * o),
          this._beta * t[s] + (1 - this._beta) * (a + c * f)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
const g0 = function e(t) {
  function n(r) {
    return t === 1 ? new Tc(r) : new yg(r, t);
  }
  return n.beta = function(r) {
    return e(+r);
  }, n;
}(0.85);
function nc(e, t, n) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - n),
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
const y0 = function e(t) {
  function n(r) {
    return new Jf(r, t);
  }
  return n.tension = function(r) {
    return e(+r);
  }, n;
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
const v0 = function e(t) {
  function n(r) {
    return new eh(r, t);
  }
  return n.tension = function(r) {
    return e(+r);
  }, n;
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
const x0 = function e(t) {
  function n(r) {
    return new th(r, t);
  }
  return n.tension = function(r) {
    return e(+r);
  }, n;
}(0);
function nh(e, t, n) {
  var r = e._x1, a = e._y1, o = e._x2, f = e._y2;
  if (e._l01_a > Vn) {
    var s = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, c = 3 * e._l01_a * (e._l01_a + e._l12_a);
    r = (r * s - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / c, a = (a * s - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / c;
  }
  if (e._l23_a > Vn) {
    var d = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, g = 3 * e._l23_a * (e._l23_a + e._l12_a);
    o = (o * d + e._x1 * e._l23_2a - t * e._l12_2a) / g, f = (f * d + e._y1 * e._l23_2a - n * e._l12_2a) / g;
  }
  e._context.bezierCurveTo(r, a, o, f, e._x2, e._y2);
}
function vg(e, t) {
  this._context = e, this._alpha = t;
}
vg.prototype = {
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
      var n = this._x2 - e, r = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + r * r, this._alpha));
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
const b0 = function e(t) {
  function n(r) {
    return t ? new vg(r, t) : new Jf(r, 0);
  }
  return n.alpha = function(r) {
    return e(+r);
  }, n;
}(0.5);
function xg(e, t) {
  this._context = e, this._alpha = t;
}
xg.prototype = {
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
      var n = this._x2 - e, r = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + r * r, this._alpha));
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
const S0 = function e(t) {
  function n(r) {
    return t ? new xg(r, t) : new eh(r, 0);
  }
  return n.alpha = function(r) {
    return e(+r);
  }, n;
}(0.5);
function bg(e, t) {
  this._context = e, this._alpha = t;
}
bg.prototype = {
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
      var n = this._x2 - e, r = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + r * r, this._alpha));
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
const E0 = function e(t) {
  function n(r) {
    return t ? new bg(r, t) : new th(r, 0);
  }
  return n.alpha = function(r) {
    return e(+r);
  }, n;
}(0.5);
function Sg(e) {
  this._context = e;
}
Sg.prototype = {
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
  return new Sg(e);
}
function Ap(e) {
  return e < 0 ? -1 : 1;
}
function Pp(e, t, n) {
  var r = e._x1 - e._x0, a = t - e._x1, o = (e._y1 - e._y0) / (r || a < 0 && -0), f = (n - e._y1) / (a || r < 0 && -0), s = (o * a + f * r) / (r + a);
  return (Ap(o) + Ap(f)) * Math.min(Math.abs(o), Math.abs(f), 0.5 * Math.abs(s)) || 0;
}
function Rp(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Id(e, t, n) {
  var r = e._x0, a = e._y0, o = e._x1, f = e._y1, s = (o - r) / 3;
  e._context.bezierCurveTo(r + s, a + s * t, o - s, f - s * n, o, f);
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
          this._point = 3, Id(this, Rp(this, n = Pp(this, e, t)), n);
          break;
        default:
          Id(this, this._t0, n = Pp(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
function Eg(e) {
  this._context = new kg(e);
}
(Eg.prototype = Object.create(rc.prototype)).point = function(e, t) {
  rc.prototype.point.call(this, t, e);
};
function kg(e) {
  this._context = e;
}
kg.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, n, r, a, o) {
    this._context.bezierCurveTo(t, e, r, n, o, a);
  }
};
function Iu(e) {
  return new rc(e);
}
function k0(e) {
  return new Eg(e);
}
function wg(e) {
  this._context = e;
}
wg.prototype = {
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
        for (var r = Lp(e), a = Lp(t), o = 0, f = 1; f < n; ++o, ++f)
          this._context.bezierCurveTo(r[0][o], a[0][o], r[1][o], a[1][o], e[f], t[f]);
    (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Lp(e) {
  var t, n = e.length - 1, r, a = new Array(n), o = new Array(n), f = new Array(n);
  for (a[0] = 0, o[0] = 2, f[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t)
    a[t] = 1, o[t] = 4, f[t] = 4 * e[t] + 2 * e[t + 1];
  for (a[n - 1] = 2, o[n - 1] = 7, f[n - 1] = 8 * e[n - 1] + e[n], t = 1; t < n; ++t)
    r = a[t] / o[t - 1], o[t] -= r, f[t] -= r * f[t - 1];
  for (a[n - 1] = f[n - 1] / o[n - 1], t = n - 2; t >= 0; --t)
    a[t] = (f[t] - a[t + 1]) / o[t];
  for (o[n - 1] = (e[n] + a[n - 1]) / 2, t = 0; t < n - 1; ++t)
    o[t] = 2 * e[t + 1] - a[t + 1];
  return [a, o];
}
function w0(e) {
  return new wg(e);
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
          var n = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(n, this._y), this._context.lineTo(n, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function T0(e) {
  return new Cc(e, 0.5);
}
function C0(e) {
  return new Cc(e, 0);
}
function A0(e) {
  return new Cc(e, 1);
}
function el(e, t) {
  if ((f = e.length) > 1)
    for (var n = 1, r, a, o = e[t[0]], f, s = o.length; n < f; ++n)
      for (a = o, o = e[t[n]], r = 0; r < s; ++r)
        o[r][1] += o[r][0] = isNaN(a[r][1]) ? a[r][0] : a[r][1];
}
function tl(e) {
  for (var t = e.length, n = new Array(t); --t >= 0; )
    n[t] = t;
  return n;
}
function P0(e, t) {
  return e[t];
}
function rh() {
  var e = It([]), t = tl, n = el, r = P0;
  function a(o) {
    var f = e.apply(this, arguments), s, c = o.length, d = f.length, g = new Array(d), y;
    for (s = 0; s < d; ++s) {
      for (var v = f[s], E = g[s] = new Array(c), k = 0, M; k < c; ++k)
        E[k] = M = [0, +r(o[k], v, k, o)], M.data = o[k];
      E.key = v;
    }
    for (s = 0, y = t(g); s < d; ++s)
      g[y[s]].index = s;
    return n(g, y), g;
  }
  return a.keys = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : It(of.call(o)), a) : e;
  }, a.value = function(o) {
    return arguments.length ? (r = typeof o == "function" ? o : It(+o), a) : r;
  }, a.order = function(o) {
    return arguments.length ? (t = o == null ? tl : typeof o == "function" ? o : It(of.call(o)), a) : t;
  }, a.offset = function(o) {
    return arguments.length ? (n = o ?? el, a) : n;
  }, a;
}
function R0(e, t) {
  if ((r = e.length) > 0) {
    for (var n, r, a = 0, o = e[0].length, f; a < o; ++a) {
      for (f = n = 0; n < r; ++n)
        f += e[n][a][1] || 0;
      if (f)
        for (n = 0; n < r; ++n)
          e[n][a][1] /= f;
    }
    el(e, t);
  }
}
function L0(e, t) {
  if ((c = e.length) > 0)
    for (var n, r = 0, a, o, f, s, c, d = e[t[0]].length; r < d; ++r)
      for (f = s = 0, n = 0; n < c; ++n)
        (o = (a = e[t[n]][r])[1] - a[0]) > 0 ? (a[0] = f, a[1] = f += o) : o < 0 ? (a[1] = s, a[0] = s += o) : (a[0] = 0, a[1] = o);
}
function D0(e, t) {
  if ((a = e.length) > 0) {
    for (var n = 0, r = e[t[0]], a, o = r.length; n < o; ++n) {
      for (var f = 0, s = 0; f < a; ++f)
        s += e[f][n][1] || 0;
      r[n][1] += r[n][0] = -s / 2;
    }
    el(e, t);
  }
}
function O0(e, t) {
  if (!(!((f = e.length) > 0) || !((o = (a = e[t[0]]).length) > 0))) {
    for (var n = 0, r = 1, a, o, f; r < o; ++r) {
      for (var s = 0, c = 0, d = 0; s < f; ++s) {
        for (var g = e[t[s]], y = g[r][1] || 0, v = g[r - 1][1] || 0, E = (y - v) / 2, k = 0; k < s; ++k) {
          var M = e[t[k]], T = M[r][1] || 0, m = M[r - 1][1] || 0;
          E += T - m;
        }
        c += y, d += E * y;
      }
      a[r - 1][1] += a[r - 1][0] = n, c && (n -= d / c);
    }
    a[r - 1][1] += a[r - 1][0] = n, el(e, t);
  }
}
function M0(e) {
  var t = e.map(_0);
  return tl(e).sort(function(n, r) {
    return t[n] - t[r];
  });
}
function _0(e) {
  for (var t = -1, n = 0, r = e.length, a, o = -1 / 0; ++t < r; )
    (a = +e[t][1]) > o && (o = a, n = t);
  return n;
}
function Tg(e) {
  var t = e.map(Cg);
  return tl(e).sort(function(n, r) {
    return t[n] - t[r];
  });
}
function Cg(e) {
  for (var t = 0, n = -1, r = e.length, a; ++n < r; )
    (a = +e[n][1]) && (t += a);
  return t;
}
function N0(e) {
  return Tg(e).reverse();
}
function F0(e) {
  var t = e.length, n, r, a = e.map(Cg), o = M0(e), f = 0, s = 0, c = [], d = [];
  for (n = 0; n < t; ++n)
    r = o[n], f < s ? (f += a[r], c.push(r)) : (s += a[r], d.push(r));
  return d.reverse().concat(c);
}
function $0(e) {
  return tl(e).reverse();
}
function yn(e, t) {
  e(t);
}
var Dp = {
  ascending: Tg,
  descending: N0,
  insideout: F0,
  none: tl,
  reverse: $0
};
function ah(e) {
  return e && Dp[e] || Dp.none;
}
var Op = {
  expand: R0,
  diverging: L0,
  none: el,
  silhouette: D0,
  wiggle: O0
};
function ih(e) {
  return e && Op[e] || Op.none;
}
function z0(e) {
  var t = e === void 0 ? {} : e, n = t.innerRadius, r = t.outerRadius, a = t.cornerRadius, o = t.startAngle, f = t.endAngle, s = t.padAngle, c = t.padRadius, d = r0();
  return n != null && yn(d.innerRadius, n), r != null && yn(d.outerRadius, r), a != null && yn(d.cornerRadius, a), o != null && yn(d.startAngle, o), f != null && yn(d.endAngle, f), s != null && yn(d.padAngle, s), c != null && yn(d.padRadius, c), d;
}
function oh(e) {
  var t = e === void 0 ? {} : e, n = t.x, r = t.x0, a = t.x1, o = t.y, f = t.y0, s = t.y1, c = t.defined, d = t.curve, g = a0();
  return n && yn(g.x, n), r && yn(g.x0, r), a && yn(g.x1, a), o && yn(g.y, o), f && yn(g.y0, f), s && yn(g.y1, s), c && g.defined(c), d && g.curve(d), g;
}
function Ag(e) {
  var t = e === void 0 ? {} : e, n = t.x, r = t.y, a = t.defined, o = t.curve, f = pg();
  return n && yn(f.x, n), r && yn(f.y, r), a && f.defined(a), o && f.curve(o), f;
}
function B0(e) {
  var t = e === void 0 ? {} : e, n = t.startAngle, r = t.endAngle, a = t.padAngle, o = t.value, f = t.sort, s = t.sortValues, c = l0();
  return (f === null || f != null) && c.sort(f), (s === null || s != null) && c.sortValues(s), o != null && c.value(o), a != null && yn(c.padAngle, a), n != null && yn(c.startAngle, n), r != null && yn(c.endAngle, r), c;
}
function I0(e) {
  var t = e.keys, n = e.value, r = e.order, a = e.offset, o = rh();
  return t && o.keys(t), n && yn(o.value, n), r && o.order(ah(r)), a && o.offset(ih(a)), o;
}
var H0 = ["className", "top", "left", "data", "centroid", "innerRadius", "outerRadius", "cornerRadius", "startAngle", "endAngle", "padAngle", "padRadius", "pieSort", "pieSortValues", "pieValue", "children", "fill"];
function sf() {
  return sf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, sf.apply(this, arguments);
}
function W0(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function V0(e) {
  var t = e.className, n = e.top, r = e.left, a = e.data, o = a === void 0 ? [] : a, f = e.centroid, s = e.innerRadius, c = s === void 0 ? 0 : s, d = e.outerRadius, g = e.cornerRadius, y = e.startAngle, v = e.endAngle, E = e.padAngle, k = e.padRadius, M = e.pieSort, T = e.pieSortValues, m = e.pieValue, D = e.children, L = e.fill, _ = L === void 0 ? "" : L, N = W0(e, H0), R = z0({
    innerRadius: c,
    outerRadius: d,
    cornerRadius: g,
    padRadius: k
  }), j = B0({
    startAngle: y,
    endAngle: v,
    padAngle: E,
    value: m,
    sort: M,
    sortValues: T
  }), H = j(o);
  return D ? /* @__PURE__ */ i.createElement(i.Fragment, null, D({
    arcs: H,
    path: R,
    pie: j
  })) : /* @__PURE__ */ i.createElement(nt, {
    className: "visx-pie-arcs-group",
    top: n,
    left: r
  }, H.map(function(Y, Q) {
    return /* @__PURE__ */ i.createElement("g", {
      key: "pie-arc-" + Q
    }, /* @__PURE__ */ i.createElement("path", sf({
      className: wn("visx-pie-arc", t),
      d: R(Y) || "",
      fill: _ == null || typeof _ == "string" ? _ : _(Y)
    }, N)), f == null ? void 0 : f(R.centroid(Y), Y));
  }));
}
var j0 = ["from", "to", "fill", "className", "innerRef"];
function uf() {
  return uf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, uf.apply(this, arguments);
}
function U0(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function en(e) {
  var t = e.from, n = t === void 0 ? {
    x: 0,
    y: 0
  } : t, r = e.to, a = r === void 0 ? {
    x: 1,
    y: 1
  } : r, o = e.fill, f = o === void 0 ? "transparent" : o, s = e.className, c = e.innerRef, d = U0(e, j0), g = n.x === a.x || n.y === a.y;
  return /* @__PURE__ */ i.createElement("line", uf({
    ref: c,
    className: wn("visx-line", s),
    x1: n.x,
    y1: n.y,
    x2: a.x,
    y2: a.y,
    fill: f,
    shapeRendering: g ? "crispEdges" : "auto"
  }, d));
}
var K0 = ["children", "data", "x", "y", "fill", "className", "curve", "innerRef", "defined"];
function cf() {
  return cf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, cf.apply(this, arguments);
}
function Y0(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function da(e) {
  var t = e.children, n = e.data, r = n === void 0 ? [] : n, a = e.x, o = e.y, f = e.fill, s = f === void 0 ? "transparent" : f, c = e.className, d = e.curve, g = e.innerRef, y = e.defined, v = y === void 0 ? function() {
    return !0;
  } : y, E = Y0(e, K0), k = Ag({
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
    d: k(r) || "",
    fill: s,
    strokeLinecap: "round"
  }, E));
}
var X0 = ["children", "x", "x0", "x1", "y", "y0", "y1", "data", "defined", "className", "curve", "innerRef"];
function df() {
  return df = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, df.apply(this, arguments);
}
function q0(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function G0(e) {
  var t = e.children, n = e.x, r = e.x0, a = e.x1, o = e.y, f = e.y0, s = e.y1, c = e.data, d = c === void 0 ? [] : c, g = e.defined, y = g === void 0 ? function() {
    return !0;
  } : g, v = e.className, E = e.curve, k = e.innerRef, M = q0(e, X0), T = oh({
    x: n,
    x0: r,
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
var Z0 = ["x", "x0", "x1", "y", "y1", "y0", "yScale", "data", "defined", "className", "curve", "innerRef", "children"];
function ff() {
  return ff = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ff.apply(this, arguments);
}
function Q0(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function J0(e) {
  var t = e.x, n = e.x0, r = e.x1, a = e.y, o = e.y1, f = e.y0, s = e.yScale, c = e.data, d = c === void 0 ? [] : c, g = e.defined, y = g === void 0 ? function() {
    return !0;
  } : g, v = e.className, E = e.curve, k = e.innerRef, M = e.children, T = Q0(e, Z0), m = oh({
    x: t,
    x0: n,
    x1: r,
    defined: y,
    curve: E
  });
  return f == null ? m.y0(s.range()[0]) : yn(m.y0, f), a && !o && yn(m.y1, a), o && !a && yn(m.y1, o), M ? /* @__PURE__ */ i.createElement(i.Fragment, null, M({
    path: m
  })) : /* @__PURE__ */ i.createElement("path", ff({
    ref: k,
    className: wn("visx-area-closed", v),
    d: m(d) || ""
  }, T));
}
var eS = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
function hf() {
  return hf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, hf.apply(this, arguments);
}
function tS(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function nS(e) {
  var t = e.className, n = e.top, r = e.left, a = e.keys, o = e.data, f = e.curve, s = e.defined, c = e.x, d = e.x0, g = e.x1, y = e.y0, v = e.y1, E = e.value, k = e.order, M = e.offset, T = e.color, m = e.children, D = tS(e, eS), L = I0({
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
  })) : /* @__PURE__ */ i.createElement(nt, {
    top: n,
    left: r
  }, N.map(function(R, j) {
    return /* @__PURE__ */ i.createElement("path", hf({
      className: wn("visx-stack", t),
      key: "stack-" + j + "-" + (R.key || ""),
      d: _(R) || "",
      fill: T == null ? void 0 : T(R.key, j)
    }, D));
  }));
}
var rS = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
function ac() {
  return ac = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ac.apply(this, arguments);
}
function aS(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function iS(e) {
  var t = e.className, n = e.top, r = e.left, a = e.keys, o = e.data, f = e.curve, s = e.defined, c = e.x, d = e.x0, g = e.x1, y = e.y0, v = e.y1, E = e.value, k = e.order, M = e.offset, T = e.color, m = e.children, D = aS(e, rS);
  return /* @__PURE__ */ i.createElement(nS, ac({
    className: t,
    top: n,
    left: r,
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
    return _.map(function(R, j) {
      return /* @__PURE__ */ i.createElement("path", ac({
        className: wn("visx-area-stack", t),
        key: "area-stack-" + j + "-" + (R.key || ""),
        d: N(R) || "",
        fill: T == null ? void 0 : T(R.key, j)
      }, D));
    });
  });
}
function lh(e) {
  if ("bandwidth" in e)
    return e.bandwidth();
  var t = e.range(), n = e.domain();
  return Math.abs(t[t.length - 1] - t[0]) / n.length;
}
var oS = ["data", "className", "top", "left", "x0", "x0Scale", "x1Scale", "yScale", "color", "keys", "height", "children"];
function pf() {
  return pf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, pf.apply(this, arguments);
}
function lS(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Pg(e) {
  var t = e.data, n = e.className, r = e.top, a = e.left, o = e.x0, f = e.x0Scale, s = e.x1Scale, c = e.yScale, d = e.color, g = e.keys, y = e.height, v = e.children, E = lS(e, oS), k = lh(s), M = t.map(function(T, m) {
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
  return v ? /* @__PURE__ */ i.createElement(i.Fragment, null, v(M)) : /* @__PURE__ */ i.createElement(nt, {
    className: wn("visx-bar-group", n),
    top: r,
    left: a
  }, M.map(function(T) {
    return /* @__PURE__ */ i.createElement(nt, {
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
function Rg(e) {
  return e == null ? void 0 : e[0];
}
function Lg(e) {
  return e == null ? void 0 : e[1];
}
var sS = ["data", "className", "top", "left", "x", "y0", "y1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
function mf() {
  return mf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, mf.apply(this, arguments);
}
function uS(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function cS(e) {
  var t = e.data, n = e.className, r = e.top, a = e.left, o = e.x, f = e.y0, s = f === void 0 ? Rg : f, c = e.y1, d = c === void 0 ? Lg : c, g = e.xScale, y = e.yScale, v = e.color, E = e.keys, k = e.value, M = e.order, T = e.offset, m = e.children, D = uS(e, sS), L = rh();
  E && L.keys(E), k && yn(L.value, k), M && L.order(ah(M)), T && L.offset(ih(T));
  var _ = L(t), N = lh(g), R = _.map(function(j, H) {
    var Y = j.key;
    return {
      index: H,
      key: Y,
      bars: j.map(function(Q, re) {
        var K = (y(s(Q)) || 0) - (y(d(Q)) || 0), q = y(d(Q)), me = "bandwidth" in g ? g(o(Q.data)) : Math.max((g(o(Q.data)) || 0) - N / 2);
        return {
          bar: Q,
          key: Y,
          index: re,
          height: K,
          width: N,
          x: me || 0,
          y: q || 0,
          color: v(j.key, re)
        };
      })
    };
  });
  return m ? /* @__PURE__ */ i.createElement(i.Fragment, null, m(R)) : /* @__PURE__ */ i.createElement(nt, {
    className: wn("visx-bar-stack", n),
    top: r,
    left: a
  }, R.map(function(j) {
    return j.bars.map(function(H) {
      return /* @__PURE__ */ i.createElement(hr, mf({
        key: "bar-stack-" + j.index + "-" + H.index,
        x: H.x,
        y: H.y,
        height: H.height,
        width: H.width,
        fill: H.color
      }, D));
    });
  }));
}
var dS = ["data", "className", "top", "left", "y", "x0", "x1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
function gf() {
  return gf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, gf.apply(this, arguments);
}
function fS(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function hS(e) {
  var t = e.data, n = e.className, r = e.top, a = e.left, o = e.y, f = e.x0, s = f === void 0 ? Rg : f, c = e.x1, d = c === void 0 ? Lg : c, g = e.xScale, y = e.yScale, v = e.color, E = e.keys, k = e.value, M = e.order, T = e.offset, m = e.children, D = fS(e, dS), L = rh();
  E && L.keys(E), k && yn(L.value, k), M && L.order(ah(M)), T && L.offset(ih(T));
  var _ = L(t), N = lh(y), R = _.map(function(j, H) {
    var Y = j.key;
    return {
      index: H,
      key: Y,
      bars: j.map(function(Q, re) {
        var K = (g(d(Q)) || 0) - (g(s(Q)) || 0), q = g(s(Q)), me = "bandwidth" in y ? y(o(Q.data)) : Math.max((y(o(Q.data)) || 0) - K / 2);
        return {
          bar: Q,
          key: Y,
          index: re,
          height: N,
          width: K,
          x: q || 0,
          y: me || 0,
          color: v(j.key, re)
        };
      })
    };
  });
  return m ? /* @__PURE__ */ i.createElement(i.Fragment, null, m(R)) : /* @__PURE__ */ i.createElement(nt, {
    className: wn("visx-bar-stack-horizontal", n),
    top: r,
    left: a
  }, R.map(function(j) {
    return j.bars.map(function(H) {
      return /* @__PURE__ */ i.createElement(hr, gf({
        key: "bar-stack-" + j.index + "-" + H.index,
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
function pS(e) {
  var t = document.getElementById(e);
  if (!t) {
    var n = document.createElementNS(Mp, "svg");
    n.setAttribute("aria-hidden", "true"), n.style.opacity = "0", n.style.width = "0", n.style.height = "0", n.style.position = "absolute", n.style.top = "-100%", n.style.left = "-100%", n.style.pointerEvents = "none", t = document.createElementNS(Mp, "path"), t.setAttribute("id", e), n.appendChild(t), document.body.appendChild(n);
  }
  return t;
}
var mS = "__visx_splitpath_svg_path_measurement_id", _p = function() {
  return !0;
};
function gS(e) {
  var t = e.path, n = e.pointsInSegments, r = e.segmentation, a = r === void 0 ? "x" : r, o = e.sampleRate, f = o === void 0 ? 1 : o;
  try {
    var s = pS(mS);
    s.setAttribute("d", t);
    var c = s.getTotalLength(), d = n.length, g = n.map(function() {
      return [];
    });
    if (a === "x" || a === "y")
      for (var y = n.map(function(q) {
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
      var _ = n.map(function(q) {
        return q.length;
      }), N = _.reduce(function(q, me) {
        return q + me;
      }, 0), R = c / Math.max(1, N - 1), j = _.slice(0, d - 1);
      j.unshift(0);
      for (var H = 2; H < d; H += 1)
        j[H] += j[H - 1];
      for (var Y = 0; Y < d; Y += 1)
        j[Y] *= R;
      for (var Q = 0, re = 0; re <= c; re += f) {
        for (var K = s.getPointAtLength(re); Q < d - 1 && re >= j[Q + 1]; )
          Q += 1;
        g[Q].push(K);
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
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, yf.apply(this, arguments);
}
var yS = function(t) {
  return t.x || 0;
}, vS = function(t) {
  return t.y || 0;
};
function Dg(e) {
  var t = e.children, n = e.className, r = e.curve, a = e.defined, o = e.segmentation, f = e.sampleRate, s = e.segments, c = e.x, d = e.y, g = e.styles, y = ue.useMemo(function() {
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
    var k = Ag({
      x: c,
      y: d,
      defined: a,
      curve: r
    });
    return k(s.flat()) || "";
  }, [c, d, a, r, s]), E = ue.useMemo(function() {
    return gS({
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
      className: n,
      data: k,
      x: yS,
      y: vS
    }, g[M] || g[M % g.length]));
  }));
}
Dg.propTypes = {
  segments: fe.arrayOf(fe.array).isRequired,
  styles: fe.array.isRequired,
  children: fe.func,
  className: fe.string
};
var xS = ["tooltipOpen"];
function bS(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function ic() {
  return ic = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ic.apply(this, arguments);
}
function Og(e) {
  var t = ue.useState(ic({
    tooltipOpen: !1
  }, e)), n = t[0], r = t[1], a = ue.useCallback(function(f) {
    return r(typeof f == "function" ? function(s) {
      s.tooltipOpen;
      var c = bS(s, xS);
      return ic({}, f(c), {
        tooltipOpen: !0
      });
    } : {
      tooltipOpen: !0,
      tooltipLeft: f.tooltipLeft,
      tooltipTop: f.tooltipTop,
      tooltipData: f.tooltipData
    });
  }, [r]), o = ue.useCallback(function() {
    return r({
      tooltipOpen: !1,
      tooltipLeft: void 0,
      tooltipTop: void 0,
      tooltipData: void 0
    });
  }, [r]);
  return {
    tooltipOpen: n.tooltipOpen,
    tooltipLeft: n.tooltipLeft,
    tooltipTop: n.tooltipTop,
    tooltipData: n.tooltipData,
    updateTooltip: r,
    showTooltip: a,
    hideTooltip: o
  };
}
var SS = ["className", "top", "left", "offsetLeft", "offsetTop", "style", "children", "unstyled", "applyPositionStyle"];
function oc() {
  return oc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, oc.apply(this, arguments);
}
function ES(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var Mg = {
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
  var n = e.className, r = e.top, a = e.left, o = e.offsetLeft, f = o === void 0 ? 10 : o, s = e.offsetTop, c = s === void 0 ? 10 : s, d = e.style, g = d === void 0 ? Mg : d, y = e.children, v = e.unstyled, E = v === void 0 ? !1 : v, k = e.applyPositionStyle, M = k === void 0 ? !1 : k, T = ES(e, SS);
  return /* @__PURE__ */ i.createElement("div", oc({
    ref: t,
    className: wn("visx-tooltip", n),
    style: oc({
      top: r == null || c == null ? r : r + c,
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
const kS = sh;
function vf() {
  return vf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, vf.apply(this, arguments);
}
function wS(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function TS(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, xf(e, t);
}
function xf(e, t) {
  return xf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
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
function CS(e) {
  var t;
  return t = /* @__PURE__ */ function(n) {
    TS(r, n);
    function r(o) {
      var f;
      return f = n.call(this, o) || this, f.state = {
        rect: void 0,
        parentRect: void 0
      }, f.nodeRef = /* @__PURE__ */ i.createRef(), f.getRects = f.getRects.bind(wS(f)), f;
    }
    var a = r.prototype;
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
    }, r;
  }(i.PureComponent), t.displayName = "withBoundingRects(" + (e.displayName || "") + ")", t;
}
var _g = /* @__PURE__ */ ue.createContext({
  isFlippedVertically: !1,
  isFlippedHorizontally: !1
}), AS = _g.Provider;
_g.Consumer;
var PS = ["children", "getRects", "left", "offsetLeft", "offsetTop", "parentRect", "rect", "style", "top", "unstyled", "nodeRef"];
function lc() {
  return lc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, lc.apply(this, arguments);
}
function RS(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Ng(e) {
  var t = e.children;
  e.getRects;
  var n = e.left, r = n === void 0 ? 0 : n, a = e.offsetLeft, o = a === void 0 ? 10 : a, f = e.offsetTop, s = f === void 0 ? 10 : f, c = e.parentRect, d = e.rect, g = e.style, y = g === void 0 ? Mg : g, v = e.top, E = v === void 0 ? 0 : v, k = e.unstyled, M = k === void 0 ? !1 : k, T = e.nodeRef, m = RS(e, PS), D, L = !1, _ = !1;
  if (d && c) {
    var N = r, R = E;
    if (c.width) {
      var j = N + o + d.width - c.width, H = d.width - N - o;
      L = j > 0 && j > H;
    } else {
      var Y = N + o + d.width - window.innerWidth, Q = d.width - N - o;
      L = Y > 0 && Y > Q;
    }
    if (c.height) {
      var re = R + s + d.height - c.height, K = d.height - R - s;
      _ = re > 0 && re > K;
    } else
      _ = R + s + d.height > window.innerHeight;
    N = L ? N - d.width - o : N + o, R = _ ? R - d.height - s : R + s, N = Math.round(N), R = Math.round(R), D = "translate(" + N + "px, " + R + "px)";
  }
  return /* @__PURE__ */ i.createElement(kS, lc({
    ref: T,
    style: lc({
      left: 0,
      top: 0,
      transform: D
    }, !M && y)
  }, m), /* @__PURE__ */ i.createElement(AS, {
    value: {
      isFlippedVertically: !_,
      isFlippedHorizontally: !L
    }
  }, t));
}
Ng.propTypes = {
  nodeRef: fe.oneOfType([fe.string, fe.func, fe.object])
};
const Fg = CS(Ng);
var nl = /* @__PURE__ */ function() {
  function e(n) {
    var r = n.x, a = r === void 0 ? 0 : r, o = n.y, f = o === void 0 ? 0 : o;
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
function LS(e, t) {
  return new nl({
    x: e.x + t.x,
    y: e.y + t.y
  });
}
function DS(e, t) {
  return new nl({
    x: e.x - t.x,
    y: e.y - t.y
  });
}
const OS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Point: nl,
  subtractPoints: DS,
  sumPoints: LS
}, Symbol.toStringTag, { value: "Module" }));
function MS(e) {
  return !!e && e instanceof Element;
}
function _S(e) {
  return !!e && (e instanceof SVGElement || "ownerSVGElement" in e);
}
function NS(e) {
  return !!e && "createSVGPoint" in e;
}
function FS(e) {
  return !!e && "getScreenCTM" in e;
}
function $S(e) {
  return !!e && "changedTouches" in e;
}
function zS(e) {
  return !!e && "clientX" in e;
}
function BS(e) {
  return !!e && (e instanceof Event || "nativeEvent" in e && e.nativeEvent instanceof Event);
}
function hs() {
  return hs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, hs.apply(this, arguments);
}
var Hd = {
  x: 0,
  y: 0
};
function IS(e) {
  if (!e)
    return hs({}, Hd);
  if ($S(e))
    return e.changedTouches.length > 0 ? {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    } : hs({}, Hd);
  if (zS(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  var t = e == null ? void 0 : e.target, n = t && "getBoundingClientRect" in t ? t.getBoundingClientRect() : null;
  return n ? {
    x: n.x + n.width / 2,
    y: n.y + n.height / 2
  } : hs({}, Hd);
}
function bf(e, t) {
  if (!e || !t)
    return null;
  var n = IS(t), r = _S(e) ? e.ownerSVGElement : e, a = FS(r) ? r.getScreenCTM() : null;
  if (NS(r) && a) {
    var o = r.createSVGPoint();
    return o.x = n.x, o.y = n.y, o = o.matrixTransform(a.inverse()), new nl({
      x: o.x,
      y: o.y
    });
  }
  var f = e.getBoundingClientRect();
  return new nl({
    x: n.x - f.left - e.clientLeft,
    y: n.y - f.top - e.clientTop
  });
}
function Sf(e, t) {
  if (MS(e) && t)
    return bf(e, t);
  if (BS(e)) {
    var n = e, r = n.target;
    if (r)
      return bf(r, n);
  }
  return null;
}
const HS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  localPoint: Sf,
  touchPoint: bf
}, Symbol.toStringTag, { value: "Module" })), WS = new vm(), $g = (e) => {
  const { tableData: t, config: n, formatNumber: r, capitalize: a, formatDate: o, formatTooltipsDate: f, parseDate: s, setSharedFilter: c } = ue.useContext(bt), { xScale: d, yScale: g, showTooltip: y, hideTooltip: v } = e, { xAxis: E, visualizationType: k, orientation: M, yAxis: T, runtime: m } = n, D = WS.applySuppression(t, n.suppressedData), L = (W, se) => {
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
    const ce = Sf(W), { x: he, y: ie } = ce, { data: V, arc: Z } = se ?? {}, ne = j(he - Number(n.yAxis.size || 0)), Ae = k !== "Pie" ? n.series.filter((oe) => oe.tooltip === !0).map((oe) => oe.dataKey) : n.series.map((oe) => oe.dataKey);
    Ae.push(n.xAxis.dataKey), n.visualizationType === "Forecasting" && n.series.map((oe) => {
      oe.confidenceIntervals.map((we) => {
        we.showInTooltip && (Ae.push(we.high), Ae.push(we.low));
      });
    });
    function ve(oe) {
      let we = [];
      for (let Ce in oe)
        oe.hasOwnProperty(Ce) && we.push(oe[Ce].name);
      return we;
    }
    Ae.push(...ve(n.columns)), Ae.push(...ve(n.columns));
    const Re = Q(ne, Ae), le = D.filter((oe) => oe[E.dataKey] === H(ie)), _e = M === "vertical" ? Re : le, Be = (oe) => {
      const we = n.series.filter((Ie) => Ie.dataKey === oe)[0];
      return we != null && we.axis ? String(we.axis).toLowerCase() : "left";
    }, ge = (() => {
      var Ue, qe, at;
      const oe = n.columns, we = [], Ce = [];
      for (const [Qe, rt] of Object.entries(oe)) {
        const Ke = {
          addColPrefix: n.columns[Qe].prefix,
          addColSuffix: n.columns[Qe].suffix,
          addColRoundTo: n.columns[Qe].roundToPlace ? n.columns[Qe].roundToPlace : "",
          addColCommas: n.columns[Qe].commas
        };
        let ze = null;
        n.visualizationType === "Pie" ? ze = Z == null ? void 0 : Z.data[rt.name] : ze = (Ue = _e[0]) == null ? void 0 : Ue[rt.name];
        const Me = xm(ze, "left", !0, n, Ke);
        rt.tooltips && we.push([rt.label, Me]);
      }
      const Ie = [];
      return we.forEach((Qe) => {
        Ie.push([Qe[0], Qe[1]]);
      }), k === "Pie" && Ce.push(
        // ignore
        [n.xAxis.dataKey, V],
        [n.runtime.yAxis.dataKey, r(Z == null ? void 0 : Z.data[n.runtime.yAxis.dataKey])],
        ["Percent", `${Math.round(((Z == null ? void 0 : Z.endAngle) - (Z == null ? void 0 : Z.startAngle)) * 180 / Math.PI / 360 * 100) + "%"}`]
      ), k === "Forest Plot" && Ce.push([n.xAxis.dataKey, H(ie)]), k !== "Pie" && k !== "Forest Plot" && Ce.push(
        ...(at = (qe = re()) == null ? void 0 : qe.filter((Qe) => {
          var rt, Ke;
          return ((rt = n.series) == null ? void 0 : rt.find((ze) => ze.dataKey === Qe && (ze == null ? void 0 : ze.tooltip))) || ((Ke = n.xAxis) == null ? void 0 : Ke.dataKey) == Qe;
        })) == null ? void 0 : at.flatMap((Qe) => {
          var Ke, ze, Me;
          let rt = Qe === n.xAxis.dataKey ? (Ke = _e[0]) == null ? void 0 : Ke[Qe] : r((ze = _e[0]) == null ? void 0 : ze[Qe], Be(Qe));
          return (Me = _e == null ? void 0 : _e[0]) != null && Me[Qe] ? [[Qe, rt, Be(Qe)]] : [];
        })
      ), [...Ce, ...Ie];
    })();
    if (!ge)
      return;
    const Le = L(ge, ce);
    y(Le);
  }, N = () => {
    n.visualizationType === "Area Chart" ? setTimeout(() => {
      v();
    }, 3e3) : v();
  }, R = (W) => {
    if (n.xAxis.type === "categorical" || n.visualizationType === "Combo") {
      let se = d.step();
      const he = Math.floor(Number(W) / se);
      return d.domain()[he - 1];
    }
    if (Sn(n.xAxis) && n.visualizationType !== "Combo") {
      const se = Yh((V) => s(V[n.xAxis.dataKey])).left, ce = d.invert(d(W)), he = se(n.data, ce, 1);
      return s(n.data[he - 1][n.xAxis.dataKey]);
    }
  }, j = (W, se = !1) => {
    if (k !== "Pie" && M !== "horizontal") {
      if (d.type === "point" || E.type === "continuous" || Sn(E)) {
        let ce = null, he = Number.MAX_VALUE, ie = W;
        return D.forEach((V) => {
          const Z = Sn(E) ? d(s(V[E.dataKey])) : d(V[E.dataKey]);
          let ne = n.barHeight;
          const Ae = Math.abs(Number(Z - ie + (se ? ne * 2 : 0)));
          Ae <= he && (he = Ae, ce = (Sn(E), V[E.dataKey]));
        }), ce;
      }
      if (n.xAxis.type === "categorical" || k === "Combo" && M !== "horizontal" && k !== "Forest Plot") {
        let he = (d.range()[1] - d.range()[0]) / (d.domain().length + 1);
        const V = Math.floor((Number(W) - he / 2) / he);
        return d.domain()[V];
      }
      if (Sn(E) && k !== "Combo" && M !== "horizontal") {
        const ce = Yh((Z) => s(Z[n.xAxis.dataKey])).left, he = d.invert(W), ie = ce(n.data, he, 1);
        return s(n.data[ie - 1][n.xAxis.dataKey]);
      }
    }
  }, H = (W, se) => {
    if (k === "Pie")
      return;
    let ce = Number.MAX_VALUE, he = null;
    return D.forEach((ie, V) => {
      const Z = g(k !== "Forest Plot" ? ie[n.xAxis.dataKey] : V), ne = Math.abs(Z - W);
      ne < ce && (ce = ne, he = se ? ie[se] : ie[n.xAxis.dataKey]);
    }), he;
  }, Y = (W) => {
    var se, ce;
    try {
      const he = Sf(W), { x: ie } = he;
      if (!ie)
        throw new Error("COVE: no x value in handleTooltipClick.");
      let V = j(ie, !0), Z = (se = n.data) == null ? void 0 : se.filter((ne) => ne[n.xAxis.dataKey] === V);
      if (!V)
        throw new Error("COVE: no closest x scale value in handleTooltipClick");
      if (Sn(E) && V && (V = new Date(V), V = o(V), Z = (ce = n.data) == null ? void 0 : ce.filter((ne) => o(new Date(ne[n.xAxis.dataKey])) === V)), !Z[0])
        throw new Error(`COVE: no data found matching the closest xScale value: ${V}`);
      c && (n != null && n.uid) && (Z != null && Z[0]) && c(n.uid, Z[0]);
    } catch (he) {
      console.error(he.message);
    }
  }, Q = (W, se) => {
    try {
      let ce;
      return E.type === "categorical" ? ce = D.filter((ie) => ie[E.dataKey] === W) : ce = D.filter((ie) => ie[E.dataKey] === W), !ce || ce.length === 0 ? [] : ce.map((ie) => Object.fromEntries(Object.entries(ie).filter(([V, Z]) => se.includes(V))));
    } catch (ce) {
      console.error("COVE", ce);
    }
  }, re = () => {
    var W;
    try {
      let se, ce = [], he = [];
      if ((W = n.series) == null || W.forEach((ie) => {
        ie.type === "Forecasting" && (ce.push(ie.stageColumn), ie == null || ie.confidenceIntervals.forEach((V) => {
          V.showInTooltip === !0 && (he.push(V.low), he.push(V.high));
        }));
      }), !n.dashboard)
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
      return n.dashboard && (se = [m.xAxis.dataKey, ...m == null ? void 0 : m.barSeriesKeys, ...m == null ? void 0 : m.lineSeriesKeys, ...ce, ...he]), se;
    } catch (se) {
      console.error("COVE", se);
    }
  }, K = (W) => {
    const { dataXPosition: se, dataYPosition: ce } = W;
    return {
      opacity: n.tooltips.opacity ? n.tooltips.opacity / 100 : 1,
      position: "absolute",
      backgroundColor: "white",
      borderRadius: "4px",
      transform: `translate(${se}px, ${Number(ce)}px)`
    };
  }, q = (W) => {
    var ce, he;
    let se = n.series.filter((ie) => ie.dataKey === W);
    return (ce = se[0]) != null && ce.name ? (he = se[0]) == null ? void 0 : he.name : W;
  };
  return {
    getIncludedTooltipSeries: re,
    getXValueFromCoordinate: j,
    getXValueFromCoordinateDate: R,
    getYScaleValues: Q,
    handleTooltipClick: Y,
    handleTooltipMouseOff: N,
    handleTooltipMouseOver: _,
    TooltipListItem: ({ item: W }) => {
      const [se, ce] = W, [he, ie, V] = ce;
      if (k === "Forest Plot")
        return he === n.xAxis.dataKey ? /* @__PURE__ */ i.createElement("li", { className: "tooltip-heading" }, `${a(n.xAxis.dataKey ? `${n.xAxis.dataKey}: ` : "")} ${Sn(T) ? o(s(he, !1)) : ie}`) : /* @__PURE__ */ i.createElement("li", { className: "tooltip-body" }, `${q(he)}: ${r(ie, "left")}`);
      const Z = n.tooltips.dateDisplayFormat ? f(s(ie, !1)) : o(s(ie, !1));
      return k === "Bar" && M === "horizontal" && he === n.xAxis.dataKey ? /* @__PURE__ */ i.createElement("li", { className: "tooltip-heading" }, `${a(n.runtime.yAxis.label ? `${n.runtime.yAxis.label}: ` : "")} ${n.xAxis.type === "date" ? Z : ie}`) : he === n.xAxis.dataKey ? /* @__PURE__ */ i.createElement("li", { className: "tooltip-heading" }, `${a(n.runtime.xAxis.label ? `${n.runtime.xAxis.label}: ` : "")} ${Sn(E) ? Z : ie}`) : /* @__PURE__ */ i.createElement("li", { className: "tooltip-body" }, `${q(he)}: ${ie}`);
    },
    tooltipStyles: K
  };
};
function uh(e, { threshold: t = 0, root: n = null, rootMargin: r = "0%", freezeOnceVisible: a = !1 }) {
  const [o, f] = ue.useState(), s = (o == null ? void 0 : o.isIntersecting) && a, c = ([d]) => {
    f(d);
  };
  return ue.useEffect(() => {
    setTimeout(() => {
      const d = e == null ? void 0 : e.current;
      if (!!!window.IntersectionObserver || s || !d)
        return;
      const y = { threshold: t, root: n, rootMargin: r }, v = new IntersectionObserver(c, y);
      return v.observe(d), () => v.disconnect();
    }, 500);
  }, [e, t, n, r, s]), o;
}
const Ef = (e, t = !1) => {
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
var VS = ["flexDirection", "alignItems", "margin", "display", "children"];
function kf() {
  return kf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, kf.apply(this, arguments);
}
function jS(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function sc(e) {
  var t = e.flexDirection, n = t === void 0 ? "row" : t, r = e.alignItems, a = r === void 0 ? "center" : r, o = e.margin, f = o === void 0 ? "0" : o, s = e.display, c = s === void 0 ? "flex" : s, d = e.children, g = jS(e, VS);
  return /* @__PURE__ */ i.createElement("div", kf({
    className: "visx-legend-item",
    style: {
      display: c,
      alignItems: a,
      flexDirection: n,
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
var US = ["flex", "label", "margin", "align", "children"];
function wf() {
  return wf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, wf.apply(this, arguments);
}
function KS(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function uc(e) {
  var t = e.flex, n = t === void 0 ? "1" : t, r = e.label, a = e.margin, o = a === void 0 ? "5px 0" : a, f = e.align, s = f === void 0 ? "left" : f, c = e.children, d = KS(e, US);
  return /* @__PURE__ */ i.createElement("div", wf({
    className: "visx-legend-label",
    style: {
      justifyContent: s,
      display: "flex",
      flex: n,
      margin: o
    }
  }, d), c || r);
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
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Tf.apply(this, arguments);
}
function ch(e) {
  var t = e.fill, n = e.width, r = e.height, a = e.style;
  return /* @__PURE__ */ i.createElement("div", {
    style: Tf({
      width: n,
      height: r,
      background: t
    }, a)
  });
}
ch.propTypes = {
  fill: fe.string,
  width: fe.oneOfType([fe.string, fe.number]),
  height: fe.oneOfType([fe.string, fe.number])
};
function zg(e) {
  var t = e.fill, n = e.width, r = e.height, a = e.style, o = typeof n == "string" || typeof n > "u" ? 0 : n, f = typeof r == "string" || typeof r > "u" ? 0 : r, s = Math.max(o, f), c = s / 2;
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
  fill: fe.string,
  width: fe.oneOfType([fe.string, fe.number]),
  height: fe.oneOfType([fe.string, fe.number])
};
function Bg(e) {
  var t = e.fill, n = e.width, r = e.height, a = e.style, o = typeof r == "string" || typeof r > "u" ? 0 : r, f = typeof (a == null ? void 0 : a.strokeWidth) == "number" ? a == null ? void 0 : a.strokeWidth : 2;
  return /* @__PURE__ */ i.createElement("svg", {
    width: n,
    height: r
  }, /* @__PURE__ */ i.createElement(nt, {
    top: o / 2 - f / 2
  }, /* @__PURE__ */ i.createElement("line", {
    x1: 0,
    x2: n,
    y1: 0,
    y2: 0,
    stroke: t,
    strokeWidth: f,
    style: a
  })));
}
Bg.propTypes = {
  fill: fe.string,
  width: fe.oneOfType([fe.string, fe.number]),
  height: fe.oneOfType([fe.string, fe.number])
};
function ps() {
  return ps = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ps.apply(this, arguments);
}
var Wd = function() {
};
function YS(e) {
  var t = e.shape, n = t === void 0 ? "rect" : t, r = e.fill, a = r === void 0 ? Wd : r, o = e.size, f = o === void 0 ? Wd : o, s = e.width, c = e.height, d = e.label, g = e.item, y = e.itemIndex, v = e.shapeStyle, E = v === void 0 ? Wd : v, k = {
    width: s,
    height: c,
    item: g,
    itemIndex: y,
    label: d,
    fill: a(ps({}, d)),
    size: f(ps({}, d)),
    style: E(ps({}, d))
  };
  return typeof n == "string" ? n === "circle" ? /* @__PURE__ */ i.createElement(zg, k) : n === "line" ? /* @__PURE__ */ i.createElement(Bg, k) : /* @__PURE__ */ i.createElement(ch, k) : /* @__PURE__ */ i.isValidElement(n) ? /* @__PURE__ */ i.cloneElement(n, k) : n ? /* @__PURE__ */ i.createElement(n, k) : null;
}
function cc() {
  return cc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, cc.apply(this, arguments);
}
function Ig(e) {
  var t = e.shape, n = t === void 0 ? ch : t, r = e.width, a = e.height, o = e.margin, f = e.label, s = e.item, c = e.itemIndex, d = e.fill, g = e.size, y = e.shapeStyle;
  return /* @__PURE__ */ i.createElement("div", {
    className: "visx-legend-shape",
    style: {
      display: "flex",
      width: g ? g(cc({}, f)) : r,
      height: g ? g(cc({}, f)) : a,
      margin: o
    }
  }, YS({
    shape: n,
    item: s,
    itemIndex: c,
    label: f,
    width: r,
    height: a,
    fill: d,
    shapeStyle: y
  }));
}
Ig.propTypes = {
  itemIndex: fe.number.isRequired,
  margin: fe.oneOfType([fe.string, fe.number]),
  width: fe.oneOfType([fe.string, fe.number]),
  height: fe.oneOfType([fe.string, fe.number])
};
function Hg(e) {
  return e && typeof e == "object" && "value" in e && typeof e.value < "u" ? e.value : e;
}
function Fp(e) {
  return String(Hg(e));
}
function XS(e) {
  var t = e.scale, n = e.labelFormat;
  return function(r, a) {
    return {
      datum: r,
      index: a,
      text: "" + n(r, a),
      value: t(r)
    };
  };
}
var qS = ["className", "style", "scale", "shape", "domain", "fill", "size", "labelFormat", "labelTransform", "shapeWidth", "shapeHeight", "shapeMargin", "shapeStyle", "labelAlign", "labelFlex", "labelMargin", "itemMargin", "direction", "itemDirection", "legendLabelProps", "children"];
function ms() {
  return ms = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ms.apply(this, arguments);
}
function GS(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var ZS = {
  display: "flex"
};
function Wg(e) {
  var t = e.className, n = e.style, r = n === void 0 ? ZS : n, a = e.scale, o = e.shape, f = e.domain, s = e.fill, c = s === void 0 ? Fp : s, d = e.size, g = d === void 0 ? Fp : d, y = e.labelFormat, v = y === void 0 ? Hg : y, E = e.labelTransform, k = E === void 0 ? XS : E, M = e.shapeWidth, T = M === void 0 ? 15 : M, m = e.shapeHeight, D = m === void 0 ? 15 : m, L = e.shapeMargin, _ = L === void 0 ? "2px 4px 2px 0" : L, N = e.shapeStyle, R = e.labelAlign, j = R === void 0 ? "left" : R, H = e.labelFlex, Y = H === void 0 ? "1" : H, Q = e.labelMargin, re = Q === void 0 ? "0 4px" : Q, K = e.itemMargin, q = K === void 0 ? "0" : K, me = e.direction, W = me === void 0 ? "column" : me, se = e.itemDirection, ce = se === void 0 ? "row" : se, he = e.legendLabelProps, ie = e.children, V = GS(e, qS), Z = f || ("domain" in a ? a.domain() : []), ne = k({
    scale: a,
    labelFormat: v
  }), Ae = Z.map(ne);
  return ie ? /* @__PURE__ */ i.createElement(i.Fragment, null, ie(Ae)) : /* @__PURE__ */ i.createElement("div", {
    className: wn("visx-legend", t),
    style: ms({}, r, {
      flexDirection: W
    })
  }, Ae.map(function(ve, Re) {
    return /* @__PURE__ */ i.createElement(sc, ms({
      key: "legend-" + ve.text + "-" + Re,
      margin: q,
      flexDirection: ce
    }, V), /* @__PURE__ */ i.createElement(Ig, {
      shape: o,
      height: D,
      width: T,
      margin: _,
      item: Z[Re],
      itemIndex: Re,
      label: ve,
      fill: c,
      size: g,
      shapeStyle: N
    }), /* @__PURE__ */ i.createElement(uc, ms({
      label: ve.text,
      flex: Y,
      margin: re,
      align: j
    }, he)));
  }));
}
Wg.propTypes = {
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
function QS(e) {
  return /* @__PURE__ */ i.createElement(Wg, e);
}
function JS(e) {
  let t = ["legend-container"], n = ["legend-container__inner"];
  return e.legend.position === "left" && t.push("left"), e.legend.position === "bottom" && (t.push("bottom"), n.push("bottom")), e.legend.position === "bottom" && e.legend.singleRow && n.push("single-row"), e.legend.reverseLabelOrder && (n.push("d-flex"), n.push("flex-column-reverse")), e.legend.position === "bottom" && e.legend.verticalSorted && n.push("vertical-sorted"), {
    containerClasses: t,
    innerClasses: n
  };
}
const Ac = (e, t) => {
  var M;
  const { formatDate: n, parseDate: r } = ue.useContext(bt);
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
  }, k.formatDates = (T) => T.map((m) => m ? n(r(m)) : !1), k.findDuplicates = (T) => {
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
}, Vg = ue.forwardRef(({ config: e, colorScale: t, seriesHighlight: n, highlight: r, highlightReset: a, currentViewport: o, formatLabels: f, skipId: s = "legend" }, c) => {
  const { innerClasses: d, containerClasses: g } = JS(e), { runtime: y, orientation: v, legend: E } = e;
  if (!E)
    return null;
  const k = E.position === "bottom" || ["sm", "xs", "xxs"].includes(o), M = {
    marginBottom: k ? "15px" : "0px",
    marginTop: k ? "15px" : "0px"
  }, { HighLightedBarUtils: T } = Ac(e);
  let m = T.findDuplicates(e.highlightedBarValues);
  const D = ["sm", "xs", "xxs"].includes(o) ? { fontSize: "11px" } : null;
  return /* @__PURE__ */ i.createElement("aside", { ref: c, style: M, id: s || "legend", className: g.join(" "), role: "region", "aria-label": "legend", tabIndex: 0 }, E.label && /* @__PURE__ */ i.createElement("h3", null, Mi(E.label)), E.description && /* @__PURE__ */ i.createElement("p", { style: D }, Mi(E.description)), /* @__PURE__ */ i.createElement(QS, { scale: t, itemDirection: "row", labelMargin: "0 20px 0 0", shapeMargin: "0 10px 0" }, (L) => {
    var _, N;
    return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: d.join(" ") }, f(L).map((R, j) => {
      var Q, re, K, q;
      let H = ["legend-item", `legend-text--${R.text.replace(" ", "").toLowerCase()}`], Y = R.datum;
      if (e.exclusions.active && ((Q = e.exclusions.keys) != null && Q.includes(Y)))
        return null;
      if (y.seriesLabels) {
        let me = e.runtime.seriesLabelsAll.indexOf(Y);
        Y = e.runtime.seriesKeys[me], ((re = y == null ? void 0 : y.forecastingSeriesKeys) == null ? void 0 : re.length) > 0 && (Y = R.text);
      }
      return n.length > 0 && n.includes(Y) === !1 && H.push("inactive"), /* @__PURE__ */ i.createElement(
        sc,
        {
          className: H.join(" "),
          tabIndex: 0,
          key: `legend-quantile-${j}`,
          onKeyDown: (me) => {
            me.key === "Enter" && (me.preventDefault(), r(R));
          },
          onClick: (me) => {
            me.preventDefault(), r(R);
          },
          role: "button"
        },
        /* @__PURE__ */ i.createElement("div", null, e.visualizationType === "Line" && e.legend.lineMode ? /* @__PURE__ */ i.createElement("svg", { width: 40, height: 20 }, /* @__PURE__ */ i.createElement(en, { from: { x: 10, y: 10 }, to: { x: 40, y: 10 }, stroke: R.value, strokeWidth: 2, strokeDasharray: Cf((K = e.series[j]) != null && K.type ? (q = e.series[j]) == null ? void 0 : q.type : "") })) : /* @__PURE__ */ i.createElement("div", { style: { display: "flex", flexDirection: "column" } }, /* @__PURE__ */ i.createElement(Ih, { viewport: o, margin: "0", fill: R.value, display: !0 }))),
        /* @__PURE__ */ i.createElement(uc, { style: D, align: "left", margin: "0 0 0 4px" }, R.text)
      );
    }), m.map((R, j) => {
      let H = "legend-item", Y = R.legendLabel;
      return Y ? (n.length > 0 && n.includes(Y) === !1 && (H += " inactive"), /* @__PURE__ */ i.createElement(
        sc,
        {
          className: H,
          tabIndex: 0,
          key: `legend-quantile-${j}`,
          onKeyDown: (Q) => {
            Q.key === "Enter" && (Q.preventDefault(), r(R.legendLabel));
          },
          onClick: (Q) => {
            Q.preventDefault(), r(R.legendLabel);
          }
        },
        /* @__PURE__ */ i.createElement(Ih, { fill: "transparent", borderColor: R.color ? R.color : "rgba(255, 102, 1)" }),
        " ",
        /* @__PURE__ */ i.createElement(uc, { align: "left", margin: "0 0 0 4px" }, R.legendLabel ? R.legendLabel : R.value)
      )) : !1;
    })), /* @__PURE__ */ i.createElement(i.Fragment, null, ((_ = e == null ? void 0 : e.preliminaryData) == null ? void 0 : _.some((R) => R.label)) && ["Line", "Combo"].includes(e.visualizationType) && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("div", { className: e.legend.singleRow && k ? "legend-container__inner bottom single-row" : "" }, (N = e == null ? void 0 : e.preliminaryData) == null ? void 0 : N.map((R, j) => /* @__PURE__ */ i.createElement(i.Fragment, null, R.label && /* @__PURE__ */ i.createElement("div", { key: j, className: "legend-preliminary" }, /* @__PURE__ */ i.createElement("svg", null, R.style.includes("Dashed") ? /* @__PURE__ */ i.createElement(en, { from: { x: 10, y: 10 }, to: { x: 40, y: 10 }, stroke: "#000", strokeWidth: 2, strokeDasharray: Cf(R.style) }) : /* @__PURE__ */ i.createElement("circle", { r: 6, strokeWidth: 2, stroke: "#000", cx: 22, cy: 10, fill: "transparent" })), /* @__PURE__ */ i.createElement("span", null, " ", R.label))))))));
  }), n.length > 0 && /* @__PURE__ */ i.createElement(Hf, { onClick: (L) => a(L), style: { marginTop: "1rem" } }, "Reset"));
});
function dh(e) {
  return Cy({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" } }] })(e);
}
const jg = (e, t, n, r) => (a) => {
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
    m = m.slice(0, n.length);
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
        var Y, Q, re, K;
        let j = (Y = Uu[N.color]) != null && Y[2] ? (Q = Uu[N.color]) == null ? void 0 : Q[2] : (re = or[N.color]) != null && re[2] ? (K = or[N.color]) == null ? void 0 : K[2] : "#ccc";
        const H = {
          datum: N.key,
          index: R,
          text: N.key,
          value: j
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
      value: r(L)
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
}), eE = (e) => {
  const { transformedData: t, config: n, colorScale: r, currentViewport: a, dimensions: o, highlight: f, highlightReset: s, seriesHighlight: c } = ue.useContext(bt), { tooltipData: d, showTooltip: g, hideTooltip: y, tooltipOpen: v, tooltipLeft: E, tooltipTop: k } = Og(), { handleTooltipMouseOver: M, handleTooltipMouseOff: T, TooltipListItem: m } = $g({
    xScale: !1,
    yScale: !1,
    showTooltip: g,
    hideTooltip: y
  }), [D, L] = ue.useState(void 0), [_, N] = ue.useState(!1), R = Object.values(n.columns).filter((Z) => Z.showInViz), j = R.length > 0, H = j ? "pivotColumn" : void 0, Y = ue.useMemo(() => {
    if (j) {
      let Z = [];
      const ne = n.yAxis.dataKey, Ae = R.map((le) => le.name), ve = [ne, ...Ae], Re = n.xAxis.dataKey;
      return t.forEach((le) => {
        ve.forEach((_e) => {
          const Be = le[_e];
          Be && Z.push({
            [H]: Be,
            [Re]: `${le[Re]} - ${_e}`
          });
        });
      }), Z;
    }
    return t;
  }, [t, j]), Q = ue.useMemo(() => {
    if (j) {
      const Z = {};
      Y.forEach((ve) => {
        Z[ve[n.xAxis.dataKey]] || (Z[ve[n.xAxis.dataKey]] = !0);
      });
      const ne = Object.entries(Z).length;
      let Ae = n.customColors || or[n.palette];
      return Ae = Ae.slice(0, ne), Nm({
        domain: Object.keys(Z),
        range: Ae,
        unknown: null
      });
    }
    return r;
  }, [r, j]), re = ue.useRef(), K = uh(re, {
    freezeOnceVisible: !1
  });
  ue.useEffect(() => {
    document.querySelector(".isEditor") && N((ne) => !0);
  }), ue.useEffect(() => {
    K != null && K.isIntersecting && n.animate && !_ && setTimeout(() => {
      N(!0);
    }, 500);
  }, [K == null ? void 0 : K.isIntersecting, n.animate]);
  const q = ({ arcs: Z, path: ne, getKey: Ae }) => {
    const ve = Db(Z, Ae, {
      from: Ru,
      enter: Ru,
      update: Ru,
      leave: Ru
    });
    return ue.useEffect(() => {
      const Re = setTimeout(() => {
        y();
      }, 500);
      return () => {
        clearTimeout(Re);
      };
    }, [d]), /* @__PURE__ */ i.createElement(i.Fragment, null, ve.map(({ item: Re, props: le, key: _e }, Be) => /* @__PURE__ */ i.createElement(nt, { className: Re.data[n.xAxis.dataKey], key: `${_e}-${Be}`, style: { opacity: n.legend.behavior === "highlight" && c.length > 0 && c.indexOf(Re.data[n.runtime.xAxis.dataKey]) === -1 ? 0.5 : 1 } }, /* @__PURE__ */ i.createElement(
      Cp.path,
      {
        d: Tb(
          [le.startAngle, le.endAngle],
          (Te, ge) => ne({
            ...Re,
            startAngle: Te,
            endAngle: ge
          })
        ),
        fill: Q(Re.data[n.runtime.xAxis.dataKey]),
        onMouseEnter: (Te) => M(Te, { data: Re.data[n.runtime.xAxis.dataKey], arc: Re }),
        onMouseLeave: (Te) => T()
      }
    ))), ve.map(({ item: Re, key: le }, _e) => {
      const [Be, Te] = ne.centroid(Re), ge = Re.endAngle - Re.startAngle >= 0.1;
      let Le = "#FFF";
      return Q(Re.data[n.runtime.xAxis.dataKey]) && (Le = Go(Le, Q(Re.data[n.runtime.xAxis.dataKey]))), /* @__PURE__ */ i.createElement(Cp.g, { key: `${le}${_e}` }, ge && /* @__PURE__ */ i.createElement(xt, { style: { fill: Le }, x: Be, y: Te, dy: ".33em", textAnchor: "middle", pointerEvents: "none" }, Math.round((Re.endAngle - Re.startAngle) * 180 / Math.PI / 360 * 100) + "%"));
    }));
  };
  let [me] = o;
  n && n.legend && !n.legend.hide && a === "lg" && (me = me * 0.73);
  const W = n.heights.vertical, se = Math.min(me, W) / 2, ce = W / 2, he = me / 2, ie = n.pieType === "Donut" ? 75 : se;
  ue.useEffect(() => {
    if (c.length > 0 && n.legend.behavior !== "highlight") {
      let Z = [];
      Y.forEach((ne) => {
        c.indexOf(ne[n.runtime.xAxis.dataKey]) !== -1 && Z.push(ne);
      }), L(Z);
    } else
      L(void 0);
  }, [c]);
  const V = jg(n, [], Y, Q);
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(_r, { component: "PieChart" }, /* @__PURE__ */ i.createElement("svg", { width: me, height: W, className: `animated-pie group ${n.animate === !1 || _ ? "animated" : ""}`, role: "img", "aria-label": Ef(n) }, /* @__PURE__ */ i.createElement(nt, { top: ce, left: he }, /* @__PURE__ */ i.createElement(
    V0,
    {
      data: D || Y,
      pieValue: (Z) => Z[H || n.runtime.yAxis.dataKey],
      pieSortValues: () => -1,
      innerRadius: se - ie,
      outerRadius: se
    },
    (Z) => /* @__PURE__ */ i.createElement(q, { ...Z, getKey: (ne) => ne.data[n.runtime.xAxis.dataKey] })
  ))), /* @__PURE__ */ i.createElement("div", { ref: re }), d && Object.entries(d.data).length > 0 && v && g && d.dataYPosition && d.dataXPosition && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${n.tooltips.opacity / 100}) !important`), /* @__PURE__ */ i.createElement(Fg, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: E, top: k }, /* @__PURE__ */ i.createElement("ul", null, typeof d == "object" && Object.entries(d.data).map((Z, ne) => /* @__PURE__ */ i.createElement(m, { item: Z, key: ne })))))), /* @__PURE__ */ i.createElement(Vg, { config: n, colorScale: Q, seriesHighlight: c, highlight: f, highlightReset: s, currentViewport: a, formatLabels: V }));
};
function As(e) {
  return e.split("-")[1];
}
function fh(e) {
  return e === "y" ? "height" : "width";
}
function zi(e) {
  return e.split("-")[0];
}
function Ps(e) {
  return ["top", "bottom"].includes(zi(e)) ? "x" : "y";
}
function $p(e, t, n) {
  let { reference: r, floating: a } = e;
  const o = r.x + r.width / 2 - a.width / 2, f = r.y + r.height / 2 - a.height / 2, s = Ps(t), c = fh(s), d = r[c] / 2 - a[c] / 2, g = s === "x";
  let y;
  switch (zi(t)) {
    case "top":
      y = { x: o, y: r.y - a.height };
      break;
    case "bottom":
      y = { x: o, y: r.y + r.height };
      break;
    case "right":
      y = { x: r.x + r.width, y: f };
      break;
    case "left":
      y = { x: r.x - a.width, y: f };
      break;
    default:
      y = { x: r.x, y: r.y };
  }
  switch (As(t)) {
    case "start":
      y[s] -= d * (n && g ? -1 : 1);
      break;
    case "end":
      y[s] += d * (n && g ? -1 : 1);
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
  var n;
  t === void 0 && (t = {});
  const { x: r, y: a, platform: o, rects: f, elements: s, strategy: c } = e, { boundary: d = "clippingAncestors", rootBoundary: g = "viewport", elementContext: y = "floating", altBoundary: v = !1, padding: E = 0 } = t, k = Ug(E), M = s[v ? y === "floating" ? "reference" : "floating" : y], T = gs(await o.getClippingRect({ element: (n = await (o.isElement == null ? void 0 : o.isElement(M))) == null || n ? M : M.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(s.floating)), boundary: d, rootBoundary: g, strategy: c })), m = y === "floating" ? { ...f.floating, x: r, y: a } : f.reference, D = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(s.floating)), L = await (o.isElement == null ? void 0 : o.isElement(D)) && await (o.getScale == null ? void 0 : o.getScale(D)) || { x: 1, y: 1 }, _ = gs(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: m, offsetParent: D, strategy: c }) : m);
  return { top: (T.top - _.top + k.top) / L.y, bottom: (_.bottom - T.bottom + k.bottom) / L.y, left: (T.left - _.left + k.left) / L.x, right: (_.right - T.right + k.right) / L.x };
}
const tE = Math.min, nE = Math.max;
function Af(e, t, n) {
  return nE(e, tE(t, n));
}
["top", "right", "bottom", "left"].reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const rE = { left: "right", right: "left", bottom: "top", top: "bottom" };
function dc(e) {
  return e.replace(/left|right|bottom|top/g, (t) => rE[t]);
}
function aE(e, t, n) {
  n === void 0 && (n = !1);
  const r = As(e), a = Ps(e), o = fh(a);
  let f = a === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (f = dc(f)), { main: f, cross: dc(f) };
}
const iE = { start: "end", end: "start" };
function Vd(e) {
  return e.replace(/start|end/g, (t) => iE[t]);
}
const oE = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: r, middlewareData: a, rects: o, initialPlacement: f, platform: s, elements: c } = t, { mainAxis: d = !0, crossAxis: g = !0, fallbackPlacements: y, fallbackStrategy: v = "bestFit", fallbackAxisSideDirection: E = "none", flipAlignment: k = !0, ...M } = e, T = zi(r), m = zi(f) === f, D = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), L = y || (m || !k ? [dc(f)] : function(re) {
      const K = dc(re);
      return [Vd(re), K, Vd(K)];
    }(f));
    y || E === "none" || L.push(...function(re, K, q, me) {
      const W = As(re);
      let se = function(ce, he, ie) {
        const V = ["left", "right"], Z = ["right", "left"], ne = ["top", "bottom"], Ae = ["bottom", "top"];
        switch (ce) {
          case "top":
          case "bottom":
            return ie ? he ? Z : V : he ? V : Z;
          case "left":
          case "right":
            return he ? ne : Ae;
          default:
            return [];
        }
      }(zi(re), q === "start", me);
      return W && (se = se.map((ce) => ce + "-" + W), K && (se = se.concat(se.map(Vd)))), se;
    }(f, k, E, D));
    const _ = [f, ...L], N = await Kg(t, M), R = [];
    let j = ((n = a.flip) == null ? void 0 : n.overflows) || [];
    if (d && R.push(N[T]), g) {
      const { main: re, cross: K } = aE(r, o, D);
      R.push(N[re], N[K]);
    }
    if (j = [...j, { placement: r, overflows: R }], !R.every((re) => re <= 0)) {
      var H, Y;
      const re = (((H = a.flip) == null ? void 0 : H.index) || 0) + 1, K = _[re];
      if (K)
        return { data: { index: re, overflows: j }, reset: { placement: K } };
      let q = (Y = j.find((me) => me.overflows[0] <= 0)) == null ? void 0 : Y.placement;
      if (!q)
        switch (v) {
          case "bestFit": {
            var Q;
            const me = (Q = j.map((W) => [W.placement, W.overflows.filter((se) => se > 0).reduce((se, ce) => se + ce, 0)]).sort((W, se) => W[1] - se[1])[0]) == null ? void 0 : Q[0];
            me && (q = me);
            break;
          }
          case "initialPlacement":
            q = f;
        }
      if (r !== q)
        return { reset: { placement: q } };
    }
    return {};
  } };
}, lE = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: r } = t, a = await async function(o, f) {
      const { placement: s, platform: c, elements: d } = o, g = await (c.isRTL == null ? void 0 : c.isRTL(d.floating)), y = zi(s), v = As(s), E = Ps(s) === "x", k = ["left", "top"].includes(y) ? -1 : 1, M = g && E ? -1 : 1, T = typeof f == "function" ? f(o) : f;
      let { mainAxis: m, crossAxis: D, alignmentAxis: L } = typeof T == "number" ? { mainAxis: T, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...T };
      return v && typeof L == "number" && (D = v === "end" ? -1 * L : L), E ? { x: D * M, y: m * k } : { x: m * k, y: D * M };
    }(t, e);
    return { x: n + a.x, y: r + a.y, data: a };
  } };
}, sE = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: r, placement: a } = t, { mainAxis: o = !0, crossAxis: f = !1, limiter: s = { fn: (T) => {
      let { x: m, y: D } = T;
      return { x: m, y: D };
    } }, ...c } = e, d = { x: n, y: r }, g = await Kg(t, c), y = Ps(zi(a)), v = y === "x" ? "y" : "x";
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
    return { ...M, data: { x: M.x - n, y: M.y - r } };
  } };
};
function wr(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function qr(e) {
  return wr(e).getComputedStyle(e);
}
const zp = Math.min, ys = Math.max, fc = Math.round;
function Yg(e) {
  const t = qr(e);
  let n = parseFloat(t.width), r = parseFloat(t.height);
  const a = e.offsetWidth, o = e.offsetHeight, f = fc(n) !== a || fc(r) !== o;
  return f && (n = a, r = o), { width: n, height: r, fallback: f };
}
function Va(e) {
  return qg(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Lu;
function Xg() {
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
function qg(e) {
  return e instanceof wr(e).Node;
}
function Bp(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof wr(e).ShadowRoot || e instanceof ShadowRoot;
}
function Pc(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: a } = qr(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(a);
}
function uE(e) {
  return ["table", "td", "th"].includes(Va(e));
}
function Pf(e) {
  const t = /firefox/i.test(Xg()), n = qr(e), r = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!r && r !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((a) => n.willChange.includes(a)) || ["paint", "layout", "strict", "content"].some((a) => {
    const o = n.contain;
    return o != null && o.includes(a);
  });
}
function Gg() {
  return !/^((?!chrome|android).)*safari/i.test(Xg());
}
function hh(e) {
  return ["html", "body", "#document"].includes(Va(e));
}
function Zg(e) {
  return Ba(e) ? e : e.contextElement;
}
const Qg = { x: 1, y: 1 };
function qo(e) {
  const t = Zg(e);
  if (!Gr(t))
    return Qg;
  const n = t.getBoundingClientRect(), { width: r, height: a, fallback: o } = Yg(t);
  let f = (o ? fc(n.width) : n.width) / r, s = (o ? fc(n.height) : n.height) / a;
  return f && Number.isFinite(f) || (f = 1), s && Number.isFinite(s) || (s = 1), { x: f, y: s };
}
function ws(e, t, n, r) {
  var a, o;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const f = e.getBoundingClientRect(), s = Zg(e);
  let c = Qg;
  t && (r ? Ba(r) && (c = qo(r)) : c = qo(e));
  const d = s ? wr(s) : window, g = !Gg() && n;
  let y = (f.left + (g && ((a = d.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / c.x, v = (f.top + (g && ((o = d.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / c.y, E = f.width / c.x, k = f.height / c.y;
  if (s) {
    const M = wr(s), T = r && Ba(r) ? wr(r) : r;
    let m = M.frameElement;
    for (; m && r && T !== M; ) {
      const D = qo(m), L = m.getBoundingClientRect(), _ = getComputedStyle(m);
      L.x += (m.clientLeft + parseFloat(_.paddingLeft)) * D.x, L.y += (m.clientTop + parseFloat(_.paddingTop)) * D.y, y *= D.x, v *= D.y, E *= D.x, k *= D.y, y += L.x, v += L.y, m = wr(m).frameElement;
    }
  }
  return { width: E, height: k, top: v, right: y + E, bottom: v + k, left: y, x: y, y: v };
}
function Ia(e) {
  return ((qg(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Rc(e) {
  return Ba(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Jg(e) {
  return ws(Ia(e)).left + Rc(e).scrollLeft;
}
function Ts(e) {
  if (Va(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || Bp(e) && e.host || Ia(e);
  return Bp(t) ? t.host : t;
}
function ey(e) {
  const t = Ts(e);
  return hh(t) ? t.ownerDocument.body : Gr(t) && Pc(t) ? t : ey(t);
}
function ty(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = ey(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = wr(r);
  return a ? t.concat(o, o.visualViewport || [], Pc(r) ? r : []) : t.concat(r, ty(r));
}
function Ip(e, t, n) {
  return t === "viewport" ? gs(function(r, a) {
    const o = wr(r), f = Ia(r), s = o.visualViewport;
    let c = f.clientWidth, d = f.clientHeight, g = 0, y = 0;
    if (s) {
      c = s.width, d = s.height;
      const v = Gg();
      (v || !v && a === "fixed") && (g = s.offsetLeft, y = s.offsetTop);
    }
    return { width: c, height: d, x: g, y };
  }(e, n)) : Ba(t) ? gs(function(r, a) {
    const o = ws(r, !0, a === "fixed"), f = o.top + r.clientTop, s = o.left + r.clientLeft, c = Gr(r) ? qo(r) : { x: 1, y: 1 };
    return { width: r.clientWidth * c.x, height: r.clientHeight * c.y, x: s * c.x, y: f * c.y };
  }(t, n)) : gs(function(r) {
    const a = Ia(r), o = Rc(r), f = r.ownerDocument.body, s = ys(a.scrollWidth, a.clientWidth, f.scrollWidth, f.clientWidth), c = ys(a.scrollHeight, a.clientHeight, f.scrollHeight, f.clientHeight);
    let d = -o.scrollLeft + Jg(r);
    const g = -o.scrollTop;
    return qr(f).direction === "rtl" && (d += ys(a.clientWidth, f.clientWidth) - s), { width: s, height: c, x: d, y: g };
  }(Ia(e)));
}
function Hp(e) {
  return Gr(e) && qr(e).position !== "fixed" ? e.offsetParent : null;
}
function Wp(e) {
  const t = wr(e);
  let n = Hp(e);
  for (; n && uE(n) && qr(n).position === "static"; )
    n = Hp(n);
  return n && (Va(n) === "html" || Va(n) === "body" && qr(n).position === "static" && !Pf(n)) ? t : n || function(r) {
    let a = Ts(r);
    for (; Gr(a) && !hh(a); ) {
      if (Pf(a))
        return a;
      a = Ts(a);
    }
    return null;
  }(e) || t;
}
function cE(e, t, n) {
  const r = Gr(t), a = Ia(t), o = ws(e, !0, n === "fixed", t);
  let f = { scrollLeft: 0, scrollTop: 0 };
  const s = { x: 0, y: 0 };
  if (r || !r && n !== "fixed")
    if ((Va(t) !== "body" || Pc(a)) && (f = Rc(t)), Gr(t)) {
      const c = ws(t, !0);
      s.x = c.x + t.clientLeft, s.y = c.y + t.clientTop;
    } else
      a && (s.x = Jg(a));
  return { x: o.left + f.scrollLeft - s.x, y: o.top + f.scrollTop - s.y, width: o.width, height: o.height };
}
const dE = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: a } = e;
  const o = n === "clippingAncestors" ? function(d, g) {
    const y = g.get(d);
    if (y)
      return y;
    let v = ty(d).filter((T) => Ba(T) && Va(T) !== "body"), E = null;
    const k = qr(d).position === "fixed";
    let M = k ? Ts(d) : d;
    for (; Ba(M) && !hh(M); ) {
      const T = qr(M), m = Pf(M);
      (k ? m || E : m || T.position !== "static" || !E || !["absolute", "fixed"].includes(E.position)) ? E = T : v = v.filter((D) => D !== M), M = Ts(M);
    }
    return g.set(d, v), v;
  }(t, this._c) : [].concat(n), f = [...o, r], s = f[0], c = f.reduce((d, g) => {
    const y = Ip(t, g, a);
    return d.top = ys(y.top, d.top), d.right = zp(y.right, d.right), d.bottom = zp(y.bottom, d.bottom), d.left = ys(y.left, d.left), d;
  }, Ip(t, s, a));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: r } = e;
  const a = Gr(n), o = Ia(n);
  if (n === o)
    return t;
  let f = { scrollLeft: 0, scrollTop: 0 }, s = { x: 1, y: 1 };
  const c = { x: 0, y: 0 };
  if ((a || !a && r !== "fixed") && ((Va(n) !== "body" || Pc(o)) && (f = Rc(n)), Gr(n))) {
    const d = ws(n);
    s = qo(n), c.x = d.x + n.clientLeft, c.y = d.y + n.clientTop;
  }
  return { width: t.width * s.x, height: t.height * s.y, x: t.x * s.x - f.scrollLeft * s.x + c.x, y: t.y * s.y - f.scrollTop * s.y + c.y };
}, isElement: Ba, getDimensions: function(e) {
  return Gr(e) ? Yg(e) : e.getBoundingClientRect();
}, getOffsetParent: Wp, getDocumentElement: Ia, getScale: qo, async getElementRects(e) {
  let { reference: t, floating: n, strategy: r } = e;
  const a = this.getOffsetParent || Wp, o = this.getDimensions;
  return { reference: cE(t, await a(n), r), floating: { x: 0, y: 0, ...await o(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => qr(e).direction === "rtl" }, Vp = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), a = { platform: dE, ...n }, o = { ...a.platform, _c: r };
  return (async (f, s, c) => {
    const { placement: d = "bottom", strategy: g = "absolute", middleware: y = [], platform: v } = c, E = y.filter(Boolean), k = await (v.isRTL == null ? void 0 : v.isRTL(s));
    if (v == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), E.filter((N) => {
      let { name: R } = N;
      return R === "autoPlacement" || R === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    f && s || console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
    let M = await v.getElementRects({ reference: f, floating: s, strategy: g }), { x: T, y: m } = $p(M, d, k), D = d, L = {}, _ = 0;
    for (let N = 0; N < E.length; N++) {
      const { name: R, fn: j } = E[N], { x: H, y: Y, data: Q, reset: re } = await j({ x: T, y: m, initialPlacement: d, placement: D, strategy: g, middlewareData: L, rects: M, platform: v, elements: { reference: f, floating: s } });
      T = H ?? T, m = Y ?? m, L = { ...L, [R]: { ...L[R], ...Q } }, _ > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), re && _ <= 50 && (_++, typeof re == "object" && (re.placement && (D = re.placement), re.rects && (M = re.rects === !0 ? await v.getElementRects({ reference: f, floating: s, strategy: g }) : re.rects), { x: T, y: m } = $p(M, D, k)), N = -1);
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
  var e = i, t = 60103, n = 60106;
  _a.Fragment = 60107;
  var r = 60108, a = 60114, o = 60109, f = 60110, s = 60112, c = 60113, d = 60120, g = 60115, y = 60116, v = 60121, E = 60122, k = 60117, M = 60129, T = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var m = Symbol.for;
    t = m("react.element"), n = m("react.portal"), _a.Fragment = m("react.fragment"), r = m("react.strict_mode"), a = m("react.profiler"), o = m("react.provider"), f = m("react.context"), s = m("react.forward_ref"), c = m("react.suspense"), d = m("react.suspense_list"), g = m("react.memo"), y = m("react.lazy"), v = m("react.block"), E = m("react.server.block"), k = m("react.fundamental"), m("react.scope"), m("react.opaque.id"), M = m("react.debug_trace_mode"), m("react.offscreen"), T = m("react.legacy_hidden");
  }
  var D = typeof Symbol == "function" && Symbol.iterator, L = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function _(ge) {
    for (var Le = arguments.length, oe = new Array(Le > 1 ? Le - 1 : 0), we = 1; we < Le; we++)
      oe[we - 1] = arguments[we];
    N("error", ge, oe);
  }
  function N(ge, Le, oe) {
    var we = L.ReactDebugCurrentFrame, Ce = "";
    if (Y) {
      var Ie = j(Y.type), Ue = Y._owner;
      Ce += function(at, Qe, rt) {
        var Ke = "";
        if (Qe) {
          var ze = Qe.fileName, Me = ze.replace(R, "");
          if (/^index\./.test(Me)) {
            var ct = ze.match(R);
            if (ct) {
              var je = ct[1];
              je && (Me = je.replace(R, "") + "/" + Me);
            }
          }
          Ke = " (at " + Me + ":" + Qe.lineNumber + ")";
        } else
          rt && (Ke = " (created by " + rt + ")");
        return `
    in ` + (at || "Unknown") + Ke;
      }(Ie, Y._source, Ue && j(Ue.type));
    }
    (Ce += we.getStackAddendum()) !== "" && (Le += "%s", oe = oe.concat([Ce]));
    var qe = oe.map(function(at) {
      return "" + at;
    });
    qe.unshift("Warning: " + Le), Function.prototype.apply.call(console[ge], console, qe);
  }
  var R = /^(.*)[\\\/]/;
  function j(ge) {
    if (ge == null)
      return null;
    if (typeof ge.tag == "number" && _("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof ge == "function")
      return ge.displayName || ge.name || null;
    if (typeof ge == "string")
      return ge;
    switch (ge) {
      case _a.Fragment:
        return "Fragment";
      case n:
        return "Portal";
      case a:
        return "Profiler";
      case r:
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
          return we = ge, Ce = ge.render, Ie = "ForwardRef", Ue = Ce.displayName || Ce.name || "", we.displayName || (Ue !== "" ? Ie + "(" + Ue + ")" : Ie);
        case g:
          return j(ge.type);
        case v:
          return j(ge.render);
        case y:
          var Le = (oe = ge)._status === 1 ? oe._result : null;
          if (Le)
            return j(Le);
      }
    var oe, we, Ce, Ie, Ue;
    return null;
  }
  var H = {};
  L.ReactDebugCurrentFrame;
  var Y = null;
  function Q(ge) {
    Y = ge;
  }
  var re, K, q, me = L.ReactCurrentOwner, W = Object.prototype.hasOwnProperty, se = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ce(ge, Le, oe, we, Ce) {
    var Ie, Ue = {}, qe = null, at = null;
    for (Ie in oe !== void 0 && (qe = "" + oe), function(Ke) {
      if (W.call(Ke, "key")) {
        var ze = Object.getOwnPropertyDescriptor(Ke, "key").get;
        if (ze && ze.isReactWarning)
          return !1;
      }
      return Ke.key !== void 0;
    }(Le) && (qe = "" + Le.key), function(Ke) {
      if (W.call(Ke, "ref")) {
        var ze = Object.getOwnPropertyDescriptor(Ke, "ref").get;
        if (ze && ze.isReactWarning)
          return !1;
      }
      return Ke.ref !== void 0;
    }(Le) && (at = Le.ref, function(Ke, ze) {
      if (typeof Ke.ref == "string" && me.current && ze && me.current.stateNode !== ze) {
        var Me = j(me.current.type);
        q[Me] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(me.current.type), Ke.ref), q[Me] = !0);
      }
    }(Le, Ce)), Le)
      W.call(Le, Ie) && !se.hasOwnProperty(Ie) && (Ue[Ie] = Le[Ie]);
    if (ge && ge.defaultProps) {
      var Qe = ge.defaultProps;
      for (Ie in Qe)
        Ue[Ie] === void 0 && (Ue[Ie] = Qe[Ie]);
    }
    if (qe || at) {
      var rt = typeof ge == "function" ? ge.displayName || ge.name || "Unknown" : ge;
      qe && function(Ke, ze) {
        var Me = function() {
          re || (re = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ze));
        };
        Me.isReactWarning = !0, Object.defineProperty(Ke, "key", { get: Me, configurable: !0 });
      }(Ue, rt), at && function(Ke, ze) {
        var Me = function() {
          K || (K = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ze));
        };
        Me.isReactWarning = !0, Object.defineProperty(Ke, "ref", { get: Me, configurable: !0 });
      }(Ue, rt);
    }
    return function(Ke, ze, Me, ct, je, Ge, ot) {
      var dt = { $$typeof: t, type: Ke, key: ze, ref: Me, props: ot, _owner: Ge, _store: {} };
      return Object.defineProperty(dt._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: !1 }), Object.defineProperty(dt, "_self", { configurable: !1, enumerable: !1, writable: !1, value: ct }), Object.defineProperty(dt, "_source", { configurable: !1, enumerable: !1, writable: !1, value: je }), Object.freeze && (Object.freeze(dt.props), Object.freeze(dt)), dt;
    }(ge, qe, at, Ce, we, me.current, Ue);
  }
  q = {};
  var he, ie = L.ReactCurrentOwner;
  function V(ge) {
    Y = ge;
  }
  function Z(ge) {
    return typeof ge == "object" && ge !== null && ge.$$typeof === t;
  }
  function ne() {
    if (ie.current) {
      var ge = j(ie.current.type);
      if (ge)
        return `

Check the render method of \`` + ge + "`.";
    }
    return "";
  }
  L.ReactDebugCurrentFrame, he = !1;
  var Ae = {};
  function ve(ge, Le) {
    if (ge._store && !ge._store.validated && ge.key == null) {
      ge._store.validated = !0;
      var oe = function(Ce) {
        var Ie = ne();
        if (!Ie) {
          var Ue = typeof Ce == "string" ? Ce : Ce.displayName || Ce.name;
          Ue && (Ie = `

Check the top-level render call using <` + Ue + ">.");
        }
        return Ie;
      }(Le);
      if (!Ae[oe]) {
        Ae[oe] = !0;
        var we = "";
        ge && ge._owner && ge._owner !== ie.current && (we = " It was passed a child from " + j(ge._owner.type) + "."), V(ge), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', oe, we), V(null);
      }
    }
  }
  function Re(ge, Le) {
    if (typeof ge == "object") {
      if (Array.isArray(ge))
        for (var oe = 0; oe < ge.length; oe++) {
          var we = ge[oe];
          Z(we) && ve(we, Le);
        }
      else if (Z(ge))
        ge._store && (ge._store.validated = !0);
      else if (ge) {
        var Ce = function(qe) {
          if (qe === null || typeof qe != "object")
            return null;
          var at = D && qe[D] || qe["@@iterator"];
          return typeof at == "function" ? at : null;
        }(ge);
        if (typeof Ce == "function" && Ce !== ge.entries)
          for (var Ie, Ue = Ce.call(ge); !(Ie = Ue.next()).done; )
            Z(Ie.value) && ve(Ie.value, Le);
      }
    }
  }
  function le(ge) {
    var Le, oe = ge.type;
    if (oe != null && typeof oe != "string") {
      if (typeof oe == "function")
        Le = oe.propTypes;
      else {
        if (typeof oe != "object" || oe.$$typeof !== s && oe.$$typeof !== g)
          return;
        Le = oe.propTypes;
      }
      if (Le) {
        var we = j(oe);
        (function(Ce, Ie, Ue, qe, at) {
          var Qe = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var rt in Ce)
            if (Qe(Ce, rt)) {
              var Ke = void 0;
              try {
                if (typeof Ce[rt] != "function") {
                  var ze = Error((qe || "React class") + ": " + Ue + " type `" + rt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof Ce[rt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ze.name = "Invariant Violation", ze;
                }
                Ke = Ce[rt](Ie, rt, qe, Ue, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Me) {
                Ke = Me;
              }
              !Ke || Ke instanceof Error || (Q(at), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", qe || "React class", Ue, rt, typeof Ke), Q(null)), Ke instanceof Error && !(Ke.message in H) && (H[Ke.message] = !0, Q(at), _("Failed %s type: %s", Ue, Ke.message), Q(null));
            }
        })(Le, ge.props, "prop", we, ge);
      } else
        oe.PropTypes === void 0 || he || (he = !0, _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", j(oe) || "Unknown"));
      typeof oe.getDefaultProps != "function" || oe.getDefaultProps.isReactClassApproved || _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function _e(ge, Le, oe, we, Ce, Ie) {
    var Ue = function(Me) {
      return typeof Me == "string" || typeof Me == "function" || Me === _a.Fragment || Me === a || Me === M || Me === r || Me === c || Me === d || Me === T || typeof Me == "object" && Me !== null && (Me.$$typeof === y || Me.$$typeof === g || Me.$$typeof === o || Me.$$typeof === f || Me.$$typeof === s || Me.$$typeof === k || Me.$$typeof === v || Me[0] === E);
    }(ge);
    if (!Ue) {
      var qe = "";
      (ge === void 0 || typeof ge == "object" && ge !== null && Object.keys(ge).length === 0) && (qe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
      var at, Qe = function(Me) {
        return Me !== void 0 ? `

Check your code at ` + Me.fileName.replace(/^.*[\\\/]/, "") + ":" + Me.lineNumber + "." : "";
      }(Ce);
      qe += Qe || ne(), ge === null ? at = "null" : Array.isArray(ge) ? at = "array" : ge !== void 0 && ge.$$typeof === t ? (at = "<" + (j(ge.type) || "Unknown") + " />", qe = " Did you accidentally export a JSX literal instead of a component?") : at = typeof ge, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", at, qe);
    }
    var rt = ce(ge, Le, oe, Ce, Ie);
    if (rt == null)
      return rt;
    if (Ue) {
      var Ke = Le.children;
      if (Ke !== void 0)
        if (we)
          if (Array.isArray(Ke)) {
            for (var ze = 0; ze < Ke.length; ze++)
              Re(Ke[ze], ge);
            Object.freeze && Object.freeze(Ke);
          } else
            _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          Re(Ke, ge);
    }
    return ge === _a.Fragment ? function(Me) {
      for (var ct = Object.keys(Me.props), je = 0; je < ct.length; je++) {
        var Ge = ct[je];
        if (Ge !== "children" && Ge !== "key") {
          V(Me), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ge), V(null);
          break;
        }
      }
      Me.ref !== null && (V(Me), _("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
    }(rt) : le(rt), rt;
  }
  var Be = function(ge, Le, oe) {
    return _e(ge, Le, oe, !1);
  }, Te = function(ge, Le, oe) {
    return _e(ge, Le, oe, !0);
  };
  _a.jsx = Be, _a.jsxs = Te;
}(), Bi.exports = jp;
var jd, ny = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
jd = ny, function() {
  var e = {}.hasOwnProperty;
  function t() {
    for (var n = [], r = 0; r < arguments.length; r++) {
      var a = arguments[r];
      if (a) {
        var o = typeof a;
        if (o === "string" || o === "number")
          n.push(a);
        else if (Array.isArray(a)) {
          if (a.length) {
            var f = t.apply(null, a);
            f && n.push(f);
          }
        } else if (o === "object") {
          if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]")) {
            n.push(a.toString());
            continue;
          }
          for (var s in a)
            e.call(a, s) && a[s] && n.push(s);
        }
      }
    }
    return n.join(" ");
  }
  jd.exports ? (t.default = t, jd.exports = t) : window.classNames = t;
}();
var Up = ny.exports;
const Kp = (e, t, n) => {
  let r = null;
  return function(...a) {
    r && clearTimeout(r), r = setTimeout(() => {
      r = null, n || e.apply(this, a);
    }, t);
  };
}, fE = ({ content: e }) => Bi.exports.jsx("span", { dangerouslySetInnerHTML: { __html: e } }), hE = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, pE = ue.createContext({ getTooltipData: () => hE });
function ry(e = "DEFAULT_TOOLTIP_ID") {
  return ue.useContext(pE).getTooltipData(e);
}
const Yp = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: n = null, place: r = "top", offset: a = 10, strategy: o = "absolute", middlewares: f = [lE(Number(a)), oE(), sE({ padding: 5 })] }) => {
  if (!e)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  if (t === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  const s = f;
  return n ? (s.push({ name: "arrow", options: c = { element: n, padding: 5 }, async fn(d) {
    const { element: g, padding: y = 0 } = c || {}, { x: v, y: E, placement: k, rects: M, platform: T } = d;
    if (g == null)
      return console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const m = Ug(y), D = { x: v, y: E }, L = Ps(k), _ = fh(L), N = await T.getDimensions(g), R = L === "y" ? "top" : "left", j = L === "y" ? "bottom" : "right", H = M.reference[_] + M.reference[L] - D[L] - M.floating[_], Y = D[L] - M.reference[L], Q = await (T.getOffsetParent == null ? void 0 : T.getOffsetParent(g));
    let re = Q ? L === "y" ? Q.clientHeight || 0 : Q.clientWidth || 0 : 0;
    re === 0 && (re = M.floating[_]);
    const K = H / 2 - Y / 2, q = m[R], me = re - N[_] - m[j], W = re / 2 - N[_] / 2 + K, se = Af(q, W, me), ce = As(k) != null && W != se && M.reference[_] / 2 - (W < q ? m[R] : m[j]) - N[_] / 2 < 0;
    return { [L]: D[L] - (ce ? W < q ? q - W : me - W : 0), data: { [L]: se, centerOffset: W - se } };
  } }), Vp(e, t, { placement: r, strategy: o, middleware: s }).then(({ x: d, y: g, placement: y, middlewareData: v }) => {
    var E, k;
    const M = { left: `${d}px`, top: `${g}px` }, { x: T, y: m } = (E = v.arrow) !== null && E !== void 0 ? E : { x: 0, y: 0 };
    return { tooltipStyles: M, tooltipArrowStyles: { left: T != null ? `${T}px` : "", top: m != null ? `${m}px` : "", right: "", bottom: "", [(k = { top: "bottom", right: "left", bottom: "top", left: "right" }[y.split("-")[0]]) !== null && k !== void 0 ? k : "bottom"]: "-4px" } };
  })) : Vp(e, t, { placement: "bottom", strategy: o, middleware: s }).then(({ x: d, y: g }) => ({ tooltipStyles: { left: `${d}px`, top: `${g}px` }, tooltipArrowStyles: {} }));
  var c;
};
var Pi = { tooltip: "styles-module_tooltip__mnnfp", fixed: "styles-module_fixed__7ciUi", arrow: "styles-module_arrow__K0L3T", "no-arrow": "styles-module_no-arrow__KcFZN", clickable: "styles-module_clickable__Bv9o7", show: "styles-module_show__2NboJ", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const Xp = ({ id: e, className: t, classNameArrow: n, variant: r = "dark", anchorId: a, anchorSelect: o, place: f = "top", offset: s = 10, events: c = ["hover"], positionStrategy: d = "absolute", middlewares: g, wrapper: y, children: v = null, delayShow: E = 0, delayHide: k = 0, float: M = !1, noArrow: T = !1, clickable: m = !1, closeOnEsc: D = !1, style: L, position: _, afterShow: N, afterHide: R, content: j, html: H, isOpen: Y, setIsOpen: Q, activeAnchor: re, setActiveAnchor: K }) => {
  const q = ue.useRef(null), me = ue.useRef(null), W = ue.useRef(null), se = ue.useRef(null), [ce, he] = ue.useState({}), [ie, V] = ue.useState({}), [Z, ne] = ue.useState(!1), [Ae, ve] = ue.useState(!1), Re = ue.useRef(!1), le = ue.useRef(null), { anchorRefs: _e, setActiveAnchor: Be } = ry(e), Te = ue.useRef(!1), [ge, Le] = ue.useState([]), oe = ue.useRef(!1);
  ue.useLayoutEffect(() => (oe.current = !0, () => {
    oe.current = !1;
  }), []), ue.useEffect(() => {
    if (!Z) {
      const je = setTimeout(() => {
        ve(!1);
      }, 150);
      return () => {
        clearTimeout(je);
      };
    }
    return () => null;
  }, [Z]);
  const we = (je) => {
    oe.current && (je && ve(!0), setTimeout(() => {
      oe.current && (Q == null || Q(je), Y === void 0 && ne(je));
    }, 10));
  };
  ue.useEffect(() => {
    if (Y === void 0)
      return () => null;
    Y && ve(!0);
    const je = setTimeout(() => {
      ne(Y);
    }, 10);
    return () => {
      clearTimeout(je);
    };
  }, [Y]), ue.useEffect(() => {
    Z !== Re.current && (Re.current = Z, Z ? N == null || N() : R == null || R());
  }, [Z]);
  const Ce = (je = k) => {
    se.current && clearTimeout(se.current), se.current = setTimeout(() => {
      Te.current || we(!1);
    }, je);
  }, Ie = (je) => {
    var Ge;
    if (!je)
      return;
    E ? (W.current && clearTimeout(W.current), W.current = setTimeout(() => {
      we(!0);
    }, E)) : we(!0);
    const ot = (Ge = je.currentTarget) !== null && Ge !== void 0 ? Ge : je.target;
    K(ot), Be({ current: ot }), se.current && clearTimeout(se.current);
  }, Ue = () => {
    m ? Ce(k || 100) : k ? Ce() : we(!1), W.current && clearTimeout(W.current);
  }, qe = ({ x: je, y: Ge }) => {
    Yp({ place: f, offset: s, elementReference: { getBoundingClientRect: () => ({ x: je, y: Ge, width: 0, height: 0, top: Ge, left: je, right: je, bottom: Ge }) }, tooltipReference: q.current, tooltipArrowReference: me.current, strategy: d, middlewares: g }).then((ot) => {
      Object.keys(ot.tooltipStyles).length && he(ot.tooltipStyles), Object.keys(ot.tooltipArrowStyles).length && V(ot.tooltipArrowStyles);
    });
  }, at = (je) => {
    if (!je)
      return;
    const Ge = je, ot = { x: Ge.clientX, y: Ge.clientY };
    qe(ot), le.current = ot;
  }, Qe = (je) => {
    Ie(je), k && Ce();
  }, rt = (je) => {
    const Ge = document.querySelector(`[id='${a}']`);
    Ge != null && Ge.contains(je.target) || ge.some((ot) => ot.contains(je.target)) || we(!1);
  }, Ke = (je) => {
    je.key === "Escape" && we(!1);
  }, ze = Kp(Ie, 50), Me = Kp(Ue, 50);
  ue.useEffect(() => {
    var je, Ge;
    const ot = new Set(_e);
    ge.forEach((Rt) => {
      ot.add({ current: Rt });
    });
    const dt = document.querySelector(`[id='${a}']`);
    dt && ot.add({ current: dt }), D && window.addEventListener("keydown", Ke);
    const Tt = [];
    c.find((Rt) => Rt === "click") && (window.addEventListener("click", rt), Tt.push({ event: "click", listener: Qe })), c.find((Rt) => Rt === "hover") && (Tt.push({ event: "mouseenter", listener: ze }, { event: "mouseleave", listener: Me }, { event: "focus", listener: ze }, { event: "blur", listener: Me }), M && Tt.push({ event: "mousemove", listener: at }));
    const tn = () => {
      Te.current = !0;
    }, ln = () => {
      Te.current = !1, Ue();
    };
    return m && ((je = q.current) === null || je === void 0 || je.addEventListener("mouseenter", tn), (Ge = q.current) === null || Ge === void 0 || Ge.addEventListener("mouseleave", ln)), Tt.forEach(({ event: Rt, listener: zt }) => {
      ot.forEach((Dt) => {
        var Xt;
        (Xt = Dt.current) === null || Xt === void 0 || Xt.addEventListener(Rt, zt);
      });
    }), () => {
      var Rt, zt;
      c.find((Dt) => Dt === "click") && window.removeEventListener("click", rt), D && window.removeEventListener("keydown", Ke), m && ((Rt = q.current) === null || Rt === void 0 || Rt.removeEventListener("mouseenter", tn), (zt = q.current) === null || zt === void 0 || zt.removeEventListener("mouseleave", ln)), Tt.forEach(({ event: Dt, listener: Xt }) => {
        ot.forEach((cn) => {
          var Ne;
          (Ne = cn.current) === null || Ne === void 0 || Ne.removeEventListener(Dt, Xt);
        });
      });
    };
  }, [Ae, _e, ge, D, c]), ue.useEffect(() => {
    let je = o ?? "";
    !je && e && (je = `[data-tooltip-id='${e}']`);
    const Ge = new MutationObserver((ot) => {
      const dt = [];
      ot.forEach((Tt) => {
        if (Tt.type === "attributes" && Tt.attributeName === "data-tooltip-id" && Tt.target.getAttribute("data-tooltip-id") === e && dt.push(Tt.target), Tt.type === "childList" && (re && [...Tt.removedNodes].some((tn) => !!tn.contains(re) && (ve(!1), we(!1), K(null), !0)), je))
          try {
            const tn = [...Tt.addedNodes].filter((ln) => ln.nodeType === 1);
            dt.push(...tn.filter((ln) => ln.matches(je))), dt.push(...tn.flatMap((ln) => [...ln.querySelectorAll(je)]));
          } catch {
          }
      }), dt.length && Le((Tt) => [...Tt, ...dt]);
    });
    return Ge.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"] }), () => {
      Ge.disconnect();
    };
  }, [e, o, re]), ue.useEffect(() => {
    _ ? qe(_) : M ? le.current && qe(le.current) : Yp({ place: f, offset: s, elementReference: re, tooltipReference: q.current, tooltipArrowReference: me.current, strategy: d, middlewares: g }).then((je) => {
      oe.current && (Object.keys(je.tooltipStyles).length && he(je.tooltipStyles), Object.keys(je.tooltipArrowStyles).length && V(je.tooltipArrowStyles));
    });
  }, [Z, re, j, H, f, s, d, _]), ue.useEffect(() => {
    var je;
    const Ge = document.querySelector(`[id='${a}']`), ot = [...ge, Ge];
    re && ot.includes(re) || K((je = ge[0]) !== null && je !== void 0 ? je : Ge);
  }, [a, ge, re]), ue.useEffect(() => () => {
    W.current && clearTimeout(W.current), se.current && clearTimeout(se.current);
  }, []), ue.useEffect(() => {
    let je = o;
    if (!je && e && (je = `[data-tooltip-id='${e}']`), je)
      try {
        const Ge = Array.from(document.querySelectorAll(je));
        Le(Ge);
      } catch {
        Le([]);
      }
  }, [e, o]);
  const ct = !!(H || j || v) && Z && Object.keys(ce).length > 0;
  return Ae ? Bi.exports.jsxs(y, { id: e, role: "tooltip", className: Up("react-tooltip", Pi.tooltip, Pi[r], t, { [Pi.show]: ct, [Pi.fixed]: d === "fixed", [Pi.clickable]: m }), style: { ...L, ...ce }, ref: q, children: [H && Bi.exports.jsx(fE, { content: H }) || j || v, Bi.exports.jsx(y, { className: Up("react-tooltip-arrow", Pi.arrow, n, { [Pi["no-arrow"]]: T }), style: ie, ref: me })] }) : null;
}, ay = ({ id: e, anchorId: t, anchorSelect: n, content: r, html: a, className: o, classNameArrow: f, variant: s = "dark", place: c = "top", offset: d = 10, wrapper: g = "div", children: y = null, events: v = ["hover"], positionStrategy: E = "absolute", middlewares: k, delayShow: M = 0, delayHide: T = 0, float: m = !1, noArrow: D = !1, clickable: L = !1, closeOnEsc: _ = !1, style: N, position: R, isOpen: j, setIsOpen: H, afterShow: Y, afterHide: Q }) => {
  const [re, K] = ue.useState(r), [q, me] = ue.useState(a), [W, se] = ue.useState(c), [ce, he] = ue.useState(s), [ie, V] = ue.useState(d), [Z, ne] = ue.useState(M), [Ae, ve] = ue.useState(T), [Re, le] = ue.useState(m), [_e, Be] = ue.useState(g), [Te, ge] = ue.useState(v), [Le, oe] = ue.useState(E), [we, Ce] = ue.useState(null), { anchorRefs: Ie, activeAnchor: Ue } = ry(e), qe = (rt) => rt == null ? void 0 : rt.getAttributeNames().reduce((Ke, ze) => {
    var Me;
    return ze.startsWith("data-tooltip-") && (Ke[ze.replace(/^data-tooltip-/, "")] = (Me = rt == null ? void 0 : rt.getAttribute(ze)) !== null && Me !== void 0 ? Me : null), Ke;
  }, {}), at = (rt) => {
    const Ke = { place: (ze) => {
      var Me;
      se((Me = ze) !== null && Me !== void 0 ? Me : c);
    }, content: (ze) => {
      K(ze ?? r);
    }, html: (ze) => {
      me(ze ?? a);
    }, variant: (ze) => {
      var Me;
      he((Me = ze) !== null && Me !== void 0 ? Me : s);
    }, offset: (ze) => {
      V(ze === null ? d : Number(ze));
    }, wrapper: (ze) => {
      var Me;
      Be((Me = ze) !== null && Me !== void 0 ? Me : g);
    }, events: (ze) => {
      const Me = ze == null ? void 0 : ze.split(" ");
      ge(Me ?? v);
    }, "position-strategy": (ze) => {
      var Me;
      oe((Me = ze) !== null && Me !== void 0 ? Me : E);
    }, "delay-show": (ze) => {
      ne(ze === null ? M : Number(ze));
    }, "delay-hide": (ze) => {
      ve(ze === null ? T : Number(ze));
    }, float: (ze) => {
      le(ze === null ? m : !!ze);
    } };
    Object.values(Ke).forEach((ze) => ze(null)), Object.entries(rt).forEach(([ze, Me]) => {
      var ct;
      (ct = Ke[ze]) === null || ct === void 0 || ct.call(Ke, Me);
    });
  };
  ue.useEffect(() => {
    K(r);
  }, [r]), ue.useEffect(() => {
    me(a);
  }, [a]), ue.useEffect(() => {
    se(c);
  }, [c]), ue.useEffect(() => {
    var rt;
    const Ke = new Set(Ie);
    let ze = n;
    if (!ze && e && (ze = `[data-tooltip-id='${e}']`), ze)
      try {
        document.querySelectorAll(ze).forEach((ot) => {
          Ke.add({ current: ot });
        });
      } catch {
        console.warn(`[react-tooltip] "${n}" is not a valid CSS selector`);
      }
    const Me = document.querySelector(`[id='${t}']`);
    if (Me && Ke.add({ current: Me }), !Ke.size)
      return () => null;
    const ct = (rt = we ?? Me) !== null && rt !== void 0 ? rt : Ue.current, je = new MutationObserver((ot) => {
      ot.forEach((dt) => {
        var Tt;
        if (!ct || dt.type !== "attributes" || !(!((Tt = dt.attributeName) === null || Tt === void 0) && Tt.startsWith("data-tooltip-")))
          return;
        const tn = qe(ct);
        at(tn);
      });
    }), Ge = { attributes: !0, childList: !1, subtree: !1 };
    if (ct) {
      const ot = qe(ct);
      at(ot), je.observe(ct, Ge);
    }
    return () => {
      je.disconnect();
    };
  }, [Ie, Ue, we, t, n]);
  const Qe = { id: e, anchorId: t, anchorSelect: n, className: o, classNameArrow: f, content: re, html: q, place: W, variant: ce, offset: ie, wrapper: _e, events: Te, positionStrategy: Le, middlewares: k, delayShow: Z, delayHide: Ae, float: Re, noArrow: D, clickable: L, closeOnEsc: _, style: N, position: R, isOpen: j, setIsOpen: H, afterShow: Y, afterHide: Q, activeAnchor: we, setActiveAnchor: (rt) => Ce(rt) };
  return y ? Bi.exports.jsx(Xp, { ...Qe, children: y }) : Bi.exports.jsx(Xp, { ...Qe });
};
function qp(e, t) {
  let n;
  if (t === void 0)
    for (const r of e)
      r != null && (n < r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let a of e)
      (a = t(a, ++r, e)) != null && (n < a || n === void 0 && a >= a) && (n = a);
  }
  return n;
}
function mE(e, t) {
  let n;
  if (t === void 0)
    for (const r of e)
      r != null && (n > r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let a of e)
      (a = t(a, ++r, e)) != null && (n > a || n === void 0 && a >= a) && (n = a);
  }
  return n;
}
function Ud(e, t) {
  let n = 0;
  if (t === void 0)
    for (let r of e)
      (r = +r) && (n += r);
  else {
    let r = -1;
    for (let a of e)
      (a = +t(a, ++r, e)) && (n += a);
  }
  return n;
}
function gE(e) {
  return e.depth;
}
function yE(e, t) {
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
function vE(e) {
  return e.index;
}
function xE(e) {
  return e.nodes;
}
function bE(e) {
  return e.links;
}
function Qp(e, t) {
  const n = e.get(t);
  if (!n)
    throw new Error("missing: " + t);
  return n;
}
function Jp({ nodes: e }) {
  for (const t of e) {
    let n = t.y0, r = n;
    for (const a of t.sourceLinks)
      a.y0 = n + a.width / 2, n += a.width;
    for (const a of t.targetLinks)
      a.y1 = r + a.width / 2, r += a.width;
  }
}
function SE() {
  let e = 0, t = 0, n = 1, r = 1, a = 24, o = 8, f, s = vE, c = yE, d, g, y = xE, v = bE, E = 6;
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
    return arguments.length ? (e = t = 0, n = +W[0], r = +W[1], k) : [n - e, r - t];
  }, k.extent = function(W) {
    return arguments.length ? (e = +W[0][0], n = +W[1][0], t = +W[0][1], r = +W[1][1], k) : [[e, t], [n, r]];
  }, k.iterations = function(W) {
    return arguments.length ? (E = +W, k) : E;
  };
  function M({ nodes: W, links: se }) {
    for (const [he, ie] of W.entries())
      ie.index = he, ie.sourceLinks = [], ie.targetLinks = [];
    const ce = new Map(W.map((he, ie) => [s(he, ie, W), he]));
    for (const [he, ie] of se.entries()) {
      ie.index = he;
      let { source: V, target: Z } = ie;
      typeof V != "object" && (V = ie.source = Qp(ce, V)), typeof Z != "object" && (Z = ie.target = Qp(ce, Z)), V.sourceLinks.push(ie), Z.targetLinks.push(ie);
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
        for (const { target: Z } of V.sourceLinks)
          he.add(Z);
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
        for (const { source: Z } of V.targetLinks)
          he.add(Z);
      }
      if (++ie > se)
        throw new Error("circular link");
      ce = he, he = /* @__PURE__ */ new Set();
    }
  }
  function L({ nodes: W }) {
    const se = qp(W, (ie) => ie.depth) + 1, ce = (n - e - a) / (se - 1), he = new Array(se);
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
    const se = mE(W, (ce) => (r - t - (ce.length - 1) * f) / Ud(ce, Kd));
    for (const ce of W) {
      let he = t;
      for (const ie of ce) {
        ie.y0 = he, ie.y1 = he + ie.value * se, he = ie.y1 + f;
        for (const V of ie.sourceLinks)
          V.width = V.value * se;
      }
      he = (r - he + f) / (ce.length + 1);
      for (let ie = 0; ie < ce.length; ++ie) {
        const V = ce[ie];
        V.y0 += he * (ie + 1), V.y1 += he * (ie + 1);
      }
      K(ce);
    }
  }
  function N(W) {
    const se = L(W);
    f = Math.min(o, (r - t) / (qp(se, (ce) => ce.length) - 1)), _(se);
    for (let ce = 0; ce < E; ++ce) {
      const he = Math.pow(0.99, ce), ie = Math.max(1 - he, (ce + 1) / E);
      j(se, he, ie), R(se, he, ie);
    }
  }
  function R(W, se, ce) {
    for (let he = 1, ie = W.length; he < ie; ++he) {
      const V = W[he];
      for (const Z of V) {
        let ne = 0, Ae = 0;
        for (const { source: Re, value: le } of Z.targetLinks) {
          let _e = le * (Z.layer - Re.layer);
          ne += q(Re, Z) * _e, Ae += _e;
        }
        if (!(Ae > 0))
          continue;
        let ve = (ne / Ae - Z.y0) * se;
        Z.y0 += ve, Z.y1 += ve, re(Z);
      }
      d === void 0 && V.sort(hc), H(V, ce);
    }
  }
  function j(W, se, ce) {
    for (let he = W.length, ie = he - 2; ie >= 0; --ie) {
      const V = W[ie];
      for (const Z of V) {
        let ne = 0, Ae = 0;
        for (const { target: Re, value: le } of Z.sourceLinks) {
          let _e = le * (Re.layer - Z.layer);
          ne += me(Z, Re) * _e, Ae += _e;
        }
        if (!(Ae > 0))
          continue;
        let ve = (ne / Ae - Z.y0) * se;
        Z.y0 += ve, Z.y1 += ve, re(Z);
      }
      d === void 0 && V.sort(hc), H(V, ce);
    }
  }
  function H(W, se) {
    const ce = W.length >> 1, he = W[ce];
    Q(W, he.y0 - f, ce - 1, se), Y(W, he.y1 + f, ce + 1, se), Q(W, r, W.length - 1, se), Y(W, t, 0, se);
  }
  function Y(W, se, ce, he) {
    for (; ce < W.length; ++ce) {
      const ie = W[ce], V = (se - ie.y0) * he;
      V > 1e-6 && (ie.y0 += V, ie.y1 += V), se = ie.y1 + f;
    }
  }
  function Q(W, se, ce, he) {
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
function EE(e) {
  return [e.source.x1, e.y0];
}
function kE(e) {
  return [e.target.x0, e.y1];
}
function wE() {
  return f0().source(EE).target(kE);
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
function TE() {
  if (em)
    return Ri;
  em = 1;
  var e = ue;
  function t(x) {
    for (var A = "https://reactjs.org/docs/error-decoder.html?invariant=" + x, z = 1; z < arguments.length; z++)
      A += "&args[]=" + encodeURIComponent(arguments[z]);
    return "Minified React error #" + x + "; visit " + A + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var n = Object.prototype.hasOwnProperty, r = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, a = {}, o = {};
  function f(x) {
    return n.call(o, x) ? !0 : n.call(a, x) ? !1 : r.test(x) ? o[x] = !0 : (a[x] = !0, !1);
  }
  function s(x, A, z, G, be, B, I) {
    this.acceptsBooleans = A === 2 || A === 3 || A === 4, this.attributeName = G, this.attributeNamespace = be, this.mustUseProperty = z, this.propertyName = x, this.type = A, this.sanitizeURL = B, this.removeEmptyString = I;
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
      var z = "", G, be = 0;
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
        be !== G && (z += x.substring(be, G)), be = G + 1, z += A;
      }
      x = be !== G ? z + x.substring(be, G) : z;
    }
    return x;
  }
  var M = /([A-Z])/g, T = /^ms-/, m = Array.isArray;
  function D(x, A) {
    return { insertionMode: x, selectedValue: A };
  }
  function L(x, A, z) {
    switch (A) {
      case "select":
        return D(1, z.value != null ? z.value : z.defaultValue);
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
  function N(x, A, z) {
    if (typeof z != "object")
      throw Error(t(62));
    A = !0;
    for (var G in z)
      if (n.call(z, G)) {
        var be = z[G];
        if (be != null && typeof be != "boolean" && be !== "") {
          if (G.indexOf("--") === 0) {
            var B = k(G);
            be = k(("" + be).trim());
          } else {
            B = G;
            var I = _.get(B);
            I !== void 0 || (I = k(B.replace(M, "-$1").toLowerCase().replace(T, "-ms-")), _.set(B, I)), B = I, be = typeof be == "number" ? be === 0 || n.call(y, G) ? "" + be : be + "px" : k(("" + be).trim());
          }
          A ? (A = !1, x.push(' style="', B, ":", be)) : x.push(";", B, ":", be);
        }
      }
    A || x.push('"');
  }
  function R(x, A, z, G) {
    switch (z) {
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
    if (!(2 < z.length) || z[0] !== "o" && z[0] !== "O" || z[1] !== "n" && z[1] !== "N") {
      if (A = c.hasOwnProperty(z) ? c[z] : null, A !== null) {
        switch (typeof G) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!A.acceptsBooleans)
              return;
        }
        switch (z = A.attributeName, A.type) {
          case 3:
            G && x.push(" ", z, '=""');
            break;
          case 4:
            G === !0 ? x.push(" ", z, '=""') : G !== !1 && x.push(" ", z, '="', k(G), '"');
            break;
          case 5:
            isNaN(G) || x.push(" ", z, '="', k(G), '"');
            break;
          case 6:
            !isNaN(G) && 1 <= G && x.push(" ", z, '="', k(G), '"');
            break;
          default:
            A.sanitizeURL && (G = "" + G), x.push(" ", z, '="', k(G), '"');
        }
      } else if (f(z)) {
        switch (typeof G) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (A = z.toLowerCase().slice(0, 5), A !== "data-" && A !== "aria-")
              return;
        }
        x.push(" ", z, '="', k(G), '"');
      }
    }
  }
  function j(x, A, z) {
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
  function Y(x, A, z, G) {
    x.push(K(z));
    var be = z = null, B;
    for (B in A)
      if (n.call(A, B)) {
        var I = A[B];
        if (I != null)
          switch (B) {
            case "children":
              z = I;
              break;
            case "dangerouslySetInnerHTML":
              be = I;
              break;
            default:
              R(x, G, B, I);
          }
      }
    return x.push(">"), j(x, be, z), typeof z == "string" ? (x.push(k(z)), null) : z;
  }
  var Q = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, re = /* @__PURE__ */ new Map();
  function K(x) {
    var A = re.get(x);
    if (A === void 0) {
      if (!Q.test(x))
        throw Error(t(65, x));
      A = "<" + x, re.set(x, A);
    }
    return A;
  }
  function q(x, A, z, G, be) {
    switch (A) {
      case "select":
        x.push(K("select"));
        var B = null, I = null;
        for (et in z)
          if (n.call(z, et)) {
            var te = z[et];
            if (te != null)
              switch (et) {
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
                  R(x, G, et, te);
              }
          }
        return x.push(">"), j(x, I, B), B;
      case "option":
        I = be.selectedValue, x.push(K("option"));
        var ye = te = null, Ye = null, et = null;
        for (B in z)
          if (n.call(z, B)) {
            var At = z[B];
            if (At != null)
              switch (B) {
                case "children":
                  te = At;
                  break;
                case "selected":
                  Ye = At;
                  break;
                case "dangerouslySetInnerHTML":
                  et = At;
                  break;
                case "value":
                  ye = At;
                default:
                  R(x, G, B, At);
              }
          }
        if (I != null)
          if (z = ye !== null ? "" + ye : H(te), m(I)) {
            for (G = 0; G < I.length; G++)
              if ("" + I[G] === z) {
                x.push(' selected=""');
                break;
              }
          } else
            "" + I === z && x.push(' selected=""');
        else
          Ye && x.push(' selected=""');
        return x.push(">"), j(x, et, te), te;
      case "textarea":
        x.push(K("textarea")), et = I = B = null;
        for (te in z)
          if (n.call(z, te) && (ye = z[te], ye != null))
            switch (te) {
              case "children":
                et = ye;
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
        if (B === null && I !== null && (B = I), x.push(">"), et != null) {
          if (B != null)
            throw Error(t(92));
          if (m(et) && 1 < et.length)
            throw Error(t(93));
          B = "" + et;
        }
        return typeof B == "string" && B[0] === `
` && x.push(`
`), B !== null && x.push(k("" + B)), null;
      case "input":
        x.push(K("input")), ye = et = te = B = null;
        for (I in z)
          if (n.call(z, I) && (Ye = z[I], Ye != null))
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
                et = Ye;
                break;
              case "value":
                B = Ye;
                break;
              default:
                R(x, G, I, Ye);
            }
        return et !== null ? R(x, G, "checked", et) : ye !== null && R(x, G, "checked", ye), B !== null ? R(x, G, "value", B) : te !== null && R(x, G, "value", te), x.push("/>"), null;
      case "menuitem":
        x.push(K("menuitem"));
        for (var Cn in z)
          if (n.call(z, Cn) && (B = z[Cn], B != null))
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
        for (At in z)
          if (n.call(z, At) && (I = z[At], I != null))
            switch (At) {
              case "children":
                B = I;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(434));
              default:
                R(x, G, At, I);
            }
        return x.push(">"), B;
      case "listing":
      case "pre":
        x.push(K(A)), I = B = null;
        for (ye in z)
          if (n.call(z, ye) && (te = z[ye], te != null))
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
          z = I.__html, z != null && (typeof z == "string" && 0 < z.length && z[0] === `
` ? x.push(`
`, z) : x.push("" + z));
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
        for (var pn in z)
          if (n.call(z, pn) && (B = z[pn], B != null))
            switch (pn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, A));
              default:
                R(x, G, pn, B);
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
          z,
          A,
          G
        );
      case "html":
        return be.insertionMode === 0 && x.push("<!DOCTYPE html>"), Y(x, z, A, G);
      default:
        if (A.indexOf("-") === -1 && typeof z.is != "string")
          return Y(x, z, A, G);
        x.push(K(A)), I = B = null;
        for (Ye in z)
          if (n.call(z, Ye) && (te = z[Ye], te != null))
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
        return x.push(">"), j(x, I, B), B;
    }
  }
  function me(x, A, z) {
    if (x.push('<!--$?--><template id="'), z === null)
      throw Error(t(395));
    return x.push(z), x.push('"></template>');
  }
  function W(x, A, z, G) {
    switch (z.insertionMode) {
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
  function V(x, A, z, G) {
    return z.generateStaticMarkup ? (x.push(k(A)), !1) : (A === "" ? x = G : (G && x.push("<!-- -->"), x.push(k(A)), x = !0), x);
  }
  var Z = Object.assign, ne = Symbol.for("react.element"), Ae = Symbol.for("react.portal"), ve = Symbol.for("react.fragment"), Re = Symbol.for("react.strict_mode"), le = Symbol.for("react.profiler"), _e = Symbol.for("react.provider"), Be = Symbol.for("react.context"), Te = Symbol.for("react.forward_ref"), ge = Symbol.for("react.suspense"), Le = Symbol.for("react.suspense_list"), oe = Symbol.for("react.memo"), we = Symbol.for("react.lazy"), Ce = Symbol.for("react.scope"), Ie = Symbol.for("react.debug_trace_mode"), Ue = Symbol.for("react.legacy_hidden"), qe = Symbol.for("react.default_value"), at = Symbol.iterator;
  function Qe(x) {
    if (x == null)
      return null;
    if (typeof x == "function")
      return x.displayName || x.name || null;
    if (typeof x == "string")
      return x;
    switch (x) {
      case ve:
        return "Fragment";
      case Ae:
        return "Portal";
      case le:
        return "Profiler";
      case Re:
        return "StrictMode";
      case ge:
        return "Suspense";
      case Le:
        return "SuspenseList";
    }
    if (typeof x == "object")
      switch (x.$$typeof) {
        case Be:
          return (x.displayName || "Context") + ".Consumer";
        case _e:
          return (x._context.displayName || "Context") + ".Provider";
        case Te:
          var A = x.render;
          return x = x.displayName, x || (x = A.displayName || A.name || "", x = x !== "" ? "ForwardRef(" + x + ")" : "ForwardRef"), x;
        case oe:
          return A = x.displayName || null, A !== null ? A : Qe(x.type) || "Memo";
        case we:
          A = x._payload, x = x._init;
          try {
            return Qe(x(A));
          } catch {
          }
      }
    return null;
  }
  var rt = {};
  function Ke(x, A) {
    if (x = x.contextTypes, !x)
      return rt;
    var z = {}, G;
    for (G in x)
      z[G] = A[G];
    return z;
  }
  var ze = null;
  function Me(x, A) {
    if (x !== A) {
      x.context._currentValue2 = x.parentValue, x = x.parent;
      var z = A.parent;
      if (x === null) {
        if (z !== null)
          throw Error(t(401));
      } else {
        if (z === null)
          throw Error(t(401));
        Me(x, z);
      }
      A.context._currentValue2 = A.value;
    }
  }
  function ct(x) {
    x.context._currentValue2 = x.parentValue, x = x.parent, x !== null && ct(x);
  }
  function je(x) {
    var A = x.parent;
    A !== null && je(A), x.context._currentValue2 = x.value;
  }
  function Ge(x, A) {
    if (x.context._currentValue2 = x.parentValue, x = x.parent, x === null)
      throw Error(t(402));
    x.depth === A.depth ? Me(x, A) : Ge(x, A);
  }
  function ot(x, A) {
    var z = A.parent;
    if (z === null)
      throw Error(t(402));
    x.depth === z.depth ? Me(x, z) : ot(x, z), A.context._currentValue2 = A.value;
  }
  function dt(x) {
    var A = ze;
    A !== x && (A === null ? je(x) : x === null ? ct(A) : A.depth === x.depth ? Me(A, x) : A.depth > x.depth ? Ge(A, x) : ot(A, x), ze = x);
  }
  var Tt = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(x, A) {
    x = x._reactInternals, x.queue !== null && x.queue.push(A);
  }, enqueueReplaceState: function(x, A) {
    x = x._reactInternals, x.replace = !0, x.queue = [A];
  }, enqueueForceUpdate: function() {
  } };
  function tn(x, A, z, G) {
    var be = x.state !== void 0 ? x.state : null;
    x.updater = Tt, x.props = z, x.state = be;
    var B = { queue: [], replace: !1 };
    x._reactInternals = B;
    var I = A.contextType;
    if (x.context = typeof I == "object" && I !== null ? I._currentValue2 : G, I = A.getDerivedStateFromProps, typeof I == "function" && (I = I(z, be), be = I == null ? be : Z({}, be, I), x.state = be), typeof A.getDerivedStateFromProps != "function" && typeof x.getSnapshotBeforeUpdate != "function" && (typeof x.UNSAFE_componentWillMount == "function" || typeof x.componentWillMount == "function"))
      if (A = x.state, typeof x.componentWillMount == "function" && x.componentWillMount(), typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount(), A !== x.state && Tt.enqueueReplaceState(x, x.state, null), B.queue !== null && 0 < B.queue.length)
        if (A = B.queue, I = B.replace, B.queue = null, B.replace = !1, I && A.length === 1)
          x.state = A[0];
        else {
          for (B = I ? A[0] : x.state, be = !0, I = I ? 1 : 0; I < A.length; I++) {
            var te = A[I];
            te = typeof te == "function" ? te.call(x, B, z, G) : te, te != null && (be ? (be = !1, B = Z({}, B, te)) : Z(B, te));
          }
          x.state = B;
        }
      else
        B.queue = null;
  }
  var ln = { id: 1, overflow: "" };
  function Rt(x, A, z) {
    var G = x.id;
    x = x.overflow;
    var be = 32 - zt(G) - 1;
    G &= ~(1 << be), z += 1;
    var B = 32 - zt(A) + be;
    if (30 < B) {
      var I = be - be % 5;
      return B = (G & (1 << I) - 1).toString(32), G >>= I, be -= I, { id: 1 << 32 - zt(A) + be | z << be | G, overflow: B + x };
    }
    return { id: 1 << B | z << be | G, overflow: x };
  }
  var zt = Math.clz32 ? Math.clz32 : cn, Dt = Math.log, Xt = Math.LN2;
  function cn(x) {
    return x >>>= 0, x === 0 ? 32 : 31 - (Dt(x) / Xt | 0) | 0;
  }
  function Ne(x, A) {
    return x === A && (x !== 0 || 1 / x === 1 / A) || x !== x && A !== A;
  }
  var Ct = typeof Object.is == "function" ? Object.is : Ne, qt = null, Ht = null, dn = null, St = null, gn = !1, Lt = !1, Vt = 0, vn = null, Tn = 0;
  function kn() {
    if (qt === null)
      throw Error(t(321));
    return qt;
  }
  function Pe() {
    if (0 < Tn)
      throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function ut() {
    return St === null ? dn === null ? (gn = !1, dn = St = Pe()) : (gn = !0, St = dn) : St.next === null ? (gn = !1, St = St.next = Pe()) : (gn = !0, St = St.next), St;
  }
  function st() {
    Ht = qt = null, Lt = !1, dn = null, Tn = 0, St = vn = null;
  }
  function Je(x, A) {
    return typeof A == "function" ? A(x) : A;
  }
  function yt(x, A, z) {
    if (qt = kn(), St = ut(), gn) {
      var G = St.queue;
      if (A = G.dispatch, vn !== null && (z = vn.get(G), z !== void 0)) {
        vn.delete(G), G = St.memoizedState;
        do
          G = x(G, z.action), z = z.next;
        while (z !== null);
        return St.memoizedState = G, [G, A];
      }
      return [St.memoizedState, A];
    }
    return x = x === Je ? typeof A == "function" ? A() : A : z !== void 0 ? z(A) : A, St.memoizedState = x, x = St.queue = { last: null, dispatch: null }, x = x.dispatch = Dn.bind(null, qt, x), [St.memoizedState, x];
  }
  function nn(x, A) {
    if (qt = kn(), St = ut(), A = A === void 0 ? null : A, St !== null) {
      var z = St.memoizedState;
      if (z !== null && A !== null) {
        var G = z[1];
        e:
          if (G === null)
            G = !1;
          else {
            for (var be = 0; be < G.length && be < A.length; be++)
              if (!Ct(A[be], G[be])) {
                G = !1;
                break e;
              }
            G = !0;
          }
        if (G)
          return z[0];
      }
    }
    return x = x(), St.memoizedState = [x, A], x;
  }
  function Dn(x, A, z) {
    if (25 <= Tn)
      throw Error(t(301));
    if (x === qt)
      if (Lt = !0, x = { action: z, next: null }, vn === null && (vn = /* @__PURE__ */ new Map()), z = vn.get(A), z === void 0)
        vn.set(A, x);
      else {
        for (A = z; A.next !== null; )
          A = A.next;
        A.next = x;
      }
  }
  function X() {
    throw Error(t(394));
  }
  function Fe() {
  }
  var Xe = { readContext: function(x) {
    return x._currentValue2;
  }, useContext: function(x) {
    return kn(), x._currentValue2;
  }, useMemo: nn, useReducer: yt, useRef: function(x) {
    qt = kn(), St = ut();
    var A = St.memoizedState;
    return A === null ? (x = { current: x }, St.memoizedState = x) : A;
  }, useState: function(x) {
    return yt(Je, x);
  }, useInsertionEffect: Fe, useLayoutEffect: function() {
  }, useCallback: function(x, A) {
    return nn(function() {
      return x;
    }, A);
  }, useImperativeHandle: Fe, useEffect: Fe, useDebugValue: Fe, useDeferredValue: function(x) {
    return kn(), x;
  }, useTransition: function() {
    return kn(), [
      !1,
      X
    ];
  }, useId: function() {
    var x = Ht.treeContext, A = x.overflow;
    x = x.id, x = (x & ~(1 << 32 - zt(x) - 1)).toString(32) + A;
    var z = We;
    if (z === null)
      throw Error(t(404));
    return A = Vt++, x = ":" + z.idPrefix + "R" + x, 0 < A && (x += "H" + A.toString(32)), x + ":";
  }, useMutableSource: function(x, A) {
    return kn(), A(x._source);
  }, useSyncExternalStore: function(x, A, z) {
    if (z === void 0)
      throw Error(t(407));
    return z();
  } }, We = null, mt = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function it(x) {
    return console.error(x), null;
  }
  function pt() {
  }
  function Gt(x, A, z, G, be, B, I, te, ye) {
    var Ye = [], et = /* @__PURE__ */ new Set();
    return A = { destination: null, responseState: A, progressiveChunkSize: G === void 0 ? 12800 : G, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: et, pingedTasks: Ye, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: be === void 0 ? it : be, onAllReady: B === void 0 ? pt : B, onShellReady: I === void 0 ? pt : I, onShellError: te === void 0 ? pt : te, onFatalError: ye === void 0 ? pt : ye }, z = Ot(A, 0, null, z, !1, !1), z.parentFlushed = !0, x = He(A, x, null, z, et, rt, null, ln), Ye.push(x), A;
  }
  function He(x, A, z, G, be, B, I, te) {
    x.allPendingTasks++, z === null ? x.pendingRootTasks++ : z.pendingTasks++;
    var ye = { node: A, ping: function() {
      var Ye = x.pingedTasks;
      Ye.push(ye), Ye.length === 1 && Kt(x);
    }, blockedBoundary: z, blockedSegment: G, abortSet: be, legacyContext: B, context: I, treeContext: te };
    return be.add(ye), ye;
  }
  function Ot(x, A, z, G, be, B) {
    return { status: 0, id: -1, index: A, parentFlushed: !1, chunks: [], children: [], formatContext: G, boundary: z, lastPushedText: be, textEmbedded: B };
  }
  function Zt(x, A) {
    if (x = x.onError(A), x != null && typeof x != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof x + '" instead');
    return x;
  }
  function Qt(x, A) {
    var z = x.onShellError;
    z(A), z = x.onFatalError, z(A), x.destination !== null ? (x.status = 2, x.destination.destroy(A)) : (x.status = 1, x.fatalError = A);
  }
  function Ut(x, A, z, G, be) {
    for (qt = {}, Ht = A, Vt = 0, x = z(G, be); Lt; )
      Lt = !1, Vt = 0, Tn += 1, St = null, x = z(G, be);
    return st(), x;
  }
  function Bt(x, A, z, G) {
    var be = z.render(), B = G.childContextTypes;
    if (B != null) {
      var I = A.legacyContext;
      if (typeof z.getChildContext != "function")
        G = I;
      else {
        z = z.getChildContext();
        for (var te in z)
          if (!(te in B))
            throw Error(t(108, Qe(G) || "Unknown", te));
        G = Z({}, I, z);
      }
      A.legacyContext = G, gt(x, A, be), A.legacyContext = I;
    } else
      gt(x, A, be);
  }
  function Mt(x, A) {
    if (x && x.defaultProps) {
      A = Z({}, A), x = x.defaultProps;
      for (var z in x)
        A[z] === void 0 && (A[z] = x[z]);
      return A;
    }
    return A;
  }
  function _t(x, A, z, G, be) {
    if (typeof z == "function")
      if (z.prototype && z.prototype.isReactComponent) {
        be = Ke(z, A.legacyContext);
        var B = z.contextType;
        B = new z(G, typeof B == "object" && B !== null ? B._currentValue2 : be), tn(B, z, G, be), Bt(x, A, B, z);
      } else {
        B = Ke(z, A.legacyContext), be = Ut(x, A, z, G, B);
        var I = Vt !== 0;
        if (typeof be == "object" && be !== null && typeof be.render == "function" && be.$$typeof === void 0)
          tn(be, z, G, B), Bt(x, A, be, z);
        else if (I) {
          G = A.treeContext, A.treeContext = Rt(G, 1, 0);
          try {
            gt(x, A, be);
          } finally {
            A.treeContext = G;
          }
        } else
          gt(x, A, be);
      }
    else if (typeof z == "string") {
      switch (be = A.blockedSegment, B = q(be.chunks, z, G, x.responseState, be.formatContext), be.lastPushedText = !1, I = be.formatContext, be.formatContext = L(I, z, G), xn(x, A, B), be.formatContext = I, z) {
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
        case Ue:
        case Ie:
        case Re:
        case le:
        case ve:
          gt(x, A, G.children);
          return;
        case Le:
          gt(x, A, G.children);
          return;
        case Ce:
          throw Error(t(343));
        case ge:
          e: {
            z = A.blockedBoundary, be = A.blockedSegment, B = G.fallback, G = G.children, I = /* @__PURE__ */ new Set();
            var te = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: I, errorDigest: null }, ye = Ot(x, be.chunks.length, te, be.formatContext, !1, !1);
            be.children.push(ye), be.lastPushedText = !1;
            var Ye = Ot(x, 0, null, be.formatContext, !1, !1);
            Ye.parentFlushed = !0, A.blockedBoundary = te, A.blockedSegment = Ye;
            try {
              if (xn(
                x,
                A,
                G
              ), x.responseState.generateStaticMarkup || Ye.lastPushedText && Ye.textEmbedded && Ye.chunks.push("<!-- -->"), Ye.status = 1, hn(te, Ye), te.pendingTasks === 0)
                break e;
            } catch (et) {
              Ye.status = 4, te.forceClientRender = !0, te.errorDigest = Zt(x, et);
            } finally {
              A.blockedBoundary = z, A.blockedSegment = be;
            }
            A = He(x, B, z, ye, I, A.legacyContext, A.context, A.treeContext), x.pingedTasks.push(A);
          }
          return;
      }
      if (typeof z == "object" && z !== null)
        switch (z.$$typeof) {
          case Te:
            if (G = Ut(x, A, z.render, G, be), Vt !== 0) {
              z = A.treeContext, A.treeContext = Rt(z, 1, 0);
              try {
                gt(x, A, G);
              } finally {
                A.treeContext = z;
              }
            } else
              gt(x, A, G);
            return;
          case oe:
            z = z.type, G = Mt(z, G), _t(x, A, z, G, be);
            return;
          case _e:
            if (be = G.children, z = z._context, G = G.value, B = z._currentValue2, z._currentValue2 = G, I = ze, ze = G = { parent: I, depth: I === null ? 0 : I.depth + 1, context: z, parentValue: B, value: G }, A.context = G, gt(x, A, be), x = ze, x === null)
              throw Error(t(403));
            G = x.parentValue, x.context._currentValue2 = G === qe ? x.context._defaultValue : G, x = ze = x.parent, A.context = x;
            return;
          case Be:
            G = G.children, G = G(z._currentValue2), gt(x, A, G);
            return;
          case we:
            be = z._init, z = be(z._payload), G = Mt(z, G), _t(
              x,
              A,
              z,
              G,
              void 0
            );
            return;
        }
      throw Error(t(130, z == null ? z : typeof z, ""));
    }
  }
  function gt(x, A, z) {
    if (A.node = z, typeof z == "object" && z !== null) {
      switch (z.$$typeof) {
        case ne:
          _t(x, A, z.type, z.props, z.ref);
          return;
        case Ae:
          throw Error(t(257));
        case we:
          var G = z._init;
          z = G(z._payload), gt(x, A, z);
          return;
      }
      if (m(z)) {
        rn(x, A, z);
        return;
      }
      if (z === null || typeof z != "object" ? G = null : (G = at && z[at] || z["@@iterator"], G = typeof G == "function" ? G : null), G && (G = G.call(z))) {
        if (z = G.next(), !z.done) {
          var be = [];
          do
            be.push(z.value), z = G.next();
          while (!z.done);
          rn(x, A, be);
        }
        return;
      }
      throw x = Object.prototype.toString.call(z), Error(t(31, x === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : x));
    }
    typeof z == "string" ? (G = A.blockedSegment, G.lastPushedText = V(A.blockedSegment.chunks, z, x.responseState, G.lastPushedText)) : typeof z == "number" && (G = A.blockedSegment, G.lastPushedText = V(A.blockedSegment.chunks, "" + z, x.responseState, G.lastPushedText));
  }
  function rn(x, A, z) {
    for (var G = z.length, be = 0; be < G; be++) {
      var B = A.treeContext;
      A.treeContext = Rt(B, G, be);
      try {
        xn(x, A, z[be]);
      } finally {
        A.treeContext = B;
      }
    }
  }
  function xn(x, A, z) {
    var G = A.blockedSegment.formatContext, be = A.legacyContext, B = A.context;
    try {
      return gt(x, A, z);
    } catch (ye) {
      if (st(), typeof ye == "object" && ye !== null && typeof ye.then == "function") {
        z = ye;
        var I = A.blockedSegment, te = Ot(x, I.chunks.length, null, I.formatContext, I.lastPushedText, !0);
        I.children.push(te), I.lastPushedText = !1, x = He(x, A.node, A.blockedBoundary, te, A.abortSet, A.legacyContext, A.context, A.treeContext).ping, z.then(x, x), A.blockedSegment.formatContext = G, A.legacyContext = be, A.context = B, dt(B);
      } else
        throw A.blockedSegment.formatContext = G, A.legacyContext = be, A.context = B, dt(B), ye;
    }
  }
  function $t(x) {
    var A = x.blockedBoundary;
    x = x.blockedSegment, x.status = 3, Wt(this, A, x);
  }
  function bn(x, A, z) {
    var G = x.blockedBoundary;
    x.blockedSegment.status = 3, G === null ? (A.allPendingTasks--, A.status !== 2 && (A.status = 2, A.destination !== null && A.destination.push(null))) : (G.pendingTasks--, G.forceClientRender || (G.forceClientRender = !0, x = z === void 0 ? Error(t(432)) : z, G.errorDigest = A.onError(x), G.parentFlushed && A.clientRenderedBoundaries.push(G)), G.fallbackAbortableTasks.forEach(function(be) {
      return bn(be, A, z);
    }), G.fallbackAbortableTasks.clear(), A.allPendingTasks--, A.allPendingTasks === 0 && (G = A.onAllReady, G()));
  }
  function hn(x, A) {
    if (A.chunks.length === 0 && A.children.length === 1 && A.children[0].boundary === null) {
      var z = A.children[0];
      z.id = A.id, z.parentFlushed = !0, z.status === 1 && hn(x, z);
    } else
      x.completedSegments.push(A);
  }
  function Wt(x, A, z) {
    if (A === null) {
      if (z.parentFlushed) {
        if (x.completedRootSegment !== null)
          throw Error(t(389));
        x.completedRootSegment = z;
      }
      x.pendingRootTasks--, x.pendingRootTasks === 0 && (x.onShellError = pt, A = x.onShellReady, A());
    } else
      A.pendingTasks--, A.forceClientRender || (A.pendingTasks === 0 ? (z.parentFlushed && z.status === 1 && hn(A, z), A.parentFlushed && x.completedBoundaries.push(A), A.fallbackAbortableTasks.forEach($t, x), A.fallbackAbortableTasks.clear()) : z.parentFlushed && z.status === 1 && (hn(A, z), A.completedSegments.length === 1 && A.parentFlushed && x.partialBoundaries.push(A)));
    x.allPendingTasks--, x.allPendingTasks === 0 && (x = x.onAllReady, x());
  }
  function Kt(x) {
    if (x.status !== 2) {
      var A = ze, z = mt.current;
      mt.current = Xe;
      var G = We;
      We = x.responseState;
      try {
        var be = x.pingedTasks, B;
        for (B = 0; B < be.length; B++) {
          var I = be[B], te = x, ye = I.blockedSegment;
          if (ye.status === 0) {
            dt(I.context);
            try {
              gt(te, I, I.node), te.responseState.generateStaticMarkup || ye.lastPushedText && ye.textEmbedded && ye.chunks.push("<!-- -->"), I.abortSet.delete(I), ye.status = 1, Wt(te, I.blockedBoundary, ye);
            } catch (_n) {
              if (st(), typeof _n == "object" && _n !== null && typeof _n.then == "function") {
                var Ye = I.ping;
                _n.then(Ye, Ye);
              } else {
                I.abortSet.delete(I), ye.status = 4;
                var et = I.blockedBoundary, At = _n, Cn = Zt(te, At);
                if (et === null ? Qt(te, At) : (et.pendingTasks--, et.forceClientRender || (et.forceClientRender = !0, et.errorDigest = Cn, et.parentFlushed && te.clientRenderedBoundaries.push(et))), te.allPendingTasks--, te.allPendingTasks === 0) {
                  var pn = te.onAllReady;
                  pn();
                }
              }
            } finally {
            }
          }
        }
        be.splice(0, B), x.destination !== null && En(x, x.destination);
      } catch (_n) {
        Zt(x, _n), Qt(x, _n);
      } finally {
        We = G, mt.current = z, z === Xe && dt(A);
      }
    }
  }
  function On(x, A, z) {
    switch (z.parentFlushed = !0, z.status) {
      case 0:
        var G = z.id = x.nextSegmentId++;
        return z.lastPushedText = !1, z.textEmbedded = !1, x = x.responseState, A.push('<template id="'), A.push(x.placeholderPrefix), x = G.toString(16), A.push(x), A.push('"></template>');
      case 1:
        z.status = 2;
        var be = !0;
        G = z.chunks;
        var B = 0;
        z = z.children;
        for (var I = 0; I < z.length; I++) {
          for (be = z[I]; B < be.index; B++)
            A.push(G[B]);
          be = Mn(x, A, be);
        }
        for (; B < G.length - 1; B++)
          A.push(G[B]);
        return B < G.length && (be = A.push(G[B])), be;
      default:
        throw Error(t(390));
    }
  }
  function Mn(x, A, z) {
    var G = z.boundary;
    if (G === null)
      return On(x, A, z);
    if (G.parentFlushed = !0, G.forceClientRender)
      return x.responseState.generateStaticMarkup || (G = G.errorDigest, A.push("<!--$!-->"), A.push("<template"), G && (A.push(' data-dgst="'), G = k(G), A.push(G), A.push('"')), A.push("></template>")), On(x, A, z), x = x.responseState.generateStaticMarkup ? !0 : A.push("<!--/$-->"), x;
    if (0 < G.pendingTasks) {
      G.rootSegmentID = x.nextSegmentId++, 0 < G.completedSegments.length && x.partialBoundaries.push(G);
      var be = x.responseState, B = be.nextSuspenseID++;
      return be = be.boundaryPrefix + B.toString(16), G = G.id = be, me(A, x.responseState, G), On(x, A, z), A.push("<!--/$-->");
    }
    if (G.byteSize > x.progressiveChunkSize)
      return G.rootSegmentID = x.nextSegmentId++, x.completedBoundaries.push(G), me(A, x.responseState, G.id), On(x, A, z), A.push("<!--/$-->");
    if (x.responseState.generateStaticMarkup || A.push("<!--$-->"), z = G.completedSegments, z.length !== 1)
      throw Error(t(391));
    return Mn(x, A, z[0]), x = x.responseState.generateStaticMarkup ? !0 : A.push("<!--/$-->"), x;
  }
  function er(x, A, z) {
    return W(A, x.responseState, z.formatContext, z.id), Mn(x, A, z), se(A, z.formatContext);
  }
  function jn(x, A, z) {
    for (var G = z.completedSegments, be = 0; be < G.length; be++)
      on(x, A, z, G[be]);
    if (G.length = 0, x = x.responseState, G = z.id, z = z.rootSegmentID, A.push(x.startInlineScript), x.sentCompleteBoundaryFunction ? A.push('$RC("') : (x.sentCompleteBoundaryFunction = !0, A.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), G === null)
      throw Error(t(395));
    return z = z.toString(16), A.push(G), A.push('","'), A.push(x.segmentPrefix), A.push(z), A.push('")<\/script>');
  }
  function on(x, A, z, G) {
    if (G.status === 2)
      return !0;
    var be = G.id;
    if (be === -1) {
      if ((G.id = z.rootSegmentID) === -1)
        throw Error(t(392));
      return er(x, A, G);
    }
    return er(x, A, G), x = x.responseState, A.push(x.startInlineScript), x.sentCompleteSegmentFunction ? A.push('$RS("') : (x.sentCompleteSegmentFunction = !0, A.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), A.push(x.segmentPrefix), be = be.toString(16), A.push(be), A.push('","'), A.push(x.placeholderPrefix), A.push(be), A.push('")<\/script>');
  }
  function En(x, A) {
    try {
      var z = x.completedRootSegment;
      if (z !== null && x.pendingRootTasks === 0) {
        Mn(x, A, z), x.completedRootSegment = null;
        var G = x.responseState.bootstrapChunks;
        for (z = 0; z < G.length - 1; z++)
          A.push(G[z]);
        z < G.length && A.push(G[z]);
      }
      var be = x.clientRenderedBoundaries, B;
      for (B = 0; B < be.length; B++) {
        var I = be[B];
        G = A;
        var te = x.responseState, ye = I.id, Ye = I.errorDigest, et = I.errorMessage, At = I.errorComponentStack;
        if (G.push(te.startInlineScript), te.sentClientRenderFunction ? G.push('$RX("') : (te.sentClientRenderFunction = !0, G.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), ye === null)
          throw Error(t(395));
        if (G.push(ye), G.push('"'), Ye || et || At) {
          G.push(",");
          var Cn = he(Ye || "");
          G.push(Cn);
        }
        if (et || At) {
          G.push(",");
          var pn = he(et || "");
          G.push(pn);
        }
        if (At) {
          G.push(",");
          var _n = he(At);
          G.push(_n);
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
            if (!on(be, I, Nr, mr[te])) {
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
      var z = x.abortableTasks;
      z.forEach(function(G) {
        return bn(G, x, A);
      }), z.clear(), x.destination !== null && En(x, x.destination);
    } catch (G) {
      Zt(x, G), Qt(x, G);
    }
  }
  function lr() {
  }
  function sr(x, A, z, G) {
    var be = !1, B = null, I = "", te = { push: function(Ye) {
      return Ye !== null && (I += Ye), !0;
    }, destroy: function(Ye) {
      be = !0, B = Ye;
    } }, ye = !1;
    if (x = Gt(x, ie(z, A ? A.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, lr, void 0, function() {
      ye = !0;
    }, void 0, void 0), Kt(x), pr(x, G), x.status === 1)
      x.status = 2, te.destroy(x.fatalError);
    else if (x.status !== 2 && x.destination === null) {
      x.destination = te;
      try {
        En(x, te);
      } catch (Ye) {
        Zt(x, Ye), Qt(x, Ye);
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
function CE() {
  if (tm)
    return Ou;
  tm = 1;
  var e = ue;
  function t(b) {
    for (var P = "https://reactjs.org/docs/error-decoder.html?invariant=" + b, $ = 1; $ < arguments.length; $++)
      P += "&args[]=" + encodeURIComponent(arguments[$]);
    return "Minified React error #" + b + "; visit " + P + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var n = null, r = 0;
  function a(b, P) {
    if (P.length !== 0)
      if (512 < P.length)
        0 < r && (b.enqueue(new Uint8Array(n.buffer, 0, r)), n = new Uint8Array(512), r = 0), b.enqueue(P);
      else {
        var $ = n.length - r;
        $ < P.length && ($ === 0 ? b.enqueue(n) : (n.set(P.subarray(0, $), r), b.enqueue(n), P = P.subarray($)), n = new Uint8Array(512), r = 0), n.set(P, r), r += P.length;
      }
  }
  function o(b, P) {
    return a(b, P), !0;
  }
  function f(b) {
    n && 0 < r && (b.enqueue(new Uint8Array(n.buffer, 0, r)), n = null, r = 0);
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
  function T(b, P, $, J, Se, xe, Oe) {
    this.acceptsBooleans = P === 2 || P === 3 || P === 4, this.attributeName = J, this.attributeNamespace = Se, this.mustUseProperty = $, this.propertyName = b, this.type = P, this.sanitizeURL = xe, this.removeEmptyString = Oe;
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
  function j(b) {
    if (typeof b == "boolean" || typeof b == "number")
      return "" + b;
    b = "" + b;
    var P = R.exec(b);
    if (P) {
      var $ = "", J, Se = 0;
      for (J = P.index; J < b.length; J++) {
        switch (b.charCodeAt(J)) {
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
        Se !== J && ($ += b.substring(Se, J)), Se = J + 1, $ += P;
      }
      b = Se !== J ? $ + b.substring(Se, J) : $;
    }
    return b;
  }
  var H = /([A-Z])/g, Y = /^ms-/, Q = Array.isArray, re = d("<script>"), K = d("<\/script>"), q = d('<script src="'), me = d('<script type="module" src="'), W = d('" async=""><\/script>'), se = /(<\/|<)(s)(cript)/gi;
  function ce(b, P, $, J) {
    return "" + P + ($ === "s" ? "\\u0073" : "\\u0053") + J;
  }
  function he(b, P, $, J, Se) {
    b = b === void 0 ? "" : b, P = P === void 0 ? re : d('<script nonce="' + j(P) + '">');
    var xe = [];
    if ($ !== void 0 && xe.push(P, c(("" + $).replace(se, ce)), K), J !== void 0)
      for ($ = 0; $ < J.length; $++)
        xe.push(q, c(j(J[$])), W);
    if (Se !== void 0)
      for (J = 0; J < Se.length; J++)
        xe.push(me, c(j(Se[J])), W);
    return { bootstrapChunks: xe, startInlineScript: P, placeholderPrefix: d(b + "P:"), segmentPrefix: d(b + "S:"), boundaryPrefix: b + "B:", idPrefix: b, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function ie(b, P) {
    return { insertionMode: b, selectedValue: P };
  }
  function V(b) {
    return ie(b === "http://www.w3.org/2000/svg" ? 2 : b === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function Z(b, P, $) {
    switch (P) {
      case "select":
        return ie(1, $.value != null ? $.value : $.defaultValue);
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
  function Ae(b, P, $, J) {
    return P === "" ? J : (J && b.push(ne), b.push(c(j(P))), !0);
  }
  var ve = /* @__PURE__ */ new Map(), Re = d(' style="'), le = d(":"), _e = d(";");
  function Be(b, P, $) {
    if (typeof $ != "object")
      throw Error(t(62));
    P = !0;
    for (var J in $)
      if (y.call($, J)) {
        var Se = $[J];
        if (Se != null && typeof Se != "boolean" && Se !== "") {
          if (J.indexOf("--") === 0) {
            var xe = c(j(J));
            Se = c(j(("" + Se).trim()));
          } else {
            xe = J;
            var Oe = ve.get(xe);
            Oe !== void 0 || (Oe = d(j(xe.replace(H, "-$1").toLowerCase().replace(Y, "-ms-"))), ve.set(xe, Oe)), xe = Oe, Se = typeof Se == "number" ? Se === 0 || y.call(_, J) ? c("" + Se) : c(Se + "px") : c(j(("" + Se).trim()));
          }
          P ? (P = !1, b.push(Re, xe, le, Se)) : b.push(_e, xe, le, Se);
        }
      }
    P || b.push(Le);
  }
  var Te = d(" "), ge = d('="'), Le = d('"'), oe = d('=""');
  function we(b, P, $, J) {
    switch ($) {
      case "style":
        Be(b, P, J);
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
        switch (typeof J) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!P.acceptsBooleans)
              return;
        }
        switch ($ = c(P.attributeName), P.type) {
          case 3:
            J && b.push(Te, $, oe);
            break;
          case 4:
            J === !0 ? b.push(Te, $, oe) : J !== !1 && b.push(Te, $, ge, c(j(J)), Le);
            break;
          case 5:
            isNaN(J) || b.push(Te, $, ge, c(j(J)), Le);
            break;
          case 6:
            !isNaN(J) && 1 <= J && b.push(Te, $, ge, c(j(J)), Le);
            break;
          default:
            P.sanitizeURL && (J = "" + J), b.push(Te, $, ge, c(j(J)), Le);
        }
      } else if (M($)) {
        switch (typeof J) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (P = $.toLowerCase().slice(0, 5), P !== "data-" && P !== "aria-")
              return;
        }
        b.push(Te, c($), ge, c(j(J)), Le);
      }
    }
  }
  var Ce = d(">"), Ie = d("/>");
  function Ue(b, P, $) {
    if (P != null) {
      if ($ != null)
        throw Error(t(60));
      if (typeof P != "object" || !("__html" in P))
        throw Error(t(61));
      P = P.__html, P != null && b.push(c("" + P));
    }
  }
  function qe(b) {
    var P = "";
    return e.Children.forEach(b, function($) {
      $ != null && (P += $);
    }), P;
  }
  var at = d(' selected=""');
  function Qe(b, P, $, J) {
    b.push(Me($));
    var Se = $ = null, xe;
    for (xe in P)
      if (y.call(P, xe)) {
        var Oe = P[xe];
        if (Oe != null)
          switch (xe) {
            case "children":
              $ = Oe;
              break;
            case "dangerouslySetInnerHTML":
              Se = Oe;
              break;
            default:
              we(b, J, xe, Oe);
          }
      }
    return b.push(Ce), Ue(b, Se, $), typeof $ == "string" ? (b.push(c(j($))), null) : $;
  }
  var rt = d(`
`), Ke = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ze = /* @__PURE__ */ new Map();
  function Me(b) {
    var P = ze.get(b);
    if (P === void 0) {
      if (!Ke.test(b))
        throw Error(t(65, b));
      P = d("<" + b), ze.set(b, P);
    }
    return P;
  }
  var ct = d("<!DOCTYPE html>");
  function je(b, P, $, J, Se) {
    switch (P) {
      case "select":
        b.push(Me("select"));
        var xe = null, Oe = null;
        for (Et in $)
          if (y.call($, Et)) {
            var Ve = $[Et];
            if (Ve != null)
              switch (Et) {
                case "children":
                  xe = Ve;
                  break;
                case "dangerouslySetInnerHTML":
                  Oe = Ve;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  we(b, J, Et, Ve);
              }
          }
        return b.push(Ce), Ue(b, Oe, xe), xe;
      case "option":
        Oe = Se.selectedValue, b.push(Me("option"));
        var ht = Ve = null, Pt = null, Et = null;
        for (xe in $)
          if (y.call($, xe)) {
            var an = $[xe];
            if (an != null)
              switch (xe) {
                case "children":
                  Ve = an;
                  break;
                case "selected":
                  Pt = an;
                  break;
                case "dangerouslySetInnerHTML":
                  Et = an;
                  break;
                case "value":
                  ht = an;
                default:
                  we(b, J, xe, an);
              }
          }
        if (Oe != null)
          if ($ = ht !== null ? "" + ht : qe(Ve), Q(Oe)) {
            for (J = 0; J < Oe.length; J++)
              if ("" + Oe[J] === $) {
                b.push(at);
                break;
              }
          } else
            "" + Oe === $ && b.push(at);
        else
          Pt && b.push(at);
        return b.push(Ce), Ue(b, Et, Ve), Ve;
      case "textarea":
        b.push(Me("textarea")), Et = Oe = xe = null;
        for (Ve in $)
          if (y.call($, Ve) && (ht = $[Ve], ht != null))
            switch (Ve) {
              case "children":
                Et = ht;
                break;
              case "value":
                xe = ht;
                break;
              case "defaultValue":
                Oe = ht;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(91));
              default:
                we(b, J, Ve, ht);
            }
        if (xe === null && Oe !== null && (xe = Oe), b.push(Ce), Et != null) {
          if (xe != null)
            throw Error(t(92));
          if (Q(Et) && 1 < Et.length)
            throw Error(t(93));
          xe = "" + Et;
        }
        return typeof xe == "string" && xe[0] === `
` && b.push(rt), xe !== null && b.push(c(j("" + xe))), null;
      case "input":
        b.push(Me("input")), ht = Et = Ve = xe = null;
        for (Oe in $)
          if (y.call($, Oe) && (Pt = $[Oe], Pt != null))
            switch (Oe) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, "input"));
              case "defaultChecked":
                ht = Pt;
                break;
              case "defaultValue":
                Ve = Pt;
                break;
              case "checked":
                Et = Pt;
                break;
              case "value":
                xe = Pt;
                break;
              default:
                we(b, J, Oe, Pt);
            }
        return Et !== null ? we(
          b,
          J,
          "checked",
          Et
        ) : ht !== null && we(b, J, "checked", ht), xe !== null ? we(b, J, "value", xe) : Ve !== null && we(b, J, "value", Ve), b.push(Ie), null;
      case "menuitem":
        b.push(Me("menuitem"));
        for (var In in $)
          if (y.call($, In) && (xe = $[In], xe != null))
            switch (In) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(400));
              default:
                we(b, J, In, xe);
            }
        return b.push(Ce), null;
      case "title":
        b.push(Me("title")), xe = null;
        for (an in $)
          if (y.call($, an) && (Oe = $[an], Oe != null))
            switch (an) {
              case "children":
                xe = Oe;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(434));
              default:
                we(b, J, an, Oe);
            }
        return b.push(Ce), xe;
      case "listing":
      case "pre":
        b.push(Me(P)), Oe = xe = null;
        for (ht in $)
          if (y.call($, ht) && (Ve = $[ht], Ve != null))
            switch (ht) {
              case "children":
                xe = Ve;
                break;
              case "dangerouslySetInnerHTML":
                Oe = Ve;
                break;
              default:
                we(b, J, ht, Ve);
            }
        if (b.push(Ce), Oe != null) {
          if (xe != null)
            throw Error(t(60));
          if (typeof Oe != "object" || !("__html" in Oe))
            throw Error(t(61));
          $ = Oe.__html, $ != null && (typeof $ == "string" && 0 < $.length && $[0] === `
` ? b.push(rt, c($)) : b.push(c("" + $)));
        }
        return typeof xe == "string" && xe[0] === `
` && b.push(rt), xe;
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
        for (var Yn in $)
          if (y.call($, Yn) && (xe = $[Yn], xe != null))
            switch (Yn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, P));
              default:
                we(b, J, Yn, xe);
            }
        return b.push(Ie), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Qe(b, $, P, J);
      case "html":
        return Se.insertionMode === 0 && b.push(ct), Qe(b, $, P, J);
      default:
        if (P.indexOf("-") === -1 && typeof $.is != "string")
          return Qe(b, $, P, J);
        b.push(Me(P)), Oe = xe = null;
        for (Pt in $)
          if (y.call($, Pt) && (Ve = $[Pt], Ve != null))
            switch (Pt) {
              case "children":
                xe = Ve;
                break;
              case "dangerouslySetInnerHTML":
                Oe = Ve;
                break;
              case "style":
                Be(b, J, Ve);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                M(Pt) && typeof Ve != "function" && typeof Ve != "symbol" && b.push(Te, c(Pt), ge, c(j(Ve)), Le);
            }
        return b.push(Ce), Ue(b, Oe, xe), xe;
    }
  }
  var Ge = d("</"), ot = d(">"), dt = d('<template id="'), Tt = d('"></template>'), tn = d("<!--$-->"), ln = d('<!--$?--><template id="'), Rt = d('"></template>'), zt = d("<!--$!-->"), Dt = d("<!--/$-->"), Xt = d("<template"), cn = d('"'), Ne = d(' data-dgst="');
  d(' data-msg="'), d(' data-stck="');
  var Ct = d("></template>");
  function qt(b, P, $) {
    if (a(b, ln), $ === null)
      throw Error(t(395));
    return a(b, $), o(b, Rt);
  }
  var Ht = d('<div hidden id="'), dn = d('">'), St = d("</div>"), gn = d('<svg aria-hidden="true" style="display:none" id="'), Lt = d('">'), Vt = d("</svg>"), vn = d('<math aria-hidden="true" style="display:none" id="'), Tn = d('">'), kn = d("</math>"), Pe = d('<table hidden id="'), ut = d('">'), st = d("</table>"), Je = d('<table hidden><tbody id="'), yt = d('">'), nn = d("</tbody></table>"), Dn = d('<table hidden><tr id="'), X = d('">'), Fe = d("</tr></table>"), Xe = d('<table hidden><colgroup id="'), We = d('">'), mt = d("</colgroup></table>");
  function it(b, P, $, J) {
    switch ($.insertionMode) {
      case 0:
      case 1:
        return a(b, Ht), a(b, P.segmentPrefix), a(b, c(J.toString(16))), o(b, dn);
      case 2:
        return a(b, gn), a(b, P.segmentPrefix), a(b, c(J.toString(16))), o(b, Lt);
      case 3:
        return a(b, vn), a(b, P.segmentPrefix), a(b, c(J.toString(16))), o(b, Tn);
      case 4:
        return a(b, Pe), a(b, P.segmentPrefix), a(b, c(J.toString(16))), o(b, ut);
      case 5:
        return a(b, Je), a(b, P.segmentPrefix), a(b, c(J.toString(16))), o(b, yt);
      case 6:
        return a(b, Dn), a(b, P.segmentPrefix), a(b, c(J.toString(16))), o(b, X);
      case 7:
        return a(
          b,
          Xe
        ), a(b, P.segmentPrefix), a(b, c(J.toString(16))), o(b, We);
      default:
        throw Error(t(397));
    }
  }
  function pt(b, P) {
    switch (P.insertionMode) {
      case 0:
      case 1:
        return o(b, St);
      case 2:
        return o(b, Vt);
      case 3:
        return o(b, kn);
      case 4:
        return o(b, st);
      case 5:
        return o(b, nn);
      case 6:
        return o(b, Fe);
      case 7:
        return o(b, mt);
      default:
        throw Error(t(397));
    }
  }
  var Gt = d('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), He = d('$RS("'), Ot = d('","'), Zt = d('")<\/script>'), Qt = d('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), Ut = d('$RC("'), Bt = d('","'), Mt = d('")<\/script>'), _t = d('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), gt = d('$RX("'), rn = d('"'), xn = d(")<\/script>"), $t = d(","), bn = /[<\u2028\u2029]/g;
  function hn(b) {
    return JSON.stringify(b).replace(bn, function(P) {
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
  var Wt = Object.assign, Kt = Symbol.for("react.element"), On = Symbol.for("react.portal"), Mn = Symbol.for("react.fragment"), er = Symbol.for("react.strict_mode"), jn = Symbol.for("react.profiler"), on = Symbol.for("react.provider"), En = Symbol.for("react.context"), pr = Symbol.for("react.forward_ref"), lr = Symbol.for("react.suspense"), sr = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), z = Symbol.for("react.scope"), G = Symbol.for("react.debug_trace_mode"), be = Symbol.for("react.legacy_hidden"), B = Symbol.for("react.default_value"), I = Symbol.iterator;
  function te(b) {
    if (b == null)
      return null;
    if (typeof b == "function")
      return b.displayName || b.name || null;
    if (typeof b == "string")
      return b;
    switch (b) {
      case Mn:
        return "Fragment";
      case On:
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
        case En:
          return (b.displayName || "Context") + ".Consumer";
        case on:
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
    var $ = {}, J;
    for (J in b)
      $[J] = P[J];
    return $;
  }
  var et = null;
  function At(b, P) {
    if (b !== P) {
      b.context._currentValue = b.parentValue, b = b.parent;
      var $ = P.parent;
      if (b === null) {
        if ($ !== null)
          throw Error(t(401));
      } else {
        if ($ === null)
          throw Error(t(401));
        At(b, $);
      }
      P.context._currentValue = P.value;
    }
  }
  function Cn(b) {
    b.context._currentValue = b.parentValue, b = b.parent, b !== null && Cn(b);
  }
  function pn(b) {
    var P = b.parent;
    P !== null && pn(P), b.context._currentValue = b.value;
  }
  function _n(b, P) {
    if (b.context._currentValue = b.parentValue, b = b.parent, b === null)
      throw Error(t(402));
    b.depth === P.depth ? At(b, P) : _n(b, P);
  }
  function ur(b, P) {
    var $ = P.parent;
    if ($ === null)
      throw Error(t(402));
    b.depth === $.depth ? At(b, $) : ur(b, $), P.context._currentValue = P.value;
  }
  function Un(b) {
    var P = et;
    P !== b && (P === null ? pn(b) : b === null ? Cn(P) : P.depth === b.depth ? At(P, b) : P.depth > b.depth ? _n(P, b) : ur(P, b), et = b);
  }
  var Nr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(b, P) {
    b = b._reactInternals, b.queue !== null && b.queue.push(P);
  }, enqueueReplaceState: function(b, P) {
    b = b._reactInternals, b.replace = !0, b.queue = [P];
  }, enqueueForceUpdate: function() {
  } };
  function mr(b, P, $, J) {
    var Se = b.state !== void 0 ? b.state : null;
    b.updater = Nr, b.props = $, b.state = Se;
    var xe = { queue: [], replace: !1 };
    b._reactInternals = xe;
    var Oe = P.contextType;
    if (b.context = typeof Oe == "object" && Oe !== null ? Oe._currentValue : J, Oe = P.getDerivedStateFromProps, typeof Oe == "function" && (Oe = Oe($, Se), Se = Oe == null ? Se : Wt({}, Se, Oe), b.state = Se), typeof P.getDerivedStateFromProps != "function" && typeof b.getSnapshotBeforeUpdate != "function" && (typeof b.UNSAFE_componentWillMount == "function" || typeof b.componentWillMount == "function"))
      if (P = b.state, typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount(), P !== b.state && Nr.enqueueReplaceState(b, b.state, null), xe.queue !== null && 0 < xe.queue.length)
        if (P = xe.queue, Oe = xe.replace, xe.queue = null, xe.replace = !1, Oe && P.length === 1)
          b.state = P[0];
        else {
          for (xe = Oe ? P[0] : b.state, Se = !0, Oe = Oe ? 1 : 0; Oe < P.length; Oe++) {
            var Ve = P[Oe];
            Ve = typeof Ve == "function" ? Ve.call(b, xe, $, J) : Ve, Ve != null && (Se ? (Se = !1, xe = Wt({}, xe, Ve)) : Wt(xe, Ve));
          }
          b.state = xe;
        }
      else
        xe.queue = null;
  }
  var Tr = { id: 1, overflow: "" };
  function cr(b, P, $) {
    var J = b.id;
    b = b.overflow;
    var Se = 32 - Zr(J) - 1;
    J &= ~(1 << Se), $ += 1;
    var xe = 32 - Zr(P) + Se;
    if (30 < xe) {
      var Oe = Se - Se % 5;
      return xe = (J & (1 << Oe) - 1).toString(32), J >>= Oe, Se -= Oe, { id: 1 << 32 - Zr(P) + Se | $ << Se | J, overflow: xe + b };
    }
    return { id: 1 << xe | $ << Se | J, overflow: b };
  }
  var Zr = Math.clz32 ? Math.clz32 : Ua, al = Math.log, il = Math.LN2;
  function Ua(b) {
    return b >>>= 0, b === 0 ? 32 : 31 - (al(b) / il | 0) | 0;
  }
  function ol(b, P) {
    return b === P && (b !== 0 || 1 / b === 1 / P) || b !== b && P !== P;
  }
  var Ka = typeof Object.is == "function" ? Object.is : ol, dr = null, Qr = null, ha = null, Jt = null, gr = !1, zn = !1, Cr = 0, yr = null, pa = 0;
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
    return Jt === null ? ha === null ? (gr = !1, ha = Jt = Kn()) : (gr = !0, Jt = ha) : Jt.next === null ? (gr = !1, Jt = Jt.next = Kn()) : (gr = !0, Jt = Jt.next), Jt;
  }
  function Xa() {
    Qr = dr = null, zn = !1, ha = null, pa = 0, Jt = yr = null;
  }
  function Vi(b, P) {
    return typeof P == "function" ? P(b) : P;
  }
  function ji(b, P, $) {
    if (dr = vr(), Jt = Ya(), gr) {
      var J = Jt.queue;
      if (P = J.dispatch, yr !== null && ($ = yr.get(J), $ !== void 0)) {
        yr.delete(J), J = Jt.memoizedState;
        do
          J = b(J, $.action), $ = $.next;
        while ($ !== null);
        return Jt.memoizedState = J, [J, P];
      }
      return [Jt.memoizedState, P];
    }
    return b = b === Vi ? typeof P == "function" ? P() : P : $ !== void 0 ? $(P) : P, Jt.memoizedState = b, b = Jt.queue = { last: null, dispatch: null }, b = b.dispatch = ll.bind(null, dr, b), [Jt.memoizedState, b];
  }
  function Ui(b, P) {
    if (dr = vr(), Jt = Ya(), P = P === void 0 ? null : P, Jt !== null) {
      var $ = Jt.memoizedState;
      if ($ !== null && P !== null) {
        var J = $[1];
        e:
          if (J === null)
            J = !1;
          else {
            for (var Se = 0; Se < J.length && Se < P.length; Se++)
              if (!Ka(P[Se], J[Se])) {
                J = !1;
                break e;
              }
            J = !0;
          }
        if (J)
          return $[0];
      }
    }
    return b = b(), Jt.memoizedState = [b, P], b;
  }
  function ll(b, P, $) {
    if (25 <= pa)
      throw Error(t(301));
    if (b === dr)
      if (zn = !0, b = { action: $, next: null }, yr === null && (yr = /* @__PURE__ */ new Map()), $ = yr.get(P), $ === void 0)
        yr.set(P, b);
      else {
        for (P = $; P.next !== null; )
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
    dr = vr(), Jt = Ya();
    var P = Jt.memoizedState;
    return P === null ? (b = { current: b }, Jt.memoizedState = b) : P;
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
    var $ = ya;
    if ($ === null)
      throw Error(t(404));
    return P = Cr++, b = ":" + $.idPrefix + "R" + b, 0 < P && (b += "H" + P.toString(32)), b + ":";
  }, useMutableSource: function(b, P) {
    return vr(), P(b._source);
  }, useSyncExternalStore: function(b, P, $) {
    if ($ === void 0)
      throw Error(t(407));
    return $();
  } }, ya = null, Jr = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function ul(b) {
    return console.error(b), null;
  }
  function ea() {
  }
  function qa(b, P, $, J, Se, xe, Oe, Ve, ht) {
    var Pt = [], Et = /* @__PURE__ */ new Set();
    return P = { destination: null, responseState: P, progressiveChunkSize: J === void 0 ? 12800 : J, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Et, pingedTasks: Pt, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: Se === void 0 ? ul : Se, onAllReady: xe === void 0 ? ea : xe, onShellReady: Oe === void 0 ? ea : Oe, onShellError: Ve === void 0 ? ea : Ve, onFatalError: ht === void 0 ? ea : ht }, $ = Fr(P, 0, null, $, !1, !1), $.parentFlushed = !0, b = Ga(P, b, null, $, Et, ye, null, Tr), Pt.push(b), P;
  }
  function Ga(b, P, $, J, Se, xe, Oe, Ve) {
    b.allPendingTasks++, $ === null ? b.pendingRootTasks++ : $.pendingTasks++;
    var ht = { node: P, ping: function() {
      var Pt = b.pingedTasks;
      Pt.push(ht), Pt.length === 1 && Zi(b);
    }, blockedBoundary: $, blockedSegment: J, abortSet: Se, legacyContext: xe, context: Oe, treeContext: Ve };
    return Se.add(ht), ht;
  }
  function Fr(b, P, $, J, Se, xe) {
    return { status: 0, id: -1, index: P, parentFlushed: !1, chunks: [], children: [], formatContext: J, boundary: $, lastPushedText: Se, textEmbedded: xe };
  }
  function $r(b, P) {
    if (b = b.onError(P), b != null && typeof b != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof b + '" instead');
    return b;
  }
  function va(b, P) {
    var $ = b.onShellError;
    $(P), $ = b.onFatalError, $(P), b.destination !== null ? (b.status = 2, g(b.destination, P)) : (b.status = 1, b.fatalError = P);
  }
  function Ki(b, P, $, J, Se) {
    for (dr = {}, Qr = P, Cr = 0, b = $(J, Se); zn; )
      zn = !1, Cr = 0, pa += 1, Jt = null, b = $(J, Se);
    return Xa(), b;
  }
  function Za(b, P, $, J) {
    var Se = $.render(), xe = J.childContextTypes;
    if (xe != null) {
      var Oe = P.legacyContext;
      if (typeof $.getChildContext != "function")
        J = Oe;
      else {
        $ = $.getChildContext();
        for (var Ve in $)
          if (!(Ve in xe))
            throw Error(t(108, te(J) || "Unknown", Ve));
        J = Wt({}, Oe, $);
      }
      P.legacyContext = J, Bn(b, P, Se), P.legacyContext = Oe;
    } else
      Bn(b, P, Se);
  }
  function Yi(b, P) {
    if (b && b.defaultProps) {
      P = Wt({}, P), b = b.defaultProps;
      for (var $ in b)
        P[$] === void 0 && (P[$] = b[$]);
      return P;
    }
    return P;
  }
  function xa(b, P, $, J, Se) {
    if (typeof $ == "function")
      if ($.prototype && $.prototype.isReactComponent) {
        Se = Ye($, P.legacyContext);
        var xe = $.contextType;
        xe = new $(J, typeof xe == "object" && xe !== null ? xe._currentValue : Se), mr(xe, $, J, Se), Za(b, P, xe, $);
      } else {
        xe = Ye($, P.legacyContext), Se = Ki(b, P, $, J, xe);
        var Oe = Cr !== 0;
        if (typeof Se == "object" && Se !== null && typeof Se.render == "function" && Se.$$typeof === void 0)
          mr(Se, $, J, xe), Za(b, P, Se, $);
        else if (Oe) {
          J = P.treeContext, P.treeContext = cr(J, 1, 0);
          try {
            Bn(b, P, Se);
          } finally {
            P.treeContext = J;
          }
        } else
          Bn(b, P, Se);
      }
    else if (typeof $ == "string") {
      switch (Se = P.blockedSegment, xe = je(Se.chunks, $, J, b.responseState, Se.formatContext), Se.lastPushedText = !1, Oe = Se.formatContext, Se.formatContext = Z(Oe, $, J), ba(b, P, xe), Se.formatContext = Oe, $) {
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
          Se.chunks.push(Ge, c($), ot);
      }
      Se.lastPushedText = !1;
    } else {
      switch ($) {
        case be:
        case G:
        case er:
        case jn:
        case Mn:
          Bn(b, P, J.children);
          return;
        case sr:
          Bn(b, P, J.children);
          return;
        case z:
          throw Error(t(343));
        case lr:
          e: {
            $ = P.blockedBoundary, Se = P.blockedSegment, xe = J.fallback, J = J.children, Oe = /* @__PURE__ */ new Set();
            var Ve = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: Oe, errorDigest: null }, ht = Fr(b, Se.chunks.length, Ve, Se.formatContext, !1, !1);
            Se.children.push(ht), Se.lastPushedText = !1;
            var Pt = Fr(b, 0, null, Se.formatContext, !1, !1);
            Pt.parentFlushed = !0, P.blockedBoundary = Ve, P.blockedSegment = Pt;
            try {
              if (ba(
                b,
                P,
                J
              ), Pt.lastPushedText && Pt.textEmbedded && Pt.chunks.push(ne), Pt.status = 1, Sa(Ve, Pt), Ve.pendingTasks === 0)
                break e;
            } catch (Et) {
              Pt.status = 4, Ve.forceClientRender = !0, Ve.errorDigest = $r(b, Et);
            } finally {
              P.blockedBoundary = $, P.blockedSegment = Se;
            }
            P = Ga(b, xe, $, ht, Oe, P.legacyContext, P.context, P.treeContext), b.pingedTasks.push(P);
          }
          return;
      }
      if (typeof $ == "object" && $ !== null)
        switch ($.$$typeof) {
          case pr:
            if (J = Ki(b, P, $.render, J, Se), Cr !== 0) {
              $ = P.treeContext, P.treeContext = cr($, 1, 0);
              try {
                Bn(b, P, J);
              } finally {
                P.treeContext = $;
              }
            } else
              Bn(b, P, J);
            return;
          case x:
            $ = $.type, J = Yi($, J), xa(b, P, $, J, Se);
            return;
          case on:
            if (Se = J.children, $ = $._context, J = J.value, xe = $._currentValue, $._currentValue = J, Oe = et, et = J = { parent: Oe, depth: Oe === null ? 0 : Oe.depth + 1, context: $, parentValue: xe, value: J }, P.context = J, Bn(b, P, Se), b = et, b === null)
              throw Error(t(403));
            J = b.parentValue, b.context._currentValue = J === B ? b.context._defaultValue : J, b = et = b.parent, P.context = b;
            return;
          case En:
            J = J.children, J = J($._currentValue), Bn(b, P, J);
            return;
          case A:
            Se = $._init, $ = Se($._payload), J = Yi($, J), xa(b, P, $, J, void 0);
            return;
        }
      throw Error(t(
        130,
        $ == null ? $ : typeof $,
        ""
      ));
    }
  }
  function Bn(b, P, $) {
    if (P.node = $, typeof $ == "object" && $ !== null) {
      switch ($.$$typeof) {
        case Kt:
          xa(b, P, $.type, $.props, $.ref);
          return;
        case On:
          throw Error(t(257));
        case A:
          var J = $._init;
          $ = J($._payload), Bn(b, P, $);
          return;
      }
      if (Q($)) {
        Xi(b, P, $);
        return;
      }
      if ($ === null || typeof $ != "object" ? J = null : (J = I && $[I] || $["@@iterator"], J = typeof J == "function" ? J : null), J && (J = J.call($))) {
        if ($ = J.next(), !$.done) {
          var Se = [];
          do
            Se.push($.value), $ = J.next();
          while (!$.done);
          Xi(b, P, Se);
        }
        return;
      }
      throw b = Object.prototype.toString.call($), Error(t(31, b === "[object Object]" ? "object with keys {" + Object.keys($).join(", ") + "}" : b));
    }
    typeof $ == "string" ? (J = P.blockedSegment, J.lastPushedText = Ae(P.blockedSegment.chunks, $, b.responseState, J.lastPushedText)) : typeof $ == "number" && (J = P.blockedSegment, J.lastPushedText = Ae(P.blockedSegment.chunks, "" + $, b.responseState, J.lastPushedText));
  }
  function Xi(b, P, $) {
    for (var J = $.length, Se = 0; Se < J; Se++) {
      var xe = P.treeContext;
      P.treeContext = cr(xe, J, Se);
      try {
        ba(b, P, $[Se]);
      } finally {
        P.treeContext = xe;
      }
    }
  }
  function ba(b, P, $) {
    var J = P.blockedSegment.formatContext, Se = P.legacyContext, xe = P.context;
    try {
      return Bn(b, P, $);
    } catch (ht) {
      if (Xa(), typeof ht == "object" && ht !== null && typeof ht.then == "function") {
        $ = ht;
        var Oe = P.blockedSegment, Ve = Fr(b, Oe.chunks.length, null, Oe.formatContext, Oe.lastPushedText, !0);
        Oe.children.push(Ve), Oe.lastPushedText = !1, b = Ga(b, P.node, P.blockedBoundary, Ve, P.abortSet, P.legacyContext, P.context, P.treeContext).ping, $.then(b, b), P.blockedSegment.formatContext = J, P.legacyContext = Se, P.context = xe, Un(xe);
      } else
        throw P.blockedSegment.formatContext = J, P.legacyContext = Se, P.context = xe, Un(xe), ht;
    }
  }
  function cl(b) {
    var P = b.blockedBoundary;
    b = b.blockedSegment, b.status = 3, Gi(this, P, b);
  }
  function qi(b, P, $) {
    var J = b.blockedBoundary;
    b.blockedSegment.status = 3, J === null ? (P.allPendingTasks--, P.status !== 2 && (P.status = 2, P.destination !== null && P.destination.close())) : (J.pendingTasks--, J.forceClientRender || (J.forceClientRender = !0, b = $ === void 0 ? Error(t(432)) : $, J.errorDigest = P.onError(b), J.parentFlushed && P.clientRenderedBoundaries.push(J)), J.fallbackAbortableTasks.forEach(function(Se) {
      return qi(Se, P, $);
    }), J.fallbackAbortableTasks.clear(), P.allPendingTasks--, P.allPendingTasks === 0 && (J = P.onAllReady, J()));
  }
  function Sa(b, P) {
    if (P.chunks.length === 0 && P.children.length === 1 && P.children[0].boundary === null) {
      var $ = P.children[0];
      $.id = P.id, $.parentFlushed = !0, $.status === 1 && Sa(b, $);
    } else
      b.completedSegments.push(P);
  }
  function Gi(b, P, $) {
    if (P === null) {
      if ($.parentFlushed) {
        if (b.completedRootSegment !== null)
          throw Error(t(389));
        b.completedRootSegment = $;
      }
      b.pendingRootTasks--, b.pendingRootTasks === 0 && (b.onShellError = ea, P = b.onShellReady, P());
    } else
      P.pendingTasks--, P.forceClientRender || (P.pendingTasks === 0 ? ($.parentFlushed && $.status === 1 && Sa(P, $), P.parentFlushed && b.completedBoundaries.push(P), P.fallbackAbortableTasks.forEach(cl, b), P.fallbackAbortableTasks.clear()) : $.parentFlushed && $.status === 1 && (Sa(P, $), P.completedSegments.length === 1 && P.parentFlushed && b.partialBoundaries.push(P)));
    b.allPendingTasks--, b.allPendingTasks === 0 && (b = b.onAllReady, b());
  }
  function Zi(b) {
    if (b.status !== 2) {
      var P = et, $ = Jr.current;
      Jr.current = ga;
      var J = ya;
      ya = b.responseState;
      try {
        var Se = b.pingedTasks, xe;
        for (xe = 0; xe < Se.length; xe++) {
          var Oe = Se[xe], Ve = b, ht = Oe.blockedSegment;
          if (ht.status === 0) {
            Un(Oe.context);
            try {
              Bn(Ve, Oe, Oe.node), ht.lastPushedText && ht.textEmbedded && ht.chunks.push(ne), Oe.abortSet.delete(Oe), ht.status = 1, Gi(Ve, Oe.blockedBoundary, ht);
            } catch (Xn) {
              if (Xa(), typeof Xn == "object" && Xn !== null && typeof Xn.then == "function") {
                var Pt = Oe.ping;
                Xn.then(Pt, Pt);
              } else {
                Oe.abortSet.delete(Oe), ht.status = 4;
                var Et = Oe.blockedBoundary, an = Xn, In = $r(Ve, an);
                if (Et === null ? va(Ve, an) : (Et.pendingTasks--, Et.forceClientRender || (Et.forceClientRender = !0, Et.errorDigest = In, Et.parentFlushed && Ve.clientRenderedBoundaries.push(Et))), Ve.allPendingTasks--, Ve.allPendingTasks === 0) {
                  var Yn = Ve.onAllReady;
                  Yn();
                }
              }
            } finally {
            }
          }
        }
        Se.splice(0, xe), b.destination !== null && Qa(b, b.destination);
      } catch (Xn) {
        $r(b, Xn), va(b, Xn);
      } finally {
        ya = J, Jr.current = $, $ === ga && Un(P);
      }
    }
  }
  function Ea(b, P, $) {
    switch ($.parentFlushed = !0, $.status) {
      case 0:
        var J = $.id = b.nextSegmentId++;
        return $.lastPushedText = !1, $.textEmbedded = !1, b = b.responseState, a(P, dt), a(P, b.placeholderPrefix), b = c(J.toString(16)), a(P, b), o(P, Tt);
      case 1:
        $.status = 2;
        var Se = !0;
        J = $.chunks;
        var xe = 0;
        $ = $.children;
        for (var Oe = 0; Oe < $.length; Oe++) {
          for (Se = $[Oe]; xe < Se.index; xe++)
            a(P, J[xe]);
          Se = ka(b, P, Se);
        }
        for (; xe < J.length - 1; xe++)
          a(P, J[xe]);
        return xe < J.length && (Se = o(P, J[xe])), Se;
      default:
        throw Error(t(390));
    }
  }
  function ka(b, P, $) {
    var J = $.boundary;
    if (J === null)
      return Ea(b, P, $);
    if (J.parentFlushed = !0, J.forceClientRender)
      J = J.errorDigest, o(P, zt), a(P, Xt), J && (a(P, Ne), a(P, c(j(J))), a(P, cn)), o(P, Ct), Ea(b, P, $);
    else if (0 < J.pendingTasks) {
      J.rootSegmentID = b.nextSegmentId++, 0 < J.completedSegments.length && b.partialBoundaries.push(J);
      var Se = b.responseState, xe = Se.nextSuspenseID++;
      Se = d(Se.boundaryPrefix + xe.toString(16)), J = J.id = Se, qt(P, b.responseState, J), Ea(b, P, $);
    } else if (J.byteSize > b.progressiveChunkSize)
      J.rootSegmentID = b.nextSegmentId++, b.completedBoundaries.push(J), qt(P, b.responseState, J.id), Ea(b, P, $);
    else {
      if (o(P, tn), $ = J.completedSegments, $.length !== 1)
        throw Error(t(391));
      ka(b, P, $[0]);
    }
    return o(P, Dt);
  }
  function Qi(b, P, $) {
    return it(P, b.responseState, $.formatContext, $.id), ka(b, P, $), pt(P, $.formatContext);
  }
  function Ji(b, P, $) {
    for (var J = $.completedSegments, Se = 0; Se < J.length; Se++)
      eo(b, P, $, J[Se]);
    if (J.length = 0, b = b.responseState, J = $.id, $ = $.rootSegmentID, a(P, b.startInlineScript), b.sentCompleteBoundaryFunction ? a(P, Ut) : (b.sentCompleteBoundaryFunction = !0, a(P, Qt)), J === null)
      throw Error(t(395));
    return $ = c($.toString(16)), a(P, J), a(P, Bt), a(P, b.segmentPrefix), a(P, $), o(P, Mt);
  }
  function eo(b, P, $, J) {
    if (J.status === 2)
      return !0;
    var Se = J.id;
    if (Se === -1) {
      if ((J.id = $.rootSegmentID) === -1)
        throw Error(t(392));
      return Qi(b, P, J);
    }
    return Qi(b, P, J), b = b.responseState, a(P, b.startInlineScript), b.sentCompleteSegmentFunction ? a(P, He) : (b.sentCompleteSegmentFunction = !0, a(P, Gt)), a(P, b.segmentPrefix), Se = c(Se.toString(16)), a(P, Se), a(P, Ot), a(P, b.placeholderPrefix), a(P, Se), o(P, Zt);
  }
  function Qa(b, P) {
    n = new Uint8Array(512), r = 0;
    try {
      var $ = b.completedRootSegment;
      if ($ !== null && b.pendingRootTasks === 0) {
        ka(b, P, $), b.completedRootSegment = null;
        var J = b.responseState.bootstrapChunks;
        for ($ = 0; $ < J.length - 1; $++)
          a(P, J[$]);
        $ < J.length && o(P, J[$]);
      }
      var Se = b.clientRenderedBoundaries, xe;
      for (xe = 0; xe < Se.length; xe++) {
        var Oe = Se[xe];
        J = P;
        var Ve = b.responseState, ht = Oe.id, Pt = Oe.errorDigest, Et = Oe.errorMessage, an = Oe.errorComponentStack;
        if (a(J, Ve.startInlineScript), Ve.sentClientRenderFunction ? a(J, gt) : (Ve.sentClientRenderFunction = !0, a(
          J,
          _t
        )), ht === null)
          throw Error(t(395));
        a(J, ht), a(J, rn), (Pt || Et || an) && (a(J, $t), a(J, c(hn(Pt || "")))), (Et || an) && (a(J, $t), a(J, c(hn(Et || "")))), an && (a(J, $t), a(J, c(hn(an)))), o(J, xn);
      }
      Se.splice(0, xe);
      var In = b.completedBoundaries;
      for (xe = 0; xe < In.length; xe++)
        Ji(b, P, In[xe]);
      In.splice(0, xe), f(P), n = new Uint8Array(512), r = 0;
      var Yn = b.partialBoundaries;
      for (xe = 0; xe < Yn.length; xe++) {
        var Xn = Yn[xe];
        e: {
          Se = b, Oe = P;
          var wa = Xn.completedSegments;
          for (Ve = 0; Ve < wa.length; Ve++)
            if (!eo(
              Se,
              Oe,
              Xn,
              wa[Ve]
            )) {
              Ve++, wa.splice(0, Ve);
              var no = !1;
              break e;
            }
          wa.splice(0, Ve), no = !0;
        }
        if (!no) {
          b.destination = null, xe++, Yn.splice(0, xe);
          return;
        }
      }
      Yn.splice(0, xe);
      var Ja = b.completedBoundaries;
      for (xe = 0; xe < Ja.length; xe++)
        Ji(b, P, Ja[xe]);
      Ja.splice(0, xe);
    } finally {
      f(P), b.allPendingTasks === 0 && b.pingedTasks.length === 0 && b.clientRenderedBoundaries.length === 0 && b.completedBoundaries.length === 0 && P.close();
    }
  }
  function to(b, P) {
    try {
      var $ = b.abortableTasks;
      $.forEach(function(J) {
        return qi(J, b, P);
      }), $.clear(), b.destination !== null && Qa(b, b.destination);
    } catch (J) {
      $r(b, J), va(b, J);
    }
  }
  return Ou.renderToReadableStream = function(b, P) {
    return new Promise(function($, J) {
      var Se, xe, Oe = new Promise(function(Et, an) {
        xe = Et, Se = an;
      }), Ve = qa(b, he(P ? P.identifierPrefix : void 0, P ? P.nonce : void 0, P ? P.bootstrapScriptContent : void 0, P ? P.bootstrapScripts : void 0, P ? P.bootstrapModules : void 0), V(P ? P.namespaceURI : void 0), P ? P.progressiveChunkSize : void 0, P ? P.onError : void 0, xe, function() {
        var Et = new ReadableStream({ type: "bytes", pull: function(an) {
          if (Ve.status === 1)
            Ve.status = 2, g(an, Ve.fatalError);
          else if (Ve.status !== 2 && Ve.destination === null) {
            Ve.destination = an;
            try {
              Qa(Ve, an);
            } catch (In) {
              $r(Ve, In), va(Ve, In);
            }
          }
        }, cancel: function() {
          to(Ve);
        } }, { highWaterMark: 0 });
        Et.allReady = Oe, $(Et);
      }, function(Et) {
        Oe.catch(function() {
        }), J(Et);
      }, Se);
      if (P && P.signal) {
        var ht = P.signal, Pt = function() {
          to(Ve, ht.reason), ht.removeEventListener("abort", Pt);
        };
        ht.addEventListener("abort", Pt);
      }
      Zi(Ve);
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
function AE() {
  return nm || (nm = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ue, t = "18.2.0", n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(l) {
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
        var C = n.ReactDebugCurrentFrame, F = C.getStackAddendum();
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
    var N = Object.prototype.hasOwnProperty, R = 0, j = 1, H = 2, Y = 3, Q = 4, re = 5, K = 6, q = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", me = q + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", W = new RegExp("^[" + q + "][" + me + "]*$"), se = {}, ce = {};
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
    function Z(l, h, S, C, F, ee, de) {
      this.acceptsBooleans = h === H || h === Y || h === Q, this.attributeName = C, this.attributeNamespace = F, this.mustUseProperty = S, this.propertyName = l, this.type = h, this.sanitizeURL = ee, this.removeEmptyString = de;
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
      ne[l] = new Z(
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
      ne[h] = new Z(
        h,
        j,
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
      ne[l] = new Z(
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
      ne[l] = new Z(
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
      ne[l] = new Z(
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
      ne[l] = new Z(
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
      ne[l] = new Z(
        l,
        Q,
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
      ne[l] = new Z(
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
      ne[l] = new Z(
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
    var ve = /[\-\:]([a-z])/g, Re = function(l) {
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
      var h = l.replace(ve, Re);
      ne[h] = new Z(
        h,
        j,
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
      var h = l.replace(ve, Re);
      ne[h] = new Z(
        h,
        j,
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
      var h = l.replace(ve, Re);
      ne[h] = new Z(
        h,
        j,
        !1,
        // mustUseProperty
        l,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(l) {
      ne[l] = new Z(
        l,
        j,
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
    ne[le] = new Z(
      "xlinkHref",
      j,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(l) {
      ne[l] = new Z(
        l,
        j,
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
    function Be(l, h) {
      return l + h.charAt(0).toUpperCase() + h.substring(1);
    }
    var Te = ["Webkit", "ms", "Moz", "O"];
    Object.keys(_e).forEach(function(l) {
      Te.forEach(function(h) {
        _e[Be(h, l)] = _e[l];
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
    function Le(l, h) {
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
    }, Ce = {}, Ie = new RegExp("^(aria)-[" + me + "]*$"), Ue = new RegExp("^(aria)[A-Z][" + me + "]*$");
    function qe(l, h) {
      {
        if (N.call(Ce, h) && Ce[h])
          return !0;
        if (Ue.test(h)) {
          var S = "aria-" + h.slice(4).toLowerCase(), C = we.hasOwnProperty(S) ? S : null;
          if (C == null)
            return a("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", h), Ce[h] = !0, !0;
          if (h !== C)
            return a("Invalid ARIA attribute `%s`. Did you mean `%s`?", h, C), Ce[h] = !0, !0;
        }
        if (Ie.test(h)) {
          var F = h.toLowerCase(), ee = we.hasOwnProperty(F) ? F : null;
          if (ee == null)
            return Ce[h] = !0, !1;
          if (h !== ee)
            return a("Unknown ARIA attribute `%s`. Did you mean `%s`?", h, ee), Ce[h] = !0, !0;
        }
      }
      return !0;
    }
    function at(l, h) {
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
    function Qe(l, h) {
      oe(l, h) || at(l, h);
    }
    var rt = !1;
    function Ke(l, h) {
      {
        if (l !== "input" && l !== "textarea" && l !== "select")
          return;
        h != null && h.value === null && !rt && (rt = !0, l === "select" && h.multiple ? a("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", l) : a("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", l));
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
    }, Me = function() {
    };
    {
      var ct = {}, je = /^on./, Ge = /^on[^A-Z]/, ot = new RegExp("^(aria)-[" + me + "]*$"), dt = new RegExp("^(aria)[A-Z][" + me + "]*$");
      Me = function(l, h, S, C) {
        if (N.call(ct, h) && ct[h])
          return !0;
        var F = h.toLowerCase();
        if (F === "onfocusin" || F === "onfocusout")
          return a("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ct[h] = !0, !0;
        if (C != null) {
          var ee = C.registrationNameDependencies, de = C.possibleRegistrationNames;
          if (ee.hasOwnProperty(h))
            return !0;
          var Ee = de.hasOwnProperty(F) ? de[F] : null;
          if (Ee != null)
            return a("Invalid event handler property `%s`. Did you mean `%s`?", h, Ee), ct[h] = !0, !0;
          if (je.test(h))
            return a("Unknown event handler property `%s`. It will be ignored.", h), ct[h] = !0, !0;
        } else if (je.test(h))
          return Ge.test(h) && a("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", h), ct[h] = !0, !0;
        if (ot.test(h) || dt.test(h))
          return !0;
        if (F === "innerhtml")
          return a("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ct[h] = !0, !0;
        if (F === "aria")
          return a("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ct[h] = !0, !0;
        if (F === "is" && S !== null && S !== void 0 && typeof S != "string")
          return a("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof S), ct[h] = !0, !0;
        if (typeof S == "number" && isNaN(S))
          return a("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", h), ct[h] = !0, !0;
        var $e = V(h), tt = $e !== null && $e.type === R;
        if (ze.hasOwnProperty(F)) {
          var lt = ze[F];
          if (lt !== h)
            return a("Invalid DOM property `%s`. Did you mean `%s`?", h, lt), ct[h] = !0, !0;
        } else if (!tt && h !== F)
          return a("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", h, F), ct[h] = !0, !0;
        return typeof S == "boolean" && ie(h, S, $e, !1) ? (S ? a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', S, h, h, S, h) : a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', S, h, h, S, h, h, h), ct[h] = !0, !0) : tt ? !0 : ie(h, S, $e, !1) ? (ct[h] = !0, !1) : ((S === "false" || S === "true") && $e !== null && $e.type === Y && (a("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", S, h, S === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', h, S), ct[h] = !0), !0);
      };
    }
    var Tt = function(l, h, S) {
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
    function tn(l, h, S) {
      oe(l, h) || Tt(l, h, S);
    }
    var ln = function() {
    };
    {
      var Rt = /^(?:webkit|moz|o)[A-Z]/, zt = /^-ms-/, Dt = /-(.)/g, Xt = /;\s*$/, cn = {}, Ne = {}, Ct = !1, qt = !1, Ht = function(l) {
        return l.replace(Dt, function(h, S) {
          return S.toUpperCase();
        });
      }, dn = function(l) {
        cn.hasOwnProperty(l) && cn[l] || (cn[l] = !0, a(
          "Unsupported style property %s. Did you mean %s?",
          l,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Ht(l.replace(zt, "ms-"))
        ));
      }, St = function(l) {
        cn.hasOwnProperty(l) && cn[l] || (cn[l] = !0, a("Unsupported vendor-prefixed style property %s. Did you mean %s?", l, l.charAt(0).toUpperCase() + l.slice(1)));
      }, gn = function(l, h) {
        Ne.hasOwnProperty(h) && Ne[h] || (Ne[h] = !0, a(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, l, h.replace(Xt, "")));
      }, Lt = function(l, h) {
        Ct || (Ct = !0, a("`NaN` is an invalid value for the `%s` css style property.", l));
      }, Vt = function(l, h) {
        qt || (qt = !0, a("`Infinity` is an invalid value for the `%s` css style property.", l));
      };
      ln = function(l, h) {
        l.indexOf("-") > -1 ? dn(l) : Rt.test(l) ? St(l) : Xt.test(h) && gn(l, h), typeof h == "number" && (isNaN(h) ? Lt(l, h) : isFinite(h) || Vt(l, h));
      };
    }
    var vn = ln, Tn = /["'&<>]/;
    function kn(l) {
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
    function Pe(l) {
      return typeof l == "boolean" || typeof l == "number" ? "" + l : kn(l);
    }
    var ut = /([A-Z])/g, st = /^ms-/;
    function Je(l) {
      return l.replace(ut, "-$1").toLowerCase().replace(st, "-ms-");
    }
    var yt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, nn = !1;
    function Dn(l) {
      !nn && yt.test(l) && (nn = !0, a("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(l)));
    }
    var X = Array.isArray;
    function Fe(l) {
      return X(l);
    }
    var Xe = "<script>", We = "<\/script>", mt = '<script src="', it = '<script type="module" src="', pt = '" async=""><\/script>';
    function Gt(l) {
      return _(l), ("" + l).replace(He, Ot);
    }
    var He = /(<\/|<)(s)(cript)/gi, Ot = function(l, h, S, C) {
      return "" + h + (S === "s" ? "\\u0073" : "\\u0053") + C;
    };
    function Zt(l, h, S, C, F) {
      var ee = l === void 0 ? "" : l, de = h === void 0 ? Xe : '<script nonce="' + Pe(h) + '">', Ee = [];
      if (S !== void 0 && Ee.push(de, Gt(S), We), C !== void 0)
        for (var $e = 0; $e < C.length; $e++)
          Ee.push(mt, Pe(C[$e]), pt);
      if (F !== void 0)
        for (var tt = 0; tt < F.length; tt++)
          Ee.push(it, Pe(F[tt]), pt);
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
    var Qt = 0, Ut = 1, Bt = 2, Mt = 3, _t = 4, gt = 5, rn = 6, xn = 7;
    function $t(l, h) {
      return {
        insertionMode: l,
        selectedValue: h
      };
    }
    function bn(l, h, S) {
      switch (h) {
        case "select":
          return $t(Ut, S.value != null ? S.value : S.defaultValue);
        case "svg":
          return $t(Bt, null);
        case "math":
          return $t(Mt, null);
        case "foreignObject":
          return $t(Ut, null);
        case "table":
          return $t(_t, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return $t(gt, null);
        case "colgroup":
          return $t(xn, null);
        case "tr":
          return $t(rn, null);
      }
      return l.insertionMode >= _t || l.insertionMode === Qt ? $t(Ut, null) : l;
    }
    var hn = null;
    function Wt(l) {
      var h = l.nextSuspenseID++;
      return l.boundaryPrefix + h.toString(16);
    }
    function Kt(l, h, S) {
      var C = l.idPrefix, F = ":" + C + "R" + h;
      return S > 0 && (F += "H" + S.toString(32)), F + ":";
    }
    function On(l) {
      return Pe(l);
    }
    var Mn = "<!-- -->";
    function er(l, h, S, C) {
      return h === "" ? C : (C && l.push(Mn), l.push(On(h)), !0);
    }
    function jn(l, h, S, C) {
      S && C && l.push(Mn);
    }
    var on = /* @__PURE__ */ new Map();
    function En(l) {
      var h = on.get(l);
      if (h !== void 0)
        return h;
      var S = Pe(Je(l));
      return on.set(l, S), S;
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
            var de = void 0, Ee = void 0, $e = F.indexOf("--") === 0;
            $e ? (de = Pe(F), L(ee, F), Ee = Pe(("" + ee).trim())) : (vn(F, ee), de = En(F), typeof ee == "number" ? ee !== 0 && !N.call(_e, F) ? Ee = ee + "px" : Ee = "" + ee : (L(ee, F), Ee = Pe(("" + ee).trim()))), C ? (C = !1, l.push(pr, de, lr, Ee)) : l.push(sr, de, lr, Ee);
          }
        }
      C || l.push(G);
    }
    var A = " ", z = '="', G = '"', be = '=""';
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
            case Q:
              C === !0 ? l.push(A, de, be) : C === !1 || l.push(A, de, z, Pe(C), G);
              return;
            case re:
              isNaN(C) || l.push(A, de, z, Pe(C), G);
              break;
            case K:
              !isNaN(C) && C >= 1 && l.push(A, de, z, Pe(C), G);
              break;
            default:
              F.sanitizeURL && (D(C, ee), C = "" + C, Dn(C)), l.push(A, de, z, Pe(C), G);
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
          l.push(A, S, z, Pe(C), G);
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
    var Ye = !1, et = !1, At = !1, Cn = !1, pn = !1, _n = !1, ur = !1;
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
      Le("select", h), Un(h, "value"), Un(h, "defaultValue"), h.value !== void 0 && h.defaultValue !== void 0 && !At && (a("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), At = !0), l.push(zn("select"));
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
        S != null && (h += S, !pn && typeof S != "string" && typeof S != "number" && (pn = !0, a("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), h;
    }
    var Tr = ' selected=""';
    function cr(l, h, S, C) {
      var F = C.selectedValue;
      l.push(zn("option"));
      var ee = null, de = null, Ee = null, $e = null;
      for (var tt in h)
        if (N.call(h, tt)) {
          var lt = h[tt];
          if (lt == null)
            continue;
          switch (tt) {
            case "children":
              ee = lt;
              break;
            case "selected":
              Ee = lt, ur || (a("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ur = !0);
              break;
            case "dangerouslySetInnerHTML":
              $e = lt;
              break;
            case "value":
              de = lt;
            default:
              B(l, S, tt, lt);
              break;
          }
        }
      if (F != null) {
        var vt;
        if (de !== null ? (D(de, "value"), vt = "" + de) : ($e !== null && (_n || (_n = !0, a("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), vt = mr(ee)), Fe(F))
          for (var sn = 0; sn < F.length; sn++) {
            D(F[sn], "value");
            var Fn = "" + F[sn];
            if (Fn === vt) {
              l.push(Tr);
              break;
            }
          }
        else
          D(F, "select.value"), "" + F === vt && l.push(Tr);
      } else
        Ee && l.push(Tr);
      return l.push(I), ye(l, $e, ee), ee;
    }
    function Zr(l, h, S) {
      Le("input", h), h.checked !== void 0 && h.defaultChecked !== void 0 && !et && (a("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", h.type), et = !0), h.value !== void 0 && h.defaultValue !== void 0 && !Ye && (a("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", h.type), Ye = !0), l.push(zn("input"));
      var C = null, F = null, ee = null, de = null;
      for (var Ee in h)
        if (N.call(h, Ee)) {
          var $e = h[Ee];
          if ($e == null)
            continue;
          switch (Ee) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              de = $e;
              break;
            case "defaultValue":
              F = $e;
              break;
            case "checked":
              ee = $e;
              break;
            case "value":
              C = $e;
              break;
            default:
              B(l, S, Ee, $e);
              break;
          }
        }
      return ee !== null ? B(l, S, "checked", ee) : de !== null && B(l, S, "checked", de), C !== null ? B(l, S, "value", C) : F !== null && B(l, S, "value", F), l.push(te), null;
    }
    function al(l, h, S) {
      Le("textarea", h), h.value !== void 0 && h.defaultValue !== void 0 && !Cn && (a("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Cn = !0), l.push(zn("textarea"));
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
` && l.push(Qr), C !== null && (D(C, "value"), l.push(On("" + C))), null;
    }
    function il(l, h, S, C) {
      l.push(zn(S));
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
      l.push(zn("menuitem"));
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
      l.push(zn("title"));
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
      l.push(zn(S));
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
      return l.push(I), ye(l, ee, F), typeof F == "string" ? (l.push(On(F)), null) : F;
    }
    function dr(l, h, S, C) {
      l.push(zn(S));
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
              he(de) && typeof Ee != "function" && typeof Ee != "symbol" && l.push(A, de, z, Pe(Ee), G);
              break;
          }
        }
      return l.push(I), ye(l, ee, F), F;
    }
    var Qr = `
`;
    function ha(l, h, S, C) {
      l.push(zn(S));
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
        var $e = ee.__html;
        $e != null && (typeof $e == "string" && $e.length > 0 && $e[0] === `
` ? l.push(Qr, $e) : (_($e), l.push("" + $e)));
      }
      return typeof F == "string" && F[0] === `
` && l.push(Qr), F;
    }
    var Jt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, gr = /* @__PURE__ */ new Map();
    function zn(l) {
      var h = gr.get(l);
      if (h === void 0) {
        if (!Jt.test(l))
          throw new Error("Invalid tag: " + l);
        h = "<" + l, gr.set(l, h);
      }
      return h;
    }
    var Cr = "<!DOCTYPE html>";
    function yr(l, h, S, C, F) {
      switch (Qe(h, S), Ke(h, S), tn(h, S, null), !S.suppressContentEditableWarning && S.contentEditable && S.children != null && a("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), F.insertionMode !== Bt && F.insertionMode !== Mt && h.indexOf("-") === -1 && typeof S.is != "string" && h.toLowerCase() !== h && a("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", h), h) {
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
          return F.insertionMode === Qt && l.push(Cr), Ka(l, S, h, C);
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
    function $r(l, h, S) {
      if (c(l, ll), S === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return c(l, S), d(l, sl);
    }
    function va(l, h, S, C, F) {
      var ee;
      return ee = d(l, ma), c(l, ya), S && (c(l, ul), c(l, Pe(S)), c(l, Jr)), C && (c(l, ea), c(l, Pe(C)), c(l, Jr)), F && (c(l, qa), c(l, Pe(F)), c(l, Jr)), ee = d(l, Ga), ee;
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
    var xa = '<div hidden id="', Bn = '">', Xi = "</div>", ba = '<svg aria-hidden="true" style="display:none" id="', cl = '">', qi = "</svg>", Sa = '<math aria-hidden="true" style="display:none" id="', Gi = '">', Zi = "</math>", Ea = '<table hidden id="', ka = '">', Qi = "</table>", Ji = '<table hidden><tbody id="', eo = '">', Qa = "</tbody></table>", to = '<table hidden><tr id="', b = '">', P = "</tr></table>", $ = '<table hidden><colgroup id="', J = '">', Se = "</colgroup></table>";
    function xe(l, h, S, C) {
      switch (S.insertionMode) {
        case Qt:
        case Ut:
          return c(l, xa), c(l, h.segmentPrefix), c(l, C.toString(16)), d(l, Bn);
        case Bt:
          return c(l, ba), c(l, h.segmentPrefix), c(l, C.toString(16)), d(l, cl);
        case Mt:
          return c(l, Sa), c(l, h.segmentPrefix), c(l, C.toString(16)), d(l, Gi);
        case _t:
          return c(l, Ea), c(l, h.segmentPrefix), c(l, C.toString(16)), d(l, ka);
        case gt:
          return c(l, Ji), c(l, h.segmentPrefix), c(l, C.toString(16)), d(l, eo);
        case rn:
          return c(l, to), c(l, h.segmentPrefix), c(l, C.toString(16)), d(l, b);
        case xn:
          return c(l, $), c(l, h.segmentPrefix), c(l, C.toString(16)), d(l, J);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Oe(l, h) {
      switch (h.insertionMode) {
        case Qt:
        case Ut:
          return d(l, Xi);
        case Bt:
          return d(l, qi);
        case Mt:
          return d(l, Zi);
        case _t:
          return d(l, Qi);
        case gt:
          return d(l, Qa);
        case rn:
          return d(l, P);
        case xn:
          return d(l, Se);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Ve = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", ht = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Pt = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Et = Ve + ';$RS("', an = '$RS("', In = '","', Yn = '")<\/script>';
    function Xn(l, h, S) {
      c(l, h.startInlineScript), h.sentCompleteSegmentFunction ? c(l, an) : (h.sentCompleteSegmentFunction = !0, c(l, Et)), c(l, h.segmentPrefix);
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
    var Fc = Pt + ';$RX("', $c = '$RX("', zc = '"', Bc = ")<\/script>", dl = ",";
    function Ic(l, h, S, C, F, ee) {
      if (c(l, h.startInlineScript), h.sentClientRenderFunction ? c(l, $c) : (h.sentClientRenderFunction = !0, c(l, Fc)), S === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return c(l, S), c(l, zc), (C || F || ee) && (c(l, dl), c(l, fl(C || ""))), (F || ee) && (c(l, dl), c(l, fl(F || ""))), ee && (c(l, dl), c(l, fl(ee))), d(l, Bc);
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
      var S = Zt(h, void 0);
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
        insertionMode: Ut,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function Os(l, h, S, C) {
      return S.generateStaticMarkup ? (l.push(Pe(h)), !1) : er(l, h, S, C);
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
    var qn = Object.assign, Ns = Symbol.for("react.element"), ml = Symbol.for("react.portal"), ro = Symbol.for("react.fragment"), ao = Symbol.for("react.strict_mode"), io = Symbol.for("react.profiler"), ei = Symbol.for("react.provider"), ti = Symbol.for("react.context"), ni = Symbol.for("react.forward_ref"), Ta = Symbol.for("react.suspense"), gl = Symbol.for("react.suspense_list"), yl = Symbol.for("react.memo"), oo = Symbol.for("react.lazy"), jc = Symbol.for("react.scope"), Fs = Symbol.for("react.debug_trace_mode"), Uc = Symbol.for("react.legacy_hidden"), Kc = Symbol.for("react.default_value"), $s = Symbol.iterator, zs = "@@iterator";
    function mn(l) {
      if (l === null || typeof l != "object")
        return null;
      var h = $s && l[$s] || l[zs];
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
    function fn(l) {
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
            return C !== null ? C : fn(l.type) || "Memo";
          case oo: {
            var F = l, ee = F._payload, de = F._init;
            try {
              return fn(de(ee));
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
    var ii = n.ReactCurrentDispatcher, Aa;
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
`), $e = C.stack.split(`
`), tt = Ee.length - 1, lt = $e.length - 1; tt >= 1 && lt >= 0 && Ee[tt] !== $e[lt]; )
            lt--;
          for (; tt >= 1 && lt >= 0; tt--, lt--)
            if (Ee[tt] !== $e[lt]) {
              if (tt !== 1 || lt !== 1)
                do
                  if (tt--, lt--, lt < 0 || Ee[tt] !== $e[lt]) {
                    var vt = `
` + Ee[tt].replace(" at new ", " at ");
                    return l.displayName && vt.includes("<anonymous>") && (vt = vt.replace("<anonymous>", l.displayName)), typeof l == "function" && so.set(l, vt), vt;
                  }
                while (tt >= 1 && lt >= 0);
              break;
            }
        }
      } finally {
        li = !1, ii.current = ee, ai(), Error.prepareStackTrace = F;
      }
      var sn = l ? l.displayName || l.name : "", Fn = sn ? oi(sn) : "";
      return typeof l == "function" && so.set(l, Fn), Fn;
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
    var Pl = {}, uo = n.ReactDebugCurrentFrame;
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
                var $e = Error((C || "React class") + ": " + S + " type `" + de + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[de] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $e.name = "Invariant Violation", $e;
              }
              Ee = l[de](h, de, C, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (tt) {
              Ee = tt;
            }
            Ee && !(Ee instanceof Error) && (ta(F), a("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", C || "React class", S, de, typeof Ee), ta(null)), Ee instanceof Error && !(Ee.message in Pl) && (Pl[Ee.message] = !0, ta(F), a("Failed %s type: %s", S, Ee.message), ta(null));
          }
      }
    }
    var Ll;
    Ll = {};
    var zr = {};
    Object.freeze(zr);
    function Vs(l, h) {
      {
        var S = l.contextTypes;
        if (!S)
          return zr;
        var C = {};
        for (var F in S)
          C[F] = h[F];
        {
          var ee = fn(l) || "Unknown";
          Rl(S, C, "context", ee);
        }
        return C;
      }
    }
    function na(l, h, S, C) {
      {
        if (typeof l.getChildContext != "function") {
          {
            var F = fn(h) || "Unknown";
            Ll[F] || (Ll[F] = !0, a("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", F, F));
          }
          return S;
        }
        var ee = l.getChildContext();
        for (var de in ee)
          if (!(de in C))
            throw new Error((fn(h) || "Unknown") + '.getChildContext(): key "' + de + '" is not defined in childContextTypes.');
        {
          var Ee = fn(h) || "Unknown";
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
          var S = fn(l) || "Component";
          fi.has(S) || (fi.add(S), a("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", S));
        }
      };
    }
    function Ys(l, h) {
      {
        var S = l.constructor, C = S && fn(S) || "ReactClass", F = C + "." + h;
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
      var C = zr, F = l.contextType;
      if ("contextType" in l) {
        var ee = (
          // Allow null for conditional declaration
          F === null || F !== void 0 && F.$$typeof === ti && F._context === void 0
        );
        if (!ee && !So.has(l)) {
          So.add(l);
          var de = "";
          F === void 0 ? de = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof F != "object" ? de = " However, it is set to a " + typeof F + "." : F.$$typeof === ei ? de = " Did you accidentally pass the Context.Provider instead?" : F._context !== void 0 ? de = " Did you accidentally pass the Context.Consumer instead?" : de = " However, it is set to an object with keys {" + Object.keys(F).join(", ") + "}.", a("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", fn(l) || "Component", de);
        }
      }
      typeof F == "object" && F !== null ? C = Ra(F) : C = S;
      var Ee = new l(h, C);
      {
        if (typeof l.getDerivedStateFromProps == "function" && (Ee.state === null || Ee.state === void 0)) {
          var $e = fn(l) || "Component";
          di.has($e) || (di.add($e), a("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", $e, Ee.state === null ? "null" : "undefined", $e));
        }
        if (typeof l.getDerivedStateFromProps == "function" || typeof Ee.getSnapshotBeforeUpdate == "function") {
          var tt = null, lt = null, vt = null;
          if (typeof Ee.componentWillMount == "function" && Ee.componentWillMount.__suppressDeprecationWarning !== !0 ? tt = "componentWillMount" : typeof Ee.UNSAFE_componentWillMount == "function" && (tt = "UNSAFE_componentWillMount"), typeof Ee.componentWillReceiveProps == "function" && Ee.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? lt = "componentWillReceiveProps" : typeof Ee.UNSAFE_componentWillReceiveProps == "function" && (lt = "UNSAFE_componentWillReceiveProps"), typeof Ee.componentWillUpdate == "function" && Ee.componentWillUpdate.__suppressDeprecationWarning !== !0 ? vt = "componentWillUpdate" : typeof Ee.UNSAFE_componentWillUpdate == "function" && (vt = "UNSAFE_componentWillUpdate"), tt !== null || lt !== null || vt !== null) {
            var sn = fn(l) || "Component", Fn = typeof l.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            La.has(sn) || (La.add(sn), a(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, sn, Fn, tt !== null ? `
  ` + tt : "", lt !== null ? `
  ` + lt : "", vt !== null ? `
  ` + vt : ""));
          }
        }
      }
      return Ee;
    }
    function qs(l, h, S) {
      {
        var C = fn(h) || "Component", F = l.render;
        F || (h.prototype && typeof h.prototype.render == "function" ? a("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", C) : a("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", C)), l.getInitialState && !l.getInitialState.isReactClassApproved && !l.state && a("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", C), l.getDefaultProps && !l.getDefaultProps.isReactClassApproved && a("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", C), l.propTypes && a("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", C), l.contextType && a("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", C), l.contextTypes && a("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", C), h.contextType && h.contextTypes && !bo.has(h) && (bo.add(h), a("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", C)), typeof l.componentShouldUpdate == "function" && a("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", C), h.prototype && h.prototype.isPureReactComponent && typeof l.shouldComponentUpdate < "u" && a("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", fn(h) || "A pure component"), typeof l.componentDidUnmount == "function" && a("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", C), typeof l.componentDidReceiveProps == "function" && a("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", C), typeof l.componentWillRecieveProps == "function" && a("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", C), typeof l.UNSAFE_componentWillRecieveProps == "function" && a("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", C);
        var ee = l.props !== S;
        l.props !== void 0 && ee && a("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", C, C), l.defaultProps && a("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", C, C), typeof l.getSnapshotBeforeUpdate == "function" && typeof l.componentDidUpdate != "function" && !yo.has(h) && (yo.add(h), a("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", fn(h))), typeof l.getDerivedStateFromProps == "function" && a("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", C), typeof l.getDerivedStateFromError == "function" && a("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", C), typeof h.getSnapshotBeforeUpdate == "function" && a("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", C);
        var de = l.state;
        de && (typeof de != "object" || Fe(de)) && a("%s.state: must be set to an object or null", C), typeof l.getChildContext == "function" && typeof h.childContextTypes != "object" && a("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", C);
      }
    }
    function Gc(l, h) {
      var S = h.state;
      if (typeof h.componentWillMount == "function") {
        if (h.componentWillMount.__suppressDeprecationWarning !== !0) {
          var C = fn(l) || "Unknown";
          go[C] || (r(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            C
          ), go[C] = !0);
        }
        h.componentWillMount();
      }
      typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), S !== h.state && (a("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", fn(l) || "Component"), Xs.enqueueReplaceState(h, h.state, null));
    }
    function Zc(l, h, S, C) {
      if (l.queue !== null && l.queue.length > 0) {
        var F = l.queue, ee = l.replace;
        if (l.queue = null, l.replace = !1, ee && F.length === 1)
          h.state = F[0];
        else {
          for (var de = ee ? F[0] : h.state, Ee = !0, $e = ee ? 1 : 0; $e < F.length; $e++) {
            var tt = F[$e], lt = typeof tt == "function" ? tt.call(h, de, S, C) : tt;
            lt != null && (Ee ? (Ee = !1, de = qn({}, de, lt)) : qn(de, lt));
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
        var Ee = fn(h) || "Component";
        xo.has(Ee) || (xo.add(Ee), a("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", Ee));
      }
      var $e = h.getDerivedStateFromProps;
      typeof $e == "function" && (l.state = Xc(l, h, $e, F, S)), typeof h.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (Gc(h, l), Zc(ee, l, S, C));
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
      var C = l.id, F = l.overflow, ee = wo(C) - 1, de = C & ~(1 << ee), Ee = S + 1, $e = wo(h) + ee;
      if ($e > 30) {
        var tt = ee - ee % 5, lt = (1 << tt) - 1, vt = (de & lt).toString(32), sn = de >> tt, Fn = ee - tt, ir = wo(h) + Fn, yu = Ee << Fn, vu = yu | sn, xu = vt + F;
        return {
          id: 1 << ir | vu,
          overflow: xu
        };
      } else {
        var Io = Ee << ee, fy = Io | de, hy = F;
        return {
          id: 1 << $e | fy,
          overflow: hy
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
    var To = typeof Object.is == "function" ? Object.is : Fl, Nt = null, aa = null, ia = null, Yt = null, nr = !1, oa = !1, Co = 0, Nn = null, Pr = 0, la = 25, br = !1, sa;
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
      return Yt === null ? ia === null ? (nr = !1, ia = Yt = Gs()) : (nr = !0, Yt = ia) : Yt.next === null ? (nr = !1, Yt = Yt.next = Gs()) : (nr = !0, Yt = Yt.next), Yt;
    }
    function $l(l, h) {
      Nt = h, aa = l, br = !1, Co = 0;
    }
    function ad(l, h, S, C) {
      for (; oa; )
        oa = !1, Co = 0, Pr += 1, Yt = null, S = l(h, C);
      return hi(), S;
    }
    function Zs() {
      var l = Co !== 0;
      return l;
    }
    function hi() {
      br = !1, Nt = null, aa = null, oa = !1, ia = null, Pr = 0, Nn = null, Yt = null;
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
      if (l !== Po && (sa = "useReducer"), Nt = Rr(), Yt = Ao(), nr) {
        var C = Yt.queue, F = C.dispatch;
        if (Nn !== null) {
          var ee = Nn.get(C);
          if (ee !== void 0) {
            Nn.delete(C);
            var de = Yt.memoizedState, Ee = ee;
            do {
              var $e = Ee.action;
              br = !0, de = l(de, $e), br = !1, Ee = Ee.next;
            } while (Ee !== null);
            return Yt.memoizedState = de, [de, F];
          }
        }
        return [Yt.memoizedState, F];
      } else {
        br = !0;
        var tt;
        l === Po ? tt = typeof h == "function" ? h() : h : tt = S !== void 0 ? S(h) : h, br = !1, Yt.memoizedState = tt;
        var lt = Yt.queue = {
          last: null,
          dispatch: null
        }, vt = lt.dispatch = ud.bind(null, Nt, lt);
        return [Yt.memoizedState, vt];
      }
    }
    function eu(l, h) {
      Nt = Rr(), Yt = Ao();
      var S = h === void 0 ? null : h;
      if (Yt !== null) {
        var C = Yt.memoizedState;
        if (C !== null && S !== null) {
          var F = C[1];
          if (rd(S, F))
            return C[0];
        }
      }
      br = !0;
      var ee = l();
      return br = !1, Yt.memoizedState = [ee, S], ee;
    }
    function ld(l) {
      Nt = Rr(), Yt = Ao();
      var h = Yt.memoizedState;
      if (h === null) {
        var S = {
          current: l
        };
        return Object.seal(S), Yt.memoizedState = S, S;
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
        Nn === null && (Nn = /* @__PURE__ */ new Map());
        var F = Nn.get(h);
        if (F === void 0)
          Nn.set(h, C);
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
    function zl() {
      var l = aa, h = Qc(l.treeContext), S = mi;
      if (S === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var C = Co++;
      return Kt(S, h, C);
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
      useId: zl,
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
    var Br = n.ReactCurrentDispatcher, Do = n.ReactDebugCurrentFrame, Oo = 0, ua = 1, ru = 2, Il = 3, ca = 4, pd = 0, au = 1, Sr = 2, md = 12800;
    function gd(l) {
      return console.error(l), null;
    }
    function gi() {
    }
    function Hl(l, h, S, C, F, ee, de, Ee, $e) {
      var tt = [], lt = /* @__PURE__ */ new Set(), vt = {
        destination: null,
        responseState: h,
        progressiveChunkSize: C === void 0 ? md : C,
        status: pd,
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
        onError: F === void 0 ? gd : F,
        onAllReady: ee === void 0 ? gi : ee,
        onShellReady: de === void 0 ? gi : de,
        onShellError: Ee === void 0 ? gi : Ee,
        onFatalError: $e === void 0 ? gi : $e
      }, sn = Ir(
        vt,
        0,
        null,
        S,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      sn.parentFlushed = !0;
      var Fn = yi(vt, l, null, sn, lt, zr, Dl, ko);
      return tt.push(Fn), vt;
    }
    function Mo(l, h) {
      var S = l.pingedTasks;
      S.push(h), S.length === 1 && f(function() {
        return mu(l);
      });
    }
    function Lr(l, h) {
      return {
        id: hn,
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
      var $e = {
        node: h,
        ping: function() {
          return Mo(l, $e);
        },
        blockedBoundary: S,
        blockedSegment: C,
        abortSet: F,
        legacyContext: ee,
        context: de,
        treeContext: Ee
      };
      return $e.componentStack = null, F.add($e), $e;
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
      var C = h.blockedBoundary, F = h.blockedSegment, ee = S.fallback, de = S.children, Ee = /* @__PURE__ */ new Set(), $e = Lr(l, Ee), tt = F.chunks.length, lt = Ir(
        l,
        tt,
        $e,
        F.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      F.children.push(lt), F.lastPushedText = !1;
      var vt = Ir(
        l,
        0,
        null,
        F.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      vt.parentFlushed = !0, h.blockedBoundary = $e, h.blockedSegment = vt;
      try {
        if (No(l, h, de), Ms(vt.chunks, l.responseState, vt.lastPushedText, vt.textEmbedded), vt.status = ua, Si($e, vt), $e.pendingTasks === 0) {
          ar(h);
          return;
        }
      } catch (Fn) {
        vt.status = ca, $e.forceClientRender = !0, $e.errorDigest = vi(l, Fn), jl($e, Fn);
      } finally {
        h.blockedBoundary = C, h.blockedSegment = F;
      }
      var sn = yi(l, ee, C, lt, Ee, h.legacyContext, h.context, h.treeContext);
      sn.componentStack = h.componentStack, l.pingedTasks.push(sn), ar(h);
    }
    function ou(l, h, S, C) {
      rr(h, S);
      var F = h.blockedSegment, ee = yr(F.chunks, S, C, l.responseState, F.formatContext);
      F.lastPushedText = !1;
      var de = F.formatContext;
      F.formatContext = bn(de, S, C), No(l, h, ee), F.formatContext = de, Kn(F.chunks, S), F.lastPushedText = !1, ar(h);
    }
    function yd(l) {
      return l.prototype && l.prototype.isReactComponent;
    }
    function Ul(l, h, S, C, F) {
      var ee = {};
      $l(h, ee);
      var de = S(C, F);
      return ad(S, C, de, F);
    }
    function xi(l, h, S, C, F) {
      var ee = S.render();
      S.props !== F && (ql || a("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", fn(C) || "a component"), ql = !0);
      {
        var de = C.childContextTypes;
        if (de != null) {
          var Ee = h.legacyContext, $e = na(S, C, Ee, de);
          h.legacyContext = $e, Zn(l, h, ee), h.legacyContext = Ee;
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
        var ee = fn(S) || "Unknown";
        Kl[ee] || (a("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", ee, ee), Kl[ee] = !0);
      }
      var de = Ul(l, h, S, C, F), Ee = Zs();
      if (typeof de == "object" && de !== null && typeof de.render == "function" && de.$$typeof === void 0) {
        var $e = fn(S) || "Unknown";
        bi[$e] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", $e, $e, $e), bi[$e] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof de == "object" && de !== null && typeof de.render == "function" && de.$$typeof === void 0
      ) {
        {
          var tt = fn(S) || "Unknown";
          bi[tt] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", tt, tt, tt), bi[tt] = !0);
        }
        Eo(de, S, C, F), xi(l, h, de, S, C);
      } else if (xd(S), Ee) {
        var lt = h.treeContext, vt = 1, sn = 0;
        h.treeContext = Nl(lt, vt, sn);
        try {
          Zn(l, h, de);
        } finally {
          h.treeContext = lt;
        }
      } else
        Zn(l, h, de);
      ar(h);
    }
    function xd(l) {
      {
        if (l && l.childContextTypes && a("%s(...): childContextTypes cannot be defined on a function component.", l.displayName || l.name || "Component"), typeof l.getDerivedStateFromProps == "function") {
          var h = fn(l) || "Unknown";
          Xl[h] || (a("%s: Function components do not support getDerivedStateFromProps.", h), Xl[h] = !0);
        }
        if (typeof l.contextType == "object" && l.contextType !== null) {
          var S = fn(l) || "Unknown";
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
        var Ee = h.treeContext, $e = 1, tt = 0;
        h.treeContext = Nl(Ee, $e, tt);
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
      var ee = S._payload, de = S._init, Ee = de(ee), $e = cu(Ee, C);
      Ql(l, h, Ee, $e, F), ar(h);
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
            var Ee = S, $e = Ee._payload, tt = Ee._init, lt;
            try {
              lt = tt($e);
            } catch (Io) {
              throw typeof Io == "object" && Io !== null && typeof Io.then == "function" && rr(h, "Lazy"), Io;
            }
            Zn(l, h, lt);
            return;
          }
        }
        if (Fe(S)) {
          fu(l, h, S);
          return;
        }
        var vt = mn(S);
        if (vt) {
          du(S, vt);
          var sn = vt.call(S);
          if (sn) {
            var Fn = sn.next();
            if (!Fn.done) {
              var ir = [];
              do
                ir.push(Fn.value), Fn = sn.next();
              while (!Fn.done);
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
        if (C.fallbackAbortableTasks.forEach(function(tt) {
          return pu(tt, h, S);
        }), C.fallbackAbortableTasks.clear(), h.allPendingTasks--, h.allPendingTasks === 0) {
          var $e = h.onAllReady;
          $e();
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
    function $o(l, h) {
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
            $o(l, Ee);
          }
          ee.splice(0, de), l.destination !== null && Bo(l, l.destination);
        } catch ($e) {
          vi(l, $e), _o(l, $e);
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
          for (var F = !0, ee = S.chunks, de = 0, Ee = S.children, $e = 0; $e < Ee.length; $e++) {
            for (var tt = Ee[$e]; de < tt.index; de++)
              c(h, ee[de]);
            F = wi(l, h, tt);
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
        var F = C.id = Wt(l.responseState);
        return $r(h, l.responseState, F), ki(l, h, S), Za(h, l.responseState);
      } else {
        if (C.byteSize > l.progressiveChunkSize)
          return C.rootSegmentID = l.nextSegmentId++, l.completedBoundaries.push(C), $r(h, l.responseState, C.id), ki(l, h, S), Za(h, l.responseState);
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
      return xe(h, l.responseState, S.formatContext, S.id), wi(l, h, S), Oe(h, S.formatContext);
    }
    function zo(l, h, S) {
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
          if (!zo(l, h, Ee)) {
            l.destination = null, F++, de.splice(0, F);
            return;
          }
        }
        de.splice(0, F);
        var $e = l.partialBoundaries;
        for (F = 0; F < $e.length; F++) {
          var tt = $e[F];
          if (!Td(l, h, tt)) {
            l.destination = null, F++, $e.splice(0, F);
            return;
          }
        }
        $e.splice(0, F);
        var lt = l.completedBoundaries;
        for (F = 0; F < lt.length; F++) {
          var vt = lt[F];
          if (!zo(l, h, vt)) {
            l.destination = null, F++, lt.splice(0, F);
            return;
          }
        }
        lt.splice(0, F);
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
        push: function(vt) {
          return vt !== null && (de += vt), !0;
        },
        destroy: function(vt) {
          F = !0, ee = vt;
        }
      }, $e = !1;
      function tt() {
        $e = !0;
      }
      var lt = Hl(l, Wc(S, h ? h.identifierPrefix : void 0), hl(), 1 / 0, w, void 0, tt, void 0, void 0);
      if (Cd(lt), p(lt, C), u(lt, Ee), F)
        throw ee;
      if (!$e)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return de;
    }
    function U(l, h) {
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
    Li.renderToNodeStream = pe, Li.renderToStaticMarkup = ae, Li.renderToStaticNodeStream = ke, Li.renderToString = U, Li.version = t;
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
function PE() {
  return rm || (rm = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ue, t = "18.2.0", n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(u) {
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
        var O = n.ReactDebugCurrentFrame, U = O.getStackAddendum();
        U !== "" && (p += "%s", w = w.concat([U]));
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
    function j(u, p) {
      if (_(u))
        return a("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", p, L(u)), N(u);
    }
    function H(u) {
      if (_(u))
        return a("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", L(u)), N(u);
    }
    var Y = Object.prototype.hasOwnProperty, Q = 0, re = 1, K = 2, q = 3, me = 4, W = 5, se = 6, ce = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", he = ce + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ie = new RegExp("^[" + ce + "][" + he + "]*$"), V = {}, Z = {};
    function ne(u) {
      return Y.call(Z, u) ? !0 : Y.call(V, u) ? !1 : ie.test(u) ? (Z[u] = !0, !0) : (V[u] = !0, a("Invalid attribute name: `%s`", u), !1);
    }
    function Ae(u, p, w, O) {
      if (w !== null && w.type === Q)
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
          var U = u.toLowerCase().slice(0, 5);
          return U !== "data-" && U !== "aria-";
        }
        default:
          return !1;
      }
    }
    function ve(u) {
      return le.hasOwnProperty(u) ? le[u] : null;
    }
    function Re(u, p, w, O, U, ae, pe) {
      this.acceptsBooleans = p === K || p === q || p === me, this.attributeName = O, this.attributeNamespace = U, this.mustUseProperty = w, this.propertyName = u, this.type = p, this.sanitizeURL = ae, this.removeEmptyString = pe;
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
      le[u] = new Re(
        u,
        Q,
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
      le[p] = new Re(
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
      le[u] = new Re(
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
      le[u] = new Re(
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
      le[u] = new Re(
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
      le[u] = new Re(
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
      le[u] = new Re(
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
      le[u] = new Re(
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
      le[u] = new Re(
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
    var Be = /[\-\:]([a-z])/g, Te = function(u) {
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
      var p = u.replace(Be, Te);
      le[p] = new Re(
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
      var p = u.replace(Be, Te);
      le[p] = new Re(
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
      var p = u.replace(Be, Te);
      le[p] = new Re(
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
      le[u] = new Re(
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
    le[ge] = new Re(
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
      le[u] = new Re(
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
    var Le = {
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
    Object.keys(Le).forEach(function(u) {
      we.forEach(function(p) {
        Le[oe(p, u)] = Le[u];
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
    function Ie(u, p) {
      Ce[p.type] || p.onChange || p.onInput || p.readOnly || p.disabled || p.value == null || a("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), p.onChange || p.readOnly || p.disabled || p.checked == null || a("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Ue(u, p) {
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
    }, at = {}, Qe = new RegExp("^(aria)-[" + he + "]*$"), rt = new RegExp("^(aria)[A-Z][" + he + "]*$");
    function Ke(u, p) {
      {
        if (Y.call(at, p) && at[p])
          return !0;
        if (rt.test(p)) {
          var w = "aria-" + p.slice(4).toLowerCase(), O = qe.hasOwnProperty(w) ? w : null;
          if (O == null)
            return a("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", p), at[p] = !0, !0;
          if (p !== O)
            return a("Invalid ARIA attribute `%s`. Did you mean `%s`?", p, O), at[p] = !0, !0;
        }
        if (Qe.test(p)) {
          var U = p.toLowerCase(), ae = qe.hasOwnProperty(U) ? U : null;
          if (ae == null)
            return at[p] = !0, !1;
          if (p !== ae)
            return a("Unknown ARIA attribute `%s`. Did you mean `%s`?", p, ae), at[p] = !0, !0;
        }
      }
      return !0;
    }
    function ze(u, p) {
      {
        var w = [];
        for (var O in p) {
          var U = Ke(u, O);
          U || w.push(O);
        }
        var ae = w.map(function(pe) {
          return "`" + pe + "`";
        }).join(", ");
        w.length === 1 ? a("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", ae, u) : w.length > 1 && a("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", ae, u);
      }
    }
    function Me(u, p) {
      Ue(u, p) || ze(u, p);
    }
    var ct = !1;
    function je(u, p) {
      {
        if (u !== "input" && u !== "textarea" && u !== "select")
          return;
        p != null && p.value === null && !ct && (ct = !0, u === "select" && p.multiple ? a("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", u) : a("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", u));
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
    }, ot = function() {
    };
    {
      var dt = {}, Tt = /^on./, tn = /^on[^A-Z]/, ln = new RegExp("^(aria)-[" + he + "]*$"), Rt = new RegExp("^(aria)[A-Z][" + he + "]*$");
      ot = function(u, p, w, O) {
        if (Y.call(dt, p) && dt[p])
          return !0;
        var U = p.toLowerCase();
        if (U === "onfocusin" || U === "onfocusout")
          return a("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), dt[p] = !0, !0;
        if (O != null) {
          var ae = O.registrationNameDependencies, pe = O.possibleRegistrationNames;
          if (ae.hasOwnProperty(p))
            return !0;
          var ke = pe.hasOwnProperty(U) ? pe[U] : null;
          if (ke != null)
            return a("Invalid event handler property `%s`. Did you mean `%s`?", p, ke), dt[p] = !0, !0;
          if (Tt.test(p))
            return a("Unknown event handler property `%s`. It will be ignored.", p), dt[p] = !0, !0;
        } else if (Tt.test(p))
          return tn.test(p) && a("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", p), dt[p] = !0, !0;
        if (ln.test(p) || Rt.test(p))
          return !0;
        if (U === "innerhtml")
          return a("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), dt[p] = !0, !0;
        if (U === "aria")
          return a("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), dt[p] = !0, !0;
        if (U === "is" && w !== null && w !== void 0 && typeof w != "string")
          return a("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof w), dt[p] = !0, !0;
        if (typeof w == "number" && isNaN(w))
          return a("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", p), dt[p] = !0, !0;
        var l = ve(p), h = l !== null && l.type === Q;
        if (Ge.hasOwnProperty(U)) {
          var S = Ge[U];
          if (S !== p)
            return a("Invalid DOM property `%s`. Did you mean `%s`?", p, S), dt[p] = !0, !0;
        } else if (!h && p !== U)
          return a("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", p, U), dt[p] = !0, !0;
        return typeof w == "boolean" && Ae(p, w, l, !1) ? (w ? a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', w, p, p, w, p) : a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', w, p, p, w, p, p, p), dt[p] = !0, !0) : h ? !0 : Ae(p, w, l, !1) ? (dt[p] = !0, !1) : ((w === "false" || w === "true") && l !== null && l.type === q && (a("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", w, p, w === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', p, w), dt[p] = !0), !0);
      };
    }
    var zt = function(u, p, w) {
      {
        var O = [];
        for (var U in p) {
          var ae = ot(u, U, p[U], w);
          ae || O.push(U);
        }
        var pe = O.map(function(ke) {
          return "`" + ke + "`";
        }).join(", ");
        O.length === 1 ? a("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", pe, u) : O.length > 1 && a("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", pe, u);
      }
    };
    function Dt(u, p, w) {
      Ue(u, p) || zt(u, p, w);
    }
    var Xt = function() {
    };
    {
      var cn = /^(?:webkit|moz|o)[A-Z]/, Ne = /^-ms-/, Ct = /-(.)/g, qt = /;\s*$/, Ht = {}, dn = {}, St = !1, gn = !1, Lt = function(u) {
        return u.replace(Ct, function(p, w) {
          return w.toUpperCase();
        });
      }, Vt = function(u) {
        Ht.hasOwnProperty(u) && Ht[u] || (Ht[u] = !0, a(
          "Unsupported style property %s. Did you mean %s?",
          u,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Lt(u.replace(Ne, "ms-"))
        ));
      }, vn = function(u) {
        Ht.hasOwnProperty(u) && Ht[u] || (Ht[u] = !0, a("Unsupported vendor-prefixed style property %s. Did you mean %s?", u, u.charAt(0).toUpperCase() + u.slice(1)));
      }, Tn = function(u, p) {
        dn.hasOwnProperty(p) && dn[p] || (dn[p] = !0, a(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, u, p.replace(qt, "")));
      }, kn = function(u, p) {
        St || (St = !0, a("`NaN` is an invalid value for the `%s` css style property.", u));
      }, Pe = function(u, p) {
        gn || (gn = !0, a("`Infinity` is an invalid value for the `%s` css style property.", u));
      };
      Xt = function(u, p) {
        u.indexOf("-") > -1 ? Vt(u) : cn.test(u) ? vn(u) : qt.test(p) && Tn(u, p), typeof p == "number" && (isNaN(p) ? kn(u, p) : isFinite(p) || Pe(u, p));
      };
    }
    var ut = Xt, st = /["'&<>]/;
    function Je(u) {
      H(u);
      var p = "" + u, w = st.exec(p);
      if (!w)
        return p;
      var O, U = "", ae, pe = 0;
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
        pe !== ae && (U += p.substring(pe, ae)), pe = ae + 1, U += O;
      }
      return pe !== ae ? U + p.substring(pe, ae) : U;
    }
    function yt(u) {
      return typeof u == "boolean" || typeof u == "number" ? "" + u : Je(u);
    }
    var nn = /([A-Z])/g, Dn = /^ms-/;
    function X(u) {
      return u.replace(nn, "-$1").toLowerCase().replace(Dn, "-ms-");
    }
    var Fe = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Xe = !1;
    function We(u) {
      !Xe && Fe.test(u) && (Xe = !0, a("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(u)));
    }
    var mt = Array.isArray;
    function it(u) {
      return mt(u);
    }
    var pt = m("<script>"), Gt = m("<\/script>"), He = m('<script src="'), Ot = m('<script type="module" src="'), Zt = m('" async=""><\/script>');
    function Qt(u) {
      return H(u), ("" + u).replace(Ut, Bt);
    }
    var Ut = /(<\/|<)(s)(cript)/gi, Bt = function(u, p, w, O) {
      return "" + p + (w === "s" ? "\\u0073" : "\\u0053") + O;
    };
    function Mt(u, p, w, O, U) {
      var ae = u === void 0 ? "" : u, pe = p === void 0 ? pt : m('<script nonce="' + yt(p) + '">'), ke = [];
      if (w !== void 0 && ke.push(pe, T(Qt(w)), Gt), O !== void 0)
        for (var l = 0; l < O.length; l++)
          ke.push(He, T(yt(O[l])), Zt);
      if (U !== void 0)
        for (var h = 0; h < U.length; h++)
          ke.push(Ot, T(yt(U[h])), Zt);
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
    var _t = 0, gt = 1, rn = 2, xn = 3, $t = 4, bn = 5, hn = 6, Wt = 7;
    function Kt(u, p) {
      return {
        insertionMode: u,
        selectedValue: p
      };
    }
    function On(u) {
      var p = u === "http://www.w3.org/2000/svg" ? rn : u === "http://www.w3.org/1998/Math/MathML" ? xn : _t;
      return Kt(p, null);
    }
    function Mn(u, p, w) {
      switch (p) {
        case "select":
          return Kt(gt, w.value != null ? w.value : w.defaultValue);
        case "svg":
          return Kt(rn, null);
        case "math":
          return Kt(xn, null);
        case "foreignObject":
          return Kt(gt, null);
        case "table":
          return Kt($t, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return Kt(bn, null);
        case "colgroup":
          return Kt(Wt, null);
        case "tr":
          return Kt(hn, null);
      }
      return u.insertionMode >= $t || u.insertionMode === _t ? Kt(gt, null) : u;
    }
    var er = null;
    function jn(u) {
      var p = u.nextSuspenseID++;
      return m(u.boundaryPrefix + p.toString(16));
    }
    function on(u, p, w) {
      var O = u.idPrefix, U = ":" + O + "R" + p;
      return w > 0 && (U += "H" + w.toString(32)), U + ":";
    }
    function En(u) {
      return yt(u);
    }
    var pr = m("<!-- -->");
    function lr(u, p, w, O) {
      return p === "" ? O : (O && u.push(pr), u.push(T(En(p))), !0);
    }
    function sr(u, p, w, O) {
      w && O && u.push(pr);
    }
    var x = /* @__PURE__ */ new Map();
    function A(u) {
      var p = x.get(u);
      if (p !== void 0)
        return p;
      var w = m(yt(X(u)));
      return x.set(u, w), w;
    }
    var z = m(' style="'), G = m(":"), be = m(";");
    function B(u, p, w) {
      if (typeof w != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var O = !0;
      for (var U in w)
        if (Y.call(w, U)) {
          var ae = w[U];
          if (!(ae == null || typeof ae == "boolean" || ae === "")) {
            var pe = void 0, ke = void 0, l = U.indexOf("--") === 0;
            l ? (pe = T(yt(U)), j(ae, U), ke = T(yt(("" + ae).trim()))) : (ut(U, ae), pe = A(U), typeof ae == "number" ? ae !== 0 && !Y.call(Le, U) ? ke = T(ae + "px") : ke = T("" + ae) : (j(ae, U), ke = T(yt(("" + ae).trim())))), O ? (O = !1, u.push(z, pe, G, ke)) : u.push(be, pe, G, ke);
          }
        }
      O || u.push(ye);
    }
    var I = m(" "), te = m('="'), ye = m('"'), Ye = m('=""');
    function et(u, p, w, O) {
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
        var U = ve(w);
        if (U !== null) {
          switch (typeof O) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!U.acceptsBooleans)
                return;
          }
          var ae = U.attributeName, pe = T(ae);
          switch (U.type) {
            case q:
              O && u.push(I, pe, Ye);
              return;
            case me:
              O === !0 ? u.push(I, pe, Ye) : O === !1 || u.push(I, pe, te, T(yt(O)), ye);
              return;
            case W:
              isNaN(O) || u.push(I, pe, te, T(yt(O)), ye);
              break;
            case se:
              !isNaN(O) && O >= 1 && u.push(I, pe, te, T(yt(O)), ye);
              break;
            default:
              U.sanitizeURL && (R(O, ae), O = "" + O, We(O)), u.push(I, pe, te, T(yt(O)), ye);
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
          u.push(I, T(w), te, T(yt(O)), ye);
        }
      }
    }
    var At = m(">"), Cn = m("/>");
    function pn(u, p, w) {
      if (p != null) {
        if (w != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof p != "object" || !("__html" in p))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var O = p.__html;
        O != null && (H(O), u.push(T("" + O)));
      }
    }
    var _n = !1, ur = !1, Un = !1, Nr = !1, mr = !1, Tr = !1, cr = !1;
    function Zr(u, p) {
      {
        var w = u[p];
        if (w != null) {
          var O = it(w);
          u.multiple && !O ? a("The `%s` prop supplied to <select> must be an array if `multiple` is true.", p) : !u.multiple && O && a("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", p);
        }
      }
    }
    function al(u, p, w) {
      Ie("select", p), Zr(p, "value"), Zr(p, "defaultValue"), p.value !== void 0 && p.defaultValue !== void 0 && !Un && (a("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Un = !0), u.push(Kn("select"));
      var O = null, U = null;
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
              U = pe;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              et(u, w, ae, pe);
              break;
          }
        }
      return u.push(At), pn(u, U, O), O;
    }
    function il(u) {
      var p = "";
      return e.Children.forEach(u, function(w) {
        w != null && (p += w, !mr && typeof w != "string" && typeof w != "number" && (mr = !0, a("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), p;
    }
    var Ua = m(' selected=""');
    function ol(u, p, w, O) {
      var U = O.selectedValue;
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
              et(u, w, h, S);
              break;
          }
        }
      if (U != null) {
        var C;
        if (pe !== null ? (R(pe, "value"), C = "" + pe) : (l !== null && (Tr || (Tr = !0, a("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), C = il(ae)), it(U))
          for (var F = 0; F < U.length; F++) {
            R(U[F], "value");
            var ee = "" + U[F];
            if (ee === C) {
              u.push(Ua);
              break;
            }
          }
        else
          R(U, "select.value"), "" + U === C && u.push(Ua);
      } else
        ke && u.push(Ua);
      return u.push(At), pn(u, l, ae), ae;
    }
    function Ka(u, p, w) {
      Ie("input", p), p.checked !== void 0 && p.defaultChecked !== void 0 && !ur && (a("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", p.type), ur = !0), p.value !== void 0 && p.defaultValue !== void 0 && !_n && (a("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", p.type), _n = !0), u.push(Kn("input"));
      var O = null, U = null, ae = null, pe = null;
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
              U = l;
              break;
            case "checked":
              ae = l;
              break;
            case "value":
              O = l;
              break;
            default:
              et(u, w, ke, l);
              break;
          }
        }
      return ae !== null ? et(u, w, "checked", ae) : pe !== null && et(u, w, "checked", pe), O !== null ? et(u, w, "value", O) : U !== null && et(u, w, "value", U), u.push(Cn), null;
    }
    function dr(u, p, w) {
      Ie("textarea", p), p.value !== void 0 && p.defaultValue !== void 0 && !Nr && (a("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Nr = !0), u.push(Kn("textarea"));
      var O = null, U = null, ae = null;
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
              U = ke;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              et(u, w, pe, ke);
              break;
          }
        }
      if (O === null && U !== null && (O = U), u.push(At), ae != null) {
        if (a("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), O != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (it(ae)) {
          if (ae.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          H(ae[0]), O = "" + ae[0];
        }
        H(ae), O = "" + ae;
      }
      return typeof O == "string" && O[0] === `
` && u.push(Cr), O !== null && (R(O, "value"), u.push(T(En("" + O)))), null;
    }
    function Qr(u, p, w, O) {
      u.push(Kn(w));
      for (var U in p)
        if (Y.call(p, U)) {
          var ae = p[U];
          if (ae == null)
            continue;
          switch (U) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(w + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              et(u, O, U, ae);
              break;
          }
        }
      return u.push(Cn), null;
    }
    function ha(u, p, w) {
      u.push(Kn("menuitem"));
      for (var O in p)
        if (Y.call(p, O)) {
          var U = p[O];
          if (U == null)
            continue;
          switch (O) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              et(u, w, O, U);
              break;
          }
        }
      return u.push(At), null;
    }
    function Jt(u, p, w) {
      u.push(Kn("title"));
      var O = null;
      for (var U in p)
        if (Y.call(p, U)) {
          var ae = p[U];
          if (ae == null)
            continue;
          switch (U) {
            case "children":
              O = ae;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              et(u, w, U, ae);
              break;
          }
        }
      u.push(At);
      {
        var pe = Array.isArray(O) && O.length < 2 ? O[0] || null : O;
        Array.isArray(O) && O.length > 1 ? a("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : pe != null && pe.$$typeof != null ? a("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : pe != null && typeof pe != "string" && typeof pe != "number" && a("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return O;
    }
    function gr(u, p, w, O) {
      u.push(Kn(w));
      var U = null, ae = null;
      for (var pe in p)
        if (Y.call(p, pe)) {
          var ke = p[pe];
          if (ke == null)
            continue;
          switch (pe) {
            case "children":
              U = ke;
              break;
            case "dangerouslySetInnerHTML":
              ae = ke;
              break;
            default:
              et(u, O, pe, ke);
              break;
          }
        }
      return u.push(At), pn(u, ae, U), typeof U == "string" ? (u.push(T(En(U))), null) : U;
    }
    function zn(u, p, w, O) {
      u.push(Kn(w));
      var U = null, ae = null;
      for (var pe in p)
        if (Y.call(p, pe)) {
          var ke = p[pe];
          if (ke == null)
            continue;
          switch (pe) {
            case "children":
              U = ke;
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
              ne(pe) && typeof ke != "function" && typeof ke != "symbol" && u.push(I, T(pe), te, T(yt(ke)), ye);
              break;
          }
        }
      return u.push(At), pn(u, ae, U), U;
    }
    var Cr = m(`
`);
    function yr(u, p, w, O) {
      u.push(Kn(w));
      var U = null, ae = null;
      for (var pe in p)
        if (Y.call(p, pe)) {
          var ke = p[pe];
          if (ke == null)
            continue;
          switch (pe) {
            case "children":
              U = ke;
              break;
            case "dangerouslySetInnerHTML":
              ae = ke;
              break;
            default:
              et(u, O, pe, ke);
              break;
          }
        }
      if (u.push(At), ae != null) {
        if (U != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof ae != "object" || !("__html" in ae))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var l = ae.__html;
        l != null && (typeof l == "string" && l.length > 0 && l[0] === `
` ? u.push(Cr, T(l)) : (H(l), u.push(T("" + l))));
      }
      return typeof U == "string" && U[0] === `
` && u.push(Cr), U;
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
    function Xa(u, p, w, O, U) {
      switch (Me(p, w), je(p, w), Dt(p, w, null), !w.suppressContentEditableWarning && w.contentEditable && w.children != null && a("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), U.insertionMode !== rn && U.insertionMode !== xn && p.indexOf("-") === -1 && typeof w.is != "string" && p.toLowerCase() !== p && a("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", p), p) {
        case "select":
          return al(u, w, O);
        case "option":
          return ol(u, w, O, U);
        case "textarea":
          return dr(u, w, O);
        case "input":
          return Ka(u, w, O);
        case "menuitem":
          return ha(u, w, O);
        case "title":
          return Jt(u, w, O);
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
          return U.insertionMode === _t && u.push(Ya), gr(u, w, p, O);
        default:
          return p.indexOf("-") === -1 && typeof w.is != "string" ? gr(u, w, p, O) : zn(u, w, p, O);
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
    var ya = m("<!--$-->"), Jr = m('<!--$?--><template id="'), ul = m('"></template>'), ea = m("<!--$!-->"), qa = m("<!--/$-->"), Ga = m("<template"), Fr = m('"'), $r = m(' data-dgst="'), va = m(' data-msg="'), Ki = m(' data-stck="'), Za = m("></template>");
    function Yi(u, p) {
      return v(u, ya);
    }
    function xa(u, p, w) {
      if (y(u, Jr), w === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return y(u, w), v(u, ul);
    }
    function Bn(u, p, w, O, U) {
      var ae;
      return ae = v(u, ea), y(u, Ga), w && (y(u, $r), y(u, T(yt(w))), y(u, Fr)), O && (y(u, va), y(u, T(yt(O))), y(u, Fr)), U && (y(u, Ki), y(u, T(yt(U))), y(u, Fr)), ae = v(u, Za), ae;
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
    var qi = m('<div hidden id="'), Sa = m('">'), Gi = m("</div>"), Zi = m('<svg aria-hidden="true" style="display:none" id="'), Ea = m('">'), ka = m("</svg>"), Qi = m('<math aria-hidden="true" style="display:none" id="'), Ji = m('">'), eo = m("</math>"), Qa = m('<table hidden id="'), to = m('">'), b = m("</table>"), P = m('<table hidden><tbody id="'), $ = m('">'), J = m("</tbody></table>"), Se = m('<table hidden><tr id="'), xe = m('">'), Oe = m("</tr></table>"), Ve = m('<table hidden><colgroup id="'), ht = m('">'), Pt = m("</colgroup></table>");
    function Et(u, p, w, O) {
      switch (w.insertionMode) {
        case _t:
        case gt:
          return y(u, qi), y(u, p.segmentPrefix), y(u, T(O.toString(16))), v(u, Sa);
        case rn:
          return y(u, Zi), y(u, p.segmentPrefix), y(u, T(O.toString(16))), v(u, Ea);
        case xn:
          return y(u, Qi), y(u, p.segmentPrefix), y(u, T(O.toString(16))), v(u, Ji);
        case $t:
          return y(u, Qa), y(u, p.segmentPrefix), y(u, T(O.toString(16))), v(u, to);
        case bn:
          return y(u, P), y(u, p.segmentPrefix), y(u, T(O.toString(16))), v(u, $);
        case hn:
          return y(u, Se), y(u, p.segmentPrefix), y(u, T(O.toString(16))), v(u, xe);
        case Wt:
          return y(u, Ve), y(u, p.segmentPrefix), y(u, T(O.toString(16))), v(u, ht);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function an(u, p) {
      switch (p.insertionMode) {
        case _t:
        case gt:
          return v(u, Gi);
        case rn:
          return v(u, ka);
        case xn:
          return v(u, eo);
        case $t:
          return v(u, b);
        case bn:
          return v(u, J);
        case hn:
          return v(u, Oe);
        case Wt:
          return v(u, Pt);
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
    var Fc = m(Yn + ';$RC("'), $c = m('$RC("'), zc = m('","'), Bc = m('")<\/script>');
    function dl(u, p, w, O) {
      if (y(u, p.startInlineScript), p.sentCompleteBoundaryFunction ? y(u, $c) : (p.sentCompleteBoundaryFunction = !0, y(u, Fc)), w === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var U = T(O.toString(16));
      return y(u, w), y(u, zc), y(u, p.segmentPrefix), y(u, U), v(u, Bc);
    }
    var Ic = m(Xn + ';$RX("'), Hc = m('$RX("'), fl = m('"'), Wc = m(")<\/script>"), hl = m(",");
    function Os(u, p, w, O, U, ae) {
      if (y(u, p.startInlineScript), p.sentClientRenderFunction ? y(u, Hc) : (p.sentClientRenderFunction = !0, y(u, Ic)), w === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return y(u, w), y(u, fl), (O || U || ae) && (y(u, hl), y(u, T(pl(O || "")))), (U || ae) && (y(u, hl), y(u, T(pl(U || "")))), ae && (y(u, hl), y(u, T(pl(ae)))), v(u, Wc);
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
    function $s(u, p, w) {
      var O = u.displayName;
      if (O)
        return O;
      var U = p.displayName || p.name || "";
      return U !== "" ? w + "(" + U + ")" : w;
    }
    function zs(u) {
      return u.displayName || "Context";
    }
    function mn(u) {
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
            return zs(p) + ".Consumer";
          case ro:
            var w = u;
            return zs(w._context) + ".Provider";
          case io:
            return $s(u, u.render, "ForwardRef");
          case ni:
            var O = u.displayName || null;
            return O !== null ? O : mn(u.type) || "Memo";
          case Ta: {
            var U = u, ae = U._payload, pe = U._init;
            try {
              return mn(pe(ae));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ri = 0, vl, fn, Ca, xl, bl, Sl, El;
    function kl() {
    }
    kl.__reactDisabledLog = !0;
    function Bs() {
      {
        if (ri === 0) {
          vl = console.log, fn = console.info, Ca = console.warn, xl = console.error, bl = console.group, Sl = console.groupCollapsed, El = console.groupEnd;
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
              value: fn
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
    var lo = n.ReactCurrentDispatcher, wl;
    function ai(u, p, w) {
      {
        if (wl === void 0)
          try {
            throw Error();
          } catch (U) {
            var O = U.stack.trim().match(/\n( *(at )?)/);
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
      var U = Error.prepareStackTrace;
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
        ii = !1, lo.current = ae, Is(), Error.prepareStackTrace = U;
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
            var O = u, U = O._payload, ae = O._init;
            try {
              return Cl(ae(U), p, w);
            } catch {
            }
          }
        }
      return "";
    }
    var Al = {}, Ws = n.ReactDebugCurrentFrame;
    function Pa(u) {
      if (u) {
        var p = u._owner, w = Cl(u.type, u._source, p ? p.type : null);
        Ws.setExtraStackFrame(w);
      } else
        Ws.setExtraStackFrame(null);
    }
    function Pl(u, p, w, O, U) {
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
            ke && !(ke instanceof Error) && (Pa(U), a("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", O || "React class", w, pe, typeof ke), Pa(null)), ke instanceof Error && !(ke.message in Al) && (Al[ke.message] = !0, Pa(U), a("Failed %s type: %s", w, ke.message), Pa(null));
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
        for (var U in w)
          O[U] = p[U];
        {
          var ae = mn(u) || "Unknown";
          Pl(w, O, "context", ae);
        }
        return O;
      }
    }
    function Ll(u, p, w, O) {
      {
        if (typeof u.getChildContext != "function") {
          {
            var U = mn(p) || "Unknown";
            uo[U] || (uo[U] = !0, a("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", U, U));
          }
          return w;
        }
        var ae = u.getChildContext();
        for (var pe in ae)
          if (!(pe in O))
            throw new Error((mn(p) || "Unknown") + '.getChildContext(): key "' + pe + '" is not defined in childContextTypes.');
        {
          var ke = mn(p) || "Unknown";
          Pl(O, ae, "child context", ke);
        }
        return tr({}, w, ae);
      }
    }
    var zr;
    zr = {};
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
      w = u._currentValue, u._currentValue = p, u._currentRenderer !== void 0 && u._currentRenderer !== null && u._currentRenderer !== zr && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), u._currentRenderer = zr;
      var O = na, U = {
        parent: O,
        depth: O === null ? 0 : O.depth + 1,
        context: u,
        parentValue: w,
        value: p
      };
      return na = U, U;
    }
    function Us(u) {
      var p = na;
      if (p === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      p.context !== u && a("The parent context is not the expected context. This is probably a bug in React.");
      {
        var w = p.parentValue;
        w === jc ? p.context._currentValue = p.context._defaultValue : p.context._currentValue = w, u._currentRenderer !== void 0 && u._currentRenderer !== null && u._currentRenderer !== zr && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), u._currentRenderer = zr;
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
          var w = mn(u) || "Component";
          di.has(w) || (di.add(w), a("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", w));
        }
      };
    }
    function bo(u, p) {
      {
        var w = u.constructor, O = w && mn(w) || "ReactClass", U = O + "." + p;
        if (Ra[U])
          return;
        a(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, p, p, O), Ra[U] = !0;
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
    function Ks(u, p, w, O, U) {
      var ae = w(U, O);
      yo(p, ae);
      var pe = ae == null ? O : tr({}, O, ae);
      return pe;
    }
    function Ys(u, p, w) {
      var O = ta, U = u.contextType;
      if ("contextType" in u) {
        var ae = (
          // Allow null for conditional declaration
          U === null || U !== void 0 && U.$$typeof === ao && U._context === void 0
        );
        if (!ae && !Da.has(u)) {
          Da.add(u);
          var pe = "";
          U === void 0 ? pe = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof U != "object" ? pe = " However, it is set to a " + typeof U + "." : U.$$typeof === ro ? pe = " Did you accidentally pass the Context.Provider instead?" : U._context !== void 0 ? pe = " Did you accidentally pass the Context.Consumer instead?" : pe = " However, it is set to an object with keys {" + Object.keys(U).join(", ") + "}.", a("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", mn(u) || "Component", pe);
        }
      }
      typeof U == "object" && U !== null ? O = ci(U) : O = w;
      var ke = new u(p, O);
      {
        if (typeof u.getDerivedStateFromProps == "function" && (ke.state === null || ke.state === void 0)) {
          var l = mn(u) || "Component";
          _l.has(l) || (_l.add(l), a("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", l, ke.state === null ? "null" : "undefined", l));
        }
        if (typeof u.getDerivedStateFromProps == "function" || typeof ke.getSnapshotBeforeUpdate == "function") {
          var h = null, S = null, C = null;
          if (typeof ke.componentWillMount == "function" && ke.componentWillMount.__suppressDeprecationWarning !== !0 ? h = "componentWillMount" : typeof ke.UNSAFE_componentWillMount == "function" && (h = "UNSAFE_componentWillMount"), typeof ke.componentWillReceiveProps == "function" && ke.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? S = "componentWillReceiveProps" : typeof ke.UNSAFE_componentWillReceiveProps == "function" && (S = "UNSAFE_componentWillReceiveProps"), typeof ke.componentWillUpdate == "function" && ke.componentWillUpdate.__suppressDeprecationWarning !== !0 ? C = "componentWillUpdate" : typeof ke.UNSAFE_componentWillUpdate == "function" && (C = "UNSAFE_componentWillUpdate"), h !== null || S !== null || C !== null) {
            var F = mn(u) || "Component", ee = typeof u.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
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
        var O = mn(p) || "Component", U = u.render;
        U || (p.prototype && typeof p.prototype.render == "function" ? a("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", O) : a("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", O)), u.getInitialState && !u.getInitialState.isReactClassApproved && !u.state && a("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", O), u.getDefaultProps && !u.getDefaultProps.isReactClassApproved && a("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", O), u.propTypes && a("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", O), u.contextType && a("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", O), u.contextTypes && a("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", O), p.contextType && p.contextTypes && !vo.has(p) && (vo.add(p), a("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", O)), typeof u.componentShouldUpdate == "function" && a("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", O), p.prototype && p.prototype.isPureReactComponent && typeof u.shouldComponentUpdate < "u" && a("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", mn(p) || "A pure component"), typeof u.componentDidUnmount == "function" && a("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", O), typeof u.componentDidReceiveProps == "function" && a("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", O), typeof u.componentWillRecieveProps == "function" && a("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", O), typeof u.UNSAFE_componentWillRecieveProps == "function" && a("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", O);
        var ae = u.props !== w;
        u.props !== void 0 && ae && a("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", O, O), u.defaultProps && a("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", O, O), typeof u.getSnapshotBeforeUpdate == "function" && typeof u.componentDidUpdate != "function" && !mo.has(p) && (mo.add(p), a("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", mn(p))), typeof u.getDerivedStateFromProps == "function" && a("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", O), typeof u.getDerivedStateFromError == "function" && a("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", O), typeof p.getSnapshotBeforeUpdate == "function" && a("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", O);
        var pe = u.state;
        pe && (typeof pe != "object" || it(pe)) && a("%s.state: must be set to an object or null", O), typeof u.getChildContext == "function" && typeof p.childContextTypes != "object" && a("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", O);
      }
    }
    function Xc(u, p) {
      var w = p.state;
      if (typeof p.componentWillMount == "function") {
        if (p.componentWillMount.__suppressDeprecationWarning !== !0) {
          var O = mn(u) || "Unknown";
          po[O] || (r(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            O
          ), po[O] = !0);
        }
        p.componentWillMount();
      }
      typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), w !== p.state && (a("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", mn(u) || "Component"), So.enqueueReplaceState(p, p.state, null));
    }
    function qc(u, p, w, O) {
      if (u.queue !== null && u.queue.length > 0) {
        var U = u.queue, ae = u.replace;
        if (u.queue = null, u.replace = !1, ae && U.length === 1)
          p.state = U[0];
        else {
          for (var pe = ae ? U[0] : p.state, ke = !0, l = ae ? 1 : 0; l < U.length; l++) {
            var h = U[l], S = typeof h == "function" ? h.call(p, pe, w, O) : h;
            S != null && (ke ? (ke = !1, pe = tr({}, pe, S)) : tr(pe, S));
          }
          p.state = pe;
        }
      } else
        u.queue = null;
    }
    function qs(u, p, w, O) {
      Xs(u, p, w);
      var U = u.state !== void 0 ? u.state : null;
      u.updater = So, u.props = w, u.state = U;
      var ae = {
        queue: [],
        replace: !1
      };
      Yc(u, ae);
      var pe = p.contextType;
      if (typeof pe == "object" && pe !== null ? u.context = ci(pe) : u.context = O, u.state === w) {
        var ke = mn(p) || "Component";
        fi.has(ke) || (fi.add(ke), a("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", ke));
      }
      var l = p.getDerivedStateFromProps;
      typeof l == "function" && (u.state = Ks(u, p, l, U, w)), typeof p.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Xc(p, u), qc(ae, u, w, O));
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
      var O = u.id, U = u.overflow, ae = ko(O) - 1, pe = O & ~(1 << ae), ke = w + 1, l = ko(p) + ae;
      if (l > 30) {
        var h = ae - ae % 5, S = (1 << h) - 1, C = (pe & S).toString(32), F = pe >> h, ee = ae - h, de = ko(p) + ee, Ee = ke << ee, $e = Ee | F, tt = C + U;
        return {
          id: 1 << de | $e,
          overflow: tt
        };
      } else {
        var lt = ke << ae, vt = lt | pe, sn = U;
        return {
          id: 1 << l | vt,
          overflow: sn
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
    var nd = typeof Object.is == "function" ? Object.is : td, Ar = null, Fl = null, To = null, Nt = null, aa = !1, ia = !1, Yt = 0, nr = null, oa = 0, Co = 25, Nn = !1, Pr;
    function la() {
      if (Ar === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Nn && a("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Ar;
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
      Ar = p, Fl = u, Nn = !1, Yt = 0;
    }
    function Gs(u, p, w, O) {
      for (; ia; )
        ia = !1, Yt = 0, oa += 1, Nt = null, w = u(p, O);
      return $l(), w;
    }
    function Ao() {
      var u = Yt !== 0;
      return u;
    }
    function $l() {
      Nn = !1, Ar = null, Fl = null, ia = !1, To = null, oa = 0, nr = null, Nt = null;
    }
    function ad(u) {
      return Nn && a("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), ci(u);
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
        var O = Nt.queue, U = O.dispatch;
        if (nr !== null) {
          var ae = nr.get(O);
          if (ae !== void 0) {
            nr.delete(O);
            var pe = Nt.memoizedState, ke = ae;
            do {
              var l = ke.action;
              Nn = !0, pe = u(pe, l), Nn = !1, ke = ke.next;
            } while (ke !== null);
            return Nt.memoizedState = pe, [pe, U];
          }
        }
        return [Nt.memoizedState, U];
      } else {
        Nn = !0;
        var h;
        u === hi ? h = typeof p == "function" ? p() : p : h = w !== void 0 ? w(p) : p, Nn = !1, Nt.memoizedState = h;
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
          var U = O[1];
          if (br(w, U))
            return O[0];
        }
      }
      Nn = !0;
      var ae = u();
      return Nn = !1, Nt.memoizedState = [ae, w], ae;
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
        var U = nr.get(p);
        if (U === void 0)
          nr.set(p, O);
        else {
          for (var ae = U; ae.next !== null; )
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
      var u = Fl, p = Zc(u.treeContext), w = zl;
      if (w === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var O = Yt++;
      return on(w, p, O);
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
    }, zl = null;
    function pi(u) {
      zl = u;
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
    var mi = n.ReactCurrentDispatcher, Lo = n.ReactDebugCurrentFrame, Bl = 0, Br = 1, Do = 2, Oo = 3, ua = 4, ru = 0, Il = 1, ca = 2, pd = 12800;
    function au(u) {
      return console.error(u), null;
    }
    function Sr() {
    }
    function md(u, p, w, O, U, ae, pe, ke, l) {
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
        onError: U === void 0 ? au : U,
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
    function Hl(u, p, w, O, U, ae, pe, ke) {
      u.allPendingTasks++, w === null ? u.pendingRootTasks++ : w.pendingTasks++;
      var l = {
        node: p,
        ping: function() {
          return gd(u, l);
        },
        blockedBoundary: w,
        blockedSegment: O,
        abortSet: U,
        legacyContext: ae,
        context: pe,
        treeContext: ke
      };
      return l.componentStack = null, U.add(l), l;
    }
    function Mo(u, p, w, O, U, ae) {
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
        lastPushedText: U,
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
      var O = p.blockedBoundary, U = p.blockedSegment, ae = w.fallback, pe = w.children, ke = /* @__PURE__ */ new Set(), l = gi(u, ke), h = U.chunks.length, S = Mo(
        u,
        h,
        l,
        U.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      U.children.push(S), U.lastPushedText = !1;
      var C = Mo(
        u,
        0,
        null,
        U.formatContext,
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
        p.blockedBoundary = O, p.blockedSegment = U;
      }
      var F = Hl(u, ae, O, S, ke, p.legacyContext, p.context, p.treeContext);
      F.componentStack = p.componentStack, u.pingedTasks.push(F), rr(p);
    }
    function vi(u, p, w, O) {
      Ir(p, w);
      var U = p.blockedSegment, ae = Xa(U.chunks, w, O, u.responseState, U.formatContext);
      U.lastPushedText = !1;
      var pe = U.formatContext;
      U.formatContext = Mn(pe, w, O), Jl(u, p, ae), U.formatContext = pe, Ui(U.chunks, w), U.lastPushedText = !1, rr(p);
    }
    function _o(u) {
      return u.prototype && u.prototype.isReactComponent;
    }
    function iu(u, p, w, O, U) {
      var ae = {};
      rd(p, ae);
      var pe = w(O, U);
      return Gs(w, O, pe, U);
    }
    function ou(u, p, w, O, U) {
      var ae = w.render();
      w.props !== U && (bi || a("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", mn(O) || "a component"), bi = !0);
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
      var U = Rl(w, p.legacyContext), ae = Ys(w, O, U);
      qs(ae, w, O, U), ou(u, p, ae, w, O), rr(p);
    }
    var Ul = {}, xi = {}, lu = {}, Kl = {}, bi = !1, Yl = !1, Xl = !1, ql = !1;
    function su(u, p, w, O) {
      var U;
      if (U = Rl(w, p.legacyContext), Er(p, w), w.prototype && typeof w.prototype.render == "function") {
        var ae = mn(w) || "Unknown";
        Ul[ae] || (a("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", ae, ae), Ul[ae] = !0);
      }
      var pe = iu(u, p, w, O, U), ke = Ao();
      if (typeof pe == "object" && pe !== null && typeof pe.render == "function" && pe.$$typeof === void 0) {
        var l = mn(w) || "Unknown";
        xi[l] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", l, l, l), xi[l] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof pe == "object" && pe !== null && typeof pe.render == "function" && pe.$$typeof === void 0
      ) {
        {
          var h = mn(w) || "Unknown";
          xi[h] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", h, h, h), xi[h] = !0);
        }
        qs(pe, w, O, U), ou(u, p, pe, w, O);
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
          var p = mn(u) || "Unknown";
          Kl[p] || (a("%s: Function components do not support getDerivedStateFromProps.", p), Kl[p] = !0);
        }
        if (typeof u.contextType == "object" && u.contextType !== null) {
          var w = mn(u) || "Unknown";
          lu[w] || (a("%s: Function components do not support contextType.", w), lu[w] = !0);
        }
      }
    }
    function Gl(u, p) {
      if (u && u.defaultProps) {
        var w = tr({}, p), O = u.defaultProps;
        for (var U in O)
          w[U] === void 0 && (w[U] = O[U]);
        return w;
      }
      return p;
    }
    function vd(u, p, w, O, U) {
      Er(p, w.render);
      var ae = iu(u, p, w.render, O, U), pe = Ao();
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
    function xd(u, p, w, O, U) {
      var ae = w.type, pe = Gl(ae, O);
      Zl(u, p, ae, pe, U);
    }
    function cu(u, p, w, O) {
      w._context === void 0 ? w !== w.Consumer && (ql || (ql = !0, a("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : w = w._context;
      var U = O.children;
      typeof U != "function" && a("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var ae = ci(w), pe = U(ae);
      Gn(u, p, pe);
    }
    function bd(u, p, w, O) {
      var U = w._context, ae = O.value, pe = O.children, ke;
      ke = p.context, p.context = js(U, ae), Gn(u, p, pe), p.context = Us(U), ke !== p.context && a("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function Sd(u, p, w, O, U) {
      Ir(p, "Lazy");
      var ae = w._payload, pe = w._init, ke = pe(ae), l = Gl(ke, O);
      Zl(u, p, ke, l, U), rr(p);
    }
    function Zl(u, p, w, O, U) {
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
            vd(u, p, w, O, U);
            return;
          }
          case ni: {
            xd(u, p, w, O, U);
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
            var O = w, U = O.type, ae = O.props, pe = O.ref;
            Zl(u, p, U, ae, pe);
            return;
          }
          case _s:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case Ta: {
            var ke = w, l = ke._payload, h = ke._init, S;
            try {
              S = h(l);
            } catch (lt) {
              throw typeof lt == "object" && lt !== null && typeof lt.then == "function" && Ir(p, "Lazy"), lt;
            }
            Gn(u, p, S);
            return;
          }
        }
        if (it(w)) {
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
        var $e = p.blockedSegment;
        $e.lastPushedText = lr(p.blockedSegment.chunks, w, u.responseState, $e.lastPushedText);
        return;
      }
      if (typeof w == "number") {
        var tt = p.blockedSegment;
        tt.lastPushedText = lr(p.blockedSegment.chunks, "" + w, u.responseState, tt.lastPushedText);
        return;
      }
      typeof w == "function" && a("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function du(u, p, w) {
      for (var O = w.length, U = 0; U < O; U++) {
        var ae = p.treeContext;
        p.treeContext = Eo(ae, O, U);
        try {
          Jl(u, p, w[U]);
        } finally {
          p.treeContext = ae;
        }
      }
    }
    function Zn(u, p, w) {
      var O = p.blockedSegment, U = O.chunks.length, ae = Mo(
        u,
        U,
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
      var O = p.blockedSegment.formatContext, U = p.legacyContext, ae = p.context, pe = null;
      pe = p.componentStack;
      try {
        return Gn(u, p, w);
      } catch (ke) {
        if ($l(), typeof ke == "object" && ke !== null && typeof ke.then == "function") {
          Zn(u, p, ke), p.blockedSegment.formatContext = O, p.legacyContext = U, p.context = ae, ui(ae), p.componentStack = pe;
          return;
        } else
          throw p.blockedSegment.formatContext = O, p.legacyContext = U, p.context = ae, ui(ae), p.componentStack = pe, ke;
      }
    }
    function fu(u, p, w, O) {
      var U = ar(u, O);
      if (p === null ? Hr(u, O) : (p.pendingTasks--, p.forceClientRender || (p.forceClientRender = !0, p.errorDigest = U, Vl(p, O), p.parentFlushed && u.clientRenderedBoundaries.push(p))), u.allPendingTasks--, u.allPendingTasks === 0) {
        var ae = u.onAllReady;
        ae();
      }
    }
    function kd(u) {
      var p = this, w = u.blockedBoundary, O = u.blockedSegment;
      O.status = Oo, hu(p, w, O);
    }
    function No(u, p, w) {
      var O = u.blockedBoundary, U = u.blockedSegment;
      if (U.status = Oo, O === null)
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
          var U = p.completedSegments;
          U.length === 1 && p.parentFlushed && u.partialBoundaries.push(p);
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
          if ($l(), typeof ae == "object" && ae !== null && typeof ae.then == "function") {
            var U = p.ping;
            ae.then(U, U);
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
        var U = zl;
        pi(u.responseState);
        try {
          var ae = u.pingedTasks, pe;
          for (pe = 0; pe < ae.length; pe++) {
            var ke = ae[pe];
            pu(u, ke);
          }
          ae.splice(0, pe), u.destination !== null && zo(u, u.destination);
        } catch (l) {
          ar(u, l), Hr(u, l);
        } finally {
          pi(U), mi.current = w, Lo.getCurrentStack = O, w === tu && ui(p);
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
          for (var U = !0, ae = w.chunks, pe = 0, ke = w.children, l = 0; l < ke.length; l++) {
            for (var h = ke[l]; pe < h.index; pe++)
              y(p, ae[pe]);
            U = $o(u, p, h);
          }
          for (; pe < ae.length - 1; pe++)
            y(p, ae[pe]);
          return pe < ae.length && (U = v(p, ae[pe])), U;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function $o(u, p, w) {
      var O = w.boundary;
      if (O === null)
        return Ei(u, p, w);
      if (O.parentFlushed = !0, O.forceClientRender)
        return Bn(p, u.responseState, O.errorDigest, O.errorMessage, O.errorComponentStack), Ei(u, p, w), cl(p, u.responseState);
      if (O.pendingTasks > 0) {
        O.rootSegmentID = u.nextSegmentId++, O.completedSegments.length > 0 && u.partialBoundaries.push(O);
        var U = O.id = jn(u.responseState);
        return xa(p, u.responseState, U), Ei(u, p, w), ba(p, u.responseState);
      } else {
        if (O.byteSize > u.progressiveChunkSize)
          return O.rootSegmentID = u.nextSegmentId++, u.completedBoundaries.push(O), xa(p, u.responseState, O.id), Ei(u, p, w), ba(p, u.responseState);
        Yi(p, u.responseState);
        var ae = O.completedSegments;
        if (ae.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var pe = ae[0];
        return $o(u, p, pe), Xi(p, u.responseState);
      }
    }
    function mu(u, p, w) {
      return Os(p, u.responseState, w.id, w.errorDigest, w.errorMessage, w.errorComponentStack);
    }
    function ki(u, p, w) {
      return Et(p, u.responseState, w.formatContext, w.id), $o(u, p, w), an(p, w.formatContext);
    }
    function wi(u, p, w) {
      for (var O = w.completedSegments, U = 0; U < O.length; U++) {
        var ae = O[U];
        es(u, p, w, ae);
      }
      return O.length = 0, dl(p, u.responseState, w.id, w.rootSegmentID);
    }
    function wd(u, p, w) {
      for (var O = w.completedSegments, U = 0; U < O.length; U++) {
        var ae = O[U];
        if (!es(u, p, w, ae))
          return U++, O.splice(0, U), !1;
      }
      return O.splice(0, U), !0;
    }
    function es(u, p, w, O) {
      if (O.status === Do)
        return !0;
      var U = O.id;
      if (U === -1) {
        var ae = O.id = w.rootSegmentID;
        if (ae === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return ki(u, p, O);
      } else
        return ki(u, p, O), Nc(p, u.responseState, U);
    }
    function zo(u, p) {
      g();
      try {
        var w = u.completedRootSegment;
        w !== null && u.pendingRootTasks === 0 && ($o(u, p, w), u.completedRootSegment = null, ll(p, u.responseState));
        var O = u.clientRenderedBoundaries, U;
        for (U = 0; U < O.length; U++) {
          var ae = O[U];
          mu(u, p, ae);
        }
        O.splice(0, U);
        var pe = u.completedBoundaries;
        for (U = 0; U < pe.length; U++) {
          var ke = pe[U];
          wi(u, p, ke);
        }
        pe.splice(0, U), E(p), g(p);
        var l = u.partialBoundaries;
        for (U = 0; U < l.length; U++) {
          var h = l[U];
          if (!wd(u, p, h)) {
            u.destination = null, U++, l.splice(0, U);
            return;
          }
        }
        l.splice(0, U);
        var S = u.completedBoundaries;
        for (U = 0; U < S.length; U++) {
          var C = S[U];
          wi(u, p, C);
        }
        S.splice(0, U);
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
          zo(u, p);
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
        }), w.clear(), u.destination !== null && zo(u, u.destination);
      } catch (O) {
        ar(u, O), Hr(u, O);
      }
    }
    function Cd(u, p) {
      return new Promise(function(w, O) {
        var U, ae, pe = new Promise(function(F, ee) {
          ae = F, U = ee;
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
        var h = md(u, Mt(p ? p.identifierPrefix : void 0, p ? p.nonce : void 0, p ? p.bootstrapScriptContent : void 0, p ? p.bootstrapScripts : void 0, p ? p.bootstrapModules : void 0), On(p ? p.namespaceURI : void 0), p ? p.progressiveChunkSize : void 0, p ? p.onError : void 0, ae, ke, l, U);
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
process.env.NODE_ENV === "production" ? (Ii = TE(), Rf = CE()) : (Ii = AE(), Rf = PE());
ja.version = Ii.version;
ja.renderToString = Ii.renderToString;
ja.renderToStaticMarkup = Ii.renderToStaticMarkup;
ja.renderToNodeStream = Ii.renderToNodeStream;
ja.renderToStaticNodeStream = Ii.renderToStaticNodeStream;
ja.renderToReadableStream = Rf.renderToReadableStream;
const RE = ({ width: e, height: t, runtime: n }) => {
  var ve, Re;
  const { config: r } = ue.useContext(bt), { sankey: a } = r, o = r == null ? void 0 : r.data[0], [f, s] = ue.useState(0), c = ue.useRef([]), [d, g] = ue.useState(""), y = (le) => {
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
    (_e = c == null ? void 0 : c.current) == null || _e.map((Be) => {
      const Te = Be == null ? void 0 : Be.getBoundingClientRect().width;
      Te > le && (le = Te);
    }), s(le);
  }, [c, a, window.innerWidth]);
  const T = Array.from(new Set((ve = o == null ? void 0 : o.links) == null ? void 0 : ve.flatMap((le) => [le.source, le.target]))), m = {
    nodes: T.map((le) => ({ id: le })),
    links: (Re = o == null ? void 0 : o.links) == null ? void 0 : Re.map((le) => ({
      source: T.findIndex((_e) => _e === le.source),
      target: T.findIndex((_e) => _e === le.target),
      value: le.value
    }))
  };
  let D = 5;
  const L = 50, _ = SE().nodeWidth(a.nodeSize.nodeWidth).nodePadding(a.nodePadding).iterations(a.iterations).nodeAlign(gE).extent([
    [a.margin.margin_x, Number(a.margin.margin_y)],
    [e - D - f, r.heights.vertical - L]
  ]), { nodes: N, links: R } = _(m), j = (le) => {
    var Le;
    let _e = 30, Be = 0, Te = "node-value--storynode", ge = !0;
    return (Le = o == null ? void 0 : o.storyNodeText) != null && Le.every((oe) => oe.StoryNode !== le) && (ge = !1, Be = 10, _e = 8, Te = "node-value"), { textPositionHorizontal: _e, textPositionVertical: Be, classStyle: Te, storyNodes: ge };
  }, H = (le) => {
    const _e = m.nodes.find((ge) => ge.id === le), Be = [], Te = [];
    return _e && (R.forEach((ge) => {
      const Le = ge.target, oe = ge.source;
      Le.id === le && Be.push(oe.id);
    }), Be.forEach((ge) => {
      R.forEach((Le) => {
        const oe = Le.target, we = Le.source;
        oe.id === d && we.id === ge && Te.push(Le);
      });
    })), { sourceNodes: Be, activeLinks: Te };
  }, Y = `${((o == null ? void 0 : o.tooltips.find((le) => le.node === d)) || {}).value}`, Q = `${((o == null ? void 0 : o.tooltips.find((le) => le.node === d)) || {}).summary}`, re = ((o == null ? void 0 : o.tooltips.find((le) => le.node === d)) || {}).column1Label, K = ((o == null ? void 0 : o.tooltips.find((le) => le.node === d)) || {}).column2Label, q = ((o == null ? void 0 : o.tooltips.find((le) => le.node === d)) || {}).column1, me = ((o == null ? void 0 : o.tooltips.find((le) => le.node === d)) || {}).column2, W = ({ columnData: le }) => /* @__PURE__ */ i.createElement("ul", null, le == null ? void 0 : le.map((_e, Be) => /* @__PURE__ */ i.createElement("li", { key: Be }, _e.label, ": ", _e.value, " (", _e.additional_info, "%)"))), se = ja.renderToString(/* @__PURE__ */ i.createElement(W, { columnData: q })), ce = ja.renderToString(/* @__PURE__ */ i.createElement(W, { columnData: me })), he = `<div class="sankey-chart__tooltip">
                    <span class="sankey-chart__tooltip--tooltip-header">${d}</span>
                    <span class="sankey-chart__tooltip--tooltip-header">${Y}</span>
                    <div class="divider"></div>
                    <span><strong>Summary: </strong>${Q}</span>
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
    var Ie, Ue;
    let { textPositionHorizontal: Be, textPositionVertical: Te, classStyle: ge, storyNodes: Le } = j(le.id), { sourceNodes: oe } = H(d), we = a.opacity.nodeOpacityDefault, Ce = a.nodeColor.default;
    return d !== le.id && d !== "" && !oe.includes(le.id) && (Ce = a.nodeColor.inactive, we = a.opacity.nodeOpacityInactive), /* @__PURE__ */ i.createElement(nt, { className: "", key: _e }, /* @__PURE__ */ i.createElement(
      "rect",
      {
        height: le.y1 - le.y0 + 2,
        width: _.nodeWidth(),
        x: le.x0,
        y: le.y0 - 1,
        fill: Ce,
        fillOpacity: we,
        rx: a.rxValue,
        "data-tooltip-html": o.tooltips && r.enableTooltips ? he : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.uniqueId}-sankey`,
        onClick: () => y(le.id),
        style: { pointerEvents: "visible", cursor: "pointer" }
      }
    ), Le ? /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
      xt,
      {
        x: le.x0 + Be,
        textAnchor: m.nodes.length - 1 === _e ? "end" : "start",
        verticalAnchor: "end",
        y: (le.y1 + le.y0) / 2 - 30,
        fill: a.nodeFontColor,
        fontWeight: "bold",
        style: { pointerEvents: "none" },
        className: "node-text"
      },
      (((Ie = o == null ? void 0 : o.storyNodeText) == null ? void 0 : Ie.find((qe) => qe.StoryNode === le.id)) || {}).segmentTextBefore
    ), /* @__PURE__ */ i.createElement(xt, { verticalAnchor: "end", className: ge, x: le.x0 + Be, y: (le.y1 + le.y0 + 25) / 2, fill: a.storyNodeFontColor || a.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, typeof le.value == "number" ? le.value.toLocaleString() : le.value), /* @__PURE__ */ i.createElement(
      xt,
      {
        x: le.x0 + Be,
        y: (le.y1 + le.y0) / 2 + 50,
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: m.nodes.length === _e ? "end" : "start",
        style: { pointerEvents: "none" },
        className: "node-text",
        verticalAnchor: "end"
      },
      (((Ue = o == null ? void 0 : o.storyNodeText) == null ? void 0 : Ue.find((qe) => qe.StoryNode === le.id)) || {}).segmentTextAfter
    )) : /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("text", { x: le.x0 + Be, y: (le.y1 + le.y0) / 2 + Te, dominantBaseline: "text-before-edge", fill: a.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, /* @__PURE__ */ i.createElement("tspan", { id: le.id, className: "node-id" }, le.id)), /* @__PURE__ */ i.createElement(
      "text",
      {
        x: le.x0 + Be,
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
    const Te = wE()(le);
    let ge = a.opacity.LinkOpacityDefault, Le = a.linkColor.default, { activeLinks: oe } = H(d);
    return !oe.includes(le) && d !== "" && (Le = a.linkColor.inactive, ge = a.opacity.LinkOpacityInactive), /* @__PURE__ */ i.createElement("path", { key: _e, d: Te, stroke: Le, fill: "none", strokeOpacity: ge, strokeWidth: le.width + 2 });
  }), Z = m.nodes.reduce((le, _e) => Math.max(le, _e.depth), -1), Ae = m.nodes.filter((le) => le.depth === Z).map((le, _e) => {
    var Ie, Ue;
    let { textPositionHorizontal: Be, textPositionVertical: Te, classStyle: ge, storyNodes: Le } = j(le.id), { sourceNodes: oe } = H(d), we = a.opacity.nodeOpacityDefault, Ce = a.nodeColor.default;
    return d !== le.id && d !== "" && !oe.includes(le.id) && (Ce = a.nodeColor.inactive, we = a.opacity.nodeOpacityInactive), /* @__PURE__ */ i.createElement(nt, { className: "", key: _e, innerRef: (qe) => c.current[_e] = qe }, /* @__PURE__ */ i.createElement(
      "rect",
      {
        height: le.y1 - le.y0 + 2,
        width: _.nodeWidth(),
        x: le.x0,
        y: le.y0 - 1,
        fill: Ce,
        fillOpacity: we,
        rx: a.rxValue,
        "data-tooltip-html": o.tooltips && r.enableTooltips ? he : null,
        "data-tooltip-id": "tooltip",
        onClick: () => y(le.id),
        style: { pointerEvents: "visible", cursor: "pointer" }
      }
    ), Le ? /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
      xt,
      {
        x: le.x0 + Be,
        textAnchor: m.nodes.length - 1 === _e ? "end" : "start",
        verticalAnchor: "end",
        y: (le.y1 + le.y0) / 2 - 30,
        fill: a.nodeFontColor,
        fontWeight: "bold",
        style: { pointerEvents: "none" },
        className: "node-text"
      },
      (((Ie = o == null ? void 0 : o.storyNodeText) == null ? void 0 : Ie.find((qe) => qe.StoryNode === le.id)) || {}).segmentTextBefore
    ), /* @__PURE__ */ i.createElement(xt, { verticalAnchor: "end", className: ge, x: le.x0 + Be, y: (le.y1 + le.y0 + 25) / 2, fill: a.storyNodeFontColor || a.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, typeof le.value == "number" ? le.value.toLocaleString() : le.value), /* @__PURE__ */ i.createElement(
      xt,
      {
        x: le.x0 + Be,
        y: (le.y1 + le.y0) / 2 + 50,
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: m.nodes.length === _e ? "end" : "start",
        style: { pointerEvents: "none" },
        className: "node-text",
        verticalAnchor: "end"
      },
      (((Ue = o == null ? void 0 : o.storyNodeText) == null ? void 0 : Ue.find((qe) => qe.StoryNode === le.id)) || {}).segmentTextAfter
    )) : /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("text", { x: le.x0 + Be, y: (le.y1 + le.y0) / 2 + Te, dominantBaseline: "text-before-edge", fill: a.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, /* @__PURE__ */ i.createElement("tspan", { id: le.id, className: "node-id" }, le.id)), /* @__PURE__ */ i.createElement(
      "text",
      {
        x: le.x0 + Be,
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
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: "sankey-chart" }, /* @__PURE__ */ i.createElement("svg", { className: "sankey-chart__diagram", width: e, height: Number(r.heights.vertical), style: { overflow: "visible" } }, /* @__PURE__ */ i.createElement(nt, { className: "links" }, V), /* @__PURE__ */ i.createElement(nt, { className: "nodes" }, ie), /* @__PURE__ */ i.createElement(nt, { className: "finalNodes", style: { display: "none" } }, Ae)), /* @__PURE__ */ i.createElement(ay, { id: `cdc-open-viz-tooltip-${n.uniqueId}-sankey`, afterHide: () => v(), events: ["click"], place: "bottom", style: { backgroundColor: "rgba(238, 238, 238, 1)", color: "black", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" } }), E && /* @__PURE__ */ i.createElement("div", { className: "popup" }, /* @__PURE__ */ i.createElement("div", { className: "popup-content" }, /* @__PURE__ */ i.createElement("button", { className: "visually-hidden", onClick: M }, "Select for accessible version."), /* @__PURE__ */ i.createElement("p", null, /* @__PURE__ */ i.createElement("strong", null, "Please change the orientation of your screen or increase the size of your browser to view the diagram better."))))));
};
var LE = {
  top: "top",
  left: "left",
  right: "right",
  bottom: "bottom"
};
const Jn = LE;
function DE(e) {
  var t = e.labelOffset, n = e.labelProps, r = e.orientation, a = e.range, o = e.tickLabelFontSize, f = e.tickLength, s = r === Jn.left || r === Jn.top ? -1 : 1, c, d, g;
  if (r === Jn.top || r === Jn.bottom) {
    var y = r === Jn.bottom && typeof n.fontSize == "number" ? n.fontSize : 0;
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
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, vs.apply(this, arguments);
}
function OE(e) {
  var t = e.hideTicks, n = e.horizontal, r = e.orientation, a = e.tickClassName, o = e.tickComponent, f = e.tickLabelProps, s = e.tickStroke, c = s === void 0 ? "#222" : s, d = e.tickTransform, g = e.ticks, y = e.strokeWidth, v = e.tickLineProps;
  return g.map(function(E) {
    var k, M = E.value, T = E.index, m = E.from, D = E.to, L = E.formattedValue, _ = (k = f[T]) != null ? k : {}, N = Math.max(10, typeof _.fontSize == "number" && _.fontSize || 0), R = D.y + (n && r !== Jn.top ? N : 0);
    return /* @__PURE__ */ i.createElement(nt, {
      key: "visx-tick-" + M + "-" + T,
      className: wn("visx-axis-tick", a),
      transform: d
    }, !t && /* @__PURE__ */ i.createElement(en, vs({
      from: m,
      to: D,
      stroke: c,
      strokeWidth: y,
      strokeLinecap: "square"
    }, v)), o ? o(vs({}, _, {
      x: D.x,
      y: R,
      formattedValue: L
    })) : /* @__PURE__ */ i.createElement(xt, vs({
      x: D.x,
      y: R
    }, _), L));
  });
}
function pc() {
  return pc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
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
function ME(e) {
  var t = e.axisFromPoint, n = e.axisLineClassName, r = e.axisToPoint, a = e.hideAxisLine, o = e.hideTicks, f = e.horizontal, s = e.label, c = s === void 0 ? "" : s, d = e.labelClassName, g = e.labelOffset, y = g === void 0 ? 14 : g, v = e.labelProps, E = v === void 0 ? am : v, k = e.orientation, M = k === void 0 ? Jn.bottom : k, T = e.scale, m = e.stroke, D = m === void 0 ? "#222" : m, L = e.strokeDasharray, _ = e.strokeWidth, N = _ === void 0 ? 1 : _, R = e.tickClassName, j = e.tickComponent, H = e.tickLineProps, Y = e.tickLabelProps, Q = e.tickLength, re = Q === void 0 ? 8 : Q, K = e.tickStroke, q = K === void 0 ? "#222" : K, me = e.tickTransform, W = e.ticks, se = e.ticksComponent, ce = se === void 0 ? OE : se, he = pc({}, am, typeof Y == "object" ? Y : null), ie = W.map(function(Z) {
    var ne = Z.value, Ae = Z.index;
    return typeof Y == "function" ? Y(ne, Ae, W) : he;
  }), V = Math.max.apply(Math, [10].concat(ie.map(function(Z) {
    return typeof Z.fontSize == "number" ? Z.fontSize : 0;
  })));
  return /* @__PURE__ */ i.createElement(i.Fragment, null, ce({
    hideTicks: o,
    horizontal: f,
    orientation: M,
    scale: T,
    tickClassName: R,
    tickComponent: j,
    tickLabelProps: ie,
    tickStroke: q,
    tickTransform: me,
    ticks: W,
    strokeWidth: N,
    tickLineProps: H
  }), !a && /* @__PURE__ */ i.createElement(en, {
    className: wn("visx-axis-line", n),
    from: t,
    to: r,
    stroke: D,
    strokeWidth: N,
    strokeDasharray: L
  }), c && /* @__PURE__ */ i.createElement(xt, pc({
    className: wn("visx-axis-label", d)
  }, DE({
    labelOffset: y,
    labelProps: E,
    orientation: M,
    range: T.range(),
    tickLabelFontSize: V,
    tickLength: re
  }), E), c));
}
function _E(e, t) {
  t === void 0 && (t = "center");
  var n = e;
  if (t !== "start" && "bandwidth" in n) {
    var r = n.bandwidth();
    return t === "center" && (r /= 2), n.round() && (r = Math.round(r)), function(a) {
      var o = n(a);
      return typeof o == "number" ? o + r : o;
    };
  }
  return e;
}
function NE(e) {
  var t = e;
  return "tickFormat" in t ? t.tickFormat() : Tv;
}
function _u(e, t) {
  var n = e.x, r = e.y;
  return new nl(t ? {
    x: n,
    y: r
  } : {
    x: r,
    y: n
  });
}
function Lf() {
  return Lf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Lf.apply(this, arguments);
}
var Yd = 0;
function FE(e) {
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
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Df.apply(this, arguments);
}
function zE(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Lc(e) {
  var t = e.children, n = t === void 0 ? ME : t, r = e.axisClassName, a = e.hideAxisLine, o = a === void 0 ? !1 : a, f = e.hideTicks, s = f === void 0 ? !1 : f, c = e.hideZero, d = c === void 0 ? !1 : c, g = e.innerRef, y = e.left, v = y === void 0 ? 0 : y, E = e.numTicks, k = E === void 0 ? 10 : E, M = e.orientation, T = M === void 0 ? Jn.bottom : M, m = e.rangePadding, D = m === void 0 ? 0 : m, L = e.scale, _ = e.tickFormat, N = e.tickLength, R = N === void 0 ? 8 : N, j = e.tickValues, H = e.top, Y = H === void 0 ? 0 : H, Q = zE(e, $E), re = _ ?? NE(L), K = T === Jn.left, q = T === Jn.top, me = q || T === Jn.bottom, W = _E(L), se = K || q ? -1 : 1, ce = L.range(), he = FE(D), ie = _u({
    x: Number(ce[0]) + 0.5 - he.start,
    y: 0
  }, me), V = _u({
    x: Number(ce[ce.length - 1]) + 0.5 + he.end,
    y: 0
  }, me), Z = (j ?? wv(L, k)).filter(function(Ae) {
    return !d || Ae !== 0 && Ae !== "0";
  }).map(function(Ae, ve) {
    return {
      value: Ae,
      index: ve
    };
  }), ne = Z.map(function(Ae) {
    var ve = Ae.value, Re = Ae.index, le = kv(W(ve));
    return {
      value: ve,
      index: Re,
      from: _u({
        x: le,
        y: 0
      }, me),
      to: _u({
        x: le,
        y: R * se
      }, me),
      formattedValue: re(ve, Re, Z)
    };
  });
  return /* @__PURE__ */ i.createElement(nt, {
    className: wn("visx-axis", r),
    innerRef: g,
    top: Y,
    left: v
  }, n(Df({}, Q, {
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
var BE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function mc() {
  return mc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, mc.apply(this, arguments);
}
function IE(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var HE = {
  dx: "-0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "end"
};
function WE(e) {
  var t = e.axisClassName, n = e.labelOffset, r = n === void 0 ? 36 : n, a = e.tickLength, o = a === void 0 ? 8 : a, f = e.tickLabelProps, s = IE(e, BE), c = typeof f == "function" ? f : mc({}, HE, f);
  return /* @__PURE__ */ i.createElement(Lc, mc({
    axisClassName: wn("visx-axis-left", t),
    labelOffset: r,
    orientation: Jn.left,
    tickLabelProps: c,
    tickLength: o
  }, s));
}
var VE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function gc() {
  return gc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, gc.apply(this, arguments);
}
function jE(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var UE = {
  dx: "0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "start"
};
function KE(e) {
  var t = e.axisClassName, n = e.labelOffset, r = n === void 0 ? 36 : n, a = e.tickLength, o = a === void 0 ? 8 : a, f = e.tickLabelProps, s = jE(e, VE), c = typeof f == "function" ? f : gc({}, UE, f);
  return /* @__PURE__ */ i.createElement(Lc, gc({
    axisClassName: wn("visx-axis-right", t),
    labelOffset: r,
    orientation: Jn.right,
    tickLabelProps: c,
    tickLength: o
  }, s));
}
var YE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function yc() {
  return yc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, yc.apply(this, arguments);
}
function XE(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var qE = {
  dy: "-0.75em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function GE(e) {
  var t = e.axisClassName, n = e.labelOffset, r = n === void 0 ? 8 : n, a = e.tickLength, o = a === void 0 ? 8 : a, f = e.tickLabelProps, s = XE(e, YE), c = typeof f == "function" ? f : yc({}, qE, f);
  return /* @__PURE__ */ i.createElement(Lc, yc({
    axisClassName: wn("visx-axis-top", t),
    labelOffset: r,
    orientation: Jn.top,
    tickLabelProps: c,
    tickLength: o
  }, s));
}
var ZE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function vc() {
  return vc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, vc.apply(this, arguments);
}
function QE(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var JE = {
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function Hu(e) {
  var t = e.axisClassName, n = e.labelOffset, r = n === void 0 ? 8 : n, a = e.tickLength, o = a === void 0 ? 8 : a, f = e.tickLabelProps, s = QE(e, ZE), c = typeof f == "function" ? f : vc({}, JE, f);
  return /* @__PURE__ */ i.createElement(Lc, vc({
    axisClassName: wn("visx-axis-bottom", t),
    labelOffset: r,
    orientation: Jn.bottom,
    tickLabelProps: c,
    tickLength: o
  }, s));
}
const xs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  curveBasis: h0,
  curveBasisClosed: p0,
  curveBasisOpen: m0,
  curveBundle: g0,
  curveCardinal: y0,
  curveCardinalClosed: v0,
  curveCardinalOpen: x0,
  curveCatmullRom: b0,
  curveCatmullRomClosed: S0,
  curveCatmullRomOpen: E0,
  curveLinear: wc,
  curveLinearClosed: lf,
  curveMonotoneX: Iu,
  curveMonotoneY: k0,
  curveNatural: w0,
  curveStep: T0,
  curveStepAfter: A0,
  curveStepBefore: C0
}, Symbol.toStringTag, { value: "Module" })), ek = (e) => {
  var N;
  const { xScale: t, yScale: n, yMax: r, xMax: a, handleTooltipMouseOver: o, handleTooltipMouseOff: f, isDebug: s, children: c } = e;
  let { transformedData: d, config: g, handleLineType: y, parseDate: v, formatDate: E, formatNumber: k, seriesHighlight: M, colorScale: T, rawData: m } = ue.useContext(bt);
  const D = g.brush.active && ((N = g.brush.data) != null && N.length) ? g.brush.data : d;
  if (!D)
    return;
  const L = (R) => (Sn(g.xAxis) ? t(v(R[g.xAxis.dataKey], !1)) : t(R[g.xAxis.dataKey])) + (t.bandwidth ? t.bandwidth() / 2 : 0), _ = (R, j, H = void 0) => n(R[H.dataKey]);
  return D && /* @__PURE__ */ i.createElement("svg", null, /* @__PURE__ */ i.createElement(_r, { component: "AreaChart" }, /* @__PURE__ */ i.createElement(nt, { className: "area-chart", key: "area-wrapper", left: Number(g.yAxis.size) }, (g.runtime.areaSeriesKeys || g.series).map((R, j) => {
    let H = D.map((K) => ({
      [g.xAxis.dataKey]: K[g.xAxis.dataKey],
      [R.dataKey]: K[R.dataKey]
    })), Y = xs[R.lineType], Q = g.legend.behavior === "highlight" && M.length > 0 && M.indexOf(R.dataKey) === -1, re = g.legend.behavior === "highlight" || M.length === 0 || M.indexOf(R.dataKey) !== -1;
    return /* @__PURE__ */ i.createElement(i.Fragment, { key: j }, /* @__PURE__ */ i.createElement(
      da,
      {
        data: H,
        x: (K) => L(K),
        y: (K) => _(K, j, R),
        stroke: re ? T ? T(g.runtime.seriesLabels ? g.runtime.seriesLabels[R.dataKey] : R.dataKey) : "#000" : "transparent",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        curve: Y,
        strokeDasharray: R.type ? y(R.type) : 0
      }
    ), /* @__PURE__ */ i.createElement(
      J0,
      {
        key: "area-chart",
        fill: re ? T ? T(g.runtime.seriesLabels ? g.runtime.seriesLabels[R.dataKey] : R.dataKey) : "#000" : "transparent",
        fillOpacity: Q ? 0.25 : 0.5,
        data: H,
        x: (K) => L(K),
        y: (K) => _(K, j, R),
        yScale: n,
        curve: Y,
        strokeDasharray: R.type ? y(R.type) : 0
      }
    ));
  }), /* @__PURE__ */ i.createElement(hr, { width: Number(a), height: Number(r), fill: "transparent", fillOpacity: 0.05, onMouseMove: (R) => o(R, m), onMouseLeave: f }))));
}, tk = ue.memo(ek), xc = {
  Linear: "curveLinear",
  Cardinal: "curveCardinal",
  Natural: "curveNatural",
  "Monotone X": "curveMonotoneX",
  Step: "curveStep"
}, nk = ({ xScale: e, yScale: t, yMax: n, xMax: r, handleTooltipMouseOver: a, handleTooltipMouseOff: o, isDebug: f }) => {
  var M;
  let { transformedData: s, config: c, seriesHighlight: d, colorScale: g, rawData: y } = ue.useContext(bt);
  const v = c.brush.active && ((M = c.brush.data) != null && M.length) ? c.brush.data : s;
  if (!v)
    return;
  const E = (T) => {
    if (c.xAxis.type === "categorical")
      return e(T);
    if (Sn(c.xAxis)) {
      let m = new Date(T);
      return e(m);
    }
  }, k = 2;
  return v && /* @__PURE__ */ i.createElement("svg", { height: Number(n) }, /* @__PURE__ */ i.createElement(_r, { component: "AreaChartStacked" }, /* @__PURE__ */ i.createElement(nt, { className: "area-chart", key: "area-wrapper", left: Number(c.yAxis.size) + k / 2, height: Number(n), style: { overflow: "hidden" } }, /* @__PURE__ */ i.createElement(
    iS,
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
  ), /* @__PURE__ */ i.createElement(hr, { width: Number(r), height: Number(n), fill: "transparent", onMouseMove: (T) => a(T, y), onMouseLeave: o }))));
}, rk = ue.memo(nk), Rs = () => {
  const { config: e, colorPalettes: t, tableData: n, updateConfig: r, parseDate: a, formatDate: o, setSeriesHighlight: f, seriesHighlight: s } = ue.useContext(bt), { orientation: c } = e, [d, g] = ue.useState(null), y = c === "horizontal", v = 1, E = e.lollipopSize === "large" ? 7 : e.lollipopSize === "medium" ? 6 : 5, k = e.lollipopSize === "large" ? 14 : e.lollipopSize === "medium" ? 12 : 10, M = e.yAxis.labelPlacement === "Below Bar", T = e.yAxis.displayNumbersOnBar, m = e.orientation === "horizontal" ? "yAxis" : "xAxis", D = e.barStyle === "rounded", L = e.visualizationSubType === "stacked", _ = e.tipRounding, N = e.roundingStyle === "standard" ? "8px" : e.roundingStyle === "shallow" ? "5px" : e.roundingStyle === "finger" ? "15px" : "0px", R = e.runtime.seriesKeys.length, j = { small: 16, medium: 18, large: 20 }, H = Object.keys(e.runtime.seriesLabels).length > 1, Q = e.visualizationType === "Bar" && e.legend.behavior === "isolate" && e.legend.axisAlign && (s != null && s.length) ? s : e.runtime.barSeriesKeys || e.runtime.seriesKeys;
  return ue.useEffect(() => {
    c === "horizontal" && !e.yAxis.labelPlacement && r({
      ...e,
      yAxis: {
        ...e,
        labelPlacement: "Below Bar"
      }
    });
  }, [e, r]), ue.useEffect(() => {
    e.isLollipopChart === !1 && e.barHeight < 25 && r({ ...e, barHeight: 25 });
  }, [e.isLollipopChart]), ue.useEffect(() => {
    e.visualizationSubType === "horizontal" && r({
      ...e,
      orientation: "horizontal"
    });
  }, []), ue.useEffect(() => {
    e.barStyle === "lollipop" && !e.isLollipopChart && r({ ...e, isLollipopChart: !0 }), (D || e.barStyle === "flat") && r({ ...e, isLollipopChart: !1 });
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
    barStackedSeriesKeys: Q,
    fontSize: j,
    hasMultipleSeries: H,
    applyRadius: (V) => {
      if (V == null || !D)
        return {};
      let Z = {};
      return (L && V + 1 === R || !L) && (Z = y ? { borderRadius: `0 ${N}  ${N}  0` } : { borderRadius: `${N} ${N} 0 0` }), !L && V === -1 && (Z = y ? { borderRadius: `${N} 0  0 ${N} ` } : { borderRadius: ` 0  0 ${N} ${N}` }), _ === "full" && L && V === 0 && R > 1 && (Z = y ? { borderRadius: `${N} 0 0 ${N}` } : { borderRadius: `0 0 ${N} ${N}` }), _ === "full" && (L && V === 0 && R === 1 || !L) && (Z = { borderRadius: N }), Z;
    },
    updateBars: (V) => {
      if (e.visualizationType !== "Bar" && !y)
        return V;
      const Z = [...V];
      let ne;
      const Ae = {
        stacked: e.barHeight,
        lollipop: E
      };
      L ? ne = Ae.stacked : ne = Ae[e.isLollipopChart ? "lollipop" : "stacked"] * R;
      const ve = M ? j[e.fontSize] * 1.2 : 0;
      let Re = Number(e.barSpace), le = Z.length * (ne + ve + Re);
      return y && (e.heights.horizontal = le), Z.map((_e, Be) => {
        let Te = 0;
        return _e.index !== 0 && (Te = (ne + Re + ve) * Be), { ..._e, y: Te, height: ne };
      });
    },
    assignColorsToValues: (V, Z, ne) => {
      if (!e.legend.colorCode && e.series.length > 1)
        return ne;
      const Ae = e.customColors ?? t[e.palette], ve = n.map((Be) => Be[e.legend.colorCode]);
      let Re = /* @__PURE__ */ new Map(), le = [];
      for (let Be = 0; Be < ve.length; Be++)
        Re.has(ve[Be]) || Re.set(ve[Be], Ae[Re.size % Ae.length]), le.push(Re.get(ve[Be]));
      for (; le.length < V; )
        le = le.concat(le);
      return le[Z];
    },
    getHighlightedBarColorByValue: (V) => {
      const Z = e == null ? void 0 : e.highlightedBarValues.find((ne) => {
        if (ne.value)
          return e.xAxis.type === "date" ? o(a(ne.value)) === V : ne.value === V;
      });
      return Z != null && Z.color ? Z.color : "rgba(255, 102, 1)";
    },
    getHighlightedBarByValue: (V) => {
      const Z = e == null ? void 0 : e.highlightedBarValues.filter((ne) => {
        if (ne.value)
          return e.xAxis.type === "date" ? o(a(ne.value)) === V : ne.value === V;
      })[0];
      return Z != null && Z.color ? Z : !1;
    },
    getAdditionalColumn: (V, Z) => {
      if (!Z)
        return "";
      const ne = e.columns, Ae = [];
      let ve = "";
      const Re = n.find((le) => le[e.xAxis.dataKey] === Z) || {};
      return Object.keys(ne).forEach((le) => {
        if (V && e.columns[le].series && e.columns[le].series !== V)
          return;
        const _e = {
          addColPrefix: e.columns[le].prefix,
          addColSuffix: e.columns[le].suffix,
          addColRoundTo: e.columns[le].roundToPlace ? e.columns[le].roundToPlace : "",
          addColCommas: e.columns[le].commas
        }, Be = xm(Re[e.columns[le].name], "left", !0, e, _e);
        e.columns[le].tooltips && Ae.push([e.columns[le].label, Be]);
      }), Ae.forEach((le) => {
        ve += `${le[0]} : ${le[1]} <br/>`;
      }), ve;
    },
    hoveredBar: d,
    setHoveredBar: g,
    onMouseOverBar: (V, Z) => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && Z && f([Z]), g(V);
    },
    onMouseLeaveBar: () => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && f([]);
    }
  };
}, Ls = ue.createContext(null), ph = ({ xScale: e, barWidth: t = 0, totalBarsInGroup: n = 1, yMax: r, handleTooltipMouseOff: a, handleTooltipMouseOver: o, handleTooltipClick: f, tooltipData: s, showTooltip: c, hideTooltip: d }) => {
  const { parseDate: g, config: y } = ue.useContext(bt), { runtime: v, regions: E, visualizationType: k, orientation: M, xAxis: T } = y, m = e.domain(), D = (N) => {
    let R;
    if (!(N != null && N.fromType) || N.fromType === "Fixed") {
      const j = new Date(N.from), H = g(ts(y.xAxis.dateParseFormat, j)).getTime();
      R = e(H), k === "Bar" && T.type === "date-time" && (R = R - t * n / 2);
    }
    if (N.fromType === "Previous Days") {
      const j = Number(N.from) || 0;
      m.map((re) => ts(y.xAxis.dateParseFormat, new Date(re)));
      const H = N.toType === "Last Date" ? new Date(m[m.length - 1]).getTime() : new Date(N.to), Y = y.xAxis.type === "categorical" ? ts(y.xAxis.dateParseFormat, H) : ts(y.xAxis.dateParseFormat, H), Q = new Date(Y);
      if (R = new Date(Q.setDate(Q.getDate() - Number(j))), T.type === "date") {
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
      let j = Number(y.yAxis.size);
      e.bandwidth && (j += e.bandwidth() / 2), R = R + j;
    }
    return k === "Bar" && y.xAxis.type === "date-time" && N.fromType === "Previous Days" && (R = R - t * n / 2), R;
  }, L = (N) => {
    let R;
    if (T.type === "categorical" && (R = e(N.to)), Sn(T) && ((!(N != null && N.toType) || N.toType === "Fixed") && (R = e(g(N.to).getTime())), (k === "Bar" || y.visualizationType === "Combo") && (R = N.toType !== "Last Date" ? e(g(N.to).getTime()) + t * n : R)), N.toType === "Last Date") {
      const j = m[m.length - 1];
      R = Number(e(j) + ((k === "Bar" || k === "Combo") && y.xAxis.type === "date" ? t * n : 0));
    }
    if (k === "Line" || k === "Area Chart") {
      let j = Number(y.yAxis.size);
      e.bandwidth && (j += e.bandwidth() / 2), R = R + j;
    }
    return k === "Bar" && y.xAxis.type === "date-time" && N.toType !== "Last Date" && (R = R - t * n / 2), (k === "Bar" || k === "Combo") && T.type === "categorical" && (R = R + (k === "Bar" || k === "Combo" ? t * n : 0)), R;
  }, _ = (N, R) => N - R;
  if (E && M === "vertical")
    return E.map((N) => {
      const R = D(N), j = L(N), H = _(j, R);
      if (!R || !j)
        return null;
      const Y = () => /* @__PURE__ */ i.createElement(
        "path",
        {
          stroke: "#333",
          d: `M${R} -5
                L${R} 5
                M${R} 0
                L${j} 0
                M${j} -5
                L${j} 5`
        }
      ), Q = () => /* @__PURE__ */ i.createElement("rect", { x: R, y: 0, width: H, height: r, fill: N.background, opacity: 0.3 });
      return /* @__PURE__ */ i.createElement(nt, { height: 100, fill: "red", className: "regions regions-group--line zzz", key: N.label, onMouseMove: o, onMouseLeave: a, handleTooltipClick: f, tooltipData: JSON.stringify(s), showTooltip: c }, /* @__PURE__ */ i.createElement(Y, null), /* @__PURE__ */ i.createElement(Q, null), /* @__PURE__ */ i.createElement(xt, { x: R + H / 2, y: 5, fill: N.color, verticalAnchor: "start", textAnchor: "middle" }, N.label));
    });
};
function Dc(e) {
  var Z, ne;
  const { config: t, index: n, id: r, className: a, background: o, borderColor: f, borderWidth: s, width: c, height: d, x: g, y, onMouseOver: v, onMouseLeave: E, onClick: k, tooltipHtml: M, tooltipId: T, styleOverrides: m, seriesHighlight: D } = e, L = Math.max(0, c), _ = Math.max(0, d), N = t.orientation === "horizontal", R = t.barStyle === "rounded", j = t.visualizationSubType === "stacked", H = t.tipRounding, Y = t.visualizationType === "Combo" && ((ne = (Z = t.runtime) == null ? void 0 : Z.barSeriesKeys) == null ? void 0 : ne.length), Q = t.runtime.seriesKeys.length, re = t.visualizationType === "Bar" && t.legend.axisAlign && (D != null && D.length) ? D == null ? void 0 : D.length : 0, K = Y || re || Q;
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
  return n == null || !R ? V = ie() : (V = ie(), (j && n + 1 === K || !j) && (V = N ? W() : me()), !j && n === -1 && (V = N ? ce() : se()), H === "full" && j && n === 0 && K > 1 && (V = N ? ce() : se()), H === "full" && (j && n === 0 && K === 1 || !j) && (V = he())), /* @__PURE__ */ i.createElement(
    "path",
    {
      id: r,
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
const ak = () => {
  var H;
  const [e, t] = ue.useState(0), { xScale: n, yScale: r, xMax: a, yMax: o } = ue.useContext(Ls), { transformedData: f, colorScale: s, seriesHighlight: c, config: d, formatNumber: g, formatDate: y, parseDate: v, setSharedFilter: E } = ue.useContext(bt), { isHorizontal: k, barBorderWidth: M, applyRadius: T, hoveredBar: m, getAdditionalColumn: D, onMouseLeaveBar: L, onMouseOverBar: _, barStackedSeriesKeys: N } = Rs(), { orientation: R } = d, j = d.brush.active && ((H = d.brush.data) != null && H.length) ? d.brush.data : f;
  return d.visualizationSubType === "stacked" && !k && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(cS, { data: j, keys: N, x: (Y) => Y[d.runtime.xAxis.dataKey], xScale: n, yScale: r, color: s }, (Y) => Y.reverse().map(
    (Q) => Q.bars.map((re) => {
      let K = d.legend.behavior === "highlight" && c.length > 0 && c.indexOf(re.key) === -1, q = d.legend.behavior === "highlight" || c.length === 0 || c.indexOf(re.key) !== -1, me = d.xAxis.type === "date-time" ? d.barThickness * (n.range()[1] - n.range()[0]) : a / Q.bars.length, W = me * (d.xAxis.type === "date-time" ? 1 : d.barThickness || 0.8);
      me * (1 - (d.barThickness || 0.8)) / 2;
      const se = re.bar.data[d.runtime.xAxis.dataKey], ce = d.runtime.xAxis.type === "date" ? y(v(se)) : se, he = g(re.bar ? re.bar.data[re.key] : 0, "left");
      if (!he)
        return;
      const ie = n(d.runtime.xAxis.type === "date" ? v(se) : se) - (d.xAxis.type === "date" && d.xAxis.sortDates ? W / 2 : 0);
      T(Q.index);
      const V = d.runtime.xAxis.label ? `${d.runtime.xAxis.label}: ${ce}` : ce, Z = D(m), ne = `${d.runtime.seriesLabels[re.key]}: ${he}`, Ae = `<ul>
                  <li class="tooltip-heading"">${V}</li>
                  <li class="tooltip-body ">${ne}</li>
                  <li class="tooltip-body ">${Z}</li>
                    </li></ul>`;
      return t(W), /* @__PURE__ */ i.createElement(nt, { key: `${Q.index}--${re.index}--${R}` }, /* @__PURE__ */ i.createElement(nt, { key: `bar-stack-${Q.index}-${re.index}`, id: `barStack${Q.index}-${re.index}`, className: "stack vertical" }, /* @__PURE__ */ i.createElement(xt, { display: d.labels && q ? "block" : "none", opacity: K ? 0.5 : 1, x: ie + e / 2, y: re.y - 5, fill: "#000", textAnchor: "middle" }, he), Dc({
        config: d,
        seriesHighlight: c,
        index: Q.index,
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
        onClick: (ve) => {
          ve.preventDefault(), E && (re[d.xAxis.dataKey] = ce, E(d.uid, re));
        },
        styleOverrides: {
          animationDelay: `${Q.index * 0.5}s`,
          transformOrigin: `${W / 2}px ${re.y + re.height}px`,
          opacity: K ? 0.2 : 1,
          display: q ? "block" : "none"
        }
      })));
    })
  )), /* @__PURE__ */ i.createElement(ph, { xScale: n, yMax: o, barWidth: e, totalBarsInGroup: 1 }));
}, ik = () => {
  const { yMax: e, yScale: t, xScale: n } = ue.useContext(Ls), {
    animatedChart: r,
    colorScale: a,
    config: o,
    formatDate: f,
    formatNumber: s,
    getTextWidth: c,
    parseDate: d,
    seriesHighlight: g,
    setSharedFilter: y,
    transformedData: v
  } = ue.useContext(bt), { barBorderWidth: E, displayNumbersOnBar: k, fontSize: M, getAdditionalColumn: T, hoveredBar: m, isHorizontal: D, isLabelBelowBar: L, onMouseLeaveBar: _, onMouseOverBar: N, updateBars: R, barStackedSeriesKeys: j } = Rs(), { orientation: H, visualizationSubType: Y } = o;
  return o.visualizationSubType === "stacked" && D && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(hS, { data: v, keys: j, height: e, y: (Q) => Q[o.runtime.yAxis.dataKey], xScale: n, yScale: t, color: a, offset: "none" }, (Q) => Q.map(
    (re) => R(re.bars).map((K, q) => {
      const me = o.legend.behavior === "highlight" && g.length > 0 && g.indexOf(K.key) === -1, W = o.legend.behavior === "highlight" || g.length === 0 || g.indexOf(K.key) !== -1;
      o.barHeight = Number(o.barHeight);
      const se = Go("#000", a(o.runtime.seriesLabels[K.key])), ce = s(v[K.index][K.key], "left"), he = o.runtime.yAxis.type === "date" ? f(d(v[K.index][o.runtime.originalXAxis.dataKey])) : v[K.index][o.runtime.originalXAxis.dataKey], ie = o.runtime.yAxis.label ? `${o.runtime.yAxis.label}: ${he}` : he, V = c(ce, `normal ${M[o.fontSize]}px sans-serif`), Z = T(m), ne = `${o.runtime.seriesLabels[K.key]}: ${ce}`, Ae = `<ul>
                  <li class="tooltip-heading"">${ie}</li>
                  <li class="tooltip-body ">${ne}</li>
                  <li class="tooltip-body ">${Z}</li>
                    </li></ul>`;
      return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(nt, { key: q, id: `barStack${re.index}-${K.index}`, className: "stack horizontal" }, Dc({
        config: o,
        seriesHighlight: g,
        index: re.index,
        className: `animated-chart group ${r ? "animated" : ""}`,
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
        onClick: (ve) => {
          ve.preventDefault(), y && (K[o.xAxis.dataKey] = ce, y(o.uid, K));
        },
        styleOverrides: {
          animationDelay: `${re.index * 0.5}s`,
          transformOrigin: `${K.x}px 0`,
          opacity: me ? 0.2 : 1,
          display: W ? "block" : "none"
        }
      }), H === "horizontal" && Y === "stacked" && L && re.index === 0 && !o.yAxis.hideLabel && /* @__PURE__ */ i.createElement(
        xt,
        {
          x: `${K.x + (o.isLollipopChart ? 15 : 5)}`,
          y: K.y + K.height * 1.2,
          fill: "#000000",
          textAnchor: "start",
          verticalAnchor: "start"
        },
        he
      ), k && V < K.width && /* @__PURE__ */ i.createElement(
        xt,
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
}, ok = () => {
  var V;
  const { xScale: e, yScale: t, xMax: n, yMax: r, seriesScale: a } = ue.useContext(Ls), [o, f] = ue.useState(0), [s, c] = ue.useState(0), {
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
    dashboardConfig: j,
    formatDate: H,
    formatNumber: Y,
    getXAxisData: Q,
    getYAxisData: re,
    isNumber: K,
    parseDate: q,
    seriesHighlight: me,
    setSharedFilter: W,
    transformedData: se
  } = ue.useContext(bt), { HighLightedBarUtils: ce } = Ac(R), he = R.brush.active && ((V = R.brush.data) != null && V.length) ? R.brush.data : se, ie = (Z, ne) => {
    var Re;
    let Ae = null;
    const ve = v(ne);
    return (Re = R.suppressedData) == null || Re.forEach((le) => {
      Z.key === le.column && String(Z.value) === String(le.value) && le.icon && (Ae = /* @__PURE__ */ i.createElement(dh, { color: "#000", size: ve }));
    }), Ae;
  };
  return R.visualizationSubType !== "stacked" && (R.visualizationType === "Bar" || R.visualizationType === "Combo") && R.orientation === "vertical" && /* @__PURE__ */ i.createElement(nt, null, /* @__PURE__ */ i.createElement(
    Pg,
    {
      data: he,
      keys: R.runtime.barSeriesKeys || R.runtime.seriesKeys,
      height: r,
      x0: (Z) => {
        const ne = Z[R.runtime.originalXAxis.dataKey];
        return Sn(R.runtime.xAxis) ? q(ne) : ne;
      },
      x0Scale: e,
      x1Scale: a,
      yScale: t,
      color: () => ""
    },
    (Z) => Z.map((ne, Ae) => /* @__PURE__ */ i.createElement(nt, { className: `bar-group-${ne.index}-${ne.x0}--${Ae} ${R.orientation}`, key: `bar-group-${ne.index}-${ne.x0}--${Ae}`, id: `bar-group-${ne.index}-${ne.x0}--${Ae}`, left: ne.x0 }, ne.bars.map((ve, Re) => {
      const le = R.useLogScale ? 0.1 : 0, _e = 20;
      let Be = R.highlightedBarValues.map((Ct) => Ct.value).filter((Ct) => Ct !== void 0);
      Be = R.xAxis.type === "date" ? ce.formatDates(Be) : Be;
      let Te = R.legend.behavior === "highlight" && me.length > 0 && me.indexOf(ve.key) === -1, ge = R.legend.behavior === "highlight" || me.length === 0 || me.indexOf(ve.key) !== -1, Le = Math.abs(t(ve.value) - t(le)), oe = ve.value >= 0 && K(ve.value) ? ve.y : t(0);
      const we = ve.value >= 0 && K(ve.value) ? t(le) - _e : t(0), Ce = R.suppressedData.some((Ct) => ve.key === Ct.column && String(ve.value) === String(Ct.value)) ? we : oe;
      let Ie = a.range()[1], Ue = R.isLollipopChart ? T : Ie / ne.bars.length, qe = ve.x + (R.isLollipopChart ? (Ie / ne.bars.length - T) / 2 : 0) - (R.xAxis.type === "date-time" ? Ie / 2 : 0);
      f(Ue), c(ne.bars.length);
      let at = Y(ve.value, "left"), Qe = R.runtime[_].type === "date" ? H(q(he[ne.index][R.runtime.originalXAxis.dataKey])) : he[ne.index][R.runtime.originalXAxis.dataKey];
      const rt = ve.value < 0 ? -1 : Re, Ke = E(ve.key, he[ne.index][R.runtime.originalXAxis.dataKey]);
      let ze = R.runtime.xAxis.label ? `${R.runtime.xAxis.label}: ${Qe}` : Qe;
      const Me = `${R.runtime.seriesLabels[ve.key]}: ${at}`, ct = `<ul>
                  <li class="tooltip-heading">${ze}</li>
                  <li class="tooltip-body ">${Me}</li>
                  ${Ke ? '<li class="tooltip-body ">' + Ke + "</li>" : ""}
                    </li></ul>`;
      let je = "#000000";
      je = ce.checkFontColor(at, Be, je);
      let Ge = R.runtime.seriesLabels && R.runtime.seriesLabels[ve.key] ? N(R.runtime.seriesLabels[ve.key]) : N(ve.key);
      Ge = g(Z.length, ne.index, Ge);
      const ot = R.isLollipopChart && R.lollipopColorStyle === "regular", dt = R.isLollipopChart && R.lollipopColorStyle === "two-tone", Tt = Be == null ? void 0 : Be.includes(Qe), tn = M(Qe), ln = k(Qe), Rt = Tt ? tn : R.barHasBorder === "true" ? "#000" : "transparent", zt = Tt ? ln.borderWidth : R.isLollipopChart ? 0 : R.barHasBorder === "true" ? y : 0, Dt = R.suppressedData.some((Ct) => ve.key === Ct.column && ve.value === Ct.value) ? "" : at;
      let Xt = R.suppressedData.some((Ct) => ve.key === Ct.column && String(ve.value) === String(Ct.value)) ? _e : Le;
      const cn = R.suppressedData.some((Ct) => ve.key === Ct.column && ve.value === Ct.value) ? "none" : "block", Ne = (Ct, qt) => {
        var St;
        let Ht = Ct, dn = qt || "#f2f2f2";
        if (j && ((St = j.dashboard.sharedFilters) == null ? void 0 : St.length) !== 0) {
          const { sharedFilters: gn } = j.dashboard;
          return Ht = gn ? gn.map((Lt) => Lt.setBy === R.uid ? Lt.resetLabel === Lt.active || Lt.active === se[ne.index][R.xAxis.dataKey] ? N(R.runtime.seriesLabels[ve.key]) : dn : N(R.runtime.seriesLabels[ve.key]))[0] : N(R.runtime.seriesLabels[ve.key]), ot && (Ht = Ct), dt && (Ht = bs(Ct).brighten(1)), Tt && (Ht = "transparent"), Ht;
        }
        return dt && (Ht = bs(Ct).brighten(1)), Tt && (Ht = "transparent"), Ht;
      };
      return /* @__PURE__ */ i.createElement(nt, { key: `${ne.index}--${Re}` }, /* @__PURE__ */ i.createElement(nt, { key: `bar-sub-group-${ne.index}-${ne.x0}-${Ce}--${Re}` }, Dc({
        config: R,
        index: rt,
        id: `barGroup${ne.index}`,
        background: Ne(N(R.runtime.seriesLabels[ve.key])),
        borderColor: Rt,
        borderStyle: "solid",
        borderWidth: `${zt}px`,
        width: Ue,
        height: Xt,
        x: qe,
        y: Ce,
        onMouseOver: () => L(Qe, ve.key),
        onMouseLeave: D,
        tooltipHtml: ct,
        tooltipId: `cdc-open-viz-tooltip-${R.runtime.uniqueId}`,
        onClick: (Ct) => {
          Ct.preventDefault(), W && (ve[R.xAxis.dataKey] = Qe, W(R.uid, ve));
        },
        styleOverrides: {
          transformOrigin: `0 ${Ce + Xt}px`,
          opacity: Te ? 0.2 : 1,
          display: ge ? "block" : "none",
          cursor: j ? "pointer" : "default"
        }
      }), /* @__PURE__ */ i.createElement(
        "g",
        {
          transform: `translate(${qe},${r - _e})`,
          onMouseOver: () => L(Qe, ve.key),
          onMouseLeave: D,
          opacity: Te ? 0.2 : 1,
          display: ge ? "block" : "none",
          "data-tooltip-html": ct,
          "data-tooltip-id": `cdc-open-viz-tooltip-${R.runtime.uniqueId}`,
          onClick: (Ct) => {
            Ct.preventDefault(), W && (ve[R.xAxis.dataKey] = Qe, W(R.uid, ve));
          }
        },
        ie(ve, Ue)
      ), /* @__PURE__ */ i.createElement(
        xt,
        {
          display: R.labels && ge ? "block" : "none",
          opacity: Te ? 0.5 : 1,
          x: qe + Ue / 2,
          y: Ce - 5,
          fill: je,
          textAnchor: "middle"
        },
        Dt
      ), R.isLollipopChart && R.lollipopShape === "circle" && /* @__PURE__ */ i.createElement(
        "circle",
        {
          display: cn,
          cx: qe + m / 3.5,
          cy: ve.y,
          r: m / 2,
          fill: Ge,
          key: `circle--${ve.index}`,
          "data-tooltip-html": ct,
          "data-tooltip-id": `cdc-open-viz-tooltip-${R.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), R.isLollipopChart && R.lollipopShape === "square" && /* @__PURE__ */ i.createElement(
        "rect",
        {
          display: cn,
          x: qe - T / 2,
          y: Ce,
          width: m,
          height: m,
          fill: Ge,
          key: `circle--${ve.index}`,
          "data-tooltip-html": ct,
          "data-tooltip-id": `cdc-open-viz-tooltip-${R.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ i.createElement("animate", { attributeName: "height", values: `0, ${m}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(R.confidenceKeys).length > 0 ? he.map((Z) => {
    let ne, Ae, ve, Re, le = 5;
    return ne = e(Q(Z)) + (R.xAxis.type !== "date" || R.xAxis.type !== "date-time" ? a.range()[1] / 2 : 0), ve = t(re(Z, R.confidenceKeys.lower)), Re = t(re(Z, R.confidenceKeys.upper)), /* @__PURE__ */ i.createElement(
      "path",
      {
        key: `confidence-interval-v-${Ae}-${Z[R.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${ne - le} ${ve}
                    L${ne + le} ${ve}
                    M${ne} ${ve}
                    L${ne} ${Re}
                    M${ne - le} ${Re}
                    L${ne + le} ${Re}`
      }
    );
  }) : "", /* @__PURE__ */ i.createElement(ph, { xScale: e, yMax: r, barWidth: o, totalBarsInGroup: s }));
}, lk = () => {
  const { xScale: e, yScale: t, yMax: n, seriesScale: r } = ue.useContext(Ls), { transformedData: a, colorScale: o, seriesHighlight: f, config: s, formatNumber: c, formatDate: d, parseDate: g, setSharedFilter: y, isNumber: v, getTextWidth: E, getYAxisData: k, getXAxisData: M } = ue.useContext(bt), {
    isHorizontal: T,
    barBorderWidth: m,
    updateBars: D,
    assignColorsToValues: L,
    section: _,
    fontSize: N,
    isLabelBelowBar: R,
    displayNumbersOnBar: j,
    lollipopBarWidth: H,
    lollipopShapeSize: Y,
    getHighlightedBarColorByValue: Q,
    getHighlightedBarByValue: re,
    generateIconSize: K,
    getAdditionalColumn: q,
    hoveredBar: me,
    onMouseLeaveBar: W,
    onMouseOverBar: se
  } = Rs(), { HighLightedBarUtils: ce } = Ac(s), he = (ie, V) => {
    var Ae;
    let Z = null;
    const ne = K(V);
    return (Ae = s.suppressedData) == null || Ae.forEach((ve) => {
      ie.key === ve.column && String(ie.value) === String(ve.value) && ve.icon && (Z = /* @__PURE__ */ i.createElement(dh, { color: "#000", size: ne }));
    }), Z;
  };
  return s.visualizationSubType !== "stacked" && s.visualizationType === "Bar" && s.orientation === "horizontal" && /* @__PURE__ */ i.createElement(nt, null, /* @__PURE__ */ i.createElement(
    Pg,
    {
      data: a,
      keys: s.runtime.barSeriesKeys || s.runtime.seriesKeys,
      height: n,
      x0: (ie) => ie[s.runtime.originalXAxis.dataKey],
      x0Scale: t,
      x1Scale: r,
      yScale: e,
      color: () => ""
    },
    (ie) => D(ie).map((V, Z) => /* @__PURE__ */ i.createElement(nt, { className: `bar-group-${V.index}-${V.x0}--${Z} ${s.orientation}`, key: `bar-group-${V.index}-${V.x0}--${Z}`, id: `bar-group-${V.index}-${V.x0}--${Z}`, top: V.y }, V.bars.map((ne, Ae) => {
      const ve = s.useLogScale ? 0.1 : 0;
      let Re = s.highlightedBarValues.map((Lt) => Lt.value).filter((Lt) => Lt !== void 0);
      Re = s.xAxis.type === "date" ? ce.formatDates(Re) : Re;
      let le = s.legend.behavior === "highlight" && f.length > 0 && f.indexOf(ne.key) === -1, _e = s.legend.behavior === "highlight" || f.length === 0 || f.indexOf(ne.key) !== -1, Be = s.barHeight, Te = parseInt(s.isLollipopChart ? H : Be);
      isNaN(Te) && (Te = 25);
      let ge = ne.value >= 0 && v(ne.value) ? ne.y : t(ve);
      const Le = ne.value < 0 ? Math.abs(e(ne.value)) : e(ve), oe = Math.abs(e(ne.value) - e(ve)), we = 25, Ce = ne.value >= 0 && v(ne.value);
      let Ie = ne.value && s.suppressedData.some(({ column: Lt, value: Vt }) => ne.key === Lt && ne.value === Vt) ? we : oe;
      const Ue = Ce ? e(0) : e(ve) - we, qe = s.suppressedData.some((Lt) => ne.key === Lt.column && String(ne.value) === String(Lt.value)) ? Ue : Le, at = c(ne.value, "left"), Qe = s.runtime[_].type === "date" ? d(g(a[V.index][s.runtime.originalXAxis.dataKey])) : a[V.index][s.runtime.originalXAxis.dataKey], rt = Ce ? "above" : "below", Ke = s.suppressedData.some((Lt) => ne.key === Lt.column && ne.value === Lt.value) ? "" : at;
      let Me = E(Qe, `normal ${N[s.fontSize]}px sans-serif`) < oe - 5, ct = Me ? "end" : "start", je = "start", Ge = Me ? -5 : 5, ot = 10;
      rt === "below" && (ct = Me ? "start" : "end", Ge = Me ? 5 : -5, s.isLollipopChart && (je = "end", ot = -10));
      const dt = ne.value < 0 ? -1 : Ae;
      let Tt = s.runtime.yAxis.label ? `${s.runtime.yAxis.label}: ${Qe}` : Qe;
      const tn = q(me), ln = `${s.runtime.seriesLabels[ne.key]}: ${at}`, Rt = `<ul>
                  <li class="tooltip-heading"">${Tt}</li>
                  <li class="tooltip-body ">${ln}</li>
                  <li class="tooltip-body ">${tn}</li>
                    </li></ul>`;
      let zt = "#000000";
      zt = ce.checkFontColor(at, Re, zt);
      let Dt = s.runtime.seriesLabels && s.runtime.seriesLabels[ne.key] ? o(s.runtime.seriesLabels[ne.key]) : o(ne.key);
      Dt = L(ie.length, V.index, Dt);
      const Xt = s.isLollipopChart && s.lollipopColorStyle === "regular", cn = s.isLollipopChart && s.lollipopColorStyle === "two-tone", Ne = Re == null ? void 0 : Re.includes(Qe), Ct = Q(Qe), qt = re(Qe), Ht = Ne ? Ct : s.barHasBorder === "true" ? "#000" : "transparent", dn = Ne ? qt.borderWidth : s.isLollipopChart ? 0 : s.barHasBorder === "true" ? m : 0, St = s.suppressedData.some((Lt) => ne.key === Lt.column && ne.value === Lt.value) ? "none" : "block";
      Dt && zt && Me && (zt = Go("#000", Dt));
      const gn = () => Xt ? Dt : cn ? bs(Dt).brighten(1) : Ne ? "transparent" : Dt;
      return /* @__PURE__ */ i.createElement(nt, { key: `${V.index}--${Ae}` }, /* @__PURE__ */ i.createElement(nt, { key: `bar-sub-group-${V.index}-${V.x0}-${ge}--${Ae}` }, Dc({
        config: s,
        index: dt,
        id: `barGroup${V.index}`,
        background: gn(),
        borderColor: Ht,
        borderStyle: "solid",
        borderWidth: `${dn}px`,
        width: Ie,
        height: Te,
        x: qe,
        y: Be * ne.index,
        onMouseOver: () => se(Qe, ne.key),
        onMouseLeave: W,
        tooltipHtml: Rt,
        tooltipId: `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
        onClick: (Lt) => {
          Lt.preventDefault(), y && (ne[s.xAxis.dataKey] = at, y(s.uid, ne));
        },
        styleOverrides: {
          transformOrigin: `0 ${ge + Be}px`,
          opacity: le ? 0.2 : 1,
          display: _e ? "block" : "none"
        }
      }), /* @__PURE__ */ i.createElement(
        "g",
        {
          transform: `translate(${qe},${Be * ne.index})`,
          onMouseOver: () => se(Qe, ne.key),
          onMouseLeave: W,
          opacity: le ? 0.2 : 1,
          display: _e ? "block" : "none",
          "data-tooltip-html": Rt,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          onClick: (Lt) => {
            Lt.preventDefault(), y && (ne[s.xAxis.dataKey] = at, y(s.uid, ne));
          }
        },
        he(ne, Ie)
      ), !s.isLollipopChart && j && /* @__PURE__ */ i.createElement(
        xt,
        {
          display: _e ? "block" : "none",
          x: ne.y,
          y: s.barHeight / 2 + s.barHeight * ne.index,
          fill: zt,
          dx: Ge,
          verticalAnchor: "middle",
          textAnchor: ct
        },
        Ke
      ), s.isLollipopChart && j && /* @__PURE__ */ i.createElement(
        xt,
        {
          display: _e ? "block" : "none",
          x: ne.y,
          y: 0,
          fill: "#000000",
          dx: ot,
          textAnchor: je,
          verticalAnchor: "middle",
          fontWeight: "normal"
        },
        Ke
      ), R && !s.yAxis.hideLabel && /* @__PURE__ */ i.createElement(xt, { x: s.yAxis.hideAxis ? 0 : 5, y: V.height, dy: 4, verticalAnchor: "start", textAnchor: "start" }, s.runtime.yAxis.type === "date" ? d(g(a[V.index][s.runtime.originalXAxis.dataKey])) : T ? a[V.index][s.runtime.originalXAxis.dataKey] : c(a[V.index][s.runtime.originalXAxis.dataKey])), s.isLollipopChart && s.lollipopShape === "circle" && /* @__PURE__ */ i.createElement(
        "circle",
        {
          display: St,
          cx: ne.y,
          cy: Be * ne.index + H / 2,
          r: Y / 2,
          fill: Dt,
          key: `circle--${ne.index}`,
          "data-tooltip-html": Rt,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), s.isLollipopChart && s.lollipopShape === "square" && /* @__PURE__ */ i.createElement(
        "rect",
        {
          display: St,
          x: ne.y > 10 ? ne.y - Y / 2 : 0,
          y: 0 - H / 2,
          width: Y,
          height: Y,
          fill: Dt,
          key: `circle--${ne.index}`,
          "data-tooltip-html": Rt,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ i.createElement("animate", { attributeName: "height", values: `0, ${Y}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(s.confidenceKeys).length > 0 ? a.map((ie) => {
    let V, Z, ne, Ae = 5;
    return V = t(M(ie)) - 0.75 * s.barHeight, Z = e(k(ie, s.confidenceKeys.upper)), ne = e(k(ie, s.confidenceKeys.lower)), /* @__PURE__ */ i.createElement(
      "path",
      {
        key: `confidence-interval-h-${V}-${ie[s.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${ne} ${V - Ae}
                    L${ne} ${V + Ae}
                    M${ne} ${V}
                    L${Z} ${V}
                    M${Z} ${V - Ae}
                    L${Z} ${V + Ae} `
      }
    );
  }) : "");
}, Nu = {
  Vertical: ok,
  Horizontal: lk,
  StackedVertical: ak,
  StackedHorizontal: ik
}, sk = ({ xScale: e, yScale: t, seriesScale: n, xMax: r, yMax: a, handleTooltipMouseOver: o, handleTooltipMouseOff: f, handleTooltipClick: s }) => {
  const { transformedData: c, config: d } = ue.useContext(bt), g = {
    xScale: e,
    yScale: t,
    xMax: r,
    yMax: a,
    seriesScale: n
  };
  return /* @__PURE__ */ i.createElement(_r, { component: "BarChart" }, /* @__PURE__ */ i.createElement(Ls.Provider, { value: g }, /* @__PURE__ */ i.createElement(nt, { left: parseFloat(d.runtime.yAxis.size) }, /* @__PURE__ */ i.createElement(Nu.StackedVertical, null), /* @__PURE__ */ i.createElement(Nu.StackedHorizontal, null), /* @__PURE__ */ i.createElement(Nu.Vertical, null), /* @__PURE__ */ i.createElement(Nu.Horizontal, null), /* @__PURE__ */ i.createElement(hr, { key: "bars", display: d.tooltips.singleSeries ? "none" : "block", width: Number(r), height: Number(a), fill: "transparent", fillOpacity: 0.05, onMouseMove: (y) => o(y, c), onMouseOut: f, onClick: (y) => s(y, c) }))));
};
function $a() {
  return $a = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, $a.apply(this, arguments);
}
function Di(e) {
  var t = e.x1, n = e.x2, r = e.y1, a = e.y2;
  return {
    x1: r,
    x2: a,
    y1: t,
    y2: n
  };
}
function iy(e) {
  var t = e.left, n = t === void 0 ? 0 : t, r = e.top, a = r === void 0 ? 0 : r, o = e.className, f = e.max, s = e.min, c = e.firstQuartile, d = e.thirdQuartile, g = e.median, y = e.boxWidth, v = y === void 0 ? 10 : y, E = e.fill, k = e.fillOpacity, M = e.stroke, T = e.strokeWidth, m = e.rx, D = m === void 0 ? 2 : m, L = e.ry, _ = L === void 0 ? 2 : L, N = e.valueScale, R = e.outliers, j = R === void 0 ? [] : R, H = e.horizontal, Y = e.medianProps, Q = Y === void 0 ? {} : Y, re = e.maxProps, K = re === void 0 ? {} : re, q = e.minProps, me = q === void 0 ? {} : q, W = e.boxProps, se = W === void 0 ? {} : W, ce = e.outlierProps, he = ce === void 0 ? {} : ce, ie = e.container, V = ie === void 0 ? !1 : ie, Z = e.containerProps, ne = Z === void 0 ? {} : Z, Ae = e.children, ve = H ? a : n, Re = ve + (v || 0) / 2, le = N.range(), _e = N(s ?? 0), Be = N(c ?? 0), Te = N(g ?? 0), ge = N(d ?? 0), Le = N(f ?? 0), oe = {
    valueRange: le,
    center: Re,
    offset: ve,
    boxWidth: v,
    max: {
      x1: Re - (v || 0) / 4,
      x2: Re + (v || 0) / 4,
      y1: Le,
      y2: Le
    },
    maxToThird: {
      x1: Re,
      x2: Re,
      y1: Le,
      y2: ge
    },
    median: {
      x1: ve,
      x2: ve + (v || 0),
      y1: Te,
      y2: Te
    },
    minToFirst: {
      x1: Re,
      x2: Re,
      y1: Be,
      y2: _e
    },
    min: {
      x1: Re - (v || 0) / 4,
      x2: Re + (v || 0) / 4,
      y1: _e,
      y2: _e
    },
    box: {
      x1: ve,
      x2: v || 0,
      y1: ge,
      y2: Math.abs(ge - Be)
    },
    container: {
      x1: ve,
      x2: v || 0,
      y1: Math.min.apply(Math, le),
      y2: Math.abs(le[0] - le[1])
    }
  };
  return H && (oe.max = Di(oe.max), oe.maxToThird = Di(oe.maxToThird), oe.box.y1 = Be, oe.box = Di(oe.box), oe.median = Di(oe.median), oe.minToFirst = Di(oe.minToFirst), oe.min = Di(oe.min), oe.container = Di(oe.container), oe.container.y1 = Math.min.apply(Math, le)), Ae ? /* @__PURE__ */ i.createElement(i.Fragment, null, Ae(oe)) : /* @__PURE__ */ i.createElement(nt, {
    className: wn("visx-boxplot", o)
  }, j.map(function(we, Ce) {
    var Ie = H ? N(we) : Re, Ue = H ? Re : N(we);
    return /* @__PURE__ */ i.createElement("circle", $a({
      key: "visx-boxplot-outlier-" + Ce,
      className: "visx-boxplot-outlier",
      cx: Ie,
      cy: Ue,
      r: 4,
      stroke: M,
      strokeWidth: T,
      fill: E,
      fillOpacity: k
    }, he));
  }), /* @__PURE__ */ i.createElement("line", $a({
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
  }), /* @__PURE__ */ i.createElement("rect", $a({
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
  }, se)), /* @__PURE__ */ i.createElement("line", $a({
    className: "visx-boxplot-median",
    x1: oe.median.x1,
    y1: oe.median.y1,
    x2: oe.median.x2,
    y2: oe.median.y2,
    stroke: M,
    strokeWidth: T
  }, Q)), /* @__PURE__ */ i.createElement("line", {
    className: "visx-boxplot-min-to-first",
    x1: oe.minToFirst.x1,
    y1: oe.minToFirst.y1,
    x2: oe.minToFirst.x2,
    y2: oe.minToFirst.y2,
    stroke: M,
    strokeWidth: T
  }), /* @__PURE__ */ i.createElement("line", $a({
    className: "visx-boxplot-min",
    x1: oe.min.x1,
    y1: oe.min.y1,
    x2: oe.min.x2,
    y2: oe.min.y2,
    stroke: M,
    strokeWidth: T
  }, me)), V && /* @__PURE__ */ i.createElement("rect", $a({
    x: oe.container.x1,
    y: oe.container.y1,
    width: oe.container.x2,
    height: oe.container.y2,
    fillOpacity: "0"
  }, ne)));
}
iy.propTypes = {
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
const uk = ({ xScale: e, yScale: t }) => {
  const { config: n, setConfig: r } = ue.useContext(bt), { boxplot: a } = n;
  ue.useEffect(() => {
    n.legend.hide === !1 && r({
      ...n,
      legend: {
        ...n.legend,
        hide: !0
      }
    });
  }, []);
  const o = `cdc-open-viz-tooltip-${n.runtime.uniqueId}`, f = (T) => `
      <strong>${T.columnCategory}</strong></br>
      ${a.labels.q1}: ${T.columnFirstQuartile}<br/>
      ${a.labels.q3}: ${T.columnThirdQuartile}<br/>
      ${a.labels.iqr}: ${T.columnIqr}<br/>
      ${a.labels.median}: ${T.columnMedian}
    `, s = (T) => Number(T.columnMax), c = (T) => Number(T.columnMin), d = (T) => Number(T.columnMedian), g = (T) => Number(T.columnThirdQuartile), y = (T) => Number(T.columnFirstQuartile), v = 0.5, E = e.bandwidth(), k = Math.min(40, E), M = or[n == null ? void 0 : n.palette][0] ? or[n == null ? void 0 : n.palette][0] : "#000";
  return /* @__PURE__ */ i.createElement(_r, { component: "BoxPlot" }, /* @__PURE__ */ i.createElement(nt, { className: "boxplot", key: "boxplot-group" }, a.plots.map((T, m) => {
    const D = E - k, L = 4;
    return /* @__PURE__ */ i.createElement(nt, { key: `boxplotplot-${m}` }, a.plotNonOutlierValues && T.nonOutlierValues.map((_, N) => /* @__PURE__ */ i.createElement("circle", { cx: e(T.columnCategory) + Number(n.yAxis.size) + E / 2, cy: t(_), r: L, fill: "#ccc", style: { opacity: 1, fillOpacity: 1, stroke: "black" }, key: `boxplot-${m}--circle-${N}` })), /* @__PURE__ */ i.createElement(
      iy,
      {
        "data-left": e(T.columnCategory) + n.yAxis.size + D / 2 + 0.5,
        key: `box-plot-${m}`,
        min: c(T),
        max: s(T),
        left: Number(e(T.columnCategory)) + Number(n.yAxis.size) + D / 2 + 0.5,
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
}, ck = ({ xScale: e, yScale: t, getXAxisData: n, getYAxisData: r }) => {
  const { colorScale: a, transformedData: o, config: f, formatNumber: s, seriesHighlight: c, colorPalettes: d } = ue.useContext(bt);
  let g = 4.5;
  const y = Object.keys(f.runtime.seriesLabels).length > 1, v = (E, k) => `<div>
    ${f.legend.showLegendValuesTooltip && f.runtime.seriesLabels && y ? `${f.runtime.seriesLabels[k] || ""}<br/>` : ""}
    ${f.xAxis.label}: ${s(E[f.xAxis.dataKey], "bottom")} <br/>
    ${f.yAxis.label}: ${s(E[k], "left")}
</div>`;
  return /* @__PURE__ */ i.createElement(nt, { className: "scatter-plot", left: f.yAxis.size }, o.map((E, k) => f.runtime.seriesKeys.map((M, T) => {
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
function dk({ height: e, xScale: t }) {
  const { transformedData: n, config: r, formatNumber: a, twoColorPalette: o, getTextWidth: f, updateConfig: s, parseDate: c, formatDate: d, currentViewport: g } = ue.useContext(bt), { barStyle: y, tipRounding: v, roundingStyle: E, twoColor: k } = r, M = ue.useRef([]), [T, m] = ue.useState(window.innerWidth), D = E === "standard" ? "8px" : E === "shallow" ? "5px" : E === "finger" ? "15px" : "0px", L = { small: 16, medium: 18, large: 20 };
  r.barStyle;
  const _ = Number(r.xAxis.target), N = r.series[0].dataKey, R = Number(t.domain()[1]), H = n.some((ie) => ie[N] < 0) || _ > 0 || t.domain()[0] < 0, Y = r.barHasBorder === "true" ? 1 : 0, Q = r.lollipopSize === "large" ? 7 : r.lollipopSize === "medium" ? 6 : 5, re = r.lollipopSize === "large" ? 14 : r.lollipopSize === "medium" ? 12 : 10, K = Math.max(t(0), Math.min(t(_), t(R))), q = (ie) => {
    if (ie == null || y !== "rounded")
      return;
    let V = {};
    return ie === "left" && (V = { borderRadius: `${D} 0 0 ${D}` }), ie === "right" && (V = { borderRadius: `0 ${D} ${D} 0` }), v === "full" && (V = { borderRadius: D }), V;
  }, me = {
    calculate: function() {
      const V = n[0][N] < _ ? "left" : "right", Z = `${r.xAxis.targetLabel} ${a(r.xAxis.target || 0, "left")}`, ne = f(Z, `bold ${L[r.fontSize]}px sans-serif`);
      let Ae = r.isLollipopChart ? Q / 2 : Number(r.barHeight) / 2, ve = 0, Re = 0, le = !1;
      V === "right" && (ve = -10, le = ne - ve < K, Re = K - ne), V === "left" && (ve = 10, le = t(R) - K > ne + ve, Re = K), this.text = Z, this.y = Ae, this.x = Re, this.padding = ve, this.showLabel = r.xAxis.showTargetLabel ? le : !1;
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
  }, [se == null ? void 0 : se.isIntersecting, r.animate]), ue.useEffect(() => {
    M.current.forEach((ie, V) => {
      if (r.animate) {
        const Z = _ / R * 100;
        ie.style.opacity = "0", ie.style.transform = `translate(${Z / 1.07}%) scale(0, 1)`, setTimeout(() => {
          ie.style.opacity = "1", ie.style.transform = "translate(0) scale(1)", ie.style.transition = "transform 0.5s ease";
        }, 100);
      } else
        ie.style.transition = "none", ie.style.opacity = "0";
      r.animate || (ie.style.transition = "none", ie.style.opacity = "1");
    });
  }, [r.animate, r, ce]), /* @__PURE__ */ i.createElement(_r, { component: "Deviation Bar" }, /* @__PURE__ */ i.createElement(nt, { left: Number(r.xAxis.size) }, n.map((ie, V) => {
    const Z = Number(ie[N]), ne = r.isLollipopChart ? Q : Number(r.barHeight), Ae = Number(r.barSpace), ve = Math.abs(t(Z) - K), Re = t(Z), le = Z > _ ? K : Re, _e = Z < _ ? "left" : "right";
    let Be = 0;
    Be = V !== 0 ? (Ae + ne + Y) * V : Be;
    const Te = (Ae + ne + Y) * n.length;
    r.heights.horizontal = Te;
    const Le = f(a(Z, "left"), `normal ${L[r.fontSize]}px sans-serif`) < ve - 6, oe = Re, we = Be + ne / 2, Ce = Re, Ie = Be + ne / 2, Ue = Re, qe = Be - ne / 2, at = q(_e), [Qe, rt] = o[k.palette], Ke = { left: Qe, right: rt }, ze = Go("#000", Ke[_e]);
    let Me = fk(r.isLollipopChart, Le, re, ze);
    const ct = a(Z, "left"), je = r.runtime.yAxis.type === "date" ? d(c(n[V][r.runtime.originalXAxis.dataKey])) : n[V][r.runtime.originalXAxis.dataKey];
    let Ge = r.runtime.yAxis.label ? `${r.runtime.yAxis.label}: ${je}` : je, ot = r.runtime.xAxis.label ? `${r.runtime.xAxis.label}: ${ct}` : ct;
    const dt = `<div>
          ${Ge}<br />
          ${ot}
            </div>`;
    return /* @__PURE__ */ i.createElement(nt, { key: `deviation-bar-${r.orientation}-${N}-${V}` }, /* @__PURE__ */ i.createElement(
      "foreignObject",
      {
        ref: (Tt) => {
          M.current[V] = Tt;
        },
        x: le,
        y: Be,
        width: ve,
        height: ne,
        "data-tooltip-html": dt,
        "data-tooltip-id": `cdc-open-viz-tooltip-${r.runtime.uniqueId}`,
        tabIndex: -1
      },
      /* @__PURE__ */ i.createElement("div", { style: { width: ve, height: ne, border: `${Y}px solid #333`, backgroundColor: Ke[_e], ...at } })
    ), r.yAxis.displayNumbersOnBar && /* @__PURE__ */ i.createElement(xt, { verticalAnchor: "middle", x: oe, y: we, ...Me[_e] }, a(ie[N], "left")), r.isLollipopChart && r.lollipopShape === "circle" && /* @__PURE__ */ i.createElement("circle", { cx: Ce, cy: Ie, r: re / 2, fill: Ke[_e], style: { filter: "unset", opacity: 1 } }), r.isLollipopChart && r.lollipopShape === "square" && /* @__PURE__ */ i.createElement("rect", { x: Ue, y: qe, width: re, height: re, fill: Ke[_e], style: { opacity: 1, filter: "unset" } }));
  }), me.showLabel && /* @__PURE__ */ i.createElement(xt, { fontWeight: "bold", dx: me.padding, verticalAnchor: "middle", x: me.x, y: me.y }, me.text), H && /* @__PURE__ */ i.createElement(en, { from: { x: K, y: 0 }, to: { x: K, y: e }, stroke: "#333", strokeWidth: 2 })), /* @__PURE__ */ i.createElement("foreignObject", { y: e / 2, ref: W }));
}
function fk(e, t, n, r) {
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
      fill: t ? r : "#000000"
    },
    left: {
      textAnchor: t ? "start" : "end",
      dx: t ? 6 : -6,
      fill: t ? r : "#000000"
    }
  };
}
const hk = ({ xScale: e, yScale: t, height: n, width: r, handleTooltipMouseOver: a, handleTooltipMouseOff: o }) => {
  var k;
  const { transformedData: f, rawData: s, config: c, seriesHighlight: d } = ue.useContext(bt), { xAxis: g, yAxis: y, legend: v, runtime: E } = c;
  return f && /* @__PURE__ */ i.createElement(_r, { component: "ForecastingChart" }, /* @__PURE__ */ i.createElement(nt, { className: "forecasting-items", key: "forecasting-items-wrapper", left: Number(y.size) }, (k = E.forecastingSeriesKeys) == null ? void 0 : k.map((M, T) => !M || !M.stages ? !1 : M.stages.map((m, D) => {
    var j;
    const { behavior: L } = v, _ = s.filter((H) => H[M.stageColumn] === m.key);
    let N = L === "highlight" && d.length > 0 && d.indexOf(m.key) === -1, R = L === "highlight" || d.length === 0 || d.indexOf(m.key) !== -1;
    return /* @__PURE__ */ i.createElement(nt, { className: `forecasting-areas-combo-${T}`, key: `forecasting-areas--stage-${m.key.replaceAll(" ", "-")}-${T}` }, (j = M.confidenceIntervals) == null ? void 0 : j.map((H, Y) => {
      const Q = Uu[m.color] || or[m.color] || !1, re = () => R && Q[2] ? Q[2] : "transparent", K = () => R && Q[1] ? Q[1] : "transparent";
      if (!(H.high === "" || H.low === ""))
        return /* @__PURE__ */ i.createElement(nt, { key: `forecasting-areas--stage-${m.key.replaceAll(" ", "-")}--group-${D}-${Y}` }, /* @__PURE__ */ i.createElement(
          G0,
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
  })), /* @__PURE__ */ i.createElement(nt, { key: "tooltip-hover-section" }, /* @__PURE__ */ i.createElement(hr, { key: "bars", width: Number(r), height: Number(n), fill: "transparent", fillOpacity: 0.05, onMouseMove: (M) => a(M, f), onMouseOut: o }))));
};
function Wu(e = "") {
  return typeof e == "number" ? !Number.isNaN(e) : typeof e == "string" ? e !== null && e !== "" && /\d+\.?\d*/.test(e) : !1;
}
function Oc(e, t) {
  const n = e.series.every(({ type: v }) => v === "Bar"), r = e.series.every(({ type: v }) => ["Line", "dashed-sm", "dashed-md", "dashed-lg"].includes(v)), a = (v) => (E) => v.reduce((k, M) => isNaN(Number(E[M])) ? k : k + Number(E[M]), 0), o = () => {
    let v = Math.max(...t.map((E) => Math.max(...e.runtime.seriesKeys.map((k) => Wu(E[k]) ? Number(c(E[k])) : 0))));
    if ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && n) && e.visualizationSubType === "stacked") {
      const E = t.map(a(e.runtime.seriesKeys)).filter((k) => !isNaN(k));
      v = Math.max(...E);
    }
    if (e.visualizationSubType === "stacked" && e.visualizationType === "Area Chart") {
      const E = t.map(a(e.runtime.seriesKeys));
      v = Math.max(...E);
    }
    if ((e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.series && e.series.dataKey && (v = Math.max(...t.map((E) => Wu(E[e.series.dataKey]) ? Number(c(E[e.series.dataKey])) : 0))), e.visualizationType === "Combo" && e.visualizationSubType === "stacked" && !n && e.runtime.barSeriesKeys && e.runtime.lineSeriesKeys) {
      const E = t.map(a(e.runtime.barSeriesKeys)), k = Math.max(...t.map((T) => Math.max(...e.runtime.lineSeriesKeys.map((m) => Number(c(T[m])))))), M = Math.max(...E);
      v = Math.max(M, k);
    }
    return v;
  }, f = () => {
    const v = Math.min(...t.map((E) => Math.min(...e.runtime.seriesKeys.map((k) => Wu(E[k]) ? Number(c(E[k])) : 1 / 0))));
    return String(v);
  }, s = () => e.runtime.seriesKeys ? e.runtime.seriesKeys.some((v) => t.some((E) => E[v] >= 0)) : !1, c = (v) => v === null || v === "" ? "" : typeof v == "string" ? v.replace(/[,$]/g, "") : v, d = Number(o()), g = Number(f()), y = s();
  return { minValue: g, maxValue: d, existPositiveValue: y, isAllLine: r };
}
function mh({ config: e, yMax: t = 0, data: n = [], updateConfig: r }) {
  var v, E, k, M;
  const a = e.visualizationType === "Combo" && e.orientation === "vertical", o = e.series && e.series.filter((T) => T.axis === "Right").map((T) => T.dataKey);
  let { minValue: f } = Oc(e, n);
  const s = (T) => {
    if (!T)
      return [0];
    let m = [];
    return T.map((D, L) => m = [...m, ...n.map((_) => Number(_[D]))]), m;
  };
  let c = Math.max.apply(null, s(o));
  e.yAxis.rightMax > c && (c = e.yAxis.rightMax), e.yAxis.rightMin < f && (f = e.yAxis.rightMin);
  const d = ((E = (v = e.runtime) == null ? void 0 : v.barSeriesKeys) == null ? void 0 : E.length) > 0, g = ((M = (k = e.runtime) == null ? void 0 : k.lineSeriesKeys) == null ? void 0 : M.length) > 0;
  return (d || g) && f > 0 && (f = 0), { yScaleRight: Hn({
    domain: [f, c],
    range: [t, 0]
  }), hasRightAxis: a };
}
const pk = (e) => {
  const { preliminaryData: t, data: n, stroke: r, strokeWidth: a, handleLineType: o, lineType: f, seriesKey: s } = e, c = t.filter((v) => v.seriesKey && v.column && v.value && v.type && v.style), d = (v) => c.find((E) => E.seriesKey === s && v[E.column] === E.value && E.type === "effect" && E.style !== "Open Circles");
  let g = [];
  const y = (v) => ({
    stroke: r,
    strokeWidth: a,
    strokeDasharray: v
  });
  return n.forEach((v, E) => {
    let k = d(v), M = y(o(k ? k.style : f));
    g.push(M), k && E > 0 && (g[E - 1] = y(o(k.style)));
  }), g;
}, mk = (e, t, n) => {
  const r = e.filter((o) => o.style === "Open Circles" && o.type === "effect").map((o) => ({ column: o.column, value: o.value, seriesKey: o.seriesKey }));
  let a = [];
  return t.forEach((o) => {
    r.some((f) => o[f.column] === f.value && f.seriesKey === n) && a.push(o);
  }), a;
}, Xd = (e) => {
  var L, _, N, R, j, H;
  const { config: t, d: n, displayArea: r, seriesKey: a, tooltipData: o, xScale: f, yScale: s, colorScale: c, parseDate: d, yScaleRight: g, data: y, circleData: v, dataIndex: E, mode: k } = e, { lineDatapointStyle: M } = t, T = (L = t == null ? void 0 : t.series.filter((Y) => Y.dataKey === a)) == null ? void 0 : L[0], m = (Y, Q, re, K, q) => {
    const me = re.runtime.seriesLabels || [];
    let W;
    return Y ? W = Q(me[K] || q) : W = "transparent", re.lineDatapointColor === "Lighter than Line" && W !== "transparent" && W && (W = bs(W).brighten(1)), W;
  }, D = (Y) => (t.xAxis.type === "categorical" ? f(Y) : f(d(Y))) + (f.bandwidth ? f.bandwidth() / 2 : 0);
  if (k === "ALWAYS_SHOW_POINTS") {
    if (M === "hidden")
      return /* @__PURE__ */ i.createElement(i.Fragment, null);
    if (M === "always show")
      return (v == null ? void 0 : v.some((Q) => Q[t.xAxis.dataKey] === n[t.xAxis.dataKey] && Q[a] === n[a])) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(
        "circle",
        {
          cx: D(n[t.xAxis.dataKey]),
          cy: T.axis === "Right" ? g(n[T.dataKey]) : s(n[T.dataKey]),
          r: 4.5,
          opacity: n[a] ? 1 : 0,
          fillOpacity: 1,
          fill: m(r, c, t, a, a),
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
    let Q, re = o.data.filter((me) => me[0] === a), K = (R = re == null ? void 0 : re[0]) == null ? void 0 : R[0], q = (j = re == null ? void 0 : re[0]) == null ? void 0 : j[2];
    return K ? (o == null || o.data.indexOf(K), Q = (H = y == null ? void 0 : y.find((me) => me[t == null ? void 0 : t.xAxis.dataKey] === Y)) == null ? void 0 : H[a], o == null ? void 0 : o.data.map((me, W) => (t.runtime.seriesLabelsAll.indexOf(Y), isNaN(Q) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : (v == null ? void 0 : v.some((ce) => ce[t.xAxis.dataKey] === Y)) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(
      "circle",
      {
        cx: D(Y),
        cy: q === "right" ? g(Q) : s(Q),
        r: 4.5,
        opacity: 1,
        fillOpacity: 1,
        fill: m(r, c, t, K, a),
        style: { filter: "unset", opacity: 1 },
        key: `line-chart-circle--${JSON.stringify(me)}--${W}`
      }
    )))) : void 0;
  }
  return k === "ISOLATED_POINTS" && k && ((Q, re) => {
    const K = y[Q], q = y[Q - 1], me = y[Q + 1];
    if (Q === 0 && !me[re] || Q === y.length - 1 && !q[re] || Q !== 0 && K[re] && !q[re] && !me[re])
      return !0;
  })(E, a) ? /* @__PURE__ */ i.createElement("circle", { cx: D(n[t.xAxis.dataKey]), cy: T.axis === "Right" ? g(n[T.dataKey]) : s(n[T.dataKey]), r: 5.3, strokeWidth: 2, stroke: c(t.runtime.seriesLabels[a]), fill: c(t.runtime.seriesLabels[a]) }) : null;
}, im = (e) => {
  const {
    getXAxisData: t,
    getYAxisData: n,
    handleTooltipClick: r,
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
  } = ue.useContext(bt), { yScaleRight: R } = mh({ config: v, yMax: d, data: L, updateConfig: _ });
  if (!o)
    return;
  const { lineDatapointStyle: j, showLineSeriesLabels: H, legend: Y } = v;
  return /* @__PURE__ */ i.createElement(_r, { component: "LineChart" }, /* @__PURE__ */ i.createElement(nt, { left: v.runtime.yAxis.size }, " ", (v.runtime.lineSeriesKeys || v.runtime.seriesKeys).map((Q, re) => {
    var ie;
    let K = v.series.filter((V) => V.dataKey === Q)[0].type;
    const q = v.series.filter((V) => V.dataKey === Q), me = q[0].axis ? q[0].axis : "left";
    let W = Y.behavior === "highlight" || m.length === 0 || m.indexOf(Q) !== -1;
    const se = mk(v.preliminaryData, N, Q);
    let ce = pk({ preliminaryData: v.preliminaryData, data: D, stroke: y(v.runtime.seriesLabels[Q]), strokeWidth: q[0].weight || 2, handleLineType: k, lineType: K, seriesKey: Q }), he = (V) => c(t(V)) + (c.bandwidth ? c.bandwidth() / 2 : 0);
    return /* @__PURE__ */ i.createElement(
      nt,
      {
        key: `series-${Q}`,
        opacity: Y.behavior === "highlight" && m.length > 0 && m.indexOf(Q) === -1 ? 0.5 : 1,
        display: Y.behavior === "highlight" || m.length === 0 && !Y.dynamicLegend || m.indexOf(Q) !== -1 ? "block" : "none"
      },
      L.map((V, Z) => {
        const ne = v.series.find(({ dataKey: _e }) => _e === Q), { axis: Ae } = ne, ve = Object.keys(v.runtime.seriesLabels).length > 1, Re = Ae === "Right" ? "rightLabel" : "label";
        let le = v.runtime.yAxis[Re];
        return ve || (le = v.isLegendValue ? v.runtime.seriesLabels[Q] : le), V[Q] !== void 0 && V[Q] !== "" && V[Q] !== null && M(V[Q]) && /* @__PURE__ */ i.createElement(nt, { key: `series-${Q}-point-${Z}`, className: "checkwidth" }, /* @__PURE__ */ i.createElement(hr, { key: "bars", width: Number(s), height: Number(d), fill: "transparent", fillOpacity: 0.05, onMouseMove: (_e) => o(_e, D), onMouseOut: a, onClick: (_e) => r(_e, L) }), /* @__PURE__ */ i.createElement(xt, { display: v.labels ? "block" : "none", x: he(V), y: me === "Right" ? R(n(V, Q)) : g(n(V, Q)), fill: "#000", textAnchor: "middle" }, E(V[Q], "left")), (j === "hidden" || j === "always show") && /* @__PURE__ */ i.createElement(
          Xd,
          {
            mode: "ALWAYS_SHOW_POINTS",
            dataIndex: Z,
            circleData: se,
            data: L,
            d: V,
            config: v,
            seriesKey: Q,
            displayArea: W,
            tooltipData: f,
            xScale: c,
            yScale: g,
            colorScale: y,
            parseDate: T,
            yScaleRight: R,
            seriesAxis: me,
            key: `line-circle--${Z}`
          }
        ), /* @__PURE__ */ i.createElement(
          Xd,
          {
            mode: "ISOLATED_POINTS",
            dataIndex: Z,
            circleData: se,
            data: L,
            d: V,
            config: v,
            seriesKey: Q,
            displayArea: W,
            tooltipData: f,
            xScale: c,
            yScale: g,
            colorScale: y,
            parseDate: T,
            yScaleRight: R,
            seriesAxis: me,
            key: `isolated-circle-${Z}`
          }
        ));
      }),
      /* @__PURE__ */ i.createElement(i.Fragment, null, j === "hover" && /* @__PURE__ */ i.createElement(
        Xd,
        {
          dataIndex: 0,
          mode: "HOVER_POINTS",
          circleData: se,
          data: L,
          config: v,
          seriesKey: Q,
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
        Dg,
        {
          curve: xs[q[0].lineType],
          segments: (v.xAxis.type === "date-time" ? L.sort((V, Z) => {
            let ne = t(V), Ae = t(Z);
            return ne < Ae ? -1 : Ae < ne ? 1 : 0;
          }) : L).map((V) => [V]),
          segmentation: "x",
          x: (V) => he(V),
          y: (V) => me === "Right" ? R(n(V, Q)) : g(Number(n(V, Q))),
          styles: ce,
          defined: (V, Z) => V[Q] !== "" && V[Q] !== null && V[Q] !== void 0
        }
      ) : /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
        da,
        {
          curve: xs[q[0].lineType],
          data: v.xAxis.type === "date-time" ? L.sort((V, Z) => {
            let ne = t(V), Ae = t(Z);
            return ne < Ae ? -1 : Ae < ne ? 1 : 0;
          }) : L,
          x: (V) => he(V),
          y: (V) => me === "Right" ? R(n(V, Q)) : g(Number(n(V, Q))),
          stroke: y(v.runtime.seriesLabels[Q]),
          strokeWidth: q[0].weight || 2,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: K ? k(K) : 0,
          defined: (V, Z) => V[Q] !== "" && V[Q] !== null && V[Q] !== void 0
        }
      )),
      se.map((V, Z) => /* @__PURE__ */ i.createElement("circle", { key: Z, cx: he(V), cy: me === "Right" ? R(n(V, Q)) : g(Number(n(V, Q))), r: 6, strokeWidth: q[0].weight || 2, stroke: y ? y(v.runtime.seriesLabels[Q]) : "#000", fill: "#fff" })),
      v.animate && /* @__PURE__ */ i.createElement(
        da,
        {
          className: "animation",
          curve: xs[q[0].lineType],
          data: L,
          x: (V) => he(V),
          y: (V) => me === "Right" ? R(n(V, Q)) : g(Number(n(V, Q))),
          stroke: "#fff",
          strokeWidth: 3,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: K ? k(K) : 0,
          defined: (V, Z) => V[Q] !== "" && V[Q] !== null && V[Q] !== void 0
        }
      ),
      H && (v.runtime.lineSeriesKeys || v.runtime.seriesKeys).map((V) => {
        let Z;
        for (let ne = L.length - 1; ne >= 0; ne--)
          if (L[ne][V]) {
            Z = L[ne];
            break;
          }
        return Z ? /* @__PURE__ */ i.createElement("text", { x: he(Z) + 5, y: g(n(Z, V)), alignmentBaseline: "middle", fill: v.colorMatchLineSeriesLabels && y ? y(v.runtime.seriesLabels[V] || V) : "black" }, v.runtime.seriesLabels[V] || V) : /* @__PURE__ */ i.createElement(i.Fragment, null);
      })
    );
  }), v.legend.dynamicLegend && m.length === 0 && /* @__PURE__ */ i.createElement(xt, { x: s / 2, y: d / 2, fill: "black", textAnchor: "middle", color: "black" }, v.legend.dynamicLegendChartMessage)));
}, gk = (e) => {
  const { rawData: t, updateConfig: n } = ue.useContext(bt), { xScale: r, yScale: a, config: o, height: f, width: s, handleTooltipMouseOff: c, handleTooltipMouseOver: d } = e, { forestPlot: g } = o, y = o.xAxis.tickWidthMax + 10, [v, E] = ue.useState(!1);
  ue.useEffect(() => {
    try {
      const _ = ["estimateField", "lower", "upper", "estimateRadius"], N = o, R = 10;
      for (let j = 0; j < R; j++)
        _.forEach((H) => {
          var Y;
          o.forestPlot[H] && o.forestPlot[H] !== ((Y = N.columns[o.forestPlot[`additionalColumn${j}`]]) == null ? void 0 : Y.name) && (delete N.columns[`additionalColumn${j}`], N.columns[o.forestPlot[H]] = {}, N.columns[o.forestPlot[H]].dataKey = N.forestPlot[H], N.columns[o.forestPlot[H]].name = N.forestPlot[H], N.columns[o.forestPlot[H]].dataTable = !0, N.columns[o.forestPlot[H]].tooltips = !0, N.columns[o.forestPlot[H]].label = N.forestPlot[H]);
        });
      o.forestPlot.radius.scalingColumn && (N.columns[o.forestPlot.radius.scalingColumn] = {}, N.columns[o.forestPlot.radius.scalingColumn].dataKey = N.forestPlot.radius.scalingColumn, N.columns[o.forestPlot.radius.scalingColumn].name = N.forestPlot.radius.scalingColumn, N.columns[o.forestPlot.radius.scalingColumn].label = N.forestPlot.radius.scalingColumn, N.columns[o.forestPlot.radius.scalingColumn].dataTable = !0, N.columns[o.forestPlot.radius.scalingColumn].tooltips = !0), N.table.showVertical && (N.table.indexLabel = o.xAxis.dataKey), n(N);
    } catch (_) {
      console.log(_.message);
    }
  }, []), ue.useEffect(() => {
    !v && o.forestPlot.type === "Logarithmic" && (n({
      ...o,
      dataFormat: {
        ...o.dataFormat,
        roundTo: 2
      }
    }), E(!0));
  }, [o.forestPlot.type]);
  const k = o.data.find((_) => _[o.xAxis.dataKey] === o.forestPlot.pooledResult.column), M = k ? [
    { x: r(k[o.forestPlot.lower]), y: f - Number(o.forestPlot.rowHeight) },
    { x: r(k[o.forestPlot.estimateField]), y: f - g.pooledResult.diamondHeight - Number(o.forestPlot.rowHeight) },
    { x: r(k[o.forestPlot.upper]), y: f - Number(o.forestPlot.rowHeight) },
    { x: r(k[o.forestPlot.estimateField]), y: f + g.pooledResult.diamondHeight - Number(o.forestPlot.rowHeight) },
    { x: r(k[o.forestPlot.lower]), y: f - Number(o.forestPlot.rowHeight) }
  ] : [], T = o.forestPlot.rowHeight, m = [
    { x: 0, y: T },
    { x: s, y: T }
  ], D = [
    { x: 0, y: f },
    { x: s, y: f }
  ], L = Object.entries(o.columns).map((_) => _[1]).filter((_) => _.forestPlot === !0);
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(nt, { width: s }, g.title && /* @__PURE__ */ i.createElement(xt, { className: "forest-plot--title", x: g.type === "Linear" ? r(0) : r(1), y: 0, textAnchor: "middle", verticalAnchor: "start", fontSize: Ci(o.fontSize), fill: "black" }, g.title), g.lineOfNoEffect.show && g.type === "Linear" && /* @__PURE__ */ i.createElement(en, { from: { x: r(0), y: 0 + T }, to: { x: r(0), y: f }, className: "forestplot__line-of-no-effect", stroke: g.regression.baseLineColor || "black" }), g.lineOfNoEffect.show && g.type === "Logarithmic" && /* @__PURE__ */ i.createElement(en, { from: { x: r(1), y: 0 + T }, to: { x: r(1), y: f }, className: "forestplot__line-of-no-effect", stroke: g.regression.baseLineColor || "black" }), t.map((_, N) => {
    const R = Hn({
      domain: t.map((K) => K[g.radius.scalingColumn]),
      range: [g.radius.min, g.radius.max]
    }), j = g.radius.scalingColumn !== "" ? R(t[N][g.radius.scalingColumn]) : 4, H = g.colors.shape ? g.colors.shape : "black", Y = g.colors.line ? g.colors.line : "black", Q = 4;
    return _[o.xAxis.dataKey] === g.pooledResult.column ? /* @__PURE__ */ i.createElement(da, { data: M, x: (K) => K.x, y: (K) => K.y - Ci(o.fontSize) / 2, stroke: "black", strokeWidth: 2, fill: "black", curve: lf }) : /* @__PURE__ */ i.createElement(nt, null, /* @__PURE__ */ i.createElement(
      "path",
      {
        stroke: Y,
        strokeWidth: 1,
        className: "lower-ci",
        d: `
                    M${r(_[g.lower])} ${a(N) - Number(Q)}
                    L${r(_[g.lower])} ${a(N) + Number(Q)}
                `
      }
    ), /* @__PURE__ */ i.createElement(
      "path",
      {
        stroke: Y,
        strokeWidth: 1,
        className: "upper-ci",
        d: `
                    M${r(_[g.upper])} ${a(N) - Number(Q)}
                    L${r(_[g.upper])} ${a(N) + Number(Q)}
                `
      }
    ), /* @__PURE__ */ i.createElement("line", { stroke: Y, className: `line-${_[o.yAxis.dataKey]}`, key: N, x1: r(_[g.lower]), x2: r(_[g.upper]), y1: a(N), y2: a(N) }), g.shape === "circle" && /* @__PURE__ */ i.createElement(Fy, { className: "forest-plot--circle", cx: r(Number(_[g.estimateField])), cy: a(N), r: g.radius.scalingColumn !== "" ? R(t[N][g.radius.scalingColumn]) : 4, fill: H, style: { opacity: 1, filter: "unset" } }), g.shape === "square" && /* @__PURE__ */ i.createElement("rect", { className: "forest-plot--square", x: r(Number(_[g.estimateField])), y: a(N) - j / 2, width: j, height: j, fill: H, style: { opacity: 1, filter: "unset" } }), g.shape === "text" && /* @__PURE__ */ i.createElement(xt, { className: "forest-plot--text", x: r(Number(_[g.estimateField])), y: a(N), textAnchor: "middle", verticalAnchor: "middle", fontSize: Ci(o.fontSize), fill: H }, _[g.estimateField]));
  }), M && g.regression.showDiamond && /* @__PURE__ */ i.createElement(da, { data: M, x: (_) => _.x, y: (_) => _.y, stroke: "black", strokeWidth: 2, fill: g.regression.baseLineColor, curve: lf }), g.regression.description && /* @__PURE__ */ i.createElement(xt, { x: 0 - Number(o.xAxis.size), width: s, y: f - o.forestPlot.rowHeight - Number(g.rowHeight) / 3, verticalAnchor: "start", textAnchor: "start", style: { fontWeight: "bold", fontSize: 12 } }, g.regression.description), /* @__PURE__ */ i.createElement(hr, { key: "forest-plot-tooltip-area", className: "forest-plot-tooltip-area", width: s, height: f, fill: "transparent", fillOpacity: 0.5, onMouseMove: (_) => d(_, t), onMouseOut: c })), /* @__PURE__ */ i.createElement(en, { from: m[0], to: m[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__top-line" }), /* @__PURE__ */ i.createElement(en, { from: D[0], to: D[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__bottom-line" }), L.map((_) => t.map((N, R) => /* @__PURE__ */ i.createElement(xt, { className: `${N[_.name]}`, x: _.forestPlotAlignRight ? s : _.forestPlotStartingPoint, y: a(R), textAnchor: _.forestPlotAlignRight ? "end" : "start", verticalAnchor: "middle", fontSize: Ci(o.fontSize), fill: "black" }, N[_.name]))), !g.hideDateCategoryCol && t.map((_, N) => /* @__PURE__ */ i.createElement(xt, { className: `${_[o.xAxis.dataKey]}`, x: 0, y: a(N), textAnchor: "start", verticalAnchor: "middle", fontSize: Ci(o.fontSize), fill: "black" }, _[o.xAxis.dataKey])), !g.hideDateCategoryCol && o.xAxis.dataKey && /* @__PURE__ */ i.createElement(xt, { className: o.xAxis.dataKey, x: 0, y: 0, textAnchor: "start", verticalAnchor: "start", fontSize: Ci(o.fontSize), fill: "black" }, o.xAxis.dataKey), L.map((_) => /* @__PURE__ */ i.createElement(xt, { className: `${_.label}`, x: _.forestPlotAlignRight ? s : _.forestPlotStartingPoint, y: 0, textAnchor: _.forestPlotAlignRight ? "end" : "start", verticalAnchor: "start", fontSize: Ci(o.fontSize), fill: "black" }, _.label)), g.leftLabel && /* @__PURE__ */ i.createElement(xt, { className: "forest-plot__left-label", x: g.type === "Linear" ? r(0) - 25 : r(1) - 25, y: f + y, textAnchor: "end", verticalAnchor: "start" }, g.leftLabel), g.rightLabel && /* @__PURE__ */ i.createElement(xt, { className: "forest-plot__right-label", x: g.type === "Linear" ? r(0) + 25 : r(1) + 25, y: f + y, textAnchor: "start", verticalAnchor: "start" }, g.rightLabel));
}, yk = ({ width: e, height: t, originalWidth: n }) => {
  var L;
  const { config: r, colorScale: a, transformedData: o, formatNumber: f, seriesHighlight: s, getTextWidth: c } = ue.useContext(bt);
  if (!r || ((L = r == null ? void 0 : r.series) == null ? void 0 : L.length) < 2)
    return;
  const d = r.barHasBorder === "true" ? 1 : 0, g = e / 2, y = { small: 16, medium: 18, large: 20 }, v = 1.02, E = {
    parentKey: r.dataDescription.seriesKey,
    dataKey: r.series[0].dataKey,
    dataKeyLabel: r.runtime.seriesLabels[r.series[0].dataKey] || r.series[0].dataKey,
    color: a(r.runtime.seriesLabels[r.series[0].dataKey]),
    max: Math.max.apply(
      Math,
      o.map((_) => _[r.series[0].dataKey])
    ),
    labelColor: ""
  }, k = {
    parentKey: r.dataDescription.seriesKey,
    dataKey: r.series[1].dataKey,
    dataKeyLabel: r.runtime.seriesLabels[r.series[1].dataKey] || r.series[1].dataKey,
    color: a(r.runtime.seriesLabels[r.series[1].dataKey]),
    max: Math.max.apply(
      Math,
      o.map((_) => _[r.series[1].dataKey])
    ),
    labelColor: ""
  }, M = Hn({
    domain: [0, Math.max(E.max * v, k.max * 1.1)],
    range: [0, g]
  });
  E.labelColor = E.color ? Go("#000", E.color) : "#000", k.labelColor = k.color ? Go("#000", k.color) : "#000";
  const T = r.yAxis.label ? `${r.yAxis.label}: ` : "", m = (_) => `<p>
				${r.dataDescription.seriesKey}: ${E.dataKeyLabel}<br/>
				${r.xAxis.dataKey}: ${_[r.xAxis.dataKey]}<br/>
				${T}${f(_[E.dataKey], "left")}
			</p>`, D = (_) => `<p>
				${r.dataDescription.seriesKey}: ${k.dataKeyLabel}<br/>
				${r.xAxis.dataKey}: ${_[r.xAxis.dataKey]}<br/>
				${T}${f(_[k.dataKey], "left")}
			</p>`;
  return e > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `
				#cdc-visualization__paired-bar-chart,
				 #cdc-visualization__paired-bar-chart > .visx-group {
					transform-origin: center
				}
				`), /* @__PURE__ */ i.createElement("svg", { id: "cdc-visualization__paired-bar-chart", width: n, height: t, viewBox: `0 0 ${e + Number(r.runtime.yAxis.size)} ${t}`, role: "img", tabIndex: 0 }, /* @__PURE__ */ i.createElement("title", null, `Paired bar chart graphic with the title ${r.title ? r.title : "No Title Found"}`), /* @__PURE__ */ i.createElement(nt, { top: 0, left: Number(r.xAxis.size) }, o.filter((_) => r.series[0].dataKey === E.dataKey).map((_, N) => {
    let R = r.legend.behavior === "highlight" && s.length > 0 && s.indexOf(r.series[0].dataKey) === -1, j = r.legend.behavior === "highlight" || s.length === 0 || s.indexOf(r.series[0].dataKey) !== -1, H = M(_[r.series[0].dataKey]), Y = Number(r.barHeight) ? Number(r.barHeight) : 25, Q = 0;
    Q = N !== 0 ? (Number(r.barSpace) + Y + d) * N : Q;
    const re = (Number(r.barSpace) + Y + d) * o.length;
    r.heights.horizontal = re;
    const q = c(f(_[E.dataKey], "left"), `normal ${y[r.fontSize]}px sans-serif`) < H - 5;
    return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(nt, { key: `group-${E.dataKey}-${_[r.xAxis.dataKey]}`, className: "horizontal" }, /* @__PURE__ */ i.createElement(
      hr,
      {
        id: `bar-${E.dataKey}-${_[r.dataDescription.xKey]}`,
        className: "bar group-1",
        key: `bar-${E.dataKey}-${_[r.dataDescription.xKey]}`,
        x: g - H,
        y: Q,
        width: M(_[r.series[0].dataKey]),
        height: Y,
        fill: E.color,
        "data-tooltip-html": m(_),
        "data-tooltip-id": `cdc-open-viz-tooltip-${r.runtime.uniqueId}`,
        stroke: "#333",
        strokeWidth: d,
        opacity: R ? 0.5 : 1,
        display: j ? "block" : "none",
        tabIndex: -1
      }
    ), r.yAxis.displayNumbersOnBar && j && /* @__PURE__ */ i.createElement(xt, { textAnchor: q ? "start" : "end", dx: q ? 5 : -5, verticalAnchor: "middle", x: g - H, y: Q + r.barHeight / 2, fill: q ? E.labelColor : "#000" }, f(_[E.dataKey], "left"))));
  }), o.filter((_) => r.series[1].dataKey === k.dataKey).map((_, N) => {
    let R = M(_[r.series[1].dataKey]), j = r.legend.behavior === "highlight" && s.length > 0 && s.indexOf(r.series[1].dataKey) === -1, H = r.legend.behavior === "highlight" || s.length === 0 || s.indexOf(r.series[1].dataKey) !== -1, Y = r.barHeight ? Number(r.barHeight) : 25, Q = 0;
    Q = N !== 0 ? (Number(r.barSpace) + Y + d) * N : Q;
    const re = (Number(r.barSpace) + Y + d) * o.length;
    r.heights.horizontal = re;
    const q = c(f(_[k.dataKey], "left"), `normal ${y[r.fontSize]}px sans-serif`) < R - 5;
    return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `
                      .bar-${k.dataKey}-${_[r.xAxis.dataKey]} {
                          transform-origin: ${g}px ${Q}px
                      }
							      `), /* @__PURE__ */ i.createElement(nt, { key: `group-${k.dataKey}-${_[r.dataDescription.xKey]}`, className: "horizontal" }, /* @__PURE__ */ i.createElement(
      hr,
      {
        id: `bar-${k.dataKey}-${_[r.dataDescription.xKey]}`,
        className: "bar group-2",
        key: `bar-${k.dataKey}-${_[r.dataDescription.xKey]}`,
        x: g,
        y: Q,
        width: M(_[r.series[1].dataKey]),
        height: Y,
        fill: k.color,
        "data-tooltip-html": D(_),
        "data-tooltip-id": `cdc-open-viz-tooltip-${r.runtime.uniqueId}`,
        strokeWidth: d,
        stroke: "#333",
        opacity: j ? 0.5 : 1,
        display: H ? "block" : "none",
        tabIndex: -1
      }
    ), r.yAxis.displayNumbersOnBar && H && /* @__PURE__ */ i.createElement(xt, { textAnchor: q ? "end" : "start", dx: q ? -5 : 5, verticalAnchor: "middle", x: g + R, y: Q + r.barHeight / 2, fill: q ? k.labelColor : "#000" }, f(_[k.dataKey], "left"))));
  }))));
}, oy = ({ config: e, minValue: t, maxValue: n, existPositiveValue: r, data: a, isAllLine: o }) => {
  let f = 0, s = 0, c = 0, d = 0;
  if (!a)
    return { min: f, max: s };
  const { visualizationType: g, series: y } = e, { max: v, min: E } = e.runtime.yAxis, k = r ? v >= n : v >= 0, M = e.useLogScale ? E >= 0 : E <= 0 && t >= 0 || E <= t && t < 0;
  f = E && M ? E : t, s = v && k ? v : Number.MIN_VALUE;
  const { lower: T, upper: m } = (e == null ? void 0 : e.confidenceKeys) || {};
  if (T && m && e.visualizationType === "Bar") {
    const D = f < 0 ? 1.1 : 0;
    s = Math.max(n, Math.max(...a.flatMap((L) => [L[m], L[T]])) * 1.15), f = Math.min(t, Math.min(...a.flatMap((L) => [L[m], L[T]])) * 1.15) * D;
  }
  if (e.series.filter((D) => (D == null ? void 0 : D.type) === "Forecasting")) {
    const {
      runtime: { forecastingSeriesKeys: D }
    } = e;
    if ((D == null ? void 0 : D.length) > 0) {
      let L = [];
      D.forEach((j) => {
        var H;
        (H = j.confidenceIntervals) == null || H.map((Y) => {
          L.push(Y.high), L.push(Y.low);
        });
      });
      const _ = a.map((j) => L.map((H) => j[H])), N = Math.max.apply(
        null,
        _.map((j) => j[0])
      ), R = Math.min.apply(
        null,
        _.map((j) => j[1])
      );
      N > s && (s = N), R < f && (f = R);
    }
  }
  if (g === "Combo")
    try {
      if (!a)
        throw new Error("COVE: missing data while getting min/max for combo chart.");
      let D = y.filter((N) => N.axis === "Left"), L = y.filter((N) => N.axis === "Right");
      const _ = (N, R, j, H = "left") => {
        let Y = 0;
        return (R.map((re) => re.dataKey) || []).forEach((re) => {
          let K = R.find((W) => W.dataKey === re), q = N.map((W) => W[re]), me = Math.max.apply(null, q);
          e.visualizationSubType === "stacked" && H === "left" && K.type === "Bar" && (Y += me), me > j && (j = me), j < Y && (j = Y);
        }), j;
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
  if (s === Number.MIN_VALUE && (s = r ? n : 0), e.runtime.yAxis.paddingPercent) {
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
}, vk = (e) => {
  let { xAxisDataMapped: t, xMax: n, yMax: r, min: a, max: o, config: f, data: s } = e;
  const { rawData: c, dimensions: d } = ue.useContext(bt), [g, y] = d, v = f.runtime.barSeriesKeys || f.runtime.seriesKeys, E = f.runtime.xAxis.type, k = f.orientation === "horizontal", M = (Y) => Y[f.runtime.originalXAxis.dataKey], T = s.map((Y) => M(Y)), { visualizationType: m } = f;
  let D = null, L = null, _ = null, N = null, R = null, j = null, H = null;
  if (k && (D = bk({ min: a * 1.03, ...e }), D.type = f.useLogScale ? jr.LOG : jr.LINEAR, L = Ek(E, t), L.rangeRound([0, r]), R = om(v, [0, r])), k || (H = om(T, [0, n], 0.5), D = qd(t, [0, n], 1 - f.barThickness), L = Sk(e), R = qd(v, [0, D.bandwidth()], 0)), f.xAxis.type === "date-time") {
    let Y = Math.min(...t), Q = Math.max(...t);
    Y -= (f.xAxis.padding ? f.xAxis.padding * 0.01 : 0) * (Q - Y), Q += (f.xAxis.padding ? f.xAxis.padding * 0.01 : 0) * (Q - Y), D = bv({
      domain: [Y, Q],
      range: [0, n]
    }), H = D, D.type = jr.TIME, R = qd(v, [0, f.barThickness * n], 0);
  }
  if (f.visualizationType === "Deviation Bar") {
    const Y = f.isLollipopChart ? 1.05 : 1.03;
    L = Jd({
      domain: t,
      range: [0, r]
    }), D = Hn({
      domain: [a * Y, Math.max(Number(f.xAxis.target), o)],
      range: [0, n],
      round: !0,
      nice: !0
    }), D.type = jr.LINEAR;
  }
  if (f.visualizationType === "Scatter Plot" && f.xAxis.type === "continuous" && (D = Hn({
    domain: [0, Math.max.apply(null, D.domain())],
    range: [0, n]
  }), D.type = jr.LINEAR), m === "Box Plot") {
    const Y = [];
    if (f.boxplot.plots.map((q) => q.columnOutliers.map((me) => Y.push(me))) && !f.boxplot.hideOutliers) {
      let q = Math.min(...Y), me = Math.max(...Y);
      q < a && (a = q), me > o && (o = me);
    }
    let re = Math.min(...f.boxplot.plots.map((q) => q.columnLowerBounds)), K = Math.max(...f.boxplot.plots.map((q) => q.columnUpperBounds));
    re < a && (a = re), K > o && (o = K), L = Hn({
      range: [r, 0],
      round: !0,
      domain: [a, o]
    }), D = Jd({
      range: [0, n],
      round: !0,
      domain: f.boxplot.categories,
      padding: 0.4
    }), D.type = jr.BAND;
  }
  if (m === "Paired Bar") {
    let Q = Math.max.apply(
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
      domain: [0, Math.max(Q, re) * 1.02],
      range: [n / 2, 0]
    }), _ = Hn({
      domain: N.domain(),
      range: [n / 2, n],
      nice: !0
    });
  }
  if (m === "Forest Plot") {
    const Y = () => f.forestPlot.regression.showDiamond || f.forestPlot.regression.description ? [0 + f.forestPlot.rowHeight * 2, r - f.forestPlot.rowHeight] : [0 + f.forestPlot.rowHeight * 2, r];
    L = Hn({
      domain: [0, c.length],
      range: Y()
    });
    const Q = 5, re = Number(f.forestPlot.leftWidthOffset) / 100 * n, K = Number(f.forestPlot.rightWidthOffset) / 100 * n, q = Number(f.forestPlot.rightWidthOffsetMobile) / 100 * n, me = Number(f.forestPlot.leftWidthOffsetMobile) / 100 * n;
    if (g > 480) {
      if (f.forestPlot.type === "Linear" && (D = Hn({
        domain: [Math.min(...s.map((W) => parseFloat(W[f.forestPlot.lower]))) - Q, Math.max(...s.map((W) => parseFloat(W[f.forestPlot.upper]))) + Q],
        range: [re, d[0] - K]
      }), D.type = jr.LINEAR), f.forestPlot.type === "Logarithmic") {
        let W = Math.max(...s.map((ce) => parseFloat(ce[f.forestPlot.upper]))), se = Math.min(...s.map((ce) => parseFloat(ce[f.forestPlot.lower])));
        D = Yu({
          domain: [se, W],
          range: [re, n - K],
          nice: !0
        }), D.type = jr.LOG;
      }
    } else if (f.forestPlot.type === "Linear" && (D = Hn({
      domain: [Math.min(...s.map((W) => parseFloat(W[f.forestPlot.lower]))) - Q, Math.max(...s.map((W) => parseFloat(W[f.forestPlot.upper]))) + Q],
      range: [me, n - q],
      type: jr.LINEAR
    })), f.forestPlot.type === "Logarithmic") {
      let W = Math.max(...s.map((ce) => parseFloat(ce[f.forestPlot.upper]))), se = Math.min(...s.map((ce) => parseFloat(ce[f.forestPlot.lower])));
      D = Yu({
        domain: [se, W],
        range: [re, n - K],
        nice: !0,
        base: W > 1 ? 10 : 2,
        round: !1,
        type: jr.LOG
      });
    }
  }
  return { xScale: D, yScale: L, seriesScale: R, g1xScale: N, g2xScale: _, xScaleNoPadding: j, xScaleBrush: H };
}, xk = (e, t, n) => {
  const r = t.domain();
  if (t.type === "time") {
    const a = e[e.length - 1], o = e[0], f = (a - o) / (n - 1), s = [];
    for (let c = a; c >= o; c -= f)
      s.push(c);
    return s[s.length - 1] !== o && s.push(o), s.reverse(), s;
  }
  if (r.length > 2) {
    const a = n || 1, o = [];
    for (let f = r.length; f > 0; f -= a) {
      const s = Math.max(Math.round(f) - 1, 0);
      o.push(r[s]);
    }
    return o.reverse(), o;
  }
}, bk = ({ min: e, max: t, xMax: n, config: r }) => (e = r.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e, (r.useLogScale ? Yu : Hn)({
  domain: [e, t],
  range: [0, n],
  nice: r.useLogScale,
  zero: r.useLogScale
})), Sk = ({ min: e, max: t, yMax: n, config: r, leftMax: a }) => {
  e = r.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e;
  const o = r.useLogScale ? Yu : Hn;
  return r.visualizationType === "Combo" && (t = a), o({
    domain: [e, t],
    range: [n, 0],
    nice: r.useLogScale,
    zero: r.useLogScale
  });
}, Ek = (e, t) => e === "date" ? Hn({
  domain: [Math.min(...t), Math.max(...t)]
}) : Ko({ domain: t, padding: 0.5 }), om = (e, t, n = 0) => Ko({
  domain: e,
  range: t,
  padding: n
}), qd = (e, t, n = 0) => Jd({
  domain: e,
  range: t,
  padding: n
});
function kk(e) {
  return { hasTopAxis: e.visualizationType === "Bar" || e.visualizationType === "Combo" || e.visualizationType === "Line" };
}
const Ds = () => {
  const { config: e } = ue.useContext(bt), { visualizationType: t, series: n, orientation: r, visualizationSubType: a } = e, o = [
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
  }, T = () => ["Line", "Bar", "Area Chart", "Combo"].includes(t) && r === "vertical", m = () => ["Box Plot", "Scatter Plot", "Pie"].includes(t) ? !1 : n == null ? void 0 : n.some((Ce) => Ce.type === "Bar" || Ce.type === "Paired Bar" || Ce.type === "Deviation Bar"), D = () => {
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
    visSupportsBarSpace: () => ["Forest Plot"].includes(t) ? !1 : r === "horizontal" || t === "Paired Bar",
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
      return !(r === "horizontal" || we.includes(t));
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
const wk = /* @__PURE__ */ Wf(OS), Tk = /* @__PURE__ */ Wf(HS);
var yh = {};
yh.__esModule = !0;
yh.default = Ck;
var Fu = ue;
function Ck(e) {
  var t = (0, Fu.useState)(e), n = t[0], r = t[1], a = (0, Fu.useRef)(null), o = (0, Fu.useCallback)(function(f, s) {
    a.current = s || null, r(f);
  }, [r]);
  return (0, Fu.useLayoutEffect)(function() {
    a.current && (a.current(n), a.current = null);
  }, [n]), [n, o];
}
var vh = {}, xh = {};
xh.__esModule = !0;
xh.default = Ak;
function Ak(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var bh = {};
bh.__esModule = !0;
bh.default = Lk;
function Pk(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = Rk(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Rk(e, t) {
  if (e) {
    if (typeof e == "string")
      return lm(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return lm(e, t);
  }
}
function lm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Lk(e, t) {
  for (var n = e, r = 1 / 0, a = Pk(t), o; !(o = a()).done; ) {
    var f = o.value, s = Math.sqrt(Math.pow(f.x - e.x, 2) + Math.pow(f.y - e.y, 2));
    s < r && (r = s, n = {
      x: f.x,
      y: f.y
    });
  }
  return n;
}
vh.__esModule = !0;
vh.default = Ok;
var sm = ly(xh), Dk = ly(bh);
function ly(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ok(e, t, n) {
  var r, a, o, f;
  return n === void 0 && (n = {}), t.length > 0 ? (0, Dk.default)(e, t) : {
    x: (0, sm.default)(e.x, (r = n.xMin) != null ? r : -1 / 0, (a = n.xMax) != null ? a : 1 / 0),
    y: (0, sm.default)(e.y, (o = n.yMin) != null ? o : -1 / 0, (f = n.yMax) != null ? f : 1 / 0)
  };
}
var Sh = {};
Sh.__esModule = !0;
Sh.default = Nk;
var Mk = ue;
function _k(e, t, n) {
  if (n === void 0 && (n = 1), !e)
    return [];
  for (var r = [], a = e.getTotalLength(), o = 0; o <= a; o += n) {
    var f = e.getPointAtLength(o), s = f.matrixTransform(t);
    r.push(s);
  }
  return r;
}
function Nk(e) {
  var t = (0, Mk.useMemo)(function() {
    if (!e)
      return [];
    var n = e.getCTM() || new DOMMatrix();
    return _k(e, n);
  }, [e == null ? void 0 : e.getTotalLength()]);
  return t;
}
gh.__esModule = !0;
gh.default = zk;
var Oi = ue, jo = wk, um = Tk, Fk = Eh(yh), cm = Eh(vh), $k = Eh(Sh);
function Eh(e) {
  return e && e.__esModule ? e : { default: e };
}
function Yr() {
  return Yr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Yr.apply(this, arguments);
}
function zk(e) {
  var t = e === void 0 ? {} : e, n = t.resetOnStart, r = n === void 0 ? !1 : n, a = t.snapToPointer, o = a === void 0 ? !0 : a, f = t.onDragEnd, s = t.onDragMove, c = t.onDragStart, d = t.x, g = t.y, y = t.dx, v = t.dy, E = t.isDragging, k = t.restrict, M = k === void 0 ? {} : k, T = t.restrictToPath, m = (0, Oi.useRef)({
    x: d,
    y: g,
    dx: y,
    dy: v
  }), D = (0, Fk.default)({
    x: d,
    y: g,
    dx: y ?? 0,
    dy: v ?? 0,
    isDragging: !1
  }), L = D[0], _ = D[1], N = (0, Oi.useState)(new jo.Point({
    x: 0,
    y: 0
  })), R = N[0], j = N[1];
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
      }), Z = (0, um.localPoint)(K) || new jo.Point({
        x: 0,
        y: 0
      }), ne = o ? Z : V, Ae = (0, cm.default)(ne, H, M);
      return j((0, jo.subtractPoints)(V, Z)), {
        isDragging: !0,
        dx: r ? 0 : q.dx,
        dy: r ? 0 : q.dy,
        x: r ? Ae.x : Ae.x - q.dx,
        y: r ? Ae.y : Ae.y - q.dy
      };
    }, c && function(q) {
      c(Yr({}, q, {
        event: K
      }));
    });
  }, [c, r, M, H, _, o]), Q = (0, Oi.useCallback)(function(K) {
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
    dragMove: Q,
    dragStart: Y
  });
}
var Mc = sy, os = kh(ym), Gd = kh(ue), Bk = kh(gh);
function kh(e) {
  return e && e.__esModule ? e : { default: e };
}
function sy(e) {
  var t = e.captureDragArea, n = t === void 0 ? !0 : t, r = e.snapToPointer, a = r === void 0 ? !0 : r, o = e.children, f = e.dx, s = e.dy, c = e.height, d = e.onDragEnd, g = e.onDragMove, y = e.onDragStart, v = e.resetOnStart, E = e.width, k = e.x, M = e.y, T = e.isDragging, m = e.restrict, D = e.restrictToPath, L = (0, Bk.default)({
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
  return /* @__PURE__ */ Gd.default.createElement(Gd.default.Fragment, null, L.isDragging && n && /* @__PURE__ */ Gd.default.createElement("rect", {
    width: E,
    height: c,
    onPointerDown: L.dragStart,
    onPointerMove: L.dragMove,
    onPointerUp: L.dragEnd,
    fill: "transparent"
  }), o(L));
}
sy.propTypes = {
  children: os.default.func.isRequired,
  width: os.default.number.isRequired,
  height: os.default.number.isRequired,
  captureDragArea: os.default.bool,
  isDragging: os.default.bool
};
function bc(e, t) {
  if ("invert" in e && typeof e.invert < "u")
    return e.invert(t).valueOf();
  var n = e.range(), r = n[0], a = n[1], o = 0, f = "step" in e && typeof e.step < "u" ? e.step() : 1, s = f * (a - r) / Math.abs(a - r);
  if (s > 0)
    for (; t > r + s * (o + 1); )
      o += 1;
  else
    for (; t < r + s * (o + 1); )
      o += 1;
  return o;
}
function dm(e, t, n, r) {
  var a, o = bc(e, t + (t < n ? -r : r)), f = bc(e, n + (n < t ? -r : r)), s = Math.min(o, f), c = Math.max(o, f);
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
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, kr.apply(this, arguments);
}
function Ik(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Of(e, t);
}
function Of(e, t) {
  return Of = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, Of(e, t);
}
var uy = /* @__PURE__ */ function(e) {
  Ik(t, e);
  function t() {
    for (var r, a = arguments.length, o = new Array(a), f = 0; f < a; f++)
      o[f] = arguments[f];
    return r = e.call.apply(e, [this].concat(o)) || this, r.handleDragStart = function(s) {
      var c = r.props, d = c.onBrushHandleChange, g = c.type, y = c.onBrushStart;
      d && d(g, wh(s.event)), y && y(s);
    }, r.handleDragMove = function(s) {
      var c = r.props, d = c.updateBrush, g = c.type, y = c.isControlled;
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
    }, r.handleDragEnd = function() {
      var s = r.props, c = s.updateBrush, d = s.onBrushEnd, g = s.onBrushHandleChange, y = s.isControlled;
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
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
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
      var _ = L.dragStart, N = L.dragEnd, R = L.dragMove, j = L.isDragging;
      return /* @__PURE__ */ i.createElement("g", null, j && /* @__PURE__ */ i.createElement("rect", {
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
uy.propTypes = {
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
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, fr.apply(this, arguments);
}
function Hk(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Mf(e, t);
}
function Mf(e, t) {
  return Mf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, Mf(e, t);
}
var Th = /* @__PURE__ */ function(e) {
  Hk(t, e);
  function t() {
    for (var r, a = arguments.length, o = new Array(a), f = 0; f < a; f++)
      o[f] = arguments[f];
    return r = e.call.apply(e, [this].concat(o)) || this, r.cornerDragMove = function(s) {
      var c = r.props, d = c.updateBrush, g = c.type;
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
    }, r.cornerDragEnd = function() {
      var s = r.props, c = s.updateBrush, d = s.onBrushEnd;
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
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
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
function za() {
  return za = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, za.apply(this, arguments);
}
function Wk(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, _f(e, t);
}
function _f(e, t) {
  return _f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, _f(e, t);
}
var Vk = {
  cursor: "move"
}, Ch = /* @__PURE__ */ function(e) {
  Wk(t, e);
  function t() {
    for (var r, a = arguments.length, o = new Array(a), f = 0; f < a; f++)
      o[f] = arguments[f];
    return r = e.call.apply(e, [this].concat(o)) || this, r.selectionDragStart = function(s) {
      var c = r.props, d = c.onMoveSelectionChange, g = c.onBrushStart;
      d && d("move", wh(s.event)), g && g(s);
    }, r.selectionDragMove = function(s) {
      var c = r.props, d = c.updateBrush, g = c.isControlled;
      g || d(function(y) {
        var v = y.start, E = v.x, k = v.y, M = y.end, T = M.x, m = M.y, D = s.dx > 0 ? Math.min(s.dx, y.bounds.x1 - T) : Math.max(s.dx, y.bounds.x0 - E), L = s.dy > 0 ? Math.min(s.dy, y.bounds.y1 - m) : Math.max(s.dy, y.bounds.y0 - k);
        return za({}, y, {
          isBrushing: !0,
          extent: za({}, y.extent, {
            x0: E + D,
            x1: T + D,
            y0: k + L,
            y1: m + L
          })
        });
      });
    }, r.selectionDragEnd = function() {
      var s = r.props, c = s.updateBrush, d = s.onBrushEnd, g = s.onMoveSelectionChange, y = s.isControlled;
      y || c(function(v) {
        var E = za({}, v, {
          isBrushing: !1,
          start: za({}, v.start, {
            x: Math.min(v.extent.x0, v.extent.x1),
            y: Math.min(v.extent.y0, v.extent.y1)
          }),
          end: za({}, v.end, {
            x: Math.max(v.extent.x0, v.extent.x1),
            y: Math.max(v.extent.y0, v.extent.y1)
          })
        });
        return d && d(E), E;
      }), g && g();
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
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
        style: Vk
      }), /* @__PURE__ */ i.createElement("rect", za({
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
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
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
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Qn.apply(this, arguments);
}
function jk(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, $f(e, t);
}
function $f(e, t) {
  return $f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, $f(e, t);
}
var Ah = /* @__PURE__ */ function(e) {
  jk(t, e);
  function t(r) {
    var a;
    a = e.call(this, r) || this, a.mouseUpTime = 0, a.mouseDownTime = 0, a.getIdleState = function() {
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
          var m = T.start, D = m.x, L = m.y, _ = T.end, N = _.x, R = _.y, j = k > 0 ? Math.min(k, T.bounds.x1 - N) : Math.max(k, T.bounds.x0 - D), H = M > 0 ? Math.min(M, T.bounds.y1 - R) : Math.max(M, T.bounds.y0 - L);
          return Qn({}, T, {
            isBrushing: !0,
            extent: Qn({}, T.extent, {
              x0: D + j,
              y0: L + H,
              x1: N + j,
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
    var o = r.initialBrushPosition, f = o ? a.getExtent(o.start, o.end) : {
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
  var n = t.prototype;
  return n.componentDidUpdate = function(a) {
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
  }, n.componentDidMount = function() {
    this.props.useWindowMoveEvents && (window.addEventListener("mouseup", this.handleWindowPointerUp), window.addEventListener("mousemove", this.handleWindowPointerMove));
  }, n.componentWillUnmount = function() {
    this.props.useWindowMoveEvents && (window.removeEventListener("mouseup", this.handleWindowPointerUp), window.removeEventListener("mousemove", this.handleWindowPointerMove));
  }, n.render = function() {
    var a = this, o = this.state, f = o.start, s = o.end, c = this.props, d = c.top, g = c.left, y = c.width, v = c.height, E = c.onMouseLeave, k = c.onMouseUp, M = c.onMouseMove, T = c.onBrushEnd, m = c.onClick, D = c.resizeTriggerAreas, L = c.selectedBoxStyle, _ = c.disableDraggingSelection, N = c.disableDraggingOverlay, R = c.clickSensitivity, j = c.useWindowMoveEvents, H = c.renderBrushHandle, Y = this.state.brushingType, Q = this.handles(), re = this.corners(), K = this.getBrushWidth(), q = this.getBrushHeight(), me = new Set(D);
    return /* @__PURE__ */ i.createElement(nt, {
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
      isDragging: j ? Y === "select" : void 0
    }, function(W) {
      var se = W.dragStart, ce = W.isDragging, he = W.dragMove, ie = W.dragEnd;
      return /* @__PURE__ */ i.createElement(Ff, {
        width: y,
        height: v,
        onDoubleClick: function() {
          return a.reset();
        },
        onClick: function(Z) {
          var ne = a.mouseUpTime - a.mouseDownTime;
          m && ne < R && m(Z);
        },
        onPointerDown: function(Z) {
          a.mouseDownTime = Date.now(), se(Z);
        },
        onPointerLeave: function(Z) {
          E && E(Z);
        },
        onPointerMove: function(Z) {
          !ce && M && M(Z), ce && he(Z);
        },
        onPointerUp: function(Z) {
          a.mouseUpTime = Date.now(), k && k(Z), ie(Z);
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
      isControlled: j,
      isDragInProgress: j ? Y === "move" : void 0
    }), f && s && Object.keys(Q).filter(function(W) {
      return me.has(W);
    }).map(function(W) {
      var se = Q[W];
      return se && /* @__PURE__ */ i.createElement(uy, {
        key: "handle-" + W,
        type: W,
        handle: se,
        stageWidth: y,
        stageHeight: v,
        updateBrush: a.updateBrush,
        brush: a.state,
        onBrushStart: a.handleBrushStart,
        onBrushEnd: T,
        isControlled: j,
        isDragInProgress: j ? Y === W : void 0,
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
function Uk(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, zf(e, t);
}
function zf(e, t) {
  return zf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, zf(e, t);
}
var fm = 2, hm = "steelblue", Ph = /* @__PURE__ */ function(e) {
  Uk(t, e);
  function t() {
    for (var r, a = arguments.length, o = new Array(a), f = 0; f < a; f++)
      o[f] = arguments[f];
    return r = e.call.apply(e, [this].concat(o)) || this, r.handleChange = function(s) {
      var c = r.props.onChange;
      if (c) {
        var d = s.extent.x0;
        if (typeof d > "u" || d < 0) {
          c(null);
          return;
        }
        var g = r.convertRangeToDomain(s);
        c(g);
      }
    }, r.handleBrushStart = function(s) {
      var c = r.props.onBrushStart;
      if (c) {
        var d = s.x, g = s.y, y = r.props, v = y.xScale, E = y.yScale, k = bc(v, d), M = bc(E, g);
        c({
          x: "invert" in v && typeof v.invert < "u" ? k : v.domain()[k],
          y: "invert" in E && typeof E.invert < "u" ? M : E.domain()[M]
        });
      }
    }, r.handleBrushEnd = function(s) {
      var c = r.props.onBrushEnd;
      if (c) {
        var d = s.extent.x0;
        if (typeof d > "u" || d < 0) {
          c(null);
          return;
        }
        var g = r.convertRangeToDomain(s);
        c(g);
      }
    }, r;
  }
  var n = t.prototype;
  return n.convertRangeToDomain = function(a) {
    var o = this.props, f = o.xScale, s = o.yScale, c = a.extent, d = c.x0, g = c.x1, y = c.y0, v = c.y1, E = dm(f, d || 0, g || 0, fm), k = dm(s, y || 0, v || 0, fm), M = {
      x0: E.start || 0,
      x1: E.end || 0,
      xValues: E.values,
      y0: k.start || 0,
      y1: k.end || 0,
      yValues: k.values
    };
    return M;
  }, n.render = function() {
    var a = this.props, o = a.xScale, f = a.yScale, s = a.height, c = a.width, d = a.margin, g = a.brushDirection, y = a.initialBrushPosition, v = a.innerRef, E = a.resizeTriggerAreas, k = a.brushRegion, M = a.yAxisOrientation, T = a.xAxisOrientation, m = a.selectedBoxStyle, D = a.disableDraggingSelection, L = a.disableDraggingOverlay, _ = a.resetOnEnd, N = a.onMouseLeave, R = a.onMouseMove, j = a.onClick, H = a.handleSize, Y = a.useWindowMoveEvents, Q = a.renderBrushHandle;
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
      onClick: j,
      onMouseLeave: N,
      onMouseMove: R,
      useWindowMoveEvents: Y,
      renderBrushHandle: Q
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
const Kk = Ph, Yk = (e) => {
  const { transformedData: t, config: n, parseDate: r, formatDate: a, updateConfig: o } = ue.useContext(bt), { fontSize: f } = Rs(), [s, c] = ue.useState([...t]), d = ue.useRef(null), g = 15, [y, v] = ue.useState({
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
    const { xValues: D } = m, L = (H = n.xAxis) == null ? void 0 : H.dataKey, _ = t.filter((Y) => D.includes(Y[L])), N = D.slice().reverse().find((Y) => Y !== void 0), R = D.find((Y) => Y !== void 0), j = (Y) => Sn(n.runtime.xAxis) ? a(r(Y)) : Y;
    v((Y) => {
      var Q, re;
      return {
        ...Y,
        startPosition: (Q = d.current) == null ? void 0 : Q.state.start.x,
        endPosition: (re = d.current) == null ? void 0 : re.state.end.x,
        endValue: j(N),
        startValue: j(R)
      };
    }), c(_);
  };
  ue.useEffect(() => {
    o({
      ...n,
      brush: {
        ...n.brush,
        data: s
      }
    });
  }, [s]), ue.useEffect(() => {
    n.brush.active || c(t);
  }, [n.brush.active]);
  const T = () => {
    const m = Number(n.xAxis.tickRotation) > 0 ? Number(n.xAxis.tickRotation) : 0;
    let D = 0;
    const L = 20;
    return n.xAxis.label || (!n.isResponsiveTicks && m && (D = Number(m + n.xAxis.tickWidthMax) / 1.6), !n.isResponsiveTicks && !m && (D = Number(n.xAxis.labelOffset) - L), n.isResponsiveTicks && n.dynamicMarginTop && (D = Number(n.xAxis.labelOffset + n.xAxis.tickWidthMax / 1.6)), n.isResponsiveTicks && !n.dynamicMarginTop && (D = Number(n.xAxis.labelOffset - L))), n.xAxis.label && (!n.isResponsiveTicks && m && (D = Number(n.xAxis.tickWidthMax + m)), !n.isResponsiveTicks && !m && (D = n.xAxis.labelOffset + L), n.isResponsiveTicks && !m && (D = Number(n.dynamicMarginTop ? n.dynamicMarginTop : n.xAxis.labelOffset) + L)), D;
  };
  if (["Line", "Bar", "Area Chart", "Combo"].includes(n.visualizationType))
    return /* @__PURE__ */ i.createElement(nt, { display: n.brush.active ? "block" : "none", top: Number(e.yMax) + T(), left: Number(n.runtime.yAxis.size), pointerEvents: "fill" }, /* @__PURE__ */ i.createElement("rect", { fill: "#eee", width: e.xMax, height: n.brush.height, rx: g }), /* @__PURE__ */ i.createElement(
      Kk,
      {
        renderBrushHandle: (m) => {
          var D;
          return /* @__PURE__ */ i.createElement(Xk, { textProps: y, fontSize: f[n.fontSize], ...m, isBrushing: (D = d.current) == null ? void 0 : D.state.isBrushing });
        },
        innerRef: d,
        useWindowMoveEvents: !0,
        selectedBoxStyle: k,
        xScale: e.xScaleBrush,
        yScale: e.yScale,
        width: e.xMax,
        resizeTriggerAreas: ["left", "right"],
        height: n.brush.height,
        handleSize: 8,
        brushDirection: "horizontal",
        initialBrushPosition: E,
        onChange: M
      }
    ));
}, Xk = (e) => {
  const { x: t, isBrushActive: n, isBrushing: r, className: a, textProps: o } = e, f = 8;
  if (!n)
    return null;
  const s = a.includes("left"), c = s ? "scale(-1, 1)" : "translate(0,0)", d = s ? "end" : "start";
  return /* @__PURE__ */ i.createElement(nt, { left: t + f / 2, top: -2 }, /* @__PURE__ */ i.createElement(xt, { pointerEvents: "visiblePainted", dominantBaseline: "hanging", x: 0, verticalAnchor: "start", textAnchor: d, fontSize: e.fontSize / 1.4, dy: 10, y: 15 }, s ? o.startValue : o.endValue), /* @__PURE__ */ i.createElement("path", { cursor: "ew-resize", d: "M0.5,10A6,6 0 0 1 6.5,16V14A6,6 0 0 1 0.5,20ZM2.5,18V12M4.5,18V12", fill: r ? "#297EF1" : "#666", strokeWidth: "1", transform: c }));
}, Ur = (e) => {
  var Vt, vn, Tn, kn;
  const { transformedData: t, dimensions: n, config: r, parseDate: a, formatDate: o, currentViewport: f, formatNumber: s, handleChartAriaLabels: c, updateConfig: d, handleLineType: g, getTextWidth: y } = ue.useContext(bt), { visualizationType: v, visualizationSubType: E, orientation: k, xAxis: M, yAxis: T, runtime: m, debugSvg: D } = r;
  let [L] = n;
  r && r.legend && !r.legend.hide && r.legend.position !== "bottom" && ["lg", "md"].includes(f) && (L = L * 0.73);
  const { horizontal: _ } = r.heights, N = k === "horizontal" || r.visualizationType === "Forest Plot", R = !0;
  let j = r.aspectRatio ? L * r.aspectRatio : r.visualizationType === "Forest Plot" ? r.heights.vertical : r.heights[k];
  const H = L - m.yAxis.size - (v === "Combo" ? r.yAxis.rightAxisSize : 0);
  let Y = j - (k === "horizontal" ? 0 : m.xAxis.padding || 0);
  r.visualizationType === "Forest Plot" && (j = j + r.data.length * r.forestPlot.rowHeight, Y = Y + r.data.length * r.forestPlot.rowHeight, L = n[0]), (Vt = r.brush) != null && Vt.active && (j = j + ((vn = r.brush) == null ? void 0 : vn.height));
  const { minValue: Q, maxValue: re, existPositiveValue: K, isAllLine: q } = Oc(r, t), { visSupportsReactTooltip: me } = Ds(), { hasTopAxis: W } = kk(r), [se, ce] = ue.useState(!1), [he, ie] = ue.useState({ x: 0, y: 0 }), V = ue.useRef(), Z = ue.useRef(), ne = uh(V, {
    freezeOnceVisible: !1
  }), Ae = (Pe) => Sn(r.runtime.xAxis) ? a(Pe[r.runtime.originalXAxis.dataKey]).getTime() : Pe[r.runtime.originalXAxis.dataKey], ve = (Pe, ut) => Pe[ut], Re = r.brush.active && ((Tn = r.brush.data) != null && Tn.length) ? r.brush.data.map((Pe) => Ae(Pe)) : t.map((Pe) => Ae(Pe)), le = r.orientation === "horizontal" || r.visualizationType === "Forest Plot" ? "yAxis" : "xAxis", _e = { data: t, config: r, minValue: Q, maxValue: re, isAllLine: q, existPositiveValue: K, xAxisDataMapped: Re, xMax: H, yMax: Y }, { min: Be, max: Te, leftMax: ge, rightMax: Le } = oy(_e), { yScaleRight: oe, hasRightAxis: we } = mh({ config: r, yMax: Y, data: t, updateConfig: d }), { xScale: Ce, yScale: Ie, seriesScale: Ue, g1xScale: qe, g2xScale: at, xScaleNoPadding: Qe, xScaleBrush: rt } = vk({ ..._e, min: Be, max: Te, leftMax: ge, rightMax: Le, dimensions: n }), [Ke, ze] = ue.useState(null);
  ue.useEffect(() => {
    var Pe;
    ze((Pe = Z == null ? void 0 : Z.current) == null ? void 0 : Pe.getBoundingClientRect());
  }, [Z, r.legend]);
  const Me = (Pe, ut) => {
    if (r.useLogScale && Pe === 0.1 && (Pe = 0), !(r.data && !r.data[ut] && v === "Forest Plot"))
      return r.visualizationType === "Forest Plot" ? r.data[ut][r.xAxis.dataKey] : Sn(m.yAxis) ? o(a(Pe)) : k === "vertical" ? s(Pe, "left", R) : Pe;
  }, ct = (Pe) => (r.useLogScale && Pe === 0.1 && (Pe = 0), Sn(m.xAxis) && r.visualizationType !== "Forest Plot" ? o(Pe) : k === "horizontal" && r.visualizationType !== "Forest Plot" ? s(Pe, "left", R) : r.xAxis.type === "continuous" && r.visualizationType !== "Forest Plot" ? s(Pe, "bottom", R) : r.visualizationType === "Forest Plot" ? s(Pe, "left", r.dataFormat.abbreviated, r.runtime.xAxis.prefix, r.runtime.xAxis.suffix, Number(r.dataFormat.roundTo)) : Pe), je = (Pe) => {
    const { numTicks: ut } = m[Pe];
    let st;
    return Pe === "yAxis" && (st = N && !ut ? t.length : N && ut ? ut : !N && !ut ? void 0 : !N && ut && ut, st === void 0 && !r.dataFormat.roundTo && (Number(Te) <= 3 ? st = 2 : st = 4), Number(st) > Number(Te) && (st = Number(Be) < 0 ? Math.round(Te) * 2 : Math.round(Te))), Pe === "xAxis" && (st = N && !ut ? void 0 : N && ut ? ut : !N && !ut ? void 0 : !N && ut && ut, N && st === void 0 && !r.dataFormat.roundTo && (Te <= 3 ? st = 2 : st = 4), r.visualizationType === "Forest Plot" && (st = r.yAxis.numTicks !== "" ? r.yAxis.numTicks : 4)), st;
  }, { tooltipData: Ge, showTooltip: ot, hideTooltip: dt, tooltipOpen: Tt, tooltipLeft: tn, tooltipTop: ln } = Og(), {
    handleTooltipMouseOver: Rt,
    handleTooltipClick: zt,
    handleTooltipMouseOff: Dt,
    tooltipStyles: Xt,
    TooltipListItem: cn,
    getXValueFromCoordinateDate: Ne,
    getXValueFromCoordinate: Ct
  } = $g({
    xScale: Ce,
    yScale: Ie,
    showTooltip: ot,
    hideTooltip: dt
  });
  ue.useEffect(() => {
    document.querySelector(".isEditor") && ce((ut) => !0);
  }), ue.useEffect(() => {
    (ne == null ? void 0 : ne.isIntersecting) === !0 && r.animate && setTimeout(() => {
      ce((Pe) => !0);
    }, 500);
  }, [ne == null ? void 0 : ne.isIntersecting, r.animate]);
  const qt = () => {
    const { visualizationType: Pe } = r;
    return Pe === "Combo" && m.forecastingSeriesKeys > 0 || Pe === "Area Chart" || Pe === "Line" || Pe === "Bar";
  }, Ht = Number(k === "horizontal" ? r.xAxis.padding : r.yAxis.size), dn = { small: 16, medium: 18, large: 20 }, St = () => r.visualizationType === "Forest Plot" ? r.data.length : je("yAxis"), gn = (Pe) => {
    const ut = Pe.currentTarget.getBoundingClientRect(), st = Pe.clientX - ut.left, Je = Pe.clientY - ut.top;
    ie({
      x: st,
      y: Je
    });
  }, Lt = () => {
    let Pe = 40;
    return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Hu, { top: Y, left: Number(m.yAxis.size), label: m.xAxis.label, tickFormat: Sn(m.xAxis) ? o : s, scale: qe, stroke: "#333", tickStroke: "#333", numTicks: m.xAxis.numTicks || void 0 }, (ut) => /* @__PURE__ */ i.createElement(nt, { className: "bottom-axis" }, ut.ticks.map((st, Je) => {
      const yt = st.index !== 0 ? r.yAxis.tickRotation : 0, nn = st.index !== 0 && r.yAxis.tickRotation && r.yAxis.tickRotation > 0 ? "end" : "middle", X = y(st.value, `normal ${dn[r.fontSize]}px sans-serif`) * Math.sin(yt * (Math.PI / 180)) + 25;
      return X > Pe && (Pe = X), /* @__PURE__ */ i.createElement(nt, { key: `vx-tick-${st.value}-${Je}`, className: "vx-axis-tick" }, !m.yAxis.hideTicks && /* @__PURE__ */ i.createElement(en, { from: st.from, to: st.to, stroke: "#333" }), !m.yAxis.hideLabel && /* @__PURE__ */ i.createElement(xt, { x: st.to.x, y: st.to.y, angle: -yt, verticalAnchor: "start", textAnchor: nn }, s(st.value, "left")));
    }), !m.yAxis.hideAxis && /* @__PURE__ */ i.createElement(en, { from: ut.axisFromPoint, to: ut.axisToPoint, stroke: "#333" }))), /* @__PURE__ */ i.createElement(
      Hu,
      {
        top: Y,
        left: Number(m.yAxis.size),
        label: m.xAxis.label,
        tickFormat: Sn(m.xAxis) ? o : m.xAxis.dataKey !== "Year" ? s : (ut) => ut,
        scale: at,
        stroke: "#333",
        tickStroke: "#333",
        numTicks: m.xAxis.numTicks || void 0
      },
      (ut) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(nt, { className: "bottom-axis" }, ut.ticks.map((st, Je) => {
        const yt = st.index !== 0 ? r.yAxis.tickRotation : 0, nn = st.index !== 0 && r.yAxis.tickRotation && r.yAxis.tickRotation > 0 ? "end" : "middle", X = y(st.value, `normal ${dn[r.fontSize]}px sans-serif`) * Math.sin(yt * (Math.PI / 180)) + 25;
        return X > Pe && (Pe = X), /* @__PURE__ */ i.createElement(nt, { key: `vx-tick-${st.value}-${Je}`, className: "vx-axis-tick" }, !m.yAxis.hideTicks && /* @__PURE__ */ i.createElement(en, { from: st.from, to: st.to, stroke: "#333" }), !m.yAxis.hideLabel && /* @__PURE__ */ i.createElement(xt, { x: st.to.x, y: st.to.y, angle: -yt, verticalAnchor: "start", textAnchor: nn }, s(st.value, "left")));
      }), !m.yAxis.hideAxis && /* @__PURE__ */ i.createElement(en, { from: ut.axisFromPoint, to: ut.axisToPoint, stroke: "#333" })), /* @__PURE__ */ i.createElement(nt, null, /* @__PURE__ */ i.createElement(xt, { x: H / 2, y: Pe + 20, stroke: "#333", textAnchor: "middle", verticalAnchor: "start" }, m.xAxis.label)), Z.current ? Z.current.setAttribute("height", j + Pe + (m.xAxis.label ? 50 : 0) + "px") : "")
    ));
  };
  return isNaN(L) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(_r, { component: "LinearChart" }, /* @__PURE__ */ i.createElement("div", { style: { width: `${L}px`, overflow: "visible" }, className: "tooltip-boundary" }, /* @__PURE__ */ i.createElement(
    "svg",
    {
      onMouseMove: gn,
      width: "100%",
      height: j,
      className: `linear ${r.animate ? "animated" : ""} ${se && r.animate ? "animate" : ""} ${D && "debug"}`,
      role: "img",
      "aria-label": c(r),
      ref: Z,
      style: { overflow: "visible" }
    },
    /* @__PURE__ */ i.createElement(hr, { width: L, height: j, fill: "transparent" }),
    " ",
    !["Spark Line", "Forest Plot"].includes(v) && /* @__PURE__ */ i.createElement(WE, { scale: Ie, tickLength: r.useLogScale ? 6 : 8, left: Number(m.yAxis.size) - r.yAxis.axisPadding, label: m.yAxis.label || m.yAxis.label, stroke: "#333", tickFormat: (Pe, ut) => Me(Pe, ut), numTicks: St() }, (Pe) => {
      const ut = r.orientation === "horizontal" ? (Pe.axisToPoint.y - Pe.axisFromPoint.y) / 2 : (Pe.axisFromPoint.y - Pe.axisToPoint.y) / 2, st = Y / Pe.ticks.length / 2 - Y / Pe.ticks.length * (1 - r.barThickness) + 5;
      return /* @__PURE__ */ i.createElement(nt, { className: "left-axis" }, Pe.ticks.map((Je, yt) => {
        const nn = Pe.ticks[0].to.y, Dn = 15, X = String(Je.value).startsWith("1") || Je.value === 0.1 ? "block" : "none", Fe = X === "block" ? 7 : 0, Xe = { x: Je.to.x - Fe, y: Je.to.y };
        return /* @__PURE__ */ i.createElement(nt, { key: `vx-tick-${Je.value}-${yt}`, className: "vx-axis-tick" }, !m.yAxis.hideTicks && /* @__PURE__ */ i.createElement(en, { key: `${Je.value}--hide-hideTicks`, from: Je.from, to: r.useLogScale ? Xe : Je.to, stroke: r.yAxis.tickColor, display: k === "horizontal" ? "none" : "block" }), m.yAxis.gridLines ? /* @__PURE__ */ i.createElement(en, { key: `${Je.value}--hide-hideGridLines`, display: (r.useLogScale && X).toString(), from: { x: Je.from.x + H, y: Je.from.y }, to: Je.from, stroke: "rgba(0,0,0,0.3)" }) : "", k === "horizontal" && E !== "stacked" && r.yAxis.labelPlacement === "On Date/Category Axis" && !r.yAxis.hideLabel && /* @__PURE__ */ i.createElement(
          xt,
          {
            transform: `translate(${Je.to.x - 5}, ${r.isLollipopChart ? Je.to.y - nn : Je.to.y - nn + (Number(r.barHeight * r.series.length) - Dn) / 2}) rotate(-${r.runtime.horizontal && r.runtime.yAxis.tickRotation || 0})`,
            verticalAnchor: "start",
            textAnchor: "end"
          },
          Je.formattedValue
        ), k === "horizontal" && E === "stacked" && r.yAxis.labelPlacement === "On Date/Category Axis" && !r.yAxis.hideLabel && /* @__PURE__ */ i.createElement(xt, { transform: `translate(${Je.to.x - 5}, ${Je.to.y - nn + (Number(r.barHeight) - Dn) / 2}) rotate(-${m.horizontal ? m.yAxis.tickRotation : 0})`, verticalAnchor: "start", textAnchor: "end" }, Je.formattedValue), k === "horizontal" && v === "Paired Bar" && !r.yAxis.hideLabel && /* @__PURE__ */ i.createElement(xt, { transform: `translate(${Je.to.x - 5}, ${Je.to.y - nn + Number(r.barHeight) / 2}) rotate(-${m.horizontal ? m.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, Je.formattedValue), k === "horizontal" && v === "Deviation Bar" && !r.yAxis.hideLabel && /* @__PURE__ */ i.createElement(xt, { transform: `translate(${Je.to.x - 5}, ${r.isLollipopChart ? Je.to.y - nn + 2 : Je.to.y - nn + Number(r.barHeight) / 2}) rotate(-${m.horizontal ? m.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, Je.formattedValue), k === "vertical" && v !== "Paired Bar" && !r.yAxis.hideLabel && /* @__PURE__ */ i.createElement(
          xt,
          {
            display: r.useLogScale ? X : "block",
            dx: r.useLogScale ? -6 : 0,
            x: r.runtime.horizontal ? Je.from.x + 2 : Je.to.x,
            y: Je.to.y + (r.runtime.horizontal ? st : 0),
            angle: -Number(r.yAxis.tickRotation) || 0,
            verticalAnchor: r.runtime.horizontal ? "start" : "middle",
            textAnchor: r.runtime.horizontal ? "start" : "end",
            fill: r.yAxis.tickLabelColor
          },
          Je.formattedValue
        ));
      }), !r.yAxis.hideAxis && /* @__PURE__ */ i.createElement(en, { from: Pe.axisFromPoint, to: m.horizontal ? { x: 0, y: r.visualizationType === "Forest Plot" ? j : Number(_) } : Pe.axisToPoint, stroke: "#000" }), Ie.domain()[0] < 0 && /* @__PURE__ */ i.createElement(en, { from: { x: Pe.axisFromPoint.x, y: Ie(0) }, to: { x: H, y: Ie(0) }, stroke: "#333" }), v === "Bar" && k === "horizontal" && Ce.domain()[0] < 0 && /* @__PURE__ */ i.createElement(en, { from: { x: Ce(0), y: 0 }, to: { x: Ce(0), y: Y }, stroke: "#333", strokeWidth: 2 }), /* @__PURE__ */ i.createElement(xt, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${-1 * m.yAxis.size}, ${ut}) rotate(-90)`, fontWeight: "bold", fill: r.yAxis.labelColor }, Pe.label));
    }),
    we && /* @__PURE__ */ i.createElement(KE, { scale: oe, left: Number(L - r.yAxis.rightAxisSize), label: r.yAxis.rightLabel, tickFormat: (Pe) => s(Pe, "right"), numTicks: m.yAxis.rightNumTicks || void 0, labelOffset: 45 }, (Pe) => {
      const ut = r.orientation === "horizontal" ? (Pe.axisToPoint.y - Pe.axisFromPoint.y) / 2 : (Pe.axisFromPoint.y - Pe.axisToPoint.y) / 2, st = Y / Pe.ticks.length / 2 - Y / Pe.ticks.length * (1 - r.barThickness) + 5;
      return /* @__PURE__ */ i.createElement(nt, { className: "right-axis" }, Pe.ticks.map((Je, yt) => /* @__PURE__ */ i.createElement(nt, { key: `vx-tick-${Je.value}-${yt}`, className: "vx-axis-tick" }, !m.yAxis.rightHideTicks && /* @__PURE__ */ i.createElement(en, { from: Je.from, to: Je.to, display: m.horizontal ? "none" : "block", stroke: r.yAxis.rightAxisTickColor }), m.yAxis.rightGridLines ? /* @__PURE__ */ i.createElement(en, { from: { x: Je.from.x + H, y: Je.from.y }, to: Je.from, stroke: "rgba(0,0,0,0.3)" }) : "", !r.yAxis.rightHideLabel && /* @__PURE__ */ i.createElement(xt, { x: Je.to.x, y: Je.to.y + (m.horizontal ? st : 0), verticalAnchor: m.horizontal ? "start" : "middle", textAnchor: "start", fill: r.yAxis.rightAxisTickLabelColor }, Je.formattedValue))), !r.yAxis.rightHideAxis && /* @__PURE__ */ i.createElement(en, { from: Pe.axisFromPoint, to: Pe.axisToPoint, stroke: "#333" }), /* @__PURE__ */ i.createElement(xt, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${r.yAxis.rightLabelOffsetSize ? r.yAxis.rightLabelOffsetSize : 0}, ${ut}) rotate(-90)`, fontWeight: "bold", fill: r.yAxis.rightAxisLabelColor }, Pe.label));
    }),
    W && r.topAxis.hasLine && /* @__PURE__ */ i.createElement(
      GE,
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
        top: m.horizontal && r.visualizationType !== "Forest Plot" ? Number(_) + Number(r.xAxis.axisPadding) : r.visualizationType === "Forest Plot" ? Y + Number(r.xAxis.axisPadding) : Y,
        left: r.visualizationType !== "Forest Plot" ? Number(m.yAxis.size) : 0,
        label: r[le].label,
        tickFormat: ct,
        scale: Ce,
        stroke: "#333",
        numTicks: je("xAxis"),
        tickStroke: "#333",
        tickValues: r.xAxis.manual ? xk(Re, Ce, r.xAxis.type === "date-time" ? je("xAxis") : r.xAxis.manualStep) : void 0
      },
      (Pe) => {
        const ut = r.visualizationType !== "Forest Plot" ? (Pe.axisToPoint.x - Pe.axisFromPoint.x) / 2 : n[0] / 2, st = (He) => /\s/.test(He), Je = Pe.ticks.some((He) => st(He.value)), yt = 8, nn = Math.max(...Pe.ticks.map((He) => y(He.formattedValue, `normal ${dn[r.fontSize]}px sans-serif`))), Dn = Je ? 180 : 100, X = Pe.ticks.map((He) => y(He.formattedValue, `normal ${dn[r.fontSize]}px sans-serif`)), Fe = X.reduce((He, Ot) => He + Ot, Dn), Xe = (H - Fe) / (Pe.ticks.length - 1);
        let We = [0];
        for (let He = 1; He < X.length; He++)
          We[He] = We[He - 1] + X[He - 1] + Xe;
        let mt = !1;
        X.forEach((He, Ot) => {
          if (We[Ot] + X[Ot] > We[Ot + 1]) {
            mt = !0;
            return;
          }
        });
        const it = mt && r.isResponsiveTicks ? nn + yt + 20 : 0;
        Number(r.xAxis.tickRotation) > 0 && Number(r.xAxis.tickRotation), r.dynamicMarginTop = it, r.xAxis.tickWidthMax = nn;
        let pt = 40;
        const Gt = /* @__PURE__ */ i.createElement(nt, { className: "bottom-axis", width: n[0] }, Pe.ticks.map((He, Ot, Zt) => {
          const Qt = String(He.value).startsWith("1") || He.value === 0.1 ? "block" : "none", Ut = Qt === "block" ? 16 : yt, Bt = { x: He.to.x, y: Ut }, Mt = y(He.formattedValue, `normal ${dn[r.fontSize]}px sans-serif`), _t = 100 / Zt.length;
          r.yAxis.tickRotation = r.isResponsiveTicks && r.orientation === "horizontal" ? 0 : r.yAxis.tickRotation, r.xAxis.tickRotation = r.isResponsiveTicks && r.orientation === "vertical" ? 0 : r.xAxis.tickRotation;
          const gt = r.isResponsiveTicks && mt ? -Number(r.xAxis.maxTickRotation) || -90 : -Number(r.runtime.xAxis.tickRotation), rn = Mt * Math.sin(gt * -1 * (Math.PI / 180)) + 25;
          return rn > pt && (pt = rn), /* @__PURE__ */ i.createElement(nt, { key: `vx-tick-${He.value}-${Ot}`, className: "vx-axis-tick" }, !r.xAxis.hideTicks && /* @__PURE__ */ i.createElement(en, { from: He.from, to: k === "horizontal" && r.useLogScale ? Bt : He.to, stroke: r.xAxis.tickColor, strokeWidth: Qt === "block" && r.useLogScale ? 1.3 : 1 }), !r.xAxis.hideLabel && /* @__PURE__ */ i.createElement(
            xt,
            {
              dy: r.orientation === "horizontal" && r.useLogScale ? 8 : 0,
              display: r.orientation === "horizontal" && r.useLogScale ? Qt : "block",
              x: He.to.x,
              y: He.to.y,
              angle: gt,
              verticalAnchor: gt < -50 ? "middle" : "start",
              textAnchor: gt ? "end" : "middle",
              width: mt && !r.isResponsiveTicks && !Number(r[le].tickRotation) ? _t : void 0,
              fill: r.xAxis.tickLabelColor
            },
            He.formattedValue
          ));
        }), !r.xAxis.hideAxis && /* @__PURE__ */ i.createElement(en, { from: Pe.axisFromPoint, to: Pe.axisToPoint, stroke: "#333" }), /* @__PURE__ */ i.createElement(
          xt,
          {
            x: ut,
            y: pt + 20,
            textAnchor: "middle",
            verticalAnchor: "start",
            fontWeight: "bold",
            fill: r.xAxis.labelColor
          },
          Pe.label
        ));
        return Z.current && Z.current.setAttribute("height", j + pt + (m.xAxis.label ? 50 : 0) + "px"), Gt;
      }
    ),
    v === "Paired Bar" && Lt(),
    v === "Deviation Bar" && ((kn = r.series) == null ? void 0 : kn.length) === 1 && /* @__PURE__ */ i.createElement(dk, { animatedChart: se, xScale: Ce, yScale: Ie, width: H, height: Y }),
    v === "Paired Bar" && /* @__PURE__ */ i.createElement(yk, { originalWidth: L, width: H, height: Y }),
    v === "Scatter Plot" && /* @__PURE__ */ i.createElement(
      ck,
      {
        xScale: Ce,
        yScale: Ie,
        getXAxisData: Ae,
        getYAxisData: ve,
        xMax: H,
        yMax: Y,
        handleTooltipMouseOver: Rt,
        handleTooltipMouseOff: Dt,
        handleTooltipClick: zt,
        tooltipData: Ge,
        showTooltip: ot
      }
    ),
    v === "Box Plot" && /* @__PURE__ */ i.createElement(uk, { xScale: Ce, yScale: Ie }),
    (v === "Area Chart" && r.visualizationSubType === "regular" || v === "Combo") && /* @__PURE__ */ i.createElement(tk, { xScale: Ce, yScale: Ie, yMax: Y, xMax: H, chartRef: Z, width: H, height: Y, handleTooltipMouseOver: Rt, handleTooltipMouseOff: Dt, tooltipData: Ge, showTooltip: ot }),
    (v === "Area Chart" && r.visualizationSubType === "stacked" || v === "Combo") && /* @__PURE__ */ i.createElement(rk, { xScale: Ce, yScale: Ie, yMax: Y, xMax: H, chartRef: Z, width: H, height: Y, handleTooltipMouseOver: Rt, handleTooltipMouseOff: Dt, tooltipData: Ge, showTooltip: ot }),
    (v === "Bar" || v === "Combo") && /* @__PURE__ */ i.createElement(
      sk,
      {
        xScale: Ce,
        yScale: Ie,
        seriesScale: Ue,
        xMax: H,
        yMax: Y,
        getXAxisData: Ae,
        getYAxisData: ve,
        animatedChart: se,
        visible: se,
        handleTooltipMouseOver: Rt,
        handleTooltipMouseOff: Dt,
        handleTooltipClick: zt,
        tooltipData: Ge,
        showTooltip: ot,
        chartRef: Z
      }
    ),
    (v === "Line" || v === "Combo") && /* @__PURE__ */ i.createElement(
      im,
      {
        xScale: Ce,
        yScale: Ie,
        getXAxisData: Ae,
        getYAxisData: ve,
        xMax: H,
        yMax: Y,
        seriesStyle: r.series,
        handleTooltipMouseOver: Rt,
        handleTooltipMouseOff: Dt,
        handleTooltipClick: zt,
        tooltipData: Ge,
        showTooltip: ot,
        chartRef: Z
      }
    ),
    (v === "Forecasting" || v === "Combo") && /* @__PURE__ */ i.createElement(
      hk,
      {
        showTooltip: ot,
        tooltipData: Ge,
        xScale: Ce,
        yScale: Ie,
        width: H,
        le: !0,
        height: Y,
        xScaleNoPadding: Qe,
        chartRef: Z,
        getXValueFromCoordinate: Ct,
        handleTooltipMouseOver: Rt,
        handleTooltipMouseOff: Dt,
        isBrush: !1
      }
    ),
    r.yAxis.anchors && r.yAxis.anchors.map((Pe) => /* @__PURE__ */ i.createElement(en, { strokeDasharray: g(Pe.lineStyle), stroke: "rgba(0,0,0,1)", className: "customAnchor", from: { x: 0 + r.yAxis.size, y: Ie(Pe.value) }, to: { x: H, y: Ie(Pe.value) }, display: m.horizontal ? "none" : "block" })),
    v === "Forest Plot" && /* @__PURE__ */ i.createElement(
      gk,
      {
        xScale: Ce,
        yScale: Ie,
        seriesScale: Ue,
        width: L,
        height: j,
        getXAxisData: Ae,
        getYAxisData: ve,
        animatedChart: se,
        visible: se,
        handleTooltipMouseOver: Rt,
        handleTooltipMouseOff: Dt,
        handleTooltipClick: zt,
        tooltipData: Ge,
        showTooltip: ot,
        chartRef: Z,
        config: r
      }
    ),
    ["Line", "Bar", "Combo", "Area Chart"].includes(r.visualizationType) && !N && /* @__PURE__ */ i.createElement(Yk, { xScaleBrush: rt, yScale: Ie, xMax: H, yMax: Y }),
    v !== "Bar" && v !== "Paired Bar" && v !== "Box Plot" && v !== "Area Chart" && v !== "Scatter Plot" && v !== "Deviation Bar" && v !== "Forecasting" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(im, { xScale: Ce, yScale: Ie, getXAxisData: Ae, getYAxisData: ve, xMax: H, yMax: Y, seriesStyle: r.series })),
    r.yAxis.anchors && r.yAxis.anchors.map((Pe, ut) => {
      let st = Ie(Pe.value);
      if (!Pe.value)
        return;
      const Je = k === "horizontal" && v === "Bar" ? r.barHeight / 4 : 0;
      if (st)
        return (
          // prettier-ignore
          /* @__PURE__ */ i.createElement(
            en,
            {
              key: `yAxis-${Pe.value}--${ut}`,
              strokeDasharray: g(Pe.lineStyle),
              stroke: Pe.color ? Pe.color : "rgba(0,0,0,1)",
              className: "anchor-y",
              from: { x: 0 + Ht, y: st - Je },
              to: { x: L - r.yAxis.rightAxisSize, y: st - Je }
            }
          )
        );
    }),
    r.xAxis.anchors && r.xAxis.anchors.map((Pe, ut) => {
      let st = M;
      k === "horizontal" && (st = T);
      let Je = Sn(st) ? Ce(a(Pe.value, !1)) : Ce(Pe.value);
      if (Je)
        return (
          // prettier-ignore
          /* @__PURE__ */ i.createElement(
            en,
            {
              key: `xAxis-${Pe.value}--${ut}`,
              strokeDasharray: g(Pe.lineStyle),
              stroke: Pe.color ? Pe.color : "rgba(0,0,0,1)",
              fill: Pe.color ? Pe.color : "rgba(0,0,0,1)",
              className: "anchor-x",
              from: { x: Number(Je) + Number(Ht), y: 0 },
              to: { x: Number(Je) + Number(Ht), y: Y }
            }
          )
        );
    }),
    r.visualizationType !== "Bar" && r.visualizationType !== "Combo" && /* @__PURE__ */ i.createElement(ph, { xScale: Ce, handleTooltipClick: zt, handleTooltipMouseOff: Dt, handleTooltipMouseOver: Rt, showTooltip: ot, hideTooltip: dt, tooltipData: Ge, yMax: Y, width: L }),
    qt && ot && Ge && r.visual.verticalHoverLine && /* @__PURE__ */ i.createElement(nt, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ i.createElement(en, { from: { x: Ge.dataXPosition - 10, y: 0 }, to: { x: Ge.dataXPosition - 10, y: Y }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" })),
    qt && ot && Ge && r.visual.horizontalHoverLine && /* @__PURE__ */ i.createElement(nt, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: r.yAxis.size ? r.yAxis.size : 0 }, /* @__PURE__ */ i.createElement(en, { from: { x: 0, y: Ge.dataYPosition }, to: { x: H, y: Ge.dataYPosition }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    r.filters && r.filters.values.length === 0 && t.length === 0 && /* @__PURE__ */ i.createElement(xt, { x: Number(r.yAxis.size) + Number(H / 2), y: j / 2 - r.xAxis.padding / 2, textAnchor: "middle" }, r.chartMessage.noData),
    r.visualizationType === "Bar" && r.tooltips.singleSeries && r.visual.horizontalHoverLine && /* @__PURE__ */ i.createElement(nt, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: r.yAxis.size ? r.yAxis.size : 0 }, /* @__PURE__ */ i.createElement(en, { from: { x: 0, y: he.y }, to: { x: H, y: he.y }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    r.visualizationType === "Bar" && r.tooltips.singleSeries && r.visual.verticalHoverLine && /* @__PURE__ */ i.createElement(nt, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ i.createElement(en, { from: { x: he.x, y: 0 }, to: { x: he.x, y: Y }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" }))
  ), Ge && Object.entries(Ge.data).length > 0 && Tt && ot && Ge.dataYPosition && Ge.dataXPosition && !r.tooltips.singleSeries && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${r.tooltips.opacity / 100}) !important`), /* @__PURE__ */ i.createElement(Fg, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: tn, top: ln }, /* @__PURE__ */ i.createElement("ul", null, typeof Ge == "object" && Object.entries(Ge.data).map((Pe, ut) => /* @__PURE__ */ i.createElement(cn, { item: Pe, key: ut }))))), me() && /* @__PURE__ */ i.createElement(ay, { id: `cdc-open-viz-tooltip-${m.uniqueId}`, variant: "light", arrowColor: "rgba(0,0,0,0)", className: "tooltip", style: { background: `rgba(255,255,255, ${r.tooltips.opacity / 100})`, color: "black" } }), /* @__PURE__ */ i.createElement("div", { className: "animation-trigger", ref: V })));
};
var qk = ["id", "markerWidth", "markerHeight", "markerUnits", "children"];
function Bf() {
  return Bf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Bf.apply(this, arguments);
}
function Gk(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function cy(e) {
  var t = e.id, n = e.markerWidth, r = n === void 0 ? 3 : n, a = e.markerHeight, o = a === void 0 ? 3 : a, f = e.markerUnits, s = f === void 0 ? "userSpaceOnUse" : f, c = e.children, d = Gk(e, qk);
  return /* @__PURE__ */ i.createElement("defs", null, /* @__PURE__ */ i.createElement("marker", Bf({
    id: t,
    markerWidth: r,
    markerHeight: o,
    markerUnits: s
  }, d), c));
}
cy.propTypes = {
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
var Zk = ["id", "size", "strokeWidth"];
function If() {
  return If = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, If.apply(this, arguments);
}
function Qk(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Jk(e) {
  var t = e.id, n = e.size, r = n === void 0 ? 9 : n, a = e.strokeWidth, o = a === void 0 ? 1 : a, f = Qk(e, Zk), s = r + o * 2, c = r, d = s / 2, g = "0 0, " + r + " " + r / 2 + ", 0 " + r;
  return /* @__PURE__ */ i.createElement(cy, If({
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
const ew = (e) => {
  var re;
  const { width: t, height: n } = e, { transformedData: r, config: a, parseDate: o, formatDate: f, seriesHighlight: s, formatNumber: c, colorScale: d, handleChartAriaLabels: g } = ue.useContext(bt);
  let y = Number(t);
  const { minValue: v, maxValue: E } = Oc(a, r), k = { top: 5, right: 10, bottom: 10, left: 10 }, M = Number(n), T = y - a.runtime.yAxis.size, m = M - k.top - 20, D = (K) => a.runtime.xAxis.type === "date" ? o(K[a.runtime.originalXAxis.dataKey]).getTime() : K[a.runtime.originalXAxis.dataKey], L = (K, q) => K[q];
  let _, N;
  const { max: R, min: j } = a.runtime.yAxis, H = Number(R) >= Number(E), Y = Number(j) <= Number(v);
  if (r) {
    let K = Number(j && Y ? j : v), q = Number(R && H ? R : Number.MIN_VALUE);
    if (q === Number.MIN_VALUE && (q = E), a.runtime.yAxis.paddingPercent) {
      let W = (q - K) * a.runtime.yAxis.paddingPercent;
      K -= W, q += W;
    }
    let me = r.map((W) => D(W));
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
  const Q = [_.domain()[0], _.domain()[_.domain().length - 1]];
  return /* @__PURE__ */ i.createElement(_r, { component: "SparkLine" }, /* @__PURE__ */ i.createElement("svg", { role: "img", "aria-label": g(a), width: t, height: 100, className: "sparkline", tabIndex: 0 }, /* @__PURE__ */ i.createElement("title", null, `Spark line graphic with the title ${a.title ? a.title : "No Title Found"}`), ((re = a.runtime.lineSeriesKeys) == null ? void 0 : re.length) > 0 ? a.runtime.lineSeriesKeys : a.runtime.seriesKeys.map((K, q) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    nt,
    {
      style: { width: y },
      className: "sparkline-group",
      key: `series-${K}`,
      opacity: a.legend.behavior === "highlight" && s.length > 0 && s.indexOf(K) === -1 ? 0.5 : 1,
      display: a.legend.behavior === "highlight" || s.length === 0 || s.indexOf(K) !== -1 ? "block" : "none"
    },
    r.map((me, W) => /* @__PURE__ */ i.createElement(nt, { key: `series-${K}-point-${W}` }, /* @__PURE__ */ i.createElement(xt, { display: a.labels ? "block" : "none", x: _(D(me)), y: N(L(me, K)), fill: d ? d(a.runtime.seriesLabels ? a.runtime.seriesLabels[K] : K) : "#000", textAnchor: "middle" }, c(me[K])))),
    /* @__PURE__ */ i.createElement(
      da,
      {
        curve: wc,
        data: r,
        x: (me) => _(D(me)),
        y: (me) => N(L(me, K)),
        stroke: d ? d(a.runtime.seriesLabels ? a.runtime.seriesLabels[K] : K) : "#000",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        markerEnd: `url(#arrow--${q})`
      }
    ),
    /* @__PURE__ */ i.createElement(Jk, { id: `arrow--${q}`, refX: 2, size: 6, markerEnd: `url(#arrow--${q})`, strokeOpacity: 1, fillOpacity: 1, fill: d ? d(a.runtime.seriesLabels ? a.runtime.seriesLabels[K] : K) : "#000" })
  ), /* @__PURE__ */ i.createElement(
    Hu,
    {
      top: m + k.top,
      hideAxisLine: !0,
      hideTicks: !0,
      scale: _,
      tickValues: Q,
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
}, tw = ue.forwardRef((e, t) => {
  const {
    config: n,
    colorScale: r,
    seriesHighlight: a,
    highlight: o,
    tableData: f,
    highlightReset: s,
    transformedData: c,
    currentViewport: d
  } = ue.useContext(bt);
  if (!n.legend)
    return null;
  const g = jg(n, f, c, r);
  return !["Box Plot", "Pie"].includes(n.visualizationType) && /* @__PURE__ */ i.createElement(Vg, { ref: t, skipId: e.skipId || "legend", config: n, colorScale: r, seriesHighlight: a, highlight: o, highlightReset: s, currentViewport: d, formatLabels: g });
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
}, Vu = (e) => /* @__PURE__ */ ue.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...e }, /* @__PURE__ */ ue.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), nw = ({ name: e }) => {
  var s, c, d, g, y;
  const { config: t, rawData: n, updateConfig: r } = ue.useContext(bt);
  if (t.visualizationType !== "Forest Plot")
    return;
  const a = (v) => {
    v.orientation === "horizontal" && (v.labels = !1), v.table.show === void 0 && (v.table.show = !isDashboard), v.visualizationType === "Combo" && (v.orientation = "vertical");
  }, o = (v = !0) => {
    let E = {};
    return n.forEach((k) => {
      Object.keys(k).forEach((M) => E[M] = !0);
    }), v && Object.keys(E).forEach((k) => {
      (t.series && t.series.filter((M) => M.dataKey === k).length > 0 || t.confidenceKeys && Object.keys(t.confidenceKeys).includes(k)) && delete E[k];
    }), Object.keys(E);
  }, f = (v, E, k, M) => {
    if (v === "boxplot" && E === "legend") {
      r({
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
      r({
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
      r(L);
      return;
    }
    if (v === "columns" && E !== "" && k !== "") {
      r({
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
      a(L), r(L);
      return;
    }
    const T = Array.isArray(t[v]);
    let m = T ? [...t[v], M] : { ...t[v], [k]: M };
    E !== null && (T ? (m = [...t[v]], m[E] = { ...m[E], [k]: M }) : typeof M == "string" ? m[E] = M : m = { ...t[v], [E]: { ...t[v][E], [k]: M } });
    let D = { ...t, [v]: m };
    a(D), r(D);
  };
  return /* @__PURE__ */ i.createElement(An, null, /* @__PURE__ */ i.createElement(Pn, null, /* @__PURE__ */ i.createElement(Rn, null, e, (!t.forestPlot.estimateField || !t.forestPlot.upper || !t.forestPlot.lower) && /* @__PURE__ */ i.createElement(Vu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(
    wt,
    {
      value: t.xAxis.dataKey || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Study Column",
      initial: "Select",
      required: !0,
      updateField: f,
      options: o(!1),
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
    }
  ), /* @__PURE__ */ i.createElement(
    wt,
    {
      value: t.forestPlot.type,
      label: "Forest Plot Type",
      initial: "Select",
      required: !0,
      onChange: (v) => {
        v.target.value !== "" && v.target.value !== "Select" && r({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            type: v.target.value
          }
        }), v.target.value = "";
      },
      options: ["Linear", "Logarithmic"],
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Linear - Typically used for continuous outcomes. Line of no effect is positioned on 0 (zero) ", /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("br", null), " Logarithmic - Typically used for binary outcomes such as risk ratios and odds ratios. Line of no effect is positioned on 1.")))
    }
  ), /* @__PURE__ */ i.createElement(Ze, { type: "text", value: ((s = t.forestPlot) == null ? void 0 : s.title) || "", updateField: f, section: "forestPlot", fieldName: "title", label: "Plot Title" }), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("h4", null, "Column Settings"), /* @__PURE__ */ i.createElement(
    wt,
    {
      value: t.forestPlot.estimateField,
      label: "Point Estimate Column",
      initial: t.forestPlot.estimateField || "Select",
      required: !0,
      onChange: (v) => {
        v.target.value !== "" && v.target.value !== "Select" && r({
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
    wt,
    {
      value: t.forestPlot.shape,
      label: "Point Estimate Shape",
      onChange: (v) => {
        v.target.value !== "" && v.target.value !== "Select" && r({
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
    wt,
    {
      value: t.forestPlot.lower,
      label: "Lower CI Column",
      required: !0,
      initial: t.forestPlot.lower || "Select",
      onChange: (v) => {
        v.target.value !== "" && v.target.value !== "Select" && r({
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
    wt,
    {
      value: t.forestPlot.upper,
      label: "Upper CI Column",
      initial: t.forestPlot.upper || "Select",
      required: !0,
      onChange: (v) => {
        v.target.value !== "" && v.target.value !== "Select" && r({
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
        r({
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
        r({
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
        r({
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
        r({
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
        r({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            rightWidthOffsetMobile: v.target.value
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement(Ze, { type: "number", min: 20, max: 45, value: t.forestPlot.rowHeight ? t.forestPlot.rowHeight : 10, updateField: f, section: "forestPlot", fieldName: "rowHeight", label: "Row Height", placeholder: "10" }), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("h4", null, "Labels Settings"), /* @__PURE__ */ i.createElement(Ze, { type: "text", value: ((g = t.forestPlot) == null ? void 0 : g.leftLabel) || "", updateField: f, section: "forestPlot", fieldName: "leftLabel", label: "Left Label" }), /* @__PURE__ */ i.createElement(Ze, { type: "text", value: ((y = t.forestPlot) == null ? void 0 : y.rightLabel) || "", updateField: f, section: "forestPlot", fieldName: "rightLabel", label: "Right Label" }), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement(
    wt,
    {
      value: t.forestPlot.radius.scalingColumn,
      label: "Weight Column",
      initial: "Select",
      onChange: (v) => {
        v.target.value !== "" && v.target.value !== "Select" && r({
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
        r({
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
        r({
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
}, rl = i.createContext(), rw = (e) => {
  const { updateConfig: t, config: n, rawData: r } = ue.useContext(bt), { getColumns: a, selectComponent: o } = e, f = ["Line", "dashed-sm", "dashed-md", "dashed-lg"], s = (c, d, g) => {
    let y = [...n.series];
    if (y[c][g] = d, g === "type" && d === "Bar" && (y[c].axis = "Left"), y[c].type === "Forecasting") {
      let v = Array.from(new Set(r.map((k) => k[y[c].dataKey]))), E = [];
      v.forEach((k) => {
        E.push({ key: k });
      }), y[c].stages = E, y[c].stageColumn = y[c].dataKey;
    }
    t({ ...n, series: y });
  };
  return /* @__PURE__ */ i.createElement(rl.Provider, { value: { updateSeries: s, supportedRightAxisTypes: f, getColumns: a, selectComponent: o } }, e.children);
}, aw = (e) => {
  const { config: t, updateConfig: n } = ue.useContext(bt), { series: r, index: a } = e;
  if (!(() => {
    let c = !1;
    return t.visualizationSubType === "stacked" || ["Line", "dashed-sm", "dashed-md", "dashed-lg", "Area Chart"].some((g) => g.includes(r.type)) && (c = !0), c;
  })())
    return;
  const f = (c, d) => {
    let g = [...t.series];
    g[c].lineType = d, n({ ...t, series: g });
  };
  let s = [];
  return Object.keys(xc).map((c) => s.push(xc[c])), /* @__PURE__ */ i.createElement(
    Ha,
    {
      initial: "Select an option",
      value: r.lineType ? r.lineType : "curveLinear",
      label: "Series Line Type",
      onChange: (c) => {
        f(a, c.target.value);
      },
      options: s
    }
  );
}, iw = (e) => {
  const { config: t } = ue.useContext(bt), { updateSeries: n } = ue.useContext(rl), { index: r, series: a } = e, o = () => {
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
          n(r, f.target.value, "type");
        },
        options: o()
      }
    );
}, ow = (e) => {
  const { config: t, updateConfig: n, rawData: r } = ue.useContext(bt), { updateSeries: a, getColumns: o } = ue.useContext(rl), { index: f, series: s } = e;
  return /* @__PURE__ */ i.createElement(
    Ha,
    {
      initial: "Select an option",
      value: s.stageColumn,
      label: "Add Forecasting Stages",
      onChange: (c) => {
        let d = [], g = new Set(r == null ? void 0 : r.map((v) => v[c.target.value]));
        g = Array.from(g), g = g.filter((v) => v !== void 0), g.forEach((v) => d.push({ key: v }));
        const y = [...t.series];
        y[f] = { ...y[f], stages: d, stageColumn: c.target.value }, n({
          ...t,
          series: y
        });
      },
      options: o(!1)
    }
  );
}, lw = (e) => {
  const { config: t, rawData: n } = ue.useContext(bt), { updateSeries: r } = ue.useContext(rl), { index: a, series: o } = e;
  if (o.type !== "Forecasting" || !n || !o.stageColumn)
    return;
  let f = new Set(n.map((s) => s[o.stageColumn]));
  return f = Array.from(f), f = f.filter((s) => s !== void 0), /* @__PURE__ */ i.createElement(
    Ha,
    {
      initial: "Select an option",
      value: o.stageItem,
      label: "Forecasting Item Column",
      onChange: (s) => {
        r(a, s.target.value, "stageItem");
      },
      options: f
    }
  );
}, sw = (e) => {
  const { config: t } = ue.useContext(bt), { updateSeries: n, supportedRightAxisTypes: r } = ue.useContext(rl), { index: a, series: o } = e;
  if (!(t.visualizationType !== "Combo" || !o) && r.includes(o.type))
    return /* @__PURE__ */ i.createElement(
      Ha,
      {
        initial: "Select an option",
        value: o.axis ? o.axis : "Left",
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
}, uw = (e) => {
  var o;
  const { config: t, updateConfig: n } = ue.useContext(bt), { index: r, series: a } = e;
  if (a.type === "Forecasting" && a)
    return (o = a == null ? void 0 : a.stages) == null ? void 0 : o.map((f, s) => {
      var c, d, g, y;
      return /* @__PURE__ */ i.createElement(
        Ha,
        {
          key: `${f}--${s}`,
          initial: "Select an option",
          value: (d = (c = t.series) == null ? void 0 : c[r].stages) != null && d[s].color ? (y = (g = t.series) == null ? void 0 : g[r].stages) == null ? void 0 : y[s].color : "Select",
          label: `${f.key} Series Color`,
          onChange: (v) => {
            const E = [...t.series], k = E[r].stages;
            k[s].color = v.target.value, E[r] = { ...E[r], stages: k }, n({
              ...t,
              series: E
            });
          },
          options: Object.keys(Uu)
        }
      );
    });
}, cw = (e) => {
  var f;
  const { config: t, updateConfig: n } = ue.useContext(bt), { series: r, index: a } = e, { getColumns: o } = ue.useContext(rl);
  if (r.type === "Forecasting")
    return /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Confidence Interval Groups"), /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement(_i, { allowZeroExpanded: !0 }, (f = r == null ? void 0 : r.confidenceIntervals) == null ? void 0 : f.map((s, c) => {
      const d = s.showInTooltip ? s.showInTooltip : !1, g = (y, v, E) => {
        y.preventDefault();
        let k = [...t.series];
        k[v].confidenceIntervals[E].showInTooltip = !d, n({
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
            E[a] = { ...E[a], confidenceIntervals: [...v] }, n({
              ...t,
              series: E
            });
          }
        },
        "Remove"
      )))), /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement("div", { className: "input-group" }, /* @__PURE__ */ i.createElement("label", { htmlFor: "showInTooltip" }, "Show In Tooltip"), /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox--small", onClick: (y) => g(y, a, c) }, /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, d && /* @__PURE__ */ i.createElement(Pm, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ i.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: "showInTooltip", checked: d || !1, readOnly: !0 }))), /* @__PURE__ */ i.createElement(
        Ha,
        {
          initial: "Select an option",
          value: t.series[a].confidenceIntervals[c].low ? t.series[a].confidenceIntervals[c].low : "Select",
          label: "Low Confidence Interval",
          onChange: (y) => {
            const v = [...t.series[a].confidenceIntervals];
            v[c].low = y.target.value;
            const E = [...t.series];
            E[a] = { ...E[a], confidenceIntervals: v }, n({
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
            E[a] = { ...E[a], confidenceIntervals: v }, n({
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
          d[a] = { ...d[a], confidenceIntervals: [...c, { high: "", low: "" }] }, n({
            ...t,
            series: d
          });
        }
      },
      "Add Confidence Interval Group"
    )));
}, dw = (e) => {
  const { series: t, index: n } = e, { config: r, updateConfig: a } = ue.useContext(bt);
  if (!["Line", "Combo", "dashed-sm", "dashed-md", "dashed-lg"].includes(t.type))
    return;
  const f = (s, c, d, g) => {
    let y = [...r.series], v = { ...r.runtime.seriesLabels };
    y[s].weight = c && Math.max(Number(d), Math.min(Number(g), Number(c))), v[y[s].dataKey] = y[s].weight ? y[s].weight : y[s].dataKey;
    const E = {
      ...r,
      series: y,
      runtime: {
        ...r.runtime,
        seriesLabels: v
      }
    };
    a(E);
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", { htmlFor: "series-weight" }, "Line Weight"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "number",
      key: `series-weight-${n}`,
      value: t.weight ? t.weight : "",
      min: "1",
      max: "9",
      onChange: (s) => {
        f(n, s.target.value, s.target.min, s.target.max);
      }
    }
  ));
}, fw = (e) => {
  const { series: t, index: n } = e, { config: r, updateConfig: a } = ue.useContext(bt);
  if (!["Bar", "Line", "Area Chart", "Combo", "Deviation Bar", "Paired Bar", "Scatter Plot", "dashed-sm", "dashed-md", "dashed-lg"].includes(t.type))
    return;
  const f = (s, c) => {
    let d = [...r.series], g = { ...r.runtime.seriesLabels };
    d[s].name = c, g[d[s].dataKey] = d[s].name ? d[s].name : d[s].dataKey;
    let y = {
      ...r,
      series: d,
      runtime: {
        ...r.runtime,
        seriesLabels: g
      }
    };
    a(y);
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", { htmlFor: "series-name" }, "Series Name"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      key: `series-name-${n}`,
      value: t.name ? t.name : "",
      onChange: (s) => {
        f(n, s.target.value);
      }
    }
  ));
}, hw = (e) => {
  const { series: t, index: n } = e, { config: r, updateConfig: a } = ue.useContext(bt);
  if (["Paired Bar", "Scatter Plot", "Deviation Bar"].includes(r.visualizationType))
    return;
  const o = (f) => {
    let s = [...r.series];
    s[f].tooltip && s[f].tooltip, s[f].tooltip = !s[f].tooltip, a({
      ...r,
      series: s
    });
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: "input-group" }, /* @__PURE__ */ i.createElement("label", { htmlFor: `series-tooltip--${n}` }, "Show In Tooltip"), /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox--small", onClick: (f) => o(n) }, /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, t.tooltip && /* @__PURE__ */ i.createElement(Pm, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ i.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: `series-tooltip--${n}`, checked: t.tooltip ? t.tooltip : !1, readOnly: !0 }))));
}, pw = (e) => {
  const { config: t, updateConfig: n } = ue.useContext(bt), { series: r, index: a } = e, o = (s) => {
    let c = [...t.series], d = -1;
    for (let g = 0; g < c.length; g++)
      if (c[g].dataKey === s) {
        d = g;
        break;
      }
    if (d !== -1) {
      c.splice(d, 1);
      let g = { ...t, series: c };
      c.length === 0 && delete g.series, n(g);
    }
    t.visualizationType === "Paired Bar" && n({
      ...t,
      series: []
    });
  }, f = (s, c, d) => {
    s.preventDefault(), o(c.dataKey);
  };
  return t.series && t.series.length > 1 && /* @__PURE__ */ i.createElement("button", { className: "series-list__remove", onClick: (s) => f(s, r) }, "Remove");
}, dy = (e) => {
  const { config: t } = ue.useContext(bt), { series: n, getItemStyle: r, sortableItemStyles: a, chartsWithOptions: o, index: f } = e;
  return /* @__PURE__ */ i.createElement(gy, { key: n.dataKey, draggableId: `draggableFilter-${n.dataKey}`, index: f }, (s, c) => /* @__PURE__ */ i.createElement("div", { key: f, className: c.isDragging ? "currently-dragging" : "", style: r(c.isDragging, s.draggableProps.style, a), ref: s.innerRef, ...s.draggableProps, ...s.dragHandleProps }, /* @__PURE__ */ i.createElement(_i, { allowZeroExpanded: !0 }, /* @__PURE__ */ i.createElement(An, { className: "series-item series-item--chart" }, /* @__PURE__ */ i.createElement(Pn, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(Rn, { className: o.includes(t.visualizationType) ? "accordion__button" : "accordion__button hide-arrow" }, /* @__PURE__ */ i.createElement(kt, { display: "move", size: 15, style: { cursor: "default" } }), n.dataKey, /* @__PURE__ */ i.createElement(Kr.Button.Remove, { series: n, index: f }))), o.includes(t.visualizationType) && /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(Kr.Input.Name, { series: n, index: f }), /* @__PURE__ */ i.createElement(Kr.Input.Weight, { series: n, index: f }), /* @__PURE__ */ i.createElement(Kr.Dropdown.SeriesType, { series: n, index: f }), /* @__PURE__ */ i.createElement(Kr.Dropdown.AxisPosition, { series: n, index: f }), /* @__PURE__ */ i.createElement(Kr.Dropdown.LineType, { series: n, index: f }), /* @__PURE__ */ i.createElement(Kr.Dropdown.ForecastingColor, { series: n, index: f }), /* @__PURE__ */ i.createElement(Kr.Dropdown.ConfidenceInterval, { series: n, index: f }), /* @__PURE__ */ i.createElement(Kr.Checkbox.DisplayInTooltip, { series: n, index: f }))))));
}, mw = (e) => {
  const { series: t, getItemStyle: n, sortableItemStyles: r, chartsWithOptions: a } = e;
  return t.map((o, f) => /* @__PURE__ */ i.createElement(dy, { getItemStyle: n, sortableItemStyles: r, chartsWithOptions: a, series: o, index: f, key: `series-list-${f}` }));
}, Kr = {
  Wrapper: rw,
  Dropdown: {
    SeriesType: iw,
    AxisPosition: sw,
    ConfidenceInterval: cw,
    LineType: aw,
    ForecastingStage: ow,
    ForecastingColumn: lw,
    ForecastingColor: uw
  },
  Input: {
    Name: fw,
    Weight: dw
  },
  Checkbox: {
    DisplayInTooltip: hw
  },
  Button: {
    Remove: pw
  },
  Item: dy,
  List: mw
}, gw = ue.memo(({ config: e, updateConfig: t }) => {
  let n = (c, d, g) => {
    let y = [];
    e.regions && (y = [...e.regions]), y[g][c] = d, t({ ...e, regions: y });
  }, r = (c, d, g, y, v) => n(g, y, v), a = (c) => {
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
    ), /* @__PURE__ */ i.createElement(Ze, { value: c, label: "Region Label", fieldName: "label", i: k, updateField: r }), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(Ze, { value: d, label: "Text Color", fieldName: "color", updateField: (T, m, D, L) => n(D, L, k) }), /* @__PURE__ */ i.createElement(Ze, { value: v, label: "Background", fieldName: "background", updateField: (T, m, D, L) => n(D, L, k) })), /* @__PURE__ */ i.createElement(
      wt,
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
      Ze,
      {
        value: g,
        label: e.regions[k].fromType === "Fixed" || !((M = e.regions[k]) != null && M.fromType) ? "From Value" : "Previous Number of Days",
        fieldName: "from",
        updateField: (T, m, D, L) => n(D, L, k),
        tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "When using categorical (linear scale) match the data set value. When using date (linear / date time scale) match the x-axis value.")))
      }
    )), /* @__PURE__ */ i.createElement(
      wt,
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
    ), (e.regions[k].toType === "Fixed" || !e.regions[k].toType) && /* @__PURE__ */ i.createElement(Ze, { value: y, label: "To Value", fieldName: "to", updateField: (T, m, D, L) => n(D, L, k) }));
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
}), yw = ({ name: e }) => {
  const { visSupportsRegions: t } = Ds(), { config: n, updateConfig: r } = ue.useContext(bt);
  return t() ? /* @__PURE__ */ i.createElement(An, null, /* @__PURE__ */ i.createElement(Pn, null, /* @__PURE__ */ i.createElement(Rn, null, e)), /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(gw, { config: n, updateConfig: r }))) : null;
}, Rh = ue.createContext(null), Lh = () => {
  const e = ue.useContext(Rh);
  if (e === null)
    throw new Error("COVE: editor panel context is null.");
  return e;
}, vw = (e) => {
  const { config: t } = ue.useContext(bt), { updateField: n } = Lh(), { enabledChartTypes: r, visHasNumbersOnBars: a, visHasLabelOnData: o, visSupportsChartHeight: f, visSupportsSuperTitle: s, visSupportsFootnotes: c } = Ds(), { visualizationType: d, visualizationSubType: g, barStyle: y } = t, v = () => (d === "Bar" || d === "Deviation Bar") && g !== "stacked" && (t.orientation === "horizontal" || t.orientation === "vertical") ? ["flat", "rounded", "lollipop"] : ["flat", "rounded"];
  return /* @__PURE__ */ i.createElement(An, null, " ", /* @__PURE__ */ i.createElement(Pn, null, /* @__PURE__ */ i.createElement(Rn, null, "General")), /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(wt, { value: d, fieldName: "visualizationType", label: "Chart Type", updateField: n, options: r }), (d === "Bar" || d === "Combo" || d === "Area Chart") && /* @__PURE__ */ i.createElement(wt, { value: g || "Regular", fieldName: "visualizationSubType", label: "Chart Subtype", updateField: n, options: ["regular", "stacked"] }), d === "Area Chart" && g === "stacked" && /* @__PURE__ */ i.createElement(wt, { value: t.stackedAreaChartLineType || "Linear", fieldName: "stackedAreaChartLineType", label: "Stacked Area Chart Line Type", updateField: n, options: Object.keys(xc) }), d === "Bar" && /* @__PURE__ */ i.createElement(wt, { value: t.orientation || "vertical", fieldName: "orientation", label: "Orientation", updateField: n, options: ["vertical", "horizontal"] }), d === "Deviation Bar" && /* @__PURE__ */ i.createElement(wt, { label: "Orientation", options: ["horizontal"] }), (d === "Bar" || d === "Deviation Bar") && /* @__PURE__ */ i.createElement(wt, { value: t.isLollipopChart ? "lollipop" : y || "flat", fieldName: "barStyle", label: "bar style", updateField: n, options: v() }), (d === "Bar" || d === "Deviation Bar") && y === "rounded" && /* @__PURE__ */ i.createElement(wt, { value: t.tipRounding || "top", fieldName: "tipRounding", label: "tip rounding", updateField: n, options: ["top", "full"] }), (d === "Bar" || d === "Deviation Bar") && y === "rounded" && /* @__PURE__ */ i.createElement(wt, { value: t.roundingStyle || "standard", fieldName: "roundingStyle", label: "rounding style", updateField: n, options: ["standard", "shallow", "finger"] }), d === "Bar" && t.orientation === "horizontal" && /* @__PURE__ */ i.createElement(wt, { value: t.yAxis.labelPlacement || "Below Bar", section: "yAxis", fieldName: "labelPlacement", label: "Label Placement", updateField: n, options: ["Below Bar", "On Date/Category Axis"] }), a() ? /* @__PURE__ */ i.createElement(ft, { value: t.yAxis.displayNumbersOnBar, section: "yAxis", fieldName: "displayNumbersOnBar", label: t.isLollipopChart ? "Display Numbers after Bar" : "Display Numbers on Bar", updateField: n }) : o() && /* @__PURE__ */ i.createElement(ft, { value: t.labels, fieldName: "labels", label: "Display label on data", updateField: n }), d === "Pie" && /* @__PURE__ */ i.createElement(wt, { fieldName: "pieType", label: "Pie Chart Type", updateField: n, options: ["Regular", "Donut"] }), /* @__PURE__ */ i.createElement(
    Ze,
    {
      value: t.title || "Chart Title",
      fieldName: "title",
      id: "title",
      label: "Title",
      placeholder: "Chart Title",
      updateField: n,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Title is required to set the name of the download file but can be hidden using the option below.")))
    }
  ), /* @__PURE__ */ i.createElement(ft, { value: t.showTitle, fieldName: "showTitle", label: "Show Title", updateField: n }), s() && /* @__PURE__ */ i.createElement(
    Ze,
    {
      value: t.superTitle,
      updateField: n,
      fieldName: "superTitle",
      label: "Super Title",
      placeholder: "Super Title",
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Super Title")))
    }
  ), /* @__PURE__ */ i.createElement(
    Ze,
    {
      type: "textarea",
      value: t.introText,
      updateField: n,
      fieldName: "introText",
      label: "Message",
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Intro Text")))
    }
  ), /* @__PURE__ */ i.createElement(
    Ze,
    {
      type: "textarea",
      value: t.description,
      fieldName: "description",
      label: "Subtext/Citation",
      updateField: n,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), c() && /* @__PURE__ */ i.createElement(
    Ze,
    {
      type: "textarea",
      value: t.footnotes,
      updateField: n,
      fieldName: "footnotes",
      label: "Footnotes",
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Footnotes")))
    }
  ), f() && t.orientation === "vertical" && /* @__PURE__ */ i.createElement(Ze, { type: "number", value: t.heights.vertical, section: "heights", fieldName: "vertical", label: "Chart Height", updateField: n })));
}, xw = (e) => {
  const { config: t } = ue.useContext(bt), { boxplot: n } = t;
  if (t.visualizationType !== "Box Plot")
    return;
  const { updateField: r } = Lh();
  return /* @__PURE__ */ i.createElement(An, null, /* @__PURE__ */ i.createElement(Pn, null, /* @__PURE__ */ i.createElement(Rn, null, e.name)), /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement("h4", { style: { fontSize: "18px" } }, "Labels for 5-Number Summary"), /* @__PURE__ */ i.createElement(
    Ze,
    {
      type: "text",
      value: n.labels.maximum,
      fieldName: "maximum",
      section: "boxplot",
      subsection: "labels",
      label: "Maximum",
      updateField: r,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Highest value, excluding outliers")))
    }
  ), /* @__PURE__ */ i.createElement(
    Ze,
    {
      type: "text",
      value: n.labels.q3,
      fieldName: "q3",
      section: "boxplot",
      subsection: "labels",
      label: "Upper Quartile",
      updateField: r,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Represented by top line of box. 25% of data are higher.")))
    }
  ), /* @__PURE__ */ i.createElement(
    Ze,
    {
      type: "text",
      value: n.labels.median,
      fieldName: "median",
      section: "boxplot",
      subsection: "labels",
      label: "Median",
      updateField: r,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Middle data point. Half of data are higher value.")))
    }
  ), /* @__PURE__ */ i.createElement(
    Ze,
    {
      type: "text",
      value: n.labels.q1,
      fieldName: "q1",
      section: "boxplot",
      subsection: "labels",
      label: "Lower Quartile",
      updateField: r,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Represented by bottom line of box. 25% of data are lower.")))
    }
  ), /* @__PURE__ */ i.createElement(
    Ze,
    {
      type: "text",
      value: n.labels.minimum,
      fieldName: "minimum",
      section: "boxplot",
      subsection: "labels",
      label: "Minimum",
      updateField: r,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Lowest value, excluding outliers")))
    }
  ), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("h4", { style: { fontSize: "18px" } }, "Labels for Additional Measures"), /* @__PURE__ */ i.createElement(Ze, { type: "text", value: n.labels.iqr, fieldName: "iqr", section: "boxplot", subsection: "labels", label: "Interquartile Range", updateField: r }), /* @__PURE__ */ i.createElement(Ze, { type: "text", value: n.labels.total, fieldName: "total", section: "boxplot", subsection: "labels", label: "Total", updateField: r }), /* @__PURE__ */ i.createElement(Ze, { type: "text", value: n.labels.mean, fieldName: "mean", section: "boxplot", subsection: "labels", label: "Mean", updateField: r }), /* @__PURE__ */ i.createElement(Ze, { type: "text", value: n.labels.outliers, fieldName: "outliers", section: "boxplot", subsection: "labels", label: "Outliers", updateField: r }), /* @__PURE__ */ i.createElement(Ze, { type: "text", value: n.labels.values, fieldName: "values", section: "boxplot", subsection: "labels", label: "Values", updateField: r })));
}, bw = (e, t) => {
  let n = [], r = [], a = [];
  if (e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar") {
    const o = e.twoColor.isPaletteReversed;
    n = Object.keys(ju).filter((f) => o ? f.endsWith("reverse") : !f.endsWith("reverse"));
  } else {
    const o = [], f = [];
    for (const s in or) {
      const c = s.startsWith("sequential"), d = s.startsWith("qualitative"), g = s.endsWith("reverse");
      c && (!e.isPaletteReversed && !g || e.isPaletteReversed && g) && o.push(s), d && (!e.isPaletteReversed && !g || e.isPaletteReversed && g) && f.push(s);
    }
    r = o, a = f;
  }
  return ue.useEffect(() => {
    let o = "";
    e.twoColor.isPaletteReversed && !e.twoColor.palette.endsWith("reverse") && (o = e.twoColor.palette + "reverse"), !e.twoColor.isPaletteReversed && e.twoColor.palette.endsWith("reverse") && (o = e.twoColor.palette.slice(0, -7)), t({ ...e, twoColor: { ...e.twoColor, palette: o } });
  }, [e.twoColor.isPaletteReversed]), ue.useEffect(() => {
    let o = "";
    e.isPaletteReversed && !e.palette.endsWith("reverse") && (o = e.palette + "reverse"), !e.isPaletteReversed && e.palette.endsWith("reverse") && (o = e.palette.slice(0, -7)), t({ ...e, palette: o });
  }, [e.isPaletteReversed]), { twoColorPalettes: n, sequential: r, nonSequential: a };
}, Sw = (e) => {
  var j;
  const { config: t, updateConfig: n, colorPalettes: r, twoColorPalette: a } = ue.useContext(bt), { visual: o } = t, { setLollipopShape: f, updateField: s } = Lh(), { visHasBarBorders: c, visCanAnimate: d, visSupportsNonSequentialPallete: g, headerColors: y, visSupportsTooltipOpacity: v, visSupportsTooltipLines: E, visSupportsBarSpace: k, visSupportsBarThickness: M, visHasDataCutoff: T, visSupportsSequentialPallete: m, visSupportsReverseColorPalette: D } = Ds(), { twoColorPalettes: L, sequential: _, nonSequential: N } = bw(t, n), R = (H, Y) => {
    if (console.log("value", Y), H === "storyNodeFontColor") {
      n({
        ...t,
        sankey: {
          ...t.sankey,
          storyNodeFontColor: Y
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
  )), /* @__PURE__ */ i.createElement(wt, { value: t.lollipopColorStyle ? t.lollipopColorStyle : "two-tone", fieldName: "lollipopColorStyle", label: "Lollipop Color Style", updateField: s, options: ["regular", "two-tone"] }), /* @__PURE__ */ i.createElement(wt, { value: t.lollipopSize ? t.lollipopSize : "small", fieldName: "lollipopSize", label: "Lollipop Size", updateField: s, options: ["small", "medium", "large"] })), t.visualizationType === "Box Plot" && /* @__PURE__ */ i.createElement("fieldset", { className: "fieldset fieldset--boxplot" }, /* @__PURE__ */ i.createElement("legend", { className: "" }, "Box Plot Settings"), /* @__PURE__ */ i.createElement(wt, { value: t.boxplot.borders, fieldName: "borders", section: "boxplot", label: "Box Plot Borders", updateField: s, options: ["true", "false"] }), /* @__PURE__ */ i.createElement(ft, { value: t.boxplot.plotOutlierValues, fieldName: "plotOutlierValues", section: "boxplot", label: "Plot Outliers", updateField: s }), /* @__PURE__ */ i.createElement(ft, { value: t.boxplot.plotNonOutlierValues, fieldName: "plotNonOutlierValues", section: "boxplot", label: "Plot non-outlier values", updateField: s })), /* @__PURE__ */ i.createElement(wt, { value: t.fontSize, fieldName: "fontSize", label: "Font Size", updateField: s, options: ["small", "medium", "large"] }), c() && /* @__PURE__ */ i.createElement(wt, { value: t.barHasBorder, fieldName: "barHasBorder", label: "Bar Borders", updateField: s, options: ["true", "false"] }), d() && /* @__PURE__ */ i.createElement(ft, { value: t.animate, fieldName: "animate", label: "Animate Visualization", updateField: s }), (((j = t.series) == null ? void 0 : j.some((H) => H.type === "Line" || H.type === "dashed-lg" || H.type === "dashed-sm" || H.type === "dashed-md")) && t.visualizationType === "Combo" || t.visualizationType === "Line") && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(wt, { value: t.lineDatapointStyle, fieldName: "lineDatapointStyle", label: "Line Datapoint Style", updateField: s, options: ["hidden", "hover", "always show"] }), /* @__PURE__ */ i.createElement(wt, { value: t.lineDatapointColor, fieldName: "lineDatapointColor", label: "Line Datapoint Color", updateField: s, options: ["Same as Line", "Lighter than Line"] })), /* @__PURE__ */ i.createElement("label", { className: "header" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Header Theme"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, y.map((H) => /* @__PURE__ */ i.createElement(
    "button",
    {
      title: H,
      key: H,
      onClick: (Y) => {
        Y.preventDefault(), n({ ...t, theme: H });
      },
      className: t.theme === H ? "selected " + H : H
    }
  )))), (g() || g()) && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Chart Color Palette")), D() && /* @__PURE__ */ i.createElement(Bh, { fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: s, value: t.isPaletteReversed }), m() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", null, "Sequential"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, _.map((H) => {
    const Y = {
      backgroundColor: r[H][2]
    }, Q = {
      backgroundColor: r[H][3]
    }, re = {
      backgroundColor: r[H][5]
    };
    return /* @__PURE__ */ i.createElement(
      "button",
      {
        title: H,
        key: H,
        onClick: (K) => {
          K.preventDefault(), n({ ...t, palette: H });
        },
        className: t.palette === H ? "selected" : ""
      },
      /* @__PURE__ */ i.createElement("span", { style: Y }),
      /* @__PURE__ */ i.createElement("span", { style: Q }),
      /* @__PURE__ */ i.createElement("span", { style: re })
    );
  }))), g() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", null, "Non-Sequential"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, N.map((H) => {
    const Y = {
      backgroundColor: r[H][2]
    }, Q = {
      backgroundColor: r[H][4]
    }, re = {
      backgroundColor: r[H][6]
    };
    return /* @__PURE__ */ i.createElement(
      "button",
      {
        title: H,
        key: H,
        onClick: (K) => {
          K.preventDefault(), n({ ...t, palette: H });
        },
        className: t.palette === H ? "selected" : ""
      },
      /* @__PURE__ */ i.createElement("span", { style: Y }),
      /* @__PURE__ */ i.createElement("span", { style: Q }),
      /* @__PURE__ */ i.createElement("span", { style: re })
    );
  })))), t.visualizationType === "Sankey" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ i.createElement("input", { type: "color", value: t.sankey.nodeColor.default, id: "storyNodeColor", name: "storyNodeColor", onChange: (H) => R("nodeColor", H.target.value) }), /* @__PURE__ */ i.createElement("label", { htmlFor: "storyNodeColor" }, "Story Node Color")), /* @__PURE__ */ i.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ i.createElement("input", { type: "color", value: t.sankey.storyNodeFontColor || "red", id: "storyNodeFontColor", name: "storyNodeFontColor", onChange: (H) => R("storyNodeFontColor", H.target.value) }), /* @__PURE__ */ i.createElement("label", { htmlFor: "storyNodeFontColor" }, "Story Node Font Color")), /* @__PURE__ */ i.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ i.createElement("input", { type: "color", value: t.sankey.linkColor.default, id: "linkColor", name: "linkColor", onChange: (H) => R("linkColor", H.target.value) }), /* @__PURE__ */ i.createElement("label", { htmlFor: "linkColor" }, "Link Color"))), (t.visualizationType === "Paired Bar" || t.visualizationType === "Deviation Bar") && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Bh, { section: "twoColor", fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: s, value: t.twoColor.isPaletteReversed }), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, L.map((H) => {
    const Y = {
      backgroundColor: a[H][0]
    }, Q = {
      backgroundColor: a[H][1]
    };
    return /* @__PURE__ */ i.createElement(
      "button",
      {
        title: H,
        key: H,
        onClick: (re) => {
          re.preventDefault(), n({ ...t, twoColor: { ...t.twoColor, palette: H } });
        },
        className: t.twoColor.palette === H ? "selected" : ""
      },
      /* @__PURE__ */ i.createElement("span", { className: "two-color", style: Y }),
      /* @__PURE__ */ i.createElement("span", { className: "two-color", style: Q })
    );
  }))), T() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    Ze,
    {
      value: t.dataCutoff,
      type: "number",
      fieldName: "dataCutoff",
      className: "number-narrow",
      label: "Data Cutoff",
      updateField: s,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Any value below the cut-off value is included in a special "less than" category. This option supports special conditions like suppressed data.')))
    }
  )), M() && t.orientation === "horizontal" && !t.isLollipopChart && t.yAxis.labelPlacement !== "On Bar" && /* @__PURE__ */ i.createElement(Ze, { type: "number", value: t.barHeight || "25", fieldName: "barHeight", label: " Bar Thickness", updateField: s, min: 15 }), (t.visualizationType === "Bar" && t.orientation !== "horizontal" || t.visualizationType === "Combo") && /* @__PURE__ */ i.createElement(Ze, { value: t.barThickness, type: "number", fieldName: "barThickness", label: "Bar Thickness", updateField: s }), k() && /* @__PURE__ */ i.createElement(Ze, { type: "number", value: t.barSpace || "15", fieldName: "barSpace", label: "Bar Space", updateField: s, min: 0 }), (t.visualizationType === "Bar" || t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ i.createElement(ft, { value: t.topAxis.hasLine, section: "topAxis", fieldName: "hasLine", label: "Add Top Axis Line", updateField: s }), t.visualizationType === "Spark Line" && /* @__PURE__ */ i.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ i.createElement(ft, { value: o == null ? void 0 : o.border, section: "visual", fieldName: "border", label: "Show Border", updateField: s }), /* @__PURE__ */ i.createElement(ft, { value: o == null ? void 0 : o.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: s }), /* @__PURE__ */ i.createElement(ft, { value: o == null ? void 0 : o.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: s }), /* @__PURE__ */ i.createElement(ft, { value: o == null ? void 0 : o.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: s }), /* @__PURE__ */ i.createElement(ft, { value: o == null ? void 0 : o.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: s })), (t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ i.createElement(ft, { value: t.showLineSeriesLabels, fieldName: "showLineSeriesLabels", label: "Append Series Name to End of Line Charts", updateField: s }), (t.visualizationType === "Line" || t.visualizationType === "Combo") && t.showLineSeriesLabels && /* @__PURE__ */ i.createElement(ft, { value: t.colorMatchLineSeriesLabels, fieldName: "colorMatchLineSeriesLabels", label: "Match Series Color to Name at End of Line Charts", updateField: s }), E() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ft, { value: o.verticalHoverLine, fieldName: "verticalHoverLine", section: "visual", label: "Vertical Hover Line", updateField: s }), /* @__PURE__ */ i.createElement(ft, { value: o.horizontalHoverLine, fieldName: "horizontalHoverLine", section: "visual", label: "Horizontal Hover Line", updateField: s })), v() && /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Tooltip Opacity"), /* @__PURE__ */ i.createElement(
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
  )), t.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(ft, { value: t.tooltips.singleSeries, fieldName: "singleSeries", section: "tooltips", label: "SHOW HOVER FOR SINGLE DATA SERIES", updateField: s }), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "No Data Message"), /* @__PURE__ */ i.createElement(
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
}, Ew = () => {
  var s, c, d;
  const { config: e, updateConfig: t } = ue.useContext(bt), n = (s = e.data) == null ? void 0 : s[0], { updateField: r } = ue.useContext(Rh);
  if (e.visualizationType !== "Sankey")
    return;
  const a = (g, y, v) => {
    let E = [];
    n != null && n.storyNodeText && (E = [...n == null ? void 0 : n.storyNodeText]), E[v][g] = y, t({
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
    const g = n;
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
    const y = n;
    y.storyNodeText.splice(g, 1), t({ ...e, sankey: { ...e.sankey, data: { ...y } } });
  };
  return /* @__PURE__ */ i.createElement(An, null, /* @__PURE__ */ i.createElement(Pn, null, /* @__PURE__ */ i.createElement(Rn, null, "Sankey Settings")), /* @__PURE__ */ i.createElement(Ln, null, (n == null ? void 0 : n.storyNodeText) && (n == null ? void 0 : n.storyNodeText.map(({ StoryNode: g, segmentTextBefore: y, segmentTextAfter: v }, E) => /* @__PURE__ */ i.createElement("div", { key: E, style: { border: "1px solid black", margin: "15px auto", padding: "15px", borderRadius: "10px" } }, /* @__PURE__ */ i.createElement("label", null, "Story Node Text", /* @__PURE__ */ i.createElement("input", { type: "text", value: g, fieldName: "StoryNode", label: "StoryNode", onChange: (k) => a("StoryNode", k.target.value, E) })), /* @__PURE__ */ i.createElement("label", null, "Story Text Before", /* @__PURE__ */ i.createElement("input", { type: "text", value: y, fieldName: "segmentTextBefore", label: "Segment Text Before", onChange: (k) => a("segmentTextBefore", k.target.value, E) })), /* @__PURE__ */ i.createElement("label", null, "Story Text After", /* @__PURE__ */ i.createElement("input", { type: "text", value: v, fieldName: "segmentTextAfter", label: "Segment Text After", onChange: (k) => a("segmentTextAfter", k.target.value, E) })), /* @__PURE__ */ i.createElement(Hf, { onClick: (k) => f(E), className: "btn", style: { background: "tomato" } }, "Remove Story Node")))), `Total Story Nodes: ${(c = n == null ? void 0 : n.storyNodeText) == null ? void 0 : c.length}`, ((d = n == null ? void 0 : n.storyNodeText) == null ? void 0 : d.length) < 3 && /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "btn full-width",
      onClick: (g) => {
        g.preventDefault(), o();
      }
    },
    "Add StoryNode"
  ), /* @__PURE__ */ i.createElement(ft, { value: e.enableTooltips, fieldName: "enableTooltips", label: "Enable Tooltips", updateField: r })));
}, Na = {
  ForestPlot: nw,
  Series: Kr,
  Regions: yw,
  General: vw,
  BoxPlot: xw,
  Visual: Sw,
  Sankey: Ew
};
ue.memo(({ config: e, updateConfig: t, data: n }) => {
  const r = () => {
    const c = /* @__PURE__ */ new Set();
    return n.forEach((d) => {
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
  ), /* @__PURE__ */ i.createElement(wt, { value: d, initial: "Select", fieldName: "column", label: "Column", updateField: (E, k, M, T) => s(M, T, v), options: r() }), /* @__PURE__ */ i.createElement(Ze, { value: g, fieldName: "value", label: "Value", updateField: (E, k, M, T) => s(M, T, v) }), /* @__PURE__ */ i.createElement(wt, { value: y, initial: "Select", fieldName: "icon", label: "Icon", updateField: (E, k, M, T) => s(M, T, v), options: a() }), /* @__PURE__ */ i.createElement(Ze, { value: c, fieldName: "label", label: "Label", placeholder: "suppressed", updateField: (E, k, M, T) => s(M, T, v) }))), /* @__PURE__ */ i.createElement("button", { type: "button", onClick: f, className: "btn full-width" }, "Add Suppression Class"));
});
const kw = ue.memo(({ config: e, updateConfig: t, data: n }) => {
  const r = () => {
    const d = /* @__PURE__ */ new Set();
    return n.forEach((g) => {
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
    ), /* @__PURE__ */ i.createElement(wt, { value: g, initial: "Select", fieldName: "type", label: "Type", updateField: (m, D, L, _) => c(L, _, M), options: a() }), /* @__PURE__ */ i.createElement(wt, { value: d, initial: "Select", fieldName: "seriesKey", label: "ASSOCIATE TO SERIES", updateField: (m, D, L, _) => c(L, _, M), options: e.runtime.lineSeriesKeys ?? ((T = e.runtime) == null ? void 0 : T.seriesKeys) }), /* @__PURE__ */ i.createElement(wt, { value: v, initial: "Select", fieldName: "column", label: "COLUMN WITH CONFIGURATION VALUE", updateField: (m, D, L, _) => c(L, _, M), options: r() }), /* @__PURE__ */ i.createElement(Ze, { value: E, fieldName: "value", label: "VALUE TO TRIGGER", updateField: (m, D, L, _) => c(L, _, M) }), /* @__PURE__ */ i.createElement(wt, { value: k, initial: "Select", fieldName: "style", label: "Style", updateField: (m, D, L, _) => c(L, _, M), options: o() }), /* @__PURE__ */ i.createElement(Ze, { value: y, fieldName: "label", label: "Label", placeholder: "", updateField: (m, D, L, _) => c(L, _, M) }));
  }), /* @__PURE__ */ i.createElement("button", { type: "button", onClick: s, className: "btn full-width" }, e.visualizationType === "Line" || e.visualizationType === "Combo" ? "Add Special Line" : e.visualizationType === "Bar" ? " Add Special Bar" : "Add Special Line/Bar"));
}), ww = () => {
  var hn, Wt, Kt, On, Mn, er, jn, on, En, pr, lr, sr, x, A, z, G, be;
  const {
    config: e,
    updateConfig: t,
    tableData: n,
    transformedData: r,
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
  } = ue.useContext(bt), { minValue: L, maxValue: _, existPositiveValue: N, isAllLine: R } = Oc(e, c), j = { data: r, config: e }, { leftMax: H, rightMax: Y } = oy(j), {
    headerColors: Q,
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
    visCanAnimate: Z,
    visHasLegend: ne,
    visHasLegendAxisAlign: Ae,
    visHasBrushChart: ve,
    visSupportsDateCategoryAxis: Re,
    visSupportsValueAxisMin: le,
    visSupportsValueAxisMax: _e,
    visSupportsDateCategoryAxisLabel: Be,
    visSupportsDateCategoryAxisLine: Te,
    visSupportsDateCategoryAxisTicks: ge,
    visSupportsDateCategoryTickRotation: Le,
    visSupportsDateCategoryNumTicks: oe,
    visSupportsDateCategoryAxisPadding: we,
    visSupportsRegions: Ce,
    visSupportsFilters: Ie,
    visSupportsPreliminaryData: Ue,
    visSupportsValueAxisGridLines: qe,
    visSupportsValueAxisLine: at,
    visSupportsValueAxisTicks: Qe,
    visSupportsValueAxisLabels: rt,
    visSupportsBarSpace: Ke,
    visSupportsBarThickness: ze,
    visSupportsFootnotes: Me,
    visSupportsSuperTitle: ct,
    visSupportsDataCutoff: je,
    visSupportsChartHeight: Ge,
    visSupportsLeftValueAxis: ot,
    visSupportsTooltipOpacity: dt,
    visSupportsRankByValue: Tt,
    visSupportsResponsiveTicks: tn,
    visSupportsDateCategoryHeight: ln,
    visHasDataSuppression: Rt
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
  const { hasRightAxis: zt } = mh({ config: e, yMax: e.yAxis.size, data: e.data, updateConfig: t }), Dt = (B, I) => ({
    ...I
  }), Xt = {
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
  }, cn = (B) => {
    B.orientation === "horizontal" && (B.labels = !1), B.table.show === void 0 && (B.table.show = !g), B.visualizationType === "Combo" && (B.orientation = "vertical"), Sn(B.xAxis) && !B.xAxis.padding && (B.xAxis.padding = 6);
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
    const Ye = (pn) => pn === 0 ? !0 : !!pn;
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
      let pn = { ...e, [te]: ye };
      cn(pn), t(pn);
      return;
    }
    const et = Array.isArray(e[B]);
    let At = et ? [...e[B], ye] : { ...e[B], [te]: ye };
    Ye(I) && (et ? (At = [...e[B]], At[I] = { ...At[I], [te]: ye }) : typeof ye == "string" ? At[I] = ye : Ye(te) && (At = { ...e[B], [I]: { ...e[B][I], [te]: ye } }));
    let Cn = { ...e, [B]: At };
    cn(Cn), t(Cn);
  }, [Ct, qt] = ue.useState(!0);
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
  }, dn = (B) => {
    let I = e.series ? [...e.series] : [], te = Array.from(new Set(r.map((Ye) => Ye[B]))), ye = [];
    te.forEach((Ye) => {
      ye.push({ key: Ye });
    }), e.visualizationType === "Forecasting" ? I.push({ dataKey: B, type: e.visualizationType, stages: ye, stageColumn: B, axis: "Left", tooltip: !0 }) : I.push({ dataKey: B, type: e.visualizationType, axis: "Left", tooltip: !0 }), t({ ...e, series: I });
  }, St = (B) => {
    const I = e.series[0].dataKey, te = r.sort((Ye, et) => Ye[I] - et[I]), ye = B === "asc" ? te : te.reverse();
    t({ ...e }, ye);
  }, gn = (B) => {
    let I = [...e.exclusions.keys];
    I.push(B);
    let te = { ...e.exclusions, keys: I };
    t({ ...e, exclusions: te });
  }, Lt = (B) => {
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
  }, Vt = (B = !0) => {
    let I = {};
    if (c.forEach((te) => {
      Object.keys(te).forEach((ye) => I[ye] = !0);
    }), B) {
      const { lower: te, upper: ye } = e.confidenceKeys || {};
      Object.keys(I).forEach((Ye) => {
        (e.series && e.series.filter((et) => et.dataKey === Ye).length > 0 || e.confidenceKeys && Object.keys(e.confidenceKeys).includes(Ye) && (te && ye || te || ye) && Ye !== te && Ye !== ye) && delete I[Ye];
      });
    }
    return Object.keys(I);
  }, vn = (B) => {
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
  }, kn = () => {
    qt(!Ct), t({
      ...e,
      showEditorPanel: !Ct
    });
  }, Pe = () => {
    let B = JSON.parse(JSON.stringify(e));
    return v() === !1 && delete B.newViz, delete B.runtime, B;
  };
  ue.useEffect(() => {
    if (y) {
      const B = Pe();
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
  const ut = ue.useCallback(() => {
    const B = [...e.exclusions.keys];
    return /* @__PURE__ */ i.createElement("ul", { className: "series-list" }, B.map((I, te) => /* @__PURE__ */ i.createElement("li", { key: I }, /* @__PURE__ */ i.createElement("div", { className: "series-list__name", "data-title": I }, /* @__PURE__ */ i.createElement("div", { className: "series-list__name--text" }, I)), /* @__PURE__ */ i.createElement("button", { className: "series-list__remove", onClick: () => Lt(I) }, "×"))));
  }, [e]), st = (B, I) => {
    let te = e.series, [ye] = te.splice(B, 1);
    te.splice(I, 0, ye), t({ ...e, series: te });
  };
  e.isLollipopChart && ((hn = e == null ? void 0 : e.series) == null ? void 0 : hn.length) > 1 && (e.runtime.editorErrorMessage = "Lollipop charts must use only one data series"), e.visualizationType === "Paired Bar" && ((Wt = e == null ? void 0 : e.series) == null ? void 0 : Wt.length) !== 2 && (e.runtime.editorErrorMessage = "Paired Bar charts must use exactly two data series"), e.visualizationType === "Deviation Bar" && ((Kt = e == null ? void 0 : e.series) == null ? void 0 : Kt.length) !== 1 && (e.runtime.editorErrorMessage = "Deviation Bar charts must use exactly one data series"), e.isLollipopChart && ((On = e == null ? void 0 : e.series) == null ? void 0 : On.length) === 0 && (e.runtime.editorErrorMessage = "Add a data series");
  const Je = e.orientation === "horizontal" ? "xAxis" : "yAxis", [yt, nn] = ue.useState({ maxMsg: "", minMsg: "", rightMaxMessage: "", minMsgRight: "" }), Dn = () => {
    const B = e[Je].max, I = e[Je].rightMax;
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
    nn((Ye) => ({ ...Ye, maxMsg: te, rightMaxMessage: ye }));
  }, X = () => {
    const B = parseFloat(e[Je].min);
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
    nn((ye) => ({ ...ye, minMsg: te }));
  };
  ue.useEffect(() => {
    X(), Dn();
  }, [L, _, e]);
  const Fe = ((Mn = e == null ? void 0 : e.dataKey) == null ? void 0 : Mn.includes("http://")) || ((er = e == null ? void 0 : e.dataKey) == null ? void 0 : er.includes("https://")), Xe = () => {
    var B, I;
    if (E !== void 0 && E && !((B = e == null ? void 0 : e.xAxis) != null && B.dataKey)) {
      let te = Vt(!1);
      if (te.includes("Date"))
        return "Date";
      if (te.includes("Race"))
        return "Race";
      if (te.includes("Month"))
        return "Month";
    }
    return ((I = e == null ? void 0 : e.xAxis) == null ? void 0 : I.dataKey) || "";
  }, We = () => {
    if (E !== void 0 && E && Vt(!1).length > 0) {
      let B = Vt(!1).filter((I) => I !== Xe());
      if (B.length > 0)
        return B[0];
    }
    return "";
  };
  if (E && !e.xAxis.dataKey && (e.xAxis.dataKey = Xe()), E && ((jn = e == null ? void 0 : e.series) == null ? void 0 : jn.length) === 0) {
    let B = We();
    B !== "" && dn(B), E && console.log("### COVE DEBUG: Chart: Setting default datacol=", B);
  }
  const mt = ["Area Chart", "Combo", "Line", "Bar", "Forecasting", "Scatter Plot", "Paired Bar", "Deviation Bar"], it = [
    /* @__PURE__ */ i.createElement("option", { value: "", key: "Select Option" }, "- Select Option -")
  ];
  if (e.data && e.series) {
    Object.keys(((on = e.data) == null ? void 0 : on[0]) || []).map((I) => {
      const te = e == null ? void 0 : e.series.some((ye) => ye.dataKey === I);
      if (I !== e.xAxis.dataKey && !te)
        return it.push(
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
  if (!e.data && r) {
    if (!r[0])
      return;
    Object.keys(r[0]).map((I) => {
      const te = r.some((ye) => ye.dataKey === I);
      if (I !== e.xAxis.dataKey && !te)
        return it.push(
          /* @__PURE__ */ i.createElement("option", { value: I, key: I }, I)
        );
    });
    let B = {};
    r.forEach((I) => {
      Object.keys(I).forEach((te) => {
        B[te] = B[te] || [];
        const ye = typeof I[te] == "number" ? I[te].toString() : I[te];
        B[te].indexOf(ye) === -1 && B[te].push(ye);
      });
    });
  }
  const pt = (B) => {
    const I = Wy.cloneDeep(e.columns);
    delete I[B], t({
      ...e,
      columns: I
    });
  }, Gt = async (B, I, te) => {
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
    highlightedBarValues: He,
    highlightedSeriesValues: Ot,
    handleUpdateHighlightedBar: Zt,
    handleAddNewHighlightedBar: Qt,
    handleRemoveHighlightedBar: Ut,
    handleUpdateHighlightedBarColor: Bt,
    handleHighlightedBarLegendLabel: Mt,
    handleUpdateHighlightedBorderWidth: _t
  } = Ac(e, t), gt = e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1, rn = () => {
    const B = r.map((I) => I[e.legend.colorCode]);
    return gt ? B : Vt(!1).filter((I) => I !== e.xAxis.dataKey);
  }, xn = (B) => {
    t({ ...e, legend: { ...e.legend, seriesHighlight: B } });
  }, $t = (B, I, te) => {
    var et;
    const ye = { ...e[B], [I]: te }, Ye = { ...e, [B]: ye };
    te === "highlight" && ((et = e.legend.seriesHighlight) != null && et.length) && (Ye.legend.seriesHighlight.length = 0), t(Ye);
  }, bn = {
    addNewExclusion: gn,
    data: r,
    editColumn: Gt,
    getColumns: Vt,
    getDataValueOptions: vn,
    getDataValues: Tn,
    getItemStyle: Dt,
    handleSeriesChange: st,
    handleAddNewHighlightedBar: Qt,
    setCategoryAxis: Xe,
    sortSeries: St,
    updateField: Ne,
    warningMsg: yt,
    highlightedBarValues: He,
    handleHighlightedBarLegendLabel: Mt,
    handleUpdateHighlightedBar: Zt,
    handleRemoveHighlightedBar: Ut,
    isPaletteReversed: e.isPaletteReversed,
    highlightedSeriesValues: Ot,
    handleUpdateHighlightedBorderWidth: _t,
    handleUpdateHighlightedBarColor: Bt,
    setLollipopShape: Ht
  };
  return /* @__PURE__ */ i.createElement(Rh.Provider, { value: bn }, /* @__PURE__ */ i.createElement(_r, { component: "EditorPanel" }, /* @__PURE__ */ i.createElement(Qd.Sidebar, { displayPanel: Ct, isDashboard: g, title: "Configure Chart", onBackClick: kn }, /* @__PURE__ */ i.createElement(_i, { allowZeroExpanded: !0 }, /* @__PURE__ */ i.createElement(Na.General, { name: "General" }), /* @__PURE__ */ i.createElement(Na.ForestPlot, { name: "Forest Plot Settings" }), /* @__PURE__ */ i.createElement(Na.Sankey, { name: "Sankey" }), e.visualizationType !== "Pie" && e.visualizationType !== "Forest Plot" && e.visualizationType !== "Sankey" && /* @__PURE__ */ i.createElement(An, null, /* @__PURE__ */ i.createElement(Pn, null, /* @__PURE__ */ i.createElement(Rn, null, "Data Series ", (!e.series || e.series.length === 0 || e.visualizationType === "Paired Bar" && e.series.length < 2) && /* @__PURE__ */ i.createElement(Vu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(Ln, null, (!e.series || e.series.length === 0) && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement("p", { className: "warning" }, "At least one series is required"), (!e.series || e.series.length === 0 || e.series.length < 2) && e.visualizationType === "Paired Bar" && /* @__PURE__ */ i.createElement("p", { className: "warning" }, "Select two data series for paired bar chart (e.g., Male and Female)."), /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    wt,
    {
      fieldName: "visualizationType",
      label: "Add Data Series",
      initial: "Select",
      onChange: (B) => {
        B.target.value !== "" && B.target.value !== "Select" && dn(B.target.value), B.target.value = "";
      },
      options: Vt()
    }
  ), e.series && e.series.length !== 0 && /* @__PURE__ */ i.createElement(Na.Series.Wrapper, { getColumns: Vt }, /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("legend", { className: "edit-label float-left" }, "Displaying"), /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "A data series is a set of related data points plotted in a chart and typically represented in the chart legend.")))), /* @__PURE__ */ i.createElement(yy, { onDragEnd: ({ source: B, destination: I }) => st(B.index, I.index) }, /* @__PURE__ */ i.createElement(vy, { droppableId: "filter_order" }, (B) => /* @__PURE__ */ i.createElement("ul", { ...B.droppableProps, className: "series-list", ref: B.innerRef }, /* @__PURE__ */ i.createElement(Na.Series.List, { series: e.series, getItemStyle: Dt, sortableItemStyles: Xt, chartsWithOptions: mt }), B.placeholder))))), e.series && e.series.length <= 1 && e.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Confidence Keys"), /* @__PURE__ */ i.createElement(wt, { value: e.confidenceKeys.upper || "", section: "confidenceKeys", fieldName: "upper", label: "Upper", updateField: Ne, initial: "Select", options: Vt() }), /* @__PURE__ */ i.createElement(wt, { value: e.confidenceKeys.lower || "", section: "confidenceKeys", fieldName: "lower", label: "Lower", updateField: Ne, initial: "Select", options: Vt() })), Tt() && e.series && e.series.length === 1 && /* @__PURE__ */ i.createElement(wt, { fieldName: "visualizationType", label: "Rank by Value", initial: "Select", onChange: (B) => St(B.target.value), options: ["asc", "desc"] }), Ue() && /* @__PURE__ */ i.createElement(kw, { config: e, updateConfig: t, data: r }))), /* @__PURE__ */ i.createElement(Na.BoxPlot, { name: "Measures" }), ot() && /* @__PURE__ */ i.createElement(An, null, /* @__PURE__ */ i.createElement(Pn, null, /* @__PURE__ */ i.createElement(Rn, null, e.visualizationType === "Pie" ? "Data Format" : e.orientation === "vertical" ? "Left Value Axis" : "Value Axis", e.visualizationType === "Pie" && !e.yAxis.dataKey && /* @__PURE__ */ i.createElement(Vu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(Ln, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement(
    wt,
    {
      value: e.yAxis.dataKey || "",
      section: "yAxis",
      fieldName: "dataKey",
      label: "Data Column",
      initial: "Select",
      required: !0,
      updateField: Ne,
      options: Vt(!1),
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Select the source data to be visually represented.")))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ze, { value: e.yAxis.label, section: "yAxis", fieldName: "label", label: "Label ", updateField: Ne }), e.runtime.seriesKeys && e.runtime.seriesKeys.length === 1 && !["Box Plot", "Deviation Bar", "Forest Plot"].includes(e.visualizationType) && /* @__PURE__ */ i.createElement(ft, { value: e.isLegendValue, fieldName: "isLegendValue", label: "Use Legend Value in Hover", updateField: Ne }), /* @__PURE__ */ i.createElement(Ze, { value: e.yAxis.numTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "numTicks", label: "Number of ticks", className: "number-narrow", updateField: Ne }), /* @__PURE__ */ i.createElement(
    Ze,
    {
      value: e.yAxis.size,
      type: "number",
      section: "yAxis",
      fieldName: "size",
      label: e.orientation === "horizontal" ? "Size (Height)" : "Size (Width)",
      className: "number-narrow",
      updateField: Ne,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, `Increase the size if elements in the ${e.orientation} axis are being crowded or hidden behind other elements.  Decrease if less space is required for the value axis.`)))
    }
  ), e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(ft, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: Ne }), (e.orientation === "vertical" || !e.isResponsiveTicks) && /* @__PURE__ */ i.createElement(Ze, { value: e.yAxis.tickRotation || 0, type: "number", min: 0, section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: Ne }), e.isResponsiveTicks && e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(
    Ze,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: Ne,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" && /* @__PURE__ */ i.createElement(Ze, { value: e.xAxis.labelOffset, section: "xAxis", fieldName: "labelOffset", label: "Label offset", type: "number", className: "number-narrow", updateField: Ne }), qe() && /* @__PURE__ */ i.createElement(ft, { value: e.yAxis.gridLines, section: "yAxis", fieldName: "gridLines", label: "Show Gridlines", updateField: Ne }), /* @__PURE__ */ i.createElement(ft, { value: e.yAxis.enablePadding, section: "yAxis", fieldName: "enablePadding", label: "Add Padding to Value Axis Scale", updateField: Ne }), e.yAxis.enablePadding && /* @__PURE__ */ i.createElement(Ze, { type: "number", section: "yAxis", fieldName: "scalePadding", label: "Padding Percentage", className: "number-narrow", updateField: Ne, value: e.yAxis.scalePadding }), e.visualizationSubType === "regular" && e.visualizationType !== "Forest Plot" && /* @__PURE__ */ i.createElement(ft, { value: e.useLogScale, fieldName: "useLogScale", label: "use logarithmic scale", updateField: Ne })), /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ i.createElement(
    ft,
    {
      value: e.dataFormat.commas,
      section: "dataFormat",
      fieldName: "commas",
      label: "Add commas",
      updateField: Ne,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Selecting this option will add commas to the left value axis, tooltip hover, and data table.")))
    }
  ), /* @__PURE__ */ i.createElement(
    ft,
    {
      value: e.dataFormat.abbreviated,
      section: "dataFormat",
      fieldName: "abbreviated",
      label: "Abbreviate Axis Values",
      updateField: Ne,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  ), /* @__PURE__ */ i.createElement(Ze, { value: e.dataFormat.roundTo ? e.dataFormat.roundTo : 0, type: "number", section: "dataFormat", fieldName: "roundTo", label: "Round to decimal point", className: "number-narrow", updateField: Ne, min: 0 }), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(
    Ze,
    {
      value: e.dataFormat.prefix,
      section: "dataFormat",
      fieldName: "prefix",
      label: "Prefix",
      updateField: Ne,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    Ze,
    {
      value: e.dataFormat.suffix,
      section: "dataFormat",
      fieldName: "suffix",
      label: "Suffix",
      updateField: Ne,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), e.orientation === "horizontal" ? (
    // horizontal - x is vertical y is horizontal
    /* @__PURE__ */ i.createElement(i.Fragment, null, at() && /* @__PURE__ */ i.createElement(ft, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Ne }), rt() && /* @__PURE__ */ i.createElement(ft, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Label", updateField: Ne }), Qe() && /* @__PURE__ */ i.createElement(ft, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: Ne }), _e() && /* @__PURE__ */ i.createElement(Ze, { value: e.xAxis.max, section: "xAxis", fieldName: "max", label: "max value", type: "number", placeholder: "Auto", updateField: Ne }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, yt.maxMsg), le() && /* @__PURE__ */ i.createElement(Ze, { value: e.xAxis.min, section: "xAxis", fieldName: "min", type: "number", label: "min value", placeholder: "Auto", updateField: Ne }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, yt.minMsg), e.visualizationType === "Deviation Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ze, { value: e.xAxis.target, section: "xAxis", fieldName: "target", type: "number", label: "Deviation point", placeholder: "Auto", updateField: Ne }), /* @__PURE__ */ i.createElement(Ze, { value: e.xAxis.targetLabel || "Target", section: "xAxis", fieldName: "targetLabel", type: "text", label: "Deviation point Label", updateField: Ne }), /* @__PURE__ */ i.createElement(ft, { value: e.xAxis.showTargetLabel, section: "xAxis", fieldName: "showTargetLabel", label: "Show Deviation point label", updateField: Ne })))
  ) : e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ft, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Ne }), /* @__PURE__ */ i.createElement(ft, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Label", updateField: Ne }), /* @__PURE__ */ i.createElement(ft, { value: e.yAxis.hideTicks, section: "yAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: Ne }), /* @__PURE__ */ i.createElement(Ze, { value: e.yAxis.max, section: "yAxis", fieldName: "max", type: "number", label: "left axis max value", placeholder: "Auto", updateField: Ne }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, yt.maxMsg), /* @__PURE__ */ i.createElement(Ze, { value: e.yAxis.min, section: "yAxis", fieldName: "min", type: "number", label: "left axis min value", placeholder: "Auto", updateField: Ne }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, yt.minMsg)), ce() && e.orientation !== "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(_i, { allowZeroExpanded: !0 }, (pr = (En = e.yAxis) == null ? void 0 : En.anchors) == null ? void 0 : pr.map((B, I) => /* @__PURE__ */ i.createElement(An, { className: "series-item series-item--chart", key: `yaxis-anchors-2-${I}` }, /* @__PURE__ */ i.createElement(Pn, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Rn, { className: "accordion__button accordion__button" }, "Anchor ", I + 1, /* @__PURE__ */ i.createElement(
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
  )))), /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
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
  )))), /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
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
  )))), zt && /* @__PURE__ */ i.createElement(An, null, /* @__PURE__ */ i.createElement(Pn, null, /* @__PURE__ */ i.createElement(Rn, null, "Right Value Axis")), /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(Ze, { value: e.yAxis.rightLabel, section: "yAxis", fieldName: "rightLabel", label: "Label", updateField: Ne }), /* @__PURE__ */ i.createElement(Ze, { value: e.yAxis.rightNumTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "rightNumTicks", label: "Number of ticks", className: "number-narrow", updateField: Ne }), /* @__PURE__ */ i.createElement(Ze, { value: e.yAxis.rightAxisSize, type: "number", section: "yAxis", fieldName: "rightAxisSize", label: "Size (Width)", className: "number-narrow", updateField: Ne }), /* @__PURE__ */ i.createElement(Ze, { value: e.yAxis.rightLabelOffsetSize, type: "number", section: "yAxis", fieldName: "rightLabelOffsetSize", label: "Label Offset", className: "number-narrow", updateField: Ne }), /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ i.createElement(ft, { value: e.dataFormat.rightCommas, section: "dataFormat", fieldName: "rightCommas", label: "Add commas", updateField: Ne }), /* @__PURE__ */ i.createElement(Ze, { value: e.dataFormat.rightRoundTo, type: "number", section: "dataFormat", fieldName: "rightRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: Ne, min: 0 }), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(
    Ze,
    {
      value: e.dataFormat.rightPrefix,
      section: "dataFormat",
      fieldName: "rightPrefix",
      label: "Prefix",
      updateField: Ne,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    Ze,
    {
      value: e.dataFormat.rightSuffix,
      section: "dataFormat",
      fieldName: "rightSuffix",
      label: "Suffix",
      updateField: Ne,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), /* @__PURE__ */ i.createElement(ft, { value: e.yAxis.rightHideAxis, section: "yAxis", fieldName: "rightHideAxis", label: "Hide Axis", updateField: Ne }), /* @__PURE__ */ i.createElement(ft, { value: e.yAxis.rightHideLabel, section: "yAxis", fieldName: "rightHideLabel", label: "Hide Label", updateField: Ne }), /* @__PURE__ */ i.createElement(ft, { value: e.yAxis.rightHideTicks, section: "yAxis", fieldName: "rightHideTicks", label: "Hide Ticks", updateField: Ne }), /* @__PURE__ */ i.createElement(Ze, { value: e.yAxis.max, section: "yAxis", fieldName: "rightMax", type: "number", label: "right axis max value", placeholder: "Auto", updateField: Ne }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, yt.rightMaxMessage), /* @__PURE__ */ i.createElement(Ze, { value: e.yAxis.min, section: "yAxis", fieldName: "rightMin", type: "number", label: "right axis min value", placeholder: "Auto", updateField: Ne }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, yt.minMsg))), Re() && /* @__PURE__ */ i.createElement(An, null, /* @__PURE__ */ i.createElement(Pn, null, /* @__PURE__ */ i.createElement(Rn, null, e.visualizationType === "Pie" ? "Segments" : "Date/Category Axis", !e.xAxis.dataKey && /* @__PURE__ */ i.createElement(Vu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(Ln, null, e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, e.visualizationType !== "Forest Plot" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Data Scaling Type", /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none", display: "inline-block" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, "Linear scales are employed for quantitative data, while time scales are used for time-series data."))), /* @__PURE__ */ i.createElement(
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
    Ze,
    {
      value: e.xAxis.padding,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "padding",
      label: "Padding (Percent)",
      className: "number-narrow",
      updateField: Ne,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "For use with date scale. Extends the earliest and latest dates represented on the scale by the percentage specified.")))
    }
  )), /* @__PURE__ */ i.createElement(
    wt,
    {
      value: e.xAxis.dataKey || Xe() || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Data Key",
      initial: "Select",
      required: !0,
      updateField: Ne,
      options: Vt(!1),
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
    }
  )), e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement(
    wt,
    {
      value: e.xAxis.dataKey || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Segment Labels",
      initial: "Select",
      required: !0,
      updateField: Ne,
      options: Vt(!1),
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Select the source row or column that contains the segment labels. Depending on the data structure, it may be listed as "Key."')))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ze, { value: e.xAxis.label, section: "xAxis", fieldName: "label", label: "Label", updateField: Ne }), e.xAxis.type === "continuous" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    Ze,
    {
      value: e.dataFormat.bottomPrefix,
      section: "dataFormat",
      fieldName: "bottomPrefix",
      label: "Prefix",
      updateField: Ne,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    Ze,
    {
      value: e.dataFormat.bottomSuffix,
      section: "dataFormat",
      fieldName: "bottomSuffix",
      label: "Suffix",
      updateField: Ne,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    ft,
    {
      value: e.dataFormat.bottomAbbreviated,
      section: "dataFormat",
      fieldName: "bottomAbbreviated",
      label: "Abbreviate Axis Values",
      updateField: Ne,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  )), Sn(e.xAxis) && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("p", { style: { padding: "1.5em 0 0.5em", fontSize: ".9rem", lineHeight: "1rem" } }, "Format how charts should parse and display your dates using", " ", /* @__PURE__ */ i.createElement("a", { href: "https://github.com/d3/d3-time-format#locale_format", target: "_blank", rel: "noreferrer" }, "these guidelines"), "."), /* @__PURE__ */ i.createElement(
    Ze,
    {
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "This field specifies the pattern used to read and interpret dates in your dataset, ensuring the dates are correctly understood and processed. "))),
      value: e.xAxis.dateParseFormat,
      section: "xAxis",
      fieldName: "dateParseFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "Date Parse Format",
      updateField: Ne
    }
  ), /* @__PURE__ */ i.createElement(
    Ze,
    {
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, " Adjusts the date display format on the axis for clear, visual date representation."))),
      value: e.xAxis.dateDisplayFormat,
      section: "xAxis",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "AXIS DATE DISPLAY FORMAT",
      updateField: Ne
    }
  ), /* @__PURE__ */ i.createElement(
    Ze,
    {
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Specify a custom format for displaying dates in data table. If left empty, dates will adopt the Axis Date Display format. "))),
      value: e.table.dateDisplayFormat,
      section: "table",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "DATA TABLE DATE DISPLAY FORMAT",
      updateField: Ne
    }
  ), /* @__PURE__ */ i.createElement(
    Ze,
    {
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Specify a custom format for displaying dates on hovers. If left empty, dates will adopt the Axis Date Display format. "))),
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
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "When this option is checked, you can select source-file values for exclusion from the date/category axis. "))),
      updateField: Ne
    }
  ), e.exclusions.active && /* @__PURE__ */ i.createElement(i.Fragment, null, e.xAxis.type === "categorical" && /* @__PURE__ */ i.createElement(i.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ i.createElement(ut, null)), /* @__PURE__ */ i.createElement(
    wt,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (B) => {
        B.target.value !== "" && B.target.value !== "Select" && gn(B.target.value), B.target.value = "";
      },
      options: Tn(e.xAxis.dataKey, !0)
    }
  )), e.xAxis.type === "date" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ze, { type: "date", section: "exclusions", fieldName: "dateStart", label: "Start Date", updateField: Ne, value: e.exclusions.dateStart || "" }), /* @__PURE__ */ i.createElement(Ze, { type: "date", section: "exclusions", fieldName: "dateEnd", label: "End Date", updateField: Ne, value: e.exclusions.dateEnd || "" }))), oe() && e.xAxis.type !== "date-time" && e.xAxis.manual && /* @__PURE__ */ i.createElement(Ze, { value: e.xAxis.manualStep, placeholder: "Auto", type: "number", min: 1, section: "xAxis", fieldName: "manualStep", label: "Step count", className: "number-narrow", updateField: Ne }), oe() && (e.xAxis.type === "date-time" || !e.xAxis.manual) && /* @__PURE__ */ i.createElement(Ze, { value: e.xAxis.numTicks, placeholder: "Auto", type: "number", min: 1, section: "xAxis", fieldName: "numTicks", label: "Number of ticks", className: "number-narrow", updateField: Ne }), ln() && /* @__PURE__ */ i.createElement(Ze, { value: e.xAxis.padding, type: "number", min: 0, section: "xAxis", fieldName: "padding", label: e.orientation === "horizontal" ? "Size (Width)" : "Size (Height)", className: "number-narrow", updateField: Ne }), (e.xAxis.type === "continuous" || e.forestPlot.type === "Logarithmic") && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ft, { value: e.dataFormat.bottomCommas, section: "dataFormat", fieldName: "bottomCommas", label: "Add commas", updateField: Ne }), /* @__PURE__ */ i.createElement(Ze, { value: e.dataFormat.bottomRoundTo, type: "number", section: "dataFormat", fieldName: "bottomRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: Ne, min: 0 })), tn() && e.orientation === "vertical" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(ft, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: Ne }), (e.orientation === "horizontal" || !e.isResponsiveTicks) && Le() && /* @__PURE__ */ i.createElement(Ze, { value: e.xAxis.tickRotation, type: "number", min: 0, section: "xAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: Ne }), e.orientation === "vertical" && e.isResponsiveTicks && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(
    Ze,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: Ne,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" ? /* @__PURE__ */ i.createElement(i.Fragment, null, Te() && /* @__PURE__ */ i.createElement(ft, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Ne }), Be() && /* @__PURE__ */ i.createElement(ft, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Label", updateField: Ne })) : /* @__PURE__ */ i.createElement(i.Fragment, null, Te() && /* @__PURE__ */ i.createElement(ft, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Ne }), Be() && /* @__PURE__ */ i.createElement(ft, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Label", updateField: Ne }), ge() && /* @__PURE__ */ i.createElement(ft, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: Ne })), ((x = e.series) == null ? void 0 : x.length) === 1 && e.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", { htmlFor: "barHighlight" }, "Bar Highlighting"), e.series.length === 1 && He.map((B, I) => /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("div", { className: "edit-block", key: `highlighted-bar-${I}` }, /* @__PURE__ */ i.createElement("button", { className: "remove-column", onClick: (te) => Ut(te, I) }, "Remove"), /* @__PURE__ */ i.createElement("p", null, "Highlighted Bar ", I + 1), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Value"), /* @__PURE__ */ i.createElement("select", { value: e.highlightedBarValues[I].value, onChange: (te) => Zt(te, I) }, /* @__PURE__ */ i.createElement("option", { value: "" }, "- Select Value -"), Ot && [...new Set(Ot)].sort().map((te) => /* @__PURE__ */ i.createElement("option", { key: `special-class-value-option-${I}-${te}` }, te)))), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Color"), /* @__PURE__ */ i.createElement("input", { type: "text", value: e.highlightedBarValues[I].color ? e.highlightedBarValues[I].color : "", onChange: (te) => Bt(te, I) })), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Border Width"), /* @__PURE__ */ i.createElement("input", { max: "5", min: "0", type: "number", value: e.highlightedBarValues[I].borderWidth ? e.highlightedBarValues[I].borderWidth : "", onChange: (te) => _t(te, I) })), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Legend Label"), /* @__PURE__ */ i.createElement("input", { type: "text", value: e.highlightedBarValues[I].legendLabel ? e.highlightedBarValues[I].legendLabel : "", onChange: (te) => Mt(te, I) }))))), /* @__PURE__ */ i.createElement("button", { className: "btn full-width", onClick: (B) => Qt(B) }, "Add Highlighted Bar"))), e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    ft,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: "Exclude one or more values",
      updateField: Ne,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "When this option is checked, you can select values for exclusion from the pie segments.")))
    }
  ), e.exclusions.active && /* @__PURE__ */ i.createElement(i.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ i.createElement(ut, null)), /* @__PURE__ */ i.createElement(
    wt,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (B) => {
        B.target.value !== "" && B.target.value !== "Select" && gn(B.target.value), B.target.value = "";
      },
      options: Tn(e.xAxis.dataKey, !0)
    }
  ))), ce() && e.orientation !== "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(_i, { allowZeroExpanded: !0 }, (z = (A = e.xAxis) == null ? void 0 : A.anchors) == null ? void 0 : z.map((B, I) => /* @__PURE__ */ i.createElement(An, { className: "series-item series-item--chart", key: `xaxis-anchors-2-${I}` }, /* @__PURE__ */ i.createElement(Pn, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Rn, { className: "accordion__button accordion__button" }, "Anchor ", I + 1, /* @__PURE__ */ i.createElement(
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
  )))), /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
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
  )))), /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
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
  )))), /* @__PURE__ */ i.createElement(Na.Regions, { name: "Regions" }), e.visualizationType !== "Box Plot" && /* @__PURE__ */ i.createElement(An, null, /* @__PURE__ */ i.createElement(Pn, null, /* @__PURE__ */ i.createElement(Rn, null, "Columns")), /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(By, { config: e, updateField: Ne, deleteColumn: pt }), " ")), ne() && /* @__PURE__ */ i.createElement(An, null, /* @__PURE__ */ i.createElement(Pn, null, /* @__PURE__ */ i.createElement(Rn, null, "Legend")), /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(ft, { value: e.legend.reverseLabelOrder, section: "legend", fieldName: "reverseLabelOrder", label: "Reverse Labels", updateField: Ne }), /* @__PURE__ */ i.createElement(
    ft,
    {
      value: !!e.legend.hide,
      section: "legend",
      fieldName: "hide",
      label: "Hide Legend",
      updateField: Ne,
      tooltip: /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "With a single-series chart, consider hiding the legend to reduce visual clutter.")))
    }
  ), e.visualizationType === "Line" && /* @__PURE__ */ i.createElement(ft, { value: e.legend.lineMode, section: "legend", fieldName: "lineMode", label: "Show Lined Style Legend", updateField: Ne }), e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1 && /* @__PURE__ */ i.createElement(wt, { value: e.legend.colorCode, section: "legend", fieldName: "colorCode", label: "Color code by category", initial: "Select", updateField: Ne, options: vn(r) }), /* @__PURE__ */ i.createElement(wt, { value: e.legend.behavior, section: "legend", fieldName: "behavior", label: "Legend Behavior (When clicked)", updateField: (...[B, , I, te]) => $t(B, I, te), options: ["highlight", "isolate"] }), Ae() && /* @__PURE__ */ i.createElement(ft, { value: e.legend.axisAlign, fieldName: "axisAlign", section: "legend", label: "Align to Axis on Isolate", updateField: Ne }), e.legend.behavior === "highlight" && e.tooltips.singleSeries && /* @__PURE__ */ i.createElement(ft, { value: e.legend.highlightOnHover, section: "legend", fieldName: "highlightOnHover", label: "HIGHLIGHT DATA SERIES ON HOVER", updateField: Ne }), V && e.legend.behavior === "isolate" && !gt && /* @__PURE__ */ i.createElement("fieldset", { className: "primary-fieldset edit-block", key: "additional-highlight-values" }, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Isolate Data Series", /* @__PURE__ */ i.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(De.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(De.Content, null, /* @__PURE__ */ i.createElement("p", null, "You can choose data series that are shown on load. Others will be added when the user clicks on them in the legend."))))), e.legend.seriesHighlight && e.legend.seriesHighlight.map((B, I) => /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: `${B}-${I}` }, /* @__PURE__ */ i.createElement(
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
    wt,
    {
      value: e.legend.seriesHighlight[I],
      fieldName: "seriesHighlight",
      label: "Isolate Value",
      onChange: (te) => {
        const ye = [...e.legend.seriesHighlight];
        ye.includes(te.target.value) || (ye[I] = te.target.value, xn([...ye]));
      },
      options: rn()
    }
  ))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (B) => {
        B.preventDefault();
        const I = rn(), te = [...e.legend.seriesHighlight];
        if (te.length < I.length) {
          const [Ye] = I.filter((et) => !te.includes(et));
          te.push(Ye), xn([...te]);
        }
      }
    },
    "Add Isolate Value"
  )), /* @__PURE__ */ i.createElement(Ze, { value: e.legend.label, section: "legend", fieldName: "label", label: "Title", updateField: Ne }), /* @__PURE__ */ i.createElement(wt, { value: e.legend.position, section: "legend", fieldName: "position", label: "Position", updateField: Ne, options: ["right", "left", "bottom"] }), e.legend.position === "bottom" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ft, { value: e.legend.singleRow, section: "legend", fieldName: "singleRow", label: "Single Row Legend", updateField: Ne }), /* @__PURE__ */ i.createElement(ft, { value: e.legend.verticalSorted, section: "legend", fieldName: "verticalSorted", label: "Vertical sorted Legend", updateField: Ne })), /* @__PURE__ */ i.createElement(Ze, { type: "textarea", value: e.legend.description, updateField: Ne, section: "legend", fieldName: "description", label: "Legend Description" }))), Ie() && /* @__PURE__ */ i.createElement(An, null, /* @__PURE__ */ i.createElement(Pn, null, /* @__PURE__ */ i.createElement(Rn, null, "Filters")), /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(Iy, { config: e, updateField: Ne, rawData: T }))), /* @__PURE__ */ i.createElement(Na.Visual, { name: "Visual" }), e.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement(An, null, /* @__PURE__ */ i.createElement(Pn, null, /* @__PURE__ */ i.createElement(Rn, null, "Data Table")), /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(Hy, { config: e, columns: Object.keys(r[0] || {}), updateField: Ne, isDashboard: g, isLoadedFromUrl: Fe }), " "))), e.type !== "Spark Line" && /* @__PURE__ */ i.createElement(xy, { loadConfig: t, state: e, convertStateToConfig: Pe }))));
}, pm = (e) => {
  let t = "", n = Math.abs(e);
  return n >= 1e9 ? (t = "B", e = e / 1e9) : n >= 1e6 ? (t = "M", e = e / 1e6) : n >= 1e3 && (t = "K", e = e / 1e3), e + t;
}, Tw = (e) => {
  e.sort((d, g) => d - g);
  const t = Math.floor(e.length / 2), n = e.length % 2 === 0, r = n ? e.slice(0, t) : e.slice(0, t + 1), a = n ? e.slice(t) : e.slice(t + 1), o = Math.floor(r.length / 2), f = n ? (r[o - 1] + r[o]) / 2 : r[o], s = Math.floor(a.length / 2), c = n ? (a[s - 1] + a[s]) / 2 : a[s];
  return { q1: f, q3: c };
}, Cw = (e, t) => e.toString().localeCompare(t.toString(), "en", { numeric: !0 }), Aw = (e, t) => t.toString().localeCompare(e.toString(), "en", { numeric: !0 }), Fa = (e, t) => {
  let n = [];
  return t.forEach((r) => {
    let a = !0;
    e.filter((o) => o.type !== "url").forEach((o) => {
      r[o.columnName] != o.active && (a = !1);
    }), a && n.push(r);
  }), n;
}, Pw = [
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
  let n = bs(e), r = t ? n.brighten(0.5).hex() : n.saturate(1.3).hex();
  return [e, r, n.darken(0.3).hex()];
};
const gm = (e) => {
  const t = /(?:\.([^.]+))$/, n = /[?&]wt=(csv|json)(?:&|$)/, r = new URL(e, window.location.origin), a = r.pathname, o = r.search, f = t.exec(a);
  if (f && f[1])
    return f[1];
  const s = n.exec(o);
  return s && s[1] ? s[1] : "";
};
function iT({ configUrl: e, config: t, isEditor: n = !1, isDebug: r = !1, isDashboard: a = !1, setConfig: o, setEditing: f, hostname: s, link: c, setSharedFilter: d, setSharedFilterValue: g, dashboardConfig: y }) {
  var Vt, vn, Tn, kn, Pe, ut, st, Je, yt, nn, Dn;
  const v = new vm(), [E, k] = ue.useState(!0), [M, T] = ue.useState(null), [m, D] = ue.useState({}), [L, _] = ue.useState(m.data || []), [N, R] = ue.useState(void 0), [j, H] = ue.useState(void 0), [Y, Q] = ue.useState(t && ((vn = (Vt = t == null ? void 0 : t.legend) == null ? void 0 : Vt.seriesHighlight) != null && vn.length) ? [...(Tn = t == null ? void 0 : t.legend) == null ? void 0 : Tn.seriesHighlight] : []), [re, K] = ue.useState("lg"), [q, me] = ue.useState([]), [W, se] = ue.useState(), [ce, he] = ue.useState(), [ie, V] = ue.useState(!1), [Z, ne] = ue.useState([]), [Ae] = ue.useState(`cove-${Math.random().toString(16).slice(-4)}`);
  ue.useRef(/* @__PURE__ */ new Map()), ue.useRef();
  const ve = ue.useRef(null);
  r && console.log("Chart config, isEditor", m, n);
  let { legend: Re, title: le, description: _e, visualizationType: Be } = m;
  n && (!le || le === "") && (le = "Chart Title"), m.table && (!((kn = m.table) != null && kn.label) || ((Pe = m.table) == null ? void 0 : Pe.label) === "") && (m.table.label = "Data Table");
  const { barBorderClass: Te, lineDatapointClass: ge, contentClasses: Le, sparkLineStyles: oe } = Vy(m), we = ue.useId(), Ce = (ut = m.legend) != null && ut.hide ? m != null && m.title ? `dataTableSection__${m.title.replace(/\s/g, "")}` : "dataTableSection" : we, Ie = async () => {
    var X;
    if (m.dataUrl) {
      const Fe = new URL(m.runtimeDataUrl || m.dataUrl, window.location.origin);
      let Xe = Object.fromEntries(new URLSearchParams(Fe.search)), We = !1;
      if ((X = m.filters) == null || X.forEach((pt) => {
        pt.type === "url" && Xe[pt.queryParameter] !== decodeURIComponent(pt.active) && (Xe[pt.queryParameter] = pt.active, We = !0);
      }), (!m.formattedData || m.formattedData.urlFiltered) && !We)
        return;
      let mt = `${Fe.origin}${Fe.pathname}${Object.keys(Xe).map((pt, Gt) => {
        let He = Gt === 0 ? "?" : "&";
        return He += pt + "=", He += Xe[pt], He;
      }).join("")}`, it = [];
      try {
        const pt = gm(Fe.href);
        pt === "csv" || Dh(mt) ? it = await fetch(mt).then((Gt) => Gt.text()).then((Gt) => _h.parse(Gt, {
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0
        }).data) : pt === "json" || Oh(mt) ? it = await fetch(mt).then((Gt) => Gt.json()) : it = [];
      } catch {
        console.error(`Cannot parse URL: ${mt}`), it = [];
      }
      m.dataDescription && (it = v.autoStandardize(it), it = v.developerStandardize(it, m.dataDescription)), Object.assign(it, { urlFiltered: !0 }), qe({ ...m, runtimeDataUrl: mt, data: it, formattedData: it }), it && (_(it), R(it), H(Fa(m.filters, it)));
    }
  }, Ue = async () => {
    let X = t || await (await fetch(e)).json(), Fe = X.data || [];
    const Xe = X.filters ? X.filters.filter((it) => it.type === "url").length > 0 : !1;
    if (X.dataUrl && !Xe)
      try {
        const it = gm(X.dataUrl);
        (it === "csv" || Dh(X.dataUrl)) && (Fe = await fetch(X.dataUrl + `?v=${Kh()}`).then((pt) => pt.text()).then((pt) => (pt = pt.replace(/(".*?")|,/g, (...He) => He[1] || "|"), pt = pt.replace(/["]+/g, ""), _h.parse(pt, {
          //quotes: "true",  // dont need these
          //quoteChar: "'",  // has no effect that I can tell
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0,
          delimiter: "|"
          // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
        }).data))), (it === "json" || Oh(X.dataUrl)) && (Fe = await fetch(X.dataUrl + `?v=${Kh()}`).then((pt) => pt.json()));
      } catch {
        console.error(`COVE: Cannot parse URL: ${X.dataUrl}`), Fe = [];
      }
    X.dataDescription && (Fe = v.autoStandardize(Fe), Fe = v.developerStandardize(Fe, X.dataDescription)), Fe && (_(Fe), R(Fe)), X !== void 0 && X.table !== void 0 && (!X.table || !X.table.showVertical) && (X.table = X.table || {}, X.table.showVertical = !1);
    let We = { ...Zd, ...X };
    We.filters && We.filters.forEach((it, pt) => {
      const Gt = by(it);
      Gt && (We.filters[pt].active = Gt);
    }), We.visualizationType === "Box Plot" && (We.legend.hide = !0), We.table.show === void 0 && (We.table.show = !a), We.series.map((it) => {
      it.tooltip || (it.tooltip = !0), it.axis || (it.axis = "Left");
    }), !We.data && Fe && (We.data = Fe);
    const mt = { ...await Sy(We) };
    qe(mt, Fe);
  }, qe = (X, Fe) => {
    var it, pt, Gt;
    let Xe = Fe || L;
    Object.keys(Zd).forEach((He) => {
      X[He] && typeof X[He] == "object" && !Array.isArray(X[He]) && (X[He] = { ...Zd[He], ...X[He] });
    });
    let We = [];
    if (X.exclusions && X.exclusions.active)
      if (X.xAxis.type === "categorical" && ((it = X.exclusions.keys) == null ? void 0 : it.length) > 0)
        We = Xe.filter((He) => !X.exclusions.keys.includes(He[X.xAxis.dataKey]));
      else if (Sn(X.xAxis) && (X.exclusions.dateStart || X.exclusions.dateEnd) && X.xAxis.dateParseFormat) {
        const He = (Bt) => new Date(Bt).getTime();
        let Ot = He(X.exclusions.dateStart), Zt = He(X.exclusions.dateEnd) + 86399999, Qt = typeof Ot !== void 0 && isNaN(Ot) === !1, Ut = typeof Zt !== void 0 && isNaN(Zt) === !1;
        Qt && Ut ? We = Xe.filter((Bt) => He(Bt[X.xAxis.dataKey]) >= Ot && He(Bt[X.xAxis.dataKey]) <= Zt) : Qt ? We = Xe.filter((Bt) => He(Bt[X.xAxis.dataKey]) >= Ot) : Ut && (We = Xe.filter((Bt) => He(Bt[X.xAxis.dataKey]) <= Zt));
      } else
        We = Fe || L;
    else
      We = Fe || L;
    R(We);
    let mt = [];
    if (X.filters && (X.filters.forEach((He, Ot) => {
      let Zt = [];
      Zt = He.orderedValues || at(He.columnName, We).sort(He.order === "desc" ? Aw : Cw), X.filters[Ot].values = Zt, X.filters[Ot].active = X.filters[Ot].active || Zt[0], X.filters[Ot].filterStyle = X.filters[Ot].filterStyle ? X.filters[Ot].filterStyle : "dropdown";
    }), mt = Fa(X.filters, We), H(mt)), X.xAxis.type === "date-time" && X.barThickness > 0.1 ? X.barThickness = 0.035 : X.xAxis.type !== "date-time" && X.barThickness < 0.1 && (X.barThickness = 0.35), X.runtime = {}, X.runtime.seriesLabels = {}, X.runtime.seriesLabelsAll = [], X.runtime.originalXAxis = X.xAxis, X.visualizationType === "Pie" ? (X.runtime.seriesKeys = (Fe || Xe).map((He) => He[X.xAxis.dataKey]), X.runtime.seriesLabelsAll = X.runtime.seriesKeys) : X.runtime.seriesKeys = X.series ? X.series.map((He) => (X.runtime.seriesLabels[He.dataKey] = He.name || He.label || He.dataKey, X.runtime.seriesLabelsAll.push(He.name || He.dataKey), He.dataKey)) : [], X.visualizationType === "Box Plot" && X.series) {
      let He = We ? We.map((Mt) => Mt[X.xAxis.dataKey]) : Xe.map((Mt) => Mt[X.xAxis.dataKey]), Ot = We ? We.map((Mt) => {
        var _t;
        return Number(Mt[(_t = X == null ? void 0 : X.series[0]) == null ? void 0 : _t.dataKey]);
      }) : Xe.map((Mt) => {
        var _t;
        return Number(Mt[(_t = X == null ? void 0 : X.series[0]) == null ? void 0 : _t.dataKey]);
      });
      const Qt = function(Mt) {
        return Mt.filter(function(_t, gt, rn) {
          return rn.indexOf(_t) === gt;
        });
      }(He);
      let Ut = [];
      const Bt = [];
      if (!Qt)
        return;
      Qt.forEach((Mt) => {
        try {
          if (!Mt)
            throw new Xt("No groups resolved in box plots");
          let _t = We ? We.filter((on) => on[X.xAxis.dataKey] === Mt) : Xe.filter((on) => on[X.xAxis.dataKey] === Mt), gt = _t.map((on) => {
            var En;
            return Number(on[(En = X == null ? void 0 : X.series[0]) == null ? void 0 : En.dataKey]);
          }), rn = gt.sort((on, En) => on - En);
          const xn = Tw(rn);
          if (!_t)
            throw new Xt("boxplots dont have data yet");
          if (!Bt)
            throw new Xt("boxplots dont have plots yet");
          X.boxplot.firstQuartilePercentage === "" && (X.boxplot.firstQuartilePercentage = 0), X.boxplot.thirdQuartilePercentage === "" && (X.boxplot.thirdQuartilePercentage = 0);
          const $t = xn.q1, bn = xn.q3, hn = bn - $t, Wt = $t - (bn - $t) * 1.5, Kt = bn + (bn - $t) * 1.5, On = rn.filter((on) => on < Wt || on > Kt);
          let Mn = gt;
          Mn = Mn.filter((on) => !On.includes(on));
          const er = us(gt) || 0, jn = ss([er, $t - 1.5 * hn]);
          Bt.push({
            columnCategory: Mt,
            columnMax: us([ss(gt), $t + 1.5 * hn]),
            columnThirdQuartile: Number(bn).toFixed(X.dataFormat.roundTo),
            columnMedian: Number(Jy(gt)).toFixed(X.dataFormat.roundTo),
            columnFirstQuartile: $t.toFixed(X.dataFormat.roundTo),
            columnMin: jn,
            columnTotal: gt.reduce((on, En) => on + En, 0),
            columnSd: Number(Gy(gt)).toFixed(X.dataFormat.roundTo),
            columnMean: Number(Qy(gt)).toFixed(X.dataFormat.roundTo),
            columnIqr: Number(hn).toFixed(X.dataFormat.roundTo),
            columnLowerBounds: jn,
            columnUpperBounds: us([ss(rn), $t + 1.5 * hn]),
            columnOutliers: On,
            values: gt,
            nonOutlierValues: Mn
          });
        } catch (_t) {
          console.error("COVE: ", _t.message);
        }
      }), Ut = JSON.parse(JSON.stringify(Bt)), Ut.map((Mt) => (Mt.columnIqr = void 0, Mt.nonOutlierValues = void 0, Mt.columnLowerBounds = void 0, Mt.columnUpperBounds = void 0, null)), X.boxplot.allValues = Ot, X.boxplot.categories = Qt, X.boxplot.plots = Bt, X.boxplot.tableData = Ut;
    }
    X.visualizationType === "Combo" && X.series && (X.runtime.barSeriesKeys = [], X.runtime.lineSeriesKeys = [], X.runtime.areaSeriesKeys = [], X.runtime.forecastingSeriesKeys = [], X.series.forEach((He) => {
      He.type === "Area Chart" && X.runtime.areaSeriesKeys.push(He), He.type === "Forecasting" && X.runtime.forecastingSeriesKeys.push(He), (He.type === "Bar" || He.type === "Combo") && X.runtime.barSeriesKeys.push(He.dataKey), (He.type === "Line" || He.type === "dashed-sm" || He.type === "dashed-md" || He.type === "dashed-lg") && X.runtime.lineSeriesKeys.push(He.dataKey), He.type === "Combo" && (He.type = "Bar");
    })), X.visualizationType === "Forecasting" && X.series && (X.runtime.forecastingSeriesKeys = [], X.series.forEach((He) => {
      He.type === "Forecasting" && X.runtime.forecastingSeriesKeys.push(He);
    })), X.visualizationType === "Area Chart" && X.series && (X.runtime.areaSeriesKeys = [], X.series.forEach((He) => {
      X.runtime.areaSeriesKeys.push({ ...He, type: "Area Chart" });
    })), X.visualizationType === "Bar" && X.orientation === "horizontal" || ["Deviation Bar", "Paired Bar", "Forest Plot"].includes(X.visualizationType) ? (X.runtime.xAxis = X.yAxis.yAxis ? X.yAxis.yAxis : X.yAxis, X.runtime.yAxis = X.xAxis.xAxis ? X.xAxis.xAxis : X.xAxis, X.runtime.horizontal = !1, X.orientation = "horizontal") : ["Box Plot", "Scatter Plot", "Area Chart", "Line", "Forecasting"].includes(X.visualizationType) ? (X.runtime.xAxis = X.xAxis, X.runtime.yAxis = X.yAxis, X.runtime.horizontal = !1, X.orientation = "vertical") : (X.runtime.xAxis = X.xAxis, X.runtime.yAxis = X.yAxis, X.runtime.horizontal = !1), X.runtime.uniqueId = Date.now(), X.runtime.editorErrorMessage = X.visualizationType === "Pie" && !X.yAxis.dataKey ? "Data Key property in Y Axis section must be set for pie charts." : "", X.runtime.editorErrorMessage = X.visualizationType === "Sankey" && !X.description ? "SUBTEXT/CITATION field is empty: A description of the Sankey Diagram data must be inputted." : "", (pt = X.legend.seriesHighlight) != null && pt.length && Q((Gt = X.legend) == null ? void 0 : Gt.seriesHighlight), D(X);
  }, at = (X, Fe = this.state.data) => {
    const Xe = [];
    return Fe.forEach((We) => {
      const mt = We[X];
      mt && Xe.includes(mt) === !1 && Xe.push(mt);
    }), Xe;
  }, Qe = (X, Fe) => {
    let Xe = m.visualizationType === "Bar" && m.visualizationSubType === "horizontal" ? m.xAxis.dataKey : m.yAxis.sortKey, We = parseFloat(X[Xe]), mt = parseFloat(Fe[Xe]);
    return We < mt ? m.sortData === "ascending" ? 1 : -1 : We > mt ? m.sortData === "ascending" ? -1 : 1 : 0;
  }, rt = new py((X) => {
    for (let Fe of X) {
      let { width: Xe, height: We } = Fe.contentRect, mt = my(Xe), it = 32, pt = 350;
      K(mt), n && (Xe = Xe - pt), Fe.target.dataset.lollipop === "true" && (Xe = Xe - 2.5), Xe = Xe - it, me([Xe, We]);
    }
  }), Ke = ue.useCallback((X) => {
    X !== null && rt.observe(X), he(X);
  }, []);
  function ze(X) {
    return Object.keys(X).length === 0;
  }
  ue.useEffect(() => {
    Ue();
  }, []), ue.useEffect(() => {
    Ie();
  }, [JSON.stringify(m.filters)]), ue.useEffect(() => {
    ce && !ze(m) && !ie && (jy("cove_loaded", { config: m }), V(!0));
  }, [ce, m]), ue.useEffect(() => {
    const X = (Fe) => {
      let Xe = [];
      Xe.push(Fe.detail), se(Xe);
    };
    return Uy("cove_filterData", (Fe) => X(Fe)), () => {
      Ky("cove_filterData", X);
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
    Ue();
  }, [t.data]), ue.useEffect(() => {
    var X;
    if (L && m.xAxis && ((X = m.runtime) != null && X.seriesKeys)) {
      const Fe = ["Paired Bar", "Deviation Bar"].includes(m.visualizationType) ? m.twoColor.palette : m.palette, Xe = { ...or, ...ju };
      let We = m.customColors || Xe[Fe], mt = m.runtime.seriesKeys.length, it;
      for (; mt > We.length; )
        We = We.concat(We);
      We = We.slice(0, mt), it = () => Nm({
        domain: m.runtime.seriesLabelsAll,
        range: We,
        unknown: null
      }), T(it), k(!1);
    }
    m && L && m.sortData && L.sort(Qe);
  }, [m, L]);
  const Me = (X) => {
    if (Y.length + 1 === m.runtime.seriesKeys.length && m.visualizationType !== "Forecasting") {
      ct();
      return;
    }
    const Fe = [...Y];
    let Xe = X.datum;
    m.runtime.seriesLabels && m.runtime.seriesKeys.forEach((We) => {
      m.runtime.seriesLabels[We] === X.datum && (Xe = We);
    }), Fe.indexOf(Xe) !== -1 ? Fe.splice(Fe.indexOf(Xe), 1) : Fe.push(Xe), Q(Fe);
  }, ct = () => {
    try {
      const X = ve.current;
      if (!X)
        throw new Xt("No legend available to set previous focus on.");
      X.focus();
    } catch (X) {
      console.error("COVE:", X.message);
    }
    Q([]);
  }, je = m.orientation === "horizontal" ? "yAxis" : "xAxis", Ge = (X, Fe = !0) => {
    let Xe = ag(m.runtime[je].dateParseFormat)(X);
    return Xe || (Fe && (m.runtime.editorErrorMessage = `Error parsing date "${X}". Try reviewing your data and date parse settings in the X Axis section.`), /* @__PURE__ */ new Date());
  }, ot = (X) => tf(m.runtime[je].dateDisplayFormat)(X), dt = (X) => tf(m.tooltips.dateDisplayFormat)(X);
  function Tt(X, Fe) {
    const We = document.createElement("canvas").getContext("2d");
    if (!We) {
      console.error("2d context not found");
      return;
    }
    return We.font = Fe || getComputedStyle(document.body).font, Math.ceil(We.measureText(X).width);
  }
  const tn = (X, Fe, Xe = !1, We, mt, it) => {
    if (isNaN(X) || !X)
      return X;
    const pt = X < 0;
    (Fe === void 0 || !Fe) && (Fe = "left"), pt && (X = Math.abs(X));
    let {
      dataFormat: { commas: Gt, abbreviated: He, roundTo: Ot, prefix: Zt, suffix: Qt, rightRoundTo: Ut, bottomRoundTo: Bt, rightPrefix: Mt, rightSuffix: _t, bottomPrefix: gt, bottomSuffix: rn, bottomAbbreviated: xn }
    } = m;
    String(X).indexOf(",") !== -1 && (X = X.replaceAll(",", ""));
    let $t = X, bn = {
      useGrouping: !!Gt
      // for old chart data table to work right cant just leave this to undefined
    };
    if (Fe === "left" || Fe === void 0) {
      let Kt;
      it !== void 0 ? Kt = it ? Number(it) : 0 : Kt = Ot ? Number(Ot) : 0, bn = {
        useGrouping: it ? !0 : !!m.dataFormat.commas,
        minimumFractionDigits: Kt,
        maximumFractionDigits: Kt
      };
    }
    Fe === "right" && (bn = {
      useGrouping: !!m.dataFormat.rightCommas,
      minimumFractionDigits: Ut ? Number(Ut) : 0,
      maximumFractionDigits: Ut ? Number(Ut) : 0
    });
    const hn = () => m.forestPlot.type === "Logarithmic" && !Bt ? 2 : Number(Bt) ? Number(Bt) : 0;
    if (Fe === "bottom" && (bn = {
      useGrouping: !!m.dataFormat.bottomCommas,
      minimumFractionDigits: hn(),
      maximumFractionDigits: hn()
    }), X = Uh(X), isNaN(X))
      return m.runtime.editorErrorMessage = `Unable to parse number from data ${$t}. Try reviewing your data and selections in the Data Series section.`, $t;
    if (!m.dataFormat)
      return X;
    if (m.dataCutoff) {
      let Kt = Uh(m.dataCutoff);
      X < Kt && (X = Kt);
    }
    Fe === "left" && Gt && He && Xe || Fe === "bottom" && Gt && He && Xe ? X = X : X = X.toLocaleString("en-US", bn);
    let Wt = "";
    return He && Fe === "left" && Xe && (X = pm(parseFloat(X))), xn && Fe === "bottom" && Xe && (X = pm(parseFloat(X))), We && Fe === "left" ? Wt = We + Wt : Zt && Fe === "left" && (Wt += Zt), Mt && Fe === "right" && (Wt += Mt), gt && Fe === "bottom" && (Wt += gt), Wt += X, mt && Fe === "left" ? Wt += mt : Qt && Fe === "left" && (Wt += Qt), _t && Fe === "right" && (Wt += _t), rn && Fe === "bottom" && (Wt += rn), pt && (Wt = "-" + Wt), String(Wt);
  }, ln = {
    "Paired Bar": /* @__PURE__ */ i.createElement(Ur, null),
    Forecasting: /* @__PURE__ */ i.createElement(Ur, null),
    Bar: /* @__PURE__ */ i.createElement(Ur, null),
    Line: /* @__PURE__ */ i.createElement(Ur, null),
    Combo: /* @__PURE__ */ i.createElement(Ur, null),
    Pie: /* @__PURE__ */ i.createElement(eE, null),
    "Box Plot": /* @__PURE__ */ i.createElement(Ur, null),
    "Area Chart": /* @__PURE__ */ i.createElement(Ur, null),
    "Scatter Plot": /* @__PURE__ */ i.createElement(Ur, null),
    "Deviation Bar": /* @__PURE__ */ i.createElement(Ur, null),
    "Forest Plot": /* @__PURE__ */ i.createElement(Ur, null)
  }, Rt = () => {
    if (m.visualizationType === "Sankey" || m.visualizationType === "Forecasting" || m.visualizationType === "Forest Plot")
      return !1;
    if (m.visualizationType === "Pie") {
      if ((m == null ? void 0 : m.yAxis.dataKey) === void 0)
        return !0;
    } else if ((m == null ? void 0 : m.series) === void 0 || !((m == null ? void 0 : m.series.length) > 0))
      return !0;
    return !m.xAxis.dataKey;
  }, zt = (X, Fe) => {
    if (X === null || X === "" || X === void 0)
      return "";
    if (typeof X == "string" && X.length > 0 && m.legend.type === "equalnumber")
      return X;
    let Xe = X, We;
    if (Object.keys(m.columns).length > 0 && Object.keys(m.columns).forEach(function(mt) {
      var it = m.columns[mt];
      it.name === Fe && (We = it);
    }), We === void 0 && (We = m.type === "chart" ? m.dataFormat : m.primary, We.useCommas = We.commas, We.roundToPlace = We.roundTo ? We.roundTo : ""), We) {
      let mt = !1, it = 0;
      Number(X) && (We.roundToPlace >= 0 && (mt = We.roundToPlace ? We.roundToPlace !== "" || We.roundToPlace !== null : !1, it = We.roundToPlace ? Number(We.roundToPlace) : 0, We.hasOwnProperty("roundToPlace") && mt && (Xe = Number(X).toFixed(it))), We.hasOwnProperty("useCommas") && We.useCommas === !0 && (Xe = Number(X).toLocaleString("en-US", {
        style: "decimal",
        minimumFractionDigits: mt ? it : 0,
        maximumFractionDigits: mt ? it : 5
      }))), Xe = (We.prefix || "") + Xe + (We.suffix || "");
    }
    return Xe;
  }, Dt = () => {
    const X = (Xe) => {
      Xe && Xe.preventDefault();
      let We = { ...m };
      delete We.newViz, qe(We);
    }, Fe = {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gridArea: "content"
    };
    return /* @__PURE__ */ i.createElement("section", { className: "waiting", style: Fe }, /* @__PURE__ */ i.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ i.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ i.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ i.createElement(Hf, { className: "btn", style: { margin: "1em auto" }, disabled: Rt(), onClick: (Xe) => X(Xe) }, "I'm Done")));
  }, Xt = () => {
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
  }, cn = (X) => {
    try {
      if (!X)
        throw new Xt("COVE: No rowObj in applyLegendToRow");
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
  }, Ct = (X) => X;
  let qt = /* @__PURE__ */ i.createElement(Ly, null);
  const Ht = () => {
    const X = ["chart-container", "p-relative"];
    return m.legend.position === "bottom" && X.push("bottom"), m.legend.hide && X.push("legend-hidden"), ge && X.push(ge), m.barHasBorder || X.push("chart-bar--no-border"), r && X.push("debug"), X.push(...Le), X;
  };
  if (!E) {
    const X = /* @__PURE__ */ i.createElement("a", { href: `#data-table-${m.dataKey}`, className: "margin-left-href" }, m.dataKey, " (Go to Table)");
    qt = /* @__PURE__ */ i.createElement(i.Fragment, null, n && /* @__PURE__ */ i.createElement(ww, null), /* @__PURE__ */ i.createElement(Qd.Responsive, { isEditor: n }, m.newViz && /* @__PURE__ */ i.createElement(Dt, null), m.newViz === void 0 && n && m.runtime && ((st = m.runtime) == null ? void 0 : st.editorErrorMessage) && /* @__PURE__ */ i.createElement(Xt, null), !Rt() && !m.newViz && /* @__PURE__ */ i.createElement("div", { className: "cdc-chart-inner-container cove-component__content", "aria-label": Ef(m), tabIndex: 0 }, /* @__PURE__ */ i.createElement(ky, { showTitle: m.showTitle, isDashboard: a, title: le, superTitle: m.superTitle, classes: ["chart-title", `${m.theme}`, "cove-component__header"], style: void 0 }), m.filters && !W && m.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement(Mh, { config: m, setConfig: D, setFilteredData: H, filteredData: j, excludedData: N, filterData: Fa, dimensions: q }), /* @__PURE__ */ i.createElement(Py, { skipId: Ce, skipMessage: "Skip Over Chart Container" }), (m == null ? void 0 : m.introText) && m.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement("section", { className: "introText" }, Mi(m.introText)), /* @__PURE__ */ i.createElement("div", { className: Ht().join(" ") }, m.visualizationType !== "Spark Line" && ln[m.visualizationType], m.visualizationType === "Spark Line" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Mh, { config: m, setConfig: D, setFilteredData: H, filteredData: j, excludedData: N, filterData: Fa, dimensions: q }), (m == null ? void 0 : m.introText) && /* @__PURE__ */ i.createElement("section", { className: "introText", style: { padding: "0px 0 35px" } }, Mi(m.introText)), /* @__PURE__ */ i.createElement("div", { style: { height: "100px", width: "100%", ...oe } }, /* @__PURE__ */ i.createElement(up, null, (Fe) => /* @__PURE__ */ i.createElement(ew, { width: Fe.width, height: Fe.height }))), _e && /* @__PURE__ */ i.createElement("div", { className: "subtext", style: { padding: "35px 0 15px" } }, Mi(_e))), m.visualizationType === "Sankey" && /* @__PURE__ */ i.createElement(up, { "aria-hidden": "true" }, (Fe) => /* @__PURE__ */ i.createElement(RE, { runtime: m.runtime, width: Fe.width, height: Fe.height })), !m.legend.hide && m.visualizationType !== "Spark Line" && m.visualizationType !== "Sankey" && /* @__PURE__ */ i.createElement(tw, { ref: ve })), a && m.table && m.table.show && m.table.showDataTableLink ? X : c && c, _e && m.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement("div", { className: "column " + m.isResponsiveTicks ? "subtext--responsive-ticks" : "subtext" }, Mi(_e)), /* @__PURE__ */ i.createElement(Pd.Section, { classes: ["download-buttons"] }, m.table.showDownloadImgButton && /* @__PURE__ */ i.createElement(Pd.Button, { text: "Download Image", title: "Download Chart as Image", type: "image", state: m, elementToCapture: Ae }), m.table.showDownloadPdfButton && /* @__PURE__ */ i.createElement(Pd.Button, { text: "Download PDF", title: "Download Chart as PDF", type: "pdf", state: m, elementToCapture: Ae })), (m.xAxis.dataKey && m.table.show && m.visualizationType !== "Spark Line" && m.visualizationType !== "Sankey" || m.visualizationType === "Sankey" && m.table.show) && /* @__PURE__ */ i.createElement(
      Ry,
      {
        config: m,
        rawData: m.visualizationType === "Sankey" ? (yt = (Je = m == null ? void 0 : m.data) == null ? void 0 : Je[0]) == null ? void 0 : yt.tableData : m.table.customTableConfig ? Fa(m.filters, m.data) : m.data,
        runtimeData: m.visualizationType === "Sankey" ? (Dn = (nn = m == null ? void 0 : m.data) == null ? void 0 : nn[0]) == null ? void 0 : Dn.tableData : v.applySuppression(j || N, m.suppressedData),
        expandDataTable: m.table.expanded,
        columns: m.columns,
        displayDataAsText: zt,
        displayGeoName: Ct,
        applyLegendToRow: cn,
        tableTitle: m.table.label,
        indexTitle: m.table.indexLabel,
        vizTitle: le,
        viewport: re,
        tabbingId: Ce,
        colorScale: M
      }
    ), (m == null ? void 0 : m.footnotes) && /* @__PURE__ */ i.createElement("section", { className: "footnotes" }, Mi(m.footnotes)))));
  }
  const Lt = {
    capitalize: (X) => X.charAt(0).toUpperCase() + X.slice(1),
    getXAxisData: (X) => Sn(m.runtime.xAxis) ? Ge(X[m.runtime.originalXAxis.dataKey]).getTime() : X[m.runtime.originalXAxis.dataKey],
    getYAxisData: (X, Fe) => X[Fe],
    config: m,
    setConfig: D,
    rawData: L ?? {},
    excludedData: N,
    transformedData: Ne(j || N),
    // do this right before passing to components
    tableData: j || N,
    // do not clean table data
    unfilteredData: L,
    seriesHighlight: Y,
    colorScale: M,
    dimensions: q,
    currentViewport: re,
    parseDate: Ge,
    formatDate: ot,
    formatTooltipsDate: dt,
    formatNumber: tn,
    loading: E,
    updateConfig: qe,
    colorPalettes: or,
    isDashboard: a,
    setParentConfig: o,
    missingRequiredSections: Rt,
    setEditing: f,
    setFilteredData: H,
    handleChartAriaLabels: Ef,
    highlight: Me,
    highlightReset: ct,
    legend: Re,
    setSeriesHighlight: Q,
    dynamicLegendItems: Z,
    setDynamicLegendItems: ne,
    filterData: Fa,
    imageId: Ae,
    handleLineType: Cf,
    lineOptions: Pw,
    isNumber: Wu,
    getTextWidth: Tt,
    twoColorPalette: ju,
    isEditor: n,
    isDebug: r,
    setSharedFilter: d,
    setSharedFilterValue: g,
    dashboardConfig: y,
    debugSvg: r
  };
  return /* @__PURE__ */ i.createElement(bt.Provider, { value: Lt }, /* @__PURE__ */ i.createElement(Qd.VisualizationWrapper, { config: m, isEditor: n, currentViewport: re, ref: Ke, imageId: Ae, showEditorPanel: m == null ? void 0 : m.showEditorPanel }, qt));
}
export {
  iT as C
};
