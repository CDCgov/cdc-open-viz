import { r as se, R as i } from "./storybook-index-45401197.es.js";
import { a as vy, i as Lh, b as Dh, g as xy } from "./storybook-isSolr-6a0136d5.es.js";
import { A as by, e as Sy } from "./storybook-queryStringUtils-696bb685.es.js";
import { p as xm, P as he } from "./storybook-index-43433e35.es.js";
import { d as Ey } from "./storybook-debounce-cc216a80.es.js";
import { a as If } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { P as Oh } from "./storybook-papaparse.min-b07ddc33.es.js";
import { H as Fi, T as ky } from "./storybook-index-e5bf02db.es.js";
import { _ as dn } from "./storybook-extends-70f3d2a3.es.js";
import { _ as Jr, p as Mh, d as Pi, s as Yr, c as Yt, h as _h, a as Sc, e as Gn, t as zu, f as Xo, m as Ad, i as Nh, j as qn, k as Fh, l as wy, n as Ty, G as Cy, o as ju, q as dr, r as Uu, g as Jo, T as bt, P as bm, I as zh, u as Ay, D as $h, C as Bh, F as Ih } from "./storybook-Filters-31855816.es.js";
import { D as Sm, a as On, b as Mn, c as _n, d as Nn, A as zi } from "./storybook-index-964548d8.es.js";
import { t as Py, a as En, f as Em, L as Hh, b as ts, g as Ri, S as Ry, M as Pd, D as Ly } from "./storybook-DataTable-85b38873.es.js";
import { E as Ir, L as Dy } from "./storybook-Loading-f180d060.es.js";
import { B as km } from "./storybook-Button-d74e310e.es.js";
import { s as ls, t as wm, a as Tm, b as Cm, d as Cs, B as gr, c as Yn, C as Oy, S as Am } from "./storybook-icon-check-d4f3700e.es.js";
import { b as Ec, t as My, e as Pm, f as Wh, g as _y, h as Ny, j as Fy, k as Vh, m as zy, G as rt, c as Rn } from "./storybook-Group-e6c0d0df.es.js";
import { R as $y } from "./storybook-index-633d712d.es.js";
import { c as bs } from "./storybook-chroma-b564050a.es.js";
import { i as Rm, m as Rd, c as Lm, j as bu, k as Su, l as Eu, n as jh, o as By, p as Uh, b as Dm, d as Om } from "./storybook-year-bedc547d.es.js";
import { a as St } from "./storybook-Icon-ee109bed.es.js";
import { T as Le } from "./storybook-Tooltip-edc0f7ab.es.js";
import { S as Tt, T as Ge, C as mt, D as Iy } from "./storybook-DataTableEditor-01986776.es.js";
import { I as Ua } from "./storybook-InputSelect-a65afd95.es.js";
import { u as Hy, p as Wy, s as Vy, a as jy } from "./storybook-useDataVizClasses-809f874d.es.js";
import { n as Kh } from "./storybook-numberFromString-24623c03.es.js";
import { c as Yh } from "./storybook-cacheBustingString-7a3dd9ba.es.js";
import { a as Uy } from "./storybook-coveUpdateWorker-2db8648a.es.js";
function Mm(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Xh(e) {
  let t = e, r = e;
  e.length === 1 && (t = (f, s) => e(f) - s, r = Ky(e));
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
function Ky(e) {
  return (t, r) => Mm(e(t), r);
}
function* Yy(e, t) {
  if (t === void 0)
    for (let r of e)
      r != null && (r = +r) >= r && (yield r);
  else {
    let r = -1;
    for (let n of e)
      (n = t(n, ++r, e)) != null && (n = +n) >= n && (yield n);
  }
}
function Xy(e, t) {
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
function qy(e, t) {
  const r = Xy(e, t);
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
function _m(e, t, r = 0, n = e.length - 1, a = Mm) {
  for (; n > r; ) {
    if (n - r > 600) {
      const c = n - r + 1, d = t - r + 1, g = Math.log(c), v = 0.5 * Math.exp(2 * g / 3), y = 0.5 * Math.sqrt(g * v * (c - v) / c) * (d - c / 2 < 0 ? -1 : 1), k = Math.max(r, Math.floor(t - d * v / c + y)), E = Math.min(n, Math.floor(t + (c - d) * v / c + y));
      _m(e, t, k, E, a);
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
function Gy(e, t, r) {
  if (e = Float64Array.from(Yy(e, r)), !!(n = e.length)) {
    if ((t = +t) <= 0 || n < 2)
      return us(e);
    if (t >= 1)
      return ss(e);
    var n, a = (n - 1) * t, o = Math.floor(a), f = ss(_m(e, o).subarray(0, o + 1)), s = us(e.subarray(o + 1));
    return f + (s - f) * (a - o);
  }
}
function Zy(e, t) {
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
function Qy(e, t) {
  return Gy(e, 0.5, t);
}
class qh extends Map {
  constructor(t, r = tv) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null)
      for (const [n, a] of t)
        this.set(n, a);
  }
  get(t) {
    return super.get(Gh(this, t));
  }
  has(t) {
    return super.has(Gh(this, t));
  }
  set(t, r) {
    return super.set(Jy(this, t), r);
  }
  delete(t) {
    return super.delete(ev(this, t));
  }
}
function Gh({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function Jy({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function ev({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function tv(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function nv(e, t, r) {
  e = +e, t = +t, r = (a = arguments.length) < 2 ? (t = e, e = 0, 1) : a < 3 ? 1 : +r;
  for (var n = -1, a = Math.max(0, Math.ceil((t - e) / r)) | 0, o = new Array(a); ++n < a; )
    o[n] = e + n * r;
  return o;
}
const Zh = Symbol("implicit");
function Hf() {
  var e = new qh(), t = [], r = [], n = Zh;
  function a(o) {
    let f = e.get(o);
    if (f === void 0) {
      if (n !== Zh)
        return n;
      e.set(o, f = t.push(o) - 1);
    }
    return r[f % r.length];
  }
  return a.domain = function(o) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new qh();
    for (const f of o)
      e.has(f) || e.set(f, t.push(f) - 1);
    return a;
  }, a.range = function(o) {
    return arguments.length ? (r = Array.from(o), a) : r.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.copy = function() {
    return Hf(t, r).unknown(n);
  }, Ec.apply(a, arguments), a;
}
function Wf() {
  var e = Hf().unknown(void 0), t = e.domain, r = e.range, n = 0, a = 1, o, f, s = !1, c = 0, d = 0, g = 0.5;
  delete e.unknown;
  function v() {
    var y = t().length, k = a < n, E = k ? a : n, M = k ? n : a;
    o = (M - E) / Math.max(1, y - c + d * 2), s && (o = Math.floor(o)), E += (M - E - o * (y - c)) * g, f = o * (1 - c), s && (E = Math.round(E), f = Math.round(f));
    var T = nv(y).map(function(m) {
      return E + o * m;
    });
    return r(k ? T.reverse() : T);
  }
  return e.domain = function(y) {
    return arguments.length ? (t(y), v()) : t();
  }, e.range = function(y) {
    return arguments.length ? ([n, a] = y, n = +n, a = +a, v()) : [n, a];
  }, e.rangeRound = function(y) {
    return [n, a] = y, n = +n, a = +a, s = !0, v();
  }, e.bandwidth = function() {
    return f;
  }, e.step = function() {
    return o;
  }, e.round = function(y) {
    return arguments.length ? (s = !!y, v()) : s;
  }, e.padding = function(y) {
    return arguments.length ? (c = Math.min(1, d = +y), v()) : c;
  }, e.paddingInner = function(y) {
    return arguments.length ? (c = Math.min(1, y), v()) : c;
  }, e.paddingOuter = function(y) {
    return arguments.length ? (d = +y, v()) : d;
  }, e.align = function(y) {
    return arguments.length ? (g = Math.max(0, Math.min(1, y)), v()) : g;
  }, e.copy = function() {
    return Wf(t(), [n, a]).round(s).paddingInner(c).paddingOuter(d).align(g);
  }, Ec.apply(v(), arguments);
}
function Nm(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Nm(t());
  }, e;
}
function rv() {
  return Nm(Wf.apply(null, arguments).paddingInner(1));
}
function Fm(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, a = e[r], o = e[n], f;
  return o < a && (f = r, r = n, n = f, f = a, a = o, o = f), e[r] = t.floor(a), e[n] = t.ceil(o), e;
}
function Qh(e) {
  return Math.log(e);
}
function Jh(e) {
  return Math.exp(e);
}
function av(e) {
  return -Math.log(-e);
}
function iv(e) {
  return -Math.exp(-e);
}
function ov(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function lv(e) {
  return e === 10 ? ov : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function sv(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function ep(e) {
  return (t, r) => -e(-t, r);
}
function uv(e) {
  const t = e(Qh, Jh), r = t.domain;
  let n = 10, a, o;
  function f() {
    return a = sv(n), o = lv(n), r()[0] < 0 ? (a = ep(a), o = ep(o), e(av, iv)) : e(Qh, Jh), t;
  }
  return t.base = function(s) {
    return arguments.length ? (n = +s, f()) : n;
  }, t.domain = function(s) {
    return arguments.length ? (r(s), f()) : r();
  }, t.ticks = (s) => {
    const c = r();
    let d = c[0], g = c[c.length - 1];
    const v = g < d;
    v && ([d, g] = [g, d]);
    let y = a(d), k = a(g), E, M;
    const T = s == null ? 10 : +s;
    let m = [];
    if (!(n % 1) && k - y < T) {
      if (y = Math.floor(y), k = Math.ceil(k), d > 0) {
        for (; y <= k; ++y)
          for (E = 1; E < n; ++E)
            if (M = y < 0 ? E / o(-y) : E * o(y), !(M < d)) {
              if (M > g)
                break;
              m.push(M);
            }
      } else
        for (; y <= k; ++y)
          for (E = n - 1; E >= 1; --E)
            if (M = y > 0 ? E / o(-y) : E * o(y), !(M < d)) {
              if (M > g)
                break;
              m.push(M);
            }
      m.length * 2 < T && (m = Wh(d, g, T));
    } else
      m = Wh(y, k, Math.min(k - y, T)).map(o);
    return v ? m.reverse() : m;
  }, t.tickFormat = (s, c) => {
    if (s == null && (s = 10), c == null && (c = n === 10 ? "s" : ","), typeof c != "function" && (!(n % 1) && (c = _y(c)).precision == null && (c.trim = !0), c = Ny(c)), s === 1 / 0)
      return c;
    const d = Math.max(1, n * s / t.ticks().length);
    return (g) => {
      let v = g / o(Math.round(a(g)));
      return v * n < n - 0.5 && (v *= n), v <= d ? c(g) : "";
    };
  }, t.nice = () => r(Fm(r(), {
    floor: (s) => o(Math.floor(a(s))),
    ceil: (s) => o(Math.ceil(a(s)))
  })), t;
}
function zm() {
  const e = uv(My()).domain([1, 10]);
  return e.copy = () => Pm(e, zm()).base(e.base()), Ec.apply(e, arguments), e;
}
const Ku = Rm(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Ku.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Rm((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Ku);
Ku.range;
function cv(e, t, r, n, a, o) {
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
    [n, 1, jh],
    [n, 2, 2 * jh],
    [r, 1, By],
    [t, 1, Uh],
    [t, 3, 3 * Uh],
    [e, 1, Rd]
  ];
  function s(d, g, v) {
    const y = g < d;
    y && ([d, g] = [g, d]);
    const k = v && typeof v.range == "function" ? v : c(d, g, v), E = k ? k.range(d, +g + 1) : [];
    return y ? E.reverse() : E;
  }
  function c(d, g, v) {
    const y = Math.abs(g - d) / v, k = Fy(([, , T]) => T).right(f, y);
    if (k === f.length)
      return e.every(Vh(d / Rd, g / Rd, v));
    if (k === 0)
      return Ku.every(Math.max(Vh(d, g, v), 1));
    const [E, M] = f[y / f[k - 1][2] < f[k][2] / y ? k - 1 : k];
    return E.every(M);
  }
  return [s, c];
}
const [dv, fv] = cv(Lm, Cm, Om, Dm, Tm, wm);
function hv(e) {
  return new Date(e);
}
function pv(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function $m(e, t, r, n, a, o, f, s, c, d) {
  var g = zy(), v = g.invert, y = g.domain, k = d(".%L"), E = d(":%S"), M = d("%I:%M"), T = d("%I %p"), m = d("%a %d"), L = d("%b %d"), O = d("%B"), _ = d("%Y");
  function N(R) {
    return (c(R) < R ? k : s(R) < R ? E : f(R) < R ? M : o(R) < R ? T : n(R) < R ? a(R) < R ? m : L : r(R) < R ? O : _)(R);
  }
  return g.invert = function(R) {
    return new Date(v(R));
  }, g.domain = function(R) {
    return arguments.length ? y(Array.from(R, pv)) : y().map(hv);
  }, g.ticks = function(R) {
    var j = y();
    return e(j[0], j[j.length - 1], R ?? 10);
  }, g.tickFormat = function(R, j) {
    return j == null ? N : d(j);
  }, g.nice = function(R) {
    var j = y();
    return (!R || typeof R.range != "function") && (R = t(j[0], j[j.length - 1], R ?? 10)), R ? y(Fm(j, R)) : g;
  }, g.copy = function() {
    return Pm(g, $m(e, t, r, n, a, o, f, s, c, d));
  }, g;
}
function mv() {
  return Ec.apply($m(dv, fv, Lm, Cm, Om, Dm, Tm, wm, ls, Py).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var gv = Cs("domain", "range", "reverse", "align", "padding", "round");
function Qd(e) {
  return gv(Wf(), e);
}
var yv = Cs("domain", "range", "reverse", "align", "padding", "round");
function qo(e) {
  return yv(rv(), e);
}
var vv = Cs("domain", "range", "reverse", "clamp", "interpolate", "nice", "round");
function xv(e) {
  return vv(mv(), e);
}
var bv = Cs("domain", "range", "reverse", "base", "clamp", "interpolate", "nice", "round");
function Yu(e) {
  return bv(zm(), e);
}
var Sv = Cs("domain", "range", "reverse", "unknown");
function Vf(e) {
  return Sv(Hf(), e);
}
function Ev(e) {
  if ((typeof e == "function" || typeof e == "object" && e) && "valueOf" in e) {
    var t = e.valueOf();
    if (typeof t == "number")
      return t;
  }
  return e;
}
function kv(e, t) {
  var r = e;
  return "ticks" in r ? r.ticks(t) : r.domain().filter(function(n, a, o) {
    return t == null || o.length <= t || a % Math.round((o.length - 1) / t) === 0;
  });
}
function wv(e) {
  return e == null ? void 0 : e.toString();
}
var $i = [], Tv = function() {
  return $i.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, Cv = function() {
  return $i.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, tp = "ResizeObserver loop completed with undelivered notifications.", Av = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: tp
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = tp), window.dispatchEvent(e);
}, Ss;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Ss || (Ss = {}));
var Bi = function(e) {
  return Object.freeze(e);
}, Bm = function() {
  function e(t, r) {
    this.inlineSize = t, this.blockSize = r, Bi(this);
  }
  return e;
}(), Im = function() {
  function e(t, r, n, a) {
    return this.x = t, this.y = r, this.width = n, this.height = a, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Bi(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, r = t.x, n = t.y, a = t.top, o = t.right, f = t.bottom, s = t.left, c = t.width, d = t.height;
    return { x: r, y: n, top: a, right: o, bottom: f, left: s, width: c, height: d };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), jf = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, Hm = function(e) {
  if (jf(e)) {
    var t = e.getBBox(), r = t.width, n = t.height;
    return !r && !n;
  }
  var a = e, o = a.offsetWidth, f = a.offsetHeight;
  return !(o || f || e.getClientRects().length);
}, np = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var r = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(r && e instanceof r.Element);
}, Pv = function(e) {
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
}, cs = typeof window < "u" ? window : {}, ku = /* @__PURE__ */ new WeakMap(), rp = /auto|scroll/, Rv = /^tb|vertical/, Lv = /msie|trident/i.test(cs.navigator && cs.navigator.userAgent), Xr = function(e) {
  return parseFloat(e || "0");
}, Zo = function(e, t, r) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = !1), new Bm((r ? t : e) || 0, (r ? e : t) || 0);
}, ap = Bi({
  devicePixelContentBoxSize: Zo(),
  borderBoxSize: Zo(),
  contentBoxSize: Zo(),
  contentRect: new Im(0, 0, 0, 0)
}), Wm = function(e, t) {
  if (t === void 0 && (t = !1), ku.has(e) && !t)
    return ku.get(e);
  if (Hm(e))
    return ku.set(e, ap), ap;
  var r = getComputedStyle(e), n = jf(e) && e.ownerSVGElement && e.getBBox(), a = !Lv && r.boxSizing === "border-box", o = Rv.test(r.writingMode || ""), f = !n && rp.test(r.overflowY || ""), s = !n && rp.test(r.overflowX || ""), c = n ? 0 : Xr(r.paddingTop), d = n ? 0 : Xr(r.paddingRight), g = n ? 0 : Xr(r.paddingBottom), v = n ? 0 : Xr(r.paddingLeft), y = n ? 0 : Xr(r.borderTopWidth), k = n ? 0 : Xr(r.borderRightWidth), E = n ? 0 : Xr(r.borderBottomWidth), M = n ? 0 : Xr(r.borderLeftWidth), T = v + d, m = c + g, L = M + k, O = y + E, _ = s ? e.offsetHeight - O - e.clientHeight : 0, N = f ? e.offsetWidth - L - e.clientWidth : 0, R = a ? T + L : 0, j = a ? m + O : 0, B = n ? n.width : Xr(r.width) - R - N, V = n ? n.height : Xr(r.height) - j - _, q = B + T + N + L, Y = V + m + _ + O, U = Bi({
    devicePixelContentBoxSize: Zo(Math.round(B * devicePixelRatio), Math.round(V * devicePixelRatio), o),
    borderBoxSize: Zo(q, Y, o),
    contentBoxSize: Zo(B, V, o),
    contentRect: new Im(v, c, B, V)
  });
  return ku.set(e, U), U;
}, Vm = function(e, t, r) {
  var n = Wm(e, r), a = n.borderBoxSize, o = n.contentBoxSize, f = n.devicePixelContentBoxSize;
  switch (t) {
    case Ss.DEVICE_PIXEL_CONTENT_BOX:
      return f;
    case Ss.BORDER_BOX:
      return a;
    default:
      return o;
  }
}, jm = function() {
  function e(t) {
    var r = Wm(t);
    this.target = t, this.contentRect = r.contentRect, this.borderBoxSize = Bi([r.borderBoxSize]), this.contentBoxSize = Bi([r.contentBoxSize]), this.devicePixelContentBoxSize = Bi([r.devicePixelContentBoxSize]);
  }
  return e;
}(), Um = function(e) {
  if (Hm(e))
    return 1 / 0;
  for (var t = 0, r = e.parentNode; r; )
    t += 1, r = r.parentNode;
  return t;
}, Dv = function() {
  var e = 1 / 0, t = [];
  $i.forEach(function(f) {
    if (f.activeTargets.length !== 0) {
      var s = [];
      f.activeTargets.forEach(function(d) {
        var g = new jm(d.target), v = Um(d.target);
        s.push(g), d.lastReportedSize = Vm(d.target, d.observedBox), v < e && (e = v);
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
}, ip = function(e) {
  $i.forEach(function(r) {
    r.activeTargets.splice(0, r.activeTargets.length), r.skippedTargets.splice(0, r.skippedTargets.length), r.observationTargets.forEach(function(a) {
      a.isActive() && (Um(a.target) > e ? r.activeTargets.push(a) : r.skippedTargets.push(a));
    });
  });
}, Ov = function() {
  var e = 0;
  for (ip(e); Tv(); )
    e = Dv(), ip(e);
  return Cv() && Av(), e > 0;
}, Ld, Km = [], Mv = function() {
  return Km.splice(0).forEach(function(e) {
    return e();
  });
}, _v = function(e) {
  if (!Ld) {
    var t = 0, r = document.createTextNode(""), n = { characterData: !0 };
    new MutationObserver(function() {
      return Mv();
    }).observe(r, n), Ld = function() {
      r.textContent = "".concat(t ? t-- : t++);
    };
  }
  Km.push(e), Ld();
}, Nv = function(e) {
  _v(function() {
    requestAnimationFrame(e);
  });
}, $u = 0, Fv = function() {
  return !!$u;
}, zv = 250, $v = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, op = [
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
], lp = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Dd = !1, Bv = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var r = this;
    if (t === void 0 && (t = zv), !Dd) {
      Dd = !0;
      var n = lp(t);
      Nv(function() {
        var a = !1;
        try {
          a = Ov();
        } finally {
          if (Dd = !1, t = n - lp(), !Fv())
            return;
          a ? r.run(1e3) : t > 0 ? r.run(t) : r.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, r = function() {
      return t.observer && t.observer.observe(document.body, $v);
    };
    document.body ? r() : cs.addEventListener("DOMContentLoaded", r);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), op.forEach(function(r) {
      return cs.addEventListener(r, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), op.forEach(function(r) {
      return cs.removeEventListener(r, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), Jd = new Bv(), sp = function(e) {
  !$u && e > 0 && Jd.start(), $u += e, !$u && Jd.stop();
}, Iv = function(e) {
  return !jf(e) && !Pv(e) && getComputedStyle(e).display === "inline";
}, Hv = function() {
  function e(t, r) {
    this.target = t, this.observedBox = r || Ss.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = Vm(this.target, this.observedBox, !0);
    return Iv(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), Wv = function() {
  function e(t, r) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = r;
  }
  return e;
}(), wu = /* @__PURE__ */ new WeakMap(), up = function(e, t) {
  for (var r = 0; r < e.length; r += 1)
    if (e[r].target === t)
      return r;
  return -1;
}, Tu = function() {
  function e() {
  }
  return e.connect = function(t, r) {
    var n = new Wv(t, r);
    wu.set(t, n);
  }, e.observe = function(t, r, n) {
    var a = wu.get(t), o = a.observationTargets.length === 0;
    up(a.observationTargets, r) < 0 && (o && $i.push(a), a.observationTargets.push(new Hv(r, n && n.box)), sp(1), Jd.schedule());
  }, e.unobserve = function(t, r) {
    var n = wu.get(t), a = up(n.observationTargets, r), o = n.observationTargets.length === 1;
    a >= 0 && (o && $i.splice($i.indexOf(n), 1), n.observationTargets.splice(a, 1), sp(-1));
  }, e.disconnect = function(t) {
    var r = this, n = wu.get(t);
    n.observationTargets.slice().forEach(function(a) {
      return r.unobserve(t, a.target);
    }), n.activeTargets.splice(0, n.activeTargets.length);
  }, e;
}(), Vv = function() {
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
    if (!np(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Tu.observe(this, t, r);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!np(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Tu.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    Tu.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
const jv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ResizeObserver: Vv,
  ResizeObserverEntry: jm,
  ResizeObserverSize: Bm
}, Symbol.toStringTag, { value: "Module" })), Uv = /* @__PURE__ */ If(jv);
var cp = qm, za = Xm(xm), Kv = Xm(Ey), jo = qv(se), Yv = Uv, Xv = ["className", "children", "debounceTime", "ignoreDimensions", "parentSizeStyles", "enableDebounceLeadingCall"];
function Ym(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Ym = function(a) {
    return a ? r : t;
  })(e);
}
function qv(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Ym(t);
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
function Xm(e) {
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
function Gv(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var Zv = [];
function qm(e) {
  var t = e.className, r = e.children, n = e.debounceTime, a = n === void 0 ? 300 : n, o = e.ignoreDimensions, f = o === void 0 ? Zv : o, s = e.parentSizeStyles, c = s === void 0 ? {
    width: "100%",
    height: "100%"
  } : s, d = e.enableDebounceLeadingCall, g = d === void 0 ? !0 : d, v = Gv(e, Xv), y = (0, jo.useRef)(null), k = (0, jo.useRef)(0), E = (0, jo.useState)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), M = E[0], T = E[1], m = (0, jo.useMemo)(function() {
    var L = Array.isArray(f) ? f : [f];
    return (0, Kv.default)(function(O) {
      T(function(_) {
        var N = Object.keys(_), R = N.filter(function(B) {
          return _[B] !== O[B];
        }), j = R.every(function(B) {
          return L.includes(B);
        });
        return j ? _ : O;
      });
    }, a, {
      leading: g
    });
  }, [a, g, f]);
  return (0, jo.useEffect)(function() {
    var L = new Yv.ResizeObserver(function(O) {
      O === void 0 && (O = []), O.forEach(function(_) {
        var N = _.contentRect, R = N.left, j = N.top, B = N.width, V = N.height;
        k.current = window.requestAnimationFrame(function() {
          m({
            width: B,
            height: V,
            top: j,
            left: R
          });
        });
      });
    });
    return y.current && L.observe(y.current), function() {
      window.cancelAnimationFrame(k.current), L.disconnect(), m != null && m.cancel && m.cancel();
    };
  }, [m]), /* @__PURE__ */ jo.default.createElement("div", Xu({
    style: c,
    ref: y,
    className: t
  }, v), r(Xu({}, M, {
    ref: y.current,
    resize: m
  })));
}
qm.propTypes = {
  className: za.default.string,
  debounceTime: za.default.number,
  enableDebounceLeadingCall: za.default.bool,
  ignoreDimensions: za.default.oneOfType([za.default.any, za.default.arrayOf(za.default.any)]),
  children: za.default.func.isRequired
};
var Od = /* @__PURE__ */ new Date(), Md = /* @__PURE__ */ new Date();
function ga(e, t, r, n) {
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
    return ga(function(f) {
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
const Qv = 1e3, Uf = Qv * 60, Jv = Uf * 60, Kf = Jv * 24, Gm = Kf * 7;
var Zm = ga(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Uf) / Kf,
  (e) => e.getDate() - 1
);
const Qm = Zm;
Zm.range;
function ji(e) {
  return ga(function(t) {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setDate(t.getDate() + r * 7);
  }, function(t, r) {
    return (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Uf) / Gm;
  });
}
var Jm = ji(0), qu = ji(1), ex = ji(2), tx = ji(3), el = ji(4), nx = ji(5), rx = ji(6);
Jm.range;
qu.range;
ex.range;
tx.range;
el.range;
nx.range;
rx.range;
var Yf = ga(function(e) {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, function(e, t) {
  e.setFullYear(e.getFullYear() + t);
}, function(e, t) {
  return t.getFullYear() - e.getFullYear();
}, function(e) {
  return e.getFullYear();
});
Yf.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ga(function(t) {
    t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setFullYear(t.getFullYear() + r * e);
  });
};
const Es = Yf;
Yf.range;
var eg = ga(function(e) {
  e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCDate(e.getUTCDate() + t);
}, function(e, t) {
  return (t - e) / Kf;
}, function(e) {
  return e.getUTCDate() - 1;
});
const tg = eg;
eg.range;
function Ui(e) {
  return ga(function(t) {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, function(t, r) {
    return (r - t) / Gm;
  });
}
var ng = Ui(0), Gu = Ui(1), ax = Ui(2), ix = Ui(3), tl = Ui(4), ox = Ui(5), lx = Ui(6);
ng.range;
Gu.range;
ax.range;
ix.range;
tl.range;
ox.range;
lx.range;
var Xf = ga(function(e) {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, function(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}, function(e) {
  return e.getUTCFullYear();
});
Xf.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ga(function(t) {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setUTCFullYear(t.getUTCFullYear() + r * e);
  });
};
const ks = Xf;
Xf.range;
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
function sx(e) {
  var t = e.dateTime, r = e.date, n = e.time, a = e.periods, o = e.days, f = e.shortDays, s = e.months, c = e.shortMonths, d = as(a), g = is(a), v = as(o), y = is(o), k = as(f), E = is(f), M = as(s), T = is(s), m = as(c), L = is(c), O = {
    a: ue,
    A: fe,
    b: ae,
    B: W,
    c: null,
    d: gp,
    e: gp,
    f: Dx,
    g: Hx,
    G: Vx,
    H: Px,
    I: Rx,
    j: Lx,
    L: rg,
    m: Ox,
    M: Mx,
    p: Z,
    q: ee,
    Q: xp,
    s: bp,
    S: _x,
    u: Nx,
    U: Fx,
    V: zx,
    w: $x,
    W: Bx,
    x: null,
    X: null,
    y: Ix,
    Y: Wx,
    Z: jx,
    "%": vp
  }, _ = {
    a: Ae,
    A: xe,
    b: De,
    B: oe,
    c: null,
    d: yp,
    e: yp,
    f: Xx,
    g: ab,
    G: ob,
    H: Ux,
    I: Kx,
    j: Yx,
    L: ig,
    m: qx,
    M: Gx,
    p: ze,
    q: He,
    Q: xp,
    s: bp,
    S: Zx,
    u: Qx,
    U: Jx,
    V: eb,
    w: tb,
    W: nb,
    x: null,
    X: null,
    y: rb,
    Y: ib,
    Z: lb,
    "%": vp
  }, N = {
    a: q,
    A: Y,
    b: U,
    B: te,
    c: me,
    d: pp,
    e: pp,
    f: wx,
    g: hp,
    G: fp,
    H: mp,
    I: mp,
    j: bx,
    L: kx,
    m: xx,
    M: Sx,
    p: V,
    q: vx,
    Q: Cx,
    s: Ax,
    S: Ex,
    u: hx,
    U: px,
    V: mx,
    w: fx,
    W: gx,
    x: I,
    X: le,
    y: hp,
    Y: fp,
    Z: yx,
    "%": Tx
  };
  O.x = R(r, O), O.X = R(n, O), O.c = R(t, O), _.x = R(r, _), _.X = R(n, _), _.c = R(t, _);
  function R(Ce, ge) {
    return function(Oe) {
      var ie = [], ke = -1, Pe = 0, We = Ce.length, Ye, qe, lt;
      for (Oe instanceof Date || (Oe = /* @__PURE__ */ new Date(+Oe)); ++ke < We; )
        Ce.charCodeAt(ke) === 37 && (ie.push(Ce.slice(Pe, ke)), (qe = dp[Ye = Ce.charAt(++ke)]) != null ? Ye = Ce.charAt(++ke) : qe = Ye === "e" ? " " : "0", (lt = ge[Ye]) && (Ye = lt(Oe, qe)), ie.push(Ye), Pe = ke + 1);
      return ie.push(Ce.slice(Pe, ke)), ie.join("");
    };
  }
  function j(Ce, ge) {
    return function(Oe) {
      var ie = rs(1900, void 0, 1), ke = B(ie, Ce, Oe += "", 0), Pe, We;
      if (ke != Oe.length)
        return null;
      if ("Q" in ie)
        return new Date(ie.Q);
      if ("s" in ie)
        return new Date(ie.s * 1e3 + ("L" in ie ? ie.L : 0));
      if (ge && !("Z" in ie) && (ie.Z = 0), "p" in ie && (ie.H = ie.H % 12 + ie.p * 12), ie.m === void 0 && (ie.m = "q" in ie ? ie.q : 0), "V" in ie) {
        if (ie.V < 1 || ie.V > 53)
          return null;
        "w" in ie || (ie.w = 1), "Z" in ie ? (Pe = Nd(rs(ie.y, 0, 1)), We = Pe.getUTCDay(), Pe = We > 4 || We === 0 ? Gu.ceil(Pe) : Gu(Pe), Pe = tg.offset(Pe, (ie.V - 1) * 7), ie.y = Pe.getUTCFullYear(), ie.m = Pe.getUTCMonth(), ie.d = Pe.getUTCDate() + (ie.w + 6) % 7) : (Pe = _d(rs(ie.y, 0, 1)), We = Pe.getDay(), Pe = We > 4 || We === 0 ? qu.ceil(Pe) : qu(Pe), Pe = Qm.offset(Pe, (ie.V - 1) * 7), ie.y = Pe.getFullYear(), ie.m = Pe.getMonth(), ie.d = Pe.getDate() + (ie.w + 6) % 7);
      } else
        ("W" in ie || "U" in ie) && ("w" in ie || (ie.w = "u" in ie ? ie.u % 7 : "W" in ie ? 1 : 0), We = "Z" in ie ? Nd(rs(ie.y, 0, 1)).getUTCDay() : _d(rs(ie.y, 0, 1)).getDay(), ie.m = 0, ie.d = "W" in ie ? (ie.w + 6) % 7 + ie.W * 7 - (We + 5) % 7 : ie.w + ie.U * 7 - (We + 6) % 7);
      return "Z" in ie ? (ie.H += ie.Z / 100 | 0, ie.M += ie.Z % 100, Nd(ie)) : _d(ie);
    };
  }
  function B(Ce, ge, Oe, ie) {
    for (var ke = 0, Pe = ge.length, We = Oe.length, Ye, qe; ke < Pe; ) {
      if (ie >= We)
        return -1;
      if (Ye = ge.charCodeAt(ke++), Ye === 37) {
        if (Ye = ge.charAt(ke++), qe = N[Ye in dp ? ge.charAt(ke++) : Ye], !qe || (ie = qe(Ce, Oe, ie)) < 0)
          return -1;
      } else if (Ye != Oe.charCodeAt(ie++))
        return -1;
    }
    return ie;
  }
  function V(Ce, ge, Oe) {
    var ie = d.exec(ge.slice(Oe));
    return ie ? (Ce.p = g.get(ie[0].toLowerCase()), Oe + ie[0].length) : -1;
  }
  function q(Ce, ge, Oe) {
    var ie = k.exec(ge.slice(Oe));
    return ie ? (Ce.w = E.get(ie[0].toLowerCase()), Oe + ie[0].length) : -1;
  }
  function Y(Ce, ge, Oe) {
    var ie = v.exec(ge.slice(Oe));
    return ie ? (Ce.w = y.get(ie[0].toLowerCase()), Oe + ie[0].length) : -1;
  }
  function U(Ce, ge, Oe) {
    var ie = m.exec(ge.slice(Oe));
    return ie ? (Ce.m = L.get(ie[0].toLowerCase()), Oe + ie[0].length) : -1;
  }
  function te(Ce, ge, Oe) {
    var ie = M.exec(ge.slice(Oe));
    return ie ? (Ce.m = T.get(ie[0].toLowerCase()), Oe + ie[0].length) : -1;
  }
  function me(Ce, ge, Oe) {
    return B(Ce, t, ge, Oe);
  }
  function I(Ce, ge, Oe) {
    return B(Ce, r, ge, Oe);
  }
  function le(Ce, ge, Oe) {
    return B(Ce, n, ge, Oe);
  }
  function ue(Ce) {
    return f[Ce.getDay()];
  }
  function fe(Ce) {
    return o[Ce.getDay()];
  }
  function ae(Ce) {
    return c[Ce.getMonth()];
  }
  function W(Ce) {
    return s[Ce.getMonth()];
  }
  function Z(Ce) {
    return a[+(Ce.getHours() >= 12)];
  }
  function ee(Ce) {
    return 1 + ~~(Ce.getMonth() / 3);
  }
  function Ae(Ce) {
    return f[Ce.getUTCDay()];
  }
  function xe(Ce) {
    return o[Ce.getUTCDay()];
  }
  function De(Ce) {
    return c[Ce.getUTCMonth()];
  }
  function oe(Ce) {
    return s[Ce.getUTCMonth()];
  }
  function ze(Ce) {
    return a[+(Ce.getUTCHours() >= 12)];
  }
  function He(Ce) {
    return 1 + ~~(Ce.getUTCMonth() / 3);
  }
  return {
    format: function(Ce) {
      var ge = R(Ce += "", O);
      return ge.toString = function() {
        return Ce;
      }, ge;
    },
    parse: function(Ce) {
      var ge = j(Ce += "", !1);
      return ge.toString = function() {
        return Ce;
      }, ge;
    },
    utcFormat: function(Ce) {
      var ge = R(Ce += "", _);
      return ge.toString = function() {
        return Ce;
      }, ge;
    },
    utcParse: function(Ce) {
      var ge = j(Ce += "", !0);
      return ge.toString = function() {
        return Ce;
      }, ge;
    }
  };
}
var dp = { "-": "", _: " ", 0: "0" }, Wn = /^\s*\d+/, ux = /^%/, cx = /[\\^$*+?|[\]().{}]/g;
function Gt(e, t, r) {
  var n = e < 0 ? "-" : "", a = (n ? -e : e) + "", o = a.length;
  return n + (o < r ? new Array(r - o + 1).join(t) + a : a);
}
function dx(e) {
  return e.replace(cx, "\\$&");
}
function as(e) {
  return new RegExp("^(?:" + e.map(dx).join("|") + ")", "i");
}
function is(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function fx(e, t, r) {
  var n = Wn.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function hx(e, t, r) {
  var n = Wn.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function px(e, t, r) {
  var n = Wn.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function mx(e, t, r) {
  var n = Wn.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function gx(e, t, r) {
  var n = Wn.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function fp(e, t, r) {
  var n = Wn.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function hp(e, t, r) {
  var n = Wn.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function yx(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function vx(e, t, r) {
  var n = Wn.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function xx(e, t, r) {
  var n = Wn.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function pp(e, t, r) {
  var n = Wn.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function bx(e, t, r) {
  var n = Wn.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function mp(e, t, r) {
  var n = Wn.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function Sx(e, t, r) {
  var n = Wn.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function Ex(e, t, r) {
  var n = Wn.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function kx(e, t, r) {
  var n = Wn.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function wx(e, t, r) {
  var n = Wn.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function Tx(e, t, r) {
  var n = ux.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function Cx(e, t, r) {
  var n = Wn.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function Ax(e, t, r) {
  var n = Wn.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function gp(e, t) {
  return Gt(e.getDate(), t, 2);
}
function Px(e, t) {
  return Gt(e.getHours(), t, 2);
}
function Rx(e, t) {
  return Gt(e.getHours() % 12 || 12, t, 2);
}
function Lx(e, t) {
  return Gt(1 + Qm.count(Es(e), e), t, 3);
}
function rg(e, t) {
  return Gt(e.getMilliseconds(), t, 3);
}
function Dx(e, t) {
  return rg(e, t) + "000";
}
function Ox(e, t) {
  return Gt(e.getMonth() + 1, t, 2);
}
function Mx(e, t) {
  return Gt(e.getMinutes(), t, 2);
}
function _x(e, t) {
  return Gt(e.getSeconds(), t, 2);
}
function Nx(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Fx(e, t) {
  return Gt(Jm.count(Es(e) - 1, e), t, 2);
}
function ag(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? el(e) : el.ceil(e);
}
function zx(e, t) {
  return e = ag(e), Gt(el.count(Es(e), e) + (Es(e).getDay() === 4), t, 2);
}
function $x(e) {
  return e.getDay();
}
function Bx(e, t) {
  return Gt(qu.count(Es(e) - 1, e), t, 2);
}
function Ix(e, t) {
  return Gt(e.getFullYear() % 100, t, 2);
}
function Hx(e, t) {
  return e = ag(e), Gt(e.getFullYear() % 100, t, 2);
}
function Wx(e, t) {
  return Gt(e.getFullYear() % 1e4, t, 4);
}
function Vx(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? el(e) : el.ceil(e), Gt(e.getFullYear() % 1e4, t, 4);
}
function jx(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Gt(t / 60 | 0, "0", 2) + Gt(t % 60, "0", 2);
}
function yp(e, t) {
  return Gt(e.getUTCDate(), t, 2);
}
function Ux(e, t) {
  return Gt(e.getUTCHours(), t, 2);
}
function Kx(e, t) {
  return Gt(e.getUTCHours() % 12 || 12, t, 2);
}
function Yx(e, t) {
  return Gt(1 + tg.count(ks(e), e), t, 3);
}
function ig(e, t) {
  return Gt(e.getUTCMilliseconds(), t, 3);
}
function Xx(e, t) {
  return ig(e, t) + "000";
}
function qx(e, t) {
  return Gt(e.getUTCMonth() + 1, t, 2);
}
function Gx(e, t) {
  return Gt(e.getUTCMinutes(), t, 2);
}
function Zx(e, t) {
  return Gt(e.getUTCSeconds(), t, 2);
}
function Qx(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Jx(e, t) {
  return Gt(ng.count(ks(e) - 1, e), t, 2);
}
function og(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? tl(e) : tl.ceil(e);
}
function eb(e, t) {
  return e = og(e), Gt(tl.count(ks(e), e) + (ks(e).getUTCDay() === 4), t, 2);
}
function tb(e) {
  return e.getUTCDay();
}
function nb(e, t) {
  return Gt(Gu.count(ks(e) - 1, e), t, 2);
}
function rb(e, t) {
  return Gt(e.getUTCFullYear() % 100, t, 2);
}
function ab(e, t) {
  return e = og(e), Gt(e.getUTCFullYear() % 100, t, 2);
}
function ib(e, t) {
  return Gt(e.getUTCFullYear() % 1e4, t, 4);
}
function ob(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? tl(e) : tl.ceil(e), Gt(e.getUTCFullYear() % 1e4, t, 4);
}
function lb() {
  return "+0000";
}
function vp() {
  return "%";
}
function xp(e) {
  return +e;
}
function bp(e) {
  return Math.floor(+e / 1e3);
}
var Uo, ef, lg;
sb({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function sb(e) {
  return Uo = sx(e), ef = Uo.format, lg = Uo.parse, Uo.utcFormat, Uo.utcParse, Uo;
}
const Et = se.createContext({}), jt = {
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
    if (jt.str(e) || jt.num(e))
      return e === t;
    if (jt.obj(e) && jt.obj(t) && Object.keys(e).length + Object.keys(t).length === 0)
      return !0;
    let r;
    for (r in e)
      if (!(r in t))
        return !1;
    for (r in t)
      if (e[r] !== t[r])
        return !1;
    return jt.und(r) ? e === t : !0;
  }
};
function ub(e, t) {
  return t === void 0 && (t = !0), (r) => (jt.arr(r) ? r : Object.keys(r)).reduce((n, a) => {
    const o = t ? a[0].toLowerCase() + a.substring(1) : a;
    return n[o] = e(o), n;
  }, e);
}
function sg() {
  const e = se.useState(!1), t = e[1];
  return se.useCallback(() => t((n) => !n), []);
}
function Li(e, t) {
  return jt.und(e) || jt.nul(e) ? t : e;
}
function Go(e) {
  return jt.und(e) ? [] : jt.arr(e) ? e : [e];
}
function zr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return jt.fun(e) ? e(...r) : e;
}
function cb(e) {
  return e.to, e.from, e.config, e.onStart, e.onRest, e.onFrame, e.children, e.reset, e.reverse, e.force, e.immediate, e.delay, e.attach, e.destroyed, e.interpolateTo, e.ref, e.lazy, Jr(e, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);
}
function Fd(e) {
  const t = cb(e);
  if (jt.und(t))
    return dn({
      to: t
    }, e);
  const r = Object.keys(e).reduce((n, a) => jt.und(t[a]) ? dn({}, n, {
    [a]: e[a]
  }) : n, {});
  return dn({
    to: t
  }, r);
}
function db(e, t) {
  return t && (jt.fun(t) ? t(e) : jt.obj(t) && (t.current = e)), e;
}
class $r {
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
class tf extends $r {
  constructor() {
    super(...arguments), this.payload = [], this.attach = () => this.payload.forEach((t) => t instanceof $r && t.addChild(this)), this.detach = () => this.payload.forEach((t) => t instanceof $r && t.removeChild(this));
  }
}
class ug extends $r {
  constructor() {
    super(...arguments), this.payload = {}, this.attach = () => Object.values(this.payload).forEach((t) => t instanceof $r && t.addChild(this)), this.detach = () => Object.values(this.payload).forEach((t) => t instanceof $r && t.removeChild(this));
  }
  getValue(t) {
    t === void 0 && (t = !1);
    const r = {};
    for (const n in this.payload) {
      const a = this.payload[n];
      t && !(a instanceof $r) || (r[n] = a instanceof $r ? a[t ? "getAnimatedValue" : "getValue"]() : a);
    }
    return r;
  }
  getAnimatedValue() {
    return this.getValue(!0);
  }
}
let qf;
function fb(e, t) {
  qf = {
    fn: e,
    transform: t
  };
}
let cg;
function hb(e) {
  cg = e;
}
let dg = (e) => typeof window < "u" ? window.requestAnimationFrame(e) : -1, Zu;
function pb(e) {
  Zu = e;
}
let fg = () => Date.now(), mb = (e) => e.current, hg;
function gb(e) {
  hg = e;
}
class yb extends ug {
  constructor(t, r) {
    super(), this.update = void 0, this.payload = t.style ? dn({}, t, {
      style: hg(t.style)
    }) : t, this.update = r, this.attach();
  }
}
const vb = (e) => jt.fun(e) && !(e.prototype instanceof i.Component), xb = (e) => se.forwardRef((r, n) => {
  const a = sg(), o = se.useRef(!0), f = se.useRef(null), s = se.useRef(null), c = se.useCallback((y) => {
    const k = f.current, E = () => {
      let M = !1;
      s.current && (M = qf.fn(s.current, f.current.getAnimatedValue())), (!s.current || M === !1) && a();
    };
    f.current = new yb(y, E), k && k.detach();
  }, []);
  se.useEffect(() => () => {
    o.current = !1, f.current && f.current.detach();
  }, []), se.useImperativeHandle(n, () => mb(s)), c(r);
  const d = f.current.getValue();
  d.scrollTop, d.scrollLeft;
  const g = Jr(d, ["scrollTop", "scrollLeft"]), v = vb(e) ? void 0 : (y) => s.current = db(y, n);
  return i.createElement(e, dn({}, g, {
    ref: v
  }));
});
let ds = !1;
const Ii = /* @__PURE__ */ new Set(), pg = () => {
  if (!ds)
    return !1;
  let e = fg();
  for (let t of Ii) {
    let r = !1;
    for (let n = 0; n < t.configs.length; n++) {
      let a = t.configs[n], o, f;
      for (let s = 0; s < a.animatedValues.length; s++) {
        let c = a.animatedValues[s];
        if (c.done)
          continue;
        let d = a.fromValues[s], g = a.toValues[s], v = c.lastPosition, y = g instanceof $r, k = Array.isArray(a.initialVelocity) ? a.initialVelocity[s] : a.initialVelocity;
        if (y && (g = g.getValue()), a.immediate) {
          c.setValue(g), c.done = !0;
          continue;
        }
        if (typeof d == "string" || typeof g == "string") {
          c.setValue(g), c.done = !0;
          continue;
        }
        if (a.duration !== void 0)
          v = d + a.easing((e - c.startTime) / a.duration) * (g - d), o = e >= c.startTime + a.duration;
        else if (a.decay)
          v = d + k / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (e - c.startTime))), o = Math.abs(c.lastPosition - v) < 0.1, o && (g = v);
        else {
          f = c.lastTime !== void 0 ? c.lastTime : e, k = c.lastVelocity !== void 0 ? c.lastVelocity : a.initialVelocity, e > f + 64 && (f = e);
          let E = Math.floor(e - f);
          for (let L = 0; L < E; ++L) {
            let O = -a.tension * (v - g), _ = -a.friction * k, N = (O + _) / a.mass;
            k = k + N * 1 / 1e3, v = v + k * 1 / 1e3;
          }
          let M = a.clamp && a.tension !== 0 ? d < g ? v > g : v < g : !1, T = Math.abs(k) <= a.precision, m = a.tension !== 0 ? Math.abs(g - v) <= a.precision : !0;
          o = M || T && m, c.lastVelocity = k, c.lastTime = e;
        }
        y && !a.toValues[s].done && (o = !1), o ? (c.value !== g && (v = g), c.done = !0) : r = !0, c.setValue(v), c.lastPosition = v;
      }
      t.props.onFrame && (t.values[a.name] = a.interpolation.getValue());
    }
    t.props.onFrame && t.props.onFrame(t.values), r || (Ii.delete(t), t.stop(!0));
  }
  return Ii.size ? dg(pg) : ds = !1, ds;
}, bb = (e) => {
  Ii.has(e) || Ii.add(e), ds || (ds = !0, dg(pg));
}, Sb = (e) => {
  Ii.has(e) && Ii.delete(e);
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
    const g = kb(d, o);
    return Eb(d, o[g], o[g + 1], a[g], a[g + 1], c, f, s, n.map);
  };
}
function Eb(e, t, r, n, a, o, f, s, c) {
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
function kb(e, t) {
  for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r)
    ;
  return r - 1;
}
class nl extends tf {
  constructor(t, r, n, a) {
    super(), this.calc = void 0, this.payload = t instanceof tf && !(t instanceof nl) ? t.getPayload() : Array.isArray(t) ? t : [t], this.calc = Qu(r, n, a);
  }
  getValue() {
    return this.calc(...this.payload.map((t) => t.getValue()));
  }
  updateConfig(t, r, n) {
    this.calc = Qu(t, r, n);
  }
  interpolate(t, r, n) {
    return new nl(this, t, r, n);
  }
}
const wb = (e, t, r) => e && new nl(e, t, r);
function mg(e, t) {
  "update" in e ? t.add(e) : e.getChildren().forEach((r) => mg(r, t));
}
class nf extends $r {
  constructor(t) {
    var r;
    super(), r = this, this.animatedStyles = /* @__PURE__ */ new Set(), this.value = void 0, this.startPosition = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.startTime = void 0, this.lastTime = void 0, this.done = !1, this.setValue = function(n, a) {
      a === void 0 && (a = !0), r.value = n, a && r.flush();
    }, this.value = t, this.startPosition = t, this.lastPosition = t;
  }
  flush() {
    this.animatedStyles.size === 0 && mg(this, this.animatedStyles), this.animatedStyles.forEach((t) => t.update());
  }
  clearStyles() {
    this.animatedStyles.clear();
  }
  getValue() {
    return this.value;
  }
  interpolate(t, r, n) {
    return new nl(this, t, r, n);
  }
}
class Tb extends tf {
  constructor(t) {
    super(), this.payload = t.map((r) => new nf(r));
  }
  setValue(t, r) {
    r === void 0 && (r = !0), Array.isArray(t) ? t.length === this.payload.length && t.forEach((n, a) => this.payload[a].setValue(n, r)) : this.payload.forEach((n) => n.setValue(t, r));
  }
  getValue() {
    return this.payload.map((t) => t.getValue());
  }
  interpolate(t, r) {
    return new nl(this, t, r);
  }
}
let Cb = 0;
class Ab {
  constructor() {
    this.id = void 0, this.idle = !0, this.hasChanged = !1, this.guid = 0, this.local = 0, this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.values = {}, this.configs = [], this.listeners = [], this.queue = [], this.localQueue = void 0, this.getValues = () => this.interpolations, this.id = Cb++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */
  update(t) {
    if (!t)
      return this;
    const r = Fd(t), n = r.delay, a = n === void 0 ? 0 : n, o = r.to, f = Jr(r, ["delay", "to"]);
    if (jt.arr(o) || jt.fun(o))
      this.queue.push(dn({}, f, {
        delay: a,
        to: o
      }));
    else if (o) {
      let s = {};
      Object.entries(o).forEach((c) => {
        let d = c[0], g = c[1];
        const v = dn({
          to: {
            [d]: g
          },
          delay: zr(a, d)
        }, f), y = s[v.delay] && s[v.delay].to;
        s[v.delay] = dn({}, s[v.delay], v, {
          to: dn({}, y, v.to)
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
        jt.obj(f) && (this.merged = dn({}, f, this.merged)), jt.obj(c) && (this.merged = dn({}, this.merged, c));
      });
      const r = this.local = ++this.guid, n = this.localQueue = this.queue;
      this.queue = [], n.forEach((a, o) => {
        let f = a.delay, s = Jr(a, ["delay"]);
        const c = (g) => {
          o === n.length - 1 && r === this.guid && g && (this.idle = !0, this.props.onRest && this.props.onRest(this.merged)), t && t();
        };
        let d = jt.arr(s.to) || jt.fun(s.to);
        f ? setTimeout(() => {
          r === this.guid && (d ? this.runAsync(s, c) : this.diff(s).start(c));
        }, f) : d ? this.runAsync(s, c) : this.diff(s).start(c);
      });
    } else
      jt.fun(t) && this.listeners.push(t), this.props.onStart && this.props.onStart(), bb(this);
    return this;
  }
  stop(t) {
    return this.listeners.forEach((r) => r(t)), this.listeners = [], this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */
  pause(t) {
    return this.stop(!0), t && Sb(this), this;
  }
  runAsync(t, r) {
    var n = this;
    t.delay;
    let a = Jr(t, ["delay"]);
    const o = this.local;
    let f = Promise.resolve(void 0);
    if (jt.arr(a.to))
      for (let s = 0; s < a.to.length; s++) {
        const c = s, d = dn({}, a, Fd(a.to[c]));
        jt.arr(d.config) && (d.config = d.config[c]), f = f.then(() => {
          if (o === this.guid)
            return new Promise((g) => this.diff(d).start(g));
        });
      }
    else if (jt.fun(a.to)) {
      let s = 0, c;
      f = f.then(() => a.to(
        // next(props)
        (d) => {
          const g = dn({}, a, Fd(d));
          if (jt.arr(g.config) && (g.config = g.config[s]), s++, o === this.guid)
            return c = new Promise((v) => this.diff(g).start(v));
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
    let r = this.props, n = r.from, a = n === void 0 ? {} : n, o = r.to, f = o === void 0 ? {} : o, s = r.config, c = s === void 0 ? {} : s, d = r.reverse, g = r.attach, v = r.reset, y = r.immediate;
    if (d) {
      var k = [f, a];
      a = k[0], f = k[1];
    }
    this.merged = dn({}, a, this.merged, f), this.hasChanged = !1;
    let E = g && g(this);
    if (this.animations = Object.entries(this.merged).reduce((M, T) => {
      let m = T[0], L = T[1], O = M[m] || {};
      const _ = jt.num(L), N = jt.str(L) && !L.startsWith("#") && !/\d/.test(L) && !cg[L], R = jt.arr(L), j = !_ && !R && !N;
      let B = jt.und(a[m]) ? L : a[m], V = _ || R || N ? L : 1, q = zr(c, m);
      E && (V = E.animations[m].parent);
      let Y = O.parent, U = O.interpolation, te = Go(E ? V.getPayload() : V), me, I = L;
      j && (I = Zu({
        range: [0, 1],
        output: [L, L]
      })(1));
      let le = U && U.getValue();
      const fe = !jt.und(Y) && O.animatedValues.some((ee) => !ee.done), ae = !jt.equ(I, le), W = !jt.equ(I, O.previous), Z = !jt.equ(q, O.config);
      if (v || W && ae || Z) {
        if (_ || N)
          Y = U = O.parent || new nf(B);
        else if (R)
          Y = U = O.parent || new Tb(B);
        else if (j) {
          let ee = O.interpolation && O.interpolation.calc(O.parent.value);
          ee = ee !== void 0 && !v ? ee : B, O.parent ? (Y = O.parent, Y.setValue(0, !1)) : Y = new nf(0);
          const Ae = {
            output: [ee, L]
          };
          O.interpolation ? (U = O.interpolation, O.interpolation.updateConfig(Ae)) : U = Y.interpolate(Ae);
        }
        return te = Go(E ? V.getPayload() : V), me = Go(Y.getPayload()), v && !j && Y.setValue(B, !1), this.hasChanged = !0, me.forEach((ee) => {
          ee.startPosition = ee.value, ee.lastPosition = ee.value, ee.lastVelocity = fe ? ee.lastVelocity : void 0, ee.lastTime = fe ? ee.lastTime : void 0, ee.startTime = fg(), ee.done = !1, ee.animatedStyles.clear();
        }), zr(y, m) && Y.setValue(j ? V : L, !1), dn({}, M, {
          [m]: dn({}, O, {
            name: m,
            parent: Y,
            interpolation: U,
            animatedValues: me,
            toValues: te,
            previous: I,
            config: q,
            fromValues: Go(Y.getValue()),
            immediate: zr(y, m),
            initialVelocity: Li(q.velocity, 0),
            clamp: Li(q.clamp, !1),
            precision: Li(q.precision, 0.01),
            tension: Li(q.tension, 170),
            friction: Li(q.friction, 26),
            mass: Li(q.mass, 1),
            duration: q.duration,
            easing: Li(q.easing, (ee) => ee),
            decay: q.decay
          })
        });
      } else
        return ae ? M : (j && (Y.setValue(1, !1), U.updateConfig({
          output: [I, I]
        })), Y.done = !0, this.hasChanged = !0, dn({}, M, {
          [m]: dn({}, M[m], {
            previous: I
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
let Pb = 0;
const Bu = "enter", zd = "leave", $d = "update", Rb = (e, t) => (typeof t == "function" ? e.map(t) : Go(t)).map(String), rf = (e) => {
  let t = e.items, r = e.keys, n = r === void 0 ? (o) => o : r, a = Jr(e, ["items", "keys"]);
  return t = Go(t !== void 0 ? t : null), dn({
    items: t,
    keys: Rb(t, n)
  }, a);
};
function Lb(e, t, r) {
  const n = dn({
    items: e,
    keys: t || ((L) => L)
  }, r), a = rf(n), o = a.lazy, f = o === void 0 ? !1 : o;
  a.unique;
  const s = a.reset, c = s === void 0 ? !1 : s;
  a.enter, a.leave, a.update;
  const d = a.onDestroyed;
  a.keys, a.items;
  const g = a.onFrame, v = a.onRest, y = a.onStart, k = a.ref, E = Jr(a, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]), M = sg(), T = se.useRef(!1), m = se.useRef({
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
    start: () => Promise.all(Array.from(m.current.instances).map((L) => {
      let O = L[1];
      return new Promise((_) => O.start(_));
    })),
    stop: (L) => Array.from(m.current.instances).forEach((O) => O[1].stop(L)),
    get controllers() {
      return Array.from(m.current.instances).map((L) => L[1]);
    }
  })), m.current = Db(m.current, n), m.current.changed && m.current.transitions.forEach((L) => {
    const O = L.slot, _ = L.from, N = L.to, R = L.config, j = L.trail, B = L.key, V = L.item;
    m.current.instances.has(B) || m.current.instances.set(B, new Ab());
    const q = m.current.instances.get(B), Y = dn({}, E, {
      to: N,
      from: _,
      config: R,
      ref: k,
      onRest: (U) => {
        m.current.mounted && (L.destroyed && (!k && !f && Sp(m, B), d && d(V)), !Array.from(m.current.instances).some((I) => !I[1].idle) && (k || f) && m.current.deleted.length > 0 && Sp(m), v && v(V, O, U));
      },
      onStart: y && (() => y(V, O)),
      onFrame: g && ((U) => g(V, O, U)),
      delay: j,
      reset: c && O === Bu
      // Update controller
    });
    q.update(Y), m.current.paused || q.start();
  }), se.useEffect(() => (m.current.mounted = T.current = !0, () => {
    m.current.mounted = T.current = !1, Array.from(m.current.instances).map((L) => L[1].destroy()), m.current.instances.clear();
  }), []), m.current.transitions.map((L) => {
    let O = L.item, _ = L.slot, N = L.key;
    return {
      item: O,
      key: N,
      state: _,
      props: m.current.instances.get(N).getValues()
    };
  });
}
function Sp(e, t) {
  const r = e.current.deleted;
  for (let n of r) {
    let a = n.key;
    const o = (f) => f.key !== a;
    (jt.und(t) || t === a) && (e.current.instances.delete(a), e.current.transitions = e.current.transitions.filter(o), e.current.deleted = e.current.deleted.filter(o));
  }
  e.current.forceUpdate();
}
function Db(e, t) {
  let r = e.first, n = e.prevProps, a = Jr(e, ["first", "prevProps"]), o = rf(t), f = o.items, s = o.keys, c = o.initial, d = o.from, g = o.enter, v = o.leave, y = o.update, k = o.trail, E = k === void 0 ? 0 : k, M = o.unique, T = o.config, m = o.order, L = m === void 0 ? [Bu, zd, $d] : m, O = rf(n), _ = O.keys, N = O.items, R = dn({}, a.current), j = [...a.deleted], B = Object.keys(R), V = new Set(B), q = new Set(s), Y = s.filter((le) => !V.has(le)), U = a.transitions.filter((le) => !le.destroyed && !q.has(le.originalKey)).map((le) => le.originalKey), te = s.filter((le) => V.has(le)), me = -E;
  for (; L.length; )
    switch (L.shift()) {
      case Bu: {
        Y.forEach((ue, fe) => {
          M && j.find((ee) => ee.originalKey === ue) && (j = j.filter((ee) => ee.originalKey !== ue));
          const ae = s.indexOf(ue), W = f[ae], Z = r && c !== void 0 ? "initial" : Bu;
          R[ue] = {
            slot: Z,
            originalKey: ue,
            key: M ? String(ue) : Pb++,
            item: W,
            trail: me = me + E,
            config: zr(T, W, Z),
            from: zr(r && c !== void 0 ? c || {} : d, W),
            to: zr(g, W)
          };
        });
        break;
      }
      case zd: {
        U.forEach((ue) => {
          const fe = _.indexOf(ue), ae = N[fe], W = zd;
          j.unshift(dn({}, R[ue], {
            slot: W,
            destroyed: !0,
            left: _[Math.max(0, fe - 1)],
            right: _[Math.min(_.length, fe + 1)],
            trail: me = me + E,
            config: zr(T, ae, W),
            to: zr(v, ae)
          })), delete R[ue];
        });
        break;
      }
      case $d: {
        te.forEach((ue) => {
          const fe = s.indexOf(ue), ae = f[fe], W = $d;
          R[ue] = dn({}, R[ue], {
            item: ae,
            slot: W,
            trail: me = me + E,
            config: zr(T, ae, W),
            to: zr(y, ae)
          });
        });
        break;
      }
    }
  let I = s.map((le) => R[le]);
  return j.forEach((le) => {
    let ue = le.left;
    le.right;
    let fe = Jr(le, ["left", "right"]), ae;
    (ae = I.findIndex((W) => W.originalKey === ue)) !== -1 && (ae += 1), ae = Math.max(0, ae), I = [...I.slice(0, ae), fe, ...I.slice(ae)];
  }), dn({}, a, {
    changed: Y.length || U.length || te.length,
    first: r && Y.length === 0,
    transitions: I,
    current: R,
    deleted: j,
    prevProps: t
  });
}
class Ob extends ug {
  constructor(t) {
    t === void 0 && (t = {}), super(), t.transform && !(t.transform instanceof $r) && (t = qf.transform(t)), this.payload = t;
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
}, Br = "[-+]?\\d*\\.?\\d+", ec = Br + "%";
function kc() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const Mb = new RegExp("rgb" + kc(Br, Br, Br)), _b = new RegExp("rgba" + kc(Br, Br, Br, Br)), Nb = new RegExp("hsl" + kc(Br, ec, ec)), Fb = new RegExp("hsla" + kc(Br, ec, ec, Br)), zb = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, $b = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Bb = /^#([0-9a-fA-F]{6})$/, Ib = /^#([0-9a-fA-F]{8})$/;
function Hb(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Bb.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Ju.hasOwnProperty(e) ? Ju[e] : (t = Mb.exec(e)) ? (Ko(t[1]) << 24 | // r
  Ko(t[2]) << 16 | // g
  Ko(t[3]) << 8 | // b
  255) >>> // a
  0 : (t = _b.exec(e)) ? (Ko(t[1]) << 24 | // r
  Ko(t[2]) << 16 | // g
  Ko(t[3]) << 8 | // b
  wp(t[4])) >>> // a
  0 : (t = zb.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (t = Ib.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = $b.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    t[4] + t[4],
    // a
    16
  ) >>> 0 : (t = Nb.exec(e)) ? (Ep(
    kp(t[1]),
    // h
    Cu(t[2]),
    // s
    Cu(t[3])
    // l
  ) | 255) >>> // a
  0 : (t = Fb.exec(e)) ? (Ep(
    kp(t[1]),
    // h
    Cu(t[2]),
    // s
    Cu(t[3])
    // l
  ) | wp(t[4])) >>> // a
  0 : null;
}
function Bd(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function Ep(e, t, r) {
  const n = r < 0.5 ? r * (1 + t) : r + t - r * t, a = 2 * r - n, o = Bd(a, n, e + 1 / 3), f = Bd(a, n, e), s = Bd(a, n, e - 1 / 3);
  return Math.round(o * 255) << 24 | Math.round(f * 255) << 16 | Math.round(s * 255) << 8;
}
function Ko(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function kp(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function wp(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function Cu(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Tp(e) {
  let t = Hb(e);
  if (t === null)
    return e;
  t = t || 0;
  let r = (t & 4278190080) >>> 24, n = (t & 16711680) >>> 16, a = (t & 65280) >>> 8, o = (t & 255) / 255;
  return `rgba(${r}, ${n}, ${a}, ${o})`;
}
const Au = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, Wb = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, Vb = new RegExp(`(${Object.keys(Ju).join("|")})`, "g"), jb = (e) => {
  const t = e.output.map((a) => a.replace(Wb, Tp)).map((a) => a.replace(Vb, Tp)), r = t[0].match(Au).map(() => []);
  t.forEach((a) => {
    a.match(Au).forEach((o, f) => r[f].push(+o));
  });
  const n = t[0].match(Au).map((a, o) => Qu(dn({}, e, {
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
const Ub = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), Kb = ["Webkit", "Ms", "Moz", "O"];
fs = Object.keys(fs).reduce((e, t) => (Kb.forEach((r) => e[Ub(r, t)] = e[t]), e), fs);
function Yb(e, t, r) {
  return t == null || typeof t == "boolean" || t === "" ? "" : !r && typeof t == "number" && t !== 0 && !(fs.hasOwnProperty(e) && fs[e]) ? t + "px" : ("" + t).trim();
}
const Cp = {};
gb((e) => new Ob(e));
pb(jb);
hb(Ju);
fb((e, t) => {
  if (e.nodeType && e.setAttribute !== void 0) {
    const a = t.style, o = t.children, f = t.scrollTop, s = t.scrollLeft, c = Jr(t, ["style", "children", "scrollTop", "scrollLeft"]), d = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter";
    f !== void 0 && (e.scrollTop = f), s !== void 0 && (e.scrollLeft = s), o !== void 0 && (e.textContent = o);
    for (let g in a)
      if (a.hasOwnProperty(g)) {
        var r = g.indexOf("--") === 0, n = Yb(g, a[g], r);
        g === "float" && (g = "cssFloat"), r ? e.style.setProperty(g, n) : e.style[g] = n;
      }
    for (let g in c) {
      const v = d ? g : Cp[g] || (Cp[g] = g.replace(/([A-Z])/g, (y) => "-" + y.toLowerCase()));
      typeof e.getAttribute(v) < "u" && e.setAttribute(v, c[g]);
    }
    return;
  } else
    return !1;
}, (e) => e);
const Xb = [
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
], qb = ub(xb, !1), Ap = qb(Xb);
function Gb(e) {
  return e.innerRadius;
}
function Zb(e) {
  return e.outerRadius;
}
function Qb(e) {
  return e.startAngle;
}
function Jb(e) {
  return e.endAngle;
}
function e0(e) {
  return e && e.padAngle;
}
function t0(e, t, r, n, a, o, f, s) {
  var c = r - e, d = n - t, g = f - a, v = s - o, y = v * c - g * d;
  if (!(y * y < Gn))
    return y = (g * (t - o) - v * (e - a)) / y, [e + y * c, t + y * d];
}
function Pu(e, t, r, n, a, o, f) {
  var s = e - r, c = t - n, d = (f ? o : -o) / Xo(s * s + c * c), g = d * c, v = -d * s, y = e + g, k = t + v, E = r + g, M = n + v, T = (y + E) / 2, m = (k + M) / 2, L = E - y, O = M - k, _ = L * L + O * O, N = a - o, R = y * M - E * k, j = (O < 0 ? -1 : 1) * Xo(Ty(0, N * N * _ - R * R)), B = (R * O - L * j) / _, V = (-R * L - O * j) / _, q = (R * O + L * j) / _, Y = (-R * L + O * j) / _, U = B - T, te = V - m, me = q - T, I = Y - m;
  return U * U + te * te > me * me + I * I && (B = q, V = Y), {
    cx: B,
    cy: V,
    x01: -g,
    y01: -v,
    x11: B * (a / N - 1),
    y11: V * (a / N - 1)
  };
}
function n0() {
  var e = Gb, t = Zb, r = Yt(0), n = null, a = Qb, o = Jb, f = e0, s = null;
  function c() {
    var d, g, v = +e.apply(this, arguments), y = +t.apply(this, arguments), k = a.apply(this, arguments) - _h, E = o.apply(this, arguments) - _h, M = Nh(E - k), T = E > k;
    if (s || (s = d = Sc()), y < v && (g = y, y = v, v = g), !(y > Gn))
      s.moveTo(0, 0);
    else if (M > zu - Gn)
      s.moveTo(y * Pi(k), y * Yr(k)), s.arc(0, 0, y, k, E, !T), v > Gn && (s.moveTo(v * Pi(E), v * Yr(E)), s.arc(0, 0, v, E, k, T));
    else {
      var m = k, L = E, O = k, _ = E, N = M, R = M, j = f.apply(this, arguments) / 2, B = j > Gn && (n ? +n.apply(this, arguments) : Xo(v * v + y * y)), V = Ad(Nh(y - v) / 2, +r.apply(this, arguments)), q = V, Y = V, U, te;
      if (B > Gn) {
        var me = Fh(B / v * Yr(j)), I = Fh(B / y * Yr(j));
        (N -= me * 2) > Gn ? (me *= T ? 1 : -1, O += me, _ -= me) : (N = 0, O = _ = (k + E) / 2), (R -= I * 2) > Gn ? (I *= T ? 1 : -1, m += I, L -= I) : (R = 0, m = L = (k + E) / 2);
      }
      var le = y * Pi(m), ue = y * Yr(m), fe = v * Pi(_), ae = v * Yr(_);
      if (V > Gn) {
        var W = y * Pi(L), Z = y * Yr(L), ee = v * Pi(O), Ae = v * Yr(O), xe;
        if (M < Mh && (xe = t0(le, ue, ee, Ae, W, Z, fe, ae))) {
          var De = le - xe[0], oe = ue - xe[1], ze = W - xe[0], He = Z - xe[1], Ce = 1 / Yr(wy((De * ze + oe * He) / (Xo(De * De + oe * oe) * Xo(ze * ze + He * He))) / 2), ge = Xo(xe[0] * xe[0] + xe[1] * xe[1]);
          q = Ad(V, (v - ge) / (Ce - 1)), Y = Ad(V, (y - ge) / (Ce + 1));
        }
      }
      R > Gn ? Y > Gn ? (U = Pu(ee, Ae, le, ue, y, Y, T), te = Pu(W, Z, fe, ae, y, Y, T), s.moveTo(U.cx + U.x01, U.cy + U.y01), Y < V ? s.arc(U.cx, U.cy, Y, qn(U.y01, U.x01), qn(te.y01, te.x01), !T) : (s.arc(U.cx, U.cy, Y, qn(U.y01, U.x01), qn(U.y11, U.x11), !T), s.arc(0, 0, y, qn(U.cy + U.y11, U.cx + U.x11), qn(te.cy + te.y11, te.cx + te.x11), !T), s.arc(te.cx, te.cy, Y, qn(te.y11, te.x11), qn(te.y01, te.x01), !T))) : (s.moveTo(le, ue), s.arc(0, 0, y, m, L, !T)) : s.moveTo(le, ue), !(v > Gn) || !(N > Gn) ? s.lineTo(fe, ae) : q > Gn ? (U = Pu(fe, ae, W, Z, v, -q, T), te = Pu(le, ue, ee, Ae, v, -q, T), s.lineTo(U.cx + U.x01, U.cy + U.y01), q < V ? s.arc(U.cx, U.cy, q, qn(U.y01, U.x01), qn(te.y01, te.x01), !T) : (s.arc(U.cx, U.cy, q, qn(U.y01, U.x01), qn(U.y11, U.x11), !T), s.arc(0, 0, v, qn(U.cy + U.y11, U.cx + U.x11), qn(te.cy + te.y11, te.cx + te.x11), T), s.arc(te.cx, te.cy, q, qn(te.y11, te.x11), qn(te.y01, te.x01), !T))) : s.arc(0, 0, v, _, O, T);
    }
    if (s.closePath(), d)
      return s = null, d + "" || null;
  }
  return c.centroid = function() {
    var d = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, g = (+a.apply(this, arguments) + +o.apply(this, arguments)) / 2 - Mh / 2;
    return [Pi(g) * d, Yr(g) * d];
  }, c.innerRadius = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : Yt(+d), c) : e;
  }, c.outerRadius = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : Yt(+d), c) : t;
  }, c.cornerRadius = function(d) {
    return arguments.length ? (r = typeof d == "function" ? d : Yt(+d), c) : r;
  }, c.padRadius = function(d) {
    return arguments.length ? (n = d == null ? null : typeof d == "function" ? d : Yt(+d), c) : n;
  }, c.startAngle = function(d) {
    return arguments.length ? (a = typeof d == "function" ? d : Yt(+d), c) : a;
  }, c.endAngle = function(d) {
    return arguments.length ? (o = typeof d == "function" ? d : Yt(+d), c) : o;
  }, c.padAngle = function(d) {
    return arguments.length ? (f = typeof d == "function" ? d : Yt(+d), c) : f;
  }, c.context = function(d) {
    return arguments.length ? (s = d ?? null, c) : s;
  }, c;
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
  return new gg(e);
}
function Gf(e) {
  return e[0];
}
function Zf(e) {
  return e[1];
}
function yg() {
  var e = Gf, t = Zf, r = Yt(!0), n = null, a = wc, o = null;
  function f(s) {
    var c, d = s.length, g, v = !1, y;
    for (n == null && (o = a(y = Sc())), c = 0; c <= d; ++c)
      !(c < d && r(g = s[c], c, s)) === v && ((v = !v) ? o.lineStart() : o.lineEnd()), v && o.point(+e(g, c, s), +t(g, c, s));
    if (y)
      return o = null, y + "" || null;
  }
  return f.x = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : Yt(+s), f) : e;
  }, f.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : Yt(+s), f) : t;
  }, f.defined = function(s) {
    return arguments.length ? (r = typeof s == "function" ? s : Yt(!!s), f) : r;
  }, f.curve = function(s) {
    return arguments.length ? (a = s, n != null && (o = a(n)), f) : a;
  }, f.context = function(s) {
    return arguments.length ? (s == null ? n = o = null : o = a(n = s), f) : n;
  }, f;
}
function r0() {
  var e = Gf, t = null, r = Yt(0), n = Zf, a = Yt(!0), o = null, f = wc, s = null;
  function c(g) {
    var v, y, k, E = g.length, M, T = !1, m, L = new Array(E), O = new Array(E);
    for (o == null && (s = f(m = Sc())), v = 0; v <= E; ++v) {
      if (!(v < E && a(M = g[v], v, g)) === T)
        if (T = !T)
          y = v, s.areaStart(), s.lineStart();
        else {
          for (s.lineEnd(), s.lineStart(), k = v - 1; k >= y; --k)
            s.point(L[k], O[k]);
          s.lineEnd(), s.areaEnd();
        }
      T && (L[v] = +e(M, v, g), O[v] = +r(M, v, g), s.point(t ? +t(M, v, g) : L[v], n ? +n(M, v, g) : O[v]));
    }
    if (m)
      return s = null, m + "" || null;
  }
  function d() {
    return yg().defined(a).curve(f).context(o);
  }
  return c.x = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : Yt(+g), t = null, c) : e;
  }, c.x0 = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : Yt(+g), c) : e;
  }, c.x1 = function(g) {
    return arguments.length ? (t = g == null ? null : typeof g == "function" ? g : Yt(+g), c) : t;
  }, c.y = function(g) {
    return arguments.length ? (r = typeof g == "function" ? g : Yt(+g), n = null, c) : r;
  }, c.y0 = function(g) {
    return arguments.length ? (r = typeof g == "function" ? g : Yt(+g), c) : r;
  }, c.y1 = function(g) {
    return arguments.length ? (n = g == null ? null : typeof g == "function" ? g : Yt(+g), c) : n;
  }, c.lineX0 = c.lineY0 = function() {
    return d().x(e).y(r);
  }, c.lineY1 = function() {
    return d().x(e).y(n);
  }, c.lineX1 = function() {
    return d().x(t).y(r);
  }, c.defined = function(g) {
    return arguments.length ? (a = typeof g == "function" ? g : Yt(!!g), c) : a;
  }, c.curve = function(g) {
    return arguments.length ? (f = g, o != null && (s = f(o)), c) : f;
  }, c.context = function(g) {
    return arguments.length ? (g == null ? o = s = null : s = f(o = g), c) : o;
  }, c;
}
function a0(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function i0(e) {
  return e;
}
function o0() {
  var e = i0, t = a0, r = null, n = Yt(0), a = Yt(zu), o = Yt(0);
  function f(s) {
    var c, d = s.length, g, v, y = 0, k = new Array(d), E = new Array(d), M = +n.apply(this, arguments), T = Math.min(zu, Math.max(-zu, a.apply(this, arguments) - M)), m, L = Math.min(Math.abs(T) / d, o.apply(this, arguments)), O = L * (T < 0 ? -1 : 1), _;
    for (c = 0; c < d; ++c)
      (_ = E[k[c] = c] = +e(s[c], c, s)) > 0 && (y += _);
    for (t != null ? k.sort(function(N, R) {
      return t(E[N], E[R]);
    }) : r != null && k.sort(function(N, R) {
      return r(s[N], s[R]);
    }), c = 0, v = y ? (T - d * O) / y : 0; c < d; ++c, M = m)
      g = k[c], _ = E[g], m = M + (_ > 0 ? _ * v : 0) + O, E[g] = {
        data: s[g],
        index: c,
        value: _,
        startAngle: M,
        endAngle: m,
        padAngle: L
      };
    return E;
  }
  return f.value = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : Yt(+s), f) : e;
  }, f.sortValues = function(s) {
    return arguments.length ? (t = s, r = null, f) : t;
  }, f.sort = function(s) {
    return arguments.length ? (r = s, t = null, f) : r;
  }, f.startAngle = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : Yt(+s), f) : n;
  }, f.endAngle = function(s) {
    return arguments.length ? (a = typeof s == "function" ? s : Yt(+s), f) : a;
  }, f.padAngle = function(s) {
    return arguments.length ? (o = typeof s == "function" ? s : Yt(+s), f) : o;
  }, f;
}
var af = Array.prototype.slice;
function l0(e) {
  return e.source;
}
function s0(e) {
  return e.target;
}
function u0(e) {
  var t = l0, r = s0, n = Gf, a = Zf, o = null;
  function f() {
    var s, c = af.call(arguments), d = t.apply(this, c), g = r.apply(this, c);
    if (o || (o = s = Sc()), e(o, +n.apply(this, (c[0] = d, c)), +a.apply(this, c), +n.apply(this, (c[0] = g, c)), +a.apply(this, c)), s)
      return o = null, s + "" || null;
  }
  return f.source = function(s) {
    return arguments.length ? (t = s, f) : t;
  }, f.target = function(s) {
    return arguments.length ? (r = s, f) : r;
  }, f.x = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : Yt(+s), f) : n;
  }, f.y = function(s) {
    return arguments.length ? (a = typeof s == "function" ? s : Yt(+s), f) : a;
  }, f.context = function(s) {
    return arguments.length ? (o = s ?? null, f) : o;
  }, f;
}
function c0(e, t, r, n, a) {
  e.moveTo(t, r), e.bezierCurveTo(t = (t + n) / 2, r, t, a, n, a);
}
function d0() {
  return u0(c0);
}
function Ka() {
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
function f0(e) {
  return new Tc(e);
}
function vg(e) {
  this._context = e;
}
vg.prototype = {
  areaStart: Ka,
  areaEnd: Ka,
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
function h0(e) {
  return new vg(e);
}
function xg(e) {
  this._context = e;
}
xg.prototype = {
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
function p0(e) {
  return new xg(e);
}
function bg(e, t) {
  this._basis = new Tc(e), this._beta = t;
}
bg.prototype = {
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
const m0 = function e(t) {
  function r(n) {
    return t === 1 ? new Tc(n) : new bg(n, t);
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
const g0 = function e(t) {
  function r(n) {
    return new Qf(n, t);
  }
  return r.tension = function(n) {
    return e(+n);
  }, r;
}(0);
function Jf(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Jf.prototype = {
  areaStart: Ka,
  areaEnd: Ka,
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
const y0 = function e(t) {
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
const v0 = function e(t) {
  function r(n) {
    return new eh(n, t);
  }
  return r.tension = function(n) {
    return e(+n);
  }, r;
}(0);
function th(e, t, r) {
  var n = e._x1, a = e._y1, o = e._x2, f = e._y2;
  if (e._l01_a > Gn) {
    var s = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, c = 3 * e._l01_a * (e._l01_a + e._l12_a);
    n = (n * s - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / c, a = (a * s - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / c;
  }
  if (e._l23_a > Gn) {
    var d = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, g = 3 * e._l23_a * (e._l23_a + e._l12_a);
    o = (o * d + e._x1 * e._l23_2a - t * e._l12_2a) / g, f = (f * d + e._y1 * e._l23_2a - r * e._l12_2a) / g;
  }
  e._context.bezierCurveTo(n, a, o, f, e._x2, e._y2);
}
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
        th(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const x0 = function e(t) {
  function r(n) {
    return t ? new Sg(n, t) : new Qf(n, 0);
  }
  return r.alpha = function(n) {
    return e(+n);
  }, r;
}(0.5);
function Eg(e, t) {
  this._context = e, this._alpha = t;
}
Eg.prototype = {
  areaStart: Ka,
  areaEnd: Ka,
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
        th(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const b0 = function e(t) {
  function r(n) {
    return t ? new Eg(n, t) : new Jf(n, 0);
  }
  return r.alpha = function(n) {
    return e(+n);
  }, r;
}(0.5);
function kg(e, t) {
  this._context = e, this._alpha = t;
}
kg.prototype = {
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
        th(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const S0 = function e(t) {
  function r(n) {
    return t ? new kg(n, t) : new eh(n, 0);
  }
  return r.alpha = function(n) {
    return e(+n);
  }, r;
}(0.5);
function wg(e) {
  this._context = e;
}
wg.prototype = {
  areaStart: Ka,
  areaEnd: Ka,
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
function of(e) {
  return new wg(e);
}
function Pp(e) {
  return e < 0 ? -1 : 1;
}
function Rp(e, t, r) {
  var n = e._x1 - e._x0, a = t - e._x1, o = (e._y1 - e._y0) / (n || a < 0 && -0), f = (r - e._y1) / (a || n < 0 && -0), s = (o * a + f * n) / (n + a);
  return (Pp(o) + Pp(f)) * Math.min(Math.abs(o), Math.abs(f), 0.5 * Math.abs(s)) || 0;
}
function Lp(e, t) {
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
        Id(this, this._t0, Lp(this, this._t0));
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
          this._point = 3, Id(this, Lp(this, r = Rp(this, e, t)), r);
          break;
        default:
          Id(this, this._t0, r = Rp(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function Tg(e) {
  this._context = new Cg(e);
}
(Tg.prototype = Object.create(rc.prototype)).point = function(e, t) {
  rc.prototype.point.call(this, t, e);
};
function Cg(e) {
  this._context = e;
}
Cg.prototype = {
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
function E0(e) {
  return new Tg(e);
}
function Ag(e) {
  this._context = e;
}
Ag.prototype = {
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
        for (var n = Dp(e), a = Dp(t), o = 0, f = 1; f < r; ++o, ++f)
          this._context.bezierCurveTo(n[0][o], a[0][o], n[1][o], a[1][o], e[f], t[f]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Dp(e) {
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
function k0(e) {
  return new Ag(e);
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
function w0(e) {
  return new Cc(e, 0.5);
}
function T0(e) {
  return new Cc(e, 0);
}
function C0(e) {
  return new Cc(e, 1);
}
function rl(e, t) {
  if ((f = e.length) > 1)
    for (var r = 1, n, a, o = e[t[0]], f, s = o.length; r < f; ++r)
      for (a = o, o = e[t[r]], n = 0; n < s; ++n)
        o[n][1] += o[n][0] = isNaN(a[n][1]) ? a[n][0] : a[n][1];
}
function al(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; )
    r[t] = t;
  return r;
}
function A0(e, t) {
  return e[t];
}
function nh() {
  var e = Yt([]), t = al, r = rl, n = A0;
  function a(o) {
    var f = e.apply(this, arguments), s, c = o.length, d = f.length, g = new Array(d), v;
    for (s = 0; s < d; ++s) {
      for (var y = f[s], k = g[s] = new Array(c), E = 0, M; E < c; ++E)
        k[E] = M = [0, +n(o[E], y, E, o)], M.data = o[E];
      k.key = y;
    }
    for (s = 0, v = t(g); s < d; ++s)
      g[v[s]].index = s;
    return r(g, v), g;
  }
  return a.keys = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : Yt(af.call(o)), a) : e;
  }, a.value = function(o) {
    return arguments.length ? (n = typeof o == "function" ? o : Yt(+o), a) : n;
  }, a.order = function(o) {
    return arguments.length ? (t = o == null ? al : typeof o == "function" ? o : Yt(af.call(o)), a) : t;
  }, a.offset = function(o) {
    return arguments.length ? (r = o ?? rl, a) : r;
  }, a;
}
function P0(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, a = 0, o = e[0].length, f; a < o; ++a) {
      for (f = r = 0; r < n; ++r)
        f += e[r][a][1] || 0;
      if (f)
        for (r = 0; r < n; ++r)
          e[r][a][1] /= f;
    }
    rl(e, t);
  }
}
function R0(e, t) {
  if ((c = e.length) > 0)
    for (var r, n = 0, a, o, f, s, c, d = e[t[0]].length; n < d; ++n)
      for (f = s = 0, r = 0; r < c; ++r)
        (o = (a = e[t[r]][n])[1] - a[0]) > 0 ? (a[0] = f, a[1] = f += o) : o < 0 ? (a[1] = s, a[0] = s += o) : (a[0] = 0, a[1] = o);
}
function L0(e, t) {
  if ((a = e.length) > 0) {
    for (var r = 0, n = e[t[0]], a, o = n.length; r < o; ++r) {
      for (var f = 0, s = 0; f < a; ++f)
        s += e[f][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    rl(e, t);
  }
}
function D0(e, t) {
  if (!(!((f = e.length) > 0) || !((o = (a = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, a, o, f; n < o; ++n) {
      for (var s = 0, c = 0, d = 0; s < f; ++s) {
        for (var g = e[t[s]], v = g[n][1] || 0, y = g[n - 1][1] || 0, k = (v - y) / 2, E = 0; E < s; ++E) {
          var M = e[t[E]], T = M[n][1] || 0, m = M[n - 1][1] || 0;
          k += T - m;
        }
        c += v, d += k * v;
      }
      a[n - 1][1] += a[n - 1][0] = r, c && (r -= d / c);
    }
    a[n - 1][1] += a[n - 1][0] = r, rl(e, t);
  }
}
function O0(e) {
  var t = e.map(M0);
  return al(e).sort(function(r, n) {
    return t[r] - t[n];
  });
}
function M0(e) {
  for (var t = -1, r = 0, n = e.length, a, o = -1 / 0; ++t < n; )
    (a = +e[t][1]) > o && (o = a, r = t);
  return r;
}
function Pg(e) {
  var t = e.map(Rg);
  return al(e).sort(function(r, n) {
    return t[r] - t[n];
  });
}
function Rg(e) {
  for (var t = 0, r = -1, n = e.length, a; ++r < n; )
    (a = +e[r][1]) && (t += a);
  return t;
}
function _0(e) {
  return Pg(e).reverse();
}
function N0(e) {
  var t = e.length, r, n, a = e.map(Rg), o = O0(e), f = 0, s = 0, c = [], d = [];
  for (r = 0; r < t; ++r)
    n = o[r], f < s ? (f += a[n], c.push(n)) : (s += a[n], d.push(n));
  return d.reverse().concat(c);
}
function F0(e) {
  return al(e).reverse();
}
function bn(e, t) {
  e(t);
}
var Op = {
  ascending: Pg,
  descending: _0,
  insideout: N0,
  none: al,
  reverse: F0
};
function rh(e) {
  return e && Op[e] || Op.none;
}
var Mp = {
  expand: P0,
  diverging: R0,
  none: rl,
  silhouette: L0,
  wiggle: D0
};
function ah(e) {
  return e && Mp[e] || Mp.none;
}
function z0(e) {
  var t = e === void 0 ? {} : e, r = t.innerRadius, n = t.outerRadius, a = t.cornerRadius, o = t.startAngle, f = t.endAngle, s = t.padAngle, c = t.padRadius, d = n0();
  return r != null && bn(d.innerRadius, r), n != null && bn(d.outerRadius, n), a != null && bn(d.cornerRadius, a), o != null && bn(d.startAngle, o), f != null && bn(d.endAngle, f), s != null && bn(d.padAngle, s), c != null && bn(d.padRadius, c), d;
}
function ih(e) {
  var t = e === void 0 ? {} : e, r = t.x, n = t.x0, a = t.x1, o = t.y, f = t.y0, s = t.y1, c = t.defined, d = t.curve, g = r0();
  return r && bn(g.x, r), n && bn(g.x0, n), a && bn(g.x1, a), o && bn(g.y, o), f && bn(g.y0, f), s && bn(g.y1, s), c && g.defined(c), d && g.curve(d), g;
}
function Lg(e) {
  var t = e === void 0 ? {} : e, r = t.x, n = t.y, a = t.defined, o = t.curve, f = yg();
  return r && bn(f.x, r), n && bn(f.y, n), a && f.defined(a), o && f.curve(o), f;
}
function $0(e) {
  var t = e === void 0 ? {} : e, r = t.startAngle, n = t.endAngle, a = t.padAngle, o = t.value, f = t.sort, s = t.sortValues, c = o0();
  return (f === null || f != null) && c.sort(f), (s === null || s != null) && c.sortValues(s), o != null && c.value(o), a != null && bn(c.padAngle, a), r != null && bn(c.startAngle, r), n != null && bn(c.endAngle, n), c;
}
function B0(e) {
  var t = e.keys, r = e.value, n = e.order, a = e.offset, o = nh();
  return t && o.keys(t), r && bn(o.value, r), n && o.order(rh(n)), a && o.offset(ah(a)), o;
}
var I0 = ["className", "top", "left", "data", "centroid", "innerRadius", "outerRadius", "cornerRadius", "startAngle", "endAngle", "padAngle", "padRadius", "pieSort", "pieSortValues", "pieValue", "children", "fill"];
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
function H0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function W0(e) {
  var t = e.className, r = e.top, n = e.left, a = e.data, o = a === void 0 ? [] : a, f = e.centroid, s = e.innerRadius, c = s === void 0 ? 0 : s, d = e.outerRadius, g = e.cornerRadius, v = e.startAngle, y = e.endAngle, k = e.padAngle, E = e.padRadius, M = e.pieSort, T = e.pieSortValues, m = e.pieValue, L = e.children, O = e.fill, _ = O === void 0 ? "" : O, N = H0(e, I0), R = z0({
    innerRadius: c,
    outerRadius: d,
    cornerRadius: g,
    padRadius: E
  }), j = $0({
    startAngle: v,
    endAngle: y,
    padAngle: k,
    value: m,
    sort: M,
    sortValues: T
  }), B = j(o);
  return L ? /* @__PURE__ */ i.createElement(i.Fragment, null, L({
    arcs: B,
    path: R,
    pie: j
  })) : /* @__PURE__ */ i.createElement(rt, {
    className: "visx-pie-arcs-group",
    top: r,
    left: n
  }, B.map(function(V, q) {
    return /* @__PURE__ */ i.createElement("g", {
      key: "pie-arc-" + q
    }, /* @__PURE__ */ i.createElement("path", lf({
      className: Rn("visx-pie-arc", t),
      d: R(V) || "",
      fill: _ == null || typeof _ == "string" ? _ : _(V)
    }, N)), f == null ? void 0 : f(R.centroid(V), V));
  }));
}
var V0 = ["from", "to", "fill", "className", "innerRef"];
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
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function rn(e) {
  var t = e.from, r = t === void 0 ? {
    x: 0,
    y: 0
  } : t, n = e.to, a = n === void 0 ? {
    x: 1,
    y: 1
  } : n, o = e.fill, f = o === void 0 ? "transparent" : o, s = e.className, c = e.innerRef, d = j0(e, V0), g = r.x === a.x || r.y === a.y;
  return /* @__PURE__ */ i.createElement("line", sf({
    ref: c,
    className: Rn("visx-line", s),
    x1: r.x,
    y1: r.y,
    x2: a.x,
    y2: a.y,
    fill: f,
    shapeRendering: g ? "crispEdges" : "auto"
  }, d));
}
var U0 = ["children", "data", "x", "y", "fill", "className", "curve", "innerRef", "defined"];
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
function ma(e) {
  var t = e.children, r = e.data, n = r === void 0 ? [] : r, a = e.x, o = e.y, f = e.fill, s = f === void 0 ? "transparent" : f, c = e.className, d = e.curve, g = e.innerRef, v = e.defined, y = v === void 0 ? function() {
    return !0;
  } : v, k = K0(e, U0), E = Lg({
    x: a,
    y: o,
    defined: y,
    curve: d
  });
  return t ? /* @__PURE__ */ i.createElement(i.Fragment, null, t({
    path: E
  })) : /* @__PURE__ */ i.createElement("path", uf({
    ref: g,
    className: Rn("visx-linepath", c),
    d: E(n) || "",
    fill: s,
    strokeLinecap: "round"
  }, k));
}
var Y0 = ["children", "x", "x0", "x1", "y", "y0", "y1", "data", "defined", "className", "curve", "innerRef"];
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
function q0(e) {
  var t = e.children, r = e.x, n = e.x0, a = e.x1, o = e.y, f = e.y0, s = e.y1, c = e.data, d = c === void 0 ? [] : c, g = e.defined, v = g === void 0 ? function() {
    return !0;
  } : g, y = e.className, k = e.curve, E = e.innerRef, M = X0(e, Y0), T = ih({
    x: r,
    x0: n,
    x1: a,
    y: o,
    y0: f,
    y1: s,
    defined: v,
    curve: k
  });
  return t ? /* @__PURE__ */ i.createElement(i.Fragment, null, t({
    path: T
  })) : /* @__PURE__ */ i.createElement("path", cf({
    ref: E,
    className: Rn("visx-area", y),
    d: T(d) || ""
  }, M));
}
var G0 = ["x", "x0", "x1", "y", "y1", "y0", "yScale", "data", "defined", "className", "curve", "innerRef", "children"];
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
function Z0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Q0(e) {
  var t = e.x, r = e.x0, n = e.x1, a = e.y, o = e.y1, f = e.y0, s = e.yScale, c = e.data, d = c === void 0 ? [] : c, g = e.defined, v = g === void 0 ? function() {
    return !0;
  } : g, y = e.className, k = e.curve, E = e.innerRef, M = e.children, T = Z0(e, G0), m = ih({
    x: t,
    x0: r,
    x1: n,
    defined: v,
    curve: k
  });
  return f == null ? m.y0(s.range()[0]) : bn(m.y0, f), a && !o && bn(m.y1, a), o && !a && bn(m.y1, o), M ? /* @__PURE__ */ i.createElement(i.Fragment, null, M({
    path: m
  })) : /* @__PURE__ */ i.createElement("path", df({
    ref: E,
    className: Rn("visx-area-closed", y),
    d: m(d) || ""
  }, T));
}
var J0 = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
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
function eS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function tS(e) {
  var t = e.className, r = e.top, n = e.left, a = e.keys, o = e.data, f = e.curve, s = e.defined, c = e.x, d = e.x0, g = e.x1, v = e.y0, y = e.y1, k = e.value, E = e.order, M = e.offset, T = e.color, m = e.children, L = eS(e, J0), O = B0({
    keys: a,
    value: k,
    order: E,
    offset: M
  }), _ = ih({
    x: c,
    x0: d,
    x1: g,
    y0: v,
    y1: y,
    curve: f,
    defined: s
  }), N = O(o);
  return m ? /* @__PURE__ */ i.createElement(i.Fragment, null, m({
    stacks: N,
    path: _,
    stack: O
  })) : /* @__PURE__ */ i.createElement(rt, {
    top: r,
    left: n
  }, N.map(function(R, j) {
    return /* @__PURE__ */ i.createElement("path", ff({
      className: Rn("visx-stack", t),
      key: "stack-" + j + "-" + (R.key || ""),
      d: _(R) || "",
      fill: T == null ? void 0 : T(R.key, j)
    }, L));
  }));
}
var nS = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
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
function rS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function aS(e) {
  var t = e.className, r = e.top, n = e.left, a = e.keys, o = e.data, f = e.curve, s = e.defined, c = e.x, d = e.x0, g = e.x1, v = e.y0, y = e.y1, k = e.value, E = e.order, M = e.offset, T = e.color, m = e.children, L = rS(e, nS);
  return /* @__PURE__ */ i.createElement(tS, ac({
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
    y0: v,
    y1: y,
    value: k,
    order: E,
    offset: M,
    color: T
  }, L), m || function(O) {
    var _ = O.stacks, N = O.path;
    return _.map(function(R, j) {
      return /* @__PURE__ */ i.createElement("path", ac({
        className: Rn("visx-area-stack", t),
        key: "area-stack-" + j + "-" + (R.key || ""),
        d: N(R) || "",
        fill: T == null ? void 0 : T(R.key, j)
      }, L));
    });
  });
}
function oh(e) {
  if ("bandwidth" in e)
    return e.bandwidth();
  var t = e.range(), r = e.domain();
  return Math.abs(t[t.length - 1] - t[0]) / r.length;
}
var iS = ["data", "className", "top", "left", "x0", "x0Scale", "x1Scale", "yScale", "color", "keys", "height", "children"];
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
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Dg(e) {
  var t = e.data, r = e.className, n = e.top, a = e.left, o = e.x0, f = e.x0Scale, s = e.x1Scale, c = e.yScale, d = e.color, g = e.keys, v = e.height, y = e.children, k = oS(e, iS), E = oh(s), M = t.map(function(T, m) {
    return {
      index: m,
      x0: f(o(T)),
      bars: g.map(function(L, O) {
        var _ = T[L];
        return {
          index: O,
          key: L,
          value: _,
          width: E,
          x: s(L) || 0,
          y: c(_) || 0,
          color: d(L, O),
          height: v - (c(_) || 0)
        };
      })
    };
  });
  return y ? /* @__PURE__ */ i.createElement(i.Fragment, null, y(M)) : /* @__PURE__ */ i.createElement(rt, {
    className: Rn("visx-bar-group", r),
    top: n,
    left: a
  }, M.map(function(T) {
    return /* @__PURE__ */ i.createElement(rt, {
      key: "bar-group-" + T.index + "-" + T.x0,
      left: T.x0
    }, T.bars.map(function(m) {
      return /* @__PURE__ */ i.createElement(gr, hf({
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
function Og(e) {
  return e == null ? void 0 : e[0];
}
function Mg(e) {
  return e == null ? void 0 : e[1];
}
var lS = ["data", "className", "top", "left", "x", "y0", "y1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
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
function uS(e) {
  var t = e.data, r = e.className, n = e.top, a = e.left, o = e.x, f = e.y0, s = f === void 0 ? Og : f, c = e.y1, d = c === void 0 ? Mg : c, g = e.xScale, v = e.yScale, y = e.color, k = e.keys, E = e.value, M = e.order, T = e.offset, m = e.children, L = sS(e, lS), O = nh();
  k && O.keys(k), E && bn(O.value, E), M && O.order(rh(M)), T && O.offset(ah(T));
  var _ = O(t), N = oh(g), R = _.map(function(j, B) {
    var V = j.key;
    return {
      index: B,
      key: V,
      bars: j.map(function(q, Y) {
        var U = (v(s(q)) || 0) - (v(d(q)) || 0), te = v(d(q)), me = "bandwidth" in g ? g(o(q.data)) : Math.max((g(o(q.data)) || 0) - N / 2);
        return {
          bar: q,
          key: V,
          index: Y,
          height: U,
          width: N,
          x: me || 0,
          y: te || 0,
          color: y(j.key, Y)
        };
      })
    };
  });
  return m ? /* @__PURE__ */ i.createElement(i.Fragment, null, m(R)) : /* @__PURE__ */ i.createElement(rt, {
    className: Rn("visx-bar-stack", r),
    top: n,
    left: a
  }, R.map(function(j) {
    return j.bars.map(function(B) {
      return /* @__PURE__ */ i.createElement(gr, pf({
        key: "bar-stack-" + j.index + "-" + B.index,
        x: B.x,
        y: B.y,
        height: B.height,
        width: B.width,
        fill: B.color
      }, L));
    });
  }));
}
var cS = ["data", "className", "top", "left", "y", "x0", "x1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
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
function dS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function fS(e) {
  var t = e.data, r = e.className, n = e.top, a = e.left, o = e.y, f = e.x0, s = f === void 0 ? Og : f, c = e.x1, d = c === void 0 ? Mg : c, g = e.xScale, v = e.yScale, y = e.color, k = e.keys, E = e.value, M = e.order, T = e.offset, m = e.children, L = dS(e, cS), O = nh();
  k && O.keys(k), E && bn(O.value, E), M && O.order(rh(M)), T && O.offset(ah(T));
  var _ = O(t), N = oh(v), R = _.map(function(j, B) {
    var V = j.key;
    return {
      index: B,
      key: V,
      bars: j.map(function(q, Y) {
        var U = (g(d(q)) || 0) - (g(s(q)) || 0), te = g(s(q)), me = "bandwidth" in v ? v(o(q.data)) : Math.max((v(o(q.data)) || 0) - U / 2);
        return {
          bar: q,
          key: V,
          index: Y,
          height: N,
          width: U,
          x: te || 0,
          y: me || 0,
          color: y(j.key, Y)
        };
      })
    };
  });
  return m ? /* @__PURE__ */ i.createElement(i.Fragment, null, m(R)) : /* @__PURE__ */ i.createElement(rt, {
    className: Rn("visx-bar-stack-horizontal", r),
    top: n,
    left: a
  }, R.map(function(j) {
    return j.bars.map(function(B) {
      return /* @__PURE__ */ i.createElement(gr, mf({
        key: "bar-stack-" + j.index + "-" + B.index,
        x: B.x,
        y: B.y,
        height: B.height,
        width: B.width,
        fill: B.color
      }, L));
    });
  }));
}
var _p = "http://www.w3.org/2000/svg";
function hS(e) {
  var t = document.getElementById(e);
  if (!t) {
    var r = document.createElementNS(_p, "svg");
    r.setAttribute("aria-hidden", "true"), r.style.opacity = "0", r.style.width = "0", r.style.height = "0", r.style.position = "absolute", r.style.top = "-100%", r.style.left = "-100%", r.style.pointerEvents = "none", t = document.createElementNS(_p, "path"), t.setAttribute("id", e), r.appendChild(t), document.body.appendChild(r);
  }
  return t;
}
var pS = "__visx_splitpath_svg_path_measurement_id", Np = function() {
  return !0;
};
function mS(e) {
  var t = e.path, r = e.pointsInSegments, n = e.segmentation, a = n === void 0 ? "x" : n, o = e.sampleRate, f = o === void 0 ? 1 : o;
  try {
    var s = hS(pS);
    s.setAttribute("d", t);
    var c = s.getTotalLength(), d = r.length, g = r.map(function() {
      return [];
    });
    if (a === "x" || a === "y")
      for (var v = r.map(function(te) {
        var me;
        return (me = te.find(function(I) {
          return typeof I[a] == "number";
        })) == null ? void 0 : me[a];
      }), y = s.getPointAtLength(0), k = s.getPointAtLength(c), E = k[a] > y[a], M = E ? v.map(function(te) {
        return typeof te > "u" ? Np : function(me) {
          return me >= te;
        };
      }) : v.map(function(te) {
        return typeof te > "u" ? Np : function(me) {
          return me <= te;
        };
      }), T = 0, m = 0; m <= c; m += f) {
        for (var L = s.getPointAtLength(m), O = L[a]; T < d - 1 && M[T + 1](O); )
          T += 1;
        g[T].push(L);
      }
    else {
      var _ = r.map(function(te) {
        return te.length;
      }), N = _.reduce(function(te, me) {
        return te + me;
      }, 0), R = c / Math.max(1, N - 1), j = _.slice(0, d - 1);
      j.unshift(0);
      for (var B = 2; B < d; B += 1)
        j[B] += j[B - 1];
      for (var V = 0; V < d; V += 1)
        j[V] *= R;
      for (var q = 0, Y = 0; Y <= c; Y += f) {
        for (var U = s.getPointAtLength(Y); q < d - 1 && Y >= j[q + 1]; )
          q += 1;
        g[q].push(U);
      }
    }
    return g;
  } catch {
    return [];
  }
}
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
var gS = function(t) {
  return t.x || 0;
}, yS = function(t) {
  return t.y || 0;
};
function _g(e) {
  var t = e.children, r = e.className, n = e.curve, a = e.defined, o = e.segmentation, f = e.sampleRate, s = e.segments, c = e.x, d = e.y, g = e.styles, v = se.useMemo(function() {
    var E = typeof c == "number" || typeof c > "u" ? function() {
      return c;
    } : c, M = typeof d == "number" || typeof d > "u" ? function() {
      return d;
    } : d;
    return s.map(function(T) {
      return T.map(function(m, L) {
        return {
          x: E(m, L, T),
          y: M(m, L, T)
        };
      });
    });
  }, [c, d, s]), y = se.useMemo(function() {
    var E = Lg({
      x: c,
      y: d,
      defined: a,
      curve: n
    });
    return E(s.flat()) || "";
  }, [c, d, a, n, s]), k = se.useMemo(function() {
    return mS({
      path: y,
      segmentation: o,
      pointsInSegments: v,
      sampleRate: f
    });
  }, [y, o, v, f]);
  return /* @__PURE__ */ i.createElement("g", null, k.map(function(E, M) {
    return t ? /* @__PURE__ */ i.createElement(i.Fragment, {
      key: M
    }, t({
      index: M,
      segment: E,
      styles: g[M] || g[M % g.length]
    })) : /* @__PURE__ */ i.createElement(ma, gf({
      key: M,
      className: r,
      data: E,
      x: gS,
      y: yS
    }, g[M] || g[M % g.length]));
  }));
}
_g.propTypes = {
  segments: he.arrayOf(he.array).isRequired,
  styles: he.array.isRequired,
  children: he.func,
  className: he.string
};
var vS = ["tooltipOpen"];
function xS(e, t) {
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
function Ng(e) {
  var t = se.useState(ic({
    tooltipOpen: !1
  }, e)), r = t[0], n = t[1], a = se.useCallback(function(f) {
    return n(typeof f == "function" ? function(s) {
      s.tooltipOpen;
      var c = xS(s, vS);
      return ic({}, f(c), {
        tooltipOpen: !0
      });
    } : {
      tooltipOpen: !0,
      tooltipLeft: f.tooltipLeft,
      tooltipTop: f.tooltipTop,
      tooltipData: f.tooltipData
    });
  }, [n]), o = se.useCallback(function() {
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
var bS = ["className", "top", "left", "offsetLeft", "offsetTop", "style", "children", "unstyled", "applyPositionStyle"];
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
function SS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var Fg = {
  position: "absolute",
  backgroundColor: "white",
  color: "#666666",
  padding: ".3rem .5rem",
  borderRadius: "3px",
  fontSize: "14px",
  boxShadow: "0 1px 2px rgba(33,33,33,0.2)",
  lineHeight: "1em",
  pointerEvents: "none"
}, lh = /* @__PURE__ */ i.forwardRef(function(e, t) {
  var r = e.className, n = e.top, a = e.left, o = e.offsetLeft, f = o === void 0 ? 10 : o, s = e.offsetTop, c = s === void 0 ? 10 : s, d = e.style, g = d === void 0 ? Fg : d, v = e.children, y = e.unstyled, k = y === void 0 ? !1 : y, E = e.applyPositionStyle, M = E === void 0 ? !1 : E, T = SS(e, bS);
  return /* @__PURE__ */ i.createElement("div", oc({
    ref: t,
    className: Rn("visx-tooltip", r),
    style: oc({
      top: n == null || c == null ? n : n + c,
      left: a == null || f == null ? a : a + f
    }, M && {
      position: "absolute"
    }, !k && g)
  }, T), v);
});
lh.propTypes = {
  children: he.node,
  className: he.string,
  left: he.number,
  offsetLeft: he.number,
  offsetTop: he.number,
  top: he.number,
  applyPositionStyle: he.bool,
  unstyled: he.bool
};
lh.displayName = "Tooltip";
const ES = lh;
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
function kS(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function wS(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, vf(e, t);
}
function vf(e, t) {
  return vf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, vf(e, t);
}
var Fp = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0
};
function TS(e) {
  var t;
  return t = /* @__PURE__ */ function(r) {
    wS(n, r);
    function n(o) {
      var f;
      return f = r.call(this, o) || this, f.state = {
        rect: void 0,
        parentRect: void 0
      }, f.nodeRef = /* @__PURE__ */ i.createRef(), f.getRects = f.getRects.bind(kS(f)), f;
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
      var f = this.node, s = f.parentNode, c = f.getBoundingClientRect ? f.getBoundingClientRect() : Fp, d = s != null && s.getBoundingClientRect ? s.getBoundingClientRect() : Fp;
      return {
        rect: c,
        parentRect: d
      };
    }, a.render = function() {
      return /* @__PURE__ */ i.createElement(e, yf({
        nodeRef: this.nodeRef,
        getRects: this.getRects
      }, this.state, this.props));
    }, n;
  }(i.PureComponent), t.displayName = "withBoundingRects(" + (e.displayName || "") + ")", t;
}
var zg = /* @__PURE__ */ se.createContext({
  isFlippedVertically: !1,
  isFlippedHorizontally: !1
}), CS = zg.Provider;
zg.Consumer;
var AS = ["children", "getRects", "left", "offsetLeft", "offsetTop", "parentRect", "rect", "style", "top", "unstyled", "nodeRef"];
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
function PS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function $g(e) {
  var t = e.children;
  e.getRects;
  var r = e.left, n = r === void 0 ? 0 : r, a = e.offsetLeft, o = a === void 0 ? 10 : a, f = e.offsetTop, s = f === void 0 ? 10 : f, c = e.parentRect, d = e.rect, g = e.style, v = g === void 0 ? Fg : g, y = e.top, k = y === void 0 ? 0 : y, E = e.unstyled, M = E === void 0 ? !1 : E, T = e.nodeRef, m = PS(e, AS), L, O = !1, _ = !1;
  if (d && c) {
    var N = n, R = k;
    if (c.width) {
      var j = N + o + d.width - c.width, B = d.width - N - o;
      O = j > 0 && j > B;
    } else {
      var V = N + o + d.width - window.innerWidth, q = d.width - N - o;
      O = V > 0 && V > q;
    }
    if (c.height) {
      var Y = R + s + d.height - c.height, U = d.height - R - s;
      _ = Y > 0 && Y > U;
    } else
      _ = R + s + d.height > window.innerHeight;
    N = O ? N - d.width - o : N + o, R = _ ? R - d.height - s : R + s, N = Math.round(N), R = Math.round(R), L = "translate(" + N + "px, " + R + "px)";
  }
  return /* @__PURE__ */ i.createElement(ES, lc({
    ref: T,
    style: lc({
      left: 0,
      top: 0,
      transform: L
    }, !M && v)
  }, m), /* @__PURE__ */ i.createElement(CS, {
    value: {
      isFlippedVertically: !_,
      isFlippedHorizontally: !O
    }
  }, t));
}
$g.propTypes = {
  nodeRef: he.oneOfType([he.string, he.func, he.object])
};
const Bg = TS($g);
var il = /* @__PURE__ */ function() {
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
function RS(e, t) {
  return new il({
    x: e.x + t.x,
    y: e.y + t.y
  });
}
function LS(e, t) {
  return new il({
    x: e.x - t.x,
    y: e.y - t.y
  });
}
const DS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Point: il,
  subtractPoints: LS,
  sumPoints: RS
}, Symbol.toStringTag, { value: "Module" }));
function OS(e) {
  return !!e && e instanceof Element;
}
function MS(e) {
  return !!e && (e instanceof SVGElement || "ownerSVGElement" in e);
}
function _S(e) {
  return !!e && "createSVGPoint" in e;
}
function NS(e) {
  return !!e && "getScreenCTM" in e;
}
function FS(e) {
  return !!e && "changedTouches" in e;
}
function zS(e) {
  return !!e && "clientX" in e;
}
function $S(e) {
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
function BS(e) {
  if (!e)
    return hs({}, Hd);
  if (FS(e))
    return e.changedTouches.length > 0 ? {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    } : hs({}, Hd);
  if (zS(e))
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
function xf(e, t) {
  if (!e || !t)
    return null;
  var r = BS(t), n = MS(e) ? e.ownerSVGElement : e, a = NS(n) ? n.getScreenCTM() : null;
  if (_S(n) && a) {
    var o = n.createSVGPoint();
    return o.x = r.x, o.y = r.y, o = o.matrixTransform(a.inverse()), new il({
      x: o.x,
      y: o.y
    });
  }
  var f = e.getBoundingClientRect();
  return new il({
    x: r.x - f.left - e.clientLeft,
    y: r.y - f.top - e.clientTop
  });
}
function bf(e, t) {
  if (OS(e) && t)
    return xf(e, t);
  if ($S(e)) {
    var r = e, n = r.target;
    if (n)
      return xf(n, r);
  }
  return null;
}
const IS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  localPoint: bf,
  touchPoint: xf
}, Symbol.toStringTag, { value: "Module" })), HS = new Sm(), Ig = (e) => {
  const { tableData: t, config: r, formatNumber: n, capitalize: a, formatDate: o, formatTooltipsDate: f, parseDate: s, setSharedFilter: c } = se.useContext(Et), { xScale: d, yScale: g, showTooltip: v, hideTooltip: y } = e, { xAxis: k, visualizationType: E, orientation: M, yAxis: T, runtime: m } = r, L = HS.applySuppression(t, r.suppressedData), O = (I, le) => {
    const { x: ue, y: fe } = le, W = {
      data: I || {},
      dataXPosition: ue + 10,
      dataYPosition: fe
    };
    return {
      tooltipLeft: W.dataXPosition,
      tooltipTop: W.dataYPosition,
      tooltipData: W
    };
  }, _ = (I, le) => {
    I.stopPropagation();
    const ue = bf(I), { x: fe, y: ae } = ue, { data: W, arc: Z } = le ?? {}, ee = j(fe - Number(r.yAxis.size || 0)), Ae = E !== "Pie" ? r.series.filter((ie) => ie.tooltip === !0).map((ie) => ie.dataKey) : r.series.map((ie) => ie.dataKey);
    Ae.push(r.xAxis.dataKey), r.visualizationType === "Forecasting" && r.series.map((ie) => {
      ie.confidenceIntervals.map((ke) => {
        ke.showInTooltip && (Ae.push(ke.high), Ae.push(ke.low));
      });
    });
    function xe(ie) {
      let ke = [];
      for (let Pe in ie)
        ie.hasOwnProperty(Pe) && ke.push(ie[Pe].name);
      return ke;
    }
    Ae.push(...xe(r.columns)), Ae.push(...xe(r.columns));
    const De = q(ee, Ae), oe = L.filter((ie) => ie[k.dataKey] === B(ae)), ze = M === "vertical" ? De : oe, He = (ie) => {
      const ke = r.series.filter((We) => We.dataKey === ie)[0];
      return ke != null && ke.axis ? String(ke.axis).toLowerCase() : "left";
    }, ge = (() => {
      var Ye, qe, lt;
      const ie = r.columns, ke = [], Pe = [];
      for (const [st, it] of Object.entries(ie)) {
        const Je = {
          addColPrefix: r.columns[st].prefix,
          addColSuffix: r.columns[st].suffix,
          addColRoundTo: r.columns[st].roundToPlace ? r.columns[st].roundToPlace : "",
          addColCommas: r.columns[st].commas
        };
        let Ie = null;
        r.visualizationType === "Pie" ? Ie = Z == null ? void 0 : Z.data[it.name] : Ie = (Ye = ze[0]) == null ? void 0 : Ye[it.name];
        const $e = Em(Ie, "left", !0, r, Je);
        it.tooltips && ke.push([it.label, $e]);
      }
      const We = [];
      return ke.forEach((st) => {
        We.push([st[0], st[1]]);
      }), E === "Pie" && Pe.push(
        // ignore
        [r.xAxis.dataKey, W],
        [r.runtime.yAxis.dataKey, n(Z == null ? void 0 : Z.data[r.runtime.yAxis.dataKey])],
        ["Percent", `${Math.round(((Z == null ? void 0 : Z.endAngle) - (Z == null ? void 0 : Z.startAngle)) * 180 / Math.PI / 360 * 100) + "%"}`]
      ), E === "Forest Plot" && Pe.push([r.xAxis.dataKey, B(ae)]), E !== "Pie" && E !== "Forest Plot" && Pe.push(
        ...(lt = (qe = Y()) == null ? void 0 : qe.filter(Boolean)) == null ? void 0 : lt.flatMap((st) => {
          var Je, Ie, $e;
          const it = st === r.xAxis.dataKey ? (Je = ze[0]) == null ? void 0 : Je[st] : n((Ie = ze[0]) == null ? void 0 : Ie[st], He(st));
          return ($e = ze == null ? void 0 : ze[0]) != null && $e[st] ? [[st, it, He(st)]] : [];
        })
      ), [...Pe, ...We];
    })();
    if (!ge)
      return;
    const Oe = O(ge, ue);
    v(Oe);
  }, N = () => {
    r.visualizationType === "Area Chart" ? setTimeout(() => {
      y();
    }, 3e3) : y();
  }, R = (I) => {
    if (r.xAxis.type === "categorical" || r.visualizationType === "Combo") {
      let le = d.step();
      const fe = Math.floor(Number(I) / le);
      return d.domain()[fe - 1];
    }
    if (En(r.xAxis) && r.visualizationType !== "Combo") {
      const le = Xh((W) => s(W[r.xAxis.dataKey])).left, ue = d.invert(d(I)), fe = le(r.data, ue, 1);
      return s(r.data[fe - 1][r.xAxis.dataKey]);
    }
  }, j = (I, le = !1) => {
    if (E !== "Pie" && M !== "horizontal") {
      if (d.type === "point" || k.type === "continuous" || En(k)) {
        let ue = null, fe = Number.MAX_VALUE, ae = I;
        return L.forEach((W) => {
          const Z = En(k) ? d(s(W[k.dataKey])) : d(W[k.dataKey]);
          let ee = r.barHeight;
          const Ae = Math.abs(Number(Z - ae + (le ? ee * 2 : 0)));
          Ae <= fe && (fe = Ae, ue = (En(k), W[k.dataKey]));
        }), ue;
      }
      if (r.xAxis.type === "categorical" || E === "Combo" && M !== "horizontal" && E !== "Forest Plot") {
        let fe = (d.range()[1] - d.range()[0]) / (d.domain().length + 1);
        const W = Math.floor((Number(I) - fe / 2) / fe);
        return d.domain()[W];
      }
      if (En(k) && E !== "Combo" && M !== "horizontal") {
        const ue = Xh((Z) => s(Z[r.xAxis.dataKey])).left, fe = d.invert(I), ae = ue(r.data, fe, 1);
        return s(r.data[ae - 1][r.xAxis.dataKey]);
      }
    }
  }, B = (I, le) => {
    if (E === "Pie")
      return;
    let ue = Number.MAX_VALUE, fe = null;
    return L.forEach((ae, W) => {
      const Z = g(E !== "Forest Plot" ? ae[r.xAxis.dataKey] : W), ee = Math.abs(Z - I);
      ee < ue && (ue = ee, fe = le ? ae[le] : ae[r.xAxis.dataKey]);
    }), fe;
  }, V = (I) => {
    var le, ue;
    try {
      const fe = bf(I), { x: ae } = fe;
      if (!ae)
        throw new Error("COVE: no x value in handleTooltipClick.");
      let W = j(ae, !0), Z = (le = r.data) == null ? void 0 : le.filter((ee) => ee[r.xAxis.dataKey] === W);
      if (!W)
        throw new Error("COVE: no closest x scale value in handleTooltipClick");
      if (En(k) && W && (W = new Date(W), W = o(W), Z = (ue = r.data) == null ? void 0 : ue.filter((ee) => o(new Date(ee[r.xAxis.dataKey])) === W)), !Z[0])
        throw new Error(`COVE: no data found matching the closest xScale value: ${W}`);
      c && (r != null && r.uid) && (Z != null && Z[0]) && c(r.uid, Z[0]);
    } catch (fe) {
      console.error(fe.message);
    }
  }, q = (I, le) => {
    try {
      let ue;
      return k.type === "categorical" ? ue = L.filter((ae) => ae[k.dataKey] === I) : ue = L.filter((ae) => ae[k.dataKey] === I), !ue || ue.length === 0 ? [] : ue.map((ae) => Object.fromEntries(Object.entries(ae).filter(([W, Z]) => le.includes(W))));
    } catch (ue) {
      console.error("COVE", ue);
    }
  }, Y = () => {
    var I;
    try {
      let le, ue = [], fe = [];
      if ((I = r.series) == null || I.forEach((ae) => {
        ae.type === "Forecasting" && (ue.push(ae.stageColumn), ae == null || ae.confidenceIntervals.forEach((W) => {
          W.showInTooltip === !0 && (fe.push(W.low), fe.push(W.high));
        }));
      }), !r.dashboard)
        switch (E) {
          case "Combo":
            le = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys, ...fe];
            break;
          case "Forecasting":
            le = [m.xAxis.dataKey, ...ue, ...fe];
            break;
          case "Line":
            le = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
            break;
          case "Area Chart":
            le = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
            break;
          case "Bar":
            le = M === "vertical" ? [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys] : [m.yAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
            break;
          case "Pie":
            le = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
          default:
            throw new Error("No visualization type found in handleTooltipMouseOver");
        }
      return r.dashboard && (le = [m.xAxis.dataKey, ...m == null ? void 0 : m.barSeriesKeys, ...m == null ? void 0 : m.lineSeriesKeys, ...ue, ...fe]), le;
    } catch (le) {
      console.error("COVE", le);
    }
  }, U = (I) => {
    const { dataXPosition: le, dataYPosition: ue } = I;
    return {
      opacity: r.tooltips.opacity ? r.tooltips.opacity / 100 : 1,
      position: "absolute",
      backgroundColor: "white",
      borderRadius: "4px",
      transform: `translate(${le}px, ${Number(ue)}px)`
    };
  }, te = (I) => {
    var ue, fe;
    let le = r.series.filter((ae) => ae.dataKey === I);
    return (ue = le[0]) != null && ue.name ? (fe = le[0]) == null ? void 0 : fe.name : I;
  };
  return {
    getIncludedTooltipSeries: Y,
    getXValueFromCoordinate: j,
    getXValueFromCoordinateDate: R,
    getYScaleValues: q,
    handleTooltipClick: V,
    handleTooltipMouseOff: N,
    handleTooltipMouseOver: _,
    TooltipListItem: ({ item: I }) => {
      const [le, ue] = I, [fe, ae, W] = ue;
      if (E === "Forest Plot")
        return fe === r.xAxis.dataKey ? /* @__PURE__ */ i.createElement("li", { className: "tooltip-heading" }, `${a(r.xAxis.dataKey ? `${r.xAxis.dataKey}: ` : "")} ${En(T) ? o(s(fe, !1)) : ae}`) : /* @__PURE__ */ i.createElement("li", { className: "tooltip-body" }, `${te(fe)}: ${n(ae, "left")}`);
      const Z = r.tooltips.dateDisplayFormat ? f(s(ae, !1)) : o(s(ae, !1));
      return E === "Bar" && M === "horizontal" && fe === r.xAxis.dataKey ? /* @__PURE__ */ i.createElement("li", { className: "tooltip-heading" }, `${a(r.runtime.yAxis.label ? `${r.runtime.yAxis.label}: ` : "")} ${r.xAxis.type === "date" ? Z : ae}`) : fe === r.xAxis.dataKey ? /* @__PURE__ */ i.createElement("li", { className: "tooltip-heading" }, `${a(r.runtime.xAxis.label ? `${r.runtime.xAxis.label}: ` : "")} ${En(k) ? Z : ae}`) : /* @__PURE__ */ i.createElement("li", { className: "tooltip-body" }, `${te(fe)}: ${ae}`);
    },
    tooltipStyles: U
  };
};
function sh(e, { threshold: t = 0, root: r = null, rootMargin: n = "0%", freezeOnceVisible: a = !1 }) {
  const [o, f] = se.useState(), s = (o == null ? void 0 : o.isIntersecting) && a, c = ([d]) => {
    f(d);
  };
  return se.useEffect(() => {
    setTimeout(() => {
      const d = e == null ? void 0 : e.current;
      if (!!!window.IntersectionObserver || s || !d)
        return;
      const v = { threshold: t, root: r, rootMargin: n }, y = new IntersectionObserver(c, v);
      return y.observe(d), () => y.disconnect();
    }, 500);
  }, [e, t, r, n, s]), o;
}
const Sf = (e, t = !1) => {
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
var WS = ["flexDirection", "alignItems", "margin", "display", "children"];
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
function VS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function sc(e) {
  var t = e.flexDirection, r = t === void 0 ? "row" : t, n = e.alignItems, a = n === void 0 ? "center" : n, o = e.margin, f = o === void 0 ? "0" : o, s = e.display, c = s === void 0 ? "flex" : s, d = e.children, g = VS(e, WS);
  return /* @__PURE__ */ i.createElement("div", Ef({
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
  alignItems: he.string,
  margin: he.oneOfType([he.string, he.number]),
  children: he.node,
  display: he.string
};
var jS = ["flex", "label", "margin", "align", "children"];
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
function uc(e) {
  var t = e.flex, r = t === void 0 ? "1" : t, n = e.label, a = e.margin, o = a === void 0 ? "5px 0" : a, f = e.align, s = f === void 0 ? "left" : f, c = e.children, d = US(e, jS);
  return /* @__PURE__ */ i.createElement("div", kf({
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
  align: he.string,
  label: he.node,
  flex: he.oneOfType([he.string, he.number]),
  margin: he.oneOfType([he.string, he.number]),
  children: he.node
};
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
function uh(e) {
  var t = e.fill, r = e.width, n = e.height, a = e.style;
  return /* @__PURE__ */ i.createElement("div", {
    style: wf({
      width: r,
      height: n,
      background: t
    }, a)
  });
}
uh.propTypes = {
  fill: he.string,
  width: he.oneOfType([he.string, he.number]),
  height: he.oneOfType([he.string, he.number])
};
function Hg(e) {
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
Hg.propTypes = {
  fill: he.string,
  width: he.oneOfType([he.string, he.number]),
  height: he.oneOfType([he.string, he.number])
};
function Wg(e) {
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
Wg.propTypes = {
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
var Wd = function() {
};
function KS(e) {
  var t = e.shape, r = t === void 0 ? "rect" : t, n = e.fill, a = n === void 0 ? Wd : n, o = e.size, f = o === void 0 ? Wd : o, s = e.width, c = e.height, d = e.label, g = e.item, v = e.itemIndex, y = e.shapeStyle, k = y === void 0 ? Wd : y, E = {
    width: s,
    height: c,
    item: g,
    itemIndex: v,
    label: d,
    fill: a(ps({}, d)),
    size: f(ps({}, d)),
    style: k(ps({}, d))
  };
  return typeof r == "string" ? r === "circle" ? /* @__PURE__ */ i.createElement(Hg, E) : r === "line" ? /* @__PURE__ */ i.createElement(Wg, E) : /* @__PURE__ */ i.createElement(uh, E) : /* @__PURE__ */ i.isValidElement(r) ? /* @__PURE__ */ i.cloneElement(r, E) : r ? /* @__PURE__ */ i.createElement(r, E) : null;
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
function Vg(e) {
  var t = e.shape, r = t === void 0 ? uh : t, n = e.width, a = e.height, o = e.margin, f = e.label, s = e.item, c = e.itemIndex, d = e.fill, g = e.size, v = e.shapeStyle;
  return /* @__PURE__ */ i.createElement("div", {
    className: "visx-legend-shape",
    style: {
      display: "flex",
      width: g ? g(cc({}, f)) : n,
      height: g ? g(cc({}, f)) : a,
      margin: o
    }
  }, KS({
    shape: r,
    item: s,
    itemIndex: c,
    label: f,
    width: n,
    height: a,
    fill: d,
    shapeStyle: v
  }));
}
Vg.propTypes = {
  itemIndex: he.number.isRequired,
  margin: he.oneOfType([he.string, he.number]),
  width: he.oneOfType([he.string, he.number]),
  height: he.oneOfType([he.string, he.number])
};
function jg(e) {
  return e && typeof e == "object" && "value" in e && typeof e.value < "u" ? e.value : e;
}
function zp(e) {
  return String(jg(e));
}
function YS(e) {
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
var XS = ["className", "style", "scale", "shape", "domain", "fill", "size", "labelFormat", "labelTransform", "shapeWidth", "shapeHeight", "shapeMargin", "shapeStyle", "labelAlign", "labelFlex", "labelMargin", "itemMargin", "direction", "itemDirection", "legendLabelProps", "children"];
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
function qS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var GS = {
  display: "flex"
};
function Ug(e) {
  var t = e.className, r = e.style, n = r === void 0 ? GS : r, a = e.scale, o = e.shape, f = e.domain, s = e.fill, c = s === void 0 ? zp : s, d = e.size, g = d === void 0 ? zp : d, v = e.labelFormat, y = v === void 0 ? jg : v, k = e.labelTransform, E = k === void 0 ? YS : k, M = e.shapeWidth, T = M === void 0 ? 15 : M, m = e.shapeHeight, L = m === void 0 ? 15 : m, O = e.shapeMargin, _ = O === void 0 ? "2px 4px 2px 0" : O, N = e.shapeStyle, R = e.labelAlign, j = R === void 0 ? "left" : R, B = e.labelFlex, V = B === void 0 ? "1" : B, q = e.labelMargin, Y = q === void 0 ? "0 4px" : q, U = e.itemMargin, te = U === void 0 ? "0" : U, me = e.direction, I = me === void 0 ? "column" : me, le = e.itemDirection, ue = le === void 0 ? "row" : le, fe = e.legendLabelProps, ae = e.children, W = qS(e, XS), Z = f || ("domain" in a ? a.domain() : []), ee = E({
    scale: a,
    labelFormat: y
  }), Ae = Z.map(ee);
  return ae ? /* @__PURE__ */ i.createElement(i.Fragment, null, ae(Ae)) : /* @__PURE__ */ i.createElement("div", {
    className: Rn("visx-legend", t),
    style: ms({}, n, {
      flexDirection: I
    })
  }, Ae.map(function(xe, De) {
    return /* @__PURE__ */ i.createElement(sc, ms({
      key: "legend-" + xe.text + "-" + De,
      margin: te,
      flexDirection: ue
    }, W), /* @__PURE__ */ i.createElement(Vg, {
      shape: o,
      height: L,
      width: T,
      margin: _,
      item: Z[De],
      itemIndex: De,
      label: xe,
      fill: c,
      size: g,
      shapeStyle: N
    }), /* @__PURE__ */ i.createElement(uc, ms({
      label: xe.text,
      flex: V,
      margin: Y,
      align: j
    }, fe)));
  }));
}
Ug.propTypes = {
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
function ZS(e) {
  return /* @__PURE__ */ i.createElement(Ug, e);
}
function QS(e) {
  let t = ["legend-container"], r = ["legend-container__inner"];
  return e.legend.position === "left" && t.push("left"), e.legend.position === "bottom" && (t.push("bottom"), r.push("bottom")), e.legend.position === "bottom" && e.legend.singleRow && r.push("single-row"), e.legend.reverseLabelOrder && (r.push("d-flex"), r.push("flex-column-reverse")), e.legend.position === "bottom" && e.legend.verticalSorted && r.push("vertical-sorted"), {
    containerClasses: t,
    innerClasses: r
  };
}
const Ac = (e, t) => {
  var M;
  const { formatDate: r, parseDate: n } = se.useContext(Et);
  let a = [], o = "", f = [], s = [];
  ((M = e.series) == null ? void 0 : M.length) > 0 && e.data ? (a = e.series[0], o = e.series[0].dataKey, f = e.highlightedBarValues, s = e.data.map((T) => T[e.xAxis.dataKey])) : (a = [], o = "", f = [], s = []);
  const c = (T, m) => {
    const L = [...e.highlightedBarValues];
    L[m].borderWidth = T.target.value, t({
      ...e,
      highlightedBarValues: L
    });
  }, d = (T, m) => {
    T.preventDefault();
    const L = [...e.highlightedBarValues];
    L[m].value = T.target.value, L[m].dataKey = o, t({
      ...e,
      highlightedBarValues: L
    });
  }, g = (T, m) => {
    T.preventDefault();
    const L = [...e.highlightedBarValues];
    L.push({ dataKey: o }), t({
      ...e,
      highlightedBarValues: L
    });
  }, v = (T, m) => {
    T.preventDefault();
    const L = [...e.highlightedBarValues];
    L.splice(m, 1), t({
      ...e,
      highlightedBarValues: L
    });
  }, y = (T, m) => {
    const L = [...e.highlightedBarValues];
    L[m].color = T.target.value, t({
      ...e
    });
  }, k = (T, m) => {
    const L = [...e.highlightedBarValues];
    L[m].legendLabel = T.target.value, t({
      ...e,
      copyOfHighlightedBarValues: L
    });
  }, E = () => {
  };
  return E.checkFontColor = (T, m, L) => {
    if (e.xAxis.type === "date") {
      if (E.formatDates(m).includes(T))
        return "#000";
    } else if (m.includes(T))
      return "#000";
    return L;
  }, E.formatDates = (T) => T.map((m) => m ? r(n(m)) : !1), E.findDuplicates = (T) => {
    const m = {};
    return T == null ? void 0 : T.filter((O) => {
      const { legendLabel: _ } = O;
      return m[_] ? !1 : (m[_] = !0, !0);
    });
  }, {
    HighLightedBarUtils: E,
    highlightedSeries: a,
    highlightedSeriesKey: o,
    highlightedBarValues: f,
    highlightedSeriesValues: s,
    handleUpdateHighlightedBar: d,
    handleAddNewHighlightedBar: g,
    handleRemoveHighlightedBar: v,
    handleUpdateHighlightedBarColor: y,
    handleHighlightedBarLegendLabel: k,
    handleUpdateHighlightedBorderWidth: c
  };
}, Tf = (e) => {
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
}, Kg = se.forwardRef(({ config: e, colorScale: t, seriesHighlight: r, highlight: n, highlightReset: a, currentViewport: o, formatLabels: f }, s) => {
  var L;
  const { innerClasses: c, containerClasses: d } = QS(e), { runtime: g, orientation: v, legend: y } = e;
  if (!y)
    return null;
  const k = Vf({
    domain: (L = e.suppressedData) == null ? void 0 : L.map((O) => O.label),
    range: ["none"],
    unknown: "block"
  }), E = y.position === "bottom" || ["sm", "xs", "xxs"].includes(o), M = {
    marginBottom: E ? "15px" : "0px",
    marginTop: E && v === "horizontal" ? `${e.yAxis.label && e.isResponsiveTicks ? e.dynamicMarginTop : e.runtime.xAxis.size}px` : `${E ? e.dynamicMarginTop + 15 : 0}px`
  }, { HighLightedBarUtils: T } = Ac(e);
  let m = T.findDuplicates(e.highlightedBarValues);
  return /* @__PURE__ */ i.createElement("aside", { ref: s, style: M, id: "legend", className: d.join(" "), role: "region", "aria-label": "legend", tabIndex: 0 }, y.label && /* @__PURE__ */ i.createElement("h3", null, Fi(y.label)), y.description && /* @__PURE__ */ i.createElement("p", null, Fi(y.description)), /* @__PURE__ */ i.createElement(ZS, { scale: t, itemDirection: "row", labelMargin: "0 20px 0 0", shapeMargin: "0 10px 0" }, (O) => {
    var _, N;
    return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: c.join(" ") }, f(O).map((R, j) => {
      var q, Y, U, te;
      let B = ["legend-item", `legend-text--${R.text.replace(" ", "").toLowerCase()}`], V = R.datum;
      if (e.exclusions.active && ((q = e.exclusions.keys) != null && q.includes(V)))
        return null;
      if (g.seriesLabels) {
        let me = e.runtime.seriesLabelsAll.indexOf(V);
        V = e.runtime.seriesKeys[me], ((Y = g == null ? void 0 : g.forecastingSeriesKeys) == null ? void 0 : Y.length) > 0 && (V = R.text);
      }
      return r.length > 0 && r.includes(V) === !1 && B.push("inactive"), /* @__PURE__ */ i.createElement(
        sc,
        {
          className: B.join(" "),
          tabIndex: 0,
          key: `legend-quantile-${j}`,
          onKeyDown: (me) => {
            me.key === "Enter" && (me.preventDefault(), n(R));
          },
          onClick: (me) => {
            me.preventDefault(), n(R);
          },
          role: "button"
        },
        e.visualizationType === "Line" && e.legend.lineMode ? /* @__PURE__ */ i.createElement("svg", { width: 40, height: 20 }, /* @__PURE__ */ i.createElement(rn, { from: { x: 10, y: 10 }, to: { x: 40, y: 10 }, stroke: R.value, strokeWidth: 2, strokeDasharray: Tf((U = e.series[j]) != null && U.type ? (te = e.series[j]) == null ? void 0 : te.type : "") })) : /* @__PURE__ */ i.createElement("div", { style: { display: "flex", flexDirection: "column" } }, /* @__PURE__ */ i.createElement(Hh, { margin: "0", fill: R.value, display: k(R.datum) }), /* @__PURE__ */ i.createElement("div", { style: { marginTop: "2px", marginRight: "6px" } }, R.icon)),
        /* @__PURE__ */ i.createElement(uc, { align: "left", margin: "0 0 0 4px" }, R.text)
      );
    }), m.map((R, j) => {
      let B = "legend-item", V = R.legendLabel;
      return V ? (r.length > 0 && r.includes(V) === !1 && (B += " inactive"), /* @__PURE__ */ i.createElement(
        sc,
        {
          className: B,
          tabIndex: 0,
          key: `legend-quantile-${j}`,
          onKeyDown: (q) => {
            q.key === "Enter" && (q.preventDefault(), n(R.legendLabel));
          },
          onClick: (q) => {
            q.preventDefault(), n(R.legendLabel);
          }
        },
        /* @__PURE__ */ i.createElement(Hh, { fill: "transparent", borderColor: R.color ? R.color : "rgba(255, 102, 1)" }),
        " ",
        /* @__PURE__ */ i.createElement(uc, { align: "left", margin: "0 0 0 4px" }, R.legendLabel ? R.legendLabel : R.value)
      )) : !1;
    })), /* @__PURE__ */ i.createElement(i.Fragment, null, ((_ = e == null ? void 0 : e.preliminaryData) == null ? void 0 : _.some((R) => R.label)) && ["Line", "Combo"].includes(e.visualizationType) && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("div", { className: e.legend.singleRow && E ? "legend-container__inner bottom single-row" : "" }, (N = e == null ? void 0 : e.preliminaryData) == null ? void 0 : N.map((R, j) => /* @__PURE__ */ i.createElement(i.Fragment, null, R.label && /* @__PURE__ */ i.createElement("div", { key: j, className: "legend-preliminary" }, /* @__PURE__ */ i.createElement("svg", null, R.style.includes("Dashed") ? /* @__PURE__ */ i.createElement(rn, { from: { x: 10, y: 10 }, to: { x: 40, y: 10 }, stroke: "#000", strokeWidth: 2, strokeDasharray: Tf(R.style) }) : /* @__PURE__ */ i.createElement("circle", { r: 6, strokeWidth: 2, stroke: "#000", cx: 22, cy: 10, fill: "transparent" })), /* @__PURE__ */ i.createElement("span", null, " ", R.label))))))));
  }), r.length > 0 && /* @__PURE__ */ i.createElement(km, { onClick: (O) => a(O), style: { marginTop: "1rem" } }, "Reset"));
});
function ch(e) {
  return Cy({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" } }] })(e);
}
const Yg = (e, t, r, n) => (a) => {
  var y, k, E, M, T;
  const { visualizationType: o, visualizationSubType: f, series: s, runtime: c } = e, d = (m) => e.legend.reverseLabelOrder && e.legend.position === "bottom" ? m.reverse() : m, g = (y = e.legend) == null ? void 0 : y.colorCode;
  if (o === "Deviation Bar") {
    const [m, L] = ju[e.twoColor.palette], O = {
      datum: "X",
      index: 0,
      text: `Below ${e.xAxis.targetLabel}`,
      value: m
    }, _ = {
      datum: "X",
      index: 1,
      text: `Above ${e.xAxis.targetLabel}`,
      value: L
    };
    return d([O, _]);
  }
  if (o === "Bar" && f === "regular" && g && (s == null ? void 0 : s.length) === 1) {
    let m = dr[e.palette];
    for (; t.length > m.length; )
      m = m.concat(m);
    m = m.slice(0, r.length);
    const L = /* @__PURE__ */ new Set();
    t.forEach((_) => L.add(_[g]));
    const O = Array.from(L).map((_, N) => ({
      datum: _,
      index: N,
      text: _,
      value: m[N]
    }));
    return d(O);
  }
  if (((k = c == null ? void 0 : c.forecastingSeriesKeys) == null ? void 0 : k.length) > 0) {
    let m = [];
    return (M = (E = e.runtime) == null ? void 0 : E.forecastingSeriesKeys) == null || M.map((L, O) => {
      var _;
      return (_ = L == null ? void 0 : L.stages) == null ? void 0 : _.map((N, R) => {
        var V, q, Y, U;
        let j = (V = Uu[N.color]) != null && V[2] ? (q = Uu[N.color]) == null ? void 0 : q[2] : (Y = dr[N.color]) != null && Y[2] ? (U = dr[N.color]) == null ? void 0 : U[2] : "#ccc";
        const B = {
          datum: N.key,
          index: R,
          text: N.key,
          value: j
        };
        m.push(B);
      });
    }), e.runtime.barSeriesKeys && e.runtime.barSeriesKeys.forEach((L, O) => {
      let _ = dr[e.palette][O] ? dr[e.palette][O] : "#ccc";
      const N = {
        datum: L,
        index: O,
        text: L,
        value: _
      };
      m.push(N);
    }), d(m);
  }
  if (e.series.filter((m) => !!m.name).length > 0) {
    const m = /* @__PURE__ */ new Set();
    e.series.forEach((O) => {
      m.add(O.name || O.dataKey);
    });
    const L = Array.from(m).map((O, _) => ({
      datum: O,
      index: _,
      text: O,
      value: n(O)
    }));
    return d(L);
  }
  if ((e.visualizationType === "Bar" || e.visualizationType === "Combo") && e.visualizationSubType === "regular" && e.suppressedData) {
    const m = a.length - 1;
    let L = [];
    return (T = e.suppressedData) == null || T.forEach(({ label: O, icon: _ }, N) => {
      if (O && _) {
        const R = {
          datum: O,
          index: m + N,
          text: O,
          icon: /* @__PURE__ */ i.createElement(ch, { color: "#000", size: 15 })
        };
        L.push(R);
      }
    }), [...a, ...L];
  }
  return d(a);
}, Ru = ({ startAngle: e, endAngle: t }) => ({
  startAngle: e,
  endAngle: t
}), JS = (e) => {
  const { transformedData: t, config: r, colorScale: n, currentViewport: a, dimensions: o, highlight: f, highlightReset: s, seriesHighlight: c } = se.useContext(Et), { tooltipData: d, showTooltip: g, hideTooltip: v, tooltipOpen: y, tooltipLeft: k, tooltipTop: E } = Ng(), { handleTooltipMouseOver: M, handleTooltipMouseOff: T, TooltipListItem: m } = Ig({
    xScale: !1,
    yScale: !1,
    showTooltip: g,
    hideTooltip: v
  }), [L, O] = se.useState(void 0), [_, N] = se.useState(!1), R = Object.values(r.columns).filter((Z) => Z.showInViz), j = R.length > 0, B = j ? "pivotColumn" : void 0, V = se.useMemo(() => {
    if (j) {
      let Z = [];
      const ee = r.yAxis.dataKey, Ae = R.map((oe) => oe.name), xe = [ee, ...Ae], De = r.xAxis.dataKey;
      return t.forEach((oe) => {
        xe.forEach((ze) => {
          const He = oe[ze];
          He && Z.push({
            [B]: He,
            [De]: `${oe[De]} - ${ze}`
          });
        });
      }), Z;
    }
    return t;
  }, [t, j]), q = se.useMemo(() => {
    if (j) {
      const Z = {};
      V.forEach((xe) => {
        Z[xe[r.xAxis.dataKey]] || (Z[xe[r.xAxis.dataKey]] = !0);
      });
      const ee = Object.entries(Z).length;
      let Ae = r.customColors || dr[r.palette];
      return Ae = Ae.slice(0, ee), Vf({
        domain: Object.keys(Z),
        range: Ae,
        unknown: null
      });
    }
    return n;
  }, [n, j]), Y = se.useRef(), U = sh(Y, {
    freezeOnceVisible: !1
  });
  se.useEffect(() => {
    document.querySelector(".isEditor") && N((ee) => !0);
  }), se.useEffect(() => {
    U != null && U.isIntersecting && r.animate && !_ && setTimeout(() => {
      N(!0);
    }, 500);
  }, [U == null ? void 0 : U.isIntersecting, r.animate]);
  const te = ({ arcs: Z, path: ee, getKey: Ae }) => {
    const xe = Lb(Z, Ae, {
      from: Ru,
      enter: Ru,
      update: Ru,
      leave: Ru
    });
    return se.useEffect(() => {
      const De = setTimeout(() => {
        v();
      }, 500);
      return () => {
        clearTimeout(De);
      };
    }, [d]), /* @__PURE__ */ i.createElement(i.Fragment, null, xe.map(({ item: De, props: oe, key: ze }, He) => /* @__PURE__ */ i.createElement(rt, { className: De.data[r.xAxis.dataKey], key: `${ze}-${He}`, style: { opacity: r.legend.behavior === "highlight" && c.length > 0 && c.indexOf(De.data[r.runtime.xAxis.dataKey]) === -1 ? 0.5 : 1 } }, /* @__PURE__ */ i.createElement(
      Ap.path,
      {
        d: wb(
          [oe.startAngle, oe.endAngle],
          (Ce, ge) => ee({
            ...De,
            startAngle: Ce,
            endAngle: ge
          })
        ),
        fill: q(De.data[r.runtime.xAxis.dataKey]),
        onMouseEnter: (Ce) => M(Ce, { data: De.data[r.runtime.xAxis.dataKey], arc: De }),
        onMouseLeave: (Ce) => T()
      }
    ))), xe.map(({ item: De, key: oe }, ze) => {
      const [He, Ce] = ee.centroid(De), ge = De.endAngle - De.startAngle >= 0.1;
      let Oe = "#FFF";
      return q(De.data[r.runtime.xAxis.dataKey]) && (Oe = Jo(Oe, q(De.data[r.runtime.xAxis.dataKey]))), /* @__PURE__ */ i.createElement(Ap.g, { key: `${oe}${ze}` }, ge && /* @__PURE__ */ i.createElement(bt, { style: { fill: Oe }, x: He, y: Ce, dy: ".33em", textAnchor: "middle", pointerEvents: "none" }, Math.round((De.endAngle - De.startAngle) * 180 / Math.PI / 360 * 100) + "%"));
    }));
  };
  let [me] = o;
  r && r.legend && !r.legend.hide && a === "lg" && (me = me * 0.73);
  const I = r.heights.vertical, le = Math.min(me, I) / 2, ue = I / 2, fe = me / 2, ae = r.pieType === "Donut" ? 75 : le;
  se.useEffect(() => {
    if (c.length > 0 && r.legend.behavior !== "highlight") {
      let Z = [];
      V.forEach((ee) => {
        c.indexOf(ee[r.runtime.xAxis.dataKey]) !== -1 && Z.push(ee);
      }), O(Z);
    } else
      O(void 0);
  }, [c]);
  const W = Yg(r, [], V, q);
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ir, { component: "PieChart" }, /* @__PURE__ */ i.createElement("svg", { width: me, height: I, className: `animated-pie group ${r.animate === !1 || _ ? "animated" : ""}`, role: "img", "aria-label": Sf(r) }, /* @__PURE__ */ i.createElement(rt, { top: ue, left: fe }, /* @__PURE__ */ i.createElement(
    W0,
    {
      data: L || V,
      pieValue: (Z) => Z[B || r.runtime.yAxis.dataKey],
      pieSortValues: () => -1,
      innerRadius: le - ae,
      outerRadius: le
    },
    (Z) => /* @__PURE__ */ i.createElement(te, { ...Z, getKey: (ee) => ee.data[r.runtime.xAxis.dataKey] })
  ))), /* @__PURE__ */ i.createElement("div", { ref: Y }), d && Object.entries(d.data).length > 0 && y && g && d.dataYPosition && d.dataXPosition && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${r.tooltips.opacity / 100}) !important`), /* @__PURE__ */ i.createElement(Bg, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: k, top: E }, /* @__PURE__ */ i.createElement("ul", null, typeof d == "object" && Object.entries(d.data).map((Z, ee) => /* @__PURE__ */ i.createElement(m, { item: Z, key: ee })))))), /* @__PURE__ */ i.createElement(Kg, { config: r, colorScale: q, seriesHighlight: c, highlight: f, highlightReset: s, currentViewport: a, formatLabels: W }));
};
function As(e) {
  return e.split("-")[1];
}
function dh(e) {
  return e === "y" ? "height" : "width";
}
function Hi(e) {
  return e.split("-")[0];
}
function Ps(e) {
  return ["top", "bottom"].includes(Hi(e)) ? "x" : "y";
}
function $p(e, t, r) {
  let { reference: n, floating: a } = e;
  const o = n.x + n.width / 2 - a.width / 2, f = n.y + n.height / 2 - a.height / 2, s = Ps(t), c = dh(s), d = n[c] / 2 - a[c] / 2, g = s === "x";
  let v;
  switch (Hi(t)) {
    case "top":
      v = { x: o, y: n.y - a.height };
      break;
    case "bottom":
      v = { x: o, y: n.y + n.height };
      break;
    case "right":
      v = { x: n.x + n.width, y: f };
      break;
    case "left":
      v = { x: n.x - a.width, y: f };
      break;
    default:
      v = { x: n.x, y: n.y };
  }
  switch (As(t)) {
    case "start":
      v[s] -= d * (r && g ? -1 : 1);
      break;
    case "end":
      v[s] += d * (r && g ? -1 : 1);
  }
  return v;
}
function Xg(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function gs(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function qg(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: n, y: a, platform: o, rects: f, elements: s, strategy: c } = e, { boundary: d = "clippingAncestors", rootBoundary: g = "viewport", elementContext: v = "floating", altBoundary: y = !1, padding: k = 0 } = t, E = Xg(k), M = s[y ? v === "floating" ? "reference" : "floating" : v], T = gs(await o.getClippingRect({ element: (r = await (o.isElement == null ? void 0 : o.isElement(M))) == null || r ? M : M.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(s.floating)), boundary: d, rootBoundary: g, strategy: c })), m = v === "floating" ? { ...f.floating, x: n, y: a } : f.reference, L = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(s.floating)), O = await (o.isElement == null ? void 0 : o.isElement(L)) && await (o.getScale == null ? void 0 : o.getScale(L)) || { x: 1, y: 1 }, _ = gs(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: m, offsetParent: L, strategy: c }) : m);
  return { top: (T.top - _.top + E.top) / O.y, bottom: (_.bottom - T.bottom + E.bottom) / O.y, left: (T.left - _.left + E.left) / O.x, right: (_.right - T.right + E.right) / O.x };
}
const eE = Math.min, tE = Math.max;
function Cf(e, t, r) {
  return tE(e, eE(t, r));
}
["top", "right", "bottom", "left"].reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const nE = { left: "right", right: "left", bottom: "top", top: "bottom" };
function dc(e) {
  return e.replace(/left|right|bottom|top/g, (t) => nE[t]);
}
function rE(e, t, r) {
  r === void 0 && (r = !1);
  const n = As(e), a = Ps(e), o = dh(a);
  let f = a === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (f = dc(f)), { main: f, cross: dc(f) };
}
const aE = { start: "end", end: "start" };
function Vd(e) {
  return e.replace(/start|end/g, (t) => aE[t]);
}
const iE = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var r;
    const { placement: n, middlewareData: a, rects: o, initialPlacement: f, platform: s, elements: c } = t, { mainAxis: d = !0, crossAxis: g = !0, fallbackPlacements: v, fallbackStrategy: y = "bestFit", fallbackAxisSideDirection: k = "none", flipAlignment: E = !0, ...M } = e, T = Hi(n), m = Hi(f) === f, L = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), O = v || (m || !E ? [dc(f)] : function(Y) {
      const U = dc(Y);
      return [Vd(Y), U, Vd(U)];
    }(f));
    v || k === "none" || O.push(...function(Y, U, te, me) {
      const I = As(Y);
      let le = function(ue, fe, ae) {
        const W = ["left", "right"], Z = ["right", "left"], ee = ["top", "bottom"], Ae = ["bottom", "top"];
        switch (ue) {
          case "top":
          case "bottom":
            return ae ? fe ? Z : W : fe ? W : Z;
          case "left":
          case "right":
            return fe ? ee : Ae;
          default:
            return [];
        }
      }(Hi(Y), te === "start", me);
      return I && (le = le.map((ue) => ue + "-" + I), U && (le = le.concat(le.map(Vd)))), le;
    }(f, E, k, L));
    const _ = [f, ...O], N = await qg(t, M), R = [];
    let j = ((r = a.flip) == null ? void 0 : r.overflows) || [];
    if (d && R.push(N[T]), g) {
      const { main: Y, cross: U } = rE(n, o, L);
      R.push(N[Y], N[U]);
    }
    if (j = [...j, { placement: n, overflows: R }], !R.every((Y) => Y <= 0)) {
      var B, V;
      const Y = (((B = a.flip) == null ? void 0 : B.index) || 0) + 1, U = _[Y];
      if (U)
        return { data: { index: Y, overflows: j }, reset: { placement: U } };
      let te = (V = j.find((me) => me.overflows[0] <= 0)) == null ? void 0 : V.placement;
      if (!te)
        switch (y) {
          case "bestFit": {
            var q;
            const me = (q = j.map((I) => [I.placement, I.overflows.filter((le) => le > 0).reduce((le, ue) => le + ue, 0)]).sort((I, le) => I[1] - le[1])[0]) == null ? void 0 : q[0];
            me && (te = me);
            break;
          }
          case "initialPlacement":
            te = f;
        }
      if (n !== te)
        return { reset: { placement: te } };
    }
    return {};
  } };
}, oE = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: r, y: n } = t, a = await async function(o, f) {
      const { placement: s, platform: c, elements: d } = o, g = await (c.isRTL == null ? void 0 : c.isRTL(d.floating)), v = Hi(s), y = As(s), k = Ps(s) === "x", E = ["left", "top"].includes(v) ? -1 : 1, M = g && k ? -1 : 1, T = typeof f == "function" ? f(o) : f;
      let { mainAxis: m, crossAxis: L, alignmentAxis: O } = typeof T == "number" ? { mainAxis: T, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...T };
      return y && typeof O == "number" && (L = y === "end" ? -1 * O : O), k ? { x: L * M, y: m * E } : { x: m * E, y: L * M };
    }(t, e);
    return { x: r + a.x, y: n + a.y, data: a };
  } };
}, lE = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: r, y: n, placement: a } = t, { mainAxis: o = !0, crossAxis: f = !1, limiter: s = { fn: (T) => {
      let { x: m, y: L } = T;
      return { x: m, y: L };
    } }, ...c } = e, d = { x: r, y: n }, g = await qg(t, c), v = Ps(Hi(a)), y = v === "x" ? "y" : "x";
    let k = d[v], E = d[y];
    if (o) {
      const T = v === "y" ? "bottom" : "right";
      k = Cf(k + g[v === "y" ? "top" : "left"], k, k - g[T]);
    }
    if (f) {
      const T = y === "y" ? "bottom" : "right";
      E = Cf(E + g[y === "y" ? "top" : "left"], E, E - g[T]);
    }
    const M = s.fn({ ...t, [v]: k, [y]: E });
    return { ...M, data: { x: M.x - r, y: M.y - n } };
  } };
};
function Rr(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ea(e) {
  return Rr(e).getComputedStyle(e);
}
const Bp = Math.min, ys = Math.max, fc = Math.round;
function Gg(e) {
  const t = ea(e);
  let r = parseFloat(t.width), n = parseFloat(t.height);
  const a = e.offsetWidth, o = e.offsetHeight, f = fc(r) !== a || fc(n) !== o;
  return f && (r = a, n = o), { width: r, height: n, fallback: f };
}
function Ya(e) {
  return Qg(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Lu;
function Zg() {
  if (Lu)
    return Lu;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Lu = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Lu) : navigator.userAgent;
}
function ta(e) {
  return e instanceof Rr(e).HTMLElement;
}
function Va(e) {
  return e instanceof Rr(e).Element;
}
function Qg(e) {
  return e instanceof Rr(e).Node;
}
function Ip(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Rr(e).ShadowRoot || e instanceof ShadowRoot;
}
function Pc(e) {
  const { overflow: t, overflowX: r, overflowY: n, display: a } = ea(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(a);
}
function sE(e) {
  return ["table", "td", "th"].includes(Ya(e));
}
function Af(e) {
  const t = /firefox/i.test(Zg()), r = ea(e), n = r.backdropFilter || r.WebkitBackdropFilter;
  return r.transform !== "none" || r.perspective !== "none" || !!n && n !== "none" || t && r.willChange === "filter" || t && !!r.filter && r.filter !== "none" || ["transform", "perspective"].some((a) => r.willChange.includes(a)) || ["paint", "layout", "strict", "content"].some((a) => {
    const o = r.contain;
    return o != null && o.includes(a);
  });
}
function Jg() {
  return !/^((?!chrome|android).)*safari/i.test(Zg());
}
function fh(e) {
  return ["html", "body", "#document"].includes(Ya(e));
}
function ey(e) {
  return Va(e) ? e : e.contextElement;
}
const ty = { x: 1, y: 1 };
function Qo(e) {
  const t = ey(e);
  if (!ta(t))
    return ty;
  const r = t.getBoundingClientRect(), { width: n, height: a, fallback: o } = Gg(t);
  let f = (o ? fc(r.width) : r.width) / n, s = (o ? fc(r.height) : r.height) / a;
  return f && Number.isFinite(f) || (f = 1), s && Number.isFinite(s) || (s = 1), { x: f, y: s };
}
function ws(e, t, r, n) {
  var a, o;
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const f = e.getBoundingClientRect(), s = ey(e);
  let c = ty;
  t && (n ? Va(n) && (c = Qo(n)) : c = Qo(e));
  const d = s ? Rr(s) : window, g = !Jg() && r;
  let v = (f.left + (g && ((a = d.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / c.x, y = (f.top + (g && ((o = d.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / c.y, k = f.width / c.x, E = f.height / c.y;
  if (s) {
    const M = Rr(s), T = n && Va(n) ? Rr(n) : n;
    let m = M.frameElement;
    for (; m && n && T !== M; ) {
      const L = Qo(m), O = m.getBoundingClientRect(), _ = getComputedStyle(m);
      O.x += (m.clientLeft + parseFloat(_.paddingLeft)) * L.x, O.y += (m.clientTop + parseFloat(_.paddingTop)) * L.y, v *= L.x, y *= L.y, k *= L.x, E *= L.y, v += O.x, y += O.y, m = Rr(m).frameElement;
    }
  }
  return { width: k, height: E, top: y, right: v + k, bottom: y + E, left: v, x: v, y };
}
function ja(e) {
  return ((Qg(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Rc(e) {
  return Va(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function ny(e) {
  return ws(ja(e)).left + Rc(e).scrollLeft;
}
function Ts(e) {
  if (Ya(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || Ip(e) && e.host || ja(e);
  return Ip(t) ? t.host : t;
}
function ry(e) {
  const t = Ts(e);
  return fh(t) ? t.ownerDocument.body : ta(t) && Pc(t) ? t : ry(t);
}
function ay(e, t) {
  var r;
  t === void 0 && (t = []);
  const n = ry(e), a = n === ((r = e.ownerDocument) == null ? void 0 : r.body), o = Rr(n);
  return a ? t.concat(o, o.visualViewport || [], Pc(n) ? n : []) : t.concat(n, ay(n));
}
function Hp(e, t, r) {
  return t === "viewport" ? gs(function(n, a) {
    const o = Rr(n), f = ja(n), s = o.visualViewport;
    let c = f.clientWidth, d = f.clientHeight, g = 0, v = 0;
    if (s) {
      c = s.width, d = s.height;
      const y = Jg();
      (y || !y && a === "fixed") && (g = s.offsetLeft, v = s.offsetTop);
    }
    return { width: c, height: d, x: g, y: v };
  }(e, r)) : Va(t) ? gs(function(n, a) {
    const o = ws(n, !0, a === "fixed"), f = o.top + n.clientTop, s = o.left + n.clientLeft, c = ta(n) ? Qo(n) : { x: 1, y: 1 };
    return { width: n.clientWidth * c.x, height: n.clientHeight * c.y, x: s * c.x, y: f * c.y };
  }(t, r)) : gs(function(n) {
    const a = ja(n), o = Rc(n), f = n.ownerDocument.body, s = ys(a.scrollWidth, a.clientWidth, f.scrollWidth, f.clientWidth), c = ys(a.scrollHeight, a.clientHeight, f.scrollHeight, f.clientHeight);
    let d = -o.scrollLeft + ny(n);
    const g = -o.scrollTop;
    return ea(f).direction === "rtl" && (d += ys(a.clientWidth, f.clientWidth) - s), { width: s, height: c, x: d, y: g };
  }(ja(e)));
}
function Wp(e) {
  return ta(e) && ea(e).position !== "fixed" ? e.offsetParent : null;
}
function Vp(e) {
  const t = Rr(e);
  let r = Wp(e);
  for (; r && sE(r) && ea(r).position === "static"; )
    r = Wp(r);
  return r && (Ya(r) === "html" || Ya(r) === "body" && ea(r).position === "static" && !Af(r)) ? t : r || function(n) {
    let a = Ts(n);
    for (; ta(a) && !fh(a); ) {
      if (Af(a))
        return a;
      a = Ts(a);
    }
    return null;
  }(e) || t;
}
function uE(e, t, r) {
  const n = ta(t), a = ja(t), o = ws(e, !0, r === "fixed", t);
  let f = { scrollLeft: 0, scrollTop: 0 };
  const s = { x: 0, y: 0 };
  if (n || !n && r !== "fixed")
    if ((Ya(t) !== "body" || Pc(a)) && (f = Rc(t)), ta(t)) {
      const c = ws(t, !0);
      s.x = c.x + t.clientLeft, s.y = c.y + t.clientTop;
    } else
      a && (s.x = ny(a));
  return { x: o.left + f.scrollLeft - s.x, y: o.top + f.scrollTop - s.y, width: o.width, height: o.height };
}
const cE = { getClippingRect: function(e) {
  let { element: t, boundary: r, rootBoundary: n, strategy: a } = e;
  const o = r === "clippingAncestors" ? function(d, g) {
    const v = g.get(d);
    if (v)
      return v;
    let y = ay(d).filter((T) => Va(T) && Ya(T) !== "body"), k = null;
    const E = ea(d).position === "fixed";
    let M = E ? Ts(d) : d;
    for (; Va(M) && !fh(M); ) {
      const T = ea(M), m = Af(M);
      (E ? m || k : m || T.position !== "static" || !k || !["absolute", "fixed"].includes(k.position)) ? k = T : y = y.filter((L) => L !== M), M = Ts(M);
    }
    return g.set(d, y), y;
  }(t, this._c) : [].concat(r), f = [...o, n], s = f[0], c = f.reduce((d, g) => {
    const v = Hp(t, g, a);
    return d.top = ys(v.top, d.top), d.right = Bp(v.right, d.right), d.bottom = Bp(v.bottom, d.bottom), d.left = ys(v.left, d.left), d;
  }, Hp(t, s, a));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: r, strategy: n } = e;
  const a = ta(r), o = ja(r);
  if (r === o)
    return t;
  let f = { scrollLeft: 0, scrollTop: 0 }, s = { x: 1, y: 1 };
  const c = { x: 0, y: 0 };
  if ((a || !a && n !== "fixed") && ((Ya(r) !== "body" || Pc(o)) && (f = Rc(r)), ta(r))) {
    const d = ws(r);
    s = Qo(r), c.x = d.x + r.clientLeft, c.y = d.y + r.clientTop;
  }
  return { width: t.width * s.x, height: t.height * s.y, x: t.x * s.x - f.scrollLeft * s.x + c.x, y: t.y * s.y - f.scrollTop * s.y + c.y };
}, isElement: Va, getDimensions: function(e) {
  return ta(e) ? Gg(e) : e.getBoundingClientRect();
}, getOffsetParent: Vp, getDocumentElement: ja, getScale: Qo, async getElementRects(e) {
  let { reference: t, floating: r, strategy: n } = e;
  const a = this.getOffsetParent || Vp, o = this.getDimensions;
  return { reference: uE(t, await a(r), n), floating: { x: 0, y: 0, ...await o(r) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => ea(e).direction === "rtl" }, jp = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), a = { platform: cE, ...r }, o = { ...a.platform, _c: n };
  return (async (f, s, c) => {
    const { placement: d = "bottom", strategy: g = "absolute", middleware: v = [], platform: y } = c, k = v.filter(Boolean), E = await (y.isRTL == null ? void 0 : y.isRTL(s));
    if (y == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), k.filter((N) => {
      let { name: R } = N;
      return R === "autoPlacement" || R === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    f && s || console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
    let M = await y.getElementRects({ reference: f, floating: s, strategy: g }), { x: T, y: m } = $p(M, d, E), L = d, O = {}, _ = 0;
    for (let N = 0; N < k.length; N++) {
      const { name: R, fn: j } = k[N], { x: B, y: V, data: q, reset: Y } = await j({ x: T, y: m, initialPlacement: d, placement: L, strategy: g, middlewareData: O, rects: M, platform: y, elements: { reference: f, floating: s } });
      T = B ?? T, m = V ?? m, O = { ...O, [R]: { ...O[R], ...q } }, _ > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), Y && _ <= 50 && (_++, typeof Y == "object" && (Y.placement && (L = Y.placement), Y.rects && (M = Y.rects === !0 ? await y.getElementRects({ reference: f, floating: s, strategy: g }) : Y.rects), { x: T, y: m } = $p(M, L, E)), N = -1);
    }
    return { x: T, y: m, placement: L, strategy: g, middlewareData: O };
  })(e, t, { ...a, platform: o });
};
var $a, Wi = { exports: {} }, Up = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
$a = Up, function() {
  var e = i, t = 60103, r = 60106;
  $a.Fragment = 60107;
  var n = 60108, a = 60114, o = 60109, f = 60110, s = 60112, c = 60113, d = 60120, g = 60115, v = 60116, y = 60121, k = 60122, E = 60117, M = 60129, T = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var m = Symbol.for;
    t = m("react.element"), r = m("react.portal"), $a.Fragment = m("react.fragment"), n = m("react.strict_mode"), a = m("react.profiler"), o = m("react.provider"), f = m("react.context"), s = m("react.forward_ref"), c = m("react.suspense"), d = m("react.suspense_list"), g = m("react.memo"), v = m("react.lazy"), y = m("react.block"), k = m("react.server.block"), E = m("react.fundamental"), m("react.scope"), m("react.opaque.id"), M = m("react.debug_trace_mode"), m("react.offscreen"), T = m("react.legacy_hidden");
  }
  var L = typeof Symbol == "function" && Symbol.iterator, O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function _(ge) {
    for (var Oe = arguments.length, ie = new Array(Oe > 1 ? Oe - 1 : 0), ke = 1; ke < Oe; ke++)
      ie[ke - 1] = arguments[ke];
    N("error", ge, ie);
  }
  function N(ge, Oe, ie) {
    var ke = O.ReactDebugCurrentFrame, Pe = "";
    if (V) {
      var We = j(V.type), Ye = V._owner;
      Pe += function(lt, st, it) {
        var Je = "";
        if (st) {
          var Ie = st.fileName, $e = Ie.replace(R, "");
          if (/^index\./.test($e)) {
            var ft = Ie.match(R);
            if (ft) {
              var Ke = ft[1];
              Ke && ($e = Ke.replace(R, "") + "/" + $e);
            }
          }
          Je = " (at " + $e + ":" + st.lineNumber + ")";
        } else
          it && (Je = " (created by " + it + ")");
        return `
    in ` + (lt || "Unknown") + Je;
      }(We, V._source, Ye && j(Ye.type));
    }
    (Pe += ke.getStackAddendum()) !== "" && (Oe += "%s", ie = ie.concat([Pe]));
    var qe = ie.map(function(lt) {
      return "" + lt;
    });
    qe.unshift("Warning: " + Oe), Function.prototype.apply.call(console[ge], console, qe);
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
    if (typeof ge == "object")
      switch (ge.$$typeof) {
        case f:
          return "Context.Consumer";
        case o:
          return "Context.Provider";
        case s:
          return ke = ge, Pe = ge.render, We = "ForwardRef", Ye = Pe.displayName || Pe.name || "", ke.displayName || (Ye !== "" ? We + "(" + Ye + ")" : We);
        case g:
          return j(ge.type);
        case y:
          return j(ge.render);
        case v:
          var Oe = (ie = ge)._status === 1 ? ie._result : null;
          if (Oe)
            return j(Oe);
      }
    var ie, ke, Pe, We, Ye;
    return null;
  }
  var B = {};
  O.ReactDebugCurrentFrame;
  var V = null;
  function q(ge) {
    V = ge;
  }
  var Y, U, te, me = O.ReactCurrentOwner, I = Object.prototype.hasOwnProperty, le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ue(ge, Oe, ie, ke, Pe) {
    var We, Ye = {}, qe = null, lt = null;
    for (We in ie !== void 0 && (qe = "" + ie), function(Je) {
      if (I.call(Je, "key")) {
        var Ie = Object.getOwnPropertyDescriptor(Je, "key").get;
        if (Ie && Ie.isReactWarning)
          return !1;
      }
      return Je.key !== void 0;
    }(Oe) && (qe = "" + Oe.key), function(Je) {
      if (I.call(Je, "ref")) {
        var Ie = Object.getOwnPropertyDescriptor(Je, "ref").get;
        if (Ie && Ie.isReactWarning)
          return !1;
      }
      return Je.ref !== void 0;
    }(Oe) && (lt = Oe.ref, function(Je, Ie) {
      if (typeof Je.ref == "string" && me.current && Ie && me.current.stateNode !== Ie) {
        var $e = j(me.current.type);
        te[$e] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(me.current.type), Je.ref), te[$e] = !0);
      }
    }(Oe, Pe)), Oe)
      I.call(Oe, We) && !le.hasOwnProperty(We) && (Ye[We] = Oe[We]);
    if (ge && ge.defaultProps) {
      var st = ge.defaultProps;
      for (We in st)
        Ye[We] === void 0 && (Ye[We] = st[We]);
    }
    if (qe || lt) {
      var it = typeof ge == "function" ? ge.displayName || ge.name || "Unknown" : ge;
      qe && function(Je, Ie) {
        var $e = function() {
          Y || (Y = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Ie));
        };
        $e.isReactWarning = !0, Object.defineProperty(Je, "key", { get: $e, configurable: !0 });
      }(Ye, it), lt && function(Je, Ie) {
        var $e = function() {
          U || (U = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Ie));
        };
        $e.isReactWarning = !0, Object.defineProperty(Je, "ref", { get: $e, configurable: !0 });
      }(Ye, it);
    }
    return function(Je, Ie, $e, ft, Ke, Qe, ct) {
      var ht = { $$typeof: t, type: Je, key: Ie, ref: $e, props: ct, _owner: Qe, _store: {} };
      return Object.defineProperty(ht._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: !1 }), Object.defineProperty(ht, "_self", { configurable: !1, enumerable: !1, writable: !1, value: ft }), Object.defineProperty(ht, "_source", { configurable: !1, enumerable: !1, writable: !1, value: Ke }), Object.freeze && (Object.freeze(ht.props), Object.freeze(ht)), ht;
    }(ge, qe, lt, Pe, ke, me.current, Ye);
  }
  te = {};
  var fe, ae = O.ReactCurrentOwner;
  function W(ge) {
    V = ge;
  }
  function Z(ge) {
    return typeof ge == "object" && ge !== null && ge.$$typeof === t;
  }
  function ee() {
    if (ae.current) {
      var ge = j(ae.current.type);
      if (ge)
        return `

Check the render method of \`` + ge + "`.";
    }
    return "";
  }
  O.ReactDebugCurrentFrame, fe = !1;
  var Ae = {};
  function xe(ge, Oe) {
    if (ge._store && !ge._store.validated && ge.key == null) {
      ge._store.validated = !0;
      var ie = function(Pe) {
        var We = ee();
        if (!We) {
          var Ye = typeof Pe == "string" ? Pe : Pe.displayName || Pe.name;
          Ye && (We = `

Check the top-level render call using <` + Ye + ">.");
        }
        return We;
      }(Oe);
      if (!Ae[ie]) {
        Ae[ie] = !0;
        var ke = "";
        ge && ge._owner && ge._owner !== ae.current && (ke = " It was passed a child from " + j(ge._owner.type) + "."), W(ge), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ie, ke), W(null);
      }
    }
  }
  function De(ge, Oe) {
    if (typeof ge == "object") {
      if (Array.isArray(ge))
        for (var ie = 0; ie < ge.length; ie++) {
          var ke = ge[ie];
          Z(ke) && xe(ke, Oe);
        }
      else if (Z(ge))
        ge._store && (ge._store.validated = !0);
      else if (ge) {
        var Pe = function(qe) {
          if (qe === null || typeof qe != "object")
            return null;
          var lt = L && qe[L] || qe["@@iterator"];
          return typeof lt == "function" ? lt : null;
        }(ge);
        if (typeof Pe == "function" && Pe !== ge.entries)
          for (var We, Ye = Pe.call(ge); !(We = Ye.next()).done; )
            Z(We.value) && xe(We.value, Oe);
      }
    }
  }
  function oe(ge) {
    var Oe, ie = ge.type;
    if (ie != null && typeof ie != "string") {
      if (typeof ie == "function")
        Oe = ie.propTypes;
      else {
        if (typeof ie != "object" || ie.$$typeof !== s && ie.$$typeof !== g)
          return;
        Oe = ie.propTypes;
      }
      if (Oe) {
        var ke = j(ie);
        (function(Pe, We, Ye, qe, lt) {
          var st = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var it in Pe)
            if (st(Pe, it)) {
              var Je = void 0;
              try {
                if (typeof Pe[it] != "function") {
                  var Ie = Error((qe || "React class") + ": " + Ye + " type `" + it + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof Pe[it] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Ie.name = "Invariant Violation", Ie;
                }
                Je = Pe[it](We, it, qe, Ye, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch ($e) {
                Je = $e;
              }
              !Je || Je instanceof Error || (q(lt), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", qe || "React class", Ye, it, typeof Je), q(null)), Je instanceof Error && !(Je.message in B) && (B[Je.message] = !0, q(lt), _("Failed %s type: %s", Ye, Je.message), q(null));
            }
        })(Oe, ge.props, "prop", ke, ge);
      } else
        ie.PropTypes === void 0 || fe || (fe = !0, _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", j(ie) || "Unknown"));
      typeof ie.getDefaultProps != "function" || ie.getDefaultProps.isReactClassApproved || _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function ze(ge, Oe, ie, ke, Pe, We) {
    var Ye = function($e) {
      return typeof $e == "string" || typeof $e == "function" || $e === $a.Fragment || $e === a || $e === M || $e === n || $e === c || $e === d || $e === T || typeof $e == "object" && $e !== null && ($e.$$typeof === v || $e.$$typeof === g || $e.$$typeof === o || $e.$$typeof === f || $e.$$typeof === s || $e.$$typeof === E || $e.$$typeof === y || $e[0] === k);
    }(ge);
    if (!Ye) {
      var qe = "";
      (ge === void 0 || typeof ge == "object" && ge !== null && Object.keys(ge).length === 0) && (qe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
      var lt, st = function($e) {
        return $e !== void 0 ? `

Check your code at ` + $e.fileName.replace(/^.*[\\\/]/, "") + ":" + $e.lineNumber + "." : "";
      }(Pe);
      qe += st || ee(), ge === null ? lt = "null" : Array.isArray(ge) ? lt = "array" : ge !== void 0 && ge.$$typeof === t ? (lt = "<" + (j(ge.type) || "Unknown") + " />", qe = " Did you accidentally export a JSX literal instead of a component?") : lt = typeof ge, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", lt, qe);
    }
    var it = ue(ge, Oe, ie, Pe, We);
    if (it == null)
      return it;
    if (Ye) {
      var Je = Oe.children;
      if (Je !== void 0)
        if (ke)
          if (Array.isArray(Je)) {
            for (var Ie = 0; Ie < Je.length; Ie++)
              De(Je[Ie], ge);
            Object.freeze && Object.freeze(Je);
          } else
            _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          De(Je, ge);
    }
    return ge === $a.Fragment ? function($e) {
      for (var ft = Object.keys($e.props), Ke = 0; Ke < ft.length; Ke++) {
        var Qe = ft[Ke];
        if (Qe !== "children" && Qe !== "key") {
          W($e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Qe), W(null);
          break;
        }
      }
      $e.ref !== null && (W($e), _("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
    }(it) : oe(it), it;
  }
  var He = function(ge, Oe, ie) {
    return ze(ge, Oe, ie, !1);
  }, Ce = function(ge, Oe, ie) {
    return ze(ge, Oe, ie, !0);
  };
  $a.jsx = He, $a.jsxs = Ce;
}(), Wi.exports = Up;
var jd, iy = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
jd = iy, function() {
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
var Kp = iy.exports;
const Yp = (e, t, r) => {
  let n = null;
  return function(...a) {
    n && clearTimeout(n), n = setTimeout(() => {
      n = null, r || e.apply(this, a);
    }, t);
  };
}, dE = ({ content: e }) => Wi.exports.jsx("span", { dangerouslySetInnerHTML: { __html: e } }), fE = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, hE = se.createContext({ getTooltipData: () => fE });
function oy(e = "DEFAULT_TOOLTIP_ID") {
  return se.useContext(hE).getTooltipData(e);
}
const Xp = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: r = null, place: n = "top", offset: a = 10, strategy: o = "absolute", middlewares: f = [oE(Number(a)), iE(), lE({ padding: 5 })] }) => {
  if (!e)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  if (t === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  const s = f;
  return r ? (s.push({ name: "arrow", options: c = { element: r, padding: 5 }, async fn(d) {
    const { element: g, padding: v = 0 } = c || {}, { x: y, y: k, placement: E, rects: M, platform: T } = d;
    if (g == null)
      return console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const m = Xg(v), L = { x: y, y: k }, O = Ps(E), _ = dh(O), N = await T.getDimensions(g), R = O === "y" ? "top" : "left", j = O === "y" ? "bottom" : "right", B = M.reference[_] + M.reference[O] - L[O] - M.floating[_], V = L[O] - M.reference[O], q = await (T.getOffsetParent == null ? void 0 : T.getOffsetParent(g));
    let Y = q ? O === "y" ? q.clientHeight || 0 : q.clientWidth || 0 : 0;
    Y === 0 && (Y = M.floating[_]);
    const U = B / 2 - V / 2, te = m[R], me = Y - N[_] - m[j], I = Y / 2 - N[_] / 2 + U, le = Cf(te, I, me), ue = As(E) != null && I != le && M.reference[_] / 2 - (I < te ? m[R] : m[j]) - N[_] / 2 < 0;
    return { [O]: L[O] - (ue ? I < te ? te - I : me - I : 0), data: { [O]: le, centerOffset: I - le } };
  } }), jp(e, t, { placement: n, strategy: o, middleware: s }).then(({ x: d, y: g, placement: v, middlewareData: y }) => {
    var k, E;
    const M = { left: `${d}px`, top: `${g}px` }, { x: T, y: m } = (k = y.arrow) !== null && k !== void 0 ? k : { x: 0, y: 0 };
    return { tooltipStyles: M, tooltipArrowStyles: { left: T != null ? `${T}px` : "", top: m != null ? `${m}px` : "", right: "", bottom: "", [(E = { top: "bottom", right: "left", bottom: "top", left: "right" }[v.split("-")[0]]) !== null && E !== void 0 ? E : "bottom"]: "-4px" } };
  })) : jp(e, t, { placement: "bottom", strategy: o, middleware: s }).then(({ x: d, y: g }) => ({ tooltipStyles: { left: `${d}px`, top: `${g}px` }, tooltipArrowStyles: {} }));
  var c;
};
var Di = { tooltip: "styles-module_tooltip__mnnfp", fixed: "styles-module_fixed__7ciUi", arrow: "styles-module_arrow__K0L3T", "no-arrow": "styles-module_no-arrow__KcFZN", clickable: "styles-module_clickable__Bv9o7", show: "styles-module_show__2NboJ", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const qp = ({ id: e, className: t, classNameArrow: r, variant: n = "dark", anchorId: a, anchorSelect: o, place: f = "top", offset: s = 10, events: c = ["hover"], positionStrategy: d = "absolute", middlewares: g, wrapper: v, children: y = null, delayShow: k = 0, delayHide: E = 0, float: M = !1, noArrow: T = !1, clickable: m = !1, closeOnEsc: L = !1, style: O, position: _, afterShow: N, afterHide: R, content: j, html: B, isOpen: V, setIsOpen: q, activeAnchor: Y, setActiveAnchor: U }) => {
  const te = se.useRef(null), me = se.useRef(null), I = se.useRef(null), le = se.useRef(null), [ue, fe] = se.useState({}), [ae, W] = se.useState({}), [Z, ee] = se.useState(!1), [Ae, xe] = se.useState(!1), De = se.useRef(!1), oe = se.useRef(null), { anchorRefs: ze, setActiveAnchor: He } = oy(e), Ce = se.useRef(!1), [ge, Oe] = se.useState([]), ie = se.useRef(!1);
  se.useLayoutEffect(() => (ie.current = !0, () => {
    ie.current = !1;
  }), []), se.useEffect(() => {
    if (!Z) {
      const Ke = setTimeout(() => {
        xe(!1);
      }, 150);
      return () => {
        clearTimeout(Ke);
      };
    }
    return () => null;
  }, [Z]);
  const ke = (Ke) => {
    ie.current && (Ke && xe(!0), setTimeout(() => {
      ie.current && (q == null || q(Ke), V === void 0 && ee(Ke));
    }, 10));
  };
  se.useEffect(() => {
    if (V === void 0)
      return () => null;
    V && xe(!0);
    const Ke = setTimeout(() => {
      ee(V);
    }, 10);
    return () => {
      clearTimeout(Ke);
    };
  }, [V]), se.useEffect(() => {
    Z !== De.current && (De.current = Z, Z ? N == null || N() : R == null || R());
  }, [Z]);
  const Pe = (Ke = E) => {
    le.current && clearTimeout(le.current), le.current = setTimeout(() => {
      Ce.current || ke(!1);
    }, Ke);
  }, We = (Ke) => {
    var Qe;
    if (!Ke)
      return;
    k ? (I.current && clearTimeout(I.current), I.current = setTimeout(() => {
      ke(!0);
    }, k)) : ke(!0);
    const ct = (Qe = Ke.currentTarget) !== null && Qe !== void 0 ? Qe : Ke.target;
    U(ct), He({ current: ct }), le.current && clearTimeout(le.current);
  }, Ye = () => {
    m ? Pe(E || 100) : E ? Pe() : ke(!1), I.current && clearTimeout(I.current);
  }, qe = ({ x: Ke, y: Qe }) => {
    Xp({ place: f, offset: s, elementReference: { getBoundingClientRect: () => ({ x: Ke, y: Qe, width: 0, height: 0, top: Qe, left: Ke, right: Ke, bottom: Qe }) }, tooltipReference: te.current, tooltipArrowReference: me.current, strategy: d, middlewares: g }).then((ct) => {
      Object.keys(ct.tooltipStyles).length && fe(ct.tooltipStyles), Object.keys(ct.tooltipArrowStyles).length && W(ct.tooltipArrowStyles);
    });
  }, lt = (Ke) => {
    if (!Ke)
      return;
    const Qe = Ke, ct = { x: Qe.clientX, y: Qe.clientY };
    qe(ct), oe.current = ct;
  }, st = (Ke) => {
    We(Ke), E && Pe();
  }, it = (Ke) => {
    const Qe = document.querySelector(`[id='${a}']`);
    Qe != null && Qe.contains(Ke.target) || ge.some((ct) => ct.contains(Ke.target)) || ke(!1);
  }, Je = (Ke) => {
    Ke.key === "Escape" && ke(!1);
  }, Ie = Yp(We, 50), $e = Yp(Ye, 50);
  se.useEffect(() => {
    var Ke, Qe;
    const ct = new Set(ze);
    ge.forEach((Ot) => {
      ct.add({ current: Ot });
    });
    const ht = document.querySelector(`[id='${a}']`);
    ht && ct.add({ current: ht }), L && window.addEventListener("keydown", Je);
    const At = [];
    c.find((Ot) => Ot === "click") && (window.addEventListener("click", it), At.push({ event: "click", listener: st })), c.find((Ot) => Ot === "hover") && (At.push({ event: "mouseenter", listener: Ie }, { event: "mouseleave", listener: $e }, { event: "focus", listener: Ie }, { event: "blur", listener: $e }), M && At.push({ event: "mousemove", listener: lt }));
    const an = () => {
      Ce.current = !0;
    }, Zt = () => {
      Ce.current = !1, Ye();
    };
    return m && ((Ke = te.current) === null || Ke === void 0 || Ke.addEventListener("mouseenter", an), (Qe = te.current) === null || Qe === void 0 || Qe.addEventListener("mouseleave", Zt)), At.forEach(({ event: Ot, listener: zt }) => {
      ct.forEach((tn) => {
        var hn;
        (hn = tn.current) === null || hn === void 0 || hn.addEventListener(Ot, zt);
      });
    }), () => {
      var Ot, zt;
      c.find((tn) => tn === "click") && window.removeEventListener("click", it), L && window.removeEventListener("keydown", Je), m && ((Ot = te.current) === null || Ot === void 0 || Ot.removeEventListener("mouseenter", an), (zt = te.current) === null || zt === void 0 || zt.removeEventListener("mouseleave", Zt)), At.forEach(({ event: tn, listener: hn }) => {
        ct.forEach((un) => {
          var Sn;
          (Sn = un.current) === null || Sn === void 0 || Sn.removeEventListener(tn, hn);
        });
      });
    };
  }, [Ae, ze, ge, L, c]), se.useEffect(() => {
    let Ke = o ?? "";
    !Ke && e && (Ke = `[data-tooltip-id='${e}']`);
    const Qe = new MutationObserver((ct) => {
      const ht = [];
      ct.forEach((At) => {
        if (At.type === "attributes" && At.attributeName === "data-tooltip-id" && At.target.getAttribute("data-tooltip-id") === e && ht.push(At.target), At.type === "childList" && (Y && [...At.removedNodes].some((an) => !!an.contains(Y) && (xe(!1), ke(!1), U(null), !0)), Ke))
          try {
            const an = [...At.addedNodes].filter((Zt) => Zt.nodeType === 1);
            ht.push(...an.filter((Zt) => Zt.matches(Ke))), ht.push(...an.flatMap((Zt) => [...Zt.querySelectorAll(Ke)]));
          } catch {
          }
      }), ht.length && Oe((At) => [...At, ...ht]);
    });
    return Qe.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"] }), () => {
      Qe.disconnect();
    };
  }, [e, o, Y]), se.useEffect(() => {
    _ ? qe(_) : M ? oe.current && qe(oe.current) : Xp({ place: f, offset: s, elementReference: Y, tooltipReference: te.current, tooltipArrowReference: me.current, strategy: d, middlewares: g }).then((Ke) => {
      ie.current && (Object.keys(Ke.tooltipStyles).length && fe(Ke.tooltipStyles), Object.keys(Ke.tooltipArrowStyles).length && W(Ke.tooltipArrowStyles));
    });
  }, [Z, Y, j, B, f, s, d, _]), se.useEffect(() => {
    var Ke;
    const Qe = document.querySelector(`[id='${a}']`), ct = [...ge, Qe];
    Y && ct.includes(Y) || U((Ke = ge[0]) !== null && Ke !== void 0 ? Ke : Qe);
  }, [a, ge, Y]), se.useEffect(() => () => {
    I.current && clearTimeout(I.current), le.current && clearTimeout(le.current);
  }, []), se.useEffect(() => {
    let Ke = o;
    if (!Ke && e && (Ke = `[data-tooltip-id='${e}']`), Ke)
      try {
        const Qe = Array.from(document.querySelectorAll(Ke));
        Oe(Qe);
      } catch {
        Oe([]);
      }
  }, [e, o]);
  const ft = !!(B || j || y) && Z && Object.keys(ue).length > 0;
  return Ae ? Wi.exports.jsxs(v, { id: e, role: "tooltip", className: Kp("react-tooltip", Di.tooltip, Di[n], t, { [Di.show]: ft, [Di.fixed]: d === "fixed", [Di.clickable]: m }), style: { ...O, ...ue }, ref: te, children: [B && Wi.exports.jsx(dE, { content: B }) || j || y, Wi.exports.jsx(v, { className: Kp("react-tooltip-arrow", Di.arrow, r, { [Di["no-arrow"]]: T }), style: ae, ref: me })] }) : null;
}, ly = ({ id: e, anchorId: t, anchorSelect: r, content: n, html: a, className: o, classNameArrow: f, variant: s = "dark", place: c = "top", offset: d = 10, wrapper: g = "div", children: v = null, events: y = ["hover"], positionStrategy: k = "absolute", middlewares: E, delayShow: M = 0, delayHide: T = 0, float: m = !1, noArrow: L = !1, clickable: O = !1, closeOnEsc: _ = !1, style: N, position: R, isOpen: j, setIsOpen: B, afterShow: V, afterHide: q }) => {
  const [Y, U] = se.useState(n), [te, me] = se.useState(a), [I, le] = se.useState(c), [ue, fe] = se.useState(s), [ae, W] = se.useState(d), [Z, ee] = se.useState(M), [Ae, xe] = se.useState(T), [De, oe] = se.useState(m), [ze, He] = se.useState(g), [Ce, ge] = se.useState(y), [Oe, ie] = se.useState(k), [ke, Pe] = se.useState(null), { anchorRefs: We, activeAnchor: Ye } = oy(e), qe = (it) => it == null ? void 0 : it.getAttributeNames().reduce((Je, Ie) => {
    var $e;
    return Ie.startsWith("data-tooltip-") && (Je[Ie.replace(/^data-tooltip-/, "")] = ($e = it == null ? void 0 : it.getAttribute(Ie)) !== null && $e !== void 0 ? $e : null), Je;
  }, {}), lt = (it) => {
    const Je = { place: (Ie) => {
      var $e;
      le(($e = Ie) !== null && $e !== void 0 ? $e : c);
    }, content: (Ie) => {
      U(Ie ?? n);
    }, html: (Ie) => {
      me(Ie ?? a);
    }, variant: (Ie) => {
      var $e;
      fe(($e = Ie) !== null && $e !== void 0 ? $e : s);
    }, offset: (Ie) => {
      W(Ie === null ? d : Number(Ie));
    }, wrapper: (Ie) => {
      var $e;
      He(($e = Ie) !== null && $e !== void 0 ? $e : g);
    }, events: (Ie) => {
      const $e = Ie == null ? void 0 : Ie.split(" ");
      ge($e ?? y);
    }, "position-strategy": (Ie) => {
      var $e;
      ie(($e = Ie) !== null && $e !== void 0 ? $e : k);
    }, "delay-show": (Ie) => {
      ee(Ie === null ? M : Number(Ie));
    }, "delay-hide": (Ie) => {
      xe(Ie === null ? T : Number(Ie));
    }, float: (Ie) => {
      oe(Ie === null ? m : !!Ie);
    } };
    Object.values(Je).forEach((Ie) => Ie(null)), Object.entries(it).forEach(([Ie, $e]) => {
      var ft;
      (ft = Je[Ie]) === null || ft === void 0 || ft.call(Je, $e);
    });
  };
  se.useEffect(() => {
    U(n);
  }, [n]), se.useEffect(() => {
    me(a);
  }, [a]), se.useEffect(() => {
    le(c);
  }, [c]), se.useEffect(() => {
    var it;
    const Je = new Set(We);
    let Ie = r;
    if (!Ie && e && (Ie = `[data-tooltip-id='${e}']`), Ie)
      try {
        document.querySelectorAll(Ie).forEach((ct) => {
          Je.add({ current: ct });
        });
      } catch {
        console.warn(`[react-tooltip] "${r}" is not a valid CSS selector`);
      }
    const $e = document.querySelector(`[id='${t}']`);
    if ($e && Je.add({ current: $e }), !Je.size)
      return () => null;
    const ft = (it = ke ?? $e) !== null && it !== void 0 ? it : Ye.current, Ke = new MutationObserver((ct) => {
      ct.forEach((ht) => {
        var At;
        if (!ft || ht.type !== "attributes" || !(!((At = ht.attributeName) === null || At === void 0) && At.startsWith("data-tooltip-")))
          return;
        const an = qe(ft);
        lt(an);
      });
    }), Qe = { attributes: !0, childList: !1, subtree: !1 };
    if (ft) {
      const ct = qe(ft);
      lt(ct), Ke.observe(ft, Qe);
    }
    return () => {
      Ke.disconnect();
    };
  }, [We, Ye, ke, t, r]);
  const st = { id: e, anchorId: t, anchorSelect: r, className: o, classNameArrow: f, content: Y, html: te, place: I, variant: ue, offset: ae, wrapper: ze, events: Ce, positionStrategy: Oe, middlewares: E, delayShow: Z, delayHide: Ae, float: De, noArrow: L, clickable: O, closeOnEsc: _, style: N, position: R, isOpen: j, setIsOpen: B, afterShow: V, afterHide: q, activeAnchor: ke, setActiveAnchor: (it) => Pe(it) };
  return v ? Wi.exports.jsx(qp, { ...st, children: v }) : Wi.exports.jsx(qp, { ...st });
};
function Gp(e, t) {
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
function pE(e, t) {
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
function mE(e) {
  return e.depth;
}
function gE(e, t) {
  return e.sourceLinks.length ? e.depth : t - 1;
}
function Du(e) {
  return function() {
    return e;
  };
}
function Zp(e, t) {
  return hc(e.source, t.source) || e.index - t.index;
}
function Qp(e, t) {
  return hc(e.target, t.target) || e.index - t.index;
}
function hc(e, t) {
  return e.y0 - t.y0;
}
function Kd(e) {
  return e.value;
}
function yE(e) {
  return e.index;
}
function vE(e) {
  return e.nodes;
}
function xE(e) {
  return e.links;
}
function Jp(e, t) {
  const r = e.get(t);
  if (!r)
    throw new Error("missing: " + t);
  return r;
}
function em({ nodes: e }) {
  for (const t of e) {
    let r = t.y0, n = r;
    for (const a of t.sourceLinks)
      a.y0 = r + a.width / 2, r += a.width;
    for (const a of t.targetLinks)
      a.y1 = n + a.width / 2, n += a.width;
  }
}
function bE() {
  let e = 0, t = 0, r = 1, n = 1, a = 24, o = 8, f, s = yE, c = gE, d, g, v = vE, y = xE, k = 6;
  function E() {
    const I = { nodes: v.apply(null, arguments), links: y.apply(null, arguments) };
    return M(I), T(I), m(I), L(I), N(I), em(I), I;
  }
  E.update = function(I) {
    return em(I), I;
  }, E.nodeId = function(I) {
    return arguments.length ? (s = typeof I == "function" ? I : Du(I), E) : s;
  }, E.nodeAlign = function(I) {
    return arguments.length ? (c = typeof I == "function" ? I : Du(I), E) : c;
  }, E.nodeSort = function(I) {
    return arguments.length ? (d = I, E) : d;
  }, E.nodeWidth = function(I) {
    return arguments.length ? (a = +I, E) : a;
  }, E.nodePadding = function(I) {
    return arguments.length ? (o = f = +I, E) : o;
  }, E.nodes = function(I) {
    return arguments.length ? (v = typeof I == "function" ? I : Du(I), E) : v;
  }, E.links = function(I) {
    return arguments.length ? (y = typeof I == "function" ? I : Du(I), E) : y;
  }, E.linkSort = function(I) {
    return arguments.length ? (g = I, E) : g;
  }, E.size = function(I) {
    return arguments.length ? (e = t = 0, r = +I[0], n = +I[1], E) : [r - e, n - t];
  }, E.extent = function(I) {
    return arguments.length ? (e = +I[0][0], r = +I[1][0], t = +I[0][1], n = +I[1][1], E) : [[e, t], [r, n]];
  }, E.iterations = function(I) {
    return arguments.length ? (k = +I, E) : k;
  };
  function M({ nodes: I, links: le }) {
    for (const [fe, ae] of I.entries())
      ae.index = fe, ae.sourceLinks = [], ae.targetLinks = [];
    const ue = new Map(I.map((fe, ae) => [s(fe, ae, I), fe]));
    for (const [fe, ae] of le.entries()) {
      ae.index = fe;
      let { source: W, target: Z } = ae;
      typeof W != "object" && (W = ae.source = Jp(ue, W)), typeof Z != "object" && (Z = ae.target = Jp(ue, Z)), W.sourceLinks.push(ae), Z.targetLinks.push(ae);
    }
    if (g != null)
      for (const { sourceLinks: fe, targetLinks: ae } of I)
        fe.sort(g), ae.sort(g);
  }
  function T({ nodes: I }) {
    for (const le of I)
      le.value = le.fixedValue === void 0 ? Math.max(Ud(le.sourceLinks, Kd), Ud(le.targetLinks, Kd)) : le.fixedValue;
  }
  function m({ nodes: I }) {
    const le = I.length;
    let ue = new Set(I), fe = /* @__PURE__ */ new Set(), ae = 0;
    for (; ue.size; ) {
      for (const W of ue) {
        W.depth = ae;
        for (const { target: Z } of W.sourceLinks)
          fe.add(Z);
      }
      if (++ae > le)
        throw new Error("circular link");
      ue = fe, fe = /* @__PURE__ */ new Set();
    }
  }
  function L({ nodes: I }) {
    const le = I.length;
    let ue = new Set(I), fe = /* @__PURE__ */ new Set(), ae = 0;
    for (; ue.size; ) {
      for (const W of ue) {
        W.height = ae;
        for (const { source: Z } of W.targetLinks)
          fe.add(Z);
      }
      if (++ae > le)
        throw new Error("circular link");
      ue = fe, fe = /* @__PURE__ */ new Set();
    }
  }
  function O({ nodes: I }) {
    const le = Gp(I, (ae) => ae.depth) + 1, ue = (r - e - a) / (le - 1), fe = new Array(le);
    for (const ae of I) {
      const W = Math.max(0, Math.min(le - 1, Math.floor(c.call(null, ae, le))));
      ae.layer = W, ae.x0 = e + W * ue, ae.x1 = ae.x0 + a, fe[W] ? fe[W].push(ae) : fe[W] = [ae];
    }
    if (d)
      for (const ae of fe)
        ae.sort(d);
    return fe;
  }
  function _(I) {
    const le = pE(I, (ue) => (n - t - (ue.length - 1) * f) / Ud(ue, Kd));
    for (const ue of I) {
      let fe = t;
      for (const ae of ue) {
        ae.y0 = fe, ae.y1 = fe + ae.value * le, fe = ae.y1 + f;
        for (const W of ae.sourceLinks)
          W.width = W.value * le;
      }
      fe = (n - fe + f) / (ue.length + 1);
      for (let ae = 0; ae < ue.length; ++ae) {
        const W = ue[ae];
        W.y0 += fe * (ae + 1), W.y1 += fe * (ae + 1);
      }
      U(ue);
    }
  }
  function N(I) {
    const le = O(I);
    f = Math.min(o, (n - t) / (Gp(le, (ue) => ue.length) - 1)), _(le);
    for (let ue = 0; ue < k; ++ue) {
      const fe = Math.pow(0.99, ue), ae = Math.max(1 - fe, (ue + 1) / k);
      j(le, fe, ae), R(le, fe, ae);
    }
  }
  function R(I, le, ue) {
    for (let fe = 1, ae = I.length; fe < ae; ++fe) {
      const W = I[fe];
      for (const Z of W) {
        let ee = 0, Ae = 0;
        for (const { source: De, value: oe } of Z.targetLinks) {
          let ze = oe * (Z.layer - De.layer);
          ee += te(De, Z) * ze, Ae += ze;
        }
        if (!(Ae > 0))
          continue;
        let xe = (ee / Ae - Z.y0) * le;
        Z.y0 += xe, Z.y1 += xe, Y(Z);
      }
      d === void 0 && W.sort(hc), B(W, ue);
    }
  }
  function j(I, le, ue) {
    for (let fe = I.length, ae = fe - 2; ae >= 0; --ae) {
      const W = I[ae];
      for (const Z of W) {
        let ee = 0, Ae = 0;
        for (const { target: De, value: oe } of Z.sourceLinks) {
          let ze = oe * (De.layer - Z.layer);
          ee += me(Z, De) * ze, Ae += ze;
        }
        if (!(Ae > 0))
          continue;
        let xe = (ee / Ae - Z.y0) * le;
        Z.y0 += xe, Z.y1 += xe, Y(Z);
      }
      d === void 0 && W.sort(hc), B(W, ue);
    }
  }
  function B(I, le) {
    const ue = I.length >> 1, fe = I[ue];
    q(I, fe.y0 - f, ue - 1, le), V(I, fe.y1 + f, ue + 1, le), q(I, n, I.length - 1, le), V(I, t, 0, le);
  }
  function V(I, le, ue, fe) {
    for (; ue < I.length; ++ue) {
      const ae = I[ue], W = (le - ae.y0) * fe;
      W > 1e-6 && (ae.y0 += W, ae.y1 += W), le = ae.y1 + f;
    }
  }
  function q(I, le, ue, fe) {
    for (; ue >= 0; --ue) {
      const ae = I[ue], W = (ae.y1 - le) * fe;
      W > 1e-6 && (ae.y0 -= W, ae.y1 -= W), le = ae.y0 - f;
    }
  }
  function Y({ sourceLinks: I, targetLinks: le }) {
    if (g === void 0) {
      for (const { source: { sourceLinks: ue } } of le)
        ue.sort(Qp);
      for (const { target: { targetLinks: ue } } of I)
        ue.sort(Zp);
    }
  }
  function U(I) {
    if (g === void 0)
      for (const { sourceLinks: le, targetLinks: ue } of I)
        le.sort(Qp), ue.sort(Zp);
  }
  function te(I, le) {
    let ue = I.y0 - (I.sourceLinks.length - 1) * f / 2;
    for (const { target: fe, width: ae } of I.sourceLinks) {
      if (fe === le)
        break;
      ue += ae + f;
    }
    for (const { source: fe, width: ae } of le.targetLinks) {
      if (fe === I)
        break;
      ue -= ae;
    }
    return ue;
  }
  function me(I, le) {
    let ue = le.y0 - (le.targetLinks.length - 1) * f / 2;
    for (const { source: fe, width: ae } of le.targetLinks) {
      if (fe === I)
        break;
      ue += ae + f;
    }
    for (const { target: fe, width: ae } of I.sourceLinks) {
      if (fe === le)
        break;
      ue -= ae;
    }
    return ue;
  }
  return E;
}
function SE(e) {
  return [e.source.x1, e.y0];
}
function EE(e) {
  return [e.target.x0, e.y1];
}
function kE() {
  return d0().source(SE).target(EE);
}
var Xa = {}, Oi = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tm;
function wE() {
  if (tm)
    return Oi;
  tm = 1;
  var e = se;
  function t(x) {
    for (var A = "https://reactjs.org/docs/error-decoder.html?invariant=" + x, $ = 1; $ < arguments.length; $++)
      A += "&args[]=" + encodeURIComponent(arguments[$]);
    return "Minified React error #" + x + "; visit " + A + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, n = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, a = {}, o = {};
  function f(x) {
    return r.call(o, x) ? !0 : r.call(a, x) ? !1 : n.test(x) ? o[x] = !0 : (a[x] = !0, !1);
  }
  function s(x, A, $, X, be, ye, Te) {
    this.acceptsBooleans = A === 2 || A === 3 || A === 4, this.attributeName = X, this.attributeNamespace = be, this.mustUseProperty = $, this.propertyName = x, this.type = A, this.sanitizeURL = ye, this.removeEmptyString = Te;
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
  }, y = ["Webkit", "ms", "Moz", "O"];
  Object.keys(v).forEach(function(x) {
    y.forEach(function(A) {
      A = A + x.charAt(0).toUpperCase() + x.substring(1), v[A] = v[x];
    });
  });
  var k = /["'&<>]/;
  function E(x) {
    if (typeof x == "boolean" || typeof x == "number")
      return "" + x;
    x = "" + x;
    var A = k.exec(x);
    if (A) {
      var $ = "", X, be = 0;
      for (X = A.index; X < x.length; X++) {
        switch (x.charCodeAt(X)) {
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
        be !== X && ($ += x.substring(be, X)), be = X + 1, $ += A;
      }
      x = be !== X ? $ + x.substring(be, X) : $;
    }
    return x;
  }
  var M = /([A-Z])/g, T = /^ms-/, m = Array.isArray;
  function L(x, A) {
    return { insertionMode: x, selectedValue: A };
  }
  function O(x, A, $) {
    switch (A) {
      case "select":
        return L(1, $.value != null ? $.value : $.defaultValue);
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
    return 4 <= x.insertionMode || x.insertionMode === 0 ? L(1, null) : x;
  }
  var _ = /* @__PURE__ */ new Map();
  function N(x, A, $) {
    if (typeof $ != "object")
      throw Error(t(62));
    A = !0;
    for (var X in $)
      if (r.call($, X)) {
        var be = $[X];
        if (be != null && typeof be != "boolean" && be !== "") {
          if (X.indexOf("--") === 0) {
            var ye = E(X);
            be = E(("" + be).trim());
          } else {
            ye = X;
            var Te = _.get(ye);
            Te !== void 0 || (Te = E(ye.replace(M, "-$1").toLowerCase().replace(T, "-ms-")), _.set(ye, Te)), ye = Te, be = typeof be == "number" ? be === 0 || r.call(v, X) ? "" + be : be + "px" : E(("" + be).trim());
          }
          A ? (A = !1, x.push(' style="', ye, ":", be)) : x.push(";", ye, ":", be);
        }
      }
    A || x.push('"');
  }
  function R(x, A, $, X) {
    switch ($) {
      case "style":
        N(x, A, X);
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
        switch (typeof X) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!A.acceptsBooleans)
              return;
        }
        switch ($ = A.attributeName, A.type) {
          case 3:
            X && x.push(" ", $, '=""');
            break;
          case 4:
            X === !0 ? x.push(" ", $, '=""') : X !== !1 && x.push(" ", $, '="', E(X), '"');
            break;
          case 5:
            isNaN(X) || x.push(" ", $, '="', E(X), '"');
            break;
          case 6:
            !isNaN(X) && 1 <= X && x.push(" ", $, '="', E(X), '"');
            break;
          default:
            A.sanitizeURL && (X = "" + X), x.push(" ", $, '="', E(X), '"');
        }
      } else if (f($)) {
        switch (typeof X) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (A = $.toLowerCase().slice(0, 5), A !== "data-" && A !== "aria-")
              return;
        }
        x.push(" ", $, '="', E(X), '"');
      }
    }
  }
  function j(x, A, $) {
    if (A != null) {
      if ($ != null)
        throw Error(t(60));
      if (typeof A != "object" || !("__html" in A))
        throw Error(t(61));
      A = A.__html, A != null && x.push("" + A);
    }
  }
  function B(x) {
    var A = "";
    return e.Children.forEach(x, function($) {
      $ != null && (A += $);
    }), A;
  }
  function V(x, A, $, X) {
    x.push(U($));
    var be = $ = null, ye;
    for (ye in A)
      if (r.call(A, ye)) {
        var Te = A[ye];
        if (Te != null)
          switch (ye) {
            case "children":
              $ = Te;
              break;
            case "dangerouslySetInnerHTML":
              be = Te;
              break;
            default:
              R(x, X, ye, Te);
          }
      }
    return x.push(">"), j(x, be, $), typeof $ == "string" ? (x.push(E($)), null) : $;
  }
  var q = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Y = /* @__PURE__ */ new Map();
  function U(x) {
    var A = Y.get(x);
    if (A === void 0) {
      if (!q.test(x))
        throw Error(t(65, x));
      A = "<" + x, Y.set(x, A);
    }
    return A;
  }
  function te(x, A, $, X, be) {
    switch (A) {
      case "select":
        x.push(U("select"));
        var ye = null, Te = null;
        for (dt in $)
          if (r.call($, dt)) {
            var Ve = $[dt];
            if (Ve != null)
              switch (dt) {
                case "children":
                  ye = Ve;
                  break;
                case "dangerouslySetInnerHTML":
                  Te = Ve;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  R(x, X, dt, Ve);
              }
          }
        return x.push(">"), j(x, Te, ye), ye;
      case "option":
        Te = be.selectedValue, x.push(U("option"));
        var ot = Ve = null, pt = null, dt = null;
        for (ye in $)
          if (r.call($, ye)) {
            var Ft = $[ye];
            if (Ft != null)
              switch (ye) {
                case "children":
                  Ve = Ft;
                  break;
                case "selected":
                  pt = Ft;
                  break;
                case "dangerouslySetInnerHTML":
                  dt = Ft;
                  break;
                case "value":
                  ot = Ft;
                default:
                  R(x, X, ye, Ft);
              }
          }
        if (Te != null)
          if ($ = ot !== null ? "" + ot : B(Ve), m(Te)) {
            for (X = 0; X < Te.length; X++)
              if ("" + Te[X] === $) {
                x.push(' selected=""');
                break;
              }
          } else
            "" + Te === $ && x.push(' selected=""');
        else
          pt && x.push(' selected=""');
        return x.push(">"), j(x, dt, Ve), Ve;
      case "textarea":
        x.push(U("textarea")), dt = Te = ye = null;
        for (Ve in $)
          if (r.call($, Ve) && (ot = $[Ve], ot != null))
            switch (Ve) {
              case "children":
                dt = ot;
                break;
              case "value":
                ye = ot;
                break;
              case "defaultValue":
                Te = ot;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(91));
              default:
                R(
                  x,
                  X,
                  Ve,
                  ot
                );
            }
        if (ye === null && Te !== null && (ye = Te), x.push(">"), dt != null) {
          if (ye != null)
            throw Error(t(92));
          if (m(dt) && 1 < dt.length)
            throw Error(t(93));
          ye = "" + dt;
        }
        return typeof ye == "string" && ye[0] === `
` && x.push(`
`), ye !== null && x.push(E("" + ye)), null;
      case "input":
        x.push(U("input")), ot = dt = Ve = ye = null;
        for (Te in $)
          if (r.call($, Te) && (pt = $[Te], pt != null))
            switch (Te) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, "input"));
              case "defaultChecked":
                ot = pt;
                break;
              case "defaultValue":
                Ve = pt;
                break;
              case "checked":
                dt = pt;
                break;
              case "value":
                ye = pt;
                break;
              default:
                R(x, X, Te, pt);
            }
        return dt !== null ? R(x, X, "checked", dt) : ot !== null && R(x, X, "checked", ot), ye !== null ? R(x, X, "value", ye) : Ve !== null && R(x, X, "value", Ve), x.push("/>"), null;
      case "menuitem":
        x.push(U("menuitem"));
        for (var Dn in $)
          if (r.call($, Dn) && (ye = $[Dn], ye != null))
            switch (Dn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(400));
              default:
                R(x, X, Dn, ye);
            }
        return x.push(">"), null;
      case "title":
        x.push(U("title")), ye = null;
        for (Ft in $)
          if (r.call($, Ft) && (Te = $[Ft], Te != null))
            switch (Ft) {
              case "children":
                ye = Te;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(434));
              default:
                R(x, X, Ft, Te);
            }
        return x.push(">"), ye;
      case "listing":
      case "pre":
        x.push(U(A)), Te = ye = null;
        for (ot in $)
          if (r.call($, ot) && (Ve = $[ot], Ve != null))
            switch (ot) {
              case "children":
                ye = Ve;
                break;
              case "dangerouslySetInnerHTML":
                Te = Ve;
                break;
              default:
                R(x, X, ot, Ve);
            }
        if (x.push(">"), Te != null) {
          if (ye != null)
            throw Error(t(60));
          if (typeof Te != "object" || !("__html" in Te))
            throw Error(t(61));
          $ = Te.__html, $ != null && (typeof $ == "string" && 0 < $.length && $[0] === `
` ? x.push(`
`, $) : x.push("" + $));
        }
        return typeof ye == "string" && ye[0] === `
` && x.push(`
`), ye;
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
        x.push(U(A));
        for (var Tn in $)
          if (r.call($, Tn) && (ye = $[Tn], ye != null))
            switch (Tn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, A));
              default:
                R(x, X, Tn, ye);
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
        return V(
          x,
          $,
          A,
          X
        );
      case "html":
        return be.insertionMode === 0 && x.push("<!DOCTYPE html>"), V(x, $, A, X);
      default:
        if (A.indexOf("-") === -1 && typeof $.is != "string")
          return V(x, $, A, X);
        x.push(U(A)), Te = ye = null;
        for (pt in $)
          if (r.call($, pt) && (Ve = $[pt], Ve != null))
            switch (pt) {
              case "children":
                ye = Ve;
                break;
              case "dangerouslySetInnerHTML":
                Te = Ve;
                break;
              case "style":
                N(x, X, Ve);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                f(pt) && typeof Ve != "function" && typeof Ve != "symbol" && x.push(" ", pt, '="', E(Ve), '"');
            }
        return x.push(">"), j(x, Te, ye), ye;
    }
  }
  function me(x, A, $) {
    if (x.push('<!--$?--><template id="'), $ === null)
      throw Error(t(395));
    return x.push($), x.push('"></template>');
  }
  function I(x, A, $, X) {
    switch ($.insertionMode) {
      case 0:
      case 1:
        return x.push('<div hidden id="'), x.push(A.segmentPrefix), A = X.toString(16), x.push(A), x.push('">');
      case 2:
        return x.push('<svg aria-hidden="true" style="display:none" id="'), x.push(A.segmentPrefix), A = X.toString(16), x.push(A), x.push('">');
      case 3:
        return x.push('<math aria-hidden="true" style="display:none" id="'), x.push(A.segmentPrefix), A = X.toString(16), x.push(A), x.push('">');
      case 4:
        return x.push('<table hidden id="'), x.push(A.segmentPrefix), A = X.toString(16), x.push(A), x.push('">');
      case 5:
        return x.push('<table hidden><tbody id="'), x.push(A.segmentPrefix), A = X.toString(16), x.push(A), x.push('">');
      case 6:
        return x.push('<table hidden><tr id="'), x.push(A.segmentPrefix), A = X.toString(16), x.push(A), x.push('">');
      case 7:
        return x.push('<table hidden><colgroup id="'), x.push(A.segmentPrefix), A = X.toString(16), x.push(A), x.push('">');
      default:
        throw Error(t(397));
    }
  }
  function le(x, A) {
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
  var ue = /[<\u2028\u2029]/g;
  function fe(x) {
    return JSON.stringify(x).replace(ue, function(A) {
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
  function ae(x, A) {
    return A = A === void 0 ? "" : A, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: A + "P:", segmentPrefix: A + "S:", boundaryPrefix: A + "B:", idPrefix: A, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: x };
  }
  function W(x, A, $, X) {
    return $.generateStaticMarkup ? (x.push(E(A)), !1) : (A === "" ? x = X : (X && x.push("<!-- -->"), x.push(E(A)), x = !0), x);
  }
  var Z = Object.assign, ee = Symbol.for("react.element"), Ae = Symbol.for("react.portal"), xe = Symbol.for("react.fragment"), De = Symbol.for("react.strict_mode"), oe = Symbol.for("react.profiler"), ze = Symbol.for("react.provider"), He = Symbol.for("react.context"), Ce = Symbol.for("react.forward_ref"), ge = Symbol.for("react.suspense"), Oe = Symbol.for("react.suspense_list"), ie = Symbol.for("react.memo"), ke = Symbol.for("react.lazy"), Pe = Symbol.for("react.scope"), We = Symbol.for("react.debug_trace_mode"), Ye = Symbol.for("react.legacy_hidden"), qe = Symbol.for("react.default_value"), lt = Symbol.iterator;
  function st(x) {
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
      case oe:
        return "Profiler";
      case De:
        return "StrictMode";
      case ge:
        return "Suspense";
      case Oe:
        return "SuspenseList";
    }
    if (typeof x == "object")
      switch (x.$$typeof) {
        case He:
          return (x.displayName || "Context") + ".Consumer";
        case ze:
          return (x._context.displayName || "Context") + ".Provider";
        case Ce:
          var A = x.render;
          return x = x.displayName, x || (x = A.displayName || A.name || "", x = x !== "" ? "ForwardRef(" + x + ")" : "ForwardRef"), x;
        case ie:
          return A = x.displayName || null, A !== null ? A : st(x.type) || "Memo";
        case ke:
          A = x._payload, x = x._init;
          try {
            return st(x(A));
          } catch {
          }
      }
    return null;
  }
  var it = {};
  function Je(x, A) {
    if (x = x.contextTypes, !x)
      return it;
    var $ = {}, X;
    for (X in x)
      $[X] = A[X];
    return $;
  }
  var Ie = null;
  function $e(x, A) {
    if (x !== A) {
      x.context._currentValue2 = x.parentValue, x = x.parent;
      var $ = A.parent;
      if (x === null) {
        if ($ !== null)
          throw Error(t(401));
      } else {
        if ($ === null)
          throw Error(t(401));
        $e(x, $);
      }
      A.context._currentValue2 = A.value;
    }
  }
  function ft(x) {
    x.context._currentValue2 = x.parentValue, x = x.parent, x !== null && ft(x);
  }
  function Ke(x) {
    var A = x.parent;
    A !== null && Ke(A), x.context._currentValue2 = x.value;
  }
  function Qe(x, A) {
    if (x.context._currentValue2 = x.parentValue, x = x.parent, x === null)
      throw Error(t(402));
    x.depth === A.depth ? $e(x, A) : Qe(x, A);
  }
  function ct(x, A) {
    var $ = A.parent;
    if ($ === null)
      throw Error(t(402));
    x.depth === $.depth ? $e(x, $) : ct(x, $), A.context._currentValue2 = A.value;
  }
  function ht(x) {
    var A = Ie;
    A !== x && (A === null ? Ke(x) : x === null ? ft(A) : A.depth === x.depth ? $e(A, x) : A.depth > x.depth ? Qe(A, x) : ct(A, x), Ie = x);
  }
  var At = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(x, A) {
    x = x._reactInternals, x.queue !== null && x.queue.push(A);
  }, enqueueReplaceState: function(x, A) {
    x = x._reactInternals, x.replace = !0, x.queue = [A];
  }, enqueueForceUpdate: function() {
  } };
  function an(x, A, $, X) {
    var be = x.state !== void 0 ? x.state : null;
    x.updater = At, x.props = $, x.state = be;
    var ye = { queue: [], replace: !1 };
    x._reactInternals = ye;
    var Te = A.contextType;
    if (x.context = typeof Te == "object" && Te !== null ? Te._currentValue2 : X, Te = A.getDerivedStateFromProps, typeof Te == "function" && (Te = Te($, be), be = Te == null ? be : Z({}, be, Te), x.state = be), typeof A.getDerivedStateFromProps != "function" && typeof x.getSnapshotBeforeUpdate != "function" && (typeof x.UNSAFE_componentWillMount == "function" || typeof x.componentWillMount == "function"))
      if (A = x.state, typeof x.componentWillMount == "function" && x.componentWillMount(), typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount(), A !== x.state && At.enqueueReplaceState(x, x.state, null), ye.queue !== null && 0 < ye.queue.length)
        if (A = ye.queue, Te = ye.replace, ye.queue = null, ye.replace = !1, Te && A.length === 1)
          x.state = A[0];
        else {
          for (ye = Te ? A[0] : x.state, be = !0, Te = Te ? 1 : 0; Te < A.length; Te++) {
            var Ve = A[Te];
            Ve = typeof Ve == "function" ? Ve.call(x, ye, $, X) : Ve, Ve != null && (be ? (be = !1, ye = Z({}, ye, Ve)) : Z(ye, Ve));
          }
          x.state = ye;
        }
      else
        ye.queue = null;
  }
  var Zt = { id: 1, overflow: "" };
  function Ot(x, A, $) {
    var X = x.id;
    x = x.overflow;
    var be = 32 - zt(X) - 1;
    X &= ~(1 << be), $ += 1;
    var ye = 32 - zt(A) + be;
    if (30 < ye) {
      var Te = be - be % 5;
      return ye = (X & (1 << Te) - 1).toString(32), X >>= Te, be -= Te, { id: 1 << 32 - zt(A) + be | $ << be | X, overflow: ye + x };
    }
    return { id: 1 << ye | $ << be | X, overflow: x };
  }
  var zt = Math.clz32 ? Math.clz32 : un, tn = Math.log, hn = Math.LN2;
  function un(x) {
    return x >>>= 0, x === 0 ? 32 : 31 - (tn(x) / hn | 0) | 0;
  }
  function Sn(x, A) {
    return x === A && (x !== 0 || 1 / x === 1 / A) || x !== x && A !== A;
  }
  var Lt = typeof Object.is == "function" ? Object.is : Sn, on = null, _e = null, ln = null, Pt = null, Rt = !1, Ln = !1, gn = 0, kn = null, Fn = 0;
  function Me() {
    if (on === null)
      throw Error(t(321));
    return on;
  }
  function Xe() {
    if (0 < Fn)
      throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function kt() {
    return Pt === null ? ln === null ? (Rt = !1, ln = Pt = Xe()) : (Rt = !0, Pt = ln) : Pt.next === null ? (Rt = !1, Pt = Pt.next = Xe()) : (Rt = !0, Pt = Pt.next), Pt;
  }
  function nt() {
    _e = on = null, Ln = !1, ln = null, Fn = 0, Pt = kn = null;
  }
  function K(x, A) {
    return typeof A == "function" ? A(x) : A;
  }
  function Ne(x, A, $) {
    if (on = Me(), Pt = kt(), Rt) {
      var X = Pt.queue;
      if (A = X.dispatch, kn !== null && ($ = kn.get(X), $ !== void 0)) {
        kn.delete(X), X = Pt.memoizedState;
        do
          X = x(X, $.action), $ = $.next;
        while ($ !== null);
        return Pt.memoizedState = X, [X, A];
      }
      return [Pt.memoizedState, A];
    }
    return x = x === K ? typeof A == "function" ? A() : A : $ !== void 0 ? $(A) : A, Pt.memoizedState = x, x = Pt.queue = { last: null, dispatch: null }, x = x.dispatch = Ue.bind(null, on, x), [Pt.memoizedState, x];
  }
  function et(x, A) {
    if (on = Me(), Pt = kt(), A = A === void 0 ? null : A, Pt !== null) {
      var $ = Pt.memoizedState;
      if ($ !== null && A !== null) {
        var X = $[1];
        e:
          if (X === null)
            X = !1;
          else {
            for (var be = 0; be < X.length && be < A.length; be++)
              if (!Lt(A[be], X[be])) {
                X = !1;
                break e;
              }
            X = !0;
          }
        if (X)
          return $[0];
      }
    }
    return x = x(), Pt.memoizedState = [x, A], x;
  }
  function Ue(x, A, $) {
    if (25 <= Fn)
      throw Error(t(301));
    if (x === on)
      if (Ln = !0, x = { action: $, next: null }, kn === null && (kn = /* @__PURE__ */ new Map()), $ = kn.get(A), $ === void 0)
        kn.set(A, x);
      else {
        for (A = $; A.next !== null; )
          A = A.next;
        A.next = x;
      }
  }
  function yt() {
    throw Error(t(394));
  }
  function at() {
  }
  var wt = { readContext: function(x) {
    return x._currentValue2;
  }, useContext: function(x) {
    return Me(), x._currentValue2;
  }, useMemo: et, useReducer: Ne, useRef: function(x) {
    on = Me(), Pt = kt();
    var A = Pt.memoizedState;
    return A === null ? (x = { current: x }, Pt.memoizedState = x) : A;
  }, useState: function(x) {
    return Ne(K, x);
  }, useInsertionEffect: at, useLayoutEffect: function() {
  }, useCallback: function(x, A) {
    return et(function() {
      return x;
    }, A);
  }, useImperativeHandle: at, useEffect: at, useDebugValue: at, useDeferredValue: function(x) {
    return Me(), x;
  }, useTransition: function() {
    return Me(), [
      !1,
      yt
    ];
  }, useId: function() {
    var x = _e.treeContext, A = x.overflow;
    x = x.id, x = (x & ~(1 << 32 - zt(x) - 1)).toString(32) + A;
    var $ = $t;
    if ($ === null)
      throw Error(t(404));
    return A = gn++, x = ":" + $.idPrefix + "R" + x, 0 < A && (x += "H" + A.toString(32)), x + ":";
  }, useMutableSource: function(x, A) {
    return Me(), A(x._source);
  }, useSyncExternalStore: function(x, A, $) {
    if ($ === void 0)
      throw Error(t(407));
    return $();
  } }, $t = null, Ze = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Bt(x) {
    return console.error(x), null;
  }
  function It() {
  }
  function vt(x, A, $, X, be, ye, Te, Ve, ot) {
    var pt = [], dt = /* @__PURE__ */ new Set();
    return A = { destination: null, responseState: A, progressiveChunkSize: X === void 0 ? 12800 : X, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: dt, pingedTasks: pt, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: be === void 0 ? Bt : be, onAllReady: ye === void 0 ? It : ye, onShellReady: Te === void 0 ? It : Te, onShellError: Ve === void 0 ? It : Ve, onFatalError: ot === void 0 ? It : ot }, $ = qt(A, 0, null, $, !1, !1), $.parentFlushed = !0, x = Qt(A, x, null, $, dt, it, null, Zt), pt.push(x), A;
  }
  function Qt(x, A, $, X, be, ye, Te, Ve) {
    x.allPendingTasks++, $ === null ? x.pendingRootTasks++ : $.pendingTasks++;
    var ot = { node: A, ping: function() {
      var pt = x.pingedTasks;
      pt.push(ot), pt.length === 1 && xn(x);
    }, blockedBoundary: $, blockedSegment: X, abortSet: be, legacyContext: ye, context: Te, treeContext: Ve };
    return be.add(ot), ot;
  }
  function qt(x, A, $, X, be, ye) {
    return { status: 0, id: -1, index: A, parentFlushed: !1, chunks: [], children: [], formatContext: X, boundary: $, lastPushedText: be, textEmbedded: ye };
  }
  function Mt(x, A) {
    if (x = x.onError(A), x != null && typeof x != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof x + '" instead');
    return x;
  }
  function Ht(x, A) {
    var $ = x.onShellError;
    $(A), $ = x.onFatalError, $(A), x.destination !== null ? (x.status = 2, x.destination.destroy(A)) : (x.status = 1, x.fatalError = A);
  }
  function Xt(x, A, $, X, be) {
    for (on = {}, _e = A, gn = 0, x = $(X, be); Ln; )
      Ln = !1, gn = 0, Fn += 1, Pt = null, x = $(X, be);
    return nt(), x;
  }
  function yn(x, A, $, X) {
    var be = $.render(), ye = X.childContextTypes;
    if (ye != null) {
      var Te = A.legacyContext;
      if (typeof $.getChildContext != "function")
        X = Te;
      else {
        $ = $.getChildContext();
        for (var Ve in $)
          if (!(Ve in ye))
            throw Error(t(108, st(X) || "Unknown", Ve));
        X = Z({}, Te, $);
      }
      A.legacyContext = X, Nt(x, A, be), A.legacyContext = Te;
    } else
      Nt(x, A, be);
  }
  function An(x, A) {
    if (x && x.defaultProps) {
      A = Z({}, A), x = x.defaultProps;
      for (var $ in x)
        A[$] === void 0 && (A[$] = x[$]);
      return A;
    }
    return A;
  }
  function Ut(x, A, $, X, be) {
    if (typeof $ == "function")
      if ($.prototype && $.prototype.isReactComponent) {
        be = Je($, A.legacyContext);
        var ye = $.contextType;
        ye = new $(X, typeof ye == "object" && ye !== null ? ye._currentValue2 : be), an(ye, $, X, be), yn(x, A, ye, $);
      } else {
        ye = Je($, A.legacyContext), be = Xt(x, A, $, X, ye);
        var Te = gn !== 0;
        if (typeof be == "object" && be !== null && typeof be.render == "function" && be.$$typeof === void 0)
          an(be, $, X, ye), yn(x, A, be, $);
        else if (Te) {
          X = A.treeContext, A.treeContext = Ot(X, 1, 0);
          try {
            Nt(x, A, be);
          } finally {
            A.treeContext = X;
          }
        } else
          Nt(x, A, be);
      }
    else if (typeof $ == "string") {
      switch (be = A.blockedSegment, ye = te(be.chunks, $, X, x.responseState, be.formatContext), be.lastPushedText = !1, Te = be.formatContext, be.formatContext = O(Te, $, X), _t(x, A, ye), be.formatContext = Te, $) {
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
        case Ye:
        case We:
        case De:
        case oe:
        case xe:
          Nt(x, A, X.children);
          return;
        case Oe:
          Nt(x, A, X.children);
          return;
        case Pe:
          throw Error(t(343));
        case ge:
          e: {
            $ = A.blockedBoundary, be = A.blockedSegment, ye = X.fallback, X = X.children, Te = /* @__PURE__ */ new Set();
            var Ve = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: Te, errorDigest: null }, ot = qt(x, be.chunks.length, Ve, be.formatContext, !1, !1);
            be.children.push(ot), be.lastPushedText = !1;
            var pt = qt(x, 0, null, be.formatContext, !1, !1);
            pt.parentFlushed = !0, A.blockedBoundary = Ve, A.blockedSegment = pt;
            try {
              if (_t(
                x,
                A,
                X
              ), x.responseState.generateStaticMarkup || pt.lastPushedText && pt.textEmbedded && pt.chunks.push("<!-- -->"), pt.status = 1, Pn(Ve, pt), Ve.pendingTasks === 0)
                break e;
            } catch (dt) {
              pt.status = 4, Ve.forceClientRender = !0, Ve.errorDigest = Mt(x, dt);
            } finally {
              A.blockedBoundary = $, A.blockedSegment = be;
            }
            A = Qt(x, ye, $, ot, Te, A.legacyContext, A.context, A.treeContext), x.pingedTasks.push(A);
          }
          return;
      }
      if (typeof $ == "object" && $ !== null)
        switch ($.$$typeof) {
          case Ce:
            if (X = Xt(x, A, $.render, X, be), gn !== 0) {
              $ = A.treeContext, A.treeContext = Ot($, 1, 0);
              try {
                Nt(x, A, X);
              } finally {
                A.treeContext = $;
              }
            } else
              Nt(x, A, X);
            return;
          case ie:
            $ = $.type, X = An($, X), Ut(x, A, $, X, be);
            return;
          case ze:
            if (be = X.children, $ = $._context, X = X.value, ye = $._currentValue2, $._currentValue2 = X, Te = Ie, Ie = X = { parent: Te, depth: Te === null ? 0 : Te.depth + 1, context: $, parentValue: ye, value: X }, A.context = X, Nt(x, A, be), x = Ie, x === null)
              throw Error(t(403));
            X = x.parentValue, x.context._currentValue2 = X === qe ? x.context._defaultValue : X, x = Ie = x.parent, A.context = x;
            return;
          case He:
            X = X.children, X = X($._currentValue2), Nt(x, A, X);
            return;
          case ke:
            be = $._init, $ = be($._payload), X = An($, X), Ut(
              x,
              A,
              $,
              X,
              void 0
            );
            return;
        }
      throw Error(t(130, $ == null ? $ : typeof $, ""));
    }
  }
  function Nt(x, A, $) {
    if (A.node = $, typeof $ == "object" && $ !== null) {
      switch ($.$$typeof) {
        case ee:
          Ut(x, A, $.type, $.props, $.ref);
          return;
        case Ae:
          throw Error(t(257));
        case ke:
          var X = $._init;
          $ = X($._payload), Nt(x, A, $);
          return;
      }
      if (m($)) {
        vn(x, A, $);
        return;
      }
      if ($ === null || typeof $ != "object" ? X = null : (X = lt && $[lt] || $["@@iterator"], X = typeof X == "function" ? X : null), X && (X = X.call($))) {
        if ($ = X.next(), !$.done) {
          var be = [];
          do
            be.push($.value), $ = X.next();
          while (!$.done);
          vn(x, A, be);
        }
        return;
      }
      throw x = Object.prototype.toString.call($), Error(t(31, x === "[object Object]" ? "object with keys {" + Object.keys($).join(", ") + "}" : x));
    }
    typeof $ == "string" ? (X = A.blockedSegment, X.lastPushedText = W(A.blockedSegment.chunks, $, x.responseState, X.lastPushedText)) : typeof $ == "number" && (X = A.blockedSegment, X.lastPushedText = W(A.blockedSegment.chunks, "" + $, x.responseState, X.lastPushedText));
  }
  function vn(x, A, $) {
    for (var X = $.length, be = 0; be < X; be++) {
      var ye = A.treeContext;
      A.treeContext = Ot(ye, X, be);
      try {
        _t(x, A, $[be]);
      } finally {
        A.treeContext = ye;
      }
    }
  }
  function _t(x, A, $) {
    var X = A.blockedSegment.formatContext, be = A.legacyContext, ye = A.context;
    try {
      return Nt(x, A, $);
    } catch (ot) {
      if (nt(), typeof ot == "object" && ot !== null && typeof ot.then == "function") {
        $ = ot;
        var Te = A.blockedSegment, Ve = qt(x, Te.chunks.length, null, Te.formatContext, Te.lastPushedText, !0);
        Te.children.push(Ve), Te.lastPushedText = !1, x = Qt(x, A.node, A.blockedBoundary, Ve, A.abortSet, A.legacyContext, A.context, A.treeContext).ping, $.then(x, x), A.blockedSegment.formatContext = X, A.legacyContext = be, A.context = ye, ht(ye);
      } else
        throw A.blockedSegment.formatContext = X, A.legacyContext = be, A.context = ye, ht(ye), ot;
    }
  }
  function Kt(x) {
    var A = x.blockedBoundary;
    x = x.blockedSegment, x.status = 3, zn(this, A, x);
  }
  function Vn(x, A, $) {
    var X = x.blockedBoundary;
    x.blockedSegment.status = 3, X === null ? (A.allPendingTasks--, A.status !== 2 && (A.status = 2, A.destination !== null && A.destination.push(null))) : (X.pendingTasks--, X.forceClientRender || (X.forceClientRender = !0, x = $ === void 0 ? Error(t(432)) : $, X.errorDigest = A.onError(x), X.parentFlushed && A.clientRenderedBoundaries.push(X)), X.fallbackAbortableTasks.forEach(function(be) {
      return Vn(be, A, $);
    }), X.fallbackAbortableTasks.clear(), A.allPendingTasks--, A.allPendingTasks === 0 && (X = A.onAllReady, X()));
  }
  function Pn(x, A) {
    if (A.chunks.length === 0 && A.children.length === 1 && A.children[0].boundary === null) {
      var $ = A.children[0];
      $.id = A.id, $.parentFlushed = !0, $.status === 1 && Pn(x, $);
    } else
      x.completedSegments.push(A);
  }
  function zn(x, A, $) {
    if (A === null) {
      if ($.parentFlushed) {
        if (x.completedRootSegment !== null)
          throw Error(t(389));
        x.completedRootSegment = $;
      }
      x.pendingRootTasks--, x.pendingRootTasks === 0 && (x.onShellError = It, A = x.onShellReady, A());
    } else
      A.pendingTasks--, A.forceClientRender || (A.pendingTasks === 0 ? ($.parentFlushed && $.status === 1 && Pn(A, $), A.parentFlushed && x.completedBoundaries.push(A), A.fallbackAbortableTasks.forEach(Kt, x), A.fallbackAbortableTasks.clear()) : $.parentFlushed && $.status === 1 && (Pn(A, $), A.completedSegments.length === 1 && A.parentFlushed && x.partialBoundaries.push(A)));
    x.allPendingTasks--, x.allPendingTasks === 0 && (x = x.onAllReady, x());
  }
  function xn(x) {
    if (x.status !== 2) {
      var A = Ie, $ = Ze.current;
      Ze.current = wt;
      var X = $t;
      $t = x.responseState;
      try {
        var be = x.pingedTasks, ye;
        for (ye = 0; ye < be.length; ye++) {
          var Te = be[ye], Ve = x, ot = Te.blockedSegment;
          if (ot.status === 0) {
            ht(Te.context);
            try {
              Nt(Ve, Te, Te.node), Ve.responseState.generateStaticMarkup || ot.lastPushedText && ot.textEmbedded && ot.chunks.push("<!-- -->"), Te.abortSet.delete(Te), ot.status = 1, zn(Ve, Te.blockedBoundary, ot);
            } catch (Cn) {
              if (nt(), typeof Cn == "object" && Cn !== null && typeof Cn.then == "function") {
                var pt = Te.ping;
                Cn.then(pt, pt);
              } else {
                Te.abortSet.delete(Te), ot.status = 4;
                var dt = Te.blockedBoundary, Ft = Cn, Dn = Mt(Ve, Ft);
                if (dt === null ? Ht(Ve, Ft) : (dt.pendingTasks--, dt.forceClientRender || (dt.forceClientRender = !0, dt.errorDigest = Dn, dt.parentFlushed && Ve.clientRenderedBoundaries.push(dt))), Ve.allPendingTasks--, Ve.allPendingTasks === 0) {
                  var Tn = Ve.onAllReady;
                  Tn();
                }
              }
            } finally {
            }
          }
        }
        be.splice(0, ye), x.destination !== null && Zn(x, x.destination);
      } catch (Cn) {
        Mt(x, Cn), Ht(x, Cn);
      } finally {
        $t = X, Ze.current = $, $ === wt && ht(A);
      }
    }
  }
  function Jt(x, A, $) {
    switch ($.parentFlushed = !0, $.status) {
      case 0:
        var X = $.id = x.nextSegmentId++;
        return $.lastPushedText = !1, $.textEmbedded = !1, x = x.responseState, A.push('<template id="'), A.push(x.placeholderPrefix), x = X.toString(16), A.push(x), A.push('"></template>');
      case 1:
        $.status = 2;
        var be = !0;
        X = $.chunks;
        var ye = 0;
        $ = $.children;
        for (var Te = 0; Te < $.length; Te++) {
          for (be = $[Te]; ye < be.index; ye++)
            A.push(X[ye]);
          be = wn(x, A, be);
        }
        for (; ye < X.length - 1; ye++)
          A.push(X[ye]);
        return ye < X.length && (be = A.push(X[ye])), be;
      default:
        throw Error(t(390));
    }
  }
  function wn(x, A, $) {
    var X = $.boundary;
    if (X === null)
      return Jt(x, A, $);
    if (X.parentFlushed = !0, X.forceClientRender)
      return x.responseState.generateStaticMarkup || (X = X.errorDigest, A.push("<!--$!-->"), A.push("<template"), X && (A.push(' data-dgst="'), X = E(X), A.push(X), A.push('"')), A.push("></template>")), Jt(x, A, $), x = x.responseState.generateStaticMarkup ? !0 : A.push("<!--/$-->"), x;
    if (0 < X.pendingTasks) {
      X.rootSegmentID = x.nextSegmentId++, 0 < X.completedSegments.length && x.partialBoundaries.push(X);
      var be = x.responseState, ye = be.nextSuspenseID++;
      return be = be.boundaryPrefix + ye.toString(16), X = X.id = be, me(A, x.responseState, X), Jt(x, A, $), A.push("<!--/$-->");
    }
    if (X.byteSize > x.progressiveChunkSize)
      return X.rootSegmentID = x.nextSegmentId++, x.completedBoundaries.push(X), me(A, x.responseState, X.id), Jt(x, A, $), A.push("<!--/$-->");
    if (x.responseState.generateStaticMarkup || A.push("<!--$-->"), $ = X.completedSegments, $.length !== 1)
      throw Error(t(391));
    return wn(x, A, $[0]), x = x.responseState.generateStaticMarkup ? !0 : A.push("<!--/$-->"), x;
  }
  function yr(x, A, $) {
    return I(A, x.responseState, $.formatContext, $.id), wn(x, A, $), le(A, $.formatContext);
  }
  function Lr(x, A, $) {
    for (var X = $.completedSegments, be = 0; be < X.length; be++)
      fr(x, A, $, X[be]);
    if (X.length = 0, x = x.responseState, X = $.id, $ = $.rootSegmentID, A.push(x.startInlineScript), x.sentCompleteBoundaryFunction ? A.push('$RC("') : (x.sentCompleteBoundaryFunction = !0, A.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), X === null)
      throw Error(t(395));
    return $ = $.toString(16), A.push(X), A.push('","'), A.push(x.segmentPrefix), A.push($), A.push('")<\/script>');
  }
  function fr(x, A, $, X) {
    if (X.status === 2)
      return !0;
    var be = X.id;
    if (be === -1) {
      if ((X.id = $.rootSegmentID) === -1)
        throw Error(t(392));
      return yr(x, A, X);
    }
    return yr(x, A, X), x = x.responseState, A.push(x.startInlineScript), x.sentCompleteSegmentFunction ? A.push('$RS("') : (x.sentCompleteSegmentFunction = !0, A.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), A.push(x.segmentPrefix), be = be.toString(16), A.push(be), A.push('","'), A.push(x.placeholderPrefix), A.push(be), A.push('")<\/script>');
  }
  function Zn(x, A) {
    try {
      var $ = x.completedRootSegment;
      if ($ !== null && x.pendingRootTasks === 0) {
        wn(x, A, $), x.completedRootSegment = null;
        var X = x.responseState.bootstrapChunks;
        for ($ = 0; $ < X.length - 1; $++)
          A.push(X[$]);
        $ < X.length && A.push(X[$]);
      }
      var be = x.clientRenderedBoundaries, ye;
      for (ye = 0; ye < be.length; ye++) {
        var Te = be[ye];
        X = A;
        var Ve = x.responseState, ot = Te.id, pt = Te.errorDigest, dt = Te.errorMessage, Ft = Te.errorComponentStack;
        if (X.push(Ve.startInlineScript), Ve.sentClientRenderFunction ? X.push('$RX("') : (Ve.sentClientRenderFunction = !0, X.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), ot === null)
          throw Error(t(395));
        if (X.push(ot), X.push('"'), pt || dt || Ft) {
          X.push(",");
          var Dn = fe(pt || "");
          X.push(Dn);
        }
        if (dt || Ft) {
          X.push(",");
          var Tn = fe(dt || "");
          X.push(Tn);
        }
        if (Ft) {
          X.push(",");
          var Cn = fe(Ft);
          X.push(Cn);
        }
        if (!X.push(")<\/script>")) {
          x.destination = null, ye++, be.splice(0, ye);
          return;
        }
      }
      be.splice(0, ye);
      var Xn = x.completedBoundaries;
      for (ye = 0; ye < Xn.length; ye++)
        if (!Lr(x, A, Xn[ye])) {
          x.destination = null, ye++, Xn.splice(0, ye);
          return;
        }
      Xn.splice(0, ye);
      var In = x.partialBoundaries;
      for (ye = 0; ye < In.length; ye++) {
        var hr = In[ye];
        e: {
          be = x, Te = A;
          var ne = hr.completedSegments;
          for (Ve = 0; Ve < ne.length; Ve++)
            if (!fr(be, Te, hr, ne[Ve])) {
              Ve++, ne.splice(0, Ve);
              var J = !1;
              break e;
            }
          ne.splice(0, Ve), J = !0;
        }
        if (!J) {
          x.destination = null, ye++, In.splice(0, ye);
          return;
        }
      }
      In.splice(0, ye);
      var ce = x.completedBoundaries;
      for (ye = 0; ye < ce.length; ye++)
        if (!Lr(x, A, ce[ye])) {
          x.destination = null, ye++, ce.splice(0, ye);
          return;
        }
      ce.splice(0, ye);
    } finally {
      x.allPendingTasks === 0 && x.pingedTasks.length === 0 && x.clientRenderedBoundaries.length === 0 && x.completedBoundaries.length === 0 && A.push(null);
    }
  }
  function vr(x, A) {
    try {
      var $ = x.abortableTasks;
      $.forEach(function(X) {
        return Vn(X, x, A);
      }), $.clear(), x.destination !== null && Zn(x, x.destination);
    } catch (X) {
      Mt(x, X), Ht(x, X);
    }
  }
  function xr() {
  }
  function br(x, A, $, X) {
    var be = !1, ye = null, Te = "", Ve = { push: function(pt) {
      return pt !== null && (Te += pt), !0;
    }, destroy: function(pt) {
      be = !0, ye = pt;
    } }, ot = !1;
    if (x = vt(x, ae($, A ? A.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, xr, void 0, function() {
      ot = !0;
    }, void 0, void 0), xn(x), vr(x, X), x.status === 1)
      x.status = 2, Ve.destroy(x.fatalError);
    else if (x.status !== 2 && x.destination === null) {
      x.destination = Ve;
      try {
        Zn(x, Ve);
      } catch (pt) {
        Mt(x, pt), Ht(x, pt);
      }
    }
    if (be)
      throw ye;
    if (!ot)
      throw Error(t(426));
    return Te;
  }
  return Oi.renderToNodeStream = function() {
    throw Error(t(207));
  }, Oi.renderToStaticMarkup = function(x, A) {
    return br(x, A, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Oi.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, Oi.renderToString = function(x, A) {
    return br(x, A, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Oi.version = "18.2.0", Oi;
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
var nm;
function TE() {
  if (nm)
    return Ou;
  nm = 1;
  var e = se;
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
  var v = Object.prototype.hasOwnProperty, y = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, k = {}, E = {};
  function M(b) {
    return v.call(E, b) ? !0 : v.call(k, b) ? !1 : y.test(b) ? E[b] = !0 : (k[b] = !0, !1);
  }
  function T(b, P, z, G, Se, ve, Fe) {
    this.acceptsBooleans = P === 2 || P === 3 || P === 4, this.attributeName = G, this.attributeNamespace = Se, this.mustUseProperty = z, this.propertyName = b, this.type = P, this.sanitizeURL = ve, this.removeEmptyString = Fe;
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
  var L = /[\-:]([a-z])/g;
  function O(b) {
    return b[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(b) {
    var P = b.replace(
      L,
      O
    );
    m[P] = new T(P, 1, !1, b, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(b) {
    var P = b.replace(L, O);
    m[P] = new T(P, 1, !1, b, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(b) {
    var P = b.replace(L, O);
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
      var z = "", G, Se = 0;
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
        Se !== G && (z += b.substring(Se, G)), Se = G + 1, z += P;
      }
      b = Se !== G ? z + b.substring(Se, G) : z;
    }
    return b;
  }
  var B = /([A-Z])/g, V = /^ms-/, q = Array.isArray, Y = d("<script>"), U = d("<\/script>"), te = d('<script src="'), me = d('<script type="module" src="'), I = d('" async=""><\/script>'), le = /(<\/|<)(s)(cript)/gi;
  function ue(b, P, z, G) {
    return "" + P + (z === "s" ? "\\u0073" : "\\u0053") + G;
  }
  function fe(b, P, z, G, Se) {
    b = b === void 0 ? "" : b, P = P === void 0 ? Y : d('<script nonce="' + j(P) + '">');
    var ve = [];
    if (z !== void 0 && ve.push(P, c(("" + z).replace(le, ue)), U), G !== void 0)
      for (z = 0; z < G.length; z++)
        ve.push(te, c(j(G[z])), I);
    if (Se !== void 0)
      for (G = 0; G < Se.length; G++)
        ve.push(me, c(j(Se[G])), I);
    return { bootstrapChunks: ve, startInlineScript: P, placeholderPrefix: d(b + "P:"), segmentPrefix: d(b + "S:"), boundaryPrefix: b + "B:", idPrefix: b, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function ae(b, P) {
    return { insertionMode: b, selectedValue: P };
  }
  function W(b) {
    return ae(b === "http://www.w3.org/2000/svg" ? 2 : b === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function Z(b, P, z) {
    switch (P) {
      case "select":
        return ae(1, z.value != null ? z.value : z.defaultValue);
      case "svg":
        return ae(2, null);
      case "math":
        return ae(3, null);
      case "foreignObject":
        return ae(1, null);
      case "table":
        return ae(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return ae(5, null);
      case "colgroup":
        return ae(7, null);
      case "tr":
        return ae(6, null);
    }
    return 4 <= b.insertionMode || b.insertionMode === 0 ? ae(1, null) : b;
  }
  var ee = d("<!-- -->");
  function Ae(b, P, z, G) {
    return P === "" ? G : (G && b.push(ee), b.push(c(j(P))), !0);
  }
  var xe = /* @__PURE__ */ new Map(), De = d(' style="'), oe = d(":"), ze = d(";");
  function He(b, P, z) {
    if (typeof z != "object")
      throw Error(t(62));
    P = !0;
    for (var G in z)
      if (v.call(z, G)) {
        var Se = z[G];
        if (Se != null && typeof Se != "boolean" && Se !== "") {
          if (G.indexOf("--") === 0) {
            var ve = c(j(G));
            Se = c(j(("" + Se).trim()));
          } else {
            ve = G;
            var Fe = xe.get(ve);
            Fe !== void 0 || (Fe = d(j(ve.replace(B, "-$1").toLowerCase().replace(V, "-ms-"))), xe.set(ve, Fe)), ve = Fe, Se = typeof Se == "number" ? Se === 0 || v.call(_, G) ? c("" + Se) : c(Se + "px") : c(j(("" + Se).trim()));
          }
          P ? (P = !1, b.push(De, ve, oe, Se)) : b.push(ze, ve, oe, Se);
        }
      }
    P || b.push(Oe);
  }
  var Ce = d(" "), ge = d('="'), Oe = d('"'), ie = d('=""');
  function ke(b, P, z, G) {
    switch (z) {
      case "style":
        He(b, P, G);
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
        switch (typeof G) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!P.acceptsBooleans)
              return;
        }
        switch (z = c(P.attributeName), P.type) {
          case 3:
            G && b.push(Ce, z, ie);
            break;
          case 4:
            G === !0 ? b.push(Ce, z, ie) : G !== !1 && b.push(Ce, z, ge, c(j(G)), Oe);
            break;
          case 5:
            isNaN(G) || b.push(Ce, z, ge, c(j(G)), Oe);
            break;
          case 6:
            !isNaN(G) && 1 <= G && b.push(Ce, z, ge, c(j(G)), Oe);
            break;
          default:
            P.sanitizeURL && (G = "" + G), b.push(Ce, z, ge, c(j(G)), Oe);
        }
      } else if (M(z)) {
        switch (typeof G) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (P = z.toLowerCase().slice(0, 5), P !== "data-" && P !== "aria-")
              return;
        }
        b.push(Ce, c(z), ge, c(j(G)), Oe);
      }
    }
  }
  var Pe = d(">"), We = d("/>");
  function Ye(b, P, z) {
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
  var lt = d(' selected=""');
  function st(b, P, z, G) {
    b.push($e(z));
    var Se = z = null, ve;
    for (ve in P)
      if (v.call(P, ve)) {
        var Fe = P[ve];
        if (Fe != null)
          switch (ve) {
            case "children":
              z = Fe;
              break;
            case "dangerouslySetInnerHTML":
              Se = Fe;
              break;
            default:
              ke(b, G, ve, Fe);
          }
      }
    return b.push(Pe), Ye(b, Se, z), typeof z == "string" ? (b.push(c(j(z))), null) : z;
  }
  var it = d(`
`), Je = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ie = /* @__PURE__ */ new Map();
  function $e(b) {
    var P = Ie.get(b);
    if (P === void 0) {
      if (!Je.test(b))
        throw Error(t(65, b));
      P = d("<" + b), Ie.set(b, P);
    }
    return P;
  }
  var ft = d("<!DOCTYPE html>");
  function Ke(b, P, z, G, Se) {
    switch (P) {
      case "select":
        b.push($e("select"));
        var ve = null, Fe = null;
        for (Ct in z)
          if (v.call(z, Ct)) {
            var je = z[Ct];
            if (je != null)
              switch (Ct) {
                case "children":
                  ve = je;
                  break;
                case "dangerouslySetInnerHTML":
                  Fe = je;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  ke(b, G, Ct, je);
              }
          }
        return b.push(Pe), Ye(b, Fe, ve), ve;
      case "option":
        Fe = Se.selectedValue, b.push($e("option"));
        var gt = je = null, Dt = null, Ct = null;
        for (ve in z)
          if (v.call(z, ve)) {
            var sn = z[ve];
            if (sn != null)
              switch (ve) {
                case "children":
                  je = sn;
                  break;
                case "selected":
                  Dt = sn;
                  break;
                case "dangerouslySetInnerHTML":
                  Ct = sn;
                  break;
                case "value":
                  gt = sn;
                default:
                  ke(b, G, ve, sn);
              }
          }
        if (Fe != null)
          if (z = gt !== null ? "" + gt : qe(je), q(Fe)) {
            for (G = 0; G < Fe.length; G++)
              if ("" + Fe[G] === z) {
                b.push(lt);
                break;
              }
          } else
            "" + Fe === z && b.push(lt);
        else
          Dt && b.push(lt);
        return b.push(Pe), Ye(b, Ct, je), je;
      case "textarea":
        b.push($e("textarea")), Ct = Fe = ve = null;
        for (je in z)
          if (v.call(z, je) && (gt = z[je], gt != null))
            switch (je) {
              case "children":
                Ct = gt;
                break;
              case "value":
                ve = gt;
                break;
              case "defaultValue":
                Fe = gt;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(91));
              default:
                ke(b, G, je, gt);
            }
        if (ve === null && Fe !== null && (ve = Fe), b.push(Pe), Ct != null) {
          if (ve != null)
            throw Error(t(92));
          if (q(Ct) && 1 < Ct.length)
            throw Error(t(93));
          ve = "" + Ct;
        }
        return typeof ve == "string" && ve[0] === `
` && b.push(it), ve !== null && b.push(c(j("" + ve))), null;
      case "input":
        b.push($e("input")), gt = Ct = je = ve = null;
        for (Fe in z)
          if (v.call(z, Fe) && (Dt = z[Fe], Dt != null))
            switch (Fe) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, "input"));
              case "defaultChecked":
                gt = Dt;
                break;
              case "defaultValue":
                je = Dt;
                break;
              case "checked":
                Ct = Dt;
                break;
              case "value":
                ve = Dt;
                break;
              default:
                ke(b, G, Fe, Dt);
            }
        return Ct !== null ? ke(
          b,
          G,
          "checked",
          Ct
        ) : gt !== null && ke(b, G, "checked", gt), ve !== null ? ke(b, G, "value", ve) : je !== null && ke(b, G, "value", je), b.push(We), null;
      case "menuitem":
        b.push($e("menuitem"));
        for (var Kn in z)
          if (v.call(z, Kn) && (ve = z[Kn], ve != null))
            switch (Kn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(400));
              default:
                ke(b, G, Kn, ve);
            }
        return b.push(Pe), null;
      case "title":
        b.push($e("title")), ve = null;
        for (sn in z)
          if (v.call(z, sn) && (Fe = z[sn], Fe != null))
            switch (sn) {
              case "children":
                ve = Fe;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(434));
              default:
                ke(b, G, sn, Fe);
            }
        return b.push(Pe), ve;
      case "listing":
      case "pre":
        b.push($e(P)), Fe = ve = null;
        for (gt in z)
          if (v.call(z, gt) && (je = z[gt], je != null))
            switch (gt) {
              case "children":
                ve = je;
                break;
              case "dangerouslySetInnerHTML":
                Fe = je;
                break;
              default:
                ke(b, G, gt, je);
            }
        if (b.push(Pe), Fe != null) {
          if (ve != null)
            throw Error(t(60));
          if (typeof Fe != "object" || !("__html" in Fe))
            throw Error(t(61));
          z = Fe.__html, z != null && (typeof z == "string" && 0 < z.length && z[0] === `
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
        b.push($e(P));
        for (var Jn in z)
          if (v.call(z, Jn) && (ve = z[Jn], ve != null))
            switch (Jn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, P));
              default:
                ke(b, G, Jn, ve);
            }
        return b.push(We), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return st(b, z, P, G);
      case "html":
        return Se.insertionMode === 0 && b.push(ft), st(b, z, P, G);
      default:
        if (P.indexOf("-") === -1 && typeof z.is != "string")
          return st(b, z, P, G);
        b.push($e(P)), Fe = ve = null;
        for (Dt in z)
          if (v.call(z, Dt) && (je = z[Dt], je != null))
            switch (Dt) {
              case "children":
                ve = je;
                break;
              case "dangerouslySetInnerHTML":
                Fe = je;
                break;
              case "style":
                He(b, G, je);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                M(Dt) && typeof je != "function" && typeof je != "symbol" && b.push(Ce, c(Dt), ge, c(j(je)), Oe);
            }
        return b.push(Pe), Ye(b, Fe, ve), ve;
    }
  }
  var Qe = d("</"), ct = d(">"), ht = d('<template id="'), At = d('"></template>'), an = d("<!--$-->"), Zt = d('<!--$?--><template id="'), Ot = d('"></template>'), zt = d("<!--$!-->"), tn = d("<!--/$-->"), hn = d("<template"), un = d('"'), Sn = d(' data-dgst="');
  d(' data-msg="'), d(' data-stck="');
  var Lt = d("></template>");
  function on(b, P, z) {
    if (a(b, Zt), z === null)
      throw Error(t(395));
    return a(b, z), o(b, Ot);
  }
  var _e = d('<div hidden id="'), ln = d('">'), Pt = d("</div>"), Rt = d('<svg aria-hidden="true" style="display:none" id="'), Ln = d('">'), gn = d("</svg>"), kn = d('<math aria-hidden="true" style="display:none" id="'), Fn = d('">'), Me = d("</math>"), Xe = d('<table hidden id="'), kt = d('">'), nt = d("</table>"), K = d('<table hidden><tbody id="'), Ne = d('">'), et = d("</tbody></table>"), Ue = d('<table hidden><tr id="'), yt = d('">'), at = d("</tr></table>"), wt = d('<table hidden><colgroup id="'), $t = d('">'), Ze = d("</colgroup></table>");
  function Bt(b, P, z, G) {
    switch (z.insertionMode) {
      case 0:
      case 1:
        return a(b, _e), a(b, P.segmentPrefix), a(b, c(G.toString(16))), o(b, ln);
      case 2:
        return a(b, Rt), a(b, P.segmentPrefix), a(b, c(G.toString(16))), o(b, Ln);
      case 3:
        return a(b, kn), a(b, P.segmentPrefix), a(b, c(G.toString(16))), o(b, Fn);
      case 4:
        return a(b, Xe), a(b, P.segmentPrefix), a(b, c(G.toString(16))), o(b, kt);
      case 5:
        return a(b, K), a(b, P.segmentPrefix), a(b, c(G.toString(16))), o(b, Ne);
      case 6:
        return a(b, Ue), a(b, P.segmentPrefix), a(b, c(G.toString(16))), o(b, yt);
      case 7:
        return a(
          b,
          wt
        ), a(b, P.segmentPrefix), a(b, c(G.toString(16))), o(b, $t);
      default:
        throw Error(t(397));
    }
  }
  function It(b, P) {
    switch (P.insertionMode) {
      case 0:
      case 1:
        return o(b, Pt);
      case 2:
        return o(b, gn);
      case 3:
        return o(b, Me);
      case 4:
        return o(b, nt);
      case 5:
        return o(b, et);
      case 6:
        return o(b, at);
      case 7:
        return o(b, Ze);
      default:
        throw Error(t(397));
    }
  }
  var vt = d('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Qt = d('$RS("'), qt = d('","'), Mt = d('")<\/script>'), Ht = d('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), Xt = d('$RC("'), yn = d('","'), An = d('")<\/script>'), Ut = d('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Nt = d('$RX("'), vn = d('"'), _t = d(")<\/script>"), Kt = d(","), Vn = /[<\u2028\u2029]/g;
  function Pn(b) {
    return JSON.stringify(b).replace(Vn, function(P) {
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
  var zn = Object.assign, xn = Symbol.for("react.element"), Jt = Symbol.for("react.portal"), wn = Symbol.for("react.fragment"), yr = Symbol.for("react.strict_mode"), Lr = Symbol.for("react.profiler"), fr = Symbol.for("react.provider"), Zn = Symbol.for("react.context"), vr = Symbol.for("react.forward_ref"), xr = Symbol.for("react.suspense"), br = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), $ = Symbol.for("react.scope"), X = Symbol.for("react.debug_trace_mode"), be = Symbol.for("react.legacy_hidden"), ye = Symbol.for("react.default_value"), Te = Symbol.iterator;
  function Ve(b) {
    if (b == null)
      return null;
    if (typeof b == "function")
      return b.displayName || b.name || null;
    if (typeof b == "string")
      return b;
    switch (b) {
      case wn:
        return "Fragment";
      case Jt:
        return "Portal";
      case Lr:
        return "Profiler";
      case yr:
        return "StrictMode";
      case xr:
        return "Suspense";
      case br:
        return "SuspenseList";
    }
    if (typeof b == "object")
      switch (b.$$typeof) {
        case Zn:
          return (b.displayName || "Context") + ".Consumer";
        case fr:
          return (b._context.displayName || "Context") + ".Provider";
        case vr:
          var P = b.render;
          return b = b.displayName, b || (b = P.displayName || P.name || "", b = b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef"), b;
        case x:
          return P = b.displayName || null, P !== null ? P : Ve(b.type) || "Memo";
        case A:
          P = b._payload, b = b._init;
          try {
            return Ve(b(P));
          } catch {
          }
      }
    return null;
  }
  var ot = {};
  function pt(b, P) {
    if (b = b.contextTypes, !b)
      return ot;
    var z = {}, G;
    for (G in b)
      z[G] = P[G];
    return z;
  }
  var dt = null;
  function Ft(b, P) {
    if (b !== P) {
      b.context._currentValue = b.parentValue, b = b.parent;
      var z = P.parent;
      if (b === null) {
        if (z !== null)
          throw Error(t(401));
      } else {
        if (z === null)
          throw Error(t(401));
        Ft(b, z);
      }
      P.context._currentValue = P.value;
    }
  }
  function Dn(b) {
    b.context._currentValue = b.parentValue, b = b.parent, b !== null && Dn(b);
  }
  function Tn(b) {
    var P = b.parent;
    P !== null && Tn(P), b.context._currentValue = b.value;
  }
  function Cn(b, P) {
    if (b.context._currentValue = b.parentValue, b = b.parent, b === null)
      throw Error(t(402));
    b.depth === P.depth ? Ft(b, P) : Cn(b, P);
  }
  function Xn(b, P) {
    var z = P.parent;
    if (z === null)
      throw Error(t(402));
    b.depth === z.depth ? Ft(b, z) : Xn(b, z), P.context._currentValue = P.value;
  }
  function In(b) {
    var P = dt;
    P !== b && (P === null ? Tn(b) : b === null ? Dn(P) : P.depth === b.depth ? Ft(P, b) : P.depth > b.depth ? Cn(P, b) : Xn(P, b), dt = b);
  }
  var hr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(b, P) {
    b = b._reactInternals, b.queue !== null && b.queue.push(P);
  }, enqueueReplaceState: function(b, P) {
    b = b._reactInternals, b.replace = !0, b.queue = [P];
  }, enqueueForceUpdate: function() {
  } };
  function ne(b, P, z, G) {
    var Se = b.state !== void 0 ? b.state : null;
    b.updater = hr, b.props = z, b.state = Se;
    var ve = { queue: [], replace: !1 };
    b._reactInternals = ve;
    var Fe = P.contextType;
    if (b.context = typeof Fe == "object" && Fe !== null ? Fe._currentValue : G, Fe = P.getDerivedStateFromProps, typeof Fe == "function" && (Fe = Fe(z, Se), Se = Fe == null ? Se : zn({}, Se, Fe), b.state = Se), typeof P.getDerivedStateFromProps != "function" && typeof b.getSnapshotBeforeUpdate != "function" && (typeof b.UNSAFE_componentWillMount == "function" || typeof b.componentWillMount == "function"))
      if (P = b.state, typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount(), P !== b.state && hr.enqueueReplaceState(b, b.state, null), ve.queue !== null && 0 < ve.queue.length)
        if (P = ve.queue, Fe = ve.replace, ve.queue = null, ve.replace = !1, Fe && P.length === 1)
          b.state = P[0];
        else {
          for (ve = Fe ? P[0] : b.state, Se = !0, Fe = Fe ? 1 : 0; Fe < P.length; Fe++) {
            var je = P[Fe];
            je = typeof je == "function" ? je.call(b, ve, z, G) : je, je != null && (Se ? (Se = !1, ve = zn({}, ve, je)) : zn(ve, je));
          }
          b.state = ve;
        }
      else
        ve.queue = null;
  }
  var J = { id: 1, overflow: "" };
  function ce(b, P, z) {
    var G = b.id;
    b = b.overflow;
    var Se = 32 - Re(G) - 1;
    G &= ~(1 << Se), z += 1;
    var ve = 32 - Re(P) + Se;
    if (30 < ve) {
      var Fe = Se - Se % 5;
      return ve = (G & (1 << Fe) - 1).toString(32), G >>= Fe, Se -= Fe, { id: 1 << 32 - Re(P) + Se | z << Se | G, overflow: ve + b };
    }
    return { id: 1 << ve | z << Se | G, overflow: b };
  }
  var Re = Math.clz32 ? Math.clz32 : Hn, Wt = Math.log, pn = Math.LN2;
  function Hn(b) {
    return b >>>= 0, b === 0 ? 32 : 31 - (Wt(b) / pn | 0) | 0;
  }
  function Dr(b, P) {
    return b === P && (b !== 0 || 1 / b === 1 / P) || b !== b && P !== P;
  }
  var qa = typeof Object.is == "function" ? Object.is : Dr, pr = null, na = null, ya = null, nn = null, Sr = !1, jn = !1, Or = 0, Er = null, va = 0;
  function kr() {
    if (pr === null)
      throw Error(t(321));
    return pr;
  }
  function Qn() {
    if (0 < va)
      throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Ga() {
    return nn === null ? ya === null ? (Sr = !1, ya = nn = Qn()) : (Sr = !0, nn = ya) : nn.next === null ? (Sr = !1, nn = nn.next = Qn()) : (Sr = !0, nn = nn.next), nn;
  }
  function Za() {
    na = pr = null, jn = !1, ya = null, va = 0, nn = Er = null;
  }
  function Ki(b, P) {
    return typeof P == "function" ? P(b) : P;
  }
  function Yi(b, P, z) {
    if (pr = kr(), nn = Ga(), Sr) {
      var G = nn.queue;
      if (P = G.dispatch, Er !== null && (z = Er.get(G), z !== void 0)) {
        Er.delete(G), G = nn.memoizedState;
        do
          G = b(G, z.action), z = z.next;
        while (z !== null);
        return nn.memoizedState = G, [G, P];
      }
      return [nn.memoizedState, P];
    }
    return b = b === Ki ? typeof P == "function" ? P() : P : z !== void 0 ? z(P) : P, nn.memoizedState = b, b = nn.queue = { last: null, dispatch: null }, b = b.dispatch = ll.bind(null, pr, b), [nn.memoizedState, b];
  }
  function Xi(b, P) {
    if (pr = kr(), nn = Ga(), P = P === void 0 ? null : P, nn !== null) {
      var z = nn.memoizedState;
      if (z !== null && P !== null) {
        var G = z[1];
        e:
          if (G === null)
            G = !1;
          else {
            for (var Se = 0; Se < G.length && Se < P.length; Se++)
              if (!qa(P[Se], G[Se])) {
                G = !1;
                break e;
              }
            G = !0;
          }
        if (G)
          return z[0];
      }
    }
    return b = b(), nn.memoizedState = [b, P], b;
  }
  function ll(b, P, z) {
    if (25 <= va)
      throw Error(t(301));
    if (b === pr)
      if (jn = !0, b = { action: z, next: null }, Er === null && (Er = /* @__PURE__ */ new Map()), z = Er.get(P), z === void 0)
        Er.set(P, b);
      else {
        for (P = z; P.next !== null; )
          P = P.next;
        P.next = b;
      }
  }
  function sl() {
    throw Error(t(394));
  }
  function xa() {
  }
  var ba = { readContext: function(b) {
    return b._currentValue;
  }, useContext: function(b) {
    return kr(), b._currentValue;
  }, useMemo: Xi, useReducer: Yi, useRef: function(b) {
    pr = kr(), nn = Ga();
    var P = nn.memoizedState;
    return P === null ? (b = { current: b }, nn.memoizedState = b) : P;
  }, useState: function(b) {
    return Yi(Ki, b);
  }, useInsertionEffect: xa, useLayoutEffect: function() {
  }, useCallback: function(b, P) {
    return Xi(function() {
      return b;
    }, P);
  }, useImperativeHandle: xa, useEffect: xa, useDebugValue: xa, useDeferredValue: function(b) {
    return kr(), b;
  }, useTransition: function() {
    return kr(), [!1, sl];
  }, useId: function() {
    var b = na.treeContext, P = b.overflow;
    b = b.id, b = (b & ~(1 << 32 - Re(b) - 1)).toString(32) + P;
    var z = Sa;
    if (z === null)
      throw Error(t(404));
    return P = Or++, b = ":" + z.idPrefix + "R" + b, 0 < P && (b += "H" + P.toString(32)), b + ":";
  }, useMutableSource: function(b, P) {
    return kr(), P(b._source);
  }, useSyncExternalStore: function(b, P, z) {
    if (z === void 0)
      throw Error(t(407));
    return z();
  } }, Sa = null, ra = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function ul(b) {
    return console.error(b), null;
  }
  function aa() {
  }
  function Qa(b, P, z, G, Se, ve, Fe, je, gt) {
    var Dt = [], Ct = /* @__PURE__ */ new Set();
    return P = { destination: null, responseState: P, progressiveChunkSize: G === void 0 ? 12800 : G, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Ct, pingedTasks: Dt, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: Se === void 0 ? ul : Se, onAllReady: ve === void 0 ? aa : ve, onShellReady: Fe === void 0 ? aa : Fe, onShellError: je === void 0 ? aa : je, onFatalError: gt === void 0 ? aa : gt }, z = Hr(P, 0, null, z, !1, !1), z.parentFlushed = !0, b = Ja(P, b, null, z, Ct, ot, null, J), Dt.push(b), P;
  }
  function Ja(b, P, z, G, Se, ve, Fe, je) {
    b.allPendingTasks++, z === null ? b.pendingRootTasks++ : z.pendingTasks++;
    var gt = { node: P, ping: function() {
      var Dt = b.pingedTasks;
      Dt.push(gt), Dt.length === 1 && eo(b);
    }, blockedBoundary: z, blockedSegment: G, abortSet: Se, legacyContext: ve, context: Fe, treeContext: je };
    return Se.add(gt), gt;
  }
  function Hr(b, P, z, G, Se, ve) {
    return { status: 0, id: -1, index: P, parentFlushed: !1, chunks: [], children: [], formatContext: G, boundary: z, lastPushedText: Se, textEmbedded: ve };
  }
  function Wr(b, P) {
    if (b = b.onError(P), b != null && typeof b != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof b + '" instead');
    return b;
  }
  function Ea(b, P) {
    var z = b.onShellError;
    z(P), z = b.onFatalError, z(P), b.destination !== null ? (b.status = 2, g(b.destination, P)) : (b.status = 1, b.fatalError = P);
  }
  function qi(b, P, z, G, Se) {
    for (pr = {}, na = P, Or = 0, b = z(G, Se); jn; )
      jn = !1, Or = 0, va += 1, nn = null, b = z(G, Se);
    return Za(), b;
  }
  function ei(b, P, z, G) {
    var Se = z.render(), ve = G.childContextTypes;
    if (ve != null) {
      var Fe = P.legacyContext;
      if (typeof z.getChildContext != "function")
        G = Fe;
      else {
        z = z.getChildContext();
        for (var je in z)
          if (!(je in ve))
            throw Error(t(108, Ve(G) || "Unknown", je));
        G = zn({}, Fe, z);
      }
      P.legacyContext = G, Un(b, P, Se), P.legacyContext = Fe;
    } else
      Un(b, P, Se);
  }
  function Gi(b, P) {
    if (b && b.defaultProps) {
      P = zn({}, P), b = b.defaultProps;
      for (var z in b)
        P[z] === void 0 && (P[z] = b[z]);
      return P;
    }
    return P;
  }
  function ka(b, P, z, G, Se) {
    if (typeof z == "function")
      if (z.prototype && z.prototype.isReactComponent) {
        Se = pt(z, P.legacyContext);
        var ve = z.contextType;
        ve = new z(G, typeof ve == "object" && ve !== null ? ve._currentValue : Se), ne(ve, z, G, Se), ei(b, P, ve, z);
      } else {
        ve = pt(z, P.legacyContext), Se = qi(b, P, z, G, ve);
        var Fe = Or !== 0;
        if (typeof Se == "object" && Se !== null && typeof Se.render == "function" && Se.$$typeof === void 0)
          ne(Se, z, G, ve), ei(b, P, Se, z);
        else if (Fe) {
          G = P.treeContext, P.treeContext = ce(G, 1, 0);
          try {
            Un(b, P, Se);
          } finally {
            P.treeContext = G;
          }
        } else
          Un(b, P, Se);
      }
    else if (typeof z == "string") {
      switch (Se = P.blockedSegment, ve = Ke(Se.chunks, z, G, b.responseState, Se.formatContext), Se.lastPushedText = !1, Fe = Se.formatContext, Se.formatContext = Z(Fe, z, G), wa(b, P, ve), Se.formatContext = Fe, z) {
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
          Se.chunks.push(Qe, c(z), ct);
      }
      Se.lastPushedText = !1;
    } else {
      switch (z) {
        case be:
        case X:
        case yr:
        case Lr:
        case wn:
          Un(b, P, G.children);
          return;
        case br:
          Un(b, P, G.children);
          return;
        case $:
          throw Error(t(343));
        case xr:
          e: {
            z = P.blockedBoundary, Se = P.blockedSegment, ve = G.fallback, G = G.children, Fe = /* @__PURE__ */ new Set();
            var je = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: Fe, errorDigest: null }, gt = Hr(b, Se.chunks.length, je, Se.formatContext, !1, !1);
            Se.children.push(gt), Se.lastPushedText = !1;
            var Dt = Hr(b, 0, null, Se.formatContext, !1, !1);
            Dt.parentFlushed = !0, P.blockedBoundary = je, P.blockedSegment = Dt;
            try {
              if (wa(
                b,
                P,
                G
              ), Dt.lastPushedText && Dt.textEmbedded && Dt.chunks.push(ee), Dt.status = 1, Ta(je, Dt), je.pendingTasks === 0)
                break e;
            } catch (Ct) {
              Dt.status = 4, je.forceClientRender = !0, je.errorDigest = Wr(b, Ct);
            } finally {
              P.blockedBoundary = z, P.blockedSegment = Se;
            }
            P = Ja(b, ve, z, gt, Fe, P.legacyContext, P.context, P.treeContext), b.pingedTasks.push(P);
          }
          return;
      }
      if (typeof z == "object" && z !== null)
        switch (z.$$typeof) {
          case vr:
            if (G = qi(b, P, z.render, G, Se), Or !== 0) {
              z = P.treeContext, P.treeContext = ce(z, 1, 0);
              try {
                Un(b, P, G);
              } finally {
                P.treeContext = z;
              }
            } else
              Un(b, P, G);
            return;
          case x:
            z = z.type, G = Gi(z, G), ka(b, P, z, G, Se);
            return;
          case fr:
            if (Se = G.children, z = z._context, G = G.value, ve = z._currentValue, z._currentValue = G, Fe = dt, dt = G = { parent: Fe, depth: Fe === null ? 0 : Fe.depth + 1, context: z, parentValue: ve, value: G }, P.context = G, Un(b, P, Se), b = dt, b === null)
              throw Error(t(403));
            G = b.parentValue, b.context._currentValue = G === ye ? b.context._defaultValue : G, b = dt = b.parent, P.context = b;
            return;
          case Zn:
            G = G.children, G = G(z._currentValue), Un(b, P, G);
            return;
          case A:
            Se = z._init, z = Se(z._payload), G = Gi(z, G), ka(b, P, z, G, void 0);
            return;
        }
      throw Error(t(
        130,
        z == null ? z : typeof z,
        ""
      ));
    }
  }
  function Un(b, P, z) {
    if (P.node = z, typeof z == "object" && z !== null) {
      switch (z.$$typeof) {
        case xn:
          ka(b, P, z.type, z.props, z.ref);
          return;
        case Jt:
          throw Error(t(257));
        case A:
          var G = z._init;
          z = G(z._payload), Un(b, P, z);
          return;
      }
      if (q(z)) {
        Zi(b, P, z);
        return;
      }
      if (z === null || typeof z != "object" ? G = null : (G = Te && z[Te] || z["@@iterator"], G = typeof G == "function" ? G : null), G && (G = G.call(z))) {
        if (z = G.next(), !z.done) {
          var Se = [];
          do
            Se.push(z.value), z = G.next();
          while (!z.done);
          Zi(b, P, Se);
        }
        return;
      }
      throw b = Object.prototype.toString.call(z), Error(t(31, b === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : b));
    }
    typeof z == "string" ? (G = P.blockedSegment, G.lastPushedText = Ae(P.blockedSegment.chunks, z, b.responseState, G.lastPushedText)) : typeof z == "number" && (G = P.blockedSegment, G.lastPushedText = Ae(P.blockedSegment.chunks, "" + z, b.responseState, G.lastPushedText));
  }
  function Zi(b, P, z) {
    for (var G = z.length, Se = 0; Se < G; Se++) {
      var ve = P.treeContext;
      P.treeContext = ce(ve, G, Se);
      try {
        wa(b, P, z[Se]);
      } finally {
        P.treeContext = ve;
      }
    }
  }
  function wa(b, P, z) {
    var G = P.blockedSegment.formatContext, Se = P.legacyContext, ve = P.context;
    try {
      return Un(b, P, z);
    } catch (gt) {
      if (Za(), typeof gt == "object" && gt !== null && typeof gt.then == "function") {
        z = gt;
        var Fe = P.blockedSegment, je = Hr(b, Fe.chunks.length, null, Fe.formatContext, Fe.lastPushedText, !0);
        Fe.children.push(je), Fe.lastPushedText = !1, b = Ja(b, P.node, P.blockedBoundary, je, P.abortSet, P.legacyContext, P.context, P.treeContext).ping, z.then(b, b), P.blockedSegment.formatContext = G, P.legacyContext = Se, P.context = ve, In(ve);
      } else
        throw P.blockedSegment.formatContext = G, P.legacyContext = Se, P.context = ve, In(ve), gt;
    }
  }
  function cl(b) {
    var P = b.blockedBoundary;
    b = b.blockedSegment, b.status = 3, Ji(this, P, b);
  }
  function Qi(b, P, z) {
    var G = b.blockedBoundary;
    b.blockedSegment.status = 3, G === null ? (P.allPendingTasks--, P.status !== 2 && (P.status = 2, P.destination !== null && P.destination.close())) : (G.pendingTasks--, G.forceClientRender || (G.forceClientRender = !0, b = z === void 0 ? Error(t(432)) : z, G.errorDigest = P.onError(b), G.parentFlushed && P.clientRenderedBoundaries.push(G)), G.fallbackAbortableTasks.forEach(function(Se) {
      return Qi(Se, P, z);
    }), G.fallbackAbortableTasks.clear(), P.allPendingTasks--, P.allPendingTasks === 0 && (G = P.onAllReady, G()));
  }
  function Ta(b, P) {
    if (P.chunks.length === 0 && P.children.length === 1 && P.children[0].boundary === null) {
      var z = P.children[0];
      z.id = P.id, z.parentFlushed = !0, z.status === 1 && Ta(b, z);
    } else
      b.completedSegments.push(P);
  }
  function Ji(b, P, z) {
    if (P === null) {
      if (z.parentFlushed) {
        if (b.completedRootSegment !== null)
          throw Error(t(389));
        b.completedRootSegment = z;
      }
      b.pendingRootTasks--, b.pendingRootTasks === 0 && (b.onShellError = aa, P = b.onShellReady, P());
    } else
      P.pendingTasks--, P.forceClientRender || (P.pendingTasks === 0 ? (z.parentFlushed && z.status === 1 && Ta(P, z), P.parentFlushed && b.completedBoundaries.push(P), P.fallbackAbortableTasks.forEach(cl, b), P.fallbackAbortableTasks.clear()) : z.parentFlushed && z.status === 1 && (Ta(P, z), P.completedSegments.length === 1 && P.parentFlushed && b.partialBoundaries.push(P)));
    b.allPendingTasks--, b.allPendingTasks === 0 && (b = b.onAllReady, b());
  }
  function eo(b) {
    if (b.status !== 2) {
      var P = dt, z = ra.current;
      ra.current = ba;
      var G = Sa;
      Sa = b.responseState;
      try {
        var Se = b.pingedTasks, ve;
        for (ve = 0; ve < Se.length; ve++) {
          var Fe = Se[ve], je = b, gt = Fe.blockedSegment;
          if (gt.status === 0) {
            In(Fe.context);
            try {
              Un(je, Fe, Fe.node), gt.lastPushedText && gt.textEmbedded && gt.chunks.push(ee), Fe.abortSet.delete(Fe), gt.status = 1, Ji(je, Fe.blockedBoundary, gt);
            } catch (er) {
              if (Za(), typeof er == "object" && er !== null && typeof er.then == "function") {
                var Dt = Fe.ping;
                er.then(Dt, Dt);
              } else {
                Fe.abortSet.delete(Fe), gt.status = 4;
                var Ct = Fe.blockedBoundary, sn = er, Kn = Wr(je, sn);
                if (Ct === null ? Ea(je, sn) : (Ct.pendingTasks--, Ct.forceClientRender || (Ct.forceClientRender = !0, Ct.errorDigest = Kn, Ct.parentFlushed && je.clientRenderedBoundaries.push(Ct))), je.allPendingTasks--, je.allPendingTasks === 0) {
                  var Jn = je.onAllReady;
                  Jn();
                }
              }
            } finally {
            }
          }
        }
        Se.splice(0, ve), b.destination !== null && ti(b, b.destination);
      } catch (er) {
        Wr(b, er), Ea(b, er);
      } finally {
        Sa = G, ra.current = z, z === ba && In(P);
      }
    }
  }
  function Ca(b, P, z) {
    switch (z.parentFlushed = !0, z.status) {
      case 0:
        var G = z.id = b.nextSegmentId++;
        return z.lastPushedText = !1, z.textEmbedded = !1, b = b.responseState, a(P, ht), a(P, b.placeholderPrefix), b = c(G.toString(16)), a(P, b), o(P, At);
      case 1:
        z.status = 2;
        var Se = !0;
        G = z.chunks;
        var ve = 0;
        z = z.children;
        for (var Fe = 0; Fe < z.length; Fe++) {
          for (Se = z[Fe]; ve < Se.index; ve++)
            a(P, G[ve]);
          Se = Aa(b, P, Se);
        }
        for (; ve < G.length - 1; ve++)
          a(P, G[ve]);
        return ve < G.length && (Se = o(P, G[ve])), Se;
      default:
        throw Error(t(390));
    }
  }
  function Aa(b, P, z) {
    var G = z.boundary;
    if (G === null)
      return Ca(b, P, z);
    if (G.parentFlushed = !0, G.forceClientRender)
      G = G.errorDigest, o(P, zt), a(P, hn), G && (a(P, Sn), a(P, c(j(G))), a(P, un)), o(P, Lt), Ca(b, P, z);
    else if (0 < G.pendingTasks) {
      G.rootSegmentID = b.nextSegmentId++, 0 < G.completedSegments.length && b.partialBoundaries.push(G);
      var Se = b.responseState, ve = Se.nextSuspenseID++;
      Se = d(Se.boundaryPrefix + ve.toString(16)), G = G.id = Se, on(P, b.responseState, G), Ca(b, P, z);
    } else if (G.byteSize > b.progressiveChunkSize)
      G.rootSegmentID = b.nextSegmentId++, b.completedBoundaries.push(G), on(P, b.responseState, G.id), Ca(b, P, z);
    else {
      if (o(P, an), z = G.completedSegments, z.length !== 1)
        throw Error(t(391));
      Aa(b, P, z[0]);
    }
    return o(P, tn);
  }
  function to(b, P, z) {
    return Bt(P, b.responseState, z.formatContext, z.id), Aa(b, P, z), It(P, z.formatContext);
  }
  function no(b, P, z) {
    for (var G = z.completedSegments, Se = 0; Se < G.length; Se++)
      ro(b, P, z, G[Se]);
    if (G.length = 0, b = b.responseState, G = z.id, z = z.rootSegmentID, a(P, b.startInlineScript), b.sentCompleteBoundaryFunction ? a(P, Xt) : (b.sentCompleteBoundaryFunction = !0, a(P, Ht)), G === null)
      throw Error(t(395));
    return z = c(z.toString(16)), a(P, G), a(P, yn), a(P, b.segmentPrefix), a(P, z), o(P, An);
  }
  function ro(b, P, z, G) {
    if (G.status === 2)
      return !0;
    var Se = G.id;
    if (Se === -1) {
      if ((G.id = z.rootSegmentID) === -1)
        throw Error(t(392));
      return to(b, P, G);
    }
    return to(b, P, G), b = b.responseState, a(P, b.startInlineScript), b.sentCompleteSegmentFunction ? a(P, Qt) : (b.sentCompleteSegmentFunction = !0, a(P, vt)), a(P, b.segmentPrefix), Se = c(Se.toString(16)), a(P, Se), a(P, qt), a(P, b.placeholderPrefix), a(P, Se), o(P, Mt);
  }
  function ti(b, P) {
    r = new Uint8Array(512), n = 0;
    try {
      var z = b.completedRootSegment;
      if (z !== null && b.pendingRootTasks === 0) {
        Aa(b, P, z), b.completedRootSegment = null;
        var G = b.responseState.bootstrapChunks;
        for (z = 0; z < G.length - 1; z++)
          a(P, G[z]);
        z < G.length && o(P, G[z]);
      }
      var Se = b.clientRenderedBoundaries, ve;
      for (ve = 0; ve < Se.length; ve++) {
        var Fe = Se[ve];
        G = P;
        var je = b.responseState, gt = Fe.id, Dt = Fe.errorDigest, Ct = Fe.errorMessage, sn = Fe.errorComponentStack;
        if (a(G, je.startInlineScript), je.sentClientRenderFunction ? a(G, Nt) : (je.sentClientRenderFunction = !0, a(
          G,
          Ut
        )), gt === null)
          throw Error(t(395));
        a(G, gt), a(G, vn), (Dt || Ct || sn) && (a(G, Kt), a(G, c(Pn(Dt || "")))), (Ct || sn) && (a(G, Kt), a(G, c(Pn(Ct || "")))), sn && (a(G, Kt), a(G, c(Pn(sn)))), o(G, _t);
      }
      Se.splice(0, ve);
      var Kn = b.completedBoundaries;
      for (ve = 0; ve < Kn.length; ve++)
        no(b, P, Kn[ve]);
      Kn.splice(0, ve), f(P), r = new Uint8Array(512), n = 0;
      var Jn = b.partialBoundaries;
      for (ve = 0; ve < Jn.length; ve++) {
        var er = Jn[ve];
        e: {
          Se = b, Fe = P;
          var Pa = er.completedSegments;
          for (je = 0; je < Pa.length; je++)
            if (!ro(
              Se,
              Fe,
              er,
              Pa[je]
            )) {
              je++, Pa.splice(0, je);
              var io = !1;
              break e;
            }
          Pa.splice(0, je), io = !0;
        }
        if (!io) {
          b.destination = null, ve++, Jn.splice(0, ve);
          return;
        }
      }
      Jn.splice(0, ve);
      var ni = b.completedBoundaries;
      for (ve = 0; ve < ni.length; ve++)
        no(b, P, ni[ve]);
      ni.splice(0, ve);
    } finally {
      f(P), b.allPendingTasks === 0 && b.pingedTasks.length === 0 && b.clientRenderedBoundaries.length === 0 && b.completedBoundaries.length === 0 && P.close();
    }
  }
  function ao(b, P) {
    try {
      var z = b.abortableTasks;
      z.forEach(function(G) {
        return Qi(G, b, P);
      }), z.clear(), b.destination !== null && ti(b, b.destination);
    } catch (G) {
      Wr(b, G), Ea(b, G);
    }
  }
  return Ou.renderToReadableStream = function(b, P) {
    return new Promise(function(z, G) {
      var Se, ve, Fe = new Promise(function(Ct, sn) {
        ve = Ct, Se = sn;
      }), je = Qa(b, fe(P ? P.identifierPrefix : void 0, P ? P.nonce : void 0, P ? P.bootstrapScriptContent : void 0, P ? P.bootstrapScripts : void 0, P ? P.bootstrapModules : void 0), W(P ? P.namespaceURI : void 0), P ? P.progressiveChunkSize : void 0, P ? P.onError : void 0, ve, function() {
        var Ct = new ReadableStream({ type: "bytes", pull: function(sn) {
          if (je.status === 1)
            je.status = 2, g(sn, je.fatalError);
          else if (je.status !== 2 && je.destination === null) {
            je.destination = sn;
            try {
              ti(je, sn);
            } catch (Kn) {
              Wr(je, Kn), Ea(je, Kn);
            }
          }
        }, cancel: function() {
          ao(je);
        } }, { highWaterMark: 0 });
        Ct.allReady = Fe, z(Ct);
      }, function(Ct) {
        Fe.catch(function() {
        }), G(Ct);
      }, Se);
      if (P && P.signal) {
        var gt = P.signal, Dt = function() {
          ao(je, gt.reason), gt.removeEventListener("abort", Dt);
        };
        gt.addEventListener("abort", Dt);
      }
      eo(je);
    });
  }, Ou.version = "18.2.0", Ou;
}
var Mi = {};
/**
 * @license React
 * react-dom-server-legacy.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rm;
function CE() {
  return rm || (rm = 1, process.env.NODE_ENV !== "production" && function() {
    var e = se, t = "18.2.0", r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
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
        var Q = S.map(function(de) {
          return String(de);
        });
        Q.unshift("Warning: " + h), Function.prototype.apply.call(console[l], console, Q);
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
    function v(l) {
      l.push(null);
    }
    function y(l) {
      return l;
    }
    function k(l) {
      return l;
    }
    function E(l, h) {
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
    function L(l, h) {
      if (T(l))
        return a("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", h, M(l)), m(l);
    }
    function O(l, h) {
      if (T(l))
        return a("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", h, M(l)), m(l);
    }
    function _(l) {
      if (T(l))
        return a("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", M(l)), m(l);
    }
    var N = Object.prototype.hasOwnProperty, R = 0, j = 1, B = 2, V = 3, q = 4, Y = 5, U = 6, te = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", me = te + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", I = new RegExp("^[" + te + "][" + me + "]*$"), le = {}, ue = {};
    function fe(l) {
      return N.call(ue, l) ? !0 : N.call(le, l) ? !1 : I.test(l) ? (ue[l] = !0, !0) : (le[l] = !0, a("Invalid attribute name: `%s`", l), !1);
    }
    function ae(l, h, S, C) {
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
    function W(l) {
      return ee.hasOwnProperty(l) ? ee[l] : null;
    }
    function Z(l, h, S, C, F, Q, de) {
      this.acceptsBooleans = h === B || h === V || h === q, this.attributeName = C, this.attributeNamespace = F, this.mustUseProperty = S, this.propertyName = l, this.type = h, this.sanitizeURL = Q, this.removeEmptyString = de;
    }
    var ee = {}, Ae = [
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
      ee[l] = new Z(
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
      ee[h] = new Z(
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
      ee[l] = new Z(
        l,
        B,
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
      ee[l] = new Z(
        l,
        B,
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
      ee[l] = new Z(
        l,
        V,
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
      ee[l] = new Z(
        l,
        V,
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
      ee[l] = new Z(
        l,
        q,
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
      ee[l] = new Z(
        l,
        U,
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
      ee[l] = new Z(
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
    });
    var xe = /[\-\:]([a-z])/g, De = function(l) {
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
      var h = l.replace(xe, De);
      ee[h] = new Z(
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
      var h = l.replace(xe, De);
      ee[h] = new Z(
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
      var h = l.replace(xe, De);
      ee[h] = new Z(
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
      ee[l] = new Z(
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
    var oe = "xlinkHref";
    ee[oe] = new Z(
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
      ee[l] = new Z(
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
    var ze = {
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
    function He(l, h) {
      return l + h.charAt(0).toUpperCase() + h.substring(1);
    }
    var Ce = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ze).forEach(function(l) {
      Ce.forEach(function(h) {
        ze[He(h, l)] = ze[l];
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
    function Oe(l, h) {
      ge[h.type] || h.onChange || h.onInput || h.readOnly || h.disabled || h.value == null || a("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), h.onChange || h.readOnly || h.disabled || h.checked == null || a("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function ie(l, h) {
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
    var ke = {
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
    }, Pe = {}, We = new RegExp("^(aria)-[" + me + "]*$"), Ye = new RegExp("^(aria)[A-Z][" + me + "]*$");
    function qe(l, h) {
      {
        if (N.call(Pe, h) && Pe[h])
          return !0;
        if (Ye.test(h)) {
          var S = "aria-" + h.slice(4).toLowerCase(), C = ke.hasOwnProperty(S) ? S : null;
          if (C == null)
            return a("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", h), Pe[h] = !0, !0;
          if (h !== C)
            return a("Invalid ARIA attribute `%s`. Did you mean `%s`?", h, C), Pe[h] = !0, !0;
        }
        if (We.test(h)) {
          var F = h.toLowerCase(), Q = ke.hasOwnProperty(F) ? F : null;
          if (Q == null)
            return Pe[h] = !0, !1;
          if (h !== Q)
            return a("Unknown ARIA attribute `%s`. Did you mean `%s`?", h, Q), Pe[h] = !0, !0;
        }
      }
      return !0;
    }
    function lt(l, h) {
      {
        var S = [];
        for (var C in h) {
          var F = qe(l, C);
          F || S.push(C);
        }
        var Q = S.map(function(de) {
          return "`" + de + "`";
        }).join(", ");
        S.length === 1 ? a("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", Q, l) : S.length > 1 && a("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", Q, l);
      }
    }
    function st(l, h) {
      ie(l, h) || lt(l, h);
    }
    var it = !1;
    function Je(l, h) {
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
    }, $e = function() {
    };
    {
      var ft = {}, Ke = /^on./, Qe = /^on[^A-Z]/, ct = new RegExp("^(aria)-[" + me + "]*$"), ht = new RegExp("^(aria)[A-Z][" + me + "]*$");
      $e = function(l, h, S, C) {
        if (N.call(ft, h) && ft[h])
          return !0;
        var F = h.toLowerCase();
        if (F === "onfocusin" || F === "onfocusout")
          return a("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ft[h] = !0, !0;
        if (C != null) {
          var Q = C.registrationNameDependencies, de = C.possibleRegistrationNames;
          if (Q.hasOwnProperty(h))
            return !0;
          var Ee = de.hasOwnProperty(F) ? de[F] : null;
          if (Ee != null)
            return a("Invalid event handler property `%s`. Did you mean `%s`?", h, Ee), ft[h] = !0, !0;
          if (Ke.test(h))
            return a("Unknown event handler property `%s`. It will be ignored.", h), ft[h] = !0, !0;
        } else if (Ke.test(h))
          return Qe.test(h) && a("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", h), ft[h] = !0, !0;
        if (ct.test(h) || ht.test(h))
          return !0;
        if (F === "innerhtml")
          return a("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ft[h] = !0, !0;
        if (F === "aria")
          return a("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ft[h] = !0, !0;
        if (F === "is" && S !== null && S !== void 0 && typeof S != "string")
          return a("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof S), ft[h] = !0, !0;
        if (typeof S == "number" && isNaN(S))
          return a("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", h), ft[h] = !0, !0;
        var Be = W(h), tt = Be !== null && Be.type === R;
        if (Ie.hasOwnProperty(F)) {
          var ut = Ie[F];
          if (ut !== h)
            return a("Invalid DOM property `%s`. Did you mean `%s`?", h, ut), ft[h] = !0, !0;
        } else if (!tt && h !== F)
          return a("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", h, F), ft[h] = !0, !0;
        return typeof S == "boolean" && ae(h, S, Be, !1) ? (S ? a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', S, h, h, S, h) : a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', S, h, h, S, h, h, h), ft[h] = !0, !0) : tt ? !0 : ae(h, S, Be, !1) ? (ft[h] = !0, !1) : ((S === "false" || S === "true") && Be !== null && Be.type === V && (a("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", S, h, S === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', h, S), ft[h] = !0), !0);
      };
    }
    var At = function(l, h, S) {
      {
        var C = [];
        for (var F in h) {
          var Q = $e(l, F, h[F], S);
          Q || C.push(F);
        }
        var de = C.map(function(Ee) {
          return "`" + Ee + "`";
        }).join(", ");
        C.length === 1 ? a("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", de, l) : C.length > 1 && a("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", de, l);
      }
    };
    function an(l, h, S) {
      ie(l, h) || At(l, h, S);
    }
    var Zt = function() {
    };
    {
      var Ot = /^(?:webkit|moz|o)[A-Z]/, zt = /^-ms-/, tn = /-(.)/g, hn = /;\s*$/, un = {}, Sn = {}, Lt = !1, on = !1, _e = function(l) {
        return l.replace(tn, function(h, S) {
          return S.toUpperCase();
        });
      }, ln = function(l) {
        un.hasOwnProperty(l) && un[l] || (un[l] = !0, a(
          "Unsupported style property %s. Did you mean %s?",
          l,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          _e(l.replace(zt, "ms-"))
        ));
      }, Pt = function(l) {
        un.hasOwnProperty(l) && un[l] || (un[l] = !0, a("Unsupported vendor-prefixed style property %s. Did you mean %s?", l, l.charAt(0).toUpperCase() + l.slice(1)));
      }, Rt = function(l, h) {
        Sn.hasOwnProperty(h) && Sn[h] || (Sn[h] = !0, a(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, l, h.replace(hn, "")));
      }, Ln = function(l, h) {
        Lt || (Lt = !0, a("`NaN` is an invalid value for the `%s` css style property.", l));
      }, gn = function(l, h) {
        on || (on = !0, a("`Infinity` is an invalid value for the `%s` css style property.", l));
      };
      Zt = function(l, h) {
        l.indexOf("-") > -1 ? ln(l) : Ot.test(l) ? Pt(l) : hn.test(h) && Rt(l, h), typeof h == "number" && (isNaN(h) ? Ln(l, h) : isFinite(h) || gn(l, h));
      };
    }
    var kn = Zt, Fn = /["'&<>]/;
    function Me(l) {
      _(l);
      var h = "" + l, S = Fn.exec(h);
      if (!S)
        return h;
      var C, F = "", Q, de = 0;
      for (Q = S.index; Q < h.length; Q++) {
        switch (h.charCodeAt(Q)) {
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
        de !== Q && (F += h.substring(de, Q)), de = Q + 1, F += C;
      }
      return de !== Q ? F + h.substring(de, Q) : F;
    }
    function Xe(l) {
      return typeof l == "boolean" || typeof l == "number" ? "" + l : Me(l);
    }
    var kt = /([A-Z])/g, nt = /^ms-/;
    function K(l) {
      return l.replace(kt, "-$1").toLowerCase().replace(nt, "-ms-");
    }
    var Ne = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, et = !1;
    function Ue(l) {
      !et && Ne.test(l) && (et = !0, a("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(l)));
    }
    var yt = Array.isArray;
    function at(l) {
      return yt(l);
    }
    var wt = "<script>", $t = "<\/script>", Ze = '<script src="', Bt = '<script type="module" src="', It = '" async=""><\/script>';
    function vt(l) {
      return _(l), ("" + l).replace(Qt, qt);
    }
    var Qt = /(<\/|<)(s)(cript)/gi, qt = function(l, h, S, C) {
      return "" + h + (S === "s" ? "\\u0073" : "\\u0053") + C;
    };
    function Mt(l, h, S, C, F) {
      var Q = l === void 0 ? "" : l, de = h === void 0 ? wt : '<script nonce="' + Xe(h) + '">', Ee = [];
      if (S !== void 0 && Ee.push(de, vt(S), $t), C !== void 0)
        for (var Be = 0; Be < C.length; Be++)
          Ee.push(Ze, Xe(C[Be]), It);
      if (F !== void 0)
        for (var tt = 0; tt < F.length; tt++)
          Ee.push(Bt, Xe(F[tt]), It);
      return {
        bootstrapChunks: Ee,
        startInlineScript: de,
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
    var Ht = 0, Xt = 1, yn = 2, An = 3, Ut = 4, Nt = 5, vn = 6, _t = 7;
    function Kt(l, h) {
      return {
        insertionMode: l,
        selectedValue: h
      };
    }
    function Vn(l, h, S) {
      switch (h) {
        case "select":
          return Kt(Xt, S.value != null ? S.value : S.defaultValue);
        case "svg":
          return Kt(yn, null);
        case "math":
          return Kt(An, null);
        case "foreignObject":
          return Kt(Xt, null);
        case "table":
          return Kt(Ut, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return Kt(Nt, null);
        case "colgroup":
          return Kt(_t, null);
        case "tr":
          return Kt(vn, null);
      }
      return l.insertionMode >= Ut || l.insertionMode === Ht ? Kt(Xt, null) : l;
    }
    var Pn = null;
    function zn(l) {
      var h = l.nextSuspenseID++;
      return l.boundaryPrefix + h.toString(16);
    }
    function xn(l, h, S) {
      var C = l.idPrefix, F = ":" + C + "R" + h;
      return S > 0 && (F += "H" + S.toString(32)), F + ":";
    }
    function Jt(l) {
      return Xe(l);
    }
    var wn = "<!-- -->";
    function yr(l, h, S, C) {
      return h === "" ? C : (C && l.push(wn), l.push(Jt(h)), !0);
    }
    function Lr(l, h, S, C) {
      S && C && l.push(wn);
    }
    var fr = /* @__PURE__ */ new Map();
    function Zn(l) {
      var h = fr.get(l);
      if (h !== void 0)
        return h;
      var S = Xe(K(l));
      return fr.set(l, S), S;
    }
    var vr = ' style="', xr = ":", br = ";";
    function x(l, h, S) {
      if (typeof S != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var C = !0;
      for (var F in S)
        if (N.call(S, F)) {
          var Q = S[F];
          if (!(Q == null || typeof Q == "boolean" || Q === "")) {
            var de = void 0, Ee = void 0, Be = F.indexOf("--") === 0;
            Be ? (de = Xe(F), O(Q, F), Ee = Xe(("" + Q).trim())) : (kn(F, Q), de = Zn(F), typeof Q == "number" ? Q !== 0 && !N.call(ze, F) ? Ee = Q + "px" : Ee = "" + Q : (O(Q, F), Ee = Xe(("" + Q).trim()))), C ? (C = !1, l.push(vr, de, xr, Ee)) : l.push(br, de, xr, Ee);
          }
        }
      C || l.push(X);
    }
    var A = " ", $ = '="', X = '"', be = '=""';
    function ye(l, h, S, C) {
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
        var F = W(S);
        if (F !== null) {
          switch (typeof C) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!F.acceptsBooleans)
                return;
          }
          var Q = F.attributeName, de = Q;
          switch (F.type) {
            case V:
              C && l.push(A, de, be);
              return;
            case q:
              C === !0 ? l.push(A, de, be) : C === !1 || l.push(A, de, $, Xe(C), X);
              return;
            case Y:
              isNaN(C) || l.push(A, de, $, Xe(C), X);
              break;
            case U:
              !isNaN(C) && C >= 1 && l.push(A, de, $, Xe(C), X);
              break;
            default:
              F.sanitizeURL && (L(C, Q), C = "" + C, Ue(C)), l.push(A, de, $, Xe(C), X);
          }
        } else if (fe(S)) {
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
          l.push(A, S, $, Xe(C), X);
        }
      }
    }
    var Te = ">", Ve = "/>";
    function ot(l, h, S) {
      if (h != null) {
        if (S != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof h != "object" || !("__html" in h))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var C = h.__html;
        C != null && (_(C), l.push("" + C));
      }
    }
    var pt = !1, dt = !1, Ft = !1, Dn = !1, Tn = !1, Cn = !1, Xn = !1;
    function In(l, h) {
      {
        var S = l[h];
        if (S != null) {
          var C = at(S);
          l.multiple && !C ? a("The `%s` prop supplied to <select> must be an array if `multiple` is true.", h) : !l.multiple && C && a("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", h);
        }
      }
    }
    function hr(l, h, S) {
      Oe("select", h), In(h, "value"), In(h, "defaultValue"), h.value !== void 0 && h.defaultValue !== void 0 && !Ft && (a("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ft = !0), l.push(jn("select"));
      var C = null, F = null;
      for (var Q in h)
        if (N.call(h, Q)) {
          var de = h[Q];
          if (de == null)
            continue;
          switch (Q) {
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
              ye(l, S, Q, de);
              break;
          }
        }
      return l.push(Te), ot(l, F, C), C;
    }
    function ne(l) {
      var h = "";
      return e.Children.forEach(l, function(S) {
        S != null && (h += S, !Tn && typeof S != "string" && typeof S != "number" && (Tn = !0, a("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), h;
    }
    var J = ' selected=""';
    function ce(l, h, S, C) {
      var F = C.selectedValue;
      l.push(jn("option"));
      var Q = null, de = null, Ee = null, Be = null;
      for (var tt in h)
        if (N.call(h, tt)) {
          var ut = h[tt];
          if (ut == null)
            continue;
          switch (tt) {
            case "children":
              Q = ut;
              break;
            case "selected":
              Ee = ut, Xn || (a("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Xn = !0);
              break;
            case "dangerouslySetInnerHTML":
              Be = ut;
              break;
            case "value":
              de = ut;
            default:
              ye(l, S, tt, ut);
              break;
          }
        }
      if (F != null) {
        var xt;
        if (de !== null ? (L(de, "value"), xt = "" + de) : (Be !== null && (Cn || (Cn = !0, a("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), xt = ne(Q)), at(F))
          for (var cn = 0; cn < F.length; cn++) {
            L(F[cn], "value");
            var Bn = "" + F[cn];
            if (Bn === xt) {
              l.push(J);
              break;
            }
          }
        else
          L(F, "select.value"), "" + F === xt && l.push(J);
      } else
        Ee && l.push(J);
      return l.push(Te), ot(l, Be, Q), Q;
    }
    function Re(l, h, S) {
      Oe("input", h), h.checked !== void 0 && h.defaultChecked !== void 0 && !dt && (a("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", h.type), dt = !0), h.value !== void 0 && h.defaultValue !== void 0 && !pt && (a("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", h.type), pt = !0), l.push(jn("input"));
      var C = null, F = null, Q = null, de = null;
      for (var Ee in h)
        if (N.call(h, Ee)) {
          var Be = h[Ee];
          if (Be == null)
            continue;
          switch (Ee) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              de = Be;
              break;
            case "defaultValue":
              F = Be;
              break;
            case "checked":
              Q = Be;
              break;
            case "value":
              C = Be;
              break;
            default:
              ye(l, S, Ee, Be);
              break;
          }
        }
      return Q !== null ? ye(l, S, "checked", Q) : de !== null && ye(l, S, "checked", de), C !== null ? ye(l, S, "value", C) : F !== null && ye(l, S, "value", F), l.push(Ve), null;
    }
    function Wt(l, h, S) {
      Oe("textarea", h), h.value !== void 0 && h.defaultValue !== void 0 && !Dn && (a("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Dn = !0), l.push(jn("textarea"));
      var C = null, F = null, Q = null;
      for (var de in h)
        if (N.call(h, de)) {
          var Ee = h[de];
          if (Ee == null)
            continue;
          switch (de) {
            case "children":
              Q = Ee;
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
              ye(l, S, de, Ee);
              break;
          }
        }
      if (C === null && F !== null && (C = F), l.push(Te), Q != null) {
        if (a("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), C != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (at(Q)) {
          if (Q.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          _(Q[0]), C = "" + Q[0];
        }
        _(Q), C = "" + Q;
      }
      return typeof C == "string" && C[0] === `
` && l.push(na), C !== null && (L(C, "value"), l.push(Jt("" + C))), null;
    }
    function pn(l, h, S, C) {
      l.push(jn(S));
      for (var F in h)
        if (N.call(h, F)) {
          var Q = h[F];
          if (Q == null)
            continue;
          switch (F) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(S + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              ye(l, C, F, Q);
              break;
          }
        }
      return l.push(Ve), null;
    }
    function Hn(l, h, S) {
      l.push(jn("menuitem"));
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
              ye(l, S, C, F);
              break;
          }
        }
      return l.push(Te), null;
    }
    function Dr(l, h, S) {
      l.push(jn("title"));
      var C = null;
      for (var F in h)
        if (N.call(h, F)) {
          var Q = h[F];
          if (Q == null)
            continue;
          switch (F) {
            case "children":
              C = Q;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              ye(l, S, F, Q);
              break;
          }
        }
      l.push(Te);
      {
        var de = Array.isArray(C) && C.length < 2 ? C[0] || null : C;
        Array.isArray(C) && C.length > 1 ? a("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : de != null && de.$$typeof != null ? a("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : de != null && typeof de != "string" && typeof de != "number" && a("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return C;
    }
    function qa(l, h, S, C) {
      l.push(jn(S));
      var F = null, Q = null;
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
              Q = Ee;
              break;
            default:
              ye(l, C, de, Ee);
              break;
          }
        }
      return l.push(Te), ot(l, Q, F), typeof F == "string" ? (l.push(Jt(F)), null) : F;
    }
    function pr(l, h, S, C) {
      l.push(jn(S));
      var F = null, Q = null;
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
              Q = Ee;
              break;
            case "style":
              x(l, C, Ee);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              fe(de) && typeof Ee != "function" && typeof Ee != "symbol" && l.push(A, de, $, Xe(Ee), X);
              break;
          }
        }
      return l.push(Te), ot(l, Q, F), F;
    }
    var na = `
`;
    function ya(l, h, S, C) {
      l.push(jn(S));
      var F = null, Q = null;
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
              Q = Ee;
              break;
            default:
              ye(l, C, de, Ee);
              break;
          }
        }
      if (l.push(Te), Q != null) {
        if (F != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof Q != "object" || !("__html" in Q))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var Be = Q.__html;
        Be != null && (typeof Be == "string" && Be.length > 0 && Be[0] === `
` ? l.push(na, Be) : (_(Be), l.push("" + Be)));
      }
      return typeof F == "string" && F[0] === `
` && l.push(na), F;
    }
    var nn = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Sr = /* @__PURE__ */ new Map();
    function jn(l) {
      var h = Sr.get(l);
      if (h === void 0) {
        if (!nn.test(l))
          throw new Error("Invalid tag: " + l);
        h = "<" + l, Sr.set(l, h);
      }
      return h;
    }
    var Or = "<!DOCTYPE html>";
    function Er(l, h, S, C, F) {
      switch (st(h, S), Je(h, S), an(h, S, null), !S.suppressContentEditableWarning && S.contentEditable && S.children != null && a("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), F.insertionMode !== yn && F.insertionMode !== An && h.indexOf("-") === -1 && typeof S.is != "string" && h.toLowerCase() !== h && a("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", h), h) {
        case "select":
          return hr(l, S, C);
        case "option":
          return ce(l, S, C, F);
        case "textarea":
          return Wt(l, S, C);
        case "input":
          return Re(l, S, C);
        case "menuitem":
          return Hn(l, S, C);
        case "title":
          return Dr(l, S, C);
        case "listing":
        case "pre":
          return ya(l, S, h, C);
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
          return pn(l, S, h, C);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return qa(l, S, h, C);
        case "html":
          return F.insertionMode === Ht && l.push(Or), qa(l, S, h, C);
        default:
          return h.indexOf("-") === -1 && typeof S.is != "string" ? qa(l, S, h, C) : pr(l, S, h, C);
      }
    }
    var va = "</", kr = ">";
    function Qn(l, h, S) {
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
          l.push(va, h, kr);
      }
    }
    function Ga(l, h) {
      for (var S = h.bootstrapChunks, C = 0; C < S.length - 1; C++)
        c(l, S[C]);
      return C < S.length ? d(l, S[C]) : !0;
    }
    var Za = '<template id="', Ki = '"></template>';
    function Yi(l, h, S) {
      c(l, Za), c(l, h.placeholderPrefix);
      var C = S.toString(16);
      return c(l, C), d(l, Ki);
    }
    var Xi = "<!--$-->", ll = '<!--$?--><template id="', sl = '"></template>', xa = "<!--$!-->", ba = "<!--/$-->", Sa = "<template", ra = '"', ul = ' data-dgst="', aa = ' data-msg="', Qa = ' data-stck="', Ja = "></template>";
    function Hr(l, h) {
      return d(l, Xi);
    }
    function Wr(l, h, S) {
      if (c(l, ll), S === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return c(l, S), d(l, sl);
    }
    function Ea(l, h, S, C, F) {
      var Q;
      return Q = d(l, xa), c(l, Sa), S && (c(l, ul), c(l, Xe(S)), c(l, ra)), C && (c(l, aa), c(l, Xe(C)), c(l, ra)), F && (c(l, Qa), c(l, Xe(F)), c(l, ra)), Q = d(l, Ja), Q;
    }
    function qi(l, h) {
      return d(l, ba);
    }
    function ei(l, h) {
      return d(l, ba);
    }
    function Gi(l, h) {
      return d(l, ba);
    }
    var ka = '<div hidden id="', Un = '">', Zi = "</div>", wa = '<svg aria-hidden="true" style="display:none" id="', cl = '">', Qi = "</svg>", Ta = '<math aria-hidden="true" style="display:none" id="', Ji = '">', eo = "</math>", Ca = '<table hidden id="', Aa = '">', to = "</table>", no = '<table hidden><tbody id="', ro = '">', ti = "</tbody></table>", ao = '<table hidden><tr id="', b = '">', P = "</tr></table>", z = '<table hidden><colgroup id="', G = '">', Se = "</colgroup></table>";
    function ve(l, h, S, C) {
      switch (S.insertionMode) {
        case Ht:
        case Xt:
          return c(l, ka), c(l, h.segmentPrefix), c(l, C.toString(16)), d(l, Un);
        case yn:
          return c(l, wa), c(l, h.segmentPrefix), c(l, C.toString(16)), d(l, cl);
        case An:
          return c(l, Ta), c(l, h.segmentPrefix), c(l, C.toString(16)), d(l, Ji);
        case Ut:
          return c(l, Ca), c(l, h.segmentPrefix), c(l, C.toString(16)), d(l, Aa);
        case Nt:
          return c(l, no), c(l, h.segmentPrefix), c(l, C.toString(16)), d(l, ro);
        case vn:
          return c(l, ao), c(l, h.segmentPrefix), c(l, C.toString(16)), d(l, b);
        case _t:
          return c(l, z), c(l, h.segmentPrefix), c(l, C.toString(16)), d(l, G);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Fe(l, h) {
      switch (h.insertionMode) {
        case Ht:
        case Xt:
          return d(l, Zi);
        case yn:
          return d(l, Qi);
        case An:
          return d(l, eo);
        case Ut:
          return d(l, to);
        case Nt:
          return d(l, ti);
        case vn:
          return d(l, P);
        case _t:
          return d(l, Se);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var je = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", gt = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Dt = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Ct = je + ';$RS("', sn = '$RS("', Kn = '","', Jn = '")<\/script>';
    function er(l, h, S) {
      c(l, h.startInlineScript), h.sentCompleteSegmentFunction ? c(l, sn) : (h.sentCompleteSegmentFunction = !0, c(l, Ct)), c(l, h.segmentPrefix);
      var C = S.toString(16);
      return c(l, C), c(l, Kn), c(l, h.placeholderPrefix), c(l, C), d(l, Jn);
    }
    var Pa = gt + ';$RC("', io = '$RC("', ni = '","', _c = '")<\/script>';
    function Nc(l, h, S, C) {
      if (c(l, h.startInlineScript), h.sentCompleteBoundaryFunction ? c(l, io) : (h.sentCompleteBoundaryFunction = !0, c(l, Pa)), S === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var F = C.toString(16);
      return c(l, S), c(l, ni), c(l, h.segmentPrefix), c(l, F), d(l, _c);
    }
    var Fc = Dt + ';$RX("', zc = '$RX("', $c = '"', Bc = ")<\/script>", dl = ",";
    function Ic(l, h, S, C, F, Q) {
      if (c(l, h.startInlineScript), h.sentClientRenderFunction ? c(l, zc) : (h.sentClientRenderFunction = !0, c(l, Fc)), S === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return c(l, S), c(l, $c), (C || F || Q) && (c(l, dl), c(l, fl(C || ""))), (F || Q) && (c(l, dl), c(l, fl(F || ""))), Q && (c(l, dl), c(l, fl(Q))), d(l, Bc);
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
      var S = Mt(h, void 0);
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
        insertionMode: Xt,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function Os(l, h, S, C) {
      return S.generateStaticMarkup ? (l.push(Xe(h)), !1) : yr(l, h, S, C);
    }
    function Ms(l, h, S, C) {
      if (!h.generateStaticMarkup)
        return Lr(l, h, S, C);
    }
    function pl(l, h) {
      return h.generateStaticMarkup ? !0 : Hr(l);
    }
    function or(l, h, S, C, F) {
      return h.generateStaticMarkup ? !0 : Ea(l, h, S, C, F);
    }
    function Vc(l, h) {
      return h.generateStaticMarkup ? !0 : qi(l);
    }
    function _s(l, h) {
      return h.generateStaticMarkup ? !0 : Gi(l);
    }
    var tr = Object.assign, Ns = Symbol.for("react.element"), ml = Symbol.for("react.portal"), oo = Symbol.for("react.fragment"), lo = Symbol.for("react.strict_mode"), so = Symbol.for("react.profiler"), ri = Symbol.for("react.provider"), ai = Symbol.for("react.context"), ii = Symbol.for("react.forward_ref"), Ra = Symbol.for("react.suspense"), gl = Symbol.for("react.suspense_list"), yl = Symbol.for("react.memo"), uo = Symbol.for("react.lazy"), jc = Symbol.for("react.scope"), Fs = Symbol.for("react.debug_trace_mode"), Uc = Symbol.for("react.legacy_hidden"), Kc = Symbol.for("react.default_value"), zs = Symbol.iterator, $s = "@@iterator";
    function mn(l) {
      if (l === null || typeof l != "object")
        return null;
      var h = zs && l[zs] || l[$s];
      return typeof h == "function" ? h : null;
    }
    function oi(l, h, S) {
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
        case oo:
          return "Fragment";
        case ml:
          return "Portal";
        case so:
          return "Profiler";
        case lo:
          return "StrictMode";
        case Ra:
          return "Suspense";
        case gl:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case ai:
            var h = l;
            return vl(h) + ".Consumer";
          case ri:
            var S = l;
            return vl(S._context) + ".Provider";
          case ii:
            return oi(l, l.render, "ForwardRef");
          case yl:
            var C = l.displayName || null;
            return C !== null ? C : fn(l.type) || "Memo";
          case uo: {
            var F = l, Q = F._payload, de = F._init;
            try {
              return fn(de(Q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var La = 0, xl, bl, Sl, El, kl, Bs, Is;
    function co() {
    }
    co.__reactDisabledLog = !0;
    function wl() {
      {
        if (La === 0) {
          xl = console.log, bl = console.info, Sl = console.warn, El = console.error, kl = console.group, Bs = console.groupCollapsed, Is = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: co,
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
        La++;
      }
    }
    function li() {
      {
        if (La--, La === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: tr({}, l, {
              value: xl
            }),
            info: tr({}, l, {
              value: bl
            }),
            warn: tr({}, l, {
              value: Sl
            }),
            error: tr({}, l, {
              value: El
            }),
            group: tr({}, l, {
              value: kl
            }),
            groupCollapsed: tr({}, l, {
              value: Bs
            }),
            groupEnd: tr({}, l, {
              value: Is
            })
          });
        }
        La < 0 && a("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var si = r.ReactCurrentDispatcher, Da;
    function ui(l, h, S) {
      {
        if (Da === void 0)
          try {
            throw Error();
          } catch (F) {
            var C = F.stack.trim().match(/\n( *(at )?)/);
            Da = C && C[1] || "";
          }
        return `
` + Da + l;
      }
    }
    var ci = !1, fo;
    {
      var Hs = typeof WeakMap == "function" ? WeakMap : Map;
      fo = new Hs();
    }
    function Tl(l, h) {
      if (!l || ci)
        return "";
      {
        var S = fo.get(l);
        if (S !== void 0)
          return S;
      }
      var C;
      ci = !0;
      var F = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Q;
      Q = si.current, si.current = null, wl();
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
            } catch (cr) {
              C = cr;
            }
            Reflect.construct(l, [], de);
          } else {
            try {
              de.call();
            } catch (cr) {
              C = cr;
            }
            l.call(de.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (cr) {
            C = cr;
          }
          l();
        }
      } catch (cr) {
        if (cr && C && typeof cr.stack == "string") {
          for (var Ee = cr.stack.split(`
`), Be = C.stack.split(`
`), tt = Ee.length - 1, ut = Be.length - 1; tt >= 1 && ut >= 0 && Ee[tt] !== Be[ut]; )
            ut--;
          for (; tt >= 1 && ut >= 0; tt--, ut--)
            if (Ee[tt] !== Be[ut]) {
              if (tt !== 1 || ut !== 1)
                do
                  if (tt--, ut--, ut < 0 || Ee[tt] !== Be[ut]) {
                    var xt = `
` + Ee[tt].replace(" at new ", " at ");
                    return l.displayName && xt.includes("<anonymous>") && (xt = xt.replace("<anonymous>", l.displayName)), typeof l == "function" && fo.set(l, xt), xt;
                  }
                while (tt >= 1 && ut >= 0);
              break;
            }
        }
      } finally {
        ci = !1, si.current = Q, li(), Error.prepareStackTrace = F;
      }
      var cn = l ? l.displayName || l.name : "", Bn = cn ? ui(cn) : "";
      return typeof l == "function" && fo.set(l, Bn), Bn;
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
    function Oa(l, h, S) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return Tl(l, Ws(l));
      if (typeof l == "string")
        return ui(l);
      switch (l) {
        case Ra:
          return ui("Suspense");
        case gl:
          return ui("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case ii:
            return Al(l.render);
          case yl:
            return Oa(l.type, h, S);
          case uo: {
            var C = l, F = C._payload, Q = C._init;
            try {
              return Oa(Q(F), h, S);
            } catch {
            }
          }
        }
      return "";
    }
    var Pl = {}, ho = r.ReactDebugCurrentFrame;
    function ia(l) {
      if (l) {
        var h = l._owner, S = Oa(l.type, l._source, h ? h.type : null);
        ho.setExtraStackFrame(S);
      } else
        ho.setExtraStackFrame(null);
    }
    function Rl(l, h, S, C, F) {
      {
        var Q = Function.call.bind(N);
        for (var de in l)
          if (Q(l, de)) {
            var Ee = void 0;
            try {
              if (typeof l[de] != "function") {
                var Be = Error((C || "React class") + ": " + S + " type `" + de + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[de] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Be.name = "Invariant Violation", Be;
              }
              Ee = l[de](h, de, C, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (tt) {
              Ee = tt;
            }
            Ee && !(Ee instanceof Error) && (ia(F), a("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", C || "React class", S, de, typeof Ee), ia(null)), Ee instanceof Error && !(Ee.message in Pl) && (Pl[Ee.message] = !0, ia(F), a("Failed %s type: %s", S, Ee.message), ia(null));
          }
      }
    }
    var Ll;
    Ll = {};
    var Vr = {};
    Object.freeze(Vr);
    function Vs(l, h) {
      {
        var S = l.contextTypes;
        if (!S)
          return Vr;
        var C = {};
        for (var F in S)
          C[F] = h[F];
        {
          var Q = fn(l) || "Unknown";
          Rl(S, C, "context", Q);
        }
        return C;
      }
    }
    function oa(l, h, S, C) {
      {
        if (typeof l.getChildContext != "function") {
          {
            var F = fn(h) || "Unknown";
            Ll[F] || (Ll[F] = !0, a("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", F, F));
          }
          return S;
        }
        var Q = l.getChildContext();
        for (var de in Q)
          if (!(de in C))
            throw new Error((fn(h) || "Unknown") + '.getChildContext(): key "' + de + '" is not defined in childContextTypes.');
        {
          var Ee = fn(h) || "Unknown";
          Rl(C, Q, "child context", Ee);
        }
        return tr({}, S, Q);
      }
    }
    var la;
    la = {};
    var Dl = null, wr = null;
    function po(l) {
      l.context._currentValue2 = l.parentValue;
    }
    function mo(l) {
      l.context._currentValue2 = l.value;
    }
    function di(l, h) {
      if (l !== h) {
        po(l);
        var S = l.parent, C = h.parent;
        if (S === null) {
          if (C !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (C === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          di(S, C);
        }
        mo(h);
      }
    }
    function Ol(l) {
      po(l);
      var h = l.parent;
      h !== null && Ol(h);
    }
    function fi(l) {
      var h = l.parent;
      h !== null && fi(h), mo(l);
    }
    function js(l, h) {
      po(l);
      var S = l.parent;
      if (S === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      S.depth === h.depth ? di(S, h) : js(S, h);
    }
    function Us(l, h) {
      var S = h.parent;
      if (S === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      l.depth === S.depth ? di(l, S) : Us(l, S), mo(h);
    }
    function go(l) {
      var h = wr, S = l;
      h !== S && (h === null ? fi(S) : S === null ? Ol(h) : h.depth === S.depth ? di(h, S) : h.depth > S.depth ? js(h, S) : Us(h, S), wr = S);
    }
    function hi(l, h) {
      var S;
      S = l._currentValue2, l._currentValue2 = h, l._currentRenderer2 !== void 0 && l._currentRenderer2 !== null && l._currentRenderer2 !== la && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), l._currentRenderer2 = la;
      var C = wr, F = {
        parent: C,
        depth: C === null ? 0 : C.depth + 1,
        context: l,
        parentValue: S,
        value: h
      };
      return wr = F, F;
    }
    function Ml(l) {
      var h = wr;
      if (h === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      h.context !== l && a("The parent context is not the expected context. This is probably a bug in React.");
      {
        var S = h.parentValue;
        S === Kc ? h.context._currentValue2 = h.context._defaultValue : h.context._currentValue2 = S, l._currentRenderer2 !== void 0 && l._currentRenderer2 !== null && l._currentRenderer2 !== la && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), l._currentRenderer2 = la;
      }
      return wr = h.parent;
    }
    function Yc() {
      return wr;
    }
    function Ma(l) {
      var h = l._currentValue2;
      return h;
    }
    function yo(l) {
      return l._reactInternals;
    }
    function _l(l, h) {
      l._reactInternals = h;
    }
    var vo = {}, xo = {}, pi, bo, _a, mi, So, Na, Eo, ko, wo;
    {
      pi = /* @__PURE__ */ new Set(), bo = /* @__PURE__ */ new Set(), _a = /* @__PURE__ */ new Set(), Eo = /* @__PURE__ */ new Set(), mi = /* @__PURE__ */ new Set(), ko = /* @__PURE__ */ new Set(), wo = /* @__PURE__ */ new Set();
      var Ks = /* @__PURE__ */ new Set();
      Na = function(l, h) {
        if (!(l === null || typeof l == "function")) {
          var S = h + "_" + l;
          Ks.has(S) || (Ks.add(S), a("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", h, l));
        }
      }, So = function(l, h) {
        if (h === void 0) {
          var S = fn(l) || "Component";
          mi.has(S) || (mi.add(S), a("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", S));
        }
      };
    }
    function Ys(l, h) {
      {
        var S = l.constructor, C = S && fn(S) || "ReactClass", F = C + "." + h;
        if (vo[F])
          return;
        a(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, h, h, C), vo[F] = !0;
      }
    }
    var Xs = {
      isMounted: function(l) {
        return !1;
      },
      enqueueSetState: function(l, h, S) {
        var C = yo(l);
        C.queue === null ? Ys(l, "setState") : (C.queue.push(h), S != null && Na(S, "setState"));
      },
      enqueueReplaceState: function(l, h, S) {
        var C = yo(l);
        C.replace = !0, C.queue = [h], S != null && Na(S, "setState");
      },
      enqueueForceUpdate: function(l, h) {
        var S = yo(l);
        S.queue === null ? Ys(l, "forceUpdate") : h != null && Na(h, "setState");
      }
    };
    function Xc(l, h, S, C, F) {
      var Q = S(F, C);
      So(h, Q);
      var de = Q == null ? C : tr({}, C, Q);
      return de;
    }
    function qc(l, h, S) {
      var C = Vr, F = l.contextType;
      if ("contextType" in l) {
        var Q = (
          // Allow null for conditional declaration
          F === null || F !== void 0 && F.$$typeof === ai && F._context === void 0
        );
        if (!Q && !wo.has(l)) {
          wo.add(l);
          var de = "";
          F === void 0 ? de = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof F != "object" ? de = " However, it is set to a " + typeof F + "." : F.$$typeof === ri ? de = " Did you accidentally pass the Context.Provider instead?" : F._context !== void 0 ? de = " Did you accidentally pass the Context.Consumer instead?" : de = " However, it is set to an object with keys {" + Object.keys(F).join(", ") + "}.", a("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", fn(l) || "Component", de);
        }
      }
      typeof F == "object" && F !== null ? C = Ma(F) : C = S;
      var Ee = new l(h, C);
      {
        if (typeof l.getDerivedStateFromProps == "function" && (Ee.state === null || Ee.state === void 0)) {
          var Be = fn(l) || "Component";
          pi.has(Be) || (pi.add(Be), a("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", Be, Ee.state === null ? "null" : "undefined", Be));
        }
        if (typeof l.getDerivedStateFromProps == "function" || typeof Ee.getSnapshotBeforeUpdate == "function") {
          var tt = null, ut = null, xt = null;
          if (typeof Ee.componentWillMount == "function" && Ee.componentWillMount.__suppressDeprecationWarning !== !0 ? tt = "componentWillMount" : typeof Ee.UNSAFE_componentWillMount == "function" && (tt = "UNSAFE_componentWillMount"), typeof Ee.componentWillReceiveProps == "function" && Ee.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? ut = "componentWillReceiveProps" : typeof Ee.UNSAFE_componentWillReceiveProps == "function" && (ut = "UNSAFE_componentWillReceiveProps"), typeof Ee.componentWillUpdate == "function" && Ee.componentWillUpdate.__suppressDeprecationWarning !== !0 ? xt = "componentWillUpdate" : typeof Ee.UNSAFE_componentWillUpdate == "function" && (xt = "UNSAFE_componentWillUpdate"), tt !== null || ut !== null || xt !== null) {
            var cn = fn(l) || "Component", Bn = typeof l.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            _a.has(cn) || (_a.add(cn), a(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, cn, Bn, tt !== null ? `
  ` + tt : "", ut !== null ? `
  ` + ut : "", xt !== null ? `
  ` + xt : ""));
          }
        }
      }
      return Ee;
    }
    function qs(l, h, S) {
      {
        var C = fn(h) || "Component", F = l.render;
        F || (h.prototype && typeof h.prototype.render == "function" ? a("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", C) : a("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", C)), l.getInitialState && !l.getInitialState.isReactClassApproved && !l.state && a("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", C), l.getDefaultProps && !l.getDefaultProps.isReactClassApproved && a("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", C), l.propTypes && a("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", C), l.contextType && a("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", C), l.contextTypes && a("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", C), h.contextType && h.contextTypes && !ko.has(h) && (ko.add(h), a("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", C)), typeof l.componentShouldUpdate == "function" && a("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", C), h.prototype && h.prototype.isPureReactComponent && typeof l.shouldComponentUpdate < "u" && a("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", fn(h) || "A pure component"), typeof l.componentDidUnmount == "function" && a("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", C), typeof l.componentDidReceiveProps == "function" && a("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", C), typeof l.componentWillRecieveProps == "function" && a("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", C), typeof l.UNSAFE_componentWillRecieveProps == "function" && a("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", C);
        var Q = l.props !== S;
        l.props !== void 0 && Q && a("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", C, C), l.defaultProps && a("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", C, C), typeof l.getSnapshotBeforeUpdate == "function" && typeof l.componentDidUpdate != "function" && !bo.has(h) && (bo.add(h), a("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", fn(h))), typeof l.getDerivedStateFromProps == "function" && a("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", C), typeof l.getDerivedStateFromError == "function" && a("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", C), typeof h.getSnapshotBeforeUpdate == "function" && a("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", C);
        var de = l.state;
        de && (typeof de != "object" || at(de)) && a("%s.state: must be set to an object or null", C), typeof l.getChildContext == "function" && typeof h.childContextTypes != "object" && a("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", C);
      }
    }
    function Gc(l, h) {
      var S = h.state;
      if (typeof h.componentWillMount == "function") {
        if (h.componentWillMount.__suppressDeprecationWarning !== !0) {
          var C = fn(l) || "Unknown";
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
      typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), S !== h.state && (a("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", fn(l) || "Component"), Xs.enqueueReplaceState(h, h.state, null));
    }
    function Zc(l, h, S, C) {
      if (l.queue !== null && l.queue.length > 0) {
        var F = l.queue, Q = l.replace;
        if (l.queue = null, l.replace = !1, Q && F.length === 1)
          h.state = F[0];
        else {
          for (var de = Q ? F[0] : h.state, Ee = !0, Be = Q ? 1 : 0; Be < F.length; Be++) {
            var tt = F[Be], ut = typeof tt == "function" ? tt.call(h, de, S, C) : tt;
            ut != null && (Ee ? (Ee = !1, de = tr({}, de, ut)) : tr(de, ut));
          }
          h.state = de;
        }
      } else
        l.queue = null;
    }
    function To(l, h, S, C) {
      qs(l, h, S);
      var F = l.state !== void 0 ? l.state : null;
      l.updater = Xs, l.props = S, l.state = F;
      var Q = {
        queue: [],
        replace: !1
      };
      _l(l, Q);
      var de = h.contextType;
      if (typeof de == "object" && de !== null ? l.context = Ma(de) : l.context = C, l.state === S) {
        var Ee = fn(h) || "Component";
        Eo.has(Ee) || (Eo.add(Ee), a("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", Ee));
      }
      var Be = h.getDerivedStateFromProps;
      typeof Be == "function" && (l.state = Xc(l, h, Be, F, S)), typeof h.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (Gc(h, l), Zc(Q, l, S, C));
    }
    var Co = {
      id: 1,
      overflow: ""
    };
    function Qc(l) {
      var h = l.overflow, S = l.id, C = S & ~Jc(S);
      return C.toString(32) + h;
    }
    function Nl(l, h, S) {
      var C = l.id, F = l.overflow, Q = Ao(C) - 1, de = C & ~(1 << Q), Ee = S + 1, Be = Ao(h) + Q;
      if (Be > 30) {
        var tt = Q - Q % 5, ut = (1 << tt) - 1, xt = (de & ut).toString(32), cn = de >> tt, Bn = Q - tt, cr = Ao(h) + Bn, yu = Ee << Bn, vu = yu | cn, xu = xt + F;
        return {
          id: 1 << cr | vu,
          overflow: xu
        };
      } else {
        var Vo = Ee << Q, gy = Vo | de, yy = F;
        return {
          id: 1 << Be | gy,
          overflow: yy
        };
      }
    }
    function Ao(l) {
      return 32 - ed(l);
    }
    function Jc(l) {
      return 1 << Ao(l) - 1;
    }
    var ed = Math.clz32 ? Math.clz32 : Mr, td = Math.log, nd = Math.LN2;
    function Mr(l) {
      var h = l >>> 0;
      return h === 0 ? 32 : 31 - (td(h) / nd | 0) | 0;
    }
    function Fl(l, h) {
      return l === h && (l !== 0 || 1 / l === 1 / h) || l !== l && h !== h;
    }
    var Po = typeof Object.is == "function" ? Object.is : Fl, Vt = null, sa = null, ua = null, en = null, lr = !1, ca = !1, Ro = 0, $n = null, _r = 0, da = 25, Tr = !1, fa;
    function Nr() {
      if (Vt === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Tr && a("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Vt;
    }
    function rd(l, h) {
      if (h === null)
        return a("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", fa), !1;
      l.length !== h.length && a(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, fa, "[" + l.join(", ") + "]", "[" + h.join(", ") + "]");
      for (var S = 0; S < h.length && S < l.length; S++)
        if (!Po(l[S], h[S]))
          return !1;
      return !0;
    }
    function Gs() {
      if (_r > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function Lo() {
      return en === null ? ua === null ? (lr = !1, ua = en = Gs()) : (lr = !0, en = ua) : en.next === null ? (lr = !1, en = en.next = Gs()) : (lr = !0, en = en.next), en;
    }
    function zl(l, h) {
      Vt = h, sa = l, Tr = !1, Ro = 0;
    }
    function ad(l, h, S, C) {
      for (; ca; )
        ca = !1, Ro = 0, _r += 1, en = null, S = l(h, C);
      return gi(), S;
    }
    function Zs() {
      var l = Ro !== 0;
      return l;
    }
    function gi() {
      Tr = !1, Vt = null, sa = null, ca = !1, ua = null, _r = 0, $n = null, en = null;
    }
    function id(l) {
      return Tr && a("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Ma(l);
    }
    function Qs(l) {
      return fa = "useContext", Nr(), Ma(l);
    }
    function Do(l, h) {
      return typeof h == "function" ? h(l) : h;
    }
    function od(l) {
      return fa = "useState", Js(
        Do,
        // useReducer has a special case to support lazy useState initializers
        l
      );
    }
    function Js(l, h, S) {
      if (l !== Do && (fa = "useReducer"), Vt = Nr(), en = Lo(), lr) {
        var C = en.queue, F = C.dispatch;
        if ($n !== null) {
          var Q = $n.get(C);
          if (Q !== void 0) {
            $n.delete(C);
            var de = en.memoizedState, Ee = Q;
            do {
              var Be = Ee.action;
              Tr = !0, de = l(de, Be), Tr = !1, Ee = Ee.next;
            } while (Ee !== null);
            return en.memoizedState = de, [de, F];
          }
        }
        return [en.memoizedState, F];
      } else {
        Tr = !0;
        var tt;
        l === Do ? tt = typeof h == "function" ? h() : h : tt = S !== void 0 ? S(h) : h, Tr = !1, en.memoizedState = tt;
        var ut = en.queue = {
          last: null,
          dispatch: null
        }, xt = ut.dispatch = ud.bind(null, Vt, ut);
        return [en.memoizedState, xt];
      }
    }
    function eu(l, h) {
      Vt = Nr(), en = Lo();
      var S = h === void 0 ? null : h;
      if (en !== null) {
        var C = en.memoizedState;
        if (C !== null && S !== null) {
          var F = C[1];
          if (rd(S, F))
            return C[0];
        }
      }
      Tr = !0;
      var Q = l();
      return Tr = !1, en.memoizedState = [Q, S], Q;
    }
    function ld(l) {
      Vt = Nr(), en = Lo();
      var h = en.memoizedState;
      if (h === null) {
        var S = {
          current: l
        };
        return Object.seal(S), en.memoizedState = S, S;
      } else
        return h;
    }
    function sd(l, h) {
      fa = "useLayoutEffect", a("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function ud(l, h, S) {
      if (_r >= da)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (l === Vt) {
        ca = !0;
        var C = {
          action: S,
          next: null
        };
        $n === null && ($n = /* @__PURE__ */ new Map());
        var F = $n.get(h);
        if (F === void 0)
          $n.set(h, C);
        else {
          for (var Q = F; Q.next !== null; )
            Q = Q.next;
          Q.next = C;
        }
      }
    }
    function cd(l, h) {
      return eu(function() {
        return l;
      }, h);
    }
    function dd(l, h, S) {
      return Nr(), h(l._source);
    }
    function fd(l, h, S) {
      if (S === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return S();
    }
    function hd(l) {
      return Nr(), l;
    }
    function Oo() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function tu() {
      return Nr(), [!1, Oo];
    }
    function $l() {
      var l = sa, h = Qc(l.treeContext), S = vi;
      if (S === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var C = Ro++;
      return xn(S, h, C);
    }
    function yi() {
    }
    var nu = {
      readContext: id,
      useContext: Qs,
      useMemo: eu,
      useReducer: Js,
      useRef: ld,
      useState: od,
      useInsertionEffect: yi,
      useLayoutEffect: sd,
      useCallback: cd,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: yi,
      // Effects are not run in the server environment.
      useEffect: yi,
      // Debugging effect
      useDebugValue: yi,
      useDeferredValue: hd,
      useTransition: tu,
      useId: $l,
      // Subscriptions are not setup in a server environment.
      useMutableSource: dd,
      useSyncExternalStore: fd
    }, vi = null;
    function Mo(l) {
      vi = l;
    }
    function Bl(l) {
      try {
        var h = "", S = l;
        do {
          switch (S.tag) {
            case 0:
              h += ui(S.type, null, null);
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
    var jr = r.ReactCurrentDispatcher, _o = r.ReactDebugCurrentFrame, No = 0, ha = 1, ru = 2, Il = 3, pa = 4, pd = 0, au = 1, Cr = 2, md = 12800;
    function gd(l) {
      return console.error(l), null;
    }
    function xi() {
    }
    function Hl(l, h, S, C, F, Q, de, Ee, Be) {
      var tt = [], ut = /* @__PURE__ */ new Set(), xt = {
        destination: null,
        responseState: h,
        progressiveChunkSize: C === void 0 ? md : C,
        status: pd,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: ut,
        pingedTasks: tt,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: F === void 0 ? gd : F,
        onAllReady: Q === void 0 ? xi : Q,
        onShellReady: de === void 0 ? xi : de,
        onShellError: Ee === void 0 ? xi : Ee,
        onFatalError: Be === void 0 ? xi : Be
      }, cn = Ur(
        xt,
        0,
        null,
        S,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      cn.parentFlushed = !0;
      var Bn = bi(xt, l, null, cn, ut, Vr, Dl, Co);
      return tt.push(Bn), xt;
    }
    function Fo(l, h) {
      var S = l.pingedTasks;
      S.push(h), S.length === 1 && f(function() {
        return mu(l);
      });
    }
    function Fr(l, h) {
      return {
        id: Pn,
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
    function bi(l, h, S, C, F, Q, de, Ee) {
      l.allPendingTasks++, S === null ? l.pendingRootTasks++ : S.pendingTasks++;
      var Be = {
        node: h,
        ping: function() {
          return Fo(l, Be);
        },
        blockedBoundary: S,
        blockedSegment: C,
        abortSet: F,
        legacyContext: Q,
        context: de,
        treeContext: Ee
      };
      return Be.componentStack = null, F.add(Be), Be;
    }
    function Ur(l, h, S, C, F, Q) {
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
        textEmbedded: Q
      };
    }
    var Ar = null;
    function Wl() {
      return Ar === null || Ar.componentStack === null ? "" : Bl(Ar.componentStack);
    }
    function sr(l, h) {
      l.componentStack = {
        tag: 0,
        parent: l.componentStack,
        type: h
      };
    }
    function Fa(l, h) {
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
    function ur(l) {
      l.componentStack === null ? a("Unexpectedly popped too many stack frames. This is a bug in React.") : l.componentStack = l.componentStack.parent;
    }
    var Kr = null;
    function jl(l, h) {
      {
        var S;
        typeof h == "string" ? S = h : h && typeof h.message == "string" ? S = h.message : S = String(h);
        var C = Kr || Wl();
        Kr = null, l.errorMessage = S, l.errorComponentStack = C;
      }
    }
    function Si(l, h) {
      var S = l.onError(h);
      if (S != null && typeof S != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof S + '" instead');
      return S;
    }
    function zo(l, h) {
      var S = l.onShellError;
      S(h);
      var C = l.onFatalError;
      C(h), l.destination !== null ? (l.status = Cr, E(l.destination, h)) : (l.status = au, l.fatalError = h);
    }
    function iu(l, h, S) {
      sr(h, "Suspense");
      var C = h.blockedBoundary, F = h.blockedSegment, Q = S.fallback, de = S.children, Ee = /* @__PURE__ */ new Set(), Be = Fr(l, Ee), tt = F.chunks.length, ut = Ur(
        l,
        tt,
        Be,
        F.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      F.children.push(ut), F.lastPushedText = !1;
      var xt = Ur(
        l,
        0,
        null,
        F.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      xt.parentFlushed = !0, h.blockedBoundary = Be, h.blockedSegment = xt;
      try {
        if ($o(l, h, de), Ms(xt.chunks, l.responseState, xt.lastPushedText, xt.textEmbedded), xt.status = ha, wi(Be, xt), Be.pendingTasks === 0) {
          ur(h);
          return;
        }
      } catch (Bn) {
        xt.status = pa, Be.forceClientRender = !0, Be.errorDigest = Si(l, Bn), jl(Be, Bn);
      } finally {
        h.blockedBoundary = C, h.blockedSegment = F;
      }
      var cn = bi(l, Q, C, ut, Ee, h.legacyContext, h.context, h.treeContext);
      cn.componentStack = h.componentStack, l.pingedTasks.push(cn), ur(h);
    }
    function ou(l, h, S, C) {
      sr(h, S);
      var F = h.blockedSegment, Q = Er(F.chunks, S, C, l.responseState, F.formatContext);
      F.lastPushedText = !1;
      var de = F.formatContext;
      F.formatContext = Vn(de, S, C), $o(l, h, Q), F.formatContext = de, Qn(F.chunks, S), F.lastPushedText = !1, ur(h);
    }
    function yd(l) {
      return l.prototype && l.prototype.isReactComponent;
    }
    function Ul(l, h, S, C, F) {
      var Q = {};
      zl(h, Q);
      var de = S(C, F);
      return ad(S, C, de, F);
    }
    function Ei(l, h, S, C, F) {
      var Q = S.render();
      S.props !== F && (ql || a("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", fn(C) || "a component"), ql = !0);
      {
        var de = C.childContextTypes;
        if (de != null) {
          var Ee = h.legacyContext, Be = oa(S, C, Ee, de);
          h.legacyContext = Be, rr(l, h, Q), h.legacyContext = Ee;
          return;
        }
      }
      rr(l, h, Q);
    }
    function lu(l, h, S, C) {
      Vl(h, S);
      var F = Vs(S, h.legacyContext), Q = qc(S, C, F);
      To(Q, S, C, F), Ei(l, h, Q, S, C), ur(h);
    }
    var Kl = {}, ki = {}, Yl = {}, Xl = {}, ql = !1, su = !1, uu = !1, Gl = !1;
    function vd(l, h, S, C) {
      var F;
      if (F = Vs(S, h.legacyContext), Fa(h, S), S.prototype && typeof S.prototype.render == "function") {
        var Q = fn(S) || "Unknown";
        Kl[Q] || (a("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", Q, Q), Kl[Q] = !0);
      }
      var de = Ul(l, h, S, C, F), Ee = Zs();
      if (typeof de == "object" && de !== null && typeof de.render == "function" && de.$$typeof === void 0) {
        var Be = fn(S) || "Unknown";
        ki[Be] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", Be, Be, Be), ki[Be] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof de == "object" && de !== null && typeof de.render == "function" && de.$$typeof === void 0
      ) {
        {
          var tt = fn(S) || "Unknown";
          ki[tt] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", tt, tt, tt), ki[tt] = !0);
        }
        To(de, S, C, F), Ei(l, h, de, S, C);
      } else if (xd(S), Ee) {
        var ut = h.treeContext, xt = 1, cn = 0;
        h.treeContext = Nl(ut, xt, cn);
        try {
          rr(l, h, de);
        } finally {
          h.treeContext = ut;
        }
      } else
        rr(l, h, de);
      ur(h);
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
        var S = tr({}, h), C = l.defaultProps;
        for (var F in C)
          S[F] === void 0 && (S[F] = C[F]);
        return S;
      }
      return h;
    }
    function bd(l, h, S, C, F) {
      Fa(h, S.render);
      var Q = Ul(l, h, S.render, C, F), de = Zs();
      if (de) {
        var Ee = h.treeContext, Be = 1, tt = 0;
        h.treeContext = Nl(Ee, Be, tt);
        try {
          rr(l, h, Q);
        } finally {
          h.treeContext = Ee;
        }
      } else
        rr(l, h, Q);
      ur(h);
    }
    function Sd(l, h, S, C, F) {
      var Q = S.type, de = cu(Q, C);
      Ql(l, h, Q, de, F);
    }
    function Zl(l, h, S, C) {
      S._context === void 0 ? S !== S.Consumer && (Gl || (Gl = !0, a("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : S = S._context;
      var F = C.children;
      typeof F != "function" && a("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var Q = Ma(S), de = F(Q);
      rr(l, h, de);
    }
    function Ed(l, h, S, C) {
      var F = S._context, Q = C.value, de = C.children, Ee;
      Ee = h.context, h.context = hi(F, Q), rr(l, h, de), h.context = Ml(F), Ee !== h.context && a("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function nr(l, h, S, C, F) {
      sr(h, "Lazy");
      var Q = S._payload, de = S._init, Ee = de(Q), Be = cu(Ee, C);
      Ql(l, h, Ee, Be, F), ur(h);
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
        case lo:
        case so:
        case oo: {
          rr(l, h, C.children);
          return;
        }
        case gl: {
          sr(h, "SuspenseList"), rr(l, h, C.children), ur(h);
          return;
        }
        case jc:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case Ra: {
          iu(l, h, C);
          return;
        }
      }
      if (typeof S == "object" && S !== null)
        switch (S.$$typeof) {
          case ii: {
            bd(l, h, S, C, F);
            return;
          }
          case yl: {
            Sd(l, h, S, C, F);
            return;
          }
          case ri: {
            Ed(l, h, S, C);
            return;
          }
          case ai: {
            Zl(l, h, S, C);
            return;
          }
          case uo: {
            nr(l, h, S, C);
            return;
          }
        }
      var Q = "";
      throw (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (Q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (S == null ? S : typeof S) + "." + Q));
    }
    function du(l, h) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      l[Symbol.toStringTag] === "Generator" && (su || a("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), su = !0), l.entries === h && (uu || a("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), uu = !0);
    }
    function rr(l, h, S) {
      try {
        return Jl(l, h, S);
      } catch (C) {
        throw typeof C == "object" && C !== null && typeof C.then == "function" || (Kr = Kr !== null ? Kr : Wl()), C;
      }
    }
    function Jl(l, h, S) {
      if (h.node = S, typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Ns: {
            var C = S, F = C.type, Q = C.props, de = C.ref;
            Ql(l, h, F, Q, de);
            return;
          }
          case ml:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case uo: {
            var Ee = S, Be = Ee._payload, tt = Ee._init, ut;
            try {
              ut = tt(Be);
            } catch (Vo) {
              throw typeof Vo == "object" && Vo !== null && typeof Vo.then == "function" && sr(h, "Lazy"), Vo;
            }
            rr(l, h, ut);
            return;
          }
        }
        if (at(S)) {
          fu(l, h, S);
          return;
        }
        var xt = mn(S);
        if (xt) {
          du(S, xt);
          var cn = xt.call(S);
          if (cn) {
            var Bn = cn.next();
            if (!Bn.done) {
              var cr = [];
              do
                cr.push(Bn.value), Bn = cn.next();
              while (!Bn.done);
              fu(l, h, cr);
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
        var Q = h.treeContext;
        h.treeContext = Nl(Q, C, F);
        try {
          $o(l, h, S[F]);
        } finally {
          h.treeContext = Q;
        }
      }
    }
    function kd(l, h, S) {
      var C = h.blockedSegment, F = C.chunks.length, Q = Ur(
        l,
        F,
        null,
        C.formatContext,
        // Adopt the parent segment's leading text embed
        C.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      C.children.push(Q), C.lastPushedText = !1;
      var de = bi(l, h.node, h.blockedBoundary, Q, h.abortSet, h.legacyContext, h.context, h.treeContext);
      h.componentStack !== null && (de.componentStack = h.componentStack.parent);
      var Ee = de.ping;
      S.then(Ee, Ee);
    }
    function $o(l, h, S) {
      var C = h.blockedSegment.formatContext, F = h.legacyContext, Q = h.context, de = null;
      de = h.componentStack;
      try {
        return rr(l, h, S);
      } catch (Ee) {
        if (gi(), typeof Ee == "object" && Ee !== null && typeof Ee.then == "function") {
          kd(l, h, Ee), h.blockedSegment.formatContext = C, h.legacyContext = F, h.context = Q, go(Q), h.componentStack = de;
          return;
        } else
          throw h.blockedSegment.formatContext = C, h.legacyContext = F, h.context = Q, go(Q), h.componentStack = de, Ee;
      }
    }
    function Bo(l, h, S, C) {
      var F = Si(l, C);
      if (h === null ? zo(l, C) : (h.pendingTasks--, h.forceClientRender || (h.forceClientRender = !0, h.errorDigest = F, jl(h, C), h.parentFlushed && l.clientRenderedBoundaries.push(h))), l.allPendingTasks--, l.allPendingTasks === 0) {
        var Q = l.onAllReady;
        Q();
      }
    }
    function hu(l) {
      var h = this, S = l.blockedBoundary, C = l.blockedSegment;
      C.status = Il, Ti(h, S, C);
    }
    function pu(l, h, S) {
      var C = l.blockedBoundary, F = l.blockedSegment;
      if (F.status = Il, C === null)
        h.allPendingTasks--, h.status !== Cr && (h.status = Cr, h.destination !== null && v(h.destination));
      else {
        if (C.pendingTasks--, !C.forceClientRender) {
          C.forceClientRender = !0;
          var Q = S === void 0 ? new Error("The render was aborted by the server without a reason.") : S;
          C.errorDigest = h.onError(Q);
          {
            var de = "The server did not finish this Suspense boundary: ";
            Q && typeof Q.message == "string" ? Q = de + Q.message : Q = de + String(Q);
            var Ee = Ar;
            Ar = l;
            try {
              jl(C, Q);
            } finally {
              Ar = Ee;
            }
          }
          C.parentFlushed && h.clientRenderedBoundaries.push(C);
        }
        if (C.fallbackAbortableTasks.forEach(function(tt) {
          return pu(tt, h, S);
        }), C.fallbackAbortableTasks.clear(), h.allPendingTasks--, h.allPendingTasks === 0) {
          var Be = h.onAllReady;
          Be();
        }
      }
    }
    function wi(l, h) {
      if (h.chunks.length === 0 && h.children.length === 1 && h.children[0].boundary === null) {
        var S = h.children[0];
        S.id = h.id, S.parentFlushed = !0, S.status === ha && wi(l, S);
      } else {
        var C = l.completedSegments;
        C.push(h);
      }
    }
    function Ti(l, h, S) {
      if (h === null) {
        if (S.parentFlushed) {
          if (l.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          l.completedRootSegment = S;
        }
        if (l.pendingRootTasks--, l.pendingRootTasks === 0) {
          l.onShellError = xi;
          var C = l.onShellReady;
          C();
        }
      } else if (h.pendingTasks--, !h.forceClientRender) {
        if (h.pendingTasks === 0)
          S.parentFlushed && S.status === ha && wi(h, S), h.parentFlushed && l.completedBoundaries.push(h), h.fallbackAbortableTasks.forEach(hu, l), h.fallbackAbortableTasks.clear();
        else if (S.parentFlushed && S.status === ha) {
          wi(h, S);
          var F = h.completedSegments;
          F.length === 1 && h.parentFlushed && l.partialBoundaries.push(h);
        }
      }
      if (l.allPendingTasks--, l.allPendingTasks === 0) {
        var Q = l.onAllReady;
        Q();
      }
    }
    function Io(l, h) {
      var S = h.blockedSegment;
      if (S.status === No) {
        go(h.context);
        var C = null;
        C = Ar, Ar = h;
        try {
          rr(l, h, h.node), Ms(S.chunks, l.responseState, S.lastPushedText, S.textEmbedded), h.abortSet.delete(h), S.status = ha, Ti(l, h.blockedBoundary, S);
        } catch (Q) {
          if (gi(), typeof Q == "object" && Q !== null && typeof Q.then == "function") {
            var F = h.ping;
            Q.then(F, F);
          } else
            h.abortSet.delete(h), S.status = pa, Bo(l, h.blockedBoundary, S, Q);
        } finally {
          Ar = C;
        }
      }
    }
    function mu(l) {
      if (l.status !== Cr) {
        var h = Yc(), S = jr.current;
        jr.current = nu;
        var C;
        C = _o.getCurrentStack, _o.getCurrentStack = Wl;
        var F = vi;
        Mo(l.responseState);
        try {
          var Q = l.pingedTasks, de;
          for (de = 0; de < Q.length; de++) {
            var Ee = Q[de];
            Io(l, Ee);
          }
          Q.splice(0, de), l.destination !== null && Wo(l, l.destination);
        } catch (Be) {
          Si(l, Be), zo(l, Be);
        } finally {
          Mo(F), jr.current = S, _o.getCurrentStack = C, S === nu && go(h);
        }
      }
    }
    function Ci(l, h, S) {
      switch (S.parentFlushed = !0, S.status) {
        case No: {
          var C = S.id = l.nextSegmentId++;
          return S.lastPushedText = !1, S.textEmbedded = !1, Yi(h, l.responseState, C);
        }
        case ha: {
          S.status = ru;
          for (var F = !0, Q = S.chunks, de = 0, Ee = S.children, Be = 0; Be < Ee.length; Be++) {
            for (var tt = Ee[Be]; de < tt.index; de++)
              c(h, Q[de]);
            F = Ai(l, h, tt);
          }
          for (; de < Q.length - 1; de++)
            c(h, Q[de]);
          return de < Q.length && (F = d(h, Q[de])), F;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function Ai(l, h, S) {
      var C = S.boundary;
      if (C === null)
        return Ci(l, h, S);
      if (C.parentFlushed = !0, C.forceClientRender)
        return or(h, l.responseState, C.errorDigest, C.errorMessage, C.errorComponentStack), Ci(l, h, S), _s(h, l.responseState);
      if (C.pendingTasks > 0) {
        C.rootSegmentID = l.nextSegmentId++, C.completedSegments.length > 0 && l.partialBoundaries.push(C);
        var F = C.id = zn(l.responseState);
        return Wr(h, l.responseState, F), Ci(l, h, S), ei(h, l.responseState);
      } else {
        if (C.byteSize > l.progressiveChunkSize)
          return C.rootSegmentID = l.nextSegmentId++, l.completedBoundaries.push(C), Wr(h, l.responseState, C.id), Ci(l, h, S), ei(h, l.responseState);
        pl(h, l.responseState);
        var Q = C.completedSegments;
        if (Q.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var de = Q[0];
        return Ai(l, h, de), Vc(h, l.responseState);
      }
    }
    function wd(l, h, S) {
      return Ic(h, l.responseState, S.id, S.errorDigest, S.errorMessage, S.errorComponentStack);
    }
    function es(l, h, S) {
      return ve(h, l.responseState, S.formatContext, S.id), Ai(l, h, S), Fe(h, S.formatContext);
    }
    function Ho(l, h, S) {
      for (var C = S.completedSegments, F = 0; F < C.length; F++) {
        var Q = C[F];
        gu(l, h, S, Q);
      }
      return C.length = 0, Nc(h, l.responseState, S.id, S.rootSegmentID);
    }
    function Td(l, h, S) {
      for (var C = S.completedSegments, F = 0; F < C.length; F++) {
        var Q = C[F];
        if (!gu(l, h, S, Q))
          return F++, C.splice(0, F), !1;
      }
      return C.splice(0, F), !0;
    }
    function gu(l, h, S, C) {
      if (C.status === ru)
        return !0;
      var F = C.id;
      if (F === -1) {
        var Q = C.id = S.rootSegmentID;
        if (Q === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return es(l, h, C);
      } else
        return es(l, h, C), er(h, l.responseState, F);
    }
    function Wo(l, h) {
      try {
        var S = l.completedRootSegment;
        S !== null && l.pendingRootTasks === 0 && (Ai(l, h, S), l.completedRootSegment = null, Ga(h, l.responseState));
        var C = l.clientRenderedBoundaries, F;
        for (F = 0; F < C.length; F++) {
          var Q = C[F];
          if (!wd(l, h, Q)) {
            l.destination = null, F++, C.splice(0, F);
            return;
          }
        }
        C.splice(0, F);
        var de = l.completedBoundaries;
        for (F = 0; F < de.length; F++) {
          var Ee = de[F];
          if (!Ho(l, h, Ee)) {
            l.destination = null, F++, de.splice(0, F);
            return;
          }
        }
        de.splice(0, F);
        var Be = l.partialBoundaries;
        for (F = 0; F < Be.length; F++) {
          var tt = Be[F];
          if (!Td(l, h, tt)) {
            l.destination = null, F++, Be.splice(0, F);
            return;
          }
        }
        Be.splice(0, F);
        var ut = l.completedBoundaries;
        for (F = 0; F < ut.length; F++) {
          var xt = ut[F];
          if (!Ho(l, h, xt)) {
            l.destination = null, F++, ut.splice(0, F);
            return;
          }
        }
        ut.splice(0, F);
      } finally {
        l.allPendingTasks === 0 && l.pingedTasks.length === 0 && l.clientRenderedBoundaries.length === 0 && l.completedBoundaries.length === 0 && (l.abortableTasks.size !== 0 && a("There was still abortable task at the root when we closed. This is a bug in React."), v(h));
      }
    }
    function Cd(l) {
      f(function() {
        return mu(l);
      });
    }
    function u(l, h) {
      if (l.status === au) {
        l.status = Cr, E(h, l.fatalError);
        return;
      }
      if (l.status !== Cr && l.destination === null) {
        l.destination = h;
        try {
          Wo(l, h);
        } catch (S) {
          Si(l, S), zo(l, S);
        }
      }
    }
    function p(l, h) {
      try {
        var S = l.abortableTasks;
        S.forEach(function(C) {
          return pu(C, l, h);
        }), S.clear(), l.destination !== null && Wo(l, l.destination);
      } catch (C) {
        Si(l, C), zo(l, C);
      }
    }
    function w() {
    }
    function D(l, h, S, C) {
      var F = !1, Q = null, de = "", Ee = {
        push: function(xt) {
          return xt !== null && (de += xt), !0;
        },
        destroy: function(xt) {
          F = !0, Q = xt;
        }
      }, Be = !1;
      function tt() {
        Be = !0;
      }
      var ut = Hl(l, Wc(S, h ? h.identifierPrefix : void 0), hl(), 1 / 0, w, void 0, tt, void 0, void 0);
      if (Cd(ut), p(ut, C), u(ut, Ee), F)
        throw Q;
      if (!Be)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return de;
    }
    function H(l, h) {
      return D(l, h, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function re(l, h) {
      return D(l, h, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function pe() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function we() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    Mi.renderToNodeStream = pe, Mi.renderToStaticMarkup = re, Mi.renderToStaticNodeStream = we, Mi.renderToString = H, Mi.version = t;
  }()), Mi;
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
var am;
function AE() {
  return am || (am = 1, process.env.NODE_ENV !== "production" && function() {
    var e = se, t = "18.2.0", r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(u) {
      {
        for (var p = arguments.length, w = new Array(p > 1 ? p - 1 : 0), D = 1; D < p; D++)
          w[D - 1] = arguments[D];
        o("warn", u, w);
      }
    }
    function a(u) {
      {
        for (var p = arguments.length, w = new Array(p > 1 ? p - 1 : 0), D = 1; D < p; D++)
          w[D - 1] = arguments[D];
        o("error", u, w);
      }
    }
    function o(u, p, w) {
      {
        var D = r.ReactDebugCurrentFrame, H = D.getStackAddendum();
        H !== "" && (p += "%s", w = w.concat([H]));
        var re = w.map(function(pe) {
          return String(pe);
        });
        re.unshift("Warning: " + p), Function.prototype.apply.call(console[u], console, re);
      }
    }
    function f(u) {
      u();
    }
    var s = 512, c = null, d = 0;
    function g(u) {
      c = new Uint8Array(s), d = 0;
    }
    function v(u, p) {
      if (p.length !== 0) {
        if (p.length > s) {
          d > 0 && (u.enqueue(new Uint8Array(c.buffer, 0, d)), c = new Uint8Array(s), d = 0), u.enqueue(p);
          return;
        }
        var w = p, D = c.length - d;
        D < w.length && (D === 0 ? u.enqueue(c) : (c.set(w.subarray(0, D), d), u.enqueue(c), w = w.subarray(D)), c = new Uint8Array(s), d = 0), c.set(w, d), d += w.length;
      }
    }
    function y(u, p) {
      return v(u, p), !0;
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
    function L(u, p) {
      typeof u.error == "function" ? u.error(p) : u.close();
    }
    function O(u) {
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
        return a("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", p, O(u)), N(u);
    }
    function j(u, p) {
      if (_(u))
        return a("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", p, O(u)), N(u);
    }
    function B(u) {
      if (_(u))
        return a("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", O(u)), N(u);
    }
    var V = Object.prototype.hasOwnProperty, q = 0, Y = 1, U = 2, te = 3, me = 4, I = 5, le = 6, ue = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", fe = ue + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ae = new RegExp("^[" + ue + "][" + fe + "]*$"), W = {}, Z = {};
    function ee(u) {
      return V.call(Z, u) ? !0 : V.call(W, u) ? !1 : ae.test(u) ? (Z[u] = !0, !0) : (W[u] = !0, a("Invalid attribute name: `%s`", u), !1);
    }
    function Ae(u, p, w, D) {
      if (w !== null && w.type === q)
        return !1;
      switch (typeof p) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (D)
            return !1;
          if (w !== null)
            return !w.acceptsBooleans;
          var H = u.toLowerCase().slice(0, 5);
          return H !== "data-" && H !== "aria-";
        }
        default:
          return !1;
      }
    }
    function xe(u) {
      return oe.hasOwnProperty(u) ? oe[u] : null;
    }
    function De(u, p, w, D, H, re, pe) {
      this.acceptsBooleans = p === U || p === te || p === me, this.attributeName = D, this.attributeNamespace = H, this.mustUseProperty = w, this.propertyName = u, this.type = p, this.sanitizeURL = re, this.removeEmptyString = pe;
    }
    var oe = {}, ze = [
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
    ze.forEach(function(u) {
      oe[u] = new De(
        u,
        q,
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
      oe[p] = new De(
        p,
        Y,
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
      oe[u] = new De(
        u,
        U,
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
      oe[u] = new De(
        u,
        U,
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
      oe[u] = new De(
        u,
        te,
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
      oe[u] = new De(
        u,
        te,
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
      oe[u] = new De(
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
      oe[u] = new De(
        u,
        le,
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
      oe[u] = new De(
        u,
        I,
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
    var He = /[\-\:]([a-z])/g, Ce = function(u) {
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
      var p = u.replace(He, Ce);
      oe[p] = new De(
        p,
        Y,
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
      var p = u.replace(He, Ce);
      oe[p] = new De(
        p,
        Y,
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
      var p = u.replace(He, Ce);
      oe[p] = new De(
        p,
        Y,
        !1,
        // mustUseProperty
        u,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(u) {
      oe[u] = new De(
        u,
        Y,
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
    oe[ge] = new De(
      "xlinkHref",
      Y,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(u) {
      oe[u] = new De(
        u,
        Y,
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
    var Oe = {
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
    function ie(u, p) {
      return u + p.charAt(0).toUpperCase() + p.substring(1);
    }
    var ke = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Oe).forEach(function(u) {
      ke.forEach(function(p) {
        Oe[ie(p, u)] = Oe[u];
      });
    });
    var Pe = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function We(u, p) {
      Pe[p.type] || p.onChange || p.onInput || p.readOnly || p.disabled || p.value == null || a("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), p.onChange || p.readOnly || p.disabled || p.checked == null || a("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Ye(u, p) {
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
    }, lt = {}, st = new RegExp("^(aria)-[" + fe + "]*$"), it = new RegExp("^(aria)[A-Z][" + fe + "]*$");
    function Je(u, p) {
      {
        if (V.call(lt, p) && lt[p])
          return !0;
        if (it.test(p)) {
          var w = "aria-" + p.slice(4).toLowerCase(), D = qe.hasOwnProperty(w) ? w : null;
          if (D == null)
            return a("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", p), lt[p] = !0, !0;
          if (p !== D)
            return a("Invalid ARIA attribute `%s`. Did you mean `%s`?", p, D), lt[p] = !0, !0;
        }
        if (st.test(p)) {
          var H = p.toLowerCase(), re = qe.hasOwnProperty(H) ? H : null;
          if (re == null)
            return lt[p] = !0, !1;
          if (p !== re)
            return a("Unknown ARIA attribute `%s`. Did you mean `%s`?", p, re), lt[p] = !0, !0;
        }
      }
      return !0;
    }
    function Ie(u, p) {
      {
        var w = [];
        for (var D in p) {
          var H = Je(u, D);
          H || w.push(D);
        }
        var re = w.map(function(pe) {
          return "`" + pe + "`";
        }).join(", ");
        w.length === 1 ? a("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", re, u) : w.length > 1 && a("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", re, u);
      }
    }
    function $e(u, p) {
      Ye(u, p) || Ie(u, p);
    }
    var ft = !1;
    function Ke(u, p) {
      {
        if (u !== "input" && u !== "textarea" && u !== "select")
          return;
        p != null && p.value === null && !ft && (ft = !0, u === "select" && p.multiple ? a("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", u) : a("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", u));
      }
    }
    var Qe = {
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
    }, ct = function() {
    };
    {
      var ht = {}, At = /^on./, an = /^on[^A-Z]/, Zt = new RegExp("^(aria)-[" + fe + "]*$"), Ot = new RegExp("^(aria)[A-Z][" + fe + "]*$");
      ct = function(u, p, w, D) {
        if (V.call(ht, p) && ht[p])
          return !0;
        var H = p.toLowerCase();
        if (H === "onfocusin" || H === "onfocusout")
          return a("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ht[p] = !0, !0;
        if (D != null) {
          var re = D.registrationNameDependencies, pe = D.possibleRegistrationNames;
          if (re.hasOwnProperty(p))
            return !0;
          var we = pe.hasOwnProperty(H) ? pe[H] : null;
          if (we != null)
            return a("Invalid event handler property `%s`. Did you mean `%s`?", p, we), ht[p] = !0, !0;
          if (At.test(p))
            return a("Unknown event handler property `%s`. It will be ignored.", p), ht[p] = !0, !0;
        } else if (At.test(p))
          return an.test(p) && a("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", p), ht[p] = !0, !0;
        if (Zt.test(p) || Ot.test(p))
          return !0;
        if (H === "innerhtml")
          return a("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ht[p] = !0, !0;
        if (H === "aria")
          return a("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ht[p] = !0, !0;
        if (H === "is" && w !== null && w !== void 0 && typeof w != "string")
          return a("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof w), ht[p] = !0, !0;
        if (typeof w == "number" && isNaN(w))
          return a("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", p), ht[p] = !0, !0;
        var l = xe(p), h = l !== null && l.type === q;
        if (Qe.hasOwnProperty(H)) {
          var S = Qe[H];
          if (S !== p)
            return a("Invalid DOM property `%s`. Did you mean `%s`?", p, S), ht[p] = !0, !0;
        } else if (!h && p !== H)
          return a("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", p, H), ht[p] = !0, !0;
        return typeof w == "boolean" && Ae(p, w, l, !1) ? (w ? a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', w, p, p, w, p) : a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', w, p, p, w, p, p, p), ht[p] = !0, !0) : h ? !0 : Ae(p, w, l, !1) ? (ht[p] = !0, !1) : ((w === "false" || w === "true") && l !== null && l.type === te && (a("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", w, p, w === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', p, w), ht[p] = !0), !0);
      };
    }
    var zt = function(u, p, w) {
      {
        var D = [];
        for (var H in p) {
          var re = ct(u, H, p[H], w);
          re || D.push(H);
        }
        var pe = D.map(function(we) {
          return "`" + we + "`";
        }).join(", ");
        D.length === 1 ? a("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", pe, u) : D.length > 1 && a("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", pe, u);
      }
    };
    function tn(u, p, w) {
      Ye(u, p) || zt(u, p, w);
    }
    var hn = function() {
    };
    {
      var un = /^(?:webkit|moz|o)[A-Z]/, Sn = /^-ms-/, Lt = /-(.)/g, on = /;\s*$/, _e = {}, ln = {}, Pt = !1, Rt = !1, Ln = function(u) {
        return u.replace(Lt, function(p, w) {
          return w.toUpperCase();
        });
      }, gn = function(u) {
        _e.hasOwnProperty(u) && _e[u] || (_e[u] = !0, a(
          "Unsupported style property %s. Did you mean %s?",
          u,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Ln(u.replace(Sn, "ms-"))
        ));
      }, kn = function(u) {
        _e.hasOwnProperty(u) && _e[u] || (_e[u] = !0, a("Unsupported vendor-prefixed style property %s. Did you mean %s?", u, u.charAt(0).toUpperCase() + u.slice(1)));
      }, Fn = function(u, p) {
        ln.hasOwnProperty(p) && ln[p] || (ln[p] = !0, a(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, u, p.replace(on, "")));
      }, Me = function(u, p) {
        Pt || (Pt = !0, a("`NaN` is an invalid value for the `%s` css style property.", u));
      }, Xe = function(u, p) {
        Rt || (Rt = !0, a("`Infinity` is an invalid value for the `%s` css style property.", u));
      };
      hn = function(u, p) {
        u.indexOf("-") > -1 ? gn(u) : un.test(u) ? kn(u) : on.test(p) && Fn(u, p), typeof p == "number" && (isNaN(p) ? Me(u, p) : isFinite(p) || Xe(u, p));
      };
    }
    var kt = hn, nt = /["'&<>]/;
    function K(u) {
      B(u);
      var p = "" + u, w = nt.exec(p);
      if (!w)
        return p;
      var D, H = "", re, pe = 0;
      for (re = w.index; re < p.length; re++) {
        switch (p.charCodeAt(re)) {
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
        pe !== re && (H += p.substring(pe, re)), pe = re + 1, H += D;
      }
      return pe !== re ? H + p.substring(pe, re) : H;
    }
    function Ne(u) {
      return typeof u == "boolean" || typeof u == "number" ? "" + u : K(u);
    }
    var et = /([A-Z])/g, Ue = /^ms-/;
    function yt(u) {
      return u.replace(et, "-$1").toLowerCase().replace(Ue, "-ms-");
    }
    var at = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, wt = !1;
    function $t(u) {
      !wt && at.test(u) && (wt = !0, a("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(u)));
    }
    var Ze = Array.isArray;
    function Bt(u) {
      return Ze(u);
    }
    var It = m("<script>"), vt = m("<\/script>"), Qt = m('<script src="'), qt = m('<script type="module" src="'), Mt = m('" async=""><\/script>');
    function Ht(u) {
      return B(u), ("" + u).replace(Xt, yn);
    }
    var Xt = /(<\/|<)(s)(cript)/gi, yn = function(u, p, w, D) {
      return "" + p + (w === "s" ? "\\u0073" : "\\u0053") + D;
    };
    function An(u, p, w, D, H) {
      var re = u === void 0 ? "" : u, pe = p === void 0 ? It : m('<script nonce="' + Ne(p) + '">'), we = [];
      if (w !== void 0 && we.push(pe, T(Ht(w)), vt), D !== void 0)
        for (var l = 0; l < D.length; l++)
          we.push(Qt, T(Ne(D[l])), Mt);
      if (H !== void 0)
        for (var h = 0; h < H.length; h++)
          we.push(qt, T(Ne(H[h])), Mt);
      return {
        bootstrapChunks: we,
        startInlineScript: pe,
        placeholderPrefix: m(re + "P:"),
        segmentPrefix: m(re + "S:"),
        boundaryPrefix: re + "B:",
        idPrefix: re,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var Ut = 0, Nt = 1, vn = 2, _t = 3, Kt = 4, Vn = 5, Pn = 6, zn = 7;
    function xn(u, p) {
      return {
        insertionMode: u,
        selectedValue: p
      };
    }
    function Jt(u) {
      var p = u === "http://www.w3.org/2000/svg" ? vn : u === "http://www.w3.org/1998/Math/MathML" ? _t : Ut;
      return xn(p, null);
    }
    function wn(u, p, w) {
      switch (p) {
        case "select":
          return xn(Nt, w.value != null ? w.value : w.defaultValue);
        case "svg":
          return xn(vn, null);
        case "math":
          return xn(_t, null);
        case "foreignObject":
          return xn(Nt, null);
        case "table":
          return xn(Kt, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return xn(Vn, null);
        case "colgroup":
          return xn(zn, null);
        case "tr":
          return xn(Pn, null);
      }
      return u.insertionMode >= Kt || u.insertionMode === Ut ? xn(Nt, null) : u;
    }
    var yr = null;
    function Lr(u) {
      var p = u.nextSuspenseID++;
      return m(u.boundaryPrefix + p.toString(16));
    }
    function fr(u, p, w) {
      var D = u.idPrefix, H = ":" + D + "R" + p;
      return w > 0 && (H += "H" + w.toString(32)), H + ":";
    }
    function Zn(u) {
      return Ne(u);
    }
    var vr = m("<!-- -->");
    function xr(u, p, w, D) {
      return p === "" ? D : (D && u.push(vr), u.push(T(Zn(p))), !0);
    }
    function br(u, p, w, D) {
      w && D && u.push(vr);
    }
    var x = /* @__PURE__ */ new Map();
    function A(u) {
      var p = x.get(u);
      if (p !== void 0)
        return p;
      var w = m(Ne(yt(u)));
      return x.set(u, w), w;
    }
    var $ = m(' style="'), X = m(":"), be = m(";");
    function ye(u, p, w) {
      if (typeof w != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var D = !0;
      for (var H in w)
        if (V.call(w, H)) {
          var re = w[H];
          if (!(re == null || typeof re == "boolean" || re === "")) {
            var pe = void 0, we = void 0, l = H.indexOf("--") === 0;
            l ? (pe = T(Ne(H)), j(re, H), we = T(Ne(("" + re).trim()))) : (kt(H, re), pe = A(H), typeof re == "number" ? re !== 0 && !V.call(Oe, H) ? we = T(re + "px") : we = T("" + re) : (j(re, H), we = T(Ne(("" + re).trim())))), D ? (D = !1, u.push($, pe, X, we)) : u.push(be, pe, X, we);
          }
        }
      D || u.push(ot);
    }
    var Te = m(" "), Ve = m('="'), ot = m('"'), pt = m('=""');
    function dt(u, p, w, D) {
      switch (w) {
        case "style": {
          ye(u, p, D);
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
        var H = xe(w);
        if (H !== null) {
          switch (typeof D) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!H.acceptsBooleans)
                return;
          }
          var re = H.attributeName, pe = T(re);
          switch (H.type) {
            case te:
              D && u.push(Te, pe, pt);
              return;
            case me:
              D === !0 ? u.push(Te, pe, pt) : D === !1 || u.push(Te, pe, Ve, T(Ne(D)), ot);
              return;
            case I:
              isNaN(D) || u.push(Te, pe, Ve, T(Ne(D)), ot);
              break;
            case le:
              !isNaN(D) && D >= 1 && u.push(Te, pe, Ve, T(Ne(D)), ot);
              break;
            default:
              H.sanitizeURL && (R(D, re), D = "" + D, $t(D)), u.push(Te, pe, Ve, T(Ne(D)), ot);
          }
        } else if (ee(w)) {
          switch (typeof D) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var we = w.toLowerCase().slice(0, 5);
              if (we !== "data-" && we !== "aria-")
                return;
            }
          }
          u.push(Te, T(w), Ve, T(Ne(D)), ot);
        }
      }
    }
    var Ft = m(">"), Dn = m("/>");
    function Tn(u, p, w) {
      if (p != null) {
        if (w != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof p != "object" || !("__html" in p))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var D = p.__html;
        D != null && (B(D), u.push(T("" + D)));
      }
    }
    var Cn = !1, Xn = !1, In = !1, hr = !1, ne = !1, J = !1, ce = !1;
    function Re(u, p) {
      {
        var w = u[p];
        if (w != null) {
          var D = Bt(w);
          u.multiple && !D ? a("The `%s` prop supplied to <select> must be an array if `multiple` is true.", p) : !u.multiple && D && a("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", p);
        }
      }
    }
    function Wt(u, p, w) {
      We("select", p), Re(p, "value"), Re(p, "defaultValue"), p.value !== void 0 && p.defaultValue !== void 0 && !In && (a("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), In = !0), u.push(Qn("select"));
      var D = null, H = null;
      for (var re in p)
        if (V.call(p, re)) {
          var pe = p[re];
          if (pe == null)
            continue;
          switch (re) {
            case "children":
              D = pe;
              break;
            case "dangerouslySetInnerHTML":
              H = pe;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              dt(u, w, re, pe);
              break;
          }
        }
      return u.push(Ft), Tn(u, H, D), D;
    }
    function pn(u) {
      var p = "";
      return e.Children.forEach(u, function(w) {
        w != null && (p += w, !ne && typeof w != "string" && typeof w != "number" && (ne = !0, a("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), p;
    }
    var Hn = m(' selected=""');
    function Dr(u, p, w, D) {
      var H = D.selectedValue;
      u.push(Qn("option"));
      var re = null, pe = null, we = null, l = null;
      for (var h in p)
        if (V.call(p, h)) {
          var S = p[h];
          if (S == null)
            continue;
          switch (h) {
            case "children":
              re = S;
              break;
            case "selected":
              we = S, ce || (a("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ce = !0);
              break;
            case "dangerouslySetInnerHTML":
              l = S;
              break;
            case "value":
              pe = S;
            default:
              dt(u, w, h, S);
              break;
          }
        }
      if (H != null) {
        var C;
        if (pe !== null ? (R(pe, "value"), C = "" + pe) : (l !== null && (J || (J = !0, a("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), C = pn(re)), Bt(H))
          for (var F = 0; F < H.length; F++) {
            R(H[F], "value");
            var Q = "" + H[F];
            if (Q === C) {
              u.push(Hn);
              break;
            }
          }
        else
          R(H, "select.value"), "" + H === C && u.push(Hn);
      } else
        we && u.push(Hn);
      return u.push(Ft), Tn(u, l, re), re;
    }
    function qa(u, p, w) {
      We("input", p), p.checked !== void 0 && p.defaultChecked !== void 0 && !Xn && (a("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", p.type), Xn = !0), p.value !== void 0 && p.defaultValue !== void 0 && !Cn && (a("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", p.type), Cn = !0), u.push(Qn("input"));
      var D = null, H = null, re = null, pe = null;
      for (var we in p)
        if (V.call(p, we)) {
          var l = p[we];
          if (l == null)
            continue;
          switch (we) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              pe = l;
              break;
            case "defaultValue":
              H = l;
              break;
            case "checked":
              re = l;
              break;
            case "value":
              D = l;
              break;
            default:
              dt(u, w, we, l);
              break;
          }
        }
      return re !== null ? dt(u, w, "checked", re) : pe !== null && dt(u, w, "checked", pe), D !== null ? dt(u, w, "value", D) : H !== null && dt(u, w, "value", H), u.push(Dn), null;
    }
    function pr(u, p, w) {
      We("textarea", p), p.value !== void 0 && p.defaultValue !== void 0 && !hr && (a("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), hr = !0), u.push(Qn("textarea"));
      var D = null, H = null, re = null;
      for (var pe in p)
        if (V.call(p, pe)) {
          var we = p[pe];
          if (we == null)
            continue;
          switch (pe) {
            case "children":
              re = we;
              break;
            case "value":
              D = we;
              break;
            case "defaultValue":
              H = we;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              dt(u, w, pe, we);
              break;
          }
        }
      if (D === null && H !== null && (D = H), u.push(Ft), re != null) {
        if (a("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), D != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (Bt(re)) {
          if (re.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          B(re[0]), D = "" + re[0];
        }
        B(re), D = "" + re;
      }
      return typeof D == "string" && D[0] === `
` && u.push(Or), D !== null && (R(D, "value"), u.push(T(Zn("" + D)))), null;
    }
    function na(u, p, w, D) {
      u.push(Qn(w));
      for (var H in p)
        if (V.call(p, H)) {
          var re = p[H];
          if (re == null)
            continue;
          switch (H) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(w + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              dt(u, D, H, re);
              break;
          }
        }
      return u.push(Dn), null;
    }
    function ya(u, p, w) {
      u.push(Qn("menuitem"));
      for (var D in p)
        if (V.call(p, D)) {
          var H = p[D];
          if (H == null)
            continue;
          switch (D) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              dt(u, w, D, H);
              break;
          }
        }
      return u.push(Ft), null;
    }
    function nn(u, p, w) {
      u.push(Qn("title"));
      var D = null;
      for (var H in p)
        if (V.call(p, H)) {
          var re = p[H];
          if (re == null)
            continue;
          switch (H) {
            case "children":
              D = re;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              dt(u, w, H, re);
              break;
          }
        }
      u.push(Ft);
      {
        var pe = Array.isArray(D) && D.length < 2 ? D[0] || null : D;
        Array.isArray(D) && D.length > 1 ? a("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : pe != null && pe.$$typeof != null ? a("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : pe != null && typeof pe != "string" && typeof pe != "number" && a("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return D;
    }
    function Sr(u, p, w, D) {
      u.push(Qn(w));
      var H = null, re = null;
      for (var pe in p)
        if (V.call(p, pe)) {
          var we = p[pe];
          if (we == null)
            continue;
          switch (pe) {
            case "children":
              H = we;
              break;
            case "dangerouslySetInnerHTML":
              re = we;
              break;
            default:
              dt(u, D, pe, we);
              break;
          }
        }
      return u.push(Ft), Tn(u, re, H), typeof H == "string" ? (u.push(T(Zn(H))), null) : H;
    }
    function jn(u, p, w, D) {
      u.push(Qn(w));
      var H = null, re = null;
      for (var pe in p)
        if (V.call(p, pe)) {
          var we = p[pe];
          if (we == null)
            continue;
          switch (pe) {
            case "children":
              H = we;
              break;
            case "dangerouslySetInnerHTML":
              re = we;
              break;
            case "style":
              ye(u, D, we);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ee(pe) && typeof we != "function" && typeof we != "symbol" && u.push(Te, T(pe), Ve, T(Ne(we)), ot);
              break;
          }
        }
      return u.push(Ft), Tn(u, re, H), H;
    }
    var Or = m(`
`);
    function Er(u, p, w, D) {
      u.push(Qn(w));
      var H = null, re = null;
      for (var pe in p)
        if (V.call(p, pe)) {
          var we = p[pe];
          if (we == null)
            continue;
          switch (pe) {
            case "children":
              H = we;
              break;
            case "dangerouslySetInnerHTML":
              re = we;
              break;
            default:
              dt(u, D, pe, we);
              break;
          }
        }
      if (u.push(Ft), re != null) {
        if (H != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof re != "object" || !("__html" in re))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var l = re.__html;
        l != null && (typeof l == "string" && l.length > 0 && l[0] === `
` ? u.push(Or, T(l)) : (B(l), u.push(T("" + l))));
      }
      return typeof H == "string" && H[0] === `
` && u.push(Or), H;
    }
    var va = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, kr = /* @__PURE__ */ new Map();
    function Qn(u) {
      var p = kr.get(u);
      if (p === void 0) {
        if (!va.test(u))
          throw new Error("Invalid tag: " + u);
        p = m("<" + u), kr.set(u, p);
      }
      return p;
    }
    var Ga = m("<!DOCTYPE html>");
    function Za(u, p, w, D, H) {
      switch ($e(p, w), Ke(p, w), tn(p, w, null), !w.suppressContentEditableWarning && w.contentEditable && w.children != null && a("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), H.insertionMode !== vn && H.insertionMode !== _t && p.indexOf("-") === -1 && typeof w.is != "string" && p.toLowerCase() !== p && a("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", p), p) {
        case "select":
          return Wt(u, w, D);
        case "option":
          return Dr(u, w, D, H);
        case "textarea":
          return pr(u, w, D);
        case "input":
          return qa(u, w, D);
        case "menuitem":
          return ya(u, w, D);
        case "title":
          return nn(u, w, D);
        case "listing":
        case "pre":
          return Er(u, w, p, D);
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
          return na(u, w, p, D);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return Sr(u, w, p, D);
        case "html":
          return H.insertionMode === Ut && u.push(Ga), Sr(u, w, p, D);
        default:
          return p.indexOf("-") === -1 && typeof w.is != "string" ? Sr(u, w, p, D) : jn(u, w, p, D);
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
      for (var w = p.bootstrapChunks, D = 0; D < w.length - 1; D++)
        v(u, w[D]);
      return D < w.length ? y(u, w[D]) : !0;
    }
    var sl = m('<template id="'), xa = m('"></template>');
    function ba(u, p, w) {
      v(u, sl), v(u, p.placeholderPrefix);
      var D = T(w.toString(16));
      return v(u, D), y(u, xa);
    }
    var Sa = m("<!--$-->"), ra = m('<!--$?--><template id="'), ul = m('"></template>'), aa = m("<!--$!-->"), Qa = m("<!--/$-->"), Ja = m("<template"), Hr = m('"'), Wr = m(' data-dgst="'), Ea = m(' data-msg="'), qi = m(' data-stck="'), ei = m("></template>");
    function Gi(u, p) {
      return y(u, Sa);
    }
    function ka(u, p, w) {
      if (v(u, ra), w === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return v(u, w), y(u, ul);
    }
    function Un(u, p, w, D, H) {
      var re;
      return re = y(u, aa), v(u, Ja), w && (v(u, Wr), v(u, T(Ne(w))), v(u, Hr)), D && (v(u, Ea), v(u, T(Ne(D))), v(u, Hr)), H && (v(u, qi), v(u, T(Ne(H))), v(u, Hr)), re = y(u, ei), re;
    }
    function Zi(u, p) {
      return y(u, Qa);
    }
    function wa(u, p) {
      return y(u, Qa);
    }
    function cl(u, p) {
      return y(u, Qa);
    }
    var Qi = m('<div hidden id="'), Ta = m('">'), Ji = m("</div>"), eo = m('<svg aria-hidden="true" style="display:none" id="'), Ca = m('">'), Aa = m("</svg>"), to = m('<math aria-hidden="true" style="display:none" id="'), no = m('">'), ro = m("</math>"), ti = m('<table hidden id="'), ao = m('">'), b = m("</table>"), P = m('<table hidden><tbody id="'), z = m('">'), G = m("</tbody></table>"), Se = m('<table hidden><tr id="'), ve = m('">'), Fe = m("</tr></table>"), je = m('<table hidden><colgroup id="'), gt = m('">'), Dt = m("</colgroup></table>");
    function Ct(u, p, w, D) {
      switch (w.insertionMode) {
        case Ut:
        case Nt:
          return v(u, Qi), v(u, p.segmentPrefix), v(u, T(D.toString(16))), y(u, Ta);
        case vn:
          return v(u, eo), v(u, p.segmentPrefix), v(u, T(D.toString(16))), y(u, Ca);
        case _t:
          return v(u, to), v(u, p.segmentPrefix), v(u, T(D.toString(16))), y(u, no);
        case Kt:
          return v(u, ti), v(u, p.segmentPrefix), v(u, T(D.toString(16))), y(u, ao);
        case Vn:
          return v(u, P), v(u, p.segmentPrefix), v(u, T(D.toString(16))), y(u, z);
        case Pn:
          return v(u, Se), v(u, p.segmentPrefix), v(u, T(D.toString(16))), y(u, ve);
        case zn:
          return v(u, je), v(u, p.segmentPrefix), v(u, T(D.toString(16))), y(u, gt);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function sn(u, p) {
      switch (p.insertionMode) {
        case Ut:
        case Nt:
          return y(u, Ji);
        case vn:
          return y(u, Aa);
        case _t:
          return y(u, ro);
        case Kt:
          return y(u, b);
        case Vn:
          return y(u, G);
        case Pn:
          return y(u, Fe);
        case zn:
          return y(u, Dt);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Kn = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", Jn = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', er = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Pa = m(Kn + ';$RS("'), io = m('$RS("'), ni = m('","'), _c = m('")<\/script>');
    function Nc(u, p, w) {
      v(u, p.startInlineScript), p.sentCompleteSegmentFunction ? v(u, io) : (p.sentCompleteSegmentFunction = !0, v(u, Pa)), v(u, p.segmentPrefix);
      var D = T(w.toString(16));
      return v(u, D), v(u, ni), v(u, p.placeholderPrefix), v(u, D), y(u, _c);
    }
    var Fc = m(Jn + ';$RC("'), zc = m('$RC("'), $c = m('","'), Bc = m('")<\/script>');
    function dl(u, p, w, D) {
      if (v(u, p.startInlineScript), p.sentCompleteBoundaryFunction ? v(u, zc) : (p.sentCompleteBoundaryFunction = !0, v(u, Fc)), w === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var H = T(D.toString(16));
      return v(u, w), v(u, $c), v(u, p.segmentPrefix), v(u, H), y(u, Bc);
    }
    var Ic = m(er + ';$RX("'), Hc = m('$RX("'), fl = m('"'), Wc = m(")<\/script>"), hl = m(",");
    function Os(u, p, w, D, H, re) {
      if (v(u, p.startInlineScript), p.sentClientRenderFunction ? v(u, Hc) : (p.sentClientRenderFunction = !0, v(u, Ic)), w === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return v(u, w), v(u, fl), (D || H || re) && (v(u, hl), v(u, T(pl(D || "")))), (H || re) && (v(u, hl), v(u, T(pl(H || "")))), re && (v(u, hl), v(u, T(pl(re)))), y(u, Wc);
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
    var or = Object.assign, Vc = Symbol.for("react.element"), _s = Symbol.for("react.portal"), tr = Symbol.for("react.fragment"), Ns = Symbol.for("react.strict_mode"), ml = Symbol.for("react.profiler"), oo = Symbol.for("react.provider"), lo = Symbol.for("react.context"), so = Symbol.for("react.forward_ref"), ri = Symbol.for("react.suspense"), ai = Symbol.for("react.suspense_list"), ii = Symbol.for("react.memo"), Ra = Symbol.for("react.lazy"), gl = Symbol.for("react.scope"), yl = Symbol.for("react.debug_trace_mode"), uo = Symbol.for("react.legacy_hidden"), jc = Symbol.for("react.default_value"), Fs = Symbol.iterator, Uc = "@@iterator";
    function Kc(u) {
      if (u === null || typeof u != "object")
        return null;
      var p = Fs && u[Fs] || u[Uc];
      return typeof p == "function" ? p : null;
    }
    function zs(u, p, w) {
      var D = u.displayName;
      if (D)
        return D;
      var H = p.displayName || p.name || "";
      return H !== "" ? w + "(" + H + ")" : w;
    }
    function $s(u) {
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
        case tr:
          return "Fragment";
        case _s:
          return "Portal";
        case ml:
          return "Profiler";
        case Ns:
          return "StrictMode";
        case ri:
          return "Suspense";
        case ai:
          return "SuspenseList";
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case lo:
            var p = u;
            return $s(p) + ".Consumer";
          case oo:
            var w = u;
            return $s(w._context) + ".Provider";
          case so:
            return zs(u, u.render, "ForwardRef");
          case ii:
            var D = u.displayName || null;
            return D !== null ? D : mn(u.type) || "Memo";
          case Ra: {
            var H = u, re = H._payload, pe = H._init;
            try {
              return mn(pe(re));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var oi = 0, vl, fn, La, xl, bl, Sl, El;
    function kl() {
    }
    kl.__reactDisabledLog = !0;
    function Bs() {
      {
        if (oi === 0) {
          vl = console.log, fn = console.info, La = console.warn, xl = console.error, bl = console.group, Sl = console.groupCollapsed, El = console.groupEnd;
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
        oi++;
      }
    }
    function Is() {
      {
        if (oi--, oi === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: or({}, u, {
              value: vl
            }),
            info: or({}, u, {
              value: fn
            }),
            warn: or({}, u, {
              value: La
            }),
            error: or({}, u, {
              value: xl
            }),
            group: or({}, u, {
              value: bl
            }),
            groupCollapsed: or({}, u, {
              value: Sl
            }),
            groupEnd: or({}, u, {
              value: El
            })
          });
        }
        oi < 0 && a("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var co = r.ReactCurrentDispatcher, wl;
    function li(u, p, w) {
      {
        if (wl === void 0)
          try {
            throw Error();
          } catch (H) {
            var D = H.stack.trim().match(/\n( *(at )?)/);
            wl = D && D[1] || "";
          }
        return `
` + wl + u;
      }
    }
    var si = !1, Da;
    {
      var ui = typeof WeakMap == "function" ? WeakMap : Map;
      Da = new ui();
    }
    function ci(u, p) {
      if (!u || si)
        return "";
      {
        var w = Da.get(u);
        if (w !== void 0)
          return w;
      }
      var D;
      si = !0;
      var H = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var re;
      re = co.current, co.current = null, Bs();
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
              D = de;
            }
            Reflect.construct(u, [], pe);
          } else {
            try {
              pe.call();
            } catch (de) {
              D = de;
            }
            u.call(pe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (de) {
            D = de;
          }
          u();
        }
      } catch (de) {
        if (de && D && typeof de.stack == "string") {
          for (var we = de.stack.split(`
`), l = D.stack.split(`
`), h = we.length - 1, S = l.length - 1; h >= 1 && S >= 0 && we[h] !== l[S]; )
            S--;
          for (; h >= 1 && S >= 0; h--, S--)
            if (we[h] !== l[S]) {
              if (h !== 1 || S !== 1)
                do
                  if (h--, S--, S < 0 || we[h] !== l[S]) {
                    var C = `
` + we[h].replace(" at new ", " at ");
                    return u.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", u.displayName)), typeof u == "function" && Da.set(u, C), C;
                  }
                while (h >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        si = !1, co.current = re, Is(), Error.prepareStackTrace = H;
      }
      var F = u ? u.displayName || u.name : "", Q = F ? li(F) : "";
      return typeof u == "function" && Da.set(u, Q), Q;
    }
    function fo(u, p, w) {
      return ci(u, !0);
    }
    function Hs(u, p, w) {
      return ci(u, !1);
    }
    function Tl(u) {
      var p = u.prototype;
      return !!(p && p.isReactComponent);
    }
    function Cl(u, p, w) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return ci(u, Tl(u));
      if (typeof u == "string")
        return li(u);
      switch (u) {
        case ri:
          return li("Suspense");
        case ai:
          return li("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case so:
            return Hs(u.render);
          case ii:
            return Cl(u.type, p, w);
          case Ra: {
            var D = u, H = D._payload, re = D._init;
            try {
              return Cl(re(H), p, w);
            } catch {
            }
          }
        }
      return "";
    }
    var Al = {}, Ws = r.ReactDebugCurrentFrame;
    function Oa(u) {
      if (u) {
        var p = u._owner, w = Cl(u.type, u._source, p ? p.type : null);
        Ws.setExtraStackFrame(w);
      } else
        Ws.setExtraStackFrame(null);
    }
    function Pl(u, p, w, D, H) {
      {
        var re = Function.call.bind(V);
        for (var pe in u)
          if (re(u, pe)) {
            var we = void 0;
            try {
              if (typeof u[pe] != "function") {
                var l = Error((D || "React class") + ": " + w + " type `" + pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw l.name = "Invariant Violation", l;
              }
              we = u[pe](p, pe, D, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (h) {
              we = h;
            }
            we && !(we instanceof Error) && (Oa(H), a("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", D || "React class", w, pe, typeof we), Oa(null)), we instanceof Error && !(we.message in Al) && (Al[we.message] = !0, Oa(H), a("Failed %s type: %s", w, we.message), Oa(null));
          }
      }
    }
    var ho;
    ho = {};
    var ia = {};
    Object.freeze(ia);
    function Rl(u, p) {
      {
        var w = u.contextTypes;
        if (!w)
          return ia;
        var D = {};
        for (var H in w)
          D[H] = p[H];
        {
          var re = mn(u) || "Unknown";
          Pl(w, D, "context", re);
        }
        return D;
      }
    }
    function Ll(u, p, w, D) {
      {
        if (typeof u.getChildContext != "function") {
          {
            var H = mn(p) || "Unknown";
            ho[H] || (ho[H] = !0, a("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", H, H));
          }
          return w;
        }
        var re = u.getChildContext();
        for (var pe in re)
          if (!(pe in D))
            throw new Error((mn(p) || "Unknown") + '.getChildContext(): key "' + pe + '" is not defined in childContextTypes.');
        {
          var we = mn(p) || "Unknown";
          Pl(D, re, "child context", we);
        }
        return or({}, w, re);
      }
    }
    var Vr;
    Vr = {};
    var Vs = null, oa = null;
    function la(u) {
      u.context._currentValue = u.parentValue;
    }
    function Dl(u) {
      u.context._currentValue = u.value;
    }
    function wr(u, p) {
      if (u !== p) {
        la(u);
        var w = u.parent, D = p.parent;
        if (w === null) {
          if (D !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (D === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          wr(w, D);
        }
        Dl(p);
      }
    }
    function po(u) {
      la(u);
      var p = u.parent;
      p !== null && po(p);
    }
    function mo(u) {
      var p = u.parent;
      p !== null && mo(p), Dl(u);
    }
    function di(u, p) {
      la(u);
      var w = u.parent;
      if (w === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      w.depth === p.depth ? wr(w, p) : di(w, p);
    }
    function Ol(u, p) {
      var w = p.parent;
      if (w === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      u.depth === w.depth ? wr(u, w) : Ol(u, w), Dl(p);
    }
    function fi(u) {
      var p = oa, w = u;
      p !== w && (p === null ? mo(w) : w === null ? po(p) : p.depth === w.depth ? wr(p, w) : p.depth > w.depth ? di(p, w) : Ol(p, w), oa = w);
    }
    function js(u, p) {
      var w;
      w = u._currentValue, u._currentValue = p, u._currentRenderer !== void 0 && u._currentRenderer !== null && u._currentRenderer !== Vr && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), u._currentRenderer = Vr;
      var D = oa, H = {
        parent: D,
        depth: D === null ? 0 : D.depth + 1,
        context: u,
        parentValue: w,
        value: p
      };
      return oa = H, H;
    }
    function Us(u) {
      var p = oa;
      if (p === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      p.context !== u && a("The parent context is not the expected context. This is probably a bug in React.");
      {
        var w = p.parentValue;
        w === jc ? p.context._currentValue = p.context._defaultValue : p.context._currentValue = w, u._currentRenderer !== void 0 && u._currentRenderer !== null && u._currentRenderer !== Vr && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), u._currentRenderer = Vr;
      }
      return oa = p.parent;
    }
    function go() {
      return oa;
    }
    function hi(u) {
      var p = u._currentValue;
      return p;
    }
    function Ml(u) {
      return u._reactInternals;
    }
    function Yc(u, p) {
      u._reactInternals = p;
    }
    var Ma = {}, yo = {}, _l, vo, xo, pi, bo, _a, mi, So, Na;
    {
      _l = /* @__PURE__ */ new Set(), vo = /* @__PURE__ */ new Set(), xo = /* @__PURE__ */ new Set(), mi = /* @__PURE__ */ new Set(), pi = /* @__PURE__ */ new Set(), So = /* @__PURE__ */ new Set(), Na = /* @__PURE__ */ new Set();
      var Eo = /* @__PURE__ */ new Set();
      _a = function(u, p) {
        if (!(u === null || typeof u == "function")) {
          var w = p + "_" + u;
          Eo.has(w) || (Eo.add(w), a("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", p, u));
        }
      }, bo = function(u, p) {
        if (p === void 0) {
          var w = mn(u) || "Component";
          pi.has(w) || (pi.add(w), a("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", w));
        }
      };
    }
    function ko(u, p) {
      {
        var w = u.constructor, D = w && mn(w) || "ReactClass", H = D + "." + p;
        if (Ma[H])
          return;
        a(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, p, p, D), Ma[H] = !0;
      }
    }
    var wo = {
      isMounted: function(u) {
        return !1;
      },
      enqueueSetState: function(u, p, w) {
        var D = Ml(u);
        D.queue === null ? ko(u, "setState") : (D.queue.push(p), w != null && _a(w, "setState"));
      },
      enqueueReplaceState: function(u, p, w) {
        var D = Ml(u);
        D.replace = !0, D.queue = [p], w != null && _a(w, "setState");
      },
      enqueueForceUpdate: function(u, p) {
        var w = Ml(u);
        w.queue === null ? ko(u, "forceUpdate") : p != null && _a(p, "setState");
      }
    };
    function Ks(u, p, w, D, H) {
      var re = w(H, D);
      bo(p, re);
      var pe = re == null ? D : or({}, D, re);
      return pe;
    }
    function Ys(u, p, w) {
      var D = ia, H = u.contextType;
      if ("contextType" in u) {
        var re = (
          // Allow null for conditional declaration
          H === null || H !== void 0 && H.$$typeof === lo && H._context === void 0
        );
        if (!re && !Na.has(u)) {
          Na.add(u);
          var pe = "";
          H === void 0 ? pe = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof H != "object" ? pe = " However, it is set to a " + typeof H + "." : H.$$typeof === oo ? pe = " Did you accidentally pass the Context.Provider instead?" : H._context !== void 0 ? pe = " Did you accidentally pass the Context.Consumer instead?" : pe = " However, it is set to an object with keys {" + Object.keys(H).join(", ") + "}.", a("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", mn(u) || "Component", pe);
        }
      }
      typeof H == "object" && H !== null ? D = hi(H) : D = w;
      var we = new u(p, D);
      {
        if (typeof u.getDerivedStateFromProps == "function" && (we.state === null || we.state === void 0)) {
          var l = mn(u) || "Component";
          _l.has(l) || (_l.add(l), a("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", l, we.state === null ? "null" : "undefined", l));
        }
        if (typeof u.getDerivedStateFromProps == "function" || typeof we.getSnapshotBeforeUpdate == "function") {
          var h = null, S = null, C = null;
          if (typeof we.componentWillMount == "function" && we.componentWillMount.__suppressDeprecationWarning !== !0 ? h = "componentWillMount" : typeof we.UNSAFE_componentWillMount == "function" && (h = "UNSAFE_componentWillMount"), typeof we.componentWillReceiveProps == "function" && we.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? S = "componentWillReceiveProps" : typeof we.UNSAFE_componentWillReceiveProps == "function" && (S = "UNSAFE_componentWillReceiveProps"), typeof we.componentWillUpdate == "function" && we.componentWillUpdate.__suppressDeprecationWarning !== !0 ? C = "componentWillUpdate" : typeof we.UNSAFE_componentWillUpdate == "function" && (C = "UNSAFE_componentWillUpdate"), h !== null || S !== null || C !== null) {
            var F = mn(u) || "Component", Q = typeof u.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            xo.has(F) || (xo.add(F), a(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, F, Q, h !== null ? `
  ` + h : "", S !== null ? `
  ` + S : "", C !== null ? `
  ` + C : ""));
          }
        }
      }
      return we;
    }
    function Xs(u, p, w) {
      {
        var D = mn(p) || "Component", H = u.render;
        H || (p.prototype && typeof p.prototype.render == "function" ? a("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", D) : a("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", D)), u.getInitialState && !u.getInitialState.isReactClassApproved && !u.state && a("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", D), u.getDefaultProps && !u.getDefaultProps.isReactClassApproved && a("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", D), u.propTypes && a("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", D), u.contextType && a("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", D), u.contextTypes && a("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", D), p.contextType && p.contextTypes && !So.has(p) && (So.add(p), a("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", D)), typeof u.componentShouldUpdate == "function" && a("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", D), p.prototype && p.prototype.isPureReactComponent && typeof u.shouldComponentUpdate < "u" && a("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", mn(p) || "A pure component"), typeof u.componentDidUnmount == "function" && a("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", D), typeof u.componentDidReceiveProps == "function" && a("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", D), typeof u.componentWillRecieveProps == "function" && a("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", D), typeof u.UNSAFE_componentWillRecieveProps == "function" && a("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", D);
        var re = u.props !== w;
        u.props !== void 0 && re && a("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", D, D), u.defaultProps && a("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", D, D), typeof u.getSnapshotBeforeUpdate == "function" && typeof u.componentDidUpdate != "function" && !vo.has(p) && (vo.add(p), a("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", mn(p))), typeof u.getDerivedStateFromProps == "function" && a("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", D), typeof u.getDerivedStateFromError == "function" && a("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", D), typeof p.getSnapshotBeforeUpdate == "function" && a("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", D);
        var pe = u.state;
        pe && (typeof pe != "object" || Bt(pe)) && a("%s.state: must be set to an object or null", D), typeof u.getChildContext == "function" && typeof p.childContextTypes != "object" && a("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", D);
      }
    }
    function Xc(u, p) {
      var w = p.state;
      if (typeof p.componentWillMount == "function") {
        if (p.componentWillMount.__suppressDeprecationWarning !== !0) {
          var D = mn(u) || "Unknown";
          yo[D] || (n(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            D
          ), yo[D] = !0);
        }
        p.componentWillMount();
      }
      typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), w !== p.state && (a("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", mn(u) || "Component"), wo.enqueueReplaceState(p, p.state, null));
    }
    function qc(u, p, w, D) {
      if (u.queue !== null && u.queue.length > 0) {
        var H = u.queue, re = u.replace;
        if (u.queue = null, u.replace = !1, re && H.length === 1)
          p.state = H[0];
        else {
          for (var pe = re ? H[0] : p.state, we = !0, l = re ? 1 : 0; l < H.length; l++) {
            var h = H[l], S = typeof h == "function" ? h.call(p, pe, w, D) : h;
            S != null && (we ? (we = !1, pe = or({}, pe, S)) : or(pe, S));
          }
          p.state = pe;
        }
      } else
        u.queue = null;
    }
    function qs(u, p, w, D) {
      Xs(u, p, w);
      var H = u.state !== void 0 ? u.state : null;
      u.updater = wo, u.props = w, u.state = H;
      var re = {
        queue: [],
        replace: !1
      };
      Yc(u, re);
      var pe = p.contextType;
      if (typeof pe == "object" && pe !== null ? u.context = hi(pe) : u.context = D, u.state === w) {
        var we = mn(p) || "Component";
        mi.has(we) || (mi.add(we), a("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", we));
      }
      var l = p.getDerivedStateFromProps;
      typeof l == "function" && (u.state = Ks(u, p, l, H, w)), typeof p.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Xc(p, u), qc(re, u, w, D));
    }
    var Gc = {
      id: 1,
      overflow: ""
    };
    function Zc(u) {
      var p = u.overflow, w = u.id, D = w & ~Qc(w);
      return D.toString(32) + p;
    }
    function To(u, p, w) {
      var D = u.id, H = u.overflow, re = Co(D) - 1, pe = D & ~(1 << re), we = w + 1, l = Co(p) + re;
      if (l > 30) {
        var h = re - re % 5, S = (1 << h) - 1, C = (pe & S).toString(32), F = pe >> h, Q = re - h, de = Co(p) + Q, Ee = we << Q, Be = Ee | F, tt = C + H;
        return {
          id: 1 << de | Be,
          overflow: tt
        };
      } else {
        var ut = we << re, xt = ut | pe, cn = H;
        return {
          id: 1 << l | xt,
          overflow: cn
        };
      }
    }
    function Co(u) {
      return 32 - Nl(u);
    }
    function Qc(u) {
      return 1 << Co(u) - 1;
    }
    var Nl = Math.clz32 ? Math.clz32 : ed, Ao = Math.log, Jc = Math.LN2;
    function ed(u) {
      var p = u >>> 0;
      return p === 0 ? 32 : 31 - (Ao(p) / Jc | 0) | 0;
    }
    function td(u, p) {
      return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
    }
    var nd = typeof Object.is == "function" ? Object.is : td, Mr = null, Fl = null, Po = null, Vt = null, sa = !1, ua = !1, en = 0, lr = null, ca = 0, Ro = 25, $n = !1, _r;
    function da() {
      if (Mr === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return $n && a("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Mr;
    }
    function Tr(u, p) {
      if (p === null)
        return a("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", _r), !1;
      u.length !== p.length && a(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, _r, "[" + u.join(", ") + "]", "[" + p.join(", ") + "]");
      for (var w = 0; w < p.length && w < u.length; w++)
        if (!nd(u[w], p[w]))
          return !1;
      return !0;
    }
    function fa() {
      if (ca > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function Nr() {
      return Vt === null ? Po === null ? (sa = !1, Po = Vt = fa()) : (sa = !0, Vt = Po) : Vt.next === null ? (sa = !1, Vt = Vt.next = fa()) : (sa = !0, Vt = Vt.next), Vt;
    }
    function rd(u, p) {
      Mr = p, Fl = u, $n = !1, en = 0;
    }
    function Gs(u, p, w, D) {
      for (; ua; )
        ua = !1, en = 0, ca += 1, Vt = null, w = u(p, D);
      return zl(), w;
    }
    function Lo() {
      var u = en !== 0;
      return u;
    }
    function zl() {
      $n = !1, Mr = null, Fl = null, ua = !1, Po = null, ca = 0, lr = null, Vt = null;
    }
    function ad(u) {
      return $n && a("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), hi(u);
    }
    function Zs(u) {
      return _r = "useContext", da(), hi(u);
    }
    function gi(u, p) {
      return typeof p == "function" ? p(u) : p;
    }
    function id(u) {
      return _r = "useState", Qs(
        gi,
        // useReducer has a special case to support lazy useState initializers
        u
      );
    }
    function Qs(u, p, w) {
      if (u !== gi && (_r = "useReducer"), Mr = da(), Vt = Nr(), sa) {
        var D = Vt.queue, H = D.dispatch;
        if (lr !== null) {
          var re = lr.get(D);
          if (re !== void 0) {
            lr.delete(D);
            var pe = Vt.memoizedState, we = re;
            do {
              var l = we.action;
              $n = !0, pe = u(pe, l), $n = !1, we = we.next;
            } while (we !== null);
            return Vt.memoizedState = pe, [pe, H];
          }
        }
        return [Vt.memoizedState, H];
      } else {
        $n = !0;
        var h;
        u === gi ? h = typeof p == "function" ? p() : p : h = w !== void 0 ? w(p) : p, $n = !1, Vt.memoizedState = h;
        var S = Vt.queue = {
          last: null,
          dispatch: null
        }, C = S.dispatch = eu.bind(null, Mr, S);
        return [Vt.memoizedState, C];
      }
    }
    function Do(u, p) {
      Mr = da(), Vt = Nr();
      var w = p === void 0 ? null : p;
      if (Vt !== null) {
        var D = Vt.memoizedState;
        if (D !== null && w !== null) {
          var H = D[1];
          if (Tr(w, H))
            return D[0];
        }
      }
      $n = !0;
      var re = u();
      return $n = !1, Vt.memoizedState = [re, w], re;
    }
    function od(u) {
      Mr = da(), Vt = Nr();
      var p = Vt.memoizedState;
      if (p === null) {
        var w = {
          current: u
        };
        return Object.seal(w), Vt.memoizedState = w, w;
      } else
        return p;
    }
    function Js(u, p) {
      _r = "useLayoutEffect", a("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function eu(u, p, w) {
      if (ca >= Ro)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (u === Mr) {
        ua = !0;
        var D = {
          action: w,
          next: null
        };
        lr === null && (lr = /* @__PURE__ */ new Map());
        var H = lr.get(p);
        if (H === void 0)
          lr.set(p, D);
        else {
          for (var re = H; re.next !== null; )
            re = re.next;
          re.next = D;
        }
      }
    }
    function ld(u, p) {
      return Do(function() {
        return u;
      }, p);
    }
    function sd(u, p, w) {
      return da(), p(u._source);
    }
    function ud(u, p, w) {
      if (w === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return w();
    }
    function cd(u) {
      return da(), u;
    }
    function dd() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function fd() {
      return da(), [!1, dd];
    }
    function hd() {
      var u = Fl, p = Zc(u.treeContext), w = $l;
      if (w === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var D = en++;
      return fr(w, p, D);
    }
    function Oo() {
    }
    var tu = {
      readContext: ad,
      useContext: Zs,
      useMemo: Do,
      useReducer: Qs,
      useRef: od,
      useState: id,
      useInsertionEffect: Oo,
      useLayoutEffect: Js,
      useCallback: ld,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: Oo,
      // Effects are not run in the server environment.
      useEffect: Oo,
      // Debugging effect
      useDebugValue: Oo,
      useDeferredValue: cd,
      useTransition: fd,
      useId: hd,
      // Subscriptions are not setup in a server environment.
      useMutableSource: sd,
      useSyncExternalStore: ud
    }, $l = null;
    function yi(u) {
      $l = u;
    }
    function nu(u) {
      try {
        var p = "", w = u;
        do {
          switch (w.tag) {
            case 0:
              p += li(w.type, null, null);
              break;
            case 1:
              p += Hs(w.type, null, null);
              break;
            case 2:
              p += fo(w.type, null, null);
              break;
          }
          w = w.parent;
        } while (w);
        return p;
      } catch (D) {
        return `
Error generating stack: ` + D.message + `
` + D.stack;
      }
    }
    var vi = r.ReactCurrentDispatcher, Mo = r.ReactDebugCurrentFrame, Bl = 0, jr = 1, _o = 2, No = 3, ha = 4, ru = 0, Il = 1, pa = 2, pd = 12800;
    function au(u) {
      return console.error(u), null;
    }
    function Cr() {
    }
    function md(u, p, w, D, H, re, pe, we, l) {
      var h = [], S = /* @__PURE__ */ new Set(), C = {
        destination: null,
        responseState: p,
        progressiveChunkSize: D === void 0 ? pd : D,
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
        onError: H === void 0 ? au : H,
        onAllReady: re === void 0 ? Cr : re,
        onShellReady: pe === void 0 ? Cr : pe,
        onShellError: we === void 0 ? Cr : we,
        onFatalError: l === void 0 ? Cr : l
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
      var Q = Hl(C, u, null, F, S, ia, Vs, Gc);
      return h.push(Q), C;
    }
    function gd(u, p) {
      var w = u.pingedTasks;
      w.push(p), w.length === 1 && f(function() {
        return wi(u);
      });
    }
    function xi(u, p) {
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
    function Hl(u, p, w, D, H, re, pe, we) {
      u.allPendingTasks++, w === null ? u.pendingRootTasks++ : w.pendingTasks++;
      var l = {
        node: p,
        ping: function() {
          return gd(u, l);
        },
        blockedBoundary: w,
        blockedSegment: D,
        abortSet: H,
        legacyContext: re,
        context: pe,
        treeContext: we
      };
      return l.componentStack = null, H.add(l), l;
    }
    function Fo(u, p, w, D, H, re) {
      return {
        status: Bl,
        id: -1,
        // lazily assigned later
        index: p,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: D,
        boundary: w,
        lastPushedText: H,
        textEmbedded: re
      };
    }
    var Fr = null;
    function bi() {
      return Fr === null || Fr.componentStack === null ? "" : nu(Fr.componentStack);
    }
    function Ur(u, p) {
      u.componentStack = {
        tag: 0,
        parent: u.componentStack,
        type: p
      };
    }
    function Ar(u, p) {
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
    function sr(u) {
      u.componentStack === null ? a("Unexpectedly popped too many stack frames. This is a bug in React.") : u.componentStack = u.componentStack.parent;
    }
    var Fa = null;
    function Vl(u, p) {
      {
        var w;
        typeof p == "string" ? w = p : p && typeof p.message == "string" ? w = p.message : w = String(p);
        var D = Fa || bi();
        Fa = null, u.errorMessage = w, u.errorComponentStack = D;
      }
    }
    function ur(u, p) {
      var w = u.onError(p);
      if (w != null && typeof w != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof w + '" instead');
      return w;
    }
    function Kr(u, p) {
      var w = u.onShellError;
      w(p);
      var D = u.onFatalError;
      D(p), u.destination !== null ? (u.status = pa, L(u.destination, p)) : (u.status = Il, u.fatalError = p);
    }
    function jl(u, p, w) {
      Ur(p, "Suspense");
      var D = p.blockedBoundary, H = p.blockedSegment, re = w.fallback, pe = w.children, we = /* @__PURE__ */ new Set(), l = xi(u, we), h = H.chunks.length, S = Fo(
        u,
        h,
        l,
        H.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      H.children.push(S), H.lastPushedText = !1;
      var C = Fo(
        u,
        0,
        null,
        H.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      C.parentFlushed = !0, p.blockedBoundary = l, p.blockedSegment = C;
      try {
        if (Jl(u, p, pe), br(C.chunks, u.responseState, C.lastPushedText, C.textEmbedded), C.status = jr, Bo(l, C), l.pendingTasks === 0) {
          sr(p);
          return;
        }
      } catch (Q) {
        C.status = ha, l.forceClientRender = !0, l.errorDigest = ur(u, Q), Vl(l, Q);
      } finally {
        p.blockedBoundary = D, p.blockedSegment = H;
      }
      var F = Hl(u, re, D, S, we, p.legacyContext, p.context, p.treeContext);
      F.componentStack = p.componentStack, u.pingedTasks.push(F), sr(p);
    }
    function Si(u, p, w, D) {
      Ur(p, w);
      var H = p.blockedSegment, re = Za(H.chunks, w, D, u.responseState, H.formatContext);
      H.lastPushedText = !1;
      var pe = H.formatContext;
      H.formatContext = wn(pe, w, D), Jl(u, p, re), H.formatContext = pe, Xi(H.chunks, w), H.lastPushedText = !1, sr(p);
    }
    function zo(u) {
      return u.prototype && u.prototype.isReactComponent;
    }
    function iu(u, p, w, D, H) {
      var re = {};
      rd(p, re);
      var pe = w(D, H);
      return Gs(w, D, pe, H);
    }
    function ou(u, p, w, D, H) {
      var re = w.render();
      w.props !== H && (ki || a("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", mn(D) || "a component"), ki = !0);
      {
        var pe = D.childContextTypes;
        if (pe != null) {
          var we = p.legacyContext, l = Ll(w, D, we, pe);
          p.legacyContext = l, nr(u, p, re), p.legacyContext = we;
          return;
        }
      }
      nr(u, p, re);
    }
    function yd(u, p, w, D) {
      Wl(p, w);
      var H = Rl(w, p.legacyContext), re = Ys(w, D, H);
      qs(re, w, D, H), ou(u, p, re, w, D), sr(p);
    }
    var Ul = {}, Ei = {}, lu = {}, Kl = {}, ki = !1, Yl = !1, Xl = !1, ql = !1;
    function su(u, p, w, D) {
      var H;
      if (H = Rl(w, p.legacyContext), Ar(p, w), w.prototype && typeof w.prototype.render == "function") {
        var re = mn(w) || "Unknown";
        Ul[re] || (a("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", re, re), Ul[re] = !0);
      }
      var pe = iu(u, p, w, D, H), we = Lo();
      if (typeof pe == "object" && pe !== null && typeof pe.render == "function" && pe.$$typeof === void 0) {
        var l = mn(w) || "Unknown";
        Ei[l] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", l, l, l), Ei[l] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof pe == "object" && pe !== null && typeof pe.render == "function" && pe.$$typeof === void 0
      ) {
        {
          var h = mn(w) || "Unknown";
          Ei[h] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", h, h, h), Ei[h] = !0);
        }
        qs(pe, w, D, H), ou(u, p, pe, w, D);
      } else if (uu(w), we) {
        var S = p.treeContext, C = 1, F = 0;
        p.treeContext = To(S, C, F);
        try {
          nr(u, p, pe);
        } finally {
          p.treeContext = S;
        }
      } else
        nr(u, p, pe);
      sr(p);
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
        var w = or({}, p), D = u.defaultProps;
        for (var H in D)
          w[H] === void 0 && (w[H] = D[H]);
        return w;
      }
      return p;
    }
    function vd(u, p, w, D, H) {
      Ar(p, w.render);
      var re = iu(u, p, w.render, D, H), pe = Lo();
      if (pe) {
        var we = p.treeContext, l = 1, h = 0;
        p.treeContext = To(we, l, h);
        try {
          nr(u, p, re);
        } finally {
          p.treeContext = we;
        }
      } else
        nr(u, p, re);
      sr(p);
    }
    function xd(u, p, w, D, H) {
      var re = w.type, pe = Gl(re, D);
      Zl(u, p, re, pe, H);
    }
    function cu(u, p, w, D) {
      w._context === void 0 ? w !== w.Consumer && (ql || (ql = !0, a("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : w = w._context;
      var H = D.children;
      typeof H != "function" && a("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var re = hi(w), pe = H(re);
      nr(u, p, pe);
    }
    function bd(u, p, w, D) {
      var H = w._context, re = D.value, pe = D.children, we;
      we = p.context, p.context = js(H, re), nr(u, p, pe), p.context = Us(H), we !== p.context && a("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function Sd(u, p, w, D, H) {
      Ur(p, "Lazy");
      var re = w._payload, pe = w._init, we = pe(re), l = Gl(we, D);
      Zl(u, p, we, l, H), sr(p);
    }
    function Zl(u, p, w, D, H) {
      if (typeof w == "function")
        if (zo(w)) {
          yd(u, p, w, D);
          return;
        } else {
          su(u, p, w, D);
          return;
        }
      if (typeof w == "string") {
        Si(u, p, w, D);
        return;
      }
      switch (w) {
        case uo:
        case yl:
        case Ns:
        case ml:
        case tr: {
          nr(u, p, D.children);
          return;
        }
        case ai: {
          Ur(p, "SuspenseList"), nr(u, p, D.children), sr(p);
          return;
        }
        case gl:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case ri: {
          jl(u, p, D);
          return;
        }
      }
      if (typeof w == "object" && w !== null)
        switch (w.$$typeof) {
          case so: {
            vd(u, p, w, D, H);
            return;
          }
          case ii: {
            xd(u, p, w, D, H);
            return;
          }
          case oo: {
            bd(u, p, w, D);
            return;
          }
          case lo: {
            cu(u, p, w, D);
            return;
          }
          case Ra: {
            Sd(u, p, w, D);
            return;
          }
        }
      var re = "";
      throw (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (re += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (w == null ? w : typeof w) + "." + re));
    }
    function Ed(u, p) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      u[Symbol.toStringTag] === "Generator" && (Yl || a("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Yl = !0), u.entries === p && (Xl || a("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Xl = !0);
    }
    function nr(u, p, w) {
      try {
        return Ql(u, p, w);
      } catch (D) {
        throw typeof D == "object" && D !== null && typeof D.then == "function" || (Fa = Fa !== null ? Fa : bi()), D;
      }
    }
    function Ql(u, p, w) {
      if (p.node = w, typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case Vc: {
            var D = w, H = D.type, re = D.props, pe = D.ref;
            Zl(u, p, H, re, pe);
            return;
          }
          case _s:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case Ra: {
            var we = w, l = we._payload, h = we._init, S;
            try {
              S = h(l);
            } catch (ut) {
              throw typeof ut == "object" && ut !== null && typeof ut.then == "function" && Ur(p, "Lazy"), ut;
            }
            nr(u, p, S);
            return;
          }
        }
        if (Bt(w)) {
          du(u, p, w);
          return;
        }
        var C = Kc(w);
        if (C) {
          Ed(w, C);
          var F = C.call(w);
          if (F) {
            var Q = F.next();
            if (!Q.done) {
              var de = [];
              do
                de.push(Q.value), Q = F.next();
              while (!Q.done);
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
        var Be = p.blockedSegment;
        Be.lastPushedText = xr(p.blockedSegment.chunks, w, u.responseState, Be.lastPushedText);
        return;
      }
      if (typeof w == "number") {
        var tt = p.blockedSegment;
        tt.lastPushedText = xr(p.blockedSegment.chunks, "" + w, u.responseState, tt.lastPushedText);
        return;
      }
      typeof w == "function" && a("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function du(u, p, w) {
      for (var D = w.length, H = 0; H < D; H++) {
        var re = p.treeContext;
        p.treeContext = To(re, D, H);
        try {
          Jl(u, p, w[H]);
        } finally {
          p.treeContext = re;
        }
      }
    }
    function rr(u, p, w) {
      var D = p.blockedSegment, H = D.chunks.length, re = Fo(
        u,
        H,
        null,
        D.formatContext,
        // Adopt the parent segment's leading text embed
        D.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      D.children.push(re), D.lastPushedText = !1;
      var pe = Hl(u, p.node, p.blockedBoundary, re, p.abortSet, p.legacyContext, p.context, p.treeContext);
      p.componentStack !== null && (pe.componentStack = p.componentStack.parent);
      var we = pe.ping;
      w.then(we, we);
    }
    function Jl(u, p, w) {
      var D = p.blockedSegment.formatContext, H = p.legacyContext, re = p.context, pe = null;
      pe = p.componentStack;
      try {
        return nr(u, p, w);
      } catch (we) {
        if (zl(), typeof we == "object" && we !== null && typeof we.then == "function") {
          rr(u, p, we), p.blockedSegment.formatContext = D, p.legacyContext = H, p.context = re, fi(re), p.componentStack = pe;
          return;
        } else
          throw p.blockedSegment.formatContext = D, p.legacyContext = H, p.context = re, fi(re), p.componentStack = pe, we;
      }
    }
    function fu(u, p, w, D) {
      var H = ur(u, D);
      if (p === null ? Kr(u, D) : (p.pendingTasks--, p.forceClientRender || (p.forceClientRender = !0, p.errorDigest = H, Vl(p, D), p.parentFlushed && u.clientRenderedBoundaries.push(p))), u.allPendingTasks--, u.allPendingTasks === 0) {
        var re = u.onAllReady;
        re();
      }
    }
    function kd(u) {
      var p = this, w = u.blockedBoundary, D = u.blockedSegment;
      D.status = No, hu(p, w, D);
    }
    function $o(u, p, w) {
      var D = u.blockedBoundary, H = u.blockedSegment;
      if (H.status = No, D === null)
        p.allPendingTasks--, p.status !== pa && (p.status = pa, p.destination !== null && E(p.destination));
      else {
        if (D.pendingTasks--, !D.forceClientRender) {
          D.forceClientRender = !0;
          var re = w === void 0 ? new Error("The render was aborted by the server without a reason.") : w;
          D.errorDigest = p.onError(re);
          {
            var pe = "The server did not finish this Suspense boundary: ";
            re && typeof re.message == "string" ? re = pe + re.message : re = pe + String(re);
            var we = Fr;
            Fr = u;
            try {
              Vl(D, re);
            } finally {
              Fr = we;
            }
          }
          D.parentFlushed && p.clientRenderedBoundaries.push(D);
        }
        if (D.fallbackAbortableTasks.forEach(function(h) {
          return $o(h, p, w);
        }), D.fallbackAbortableTasks.clear(), p.allPendingTasks--, p.allPendingTasks === 0) {
          var l = p.onAllReady;
          l();
        }
      }
    }
    function Bo(u, p) {
      if (p.chunks.length === 0 && p.children.length === 1 && p.children[0].boundary === null) {
        var w = p.children[0];
        w.id = p.id, w.parentFlushed = !0, w.status === jr && Bo(u, w);
      } else {
        var D = u.completedSegments;
        D.push(p);
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
          u.onShellError = Cr;
          var D = u.onShellReady;
          D();
        }
      } else if (p.pendingTasks--, !p.forceClientRender) {
        if (p.pendingTasks === 0)
          w.parentFlushed && w.status === jr && Bo(p, w), p.parentFlushed && u.completedBoundaries.push(p), p.fallbackAbortableTasks.forEach(kd, u), p.fallbackAbortableTasks.clear();
        else if (w.parentFlushed && w.status === jr) {
          Bo(p, w);
          var H = p.completedSegments;
          H.length === 1 && p.parentFlushed && u.partialBoundaries.push(p);
        }
      }
      if (u.allPendingTasks--, u.allPendingTasks === 0) {
        var re = u.onAllReady;
        re();
      }
    }
    function pu(u, p) {
      var w = p.blockedSegment;
      if (w.status === Bl) {
        fi(p.context);
        var D = null;
        D = Fr, Fr = p;
        try {
          nr(u, p, p.node), br(w.chunks, u.responseState, w.lastPushedText, w.textEmbedded), p.abortSet.delete(p), w.status = jr, hu(u, p.blockedBoundary, w);
        } catch (re) {
          if (zl(), typeof re == "object" && re !== null && typeof re.then == "function") {
            var H = p.ping;
            re.then(H, H);
          } else
            p.abortSet.delete(p), w.status = ha, fu(u, p.blockedBoundary, w, re);
        } finally {
          Fr = D;
        }
      }
    }
    function wi(u) {
      if (u.status !== pa) {
        var p = go(), w = vi.current;
        vi.current = tu;
        var D;
        D = Mo.getCurrentStack, Mo.getCurrentStack = bi;
        var H = $l;
        yi(u.responseState);
        try {
          var re = u.pingedTasks, pe;
          for (pe = 0; pe < re.length; pe++) {
            var we = re[pe];
            pu(u, we);
          }
          re.splice(0, pe), u.destination !== null && Ho(u, u.destination);
        } catch (l) {
          ur(u, l), Kr(u, l);
        } finally {
          yi(H), vi.current = w, Mo.getCurrentStack = D, w === tu && fi(p);
        }
      }
    }
    function Ti(u, p, w) {
      switch (w.parentFlushed = !0, w.status) {
        case Bl: {
          var D = w.id = u.nextSegmentId++;
          return w.lastPushedText = !1, w.textEmbedded = !1, ba(p, u.responseState, D);
        }
        case jr: {
          w.status = _o;
          for (var H = !0, re = w.chunks, pe = 0, we = w.children, l = 0; l < we.length; l++) {
            for (var h = we[l]; pe < h.index; pe++)
              v(p, re[pe]);
            H = Io(u, p, h);
          }
          for (; pe < re.length - 1; pe++)
            v(p, re[pe]);
          return pe < re.length && (H = y(p, re[pe])), H;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function Io(u, p, w) {
      var D = w.boundary;
      if (D === null)
        return Ti(u, p, w);
      if (D.parentFlushed = !0, D.forceClientRender)
        return Un(p, u.responseState, D.errorDigest, D.errorMessage, D.errorComponentStack), Ti(u, p, w), cl(p, u.responseState);
      if (D.pendingTasks > 0) {
        D.rootSegmentID = u.nextSegmentId++, D.completedSegments.length > 0 && u.partialBoundaries.push(D);
        var H = D.id = Lr(u.responseState);
        return ka(p, u.responseState, H), Ti(u, p, w), wa(p, u.responseState);
      } else {
        if (D.byteSize > u.progressiveChunkSize)
          return D.rootSegmentID = u.nextSegmentId++, u.completedBoundaries.push(D), ka(p, u.responseState, D.id), Ti(u, p, w), wa(p, u.responseState);
        Gi(p, u.responseState);
        var re = D.completedSegments;
        if (re.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var pe = re[0];
        return Io(u, p, pe), Zi(p, u.responseState);
      }
    }
    function mu(u, p, w) {
      return Os(p, u.responseState, w.id, w.errorDigest, w.errorMessage, w.errorComponentStack);
    }
    function Ci(u, p, w) {
      return Ct(p, u.responseState, w.formatContext, w.id), Io(u, p, w), sn(p, w.formatContext);
    }
    function Ai(u, p, w) {
      for (var D = w.completedSegments, H = 0; H < D.length; H++) {
        var re = D[H];
        es(u, p, w, re);
      }
      return D.length = 0, dl(p, u.responseState, w.id, w.rootSegmentID);
    }
    function wd(u, p, w) {
      for (var D = w.completedSegments, H = 0; H < D.length; H++) {
        var re = D[H];
        if (!es(u, p, w, re))
          return H++, D.splice(0, H), !1;
      }
      return D.splice(0, H), !0;
    }
    function es(u, p, w, D) {
      if (D.status === _o)
        return !0;
      var H = D.id;
      if (H === -1) {
        var re = D.id = w.rootSegmentID;
        if (re === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Ci(u, p, D);
      } else
        return Ci(u, p, D), Nc(p, u.responseState, H);
    }
    function Ho(u, p) {
      g();
      try {
        var w = u.completedRootSegment;
        w !== null && u.pendingRootTasks === 0 && (Io(u, p, w), u.completedRootSegment = null, ll(p, u.responseState));
        var D = u.clientRenderedBoundaries, H;
        for (H = 0; H < D.length; H++) {
          var re = D[H];
          mu(u, p, re);
        }
        D.splice(0, H);
        var pe = u.completedBoundaries;
        for (H = 0; H < pe.length; H++) {
          var we = pe[H];
          Ai(u, p, we);
        }
        pe.splice(0, H), k(p), g(p);
        var l = u.partialBoundaries;
        for (H = 0; H < l.length; H++) {
          var h = l[H];
          if (!wd(u, p, h)) {
            u.destination = null, H++, l.splice(0, H);
            return;
          }
        }
        l.splice(0, H);
        var S = u.completedBoundaries;
        for (H = 0; H < S.length; H++) {
          var C = S[H];
          Ai(u, p, C);
        }
        S.splice(0, H);
      } finally {
        k(p), u.allPendingTasks === 0 && u.pingedTasks.length === 0 && u.clientRenderedBoundaries.length === 0 && u.completedBoundaries.length === 0 && (u.abortableTasks.size !== 0 && a("There was still abortable task at the root when we closed. This is a bug in React."), E(p));
      }
    }
    function Td(u) {
      f(function() {
        return wi(u);
      });
    }
    function gu(u, p) {
      if (u.status === Il) {
        u.status = pa, L(p, u.fatalError);
        return;
      }
      if (u.status !== pa && u.destination === null) {
        u.destination = p;
        try {
          Ho(u, p);
        } catch (w) {
          ur(u, w), Kr(u, w);
        }
      }
    }
    function Wo(u, p) {
      try {
        var w = u.abortableTasks;
        w.forEach(function(D) {
          return $o(D, u, p);
        }), w.clear(), u.destination !== null && Ho(u, u.destination);
      } catch (D) {
        ur(u, D), Kr(u, D);
      }
    }
    function Cd(u, p) {
      return new Promise(function(w, D) {
        var H, re, pe = new Promise(function(F, Q) {
          re = F, H = Q;
        });
        function we() {
          var F = new ReadableStream(
            {
              type: "bytes",
              pull: function(Q) {
                gu(h, Q);
              },
              cancel: function(Q) {
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
        function l(F) {
          pe.catch(function() {
          }), D(F);
        }
        var h = md(u, An(p ? p.identifierPrefix : void 0, p ? p.nonce : void 0, p ? p.bootstrapScriptContent : void 0, p ? p.bootstrapScripts : void 0, p ? p.bootstrapModules : void 0), Jt(p ? p.namespaceURI : void 0), p ? p.progressiveChunkSize : void 0, p ? p.onError : void 0, re, we, l, H);
        if (p && p.signal) {
          var S = p.signal, C = function() {
            Wo(h, S.reason), S.removeEventListener("abort", C);
          };
          S.addEventListener("abort", C);
        }
        Td(h);
      });
    }
    Mu.renderToReadableStream = Cd, Mu.version = t;
  }()), Mu;
}
var Vi, Pf;
process.env.NODE_ENV === "production" ? (Vi = wE(), Pf = TE()) : (Vi = CE(), Pf = AE());
Xa.version = Vi.version;
Xa.renderToString = Vi.renderToString;
Xa.renderToStaticMarkup = Vi.renderToStaticMarkup;
Xa.renderToNodeStream = Vi.renderToNodeStream;
Xa.renderToStaticNodeStream = Vi.renderToStaticNodeStream;
Xa.renderToReadableStream = Pf.renderToReadableStream;
const PE = ({ width: e, height: t, runtime: r }) => {
  var xe, De;
  const { config: n } = se.useContext(Et), { sankey: a } = n, o = n == null ? void 0 : n.data[0], [f, s] = se.useState(0), c = se.useRef([]), [d, g] = se.useState(""), v = (oe) => {
    g(oe);
  }, y = () => {
    g("");
  }, [k, E] = se.useState(!1);
  se.useEffect(() => {
    window.innerWidth < 768 && window.innerHeight > window.innerWidth && E(!0);
  }, [window.innerWidth]);
  const M = () => {
    E(!1);
  };
  se.useEffect(() => {
    var ze;
    let oe = 0;
    (ze = c == null ? void 0 : c.current) == null || ze.map((He) => {
      const Ce = He == null ? void 0 : He.getBoundingClientRect().width;
      Ce > oe && (oe = Ce);
    }), s(oe);
  }, [c, a, window.innerWidth]);
  const T = Array.from(new Set((xe = o == null ? void 0 : o.links) == null ? void 0 : xe.flatMap((oe) => [oe.source, oe.target]))), m = {
    nodes: T.map((oe) => ({ id: oe })),
    links: (De = o == null ? void 0 : o.links) == null ? void 0 : De.map((oe) => ({
      source: T.findIndex((ze) => ze === oe.source),
      target: T.findIndex((ze) => ze === oe.target),
      value: oe.value
    }))
  };
  let L = 5;
  const O = 50, _ = bE().nodeWidth(a.nodeSize.nodeWidth).nodePadding(a.nodePadding).iterations(a.iterations).nodeAlign(mE).extent([
    [a.margin.margin_x, Number(a.margin.margin_y)],
    [e - L - f, n.heights.vertical - O]
  ]), { nodes: N, links: R } = _(m), j = (oe) => {
    var Oe;
    let ze = 30, He = 0, Ce = "node-value--storynode", ge = !0;
    return (Oe = o == null ? void 0 : o.storyNodeText) != null && Oe.every((ie) => ie.StoryNode !== oe) && (ge = !1, He = 10, ze = 8, Ce = "node-value"), { textPositionHorizontal: ze, textPositionVertical: He, classStyle: Ce, storyNodes: ge };
  }, B = (oe) => {
    const ze = m.nodes.find((ge) => ge.id === oe), He = [], Ce = [];
    return ze && (R.forEach((ge) => {
      const Oe = ge.target, ie = ge.source;
      Oe.id === oe && He.push(ie.id);
    }), He.forEach((ge) => {
      R.forEach((Oe) => {
        const ie = Oe.target, ke = Oe.source;
        ie.id === d && ke.id === ge && Ce.push(Oe);
      });
    })), { sourceNodes: He, activeLinks: Ce };
  }, V = `${((o == null ? void 0 : o.tooltips.find((oe) => oe.node === d)) || {}).value}`, q = `${((o == null ? void 0 : o.tooltips.find((oe) => oe.node === d)) || {}).summary}`, Y = ((o == null ? void 0 : o.tooltips.find((oe) => oe.node === d)) || {}).column1Label, U = ((o == null ? void 0 : o.tooltips.find((oe) => oe.node === d)) || {}).column2Label, te = ((o == null ? void 0 : o.tooltips.find((oe) => oe.node === d)) || {}).column1, me = ((o == null ? void 0 : o.tooltips.find((oe) => oe.node === d)) || {}).column2, I = ({ columnData: oe }) => /* @__PURE__ */ i.createElement("ul", null, oe == null ? void 0 : oe.map((ze, He) => /* @__PURE__ */ i.createElement("li", { key: He }, ze.label, ": ", ze.value, " (", ze.additional_info, "%)"))), le = Xa.renderToString(/* @__PURE__ */ i.createElement(I, { columnData: te })), ue = Xa.renderToString(/* @__PURE__ */ i.createElement(I, { columnData: me })), fe = `<div class="sankey-chart__tooltip">
                    <span class="sankey-chart__tooltip--tooltip-header">${d}</span>
                    <span class="sankey-chart__tooltip--tooltip-header">${V}</span>
                    <div class="divider"></div>
                    <span><strong>Summary: </strong>${q}</span>
                    <div class="divider"></div>
                      <div class="sankey-chart__tooltip--info-section">
                        <div>
                          <span><strong>${Y}<strong></span>
                          ${le}
                        </div>
                        <div>
                          <span><strong>${U}<strong></span>
                          ${ue}
                        </div>
                      </div>
                    </div>`, ae = m.nodes.map((oe, ze) => {
    var We, Ye;
    let { textPositionHorizontal: He, textPositionVertical: Ce, classStyle: ge, storyNodes: Oe } = j(oe.id), { sourceNodes: ie } = B(d), ke = a.opacity.nodeOpacityDefault, Pe = a.nodeColor.default;
    return d !== oe.id && d !== "" && !ie.includes(oe.id) && (Pe = a.nodeColor.inactive, ke = a.opacity.nodeOpacityInactive), /* @__PURE__ */ i.createElement(rt, { className: "", key: ze }, /* @__PURE__ */ i.createElement(
      "rect",
      {
        height: oe.y1 - oe.y0 + 2,
        width: _.nodeWidth(),
        x: oe.x0,
        y: oe.y0 - 1,
        fill: Pe,
        fillOpacity: ke,
        rx: a.rxValue,
        "data-tooltip-html": o.tooltips && n.enableTooltips ? fe : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${r.uniqueId}-sankey`,
        onClick: () => v(oe.id),
        style: { pointerEvents: "visible", cursor: "pointer" }
      }
    ), Oe ? /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
      bt,
      {
        x: oe.x0 + He,
        textAnchor: m.nodes.length - 1 === ze ? "end" : "start",
        verticalAnchor: "end",
        y: (oe.y1 + oe.y0) / 2 - 30,
        fill: a.nodeFontColor,
        fontWeight: "bold",
        style: { pointerEvents: "none" },
        className: "node-text"
      },
      (((We = o == null ? void 0 : o.storyNodeText) == null ? void 0 : We.find((qe) => qe.StoryNode === oe.id)) || {}).segmentTextBefore
    ), /* @__PURE__ */ i.createElement(bt, { verticalAnchor: "end", className: ge, x: oe.x0 + He, y: (oe.y1 + oe.y0 + 25) / 2, fill: a.storyNodeFontColor || a.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, typeof oe.value == "number" ? oe.value.toLocaleString() : oe.value), /* @__PURE__ */ i.createElement(
      bt,
      {
        x: oe.x0 + He,
        y: (oe.y1 + oe.y0) / 2 + 50,
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: m.nodes.length === ze ? "end" : "start",
        style: { pointerEvents: "none" },
        className: "node-text",
        verticalAnchor: "end"
      },
      (((Ye = o == null ? void 0 : o.storyNodeText) == null ? void 0 : Ye.find((qe) => qe.StoryNode === oe.id)) || {}).segmentTextAfter
    )) : /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("text", { x: oe.x0 + He, y: (oe.y1 + oe.y0) / 2 + Ce, dominantBaseline: "text-before-edge", fill: a.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, /* @__PURE__ */ i.createElement("tspan", { id: oe.id, className: "node-id" }, oe.id)), /* @__PURE__ */ i.createElement(
      "text",
      {
        x: oe.x0 + He,
        y: (oe.y1 + oe.y0) / 2 + 30,
        dominantBaseline: "text-before-edge",
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start",
        style: { pointerEvents: "none" }
      },
      /* @__PURE__ */ i.createElement("tspan", { className: ge }, a.nodeValueStyle.textBefore + (typeof oe.value == "number" ? oe.value.toLocaleString() : oe.value) + a.nodeValueStyle.textAfter)
    )));
  }), W = R.map((oe, ze) => {
    const Ce = kE()(oe);
    let ge = a.opacity.LinkOpacityDefault, Oe = a.linkColor.default, { activeLinks: ie } = B(d);
    return !ie.includes(oe) && d !== "" && (Oe = a.linkColor.inactive, ge = a.opacity.LinkOpacityInactive), /* @__PURE__ */ i.createElement("path", { key: ze, d: Ce, stroke: Oe, fill: "none", strokeOpacity: ge, strokeWidth: oe.width + 2 });
  }), Z = m.nodes.reduce((oe, ze) => Math.max(oe, ze.depth), -1), Ae = m.nodes.filter((oe) => oe.depth === Z).map((oe, ze) => {
    var We, Ye;
    let { textPositionHorizontal: He, textPositionVertical: Ce, classStyle: ge, storyNodes: Oe } = j(oe.id), { sourceNodes: ie } = B(d), ke = a.opacity.nodeOpacityDefault, Pe = a.nodeColor.default;
    return d !== oe.id && d !== "" && !ie.includes(oe.id) && (Pe = a.nodeColor.inactive, ke = a.opacity.nodeOpacityInactive), /* @__PURE__ */ i.createElement(rt, { className: "", key: ze, innerRef: (qe) => c.current[ze] = qe }, /* @__PURE__ */ i.createElement(
      "rect",
      {
        height: oe.y1 - oe.y0 + 2,
        width: _.nodeWidth(),
        x: oe.x0,
        y: oe.y0 - 1,
        fill: Pe,
        fillOpacity: ke,
        rx: a.rxValue,
        "data-tooltip-html": o.tooltips && n.enableTooltips ? fe : null,
        "data-tooltip-id": "tooltip",
        onClick: () => v(oe.id),
        style: { pointerEvents: "visible", cursor: "pointer" }
      }
    ), Oe ? /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
      bt,
      {
        x: oe.x0 + He,
        textAnchor: m.nodes.length - 1 === ze ? "end" : "start",
        verticalAnchor: "end",
        y: (oe.y1 + oe.y0) / 2 - 30,
        fill: a.nodeFontColor,
        fontWeight: "bold",
        style: { pointerEvents: "none" },
        className: "node-text"
      },
      (((We = o == null ? void 0 : o.storyNodeText) == null ? void 0 : We.find((qe) => qe.StoryNode === oe.id)) || {}).segmentTextBefore
    ), /* @__PURE__ */ i.createElement(bt, { verticalAnchor: "end", className: ge, x: oe.x0 + He, y: (oe.y1 + oe.y0 + 25) / 2, fill: a.storyNodeFontColor || a.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, typeof oe.value == "number" ? oe.value.toLocaleString() : oe.value), /* @__PURE__ */ i.createElement(
      bt,
      {
        x: oe.x0 + He,
        y: (oe.y1 + oe.y0) / 2 + 50,
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: m.nodes.length === ze ? "end" : "start",
        style: { pointerEvents: "none" },
        className: "node-text",
        verticalAnchor: "end"
      },
      (((Ye = o == null ? void 0 : o.storyNodeText) == null ? void 0 : Ye.find((qe) => qe.StoryNode === oe.id)) || {}).segmentTextAfter
    )) : /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("text", { x: oe.x0 + He, y: (oe.y1 + oe.y0) / 2 + Ce, dominantBaseline: "text-before-edge", fill: a.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, /* @__PURE__ */ i.createElement("tspan", { id: oe.id, className: "node-id" }, oe.id)), /* @__PURE__ */ i.createElement(
      "text",
      {
        x: oe.x0 + He,
        y: (oe.y1 + oe.y0) / 2 + 30,
        dominantBaseline: "text-before-edge",
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start",
        style: { pointerEvents: "none" }
      },
      /* @__PURE__ */ i.createElement("tspan", { className: ge }, a.nodeValueStyle.textBefore + (typeof oe.value == "number" ? oe.value.toLocaleString() : oe.value) + a.nodeValueStyle.textAfter)
    )));
  });
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: "sankey-chart" }, /* @__PURE__ */ i.createElement("svg", { className: "sankey-chart__diagram", width: e, height: Number(n.heights.vertical), style: { overflow: "visible" } }, /* @__PURE__ */ i.createElement(rt, { className: "links" }, W), /* @__PURE__ */ i.createElement(rt, { className: "nodes" }, ae), /* @__PURE__ */ i.createElement(rt, { className: "finalNodes", style: { display: "none" } }, Ae)), /* @__PURE__ */ i.createElement(ly, { id: `cdc-open-viz-tooltip-${r.uniqueId}-sankey`, afterHide: () => y(), events: ["click"], place: "bottom", style: { backgroundColor: "rgba(238, 238, 238, 1)", color: "black", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" } }), k && /* @__PURE__ */ i.createElement("div", { className: "popup" }, /* @__PURE__ */ i.createElement("div", { className: "popup-content" }, /* @__PURE__ */ i.createElement("button", { className: "visually-hidden", onClick: M }, "Select for accessible version."), /* @__PURE__ */ i.createElement("p", null, /* @__PURE__ */ i.createElement("strong", null, "Please change the orientation of your screen or increase the size of your browser to view the diagram better."))))));
};
var RE = {
  top: "top",
  left: "left",
  right: "right",
  bottom: "bottom"
};
const ir = RE;
function LE(e) {
  var t = e.labelOffset, r = e.labelProps, n = e.orientation, a = e.range, o = e.tickLabelFontSize, f = e.tickLength, s = n === ir.left || n === ir.top ? -1 : 1, c, d, g;
  if (n === ir.top || n === ir.bottom) {
    var v = n === ir.bottom && typeof r.fontSize == "number" ? r.fontSize : 0;
    c = (Number(a[0]) + Number(a[a.length - 1])) / 2, d = s * (f + t + o + v);
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
function DE(e) {
  var t = e.hideTicks, r = e.horizontal, n = e.orientation, a = e.tickClassName, o = e.tickComponent, f = e.tickLabelProps, s = e.tickStroke, c = s === void 0 ? "#222" : s, d = e.tickTransform, g = e.ticks, v = e.strokeWidth, y = e.tickLineProps;
  return g.map(function(k) {
    var E, M = k.value, T = k.index, m = k.from, L = k.to, O = k.formattedValue, _ = (E = f[T]) != null ? E : {}, N = Math.max(10, typeof _.fontSize == "number" && _.fontSize || 0), R = L.y + (r && n !== ir.top ? N : 0);
    return /* @__PURE__ */ i.createElement(rt, {
      key: "visx-tick-" + M + "-" + T,
      className: Rn("visx-axis-tick", a),
      transform: d
    }, !t && /* @__PURE__ */ i.createElement(rn, vs({
      from: m,
      to: L,
      stroke: c,
      strokeWidth: v,
      strokeLinecap: "square"
    }, y)), o ? o(vs({}, _, {
      x: L.x,
      y: R,
      formattedValue: O
    })) : /* @__PURE__ */ i.createElement(bt, vs({
      x: L.x,
      y: R
    }, _), O));
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
var im = {
  textAnchor: "middle",
  fontFamily: "Arial",
  fontSize: 10,
  fill: "#222"
};
function OE(e) {
  var t = e.axisFromPoint, r = e.axisLineClassName, n = e.axisToPoint, a = e.hideAxisLine, o = e.hideTicks, f = e.horizontal, s = e.label, c = s === void 0 ? "" : s, d = e.labelClassName, g = e.labelOffset, v = g === void 0 ? 14 : g, y = e.labelProps, k = y === void 0 ? im : y, E = e.orientation, M = E === void 0 ? ir.bottom : E, T = e.scale, m = e.stroke, L = m === void 0 ? "#222" : m, O = e.strokeDasharray, _ = e.strokeWidth, N = _ === void 0 ? 1 : _, R = e.tickClassName, j = e.tickComponent, B = e.tickLineProps, V = e.tickLabelProps, q = e.tickLength, Y = q === void 0 ? 8 : q, U = e.tickStroke, te = U === void 0 ? "#222" : U, me = e.tickTransform, I = e.ticks, le = e.ticksComponent, ue = le === void 0 ? DE : le, fe = pc({}, im, typeof V == "object" ? V : null), ae = I.map(function(Z) {
    var ee = Z.value, Ae = Z.index;
    return typeof V == "function" ? V(ee, Ae, I) : fe;
  }), W = Math.max.apply(Math, [10].concat(ae.map(function(Z) {
    return typeof Z.fontSize == "number" ? Z.fontSize : 0;
  })));
  return /* @__PURE__ */ i.createElement(i.Fragment, null, ue({
    hideTicks: o,
    horizontal: f,
    orientation: M,
    scale: T,
    tickClassName: R,
    tickComponent: j,
    tickLabelProps: ae,
    tickStroke: te,
    tickTransform: me,
    ticks: I,
    strokeWidth: N,
    tickLineProps: B
  }), !a && /* @__PURE__ */ i.createElement(rn, {
    className: Rn("visx-axis-line", r),
    from: t,
    to: n,
    stroke: L,
    strokeWidth: N,
    strokeDasharray: O
  }), c && /* @__PURE__ */ i.createElement(bt, pc({
    className: Rn("visx-axis-label", d)
  }, LE({
    labelOffset: v,
    labelProps: k,
    orientation: M,
    range: T.range(),
    tickLabelFontSize: W,
    tickLength: Y
  }), k), c));
}
function ME(e, t) {
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
function _E(e) {
  var t = e;
  return "tickFormat" in t ? t.tickFormat() : wv;
}
function _u(e, t) {
  var r = e.x, n = e.y;
  return new il(t ? {
    x: r,
    y: n
  } : {
    x: n,
    y: r
  });
}
function Rf() {
  return Rf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Rf.apply(this, arguments);
}
var Yd = 0;
function NE(e) {
  return e === void 0 && (e = Yd), typeof e == "number" ? {
    start: e,
    end: e
  } : Rf({
    start: Yd,
    end: Yd
  }, e);
}
var FE = ["children", "axisClassName", "hideAxisLine", "hideTicks", "hideZero", "innerRef", "left", "numTicks", "orientation", "rangePadding", "scale", "tickFormat", "tickLength", "tickValues", "top"];
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
function zE(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Lc(e) {
  var t = e.children, r = t === void 0 ? OE : t, n = e.axisClassName, a = e.hideAxisLine, o = a === void 0 ? !1 : a, f = e.hideTicks, s = f === void 0 ? !1 : f, c = e.hideZero, d = c === void 0 ? !1 : c, g = e.innerRef, v = e.left, y = v === void 0 ? 0 : v, k = e.numTicks, E = k === void 0 ? 10 : k, M = e.orientation, T = M === void 0 ? ir.bottom : M, m = e.rangePadding, L = m === void 0 ? 0 : m, O = e.scale, _ = e.tickFormat, N = e.tickLength, R = N === void 0 ? 8 : N, j = e.tickValues, B = e.top, V = B === void 0 ? 0 : B, q = zE(e, FE), Y = _ ?? _E(O), U = T === ir.left, te = T === ir.top, me = te || T === ir.bottom, I = ME(O), le = U || te ? -1 : 1, ue = O.range(), fe = NE(L), ae = _u({
    x: Number(ue[0]) + 0.5 - fe.start,
    y: 0
  }, me), W = _u({
    x: Number(ue[ue.length - 1]) + 0.5 + fe.end,
    y: 0
  }, me), Z = (j ?? kv(O, E)).filter(function(Ae) {
    return !d || Ae !== 0 && Ae !== "0";
  }).map(function(Ae, xe) {
    return {
      value: Ae,
      index: xe
    };
  }), ee = Z.map(function(Ae) {
    var xe = Ae.value, De = Ae.index, oe = Ev(I(xe));
    return {
      value: xe,
      index: De,
      from: _u({
        x: oe,
        y: 0
      }, me),
      to: _u({
        x: oe,
        y: R * le
      }, me),
      formattedValue: Y(xe, De, Z)
    };
  });
  return /* @__PURE__ */ i.createElement(rt, {
    className: Rn("visx-axis", n),
    innerRef: g,
    top: V,
    left: y
  }, r(Lf({}, q, {
    axisFromPoint: ae,
    axisToPoint: W,
    hideAxisLine: o,
    hideTicks: s,
    hideZero: d,
    horizontal: me,
    numTicks: E,
    orientation: T,
    rangePadding: L,
    scale: O,
    tickFormat: Y,
    tickLength: R,
    tickPosition: I,
    tickSign: le,
    ticks: ee
  })));
}
var $E = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
function BE(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var IE = {
  dx: "-0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "end"
};
function HE(e) {
  var t = e.axisClassName, r = e.labelOffset, n = r === void 0 ? 36 : r, a = e.tickLength, o = a === void 0 ? 8 : a, f = e.tickLabelProps, s = BE(e, $E), c = typeof f == "function" ? f : mc({}, IE, f);
  return /* @__PURE__ */ i.createElement(Lc, mc({
    axisClassName: Rn("visx-axis-left", t),
    labelOffset: n,
    orientation: ir.left,
    tickLabelProps: c,
    tickLength: o
  }, s));
}
var WE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
function VE(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var jE = {
  dx: "0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "start"
};
function UE(e) {
  var t = e.axisClassName, r = e.labelOffset, n = r === void 0 ? 36 : r, a = e.tickLength, o = a === void 0 ? 8 : a, f = e.tickLabelProps, s = VE(e, WE), c = typeof f == "function" ? f : gc({}, jE, f);
  return /* @__PURE__ */ i.createElement(Lc, gc({
    axisClassName: Rn("visx-axis-right", t),
    labelOffset: n,
    orientation: ir.right,
    tickLabelProps: c,
    tickLength: o
  }, s));
}
var KE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
function YE(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var XE = {
  dy: "-0.75em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function qE(e) {
  var t = e.axisClassName, r = e.labelOffset, n = r === void 0 ? 8 : r, a = e.tickLength, o = a === void 0 ? 8 : a, f = e.tickLabelProps, s = YE(e, KE), c = typeof f == "function" ? f : yc({}, XE, f);
  return /* @__PURE__ */ i.createElement(Lc, yc({
    axisClassName: Rn("visx-axis-top", t),
    labelOffset: n,
    orientation: ir.top,
    tickLabelProps: c,
    tickLength: o
  }, s));
}
var GE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
function ZE(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var QE = {
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function Hu(e) {
  var t = e.axisClassName, r = e.labelOffset, n = r === void 0 ? 8 : r, a = e.tickLength, o = a === void 0 ? 8 : a, f = e.tickLabelProps, s = ZE(e, GE), c = typeof f == "function" ? f : vc({}, QE, f);
  return /* @__PURE__ */ i.createElement(Lc, vc({
    axisClassName: Rn("visx-axis-bottom", t),
    labelOffset: n,
    orientation: ir.bottom,
    tickLabelProps: c,
    tickLength: o
  }, s));
}
const xs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  curveBasis: f0,
  curveBasisClosed: h0,
  curveBasisOpen: p0,
  curveBundle: m0,
  curveCardinal: g0,
  curveCardinalClosed: y0,
  curveCardinalOpen: v0,
  curveCatmullRom: x0,
  curveCatmullRomClosed: b0,
  curveCatmullRomOpen: S0,
  curveLinear: wc,
  curveLinearClosed: of,
  curveMonotoneX: Iu,
  curveMonotoneY: E0,
  curveNatural: k0,
  curveStep: w0,
  curveStepAfter: C0,
  curveStepBefore: T0
}, Symbol.toStringTag, { value: "Module" })), JE = (e) => {
  var N;
  const { xScale: t, yScale: r, yMax: n, xMax: a, handleTooltipMouseOver: o, handleTooltipMouseOff: f, isDebug: s, children: c } = e;
  let { transformedData: d, config: g, handleLineType: v, parseDate: y, formatDate: k, formatNumber: E, seriesHighlight: M, colorScale: T, rawData: m } = se.useContext(Et);
  const L = g.brush.active && ((N = g.brush.data) != null && N.length) ? g.brush.data : d;
  if (!L)
    return;
  const O = (R) => (En(g.xAxis) ? t(y(R[g.xAxis.dataKey], !1)) : t(R[g.xAxis.dataKey])) + (t.bandwidth ? t.bandwidth() / 2 : 0), _ = (R, j, B = void 0) => r(R[B.dataKey]);
  return L && /* @__PURE__ */ i.createElement("svg", null, /* @__PURE__ */ i.createElement(Ir, { component: "AreaChart" }, /* @__PURE__ */ i.createElement(rt, { className: "area-chart", key: "area-wrapper", left: Number(g.yAxis.size) }, (g.runtime.areaSeriesKeys || g.series).map((R, j) => {
    let B = L.map((U) => ({
      [g.xAxis.dataKey]: U[g.xAxis.dataKey],
      [R.dataKey]: U[R.dataKey]
    })), V = xs[R.lineType], q = g.legend.behavior === "highlight" && M.length > 0 && M.indexOf(R.dataKey) === -1, Y = g.legend.behavior === "highlight" || M.length === 0 || M.indexOf(R.dataKey) !== -1;
    return /* @__PURE__ */ i.createElement(i.Fragment, { key: j }, /* @__PURE__ */ i.createElement(
      ma,
      {
        data: B,
        x: (U) => O(U),
        y: (U) => _(U, j, R),
        stroke: Y ? T ? T(g.runtime.seriesLabels ? g.runtime.seriesLabels[R.dataKey] : R.dataKey) : "#000" : "transparent",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        curve: V,
        strokeDasharray: R.type ? v(R.type) : 0
      }
    ), /* @__PURE__ */ i.createElement(
      Q0,
      {
        key: "area-chart",
        fill: Y ? T ? T(g.runtime.seriesLabels ? g.runtime.seriesLabels[R.dataKey] : R.dataKey) : "#000" : "transparent",
        fillOpacity: q ? 0.25 : 0.5,
        data: B,
        x: (U) => O(U),
        y: (U) => _(U, j, R),
        yScale: r,
        curve: V,
        strokeDasharray: R.type ? v(R.type) : 0
      }
    ));
  }), /* @__PURE__ */ i.createElement(gr, { width: Number(a), height: Number(n), fill: "transparent", fillOpacity: 0.05, onMouseMove: (R) => o(R, m), onMouseLeave: f }))));
}, ek = se.memo(JE), xc = {
  Linear: "curveLinear",
  Cardinal: "curveCardinal",
  Natural: "curveNatural",
  "Monotone X": "curveMonotoneX",
  Step: "curveStep"
}, tk = ({ xScale: e, yScale: t, yMax: r, xMax: n, handleTooltipMouseOver: a, handleTooltipMouseOff: o, isDebug: f }) => {
  var M;
  let { transformedData: s, config: c, seriesHighlight: d, colorScale: g, rawData: v } = se.useContext(Et);
  const y = c.brush.active && ((M = c.brush.data) != null && M.length) ? c.brush.data : s;
  if (!y)
    return;
  const k = (T) => {
    if (c.xAxis.type === "categorical")
      return e(T);
    if (En(c.xAxis)) {
      let m = new Date(T);
      return e(m);
    }
  }, E = 2;
  return y && /* @__PURE__ */ i.createElement("svg", { height: Number(r) }, /* @__PURE__ */ i.createElement(Ir, { component: "AreaChartStacked" }, /* @__PURE__ */ i.createElement(rt, { className: "area-chart", key: "area-wrapper", left: Number(c.yAxis.size) + E / 2, height: Number(r), style: { overflow: "hidden" } }, /* @__PURE__ */ i.createElement(
    aS,
    {
      data: y,
      keys: c.runtime.areaSeriesKeys.map((T) => T.dataKey) || c.series.map((T) => T.dataKey),
      x0: (T) => k(T.data[c.xAxis.dataKey]),
      y0: (T) => Number(t(T[0])),
      y1: (T) => Number(t(T[1])),
      curve: xs[xc[c.stackedAreaChartLineType]]
    },
    ({ stacks: T, path: m }) => T.map((L, O) => {
      let _ = c.legend.behavior === "highlight" && d.length > 0 && d.indexOf(L.key) === -1, N = c.legend.behavior === "highlight" || d.length === 0 || d.indexOf(L.key) !== -1;
      return (
        // prettier-ignore
        /* @__PURE__ */ i.createElement(
          "path",
          {
            key: L.key,
            d: m(L) || "",
            strokeWidth: 2,
            stroke: N ? g ? g(c.runtime.seriesLabels ? c.runtime.seriesLabels[L.key] : L.key) : "#000" : "transparent",
            fillOpacity: _ ? 0.2 : 1,
            fill: N ? g ? g(c.runtime.seriesLabels ? c.runtime.seriesLabels[L.key] : L.key) : "#000" : "transparent"
          }
        )
      );
    })
  ), /* @__PURE__ */ i.createElement(gr, { width: Number(n), height: Number(r), fill: "transparent", onMouseMove: (T) => a(T, v), onMouseLeave: o }))));
}, nk = se.memo(tk), Rs = () => {
  const { config: e, colorPalettes: t, tableData: r, updateConfig: n, parseDate: a, formatDate: o, setSeriesHighlight: f, seriesHighlight: s } = se.useContext(Et), { orientation: c } = e, [d, g] = se.useState(null), v = c === "horizontal", y = 1, k = e.lollipopSize === "large" ? 7 : e.lollipopSize === "medium" ? 6 : 5, E = e.lollipopSize === "large" ? 14 : e.lollipopSize === "medium" ? 12 : 10, M = e.yAxis.labelPlacement === "Below Bar", T = e.yAxis.displayNumbersOnBar, m = e.orientation === "horizontal" ? "yAxis" : "xAxis", L = e.barStyle === "rounded", O = e.visualizationSubType === "stacked", _ = e.tipRounding, N = e.roundingStyle === "standard" ? "8px" : e.roundingStyle === "shallow" ? "5px" : e.roundingStyle === "finger" ? "15px" : "0px", R = e.runtime.seriesKeys.length, j = { small: 16, medium: 18, large: 20 }, B = Object.keys(e.runtime.seriesLabels).length > 1, q = e.visualizationType === "Bar" && e.legend.behavior === "isolate" && e.legend.axisAlign && (s != null && s.length) ? s : e.runtime.barSeriesKeys || e.runtime.seriesKeys;
  return se.useEffect(() => {
    c === "horizontal" && !e.yAxis.labelPlacement && n({
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
    e.barStyle === "lollipop" && !e.isLollipopChart && n({ ...e, isLollipopChart: !0 }), (L || e.barStyle === "flat") && n({ ...e, isLollipopChart: !1 });
  }, [e.barStyle]), {
    generateIconSize: (W) => W < 4 ? 1 : W < 5 ? 4 : W < 10 ? 6 : W < 15 ? 7 : W < 20 || W < 90 ? 8 : 0,
    isHorizontal: v,
    barBorderWidth: y,
    lollipopBarWidth: k,
    lollipopShapeSize: E,
    isLabelBelowBar: M,
    displayNumbersOnBar: T,
    section: m,
    isRounded: L,
    isStacked: O,
    tipRounding: _,
    radius: N,
    stackCount: R,
    barStackedSeriesKeys: q,
    fontSize: j,
    hasMultipleSeries: B,
    applyRadius: (W) => {
      if (W == null || !L)
        return {};
      let Z = {};
      return (O && W + 1 === R || !O) && (Z = v ? { borderRadius: `0 ${N}  ${N}  0` } : { borderRadius: `${N} ${N} 0 0` }), !O && W === -1 && (Z = v ? { borderRadius: `${N} 0  0 ${N} ` } : { borderRadius: ` 0  0 ${N} ${N}` }), _ === "full" && O && W === 0 && R > 1 && (Z = v ? { borderRadius: `${N} 0 0 ${N}` } : { borderRadius: `0 0 ${N} ${N}` }), _ === "full" && (O && W === 0 && R === 1 || !O) && (Z = { borderRadius: N }), Z;
    },
    updateBars: (W) => {
      if (e.visualizationType !== "Bar" && !v)
        return W;
      const Z = [...W];
      let ee;
      const Ae = {
        stacked: e.barHeight,
        lollipop: k
      };
      O ? ee = Ae.stacked : ee = Ae[e.isLollipopChart ? "lollipop" : "stacked"] * R;
      const xe = M ? j[e.fontSize] * 1.2 : 0;
      let De = Number(e.barSpace), oe = Z.length * (ee + xe + De);
      return v && (e.heights.horizontal = oe), Z.map((ze, He) => {
        let Ce = 0;
        return ze.index !== 0 && (Ce = (ee + De + xe) * He), { ...ze, y: Ce, height: ee };
      });
    },
    assignColorsToValues: (W, Z, ee) => {
      if (!e.legend.colorCode && e.series.length > 1)
        return ee;
      const Ae = e.customColors ?? t[e.palette], xe = r.map((He) => He[e.legend.colorCode]);
      let De = /* @__PURE__ */ new Map(), oe = [];
      for (let He = 0; He < xe.length; He++)
        De.has(xe[He]) || De.set(xe[He], Ae[De.size % Ae.length]), oe.push(De.get(xe[He]));
      for (; oe.length < W; )
        oe = oe.concat(oe);
      return oe[Z];
    },
    getHighlightedBarColorByValue: (W) => {
      const Z = e == null ? void 0 : e.highlightedBarValues.find((ee) => {
        if (ee.value)
          return e.xAxis.type === "date" ? o(a(ee.value)) === W : ee.value === W;
      });
      return Z != null && Z.color ? Z.color : "rgba(255, 102, 1)";
    },
    getHighlightedBarByValue: (W) => {
      const Z = e == null ? void 0 : e.highlightedBarValues.filter((ee) => {
        if (ee.value)
          return e.xAxis.type === "date" ? o(a(ee.value)) === W : ee.value === W;
      })[0];
      return Z != null && Z.color ? Z : !1;
    },
    getAdditionalColumn: (W, Z) => {
      if (!Z)
        return "";
      const ee = e.columns, Ae = [];
      let xe = "";
      const De = r.find((oe) => oe[e.xAxis.dataKey] === Z) || {};
      return Object.keys(ee).forEach((oe) => {
        if (W && e.columns[oe].series && e.columns[oe].series !== W)
          return;
        const ze = {
          addColPrefix: e.columns[oe].prefix,
          addColSuffix: e.columns[oe].suffix,
          addColRoundTo: e.columns[oe].roundToPlace ? e.columns[oe].roundToPlace : "",
          addColCommas: e.columns[oe].commas
        }, He = Em(De[e.columns[oe].name], "left", !0, e, ze);
        e.columns[oe].tooltips && Ae.push([e.columns[oe].label, He]);
      }), Ae.forEach((oe) => {
        xe += `${oe[0]} : ${oe[1]} <br/>`;
      }), xe;
    },
    hoveredBar: d,
    setHoveredBar: g,
    onMouseOverBar: (W, Z) => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && Z && f([Z]), g(W);
    },
    onMouseLeaveBar: () => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && f([]);
    }
  };
}, Ls = se.createContext(null), hh = ({ xScale: e, barWidth: t = 0, totalBarsInGroup: r = 1, yMax: n, handleTooltipMouseOff: a, handleTooltipMouseOver: o, handleTooltipClick: f, tooltipData: s, showTooltip: c, hideTooltip: d }) => {
  const { parseDate: g, config: v } = se.useContext(Et), { runtime: y, regions: k, visualizationType: E, orientation: M, xAxis: T } = v, m = e.domain(), L = (N) => {
    let R;
    if (!(N != null && N.fromType) || N.fromType === "Fixed") {
      const j = new Date(N.from), B = g(ts(v.xAxis.dateParseFormat, j)).getTime();
      R = e(B), E === "Bar" && T.type === "date-time" && (R = R - t * r / 2);
    }
    if (N.fromType === "Previous Days") {
      const j = Number(N.from) || 0;
      m.map((Y) => ts(v.xAxis.dateParseFormat, new Date(Y)));
      const B = N.toType === "Last Date" ? new Date(m[m.length - 1]).getTime() : new Date(N.to), V = v.xAxis.type === "categorical" ? ts(v.xAxis.dateParseFormat, B) : ts(v.xAxis.dateParseFormat, B), q = new Date(V);
      if (R = new Date(q.setDate(q.getDate() - Number(j))), T.type === "date") {
        R = new Date(ts(T.dateParseFormat, R)).getTime();
        let Y = m[0], U = Math.abs(R - Y);
        for (let te = 1; te < m.length; te++) {
          const me = Math.abs(R - m[te]);
          me < U && (U = me, Y = m[te]);
        }
        R = Y;
      }
      if (T.type === "categorical") {
        let Y = m[0], U = Math.abs(new Date(R).getTime() - new Date(Y).getTime());
        for (let te = 1; te < m.length; te++) {
          const me = Math.abs(new Date(R).getTime() - new Date(m[te]).getTime());
          me < U && (U = me, Y = m[te]);
        }
        R = Y;
      }
      R = e(R);
    }
    if (T.type === "categorical" && N.fromType !== "Previous Days" && (R = e(N.from)), E === "Line" || E === "Area Chart") {
      let j = Number(v.yAxis.size);
      e.bandwidth && (j += e.bandwidth() / 2), R = R + j;
    }
    return E === "Bar" && v.xAxis.type === "date-time" && N.fromType === "Previous Days" && (R = R - t * r / 2), R;
  }, O = (N) => {
    let R;
    if (T.type === "categorical" && (R = e(N.to)), En(T) && ((!(N != null && N.toType) || N.toType === "Fixed") && (R = e(g(N.to).getTime())), (E === "Bar" || v.visualizationType === "Combo") && (R = N.toType !== "Last Date" ? e(g(N.to).getTime()) + t * r : R)), N.toType === "Last Date") {
      const j = m[m.length - 1];
      R = Number(e(j) + ((E === "Bar" || E === "Combo") && v.xAxis.type === "date" ? t * r : 0));
    }
    if (E === "Line" || E === "Area Chart") {
      let j = Number(v.yAxis.size);
      e.bandwidth && (j += e.bandwidth() / 2), R = R + j;
    }
    return E === "Bar" && v.xAxis.type === "date-time" && N.toType !== "Last Date" && (R = R - t * r / 2), (E === "Bar" || E === "Combo") && T.type === "categorical" && (R = R + (E === "Bar" || E === "Combo" ? t * r : 0)), R;
  }, _ = (N, R) => N - R;
  if (k && M === "vertical")
    return k.map((N) => {
      const R = L(N), j = O(N), B = _(j, R);
      if (!R || !j)
        return null;
      const V = () => /* @__PURE__ */ i.createElement(
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
      ), q = () => /* @__PURE__ */ i.createElement("rect", { x: R, y: 0, width: B, height: n, fill: N.background, opacity: 0.3 });
      return /* @__PURE__ */ i.createElement(rt, { height: 100, fill: "red", className: "regions regions-group--line zzz", key: N.label, onMouseMove: o, onMouseLeave: a, handleTooltipClick: f, tooltipData: JSON.stringify(s), showTooltip: c }, /* @__PURE__ */ i.createElement(V, null), /* @__PURE__ */ i.createElement(q, null), /* @__PURE__ */ i.createElement(bt, { x: R + B / 2, y: 5, fill: N.color, verticalAnchor: "start", textAnchor: "middle" }, N.label));
    });
};
function Dc(e) {
  var ae, W;
  const { config: t, index: r, id: n, className: a, background: o, borderColor: f, borderWidth: s, width: c, height: d, x: g, y: v, onMouseOver: y, onMouseLeave: k, onClick: E, tooltipHtml: M, tooltipId: T, styleOverrides: m, seriesHighlight: L } = e, O = t.orientation === "horizontal", _ = t.barStyle === "rounded", N = t.visualizationSubType === "stacked", R = t.tipRounding, j = t.visualizationType === "Combo" && ((W = (ae = t.runtime) == null ? void 0 : ae.barSeriesKeys) == null ? void 0 : W.length), B = t.runtime.seriesKeys.length, V = t.visualizationType === "Bar" && t.legend.axisAlign && (L != null && L.length) ? L == null ? void 0 : L.length : 0, q = j || V || B;
  let Y = t.roundingStyle === "standard" ? 8 : t.roundingStyle === "shallow" ? 5 : t.roundingStyle === "finger" ? 15 : 0;
  (Y > c / 2 || Y > d / 2) && (Y = Math.min(c / 2, d / 2));
  const U = () => `M${g},${v + d}
      L${g},${v + Y}
      Q${g},${v} ${g + Y},${v}
      L${g + c - Y},${v}
      Q${g + c},${v} ${g + c},${v + Y}
      L${g + c},${v + d}
      L${g},${v + d}`, te = () => `M${g},${v + d}
      L${g},${v}
      L${g + c - Y},${v}
      Q${g + c},${v} ${g + c},${v + Y}
      L${g + c},${v + d - Y}
      Q${g + c},${v + d} ${g + c - Y},${v + d}
      L${g},${v + d}`, me = () => `M${g + Y},${v + d}
      Q${g},${v + d} ${g},${v + d - Y}
      L${g},${v}
      L${g + c},${v}
      L${g + c},${v + d - Y}
      Q${g + c},${v + d} ${g + c - Y},${v + d}
      L${g + Y},${v + d}`, I = () => `M${g + Y},${v + d}
      Q${g},${v + d} ${g},${v + d - Y}
      L${g},${v + Y}
      Q${g},${v} ${g + Y},${v}
      L${g + c},${v}
      L${g + c},${v + d}
      L${g + Y},${v + d}`, le = () => `M${g + Y},${v + d}
      Q${g},${v + d} ${g},${v + d - Y}
      L${g},${v + Y}
      Q${g},${v} ${g + Y},${v}
      L${g + c - Y},${v}
      Q${g + c},${v} ${g + c},${v + Y}
      L${g + c},${v + d - Y}
      Q${g + c},${v + d} ${g + c - Y},${v + d}
      L${g + Y},${v + d}`, ue = () => `M${g},${v}
      L${g + c},${v}
      L${g + c},${v + d}
      L${g},${v + d}
      L${g},${v}`;
  let fe;
  return r == null || !_ ? fe = ue() : (fe = ue(), (N && r + 1 === q || !N) && (fe = O ? te() : U()), !N && r === -1 && (fe = O ? I() : me()), R === "full" && N && r === 0 && q > 1 && (fe = O ? I() : me()), R === "full" && (N && r === 0 && q === 1 || !N) && (fe = le())), /* @__PURE__ */ i.createElement(
    "path",
    {
      id: n,
      className: a,
      d: fe,
      fill: o,
      stroke: f,
      strokeWidth: s,
      onMouseOver: y,
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
const rk = () => {
  var B;
  const [e, t] = se.useState(0), { xScale: r, yScale: n, xMax: a, yMax: o } = se.useContext(Ls), { transformedData: f, colorScale: s, seriesHighlight: c, config: d, formatNumber: g, formatDate: v, parseDate: y, setSharedFilter: k } = se.useContext(Et), { isHorizontal: E, barBorderWidth: M, applyRadius: T, hoveredBar: m, getAdditionalColumn: L, onMouseLeaveBar: O, onMouseOverBar: _, barStackedSeriesKeys: N } = Rs(), { orientation: R } = d, j = d.brush.active && ((B = d.brush.data) != null && B.length) ? d.brush.data : f;
  return d.visualizationSubType === "stacked" && !E && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(uS, { data: j, keys: N, x: (V) => V[d.runtime.xAxis.dataKey], xScale: r, yScale: n, color: s }, (V) => V.reverse().map(
    (q) => q.bars.map((Y) => {
      let U = d.legend.behavior === "highlight" && c.length > 0 && c.indexOf(Y.key) === -1, te = d.legend.behavior === "highlight" || c.length === 0 || c.indexOf(Y.key) !== -1, me = d.xAxis.type === "date-time" ? d.barThickness * (r.range()[1] - r.range()[0]) : a / q.bars.length, I = me * (d.xAxis.type === "date-time" ? 1 : d.barThickness || 0.8);
      me * (1 - (d.barThickness || 0.8)) / 2;
      const le = Y.bar.data[d.runtime.xAxis.dataKey], ue = d.runtime.xAxis.type === "date" ? v(y(le)) : le, fe = g(Y.bar ? Y.bar.data[Y.key] : 0, "left");
      if (!fe)
        return;
      const ae = r(d.runtime.xAxis.type === "date" ? y(le) : le) - (d.xAxis.type === "date" && d.xAxis.sortDates ? I / 2 : 0);
      T(q.index);
      const W = d.runtime.xAxis.label ? `${d.runtime.xAxis.label}: ${ue}` : ue, Z = L(m), ee = `${d.runtime.seriesLabels[Y.key]}: ${fe}`, Ae = `<ul>
                  <li class="tooltip-heading"">${W}</li>
                  <li class="tooltip-body ">${ee}</li>
                  <li class="tooltip-body ">${Z}</li>
                    </li></ul>`;
      return t(I), /* @__PURE__ */ i.createElement(rt, { key: `${q.index}--${Y.index}--${R}` }, /* @__PURE__ */ i.createElement(rt, { key: `bar-stack-${q.index}-${Y.index}`, id: `barStack${q.index}-${Y.index}`, className: "stack vertical" }, /* @__PURE__ */ i.createElement(bt, { display: d.labels && te ? "block" : "none", opacity: U ? 0.5 : 1, x: ae + e / 2, y: Y.y - 5, fill: "#000", textAnchor: "middle" }, fe), Dc({
        config: d,
        seriesHighlight: c,
        index: q.index,
        background: s(d.runtime.seriesLabels[Y.key]),
        borderColor: "#333",
        borderStyle: "solid",
        borderWidth: `${d.barHasBorder === "true" ? M : 0}px`,
        width: I,
        height: Y.height,
        x: ae,
        y: Y.y,
        onMouseOver: () => _(ue, Y.key),
        onMouseLeave: O,
        tooltipHtml: Ae,
        tooltipId: `cdc-open-viz-tooltip-${d.runtime.uniqueId}`,
        onClick: (xe) => {
          xe.preventDefault(), k && (Y[d.xAxis.dataKey] = ue, k(d.uid, Y));
        },
        styleOverrides: {
          animationDelay: `${q.index * 0.5}s`,
          transformOrigin: `${I / 2}px ${Y.y + Y.height}px`,
          opacity: U ? 0.2 : 1,
          display: te ? "block" : "none"
        }
      })));
    })
  )), /* @__PURE__ */ i.createElement(hh, { xScale: r, yMax: o, barWidth: e, totalBarsInGroup: 1 }));
}, ak = () => {
  const { yMax: e, yScale: t, xScale: r } = se.useContext(Ls), {
    animatedChart: n,
    colorScale: a,
    config: o,
    formatDate: f,
    formatNumber: s,
    getTextWidth: c,
    parseDate: d,
    seriesHighlight: g,
    setSharedFilter: v,
    transformedData: y
  } = se.useContext(Et), { barBorderWidth: k, displayNumbersOnBar: E, fontSize: M, getAdditionalColumn: T, hoveredBar: m, isHorizontal: L, isLabelBelowBar: O, onMouseLeaveBar: _, onMouseOverBar: N, updateBars: R, barStackedSeriesKeys: j } = Rs(), { orientation: B, visualizationSubType: V } = o;
  return o.visualizationSubType === "stacked" && L && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(fS, { data: y, keys: j, height: e, y: (q) => q[o.runtime.yAxis.dataKey], xScale: r, yScale: t, color: a, offset: "none" }, (q) => q.map(
    (Y) => R(Y.bars).map((U, te) => {
      const me = o.legend.behavior === "highlight" && g.length > 0 && g.indexOf(U.key) === -1, I = o.legend.behavior === "highlight" || g.length === 0 || g.indexOf(U.key) !== -1;
      o.barHeight = Number(o.barHeight);
      const le = Jo("#000", a(o.runtime.seriesLabels[U.key])), ue = s(y[U.index][U.key], "left"), fe = o.runtime.yAxis.type === "date" ? f(d(y[U.index][o.runtime.originalXAxis.dataKey])) : y[U.index][o.runtime.originalXAxis.dataKey], ae = o.runtime.yAxis.label ? `${o.runtime.yAxis.label}: ${fe}` : fe, W = c(ue, `normal ${M[o.fontSize]}px sans-serif`), Z = T(m), ee = `${o.runtime.seriesLabels[U.key]}: ${ue}`, Ae = `<ul>
                  <li class="tooltip-heading"">${ae}</li>
                  <li class="tooltip-body ">${ee}</li>
                  <li class="tooltip-body ">${Z}</li>
                    </li></ul>`;
      return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(rt, { key: te, id: `barStack${Y.index}-${U.index}`, className: "stack horizontal" }, Dc({
        config: o,
        seriesHighlight: g,
        index: Y.index,
        className: `animated-chart group ${n ? "animated" : ""}`,
        background: a(o.runtime.seriesLabels[U.key]),
        borderColor: "#333",
        borderStyle: "solid",
        borderWidth: `${o.barHasBorder === "true" ? k : 0}px`,
        width: U.width,
        height: U.height,
        x: U.x,
        y: U.y,
        onMouseOver: () => N(fe, U.key),
        onMouseLeave: _,
        tooltipHtml: Ae,
        tooltipId: `cdc-open-viz-tooltip-${o.runtime.uniqueId}`,
        onClick: (xe) => {
          xe.preventDefault(), v && (U[o.xAxis.dataKey] = ue, v(o.uid, U));
        },
        styleOverrides: {
          animationDelay: `${Y.index * 0.5}s`,
          transformOrigin: `${U.x}px 0`,
          opacity: me ? 0.2 : 1,
          display: I ? "block" : "none"
        }
      }), B === "horizontal" && V === "stacked" && O && Y.index === 0 && !o.yAxis.hideLabel && /* @__PURE__ */ i.createElement(
        bt,
        {
          x: `${U.x + (o.isLollipopChart ? 15 : 5)}`,
          y: U.y + U.height * 1.2,
          fill: "#000000",
          textAnchor: "start",
          verticalAnchor: "start"
        },
        fe
      ), E && W < U.width && /* @__PURE__ */ i.createElement(
        bt,
        {
          display: I ? "block" : "none",
          x: U.x + Y.bars[U.index].width / 2,
          y: U.y + U.height / 2,
          fill: le,
          textAnchor: "middle",
          verticalAnchor: "middle"
        },
        ue
      )));
    })
  )));
}, ik = () => {
  var W;
  const { xScale: e, yScale: t, xMax: r, yMax: n, seriesScale: a } = se.useContext(Ls), [o, f] = se.useState(0), [s, c] = se.useState(0), {
    applyRadius: d,
    assignColorsToValues: g,
    barBorderWidth: v,
    generateIconSize: y,
    getAdditionalColumn: k,
    getHighlightedBarByValue: E,
    getHighlightedBarColorByValue: M,
    lollipopBarWidth: T,
    lollipopShapeSize: m,
    onMouseLeaveBar: L,
    onMouseOverBar: O,
    section: _
  } = Rs(), {
    colorScale: N,
    config: R,
    dashboardConfig: j,
    formatDate: B,
    formatNumber: V,
    getXAxisData: q,
    getYAxisData: Y,
    isNumber: U,
    parseDate: te,
    seriesHighlight: me,
    setSharedFilter: I,
    transformedData: le
  } = se.useContext(Et), { HighLightedBarUtils: ue } = Ac(R), fe = R.brush.active && ((W = R.brush.data) != null && W.length) ? R.brush.data : le, ae = (Z, ee) => {
    var De;
    let Ae = null;
    const xe = y(ee);
    return (De = R.suppressedData) == null || De.forEach((oe) => {
      Z.key === oe.column && String(Z.value) === String(oe.value) && oe.icon && (Ae = /* @__PURE__ */ i.createElement(ch, { color: "#000", size: xe }));
    }), Ae;
  };
  return R.visualizationSubType !== "stacked" && (R.visualizationType === "Bar" || R.visualizationType === "Combo") && R.orientation === "vertical" && /* @__PURE__ */ i.createElement(rt, null, /* @__PURE__ */ i.createElement(
    Dg,
    {
      data: fe,
      keys: R.runtime.barSeriesKeys || R.runtime.seriesKeys,
      height: n,
      x0: (Z) => {
        const ee = Z[R.runtime.originalXAxis.dataKey];
        return En(R.runtime.xAxis) ? te(ee) : ee;
      },
      x0Scale: e,
      x1Scale: a,
      yScale: t,
      color: () => ""
    },
    (Z) => Z.map((ee, Ae) => /* @__PURE__ */ i.createElement(rt, { className: `bar-group-${ee.index}-${ee.x0}--${Ae} ${R.orientation}`, key: `bar-group-${ee.index}-${ee.x0}--${Ae}`, id: `bar-group-${ee.index}-${ee.x0}--${Ae}`, left: ee.x0 }, ee.bars.map((xe, De) => {
      const oe = R.useLogScale ? 0.1 : 0, ze = 20;
      let He = R.highlightedBarValues.map((Lt) => Lt.value).filter((Lt) => Lt !== void 0);
      He = R.xAxis.type === "date" ? ue.formatDates(He) : He;
      let Ce = R.legend.behavior === "highlight" && me.length > 0 && me.indexOf(xe.key) === -1, ge = R.legend.behavior === "highlight" || me.length === 0 || me.indexOf(xe.key) !== -1, Oe = Math.abs(t(xe.value) - t(oe)), ie = xe.value >= 0 && U(xe.value) ? xe.y : t(0);
      const ke = xe.value >= 0 && U(xe.value) ? t(oe) - ze : t(0), Pe = R.suppressedData.some((Lt) => xe.key === Lt.column && String(xe.value) === String(Lt.value)) ? ke : ie;
      let We = a.range()[1], Ye = R.isLollipopChart ? T : We / ee.bars.length, qe = xe.x + (R.isLollipopChart ? (We / ee.bars.length - T) / 2 : 0) - (R.xAxis.type === "date-time" ? We / 2 : 0);
      f(Ye), c(ee.bars.length);
      let lt = V(xe.value, "left"), st = R.runtime[_].type === "date" ? B(te(fe[ee.index][R.runtime.originalXAxis.dataKey])) : fe[ee.index][R.runtime.originalXAxis.dataKey];
      const it = xe.value < 0 ? -1 : De, Je = k(xe.key, fe[ee.index][R.runtime.originalXAxis.dataKey]);
      let Ie = R.runtime.xAxis.label ? `${R.runtime.xAxis.label}: ${st}` : st;
      const $e = `${R.runtime.seriesLabels[xe.key]}: ${lt}`, ft = `<ul>
                  <li class="tooltip-heading">${Ie}</li>
                  <li class="tooltip-body ">${$e}</li>
                  ${Je ? '<li class="tooltip-body ">' + Je + "</li>" : ""}
                    </li></ul>`;
      let Ke = "#000000";
      Ke = ue.checkFontColor(lt, He, Ke);
      let Qe = R.runtime.seriesLabels && R.runtime.seriesLabels[xe.key] ? N(R.runtime.seriesLabels[xe.key]) : N(xe.key);
      Qe = g(Z.length, ee.index, Qe);
      const ct = R.isLollipopChart && R.lollipopColorStyle === "regular", ht = R.isLollipopChart && R.lollipopColorStyle === "two-tone", At = He == null ? void 0 : He.includes(st), an = M(st), Zt = E(st), Ot = At ? an : R.barHasBorder === "true" ? "#000" : "transparent", zt = At ? Zt.borderWidth : R.isLollipopChart ? 0 : R.barHasBorder === "true" ? v : 0, tn = R.suppressedData.some((Lt) => xe.key === Lt.column && xe.value === Lt.value) ? "" : lt;
      let hn = R.suppressedData.some((Lt) => xe.key === Lt.column && String(xe.value) === String(Lt.value)) ? ze : Oe;
      const un = R.suppressedData.some((Lt) => xe.key === Lt.column && xe.value === Lt.value) ? "none" : "block", Sn = (Lt, on) => {
        let _e = Lt, ln = on || "#f2f2f2";
        if (j && j.dashboard.sharedFilters) {
          const { sharedFilters: Pt } = j.dashboard;
          return _e = Pt.map((Rt) => Rt.setBy === R.uid ? Rt.resetLabel === Rt.active || Rt.active === le[ee.index][R.xAxis.dataKey] ? Lt : ln : Lt)[0], ct && (_e = Lt), ht && (_e = bs(Lt).brighten(1)), At && (_e = "transparent"), _e;
        }
        return ht && (_e = bs(Lt).brighten(1)), At && (_e = "transparent"), _e;
      };
      return /* @__PURE__ */ i.createElement(rt, { key: `${ee.index}--${De}` }, /* @__PURE__ */ i.createElement(rt, { key: `bar-sub-group-${ee.index}-${ee.x0}-${Pe}--${De}` }, Dc({
        config: R,
        index: it,
        id: `barGroup${ee.index}`,
        background: Sn(Qe),
        borderColor: Ot,
        borderStyle: "solid",
        borderWidth: `${zt}px`,
        width: Ye,
        height: hn,
        x: qe,
        y: Pe,
        onMouseOver: () => O(st, xe.key),
        onMouseLeave: L,
        tooltipHtml: ft,
        tooltipId: `cdc-open-viz-tooltip-${R.runtime.uniqueId}`,
        onClick: (Lt) => {
          Lt.preventDefault(), I && (xe[R.xAxis.dataKey] = st, I(R.uid, xe));
        },
        styleOverrides: {
          transformOrigin: `0 ${Pe + hn}px`,
          opacity: Ce ? 0.2 : 1,
          display: ge ? "block" : "none",
          cursor: j ? "pointer" : "default"
        }
      }), /* @__PURE__ */ i.createElement(
        "g",
        {
          transform: `translate(${qe},${n - ze})`,
          onMouseOver: () => O(st, xe.key),
          onMouseLeave: L,
          opacity: Ce ? 0.2 : 1,
          display: ge ? "block" : "none",
          "data-tooltip-html": ft,
          "data-tooltip-id": `cdc-open-viz-tooltip-${R.runtime.uniqueId}`,
          onClick: (Lt) => {
            Lt.preventDefault(), I && (xe[R.xAxis.dataKey] = st, I(R.uid, xe));
          }
        },
        ae(xe, Ye)
      ), /* @__PURE__ */ i.createElement(
        bt,
        {
          display: R.labels && ge ? "block" : "none",
          opacity: Ce ? 0.5 : 1,
          x: qe + Ye / 2,
          y: Pe - 5,
          fill: Ke,
          textAnchor: "middle"
        },
        tn
      ), R.isLollipopChart && R.lollipopShape === "circle" && /* @__PURE__ */ i.createElement(
        "circle",
        {
          display: un,
          cx: qe + m / 3.5,
          cy: xe.y,
          r: m / 2,
          fill: Qe,
          key: `circle--${xe.index}`,
          "data-tooltip-html": ft,
          "data-tooltip-id": `cdc-open-viz-tooltip-${R.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), R.isLollipopChart && R.lollipopShape === "square" && /* @__PURE__ */ i.createElement(
        "rect",
        {
          display: un,
          x: qe - T / 2,
          y: Pe,
          width: m,
          height: m,
          fill: Qe,
          key: `circle--${xe.index}`,
          "data-tooltip-html": ft,
          "data-tooltip-id": `cdc-open-viz-tooltip-${R.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ i.createElement("animate", { attributeName: "height", values: `0, ${m}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(R.confidenceKeys).length > 0 ? fe.map((Z) => {
    let ee, Ae, xe, De, oe = 5;
    return ee = e(q(Z)) + (R.xAxis.type !== "date" || R.xAxis.type !== "date-time" ? a.range()[1] / 2 : 0), xe = t(Y(Z, R.confidenceKeys.lower)), De = t(Y(Z, R.confidenceKeys.upper)), /* @__PURE__ */ i.createElement(
      "path",
      {
        key: `confidence-interval-v-${Ae}-${Z[R.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${ee - oe} ${xe}
                    L${ee + oe} ${xe}
                    M${ee} ${xe}
                    L${ee} ${De}
                    M${ee - oe} ${De}
                    L${ee + oe} ${De}`
      }
    );
  }) : "", /* @__PURE__ */ i.createElement(hh, { xScale: e, yMax: n, barWidth: o, totalBarsInGroup: s }));
}, ok = () => {
  const { xScale: e, yScale: t, yMax: r, seriesScale: n } = se.useContext(Ls), { transformedData: a, colorScale: o, seriesHighlight: f, config: s, formatNumber: c, formatDate: d, parseDate: g, setSharedFilter: v, isNumber: y, getTextWidth: k, getYAxisData: E, getXAxisData: M } = se.useContext(Et), {
    isHorizontal: T,
    barBorderWidth: m,
    updateBars: L,
    assignColorsToValues: O,
    section: _,
    fontSize: N,
    isLabelBelowBar: R,
    displayNumbersOnBar: j,
    lollipopBarWidth: B,
    lollipopShapeSize: V,
    getHighlightedBarColorByValue: q,
    getHighlightedBarByValue: Y,
    generateIconSize: U,
    getAdditionalColumn: te,
    hoveredBar: me,
    onMouseLeaveBar: I,
    onMouseOverBar: le
  } = Rs(), { HighLightedBarUtils: ue } = Ac(s), fe = (ae, W) => {
    var Ae;
    let Z = null;
    const ee = U(W);
    return (Ae = s.suppressedData) == null || Ae.forEach((xe) => {
      ae.key === xe.column && String(ae.value) === String(xe.value) && xe.icon && (Z = /* @__PURE__ */ i.createElement(ch, { color: "#000", size: ee }));
    }), Z;
  };
  return s.visualizationSubType !== "stacked" && s.visualizationType === "Bar" && s.orientation === "horizontal" && /* @__PURE__ */ i.createElement(rt, null, /* @__PURE__ */ i.createElement(
    Dg,
    {
      data: a,
      keys: s.runtime.barSeriesKeys || s.runtime.seriesKeys,
      height: r,
      x0: (ae) => ae[s.runtime.originalXAxis.dataKey],
      x0Scale: t,
      x1Scale: n,
      yScale: e,
      color: () => ""
    },
    (ae) => L(ae).map((W, Z) => /* @__PURE__ */ i.createElement(rt, { className: `bar-group-${W.index}-${W.x0}--${Z} ${s.orientation}`, key: `bar-group-${W.index}-${W.x0}--${Z}`, id: `bar-group-${W.index}-${W.x0}--${Z}`, top: W.y }, W.bars.map((ee, Ae) => {
      const xe = s.useLogScale ? 0.1 : 0;
      let De = s.highlightedBarValues.map((Rt) => Rt.value).filter((Rt) => Rt !== void 0);
      De = s.xAxis.type === "date" ? ue.formatDates(De) : De;
      let oe = s.legend.behavior === "highlight" && f.length > 0 && f.indexOf(ee.key) === -1, ze = s.legend.behavior === "highlight" || f.length === 0 || f.indexOf(ee.key) !== -1, He = s.barHeight, Ce = ee.value >= 0 && y(ee.value) ? ee.y : t(xe);
      const ge = ee.value < 0 ? Math.abs(e(ee.value)) : e(xe), Oe = Math.abs(e(ee.value) - e(xe)), ie = 25, ke = ee.value >= 0 && y(ee.value);
      let Pe = ee.value && s.suppressedData.some(({ column: Rt, value: Ln }) => ee.key === Rt && ee.value === Ln) ? ie : Oe;
      const We = ke ? e(0) : e(xe) - ie, Ye = s.suppressedData.some((Rt) => ee.key === Rt.column && String(ee.value) === String(Rt.value)) ? We : ge, qe = c(ee.value, "left"), lt = s.runtime[_].type === "date" ? d(g(a[W.index][s.runtime.originalXAxis.dataKey])) : a[W.index][s.runtime.originalXAxis.dataKey], st = ke ? "above" : "below", it = s.suppressedData.some((Rt) => ee.key === Rt.column && ee.value === Rt.value) ? "" : qe;
      let Ie = k(lt, `normal ${N[s.fontSize]}px sans-serif`) < Oe - 5, $e = Ie ? "end" : "start", ft = "start", Ke = Ie ? -5 : 5, Qe = 10;
      st === "below" && ($e = Ie ? "start" : "end", Ke = Ie ? 5 : -5, s.isLollipopChart && (ft = "end", Qe = -10));
      const ct = ee.value < 0 ? -1 : Ae;
      let ht = s.runtime.yAxis.label ? `${s.runtime.yAxis.label}: ${lt}` : lt;
      const At = te(me), an = `${s.runtime.seriesLabels[ee.key]}: ${qe}`, Zt = `<ul>
                  <li class="tooltip-heading"">${ht}</li>
                  <li class="tooltip-body ">${an}</li>
                  <li class="tooltip-body ">${At}</li>
                    </li></ul>`;
      let Ot = "#000000";
      Ot = ue.checkFontColor(qe, De, Ot);
      let zt = s.runtime.seriesLabels && s.runtime.seriesLabels[ee.key] ? o(s.runtime.seriesLabels[ee.key]) : o(ee.key);
      zt = O(ae.length, W.index, zt);
      const tn = s.isLollipopChart && s.lollipopColorStyle === "regular", hn = s.isLollipopChart && s.lollipopColorStyle === "two-tone", un = De == null ? void 0 : De.includes(qe), Sn = q(qe), Lt = Y(qe), on = un ? Sn : s.barHasBorder === "true" ? "#000" : "transparent", _e = un ? Lt.borderWidth : s.isLollipopChart ? 0 : s.barHasBorder === "true" ? m : 0, ln = s.suppressedData.some((Rt) => ee.key === Rt.column && ee.value === Rt.value) ? "none" : "block";
      zt && Ot && Ie && (Ot = Jo("#000", zt));
      const Pt = () => tn ? zt : hn ? bs(zt).brighten(1) : un ? "transparent" : zt;
      return /* @__PURE__ */ i.createElement(rt, { key: `${W.index}--${Ae}` }, /* @__PURE__ */ i.createElement(rt, { key: `bar-sub-group-${W.index}-${W.x0}-${Ce}--${Ae}` }, Dc({
        config: s,
        index: ct,
        id: `barGroup${W.index}`,
        background: Pt(),
        borderColor: on,
        borderStyle: "solid",
        borderWidth: `${_e}px`,
        width: Pe,
        height: s.isLollipopChart ? B : He,
        x: Ye,
        y: He * ee.index,
        onMouseOver: () => le(lt, ee.key),
        onMouseLeave: I,
        tooltipHtml: Zt,
        tooltipId: `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
        onClick: (Rt) => {
          Rt.preventDefault(), v && (ee[s.xAxis.dataKey] = qe, v(s.uid, ee));
        },
        styleOverrides: {
          transformOrigin: `0 ${Ce + He}px`,
          opacity: oe ? 0.2 : 1,
          display: ze ? "block" : "none"
        }
      }), /* @__PURE__ */ i.createElement(
        "g",
        {
          transform: `translate(${Ye},${He * ee.index})`,
          onMouseOver: () => le(lt, ee.key),
          onMouseLeave: I,
          opacity: oe ? 0.2 : 1,
          display: ze ? "block" : "none",
          "data-tooltip-html": Zt,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          onClick: (Rt) => {
            Rt.preventDefault(), v && (ee[s.xAxis.dataKey] = qe, v(s.uid, ee));
          }
        },
        fe(ee, Pe)
      ), !s.isLollipopChart && j && /* @__PURE__ */ i.createElement(
        bt,
        {
          display: ze ? "block" : "none",
          x: ee.y,
          y: s.barHeight / 2 + s.barHeight * ee.index,
          fill: Ot,
          dx: Ke,
          verticalAnchor: "middle",
          textAnchor: $e
        },
        it
      ), s.isLollipopChart && j && /* @__PURE__ */ i.createElement(
        bt,
        {
          display: ze ? "block" : "none",
          x: ee.y,
          y: 0,
          fill: "#000000",
          dx: Qe,
          textAnchor: ft,
          verticalAnchor: "middle",
          fontWeight: "normal"
        },
        it
      ), R && !s.yAxis.hideLabel && /* @__PURE__ */ i.createElement(bt, { x: s.yAxis.hideAxis ? 0 : 5, y: W.height, dy: 4, verticalAnchor: "start", textAnchor: "start" }, s.runtime.yAxis.type === "date" ? d(g(a[W.index][s.runtime.originalXAxis.dataKey])) : T ? a[W.index][s.runtime.originalXAxis.dataKey] : c(a[W.index][s.runtime.originalXAxis.dataKey])), s.isLollipopChart && s.lollipopShape === "circle" && /* @__PURE__ */ i.createElement(
        "circle",
        {
          display: ln,
          cx: ee.y,
          cy: He * ee.index + B / 2,
          r: V / 2,
          fill: zt,
          key: `circle--${ee.index}`,
          "data-tooltip-html": Zt,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), s.isLollipopChart && s.lollipopShape === "square" && /* @__PURE__ */ i.createElement(
        "rect",
        {
          display: ln,
          x: ee.y > 10 ? ee.y - V / 2 : 0,
          y: 0 - B / 2,
          width: V,
          height: V,
          fill: zt,
          key: `circle--${ee.index}`,
          "data-tooltip-html": Zt,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ i.createElement("animate", { attributeName: "height", values: `0, ${V}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(s.confidenceKeys).length > 0 ? a.map((ae) => {
    let W, Z, ee, Ae = 5;
    return W = t(M(ae)) - 0.75 * s.barHeight, Z = e(E(ae, s.confidenceKeys.upper)), ee = e(E(ae, s.confidenceKeys.lower)), /* @__PURE__ */ i.createElement(
      "path",
      {
        key: `confidence-interval-h-${W}-${ae[s.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${ee} ${W - Ae}
                    L${ee} ${W + Ae}
                    M${ee} ${W}
                    L${Z} ${W}
                    M${Z} ${W - Ae}
                    L${Z} ${W + Ae} `
      }
    );
  }) : "");
}, Nu = {
  Vertical: ik,
  Horizontal: ok,
  StackedVertical: rk,
  StackedHorizontal: ak
}, lk = ({ xScale: e, yScale: t, seriesScale: r, xMax: n, yMax: a, handleTooltipMouseOver: o, handleTooltipMouseOff: f, handleTooltipClick: s }) => {
  const { transformedData: c, config: d } = se.useContext(Et), g = {
    xScale: e,
    yScale: t,
    xMax: n,
    yMax: a,
    seriesScale: r
  };
  return /* @__PURE__ */ i.createElement(Ir, { component: "BarChart" }, /* @__PURE__ */ i.createElement(Ls.Provider, { value: g }, /* @__PURE__ */ i.createElement(rt, { left: parseFloat(d.runtime.yAxis.size) }, /* @__PURE__ */ i.createElement(Nu.StackedVertical, null), /* @__PURE__ */ i.createElement(Nu.StackedHorizontal, null), /* @__PURE__ */ i.createElement(Nu.Vertical, null), /* @__PURE__ */ i.createElement(Nu.Horizontal, null), /* @__PURE__ */ i.createElement(gr, { key: "bars", display: d.tooltips.singleSeries ? "none" : "block", width: Number(n), height: Number(a), fill: "transparent", fillOpacity: 0.05, onMouseMove: (v) => o(v, c), onMouseOut: f, onClick: (v) => s(v, c) }))));
};
function Ha() {
  return Ha = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ha.apply(this, arguments);
}
function _i(e) {
  var t = e.x1, r = e.x2, n = e.y1, a = e.y2;
  return {
    x1: n,
    x2: a,
    y1: t,
    y2: r
  };
}
function sy(e) {
  var t = e.left, r = t === void 0 ? 0 : t, n = e.top, a = n === void 0 ? 0 : n, o = e.className, f = e.max, s = e.min, c = e.firstQuartile, d = e.thirdQuartile, g = e.median, v = e.boxWidth, y = v === void 0 ? 10 : v, k = e.fill, E = e.fillOpacity, M = e.stroke, T = e.strokeWidth, m = e.rx, L = m === void 0 ? 2 : m, O = e.ry, _ = O === void 0 ? 2 : O, N = e.valueScale, R = e.outliers, j = R === void 0 ? [] : R, B = e.horizontal, V = e.medianProps, q = V === void 0 ? {} : V, Y = e.maxProps, U = Y === void 0 ? {} : Y, te = e.minProps, me = te === void 0 ? {} : te, I = e.boxProps, le = I === void 0 ? {} : I, ue = e.outlierProps, fe = ue === void 0 ? {} : ue, ae = e.container, W = ae === void 0 ? !1 : ae, Z = e.containerProps, ee = Z === void 0 ? {} : Z, Ae = e.children, xe = B ? a : r, De = xe + (y || 0) / 2, oe = N.range(), ze = N(s ?? 0), He = N(c ?? 0), Ce = N(g ?? 0), ge = N(d ?? 0), Oe = N(f ?? 0), ie = {
    valueRange: oe,
    center: De,
    offset: xe,
    boxWidth: y,
    max: {
      x1: De - (y || 0) / 4,
      x2: De + (y || 0) / 4,
      y1: Oe,
      y2: Oe
    },
    maxToThird: {
      x1: De,
      x2: De,
      y1: Oe,
      y2: ge
    },
    median: {
      x1: xe,
      x2: xe + (y || 0),
      y1: Ce,
      y2: Ce
    },
    minToFirst: {
      x1: De,
      x2: De,
      y1: He,
      y2: ze
    },
    min: {
      x1: De - (y || 0) / 4,
      x2: De + (y || 0) / 4,
      y1: ze,
      y2: ze
    },
    box: {
      x1: xe,
      x2: y || 0,
      y1: ge,
      y2: Math.abs(ge - He)
    },
    container: {
      x1: xe,
      x2: y || 0,
      y1: Math.min.apply(Math, oe),
      y2: Math.abs(oe[0] - oe[1])
    }
  };
  return B && (ie.max = _i(ie.max), ie.maxToThird = _i(ie.maxToThird), ie.box.y1 = He, ie.box = _i(ie.box), ie.median = _i(ie.median), ie.minToFirst = _i(ie.minToFirst), ie.min = _i(ie.min), ie.container = _i(ie.container), ie.container.y1 = Math.min.apply(Math, oe)), Ae ? /* @__PURE__ */ i.createElement(i.Fragment, null, Ae(ie)) : /* @__PURE__ */ i.createElement(rt, {
    className: Rn("visx-boxplot", o)
  }, j.map(function(ke, Pe) {
    var We = B ? N(ke) : De, Ye = B ? De : N(ke);
    return /* @__PURE__ */ i.createElement("circle", Ha({
      key: "visx-boxplot-outlier-" + Pe,
      className: "visx-boxplot-outlier",
      cx: We,
      cy: Ye,
      r: 4,
      stroke: M,
      strokeWidth: T,
      fill: k,
      fillOpacity: E
    }, fe));
  }), /* @__PURE__ */ i.createElement("line", Ha({
    className: "visx-boxplot-max",
    x1: ie.max.x1,
    y1: ie.max.y1,
    x2: ie.max.x2,
    y2: ie.max.y2,
    stroke: M,
    strokeWidth: T
  }, U)), /* @__PURE__ */ i.createElement("line", {
    className: "visx-boxplot-max-to-third",
    x1: ie.maxToThird.x1,
    y1: ie.maxToThird.y1,
    x2: ie.maxToThird.x2,
    y2: ie.maxToThird.y2,
    stroke: M,
    strokeWidth: T
  }), /* @__PURE__ */ i.createElement("rect", Ha({
    className: "visx-boxplot-box",
    x: ie.box.x1,
    y: ie.box.y1,
    width: ie.box.x2,
    height: ie.box.y2,
    stroke: M,
    strokeWidth: T,
    fill: k,
    fillOpacity: E,
    rx: L,
    ry: _
  }, le)), /* @__PURE__ */ i.createElement("line", Ha({
    className: "visx-boxplot-median",
    x1: ie.median.x1,
    y1: ie.median.y1,
    x2: ie.median.x2,
    y2: ie.median.y2,
    stroke: M,
    strokeWidth: T
  }, q)), /* @__PURE__ */ i.createElement("line", {
    className: "visx-boxplot-min-to-first",
    x1: ie.minToFirst.x1,
    y1: ie.minToFirst.y1,
    x2: ie.minToFirst.x2,
    y2: ie.minToFirst.y2,
    stroke: M,
    strokeWidth: T
  }), /* @__PURE__ */ i.createElement("line", Ha({
    className: "visx-boxplot-min",
    x1: ie.min.x1,
    y1: ie.min.y1,
    x2: ie.min.x2,
    y2: ie.min.y2,
    stroke: M,
    strokeWidth: T
  }, me)), W && /* @__PURE__ */ i.createElement("rect", Ha({
    x: ie.container.x1,
    y: ie.container.y1,
    width: ie.container.x2,
    height: ie.container.y2,
    fillOpacity: "0"
  }, ee)));
}
sy.propTypes = {
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
const sk = ({ xScale: e, yScale: t }) => {
  const { config: r, setConfig: n } = se.useContext(Et), { boxplot: a } = r;
  se.useEffect(() => {
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
    `, s = (T) => Number(T.columnMax), c = (T) => Number(T.columnMin), d = (T) => Number(T.columnMedian), g = (T) => Number(T.columnThirdQuartile), v = (T) => Number(T.columnFirstQuartile), y = 0.5, k = e.bandwidth(), E = Math.min(40, k), M = dr[r == null ? void 0 : r.palette][0] ? dr[r == null ? void 0 : r.palette][0] : "#000";
  return /* @__PURE__ */ i.createElement(Ir, { component: "BoxPlot" }, /* @__PURE__ */ i.createElement(rt, { className: "boxplot", key: "boxplot-group" }, a.plots.map((T, m) => {
    const L = k - E, O = 4;
    return /* @__PURE__ */ i.createElement(rt, { key: `boxplotplot-${m}` }, a.plotNonOutlierValues && T.nonOutlierValues.map((_, N) => /* @__PURE__ */ i.createElement("circle", { cx: e(T.columnCategory) + Number(r.yAxis.size) + k / 2, cy: t(_), r: O, fill: "#ccc", style: { opacity: 1, fillOpacity: 1, stroke: "black" }, key: `boxplot-${m}--circle-${N}` })), /* @__PURE__ */ i.createElement(
      sy,
      {
        "data-left": e(T.columnCategory) + r.yAxis.size + L / 2 + 0.5,
        key: `box-plot-${m}`,
        min: c(T),
        max: s(T),
        left: Number(e(T.columnCategory)) + Number(r.yAxis.size) + L / 2 + 0.5,
        firstQuartile: v(T),
        thirdQuartile: g(T),
        median: d(T),
        boxWidth: E,
        fill: M,
        fillOpacity: y,
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
}, uk = ({ xScale: e, yScale: t, getXAxisData: r, getYAxisData: n }) => {
  const { colorScale: a, transformedData: o, config: f, formatNumber: s, seriesHighlight: c, colorPalettes: d } = se.useContext(Et);
  let g = 4.5;
  const v = Object.keys(f.runtime.seriesLabels).length > 1, y = (k, E) => `<div>
    ${f.legend.showLegendValuesTooltip && f.runtime.seriesLabels && v ? `${f.runtime.seriesLabels[E] || ""}<br/>` : ""}
    ${f.xAxis.label}: ${s(k[f.xAxis.dataKey], "bottom")} <br/>
    ${f.yAxis.label}: ${s(k[E], "left")}
</div>`;
  return /* @__PURE__ */ i.createElement(rt, { className: "scatter-plot", left: f.yAxis.size }, o.map((k, E) => f.runtime.seriesKeys.map((M, T) => {
    const m = f.legend.behavior === "highlight" && c.length > 0 && c.indexOf(M) === -1, L = f.legend.behavior === "highlight" || c.length === 0 || c.indexOf(M) !== -1, O = f.palette ? d[f.palette][T] : "#000";
    let _ = {
      filter: "unset",
      opacity: 1,
      stroke: L ? "black" : ""
    };
    return /* @__PURE__ */ i.createElement(
      "circle",
      {
        key: `${E}-${T}`,
        r: g,
        cx: e(k[f.xAxis.dataKey]),
        cy: t(k[M]),
        fill: L ? O : "transparent",
        fillOpacity: m ? 0.25 : 1,
        style: _,
        "data-tooltip-html": y(k, M),
        "data-tooltip-id": `cdc-open-viz-tooltip-${f.runtime.uniqueId}`,
        tabIndex: -1
      }
    );
  })));
};
function ck({ height: e, xScale: t }) {
  const { transformedData: r, config: n, formatNumber: a, twoColorPalette: o, getTextWidth: f, updateConfig: s, parseDate: c, formatDate: d, currentViewport: g } = se.useContext(Et), { barStyle: v, tipRounding: y, roundingStyle: k, twoColor: E } = n, M = se.useRef([]), [T, m] = se.useState(window.innerWidth), L = k === "standard" ? "8px" : k === "shallow" ? "5px" : k === "finger" ? "15px" : "0px", O = { small: 16, medium: 18, large: 20 };
  n.barStyle;
  const _ = Number(n.xAxis.target), N = n.series[0].dataKey, R = Number(t.domain()[1]), B = r.some((ae) => ae[N] < 0) || _ > 0 || t.domain()[0] < 0, V = n.barHasBorder === "true" ? 1 : 0, q = n.lollipopSize === "large" ? 7 : n.lollipopSize === "medium" ? 6 : 5, Y = n.lollipopSize === "large" ? 14 : n.lollipopSize === "medium" ? 12 : 10, U = Math.max(t(0), Math.min(t(_), t(R))), te = (ae) => {
    if (ae == null || v !== "rounded")
      return;
    let W = {};
    return ae === "left" && (W = { borderRadius: `${L} 0 0 ${L}` }), ae === "right" && (W = { borderRadius: `0 ${L} ${L} 0` }), y === "full" && (W = { borderRadius: L }), W;
  }, me = {
    calculate: function() {
      const W = r[0][N] < _ ? "left" : "right", Z = `${n.xAxis.targetLabel} ${a(n.xAxis.target || 0, "left")}`, ee = f(Z, `bold ${O[n.fontSize]}px sans-serif`);
      let Ae = n.isLollipopChart ? q / 2 : Number(n.barHeight) / 2, xe = 0, De = 0, oe = !1;
      W === "right" && (xe = -10, oe = ee - xe < U, De = U - ee), W === "left" && (xe = 10, oe = t(R) - U > ee + xe, De = U), this.text = Z, this.y = Ae, this.x = De, this.padding = xe, this.showLabel = n.xAxis.showTargetLabel ? oe : !1;
    }
  };
  me.calculate();
  const I = se.useRef(null), le = sh(I, {});
  se.useEffect(() => {
    const ae = () => {
      m(window.innerWidth), M.current.forEach((W) => {
        W.style.transition = "none", W.style.transform = "translate(0) scale(1)";
      });
    };
    return window.addEventListener("resize", ae), () => {
      window.removeEventListener("resize", ae);
    };
  }, []);
  const [ue, fe] = se.useState(!1);
  return se.useEffect(() => {
    le != null && le.isIntersecting && setTimeout(() => {
      fe(!0);
    }, 100);
  }, [le == null ? void 0 : le.isIntersecting, n.animate]), se.useEffect(() => {
    M.current.forEach((ae, W) => {
      if (n.animate) {
        const Z = _ / R * 100;
        ae.style.opacity = "0", ae.style.transform = `translate(${Z / 1.07}%) scale(0, 1)`, setTimeout(() => {
          ae.style.opacity = "1", ae.style.transform = "translate(0) scale(1)", ae.style.transition = "transform 0.5s ease";
        }, 100);
      } else
        ae.style.transition = "none", ae.style.opacity = "0";
      n.animate || (ae.style.transition = "none", ae.style.opacity = "1");
    });
  }, [n.animate, n, ue]), /* @__PURE__ */ i.createElement(Ir, { component: "Deviation Bar" }, /* @__PURE__ */ i.createElement(rt, { left: Number(n.xAxis.size) }, r.map((ae, W) => {
    const Z = Number(ae[N]), ee = n.isLollipopChart ? q : Number(n.barHeight), Ae = Number(n.barSpace), xe = Math.abs(t(Z) - U), De = t(Z), oe = Z > _ ? U : De, ze = Z < _ ? "left" : "right";
    let He = 0;
    He = W !== 0 ? (Ae + ee + V) * W : He;
    const Ce = (Ae + ee + V) * r.length;
    n.heights.horizontal = Ce;
    const Oe = f(a(Z, "left"), `normal ${O[n.fontSize]}px sans-serif`) < xe - 6, ie = De, ke = He + ee / 2, Pe = De, We = He + ee / 2, Ye = De, qe = He - ee / 2, lt = te(ze), [st, it] = o[E.palette], Je = { left: st, right: it }, Ie = Jo("#000", Je[ze]);
    let $e = dk(n.isLollipopChart, Oe, Y, Ie);
    const ft = a(Z, "left"), Ke = n.runtime.yAxis.type === "date" ? d(c(r[W][n.runtime.originalXAxis.dataKey])) : r[W][n.runtime.originalXAxis.dataKey];
    let Qe = n.runtime.yAxis.label ? `${n.runtime.yAxis.label}: ${Ke}` : Ke, ct = n.runtime.xAxis.label ? `${n.runtime.xAxis.label}: ${ft}` : ft;
    const ht = `<div>
          ${Qe}<br />
          ${ct}
            </div>`;
    return /* @__PURE__ */ i.createElement(rt, { key: `deviation-bar-${n.orientation}-${N}-${W}` }, /* @__PURE__ */ i.createElement(
      "foreignObject",
      {
        ref: (At) => {
          M.current[W] = At;
        },
        x: oe,
        y: He,
        width: xe,
        height: ee,
        "data-tooltip-html": ht,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.runtime.uniqueId}`,
        tabIndex: -1
      },
      /* @__PURE__ */ i.createElement("div", { style: { width: xe, height: ee, border: `${V}px solid #333`, backgroundColor: Je[ze], ...lt } })
    ), n.yAxis.displayNumbersOnBar && /* @__PURE__ */ i.createElement(bt, { verticalAnchor: "middle", x: ie, y: ke, ...$e[ze] }, a(ae[N], "left")), n.isLollipopChart && n.lollipopShape === "circle" && /* @__PURE__ */ i.createElement("circle", { cx: Pe, cy: We, r: Y / 2, fill: Je[ze], style: { filter: "unset", opacity: 1 } }), n.isLollipopChart && n.lollipopShape === "square" && /* @__PURE__ */ i.createElement("rect", { x: Ye, y: qe, width: Y, height: Y, fill: Je[ze], style: { opacity: 1, filter: "unset" } }));
  }), me.showLabel && /* @__PURE__ */ i.createElement(bt, { fontWeight: "bold", dx: me.padding, verticalAnchor: "middle", x: me.x, y: me.y }, me.text), B && /* @__PURE__ */ i.createElement(rn, { from: { x: U, y: 0 }, to: { x: U, y: e }, stroke: "#333", strokeWidth: 2 })), /* @__PURE__ */ i.createElement("foreignObject", { y: e / 2, ref: I }));
}
function dk(e, t, r, n) {
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
const fk = ({ xScale: e, yScale: t, height: r, width: n, handleTooltipMouseOver: a, handleTooltipMouseOff: o }) => {
  var E;
  const { transformedData: f, rawData: s, config: c, seriesHighlight: d } = se.useContext(Et), { xAxis: g, yAxis: v, legend: y, runtime: k } = c;
  return f && /* @__PURE__ */ i.createElement(Ir, { component: "ForecastingChart" }, /* @__PURE__ */ i.createElement(rt, { className: "forecasting-items", key: "forecasting-items-wrapper", left: Number(v.size) }, (E = k.forecastingSeriesKeys) == null ? void 0 : E.map((M, T) => !M || !M.stages ? !1 : M.stages.map((m, L) => {
    var j;
    const { behavior: O } = y, _ = s.filter((B) => B[M.stageColumn] === m.key);
    let N = O === "highlight" && d.length > 0 && d.indexOf(m.key) === -1, R = O === "highlight" || d.length === 0 || d.indexOf(m.key) !== -1;
    return /* @__PURE__ */ i.createElement(rt, { className: `forecasting-areas-combo-${T}`, key: `forecasting-areas--stage-${m.key.replaceAll(" ", "-")}-${T}` }, (j = M.confidenceIntervals) == null ? void 0 : j.map((B, V) => {
      const q = Uu[m.color] || dr[m.color] || !1, Y = () => R && q[2] ? q[2] : "transparent", U = () => R && q[1] ? q[1] : "transparent";
      if (!(B.high === "" || B.low === ""))
        return /* @__PURE__ */ i.createElement(rt, { key: `forecasting-areas--stage-${m.key.replaceAll(" ", "-")}--group-${L}-${V}` }, /* @__PURE__ */ i.createElement(
          q0,
          {
            curve: Iu,
            data: _,
            fill: Y(),
            opacity: N ? 0.1 : 0.5,
            x: (te) => e(Date.parse(te[g.dataKey])),
            y0: (te) => t(te[B.low]),
            y1: (te) => t(te[B.high])
          }
        ), V === 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ma, { data: _, x: (te) => Number(e(Date.parse(te[g.dataKey]))), y: (te) => Number(t(te[B.high])), curve: Iu, stroke: U(), strokeWidth: 1, strokeOpacity: 1 }), /* @__PURE__ */ i.createElement(ma, { data: _, x: (te) => Number(e(Date.parse(te[g.dataKey]))), y: (te) => Number(t(te[B.low])), curve: Iu, stroke: U(), strokeWidth: 1, strokeOpacity: 1 })));
    }));
  })), /* @__PURE__ */ i.createElement(rt, { key: "tooltip-hover-section" }, /* @__PURE__ */ i.createElement(gr, { key: "bars", width: Number(n), height: Number(r), fill: "transparent", fillOpacity: 0.05, onMouseMove: (M) => a(M, f), onMouseOut: o }))));
};
function Wu(e = "") {
  return typeof e == "number" ? !Number.isNaN(e) : typeof e == "string" ? e !== null && e !== "" && /\d+\.?\d*/.test(e) : !1;
}
function Oc(e, t) {
  const r = e.series.every(({ type: y }) => y === "Bar"), n = e.series.every(({ type: y }) => ["Line", "dashed-sm", "dashed-md", "dashed-lg"].includes(y)), a = (y) => (k) => y.reduce((E, M) => isNaN(Number(k[M])) ? E : E + Number(k[M]), 0), o = () => {
    let y = Math.max(...t.map((k) => Math.max(...e.runtime.seriesKeys.map((E) => Wu(k[E]) ? Number(c(k[E])) : 0))));
    if ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && r) && e.visualizationSubType === "stacked") {
      const k = t.map(a(e.runtime.seriesKeys)).filter((E) => !isNaN(E));
      y = Math.max(...k);
    }
    if (e.visualizationSubType === "stacked" && e.visualizationType === "Area Chart") {
      const k = t.map(a(e.runtime.seriesKeys));
      y = Math.max(...k);
    }
    if ((e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.series && e.series.dataKey && (y = Math.max(...t.map((k) => Wu(k[e.series.dataKey]) ? Number(c(k[e.series.dataKey])) : 0))), e.visualizationType === "Combo" && e.visualizationSubType === "stacked" && !r && e.runtime.barSeriesKeys && e.runtime.lineSeriesKeys) {
      const k = t.map(a(e.runtime.barSeriesKeys)), E = Math.max(...t.map((T) => Math.max(...e.runtime.lineSeriesKeys.map((m) => Number(c(T[m])))))), M = Math.max(...k);
      y = Math.max(M, E);
    }
    return y;
  }, f = () => {
    const y = Math.min(...t.map((k) => Math.min(...e.runtime.seriesKeys.map((E) => Wu(k[E]) ? Number(c(k[E])) : 1 / 0))));
    return String(y);
  }, s = () => e.runtime.seriesKeys ? e.runtime.seriesKeys.some((y) => t.some((k) => k[y] >= 0)) : !1, c = (y) => y === null || y === "" ? "" : typeof y == "string" ? y.replace(/[,$]/g, "") : y, d = Number(o()), g = Number(f()), v = s();
  return { minValue: g, maxValue: d, existPositiveValue: v, isAllLine: n };
}
function ph({ config: e, yMax: t = 0, data: r = [], updateConfig: n }) {
  var y, k, E, M;
  const a = e.visualizationType === "Combo" && e.orientation === "vertical", o = e.series && e.series.filter((T) => T.axis === "Right").map((T) => T.dataKey);
  let { minValue: f } = Oc(e, r);
  const s = (T) => {
    if (!T)
      return [0];
    let m = [];
    return T.map((L, O) => m = [...m, ...r.map((_) => Number(_[L]))]), m;
  };
  let c = Math.max.apply(null, s(o));
  e.yAxis.rightMax > c && (c = e.yAxis.rightMax), e.yAxis.rightMin < f && (f = e.yAxis.rightMin);
  const d = ((k = (y = e.runtime) == null ? void 0 : y.barSeriesKeys) == null ? void 0 : k.length) > 0, g = ((M = (E = e.runtime) == null ? void 0 : E.lineSeriesKeys) == null ? void 0 : M.length) > 0;
  return (d || g) && f > 0 && (f = 0), { yScaleRight: Yn({
    domain: [f, c],
    range: [t, 0]
  }), hasRightAxis: a };
}
const hk = (e) => {
  const { preliminaryData: t, data: r, stroke: n, strokeWidth: a, handleLineType: o, lineType: f, seriesKey: s } = e, c = t.filter((y) => y.seriesKey && y.column && y.value && y.type && y.style), d = (y) => c.find((k) => k.seriesKey === s && y[k.column] === k.value && k.type === "effect" && k.style !== "Open Circles");
  let g = [];
  const v = (y) => ({
    stroke: n,
    strokeWidth: a,
    strokeDasharray: y
  });
  return r.forEach((y, k) => {
    let E = d(y), M = v(o(E ? E.style : f));
    g.push(M), E && k > 0 && (g[k - 1] = v(o(E.style)));
  }), g;
}, pk = (e, t, r) => {
  const n = e.filter((o) => o.style === "Open Circles" && o.type === "effect").map((o) => ({ column: o.column, value: o.value, seriesKey: o.seriesKey }));
  let a = [];
  return t.forEach((o) => {
    n.some((f) => o[f.column] === f.value && f.seriesKey === r) && a.push(o);
  }), a;
}, Xd = (e) => {
  var O, _, N, R, j, B;
  const { config: t, d: r, displayArea: n, seriesKey: a, tooltipData: o, xScale: f, yScale: s, colorScale: c, parseDate: d, yScaleRight: g, data: v, circleData: y, dataIndex: k, mode: E } = e, { lineDatapointStyle: M } = t, T = (O = t == null ? void 0 : t.series.filter((V) => V.dataKey === a)) == null ? void 0 : O[0], m = (V, q, Y, U, te) => {
    const me = Y.runtime.seriesLabels || [];
    let I;
    return V ? I = q(me[U] || te) : I = "transparent", Y.lineDatapointColor === "Lighter than Line" && I !== "transparent" && I && (I = bs(I).brighten(1)), I;
  }, L = (V) => (t.xAxis.type === "categorical" ? f(V) : f(d(V))) + (f.bandwidth ? f.bandwidth() / 2 : 0);
  if (E === "ALWAYS_SHOW_POINTS") {
    if (M === "hidden")
      return /* @__PURE__ */ i.createElement(i.Fragment, null);
    if (M === "always show")
      return (y == null ? void 0 : y.some((q) => q[t.xAxis.dataKey] === r[t.xAxis.dataKey] && q[a] === r[a])) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(
        "circle",
        {
          cx: L(r[t.xAxis.dataKey]),
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
    if (!o || !a || !o.data)
      return;
    let V = (N = (_ = o == null ? void 0 : o.data) == null ? void 0 : _[0]) == null ? void 0 : N[1];
    if (!V)
      return;
    let q, Y = o.data.filter((me) => me[0] === a), U = (R = Y == null ? void 0 : Y[0]) == null ? void 0 : R[0], te = (j = Y == null ? void 0 : Y[0]) == null ? void 0 : j[2];
    return U ? (o == null || o.data.indexOf(U), q = (B = v == null ? void 0 : v.find((me) => me[t == null ? void 0 : t.xAxis.dataKey] === V)) == null ? void 0 : B[a], o == null ? void 0 : o.data.map((me, I) => (t.runtime.seriesLabelsAll.indexOf(V), isNaN(q) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : (y == null ? void 0 : y.some((ue) => ue[t.xAxis.dataKey] === V)) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(
      "circle",
      {
        cx: L(V),
        cy: te === "right" ? g(q) : s(q),
        r: 4.5,
        opacity: 1,
        fillOpacity: 1,
        fill: m(n, c, t, U, a),
        style: { filter: "unset", opacity: 1 },
        key: `line-chart-circle--${JSON.stringify(me)}--${I}`
      }
    )))) : void 0;
  }
  return E === "ISOLATED_POINTS" && E && ((q, Y) => {
    const U = v[q], te = v[q - 1], me = v[q + 1];
    if (q === 0 && !me[Y] || q === v.length - 1 && !te[Y] || q !== 0 && U[Y] && !te[Y] && !me[Y])
      return !0;
  })(k, a) ? /* @__PURE__ */ i.createElement("circle", { cx: L(r[t.xAxis.dataKey]), cy: T.axis === "Right" ? g(r[T.dataKey]) : s(r[T.dataKey]), r: 5.3, strokeWidth: 2, stroke: c(t.runtime.seriesLabels[a]), fill: c(t.runtime.seriesLabels[a]) }) : null;
}, om = (e) => {
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
    colorScale: v,
    config: y,
    formatNumber: k,
    handleLineType: E,
    isNumber: M,
    parseDate: T,
    seriesHighlight: m,
    tableData: L,
    transformedData: O,
    updateConfig: _,
    rawData: N
  } = se.useContext(Et), { yScaleRight: R } = ph({ config: y, yMax: d, data: O, updateConfig: _ });
  if (!o)
    return;
  const { lineDatapointStyle: j, showLineSeriesLabels: B, legend: V } = y;
  return /* @__PURE__ */ i.createElement(Ir, { component: "LineChart" }, /* @__PURE__ */ i.createElement(rt, { left: y.runtime.yAxis.size }, " ", (y.runtime.lineSeriesKeys || y.runtime.seriesKeys).map((q, Y) => {
    var ae;
    let U = y.series.filter((W) => W.dataKey === q)[0].type;
    const te = y.series.filter((W) => W.dataKey === q), me = te[0].axis ? te[0].axis : "left";
    let I = V.behavior === "highlight" || m.length === 0 || m.indexOf(q) !== -1;
    const le = pk(y.preliminaryData, N, q);
    let ue = hk({ preliminaryData: y.preliminaryData, data: L, stroke: v(y.runtime.seriesLabels[q]), strokeWidth: te[0].weight || 2, handleLineType: E, lineType: U, seriesKey: q }), fe = (W) => c(t(W)) + (c.bandwidth ? c.bandwidth() / 2 : 0);
    return /* @__PURE__ */ i.createElement(
      rt,
      {
        key: `series-${q}`,
        opacity: V.behavior === "highlight" && m.length > 0 && m.indexOf(q) === -1 ? 0.5 : 1,
        display: V.behavior === "highlight" || m.length === 0 && !V.dynamicLegend || m.indexOf(q) !== -1 ? "block" : "none"
      },
      O.map((W, Z) => {
        const ee = y.series.find(({ dataKey: ze }) => ze === q), { axis: Ae } = ee, xe = Object.keys(y.runtime.seriesLabels).length > 1, De = Ae === "Right" ? "rightLabel" : "label";
        let oe = y.runtime.yAxis[De];
        return xe || (oe = y.isLegendValue ? y.runtime.seriesLabels[q] : oe), W[q] !== void 0 && W[q] !== "" && W[q] !== null && M(W[q]) && /* @__PURE__ */ i.createElement(rt, { key: `series-${q}-point-${Z}`, className: "checkwidth" }, /* @__PURE__ */ i.createElement(gr, { key: "bars", width: Number(s), height: Number(d), fill: "transparent", fillOpacity: 0.05, onMouseMove: (ze) => o(ze, L), onMouseOut: a, onClick: (ze) => n(ze, O) }), /* @__PURE__ */ i.createElement(bt, { display: y.labels ? "block" : "none", x: fe(W), y: me === "Right" ? R(r(W, q)) : g(r(W, q)), fill: "#000", textAnchor: "middle" }, k(W[q], "left")), (j === "hidden" || j === "always show") && /* @__PURE__ */ i.createElement(
          Xd,
          {
            mode: "ALWAYS_SHOW_POINTS",
            dataIndex: Z,
            circleData: le,
            data: O,
            d: W,
            config: y,
            seriesKey: q,
            displayArea: I,
            tooltipData: f,
            xScale: c,
            yScale: g,
            colorScale: v,
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
            circleData: le,
            data: O,
            d: W,
            config: y,
            seriesKey: q,
            displayArea: I,
            tooltipData: f,
            xScale: c,
            yScale: g,
            colorScale: v,
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
          circleData: le,
          data: O,
          config: y,
          seriesKey: q,
          displayArea: I,
          tooltipData: f,
          xScale: c,
          yScale: g,
          colorScale: v,
          parseDate: T,
          yScaleRight: R,
          seriesAxis: me
        }
      )),
      (ae = y == null ? void 0 : y.preliminaryData) != null && ae.some((W) => W.value && W.column) ? /* @__PURE__ */ i.createElement(
        _g,
        {
          curve: xs[te[0].lineType],
          segments: (y.xAxis.type === "date-time" ? O.sort((W, Z) => {
            let ee = t(W), Ae = t(Z);
            return ee < Ae ? -1 : Ae < ee ? 1 : 0;
          }) : O).map((W) => [W]),
          segmentation: "x",
          x: (W) => fe(W),
          y: (W) => me === "Right" ? R(r(W, q)) : g(Number(r(W, q))),
          styles: ue,
          defined: (W, Z) => W[q] !== "" && W[q] !== null && W[q] !== void 0
        }
      ) : /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
        ma,
        {
          curve: xs[te[0].lineType],
          data: y.xAxis.type === "date-time" ? O.sort((W, Z) => {
            let ee = t(W), Ae = t(Z);
            return ee < Ae ? -1 : Ae < ee ? 1 : 0;
          }) : O,
          x: (W) => fe(W),
          y: (W) => me === "Right" ? R(r(W, q)) : g(Number(r(W, q))),
          stroke: v(y.runtime.seriesLabels[q]),
          strokeWidth: te[0].weight || 2,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: U ? E(U) : 0,
          defined: (W, Z) => W[q] !== "" && W[q] !== null && W[q] !== void 0
        }
      )),
      le.map((W, Z) => /* @__PURE__ */ i.createElement("circle", { key: Z, cx: fe(W), cy: me === "Right" ? R(r(W, q)) : g(Number(r(W, q))), r: 6, strokeWidth: te[0].weight || 2, stroke: v ? v(y.runtime.seriesLabels[q]) : "#000", fill: "#fff" })),
      y.animate && /* @__PURE__ */ i.createElement(
        ma,
        {
          className: "animation",
          curve: xs[te[0].lineType],
          data: O,
          x: (W) => fe(W),
          y: (W) => me === "Right" ? R(r(W, q)) : g(Number(r(W, q))),
          stroke: "#fff",
          strokeWidth: 3,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: U ? E(U) : 0,
          defined: (W, Z) => W[q] !== "" && W[q] !== null && W[q] !== void 0
        }
      ),
      B && (y.runtime.lineSeriesKeys || y.runtime.seriesKeys).map((W) => {
        let Z;
        for (let ee = O.length - 1; ee >= 0; ee--)
          if (O[ee][W]) {
            Z = O[ee];
            break;
          }
        return Z ? /* @__PURE__ */ i.createElement("text", { x: fe(Z) + 5, y: g(r(Z, W)), alignmentBaseline: "middle", fill: y.colorMatchLineSeriesLabels && v ? v(y.runtime.seriesLabels[W] || W) : "black" }, y.runtime.seriesLabels[W] || W) : /* @__PURE__ */ i.createElement(i.Fragment, null);
      })
    );
  }), y.legend.dynamicLegend && m.length === 0 && /* @__PURE__ */ i.createElement(bt, { x: s / 2, y: d / 2, fill: "black", textAnchor: "middle", color: "black" }, y.legend.dynamicLegendChartMessage)));
}, mk = (e) => {
  const { rawData: t, updateConfig: r } = se.useContext(Et), { xScale: n, yScale: a, config: o, height: f, width: s, handleTooltipMouseOff: c, handleTooltipMouseOver: d } = e, { forestPlot: g } = o, v = o.xAxis.tickWidthMax + 10, [y, k] = se.useState(!1);
  se.useEffect(() => {
    try {
      const _ = ["estimateField", "lower", "upper", "estimateRadius"], N = o, R = 10;
      for (let j = 0; j < R; j++)
        _.forEach((B) => {
          var V;
          o.forestPlot[B] && o.forestPlot[B] !== ((V = N.columns[o.forestPlot[`additionalColumn${j}`]]) == null ? void 0 : V.name) && (delete N.columns[`additionalColumn${j}`], N.columns[o.forestPlot[B]] = {}, N.columns[o.forestPlot[B]].dataKey = N.forestPlot[B], N.columns[o.forestPlot[B]].name = N.forestPlot[B], N.columns[o.forestPlot[B]].dataTable = !0, N.columns[o.forestPlot[B]].tooltips = !0, N.columns[o.forestPlot[B]].label = N.forestPlot[B]);
        });
      o.forestPlot.radius.scalingColumn && (N.columns[o.forestPlot.radius.scalingColumn] = {}, N.columns[o.forestPlot.radius.scalingColumn].dataKey = N.forestPlot.radius.scalingColumn, N.columns[o.forestPlot.radius.scalingColumn].name = N.forestPlot.radius.scalingColumn, N.columns[o.forestPlot.radius.scalingColumn].label = N.forestPlot.radius.scalingColumn, N.columns[o.forestPlot.radius.scalingColumn].dataTable = !0, N.columns[o.forestPlot.radius.scalingColumn].tooltips = !0), N.table.showVertical && (N.table.indexLabel = o.xAxis.dataKey), r(N);
    } catch (_) {
      console.log(_.message);
    }
  }, []), se.useEffect(() => {
    !y && o.forestPlot.type === "Logarithmic" && (r({
      ...o,
      dataFormat: {
        ...o.dataFormat,
        roundTo: 2
      }
    }), k(!0));
  }, [o.forestPlot.type]);
  const E = o.data.find((_) => _[o.xAxis.dataKey] === o.forestPlot.pooledResult.column), M = E ? [
    { x: n(E[o.forestPlot.lower]), y: f - Number(o.forestPlot.rowHeight) },
    { x: n(E[o.forestPlot.estimateField]), y: f - g.pooledResult.diamondHeight - Number(o.forestPlot.rowHeight) },
    { x: n(E[o.forestPlot.upper]), y: f - Number(o.forestPlot.rowHeight) },
    { x: n(E[o.forestPlot.estimateField]), y: f + g.pooledResult.diamondHeight - Number(o.forestPlot.rowHeight) },
    { x: n(E[o.forestPlot.lower]), y: f - Number(o.forestPlot.rowHeight) }
  ] : [], T = o.forestPlot.rowHeight, m = [
    { x: 0, y: T },
    { x: s, y: T }
  ], L = [
    { x: 0, y: f },
    { x: s, y: f }
  ], O = Object.entries(o.columns).map((_) => _[1]).filter((_) => _.forestPlot === !0);
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(rt, { width: s }, g.title && /* @__PURE__ */ i.createElement(bt, { className: "forest-plot--title", x: g.type === "Linear" ? n(0) : n(1), y: 0, textAnchor: "middle", verticalAnchor: "start", fontSize: Ri(o.fontSize), fill: "black" }, g.title), g.lineOfNoEffect.show && g.type === "Linear" && /* @__PURE__ */ i.createElement(rn, { from: { x: n(0), y: 0 + T }, to: { x: n(0), y: f }, className: "forestplot__line-of-no-effect", stroke: g.regression.baseLineColor || "black" }), g.lineOfNoEffect.show && g.type === "Logarithmic" && /* @__PURE__ */ i.createElement(rn, { from: { x: n(1), y: 0 + T }, to: { x: n(1), y: f }, className: "forestplot__line-of-no-effect", stroke: g.regression.baseLineColor || "black" }), t.map((_, N) => {
    const R = Yn({
      domain: t.map((U) => U[g.radius.scalingColumn]),
      range: [g.radius.min, g.radius.max]
    }), j = g.radius.scalingColumn !== "" ? R(t[N][g.radius.scalingColumn]) : 4, B = g.colors.shape ? g.colors.shape : "black", V = g.colors.line ? g.colors.line : "black", q = 4;
    return _[o.xAxis.dataKey] === g.pooledResult.column ? /* @__PURE__ */ i.createElement(ma, { data: M, x: (U) => U.x, y: (U) => U.y - Ri(o.fontSize) / 2, stroke: "black", strokeWidth: 2, fill: "black", curve: of }) : /* @__PURE__ */ i.createElement(rt, null, /* @__PURE__ */ i.createElement(
      "path",
      {
        stroke: V,
        strokeWidth: 1,
        className: "lower-ci",
        d: `
                    M${n(_[g.lower])} ${a(N) - Number(q)}
                    L${n(_[g.lower])} ${a(N) + Number(q)}
                `
      }
    ), /* @__PURE__ */ i.createElement(
      "path",
      {
        stroke: V,
        strokeWidth: 1,
        className: "upper-ci",
        d: `
                    M${n(_[g.upper])} ${a(N) - Number(q)}
                    L${n(_[g.upper])} ${a(N) + Number(q)}
                `
      }
    ), /* @__PURE__ */ i.createElement("line", { stroke: V, className: `line-${_[o.yAxis.dataKey]}`, key: N, x1: n(_[g.lower]), x2: n(_[g.upper]), y1: a(N), y2: a(N) }), g.shape === "circle" && /* @__PURE__ */ i.createElement(Oy, { className: "forest-plot--circle", cx: n(Number(_[g.estimateField])), cy: a(N), r: g.radius.scalingColumn !== "" ? R(t[N][g.radius.scalingColumn]) : 4, fill: B, style: { opacity: 1, filter: "unset" } }), g.shape === "square" && /* @__PURE__ */ i.createElement("rect", { className: "forest-plot--square", x: n(Number(_[g.estimateField])), y: a(N) - j / 2, width: j, height: j, fill: B, style: { opacity: 1, filter: "unset" } }), g.shape === "text" && /* @__PURE__ */ i.createElement(bt, { className: "forest-plot--text", x: n(Number(_[g.estimateField])), y: a(N), textAnchor: "middle", verticalAnchor: "middle", fontSize: Ri(o.fontSize), fill: B }, _[g.estimateField]));
  }), M && g.regression.showDiamond && /* @__PURE__ */ i.createElement(ma, { data: M, x: (_) => _.x, y: (_) => _.y, stroke: "black", strokeWidth: 2, fill: g.regression.baseLineColor, curve: of }), g.regression.description && /* @__PURE__ */ i.createElement(bt, { x: 0 - Number(o.xAxis.size), width: s, y: f - o.forestPlot.rowHeight - Number(g.rowHeight) / 3, verticalAnchor: "start", textAnchor: "start", style: { fontWeight: "bold", fontSize: 12 } }, g.regression.description), /* @__PURE__ */ i.createElement(gr, { key: "forest-plot-tooltip-area", className: "forest-plot-tooltip-area", width: s, height: f, fill: "transparent", fillOpacity: 0.5, onMouseMove: (_) => d(_, t), onMouseOut: c })), /* @__PURE__ */ i.createElement(rn, { from: m[0], to: m[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__top-line" }), /* @__PURE__ */ i.createElement(rn, { from: L[0], to: L[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__bottom-line" }), O.map((_) => t.map((N, R) => /* @__PURE__ */ i.createElement(bt, { className: `${N[_.name]}`, x: _.forestPlotAlignRight ? s : _.forestPlotStartingPoint, y: a(R), textAnchor: _.forestPlotAlignRight ? "end" : "start", verticalAnchor: "middle", fontSize: Ri(o.fontSize), fill: "black" }, N[_.name]))), !g.hideDateCategoryCol && t.map((_, N) => /* @__PURE__ */ i.createElement(bt, { className: `${_[o.xAxis.dataKey]}`, x: 0, y: a(N), textAnchor: "start", verticalAnchor: "middle", fontSize: Ri(o.fontSize), fill: "black" }, _[o.xAxis.dataKey])), !g.hideDateCategoryCol && o.xAxis.dataKey && /* @__PURE__ */ i.createElement(bt, { className: o.xAxis.dataKey, x: 0, y: 0, textAnchor: "start", verticalAnchor: "start", fontSize: Ri(o.fontSize), fill: "black" }, o.xAxis.dataKey), O.map((_) => /* @__PURE__ */ i.createElement(bt, { className: `${_.label}`, x: _.forestPlotAlignRight ? s : _.forestPlotStartingPoint, y: 0, textAnchor: _.forestPlotAlignRight ? "end" : "start", verticalAnchor: "start", fontSize: Ri(o.fontSize), fill: "black" }, _.label)), g.leftLabel && /* @__PURE__ */ i.createElement(bt, { className: "forest-plot__left-label", x: g.type === "Linear" ? n(0) - 25 : n(1) - 25, y: f + v, textAnchor: "end", verticalAnchor: "start" }, g.leftLabel), g.rightLabel && /* @__PURE__ */ i.createElement(bt, { className: "forest-plot__right-label", x: g.type === "Linear" ? n(0) + 25 : n(1) + 25, y: f + v, textAnchor: "start", verticalAnchor: "start" }, g.rightLabel));
}, gk = ({ width: e, height: t, originalWidth: r }) => {
  var O;
  const { config: n, colorScale: a, transformedData: o, formatNumber: f, seriesHighlight: s, getTextWidth: c } = se.useContext(Et);
  if (!n || ((O = n == null ? void 0 : n.series) == null ? void 0 : O.length) < 2)
    return;
  const d = n.barHasBorder === "true" ? 1 : 0, g = e / 2, v = { small: 16, medium: 18, large: 20 }, y = 1.02, k = {
    parentKey: n.dataDescription.seriesKey,
    dataKey: n.series[0].dataKey,
    dataKeyLabel: n.runtime.seriesLabels[n.series[0].dataKey] || n.series[0].dataKey,
    color: a(n.runtime.seriesLabels[n.series[0].dataKey]),
    max: Math.max.apply(
      Math,
      o.map((_) => _[n.series[0].dataKey])
    ),
    labelColor: ""
  }, E = {
    parentKey: n.dataDescription.seriesKey,
    dataKey: n.series[1].dataKey,
    dataKeyLabel: n.runtime.seriesLabels[n.series[1].dataKey] || n.series[1].dataKey,
    color: a(n.runtime.seriesLabels[n.series[1].dataKey]),
    max: Math.max.apply(
      Math,
      o.map((_) => _[n.series[1].dataKey])
    ),
    labelColor: ""
  }, M = Yn({
    domain: [0, Math.max(k.max * y, E.max * 1.1)],
    range: [0, g]
  });
  k.labelColor = k.color ? Jo("#000", k.color) : "#000", E.labelColor = E.color ? Jo("#000", E.color) : "#000";
  const T = n.yAxis.label ? `${n.yAxis.label}: ` : "", m = (_) => `<p>
				${n.dataDescription.seriesKey}: ${k.dataKeyLabel}<br/>
				${n.xAxis.dataKey}: ${_[n.xAxis.dataKey]}<br/>
				${T}${f(_[k.dataKey], "left")}
			</p>`, L = (_) => `<p>
				${n.dataDescription.seriesKey}: ${E.dataKeyLabel}<br/>
				${n.xAxis.dataKey}: ${_[n.xAxis.dataKey]}<br/>
				${T}${f(_[E.dataKey], "left")}
			</p>`;
  return e > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `
				#cdc-visualization__paired-bar-chart,
				 #cdc-visualization__paired-bar-chart > .visx-group {
					transform-origin: center
				}
				`), /* @__PURE__ */ i.createElement("svg", { id: "cdc-visualization__paired-bar-chart", width: r, height: t, viewBox: `0 0 ${e + Number(n.runtime.yAxis.size)} ${t}`, role: "img", tabIndex: 0 }, /* @__PURE__ */ i.createElement("title", null, `Paired bar chart graphic with the title ${n.title ? n.title : "No Title Found"}`), /* @__PURE__ */ i.createElement(rt, { top: 0, left: Number(n.xAxis.size) }, o.filter((_) => n.series[0].dataKey === k.dataKey).map((_, N) => {
    let R = n.legend.behavior === "highlight" && s.length > 0 && s.indexOf(n.series[0].dataKey) === -1, j = n.legend.behavior === "highlight" || s.length === 0 || s.indexOf(n.series[0].dataKey) !== -1, B = M(_[n.series[0].dataKey]), V = Number(n.barHeight) ? Number(n.barHeight) : 25, q = 0;
    q = N !== 0 ? (Number(n.barSpace) + V + d) * N : q;
    const Y = (Number(n.barSpace) + V + d) * o.length;
    n.heights.horizontal = Y;
    const te = c(f(_[k.dataKey], "left"), `normal ${v[n.fontSize]}px sans-serif`) < B - 5;
    return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(rt, { key: `group-${k.dataKey}-${_[n.xAxis.dataKey]}`, className: "horizontal" }, /* @__PURE__ */ i.createElement(
      gr,
      {
        id: `bar-${k.dataKey}-${_[n.dataDescription.xKey]}`,
        className: "bar group-1",
        key: `bar-${k.dataKey}-${_[n.dataDescription.xKey]}`,
        x: g - B,
        y: q,
        width: M(_[n.series[0].dataKey]),
        height: V,
        fill: k.color,
        "data-tooltip-html": m(_),
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.runtime.uniqueId}`,
        stroke: "#333",
        strokeWidth: d,
        opacity: R ? 0.5 : 1,
        display: j ? "block" : "none",
        tabIndex: -1
      }
    ), n.yAxis.displayNumbersOnBar && j && /* @__PURE__ */ i.createElement(bt, { textAnchor: te ? "start" : "end", dx: te ? 5 : -5, verticalAnchor: "middle", x: g - B, y: q + n.barHeight / 2, fill: te ? k.labelColor : "#000" }, f(_[k.dataKey], "left"))));
  }), o.filter((_) => n.series[1].dataKey === E.dataKey).map((_, N) => {
    let R = M(_[n.series[1].dataKey]), j = n.legend.behavior === "highlight" && s.length > 0 && s.indexOf(n.series[1].dataKey) === -1, B = n.legend.behavior === "highlight" || s.length === 0 || s.indexOf(n.series[1].dataKey) !== -1, V = n.barHeight ? Number(n.barHeight) : 25, q = 0;
    q = N !== 0 ? (Number(n.barSpace) + V + d) * N : q;
    const Y = (Number(n.barSpace) + V + d) * o.length;
    n.heights.horizontal = Y;
    const te = c(f(_[E.dataKey], "left"), `normal ${v[n.fontSize]}px sans-serif`) < R - 5;
    return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `
                      .bar-${E.dataKey}-${_[n.xAxis.dataKey]} {
                          transform-origin: ${g}px ${q}px
                      }
							      `), /* @__PURE__ */ i.createElement(rt, { key: `group-${E.dataKey}-${_[n.dataDescription.xKey]}`, className: "horizontal" }, /* @__PURE__ */ i.createElement(
      gr,
      {
        id: `bar-${E.dataKey}-${_[n.dataDescription.xKey]}`,
        className: "bar group-2",
        key: `bar-${E.dataKey}-${_[n.dataDescription.xKey]}`,
        x: g,
        y: q,
        width: M(_[n.series[1].dataKey]),
        height: V,
        fill: E.color,
        "data-tooltip-html": L(_),
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.runtime.uniqueId}`,
        strokeWidth: d,
        stroke: "#333",
        opacity: j ? 0.5 : 1,
        display: B ? "block" : "none",
        tabIndex: -1
      }
    ), n.yAxis.displayNumbersOnBar && B && /* @__PURE__ */ i.createElement(bt, { textAnchor: te ? "end" : "start", dx: te ? -5 : 5, verticalAnchor: "middle", x: g + R, y: q + n.barHeight / 2, fill: te ? E.labelColor : "#000" }, f(_[E.dataKey], "left"))));
  }))));
}, uy = ({ config: e, minValue: t, maxValue: r, existPositiveValue: n, data: a, isAllLine: o }) => {
  let f = 0, s = 0, c = 0, d = 0;
  if (!a)
    return { min: f, max: s };
  const { visualizationType: g, series: v } = e, { max: y, min: k } = e.runtime.yAxis, E = n ? y >= r : y >= 0, M = e.useLogScale ? k >= 0 : k <= 0 && t >= 0 || k <= t && t < 0;
  f = k && M ? k : t, s = y && E ? y : Number.MIN_VALUE;
  const { lower: T, upper: m } = (e == null ? void 0 : e.confidenceKeys) || {};
  if (T && m && e.visualizationType === "Bar") {
    const L = f < 0 ? 1.1 : 0;
    s = Math.max(r, Math.max(...a.flatMap((O) => [O[m], O[T]])) * 1.15), f = Math.min(t, Math.min(...a.flatMap((O) => [O[m], O[T]])) * 1.15) * L;
  }
  if (e.series.filter((L) => (L == null ? void 0 : L.type) === "Forecasting")) {
    const {
      runtime: { forecastingSeriesKeys: L }
    } = e;
    if ((L == null ? void 0 : L.length) > 0) {
      let O = [];
      L.forEach((j) => {
        var B;
        (B = j.confidenceIntervals) == null || B.map((V) => {
          O.push(V.high), O.push(V.low);
        });
      });
      const _ = a.map((j) => O.map((B) => j[B])), N = Math.max.apply(
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
      let L = v.filter((N) => N.axis === "Left"), O = v.filter((N) => N.axis === "Right");
      const _ = (N, R, j, B = "left") => {
        let V = 0;
        return (R.map((Y) => Y.dataKey) || []).forEach((Y) => {
          let U = R.find((I) => I.dataKey === Y), te = N.map((I) => I[Y]), me = Math.max.apply(null, te);
          e.visualizationSubType === "stacked" && B === "left" && U.type === "Bar" && (V += me), me > j && (j = me), j < V && (j = V);
        }), j;
      };
      c = _(a, L, c, "left"), d = _(a, O, d, "right"), c < y && (c = y);
    } catch (L) {
      console.error(L.message);
    }
  if ((g === "Bar" || g === "Combo" && !o) && f > 0 && (f = 0), (e.visualizationType === "Bar" || e.visualizationType === "Combo" && !o) && f < 0 && (f = f * 1.1), e.visualizationType === "Combo" && o && ((k == null || k === "") && f > 0 && (f = 0), k)) {
    const L = e.useLogScale ? k >= 0 && k < t : k < t;
    f = k && L ? k : t;
  }
  if (e.visualizationType === "Deviation Bar" && f > 0) {
    const L = Number(k) < Math.min(t, Number(e.xAxis.target));
    f = k && L ? k : 0;
  }
  if (e.visualizationType === "Line") {
    const L = e.useLogScale ? k >= 0 && k < t : k < t;
    f = k && L ? k : t;
  }
  if (s === Number.MIN_VALUE && (s = n ? r : 0), e.runtime.yAxis.paddingPercent) {
    let L = (s - f) * e.runtime.yAxis.paddingPercent;
    f -= L, s += L;
  }
  if (e.isLollipopChart && e.yAxis.displayNumbersOnBar) {
    const L = a.map((_) => _[e.series[0].dataKey]), O = Math.max(...L).toString().length;
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
}, qr = {
  TIME: "time",
  LOG: "log",
  POINT: "point",
  LINEAR: "linear",
  BAND: "band"
}, yk = (e) => {
  let { xAxisDataMapped: t, xMax: r, yMax: n, min: a, max: o, config: f, data: s } = e;
  const { rawData: c, dimensions: d } = se.useContext(Et), [g, v] = d, y = f.runtime.barSeriesKeys || f.runtime.seriesKeys, k = f.runtime.xAxis.type, E = f.orientation === "horizontal", M = (V) => V[f.runtime.originalXAxis.dataKey], T = s.map((V) => M(V)), { visualizationType: m } = f;
  let L = null, O = null, _ = null, N = null, R = null, j = null, B = null;
  if (E && (L = vk({ min: a * 1.03, ...e }), L.type = f.useLogScale ? qr.LOG : qr.LINEAR, O = bk(k, t), O.rangeRound([0, n]), R = lm(y, [0, n])), E || (B = lm(T, [0, r], 0.5), L = qd(t, [0, r], 1 - f.barThickness), O = xk(e), R = qd(y, [0, L.bandwidth()], 0)), f.xAxis.type === "date-time") {
    let V = Math.min(...t), q = Math.max(...t);
    V -= (f.xAxis.padding ? f.xAxis.padding * 0.01 : 0) * (q - V), q += (f.xAxis.padding ? f.xAxis.padding * 0.01 : 0) * (q - V), L = xv({
      domain: [V, q],
      range: [0, r]
    }), B = L, L.type = qr.TIME, R = qd(y, [0, f.barThickness * r], 0);
  }
  if (f.visualizationType === "Deviation Bar") {
    const V = f.isLollipopChart ? 1.05 : 1.03;
    O = Qd({
      domain: t,
      range: [0, n]
    }), L = Yn({
      domain: [a * V, Math.max(Number(f.xAxis.target), o)],
      range: [0, r],
      round: !0,
      nice: !0
    }), L.type = qr.LINEAR;
  }
  if (f.visualizationType === "Scatter Plot" && f.xAxis.type === "continuous" && (L = Yn({
    domain: [0, Math.max.apply(null, L.domain())],
    range: [0, r]
  }), L.type = qr.LINEAR), m === "Box Plot") {
    const V = [];
    if (f.boxplot.plots.map((te) => te.columnOutliers.map((me) => V.push(me))) && !f.boxplot.hideOutliers) {
      let te = Math.min(...V), me = Math.max(...V);
      te < a && (a = te), me > o && (o = me);
    }
    let Y = Math.min(...f.boxplot.plots.map((te) => te.columnLowerBounds)), U = Math.max(...f.boxplot.plots.map((te) => te.columnUpperBounds));
    Y < a && (a = Y), U > o && (o = U), O = Yn({
      range: [n, 0],
      round: !0,
      domain: [a, o]
    }), L = Qd({
      range: [0, r],
      round: !0,
      domain: f.boxplot.categories,
      padding: 0.4
    }), L.type = qr.BAND;
  }
  if (m === "Paired Bar") {
    let q = Math.max.apply(
      Math,
      s.map((U) => {
        var te;
        return U[(te = f.series[0]) == null ? void 0 : te.dataKey];
      })
    ), Y = Math.max.apply(
      Math,
      s.map((U) => {
        var te;
        return U[(te = f.series[1]) == null ? void 0 : te.dataKey];
      })
    );
    N = Yn({
      domain: [0, Math.max(q, Y) * 1.02],
      range: [r / 2, 0]
    }), _ = Yn({
      domain: N.domain(),
      range: [r / 2, r],
      nice: !0
    });
  }
  if (m === "Forest Plot") {
    const V = () => f.forestPlot.regression.showDiamond || f.forestPlot.regression.description ? [0 + f.forestPlot.rowHeight * 2, n - f.forestPlot.rowHeight] : [0 + f.forestPlot.rowHeight * 2, n];
    O = Yn({
      domain: [0, c.length],
      range: V()
    });
    const q = 5, Y = Number(f.forestPlot.leftWidthOffset) / 100 * r, U = Number(f.forestPlot.rightWidthOffset) / 100 * r, te = Number(f.forestPlot.rightWidthOffsetMobile) / 100 * r, me = Number(f.forestPlot.leftWidthOffsetMobile) / 100 * r;
    if (g > 480) {
      if (f.forestPlot.type === "Linear" && (L = Yn({
        domain: [Math.min(...s.map((I) => parseFloat(I[f.forestPlot.lower]))) - q, Math.max(...s.map((I) => parseFloat(I[f.forestPlot.upper]))) + q],
        range: [Y, d[0] - U]
      }), L.type = qr.LINEAR), f.forestPlot.type === "Logarithmic") {
        let I = Math.max(...s.map((ue) => parseFloat(ue[f.forestPlot.upper]))), le = Math.min(...s.map((ue) => parseFloat(ue[f.forestPlot.lower])));
        L = Yu({
          domain: [le, I],
          range: [Y, r - U],
          nice: !0
        }), L.type = qr.LOG;
      }
    } else if (f.forestPlot.type === "Linear" && (L = Yn({
      domain: [Math.min(...s.map((I) => parseFloat(I[f.forestPlot.lower]))) - q, Math.max(...s.map((I) => parseFloat(I[f.forestPlot.upper]))) + q],
      range: [me, r - te],
      type: qr.LINEAR
    })), f.forestPlot.type === "Logarithmic") {
      let I = Math.max(...s.map((ue) => parseFloat(ue[f.forestPlot.upper]))), le = Math.min(...s.map((ue) => parseFloat(ue[f.forestPlot.lower])));
      L = Yu({
        domain: [le, I],
        range: [Y, r - U],
        nice: !0,
        base: I > 1 ? 10 : 2,
        round: !1,
        type: qr.LOG
      });
    }
  }
  return { xScale: L, yScale: O, seriesScale: R, g1xScale: N, g2xScale: _, xScaleNoPadding: j, xScaleBrush: B };
}, vk = ({ min: e, max: t, xMax: r, config: n }) => (e = n.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e, (n.useLogScale ? Yu : Yn)({
  domain: [e, t],
  range: [0, r],
  nice: n.useLogScale,
  zero: n.useLogScale
})), xk = ({ min: e, max: t, yMax: r, config: n, leftMax: a }) => {
  e = n.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e;
  const o = n.useLogScale ? Yu : Yn;
  return n.visualizationType === "Combo" && (t = a), o({
    domain: [e, t],
    range: [r, 0],
    nice: n.useLogScale,
    zero: n.useLogScale
  });
}, bk = (e, t) => e === "date" ? Yn({
  domain: [Math.min(...t), Math.max(...t)]
}) : qo({ domain: t, padding: 0.5 }), lm = (e, t, r = 0) => qo({
  domain: e,
  range: t,
  padding: r
}), qd = (e, t, r = 0) => Qd({
  domain: e,
  range: t,
  padding: r
});
function Sk(e) {
  return { hasTopAxis: e.visualizationType === "Bar" || e.visualizationType === "Combo" || e.visualizationType === "Line" };
}
const Ds = () => {
  const { config: e } = se.useContext(Et), { visualizationType: t, series: r, orientation: n, visualizationSubType: a } = e, o = [
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
  ], f = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"], s = () => !["Forest Plot", "Sankey"].includes(t), c = () => !["Spark Line"].includes(t), d = () => !["Spark Line"].includes(t), g = () => !["Area Chart", "Box Plot", "Pie", "Scatter Plot", "Forest Plot", "Spark Line", "Sankey"].includes(t), v = () => !["Area Chart", "Scatter Plot", "Box Plot", "Forest Plot", "Spark Line", "Sankey"].includes(t), y = () => {
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
  }, T = () => ["Line", "Bar", "Area Chart", "Combo"].includes(t) && n === "vertical", m = () => ["Box Plot", "Scatter Plot", "Pie"].includes(t) ? !1 : r == null ? void 0 : r.some((Pe) => Pe.type === "Bar" || Pe.type === "Paired Bar" || Pe.type === "Deviation Bar"), L = () => {
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
    enabledChartTypes: o,
    headerColors: f,
    visCanAnimate: v,
    visHasAnchors: E,
    visHasBarBorders: m,
    visHasDataCutoff: L,
    visHasLabelOnData: g,
    visHasDataSuppression: M,
    visHasLegend: y,
    visHasLegendAxisAlign: () => t === "Bar" && a === "stacked" && e.legend.behavior === "isolate",
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
    visSupportsPreliminaryData: () => {
      const ke = e == null ? void 0 : e.series.some((Pe) => ["Line", "dashed-sm", "dashed-md", "dashed-lg"].includes(Pe == null ? void 0 : Pe.type));
      return !!(t === "Line" || t === "Combo" && ke);
    },
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
      const ke = ["Forest Plot"];
      return !(n === "horizontal" || ke.includes(t));
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
var mh = {};
const Ek = /* @__PURE__ */ If(DS), kk = /* @__PURE__ */ If(IS);
var gh = {};
gh.__esModule = !0;
gh.default = wk;
var Fu = se;
function wk(e) {
  var t = (0, Fu.useState)(e), r = t[0], n = t[1], a = (0, Fu.useRef)(null), o = (0, Fu.useCallback)(function(f, s) {
    a.current = s || null, n(f);
  }, [n]);
  return (0, Fu.useLayoutEffect)(function() {
    a.current && (a.current(r), a.current = null);
  }, [r]), [r, o];
}
var yh = {}, vh = {};
vh.__esModule = !0;
vh.default = Tk;
function Tk(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
var xh = {};
xh.__esModule = !0;
xh.default = Pk;
function Ck(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Ak(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ak(e, t) {
  if (e) {
    if (typeof e == "string")
      return sm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return sm(e, t);
  }
}
function sm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Pk(e, t) {
  for (var r = e, n = 1 / 0, a = Ck(t), o; !(o = a()).done; ) {
    var f = o.value, s = Math.sqrt(Math.pow(f.x - e.x, 2) + Math.pow(f.y - e.y, 2));
    s < n && (n = s, r = {
      x: f.x,
      y: f.y
    });
  }
  return r;
}
yh.__esModule = !0;
yh.default = Lk;
var um = cy(vh), Rk = cy(xh);
function cy(e) {
  return e && e.__esModule ? e : { default: e };
}
function Lk(e, t, r) {
  var n, a, o, f;
  return r === void 0 && (r = {}), t.length > 0 ? (0, Rk.default)(e, t) : {
    x: (0, um.default)(e.x, (n = r.xMin) != null ? n : -1 / 0, (a = r.xMax) != null ? a : 1 / 0),
    y: (0, um.default)(e.y, (o = r.yMin) != null ? o : -1 / 0, (f = r.yMax) != null ? f : 1 / 0)
  };
}
var bh = {};
bh.__esModule = !0;
bh.default = Mk;
var Dk = se;
function Ok(e, t, r) {
  if (r === void 0 && (r = 1), !e)
    return [];
  for (var n = [], a = e.getTotalLength(), o = 0; o <= a; o += r) {
    var f = e.getPointAtLength(o), s = f.matrixTransform(t);
    n.push(s);
  }
  return n;
}
function Mk(e) {
  var t = (0, Dk.useMemo)(function() {
    if (!e)
      return [];
    var r = e.getCTM() || new DOMMatrix();
    return Ok(e, r);
  }, [e == null ? void 0 : e.getTotalLength()]);
  return t;
}
mh.__esModule = !0;
mh.default = Fk;
var Ni = se, Yo = Ek, cm = kk, _k = Sh(gh), dm = Sh(yh), Nk = Sh(bh);
function Sh(e) {
  return e && e.__esModule ? e : { default: e };
}
function Qr() {
  return Qr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qr.apply(this, arguments);
}
function Fk(e) {
  var t = e === void 0 ? {} : e, r = t.resetOnStart, n = r === void 0 ? !1 : r, a = t.snapToPointer, o = a === void 0 ? !0 : a, f = t.onDragEnd, s = t.onDragMove, c = t.onDragStart, d = t.x, g = t.y, v = t.dx, y = t.dy, k = t.isDragging, E = t.restrict, M = E === void 0 ? {} : E, T = t.restrictToPath, m = (0, Ni.useRef)({
    x: d,
    y: g,
    dx: v,
    dy: y
  }), L = (0, _k.default)({
    x: d,
    y: g,
    dx: v ?? 0,
    dy: y ?? 0,
    isDragging: !1
  }), O = L[0], _ = L[1], N = (0, Ni.useState)(new Yo.Point({
    x: 0,
    y: 0
  })), R = N[0], j = N[1];
  (0, Ni.useEffect)(function() {
    (m.current.x !== d || m.current.y !== g || m.current.dx !== v || m.current.dy !== y) && (m.current = {
      x: d,
      y: g,
      dx: v,
      dy: y
    }, _(function(U) {
      return Qr({}, U, {
        x: d,
        y: g,
        dx: v ?? 0,
        dy: y ?? 0
      });
    }));
  }), (0, Ni.useEffect)(function() {
    k !== void 0 && O.isDragging !== k && _(function(U) {
      return Qr({}, U, {
        isDragging: k
      });
    });
  }, [O.isDragging, k, _]);
  var B = (0, Nk.default)(T), V = (0, Ni.useCallback)(function(U) {
    U.persist(), _(function(te) {
      var me = te.x, I = me === void 0 ? 0 : me, le = te.y, ue = le === void 0 ? 0 : le, fe = te.dx, ae = te.dy, W = new Yo.Point({
        x: (I || 0) + fe,
        y: (ue || 0) + ae
      }), Z = (0, cm.localPoint)(U) || new Yo.Point({
        x: 0,
        y: 0
      }), ee = o ? Z : W, Ae = (0, dm.default)(ee, B, M);
      return j((0, Yo.subtractPoints)(W, Z)), {
        isDragging: !0,
        dx: n ? 0 : te.dx,
        dy: n ? 0 : te.dy,
        x: n ? Ae.x : Ae.x - te.dx,
        y: n ? Ae.y : Ae.y - te.dy
      };
    }, c && function(te) {
      c(Qr({}, te, {
        event: U
      }));
    });
  }, [c, n, M, B, _, o]), q = (0, Ni.useCallback)(function(U) {
    U.persist(), _(function(te) {
      if (!te.isDragging)
        return te;
      var me = te.x, I = me === void 0 ? 0 : me, le = te.y, ue = le === void 0 ? 0 : le, fe = (0, cm.localPoint)(U) || new Yo.Point({
        x: 0,
        y: 0
      }), ae = o ? fe : (0, Yo.sumPoints)(fe, R), W = (0, dm.default)(ae, B, M);
      return Qr({}, te, {
        dx: W.x - I,
        dy: W.y - ue
      });
    }, s && function(te) {
      te.isDragging && s(Qr({}, te, {
        event: U
      }));
    });
  }, [_, s, o, R, B, M]), Y = (0, Ni.useCallback)(function(U) {
    U.persist(), _(function(te) {
      return Qr({}, te, {
        isDragging: !1
      });
    }, f && function(te) {
      f(Qr({}, te, {
        event: U
      }));
    });
  }, [f, _]);
  return Qr({}, O, {
    dragEnd: Y,
    dragMove: q,
    dragStart: V
  });
}
var Mc = dy, os = Eh(xm), Gd = Eh(se), zk = Eh(mh);
function Eh(e) {
  return e && e.__esModule ? e : { default: e };
}
function dy(e) {
  var t = e.captureDragArea, r = t === void 0 ? !0 : t, n = e.snapToPointer, a = n === void 0 ? !0 : n, o = e.children, f = e.dx, s = e.dy, c = e.height, d = e.onDragEnd, g = e.onDragMove, v = e.onDragStart, y = e.resetOnStart, k = e.width, E = e.x, M = e.y, T = e.isDragging, m = e.restrict, L = e.restrictToPath, O = (0, zk.default)({
    resetOnStart: y,
    snapToPointer: a,
    onDragEnd: d,
    onDragMove: g,
    onDragStart: v,
    x: E,
    y: M,
    dx: f,
    dy: s,
    isDragging: T,
    restrict: m,
    restrictToPath: L
  });
  return /* @__PURE__ */ Gd.default.createElement(Gd.default.Fragment, null, O.isDragging && r && /* @__PURE__ */ Gd.default.createElement("rect", {
    width: k,
    height: c,
    onPointerDown: O.dragStart,
    onPointerMove: O.dragMove,
    onPointerUp: O.dragEnd,
    fill: "transparent"
  }), o(O));
}
dy.propTypes = {
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
function fm(e, t, r, n) {
  var a, o = bc(e, t + (t < r ? -n : n)), f = bc(e, r + (r < t ? -n : n)), s = Math.min(o, f), c = Math.max(o, f);
  if ("invert" in e && typeof e.invert < "u")
    a = {
      start: s,
      end: c
    };
  else {
    for (var d = [], g = e.domain(), v = s; v <= c; v += 1)
      d.push(g[v]);
    a = {
      values: d
    };
  }
  return a;
}
function kh(e) {
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
function Pr() {
  return Pr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Pr.apply(this, arguments);
}
function $k(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Df(e, t);
}
function Df(e, t) {
  return Df = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Df(e, t);
}
var fy = /* @__PURE__ */ function(e) {
  $k(t, e);
  function t() {
    for (var n, a = arguments.length, o = new Array(a), f = 0; f < a; f++)
      o[f] = arguments[f];
    return n = e.call.apply(e, [this].concat(o)) || this, n.handleDragStart = function(s) {
      var c = n.props, d = c.onBrushHandleChange, g = c.type, v = c.onBrushStart;
      d && d(g, kh(s.event)), v && v(s);
    }, n.handleDragMove = function(s) {
      var c = n.props, d = c.updateBrush, g = c.type, v = c.isControlled;
      !s.isDragging || v || d(function(y) {
        var k = y.start, E = y.end, M = 0, T = Math.max(k.x, E.x), m = Math.min(k.x, E.x), L = Math.max(k.y, E.y), O = Math.min(k.y, E.y);
        switch (g) {
          case "right":
            return M = T + s.dx, Pr({}, y, {
              activeHandle: g,
              extent: Pr({}, y.extent, {
                x0: Math.max(Math.min(M, k.x), y.bounds.x0),
                x1: Math.min(Math.max(M, k.x), y.bounds.x1)
              })
            });
          case "left":
            return M = m + s.dx, Pr({}, y, {
              activeHandle: g,
              extent: Pr({}, y.extent, {
                x0: Math.min(M, E.x),
                x1: Math.max(M, E.x)
              })
            });
          case "bottom":
            return M = L + s.dy, Pr({}, y, {
              activeHandle: g,
              extent: Pr({}, y.extent, {
                y0: Math.min(M, k.y),
                y1: Math.max(M, k.y)
              })
            });
          case "top":
            return M = O + s.dy, Pr({}, y, {
              activeHandle: g,
              extent: Pr({}, y.extent, {
                y0: Math.min(M, E.y),
                y1: Math.max(M, E.y)
              })
            });
          default:
            return y;
        }
      });
    }, n.handleDragEnd = function() {
      var s = n.props, c = s.updateBrush, d = s.onBrushEnd, g = s.onBrushHandleChange, v = s.isControlled;
      v || c(function(y) {
        var k = y.start, E = y.end, M = y.extent;
        k.x = Math.min(M.x0, M.x1), k.y = Math.min(M.y0, M.y0), E.x = Math.max(M.x0, M.x1), E.y = Math.max(M.y0, M.y1);
        var T = Pr({}, y, {
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
    var a = this, o = this.props, f = o.stageWidth, s = o.stageHeight, c = o.brush, d = o.type, g = o.handle, v = o.isControlled, y = o.isDragInProgress, k = o.renderBrushHandle, E = g.x, M = g.y, T = g.width, m = g.height, L = d === "right" || d === "left" ? "ew-resize" : "ns-resize";
    return /* @__PURE__ */ i.createElement(Mc, {
      width: f,
      height: s,
      onDragStart: this.handleDragStart,
      onDragMove: this.handleDragMove,
      onDragEnd: this.handleDragEnd,
      resetOnStart: !0,
      isDragging: v ? y : void 0
    }, function(O) {
      var _ = O.dragStart, N = O.dragEnd, R = O.dragMove, j = O.isDragging;
      return /* @__PURE__ */ i.createElement("g", null, j && /* @__PURE__ */ i.createElement("rect", {
        fill: "transparent",
        width: f,
        height: s,
        style: {
          cursor: L
        },
        onPointerMove: R,
        onPointerUp: v ? void 0 : N,
        onPointerLeave: v ? void 0 : N
      }), !k && /* @__PURE__ */ i.createElement("rect", {
        x: E,
        y: M,
        width: T,
        height: m,
        fill: "transparent",
        className: "visx-brush-handle-" + d,
        onPointerDown: _,
        onPointerMove: R,
        onPointerUp: v ? void 0 : N,
        style: {
          cursor: L,
          pointerEvents: c.activeHandle || c.isBrushing ? "none" : "all"
        }
      }), k && /* @__PURE__ */ i.createElement("g", {
        onPointerDown: _,
        onPointerMove: R,
        onPointerUp: v ? void 0 : N
      }, k(Pr({}, a.props.handle, {
        height: s,
        className: "visx-brush-handle-" + d,
        isBrushActive: c.extent.x0 !== -1 && c.extent.x1 !== -1
      }))));
    });
  }, t;
}(i.Component);
fy.propTypes = {
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
function Bk(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Of(e, t);
}
function Of(e, t) {
  return Of = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Of(e, t);
}
var wh = /* @__PURE__ */ function(e) {
  Bk(t, e);
  function t() {
    for (var n, a = arguments.length, o = new Array(a), f = 0; f < a; f++)
      o[f] = arguments[f];
    return n = e.call.apply(e, [this].concat(o)) || this, n.cornerDragMove = function(s) {
      var c = n.props, d = c.updateBrush, g = c.type;
      s.isDragging && d(function(v) {
        var y = v.start, k = v.end, E = Math.max(y.x, k.x), M = Math.min(y.x, k.x), T = Math.max(y.y, k.y), m = Math.min(y.y, k.y), L = 0, O = 0;
        switch (g) {
          case "topRight":
            return L = E + s.dx, O = m + s.dy, mr({}, v, {
              activeHandle: g,
              extent: mr({}, v.extent, {
                x0: Math.max(Math.min(L, y.x), v.bounds.x0),
                x1: Math.min(Math.max(L, y.x), v.bounds.x1),
                y0: Math.max(Math.min(O, k.y), v.bounds.y0),
                y1: Math.min(Math.max(O, k.y), v.bounds.y1)
              })
            });
          case "topLeft":
            return L = M + s.dx, O = m + s.dy, mr({}, v, {
              activeHandle: g,
              extent: mr({}, v.extent, {
                x0: Math.max(Math.min(L, k.x), v.bounds.x0),
                x1: Math.min(Math.max(L, k.x), v.bounds.x1),
                y0: Math.max(Math.min(O, k.y), v.bounds.y0),
                y1: Math.min(Math.max(O, k.y), v.bounds.y1)
              })
            });
          case "bottomLeft":
            return L = M + s.dx, O = T + s.dy, mr({}, v, {
              activeHandle: g,
              extent: mr({}, v.extent, {
                x0: Math.max(Math.min(L, k.x), v.bounds.x0),
                x1: Math.min(Math.max(L, k.x), v.bounds.x1),
                y0: Math.max(Math.min(O, y.y), v.bounds.y0),
                y1: Math.min(Math.max(O, y.y), v.bounds.y1)
              })
            });
          case "bottomRight":
            return L = E + s.dx, O = T + s.dy, mr({}, v, {
              activeHandle: g,
              extent: mr({}, v.extent, {
                x0: Math.max(Math.min(L, y.x), v.bounds.x0),
                x1: Math.min(Math.max(L, y.x), v.bounds.x1),
                y0: Math.max(Math.min(O, y.y), v.bounds.y0),
                y1: Math.min(Math.max(O, y.y), v.bounds.y1)
              })
            });
          default:
            return v;
        }
      });
    }, n.cornerDragEnd = function() {
      var s = n.props, c = s.updateBrush, d = s.onBrushEnd;
      c(function(g) {
        var v = g.start, y = g.end, k = g.extent;
        v.x = Math.min(k.x0, k.x1), v.y = Math.min(k.y0, k.y0), y.x = Math.max(k.x0, k.x1), y.y = Math.max(k.y0, k.y1);
        var E = mr({}, g, {
          start: v,
          end: y,
          activeHandle: null,
          domain: {
            x0: Math.min(v.x, y.x),
            x1: Math.max(v.x, y.x),
            y0: Math.min(v.y, y.y),
            y1: Math.max(v.y, y.y)
          }
        });
        return d && d(E), E;
      });
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var a = this.props, o = a.type, f = a.brush, s = a.stageWidth, c = a.stageHeight, d = a.style, g = a.corner, v = (d == null ? void 0 : d.cursor) || (o === "topLeft" || o === "bottomRight" ? "nwse-resize" : "nesw-resize"), y = f.activeHandle || f.isBrushing ? "none" : "all";
    return /* @__PURE__ */ i.createElement(Mc, {
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
          cursor: v
        },
        onPointerMove: E,
        onPointerUp: M
      }), /* @__PURE__ */ i.createElement("rect", mr({
        fill: "transparent",
        onPointerDown: T,
        onPointerMove: E,
        onPointerUp: M,
        className: "visx-brush-corner-" + o,
        style: mr({
          cursor: v,
          pointerEvents: y
        }, d)
      }, g)));
    });
  }, t;
}(i.Component);
wh.propTypes = {
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
wh.defaultProps = {
  style: {}
};
function Wa() {
  return Wa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wa.apply(this, arguments);
}
function Ik(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Mf(e, t);
}
function Mf(e, t) {
  return Mf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Mf(e, t);
}
var Hk = {
  cursor: "move"
}, Th = /* @__PURE__ */ function(e) {
  Ik(t, e);
  function t() {
    for (var n, a = arguments.length, o = new Array(a), f = 0; f < a; f++)
      o[f] = arguments[f];
    return n = e.call.apply(e, [this].concat(o)) || this, n.selectionDragStart = function(s) {
      var c = n.props, d = c.onMoveSelectionChange, g = c.onBrushStart;
      d && d("move", kh(s.event)), g && g(s);
    }, n.selectionDragMove = function(s) {
      var c = n.props, d = c.updateBrush, g = c.isControlled;
      g || d(function(v) {
        var y = v.start, k = y.x, E = y.y, M = v.end, T = M.x, m = M.y, L = s.dx > 0 ? Math.min(s.dx, v.bounds.x1 - T) : Math.max(s.dx, v.bounds.x0 - k), O = s.dy > 0 ? Math.min(s.dy, v.bounds.y1 - m) : Math.max(s.dy, v.bounds.y0 - E);
        return Wa({}, v, {
          isBrushing: !0,
          extent: Wa({}, v.extent, {
            x0: k + L,
            x1: T + L,
            y0: E + O,
            y1: m + O
          })
        });
      });
    }, n.selectionDragEnd = function() {
      var s = n.props, c = s.updateBrush, d = s.onBrushEnd, g = s.onMoveSelectionChange, v = s.isControlled;
      v || c(function(y) {
        var k = Wa({}, y, {
          isBrushing: !1,
          start: Wa({}, y.start, {
            x: Math.min(y.extent.x0, y.extent.x1),
            y: Math.min(y.extent.y0, y.extent.y1)
          }),
          end: Wa({}, y.end, {
            x: Math.max(y.extent.x0, y.extent.x1),
            y: Math.max(y.extent.y0, y.extent.y1)
          })
        });
        return d && d(k), k;
      }), g && g();
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var a = this.props, o = a.width, f = a.height, s = a.stageWidth, c = a.stageHeight, d = a.brush, g = a.disableDraggingSelection, v = a.onMouseLeave, y = a.onMouseMove, k = a.onMouseUp, E = a.onClick, M = a.selectedBoxStyle, T = a.isControlled, m = a.isDragInProgress;
    return /* @__PURE__ */ i.createElement(Mc, {
      width: o,
      height: f,
      resetOnStart: !0,
      onDragStart: this.selectionDragStart,
      onDragMove: this.selectionDragMove,
      onDragEnd: this.selectionDragEnd,
      isDragging: T ? m : void 0
    }, function(L) {
      var O = L.isDragging, _ = L.dragStart, N = L.dragEnd, R = L.dragMove;
      return /* @__PURE__ */ i.createElement("g", null, O && /* @__PURE__ */ i.createElement("rect", {
        width: s,
        height: c,
        fill: "transparent",
        onPointerUp: T ? void 0 : N,
        onPointerMove: R,
        onPointerLeave: T ? void 0 : N,
        style: Hk
      }), /* @__PURE__ */ i.createElement("rect", Wa({
        x: Math.min(d.extent.x0, d.extent.x1),
        y: Math.min(d.extent.y0, d.extent.y1),
        width: o,
        height: f,
        className: "visx-brush-selection",
        onPointerDown: g ? void 0 : _,
        onPointerLeave: function(B) {
          v && v(B);
        },
        onPointerMove: function(B) {
          R(B), y && y(B);
        },
        onPointerUp: function(B) {
          T || N(B), k && k(B);
        },
        onClick: function(B) {
          E && E(B);
        },
        style: {
          pointerEvents: d.isBrushing || d.activeHandle ? "none" : "all",
          cursor: g ? void 0 : "move"
        }
      }, M)));
    });
  }, t;
}(i.Component);
Th.propTypes = {
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
Th.defaultProps = {
  onMouseLeave: null,
  onMouseUp: null,
  onMouseMove: null,
  onClick: null
};
function _f() {
  return _f = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _f.apply(this, arguments);
}
function Nf(e) {
  return /* @__PURE__ */ i.createElement(gr, _f({
    className: "visx-brush-overlay",
    fill: "transparent",
    x: 0,
    y: 0
  }, e));
}
Nf.propTypes = {
  width: he.number.isRequired,
  height: he.number.isRequired,
  onClick: he.func,
  onDoubleClick: he.func,
  onPointerDown: he.func,
  onPointerLeave: he.func,
  onPointerMove: he.func,
  onPointerUp: he.func
};
function ar() {
  return ar = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ar.apply(this, arguments);
}
function Wk(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ff(e, t);
}
function Ff(e, t) {
  return Ff = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Ff(e, t);
}
var Ch = /* @__PURE__ */ function(e) {
  Wk(t, e);
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
      var s = a.props, c = s.useWindowMoveEvents, d = s.onBrushEnd, g = s.resetOnEnd, v = a.state.brushingType;
      c && v && a.updateBrush(function(y) {
        var k = y.start, E = y.end, M = y.extent;
        k.x = Math.min(M.x0, M.x1), k.y = Math.min(M.y0, M.y0), E.x = Math.max(M.x0, M.x1), E.y = Math.max(M.y0, M.y1);
        var T = ar({}, y, {
          activeHandle: null,
          isBrushing: !1,
          brushingType: void 0
        });
        return d && d(T), g && (T = ar({}, T, a.getIdleState())), T;
      });
    }, a.handleWindowPointerMove = function(s) {
      var c = a.props.useWindowMoveEvents, d = a.state, g = d.brushingType, v = d.isBrushing, y = d.brushPageOffset, k = d.start;
      if (!(!c || !v)) {
        var E = s.pageX - ((y == null ? void 0 : y.pageX) || 0), M = s.pageY - ((y == null ? void 0 : y.pageY) || 0);
        ["left", "right", "top", "bottom"].includes(g ?? "") && a.updateBrush(function(T) {
          var m = T.start, L = m.x, O = m.y, _ = T.end, N = _.x, R = _.y;
          return ar({}, T, {
            isBrushing: !0,
            extent: ar({}, T.extent, a.getExtent({
              x: g === "left" ? Math.min(Math.max(L + E, T.bounds.x0), T.bounds.x1) : L,
              y: g === "top" ? Math.min(Math.max(O + M, T.bounds.y0), T.bounds.y1) : O
            }, {
              x: g === "right" ? Math.min(Math.max(N + E, T.bounds.x0), T.bounds.x1) : N,
              y: g === "bottom" ? Math.min(Math.max(R + M, T.bounds.y0), T.bounds.y1) : R
            }))
          });
        }), g === "move" && a.updateBrush(function(T) {
          var m = T.start, L = m.x, O = m.y, _ = T.end, N = _.x, R = _.y, j = E > 0 ? Math.min(E, T.bounds.x1 - N) : Math.max(E, T.bounds.x0 - L), B = M > 0 ? Math.min(M, T.bounds.y1 - R) : Math.max(M, T.bounds.y0 - O);
          return ar({}, T, {
            isBrushing: !0,
            extent: ar({}, T.extent, {
              x0: L + j,
              y0: O + B,
              x1: N + j,
              y1: R + B
            })
          });
        }), g === "select" && a.updateBrush(function(T) {
          var m = T.start, L = m.x, O = m.y, _ = {
            x: Math.min(Math.max(L + E, T.bounds.x0), T.bounds.x1),
            y: Math.min(Math.max(O + M, T.bounds.y0), T.bounds.y1)
          }, N = a.getExtent(k, _), R = ar({}, T, {
            end: _,
            extent: N
          });
          return R;
        });
      }
    }, a.getExtent = function(s, c) {
      var d = a.props, g = d.brushDirection, v = d.width, y = d.height, k = g === "vertical" ? 0 : Math.min(s.x || 0, c.x || 0), E = g === "vertical" ? v : Math.max(s.x || 0, c.x || 0), M = g === "horizontal" ? 0 : Math.min(s.y || 0, c.y || 0), T = g === "horizontal" ? y : Math.max(s.y || 0, c.y || 0);
      return {
        x0: k,
        x1: E,
        y0: M,
        y1: T
      };
    }, a.handleDragStart = function(s) {
      var c = a.props, d = c.onBrushStart, g = c.left, v = c.top, y = c.inheritedMargin, k = c.useWindowMoveEvents, E = y != null && y.left ? y.left : 0, M = y != null && y.top ? y.top : 0, T = {
        x: (s.x || 0) + s.dx - g - E,
        y: (s.y || 0) + s.dy - v - M
      }, m = ar({}, T);
      d && d(T), a.updateBrush(function(L) {
        return ar({}, L, {
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
          brushPageOffset: k ? kh(s.event) : void 0
        });
      });
    }, a.handleBrushStart = function(s) {
      var c = a.props, d = c.onBrushStart, g = c.left, v = c.top, y = c.inheritedMargin;
      if (d) {
        var k = y != null && y.left ? y.left : 0, E = y != null && y.top ? y.top : 0, M = {
          x: (s.x || 0) + s.dx - g - k,
          y: (s.y || 0) + s.dy - v - E
        };
        d(M);
      }
    }, a.handleDragMove = function(s) {
      var c = a.props, d = c.left, g = c.top, v = c.inheritedMargin, y = c.useWindowMoveEvents;
      if (!(!s.isDragging || y)) {
        var k = (v == null ? void 0 : v.left) || 0, E = (v == null ? void 0 : v.top) || 0, M = {
          x: (s.x || 0) + s.dx - d - k,
          y: (s.y || 0) + s.dy - g - E
        };
        a.updateBrush(function(T) {
          var m = T.start, L = a.getExtent(m, M);
          return ar({}, T, {
            end: M,
            extent: L
          });
        });
      }
    }, a.handleDragEnd = function() {
      var s = a.props, c = s.onBrushEnd, d = s.resetOnEnd, g = s.useWindowMoveEvents;
      g || a.updateBrush(function(v) {
        var y = v.extent, k = ar({}, v, {
          start: {
            x: y.x0,
            y: y.y0
          },
          end: {
            x: y.x1,
            y: y.y1
          },
          isBrushing: !1,
          brushingType: void 0,
          activeHandle: null
        });
        return c && c(k), d && (k = ar({}, k, a.getIdleState())), k;
      });
    }, a.getBrushWidth = function() {
      var s = a.state.extent, c = s.x0, d = s.x1;
      return Math.max(Math.max(c, d) - Math.min(c, d), 0);
    }, a.getBrushHeight = function() {
      var s = a.state.extent, c = s.y1, d = s.y0;
      return Math.max(Math.max(d, c) - Math.min(d, c), 0);
    }, a.handles = function() {
      var s = a.props.handleSize, c = a.state.extent, d = c.x0, g = c.x1, v = c.y0, y = c.y1, k = s / 2, E = a.getBrushWidth(), M = a.getBrushHeight();
      return {
        top: {
          x: d - k,
          y: v - k,
          height: s,
          width: E + s
        },
        bottom: {
          x: d - k,
          y: y - k,
          height: s,
          width: E + s
        },
        right: {
          x: g - k,
          y: v - k,
          height: M + s,
          width: s
        },
        left: {
          x: d - k,
          y: v - k,
          height: M + s,
          width: s
        }
      };
    }, a.corners = function() {
      var s = a.props.handleSize, c = a.state.extent, d = c.x0, g = c.x1, v = c.y0, y = c.y1, k = s / 2, E = s, M = s;
      return {
        topLeft: {
          x: Math.min(d, g) - k,
          y: Math.min(v, y) - k,
          width: E,
          height: M
        },
        topRight: {
          x: Math.max(d, g) - k,
          y: Math.min(v, y) - k,
          width: E,
          height: M
        },
        bottomLeft: {
          x: Math.min(d, g) - k,
          y: Math.max(v, y) - k,
          width: E,
          height: M
        },
        bottomRight: {
          x: Math.max(d, g) - k,
          y: Math.max(v, y) - k,
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
        var g = ar({}, d, {
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
        var g = o.props.width / a.width, v = o.props.height / a.height;
        s = {
          x: g * d.x0,
          y: v * d.y0
        }, c = {
          x: g * d.x1,
          y: v * d.y1
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
    var a = this, o = this.state, f = o.start, s = o.end, c = this.props, d = c.top, g = c.left, v = c.width, y = c.height, k = c.onMouseLeave, E = c.onMouseUp, M = c.onMouseMove, T = c.onBrushEnd, m = c.onClick, L = c.resizeTriggerAreas, O = c.selectedBoxStyle, _ = c.disableDraggingSelection, N = c.disableDraggingOverlay, R = c.clickSensitivity, j = c.useWindowMoveEvents, B = c.renderBrushHandle, V = this.state.brushingType, q = this.handles(), Y = this.corners(), U = this.getBrushWidth(), te = this.getBrushHeight(), me = new Set(L);
    return /* @__PURE__ */ i.createElement(rt, {
      className: "visx-brush",
      top: d,
      left: g
    }, N ? /* @__PURE__ */ i.createElement(Nf, {
      width: v,
      height: y,
      onClick: function(le) {
        var ue = a.mouseUpTime - a.mouseDownTime;
        m && ue < R && m(le);
      },
      style: {
        cursor: "default"
      }
    }) : /* @__PURE__ */ i.createElement(Mc, {
      width: v,
      height: y,
      resetOnStart: !0,
      onDragStart: this.handleDragStart,
      onDragMove: this.handleDragMove,
      onDragEnd: this.handleDragEnd,
      isDragging: j ? V === "select" : void 0
    }, function(I) {
      var le = I.dragStart, ue = I.isDragging, fe = I.dragMove, ae = I.dragEnd;
      return /* @__PURE__ */ i.createElement(Nf, {
        width: v,
        height: y,
        onDoubleClick: function() {
          return a.reset();
        },
        onClick: function(Z) {
          var ee = a.mouseUpTime - a.mouseDownTime;
          m && ee < R && m(Z);
        },
        onPointerDown: function(Z) {
          a.mouseDownTime = Date.now(), le(Z);
        },
        onPointerLeave: function(Z) {
          k && k(Z);
        },
        onPointerMove: function(Z) {
          !ue && M && M(Z), ue && fe(Z);
        },
        onPointerUp: function(Z) {
          a.mouseUpTime = Date.now(), E && E(Z), ae(Z);
        },
        style: {
          cursor: "crosshair"
        }
      });
    }), f && s && /* @__PURE__ */ i.createElement(Th, {
      updateBrush: this.updateBrush,
      width: U,
      height: te,
      stageWidth: v,
      stageHeight: y,
      brush: this.state,
      disableDraggingSelection: _,
      onBrushEnd: T,
      onBrushStart: this.handleBrushStart,
      onMouseLeave: k,
      onMouseMove: M,
      onMouseUp: E,
      onMoveSelectionChange: this.handleBrushingTypeChange,
      onClick: m,
      selectedBoxStyle: O,
      isControlled: j,
      isDragInProgress: j ? V === "move" : void 0
    }), f && s && Object.keys(q).filter(function(I) {
      return me.has(I);
    }).map(function(I) {
      var le = q[I];
      return le && /* @__PURE__ */ i.createElement(fy, {
        key: "handle-" + I,
        type: I,
        handle: le,
        stageWidth: v,
        stageHeight: y,
        updateBrush: a.updateBrush,
        brush: a.state,
        onBrushStart: a.handleBrushStart,
        onBrushEnd: T,
        isControlled: j,
        isDragInProgress: j ? V === I : void 0,
        onBrushHandleChange: a.handleBrushingTypeChange,
        renderBrushHandle: B
      });
    }), f && s && Object.keys(Y).filter(function(I) {
      return me.has(I);
    }).map(function(I) {
      var le = Y[I];
      return le && /* @__PURE__ */ i.createElement(wh, {
        key: "corner-" + I,
        type: I,
        brush: a.state,
        updateBrush: a.updateBrush,
        stageWidth: v,
        stageHeight: y,
        corner: le,
        onBrushEnd: T
      });
    }));
  }, t;
}(i.Component);
Ch.propTypes = {
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
Ch.defaultProps = {
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
function Vk(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, zf(e, t);
}
function zf(e, t) {
  return zf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, zf(e, t);
}
var hm = 2, pm = "steelblue", Ah = /* @__PURE__ */ function(e) {
  Vk(t, e);
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
        var d = s.x, g = s.y, v = n.props, y = v.xScale, k = v.yScale, E = bc(y, d), M = bc(k, g);
        c({
          x: "invert" in y && typeof y.invert < "u" ? E : y.domain()[E],
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
    var o = this.props, f = o.xScale, s = o.yScale, c = a.extent, d = c.x0, g = c.x1, v = c.y0, y = c.y1, k = fm(f, d || 0, g || 0, hm), E = fm(s, v || 0, y || 0, hm), M = {
      x0: k.start || 0,
      x1: k.end || 0,
      xValues: k.values,
      y0: E.start || 0,
      y1: E.end || 0,
      yValues: E.values
    };
    return M;
  }, r.render = function() {
    var a = this.props, o = a.xScale, f = a.yScale, s = a.height, c = a.width, d = a.margin, g = a.brushDirection, v = a.initialBrushPosition, y = a.innerRef, k = a.resizeTriggerAreas, E = a.brushRegion, M = a.yAxisOrientation, T = a.xAxisOrientation, m = a.selectedBoxStyle, L = a.disableDraggingSelection, O = a.disableDraggingOverlay, _ = a.resetOnEnd, N = a.onMouseLeave, R = a.onMouseMove, j = a.onClick, B = a.handleSize, V = a.useWindowMoveEvents, q = a.renderBrushHandle;
    if (!o || !f)
      return null;
    var Y, U, te, me, I = d != null && d.left ? d.left : 0, le = d != null && d.top ? d.top : 0, ue = d != null && d.right ? d.right : 0, fe = d != null && d.bottom ? d.bottom : 0;
    return E === "chart" ? (te = 0, me = 0, Y = c, U = s) : E === "yAxis" ? (me = 0, U = s, M === "right" ? (te = c, Y = ue) : (te = -I, Y = I)) : (te = 0, Y = c, T === "bottom" ? (me = s, U = fe) : (me = -le, U = le)), /* @__PURE__ */ i.createElement(Ch, {
      width: Y,
      height: U,
      left: te,
      top: me,
      brushDirection: g,
      disableDraggingSelection: L,
      disableDraggingOverlay: O,
      handleSize: B,
      inheritedMargin: d,
      initialBrushPosition: v,
      ref: y,
      resetOnEnd: _,
      resizeTriggerAreas: k,
      selectedBoxStyle: m,
      onBrushEnd: this.handleBrushEnd,
      onBrushStart: this.handleBrushStart,
      onChange: this.handleChange,
      onClick: j,
      onMouseLeave: N,
      onMouseMove: R,
      useWindowMoveEvents: V,
      renderBrushHandle: q
    });
  }, t;
}(se.Component);
Ah.propTypes = {
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
Ah.defaultProps = {
  xScale: null,
  yScale: null,
  onChange: null,
  height: 0,
  width: 0,
  selectedBoxStyle: {
    fill: pm,
    fillOpacity: 0.2,
    stroke: pm,
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
const jk = Ah, Uk = (e) => {
  const { transformedData: t, config: r, parseDate: n, formatDate: a, updateConfig: o } = se.useContext(Et), { fontSize: f } = Rs(), [s, c] = se.useState([...t]), d = se.useRef(null), g = 15, [v, y] = se.useState({
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
    var B;
    if (!m)
      return;
    const { xValues: L } = m, O = (B = r.xAxis) == null ? void 0 : B.dataKey, _ = t.filter((V) => L.includes(V[O])), N = L.slice().reverse().find((V) => V !== void 0), R = L.find((V) => V !== void 0), j = (V) => En(r.runtime.xAxis) ? a(n(V)) : V;
    y((V) => {
      var q, Y;
      return {
        ...V,
        startPosition: (q = d.current) == null ? void 0 : q.state.start.x,
        endPosition: (Y = d.current) == null ? void 0 : Y.state.end.x,
        endValue: j(N),
        startValue: j(R)
      };
    }), c(_);
  };
  se.useEffect(() => {
    o({
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
    let L = 0;
    const O = 20;
    return r.xAxis.label || (!r.isResponsiveTicks && m && (L = Number(m + r.xAxis.tickWidthMax) / 1.6), !r.isResponsiveTicks && !m && (L = Number(r.xAxis.labelOffset) - O), r.isResponsiveTicks && r.dynamicMarginTop && (L = Number(r.xAxis.labelOffset + r.xAxis.tickWidthMax / 1.6)), r.isResponsiveTicks && !r.dynamicMarginTop && (L = Number(r.xAxis.labelOffset - O))), r.xAxis.label && (!r.isResponsiveTicks && m && (L = Number(r.xAxis.tickWidthMax + m)), !r.isResponsiveTicks && !m && (L = r.xAxis.labelOffset + O), r.isResponsiveTicks && !m && (L = Number(r.dynamicMarginTop ? r.dynamicMarginTop : r.xAxis.labelOffset) + O)), L;
  };
  if (["Line", "Bar", "Area Chart", "Combo"].includes(r.visualizationType))
    return /* @__PURE__ */ i.createElement(rt, { display: r.brush.active ? "block" : "none", top: Number(e.yMax) + T(), left: Number(r.runtime.yAxis.size), pointerEvents: "fill" }, /* @__PURE__ */ i.createElement("rect", { fill: "#eee", width: e.xMax, height: r.brush.height, rx: g }), /* @__PURE__ */ i.createElement(
      jk,
      {
        renderBrushHandle: (m) => {
          var L;
          return /* @__PURE__ */ i.createElement(Kk, { textProps: v, fontSize: f[r.fontSize], ...m, isBrushing: (L = d.current) == null ? void 0 : L.state.isBrushing });
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
}, Kk = (e) => {
  const { x: t, isBrushActive: r, isBrushing: n, className: a, textProps: o } = e, f = 8;
  if (!r)
    return null;
  const s = a.includes("left"), c = s ? "scale(-1, 1)" : "translate(0,0)", d = s ? "end" : "start";
  return /* @__PURE__ */ i.createElement(rt, { left: t + f / 2, top: -2 }, /* @__PURE__ */ i.createElement(bt, { pointerEvents: "visiblePainted", dominantBaseline: "hanging", x: 0, verticalAnchor: "start", textAnchor: d, fontSize: e.fontSize / 1.4, dy: 10, y: 15 }, s ? o.startValue : o.endValue), /* @__PURE__ */ i.createElement("path", { cursor: "ew-resize", d: "M0.5,10A6,6 0 0 1 6.5,16V14A6,6 0 0 1 0.5,20ZM2.5,18V12M4.5,18V12", fill: n ? "#297EF1" : "#666", strokeWidth: "1", transform: c }));
}, Gr = (e) => {
  var Rt, Ln, gn, kn, Fn;
  const { transformedData: t, dimensions: r, config: n, parseDate: a, formatDate: o, currentViewport: f, formatNumber: s, handleChartAriaLabels: c, updateConfig: d, handleLineType: g, getTextWidth: v } = se.useContext(Et), { visualizationType: y, visualizationSubType: k, orientation: E, xAxis: M, yAxis: T, runtime: m, debugSvg: L } = n;
  let [O] = r;
  n && n.legend && !n.legend.hide && n.legend.position !== "bottom" && ["lg", "md"].includes(f) && (O = O * 0.73);
  const { horizontal: _ } = n.heights, N = E === "horizontal" || n.visualizationType === "Forest Plot", R = !0;
  let j = n.aspectRatio ? O * n.aspectRatio : n.visualizationType === "Forest Plot" ? n.heights.vertical : n.heights[E];
  const B = O - m.yAxis.size - (y === "Combo" ? n.yAxis.rightAxisSize : 0);
  let V = j - (E === "horizontal" ? 0 : m.xAxis.size);
  n.visualizationType === "Forest Plot" && (j = j + n.data.length * n.forestPlot.rowHeight, V = V + n.data.length * n.forestPlot.rowHeight, O = r[0]), (Rt = n.brush) != null && Rt.active && (j = j + ((Ln = n.brush) == null ? void 0 : Ln.height));
  const { minValue: q, maxValue: Y, existPositiveValue: U, isAllLine: te } = Oc(n, t), { visSupportsReactTooltip: me } = Ds(), { hasTopAxis: I } = Sk(n), [le, ue] = se.useState(!1), [fe, ae] = se.useState({ x: 0, y: 0 }), W = se.useRef(), Z = se.useRef(), ee = sh(W, {
    freezeOnceVisible: !1
  }), Ae = (Me) => En(n.runtime.xAxis) ? a(Me[n.runtime.originalXAxis.dataKey]).getTime() : Me[n.runtime.originalXAxis.dataKey], xe = (Me, Xe) => Me[Xe], De = n.brush.active && ((gn = n.brush.data) != null && gn.length) ? n.brush.data.map((Me) => Ae(Me)) : t.map((Me) => Ae(Me)), oe = n.orientation === "horizontal" || n.visualizationType === "Forest Plot" ? "yAxis" : "xAxis", ze = { data: t, config: n, minValue: q, maxValue: Y, isAllLine: te, existPositiveValue: U, xAxisDataMapped: De, xMax: B, yMax: V }, { min: He, max: Ce, leftMax: ge, rightMax: Oe } = uy(ze), { yScaleRight: ie, hasRightAxis: ke } = ph({ config: n, yMax: V, data: t, updateConfig: d }), { xScale: Pe, yScale: We, seriesScale: Ye, g1xScale: qe, g2xScale: lt, xScaleNoPadding: st, xScaleBrush: it } = yk({ ...ze, min: He, max: Ce, leftMax: ge, rightMax: Oe, dimensions: r }), [Je, Ie] = se.useState(null);
  se.useEffect(() => {
    var Me;
    Ie((Me = Z == null ? void 0 : Z.current) == null ? void 0 : Me.getBoundingClientRect());
  }, [Z, n.legend]);
  const $e = (Me, Xe) => {
    if (n.useLogScale && Me === 0.1 && (Me = 0), !(n.data && !n.data[Xe] && y === "Forest Plot"))
      return n.visualizationType === "Forest Plot" ? n.data[Xe][n.xAxis.dataKey] : En(m.yAxis) ? o(a(Me)) : E === "vertical" ? s(Me, "left", R) : Me;
  }, ft = (Me) => (n.useLogScale && Me === 0.1 && (Me = 0), En(m.xAxis) && n.visualizationType !== "Forest Plot" ? o(Me) : E === "horizontal" && n.visualizationType !== "Forest Plot" ? s(Me, "left", R) : n.xAxis.type === "continuous" && n.visualizationType !== "Forest Plot" ? s(Me, "bottom", R) : n.visualizationType === "Forest Plot" ? s(Me, "left", n.dataFormat.abbreviated, n.runtime.xAxis.prefix, n.runtime.xAxis.suffix, Number(n.dataFormat.roundTo)) : Me), Ke = (Me) => {
    const { numTicks: Xe } = m[Me];
    let kt;
    return Me === "yAxis" && (kt = N && !Xe ? t.length : N && Xe ? Xe : !N && !Xe ? void 0 : !N && Xe && Xe, kt === void 0 && !n.dataFormat.roundTo && (Number(Ce) <= 3 ? kt = 2 : kt = 4), Number(kt) > Number(Ce) && (kt = Number(He) < 0 ? Math.round(Ce) * 2 : Math.round(Ce))), Me === "xAxis" && (kt = N && !Xe ? void 0 : N && Xe ? Xe : !N && !Xe ? void 0 : !N && Xe && Xe, N && kt === void 0 && !n.dataFormat.roundTo && (Ce <= 3 ? kt = 2 : kt = 4), n.visualizationType === "Forest Plot" && (kt = n.yAxis.numTicks !== "" ? n.yAxis.numTicks : 4)), kt;
  }, { tooltipData: Qe, showTooltip: ct, hideTooltip: ht, tooltipOpen: At, tooltipLeft: an, tooltipTop: Zt } = Ng(), {
    handleTooltipMouseOver: Ot,
    handleTooltipClick: zt,
    handleTooltipMouseOff: tn,
    tooltipStyles: hn,
    TooltipListItem: un,
    getXValueFromCoordinateDate: Sn,
    getXValueFromCoordinate: Lt
  } = Ig({
    xScale: Pe,
    yScale: We,
    showTooltip: ct,
    hideTooltip: ht
  });
  se.useEffect(() => {
    document.querySelector(".isEditor") && ue((Xe) => !0);
  }), se.useEffect(() => {
    (ee == null ? void 0 : ee.isIntersecting) === !0 && n.animate && setTimeout(() => {
      ue((Me) => !0);
    }, 500);
  }, [ee == null ? void 0 : ee.isIntersecting, n.animate]);
  const on = () => {
    const { visualizationType: Me } = n;
    return Me === "Combo" && m.forecastingSeriesKeys > 0 || Me === "Area Chart" || Me === "Line" || Me === "Bar";
  }, _e = Number(E === "horizontal" ? n.xAxis.size : n.yAxis.size), ln = () => n.visualizationType === "Forest Plot" ? n.data.length : Ke("yAxis"), Pt = (Me) => {
    const Xe = Me.currentTarget.getBoundingClientRect(), kt = Me.clientX - Xe.left, nt = Me.clientY - Xe.top;
    ae({
      x: kt,
      y: nt
    });
  };
  return isNaN(O) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(Ir, { component: "LinearChart" }, /* @__PURE__ */ i.createElement("div", { style: { width: `${O}px`, height: `${j}px`, overflow: "visible" }, className: "tooltip-boundary" }, /* @__PURE__ */ i.createElement(
    "svg",
    {
      onMouseMove: Pt,
      width: "100%",
      height: "100%",
      className: `linear ${n.animate ? "animated" : ""} ${le && n.animate ? "animate" : ""} ${L && "debug"}`,
      role: "img",
      "aria-label": c(n),
      ref: Z,
      style: { overflow: "visible" }
    },
    /* @__PURE__ */ i.createElement(gr, { width: O, height: j, fill: "transparent" }),
    " ",
    !["Spark Line", "Forest Plot"].includes(y) && /* @__PURE__ */ i.createElement(HE, { scale: We, tickLength: n.useLogScale ? 6 : 8, left: Number(m.yAxis.size) - n.yAxis.axisPadding, label: ((kn = m.yAxis.yAxis) == null ? void 0 : kn.label) || m.yAxis.label, stroke: "#333", tickFormat: (Me, Xe) => $e(Me, Xe), numTicks: ln() }, (Me) => {
      const Xe = n.orientation === "horizontal" ? (Me.axisToPoint.y - Me.axisFromPoint.y) / 2 : (Me.axisFromPoint.y - Me.axisToPoint.y) / 2, kt = V / Me.ticks.length / 2 - V / Me.ticks.length * (1 - n.barThickness) + 5;
      return /* @__PURE__ */ i.createElement(rt, { className: "left-axis" }, Me.ticks.map((nt, K) => {
        const Ne = Me.ticks[0].to.y, et = 15, Ue = String(nt.value).startsWith("1") || nt.value === 0.1 ? "block" : "none", yt = Ue === "block" ? 7 : 0, at = { x: nt.to.x - yt, y: nt.to.y };
        return /* @__PURE__ */ i.createElement(rt, { key: `vx-tick-${nt.value}-${K}`, className: "vx-axis-tick" }, !m.yAxis.hideTicks && /* @__PURE__ */ i.createElement(rn, { key: `${nt.value}--hide-hideTicks`, from: nt.from, to: n.useLogScale ? at : nt.to, stroke: n.yAxis.tickColor, display: E === "horizontal" ? "none" : "block" }), m.yAxis.gridLines ? /* @__PURE__ */ i.createElement(rn, { key: `${nt.value}--hide-hideGridLines`, display: (n.useLogScale && Ue).toString(), from: { x: nt.from.x + B, y: nt.from.y }, to: nt.from, stroke: "rgba(0,0,0,0.3)" }) : "", E === "horizontal" && k !== "stacked" && n.yAxis.labelPlacement === "On Date/Category Axis" && !n.yAxis.hideLabel && /* @__PURE__ */ i.createElement(
          bt,
          {
            transform: `translate(${nt.to.x - 5}, ${n.isLollipopChart ? nt.to.y - Ne : nt.to.y - Ne + (Number(n.barHeight * n.series.length) - et) / 2}) rotate(-${n.runtime.horizontal && n.runtime.yAxis.tickRotation || 0})`,
            verticalAnchor: "start",
            textAnchor: "end"
          },
          nt.formattedValue
        ), E === "horizontal" && k === "stacked" && n.yAxis.labelPlacement === "On Date/Category Axis" && !n.yAxis.hideLabel && /* @__PURE__ */ i.createElement(bt, { transform: `translate(${nt.to.x - 5}, ${nt.to.y - Ne + (Number(n.barHeight) - et) / 2}) rotate(-${m.horizontal ? m.yAxis.tickRotation : 0})`, verticalAnchor: "start", textAnchor: "end" }, nt.formattedValue), E === "horizontal" && y === "Paired Bar" && !n.yAxis.hideLabel && /* @__PURE__ */ i.createElement(bt, { transform: `translate(${nt.to.x - 5}, ${nt.to.y - Ne + Number(n.barHeight) / 2}) rotate(-${m.horizontal ? m.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, nt.formattedValue), E === "horizontal" && y === "Deviation Bar" && !n.yAxis.hideLabel && /* @__PURE__ */ i.createElement(bt, { transform: `translate(${nt.to.x - 5}, ${n.isLollipopChart ? nt.to.y - Ne + 2 : nt.to.y - Ne + Number(n.barHeight) / 2}) rotate(-${m.horizontal ? m.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, nt.formattedValue), E === "vertical" && y !== "Paired Bar" && !n.yAxis.hideLabel && /* @__PURE__ */ i.createElement(
          bt,
          {
            display: n.useLogScale ? Ue : "block",
            dx: n.useLogScale ? -6 : 0,
            x: n.runtime.horizontal ? nt.from.x + 2 : nt.to.x,
            y: nt.to.y + (n.runtime.horizontal ? kt : 0),
            angle: -Number(n.yAxis.tickRotation) || 0,
            verticalAnchor: n.runtime.horizontal ? "start" : "middle",
            textAnchor: n.runtime.horizontal ? "start" : "end",
            fill: n.yAxis.tickLabelColor
          },
          nt.formattedValue
        ));
      }), !n.yAxis.hideAxis && /* @__PURE__ */ i.createElement(rn, { from: Me.axisFromPoint, to: m.horizontal ? { x: 0, y: n.visualizationType === "Forest Plot" ? j : Number(_) } : Me.axisToPoint, stroke: "#000" }), We.domain()[0] < 0 && /* @__PURE__ */ i.createElement(rn, { from: { x: Me.axisFromPoint.x, y: We(0) }, to: { x: B, y: We(0) }, stroke: "#333" }), y === "Bar" && E === "horizontal" && Pe.domain()[0] < 0 && /* @__PURE__ */ i.createElement(rn, { from: { x: Pe(0), y: 0 }, to: { x: Pe(0), y: V }, stroke: "#333", strokeWidth: 2 }), /* @__PURE__ */ i.createElement(bt, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${-1 * m.yAxis.size}, ${Xe}) rotate(-90)`, fontWeight: "bold", fill: n.yAxis.labelColor }, Me.label));
    }),
    ke && /* @__PURE__ */ i.createElement(UE, { scale: ie, left: Number(O - n.yAxis.rightAxisSize), label: n.yAxis.rightLabel, tickFormat: (Me) => s(Me, "right"), numTicks: m.yAxis.rightNumTicks || void 0, labelOffset: 45 }, (Me) => {
      const Xe = n.orientation === "horizontal" ? (Me.axisToPoint.y - Me.axisFromPoint.y) / 2 : (Me.axisFromPoint.y - Me.axisToPoint.y) / 2, kt = V / Me.ticks.length / 2 - V / Me.ticks.length * (1 - n.barThickness) + 5;
      return /* @__PURE__ */ i.createElement(rt, { className: "right-axis" }, Me.ticks.map((nt, K) => /* @__PURE__ */ i.createElement(rt, { key: `vx-tick-${nt.value}-${K}`, className: "vx-axis-tick" }, !m.yAxis.rightHideTicks && /* @__PURE__ */ i.createElement(rn, { from: nt.from, to: nt.to, display: m.horizontal ? "none" : "block", stroke: n.yAxis.rightAxisTickColor }), m.yAxis.rightGridLines ? /* @__PURE__ */ i.createElement(rn, { from: { x: nt.from.x + B, y: nt.from.y }, to: nt.from, stroke: "rgba(0,0,0,0.3)" }) : "", !n.yAxis.rightHideLabel && /* @__PURE__ */ i.createElement(bt, { x: nt.to.x, y: nt.to.y + (m.horizontal ? kt : 0), verticalAnchor: m.horizontal ? "start" : "middle", textAnchor: "start", fill: n.yAxis.rightAxisTickLabelColor }, nt.formattedValue))), !n.yAxis.rightHideAxis && /* @__PURE__ */ i.createElement(rn, { from: Me.axisFromPoint, to: Me.axisToPoint, stroke: "#333" }), /* @__PURE__ */ i.createElement(bt, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${n.yAxis.rightLabelOffsetSize ? n.yAxis.rightLabelOffsetSize : 0}, ${Xe}) rotate(-90)`, fontWeight: "bold", fill: n.yAxis.rightAxisLabelColor }, Me.label));
    }),
    I && n.topAxis.hasLine && /* @__PURE__ */ i.createElement(
      qE,
      {
        stroke: "#333",
        left: Number(m.yAxis.size),
        scale: Pe,
        hideTicks: !0,
        hideZero: !0,
        tickLabelProps: () => ({
          fill: "transparent"
        })
      }
    ),
    y !== "Paired Bar" && y !== "Spark Line" && /* @__PURE__ */ i.createElement(
      Hu,
      {
        top: m.horizontal && n.visualizationType !== "Forest Plot" ? Number(_) + Number(n.xAxis.axisPadding) : n.visualizationType === "Forest Plot" ? V + Number(n.xAxis.axisPadding) : V,
        left: n.visualizationType !== "Forest Plot" ? Number(m.yAxis.size) : 0,
        label: m.xAxis.label,
        tickFormat: ft,
        scale: Pe,
        stroke: "#333",
        numTicks: Ke("xAxis"),
        tickStroke: "#333"
      },
      (Me) => {
        const Xe = n.visualizationType !== "Forest Plot" ? (Me.axisToPoint.x - Me.axisFromPoint.x) / 2 : r[0] / 2, kt = (vt) => /\s/.test(vt), nt = Me.ticks.some((vt) => kt(vt.value)), K = { small: 16, medium: 18, large: 20 }, Ne = 8, et = Math.max(...Me.ticks.map((vt) => v(vt.formattedValue, `normal ${K[n.fontSize]}px sans-serif`))), Ue = nt ? 180 : 100, yt = Me.ticks.map((vt) => v(vt.formattedValue, `normal ${K[n.fontSize]}px sans-serif`)), at = yt.reduce((vt, Qt) => vt + Qt, Ue), wt = (B - at) / (Me.ticks.length - 1);
        let $t = [0];
        for (let vt = 1; vt < yt.length; vt++)
          $t[vt] = $t[vt - 1] + yt[vt - 1] + wt;
        let Ze = !1;
        yt.forEach((vt, Qt) => {
          if ($t[Qt] + yt[Qt] > $t[Qt + 1]) {
            Ze = !0;
            return;
          }
        });
        const Bt = Ze && n.isResponsiveTicks ? et + Ne + 20 : 0, It = Number(n.xAxis.tickRotation) > 0 ? Number(n.xAxis.tickRotation) : 0;
        return n.dynamicMarginTop = Bt, n.xAxis.tickWidthMax = et, /* @__PURE__ */ i.createElement(rt, { className: "bottom-axis", width: r[0] }, Me.ticks.map((vt, Qt, qt) => {
          const Mt = String(vt.value).startsWith("1") || vt.value === 0.1 ? "block" : "none", Ht = Mt === "block" ? 16 : Ne, Xt = { x: vt.to.x, y: Ht };
          let yn = v(vt.formattedValue, `normal ${K[n.fontSize]}px sans-serif`), An = 100 / qt.length;
          n.yAxis.tickRotation = n.isResponsiveTicks && n.orientation === "horizontal" ? 0 : n.yAxis.tickRotation, n.xAxis.tickRotation = n.isResponsiveTicks && n.orientation === "vertical" ? 0 : n.xAxis.tickRotation;
          const Ut = n.isResponsiveTicks && Ze ? -Number(n.xAxis.maxTickRotation) || -90 : -Number(n.runtime.xAxis.tickRotation);
          return /* @__PURE__ */ i.createElement(rt, { key: `vx-tick-${vt.value}-${Qt}`, className: "vx-axis-tick" }, !n.xAxis.hideTicks && /* @__PURE__ */ i.createElement(rn, { from: vt.from, to: E === "horizontal" && n.useLogScale ? Xt : vt.to, stroke: n.xAxis.tickColor, strokeWidth: Mt === "block" && n.useLogScale ? 1.3 : 1 }), !n.xAxis.hideLabel && /* @__PURE__ */ i.createElement(
            bt,
            {
              dy: n.orientation === "horizontal" && n.useLogScale ? 8 : 0,
              display: n.orientation === "horizontal" && n.useLogScale ? Mt : "block",
              x: vt.to.x,
              y: vt.to.y,
              angle: Ut,
              verticalAnchor: Ut < -50 ? "middle" : "start",
              textAnchor: Ut ? "end" : "middle",
              width: Ze && !n.isResponsiveTicks && !Number(n[oe].tickRotation) ? An : yn,
              fill: n.xAxis.tickLabelColor
            },
            vt.formattedValue
          ));
        }), !n.xAxis.hideAxis && /* @__PURE__ */ i.createElement(rn, { from: Me.axisFromPoint, to: Me.axisToPoint, stroke: "#333" }), /* @__PURE__ */ i.createElement(
          bt,
          {
            x: Xe,
            y: n.visualizationType === "Forest Plot" ? n.xAxis.tickWidthMax + 40 : n.orientation === "horizontal" ? Bt || n.xAxis.labelOffset : n.isResponsiveTicks && Bt && !N ? Bt : Number(It) && !n.isResponsiveTicks && !N ? Number(It + et / 1.3) : Number(n.xAxis.labelOffset),
            textAnchor: "middle",
            verticalAnchor: "start",
            fontWeight: "bold",
            fill: n.xAxis.labelColor
          },
          Me.label
        ));
      }
    ),
    y === "Paired Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Hu, { top: V, left: Number(m.yAxis.size), label: m.xAxis.label, tickFormat: En(m.xAxis) ? o : s, scale: qe, stroke: "#333", tickStroke: "#333", numTicks: m.xAxis.numTicks || void 0 }, (Me) => /* @__PURE__ */ i.createElement(rt, { className: "bottom-axis" }, Me.ticks.map((Xe, kt) => {
      const nt = Xe.index !== 0 ? n.yAxis.tickRotation : 0, K = Xe.index !== 0 && n.yAxis.tickRotation && n.yAxis.tickRotation > 0 ? "end" : "middle";
      return /* @__PURE__ */ i.createElement(rt, { key: `vx-tick-${Xe.value}-${kt}`, className: "vx-axis-tick" }, !m.yAxis.hideTicks && /* @__PURE__ */ i.createElement(rn, { from: Xe.from, to: Xe.to, stroke: "#333" }), !m.yAxis.hideLabel && /* @__PURE__ */ i.createElement(bt, { x: Xe.to.x, y: Xe.to.y, angle: -nt, verticalAnchor: "start", textAnchor: K }, s(Xe.value, "left")));
    }), !m.yAxis.hideAxis && /* @__PURE__ */ i.createElement(rn, { from: Me.axisFromPoint, to: Me.axisToPoint, stroke: "#333" }))), /* @__PURE__ */ i.createElement(
      Hu,
      {
        top: V,
        left: Number(m.yAxis.size),
        label: m.xAxis.label,
        tickFormat: En(m.xAxis) ? o : m.xAxis.dataKey !== "Year" ? s : (Me) => Me,
        scale: lt,
        stroke: "#333",
        tickStroke: "#333",
        numTicks: m.xAxis.numTicks || void 0
      },
      (Me) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(rt, { className: "bottom-axis" }, Me.ticks.map((Xe, kt) => {
        const nt = Xe.index !== 0 ? n.yAxis.tickRotation : 0, K = Xe.index !== 0 && n.yAxis.tickRotation && n.yAxis.tickRotation > 0 ? "end" : "middle";
        return /* @__PURE__ */ i.createElement(rt, { key: `vx-tick-${Xe.value}-${kt}`, className: "vx-axis-tick" }, !m.yAxis.hideTicks && /* @__PURE__ */ i.createElement(rn, { from: Xe.from, to: Xe.to, stroke: "#333" }), !m.yAxis.hideLabel && /* @__PURE__ */ i.createElement(bt, { x: Xe.to.x, y: Xe.to.y, angle: -nt, verticalAnchor: "start", textAnchor: K }, s(Xe.value, "left")));
      }), !m.yAxis.hideAxis && /* @__PURE__ */ i.createElement(rn, { from: Me.axisFromPoint, to: Me.axisToPoint, stroke: "#333" })), /* @__PURE__ */ i.createElement(rt, null, /* @__PURE__ */ i.createElement(bt, { x: B / 2, y: n.xAxis.labelOffset, stroke: "#333", textAnchor: "middle", verticalAnchor: "start" }, m.xAxis.label)))
    )),
    y === "Deviation Bar" && ((Fn = n.series) == null ? void 0 : Fn.length) === 1 && /* @__PURE__ */ i.createElement(ck, { animatedChart: le, xScale: Pe, yScale: We, width: B, height: V }),
    y === "Paired Bar" && /* @__PURE__ */ i.createElement(gk, { originalWidth: O, width: B, height: V }),
    y === "Scatter Plot" && /* @__PURE__ */ i.createElement(
      uk,
      {
        xScale: Pe,
        yScale: We,
        getXAxisData: Ae,
        getYAxisData: xe,
        xMax: B,
        yMax: V,
        handleTooltipMouseOver: Ot,
        handleTooltipMouseOff: tn,
        handleTooltipClick: zt,
        tooltipData: Qe,
        showTooltip: ct
      }
    ),
    y === "Box Plot" && /* @__PURE__ */ i.createElement(sk, { xScale: Pe, yScale: We }),
    (y === "Area Chart" && n.visualizationSubType === "regular" || y === "Combo") && /* @__PURE__ */ i.createElement(ek, { xScale: Pe, yScale: We, yMax: V, xMax: B, chartRef: Z, width: B, height: V, handleTooltipMouseOver: Ot, handleTooltipMouseOff: tn, tooltipData: Qe, showTooltip: ct }),
    (y === "Area Chart" && n.visualizationSubType === "stacked" || y === "Combo") && /* @__PURE__ */ i.createElement(nk, { xScale: Pe, yScale: We, yMax: V, xMax: B, chartRef: Z, width: B, height: V, handleTooltipMouseOver: Ot, handleTooltipMouseOff: tn, tooltipData: Qe, showTooltip: ct }),
    (y === "Bar" || y === "Combo") && /* @__PURE__ */ i.createElement(
      lk,
      {
        xScale: Pe,
        yScale: We,
        seriesScale: Ye,
        xMax: B,
        yMax: V,
        getXAxisData: Ae,
        getYAxisData: xe,
        animatedChart: le,
        visible: le,
        handleTooltipMouseOver: Ot,
        handleTooltipMouseOff: tn,
        handleTooltipClick: zt,
        tooltipData: Qe,
        showTooltip: ct,
        chartRef: Z
      }
    ),
    (y === "Line" || y === "Combo") && /* @__PURE__ */ i.createElement(
      om,
      {
        xScale: Pe,
        yScale: We,
        getXAxisData: Ae,
        getYAxisData: xe,
        xMax: B,
        yMax: V,
        seriesStyle: n.series,
        handleTooltipMouseOver: Ot,
        handleTooltipMouseOff: tn,
        handleTooltipClick: zt,
        tooltipData: Qe,
        showTooltip: ct,
        chartRef: Z
      }
    ),
    (y === "Forecasting" || y === "Combo") && /* @__PURE__ */ i.createElement(
      fk,
      {
        showTooltip: ct,
        tooltipData: Qe,
        xScale: Pe,
        yScale: We,
        width: B,
        le: !0,
        height: V,
        xScaleNoPadding: st,
        chartRef: Z,
        getXValueFromCoordinate: Lt,
        handleTooltipMouseOver: Ot,
        handleTooltipMouseOff: tn,
        isBrush: !1
      }
    ),
    n.yAxis.anchors && n.yAxis.anchors.map((Me) => /* @__PURE__ */ i.createElement(rn, { strokeDasharray: g(Me.lineStyle), stroke: "rgba(0,0,0,1)", className: "customAnchor", from: { x: 0 + n.yAxis.size, y: We(Me.value) }, to: { x: B, y: We(Me.value) }, display: m.horizontal ? "none" : "block" })),
    y === "Forest Plot" && /* @__PURE__ */ i.createElement(
      mk,
      {
        xScale: Pe,
        yScale: We,
        seriesScale: Ye,
        width: O,
        height: j,
        getXAxisData: Ae,
        getYAxisData: xe,
        animatedChart: le,
        visible: le,
        handleTooltipMouseOver: Ot,
        handleTooltipMouseOff: tn,
        handleTooltipClick: zt,
        tooltipData: Qe,
        showTooltip: ct,
        chartRef: Z,
        config: n
      }
    ),
    ["Line", "Bar", "Combo", "Area Chart"].includes(n.visualizationType) && !N && /* @__PURE__ */ i.createElement(Uk, { xScaleBrush: it, yScale: We, xMax: B, yMax: V }),
    y !== "Bar" && y !== "Paired Bar" && y !== "Box Plot" && y !== "Area Chart" && y !== "Scatter Plot" && y !== "Deviation Bar" && y !== "Forecasting" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(om, { xScale: Pe, yScale: We, getXAxisData: Ae, getYAxisData: xe, xMax: B, yMax: V, seriesStyle: n.series })),
    n.yAxis.anchors && n.yAxis.anchors.map((Me, Xe) => {
      let kt = We(Me.value);
      if (!Me.value)
        return;
      const nt = E === "horizontal" && y === "Bar" ? n.barHeight / 4 : 0;
      if (kt)
        return (
          // prettier-ignore
          /* @__PURE__ */ i.createElement(
            rn,
            {
              key: `yAxis-${Me.value}--${Xe}`,
              strokeDasharray: g(Me.lineStyle),
              stroke: Me.color ? Me.color : "rgba(0,0,0,1)",
              className: "anchor-y",
              from: { x: 0 + _e, y: kt - nt },
              to: { x: O - n.yAxis.rightAxisSize, y: kt - nt }
            }
          )
        );
    }),
    n.xAxis.anchors && n.xAxis.anchors.map((Me, Xe) => {
      let kt = M;
      E === "horizontal" && (kt = T);
      let nt = En(kt) ? Pe(a(Me.value, !1)) : Pe(Me.value);
      if (nt)
        return (
          // prettier-ignore
          /* @__PURE__ */ i.createElement(
            rn,
            {
              key: `xAxis-${Me.value}--${Xe}`,
              strokeDasharray: g(Me.lineStyle),
              stroke: Me.color ? Me.color : "rgba(0,0,0,1)",
              fill: Me.color ? Me.color : "rgba(0,0,0,1)",
              className: "anchor-x",
              from: { x: Number(nt) + Number(_e), y: 0 },
              to: { x: Number(nt) + Number(_e), y: V }
            }
          )
        );
    }),
    n.visualizationType !== "Bar" && n.visualizationType !== "Combo" && /* @__PURE__ */ i.createElement(hh, { xScale: Pe, handleTooltipClick: zt, handleTooltipMouseOff: tn, handleTooltipMouseOver: Ot, showTooltip: ct, hideTooltip: ht, tooltipData: Qe, yMax: V, width: O }),
    on && ct && Qe && n.visual.verticalHoverLine && /* @__PURE__ */ i.createElement(rt, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ i.createElement(rn, { from: { x: Qe.dataXPosition - 10, y: 0 }, to: { x: Qe.dataXPosition - 10, y: V }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" })),
    on && ct && Qe && n.visual.horizontalHoverLine && /* @__PURE__ */ i.createElement(rt, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: n.yAxis.size ? n.yAxis.size : 0 }, /* @__PURE__ */ i.createElement(rn, { from: { x: 0, y: Qe.dataYPosition }, to: { x: B, y: Qe.dataYPosition }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    n.filters && n.filters.values.length === 0 && t.length === 0 && /* @__PURE__ */ i.createElement(bt, { x: Number(n.yAxis.size) + Number(B / 2), y: j / 2 - n.xAxis.size / 2, textAnchor: "middle" }, n.chartMessage.noData),
    n.visualizationType === "Bar" && n.tooltips.singleSeries && n.visual.horizontalHoverLine && /* @__PURE__ */ i.createElement(rt, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: n.yAxis.size ? n.yAxis.size : 0 }, /* @__PURE__ */ i.createElement(rn, { from: { x: 0, y: fe.y }, to: { x: B, y: fe.y }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    n.visualizationType === "Bar" && n.tooltips.singleSeries && n.visual.verticalHoverLine && /* @__PURE__ */ i.createElement(rt, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ i.createElement(rn, { from: { x: fe.x, y: 0 }, to: { x: fe.x, y: V }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" }))
  ), Qe && Object.entries(Qe.data).length > 0 && At && ct && Qe.dataYPosition && Qe.dataXPosition && !n.tooltips.singleSeries && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${n.tooltips.opacity / 100}) !important`), /* @__PURE__ */ i.createElement(Bg, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: an, top: Zt }, /* @__PURE__ */ i.createElement("ul", null, typeof Qe == "object" && Object.entries(Qe.data).map((Me, Xe) => /* @__PURE__ */ i.createElement(un, { item: Me, key: Xe }))))), me() && /* @__PURE__ */ i.createElement(ly, { id: `cdc-open-viz-tooltip-${m.uniqueId}`, variant: "light", arrowColor: "rgba(0,0,0,0)", className: "tooltip", style: { background: `rgba(255,255,255, ${n.tooltips.opacity / 100})`, color: "black" } }), /* @__PURE__ */ i.createElement("div", { className: "animation-trigger", ref: W })));
};
var Yk = ["id", "markerWidth", "markerHeight", "markerUnits", "children"];
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
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function hy(e) {
  var t = e.id, r = e.markerWidth, n = r === void 0 ? 3 : r, a = e.markerHeight, o = a === void 0 ? 3 : a, f = e.markerUnits, s = f === void 0 ? "userSpaceOnUse" : f, c = e.children, d = Xk(e, Yk);
  return /* @__PURE__ */ i.createElement("defs", null, /* @__PURE__ */ i.createElement("marker", $f({
    id: t,
    markerWidth: n,
    markerHeight: o,
    markerUnits: s
  }, d), c));
}
hy.propTypes = {
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
var qk = ["id", "size", "strokeWidth"];
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
function Gk(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Zk(e) {
  var t = e.id, r = e.size, n = r === void 0 ? 9 : r, a = e.strokeWidth, o = a === void 0 ? 1 : a, f = Gk(e, qk), s = n + o * 2, c = n, d = s / 2, g = "0 0, " + n + " " + n / 2 + ", 0 " + n;
  return /* @__PURE__ */ i.createElement(hy, Bf({
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
const Qk = (e) => {
  var Y;
  const { width: t, height: r } = e, { transformedData: n, config: a, parseDate: o, formatDate: f, seriesHighlight: s, formatNumber: c, colorScale: d, handleChartAriaLabels: g } = se.useContext(Et);
  let v = Number(t);
  const { minValue: y, maxValue: k } = Oc(a, n), E = { top: 5, right: 10, bottom: 10, left: 10 }, M = Number(r), T = v - a.runtime.yAxis.size, m = M - E.top - 20, L = (U) => a.runtime.xAxis.type === "date" ? o(U[a.runtime.originalXAxis.dataKey]).getTime() : U[a.runtime.originalXAxis.dataKey], O = (U, te) => U[te];
  let _, N;
  const { max: R, min: j } = a.runtime.yAxis, B = Number(R) >= Number(k), V = Number(j) <= Number(y);
  if (n) {
    let U = Number(j && V ? j : y), te = Number(R && B ? R : Number.MIN_VALUE);
    if (te === Number.MIN_VALUE && (te = k), a.runtime.yAxis.paddingPercent) {
      let I = (te - U) * a.runtime.yAxis.paddingPercent;
      U -= I, te += I;
    }
    let me = n.map((I) => L(I));
    a.runtime.horizontal ? (_ = Yn({
      domain: [U, te],
      range: [0, T]
    }), N = a.runtime.xAxis.type === "date" ? Yn({ domain: [Math.min(...me), Math.max(...me)] }) : qo({ domain: me, padding: 0.5 }), qo({
      domain: a.runtime.barSeriesKeys || a.runtime.seriesKeys,
      range: [0, m]
    }), N.rangeRound([0, m])) : (U = U < 0 ? U * 1.11 : U, N = Yn({
      domain: [U, te],
      range: [m - E.bottom, E.top]
    }), _ = qo({
      domain: me,
      range: [E.left, v - E.right]
    }), qo({
      domain: a.runtime.barSeriesKeys || a.runtime.seriesKeys,
      range: [0, T]
    }));
  }
  const q = [_.domain()[0], _.domain()[_.domain().length - 1]];
  return /* @__PURE__ */ i.createElement(Ir, { component: "SparkLine" }, /* @__PURE__ */ i.createElement("svg", { role: "img", "aria-label": g(a), width: t, height: 100, className: "sparkline", tabIndex: 0 }, /* @__PURE__ */ i.createElement("title", null, `Spark line graphic with the title ${a.title ? a.title : "No Title Found"}`), ((Y = a.runtime.lineSeriesKeys) == null ? void 0 : Y.length) > 0 ? a.runtime.lineSeriesKeys : a.runtime.seriesKeys.map((U, te) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    rt,
    {
      style: { width: v },
      className: "sparkline-group",
      key: `series-${U}`,
      opacity: a.legend.behavior === "highlight" && s.length > 0 && s.indexOf(U) === -1 ? 0.5 : 1,
      display: a.legend.behavior === "highlight" || s.length === 0 || s.indexOf(U) !== -1 ? "block" : "none"
    },
    n.map((me, I) => /* @__PURE__ */ i.createElement(rt, { key: `series-${U}-point-${I}` }, /* @__PURE__ */ i.createElement(bt, { display: a.labels ? "block" : "none", x: _(L(me)), y: N(O(me, U)), fill: d ? d(a.runtime.seriesLabels ? a.runtime.seriesLabels[U] : U) : "#000", textAnchor: "middle" }, c(me[U])))),
    /* @__PURE__ */ i.createElement(
      ma,
      {
        curve: wc,
        data: n,
        x: (me) => _(L(me)),
        y: (me) => N(O(me, U)),
        stroke: d ? d(a.runtime.seriesLabels ? a.runtime.seriesLabels[U] : U) : "#000",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        markerEnd: `url(#arrow--${te})`
      }
    ),
    /* @__PURE__ */ i.createElement(Zk, { id: `arrow--${te}`, refX: 2, size: 6, markerEnd: `url(#arrow--${te})`, strokeOpacity: 1, fillOpacity: 1, fill: d ? d(a.runtime.seriesLabels ? a.runtime.seriesLabels[U] : U) : "#000" })
  ), /* @__PURE__ */ i.createElement(
    Hu,
    {
      top: m + E.top,
      hideAxisLine: !0,
      hideTicks: !0,
      scale: _,
      tickValues: q,
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
}, Jk = se.forwardRef((e, t) => {
  const {
    config: r,
    colorScale: n,
    seriesHighlight: a,
    highlight: o,
    tableData: f,
    highlightReset: s,
    transformedData: c,
    currentViewport: d
  } = se.useContext(Et);
  if (!r.legend)
    return null;
  const g = Yg(r, f, c, n);
  return !["Box Plot", "Pie"].includes(r.visualizationType) && /* @__PURE__ */ i.createElement(Kg, { ref: t, config: r, colorScale: n, seriesHighlight: a, highlight: o, highlightReset: s, currentViewport: d, formatLabels: g });
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
}, Vu = (e) => /* @__PURE__ */ se.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...e }, /* @__PURE__ */ se.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), ew = ({ name: e }) => {
  var s, c, d, g, v;
  const { config: t, rawData: r, updateConfig: n } = se.useContext(Et);
  if (t.visualizationType !== "Forest Plot")
    return;
  const a = (y) => {
    y.orientation === "horizontal" && (y.labels = !1), y.table.show === void 0 && (y.table.show = !isDashboard), y.visualizationType === "Combo" && (y.orientation = "vertical");
  }, o = (y = !0) => {
    let k = {};
    return r.forEach((E) => {
      Object.keys(E).forEach((M) => k[M] = !0);
    }), y && Object.keys(k).forEach((E) => {
      (t.series && t.series.filter((M) => M.dataKey === E).length > 0 || t.confidenceKeys && Object.keys(t.confidenceKeys).includes(E)) && delete k[E];
    }), Object.keys(k);
  }, f = (y, k, E, M) => {
    if (y === "boxplot" && k === "legend") {
      n({
        ...t,
        [y]: {
          ...t[y],
          [k]: {
            ...t.boxplot[k],
            [E]: M
          }
        }
      });
      return;
    }
    if (y === "boxplot" && k === "labels") {
      n({
        ...t,
        [y]: {
          ...t[y],
          [k]: {
            ...t.boxplot[k],
            [E]: M
          }
        }
      });
      return;
    }
    if (y === "forestPlot" && k) {
      let O = {
        ...t,
        [y]: {
          ...t[y],
          [k]: {
            ...t.forestPlot[k],
            [E]: M
          }
        }
      };
      n(O);
      return;
    }
    if (y === "columns" && k !== "" && E !== "") {
      n({
        ...t,
        [y]: {
          ...t[y],
          [k]: {
            ...t[y][k],
            [E]: M
          }
        }
      });
      return;
    }
    if (y === null && k === null) {
      let O = { ...t, [E]: M };
      a(O), n(O);
      return;
    }
    const T = Array.isArray(t[y]);
    let m = T ? [...t[y], M] : { ...t[y], [E]: M };
    k !== null && (T ? (m = [...t[y]], m[k] = { ...m[k], [E]: M }) : typeof M == "string" ? m[k] = M : m = { ...t[y], [k]: { ...t[y][k], [E]: M } });
    let L = { ...t, [y]: m };
    a(L), n(L);
  };
  return /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(_n, null, e, (!t.forestPlot.estimateField || !t.forestPlot.upper || !t.forestPlot.lower) && /* @__PURE__ */ i.createElement(Vu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement(
    Tt,
    {
      value: t.xAxis.dataKey || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Study Column",
      initial: "Select",
      required: !0,
      updateField: f,
      options: o(!1),
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
    }
  ), /* @__PURE__ */ i.createElement(
    Tt,
    {
      value: t.forestPlot.type,
      label: "Forest Plot Type",
      initial: "Select",
      required: !0,
      onChange: (y) => {
        y.target.value !== "" && y.target.value !== "Select" && n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            type: y.target.value
          }
        }), y.target.value = "";
      },
      options: ["Linear", "Logarithmic"],
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Linear - Typically used for continuous outcomes. Line of no effect is positioned on 0 (zero) ", /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("br", null), " Logarithmic - Typically used for binary outcomes such as risk ratios and odds ratios. Line of no effect is positioned on 1.")))
    }
  ), /* @__PURE__ */ i.createElement(Ge, { type: "text", value: ((s = t.forestPlot) == null ? void 0 : s.title) || "", updateField: f, section: "forestPlot", fieldName: "title", label: "Plot Title" }), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("h4", null, "Column Settings"), /* @__PURE__ */ i.createElement(
    Tt,
    {
      value: t.forestPlot.estimateField,
      label: "Point Estimate Column",
      initial: t.forestPlot.estimateField || "Select",
      required: !0,
      onChange: (y) => {
        y.target.value !== "" && y.target.value !== "Select" && n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            estimateField: y.target.value
          }
        }), y.target.value = "";
      },
      options: o(!1)
    }
  ), /* @__PURE__ */ i.createElement(
    Tt,
    {
      value: t.forestPlot.shape,
      label: "Point Estimate Shape",
      onChange: (y) => {
        y.target.value !== "" && y.target.value !== "Select" && n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            shape: y.target.value
          }
        }), y.target.value = "";
      },
      options: ["text", "circle", "square"]
    }
  ), /* @__PURE__ */ i.createElement(
    Tt,
    {
      value: t.forestPlot.lower,
      label: "Lower CI Column",
      required: !0,
      initial: t.forestPlot.lower || "Select",
      onChange: (y) => {
        y.target.value !== "" && y.target.value !== "Select" && n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            lower: y.target.value
          }
        }), y.target.value = "";
      },
      options: o(!1)
    }
  ), /* @__PURE__ */ i.createElement(
    Tt,
    {
      value: t.forestPlot.upper,
      label: "Upper CI Column",
      initial: t.forestPlot.upper || "Select",
      required: !0,
      onChange: (y) => {
        y.target.value !== "" && y.target.value !== "Select" && n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            upper: y.target.value
          }
        }), y.target.value = "";
      },
      options: o(!1)
    }
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Pooled Result Column", /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: t.forestPlot.pooledResult.column || "",
      label: "Pooled Result Row",
      onChange: (y) => {
        n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            pooledResult: {
              ...t.forestPlot.pooledResult,
              column: y.target.value
            }
          }
        }), y.target.value = "";
      }
    }
  ))), /* @__PURE__ */ i.createElement(mt, { value: ((d = (c = t.forestPlot) == null ? void 0 : c.lineOfNoEffect) == null ? void 0 : d.show) || !1, section: "forestPlot", subsection: "lineOfNoEffect", fieldName: "show", label: "Show Line of No Effect", updateField: f }), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("h4", null, "Width Settings"), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Left (%)"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "number",
      min: 0,
      max: 100,
      value: t.forestPlot.leftWidthOffset || 0,
      onChange: (y) => {
        n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            leftWidthOffset: y.target.value
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
      onChange: (y) => {
        n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            leftWidthOffsetMobile: y.target.value
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
      onChange: (y) => {
        n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            rightWidthOffset: y.target.value
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
      onChange: (y) => {
        n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            rightWidthOffsetMobile: y.target.value
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement(Ge, { type: "number", min: 20, max: 45, value: t.forestPlot.rowHeight ? t.forestPlot.rowHeight : 10, updateField: f, section: "forestPlot", fieldName: "rowHeight", label: "Row Height", placeholder: "10" }), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("h4", null, "Labels Settings"), /* @__PURE__ */ i.createElement(Ge, { type: "text", value: ((g = t.forestPlot) == null ? void 0 : g.leftLabel) || "", updateField: f, section: "forestPlot", fieldName: "leftLabel", label: "Left Label" }), /* @__PURE__ */ i.createElement(Ge, { type: "text", value: ((v = t.forestPlot) == null ? void 0 : v.rightLabel) || "", updateField: f, section: "forestPlot", fieldName: "rightLabel", label: "Right Label" }), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement(
    Tt,
    {
      value: t.forestPlot.radius.scalingColumn,
      label: "Weight Column",
      initial: "Select",
      onChange: (y) => {
        y.target.value !== "" && y.target.value !== "Select" && n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            radius: {
              ...t.forestPlot.radius,
              scalingColumn: y.target.value
            }
          }
        }), y.target.value = "";
      },
      options: o(!1)
    }
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Radius Minimum Size"), /* @__PURE__ */ i.createElement(
    "input",
    {
      min: 3,
      max: 6,
      value: t.forestPlot.radius.min || 3,
      onChange: (y) => {
        n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            radius: {
              ...t.forestPlot.radius,
              min: Number(y.target.value)
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
      onChange: (y) => {
        n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            radius: {
              ...t.forestPlot.radius,
              max: Number(y.target.value)
            }
          }
        });
      },
      type: "number",
      label: "Radius Minimum",
      placeholder: " 1"
    }
  ))));
}, ol = i.createContext(), tw = (e) => {
  const { updateConfig: t, config: r, rawData: n } = se.useContext(Et), { getColumns: a, selectComponent: o } = e, f = ["Line", "dashed-sm", "dashed-md", "dashed-lg"], s = (c, d, g) => {
    let v = [...r.series];
    if (v[c][g] = d, g === "type" && d === "Bar" && (v[c].axis = "Left"), v[c].type === "Forecasting") {
      let y = Array.from(new Set(n.map((E) => E[v[c].dataKey]))), k = [];
      y.forEach((E) => {
        k.push({ key: E });
      }), v[c].stages = k, v[c].stageColumn = v[c].dataKey;
    }
    t({ ...r, series: v });
  };
  return /* @__PURE__ */ i.createElement(ol.Provider, { value: { updateSeries: s, supportedRightAxisTypes: f, getColumns: a, selectComponent: o } }, e.children);
}, nw = (e) => {
  const { config: t, updateConfig: r } = se.useContext(Et), { series: n, index: a } = e;
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
    Ua,
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
}, rw = (e) => {
  const { config: t } = se.useContext(Et), { updateSeries: r } = se.useContext(ol), { index: n, series: a } = e, o = () => {
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
      Ua,
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
}, aw = (e) => {
  const { config: t, updateConfig: r, rawData: n } = se.useContext(Et), { updateSeries: a, getColumns: o } = se.useContext(ol), { index: f, series: s } = e;
  return /* @__PURE__ */ i.createElement(
    Ua,
    {
      initial: "Select an option",
      value: s.stageColumn,
      label: "Add Forecasting Stages",
      onChange: (c) => {
        let d = [], g = new Set(n == null ? void 0 : n.map((y) => y[c.target.value]));
        g = Array.from(g), g = g.filter((y) => y !== void 0), g.forEach((y) => d.push({ key: y }));
        const v = [...t.series];
        v[f] = { ...v[f], stages: d, stageColumn: c.target.value }, r({
          ...t,
          series: v
        });
      },
      options: o(!1)
    }
  );
}, iw = (e) => {
  const { config: t, rawData: r } = se.useContext(Et), { updateSeries: n } = se.useContext(ol), { index: a, series: o } = e;
  if (o.type !== "Forecasting" || !r || !o.stageColumn)
    return;
  let f = new Set(r.map((s) => s[o.stageColumn]));
  return f = Array.from(f), f = f.filter((s) => s !== void 0), /* @__PURE__ */ i.createElement(
    Ua,
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
}, ow = (e) => {
  const { config: t } = se.useContext(Et), { updateSeries: r, supportedRightAxisTypes: n } = se.useContext(ol), { index: a, series: o } = e;
  if (!(t.visualizationType !== "Combo" || !o) && n.includes(o.type))
    return /* @__PURE__ */ i.createElement(
      Ua,
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
}, lw = (e) => {
  var o;
  const { config: t, updateConfig: r } = se.useContext(Et), { index: n, series: a } = e;
  if (a.type === "Forecasting" && a)
    return (o = a == null ? void 0 : a.stages) == null ? void 0 : o.map((f, s) => {
      var c, d, g, v;
      return /* @__PURE__ */ i.createElement(
        Ua,
        {
          key: `${f}--${s}`,
          initial: "Select an option",
          value: (d = (c = t.series) == null ? void 0 : c[n].stages) != null && d[s].color ? (v = (g = t.series) == null ? void 0 : g[n].stages) == null ? void 0 : v[s].color : "Select",
          label: `${f.key} Series Color`,
          onChange: (y) => {
            const k = [...t.series], E = k[n].stages;
            E[s].color = y.target.value, k[n] = { ...k[n], stages: E }, r({
              ...t,
              series: k
            });
          },
          options: Object.keys(Uu)
        }
      );
    });
}, sw = (e) => {
  var f;
  const { config: t, updateConfig: r } = se.useContext(Et), { series: n, index: a } = e, { getColumns: o } = se.useContext(ol);
  if (n.type === "Forecasting")
    return /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Confidence Interval Groups"), /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement(zi, { allowZeroExpanded: !0 }, (f = n == null ? void 0 : n.confidenceIntervals) == null ? void 0 : f.map((s, c) => {
      const d = s.showInTooltip ? s.showInTooltip : !1, g = (v, y, k) => {
        v.preventDefault();
        let E = [...t.series];
        E[y].confidenceIntervals[k].showInTooltip = !d, r({
          ...t,
          series: E
        });
      };
      return /* @__PURE__ */ i.createElement(On, { className: "series-item series-item--chart", key: `${c}` }, /* @__PURE__ */ i.createElement(Mn, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(_n, { className: "accordion__button accordion__button" }, "Group ", c + 1, /* @__PURE__ */ i.createElement(
        "button",
        {
          className: "series-list__remove",
          onClick: (v) => {
            v.preventDefault();
            const y = [...t.series[a].confidenceIntervals];
            y.splice(c, 1);
            const k = [...t.series];
            k[a] = { ...k[a], confidenceIntervals: [...y] }, r({
              ...t,
              series: k
            });
          }
        },
        "Remove"
      )))), /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement("div", { className: "input-group" }, /* @__PURE__ */ i.createElement("label", { htmlFor: "showInTooltip" }, "Show In Tooltip"), /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox--small", onClick: (v) => g(v, a, c) }, /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, d && /* @__PURE__ */ i.createElement(Am, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ i.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: "showInTooltip", checked: d || !1, readOnly: !0 }))), /* @__PURE__ */ i.createElement(
        Ua,
        {
          initial: "Select an option",
          value: t.series[a].confidenceIntervals[c].low ? t.series[a].confidenceIntervals[c].low : "Select",
          label: "Low Confidence Interval",
          onChange: (v) => {
            const y = [...t.series[a].confidenceIntervals];
            y[c].low = v.target.value;
            const k = [...t.series];
            k[a] = { ...k[a], confidenceIntervals: y }, r({
              ...t,
              series: k
            });
          },
          options: o()
        }
      ), /* @__PURE__ */ i.createElement(
        Ua,
        {
          initial: "Select an option",
          value: t.series[a].confidenceIntervals[c].high ? t.series[a].confidenceIntervals[c].high : "Select",
          label: "High Confidence Interval",
          onChange: (v) => {
            const y = [...t.series[a].confidenceIntervals];
            y[c].high = v.target.value;
            const k = [...t.series];
            k[a] = { ...k[a], confidenceIntervals: y }, r({
              ...t,
              series: k
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
}, uw = (e) => {
  const { series: t, index: r } = e, { config: n, updateConfig: a } = se.useContext(Et);
  if (!["Line", "Combo", "dashed-sm", "dashed-md", "dashed-lg"].includes(t.type))
    return;
  const f = (s, c, d, g) => {
    let v = [...n.series], y = { ...n.runtime.seriesLabels };
    v[s].weight = c && Math.max(Number(d), Math.min(Number(g), Number(c))), y[v[s].dataKey] = v[s].weight ? v[s].weight : v[s].dataKey;
    const k = {
      ...n,
      series: v,
      runtime: {
        ...n.runtime,
        seriesLabels: y
      }
    };
    a(k);
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
}, cw = (e) => {
  const { series: t, index: r } = e, { config: n, updateConfig: a } = se.useContext(Et);
  if (!["Bar", "Line", "Area Chart", "Combo", "Deviation Bar", "Paired Bar", "Scatter Plot", "dashed-sm", "dashed-md", "dashed-lg"].includes(t.type))
    return;
  const f = (s, c) => {
    let d = [...n.series], g = { ...n.runtime.seriesLabels };
    d[s].name = c, g[d[s].dataKey] = d[s].name ? d[s].name : d[s].dataKey;
    let v = {
      ...n,
      series: d,
      runtime: {
        ...n.runtime,
        seriesLabels: g
      }
    };
    a(v);
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
}, dw = (e) => {
  const { series: t, index: r } = e, { config: n, updateConfig: a } = se.useContext(Et);
  if (["Paired Bar", "Scatter Plot", "Deviation Bar"].includes(n.visualizationType))
    return;
  const o = (f) => {
    let s = [...n.series];
    s[f].tooltip && s[f].tooltip, s[f].tooltip = !s[f].tooltip, a({
      ...n,
      series: s
    });
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: "input-group" }, /* @__PURE__ */ i.createElement("label", { htmlFor: `series-tooltip--${r}` }, "Show In Tooltip"), /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox--small", onClick: (f) => o(r) }, /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, t.tooltip && /* @__PURE__ */ i.createElement(Am, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ i.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: `series-tooltip--${r}`, checked: t.tooltip ? t.tooltip : !1, readOnly: !0 }))));
}, fw = (e) => {
  const { config: t, updateConfig: r } = se.useContext(Et), { series: n, index: a } = e, o = (s) => {
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
}, py = (e) => {
  const { config: t } = se.useContext(Et), { series: r, getItemStyle: n, sortableItemStyles: a, chartsWithOptions: o, index: f } = e;
  return /* @__PURE__ */ i.createElement(bm, { key: r.dataKey, draggableId: `draggableFilter-${r.dataKey}`, index: f }, (s, c) => /* @__PURE__ */ i.createElement("div", { key: f, className: c.isDragging ? "currently-dragging" : "", style: n(c.isDragging, s.draggableProps.style, a), ref: s.innerRef, ...s.draggableProps, ...s.dragHandleProps }, /* @__PURE__ */ i.createElement(zi, { allowZeroExpanded: !0 }, /* @__PURE__ */ i.createElement(On, { className: "series-item series-item--chart" }, /* @__PURE__ */ i.createElement(Mn, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(_n, { className: o.includes(t.visualizationType) ? "accordion__button" : "accordion__button hide-arrow" }, /* @__PURE__ */ i.createElement(St, { display: "move", size: 15, style: { cursor: "default" } }), r.dataKey, /* @__PURE__ */ i.createElement(Zr.Button.Remove, { series: r, index: f }))), o.includes(t.visualizationType) && /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement(Zr.Input.Name, { series: r, index: f }), /* @__PURE__ */ i.createElement(Zr.Input.Weight, { series: r, index: f }), /* @__PURE__ */ i.createElement(Zr.Dropdown.SeriesType, { series: r, index: f }), /* @__PURE__ */ i.createElement(Zr.Dropdown.AxisPosition, { series: r, index: f }), /* @__PURE__ */ i.createElement(Zr.Dropdown.LineType, { series: r, index: f }), /* @__PURE__ */ i.createElement(Zr.Dropdown.ForecastingColor, { series: r, index: f }), /* @__PURE__ */ i.createElement(Zr.Dropdown.ConfidenceInterval, { series: r, index: f }), /* @__PURE__ */ i.createElement(Zr.Checkbox.DisplayInTooltip, { series: r, index: f }))))));
}, hw = (e) => {
  const { series: t, getItemStyle: r, sortableItemStyles: n, chartsWithOptions: a } = e;
  return t.map((o, f) => /* @__PURE__ */ i.createElement(py, { getItemStyle: r, sortableItemStyles: n, chartsWithOptions: a, series: o, index: f, key: `series-list-${f}` }));
}, Zr = {
  Wrapper: tw,
  Dropdown: {
    SeriesType: rw,
    AxisPosition: ow,
    ConfidenceInterval: sw,
    LineType: nw,
    ForecastingStage: aw,
    ForecastingColumn: iw,
    ForecastingColor: lw
  },
  Input: {
    Name: cw,
    Weight: uw
  },
  Checkbox: {
    DisplayInTooltip: dw
  },
  Button: {
    Remove: fw
  },
  Item: py,
  List: hw
}, pw = se.memo(({ config: e, updateConfig: t }) => {
  let r = (c, d, g) => {
    let v = [];
    e.regions && (v = [...e.regions]), v[g][c] = d, t({ ...e, regions: v });
  }, n = (c, d, g, v, y) => r(g, v, y), a = (c) => {
    let d = [];
    e.regions && (d = [...e.regions]), d.splice(c, 1), t({ ...e, regions: d });
  }, o = () => {
    let c = [];
    e.regions && (c = [...e.regions]), c.push({}), t({ ...e, regions: c });
  };
  const f = ["Fixed", "Previous Days"], s = ["Last Date", "Fixed"];
  return /* @__PURE__ */ i.createElement(i.Fragment, null, e.regions && e.regions.map(({ label: c, color: d, from: g, to: v, background: y, range: k = "Custom" }, E) => {
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
    ), /* @__PURE__ */ i.createElement(Ge, { value: c, label: "Region Label", fieldName: "label", i: E, updateField: n }), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(Ge, { value: d, label: "Text Color", fieldName: "color", updateField: (T, m, L, O) => r(L, O, E) }), /* @__PURE__ */ i.createElement(Ge, { value: y, label: "Background", fieldName: "background", updateField: (T, m, L, O) => r(L, O, E) })), /* @__PURE__ */ i.createElement(
      Tt,
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
      Ge,
      {
        value: g,
        label: e.regions[E].fromType === "Fixed" || !((M = e.regions[E]) != null && M.fromType) ? "From Value" : "Previous Number of Days",
        fieldName: "from",
        updateField: (T, m, L, O) => r(L, O, E),
        tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "When using categorical (linear scale) match the data set value. When using date (linear / date time scale) match the x-axis value.")))
      }
    )), /* @__PURE__ */ i.createElement(
      Tt,
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
    ), (e.regions[E].toType === "Fixed" || !e.regions[E].toType) && /* @__PURE__ */ i.createElement(Ge, { value: v, label: "To Value", fieldName: "to", updateField: (T, m, L, O) => r(L, O, E) }));
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
}), mw = ({ name: e }) => {
  const { visSupportsRegions: t } = Ds(), { config: r, updateConfig: n } = se.useContext(Et);
  return t() ? /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(_n, null, e)), /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement(pw, { config: r, updateConfig: n }))) : null;
}, Ph = se.createContext(null), Rh = () => {
  const e = se.useContext(Ph);
  if (e === null)
    throw new Error("COVE: editor panel context is null.");
  return e;
}, gw = (e) => {
  const { config: t } = se.useContext(Et), { updateField: r } = Rh(), { enabledChartTypes: n, visHasNumbersOnBars: a, visHasLabelOnData: o, visSupportsChartHeight: f, visSupportsSuperTitle: s, visSupportsFootnotes: c } = Ds(), { visualizationType: d, visualizationSubType: g, barStyle: v } = t, y = () => (d === "Bar" || d === "Deviation Bar") && g !== "stacked" && (t.orientation === "horizontal" || t.orientation === "vertical") ? ["flat", "rounded", "lollipop"] : ["flat", "rounded"];
  return /* @__PURE__ */ i.createElement(On, null, " ", /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(_n, null, "General")), /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement(Tt, { value: d, fieldName: "visualizationType", label: "Chart Type", updateField: r, options: n }), (d === "Bar" || d === "Combo" || d === "Area Chart") && /* @__PURE__ */ i.createElement(Tt, { value: g || "Regular", fieldName: "visualizationSubType", label: "Chart Subtype", updateField: r, options: ["regular", "stacked"] }), d === "Area Chart" && g === "stacked" && /* @__PURE__ */ i.createElement(Tt, { value: t.stackedAreaChartLineType || "Linear", fieldName: "stackedAreaChartLineType", label: "Stacked Area Chart Line Type", updateField: r, options: Object.keys(xc) }), d === "Bar" && /* @__PURE__ */ i.createElement(Tt, { value: t.orientation || "vertical", fieldName: "orientation", label: "Orientation", updateField: r, options: ["vertical", "horizontal"] }), d === "Deviation Bar" && /* @__PURE__ */ i.createElement(Tt, { label: "Orientation", options: ["horizontal"] }), (d === "Bar" || d === "Deviation Bar") && /* @__PURE__ */ i.createElement(Tt, { value: t.isLollipopChart ? "lollipop" : v || "flat", fieldName: "barStyle", label: "bar style", updateField: r, options: y() }), (d === "Bar" || d === "Deviation Bar") && v === "rounded" && /* @__PURE__ */ i.createElement(Tt, { value: t.tipRounding || "top", fieldName: "tipRounding", label: "tip rounding", updateField: r, options: ["top", "full"] }), (d === "Bar" || d === "Deviation Bar") && v === "rounded" && /* @__PURE__ */ i.createElement(Tt, { value: t.roundingStyle || "standard", fieldName: "roundingStyle", label: "rounding style", updateField: r, options: ["standard", "shallow", "finger"] }), d === "Bar" && t.orientation === "horizontal" && /* @__PURE__ */ i.createElement(Tt, { value: t.yAxis.labelPlacement || "Below Bar", section: "yAxis", fieldName: "labelPlacement", label: "Label Placement", updateField: r, options: ["Below Bar", "On Date/Category Axis"] }), a() ? /* @__PURE__ */ i.createElement(mt, { value: t.yAxis.displayNumbersOnBar, section: "yAxis", fieldName: "displayNumbersOnBar", label: t.isLollipopChart ? "Display Numbers after Bar" : "Display Numbers on Bar", updateField: r }) : o() && /* @__PURE__ */ i.createElement(mt, { value: t.labels, fieldName: "labels", label: "Display label on data", updateField: r }), d === "Pie" && /* @__PURE__ */ i.createElement(Tt, { fieldName: "pieType", label: "Pie Chart Type", updateField: r, options: ["Regular", "Donut"] }), /* @__PURE__ */ i.createElement(
    Ge,
    {
      value: t.title || "Chart Title",
      fieldName: "title",
      id: "title",
      label: "Title",
      placeholder: "Chart Title",
      updateField: r,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Title is required to set the name of the download file but can be hidden using the option below.")))
    }
  ), /* @__PURE__ */ i.createElement(mt, { value: t.showTitle, fieldName: "showTitle", label: "Show Title", updateField: r }), s() && /* @__PURE__ */ i.createElement(
    Ge,
    {
      value: t.superTitle,
      updateField: r,
      fieldName: "superTitle",
      label: "Super Title",
      placeholder: "Super Title",
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Super Title")))
    }
  ), /* @__PURE__ */ i.createElement(
    Ge,
    {
      type: "textarea",
      value: t.introText,
      updateField: r,
      fieldName: "introText",
      label: "Message",
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Intro Text")))
    }
  ), /* @__PURE__ */ i.createElement(
    Ge,
    {
      type: "textarea",
      value: t.description,
      fieldName: "description",
      label: "Subtext/Citation",
      updateField: r,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), c() && /* @__PURE__ */ i.createElement(
    Ge,
    {
      type: "textarea",
      value: t.footnotes,
      updateField: r,
      fieldName: "footnotes",
      label: "Footnotes",
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Footnotes")))
    }
  ), f() && t.orientation === "vertical" && /* @__PURE__ */ i.createElement(Ge, { type: "number", value: t.heights.vertical, section: "heights", fieldName: "vertical", label: "Chart Height", updateField: r })));
}, yw = (e) => {
  const { config: t } = se.useContext(Et), { boxplot: r } = t;
  if (t.visualizationType !== "Box Plot")
    return;
  const { updateField: n } = Rh();
  return /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(_n, null, e.name)), /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement("h4", { style: { fontSize: "18px" } }, "Labels for 5-Number Summary"), /* @__PURE__ */ i.createElement(
    Ge,
    {
      type: "text",
      value: r.labels.maximum,
      fieldName: "maximum",
      section: "boxplot",
      subsection: "labels",
      label: "Maximum",
      updateField: n,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Highest value, excluding outliers")))
    }
  ), /* @__PURE__ */ i.createElement(
    Ge,
    {
      type: "text",
      value: r.labels.q3,
      fieldName: "q3",
      section: "boxplot",
      subsection: "labels",
      label: "Upper Quartile",
      updateField: n,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Represented by top line of box. 25% of data are higher.")))
    }
  ), /* @__PURE__ */ i.createElement(
    Ge,
    {
      type: "text",
      value: r.labels.median,
      fieldName: "median",
      section: "boxplot",
      subsection: "labels",
      label: "Median",
      updateField: n,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Middle data point. Half of data are higher value.")))
    }
  ), /* @__PURE__ */ i.createElement(
    Ge,
    {
      type: "text",
      value: r.labels.q1,
      fieldName: "q1",
      section: "boxplot",
      subsection: "labels",
      label: "Lower Quartile",
      updateField: n,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Represented by bottom line of box. 25% of data are lower.")))
    }
  ), /* @__PURE__ */ i.createElement(
    Ge,
    {
      type: "text",
      value: r.labels.minimum,
      fieldName: "minimum",
      section: "boxplot",
      subsection: "labels",
      label: "Minimum",
      updateField: n,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Lowest value, excluding outliers")))
    }
  ), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("h4", { style: { fontSize: "18px" } }, "Labels for Additional Measures"), /* @__PURE__ */ i.createElement(Ge, { type: "text", value: r.labels.iqr, fieldName: "iqr", section: "boxplot", subsection: "labels", label: "Interquartile Range", updateField: n }), /* @__PURE__ */ i.createElement(Ge, { type: "text", value: r.labels.total, fieldName: "total", section: "boxplot", subsection: "labels", label: "Total", updateField: n }), /* @__PURE__ */ i.createElement(Ge, { type: "text", value: r.labels.mean, fieldName: "mean", section: "boxplot", subsection: "labels", label: "Mean", updateField: n }), /* @__PURE__ */ i.createElement(Ge, { type: "text", value: r.labels.outliers, fieldName: "outliers", section: "boxplot", subsection: "labels", label: "Outliers", updateField: n }), /* @__PURE__ */ i.createElement(Ge, { type: "text", value: r.labels.values, fieldName: "values", section: "boxplot", subsection: "labels", label: "Values", updateField: n })));
}, my = (e, t) => {
  let r = [], n = [], a = [];
  if (e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar") {
    const o = e.twoColor.isPaletteReversed;
    r = Object.keys(ju).filter((f) => o ? f.endsWith("reverse") : !f.endsWith("reverse"));
  } else {
    const o = [], f = [];
    for (const s in dr) {
      const c = s.startsWith("sequential"), d = s.startsWith("qualitative"), g = s.endsWith("reverse");
      c && (!e.isPaletteReversed && !g || e.isPaletteReversed && g) && o.push(s), d && (!e.isPaletteReversed && !g || e.isPaletteReversed && g) && f.push(s);
    }
    n = o, a = f;
  }
  return se.useEffect(() => {
    let o = "";
    e.twoColor.isPaletteReversed && !e.twoColor.palette.endsWith("reverse") && (o = e.twoColor.palette + "reverse"), !e.twoColor.isPaletteReversed && e.twoColor.palette.endsWith("reverse") && (o = e.twoColor.palette.slice(0, -7)), t({ ...e, twoColor: { ...e.twoColor, palette: o } });
  }, [e.twoColor.isPaletteReversed]), se.useEffect(() => {
    let o = "";
    e.isPaletteReversed && !e.palette.endsWith("reverse") && (o = e.palette + "reverse"), !e.isPaletteReversed && e.palette.endsWith("reverse") && (o = e.palette.slice(0, -7)), t({ ...e, palette: o });
  }, [e.isPaletteReversed]), { twoColorPalettes: r, sequential: n, nonSequential: a };
}, vw = (e) => {
  var j;
  const { config: t, updateConfig: r, colorPalettes: n, twoColorPalette: a } = se.useContext(Et), { visual: o } = t, { setLollipopShape: f, updateField: s } = Rh(), { visHasBarBorders: c, visCanAnimate: d, visSupportsNonSequentialPallete: g, headerColors: v, visSupportsTooltipOpacity: y, visSupportsTooltipLines: k, visSupportsBarSpace: E, visSupportsBarThickness: M, visHasDataCutoff: T, visSupportsSequentialPallete: m, visSupportsReverseColorPalette: L } = Ds(), { twoColorPalettes: O, sequential: _, nonSequential: N } = my(t, r), R = (B, V) => {
    if (console.log("value", V), B === "storyNodeFontColor") {
      r({
        ...t,
        sankey: {
          ...t.sankey,
          storyNodeFontColor: V
        }
      });
      return;
    } else
      r({
        ...t,
        sankey: {
          ...t.sankey,
          [B]: {
            ...t.sankey[B],
            default: V
          }
        }
      });
  };
  return /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(_n, null, "Visual")), /* @__PURE__ */ i.createElement(Nn, null, t.isLollipopChart && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("fieldset", { className: "header" }, /* @__PURE__ */ i.createElement("legend", { className: "edit-label" }, "Lollipop Shape"), /* @__PURE__ */ i.createElement(
    "div",
    {
      onChange: (B) => {
        f(B.target.value);
      }
    },
    /* @__PURE__ */ i.createElement("label", { className: "radio-label" }, /* @__PURE__ */ i.createElement("input", { type: "radio", name: "lollipopShape", value: "circle", checked: t.lollipopShape === "circle" }), "Circle"),
    /* @__PURE__ */ i.createElement("label", { className: "radio-label" }, /* @__PURE__ */ i.createElement("input", { type: "radio", name: "lollipopShape", value: "square", checked: t.lollipopShape === "square" }), "Square")
  )), /* @__PURE__ */ i.createElement(Tt, { value: t.lollipopColorStyle ? t.lollipopColorStyle : "two-tone", fieldName: "lollipopColorStyle", label: "Lollipop Color Style", updateField: s, options: ["regular", "two-tone"] }), /* @__PURE__ */ i.createElement(Tt, { value: t.lollipopSize ? t.lollipopSize : "small", fieldName: "lollipopSize", label: "Lollipop Size", updateField: s, options: ["small", "medium", "large"] })), t.visualizationType === "Box Plot" && /* @__PURE__ */ i.createElement("fieldset", { className: "fieldset fieldset--boxplot" }, /* @__PURE__ */ i.createElement("legend", { className: "" }, "Box Plot Settings"), /* @__PURE__ */ i.createElement(Tt, { value: t.boxplot.borders, fieldName: "borders", section: "boxplot", label: "Box Plot Borders", updateField: s, options: ["true", "false"] }), /* @__PURE__ */ i.createElement(mt, { value: t.boxplot.plotOutlierValues, fieldName: "plotOutlierValues", section: "boxplot", label: "Plot Outliers", updateField: s }), /* @__PURE__ */ i.createElement(mt, { value: t.boxplot.plotNonOutlierValues, fieldName: "plotNonOutlierValues", section: "boxplot", label: "Plot non-outlier values", updateField: s })), /* @__PURE__ */ i.createElement(Tt, { value: t.fontSize, fieldName: "fontSize", label: "Font Size", updateField: s, options: ["small", "medium", "large"] }), c() && /* @__PURE__ */ i.createElement(Tt, { value: t.barHasBorder, fieldName: "barHasBorder", label: "Bar Borders", updateField: s, options: ["true", "false"] }), d() && /* @__PURE__ */ i.createElement(mt, { value: t.animate, fieldName: "animate", label: "Animate Visualization", updateField: s }), (((j = t.series) == null ? void 0 : j.some((B) => B.type === "Line" || B.type === "dashed-lg" || B.type === "dashed-sm" || B.type === "dashed-md")) && t.visualizationType === "Combo" || t.visualizationType === "Line") && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Tt, { value: t.lineDatapointStyle, fieldName: "lineDatapointStyle", label: "Line Datapoint Style", updateField: s, options: ["hidden", "hover", "always show"] }), /* @__PURE__ */ i.createElement(Tt, { value: t.lineDatapointColor, fieldName: "lineDatapointColor", label: "Line Datapoint Color", updateField: s, options: ["Same as Line", "Lighter than Line"] })), /* @__PURE__ */ i.createElement("label", { className: "header" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Header Theme"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, v.map((B) => /* @__PURE__ */ i.createElement(
    "button",
    {
      title: B,
      key: B,
      onClick: (V) => {
        V.preventDefault(), r({ ...t, theme: B });
      },
      className: t.theme === B ? "selected " + B : B
    }
  )))), (g() || g()) && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Chart Color Palette")), L() && /* @__PURE__ */ i.createElement(zh, { fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: s, value: t.isPaletteReversed }), m() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", null, "Sequential"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, _.map((B) => {
    const V = {
      backgroundColor: n[B][2]
    }, q = {
      backgroundColor: n[B][3]
    }, Y = {
      backgroundColor: n[B][5]
    };
    return /* @__PURE__ */ i.createElement(
      "button",
      {
        title: B,
        key: B,
        onClick: (U) => {
          U.preventDefault(), r({ ...t, palette: B });
        },
        className: t.palette === B ? "selected" : ""
      },
      /* @__PURE__ */ i.createElement("span", { style: V }),
      /* @__PURE__ */ i.createElement("span", { style: q }),
      /* @__PURE__ */ i.createElement("span", { style: Y })
    );
  }))), g() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", null, "Non-Sequential"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, N.map((B) => {
    const V = {
      backgroundColor: n[B][2]
    }, q = {
      backgroundColor: n[B][4]
    }, Y = {
      backgroundColor: n[B][6]
    };
    return /* @__PURE__ */ i.createElement(
      "button",
      {
        title: B,
        key: B,
        onClick: (U) => {
          U.preventDefault(), r({ ...t, palette: B });
        },
        className: t.palette === B ? "selected" : ""
      },
      /* @__PURE__ */ i.createElement("span", { style: V }),
      /* @__PURE__ */ i.createElement("span", { style: q }),
      /* @__PURE__ */ i.createElement("span", { style: Y })
    );
  })))), t.visualizationType === "Sankey" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ i.createElement("input", { type: "color", value: t.sankey.nodeColor.default, id: "storyNodeColor", name: "storyNodeColor", onChange: (B) => R("nodeColor", B.target.value) }), /* @__PURE__ */ i.createElement("label", { htmlFor: "storyNodeColor" }, "Story Node Color")), /* @__PURE__ */ i.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ i.createElement("input", { type: "color", value: t.sankey.storyNodeFontColor || "red", id: "storyNodeFontColor", name: "storyNodeFontColor", onChange: (B) => R("storyNodeFontColor", B.target.value) }), /* @__PURE__ */ i.createElement("label", { htmlFor: "storyNodeFontColor" }, "Story Node Font Color")), /* @__PURE__ */ i.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ i.createElement("input", { type: "color", value: t.sankey.linkColor.default, id: "linkColor", name: "linkColor", onChange: (B) => R("linkColor", B.target.value) }), /* @__PURE__ */ i.createElement("label", { htmlFor: "linkColor" }, "Link Color"))), (t.visualizationType === "Paired Bar" || t.visualizationType === "Deviation Bar") && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(zh, { section: "twoColor", fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: s, value: t.twoColor.isPaletteReversed }), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, O.map((B) => {
    const V = {
      backgroundColor: a[B][0]
    }, q = {
      backgroundColor: a[B][1]
    };
    return /* @__PURE__ */ i.createElement(
      "button",
      {
        title: B,
        key: B,
        onClick: (Y) => {
          Y.preventDefault(), r({ ...t, twoColor: { ...t.twoColor, palette: B } });
        },
        className: t.twoColor.palette === B ? "selected" : ""
      },
      /* @__PURE__ */ i.createElement("span", { className: "two-color", style: V }),
      /* @__PURE__ */ i.createElement("span", { className: "two-color", style: q })
    );
  }))), T() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    Ge,
    {
      value: t.dataCutoff,
      type: "number",
      fieldName: "dataCutoff",
      className: "number-narrow",
      label: "Data Cutoff",
      updateField: s,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Any value below the cut-off value is included in a special "less than" category. This option supports special conditions like suppressed data.')))
    }
  )), M() && t.orientation === "horizontal" && !t.isLollipopChart && t.yAxis.labelPlacement !== "On Bar" && /* @__PURE__ */ i.createElement(Ge, { type: "number", value: t.barHeight || "25", fieldName: "barHeight", label: " Bar Thickness", updateField: s, min: 15 }), (t.visualizationType === "Bar" && t.orientation !== "horizontal" || t.visualizationType === "Combo") && /* @__PURE__ */ i.createElement(Ge, { value: t.barThickness, type: "number", fieldName: "barThickness", label: "Bar Thickness", updateField: s }), E() && /* @__PURE__ */ i.createElement(Ge, { type: "number", value: t.barSpace || "15", fieldName: "barSpace", label: "Bar Space", updateField: s, min: 0 }), (t.visualizationType === "Bar" || t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ i.createElement(mt, { value: t.topAxis.hasLine, section: "topAxis", fieldName: "hasLine", label: "Add Top Axis Line", updateField: s }), t.visualizationType === "Spark Line" && /* @__PURE__ */ i.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ i.createElement(mt, { value: o == null ? void 0 : o.border, section: "visual", fieldName: "border", label: "Show Border", updateField: s }), /* @__PURE__ */ i.createElement(mt, { value: o == null ? void 0 : o.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: s }), /* @__PURE__ */ i.createElement(mt, { value: o == null ? void 0 : o.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: s }), /* @__PURE__ */ i.createElement(mt, { value: o == null ? void 0 : o.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: s }), /* @__PURE__ */ i.createElement(mt, { value: o == null ? void 0 : o.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: s })), (t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ i.createElement(mt, { value: t.showLineSeriesLabels, fieldName: "showLineSeriesLabels", label: "Append Series Name to End of Line Charts", updateField: s }), (t.visualizationType === "Line" || t.visualizationType === "Combo") && t.showLineSeriesLabels && /* @__PURE__ */ i.createElement(mt, { value: t.colorMatchLineSeriesLabels, fieldName: "colorMatchLineSeriesLabels", label: "Match Series Color to Name at End of Line Charts", updateField: s }), k() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(mt, { value: o.verticalHoverLine, fieldName: "verticalHoverLine", section: "visual", label: "Vertical Hover Line", updateField: s }), /* @__PURE__ */ i.createElement(mt, { value: o.horizontalHoverLine, fieldName: "horizontalHoverLine", section: "visual", label: "Horizontal Hover Line", updateField: s })), y() && /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Tooltip Opacity"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "number",
      value: t.tooltips.opacity ? t.tooltips.opacity : 100,
      onChange: (B) => r({
        ...t,
        tooltips: {
          ...t.tooltips,
          opacity: B.target.value
        }
      })
    }
  )), t.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(mt, { value: t.tooltips.singleSeries, fieldName: "singleSeries", section: "tooltips", label: "SHOW HOVER FOR SINGLE DATA SERIES", updateField: s }), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "No Data Message"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: t.chartMessage.noData ? t.chartMessage.noData : "",
      onChange: (B) => r({
        ...t,
        chartMessage: {
          ...t.chartMessage,
          noData: B.target.value
        }
      })
    }
  ))));
}, xw = () => {
  var s, c, d;
  const { config: e, updateConfig: t } = se.useContext(Et), r = (s = e.data) == null ? void 0 : s[0], { updateField: n } = se.useContext(Ph);
  if (e.visualizationType !== "Sankey")
    return;
  const a = (g, v, y) => {
    let k = [];
    r != null && r.storyNodeText && (k = [...r == null ? void 0 : r.storyNodeText]), k[y][g] = v, console.log("story nodes", k[y]), t({
      ...e,
      sankey: {
        ...e.sankey,
        data: {
          ...e.sankey.data,
          storyNodeText: k
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
    const v = r;
    v.storyNodeText.splice(g, 1), t({ ...e, sankey: { ...e.sankey, data: { ...v } } });
  };
  return /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(_n, null, "Sankey Settings")), /* @__PURE__ */ i.createElement(Nn, null, (r == null ? void 0 : r.storyNodeText) && (r == null ? void 0 : r.storyNodeText.map(({ StoryNode: g, segmentTextBefore: v, segmentTextAfter: y }, k) => /* @__PURE__ */ i.createElement("div", { key: k, style: { border: "1px solid black", margin: "15px auto", padding: "15px", borderRadius: "10px" } }, /* @__PURE__ */ i.createElement("label", null, "Story Node Text", /* @__PURE__ */ i.createElement("input", { type: "text", value: g, fieldName: "StoryNode", label: "StoryNode", onChange: (E) => a("StoryNode", E.target.value, k) })), /* @__PURE__ */ i.createElement("label", null, "Story Text Before", /* @__PURE__ */ i.createElement("input", { type: "text", value: v, fieldName: "segmentTextBefore", label: "Segment Text Before", onChange: (E) => a("segmentTextBefore", E.target.value, k) })), /* @__PURE__ */ i.createElement("label", null, "Story Text After", /* @__PURE__ */ i.createElement("input", { type: "text", value: y, fieldName: "segmentTextAfter", label: "Segment Text After", onChange: (E) => a("segmentTextAfter", E.target.value, k) })), /* @__PURE__ */ i.createElement(km, { onClick: (E) => f(k), className: "btn", style: { background: "tomato" } }, "Remove Story Node")))), `Total Story Nodes: ${(c = r == null ? void 0 : r.storyNodeText) == null ? void 0 : c.length}`, ((d = r == null ? void 0 : r.storyNodeText) == null ? void 0 : d.length) < 3 && /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "btn full-width",
      onClick: (g) => {
        g.preventDefault(), o();
      }
    },
    "Add StoryNode"
  ), /* @__PURE__ */ i.createElement(mt, { value: e.enableTooltips, fieldName: "enableTooltips", label: "Enable Tooltips", updateField: n })));
}, Ba = {
  ForestPlot: ew,
  Series: Zr,
  Regions: mw,
  General: gw,
  BoxPlot: yw,
  Visual: vw,
  Sankey: xw
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
  let o = (c) => {
    let d = [];
    e.suppressedData && (d = [...e.suppressedData]), d.splice(c, 1), t({ ...e, suppressedData: d });
  }, f = () => {
    let c = e.suppressedData ? [...e.suppressedData] : [];
    c.push({ label: "", column: "", value: "", icon: "" }), t({ ...e, suppressedData: c });
  }, s = (c, d, g) => {
    let v = [];
    e.suppressedData && (v = [...e.suppressedData]), v[g][c] = d, t({ ...e, suppressedData: v });
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, e.suppressedData && e.suppressedData.map(({ label: c, column: d, value: g, icon: v }, y) => /* @__PURE__ */ i.createElement("div", { key: `suppressed-${y}`, className: "edit-block" }, /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: (k) => {
        k.preventDefault(), o(y);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement(Tt, { value: d, initial: "Select", fieldName: "column", label: "Column", updateField: (k, E, M, T) => s(M, T, y), options: n() }), /* @__PURE__ */ i.createElement(Ge, { value: g, fieldName: "value", label: "Value", updateField: (k, E, M, T) => s(M, T, y) }), /* @__PURE__ */ i.createElement(Tt, { value: v, initial: "Select", fieldName: "icon", label: "Icon", updateField: (k, E, M, T) => s(M, T, y), options: a() }), /* @__PURE__ */ i.createElement(Ge, { value: c, fieldName: "label", label: "Label", placeholder: "suppressed", updateField: (k, E, M, T) => s(M, T, y) }))), /* @__PURE__ */ i.createElement("button", { type: "button", onClick: f, className: "btn full-width" }, "Add Suppression Class"));
});
const bw = se.memo(({ config: e, updateConfig: t, data: r }) => {
  const n = () => {
    const d = /* @__PURE__ */ new Set();
    return r.forEach((g) => {
      Object.keys(g).forEach((v) => {
        d.add(v);
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
  }, c = (d, g, v) => {
    let y = [];
    e.preliminaryData && (y = [...e.preliminaryData]), y[v][d] = g, t({ ...e, preliminaryData: y });
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, e.preliminaryData && e.preliminaryData.map(({ seriesKey: d, type: g, label: v, column: y, value: k, style: E }, M) => {
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
    ), /* @__PURE__ */ i.createElement(Tt, { value: g, initial: "Select", fieldName: "type", label: "Type", updateField: (m, L, O, _) => c(O, _, M), options: a() }), /* @__PURE__ */ i.createElement(Tt, { value: d, initial: "Select", fieldName: "seriesKey", label: "ASSOCIATE TO SERIES", updateField: (m, L, O, _) => c(O, _, M), options: e.runtime.lineSeriesKeys ?? ((T = e.runtime) == null ? void 0 : T.seriesKeys) }), /* @__PURE__ */ i.createElement(Tt, { value: y, initial: "Select", fieldName: "column", label: "COLUMN WITH CONFIGURATION VALUE", updateField: (m, L, O, _) => c(O, _, M), options: n() }), /* @__PURE__ */ i.createElement(Ge, { value: k, fieldName: "value", label: "VALUE TO TRIGGER", updateField: (m, L, O, _) => c(O, _, M) }), /* @__PURE__ */ i.createElement(Tt, { value: E, initial: "Select", fieldName: "style", label: "Style", updateField: (m, L, O, _) => c(O, _, M), options: o() }), /* @__PURE__ */ i.createElement(Ge, { value: v, fieldName: "label", label: "Label", placeholder: "", updateField: (m, L, O, _) => c(O, _, M) }));
  }), /* @__PURE__ */ i.createElement("button", { type: "button", onClick: s, className: "btn full-width" }, e.visualizationType === "Line" || e.visualizationType === "Combo" ? "Add Special Line" : e.visualizationType === "Bar" ? " Add Special Bar" : "Add Special Line/Bar"));
}), Sw = () => {
  var x, A, $, X, be, ye, Te, Ve, ot, pt, dt, Ft, Dn, Tn, Cn, Xn, In, hr;
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
    setParentConfig: v,
    missingRequiredSections: y,
    isDebug: k,
    setFilteredData: E,
    lineOptions: M,
    rawData: T,
    highlight: m,
    highlightReset: L
  } = se.useContext(Et), { minValue: O, maxValue: _, existPositiveValue: N, isAllLine: R } = Oc(e, c);
  my(e, t);
  const j = { data: n, config: e }, { leftMax: B, rightMax: V } = uy(j), {
    headerColors: q,
    visSupportsTooltipLines: Y,
    visSupportsNonSequentialPallete: U,
    visSupportsSequentialPallete: te,
    visSupportsReverseColorPalette: me,
    visHasLabelOnData: I,
    visHasNumbersOnBars: le,
    visHasAnchors: ue,
    visHasBarBorders: fe,
    visHasDataCutoff: ae,
    visHasSelectableLegendValues: W,
    visCanAnimate: Z,
    visHasLegend: ee,
    visHasLegendAxisAlign: Ae,
    visHasBrushChart: xe,
    visSupportsDateCategoryAxis: De,
    visSupportsValueAxisMin: oe,
    visSupportsValueAxisMax: ze,
    visSupportsDateCategoryAxisLabel: He,
    visSupportsDateCategoryAxisLine: Ce,
    visSupportsDateCategoryAxisTicks: ge,
    visSupportsDateCategoryTickRotation: Oe,
    visSupportsDateCategoryNumTicks: ie,
    visSupportsDateCategoryAxisPadding: ke,
    visSupportsRegions: Pe,
    visSupportsFilters: We,
    visSupportsPreliminaryData: Ye,
    visSupportsValueAxisGridLines: qe,
    visSupportsValueAxisLine: lt,
    visSupportsValueAxisTicks: st,
    visSupportsValueAxisLabels: it,
    visSupportsBarSpace: Je,
    visSupportsBarThickness: Ie,
    visSupportsFootnotes: $e,
    visSupportsSuperTitle: ft,
    visSupportsDataCutoff: Ke,
    visSupportsChartHeight: Qe,
    visSupportsLeftValueAxis: ct,
    visSupportsTooltipOpacity: ht,
    visSupportsRankByValue: At,
    visSupportsResponsiveTicks: an,
    visSupportsDateCategoryHeight: Zt,
    visHasDataSuppression: Ot
  } = Ds(), { handleFilterOrder: zt, filterOrderOptions: tn, filterStyleOptions: hn } = Ay({ config: e, setConfig: t, filteredData: n, setFilteredData: E });
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
  const { hasRightAxis: un } = ph({ config: e, yMax: e.yAxis.size, data: e.data, updateConfig: t }), Sn = (ne, J) => ({
    ...J
  }), Lt = {
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
  }, on = (ne) => {
    ne.orientation === "horizontal" && (ne.labels = !1), ne.table.show === void 0 && (ne.table.show = !g), ne.visualizationType === "Combo" && (ne.orientation = "vertical"), En(ne.xAxis) && !ne.xAxis.padding && (ne.xAxis.padding = 6);
  }, _e = (ne, J, ce, Re) => {
    if (k && console.log("#COVE: CHART: EditorPanel: section, subsection, fieldName, newValue", ne, J, ce, Re), ne === "boxplot" && J === "legend") {
      t({
        ...e,
        [ne]: {
          ...e[ne],
          [J]: {
            ...e.boxplot[J],
            [ce]: Re
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
            [ce]: Re
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
            [ce]: Re
          }
        }
      });
      return;
    }
    if (ne === null && J === null) {
      let Dr = { ...e, [ce]: Re };
      on(Dr), t(Dr);
      return;
    }
    const Wt = Array.isArray(e[ne]);
    let pn = Wt ? [...e[ne], Re] : { ...e[ne], [ce]: Re };
    J !== null && (Wt ? (pn = [...e[ne]], pn[J] = { ...pn[J], [ce]: Re }) : typeof Re == "string" ? pn[J] = Re : pn = { ...e[ne], [J]: { ...e[ne][J], [ce]: Re } });
    let Hn = { ...e, [ne]: pn };
    on(Hn), t(Hn);
  }, [ln, Pt] = se.useState(!0);
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
  const Rt = (ne) => {
    t({
      ...e,
      lollipopShape: ne
    });
  }, Ln = (ne) => {
    let J = [...e.filters];
    J.splice(ne, 1), t({ ...e, filters: J });
  }, gn = (ne, J, ce) => {
    let Re = [...e.filters];
    Re[J][ne] = ce, t({ ...e, filters: Re });
  }, kn = () => {
    let ne = e.filters ? [...e.filters] : [];
    ne.push({ values: [] }), t({ ...e, filters: ne });
  }, Fn = (ne) => {
    let J = e.series ? [...e.series] : [], ce = Array.from(new Set(n.map((Wt) => Wt[ne]))), Re = [];
    ce.forEach((Wt) => {
      Re.push({ key: Wt });
    }), e.visualizationType === "Forecasting" ? J.push({ dataKey: ne, type: e.visualizationType, stages: Re, stageColumn: ne, axis: "Left", tooltip: !0 }) : J.push({ dataKey: ne, type: e.visualizationType, axis: "Left", tooltip: !0 }), t({ ...e, series: J });
  }, Me = (ne) => {
    const J = e.series[0].dataKey, ce = n.sort((Wt, pn) => Wt[J] - pn[J]), Re = ne === "asc" ? ce : ce.reverse();
    t({ ...e }, Re);
  }, Xe = (ne) => {
    let J = [...e.exclusions.keys];
    J.push(ne);
    let ce = { ...e.exclusions, keys: J };
    t({ ...e, exclusions: ce });
  }, kt = (ne) => {
    let J = -1, ce = [...e.exclusions.keys];
    for (let Re = 0; Re < ce.length; Re++)
      if (ce[Re] === ne) {
        J = Re;
        break;
      }
    if (J !== -1) {
      ce.splice(J, 1);
      let Re = { ...e.exclusions, keys: ce }, Wt = { ...e, exclusions: Re };
      ce.length === 0 && delete Wt.exclusions.keys, t(Wt);
    }
  }, nt = () => {
    let ne = {};
    return c.forEach((J) => {
      Object.keys(J).forEach((ce) => ne[ce] = !0);
    }), Object.keys(ne);
  }, K = (ne = !0) => {
    let J = {};
    if (c.forEach((ce) => {
      Object.keys(ce).forEach((Re) => J[Re] = !0);
    }), ne) {
      const { lower: ce, upper: Re } = e.confidenceKeys || {};
      Object.keys(J).forEach((Wt) => {
        (e.series && e.series.filter((pn) => pn.dataKey === Wt).length > 0 || e.confidenceKeys && Object.keys(e.confidenceKeys).includes(Wt) && (ce && Re || ce || Re) && Wt !== ce && Wt !== Re) && delete J[Wt];
      });
    }
    return Object.keys(J);
  }, Ne = (ne) => {
    if (!ne)
      return [];
    const J = /* @__PURE__ */ new Set();
    for (let ce = 0; ce < ne.length; ce++)
      for (const [Re] of Object.entries(ne[ce]))
        J.add(Re);
    return Array.from(J);
  }, et = (ne, J = !1) => {
    let ce = [];
    return d.forEach((Re) => {
      ce.push(Re[ne]);
    }), J ? [...new Set(ce)] : ce;
  }, Ue = () => {
    Pt(!ln);
  }, yt = () => /* @__PURE__ */ i.createElement("section", { className: "waiting" }, /* @__PURE__ */ i.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ i.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ i.createElement("p", null, e.runtime.editorErrorMessage))), at = () => {
    const ne = (J) => {
      J.preventDefault();
      let ce = { ...e };
      delete ce.newViz, t(ce);
    };
    return /* @__PURE__ */ i.createElement("section", { className: "waiting" }, /* @__PURE__ */ i.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ i.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ i.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ i.createElement("button", { className: "btn", style: { margin: "1em auto" }, disabled: y(), onClick: ne }, "I'm Done")));
  }, wt = () => {
    let ne = JSON.parse(JSON.stringify(e));
    return y() === !1 && delete ne.newViz, delete ne.runtime, ne;
  };
  se.useEffect(() => {
    if (v) {
      const ne = wt();
      v(ne);
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
  const $t = se.useCallback(() => {
    const ne = [...e.exclusions.keys];
    return /* @__PURE__ */ i.createElement("ul", { className: "series-list" }, ne.map((J, ce) => /* @__PURE__ */ i.createElement("li", { key: J }, /* @__PURE__ */ i.createElement("div", { className: "series-list__name", "data-title": J }, /* @__PURE__ */ i.createElement("div", { className: "series-list__name--text" }, J)), /* @__PURE__ */ i.createElement("button", { className: "series-list__remove", onClick: () => kt(J) }, "×"))));
  }, [e]), Ze = (ne, J) => {
    let ce = e.series, [Re] = ce.splice(ne, 1);
    ce.splice(J, 0, Re), t({ ...e, series: ce });
  };
  e.isLollipopChart && ((x = e == null ? void 0 : e.series) == null ? void 0 : x.length) > 1 && (e.runtime.editorErrorMessage = "Lollipop charts must use only one data series"), e.visualizationType === "Paired Bar" && ((A = e == null ? void 0 : e.series) == null ? void 0 : A.length) !== 2 && (e.runtime.editorErrorMessage = "Paired Bar charts must use exactly two data series"), e.visualizationType === "Deviation Bar" && (($ = e == null ? void 0 : e.series) == null ? void 0 : $.length) !== 1 && (e.runtime.editorErrorMessage = "Deviation Bar charts must use exactly one data series"), e.isLollipopChart && ((X = e == null ? void 0 : e.series) == null ? void 0 : X.length) === 0 && (e.runtime.editorErrorMessage = "Add a data series");
  const Bt = e.orientation === "horizontal" ? "xAxis" : "yAxis", [It, vt] = se.useState({ maxMsg: "", minMsg: "", rightMaxMessage: "", minMsgRight: "" }), Qt = () => {
    const ne = e[Bt].max, J = e[Bt].rightMax;
    let ce = "", Re = "";
    if (e.visualizationType !== "Combo")
      switch (!0) {
        case (ne && parseFloat(ne) < parseFloat(_) && N):
          ce = "Max value must be more than " + _;
          break;
        case (ne && parseFloat(ne) < 0 && !N):
          ce = "Value must be more than or equal to 0";
          break;
        default:
          ce = "";
      }
    if (e.visualizationType === "Combo")
      switch (!0) {
        case (ne && parseFloat(ne) < B):
          ce = "Max value must be more than " + B;
          break;
        case (J && parseFloat(J) < V):
          Re = "Max value must be more than " + V;
          break;
        case (ne && parseFloat(ne) < 0 && !N):
          ce = "Value must be more than or equal to 0";
          break;
        default:
          ce = "";
      }
    vt((Wt) => ({ ...Wt, maxMsg: ce, rightMaxMessage: Re }));
  }, qt = () => {
    const ne = parseFloat(e[Bt].min);
    let J = Number(O), ce = "";
    switch (!0) {
      case (e.useLogScale && ["Line", "Combo", "Bar"].includes(e.visualizationType) && ne < 0):
        ce = "Negative numbers are not supported in logarithmic scale";
        break;
      case ((e.visualizationType === "Line" || e.visualizationType === "Spark Line") && ne > J):
        ce = "Value should not exceed " + O;
        break;
      case (e.visualizationType === "Combo" && R && ne > J):
        ce = "Value should not exceed " + O;
        break;
      case ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && !R) && J > 0 && ne > 0):
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
    vt((Re) => ({ ...Re, minMsg: ce }));
  };
  se.useEffect(() => {
    qt(), Qt();
  }, [O, _, e]);
  const Mt = ((be = e == null ? void 0 : e.dataKey) == null ? void 0 : be.includes("http://")) || ((ye = e == null ? void 0 : e.dataKey) == null ? void 0 : ye.includes("https://")), Ht = () => {
    var ne, J;
    if (k !== void 0 && k && !((ne = e == null ? void 0 : e.xAxis) != null && ne.dataKey)) {
      let ce = K(!1);
      if (ce.includes("Date"))
        return "Date";
      if (ce.includes("Race"))
        return "Race";
      if (ce.includes("Month"))
        return "Month";
    }
    return ((J = e == null ? void 0 : e.xAxis) == null ? void 0 : J.dataKey) || "";
  }, Xt = () => {
    if (k !== void 0 && k && K(!1).length > 0) {
      let ne = K(!1).filter((J) => J !== Ht());
      if (ne.length > 0)
        return ne[0];
    }
    return "";
  };
  if (k && !e.xAxis.dataKey && (e.xAxis.dataKey = Ht()), k && ((Te = e == null ? void 0 : e.series) == null ? void 0 : Te.length) === 0) {
    let ne = Xt();
    ne !== "" && Fn(ne), k && console.log("### COVE DEBUG: Chart: Setting default datacol=", ne);
  }
  const yn = ["Area Chart", "Combo", "Line", "Bar", "Forecasting", "Scatter Plot", "Paired Bar", "Deviation Bar"], An = [
    /* @__PURE__ */ i.createElement("option", { value: "", key: "Select Option" }, "- Select Option -")
  ];
  if (e.data && e.series) {
    Object.keys(((Ve = e.data) == null ? void 0 : Ve[0]) || []).map((J) => {
      const ce = e == null ? void 0 : e.series.some((Re) => Re.dataKey === J);
      if (J !== e.xAxis.dataKey && !ce)
        return An.push(
          /* @__PURE__ */ i.createElement("option", { value: J, key: J }, J)
        );
    });
    let ne = {};
    e.data.forEach((J) => {
      Object.keys(J).forEach((ce) => {
        ne[ce] = ne[ce] || [];
        const Re = typeof J[ce] == "number" ? J[ce].toString() : J[ce];
        ne[ce].indexOf(Re) === -1 && ne[ce].push(Re);
      });
    });
  }
  if (!e.data && n) {
    if (!n[0])
      return;
    Object.keys(n[0]).map((J) => {
      const ce = n.some((Re) => Re.dataKey === J);
      if (J !== e.xAxis.dataKey && !ce)
        return An.push(
          /* @__PURE__ */ i.createElement("option", { value: J, key: J }, J)
        );
    });
    let ne = {};
    n.forEach((J) => {
      Object.keys(J).forEach((ce) => {
        ne[ce] = ne[ce] || [];
        const Re = typeof J[ce] == "number" ? J[ce].toString() : J[ce];
        ne[ce].indexOf(Re) === -1 && ne[ce].push(Re);
      });
    });
  }
  const Ut = Object.keys(e.columns).filter((ne) => [e.xAxis.dataKey].includes(ne) !== !0), Nt = (ne) => {
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
  }, vn = (ne) => {
    const J = e.columns;
    delete J[ne], t({
      ...e,
      columns: J
    });
  }, _t = async (ne, J, ce) => {
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
    highlightedBarValues: Kt,
    highlightedSeriesValues: Vn,
    handleUpdateHighlightedBar: Pn,
    handleAddNewHighlightedBar: zn,
    handleRemoveHighlightedBar: xn,
    handleUpdateHighlightedBarColor: Jt,
    handleHighlightedBarLegendLabel: wn,
    handleUpdateHighlightedBorderWidth: yr
  } = Ac(e, t), Lr = (ne, J) => {
    let ce = e.columns;
    ce[ne].tooltips = J, t({
      ...e,
      columns: ce
    });
  }, fr = e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1, Zn = () => {
    const ne = n.map((J) => J[e.legend.colorCode]);
    return fr ? ne : K(!1).filter((J) => J !== e.xAxis.dataKey);
  }, vr = (ne) => {
    t({ ...e, legend: { ...e.legend, seriesHighlight: ne } });
  }, xr = (ne, J, ce) => {
    var pn;
    const Re = { ...e[ne], [J]: ce }, Wt = { ...e, [ne]: Re };
    ce === "highlight" && ((pn = e.legend.seriesHighlight) != null && pn.length) && (Wt.legend.seriesHighlight.length = 0), t(Wt);
  }, br = {
    addNewExclusion: Xe,
    data: n,
    editColumn: _t,
    getColumns: K,
    getDataValueOptions: Ne,
    getDataValues: et,
    getItemStyle: Sn,
    handleSeriesChange: Ze,
    handleAddNewHighlightedBar: zn,
    setCategoryAxis: Ht,
    sortSeries: Me,
    updateField: _e,
    warningMsg: It,
    highlightedBarValues: Kt,
    handleHighlightedBarLegendLabel: wn,
    handleUpdateHighlightedBar: Pn,
    handleRemoveHighlightedBar: xn,
    isPaletteReversed: e.isPaletteReversed,
    highlightedSeriesValues: Vn,
    handleUpdateHighlightedBorderWidth: yr,
    handleUpdateHighlightedBarColor: Jt,
    setLollipopShape: Rt
  };
  return /* @__PURE__ */ i.createElement(Ph.Provider, { value: br }, /* @__PURE__ */ i.createElement(Ir, { component: "EditorPanel" }, e.newViz && /* @__PURE__ */ i.createElement(at, null), e.newViz === void 0 && e.runtime && ((ot = e.runtime) == null ? void 0 : ot.editorErrorMessage) && /* @__PURE__ */ i.createElement(yt, null), /* @__PURE__ */ i.createElement("button", { className: ln ? "editor-toggle" : "editor-toggle collapsed", title: ln ? "Collapse Editor" : "Expand Editor", onClick: Ue }), /* @__PURE__ */ i.createElement("section", { className: `${ln ? "editor-panel cove" : "hidden editor-panel cove"}${g ? " dashboard" : ""}` }, /* @__PURE__ */ i.createElement("div", { "aria-level": 2, role: "heading", className: "heading-2" }, "Configure Chart"), /* @__PURE__ */ i.createElement("section", { className: "form-container" }, /* @__PURE__ */ i.createElement(zi, { allowZeroExpanded: !0 }, /* @__PURE__ */ i.createElement(Ba.General, { name: "General" }), /* @__PURE__ */ i.createElement(Ba.ForestPlot, { name: "Forest Plot Settings" }), /* @__PURE__ */ i.createElement(Ba.Sankey, { name: "Sankey" }), e.visualizationType !== "Pie" && e.visualizationType !== "Forest Plot" && e.visualizationType !== "Sankey" && /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(_n, null, "Data Series ", (!e.series || e.series.length === 0 || e.visualizationType === "Paired Bar" && e.series.length < 2) && /* @__PURE__ */ i.createElement(Vu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(Nn, null, (!e.series || e.series.length === 0) && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement("p", { className: "warning" }, "At least one series is required"), (!e.series || e.series.length === 0 || e.series.length < 2) && e.visualizationType === "Paired Bar" && /* @__PURE__ */ i.createElement("p", { className: "warning" }, "Select two data series for paired bar chart (e.g., Male and Female)."), /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    Tt,
    {
      fieldName: "visualizationType",
      label: "Add Data Series",
      initial: "Select",
      onChange: (ne) => {
        ne.target.value !== "" && ne.target.value !== "Select" && Fn(ne.target.value), ne.target.value = "";
      },
      options: K()
    }
  ), e.series && e.series.length !== 0 && /* @__PURE__ */ i.createElement(Ba.Series.Wrapper, { getColumns: K }, /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("legend", { className: "edit-label float-left" }, "Displaying"), /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "A data series is a set of related data points plotted in a chart and typically represented in the chart legend.")))), /* @__PURE__ */ i.createElement($h, { onDragEnd: ({ source: ne, destination: J }) => Ze(ne.index, J.index) }, /* @__PURE__ */ i.createElement(Bh, { droppableId: "filter_order" }, (ne) => /* @__PURE__ */ i.createElement("ul", { ...ne.droppableProps, className: "series-list", ref: ne.innerRef }, /* @__PURE__ */ i.createElement(Ba.Series.List, { series: e.series, getItemStyle: Sn, sortableItemStyles: Lt, chartsWithOptions: yn }), ne.placeholder))))), e.series && e.series.length <= 1 && e.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Confidence Keys"), /* @__PURE__ */ i.createElement(Tt, { value: e.confidenceKeys.upper || "", section: "confidenceKeys", fieldName: "upper", label: "Upper", updateField: _e, initial: "Select", options: K() }), /* @__PURE__ */ i.createElement(Tt, { value: e.confidenceKeys.lower || "", section: "confidenceKeys", fieldName: "lower", label: "Lower", updateField: _e, initial: "Select", options: K() })), At() && e.series && e.series.length === 1 && /* @__PURE__ */ i.createElement(Tt, { fieldName: "visualizationType", label: "Rank by Value", initial: "Select", onChange: (ne) => Me(ne.target.value), options: ["asc", "desc"] }), Ye() && /* @__PURE__ */ i.createElement(bw, { config: e, updateConfig: t, data: n }))), /* @__PURE__ */ i.createElement(Ba.BoxPlot, { name: "Measures" }), ct() && /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(_n, null, e.visualizationType === "Pie" ? "Data Format" : e.orientation === "vertical" ? "Left Value Axis" : "Value Axis", e.visualizationType === "Pie" && !e.yAxis.dataKey && /* @__PURE__ */ i.createElement(Vu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(Nn, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement(
    Tt,
    {
      value: e.yAxis.dataKey || "",
      section: "yAxis",
      fieldName: "dataKey",
      label: "Data Column",
      initial: "Select",
      required: !0,
      updateField: _e,
      options: K(!1),
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Select the source data to be visually represented.")))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ge, { value: e.yAxis.label, section: "yAxis", fieldName: "label", label: "Label ", updateField: _e }), e.runtime.seriesKeys && e.runtime.seriesKeys.length === 1 && !["Box Plot", "Deviation Bar", "Forest Plot"].includes(e.visualizationType) && /* @__PURE__ */ i.createElement(mt, { value: e.isLegendValue, fieldName: "isLegendValue", label: "Use Legend Value in Hover", updateField: _e }), /* @__PURE__ */ i.createElement(Ge, { value: e.yAxis.numTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "numTicks", label: "Number of ticks", className: "number-narrow", updateField: _e }), /* @__PURE__ */ i.createElement(
    Ge,
    {
      value: e.yAxis.size,
      type: "number",
      section: "yAxis",
      fieldName: "size",
      label: e.orientation === "horizontal" ? "Size (Height)" : "Size (Width)",
      className: "number-narrow",
      updateField: _e,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, `Increase the size if elements in the ${e.orientation} axis are being crowded or hidden behind other elements.  Decrease if less space is required for the value axis.`)))
    }
  ), e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(mt, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: _e }), (e.orientation === "vertical" || !e.isResponsiveTicks) && /* @__PURE__ */ i.createElement(Ge, { value: e.yAxis.tickRotation || 0, type: "number", min: 0, section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: _e }), e.isResponsiveTicks && e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(
    Ge,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: _e,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" && /* @__PURE__ */ i.createElement(Ge, { value: e.xAxis.labelOffset, section: "xAxis", fieldName: "labelOffset", label: "Label offset", type: "number", className: "number-narrow", updateField: _e }), qe() && /* @__PURE__ */ i.createElement(mt, { value: e.yAxis.gridLines, section: "yAxis", fieldName: "gridLines", label: "Show Gridlines", updateField: _e }), /* @__PURE__ */ i.createElement(mt, { value: e.yAxis.enablePadding, section: "yAxis", fieldName: "enablePadding", label: "Add Padding to Value Axis Scale", updateField: _e }), e.yAxis.enablePadding && /* @__PURE__ */ i.createElement(Ge, { type: "number", section: "yAxis", fieldName: "scalePadding", label: "Padding Percentage", className: "number-narrow", updateField: _e, value: e.yAxis.scalePadding }), e.visualizationSubType === "regular" && e.visualizationType !== "Forest Plot" && /* @__PURE__ */ i.createElement(mt, { value: e.useLogScale, fieldName: "useLogScale", label: "use logarithmic scale", updateField: _e })), /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ i.createElement(mt, { value: e.dataFormat.commas, section: "dataFormat", fieldName: "commas", label: "Add commas", updateField: _e }), /* @__PURE__ */ i.createElement(
    mt,
    {
      value: e.dataFormat.abbreviated,
      section: "dataFormat",
      fieldName: "abbreviated",
      label: "Abbreviate Axis Values",
      updateField: _e,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  ), /* @__PURE__ */ i.createElement(Ge, { value: e.dataFormat.roundTo ? e.dataFormat.roundTo : 0, type: "number", section: "dataFormat", fieldName: "roundTo", label: "Round to decimal point", className: "number-narrow", updateField: _e, min: 0 }), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(
    Ge,
    {
      value: e.dataFormat.prefix,
      section: "dataFormat",
      fieldName: "prefix",
      label: "Prefix",
      updateField: _e,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    Ge,
    {
      value: e.dataFormat.suffix,
      section: "dataFormat",
      fieldName: "suffix",
      label: "Suffix",
      updateField: _e,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), e.orientation === "horizontal" ? (
    // horizontal - x is vertical y is horizontal
    /* @__PURE__ */ i.createElement(i.Fragment, null, lt() && /* @__PURE__ */ i.createElement(mt, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: _e }), it() && /* @__PURE__ */ i.createElement(mt, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Label", updateField: _e }), st() && /* @__PURE__ */ i.createElement(mt, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: _e }), ze() && /* @__PURE__ */ i.createElement(Ge, { value: e.xAxis.max, section: "xAxis", fieldName: "max", label: "max value", type: "number", placeholder: "Auto", updateField: _e }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, It.maxMsg), oe() && /* @__PURE__ */ i.createElement(Ge, { value: e.xAxis.min, section: "xAxis", fieldName: "min", type: "number", label: "min value", placeholder: "Auto", updateField: _e }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, It.minMsg), e.visualizationType === "Deviation Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ge, { value: e.xAxis.target, section: "xAxis", fieldName: "target", type: "number", label: "Deviation point", placeholder: "Auto", updateField: _e }), /* @__PURE__ */ i.createElement(Ge, { value: e.xAxis.targetLabel || "Target", section: "xAxis", fieldName: "targetLabel", type: "text", label: "Deviation point Label", updateField: _e }), /* @__PURE__ */ i.createElement(mt, { value: e.xAxis.showTargetLabel, section: "xAxis", fieldName: "showTargetLabel", label: "Show Deviation point label", updateField: _e })))
  ) : e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(mt, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: _e }), /* @__PURE__ */ i.createElement(mt, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Label", updateField: _e }), /* @__PURE__ */ i.createElement(mt, { value: e.yAxis.hideTicks, section: "yAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: _e }), /* @__PURE__ */ i.createElement(Ge, { value: e.yAxis.max, section: "yAxis", fieldName: "max", type: "number", label: "left axis max value", placeholder: "Auto", updateField: _e }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, It.maxMsg), /* @__PURE__ */ i.createElement(Ge, { value: e.yAxis.min, section: "yAxis", fieldName: "min", type: "number", label: "left axis min value", placeholder: "Auto", updateField: _e }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, It.minMsg)), ue() && e.orientation !== "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(zi, { allowZeroExpanded: !0 }, (dt = (pt = e.yAxis) == null ? void 0 : pt.anchors) == null ? void 0 : dt.map((ne, J) => /* @__PURE__ */ i.createElement(On, { className: "series-item series-item--chart", key: `yaxis-anchors-2-${J}` }, /* @__PURE__ */ i.createElement(Mn, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(_n, { className: "accordion__button accordion__button" }, "Anchor ", J + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (ce) => {
        ce.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re.splice(J, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[J].value ? e.yAxis.anchors[J].value : "",
      onChange: (ce) => {
        ce.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re[J].value = ce.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
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
        const Re = [...e.yAxis.anchors];
        Re[J].color = ce.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.yAxis.anchors[J].lineStyle || "",
      onChange: (ce) => {
        const Re = [...e.yAxis.anchors];
        Re[J].lineStyle = ce.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
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
  )), ue() && e.orientation === "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(zi, { allowZeroExpanded: !0 }, (Dn = (Ft = e.xAxis) == null ? void 0 : Ft.anchors) == null ? void 0 : Dn.map((ne, J) => /* @__PURE__ */ i.createElement(On, { className: "series-item series-item--chart", key: `xaxis-anchors-${J}` }, /* @__PURE__ */ i.createElement(Mn, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(_n, { className: "accordion__button accordion__button" }, "Anchor ", J + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (ce) => {
        ce.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re.splice(J, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[J].value ? e.xAxis.anchors[J].value : "",
      onChange: (ce) => {
        ce.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re[J].value = ce.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
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
        const Re = [...e.xAxis.anchors];
        Re[J].color = ce.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.xAxis.anchors[J].lineStyle || "",
      onChange: (ce) => {
        const Re = [...e.xAxis.anchors];
        Re[J].lineStyle = ce.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
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
  )))), un && /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(_n, null, "Right Value Axis")), /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement(Ge, { value: e.yAxis.rightLabel, section: "yAxis", fieldName: "rightLabel", label: "Label", updateField: _e }), /* @__PURE__ */ i.createElement(Ge, { value: e.yAxis.rightNumTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "rightNumTicks", label: "Number of ticks", className: "number-narrow", updateField: _e }), /* @__PURE__ */ i.createElement(Ge, { value: e.yAxis.rightAxisSize, type: "number", section: "yAxis", fieldName: "rightAxisSize", label: "Size (Width)", className: "number-narrow", updateField: _e }), /* @__PURE__ */ i.createElement(Ge, { value: e.yAxis.rightLabelOffsetSize, type: "number", section: "yAxis", fieldName: "rightLabelOffsetSize", label: "Label Offset", className: "number-narrow", updateField: _e }), /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ i.createElement(mt, { value: e.dataFormat.rightCommas, section: "dataFormat", fieldName: "rightCommas", label: "Add commas", updateField: _e }), /* @__PURE__ */ i.createElement(Ge, { value: e.dataFormat.rightRoundTo, type: "number", section: "dataFormat", fieldName: "rightRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: _e, min: 0 }), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(
    Ge,
    {
      value: e.dataFormat.rightPrefix,
      section: "dataFormat",
      fieldName: "rightPrefix",
      label: "Prefix",
      updateField: _e,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    Ge,
    {
      value: e.dataFormat.rightSuffix,
      section: "dataFormat",
      fieldName: "rightSuffix",
      label: "Suffix",
      updateField: _e,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), /* @__PURE__ */ i.createElement(mt, { value: e.yAxis.rightHideAxis, section: "yAxis", fieldName: "rightHideAxis", label: "Hide Axis", updateField: _e }), /* @__PURE__ */ i.createElement(mt, { value: e.yAxis.rightHideLabel, section: "yAxis", fieldName: "rightHideLabel", label: "Hide Label", updateField: _e }), /* @__PURE__ */ i.createElement(mt, { value: e.yAxis.rightHideTicks, section: "yAxis", fieldName: "rightHideTicks", label: "Hide Ticks", updateField: _e }), /* @__PURE__ */ i.createElement(Ge, { value: e.yAxis.max, section: "yAxis", fieldName: "rightMax", type: "number", label: "right axis max value", placeholder: "Auto", updateField: _e }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, It.rightMaxMessage), /* @__PURE__ */ i.createElement(Ge, { value: e.yAxis.min, section: "yAxis", fieldName: "rightMin", type: "number", label: "right axis min value", placeholder: "Auto", updateField: _e }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, It.minMsg))), De() && /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(_n, null, e.visualizationType === "Pie" ? "Segments" : "Date/Category Axis", !e.xAxis.dataKey && /* @__PURE__ */ i.createElement(Vu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(Nn, null, e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, e.visualizationType !== "Forest Plot" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Data Scaling Type", /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none", display: "inline-block" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, "Linear scales are employed for quantitative data, while time scales are used for time-series data."))), /* @__PURE__ */ i.createElement(
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
  )), ke() && /* @__PURE__ */ i.createElement(
    Ge,
    {
      value: e.xAxis.padding,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "padding",
      label: "Padding (Percent)",
      className: "number-narrow",
      updateField: _e,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "For use with date scale. Extends the earliest and latest dates represented on the scale by the percentage specified.")))
    }
  )), /* @__PURE__ */ i.createElement(
    Tt,
    {
      value: e.xAxis.dataKey || Ht() || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Data Key",
      initial: "Select",
      required: !0,
      updateField: _e,
      options: K(!1),
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
    }
  )), e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement(
    Tt,
    {
      value: e.xAxis.dataKey || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Segment Labels",
      initial: "Select",
      required: !0,
      updateField: _e,
      options: K(!1),
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Select the source row or column that contains the segment labels. Depending on the data structure, it may be listed as "Key."')))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ge, { value: e.xAxis.label, section: "xAxis", fieldName: "label", label: "Label", updateField: _e }), e.xAxis.type === "continuous" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    Ge,
    {
      value: e.dataFormat.bottomPrefix,
      section: "dataFormat",
      fieldName: "bottomPrefix",
      label: "Prefix",
      updateField: _e,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    Ge,
    {
      value: e.dataFormat.bottomSuffix,
      section: "dataFormat",
      fieldName: "bottomSuffix",
      label: "Suffix",
      updateField: _e,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    mt,
    {
      value: e.dataFormat.bottomAbbreviated,
      section: "dataFormat",
      fieldName: "bottomAbbreviated",
      label: "Abbreviate Axis Values",
      updateField: _e,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  )), En(e.xAxis) && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("p", { style: { padding: "1.5em 0 0.5em", fontSize: ".9rem", lineHeight: "1rem" } }, "Format how charts should parse and display your dates using", " ", /* @__PURE__ */ i.createElement("a", { href: "https://github.com/d3/d3-time-format#locale_format", target: "_blank", rel: "noreferrer" }, "these guidelines"), "."), /* @__PURE__ */ i.createElement(
    Ge,
    {
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "This field specifies the pattern used to read and interpret dates in your dataset, ensuring the dates are correctly understood and processed. "))),
      value: e.xAxis.dateParseFormat,
      section: "xAxis",
      fieldName: "dateParseFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "Date Parse Format",
      updateField: _e
    }
  ), /* @__PURE__ */ i.createElement(
    Ge,
    {
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, " Adjusts the date display format on the axis for clear, visual date representation."))),
      value: e.xAxis.dateDisplayFormat,
      section: "xAxis",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "AXIS DATE DISPLAY FORMAT",
      updateField: _e
    }
  ), /* @__PURE__ */ i.createElement(
    Ge,
    {
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Specify a custom format for displaying dates in data table. If left empty, dates will adopt the Axis Date Display format. "))),
      value: e.table.dateDisplayFormat,
      section: "table",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "DATA TABLE DATE DISPLAY FORMAT",
      updateField: _e
    }
  ), /* @__PURE__ */ i.createElement(
    Ge,
    {
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Specify a custom format for displaying dates on hovers. If left empty, dates will adopt the Axis Date Display format. "))),
      value: e.tooltips.dateDisplayFormat,
      section: "tooltips",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "HOVER DATE DISPLAY FORMAT",
      updateField: _e
    }
  )), /* @__PURE__ */ i.createElement(
    mt,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: e.xAxis.type === "date" ? "Limit by start and/or end dates" : "Exclude one or more values",
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "When this option is checked, you can select source-file values for exclusion from the date/category axis. "))),
      updateField: _e
    }
  ), e.exclusions.active && /* @__PURE__ */ i.createElement(i.Fragment, null, e.xAxis.type === "categorical" && /* @__PURE__ */ i.createElement(i.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ i.createElement($t, null)), /* @__PURE__ */ i.createElement(
    Tt,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (ne) => {
        ne.target.value !== "" && ne.target.value !== "Select" && Xe(ne.target.value), ne.target.value = "";
      },
      options: et(e.xAxis.dataKey, !0)
    }
  )), e.xAxis.type === "date" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ge, { type: "date", section: "exclusions", fieldName: "dateStart", label: "Start Date", updateField: _e, value: e.exclusions.dateStart || "" }), /* @__PURE__ */ i.createElement(Ge, { type: "date", section: "exclusions", fieldName: "dateEnd", label: "End Date", updateField: _e, value: e.exclusions.dateEnd || "" }))), ie() && /* @__PURE__ */ i.createElement(Ge, { value: e.xAxis.numTicks, placeholder: "Auto", type: "number", min: 1, section: "xAxis", fieldName: "numTicks", label: "Number of ticks", className: "number-narrow", updateField: _e }), Zt() && /* @__PURE__ */ i.createElement(Ge, { value: e.xAxis.size, type: "number", min: 0, section: "xAxis", fieldName: "size", label: e.orientation === "horizontal" ? "Size (Width)" : "Size (Height)", className: "number-narrow", updateField: _e }), ke() && /* @__PURE__ */ i.createElement(Ge, { value: e.xAxis.padding, type: "number", min: 0, section: "xAxis", fieldName: "padding", label: "Padding (Percent)", className: "number-narrow", updateField: _e }), (e.xAxis.type === "continuous" || e.forestPlot.type === "Logarithmic") && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(mt, { value: e.dataFormat.bottomCommas, section: "dataFormat", fieldName: "bottomCommas", label: "Add commas", updateField: _e }), /* @__PURE__ */ i.createElement(Ge, { value: e.dataFormat.bottomRoundTo, type: "number", section: "dataFormat", fieldName: "bottomRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: _e, min: 0 })), an() && e.orientation === "vertical" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(mt, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: _e }), (e.orientation === "horizontal" || !e.isResponsiveTicks) && Oe() && /* @__PURE__ */ i.createElement(Ge, { value: e.xAxis.tickRotation, type: "number", min: 0, section: "xAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: _e }), e.orientation === "vertical" && e.isResponsiveTicks && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(
    Ge,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: _e,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" ? /* @__PURE__ */ i.createElement(i.Fragment, null, Ce() && /* @__PURE__ */ i.createElement(mt, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: _e }), He() && /* @__PURE__ */ i.createElement(mt, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Label", updateField: _e })) : /* @__PURE__ */ i.createElement(i.Fragment, null, Ce() && /* @__PURE__ */ i.createElement(mt, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: _e }), He() && /* @__PURE__ */ i.createElement(mt, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Label", updateField: _e }), ge() && /* @__PURE__ */ i.createElement(mt, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: _e })), ((Tn = e.series) == null ? void 0 : Tn.length) === 1 && e.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", { htmlFor: "barHighlight" }, "Bar Highlighting"), e.series.length === 1 && Kt.map((ne, J) => /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("div", { className: "edit-block", key: `highlighted-bar-${J}` }, /* @__PURE__ */ i.createElement("button", { className: "remove-column", onClick: (ce) => xn(ce, J) }, "Remove"), /* @__PURE__ */ i.createElement("p", null, "Highlighted Bar ", J + 1), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Value"), /* @__PURE__ */ i.createElement("select", { value: e.highlightedBarValues[J].value, onChange: (ce) => Pn(ce, J) }, /* @__PURE__ */ i.createElement("option", { value: "" }, "- Select Value -"), Vn && [...new Set(Vn)].sort().map((ce) => /* @__PURE__ */ i.createElement("option", { key: `special-class-value-option-${J}-${ce}` }, ce)))), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Color"), /* @__PURE__ */ i.createElement("input", { type: "text", value: e.highlightedBarValues[J].color ? e.highlightedBarValues[J].color : "", onChange: (ce) => Jt(ce, J) })), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Border Width"), /* @__PURE__ */ i.createElement("input", { max: "5", min: "0", type: "number", value: e.highlightedBarValues[J].borderWidth ? e.highlightedBarValues[J].borderWidth : "", onChange: (ce) => yr(ce, J) })), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Legend Label"), /* @__PURE__ */ i.createElement("input", { type: "text", value: e.highlightedBarValues[J].legendLabel ? e.highlightedBarValues[J].legendLabel : "", onChange: (ce) => wn(ce, J) }))))), /* @__PURE__ */ i.createElement("button", { className: "btn full-width", onClick: (ne) => zn(ne) }, "Add Highlighted Bar"))), e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    mt,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: "Exclude one or more values",
      updateField: _e,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "When this option is checked, you can select values for exclusion from the pie segments.")))
    }
  ), e.exclusions.active && /* @__PURE__ */ i.createElement(i.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ i.createElement($t, null)), /* @__PURE__ */ i.createElement(
    Tt,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (ne) => {
        ne.target.value !== "" && ne.target.value !== "Select" && Xe(ne.target.value), ne.target.value = "";
      },
      options: et(e.xAxis.dataKey, !0)
    }
  ))), ue() && e.orientation !== "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(zi, { allowZeroExpanded: !0 }, (Xn = (Cn = e.xAxis) == null ? void 0 : Cn.anchors) == null ? void 0 : Xn.map((ne, J) => /* @__PURE__ */ i.createElement(On, { className: "series-item series-item--chart", key: `xaxis-anchors-2-${J}` }, /* @__PURE__ */ i.createElement(Mn, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(_n, { className: "accordion__button accordion__button" }, "Anchor ", J + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (ce) => {
        ce.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re.splice(J, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[J].value ? e.xAxis.anchors[J].value : "",
      onChange: (ce) => {
        ce.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re[J].value = ce.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
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
        const Re = [...e.xAxis.anchors];
        Re[J].color = ce.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.xAxis.anchors[J].lineStyle || "",
      onChange: (ce) => {
        const Re = [...e.xAxis.anchors];
        Re[J].lineStyle = ce.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
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
  )), ue() && e.orientation === "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(zi, { allowZeroExpanded: !0 }, (hr = (In = e.yAxis) == null ? void 0 : In.anchors) == null ? void 0 : hr.map((ne, J) => /* @__PURE__ */ i.createElement(On, { className: "series-item series-item--chart", key: `accordion-yaxis-anchors-${J}` }, /* @__PURE__ */ i.createElement(Mn, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(_n, { className: "accordion__button accordion__button" }, "Anchor ", J + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (ce) => {
        ce.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re.splice(J, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[J].value ? e.yAxis.anchors[J].value : "",
      onChange: (ce) => {
        ce.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re[J].value = ce.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
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
        const Re = [...e.yAxis.anchors];
        Re[J].color = ce.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.yAxis.anchors[J].lineStyle || "",
      onChange: (ce) => {
        const Re = [...e.yAxis.anchors];
        Re[J].lineStyle = ce.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
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
  )))), /* @__PURE__ */ i.createElement(Ba.Regions, { name: "Regions" }), e.visualizationType !== "Box Plot" && /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(_n, null, "Columns")), /* @__PURE__ */ i.createElement(Nn, null, e.type !== "navigation" && /* @__PURE__ */ i.createElement("fieldset", { className: "primary-fieldset edit-block" }, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Additional Columns", /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "You can specify additional columns to display in tooltips and / or the supporting data table."))))), Ut.map((ne) => /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: ne }, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (J) => {
        J.preventDefault(), vn(ne);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.columns[ne] ? e.columns[ne].name : K()[0],
      onChange: (J) => {
        _t(ne, "name", J.target.value);
      }
    },
    K().map((J) => /* @__PURE__ */ i.createElement("option", null, J))
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Associate to Series"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.columns[ne] ? e.columns[ne].series : "",
      onChange: (J) => {
        _t(ne, "series", J.target.value);
      }
    },
    /* @__PURE__ */ i.createElement("option", { value: "" }, "Select series"),
    e.series.map((J) => /* @__PURE__ */ i.createElement("option", null, J.dataKey))
  )), /* @__PURE__ */ i.createElement(Ge, { value: e.columns[ne].label, section: "columns", subsection: ne, fieldName: "label", label: "Label", updateField: _e }), /* @__PURE__ */ i.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ i.createElement("li", { className: "three-col" }, /* @__PURE__ */ i.createElement(Ge, { value: e.columns[ne].prefix, section: "columns", subsection: ne, fieldName: "prefix", label: "Prefix", updateField: _e }), /* @__PURE__ */ i.createElement(Ge, { value: e.columns[ne].suffix, section: "columns", subsection: ne, fieldName: "suffix", label: "Suffix", updateField: _e }), /* @__PURE__ */ i.createElement(Ge, { type: "number", value: e.columns[ne].roundToPlace, section: "columns", subsection: ne, fieldName: "roundToPlace", label: "Round", updateField: _e })), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[ne].commas,
      onChange: (J) => {
        _t(ne, "commas", J.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Add Commas to Numbers"))), /* @__PURE__ */ i.createElement("li", null, e.table.showVertical && /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[ne].dataTable,
      onChange: (J) => {
        _t(ne, "dataTable", J.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in Data Table"))), e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[ne].showInViz,
      onChange: (J) => {
        _t(ne, "showInViz", J.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in Visualization"))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[ne].tooltips || !1,
      onChange: (J) => {
        Lr(ne, J.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in tooltip"))), e.visualizationType === "Forest Plot" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[ne].forestPlot || !1,
      onChange: (J) => {
        _t(ne, "forestPlot", J.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in Forest Plot"))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[ne].forestPlotAlignRight || !1,
      onChange: (J) => {
        _t(ne, "forestPlotAlignRight", J.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Align Right"))), !e.columns[ne].forestPlotAlignRight && /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "text" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Forest Plot Starting Point"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "number",
      value: e.columns[ne].forestPlotStartingPoint || 0,
      onChange: (J) => {
        _t(ne, "forestPlotStartingPoint", J.target.value);
      }
    }
  ))))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (ne) => {
        ne.preventDefault(), Nt(Ut.length + 1);
      }
    },
    "Add Column"
  )), e.legend.type === "category" && /* @__PURE__ */ i.createElement("fieldset", { className: "primary-fieldset edit-block" }, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Additional Category", /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "You can provide additional categories to ensure they appear in the legend"))))), e.legend.additionalCategories && e.legend.additionalCategories.map((ne, J) => /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: ne }, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (ce) => {
        ce.preventDefault();
        const Re = [...e.legend.additionalCategories];
        Re.splice(J, 1), _e("legend", null, "additionalCategories", Re);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement(
    Ge,
    {
      value: ne,
      label: "Category",
      section: "legend",
      subsection: null,
      fieldName: "additionalCategories",
      updateField: (ce, Re, Wt, pn) => {
        const Hn = [...e.legend.additionalCategories];
        Hn[J] = pn, _e(ce, Re, Wt, Hn);
      }
    }
  ))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (ne) => {
        ne.preventDefault();
        const J = [...e.legend.additionalCategories || []];
        J.push(""), _e("legend", null, "additionalCategories", J);
      }
    },
    "Add Category"
  )))), ee() && /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(_n, null, "Legend")), /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement(mt, { value: e.legend.reverseLabelOrder, section: "legend", fieldName: "reverseLabelOrder", label: "Reverse Labels", updateField: _e }), /* @__PURE__ */ i.createElement(
    mt,
    {
      value: !!e.legend.hide,
      section: "legend",
      fieldName: "hide",
      label: "Hide Legend",
      updateField: _e,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "With a single-series chart, consider hiding the legend to reduce visual clutter.")))
    }
  ), e.visualizationType === "Line" && /* @__PURE__ */ i.createElement(mt, { value: e.legend.lineMode, section: "legend", fieldName: "lineMode", label: "Show Lined Style Legend", updateField: _e }), e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1 && /* @__PURE__ */ i.createElement(Tt, { value: e.legend.colorCode, section: "legend", fieldName: "colorCode", label: "Color code by category", initial: "Select", updateField: _e, options: Ne(n) }), /* @__PURE__ */ i.createElement(Tt, { value: e.legend.behavior, section: "legend", fieldName: "behavior", label: "Legend Behavior (When clicked)", updateField: (...[ne, , J, ce]) => xr(ne, J, ce), options: ["highlight", "isolate"] }), Ae() && /* @__PURE__ */ i.createElement(mt, { value: e.legend.axisAlign, fieldName: "axisAlign", section: "legend", label: "Align to Axis on Isolate", updateField: _e }), e.legend.behavior === "highlight" && e.tooltips.singleSeries && /* @__PURE__ */ i.createElement(mt, { value: e.legend.highlightOnHover, section: "legend", fieldName: "highlightOnHover", label: "HIGHLIGHT DATA SERIES ON HOVER", updateField: _e }), W && e.legend.behavior === "isolate" && !fr && /* @__PURE__ */ i.createElement("fieldset", { className: "primary-fieldset edit-block", key: "additional-highlight-values" }, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Isolate Data Series", /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "You can choose data series that are shown on load. Others will be added when the user clicks on them in the legend."))))), e.legend.seriesHighlight && e.legend.seriesHighlight.map((ne, J) => /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: `${ne}-${J}` }, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (ce) => {
        ce.preventDefault();
        const Re = [...e.legend.seriesHighlight];
        Re.splice(J, 1), _e("legend", null, "seriesHighlight", Re), Re.length || L();
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement(
    Tt,
    {
      value: e.legend.seriesHighlight[J],
      fieldName: "seriesHighlight",
      label: "Isolate Value",
      onChange: (ce) => {
        const Re = [...e.legend.seriesHighlight];
        Re.includes(ce.target.value) || (Re[J] = ce.target.value, vr([...Re]));
      },
      options: Zn()
    }
  ))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (ne) => {
        ne.preventDefault();
        const J = Zn(), ce = [...e.legend.seriesHighlight];
        if (ce.length < J.length) {
          const [Wt] = J.filter((pn) => !ce.includes(pn));
          ce.push(Wt), vr([...ce]);
        }
      }
    },
    "Add Isolate Value"
  )), /* @__PURE__ */ i.createElement(Ge, { value: e.legend.label, section: "legend", fieldName: "label", label: "Title", updateField: _e }), /* @__PURE__ */ i.createElement(Tt, { value: e.legend.position, section: "legend", fieldName: "position", label: "Position", updateField: _e, options: ["right", "left", "bottom"] }), e.legend.position === "bottom" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(mt, { value: e.legend.singleRow, section: "legend", fieldName: "singleRow", label: "Single Row Legend", updateField: _e }), /* @__PURE__ */ i.createElement(mt, { value: e.legend.verticalSorted, section: "legend", fieldName: "verticalSorted", label: "Vertical sorted Legend", updateField: _e })), /* @__PURE__ */ i.createElement(Ge, { type: "textarea", value: e.legend.description, updateField: _e, section: "legend", fieldName: "description", label: "Legend Description" }))), We() && /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(_n, null, "Filters")), /* @__PURE__ */ i.createElement(Nn, null, e.filters && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    Tt,
    {
      value: e.filterBehavior,
      fieldName: "filterBehavior",
      label: "Filter Behavior",
      updateField: _e,
      options: ["Apply Button", "Filter Change"],
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(St, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, 'The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.')))
    }
  ), /* @__PURE__ */ i.createElement("br", null)), e.filters && /* @__PURE__ */ i.createElement("ul", { className: "filters-list" }, e.filters.map((ne, J) => ne.type === "url" ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: J }, /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        Ln(J);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Filter"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: ne.columnName,
      onChange: (ce) => {
        gn("columnName", J, ce.target.value);
      }
    },
    /* @__PURE__ */ i.createElement("option", { value: "" }, "- Select Option -"),
    nt().map((ce, Re) => /* @__PURE__ */ i.createElement("option", { value: ce, key: Re }, ce))
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-showDropdown column-heading" }, "Show Filter Input"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: ne.showDropdown === void 0 ? !0 : ne.showDropdown,
      onChange: (ce) => {
        gn("showDropdown", J, ce.target.checked);
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Filter Style"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: ne.filterStyle,
      onChange: (ce) => {
        gn("filterStyle", J, ce.target.value);
      }
    },
    hn.map((ce, Re) => /* @__PURE__ */ i.createElement("option", { key: `filter-style-${Re}`, value: ce }, ce))
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Label"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: ne.label,
      onChange: (ce) => {
        gn("label", J, ce.target.value);
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Default Value Set By Query String Parameter"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: ne.setByQueryParameter,
      onChange: (ce) => {
        gn("setByQueryParameter", J, ce.target.value);
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-filterOrder column-heading" }, "Filter Order"), /* @__PURE__ */ i.createElement("select", { value: ne.order ? ne.order : "asc", onChange: (ce) => gn("order", J, ce.target.value) }, tn.map((ce, Re) => /* @__PURE__ */ i.createElement("option", { value: ce.value, key: `filter-${Re}` }, ce.label))), ne.order === "cust" && /* @__PURE__ */ i.createElement($h, { onDragEnd: ({ source: ce, destination: Re }) => zt(ce.index, Re.index, J, e.filters[J]) }, /* @__PURE__ */ i.createElement(Bh, { droppableId: "filter_order" }, (ce) => {
    var Re;
    return /* @__PURE__ */ i.createElement("ul", { ...ce.droppableProps, className: "sort-list", ref: ce.innerRef, style: { marginTop: "1em" } }, (Re = e.filters[J]) == null ? void 0 : Re.values.map((Wt, pn) => /* @__PURE__ */ i.createElement(bm, { key: Wt, draggableId: `draggableFilter-${Wt}`, index: pn }, (Hn, Dr) => /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("div", { className: Dr.isDragging ? "currently-dragging" : "", style: Sn(Dr.isDragging, Hn.draggableProps.style), ref: Hn.innerRef, ...Hn.draggableProps, ...Hn.dragHandleProps }, Wt)))), ce.placeholder);
  })))))), !e.filters && /* @__PURE__ */ i.createElement("p", { style: { textAlign: "center" } }, "There are currently no filters."), /* @__PURE__ */ i.createElement("button", { type: "button", onClick: kn, className: "btn full-width" }, "Add Filter"))), /* @__PURE__ */ i.createElement(Ba.Visual, { name: "Visual" }), e.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(_n, null, "Data Table")), /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement(Iy, { config: e, columns: Object.keys(n[0] || {}), updateField: _e, isDashboard: g, isLoadedFromUrl: Mt }), " "))), e.type !== "Spark Line" && /* @__PURE__ */ i.createElement(by, { loadConfig: t, state: e, convertStateToConfig: wt })))));
}, mm = (e) => {
  let t = "", r = Math.abs(e);
  return r >= 1e9 ? (t = "B", e = e / 1e9) : r >= 1e6 ? (t = "M", e = e / 1e6) : r >= 1e3 && (t = "K", e = e / 1e3), e + t;
}, Ew = (e) => {
  e.sort((d, g) => d - g);
  const t = Math.floor(e.length / 2), r = e.length % 2 === 0, n = r ? e.slice(0, t) : e.slice(0, t + 1), a = r ? e.slice(t) : e.slice(t + 1), o = Math.floor(n.length / 2), f = r ? (n[o - 1] + n[o]) / 2 : n[o], s = Math.floor(a.length / 2), c = r ? (a[s - 1] + a[s]) / 2 : a[s];
  return { q1: f, q3: c };
}, kw = (e, t) => e.toString().localeCompare(t.toString(), "en", { numeric: !0 }), ww = (e, t) => t.toString().localeCompare(e.toString(), "en", { numeric: !0 }), Ia = (e, t) => {
  let r = [];
  return t.forEach((n) => {
    let a = !0;
    e.filter((o) => o.type !== "url").forEach((o) => {
      n[o.columnName] != o.active && (a = !1);
    }), a && r.push(n);
  }), r;
}, Tw = [
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
], gm = (e = "#000000", t = !1) => {
  let r = bs(e), n = t ? r.brighten(0.5).hex() : r.saturate(1.3).hex();
  return [e, n, r.darken(0.3).hex()];
}, ym = (e, t, r) => {
  var g, v;
  const n = t.position === "bottom" || ["sm", "xs", "xxs"].includes(r), a = e.orientation === "horizontal", o = Number(e.xAxis.tickRotation) > 0 ? Number(e.xAxis.tickRotation) : 0, f = (g = e == null ? void 0 : e.brush) == null ? void 0 : g.active, s = 20, c = (v = e == null ? void 0 : e.brush) == null ? void 0 : v.height;
  let d = 0;
  return !n && a && !e.yAxis.label && (d = Number(e.xAxis.labelOffset)), !n && a && e.yAxis.label && !e.isResponsiveTicks && (d = Number(e.runtime.xAxis.size) + Number(e.xAxis.labelOffset)), !n && a && e.yAxis.label && e.isResponsiveTicks && (d = e.dynamicMarginTop + s), !n && a && !e.yAxis.label && e.isResponsiveTicks && (d = e.dynamicMarginTop ? e.dynamicMarginTop - s : Number(e.xAxis.labelOffset) - s), !n && a && e.yAxis.label && e.isResponsiveTicks && (d = e.dynamicMarginTop ? e.dynamicMarginTop + s : Number(e.xAxis.labelOffset)), !a && !n && e.xAxis.label && o && !e.isResponsiveTicks && (d = f ? c + e.xAxis.tickWidthMax + -e.xAxis.size + e.xAxis.labelOffset + s : e.xAxis.tickWidthMax + s + -e.xAxis.size + e.xAxis.labelOffset), !a && !n && !e.xAxis.label && o && e.isResponsiveTicks, !a && !n && !e.xAxis.label && o && !e.dynamicMarginTop && !e.isResponsiveTicks && (d = f ? e.xAxis.tickWidthMax + c + s + -e.xAxis.size : 0), !a && !n && e.xAxis.label && !o && !e.isResponsiveTicks && (d = f ? c + -e.xAxis.size + e.xAxis.labelOffset + s : -e.xAxis.size + e.xAxis.labelOffset + s), !a && !n && e.xAxis.label && e.dynamicMarginTop && e.isResponsiveTicks && (d = f ? c + e.xAxis.labelOffset + -e.xAxis.size + e.xAxis.tickWidthMax : e.dynamicMarginTop + -e.xAxis.size + s), !a && !n && !e.xAxis.label && e.dynamicMarginTop && e.isResponsiveTicks && (d = f ? c + e.xAxis.labelOffset + -e.xAxis.size + e.xAxis.tickWidthMax : e.dynamicMarginTop + -e.xAxis.size - s), !a && !n && e.xAxis.label && !e.dynamicMarginTop && e.isResponsiveTicks && (d = f ? c + e.xAxis.labelOffset + -e.xAxis.size + 25 : e.xAxis.labelOffset + -e.xAxis.size + s), !a && !n && !e.xAxis.label && !e.dynamicMarginTop && e.isResponsiveTicks && (d = -e.xAxis.size + s + e.xAxis.labelOffset), !a && !n && !e.xAxis.label && !o && !e.dynamicMarginTop && !e.isResponsiveTicks && (d = f ? c + -e.xAxis.size + e.xAxis.labelOffset : 0), `${d}px`;
};
const vm = (e) => {
  const t = /(?:\.([^.]+))$/, r = /[?&]wt=(csv|json)(?:&|$)/, n = new URL(e, window.location.origin), a = n.pathname, o = n.search, f = t.exec(a);
  if (f && f[1])
    return f[1];
  const s = r.exec(o);
  return s && s[1] ? s[1] : "";
};
function Jw({ configUrl: e, config: t, isEditor: r = !1, isDebug: n = !1, isDashboard: a = !1, setConfig: o, setEditing: f, hostname: s, link: c, setSharedFilter: d, setSharedFilterValue: g, dashboardConfig: v }) {
  var Pt, Rt, Ln, gn, kn, Fn, Me, Xe, kt, nt;
  const y = new Sm(), [k, E] = se.useState(!0), [M, T] = se.useState(null), [m, L] = se.useState({}), [O, _] = se.useState(m.data || []), [N, R] = se.useState(void 0), [j, B] = se.useState(void 0), [V, q] = se.useState(t && ((Rt = (Pt = t == null ? void 0 : t.legend) == null ? void 0 : Pt.seriesHighlight) != null && Rt.length) ? [...(Ln = t == null ? void 0 : t.legend) == null ? void 0 : Ln.seriesHighlight] : []), [Y, U] = se.useState("lg"), [te, me] = se.useState([]), [I, le] = se.useState(), [ue, fe] = se.useState(), [ae, W] = se.useState(!1), [Z, ee] = se.useState([]), [Ae] = se.useState(`cove-${Math.random().toString(16).slice(-4)}`);
  se.useRef(/* @__PURE__ */ new Map()), se.useRef();
  const xe = se.useRef(null);
  n && console.log("Chart config, isEditor", m, r);
  let { legend: De, title: oe, description: ze, visualizationType: He } = m;
  r && (!oe || oe === "") && (oe = "Chart Title"), m.table && (!((gn = m.table) != null && gn.label) || ((kn = m.table) == null ? void 0 : kn.label) === "") && (m.table.label = "Data Table");
  const { barBorderClass: Ce, lineDatapointClass: ge, contentClasses: Oe, sparkLineStyles: ie } = Hy(m), ke = (Fn = m.legend) != null && Fn.hide ? m != null && m.title ? `dataTableSection__${m.title.replace(/\s/g, "")}` : "dataTableSection" : "legend", Pe = async () => {
    var K;
    if (m.dataUrl) {
      const Ne = new URL(m.runtimeDataUrl || m.dataUrl, window.location.origin);
      let et = Object.fromEntries(new URLSearchParams(Ne.search)), Ue = !1;
      if ((K = m.filters) == null || K.forEach((wt) => {
        wt.type === "url" && et[wt.queryParameter] !== decodeURIComponent(wt.active) && (et[wt.queryParameter] = wt.active, Ue = !0);
      }), (!m.formattedData || m.formattedData.urlFiltered) && !Ue)
        return;
      let yt = `${Ne.origin}${Ne.pathname}${Object.keys(et).map((wt, $t) => {
        let Ze = $t === 0 ? "?" : "&";
        return Ze += wt + "=", Ze += et[wt], Ze;
      }).join("")}`, at = [];
      try {
        const wt = vm(Ne.href);
        wt === "csv" || Lh(yt) ? at = await fetch(yt).then(($t) => $t.text()).then(($t) => Oh.parse($t, {
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0
        }).data) : wt === "json" || Dh(yt) ? at = await fetch(yt).then(($t) => $t.json()) : at = [];
      } catch {
        console.error(`Cannot parse URL: ${yt}`), at = [];
      }
      m.dataDescription && (at = y.autoStandardize(at), at = y.developerStandardize(at, m.dataDescription)), Object.assign(at, { urlFiltered: !0 }), Ye({ ...m, runtimeDataUrl: yt, data: at, formattedData: at }), at && (_(at), R(at), B(Ia(m.filters, at)));
    }
  }, We = async () => {
    let K = t || await (await fetch(e)).json(), Ne = K.data || [];
    const et = K.filters ? K.filters.filter((at) => at.type === "url").length > 0 : !1;
    if (K.dataUrl && !et)
      try {
        const at = vm(K.dataUrl);
        (at === "csv" || Lh(K.dataUrl)) && (Ne = await fetch(K.dataUrl + `?v=${Yh()}`).then((wt) => wt.text()).then((wt) => (wt = wt.replace(/(".*?")|,/g, (...Ze) => Ze[1] || "|"), wt = wt.replace(/["]+/g, ""), Oh.parse(wt, {
          //quotes: "true",  // dont need these
          //quoteChar: "'",  // has no effect that I can tell
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0,
          delimiter: "|"
          // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
        }).data))), (at === "json" || Dh(K.dataUrl)) && (Ne = await fetch(K.dataUrl + `?v=${Yh()}`).then((wt) => wt.json()));
      } catch {
        console.error(`COVE: Cannot parse URL: ${K.dataUrl}`), Ne = [];
      }
    K.dataDescription && (Ne = y.autoStandardize(Ne), Ne = y.developerStandardize(Ne, K.dataDescription)), Ne && (_(Ne), R(Ne)), K !== void 0 && K.table !== void 0 && (!K.table || !K.table.showVertical) && (K.table = K.table || {}, K.table.showVertical = !1);
    let Ue = { ...Zd, ...K };
    Ue.filters && Ue.filters.forEach((at, wt) => {
      const $t = Sy(at);
      $t && (Ue.filters[wt].active = $t);
    }), Ue.visualizationType === "Box Plot" && (Ue.legend.hide = !0), Ue.table.show === void 0 && (Ue.table.show = !a), Ue.series.map((at) => {
      at.tooltip || (at.tooltip = !0), at.axis || (at.axis = "Left");
    }), !Ue.data && Ne && (Ue.data = Ne);
    const yt = { ...await Uy(Ue) };
    Ye(yt, Ne);
  }, Ye = (K, Ne) => {
    var at, wt, $t;
    let et = Ne || O;
    Object.keys(Zd).forEach((Ze) => {
      K[Ze] && typeof K[Ze] == "object" && !Array.isArray(K[Ze]) && (K[Ze] = { ...Zd[Ze], ...K[Ze] });
    });
    let Ue = [];
    if (K.exclusions && K.exclusions.active)
      if (K.xAxis.type === "categorical" && ((at = K.exclusions.keys) == null ? void 0 : at.length) > 0)
        Ue = et.filter((Ze) => !K.exclusions.keys.includes(Ze[K.xAxis.dataKey]));
      else if (En(K.xAxis) && (K.exclusions.dateStart || K.exclusions.dateEnd) && K.xAxis.dateParseFormat) {
        const Ze = (qt) => new Date(qt).getTime();
        let Bt = Ze(K.exclusions.dateStart), It = Ze(K.exclusions.dateEnd) + 86399999, vt = typeof Bt !== void 0 && isNaN(Bt) === !1, Qt = typeof It !== void 0 && isNaN(It) === !1;
        vt && Qt ? Ue = et.filter((qt) => Ze(qt[K.xAxis.dataKey]) >= Bt && Ze(qt[K.xAxis.dataKey]) <= It) : vt ? Ue = et.filter((qt) => Ze(qt[K.xAxis.dataKey]) >= Bt) : Qt && (Ue = et.filter((qt) => Ze(qt[K.xAxis.dataKey]) <= It));
      } else
        Ue = Ne || O;
    else
      Ue = Ne || O;
    R(Ue);
    let yt = [];
    if (K.filters && (K.filters.forEach((Ze, Bt) => {
      let It = [];
      It = Ze.orderedValues || qe(Ze.columnName, Ue).sort(Ze.order === "desc" ? ww : kw), K.filters[Bt].values = It, K.filters[Bt].active = K.filters[Bt].active || It[0], K.filters[Bt].filterStyle = K.filters[Bt].filterStyle ? K.filters[Bt].filterStyle : "dropdown";
    }), yt = Ia(K.filters, Ue), B(yt)), K.xAxis.type === "date-time" && K.barThickness > 0.1 ? K.barThickness = 0.035 : K.xAxis.type !== "date-time" && K.barThickness < 0.1 && (K.barThickness = 0.35), K.runtime = {}, K.runtime.seriesLabels = {}, K.runtime.seriesLabelsAll = [], K.runtime.originalXAxis = K.xAxis, K.visualizationType === "Pie" ? (K.runtime.seriesKeys = (Ne || et).map((Ze) => Ze[K.xAxis.dataKey]), K.runtime.seriesLabelsAll = K.runtime.seriesKeys) : K.runtime.seriesKeys = K.series ? K.series.map((Ze) => (K.runtime.seriesLabels[Ze.dataKey] = Ze.name || Ze.label || Ze.dataKey, K.runtime.seriesLabelsAll.push(Ze.name || Ze.dataKey), Ze.dataKey)) : [], K.visualizationType === "Box Plot" && K.series) {
      let Ze = Ue ? Ue.map((Mt) => Mt[K.xAxis.dataKey]) : et.map((Mt) => Mt[K.xAxis.dataKey]), Bt = Ue ? Ue.map((Mt) => {
        var Ht;
        return Number(Mt[(Ht = K == null ? void 0 : K.series[0]) == null ? void 0 : Ht.dataKey]);
      }) : et.map((Mt) => {
        var Ht;
        return Number(Mt[(Ht = K == null ? void 0 : K.series[0]) == null ? void 0 : Ht.dataKey]);
      });
      const vt = function(Mt) {
        return Mt.filter(function(Ht, Xt, yn) {
          return yn.indexOf(Ht) === Xt;
        });
      }(Ze);
      let Qt = [];
      const qt = [];
      if (!vt)
        return;
      vt.forEach((Mt) => {
        try {
          if (!Mt)
            throw new Error("No groups resolved in box plots");
          let Ht = Ue ? Ue.filter((Jt) => Jt[K.xAxis.dataKey] === Mt) : et.filter((Jt) => Jt[K.xAxis.dataKey] === Mt), Xt = Ht.map((Jt) => {
            var wn;
            return Number(Jt[(wn = K == null ? void 0 : K.series[0]) == null ? void 0 : wn.dataKey]);
          }), yn = Xt.sort((Jt, wn) => Jt - wn);
          const An = Ew(yn);
          if (!Ht)
            throw new Error("boxplots dont have data yet");
          if (!qt)
            throw new Error("boxplots dont have plots yet");
          K.boxplot.firstQuartilePercentage === "" && (K.boxplot.firstQuartilePercentage = 0), K.boxplot.thirdQuartilePercentage === "" && (K.boxplot.thirdQuartilePercentage = 0);
          const Ut = An.q1, Nt = An.q3, vn = Nt - Ut, _t = Ut - (Nt - Ut) * 1.5, Kt = Nt + (Nt - Ut) * 1.5, Vn = yn.filter((Jt) => Jt < _t || Jt > Kt);
          let Pn = Xt;
          Pn = Pn.filter((Jt) => !Vn.includes(Jt));
          const zn = us(Xt) || 0, xn = ss([zn, Ut - 1.5 * vn]);
          qt.push({
            columnCategory: Mt,
            columnMax: us([ss(Xt), Ut + 1.5 * vn]),
            columnThirdQuartile: Number(Nt).toFixed(K.dataFormat.roundTo),
            columnMedian: Number(Qy(Xt)).toFixed(K.dataFormat.roundTo),
            columnFirstQuartile: Ut.toFixed(K.dataFormat.roundTo),
            columnMin: xn,
            columnTotal: Xt.reduce((Jt, wn) => Jt + wn, 0),
            columnSd: Number(qy(Xt)).toFixed(K.dataFormat.roundTo),
            columnMean: Number(Zy(Xt)).toFixed(K.dataFormat.roundTo),
            columnIqr: Number(vn).toFixed(K.dataFormat.roundTo),
            columnLowerBounds: xn,
            columnUpperBounds: us([ss(yn), Ut + 1.5 * vn]),
            columnOutliers: Vn,
            values: Xt,
            nonOutlierValues: Pn
          });
        } catch (Ht) {
          console.error("COVE: ", Ht.message);
        }
      }), Qt = JSON.parse(JSON.stringify(qt)), Qt.map((Mt) => (Mt.columnIqr = void 0, Mt.nonOutlierValues = void 0, Mt.columnLowerBounds = void 0, Mt.columnUpperBounds = void 0, null)), K.boxplot.allValues = Bt, K.boxplot.categories = vt, K.boxplot.plots = qt, K.boxplot.tableData = Qt;
    }
    K.visualizationType === "Combo" && K.series && (K.runtime.barSeriesKeys = [], K.runtime.lineSeriesKeys = [], K.runtime.areaSeriesKeys = [], K.runtime.forecastingSeriesKeys = [], K.series.forEach((Ze) => {
      Ze.type === "Area Chart" && K.runtime.areaSeriesKeys.push(Ze), Ze.type === "Forecasting" && K.runtime.forecastingSeriesKeys.push(Ze), (Ze.type === "Bar" || Ze.type === "Combo") && K.runtime.barSeriesKeys.push(Ze.dataKey), (Ze.type === "Line" || Ze.type === "dashed-sm" || Ze.type === "dashed-md" || Ze.type === "dashed-lg") && K.runtime.lineSeriesKeys.push(Ze.dataKey), Ze.type === "Combo" && (Ze.type = "Bar");
    })), K.visualizationType === "Forecasting" && K.series && (K.runtime.forecastingSeriesKeys = [], K.series.forEach((Ze) => {
      Ze.type === "Forecasting" && K.runtime.forecastingSeriesKeys.push(Ze);
    })), K.visualizationType === "Area Chart" && K.series && (K.runtime.areaSeriesKeys = [], K.series.forEach((Ze) => {
      K.runtime.areaSeriesKeys.push({ ...Ze, type: "Area Chart" });
    })), K.visualizationType === "Bar" && K.orientation === "horizontal" || ["Deviation Bar", "Paired Bar", "Forest Plot"].includes(K.visualizationType) ? (K.runtime.xAxis = K.yAxis.yAxis ? K.yAxis.yAxis : K.yAxis, K.runtime.yAxis = K.xAxis.xAxis ? K.xAxis.xAxis : K.xAxis, K.runtime.horizontal = !1, K.orientation = "horizontal") : ["Box Plot", "Scatter Plot", "Area Chart", "Line", "Forecasting"].includes(K.visualizationType) ? (K.runtime.xAxis = K.xAxis, K.runtime.yAxis = K.yAxis, K.runtime.horizontal = !1, K.orientation = "vertical") : (K.runtime.xAxis = K.xAxis, K.runtime.yAxis = K.yAxis, K.runtime.horizontal = !1), K.runtime.uniqueId = Date.now(), K.runtime.editorErrorMessage = K.visualizationType === "Pie" && !K.yAxis.dataKey ? "Data Key property in Y Axis section must be set for pie charts." : "", K.runtime.editorErrorMessage = K.visualizationType === "Sankey" && !K.description ? "SUBTEXT/CITATION field is empty: A description of the Sankey Diagram data must be inputted." : "", (wt = K.legend.seriesHighlight) != null && wt.length && q(($t = K.legend) == null ? void 0 : $t.seriesHighlight), L(K);
  }, qe = (K, Ne = this.state.data) => {
    const et = [];
    return Ne.forEach((Ue) => {
      const yt = Ue[K];
      yt && et.includes(yt) === !1 && et.push(yt);
    }), et;
  }, lt = (K, Ne) => {
    let et = m.visualizationType === "Bar" && m.visualizationSubType === "horizontal" ? m.xAxis.dataKey : m.yAxis.sortKey, Ue = parseFloat(K[et]), yt = parseFloat(Ne[et]);
    return Ue < yt ? m.sortData === "ascending" ? 1 : -1 : Ue > yt ? m.sortData === "ascending" ? -1 : 1 : 0;
  }, st = new vy((K) => {
    for (let Ne of K) {
      let { width: et, height: Ue } = Ne.contentRect, yt = xy(et), at = 32, wt = 350;
      U(yt), r && (et = et - wt), Ne.target.dataset.lollipop === "true" && (et = et - 2.5), et = et - at, me([et, Ue]);
    }
  }), it = se.useCallback((K) => {
    K !== null && st.observe(K), fe(K);
  }, []);
  function Je(K) {
    return Object.keys(K).length === 0;
  }
  se.useEffect(() => {
    We();
  }, []), se.useEffect(() => {
    Pe();
  }, [JSON.stringify(m.filters)]), se.useEffect(() => {
    ue && !Je(m) && !ae && (Wy("cove_loaded", { config: m }), W(!0));
  }, [ue, m]), se.useEffect(() => {
    const K = (Ne) => {
      let et = [];
      et.push(Ne.detail), le(et);
    };
    return Vy("cove_filterData", (Ne) => K(Ne)), () => {
      jy("cove_filterData", K);
    };
  }, [m]), se.useEffect(() => {
    if (I && I[0] && !I[0].hasOwnProperty("active")) {
      let Ne = { ...m };
      delete Ne.filters, L(Ne), B(Ia(I, N));
    }
    if (I && I.length > 0 && I.length > 0 && I[0].hasOwnProperty("active")) {
      let K = { ...m, filters: I };
      L(K), B(Ia(I, N));
    }
  }, [I]), t && se.useEffect(() => {
    We();
  }, [t.data]), se.useEffect(() => {
    var K;
    if (O && m.xAxis && ((K = m.runtime) != null && K.seriesKeys)) {
      const Ne = ["Paired Bar", "Deviation Bar"].includes(m.visualizationType) ? m.twoColor.palette : m.palette, et = { ...dr, ...ju };
      let Ue = m.customColors || et[Ne], yt = m.runtime.seriesKeys.length, at;
      for (; yt > Ue.length; )
        Ue = Ue.concat(Ue);
      Ue = Ue.slice(0, yt), at = () => Vf({
        domain: m.runtime.seriesLabelsAll,
        range: Ue,
        unknown: null
      }), T(at), E(!1);
    }
    m && O && m.sortData && O.sort(lt);
  }, [m, O]);
  const Ie = (K) => {
    if (V.length + 1 === m.runtime.seriesKeys.length && m.visualizationType !== "Forecasting") {
      $e();
      return;
    }
    const Ne = [...V];
    let et = K.datum;
    m.runtime.seriesLabels && m.runtime.seriesKeys.forEach((Ue) => {
      m.runtime.seriesLabels[Ue] === K.datum && (et = Ue);
    }), Ne.indexOf(et) !== -1 ? Ne.splice(Ne.indexOf(et), 1) : Ne.push(et), q(Ne);
  }, $e = () => {
    try {
      const K = xe.current;
      if (!K)
        throw new Error("No legend available to set previous focus on.");
      K.focus();
    } catch (K) {
      console.error("COVE:", K.message);
    }
    q([]);
  }, ft = m.orientation === "horizontal" ? "yAxis" : "xAxis", Ke = (K, Ne = !0) => {
    let et = lg(m.runtime[ft].dateParseFormat)(K);
    return et || (Ne && (m.runtime.editorErrorMessage = `Error parsing date "${K}". Try reviewing your data and date parse settings in the X Axis section.`), /* @__PURE__ */ new Date());
  }, Qe = (K) => ef(m.runtime[ft].dateDisplayFormat)(K), ct = (K) => ef(m.tooltips.dateDisplayFormat)(K);
  function ht(K, Ne) {
    const Ue = document.createElement("canvas").getContext("2d");
    if (!Ue) {
      console.error("2d context not found");
      return;
    }
    return Ue.font = Ne || getComputedStyle(document.body).font, Math.ceil(Ue.measureText(K).width);
  }
  const At = (K, Ne, et = !1, Ue, yt, at) => {
    if (isNaN(K) || !K)
      return K;
    const wt = K < 0;
    (Ne === void 0 || !Ne) && (Ne = "left"), wt && (K = Math.abs(K));
    let {
      dataFormat: { commas: $t, abbreviated: Ze, roundTo: Bt, prefix: It, suffix: vt, rightRoundTo: Qt, bottomRoundTo: qt, rightPrefix: Mt, rightSuffix: Ht, bottomPrefix: Xt, bottomSuffix: yn, bottomAbbreviated: An }
    } = m;
    String(K).indexOf(",") !== -1 && (K = K.replaceAll(",", ""));
    let Ut = K, Nt = {
      useGrouping: !!$t
      // for old chart data table to work right cant just leave this to undefined
    };
    if (Ne === "left" || Ne === void 0) {
      let Kt;
      at !== void 0 ? Kt = at ? Number(at) : 0 : Kt = Bt ? Number(Bt) : 0, Nt = {
        useGrouping: at ? !0 : !!m.dataFormat.commas,
        minimumFractionDigits: Kt,
        maximumFractionDigits: Kt
      };
    }
    Ne === "right" && (Nt = {
      useGrouping: !!m.dataFormat.rightCommas,
      minimumFractionDigits: Qt ? Number(Qt) : 0,
      maximumFractionDigits: Qt ? Number(Qt) : 0
    });
    const vn = () => m.forestPlot.type === "Logarithmic" && !qt ? 2 : Number(qt) ? Number(qt) : 0;
    if (Ne === "bottom" && (Nt = {
      useGrouping: !!m.dataFormat.bottomCommas,
      minimumFractionDigits: vn(),
      maximumFractionDigits: vn()
    }), K = Kh(K), isNaN(K))
      return m.runtime.editorErrorMessage = `Unable to parse number from data ${Ut}. Try reviewing your data and selections in the Data Series section.`, Ut;
    if (!m.dataFormat)
      return K;
    if (m.dataCutoff) {
      let Kt = Kh(m.dataCutoff);
      K < Kt && (K = Kt);
    }
    Ne === "left" && $t && Ze && et || Ne === "bottom" && $t && Ze && et ? K = K : K = K.toLocaleString("en-US", Nt);
    let _t = "";
    return Ze && Ne === "left" && et && (K = mm(parseFloat(K))), An && Ne === "bottom" && et && (K = mm(parseFloat(K))), Ue && Ne === "left" ? _t = Ue + _t : It && Ne === "left" && (_t += It), Mt && Ne === "right" && (_t += Mt), Xt && Ne === "bottom" && (_t += Xt), _t += K, yt && Ne === "left" ? _t += yt : vt && Ne === "left" && (_t += vt), Ht && Ne === "right" && (_t += Ht), yn && Ne === "bottom" && (_t += yn), wt && (_t = "-" + _t), String(_t);
  }, an = {
    "Paired Bar": /* @__PURE__ */ i.createElement(Gr, null),
    Forecasting: /* @__PURE__ */ i.createElement(Gr, null),
    Bar: /* @__PURE__ */ i.createElement(Gr, null),
    Line: /* @__PURE__ */ i.createElement(Gr, null),
    Combo: /* @__PURE__ */ i.createElement(Gr, null),
    Pie: /* @__PURE__ */ i.createElement(JS, null),
    "Box Plot": /* @__PURE__ */ i.createElement(Gr, null),
    "Area Chart": /* @__PURE__ */ i.createElement(Gr, null),
    "Scatter Plot": /* @__PURE__ */ i.createElement(Gr, null),
    "Deviation Bar": /* @__PURE__ */ i.createElement(Gr, null),
    "Forest Plot": /* @__PURE__ */ i.createElement(Gr, null)
  }, Zt = () => {
    if (m.visualizationType === "Sankey" || m.visualizationType === "Forecasting" || m.visualizationType === "Forest Plot")
      return !1;
    if (m.visualizationType === "Pie") {
      if ((m == null ? void 0 : m.yAxis.dataKey) === void 0)
        return !0;
    } else if ((m == null ? void 0 : m.series) === void 0 || !((m == null ? void 0 : m.series.length) > 0))
      return !0;
    return !m.xAxis.dataKey;
  }, Ot = (K, Ne) => {
    if (K === null || K === "" || K === void 0)
      return "";
    if (typeof K == "string" && K.length > 0 && m.legend.type === "equalnumber")
      return K;
    let et = K, Ue;
    if (Object.keys(m.columns).length > 0 && Object.keys(m.columns).forEach(function(yt) {
      var at = m.columns[yt];
      at.name === Ne && (Ue = at);
    }), Ue === void 0 && (Ue = m.type === "chart" ? m.dataFormat : m.primary, Ue.useCommas = Ue.commas, Ue.roundToPlace = Ue.roundTo ? Ue.roundTo : ""), Ue) {
      let yt = !1, at = 0;
      Number(K) && (Ue.roundToPlace >= 0 && (yt = Ue.roundToPlace ? Ue.roundToPlace !== "" || Ue.roundToPlace !== null : !1, at = Ue.roundToPlace ? Number(Ue.roundToPlace) : 0, Ue.hasOwnProperty("roundToPlace") && yt && (et = Number(K).toFixed(at))), Ue.hasOwnProperty("useCommas") && Ue.useCommas === !0 && (et = Number(K).toLocaleString("en-US", {
        style: "decimal",
        minimumFractionDigits: yt ? at : 0,
        maximumFractionDigits: yt ? at : 5
      }))), et = (Ue.prefix || "") + et + (Ue.suffix || "");
    }
    return et;
  }, zt = (K) => {
    try {
      if (!K)
        throw new Error("COVE: No rowObj in applyLegendToRow");
      if (m.type === "navigation") {
        let Ne = dr[m.color] || dr.bluegreenreverse;
        return gm(Ne[3]);
      }
      return gm();
    } catch (Ne) {
      console.error("COVE: ", Ne);
    }
  }, tn = (K) => {
    var Ne;
    return Array.isArray(K) ? m.visualizationType === "Forecasting" ? K : (Ne = m == null ? void 0 : m.xAxis) != null && Ne.dataKey ? y.cleanData(K, m.xAxis.dataKey) : K : [];
  }, hn = (K) => K;
  let un = /* @__PURE__ */ i.createElement(Dy, null);
  if (!k) {
    const K = /* @__PURE__ */ i.createElement("a", { href: `#data-table-${m.dataKey}`, className: "margin-left-href" }, m.dataKey, " (Go to Table)");
    un = /* @__PURE__ */ i.createElement(i.Fragment, null, r && /* @__PURE__ */ i.createElement(Sw, null), !Zt() && !m.newViz && /* @__PURE__ */ i.createElement("div", { className: "cdc-chart-inner-container", "aria-label": Sf(m), tabIndex: 0 }, /* @__PURE__ */ i.createElement(ky, { showTitle: m.showTitle, isDashboard: a, title: oe, superTitle: m.superTitle, classes: ["chart-title", `${m.theme}`, "cove-component__header"], style: void 0 }), /* @__PURE__ */ i.createElement(Ry, { skipId: ke, skipMessage: "Skip Over Chart Container" }), m.filters && !I && m.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement(Ih, { config: m, setConfig: L, setFilteredData: B, filteredData: j, excludedData: N, filterData: Ia, dimensions: te }), (m == null ? void 0 : m.introText) && m.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement("section", { className: "introText" }, Fi(m.introText)), /* @__PURE__ */ i.createElement(
      "div",
      {
        style: { marginBottom: ym(m, De, Y) },
        className: `chart-container  p-relative ${m.legend.position === "bottom" ? "bottom" : ""}${m.legend.hide ? " legend-hidden" : ""}${ge}${Ce} ${Oe.join(" ")} ${n ? "debug" : ""}`
      },
      m.visualizationType !== "Spark Line" && an[m.visualizationType],
      m.visualizationType === "Spark Line" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ih, { config: m, setConfig: L, setFilteredData: B, filteredData: j, excludedData: N, filterData: Ia, dimensions: te }), (m == null ? void 0 : m.introText) && /* @__PURE__ */ i.createElement("section", { className: "introText", style: { padding: "0px 0 35px" } }, Fi(m.introText)), /* @__PURE__ */ i.createElement("div", { style: { height: "100px", width: "100%", ...ie } }, /* @__PURE__ */ i.createElement(cp, null, (Ne) => /* @__PURE__ */ i.createElement(Qk, { width: Ne.width, height: Ne.height }))), ze && /* @__PURE__ */ i.createElement("div", { className: "subtext", style: { padding: "35px 0 15px" } }, Fi(ze))),
      m.visualizationType === "Sankey" && /* @__PURE__ */ i.createElement(cp, { "aria-hidden": "true" }, (Ne) => /* @__PURE__ */ i.createElement(PE, { runtime: m.runtime, width: Ne.width, height: Ne.height })),
      !m.legend.hide && m.visualizationType !== "Spark Line" && m.visualizationType !== "Sankey" && /* @__PURE__ */ i.createElement(Jk, { ref: xe })
    ), a && m.table && m.table.show && m.table.showDataTableLink ? K : c && c, ze && m.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement("div", { className: "column " + m.isResponsiveTicks ? "subtext--responsive-ticks" : "subtext" }, Fi(ze)), /* @__PURE__ */ i.createElement(Pd.Section, { classes: ["download-buttons"] }, m.table.showDownloadImgButton && /* @__PURE__ */ i.createElement(Pd.Button, { text: "Download Image", title: "Download Chart as Image", type: "image", state: m, elementToCapture: Ae }), m.table.showDownloadPdfButton && /* @__PURE__ */ i.createElement(Pd.Button, { text: "Download PDF", title: "Download Chart as PDF", type: "pdf", state: m, elementToCapture: Ae })), (m.xAxis.dataKey && m.table.show && m.visualizationType !== "Spark Line" && m.visualizationType !== "Sankey" || m.visualizationType === "Sankey" && m.table.show) && /* @__PURE__ */ i.createElement(
      Ly,
      {
        config: m,
        rawData: m.visualizationType === "Sankey" ? (Xe = (Me = m == null ? void 0 : m.data) == null ? void 0 : Me[0]) == null ? void 0 : Xe.tableData : m.table.customTableConfig ? Ia(m.filters, m.data) : m.data,
        runtimeData: m.visualizationType === "Sankey" ? (nt = (kt = m == null ? void 0 : m.data) == null ? void 0 : kt[0]) == null ? void 0 : nt.tableData : y.applySuppression(j || N, m.suppressedData),
        expandDataTable: m.table.expanded,
        columns: m.columns,
        displayDataAsText: Ot,
        displayGeoName: hn,
        applyLegendToRow: zt,
        tableTitle: m.table.label,
        indexTitle: m.table.indexLabel,
        vizTitle: oe,
        viewport: Y,
        tabbingId: ke,
        colorScale: M
      }
    ), (m == null ? void 0 : m.footnotes) && /* @__PURE__ */ i.createElement("section", { className: "footnotes" }, Fi(m.footnotes))));
  }
  const _e = {
    capitalize: (K) => K.charAt(0).toUpperCase() + K.slice(1),
    computeMarginBottom: ym,
    getXAxisData: (K) => En(m.runtime.xAxis) ? Ke(K[m.runtime.originalXAxis.dataKey]).getTime() : K[m.runtime.originalXAxis.dataKey],
    getYAxisData: (K, Ne) => K[Ne],
    config: m,
    setConfig: L,
    rawData: O ?? {},
    excludedData: N,
    transformedData: tn(j || N),
    // do this right before passing to components
    tableData: j || N,
    // do not clean table data
    unfilteredData: O,
    seriesHighlight: V,
    colorScale: M,
    dimensions: te,
    currentViewport: Y,
    parseDate: Ke,
    formatDate: Qe,
    formatTooltipsDate: ct,
    formatNumber: At,
    loading: k,
    updateConfig: Ye,
    colorPalettes: dr,
    isDashboard: a,
    setParentConfig: o,
    missingRequiredSections: Zt,
    setEditing: f,
    setFilteredData: B,
    handleChartAriaLabels: Sf,
    highlight: Ie,
    highlightReset: $e,
    legend: De,
    setSeriesHighlight: q,
    dynamicLegendItems: Z,
    setDynamicLegendItems: ee,
    filterData: Ia,
    imageId: Ae,
    handleLineType: Tf,
    lineOptions: Tw,
    isNumber: Wu,
    getTextWidth: ht,
    twoColorPalette: ju,
    isEditor: r,
    isDebug: n,
    setSharedFilter: d,
    setSharedFilterValue: g,
    dashboardConfig: v,
    debugSvg: n
  }, ln = ["cdc-open-viz-module", "type-chart", `${Y}`, `font-${m.fontSize}`, `${m.theme}`];
  return m.visualizationType === "Spark Line" && ln.push("type-sparkline"), r && ln.push("spacing-wrapper"), r && ln.push("isEditor"), /* @__PURE__ */ i.createElement(Et.Provider, { value: _e }, /* @__PURE__ */ i.createElement("div", { className: `${ln.join(" ")}`, ref: it, "data-lollipop": m.isLollipopChart, "data-download-id": Ae }, un));
}
export {
  Jw as C
};
