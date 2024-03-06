import { r as ue, R as i } from "./storybook-index-45401197.es.js";
import { a as gy, i as Dh, b as Lh, g as yy } from "./storybook-isSolr-6a0136d5.es.js";
import { A as vy } from "./storybook-AdvancedEditor-bff719bc.es.js";
import { p as gm, P as pe } from "./storybook-index-43433e35.es.js";
import { d as xy } from "./storybook-debounce-cc216a80.es.js";
import { a as If } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { P as Oh } from "./storybook-papaparse.min-b07ddc33.es.js";
import { H as Ni, T as by } from "./storybook-index-d4b80c61.es.js";
import { _ as yn } from "./storybook-extends-70f3d2a3.es.js";
import { _ as qr, G as Sy, t as Wu, a as ur, s as ju, T as Pt, P as ym, I as _h, u as Ey, D as Mh, C as Nh, F as ky } from "./storybook-Filters-224bd113.es.js";
import { c as zr } from "./storybook-chroma-b564050a.es.js";
import { D as vm, a as Ln, b as On, c as _n, d as Mn, A as Fi } from "./storybook-index-964548d8.es.js";
import { t as wy, f as xm, L as Fh, a as Ty, g as Ti, M as Td, D as Cy } from "./storybook-DataTable-f4f6e5b1.es.js";
import { E as Br, L as Ay } from "./storybook-Loading-f180d060.es.js";
import { s as is, t as bm, a as Sm, b as Em, d as ks, B as mr, c as Wn, C as Py, S as km } from "./storybook-icon-check-d4f3700e.es.js";
import { b as Sc, t as Ry, e as wm, f as zh, g as Dy, h as Ly, j as Tm, k as Bh, m as Oy, G as rt, c as Rn } from "./storybook-Group-e6c0d0df.es.js";
import { R as _y } from "./storybook-index-633d712d.es.js";
import "./storybook-transform-e0776740.es.js";
import { i as Cm, m as Cd, c as Am, j as vu, k as xu, l as bu, n as $h, o as My, p as Ih, b as Pm, d as Rm } from "./storybook-year-bedc547d.es.js";
import { a as Tt } from "./storybook-Icon-58d1c99f.es.js";
import { T as Le } from "./storybook-Tooltip-edc0f7ab.es.js";
import { S as wt, T as Ge, C as vt, D as Ny } from "./storybook-DataTableEditor-7a6e1152.es.js";
import { I as Ha } from "./storybook-InputSelect-a65afd95.es.js";
import { B as Fy } from "./storybook-Button-d74e310e.es.js";
import { u as zy, p as By, s as $y, a as Iy, c as Hy } from "./storybook-coveUpdateWorker-a9880235.es.js";
import { n as Hh } from "./storybook-numberFromString-24623c03.es.js";
import { c as Wh } from "./storybook-cacheBustingString-7a3dd9ba.es.js";
function Dm(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function jh(e) {
  let t = e, n = e;
  e.length === 1 && (t = (s, u) => e(s) - u, n = Wy(e));
  function a(s, u, d, f) {
    for (d == null && (d = 0), f == null && (f = s.length); d < f; ) {
      const g = d + f >>> 1;
      n(s[g], u) < 0 ? d = g + 1 : f = g;
    }
    return d;
  }
  function r(s, u, d, f) {
    for (d == null && (d = 0), f == null && (f = s.length); d < f; ) {
      const g = d + f >>> 1;
      n(s[g], u) > 0 ? f = g : d = g + 1;
    }
    return d;
  }
  function o(s, u, d, f) {
    d == null && (d = 0), f == null && (f = s.length);
    const g = a(s, u, d, f - 1);
    return g > d && t(s[g - 1], u) > -t(s[g], u) ? g - 1 : g;
  }
  return { left: a, center: o, right: r };
}
function Wy(e) {
  return (t, n) => Dm(e(t), n);
}
function* jy(e, t) {
  if (t === void 0)
    for (let n of e)
      n != null && (n = +n) >= n && (yield n);
  else {
    let n = -1;
    for (let a of e)
      (a = t(a, ++n, e)) != null && (a = +a) >= a && (yield a);
  }
}
function Vy(e, t) {
  let n = 0, a, r = 0, o = 0;
  if (t === void 0)
    for (let s of e)
      s != null && (s = +s) >= s && (a = s - r, r += a / ++n, o += a * (s - r));
  else {
    let s = -1;
    for (let u of e)
      (u = t(u, ++s, e)) != null && (u = +u) >= u && (a = u - r, r += a / ++n, o += a * (u - r));
  }
  if (n > 1)
    return o / (n - 1);
}
function Uy(e, t) {
  const n = Vy(e, t);
  return n && Math.sqrt(n);
}
function os(e, t) {
  let n;
  if (t === void 0)
    for (const a of e)
      a != null && (n < a || n === void 0 && a >= a) && (n = a);
  else {
    let a = -1;
    for (let r of e)
      (r = t(r, ++a, e)) != null && (n < r || n === void 0 && r >= r) && (n = r);
  }
  return n;
}
function ls(e, t) {
  let n;
  if (t === void 0)
    for (const a of e)
      a != null && (n > a || n === void 0 && a >= a) && (n = a);
  else {
    let a = -1;
    for (let r of e)
      (r = t(r, ++a, e)) != null && (n > r || n === void 0 && r >= r) && (n = r);
  }
  return n;
}
function Lm(e, t, n = 0, a = e.length - 1, r = Dm) {
  for (; a > n; ) {
    if (a - n > 600) {
      const d = a - n + 1, f = t - n + 1, g = Math.log(d), v = 0.5 * Math.exp(2 * g / 3), y = 0.5 * Math.sqrt(g * v * (d - v) / d) * (f - d / 2 < 0 ? -1 : 1), E = Math.max(n, Math.floor(t - f * v / d + y)), w = Math.min(a, Math.floor(t + (d - f) * v / d + y));
      Lm(e, t, E, w, r);
    }
    const o = e[t];
    let s = n, u = a;
    for (es(e, n, t), r(e[a], o) > 0 && es(e, n, a); s < u; ) {
      for (es(e, s, u), ++s, --u; r(e[s], o) < 0; )
        ++s;
      for (; r(e[u], o) > 0; )
        --u;
    }
    r(e[n], o) === 0 ? es(e, n, u) : (++u, es(e, u, a)), u <= t && (n = u + 1), t <= u && (a = u - 1);
  }
  return e;
}
function es(e, t, n) {
  const a = e[t];
  e[t] = e[n], e[n] = a;
}
function Ky(e, t, n) {
  if (e = Float64Array.from(jy(e, n)), !!(a = e.length)) {
    if ((t = +t) <= 0 || a < 2)
      return ls(e);
    if (t >= 1)
      return os(e);
    var a, r = (a - 1) * t, o = Math.floor(r), s = os(Lm(e, o).subarray(0, o + 1)), u = ls(e.subarray(o + 1));
    return s + (u - s) * (r - o);
  }
}
function Yy(e, t) {
  let n = 0, a = 0;
  if (t === void 0)
    for (let r of e)
      r != null && (r = +r) >= r && (++n, a += r);
  else {
    let r = -1;
    for (let o of e)
      (o = t(o, ++r, e)) != null && (o = +o) >= o && (++n, a += o);
  }
  if (n)
    return a / n;
}
function Xy(e, t) {
  return Ky(e, 0.5, t);
}
class Vh extends Map {
  constructor(t, n = Zy) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null)
      for (const [a, r] of t)
        this.set(a, r);
  }
  get(t) {
    return super.get(Uh(this, t));
  }
  has(t) {
    return super.has(Uh(this, t));
  }
  set(t, n) {
    return super.set(qy(this, t), n);
  }
  delete(t) {
    return super.delete(Gy(this, t));
  }
}
function Uh({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function qy({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function Gy({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function Zy(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function Qy(e, t, n) {
  e = +e, t = +t, n = (r = arguments.length) < 2 ? (t = e, e = 0, 1) : r < 3 ? 1 : +n;
  for (var a = -1, r = Math.max(0, Math.ceil((t - e) / n)) | 0, o = new Array(r); ++a < r; )
    o[a] = e + a * n;
  return o;
}
const Kh = Symbol("implicit");
function Hf() {
  var e = new Vh(), t = [], n = [], a = Kh;
  function r(o) {
    let s = e.get(o);
    if (s === void 0) {
      if (a !== Kh)
        return a;
      e.set(o, s = t.push(o) - 1);
    }
    return n[s % n.length];
  }
  return r.domain = function(o) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new Vh();
    for (const s of o)
      e.has(s) || e.set(s, t.push(s) - 1);
    return r;
  }, r.range = function(o) {
    return arguments.length ? (n = Array.from(o), r) : n.slice();
  }, r.unknown = function(o) {
    return arguments.length ? (a = o, r) : a;
  }, r.copy = function() {
    return Hf(t, n).unknown(a);
  }, Sc.apply(r, arguments), r;
}
function Wf() {
  var e = Hf().unknown(void 0), t = e.domain, n = e.range, a = 0, r = 1, o, s, u = !1, d = 0, f = 0, g = 0.5;
  delete e.unknown;
  function v() {
    var y = t().length, E = r < a, w = E ? r : a, O = E ? a : r;
    o = (O - w) / Math.max(1, y - d + f * 2), u && (o = Math.floor(o)), w += (O - w - o * (y - d)) * g, s = o * (1 - d), u && (w = Math.round(w), s = Math.round(s));
    var T = Qy(y).map(function(m) {
      return w + o * m;
    });
    return n(E ? T.reverse() : T);
  }
  return e.domain = function(y) {
    return arguments.length ? (t(y), v()) : t();
  }, e.range = function(y) {
    return arguments.length ? ([a, r] = y, a = +a, r = +r, v()) : [a, r];
  }, e.rangeRound = function(y) {
    return [a, r] = y, a = +a, r = +r, u = !0, v();
  }, e.bandwidth = function() {
    return s;
  }, e.step = function() {
    return o;
  }, e.round = function(y) {
    return arguments.length ? (u = !!y, v()) : u;
  }, e.padding = function(y) {
    return arguments.length ? (d = Math.min(1, f = +y), v()) : d;
  }, e.paddingInner = function(y) {
    return arguments.length ? (d = Math.min(1, y), v()) : d;
  }, e.paddingOuter = function(y) {
    return arguments.length ? (f = +y, v()) : f;
  }, e.align = function(y) {
    return arguments.length ? (g = Math.max(0, Math.min(1, y)), v()) : g;
  }, e.copy = function() {
    return Wf(t(), [a, r]).round(u).paddingInner(d).paddingOuter(f).align(g);
  }, Sc.apply(v(), arguments);
}
function Om(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Om(t());
  }, e;
}
function Jy() {
  return Om(Wf.apply(null, arguments).paddingInner(1));
}
function _m(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, r = e[n], o = e[a], s;
  return o < r && (s = n, n = a, a = s, s = r, r = o, o = s), e[n] = t.floor(r), e[a] = t.ceil(o), e;
}
function Yh(e) {
  return Math.log(e);
}
function Xh(e) {
  return Math.exp(e);
}
function ev(e) {
  return -Math.log(-e);
}
function tv(e) {
  return -Math.exp(-e);
}
function nv(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function rv(e) {
  return e === 10 ? nv : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function av(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function qh(e) {
  return (t, n) => -e(-t, n);
}
function iv(e) {
  const t = e(Yh, Xh), n = t.domain;
  let a = 10, r, o;
  function s() {
    return r = av(a), o = rv(a), n()[0] < 0 ? (r = qh(r), o = qh(o), e(ev, tv)) : e(Yh, Xh), t;
  }
  return t.base = function(u) {
    return arguments.length ? (a = +u, s()) : a;
  }, t.domain = function(u) {
    return arguments.length ? (n(u), s()) : n();
  }, t.ticks = (u) => {
    const d = n();
    let f = d[0], g = d[d.length - 1];
    const v = g < f;
    v && ([f, g] = [g, f]);
    let y = r(f), E = r(g), w, O;
    const T = u == null ? 10 : +u;
    let m = [];
    if (!(a % 1) && E - y < T) {
      if (y = Math.floor(y), E = Math.ceil(E), f > 0) {
        for (; y <= E; ++y)
          for (w = 1; w < a; ++w)
            if (O = y < 0 ? w / o(-y) : w * o(y), !(O < f)) {
              if (O > g)
                break;
              m.push(O);
            }
      } else
        for (; y <= E; ++y)
          for (w = a - 1; w >= 1; --w)
            if (O = y > 0 ? w / o(-y) : w * o(y), !(O < f)) {
              if (O > g)
                break;
              m.push(O);
            }
      m.length * 2 < T && (m = zh(f, g, T));
    } else
      m = zh(y, E, Math.min(E - y, T)).map(o);
    return v ? m.reverse() : m;
  }, t.tickFormat = (u, d) => {
    if (u == null && (u = 10), d == null && (d = a === 10 ? "s" : ","), typeof d != "function" && (!(a % 1) && (d = Dy(d)).precision == null && (d.trim = !0), d = Ly(d)), u === 1 / 0)
      return d;
    const f = Math.max(1, a * u / t.ticks().length);
    return (g) => {
      let v = g / o(Math.round(r(g)));
      return v * a < a - 0.5 && (v *= a), v <= f ? d(g) : "";
    };
  }, t.nice = () => n(_m(n(), {
    floor: (u) => o(Math.floor(r(u))),
    ceil: (u) => o(Math.ceil(r(u)))
  })), t;
}
function Mm() {
  const e = iv(Ry()).domain([1, 10]);
  return e.copy = () => wm(e, Mm()).base(e.base()), Sc.apply(e, arguments), e;
}
const Vu = Cm(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Vu.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Cm((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Vu);
Vu.range;
function ov(e, t, n, a, r, o) {
  const s = [
    [is, 1, vu],
    [is, 5, 5 * vu],
    [is, 15, 15 * vu],
    [is, 30, 30 * vu],
    [o, 1, xu],
    [o, 5, 5 * xu],
    [o, 15, 15 * xu],
    [o, 30, 30 * xu],
    [r, 1, bu],
    [r, 3, 3 * bu],
    [r, 6, 6 * bu],
    [r, 12, 12 * bu],
    [a, 1, $h],
    [a, 2, 2 * $h],
    [n, 1, My],
    [t, 1, Ih],
    [t, 3, 3 * Ih],
    [e, 1, Cd]
  ];
  function u(f, g, v) {
    const y = g < f;
    y && ([f, g] = [g, f]);
    const E = v && typeof v.range == "function" ? v : d(f, g, v), w = E ? E.range(f, +g + 1) : [];
    return y ? w.reverse() : w;
  }
  function d(f, g, v) {
    const y = Math.abs(g - f) / v, E = Tm(([, , T]) => T).right(s, y);
    if (E === s.length)
      return e.every(Bh(f / Cd, g / Cd, v));
    if (E === 0)
      return Vu.every(Math.max(Bh(f, g, v), 1));
    const [w, O] = s[y / s[E - 1][2] < s[E][2] / y ? E - 1 : E];
    return w.every(O);
  }
  return [u, d];
}
const [lv, sv] = ov(Am, Em, Rm, Pm, Sm, bm);
function uv(e) {
  return new Date(e);
}
function cv(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Nm(e, t, n, a, r, o, s, u, d, f) {
  var g = Oy(), v = g.invert, y = g.domain, E = f(".%L"), w = f(":%S"), O = f("%I:%M"), T = f("%I %p"), m = f("%a %d"), A = f("%b %d"), _ = f("%B"), L = f("%Y");
  function N(M) {
    return (d(M) < M ? E : u(M) < M ? w : s(M) < M ? O : o(M) < M ? T : a(M) < M ? r(M) < M ? m : A : n(M) < M ? _ : L)(M);
  }
  return g.invert = function(M) {
    return new Date(v(M));
  }, g.domain = function(M) {
    return arguments.length ? y(Array.from(M, cv)) : y().map(uv);
  }, g.ticks = function(M) {
    var U = y();
    return e(U[0], U[U.length - 1], M ?? 10);
  }, g.tickFormat = function(M, U) {
    return U == null ? N : f(U);
  }, g.nice = function(M) {
    var U = y();
    return (!M || typeof M.range != "function") && (M = t(U[0], U[U.length - 1], M ?? 10)), M ? y(_m(U, M)) : g;
  }, g.copy = function() {
    return wm(g, Nm(e, t, n, a, r, o, s, u, d, f));
  }, g;
}
function dv() {
  return Sc.apply(Nm(lv, sv, Am, Em, Rm, Pm, Sm, bm, is, wy).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var fv = ks("domain", "range", "reverse", "align", "padding", "round");
function Gd(e) {
  return fv(Wf(), e);
}
var hv = ks("domain", "range", "reverse", "align", "padding", "round");
function Yo(e) {
  return hv(Jy(), e);
}
var pv = ks("domain", "range", "reverse", "clamp", "interpolate", "nice", "round");
function mv(e) {
  return pv(dv(), e);
}
var gv = ks("domain", "range", "reverse", "base", "clamp", "interpolate", "nice", "round");
function Uu(e) {
  return gv(Mm(), e);
}
var yv = ks("domain", "range", "reverse", "unknown");
function jf(e) {
  return yv(Hf(), e);
}
function vv(e) {
  if ((typeof e == "function" || typeof e == "object" && e) && "valueOf" in e) {
    var t = e.valueOf();
    if (typeof t == "number")
      return t;
  }
  return e;
}
function xv(e, t) {
  var n = e;
  return "ticks" in n ? n.ticks(t) : n.domain().filter(function(a, r, o) {
    return t == null || o.length <= t || r % Math.round((o.length - 1) / t) === 0;
  });
}
function bv(e) {
  return e == null ? void 0 : e.toString();
}
var zi = [], Sv = function() {
  return zi.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, Ev = function() {
  return zi.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Gh = "ResizeObserver loop completed with undelivered notifications.", kv = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: Gh
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Gh), window.dispatchEvent(e);
}, ys;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(ys || (ys = {}));
var Bi = function(e) {
  return Object.freeze(e);
}, Fm = function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, Bi(this);
  }
  return e;
}(), zm = function() {
  function e(t, n, a, r) {
    return this.x = t, this.y = n, this.width = a, this.height = r, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Bi(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, n = t.x, a = t.y, r = t.top, o = t.right, s = t.bottom, u = t.left, d = t.width, f = t.height;
    return { x: n, y: a, top: r, right: o, bottom: s, left: u, width: d, height: f };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), Vf = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, Bm = function(e) {
  if (Vf(e)) {
    var t = e.getBBox(), n = t.width, a = t.height;
    return !n && !a;
  }
  var r = e, o = r.offsetWidth, s = r.offsetHeight;
  return !(o || s || e.getClientRects().length);
}, Zh = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var n = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(n && e instanceof n.Element);
}, wv = function(e) {
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
}, ss = typeof window < "u" ? window : {}, Su = /* @__PURE__ */ new WeakMap(), Qh = /auto|scroll/, Tv = /^tb|vertical/, Cv = /msie|trident/i.test(ss.navigator && ss.navigator.userAgent), Ur = function(e) {
  return parseFloat(e || "0");
}, Go = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new Fm((n ? t : e) || 0, (n ? e : t) || 0);
}, Jh = Bi({
  devicePixelContentBoxSize: Go(),
  borderBoxSize: Go(),
  contentBoxSize: Go(),
  contentRect: new zm(0, 0, 0, 0)
}), $m = function(e, t) {
  if (t === void 0 && (t = !1), Su.has(e) && !t)
    return Su.get(e);
  if (Bm(e))
    return Su.set(e, Jh), Jh;
  var n = getComputedStyle(e), a = Vf(e) && e.ownerSVGElement && e.getBBox(), r = !Cv && n.boxSizing === "border-box", o = Tv.test(n.writingMode || ""), s = !a && Qh.test(n.overflowY || ""), u = !a && Qh.test(n.overflowX || ""), d = a ? 0 : Ur(n.paddingTop), f = a ? 0 : Ur(n.paddingRight), g = a ? 0 : Ur(n.paddingBottom), v = a ? 0 : Ur(n.paddingLeft), y = a ? 0 : Ur(n.borderTopWidth), E = a ? 0 : Ur(n.borderRightWidth), w = a ? 0 : Ur(n.borderBottomWidth), O = a ? 0 : Ur(n.borderLeftWidth), T = v + f, m = d + g, A = O + E, _ = y + w, L = u ? e.offsetHeight - _ - e.clientHeight : 0, N = s ? e.offsetWidth - A - e.clientWidth : 0, M = r ? T + A : 0, U = r ? m + _ : 0, j = a ? a.width : Ur(n.width) - M - N, $ = a ? a.height : Ur(n.height) - U - L, V = j + T + N + A, ne = $ + m + L + _, H = Bi({
    devicePixelContentBoxSize: Go(Math.round(j * devicePixelRatio), Math.round($ * devicePixelRatio), o),
    borderBoxSize: Go(V, ne, o),
    contentBoxSize: Go(j, $, o),
    contentRect: new zm(v, d, j, $)
  });
  return Su.set(e, H), H;
}, Im = function(e, t, n) {
  var a = $m(e, n), r = a.borderBoxSize, o = a.contentBoxSize, s = a.devicePixelContentBoxSize;
  switch (t) {
    case ys.DEVICE_PIXEL_CONTENT_BOX:
      return s;
    case ys.BORDER_BOX:
      return r;
    default:
      return o;
  }
}, Hm = function() {
  function e(t) {
    var n = $m(t);
    this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = Bi([n.borderBoxSize]), this.contentBoxSize = Bi([n.contentBoxSize]), this.devicePixelContentBoxSize = Bi([n.devicePixelContentBoxSize]);
  }
  return e;
}(), Wm = function(e) {
  if (Bm(e))
    return 1 / 0;
  for (var t = 0, n = e.parentNode; n; )
    t += 1, n = n.parentNode;
  return t;
}, Av = function() {
  var e = 1 / 0, t = [];
  zi.forEach(function(s) {
    if (s.activeTargets.length !== 0) {
      var u = [];
      s.activeTargets.forEach(function(f) {
        var g = new Hm(f.target), v = Wm(f.target);
        u.push(g), f.lastReportedSize = Im(f.target, f.observedBox), v < e && (e = v);
      }), t.push(function() {
        s.callback.call(s.observer, u, s.observer);
      }), s.activeTargets.splice(0, s.activeTargets.length);
    }
  });
  for (var n = 0, a = t; n < a.length; n++) {
    var r = a[n];
    r();
  }
  return e;
}, ep = function(e) {
  zi.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(r) {
      r.isActive() && (Wm(r.target) > e ? n.activeTargets.push(r) : n.skippedTargets.push(r));
    });
  });
}, Pv = function() {
  var e = 0;
  for (ep(e); Sv(); )
    e = Av(), ep(e);
  return Ev() && kv(), e > 0;
}, Ad, jm = [], Rv = function() {
  return jm.splice(0).forEach(function(e) {
    return e();
  });
}, Dv = function(e) {
  if (!Ad) {
    var t = 0, n = document.createTextNode(""), a = { characterData: !0 };
    new MutationObserver(function() {
      return Rv();
    }).observe(n, a), Ad = function() {
      n.textContent = "".concat(t ? t-- : t++);
    };
  }
  jm.push(e), Ad();
}, Lv = function(e) {
  Dv(function() {
    requestAnimationFrame(e);
  });
}, Nu = 0, Ov = function() {
  return !!Nu;
}, _v = 250, Mv = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, tp = [
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
], np = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Pd = !1, Nv = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var n = this;
    if (t === void 0 && (t = _v), !Pd) {
      Pd = !0;
      var a = np(t);
      Lv(function() {
        var r = !1;
        try {
          r = Pv();
        } finally {
          if (Pd = !1, t = a - np(), !Ov())
            return;
          r ? n.run(1e3) : t > 0 ? n.run(t) : n.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, n = function() {
      return t.observer && t.observer.observe(document.body, Mv);
    };
    document.body ? n() : ss.addEventListener("DOMContentLoaded", n);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), tp.forEach(function(n) {
      return ss.addEventListener(n, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), tp.forEach(function(n) {
      return ss.removeEventListener(n, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), Zd = new Nv(), rp = function(e) {
  !Nu && e > 0 && Zd.start(), Nu += e, !Nu && Zd.stop();
}, Fv = function(e) {
  return !Vf(e) && !wv(e) && getComputedStyle(e).display === "inline";
}, zv = function() {
  function e(t, n) {
    this.target = t, this.observedBox = n || ys.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = Im(this.target, this.observedBox, !0);
    return Fv(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), Bv = function() {
  function e(t, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = n;
  }
  return e;
}(), Eu = /* @__PURE__ */ new WeakMap(), ap = function(e, t) {
  for (var n = 0; n < e.length; n += 1)
    if (e[n].target === t)
      return n;
  return -1;
}, ku = function() {
  function e() {
  }
  return e.connect = function(t, n) {
    var a = new Bv(t, n);
    Eu.set(t, a);
  }, e.observe = function(t, n, a) {
    var r = Eu.get(t), o = r.observationTargets.length === 0;
    ap(r.observationTargets, n) < 0 && (o && zi.push(r), r.observationTargets.push(new zv(n, a && a.box)), rp(1), Zd.schedule());
  }, e.unobserve = function(t, n) {
    var a = Eu.get(t), r = ap(a.observationTargets, n), o = a.observationTargets.length === 1;
    r >= 0 && (o && zi.splice(zi.indexOf(a), 1), a.observationTargets.splice(r, 1), rp(-1));
  }, e.disconnect = function(t) {
    var n = this, a = Eu.get(t);
    a.observationTargets.slice().forEach(function(r) {
      return n.unobserve(t, r.target);
    }), a.activeTargets.splice(0, a.activeTargets.length);
  }, e;
}(), $v = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    ku.connect(this, t);
  }
  return e.prototype.observe = function(t, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Zh(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    ku.observe(this, t, n);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Zh(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    ku.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    ku.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
const Iv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ResizeObserver: $v,
  ResizeObserverEntry: Hm,
  ResizeObserverSize: Fm
}, Symbol.toStringTag, { value: "Module" })), Hv = /* @__PURE__ */ If(Iv);
var ip = Km, Ma = Um(gm), Wv = Um(xy), jo = Uv(ue), jv = Hv, Vv = ["className", "children", "debounceTime", "ignoreDimensions", "parentSizeStyles", "enableDebounceLeadingCall"];
function Vm(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (Vm = function(r) {
    return r ? n : t;
  })(e);
}
function Uv(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var n = Vm(t);
  if (n && n.has(e))
    return n.get(e);
  var a = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      s && (s.get || s.set) ? Object.defineProperty(a, o, s) : a[o] = e[o];
    }
  return a.default = e, n && n.set(e, a), a;
}
function Um(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ku() {
  return Ku = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ku.apply(this, arguments);
}
function Kv(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, o;
  for (o = 0; o < a.length; o++)
    r = a[o], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var Yv = [];
function Km(e) {
  var t = e.className, n = e.children, a = e.debounceTime, r = a === void 0 ? 300 : a, o = e.ignoreDimensions, s = o === void 0 ? Yv : o, u = e.parentSizeStyles, d = u === void 0 ? {
    width: "100%",
    height: "100%"
  } : u, f = e.enableDebounceLeadingCall, g = f === void 0 ? !0 : f, v = Kv(e, Vv), y = (0, jo.useRef)(null), E = (0, jo.useRef)(0), w = (0, jo.useState)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), O = w[0], T = w[1], m = (0, jo.useMemo)(function() {
    var A = Array.isArray(s) ? s : [s];
    return (0, Wv.default)(function(_) {
      T(function(L) {
        var N = Object.keys(L), M = N.filter(function(j) {
          return L[j] !== _[j];
        }), U = M.every(function(j) {
          return A.includes(j);
        });
        return U ? L : _;
      });
    }, r, {
      leading: g
    });
  }, [r, g, s]);
  return (0, jo.useEffect)(function() {
    var A = new jv.ResizeObserver(function(_) {
      _ === void 0 && (_ = []), _.forEach(function(L) {
        var N = L.contentRect, M = N.left, U = N.top, j = N.width, $ = N.height;
        E.current = window.requestAnimationFrame(function() {
          m({
            width: j,
            height: $,
            top: U,
            left: M
          });
        });
      });
    });
    return y.current && A.observe(y.current), function() {
      window.cancelAnimationFrame(E.current), A.disconnect(), m != null && m.cancel && m.cancel();
    };
  }, [m]), /* @__PURE__ */ jo.default.createElement("div", Ku({
    style: d,
    ref: y,
    className: t
  }, v), n(Ku({}, O, {
    ref: y.current,
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
var Rd = /* @__PURE__ */ new Date(), Dd = /* @__PURE__ */ new Date();
function ha(e, t, n, a) {
  function r(o) {
    return e(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
  }
  return r.floor = function(o) {
    return e(o = /* @__PURE__ */ new Date(+o)), o;
  }, r.ceil = function(o) {
    return e(o = new Date(o - 1)), t(o, 1), e(o), o;
  }, r.round = function(o) {
    var s = r(o), u = r.ceil(o);
    return o - s < u - o ? s : u;
  }, r.offset = function(o, s) {
    return t(o = /* @__PURE__ */ new Date(+o), s == null ? 1 : Math.floor(s)), o;
  }, r.range = function(o, s, u) {
    var d = [], f;
    if (o = r.ceil(o), u = u == null ? 1 : Math.floor(u), !(o < s) || !(u > 0))
      return d;
    do
      d.push(f = /* @__PURE__ */ new Date(+o)), t(o, u), e(o);
    while (f < o && o < s);
    return d;
  }, r.filter = function(o) {
    return ha(function(s) {
      if (s >= s)
        for (; e(s), !o(s); )
          s.setTime(s - 1);
    }, function(s, u) {
      if (s >= s)
        if (u < 0)
          for (; ++u <= 0; )
            for (; t(s, -1), !o(s); )
              ;
        else
          for (; --u >= 0; )
            for (; t(s, 1), !o(s); )
              ;
    });
  }, n && (r.count = function(o, s) {
    return Rd.setTime(+o), Dd.setTime(+s), e(Rd), e(Dd), Math.floor(n(Rd, Dd));
  }, r.every = function(o) {
    return o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? r.filter(a ? function(s) {
      return a(s) % o === 0;
    } : function(s) {
      return r.count(0, s) % o === 0;
    }) : r;
  }), r;
}
const Xv = 1e3, Uf = Xv * 60, qv = Uf * 60, Kf = qv * 24, Ym = Kf * 7;
var Xm = ha(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Uf) / Kf,
  (e) => e.getDate() - 1
);
const qm = Xm;
Xm.range;
function ji(e) {
  return ha(function(t) {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setDate(t.getDate() + n * 7);
  }, function(t, n) {
    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Uf) / Ym;
  });
}
var Gm = ji(0), Yu = ji(1), Gv = ji(2), Zv = ji(3), Qo = ji(4), Qv = ji(5), Jv = ji(6);
Gm.range;
Yu.range;
Gv.range;
Zv.range;
Qo.range;
Qv.range;
Jv.range;
var Yf = ha(function(e) {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, function(e, t) {
  e.setFullYear(e.getFullYear() + t);
}, function(e, t) {
  return t.getFullYear() - e.getFullYear();
}, function(e) {
  return e.getFullYear();
});
Yf.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ha(function(t) {
    t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setFullYear(t.getFullYear() + n * e);
  });
};
const vs = Yf;
Yf.range;
var Zm = ha(function(e) {
  e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCDate(e.getUTCDate() + t);
}, function(e, t) {
  return (t - e) / Kf;
}, function(e) {
  return e.getUTCDate() - 1;
});
const Qm = Zm;
Zm.range;
function Vi(e) {
  return ha(function(t) {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, function(t, n) {
    return (n - t) / Ym;
  });
}
var Jm = Vi(0), Xu = Vi(1), ex = Vi(2), tx = Vi(3), Jo = Vi(4), nx = Vi(5), rx = Vi(6);
Jm.range;
Xu.range;
ex.range;
tx.range;
Jo.range;
nx.range;
rx.range;
var Xf = ha(function(e) {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, function(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}, function(e) {
  return e.getUTCFullYear();
});
Xf.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ha(function(t) {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setUTCFullYear(t.getUTCFullYear() + n * e);
  });
};
const xs = Xf;
Xf.range;
function Ld(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Od(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function ts(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function ax(e) {
  var t = e.dateTime, n = e.date, a = e.time, r = e.periods, o = e.days, s = e.shortDays, u = e.months, d = e.shortMonths, f = ns(r), g = rs(r), v = ns(o), y = rs(o), E = ns(s), w = rs(s), O = ns(u), T = rs(u), m = ns(d), A = rs(d), _ = {
    a: q,
    A: se,
    b: ae,
    B: J,
    c: null,
    d: dp,
    e: dp,
    f: Ax,
    g: zx,
    G: $x,
    H: wx,
    I: Tx,
    j: Cx,
    L: eg,
    m: Px,
    M: Rx,
    p: G,
    q: he,
    Q: pp,
    s: mp,
    S: Dx,
    u: Lx,
    U: Ox,
    V: _x,
    w: Mx,
    W: Nx,
    x: null,
    X: null,
    y: Fx,
    Y: Bx,
    Z: Ix,
    "%": hp
  }, L = {
    a: ee,
    A: ge,
    b: be,
    B: _e,
    c: null,
    d: fp,
    e: fp,
    f: Vx,
    g: eb,
    G: nb,
    H: Hx,
    I: Wx,
    j: jx,
    L: ng,
    m: Ux,
    M: Kx,
    p: Ve,
    q: Qe,
    Q: pp,
    s: mp,
    S: Yx,
    u: Xx,
    U: qx,
    V: Gx,
    w: Zx,
    W: Qx,
    x: null,
    X: null,
    y: Jx,
    Y: tb,
    Z: rb,
    "%": hp
  }, N = {
    a: V,
    A: ne,
    b: H,
    B: oe,
    c: fe,
    d: up,
    e: up,
    f: bx,
    g: sp,
    G: lp,
    H: cp,
    I: cp,
    j: gx,
    L: xx,
    m: mx,
    M: yx,
    p: $,
    q: px,
    Q: Ex,
    s: kx,
    S: vx,
    u: ux,
    U: cx,
    V: dx,
    w: sx,
    W: fx,
    x: I,
    X: Q,
    y: sp,
    Y: lp,
    Z: hx,
    "%": Sx
  };
  _.x = M(n, _), _.X = M(a, _), _.c = M(t, _), L.x = M(n, L), L.X = M(a, L), L.c = M(t, L);
  function M(Ae, ve) {
    return function(Ee) {
      var le = [], Be = -1, Ne = 0, qe = Ae.length, Ke, nt, at;
      for (Ee instanceof Date || (Ee = /* @__PURE__ */ new Date(+Ee)); ++Be < qe; )
        Ae.charCodeAt(Be) === 37 && (le.push(Ae.slice(Ne, Be)), (nt = op[Ke = Ae.charAt(++Be)]) != null ? Ke = Ae.charAt(++Be) : nt = Ke === "e" ? " " : "0", (at = ve[Ke]) && (Ke = at(Ee, nt)), le.push(Ke), Ne = Be + 1);
      return le.push(Ae.slice(Ne, Be)), le.join("");
    };
  }
  function U(Ae, ve) {
    return function(Ee) {
      var le = ts(1900, void 0, 1), Be = j(le, Ae, Ee += "", 0), Ne, qe;
      if (Be != Ee.length)
        return null;
      if ("Q" in le)
        return new Date(le.Q);
      if ("s" in le)
        return new Date(le.s * 1e3 + ("L" in le ? le.L : 0));
      if (ve && !("Z" in le) && (le.Z = 0), "p" in le && (le.H = le.H % 12 + le.p * 12), le.m === void 0 && (le.m = "q" in le ? le.q : 0), "V" in le) {
        if (le.V < 1 || le.V > 53)
          return null;
        "w" in le || (le.w = 1), "Z" in le ? (Ne = Od(ts(le.y, 0, 1)), qe = Ne.getUTCDay(), Ne = qe > 4 || qe === 0 ? Xu.ceil(Ne) : Xu(Ne), Ne = Qm.offset(Ne, (le.V - 1) * 7), le.y = Ne.getUTCFullYear(), le.m = Ne.getUTCMonth(), le.d = Ne.getUTCDate() + (le.w + 6) % 7) : (Ne = Ld(ts(le.y, 0, 1)), qe = Ne.getDay(), Ne = qe > 4 || qe === 0 ? Yu.ceil(Ne) : Yu(Ne), Ne = qm.offset(Ne, (le.V - 1) * 7), le.y = Ne.getFullYear(), le.m = Ne.getMonth(), le.d = Ne.getDate() + (le.w + 6) % 7);
      } else
        ("W" in le || "U" in le) && ("w" in le || (le.w = "u" in le ? le.u % 7 : "W" in le ? 1 : 0), qe = "Z" in le ? Od(ts(le.y, 0, 1)).getUTCDay() : Ld(ts(le.y, 0, 1)).getDay(), le.m = 0, le.d = "W" in le ? (le.w + 6) % 7 + le.W * 7 - (qe + 5) % 7 : le.w + le.U * 7 - (qe + 6) % 7);
      return "Z" in le ? (le.H += le.Z / 100 | 0, le.M += le.Z % 100, Od(le)) : Ld(le);
    };
  }
  function j(Ae, ve, Ee, le) {
    for (var Be = 0, Ne = ve.length, qe = Ee.length, Ke, nt; Be < Ne; ) {
      if (le >= qe)
        return -1;
      if (Ke = ve.charCodeAt(Be++), Ke === 37) {
        if (Ke = ve.charAt(Be++), nt = N[Ke in op ? ve.charAt(Be++) : Ke], !nt || (le = nt(Ae, Ee, le)) < 0)
          return -1;
      } else if (Ke != Ee.charCodeAt(le++))
        return -1;
    }
    return le;
  }
  function $(Ae, ve, Ee) {
    var le = f.exec(ve.slice(Ee));
    return le ? (Ae.p = g.get(le[0].toLowerCase()), Ee + le[0].length) : -1;
  }
  function V(Ae, ve, Ee) {
    var le = E.exec(ve.slice(Ee));
    return le ? (Ae.w = w.get(le[0].toLowerCase()), Ee + le[0].length) : -1;
  }
  function ne(Ae, ve, Ee) {
    var le = v.exec(ve.slice(Ee));
    return le ? (Ae.w = y.get(le[0].toLowerCase()), Ee + le[0].length) : -1;
  }
  function H(Ae, ve, Ee) {
    var le = m.exec(ve.slice(Ee));
    return le ? (Ae.m = A.get(le[0].toLowerCase()), Ee + le[0].length) : -1;
  }
  function oe(Ae, ve, Ee) {
    var le = O.exec(ve.slice(Ee));
    return le ? (Ae.m = T.get(le[0].toLowerCase()), Ee + le[0].length) : -1;
  }
  function fe(Ae, ve, Ee) {
    return j(Ae, t, ve, Ee);
  }
  function I(Ae, ve, Ee) {
    return j(Ae, n, ve, Ee);
  }
  function Q(Ae, ve, Ee) {
    return j(Ae, a, ve, Ee);
  }
  function q(Ae) {
    return s[Ae.getDay()];
  }
  function se(Ae) {
    return o[Ae.getDay()];
  }
  function ae(Ae) {
    return d[Ae.getMonth()];
  }
  function J(Ae) {
    return u[Ae.getMonth()];
  }
  function G(Ae) {
    return r[+(Ae.getHours() >= 12)];
  }
  function he(Ae) {
    return 1 + ~~(Ae.getMonth() / 3);
  }
  function ee(Ae) {
    return s[Ae.getUTCDay()];
  }
  function ge(Ae) {
    return o[Ae.getUTCDay()];
  }
  function be(Ae) {
    return d[Ae.getUTCMonth()];
  }
  function _e(Ae) {
    return u[Ae.getUTCMonth()];
  }
  function Ve(Ae) {
    return r[+(Ae.getUTCHours() >= 12)];
  }
  function Qe(Ae) {
    return 1 + ~~(Ae.getUTCMonth() / 3);
  }
  return {
    format: function(Ae) {
      var ve = M(Ae += "", _);
      return ve.toString = function() {
        return Ae;
      }, ve;
    },
    parse: function(Ae) {
      var ve = U(Ae += "", !1);
      return ve.toString = function() {
        return Ae;
      }, ve;
    },
    utcFormat: function(Ae) {
      var ve = M(Ae += "", L);
      return ve.toString = function() {
        return Ae;
      }, ve;
    },
    utcParse: function(Ae) {
      var ve = U(Ae += "", !0);
      return ve.toString = function() {
        return Ae;
      }, ve;
    }
  };
}
var op = { "-": "", _: " ", 0: "0" }, zn = /^\s*\d+/, ix = /^%/, ox = /[\\^$*+?|[\]().{}]/g;
function Xt(e, t, n) {
  var a = e < 0 ? "-" : "", r = (a ? -e : e) + "", o = r.length;
  return a + (o < n ? new Array(n - o + 1).join(t) + r : r);
}
function lx(e) {
  return e.replace(ox, "\\$&");
}
function ns(e) {
  return new RegExp("^(?:" + e.map(lx).join("|") + ")", "i");
}
function rs(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function sx(e, t, n) {
  var a = zn.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function ux(e, t, n) {
  var a = zn.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function cx(e, t, n) {
  var a = zn.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function dx(e, t, n) {
  var a = zn.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function fx(e, t, n) {
  var a = zn.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function lp(e, t, n) {
  var a = zn.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function sp(e, t, n) {
  var a = zn.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function hx(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function px(e, t, n) {
  var a = zn.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function mx(e, t, n) {
  var a = zn.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function up(e, t, n) {
  var a = zn.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function gx(e, t, n) {
  var a = zn.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function cp(e, t, n) {
  var a = zn.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function yx(e, t, n) {
  var a = zn.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function vx(e, t, n) {
  var a = zn.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function xx(e, t, n) {
  var a = zn.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function bx(e, t, n) {
  var a = zn.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function Sx(e, t, n) {
  var a = ix.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function Ex(e, t, n) {
  var a = zn.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function kx(e, t, n) {
  var a = zn.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function dp(e, t) {
  return Xt(e.getDate(), t, 2);
}
function wx(e, t) {
  return Xt(e.getHours(), t, 2);
}
function Tx(e, t) {
  return Xt(e.getHours() % 12 || 12, t, 2);
}
function Cx(e, t) {
  return Xt(1 + qm.count(vs(e), e), t, 3);
}
function eg(e, t) {
  return Xt(e.getMilliseconds(), t, 3);
}
function Ax(e, t) {
  return eg(e, t) + "000";
}
function Px(e, t) {
  return Xt(e.getMonth() + 1, t, 2);
}
function Rx(e, t) {
  return Xt(e.getMinutes(), t, 2);
}
function Dx(e, t) {
  return Xt(e.getSeconds(), t, 2);
}
function Lx(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Ox(e, t) {
  return Xt(Gm.count(vs(e) - 1, e), t, 2);
}
function tg(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Qo(e) : Qo.ceil(e);
}
function _x(e, t) {
  return e = tg(e), Xt(Qo.count(vs(e), e) + (vs(e).getDay() === 4), t, 2);
}
function Mx(e) {
  return e.getDay();
}
function Nx(e, t) {
  return Xt(Yu.count(vs(e) - 1, e), t, 2);
}
function Fx(e, t) {
  return Xt(e.getFullYear() % 100, t, 2);
}
function zx(e, t) {
  return e = tg(e), Xt(e.getFullYear() % 100, t, 2);
}
function Bx(e, t) {
  return Xt(e.getFullYear() % 1e4, t, 4);
}
function $x(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? Qo(e) : Qo.ceil(e), Xt(e.getFullYear() % 1e4, t, 4);
}
function Ix(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Xt(t / 60 | 0, "0", 2) + Xt(t % 60, "0", 2);
}
function fp(e, t) {
  return Xt(e.getUTCDate(), t, 2);
}
function Hx(e, t) {
  return Xt(e.getUTCHours(), t, 2);
}
function Wx(e, t) {
  return Xt(e.getUTCHours() % 12 || 12, t, 2);
}
function jx(e, t) {
  return Xt(1 + Qm.count(xs(e), e), t, 3);
}
function ng(e, t) {
  return Xt(e.getUTCMilliseconds(), t, 3);
}
function Vx(e, t) {
  return ng(e, t) + "000";
}
function Ux(e, t) {
  return Xt(e.getUTCMonth() + 1, t, 2);
}
function Kx(e, t) {
  return Xt(e.getUTCMinutes(), t, 2);
}
function Yx(e, t) {
  return Xt(e.getUTCSeconds(), t, 2);
}
function Xx(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function qx(e, t) {
  return Xt(Jm.count(xs(e) - 1, e), t, 2);
}
function rg(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Jo(e) : Jo.ceil(e);
}
function Gx(e, t) {
  return e = rg(e), Xt(Jo.count(xs(e), e) + (xs(e).getUTCDay() === 4), t, 2);
}
function Zx(e) {
  return e.getUTCDay();
}
function Qx(e, t) {
  return Xt(Xu.count(xs(e) - 1, e), t, 2);
}
function Jx(e, t) {
  return Xt(e.getUTCFullYear() % 100, t, 2);
}
function eb(e, t) {
  return e = rg(e), Xt(e.getUTCFullYear() % 100, t, 2);
}
function tb(e, t) {
  return Xt(e.getUTCFullYear() % 1e4, t, 4);
}
function nb(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Jo(e) : Jo.ceil(e), Xt(e.getUTCFullYear() % 1e4, t, 4);
}
function rb() {
  return "+0000";
}
function hp() {
  return "%";
}
function pp(e) {
  return +e;
}
function mp(e) {
  return Math.floor(+e / 1e3);
}
var Vo, Qd, ag;
ab({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function ab(e) {
  return Vo = ax(e), Qd = Vo.format, ag = Vo.parse, Vo.utcFormat, Vo.utcParse, Vo;
}
const Ct = ue.createContext({}), Bt = {
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
function ib(e, t) {
  return t === void 0 && (t = !0), (n) => (Bt.arr(n) ? n : Object.keys(n)).reduce((a, r) => {
    const o = t ? r[0].toLowerCase() + r.substring(1) : r;
    return a[o] = e(o), a;
  }, e);
}
function ig() {
  const e = ue.useState(!1), t = e[1];
  return ue.useCallback(() => t((a) => !a), []);
}
function Ci(e, t) {
  return Bt.und(e) || Bt.nul(e) ? t : e;
}
function Xo(e) {
  return Bt.und(e) ? [] : Bt.arr(e) ? e : [e];
}
function Mr(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  return Bt.fun(e) ? e(...n) : e;
}
function ob(e) {
  return e.to, e.from, e.config, e.onStart, e.onRest, e.onFrame, e.children, e.reset, e.reverse, e.force, e.immediate, e.delay, e.attach, e.destroyed, e.interpolateTo, e.ref, e.lazy, qr(e, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);
}
function _d(e) {
  const t = ob(e);
  if (Bt.und(t))
    return yn({
      to: t
    }, e);
  const n = Object.keys(e).reduce((a, r) => Bt.und(t[r]) ? yn({}, a, {
    [r]: e[r]
  }) : a, {});
  return yn({
    to: t
  }, n);
}
function lb(e, t) {
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
class Jd extends Nr {
  constructor() {
    super(...arguments), this.payload = [], this.attach = () => this.payload.forEach((t) => t instanceof Nr && t.addChild(this)), this.detach = () => this.payload.forEach((t) => t instanceof Nr && t.removeChild(this));
  }
}
class og extends Nr {
  constructor() {
    super(...arguments), this.payload = {}, this.attach = () => Object.values(this.payload).forEach((t) => t instanceof Nr && t.addChild(this)), this.detach = () => Object.values(this.payload).forEach((t) => t instanceof Nr && t.removeChild(this));
  }
  getValue(t) {
    t === void 0 && (t = !1);
    const n = {};
    for (const a in this.payload) {
      const r = this.payload[a];
      t && !(r instanceof Nr) || (n[a] = r instanceof Nr ? r[t ? "getAnimatedValue" : "getValue"]() : r);
    }
    return n;
  }
  getAnimatedValue() {
    return this.getValue(!0);
  }
}
let qf;
function sb(e, t) {
  qf = {
    fn: e,
    transform: t
  };
}
let lg;
function ub(e) {
  lg = e;
}
let sg = (e) => typeof window < "u" ? window.requestAnimationFrame(e) : -1, qu;
function cb(e) {
  qu = e;
}
let ug = () => Date.now(), db = (e) => e.current, cg;
function fb(e) {
  cg = e;
}
class hb extends og {
  constructor(t, n) {
    super(), this.update = void 0, this.payload = t.style ? yn({}, t, {
      style: cg(t.style)
    }) : t, this.update = n, this.attach();
  }
}
const pb = (e) => Bt.fun(e) && !(e.prototype instanceof i.Component), mb = (e) => ue.forwardRef((n, a) => {
  const r = ig(), o = ue.useRef(!0), s = ue.useRef(null), u = ue.useRef(null), d = ue.useCallback((y) => {
    const E = s.current, w = () => {
      let O = !1;
      u.current && (O = qf.fn(u.current, s.current.getAnimatedValue())), (!u.current || O === !1) && r();
    };
    s.current = new hb(y, w), E && E.detach();
  }, []);
  ue.useEffect(() => () => {
    o.current = !1, s.current && s.current.detach();
  }, []), ue.useImperativeHandle(a, () => db(u)), d(n);
  const f = s.current.getValue();
  f.scrollTop, f.scrollLeft;
  const g = qr(f, ["scrollTop", "scrollLeft"]), v = pb(e) ? void 0 : (y) => u.current = lb(y, a);
  return i.createElement(e, yn({}, g, {
    ref: v
  }));
});
let us = !1;
const $i = /* @__PURE__ */ new Set(), dg = () => {
  if (!us)
    return !1;
  let e = ug();
  for (let t of $i) {
    let n = !1;
    for (let a = 0; a < t.configs.length; a++) {
      let r = t.configs[a], o, s;
      for (let u = 0; u < r.animatedValues.length; u++) {
        let d = r.animatedValues[u];
        if (d.done)
          continue;
        let f = r.fromValues[u], g = r.toValues[u], v = d.lastPosition, y = g instanceof Nr, E = Array.isArray(r.initialVelocity) ? r.initialVelocity[u] : r.initialVelocity;
        if (y && (g = g.getValue()), r.immediate) {
          d.setValue(g), d.done = !0;
          continue;
        }
        if (typeof f == "string" || typeof g == "string") {
          d.setValue(g), d.done = !0;
          continue;
        }
        if (r.duration !== void 0)
          v = f + r.easing((e - d.startTime) / r.duration) * (g - f), o = e >= d.startTime + r.duration;
        else if (r.decay)
          v = f + E / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (e - d.startTime))), o = Math.abs(d.lastPosition - v) < 0.1, o && (g = v);
        else {
          s = d.lastTime !== void 0 ? d.lastTime : e, E = d.lastVelocity !== void 0 ? d.lastVelocity : r.initialVelocity, e > s + 64 && (s = e);
          let w = Math.floor(e - s);
          for (let A = 0; A < w; ++A) {
            let _ = -r.tension * (v - g), L = -r.friction * E, N = (_ + L) / r.mass;
            E = E + N * 1 / 1e3, v = v + E * 1 / 1e3;
          }
          let O = r.clamp && r.tension !== 0 ? f < g ? v > g : v < g : !1, T = Math.abs(E) <= r.precision, m = r.tension !== 0 ? Math.abs(g - v) <= r.precision : !0;
          o = O || T && m, d.lastVelocity = E, d.lastTime = e;
        }
        y && !r.toValues[u].done && (o = !1), o ? (d.value !== g && (v = g), d.done = !0) : n = !0, d.setValue(v), d.lastPosition = v;
      }
      t.props.onFrame && (t.values[r.name] = r.interpolation.getValue());
    }
    t.props.onFrame && t.props.onFrame(t.values), n || ($i.delete(t), t.stop(!0));
  }
  return $i.size ? sg(dg) : us = !1, us;
}, gb = (e) => {
  $i.has(e) || $i.add(e), us || (us = !0, sg(dg));
}, yb = (e) => {
  $i.has(e) && $i.delete(e);
};
function Gu(e, t, n) {
  if (typeof e == "function")
    return e;
  if (Array.isArray(e))
    return Gu({
      range: e,
      output: t,
      extrapolate: n
    });
  if (qu && typeof e.output[0] == "string")
    return qu(e);
  const a = e, r = a.output, o = a.range || [0, 1], s = a.extrapolateLeft || a.extrapolate || "extend", u = a.extrapolateRight || a.extrapolate || "extend", d = a.easing || ((f) => f);
  return (f) => {
    const g = xb(f, o);
    return vb(f, o[g], o[g + 1], r[g], r[g + 1], d, s, u, a.map);
  };
}
function vb(e, t, n, a, r, o, s, u, d) {
  let f = d ? d(e) : e;
  if (f < t) {
    if (s === "identity")
      return f;
    s === "clamp" && (f = t);
  }
  if (f > n) {
    if (u === "identity")
      return f;
    u === "clamp" && (f = n);
  }
  return a === r ? a : t === n ? e <= t ? a : r : (t === -1 / 0 ? f = -f : n === 1 / 0 ? f = f - t : f = (f - t) / (n - t), f = o(f), a === -1 / 0 ? f = -f : r === 1 / 0 ? f = f + a : f = f * (r - a) + a, f);
}
function xb(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
class el extends Jd {
  constructor(t, n, a, r) {
    super(), this.calc = void 0, this.payload = t instanceof Jd && !(t instanceof el) ? t.getPayload() : Array.isArray(t) ? t : [t], this.calc = Gu(n, a, r);
  }
  getValue() {
    return this.calc(...this.payload.map((t) => t.getValue()));
  }
  updateConfig(t, n, a) {
    this.calc = Gu(t, n, a);
  }
  interpolate(t, n, a) {
    return new el(this, t, n, a);
  }
}
const bb = (e, t, n) => e && new el(e, t, n);
function fg(e, t) {
  "update" in e ? t.add(e) : e.getChildren().forEach((n) => fg(n, t));
}
class ef extends Nr {
  constructor(t) {
    var n;
    super(), n = this, this.animatedStyles = /* @__PURE__ */ new Set(), this.value = void 0, this.startPosition = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.startTime = void 0, this.lastTime = void 0, this.done = !1, this.setValue = function(a, r) {
      r === void 0 && (r = !0), n.value = a, r && n.flush();
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
  interpolate(t, n, a) {
    return new el(this, t, n, a);
  }
}
class Sb extends Jd {
  constructor(t) {
    super(), this.payload = t.map((n) => new ef(n));
  }
  setValue(t, n) {
    n === void 0 && (n = !0), Array.isArray(t) ? t.length === this.payload.length && t.forEach((a, r) => this.payload[r].setValue(a, n)) : this.payload.forEach((a) => a.setValue(t, n));
  }
  getValue() {
    return this.payload.map((t) => t.getValue());
  }
  interpolate(t, n) {
    return new el(this, t, n);
  }
}
let Eb = 0;
class kb {
  constructor() {
    this.id = void 0, this.idle = !0, this.hasChanged = !1, this.guid = 0, this.local = 0, this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.values = {}, this.configs = [], this.listeners = [], this.queue = [], this.localQueue = void 0, this.getValues = () => this.interpolations, this.id = Eb++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */
  update(t) {
    if (!t)
      return this;
    const n = _d(t), a = n.delay, r = a === void 0 ? 0 : a, o = n.to, s = qr(n, ["delay", "to"]);
    if (Bt.arr(o) || Bt.fun(o))
      this.queue.push(yn({}, s, {
        delay: r,
        to: o
      }));
    else if (o) {
      let u = {};
      Object.entries(o).forEach((d) => {
        let f = d[0], g = d[1];
        const v = yn({
          to: {
            [f]: g
          },
          delay: Mr(r, f)
        }, s), y = u[v.delay] && u[v.delay].to;
        u[v.delay] = yn({}, u[v.delay], v, {
          to: yn({}, y, v.to)
        });
      }), this.queue = Object.values(u);
    }
    return this.queue = this.queue.sort((u, d) => u.delay - d.delay), this.diff(s), this;
  }
  /** start(onEnd)
   *  This function either executes a queue, if present, or starts the frameloop, which animates */
  start(t) {
    if (this.queue.length) {
      this.idle = !1, this.localQueue && this.localQueue.forEach((r) => {
        let o = r.from, s = o === void 0 ? {} : o, u = r.to, d = u === void 0 ? {} : u;
        Bt.obj(s) && (this.merged = yn({}, s, this.merged)), Bt.obj(d) && (this.merged = yn({}, this.merged, d));
      });
      const n = this.local = ++this.guid, a = this.localQueue = this.queue;
      this.queue = [], a.forEach((r, o) => {
        let s = r.delay, u = qr(r, ["delay"]);
        const d = (g) => {
          o === a.length - 1 && n === this.guid && g && (this.idle = !0, this.props.onRest && this.props.onRest(this.merged)), t && t();
        };
        let f = Bt.arr(u.to) || Bt.fun(u.to);
        s ? setTimeout(() => {
          n === this.guid && (f ? this.runAsync(u, d) : this.diff(u).start(d));
        }, s) : f ? this.runAsync(u, d) : this.diff(u).start(d);
      });
    } else
      Bt.fun(t) && this.listeners.push(t), this.props.onStart && this.props.onStart(), gb(this);
    return this;
  }
  stop(t) {
    return this.listeners.forEach((n) => n(t)), this.listeners = [], this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */
  pause(t) {
    return this.stop(!0), t && yb(this), this;
  }
  runAsync(t, n) {
    var a = this;
    t.delay;
    let r = qr(t, ["delay"]);
    const o = this.local;
    let s = Promise.resolve(void 0);
    if (Bt.arr(r.to))
      for (let u = 0; u < r.to.length; u++) {
        const d = u, f = yn({}, r, _d(r.to[d]));
        Bt.arr(f.config) && (f.config = f.config[d]), s = s.then(() => {
          if (o === this.guid)
            return new Promise((g) => this.diff(f).start(g));
        });
      }
    else if (Bt.fun(r.to)) {
      let u = 0, d;
      s = s.then(() => r.to(
        // next(props)
        (f) => {
          const g = yn({}, r, _d(f));
          if (Bt.arr(g.config) && (g.config = g.config[u]), u++, o === this.guid)
            return d = new Promise((v) => this.diff(g).start(v));
        },
        // cancel()
        function(f) {
          return f === void 0 && (f = !0), a.stop(f);
        }
      ).then(() => d));
    }
    s.then(n);
  }
  diff(t) {
    this.props = yn({}, this.props, t);
    let n = this.props, a = n.from, r = a === void 0 ? {} : a, o = n.to, s = o === void 0 ? {} : o, u = n.config, d = u === void 0 ? {} : u, f = n.reverse, g = n.attach, v = n.reset, y = n.immediate;
    if (f) {
      var E = [s, r];
      r = E[0], s = E[1];
    }
    this.merged = yn({}, r, this.merged, s), this.hasChanged = !1;
    let w = g && g(this);
    if (this.animations = Object.entries(this.merged).reduce((O, T) => {
      let m = T[0], A = T[1], _ = O[m] || {};
      const L = Bt.num(A), N = Bt.str(A) && !A.startsWith("#") && !/\d/.test(A) && !lg[A], M = Bt.arr(A), U = !L && !M && !N;
      let j = Bt.und(r[m]) ? A : r[m], $ = L || M || N ? A : 1, V = Mr(d, m);
      w && ($ = w.animations[m].parent);
      let ne = _.parent, H = _.interpolation, oe = Xo(w ? $.getPayload() : $), fe, I = A;
      U && (I = qu({
        range: [0, 1],
        output: [A, A]
      })(1));
      let Q = H && H.getValue();
      const se = !Bt.und(ne) && _.animatedValues.some((he) => !he.done), ae = !Bt.equ(I, Q), J = !Bt.equ(I, _.previous), G = !Bt.equ(V, _.config);
      if (v || J && ae || G) {
        if (L || N)
          ne = H = _.parent || new ef(j);
        else if (M)
          ne = H = _.parent || new Sb(j);
        else if (U) {
          let he = _.interpolation && _.interpolation.calc(_.parent.value);
          he = he !== void 0 && !v ? he : j, _.parent ? (ne = _.parent, ne.setValue(0, !1)) : ne = new ef(0);
          const ee = {
            output: [he, A]
          };
          _.interpolation ? (H = _.interpolation, _.interpolation.updateConfig(ee)) : H = ne.interpolate(ee);
        }
        return oe = Xo(w ? $.getPayload() : $), fe = Xo(ne.getPayload()), v && !U && ne.setValue(j, !1), this.hasChanged = !0, fe.forEach((he) => {
          he.startPosition = he.value, he.lastPosition = he.value, he.lastVelocity = se ? he.lastVelocity : void 0, he.lastTime = se ? he.lastTime : void 0, he.startTime = ug(), he.done = !1, he.animatedStyles.clear();
        }), Mr(y, m) && ne.setValue(U ? $ : A, !1), yn({}, O, {
          [m]: yn({}, _, {
            name: m,
            parent: ne,
            interpolation: H,
            animatedValues: fe,
            toValues: oe,
            previous: I,
            config: V,
            fromValues: Xo(ne.getValue()),
            immediate: Mr(y, m),
            initialVelocity: Ci(V.velocity, 0),
            clamp: Ci(V.clamp, !1),
            precision: Ci(V.precision, 0.01),
            tension: Ci(V.tension, 170),
            friction: Ci(V.friction, 26),
            mass: Ci(V.mass, 1),
            duration: V.duration,
            easing: Ci(V.easing, (he) => he),
            decay: V.decay
          })
        });
      } else
        return ae ? O : (U && (ne.setValue(1, !1), H.updateConfig({
          output: [I, I]
        })), ne.done = !0, this.hasChanged = !0, yn({}, O, {
          [m]: yn({}, O[m], {
            previous: I
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
let wb = 0;
const Fu = "enter", Md = "leave", Nd = "update", Tb = (e, t) => (typeof t == "function" ? e.map(t) : Xo(t)).map(String), tf = (e) => {
  let t = e.items, n = e.keys, a = n === void 0 ? (o) => o : n, r = qr(e, ["items", "keys"]);
  return t = Xo(t !== void 0 ? t : null), yn({
    items: t,
    keys: Tb(t, a)
  }, r);
};
function Cb(e, t, n) {
  const a = yn({
    items: e,
    keys: t || ((A) => A)
  }, n), r = tf(a), o = r.lazy, s = o === void 0 ? !1 : o;
  r.unique;
  const u = r.reset, d = u === void 0 ? !1 : u;
  r.enter, r.leave, r.update;
  const f = r.onDestroyed;
  r.keys, r.items;
  const g = r.onFrame, v = r.onRest, y = r.onStart, E = r.ref, w = qr(r, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]), O = ig(), T = ue.useRef(!1), m = ue.useRef({
    mounted: !1,
    first: !0,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!a.ref,
    instances: !T.current && /* @__PURE__ */ new Map(),
    forceUpdate: O
  });
  return ue.useImperativeHandle(a.ref, () => ({
    start: () => Promise.all(Array.from(m.current.instances).map((A) => {
      let _ = A[1];
      return new Promise((L) => _.start(L));
    })),
    stop: (A) => Array.from(m.current.instances).forEach((_) => _[1].stop(A)),
    get controllers() {
      return Array.from(m.current.instances).map((A) => A[1]);
    }
  })), m.current = Ab(m.current, a), m.current.changed && m.current.transitions.forEach((A) => {
    const _ = A.slot, L = A.from, N = A.to, M = A.config, U = A.trail, j = A.key, $ = A.item;
    m.current.instances.has(j) || m.current.instances.set(j, new kb());
    const V = m.current.instances.get(j), ne = yn({}, w, {
      to: N,
      from: L,
      config: M,
      ref: E,
      onRest: (H) => {
        m.current.mounted && (A.destroyed && (!E && !s && gp(m, j), f && f($)), !Array.from(m.current.instances).some((I) => !I[1].idle) && (E || s) && m.current.deleted.length > 0 && gp(m), v && v($, _, H));
      },
      onStart: y && (() => y($, _)),
      onFrame: g && ((H) => g($, _, H)),
      delay: U,
      reset: d && _ === Fu
      // Update controller
    });
    V.update(ne), m.current.paused || V.start();
  }), ue.useEffect(() => (m.current.mounted = T.current = !0, () => {
    m.current.mounted = T.current = !1, Array.from(m.current.instances).map((A) => A[1].destroy()), m.current.instances.clear();
  }), []), m.current.transitions.map((A) => {
    let _ = A.item, L = A.slot, N = A.key;
    return {
      item: _,
      key: N,
      state: L,
      props: m.current.instances.get(N).getValues()
    };
  });
}
function gp(e, t) {
  const n = e.current.deleted;
  for (let a of n) {
    let r = a.key;
    const o = (s) => s.key !== r;
    (Bt.und(t) || t === r) && (e.current.instances.delete(r), e.current.transitions = e.current.transitions.filter(o), e.current.deleted = e.current.deleted.filter(o));
  }
  e.current.forceUpdate();
}
function Ab(e, t) {
  let n = e.first, a = e.prevProps, r = qr(e, ["first", "prevProps"]), o = tf(t), s = o.items, u = o.keys, d = o.initial, f = o.from, g = o.enter, v = o.leave, y = o.update, E = o.trail, w = E === void 0 ? 0 : E, O = o.unique, T = o.config, m = o.order, A = m === void 0 ? [Fu, Md, Nd] : m, _ = tf(a), L = _.keys, N = _.items, M = yn({}, r.current), U = [...r.deleted], j = Object.keys(M), $ = new Set(j), V = new Set(u), ne = u.filter((Q) => !$.has(Q)), H = r.transitions.filter((Q) => !Q.destroyed && !V.has(Q.originalKey)).map((Q) => Q.originalKey), oe = u.filter((Q) => $.has(Q)), fe = -w;
  for (; A.length; )
    switch (A.shift()) {
      case Fu: {
        ne.forEach((q, se) => {
          O && U.find((he) => he.originalKey === q) && (U = U.filter((he) => he.originalKey !== q));
          const ae = u.indexOf(q), J = s[ae], G = n && d !== void 0 ? "initial" : Fu;
          M[q] = {
            slot: G,
            originalKey: q,
            key: O ? String(q) : wb++,
            item: J,
            trail: fe = fe + w,
            config: Mr(T, J, G),
            from: Mr(n && d !== void 0 ? d || {} : f, J),
            to: Mr(g, J)
          };
        });
        break;
      }
      case Md: {
        H.forEach((q) => {
          const se = L.indexOf(q), ae = N[se], J = Md;
          U.unshift(yn({}, M[q], {
            slot: J,
            destroyed: !0,
            left: L[Math.max(0, se - 1)],
            right: L[Math.min(L.length, se + 1)],
            trail: fe = fe + w,
            config: Mr(T, ae, J),
            to: Mr(v, ae)
          })), delete M[q];
        });
        break;
      }
      case Nd: {
        oe.forEach((q) => {
          const se = u.indexOf(q), ae = s[se], J = Nd;
          M[q] = yn({}, M[q], {
            item: ae,
            slot: J,
            trail: fe = fe + w,
            config: Mr(T, ae, J),
            to: Mr(y, ae)
          });
        });
        break;
      }
    }
  let I = u.map((Q) => M[Q]);
  return U.forEach((Q) => {
    let q = Q.left;
    Q.right;
    let se = qr(Q, ["left", "right"]), ae;
    (ae = I.findIndex((J) => J.originalKey === q)) !== -1 && (ae += 1), ae = Math.max(0, ae), I = [...I.slice(0, ae), se, ...I.slice(ae)];
  }), yn({}, r, {
    changed: ne.length || H.length || oe.length,
    first: n && ne.length === 0,
    transitions: I,
    current: M,
    deleted: U,
    prevProps: t
  });
}
class Pb extends og {
  constructor(t) {
    t === void 0 && (t = {}), super(), t.transform && !(t.transform instanceof Nr) && (t = qf.transform(t)), this.payload = t;
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
}, Fr = "[-+]?\\d*\\.?\\d+", Qu = Fr + "%";
function Ec() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const Rb = new RegExp("rgb" + Ec(Fr, Fr, Fr)), Db = new RegExp("rgba" + Ec(Fr, Fr, Fr, Fr)), Lb = new RegExp("hsl" + Ec(Fr, Qu, Qu)), Ob = new RegExp("hsla" + Ec(Fr, Qu, Qu, Fr)), _b = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Mb = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Nb = /^#([0-9a-fA-F]{6})$/, Fb = /^#([0-9a-fA-F]{8})$/;
function zb(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Nb.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Zu.hasOwnProperty(e) ? Zu[e] : (t = Rb.exec(e)) ? (Uo(t[1]) << 24 | // r
  Uo(t[2]) << 16 | // g
  Uo(t[3]) << 8 | // b
  255) >>> // a
  0 : (t = Db.exec(e)) ? (Uo(t[1]) << 24 | // r
  Uo(t[2]) << 16 | // g
  Uo(t[3]) << 8 | // b
  xp(t[4])) >>> // a
  0 : (t = _b.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (t = Fb.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Mb.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    t[4] + t[4],
    // a
    16
  ) >>> 0 : (t = Lb.exec(e)) ? (yp(
    vp(t[1]),
    // h
    wu(t[2]),
    // s
    wu(t[3])
    // l
  ) | 255) >>> // a
  0 : (t = Ob.exec(e)) ? (yp(
    vp(t[1]),
    // h
    wu(t[2]),
    // s
    wu(t[3])
    // l
  ) | xp(t[4])) >>> // a
  0 : null;
}
function Fd(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function yp(e, t, n) {
  const a = n < 0.5 ? n * (1 + t) : n + t - n * t, r = 2 * n - a, o = Fd(r, a, e + 1 / 3), s = Fd(r, a, e), u = Fd(r, a, e - 1 / 3);
  return Math.round(o * 255) << 24 | Math.round(s * 255) << 16 | Math.round(u * 255) << 8;
}
function Uo(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function vp(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function xp(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function wu(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function bp(e) {
  let t = zb(e);
  if (t === null)
    return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, a = (t & 16711680) >>> 16, r = (t & 65280) >>> 8, o = (t & 255) / 255;
  return `rgba(${n}, ${a}, ${r}, ${o})`;
}
const Tu = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, Bb = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, $b = new RegExp(`(${Object.keys(Zu).join("|")})`, "g"), Ib = (e) => {
  const t = e.output.map((r) => r.replace(Bb, bp)).map((r) => r.replace($b, bp)), n = t[0].match(Tu).map(() => []);
  t.forEach((r) => {
    r.match(Tu).forEach((o, s) => n[s].push(+o));
  });
  const a = t[0].match(Tu).map((r, o) => Gu(yn({}, e, {
    output: n[o]
  })));
  return (r) => {
    let o = 0;
    return t[0].replace(Tu, () => a[o++](r)).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (s, u, d, f, g) => `rgba(${Math.round(u)}, ${Math.round(d)}, ${Math.round(f)}, ${g})`);
  };
};
let cs = {
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
const Hb = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), Wb = ["Webkit", "Ms", "Moz", "O"];
cs = Object.keys(cs).reduce((e, t) => (Wb.forEach((n) => e[Hb(n, t)] = e[t]), e), cs);
function jb(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : !n && typeof t == "number" && t !== 0 && !(cs.hasOwnProperty(e) && cs[e]) ? t + "px" : ("" + t).trim();
}
const Sp = {};
fb((e) => new Pb(e));
cb(Ib);
ub(Zu);
sb((e, t) => {
  if (e.nodeType && e.setAttribute !== void 0) {
    const r = t.style, o = t.children, s = t.scrollTop, u = t.scrollLeft, d = qr(t, ["style", "children", "scrollTop", "scrollLeft"]), f = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter";
    s !== void 0 && (e.scrollTop = s), u !== void 0 && (e.scrollLeft = u), o !== void 0 && (e.textContent = o);
    for (let g in r)
      if (r.hasOwnProperty(g)) {
        var n = g.indexOf("--") === 0, a = jb(g, r[g], n);
        g === "float" && (g = "cssFloat"), n ? e.style.setProperty(g, a) : e.style[g] = a;
      }
    for (let g in d) {
      const v = f ? g : Sp[g] || (Sp[g] = g.replace(/([A-Z])/g, (y) => "-" + y.toLowerCase()));
      typeof e.getAttribute(v) < "u" && e.setAttribute(v, d[g]);
    }
    return;
  } else
    return !1;
}, (e) => e);
const Vb = [
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
], Ub = ib(mb, !1), Ep = Ub(Vb);
var nf = Math.PI, rf = 2 * nf, Mi = 1e-6, Kb = rf - Mi;
function af() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null, this._ = "";
}
function ws() {
  return new af();
}
af.prototype = ws.prototype = {
  constructor: af,
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
  bezierCurveTo: function(e, t, n, a, r, o) {
    this._ += "C" + +e + "," + +t + "," + +n + "," + +a + "," + (this._x1 = +r) + "," + (this._y1 = +o);
  },
  arcTo: function(e, t, n, a, r) {
    e = +e, t = +t, n = +n, a = +a, r = +r;
    var o = this._x1, s = this._y1, u = n - e, d = a - t, f = o - e, g = s - t, v = f * f + g * g;
    if (r < 0)
      throw new Error("negative radius: " + r);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
    else if (v > Mi)
      if (!(Math.abs(g * u - d * f) > Mi) || !r)
        this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
      else {
        var y = n - o, E = a - s, w = u * u + d * d, O = y * y + E * E, T = Math.sqrt(w), m = Math.sqrt(v), A = r * Math.tan((nf - Math.acos((w + v - O) / (2 * T * m))) / 2), _ = A / m, L = A / T;
        Math.abs(_ - 1) > Mi && (this._ += "L" + (e + _ * f) + "," + (t + _ * g)), this._ += "A" + r + "," + r + ",0,0," + +(g * y > f * E) + "," + (this._x1 = e + L * u) + "," + (this._y1 = t + L * d);
      }
  },
  arc: function(e, t, n, a, r, o) {
    e = +e, t = +t, n = +n, o = !!o;
    var s = n * Math.cos(a), u = n * Math.sin(a), d = e + s, f = t + u, g = 1 ^ o, v = o ? a - r : r - a;
    if (n < 0)
      throw new Error("negative radius: " + n);
    this._x1 === null ? this._ += "M" + d + "," + f : (Math.abs(this._x1 - d) > Mi || Math.abs(this._y1 - f) > Mi) && (this._ += "L" + d + "," + f), n && (v < 0 && (v = v % rf + rf), v > Kb ? this._ += "A" + n + "," + n + ",0,1," + g + "," + (e - s) + "," + (t - u) + "A" + n + "," + n + ",0,1," + g + "," + (this._x1 = d) + "," + (this._y1 = f) : v > Mi && (this._ += "A" + n + "," + n + ",0," + +(v >= nf) + "," + g + "," + (this._x1 = e + n * Math.cos(r)) + "," + (this._y1 = t + n * Math.sin(r))));
  },
  rect: function(e, t, n, a) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +n + "v" + +a + "h" + -n + "Z";
  },
  toString: function() {
    return this._;
  }
};
function Vt(e) {
  return function() {
    return e;
  };
}
var kp = Math.abs, Kn = Math.atan2, Ai = Math.cos, Yb = Math.max, zd = Math.min, Kr = Math.sin, qo = Math.sqrt, Yn = 1e-12, bs = Math.PI, Ju = bs / 2, zu = 2 * bs;
function Xb(e) {
  return e > 1 ? 0 : e < -1 ? bs : Math.acos(e);
}
function wp(e) {
  return e >= 1 ? Ju : e <= -1 ? -Ju : Math.asin(e);
}
function qb(e) {
  return e.innerRadius;
}
function Gb(e) {
  return e.outerRadius;
}
function Zb(e) {
  return e.startAngle;
}
function Qb(e) {
  return e.endAngle;
}
function Jb(e) {
  return e && e.padAngle;
}
function e0(e, t, n, a, r, o, s, u) {
  var d = n - e, f = a - t, g = s - r, v = u - o, y = v * d - g * f;
  if (!(y * y < Yn))
    return y = (g * (t - o) - v * (e - r)) / y, [e + y * d, t + y * f];
}
function Cu(e, t, n, a, r, o, s) {
  var u = e - n, d = t - a, f = (s ? o : -o) / qo(u * u + d * d), g = f * d, v = -f * u, y = e + g, E = t + v, w = n + g, O = a + v, T = (y + w) / 2, m = (E + O) / 2, A = w - y, _ = O - E, L = A * A + _ * _, N = r - o, M = y * O - w * E, U = (_ < 0 ? -1 : 1) * qo(Yb(0, N * N * L - M * M)), j = (M * _ - A * U) / L, $ = (-M * A - _ * U) / L, V = (M * _ + A * U) / L, ne = (-M * A + _ * U) / L, H = j - T, oe = $ - m, fe = V - T, I = ne - m;
  return H * H + oe * oe > fe * fe + I * I && (j = V, $ = ne), {
    cx: j,
    cy: $,
    x01: -g,
    y01: -v,
    x11: j * (r / N - 1),
    y11: $ * (r / N - 1)
  };
}
function t0() {
  var e = qb, t = Gb, n = Vt(0), a = null, r = Zb, o = Qb, s = Jb, u = null;
  function d() {
    var f, g, v = +e.apply(this, arguments), y = +t.apply(this, arguments), E = r.apply(this, arguments) - Ju, w = o.apply(this, arguments) - Ju, O = kp(w - E), T = w > E;
    if (u || (u = f = ws()), y < v && (g = y, y = v, v = g), !(y > Yn))
      u.moveTo(0, 0);
    else if (O > zu - Yn)
      u.moveTo(y * Ai(E), y * Kr(E)), u.arc(0, 0, y, E, w, !T), v > Yn && (u.moveTo(v * Ai(w), v * Kr(w)), u.arc(0, 0, v, w, E, T));
    else {
      var m = E, A = w, _ = E, L = w, N = O, M = O, U = s.apply(this, arguments) / 2, j = U > Yn && (a ? +a.apply(this, arguments) : qo(v * v + y * y)), $ = zd(kp(y - v) / 2, +n.apply(this, arguments)), V = $, ne = $, H, oe;
      if (j > Yn) {
        var fe = wp(j / v * Kr(U)), I = wp(j / y * Kr(U));
        (N -= fe * 2) > Yn ? (fe *= T ? 1 : -1, _ += fe, L -= fe) : (N = 0, _ = L = (E + w) / 2), (M -= I * 2) > Yn ? (I *= T ? 1 : -1, m += I, A -= I) : (M = 0, m = A = (E + w) / 2);
      }
      var Q = y * Ai(m), q = y * Kr(m), se = v * Ai(L), ae = v * Kr(L);
      if ($ > Yn) {
        var J = y * Ai(A), G = y * Kr(A), he = v * Ai(_), ee = v * Kr(_), ge;
        if (O < bs && (ge = e0(Q, q, he, ee, J, G, se, ae))) {
          var be = Q - ge[0], _e = q - ge[1], Ve = J - ge[0], Qe = G - ge[1], Ae = 1 / Kr(Xb((be * Ve + _e * Qe) / (qo(be * be + _e * _e) * qo(Ve * Ve + Qe * Qe))) / 2), ve = qo(ge[0] * ge[0] + ge[1] * ge[1]);
          V = zd($, (v - ve) / (Ae - 1)), ne = zd($, (y - ve) / (Ae + 1));
        }
      }
      M > Yn ? ne > Yn ? (H = Cu(he, ee, Q, q, y, ne, T), oe = Cu(J, G, se, ae, y, ne, T), u.moveTo(H.cx + H.x01, H.cy + H.y01), ne < $ ? u.arc(H.cx, H.cy, ne, Kn(H.y01, H.x01), Kn(oe.y01, oe.x01), !T) : (u.arc(H.cx, H.cy, ne, Kn(H.y01, H.x01), Kn(H.y11, H.x11), !T), u.arc(0, 0, y, Kn(H.cy + H.y11, H.cx + H.x11), Kn(oe.cy + oe.y11, oe.cx + oe.x11), !T), u.arc(oe.cx, oe.cy, ne, Kn(oe.y11, oe.x11), Kn(oe.y01, oe.x01), !T))) : (u.moveTo(Q, q), u.arc(0, 0, y, m, A, !T)) : u.moveTo(Q, q), !(v > Yn) || !(N > Yn) ? u.lineTo(se, ae) : V > Yn ? (H = Cu(se, ae, J, G, v, -V, T), oe = Cu(Q, q, he, ee, v, -V, T), u.lineTo(H.cx + H.x01, H.cy + H.y01), V < $ ? u.arc(H.cx, H.cy, V, Kn(H.y01, H.x01), Kn(oe.y01, oe.x01), !T) : (u.arc(H.cx, H.cy, V, Kn(H.y01, H.x01), Kn(H.y11, H.x11), !T), u.arc(0, 0, v, Kn(H.cy + H.y11, H.cx + H.x11), Kn(oe.cy + oe.y11, oe.cx + oe.x11), T), u.arc(oe.cx, oe.cy, V, Kn(oe.y11, oe.x11), Kn(oe.y01, oe.x01), !T))) : u.arc(0, 0, v, L, _, T);
    }
    if (u.closePath(), f)
      return u = null, f + "" || null;
  }
  return d.centroid = function() {
    var f = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, g = (+r.apply(this, arguments) + +o.apply(this, arguments)) / 2 - bs / 2;
    return [Ai(g) * f, Kr(g) * f];
  }, d.innerRadius = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Vt(+f), d) : e;
  }, d.outerRadius = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Vt(+f), d) : t;
  }, d.cornerRadius = function(f) {
    return arguments.length ? (n = typeof f == "function" ? f : Vt(+f), d) : n;
  }, d.padRadius = function(f) {
    return arguments.length ? (a = f == null ? null : typeof f == "function" ? f : Vt(+f), d) : a;
  }, d.startAngle = function(f) {
    return arguments.length ? (r = typeof f == "function" ? f : Vt(+f), d) : r;
  }, d.endAngle = function(f) {
    return arguments.length ? (o = typeof f == "function" ? f : Vt(+f), d) : o;
  }, d.padAngle = function(f) {
    return arguments.length ? (s = typeof f == "function" ? f : Vt(+f), d) : s;
  }, d.context = function(f) {
    return arguments.length ? (u = f ?? null, d) : u;
  }, d;
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
function kc(e) {
  return new hg(e);
}
function Gf(e) {
  return e[0];
}
function Zf(e) {
  return e[1];
}
function pg() {
  var e = Gf, t = Zf, n = Vt(!0), a = null, r = kc, o = null;
  function s(u) {
    var d, f = u.length, g, v = !1, y;
    for (a == null && (o = r(y = ws())), d = 0; d <= f; ++d)
      !(d < f && n(g = u[d], d, u)) === v && ((v = !v) ? o.lineStart() : o.lineEnd()), v && o.point(+e(g, d, u), +t(g, d, u));
    if (y)
      return o = null, y + "" || null;
  }
  return s.x = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : Vt(+u), s) : e;
  }, s.y = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : Vt(+u), s) : t;
  }, s.defined = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : Vt(!!u), s) : n;
  }, s.curve = function(u) {
    return arguments.length ? (r = u, a != null && (o = r(a)), s) : r;
  }, s.context = function(u) {
    return arguments.length ? (u == null ? a = o = null : o = r(a = u), s) : a;
  }, s;
}
function n0() {
  var e = Gf, t = null, n = Vt(0), a = Zf, r = Vt(!0), o = null, s = kc, u = null;
  function d(g) {
    var v, y, E, w = g.length, O, T = !1, m, A = new Array(w), _ = new Array(w);
    for (o == null && (u = s(m = ws())), v = 0; v <= w; ++v) {
      if (!(v < w && r(O = g[v], v, g)) === T)
        if (T = !T)
          y = v, u.areaStart(), u.lineStart();
        else {
          for (u.lineEnd(), u.lineStart(), E = v - 1; E >= y; --E)
            u.point(A[E], _[E]);
          u.lineEnd(), u.areaEnd();
        }
      T && (A[v] = +e(O, v, g), _[v] = +n(O, v, g), u.point(t ? +t(O, v, g) : A[v], a ? +a(O, v, g) : _[v]));
    }
    if (m)
      return u = null, m + "" || null;
  }
  function f() {
    return pg().defined(r).curve(s).context(o);
  }
  return d.x = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : Vt(+g), t = null, d) : e;
  }, d.x0 = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : Vt(+g), d) : e;
  }, d.x1 = function(g) {
    return arguments.length ? (t = g == null ? null : typeof g == "function" ? g : Vt(+g), d) : t;
  }, d.y = function(g) {
    return arguments.length ? (n = typeof g == "function" ? g : Vt(+g), a = null, d) : n;
  }, d.y0 = function(g) {
    return arguments.length ? (n = typeof g == "function" ? g : Vt(+g), d) : n;
  }, d.y1 = function(g) {
    return arguments.length ? (a = g == null ? null : typeof g == "function" ? g : Vt(+g), d) : a;
  }, d.lineX0 = d.lineY0 = function() {
    return f().x(e).y(n);
  }, d.lineY1 = function() {
    return f().x(e).y(a);
  }, d.lineX1 = function() {
    return f().x(t).y(n);
  }, d.defined = function(g) {
    return arguments.length ? (r = typeof g == "function" ? g : Vt(!!g), d) : r;
  }, d.curve = function(g) {
    return arguments.length ? (s = g, o != null && (u = s(o)), d) : s;
  }, d.context = function(g) {
    return arguments.length ? (g == null ? o = u = null : u = s(o = g), d) : o;
  }, d;
}
function r0(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function a0(e) {
  return e;
}
function i0() {
  var e = a0, t = r0, n = null, a = Vt(0), r = Vt(zu), o = Vt(0);
  function s(u) {
    var d, f = u.length, g, v, y = 0, E = new Array(f), w = new Array(f), O = +a.apply(this, arguments), T = Math.min(zu, Math.max(-zu, r.apply(this, arguments) - O)), m, A = Math.min(Math.abs(T) / f, o.apply(this, arguments)), _ = A * (T < 0 ? -1 : 1), L;
    for (d = 0; d < f; ++d)
      (L = w[E[d] = d] = +e(u[d], d, u)) > 0 && (y += L);
    for (t != null ? E.sort(function(N, M) {
      return t(w[N], w[M]);
    }) : n != null && E.sort(function(N, M) {
      return n(u[N], u[M]);
    }), d = 0, v = y ? (T - f * _) / y : 0; d < f; ++d, O = m)
      g = E[d], L = w[g], m = O + (L > 0 ? L * v : 0) + _, w[g] = {
        data: u[g],
        index: d,
        value: L,
        startAngle: O,
        endAngle: m,
        padAngle: A
      };
    return w;
  }
  return s.value = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : Vt(+u), s) : e;
  }, s.sortValues = function(u) {
    return arguments.length ? (t = u, n = null, s) : t;
  }, s.sort = function(u) {
    return arguments.length ? (n = u, t = null, s) : n;
  }, s.startAngle = function(u) {
    return arguments.length ? (a = typeof u == "function" ? u : Vt(+u), s) : a;
  }, s.endAngle = function(u) {
    return arguments.length ? (r = typeof u == "function" ? u : Vt(+u), s) : r;
  }, s.padAngle = function(u) {
    return arguments.length ? (o = typeof u == "function" ? u : Vt(+u), s) : o;
  }, s;
}
var of = Array.prototype.slice;
function o0(e) {
  return e.source;
}
function l0(e) {
  return e.target;
}
function s0(e) {
  var t = o0, n = l0, a = Gf, r = Zf, o = null;
  function s() {
    var u, d = of.call(arguments), f = t.apply(this, d), g = n.apply(this, d);
    if (o || (o = u = ws()), e(o, +a.apply(this, (d[0] = f, d)), +r.apply(this, d), +a.apply(this, (d[0] = g, d)), +r.apply(this, d)), u)
      return o = null, u + "" || null;
  }
  return s.source = function(u) {
    return arguments.length ? (t = u, s) : t;
  }, s.target = function(u) {
    return arguments.length ? (n = u, s) : n;
  }, s.x = function(u) {
    return arguments.length ? (a = typeof u == "function" ? u : Vt(+u), s) : a;
  }, s.y = function(u) {
    return arguments.length ? (r = typeof u == "function" ? u : Vt(+u), s) : r;
  }, s.context = function(u) {
    return arguments.length ? (o = u ?? null, s) : o;
  }, s;
}
function u0(e, t, n, a, r) {
  e.moveTo(t, n), e.bezierCurveTo(t = (t + a) / 2, n, t, r, a, r);
}
function c0() {
  return s0(u0);
}
function Wa() {
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
function d0(e) {
  return new wc(e);
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
        ec(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function f0(e) {
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
function h0(e) {
  return new gg(e);
}
function yg(e, t) {
  this._basis = new wc(e), this._beta = t;
}
yg.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e = this._x, t = this._y, n = e.length - 1;
    if (n > 0)
      for (var a = e[0], r = t[0], o = e[n] - a, s = t[n] - r, u = -1, d; ++u <= n; )
        d = u / n, this._basis.point(
          this._beta * e[u] + (1 - this._beta) * (a + d * o),
          this._beta * t[u] + (1 - this._beta) * (r + d * s)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
const p0 = function e(t) {
  function n(a) {
    return t === 1 ? new wc(a) : new yg(a, t);
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
const m0 = function e(t) {
  function n(a) {
    return new Qf(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function Jf(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Jf.prototype = {
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
        tc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const g0 = function e(t) {
  function n(a) {
    return new Jf(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
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
        tc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const y0 = function e(t) {
  function n(a) {
    return new eh(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function th(e, t, n) {
  var a = e._x1, r = e._y1, o = e._x2, s = e._y2;
  if (e._l01_a > Yn) {
    var u = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, d = 3 * e._l01_a * (e._l01_a + e._l12_a);
    a = (a * u - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / d, r = (r * u - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / d;
  }
  if (e._l23_a > Yn) {
    var f = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, g = 3 * e._l23_a * (e._l23_a + e._l12_a);
    o = (o * f + e._x1 * e._l23_2a - t * e._l12_2a) / g, s = (s * f + e._y1 * e._l23_2a - n * e._l12_2a) / g;
  }
  e._context.bezierCurveTo(a, r, o, s, e._x2, e._y2);
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
        th(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const v0 = function e(t) {
  function n(a) {
    return t ? new vg(a, t) : new Qf(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
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
        th(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const x0 = function e(t) {
  function n(a) {
    return t ? new xg(a, t) : new Jf(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
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
        th(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const b0 = function e(t) {
  function n(a) {
    return t ? new bg(a, t) : new eh(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
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
function Tp(e) {
  return e < 0 ? -1 : 1;
}
function Cp(e, t, n) {
  var a = e._x1 - e._x0, r = t - e._x1, o = (e._y1 - e._y0) / (a || r < 0 && -0), s = (n - e._y1) / (r || a < 0 && -0), u = (o * r + s * a) / (a + r);
  return (Tp(o) + Tp(s)) * Math.min(Math.abs(o), Math.abs(s), 0.5 * Math.abs(u)) || 0;
}
function Ap(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Bd(e, t, n) {
  var a = e._x0, r = e._y0, o = e._x1, s = e._y1, u = (o - a) / 3;
  e._context.bezierCurveTo(a + u, r + u * t, o - u, s - u * n, o, s);
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
        Bd(this, this._t0, Ap(this, this._t0));
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
          this._point = 3, Bd(this, Ap(this, n = Cp(this, e, t)), n);
          break;
        default:
          Bd(this, this._t0, n = Cp(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
function Eg(e) {
  this._context = new kg(e);
}
(Eg.prototype = Object.create(nc.prototype)).point = function(e, t) {
  nc.prototype.point.call(this, t, e);
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
  bezierCurveTo: function(e, t, n, a, r, o) {
    this._context.bezierCurveTo(t, e, a, n, o, r);
  }
};
function Bu(e) {
  return new nc(e);
}
function S0(e) {
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
        for (var a = Pp(e), r = Pp(t), o = 0, s = 1; s < n; ++o, ++s)
          this._context.bezierCurveTo(a[0][o], r[0][o], a[1][o], r[1][o], e[s], t[s]);
    (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Pp(e) {
  var t, n = e.length - 1, a, r = new Array(n), o = new Array(n), s = new Array(n);
  for (r[0] = 0, o[0] = 2, s[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t)
    r[t] = 1, o[t] = 4, s[t] = 4 * e[t] + 2 * e[t + 1];
  for (r[n - 1] = 2, o[n - 1] = 7, s[n - 1] = 8 * e[n - 1] + e[n], t = 1; t < n; ++t)
    a = r[t] / o[t - 1], o[t] -= a, s[t] -= a * s[t - 1];
  for (r[n - 1] = s[n - 1] / o[n - 1], t = n - 2; t >= 0; --t)
    r[t] = (s[t] - r[t + 1]) / o[t];
  for (o[n - 1] = (e[n] + r[n - 1]) / 2, t = 0; t < n - 1; ++t)
    o[t] = 2 * e[t + 1] - r[t + 1];
  return [r, o];
}
function E0(e) {
  return new wg(e);
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
          var n = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(n, this._y), this._context.lineTo(n, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function k0(e) {
  return new Tc(e, 0.5);
}
function w0(e) {
  return new Tc(e, 0);
}
function T0(e) {
  return new Tc(e, 1);
}
function tl(e, t) {
  if ((s = e.length) > 1)
    for (var n = 1, a, r, o = e[t[0]], s, u = o.length; n < s; ++n)
      for (r = o, o = e[t[n]], a = 0; a < u; ++a)
        o[a][1] += o[a][0] = isNaN(r[a][1]) ? r[a][0] : r[a][1];
}
function nl(e) {
  for (var t = e.length, n = new Array(t); --t >= 0; )
    n[t] = t;
  return n;
}
function C0(e, t) {
  return e[t];
}
function nh() {
  var e = Vt([]), t = nl, n = tl, a = C0;
  function r(o) {
    var s = e.apply(this, arguments), u, d = o.length, f = s.length, g = new Array(f), v;
    for (u = 0; u < f; ++u) {
      for (var y = s[u], E = g[u] = new Array(d), w = 0, O; w < d; ++w)
        E[w] = O = [0, +a(o[w], y, w, o)], O.data = o[w];
      E.key = y;
    }
    for (u = 0, v = t(g); u < f; ++u)
      g[v[u]].index = u;
    return n(g, v), g;
  }
  return r.keys = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : Vt(of.call(o)), r) : e;
  }, r.value = function(o) {
    return arguments.length ? (a = typeof o == "function" ? o : Vt(+o), r) : a;
  }, r.order = function(o) {
    return arguments.length ? (t = o == null ? nl : typeof o == "function" ? o : Vt(of.call(o)), r) : t;
  }, r.offset = function(o) {
    return arguments.length ? (n = o ?? tl, r) : n;
  }, r;
}
function A0(e, t) {
  if ((a = e.length) > 0) {
    for (var n, a, r = 0, o = e[0].length, s; r < o; ++r) {
      for (s = n = 0; n < a; ++n)
        s += e[n][r][1] || 0;
      if (s)
        for (n = 0; n < a; ++n)
          e[n][r][1] /= s;
    }
    tl(e, t);
  }
}
function P0(e, t) {
  if ((d = e.length) > 0)
    for (var n, a = 0, r, o, s, u, d, f = e[t[0]].length; a < f; ++a)
      for (s = u = 0, n = 0; n < d; ++n)
        (o = (r = e[t[n]][a])[1] - r[0]) > 0 ? (r[0] = s, r[1] = s += o) : o < 0 ? (r[1] = u, r[0] = u += o) : (r[0] = 0, r[1] = o);
}
function R0(e, t) {
  if ((r = e.length) > 0) {
    for (var n = 0, a = e[t[0]], r, o = a.length; n < o; ++n) {
      for (var s = 0, u = 0; s < r; ++s)
        u += e[s][n][1] || 0;
      a[n][1] += a[n][0] = -u / 2;
    }
    tl(e, t);
  }
}
function D0(e, t) {
  if (!(!((s = e.length) > 0) || !((o = (r = e[t[0]]).length) > 0))) {
    for (var n = 0, a = 1, r, o, s; a < o; ++a) {
      for (var u = 0, d = 0, f = 0; u < s; ++u) {
        for (var g = e[t[u]], v = g[a][1] || 0, y = g[a - 1][1] || 0, E = (v - y) / 2, w = 0; w < u; ++w) {
          var O = e[t[w]], T = O[a][1] || 0, m = O[a - 1][1] || 0;
          E += T - m;
        }
        d += v, f += E * v;
      }
      r[a - 1][1] += r[a - 1][0] = n, d && (n -= f / d);
    }
    r[a - 1][1] += r[a - 1][0] = n, tl(e, t);
  }
}
function L0(e) {
  var t = e.map(O0);
  return nl(e).sort(function(n, a) {
    return t[n] - t[a];
  });
}
function O0(e) {
  for (var t = -1, n = 0, a = e.length, r, o = -1 / 0; ++t < a; )
    (r = +e[t][1]) > o && (o = r, n = t);
  return n;
}
function Tg(e) {
  var t = e.map(Cg);
  return nl(e).sort(function(n, a) {
    return t[n] - t[a];
  });
}
function Cg(e) {
  for (var t = 0, n = -1, a = e.length, r; ++n < a; )
    (r = +e[n][1]) && (t += r);
  return t;
}
function _0(e) {
  return Tg(e).reverse();
}
function M0(e) {
  var t = e.length, n, a, r = e.map(Cg), o = L0(e), s = 0, u = 0, d = [], f = [];
  for (n = 0; n < t; ++n)
    a = o[n], s < u ? (s += r[a], d.push(a)) : (u += r[a], f.push(a));
  return f.reverse().concat(d);
}
function N0(e) {
  return nl(e).reverse();
}
function wn(e, t) {
  e(t);
}
var Rp = {
  ascending: Tg,
  descending: _0,
  insideout: M0,
  none: nl,
  reverse: N0
};
function rh(e) {
  return e && Rp[e] || Rp.none;
}
var Dp = {
  expand: A0,
  diverging: P0,
  none: tl,
  silhouette: R0,
  wiggle: D0
};
function ah(e) {
  return e && Dp[e] || Dp.none;
}
function F0(e) {
  var t = e === void 0 ? {} : e, n = t.innerRadius, a = t.outerRadius, r = t.cornerRadius, o = t.startAngle, s = t.endAngle, u = t.padAngle, d = t.padRadius, f = t0();
  return n != null && wn(f.innerRadius, n), a != null && wn(f.outerRadius, a), r != null && wn(f.cornerRadius, r), o != null && wn(f.startAngle, o), s != null && wn(f.endAngle, s), u != null && wn(f.padAngle, u), d != null && wn(f.padRadius, d), f;
}
function ih(e) {
  var t = e === void 0 ? {} : e, n = t.x, a = t.x0, r = t.x1, o = t.y, s = t.y0, u = t.y1, d = t.defined, f = t.curve, g = n0();
  return n && wn(g.x, n), a && wn(g.x0, a), r && wn(g.x1, r), o && wn(g.y, o), s && wn(g.y0, s), u && wn(g.y1, u), d && g.defined(d), f && g.curve(f), g;
}
function Ag(e) {
  var t = e === void 0 ? {} : e, n = t.x, a = t.y, r = t.defined, o = t.curve, s = pg();
  return n && wn(s.x, n), a && wn(s.y, a), r && s.defined(r), o && s.curve(o), s;
}
function z0(e) {
  var t = e === void 0 ? {} : e, n = t.startAngle, a = t.endAngle, r = t.padAngle, o = t.value, s = t.sort, u = t.sortValues, d = i0();
  return (s === null || s != null) && d.sort(s), (u === null || u != null) && d.sortValues(u), o != null && d.value(o), r != null && wn(d.padAngle, r), n != null && wn(d.startAngle, n), a != null && wn(d.endAngle, a), d;
}
function B0(e) {
  var t = e.keys, n = e.value, a = e.order, r = e.offset, o = nh();
  return t && o.keys(t), n && wn(o.value, n), a && o.order(rh(a)), r && o.offset(ah(r)), o;
}
var $0 = ["className", "top", "left", "data", "centroid", "innerRadius", "outerRadius", "cornerRadius", "startAngle", "endAngle", "padAngle", "padRadius", "pieSort", "pieSortValues", "pieValue", "children", "fill"];
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
function I0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, o;
  for (o = 0; o < a.length; o++)
    r = a[o], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function H0(e) {
  var t = e.className, n = e.top, a = e.left, r = e.data, o = r === void 0 ? [] : r, s = e.centroid, u = e.innerRadius, d = u === void 0 ? 0 : u, f = e.outerRadius, g = e.cornerRadius, v = e.startAngle, y = e.endAngle, E = e.padAngle, w = e.padRadius, O = e.pieSort, T = e.pieSortValues, m = e.pieValue, A = e.children, _ = e.fill, L = _ === void 0 ? "" : _, N = I0(e, $0), M = F0({
    innerRadius: d,
    outerRadius: f,
    cornerRadius: g,
    padRadius: w
  }), U = z0({
    startAngle: v,
    endAngle: y,
    padAngle: E,
    value: m,
    sort: O,
    sortValues: T
  }), j = U(o);
  return A ? /* @__PURE__ */ i.createElement(i.Fragment, null, A({
    arcs: j,
    path: M,
    pie: U
  })) : /* @__PURE__ */ i.createElement(rt, {
    className: "visx-pie-arcs-group",
    top: n,
    left: a
  }, j.map(function($, V) {
    return /* @__PURE__ */ i.createElement("g", {
      key: "pie-arc-" + V
    }, /* @__PURE__ */ i.createElement("path", sf({
      className: Rn("visx-pie-arc", t),
      d: M($) || "",
      fill: L == null || typeof L == "string" ? L : L($)
    }, N)), s == null ? void 0 : s(M.centroid($), $));
  }));
}
var W0 = ["from", "to", "fill", "className", "innerRef"];
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
function j0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, o;
  for (o = 0; o < a.length; o++)
    r = a[o], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function nn(e) {
  var t = e.from, n = t === void 0 ? {
    x: 0,
    y: 0
  } : t, a = e.to, r = a === void 0 ? {
    x: 1,
    y: 1
  } : a, o = e.fill, s = o === void 0 ? "transparent" : o, u = e.className, d = e.innerRef, f = j0(e, W0), g = n.x === r.x || n.y === r.y;
  return /* @__PURE__ */ i.createElement("line", uf({
    ref: d,
    className: Rn("visx-line", u),
    x1: n.x,
    y1: n.y,
    x2: r.x,
    y2: r.y,
    fill: s,
    shapeRendering: g ? "crispEdges" : "auto"
  }, f));
}
var V0 = ["children", "data", "x", "y", "fill", "className", "curve", "innerRef", "defined"];
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
function U0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, o;
  for (o = 0; o < a.length; o++)
    r = a[o], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function fa(e) {
  var t = e.children, n = e.data, a = n === void 0 ? [] : n, r = e.x, o = e.y, s = e.fill, u = s === void 0 ? "transparent" : s, d = e.className, f = e.curve, g = e.innerRef, v = e.defined, y = v === void 0 ? function() {
    return !0;
  } : v, E = U0(e, V0), w = Ag({
    x: r,
    y: o,
    defined: y,
    curve: f
  });
  return t ? /* @__PURE__ */ i.createElement(i.Fragment, null, t({
    path: w
  })) : /* @__PURE__ */ i.createElement("path", cf({
    ref: g,
    className: Rn("visx-linepath", d),
    d: w(a) || "",
    fill: u,
    strokeLinecap: "round"
  }, E));
}
var K0 = ["children", "x", "x0", "x1", "y", "y0", "y1", "data", "defined", "className", "curve", "innerRef"];
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
function Y0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, o;
  for (o = 0; o < a.length; o++)
    r = a[o], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function X0(e) {
  var t = e.children, n = e.x, a = e.x0, r = e.x1, o = e.y, s = e.y0, u = e.y1, d = e.data, f = d === void 0 ? [] : d, g = e.defined, v = g === void 0 ? function() {
    return !0;
  } : g, y = e.className, E = e.curve, w = e.innerRef, O = Y0(e, K0), T = ih({
    x: n,
    x0: a,
    x1: r,
    y: o,
    y0: s,
    y1: u,
    defined: v,
    curve: E
  });
  return t ? /* @__PURE__ */ i.createElement(i.Fragment, null, t({
    path: T
  })) : /* @__PURE__ */ i.createElement("path", df({
    ref: w,
    className: Rn("visx-area", y),
    d: T(f) || ""
  }, O));
}
var q0 = ["x", "x0", "x1", "y", "y1", "y0", "yScale", "data", "defined", "className", "curve", "innerRef", "children"];
function ff() {
  return ff = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ff.apply(this, arguments);
}
function G0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, o;
  for (o = 0; o < a.length; o++)
    r = a[o], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Z0(e) {
  var t = e.x, n = e.x0, a = e.x1, r = e.y, o = e.y1, s = e.y0, u = e.yScale, d = e.data, f = d === void 0 ? [] : d, g = e.defined, v = g === void 0 ? function() {
    return !0;
  } : g, y = e.className, E = e.curve, w = e.innerRef, O = e.children, T = G0(e, q0), m = ih({
    x: t,
    x0: n,
    x1: a,
    defined: v,
    curve: E
  });
  return s == null ? m.y0(u.range()[0]) : wn(m.y0, s), r && !o && wn(m.y1, r), o && !r && wn(m.y1, o), O ? /* @__PURE__ */ i.createElement(i.Fragment, null, O({
    path: m
  })) : /* @__PURE__ */ i.createElement("path", ff({
    ref: w,
    className: Rn("visx-area-closed", y),
    d: m(f) || ""
  }, T));
}
var Q0 = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
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
  var n = {}, a = Object.keys(e), r, o;
  for (o = 0; o < a.length; o++)
    r = a[o], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function eS(e) {
  var t = e.className, n = e.top, a = e.left, r = e.keys, o = e.data, s = e.curve, u = e.defined, d = e.x, f = e.x0, g = e.x1, v = e.y0, y = e.y1, E = e.value, w = e.order, O = e.offset, T = e.color, m = e.children, A = J0(e, Q0), _ = B0({
    keys: r,
    value: E,
    order: w,
    offset: O
  }), L = ih({
    x: d,
    x0: f,
    x1: g,
    y0: v,
    y1: y,
    curve: s,
    defined: u
  }), N = _(o);
  return m ? /* @__PURE__ */ i.createElement(i.Fragment, null, m({
    stacks: N,
    path: L,
    stack: _
  })) : /* @__PURE__ */ i.createElement(rt, {
    top: n,
    left: a
  }, N.map(function(M, U) {
    return /* @__PURE__ */ i.createElement("path", hf({
      className: Rn("visx-stack", t),
      key: "stack-" + U + "-" + (M.key || ""),
      d: L(M) || "",
      fill: T == null ? void 0 : T(M.key, U)
    }, A));
  }));
}
var tS = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
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
function nS(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, o;
  for (o = 0; o < a.length; o++)
    r = a[o], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function rS(e) {
  var t = e.className, n = e.top, a = e.left, r = e.keys, o = e.data, s = e.curve, u = e.defined, d = e.x, f = e.x0, g = e.x1, v = e.y0, y = e.y1, E = e.value, w = e.order, O = e.offset, T = e.color, m = e.children, A = nS(e, tS);
  return /* @__PURE__ */ i.createElement(eS, rc({
    className: t,
    top: n,
    left: a,
    keys: r,
    data: o,
    curve: s,
    defined: u,
    x: d,
    x0: f,
    x1: g,
    y0: v,
    y1: y,
    value: E,
    order: w,
    offset: O,
    color: T
  }, A), m || function(_) {
    var L = _.stacks, N = _.path;
    return L.map(function(M, U) {
      return /* @__PURE__ */ i.createElement("path", rc({
        className: Rn("visx-area-stack", t),
        key: "area-stack-" + U + "-" + (M.key || ""),
        d: N(M) || "",
        fill: T == null ? void 0 : T(M.key, U)
      }, A));
    });
  });
}
function oh(e) {
  if ("bandwidth" in e)
    return e.bandwidth();
  var t = e.range(), n = e.domain();
  return Math.abs(t[t.length - 1] - t[0]) / n.length;
}
var aS = ["data", "className", "top", "left", "x0", "x0Scale", "x1Scale", "yScale", "color", "keys", "height", "children"];
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
function iS(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, o;
  for (o = 0; o < a.length; o++)
    r = a[o], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Pg(e) {
  var t = e.data, n = e.className, a = e.top, r = e.left, o = e.x0, s = e.x0Scale, u = e.x1Scale, d = e.yScale, f = e.color, g = e.keys, v = e.height, y = e.children, E = iS(e, aS), w = oh(u), O = t.map(function(T, m) {
    return {
      index: m,
      x0: s(o(T)),
      bars: g.map(function(A, _) {
        var L = T[A];
        return {
          index: _,
          key: A,
          value: L,
          width: w,
          x: u(A) || 0,
          y: d(L) || 0,
          color: f(A, _),
          height: v - (d(L) || 0)
        };
      })
    };
  });
  return y ? /* @__PURE__ */ i.createElement(i.Fragment, null, y(O)) : /* @__PURE__ */ i.createElement(rt, {
    className: Rn("visx-bar-group", n),
    top: a,
    left: r
  }, O.map(function(T) {
    return /* @__PURE__ */ i.createElement(rt, {
      key: "bar-group-" + T.index + "-" + T.x0,
      left: T.x0
    }, T.bars.map(function(m) {
      return /* @__PURE__ */ i.createElement(mr, pf({
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
function Dg(e) {
  return e == null ? void 0 : e[1];
}
var oS = ["data", "className", "top", "left", "x", "y0", "y1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
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
function lS(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, o;
  for (o = 0; o < a.length; o++)
    r = a[o], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function sS(e) {
  var t = e.data, n = e.className, a = e.top, r = e.left, o = e.x, s = e.y0, u = s === void 0 ? Rg : s, d = e.y1, f = d === void 0 ? Dg : d, g = e.xScale, v = e.yScale, y = e.color, E = e.keys, w = e.value, O = e.order, T = e.offset, m = e.children, A = lS(e, oS), _ = nh();
  E && _.keys(E), w && wn(_.value, w), O && _.order(rh(O)), T && _.offset(ah(T));
  var L = _(t), N = oh(g), M = L.map(function(U, j) {
    var $ = U.key;
    return {
      index: j,
      key: $,
      bars: U.map(function(V, ne) {
        var H = (v(u(V)) || 0) - (v(f(V)) || 0), oe = v(f(V)), fe = "bandwidth" in g ? g(o(V.data)) : Math.max((g(o(V.data)) || 0) - N / 2);
        return {
          bar: V,
          key: $,
          index: ne,
          height: H,
          width: N,
          x: fe || 0,
          y: oe || 0,
          color: y(U.key, ne)
        };
      })
    };
  });
  return m ? /* @__PURE__ */ i.createElement(i.Fragment, null, m(M)) : /* @__PURE__ */ i.createElement(rt, {
    className: Rn("visx-bar-stack", n),
    top: a,
    left: r
  }, M.map(function(U) {
    return U.bars.map(function(j) {
      return /* @__PURE__ */ i.createElement(mr, mf({
        key: "bar-stack-" + U.index + "-" + j.index,
        x: j.x,
        y: j.y,
        height: j.height,
        width: j.width,
        fill: j.color
      }, A));
    });
  }));
}
var uS = ["data", "className", "top", "left", "y", "x0", "x1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
function gf() {
  return gf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, gf.apply(this, arguments);
}
function cS(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, o;
  for (o = 0; o < a.length; o++)
    r = a[o], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function dS(e) {
  var t = e.data, n = e.className, a = e.top, r = e.left, o = e.y, s = e.x0, u = s === void 0 ? Rg : s, d = e.x1, f = d === void 0 ? Dg : d, g = e.xScale, v = e.yScale, y = e.color, E = e.keys, w = e.value, O = e.order, T = e.offset, m = e.children, A = cS(e, uS), _ = nh();
  E && _.keys(E), w && wn(_.value, w), O && _.order(rh(O)), T && _.offset(ah(T));
  var L = _(t), N = oh(v), M = L.map(function(U, j) {
    var $ = U.key;
    return {
      index: j,
      key: $,
      bars: U.map(function(V, ne) {
        var H = (g(f(V)) || 0) - (g(u(V)) || 0), oe = g(u(V)), fe = "bandwidth" in v ? v(o(V.data)) : Math.max((v(o(V.data)) || 0) - H / 2);
        return {
          bar: V,
          key: $,
          index: ne,
          height: N,
          width: H,
          x: oe || 0,
          y: fe || 0,
          color: y(U.key, ne)
        };
      })
    };
  });
  return m ? /* @__PURE__ */ i.createElement(i.Fragment, null, m(M)) : /* @__PURE__ */ i.createElement(rt, {
    className: Rn("visx-bar-stack-horizontal", n),
    top: a,
    left: r
  }, M.map(function(U) {
    return U.bars.map(function(j) {
      return /* @__PURE__ */ i.createElement(mr, gf({
        key: "bar-stack-" + U.index + "-" + j.index,
        x: j.x,
        y: j.y,
        height: j.height,
        width: j.width,
        fill: j.color
      }, A));
    });
  }));
}
var Lp = "http://www.w3.org/2000/svg";
function fS(e) {
  var t = document.getElementById(e);
  if (!t) {
    var n = document.createElementNS(Lp, "svg");
    n.setAttribute("aria-hidden", "true"), n.style.opacity = "0", n.style.width = "0", n.style.height = "0", n.style.position = "absolute", n.style.top = "-100%", n.style.left = "-100%", n.style.pointerEvents = "none", t = document.createElementNS(Lp, "path"), t.setAttribute("id", e), n.appendChild(t), document.body.appendChild(n);
  }
  return t;
}
var hS = "__visx_splitpath_svg_path_measurement_id", Op = function() {
  return !0;
};
function pS(e) {
  var t = e.path, n = e.pointsInSegments, a = e.segmentation, r = a === void 0 ? "x" : a, o = e.sampleRate, s = o === void 0 ? 1 : o;
  try {
    var u = fS(hS);
    u.setAttribute("d", t);
    var d = u.getTotalLength(), f = n.length, g = n.map(function() {
      return [];
    });
    if (r === "x" || r === "y")
      for (var v = n.map(function(oe) {
        var fe;
        return (fe = oe.find(function(I) {
          return typeof I[r] == "number";
        })) == null ? void 0 : fe[r];
      }), y = u.getPointAtLength(0), E = u.getPointAtLength(d), w = E[r] > y[r], O = w ? v.map(function(oe) {
        return typeof oe > "u" ? Op : function(fe) {
          return fe >= oe;
        };
      }) : v.map(function(oe) {
        return typeof oe > "u" ? Op : function(fe) {
          return fe <= oe;
        };
      }), T = 0, m = 0; m <= d; m += s) {
        for (var A = u.getPointAtLength(m), _ = A[r]; T < f - 1 && O[T + 1](_); )
          T += 1;
        g[T].push(A);
      }
    else {
      var L = n.map(function(oe) {
        return oe.length;
      }), N = L.reduce(function(oe, fe) {
        return oe + fe;
      }, 0), M = d / Math.max(1, N - 1), U = L.slice(0, f - 1);
      U.unshift(0);
      for (var j = 2; j < f; j += 1)
        U[j] += U[j - 1];
      for (var $ = 0; $ < f; $ += 1)
        U[$] *= M;
      for (var V = 0, ne = 0; ne <= d; ne += s) {
        for (var H = u.getPointAtLength(ne); V < f - 1 && ne >= U[V + 1]; )
          V += 1;
        g[V].push(H);
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
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, yf.apply(this, arguments);
}
var mS = function(t) {
  return t.x || 0;
}, gS = function(t) {
  return t.y || 0;
};
function Lg(e) {
  var t = e.children, n = e.className, a = e.curve, r = e.defined, o = e.segmentation, s = e.sampleRate, u = e.segments, d = e.x, f = e.y, g = e.styles, v = ue.useMemo(function() {
    var w = typeof d == "number" || typeof d > "u" ? function() {
      return d;
    } : d, O = typeof f == "number" || typeof f > "u" ? function() {
      return f;
    } : f;
    return u.map(function(T) {
      return T.map(function(m, A) {
        return {
          x: w(m, A, T),
          y: O(m, A, T)
        };
      });
    });
  }, [d, f, u]), y = ue.useMemo(function() {
    var w = Ag({
      x: d,
      y: f,
      defined: r,
      curve: a
    });
    return w(u.flat()) || "";
  }, [d, f, r, a, u]), E = ue.useMemo(function() {
    return pS({
      path: y,
      segmentation: o,
      pointsInSegments: v,
      sampleRate: s
    });
  }, [y, o, v, s]);
  return /* @__PURE__ */ i.createElement("g", null, E.map(function(w, O) {
    return t ? /* @__PURE__ */ i.createElement(i.Fragment, {
      key: O
    }, t({
      index: O,
      segment: w,
      styles: g[O] || g[O % g.length]
    })) : /* @__PURE__ */ i.createElement(fa, yf({
      key: O,
      className: n,
      data: w,
      x: mS,
      y: gS
    }, g[O] || g[O % g.length]));
  }));
}
Lg.propTypes = {
  segments: pe.arrayOf(pe.array).isRequired,
  styles: pe.array.isRequired,
  children: pe.func,
  className: pe.string
};
var yS = ["tooltipOpen"];
function vS(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, o;
  for (o = 0; o < a.length; o++)
    r = a[o], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
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
function Og(e) {
  var t = ue.useState(ac({
    tooltipOpen: !1
  }, e)), n = t[0], a = t[1], r = ue.useCallback(function(s) {
    return a(typeof s == "function" ? function(u) {
      u.tooltipOpen;
      var d = vS(u, yS);
      return ac({}, s(d), {
        tooltipOpen: !0
      });
    } : {
      tooltipOpen: !0,
      tooltipLeft: s.tooltipLeft,
      tooltipTop: s.tooltipTop,
      tooltipData: s.tooltipData
    });
  }, [a]), o = ue.useCallback(function() {
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
    showTooltip: r,
    hideTooltip: o
  };
}
var xS = ["className", "top", "left", "offsetLeft", "offsetTop", "style", "children", "unstyled", "applyPositionStyle"];
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
function bS(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, o;
  for (o = 0; o < a.length; o++)
    r = a[o], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
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
}, lh = /* @__PURE__ */ i.forwardRef(function(e, t) {
  var n = e.className, a = e.top, r = e.left, o = e.offsetLeft, s = o === void 0 ? 10 : o, u = e.offsetTop, d = u === void 0 ? 10 : u, f = e.style, g = f === void 0 ? _g : f, v = e.children, y = e.unstyled, E = y === void 0 ? !1 : y, w = e.applyPositionStyle, O = w === void 0 ? !1 : w, T = bS(e, xS);
  return /* @__PURE__ */ i.createElement("div", ic({
    ref: t,
    className: Rn("visx-tooltip", n),
    style: ic({
      top: a == null || d == null ? a : a + d,
      left: r == null || s == null ? r : r + s
    }, O && {
      position: "absolute"
    }, !E && g)
  }, T), v);
});
lh.propTypes = {
  children: pe.node,
  className: pe.string,
  left: pe.number,
  offsetLeft: pe.number,
  offsetTop: pe.number,
  top: pe.number,
  applyPositionStyle: pe.bool,
  unstyled: pe.bool
};
lh.displayName = "Tooltip";
const SS = lh;
function vf() {
  return vf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, vf.apply(this, arguments);
}
function ES(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function kS(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, xf(e, t);
}
function xf(e, t) {
  return xf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, r) {
    return a.__proto__ = r, a;
  }, xf(e, t);
}
var _p = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0
};
function wS(e) {
  var t;
  return t = /* @__PURE__ */ function(n) {
    kS(a, n);
    function a(o) {
      var s;
      return s = n.call(this, o) || this, s.state = {
        rect: void 0,
        parentRect: void 0
      }, s.nodeRef = /* @__PURE__ */ i.createRef(), s.getRects = s.getRects.bind(ES(s)), s;
    }
    var r = a.prototype;
    return r.componentDidMount = function() {
      var s, u = this;
      this.node = (s = this.nodeRef) != null && s.current ? this.nodeRef.current : _y.findDOMNode(this), this.setState(function() {
        return u.getRects();
      });
    }, r.getRects = function() {
      if (!this.node)
        return this.state;
      var s = this.node, u = s.parentNode, d = s.getBoundingClientRect ? s.getBoundingClientRect() : _p, f = u != null && u.getBoundingClientRect ? u.getBoundingClientRect() : _p;
      return {
        rect: d,
        parentRect: f
      };
    }, r.render = function() {
      return /* @__PURE__ */ i.createElement(e, vf({
        nodeRef: this.nodeRef,
        getRects: this.getRects
      }, this.state, this.props));
    }, a;
  }(i.PureComponent), t.displayName = "withBoundingRects(" + (e.displayName || "") + ")", t;
}
var Mg = /* @__PURE__ */ ue.createContext({
  isFlippedVertically: !1,
  isFlippedHorizontally: !1
}), TS = Mg.Provider;
Mg.Consumer;
var CS = ["children", "getRects", "left", "offsetLeft", "offsetTop", "parentRect", "rect", "style", "top", "unstyled", "nodeRef"];
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
function AS(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, o;
  for (o = 0; o < a.length; o++)
    r = a[o], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Ng(e) {
  var t = e.children;
  e.getRects;
  var n = e.left, a = n === void 0 ? 0 : n, r = e.offsetLeft, o = r === void 0 ? 10 : r, s = e.offsetTop, u = s === void 0 ? 10 : s, d = e.parentRect, f = e.rect, g = e.style, v = g === void 0 ? _g : g, y = e.top, E = y === void 0 ? 0 : y, w = e.unstyled, O = w === void 0 ? !1 : w, T = e.nodeRef, m = AS(e, CS), A, _ = !1, L = !1;
  if (f && d) {
    var N = a, M = E;
    if (d.width) {
      var U = N + o + f.width - d.width, j = f.width - N - o;
      _ = U > 0 && U > j;
    } else {
      var $ = N + o + f.width - window.innerWidth, V = f.width - N - o;
      _ = $ > 0 && $ > V;
    }
    if (d.height) {
      var ne = M + u + f.height - d.height, H = f.height - M - u;
      L = ne > 0 && ne > H;
    } else
      L = M + u + f.height > window.innerHeight;
    N = _ ? N - f.width - o : N + o, M = L ? M - f.height - u : M + u, N = Math.round(N), M = Math.round(M), A = "translate(" + N + "px, " + M + "px)";
  }
  return /* @__PURE__ */ i.createElement(SS, oc({
    ref: T,
    style: oc({
      left: 0,
      top: 0,
      transform: A
    }, !O && v)
  }, m), /* @__PURE__ */ i.createElement(TS, {
    value: {
      isFlippedVertically: !L,
      isFlippedHorizontally: !_
    }
  }, t));
}
Ng.propTypes = {
  nodeRef: pe.oneOfType([pe.string, pe.func, pe.object])
};
const Fg = wS(Ng);
var rl = /* @__PURE__ */ function() {
  function e(n) {
    var a = n.x, r = a === void 0 ? 0 : a, o = n.y, s = o === void 0 ? 0 : o;
    this.x = 0, this.y = 0, this.x = r, this.y = s;
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
function PS(e, t) {
  return new rl({
    x: e.x + t.x,
    y: e.y + t.y
  });
}
function RS(e, t) {
  return new rl({
    x: e.x - t.x,
    y: e.y - t.y
  });
}
const DS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Point: rl,
  subtractPoints: RS,
  sumPoints: PS
}, Symbol.toStringTag, { value: "Module" }));
function LS(e) {
  return !!e && e instanceof Element;
}
function OS(e) {
  return !!e && (e instanceof SVGElement || "ownerSVGElement" in e);
}
function _S(e) {
  return !!e && "createSVGPoint" in e;
}
function MS(e) {
  return !!e && "getScreenCTM" in e;
}
function NS(e) {
  return !!e && "changedTouches" in e;
}
function FS(e) {
  return !!e && "clientX" in e;
}
function zS(e) {
  return !!e && (e instanceof Event || "nativeEvent" in e && e.nativeEvent instanceof Event);
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
var $d = {
  x: 0,
  y: 0
};
function BS(e) {
  if (!e)
    return ds({}, $d);
  if (NS(e))
    return e.changedTouches.length > 0 ? {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    } : ds({}, $d);
  if (FS(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  var t = e == null ? void 0 : e.target, n = t && "getBoundingClientRect" in t ? t.getBoundingClientRect() : null;
  return n ? {
    x: n.x + n.width / 2,
    y: n.y + n.height / 2
  } : ds({}, $d);
}
function bf(e, t) {
  if (!e || !t)
    return null;
  var n = BS(t), a = OS(e) ? e.ownerSVGElement : e, r = MS(a) ? a.getScreenCTM() : null;
  if (_S(a) && r) {
    var o = a.createSVGPoint();
    return o.x = n.x, o.y = n.y, o = o.matrixTransform(r.inverse()), new rl({
      x: o.x,
      y: o.y
    });
  }
  var s = e.getBoundingClientRect();
  return new rl({
    x: n.x - s.left - e.clientLeft,
    y: n.y - s.top - e.clientTop
  });
}
function Sf(e, t) {
  if (LS(e) && t)
    return bf(e, t);
  if (zS(e)) {
    var n = e, a = n.target;
    if (a)
      return bf(a, n);
  }
  return null;
}
const $S = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  localPoint: Sf,
  touchPoint: bf
}, Symbol.toStringTag, { value: "Module" })), IS = new vm(), zg = (e) => {
  const { tableData: t, config: n, formatNumber: a, capitalize: r, formatDate: o, formatTooltipsDate: s, parseDate: u, setSharedFilter: d } = ue.useContext(Ct), { xScale: f, yScale: g, showTooltip: v, hideTooltip: y } = e, { xAxis: E, visualizationType: w, orientation: O, yAxis: T, runtime: m } = n, A = IS.applySuppression(t, n.suppressedData), _ = (I, Q) => {
    const { x: q, y: se } = Q, J = {
      data: I || {},
      dataXPosition: q + 10,
      dataYPosition: se
    };
    return {
      tooltipLeft: J.dataXPosition,
      tooltipTop: J.dataYPosition,
      tooltipData: J
    };
  }, L = (I, Q) => {
    I.stopPropagation();
    const q = Sf(I), { x: se, y: ae } = q, { data: J, arc: G } = Q ?? {}, he = U(se - Number(n.yAxis.size || 0)), ee = w !== "Pie" ? n.series.filter((le) => le.tooltip === !0).map((le) => le.dataKey) : n.series.map((le) => le.dataKey);
    ee.push(n.xAxis.dataKey), n.visualizationType === "Forecasting" && n.series.map((le) => {
      le.confidenceIntervals.map((Be) => {
        Be.showInTooltip && (ee.push(Be.high), ee.push(Be.low));
      });
    });
    function ge(le) {
      let Be = [];
      for (let Ne in le)
        le.hasOwnProperty(Ne) && Be.push(le[Ne].name);
      return Be;
    }
    ee.push(...ge(n.columns)), ee.push(...ge(n.columns));
    const be = V(he, ee), _e = A.filter((le) => le[E.dataKey] === j(ae)), Ve = O === "vertical" ? be : _e, Qe = (le) => {
      const Be = n.series.filter((qe) => qe.dataKey === le)[0];
      return Be != null && Be.axis ? String(Be.axis).toLowerCase() : "left";
    }, ve = (() => {
      var Ke, nt, at;
      const le = n.columns, Be = [], Ne = [];
      for (const [lt, ot] of Object.entries(le)) {
        const Ze = {
          addColPrefix: n.columns[lt].prefix,
          addColSuffix: n.columns[lt].suffix,
          addColRoundTo: n.columns[lt].roundToPlace ? n.columns[lt].roundToPlace : "",
          addColCommas: n.columns[lt].commas
        };
        let Me = null;
        n.visualizationType === "Pie" ? Me = G == null ? void 0 : G.data[ot.name] : Me = (Ke = Ve[0]) == null ? void 0 : Ke[ot.name];
        const De = xm(Me, "left", !0, n, Ze);
        ot.tooltips && Be.push([ot.label, De]);
      }
      const qe = [];
      return Be.forEach((lt) => {
        qe.push([lt[0], lt[1]]);
      }), w === "Pie" && Ne.push(
        // ignore
        [n.xAxis.dataKey, J],
        [n.runtime.yAxis.dataKey, a(G == null ? void 0 : G.data[n.runtime.yAxis.dataKey])],
        ["Percent", `${Math.round(((G == null ? void 0 : G.endAngle) - (G == null ? void 0 : G.startAngle)) * 180 / Math.PI / 360 * 100) + "%"}`]
      ), w === "Forest Plot" && Ne.push([n.xAxis.dataKey, j(ae)]), w !== "Pie" && w !== "Forest Plot" && Ne.push(
        ...(at = (nt = ne()) == null ? void 0 : nt.filter(Boolean)) == null ? void 0 : at.flatMap((lt) => {
          var Ze, Me, De;
          const ot = lt === n.xAxis.dataKey ? (Ze = Ve[0]) == null ? void 0 : Ze[lt] : a((Me = Ve[0]) == null ? void 0 : Me[lt], Qe(lt));
          return (De = Ve == null ? void 0 : Ve[0]) != null && De[lt] ? [[lt, ot, Qe(lt)]] : [];
        })
      ), [...Ne, ...qe];
    })();
    if (!ve)
      return;
    const Ee = _(ve, q);
    v(Ee);
  }, N = () => {
    n.visualizationType === "Area Chart" ? setTimeout(() => {
      y();
    }, 3e3) : y();
  }, M = (I) => {
    if (n.xAxis.type === "categorical" || n.visualizationType === "Combo") {
      let Q = f.step();
      const se = Math.floor(Number(I) / Q);
      return f.domain()[se - 1];
    }
    if (n.xAxis.type === "date" && n.visualizationType !== "Combo") {
      const Q = jh((J) => u(J[n.xAxis.dataKey])).left, q = f.invert(f(I)), se = Q(n.data, q, 1);
      return u(n.data[se - 1][n.xAxis.dataKey]);
    }
  }, U = (I, Q = !1) => {
    if (w !== "Pie" && O !== "horizontal") {
      if (f.type === "point" || E.type === "continuous" || E.type === "date") {
        let q = null, se = Number.MAX_VALUE, ae = I;
        return A.forEach((J) => {
          const G = E.type === "date" ? f(u(J[E.dataKey])) : f(J[E.dataKey]);
          let he = n.barHeight;
          const ee = Math.abs(Number(G - ae + (Q ? he * 2 : 0)));
          ee <= se && (se = ee, q = (E.type === "date", J[E.dataKey]));
        }), q;
      }
      if (n.xAxis.type === "categorical" || w === "Combo" && O !== "horizontal" && w !== "Forest Plot") {
        let se = (f.range()[1] - f.range()[0]) / (f.domain().length + 1);
        const J = Math.floor((Number(I) - se / 2) / se);
        return f.domain()[J];
      }
      if (n.xAxis.type === "date" && w !== "Combo" && O !== "horizontal") {
        const q = jh((G) => u(G[n.xAxis.dataKey])).left, se = f.invert(I), ae = q(n.data, se, 1);
        return u(n.data[ae - 1][n.xAxis.dataKey]);
      }
    }
  }, j = (I, Q) => {
    if (w === "Pie")
      return;
    let q = Number.MAX_VALUE, se = null;
    return A.forEach((ae, J) => {
      const G = g(w !== "Forest Plot" ? ae[n.xAxis.dataKey] : J), he = Math.abs(G - I);
      he < q && (q = he, se = Q ? ae[Q] : ae[n.xAxis.dataKey]);
    }), se;
  }, $ = (I) => {
    var Q, q;
    try {
      const se = Sf(I), { x: ae } = se;
      if (!ae)
        throw new Error("COVE: no x value in handleTooltipClick.");
      let J = U(ae, !0), G = (Q = n.data) == null ? void 0 : Q.filter((he) => he[n.xAxis.dataKey] === J);
      if (!J)
        throw new Error("COVE: no closest x scale value in handleTooltipClick");
      if (E.type === "date" && J && (J = new Date(J), J = o(J), G = (q = n.data) == null ? void 0 : q.filter((he) => o(new Date(he[n.xAxis.dataKey])) === J)), !G[0])
        throw new Error(`COVE: no data found matching the closest xScale value: ${J}`);
      d && (n != null && n.uid) && (G != null && G[0]) && d(n.uid, G[0]);
    } catch (se) {
      console.error(se.message);
    }
  }, V = (I, Q) => {
    try {
      let q;
      return E.type === "categorical" ? q = A.filter((ae) => ae[E.dataKey] === I) : q = A.filter((ae) => ae[E.dataKey] === I), !q || q.length === 0 ? [] : q.map((ae) => Object.fromEntries(Object.entries(ae).filter(([J, G]) => Q.includes(J))));
    } catch (q) {
      console.error("COVE", q);
    }
  }, ne = () => {
    var I;
    try {
      let Q, q = [], se = [];
      if ((I = n.series) == null || I.forEach((ae) => {
        ae.type === "Forecasting" && (q.push(ae.stageColumn), ae == null || ae.confidenceIntervals.forEach((J) => {
          J.showInTooltip === !0 && (se.push(J.low), se.push(J.high));
        }));
      }), !n.dashboard)
        switch (w) {
          case "Combo":
            Q = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys, ...se];
            break;
          case "Forecasting":
            Q = [m.xAxis.dataKey, ...q, ...se];
            break;
          case "Line":
            Q = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
            break;
          case "Area Chart":
            Q = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
            break;
          case "Bar":
            Q = O === "vertical" ? [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys] : [m.yAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
            break;
          case "Pie":
            Q = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
          default:
            throw new Error("No visualization type found in handleTooltipMouseOver");
        }
      return n.dashboard && (Q = [m.xAxis.dataKey, ...m == null ? void 0 : m.barSeriesKeys, ...m == null ? void 0 : m.lineSeriesKeys, ...q, ...se]), Q;
    } catch (Q) {
      console.error("COVE", Q);
    }
  }, H = (I) => {
    const { dataXPosition: Q, dataYPosition: q } = I;
    return {
      opacity: n.tooltips.opacity ? n.tooltips.opacity / 100 : 1,
      position: "absolute",
      backgroundColor: "white",
      borderRadius: "4px",
      transform: `translate(${Q}px, ${Number(q)}px)`
    };
  }, oe = (I) => {
    var q, se;
    let Q = n.series.filter((ae) => ae.dataKey === I);
    return (q = Q[0]) != null && q.name ? (se = Q[0]) == null ? void 0 : se.name : I;
  };
  return {
    getIncludedTooltipSeries: ne,
    getXValueFromCoordinate: U,
    getXValueFromCoordinateDate: M,
    getYScaleValues: V,
    handleTooltipClick: $,
    handleTooltipMouseOff: N,
    handleTooltipMouseOver: L,
    TooltipListItem: ({ item: I }) => {
      const [Q, q] = I, [se, ae, J] = q;
      if (w === "Forest Plot")
        return se === n.xAxis.dataKey ? /* @__PURE__ */ i.createElement("li", { className: "tooltip-heading" }, `${r(n.xAxis.dataKey ? `${n.xAxis.dataKey}: ` : "")} ${n.yAxis.type === "date" ? o(u(se, !1)) : ae}`) : /* @__PURE__ */ i.createElement("li", { className: "tooltip-body" }, `${oe(se)}: ${a(ae, "left")}`);
      const G = n.tooltips.dateDisplayFormat ? s(u(ae, !1)) : o(u(ae, !1));
      return w === "Bar" && O === "horizontal" && se === n.xAxis.dataKey ? /* @__PURE__ */ i.createElement("li", { className: "tooltip-heading" }, `${r(n.runtime.yAxis.label ? `${n.runtime.yAxis.label}: ` : "")} ${n.xAxis.type === "date" ? G : ae}`) : se === n.xAxis.dataKey ? /* @__PURE__ */ i.createElement("li", { className: "tooltip-heading" }, `${r(n.runtime.xAxis.label ? `${n.runtime.xAxis.label}: ` : "")} ${n.xAxis.type === "date" ? G : ae}`) : /* @__PURE__ */ i.createElement("li", { className: "tooltip-body" }, `${oe(se)}: ${ae}`);
    },
    tooltipStyles: H
  };
};
function sh(e, { threshold: t = 0, root: n = null, rootMargin: a = "0%", freezeOnceVisible: r = !1 }) {
  const [o, s] = ue.useState(), u = (o == null ? void 0 : o.isIntersecting) && r, d = ([f]) => {
    s(f);
  };
  return ue.useEffect(() => {
    setTimeout(() => {
      const f = e == null ? void 0 : e.current;
      if (!!!window.IntersectionObserver || u || !f)
        return;
      const v = { threshold: t, root: n, rootMargin: a }, y = new IntersectionObserver(d, v);
      return y.observe(f), () => y.disconnect();
    }, 500);
  }, [e, t, n, a, u]), o;
}
const Bg = (e, t = !1) => {
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
var HS = ["flexDirection", "alignItems", "margin", "display", "children"];
function Ef() {
  return Ef = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ef.apply(this, arguments);
}
function WS(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, o;
  for (o = 0; o < a.length; o++)
    r = a[o], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function lc(e) {
  var t = e.flexDirection, n = t === void 0 ? "row" : t, a = e.alignItems, r = a === void 0 ? "center" : a, o = e.margin, s = o === void 0 ? "0" : o, u = e.display, d = u === void 0 ? "flex" : u, f = e.children, g = WS(e, HS);
  return /* @__PURE__ */ i.createElement("div", Ef({
    className: "visx-legend-item",
    style: {
      display: d,
      alignItems: r,
      flexDirection: n,
      margin: s
    }
  }, g), f);
}
lc.propTypes = {
  alignItems: pe.string,
  margin: pe.oneOfType([pe.string, pe.number]),
  children: pe.node,
  display: pe.string
};
var jS = ["flex", "label", "margin", "align", "children"];
function kf() {
  return kf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, kf.apply(this, arguments);
}
function VS(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, o;
  for (o = 0; o < a.length; o++)
    r = a[o], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function sc(e) {
  var t = e.flex, n = t === void 0 ? "1" : t, a = e.label, r = e.margin, o = r === void 0 ? "5px 0" : r, s = e.align, u = s === void 0 ? "left" : s, d = e.children, f = VS(e, jS);
  return /* @__PURE__ */ i.createElement("div", kf({
    className: "visx-legend-label",
    style: {
      justifyContent: u,
      display: "flex",
      flex: n,
      margin: o
    }
  }, f), d || a);
}
sc.propTypes = {
  align: pe.string,
  label: pe.node,
  flex: pe.oneOfType([pe.string, pe.number]),
  margin: pe.oneOfType([pe.string, pe.number]),
  children: pe.node
};
function wf() {
  return wf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, wf.apply(this, arguments);
}
function uh(e) {
  var t = e.fill, n = e.width, a = e.height, r = e.style;
  return /* @__PURE__ */ i.createElement("div", {
    style: wf({
      width: n,
      height: a,
      background: t
    }, r)
  });
}
uh.propTypes = {
  fill: pe.string,
  width: pe.oneOfType([pe.string, pe.number]),
  height: pe.oneOfType([pe.string, pe.number])
};
function $g(e) {
  var t = e.fill, n = e.width, a = e.height, r = e.style, o = typeof n == "string" || typeof n > "u" ? 0 : n, s = typeof a == "string" || typeof a > "u" ? 0 : a, u = Math.max(o, s), d = u / 2;
  return /* @__PURE__ */ i.createElement("svg", {
    width: u,
    height: u
  }, /* @__PURE__ */ i.createElement(rt, {
    top: d,
    left: d
  }, /* @__PURE__ */ i.createElement("circle", {
    r: d,
    fill: t,
    style: r
  })));
}
$g.propTypes = {
  fill: pe.string,
  width: pe.oneOfType([pe.string, pe.number]),
  height: pe.oneOfType([pe.string, pe.number])
};
function Ig(e) {
  var t = e.fill, n = e.width, a = e.height, r = e.style, o = typeof a == "string" || typeof a > "u" ? 0 : a, s = typeof (r == null ? void 0 : r.strokeWidth) == "number" ? r == null ? void 0 : r.strokeWidth : 2;
  return /* @__PURE__ */ i.createElement("svg", {
    width: n,
    height: a
  }, /* @__PURE__ */ i.createElement(rt, {
    top: o / 2 - s / 2
  }, /* @__PURE__ */ i.createElement("line", {
    x1: 0,
    x2: n,
    y1: 0,
    y2: 0,
    stroke: t,
    strokeWidth: s,
    style: r
  })));
}
Ig.propTypes = {
  fill: pe.string,
  width: pe.oneOfType([pe.string, pe.number]),
  height: pe.oneOfType([pe.string, pe.number])
};
function fs() {
  return fs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, fs.apply(this, arguments);
}
var Id = function() {
};
function US(e) {
  var t = e.shape, n = t === void 0 ? "rect" : t, a = e.fill, r = a === void 0 ? Id : a, o = e.size, s = o === void 0 ? Id : o, u = e.width, d = e.height, f = e.label, g = e.item, v = e.itemIndex, y = e.shapeStyle, E = y === void 0 ? Id : y, w = {
    width: u,
    height: d,
    item: g,
    itemIndex: v,
    label: f,
    fill: r(fs({}, f)),
    size: s(fs({}, f)),
    style: E(fs({}, f))
  };
  return typeof n == "string" ? n === "circle" ? /* @__PURE__ */ i.createElement($g, w) : n === "line" ? /* @__PURE__ */ i.createElement(Ig, w) : /* @__PURE__ */ i.createElement(uh, w) : /* @__PURE__ */ i.isValidElement(n) ? /* @__PURE__ */ i.cloneElement(n, w) : n ? /* @__PURE__ */ i.createElement(n, w) : null;
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
function Hg(e) {
  var t = e.shape, n = t === void 0 ? uh : t, a = e.width, r = e.height, o = e.margin, s = e.label, u = e.item, d = e.itemIndex, f = e.fill, g = e.size, v = e.shapeStyle;
  return /* @__PURE__ */ i.createElement("div", {
    className: "visx-legend-shape",
    style: {
      display: "flex",
      width: g ? g(uc({}, s)) : a,
      height: g ? g(uc({}, s)) : r,
      margin: o
    }
  }, US({
    shape: n,
    item: u,
    itemIndex: d,
    label: s,
    width: a,
    height: r,
    fill: f,
    shapeStyle: v
  }));
}
Hg.propTypes = {
  itemIndex: pe.number.isRequired,
  margin: pe.oneOfType([pe.string, pe.number]),
  width: pe.oneOfType([pe.string, pe.number]),
  height: pe.oneOfType([pe.string, pe.number])
};
function Wg(e) {
  return e && typeof e == "object" && "value" in e && typeof e.value < "u" ? e.value : e;
}
function Mp(e) {
  return String(Wg(e));
}
function KS(e) {
  var t = e.scale, n = e.labelFormat;
  return function(a, r) {
    return {
      datum: a,
      index: r,
      text: "" + n(a, r),
      value: t(a)
    };
  };
}
var YS = ["className", "style", "scale", "shape", "domain", "fill", "size", "labelFormat", "labelTransform", "shapeWidth", "shapeHeight", "shapeMargin", "shapeStyle", "labelAlign", "labelFlex", "labelMargin", "itemMargin", "direction", "itemDirection", "legendLabelProps", "children"];
function hs() {
  return hs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, hs.apply(this, arguments);
}
function XS(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, o;
  for (o = 0; o < a.length; o++)
    r = a[o], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var qS = {
  display: "flex"
};
function jg(e) {
  var t = e.className, n = e.style, a = n === void 0 ? qS : n, r = e.scale, o = e.shape, s = e.domain, u = e.fill, d = u === void 0 ? Mp : u, f = e.size, g = f === void 0 ? Mp : f, v = e.labelFormat, y = v === void 0 ? Wg : v, E = e.labelTransform, w = E === void 0 ? KS : E, O = e.shapeWidth, T = O === void 0 ? 15 : O, m = e.shapeHeight, A = m === void 0 ? 15 : m, _ = e.shapeMargin, L = _ === void 0 ? "2px 4px 2px 0" : _, N = e.shapeStyle, M = e.labelAlign, U = M === void 0 ? "left" : M, j = e.labelFlex, $ = j === void 0 ? "1" : j, V = e.labelMargin, ne = V === void 0 ? "0 4px" : V, H = e.itemMargin, oe = H === void 0 ? "0" : H, fe = e.direction, I = fe === void 0 ? "column" : fe, Q = e.itemDirection, q = Q === void 0 ? "row" : Q, se = e.legendLabelProps, ae = e.children, J = XS(e, YS), G = s || ("domain" in r ? r.domain() : []), he = w({
    scale: r,
    labelFormat: y
  }), ee = G.map(he);
  return ae ? /* @__PURE__ */ i.createElement(i.Fragment, null, ae(ee)) : /* @__PURE__ */ i.createElement("div", {
    className: Rn("visx-legend", t),
    style: hs({}, a, {
      flexDirection: I
    })
  }, ee.map(function(ge, be) {
    return /* @__PURE__ */ i.createElement(lc, hs({
      key: "legend-" + ge.text + "-" + be,
      margin: oe,
      flexDirection: q
    }, J), /* @__PURE__ */ i.createElement(Hg, {
      shape: o,
      height: A,
      width: T,
      margin: L,
      item: G[be],
      itemIndex: be,
      label: ge,
      fill: d,
      size: g,
      shapeStyle: N
    }), /* @__PURE__ */ i.createElement(sc, hs({
      label: ge.text,
      flex: $,
      margin: ne,
      align: U
    }, se)));
  }));
}
jg.propTypes = {
  children: pe.func,
  className: pe.string,
  domain: pe.array,
  shapeWidth: pe.oneOfType([pe.string, pe.number]),
  shapeHeight: pe.oneOfType([pe.string, pe.number]),
  shapeMargin: pe.oneOfType([pe.string, pe.number]),
  labelAlign: pe.string,
  labelFlex: pe.oneOfType([pe.string, pe.number]),
  labelMargin: pe.oneOfType([pe.string, pe.number]),
  itemMargin: pe.oneOfType([pe.string, pe.number]),
  fill: pe.func,
  size: pe.func,
  shapeStyle: pe.func
};
function GS(e) {
  return /* @__PURE__ */ i.createElement(jg, e);
}
function ZS(e) {
  let t = ["legend-container"], n = ["legend-container__inner"];
  return e.legend.position === "left" && t.push("left"), e.legend.position === "bottom" && (t.push("bottom"), n.push("bottom")), e.legend.position === "bottom" && e.legend.singleRow && n.push("single-row"), e.legend.reverseLabelOrder && (n.push("d-flex"), n.push("flex-column-reverse")), e.legend.position === "bottom" && e.legend.verticalSorted && n.push("vertical-sorted"), {
    containerClasses: t,
    innerClasses: n
  };
}
const Cc = (e, t) => {
  var O;
  const { formatDate: n, parseDate: a } = ue.useContext(Ct);
  let r = [], o = "", s = [], u = [];
  ((O = e.series) == null ? void 0 : O.length) > 0 && e.data ? (r = e.series[0], o = e.series[0].dataKey, s = e.highlightedBarValues, u = e.data.map((T) => T[e.xAxis.dataKey])) : (r = [], o = "", s = [], u = []);
  const d = (T, m) => {
    const A = [...e.highlightedBarValues];
    A[m].borderWidth = T.target.value, t({
      ...e,
      highlightedBarValues: A
    });
  }, f = (T, m) => {
    T.preventDefault();
    const A = [...e.highlightedBarValues];
    A[m].value = T.target.value, A[m].dataKey = o, t({
      ...e,
      highlightedBarValues: A
    });
  }, g = (T, m) => {
    T.preventDefault();
    const A = [...e.highlightedBarValues];
    A.push({ dataKey: o }), t({
      ...e,
      highlightedBarValues: A
    });
  }, v = (T, m) => {
    T.preventDefault();
    const A = [...e.highlightedBarValues];
    A.splice(m, 1), t({
      ...e,
      highlightedBarValues: A
    });
  }, y = (T, m) => {
    const A = [...e.highlightedBarValues];
    A[m].color = T.target.value, t({
      ...e
    });
  }, E = (T, m) => {
    const A = [...e.highlightedBarValues];
    A[m].legendLabel = T.target.value, t({
      ...e,
      copyOfHighlightedBarValues: A
    });
  }, w = () => {
  };
  return w.checkFontColor = (T, m, A) => {
    if (e.xAxis.type === "date") {
      if (w.formatDates(m).includes(T))
        return "#000";
    } else if (m.includes(T))
      return "#000";
    return A;
  }, w.formatDates = (T) => T.map((m) => m ? n(a(m)) : !1), w.findDuplicates = (T) => {
    const m = {};
    return T == null ? void 0 : T.filter((_) => {
      const { legendLabel: L } = _;
      return m[L] ? !1 : (m[L] = !0, !0);
    });
  }, {
    HighLightedBarUtils: w,
    highlightedSeries: r,
    highlightedSeriesKey: o,
    highlightedBarValues: s,
    highlightedSeriesValues: u,
    handleUpdateHighlightedBar: f,
    handleAddNewHighlightedBar: g,
    handleRemoveHighlightedBar: v,
    handleUpdateHighlightedBarColor: y,
    handleHighlightedBarLegendLabel: E,
    handleUpdateHighlightedBorderWidth: d
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
}, Vg = ({ config: e, colorScale: t, seriesHighlight: n, highlight: a, highlightReset: r, currentViewport: o, formatLabels: s }) => {
  var m;
  const { innerClasses: u, containerClasses: d } = ZS(e), { runtime: f, orientation: g, legend: v } = e;
  if (!v)
    return null;
  const y = jf({
    domain: (m = e.suppressedData) == null ? void 0 : m.map((A) => A.label),
    range: ["none"],
    unknown: "block"
  }), E = v.position === "bottom" || ["sm", "xs", "xxs"].includes(o), w = {
    marginBottom: E ? "15px" : "0px",
    marginTop: E && g === "horizontal" ? `${e.yAxis.label && e.isResponsiveTicks ? e.dynamicMarginTop : e.runtime.xAxis.size}px` : `${E ? e.dynamicMarginTop + 15 : 0}px`
  }, { HighLightedBarUtils: O } = Cc(e);
  let T = O.findDuplicates(e.highlightedBarValues);
  return /* @__PURE__ */ i.createElement("aside", { style: w, id: "legend", className: d.join(" "), role: "region", "aria-label": "legend", tabIndex: 0 }, v.label && /* @__PURE__ */ i.createElement("h2", null, Ni(v.label)), v.description && /* @__PURE__ */ i.createElement("p", null, Ni(v.description)), /* @__PURE__ */ i.createElement(GS, { scale: t, itemDirection: "row", labelMargin: "0 20px 0 0", shapeMargin: "0 10px 0" }, (A) => {
    var _, L;
    return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: u.join(" ") }, s(A).map((N, M) => {
      var $, V, ne, H;
      let U = ["legend-item", `legend-text--${N.text.replace(" ", "").toLowerCase()}`], j = N.datum;
      if (e.exclusions.active && (($ = e.exclusions.keys) != null && $.includes(j)))
        return null;
      if (f.seriesLabels) {
        let oe = e.runtime.seriesLabelsAll.indexOf(j);
        j = e.runtime.seriesKeys[oe], ((V = f == null ? void 0 : f.forecastingSeriesKeys) == null ? void 0 : V.length) > 0 && (j = N.text);
      }
      return n.length > 0 && n.includes(j) === !1 && U.push("inactive"), /* @__PURE__ */ i.createElement(
        lc,
        {
          className: U.join(" "),
          tabIndex: 0,
          key: `legend-quantile-${M}`,
          onKeyPress: (oe) => {
            oe.key === "Enter" && a(N);
          },
          onClick: () => {
            a(N);
          }
        },
        e.visualizationType === "Line" && e.legend.lineMode ? /* @__PURE__ */ i.createElement("svg", { width: 40, height: 20 }, /* @__PURE__ */ i.createElement(nn, { from: { x: 10, y: 10 }, to: { x: 40, y: 10 }, stroke: N.value, strokeWidth: 2, strokeDasharray: Tf((ne = e.series[M]) != null && ne.type ? (H = e.series[M]) == null ? void 0 : H.type : "") })) : /* @__PURE__ */ i.createElement("div", { style: { display: "flex", flexDirection: "column" } }, /* @__PURE__ */ i.createElement(Fh, { margin: "0", fill: N.value, display: y(N.datum) }), /* @__PURE__ */ i.createElement("div", { style: { marginTop: "2px", marginRight: "6px" } }, N.icon)),
        /* @__PURE__ */ i.createElement(sc, { align: "left", margin: "0 0 0 4px" }, N.text)
      );
    }), T.map((N, M) => {
      let U = "legend-item", j = N.legendLabel;
      return j ? (n.length > 0 && n.includes(j) === !1 && (U += " inactive"), /* @__PURE__ */ i.createElement(
        lc,
        {
          className: U,
          tabIndex: 0,
          key: `legend-quantile-${M}`,
          onKeyPress: ($) => {
            $.key === "Enter" && a(N.legendLabel);
          },
          onClick: () => {
            a(N.legendLabel);
          }
        },
        /* @__PURE__ */ i.createElement(Fh, { fill: "transparent", borderColor: N.color ? N.color : "rgba(255, 102, 1)" }),
        " ",
        /* @__PURE__ */ i.createElement(sc, { align: "left", margin: "0 0 0 4px" }, N.legendLabel ? N.legendLabel : N.value)
      )) : !1;
    }), n.length > 0 && /* @__PURE__ */ i.createElement("button", { className: `legend-reset ${e.theme}`, onClick: (N) => r(N), tabIndex: 0 }, "Reset")), /* @__PURE__ */ i.createElement(i.Fragment, null, ((_ = e == null ? void 0 : e.preliminaryData) == null ? void 0 : _.some((N) => N.label)) && e.visualizationType === "Line" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("div", { className: e.legend.singleRow && E ? "legend-container__inner bottom single-row" : "" }, (L = e == null ? void 0 : e.preliminaryData) == null ? void 0 : L.map((N, M) => /* @__PURE__ */ i.createElement(i.Fragment, null, N.label && /* @__PURE__ */ i.createElement("div", { style: { display: "flex", flexDirection: "row", alignItems: "center" } }, /* @__PURE__ */ i.createElement("svg", { style: { width: "50px" }, key: M, height: "23px" }, N.style.includes("Dashed") ? /* @__PURE__ */ i.createElement(nn, { from: { x: 10, y: 10 }, to: { x: 40, y: 10 }, stroke: "#000", strokeWidth: 2, strokeDasharray: Tf(N.style) }) : /* @__PURE__ */ i.createElement("circle", { r: 6, strokeWidth: 2, stroke: "#000", cx: 22, cy: 10, fill: "transparent" })), /* @__PURE__ */ i.createElement("span", { style: {} }, " ", N.label))))))));
  }));
};
function ch(e) {
  return Sy({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" } }] })(e);
}
const Ug = (e, t, n, a) => (r) => {
  var y, E, w, O, T;
  const { visualizationType: o, visualizationSubType: s, series: u, runtime: d } = e, f = (m) => e.legend.reverseLabelOrder && e.legend.position === "bottom" ? m.reverse() : m, g = (y = e.legend) == null ? void 0 : y.colorCode;
  if (o === "Deviation Bar") {
    const [m, A] = Wu[e.twoColor.palette], _ = {
      datum: "X",
      index: 0,
      text: `Below ${e.xAxis.targetLabel}`,
      value: m
    }, L = {
      datum: "X",
      index: 1,
      text: `Above ${e.xAxis.targetLabel}`,
      value: A
    };
    return f([_, L]);
  }
  if (o === "Bar" && s === "regular" && g && (u == null ? void 0 : u.length) === 1) {
    let m = ur[e.palette];
    for (; t.length > m.length; )
      m = m.concat(m);
    m = m.slice(0, n.length);
    const A = /* @__PURE__ */ new Set();
    t.forEach((L) => A.add(L[g]));
    const _ = Array.from(A).map((L, N) => ({
      datum: L,
      index: N,
      text: L,
      value: m[N]
    }));
    return f(_);
  }
  if (((E = d == null ? void 0 : d.forecastingSeriesKeys) == null ? void 0 : E.length) > 0) {
    let m = [];
    return (O = (w = e.runtime) == null ? void 0 : w.forecastingSeriesKeys) == null || O.map((A, _) => {
      var L;
      return (L = A == null ? void 0 : A.stages) == null ? void 0 : L.map((N, M) => {
        var $, V, ne, H;
        let U = ($ = ju[N.color]) != null && $[2] ? (V = ju[N.color]) == null ? void 0 : V[2] : (ne = ur[N.color]) != null && ne[2] ? (H = ur[N.color]) == null ? void 0 : H[2] : "#ccc";
        const j = {
          datum: N.key,
          index: M,
          text: N.key,
          value: U
        };
        m.push(j);
      });
    }), e.runtime.barSeriesKeys && e.runtime.barSeriesKeys.forEach((A, _) => {
      let L = ur[e.palette][_] ? ur[e.palette][_] : "#ccc";
      const N = {
        datum: A,
        index: _,
        text: A,
        value: L
      };
      m.push(N);
    }), f(m);
  }
  if (e.series.filter((m) => !!m.name).length > 0) {
    const m = /* @__PURE__ */ new Set();
    e.series.forEach((_) => {
      m.add(_.name || _.dataKey);
    });
    const A = Array.from(m).map((_, L) => ({
      datum: _,
      index: L,
      text: _,
      value: a(_)
    }));
    return f(A);
  }
  if ((e.visualizationType === "Bar" || e.visualizationType === "Combo") && e.visualizationSubType === "regular" && e.suppressedData) {
    const m = r.length - 1;
    let A = [];
    return (T = e.suppressedData) == null || T.forEach(({ label: _, icon: L }, N) => {
      if (_ && L) {
        const M = {
          datum: _,
          index: m + N,
          text: _,
          icon: /* @__PURE__ */ i.createElement(ch, { color: "#000", size: 15 })
        };
        A.push(M);
      }
    }), [...r, ...A];
  }
  return f(r);
}, Au = ({ startAngle: e, endAngle: t }) => ({
  startAngle: e,
  endAngle: t
}), QS = (e) => {
  const { transformedData: t, config: n, colorScale: a, currentViewport: r, dimensions: o, highlight: s, highlightReset: u, seriesHighlight: d } = ue.useContext(Ct), { tooltipData: f, showTooltip: g, hideTooltip: v, tooltipOpen: y, tooltipLeft: E, tooltipTop: w } = Og(), { handleTooltipMouseOver: O, handleTooltipMouseOff: T, TooltipListItem: m } = zg({
    xScale: !1,
    yScale: !1,
    showTooltip: g,
    hideTooltip: v
  }), [A, _] = ue.useState(void 0), [L, N] = ue.useState(!1), M = Object.values(n.columns).filter((G) => G.showInViz), U = M.length > 0, j = U ? "pivotColumn" : void 0, $ = ue.useMemo(() => {
    if (U) {
      let G = [];
      const he = n.yAxis.dataKey, ee = M.map((_e) => _e.name), ge = [he, ...ee], be = n.xAxis.dataKey;
      return t.forEach((_e) => {
        ge.forEach((Ve) => {
          const Qe = _e[Ve];
          Qe && G.push({
            [j]: Qe,
            [be]: `${_e[be]} - ${Ve}`
          });
        });
      }), G;
    }
    return t;
  }, [t, U]), V = ue.useMemo(() => {
    if (U) {
      const G = {};
      $.forEach((ge) => {
        G[ge[n.xAxis.dataKey]] || (G[ge[n.xAxis.dataKey]] = !0);
      });
      const he = Object.entries(G).length;
      let ee = n.customColors || ur[n.palette];
      return ee = ee.slice(0, he), jf({
        domain: Object.keys(G),
        range: ee,
        unknown: null
      });
    }
    return a;
  }, [a, U]), ne = ue.useRef(), H = sh(ne, {
    freezeOnceVisible: !1
  });
  ue.useEffect(() => {
    document.querySelector(".isEditor") && N((he) => !0);
  }), ue.useEffect(() => {
    H != null && H.isIntersecting && n.animate && !L && setTimeout(() => {
      N(!0);
    }, 500);
  }, [H == null ? void 0 : H.isIntersecting, n.animate]);
  const oe = ({ arcs: G, path: he, getKey: ee }) => {
    const ge = Cb(G, ee, {
      from: Au,
      enter: Au,
      update: Au,
      leave: Au
    });
    return ue.useEffect(() => {
      const be = setTimeout(() => {
        v();
      }, 500);
      return () => {
        clearTimeout(be);
      };
    }, [f]), /* @__PURE__ */ i.createElement(i.Fragment, null, ge.map(({ item: be, props: _e, key: Ve }, Qe) => /* @__PURE__ */ i.createElement(rt, { className: be.data[n.xAxis.dataKey], key: `${Ve}-${Qe}`, style: { opacity: n.legend.behavior === "highlight" && d.length > 0 && d.indexOf(be.data[n.runtime.xAxis.dataKey]) === -1 ? 0.5 : 1 } }, /* @__PURE__ */ i.createElement(
      Ep.path,
      {
        d: bb(
          [_e.startAngle, _e.endAngle],
          (Ae, ve) => he({
            ...be,
            startAngle: Ae,
            endAngle: ve
          })
        ),
        fill: V(be.data[n.runtime.xAxis.dataKey]),
        onMouseEnter: (Ae) => O(Ae, { data: be.data[n.runtime.xAxis.dataKey], arc: be }),
        onMouseLeave: (Ae) => T()
      }
    ))), ge.map(({ item: be, key: _e }, Ve) => {
      const [Qe, Ae] = he.centroid(be), ve = be.endAngle - be.startAngle >= 0.1;
      let Ee = "#FFF";
      return V(be.data[n.runtime.xAxis.dataKey]) && zr.contrast(Ee, V(be.data[n.runtime.xAxis.dataKey])) < 3.5 && (Ee = "000"), /* @__PURE__ */ i.createElement(Ep.g, { key: `${_e}${Ve}` }, ve && /* @__PURE__ */ i.createElement(Pt, { style: { fill: Ee }, x: Qe, y: Ae, dy: ".33em", textAnchor: "middle", pointerEvents: "none" }, Math.round((be.endAngle - be.startAngle) * 180 / Math.PI / 360 * 100) + "%"));
    }));
  };
  let [fe] = o;
  n && n.legend && !n.legend.hide && r === "lg" && (fe = fe * 0.73);
  const I = n.heights.vertical, Q = Math.min(fe, I) / 2, q = I / 2, se = fe / 2, ae = n.pieType === "Donut" ? 75 : Q;
  ue.useEffect(() => {
    if (d.length > 0 && n.legend.behavior !== "highlight") {
      let G = [];
      $.forEach((he) => {
        d.indexOf(he[n.runtime.xAxis.dataKey]) !== -1 && G.push(he);
      }), _(G);
    } else
      _(void 0);
  }, [d]);
  const J = Ug(n, [], $, V);
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Br, { component: "PieChart" }, /* @__PURE__ */ i.createElement("svg", { width: fe, height: I, className: `animated-pie group ${n.animate === !1 || L ? "animated" : ""}`, role: "img", "aria-label": Bg(n) }, /* @__PURE__ */ i.createElement(rt, { top: q, left: se }, /* @__PURE__ */ i.createElement(
    H0,
    {
      data: A || $,
      pieValue: (G) => G[j || n.runtime.yAxis.dataKey],
      pieSortValues: () => -1,
      innerRadius: Q - ae,
      outerRadius: Q
    },
    (G) => /* @__PURE__ */ i.createElement(oe, { ...G, getKey: (he) => he.data[n.runtime.xAxis.dataKey] })
  ))), /* @__PURE__ */ i.createElement("div", { ref: ne }), f && Object.entries(f.data).length > 0 && y && g && f.dataYPosition && f.dataXPosition && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${n.tooltips.opacity / 100}) !important`), /* @__PURE__ */ i.createElement(Fg, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: E, top: w }, /* @__PURE__ */ i.createElement("ul", null, typeof f == "object" && Object.entries(f.data).map((G, he) => /* @__PURE__ */ i.createElement(m, { item: G, key: he })))))), /* @__PURE__ */ i.createElement(Vg, { config: n, colorScale: V, seriesHighlight: d, highlight: s, highlightReset: u, currentViewport: r, formatLabels: J }));
};
function Ts(e) {
  return e.split("-")[1];
}
function dh(e) {
  return e === "y" ? "height" : "width";
}
function Ii(e) {
  return e.split("-")[0];
}
function Cs(e) {
  return ["top", "bottom"].includes(Ii(e)) ? "x" : "y";
}
function Np(e, t, n) {
  let { reference: a, floating: r } = e;
  const o = a.x + a.width / 2 - r.width / 2, s = a.y + a.height / 2 - r.height / 2, u = Cs(t), d = dh(u), f = a[d] / 2 - r[d] / 2, g = u === "x";
  let v;
  switch (Ii(t)) {
    case "top":
      v = { x: o, y: a.y - r.height };
      break;
    case "bottom":
      v = { x: o, y: a.y + a.height };
      break;
    case "right":
      v = { x: a.x + a.width, y: s };
      break;
    case "left":
      v = { x: a.x - r.width, y: s };
      break;
    default:
      v = { x: a.x, y: a.y };
  }
  switch (Ts(t)) {
    case "start":
      v[u] -= f * (n && g ? -1 : 1);
      break;
    case "end":
      v[u] += f * (n && g ? -1 : 1);
  }
  return v;
}
function Kg(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function ps(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Yg(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: a, y: r, platform: o, rects: s, elements: u, strategy: d } = e, { boundary: f = "clippingAncestors", rootBoundary: g = "viewport", elementContext: v = "floating", altBoundary: y = !1, padding: E = 0 } = t, w = Kg(E), O = u[y ? v === "floating" ? "reference" : "floating" : v], T = ps(await o.getClippingRect({ element: (n = await (o.isElement == null ? void 0 : o.isElement(O))) == null || n ? O : O.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(u.floating)), boundary: f, rootBoundary: g, strategy: d })), m = v === "floating" ? { ...s.floating, x: a, y: r } : s.reference, A = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u.floating)), _ = await (o.isElement == null ? void 0 : o.isElement(A)) && await (o.getScale == null ? void 0 : o.getScale(A)) || { x: 1, y: 1 }, L = ps(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: m, offsetParent: A, strategy: d }) : m);
  return { top: (T.top - L.top + w.top) / _.y, bottom: (L.bottom - T.bottom + w.bottom) / _.y, left: (T.left - L.left + w.left) / _.x, right: (L.right - T.right + w.right) / _.x };
}
const JS = Math.min, eE = Math.max;
function Cf(e, t, n) {
  return eE(e, JS(t, n));
}
["top", "right", "bottom", "left"].reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const tE = { left: "right", right: "left", bottom: "top", top: "bottom" };
function cc(e) {
  return e.replace(/left|right|bottom|top/g, (t) => tE[t]);
}
function nE(e, t, n) {
  n === void 0 && (n = !1);
  const a = Ts(e), r = Cs(e), o = dh(r);
  let s = r === "x" ? a === (n ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (s = cc(s)), { main: s, cross: cc(s) };
}
const rE = { start: "end", end: "start" };
function Hd(e) {
  return e.replace(/start|end/g, (t) => rE[t]);
}
const aE = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: a, middlewareData: r, rects: o, initialPlacement: s, platform: u, elements: d } = t, { mainAxis: f = !0, crossAxis: g = !0, fallbackPlacements: v, fallbackStrategy: y = "bestFit", fallbackAxisSideDirection: E = "none", flipAlignment: w = !0, ...O } = e, T = Ii(a), m = Ii(s) === s, A = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), _ = v || (m || !w ? [cc(s)] : function(ne) {
      const H = cc(ne);
      return [Hd(ne), H, Hd(H)];
    }(s));
    v || E === "none" || _.push(...function(ne, H, oe, fe) {
      const I = Ts(ne);
      let Q = function(q, se, ae) {
        const J = ["left", "right"], G = ["right", "left"], he = ["top", "bottom"], ee = ["bottom", "top"];
        switch (q) {
          case "top":
          case "bottom":
            return ae ? se ? G : J : se ? J : G;
          case "left":
          case "right":
            return se ? he : ee;
          default:
            return [];
        }
      }(Ii(ne), oe === "start", fe);
      return I && (Q = Q.map((q) => q + "-" + I), H && (Q = Q.concat(Q.map(Hd)))), Q;
    }(s, w, E, A));
    const L = [s, ..._], N = await Yg(t, O), M = [];
    let U = ((n = r.flip) == null ? void 0 : n.overflows) || [];
    if (f && M.push(N[T]), g) {
      const { main: ne, cross: H } = nE(a, o, A);
      M.push(N[ne], N[H]);
    }
    if (U = [...U, { placement: a, overflows: M }], !M.every((ne) => ne <= 0)) {
      var j, $;
      const ne = (((j = r.flip) == null ? void 0 : j.index) || 0) + 1, H = L[ne];
      if (H)
        return { data: { index: ne, overflows: U }, reset: { placement: H } };
      let oe = ($ = U.find((fe) => fe.overflows[0] <= 0)) == null ? void 0 : $.placement;
      if (!oe)
        switch (y) {
          case "bestFit": {
            var V;
            const fe = (V = U.map((I) => [I.placement, I.overflows.filter((Q) => Q > 0).reduce((Q, q) => Q + q, 0)]).sort((I, Q) => I[1] - Q[1])[0]) == null ? void 0 : V[0];
            fe && (oe = fe);
            break;
          }
          case "initialPlacement":
            oe = s;
        }
      if (a !== oe)
        return { reset: { placement: oe } };
    }
    return {};
  } };
}, iE = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: a } = t, r = await async function(o, s) {
      const { placement: u, platform: d, elements: f } = o, g = await (d.isRTL == null ? void 0 : d.isRTL(f.floating)), v = Ii(u), y = Ts(u), E = Cs(u) === "x", w = ["left", "top"].includes(v) ? -1 : 1, O = g && E ? -1 : 1, T = typeof s == "function" ? s(o) : s;
      let { mainAxis: m, crossAxis: A, alignmentAxis: _ } = typeof T == "number" ? { mainAxis: T, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...T };
      return y && typeof _ == "number" && (A = y === "end" ? -1 * _ : _), E ? { x: A * O, y: m * w } : { x: m * w, y: A * O };
    }(t, e);
    return { x: n + r.x, y: a + r.y, data: r };
  } };
}, oE = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: a, placement: r } = t, { mainAxis: o = !0, crossAxis: s = !1, limiter: u = { fn: (T) => {
      let { x: m, y: A } = T;
      return { x: m, y: A };
    } }, ...d } = e, f = { x: n, y: a }, g = await Yg(t, d), v = Cs(Ii(r)), y = v === "x" ? "y" : "x";
    let E = f[v], w = f[y];
    if (o) {
      const T = v === "y" ? "bottom" : "right";
      E = Cf(E + g[v === "y" ? "top" : "left"], E, E - g[T]);
    }
    if (s) {
      const T = y === "y" ? "bottom" : "right";
      w = Cf(w + g[y === "y" ? "top" : "left"], w, w - g[T]);
    }
    const O = u.fn({ ...t, [v]: E, [y]: w });
    return { ...O, data: { x: O.x - n, y: O.y - a } };
  } };
};
function Cr(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Gr(e) {
  return Cr(e).getComputedStyle(e);
}
const Fp = Math.min, ms = Math.max, dc = Math.round;
function Xg(e) {
  const t = Gr(e);
  let n = parseFloat(t.width), a = parseFloat(t.height);
  const r = e.offsetWidth, o = e.offsetHeight, s = dc(n) !== r || dc(a) !== o;
  return s && (n = r, a = o), { width: n, height: a, fallback: s };
}
function ja(e) {
  return Gg(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Pu;
function qg() {
  if (Pu)
    return Pu;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Pu = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Pu) : navigator.userAgent;
}
function Zr(e) {
  return e instanceof Cr(e).HTMLElement;
}
function $a(e) {
  return e instanceof Cr(e).Element;
}
function Gg(e) {
  return e instanceof Cr(e).Node;
}
function zp(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Cr(e).ShadowRoot || e instanceof ShadowRoot;
}
function Ac(e) {
  const { overflow: t, overflowX: n, overflowY: a, display: r } = Gr(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + a + n) && !["inline", "contents"].includes(r);
}
function lE(e) {
  return ["table", "td", "th"].includes(ja(e));
}
function Af(e) {
  const t = /firefox/i.test(qg()), n = Gr(e), a = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!a && a !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((r) => n.willChange.includes(r)) || ["paint", "layout", "strict", "content"].some((r) => {
    const o = n.contain;
    return o != null && o.includes(r);
  });
}
function Zg() {
  return !/^((?!chrome|android).)*safari/i.test(qg());
}
function fh(e) {
  return ["html", "body", "#document"].includes(ja(e));
}
function Qg(e) {
  return $a(e) ? e : e.contextElement;
}
const Jg = { x: 1, y: 1 };
function Zo(e) {
  const t = Qg(e);
  if (!Zr(t))
    return Jg;
  const n = t.getBoundingClientRect(), { width: a, height: r, fallback: o } = Xg(t);
  let s = (o ? dc(n.width) : n.width) / a, u = (o ? dc(n.height) : n.height) / r;
  return s && Number.isFinite(s) || (s = 1), u && Number.isFinite(u) || (u = 1), { x: s, y: u };
}
function Ss(e, t, n, a) {
  var r, o;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), u = Qg(e);
  let d = Jg;
  t && (a ? $a(a) && (d = Zo(a)) : d = Zo(e));
  const f = u ? Cr(u) : window, g = !Zg() && n;
  let v = (s.left + (g && ((r = f.visualViewport) == null ? void 0 : r.offsetLeft) || 0)) / d.x, y = (s.top + (g && ((o = f.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / d.y, E = s.width / d.x, w = s.height / d.y;
  if (u) {
    const O = Cr(u), T = a && $a(a) ? Cr(a) : a;
    let m = O.frameElement;
    for (; m && a && T !== O; ) {
      const A = Zo(m), _ = m.getBoundingClientRect(), L = getComputedStyle(m);
      _.x += (m.clientLeft + parseFloat(L.paddingLeft)) * A.x, _.y += (m.clientTop + parseFloat(L.paddingTop)) * A.y, v *= A.x, y *= A.y, E *= A.x, w *= A.y, v += _.x, y += _.y, m = Cr(m).frameElement;
    }
  }
  return { width: E, height: w, top: y, right: v + E, bottom: y + w, left: v, x: v, y };
}
function Ia(e) {
  return ((Gg(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Pc(e) {
  return $a(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function ey(e) {
  return Ss(Ia(e)).left + Pc(e).scrollLeft;
}
function Es(e) {
  if (ja(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || zp(e) && e.host || Ia(e);
  return zp(t) ? t.host : t;
}
function ty(e) {
  const t = Es(e);
  return fh(t) ? t.ownerDocument.body : Zr(t) && Ac(t) ? t : ty(t);
}
function ny(e, t) {
  var n;
  t === void 0 && (t = []);
  const a = ty(e), r = a === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Cr(a);
  return r ? t.concat(o, o.visualViewport || [], Ac(a) ? a : []) : t.concat(a, ny(a));
}
function Bp(e, t, n) {
  return t === "viewport" ? ps(function(a, r) {
    const o = Cr(a), s = Ia(a), u = o.visualViewport;
    let d = s.clientWidth, f = s.clientHeight, g = 0, v = 0;
    if (u) {
      d = u.width, f = u.height;
      const y = Zg();
      (y || !y && r === "fixed") && (g = u.offsetLeft, v = u.offsetTop);
    }
    return { width: d, height: f, x: g, y: v };
  }(e, n)) : $a(t) ? ps(function(a, r) {
    const o = Ss(a, !0, r === "fixed"), s = o.top + a.clientTop, u = o.left + a.clientLeft, d = Zr(a) ? Zo(a) : { x: 1, y: 1 };
    return { width: a.clientWidth * d.x, height: a.clientHeight * d.y, x: u * d.x, y: s * d.y };
  }(t, n)) : ps(function(a) {
    const r = Ia(a), o = Pc(a), s = a.ownerDocument.body, u = ms(r.scrollWidth, r.clientWidth, s.scrollWidth, s.clientWidth), d = ms(r.scrollHeight, r.clientHeight, s.scrollHeight, s.clientHeight);
    let f = -o.scrollLeft + ey(a);
    const g = -o.scrollTop;
    return Gr(s).direction === "rtl" && (f += ms(r.clientWidth, s.clientWidth) - u), { width: u, height: d, x: f, y: g };
  }(Ia(e)));
}
function $p(e) {
  return Zr(e) && Gr(e).position !== "fixed" ? e.offsetParent : null;
}
function Ip(e) {
  const t = Cr(e);
  let n = $p(e);
  for (; n && lE(n) && Gr(n).position === "static"; )
    n = $p(n);
  return n && (ja(n) === "html" || ja(n) === "body" && Gr(n).position === "static" && !Af(n)) ? t : n || function(a) {
    let r = Es(a);
    for (; Zr(r) && !fh(r); ) {
      if (Af(r))
        return r;
      r = Es(r);
    }
    return null;
  }(e) || t;
}
function sE(e, t, n) {
  const a = Zr(t), r = Ia(t), o = Ss(e, !0, n === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const u = { x: 0, y: 0 };
  if (a || !a && n !== "fixed")
    if ((ja(t) !== "body" || Ac(r)) && (s = Pc(t)), Zr(t)) {
      const d = Ss(t, !0);
      u.x = d.x + t.clientLeft, u.y = d.y + t.clientTop;
    } else
      r && (u.x = ey(r));
  return { x: o.left + s.scrollLeft - u.x, y: o.top + s.scrollTop - u.y, width: o.width, height: o.height };
}
const uE = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: a, strategy: r } = e;
  const o = n === "clippingAncestors" ? function(f, g) {
    const v = g.get(f);
    if (v)
      return v;
    let y = ny(f).filter((T) => $a(T) && ja(T) !== "body"), E = null;
    const w = Gr(f).position === "fixed";
    let O = w ? Es(f) : f;
    for (; $a(O) && !fh(O); ) {
      const T = Gr(O), m = Af(O);
      (w ? m || E : m || T.position !== "static" || !E || !["absolute", "fixed"].includes(E.position)) ? E = T : y = y.filter((A) => A !== O), O = Es(O);
    }
    return g.set(f, y), y;
  }(t, this._c) : [].concat(n), s = [...o, a], u = s[0], d = s.reduce((f, g) => {
    const v = Bp(t, g, r);
    return f.top = ms(v.top, f.top), f.right = Fp(v.right, f.right), f.bottom = Fp(v.bottom, f.bottom), f.left = ms(v.left, f.left), f;
  }, Bp(t, u, r));
  return { width: d.right - d.left, height: d.bottom - d.top, x: d.left, y: d.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: a } = e;
  const r = Zr(n), o = Ia(n);
  if (n === o)
    return t;
  let s = { scrollLeft: 0, scrollTop: 0 }, u = { x: 1, y: 1 };
  const d = { x: 0, y: 0 };
  if ((r || !r && a !== "fixed") && ((ja(n) !== "body" || Ac(o)) && (s = Pc(n)), Zr(n))) {
    const f = Ss(n);
    u = Zo(n), d.x = f.x + n.clientLeft, d.y = f.y + n.clientTop;
  }
  return { width: t.width * u.x, height: t.height * u.y, x: t.x * u.x - s.scrollLeft * u.x + d.x, y: t.y * u.y - s.scrollTop * u.y + d.y };
}, isElement: $a, getDimensions: function(e) {
  return Zr(e) ? Xg(e) : e.getBoundingClientRect();
}, getOffsetParent: Ip, getDocumentElement: Ia, getScale: Zo, async getElementRects(e) {
  let { reference: t, floating: n, strategy: a } = e;
  const r = this.getOffsetParent || Ip, o = this.getDimensions;
  return { reference: sE(t, await r(n), a), floating: { x: 0, y: 0, ...await o(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Gr(e).direction === "rtl" }, Hp = (e, t, n) => {
  const a = /* @__PURE__ */ new Map(), r = { platform: uE, ...n }, o = { ...r.platform, _c: a };
  return (async (s, u, d) => {
    const { placement: f = "bottom", strategy: g = "absolute", middleware: v = [], platform: y } = d, E = v.filter(Boolean), w = await (y.isRTL == null ? void 0 : y.isRTL(u));
    if (y == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), E.filter((N) => {
      let { name: M } = N;
      return M === "autoPlacement" || M === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    s && u || console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
    let O = await y.getElementRects({ reference: s, floating: u, strategy: g }), { x: T, y: m } = Np(O, f, w), A = f, _ = {}, L = 0;
    for (let N = 0; N < E.length; N++) {
      const { name: M, fn: U } = E[N], { x: j, y: $, data: V, reset: ne } = await U({ x: T, y: m, initialPlacement: f, placement: A, strategy: g, middlewareData: _, rects: O, platform: y, elements: { reference: s, floating: u } });
      T = j ?? T, m = $ ?? m, _ = { ..._, [M]: { ..._[M], ...V } }, L > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), ne && L <= 50 && (L++, typeof ne == "object" && (ne.placement && (A = ne.placement), ne.rects && (O = ne.rects === !0 ? await y.getElementRects({ reference: s, floating: u, strategy: g }) : ne.rects), { x: T, y: m } = Np(O, A, w)), N = -1);
    }
    return { x: T, y: m, placement: A, strategy: g, middlewareData: _ };
  })(e, t, { ...r, platform: o });
};
var Na, Hi = { exports: {} }, Wp = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Na = Wp, function() {
  var e = i, t = 60103, n = 60106;
  Na.Fragment = 60107;
  var a = 60108, r = 60114, o = 60109, s = 60110, u = 60112, d = 60113, f = 60120, g = 60115, v = 60116, y = 60121, E = 60122, w = 60117, O = 60129, T = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var m = Symbol.for;
    t = m("react.element"), n = m("react.portal"), Na.Fragment = m("react.fragment"), a = m("react.strict_mode"), r = m("react.profiler"), o = m("react.provider"), s = m("react.context"), u = m("react.forward_ref"), d = m("react.suspense"), f = m("react.suspense_list"), g = m("react.memo"), v = m("react.lazy"), y = m("react.block"), E = m("react.server.block"), w = m("react.fundamental"), m("react.scope"), m("react.opaque.id"), O = m("react.debug_trace_mode"), m("react.offscreen"), T = m("react.legacy_hidden");
  }
  var A = typeof Symbol == "function" && Symbol.iterator, _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function L(ve) {
    for (var Ee = arguments.length, le = new Array(Ee > 1 ? Ee - 1 : 0), Be = 1; Be < Ee; Be++)
      le[Be - 1] = arguments[Be];
    N("error", ve, le);
  }
  function N(ve, Ee, le) {
    var Be = _.ReactDebugCurrentFrame, Ne = "";
    if ($) {
      var qe = U($.type), Ke = $._owner;
      Ne += function(at, lt, ot) {
        var Ze = "";
        if (lt) {
          var Me = lt.fileName, De = Me.replace(M, "");
          if (/^index\./.test(De)) {
            var ht = Me.match(M);
            if (ht) {
              var Ue = ht[1];
              Ue && (De = Ue.replace(M, "") + "/" + De);
            }
          }
          Ze = " (at " + De + ":" + lt.lineNumber + ")";
        } else
          ot && (Ze = " (created by " + ot + ")");
        return `
    in ` + (at || "Unknown") + Ze;
      }(qe, $._source, Ke && U(Ke.type));
    }
    (Ne += Be.getStackAddendum()) !== "" && (Ee += "%s", le = le.concat([Ne]));
    var nt = le.map(function(at) {
      return "" + at;
    });
    nt.unshift("Warning: " + Ee), Function.prototype.apply.call(console[ve], console, nt);
  }
  var M = /^(.*)[\\\/]/;
  function U(ve) {
    if (ve == null)
      return null;
    if (typeof ve.tag == "number" && L("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof ve == "function")
      return ve.displayName || ve.name || null;
    if (typeof ve == "string")
      return ve;
    switch (ve) {
      case Na.Fragment:
        return "Fragment";
      case n:
        return "Portal";
      case r:
        return "Profiler";
      case a:
        return "StrictMode";
      case d:
        return "Suspense";
      case f:
        return "SuspenseList";
    }
    if (typeof ve == "object")
      switch (ve.$$typeof) {
        case s:
          return "Context.Consumer";
        case o:
          return "Context.Provider";
        case u:
          return Be = ve, Ne = ve.render, qe = "ForwardRef", Ke = Ne.displayName || Ne.name || "", Be.displayName || (Ke !== "" ? qe + "(" + Ke + ")" : qe);
        case g:
          return U(ve.type);
        case y:
          return U(ve.render);
        case v:
          var Ee = (le = ve)._status === 1 ? le._result : null;
          if (Ee)
            return U(Ee);
      }
    var le, Be, Ne, qe, Ke;
    return null;
  }
  var j = {};
  _.ReactDebugCurrentFrame;
  var $ = null;
  function V(ve) {
    $ = ve;
  }
  var ne, H, oe, fe = _.ReactCurrentOwner, I = Object.prototype.hasOwnProperty, Q = { key: !0, ref: !0, __self: !0, __source: !0 };
  function q(ve, Ee, le, Be, Ne) {
    var qe, Ke = {}, nt = null, at = null;
    for (qe in le !== void 0 && (nt = "" + le), function(Ze) {
      if (I.call(Ze, "key")) {
        var Me = Object.getOwnPropertyDescriptor(Ze, "key").get;
        if (Me && Me.isReactWarning)
          return !1;
      }
      return Ze.key !== void 0;
    }(Ee) && (nt = "" + Ee.key), function(Ze) {
      if (I.call(Ze, "ref")) {
        var Me = Object.getOwnPropertyDescriptor(Ze, "ref").get;
        if (Me && Me.isReactWarning)
          return !1;
      }
      return Ze.ref !== void 0;
    }(Ee) && (at = Ee.ref, function(Ze, Me) {
      if (typeof Ze.ref == "string" && fe.current && Me && fe.current.stateNode !== Me) {
        var De = U(fe.current.type);
        oe[De] || (L('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', U(fe.current.type), Ze.ref), oe[De] = !0);
      }
    }(Ee, Ne)), Ee)
      I.call(Ee, qe) && !Q.hasOwnProperty(qe) && (Ke[qe] = Ee[qe]);
    if (ve && ve.defaultProps) {
      var lt = ve.defaultProps;
      for (qe in lt)
        Ke[qe] === void 0 && (Ke[qe] = lt[qe]);
    }
    if (nt || at) {
      var ot = typeof ve == "function" ? ve.displayName || ve.name || "Unknown" : ve;
      nt && function(Ze, Me) {
        var De = function() {
          ne || (ne = !0, L("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Me));
        };
        De.isReactWarning = !0, Object.defineProperty(Ze, "key", { get: De, configurable: !0 });
      }(Ke, ot), at && function(Ze, Me) {
        var De = function() {
          H || (H = !0, L("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Me));
        };
        De.isReactWarning = !0, Object.defineProperty(Ze, "ref", { get: De, configurable: !0 });
      }(Ke, ot);
    }
    return function(Ze, Me, De, ht, Ue, dt, pt) {
      var gt = { $$typeof: t, type: Ze, key: Me, ref: De, props: pt, _owner: dt, _store: {} };
      return Object.defineProperty(gt._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: !1 }), Object.defineProperty(gt, "_self", { configurable: !1, enumerable: !1, writable: !1, value: ht }), Object.defineProperty(gt, "_source", { configurable: !1, enumerable: !1, writable: !1, value: Ue }), Object.freeze && (Object.freeze(gt.props), Object.freeze(gt)), gt;
    }(ve, nt, at, Ne, Be, fe.current, Ke);
  }
  oe = {};
  var se, ae = _.ReactCurrentOwner;
  function J(ve) {
    $ = ve;
  }
  function G(ve) {
    return typeof ve == "object" && ve !== null && ve.$$typeof === t;
  }
  function he() {
    if (ae.current) {
      var ve = U(ae.current.type);
      if (ve)
        return `

Check the render method of \`` + ve + "`.";
    }
    return "";
  }
  _.ReactDebugCurrentFrame, se = !1;
  var ee = {};
  function ge(ve, Ee) {
    if (ve._store && !ve._store.validated && ve.key == null) {
      ve._store.validated = !0;
      var le = function(Ne) {
        var qe = he();
        if (!qe) {
          var Ke = typeof Ne == "string" ? Ne : Ne.displayName || Ne.name;
          Ke && (qe = `

Check the top-level render call using <` + Ke + ">.");
        }
        return qe;
      }(Ee);
      if (!ee[le]) {
        ee[le] = !0;
        var Be = "";
        ve && ve._owner && ve._owner !== ae.current && (Be = " It was passed a child from " + U(ve._owner.type) + "."), J(ve), L('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', le, Be), J(null);
      }
    }
  }
  function be(ve, Ee) {
    if (typeof ve == "object") {
      if (Array.isArray(ve))
        for (var le = 0; le < ve.length; le++) {
          var Be = ve[le];
          G(Be) && ge(Be, Ee);
        }
      else if (G(ve))
        ve._store && (ve._store.validated = !0);
      else if (ve) {
        var Ne = function(nt) {
          if (nt === null || typeof nt != "object")
            return null;
          var at = A && nt[A] || nt["@@iterator"];
          return typeof at == "function" ? at : null;
        }(ve);
        if (typeof Ne == "function" && Ne !== ve.entries)
          for (var qe, Ke = Ne.call(ve); !(qe = Ke.next()).done; )
            G(qe.value) && ge(qe.value, Ee);
      }
    }
  }
  function _e(ve) {
    var Ee, le = ve.type;
    if (le != null && typeof le != "string") {
      if (typeof le == "function")
        Ee = le.propTypes;
      else {
        if (typeof le != "object" || le.$$typeof !== u && le.$$typeof !== g)
          return;
        Ee = le.propTypes;
      }
      if (Ee) {
        var Be = U(le);
        (function(Ne, qe, Ke, nt, at) {
          var lt = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var ot in Ne)
            if (lt(Ne, ot)) {
              var Ze = void 0;
              try {
                if (typeof Ne[ot] != "function") {
                  var Me = Error((nt || "React class") + ": " + Ke + " type `" + ot + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof Ne[ot] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Me.name = "Invariant Violation", Me;
                }
                Ze = Ne[ot](qe, ot, nt, Ke, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (De) {
                Ze = De;
              }
              !Ze || Ze instanceof Error || (V(at), L("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", nt || "React class", Ke, ot, typeof Ze), V(null)), Ze instanceof Error && !(Ze.message in j) && (j[Ze.message] = !0, V(at), L("Failed %s type: %s", Ke, Ze.message), V(null));
            }
        })(Ee, ve.props, "prop", Be, ve);
      } else
        le.PropTypes === void 0 || se || (se = !0, L("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U(le) || "Unknown"));
      typeof le.getDefaultProps != "function" || le.getDefaultProps.isReactClassApproved || L("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function Ve(ve, Ee, le, Be, Ne, qe) {
    var Ke = function(De) {
      return typeof De == "string" || typeof De == "function" || De === Na.Fragment || De === r || De === O || De === a || De === d || De === f || De === T || typeof De == "object" && De !== null && (De.$$typeof === v || De.$$typeof === g || De.$$typeof === o || De.$$typeof === s || De.$$typeof === u || De.$$typeof === w || De.$$typeof === y || De[0] === E);
    }(ve);
    if (!Ke) {
      var nt = "";
      (ve === void 0 || typeof ve == "object" && ve !== null && Object.keys(ve).length === 0) && (nt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
      var at, lt = function(De) {
        return De !== void 0 ? `

Check your code at ` + De.fileName.replace(/^.*[\\\/]/, "") + ":" + De.lineNumber + "." : "";
      }(Ne);
      nt += lt || he(), ve === null ? at = "null" : Array.isArray(ve) ? at = "array" : ve !== void 0 && ve.$$typeof === t ? (at = "<" + (U(ve.type) || "Unknown") + " />", nt = " Did you accidentally export a JSX literal instead of a component?") : at = typeof ve, L("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", at, nt);
    }
    var ot = q(ve, Ee, le, Ne, qe);
    if (ot == null)
      return ot;
    if (Ke) {
      var Ze = Ee.children;
      if (Ze !== void 0)
        if (Be)
          if (Array.isArray(Ze)) {
            for (var Me = 0; Me < Ze.length; Me++)
              be(Ze[Me], ve);
            Object.freeze && Object.freeze(Ze);
          } else
            L("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          be(Ze, ve);
    }
    return ve === Na.Fragment ? function(De) {
      for (var ht = Object.keys(De.props), Ue = 0; Ue < ht.length; Ue++) {
        var dt = ht[Ue];
        if (dt !== "children" && dt !== "key") {
          J(De), L("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", dt), J(null);
          break;
        }
      }
      De.ref !== null && (J(De), L("Invalid attribute `ref` supplied to `React.Fragment`."), J(null));
    }(ot) : _e(ot), ot;
  }
  var Qe = function(ve, Ee, le) {
    return Ve(ve, Ee, le, !1);
  }, Ae = function(ve, Ee, le) {
    return Ve(ve, Ee, le, !0);
  };
  Na.jsx = Qe, Na.jsxs = Ae;
}(), Hi.exports = Wp;
var Wd, ry = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
Wd = ry, function() {
  var e = {}.hasOwnProperty;
  function t() {
    for (var n = [], a = 0; a < arguments.length; a++) {
      var r = arguments[a];
      if (r) {
        var o = typeof r;
        if (o === "string" || o === "number")
          n.push(r);
        else if (Array.isArray(r)) {
          if (r.length) {
            var s = t.apply(null, r);
            s && n.push(s);
          }
        } else if (o === "object") {
          if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]")) {
            n.push(r.toString());
            continue;
          }
          for (var u in r)
            e.call(r, u) && r[u] && n.push(u);
        }
      }
    }
    return n.join(" ");
  }
  Wd.exports ? (t.default = t, Wd.exports = t) : window.classNames = t;
}();
var jp = ry.exports;
const Vp = (e, t, n) => {
  let a = null;
  return function(...r) {
    a && clearTimeout(a), a = setTimeout(() => {
      a = null, n || e.apply(this, r);
    }, t);
  };
}, cE = ({ content: e }) => Hi.exports.jsx("span", { dangerouslySetInnerHTML: { __html: e } }), dE = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, fE = ue.createContext({ getTooltipData: () => dE });
function ay(e = "DEFAULT_TOOLTIP_ID") {
  return ue.useContext(fE).getTooltipData(e);
}
const Up = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: n = null, place: a = "top", offset: r = 10, strategy: o = "absolute", middlewares: s = [iE(Number(r)), aE(), oE({ padding: 5 })] }) => {
  if (!e)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  if (t === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  const u = s;
  return n ? (u.push({ name: "arrow", options: d = { element: n, padding: 5 }, async fn(f) {
    const { element: g, padding: v = 0 } = d || {}, { x: y, y: E, placement: w, rects: O, platform: T } = f;
    if (g == null)
      return console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const m = Kg(v), A = { x: y, y: E }, _ = Cs(w), L = dh(_), N = await T.getDimensions(g), M = _ === "y" ? "top" : "left", U = _ === "y" ? "bottom" : "right", j = O.reference[L] + O.reference[_] - A[_] - O.floating[L], $ = A[_] - O.reference[_], V = await (T.getOffsetParent == null ? void 0 : T.getOffsetParent(g));
    let ne = V ? _ === "y" ? V.clientHeight || 0 : V.clientWidth || 0 : 0;
    ne === 0 && (ne = O.floating[L]);
    const H = j / 2 - $ / 2, oe = m[M], fe = ne - N[L] - m[U], I = ne / 2 - N[L] / 2 + H, Q = Cf(oe, I, fe), q = Ts(w) != null && I != Q && O.reference[L] / 2 - (I < oe ? m[M] : m[U]) - N[L] / 2 < 0;
    return { [_]: A[_] - (q ? I < oe ? oe - I : fe - I : 0), data: { [_]: Q, centerOffset: I - Q } };
  } }), Hp(e, t, { placement: a, strategy: o, middleware: u }).then(({ x: f, y: g, placement: v, middlewareData: y }) => {
    var E, w;
    const O = { left: `${f}px`, top: `${g}px` }, { x: T, y: m } = (E = y.arrow) !== null && E !== void 0 ? E : { x: 0, y: 0 };
    return { tooltipStyles: O, tooltipArrowStyles: { left: T != null ? `${T}px` : "", top: m != null ? `${m}px` : "", right: "", bottom: "", [(w = { top: "bottom", right: "left", bottom: "top", left: "right" }[v.split("-")[0]]) !== null && w !== void 0 ? w : "bottom"]: "-4px" } };
  })) : Hp(e, t, { placement: "bottom", strategy: o, middleware: u }).then(({ x: f, y: g }) => ({ tooltipStyles: { left: `${f}px`, top: `${g}px` }, tooltipArrowStyles: {} }));
  var d;
};
var Pi = { tooltip: "styles-module_tooltip__mnnfp", fixed: "styles-module_fixed__7ciUi", arrow: "styles-module_arrow__K0L3T", "no-arrow": "styles-module_no-arrow__KcFZN", clickable: "styles-module_clickable__Bv9o7", show: "styles-module_show__2NboJ", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const Kp = ({ id: e, className: t, classNameArrow: n, variant: a = "dark", anchorId: r, anchorSelect: o, place: s = "top", offset: u = 10, events: d = ["hover"], positionStrategy: f = "absolute", middlewares: g, wrapper: v, children: y = null, delayShow: E = 0, delayHide: w = 0, float: O = !1, noArrow: T = !1, clickable: m = !1, closeOnEsc: A = !1, style: _, position: L, afterShow: N, afterHide: M, content: U, html: j, isOpen: $, setIsOpen: V, activeAnchor: ne, setActiveAnchor: H }) => {
  const oe = ue.useRef(null), fe = ue.useRef(null), I = ue.useRef(null), Q = ue.useRef(null), [q, se] = ue.useState({}), [ae, J] = ue.useState({}), [G, he] = ue.useState(!1), [ee, ge] = ue.useState(!1), be = ue.useRef(!1), _e = ue.useRef(null), { anchorRefs: Ve, setActiveAnchor: Qe } = ay(e), Ae = ue.useRef(!1), [ve, Ee] = ue.useState([]), le = ue.useRef(!1);
  ue.useLayoutEffect(() => (le.current = !0, () => {
    le.current = !1;
  }), []), ue.useEffect(() => {
    if (!G) {
      const Ue = setTimeout(() => {
        ge(!1);
      }, 150);
      return () => {
        clearTimeout(Ue);
      };
    }
    return () => null;
  }, [G]);
  const Be = (Ue) => {
    le.current && (Ue && ge(!0), setTimeout(() => {
      le.current && (V == null || V(Ue), $ === void 0 && he(Ue));
    }, 10));
  };
  ue.useEffect(() => {
    if ($ === void 0)
      return () => null;
    $ && ge(!0);
    const Ue = setTimeout(() => {
      he($);
    }, 10);
    return () => {
      clearTimeout(Ue);
    };
  }, [$]), ue.useEffect(() => {
    G !== be.current && (be.current = G, G ? N == null || N() : M == null || M());
  }, [G]);
  const Ne = (Ue = w) => {
    Q.current && clearTimeout(Q.current), Q.current = setTimeout(() => {
      Ae.current || Be(!1);
    }, Ue);
  }, qe = (Ue) => {
    var dt;
    if (!Ue)
      return;
    E ? (I.current && clearTimeout(I.current), I.current = setTimeout(() => {
      Be(!0);
    }, E)) : Be(!0);
    const pt = (dt = Ue.currentTarget) !== null && dt !== void 0 ? dt : Ue.target;
    H(pt), Qe({ current: pt }), Q.current && clearTimeout(Q.current);
  }, Ke = () => {
    m ? Ne(w || 100) : w ? Ne() : Be(!1), I.current && clearTimeout(I.current);
  }, nt = ({ x: Ue, y: dt }) => {
    Up({ place: s, offset: u, elementReference: { getBoundingClientRect: () => ({ x: Ue, y: dt, width: 0, height: 0, top: dt, left: Ue, right: Ue, bottom: dt }) }, tooltipReference: oe.current, tooltipArrowReference: fe.current, strategy: f, middlewares: g }).then((pt) => {
      Object.keys(pt.tooltipStyles).length && se(pt.tooltipStyles), Object.keys(pt.tooltipArrowStyles).length && J(pt.tooltipArrowStyles);
    });
  }, at = (Ue) => {
    if (!Ue)
      return;
    const dt = Ue, pt = { x: dt.clientX, y: dt.clientY };
    nt(pt), _e.current = pt;
  }, lt = (Ue) => {
    qe(Ue), w && Ne();
  }, ot = (Ue) => {
    const dt = document.querySelector(`[id='${r}']`);
    dt != null && dt.contains(Ue.target) || ve.some((pt) => pt.contains(Ue.target)) || Be(!1);
  }, Ze = (Ue) => {
    Ue.key === "Escape" && Be(!1);
  }, Me = Vp(qe, 50), De = Vp(Ke, 50);
  ue.useEffect(() => {
    var Ue, dt;
    const pt = new Set(Ve);
    ve.forEach((qt) => {
      pt.add({ current: qt });
    });
    const gt = document.querySelector(`[id='${r}']`);
    gt && pt.add({ current: gt }), A && window.addEventListener("keydown", Ze);
    const _t = [];
    d.find((qt) => qt === "click") && (window.addEventListener("click", ot), _t.push({ event: "click", listener: lt })), d.find((qt) => qt === "hover") && (_t.push({ event: "mouseenter", listener: Me }, { event: "mouseleave", listener: De }, { event: "focus", listener: Me }, { event: "blur", listener: De }), O && _t.push({ event: "mousemove", listener: at }));
    const It = () => {
      Ae.current = !0;
    }, cn = () => {
      Ae.current = !1, Ke();
    };
    return m && ((Ue = oe.current) === null || Ue === void 0 || Ue.addEventListener("mouseenter", It), (dt = oe.current) === null || dt === void 0 || dt.addEventListener("mouseleave", cn)), _t.forEach(({ event: qt, listener: rn }) => {
      pt.forEach((Et) => {
        var kt;
        (kt = Et.current) === null || kt === void 0 || kt.addEventListener(qt, rn);
      });
    }), () => {
      var qt, rn;
      d.find((Et) => Et === "click") && window.removeEventListener("click", ot), A && window.removeEventListener("keydown", Ze), m && ((qt = oe.current) === null || qt === void 0 || qt.removeEventListener("mouseenter", It), (rn = oe.current) === null || rn === void 0 || rn.removeEventListener("mouseleave", cn)), _t.forEach(({ event: Et, listener: kt }) => {
        pt.forEach((vn) => {
          var kn;
          (kn = vn.current) === null || kn === void 0 || kn.removeEventListener(Et, kt);
        });
      });
    };
  }, [ee, Ve, ve, A, d]), ue.useEffect(() => {
    let Ue = o ?? "";
    !Ue && e && (Ue = `[data-tooltip-id='${e}']`);
    const dt = new MutationObserver((pt) => {
      const gt = [];
      pt.forEach((_t) => {
        if (_t.type === "attributes" && _t.attributeName === "data-tooltip-id" && _t.target.getAttribute("data-tooltip-id") === e && gt.push(_t.target), _t.type === "childList" && (ne && [..._t.removedNodes].some((It) => !!It.contains(ne) && (ge(!1), Be(!1), H(null), !0)), Ue))
          try {
            const It = [..._t.addedNodes].filter((cn) => cn.nodeType === 1);
            gt.push(...It.filter((cn) => cn.matches(Ue))), gt.push(...It.flatMap((cn) => [...cn.querySelectorAll(Ue)]));
          } catch {
          }
      }), gt.length && Ee((_t) => [..._t, ...gt]);
    });
    return dt.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"] }), () => {
      dt.disconnect();
    };
  }, [e, o, ne]), ue.useEffect(() => {
    L ? nt(L) : O ? _e.current && nt(_e.current) : Up({ place: s, offset: u, elementReference: ne, tooltipReference: oe.current, tooltipArrowReference: fe.current, strategy: f, middlewares: g }).then((Ue) => {
      le.current && (Object.keys(Ue.tooltipStyles).length && se(Ue.tooltipStyles), Object.keys(Ue.tooltipArrowStyles).length && J(Ue.tooltipArrowStyles));
    });
  }, [G, ne, U, j, s, u, f, L]), ue.useEffect(() => {
    var Ue;
    const dt = document.querySelector(`[id='${r}']`), pt = [...ve, dt];
    ne && pt.includes(ne) || H((Ue = ve[0]) !== null && Ue !== void 0 ? Ue : dt);
  }, [r, ve, ne]), ue.useEffect(() => () => {
    I.current && clearTimeout(I.current), Q.current && clearTimeout(Q.current);
  }, []), ue.useEffect(() => {
    let Ue = o;
    if (!Ue && e && (Ue = `[data-tooltip-id='${e}']`), Ue)
      try {
        const dt = Array.from(document.querySelectorAll(Ue));
        Ee(dt);
      } catch {
        Ee([]);
      }
  }, [e, o]);
  const ht = !!(j || U || y) && G && Object.keys(q).length > 0;
  return ee ? Hi.exports.jsxs(v, { id: e, role: "tooltip", className: jp("react-tooltip", Pi.tooltip, Pi[a], t, { [Pi.show]: ht, [Pi.fixed]: f === "fixed", [Pi.clickable]: m }), style: { ..._, ...q }, ref: oe, children: [j && Hi.exports.jsx(cE, { content: j }) || U || y, Hi.exports.jsx(v, { className: jp("react-tooltip-arrow", Pi.arrow, n, { [Pi["no-arrow"]]: T }), style: ae, ref: fe })] }) : null;
}, iy = ({ id: e, anchorId: t, anchorSelect: n, content: a, html: r, className: o, classNameArrow: s, variant: u = "dark", place: d = "top", offset: f = 10, wrapper: g = "div", children: v = null, events: y = ["hover"], positionStrategy: E = "absolute", middlewares: w, delayShow: O = 0, delayHide: T = 0, float: m = !1, noArrow: A = !1, clickable: _ = !1, closeOnEsc: L = !1, style: N, position: M, isOpen: U, setIsOpen: j, afterShow: $, afterHide: V }) => {
  const [ne, H] = ue.useState(a), [oe, fe] = ue.useState(r), [I, Q] = ue.useState(d), [q, se] = ue.useState(u), [ae, J] = ue.useState(f), [G, he] = ue.useState(O), [ee, ge] = ue.useState(T), [be, _e] = ue.useState(m), [Ve, Qe] = ue.useState(g), [Ae, ve] = ue.useState(y), [Ee, le] = ue.useState(E), [Be, Ne] = ue.useState(null), { anchorRefs: qe, activeAnchor: Ke } = ay(e), nt = (ot) => ot == null ? void 0 : ot.getAttributeNames().reduce((Ze, Me) => {
    var De;
    return Me.startsWith("data-tooltip-") && (Ze[Me.replace(/^data-tooltip-/, "")] = (De = ot == null ? void 0 : ot.getAttribute(Me)) !== null && De !== void 0 ? De : null), Ze;
  }, {}), at = (ot) => {
    const Ze = { place: (Me) => {
      var De;
      Q((De = Me) !== null && De !== void 0 ? De : d);
    }, content: (Me) => {
      H(Me ?? a);
    }, html: (Me) => {
      fe(Me ?? r);
    }, variant: (Me) => {
      var De;
      se((De = Me) !== null && De !== void 0 ? De : u);
    }, offset: (Me) => {
      J(Me === null ? f : Number(Me));
    }, wrapper: (Me) => {
      var De;
      Qe((De = Me) !== null && De !== void 0 ? De : g);
    }, events: (Me) => {
      const De = Me == null ? void 0 : Me.split(" ");
      ve(De ?? y);
    }, "position-strategy": (Me) => {
      var De;
      le((De = Me) !== null && De !== void 0 ? De : E);
    }, "delay-show": (Me) => {
      he(Me === null ? O : Number(Me));
    }, "delay-hide": (Me) => {
      ge(Me === null ? T : Number(Me));
    }, float: (Me) => {
      _e(Me === null ? m : !!Me);
    } };
    Object.values(Ze).forEach((Me) => Me(null)), Object.entries(ot).forEach(([Me, De]) => {
      var ht;
      (ht = Ze[Me]) === null || ht === void 0 || ht.call(Ze, De);
    });
  };
  ue.useEffect(() => {
    H(a);
  }, [a]), ue.useEffect(() => {
    fe(r);
  }, [r]), ue.useEffect(() => {
    Q(d);
  }, [d]), ue.useEffect(() => {
    var ot;
    const Ze = new Set(qe);
    let Me = n;
    if (!Me && e && (Me = `[data-tooltip-id='${e}']`), Me)
      try {
        document.querySelectorAll(Me).forEach((pt) => {
          Ze.add({ current: pt });
        });
      } catch {
        console.warn(`[react-tooltip] "${n}" is not a valid CSS selector`);
      }
    const De = document.querySelector(`[id='${t}']`);
    if (De && Ze.add({ current: De }), !Ze.size)
      return () => null;
    const ht = (ot = Be ?? De) !== null && ot !== void 0 ? ot : Ke.current, Ue = new MutationObserver((pt) => {
      pt.forEach((gt) => {
        var _t;
        if (!ht || gt.type !== "attributes" || !(!((_t = gt.attributeName) === null || _t === void 0) && _t.startsWith("data-tooltip-")))
          return;
        const It = nt(ht);
        at(It);
      });
    }), dt = { attributes: !0, childList: !1, subtree: !1 };
    if (ht) {
      const pt = nt(ht);
      at(pt), Ue.observe(ht, dt);
    }
    return () => {
      Ue.disconnect();
    };
  }, [qe, Ke, Be, t, n]);
  const lt = { id: e, anchorId: t, anchorSelect: n, className: o, classNameArrow: s, content: ne, html: oe, place: I, variant: q, offset: ae, wrapper: Ve, events: Ae, positionStrategy: Ee, middlewares: w, delayShow: G, delayHide: ee, float: be, noArrow: A, clickable: _, closeOnEsc: L, style: N, position: M, isOpen: U, setIsOpen: j, afterShow: $, afterHide: V, activeAnchor: Be, setActiveAnchor: (ot) => Ne(ot) };
  return v ? Hi.exports.jsx(Kp, { ...lt, children: v }) : Hi.exports.jsx(Kp, { ...lt });
};
function Yp(e, t) {
  let n;
  if (t === void 0)
    for (const a of e)
      a != null && (n < a || n === void 0 && a >= a) && (n = a);
  else {
    let a = -1;
    for (let r of e)
      (r = t(r, ++a, e)) != null && (n < r || n === void 0 && r >= r) && (n = r);
  }
  return n;
}
function hE(e, t) {
  let n;
  if (t === void 0)
    for (const a of e)
      a != null && (n > a || n === void 0 && a >= a) && (n = a);
  else {
    let a = -1;
    for (let r of e)
      (r = t(r, ++a, e)) != null && (n > r || n === void 0 && r >= r) && (n = r);
  }
  return n;
}
function jd(e, t) {
  let n = 0;
  if (t === void 0)
    for (let a of e)
      (a = +a) && (n += a);
  else {
    let a = -1;
    for (let r of e)
      (r = +t(r, ++a, e)) && (n += r);
  }
  return n;
}
function pE(e) {
  return e.depth;
}
function mE(e, t) {
  return e.sourceLinks.length ? e.depth : t - 1;
}
function Ru(e) {
  return function() {
    return e;
  };
}
function Xp(e, t) {
  return fc(e.source, t.source) || e.index - t.index;
}
function qp(e, t) {
  return fc(e.target, t.target) || e.index - t.index;
}
function fc(e, t) {
  return e.y0 - t.y0;
}
function Vd(e) {
  return e.value;
}
function gE(e) {
  return e.index;
}
function yE(e) {
  return e.nodes;
}
function vE(e) {
  return e.links;
}
function Gp(e, t) {
  const n = e.get(t);
  if (!n)
    throw new Error("missing: " + t);
  return n;
}
function Zp({ nodes: e }) {
  for (const t of e) {
    let n = t.y0, a = n;
    for (const r of t.sourceLinks)
      r.y0 = n + r.width / 2, n += r.width;
    for (const r of t.targetLinks)
      r.y1 = a + r.width / 2, a += r.width;
  }
}
function xE() {
  let e = 0, t = 0, n = 1, a = 1, r = 24, o = 8, s, u = gE, d = mE, f, g, v = yE, y = vE, E = 6;
  function w() {
    const I = { nodes: v.apply(null, arguments), links: y.apply(null, arguments) };
    return O(I), T(I), m(I), A(I), N(I), Zp(I), I;
  }
  w.update = function(I) {
    return Zp(I), I;
  }, w.nodeId = function(I) {
    return arguments.length ? (u = typeof I == "function" ? I : Ru(I), w) : u;
  }, w.nodeAlign = function(I) {
    return arguments.length ? (d = typeof I == "function" ? I : Ru(I), w) : d;
  }, w.nodeSort = function(I) {
    return arguments.length ? (f = I, w) : f;
  }, w.nodeWidth = function(I) {
    return arguments.length ? (r = +I, w) : r;
  }, w.nodePadding = function(I) {
    return arguments.length ? (o = s = +I, w) : o;
  }, w.nodes = function(I) {
    return arguments.length ? (v = typeof I == "function" ? I : Ru(I), w) : v;
  }, w.links = function(I) {
    return arguments.length ? (y = typeof I == "function" ? I : Ru(I), w) : y;
  }, w.linkSort = function(I) {
    return arguments.length ? (g = I, w) : g;
  }, w.size = function(I) {
    return arguments.length ? (e = t = 0, n = +I[0], a = +I[1], w) : [n - e, a - t];
  }, w.extent = function(I) {
    return arguments.length ? (e = +I[0][0], n = +I[1][0], t = +I[0][1], a = +I[1][1], w) : [[e, t], [n, a]];
  }, w.iterations = function(I) {
    return arguments.length ? (E = +I, w) : E;
  };
  function O({ nodes: I, links: Q }) {
    for (const [se, ae] of I.entries())
      ae.index = se, ae.sourceLinks = [], ae.targetLinks = [];
    const q = new Map(I.map((se, ae) => [u(se, ae, I), se]));
    for (const [se, ae] of Q.entries()) {
      ae.index = se;
      let { source: J, target: G } = ae;
      typeof J != "object" && (J = ae.source = Gp(q, J)), typeof G != "object" && (G = ae.target = Gp(q, G)), J.sourceLinks.push(ae), G.targetLinks.push(ae);
    }
    if (g != null)
      for (const { sourceLinks: se, targetLinks: ae } of I)
        se.sort(g), ae.sort(g);
  }
  function T({ nodes: I }) {
    for (const Q of I)
      Q.value = Q.fixedValue === void 0 ? Math.max(jd(Q.sourceLinks, Vd), jd(Q.targetLinks, Vd)) : Q.fixedValue;
  }
  function m({ nodes: I }) {
    const Q = I.length;
    let q = new Set(I), se = /* @__PURE__ */ new Set(), ae = 0;
    for (; q.size; ) {
      for (const J of q) {
        J.depth = ae;
        for (const { target: G } of J.sourceLinks)
          se.add(G);
      }
      if (++ae > Q)
        throw new Error("circular link");
      q = se, se = /* @__PURE__ */ new Set();
    }
  }
  function A({ nodes: I }) {
    const Q = I.length;
    let q = new Set(I), se = /* @__PURE__ */ new Set(), ae = 0;
    for (; q.size; ) {
      for (const J of q) {
        J.height = ae;
        for (const { source: G } of J.targetLinks)
          se.add(G);
      }
      if (++ae > Q)
        throw new Error("circular link");
      q = se, se = /* @__PURE__ */ new Set();
    }
  }
  function _({ nodes: I }) {
    const Q = Yp(I, (ae) => ae.depth) + 1, q = (n - e - r) / (Q - 1), se = new Array(Q);
    for (const ae of I) {
      const J = Math.max(0, Math.min(Q - 1, Math.floor(d.call(null, ae, Q))));
      ae.layer = J, ae.x0 = e + J * q, ae.x1 = ae.x0 + r, se[J] ? se[J].push(ae) : se[J] = [ae];
    }
    if (f)
      for (const ae of se)
        ae.sort(f);
    return se;
  }
  function L(I) {
    const Q = hE(I, (q) => (a - t - (q.length - 1) * s) / jd(q, Vd));
    for (const q of I) {
      let se = t;
      for (const ae of q) {
        ae.y0 = se, ae.y1 = se + ae.value * Q, se = ae.y1 + s;
        for (const J of ae.sourceLinks)
          J.width = J.value * Q;
      }
      se = (a - se + s) / (q.length + 1);
      for (let ae = 0; ae < q.length; ++ae) {
        const J = q[ae];
        J.y0 += se * (ae + 1), J.y1 += se * (ae + 1);
      }
      H(q);
    }
  }
  function N(I) {
    const Q = _(I);
    s = Math.min(o, (a - t) / (Yp(Q, (q) => q.length) - 1)), L(Q);
    for (let q = 0; q < E; ++q) {
      const se = Math.pow(0.99, q), ae = Math.max(1 - se, (q + 1) / E);
      U(Q, se, ae), M(Q, se, ae);
    }
  }
  function M(I, Q, q) {
    for (let se = 1, ae = I.length; se < ae; ++se) {
      const J = I[se];
      for (const G of J) {
        let he = 0, ee = 0;
        for (const { source: be, value: _e } of G.targetLinks) {
          let Ve = _e * (G.layer - be.layer);
          he += oe(be, G) * Ve, ee += Ve;
        }
        if (!(ee > 0))
          continue;
        let ge = (he / ee - G.y0) * Q;
        G.y0 += ge, G.y1 += ge, ne(G);
      }
      f === void 0 && J.sort(fc), j(J, q);
    }
  }
  function U(I, Q, q) {
    for (let se = I.length, ae = se - 2; ae >= 0; --ae) {
      const J = I[ae];
      for (const G of J) {
        let he = 0, ee = 0;
        for (const { target: be, value: _e } of G.sourceLinks) {
          let Ve = _e * (be.layer - G.layer);
          he += fe(G, be) * Ve, ee += Ve;
        }
        if (!(ee > 0))
          continue;
        let ge = (he / ee - G.y0) * Q;
        G.y0 += ge, G.y1 += ge, ne(G);
      }
      f === void 0 && J.sort(fc), j(J, q);
    }
  }
  function j(I, Q) {
    const q = I.length >> 1, se = I[q];
    V(I, se.y0 - s, q - 1, Q), $(I, se.y1 + s, q + 1, Q), V(I, a, I.length - 1, Q), $(I, t, 0, Q);
  }
  function $(I, Q, q, se) {
    for (; q < I.length; ++q) {
      const ae = I[q], J = (Q - ae.y0) * se;
      J > 1e-6 && (ae.y0 += J, ae.y1 += J), Q = ae.y1 + s;
    }
  }
  function V(I, Q, q, se) {
    for (; q >= 0; --q) {
      const ae = I[q], J = (ae.y1 - Q) * se;
      J > 1e-6 && (ae.y0 -= J, ae.y1 -= J), Q = ae.y0 - s;
    }
  }
  function ne({ sourceLinks: I, targetLinks: Q }) {
    if (g === void 0) {
      for (const { source: { sourceLinks: q } } of Q)
        q.sort(qp);
      for (const { target: { targetLinks: q } } of I)
        q.sort(Xp);
    }
  }
  function H(I) {
    if (g === void 0)
      for (const { sourceLinks: Q, targetLinks: q } of I)
        Q.sort(qp), q.sort(Xp);
  }
  function oe(I, Q) {
    let q = I.y0 - (I.sourceLinks.length - 1) * s / 2;
    for (const { target: se, width: ae } of I.sourceLinks) {
      if (se === Q)
        break;
      q += ae + s;
    }
    for (const { source: se, width: ae } of Q.targetLinks) {
      if (se === I)
        break;
      q -= ae;
    }
    return q;
  }
  function fe(I, Q) {
    let q = Q.y0 - (Q.targetLinks.length - 1) * s / 2;
    for (const { source: se, width: ae } of Q.targetLinks) {
      if (se === I)
        break;
      q += ae + s;
    }
    for (const { target: se, width: ae } of I.sourceLinks) {
      if (se === Q)
        break;
      q -= ae;
    }
    return q;
  }
  return w;
}
function bE(e) {
  return [e.source.x1, e.y0];
}
function SE(e) {
  return [e.target.x0, e.y1];
}
function EE() {
  return c0().source(bE).target(SE);
}
var Va = {}, Ri = {};
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
function kE() {
  if (Qp)
    return Ri;
  Qp = 1;
  var e = ue;
  function t(x) {
    for (var P = "https://reactjs.org/docs/error-decoder.html?invariant=" + x, B = 1; B < arguments.length; B++)
      P += "&args[]=" + encodeURIComponent(arguments[B]);
    return "Minified React error #" + x + "; visit " + P + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var n = Object.prototype.hasOwnProperty, a = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, r = {}, o = {};
  function s(x) {
    return n.call(o, x) ? !0 : n.call(r, x) ? !1 : a.test(x) ? o[x] = !0 : (r[x] = !0, !1);
  }
  function u(x, P, B, Y, Se, ye, Pe) {
    this.acceptsBooleans = P === 2 || P === 3 || P === 4, this.attributeName = Y, this.attributeNamespace = Se, this.mustUseProperty = B, this.propertyName = x, this.type = P, this.sanitizeURL = ye, this.removeEmptyString = Pe;
  }
  var d = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(x) {
    d[x] = new u(x, 0, !1, x, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(x) {
    var P = x[0];
    d[P] = new u(P, 1, !1, x[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(x) {
    d[x] = new u(x, 2, !1, x.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(x) {
    d[x] = new u(x, 2, !1, x, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(x) {
    d[x] = new u(x, 3, !1, x.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(x) {
    d[x] = new u(x, 3, !0, x, null, !1, !1);
  }), ["capture", "download"].forEach(function(x) {
    d[x] = new u(x, 4, !1, x, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(x) {
    d[x] = new u(x, 6, !1, x, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(x) {
    d[x] = new u(x, 5, !1, x.toLowerCase(), null, !1, !1);
  });
  var f = /[\-:]([a-z])/g;
  function g(x) {
    return x[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(x) {
    var P = x.replace(
      f,
      g
    );
    d[P] = new u(P, 1, !1, x, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(x) {
    var P = x.replace(f, g);
    d[P] = new u(P, 1, !1, x, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(x) {
    var P = x.replace(f, g);
    d[P] = new u(P, 1, !1, x, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(x) {
    d[x] = new u(x, 1, !1, x.toLowerCase(), null, !1, !1);
  }), d.xlinkHref = new u("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(x) {
    d[x] = new u(x, 1, !1, x.toLowerCase(), null, !0, !0);
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
    y.forEach(function(P) {
      P = P + x.charAt(0).toUpperCase() + x.substring(1), v[P] = v[x];
    });
  });
  var E = /["'&<>]/;
  function w(x) {
    if (typeof x == "boolean" || typeof x == "number")
      return "" + x;
    x = "" + x;
    var P = E.exec(x);
    if (P) {
      var B = "", Y, Se = 0;
      for (Y = P.index; Y < x.length; Y++) {
        switch (x.charCodeAt(Y)) {
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
        Se !== Y && (B += x.substring(Se, Y)), Se = Y + 1, B += P;
      }
      x = Se !== Y ? B + x.substring(Se, Y) : B;
    }
    return x;
  }
  var O = /([A-Z])/g, T = /^ms-/, m = Array.isArray;
  function A(x, P) {
    return { insertionMode: x, selectedValue: P };
  }
  function _(x, P, B) {
    switch (P) {
      case "select":
        return A(1, B.value != null ? B.value : B.defaultValue);
      case "svg":
        return A(2, null);
      case "math":
        return A(3, null);
      case "foreignObject":
        return A(1, null);
      case "table":
        return A(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return A(5, null);
      case "colgroup":
        return A(7, null);
      case "tr":
        return A(6, null);
    }
    return 4 <= x.insertionMode || x.insertionMode === 0 ? A(1, null) : x;
  }
  var L = /* @__PURE__ */ new Map();
  function N(x, P, B) {
    if (typeof B != "object")
      throw Error(t(62));
    P = !0;
    for (var Y in B)
      if (n.call(B, Y)) {
        var Se = B[Y];
        if (Se != null && typeof Se != "boolean" && Se !== "") {
          if (Y.indexOf("--") === 0) {
            var ye = w(Y);
            Se = w(("" + Se).trim());
          } else {
            ye = Y;
            var Pe = L.get(ye);
            Pe !== void 0 || (Pe = w(ye.replace(O, "-$1").toLowerCase().replace(T, "-ms-")), L.set(ye, Pe)), ye = Pe, Se = typeof Se == "number" ? Se === 0 || n.call(v, Y) ? "" + Se : Se + "px" : w(("" + Se).trim());
          }
          P ? (P = !1, x.push(' style="', ye, ":", Se)) : x.push(";", ye, ":", Se);
        }
      }
    P || x.push('"');
  }
  function M(x, P, B, Y) {
    switch (B) {
      case "style":
        N(x, P, Y);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < B.length) || B[0] !== "o" && B[0] !== "O" || B[1] !== "n" && B[1] !== "N") {
      if (P = d.hasOwnProperty(B) ? d[B] : null, P !== null) {
        switch (typeof Y) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!P.acceptsBooleans)
              return;
        }
        switch (B = P.attributeName, P.type) {
          case 3:
            Y && x.push(" ", B, '=""');
            break;
          case 4:
            Y === !0 ? x.push(" ", B, '=""') : Y !== !1 && x.push(" ", B, '="', w(Y), '"');
            break;
          case 5:
            isNaN(Y) || x.push(" ", B, '="', w(Y), '"');
            break;
          case 6:
            !isNaN(Y) && 1 <= Y && x.push(" ", B, '="', w(Y), '"');
            break;
          default:
            P.sanitizeURL && (Y = "" + Y), x.push(" ", B, '="', w(Y), '"');
        }
      } else if (s(B)) {
        switch (typeof Y) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (P = B.toLowerCase().slice(0, 5), P !== "data-" && P !== "aria-")
              return;
        }
        x.push(" ", B, '="', w(Y), '"');
      }
    }
  }
  function U(x, P, B) {
    if (P != null) {
      if (B != null)
        throw Error(t(60));
      if (typeof P != "object" || !("__html" in P))
        throw Error(t(61));
      P = P.__html, P != null && x.push("" + P);
    }
  }
  function j(x) {
    var P = "";
    return e.Children.forEach(x, function(B) {
      B != null && (P += B);
    }), P;
  }
  function $(x, P, B, Y) {
    x.push(H(B));
    var Se = B = null, ye;
    for (ye in P)
      if (n.call(P, ye)) {
        var Pe = P[ye];
        if (Pe != null)
          switch (ye) {
            case "children":
              B = Pe;
              break;
            case "dangerouslySetInnerHTML":
              Se = Pe;
              break;
            default:
              M(x, Y, ye, Pe);
          }
      }
    return x.push(">"), U(x, Se, B), typeof B == "string" ? (x.push(w(B)), null) : B;
  }
  var V = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ne = /* @__PURE__ */ new Map();
  function H(x) {
    var P = ne.get(x);
    if (P === void 0) {
      if (!V.test(x))
        throw Error(t(65, x));
      P = "<" + x, ne.set(x, P);
    }
    return P;
  }
  function oe(x, P, B, Y, Se) {
    switch (P) {
      case "select":
        x.push(H("select"));
        var ye = null, Pe = null;
        for (ut in B)
          if (n.call(B, ut)) {
            var We = B[ut];
            if (We != null)
              switch (ut) {
                case "children":
                  ye = We;
                  break;
                case "dangerouslySetInnerHTML":
                  Pe = We;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  M(x, Y, ut, We);
              }
          }
        return x.push(">"), U(x, Pe, ye), ye;
      case "option":
        Pe = Se.selectedValue, x.push(H("option"));
        var it = We = null, mt = null, ut = null;
        for (ye in B)
          if (n.call(B, ye)) {
            var Nt = B[ye];
            if (Nt != null)
              switch (ye) {
                case "children":
                  We = Nt;
                  break;
                case "selected":
                  mt = Nt;
                  break;
                case "dangerouslySetInnerHTML":
                  ut = Nt;
                  break;
                case "value":
                  it = Nt;
                default:
                  M(x, Y, ye, Nt);
              }
          }
        if (Pe != null)
          if (B = it !== null ? "" + it : j(We), m(Pe)) {
            for (Y = 0; Y < Pe.length; Y++)
              if ("" + Pe[Y] === B) {
                x.push(' selected=""');
                break;
              }
          } else
            "" + Pe === B && x.push(' selected=""');
        else
          mt && x.push(' selected=""');
        return x.push(">"), U(x, ut, We), We;
      case "textarea":
        x.push(H("textarea")), ut = Pe = ye = null;
        for (We in B)
          if (n.call(B, We) && (it = B[We], it != null))
            switch (We) {
              case "children":
                ut = it;
                break;
              case "value":
                ye = it;
                break;
              case "defaultValue":
                Pe = it;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(91));
              default:
                M(
                  x,
                  Y,
                  We,
                  it
                );
            }
        if (ye === null && Pe !== null && (ye = Pe), x.push(">"), ut != null) {
          if (ye != null)
            throw Error(t(92));
          if (m(ut) && 1 < ut.length)
            throw Error(t(93));
          ye = "" + ut;
        }
        return typeof ye == "string" && ye[0] === `
` && x.push(`
`), ye !== null && x.push(w("" + ye)), null;
      case "input":
        x.push(H("input")), it = ut = We = ye = null;
        for (Pe in B)
          if (n.call(B, Pe) && (mt = B[Pe], mt != null))
            switch (Pe) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, "input"));
              case "defaultChecked":
                it = mt;
                break;
              case "defaultValue":
                We = mt;
                break;
              case "checked":
                ut = mt;
                break;
              case "value":
                ye = mt;
                break;
              default:
                M(x, Y, Pe, mt);
            }
        return ut !== null ? M(x, Y, "checked", ut) : it !== null && M(x, Y, "checked", it), ye !== null ? M(x, Y, "value", ye) : We !== null && M(x, Y, "value", We), x.push("/>"), null;
      case "menuitem":
        x.push(H("menuitem"));
        for (var Dn in B)
          if (n.call(B, Dn) && (ye = B[Dn], ye != null))
            switch (Dn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(400));
              default:
                M(x, Y, Dn, ye);
            }
        return x.push(">"), null;
      case "title":
        x.push(H("title")), ye = null;
        for (Nt in B)
          if (n.call(B, Nt) && (Pe = B[Nt], Pe != null))
            switch (Nt) {
              case "children":
                ye = Pe;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(434));
              default:
                M(x, Y, Nt, Pe);
            }
        return x.push(">"), ye;
      case "listing":
      case "pre":
        x.push(H(P)), Pe = ye = null;
        for (it in B)
          if (n.call(B, it) && (We = B[it], We != null))
            switch (it) {
              case "children":
                ye = We;
                break;
              case "dangerouslySetInnerHTML":
                Pe = We;
                break;
              default:
                M(x, Y, it, We);
            }
        if (x.push(">"), Pe != null) {
          if (ye != null)
            throw Error(t(60));
          if (typeof Pe != "object" || !("__html" in Pe))
            throw Error(t(61));
          B = Pe.__html, B != null && (typeof B == "string" && 0 < B.length && B[0] === `
` ? x.push(`
`, B) : x.push("" + B));
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
        x.push(H(P));
        for (var An in B)
          if (n.call(B, An) && (ye = B[An], ye != null))
            switch (An) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, P));
              default:
                M(x, Y, An, ye);
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
        return $(
          x,
          B,
          P,
          Y
        );
      case "html":
        return Se.insertionMode === 0 && x.push("<!DOCTYPE html>"), $(x, B, P, Y);
      default:
        if (P.indexOf("-") === -1 && typeof B.is != "string")
          return $(x, B, P, Y);
        x.push(H(P)), Pe = ye = null;
        for (mt in B)
          if (n.call(B, mt) && (We = B[mt], We != null))
            switch (mt) {
              case "children":
                ye = We;
                break;
              case "dangerouslySetInnerHTML":
                Pe = We;
                break;
              case "style":
                N(x, Y, We);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                s(mt) && typeof We != "function" && typeof We != "symbol" && x.push(" ", mt, '="', w(We), '"');
            }
        return x.push(">"), U(x, Pe, ye), ye;
    }
  }
  function fe(x, P, B) {
    if (x.push('<!--$?--><template id="'), B === null)
      throw Error(t(395));
    return x.push(B), x.push('"></template>');
  }
  function I(x, P, B, Y) {
    switch (B.insertionMode) {
      case 0:
      case 1:
        return x.push('<div hidden id="'), x.push(P.segmentPrefix), P = Y.toString(16), x.push(P), x.push('">');
      case 2:
        return x.push('<svg aria-hidden="true" style="display:none" id="'), x.push(P.segmentPrefix), P = Y.toString(16), x.push(P), x.push('">');
      case 3:
        return x.push('<math aria-hidden="true" style="display:none" id="'), x.push(P.segmentPrefix), P = Y.toString(16), x.push(P), x.push('">');
      case 4:
        return x.push('<table hidden id="'), x.push(P.segmentPrefix), P = Y.toString(16), x.push(P), x.push('">');
      case 5:
        return x.push('<table hidden><tbody id="'), x.push(P.segmentPrefix), P = Y.toString(16), x.push(P), x.push('">');
      case 6:
        return x.push('<table hidden><tr id="'), x.push(P.segmentPrefix), P = Y.toString(16), x.push(P), x.push('">');
      case 7:
        return x.push('<table hidden><colgroup id="'), x.push(P.segmentPrefix), P = Y.toString(16), x.push(P), x.push('">');
      default:
        throw Error(t(397));
    }
  }
  function Q(x, P) {
    switch (P.insertionMode) {
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
  var q = /[<\u2028\u2029]/g;
  function se(x) {
    return JSON.stringify(x).replace(q, function(P) {
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
  function ae(x, P) {
    return P = P === void 0 ? "" : P, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: P + "P:", segmentPrefix: P + "S:", boundaryPrefix: P + "B:", idPrefix: P, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: x };
  }
  function J(x, P, B, Y) {
    return B.generateStaticMarkup ? (x.push(w(P)), !1) : (P === "" ? x = Y : (Y && x.push("<!-- -->"), x.push(w(P)), x = !0), x);
  }
  var G = Object.assign, he = Symbol.for("react.element"), ee = Symbol.for("react.portal"), ge = Symbol.for("react.fragment"), be = Symbol.for("react.strict_mode"), _e = Symbol.for("react.profiler"), Ve = Symbol.for("react.provider"), Qe = Symbol.for("react.context"), Ae = Symbol.for("react.forward_ref"), ve = Symbol.for("react.suspense"), Ee = Symbol.for("react.suspense_list"), le = Symbol.for("react.memo"), Be = Symbol.for("react.lazy"), Ne = Symbol.for("react.scope"), qe = Symbol.for("react.debug_trace_mode"), Ke = Symbol.for("react.legacy_hidden"), nt = Symbol.for("react.default_value"), at = Symbol.iterator;
  function lt(x) {
    if (x == null)
      return null;
    if (typeof x == "function")
      return x.displayName || x.name || null;
    if (typeof x == "string")
      return x;
    switch (x) {
      case ge:
        return "Fragment";
      case ee:
        return "Portal";
      case _e:
        return "Profiler";
      case be:
        return "StrictMode";
      case ve:
        return "Suspense";
      case Ee:
        return "SuspenseList";
    }
    if (typeof x == "object")
      switch (x.$$typeof) {
        case Qe:
          return (x.displayName || "Context") + ".Consumer";
        case Ve:
          return (x._context.displayName || "Context") + ".Provider";
        case Ae:
          var P = x.render;
          return x = x.displayName, x || (x = P.displayName || P.name || "", x = x !== "" ? "ForwardRef(" + x + ")" : "ForwardRef"), x;
        case le:
          return P = x.displayName || null, P !== null ? P : lt(x.type) || "Memo";
        case Be:
          P = x._payload, x = x._init;
          try {
            return lt(x(P));
          } catch {
          }
      }
    return null;
  }
  var ot = {};
  function Ze(x, P) {
    if (x = x.contextTypes, !x)
      return ot;
    var B = {}, Y;
    for (Y in x)
      B[Y] = P[Y];
    return B;
  }
  var Me = null;
  function De(x, P) {
    if (x !== P) {
      x.context._currentValue2 = x.parentValue, x = x.parent;
      var B = P.parent;
      if (x === null) {
        if (B !== null)
          throw Error(t(401));
      } else {
        if (B === null)
          throw Error(t(401));
        De(x, B);
      }
      P.context._currentValue2 = P.value;
    }
  }
  function ht(x) {
    x.context._currentValue2 = x.parentValue, x = x.parent, x !== null && ht(x);
  }
  function Ue(x) {
    var P = x.parent;
    P !== null && Ue(P), x.context._currentValue2 = x.value;
  }
  function dt(x, P) {
    if (x.context._currentValue2 = x.parentValue, x = x.parent, x === null)
      throw Error(t(402));
    x.depth === P.depth ? De(x, P) : dt(x, P);
  }
  function pt(x, P) {
    var B = P.parent;
    if (B === null)
      throw Error(t(402));
    x.depth === B.depth ? De(x, B) : pt(x, B), P.context._currentValue2 = P.value;
  }
  function gt(x) {
    var P = Me;
    P !== x && (P === null ? Ue(x) : x === null ? ht(P) : P.depth === x.depth ? De(P, x) : P.depth > x.depth ? dt(P, x) : pt(P, x), Me = x);
  }
  var _t = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(x, P) {
    x = x._reactInternals, x.queue !== null && x.queue.push(P);
  }, enqueueReplaceState: function(x, P) {
    x = x._reactInternals, x.replace = !0, x.queue = [P];
  }, enqueueForceUpdate: function() {
  } };
  function It(x, P, B, Y) {
    var Se = x.state !== void 0 ? x.state : null;
    x.updater = _t, x.props = B, x.state = Se;
    var ye = { queue: [], replace: !1 };
    x._reactInternals = ye;
    var Pe = P.contextType;
    if (x.context = typeof Pe == "object" && Pe !== null ? Pe._currentValue2 : Y, Pe = P.getDerivedStateFromProps, typeof Pe == "function" && (Pe = Pe(B, Se), Se = Pe == null ? Se : G({}, Se, Pe), x.state = Se), typeof P.getDerivedStateFromProps != "function" && typeof x.getSnapshotBeforeUpdate != "function" && (typeof x.UNSAFE_componentWillMount == "function" || typeof x.componentWillMount == "function"))
      if (P = x.state, typeof x.componentWillMount == "function" && x.componentWillMount(), typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount(), P !== x.state && _t.enqueueReplaceState(x, x.state, null), ye.queue !== null && 0 < ye.queue.length)
        if (P = ye.queue, Pe = ye.replace, ye.queue = null, ye.replace = !1, Pe && P.length === 1)
          x.state = P[0];
        else {
          for (ye = Pe ? P[0] : x.state, Se = !0, Pe = Pe ? 1 : 0; Pe < P.length; Pe++) {
            var We = P[Pe];
            We = typeof We == "function" ? We.call(x, ye, B, Y) : We, We != null && (Se ? (Se = !1, ye = G({}, ye, We)) : G(ye, We));
          }
          x.state = ye;
        }
      else
        ye.queue = null;
  }
  var cn = { id: 1, overflow: "" };
  function qt(x, P, B) {
    var Y = x.id;
    x = x.overflow;
    var Se = 32 - rn(Y) - 1;
    Y &= ~(1 << Se), B += 1;
    var ye = 32 - rn(P) + Se;
    if (30 < ye) {
      var Pe = Se - Se % 5;
      return ye = (Y & (1 << Pe) - 1).toString(32), Y >>= Pe, Se -= Pe, { id: 1 << 32 - rn(P) + Se | B << Se | Y, overflow: ye + x };
    }
    return { id: 1 << ye | B << Se | Y, overflow: x };
  }
  var rn = Math.clz32 ? Math.clz32 : vn, Et = Math.log, kt = Math.LN2;
  function vn(x) {
    return x >>>= 0, x === 0 ? 32 : 31 - (Et(x) / kt | 0) | 0;
  }
  function kn(x, P) {
    return x === P && (x !== 0 || 1 / x === 1 / P) || x !== x && P !== P;
  }
  var Fe = typeof Object.is == "function" ? Object.is : kn, Gt = null, Ft = null, dn = null, Je = null, fn = !1, hn = !1, Tn = 0, Sn = null, un = 0;
  function Mt() {
    if (Gt === null)
      throw Error(t(321));
    return Gt;
  }
  function Ht() {
    if (0 < un)
      throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function K() {
    return Je === null ? dn === null ? (fn = !1, dn = Je = Ht()) : (fn = !0, Je = dn) : Je.next === null ? (fn = !1, Je = Je.next = Ht()) : (fn = !0, Je = Je.next), Je;
  }
  function He() {
    Ft = Gt = null, hn = !1, dn = null, un = 0, Je = Sn = null;
  }
  function et(x, P) {
    return typeof P == "function" ? P(x) : P;
  }
  function Ie(x, P, B) {
    if (Gt = Mt(), Je = K(), fn) {
      var Y = Je.queue;
      if (P = Y.dispatch, Sn !== null && (B = Sn.get(Y), B !== void 0)) {
        Sn.delete(Y), Y = Je.memoizedState;
        do
          Y = x(Y, B.action), B = B.next;
        while (B !== null);
        return Je.memoizedState = Y, [Y, P];
      }
      return [Je.memoizedState, P];
    }
    return x = x === et ? typeof P == "function" ? P() : P : B !== void 0 ? B(P) : P, Je.memoizedState = x, x = Je.queue = { last: null, dispatch: null }, x = x.dispatch = ft.bind(null, Gt, x), [Je.memoizedState, x];
  }
  function bt(x, P) {
    if (Gt = Mt(), Je = K(), P = P === void 0 ? null : P, Je !== null) {
      var B = Je.memoizedState;
      if (B !== null && P !== null) {
        var Y = B[1];
        e:
          if (Y === null)
            Y = !1;
          else {
            for (var Se = 0; Se < Y.length && Se < P.length; Se++)
              if (!Fe(P[Se], Y[Se])) {
                Y = !1;
                break e;
              }
            Y = !0;
          }
        if (Y)
          return B[0];
      }
    }
    return x = x(), Je.memoizedState = [x, P], x;
  }
  function ft(x, P, B) {
    if (25 <= un)
      throw Error(t(301));
    if (x === Gt)
      if (hn = !0, x = { action: B, next: null }, Sn === null && (Sn = /* @__PURE__ */ new Map()), B = Sn.get(P), B === void 0)
        Sn.set(P, x);
      else {
        for (P = B; P.next !== null; )
          P = P.next;
        P.next = x;
      }
  }
  function we() {
    throw Error(t(394));
  }
  function Ye() {
  }
  var $e = { readContext: function(x) {
    return x._currentValue2;
  }, useContext: function(x) {
    return Mt(), x._currentValue2;
  }, useMemo: bt, useReducer: Ie, useRef: function(x) {
    Gt = Mt(), Je = K();
    var P = Je.memoizedState;
    return P === null ? (x = { current: x }, Je.memoizedState = x) : P;
  }, useState: function(x) {
    return Ie(et, x);
  }, useInsertionEffect: Ye, useLayoutEffect: function() {
  }, useCallback: function(x, P) {
    return bt(function() {
      return x;
    }, P);
  }, useImperativeHandle: Ye, useEffect: Ye, useDebugValue: Ye, useDeferredValue: function(x) {
    return Mt(), x;
  }, useTransition: function() {
    return Mt(), [
      !1,
      we
    ];
  }, useId: function() {
    var x = Ft.treeContext, P = x.overflow;
    x = x.id, x = (x & ~(1 << 32 - rn(x) - 1)).toString(32) + P;
    var B = Xe;
    if (B === null)
      throw Error(t(404));
    return P = Tn++, x = ":" + B.idPrefix + "R" + x, 0 < P && (x += "H" + P.toString(32)), x + ":";
  }, useMutableSource: function(x, P) {
    return Mt(), P(x._source);
  }, useSyncExternalStore: function(x, P, B) {
    if (B === void 0)
      throw Error(t(407));
    return B();
  } }, Xe = null, Lt = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Wt(x) {
    return console.error(x), null;
  }
  function Ut() {
  }
  function Kt(x, P, B, Y, Se, ye, Pe, We, it) {
    var mt = [], ut = /* @__PURE__ */ new Set();
    return P = { destination: null, responseState: P, progressiveChunkSize: Y === void 0 ? 12800 : Y, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ut, pingedTasks: mt, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: Se === void 0 ? Wt : Se, onAllReady: ye === void 0 ? Ut : ye, onShellReady: Pe === void 0 ? Ut : Pe, onShellError: We === void 0 ? Ut : We, onFatalError: it === void 0 ? Ut : it }, B = $t(P, 0, null, B, !1, !1), B.parentFlushed = !0, x = Ot(P, x, null, B, ut, ot, null, cn), mt.push(x), P;
  }
  function Ot(x, P, B, Y, Se, ye, Pe, We) {
    x.allPendingTasks++, B === null ? x.pendingRootTasks++ : B.pendingTasks++;
    var it = { node: P, ping: function() {
      var mt = x.pingedTasks;
      mt.push(it), mt.length === 1 && Yt(x);
    }, blockedBoundary: B, blockedSegment: Y, abortSet: Se, legacyContext: ye, context: Pe, treeContext: We };
    return Se.add(it), it;
  }
  function $t(x, P, B, Y, Se, ye) {
    return { status: 0, id: -1, index: P, parentFlushed: !1, chunks: [], children: [], formatContext: Y, boundary: B, lastPushedText: Se, textEmbedded: ye };
  }
  function Zt(x, P) {
    if (x = x.onError(P), x != null && typeof x != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof x + '" instead');
    return x;
  }
  function an(x, P) {
    var B = x.onShellError;
    B(P), B = x.onFatalError, B(P), x.destination !== null ? (x.status = 2, x.destination.destroy(P)) : (x.status = 1, x.fatalError = P);
  }
  function pn(x, P, B, Y, Se) {
    for (Gt = {}, Ft = P, Tn = 0, x = B(Y, Se); hn; )
      hn = !1, Tn = 0, un += 1, Je = null, x = B(Y, Se);
    return He(), x;
  }
  function Qt(x, P, B, Y) {
    var Se = B.render(), ye = Y.childContextTypes;
    if (ye != null) {
      var Pe = P.legacyContext;
      if (typeof B.getChildContext != "function")
        Y = Pe;
      else {
        B = B.getChildContext();
        for (var We in B)
          if (!(We in ye))
            throw Error(t(108, lt(Y) || "Unknown", We));
        Y = G({}, Pe, B);
      }
      P.legacyContext = Y, ct(x, P, Se), P.legacyContext = Pe;
    } else
      ct(x, P, Se);
  }
  function mn(x, P) {
    if (x && x.defaultProps) {
      P = G({}, P), x = x.defaultProps;
      for (var B in x)
        P[B] === void 0 && (P[B] = x[B]);
      return P;
    }
    return P;
  }
  function yt(x, P, B, Y, Se) {
    if (typeof B == "function")
      if (B.prototype && B.prototype.isReactComponent) {
        Se = Ze(B, P.legacyContext);
        var ye = B.contextType;
        ye = new B(Y, typeof ye == "object" && ye !== null ? ye._currentValue2 : Se), It(ye, B, Y, Se), Qt(x, P, ye, B);
      } else {
        ye = Ze(B, P.legacyContext), Se = pn(x, P, B, Y, ye);
        var Pe = Tn !== 0;
        if (typeof Se == "object" && Se !== null && typeof Se.render == "function" && Se.$$typeof === void 0)
          It(Se, B, Y, ye), Qt(x, P, Se, B);
        else if (Pe) {
          Y = P.treeContext, P.treeContext = qt(Y, 1, 0);
          try {
            ct(x, P, Se);
          } finally {
            P.treeContext = Y;
          }
        } else
          ct(x, P, Se);
      }
    else if (typeof B == "string") {
      switch (Se = P.blockedSegment, ye = oe(Se.chunks, B, Y, x.responseState, Se.formatContext), Se.lastPushedText = !1, Pe = Se.formatContext, Se.formatContext = _(Pe, B, Y), xn(x, P, ye), Se.formatContext = Pe, B) {
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
          Se.chunks.push("</", B, ">");
      }
      Se.lastPushedText = !1;
    } else {
      switch (B) {
        case Ke:
        case qe:
        case be:
        case _e:
        case ge:
          ct(x, P, Y.children);
          return;
        case Ee:
          ct(x, P, Y.children);
          return;
        case Ne:
          throw Error(t(343));
        case ve:
          e: {
            B = P.blockedBoundary, Se = P.blockedSegment, ye = Y.fallback, Y = Y.children, Pe = /* @__PURE__ */ new Set();
            var We = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: Pe, errorDigest: null }, it = $t(x, Se.chunks.length, We, Se.formatContext, !1, !1);
            Se.children.push(it), Se.lastPushedText = !1;
            var mt = $t(x, 0, null, Se.formatContext, !1, !1);
            mt.parentFlushed = !0, P.blockedBoundary = We, P.blockedSegment = mt;
            try {
              if (xn(
                x,
                P,
                Y
              ), x.responseState.generateStaticMarkup || mt.lastPushedText && mt.textEmbedded && mt.chunks.push("<!-- -->"), mt.status = 1, Cn(We, mt), We.pendingTasks === 0)
                break e;
            } catch (ut) {
              mt.status = 4, We.forceClientRender = !0, We.errorDigest = Zt(x, ut);
            } finally {
              P.blockedBoundary = B, P.blockedSegment = Se;
            }
            P = Ot(x, ye, B, it, Pe, P.legacyContext, P.context, P.treeContext), x.pingedTasks.push(P);
          }
          return;
      }
      if (typeof B == "object" && B !== null)
        switch (B.$$typeof) {
          case Ae:
            if (Y = pn(x, P, B.render, Y, Se), Tn !== 0) {
              B = P.treeContext, P.treeContext = qt(B, 1, 0);
              try {
                ct(x, P, Y);
              } finally {
                P.treeContext = B;
              }
            } else
              ct(x, P, Y);
            return;
          case le:
            B = B.type, Y = mn(B, Y), yt(x, P, B, Y, Se);
            return;
          case Ve:
            if (Se = Y.children, B = B._context, Y = Y.value, ye = B._currentValue2, B._currentValue2 = Y, Pe = Me, Me = Y = { parent: Pe, depth: Pe === null ? 0 : Pe.depth + 1, context: B, parentValue: ye, value: Y }, P.context = Y, ct(x, P, Se), x = Me, x === null)
              throw Error(t(403));
            Y = x.parentValue, x.context._currentValue2 = Y === nt ? x.context._defaultValue : Y, x = Me = x.parent, P.context = x;
            return;
          case Qe:
            Y = Y.children, Y = Y(B._currentValue2), ct(x, P, Y);
            return;
          case Be:
            Se = B._init, B = Se(B._payload), Y = mn(B, Y), yt(
              x,
              P,
              B,
              Y,
              void 0
            );
            return;
        }
      throw Error(t(130, B == null ? B : typeof B, ""));
    }
  }
  function ct(x, P, B) {
    if (P.node = B, typeof B == "object" && B !== null) {
      switch (B.$$typeof) {
        case he:
          yt(x, P, B.type, B.props, B.ref);
          return;
        case ee:
          throw Error(t(257));
        case Be:
          var Y = B._init;
          B = Y(B._payload), ct(x, P, B);
          return;
      }
      if (m(B)) {
        on(x, P, B);
        return;
      }
      if (B === null || typeof B != "object" ? Y = null : (Y = at && B[at] || B["@@iterator"], Y = typeof Y == "function" ? Y : null), Y && (Y = Y.call(B))) {
        if (B = Y.next(), !B.done) {
          var Se = [];
          do
            Se.push(B.value), B = Y.next();
          while (!B.done);
          on(x, P, Se);
        }
        return;
      }
      throw x = Object.prototype.toString.call(B), Error(t(31, x === "[object Object]" ? "object with keys {" + Object.keys(B).join(", ") + "}" : x));
    }
    typeof B == "string" ? (Y = P.blockedSegment, Y.lastPushedText = J(P.blockedSegment.chunks, B, x.responseState, Y.lastPushedText)) : typeof B == "number" && (Y = P.blockedSegment, Y.lastPushedText = J(P.blockedSegment.chunks, "" + B, x.responseState, Y.lastPushedText));
  }
  function on(x, P, B) {
    for (var Y = B.length, Se = 0; Se < Y; Se++) {
      var ye = P.treeContext;
      P.treeContext = qt(ye, Y, Se);
      try {
        xn(x, P, B[Se]);
      } finally {
        P.treeContext = ye;
      }
    }
  }
  function xn(x, P, B) {
    var Y = P.blockedSegment.formatContext, Se = P.legacyContext, ye = P.context;
    try {
      return ct(x, P, B);
    } catch (it) {
      if (He(), typeof it == "object" && it !== null && typeof it.then == "function") {
        B = it;
        var Pe = P.blockedSegment, We = $t(x, Pe.chunks.length, null, Pe.formatContext, Pe.lastPushedText, !0);
        Pe.children.push(We), Pe.lastPushedText = !1, x = Ot(x, P.node, P.blockedBoundary, We, P.abortSet, P.legacyContext, P.context, P.treeContext).ping, B.then(x, x), P.blockedSegment.formatContext = Y, P.legacyContext = Se, P.context = ye, gt(ye);
      } else
        throw P.blockedSegment.formatContext = Y, P.legacyContext = Se, P.context = ye, gt(ye), it;
    }
  }
  function en(x) {
    var P = x.blockedBoundary;
    x = x.blockedSegment, x.status = 3, jt(this, P, x);
  }
  function Bn(x, P, B) {
    var Y = x.blockedBoundary;
    x.blockedSegment.status = 3, Y === null ? (P.allPendingTasks--, P.status !== 2 && (P.status = 2, P.destination !== null && P.destination.push(null))) : (Y.pendingTasks--, Y.forceClientRender || (Y.forceClientRender = !0, x = B === void 0 ? Error(t(432)) : B, Y.errorDigest = P.onError(x), Y.parentFlushed && P.clientRenderedBoundaries.push(Y)), Y.fallbackAbortableTasks.forEach(function(Se) {
      return Bn(Se, P, B);
    }), Y.fallbackAbortableTasks.clear(), P.allPendingTasks--, P.allPendingTasks === 0 && (Y = P.onAllReady, Y()));
  }
  function Cn(x, P) {
    if (P.chunks.length === 0 && P.children.length === 1 && P.children[0].boundary === null) {
      var B = P.children[0];
      B.id = P.id, B.parentFlushed = !0, B.status === 1 && Cn(x, B);
    } else
      x.completedSegments.push(P);
  }
  function jt(x, P, B) {
    if (P === null) {
      if (B.parentFlushed) {
        if (x.completedRootSegment !== null)
          throw Error(t(389));
        x.completedRootSegment = B;
      }
      x.pendingRootTasks--, x.pendingRootTasks === 0 && (x.onShellError = Ut, P = x.onShellReady, P());
    } else
      P.pendingTasks--, P.forceClientRender || (P.pendingTasks === 0 ? (B.parentFlushed && B.status === 1 && Cn(P, B), P.parentFlushed && x.completedBoundaries.push(P), P.fallbackAbortableTasks.forEach(en, x), P.fallbackAbortableTasks.clear()) : B.parentFlushed && B.status === 1 && (Cn(P, B), P.completedSegments.length === 1 && P.parentFlushed && x.partialBoundaries.push(P)));
    x.allPendingTasks--, x.allPendingTasks === 0 && (x = x.onAllReady, x());
  }
  function Yt(x) {
    if (x.status !== 2) {
      var P = Me, B = Lt.current;
      Lt.current = $e;
      var Y = Xe;
      Xe = x.responseState;
      try {
        var Se = x.pingedTasks, ye;
        for (ye = 0; ye < Se.length; ye++) {
          var Pe = Se[ye], We = x, it = Pe.blockedSegment;
          if (it.status === 0) {
            gt(Pe.context);
            try {
              ct(We, Pe, Pe.node), We.responseState.generateStaticMarkup || it.lastPushedText && it.textEmbedded && it.chunks.push("<!-- -->"), Pe.abortSet.delete(Pe), it.status = 1, jt(We, Pe.blockedBoundary, it);
            } catch (Pn) {
              if (He(), typeof Pn == "object" && Pn !== null && typeof Pn.then == "function") {
                var mt = Pe.ping;
                Pn.then(mt, mt);
              } else {
                Pe.abortSet.delete(Pe), it.status = 4;
                var ut = Pe.blockedBoundary, Nt = Pn, Dn = Zt(We, Nt);
                if (ut === null ? an(We, Nt) : (ut.pendingTasks--, ut.forceClientRender || (ut.forceClientRender = !0, ut.errorDigest = Dn, ut.parentFlushed && We.clientRenderedBoundaries.push(ut))), We.allPendingTasks--, We.allPendingTasks === 0) {
                  var An = We.onAllReady;
                  An();
                }
              }
            } finally {
            }
          }
        }
        Se.splice(0, ye), x.destination !== null && rr(x, x.destination);
      } catch (Pn) {
        Zt(x, Pn), an(x, Pn);
      } finally {
        Xe = Y, Lt.current = B, B === $e && gt(P);
      }
    }
  }
  function jn(x, P, B) {
    switch (B.parentFlushed = !0, B.status) {
      case 0:
        var Y = B.id = x.nextSegmentId++;
        return B.lastPushedText = !1, B.textEmbedded = !1, x = x.responseState, P.push('<template id="'), P.push(x.placeholderPrefix), x = Y.toString(16), P.push(x), P.push('"></template>');
      case 1:
        B.status = 2;
        var Se = !0;
        Y = B.chunks;
        var ye = 0;
        B = B.children;
        for (var Pe = 0; Pe < B.length; Pe++) {
          for (Se = B[Pe]; ye < Se.index; ye++)
            P.push(Y[ye]);
          Se = nr(x, P, Se);
        }
        for (; ye < Y.length - 1; ye++)
          P.push(Y[ye]);
        return ye < Y.length && (Se = P.push(Y[ye])), Se;
      default:
        throw Error(t(390));
    }
  }
  function nr(x, P, B) {
    var Y = B.boundary;
    if (Y === null)
      return jn(x, P, B);
    if (Y.parentFlushed = !0, Y.forceClientRender)
      return x.responseState.generateStaticMarkup || (Y = Y.errorDigest, P.push("<!--$!-->"), P.push("<template"), Y && (P.push(' data-dgst="'), Y = w(Y), P.push(Y), P.push('"')), P.push("></template>")), jn(x, P, B), x = x.responseState.generateStaticMarkup ? !0 : P.push("<!--/$-->"), x;
    if (0 < Y.pendingTasks) {
      Y.rootSegmentID = x.nextSegmentId++, 0 < Y.completedSegments.length && x.partialBoundaries.push(Y);
      var Se = x.responseState, ye = Se.nextSuspenseID++;
      return Se = Se.boundaryPrefix + ye.toString(16), Y = Y.id = Se, fe(P, x.responseState, Y), jn(x, P, B), P.push("<!--/$-->");
    }
    if (Y.byteSize > x.progressiveChunkSize)
      return Y.rootSegmentID = x.nextSegmentId++, x.completedBoundaries.push(Y), fe(P, x.responseState, Y.id), jn(x, P, B), P.push("<!--/$-->");
    if (x.responseState.generateStaticMarkup || P.push("<!--$-->"), B = Y.completedSegments, B.length !== 1)
      throw Error(t(391));
    return nr(x, P, B[0]), x = x.responseState.generateStaticMarkup ? !0 : P.push("<!--/$-->"), x;
  }
  function gr(x, P, B) {
    return I(P, x.responseState, B.formatContext, B.id), nr(x, P, B), Q(P, B.formatContext);
  }
  function yr(x, P, B) {
    for (var Y = B.completedSegments, Se = 0; Se < Y.length; Se++)
      cr(x, P, B, Y[Se]);
    if (Y.length = 0, x = x.responseState, Y = B.id, B = B.rootSegmentID, P.push(x.startInlineScript), x.sentCompleteBoundaryFunction ? P.push('$RC("') : (x.sentCompleteBoundaryFunction = !0, P.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), Y === null)
      throw Error(t(395));
    return B = B.toString(16), P.push(Y), P.push('","'), P.push(x.segmentPrefix), P.push(B), P.push('")<\/script>');
  }
  function cr(x, P, B, Y) {
    if (Y.status === 2)
      return !0;
    var Se = Y.id;
    if (Se === -1) {
      if ((Y.id = B.rootSegmentID) === -1)
        throw Error(t(392));
      return gr(x, P, Y);
    }
    return gr(x, P, Y), x = x.responseState, P.push(x.startInlineScript), x.sentCompleteSegmentFunction ? P.push('$RS("') : (x.sentCompleteSegmentFunction = !0, P.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), P.push(x.segmentPrefix), Se = Se.toString(16), P.push(Se), P.push('","'), P.push(x.placeholderPrefix), P.push(Se), P.push('")<\/script>');
  }
  function rr(x, P) {
    try {
      var B = x.completedRootSegment;
      if (B !== null && x.pendingRootTasks === 0) {
        nr(x, P, B), x.completedRootSegment = null;
        var Y = x.responseState.bootstrapChunks;
        for (B = 0; B < Y.length - 1; B++)
          P.push(Y[B]);
        B < Y.length && P.push(Y[B]);
      }
      var Se = x.clientRenderedBoundaries, ye;
      for (ye = 0; ye < Se.length; ye++) {
        var Pe = Se[ye];
        Y = P;
        var We = x.responseState, it = Pe.id, mt = Pe.errorDigest, ut = Pe.errorMessage, Nt = Pe.errorComponentStack;
        if (Y.push(We.startInlineScript), We.sentClientRenderFunction ? Y.push('$RX("') : (We.sentClientRenderFunction = !0, Y.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), it === null)
          throw Error(t(395));
        if (Y.push(it), Y.push('"'), mt || ut || Nt) {
          Y.push(",");
          var Dn = se(mt || "");
          Y.push(Dn);
        }
        if (ut || Nt) {
          Y.push(",");
          var An = se(ut || "");
          Y.push(An);
        }
        if (Nt) {
          Y.push(",");
          var Pn = se(Nt);
          Y.push(Pn);
        }
        if (!Y.push(")<\/script>")) {
          x.destination = null, ye++, Se.splice(0, ye);
          return;
        }
      }
      Se.splice(0, ye);
      var Vn = x.completedBoundaries;
      for (ye = 0; ye < Vn.length; ye++)
        if (!yr(x, P, Vn[ye])) {
          x.destination = null, ye++, Vn.splice(0, ye);
          return;
        }
      Vn.splice(0, ye);
      var re = x.partialBoundaries;
      for (ye = 0; ye < re.length; ye++) {
        var te = re[ye];
        e: {
          Se = x, Pe = P;
          var ce = te.completedSegments;
          for (We = 0; We < ce.length; We++)
            if (!cr(Se, Pe, te, ce[We])) {
              We++, ce.splice(0, We);
              var Re = !1;
              break e;
            }
          ce.splice(0, We), Re = !0;
        }
        if (!Re) {
          x.destination = null, ye++, re.splice(0, ye);
          return;
        }
      }
      re.splice(0, ye);
      var Rt = x.completedBoundaries;
      for (ye = 0; ye < Rt.length; ye++)
        if (!yr(x, P, Rt[ye])) {
          x.destination = null, ye++, Rt.splice(0, ye);
          return;
        }
      Rt.splice(0, ye);
    } finally {
      x.allPendingTasks === 0 && x.pingedTasks.length === 0 && x.clientRenderedBoundaries.length === 0 && x.completedBoundaries.length === 0 && P.push(null);
    }
  }
  function Ar(x, P) {
    try {
      var B = x.abortableTasks;
      B.forEach(function(Y) {
        return Bn(Y, x, P);
      }), B.clear(), x.destination !== null && rr(x, x.destination);
    } catch (Y) {
      Zt(x, Y), an(x, Y);
    }
  }
  function dr() {
  }
  function fr(x, P, B, Y) {
    var Se = !1, ye = null, Pe = "", We = { push: function(mt) {
      return mt !== null && (Pe += mt), !0;
    }, destroy: function(mt) {
      Se = !0, ye = mt;
    } }, it = !1;
    if (x = Kt(x, ae(B, P ? P.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, dr, void 0, function() {
      it = !0;
    }, void 0, void 0), Yt(x), Ar(x, Y), x.status === 1)
      x.status = 2, We.destroy(x.fatalError);
    else if (x.status !== 2 && x.destination === null) {
      x.destination = We;
      try {
        rr(x, We);
      } catch (mt) {
        Zt(x, mt), an(x, mt);
      }
    }
    if (Se)
      throw ye;
    if (!it)
      throw Error(t(426));
    return Pe;
  }
  return Ri.renderToNodeStream = function() {
    throw Error(t(207));
  }, Ri.renderToStaticMarkup = function(x, P) {
    return fr(x, P, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Ri.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, Ri.renderToString = function(x, P) {
    return fr(x, P, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Ri.version = "18.2.0", Ri;
}
var Du = {};
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
function wE() {
  if (Jp)
    return Du;
  Jp = 1;
  var e = ue;
  function t(b) {
    for (var R = "https://reactjs.org/docs/error-decoder.html?invariant=" + b, z = 1; z < arguments.length; z++)
      R += "&args[]=" + encodeURIComponent(arguments[z]);
    return "Minified React error #" + b + "; visit " + R + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var n = null, a = 0;
  function r(b, R) {
    if (R.length !== 0)
      if (512 < R.length)
        0 < a && (b.enqueue(new Uint8Array(n.buffer, 0, a)), n = new Uint8Array(512), a = 0), b.enqueue(R);
      else {
        var z = n.length - a;
        z < R.length && (z === 0 ? b.enqueue(n) : (n.set(R.subarray(0, z), a), b.enqueue(n), R = R.subarray(z)), n = new Uint8Array(512), a = 0), n.set(R, a), a += R.length;
      }
  }
  function o(b, R) {
    return r(b, R), !0;
  }
  function s(b) {
    n && 0 < a && (b.enqueue(new Uint8Array(n.buffer, 0, a)), n = null, a = 0);
  }
  var u = new TextEncoder();
  function d(b) {
    return u.encode(b);
  }
  function f(b) {
    return u.encode(b);
  }
  function g(b, R) {
    typeof b.error == "function" ? b.error(R) : b.close();
  }
  var v = Object.prototype.hasOwnProperty, y = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, E = {}, w = {};
  function O(b) {
    return v.call(w, b) ? !0 : v.call(E, b) ? !1 : y.test(b) ? w[b] = !0 : (E[b] = !0, !1);
  }
  function T(b, R, z, X, ke, xe, Oe) {
    this.acceptsBooleans = R === 2 || R === 3 || R === 4, this.attributeName = X, this.attributeNamespace = ke, this.mustUseProperty = z, this.propertyName = b, this.type = R, this.sanitizeURL = xe, this.removeEmptyString = Oe;
  }
  var m = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(b) {
    m[b] = new T(b, 0, !1, b, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(b) {
    var R = b[0];
    m[R] = new T(R, 1, !1, b[1], null, !1, !1);
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
  var A = /[\-:]([a-z])/g;
  function _(b) {
    return b[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(b) {
    var R = b.replace(
      A,
      _
    );
    m[R] = new T(R, 1, !1, b, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(b) {
    var R = b.replace(A, _);
    m[R] = new T(R, 1, !1, b, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(b) {
    var R = b.replace(A, _);
    m[R] = new T(R, 1, !1, b, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(b) {
    m[b] = new T(b, 1, !1, b.toLowerCase(), null, !1, !1);
  }), m.xlinkHref = new T("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(b) {
    m[b] = new T(b, 1, !1, b.toLowerCase(), null, !0, !0);
  });
  var L = {
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
  Object.keys(L).forEach(function(b) {
    N.forEach(function(R) {
      R = R + b.charAt(0).toUpperCase() + b.substring(1), L[R] = L[b];
    });
  });
  var M = /["'&<>]/;
  function U(b) {
    if (typeof b == "boolean" || typeof b == "number")
      return "" + b;
    b = "" + b;
    var R = M.exec(b);
    if (R) {
      var z = "", X, ke = 0;
      for (X = R.index; X < b.length; X++) {
        switch (b.charCodeAt(X)) {
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
        ke !== X && (z += b.substring(ke, X)), ke = X + 1, z += R;
      }
      b = ke !== X ? z + b.substring(ke, X) : z;
    }
    return b;
  }
  var j = /([A-Z])/g, $ = /^ms-/, V = Array.isArray, ne = f("<script>"), H = f("<\/script>"), oe = f('<script src="'), fe = f('<script type="module" src="'), I = f('" async=""><\/script>'), Q = /(<\/|<)(s)(cript)/gi;
  function q(b, R, z, X) {
    return "" + R + (z === "s" ? "\\u0073" : "\\u0053") + X;
  }
  function se(b, R, z, X, ke) {
    b = b === void 0 ? "" : b, R = R === void 0 ? ne : f('<script nonce="' + U(R) + '">');
    var xe = [];
    if (z !== void 0 && xe.push(R, d(("" + z).replace(Q, q)), H), X !== void 0)
      for (z = 0; z < X.length; z++)
        xe.push(oe, d(U(X[z])), I);
    if (ke !== void 0)
      for (X = 0; X < ke.length; X++)
        xe.push(fe, d(U(ke[X])), I);
    return { bootstrapChunks: xe, startInlineScript: R, placeholderPrefix: f(b + "P:"), segmentPrefix: f(b + "S:"), boundaryPrefix: b + "B:", idPrefix: b, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function ae(b, R) {
    return { insertionMode: b, selectedValue: R };
  }
  function J(b) {
    return ae(b === "http://www.w3.org/2000/svg" ? 2 : b === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function G(b, R, z) {
    switch (R) {
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
  var he = f("<!-- -->");
  function ee(b, R, z, X) {
    return R === "" ? X : (X && b.push(he), b.push(d(U(R))), !0);
  }
  var ge = /* @__PURE__ */ new Map(), be = f(' style="'), _e = f(":"), Ve = f(";");
  function Qe(b, R, z) {
    if (typeof z != "object")
      throw Error(t(62));
    R = !0;
    for (var X in z)
      if (v.call(z, X)) {
        var ke = z[X];
        if (ke != null && typeof ke != "boolean" && ke !== "") {
          if (X.indexOf("--") === 0) {
            var xe = d(U(X));
            ke = d(U(("" + ke).trim()));
          } else {
            xe = X;
            var Oe = ge.get(xe);
            Oe !== void 0 || (Oe = f(U(xe.replace(j, "-$1").toLowerCase().replace($, "-ms-"))), ge.set(xe, Oe)), xe = Oe, ke = typeof ke == "number" ? ke === 0 || v.call(L, X) ? d("" + ke) : d(ke + "px") : d(U(("" + ke).trim()));
          }
          R ? (R = !1, b.push(be, xe, _e, ke)) : b.push(Ve, xe, _e, ke);
        }
      }
    R || b.push(Ee);
  }
  var Ae = f(" "), ve = f('="'), Ee = f('"'), le = f('=""');
  function Be(b, R, z, X) {
    switch (z) {
      case "style":
        Qe(b, R, X);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < z.length) || z[0] !== "o" && z[0] !== "O" || z[1] !== "n" && z[1] !== "N") {
      if (R = m.hasOwnProperty(z) ? m[z] : null, R !== null) {
        switch (typeof X) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!R.acceptsBooleans)
              return;
        }
        switch (z = d(R.attributeName), R.type) {
          case 3:
            X && b.push(Ae, z, le);
            break;
          case 4:
            X === !0 ? b.push(Ae, z, le) : X !== !1 && b.push(Ae, z, ve, d(U(X)), Ee);
            break;
          case 5:
            isNaN(X) || b.push(Ae, z, ve, d(U(X)), Ee);
            break;
          case 6:
            !isNaN(X) && 1 <= X && b.push(Ae, z, ve, d(U(X)), Ee);
            break;
          default:
            R.sanitizeURL && (X = "" + X), b.push(Ae, z, ve, d(U(X)), Ee);
        }
      } else if (O(z)) {
        switch (typeof X) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (R = z.toLowerCase().slice(0, 5), R !== "data-" && R !== "aria-")
              return;
        }
        b.push(Ae, d(z), ve, d(U(X)), Ee);
      }
    }
  }
  var Ne = f(">"), qe = f("/>");
  function Ke(b, R, z) {
    if (R != null) {
      if (z != null)
        throw Error(t(60));
      if (typeof R != "object" || !("__html" in R))
        throw Error(t(61));
      R = R.__html, R != null && b.push(d("" + R));
    }
  }
  function nt(b) {
    var R = "";
    return e.Children.forEach(b, function(z) {
      z != null && (R += z);
    }), R;
  }
  var at = f(' selected=""');
  function lt(b, R, z, X) {
    b.push(De(z));
    var ke = z = null, xe;
    for (xe in R)
      if (v.call(R, xe)) {
        var Oe = R[xe];
        if (Oe != null)
          switch (xe) {
            case "children":
              z = Oe;
              break;
            case "dangerouslySetInnerHTML":
              ke = Oe;
              break;
            default:
              Be(b, X, xe, Oe);
          }
      }
    return b.push(Ne), Ke(b, ke, z), typeof z == "string" ? (b.push(d(U(z))), null) : z;
  }
  var ot = f(`
`), Ze = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Me = /* @__PURE__ */ new Map();
  function De(b) {
    var R = Me.get(b);
    if (R === void 0) {
      if (!Ze.test(b))
        throw Error(t(65, b));
      R = f("<" + b), Me.set(b, R);
    }
    return R;
  }
  var ht = f("<!DOCTYPE html>");
  function Ue(b, R, z, X, ke) {
    switch (R) {
      case "select":
        b.push(De("select"));
        var xe = null, Oe = null;
        for (At in z)
          if (v.call(z, At)) {
            var je = z[At];
            if (je != null)
              switch (At) {
                case "children":
                  xe = je;
                  break;
                case "dangerouslySetInnerHTML":
                  Oe = je;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  Be(b, X, At, je);
              }
          }
        return b.push(Ne), Ke(b, Oe, xe), xe;
      case "option":
        Oe = ke.selectedValue, b.push(De("option"));
        var xt = je = null, Dt = null, At = null;
        for (xe in z)
          if (v.call(z, xe)) {
            var sn = z[xe];
            if (sn != null)
              switch (xe) {
                case "children":
                  je = sn;
                  break;
                case "selected":
                  Dt = sn;
                  break;
                case "dangerouslySetInnerHTML":
                  At = sn;
                  break;
                case "value":
                  xt = sn;
                default:
                  Be(b, X, xe, sn);
              }
          }
        if (Oe != null)
          if (z = xt !== null ? "" + xt : nt(je), V(Oe)) {
            for (X = 0; X < Oe.length; X++)
              if ("" + Oe[X] === z) {
                b.push(at);
                break;
              }
          } else
            "" + Oe === z && b.push(at);
        else
          Dt && b.push(at);
        return b.push(Ne), Ke(b, At, je), je;
      case "textarea":
        b.push(De("textarea")), At = Oe = xe = null;
        for (je in z)
          if (v.call(z, je) && (xt = z[je], xt != null))
            switch (je) {
              case "children":
                At = xt;
                break;
              case "value":
                xe = xt;
                break;
              case "defaultValue":
                Oe = xt;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(91));
              default:
                Be(b, X, je, xt);
            }
        if (xe === null && Oe !== null && (xe = Oe), b.push(Ne), At != null) {
          if (xe != null)
            throw Error(t(92));
          if (V(At) && 1 < At.length)
            throw Error(t(93));
          xe = "" + At;
        }
        return typeof xe == "string" && xe[0] === `
` && b.push(ot), xe !== null && b.push(d(U("" + xe))), null;
      case "input":
        b.push(De("input")), xt = At = je = xe = null;
        for (Oe in z)
          if (v.call(z, Oe) && (Dt = z[Oe], Dt != null))
            switch (Oe) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, "input"));
              case "defaultChecked":
                xt = Dt;
                break;
              case "defaultValue":
                je = Dt;
                break;
              case "checked":
                At = Dt;
                break;
              case "value":
                xe = Dt;
                break;
              default:
                Be(b, X, Oe, Dt);
            }
        return At !== null ? Be(
          b,
          X,
          "checked",
          At
        ) : xt !== null && Be(b, X, "checked", xt), xe !== null ? Be(b, X, "value", xe) : je !== null && Be(b, X, "value", je), b.push(qe), null;
      case "menuitem":
        b.push(De("menuitem"));
        for (var Hn in z)
          if (v.call(z, Hn) && (xe = z[Hn], xe != null))
            switch (Hn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(400));
              default:
                Be(b, X, Hn, xe);
            }
        return b.push(Ne), null;
      case "title":
        b.push(De("title")), xe = null;
        for (sn in z)
          if (v.call(z, sn) && (Oe = z[sn], Oe != null))
            switch (sn) {
              case "children":
                xe = Oe;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(434));
              default:
                Be(b, X, sn, Oe);
            }
        return b.push(Ne), xe;
      case "listing":
      case "pre":
        b.push(De(R)), Oe = xe = null;
        for (xt in z)
          if (v.call(z, xt) && (je = z[xt], je != null))
            switch (xt) {
              case "children":
                xe = je;
                break;
              case "dangerouslySetInnerHTML":
                Oe = je;
                break;
              default:
                Be(b, X, xt, je);
            }
        if (b.push(Ne), Oe != null) {
          if (xe != null)
            throw Error(t(60));
          if (typeof Oe != "object" || !("__html" in Oe))
            throw Error(t(61));
          z = Oe.__html, z != null && (typeof z == "string" && 0 < z.length && z[0] === `
` ? b.push(ot, d(z)) : b.push(d("" + z)));
        }
        return typeof xe == "string" && xe[0] === `
` && b.push(ot), xe;
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
        b.push(De(R));
        for (var qn in z)
          if (v.call(z, qn) && (xe = z[qn], xe != null))
            switch (qn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, R));
              default:
                Be(b, X, qn, xe);
            }
        return b.push(qe), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return lt(b, z, R, X);
      case "html":
        return ke.insertionMode === 0 && b.push(ht), lt(b, z, R, X);
      default:
        if (R.indexOf("-") === -1 && typeof z.is != "string")
          return lt(b, z, R, X);
        b.push(De(R)), Oe = xe = null;
        for (Dt in z)
          if (v.call(z, Dt) && (je = z[Dt], je != null))
            switch (Dt) {
              case "children":
                xe = je;
                break;
              case "dangerouslySetInnerHTML":
                Oe = je;
                break;
              case "style":
                Qe(b, X, je);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                O(Dt) && typeof je != "function" && typeof je != "symbol" && b.push(Ae, d(Dt), ve, d(U(je)), Ee);
            }
        return b.push(Ne), Ke(b, Oe, xe), xe;
    }
  }
  var dt = f("</"), pt = f(">"), gt = f('<template id="'), _t = f('"></template>'), It = f("<!--$-->"), cn = f('<!--$?--><template id="'), qt = f('"></template>'), rn = f("<!--$!-->"), Et = f("<!--/$-->"), kt = f("<template"), vn = f('"'), kn = f(' data-dgst="');
  f(' data-msg="'), f(' data-stck="');
  var Fe = f("></template>");
  function Gt(b, R, z) {
    if (r(b, cn), z === null)
      throw Error(t(395));
    return r(b, z), o(b, qt);
  }
  var Ft = f('<div hidden id="'), dn = f('">'), Je = f("</div>"), fn = f('<svg aria-hidden="true" style="display:none" id="'), hn = f('">'), Tn = f("</svg>"), Sn = f('<math aria-hidden="true" style="display:none" id="'), un = f('">'), Mt = f("</math>"), Ht = f('<table hidden id="'), K = f('">'), He = f("</table>"), et = f('<table hidden><tbody id="'), Ie = f('">'), bt = f("</tbody></table>"), ft = f('<table hidden><tr id="'), we = f('">'), Ye = f("</tr></table>"), $e = f('<table hidden><colgroup id="'), Xe = f('">'), Lt = f("</colgroup></table>");
  function Wt(b, R, z, X) {
    switch (z.insertionMode) {
      case 0:
      case 1:
        return r(b, Ft), r(b, R.segmentPrefix), r(b, d(X.toString(16))), o(b, dn);
      case 2:
        return r(b, fn), r(b, R.segmentPrefix), r(b, d(X.toString(16))), o(b, hn);
      case 3:
        return r(b, Sn), r(b, R.segmentPrefix), r(b, d(X.toString(16))), o(b, un);
      case 4:
        return r(b, Ht), r(b, R.segmentPrefix), r(b, d(X.toString(16))), o(b, K);
      case 5:
        return r(b, et), r(b, R.segmentPrefix), r(b, d(X.toString(16))), o(b, Ie);
      case 6:
        return r(b, ft), r(b, R.segmentPrefix), r(b, d(X.toString(16))), o(b, we);
      case 7:
        return r(
          b,
          $e
        ), r(b, R.segmentPrefix), r(b, d(X.toString(16))), o(b, Xe);
      default:
        throw Error(t(397));
    }
  }
  function Ut(b, R) {
    switch (R.insertionMode) {
      case 0:
      case 1:
        return o(b, Je);
      case 2:
        return o(b, Tn);
      case 3:
        return o(b, Mt);
      case 4:
        return o(b, He);
      case 5:
        return o(b, bt);
      case 6:
        return o(b, Ye);
      case 7:
        return o(b, Lt);
      default:
        throw Error(t(397));
    }
  }
  var Kt = f('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Ot = f('$RS("'), $t = f('","'), Zt = f('")<\/script>'), an = f('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), pn = f('$RC("'), Qt = f('","'), mn = f('")<\/script>'), yt = f('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), ct = f('$RX("'), on = f('"'), xn = f(")<\/script>"), en = f(","), Bn = /[<\u2028\u2029]/g;
  function Cn(b) {
    return JSON.stringify(b).replace(Bn, function(R) {
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
  var jt = Object.assign, Yt = Symbol.for("react.element"), jn = Symbol.for("react.portal"), nr = Symbol.for("react.fragment"), gr = Symbol.for("react.strict_mode"), yr = Symbol.for("react.profiler"), cr = Symbol.for("react.provider"), rr = Symbol.for("react.context"), Ar = Symbol.for("react.forward_ref"), dr = Symbol.for("react.suspense"), fr = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), B = Symbol.for("react.scope"), Y = Symbol.for("react.debug_trace_mode"), Se = Symbol.for("react.legacy_hidden"), ye = Symbol.for("react.default_value"), Pe = Symbol.iterator;
  function We(b) {
    if (b == null)
      return null;
    if (typeof b == "function")
      return b.displayName || b.name || null;
    if (typeof b == "string")
      return b;
    switch (b) {
      case nr:
        return "Fragment";
      case jn:
        return "Portal";
      case yr:
        return "Profiler";
      case gr:
        return "StrictMode";
      case dr:
        return "Suspense";
      case fr:
        return "SuspenseList";
    }
    if (typeof b == "object")
      switch (b.$$typeof) {
        case rr:
          return (b.displayName || "Context") + ".Consumer";
        case cr:
          return (b._context.displayName || "Context") + ".Provider";
        case Ar:
          var R = b.render;
          return b = b.displayName, b || (b = R.displayName || R.name || "", b = b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef"), b;
        case x:
          return R = b.displayName || null, R !== null ? R : We(b.type) || "Memo";
        case P:
          R = b._payload, b = b._init;
          try {
            return We(b(R));
          } catch {
          }
      }
    return null;
  }
  var it = {};
  function mt(b, R) {
    if (b = b.contextTypes, !b)
      return it;
    var z = {}, X;
    for (X in b)
      z[X] = R[X];
    return z;
  }
  var ut = null;
  function Nt(b, R) {
    if (b !== R) {
      b.context._currentValue = b.parentValue, b = b.parent;
      var z = R.parent;
      if (b === null) {
        if (z !== null)
          throw Error(t(401));
      } else {
        if (z === null)
          throw Error(t(401));
        Nt(b, z);
      }
      R.context._currentValue = R.value;
    }
  }
  function Dn(b) {
    b.context._currentValue = b.parentValue, b = b.parent, b !== null && Dn(b);
  }
  function An(b) {
    var R = b.parent;
    R !== null && An(R), b.context._currentValue = b.value;
  }
  function Pn(b, R) {
    if (b.context._currentValue = b.parentValue, b = b.parent, b === null)
      throw Error(t(402));
    b.depth === R.depth ? Nt(b, R) : Pn(b, R);
  }
  function Vn(b, R) {
    var z = R.parent;
    if (z === null)
      throw Error(t(402));
    b.depth === z.depth ? Nt(b, z) : Vn(b, z), R.context._currentValue = R.value;
  }
  function re(b) {
    var R = ut;
    R !== b && (R === null ? An(b) : b === null ? Dn(R) : R.depth === b.depth ? Nt(R, b) : R.depth > b.depth ? Pn(R, b) : Vn(R, b), ut = b);
  }
  var te = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(b, R) {
    b = b._reactInternals, b.queue !== null && b.queue.push(R);
  }, enqueueReplaceState: function(b, R) {
    b = b._reactInternals, b.replace = !0, b.queue = [R];
  }, enqueueForceUpdate: function() {
  } };
  function ce(b, R, z, X) {
    var ke = b.state !== void 0 ? b.state : null;
    b.updater = te, b.props = z, b.state = ke;
    var xe = { queue: [], replace: !1 };
    b._reactInternals = xe;
    var Oe = R.contextType;
    if (b.context = typeof Oe == "object" && Oe !== null ? Oe._currentValue : X, Oe = R.getDerivedStateFromProps, typeof Oe == "function" && (Oe = Oe(z, ke), ke = Oe == null ? ke : jt({}, ke, Oe), b.state = ke), typeof R.getDerivedStateFromProps != "function" && typeof b.getSnapshotBeforeUpdate != "function" && (typeof b.UNSAFE_componentWillMount == "function" || typeof b.componentWillMount == "function"))
      if (R = b.state, typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount(), R !== b.state && te.enqueueReplaceState(b, b.state, null), xe.queue !== null && 0 < xe.queue.length)
        if (R = xe.queue, Oe = xe.replace, xe.queue = null, xe.replace = !1, Oe && R.length === 1)
          b.state = R[0];
        else {
          for (xe = Oe ? R[0] : b.state, ke = !0, Oe = Oe ? 1 : 0; Oe < R.length; Oe++) {
            var je = R[Oe];
            je = typeof je == "function" ? je.call(b, xe, z, X) : je, je != null && (ke ? (ke = !1, xe = jt({}, xe, je)) : jt(xe, je));
          }
          b.state = xe;
        }
      else
        xe.queue = null;
  }
  var Re = { id: 1, overflow: "" };
  function Rt(b, R, z) {
    var X = b.id;
    b = b.overflow;
    var ke = 32 - ln(X) - 1;
    X &= ~(1 << ke), z += 1;
    var xe = 32 - ln(R) + ke;
    if (30 < xe) {
      var Oe = ke - ke % 5;
      return xe = (X & (1 << Oe) - 1).toString(32), X >>= Oe, ke -= Oe, { id: 1 << 32 - ln(R) + ke | z << ke | X, overflow: xe + b };
    }
    return { id: 1 << xe | z << ke | X, overflow: b };
  }
  var ln = Math.clz32 ? Math.clz32 : Ua, Un = Math.log, Pr = Math.LN2;
  function Ua(b) {
    return b >>>= 0, b === 0 ? 32 : 31 - (Un(b) / Pr | 0) | 0;
  }
  function il(b, R) {
    return b === R && (b !== 0 || 1 / b === 1 / R) || b !== b && R !== R;
  }
  var Ka = typeof Object.is == "function" ? Object.is : il, hr = null, Qr = null, pa = null, tn = null, vr = !1, $n = !1, Rr = 0, xr = null, ma = 0;
  function br() {
    if (hr === null)
      throw Error(t(321));
    return hr;
  }
  function Xn() {
    if (0 < ma)
      throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Ya() {
    return tn === null ? pa === null ? (vr = !1, pa = tn = Xn()) : (vr = !0, tn = pa) : tn.next === null ? (vr = !1, tn = tn.next = Xn()) : (vr = !0, tn = tn.next), tn;
  }
  function Xa() {
    Qr = hr = null, $n = !1, pa = null, ma = 0, tn = xr = null;
  }
  function Ui(b, R) {
    return typeof R == "function" ? R(b) : R;
  }
  function Ki(b, R, z) {
    if (hr = br(), tn = Ya(), vr) {
      var X = tn.queue;
      if (R = X.dispatch, xr !== null && (z = xr.get(X), z !== void 0)) {
        xr.delete(X), X = tn.memoizedState;
        do
          X = b(X, z.action), z = z.next;
        while (z !== null);
        return tn.memoizedState = X, [X, R];
      }
      return [tn.memoizedState, R];
    }
    return b = b === Ui ? typeof R == "function" ? R() : R : z !== void 0 ? z(R) : R, tn.memoizedState = b, b = tn.queue = { last: null, dispatch: null }, b = b.dispatch = ol.bind(null, hr, b), [tn.memoizedState, b];
  }
  function Yi(b, R) {
    if (hr = br(), tn = Ya(), R = R === void 0 ? null : R, tn !== null) {
      var z = tn.memoizedState;
      if (z !== null && R !== null) {
        var X = z[1];
        e:
          if (X === null)
            X = !1;
          else {
            for (var ke = 0; ke < X.length && ke < R.length; ke++)
              if (!Ka(R[ke], X[ke])) {
                X = !1;
                break e;
              }
            X = !0;
          }
        if (X)
          return z[0];
      }
    }
    return b = b(), tn.memoizedState = [b, R], b;
  }
  function ol(b, R, z) {
    if (25 <= ma)
      throw Error(t(301));
    if (b === hr)
      if ($n = !0, b = { action: z, next: null }, xr === null && (xr = /* @__PURE__ */ new Map()), z = xr.get(R), z === void 0)
        xr.set(R, b);
      else {
        for (R = z; R.next !== null; )
          R = R.next;
        R.next = b;
      }
  }
  function ll() {
    throw Error(t(394));
  }
  function ga() {
  }
  var ya = { readContext: function(b) {
    return b._currentValue;
  }, useContext: function(b) {
    return br(), b._currentValue;
  }, useMemo: Yi, useReducer: Ki, useRef: function(b) {
    hr = br(), tn = Ya();
    var R = tn.memoizedState;
    return R === null ? (b = { current: b }, tn.memoizedState = b) : R;
  }, useState: function(b) {
    return Ki(Ui, b);
  }, useInsertionEffect: ga, useLayoutEffect: function() {
  }, useCallback: function(b, R) {
    return Yi(function() {
      return b;
    }, R);
  }, useImperativeHandle: ga, useEffect: ga, useDebugValue: ga, useDeferredValue: function(b) {
    return br(), b;
  }, useTransition: function() {
    return br(), [!1, ll];
  }, useId: function() {
    var b = Qr.treeContext, R = b.overflow;
    b = b.id, b = (b & ~(1 << 32 - ln(b) - 1)).toString(32) + R;
    var z = va;
    if (z === null)
      throw Error(t(404));
    return R = Rr++, b = ":" + z.idPrefix + "R" + b, 0 < R && (b += "H" + R.toString(32)), b + ":";
  }, useMutableSource: function(b, R) {
    return br(), R(b._source);
  }, useSyncExternalStore: function(b, R, z) {
    if (z === void 0)
      throw Error(t(407));
    return z();
  } }, va = null, Jr = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function sl(b) {
    return console.error(b), null;
  }
  function ea() {
  }
  function qa(b, R, z, X, ke, xe, Oe, je, xt) {
    var Dt = [], At = /* @__PURE__ */ new Set();
    return R = { destination: null, responseState: R, progressiveChunkSize: X === void 0 ? 12800 : X, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: At, pingedTasks: Dt, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: ke === void 0 ? sl : ke, onAllReady: xe === void 0 ? ea : xe, onShellReady: Oe === void 0 ? ea : Oe, onShellError: je === void 0 ? ea : je, onFatalError: xt === void 0 ? ea : xt }, z = $r(R, 0, null, z, !1, !1), z.parentFlushed = !0, b = Ga(R, b, null, z, At, it, null, Re), Dt.push(b), R;
  }
  function Ga(b, R, z, X, ke, xe, Oe, je) {
    b.allPendingTasks++, z === null ? b.pendingRootTasks++ : z.pendingTasks++;
    var xt = { node: R, ping: function() {
      var Dt = b.pingedTasks;
      Dt.push(xt), Dt.length === 1 && Ji(b);
    }, blockedBoundary: z, blockedSegment: X, abortSet: ke, legacyContext: xe, context: Oe, treeContext: je };
    return ke.add(xt), xt;
  }
  function $r(b, R, z, X, ke, xe) {
    return { status: 0, id: -1, index: R, parentFlushed: !1, chunks: [], children: [], formatContext: X, boundary: z, lastPushedText: ke, textEmbedded: xe };
  }
  function Ir(b, R) {
    if (b = b.onError(R), b != null && typeof b != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof b + '" instead');
    return b;
  }
  function xa(b, R) {
    var z = b.onShellError;
    z(R), z = b.onFatalError, z(R), b.destination !== null ? (b.status = 2, g(b.destination, R)) : (b.status = 1, b.fatalError = R);
  }
  function Xi(b, R, z, X, ke) {
    for (hr = {}, Qr = R, Rr = 0, b = z(X, ke); $n; )
      $n = !1, Rr = 0, ma += 1, tn = null, b = z(X, ke);
    return Xa(), b;
  }
  function Za(b, R, z, X) {
    var ke = z.render(), xe = X.childContextTypes;
    if (xe != null) {
      var Oe = R.legacyContext;
      if (typeof z.getChildContext != "function")
        X = Oe;
      else {
        z = z.getChildContext();
        for (var je in z)
          if (!(je in xe))
            throw Error(t(108, We(X) || "Unknown", je));
        X = jt({}, Oe, z);
      }
      R.legacyContext = X, In(b, R, ke), R.legacyContext = Oe;
    } else
      In(b, R, ke);
  }
  function qi(b, R) {
    if (b && b.defaultProps) {
      R = jt({}, R), b = b.defaultProps;
      for (var z in b)
        R[z] === void 0 && (R[z] = b[z]);
      return R;
    }
    return R;
  }
  function ba(b, R, z, X, ke) {
    if (typeof z == "function")
      if (z.prototype && z.prototype.isReactComponent) {
        ke = mt(z, R.legacyContext);
        var xe = z.contextType;
        xe = new z(X, typeof xe == "object" && xe !== null ? xe._currentValue : ke), ce(xe, z, X, ke), Za(b, R, xe, z);
      } else {
        xe = mt(z, R.legacyContext), ke = Xi(b, R, z, X, xe);
        var Oe = Rr !== 0;
        if (typeof ke == "object" && ke !== null && typeof ke.render == "function" && ke.$$typeof === void 0)
          ce(ke, z, X, xe), Za(b, R, ke, z);
        else if (Oe) {
          X = R.treeContext, R.treeContext = Rt(X, 1, 0);
          try {
            In(b, R, ke);
          } finally {
            R.treeContext = X;
          }
        } else
          In(b, R, ke);
      }
    else if (typeof z == "string") {
      switch (ke = R.blockedSegment, xe = Ue(ke.chunks, z, X, b.responseState, ke.formatContext), ke.lastPushedText = !1, Oe = ke.formatContext, ke.formatContext = G(Oe, z, X), Sa(b, R, xe), ke.formatContext = Oe, z) {
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
          ke.chunks.push(dt, d(z), pt);
      }
      ke.lastPushedText = !1;
    } else {
      switch (z) {
        case Se:
        case Y:
        case gr:
        case yr:
        case nr:
          In(b, R, X.children);
          return;
        case fr:
          In(b, R, X.children);
          return;
        case B:
          throw Error(t(343));
        case dr:
          e: {
            z = R.blockedBoundary, ke = R.blockedSegment, xe = X.fallback, X = X.children, Oe = /* @__PURE__ */ new Set();
            var je = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: Oe, errorDigest: null }, xt = $r(b, ke.chunks.length, je, ke.formatContext, !1, !1);
            ke.children.push(xt), ke.lastPushedText = !1;
            var Dt = $r(b, 0, null, ke.formatContext, !1, !1);
            Dt.parentFlushed = !0, R.blockedBoundary = je, R.blockedSegment = Dt;
            try {
              if (Sa(
                b,
                R,
                X
              ), Dt.lastPushedText && Dt.textEmbedded && Dt.chunks.push(he), Dt.status = 1, Ea(je, Dt), je.pendingTasks === 0)
                break e;
            } catch (At) {
              Dt.status = 4, je.forceClientRender = !0, je.errorDigest = Ir(b, At);
            } finally {
              R.blockedBoundary = z, R.blockedSegment = ke;
            }
            R = Ga(b, xe, z, xt, Oe, R.legacyContext, R.context, R.treeContext), b.pingedTasks.push(R);
          }
          return;
      }
      if (typeof z == "object" && z !== null)
        switch (z.$$typeof) {
          case Ar:
            if (X = Xi(b, R, z.render, X, ke), Rr !== 0) {
              z = R.treeContext, R.treeContext = Rt(z, 1, 0);
              try {
                In(b, R, X);
              } finally {
                R.treeContext = z;
              }
            } else
              In(b, R, X);
            return;
          case x:
            z = z.type, X = qi(z, X), ba(b, R, z, X, ke);
            return;
          case cr:
            if (ke = X.children, z = z._context, X = X.value, xe = z._currentValue, z._currentValue = X, Oe = ut, ut = X = { parent: Oe, depth: Oe === null ? 0 : Oe.depth + 1, context: z, parentValue: xe, value: X }, R.context = X, In(b, R, ke), b = ut, b === null)
              throw Error(t(403));
            X = b.parentValue, b.context._currentValue = X === ye ? b.context._defaultValue : X, b = ut = b.parent, R.context = b;
            return;
          case rr:
            X = X.children, X = X(z._currentValue), In(b, R, X);
            return;
          case P:
            ke = z._init, z = ke(z._payload), X = qi(z, X), ba(b, R, z, X, void 0);
            return;
        }
      throw Error(t(
        130,
        z == null ? z : typeof z,
        ""
      ));
    }
  }
  function In(b, R, z) {
    if (R.node = z, typeof z == "object" && z !== null) {
      switch (z.$$typeof) {
        case Yt:
          ba(b, R, z.type, z.props, z.ref);
          return;
        case jn:
          throw Error(t(257));
        case P:
          var X = z._init;
          z = X(z._payload), In(b, R, z);
          return;
      }
      if (V(z)) {
        Gi(b, R, z);
        return;
      }
      if (z === null || typeof z != "object" ? X = null : (X = Pe && z[Pe] || z["@@iterator"], X = typeof X == "function" ? X : null), X && (X = X.call(z))) {
        if (z = X.next(), !z.done) {
          var ke = [];
          do
            ke.push(z.value), z = X.next();
          while (!z.done);
          Gi(b, R, ke);
        }
        return;
      }
      throw b = Object.prototype.toString.call(z), Error(t(31, b === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : b));
    }
    typeof z == "string" ? (X = R.blockedSegment, X.lastPushedText = ee(R.blockedSegment.chunks, z, b.responseState, X.lastPushedText)) : typeof z == "number" && (X = R.blockedSegment, X.lastPushedText = ee(R.blockedSegment.chunks, "" + z, b.responseState, X.lastPushedText));
  }
  function Gi(b, R, z) {
    for (var X = z.length, ke = 0; ke < X; ke++) {
      var xe = R.treeContext;
      R.treeContext = Rt(xe, X, ke);
      try {
        Sa(b, R, z[ke]);
      } finally {
        R.treeContext = xe;
      }
    }
  }
  function Sa(b, R, z) {
    var X = R.blockedSegment.formatContext, ke = R.legacyContext, xe = R.context;
    try {
      return In(b, R, z);
    } catch (xt) {
      if (Xa(), typeof xt == "object" && xt !== null && typeof xt.then == "function") {
        z = xt;
        var Oe = R.blockedSegment, je = $r(b, Oe.chunks.length, null, Oe.formatContext, Oe.lastPushedText, !0);
        Oe.children.push(je), Oe.lastPushedText = !1, b = Ga(b, R.node, R.blockedBoundary, je, R.abortSet, R.legacyContext, R.context, R.treeContext).ping, z.then(b, b), R.blockedSegment.formatContext = X, R.legacyContext = ke, R.context = xe, re(xe);
      } else
        throw R.blockedSegment.formatContext = X, R.legacyContext = ke, R.context = xe, re(xe), xt;
    }
  }
  function ul(b) {
    var R = b.blockedBoundary;
    b = b.blockedSegment, b.status = 3, Qi(this, R, b);
  }
  function Zi(b, R, z) {
    var X = b.blockedBoundary;
    b.blockedSegment.status = 3, X === null ? (R.allPendingTasks--, R.status !== 2 && (R.status = 2, R.destination !== null && R.destination.close())) : (X.pendingTasks--, X.forceClientRender || (X.forceClientRender = !0, b = z === void 0 ? Error(t(432)) : z, X.errorDigest = R.onError(b), X.parentFlushed && R.clientRenderedBoundaries.push(X)), X.fallbackAbortableTasks.forEach(function(ke) {
      return Zi(ke, R, z);
    }), X.fallbackAbortableTasks.clear(), R.allPendingTasks--, R.allPendingTasks === 0 && (X = R.onAllReady, X()));
  }
  function Ea(b, R) {
    if (R.chunks.length === 0 && R.children.length === 1 && R.children[0].boundary === null) {
      var z = R.children[0];
      z.id = R.id, z.parentFlushed = !0, z.status === 1 && Ea(b, z);
    } else
      b.completedSegments.push(R);
  }
  function Qi(b, R, z) {
    if (R === null) {
      if (z.parentFlushed) {
        if (b.completedRootSegment !== null)
          throw Error(t(389));
        b.completedRootSegment = z;
      }
      b.pendingRootTasks--, b.pendingRootTasks === 0 && (b.onShellError = ea, R = b.onShellReady, R());
    } else
      R.pendingTasks--, R.forceClientRender || (R.pendingTasks === 0 ? (z.parentFlushed && z.status === 1 && Ea(R, z), R.parentFlushed && b.completedBoundaries.push(R), R.fallbackAbortableTasks.forEach(ul, b), R.fallbackAbortableTasks.clear()) : z.parentFlushed && z.status === 1 && (Ea(R, z), R.completedSegments.length === 1 && R.parentFlushed && b.partialBoundaries.push(R)));
    b.allPendingTasks--, b.allPendingTasks === 0 && (b = b.onAllReady, b());
  }
  function Ji(b) {
    if (b.status !== 2) {
      var R = ut, z = Jr.current;
      Jr.current = ya;
      var X = va;
      va = b.responseState;
      try {
        var ke = b.pingedTasks, xe;
        for (xe = 0; xe < ke.length; xe++) {
          var Oe = ke[xe], je = b, xt = Oe.blockedSegment;
          if (xt.status === 0) {
            re(Oe.context);
            try {
              In(je, Oe, Oe.node), xt.lastPushedText && xt.textEmbedded && xt.chunks.push(he), Oe.abortSet.delete(Oe), xt.status = 1, Qi(je, Oe.blockedBoundary, xt);
            } catch (Gn) {
              if (Xa(), typeof Gn == "object" && Gn !== null && typeof Gn.then == "function") {
                var Dt = Oe.ping;
                Gn.then(Dt, Dt);
              } else {
                Oe.abortSet.delete(Oe), xt.status = 4;
                var At = Oe.blockedBoundary, sn = Gn, Hn = Ir(je, sn);
                if (At === null ? xa(je, sn) : (At.pendingTasks--, At.forceClientRender || (At.forceClientRender = !0, At.errorDigest = Hn, At.parentFlushed && je.clientRenderedBoundaries.push(At))), je.allPendingTasks--, je.allPendingTasks === 0) {
                  var qn = je.onAllReady;
                  qn();
                }
              }
            } finally {
            }
          }
        }
        ke.splice(0, xe), b.destination !== null && Qa(b, b.destination);
      } catch (Gn) {
        Ir(b, Gn), xa(b, Gn);
      } finally {
        va = X, Jr.current = z, z === ya && re(R);
      }
    }
  }
  function ka(b, R, z) {
    switch (z.parentFlushed = !0, z.status) {
      case 0:
        var X = z.id = b.nextSegmentId++;
        return z.lastPushedText = !1, z.textEmbedded = !1, b = b.responseState, r(R, gt), r(R, b.placeholderPrefix), b = d(X.toString(16)), r(R, b), o(R, _t);
      case 1:
        z.status = 2;
        var ke = !0;
        X = z.chunks;
        var xe = 0;
        z = z.children;
        for (var Oe = 0; Oe < z.length; Oe++) {
          for (ke = z[Oe]; xe < ke.index; xe++)
            r(R, X[xe]);
          ke = wa(b, R, ke);
        }
        for (; xe < X.length - 1; xe++)
          r(R, X[xe]);
        return xe < X.length && (ke = o(R, X[xe])), ke;
      default:
        throw Error(t(390));
    }
  }
  function wa(b, R, z) {
    var X = z.boundary;
    if (X === null)
      return ka(b, R, z);
    if (X.parentFlushed = !0, X.forceClientRender)
      X = X.errorDigest, o(R, rn), r(R, kt), X && (r(R, kn), r(R, d(U(X))), r(R, vn)), o(R, Fe), ka(b, R, z);
    else if (0 < X.pendingTasks) {
      X.rootSegmentID = b.nextSegmentId++, 0 < X.completedSegments.length && b.partialBoundaries.push(X);
      var ke = b.responseState, xe = ke.nextSuspenseID++;
      ke = f(ke.boundaryPrefix + xe.toString(16)), X = X.id = ke, Gt(R, b.responseState, X), ka(b, R, z);
    } else if (X.byteSize > b.progressiveChunkSize)
      X.rootSegmentID = b.nextSegmentId++, b.completedBoundaries.push(X), Gt(R, b.responseState, X.id), ka(b, R, z);
    else {
      if (o(R, It), z = X.completedSegments, z.length !== 1)
        throw Error(t(391));
      wa(b, R, z[0]);
    }
    return o(R, Et);
  }
  function eo(b, R, z) {
    return Wt(R, b.responseState, z.formatContext, z.id), wa(b, R, z), Ut(R, z.formatContext);
  }
  function to(b, R, z) {
    for (var X = z.completedSegments, ke = 0; ke < X.length; ke++)
      no(b, R, z, X[ke]);
    if (X.length = 0, b = b.responseState, X = z.id, z = z.rootSegmentID, r(R, b.startInlineScript), b.sentCompleteBoundaryFunction ? r(R, pn) : (b.sentCompleteBoundaryFunction = !0, r(R, an)), X === null)
      throw Error(t(395));
    return z = d(z.toString(16)), r(R, X), r(R, Qt), r(R, b.segmentPrefix), r(R, z), o(R, mn);
  }
  function no(b, R, z, X) {
    if (X.status === 2)
      return !0;
    var ke = X.id;
    if (ke === -1) {
      if ((X.id = z.rootSegmentID) === -1)
        throw Error(t(392));
      return eo(b, R, X);
    }
    return eo(b, R, X), b = b.responseState, r(R, b.startInlineScript), b.sentCompleteSegmentFunction ? r(R, Ot) : (b.sentCompleteSegmentFunction = !0, r(R, Kt)), r(R, b.segmentPrefix), ke = d(ke.toString(16)), r(R, ke), r(R, $t), r(R, b.placeholderPrefix), r(R, ke), o(R, Zt);
  }
  function Qa(b, R) {
    n = new Uint8Array(512), a = 0;
    try {
      var z = b.completedRootSegment;
      if (z !== null && b.pendingRootTasks === 0) {
        wa(b, R, z), b.completedRootSegment = null;
        var X = b.responseState.bootstrapChunks;
        for (z = 0; z < X.length - 1; z++)
          r(R, X[z]);
        z < X.length && o(R, X[z]);
      }
      var ke = b.clientRenderedBoundaries, xe;
      for (xe = 0; xe < ke.length; xe++) {
        var Oe = ke[xe];
        X = R;
        var je = b.responseState, xt = Oe.id, Dt = Oe.errorDigest, At = Oe.errorMessage, sn = Oe.errorComponentStack;
        if (r(X, je.startInlineScript), je.sentClientRenderFunction ? r(X, ct) : (je.sentClientRenderFunction = !0, r(
          X,
          yt
        )), xt === null)
          throw Error(t(395));
        r(X, xt), r(X, on), (Dt || At || sn) && (r(X, en), r(X, d(Cn(Dt || "")))), (At || sn) && (r(X, en), r(X, d(Cn(At || "")))), sn && (r(X, en), r(X, d(Cn(sn)))), o(X, xn);
      }
      ke.splice(0, xe);
      var Hn = b.completedBoundaries;
      for (xe = 0; xe < Hn.length; xe++)
        to(b, R, Hn[xe]);
      Hn.splice(0, xe), s(R), n = new Uint8Array(512), a = 0;
      var qn = b.partialBoundaries;
      for (xe = 0; xe < qn.length; xe++) {
        var Gn = qn[xe];
        e: {
          ke = b, Oe = R;
          var Ta = Gn.completedSegments;
          for (je = 0; je < Ta.length; je++)
            if (!no(
              ke,
              Oe,
              Gn,
              Ta[je]
            )) {
              je++, Ta.splice(0, je);
              var ao = !1;
              break e;
            }
          Ta.splice(0, je), ao = !0;
        }
        if (!ao) {
          b.destination = null, xe++, qn.splice(0, xe);
          return;
        }
      }
      qn.splice(0, xe);
      var Ja = b.completedBoundaries;
      for (xe = 0; xe < Ja.length; xe++)
        to(b, R, Ja[xe]);
      Ja.splice(0, xe);
    } finally {
      s(R), b.allPendingTasks === 0 && b.pingedTasks.length === 0 && b.clientRenderedBoundaries.length === 0 && b.completedBoundaries.length === 0 && R.close();
    }
  }
  function ro(b, R) {
    try {
      var z = b.abortableTasks;
      z.forEach(function(X) {
        return Zi(X, b, R);
      }), z.clear(), b.destination !== null && Qa(b, b.destination);
    } catch (X) {
      Ir(b, X), xa(b, X);
    }
  }
  return Du.renderToReadableStream = function(b, R) {
    return new Promise(function(z, X) {
      var ke, xe, Oe = new Promise(function(At, sn) {
        xe = At, ke = sn;
      }), je = qa(b, se(R ? R.identifierPrefix : void 0, R ? R.nonce : void 0, R ? R.bootstrapScriptContent : void 0, R ? R.bootstrapScripts : void 0, R ? R.bootstrapModules : void 0), J(R ? R.namespaceURI : void 0), R ? R.progressiveChunkSize : void 0, R ? R.onError : void 0, xe, function() {
        var At = new ReadableStream({ type: "bytes", pull: function(sn) {
          if (je.status === 1)
            je.status = 2, g(sn, je.fatalError);
          else if (je.status !== 2 && je.destination === null) {
            je.destination = sn;
            try {
              Qa(je, sn);
            } catch (Hn) {
              Ir(je, Hn), xa(je, Hn);
            }
          }
        }, cancel: function() {
          ro(je);
        } }, { highWaterMark: 0 });
        At.allReady = Oe, z(At);
      }, function(At) {
        Oe.catch(function() {
        }), X(At);
      }, ke);
      if (R && R.signal) {
        var xt = R.signal, Dt = function() {
          ro(je, xt.reason), xt.removeEventListener("abort", Dt);
        };
        xt.addEventListener("abort", Dt);
      }
      Ji(je);
    });
  }, Du.version = "18.2.0", Du;
}
var Di = {};
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
function TE() {
  return em || (em = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ue, t = "18.2.0", n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function a(l) {
      {
        for (var h = arguments.length, S = new Array(h > 1 ? h - 1 : 0), C = 1; C < h; C++)
          S[C - 1] = arguments[C];
        o("warn", l, S);
      }
    }
    function r(l) {
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
        var Z = S.map(function(de) {
          return String(de);
        });
        Z.unshift("Warning: " + h), Function.prototype.apply.call(console[l], console, Z);
      }
    }
    function s(l) {
      l();
    }
    function u(l) {
    }
    function d(l, h) {
      f(l, h);
    }
    function f(l, h) {
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
    function E(l) {
      return l;
    }
    function w(l, h) {
      l.destroy(h);
    }
    function O(l) {
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
    function A(l, h) {
      if (T(l))
        return r("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", h, O(l)), m(l);
    }
    function _(l, h) {
      if (T(l))
        return r("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", h, O(l)), m(l);
    }
    function L(l) {
      if (T(l))
        return r("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", O(l)), m(l);
    }
    var N = Object.prototype.hasOwnProperty, M = 0, U = 1, j = 2, $ = 3, V = 4, ne = 5, H = 6, oe = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", fe = oe + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", I = new RegExp("^[" + oe + "][" + fe + "]*$"), Q = {}, q = {};
    function se(l) {
      return N.call(q, l) ? !0 : N.call(Q, l) ? !1 : I.test(l) ? (q[l] = !0, !0) : (Q[l] = !0, r("Invalid attribute name: `%s`", l), !1);
    }
    function ae(l, h, S, C) {
      if (S !== null && S.type === M)
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
    function J(l) {
      return he.hasOwnProperty(l) ? he[l] : null;
    }
    function G(l, h, S, C, F, Z, de) {
      this.acceptsBooleans = h === j || h === $ || h === V, this.attributeName = C, this.attributeNamespace = F, this.mustUseProperty = S, this.propertyName = l, this.type = h, this.sanitizeURL = Z, this.removeEmptyString = de;
    }
    var he = {}, ee = [
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
    ee.forEach(function(l) {
      he[l] = new G(
        l,
        M,
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
      he[h] = new G(
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
      he[l] = new G(
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
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(l) {
      he[l] = new G(
        l,
        j,
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
      he[l] = new G(
        l,
        $,
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
      he[l] = new G(
        l,
        $,
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
      he[l] = new G(
        l,
        V,
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
      he[l] = new G(
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
    }), ["rowSpan", "start"].forEach(function(l) {
      he[l] = new G(
        l,
        ne,
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
    var ge = /[\-\:]([a-z])/g, be = function(l) {
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
      var h = l.replace(ge, be);
      he[h] = new G(
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
      var h = l.replace(ge, be);
      he[h] = new G(
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
      var h = l.replace(ge, be);
      he[h] = new G(
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
      he[l] = new G(
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
    var _e = "xlinkHref";
    he[_e] = new G(
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
      he[l] = new G(
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
    var Ve = {
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
    function Qe(l, h) {
      return l + h.charAt(0).toUpperCase() + h.substring(1);
    }
    var Ae = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Ve).forEach(function(l) {
      Ae.forEach(function(h) {
        Ve[Qe(h, l)] = Ve[l];
      });
    });
    var ve = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Ee(l, h) {
      ve[h.type] || h.onChange || h.onInput || h.readOnly || h.disabled || h.value == null || r("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), h.onChange || h.readOnly || h.disabled || h.checked == null || r("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function le(l, h) {
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
    }, Ne = {}, qe = new RegExp("^(aria)-[" + fe + "]*$"), Ke = new RegExp("^(aria)[A-Z][" + fe + "]*$");
    function nt(l, h) {
      {
        if (N.call(Ne, h) && Ne[h])
          return !0;
        if (Ke.test(h)) {
          var S = "aria-" + h.slice(4).toLowerCase(), C = Be.hasOwnProperty(S) ? S : null;
          if (C == null)
            return r("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", h), Ne[h] = !0, !0;
          if (h !== C)
            return r("Invalid ARIA attribute `%s`. Did you mean `%s`?", h, C), Ne[h] = !0, !0;
        }
        if (qe.test(h)) {
          var F = h.toLowerCase(), Z = Be.hasOwnProperty(F) ? F : null;
          if (Z == null)
            return Ne[h] = !0, !1;
          if (h !== Z)
            return r("Unknown ARIA attribute `%s`. Did you mean `%s`?", h, Z), Ne[h] = !0, !0;
        }
      }
      return !0;
    }
    function at(l, h) {
      {
        var S = [];
        for (var C in h) {
          var F = nt(l, C);
          F || S.push(C);
        }
        var Z = S.map(function(de) {
          return "`" + de + "`";
        }).join(", ");
        S.length === 1 ? r("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", Z, l) : S.length > 1 && r("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", Z, l);
      }
    }
    function lt(l, h) {
      le(l, h) || at(l, h);
    }
    var ot = !1;
    function Ze(l, h) {
      {
        if (l !== "input" && l !== "textarea" && l !== "select")
          return;
        h != null && h.value === null && !ot && (ot = !0, l === "select" && h.multiple ? r("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", l) : r("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", l));
      }
    }
    var Me = {
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
    }, De = function() {
    };
    {
      var ht = {}, Ue = /^on./, dt = /^on[^A-Z]/, pt = new RegExp("^(aria)-[" + fe + "]*$"), gt = new RegExp("^(aria)[A-Z][" + fe + "]*$");
      De = function(l, h, S, C) {
        if (N.call(ht, h) && ht[h])
          return !0;
        var F = h.toLowerCase();
        if (F === "onfocusin" || F === "onfocusout")
          return r("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ht[h] = !0, !0;
        if (C != null) {
          var Z = C.registrationNameDependencies, de = C.possibleRegistrationNames;
          if (Z.hasOwnProperty(h))
            return !0;
          var Te = de.hasOwnProperty(F) ? de[F] : null;
          if (Te != null)
            return r("Invalid event handler property `%s`. Did you mean `%s`?", h, Te), ht[h] = !0, !0;
          if (Ue.test(h))
            return r("Unknown event handler property `%s`. It will be ignored.", h), ht[h] = !0, !0;
        } else if (Ue.test(h))
          return dt.test(h) && r("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", h), ht[h] = !0, !0;
        if (pt.test(h) || gt.test(h))
          return !0;
        if (F === "innerhtml")
          return r("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ht[h] = !0, !0;
        if (F === "aria")
          return r("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ht[h] = !0, !0;
        if (F === "is" && S !== null && S !== void 0 && typeof S != "string")
          return r("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof S), ht[h] = !0, !0;
        if (typeof S == "number" && isNaN(S))
          return r("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", h), ht[h] = !0, !0;
        var ze = J(h), tt = ze !== null && ze.type === M;
        if (Me.hasOwnProperty(F)) {
          var st = Me[F];
          if (st !== h)
            return r("Invalid DOM property `%s`. Did you mean `%s`?", h, st), ht[h] = !0, !0;
        } else if (!tt && h !== F)
          return r("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", h, F), ht[h] = !0, !0;
        return typeof S == "boolean" && ae(h, S, ze, !1) ? (S ? r('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', S, h, h, S, h) : r('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', S, h, h, S, h, h, h), ht[h] = !0, !0) : tt ? !0 : ae(h, S, ze, !1) ? (ht[h] = !0, !1) : ((S === "false" || S === "true") && ze !== null && ze.type === $ && (r("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", S, h, S === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', h, S), ht[h] = !0), !0);
      };
    }
    var _t = function(l, h, S) {
      {
        var C = [];
        for (var F in h) {
          var Z = De(l, F, h[F], S);
          Z || C.push(F);
        }
        var de = C.map(function(Te) {
          return "`" + Te + "`";
        }).join(", ");
        C.length === 1 ? r("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", de, l) : C.length > 1 && r("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", de, l);
      }
    };
    function It(l, h, S) {
      le(l, h) || _t(l, h, S);
    }
    var cn = function() {
    };
    {
      var qt = /^(?:webkit|moz|o)[A-Z]/, rn = /^-ms-/, Et = /-(.)/g, kt = /;\s*$/, vn = {}, kn = {}, Fe = !1, Gt = !1, Ft = function(l) {
        return l.replace(Et, function(h, S) {
          return S.toUpperCase();
        });
      }, dn = function(l) {
        vn.hasOwnProperty(l) && vn[l] || (vn[l] = !0, r(
          "Unsupported style property %s. Did you mean %s?",
          l,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Ft(l.replace(rn, "ms-"))
        ));
      }, Je = function(l) {
        vn.hasOwnProperty(l) && vn[l] || (vn[l] = !0, r("Unsupported vendor-prefixed style property %s. Did you mean %s?", l, l.charAt(0).toUpperCase() + l.slice(1)));
      }, fn = function(l, h) {
        kn.hasOwnProperty(h) && kn[h] || (kn[h] = !0, r(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, l, h.replace(kt, "")));
      }, hn = function(l, h) {
        Fe || (Fe = !0, r("`NaN` is an invalid value for the `%s` css style property.", l));
      }, Tn = function(l, h) {
        Gt || (Gt = !0, r("`Infinity` is an invalid value for the `%s` css style property.", l));
      };
      cn = function(l, h) {
        l.indexOf("-") > -1 ? dn(l) : qt.test(l) ? Je(l) : kt.test(h) && fn(l, h), typeof h == "number" && (isNaN(h) ? hn(l, h) : isFinite(h) || Tn(l, h));
      };
    }
    var Sn = cn, un = /["'&<>]/;
    function Mt(l) {
      L(l);
      var h = "" + l, S = un.exec(h);
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
    function Ht(l) {
      return typeof l == "boolean" || typeof l == "number" ? "" + l : Mt(l);
    }
    var K = /([A-Z])/g, He = /^ms-/;
    function et(l) {
      return l.replace(K, "-$1").toLowerCase().replace(He, "-ms-");
    }
    var Ie = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, bt = !1;
    function ft(l) {
      !bt && Ie.test(l) && (bt = !0, r("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(l)));
    }
    var we = Array.isArray;
    function Ye(l) {
      return we(l);
    }
    var $e = "<script>", Xe = "<\/script>", Lt = '<script src="', Wt = '<script type="module" src="', Ut = '" async=""><\/script>';
    function Kt(l) {
      return L(l), ("" + l).replace(Ot, $t);
    }
    var Ot = /(<\/|<)(s)(cript)/gi, $t = function(l, h, S, C) {
      return "" + h + (S === "s" ? "\\u0073" : "\\u0053") + C;
    };
    function Zt(l, h, S, C, F) {
      var Z = l === void 0 ? "" : l, de = h === void 0 ? $e : '<script nonce="' + Ht(h) + '">', Te = [];
      if (S !== void 0 && Te.push(de, Kt(S), Xe), C !== void 0)
        for (var ze = 0; ze < C.length; ze++)
          Te.push(Lt, Ht(C[ze]), Ut);
      if (F !== void 0)
        for (var tt = 0; tt < F.length; tt++)
          Te.push(Wt, Ht(F[tt]), Ut);
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
    var an = 0, pn = 1, Qt = 2, mn = 3, yt = 4, ct = 5, on = 6, xn = 7;
    function en(l, h) {
      return {
        insertionMode: l,
        selectedValue: h
      };
    }
    function Bn(l, h, S) {
      switch (h) {
        case "select":
          return en(pn, S.value != null ? S.value : S.defaultValue);
        case "svg":
          return en(Qt, null);
        case "math":
          return en(mn, null);
        case "foreignObject":
          return en(pn, null);
        case "table":
          return en(yt, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return en(ct, null);
        case "colgroup":
          return en(xn, null);
        case "tr":
          return en(on, null);
      }
      return l.insertionMode >= yt || l.insertionMode === an ? en(pn, null) : l;
    }
    var Cn = null;
    function jt(l) {
      var h = l.nextSuspenseID++;
      return l.boundaryPrefix + h.toString(16);
    }
    function Yt(l, h, S) {
      var C = l.idPrefix, F = ":" + C + "R" + h;
      return S > 0 && (F += "H" + S.toString(32)), F + ":";
    }
    function jn(l) {
      return Ht(l);
    }
    var nr = "<!-- -->";
    function gr(l, h, S, C) {
      return h === "" ? C : (C && l.push(nr), l.push(jn(h)), !0);
    }
    function yr(l, h, S, C) {
      S && C && l.push(nr);
    }
    var cr = /* @__PURE__ */ new Map();
    function rr(l) {
      var h = cr.get(l);
      if (h !== void 0)
        return h;
      var S = Ht(et(l));
      return cr.set(l, S), S;
    }
    var Ar = ' style="', dr = ":", fr = ";";
    function x(l, h, S) {
      if (typeof S != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var C = !0;
      for (var F in S)
        if (N.call(S, F)) {
          var Z = S[F];
          if (!(Z == null || typeof Z == "boolean" || Z === "")) {
            var de = void 0, Te = void 0, ze = F.indexOf("--") === 0;
            ze ? (de = Ht(F), _(Z, F), Te = Ht(("" + Z).trim())) : (Sn(F, Z), de = rr(F), typeof Z == "number" ? Z !== 0 && !N.call(Ve, F) ? Te = Z + "px" : Te = "" + Z : (_(Z, F), Te = Ht(("" + Z).trim()))), C ? (C = !1, l.push(Ar, de, dr, Te)) : l.push(fr, de, dr, Te);
          }
        }
      C || l.push(Y);
    }
    var P = " ", B = '="', Y = '"', Se = '=""';
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
        var F = J(S);
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
            case $:
              C && l.push(P, de, Se);
              return;
            case V:
              C === !0 ? l.push(P, de, Se) : C === !1 || l.push(P, de, B, Ht(C), Y);
              return;
            case ne:
              isNaN(C) || l.push(P, de, B, Ht(C), Y);
              break;
            case H:
              !isNaN(C) && C >= 1 && l.push(P, de, B, Ht(C), Y);
              break;
            default:
              F.sanitizeURL && (A(C, Z), C = "" + C, ft(C)), l.push(P, de, B, Ht(C), Y);
          }
        } else if (se(S)) {
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
          l.push(P, S, B, Ht(C), Y);
        }
      }
    }
    var Pe = ">", We = "/>";
    function it(l, h, S) {
      if (h != null) {
        if (S != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof h != "object" || !("__html" in h))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var C = h.__html;
        C != null && (L(C), l.push("" + C));
      }
    }
    var mt = !1, ut = !1, Nt = !1, Dn = !1, An = !1, Pn = !1, Vn = !1;
    function re(l, h) {
      {
        var S = l[h];
        if (S != null) {
          var C = Ye(S);
          l.multiple && !C ? r("The `%s` prop supplied to <select> must be an array if `multiple` is true.", h) : !l.multiple && C && r("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", h);
        }
      }
    }
    function te(l, h, S) {
      Ee("select", h), re(h, "value"), re(h, "defaultValue"), h.value !== void 0 && h.defaultValue !== void 0 && !Nt && (r("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Nt = !0), l.push($n("select"));
      var C = null, F = null;
      for (var Z in h)
        if (N.call(h, Z)) {
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
              ye(l, S, Z, de);
              break;
          }
        }
      return l.push(Pe), it(l, F, C), C;
    }
    function ce(l) {
      var h = "";
      return e.Children.forEach(l, function(S) {
        S != null && (h += S, !An && typeof S != "string" && typeof S != "number" && (An = !0, r("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), h;
    }
    var Re = ' selected=""';
    function Rt(l, h, S, C) {
      var F = C.selectedValue;
      l.push($n("option"));
      var Z = null, de = null, Te = null, ze = null;
      for (var tt in h)
        if (N.call(h, tt)) {
          var st = h[tt];
          if (st == null)
            continue;
          switch (tt) {
            case "children":
              Z = st;
              break;
            case "selected":
              Te = st, Vn || (r("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Vn = !0);
              break;
            case "dangerouslySetInnerHTML":
              ze = st;
              break;
            case "value":
              de = st;
            default:
              ye(l, S, tt, st);
              break;
          }
        }
      if (F != null) {
        var St;
        if (de !== null ? (A(de, "value"), St = "" + de) : (ze !== null && (Pn || (Pn = !0, r("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), St = ce(Z)), Ye(F))
          for (var gn = 0; gn < F.length; gn++) {
            A(F[gn], "value");
            var Fn = "" + F[gn];
            if (Fn === St) {
              l.push(Re);
              break;
            }
          }
        else
          A(F, "select.value"), "" + F === St && l.push(Re);
      } else
        Te && l.push(Re);
      return l.push(Pe), it(l, ze, Z), Z;
    }
    function ln(l, h, S) {
      Ee("input", h), h.checked !== void 0 && h.defaultChecked !== void 0 && !ut && (r("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", h.type), ut = !0), h.value !== void 0 && h.defaultValue !== void 0 && !mt && (r("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", h.type), mt = !0), l.push($n("input"));
      var C = null, F = null, Z = null, de = null;
      for (var Te in h)
        if (N.call(h, Te)) {
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
              ye(l, S, Te, ze);
              break;
          }
        }
      return Z !== null ? ye(l, S, "checked", Z) : de !== null && ye(l, S, "checked", de), C !== null ? ye(l, S, "value", C) : F !== null && ye(l, S, "value", F), l.push(We), null;
    }
    function Un(l, h, S) {
      Ee("textarea", h), h.value !== void 0 && h.defaultValue !== void 0 && !Dn && (r("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Dn = !0), l.push($n("textarea"));
      var C = null, F = null, Z = null;
      for (var de in h)
        if (N.call(h, de)) {
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
              ye(l, S, de, Te);
              break;
          }
        }
      if (C === null && F !== null && (C = F), l.push(Pe), Z != null) {
        if (r("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), C != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (Ye(Z)) {
          if (Z.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          L(Z[0]), C = "" + Z[0];
        }
        L(Z), C = "" + Z;
      }
      return typeof C == "string" && C[0] === `
` && l.push(Qr), C !== null && (A(C, "value"), l.push(jn("" + C))), null;
    }
    function Pr(l, h, S, C) {
      l.push($n(S));
      for (var F in h)
        if (N.call(h, F)) {
          var Z = h[F];
          if (Z == null)
            continue;
          switch (F) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(S + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              ye(l, C, F, Z);
              break;
          }
        }
      return l.push(We), null;
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
              ye(l, S, C, F);
              break;
          }
        }
      return l.push(Pe), null;
    }
    function il(l, h, S) {
      l.push($n("title"));
      var C = null;
      for (var F in h)
        if (N.call(h, F)) {
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
              ye(l, S, F, Z);
              break;
          }
        }
      l.push(Pe);
      {
        var de = Array.isArray(C) && C.length < 2 ? C[0] || null : C;
        Array.isArray(C) && C.length > 1 ? r("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : de != null && de.$$typeof != null ? r("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : de != null && typeof de != "string" && typeof de != "number" && r("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return C;
    }
    function Ka(l, h, S, C) {
      l.push($n(S));
      var F = null, Z = null;
      for (var de in h)
        if (N.call(h, de)) {
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
              ye(l, C, de, Te);
              break;
          }
        }
      return l.push(Pe), it(l, Z, F), typeof F == "string" ? (l.push(jn(F)), null) : F;
    }
    function hr(l, h, S, C) {
      l.push($n(S));
      var F = null, Z = null;
      for (var de in h)
        if (N.call(h, de)) {
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
              x(l, C, Te);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              se(de) && typeof Te != "function" && typeof Te != "symbol" && l.push(P, de, B, Ht(Te), Y);
              break;
          }
        }
      return l.push(Pe), it(l, Z, F), F;
    }
    var Qr = `
`;
    function pa(l, h, S, C) {
      l.push($n(S));
      var F = null, Z = null;
      for (var de in h)
        if (N.call(h, de)) {
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
              ye(l, C, de, Te);
              break;
          }
        }
      if (l.push(Pe), Z != null) {
        if (F != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof Z != "object" || !("__html" in Z))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var ze = Z.__html;
        ze != null && (typeof ze == "string" && ze.length > 0 && ze[0] === `
` ? l.push(Qr, ze) : (L(ze), l.push("" + ze)));
      }
      return typeof F == "string" && F[0] === `
` && l.push(Qr), F;
    }
    var tn = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, vr = /* @__PURE__ */ new Map();
    function $n(l) {
      var h = vr.get(l);
      if (h === void 0) {
        if (!tn.test(l))
          throw new Error("Invalid tag: " + l);
        h = "<" + l, vr.set(l, h);
      }
      return h;
    }
    var Rr = "<!DOCTYPE html>";
    function xr(l, h, S, C, F) {
      switch (lt(h, S), Ze(h, S), It(h, S, null), !S.suppressContentEditableWarning && S.contentEditable && S.children != null && r("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), F.insertionMode !== Qt && F.insertionMode !== mn && h.indexOf("-") === -1 && typeof S.is != "string" && h.toLowerCase() !== h && r("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", h), h) {
        case "select":
          return te(l, S, C);
        case "option":
          return Rt(l, S, C, F);
        case "textarea":
          return Un(l, S, C);
        case "input":
          return ln(l, S, C);
        case "menuitem":
          return Ua(l, S, C);
        case "title":
          return il(l, S, C);
        case "listing":
        case "pre":
          return pa(l, S, h, C);
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
          return Pr(l, S, h, C);
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
          return F.insertionMode === an && l.push(Rr), Ka(l, S, h, C);
        default:
          return h.indexOf("-") === -1 && typeof S.is != "string" ? Ka(l, S, h, C) : hr(l, S, h, C);
      }
    }
    var ma = "</", br = ">";
    function Xn(l, h, S) {
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
          l.push(ma, h, br);
      }
    }
    function Ya(l, h) {
      for (var S = h.bootstrapChunks, C = 0; C < S.length - 1; C++)
        d(l, S[C]);
      return C < S.length ? f(l, S[C]) : !0;
    }
    var Xa = '<template id="', Ui = '"></template>';
    function Ki(l, h, S) {
      d(l, Xa), d(l, h.placeholderPrefix);
      var C = S.toString(16);
      return d(l, C), f(l, Ui);
    }
    var Yi = "<!--$-->", ol = '<!--$?--><template id="', ll = '"></template>', ga = "<!--$!-->", ya = "<!--/$-->", va = "<template", Jr = '"', sl = ' data-dgst="', ea = ' data-msg="', qa = ' data-stck="', Ga = "></template>";
    function $r(l, h) {
      return f(l, Yi);
    }
    function Ir(l, h, S) {
      if (d(l, ol), S === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return d(l, S), f(l, ll);
    }
    function xa(l, h, S, C, F) {
      var Z;
      return Z = f(l, ga), d(l, va), S && (d(l, sl), d(l, Ht(S)), d(l, Jr)), C && (d(l, ea), d(l, Ht(C)), d(l, Jr)), F && (d(l, qa), d(l, Ht(F)), d(l, Jr)), Z = f(l, Ga), Z;
    }
    function Xi(l, h) {
      return f(l, ya);
    }
    function Za(l, h) {
      return f(l, ya);
    }
    function qi(l, h) {
      return f(l, ya);
    }
    var ba = '<div hidden id="', In = '">', Gi = "</div>", Sa = '<svg aria-hidden="true" style="display:none" id="', ul = '">', Zi = "</svg>", Ea = '<math aria-hidden="true" style="display:none" id="', Qi = '">', Ji = "</math>", ka = '<table hidden id="', wa = '">', eo = "</table>", to = '<table hidden><tbody id="', no = '">', Qa = "</tbody></table>", ro = '<table hidden><tr id="', b = '">', R = "</tr></table>", z = '<table hidden><colgroup id="', X = '">', ke = "</colgroup></table>";
    function xe(l, h, S, C) {
      switch (S.insertionMode) {
        case an:
        case pn:
          return d(l, ba), d(l, h.segmentPrefix), d(l, C.toString(16)), f(l, In);
        case Qt:
          return d(l, Sa), d(l, h.segmentPrefix), d(l, C.toString(16)), f(l, ul);
        case mn:
          return d(l, Ea), d(l, h.segmentPrefix), d(l, C.toString(16)), f(l, Qi);
        case yt:
          return d(l, ka), d(l, h.segmentPrefix), d(l, C.toString(16)), f(l, wa);
        case ct:
          return d(l, to), d(l, h.segmentPrefix), d(l, C.toString(16)), f(l, no);
        case on:
          return d(l, ro), d(l, h.segmentPrefix), d(l, C.toString(16)), f(l, b);
        case xn:
          return d(l, z), d(l, h.segmentPrefix), d(l, C.toString(16)), f(l, X);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Oe(l, h) {
      switch (h.insertionMode) {
        case an:
        case pn:
          return f(l, Gi);
        case Qt:
          return f(l, Zi);
        case mn:
          return f(l, Ji);
        case yt:
          return f(l, eo);
        case ct:
          return f(l, Qa);
        case on:
          return f(l, R);
        case xn:
          return f(l, ke);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var je = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", xt = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Dt = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', At = je + ';$RS("', sn = '$RS("', Hn = '","', qn = '")<\/script>';
    function Gn(l, h, S) {
      d(l, h.startInlineScript), h.sentCompleteSegmentFunction ? d(l, sn) : (h.sentCompleteSegmentFunction = !0, d(l, At)), d(l, h.segmentPrefix);
      var C = S.toString(16);
      return d(l, C), d(l, Hn), d(l, h.placeholderPrefix), d(l, C), f(l, qn);
    }
    var Ta = xt + ';$RC("', ao = '$RC("', Ja = '","', Oc = '")<\/script>';
    function _c(l, h, S, C) {
      if (d(l, h.startInlineScript), h.sentCompleteBoundaryFunction ? d(l, ao) : (h.sentCompleteBoundaryFunction = !0, d(l, Ta)), S === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var F = C.toString(16);
      return d(l, S), d(l, Ja), d(l, h.segmentPrefix), d(l, F), f(l, Oc);
    }
    var Mc = Dt + ';$RX("', Nc = '$RX("', Fc = '"', zc = ")<\/script>", cl = ",";
    function Bc(l, h, S, C, F, Z) {
      if (d(l, h.startInlineScript), h.sentClientRenderFunction ? d(l, Nc) : (h.sentClientRenderFunction = !0, d(l, Mc)), S === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return d(l, S), d(l, Fc), (C || F || Z) && (d(l, cl), d(l, dl(C || ""))), (F || Z) && (d(l, cl), d(l, dl(F || ""))), Z && (d(l, cl), d(l, dl(Z))), f(l, zc);
    }
    var $c = /[<\u2028\u2029]/g;
    function dl(l) {
      var h = JSON.stringify(l);
      return h.replace($c, function(S) {
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
    function Ic(l, h) {
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
    function fl() {
      return {
        insertionMode: pn,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function Ds(l, h, S, C) {
      return S.generateStaticMarkup ? (l.push(Ht(h)), !1) : gr(l, h, S, C);
    }
    function Ls(l, h, S, C) {
      if (!h.generateStaticMarkup)
        return yr(l, h, S, C);
    }
    function hl(l, h) {
      return h.generateStaticMarkup ? !0 : $r(l);
    }
    function ar(l, h, S, C, F) {
      return h.generateStaticMarkup ? !0 : xa(l, h, S, C, F);
    }
    function Hc(l, h) {
      return h.generateStaticMarkup ? !0 : Xi(l);
    }
    function Os(l, h) {
      return h.generateStaticMarkup ? !0 : qi(l);
    }
    var Zn = Object.assign, _s = Symbol.for("react.element"), pl = Symbol.for("react.portal"), io = Symbol.for("react.fragment"), oo = Symbol.for("react.strict_mode"), lo = Symbol.for("react.profiler"), ei = Symbol.for("react.provider"), ti = Symbol.for("react.context"), ni = Symbol.for("react.forward_ref"), Ca = Symbol.for("react.suspense"), ml = Symbol.for("react.suspense_list"), gl = Symbol.for("react.memo"), so = Symbol.for("react.lazy"), Wc = Symbol.for("react.scope"), Ms = Symbol.for("react.debug_trace_mode"), jc = Symbol.for("react.legacy_hidden"), Vc = Symbol.for("react.default_value"), Ns = Symbol.iterator, Fs = "@@iterator";
    function En(l) {
      if (l === null || typeof l != "object")
        return null;
      var h = Ns && l[Ns] || l[Fs];
      return typeof h == "function" ? h : null;
    }
    function ri(l, h, S) {
      var C = l.displayName;
      if (C)
        return C;
      var F = h.displayName || h.name || "";
      return F !== "" ? S + "(" + F + ")" : S;
    }
    function yl(l) {
      return l.displayName || "Context";
    }
    function bn(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && r("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
        case io:
          return "Fragment";
        case pl:
          return "Portal";
        case lo:
          return "Profiler";
        case oo:
          return "StrictMode";
        case Ca:
          return "Suspense";
        case ml:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case ti:
            var h = l;
            return yl(h) + ".Consumer";
          case ei:
            var S = l;
            return yl(S._context) + ".Provider";
          case ni:
            return ri(l, l.render, "ForwardRef");
          case gl:
            var C = l.displayName || null;
            return C !== null ? C : bn(l.type) || "Memo";
          case so: {
            var F = l, Z = F._payload, de = F._init;
            try {
              return bn(de(Z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Aa = 0, vl, xl, bl, Sl, El, zs, Bs;
    function uo() {
    }
    uo.__reactDisabledLog = !0;
    function kl() {
      {
        if (Aa === 0) {
          vl = console.log, xl = console.info, bl = console.warn, Sl = console.error, El = console.group, zs = console.groupCollapsed, Bs = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: uo,
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
        Aa++;
      }
    }
    function ai() {
      {
        if (Aa--, Aa === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Zn({}, l, {
              value: vl
            }),
            info: Zn({}, l, {
              value: xl
            }),
            warn: Zn({}, l, {
              value: bl
            }),
            error: Zn({}, l, {
              value: Sl
            }),
            group: Zn({}, l, {
              value: El
            }),
            groupCollapsed: Zn({}, l, {
              value: zs
            }),
            groupEnd: Zn({}, l, {
              value: Bs
            })
          });
        }
        Aa < 0 && r("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ii = n.ReactCurrentDispatcher, Pa;
    function oi(l, h, S) {
      {
        if (Pa === void 0)
          try {
            throw Error();
          } catch (F) {
            var C = F.stack.trim().match(/\n( *(at )?)/);
            Pa = C && C[1] || "";
          }
        return `
` + Pa + l;
      }
    }
    var li = !1, co;
    {
      var $s = typeof WeakMap == "function" ? WeakMap : Map;
      co = new $s();
    }
    function wl(l, h) {
      if (!l || li)
        return "";
      {
        var S = co.get(l);
        if (S !== void 0)
          return S;
      }
      var C;
      li = !0;
      var F = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Z;
      Z = ii.current, ii.current = null, kl();
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
            } catch (sr) {
              C = sr;
            }
            Reflect.construct(l, [], de);
          } else {
            try {
              de.call();
            } catch (sr) {
              C = sr;
            }
            l.call(de.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (sr) {
            C = sr;
          }
          l();
        }
      } catch (sr) {
        if (sr && C && typeof sr.stack == "string") {
          for (var Te = sr.stack.split(`
`), ze = C.stack.split(`
`), tt = Te.length - 1, st = ze.length - 1; tt >= 1 && st >= 0 && Te[tt] !== ze[st]; )
            st--;
          for (; tt >= 1 && st >= 0; tt--, st--)
            if (Te[tt] !== ze[st]) {
              if (tt !== 1 || st !== 1)
                do
                  if (tt--, st--, st < 0 || Te[tt] !== ze[st]) {
                    var St = `
` + Te[tt].replace(" at new ", " at ");
                    return l.displayName && St.includes("<anonymous>") && (St = St.replace("<anonymous>", l.displayName)), typeof l == "function" && co.set(l, St), St;
                  }
                while (tt >= 1 && st >= 0);
              break;
            }
        }
      } finally {
        li = !1, ii.current = Z, ai(), Error.prepareStackTrace = F;
      }
      var gn = l ? l.displayName || l.name : "", Fn = gn ? oi(gn) : "";
      return typeof l == "function" && co.set(l, Fn), Fn;
    }
    function Tl(l, h, S) {
      return wl(l, !0);
    }
    function Cl(l, h, S) {
      return wl(l, !1);
    }
    function Is(l) {
      var h = l.prototype;
      return !!(h && h.isReactComponent);
    }
    function Ra(l, h, S) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return wl(l, Is(l));
      if (typeof l == "string")
        return oi(l);
      switch (l) {
        case Ca:
          return oi("Suspense");
        case ml:
          return oi("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case ni:
            return Cl(l.render);
          case gl:
            return Ra(l.type, h, S);
          case so: {
            var C = l, F = C._payload, Z = C._init;
            try {
              return Ra(Z(F), h, S);
            } catch {
            }
          }
        }
      return "";
    }
    var Al = {}, fo = n.ReactDebugCurrentFrame;
    function ta(l) {
      if (l) {
        var h = l._owner, S = Ra(l.type, l._source, h ? h.type : null);
        fo.setExtraStackFrame(S);
      } else
        fo.setExtraStackFrame(null);
    }
    function Pl(l, h, S, C, F) {
      {
        var Z = Function.call.bind(N);
        for (var de in l)
          if (Z(l, de)) {
            var Te = void 0;
            try {
              if (typeof l[de] != "function") {
                var ze = Error((C || "React class") + ": " + S + " type `" + de + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[de] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ze.name = "Invariant Violation", ze;
              }
              Te = l[de](h, de, C, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (tt) {
              Te = tt;
            }
            Te && !(Te instanceof Error) && (ta(F), r("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", C || "React class", S, de, typeof Te), ta(null)), Te instanceof Error && !(Te.message in Al) && (Al[Te.message] = !0, ta(F), r("Failed %s type: %s", S, Te.message), ta(null));
          }
      }
    }
    var Rl;
    Rl = {};
    var Hr = {};
    Object.freeze(Hr);
    function Hs(l, h) {
      {
        var S = l.contextTypes;
        if (!S)
          return Hr;
        var C = {};
        for (var F in S)
          C[F] = h[F];
        {
          var Z = bn(l) || "Unknown";
          Pl(S, C, "context", Z);
        }
        return C;
      }
    }
    function na(l, h, S, C) {
      {
        if (typeof l.getChildContext != "function") {
          {
            var F = bn(h) || "Unknown";
            Rl[F] || (Rl[F] = !0, r("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", F, F));
          }
          return S;
        }
        var Z = l.getChildContext();
        for (var de in Z)
          if (!(de in C))
            throw new Error((bn(h) || "Unknown") + '.getChildContext(): key "' + de + '" is not defined in childContextTypes.');
        {
          var Te = bn(h) || "Unknown";
          Pl(C, Z, "child context", Te);
        }
        return Zn({}, S, Z);
      }
    }
    var ra;
    ra = {};
    var Dl = null, Sr = null;
    function ho(l) {
      l.context._currentValue2 = l.parentValue;
    }
    function po(l) {
      l.context._currentValue2 = l.value;
    }
    function si(l, h) {
      if (l !== h) {
        ho(l);
        var S = l.parent, C = h.parent;
        if (S === null) {
          if (C !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (C === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          si(S, C);
        }
        po(h);
      }
    }
    function Ll(l) {
      ho(l);
      var h = l.parent;
      h !== null && Ll(h);
    }
    function ui(l) {
      var h = l.parent;
      h !== null && ui(h), po(l);
    }
    function Ws(l, h) {
      ho(l);
      var S = l.parent;
      if (S === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      S.depth === h.depth ? si(S, h) : Ws(S, h);
    }
    function js(l, h) {
      var S = h.parent;
      if (S === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      l.depth === S.depth ? si(l, S) : js(l, S), po(h);
    }
    function mo(l) {
      var h = Sr, S = l;
      h !== S && (h === null ? ui(S) : S === null ? Ll(h) : h.depth === S.depth ? si(h, S) : h.depth > S.depth ? Ws(h, S) : js(h, S), Sr = S);
    }
    function ci(l, h) {
      var S;
      S = l._currentValue2, l._currentValue2 = h, l._currentRenderer2 !== void 0 && l._currentRenderer2 !== null && l._currentRenderer2 !== ra && r("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), l._currentRenderer2 = ra;
      var C = Sr, F = {
        parent: C,
        depth: C === null ? 0 : C.depth + 1,
        context: l,
        parentValue: S,
        value: h
      };
      return Sr = F, F;
    }
    function Ol(l) {
      var h = Sr;
      if (h === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      h.context !== l && r("The parent context is not the expected context. This is probably a bug in React.");
      {
        var S = h.parentValue;
        S === Vc ? h.context._currentValue2 = h.context._defaultValue : h.context._currentValue2 = S, l._currentRenderer2 !== void 0 && l._currentRenderer2 !== null && l._currentRenderer2 !== ra && r("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), l._currentRenderer2 = ra;
      }
      return Sr = h.parent;
    }
    function Uc() {
      return Sr;
    }
    function Da(l) {
      var h = l._currentValue2;
      return h;
    }
    function go(l) {
      return l._reactInternals;
    }
    function _l(l, h) {
      l._reactInternals = h;
    }
    var yo = {}, vo = {}, di, xo, La, fi, bo, Oa, So, Eo, ko;
    {
      di = /* @__PURE__ */ new Set(), xo = /* @__PURE__ */ new Set(), La = /* @__PURE__ */ new Set(), So = /* @__PURE__ */ new Set(), fi = /* @__PURE__ */ new Set(), Eo = /* @__PURE__ */ new Set(), ko = /* @__PURE__ */ new Set();
      var Vs = /* @__PURE__ */ new Set();
      Oa = function(l, h) {
        if (!(l === null || typeof l == "function")) {
          var S = h + "_" + l;
          Vs.has(S) || (Vs.add(S), r("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", h, l));
        }
      }, bo = function(l, h) {
        if (h === void 0) {
          var S = bn(l) || "Component";
          fi.has(S) || (fi.add(S), r("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", S));
        }
      };
    }
    function Us(l, h) {
      {
        var S = l.constructor, C = S && bn(S) || "ReactClass", F = C + "." + h;
        if (yo[F])
          return;
        r(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, h, h, C), yo[F] = !0;
      }
    }
    var Ks = {
      isMounted: function(l) {
        return !1;
      },
      enqueueSetState: function(l, h, S) {
        var C = go(l);
        C.queue === null ? Us(l, "setState") : (C.queue.push(h), S != null && Oa(S, "setState"));
      },
      enqueueReplaceState: function(l, h, S) {
        var C = go(l);
        C.replace = !0, C.queue = [h], S != null && Oa(S, "setState");
      },
      enqueueForceUpdate: function(l, h) {
        var S = go(l);
        S.queue === null ? Us(l, "forceUpdate") : h != null && Oa(h, "setState");
      }
    };
    function Kc(l, h, S, C, F) {
      var Z = S(F, C);
      bo(h, Z);
      var de = Z == null ? C : Zn({}, C, Z);
      return de;
    }
    function Yc(l, h, S) {
      var C = Hr, F = l.contextType;
      if ("contextType" in l) {
        var Z = (
          // Allow null for conditional declaration
          F === null || F !== void 0 && F.$$typeof === ti && F._context === void 0
        );
        if (!Z && !ko.has(l)) {
          ko.add(l);
          var de = "";
          F === void 0 ? de = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof F != "object" ? de = " However, it is set to a " + typeof F + "." : F.$$typeof === ei ? de = " Did you accidentally pass the Context.Provider instead?" : F._context !== void 0 ? de = " Did you accidentally pass the Context.Consumer instead?" : de = " However, it is set to an object with keys {" + Object.keys(F).join(", ") + "}.", r("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", bn(l) || "Component", de);
        }
      }
      typeof F == "object" && F !== null ? C = Da(F) : C = S;
      var Te = new l(h, C);
      {
        if (typeof l.getDerivedStateFromProps == "function" && (Te.state === null || Te.state === void 0)) {
          var ze = bn(l) || "Component";
          di.has(ze) || (di.add(ze), r("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", ze, Te.state === null ? "null" : "undefined", ze));
        }
        if (typeof l.getDerivedStateFromProps == "function" || typeof Te.getSnapshotBeforeUpdate == "function") {
          var tt = null, st = null, St = null;
          if (typeof Te.componentWillMount == "function" && Te.componentWillMount.__suppressDeprecationWarning !== !0 ? tt = "componentWillMount" : typeof Te.UNSAFE_componentWillMount == "function" && (tt = "UNSAFE_componentWillMount"), typeof Te.componentWillReceiveProps == "function" && Te.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? st = "componentWillReceiveProps" : typeof Te.UNSAFE_componentWillReceiveProps == "function" && (st = "UNSAFE_componentWillReceiveProps"), typeof Te.componentWillUpdate == "function" && Te.componentWillUpdate.__suppressDeprecationWarning !== !0 ? St = "componentWillUpdate" : typeof Te.UNSAFE_componentWillUpdate == "function" && (St = "UNSAFE_componentWillUpdate"), tt !== null || st !== null || St !== null) {
            var gn = bn(l) || "Component", Fn = typeof l.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            La.has(gn) || (La.add(gn), r(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, gn, Fn, tt !== null ? `
  ` + tt : "", st !== null ? `
  ` + st : "", St !== null ? `
  ` + St : ""));
          }
        }
      }
      return Te;
    }
    function Ys(l, h, S) {
      {
        var C = bn(h) || "Component", F = l.render;
        F || (h.prototype && typeof h.prototype.render == "function" ? r("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", C) : r("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", C)), l.getInitialState && !l.getInitialState.isReactClassApproved && !l.state && r("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", C), l.getDefaultProps && !l.getDefaultProps.isReactClassApproved && r("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", C), l.propTypes && r("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", C), l.contextType && r("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", C), l.contextTypes && r("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", C), h.contextType && h.contextTypes && !Eo.has(h) && (Eo.add(h), r("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", C)), typeof l.componentShouldUpdate == "function" && r("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", C), h.prototype && h.prototype.isPureReactComponent && typeof l.shouldComponentUpdate < "u" && r("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", bn(h) || "A pure component"), typeof l.componentDidUnmount == "function" && r("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", C), typeof l.componentDidReceiveProps == "function" && r("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", C), typeof l.componentWillRecieveProps == "function" && r("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", C), typeof l.UNSAFE_componentWillRecieveProps == "function" && r("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", C);
        var Z = l.props !== S;
        l.props !== void 0 && Z && r("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", C, C), l.defaultProps && r("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", C, C), typeof l.getSnapshotBeforeUpdate == "function" && typeof l.componentDidUpdate != "function" && !xo.has(h) && (xo.add(h), r("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", bn(h))), typeof l.getDerivedStateFromProps == "function" && r("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", C), typeof l.getDerivedStateFromError == "function" && r("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", C), typeof h.getSnapshotBeforeUpdate == "function" && r("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", C);
        var de = l.state;
        de && (typeof de != "object" || Ye(de)) && r("%s.state: must be set to an object or null", C), typeof l.getChildContext == "function" && typeof h.childContextTypes != "object" && r("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", C);
      }
    }
    function Xc(l, h) {
      var S = h.state;
      if (typeof h.componentWillMount == "function") {
        if (h.componentWillMount.__suppressDeprecationWarning !== !0) {
          var C = bn(l) || "Unknown";
          vo[C] || (a(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            C
          ), vo[C] = !0);
        }
        h.componentWillMount();
      }
      typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), S !== h.state && (r("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", bn(l) || "Component"), Ks.enqueueReplaceState(h, h.state, null));
    }
    function qc(l, h, S, C) {
      if (l.queue !== null && l.queue.length > 0) {
        var F = l.queue, Z = l.replace;
        if (l.queue = null, l.replace = !1, Z && F.length === 1)
          h.state = F[0];
        else {
          for (var de = Z ? F[0] : h.state, Te = !0, ze = Z ? 1 : 0; ze < F.length; ze++) {
            var tt = F[ze], st = typeof tt == "function" ? tt.call(h, de, S, C) : tt;
            st != null && (Te ? (Te = !1, de = Zn({}, de, st)) : Zn(de, st));
          }
          h.state = de;
        }
      } else
        l.queue = null;
    }
    function wo(l, h, S, C) {
      Ys(l, h, S);
      var F = l.state !== void 0 ? l.state : null;
      l.updater = Ks, l.props = S, l.state = F;
      var Z = {
        queue: [],
        replace: !1
      };
      _l(l, Z);
      var de = h.contextType;
      if (typeof de == "object" && de !== null ? l.context = Da(de) : l.context = C, l.state === S) {
        var Te = bn(h) || "Component";
        So.has(Te) || (So.add(Te), r("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", Te));
      }
      var ze = h.getDerivedStateFromProps;
      typeof ze == "function" && (l.state = Kc(l, h, ze, F, S)), typeof h.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (Xc(h, l), qc(Z, l, S, C));
    }
    var To = {
      id: 1,
      overflow: ""
    };
    function Gc(l) {
      var h = l.overflow, S = l.id, C = S & ~Zc(S);
      return C.toString(32) + h;
    }
    function Ml(l, h, S) {
      var C = l.id, F = l.overflow, Z = Co(C) - 1, de = C & ~(1 << Z), Te = S + 1, ze = Co(h) + Z;
      if (ze > 30) {
        var tt = Z - Z % 5, st = (1 << tt) - 1, St = (de & st).toString(32), gn = de >> tt, Fn = Z - tt, sr = Co(h) + Fn, mu = Te << Fn, gu = mu | gn, yu = St + F;
        return {
          id: 1 << sr | gu,
          overflow: yu
        };
      } else {
        var Wo = Te << Z, py = Wo | de, my = F;
        return {
          id: 1 << ze | py,
          overflow: my
        };
      }
    }
    function Co(l) {
      return 32 - Qc(l);
    }
    function Zc(l) {
      return 1 << Co(l) - 1;
    }
    var Qc = Math.clz32 ? Math.clz32 : Dr, Jc = Math.log, ed = Math.LN2;
    function Dr(l) {
      var h = l >>> 0;
      return h === 0 ? 32 : 31 - (Jc(h) / ed | 0) | 0;
    }
    function Nl(l, h) {
      return l === h && (l !== 0 || 1 / l === 1 / h) || l !== l && h !== h;
    }
    var Ao = typeof Object.is == "function" ? Object.is : Nl, zt = null, aa = null, ia = null, Jt = null, ir = !1, oa = !1, Po = 0, Nn = null, Lr = 0, la = 25, Er = !1, sa;
    function Or() {
      if (zt === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Er && r("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), zt;
    }
    function td(l, h) {
      if (h === null)
        return r("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", sa), !1;
      l.length !== h.length && r(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, sa, "[" + l.join(", ") + "]", "[" + h.join(", ") + "]");
      for (var S = 0; S < h.length && S < l.length; S++)
        if (!Ao(l[S], h[S]))
          return !1;
      return !0;
    }
    function Xs() {
      if (Lr > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function Ro() {
      return Jt === null ? ia === null ? (ir = !1, ia = Jt = Xs()) : (ir = !0, Jt = ia) : Jt.next === null ? (ir = !1, Jt = Jt.next = Xs()) : (ir = !0, Jt = Jt.next), Jt;
    }
    function Fl(l, h) {
      zt = h, aa = l, Er = !1, Po = 0;
    }
    function nd(l, h, S, C) {
      for (; oa; )
        oa = !1, Po = 0, Lr += 1, Jt = null, S = l(h, C);
      return hi(), S;
    }
    function qs() {
      var l = Po !== 0;
      return l;
    }
    function hi() {
      Er = !1, zt = null, aa = null, oa = !1, ia = null, Lr = 0, Nn = null, Jt = null;
    }
    function rd(l) {
      return Er && r("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Da(l);
    }
    function Gs(l) {
      return sa = "useContext", Or(), Da(l);
    }
    function Do(l, h) {
      return typeof h == "function" ? h(l) : h;
    }
    function ad(l) {
      return sa = "useState", Zs(
        Do,
        // useReducer has a special case to support lazy useState initializers
        l
      );
    }
    function Zs(l, h, S) {
      if (l !== Do && (sa = "useReducer"), zt = Or(), Jt = Ro(), ir) {
        var C = Jt.queue, F = C.dispatch;
        if (Nn !== null) {
          var Z = Nn.get(C);
          if (Z !== void 0) {
            Nn.delete(C);
            var de = Jt.memoizedState, Te = Z;
            do {
              var ze = Te.action;
              Er = !0, de = l(de, ze), Er = !1, Te = Te.next;
            } while (Te !== null);
            return Jt.memoizedState = de, [de, F];
          }
        }
        return [Jt.memoizedState, F];
      } else {
        Er = !0;
        var tt;
        l === Do ? tt = typeof h == "function" ? h() : h : tt = S !== void 0 ? S(h) : h, Er = !1, Jt.memoizedState = tt;
        var st = Jt.queue = {
          last: null,
          dispatch: null
        }, St = st.dispatch = ld.bind(null, zt, st);
        return [Jt.memoizedState, St];
      }
    }
    function Qs(l, h) {
      zt = Or(), Jt = Ro();
      var S = h === void 0 ? null : h;
      if (Jt !== null) {
        var C = Jt.memoizedState;
        if (C !== null && S !== null) {
          var F = C[1];
          if (td(S, F))
            return C[0];
        }
      }
      Er = !0;
      var Z = l();
      return Er = !1, Jt.memoizedState = [Z, S], Z;
    }
    function id(l) {
      zt = Or(), Jt = Ro();
      var h = Jt.memoizedState;
      if (h === null) {
        var S = {
          current: l
        };
        return Object.seal(S), Jt.memoizedState = S, S;
      } else
        return h;
    }
    function od(l, h) {
      sa = "useLayoutEffect", r("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function ld(l, h, S) {
      if (Lr >= la)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (l === zt) {
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
          for (var Z = F; Z.next !== null; )
            Z = Z.next;
          Z.next = C;
        }
      }
    }
    function sd(l, h) {
      return Qs(function() {
        return l;
      }, h);
    }
    function ud(l, h, S) {
      return Or(), h(l._source);
    }
    function cd(l, h, S) {
      if (S === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return S();
    }
    function dd(l) {
      return Or(), l;
    }
    function Lo() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function Js() {
      return Or(), [!1, Lo];
    }
    function zl() {
      var l = aa, h = Gc(l.treeContext), S = mi;
      if (S === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var C = Po++;
      return Yt(S, h, C);
    }
    function pi() {
    }
    var eu = {
      readContext: rd,
      useContext: Gs,
      useMemo: Qs,
      useReducer: Zs,
      useRef: id,
      useState: ad,
      useInsertionEffect: pi,
      useLayoutEffect: od,
      useCallback: sd,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: pi,
      // Effects are not run in the server environment.
      useEffect: pi,
      // Debugging effect
      useDebugValue: pi,
      useDeferredValue: dd,
      useTransition: Js,
      useId: zl,
      // Subscriptions are not setup in a server environment.
      useMutableSource: ud,
      useSyncExternalStore: cd
    }, mi = null;
    function Oo(l) {
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
              h += Cl(S.type, null, null);
              break;
            case 2:
              h += Tl(S.type, null, null);
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
    var Wr = n.ReactCurrentDispatcher, _o = n.ReactDebugCurrentFrame, Mo = 0, ua = 1, tu = 2, $l = 3, ca = 4, fd = 0, nu = 1, kr = 2, hd = 12800;
    function pd(l) {
      return console.error(l), null;
    }
    function gi() {
    }
    function Il(l, h, S, C, F, Z, de, Te, ze) {
      var tt = [], st = /* @__PURE__ */ new Set(), St = {
        destination: null,
        responseState: h,
        progressiveChunkSize: C === void 0 ? hd : C,
        status: fd,
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
        onError: F === void 0 ? pd : F,
        onAllReady: Z === void 0 ? gi : Z,
        onShellReady: de === void 0 ? gi : de,
        onShellError: Te === void 0 ? gi : Te,
        onFatalError: ze === void 0 ? gi : ze
      }, gn = jr(
        St,
        0,
        null,
        S,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      gn.parentFlushed = !0;
      var Fn = yi(St, l, null, gn, st, Hr, Dl, To);
      return tt.push(Fn), St;
    }
    function No(l, h) {
      var S = l.pingedTasks;
      S.push(h), S.length === 1 && s(function() {
        return hu(l);
      });
    }
    function _r(l, h) {
      return {
        id: Cn,
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
    function yi(l, h, S, C, F, Z, de, Te) {
      l.allPendingTasks++, S === null ? l.pendingRootTasks++ : S.pendingTasks++;
      var ze = {
        node: h,
        ping: function() {
          return No(l, ze);
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
    function jr(l, h, S, C, F, Z) {
      return {
        status: Mo,
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
    var wr = null;
    function Hl() {
      return wr === null || wr.componentStack === null ? "" : Bl(wr.componentStack);
    }
    function or(l, h) {
      l.componentStack = {
        tag: 0,
        parent: l.componentStack,
        type: h
      };
    }
    function _a(l, h) {
      l.componentStack = {
        tag: 1,
        parent: l.componentStack,
        type: h
      };
    }
    function Wl(l, h) {
      l.componentStack = {
        tag: 2,
        parent: l.componentStack,
        type: h
      };
    }
    function lr(l) {
      l.componentStack === null ? r("Unexpectedly popped too many stack frames. This is a bug in React.") : l.componentStack = l.componentStack.parent;
    }
    var Vr = null;
    function jl(l, h) {
      {
        var S;
        typeof h == "string" ? S = h : h && typeof h.message == "string" ? S = h.message : S = String(h);
        var C = Vr || Hl();
        Vr = null, l.errorMessage = S, l.errorComponentStack = C;
      }
    }
    function vi(l, h) {
      var S = l.onError(h);
      if (S != null && typeof S != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof S + '" instead');
      return S;
    }
    function Fo(l, h) {
      var S = l.onShellError;
      S(h);
      var C = l.onFatalError;
      C(h), l.destination !== null ? (l.status = kr, w(l.destination, h)) : (l.status = nu, l.fatalError = h);
    }
    function ru(l, h, S) {
      or(h, "Suspense");
      var C = h.blockedBoundary, F = h.blockedSegment, Z = S.fallback, de = S.children, Te = /* @__PURE__ */ new Set(), ze = _r(l, Te), tt = F.chunks.length, st = jr(
        l,
        tt,
        ze,
        F.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      F.children.push(st), F.lastPushedText = !1;
      var St = jr(
        l,
        0,
        null,
        F.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      St.parentFlushed = !0, h.blockedBoundary = ze, h.blockedSegment = St;
      try {
        if (zo(l, h, de), Ls(St.chunks, l.responseState, St.lastPushedText, St.textEmbedded), St.status = ua, Si(ze, St), ze.pendingTasks === 0) {
          lr(h);
          return;
        }
      } catch (Fn) {
        St.status = ca, ze.forceClientRender = !0, ze.errorDigest = vi(l, Fn), jl(ze, Fn);
      } finally {
        h.blockedBoundary = C, h.blockedSegment = F;
      }
      var gn = yi(l, Z, C, st, Te, h.legacyContext, h.context, h.treeContext);
      gn.componentStack = h.componentStack, l.pingedTasks.push(gn), lr(h);
    }
    function au(l, h, S, C) {
      or(h, S);
      var F = h.blockedSegment, Z = xr(F.chunks, S, C, l.responseState, F.formatContext);
      F.lastPushedText = !1;
      var de = F.formatContext;
      F.formatContext = Bn(de, S, C), zo(l, h, Z), F.formatContext = de, Xn(F.chunks, S), F.lastPushedText = !1, lr(h);
    }
    function md(l) {
      return l.prototype && l.prototype.isReactComponent;
    }
    function Vl(l, h, S, C, F) {
      var Z = {};
      Fl(h, Z);
      var de = S(C, F);
      return nd(S, C, de, F);
    }
    function xi(l, h, S, C, F) {
      var Z = S.render();
      S.props !== F && (Xl || r("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", bn(C) || "a component"), Xl = !0);
      {
        var de = C.childContextTypes;
        if (de != null) {
          var Te = h.legacyContext, ze = na(S, C, Te, de);
          h.legacyContext = ze, Jn(l, h, Z), h.legacyContext = Te;
          return;
        }
      }
      Jn(l, h, Z);
    }
    function iu(l, h, S, C) {
      Wl(h, S);
      var F = Hs(S, h.legacyContext), Z = Yc(S, C, F);
      wo(Z, S, C, F), xi(l, h, Z, S, C), lr(h);
    }
    var Ul = {}, bi = {}, Kl = {}, Yl = {}, Xl = !1, ou = !1, lu = !1, ql = !1;
    function gd(l, h, S, C) {
      var F;
      if (F = Hs(S, h.legacyContext), _a(h, S), S.prototype && typeof S.prototype.render == "function") {
        var Z = bn(S) || "Unknown";
        Ul[Z] || (r("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", Z, Z), Ul[Z] = !0);
      }
      var de = Vl(l, h, S, C, F), Te = qs();
      if (typeof de == "object" && de !== null && typeof de.render == "function" && de.$$typeof === void 0) {
        var ze = bn(S) || "Unknown";
        bi[ze] || (r("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", ze, ze, ze), bi[ze] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof de == "object" && de !== null && typeof de.render == "function" && de.$$typeof === void 0
      ) {
        {
          var tt = bn(S) || "Unknown";
          bi[tt] || (r("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", tt, tt, tt), bi[tt] = !0);
        }
        wo(de, S, C, F), xi(l, h, de, S, C);
      } else if (yd(S), Te) {
        var st = h.treeContext, St = 1, gn = 0;
        h.treeContext = Ml(st, St, gn);
        try {
          Jn(l, h, de);
        } finally {
          h.treeContext = st;
        }
      } else
        Jn(l, h, de);
      lr(h);
    }
    function yd(l) {
      {
        if (l && l.childContextTypes && r("%s(...): childContextTypes cannot be defined on a function component.", l.displayName || l.name || "Component"), typeof l.getDerivedStateFromProps == "function") {
          var h = bn(l) || "Unknown";
          Yl[h] || (r("%s: Function components do not support getDerivedStateFromProps.", h), Yl[h] = !0);
        }
        if (typeof l.contextType == "object" && l.contextType !== null) {
          var S = bn(l) || "Unknown";
          Kl[S] || (r("%s: Function components do not support contextType.", S), Kl[S] = !0);
        }
      }
    }
    function su(l, h) {
      if (l && l.defaultProps) {
        var S = Zn({}, h), C = l.defaultProps;
        for (var F in C)
          S[F] === void 0 && (S[F] = C[F]);
        return S;
      }
      return h;
    }
    function vd(l, h, S, C, F) {
      _a(h, S.render);
      var Z = Vl(l, h, S.render, C, F), de = qs();
      if (de) {
        var Te = h.treeContext, ze = 1, tt = 0;
        h.treeContext = Ml(Te, ze, tt);
        try {
          Jn(l, h, Z);
        } finally {
          h.treeContext = Te;
        }
      } else
        Jn(l, h, Z);
      lr(h);
    }
    function xd(l, h, S, C, F) {
      var Z = S.type, de = su(Z, C);
      Zl(l, h, Z, de, F);
    }
    function Gl(l, h, S, C) {
      S._context === void 0 ? S !== S.Consumer && (ql || (ql = !0, r("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : S = S._context;
      var F = C.children;
      typeof F != "function" && r("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var Z = Da(S), de = F(Z);
      Jn(l, h, de);
    }
    function bd(l, h, S, C) {
      var F = S._context, Z = C.value, de = C.children, Te;
      Te = h.context, h.context = ci(F, Z), Jn(l, h, de), h.context = Ol(F), Te !== h.context && r("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function Qn(l, h, S, C, F) {
      or(h, "Lazy");
      var Z = S._payload, de = S._init, Te = de(Z), ze = su(Te, C);
      Zl(l, h, Te, ze, F), lr(h);
    }
    function Zl(l, h, S, C, F) {
      if (typeof S == "function")
        if (md(S)) {
          iu(l, h, S, C);
          return;
        } else {
          gd(l, h, S, C);
          return;
        }
      if (typeof S == "string") {
        au(l, h, S, C);
        return;
      }
      switch (S) {
        case jc:
        case Ms:
        case oo:
        case lo:
        case io: {
          Jn(l, h, C.children);
          return;
        }
        case ml: {
          or(h, "SuspenseList"), Jn(l, h, C.children), lr(h);
          return;
        }
        case Wc:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case Ca: {
          ru(l, h, C);
          return;
        }
      }
      if (typeof S == "object" && S !== null)
        switch (S.$$typeof) {
          case ni: {
            vd(l, h, S, C, F);
            return;
          }
          case gl: {
            xd(l, h, S, C, F);
            return;
          }
          case ei: {
            bd(l, h, S, C);
            return;
          }
          case ti: {
            Gl(l, h, S, C);
            return;
          }
          case so: {
            Qn(l, h, S, C);
            return;
          }
        }
      var Z = "";
      throw (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (Z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (S == null ? S : typeof S) + "." + Z));
    }
    function uu(l, h) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      l[Symbol.toStringTag] === "Generator" && (ou || r("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ou = !0), l.entries === h && (lu || r("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), lu = !0);
    }
    function Jn(l, h, S) {
      try {
        return Ql(l, h, S);
      } catch (C) {
        throw typeof C == "object" && C !== null && typeof C.then == "function" || (Vr = Vr !== null ? Vr : Hl()), C;
      }
    }
    function Ql(l, h, S) {
      if (h.node = S, typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case _s: {
            var C = S, F = C.type, Z = C.props, de = C.ref;
            Zl(l, h, F, Z, de);
            return;
          }
          case pl:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case so: {
            var Te = S, ze = Te._payload, tt = Te._init, st;
            try {
              st = tt(ze);
            } catch (Wo) {
              throw typeof Wo == "object" && Wo !== null && typeof Wo.then == "function" && or(h, "Lazy"), Wo;
            }
            Jn(l, h, st);
            return;
          }
        }
        if (Ye(S)) {
          cu(l, h, S);
          return;
        }
        var St = En(S);
        if (St) {
          uu(S, St);
          var gn = St.call(S);
          if (gn) {
            var Fn = gn.next();
            if (!Fn.done) {
              var sr = [];
              do
                sr.push(Fn.value), Fn = gn.next();
              while (!Fn.done);
              cu(l, h, sr);
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
        gu.lastPushedText = Ds(h.blockedSegment.chunks, S, l.responseState, gu.lastPushedText);
        return;
      }
      if (typeof S == "number") {
        var yu = h.blockedSegment;
        yu.lastPushedText = Ds(h.blockedSegment.chunks, "" + S, l.responseState, yu.lastPushedText);
        return;
      }
      typeof S == "function" && r("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function cu(l, h, S) {
      for (var C = S.length, F = 0; F < C; F++) {
        var Z = h.treeContext;
        h.treeContext = Ml(Z, C, F);
        try {
          zo(l, h, S[F]);
        } finally {
          h.treeContext = Z;
        }
      }
    }
    function Sd(l, h, S) {
      var C = h.blockedSegment, F = C.chunks.length, Z = jr(
        l,
        F,
        null,
        C.formatContext,
        // Adopt the parent segment's leading text embed
        C.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      C.children.push(Z), C.lastPushedText = !1;
      var de = yi(l, h.node, h.blockedBoundary, Z, h.abortSet, h.legacyContext, h.context, h.treeContext);
      h.componentStack !== null && (de.componentStack = h.componentStack.parent);
      var Te = de.ping;
      S.then(Te, Te);
    }
    function zo(l, h, S) {
      var C = h.blockedSegment.formatContext, F = h.legacyContext, Z = h.context, de = null;
      de = h.componentStack;
      try {
        return Jn(l, h, S);
      } catch (Te) {
        if (hi(), typeof Te == "object" && Te !== null && typeof Te.then == "function") {
          Sd(l, h, Te), h.blockedSegment.formatContext = C, h.legacyContext = F, h.context = Z, mo(Z), h.componentStack = de;
          return;
        } else
          throw h.blockedSegment.formatContext = C, h.legacyContext = F, h.context = Z, mo(Z), h.componentStack = de, Te;
      }
    }
    function Bo(l, h, S, C) {
      var F = vi(l, C);
      if (h === null ? Fo(l, C) : (h.pendingTasks--, h.forceClientRender || (h.forceClientRender = !0, h.errorDigest = F, jl(h, C), h.parentFlushed && l.clientRenderedBoundaries.push(h))), l.allPendingTasks--, l.allPendingTasks === 0) {
        var Z = l.onAllReady;
        Z();
      }
    }
    function du(l) {
      var h = this, S = l.blockedBoundary, C = l.blockedSegment;
      C.status = $l, Ei(h, S, C);
    }
    function fu(l, h, S) {
      var C = l.blockedBoundary, F = l.blockedSegment;
      if (F.status = $l, C === null)
        h.allPendingTasks--, h.status !== kr && (h.status = kr, h.destination !== null && v(h.destination));
      else {
        if (C.pendingTasks--, !C.forceClientRender) {
          C.forceClientRender = !0;
          var Z = S === void 0 ? new Error("The render was aborted by the server without a reason.") : S;
          C.errorDigest = h.onError(Z);
          {
            var de = "The server did not finish this Suspense boundary: ";
            Z && typeof Z.message == "string" ? Z = de + Z.message : Z = de + String(Z);
            var Te = wr;
            wr = l;
            try {
              jl(C, Z);
            } finally {
              wr = Te;
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
          S.parentFlushed && S.status === ua && Si(h, S), h.parentFlushed && l.completedBoundaries.push(h), h.fallbackAbortableTasks.forEach(du, l), h.fallbackAbortableTasks.clear();
        else if (S.parentFlushed && S.status === ua) {
          Si(h, S);
          var F = h.completedSegments;
          F.length === 1 && h.parentFlushed && l.partialBoundaries.push(h);
        }
      }
      if (l.allPendingTasks--, l.allPendingTasks === 0) {
        var Z = l.onAllReady;
        Z();
      }
    }
    function $o(l, h) {
      var S = h.blockedSegment;
      if (S.status === Mo) {
        mo(h.context);
        var C = null;
        C = wr, wr = h;
        try {
          Jn(l, h, h.node), Ls(S.chunks, l.responseState, S.lastPushedText, S.textEmbedded), h.abortSet.delete(h), S.status = ua, Ei(l, h.blockedBoundary, S);
        } catch (Z) {
          if (hi(), typeof Z == "object" && Z !== null && typeof Z.then == "function") {
            var F = h.ping;
            Z.then(F, F);
          } else
            h.abortSet.delete(h), S.status = ca, Bo(l, h.blockedBoundary, S, Z);
        } finally {
          wr = C;
        }
      }
    }
    function hu(l) {
      if (l.status !== kr) {
        var h = Uc(), S = Wr.current;
        Wr.current = eu;
        var C;
        C = _o.getCurrentStack, _o.getCurrentStack = Hl;
        var F = mi;
        Oo(l.responseState);
        try {
          var Z = l.pingedTasks, de;
          for (de = 0; de < Z.length; de++) {
            var Te = Z[de];
            $o(l, Te);
          }
          Z.splice(0, de), l.destination !== null && Ho(l, l.destination);
        } catch (ze) {
          vi(l, ze), Fo(l, ze);
        } finally {
          Oo(F), Wr.current = S, _o.getCurrentStack = C, S === eu && mo(h);
        }
      }
    }
    function ki(l, h, S) {
      switch (S.parentFlushed = !0, S.status) {
        case Mo: {
          var C = S.id = l.nextSegmentId++;
          return S.lastPushedText = !1, S.textEmbedded = !1, Ki(h, l.responseState, C);
        }
        case ua: {
          S.status = tu;
          for (var F = !0, Z = S.chunks, de = 0, Te = S.children, ze = 0; ze < Te.length; ze++) {
            for (var tt = Te[ze]; de < tt.index; de++)
              d(h, Z[de]);
            F = wi(l, h, tt);
          }
          for (; de < Z.length - 1; de++)
            d(h, Z[de]);
          return de < Z.length && (F = f(h, Z[de])), F;
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
        return ar(h, l.responseState, C.errorDigest, C.errorMessage, C.errorComponentStack), ki(l, h, S), Os(h, l.responseState);
      if (C.pendingTasks > 0) {
        C.rootSegmentID = l.nextSegmentId++, C.completedSegments.length > 0 && l.partialBoundaries.push(C);
        var F = C.id = jt(l.responseState);
        return Ir(h, l.responseState, F), ki(l, h, S), Za(h, l.responseState);
      } else {
        if (C.byteSize > l.progressiveChunkSize)
          return C.rootSegmentID = l.nextSegmentId++, l.completedBoundaries.push(C), Ir(h, l.responseState, C.id), ki(l, h, S), Za(h, l.responseState);
        hl(h, l.responseState);
        var Z = C.completedSegments;
        if (Z.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var de = Z[0];
        return wi(l, h, de), Hc(h, l.responseState);
      }
    }
    function Ed(l, h, S) {
      return Bc(h, l.responseState, S.id, S.errorDigest, S.errorMessage, S.errorComponentStack);
    }
    function Jl(l, h, S) {
      return xe(h, l.responseState, S.formatContext, S.id), wi(l, h, S), Oe(h, S.formatContext);
    }
    function Io(l, h, S) {
      for (var C = S.completedSegments, F = 0; F < C.length; F++) {
        var Z = C[F];
        pu(l, h, S, Z);
      }
      return C.length = 0, _c(h, l.responseState, S.id, S.rootSegmentID);
    }
    function kd(l, h, S) {
      for (var C = S.completedSegments, F = 0; F < C.length; F++) {
        var Z = C[F];
        if (!pu(l, h, S, Z))
          return F++, C.splice(0, F), !1;
      }
      return C.splice(0, F), !0;
    }
    function pu(l, h, S, C) {
      if (C.status === tu)
        return !0;
      var F = C.id;
      if (F === -1) {
        var Z = C.id = S.rootSegmentID;
        if (Z === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Jl(l, h, C);
      } else
        return Jl(l, h, C), Gn(h, l.responseState, F);
    }
    function Ho(l, h) {
      try {
        var S = l.completedRootSegment;
        S !== null && l.pendingRootTasks === 0 && (wi(l, h, S), l.completedRootSegment = null, Ya(h, l.responseState));
        var C = l.clientRenderedBoundaries, F;
        for (F = 0; F < C.length; F++) {
          var Z = C[F];
          if (!Ed(l, h, Z)) {
            l.destination = null, F++, C.splice(0, F);
            return;
          }
        }
        C.splice(0, F);
        var de = l.completedBoundaries;
        for (F = 0; F < de.length; F++) {
          var Te = de[F];
          if (!Io(l, h, Te)) {
            l.destination = null, F++, de.splice(0, F);
            return;
          }
        }
        de.splice(0, F);
        var ze = l.partialBoundaries;
        for (F = 0; F < ze.length; F++) {
          var tt = ze[F];
          if (!kd(l, h, tt)) {
            l.destination = null, F++, ze.splice(0, F);
            return;
          }
        }
        ze.splice(0, F);
        var st = l.completedBoundaries;
        for (F = 0; F < st.length; F++) {
          var St = st[F];
          if (!Io(l, h, St)) {
            l.destination = null, F++, st.splice(0, F);
            return;
          }
        }
        st.splice(0, F);
      } finally {
        l.allPendingTasks === 0 && l.pingedTasks.length === 0 && l.clientRenderedBoundaries.length === 0 && l.completedBoundaries.length === 0 && (l.abortableTasks.size !== 0 && r("There was still abortable task at the root when we closed. This is a bug in React."), v(h));
      }
    }
    function wd(l) {
      s(function() {
        return hu(l);
      });
    }
    function c(l, h) {
      if (l.status === nu) {
        l.status = kr, w(h, l.fatalError);
        return;
      }
      if (l.status !== kr && l.destination === null) {
        l.destination = h;
        try {
          Ho(l, h);
        } catch (S) {
          vi(l, S), Fo(l, S);
        }
      }
    }
    function p(l, h) {
      try {
        var S = l.abortableTasks;
        S.forEach(function(C) {
          return fu(C, l, h);
        }), S.clear(), l.destination !== null && Ho(l, l.destination);
      } catch (C) {
        vi(l, C), Fo(l, C);
      }
    }
    function k() {
    }
    function D(l, h, S, C) {
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
      var st = Il(l, Ic(S, h ? h.identifierPrefix : void 0), fl(), 1 / 0, k, void 0, tt, void 0, void 0);
      if (wd(st), p(st, C), c(st, Te), F)
        throw Z;
      if (!ze)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return de;
    }
    function W(l, h) {
      return D(l, h, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function ie(l, h) {
      return D(l, h, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function me() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function Ce() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    Di.renderToNodeStream = me, Di.renderToStaticMarkup = ie, Di.renderToStaticNodeStream = Ce, Di.renderToString = W, Di.version = t;
  }()), Di;
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
var tm;
function CE() {
  return tm || (tm = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ue, t = "18.2.0", n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function a(c) {
      {
        for (var p = arguments.length, k = new Array(p > 1 ? p - 1 : 0), D = 1; D < p; D++)
          k[D - 1] = arguments[D];
        o("warn", c, k);
      }
    }
    function r(c) {
      {
        for (var p = arguments.length, k = new Array(p > 1 ? p - 1 : 0), D = 1; D < p; D++)
          k[D - 1] = arguments[D];
        o("error", c, k);
      }
    }
    function o(c, p, k) {
      {
        var D = n.ReactDebugCurrentFrame, W = D.getStackAddendum();
        W !== "" && (p += "%s", k = k.concat([W]));
        var ie = k.map(function(me) {
          return String(me);
        });
        ie.unshift("Warning: " + p), Function.prototype.apply.call(console[c], console, ie);
      }
    }
    function s(c) {
      c();
    }
    var u = 512, d = null, f = 0;
    function g(c) {
      d = new Uint8Array(u), f = 0;
    }
    function v(c, p) {
      if (p.length !== 0) {
        if (p.length > u) {
          f > 0 && (c.enqueue(new Uint8Array(d.buffer, 0, f)), d = new Uint8Array(u), f = 0), c.enqueue(p);
          return;
        }
        var k = p, D = d.length - f;
        D < k.length && (D === 0 ? c.enqueue(d) : (d.set(k.subarray(0, D), f), c.enqueue(d), k = k.subarray(D)), d = new Uint8Array(u), f = 0), d.set(k, f), f += k.length;
      }
    }
    function y(c, p) {
      return v(c, p), !0;
    }
    function E(c) {
      d && f > 0 && (c.enqueue(new Uint8Array(d.buffer, 0, f)), d = null, f = 0);
    }
    function w(c) {
      c.close();
    }
    var O = new TextEncoder();
    function T(c) {
      return O.encode(c);
    }
    function m(c) {
      return O.encode(c);
    }
    function A(c, p) {
      typeof c.error == "function" ? c.error(p) : c.close();
    }
    function _(c) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, k = p && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return k;
      }
    }
    function L(c) {
      try {
        return N(c), !1;
      } catch {
        return !0;
      }
    }
    function N(c) {
      return "" + c;
    }
    function M(c, p) {
      if (L(c))
        return r("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", p, _(c)), N(c);
    }
    function U(c, p) {
      if (L(c))
        return r("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", p, _(c)), N(c);
    }
    function j(c) {
      if (L(c))
        return r("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", _(c)), N(c);
    }
    var $ = Object.prototype.hasOwnProperty, V = 0, ne = 1, H = 2, oe = 3, fe = 4, I = 5, Q = 6, q = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", se = q + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ae = new RegExp("^[" + q + "][" + se + "]*$"), J = {}, G = {};
    function he(c) {
      return $.call(G, c) ? !0 : $.call(J, c) ? !1 : ae.test(c) ? (G[c] = !0, !0) : (J[c] = !0, r("Invalid attribute name: `%s`", c), !1);
    }
    function ee(c, p, k, D) {
      if (k !== null && k.type === V)
        return !1;
      switch (typeof p) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (D)
            return !1;
          if (k !== null)
            return !k.acceptsBooleans;
          var W = c.toLowerCase().slice(0, 5);
          return W !== "data-" && W !== "aria-";
        }
        default:
          return !1;
      }
    }
    function ge(c) {
      return _e.hasOwnProperty(c) ? _e[c] : null;
    }
    function be(c, p, k, D, W, ie, me) {
      this.acceptsBooleans = p === H || p === oe || p === fe, this.attributeName = D, this.attributeNamespace = W, this.mustUseProperty = k, this.propertyName = c, this.type = p, this.sanitizeURL = ie, this.removeEmptyString = me;
    }
    var _e = {}, Ve = [
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
    Ve.forEach(function(c) {
      _e[c] = new be(
        c,
        V,
        !1,
        // mustUseProperty
        c,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(c) {
      var p = c[0], k = c[1];
      _e[p] = new be(
        p,
        ne,
        !1,
        // mustUseProperty
        k,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(c) {
      _e[c] = new be(
        c,
        H,
        !1,
        // mustUseProperty
        c.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(c) {
      _e[c] = new be(
        c,
        H,
        !1,
        // mustUseProperty
        c,
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
    ].forEach(function(c) {
      _e[c] = new be(
        c,
        oe,
        !1,
        // mustUseProperty
        c.toLowerCase(),
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
    ].forEach(function(c) {
      _e[c] = new be(
        c,
        oe,
        !0,
        // mustUseProperty
        c,
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
    ].forEach(function(c) {
      _e[c] = new be(
        c,
        fe,
        !1,
        // mustUseProperty
        c,
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
    ].forEach(function(c) {
      _e[c] = new be(
        c,
        Q,
        !1,
        // mustUseProperty
        c,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(c) {
      _e[c] = new be(
        c,
        I,
        !1,
        // mustUseProperty
        c.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Qe = /[\-\:]([a-z])/g, Ae = function(c) {
      return c[1].toUpperCase();
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
    ].forEach(function(c) {
      var p = c.replace(Qe, Ae);
      _e[p] = new be(
        p,
        ne,
        !1,
        // mustUseProperty
        c,
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
    ].forEach(function(c) {
      var p = c.replace(Qe, Ae);
      _e[p] = new be(
        p,
        ne,
        !1,
        // mustUseProperty
        c,
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
    ].forEach(function(c) {
      var p = c.replace(Qe, Ae);
      _e[p] = new be(
        p,
        ne,
        !1,
        // mustUseProperty
        c,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(c) {
      _e[c] = new be(
        c,
        ne,
        !1,
        // mustUseProperty
        c.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ve = "xlinkHref";
    _e[ve] = new be(
      "xlinkHref",
      ne,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(c) {
      _e[c] = new be(
        c,
        ne,
        !1,
        // mustUseProperty
        c.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Ee = {
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
    function le(c, p) {
      return c + p.charAt(0).toUpperCase() + p.substring(1);
    }
    var Be = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Ee).forEach(function(c) {
      Be.forEach(function(p) {
        Ee[le(p, c)] = Ee[c];
      });
    });
    var Ne = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function qe(c, p) {
      Ne[p.type] || p.onChange || p.onInput || p.readOnly || p.disabled || p.value == null || r("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), p.onChange || p.readOnly || p.disabled || p.checked == null || r("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Ke(c, p) {
      if (c.indexOf("-") === -1)
        return typeof p.is == "string";
      switch (c) {
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
    var nt = {
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
    }, at = {}, lt = new RegExp("^(aria)-[" + se + "]*$"), ot = new RegExp("^(aria)[A-Z][" + se + "]*$");
    function Ze(c, p) {
      {
        if ($.call(at, p) && at[p])
          return !0;
        if (ot.test(p)) {
          var k = "aria-" + p.slice(4).toLowerCase(), D = nt.hasOwnProperty(k) ? k : null;
          if (D == null)
            return r("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", p), at[p] = !0, !0;
          if (p !== D)
            return r("Invalid ARIA attribute `%s`. Did you mean `%s`?", p, D), at[p] = !0, !0;
        }
        if (lt.test(p)) {
          var W = p.toLowerCase(), ie = nt.hasOwnProperty(W) ? W : null;
          if (ie == null)
            return at[p] = !0, !1;
          if (p !== ie)
            return r("Unknown ARIA attribute `%s`. Did you mean `%s`?", p, ie), at[p] = !0, !0;
        }
      }
      return !0;
    }
    function Me(c, p) {
      {
        var k = [];
        for (var D in p) {
          var W = Ze(c, D);
          W || k.push(D);
        }
        var ie = k.map(function(me) {
          return "`" + me + "`";
        }).join(", ");
        k.length === 1 ? r("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", ie, c) : k.length > 1 && r("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", ie, c);
      }
    }
    function De(c, p) {
      Ke(c, p) || Me(c, p);
    }
    var ht = !1;
    function Ue(c, p) {
      {
        if (c !== "input" && c !== "textarea" && c !== "select")
          return;
        p != null && p.value === null && !ht && (ht = !0, c === "select" && p.multiple ? r("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", c) : r("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", c));
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
    }, pt = function() {
    };
    {
      var gt = {}, _t = /^on./, It = /^on[^A-Z]/, cn = new RegExp("^(aria)-[" + se + "]*$"), qt = new RegExp("^(aria)[A-Z][" + se + "]*$");
      pt = function(c, p, k, D) {
        if ($.call(gt, p) && gt[p])
          return !0;
        var W = p.toLowerCase();
        if (W === "onfocusin" || W === "onfocusout")
          return r("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), gt[p] = !0, !0;
        if (D != null) {
          var ie = D.registrationNameDependencies, me = D.possibleRegistrationNames;
          if (ie.hasOwnProperty(p))
            return !0;
          var Ce = me.hasOwnProperty(W) ? me[W] : null;
          if (Ce != null)
            return r("Invalid event handler property `%s`. Did you mean `%s`?", p, Ce), gt[p] = !0, !0;
          if (_t.test(p))
            return r("Unknown event handler property `%s`. It will be ignored.", p), gt[p] = !0, !0;
        } else if (_t.test(p))
          return It.test(p) && r("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", p), gt[p] = !0, !0;
        if (cn.test(p) || qt.test(p))
          return !0;
        if (W === "innerhtml")
          return r("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), gt[p] = !0, !0;
        if (W === "aria")
          return r("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), gt[p] = !0, !0;
        if (W === "is" && k !== null && k !== void 0 && typeof k != "string")
          return r("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof k), gt[p] = !0, !0;
        if (typeof k == "number" && isNaN(k))
          return r("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", p), gt[p] = !0, !0;
        var l = ge(p), h = l !== null && l.type === V;
        if (dt.hasOwnProperty(W)) {
          var S = dt[W];
          if (S !== p)
            return r("Invalid DOM property `%s`. Did you mean `%s`?", p, S), gt[p] = !0, !0;
        } else if (!h && p !== W)
          return r("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", p, W), gt[p] = !0, !0;
        return typeof k == "boolean" && ee(p, k, l, !1) ? (k ? r('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', k, p, p, k, p) : r('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', k, p, p, k, p, p, p), gt[p] = !0, !0) : h ? !0 : ee(p, k, l, !1) ? (gt[p] = !0, !1) : ((k === "false" || k === "true") && l !== null && l.type === oe && (r("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", k, p, k === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', p, k), gt[p] = !0), !0);
      };
    }
    var rn = function(c, p, k) {
      {
        var D = [];
        for (var W in p) {
          var ie = pt(c, W, p[W], k);
          ie || D.push(W);
        }
        var me = D.map(function(Ce) {
          return "`" + Ce + "`";
        }).join(", ");
        D.length === 1 ? r("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", me, c) : D.length > 1 && r("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", me, c);
      }
    };
    function Et(c, p, k) {
      Ke(c, p) || rn(c, p, k);
    }
    var kt = function() {
    };
    {
      var vn = /^(?:webkit|moz|o)[A-Z]/, kn = /^-ms-/, Fe = /-(.)/g, Gt = /;\s*$/, Ft = {}, dn = {}, Je = !1, fn = !1, hn = function(c) {
        return c.replace(Fe, function(p, k) {
          return k.toUpperCase();
        });
      }, Tn = function(c) {
        Ft.hasOwnProperty(c) && Ft[c] || (Ft[c] = !0, r(
          "Unsupported style property %s. Did you mean %s?",
          c,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          hn(c.replace(kn, "ms-"))
        ));
      }, Sn = function(c) {
        Ft.hasOwnProperty(c) && Ft[c] || (Ft[c] = !0, r("Unsupported vendor-prefixed style property %s. Did you mean %s?", c, c.charAt(0).toUpperCase() + c.slice(1)));
      }, un = function(c, p) {
        dn.hasOwnProperty(p) && dn[p] || (dn[p] = !0, r(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, c, p.replace(Gt, "")));
      }, Mt = function(c, p) {
        Je || (Je = !0, r("`NaN` is an invalid value for the `%s` css style property.", c));
      }, Ht = function(c, p) {
        fn || (fn = !0, r("`Infinity` is an invalid value for the `%s` css style property.", c));
      };
      kt = function(c, p) {
        c.indexOf("-") > -1 ? Tn(c) : vn.test(c) ? Sn(c) : Gt.test(p) && un(c, p), typeof p == "number" && (isNaN(p) ? Mt(c, p) : isFinite(p) || Ht(c, p));
      };
    }
    var K = kt, He = /["'&<>]/;
    function et(c) {
      j(c);
      var p = "" + c, k = He.exec(p);
      if (!k)
        return p;
      var D, W = "", ie, me = 0;
      for (ie = k.index; ie < p.length; ie++) {
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
        me !== ie && (W += p.substring(me, ie)), me = ie + 1, W += D;
      }
      return me !== ie ? W + p.substring(me, ie) : W;
    }
    function Ie(c) {
      return typeof c == "boolean" || typeof c == "number" ? "" + c : et(c);
    }
    var bt = /([A-Z])/g, ft = /^ms-/;
    function we(c) {
      return c.replace(bt, "-$1").toLowerCase().replace(ft, "-ms-");
    }
    var Ye = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, $e = !1;
    function Xe(c) {
      !$e && Ye.test(c) && ($e = !0, r("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(c)));
    }
    var Lt = Array.isArray;
    function Wt(c) {
      return Lt(c);
    }
    var Ut = m("<script>"), Kt = m("<\/script>"), Ot = m('<script src="'), $t = m('<script type="module" src="'), Zt = m('" async=""><\/script>');
    function an(c) {
      return j(c), ("" + c).replace(pn, Qt);
    }
    var pn = /(<\/|<)(s)(cript)/gi, Qt = function(c, p, k, D) {
      return "" + p + (k === "s" ? "\\u0073" : "\\u0053") + D;
    };
    function mn(c, p, k, D, W) {
      var ie = c === void 0 ? "" : c, me = p === void 0 ? Ut : m('<script nonce="' + Ie(p) + '">'), Ce = [];
      if (k !== void 0 && Ce.push(me, T(an(k)), Kt), D !== void 0)
        for (var l = 0; l < D.length; l++)
          Ce.push(Ot, T(Ie(D[l])), Zt);
      if (W !== void 0)
        for (var h = 0; h < W.length; h++)
          Ce.push($t, T(Ie(W[h])), Zt);
      return {
        bootstrapChunks: Ce,
        startInlineScript: me,
        placeholderPrefix: m(ie + "P:"),
        segmentPrefix: m(ie + "S:"),
        boundaryPrefix: ie + "B:",
        idPrefix: ie,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var yt = 0, ct = 1, on = 2, xn = 3, en = 4, Bn = 5, Cn = 6, jt = 7;
    function Yt(c, p) {
      return {
        insertionMode: c,
        selectedValue: p
      };
    }
    function jn(c) {
      var p = c === "http://www.w3.org/2000/svg" ? on : c === "http://www.w3.org/1998/Math/MathML" ? xn : yt;
      return Yt(p, null);
    }
    function nr(c, p, k) {
      switch (p) {
        case "select":
          return Yt(ct, k.value != null ? k.value : k.defaultValue);
        case "svg":
          return Yt(on, null);
        case "math":
          return Yt(xn, null);
        case "foreignObject":
          return Yt(ct, null);
        case "table":
          return Yt(en, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return Yt(Bn, null);
        case "colgroup":
          return Yt(jt, null);
        case "tr":
          return Yt(Cn, null);
      }
      return c.insertionMode >= en || c.insertionMode === yt ? Yt(ct, null) : c;
    }
    var gr = null;
    function yr(c) {
      var p = c.nextSuspenseID++;
      return m(c.boundaryPrefix + p.toString(16));
    }
    function cr(c, p, k) {
      var D = c.idPrefix, W = ":" + D + "R" + p;
      return k > 0 && (W += "H" + k.toString(32)), W + ":";
    }
    function rr(c) {
      return Ie(c);
    }
    var Ar = m("<!-- -->");
    function dr(c, p, k, D) {
      return p === "" ? D : (D && c.push(Ar), c.push(T(rr(p))), !0);
    }
    function fr(c, p, k, D) {
      k && D && c.push(Ar);
    }
    var x = /* @__PURE__ */ new Map();
    function P(c) {
      var p = x.get(c);
      if (p !== void 0)
        return p;
      var k = m(Ie(we(c)));
      return x.set(c, k), k;
    }
    var B = m(' style="'), Y = m(":"), Se = m(";");
    function ye(c, p, k) {
      if (typeof k != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var D = !0;
      for (var W in k)
        if ($.call(k, W)) {
          var ie = k[W];
          if (!(ie == null || typeof ie == "boolean" || ie === "")) {
            var me = void 0, Ce = void 0, l = W.indexOf("--") === 0;
            l ? (me = T(Ie(W)), U(ie, W), Ce = T(Ie(("" + ie).trim()))) : (K(W, ie), me = P(W), typeof ie == "number" ? ie !== 0 && !$.call(Ee, W) ? Ce = T(ie + "px") : Ce = T("" + ie) : (U(ie, W), Ce = T(Ie(("" + ie).trim())))), D ? (D = !1, c.push(B, me, Y, Ce)) : c.push(Se, me, Y, Ce);
          }
        }
      D || c.push(it);
    }
    var Pe = m(" "), We = m('="'), it = m('"'), mt = m('=""');
    function ut(c, p, k, D) {
      switch (k) {
        case "style": {
          ye(c, p, D);
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
        !(k.length > 2 && (k[0] === "o" || k[0] === "O") && (k[1] === "n" || k[1] === "N"))
      ) {
        var W = ge(k);
        if (W !== null) {
          switch (typeof D) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!W.acceptsBooleans)
                return;
          }
          var ie = W.attributeName, me = T(ie);
          switch (W.type) {
            case oe:
              D && c.push(Pe, me, mt);
              return;
            case fe:
              D === !0 ? c.push(Pe, me, mt) : D === !1 || c.push(Pe, me, We, T(Ie(D)), it);
              return;
            case I:
              isNaN(D) || c.push(Pe, me, We, T(Ie(D)), it);
              break;
            case Q:
              !isNaN(D) && D >= 1 && c.push(Pe, me, We, T(Ie(D)), it);
              break;
            default:
              W.sanitizeURL && (M(D, ie), D = "" + D, Xe(D)), c.push(Pe, me, We, T(Ie(D)), it);
          }
        } else if (he(k)) {
          switch (typeof D) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var Ce = k.toLowerCase().slice(0, 5);
              if (Ce !== "data-" && Ce !== "aria-")
                return;
            }
          }
          c.push(Pe, T(k), We, T(Ie(D)), it);
        }
      }
    }
    var Nt = m(">"), Dn = m("/>");
    function An(c, p, k) {
      if (p != null) {
        if (k != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof p != "object" || !("__html" in p))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var D = p.__html;
        D != null && (j(D), c.push(T("" + D)));
      }
    }
    var Pn = !1, Vn = !1, re = !1, te = !1, ce = !1, Re = !1, Rt = !1;
    function ln(c, p) {
      {
        var k = c[p];
        if (k != null) {
          var D = Wt(k);
          c.multiple && !D ? r("The `%s` prop supplied to <select> must be an array if `multiple` is true.", p) : !c.multiple && D && r("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", p);
        }
      }
    }
    function Un(c, p, k) {
      qe("select", p), ln(p, "value"), ln(p, "defaultValue"), p.value !== void 0 && p.defaultValue !== void 0 && !re && (r("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), re = !0), c.push(Xn("select"));
      var D = null, W = null;
      for (var ie in p)
        if ($.call(p, ie)) {
          var me = p[ie];
          if (me == null)
            continue;
          switch (ie) {
            case "children":
              D = me;
              break;
            case "dangerouslySetInnerHTML":
              W = me;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ut(c, k, ie, me);
              break;
          }
        }
      return c.push(Nt), An(c, W, D), D;
    }
    function Pr(c) {
      var p = "";
      return e.Children.forEach(c, function(k) {
        k != null && (p += k, !ce && typeof k != "string" && typeof k != "number" && (ce = !0, r("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), p;
    }
    var Ua = m(' selected=""');
    function il(c, p, k, D) {
      var W = D.selectedValue;
      c.push(Xn("option"));
      var ie = null, me = null, Ce = null, l = null;
      for (var h in p)
        if ($.call(p, h)) {
          var S = p[h];
          if (S == null)
            continue;
          switch (h) {
            case "children":
              ie = S;
              break;
            case "selected":
              Ce = S, Rt || (r("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Rt = !0);
              break;
            case "dangerouslySetInnerHTML":
              l = S;
              break;
            case "value":
              me = S;
            default:
              ut(c, k, h, S);
              break;
          }
        }
      if (W != null) {
        var C;
        if (me !== null ? (M(me, "value"), C = "" + me) : (l !== null && (Re || (Re = !0, r("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), C = Pr(ie)), Wt(W))
          for (var F = 0; F < W.length; F++) {
            M(W[F], "value");
            var Z = "" + W[F];
            if (Z === C) {
              c.push(Ua);
              break;
            }
          }
        else
          M(W, "select.value"), "" + W === C && c.push(Ua);
      } else
        Ce && c.push(Ua);
      return c.push(Nt), An(c, l, ie), ie;
    }
    function Ka(c, p, k) {
      qe("input", p), p.checked !== void 0 && p.defaultChecked !== void 0 && !Vn && (r("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", p.type), Vn = !0), p.value !== void 0 && p.defaultValue !== void 0 && !Pn && (r("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", p.type), Pn = !0), c.push(Xn("input"));
      var D = null, W = null, ie = null, me = null;
      for (var Ce in p)
        if ($.call(p, Ce)) {
          var l = p[Ce];
          if (l == null)
            continue;
          switch (Ce) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              me = l;
              break;
            case "defaultValue":
              W = l;
              break;
            case "checked":
              ie = l;
              break;
            case "value":
              D = l;
              break;
            default:
              ut(c, k, Ce, l);
              break;
          }
        }
      return ie !== null ? ut(c, k, "checked", ie) : me !== null && ut(c, k, "checked", me), D !== null ? ut(c, k, "value", D) : W !== null && ut(c, k, "value", W), c.push(Dn), null;
    }
    function hr(c, p, k) {
      qe("textarea", p), p.value !== void 0 && p.defaultValue !== void 0 && !te && (r("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), te = !0), c.push(Xn("textarea"));
      var D = null, W = null, ie = null;
      for (var me in p)
        if ($.call(p, me)) {
          var Ce = p[me];
          if (Ce == null)
            continue;
          switch (me) {
            case "children":
              ie = Ce;
              break;
            case "value":
              D = Ce;
              break;
            case "defaultValue":
              W = Ce;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              ut(c, k, me, Ce);
              break;
          }
        }
      if (D === null && W !== null && (D = W), c.push(Nt), ie != null) {
        if (r("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), D != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (Wt(ie)) {
          if (ie.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          j(ie[0]), D = "" + ie[0];
        }
        j(ie), D = "" + ie;
      }
      return typeof D == "string" && D[0] === `
` && c.push(Rr), D !== null && (M(D, "value"), c.push(T(rr("" + D)))), null;
    }
    function Qr(c, p, k, D) {
      c.push(Xn(k));
      for (var W in p)
        if ($.call(p, W)) {
          var ie = p[W];
          if (ie == null)
            continue;
          switch (W) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(k + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              ut(c, D, W, ie);
              break;
          }
        }
      return c.push(Dn), null;
    }
    function pa(c, p, k) {
      c.push(Xn("menuitem"));
      for (var D in p)
        if ($.call(p, D)) {
          var W = p[D];
          if (W == null)
            continue;
          switch (D) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              ut(c, k, D, W);
              break;
          }
        }
      return c.push(Nt), null;
    }
    function tn(c, p, k) {
      c.push(Xn("title"));
      var D = null;
      for (var W in p)
        if ($.call(p, W)) {
          var ie = p[W];
          if (ie == null)
            continue;
          switch (W) {
            case "children":
              D = ie;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              ut(c, k, W, ie);
              break;
          }
        }
      c.push(Nt);
      {
        var me = Array.isArray(D) && D.length < 2 ? D[0] || null : D;
        Array.isArray(D) && D.length > 1 ? r("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : me != null && me.$$typeof != null ? r("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : me != null && typeof me != "string" && typeof me != "number" && r("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return D;
    }
    function vr(c, p, k, D) {
      c.push(Xn(k));
      var W = null, ie = null;
      for (var me in p)
        if ($.call(p, me)) {
          var Ce = p[me];
          if (Ce == null)
            continue;
          switch (me) {
            case "children":
              W = Ce;
              break;
            case "dangerouslySetInnerHTML":
              ie = Ce;
              break;
            default:
              ut(c, D, me, Ce);
              break;
          }
        }
      return c.push(Nt), An(c, ie, W), typeof W == "string" ? (c.push(T(rr(W))), null) : W;
    }
    function $n(c, p, k, D) {
      c.push(Xn(k));
      var W = null, ie = null;
      for (var me in p)
        if ($.call(p, me)) {
          var Ce = p[me];
          if (Ce == null)
            continue;
          switch (me) {
            case "children":
              W = Ce;
              break;
            case "dangerouslySetInnerHTML":
              ie = Ce;
              break;
            case "style":
              ye(c, D, Ce);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              he(me) && typeof Ce != "function" && typeof Ce != "symbol" && c.push(Pe, T(me), We, T(Ie(Ce)), it);
              break;
          }
        }
      return c.push(Nt), An(c, ie, W), W;
    }
    var Rr = m(`
`);
    function xr(c, p, k, D) {
      c.push(Xn(k));
      var W = null, ie = null;
      for (var me in p)
        if ($.call(p, me)) {
          var Ce = p[me];
          if (Ce == null)
            continue;
          switch (me) {
            case "children":
              W = Ce;
              break;
            case "dangerouslySetInnerHTML":
              ie = Ce;
              break;
            default:
              ut(c, D, me, Ce);
              break;
          }
        }
      if (c.push(Nt), ie != null) {
        if (W != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof ie != "object" || !("__html" in ie))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var l = ie.__html;
        l != null && (typeof l == "string" && l.length > 0 && l[0] === `
` ? c.push(Rr, T(l)) : (j(l), c.push(T("" + l))));
      }
      return typeof W == "string" && W[0] === `
` && c.push(Rr), W;
    }
    var ma = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, br = /* @__PURE__ */ new Map();
    function Xn(c) {
      var p = br.get(c);
      if (p === void 0) {
        if (!ma.test(c))
          throw new Error("Invalid tag: " + c);
        p = m("<" + c), br.set(c, p);
      }
      return p;
    }
    var Ya = m("<!DOCTYPE html>");
    function Xa(c, p, k, D, W) {
      switch (De(p, k), Ue(p, k), Et(p, k, null), !k.suppressContentEditableWarning && k.contentEditable && k.children != null && r("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), W.insertionMode !== on && W.insertionMode !== xn && p.indexOf("-") === -1 && typeof k.is != "string" && p.toLowerCase() !== p && r("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", p), p) {
        case "select":
          return Un(c, k, D);
        case "option":
          return il(c, k, D, W);
        case "textarea":
          return hr(c, k, D);
        case "input":
          return Ka(c, k, D);
        case "menuitem":
          return pa(c, k, D);
        case "title":
          return tn(c, k, D);
        case "listing":
        case "pre":
          return xr(c, k, p, D);
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
          return Qr(c, k, p, D);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return vr(c, k, p, D);
        case "html":
          return W.insertionMode === yt && c.push(Ya), vr(c, k, p, D);
        default:
          return p.indexOf("-") === -1 && typeof k.is != "string" ? vr(c, k, p, D) : $n(c, k, p, D);
      }
    }
    var Ui = m("</"), Ki = m(">");
    function Yi(c, p, k) {
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
          c.push(Ui, T(p), Ki);
      }
    }
    function ol(c, p) {
      for (var k = p.bootstrapChunks, D = 0; D < k.length - 1; D++)
        v(c, k[D]);
      return D < k.length ? y(c, k[D]) : !0;
    }
    var ll = m('<template id="'), ga = m('"></template>');
    function ya(c, p, k) {
      v(c, ll), v(c, p.placeholderPrefix);
      var D = T(k.toString(16));
      return v(c, D), y(c, ga);
    }
    var va = m("<!--$-->"), Jr = m('<!--$?--><template id="'), sl = m('"></template>'), ea = m("<!--$!-->"), qa = m("<!--/$-->"), Ga = m("<template"), $r = m('"'), Ir = m(' data-dgst="'), xa = m(' data-msg="'), Xi = m(' data-stck="'), Za = m("></template>");
    function qi(c, p) {
      return y(c, va);
    }
    function ba(c, p, k) {
      if (v(c, Jr), k === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return v(c, k), y(c, sl);
    }
    function In(c, p, k, D, W) {
      var ie;
      return ie = y(c, ea), v(c, Ga), k && (v(c, Ir), v(c, T(Ie(k))), v(c, $r)), D && (v(c, xa), v(c, T(Ie(D))), v(c, $r)), W && (v(c, Xi), v(c, T(Ie(W))), v(c, $r)), ie = y(c, Za), ie;
    }
    function Gi(c, p) {
      return y(c, qa);
    }
    function Sa(c, p) {
      return y(c, qa);
    }
    function ul(c, p) {
      return y(c, qa);
    }
    var Zi = m('<div hidden id="'), Ea = m('">'), Qi = m("</div>"), Ji = m('<svg aria-hidden="true" style="display:none" id="'), ka = m('">'), wa = m("</svg>"), eo = m('<math aria-hidden="true" style="display:none" id="'), to = m('">'), no = m("</math>"), Qa = m('<table hidden id="'), ro = m('">'), b = m("</table>"), R = m('<table hidden><tbody id="'), z = m('">'), X = m("</tbody></table>"), ke = m('<table hidden><tr id="'), xe = m('">'), Oe = m("</tr></table>"), je = m('<table hidden><colgroup id="'), xt = m('">'), Dt = m("</colgroup></table>");
    function At(c, p, k, D) {
      switch (k.insertionMode) {
        case yt:
        case ct:
          return v(c, Zi), v(c, p.segmentPrefix), v(c, T(D.toString(16))), y(c, Ea);
        case on:
          return v(c, Ji), v(c, p.segmentPrefix), v(c, T(D.toString(16))), y(c, ka);
        case xn:
          return v(c, eo), v(c, p.segmentPrefix), v(c, T(D.toString(16))), y(c, to);
        case en:
          return v(c, Qa), v(c, p.segmentPrefix), v(c, T(D.toString(16))), y(c, ro);
        case Bn:
          return v(c, R), v(c, p.segmentPrefix), v(c, T(D.toString(16))), y(c, z);
        case Cn:
          return v(c, ke), v(c, p.segmentPrefix), v(c, T(D.toString(16))), y(c, xe);
        case jt:
          return v(c, je), v(c, p.segmentPrefix), v(c, T(D.toString(16))), y(c, xt);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function sn(c, p) {
      switch (p.insertionMode) {
        case yt:
        case ct:
          return y(c, Qi);
        case on:
          return y(c, wa);
        case xn:
          return y(c, no);
        case en:
          return y(c, b);
        case Bn:
          return y(c, X);
        case Cn:
          return y(c, Oe);
        case jt:
          return y(c, Dt);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Hn = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", qn = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Gn = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Ta = m(Hn + ';$RS("'), ao = m('$RS("'), Ja = m('","'), Oc = m('")<\/script>');
    function _c(c, p, k) {
      v(c, p.startInlineScript), p.sentCompleteSegmentFunction ? v(c, ao) : (p.sentCompleteSegmentFunction = !0, v(c, Ta)), v(c, p.segmentPrefix);
      var D = T(k.toString(16));
      return v(c, D), v(c, Ja), v(c, p.placeholderPrefix), v(c, D), y(c, Oc);
    }
    var Mc = m(qn + ';$RC("'), Nc = m('$RC("'), Fc = m('","'), zc = m('")<\/script>');
    function cl(c, p, k, D) {
      if (v(c, p.startInlineScript), p.sentCompleteBoundaryFunction ? v(c, Nc) : (p.sentCompleteBoundaryFunction = !0, v(c, Mc)), k === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var W = T(D.toString(16));
      return v(c, k), v(c, Fc), v(c, p.segmentPrefix), v(c, W), y(c, zc);
    }
    var Bc = m(Gn + ';$RX("'), $c = m('$RX("'), dl = m('"'), Ic = m(")<\/script>"), fl = m(",");
    function Ds(c, p, k, D, W, ie) {
      if (v(c, p.startInlineScript), p.sentClientRenderFunction ? v(c, $c) : (p.sentClientRenderFunction = !0, v(c, Bc)), k === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return v(c, k), v(c, dl), (D || W || ie) && (v(c, fl), v(c, T(hl(D || "")))), (W || ie) && (v(c, fl), v(c, T(hl(W || "")))), ie && (v(c, fl), v(c, T(hl(ie)))), y(c, Ic);
    }
    var Ls = /[<\u2028\u2029]/g;
    function hl(c) {
      var p = JSON.stringify(c);
      return p.replace(Ls, function(k) {
        switch (k) {
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
    var ar = Object.assign, Hc = Symbol.for("react.element"), Os = Symbol.for("react.portal"), Zn = Symbol.for("react.fragment"), _s = Symbol.for("react.strict_mode"), pl = Symbol.for("react.profiler"), io = Symbol.for("react.provider"), oo = Symbol.for("react.context"), lo = Symbol.for("react.forward_ref"), ei = Symbol.for("react.suspense"), ti = Symbol.for("react.suspense_list"), ni = Symbol.for("react.memo"), Ca = Symbol.for("react.lazy"), ml = Symbol.for("react.scope"), gl = Symbol.for("react.debug_trace_mode"), so = Symbol.for("react.legacy_hidden"), Wc = Symbol.for("react.default_value"), Ms = Symbol.iterator, jc = "@@iterator";
    function Vc(c) {
      if (c === null || typeof c != "object")
        return null;
      var p = Ms && c[Ms] || c[jc];
      return typeof p == "function" ? p : null;
    }
    function Ns(c, p, k) {
      var D = c.displayName;
      if (D)
        return D;
      var W = p.displayName || p.name || "";
      return W !== "" ? k + "(" + W + ")" : k;
    }
    function Fs(c) {
      return c.displayName || "Context";
    }
    function En(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && r("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
        return c.displayName || c.name || null;
      if (typeof c == "string")
        return c;
      switch (c) {
        case Zn:
          return "Fragment";
        case Os:
          return "Portal";
        case pl:
          return "Profiler";
        case _s:
          return "StrictMode";
        case ei:
          return "Suspense";
        case ti:
          return "SuspenseList";
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case oo:
            var p = c;
            return Fs(p) + ".Consumer";
          case io:
            var k = c;
            return Fs(k._context) + ".Provider";
          case lo:
            return Ns(c, c.render, "ForwardRef");
          case ni:
            var D = c.displayName || null;
            return D !== null ? D : En(c.type) || "Memo";
          case Ca: {
            var W = c, ie = W._payload, me = W._init;
            try {
              return En(me(ie));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ri = 0, yl, bn, Aa, vl, xl, bl, Sl;
    function El() {
    }
    El.__reactDisabledLog = !0;
    function zs() {
      {
        if (ri === 0) {
          yl = console.log, bn = console.info, Aa = console.warn, vl = console.error, xl = console.group, bl = console.groupCollapsed, Sl = console.groupEnd;
          var c = {
            configurable: !0,
            enumerable: !0,
            value: El,
            writable: !0
          };
          Object.defineProperties(console, {
            info: c,
            log: c,
            warn: c,
            error: c,
            group: c,
            groupCollapsed: c,
            groupEnd: c
          });
        }
        ri++;
      }
    }
    function Bs() {
      {
        if (ri--, ri === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ar({}, c, {
              value: yl
            }),
            info: ar({}, c, {
              value: bn
            }),
            warn: ar({}, c, {
              value: Aa
            }),
            error: ar({}, c, {
              value: vl
            }),
            group: ar({}, c, {
              value: xl
            }),
            groupCollapsed: ar({}, c, {
              value: bl
            }),
            groupEnd: ar({}, c, {
              value: Sl
            })
          });
        }
        ri < 0 && r("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var uo = n.ReactCurrentDispatcher, kl;
    function ai(c, p, k) {
      {
        if (kl === void 0)
          try {
            throw Error();
          } catch (W) {
            var D = W.stack.trim().match(/\n( *(at )?)/);
            kl = D && D[1] || "";
          }
        return `
` + kl + c;
      }
    }
    var ii = !1, Pa;
    {
      var oi = typeof WeakMap == "function" ? WeakMap : Map;
      Pa = new oi();
    }
    function li(c, p) {
      if (!c || ii)
        return "";
      {
        var k = Pa.get(c);
        if (k !== void 0)
          return k;
      }
      var D;
      ii = !0;
      var W = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ie;
      ie = uo.current, uo.current = null, zs();
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
            } catch (de) {
              D = de;
            }
            Reflect.construct(c, [], me);
          } else {
            try {
              me.call();
            } catch (de) {
              D = de;
            }
            c.call(me.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (de) {
            D = de;
          }
          c();
        }
      } catch (de) {
        if (de && D && typeof de.stack == "string") {
          for (var Ce = de.stack.split(`
`), l = D.stack.split(`
`), h = Ce.length - 1, S = l.length - 1; h >= 1 && S >= 0 && Ce[h] !== l[S]; )
            S--;
          for (; h >= 1 && S >= 0; h--, S--)
            if (Ce[h] !== l[S]) {
              if (h !== 1 || S !== 1)
                do
                  if (h--, S--, S < 0 || Ce[h] !== l[S]) {
                    var C = `
` + Ce[h].replace(" at new ", " at ");
                    return c.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", c.displayName)), typeof c == "function" && Pa.set(c, C), C;
                  }
                while (h >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        ii = !1, uo.current = ie, Bs(), Error.prepareStackTrace = W;
      }
      var F = c ? c.displayName || c.name : "", Z = F ? ai(F) : "";
      return typeof c == "function" && Pa.set(c, Z), Z;
    }
    function co(c, p, k) {
      return li(c, !0);
    }
    function $s(c, p, k) {
      return li(c, !1);
    }
    function wl(c) {
      var p = c.prototype;
      return !!(p && p.isReactComponent);
    }
    function Tl(c, p, k) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return li(c, wl(c));
      if (typeof c == "string")
        return ai(c);
      switch (c) {
        case ei:
          return ai("Suspense");
        case ti:
          return ai("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case lo:
            return $s(c.render);
          case ni:
            return Tl(c.type, p, k);
          case Ca: {
            var D = c, W = D._payload, ie = D._init;
            try {
              return Tl(ie(W), p, k);
            } catch {
            }
          }
        }
      return "";
    }
    var Cl = {}, Is = n.ReactDebugCurrentFrame;
    function Ra(c) {
      if (c) {
        var p = c._owner, k = Tl(c.type, c._source, p ? p.type : null);
        Is.setExtraStackFrame(k);
      } else
        Is.setExtraStackFrame(null);
    }
    function Al(c, p, k, D, W) {
      {
        var ie = Function.call.bind($);
        for (var me in c)
          if (ie(c, me)) {
            var Ce = void 0;
            try {
              if (typeof c[me] != "function") {
                var l = Error((D || "React class") + ": " + k + " type `" + me + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[me] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw l.name = "Invariant Violation", l;
              }
              Ce = c[me](p, me, D, k, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (h) {
              Ce = h;
            }
            Ce && !(Ce instanceof Error) && (Ra(W), r("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", D || "React class", k, me, typeof Ce), Ra(null)), Ce instanceof Error && !(Ce.message in Cl) && (Cl[Ce.message] = !0, Ra(W), r("Failed %s type: %s", k, Ce.message), Ra(null));
          }
      }
    }
    var fo;
    fo = {};
    var ta = {};
    Object.freeze(ta);
    function Pl(c, p) {
      {
        var k = c.contextTypes;
        if (!k)
          return ta;
        var D = {};
        for (var W in k)
          D[W] = p[W];
        {
          var ie = En(c) || "Unknown";
          Al(k, D, "context", ie);
        }
        return D;
      }
    }
    function Rl(c, p, k, D) {
      {
        if (typeof c.getChildContext != "function") {
          {
            var W = En(p) || "Unknown";
            fo[W] || (fo[W] = !0, r("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", W, W));
          }
          return k;
        }
        var ie = c.getChildContext();
        for (var me in ie)
          if (!(me in D))
            throw new Error((En(p) || "Unknown") + '.getChildContext(): key "' + me + '" is not defined in childContextTypes.');
        {
          var Ce = En(p) || "Unknown";
          Al(D, ie, "child context", Ce);
        }
        return ar({}, k, ie);
      }
    }
    var Hr;
    Hr = {};
    var Hs = null, na = null;
    function ra(c) {
      c.context._currentValue = c.parentValue;
    }
    function Dl(c) {
      c.context._currentValue = c.value;
    }
    function Sr(c, p) {
      if (c !== p) {
        ra(c);
        var k = c.parent, D = p.parent;
        if (k === null) {
          if (D !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (D === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          Sr(k, D);
        }
        Dl(p);
      }
    }
    function ho(c) {
      ra(c);
      var p = c.parent;
      p !== null && ho(p);
    }
    function po(c) {
      var p = c.parent;
      p !== null && po(p), Dl(c);
    }
    function si(c, p) {
      ra(c);
      var k = c.parent;
      if (k === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      k.depth === p.depth ? Sr(k, p) : si(k, p);
    }
    function Ll(c, p) {
      var k = p.parent;
      if (k === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      c.depth === k.depth ? Sr(c, k) : Ll(c, k), Dl(p);
    }
    function ui(c) {
      var p = na, k = c;
      p !== k && (p === null ? po(k) : k === null ? ho(p) : p.depth === k.depth ? Sr(p, k) : p.depth > k.depth ? si(p, k) : Ll(p, k), na = k);
    }
    function Ws(c, p) {
      var k;
      k = c._currentValue, c._currentValue = p, c._currentRenderer !== void 0 && c._currentRenderer !== null && c._currentRenderer !== Hr && r("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), c._currentRenderer = Hr;
      var D = na, W = {
        parent: D,
        depth: D === null ? 0 : D.depth + 1,
        context: c,
        parentValue: k,
        value: p
      };
      return na = W, W;
    }
    function js(c) {
      var p = na;
      if (p === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      p.context !== c && r("The parent context is not the expected context. This is probably a bug in React.");
      {
        var k = p.parentValue;
        k === Wc ? p.context._currentValue = p.context._defaultValue : p.context._currentValue = k, c._currentRenderer !== void 0 && c._currentRenderer !== null && c._currentRenderer !== Hr && r("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), c._currentRenderer = Hr;
      }
      return na = p.parent;
    }
    function mo() {
      return na;
    }
    function ci(c) {
      var p = c._currentValue;
      return p;
    }
    function Ol(c) {
      return c._reactInternals;
    }
    function Uc(c, p) {
      c._reactInternals = p;
    }
    var Da = {}, go = {}, _l, yo, vo, di, xo, La, fi, bo, Oa;
    {
      _l = /* @__PURE__ */ new Set(), yo = /* @__PURE__ */ new Set(), vo = /* @__PURE__ */ new Set(), fi = /* @__PURE__ */ new Set(), di = /* @__PURE__ */ new Set(), bo = /* @__PURE__ */ new Set(), Oa = /* @__PURE__ */ new Set();
      var So = /* @__PURE__ */ new Set();
      La = function(c, p) {
        if (!(c === null || typeof c == "function")) {
          var k = p + "_" + c;
          So.has(k) || (So.add(k), r("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", p, c));
        }
      }, xo = function(c, p) {
        if (p === void 0) {
          var k = En(c) || "Component";
          di.has(k) || (di.add(k), r("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", k));
        }
      };
    }
    function Eo(c, p) {
      {
        var k = c.constructor, D = k && En(k) || "ReactClass", W = D + "." + p;
        if (Da[W])
          return;
        r(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, p, p, D), Da[W] = !0;
      }
    }
    var ko = {
      isMounted: function(c) {
        return !1;
      },
      enqueueSetState: function(c, p, k) {
        var D = Ol(c);
        D.queue === null ? Eo(c, "setState") : (D.queue.push(p), k != null && La(k, "setState"));
      },
      enqueueReplaceState: function(c, p, k) {
        var D = Ol(c);
        D.replace = !0, D.queue = [p], k != null && La(k, "setState");
      },
      enqueueForceUpdate: function(c, p) {
        var k = Ol(c);
        k.queue === null ? Eo(c, "forceUpdate") : p != null && La(p, "setState");
      }
    };
    function Vs(c, p, k, D, W) {
      var ie = k(W, D);
      xo(p, ie);
      var me = ie == null ? D : ar({}, D, ie);
      return me;
    }
    function Us(c, p, k) {
      var D = ta, W = c.contextType;
      if ("contextType" in c) {
        var ie = (
          // Allow null for conditional declaration
          W === null || W !== void 0 && W.$$typeof === oo && W._context === void 0
        );
        if (!ie && !Oa.has(c)) {
          Oa.add(c);
          var me = "";
          W === void 0 ? me = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof W != "object" ? me = " However, it is set to a " + typeof W + "." : W.$$typeof === io ? me = " Did you accidentally pass the Context.Provider instead?" : W._context !== void 0 ? me = " Did you accidentally pass the Context.Consumer instead?" : me = " However, it is set to an object with keys {" + Object.keys(W).join(", ") + "}.", r("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", En(c) || "Component", me);
        }
      }
      typeof W == "object" && W !== null ? D = ci(W) : D = k;
      var Ce = new c(p, D);
      {
        if (typeof c.getDerivedStateFromProps == "function" && (Ce.state === null || Ce.state === void 0)) {
          var l = En(c) || "Component";
          _l.has(l) || (_l.add(l), r("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", l, Ce.state === null ? "null" : "undefined", l));
        }
        if (typeof c.getDerivedStateFromProps == "function" || typeof Ce.getSnapshotBeforeUpdate == "function") {
          var h = null, S = null, C = null;
          if (typeof Ce.componentWillMount == "function" && Ce.componentWillMount.__suppressDeprecationWarning !== !0 ? h = "componentWillMount" : typeof Ce.UNSAFE_componentWillMount == "function" && (h = "UNSAFE_componentWillMount"), typeof Ce.componentWillReceiveProps == "function" && Ce.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? S = "componentWillReceiveProps" : typeof Ce.UNSAFE_componentWillReceiveProps == "function" && (S = "UNSAFE_componentWillReceiveProps"), typeof Ce.componentWillUpdate == "function" && Ce.componentWillUpdate.__suppressDeprecationWarning !== !0 ? C = "componentWillUpdate" : typeof Ce.UNSAFE_componentWillUpdate == "function" && (C = "UNSAFE_componentWillUpdate"), h !== null || S !== null || C !== null) {
            var F = En(c) || "Component", Z = typeof c.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            vo.has(F) || (vo.add(F), r(`Unsafe legacy lifecycles will not be called for components using new component APIs.

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
    function Ks(c, p, k) {
      {
        var D = En(p) || "Component", W = c.render;
        W || (p.prototype && typeof p.prototype.render == "function" ? r("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", D) : r("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", D)), c.getInitialState && !c.getInitialState.isReactClassApproved && !c.state && r("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", D), c.getDefaultProps && !c.getDefaultProps.isReactClassApproved && r("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", D), c.propTypes && r("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", D), c.contextType && r("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", D), c.contextTypes && r("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", D), p.contextType && p.contextTypes && !bo.has(p) && (bo.add(p), r("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", D)), typeof c.componentShouldUpdate == "function" && r("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", D), p.prototype && p.prototype.isPureReactComponent && typeof c.shouldComponentUpdate < "u" && r("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", En(p) || "A pure component"), typeof c.componentDidUnmount == "function" && r("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", D), typeof c.componentDidReceiveProps == "function" && r("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", D), typeof c.componentWillRecieveProps == "function" && r("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", D), typeof c.UNSAFE_componentWillRecieveProps == "function" && r("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", D);
        var ie = c.props !== k;
        c.props !== void 0 && ie && r("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", D, D), c.defaultProps && r("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", D, D), typeof c.getSnapshotBeforeUpdate == "function" && typeof c.componentDidUpdate != "function" && !yo.has(p) && (yo.add(p), r("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", En(p))), typeof c.getDerivedStateFromProps == "function" && r("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", D), typeof c.getDerivedStateFromError == "function" && r("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", D), typeof p.getSnapshotBeforeUpdate == "function" && r("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", D);
        var me = c.state;
        me && (typeof me != "object" || Wt(me)) && r("%s.state: must be set to an object or null", D), typeof c.getChildContext == "function" && typeof p.childContextTypes != "object" && r("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", D);
      }
    }
    function Kc(c, p) {
      var k = p.state;
      if (typeof p.componentWillMount == "function") {
        if (p.componentWillMount.__suppressDeprecationWarning !== !0) {
          var D = En(c) || "Unknown";
          go[D] || (a(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            D
          ), go[D] = !0);
        }
        p.componentWillMount();
      }
      typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), k !== p.state && (r("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", En(c) || "Component"), ko.enqueueReplaceState(p, p.state, null));
    }
    function Yc(c, p, k, D) {
      if (c.queue !== null && c.queue.length > 0) {
        var W = c.queue, ie = c.replace;
        if (c.queue = null, c.replace = !1, ie && W.length === 1)
          p.state = W[0];
        else {
          for (var me = ie ? W[0] : p.state, Ce = !0, l = ie ? 1 : 0; l < W.length; l++) {
            var h = W[l], S = typeof h == "function" ? h.call(p, me, k, D) : h;
            S != null && (Ce ? (Ce = !1, me = ar({}, me, S)) : ar(me, S));
          }
          p.state = me;
        }
      } else
        c.queue = null;
    }
    function Ys(c, p, k, D) {
      Ks(c, p, k);
      var W = c.state !== void 0 ? c.state : null;
      c.updater = ko, c.props = k, c.state = W;
      var ie = {
        queue: [],
        replace: !1
      };
      Uc(c, ie);
      var me = p.contextType;
      if (typeof me == "object" && me !== null ? c.context = ci(me) : c.context = D, c.state === k) {
        var Ce = En(p) || "Component";
        fi.has(Ce) || (fi.add(Ce), r("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", Ce));
      }
      var l = p.getDerivedStateFromProps;
      typeof l == "function" && (c.state = Vs(c, p, l, W, k)), typeof p.getDerivedStateFromProps != "function" && typeof c.getSnapshotBeforeUpdate != "function" && (typeof c.UNSAFE_componentWillMount == "function" || typeof c.componentWillMount == "function") && (Kc(p, c), Yc(ie, c, k, D));
    }
    var Xc = {
      id: 1,
      overflow: ""
    };
    function qc(c) {
      var p = c.overflow, k = c.id, D = k & ~Gc(k);
      return D.toString(32) + p;
    }
    function wo(c, p, k) {
      var D = c.id, W = c.overflow, ie = To(D) - 1, me = D & ~(1 << ie), Ce = k + 1, l = To(p) + ie;
      if (l > 30) {
        var h = ie - ie % 5, S = (1 << h) - 1, C = (me & S).toString(32), F = me >> h, Z = ie - h, de = To(p) + Z, Te = Ce << Z, ze = Te | F, tt = C + W;
        return {
          id: 1 << de | ze,
          overflow: tt
        };
      } else {
        var st = Ce << ie, St = st | me, gn = W;
        return {
          id: 1 << l | St,
          overflow: gn
        };
      }
    }
    function To(c) {
      return 32 - Ml(c);
    }
    function Gc(c) {
      return 1 << To(c) - 1;
    }
    var Ml = Math.clz32 ? Math.clz32 : Qc, Co = Math.log, Zc = Math.LN2;
    function Qc(c) {
      var p = c >>> 0;
      return p === 0 ? 32 : 31 - (Co(p) / Zc | 0) | 0;
    }
    function Jc(c, p) {
      return c === p && (c !== 0 || 1 / c === 1 / p) || c !== c && p !== p;
    }
    var ed = typeof Object.is == "function" ? Object.is : Jc, Dr = null, Nl = null, Ao = null, zt = null, aa = !1, ia = !1, Jt = 0, ir = null, oa = 0, Po = 25, Nn = !1, Lr;
    function la() {
      if (Dr === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Nn && r("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Dr;
    }
    function Er(c, p) {
      if (p === null)
        return r("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Lr), !1;
      c.length !== p.length && r(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Lr, "[" + c.join(", ") + "]", "[" + p.join(", ") + "]");
      for (var k = 0; k < p.length && k < c.length; k++)
        if (!ed(c[k], p[k]))
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
    function Or() {
      return zt === null ? Ao === null ? (aa = !1, Ao = zt = sa()) : (aa = !0, zt = Ao) : zt.next === null ? (aa = !1, zt = zt.next = sa()) : (aa = !0, zt = zt.next), zt;
    }
    function td(c, p) {
      Dr = p, Nl = c, Nn = !1, Jt = 0;
    }
    function Xs(c, p, k, D) {
      for (; ia; )
        ia = !1, Jt = 0, oa += 1, zt = null, k = c(p, D);
      return Fl(), k;
    }
    function Ro() {
      var c = Jt !== 0;
      return c;
    }
    function Fl() {
      Nn = !1, Dr = null, Nl = null, ia = !1, Ao = null, oa = 0, ir = null, zt = null;
    }
    function nd(c) {
      return Nn && r("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), ci(c);
    }
    function qs(c) {
      return Lr = "useContext", la(), ci(c);
    }
    function hi(c, p) {
      return typeof p == "function" ? p(c) : p;
    }
    function rd(c) {
      return Lr = "useState", Gs(
        hi,
        // useReducer has a special case to support lazy useState initializers
        c
      );
    }
    function Gs(c, p, k) {
      if (c !== hi && (Lr = "useReducer"), Dr = la(), zt = Or(), aa) {
        var D = zt.queue, W = D.dispatch;
        if (ir !== null) {
          var ie = ir.get(D);
          if (ie !== void 0) {
            ir.delete(D);
            var me = zt.memoizedState, Ce = ie;
            do {
              var l = Ce.action;
              Nn = !0, me = c(me, l), Nn = !1, Ce = Ce.next;
            } while (Ce !== null);
            return zt.memoizedState = me, [me, W];
          }
        }
        return [zt.memoizedState, W];
      } else {
        Nn = !0;
        var h;
        c === hi ? h = typeof p == "function" ? p() : p : h = k !== void 0 ? k(p) : p, Nn = !1, zt.memoizedState = h;
        var S = zt.queue = {
          last: null,
          dispatch: null
        }, C = S.dispatch = Qs.bind(null, Dr, S);
        return [zt.memoizedState, C];
      }
    }
    function Do(c, p) {
      Dr = la(), zt = Or();
      var k = p === void 0 ? null : p;
      if (zt !== null) {
        var D = zt.memoizedState;
        if (D !== null && k !== null) {
          var W = D[1];
          if (Er(k, W))
            return D[0];
        }
      }
      Nn = !0;
      var ie = c();
      return Nn = !1, zt.memoizedState = [ie, k], ie;
    }
    function ad(c) {
      Dr = la(), zt = Or();
      var p = zt.memoizedState;
      if (p === null) {
        var k = {
          current: c
        };
        return Object.seal(k), zt.memoizedState = k, k;
      } else
        return p;
    }
    function Zs(c, p) {
      Lr = "useLayoutEffect", r("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Qs(c, p, k) {
      if (oa >= Po)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (c === Dr) {
        ia = !0;
        var D = {
          action: k,
          next: null
        };
        ir === null && (ir = /* @__PURE__ */ new Map());
        var W = ir.get(p);
        if (W === void 0)
          ir.set(p, D);
        else {
          for (var ie = W; ie.next !== null; )
            ie = ie.next;
          ie.next = D;
        }
      }
    }
    function id(c, p) {
      return Do(function() {
        return c;
      }, p);
    }
    function od(c, p, k) {
      return la(), p(c._source);
    }
    function ld(c, p, k) {
      if (k === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return k();
    }
    function sd(c) {
      return la(), c;
    }
    function ud() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function cd() {
      return la(), [!1, ud];
    }
    function dd() {
      var c = Nl, p = qc(c.treeContext), k = zl;
      if (k === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var D = Jt++;
      return cr(k, p, D);
    }
    function Lo() {
    }
    var Js = {
      readContext: nd,
      useContext: qs,
      useMemo: Do,
      useReducer: Gs,
      useRef: ad,
      useState: rd,
      useInsertionEffect: Lo,
      useLayoutEffect: Zs,
      useCallback: id,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: Lo,
      // Effects are not run in the server environment.
      useEffect: Lo,
      // Debugging effect
      useDebugValue: Lo,
      useDeferredValue: sd,
      useTransition: cd,
      useId: dd,
      // Subscriptions are not setup in a server environment.
      useMutableSource: od,
      useSyncExternalStore: ld
    }, zl = null;
    function pi(c) {
      zl = c;
    }
    function eu(c) {
      try {
        var p = "", k = c;
        do {
          switch (k.tag) {
            case 0:
              p += ai(k.type, null, null);
              break;
            case 1:
              p += $s(k.type, null, null);
              break;
            case 2:
              p += co(k.type, null, null);
              break;
          }
          k = k.parent;
        } while (k);
        return p;
      } catch (D) {
        return `
Error generating stack: ` + D.message + `
` + D.stack;
      }
    }
    var mi = n.ReactCurrentDispatcher, Oo = n.ReactDebugCurrentFrame, Bl = 0, Wr = 1, _o = 2, Mo = 3, ua = 4, tu = 0, $l = 1, ca = 2, fd = 12800;
    function nu(c) {
      return console.error(c), null;
    }
    function kr() {
    }
    function hd(c, p, k, D, W, ie, me, Ce, l) {
      var h = [], S = /* @__PURE__ */ new Set(), C = {
        destination: null,
        responseState: p,
        progressiveChunkSize: D === void 0 ? fd : D,
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
        onError: W === void 0 ? nu : W,
        onAllReady: ie === void 0 ? kr : ie,
        onShellReady: me === void 0 ? kr : me,
        onShellError: Ce === void 0 ? kr : Ce,
        onFatalError: l === void 0 ? kr : l
      }, F = No(
        C,
        0,
        null,
        k,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      F.parentFlushed = !0;
      var Z = Il(C, c, null, F, S, ta, Hs, Xc);
      return h.push(Z), C;
    }
    function pd(c, p) {
      var k = c.pingedTasks;
      k.push(p), k.length === 1 && s(function() {
        return Si(c);
      });
    }
    function gi(c, p) {
      return {
        id: gr,
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
    function Il(c, p, k, D, W, ie, me, Ce) {
      c.allPendingTasks++, k === null ? c.pendingRootTasks++ : k.pendingTasks++;
      var l = {
        node: p,
        ping: function() {
          return pd(c, l);
        },
        blockedBoundary: k,
        blockedSegment: D,
        abortSet: W,
        legacyContext: ie,
        context: me,
        treeContext: Ce
      };
      return l.componentStack = null, W.add(l), l;
    }
    function No(c, p, k, D, W, ie) {
      return {
        status: Bl,
        id: -1,
        // lazily assigned later
        index: p,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: D,
        boundary: k,
        lastPushedText: W,
        textEmbedded: ie
      };
    }
    var _r = null;
    function yi() {
      return _r === null || _r.componentStack === null ? "" : eu(_r.componentStack);
    }
    function jr(c, p) {
      c.componentStack = {
        tag: 0,
        parent: c.componentStack,
        type: p
      };
    }
    function wr(c, p) {
      c.componentStack = {
        tag: 1,
        parent: c.componentStack,
        type: p
      };
    }
    function Hl(c, p) {
      c.componentStack = {
        tag: 2,
        parent: c.componentStack,
        type: p
      };
    }
    function or(c) {
      c.componentStack === null ? r("Unexpectedly popped too many stack frames. This is a bug in React.") : c.componentStack = c.componentStack.parent;
    }
    var _a = null;
    function Wl(c, p) {
      {
        var k;
        typeof p == "string" ? k = p : p && typeof p.message == "string" ? k = p.message : k = String(p);
        var D = _a || yi();
        _a = null, c.errorMessage = k, c.errorComponentStack = D;
      }
    }
    function lr(c, p) {
      var k = c.onError(p);
      if (k != null && typeof k != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof k + '" instead');
      return k;
    }
    function Vr(c, p) {
      var k = c.onShellError;
      k(p);
      var D = c.onFatalError;
      D(p), c.destination !== null ? (c.status = ca, A(c.destination, p)) : (c.status = $l, c.fatalError = p);
    }
    function jl(c, p, k) {
      jr(p, "Suspense");
      var D = p.blockedBoundary, W = p.blockedSegment, ie = k.fallback, me = k.children, Ce = /* @__PURE__ */ new Set(), l = gi(c, Ce), h = W.chunks.length, S = No(
        c,
        h,
        l,
        W.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      W.children.push(S), W.lastPushedText = !1;
      var C = No(
        c,
        0,
        null,
        W.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      C.parentFlushed = !0, p.blockedBoundary = l, p.blockedSegment = C;
      try {
        if (Ql(c, p, me), fr(C.chunks, c.responseState, C.lastPushedText, C.textEmbedded), C.status = Wr, Bo(l, C), l.pendingTasks === 0) {
          or(p);
          return;
        }
      } catch (Z) {
        C.status = ua, l.forceClientRender = !0, l.errorDigest = lr(c, Z), Wl(l, Z);
      } finally {
        p.blockedBoundary = D, p.blockedSegment = W;
      }
      var F = Il(c, ie, D, S, Ce, p.legacyContext, p.context, p.treeContext);
      F.componentStack = p.componentStack, c.pingedTasks.push(F), or(p);
    }
    function vi(c, p, k, D) {
      jr(p, k);
      var W = p.blockedSegment, ie = Xa(W.chunks, k, D, c.responseState, W.formatContext);
      W.lastPushedText = !1;
      var me = W.formatContext;
      W.formatContext = nr(me, k, D), Ql(c, p, ie), W.formatContext = me, Yi(W.chunks, k), W.lastPushedText = !1, or(p);
    }
    function Fo(c) {
      return c.prototype && c.prototype.isReactComponent;
    }
    function ru(c, p, k, D, W) {
      var ie = {};
      td(p, ie);
      var me = k(D, W);
      return Xs(k, D, me, W);
    }
    function au(c, p, k, D, W) {
      var ie = k.render();
      k.props !== W && (bi || r("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", En(D) || "a component"), bi = !0);
      {
        var me = D.childContextTypes;
        if (me != null) {
          var Ce = p.legacyContext, l = Rl(k, D, Ce, me);
          p.legacyContext = l, Qn(c, p, ie), p.legacyContext = Ce;
          return;
        }
      }
      Qn(c, p, ie);
    }
    function md(c, p, k, D) {
      Hl(p, k);
      var W = Pl(k, p.legacyContext), ie = Us(k, D, W);
      Ys(ie, k, D, W), au(c, p, ie, k, D), or(p);
    }
    var Vl = {}, xi = {}, iu = {}, Ul = {}, bi = !1, Kl = !1, Yl = !1, Xl = !1;
    function ou(c, p, k, D) {
      var W;
      if (W = Pl(k, p.legacyContext), wr(p, k), k.prototype && typeof k.prototype.render == "function") {
        var ie = En(k) || "Unknown";
        Vl[ie] || (r("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", ie, ie), Vl[ie] = !0);
      }
      var me = ru(c, p, k, D, W), Ce = Ro();
      if (typeof me == "object" && me !== null && typeof me.render == "function" && me.$$typeof === void 0) {
        var l = En(k) || "Unknown";
        xi[l] || (r("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", l, l, l), xi[l] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof me == "object" && me !== null && typeof me.render == "function" && me.$$typeof === void 0
      ) {
        {
          var h = En(k) || "Unknown";
          xi[h] || (r("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", h, h, h), xi[h] = !0);
        }
        Ys(me, k, D, W), au(c, p, me, k, D);
      } else if (lu(k), Ce) {
        var S = p.treeContext, C = 1, F = 0;
        p.treeContext = wo(S, C, F);
        try {
          Qn(c, p, me);
        } finally {
          p.treeContext = S;
        }
      } else
        Qn(c, p, me);
      or(p);
    }
    function lu(c) {
      {
        if (c && c.childContextTypes && r("%s(...): childContextTypes cannot be defined on a function component.", c.displayName || c.name || "Component"), typeof c.getDerivedStateFromProps == "function") {
          var p = En(c) || "Unknown";
          Ul[p] || (r("%s: Function components do not support getDerivedStateFromProps.", p), Ul[p] = !0);
        }
        if (typeof c.contextType == "object" && c.contextType !== null) {
          var k = En(c) || "Unknown";
          iu[k] || (r("%s: Function components do not support contextType.", k), iu[k] = !0);
        }
      }
    }
    function ql(c, p) {
      if (c && c.defaultProps) {
        var k = ar({}, p), D = c.defaultProps;
        for (var W in D)
          k[W] === void 0 && (k[W] = D[W]);
        return k;
      }
      return p;
    }
    function gd(c, p, k, D, W) {
      wr(p, k.render);
      var ie = ru(c, p, k.render, D, W), me = Ro();
      if (me) {
        var Ce = p.treeContext, l = 1, h = 0;
        p.treeContext = wo(Ce, l, h);
        try {
          Qn(c, p, ie);
        } finally {
          p.treeContext = Ce;
        }
      } else
        Qn(c, p, ie);
      or(p);
    }
    function yd(c, p, k, D, W) {
      var ie = k.type, me = ql(ie, D);
      Gl(c, p, ie, me, W);
    }
    function su(c, p, k, D) {
      k._context === void 0 ? k !== k.Consumer && (Xl || (Xl = !0, r("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : k = k._context;
      var W = D.children;
      typeof W != "function" && r("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var ie = ci(k), me = W(ie);
      Qn(c, p, me);
    }
    function vd(c, p, k, D) {
      var W = k._context, ie = D.value, me = D.children, Ce;
      Ce = p.context, p.context = Ws(W, ie), Qn(c, p, me), p.context = js(W), Ce !== p.context && r("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function xd(c, p, k, D, W) {
      jr(p, "Lazy");
      var ie = k._payload, me = k._init, Ce = me(ie), l = ql(Ce, D);
      Gl(c, p, Ce, l, W), or(p);
    }
    function Gl(c, p, k, D, W) {
      if (typeof k == "function")
        if (Fo(k)) {
          md(c, p, k, D);
          return;
        } else {
          ou(c, p, k, D);
          return;
        }
      if (typeof k == "string") {
        vi(c, p, k, D);
        return;
      }
      switch (k) {
        case so:
        case gl:
        case _s:
        case pl:
        case Zn: {
          Qn(c, p, D.children);
          return;
        }
        case ti: {
          jr(p, "SuspenseList"), Qn(c, p, D.children), or(p);
          return;
        }
        case ml:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case ei: {
          jl(c, p, D);
          return;
        }
      }
      if (typeof k == "object" && k !== null)
        switch (k.$$typeof) {
          case lo: {
            gd(c, p, k, D, W);
            return;
          }
          case ni: {
            yd(c, p, k, D, W);
            return;
          }
          case io: {
            vd(c, p, k, D);
            return;
          }
          case oo: {
            su(c, p, k, D);
            return;
          }
          case Ca: {
            xd(c, p, k, D);
            return;
          }
        }
      var ie = "";
      throw (k === void 0 || typeof k == "object" && k !== null && Object.keys(k).length === 0) && (ie += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (k == null ? k : typeof k) + "." + ie));
    }
    function bd(c, p) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      c[Symbol.toStringTag] === "Generator" && (Kl || r("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Kl = !0), c.entries === p && (Yl || r("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Yl = !0);
    }
    function Qn(c, p, k) {
      try {
        return Zl(c, p, k);
      } catch (D) {
        throw typeof D == "object" && D !== null && typeof D.then == "function" || (_a = _a !== null ? _a : yi()), D;
      }
    }
    function Zl(c, p, k) {
      if (p.node = k, typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Hc: {
            var D = k, W = D.type, ie = D.props, me = D.ref;
            Gl(c, p, W, ie, me);
            return;
          }
          case Os:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case Ca: {
            var Ce = k, l = Ce._payload, h = Ce._init, S;
            try {
              S = h(l);
            } catch (st) {
              throw typeof st == "object" && st !== null && typeof st.then == "function" && jr(p, "Lazy"), st;
            }
            Qn(c, p, S);
            return;
          }
        }
        if (Wt(k)) {
          uu(c, p, k);
          return;
        }
        var C = Vc(k);
        if (C) {
          bd(k, C);
          var F = C.call(k);
          if (F) {
            var Z = F.next();
            if (!Z.done) {
              var de = [];
              do
                de.push(Z.value), Z = F.next();
              while (!Z.done);
              uu(c, p, de);
              return;
            }
            return;
          }
        }
        var Te = Object.prototype.toString.call(k);
        throw new Error("Objects are not valid as a React child (found: " + (Te === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : Te) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof k == "string") {
        var ze = p.blockedSegment;
        ze.lastPushedText = dr(p.blockedSegment.chunks, k, c.responseState, ze.lastPushedText);
        return;
      }
      if (typeof k == "number") {
        var tt = p.blockedSegment;
        tt.lastPushedText = dr(p.blockedSegment.chunks, "" + k, c.responseState, tt.lastPushedText);
        return;
      }
      typeof k == "function" && r("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function uu(c, p, k) {
      for (var D = k.length, W = 0; W < D; W++) {
        var ie = p.treeContext;
        p.treeContext = wo(ie, D, W);
        try {
          Ql(c, p, k[W]);
        } finally {
          p.treeContext = ie;
        }
      }
    }
    function Jn(c, p, k) {
      var D = p.blockedSegment, W = D.chunks.length, ie = No(
        c,
        W,
        null,
        D.formatContext,
        // Adopt the parent segment's leading text embed
        D.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      D.children.push(ie), D.lastPushedText = !1;
      var me = Il(c, p.node, p.blockedBoundary, ie, p.abortSet, p.legacyContext, p.context, p.treeContext);
      p.componentStack !== null && (me.componentStack = p.componentStack.parent);
      var Ce = me.ping;
      k.then(Ce, Ce);
    }
    function Ql(c, p, k) {
      var D = p.blockedSegment.formatContext, W = p.legacyContext, ie = p.context, me = null;
      me = p.componentStack;
      try {
        return Qn(c, p, k);
      } catch (Ce) {
        if (Fl(), typeof Ce == "object" && Ce !== null && typeof Ce.then == "function") {
          Jn(c, p, Ce), p.blockedSegment.formatContext = D, p.legacyContext = W, p.context = ie, ui(ie), p.componentStack = me;
          return;
        } else
          throw p.blockedSegment.formatContext = D, p.legacyContext = W, p.context = ie, ui(ie), p.componentStack = me, Ce;
      }
    }
    function cu(c, p, k, D) {
      var W = lr(c, D);
      if (p === null ? Vr(c, D) : (p.pendingTasks--, p.forceClientRender || (p.forceClientRender = !0, p.errorDigest = W, Wl(p, D), p.parentFlushed && c.clientRenderedBoundaries.push(p))), c.allPendingTasks--, c.allPendingTasks === 0) {
        var ie = c.onAllReady;
        ie();
      }
    }
    function Sd(c) {
      var p = this, k = c.blockedBoundary, D = c.blockedSegment;
      D.status = Mo, du(p, k, D);
    }
    function zo(c, p, k) {
      var D = c.blockedBoundary, W = c.blockedSegment;
      if (W.status = Mo, D === null)
        p.allPendingTasks--, p.status !== ca && (p.status = ca, p.destination !== null && w(p.destination));
      else {
        if (D.pendingTasks--, !D.forceClientRender) {
          D.forceClientRender = !0;
          var ie = k === void 0 ? new Error("The render was aborted by the server without a reason.") : k;
          D.errorDigest = p.onError(ie);
          {
            var me = "The server did not finish this Suspense boundary: ";
            ie && typeof ie.message == "string" ? ie = me + ie.message : ie = me + String(ie);
            var Ce = _r;
            _r = c;
            try {
              Wl(D, ie);
            } finally {
              _r = Ce;
            }
          }
          D.parentFlushed && p.clientRenderedBoundaries.push(D);
        }
        if (D.fallbackAbortableTasks.forEach(function(h) {
          return zo(h, p, k);
        }), D.fallbackAbortableTasks.clear(), p.allPendingTasks--, p.allPendingTasks === 0) {
          var l = p.onAllReady;
          l();
        }
      }
    }
    function Bo(c, p) {
      if (p.chunks.length === 0 && p.children.length === 1 && p.children[0].boundary === null) {
        var k = p.children[0];
        k.id = p.id, k.parentFlushed = !0, k.status === Wr && Bo(c, k);
      } else {
        var D = c.completedSegments;
        D.push(p);
      }
    }
    function du(c, p, k) {
      if (p === null) {
        if (k.parentFlushed) {
          if (c.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          c.completedRootSegment = k;
        }
        if (c.pendingRootTasks--, c.pendingRootTasks === 0) {
          c.onShellError = kr;
          var D = c.onShellReady;
          D();
        }
      } else if (p.pendingTasks--, !p.forceClientRender) {
        if (p.pendingTasks === 0)
          k.parentFlushed && k.status === Wr && Bo(p, k), p.parentFlushed && c.completedBoundaries.push(p), p.fallbackAbortableTasks.forEach(Sd, c), p.fallbackAbortableTasks.clear();
        else if (k.parentFlushed && k.status === Wr) {
          Bo(p, k);
          var W = p.completedSegments;
          W.length === 1 && p.parentFlushed && c.partialBoundaries.push(p);
        }
      }
      if (c.allPendingTasks--, c.allPendingTasks === 0) {
        var ie = c.onAllReady;
        ie();
      }
    }
    function fu(c, p) {
      var k = p.blockedSegment;
      if (k.status === Bl) {
        ui(p.context);
        var D = null;
        D = _r, _r = p;
        try {
          Qn(c, p, p.node), fr(k.chunks, c.responseState, k.lastPushedText, k.textEmbedded), p.abortSet.delete(p), k.status = Wr, du(c, p.blockedBoundary, k);
        } catch (ie) {
          if (Fl(), typeof ie == "object" && ie !== null && typeof ie.then == "function") {
            var W = p.ping;
            ie.then(W, W);
          } else
            p.abortSet.delete(p), k.status = ua, cu(c, p.blockedBoundary, k, ie);
        } finally {
          _r = D;
        }
      }
    }
    function Si(c) {
      if (c.status !== ca) {
        var p = mo(), k = mi.current;
        mi.current = Js;
        var D;
        D = Oo.getCurrentStack, Oo.getCurrentStack = yi;
        var W = zl;
        pi(c.responseState);
        try {
          var ie = c.pingedTasks, me;
          for (me = 0; me < ie.length; me++) {
            var Ce = ie[me];
            fu(c, Ce);
          }
          ie.splice(0, me), c.destination !== null && Io(c, c.destination);
        } catch (l) {
          lr(c, l), Vr(c, l);
        } finally {
          pi(W), mi.current = k, Oo.getCurrentStack = D, k === Js && ui(p);
        }
      }
    }
    function Ei(c, p, k) {
      switch (k.parentFlushed = !0, k.status) {
        case Bl: {
          var D = k.id = c.nextSegmentId++;
          return k.lastPushedText = !1, k.textEmbedded = !1, ya(p, c.responseState, D);
        }
        case Wr: {
          k.status = _o;
          for (var W = !0, ie = k.chunks, me = 0, Ce = k.children, l = 0; l < Ce.length; l++) {
            for (var h = Ce[l]; me < h.index; me++)
              v(p, ie[me]);
            W = $o(c, p, h);
          }
          for (; me < ie.length - 1; me++)
            v(p, ie[me]);
          return me < ie.length && (W = y(p, ie[me])), W;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function $o(c, p, k) {
      var D = k.boundary;
      if (D === null)
        return Ei(c, p, k);
      if (D.parentFlushed = !0, D.forceClientRender)
        return In(p, c.responseState, D.errorDigest, D.errorMessage, D.errorComponentStack), Ei(c, p, k), ul(p, c.responseState);
      if (D.pendingTasks > 0) {
        D.rootSegmentID = c.nextSegmentId++, D.completedSegments.length > 0 && c.partialBoundaries.push(D);
        var W = D.id = yr(c.responseState);
        return ba(p, c.responseState, W), Ei(c, p, k), Sa(p, c.responseState);
      } else {
        if (D.byteSize > c.progressiveChunkSize)
          return D.rootSegmentID = c.nextSegmentId++, c.completedBoundaries.push(D), ba(p, c.responseState, D.id), Ei(c, p, k), Sa(p, c.responseState);
        qi(p, c.responseState);
        var ie = D.completedSegments;
        if (ie.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var me = ie[0];
        return $o(c, p, me), Gi(p, c.responseState);
      }
    }
    function hu(c, p, k) {
      return Ds(p, c.responseState, k.id, k.errorDigest, k.errorMessage, k.errorComponentStack);
    }
    function ki(c, p, k) {
      return At(p, c.responseState, k.formatContext, k.id), $o(c, p, k), sn(p, k.formatContext);
    }
    function wi(c, p, k) {
      for (var D = k.completedSegments, W = 0; W < D.length; W++) {
        var ie = D[W];
        Jl(c, p, k, ie);
      }
      return D.length = 0, cl(p, c.responseState, k.id, k.rootSegmentID);
    }
    function Ed(c, p, k) {
      for (var D = k.completedSegments, W = 0; W < D.length; W++) {
        var ie = D[W];
        if (!Jl(c, p, k, ie))
          return W++, D.splice(0, W), !1;
      }
      return D.splice(0, W), !0;
    }
    function Jl(c, p, k, D) {
      if (D.status === _o)
        return !0;
      var W = D.id;
      if (W === -1) {
        var ie = D.id = k.rootSegmentID;
        if (ie === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return ki(c, p, D);
      } else
        return ki(c, p, D), _c(p, c.responseState, W);
    }
    function Io(c, p) {
      g();
      try {
        var k = c.completedRootSegment;
        k !== null && c.pendingRootTasks === 0 && ($o(c, p, k), c.completedRootSegment = null, ol(p, c.responseState));
        var D = c.clientRenderedBoundaries, W;
        for (W = 0; W < D.length; W++) {
          var ie = D[W];
          hu(c, p, ie);
        }
        D.splice(0, W);
        var me = c.completedBoundaries;
        for (W = 0; W < me.length; W++) {
          var Ce = me[W];
          wi(c, p, Ce);
        }
        me.splice(0, W), E(p), g(p);
        var l = c.partialBoundaries;
        for (W = 0; W < l.length; W++) {
          var h = l[W];
          if (!Ed(c, p, h)) {
            c.destination = null, W++, l.splice(0, W);
            return;
          }
        }
        l.splice(0, W);
        var S = c.completedBoundaries;
        for (W = 0; W < S.length; W++) {
          var C = S[W];
          wi(c, p, C);
        }
        S.splice(0, W);
      } finally {
        E(p), c.allPendingTasks === 0 && c.pingedTasks.length === 0 && c.clientRenderedBoundaries.length === 0 && c.completedBoundaries.length === 0 && (c.abortableTasks.size !== 0 && r("There was still abortable task at the root when we closed. This is a bug in React."), w(p));
      }
    }
    function kd(c) {
      s(function() {
        return Si(c);
      });
    }
    function pu(c, p) {
      if (c.status === $l) {
        c.status = ca, A(p, c.fatalError);
        return;
      }
      if (c.status !== ca && c.destination === null) {
        c.destination = p;
        try {
          Io(c, p);
        } catch (k) {
          lr(c, k), Vr(c, k);
        }
      }
    }
    function Ho(c, p) {
      try {
        var k = c.abortableTasks;
        k.forEach(function(D) {
          return zo(D, c, p);
        }), k.clear(), c.destination !== null && Io(c, c.destination);
      } catch (D) {
        lr(c, D), Vr(c, D);
      }
    }
    function wd(c, p) {
      return new Promise(function(k, D) {
        var W, ie, me = new Promise(function(F, Z) {
          ie = F, W = Z;
        });
        function Ce() {
          var F = new ReadableStream(
            {
              type: "bytes",
              pull: function(Z) {
                pu(h, Z);
              },
              cancel: function(Z) {
                Ho(h);
              }
            },
            // $FlowFixMe size() methods are not allowed on byte streams.
            {
              highWaterMark: 0
            }
          );
          F.allReady = me, k(F);
        }
        function l(F) {
          me.catch(function() {
          }), D(F);
        }
        var h = hd(c, mn(p ? p.identifierPrefix : void 0, p ? p.nonce : void 0, p ? p.bootstrapScriptContent : void 0, p ? p.bootstrapScripts : void 0, p ? p.bootstrapModules : void 0), jn(p ? p.namespaceURI : void 0), p ? p.progressiveChunkSize : void 0, p ? p.onError : void 0, ie, Ce, l, W);
        if (p && p.signal) {
          var S = p.signal, C = function() {
            Ho(h, S.reason), S.removeEventListener("abort", C);
          };
          S.addEventListener("abort", C);
        }
        kd(h);
      });
    }
    Lu.renderToReadableStream = wd, Lu.version = t;
  }()), Lu;
}
var Wi, Pf;
process.env.NODE_ENV === "production" ? (Wi = kE(), Pf = wE()) : (Wi = TE(), Pf = CE());
Va.version = Wi.version;
Va.renderToString = Wi.renderToString;
Va.renderToStaticMarkup = Wi.renderToStaticMarkup;
Va.renderToNodeStream = Wi.renderToNodeStream;
Va.renderToStaticNodeStream = Wi.renderToStaticNodeStream;
Va.renderToReadableStream = Pf.renderToReadableStream;
const AE = ({ width: e, height: t }) => {
  var G, he;
  const { config: n } = ue.useContext(Ct), { sankey: a } = n, r = n == null ? void 0 : n.data[0], [o, s] = ue.useState(0), u = ue.useRef([]), [d, f] = ue.useState(""), g = (ee) => {
    f(ee);
  }, v = () => {
    f("");
  }, [y, E] = ue.useState(!1), [w, O] = ue.useState("top");
  ue.useEffect(() => {
    window.innerWidth < 768 && window.innerHeight > window.innerWidth ? (E(!0), O("bottom"), console.log("position " + w)) : E(!1);
  }, [window.innerWidth]), ue.useEffect(() => {
    var ge;
    let ee = 0;
    (ge = u == null ? void 0 : u.current) == null || ge.map((be) => {
      const _e = be == null ? void 0 : be.getBoundingClientRect().width;
      _e > ee && (ee = _e);
    }), s(ee);
  }, [u, a]);
  const T = Array.from(new Set((G = r == null ? void 0 : r.links) == null ? void 0 : G.flatMap((ee) => [ee.source, ee.target]))), m = {
    nodes: T.map((ee) => ({ id: ee })),
    links: (he = r == null ? void 0 : r.links) == null ? void 0 : he.map((ee) => ({
      source: T.findIndex((ge) => ge === ee.source),
      target: T.findIndex((ge) => ge === ee.target),
      value: ee.value
    }))
  };
  let A = 5;
  const _ = 50, L = xE().nodeWidth(a.nodeSize.nodeWidth).nodePadding(a.nodePadding).iterations(a.iterations).nodeAlign(pE).extent([
    [a.margin.margin_x, Number(a.margin.margin_y)],
    [e - A - o, n.heights.vertical - _]
  ]), { nodes: N, links: M } = L(m), U = (ee) => {
    var Qe;
    let ge = 30, be = 0, _e = "node-value--storynode", Ve = !0;
    return (Qe = r == null ? void 0 : r.storyNodeText) != null && Qe.every((Ae) => Ae.StoryNode !== ee) && (Ve = !1, be = 10, ge = 8, _e = "node-value"), { textPositionHorizontal: ge, textPositionVertical: be, classStyle: _e, storyNodes: Ve };
  }, j = (ee) => {
    const ge = m.nodes.find((Ve) => Ve.id === ee), be = [], _e = [];
    return ge && (M.forEach((Ve) => {
      const Qe = Ve.target, Ae = Ve.source;
      Qe.id === ee && be.push(Ae.id);
    }), be.forEach((Ve) => {
      M.forEach((Qe) => {
        const Ae = Qe.target, ve = Qe.source;
        Ae.id === d && ve.id === Ve && _e.push(Qe);
      });
    })), { sourceNodes: be, activeLinks: _e };
  }, $ = `${((r == null ? void 0 : r.tooltips.find((ee) => ee.node === d)) || {}).value}`, V = `${((r == null ? void 0 : r.tooltips.find((ee) => ee.node === d)) || {}).summary}`, ne = ((r == null ? void 0 : r.tooltips.find((ee) => ee.node === d)) || {}).column1Label, H = ((r == null ? void 0 : r.tooltips.find((ee) => ee.node === d)) || {}).column2Label, oe = ((r == null ? void 0 : r.tooltips.find((ee) => ee.node === d)) || {}).column1, fe = ((r == null ? void 0 : r.tooltips.find((ee) => ee.node === d)) || {}).column2, I = ({ columnData: ee }) => /* @__PURE__ */ i.createElement("ul", null, ee == null ? void 0 : ee.map((ge, be) => /* @__PURE__ */ i.createElement("li", { key: be }, ge.label, ": ", ge.value, " (", ge.additional_info, "%)"))), Q = Va.renderToString(/* @__PURE__ */ i.createElement(I, { columnData: oe })), q = Va.renderToString(/* @__PURE__ */ i.createElement(I, { columnData: fe })), se = `<div class="sankey-chart__tooltip">
                    <span class="sankey-chart__tooltip--tooltip-header">${d}</span>
                    <span class="sankey-chart__tooltip--tooltip-header">${$}</span>
                    <div class="divider"></div>
                    <span><strong>Summary: </strong>${V}</span>
                    <div class="divider"></div>
                      <div class="sankey-chart__tooltip--info-section">
                        <div>
                          <span><strong>${ne}<strong></span>
                          ${Q}
                        </div>
                        <div>
                          <span><strong>${H}<strong></span>
                          ${q}
                        </div>
                      </div>
                    </div>`, ae = m.nodes.map((ee, ge) => {
    var le, Be;
    let { textPositionHorizontal: be, textPositionVertical: _e, classStyle: Ve, storyNodes: Qe } = U(ee.id), { sourceNodes: Ae } = j(d), ve = a.opacity.nodeOpacityDefault, Ee = a.nodeColor.default;
    return d !== ee.id && d !== "" && !Ae.includes(ee.id) && (Ee = a.nodeColor.inactive, ve = a.opacity.nodeOpacityInactive), /* @__PURE__ */ i.createElement(rt, { className: "", key: ge, innerRef: (Ne) => u.current[ge] = Ne }, /* @__PURE__ */ i.createElement(
      "rect",
      {
        height: ee.y1 - ee.y0 + 2,
        width: L.nodeWidth(),
        x: ee.x0,
        y: ee.y0 - 1,
        fill: Ee,
        fillOpacity: ve,
        rx: a.rxValue,
        "data-tooltip-html": r.tooltips && n.enableTooltips ? se : null,
        "data-tooltip-id": "tooltip",
        onClick: () => g(ee.id),
        style: { pointerEvents: "visible", cursor: "pointer" }
      }
    ), Qe ? /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
      Pt,
      {
        x: ee.x0 + be,
        textAnchor: m.nodes.length - 1 === ge ? "end" : "start",
        verticalAnchor: "end",
        y: (ee.y1 + ee.y0) / 2 - 30,
        fill: a.nodeFontColor,
        fontWeight: "bold",
        style: { pointerEvents: "none" },
        className: "node-text"
      },
      (((le = r == null ? void 0 : r.storyNodeText) == null ? void 0 : le.find((Ne) => Ne.StoryNode === ee.id)) || {}).segmentTextBefore
    ), /* @__PURE__ */ i.createElement(Pt, { verticalAnchor: "end", className: Ve, x: ee.x0 + be, y: (ee.y1 + ee.y0 + 25) / 2, fill: a.storyNodeFontColor || a.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, typeof ee.value == "number" ? ee.value.toLocaleString() : ee.value), /* @__PURE__ */ i.createElement(
      Pt,
      {
        x: ee.x0 + be,
        y: (ee.y1 + ee.y0) / 2 + 50,
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: m.nodes.length === ge ? "end" : "start",
        style: { pointerEvents: "none" },
        className: "node-text",
        verticalAnchor: "end"
      },
      (((Be = r == null ? void 0 : r.storyNodeText) == null ? void 0 : Be.find((Ne) => Ne.StoryNode === ee.id)) || {}).segmentTextAfter
    )) : /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("text", { x: ee.x0 + be, y: (ee.y1 + ee.y0) / 2 + _e, dominantBaseline: "text-before-edge", fill: a.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, /* @__PURE__ */ i.createElement("tspan", { id: ee.id, className: "node-id" }, ee.id)), /* @__PURE__ */ i.createElement(
      "text",
      {
        x: ee.x0 + be,
        y: (ee.y1 + ee.y0) / 2 + 30,
        dominantBaseline: "text-before-edge",
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start",
        style: { pointerEvents: "none" }
      },
      /* @__PURE__ */ i.createElement("tspan", { className: Ve }, a.nodeValueStyle.textBefore + (typeof ee.value == "number" ? ee.value.toLocaleString() : ee.value) + a.nodeValueStyle.textAfter)
    )));
  }), J = M.map((ee, ge) => {
    const _e = EE()(ee);
    let Ve = a.opacity.LinkOpacityDefault, Qe = a.linkColor.default, { activeLinks: Ae } = j(d);
    return !Ae.includes(ee) && d !== "" && (Qe = a.linkColor.inactive, Ve = a.opacity.LinkOpacityInactive), /* @__PURE__ */ i.createElement("path", { key: ge, d: _e, stroke: Qe, fill: "none", strokeOpacity: Ve, strokeWidth: ee.width + 2 });
  });
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: "sankey-chart" }, /* @__PURE__ */ i.createElement("svg", { className: "sankey-chart__diagram", width: e, height: Number(n.heights.vertical), style: { overflow: "visible" } }, /* @__PURE__ */ i.createElement(rt, { className: "links" }, J), /* @__PURE__ */ i.createElement(rt, { className: "nodes" }, ae)), /* @__PURE__ */ i.createElement(iy, { id: "tooltip", afterHide: () => v(), events: ["click"], place: "bottom", style: { backgroundColor: "rgba(238, 238, 238, 1)", color: "black", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" } }), y && /* @__PURE__ */ i.createElement("div", { className: "popup" }, /* @__PURE__ */ i.createElement("div", { className: "popup-content" }, /* @__PURE__ */ i.createElement("p", null, /* @__PURE__ */ i.createElement("strong", null, "Please change the orientation of your screen or increase the size of your browser to view the diagram better."))))));
};
var PE = {
  top: "top",
  left: "left",
  right: "right",
  bottom: "bottom"
};
const tr = PE;
function RE(e) {
  var t = e.labelOffset, n = e.labelProps, a = e.orientation, r = e.range, o = e.tickLabelFontSize, s = e.tickLength, u = a === tr.left || a === tr.top ? -1 : 1, d, f, g;
  if (a === tr.top || a === tr.bottom) {
    var v = a === tr.bottom && typeof n.fontSize == "number" ? n.fontSize : 0;
    d = (Number(r[0]) + Number(r[r.length - 1])) / 2, f = u * (s + t + o + v);
  } else
    d = u * ((Number(r[0]) + Number(r[r.length - 1])) / 2), f = -(s + t), g = "rotate(" + u * 90 + ")";
  return {
    x: d,
    y: f,
    transform: g
  };
}
function gs() {
  return gs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, gs.apply(this, arguments);
}
function DE(e) {
  var t = e.hideTicks, n = e.horizontal, a = e.orientation, r = e.tickClassName, o = e.tickComponent, s = e.tickLabelProps, u = e.tickStroke, d = u === void 0 ? "#222" : u, f = e.tickTransform, g = e.ticks, v = e.strokeWidth, y = e.tickLineProps;
  return g.map(function(E) {
    var w, O = E.value, T = E.index, m = E.from, A = E.to, _ = E.formattedValue, L = (w = s[T]) != null ? w : {}, N = Math.max(10, typeof L.fontSize == "number" && L.fontSize || 0), M = A.y + (n && a !== tr.top ? N : 0);
    return /* @__PURE__ */ i.createElement(rt, {
      key: "visx-tick-" + O + "-" + T,
      className: Rn("visx-axis-tick", r),
      transform: f
    }, !t && /* @__PURE__ */ i.createElement(nn, gs({
      from: m,
      to: A,
      stroke: d,
      strokeWidth: v,
      strokeLinecap: "square"
    }, y)), o ? o(gs({}, L, {
      x: A.x,
      y: M,
      formattedValue: _
    })) : /* @__PURE__ */ i.createElement(Pt, gs({
      x: A.x,
      y: M
    }, L), _));
  });
}
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
var nm = {
  textAnchor: "middle",
  fontFamily: "Arial",
  fontSize: 10,
  fill: "#222"
};
function LE(e) {
  var t = e.axisFromPoint, n = e.axisLineClassName, a = e.axisToPoint, r = e.hideAxisLine, o = e.hideTicks, s = e.horizontal, u = e.label, d = u === void 0 ? "" : u, f = e.labelClassName, g = e.labelOffset, v = g === void 0 ? 14 : g, y = e.labelProps, E = y === void 0 ? nm : y, w = e.orientation, O = w === void 0 ? tr.bottom : w, T = e.scale, m = e.stroke, A = m === void 0 ? "#222" : m, _ = e.strokeDasharray, L = e.strokeWidth, N = L === void 0 ? 1 : L, M = e.tickClassName, U = e.tickComponent, j = e.tickLineProps, $ = e.tickLabelProps, V = e.tickLength, ne = V === void 0 ? 8 : V, H = e.tickStroke, oe = H === void 0 ? "#222" : H, fe = e.tickTransform, I = e.ticks, Q = e.ticksComponent, q = Q === void 0 ? DE : Q, se = hc({}, nm, typeof $ == "object" ? $ : null), ae = I.map(function(G) {
    var he = G.value, ee = G.index;
    return typeof $ == "function" ? $(he, ee, I) : se;
  }), J = Math.max.apply(Math, [10].concat(ae.map(function(G) {
    return typeof G.fontSize == "number" ? G.fontSize : 0;
  })));
  return /* @__PURE__ */ i.createElement(i.Fragment, null, q({
    hideTicks: o,
    horizontal: s,
    orientation: O,
    scale: T,
    tickClassName: M,
    tickComponent: U,
    tickLabelProps: ae,
    tickStroke: oe,
    tickTransform: fe,
    ticks: I,
    strokeWidth: N,
    tickLineProps: j
  }), !r && /* @__PURE__ */ i.createElement(nn, {
    className: Rn("visx-axis-line", n),
    from: t,
    to: a,
    stroke: A,
    strokeWidth: N,
    strokeDasharray: _
  }), d && /* @__PURE__ */ i.createElement(Pt, hc({
    className: Rn("visx-axis-label", f)
  }, RE({
    labelOffset: v,
    labelProps: E,
    orientation: O,
    range: T.range(),
    tickLabelFontSize: J,
    tickLength: ne
  }), E), d));
}
function OE(e, t) {
  t === void 0 && (t = "center");
  var n = e;
  if (t !== "start" && "bandwidth" in n) {
    var a = n.bandwidth();
    return t === "center" && (a /= 2), n.round() && (a = Math.round(a)), function(r) {
      var o = n(r);
      return typeof o == "number" ? o + a : o;
    };
  }
  return e;
}
function _E(e) {
  var t = e;
  return "tickFormat" in t ? t.tickFormat() : bv;
}
function Ou(e, t) {
  var n = e.x, a = e.y;
  return new rl(t ? {
    x: n,
    y: a
  } : {
    x: a,
    y: n
  });
}
function Rf() {
  return Rf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Rf.apply(this, arguments);
}
var Ud = 0;
function ME(e) {
  return e === void 0 && (e = Ud), typeof e == "number" ? {
    start: e,
    end: e
  } : Rf({
    start: Ud,
    end: Ud
  }, e);
}
var NE = ["children", "axisClassName", "hideAxisLine", "hideTicks", "hideZero", "innerRef", "left", "numTicks", "orientation", "rangePadding", "scale", "tickFormat", "tickLength", "tickValues", "top"];
function Df() {
  return Df = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Df.apply(this, arguments);
}
function FE(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, o;
  for (o = 0; o < a.length; o++)
    r = a[o], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Rc(e) {
  var t = e.children, n = t === void 0 ? LE : t, a = e.axisClassName, r = e.hideAxisLine, o = r === void 0 ? !1 : r, s = e.hideTicks, u = s === void 0 ? !1 : s, d = e.hideZero, f = d === void 0 ? !1 : d, g = e.innerRef, v = e.left, y = v === void 0 ? 0 : v, E = e.numTicks, w = E === void 0 ? 10 : E, O = e.orientation, T = O === void 0 ? tr.bottom : O, m = e.rangePadding, A = m === void 0 ? 0 : m, _ = e.scale, L = e.tickFormat, N = e.tickLength, M = N === void 0 ? 8 : N, U = e.tickValues, j = e.top, $ = j === void 0 ? 0 : j, V = FE(e, NE), ne = L ?? _E(_), H = T === tr.left, oe = T === tr.top, fe = oe || T === tr.bottom, I = OE(_), Q = H || oe ? -1 : 1, q = _.range(), se = ME(A), ae = Ou({
    x: Number(q[0]) + 0.5 - se.start,
    y: 0
  }, fe), J = Ou({
    x: Number(q[q.length - 1]) + 0.5 + se.end,
    y: 0
  }, fe), G = (U ?? xv(_, w)).filter(function(ee) {
    return !f || ee !== 0 && ee !== "0";
  }).map(function(ee, ge) {
    return {
      value: ee,
      index: ge
    };
  }), he = G.map(function(ee) {
    var ge = ee.value, be = ee.index, _e = vv(I(ge));
    return {
      value: ge,
      index: be,
      from: Ou({
        x: _e,
        y: 0
      }, fe),
      to: Ou({
        x: _e,
        y: M * Q
      }, fe),
      formattedValue: ne(ge, be, G)
    };
  });
  return /* @__PURE__ */ i.createElement(rt, {
    className: Rn("visx-axis", a),
    innerRef: g,
    top: $,
    left: y
  }, n(Df({}, V, {
    axisFromPoint: ae,
    axisToPoint: J,
    hideAxisLine: o,
    hideTicks: u,
    hideZero: f,
    horizontal: fe,
    numTicks: w,
    orientation: T,
    rangePadding: A,
    scale: _,
    tickFormat: ne,
    tickLength: M,
    tickPosition: I,
    tickSign: Q,
    ticks: he
  })));
}
var zE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
function BE(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, o;
  for (o = 0; o < a.length; o++)
    r = a[o], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var $E = {
  dx: "-0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "end"
};
function IE(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 36 : n, r = e.tickLength, o = r === void 0 ? 8 : r, s = e.tickLabelProps, u = BE(e, zE), d = typeof s == "function" ? s : pc({}, $E, s);
  return /* @__PURE__ */ i.createElement(Rc, pc({
    axisClassName: Rn("visx-axis-left", t),
    labelOffset: a,
    orientation: tr.left,
    tickLabelProps: d,
    tickLength: o
  }, u));
}
var HE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
function WE(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, o;
  for (o = 0; o < a.length; o++)
    r = a[o], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var jE = {
  dx: "0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "start"
};
function VE(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 36 : n, r = e.tickLength, o = r === void 0 ? 8 : r, s = e.tickLabelProps, u = WE(e, HE), d = typeof s == "function" ? s : mc({}, jE, s);
  return /* @__PURE__ */ i.createElement(Rc, mc({
    axisClassName: Rn("visx-axis-right", t),
    labelOffset: a,
    orientation: tr.right,
    tickLabelProps: d,
    tickLength: o
  }, u));
}
var UE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
function KE(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, o;
  for (o = 0; o < a.length; o++)
    r = a[o], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var YE = {
  dy: "-0.75em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function XE(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 8 : n, r = e.tickLength, o = r === void 0 ? 8 : r, s = e.tickLabelProps, u = KE(e, UE), d = typeof s == "function" ? s : gc({}, YE, s);
  return /* @__PURE__ */ i.createElement(Rc, gc({
    axisClassName: Rn("visx-axis-top", t),
    labelOffset: a,
    orientation: tr.top,
    tickLabelProps: d,
    tickLength: o
  }, u));
}
var qE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
function GE(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, o;
  for (o = 0; o < a.length; o++)
    r = a[o], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var ZE = {
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function $u(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 8 : n, r = e.tickLength, o = r === void 0 ? 8 : r, s = e.tickLabelProps, u = GE(e, qE), d = typeof s == "function" ? s : yc({}, ZE, s);
  return /* @__PURE__ */ i.createElement(Rc, yc({
    axisClassName: Rn("visx-axis-bottom", t),
    labelOffset: a,
    orientation: tr.bottom,
    tickLabelProps: d,
    tickLength: o
  }, u));
}
const vc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  curveBasis: d0,
  curveBasisClosed: f0,
  curveBasisOpen: h0,
  curveBundle: p0,
  curveCardinal: m0,
  curveCardinalClosed: g0,
  curveCardinalOpen: y0,
  curveCatmullRom: v0,
  curveCatmullRomClosed: x0,
  curveCatmullRomOpen: b0,
  curveLinear: kc,
  curveLinearClosed: lf,
  curveMonotoneX: Bu,
  curveMonotoneY: S0,
  curveNatural: E0,
  curveStep: k0,
  curveStepAfter: T0,
  curveStepBefore: w0
}, Symbol.toStringTag, { value: "Module" })), QE = (e) => {
  var N;
  const { xScale: t, yScale: n, yMax: a, xMax: r, handleTooltipMouseOver: o, handleTooltipMouseOff: s, isDebug: u, children: d } = e;
  let { transformedData: f, config: g, handleLineType: v, parseDate: y, formatDate: E, formatNumber: w, seriesHighlight: O, colorScale: T, rawData: m } = ue.useContext(Ct);
  const A = g.brush.active && ((N = g.brush.data) != null && N.length) ? g.brush.data : f;
  if (!A)
    return;
  const _ = (M) => (g.xAxis.type === "date" ? t(y(M[g.xAxis.dataKey], !1)) : t(M[g.xAxis.dataKey])) + (t.bandwidth ? t.bandwidth() / 2 : 0), L = (M, U, j = void 0) => n(M[j.dataKey]);
  return A && /* @__PURE__ */ i.createElement("svg", null, /* @__PURE__ */ i.createElement(Br, { component: "AreaChart" }, /* @__PURE__ */ i.createElement(rt, { className: "area-chart", key: "area-wrapper", left: Number(g.yAxis.size) }, (g.runtime.areaSeriesKeys || g.series).map((M, U) => {
    let j = A.map((H) => ({
      [g.xAxis.dataKey]: H[g.xAxis.dataKey],
      [M.dataKey]: H[M.dataKey]
    })), $ = vc[M.lineType], V = g.legend.behavior === "highlight" && O.length > 0 && O.indexOf(M.dataKey) === -1, ne = g.legend.behavior === "highlight" || O.length === 0 || O.indexOf(M.dataKey) !== -1;
    return /* @__PURE__ */ i.createElement(i.Fragment, { key: U }, /* @__PURE__ */ i.createElement(
      fa,
      {
        data: j,
        x: (H) => _(H),
        y: (H) => L(H, U, M),
        stroke: ne ? T ? T(g.runtime.seriesLabels ? g.runtime.seriesLabels[M.dataKey] : M.dataKey) : "#000" : "transparent",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        curve: $,
        strokeDasharray: M.type ? v(M.type) : 0
      }
    ), /* @__PURE__ */ i.createElement(
      Z0,
      {
        key: "area-chart",
        fill: ne ? T ? T(g.runtime.seriesLabels ? g.runtime.seriesLabels[M.dataKey] : M.dataKey) : "#000" : "transparent",
        fillOpacity: V ? 0.25 : 0.5,
        data: j,
        x: (H) => _(H),
        y: (H) => L(H, U, M),
        yScale: n,
        curve: $,
        strokeDasharray: M.type ? v(M.type) : 0
      }
    ));
  }), /* @__PURE__ */ i.createElement(mr, { width: Number(r), height: Number(a), fill: "transparent", fillOpacity: 0.05, onMouseMove: (M) => o(M, m), onMouseLeave: s }))));
}, JE = ue.memo(QE), xc = {
  Linear: "curveLinear",
  Cardinal: "curveCardinal",
  Natural: "curveNatural",
  "Monotone X": "curveMonotoneX",
  Step: "curveStep"
}, ek = ({ xScale: e, yScale: t, yMax: n, xMax: a, handleTooltipMouseOver: r, handleTooltipMouseOff: o, isDebug: s }) => {
  var O;
  let { transformedData: u, config: d, seriesHighlight: f, colorScale: g, rawData: v } = ue.useContext(Ct);
  const y = d.brush.active && ((O = d.brush.data) != null && O.length) ? d.brush.data : u;
  if (!y)
    return;
  const E = (T) => {
    if (d.xAxis.type === "categorical")
      return e(T);
    if (d.xAxis.type === "date") {
      let m = new Date(T);
      return e(m);
    }
  }, w = 2;
  return y && /* @__PURE__ */ i.createElement("svg", { height: Number(n) }, /* @__PURE__ */ i.createElement(Br, { component: "AreaChartStacked" }, /* @__PURE__ */ i.createElement(rt, { className: "area-chart", key: "area-wrapper", left: Number(d.yAxis.size) + w / 2, height: Number(n), style: { overflow: "hidden" } }, /* @__PURE__ */ i.createElement(
    rS,
    {
      data: y,
      keys: d.runtime.areaSeriesKeys.map((T) => T.dataKey) || d.series.map((T) => T.dataKey),
      x0: (T) => E(T.data[d.xAxis.dataKey]),
      y0: (T) => Number(t(T[0])),
      y1: (T) => Number(t(T[1])),
      curve: vc[xc[d.stackedAreaChartLineType]]
    },
    ({ stacks: T, path: m }) => T.map((A, _) => {
      let L = d.legend.behavior === "highlight" && f.length > 0 && f.indexOf(A.key) === -1, N = d.legend.behavior === "highlight" || f.length === 0 || f.indexOf(A.key) !== -1;
      return (
        // prettier-ignore
        /* @__PURE__ */ i.createElement(
          "path",
          {
            key: A.key,
            d: m(A) || "",
            strokeWidth: 2,
            stroke: N ? g ? g(d.runtime.seriesLabels ? d.runtime.seriesLabels[A.key] : A.key) : "#000" : "transparent",
            fillOpacity: L ? 0.2 : 1,
            fill: N ? g ? g(d.runtime.seriesLabels ? d.runtime.seriesLabels[A.key] : A.key) : "#000" : "transparent"
          }
        )
      );
    })
  ), /* @__PURE__ */ i.createElement(mr, { width: Number(a), height: Number(n), fill: "transparent", onMouseMove: (T) => r(T, v), onMouseLeave: o }))));
}, tk = ue.memo(ek), As = () => {
  const { config: e, colorPalettes: t, tableData: n, updateConfig: a, parseDate: r, formatDate: o, setSeriesHighlight: s } = ue.useContext(Ct), { orientation: u } = e, [d, f] = ue.useState(null), g = u === "horizontal", v = 1, y = e.lollipopSize === "large" ? 7 : e.lollipopSize === "medium" ? 6 : 5, E = e.lollipopSize === "large" ? 14 : e.lollipopSize === "medium" ? 12 : 10, w = e.yAxis.labelPlacement === "Below Bar", O = e.yAxis.displayNumbersOnBar, T = e.orientation === "horizontal" ? "yAxis" : "xAxis", m = e.barStyle === "rounded", A = e.visualizationSubType === "stacked", _ = e.tipRounding, L = e.roundingStyle === "standard" ? "8px" : e.roundingStyle === "shallow" ? "5px" : e.roundingStyle === "finger" ? "15px" : "0px", N = e.runtime.seriesKeys.length, M = { small: 16, medium: 18, large: 20 }, U = Object.keys(e.runtime.seriesLabels).length > 1;
  return ue.useEffect(() => {
    u === "horizontal" && !e.yAxis.labelPlacement && a({
      ...e,
      yAxis: {
        ...e,
        labelPlacement: "Below Bar"
      }
    });
  }, [e, a]), ue.useEffect(() => {
    e.isLollipopChart === !1 && e.barHeight < 25 && a({ ...e, barHeight: 25 });
  }, [e.isLollipopChart]), ue.useEffect(() => {
    e.visualizationSubType === "horizontal" && a({
      ...e,
      orientation: "horizontal"
    });
  }, []), ue.useEffect(() => {
    e.barStyle === "lollipop" && !e.isLollipopChart && a({ ...e, isLollipopChart: !0 }), (m || e.barStyle === "flat") && a({ ...e, isLollipopChart: !1 });
  }, [e.barStyle]), {
    generateIconSize: (q) => q < 4 ? 1 : q < 5 ? 4 : q < 10 ? 6 : q < 15 ? 7 : q < 20 || q < 90 ? 8 : 0,
    isHorizontal: g,
    barBorderWidth: v,
    lollipopBarWidth: y,
    lollipopShapeSize: E,
    isLabelBelowBar: w,
    displayNumbersOnBar: O,
    section: T,
    isRounded: m,
    isStacked: A,
    tipRounding: _,
    radius: L,
    stackCount: N,
    fontSize: M,
    hasMultipleSeries: U,
    applyRadius: (q) => {
      if (q == null || !m)
        return {};
      let se = {};
      return (A && q + 1 === N || !A) && (se = g ? { borderRadius: `0 ${L}  ${L}  0` } : { borderRadius: `${L} ${L} 0 0` }), !A && q === -1 && (se = g ? { borderRadius: `${L} 0  0 ${L} ` } : { borderRadius: ` 0  0 ${L} ${L}` }), _ === "full" && A && q === 0 && N > 1 && (se = g ? { borderRadius: `${L} 0 0 ${L}` } : { borderRadius: `0 0 ${L} ${L}` }), _ === "full" && (A && q === 0 && N === 1 || !A) && (se = { borderRadius: L }), se;
    },
    updateBars: (q) => {
      if (e.visualizationType !== "Bar" && !g)
        return q;
      const se = [...q];
      let ae;
      const J = {
        stacked: e.barHeight,
        lollipop: y
      };
      A ? ae = J.stacked : ae = J[e.isLollipopChart ? "lollipop" : "stacked"] * N;
      const G = w ? M[e.fontSize] * 1.2 : 0;
      let he = Number(e.barSpace), ee = se.length * (ae + G + he);
      return g && (e.heights.horizontal = ee), se.map((ge, be) => {
        let _e = 0;
        return ge.index !== 0 && (_e = (ae + he + G) * be), { ...ge, y: _e, height: ae };
      });
    },
    assignColorsToValues: (q, se, ae) => {
      if (!e.legend.colorCode && e.series.length > 1)
        return ae;
      const J = e.customColors ?? t[e.palette], G = n.map((be) => be[e.legend.colorCode]);
      let he = /* @__PURE__ */ new Map(), ee = [];
      for (let be = 0; be < G.length; be++)
        he.has(G[be]) || he.set(G[be], J[he.size % J.length]), ee.push(he.get(G[be]));
      for (; ee.length < q; )
        ee = ee.concat(ee);
      return ee[se];
    },
    getHighlightedBarColorByValue: (q) => {
      const se = e == null ? void 0 : e.highlightedBarValues.find((ae) => {
        if (ae.value)
          return e.xAxis.type === "date" ? o(r(ae.value)) === q : ae.value === q;
      });
      return se != null && se.color ? se.color : "rgba(255, 102, 1)";
    },
    getHighlightedBarByValue: (q) => {
      const se = e == null ? void 0 : e.highlightedBarValues.filter((ae) => {
        if (ae.value)
          return e.xAxis.type === "date" ? o(r(ae.value)) === q : ae.value === q;
      })[0];
      return se != null && se.color ? se : !1;
    },
    getAdditionalColumn: (q, se) => {
      if (!se)
        return "";
      const ae = e.columns, J = [];
      let G = "";
      const he = n.find((ee) => ee[e.xAxis.dataKey] === se) || {};
      return Object.keys(ae).forEach((ee) => {
        if (q && e.columns[ee].series && e.columns[ee].series !== q)
          return;
        const ge = {
          addColPrefix: e.columns[ee].prefix,
          addColSuffix: e.columns[ee].suffix,
          addColRoundTo: e.columns[ee].roundToPlace ? e.columns[ee].roundToPlace : "",
          addColCommas: e.columns[ee].commas
        }, be = xm(he[e.columns[ee].name], "left", !0, e, ge);
        e.columns[ee].tooltips && J.push([e.columns[ee].label, be]);
      }), J.forEach((ee) => {
        G += `${ee[0]} : ${ee[1]} <br/>`;
      }), G;
    },
    hoveredBar: d,
    setHoveredBar: f,
    onMouseOverBar: (q, se) => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && se && s([se]), f(q);
    },
    onMouseLeaveBar: () => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && s([]);
    }
  };
}, Ps = ue.createContext(null), hh = ({ xScale: e, barWidth: t = 0, totalBarsInGroup: n = 1, yMax: a, handleTooltipMouseOff: r, handleTooltipMouseOver: o, handleTooltipClick: s, tooltipData: u, showTooltip: d, hideTooltip: f }) => {
  const { parseDate: g, config: v } = ue.useContext(Ct), { runtime: y, regions: E, visualizationType: w, orientation: O, xAxis: T } = v;
  let m, A, _;
  if (E && O === "vertical")
    return E.map((L) => {
      if (T.type === "date" && L.fromType !== "Previous Days" && (m = e(g(L.from).getTime()), A = e(g(L.to).getTime()), _ = A - m), T.type === "categorical" && (m = e(L.from), A = e(L.to), _ = A - m), (w === "Bar" || v.visualizationType === "Combo") && T.type === "date" && (m = L.fromType !== "Previous Days" ? e(g(L.from).getTime()) - t * n / 2 : null, A = L.toType !== "Last Date" ? e(g(L.to).getTime()) + t * n / 2 : null, _ = A - m), (w === "Bar" || v.visualizationType === "Combo") && v.xAxis.type === "categorical" && (m = e(L.from), A = e(L.to), _ = A - m), L.fromType === "Previous Days") {
        A = L.toType !== "Last Date" ? e(g(L.to).getTime()) + t * n / 2 : null;
        let U = e.domain(), j = Tm((I) => I).left, $, V = Number(L.from), ne = L.toType === "Last Date" ? U[U.length - 1] : L.to, H = new Date(ne);
        m = new Date(H.setDate(H.getDate() - V)).getTime();
        let oe = m, fe = j(U, oe);
        if (fe === 0)
          $ = U[0];
        else if (fe === U.length)
          $ = U[U.length - 1];
        else {
          let I = U[fe - 1], Q = U[fe];
          $ = oe - I > Q - oe ? Q : I;
        }
        m = Number(e($) - (w === "Bar" || w === "Combo" ? t * n / 2 : 0)), _ = A - m;
      }
      if (L.toType === "Last Date") {
        let U = e.domain(), j = U[U.length - 1];
        A = Number(e(j) + (w === "Bar" || w === "Combo" ? t * n / 2 : 0)), _ = A - m;
      }
      if (L.fromType === "Previous Days" && T.type === "date" && T.sortDates && v.visualizationType === "Line") {
        let U = e.domain(), j = Number(L.from), $ = L.toType === "Last Date" ? Ty(v.xAxis.dateParseFormat, U[U.length - 1]) : L.to, V = new Date($);
        m = new Date(V.setDate(V.getDate() - j)).getTime(), m = e(m), $ = e(g($)), _ = $ - m;
      }
      if (!m || !A)
        return null;
      const N = () => /* @__PURE__ */ i.createElement(
        "path",
        {
          stroke: "#333",
          d: `M${m} -5
                L${m} 5
                M${m} 0
                L${A} 0
                M${A} -5
                L${A} 5`
        }
      ), M = () => /* @__PURE__ */ i.createElement("rect", { x: m, y: 0, width: _, height: a, fill: L.background, opacity: 0.3 });
      return /* @__PURE__ */ i.createElement(
        rt,
        {
          className: "regions regions-group--line",
          left: v.visualizationType === "Bar" || v.visualizationType === "Combo" ? 0 : (v == null ? void 0 : v.visualizationType) === "Line" ? Number(y.yAxis.size) : 0,
          key: L.label,
          onMouseMove: o,
          onMouseLeave: r,
          handleTooltipClick: s,
          tooltipData: JSON.stringify(u),
          showTooltip: d
        },
        /* @__PURE__ */ i.createElement(N, null),
        /* @__PURE__ */ i.createElement(M, null),
        /* @__PURE__ */ i.createElement(Pt, { x: m + _ / 2, y: 5, fill: L.color, verticalAnchor: "start", textAnchor: "middle" }, L.label)
      );
    });
}, nk = () => {
  var U;
  const [e, t] = ue.useState(0), { xScale: n, yScale: a, xMax: r, yMax: o } = ue.useContext(Ps), { transformedData: s, colorScale: u, seriesHighlight: d, config: f, formatNumber: g, formatDate: v, parseDate: y, setSharedFilter: E } = ue.useContext(Ct), { isHorizontal: w, barBorderWidth: O, applyRadius: T, hoveredBar: m, getAdditionalColumn: A, onMouseLeaveBar: _, onMouseOverBar: L } = As(), { orientation: N } = f, M = f.brush.active && ((U = f.brush.data) != null && U.length) ? f.brush.data : s;
  return f.visualizationSubType === "stacked" && !w && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(sS, { data: M, keys: f.runtime.barSeriesKeys || f.runtime.seriesKeys, x: (j) => j[f.runtime.xAxis.dataKey], xScale: n, yScale: a, color: u }, (j) => j.reverse().map(
    ($) => $.bars.map((V) => {
      let ne = f.legend.behavior === "highlight" && d.length > 0 && d.indexOf(V.key) === -1, H = f.legend.behavior === "highlight" || d.length === 0 || d.indexOf(V.key) !== -1, oe = f.xAxis.type === "date" && f.xAxis.sortDates ? f.barThickness * (n.range()[1] - n.range()[0]) : r / $.bars.length, fe = oe * (f.xAxis.type === "date" && f.xAxis.sortDates ? 1 : f.barThickness || 0.8);
      oe * (1 - (f.barThickness || 0.8)) / 2;
      const I = V.bar.data[f.runtime.xAxis.dataKey], Q = f.runtime.xAxis.type === "date" ? v(y(I)) : I, q = g(V.bar ? V.bar.data[V.key] : 0, "left");
      if (!q)
        return;
      const se = n(f.runtime.xAxis.type === "date" ? y(I) : I) - (f.xAxis.type === "date" && f.xAxis.sortDates ? fe / 2 : 0), ae = T($.index), J = f.runtime.xAxis.label ? `${f.runtime.xAxis.label}: ${Q}` : Q, G = A(m), he = `${f.runtime.seriesLabels[V.key]}: ${q}`, ee = `<ul>
                  <li class="tooltip-heading"">${J}</li>
                  <li class="tooltip-body ">${he}</li>
                  <li class="tooltip-body ">${G}</li>
                    </li></ul>`;
      return t(fe), /* @__PURE__ */ i.createElement(rt, { key: `${$.index}--${V.index}--${N}` }, /* @__PURE__ */ i.createElement("style", null, `
                           #barStack${$.index}-${V.index} rect,
                           #barStack${$.index}-${V.index} foreignObject div{
                            animation-delay: ${$.index * 0.5}s;
                            transform-origin: ${fe / 2}px ${V.y + V.height}px
                          }
                        `), /* @__PURE__ */ i.createElement(rt, { key: `bar-stack-${$.index}-${V.index}`, id: `barStack${$.index}-${V.index}`, className: "stack vertical" }, /* @__PURE__ */ i.createElement(Pt, { display: f.labels && H ? "block" : "none", opacity: ne ? 0.5 : 1, x: se + e / 2, y: V.y - 5, fill: "#000", textAnchor: "middle" }, q), /* @__PURE__ */ i.createElement(
        "foreignObject",
        {
          onMouseOver: () => L(Q, V.key),
          onMouseLeave: _,
          key: `bar-stack-${$.index}-${V.index}`,
          x: se,
          y: V.y,
          width: fe,
          height: V.height,
          display: H ? "block" : "none",
          "data-tooltip-html": ee,
          "data-tooltip-id": `cdc-open-viz-tooltip-${f.runtime.uniqueId}`,
          onClick: (ge) => {
            ge.preventDefault(), E && (V[f.xAxis.dataKey] = Q, E(f.uid, V));
          }
        },
        /* @__PURE__ */ i.createElement(
          "div",
          {
            style: {
              transition: "all 0.2s linear",
              opacity: ne ? 0.2 : 1,
              width: fe,
              height: V.height,
              background: u(f.runtime.seriesLabels[V.key]),
              border: `${f.barHasBorder === "true" ? O : 0}px solid #333`,
              ...ae
            }
          }
        )
      )));
    })
  )), /* @__PURE__ */ i.createElement(hh, { xScale: n, yMax: o, barWidth: e, totalBarsInGroup: 1 }));
}, rk = () => {
  const { yMax: e, yScale: t, xScale: n } = ue.useContext(Ps), {
    animatedChart: a,
    colorScale: r,
    config: o,
    formatDate: s,
    formatNumber: u,
    getTextWidth: d,
    parseDate: f,
    seriesHighlight: g,
    setSharedFilter: v,
    transformedData: y
  } = ue.useContext(Ct), {
    applyRadius: E,
    barBorderWidth: w,
    displayNumbersOnBar: O,
    fontSize: T,
    getAdditionalColumn: m,
    hoveredBar: A,
    isHorizontal: _,
    isLabelBelowBar: L,
    onMouseLeaveBar: N,
    onMouseOverBar: M,
    updateBars: U
  } = As(), { orientation: j, visualizationSubType: $ } = o;
  return o.visualizationSubType === "stacked" && _ && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(dS, { data: y, keys: o.runtime.barSeriesKeys || o.runtime.seriesKeys, height: e, y: (V) => V[o.runtime.yAxis.dataKey], xScale: n, yScale: t, color: r, offset: "none" }, (V) => V.map(
    (ne) => U(ne.bars).map((H, oe) => {
      let fe = o.legend.behavior === "highlight" && g.length > 0 && g.indexOf(H.key) === -1, I = o.legend.behavior === "highlight" || g.length === 0 || g.indexOf(H.key) !== -1;
      o.barHeight = Number(o.barHeight);
      let Q = "#000000";
      const q = u(y[H.index][H.key], "left"), se = o.runtime.yAxis.type === "date" ? s(f(y[H.index][o.runtime.originalXAxis.dataKey])) : y[H.index][o.runtime.originalXAxis.dataKey], ae = E(ne.index);
      let J = o.runtime.yAxis.label ? `${o.runtime.yAxis.label}: ${se}` : se, G = d(q, `normal ${T[o.fontSize]}px sans-serif`);
      const he = m(A), ee = `${o.runtime.seriesLabels[H.key]}: ${q}`, ge = `<ul>
                  <li class="tooltip-heading"">${J}</li>
                  <li class="tooltip-body ">${ee}</li>
                  <li class="tooltip-body ">${he}</li>
                    </li></ul>`;
      return zr.contrast(Q, r(o.runtime.seriesLabels[H.key])) < 4.9 && (Q = "#FFFFFF"), /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `
                         #barStack${ne.index}-${H.index} rect,
                         #barStack${ne.index}-${H.index} foreignObject div{
                          animation-delay: ${ne.index * 0.5}s;
                          transform-origin: ${H.x}px
                        }
                      `), /* @__PURE__ */ i.createElement(rt, { key: oe, id: `barStack${ne.index}-${H.index}`, className: "stack horizontal" }, /* @__PURE__ */ i.createElement(
        "foreignObject",
        {
          onMouseOver: () => M(se, H.key),
          onMouseLeave: N,
          key: `barstack-horizontal-${ne.index}-${H.index}-${oe}`,
          className: `animated-chart group ${a ? "animated" : ""}`,
          x: H.x,
          y: H.y,
          style: { transition: "all 0.2s linear" },
          width: H.width,
          height: H.height,
          opacity: fe ? 0.2 : 1,
          display: I ? "block" : "none",
          "data-tooltip-html": ge,
          "data-tooltip-id": `cdc-open-viz-tooltip-${o.runtime.uniqueId}`,
          onClick: (be) => {
            be.preventDefault(), v && (H[o.xAxis.dataKey] = q, v(o.uid, H));
          }
        },
        /* @__PURE__ */ i.createElement("div", { style: { width: H.width, height: H.height, background: r(o.runtime.seriesLabels[H.key]), border: `${o.barHasBorder === "true" ? w : 0}px solid #333`, ...ae } })
      ), j === "horizontal" && $ === "stacked" && L && ne.index === 0 && !o.yAxis.hideLabel && /* @__PURE__ */ i.createElement(
        Pt,
        {
          x: `${H.x + (o.isLollipopChart ? 15 : 5)}`,
          y: H.y + H.height * 1.2,
          fill: "#000000",
          textAnchor: "start",
          verticalAnchor: "start"
        },
        se
      ), O && G < H.width && /* @__PURE__ */ i.createElement(
        Pt,
        {
          display: I ? "block" : "none",
          x: H.x + ne.bars[H.index].width / 2,
          y: H.y + H.height / 2,
          fill: Q,
          textAnchor: "middle",
          verticalAnchor: "middle"
        },
        q
      )));
    })
  )));
}, ak = () => {
  var J;
  const { xScale: e, yScale: t, xMax: n, yMax: a, seriesScale: r } = ue.useContext(Ps), [o, s] = ue.useState(0), [u, d] = ue.useState(0), {
    applyRadius: f,
    assignColorsToValues: g,
    barBorderWidth: v,
    generateIconSize: y,
    getAdditionalColumn: E,
    getHighlightedBarByValue: w,
    getHighlightedBarColorByValue: O,
    lollipopBarWidth: T,
    lollipopShapeSize: m,
    onMouseLeaveBar: A,
    onMouseOverBar: _,
    section: L
  } = As(), {
    colorScale: N,
    config: M,
    dashboardConfig: U,
    formatDate: j,
    formatNumber: $,
    getXAxisData: V,
    getYAxisData: ne,
    isNumber: H,
    parseDate: oe,
    seriesHighlight: fe,
    setSharedFilter: I,
    transformedData: Q
  } = ue.useContext(Ct), { HighLightedBarUtils: q } = Cc(M), se = M.brush.active && ((J = M.brush.data) != null && J.length) ? M.brush.data : Q, ae = (G, he) => {
    var be;
    let ee = null;
    const ge = y(he);
    return (be = M.suppressedData) == null || be.forEach((_e) => {
      G.key === _e.column && String(G.value) === String(_e.value) && _e.icon && (ee = /* @__PURE__ */ i.createElement(ch, { color: "#000", size: ge }));
    }), ee;
  };
  return M.visualizationSubType !== "stacked" && (M.visualizationType === "Bar" || M.visualizationType === "Combo") && M.orientation === "vertical" && /* @__PURE__ */ i.createElement(rt, null, /* @__PURE__ */ i.createElement(
    Pg,
    {
      data: se,
      keys: M.runtime.barSeriesKeys || M.runtime.seriesKeys,
      height: a,
      x0: (G) => {
        const he = G[M.runtime.originalXAxis.dataKey];
        return M.runtime.xAxis.type === "date" ? oe(he) : he;
      },
      x0Scale: e,
      x1Scale: r,
      yScale: t,
      color: () => ""
    },
    (G) => G.map((he, ee) => /* @__PURE__ */ i.createElement(rt, { className: `bar-group-${he.index}-${he.x0}--${ee} ${M.orientation}`, key: `bar-group-${he.index}-${he.x0}--${ee}`, id: `bar-group-${he.index}-${he.x0}--${ee}`, left: he.x0 }, he.bars.map((ge, be) => {
      const _e = M.useLogScale ? 0.1 : 0, Ve = 20;
      let Qe = M.highlightedBarValues.map((Je) => Je.value).filter((Je) => Je !== void 0);
      Qe = M.xAxis.type === "date" ? q.formatDates(Qe) : Qe;
      let Ae = M.legend.behavior === "highlight" && fe.length > 0 && fe.indexOf(ge.key) === -1, ve = M.legend.behavior === "highlight" || fe.length === 0 || fe.indexOf(ge.key) !== -1, Ee = Math.abs(t(ge.value) - t(_e)), le = ge.value >= 0 && H(ge.value) ? ge.y : t(0);
      const Be = ge.value >= 0 && H(ge.value) ? t(_e) - Ve : t(0), Ne = M.suppressedData.some((Je) => ge.key === Je.column && String(ge.value) === String(Je.value)) ? Be : le;
      let qe = r.range()[1], Ke = M.isLollipopChart ? T : qe / he.bars.length, nt = ge.x + (M.isLollipopChart ? (qe / he.bars.length - T) / 2 : 0) - (M.xAxis.type === "date" && M.xAxis.sortDates ? qe / 2 : 0);
      s(Ke), d(he.bars.length);
      let at = $(ge.value, "left"), lt = M.runtime[L].type === "date" ? j(oe(se[he.index][M.runtime.originalXAxis.dataKey])) : se[he.index][M.runtime.originalXAxis.dataKey];
      const ot = ge.value < 0 ? -1 : be, Ze = f(ot), Me = E(ge.key, se[he.index][M.runtime.originalXAxis.dataKey]);
      let De = M.runtime.xAxis.label ? `${M.runtime.xAxis.label}: ${lt}` : lt;
      const ht = `${M.runtime.seriesLabels[ge.key]}: ${at}`, Ue = `<ul>
                  <li class="tooltip-heading">${De}</li>
                  <li class="tooltip-body ">${ht}</li>
                  ${Me ? '<li class="tooltip-body ">' + Me + "</li>" : ""}
                    </li></ul>`;
      let dt = "#000000";
      dt = q.checkFontColor(at, Qe, dt);
      let pt = M.runtime.seriesLabels && M.runtime.seriesLabels[ge.key] ? N(M.runtime.seriesLabels[ge.key]) : N(ge.key);
      pt = g(G.length, he.index, pt);
      const gt = M.isLollipopChart && M.lollipopColorStyle === "regular", _t = M.isLollipopChart && M.lollipopColorStyle === "two-tone", It = Qe == null ? void 0 : Qe.includes(lt), cn = O(lt), qt = w(lt), rn = It ? cn : M.barHasBorder === "true" ? "#000" : "transparent", Et = It ? qt.borderWidth : M.isLollipopChart ? 0 : M.barHasBorder === "true" ? v : 0, kt = M.suppressedData.some((Je) => ge.key === Je.column && ge.value === Je.value) ? "" : at;
      let vn = M.suppressedData.some((Je) => ge.key === Je.column && String(ge.value) === String(Je.value)) ? Ve : Ee;
      const kn = M.suppressedData.some((Je) => ge.key === Je.column && ge.value === Je.value) ? "none" : "block", Fe = (Je, fn) => {
        let hn = Je, Tn = fn || "#f2f2f2";
        if (U && U.dashboard.sharedFilters) {
          const { sharedFilters: Sn } = U.dashboard;
          return hn = Sn.map((un) => un.setBy === M.uid ? un.resetLabel === un.active || un.active === Q[he.index][M.xAxis.dataKey] ? Je : Tn : Je)[0], gt && (hn = Je), _t && (hn = zr(Je).brighten(1)), It && (hn = "transparent"), hn;
        }
        return _t && (hn = zr(Je).brighten(1)), It && (hn = "transparent"), hn;
      }, Gt = () => Ke < 50 && Ke > 15 ? Ke / 2.5 : Ke < 15 && Ke > 5 ? Ke / 6 : Ke < 5 ? 0 : Ke / 2, Ft = {
        position: "absolute",
        top: ge.value >= 0 && H(ge.value) ? -Ve : void 0,
        bottom: ge.value >= 0 && H(ge.value) ? void 0 : `-${Ve}px`,
        left: Gt()
      };
      M.isLollipopChart && (Ft.left = 0, Ft.transform = "translateX(0)");
      const dn = {
        background: Fe(pt),
        borderColor: rn,
        borderStyle: "solid",
        borderWidth: `${Et}px`,
        width: Ke,
        height: vn,
        ...Ze,
        cursor: U ? "pointer" : "default"
      };
      return /* @__PURE__ */ i.createElement(rt, { key: `${he.index}--${be}` }, /* @__PURE__ */ i.createElement("style", null, `
                        .linear #barGroup${he.index} div,
                        .Combo #barGroup${he.index} div {
                          transform-origin: 0 ${Ne + vn}px;
                        }
                      `), /* @__PURE__ */ i.createElement(rt, { key: `bar-sub-group-${he.index}-${he.x0}-${Ne}--${be}` }, /* @__PURE__ */ i.createElement(
        "foreignObject",
        {
          onMouseOver: () => _(lt, ge.key),
          onMouseLeave: A,
          style: { overflow: "visible", transition: "all 0.2s linear" },
          id: `barGroup${he.index}`,
          key: `bar-group-bar-${he.index}-${ge.index}-${ge.value}-${ge.key}`,
          x: nt,
          y: Ne,
          width: Ke,
          height: vn,
          opacity: Ae ? 0.2 : 1,
          display: ve ? "block" : "none",
          "data-tooltip-html": Ue,
          "data-tooltip-id": `cdc-open-viz-tooltip-${M.runtime.uniqueId}`,
          onClick: (Je) => {
            Je.preventDefault(), I && (ge[M.xAxis.dataKey] = lt, I(M.uid, ge));
          }
        },
        /* @__PURE__ */ i.createElement("div", { style: { position: "fixed" } }, /* @__PURE__ */ i.createElement("div", { style: Ft }, ae(ge, Ke)), /* @__PURE__ */ i.createElement("div", { style: { ...dn } }))
      ), /* @__PURE__ */ i.createElement(
        Pt,
        {
          display: M.labels && ve ? "block" : "none",
          opacity: Ae ? 0.5 : 1,
          x: nt + Ke / 2,
          y: Ne - 5,
          fill: dt,
          textAnchor: "middle"
        },
        kt
      ), M.isLollipopChart && M.lollipopShape === "circle" && /* @__PURE__ */ i.createElement(
        "circle",
        {
          display: kn,
          cx: nt + m / 3.5,
          cy: ge.y,
          r: m / 2,
          fill: pt,
          key: `circle--${ge.index}`,
          "data-tooltip-html": Ue,
          "data-tooltip-id": `cdc-open-viz-tooltip-${M.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), M.isLollipopChart && M.lollipopShape === "square" && /* @__PURE__ */ i.createElement(
        "rect",
        {
          display: kn,
          x: nt - T / 2,
          y: Ne,
          width: m,
          height: m,
          fill: pt,
          key: `circle--${ge.index}`,
          "data-tooltip-html": Ue,
          "data-tooltip-id": `cdc-open-viz-tooltip-${M.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ i.createElement("animate", { attributeName: "height", values: `0, ${m}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(M.confidenceKeys).length > 0 ? se.map((G) => {
    let he, ee, ge, be, _e = 5;
    return he = e(V(G)) + (M.xAxis.type !== "date" || !M.xAxis.sortDates ? r.range()[1] / 2 : 0), ge = t(ne(G, M.confidenceKeys.lower)), be = t(ne(G, M.confidenceKeys.upper)), /* @__PURE__ */ i.createElement(
      "path",
      {
        key: `confidence-interval-v-${ee}-${G[M.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${he - _e} ${ge}
                    L${he + _e} ${ge}
                    M${he} ${ge}
                    L${he} ${be}
                    M${he - _e} ${be}
                    L${he + _e} ${be}`
      }
    );
  }) : "", /* @__PURE__ */ i.createElement(hh, { xScale: e, yMax: a, barWidth: o, totalBarsInGroup: u }));
}, ik = () => {
  const { xScale: e, yScale: t, yMax: n, seriesScale: a } = ue.useContext(Ps), { transformedData: r, colorScale: o, seriesHighlight: s, config: u, formatNumber: d, formatDate: f, parseDate: g, setSharedFilter: v, isNumber: y, getTextWidth: E, getYAxisData: w, getXAxisData: O } = ue.useContext(Ct), {
    isHorizontal: T,
    barBorderWidth: m,
    applyRadius: A,
    updateBars: _,
    assignColorsToValues: L,
    section: N,
    fontSize: M,
    isLabelBelowBar: U,
    displayNumbersOnBar: j,
    lollipopBarWidth: $,
    lollipopShapeSize: V,
    getHighlightedBarColorByValue: ne,
    getHighlightedBarByValue: H,
    generateIconSize: oe,
    getAdditionalColumn: fe,
    hoveredBar: I,
    onMouseLeaveBar: Q,
    onMouseOverBar: q
  } = As(), { HighLightedBarUtils: se } = Cc(u), ae = (J, G) => {
    var ge;
    let he = null;
    const ee = oe(G);
    return (ge = u.suppressedData) == null || ge.forEach((be) => {
      J.key === be.column && String(J.value) === String(be.value) && be.icon && (he = /* @__PURE__ */ i.createElement(ch, { color: "#000", size: ee }));
    }), he;
  };
  return u.visualizationSubType !== "stacked" && u.visualizationType === "Bar" && u.orientation === "horizontal" && /* @__PURE__ */ i.createElement(rt, null, /* @__PURE__ */ i.createElement(
    Pg,
    {
      data: r,
      keys: u.runtime.barSeriesKeys || u.runtime.seriesKeys,
      height: n,
      x0: (J) => J[u.runtime.originalXAxis.dataKey],
      x0Scale: t,
      x1Scale: a,
      yScale: e,
      color: () => ""
    },
    (J) => _(J).map((G, he) => /* @__PURE__ */ i.createElement(rt, { className: `bar-group-${G.index}-${G.x0}--${he} ${u.orientation}`, key: `bar-group-${G.index}-${G.x0}--${he}`, id: `bar-group-${G.index}-${G.x0}--${he}`, top: G.y }, G.bars.map((ee, ge) => {
      const be = u.useLogScale ? 0.1 : 0;
      let _e = u.highlightedBarValues.map((Mt) => Mt.value).filter((Mt) => Mt !== void 0);
      _e = u.xAxis.type === "date" ? se.formatDates(_e) : _e;
      let Ve = u.legend.behavior === "highlight" && s.length > 0 && s.indexOf(ee.key) === -1, Qe = u.legend.behavior === "highlight" || s.length === 0 || s.indexOf(ee.key) !== -1, Ae = u.barHeight, ve = ee.value >= 0 && y(ee.value) ? ee.y : t(be);
      const Ee = ee.value < 0 ? Math.abs(e(ee.value)) : e(be), le = Math.abs(e(ee.value) - e(be)), Be = 25, Ne = ee.value >= 0 && y(ee.value);
      let qe = ee.value && u.suppressedData.some(({ column: Mt, value: Ht }) => ee.key === Mt && ee.value === Ht) ? Be : le;
      const Ke = Ne ? e(0) : e(be) - Be, nt = u.suppressedData.some((Mt) => ee.key === Mt.column && String(ee.value) === String(Mt.value)) ? Ke : Ee, at = d(ee.value, "left"), lt = u.runtime[N].type === "date" ? f(g(r[G.index][u.runtime.originalXAxis.dataKey])) : r[G.index][u.runtime.originalXAxis.dataKey], ot = Ne ? "above" : "below", Ze = u.suppressedData.some((Mt) => ee.key === Mt.column && ee.value === Mt.value) ? "" : at;
      let De = E(lt, `normal ${M[u.fontSize]}px sans-serif`) < le - 5, ht = De ? "end" : "start", Ue = "start", dt = De ? -5 : 5, pt = 10;
      ot === "below" && (ht = De ? "start" : "end", dt = De ? 5 : -5, u.isLollipopChart && (Ue = "end", pt = -10));
      const gt = ee.value < 0 ? -1 : ge, _t = A(gt);
      let It = u.runtime.yAxis.label ? `${u.runtime.yAxis.label}: ${lt}` : lt;
      const cn = fe(I), qt = `${u.runtime.seriesLabels[ee.key]}: ${at}`, rn = `<ul>
                  <li class="tooltip-heading"">${It}</li>
                  <li class="tooltip-body ">${qt}</li>
                  <li class="tooltip-body ">${cn}</li>
                    </li></ul>`;
      let Et = "#000000";
      Et = se.checkFontColor(at, _e, Et);
      let kt = u.runtime.seriesLabels && u.runtime.seriesLabels[ee.key] ? o(u.runtime.seriesLabels[ee.key]) : o(ee.key);
      kt = L(J.length, G.index, kt);
      const vn = u.isLollipopChart && u.lollipopColorStyle === "regular", kn = u.isLollipopChart && u.lollipopColorStyle === "two-tone", Fe = _e == null ? void 0 : _e.includes(at), Gt = ne(at), Ft = H(at), dn = Fe ? Gt : u.barHasBorder === "true" ? "#000" : "transparent", Je = Fe ? Ft.borderWidth : u.isLollipopChart ? 0 : u.barHasBorder === "true" ? m : 0, fn = u.suppressedData.some((Mt) => ee.key === Mt.column && ee.value === Mt.value) ? "none" : "block";
      kt && Et && zr.contrast(Et, kt) < 4.9 && (Et = De ? "#FFFFFF" : "#000000");
      const Tn = {
        position: "absolute",
        top: (() => Number(Ae) < 20 ? -4 : Number(Ae) < 25 ? -1 : Number(Ae) < 30 ? 2 : Number(Ae) < 35 ? 4 : Number(Ae) < 40 ? 5 : Number(Ae) < 50 ? 9 : Number(Ae) < 60 ? 10 : 12)(),
        left: Be * 1.2
      };
      u.isLollipopChart && (Tn.top = -9);
      const un = {
        background: (() => vn ? kt : kn ? zr(kt).brighten(1) : Fe ? "transparent" : kt)(),
        borderColor: dn,
        borderStyle: "solid",
        borderWidth: Je,
        width: qe,
        transition: "all 0.2s linear",
        height: u.isLollipopChart ? $ : Ae,
        ..._t
      };
      return /* @__PURE__ */ i.createElement(rt, { key: `${G.index}--${ge}` }, /* @__PURE__ */ i.createElement("style", null, `
                        .linear #barGroup${G.index} div,
                        .Combo #barGroup${G.index} div {
                          transform-origin: 0 ${ve + Ae}px;
                        }
                      `), /* @__PURE__ */ i.createElement(rt, { key: `bar-sub-group-${G.index}-${G.x0}-${ve}--${ge}` }, /* @__PURE__ */ i.createElement(
        "foreignObject",
        {
          onMouseOver: () => q(lt, ee.key),
          onMouseLeave: Q,
          id: `barGroup${G.index}`,
          key: `bar-group-bar-${G.index}-${ee.index}-${ee.value}-${ee.key}`,
          x: nt,
          style: { overflow: "visible", ...un },
          y: Ae * ee.index,
          height: u.isLollipopChart ? $ : Ae,
          width: qe,
          opacity: Ve ? 0.2 : 1,
          display: Qe ? "block" : "none",
          "data-tooltip-html": rn,
          "data-tooltip-id": `cdc-open-viz-tooltip-${u.runtime.uniqueId}`,
          onClick: (Mt) => {
            Mt.preventDefault(), v && (ee[u.xAxis.dataKey] = at, v(u.uid, ee));
          }
        },
        /* @__PURE__ */ i.createElement("div", { style: { position: "fixed" } }, /* @__PURE__ */ i.createElement("div", { style: Tn }, ae(ee, qe)), /* @__PURE__ */ i.createElement("div", { style: { ...un } }))
      ), !u.isLollipopChart && j && /* @__PURE__ */ i.createElement(
        Pt,
        {
          display: Qe ? "block" : "none",
          x: ee.y,
          y: u.barHeight / 2 + u.barHeight * ee.index,
          fill: Et,
          dx: dt,
          verticalAnchor: "middle",
          textAnchor: ht
        },
        Ze
      ), u.isLollipopChart && j && /* @__PURE__ */ i.createElement(
        Pt,
        {
          display: Qe ? "block" : "none",
          x: ee.y,
          y: 0,
          fill: "#000000",
          dx: pt,
          textAnchor: Ue,
          verticalAnchor: "middle",
          fontWeight: "normal"
        },
        Ze
      ), U && !u.yAxis.hideLabel && /* @__PURE__ */ i.createElement(Pt, { x: u.yAxis.hideAxis ? 0 : 5, y: G.height, dy: 4, verticalAnchor: "start", textAnchor: "start" }, u.runtime.yAxis.type === "date" ? f(g(r[G.index][u.runtime.originalXAxis.dataKey])) : T ? r[G.index][u.runtime.originalXAxis.dataKey] : d(r[G.index][u.runtime.originalXAxis.dataKey])), u.isLollipopChart && u.lollipopShape === "circle" && /* @__PURE__ */ i.createElement(
        "circle",
        {
          display: fn,
          cx: ee.y,
          cy: 0 + $ / 2,
          r: V / 2,
          fill: kt,
          key: `circle--${ee.index}`,
          "data-tooltip-html": rn,
          "data-tooltip-id": `cdc-open-viz-tooltip-${u.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), u.isLollipopChart && u.lollipopShape === "square" && /* @__PURE__ */ i.createElement(
        "rect",
        {
          display: fn,
          x: ee.y > 10 ? ee.y - V / 2 : 0,
          y: 0 - $ / 2,
          width: V,
          height: V,
          fill: kt,
          key: `circle--${ee.index}`,
          "data-tooltip-html": rn,
          "data-tooltip-id": `cdc-open-viz-tooltip-${u.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ i.createElement("animate", { attributeName: "height", values: `0, ${V}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(u.confidenceKeys).length > 0 ? r.map((J) => {
    let G, he, ee, ge = 5;
    return G = t(O(J)) - 0.75 * u.barHeight, he = e(w(J, u.confidenceKeys.upper)), ee = e(w(J, u.confidenceKeys.lower)), /* @__PURE__ */ i.createElement(
      "path",
      {
        key: `confidence-interval-h-${G}-${J[u.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${ee} ${G - ge}
                    L${ee} ${G + ge}
                    M${ee} ${G}
                    L${he} ${G}
                    M${he} ${G - ge}
                    L${he} ${G + ge} `
      }
    );
  }) : "");
}, _u = {
  Vertical: ak,
  Horizontal: ik,
  StackedVertical: nk,
  StackedHorizontal: rk
}, ok = ({ xScale: e, yScale: t, seriesScale: n, xMax: a, yMax: r, handleTooltipMouseOver: o, handleTooltipMouseOff: s, handleTooltipClick: u }) => {
  const { transformedData: d, config: f } = ue.useContext(Ct), g = {
    xScale: e,
    yScale: t,
    xMax: a,
    yMax: r,
    seriesScale: n
  };
  return /* @__PURE__ */ i.createElement(Br, { component: "BarChart" }, /* @__PURE__ */ i.createElement(Ps.Provider, { value: g }, /* @__PURE__ */ i.createElement(rt, { left: parseFloat(f.runtime.yAxis.size) }, /* @__PURE__ */ i.createElement(_u.StackedVertical, null), /* @__PURE__ */ i.createElement(_u.StackedHorizontal, null), /* @__PURE__ */ i.createElement(_u.Vertical, null), /* @__PURE__ */ i.createElement(_u.Horizontal, null), /* @__PURE__ */ i.createElement(mr, { key: "bars", display: f.tooltips.singleSeries ? "none" : "block", width: Number(a), height: Number(r), fill: "transparent", fillOpacity: 0.05, onMouseMove: (v) => o(v, d), onMouseOut: s, onClick: (v) => u(v, d) }))));
};
function za() {
  return za = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, za.apply(this, arguments);
}
function Li(e) {
  var t = e.x1, n = e.x2, a = e.y1, r = e.y2;
  return {
    x1: a,
    x2: r,
    y1: t,
    y2: n
  };
}
function oy(e) {
  var t = e.left, n = t === void 0 ? 0 : t, a = e.top, r = a === void 0 ? 0 : a, o = e.className, s = e.max, u = e.min, d = e.firstQuartile, f = e.thirdQuartile, g = e.median, v = e.boxWidth, y = v === void 0 ? 10 : v, E = e.fill, w = e.fillOpacity, O = e.stroke, T = e.strokeWidth, m = e.rx, A = m === void 0 ? 2 : m, _ = e.ry, L = _ === void 0 ? 2 : _, N = e.valueScale, M = e.outliers, U = M === void 0 ? [] : M, j = e.horizontal, $ = e.medianProps, V = $ === void 0 ? {} : $, ne = e.maxProps, H = ne === void 0 ? {} : ne, oe = e.minProps, fe = oe === void 0 ? {} : oe, I = e.boxProps, Q = I === void 0 ? {} : I, q = e.outlierProps, se = q === void 0 ? {} : q, ae = e.container, J = ae === void 0 ? !1 : ae, G = e.containerProps, he = G === void 0 ? {} : G, ee = e.children, ge = j ? r : n, be = ge + (y || 0) / 2, _e = N.range(), Ve = N(u ?? 0), Qe = N(d ?? 0), Ae = N(g ?? 0), ve = N(f ?? 0), Ee = N(s ?? 0), le = {
    valueRange: _e,
    center: be,
    offset: ge,
    boxWidth: y,
    max: {
      x1: be - (y || 0) / 4,
      x2: be + (y || 0) / 4,
      y1: Ee,
      y2: Ee
    },
    maxToThird: {
      x1: be,
      x2: be,
      y1: Ee,
      y2: ve
    },
    median: {
      x1: ge,
      x2: ge + (y || 0),
      y1: Ae,
      y2: Ae
    },
    minToFirst: {
      x1: be,
      x2: be,
      y1: Qe,
      y2: Ve
    },
    min: {
      x1: be - (y || 0) / 4,
      x2: be + (y || 0) / 4,
      y1: Ve,
      y2: Ve
    },
    box: {
      x1: ge,
      x2: y || 0,
      y1: ve,
      y2: Math.abs(ve - Qe)
    },
    container: {
      x1: ge,
      x2: y || 0,
      y1: Math.min.apply(Math, _e),
      y2: Math.abs(_e[0] - _e[1])
    }
  };
  return j && (le.max = Li(le.max), le.maxToThird = Li(le.maxToThird), le.box.y1 = Qe, le.box = Li(le.box), le.median = Li(le.median), le.minToFirst = Li(le.minToFirst), le.min = Li(le.min), le.container = Li(le.container), le.container.y1 = Math.min.apply(Math, _e)), ee ? /* @__PURE__ */ i.createElement(i.Fragment, null, ee(le)) : /* @__PURE__ */ i.createElement(rt, {
    className: Rn("visx-boxplot", o)
  }, U.map(function(Be, Ne) {
    var qe = j ? N(Be) : be, Ke = j ? be : N(Be);
    return /* @__PURE__ */ i.createElement("circle", za({
      key: "visx-boxplot-outlier-" + Ne,
      className: "visx-boxplot-outlier",
      cx: qe,
      cy: Ke,
      r: 4,
      stroke: O,
      strokeWidth: T,
      fill: E,
      fillOpacity: w
    }, se));
  }), /* @__PURE__ */ i.createElement("line", za({
    className: "visx-boxplot-max",
    x1: le.max.x1,
    y1: le.max.y1,
    x2: le.max.x2,
    y2: le.max.y2,
    stroke: O,
    strokeWidth: T
  }, H)), /* @__PURE__ */ i.createElement("line", {
    className: "visx-boxplot-max-to-third",
    x1: le.maxToThird.x1,
    y1: le.maxToThird.y1,
    x2: le.maxToThird.x2,
    y2: le.maxToThird.y2,
    stroke: O,
    strokeWidth: T
  }), /* @__PURE__ */ i.createElement("rect", za({
    className: "visx-boxplot-box",
    x: le.box.x1,
    y: le.box.y1,
    width: le.box.x2,
    height: le.box.y2,
    stroke: O,
    strokeWidth: T,
    fill: E,
    fillOpacity: w,
    rx: A,
    ry: L
  }, Q)), /* @__PURE__ */ i.createElement("line", za({
    className: "visx-boxplot-median",
    x1: le.median.x1,
    y1: le.median.y1,
    x2: le.median.x2,
    y2: le.median.y2,
    stroke: O,
    strokeWidth: T
  }, V)), /* @__PURE__ */ i.createElement("line", {
    className: "visx-boxplot-min-to-first",
    x1: le.minToFirst.x1,
    y1: le.minToFirst.y1,
    x2: le.minToFirst.x2,
    y2: le.minToFirst.y2,
    stroke: O,
    strokeWidth: T
  }), /* @__PURE__ */ i.createElement("line", za({
    className: "visx-boxplot-min",
    x1: le.min.x1,
    y1: le.min.y1,
    x2: le.min.x2,
    y2: le.min.y2,
    stroke: O,
    strokeWidth: T
  }, fe)), J && /* @__PURE__ */ i.createElement("rect", za({
    x: le.container.x1,
    y: le.container.y1,
    width: le.container.x2,
    height: le.container.y2,
    fillOpacity: "0"
  }, he)));
}
oy.propTypes = {
  max: pe.number,
  min: pe.number,
  firstQuartile: pe.number,
  thirdQuartile: pe.number,
  median: pe.number,
  boxWidth: pe.number,
  fill: pe.string,
  fillOpacity: pe.oneOfType([pe.number, pe.string]),
  stroke: pe.string,
  strokeWidth: pe.oneOfType([pe.number, pe.string]),
  rx: pe.number,
  ry: pe.number,
  outliers: pe.arrayOf(pe.number),
  container: pe.bool,
  children: pe.func
};
const lk = ({ xScale: e, yScale: t }) => {
  const { config: n, setConfig: a } = ue.useContext(Ct), { boxplot: r } = n;
  ue.useEffect(() => {
    n.legend.hide === !1 && a({
      ...n,
      legend: {
        ...n.legend,
        hide: !0
      }
    });
  }, []);
  const o = `cdc-open-viz-tooltip-${n.runtime.uniqueId}`, s = (T) => `
      <strong>${T.columnCategory}</strong></br>
      ${r.labels.q1}: ${T.columnFirstQuartile}<br/>
      ${r.labels.q3}: ${T.columnThirdQuartile}<br/>
      ${r.labels.iqr}: ${T.columnIqr}<br/>
      ${r.labels.median}: ${T.columnMedian}
    `, u = (T) => Number(T.columnMax), d = (T) => Number(T.columnMin), f = (T) => Number(T.columnMedian), g = (T) => Number(T.columnThirdQuartile), v = (T) => Number(T.columnFirstQuartile), y = 0.5, E = e.bandwidth(), w = Math.min(40, E), O = ur[n == null ? void 0 : n.palette][0] ? ur[n == null ? void 0 : n.palette][0] : "#000";
  return /* @__PURE__ */ i.createElement(Br, { component: "BoxPlot" }, /* @__PURE__ */ i.createElement(rt, { className: "boxplot", key: "boxplot-group" }, r.plots.map((T, m) => {
    const A = E - w, _ = 4;
    return /* @__PURE__ */ i.createElement(rt, { key: `boxplotplot-${m}` }, r.plotNonOutlierValues && T.nonOutlierValues.map((L, N) => /* @__PURE__ */ i.createElement("circle", { cx: e(T.columnCategory) + Number(n.yAxis.size) + E / 2, cy: t(L), r: _, fill: "#ccc", style: { opacity: 1, fillOpacity: 1, stroke: "black" }, key: `boxplot-${m}--circle-${N}` })), /* @__PURE__ */ i.createElement(
      oy,
      {
        "data-left": e(T.columnCategory) + n.yAxis.size + A / 2 + 0.5,
        key: `box-plot-${m}`,
        min: d(T),
        max: u(T),
        left: Number(e(T.columnCategory)) + Number(n.yAxis.size) + A / 2 + 0.5,
        firstQuartile: v(T),
        thirdQuartile: g(T),
        median: f(T),
        boxWidth: w,
        fill: O,
        fillOpacity: y,
        stroke: "black",
        valueScale: t,
        outliers: r.plotOutlierValues ? T.columnOutliers : [],
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
            strokeWidth: r.borders === "true" ? 1 : 0
          }
        },
        maxProps: {
          style: {
            stroke: "black"
          }
        },
        container: !0,
        containerProps: {
          "data-tooltip-html": s(T),
          "data-tooltip-id": o
        }
      }
    ));
  })));
}, sk = ({ xScale: e, yScale: t, getXAxisData: n, getYAxisData: a }) => {
  const { colorScale: r, transformedData: o, config: s, formatNumber: u, seriesHighlight: d, colorPalettes: f } = ue.useContext(Ct);
  let g = 4.5;
  const v = Object.keys(s.runtime.seriesLabels).length > 1, y = (E, w) => `<div>
    ${s.legend.showLegendValuesTooltip && s.runtime.seriesLabels && v ? `${s.runtime.seriesLabels[w] || ""}<br/>` : ""}
    ${s.xAxis.label}: ${u(E[s.xAxis.dataKey], "bottom")} <br/>
    ${s.yAxis.label}: ${u(E[w], "left")}
</div>`;
  return /* @__PURE__ */ i.createElement(rt, { className: "scatter-plot", left: s.yAxis.size }, o.map((E, w) => s.runtime.seriesKeys.map((O, T) => {
    const m = s.legend.behavior === "highlight" && d.length > 0 && d.indexOf(O) === -1, A = s.legend.behavior === "highlight" || d.length === 0 || d.indexOf(O) !== -1, _ = s.palette ? f[s.palette][T] : "#000";
    let L = {
      filter: "unset",
      opacity: 1,
      stroke: A ? "black" : ""
    };
    return /* @__PURE__ */ i.createElement(
      "circle",
      {
        key: `${w}-${T}`,
        r: g,
        cx: e(E[s.xAxis.dataKey]),
        cy: t(E[O]),
        fill: A ? _ : "transparent",
        fillOpacity: m ? 0.25 : 1,
        style: L,
        "data-tooltip-html": y(E, O),
        "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`
      }
    );
  })));
};
function uk({ height: e, xScale: t }) {
  const { transformedData: n, config: a, formatNumber: r, twoColorPalette: o, getTextWidth: s, updateConfig: u, parseDate: d, formatDate: f, currentViewport: g } = ue.useContext(Ct), { barStyle: v, tipRounding: y, roundingStyle: E, twoColor: w } = a, O = ue.useRef([]), [T, m] = ue.useState(window.innerWidth), A = E === "standard" ? "8px" : E === "shallow" ? "5px" : E === "finger" ? "15px" : "0px", _ = { small: 16, medium: 18, large: 20 };
  a.barStyle;
  const L = Number(a.xAxis.target), N = a.series[0].dataKey, M = Number(t.domain()[1]), j = n.some((ae) => ae[N] < 0) || L > 0 || t.domain()[0] < 0, $ = a.barHasBorder === "true" ? 1 : 0, V = a.lollipopSize === "large" ? 7 : a.lollipopSize === "medium" ? 6 : 5, ne = a.lollipopSize === "large" ? 14 : a.lollipopSize === "medium" ? 12 : 10, H = Math.max(t(0), Math.min(t(L), t(M))), oe = (ae) => {
    if (ae == null || v !== "rounded")
      return;
    let J = {};
    return ae === "left" && (J = { borderRadius: `${A} 0 0 ${A}` }), ae === "right" && (J = { borderRadius: `0 ${A} ${A} 0` }), y === "full" && (J = { borderRadius: A }), J;
  }, fe = {
    calculate: function() {
      const J = n[0][N] < L ? "left" : "right", G = `${a.xAxis.targetLabel} ${r(a.xAxis.target || 0, "left")}`, he = s(G, `bold ${_[a.fontSize]}px sans-serif`);
      let ee = a.isLollipopChart ? V / 2 : Number(a.barHeight) / 2, ge = 0, be = 0, _e = !1;
      J === "right" && (ge = -10, _e = he - ge < H, be = H - he), J === "left" && (ge = 10, _e = t(M) - H > he + ge, be = H), this.text = G, this.y = ee, this.x = be, this.padding = ge, this.showLabel = a.xAxis.showTargetLabel ? _e : !1;
    }
  };
  fe.calculate();
  const I = ue.useRef(null), Q = sh(I, {});
  ue.useEffect(() => {
    const ae = () => {
      m(window.innerWidth), O.current.forEach((J) => {
        J.style.transition = "none", J.style.transform = "translate(0) scale(1)";
      });
    };
    return window.addEventListener("resize", ae), () => {
      window.removeEventListener("resize", ae);
    };
  }, []);
  const [q, se] = ue.useState(!1);
  return ue.useEffect(() => {
    Q != null && Q.isIntersecting && setTimeout(() => {
      se(!0);
    }, 100);
  }, [Q == null ? void 0 : Q.isIntersecting, a.animate]), ue.useEffect(() => {
    O.current.forEach((ae, J) => {
      if (a.animate) {
        const G = L / M * 100;
        ae.style.opacity = "0", ae.style.transform = `translate(${G / 1.07}%) scale(0, 1)`, setTimeout(() => {
          ae.style.opacity = "1", ae.style.transform = "translate(0) scale(1)", ae.style.transition = "transform 0.5s ease";
        }, 100);
      } else
        ae.style.transition = "none", ae.style.opacity = "0";
      a.animate || (ae.style.transition = "none", ae.style.opacity = "1");
    });
  }, [a.animate, a, q]), /* @__PURE__ */ i.createElement(Br, { component: "Deviation Bar" }, /* @__PURE__ */ i.createElement(rt, { left: Number(a.xAxis.size) }, n.map((ae, J) => {
    const G = Number(ae[N]), he = a.isLollipopChart ? V : Number(a.barHeight), ee = Number(a.barSpace), ge = Math.abs(t(G) - H), be = t(G), _e = G > L ? H : be, Ve = G < L ? "left" : "right";
    let Qe = 0;
    Qe = J !== 0 ? (ee + he + $) * J : Qe;
    const Ae = (ee + he + $) * n.length;
    a.heights.horizontal = Ae;
    const Ee = s(r(G, "left"), `normal ${_[a.fontSize]}px sans-serif`) < ge - 6, le = be, Be = Qe + he / 2, Ne = be, qe = Qe + he / 2, Ke = be, nt = Qe - he / 2, at = oe(Ve), [lt, ot] = o[w.palette], Ze = { left: lt, right: ot }, De = zr.contrast("#000000", Ze[Ve]) < 4.9 ? "#FFFFFF" : "#000000";
    let ht = ck(a.isLollipopChart, Ee, ne, De);
    const Ue = r(G, "left"), dt = a.runtime.yAxis.type === "date" ? f(d(n[J][a.runtime.originalXAxis.dataKey])) : n[J][a.runtime.originalXAxis.dataKey];
    let pt = a.runtime.yAxis.label ? `${a.runtime.yAxis.label}: ${dt}` : dt, gt = a.runtime.xAxis.label ? `${a.runtime.xAxis.label}: ${Ue}` : Ue;
    const _t = `<div>
          ${pt}<br />
          ${gt}
            </div>`;
    return /* @__PURE__ */ i.createElement(rt, { key: `deviation-bar-${a.orientation}-${N}-${J}` }, /* @__PURE__ */ i.createElement(
      "foreignObject",
      {
        ref: (It) => {
          O.current[J] = It;
        },
        x: _e,
        y: Qe,
        width: ge,
        height: he,
        "data-tooltip-html": _t,
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`
      },
      /* @__PURE__ */ i.createElement("div", { style: { width: ge, height: he, border: `${$}px solid #333`, backgroundColor: Ze[Ve], ...at } })
    ), a.yAxis.displayNumbersOnBar && /* @__PURE__ */ i.createElement(Pt, { verticalAnchor: "middle", x: le, y: Be, ...ht[Ve] }, r(ae[N], "left")), a.isLollipopChart && a.lollipopShape === "circle" && /* @__PURE__ */ i.createElement("circle", { cx: Ne, cy: qe, r: ne / 2, fill: Ze[Ve], style: { filter: "unset", opacity: 1 } }), a.isLollipopChart && a.lollipopShape === "square" && /* @__PURE__ */ i.createElement("rect", { x: Ke, y: nt, width: ne, height: ne, fill: Ze[Ve], style: { opacity: 1, filter: "unset" } }));
  }), fe.showLabel && /* @__PURE__ */ i.createElement(Pt, { fontWeight: "bold", dx: fe.padding, verticalAnchor: "middle", x: fe.x, y: fe.y }, fe.text), j && /* @__PURE__ */ i.createElement(nn, { from: { x: H, y: 0 }, to: { x: H, y: e }, stroke: "#333", strokeWidth: 2 })), /* @__PURE__ */ i.createElement("foreignObject", { y: e / 2, ref: I }));
}
function ck(e, t, n, a) {
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
const dk = ({ xScale: e, yScale: t, height: n, width: a, handleTooltipMouseOver: r, handleTooltipMouseOff: o }) => {
  var w;
  const { transformedData: s, rawData: u, config: d, seriesHighlight: f } = ue.useContext(Ct), { xAxis: g, yAxis: v, legend: y, runtime: E } = d;
  return s && /* @__PURE__ */ i.createElement(Br, { component: "ForecastingChart" }, /* @__PURE__ */ i.createElement(rt, { className: "forecasting-items", key: "forecasting-items-wrapper", left: Number(v.size) }, (w = E.forecastingSeriesKeys) == null ? void 0 : w.map((O, T) => !O || !O.stages ? !1 : O.stages.map((m, A) => {
    var U;
    const { behavior: _ } = y, L = u.filter((j) => j[O.stageColumn] === m.key);
    let N = _ === "highlight" && f.length > 0 && f.indexOf(m.key) === -1, M = _ === "highlight" || f.length === 0 || f.indexOf(m.key) !== -1;
    return /* @__PURE__ */ i.createElement(rt, { className: `forecasting-areas-combo-${T}`, key: `forecasting-areas--stage-${m.key.replaceAll(" ", "-")}-${T}` }, (U = O.confidenceIntervals) == null ? void 0 : U.map((j, $) => {
      const V = ju[m.color] || ur[m.color] || !1, ne = () => M && V[2] ? V[2] : "transparent", H = () => M && V[1] ? V[1] : "transparent";
      if (!(j.high === "" || j.low === ""))
        return /* @__PURE__ */ i.createElement(rt, { key: `forecasting-areas--stage-${m.key.replaceAll(" ", "-")}--group-${A}-${$}` }, /* @__PURE__ */ i.createElement(
          X0,
          {
            curve: Bu,
            data: L,
            fill: ne(),
            opacity: N ? 0.1 : 0.5,
            x: (oe) => e(Date.parse(oe[g.dataKey])),
            y0: (oe) => t(oe[j.low]),
            y1: (oe) => t(oe[j.high])
          }
        ), $ === 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(fa, { data: L, x: (oe) => Number(e(Date.parse(oe[g.dataKey]))), y: (oe) => Number(t(oe[j.high])), curve: Bu, stroke: H(), strokeWidth: 1, strokeOpacity: 1 }), /* @__PURE__ */ i.createElement(fa, { data: L, x: (oe) => Number(e(Date.parse(oe[g.dataKey]))), y: (oe) => Number(t(oe[j.low])), curve: Bu, stroke: H(), strokeWidth: 1, strokeOpacity: 1 })));
    }));
  })), /* @__PURE__ */ i.createElement(rt, { key: "tooltip-hover-section" }, /* @__PURE__ */ i.createElement(mr, { key: "bars", width: Number(a), height: Number(n), fill: "transparent", fillOpacity: 0.05, onMouseMove: (O) => r(O, s), onMouseOut: o }))));
};
function Iu(e = "") {
  return typeof e == "number" ? !Number.isNaN(e) : typeof e == "string" ? e !== null && e !== "" && /\d+\.?\d*/.test(e) : !1;
}
function Dc(e, t) {
  const n = e.series.every(({ type: y }) => y === "Bar"), a = e.series.every(({ type: y }) => ["Line", "dashed-sm", "dashed-md", "dashed-lg"].includes(y)), r = (y) => (E) => y.reduce((w, O) => isNaN(Number(E[O])) ? w : w + Number(E[O]), 0), o = () => {
    let y = Math.max(...t.map((E) => Math.max(...e.runtime.seriesKeys.map((w) => Iu(E[w]) ? Number(d(E[w])) : 0))));
    if ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && n) && e.visualizationSubType === "stacked") {
      const E = t.map(r(e.runtime.seriesKeys)).filter((w) => !isNaN(w));
      y = Math.max(...E);
    }
    if (e.visualizationSubType === "stacked" && e.visualizationType === "Area Chart") {
      const E = t.map(r(e.runtime.seriesKeys));
      y = Math.max(...E);
    }
    if ((e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.series && e.series.dataKey && (y = Math.max(...t.map((E) => Iu(E[e.series.dataKey]) ? Number(d(E[e.series.dataKey])) : 0))), e.visualizationType === "Combo" && e.visualizationSubType === "stacked" && !n && e.runtime.barSeriesKeys && e.runtime.lineSeriesKeys) {
      const E = t.map(r(e.runtime.barSeriesKeys)), w = Math.max(...t.map((T) => Math.max(...e.runtime.lineSeriesKeys.map((m) => Number(d(T[m])))))), O = Math.max(...E);
      y = Math.max(O, w);
    }
    return y;
  }, s = () => {
    const y = Math.min(...t.map((E) => Math.min(...e.runtime.seriesKeys.map((w) => Iu(E[w]) ? Number(d(E[w])) : 1 / 0))));
    return String(y);
  }, u = () => e.runtime.seriesKeys ? e.runtime.seriesKeys.some((y) => t.some((E) => E[y] >= 0)) : !1, d = (y) => y === null || y === "" ? "" : typeof y == "string" ? y.replace(/[,$]/g, "") : y, f = Number(o()), g = Number(s()), v = u();
  return { minValue: g, maxValue: f, existPositiveValue: v, isAllLine: a };
}
function ph({ config: e, yMax: t = 0, data: n = [], updateConfig: a }) {
  var y, E, w, O;
  const r = e.visualizationType === "Combo" && e.orientation === "vertical", o = e.series && e.series.filter((T) => T.axis === "Right").map((T) => T.dataKey);
  let { minValue: s } = Dc(e, n);
  const u = (T) => {
    if (!T)
      return [0];
    let m = [];
    return T.map((A, _) => m = [...m, ...n.map((L) => Number(L[A]))]), m;
  };
  let d = Math.max.apply(null, u(o));
  e.yAxis.rightMax > d && (d = e.yAxis.rightMax), e.yAxis.rightMin < s && (s = e.yAxis.rightMin);
  const f = ((E = (y = e.runtime) == null ? void 0 : y.barSeriesKeys) == null ? void 0 : E.length) > 0, g = ((O = (w = e.runtime) == null ? void 0 : w.lineSeriesKeys) == null ? void 0 : O.length) > 0;
  return (f || g) && s > 0 && (s = 0), { yScaleRight: Wn({
    domain: [s, d],
    range: [t, 0]
  }), hasRightAxis: r };
}
const fk = (e) => {
  const { preliminaryData: t, data: n, stroke: a, handleLineType: r, lineType: o, seriesKey: s } = e, u = t.filter((v) => v.seriesKey && v.column && v.value && v.type && v.style), d = (v) => u.find((y) => y.seriesKey === s && v[y.column] === y.value && y.type === "effect" && y.style !== "Open Circles");
  let f = [];
  const g = (v) => ({
    stroke: a,
    strokeWidth: 2,
    strokeDasharray: v
  });
  return n.forEach((v, y) => {
    let E = d(v), w = g(r(E ? E.style : o));
    f.push(w), E && y > 0 && (f[y - 1] = g(r(E.style)));
  }), f;
}, hk = (e, t, n) => {
  const a = e.filter((o) => o.style === "Open Circles" && o.type === "effect").map((o) => ({ column: o.column, value: o.value, seriesKey: o.seriesKey }));
  let r = [];
  return t.forEach((o) => {
    a.some((s) => o[s.column] === s.value && s.seriesKey === n) && r.push(o);
  }), r;
}, Kd = (e) => {
  var _, L, N, M, U, j;
  const { config: t, d: n, displayArea: a, seriesKey: r, tooltipData: o, xScale: s, yScale: u, colorScale: d, parseDate: f, yScaleRight: g, data: v, circleData: y, dataIndex: E, mode: w } = e, { lineDatapointStyle: O } = t, T = (_ = t == null ? void 0 : t.series.filter(($) => $.dataKey === r)) == null ? void 0 : _[0], m = ($, V, ne, H, oe) => {
    const fe = ne.runtime.seriesLabels || [];
    let I;
    return $ ? I = V(fe[H] || oe) : I = "transparent", ne.lineDatapointColor === "Lighter than Line" && I !== "transparent" && I && (I = zr(I).brighten(1)), I;
  }, A = ($) => (t.xAxis.type === "categorical" ? s($) : s(f($))) + (s.bandwidth ? s.bandwidth() / 2 : 0);
  if (w === "ALWAYS_SHOW_POINTS") {
    if (O === "hidden")
      return /* @__PURE__ */ i.createElement(i.Fragment, null);
    if (O === "always show")
      return (y == null ? void 0 : y.some((V) => V[t.xAxis.dataKey] === n[t.xAxis.dataKey] && V[r] === n[r])) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(
        "circle",
        {
          cx: A(n[t.xAxis.dataKey]),
          cy: T.axis === "Right" ? g(n[T.dataKey]) : u(n[T.dataKey]),
          r: 4.5,
          opacity: n[r] ? 1 : 0,
          fillOpacity: 1,
          fill: m(a, d, t, r, r),
          style: { filter: "unset", opacity: 1 }
        }
      );
  }
  if (w === "HOVER_POINTS" && O === "hover") {
    if (!o || !r || !o.data)
      return;
    let $ = (N = (L = o == null ? void 0 : o.data) == null ? void 0 : L[0]) == null ? void 0 : N[1];
    if (!$)
      return;
    let V, ne = o.data.filter((fe) => fe[0] === r), H = (M = ne == null ? void 0 : ne[0]) == null ? void 0 : M[0], oe = (U = ne == null ? void 0 : ne[0]) == null ? void 0 : U[2];
    return H ? (o == null || o.data.indexOf(H), V = (j = v == null ? void 0 : v.find((fe) => fe[t == null ? void 0 : t.xAxis.dataKey] === $)) == null ? void 0 : j[r], o == null ? void 0 : o.data.map((fe, I) => (t.runtime.seriesLabelsAll.indexOf($), isNaN(V) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : (y == null ? void 0 : y.some((q) => q[t.xAxis.dataKey] === $)) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(
      "circle",
      {
        cx: A($),
        cy: oe === "right" ? g(V) : u(V),
        r: 4.5,
        opacity: 1,
        fillOpacity: 1,
        fill: m(a, d, t, H, r),
        style: { filter: "unset", opacity: 1 },
        key: `line-chart-circle--${JSON.stringify(fe)}--${I}`
      }
    )))) : void 0;
  }
  return w === "ISOLATED_POINTS" && w && ((V, ne) => {
    const H = v[V], oe = v[V - 1], fe = v[V + 1];
    if (V === 0 && !fe[ne] || V === v.length - 1 && !oe[ne] || V !== 0 && H[ne] && !oe[ne] && !fe[ne])
      return !0;
  })(E, r) ? /* @__PURE__ */ i.createElement("circle", { cx: A(n[t.xAxis.dataKey]), cy: T.axis === "Right" ? g(n[T.dataKey]) : u(n[T.dataKey]), r: 5.3, strokeWidth: 2, stroke: d(t.runtime.seriesLabels[r]), fill: d(t.runtime.seriesLabels[r]) }) : null;
}, rm = (e) => {
  const {
    getXAxisData: t,
    getYAxisData: n,
    handleTooltipClick: a,
    handleTooltipMouseOff: r,
    handleTooltipMouseOver: o,
    tooltipData: s,
    xMax: u,
    xScale: d,
    yMax: f,
    yScale: g
  } = e, {
    colorScale: v,
    config: y,
    formatNumber: E,
    handleLineType: w,
    isNumber: O,
    parseDate: T,
    seriesHighlight: m,
    tableData: A,
    transformedData: _,
    updateConfig: L,
    rawData: N
  } = ue.useContext(Ct), { yScaleRight: M } = ph({ config: y, yMax: f, data: _, updateConfig: L });
  if (!o)
    return;
  const { lineDatapointStyle: U, showLineSeriesLabels: j, legend: $ } = y;
  return /* @__PURE__ */ i.createElement(Br, { component: "LineChart" }, /* @__PURE__ */ i.createElement(rt, { left: y.runtime.yAxis.size ? parseInt(y.runtime.yAxis.size) : 66 }, " ", (y.runtime.lineSeriesKeys || y.runtime.seriesKeys).map((V, ne) => {
    var ae;
    let H = y.series.filter((J) => J.dataKey === V)[0].type;
    const oe = y.series.filter((J) => J.dataKey === V), fe = oe[0].axis ? oe[0].axis : "left";
    let I = $.behavior === "highlight" || m.length === 0 || m.indexOf(V) !== -1;
    const Q = hk(y.preliminaryData, N, V);
    let q = fk({ preliminaryData: y.preliminaryData, data: A, stroke: v(y.runtime.seriesLabels[V]), handleLineType: w, lineType: H, seriesKey: V }), se = (J) => d(t(J)) + (d.bandwidth ? d.bandwidth() / 2 : 0);
    return /* @__PURE__ */ i.createElement(
      rt,
      {
        key: `series-${V}`,
        opacity: $.behavior === "highlight" && m.length > 0 && m.indexOf(V) === -1 ? 0.5 : 1,
        display: $.behavior === "highlight" || m.length === 0 && !$.dynamicLegend || m.indexOf(V) !== -1 ? "block" : "none"
      },
      _.map((J, G) => {
        const he = y.series.find(({ dataKey: Ve }) => Ve === V), { axis: ee } = he, ge = Object.keys(y.runtime.seriesLabels).length > 1, be = ee === "Right" ? "rightLabel" : "label";
        let _e = y.runtime.yAxis[be];
        return ge || (_e = y.isLegendValue ? y.runtime.seriesLabels[V] : _e), J[V] !== void 0 && J[V] !== "" && J[V] !== null && O(J[V]) && /* @__PURE__ */ i.createElement(rt, { key: `series-${V}-point-${G}`, className: "checkwidth" }, /* @__PURE__ */ i.createElement(mr, { key: "bars", width: Number(u), height: Number(f), fill: "transparent", fillOpacity: 0.05, onMouseMove: (Ve) => o(Ve, A), onMouseOut: r, onClick: (Ve) => a(Ve, _) }), /* @__PURE__ */ i.createElement(Pt, { display: y.labels ? "block" : "none", x: se(J), y: fe === "Right" ? M(n(J, V)) : g(n(J, V)), fill: "#000", textAnchor: "middle" }, E(J[V], "left")), (U === "hidden" || U === "always show") && /* @__PURE__ */ i.createElement(
          Kd,
          {
            mode: "ALWAYS_SHOW_POINTS",
            dataIndex: G,
            circleData: Q,
            data: _,
            d: J,
            config: y,
            seriesKey: V,
            displayArea: I,
            tooltipData: s,
            xScale: d,
            yScale: g,
            colorScale: v,
            parseDate: T,
            yScaleRight: M,
            seriesAxis: fe,
            key: `line-circle--${G}`
          }
        ), /* @__PURE__ */ i.createElement(
          Kd,
          {
            mode: "ISOLATED_POINTS",
            dataIndex: G,
            circleData: Q,
            data: _,
            d: J,
            config: y,
            seriesKey: V,
            displayArea: I,
            tooltipData: s,
            xScale: d,
            yScale: g,
            colorScale: v,
            parseDate: T,
            yScaleRight: M,
            seriesAxis: fe,
            key: `isolated-circle-${G}`
          }
        ));
      }),
      /* @__PURE__ */ i.createElement(i.Fragment, null, U === "hover" && /* @__PURE__ */ i.createElement(
        Kd,
        {
          dataIndex: 0,
          mode: "HOVER_POINTS",
          circleData: Q,
          data: _,
          config: y,
          seriesKey: V,
          displayArea: I,
          tooltipData: s,
          xScale: d,
          yScale: g,
          colorScale: v,
          parseDate: T,
          yScaleRight: M,
          seriesAxis: fe
        }
      )),
      (ae = y == null ? void 0 : y.preliminaryData) != null && ae.some((J) => J.value && J.column) ? /* @__PURE__ */ i.createElement(
        Lg,
        {
          curve: vc[oe[0].lineType],
          segments: (y.xAxis.type === "date" && y.xAxis.sortDates ? _.sort((J, G) => {
            let he = t(J), ee = t(G);
            return he < ee ? -1 : ee < he ? 1 : 0;
          }) : _).map((J) => [J]),
          segmentation: "x",
          x: (J) => se(J),
          y: (J) => fe === "Right" ? M(n(J, V)) : g(Number(n(J, V))),
          styles: q,
          defined: (J, G) => J[V] !== "" && J[V] !== null && J[V] !== void 0
        }
      ) : /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
        fa,
        {
          curve: vc[oe[0].lineType],
          data: y.xAxis.type === "date" && y.xAxis.sortDates ? _.sort((J, G) => {
            let he = t(J), ee = t(G);
            return he < ee ? -1 : ee < he ? 1 : 0;
          }) : _,
          x: (J) => se(J),
          y: (J) => fe === "Right" ? M(n(J, V)) : g(Number(n(J, V))),
          stroke: v(y.runtime.seriesLabels[V]),
          strokeWidth: 2,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: H ? w(H) : 0,
          defined: (J, G) => J[V] !== "" && J[V] !== null && J[V] !== void 0
        }
      )),
      Q.map((J, G) => /* @__PURE__ */ i.createElement("circle", { key: G, cx: se(J), cy: g(Number(n(J, V))), r: 6, strokeWidth: 2, stroke: v ? v(y.runtime.seriesLabels[V]) : "#000", fill: "#fff" })),
      y.animate && /* @__PURE__ */ i.createElement(
        fa,
        {
          className: "animation",
          curve: oe.lineType,
          data: _,
          x: (J) => se(J),
          y: (J) => fe === "Right" ? M(n(J, V)) : g(Number(n(J, V))),
          stroke: "#fff",
          strokeWidth: 3,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: H ? w(H) : 0,
          defined: (J, G) => J[V] !== "" && J[V] !== null && J[V] !== void 0
        }
      ),
      j && (y.runtime.lineSeriesKeys || y.runtime.seriesKeys).map((J) => {
        let G;
        for (let he = _.length - 1; he >= 0; he--)
          if (_[he][J]) {
            G = _[he];
            break;
          }
        return G ? /* @__PURE__ */ i.createElement("text", { x: se(G) + 5, y: g(n(G, J)), alignmentBaseline: "middle", fill: y.colorMatchLineSeriesLabels && v ? v(y.runtime.seriesLabels[J] || J) : "black" }, y.runtime.seriesLabels[J] || J) : /* @__PURE__ */ i.createElement(i.Fragment, null);
      })
    );
  }), y.legend.dynamicLegend && m.length === 0 && /* @__PURE__ */ i.createElement(Pt, { x: u / 2, y: f / 2, fill: "black", textAnchor: "middle", color: "black" }, y.legend.dynamicLegendChartMessage)));
}, pk = (e) => {
  const { rawData: t, updateConfig: n } = ue.useContext(Ct), { xScale: a, yScale: r, config: o, height: s, width: u, handleTooltipMouseOff: d, handleTooltipMouseOver: f } = e, { forestPlot: g } = o, v = o.xAxis.tickWidthMax + 10, [y, E] = ue.useState(!1);
  ue.useEffect(() => {
    try {
      const L = ["estimateField", "lower", "upper", "estimateRadius"], N = o, M = 10;
      for (let U = 0; U < M; U++)
        L.forEach((j) => {
          var $;
          o.forestPlot[j] && o.forestPlot[j] !== (($ = N.columns[o.forestPlot[`additionalColumn${U}`]]) == null ? void 0 : $.name) && (delete N.columns[`additionalColumn${U}`], N.columns[o.forestPlot[j]] = {}, N.columns[o.forestPlot[j]].dataKey = N.forestPlot[j], N.columns[o.forestPlot[j]].name = N.forestPlot[j], N.columns[o.forestPlot[j]].dataTable = !0, N.columns[o.forestPlot[j]].tooltips = !0, N.columns[o.forestPlot[j]].label = N.forestPlot[j]);
        });
      o.forestPlot.radius.scalingColumn && (N.columns[o.forestPlot.radius.scalingColumn] = {}, N.columns[o.forestPlot.radius.scalingColumn].dataKey = N.forestPlot.radius.scalingColumn, N.columns[o.forestPlot.radius.scalingColumn].name = N.forestPlot.radius.scalingColumn, N.columns[o.forestPlot.radius.scalingColumn].label = N.forestPlot.radius.scalingColumn, N.columns[o.forestPlot.radius.scalingColumn].dataTable = !0, N.columns[o.forestPlot.radius.scalingColumn].tooltips = !0), N.table.showVertical && (N.table.indexLabel = o.xAxis.dataKey), n(N);
    } catch (L) {
      console.log(L.message);
    }
  }, []), ue.useEffect(() => {
    !y && o.forestPlot.type === "Logarithmic" && (n({
      ...o,
      dataFormat: {
        ...o.dataFormat,
        roundTo: 2
      }
    }), E(!0));
  }, [o.forestPlot.type]);
  const w = o.data.find((L) => L[o.xAxis.dataKey] === o.forestPlot.pooledResult.column), O = w ? [
    { x: a(w[o.forestPlot.lower]), y: s - Number(o.forestPlot.rowHeight) },
    { x: a(w[o.forestPlot.estimateField]), y: s - g.pooledResult.diamondHeight - Number(o.forestPlot.rowHeight) },
    { x: a(w[o.forestPlot.upper]), y: s - Number(o.forestPlot.rowHeight) },
    { x: a(w[o.forestPlot.estimateField]), y: s + g.pooledResult.diamondHeight - Number(o.forestPlot.rowHeight) },
    { x: a(w[o.forestPlot.lower]), y: s - Number(o.forestPlot.rowHeight) }
  ] : [], T = o.forestPlot.rowHeight, m = [
    { x: 0, y: T },
    { x: u, y: T }
  ], A = [
    { x: 0, y: s },
    { x: u, y: s }
  ], _ = Object.entries(o.columns).map((L) => L[1]).filter((L) => L.forestPlot === !0);
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(rt, { width: u }, g.title && /* @__PURE__ */ i.createElement(Pt, { className: "forest-plot--title", x: g.type === "Linear" ? a(0) : a(1), y: 0, textAnchor: "middle", verticalAnchor: "start", fontSize: Ti(o.fontSize), fill: "black" }, g.title), g.lineOfNoEffect.show && g.type === "Linear" && /* @__PURE__ */ i.createElement(nn, { from: { x: a(0), y: 0 + T }, to: { x: a(0), y: s }, className: "forestplot__line-of-no-effect", stroke: g.regression.baseLineColor || "black" }), g.lineOfNoEffect.show && g.type === "Logarithmic" && /* @__PURE__ */ i.createElement(nn, { from: { x: a(1), y: 0 + T }, to: { x: a(1), y: s }, className: "forestplot__line-of-no-effect", stroke: g.regression.baseLineColor || "black" }), t.map((L, N) => {
    const M = Wn({
      domain: t.map((H) => H[g.radius.scalingColumn]),
      range: [g.radius.min, g.radius.max]
    }), U = g.radius.scalingColumn !== "" ? M(t[N][g.radius.scalingColumn]) : 4, j = g.colors.shape ? g.colors.shape : "black", $ = g.colors.line ? g.colors.line : "black", V = 4;
    return L[o.xAxis.dataKey] === g.pooledResult.column ? /* @__PURE__ */ i.createElement(fa, { data: O, x: (H) => H.x, y: (H) => H.y - Ti(o.fontSize) / 2, stroke: "black", strokeWidth: 2, fill: "black", curve: lf }) : /* @__PURE__ */ i.createElement(rt, null, /* @__PURE__ */ i.createElement(
      "path",
      {
        stroke: $,
        strokeWidth: 1,
        className: "lower-ci",
        d: `
                    M${a(L[g.lower])} ${r(N) - Number(V)}
                    L${a(L[g.lower])} ${r(N) + Number(V)}
                `
      }
    ), /* @__PURE__ */ i.createElement(
      "path",
      {
        stroke: $,
        strokeWidth: 1,
        className: "upper-ci",
        d: `
                    M${a(L[g.upper])} ${r(N) - Number(V)}
                    L${a(L[g.upper])} ${r(N) + Number(V)}
                `
      }
    ), /* @__PURE__ */ i.createElement("line", { stroke: $, className: `line-${L[o.yAxis.dataKey]}`, key: N, x1: a(L[g.lower]), x2: a(L[g.upper]), y1: r(N), y2: r(N) }), g.shape === "circle" && /* @__PURE__ */ i.createElement(Py, { className: "forest-plot--circle", cx: a(Number(L[g.estimateField])), cy: r(N), r: g.radius.scalingColumn !== "" ? M(t[N][g.radius.scalingColumn]) : 4, fill: j, style: { opacity: 1, filter: "unset" } }), g.shape === "square" && /* @__PURE__ */ i.createElement("rect", { className: "forest-plot--square", x: a(Number(L[g.estimateField])), y: r(N) - U / 2, width: U, height: U, fill: j, style: { opacity: 1, filter: "unset" } }), g.shape === "text" && /* @__PURE__ */ i.createElement(Pt, { className: "forest-plot--text", x: a(Number(L[g.estimateField])), y: r(N), textAnchor: "middle", verticalAnchor: "middle", fontSize: Ti(o.fontSize), fill: j }, L[g.estimateField]));
  }), O && g.regression.showDiamond && /* @__PURE__ */ i.createElement(fa, { data: O, x: (L) => L.x, y: (L) => L.y, stroke: "black", strokeWidth: 2, fill: g.regression.baseLineColor, curve: lf }), g.regression.description && /* @__PURE__ */ i.createElement(Pt, { x: 0 - Number(o.xAxis.size), width: u, y: s - o.forestPlot.rowHeight - Number(g.rowHeight) / 3, verticalAnchor: "start", textAnchor: "start", style: { fontWeight: "bold", fontSize: 12 } }, g.regression.description), /* @__PURE__ */ i.createElement(mr, { key: "forest-plot-tooltip-area", className: "forest-plot-tooltip-area", width: u, height: s, fill: "transparent", fillOpacity: 0.5, onMouseMove: (L) => f(L, t), onMouseOut: d })), /* @__PURE__ */ i.createElement(nn, { from: m[0], to: m[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__top-line" }), /* @__PURE__ */ i.createElement(nn, { from: A[0], to: A[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__bottom-line" }), _.map((L) => t.map((N, M) => /* @__PURE__ */ i.createElement(Pt, { className: `${N[L.name]}`, x: L.forestPlotAlignRight ? u : L.forestPlotStartingPoint, y: r(M), textAnchor: L.forestPlotAlignRight ? "end" : "start", verticalAnchor: "middle", fontSize: Ti(o.fontSize), fill: "black" }, N[L.name]))), !g.hideDateCategoryCol && t.map((L, N) => /* @__PURE__ */ i.createElement(Pt, { className: `${L[o.xAxis.dataKey]}`, x: 0, y: r(N), textAnchor: "start", verticalAnchor: "middle", fontSize: Ti(o.fontSize), fill: "black" }, L[o.xAxis.dataKey])), !g.hideDateCategoryCol && o.xAxis.dataKey && /* @__PURE__ */ i.createElement(Pt, { className: o.xAxis.dataKey, x: 0, y: 0, textAnchor: "start", verticalAnchor: "start", fontSize: Ti(o.fontSize), fill: "black" }, o.xAxis.dataKey), _.map((L) => /* @__PURE__ */ i.createElement(Pt, { className: `${L.label}`, x: L.forestPlotAlignRight ? u : L.forestPlotStartingPoint, y: 0, textAnchor: L.forestPlotAlignRight ? "end" : "start", verticalAnchor: "start", fontSize: Ti(o.fontSize), fill: "black" }, L.label)), g.leftLabel && /* @__PURE__ */ i.createElement(Pt, { className: "forest-plot__left-label", x: g.type === "Linear" ? a(0) - 25 : a(1) - 25, y: s + v, textAnchor: "end", verticalAnchor: "start" }, g.leftLabel), g.rightLabel && /* @__PURE__ */ i.createElement(Pt, { className: "forest-plot__right-label", x: g.type === "Linear" ? a(0) + 25 : a(1) + 25, y: s + v, textAnchor: "start", verticalAnchor: "start" }, g.rightLabel));
}, mk = ({ width: e, height: t, originalWidth: n }) => {
  var L;
  const { config: a, colorScale: r, transformedData: o, formatNumber: s, seriesHighlight: u, getTextWidth: d } = ue.useContext(Ct);
  if (!a || ((L = a == null ? void 0 : a.series) == null ? void 0 : L.length) < 2)
    return;
  const f = a.barHasBorder === "true" ? 1 : 0, g = e / 2, v = { small: 16, medium: 18, large: 20 }, y = 1.02, E = {
    parentKey: a.dataDescription.seriesKey,
    dataKey: a.series[0].dataKey,
    dataKeyLabel: a.runtime.seriesLabels[a.series[0].dataKey] || a.series[0].dataKey,
    color: r(a.runtime.seriesLabels[a.series[0].dataKey]),
    max: Math.max.apply(
      Math,
      o.map((N) => N[a.series[0].dataKey])
    ),
    labelColor: ""
  }, w = {
    parentKey: a.dataDescription.seriesKey,
    dataKey: a.series[1].dataKey,
    dataKeyLabel: a.runtime.seriesLabels[a.series[1].dataKey] || a.series[1].dataKey,
    color: r(a.runtime.seriesLabels[a.series[1].dataKey]),
    max: Math.max.apply(
      Math,
      o.map((N) => N[a.series[1].dataKey])
    ),
    labelColor: ""
  }, O = Wn({
    domain: [0, Math.max(E.max * y, w.max * 1.1)],
    range: [0, g]
  });
  let T = "#000000";
  E.color && zr.contrast(T, E.color) < 4.9 && (E.labelColor = "#FFFFFF"), w.color && zr.contrast(T, w.color) < 4.9 && (w.labelColor = "#FFFFFF");
  const m = a.yAxis.label ? `${a.yAxis.label}: ` : "", A = (N) => `<p>
				${a.dataDescription.seriesKey}: ${E.dataKeyLabel}<br/>
				${a.xAxis.dataKey}: ${N[a.xAxis.dataKey]}<br/>
				${m}${s(N[E.dataKey], "left")}
			</p>`, _ = (N) => `<p>
				${a.dataDescription.seriesKey}: ${w.dataKeyLabel}<br/>
				${a.xAxis.dataKey}: ${N[a.xAxis.dataKey]}<br/>
				${m}${s(N[w.dataKey], "left")}
			</p>`;
  return e > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `
				#cdc-visualization__paired-bar-chart,
				 #cdc-visualization__paired-bar-chart > .visx-group {
					transform-origin: center
				}
				`), /* @__PURE__ */ i.createElement("svg", { id: "cdc-visualization__paired-bar-chart", width: n, height: t, viewBox: `0 0 ${e + Number(a.runtime.yAxis.size)} ${t}`, role: "img", tabIndex: 0 }, /* @__PURE__ */ i.createElement(rt, { top: 0, left: Number(a.xAxis.size) }, o.filter((N) => a.series[0].dataKey === E.dataKey).map((N, M) => {
    let U = a.legend.behavior === "highlight" && u.length > 0 && u.indexOf(a.series[0].dataKey) === -1, j = a.legend.behavior === "highlight" || u.length === 0 || u.indexOf(a.series[0].dataKey) !== -1, $ = O(N[a.series[0].dataKey]), V = Number(a.barHeight) ? Number(a.barHeight) : 25, ne = 0;
    ne = M !== 0 ? (Number(a.barSpace) + V + f) * M : ne;
    const H = (Number(a.barSpace) + V + f) * o.length;
    a.heights.horizontal = H;
    const fe = d(s(N[E.dataKey], "left"), `normal ${v[a.fontSize]}px sans-serif`) < $ - 5;
    return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(rt, { key: `group-${E.dataKey}-${N[a.xAxis.dataKey]}`, className: "horizontal" }, /* @__PURE__ */ i.createElement(
      mr,
      {
        id: `bar-${E.dataKey}-${N[a.dataDescription.xKey]}`,
        className: "bar group-1",
        key: `bar-${E.dataKey}-${N[a.dataDescription.xKey]}`,
        x: g - $,
        y: ne,
        width: O(N[a.series[0].dataKey]),
        height: V,
        fill: E.color,
        "data-tooltip-html": A(N),
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`,
        stroke: "#333",
        strokeWidth: f,
        opacity: U ? 0.5 : 1,
        display: j ? "block" : "none"
      }
    ), a.yAxis.displayNumbersOnBar && j && /* @__PURE__ */ i.createElement(Pt, { textAnchor: fe ? "start" : "end", dx: fe ? 5 : -5, verticalAnchor: "middle", x: g - $, y: ne + a.barHeight / 2, fill: fe ? E.labelColor : "#000" }, s(N[E.dataKey], "left"))));
  }), o.filter((N) => a.series[1].dataKey === w.dataKey).map((N, M) => {
    let U = O(N[a.series[1].dataKey]), j = a.legend.behavior === "highlight" && u.length > 0 && u.indexOf(a.series[1].dataKey) === -1, $ = a.legend.behavior === "highlight" || u.length === 0 || u.indexOf(a.series[1].dataKey) !== -1, V = a.barHeight ? Number(a.barHeight) : 25, ne = 0;
    ne = M !== 0 ? (Number(a.barSpace) + V + f) * M : ne;
    const H = (Number(a.barSpace) + V + f) * o.length;
    a.heights.horizontal = H;
    const fe = d(s(N[w.dataKey], "left"), `normal ${v[a.fontSize]}px sans-serif`) < U - 5;
    return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `
                      .bar-${w.dataKey}-${N[a.xAxis.dataKey]} {
                          transform-origin: ${g}px ${ne}px
                      }
							      `), /* @__PURE__ */ i.createElement(rt, { key: `group-${w.dataKey}-${N[a.dataDescription.xKey]}`, className: "horizontal" }, /* @__PURE__ */ i.createElement(
      mr,
      {
        id: `bar-${w.dataKey}-${N[a.dataDescription.xKey]}`,
        className: "bar group-2",
        key: `bar-${w.dataKey}-${N[a.dataDescription.xKey]}`,
        x: g,
        y: ne,
        width: O(N[a.series[1].dataKey]),
        height: V,
        fill: w.color,
        "data-tooltip-html": _(N),
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`,
        strokeWidth: f,
        stroke: "#333",
        opacity: j ? 0.5 : 1,
        display: $ ? "block" : "none"
      }
    ), a.yAxis.displayNumbersOnBar && $ && /* @__PURE__ */ i.createElement(Pt, { textAnchor: fe ? "end" : "start", dx: fe ? -5 : 5, verticalAnchor: "middle", x: g + U, y: ne + a.barHeight / 2, fill: fe ? w.labelColor : "#000" }, s(N[w.dataKey], "left"))));
  }))));
}, ly = ({ config: e, minValue: t, maxValue: n, existPositiveValue: a, data: r, isAllLine: o }) => {
  let s = 0, u = 0, d = 0, f = 0;
  if (!r)
    return { min: s, max: u };
  const { visualizationType: g, series: v } = e, { max: y, min: E } = e.runtime.yAxis, w = a ? y >= n : y >= 0, O = e.useLogScale ? E >= 0 : E <= 0 && t >= 0 || E <= t && t < 0;
  s = E && O ? E : t, u = y && w ? y : Number.MIN_VALUE;
  const { lower: T, upper: m } = (e == null ? void 0 : e.confidenceKeys) || {};
  if (T && m && e.visualizationType === "Bar") {
    const A = s < 0 ? 1.1 : 0;
    u = Math.max(n, Math.max(...r.flatMap((_) => [_[m], _[T]])) * 1.15), s = Math.min(t, Math.min(...r.flatMap((_) => [_[m], _[T]])) * 1.15) * A;
  }
  if (e.series.filter((A) => (A == null ? void 0 : A.type) === "Forecasting")) {
    const {
      runtime: { forecastingSeriesKeys: A }
    } = e;
    if ((A == null ? void 0 : A.length) > 0) {
      let _ = [];
      A.forEach((U) => {
        var j;
        (j = U.confidenceIntervals) == null || j.map(($) => {
          _.push($.high), _.push($.low);
        });
      });
      const L = r.map((U) => _.map((j) => U[j])), N = Math.max.apply(
        null,
        L.map((U) => U[0])
      ), M = Math.min.apply(
        null,
        L.map((U) => U[1])
      );
      N > u && (u = N), M < s && (s = M);
    }
  }
  if (g === "Combo")
    try {
      if (!r)
        throw new Error("COVE: missing data while getting min/max for combo chart.");
      let A = v.filter((N) => N.axis === "Left"), _ = v.filter((N) => N.axis === "Right");
      const L = (N, M, U, j = "left") => {
        let $ = 0;
        return (M.map((ne) => ne.dataKey) || []).forEach((ne) => {
          let H = M.find((I) => I.dataKey === ne), oe = N.map((I) => I[ne]), fe = Math.max.apply(null, oe);
          e.visualizationSubType === "stacked" && j === "left" && H.type === "Bar" && ($ += fe), fe > U && (U = fe), U < $ && (U = $);
        }), U;
      };
      d = L(r, A, d, "left"), f = L(r, _, f, "right"), d < y && (d = y);
    } catch (A) {
      console.error(A.message);
    }
  if ((g === "Bar" || g === "Combo" && !o) && s > 0 && (s = 0), (e.visualizationType === "Bar" || e.visualizationType === "Combo" && !o) && s < 0 && (s = s * 1.1), e.visualizationType === "Combo" && o && ((E == null || E === "") && s > 0 && (s = 0), E)) {
    const A = e.useLogScale ? E >= 0 && E < t : E < t;
    s = E && A ? E : t;
  }
  if (e.visualizationType === "Deviation Bar" && s > 0) {
    const A = Number(E) < Math.min(t, Number(e.xAxis.target));
    s = E && A ? E : 0;
  }
  if (e.visualizationType === "Line") {
    const A = e.useLogScale ? E >= 0 && E < t : E < t;
    s = E && A ? E : t;
  }
  if (u === Number.MIN_VALUE && (u = a ? n : 0), e.runtime.yAxis.paddingPercent) {
    let A = (u - s) * e.runtime.yAxis.paddingPercent;
    s -= A, u += A;
  }
  if (e.isLollipopChart && e.yAxis.displayNumbersOnBar) {
    const A = r.map((L) => L[e.series[0].dataKey]), _ = Math.max(...A).toString().length;
    switch (!0) {
      case (_ > 8 && _ <= 12):
        u = u * 1.3;
        break;
      case (_ > 4 && _ <= 7):
        u = u * 1.1;
        break;
    }
  }
  return e.yAxis.enablePadding && (s < 0 ? (u *= 1 + e.yAxis.scalePadding * 2 / 100, s *= 1 + e.yAxis.scalePadding * 2 / 100) : u *= 1 + e.yAxis.scalePadding / 100), { min: s, max: u, leftMax: d, rightMax: f };
}, gk = (e) => {
  let { xAxisDataMapped: t, xMax: n, yMax: a, min: r, max: o, config: s, data: u } = e;
  const { rawData: d, dimensions: f } = ue.useContext(Ct), [g, v] = f, y = s.runtime.barSeriesKeys || s.runtime.seriesKeys, E = s.runtime.xAxis.type, w = s.orientation === "horizontal", O = (V) => V[s.runtime.originalXAxis.dataKey], T = u.map((V) => O(V)), { visualizationType: m } = s;
  let A = null, _ = null, L = null, N = null, M = null, U = null, j = null;
  const $ = {
    TIME: "time",
    LOG: "log",
    POINT: "point",
    LINEAR: "linear",
    BAND: "band"
  };
  if (w && (A = yk({ min: r * 1.03, ...e }), A.type = s.useLogScale ? $.LOG : $.LINEAR, _ = xk(E, t), _.rangeRound([0, a]), M = am(y, [0, a])), w || (j = am(T, [0, n], 0.5), A = Yd(t, [0, n], 1 - s.barThickness), _ = vk(e), M = Yd(y, [0, A.bandwidth()], 0)), s.xAxis.type === "date" && s.xAxis.sortDates) {
    let V = Math.min(...t), ne = Math.max(...t);
    V -= (s.xAxis.padding ? s.xAxis.padding * 0.01 : 0) * (ne - V), ne += (s.xAxis.padding ? s.xAxis.padding * 0.01 : 0) * (ne - V), A = mv({
      domain: [V, ne],
      range: [0, n]
    }), j = A, A.type = $.LINEAR, M = Yd(y, [0, s.barThickness * n], 0);
  }
  if (s.visualizationType === "Deviation Bar") {
    const V = s.isLollipopChart ? 1.05 : 1.03;
    _ = Gd({
      domain: t,
      range: [0, a]
    }), A = Wn({
      domain: [r * V, Math.max(Number(s.xAxis.target), o)],
      range: [0, n],
      round: !0,
      nice: !0
    }), A.type = $.LINEAR;
  }
  if (s.visualizationType === "Scatter Plot" && s.xAxis.type === "continuous" && (A = Wn({
    domain: [0, Math.max.apply(null, A.domain())],
    range: [0, n]
  }), A.type = $.LINEAR), m === "Box Plot") {
    const V = [];
    if (s.boxplot.plots.map((fe) => fe.columnOutliers.map((I) => V.push(I))) && !s.boxplot.hideOutliers) {
      let fe = Math.min(...V), I = Math.max(...V);
      fe < r && (r = fe), I > o && (o = I);
    }
    let H = Math.min(...s.boxplot.plots.map((fe) => fe.columnLowerBounds)), oe = Math.max(...s.boxplot.plots.map((fe) => fe.columnUpperBounds));
    H < r && (r = H), oe > o && (o = oe), _ = Wn({
      range: [a, 0],
      round: !0,
      domain: [r, o]
    }), A = Gd({
      range: [0, n],
      round: !0,
      domain: s.boxplot.categories,
      padding: 0.4
    }), A.type = $.BAND;
  }
  if (m === "Paired Bar") {
    let ne = Math.max.apply(
      Math,
      u.map((oe) => {
        var fe;
        return oe[(fe = s.series[0]) == null ? void 0 : fe.dataKey];
      })
    ), H = Math.max.apply(
      Math,
      u.map((oe) => {
        var fe;
        return oe[(fe = s.series[1]) == null ? void 0 : fe.dataKey];
      })
    );
    N = Wn({
      domain: [0, Math.max(ne, H) * 1.02],
      range: [n / 2, 0]
    }), L = Wn({
      domain: N.domain(),
      range: [n / 2, n],
      nice: !0
    });
  }
  if (m === "Forest Plot") {
    const V = () => s.forestPlot.regression.showDiamond || s.forestPlot.regression.description ? [0 + s.forestPlot.rowHeight * 2, a - s.forestPlot.rowHeight] : [0 + s.forestPlot.rowHeight * 2, a];
    _ = Wn({
      domain: [0, d.length],
      range: V()
    });
    const ne = 5, H = Number(s.forestPlot.leftWidthOffset) / 100 * n, oe = Number(s.forestPlot.rightWidthOffset) / 100 * n, fe = Number(s.forestPlot.rightWidthOffsetMobile) / 100 * n, I = Number(s.forestPlot.leftWidthOffsetMobile) / 100 * n;
    if (g > 480) {
      if (s.forestPlot.type === "Linear" && (A = Wn({
        domain: [Math.min(...u.map((Q) => parseFloat(Q[s.forestPlot.lower]))) - ne, Math.max(...u.map((Q) => parseFloat(Q[s.forestPlot.upper]))) + ne],
        range: [H, f[0] - oe]
      }), A.type = $.LINEAR), s.forestPlot.type === "Logarithmic") {
        let Q = Math.max(...u.map((se) => parseFloat(se[s.forestPlot.upper]))), q = Math.min(...u.map((se) => parseFloat(se[s.forestPlot.lower])));
        A = Uu({
          domain: [q, Q],
          range: [H, n - oe],
          nice: !0
        }), A.type = $.LOG;
      }
    } else if (s.forestPlot.type === "Linear" && (A = Wn({
      domain: [Math.min(...u.map((Q) => parseFloat(Q[s.forestPlot.lower]))) - ne, Math.max(...u.map((Q) => parseFloat(Q[s.forestPlot.upper]))) + ne],
      range: [I, n - fe],
      type: $.LINEAR
    })), s.forestPlot.type === "Logarithmic") {
      let Q = Math.max(...u.map((se) => parseFloat(se[s.forestPlot.upper]))), q = Math.min(...u.map((se) => parseFloat(se[s.forestPlot.lower])));
      A = Uu({
        domain: [q, Q],
        range: [H, n - oe],
        nice: !0,
        base: Q > 1 ? 10 : 2,
        round: !1,
        type: $.LOG
      });
    }
  }
  return { xScale: A, yScale: _, seriesScale: M, g1xScale: N, g2xScale: L, xScaleNoPadding: U, xScaleBrush: j };
}, yk = ({ min: e, max: t, xMax: n, config: a }) => (e = a.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e, (a.useLogScale ? Uu : Wn)({
  domain: [e, t],
  range: [0, n],
  nice: a.useLogScale,
  zero: a.useLogScale,
  type: a.useLogScale ? "log" : "linear"
})), vk = ({ min: e, max: t, yMax: n, config: a, leftMax: r }) => {
  e = a.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e;
  const o = a.useLogScale ? Uu : Wn;
  return a.visualizationType === "Combo" && (t = r), o({
    domain: [e, t],
    range: [n, 0],
    nice: a.useLogScale,
    zero: a.useLogScale
  });
}, xk = (e, t) => e === "date" ? Wn({
  domain: [Math.min(...t), Math.max(...t)]
}) : Yo({ domain: t, padding: 0.5 }), am = (e, t, n = 0) => Yo({
  domain: e,
  range: t,
  padding: n,
  type: "point"
}), Yd = (e, t, n = 0) => Gd({
  domain: e,
  range: t,
  padding: n,
  type: "band"
});
function bk(e) {
  return { hasTopAxis: e.visualizationType === "Bar" || e.visualizationType === "Combo" || e.visualizationType === "Line" };
}
const Rs = () => {
  const { config: e } = ue.useContext(Ct), { visualizationType: t, series: n, orientation: a, visualizationSubType: r } = e, o = [
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
  ], s = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"], u = () => !["Forest Plot", "Sankey"].includes(t), d = () => !["Spark Line"].includes(t), f = () => !["Spark Line"].includes(t), g = () => !["Area Chart", "Box Plot", "Pie", "Scatter Plot", "Forest Plot", "Spark Line", "Sankey"].includes(t), v = () => !["Area Chart", "Scatter Plot", "Box Plot", "Forest Plot", "Spark Line", "Sankey"].includes(t), y = () => {
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
  }, E = () => t === "Forest Plot" ? !1 : e.orientation === "horizontal" && (e.yAxis.labelPlacement === "Below Bar" || e.yAxis.labelPlacement === "On Date/Category Axis" || e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar"), w = () => {
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
  }, O = () => {
    if ((t === "Bar" || "Combo") && r === "regular")
      return !0;
  }, T = () => ["Line", "Bar", "Area Chart", "Combo"].includes(t) && a === "vertical", m = () => ["Box Plot", "Scatter Plot", "Pie"].includes(t) ? !1 : n == null ? void 0 : n.some((le) => le.type === "Bar" || le.type === "Paired Bar" || le.type === "Deviation Bar"), A = () => {
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
  }, _ = !["Box Plot", "Forest Plot", "Spark Line"].includes(t);
  return {
    enabledChartTypes: o,
    headerColors: s,
    visCanAnimate: v,
    visHasAnchors: w,
    visHasBarBorders: m,
    visHasDataCutoff: A,
    visHasLabelOnData: g,
    visHasDataSuppression: O,
    visHasLegend: y,
    visHasBrushChart: T,
    visHasNumbersOnBars: E,
    visSupportsBarSpace: () => ["Forest Plot"].includes(t) ? !1 : a === "horizontal" || t === "Paired Bar",
    visSupportsBarThickness: () => !["Forest Plot"].includes(t),
    visSupportsChartHeight: () => !["Spark Line"].includes(t),
    visSupportsDateCategoryAxis: u,
    visSupportsDateCategoryAxisLabel: () => !["Forest Plot", "Spark Line"].includes(t),
    visSupportsDateCategoryAxisLine: () => !["Forest Plot", "Spark Line"].includes(t),
    visSupportsDateCategoryAxisTicks: () => !["Forest Plot", "Spark Line"].includes(t),
    visSupportsDateCategoryHeight: () => !["Spark Line", "Sankey"].includes(t),
    visSupportsDateCategoryNumTicks: () => !["Spark Line"].includes(t),
    visSupportsDateCategoryTickRotation: () => !["Spark Line"].includes(t),
    visSupportsDateCategoryAxisPadding: () => e.xAxis.type === "date" && e.xAxis.sortDates,
    visSupportsFilters: () => !["Forest Plot", "Sankey"].includes(t),
    visSupportsFootnotes: f,
    visSupportsLeftValueAxis: () => !["Spark Line", "Sankey"].includes(t),
    visSupportsNonSequentialPallete: () => !["Paired Bar", "Deviation Bar", "Forest Plot", "Forecasting", "Sankey"].includes(t),
    visSupportsRankByValue: () => !["Spark Line"].includes(t),
    visSupportsRegions: () => !["Forest Plot", "Pie", "Paired Bar", "Spark Line", "Sankey"].includes(t),
    visSupportsResponsiveTicks: () => !["Spark Line"].includes(t),
    visSupportsReverseColorPalette: () => !["Forest Plot", "Paired Bar", "Deviation Bar", "Sankey"].includes(t),
    visSupportsSequentialPallete: () => !["Paired Bar", "Deviation Bar", "Forest Plot", "Forecasting", "Sankey"].includes(t),
    visSupportsSuperTitle: d,
    visSupportsTooltipLines: () => !!["Combo", "Forecasting", "Area Chart", "Line", "Bar"].includes(t),
    visHasSelectableLegendValues: _,
    visSupportsTooltipOpacity: () => !["Spark Line", "Sankey"].includes(t),
    visSupportsValueAxisGridLines: () => {
      const Ee = ["Forest Plot"];
      return !(a === "horizontal" || Ee.includes(t));
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
const Sk = /* @__PURE__ */ If(DS), Ek = /* @__PURE__ */ If($S);
var gh = {};
gh.__esModule = !0;
gh.default = kk;
var Mu = ue;
function kk(e) {
  var t = (0, Mu.useState)(e), n = t[0], a = t[1], r = (0, Mu.useRef)(null), o = (0, Mu.useCallback)(function(s, u) {
    r.current = u || null, a(s);
  }, [a]);
  return (0, Mu.useLayoutEffect)(function() {
    r.current && (r.current(n), r.current = null);
  }, [n]), [n, o];
}
var yh = {}, vh = {};
vh.__esModule = !0;
vh.default = wk;
function wk(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var xh = {};
xh.__esModule = !0;
xh.default = Ak;
function Tk(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = Ck(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var a = 0;
    return function() {
      return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ck(e, t) {
  if (e) {
    if (typeof e == "string")
      return im(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return im(e, t);
  }
}
function im(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function Ak(e, t) {
  for (var n = e, a = 1 / 0, r = Tk(t), o; !(o = r()).done; ) {
    var s = o.value, u = Math.sqrt(Math.pow(s.x - e.x, 2) + Math.pow(s.y - e.y, 2));
    u < a && (a = u, n = {
      x: s.x,
      y: s.y
    });
  }
  return n;
}
yh.__esModule = !0;
yh.default = Rk;
var om = sy(vh), Pk = sy(xh);
function sy(e) {
  return e && e.__esModule ? e : { default: e };
}
function Rk(e, t, n) {
  var a, r, o, s;
  return n === void 0 && (n = {}), t.length > 0 ? (0, Pk.default)(e, t) : {
    x: (0, om.default)(e.x, (a = n.xMin) != null ? a : -1 / 0, (r = n.xMax) != null ? r : 1 / 0),
    y: (0, om.default)(e.y, (o = n.yMin) != null ? o : -1 / 0, (s = n.yMax) != null ? s : 1 / 0)
  };
}
var bh = {};
bh.__esModule = !0;
bh.default = Ok;
var Dk = ue;
function Lk(e, t, n) {
  if (n === void 0 && (n = 1), !e)
    return [];
  for (var a = [], r = e.getTotalLength(), o = 0; o <= r; o += n) {
    var s = e.getPointAtLength(o), u = s.matrixTransform(t);
    a.push(u);
  }
  return a;
}
function Ok(e) {
  var t = (0, Dk.useMemo)(function() {
    if (!e)
      return [];
    var n = e.getCTM() || new DOMMatrix();
    return Lk(e, n);
  }, [e == null ? void 0 : e.getTotalLength()]);
  return t;
}
mh.__esModule = !0;
mh.default = Nk;
var Oi = ue, Ko = Sk, lm = Ek, _k = Sh(gh), sm = Sh(yh), Mk = Sh(bh);
function Sh(e) {
  return e && e.__esModule ? e : { default: e };
}
function Xr() {
  return Xr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Xr.apply(this, arguments);
}
function Nk(e) {
  var t = e === void 0 ? {} : e, n = t.resetOnStart, a = n === void 0 ? !1 : n, r = t.snapToPointer, o = r === void 0 ? !0 : r, s = t.onDragEnd, u = t.onDragMove, d = t.onDragStart, f = t.x, g = t.y, v = t.dx, y = t.dy, E = t.isDragging, w = t.restrict, O = w === void 0 ? {} : w, T = t.restrictToPath, m = (0, Oi.useRef)({
    x: f,
    y: g,
    dx: v,
    dy: y
  }), A = (0, _k.default)({
    x: f,
    y: g,
    dx: v ?? 0,
    dy: y ?? 0,
    isDragging: !1
  }), _ = A[0], L = A[1], N = (0, Oi.useState)(new Ko.Point({
    x: 0,
    y: 0
  })), M = N[0], U = N[1];
  (0, Oi.useEffect)(function() {
    (m.current.x !== f || m.current.y !== g || m.current.dx !== v || m.current.dy !== y) && (m.current = {
      x: f,
      y: g,
      dx: v,
      dy: y
    }, L(function(H) {
      return Xr({}, H, {
        x: f,
        y: g,
        dx: v ?? 0,
        dy: y ?? 0
      });
    }));
  }), (0, Oi.useEffect)(function() {
    E !== void 0 && _.isDragging !== E && L(function(H) {
      return Xr({}, H, {
        isDragging: E
      });
    });
  }, [_.isDragging, E, L]);
  var j = (0, Mk.default)(T), $ = (0, Oi.useCallback)(function(H) {
    H.persist(), L(function(oe) {
      var fe = oe.x, I = fe === void 0 ? 0 : fe, Q = oe.y, q = Q === void 0 ? 0 : Q, se = oe.dx, ae = oe.dy, J = new Ko.Point({
        x: (I || 0) + se,
        y: (q || 0) + ae
      }), G = (0, lm.localPoint)(H) || new Ko.Point({
        x: 0,
        y: 0
      }), he = o ? G : J, ee = (0, sm.default)(he, j, O);
      return U((0, Ko.subtractPoints)(J, G)), {
        isDragging: !0,
        dx: a ? 0 : oe.dx,
        dy: a ? 0 : oe.dy,
        x: a ? ee.x : ee.x - oe.dx,
        y: a ? ee.y : ee.y - oe.dy
      };
    }, d && function(oe) {
      d(Xr({}, oe, {
        event: H
      }));
    });
  }, [d, a, O, j, L, o]), V = (0, Oi.useCallback)(function(H) {
    H.persist(), L(function(oe) {
      if (!oe.isDragging)
        return oe;
      var fe = oe.x, I = fe === void 0 ? 0 : fe, Q = oe.y, q = Q === void 0 ? 0 : Q, se = (0, lm.localPoint)(H) || new Ko.Point({
        x: 0,
        y: 0
      }), ae = o ? se : (0, Ko.sumPoints)(se, M), J = (0, sm.default)(ae, j, O);
      return Xr({}, oe, {
        dx: J.x - I,
        dy: J.y - q
      });
    }, u && function(oe) {
      oe.isDragging && u(Xr({}, oe, {
        event: H
      }));
    });
  }, [L, u, o, M, j, O]), ne = (0, Oi.useCallback)(function(H) {
    H.persist(), L(function(oe) {
      return Xr({}, oe, {
        isDragging: !1
      });
    }, s && function(oe) {
      s(Xr({}, oe, {
        event: H
      }));
    });
  }, [s, L]);
  return Xr({}, _, {
    dragEnd: ne,
    dragMove: V,
    dragStart: $
  });
}
var Lc = uy, as = Eh(gm), Xd = Eh(ue), Fk = Eh(mh);
function Eh(e) {
  return e && e.__esModule ? e : { default: e };
}
function uy(e) {
  var t = e.captureDragArea, n = t === void 0 ? !0 : t, a = e.snapToPointer, r = a === void 0 ? !0 : a, o = e.children, s = e.dx, u = e.dy, d = e.height, f = e.onDragEnd, g = e.onDragMove, v = e.onDragStart, y = e.resetOnStart, E = e.width, w = e.x, O = e.y, T = e.isDragging, m = e.restrict, A = e.restrictToPath, _ = (0, Fk.default)({
    resetOnStart: y,
    snapToPointer: r,
    onDragEnd: f,
    onDragMove: g,
    onDragStart: v,
    x: w,
    y: O,
    dx: s,
    dy: u,
    isDragging: T,
    restrict: m,
    restrictToPath: A
  });
  return /* @__PURE__ */ Xd.default.createElement(Xd.default.Fragment, null, _.isDragging && n && /* @__PURE__ */ Xd.default.createElement("rect", {
    width: E,
    height: d,
    onPointerDown: _.dragStart,
    onPointerMove: _.dragMove,
    onPointerUp: _.dragEnd,
    fill: "transparent"
  }), o(_));
}
uy.propTypes = {
  children: as.default.func.isRequired,
  width: as.default.number.isRequired,
  height: as.default.number.isRequired,
  captureDragArea: as.default.bool,
  isDragging: as.default.bool
};
function bc(e, t) {
  if ("invert" in e && typeof e.invert < "u")
    return e.invert(t).valueOf();
  var n = e.range(), a = n[0], r = n[1], o = 0, s = "step" in e && typeof e.step < "u" ? e.step() : 1, u = s * (r - a) / Math.abs(r - a);
  if (u > 0)
    for (; t > a + u * (o + 1); )
      o += 1;
  else
    for (; t < a + u * (o + 1); )
      o += 1;
  return o;
}
function um(e, t, n, a) {
  var r, o = bc(e, t + (t < n ? -a : a)), s = bc(e, n + (n < t ? -a : a)), u = Math.min(o, s), d = Math.max(o, s);
  if ("invert" in e && typeof e.invert < "u")
    r = {
      start: u,
      end: d
    };
  else {
    for (var f = [], g = e.domain(), v = u; v <= d; v += 1)
      f.push(g[v]);
    r = {
      values: f
    };
  }
  return r;
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
function Tr() {
  return Tr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Tr.apply(this, arguments);
}
function zk(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Lf(e, t);
}
function Lf(e, t) {
  return Lf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, r) {
    return a.__proto__ = r, a;
  }, Lf(e, t);
}
var cy = /* @__PURE__ */ function(e) {
  zk(t, e);
  function t() {
    for (var a, r = arguments.length, o = new Array(r), s = 0; s < r; s++)
      o[s] = arguments[s];
    return a = e.call.apply(e, [this].concat(o)) || this, a.handleDragStart = function(u) {
      var d = a.props, f = d.onBrushHandleChange, g = d.type, v = d.onBrushStart;
      f && f(g, kh(u.event)), v && v(u);
    }, a.handleDragMove = function(u) {
      var d = a.props, f = d.updateBrush, g = d.type, v = d.isControlled;
      !u.isDragging || v || f(function(y) {
        var E = y.start, w = y.end, O = 0, T = Math.max(E.x, w.x), m = Math.min(E.x, w.x), A = Math.max(E.y, w.y), _ = Math.min(E.y, w.y);
        switch (g) {
          case "right":
            return O = T + u.dx, Tr({}, y, {
              activeHandle: g,
              extent: Tr({}, y.extent, {
                x0: Math.max(Math.min(O, E.x), y.bounds.x0),
                x1: Math.min(Math.max(O, E.x), y.bounds.x1)
              })
            });
          case "left":
            return O = m + u.dx, Tr({}, y, {
              activeHandle: g,
              extent: Tr({}, y.extent, {
                x0: Math.min(O, w.x),
                x1: Math.max(O, w.x)
              })
            });
          case "bottom":
            return O = A + u.dy, Tr({}, y, {
              activeHandle: g,
              extent: Tr({}, y.extent, {
                y0: Math.min(O, E.y),
                y1: Math.max(O, E.y)
              })
            });
          case "top":
            return O = _ + u.dy, Tr({}, y, {
              activeHandle: g,
              extent: Tr({}, y.extent, {
                y0: Math.min(O, w.y),
                y1: Math.max(O, w.y)
              })
            });
          default:
            return y;
        }
      });
    }, a.handleDragEnd = function() {
      var u = a.props, d = u.updateBrush, f = u.onBrushEnd, g = u.onBrushHandleChange, v = u.isControlled;
      v || d(function(y) {
        var E = y.start, w = y.end, O = y.extent;
        E.x = Math.min(O.x0, O.x1), E.y = Math.min(O.y0, O.y0), w.x = Math.max(O.x0, O.x1), w.y = Math.max(O.y0, O.y1);
        var T = Tr({}, y, {
          start: E,
          end: w,
          activeHandle: null,
          isBrushing: !1,
          extent: {
            x0: Math.min(E.x, w.x),
            x1: Math.max(E.x, w.x),
            y0: Math.min(E.y, w.y),
            y1: Math.max(E.y, w.y)
          }
        });
        return f && f(T), T;
      }), g && g();
    }, a;
  }
  var n = t.prototype;
  return n.render = function() {
    var r = this, o = this.props, s = o.stageWidth, u = o.stageHeight, d = o.brush, f = o.type, g = o.handle, v = o.isControlled, y = o.isDragInProgress, E = o.renderBrushHandle, w = g.x, O = g.y, T = g.width, m = g.height, A = f === "right" || f === "left" ? "ew-resize" : "ns-resize";
    return /* @__PURE__ */ i.createElement(Lc, {
      width: s,
      height: u,
      onDragStart: this.handleDragStart,
      onDragMove: this.handleDragMove,
      onDragEnd: this.handleDragEnd,
      resetOnStart: !0,
      isDragging: v ? y : void 0
    }, function(_) {
      var L = _.dragStart, N = _.dragEnd, M = _.dragMove, U = _.isDragging;
      return /* @__PURE__ */ i.createElement("g", null, U && /* @__PURE__ */ i.createElement("rect", {
        fill: "transparent",
        width: s,
        height: u,
        style: {
          cursor: A
        },
        onPointerMove: M,
        onPointerUp: v ? void 0 : N,
        onPointerLeave: v ? void 0 : N
      }), !E && /* @__PURE__ */ i.createElement("rect", {
        x: w,
        y: O,
        width: T,
        height: m,
        fill: "transparent",
        className: "visx-brush-handle-" + f,
        onPointerDown: L,
        onPointerMove: M,
        onPointerUp: v ? void 0 : N,
        style: {
          cursor: A,
          pointerEvents: d.activeHandle || d.isBrushing ? "none" : "all"
        }
      }), E && /* @__PURE__ */ i.createElement("g", {
        onPointerDown: L,
        onPointerMove: M,
        onPointerUp: v ? void 0 : N
      }, E(Tr({}, r.props.handle, {
        height: u,
        className: "visx-brush-handle-" + f,
        isBrushActive: d.extent.x0 !== -1 && d.extent.x1 !== -1
      }))));
    });
  }, t;
}(i.Component);
cy.propTypes = {
  stageWidth: pe.number.isRequired,
  stageHeight: pe.number.isRequired,
  updateBrush: pe.func.isRequired,
  onBrushStart: pe.func,
  onBrushEnd: pe.func,
  handle: pe.shape({
    x: pe.number.isRequired,
    y: pe.number.isRequired,
    width: pe.number.isRequired,
    height: pe.number.isRequired
  }).isRequired,
  isControlled: pe.bool,
  isDragInProgress: pe.bool,
  onBrushHandleChange: pe.func,
  renderBrushHandle: pe.func
};
function pr() {
  return pr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, pr.apply(this, arguments);
}
function Bk(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Of(e, t);
}
function Of(e, t) {
  return Of = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, r) {
    return a.__proto__ = r, a;
  }, Of(e, t);
}
var wh = /* @__PURE__ */ function(e) {
  Bk(t, e);
  function t() {
    for (var a, r = arguments.length, o = new Array(r), s = 0; s < r; s++)
      o[s] = arguments[s];
    return a = e.call.apply(e, [this].concat(o)) || this, a.cornerDragMove = function(u) {
      var d = a.props, f = d.updateBrush, g = d.type;
      u.isDragging && f(function(v) {
        var y = v.start, E = v.end, w = Math.max(y.x, E.x), O = Math.min(y.x, E.x), T = Math.max(y.y, E.y), m = Math.min(y.y, E.y), A = 0, _ = 0;
        switch (g) {
          case "topRight":
            return A = w + u.dx, _ = m + u.dy, pr({}, v, {
              activeHandle: g,
              extent: pr({}, v.extent, {
                x0: Math.max(Math.min(A, y.x), v.bounds.x0),
                x1: Math.min(Math.max(A, y.x), v.bounds.x1),
                y0: Math.max(Math.min(_, E.y), v.bounds.y0),
                y1: Math.min(Math.max(_, E.y), v.bounds.y1)
              })
            });
          case "topLeft":
            return A = O + u.dx, _ = m + u.dy, pr({}, v, {
              activeHandle: g,
              extent: pr({}, v.extent, {
                x0: Math.max(Math.min(A, E.x), v.bounds.x0),
                x1: Math.min(Math.max(A, E.x), v.bounds.x1),
                y0: Math.max(Math.min(_, E.y), v.bounds.y0),
                y1: Math.min(Math.max(_, E.y), v.bounds.y1)
              })
            });
          case "bottomLeft":
            return A = O + u.dx, _ = T + u.dy, pr({}, v, {
              activeHandle: g,
              extent: pr({}, v.extent, {
                x0: Math.max(Math.min(A, E.x), v.bounds.x0),
                x1: Math.min(Math.max(A, E.x), v.bounds.x1),
                y0: Math.max(Math.min(_, y.y), v.bounds.y0),
                y1: Math.min(Math.max(_, y.y), v.bounds.y1)
              })
            });
          case "bottomRight":
            return A = w + u.dx, _ = T + u.dy, pr({}, v, {
              activeHandle: g,
              extent: pr({}, v.extent, {
                x0: Math.max(Math.min(A, y.x), v.bounds.x0),
                x1: Math.min(Math.max(A, y.x), v.bounds.x1),
                y0: Math.max(Math.min(_, y.y), v.bounds.y0),
                y1: Math.min(Math.max(_, y.y), v.bounds.y1)
              })
            });
          default:
            return v;
        }
      });
    }, a.cornerDragEnd = function() {
      var u = a.props, d = u.updateBrush, f = u.onBrushEnd;
      d(function(g) {
        var v = g.start, y = g.end, E = g.extent;
        v.x = Math.min(E.x0, E.x1), v.y = Math.min(E.y0, E.y0), y.x = Math.max(E.x0, E.x1), y.y = Math.max(E.y0, E.y1);
        var w = pr({}, g, {
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
        return f && f(w), w;
      });
    }, a;
  }
  var n = t.prototype;
  return n.render = function() {
    var r = this.props, o = r.type, s = r.brush, u = r.stageWidth, d = r.stageHeight, f = r.style, g = r.corner, v = (f == null ? void 0 : f.cursor) || (o === "topLeft" || o === "bottomRight" ? "nwse-resize" : "nesw-resize"), y = s.activeHandle || s.isBrushing ? "none" : "all";
    return /* @__PURE__ */ i.createElement(Lc, {
      width: u,
      height: d,
      onDragMove: this.cornerDragMove,
      onDragEnd: this.cornerDragEnd,
      resetOnStart: !0
    }, function(E) {
      var w = E.dragMove, O = E.dragEnd, T = E.dragStart, m = E.isDragging;
      return /* @__PURE__ */ i.createElement("g", null, m && /* @__PURE__ */ i.createElement("rect", {
        fill: "transparent",
        width: u,
        height: d,
        style: {
          cursor: v
        },
        onPointerMove: w,
        onPointerUp: O
      }), /* @__PURE__ */ i.createElement("rect", pr({
        fill: "transparent",
        onPointerDown: T,
        onPointerMove: w,
        onPointerUp: O,
        className: "visx-brush-corner-" + o,
        style: pr({
          cursor: v,
          pointerEvents: y
        }, f)
      }, g)));
    });
  }, t;
}(i.Component);
wh.propTypes = {
  stageWidth: pe.number.isRequired,
  stageHeight: pe.number.isRequired,
  updateBrush: pe.func.isRequired,
  onBrushEnd: pe.func,
  corner: pe.shape({
    x: pe.number.isRequired,
    y: pe.number.isRequired,
    width: pe.number.isRequired,
    height: pe.number.isRequired
  }).isRequired
};
wh.defaultProps = {
  style: {}
};
function Ba() {
  return Ba = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ba.apply(this, arguments);
}
function $k(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, _f(e, t);
}
function _f(e, t) {
  return _f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, r) {
    return a.__proto__ = r, a;
  }, _f(e, t);
}
var Ik = {
  cursor: "move"
}, Th = /* @__PURE__ */ function(e) {
  $k(t, e);
  function t() {
    for (var a, r = arguments.length, o = new Array(r), s = 0; s < r; s++)
      o[s] = arguments[s];
    return a = e.call.apply(e, [this].concat(o)) || this, a.selectionDragStart = function(u) {
      var d = a.props, f = d.onMoveSelectionChange, g = d.onBrushStart;
      f && f("move", kh(u.event)), g && g(u);
    }, a.selectionDragMove = function(u) {
      var d = a.props, f = d.updateBrush, g = d.isControlled;
      g || f(function(v) {
        var y = v.start, E = y.x, w = y.y, O = v.end, T = O.x, m = O.y, A = u.dx > 0 ? Math.min(u.dx, v.bounds.x1 - T) : Math.max(u.dx, v.bounds.x0 - E), _ = u.dy > 0 ? Math.min(u.dy, v.bounds.y1 - m) : Math.max(u.dy, v.bounds.y0 - w);
        return Ba({}, v, {
          isBrushing: !0,
          extent: Ba({}, v.extent, {
            x0: E + A,
            x1: T + A,
            y0: w + _,
            y1: m + _
          })
        });
      });
    }, a.selectionDragEnd = function() {
      var u = a.props, d = u.updateBrush, f = u.onBrushEnd, g = u.onMoveSelectionChange, v = u.isControlled;
      v || d(function(y) {
        var E = Ba({}, y, {
          isBrushing: !1,
          start: Ba({}, y.start, {
            x: Math.min(y.extent.x0, y.extent.x1),
            y: Math.min(y.extent.y0, y.extent.y1)
          }),
          end: Ba({}, y.end, {
            x: Math.max(y.extent.x0, y.extent.x1),
            y: Math.max(y.extent.y0, y.extent.y1)
          })
        });
        return f && f(E), E;
      }), g && g();
    }, a;
  }
  var n = t.prototype;
  return n.render = function() {
    var r = this.props, o = r.width, s = r.height, u = r.stageWidth, d = r.stageHeight, f = r.brush, g = r.disableDraggingSelection, v = r.onMouseLeave, y = r.onMouseMove, E = r.onMouseUp, w = r.onClick, O = r.selectedBoxStyle, T = r.isControlled, m = r.isDragInProgress;
    return /* @__PURE__ */ i.createElement(Lc, {
      width: o,
      height: s,
      resetOnStart: !0,
      onDragStart: this.selectionDragStart,
      onDragMove: this.selectionDragMove,
      onDragEnd: this.selectionDragEnd,
      isDragging: T ? m : void 0
    }, function(A) {
      var _ = A.isDragging, L = A.dragStart, N = A.dragEnd, M = A.dragMove;
      return /* @__PURE__ */ i.createElement("g", null, _ && /* @__PURE__ */ i.createElement("rect", {
        width: u,
        height: d,
        fill: "transparent",
        onPointerUp: T ? void 0 : N,
        onPointerMove: M,
        onPointerLeave: T ? void 0 : N,
        style: Ik
      }), /* @__PURE__ */ i.createElement("rect", Ba({
        x: Math.min(f.extent.x0, f.extent.x1),
        y: Math.min(f.extent.y0, f.extent.y1),
        width: o,
        height: s,
        className: "visx-brush-selection",
        onPointerDown: g ? void 0 : L,
        onPointerLeave: function(j) {
          v && v(j);
        },
        onPointerMove: function(j) {
          M(j), y && y(j);
        },
        onPointerUp: function(j) {
          T || N(j), E && E(j);
        },
        onClick: function(j) {
          w && w(j);
        },
        style: {
          pointerEvents: f.isBrushing || f.activeHandle ? "none" : "all",
          cursor: g ? void 0 : "move"
        }
      }, O)));
    });
  }, t;
}(i.Component);
Th.propTypes = {
  width: pe.number.isRequired,
  height: pe.number.isRequired,
  stageWidth: pe.number.isRequired,
  stageHeight: pe.number.isRequired,
  updateBrush: pe.func.isRequired,
  onMoveSelectionChange: pe.func,
  onBrushStart: pe.func,
  onBrushEnd: pe.func,
  disableDraggingSelection: pe.bool.isRequired,
  onMouseLeave: pe.func,
  onMouseMove: pe.func,
  onMouseUp: pe.func,
  onClick: pe.func,
  isControlled: pe.bool,
  isDragInProgress: pe.bool
};
Th.defaultProps = {
  onMouseLeave: null,
  onMouseUp: null,
  onMouseMove: null,
  onClick: null
};
function Mf() {
  return Mf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Mf.apply(this, arguments);
}
function Nf(e) {
  return /* @__PURE__ */ i.createElement(mr, Mf({
    className: "visx-brush-overlay",
    fill: "transparent",
    x: 0,
    y: 0
  }, e));
}
Nf.propTypes = {
  width: pe.number.isRequired,
  height: pe.number.isRequired,
  onClick: pe.func,
  onDoubleClick: pe.func,
  onPointerDown: pe.func,
  onPointerLeave: pe.func,
  onPointerMove: pe.func,
  onPointerUp: pe.func
};
function er() {
  return er = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, er.apply(this, arguments);
}
function Hk(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ff(e, t);
}
function Ff(e, t) {
  return Ff = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, r) {
    return a.__proto__ = r, a;
  }, Ff(e, t);
}
var Ch = /* @__PURE__ */ function(e) {
  Hk(t, e);
  function t(a) {
    var r;
    r = e.call(this, a) || this, r.mouseUpTime = 0, r.mouseDownTime = 0, r.getIdleState = function() {
      var u = r.props, d = u.width, f = u.height;
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
          x1: d,
          y0: 0,
          y1: f
        },
        isBrushing: !1,
        brushPageOffset: void 0,
        activeHandle: null,
        brushingType: void 0
      };
    }, r.handleWindowPointerUp = function() {
      var u = r.props, d = u.useWindowMoveEvents, f = u.onBrushEnd, g = u.resetOnEnd, v = r.state.brushingType;
      d && v && r.updateBrush(function(y) {
        var E = y.start, w = y.end, O = y.extent;
        E.x = Math.min(O.x0, O.x1), E.y = Math.min(O.y0, O.y0), w.x = Math.max(O.x0, O.x1), w.y = Math.max(O.y0, O.y1);
        var T = er({}, y, {
          activeHandle: null,
          isBrushing: !1,
          brushingType: void 0
        });
        return f && f(T), g && (T = er({}, T, r.getIdleState())), T;
      });
    }, r.handleWindowPointerMove = function(u) {
      var d = r.props.useWindowMoveEvents, f = r.state, g = f.brushingType, v = f.isBrushing, y = f.brushPageOffset, E = f.start;
      if (!(!d || !v)) {
        var w = u.pageX - ((y == null ? void 0 : y.pageX) || 0), O = u.pageY - ((y == null ? void 0 : y.pageY) || 0);
        ["left", "right", "top", "bottom"].includes(g ?? "") && r.updateBrush(function(T) {
          var m = T.start, A = m.x, _ = m.y, L = T.end, N = L.x, M = L.y;
          return er({}, T, {
            isBrushing: !0,
            extent: er({}, T.extent, r.getExtent({
              x: g === "left" ? Math.min(Math.max(A + w, T.bounds.x0), T.bounds.x1) : A,
              y: g === "top" ? Math.min(Math.max(_ + O, T.bounds.y0), T.bounds.y1) : _
            }, {
              x: g === "right" ? Math.min(Math.max(N + w, T.bounds.x0), T.bounds.x1) : N,
              y: g === "bottom" ? Math.min(Math.max(M + O, T.bounds.y0), T.bounds.y1) : M
            }))
          });
        }), g === "move" && r.updateBrush(function(T) {
          var m = T.start, A = m.x, _ = m.y, L = T.end, N = L.x, M = L.y, U = w > 0 ? Math.min(w, T.bounds.x1 - N) : Math.max(w, T.bounds.x0 - A), j = O > 0 ? Math.min(O, T.bounds.y1 - M) : Math.max(O, T.bounds.y0 - _);
          return er({}, T, {
            isBrushing: !0,
            extent: er({}, T.extent, {
              x0: A + U,
              y0: _ + j,
              x1: N + U,
              y1: M + j
            })
          });
        }), g === "select" && r.updateBrush(function(T) {
          var m = T.start, A = m.x, _ = m.y, L = {
            x: Math.min(Math.max(A + w, T.bounds.x0), T.bounds.x1),
            y: Math.min(Math.max(_ + O, T.bounds.y0), T.bounds.y1)
          }, N = r.getExtent(E, L), M = er({}, T, {
            end: L,
            extent: N
          });
          return M;
        });
      }
    }, r.getExtent = function(u, d) {
      var f = r.props, g = f.brushDirection, v = f.width, y = f.height, E = g === "vertical" ? 0 : Math.min(u.x || 0, d.x || 0), w = g === "vertical" ? v : Math.max(u.x || 0, d.x || 0), O = g === "horizontal" ? 0 : Math.min(u.y || 0, d.y || 0), T = g === "horizontal" ? y : Math.max(u.y || 0, d.y || 0);
      return {
        x0: E,
        x1: w,
        y0: O,
        y1: T
      };
    }, r.handleDragStart = function(u) {
      var d = r.props, f = d.onBrushStart, g = d.left, v = d.top, y = d.inheritedMargin, E = d.useWindowMoveEvents, w = y != null && y.left ? y.left : 0, O = y != null && y.top ? y.top : 0, T = {
        x: (u.x || 0) + u.dx - g - w,
        y: (u.y || 0) + u.dy - v - O
      }, m = er({}, T);
      f && f(T), r.updateBrush(function(A) {
        return er({}, A, {
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
          brushPageOffset: E ? kh(u.event) : void 0
        });
      });
    }, r.handleBrushStart = function(u) {
      var d = r.props, f = d.onBrushStart, g = d.left, v = d.top, y = d.inheritedMargin;
      if (f) {
        var E = y != null && y.left ? y.left : 0, w = y != null && y.top ? y.top : 0, O = {
          x: (u.x || 0) + u.dx - g - E,
          y: (u.y || 0) + u.dy - v - w
        };
        f(O);
      }
    }, r.handleDragMove = function(u) {
      var d = r.props, f = d.left, g = d.top, v = d.inheritedMargin, y = d.useWindowMoveEvents;
      if (!(!u.isDragging || y)) {
        var E = (v == null ? void 0 : v.left) || 0, w = (v == null ? void 0 : v.top) || 0, O = {
          x: (u.x || 0) + u.dx - f - E,
          y: (u.y || 0) + u.dy - g - w
        };
        r.updateBrush(function(T) {
          var m = T.start, A = r.getExtent(m, O);
          return er({}, T, {
            end: O,
            extent: A
          });
        });
      }
    }, r.handleDragEnd = function() {
      var u = r.props, d = u.onBrushEnd, f = u.resetOnEnd, g = u.useWindowMoveEvents;
      g || r.updateBrush(function(v) {
        var y = v.extent, E = er({}, v, {
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
        return d && d(E), f && (E = er({}, E, r.getIdleState())), E;
      });
    }, r.getBrushWidth = function() {
      var u = r.state.extent, d = u.x0, f = u.x1;
      return Math.max(Math.max(d, f) - Math.min(d, f), 0);
    }, r.getBrushHeight = function() {
      var u = r.state.extent, d = u.y1, f = u.y0;
      return Math.max(Math.max(f, d) - Math.min(f, d), 0);
    }, r.handles = function() {
      var u = r.props.handleSize, d = r.state.extent, f = d.x0, g = d.x1, v = d.y0, y = d.y1, E = u / 2, w = r.getBrushWidth(), O = r.getBrushHeight();
      return {
        top: {
          x: f - E,
          y: v - E,
          height: u,
          width: w + u
        },
        bottom: {
          x: f - E,
          y: y - E,
          height: u,
          width: w + u
        },
        right: {
          x: g - E,
          y: v - E,
          height: O + u,
          width: u
        },
        left: {
          x: f - E,
          y: v - E,
          height: O + u,
          width: u
        }
      };
    }, r.corners = function() {
      var u = r.props.handleSize, d = r.state.extent, f = d.x0, g = d.x1, v = d.y0, y = d.y1, E = u / 2, w = u, O = u;
      return {
        topLeft: {
          x: Math.min(f, g) - E,
          y: Math.min(v, y) - E,
          width: w,
          height: O
        },
        topRight: {
          x: Math.max(f, g) - E,
          y: Math.min(v, y) - E,
          width: w,
          height: O
        },
        bottomLeft: {
          x: Math.min(f, g) - E,
          y: Math.max(v, y) - E,
          width: w,
          height: O
        },
        bottomRight: {
          x: Math.max(f, g) - E,
          y: Math.max(v, y) - E,
          width: w,
          height: O
        }
      };
    }, r.updateBrush = function(u) {
      var d = r.props.onChange;
      r.setState(u, function() {
        d && d(r.state);
      });
    }, r.reset = function() {
      return r.updateBrush(function() {
        return r.getIdleState();
      });
    }, r.handleBrushingTypeChange = function(u, d) {
      r.updateBrush(function(f) {
        var g = er({}, f, {
          brushingType: u,
          isBrushing: u !== void 0
        });
        return (d || u === void 0) && (g.brushPageOffset = d), g;
      });
    };
    var o = a.initialBrushPosition, s = o ? r.getExtent(o.start, o.end) : {
      x0: -1,
      x1: -1,
      y0: -1,
      y1: -1
    };
    return r.state = {
      start: {
        x: Math.max(0, s.x0),
        y: Math.max(0, s.y0)
      },
      end: {
        x: Math.max(0, s.x1),
        y: Math.max(0, s.y1)
      },
      extent: s,
      bounds: {
        x0: 0,
        x1: r.props.width,
        y0: 0,
        y1: r.props.height
      },
      isBrushing: !1,
      brushingType: void 0,
      activeHandle: null
    }, r;
  }
  var n = t.prototype;
  return n.componentDidUpdate = function(r) {
    var o = this;
    (this.props.width !== r.width || this.props.height !== r.height) && this.setState(function(s) {
      var u = s.start, d = s.end, f = s.extent;
      if (!(f.x0 === -1 && f.x1 === -1 && f.y0 === -1 && f.y1 === -1)) {
        var g = o.props.width / r.width, v = o.props.height / r.height;
        u = {
          x: g * f.x0,
          y: v * f.y0
        }, d = {
          x: g * f.x1,
          y: v * f.y1
        }, f = o.getExtent(u, d);
      }
      return {
        start: u,
        end: d,
        extent: f,
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
    var r = this, o = this.state, s = o.start, u = o.end, d = this.props, f = d.top, g = d.left, v = d.width, y = d.height, E = d.onMouseLeave, w = d.onMouseUp, O = d.onMouseMove, T = d.onBrushEnd, m = d.onClick, A = d.resizeTriggerAreas, _ = d.selectedBoxStyle, L = d.disableDraggingSelection, N = d.disableDraggingOverlay, M = d.clickSensitivity, U = d.useWindowMoveEvents, j = d.renderBrushHandle, $ = this.state.brushingType, V = this.handles(), ne = this.corners(), H = this.getBrushWidth(), oe = this.getBrushHeight(), fe = new Set(A);
    return /* @__PURE__ */ i.createElement(rt, {
      className: "visx-brush",
      top: f,
      left: g
    }, N ? /* @__PURE__ */ i.createElement(Nf, {
      width: v,
      height: y,
      onClick: function(Q) {
        var q = r.mouseUpTime - r.mouseDownTime;
        m && q < M && m(Q);
      },
      style: {
        cursor: "default"
      }
    }) : /* @__PURE__ */ i.createElement(Lc, {
      width: v,
      height: y,
      resetOnStart: !0,
      onDragStart: this.handleDragStart,
      onDragMove: this.handleDragMove,
      onDragEnd: this.handleDragEnd,
      isDragging: U ? $ === "select" : void 0
    }, function(I) {
      var Q = I.dragStart, q = I.isDragging, se = I.dragMove, ae = I.dragEnd;
      return /* @__PURE__ */ i.createElement(Nf, {
        width: v,
        height: y,
        onDoubleClick: function() {
          return r.reset();
        },
        onClick: function(G) {
          var he = r.mouseUpTime - r.mouseDownTime;
          m && he < M && m(G);
        },
        onPointerDown: function(G) {
          r.mouseDownTime = Date.now(), Q(G);
        },
        onPointerLeave: function(G) {
          E && E(G);
        },
        onPointerMove: function(G) {
          !q && O && O(G), q && se(G);
        },
        onPointerUp: function(G) {
          r.mouseUpTime = Date.now(), w && w(G), ae(G);
        },
        style: {
          cursor: "crosshair"
        }
      });
    }), s && u && /* @__PURE__ */ i.createElement(Th, {
      updateBrush: this.updateBrush,
      width: H,
      height: oe,
      stageWidth: v,
      stageHeight: y,
      brush: this.state,
      disableDraggingSelection: L,
      onBrushEnd: T,
      onBrushStart: this.handleBrushStart,
      onMouseLeave: E,
      onMouseMove: O,
      onMouseUp: w,
      onMoveSelectionChange: this.handleBrushingTypeChange,
      onClick: m,
      selectedBoxStyle: _,
      isControlled: U,
      isDragInProgress: U ? $ === "move" : void 0
    }), s && u && Object.keys(V).filter(function(I) {
      return fe.has(I);
    }).map(function(I) {
      var Q = V[I];
      return Q && /* @__PURE__ */ i.createElement(cy, {
        key: "handle-" + I,
        type: I,
        handle: Q,
        stageWidth: v,
        stageHeight: y,
        updateBrush: r.updateBrush,
        brush: r.state,
        onBrushStart: r.handleBrushStart,
        onBrushEnd: T,
        isControlled: U,
        isDragInProgress: U ? $ === I : void 0,
        onBrushHandleChange: r.handleBrushingTypeChange,
        renderBrushHandle: j
      });
    }), s && u && Object.keys(ne).filter(function(I) {
      return fe.has(I);
    }).map(function(I) {
      var Q = ne[I];
      return Q && /* @__PURE__ */ i.createElement(wh, {
        key: "corner-" + I,
        type: I,
        brush: r.state,
        updateBrush: r.updateBrush,
        stageWidth: v,
        stageHeight: y,
        corner: Q,
        onBrushEnd: T
      });
    }));
  }, t;
}(i.Component);
Ch.propTypes = {
  brushDirection: pe.oneOf(["horizontal", "vertical", "both"]),
  width: pe.number.isRequired,
  height: pe.number.isRequired,
  left: pe.number.isRequired,
  top: pe.number.isRequired,
  onChange: pe.func,
  handleSize: pe.number,
  resizeTriggerAreas: pe.array,
  onBrushStart: pe.func,
  onBrushEnd: pe.func,
  onMouseLeave: pe.func,
  onMouseUp: pe.func,
  onMouseMove: pe.func,
  onClick: pe.func,
  clickSensitivity: pe.number,
  disableDraggingSelection: pe.bool,
  disableDraggingOverlay: pe.bool,
  resetOnEnd: pe.bool,
  useWindowMoveEvents: pe.bool,
  renderBrushHandle: pe.func
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
function Wk(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, zf(e, t);
}
function zf(e, t) {
  return zf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, r) {
    return a.__proto__ = r, a;
  }, zf(e, t);
}
var cm = 2, dm = "steelblue", Ah = /* @__PURE__ */ function(e) {
  Wk(t, e);
  function t() {
    for (var a, r = arguments.length, o = new Array(r), s = 0; s < r; s++)
      o[s] = arguments[s];
    return a = e.call.apply(e, [this].concat(o)) || this, a.handleChange = function(u) {
      var d = a.props.onChange;
      if (d) {
        var f = u.extent.x0;
        if (typeof f > "u" || f < 0) {
          d(null);
          return;
        }
        var g = a.convertRangeToDomain(u);
        d(g);
      }
    }, a.handleBrushStart = function(u) {
      var d = a.props.onBrushStart;
      if (d) {
        var f = u.x, g = u.y, v = a.props, y = v.xScale, E = v.yScale, w = bc(y, f), O = bc(E, g);
        d({
          x: "invert" in y && typeof y.invert < "u" ? w : y.domain()[w],
          y: "invert" in E && typeof E.invert < "u" ? O : E.domain()[O]
        });
      }
    }, a.handleBrushEnd = function(u) {
      var d = a.props.onBrushEnd;
      if (d) {
        var f = u.extent.x0;
        if (typeof f > "u" || f < 0) {
          d(null);
          return;
        }
        var g = a.convertRangeToDomain(u);
        d(g);
      }
    }, a;
  }
  var n = t.prototype;
  return n.convertRangeToDomain = function(r) {
    var o = this.props, s = o.xScale, u = o.yScale, d = r.extent, f = d.x0, g = d.x1, v = d.y0, y = d.y1, E = um(s, f || 0, g || 0, cm), w = um(u, v || 0, y || 0, cm), O = {
      x0: E.start || 0,
      x1: E.end || 0,
      xValues: E.values,
      y0: w.start || 0,
      y1: w.end || 0,
      yValues: w.values
    };
    return O;
  }, n.render = function() {
    var r = this.props, o = r.xScale, s = r.yScale, u = r.height, d = r.width, f = r.margin, g = r.brushDirection, v = r.initialBrushPosition, y = r.innerRef, E = r.resizeTriggerAreas, w = r.brushRegion, O = r.yAxisOrientation, T = r.xAxisOrientation, m = r.selectedBoxStyle, A = r.disableDraggingSelection, _ = r.disableDraggingOverlay, L = r.resetOnEnd, N = r.onMouseLeave, M = r.onMouseMove, U = r.onClick, j = r.handleSize, $ = r.useWindowMoveEvents, V = r.renderBrushHandle;
    if (!o || !s)
      return null;
    var ne, H, oe, fe, I = f != null && f.left ? f.left : 0, Q = f != null && f.top ? f.top : 0, q = f != null && f.right ? f.right : 0, se = f != null && f.bottom ? f.bottom : 0;
    return w === "chart" ? (oe = 0, fe = 0, ne = d, H = u) : w === "yAxis" ? (fe = 0, H = u, O === "right" ? (oe = d, ne = q) : (oe = -I, ne = I)) : (oe = 0, ne = d, T === "bottom" ? (fe = u, H = se) : (fe = -Q, H = Q)), /* @__PURE__ */ i.createElement(Ch, {
      width: ne,
      height: H,
      left: oe,
      top: fe,
      brushDirection: g,
      disableDraggingSelection: A,
      disableDraggingOverlay: _,
      handleSize: j,
      inheritedMargin: f,
      initialBrushPosition: v,
      ref: y,
      resetOnEnd: L,
      resizeTriggerAreas: E,
      selectedBoxStyle: m,
      onBrushEnd: this.handleBrushEnd,
      onBrushStart: this.handleBrushStart,
      onChange: this.handleChange,
      onClick: U,
      onMouseLeave: N,
      onMouseMove: M,
      useWindowMoveEvents: $,
      renderBrushHandle: V
    });
  }, t;
}(ue.Component);
Ah.propTypes = {
  height: pe.number,
  width: pe.number,
  onChange: pe.func,
  onBrushEnd: pe.func,
  brushDirection: pe.oneOf(["vertical", "horizontal", "both"]),
  resizeTriggerAreas: pe.array,
  brushRegion: pe.oneOf(["xAxis", "yAxis", "chart"]),
  yAxisOrientation: pe.oneOf(["left", "right"]),
  xAxisOrientation: pe.oneOf(["top", "bottom"]),
  disableDraggingSelection: pe.bool,
  disableDraggingOverlay: pe.bool,
  resetOnEnd: pe.bool,
  handleSize: pe.number,
  useWindowMoveEvents: pe.bool,
  renderBrushHandle: pe.func
};
Ah.defaultProps = {
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
const jk = Ah, Vk = (e) => {
  const { transformedData: t, config: n, parseDate: a, formatDate: r, updateConfig: o } = ue.useContext(Ct), { fontSize: s } = As(), [u, d] = ue.useState([...t]), f = ue.useRef(null), g = 15, [v, y] = ue.useState({
    startPosition: 0,
    endPosition: 0,
    startValue: "",
    endValue: ""
  }), E = {
    start: { x: 0 },
    end: { x: e.xMax }
  }, w = {
    fill: "#ddd",
    stroke: "blue",
    fillOpacity: 0.8,
    strokeOpacity: 0,
    rx: g
  }, O = (m) => {
    var j;
    if (!m)
      return;
    const { xValues: A } = m, _ = (j = n.xAxis) == null ? void 0 : j.dataKey, L = t.filter(($) => A.includes($[_])), N = A.slice().reverse().find(($) => $ !== void 0), M = A.find(($) => $ !== void 0), U = ($) => n.runtime.xAxis.type === "date" ? r(a($)) : $;
    y(($) => {
      var V, ne;
      return {
        ...$,
        startPosition: (V = f.current) == null ? void 0 : V.state.start.x,
        endPosition: (ne = f.current) == null ? void 0 : ne.state.end.x,
        endValue: U(N),
        startValue: U(M)
      };
    }), d(L);
  };
  ue.useEffect(() => {
    o({
      ...n,
      brush: {
        ...n.brush,
        data: u
      }
    });
  }, [u]), ue.useEffect(() => {
    n.brush.active || d(t);
  }, [n.brush.active]);
  const T = () => {
    const m = Number(n.xAxis.tickRotation) > 0 ? Number(n.xAxis.tickRotation) : 0;
    let A = 0;
    const _ = 20;
    return n.xAxis.label || (!n.isResponsiveTicks && m && (A = Number(m + n.xAxis.tickWidthMax) / 1.6), !n.isResponsiveTicks && !m && (A = Number(n.xAxis.labelOffset) - _), n.isResponsiveTicks && n.dynamicMarginTop && (A = Number(n.xAxis.labelOffset + n.xAxis.tickWidthMax / 1.6)), n.isResponsiveTicks && !n.dynamicMarginTop && (A = Number(n.xAxis.labelOffset - _))), n.xAxis.label && (!n.isResponsiveTicks && m && (A = Number(n.xAxis.tickWidthMax + m)), !n.isResponsiveTicks && !m && (A = n.xAxis.labelOffset + _), n.isResponsiveTicks && !m && (A = Number(n.dynamicMarginTop ? n.dynamicMarginTop : n.xAxis.labelOffset) + _)), A;
  };
  if (["Line", "Bar", "Area Chart", "Combo"].includes(n.visualizationType))
    return /* @__PURE__ */ i.createElement(rt, { display: n.brush.active ? "block" : "none", top: Number(e.yMax) + T(), left: Number(n.runtime.yAxis.size), pointerEvents: "fill" }, /* @__PURE__ */ i.createElement("rect", { fill: "#eee", width: e.xMax, height: n.brush.height, rx: g }), /* @__PURE__ */ i.createElement(
      jk,
      {
        renderBrushHandle: (m) => {
          var A;
          return /* @__PURE__ */ i.createElement(Uk, { textProps: v, fontSize: s[n.fontSize], ...m, isBrushing: (A = f.current) == null ? void 0 : A.state.isBrushing });
        },
        innerRef: f,
        useWindowMoveEvents: !0,
        selectedBoxStyle: w,
        xScale: e.xScaleBrush,
        yScale: e.yScale,
        width: e.xMax,
        resizeTriggerAreas: ["left", "right"],
        height: n.brush.height,
        handleSize: 8,
        brushDirection: "horizontal",
        initialBrushPosition: E,
        onChange: O
      }
    ));
}, Uk = (e) => {
  const { x: t, isBrushActive: n, isBrushing: a, className: r, textProps: o } = e, s = 8;
  if (!n)
    return null;
  const u = r.includes("left"), d = u ? "scale(-1, 1)" : "translate(0,0)", f = u ? "end" : "start";
  return /* @__PURE__ */ i.createElement(rt, { left: t + s / 2, top: -2 }, /* @__PURE__ */ i.createElement(Pt, { pointerEvents: "visiblePainted", dominantBaseline: "hanging", x: 0, verticalAnchor: "start", textAnchor: f, fontSize: e.fontSize / 1.4, dy: 10, y: 15 }, u ? o.startValue : o.endValue), /* @__PURE__ */ i.createElement("path", { cursor: "ew-resize", d: "M0.5,10A6,6 0 0 1 6.5,16V14A6,6 0 0 1 0.5,20ZM2.5,18V12M4.5,18V12", fill: a ? "#297EF1" : "#666", strokeWidth: "1", transform: d }));
}, Yr = (e) => {
  var He, et, Ie, bt, ft;
  const {
    isEditor: t,
    isDashboard: n,
    computeMarginBottom: a,
    transformedData: r,
    dimensions: o,
    config: s,
    parseDate: u,
    formatDate: d,
    currentViewport: f,
    formatNumber: g,
    handleChartAriaLabels: v,
    updateConfig: y,
    handleLineType: E,
    rawData: w,
    capitalize: O,
    setSharedFilter: T,
    setSharedFilterValue: m,
    getTextWidth: A,
    isDebug: _
  } = ue.useContext(Ct), { visualizationType: L, visualizationSubType: N, orientation: M, xAxis: U, yAxis: j, runtime: $, debugSvg: V } = s;
  let [ne] = o;
  s && s.legend && !s.legend.hide && s.legend.position !== "bottom" && ["lg", "md"].includes(f) && (ne = ne * 0.73);
  const { horizontal: H } = s.heights, oe = M === "horizontal" || s.visualizationType === "Forest Plot", fe = !0;
  let I = s.aspectRatio ? ne * s.aspectRatio : s.visualizationType === "Forest Plot" ? s.heights.vertical : s.heights[M];
  const Q = ne - $.yAxis.size - (L === "Combo" ? s.yAxis.rightAxisSize : 0);
  let q = I - (M === "horizontal" ? 0 : $.xAxis.size);
  s.visualizationType === "Forest Plot" && (I = I + s.data.length * s.forestPlot.rowHeight, q = q + s.data.length * s.forestPlot.rowHeight, ne = o[0]), (He = s.brush) != null && He.active && (I = I + ((et = s.brush) == null ? void 0 : et.height));
  const { minValue: se, maxValue: ae, existPositiveValue: J, isAllLine: G } = Dc(s, r), { visSupportsReactTooltip: he } = Rs(), { hasTopAxis: ee } = bk(s), [ge, be] = ue.useState(!1), [_e, Ve] = ue.useState({ x: 0, y: 0 }), Qe = ue.useRef(), Ae = ue.useRef(), ve = sh(Qe, {
    freezeOnceVisible: !1
  }), Ee = (we) => s.runtime.xAxis.type === "date" ? u(we[s.runtime.originalXAxis.dataKey]).getTime() : we[s.runtime.originalXAxis.dataKey], le = (we, Ye) => we[Ye], Be = s.brush.active && ((Ie = s.brush.data) != null && Ie.length) ? s.brush.data.map((we) => Ee(we)) : r.map((we) => Ee(we)), Ne = s.orientation === "horizontal" || s.visualizationType === "Forest Plot" ? "yAxis" : "xAxis", qe = { data: r, config: s, minValue: se, maxValue: ae, isAllLine: G, existPositiveValue: J, xAxisDataMapped: Be, xMax: Q, yMax: q }, { min: Ke, max: nt, leftMax: at, rightMax: lt } = ly(qe), { yScaleRight: ot, hasRightAxis: Ze } = ph({ config: s, yMax: q, data: r, updateConfig: y }), { xScale: Me, yScale: De, seriesScale: ht, g1xScale: Ue, g2xScale: dt, xScaleNoPadding: pt, xScaleBrush: gt } = gk({ ...qe, min: Ke, max: nt, leftMax: at, rightMax: lt, dimensions: o }), [_t, It] = ue.useState(null);
  ue.useEffect(() => {
    var we;
    It((we = Ae == null ? void 0 : Ae.current) == null ? void 0 : we.getBoundingClientRect());
  }, [Ae, s.legend]);
  const cn = (we, Ye) => {
    if (s.useLogScale && we === 0.1 && (we = 0), !(s.data && !s.data[Ye] && L === "Forest Plot"))
      return s.visualizationType === "Forest Plot" ? s.data[Ye][s.xAxis.dataKey] : $.yAxis.type === "date" ? d(u(we)) : M === "vertical" ? g(we, "left", fe) : we;
  }, qt = (we) => (s.useLogScale && we === 0.1 && (we = 0), $.xAxis.type === "date" && s.visualizationType !== "Forest Plot" ? d(we) : M === "horizontal" && s.visualizationType !== "Forest Plot" ? g(we, "left", fe) : s.xAxis.type === "continuous" && s.visualizationType !== "Forest Plot" ? g(we, "bottom", fe) : s.visualizationType === "Forest Plot" ? g(we, "left", s.dataFormat.abbreviated, s.runtime.xAxis.prefix, s.runtime.xAxis.suffix, Number(s.dataFormat.roundTo)) : we), rn = (we) => {
    const { numTicks: Ye } = $[we];
    let $e;
    return we === "yAxis" && ($e = oe && !Ye ? r.length : oe && Ye ? Ye : !oe && !Ye ? void 0 : !oe && Ye && Ye, $e === void 0 && !s.dataFormat.roundTo && (Number(nt) <= 3 ? $e = 2 : $e = 4), Number($e) > Number(nt) && ($e = Number(Ke) < 0 ? Math.round(nt) * 2 : Math.round(nt))), we === "xAxis" && ($e = oe && !Ye ? void 0 : oe && Ye ? Ye : !oe && !Ye ? void 0 : !oe && Ye && Ye, oe && $e === void 0 && !s.dataFormat.roundTo && (nt <= 3 ? $e = 2 : $e = 4), s.visualizationType === "Forest Plot" && ($e = s.yAxis.numTicks !== "" ? s.yAxis.numTicks : 4)), $e;
  }, { tooltipData: Et, showTooltip: kt, hideTooltip: vn, tooltipOpen: kn, tooltipLeft: Fe, tooltipTop: Gt } = Og(), {
    handleTooltipMouseOver: Ft,
    handleTooltipClick: dn,
    handleTooltipMouseOff: Je,
    tooltipStyles: fn,
    TooltipListItem: hn,
    getXValueFromCoordinateDate: Tn,
    getXValueFromCoordinate: Sn
  } = zg({
    xScale: Me,
    yScale: De,
    showTooltip: kt,
    hideTooltip: vn
  });
  ue.useEffect(() => {
    document.querySelector(".isEditor") && be((Ye) => !0);
  }), ue.useEffect(() => {
    (ve == null ? void 0 : ve.isIntersecting) === !0 && s.animate && setTimeout(() => {
      be((we) => !0);
    }, 500);
  }, [ve == null ? void 0 : ve.isIntersecting, s.animate]);
  const un = () => {
    const { visualizationType: we } = s;
    return we === "Combo" && $.forecastingSeriesKeys > 0 || we === "Area Chart" || we === "Line" || we === "Bar";
  }, Mt = Number(M === "horizontal" ? s.xAxis.size : s.yAxis.size), Ht = () => s.visualizationType === "Forest Plot" ? s.data.length : rn("yAxis"), K = (we) => {
    const Ye = we.currentTarget.getBoundingClientRect(), $e = we.clientX - Ye.left, Xe = we.clientY - Ye.top;
    Ve({
      x: $e,
      y: Xe
    });
  };
  return isNaN(ne) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(Br, { component: "LinearChart" }, /* @__PURE__ */ i.createElement("div", { style: { width: `${ne}px`, height: `${I}px`, overflow: "visible" }, className: "tooltip-boundary" }, /* @__PURE__ */ i.createElement(
    "svg",
    {
      onMouseMove: K,
      width: "100%",
      height: "100%",
      className: `linear ${s.animate ? "animated" : ""} ${ge && s.animate ? "animate" : ""} ${V && "debug"}`,
      role: "img",
      "aria-label": v(s),
      ref: Ae,
      style: { overflow: "visible" }
    },
    /* @__PURE__ */ i.createElement(mr, { width: ne, height: I, fill: "transparent" }),
    " ",
    !["Spark Line", "Forest Plot"].includes(L) && /* @__PURE__ */ i.createElement(IE, { scale: De, tickLength: s.useLogScale ? 6 : 8, left: Number($.yAxis.size) - s.yAxis.axisPadding, label: ((bt = $.yAxis.yAxis) == null ? void 0 : bt.label) || $.yAxis.label, stroke: "#333", tickFormat: (we, Ye) => cn(we, Ye), numTicks: Ht() }, (we) => {
      const Ye = s.orientation === "horizontal" ? (we.axisToPoint.y - we.axisFromPoint.y) / 2 : (we.axisFromPoint.y - we.axisToPoint.y) / 2, $e = q / we.ticks.length / 2 - q / we.ticks.length * (1 - s.barThickness) + 5;
      return /* @__PURE__ */ i.createElement(rt, { className: "left-axis" }, we.ticks.map((Xe, Lt) => {
        const Wt = we.ticks[0].to.y, Ut = 15, Kt = String(Xe.value).startsWith("1") || Xe.value === 0.1 ? "block" : "none", Ot = Kt === "block" ? 7 : 0, $t = { x: Xe.to.x - Ot, y: Xe.to.y };
        return /* @__PURE__ */ i.createElement(rt, { key: `vx-tick-${Xe.value}-${Lt}`, className: "vx-axis-tick" }, !$.yAxis.hideTicks && /* @__PURE__ */ i.createElement(nn, { key: `${Xe.value}--hide-hideTicks`, from: Xe.from, to: s.useLogScale ? $t : Xe.to, stroke: s.yAxis.tickColor, display: M === "horizontal" ? "none" : "block" }), $.yAxis.gridLines ? /* @__PURE__ */ i.createElement(nn, { key: `${Xe.value}--hide-hideGridLines`, display: (s.useLogScale && Kt).toString(), from: { x: Xe.from.x + Q, y: Xe.from.y }, to: Xe.from, stroke: "rgba(0,0,0,0.3)" }) : "", M === "horizontal" && N !== "stacked" && s.yAxis.labelPlacement === "On Date/Category Axis" && !s.yAxis.hideLabel && /* @__PURE__ */ i.createElement(
          Pt,
          {
            transform: `translate(${Xe.to.x - 5}, ${s.isLollipopChart ? Xe.to.y - Wt : Xe.to.y - Wt + (Number(s.barHeight * s.series.length) - Ut) / 2}) rotate(-${s.runtime.horizontal && s.runtime.yAxis.tickRotation || 0})`,
            verticalAnchor: "start",
            textAnchor: "end"
          },
          Xe.formattedValue
        ), M === "horizontal" && N === "stacked" && s.yAxis.labelPlacement === "On Date/Category Axis" && !s.yAxis.hideLabel && /* @__PURE__ */ i.createElement(Pt, { transform: `translate(${Xe.to.x - 5}, ${Xe.to.y - Wt + (Number(s.barHeight) - Ut) / 2}) rotate(-${$.horizontal ? $.yAxis.tickRotation : 0})`, verticalAnchor: "start", textAnchor: "end" }, Xe.formattedValue), M === "horizontal" && L === "Paired Bar" && !s.yAxis.hideLabel && /* @__PURE__ */ i.createElement(Pt, { transform: `translate(${Xe.to.x - 5}, ${Xe.to.y - Wt + Number(s.barHeight) / 2}) rotate(-${$.horizontal ? $.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, Xe.formattedValue), M === "horizontal" && L === "Deviation Bar" && !s.yAxis.hideLabel && /* @__PURE__ */ i.createElement(Pt, { transform: `translate(${Xe.to.x - 5}, ${s.isLollipopChart ? Xe.to.y - Wt + 2 : Xe.to.y - Wt + Number(s.barHeight) / 2}) rotate(-${$.horizontal ? $.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, Xe.formattedValue), M === "vertical" && L !== "Paired Bar" && !s.yAxis.hideLabel && /* @__PURE__ */ i.createElement(
          Pt,
          {
            display: s.useLogScale ? Kt : "block",
            dx: s.useLogScale ? -6 : 0,
            x: s.runtime.horizontal ? Xe.from.x + 2 : Xe.to.x,
            y: Xe.to.y + (s.runtime.horizontal ? $e : 0),
            angle: -Number(s.yAxis.tickRotation) || 0,
            verticalAnchor: s.runtime.horizontal ? "start" : "middle",
            textAnchor: s.runtime.horizontal ? "start" : "end",
            fill: s.yAxis.tickLabelColor
          },
          Xe.formattedValue
        ));
      }), !s.yAxis.hideAxis && /* @__PURE__ */ i.createElement(nn, { from: we.axisFromPoint, to: $.horizontal ? { x: 0, y: s.visualizationType === "Forest Plot" ? I : Number(H) } : we.axisToPoint, stroke: "#000" }), De.domain()[0] < 0 && /* @__PURE__ */ i.createElement(nn, { from: { x: we.axisFromPoint.x, y: De(0) }, to: { x: Q, y: De(0) }, stroke: "#333" }), L === "Bar" && M === "horizontal" && Me.domain()[0] < 0 && /* @__PURE__ */ i.createElement(nn, { from: { x: Me(0), y: 0 }, to: { x: Me(0), y: q }, stroke: "#333", strokeWidth: 2 }), /* @__PURE__ */ i.createElement(Pt, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${-1 * $.yAxis.size}, ${Ye}) rotate(-90)`, fontWeight: "bold", fill: s.yAxis.labelColor }, we.label));
    }),
    Ze && /* @__PURE__ */ i.createElement(VE, { scale: ot, left: Number(ne - s.yAxis.rightAxisSize), label: s.yAxis.rightLabel, tickFormat: (we) => g(we, "right"), numTicks: $.yAxis.rightNumTicks || void 0, labelOffset: 45 }, (we) => {
      const Ye = s.orientation === "horizontal" ? (we.axisToPoint.y - we.axisFromPoint.y) / 2 : (we.axisFromPoint.y - we.axisToPoint.y) / 2, $e = q / we.ticks.length / 2 - q / we.ticks.length * (1 - s.barThickness) + 5;
      return /* @__PURE__ */ i.createElement(rt, { className: "right-axis" }, we.ticks.map((Xe, Lt) => /* @__PURE__ */ i.createElement(rt, { key: `vx-tick-${Xe.value}-${Lt}`, className: "vx-axis-tick" }, !$.yAxis.rightHideTicks && /* @__PURE__ */ i.createElement(nn, { from: Xe.from, to: Xe.to, display: $.horizontal ? "none" : "block", stroke: s.yAxis.rightAxisTickColor }), $.yAxis.rightGridLines ? /* @__PURE__ */ i.createElement(nn, { from: { x: Xe.from.x + Q, y: Xe.from.y }, to: Xe.from, stroke: "rgba(0,0,0,0.3)" }) : "", !s.yAxis.rightHideLabel && /* @__PURE__ */ i.createElement(Pt, { x: Xe.to.x, y: Xe.to.y + ($.horizontal ? $e : 0), verticalAnchor: $.horizontal ? "start" : "middle", textAnchor: "start", fill: s.yAxis.rightAxisTickLabelColor }, Xe.formattedValue))), !s.yAxis.rightHideAxis && /* @__PURE__ */ i.createElement(nn, { from: we.axisFromPoint, to: we.axisToPoint, stroke: "#333" }), /* @__PURE__ */ i.createElement(Pt, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${s.yAxis.rightLabelOffsetSize ? s.yAxis.rightLabelOffsetSize : 0}, ${Ye}) rotate(-90)`, fontWeight: "bold", fill: s.yAxis.rightAxisLabelColor }, we.label));
    }),
    ee && s.topAxis.hasLine && /* @__PURE__ */ i.createElement(
      XE,
      {
        stroke: "#333",
        left: Number($.yAxis.size),
        scale: Me,
        hideTicks: !0,
        hideZero: !0,
        tickLabelProps: () => ({
          fill: "transparent"
        })
      }
    ),
    L !== "Paired Bar" && L !== "Spark Line" && /* @__PURE__ */ i.createElement(
      $u,
      {
        top: $.horizontal && s.visualizationType !== "Forest Plot" ? Number(H) + Number(s.xAxis.axisPadding) : (s.visualizationType === "Forest Plot", q + Number(s.xAxis.axisPadding)),
        left: s.visualizationType !== "Forest Plot" ? Number($.yAxis.size) : 0,
        label: $.xAxis.label,
        tickFormat: qt,
        scale: Me,
        stroke: "#333",
        numTicks: rn("xAxis"),
        tickStroke: "#333"
      },
      (we) => {
        const Ye = s.visualizationType !== "Forest Plot" ? (we.axisToPoint.x - we.axisFromPoint.x) / 2 : o[0] / 2, $e = (yt) => /\s/.test(yt), Xe = we.ticks.some((yt) => $e(yt.value)), Lt = { small: 16, medium: 18, large: 20 }, Wt = 8, Ut = Math.max(...we.ticks.map((yt) => A(yt.formattedValue, `normal ${Lt[s.fontSize]}px sans-serif`))), Kt = Xe ? 180 : 100, Ot = we.ticks.map((yt) => A(yt.formattedValue, `normal ${Lt[s.fontSize]}px sans-serif`)), $t = Ot.reduce((yt, ct) => yt + ct, Kt), Zt = (Q - $t) / (we.ticks.length - 1);
        let an = [0];
        for (let yt = 1; yt < Ot.length; yt++)
          an[yt] = an[yt - 1] + Ot[yt - 1] + Zt;
        let pn = !1;
        Ot.forEach((yt, ct) => {
          if (an[ct] + Ot[ct] > an[ct + 1]) {
            pn = !0;
            return;
          }
        });
        const Qt = pn && s.isResponsiveTicks ? Ut + Wt + 20 : 0, mn = Number(s.xAxis.tickRotation) > 0 ? Number(s.xAxis.tickRotation) : 0;
        return s.dynamicMarginTop = Qt, s.xAxis.tickWidthMax = Ut, /* @__PURE__ */ i.createElement(rt, { className: "bottom-axis", width: o[0] }, we.ticks.map((yt, ct, on) => {
          const xn = String(yt.value).startsWith("1") || yt.value === 0.1 ? "block" : "none", en = xn === "block" ? 16 : Wt, Bn = { x: yt.to.x, y: en };
          let Cn = A(yt.formattedValue, `normal ${Lt[s.fontSize]}px sans-serif`), jt = 100 / on.length;
          s.yAxis.tickRotation = s.isResponsiveTicks && s.orientation === "horizontal" ? 0 : s.yAxis.tickRotation, s.xAxis.tickRotation = s.isResponsiveTicks && s.orientation === "vertical" ? 0 : s.xAxis.tickRotation;
          const Yt = s.isResponsiveTicks && pn ? -Number(s.xAxis.maxTickRotation) || -90 : -Number(s.runtime.xAxis.tickRotation);
          return /* @__PURE__ */ i.createElement(rt, { key: `vx-tick-${yt.value}-${ct}`, className: "vx-axis-tick" }, !s.xAxis.hideTicks && /* @__PURE__ */ i.createElement(nn, { from: yt.from, to: M === "horizontal" && s.useLogScale ? Bn : yt.to, stroke: s.xAxis.tickColor, strokeWidth: xn === "block" && s.useLogScale ? 1.3 : 1 }), !s.xAxis.hideLabel && /* @__PURE__ */ i.createElement(
            Pt,
            {
              dy: s.orientation === "horizontal" && s.useLogScale ? 8 : 0,
              display: s.orientation === "horizontal" && s.useLogScale ? xn : "block",
              x: yt.to.x,
              y: yt.to.y,
              angle: Yt,
              verticalAnchor: Yt < -50 ? "middle" : "start",
              textAnchor: Yt ? "end" : "middle",
              width: pn && !s.isResponsiveTicks && !Number(s[Ne].tickRotation) ? jt : Cn,
              fill: s.xAxis.tickLabelColor
            },
            yt.formattedValue
          ));
        }), !s.xAxis.hideAxis && /* @__PURE__ */ i.createElement(nn, { from: we.axisFromPoint, to: we.axisToPoint, stroke: "#333" }), /* @__PURE__ */ i.createElement(
          Pt,
          {
            x: Ye,
            y: s.visualizationType === "Forest Plot" ? s.xAxis.tickWidthMax + 40 : s.orientation === "horizontal" ? Qt || s.xAxis.labelOffset : s.isResponsiveTicks && Qt && !oe ? Qt : Number(mn) && !s.isResponsiveTicks && !oe ? Number(mn + Ut / 1.3) : Number(s.xAxis.labelOffset),
            textAnchor: "middle",
            verticalAnchor: "start",
            fontWeight: "bold",
            fill: s.xAxis.labelColor
          },
          we.label
        ));
      }
    ),
    L === "Paired Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement($u, { top: q, left: Number($.yAxis.size), label: $.xAxis.label, tickFormat: $.xAxis.type === "date" ? d : g, scale: Ue, stroke: "#333", tickStroke: "#333", numTicks: $.xAxis.numTicks || void 0 }, (we) => /* @__PURE__ */ i.createElement(rt, { className: "bottom-axis" }, we.ticks.map((Ye, $e) => {
      const Xe = Ye.index !== 0 ? s.yAxis.tickRotation : 0, Lt = Ye.index !== 0 && s.yAxis.tickRotation && s.yAxis.tickRotation > 0 ? "end" : "middle";
      return /* @__PURE__ */ i.createElement(rt, { key: `vx-tick-${Ye.value}-${$e}`, className: "vx-axis-tick" }, !$.yAxis.hideTicks && /* @__PURE__ */ i.createElement(nn, { from: Ye.from, to: Ye.to, stroke: "#333" }), !$.yAxis.hideLabel && /* @__PURE__ */ i.createElement(Pt, { x: Ye.to.x, y: Ye.to.y, angle: -Xe, verticalAnchor: "start", textAnchor: Lt }, g(Ye.value, "left")));
    }), !$.yAxis.hideAxis && /* @__PURE__ */ i.createElement(nn, { from: we.axisFromPoint, to: we.axisToPoint, stroke: "#333" }))), /* @__PURE__ */ i.createElement(
      $u,
      {
        top: q,
        left: Number($.yAxis.size),
        label: $.xAxis.label,
        tickFormat: $.xAxis.type === "date" ? d : $.xAxis.dataKey !== "Year" ? g : (we) => we,
        scale: dt,
        stroke: "#333",
        tickStroke: "#333",
        numTicks: $.xAxis.numTicks || void 0
      },
      (we) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(rt, { className: "bottom-axis" }, we.ticks.map((Ye, $e) => {
        const Xe = Ye.index !== 0 ? s.yAxis.tickRotation : 0, Lt = Ye.index !== 0 && s.yAxis.tickRotation && s.yAxis.tickRotation > 0 ? "end" : "middle";
        return /* @__PURE__ */ i.createElement(rt, { key: `vx-tick-${Ye.value}-${$e}`, className: "vx-axis-tick" }, !$.yAxis.hideTicks && /* @__PURE__ */ i.createElement(nn, { from: Ye.from, to: Ye.to, stroke: "#333" }), !$.yAxis.hideLabel && /* @__PURE__ */ i.createElement(Pt, { x: Ye.to.x, y: Ye.to.y, angle: -Xe, verticalAnchor: "start", textAnchor: Lt }, g(Ye.value, "left")));
      }), !$.yAxis.hideAxis && /* @__PURE__ */ i.createElement(nn, { from: we.axisFromPoint, to: we.axisToPoint, stroke: "#333" })), /* @__PURE__ */ i.createElement(rt, null, /* @__PURE__ */ i.createElement(Pt, { x: Q / 2, y: s.xAxis.labelOffset, stroke: "#333", textAnchor: "middle", verticalAnchor: "start" }, $.xAxis.label)))
    )),
    L === "Deviation Bar" && ((ft = s.series) == null ? void 0 : ft.length) === 1 && /* @__PURE__ */ i.createElement(uk, { animatedChart: ge, xScale: Me, yScale: De, width: Q, height: q }),
    L === "Paired Bar" && /* @__PURE__ */ i.createElement(mk, { originalWidth: ne, width: Q, height: q }),
    L === "Scatter Plot" && /* @__PURE__ */ i.createElement(
      sk,
      {
        xScale: Me,
        yScale: De,
        getXAxisData: Ee,
        getYAxisData: le,
        xMax: Q,
        yMax: q,
        handleTooltipMouseOver: Ft,
        handleTooltipMouseOff: Je,
        handleTooltipClick: dn,
        tooltipData: Et,
        showTooltip: kt
      }
    ),
    L === "Box Plot" && /* @__PURE__ */ i.createElement(lk, { xScale: Me, yScale: De }),
    (L === "Area Chart" && s.visualizationSubType === "regular" || L === "Combo") && /* @__PURE__ */ i.createElement(JE, { xScale: Me, yScale: De, yMax: q, xMax: Q, chartRef: Ae, width: Q, height: q, handleTooltipMouseOver: Ft, handleTooltipMouseOff: Je, tooltipData: Et, showTooltip: kt }),
    (L === "Area Chart" && s.visualizationSubType === "stacked" || L === "Combo") && /* @__PURE__ */ i.createElement(tk, { xScale: Me, yScale: De, yMax: q, xMax: Q, chartRef: Ae, width: Q, height: q, handleTooltipMouseOver: Ft, handleTooltipMouseOff: Je, tooltipData: Et, showTooltip: kt }),
    (L === "Bar" || L === "Combo") && /* @__PURE__ */ i.createElement(
      ok,
      {
        xScale: Me,
        yScale: De,
        seriesScale: ht,
        xMax: Q,
        yMax: q,
        getXAxisData: Ee,
        getYAxisData: le,
        animatedChart: ge,
        visible: ge,
        handleTooltipMouseOver: Ft,
        handleTooltipMouseOff: Je,
        handleTooltipClick: dn,
        tooltipData: Et,
        showTooltip: kt,
        chartRef: Ae
      }
    ),
    (L === "Line" || L === "Combo") && /* @__PURE__ */ i.createElement(
      rm,
      {
        xScale: Me,
        yScale: De,
        getXAxisData: Ee,
        getYAxisData: le,
        xMax: Q,
        yMax: q,
        seriesStyle: s.series,
        handleTooltipMouseOver: Ft,
        handleTooltipMouseOff: Je,
        handleTooltipClick: dn,
        tooltipData: Et,
        showTooltip: kt,
        chartRef: Ae
      }
    ),
    (L === "Forecasting" || L === "Combo") && /* @__PURE__ */ i.createElement(
      dk,
      {
        showTooltip: kt,
        tooltipData: Et,
        xScale: Me,
        yScale: De,
        width: Q,
        le: !0,
        height: q,
        xScaleNoPadding: pt,
        chartRef: Ae,
        getXValueFromCoordinate: Sn,
        handleTooltipMouseOver: Ft,
        handleTooltipMouseOff: Je,
        isBrush: !1
      }
    ),
    s.yAxis.anchors && s.yAxis.anchors.map((we) => /* @__PURE__ */ i.createElement(nn, { strokeDasharray: E(we.lineStyle), stroke: "rgba(0,0,0,1)", className: "customAnchor", from: { x: 0 + s.yAxis.size, y: De(we.value) }, to: { x: Q, y: De(we.value) }, display: $.horizontal ? "none" : "block" })),
    L === "Forest Plot" && /* @__PURE__ */ i.createElement(
      pk,
      {
        xScale: Me,
        yScale: De,
        seriesScale: ht,
        width: ne,
        height: I,
        getXAxisData: Ee,
        getYAxisData: le,
        animatedChart: ge,
        visible: ge,
        handleTooltipMouseOver: Ft,
        handleTooltipMouseOff: Je,
        handleTooltipClick: dn,
        tooltipData: Et,
        showTooltip: kt,
        chartRef: Ae,
        config: s
      }
    ),
    ["Line", "Bar", "Combo", "Area Chart"].includes(s.visualizationType) && !oe && /* @__PURE__ */ i.createElement(Vk, { xScaleBrush: gt, yScale: De, xMax: Q, yMax: q }),
    L !== "Bar" && L !== "Paired Bar" && L !== "Box Plot" && L !== "Area Chart" && L !== "Scatter Plot" && L !== "Deviation Bar" && L !== "Forecasting" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(rm, { xScale: Me, yScale: De, getXAxisData: Ee, getYAxisData: le, xMax: Q, yMax: q, seriesStyle: s.series })),
    s.yAxis.anchors && s.yAxis.anchors.map((we, Ye) => {
      let $e = De(we.value);
      if (!we.value)
        return;
      const Xe = M === "horizontal" && L === "Bar" ? s.barHeight / 4 : 0;
      if ($e)
        return (
          // prettier-ignore
          /* @__PURE__ */ i.createElement(
            nn,
            {
              key: `yAxis-${we.value}--${Ye}`,
              strokeDasharray: E(we.lineStyle),
              stroke: we.color ? we.color : "rgba(0,0,0,1)",
              className: "anchor-y",
              from: { x: 0 + Mt, y: $e - Xe },
              to: { x: ne - s.yAxis.rightAxisSize, y: $e - Xe }
            }
          )
        );
    }),
    s.xAxis.anchors && s.xAxis.anchors.map((we, Ye) => {
      let $e = U;
      M === "horizontal" && ($e = j);
      let Xe = $e.type === "date" ? Me(u(we.value, !1)) : Me(we.value);
      if (Xe)
        return (
          // prettier-ignore
          /* @__PURE__ */ i.createElement(
            nn,
            {
              key: `xAxis-${we.value}--${Ye}`,
              strokeDasharray: E(we.lineStyle),
              stroke: we.color ? we.color : "rgba(0,0,0,1)",
              fill: we.color ? we.color : "rgba(0,0,0,1)",
              className: "anchor-x",
              from: { x: Number(Xe) + Number(Mt), y: 0 },
              to: { x: Number(Xe) + Number(Mt), y: q }
            }
          )
        );
    }),
    s.visualizationType !== "Bar" && s.visualizationType !== "Combo" && /* @__PURE__ */ i.createElement(hh, { xScale: Me, handleTooltipClick: dn, handleTooltipMouseOff: Je, handleTooltipMouseOver: Ft, showTooltip: kt, hideTooltip: vn, tooltipData: Et, yMax: q, width: ne }),
    un && kt && Et && s.visual.verticalHoverLine && /* @__PURE__ */ i.createElement(rt, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ i.createElement(nn, { from: { x: Et.dataXPosition - 10, y: 0 }, to: { x: Et.dataXPosition - 10, y: q }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" })),
    un && kt && Et && s.visual.horizontalHoverLine && /* @__PURE__ */ i.createElement(rt, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: s.yAxis.size ? s.yAxis.size : 0 }, /* @__PURE__ */ i.createElement(nn, { from: { x: 0, y: Et.dataYPosition }, to: { x: Q, y: Et.dataYPosition }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    s.filters && s.filters.values.length === 0 && r.length === 0 && /* @__PURE__ */ i.createElement(Pt, { x: Number(s.yAxis.size) + Number(Q / 2), y: I / 2 - s.xAxis.size / 2, textAnchor: "middle" }, s.chartMessage.noData),
    s.visualizationType === "Bar" && s.tooltips.singleSeries && s.visual.horizontalHoverLine && /* @__PURE__ */ i.createElement(rt, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: s.yAxis.size ? s.yAxis.size : 0 }, /* @__PURE__ */ i.createElement(nn, { from: { x: 0, y: _e.y }, to: { x: Q, y: _e.y }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    s.visualizationType === "Bar" && s.tooltips.singleSeries && s.visual.verticalHoverLine && /* @__PURE__ */ i.createElement(rt, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ i.createElement(nn, { from: { x: _e.x, y: 0 }, to: { x: _e.x, y: q }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" }))
  ), Et && Object.entries(Et.data).length > 0 && kn && kt && Et.dataYPosition && Et.dataXPosition && !s.tooltips.singleSeries && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${s.tooltips.opacity / 100}) !important`), /* @__PURE__ */ i.createElement(Fg, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: Fe, top: Gt }, /* @__PURE__ */ i.createElement("ul", null, typeof Et == "object" && Object.entries(Et.data).map((we, Ye) => /* @__PURE__ */ i.createElement(hn, { item: we, key: Ye }))))), he() && /* @__PURE__ */ i.createElement(iy, { id: `cdc-open-viz-tooltip-${$.uniqueId}`, variant: "light", arrowColor: "rgba(0,0,0,0)", className: "tooltip", style: { background: `rgba(255,255,255, ${s.tooltips.opacity / 100})`, color: "black" } }), /* @__PURE__ */ i.createElement("div", { className: "animation-trigger", ref: Qe })));
};
var Kk = ["id", "markerWidth", "markerHeight", "markerUnits", "children"];
function Bf() {
  return Bf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Bf.apply(this, arguments);
}
function Yk(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, o;
  for (o = 0; o < a.length; o++)
    r = a[o], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function dy(e) {
  var t = e.id, n = e.markerWidth, a = n === void 0 ? 3 : n, r = e.markerHeight, o = r === void 0 ? 3 : r, s = e.markerUnits, u = s === void 0 ? "userSpaceOnUse" : s, d = e.children, f = Yk(e, Kk);
  return /* @__PURE__ */ i.createElement("defs", null, /* @__PURE__ */ i.createElement("marker", Bf({
    id: t,
    markerWidth: a,
    markerHeight: o,
    markerUnits: u
  }, f), d));
}
dy.propTypes = {
  id: pe.string.isRequired,
  size: pe.number,
  markerWidth: pe.oneOfType([pe.string, pe.number]),
  markerHeight: pe.oneOfType([pe.string, pe.number]),
  markerUnits: pe.string,
  refX: pe.oneOfType([pe.string, pe.number]),
  refY: pe.oneOfType([pe.string, pe.number]),
  strokeWidth: pe.number,
  children: pe.node.isRequired
};
var Xk = ["id", "size", "strokeWidth"];
function $f() {
  return $f = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, $f.apply(this, arguments);
}
function qk(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, o;
  for (o = 0; o < a.length; o++)
    r = a[o], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Gk(e) {
  var t = e.id, n = e.size, a = n === void 0 ? 9 : n, r = e.strokeWidth, o = r === void 0 ? 1 : r, s = qk(e, Xk), u = a + o * 2, d = a, f = u / 2, g = "0 0, " + a + " " + a / 2 + ", 0 " + a;
  return /* @__PURE__ */ i.createElement(dy, $f({
    id: t,
    markerWidth: u,
    markerHeight: u,
    refX: d,
    refY: f,
    orient: "auto",
    markerUnits: "strokeWidth",
    fill: "none",
    strokeWidth: o
  }, s), /* @__PURE__ */ i.createElement("g", {
    transform: "translate(" + o + ", " + o + ")"
  }, /* @__PURE__ */ i.createElement("polyline", {
    points: g
  })));
}
const Zk = (e) => {
  var ne;
  const { width: t, height: n } = e, { transformedData: a, config: r, parseDate: o, formatDate: s, seriesHighlight: u, formatNumber: d, colorScale: f, handleChartAriaLabels: g } = ue.useContext(Ct);
  let v = t;
  const { minValue: y, maxValue: E } = Dc(r, a), w = { top: 5, right: 10, bottom: 10, left: 10 }, O = n, T = v - r.runtime.yAxis.size, m = O - w.top - 20, A = (H) => r.runtime.xAxis.type === "date" ? o(H[r.runtime.originalXAxis.dataKey]).getTime() : H[r.runtime.originalXAxis.dataKey], _ = (H, oe) => H[oe];
  let L, N;
  const { max: M, min: U } = r.runtime.yAxis, j = Number(M) >= Number(E), $ = Number(U) <= Number(y);
  if (a) {
    let H = U && $ ? U : y, oe = M && j ? M : Number.MIN_VALUE;
    if (oe === Number.MIN_VALUE && (oe = E), r.runtime.yAxis.paddingPercent) {
      let I = (oe - H) * r.runtime.yAxis.paddingPercent;
      H -= I, oe += I;
    }
    let fe = a.map((I) => A(I));
    r.runtime.horizontal ? (L = Wn({
      domain: [H, oe],
      range: [0, T]
    }), N = r.runtime.xAxis.type === "date" ? Wn({ domain: [Math.min(...fe), Math.max(...fe)] }) : Yo({ domain: fe, padding: 0.5 }), Yo({
      domain: r.runtime.barSeriesKeys || r.runtime.seriesKeys,
      range: [0, m]
    }), N.rangeRound([0, m])) : (H = H < 0 ? H * 1.11 : H, N = Wn({
      domain: [H, oe],
      range: [m - w.bottom, w.top]
    }), L = Yo({
      domain: fe,
      range: [w.left, v - w.right]
    }), Yo({
      domain: r.runtime.barSeriesKeys || r.runtime.seriesKeys,
      range: [0, T]
    }));
  }
  const V = [L.domain()[0], L.domain()[L.domain().length - 1]];
  return /* @__PURE__ */ i.createElement(Br, { component: "SparkLine" }, /* @__PURE__ */ i.createElement("svg", { role: "img", "aria-label": g(r), width: t, height: 100, className: "sparkline", tabIndex: 0 }, ((ne = r.runtime.lineSeriesKeys) == null ? void 0 : ne.length) > 0 ? r.runtime.lineSeriesKeys : r.runtime.seriesKeys.map((H, oe) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    rt,
    {
      style: { width: v },
      className: "sparkline-group",
      key: `series-${H}`,
      opacity: r.legend.behavior === "highlight" && u.length > 0 && u.indexOf(H) === -1 ? 0.5 : 1,
      display: r.legend.behavior === "highlight" || u.length === 0 || u.indexOf(H) !== -1 ? "block" : "none"
    },
    a.map((fe, I) => {
      let Q = r.runtime.yAxis.label ? `${r.runtime.yAxis.label}: ${d(_(fe, H))}` : d(_(fe, H)), q = r.runtime.xAxis.label ? `${r.runtime.xAxis.label}: ${fe[r.runtime.xAxis.dataKey]}` : fe[r.runtime.xAxis.dataKey];
      return `${Q}${q}`, r.seriesLabel && `${r.seriesLabel}${H}`, /* @__PURE__ */ i.createElement(rt, { key: `series-${H}-point-${I}` }, /* @__PURE__ */ i.createElement(Pt, { display: r.labels ? "block" : "none", x: L(A(fe)), y: N(_(fe, H)), fill: f ? f(r.runtime.seriesLabels ? r.runtime.seriesLabels[H] : H) : "#000", textAnchor: "middle" }, d(fe[H])));
    }),
    /* @__PURE__ */ i.createElement(
      fa,
      {
        curve: kc,
        data: a,
        x: (fe) => L(A(fe)),
        y: (fe) => N(_(fe, H)),
        stroke: f ? f(r.runtime.seriesLabels ? r.runtime.seriesLabels[H] : H) : "#000",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        markerEnd: `url(#arrow--${oe})`
      }
    ),
    /* @__PURE__ */ i.createElement(
      Gk,
      {
        id: `arrow--${oe}`,
        refX: 2,
        size: 6,
        markerEnd: `url(#arrow--${oe})`,
        strokeOpacity: 1,
        fillOpacity: 1,
        fill: f ? f(r.runtime.seriesLabels ? r.runtime.seriesLabels[H] : H) : "#000"
      }
    )
  ), /* @__PURE__ */ i.createElement(
    $u,
    {
      top: m + w.top,
      hideAxisLine: !0,
      hideTicks: !0,
      scale: L,
      tickValues: V,
      tickFormat: (fe) => r.xAxis.type === "date" ? s(fe) : null,
      stroke: "black",
      tickStroke: "black",
      tickLabelProps: () => ({
        fill: "black",
        fontSize: 11,
        textAnchor: "middle"
      })
    }
  )))));
}, Qk = () => {
  const {
    config: e,
    colorScale: t,
    seriesHighlight: n,
    highlight: a,
    tableData: r,
    highlightReset: o,
    transformedData: s,
    currentViewport: u
  } = ue.useContext(Ct);
  if (!e.legend)
    return null;
  const d = Ug(e, r, s, t);
  return !["Box Plot", "Pie"].includes(e.visualizationType) && /* @__PURE__ */ i.createElement(Vg, { config: e, colorScale: t, seriesHighlight: n, highlight: a, highlightReset: o, currentViewport: u, formatLabels: d });
}, qd = {
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
    axisPadding: 0,
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
}, Hu = (e) => /* @__PURE__ */ ue.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...e }, /* @__PURE__ */ ue.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), Jk = ({ name: e }) => {
  var u, d, f, g, v;
  const { config: t, rawData: n, updateConfig: a } = ue.useContext(Ct);
  if (t.visualizationType !== "Forest Plot")
    return;
  const r = (y) => {
    y.orientation === "horizontal" && (y.labels = !1), y.table.show === void 0 && (y.table.show = !isDashboard), y.visualizationType === "Combo" && (y.orientation = "vertical");
  }, o = (y = !0) => {
    let E = {};
    return n.forEach((w) => {
      Object.keys(w).forEach((O) => E[O] = !0);
    }), y && Object.keys(E).forEach((w) => {
      (t.series && t.series.filter((O) => O.dataKey === w).length > 0 || t.confidenceKeys && Object.keys(t.confidenceKeys).includes(w)) && delete E[w];
    }), Object.keys(E);
  }, s = (y, E, w, O) => {
    if (y === "boxplot" && E === "legend") {
      a({
        ...t,
        [y]: {
          ...t[y],
          [E]: {
            ...t.boxplot[E],
            [w]: O
          }
        }
      });
      return;
    }
    if (y === "boxplot" && E === "labels") {
      a({
        ...t,
        [y]: {
          ...t[y],
          [E]: {
            ...t.boxplot[E],
            [w]: O
          }
        }
      });
      return;
    }
    if (y === "forestPlot" && E) {
      let _ = {
        ...t,
        [y]: {
          ...t[y],
          [E]: {
            ...t.forestPlot[E],
            [w]: O
          }
        }
      };
      a(_);
      return;
    }
    if (y === "columns" && E !== "" && w !== "") {
      a({
        ...t,
        [y]: {
          ...t[y],
          [E]: {
            ...t[y][E],
            [w]: O
          }
        }
      });
      return;
    }
    if (y === null && E === null) {
      let _ = { ...t, [w]: O };
      r(_), a(_);
      return;
    }
    const T = Array.isArray(t[y]);
    let m = T ? [...t[y], O] : { ...t[y], [w]: O };
    E !== null && (T ? (m = [...t[y]], m[E] = { ...m[E], [w]: O }) : typeof O == "string" ? m[E] = O : m = { ...t[y], [E]: { ...t[y][E], [w]: O } });
    let A = { ...t, [y]: m };
    r(A), a(A);
  };
  return /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(_n, null, e, (!t.forestPlot.estimateField || !t.forestPlot.upper || !t.forestPlot.lower) && /* @__PURE__ */ i.createElement(Hu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(
    wt,
    {
      value: t.xAxis.dataKey || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Study Column",
      initial: "Select",
      required: !0,
      updateField: s,
      options: o(!1),
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
    }
  ), /* @__PURE__ */ i.createElement(
    wt,
    {
      value: t.forestPlot.type,
      label: "Forest Plot Type",
      initial: "Select",
      required: !0,
      onChange: (y) => {
        y.target.value !== "" && y.target.value !== "Select" && a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            type: y.target.value
          }
        }), y.target.value = "";
      },
      options: ["Linear", "Logarithmic"],
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Linear - Typically used for continuous outcomes. Line of no effect is positioned on 0 (zero) ", /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("br", null), " Logarithmic - Typically used for binary outcomes such as risk ratios and odds ratios. Line of no effect is positioned on 1.")))
    }
  ), /* @__PURE__ */ i.createElement(Ge, { type: "text", value: ((u = t.forestPlot) == null ? void 0 : u.title) || "", updateField: s, section: "forestPlot", fieldName: "title", label: "Plot Title" }), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("h4", null, "Column Settings"), /* @__PURE__ */ i.createElement(
    wt,
    {
      value: t.forestPlot.estimateField,
      label: "Point Estimate Column",
      initial: t.forestPlot.estimateField || "Select",
      required: !0,
      onChange: (y) => {
        y.target.value !== "" && y.target.value !== "Select" && a({
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
    wt,
    {
      value: t.forestPlot.shape,
      label: "Point Estimate Shape",
      onChange: (y) => {
        y.target.value !== "" && y.target.value !== "Select" && a({
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
    wt,
    {
      value: t.forestPlot.lower,
      label: "Lower CI Column",
      required: !0,
      initial: t.forestPlot.lower || "Select",
      onChange: (y) => {
        y.target.value !== "" && y.target.value !== "Select" && a({
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
    wt,
    {
      value: t.forestPlot.upper,
      label: "Upper CI Column",
      initial: t.forestPlot.upper || "Select",
      required: !0,
      onChange: (y) => {
        y.target.value !== "" && y.target.value !== "Select" && a({
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
        a({
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
  ))), /* @__PURE__ */ i.createElement(vt, { value: ((f = (d = t.forestPlot) == null ? void 0 : d.lineOfNoEffect) == null ? void 0 : f.show) || !1, section: "forestPlot", subsection: "lineOfNoEffect", fieldName: "show", label: "Show Line of No Effect", updateField: s }), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("h4", null, "Width Settings"), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Left (%)"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "number",
      min: 0,
      max: 100,
      value: t.forestPlot.leftWidthOffset || 0,
      onChange: (y) => {
        a({
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
        a({
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
        a({
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
        a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            rightWidthOffsetMobile: y.target.value
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement(Ge, { type: "number", min: 20, max: 45, value: t.forestPlot.rowHeight ? t.forestPlot.rowHeight : 10, updateField: s, section: "forestPlot", fieldName: "rowHeight", label: "Row Height", placeholder: "10" }), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("h4", null, "Labels Settings"), /* @__PURE__ */ i.createElement(Ge, { type: "text", value: ((g = t.forestPlot) == null ? void 0 : g.leftLabel) || "", updateField: s, section: "forestPlot", fieldName: "leftLabel", label: "Left Label" }), /* @__PURE__ */ i.createElement(Ge, { type: "text", value: ((v = t.forestPlot) == null ? void 0 : v.rightLabel) || "", updateField: s, section: "forestPlot", fieldName: "rightLabel", label: "Right Label" }), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement(
    wt,
    {
      value: t.forestPlot.radius.scalingColumn,
      label: "Weight Column",
      initial: "Select",
      onChange: (y) => {
        y.target.value !== "" && y.target.value !== "Select" && a({
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
        a({
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
        a({
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
}, al = i.createContext(), ew = (e) => {
  const { updateConfig: t, config: n, rawData: a } = ue.useContext(Ct), { getColumns: r, selectComponent: o } = e, s = ["Line", "dashed-sm", "dashed-md", "dashed-lg"], u = (d, f, g) => {
    let v = [...n.series];
    if (v[d][g] = f, g === "type" && f === "Bar" && (v[d].axis = "Left"), v[d].type === "Forecasting") {
      let y = Array.from(new Set(a.map((w) => w[v[d].dataKey]))), E = [];
      y.forEach((w) => {
        E.push({ key: w });
      }), v[d].stages = E, v[d].stageColumn = v[d].dataKey;
    }
    t({ ...n, series: v });
  };
  return /* @__PURE__ */ i.createElement(al.Provider, { value: { updateSeries: u, supportedRightAxisTypes: s, getColumns: r, selectComponent: o } }, e.children);
}, tw = (e) => {
  const { config: t, updateConfig: n } = ue.useContext(Ct), { series: a, index: r } = e;
  if (!(() => {
    let d = !1;
    return t.visualizationSubType === "stacked" || ["Line", "dashed-sm", "dashed-md", "dashed-lg", "Area Chart"].some((g) => g.includes(a.type)) && (d = !0), d;
  })())
    return;
  const s = (d, f) => {
    let g = [...t.series];
    g[d].lineType = f, n({ ...t, series: g });
  };
  let u = [];
  return Object.keys(xc).map((d) => u.push(xc[d])), /* @__PURE__ */ i.createElement(
    Ha,
    {
      initial: "Select an option",
      value: a.lineType ? a.lineType : "curveLinear",
      label: "Series Line Type",
      onChange: (d) => {
        s(r, d.target.value);
      },
      options: u
    }
  );
}, nw = (e) => {
  const { config: t } = ue.useContext(Ct), { updateSeries: n } = ue.useContext(al), { index: a, series: r } = e, o = () => {
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
        value: r.type,
        label: "Series Type",
        onChange: (s) => {
          n(a, s.target.value, "type");
        },
        options: o()
      }
    );
}, rw = (e) => {
  const { config: t, updateConfig: n, rawData: a } = ue.useContext(Ct), { updateSeries: r, getColumns: o } = ue.useContext(al), { index: s, series: u } = e;
  return /* @__PURE__ */ i.createElement(
    Ha,
    {
      initial: "Select an option",
      value: u.stageColumn,
      label: "Add Forecasting Stages",
      onChange: (d) => {
        let f = [], g = new Set(a == null ? void 0 : a.map((y) => y[d.target.value]));
        g = Array.from(g), g = g.filter((y) => y !== void 0), g.forEach((y) => f.push({ key: y }));
        const v = [...t.series];
        v[s] = { ...v[s], stages: f, stageColumn: d.target.value }, n({
          ...t,
          series: v
        });
      },
      options: o(!1)
    }
  );
}, aw = (e) => {
  const { config: t, rawData: n } = ue.useContext(Ct), { updateSeries: a } = ue.useContext(al), { index: r, series: o } = e;
  if (o.type !== "Forecasting" || !n || !o.stageColumn)
    return;
  let s = new Set(n.map((u) => u[o.stageColumn]));
  return s = Array.from(s), s = s.filter((u) => u !== void 0), /* @__PURE__ */ i.createElement(
    Ha,
    {
      initial: "Select an option",
      value: o.stageItem,
      label: "Forecasting Item Column",
      onChange: (u) => {
        a(r, u.target.value, "stageItem");
      },
      options: s
    }
  );
}, iw = (e) => {
  const { config: t } = ue.useContext(Ct), { updateSeries: n, supportedRightAxisTypes: a } = ue.useContext(al), { index: r, series: o } = e;
  if (!(t.visualizationType !== "Combo" || !o) && a.includes(o.type))
    return /* @__PURE__ */ i.createElement(
      Ha,
      {
        initial: "Select an option",
        value: o.axis ? o.axis : "Left",
        label: "Series Axis",
        onChange: (s) => {
          n(r, s.target.value, "axis");
        },
        options: {
          Left: "Left",
          Right: "Right"
        }
      }
    );
}, ow = (e) => {
  var o;
  const { config: t, updateConfig: n } = ue.useContext(Ct), { index: a, series: r } = e;
  if (r.type === "Forecasting" && r)
    return (o = r == null ? void 0 : r.stages) == null ? void 0 : o.map((s, u) => {
      var d, f, g, v;
      return /* @__PURE__ */ i.createElement(
        Ha,
        {
          key: `${s}--${u}`,
          initial: "Select an option",
          value: (f = (d = t.series) == null ? void 0 : d[a].stages) != null && f[u].color ? (v = (g = t.series) == null ? void 0 : g[a].stages) == null ? void 0 : v[u].color : "Select",
          label: `${s.key} Series Color`,
          onChange: (y) => {
            const E = [...t.series], w = E[a].stages;
            w[u].color = y.target.value, E[a] = { ...E[a], stages: w }, n({
              ...t,
              series: E
            });
          },
          options: Object.keys(ju)
        }
      );
    });
}, lw = (e) => {
  var s;
  const { config: t, updateConfig: n } = ue.useContext(Ct), { series: a, index: r } = e, { getColumns: o } = ue.useContext(al);
  if (a.type === "Forecasting")
    return /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Confidence Interval Groups"), /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement(Fi, { allowZeroExpanded: !0 }, (s = a == null ? void 0 : a.confidenceIntervals) == null ? void 0 : s.map((u, d) => {
      const f = u.showInTooltip ? u.showInTooltip : !1, g = (v, y, E) => {
        v.preventDefault();
        let w = [...t.series];
        w[y].confidenceIntervals[E].showInTooltip = !f, n({
          ...t,
          series: w
        });
      };
      return /* @__PURE__ */ i.createElement(Ln, { className: "series-item series-item--chart", key: `${d}` }, /* @__PURE__ */ i.createElement(On, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(_n, { className: "accordion__button accordion__button" }, "Group ", d + 1, /* @__PURE__ */ i.createElement(
        "button",
        {
          className: "series-list__remove",
          onClick: (v) => {
            v.preventDefault();
            const y = [...t.series[r].confidenceIntervals];
            y.splice(d, 1);
            const E = [...t.series];
            E[r] = { ...E[r], confidenceIntervals: [...y] }, n({
              ...t,
              series: E
            });
          }
        },
        "Remove"
      )))), /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement("div", { className: "input-group" }, /* @__PURE__ */ i.createElement("label", { htmlFor: "showInTooltip" }, "Show In Tooltip"), /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox--small", onClick: (v) => g(v, r, d) }, /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, f && /* @__PURE__ */ i.createElement(km, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ i.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: "showInTooltip", checked: f || !1, readOnly: !0 }))), /* @__PURE__ */ i.createElement(
        Ha,
        {
          initial: "Select an option",
          value: t.series[r].confidenceIntervals[d].low ? t.series[r].confidenceIntervals[d].low : "Select",
          label: "Low Confidence Interval",
          onChange: (v) => {
            const y = [...t.series[r].confidenceIntervals];
            y[d].low = v.target.value;
            const E = [...t.series];
            E[r] = { ...E[r], confidenceIntervals: y }, n({
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
          value: t.series[r].confidenceIntervals[d].high ? t.series[r].confidenceIntervals[d].high : "Select",
          label: "High Confidence Interval",
          onChange: (v) => {
            const y = [...t.series[r].confidenceIntervals];
            y[d].high = v.target.value;
            const E = [...t.series];
            E[r] = { ...E[r], confidenceIntervals: y }, n({
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
        onClick: (u) => {
          u.preventDefault();
          let d = null;
          t.series[r].confidenceIntervals ? d = [...t.series[r].confidenceIntervals] : d = [];
          const f = [...t.series];
          f[r] = { ...f[r], confidenceIntervals: [...d, { high: "", low: "" }] }, n({
            ...t,
            series: f
          });
        }
      },
      "Add Confidence Interval Group"
    )));
}, sw = (e) => {
  const { series: t, index: n } = e, { config: a, updateConfig: r } = ue.useContext(Ct);
  if (!["Bar", "Line", "Area Chart", "Combo", "Deviation", "Paired", "Scatter", "dashed-sm", "dashed-md", "dashed-lg"].includes(t.type))
    return;
  let s = (u, d) => {
    let f = [...a.series], g = { ...a.runtime.seriesLabels };
    f[u].name = d, g[f[u].dataKey] = f[u].name ? f[u].name : f[u].dataKey;
    let v = {
      ...a,
      series: f,
      runtime: {
        ...a.runtime,
        seriesLabels: g
      }
    };
    r(v);
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", { htmlFor: "series-name" }, "Series Name"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      key: `series-name-${n}`,
      value: t.name ? t.name : "",
      onChange: (u) => {
        s(n, u.target.value);
      }
    }
  ));
}, uw = (e) => {
  const { series: t, index: n } = e, { config: a, updateConfig: r } = ue.useContext(Ct);
  if (["Paired Bar", "Scatter Plot", "Deviation Bar"].includes(a.visualizationType))
    return;
  const o = (s) => {
    let u = [...a.series];
    u[s].tooltip && u[s].tooltip, u[s].tooltip = !u[s].tooltip, r({
      ...a,
      series: u
    });
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: "input-group" }, /* @__PURE__ */ i.createElement("label", { htmlFor: `series-tooltip--${n}` }, "Show In Tooltip"), /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox--small", onClick: (s) => o(n) }, /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, t.tooltip && /* @__PURE__ */ i.createElement(km, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ i.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: `series-tooltip--${n}`, checked: t.tooltip ? t.tooltip : !1, readOnly: !0 }))));
}, cw = (e) => {
  const { config: t, updateConfig: n } = ue.useContext(Ct), { series: a, index: r } = e, o = (u) => {
    let d = [...t.series], f = -1;
    for (let g = 0; g < d.length; g++)
      if (d[g].dataKey === u) {
        f = g;
        break;
      }
    if (f !== -1) {
      d.splice(f, 1);
      let g = { ...t, series: d };
      d.length === 0 && delete g.series, n(g);
    }
    t.visualizationType === "Paired Bar" && n({
      ...t,
      series: []
    });
  }, s = (u, d, f) => {
    u.preventDefault(), o(d.dataKey);
  };
  return t.series && t.series.length > 1 && /* @__PURE__ */ i.createElement("button", { className: "series-list__remove", onClick: (u) => s(u, a) }, "Remove");
}, fy = (e) => {
  const { config: t } = ue.useContext(Ct), { series: n, getItemStyle: a, sortableItemStyles: r, chartsWithOptions: o, index: s } = e;
  return /* @__PURE__ */ i.createElement(ym, { key: n.dataKey, draggableId: `draggableFilter-${n.dataKey}`, index: s }, (u, d) => /* @__PURE__ */ i.createElement("div", { key: s, className: d.isDragging ? "currently-dragging" : "", style: a(d.isDragging, u.draggableProps.style, r), ref: u.innerRef, ...u.draggableProps, ...u.dragHandleProps }, /* @__PURE__ */ i.createElement(Fi, { allowZeroExpanded: !0 }, /* @__PURE__ */ i.createElement(Ln, { className: "series-item series-item--chart" }, /* @__PURE__ */ i.createElement(On, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(_n, { className: o.includes(t.visualizationType) ? "accordion__button" : "accordion__button hide-arrow" }, /* @__PURE__ */ i.createElement(Tt, { display: "move", size: 15, style: { cursor: "default" } }), n.dataKey, /* @__PURE__ */ i.createElement(da.Button.Remove, { series: n, index: s }))), o.includes(t.visualizationType) && /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(da.Input.Name, { series: n, index: s }), /* @__PURE__ */ i.createElement(da.Dropdown.SeriesType, { series: n, index: s }), /* @__PURE__ */ i.createElement(da.Dropdown.AxisPosition, { series: n, index: s }), /* @__PURE__ */ i.createElement(da.Dropdown.LineType, { series: n, index: s }), /* @__PURE__ */ i.createElement(da.Dropdown.ForecastingColor, { series: n, index: s }), /* @__PURE__ */ i.createElement(da.Dropdown.ConfidenceInterval, { series: n, index: s }), /* @__PURE__ */ i.createElement(da.Checkbox.DisplayInTooltip, { series: n, index: s }))))));
}, dw = (e) => {
  const { series: t, getItemStyle: n, sortableItemStyles: a, chartsWithOptions: r } = e;
  return t.map((o, s) => /* @__PURE__ */ i.createElement(fy, { getItemStyle: n, sortableItemStyles: a, chartsWithOptions: r, series: o, index: s, key: `series-list-${s}` }));
}, da = {
  Wrapper: ew,
  Dropdown: {
    SeriesType: nw,
    AxisPosition: iw,
    ConfidenceInterval: lw,
    LineType: tw,
    ForecastingStage: rw,
    ForecastingColumn: aw,
    ForecastingColor: ow
  },
  Input: {
    Name: sw
  },
  Checkbox: {
    DisplayInTooltip: uw
  },
  Button: {
    Remove: cw
  },
  Item: fy,
  List: dw
}, fw = ue.memo(({ config: e, updateConfig: t }) => {
  let n = (d, f, g) => {
    let v = [];
    e.regions && (v = [...e.regions]), v[g][d] = f, t({ ...e, regions: v });
  }, a = (d, f, g, v, y) => n(g, v, y), r = (d) => {
    let f = [];
    e.regions && (f = [...e.regions]), f.splice(d, 1), t({ ...e, regions: f });
  }, o = () => {
    let d = [];
    e.regions && (d = [...e.regions]), d.push({}), t({ ...e, regions: d });
  };
  const s = ["Fixed", "Previous Days"], u = ["Last Date", "Fixed"];
  return /* @__PURE__ */ i.createElement(i.Fragment, null, e.regions && e.regions.map(({ label: d, color: f, from: g, to: v, background: y, range: E = "Custom" }, w) => {
    var O;
    return /* @__PURE__ */ i.createElement("div", { className: "edit-block", key: `region-${w}` }, /* @__PURE__ */ i.createElement(
      "button",
      {
        type: "button",
        className: "remove-column",
        onClick: (T) => {
          T.preventDefault(), r(w);
        }
      },
      "Remove"
    ), /* @__PURE__ */ i.createElement(Ge, { value: d, label: "Region Label", fieldName: "label", i: w, updateField: a }), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(Ge, { value: f, label: "Text Color", fieldName: "color", updateField: (T, m, A, _) => n(A, _, w) }), /* @__PURE__ */ i.createElement(Ge, { value: y, label: "Background", fieldName: "background", updateField: (T, m, A, _) => n(A, _, w) })), /* @__PURE__ */ i.createElement(
      wt,
      {
        value: e.regions[w].fromType ?? "Fixed",
        label: "Minimum Region Type",
        initial: "Select",
        required: !0,
        onChange: (T) => {
          if (T.target.value !== "" && T.target.value !== "Select") {
            const m = [...e.regions];
            m[w].fromType = T.target.value, t({
              ...e,
              regions: m
            });
          }
          T.target.value = "";
        },
        options: s
      }
    ), (e.regions[w].fromType === "Fixed" || e.regions[w].fromType === "Previous Days" || !e.regions[w].fromType) && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
      Ge,
      {
        value: g,
        label: e.regions[w].fromType === "Fixed" || !((O = e.regions[w]) != null && O.fromType) ? "From Value" : "Previous Number of Days",
        fieldName: "from",
        updateField: (T, m, A, _) => n(A, _, w),
        tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "The date needs to be in the original format of the data. Not the displayed format of the data.")))
      }
    )), /* @__PURE__ */ i.createElement(
      wt,
      {
        value: e.regions[w].toType ?? "Fixed",
        label: "Maximum Region Type",
        initial: "Select",
        required: !0,
        onChange: (T) => {
          if (T.target.value !== "" && T.target.value !== "Select") {
            const m = [...e.regions];
            m[w].toType = T.target.value, t({
              ...e,
              regions: m
            });
          }
          T.target.value = "";
        },
        options: u
      }
    ), (e.regions[w].toType === "Fixed" || !e.regions[w].toType) && /* @__PURE__ */ i.createElement(Ge, { value: v, label: "To Value", fieldName: "to", updateField: (T, m, A, _) => n(A, _, w) }));
  }), !e.regions && /* @__PURE__ */ i.createElement("p", { style: { textAlign: "center" } }, "There are currently no regions."), /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "btn full-width",
      onClick: (d) => {
        d.preventDefault(), o();
      }
    },
    "Add Region"
  ));
}), hw = ({ name: e }) => {
  const { visSupportsRegions: t } = Rs(), { config: n, updateConfig: a } = ue.useContext(Ct);
  return t() ? /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(_n, null, e)), /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(fw, { config: n, updateConfig: a }))) : null;
}, Ph = ue.createContext(null), Rh = () => {
  const e = ue.useContext(Ph);
  if (e === null)
    throw new Error("COVE: editor panel context is null.");
  return e;
}, pw = (e) => {
  const { config: t } = ue.useContext(Ct), { updateField: n } = Rh(), { enabledChartTypes: a, visHasNumbersOnBars: r, visHasLabelOnData: o, visSupportsChartHeight: s, visSupportsSuperTitle: u, visSupportsFootnotes: d } = Rs(), { visualizationType: f, visualizationSubType: g, barStyle: v } = t, y = () => (f === "Bar" || f === "Deviation Bar") && g !== "stacked" && (t.orientation === "horizontal" || t.orientation === "vertical") ? ["flat", "rounded", "lollipop"] : ["flat", "rounded"];
  return /* @__PURE__ */ i.createElement(Ln, null, " ", /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(_n, null, "General")), /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(wt, { value: f, fieldName: "visualizationType", label: "Chart Type", updateField: n, options: a }), (f === "Bar" || f === "Combo" || f === "Area Chart") && /* @__PURE__ */ i.createElement(wt, { value: g || "Regular", fieldName: "visualizationSubType", label: "Chart Subtype", updateField: n, options: ["regular", "stacked"] }), f === "Area Chart" && g === "stacked" && /* @__PURE__ */ i.createElement(wt, { value: t.stackedAreaChartLineType || "Linear", fieldName: "stackedAreaChartLineType", label: "Stacked Area Chart Line Type", updateField: n, options: Object.keys(xc) }), f === "Bar" && /* @__PURE__ */ i.createElement(wt, { value: t.orientation || "vertical", fieldName: "orientation", label: "Orientation", updateField: n, options: ["vertical", "horizontal"] }), f === "Deviation Bar" && /* @__PURE__ */ i.createElement(wt, { label: "Orientation", options: ["horizontal"] }), (f === "Bar" || f === "Deviation Bar") && /* @__PURE__ */ i.createElement(wt, { value: t.isLollipopChart ? "lollipop" : v || "flat", fieldName: "barStyle", label: "bar style", updateField: n, options: y() }), (f === "Bar" || f === "Deviation Bar") && v === "rounded" && /* @__PURE__ */ i.createElement(wt, { value: t.tipRounding || "top", fieldName: "tipRounding", label: "tip rounding", updateField: n, options: ["top", "full"] }), (f === "Bar" || f === "Deviation Bar") && v === "rounded" && /* @__PURE__ */ i.createElement(wt, { value: t.roundingStyle || "standard", fieldName: "roundingStyle", label: "rounding style", updateField: n, options: ["standard", "shallow", "finger"] }), f === "Bar" && t.orientation === "horizontal" && /* @__PURE__ */ i.createElement(wt, { value: t.yAxis.labelPlacement || "Below Bar", section: "yAxis", fieldName: "labelPlacement", label: "Label Placement", updateField: n, options: ["Below Bar", "On Date/Category Axis"] }), r() ? /* @__PURE__ */ i.createElement(vt, { value: t.yAxis.displayNumbersOnBar, section: "yAxis", fieldName: "displayNumbersOnBar", label: t.isLollipopChart ? "Display Numbers after Bar" : "Display Numbers on Bar", updateField: n }) : o() && /* @__PURE__ */ i.createElement(vt, { value: t.labels, fieldName: "labels", label: "Display label on data", updateField: n }), f === "Pie" && /* @__PURE__ */ i.createElement(wt, { fieldName: "pieType", label: "Pie Chart Type", updateField: n, options: ["Regular", "Donut"] }), /* @__PURE__ */ i.createElement(
    Ge,
    {
      value: t.title || "Chart Title",
      fieldName: "title",
      id: "title",
      label: "Title",
      placeholder: "Chart Title",
      updateField: n,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Title is required to set the name of the download file but can be hidden using the option below.")))
    }
  ), /* @__PURE__ */ i.createElement(vt, { value: t.showTitle, fieldName: "showTitle", label: "Show Title", updateField: n }), u() && /* @__PURE__ */ i.createElement(
    Ge,
    {
      value: t.superTitle,
      updateField: n,
      fieldName: "superTitle",
      label: "Super Title",
      placeholder: "Super Title",
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Super Title")))
    }
  ), /* @__PURE__ */ i.createElement(
    Ge,
    {
      type: "textarea",
      value: t.introText,
      updateField: n,
      fieldName: "introText",
      label: "Message",
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Intro Text")))
    }
  ), /* @__PURE__ */ i.createElement(
    Ge,
    {
      type: "textarea",
      value: t.description,
      fieldName: "description",
      label: "Subtext/Citation",
      updateField: n,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), d() && /* @__PURE__ */ i.createElement(
    Ge,
    {
      type: "textarea",
      value: t.footnotes,
      updateField: n,
      fieldName: "footnotes",
      label: "Footnotes",
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Footnotes")))
    }
  ), s() && t.orientation === "vertical" && /* @__PURE__ */ i.createElement(Ge, { type: "number", value: t.heights.vertical, section: "heights", fieldName: "vertical", label: "Chart Height", updateField: n })));
}, mw = (e) => {
  const { config: t } = ue.useContext(Ct), { boxplot: n } = t;
  if (t.visualizationType !== "Box Plot")
    return;
  const { updateField: a } = Rh();
  return /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(_n, null, e.name)), /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement("h4", { style: { fontSize: "18px" } }, "Labels for 5-Number Summary"), /* @__PURE__ */ i.createElement(
    Ge,
    {
      type: "text",
      value: n.labels.maximum,
      fieldName: "maximum",
      section: "boxplot",
      subsection: "labels",
      label: "Maximum",
      updateField: a,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Highest value, excluding outliers")))
    }
  ), /* @__PURE__ */ i.createElement(
    Ge,
    {
      type: "text",
      value: n.labels.q3,
      fieldName: "q3",
      section: "boxplot",
      subsection: "labels",
      label: "Upper Quartile",
      updateField: a,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Represented by top line of box. 25% of data are higher.")))
    }
  ), /* @__PURE__ */ i.createElement(
    Ge,
    {
      type: "text",
      value: n.labels.median,
      fieldName: "median",
      section: "boxplot",
      subsection: "labels",
      label: "Median",
      updateField: a,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Middle data point. Half of data are higher value.")))
    }
  ), /* @__PURE__ */ i.createElement(
    Ge,
    {
      type: "text",
      value: n.labels.q1,
      fieldName: "q1",
      section: "boxplot",
      subsection: "labels",
      label: "Lower Quartile",
      updateField: a,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Represented by bottom line of box. 25% of data are lower.")))
    }
  ), /* @__PURE__ */ i.createElement(
    Ge,
    {
      type: "text",
      value: n.labels.minimum,
      fieldName: "minimum",
      section: "boxplot",
      subsection: "labels",
      label: "Minimum",
      updateField: a,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Lowest value, excluding outliers")))
    }
  ), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("h4", { style: { fontSize: "18px" } }, "Labels for Additional Measures"), /* @__PURE__ */ i.createElement(Ge, { type: "text", value: n.labels.iqr, fieldName: "iqr", section: "boxplot", subsection: "labels", label: "Interquartile Range", updateField: a }), /* @__PURE__ */ i.createElement(Ge, { type: "text", value: n.labels.total, fieldName: "total", section: "boxplot", subsection: "labels", label: "Total", updateField: a }), /* @__PURE__ */ i.createElement(Ge, { type: "text", value: n.labels.mean, fieldName: "mean", section: "boxplot", subsection: "labels", label: "Mean", updateField: a }), /* @__PURE__ */ i.createElement(Ge, { type: "text", value: n.labels.outliers, fieldName: "outliers", section: "boxplot", subsection: "labels", label: "Outliers", updateField: a }), /* @__PURE__ */ i.createElement(Ge, { type: "text", value: n.labels.values, fieldName: "values", section: "boxplot", subsection: "labels", label: "Values", updateField: a })));
}, hy = (e, t) => {
  let n = [], a = [], r = [];
  if (e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar") {
    const o = e.twoColor.isPaletteReversed;
    n = Object.keys(Wu).filter((s) => o ? s.endsWith("reverse") : !s.endsWith("reverse"));
  } else {
    const o = [], s = [];
    for (const u in ur) {
      const d = u.startsWith("sequential"), f = u.startsWith("qualitative"), g = u.endsWith("reverse");
      d && (!e.isPaletteReversed && !g || e.isPaletteReversed && g) && o.push(u), f && (!e.isPaletteReversed && !g || e.isPaletteReversed && g) && s.push(u);
    }
    a = o, r = s;
  }
  return ue.useEffect(() => {
    let o = "";
    e.twoColor.isPaletteReversed && !e.twoColor.palette.endsWith("reverse") && (o = e.twoColor.palette + "reverse"), !e.twoColor.isPaletteReversed && e.twoColor.palette.endsWith("reverse") && (o = e.twoColor.palette.slice(0, -7)), t({ ...e, twoColor: { ...e.twoColor, palette: o } });
  }, [e.twoColor.isPaletteReversed]), ue.useEffect(() => {
    let o = "";
    e.isPaletteReversed && !e.palette.endsWith("reverse") && (o = e.palette + "reverse"), !e.isPaletteReversed && e.palette.endsWith("reverse") && (o = e.palette.slice(0, -7)), t({ ...e, palette: o });
  }, [e.isPaletteReversed]), { twoColorPalettes: n, sequential: a, nonSequential: r };
}, gw = (e) => {
  var U;
  const { config: t, updateConfig: n, colorPalettes: a, twoColorPalette: r } = ue.useContext(Ct), { visual: o } = t, { setLollipopShape: s, updateField: u } = Rh(), { visHasBarBorders: d, visCanAnimate: f, visSupportsNonSequentialPallete: g, headerColors: v, visSupportsTooltipOpacity: y, visSupportsTooltipLines: E, visSupportsBarSpace: w, visSupportsBarThickness: O, visHasDataCutoff: T, visSupportsSequentialPallete: m, visSupportsReverseColorPalette: A } = Rs(), { twoColorPalettes: _, sequential: L, nonSequential: N } = hy(t, n), M = (j, $) => {
    if (console.log("value", $), j === "storyNodeFontColor") {
      n({
        ...t,
        sankey: {
          ...t.sankey,
          storyNodeFontColor: $
        }
      });
      return;
    } else
      n({
        ...t,
        sankey: {
          ...t.sankey,
          [j]: {
            ...t.sankey[j],
            default: $
          }
        }
      });
  };
  return /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(_n, null, "Visual")), /* @__PURE__ */ i.createElement(Mn, null, t.isLollipopChart && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("fieldset", { className: "header" }, /* @__PURE__ */ i.createElement("legend", { className: "edit-label" }, "Lollipop Shape"), /* @__PURE__ */ i.createElement(
    "div",
    {
      onChange: (j) => {
        s(j.target.value);
      }
    },
    /* @__PURE__ */ i.createElement("label", { className: "radio-label" }, /* @__PURE__ */ i.createElement("input", { type: "radio", name: "lollipopShape", value: "circle", checked: t.lollipopShape === "circle" }), "Circle"),
    /* @__PURE__ */ i.createElement("label", { className: "radio-label" }, /* @__PURE__ */ i.createElement("input", { type: "radio", name: "lollipopShape", value: "square", checked: t.lollipopShape === "square" }), "Square")
  )), /* @__PURE__ */ i.createElement(wt, { value: t.lollipopColorStyle ? t.lollipopColorStyle : "two-tone", fieldName: "lollipopColorStyle", label: "Lollipop Color Style", updateField: u, options: ["regular", "two-tone"] }), /* @__PURE__ */ i.createElement(wt, { value: t.lollipopSize ? t.lollipopSize : "small", fieldName: "lollipopSize", label: "Lollipop Size", updateField: u, options: ["small", "medium", "large"] })), t.visualizationType === "Box Plot" && /* @__PURE__ */ i.createElement("fieldset", { className: "fieldset fieldset--boxplot" }, /* @__PURE__ */ i.createElement("legend", { className: "" }, "Box Plot Settings"), /* @__PURE__ */ i.createElement(wt, { value: t.boxplot.borders, fieldName: "borders", section: "boxplot", label: "Box Plot Borders", updateField: u, options: ["true", "false"] }), /* @__PURE__ */ i.createElement(vt, { value: t.boxplot.plotOutlierValues, fieldName: "plotOutlierValues", section: "boxplot", label: "Plot Outliers", updateField: u }), /* @__PURE__ */ i.createElement(vt, { value: t.boxplot.plotNonOutlierValues, fieldName: "plotNonOutlierValues", section: "boxplot", label: "Plot non-outlier values", updateField: u })), /* @__PURE__ */ i.createElement(wt, { value: t.fontSize, fieldName: "fontSize", label: "Font Size", updateField: u, options: ["small", "medium", "large"] }), d() && /* @__PURE__ */ i.createElement(wt, { value: t.barHasBorder, fieldName: "barHasBorder", label: "Bar Borders", updateField: u, options: ["true", "false"] }), f() && /* @__PURE__ */ i.createElement(vt, { value: t.animate, fieldName: "animate", label: "Animate Visualization", updateField: u }), (((U = t.series) == null ? void 0 : U.some((j) => j.type === "Line" || j.type === "dashed-lg" || j.type === "dashed-sm" || j.type === "dashed-md")) && t.visualizationType === "Combo" || t.visualizationType === "Line") && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(wt, { value: t.lineDatapointStyle, fieldName: "lineDatapointStyle", label: "Line Datapoint Style", updateField: u, options: ["hidden", "hover", "always show"] }), /* @__PURE__ */ i.createElement(wt, { value: t.lineDatapointColor, fieldName: "lineDatapointColor", label: "Line Datapoint Color", updateField: u, options: ["Same as Line", "Lighter than Line"] })), /* @__PURE__ */ i.createElement("label", { className: "header" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Header Theme"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, v.map((j) => /* @__PURE__ */ i.createElement(
    "button",
    {
      title: j,
      key: j,
      onClick: ($) => {
        $.preventDefault(), n({ ...t, theme: j });
      },
      className: t.theme === j ? "selected " + j : j
    }
  )))), (g() || g()) && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Chart Color Palette")), A() && /* @__PURE__ */ i.createElement(_h, { fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: u, value: t.isPaletteReversed }), m() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", null, "Sequential"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, L.map((j) => {
    const $ = {
      backgroundColor: a[j][2]
    }, V = {
      backgroundColor: a[j][3]
    }, ne = {
      backgroundColor: a[j][5]
    };
    return /* @__PURE__ */ i.createElement(
      "button",
      {
        title: j,
        key: j,
        onClick: (H) => {
          H.preventDefault(), n({ ...t, palette: j });
        },
        className: t.palette === j ? "selected" : ""
      },
      /* @__PURE__ */ i.createElement("span", { style: $ }),
      /* @__PURE__ */ i.createElement("span", { style: V }),
      /* @__PURE__ */ i.createElement("span", { style: ne })
    );
  }))), g() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", null, "Non-Sequential"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, N.map((j) => {
    const $ = {
      backgroundColor: a[j][2]
    }, V = {
      backgroundColor: a[j][4]
    }, ne = {
      backgroundColor: a[j][6]
    };
    return /* @__PURE__ */ i.createElement(
      "button",
      {
        title: j,
        key: j,
        onClick: (H) => {
          H.preventDefault(), n({ ...t, palette: j });
        },
        className: t.palette === j ? "selected" : ""
      },
      /* @__PURE__ */ i.createElement("span", { style: $ }),
      /* @__PURE__ */ i.createElement("span", { style: V }),
      /* @__PURE__ */ i.createElement("span", { style: ne })
    );
  })))), t.visualizationType === "Sankey" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ i.createElement("input", { type: "color", value: t.sankey.nodeColor.default, id: "storyNodeColor", name: "storyNodeColor", onChange: (j) => M("nodeColor", j.target.value) }), /* @__PURE__ */ i.createElement("label", { htmlFor: "storyNodeColor" }, "Story Node Color")), /* @__PURE__ */ i.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ i.createElement("input", { type: "color", value: t.sankey.storyNodeFontColor || "red", id: "storyNodeFontColor", name: "storyNodeFontColor", onChange: (j) => M("storyNodeFontColor", j.target.value) }), /* @__PURE__ */ i.createElement("label", { htmlFor: "storyNodeFontColor" }, "Story Node Font Color")), /* @__PURE__ */ i.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ i.createElement("input", { type: "color", value: t.sankey.linkColor.default, id: "linkColor", name: "linkColor", onChange: (j) => M("linkColor", j.target.value) }), /* @__PURE__ */ i.createElement("label", { htmlFor: "linkColor" }, "Link Color"))), (t.visualizationType === "Paired Bar" || t.visualizationType === "Deviation Bar") && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(_h, { section: "twoColor", fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: u, value: t.twoColor.isPaletteReversed }), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, _.map((j) => {
    const $ = {
      backgroundColor: r[j][0]
    }, V = {
      backgroundColor: r[j][1]
    };
    return /* @__PURE__ */ i.createElement(
      "button",
      {
        title: j,
        key: j,
        onClick: (ne) => {
          ne.preventDefault(), n({ ...t, twoColor: { ...t.twoColor, palette: j } });
        },
        className: t.twoColor.palette === j ? "selected" : ""
      },
      /* @__PURE__ */ i.createElement("span", { className: "two-color", style: $ }),
      /* @__PURE__ */ i.createElement("span", { className: "two-color", style: V })
    );
  }))), T() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    Ge,
    {
      value: t.dataCutoff,
      type: "number",
      fieldName: "dataCutoff",
      className: "number-narrow",
      label: "Data Cutoff",
      updateField: u,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Any value below the cut-off value is included in a special "less than" category. This option supports special conditions like suppressed data.')))
    }
  )), O() && t.orientation === "horizontal" && !t.isLollipopChart && t.yAxis.labelPlacement !== "On Bar" && /* @__PURE__ */ i.createElement(Ge, { type: "number", value: t.barHeight || "25", fieldName: "barHeight", label: " Bar Thickness", updateField: u, min: 15 }), (t.visualizationType === "Bar" && t.orientation !== "horizontal" || t.visualizationType === "Combo") && /* @__PURE__ */ i.createElement(Ge, { value: t.barThickness, type: "number", fieldName: "barThickness", label: "Bar Thickness", updateField: u }), w() && /* @__PURE__ */ i.createElement(Ge, { type: "number", value: t.barSpace || "15", fieldName: "barSpace", label: "Bar Space", updateField: u, min: 0 }), (t.visualizationType === "Bar" || t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ i.createElement(vt, { value: t.topAxis.hasLine, section: "topAxis", fieldName: "hasLine", label: "Add Top Axis Line", updateField: u }), t.visualizationType === "Spark Line" && /* @__PURE__ */ i.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ i.createElement(vt, { value: o == null ? void 0 : o.border, section: "visual", fieldName: "border", label: "Show Border", updateField: u }), /* @__PURE__ */ i.createElement(vt, { value: o == null ? void 0 : o.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: u }), /* @__PURE__ */ i.createElement(vt, { value: o == null ? void 0 : o.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: u }), /* @__PURE__ */ i.createElement(vt, { value: o == null ? void 0 : o.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: u }), /* @__PURE__ */ i.createElement(vt, { value: o == null ? void 0 : o.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: u })), (t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ i.createElement(vt, { value: t.showLineSeriesLabels, fieldName: "showLineSeriesLabels", label: "Append Series Name to End of Line Charts", updateField: u }), (t.visualizationType === "Line" || t.visualizationType === "Combo") && t.showLineSeriesLabels && /* @__PURE__ */ i.createElement(vt, { value: t.colorMatchLineSeriesLabels, fieldName: "colorMatchLineSeriesLabels", label: "Match Series Color to Name at End of Line Charts", updateField: u }), E() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(vt, { value: o.verticalHoverLine, fieldName: "verticalHoverLine", section: "visual", label: "Vertical Hover Line", updateField: u }), /* @__PURE__ */ i.createElement(vt, { value: o.horizontalHoverLine, fieldName: "horizontalHoverLine", section: "visual", label: "Horizontal Hover Line", updateField: u })), y() && /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Tooltip Opacity"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "number",
      value: t.tooltips.opacity ? t.tooltips.opacity : 100,
      onChange: (j) => n({
        ...t,
        tooltips: {
          ...t.tooltips,
          opacity: j.target.value
        }
      })
    }
  )), t.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(vt, { value: t.tooltips.singleSeries, fieldName: "singleSeries", section: "tooltips", label: "SHOW HOVER FOR SINGLE DATA SERIES", updateField: u }), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "No Data Message"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: t.chartMessage.noData ? t.chartMessage.noData : "",
      onChange: (j) => n({
        ...t,
        chartMessage: {
          ...t.chartMessage,
          noData: j.target.value
        }
      })
    }
  ))));
}, yw = () => {
  var u, d, f;
  const { config: e, updateConfig: t } = ue.useContext(Ct), n = (u = e.data) == null ? void 0 : u[0], { updateField: a } = ue.useContext(Ph), r = (g, v, y) => {
    let E = [];
    n != null && n.storyNodeText && (E = [...n == null ? void 0 : n.storyNodeText]), E[y][g] = v, console.log("story nodes", E[y]), t({
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
  }, s = (g) => {
    const v = n;
    v.storyNodeText.splice(g, 1), t({ ...e, sankey: { ...e.sankey, data: { ...v } } });
  };
  return /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(_n, null, "Sankey Settings")), /* @__PURE__ */ i.createElement(Mn, null, (n == null ? void 0 : n.storyNodeText) && (n == null ? void 0 : n.storyNodeText.map(({ StoryNode: g, segmentTextBefore: v, segmentTextAfter: y }, E) => /* @__PURE__ */ i.createElement("div", { key: E, style: { border: "1px solid black", margin: "15px auto", padding: "15px", borderRadius: "10px" } }, /* @__PURE__ */ i.createElement("label", null, "Story Node Text", /* @__PURE__ */ i.createElement("input", { type: "text", value: g, fieldName: "StoryNode", label: "StoryNode", onChange: (w) => r("StoryNode", w.target.value, E) })), /* @__PURE__ */ i.createElement("label", null, "Story Text Before", /* @__PURE__ */ i.createElement("input", { type: "text", value: v, fieldName: "segmentTextBefore", label: "Segment Text Before", onChange: (w) => r("segmentTextBefore", w.target.value, E) })), /* @__PURE__ */ i.createElement("label", null, "Story Text After", /* @__PURE__ */ i.createElement("input", { type: "text", value: y, fieldName: "segmentTextAfter", label: "Segment Text After", onChange: (w) => r("segmentTextAfter", w.target.value, E) })), /* @__PURE__ */ i.createElement(Fy, { onClick: (w) => s(E), className: "btn", style: { background: "tomato" } }, "Remove Story Node")))), `Total Story Nodes: ${(d = n == null ? void 0 : n.storyNodeText) == null ? void 0 : d.length}`, ((f = n == null ? void 0 : n.storyNodeText) == null ? void 0 : f.length) < 3 && /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "btn full-width",
      onClick: (g) => {
        g.preventDefault(), o();
      }
    },
    "Add StoryNode"
  ), /* @__PURE__ */ i.createElement(vt, { value: e.enableTooltips, fieldName: "enableTooltips", label: "Enable Tooltips", updateField: a })));
}, Fa = {
  ForestPlot: Jk,
  Series: da,
  Regions: hw,
  General: pw,
  BoxPlot: mw,
  Visual: gw,
  Sankey: yw
};
ue.memo(({ config: e, updateConfig: t, data: n }) => {
  const a = () => {
    const d = /* @__PURE__ */ new Set();
    return n.forEach((f) => {
      Object.keys(f).forEach((g) => {
        d.add(g);
      });
    }), [...d];
  }, r = () => ["star"];
  let o = (d) => {
    let f = [];
    e.suppressedData && (f = [...e.suppressedData]), f.splice(d, 1), t({ ...e, suppressedData: f });
  }, s = () => {
    let d = e.suppressedData ? [...e.suppressedData] : [];
    d.push({ label: "", column: "", value: "", icon: "" }), t({ ...e, suppressedData: d });
  }, u = (d, f, g) => {
    let v = [];
    e.suppressedData && (v = [...e.suppressedData]), v[g][d] = f, t({ ...e, suppressedData: v });
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, e.suppressedData && e.suppressedData.map(({ label: d, column: f, value: g, icon: v }, y) => /* @__PURE__ */ i.createElement("div", { key: `suppressed-${y}`, className: "edit-block" }, /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: (E) => {
        E.preventDefault(), o(y);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement(wt, { value: f, initial: "Select", fieldName: "column", label: "Column", updateField: (E, w, O, T) => u(O, T, y), options: a() }), /* @__PURE__ */ i.createElement(Ge, { value: g, fieldName: "value", label: "Value", updateField: (E, w, O, T) => u(O, T, y) }), /* @__PURE__ */ i.createElement(wt, { value: v, initial: "Select", fieldName: "icon", label: "Icon", updateField: (E, w, O, T) => u(O, T, y), options: r() }), /* @__PURE__ */ i.createElement(Ge, { value: d, fieldName: "label", label: "Label", placeholder: "suppressed", updateField: (E, w, O, T) => u(O, T, y) }))), /* @__PURE__ */ i.createElement("button", { type: "button", onClick: s, className: "btn full-width" }, "Add Suppression Class"));
});
const vw = ue.memo(({ config: e, updateConfig: t, data: n }) => {
  const a = () => {
    const f = /* @__PURE__ */ new Set();
    return n.forEach((g) => {
      Object.keys(g).forEach((v) => {
        f.add(v);
      });
    }), [...f];
  }, r = () => e.visualizationType === "Line" || e.visualizationType === "Combo" ? ["effect"] : ["suppression"], o = () => {
    if (e.visualizationType === "Line" || e.visualizationType === "Combo")
      return ["Dashed Small", "Dashed Medium", "Dashed Large", "Open Circles"];
    if (e.visualizationType === "Bar")
      return ["star"];
  };
  let s = (f) => {
    let g = [];
    e.preliminaryData && (g = [...e.preliminaryData]), g.splice(f, 1), t({ ...e, preliminaryData: g });
  }, u = () => {
    let f = e.preliminaryData ? [...e.preliminaryData] : [];
    f.push({ type: "", label: "", column: "", value: "", style: "" }), t({ ...e, preliminaryData: f });
  }, d = (f, g, v) => {
    let y = [];
    e.preliminaryData && (y = [...e.preliminaryData]), y[v][f] = g, t({ ...e, preliminaryData: y });
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, e.preliminaryData && e.preliminaryData.map(({ seriesKey: f, type: g, label: v, column: y, value: E, style: w }, O) => {
    var T;
    return /* @__PURE__ */ i.createElement("div", { key: `preliminaryData-${O}`, className: "edit-block" }, /* @__PURE__ */ i.createElement(
      "button",
      {
        type: "button",
        className: "remove-column",
        onClick: (m) => {
          m.preventDefault(), s(O);
        }
      },
      "Remove"
    ), /* @__PURE__ */ i.createElement(wt, { value: g, initial: "Select", fieldName: "type", label: "Type", updateField: (m, A, _, L) => d(_, L, O), options: r() }), /* @__PURE__ */ i.createElement(wt, { value: f, initial: "Select", fieldName: "seriesKey", label: "ASSOCIATE TO SERIES", updateField: (m, A, _, L) => d(_, L, O), options: (T = e.runtime) == null ? void 0 : T.seriesKeys }), /* @__PURE__ */ i.createElement(wt, { value: y, initial: "Select", fieldName: "column", label: "COLUMN WITH CONFIGURATION VALUE", updateField: (m, A, _, L) => d(_, L, O), options: a() }), /* @__PURE__ */ i.createElement(Ge, { value: E, fieldName: "value", label: "VALUE TO TRIGGER", updateField: (m, A, _, L) => d(_, L, O) }), /* @__PURE__ */ i.createElement(wt, { value: w, initial: "Select", fieldName: "style", label: "Style", updateField: (m, A, _, L) => d(_, L, O), options: o() }), /* @__PURE__ */ i.createElement(Ge, { value: v, fieldName: "label", label: "Label", placeholder: "", updateField: (m, A, _, L) => d(_, L, O) }));
  }), /* @__PURE__ */ i.createElement("button", { type: "button", onClick: u, className: "btn full-width" }, e.visualizationType === "Line" ? "Add Special Line" : e.visualizationType === "Bar" ? " Add Special Bar" : "Add Special Line/Bar"));
}), xw = () => {
  var dr, fr, x, P, B, Y, Se, ye, Pe, We, it, mt, ut, Nt, Dn, An, Pn, Vn;
  const {
    config: e,
    updateConfig: t,
    tableData: n,
    transformedData: a,
    loading: r,
    colorScale: o,
    colorPalettes: s,
    twoColorPalette: u,
    unfilteredData: d,
    excludedData: f,
    isDashboard: g,
    setParentConfig: v,
    missingRequiredSections: y,
    isDebug: E,
    setFilteredData: w,
    lineOptions: O,
    rawData: T,
    highlight: m,
    highlightReset: A
  } = ue.useContext(Ct), { minValue: _, maxValue: L, existPositiveValue: N, isAllLine: M } = Dc(e, d);
  hy(e, t);
  const U = { data: a, config: e }, { leftMax: j, rightMax: $ } = ly(U), {
    headerColors: V,
    visSupportsTooltipLines: ne,
    visSupportsNonSequentialPallete: H,
    visSupportsSequentialPallete: oe,
    visSupportsReverseColorPalette: fe,
    visHasLabelOnData: I,
    visHasNumbersOnBars: Q,
    visHasAnchors: q,
    visHasBarBorders: se,
    visHasDataCutoff: ae,
    visHasSelectableLegendValues: J,
    visCanAnimate: G,
    visHasLegend: he,
    visHasBrushChart: ee,
    visSupportsDateCategoryAxis: ge,
    visSupportsValueAxisMin: be,
    visSupportsValueAxisMax: _e,
    visSupportsDateCategoryAxisLabel: Ve,
    visSupportsDateCategoryAxisLine: Qe,
    visSupportsDateCategoryAxisTicks: Ae,
    visSupportsDateCategoryTickRotation: ve,
    visSupportsDateCategoryNumTicks: Ee,
    visSupportsDateCategoryAxisPadding: le,
    visSupportsRegions: Be,
    visSupportsFilters: Ne,
    visSupportsValueAxisGridLines: qe,
    visSupportsValueAxisLine: Ke,
    visSupportsValueAxisTicks: nt,
    visSupportsValueAxisLabels: at,
    visSupportsBarSpace: lt,
    visSupportsBarThickness: ot,
    visSupportsFootnotes: Ze,
    visSupportsSuperTitle: Me,
    visSupportsDataCutoff: De,
    visSupportsChartHeight: ht,
    visSupportsLeftValueAxis: Ue,
    visSupportsTooltipOpacity: dt,
    visSupportsRankByValue: pt,
    visSupportsResponsiveTicks: gt,
    visSupportsDateCategoryHeight: _t,
    visHasDataSuppression: It
  } = Rs(), { handleFilterOrder: cn, filterOrderOptions: qt, filterStyleOptions: rn } = Ey({ config: e, setConfig: t, filteredData: a, setFilteredData: w });
  ue.useEffect(() => {
    let re = [];
    e.series && (re = e.series.map((te) => ({
      ...te,
      type: e.visualizationType === "Combo" ? "Bar" : e.visualizationType ? e.visualizationType : "Bar",
      axis: "Left"
    }))), t({
      ...e,
      series: re
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
  const { hasRightAxis: Et } = ph({ config: e, yMax: e.yAxis.size, data: e.data, updateConfig: t }), kt = (re, te) => ({
    ...te
  }), vn = {
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
  }, kn = (re) => {
    re.orientation === "horizontal" && (re.labels = !1), re.table.show === void 0 && (re.table.show = !g), re.visualizationType === "Combo" && (re.orientation = "vertical"), re.xAxis.sortDates && !re.xAxis.padding && (re.xAxis.padding = 6);
  }, Fe = (re, te, ce, Re) => {
    if (E && console.log("#COVE: CHART: EditorPanel: section, subsection, fieldName, newValue", re, te, ce, Re), re === "boxplot" && te === "legend") {
      t({
        ...e,
        [re]: {
          ...e[re],
          [te]: {
            ...e.boxplot[te],
            [ce]: Re
          }
        }
      });
      return;
    }
    if (re === "boxplot" && te === "labels") {
      t({
        ...e,
        [re]: {
          ...e[re],
          [te]: {
            ...e.boxplot[te],
            [ce]: Re
          }
        }
      });
      return;
    }
    if (re === "columns" && te !== "" && ce !== "") {
      t({
        ...e,
        [re]: {
          ...e[re],
          [te]: {
            ...e[re][te],
            [ce]: Re
          }
        }
      });
      return;
    }
    if (re === null && te === null) {
      let Pr = { ...e, [ce]: Re };
      kn(Pr), t(Pr);
      return;
    }
    const Rt = Array.isArray(e[re]);
    let ln = Rt ? [...e[re], Re] : { ...e[re], [ce]: Re };
    te !== null && (Rt ? (ln = [...e[re]], ln[te] = { ...ln[te], [ce]: Re }) : typeof Re == "string" ? ln[te] = Re : ln = { ...e[re], [te]: { ...e[re][te], [ce]: Re } });
    let Un = { ...e, [re]: ln };
    kn(Un), t(Un);
  }, [Gt, Ft] = ue.useState(!0);
  if (r)
    return null;
  ue.useEffect(() => {
    var re;
    (re = e.general) != null && re.boxplot && (e.general.boxplot.firstQuartilePercentage || t({
      ...e,
      boxplot: {
        ...e.boxplot,
        firstQuartilePercentage: 25
      }
    }));
  }, [e]);
  const dn = (re) => {
    t({
      ...e,
      lollipopShape: re
    });
  }, Je = (re) => {
    let te = [...e.filters];
    te.splice(re, 1), t({ ...e, filters: te });
  }, fn = (re, te, ce) => {
    let Re = [...e.filters];
    Re[te][re] = ce, t({ ...e, filters: Re });
  }, hn = () => {
    let re = e.filters ? [...e.filters] : [];
    re.push({ values: [] }), t({ ...e, filters: re });
  }, Tn = (re) => {
    let te = e.series ? [...e.series] : [], ce = Array.from(new Set(a.map((Rt) => Rt[re]))), Re = [];
    ce.forEach((Rt) => {
      Re.push({ key: Rt });
    }), e.visualizationType === "Forecasting" ? te.push({ dataKey: re, type: e.visualizationType, stages: Re, stageColumn: re, axis: "Left", tooltip: !0 }) : te.push({ dataKey: re, type: e.visualizationType, axis: "Left", tooltip: !0 }), t({ ...e, series: te });
  }, Sn = (re) => {
    const te = e.series[0].dataKey, ce = a.sort((Rt, ln) => Rt[te] - ln[te]), Re = re === "asc" ? ce : ce.reverse();
    t({ ...e }, Re);
  }, un = (re) => {
    let te = [...e.exclusions.keys];
    te.push(re);
    let ce = { ...e.exclusions, keys: te };
    t({ ...e, exclusions: ce });
  }, Mt = (re) => {
    let te = -1, ce = [...e.exclusions.keys];
    for (let Re = 0; Re < ce.length; Re++)
      if (ce[Re] === re) {
        te = Re;
        break;
      }
    if (te !== -1) {
      ce.splice(te, 1);
      let Re = { ...e.exclusions, keys: ce }, Rt = { ...e, exclusions: Re };
      ce.length === 0 && delete Rt.exclusions.keys, t(Rt);
    }
  }, Ht = () => {
    let re = {};
    return d.forEach((te) => {
      Object.keys(te).forEach((ce) => re[ce] = !0);
    }), Object.keys(re);
  }, K = (re = !0) => {
    let te = {};
    if (d.forEach((ce) => {
      Object.keys(ce).forEach((Re) => te[Re] = !0);
    }), re) {
      const { lower: ce, upper: Re } = e.confidenceKeys || {};
      Object.keys(te).forEach((Rt) => {
        (e.series && e.series.filter((ln) => ln.dataKey === Rt).length > 0 || e.confidenceKeys && Object.keys(e.confidenceKeys).includes(Rt) && (ce && Re || ce || Re) && Rt !== ce && Rt !== Re) && delete te[Rt];
      });
    }
    return Object.keys(te);
  }, He = (re) => {
    if (!re)
      return [];
    const te = /* @__PURE__ */ new Set();
    for (let ce = 0; ce < re.length; ce++)
      for (const [Re] of Object.entries(re[ce]))
        te.add(Re);
    return Array.from(te);
  }, et = (re, te = !1) => {
    let ce = [];
    return f.forEach((Re) => {
      ce.push(Re[re]);
    }), te ? [...new Set(ce)] : ce;
  }, Ie = () => {
    Ft(!Gt);
  }, bt = () => /* @__PURE__ */ i.createElement("section", { className: "waiting" }, /* @__PURE__ */ i.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ i.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ i.createElement("p", null, e.runtime.editorErrorMessage))), ft = () => {
    const re = (te) => {
      te.preventDefault();
      let ce = { ...e };
      delete ce.newViz, t(ce);
    };
    return /* @__PURE__ */ i.createElement("section", { className: "waiting" }, /* @__PURE__ */ i.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ i.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ i.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ i.createElement("button", { className: "btn", style: { margin: "1em auto" }, disabled: y(), onClick: re }, "I'm Done")));
  }, we = () => {
    let re = JSON.parse(JSON.stringify(e));
    return y() === !1 && delete re.newViz, delete re.runtime, re;
  };
  ue.useEffect(() => {
    if (v) {
      const re = we();
      v(re);
    }
  }, [e]), ue.useEffect(() => {
    const re = e.xAxis.anchors.length > 0 ? e.xAxis.anchors : [], te = e.yAxis.anchors.length > 0 ? e.yAxis.anchors : [];
    t({
      ...e,
      xAxis: {
        ...e.xAxis,
        anchors: te
      },
      yAxis: {
        ...e.yAxis,
        anchors: re
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
  const Ye = ue.useCallback(() => {
    const re = [...e.exclusions.keys];
    return /* @__PURE__ */ i.createElement("ul", { className: "series-list" }, re.map((te, ce) => /* @__PURE__ */ i.createElement("li", { key: te }, /* @__PURE__ */ i.createElement("div", { className: "series-list__name", "data-title": te }, /* @__PURE__ */ i.createElement("div", { className: "series-list__name--text" }, te)), /* @__PURE__ */ i.createElement("button", { className: "series-list__remove", onClick: () => Mt(te) }, "×"))));
  }, [e]), $e = (re, te) => {
    let ce = e.series, [Re] = ce.splice(re, 1);
    ce.splice(te, 0, Re), t({ ...e, series: ce });
  };
  e.isLollipopChart && ((dr = e == null ? void 0 : e.series) == null ? void 0 : dr.length) > 1 && (e.runtime.editorErrorMessage = "Lollipop charts must use only one data series"), e.visualizationType === "Paired Bar" && ((fr = e == null ? void 0 : e.series) == null ? void 0 : fr.length) !== 2 && (e.runtime.editorErrorMessage = "Paired Bar charts must use exactly two data series"), e.visualizationType === "Deviation Bar" && ((x = e == null ? void 0 : e.series) == null ? void 0 : x.length) !== 1 && (e.runtime.editorErrorMessage = "Deviation Bar charts must use exactly one data series"), e.isLollipopChart && ((P = e == null ? void 0 : e.series) == null ? void 0 : P.length) === 0 && (e.runtime.editorErrorMessage = "Add a data series");
  const Xe = e.orientation === "horizontal" ? "xAxis" : "yAxis", [Lt, Wt] = ue.useState({ maxMsg: "", minMsg: "", rightMaxMessage: "", minMsgRight: "" }), Ut = () => {
    const re = e[Xe].max, te = e[Xe].rightMax;
    let ce = "", Re = "";
    if (e.visualizationType !== "Combo")
      switch (!0) {
        case (re && parseFloat(re) < parseFloat(L) && N):
          ce = "Max value must be more than " + L;
          break;
        case (re && parseFloat(re) < 0 && !N):
          ce = "Value must be more than or equal to 0";
          break;
        default:
          ce = "";
      }
    if (e.visualizationType === "Combo")
      switch (!0) {
        case (re && parseFloat(re) < j):
          ce = "Max value must be more than " + j;
          break;
        case (te && parseFloat(te) < $):
          Re = "Max value must be more than " + $;
          break;
        case (re && parseFloat(re) < 0 && !N):
          ce = "Value must be more than or equal to 0";
          break;
        default:
          ce = "";
      }
    Wt((Rt) => ({ ...Rt, maxMsg: ce, rightMaxMessage: Re }));
  }, Kt = () => {
    const re = parseFloat(e[Xe].min);
    let te = Number(_), ce = "";
    switch (!0) {
      case (e.useLogScale && ["Line", "Combo", "Bar"].includes(e.visualizationType) && re < 0):
        ce = "Negative numbers are not supported in logarithmic scale";
        break;
      case ((e.visualizationType === "Line" || e.visualizationType === "Spark Line") && re > te):
        ce = "Value should not exceed " + _;
        break;
      case (e.visualizationType === "Combo" && M && re > te):
        ce = "Value should not exceed " + _;
        break;
      case ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && !M) && te > 0 && re > 0):
        ce = e.useLogScale ? "Value must be equal to 0" : "Value must be less than or equal to 0";
        break;
      case (e.visualizationType === "Deviation Bar" && re >= Math.min(te, e.xAxis.target)):
        ce = "Value must be less than " + Math.min(te, e.xAxis.target);
        break;
      case (e.visualizationType !== "Deviation Bar" && re && te < 0 && re > te):
        ce = "Value should not exceed " + _;
        break;
      default:
        ce = "";
    }
    Wt((Re) => ({ ...Re, minMsg: ce }));
  };
  ue.useEffect(() => {
    Kt(), Ut();
  }, [_, L, e]);
  const Ot = ((B = e == null ? void 0 : e.dataKey) == null ? void 0 : B.includes("http://")) || ((Y = e == null ? void 0 : e.dataKey) == null ? void 0 : Y.includes("https://")), $t = () => {
    var re, te;
    if (E !== void 0 && E && !((re = e == null ? void 0 : e.xAxis) != null && re.dataKey)) {
      let ce = K(!1);
      if (ce.includes("Date"))
        return "Date";
      if (ce.includes("Race"))
        return "Race";
      if (ce.includes("Month"))
        return "Month";
    }
    return ((te = e == null ? void 0 : e.xAxis) == null ? void 0 : te.dataKey) || "";
  }, Zt = () => {
    if (E !== void 0 && E && K(!1).length > 0) {
      let re = K(!1).filter((te) => te !== $t());
      if (re.length > 0)
        return re[0];
    }
    return "";
  };
  if (E && !e.xAxis.dataKey && (e.xAxis.dataKey = $t()), E && ((Se = e == null ? void 0 : e.series) == null ? void 0 : Se.length) === 0) {
    let re = Zt();
    re !== "" && Tn(re), E && console.log("### COVE DEBUG: Chart: Setting default datacol=", re);
  }
  const an = ["Area Chart", "Combo", "Line", "Bar", "Forecasting", "Scatter Plot", "Paired Bar", "Deviation Bar"], pn = [
    /* @__PURE__ */ i.createElement("option", { value: "", key: "Select Option" }, "- Select Option -")
  ];
  if (e.data && e.series) {
    Object.keys(((ye = e.data) == null ? void 0 : ye[0]) || []).map((te) => {
      const ce = e == null ? void 0 : e.series.some((Re) => Re.dataKey === te);
      if (te !== e.xAxis.dataKey && !ce)
        return pn.push(
          /* @__PURE__ */ i.createElement("option", { value: te, key: te }, te)
        );
    });
    let re = {};
    e.data.forEach((te) => {
      Object.keys(te).forEach((ce) => {
        re[ce] = re[ce] || [];
        const Re = typeof te[ce] == "number" ? te[ce].toString() : te[ce];
        re[ce].indexOf(Re) === -1 && re[ce].push(Re);
      });
    });
  }
  if (!e.data && a) {
    if (!a[0])
      return;
    Object.keys(a[0]).map((te) => {
      const ce = a.some((Re) => Re.dataKey === te);
      if (te !== e.xAxis.dataKey && !ce)
        return pn.push(
          /* @__PURE__ */ i.createElement("option", { value: te, key: te }, te)
        );
    });
    let re = {};
    a.forEach((te) => {
      Object.keys(te).forEach((ce) => {
        re[ce] = re[ce] || [];
        const Re = typeof te[ce] == "number" ? te[ce].toString() : te[ce];
        re[ce].indexOf(Re) === -1 && re[ce].push(Re);
      });
    });
  }
  const Qt = Object.keys(e.columns).filter((re) => [e.xAxis.dataKey].includes(re) !== !0), mn = (re) => {
    const te = `additionalColumn${re}`;
    t({
      ...e,
      columns: {
        ...e.columns,
        [te]: {
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
  }, yt = (re) => {
    const te = e.columns;
    delete te[re], t({
      ...e,
      columns: te
    });
  }, ct = async (re, te, ce) => {
    switch (te) {
      case "name":
        t({
          ...e,
          columns: {
            ...e.columns,
            [re]: {
              ...e.columns[re],
              [te]: ce
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
              [te]: ce
            }
          }
        });
        break;
    }
  }, {
    highlightedBarValues: on,
    highlightedSeriesValues: xn,
    handleUpdateHighlightedBar: en,
    handleAddNewHighlightedBar: Bn,
    handleRemoveHighlightedBar: Cn,
    handleUpdateHighlightedBarColor: jt,
    handleHighlightedBarLegendLabel: Yt,
    handleUpdateHighlightedBorderWidth: jn
  } = Cc(e, t), nr = (re, te) => {
    let ce = e.columns;
    ce[re].tooltips = te, t({
      ...e,
      columns: ce
    });
  }, gr = e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1, yr = () => {
    const re = a.map((te) => te[e.legend.colorCode]);
    return gr ? re : K(!1).filter((te) => te !== e.xAxis.dataKey);
  }, cr = (re) => {
    t({ ...e, legend: { ...e.legend, seriesHighlight: re } });
  }, rr = (re, te, ce) => {
    var ln;
    const Re = { ...e[re], [te]: ce }, Rt = { ...e, [re]: Re };
    ce === "highlight" && ((ln = e.legend.seriesHighlight) != null && ln.length) && (Rt.legend.seriesHighlight.length = 0), t(Rt);
  }, Ar = {
    addNewExclusion: un,
    data: a,
    editColumn: ct,
    getColumns: K,
    getDataValueOptions: He,
    getDataValues: et,
    getItemStyle: kt,
    handleSeriesChange: $e,
    handleAddNewHighlightedBar: Bn,
    setCategoryAxis: $t,
    sortSeries: Sn,
    updateField: Fe,
    warningMsg: Lt,
    highlightedBarValues: on,
    handleHighlightedBarLegendLabel: Yt,
    handleUpdateHighlightedBar: en,
    handleRemoveHighlightedBar: Cn,
    isPaletteReversed: e.isPaletteReversed,
    highlightedSeriesValues: xn,
    handleUpdateHighlightedBorderWidth: jn,
    handleUpdateHighlightedBarColor: jt,
    setLollipopShape: dn
  };
  return /* @__PURE__ */ i.createElement(Ph.Provider, { value: Ar }, /* @__PURE__ */ i.createElement(Br, { component: "EditorPanel" }, e.newViz && /* @__PURE__ */ i.createElement(ft, null), e.newViz === void 0 && e.runtime && ((Pe = e.runtime) == null ? void 0 : Pe.editorErrorMessage) && /* @__PURE__ */ i.createElement(bt, null), /* @__PURE__ */ i.createElement("button", { className: Gt ? "editor-toggle" : "editor-toggle collapsed", title: Gt ? "Collapse Editor" : "Expand Editor", onClick: Ie }), /* @__PURE__ */ i.createElement("section", { className: `${Gt ? "editor-panel cove" : "hidden editor-panel cove"}${g ? " dashboard" : ""}` }, /* @__PURE__ */ i.createElement("div", { "aria-level": 2, role: "heading", className: "heading-2" }, "Configure Chart"), /* @__PURE__ */ i.createElement("section", { className: "form-container" }, /* @__PURE__ */ i.createElement(Fi, { allowZeroExpanded: !0 }, /* @__PURE__ */ i.createElement(Fa.General, { name: "General" }), /* @__PURE__ */ i.createElement(Fa.ForestPlot, { name: "Forest Plot Settings" }), /* @__PURE__ */ i.createElement(Fa.Sankey, { name: "Sankey" }), e.visualizationType !== "Pie" && e.visualizationType !== "Forest Plot" && e.visualizationType !== "Sankey" && /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(_n, null, "Data Series ", (!e.series || e.series.length === 0 || e.visualizationType === "Paired Bar" && e.series.length < 2) && /* @__PURE__ */ i.createElement(Hu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(Mn, null, (!e.series || e.series.length === 0) && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement("p", { className: "warning" }, "At least one series is required"), (!e.series || e.series.length === 0 || e.series.length < 2) && e.visualizationType === "Paired Bar" && /* @__PURE__ */ i.createElement("p", { className: "warning" }, "Select two data series for paired bar chart (e.g., Male and Female)."), /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    wt,
    {
      fieldName: "visualizationType",
      label: "Add Data Series",
      initial: "Select",
      onChange: (re) => {
        re.target.value !== "" && re.target.value !== "Select" && Tn(re.target.value), re.target.value = "";
      },
      options: K()
    }
  ), e.series && e.series.length !== 0 && /* @__PURE__ */ i.createElement(Fa.Series.Wrapper, { getColumns: K }, /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("legend", { className: "edit-label float-left" }, "Displaying"), /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "A data series is a set of related data points plotted in a chart and typically represented in the chart legend.")))), /* @__PURE__ */ i.createElement(Mh, { onDragEnd: ({ source: re, destination: te }) => $e(re.index, te.index) }, /* @__PURE__ */ i.createElement(Nh, { droppableId: "filter_order" }, (re) => /* @__PURE__ */ i.createElement("ul", { ...re.droppableProps, className: "series-list", ref: re.innerRef }, /* @__PURE__ */ i.createElement(Fa.Series.List, { series: e.series, getItemStyle: kt, sortableItemStyles: vn, chartsWithOptions: an }), re.placeholder))))), e.series && e.series.length <= 1 && e.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Confidence Keys"), /* @__PURE__ */ i.createElement(wt, { value: e.confidenceKeys.upper || "", section: "confidenceKeys", fieldName: "upper", label: "Upper", updateField: Fe, initial: "Select", options: K() }), /* @__PURE__ */ i.createElement(wt, { value: e.confidenceKeys.lower || "", section: "confidenceKeys", fieldName: "lower", label: "Lower", updateField: Fe, initial: "Select", options: K() })), pt() && e.series && e.series.length === 1 && /* @__PURE__ */ i.createElement(wt, { fieldName: "visualizationType", label: "Rank by Value", initial: "Select", onChange: (re) => Sn(re.target.value), options: ["asc", "desc"] }), e.visualizationType === "Line" && /* @__PURE__ */ i.createElement(vw, { config: e, updateConfig: t, data: a }))), /* @__PURE__ */ i.createElement(Fa.BoxPlot, { name: "Measures" }), Ue() && /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(_n, null, e.visualizationType === "Pie" ? "Data Format" : e.orientation === "vertical" ? "Left Value Axis" : "Value Axis", e.visualizationType === "Pie" && !e.yAxis.dataKey && /* @__PURE__ */ i.createElement(Hu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(Mn, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement(
    wt,
    {
      value: e.yAxis.dataKey || "",
      section: "yAxis",
      fieldName: "dataKey",
      label: "Data Column",
      initial: "Select",
      required: !0,
      updateField: Fe,
      options: K(!1),
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Select the source data to be visually represented.")))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ge, { value: e.yAxis.label, section: "yAxis", fieldName: "label", label: "Label ", updateField: Fe }), e.runtime.seriesKeys && e.runtime.seriesKeys.length === 1 && !["Box Plot", "Deviation Bar", "Forest Plot"].includes(e.visualizationType) && /* @__PURE__ */ i.createElement(vt, { value: e.isLegendValue, fieldName: "isLegendValue", label: "Use Legend Value in Hover", updateField: Fe }), /* @__PURE__ */ i.createElement(Ge, { value: e.yAxis.numTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "numTicks", label: "Number of ticks", className: "number-narrow", updateField: Fe }), e.visualizationType === "Paired Bar" && /* @__PURE__ */ i.createElement(Ge, { value: e.yAxis.tickRotation || 0, type: "number", min: 0, section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: Fe }), /* @__PURE__ */ i.createElement(
    Ge,
    {
      value: e.yAxis.size,
      type: "number",
      section: "yAxis",
      fieldName: "size",
      label: e.orientation === "horizontal" ? "Size (Height)" : "Size (Width)",
      className: "number-narrow",
      updateField: Fe,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, `Increase the size if elements in the ${e.orientation} axis are being crowded or hidden behind other elements.  Decrease if less space is required for the value axis.`)))
    }
  ), e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(vt, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: Fe }), (e.orientation === "vertical" || !e.isResponsiveTicks) && /* @__PURE__ */ i.createElement(Ge, { value: e.yAxis.tickRotation, type: "number", min: 0, section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: Fe }), e.isResponsiveTicks && e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(
    Ge,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: Fe,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" && /* @__PURE__ */ i.createElement(Ge, { value: e.xAxis.labelOffset, section: "xAxis", fieldName: "labelOffset", label: "Label offset", type: "number", className: "number-narrow", updateField: Fe }), qe() && /* @__PURE__ */ i.createElement(vt, { value: e.yAxis.gridLines, section: "yAxis", fieldName: "gridLines", label: "Show Gridlines", updateField: Fe }), /* @__PURE__ */ i.createElement(vt, { value: e.yAxis.enablePadding, section: "yAxis", fieldName: "enablePadding", label: "Add Padding to Value Axis Scale", updateField: Fe }), e.yAxis.enablePadding && /* @__PURE__ */ i.createElement(Ge, { type: "number", section: "yAxis", fieldName: "scalePadding", label: "Padding Percentage", className: "number-narrow", updateField: Fe, value: e.yAxis.scalePadding }), e.visualizationSubType === "regular" && e.visualizationType !== "Forest Plot" && /* @__PURE__ */ i.createElement(vt, { value: e.useLogScale, fieldName: "useLogScale", label: "use logarithmic scale", updateField: Fe })), /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ i.createElement(vt, { value: e.dataFormat.commas, section: "dataFormat", fieldName: "commas", label: "Add commas", updateField: Fe }), /* @__PURE__ */ i.createElement(
    vt,
    {
      value: e.dataFormat.abbreviated,
      section: "dataFormat",
      fieldName: "abbreviated",
      label: "Abbreviate Axis Values",
      updateField: Fe,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  ), /* @__PURE__ */ i.createElement(Ge, { value: e.dataFormat.roundTo ? e.dataFormat.roundTo : 0, type: "number", section: "dataFormat", fieldName: "roundTo", label: "Round to decimal point", className: "number-narrow", updateField: Fe, min: 0 }), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(
    Ge,
    {
      value: e.dataFormat.prefix,
      section: "dataFormat",
      fieldName: "prefix",
      label: "Prefix",
      updateField: Fe,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    Ge,
    {
      value: e.dataFormat.suffix,
      section: "dataFormat",
      fieldName: "suffix",
      label: "Suffix",
      updateField: Fe,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), e.orientation === "horizontal" ? (
    // horizontal - x is vertical y is horizontal
    /* @__PURE__ */ i.createElement(i.Fragment, null, Ke() && /* @__PURE__ */ i.createElement(vt, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Fe }), at() && /* @__PURE__ */ i.createElement(vt, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Label", updateField: Fe }), nt() && /* @__PURE__ */ i.createElement(vt, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: Fe }), _e() && /* @__PURE__ */ i.createElement(Ge, { value: e.xAxis.max, section: "xAxis", fieldName: "max", label: "max value", type: "number", placeholder: "Auto", updateField: Fe }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, Lt.maxMsg), be() && /* @__PURE__ */ i.createElement(Ge, { value: e.xAxis.min, section: "xAxis", fieldName: "min", type: "number", label: "min value", placeholder: "Auto", updateField: Fe }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, Lt.minMsg), e.visualizationType === "Deviation Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ge, { value: e.xAxis.target, section: "xAxis", fieldName: "target", type: "number", label: "Deviation point", placeholder: "Auto", updateField: Fe }), /* @__PURE__ */ i.createElement(Ge, { value: e.xAxis.targetLabel || "Target", section: "xAxis", fieldName: "targetLabel", type: "text", label: "Deviation point Label", updateField: Fe }), /* @__PURE__ */ i.createElement(vt, { value: e.xAxis.showTargetLabel, section: "xAxis", fieldName: "showTargetLabel", label: "Show Deviation point label", updateField: Fe })))
  ) : e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(vt, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Fe }), /* @__PURE__ */ i.createElement(vt, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Label", updateField: Fe }), /* @__PURE__ */ i.createElement(vt, { value: e.yAxis.hideTicks, section: "yAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: Fe }), /* @__PURE__ */ i.createElement(Ge, { value: e.yAxis.max, section: "yAxis", fieldName: "max", type: "number", label: "left axis max value", placeholder: "Auto", updateField: Fe }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, Lt.maxMsg), /* @__PURE__ */ i.createElement(Ge, { value: e.yAxis.min, section: "yAxis", fieldName: "min", type: "number", label: "left axis min value", placeholder: "Auto", updateField: Fe }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, Lt.minMsg)), q() && e.orientation !== "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(Fi, { allowZeroExpanded: !0 }, (it = (We = e.yAxis) == null ? void 0 : We.anchors) == null ? void 0 : it.map((re, te) => /* @__PURE__ */ i.createElement(Ln, { className: "series-item series-item--chart", key: `yaxis-anchors-2-${te}` }, /* @__PURE__ */ i.createElement(On, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(_n, { className: "accordion__button accordion__button" }, "Anchor ", te + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (ce) => {
        ce.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re.splice(te, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[te].value ? e.yAxis.anchors[te].value : "",
      onChange: (ce) => {
        ce.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re[te].value = ce.target.value, t({
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
      value: e.yAxis.anchors[te].color ? e.yAxis.anchors[te].color : "",
      onChange: (ce) => {
        ce.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re[te].color = ce.target.value, t({
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
      value: e.yAxis.anchors[te].lineStyle || "",
      onChange: (ce) => {
        const Re = [...e.yAxis.anchors];
        Re[te].lineStyle = ce.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    },
    /* @__PURE__ */ i.createElement("option", null, "Select"),
    O.map((ce) => /* @__PURE__ */ i.createElement("option", { key: ce.key }, ce.value))
  )))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (re) => {
        re.preventDefault();
        const te = [...e.yAxis.anchors];
        te.push({}), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: te
          }
        });
      }
    },
    "Add Anchor"
  )), q() && e.orientation === "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(Fi, { allowZeroExpanded: !0 }, (ut = (mt = e.xAxis) == null ? void 0 : mt.anchors) == null ? void 0 : ut.map((re, te) => /* @__PURE__ */ i.createElement(Ln, { className: "series-item series-item--chart", key: `xaxis-anchors-${te}` }, /* @__PURE__ */ i.createElement(On, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(_n, { className: "accordion__button accordion__button" }, "Anchor ", te + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (ce) => {
        ce.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re.splice(te, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[te].value ? e.xAxis.anchors[te].value : "",
      onChange: (ce) => {
        ce.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re[te].value = ce.target.value, t({
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
      value: e.xAxis.anchors[te].color ? e.xAxis.anchors[te].color : "",
      onChange: (ce) => {
        ce.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re[te].color = ce.target.value, t({
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
      value: e.xAxis.anchors[te].lineStyle || "",
      onChange: (ce) => {
        const Re = [...e.xAxis.anchors];
        Re[te].lineStyle = ce.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    },
    /* @__PURE__ */ i.createElement("option", null, "Select"),
    O.map((ce) => /* @__PURE__ */ i.createElement("option", { key: ce.key }, ce.value))
  )))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (re) => {
        re.preventDefault();
        const te = [...e.xAxis.anchors];
        te.push({}), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: te
          }
        });
      }
    },
    "Add Anchor"
  )))), Et && /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(_n, null, "Right Value Axis")), /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(Ge, { value: e.yAxis.rightLabel, section: "yAxis", fieldName: "rightLabel", label: "Label", updateField: Fe }), /* @__PURE__ */ i.createElement(Ge, { value: e.yAxis.rightNumTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "rightNumTicks", label: "Number of ticks", className: "number-narrow", updateField: Fe }), /* @__PURE__ */ i.createElement(Ge, { value: e.yAxis.rightAxisSize, type: "number", section: "yAxis", fieldName: "rightAxisSize", label: "Size (Width)", className: "number-narrow", updateField: Fe }), /* @__PURE__ */ i.createElement(Ge, { value: e.yAxis.rightLabelOffsetSize, type: "number", section: "yAxis", fieldName: "rightLabelOffsetSize", label: "Label Offset", className: "number-narrow", updateField: Fe }), /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ i.createElement(vt, { value: e.dataFormat.rightCommas, section: "dataFormat", fieldName: "rightCommas", label: "Add commas", updateField: Fe }), /* @__PURE__ */ i.createElement(Ge, { value: e.dataFormat.rightRoundTo, type: "number", section: "dataFormat", fieldName: "rightRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: Fe, min: 0 }), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(
    Ge,
    {
      value: e.dataFormat.rightPrefix,
      section: "dataFormat",
      fieldName: "rightPrefix",
      label: "Prefix",
      updateField: Fe,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    Ge,
    {
      value: e.dataFormat.rightSuffix,
      section: "dataFormat",
      fieldName: "rightSuffix",
      label: "Suffix",
      updateField: Fe,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), /* @__PURE__ */ i.createElement(vt, { value: e.yAxis.rightHideAxis, section: "yAxis", fieldName: "rightHideAxis", label: "Hide Axis", updateField: Fe }), /* @__PURE__ */ i.createElement(vt, { value: e.yAxis.rightHideLabel, section: "yAxis", fieldName: "rightHideLabel", label: "Hide Label", updateField: Fe }), /* @__PURE__ */ i.createElement(vt, { value: e.yAxis.rightHideTicks, section: "yAxis", fieldName: "rightHideTicks", label: "Hide Ticks", updateField: Fe }), /* @__PURE__ */ i.createElement(Ge, { value: e.yAxis.max, section: "yAxis", fieldName: "rightMax", type: "number", label: "right axis max value", placeholder: "Auto", updateField: Fe }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, Lt.rightMaxMessage), /* @__PURE__ */ i.createElement(Ge, { value: e.yAxis.min, section: "yAxis", fieldName: "rightMin", type: "number", label: "right axis min value", placeholder: "Auto", updateField: Fe }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, Lt.minMsg))), ge() && /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(_n, null, e.visualizationType === "Pie" ? "Segments" : "Date/Category Axis", !e.xAxis.dataKey && /* @__PURE__ */ i.createElement(Hu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(Mn, null, e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, e.visualizationType !== "Forest Plot" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(wt, { value: e.xAxis.type, section: "xAxis", fieldName: "type", label: "Data Type", updateField: Fe, options: e.visualizationType !== "Scatter Plot" ? ["categorical", "date"] : ["categorical", "continuous", "date"] }), (e.visualizationType === "Bar" || e.visualizationType === "Line" || e.visualizationType === "Combo" || e.visualizationType === "Area Chart") && e.xAxis.type === "date" && e.orientation !== "horizontal" && /* @__PURE__ */ i.createElement(vt, { value: e.xAxis.sortDates, section: "xAxis", fieldName: "sortDates", label: "Force Date Scale (Sort Dates)", updateField: Fe }), " ", le() && /* @__PURE__ */ i.createElement(
    Ge,
    {
      value: e.xAxis.padding,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "padding",
      label: "Padding (Percent)",
      className: "number-narrow",
      updateField: Fe,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "For use with date scale. Extends the earliest and latest dates represented on the scale by the percentage specified.")))
    }
  )), /* @__PURE__ */ i.createElement(
    wt,
    {
      value: e.xAxis.dataKey || $t() || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Data Key",
      initial: "Select",
      required: !0,
      updateField: Fe,
      options: K(!1),
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
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
      updateField: Fe,
      options: K(!1),
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Select the source row or column that contains the segment labels. Depending on the data structure, it may be listed as "Key."')))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ge, { value: e.xAxis.label, section: "xAxis", fieldName: "label", label: "Label", updateField: Fe }), e.xAxis.type === "continuous" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    Ge,
    {
      value: e.dataFormat.bottomPrefix,
      section: "dataFormat",
      fieldName: "bottomPrefix",
      label: "Prefix",
      updateField: Fe,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    Ge,
    {
      value: e.dataFormat.bottomSuffix,
      section: "dataFormat",
      fieldName: "bottomSuffix",
      label: "Suffix",
      updateField: Fe,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    vt,
    {
      value: e.dataFormat.bottomAbbreviated,
      section: "dataFormat",
      fieldName: "bottomAbbreviated",
      label: "Abbreviate Axis Values",
      updateField: Fe,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  )), e.xAxis.type === "date" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("p", { style: { padding: "1.5em 0 0.5em", fontSize: ".9rem", lineHeight: "1rem" } }, "Format how charts should parse and display your dates using", " ", /* @__PURE__ */ i.createElement("a", { href: "https://github.com/d3/d3-time-format#locale_format", target: "_blank", rel: "noreferrer" }, "these guidelines"), "."), /* @__PURE__ */ i.createElement(
    Ge,
    {
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "This field specifies the pattern used to read and interpret dates in your dataset, ensuring the dates are correctly understood and processed. "))),
      value: e.xAxis.dateParseFormat,
      section: "xAxis",
      fieldName: "dateParseFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "Date Parse Format",
      updateField: Fe
    }
  ), /* @__PURE__ */ i.createElement(
    Ge,
    {
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, " Adjusts the date display format on the axis for clear, visual date representation."))),
      value: e.xAxis.dateDisplayFormat,
      section: "xAxis",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "AXIS DATE DISPLAY FORMAT",
      updateField: Fe
    }
  ), /* @__PURE__ */ i.createElement(
    Ge,
    {
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Specify a custom format for displaying dates in data table. If left empty, dates will adopt the Axis Date Display format. "))),
      value: e.table.dateDisplayFormat,
      section: "table",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "DATA TABLE DATE DISPLAY FORMAT",
      updateField: Fe
    }
  ), /* @__PURE__ */ i.createElement(
    Ge,
    {
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Specify a custom format for displaying dates on hovers. If left empty, dates will adopt the Axis Date Display format. "))),
      value: e.tooltips.dateDisplayFormat,
      section: "tooltips",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "HOVER DATE DISPLAY FORMAT",
      updateField: Fe
    }
  )), /* @__PURE__ */ i.createElement(
    vt,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: e.xAxis.type === "date" ? "Limit by start and/or end dates" : "Exclude one or more values",
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "When this option is checked, you can select source-file values for exclusion from the date/category axis. "))),
      updateField: Fe
    }
  ), e.exclusions.active && /* @__PURE__ */ i.createElement(i.Fragment, null, e.xAxis.type === "categorical" && /* @__PURE__ */ i.createElement(i.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ i.createElement(Ye, null)), /* @__PURE__ */ i.createElement(
    wt,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (re) => {
        re.target.value !== "" && re.target.value !== "Select" && un(re.target.value), re.target.value = "";
      },
      options: et(e.xAxis.dataKey, !0)
    }
  )), e.xAxis.type === "date" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ge, { type: "date", section: "exclusions", fieldName: "dateStart", label: "Start Date", updateField: Fe, value: e.exclusions.dateStart || "" }), /* @__PURE__ */ i.createElement(Ge, { type: "date", section: "exclusions", fieldName: "dateEnd", label: "End Date", updateField: Fe, value: e.exclusions.dateEnd || "" }))), Ee() && /* @__PURE__ */ i.createElement(Ge, { value: e.xAxis.numTicks, placeholder: "Auto", type: "number", min: 1, section: "xAxis", fieldName: "numTicks", label: "Number of ticks", className: "number-narrow", updateField: Fe }), _t() && /* @__PURE__ */ i.createElement(Ge, { value: e.xAxis.size, type: "number", min: 0, section: "xAxis", fieldName: "size", label: e.orientation === "horizontal" ? "Size (Width)" : "Size (Height)", className: "number-narrow", updateField: Fe }), le() && /* @__PURE__ */ i.createElement(Ge, { value: e.xAxis.padding, type: "number", min: 0, section: "xAxis", fieldName: "padding", label: "Padding (Percent)", className: "number-narrow", updateField: Fe }), (e.xAxis.type === "continuous" || e.forestPlot.type === "Logarithmic") && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(vt, { value: e.dataFormat.bottomCommas, section: "dataFormat", fieldName: "bottomCommas", label: "Add commas", updateField: Fe }), /* @__PURE__ */ i.createElement(Ge, { value: e.dataFormat.bottomRoundTo, type: "number", section: "dataFormat", fieldName: "bottomRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: Fe, min: 0 })), gt() && e.orientation === "vertical" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(vt, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: Fe }), (e.orientation === "horizontal" || !e.isResponsiveTicks) && ve() && /* @__PURE__ */ i.createElement(Ge, { value: e.xAxis.tickRotation, type: "number", min: 0, section: "xAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: Fe }), e.orientation === "vertical" && e.isResponsiveTicks && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(
    Ge,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: Fe,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" ? /* @__PURE__ */ i.createElement(i.Fragment, null, Qe() && /* @__PURE__ */ i.createElement(vt, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Fe }), Ve() && /* @__PURE__ */ i.createElement(vt, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Label", updateField: Fe })) : /* @__PURE__ */ i.createElement(i.Fragment, null, Qe() && /* @__PURE__ */ i.createElement(vt, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Fe }), Ve() && /* @__PURE__ */ i.createElement(vt, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Label", updateField: Fe }), Ae() && /* @__PURE__ */ i.createElement(vt, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: Fe })), ((Nt = e.series) == null ? void 0 : Nt.length) === 1 && e.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", { htmlFor: "barHighlight" }, "Bar Highlighting"), e.series.length === 1 && on.map((re, te) => /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("div", { className: "edit-block", key: `highlighted-bar-${te}` }, /* @__PURE__ */ i.createElement("button", { className: "remove-column", onClick: (ce) => Cn(ce, te) }, "Remove"), /* @__PURE__ */ i.createElement("p", null, "Highlighted Bar ", te + 1), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Value"), /* @__PURE__ */ i.createElement("select", { value: e.highlightedBarValues[te].value, onChange: (ce) => en(ce, te) }, /* @__PURE__ */ i.createElement("option", { value: "" }, "- Select Value -"), xn && [...new Set(xn)].sort().map((ce) => /* @__PURE__ */ i.createElement("option", { key: `special-class-value-option-${te}-${ce}` }, ce)))), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Color"), /* @__PURE__ */ i.createElement("input", { type: "text", value: e.highlightedBarValues[te].color ? e.highlightedBarValues[te].color : "", onChange: (ce) => jt(ce, te) })), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Border Width"), /* @__PURE__ */ i.createElement("input", { max: "5", min: "0", type: "number", value: e.highlightedBarValues[te].borderWidth ? e.highlightedBarValues[te].borderWidth : "", onChange: (ce) => jn(ce, te) })), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Legend Label"), /* @__PURE__ */ i.createElement("input", { type: "text", value: e.highlightedBarValues[te].legendLabel ? e.highlightedBarValues[te].legendLabel : "", onChange: (ce) => Yt(ce, te) }))))), /* @__PURE__ */ i.createElement("button", { className: "btn full-width", onClick: (re) => Bn(re) }, "Add Highlighted Bar"))), e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    vt,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: "Exclude one or more values",
      updateField: Fe,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "When this option is checked, you can select values for exclusion from the pie segments.")))
    }
  ), e.exclusions.active && /* @__PURE__ */ i.createElement(i.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ i.createElement(Ye, null)), /* @__PURE__ */ i.createElement(
    wt,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (re) => {
        re.target.value !== "" && re.target.value !== "Select" && un(re.target.value), re.target.value = "";
      },
      options: et(e.xAxis.dataKey, !0)
    }
  ))), q() && e.orientation !== "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(Fi, { allowZeroExpanded: !0 }, (An = (Dn = e.xAxis) == null ? void 0 : Dn.anchors) == null ? void 0 : An.map((re, te) => /* @__PURE__ */ i.createElement(Ln, { className: "series-item series-item--chart", key: `xaxis-anchors-2-${te}` }, /* @__PURE__ */ i.createElement(On, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(_n, { className: "accordion__button accordion__button" }, "Anchor ", te + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (ce) => {
        ce.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re.splice(te, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[te].value ? e.xAxis.anchors[te].value : "",
      onChange: (ce) => {
        ce.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re[te].value = ce.target.value, t({
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
      value: e.xAxis.anchors[te].color ? e.xAxis.anchors[te].color : "",
      onChange: (ce) => {
        ce.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re[te].color = ce.target.value, t({
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
      value: e.xAxis.anchors[te].lineStyle || "",
      onChange: (ce) => {
        const Re = [...e.xAxis.anchors];
        Re[te].lineStyle = ce.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    },
    /* @__PURE__ */ i.createElement("option", null, "Select"),
    O.map((ce) => /* @__PURE__ */ i.createElement("option", { key: ce.key }, ce.value))
  )))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (re) => {
        re.preventDefault();
        const te = [...e.xAxis.anchors];
        te.push({}), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: te
          }
        });
      }
    },
    "Add Anchor"
  )), q() && e.orientation === "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(Fi, { allowZeroExpanded: !0 }, (Vn = (Pn = e.yAxis) == null ? void 0 : Pn.anchors) == null ? void 0 : Vn.map((re, te) => /* @__PURE__ */ i.createElement(Ln, { className: "series-item series-item--chart", key: `accordion-yaxis-anchors-${te}` }, /* @__PURE__ */ i.createElement(On, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(_n, { className: "accordion__button accordion__button" }, "Anchor ", te + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (ce) => {
        ce.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re.splice(te, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[te].value ? e.yAxis.anchors[te].value : "",
      onChange: (ce) => {
        ce.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re[te].value = ce.target.value, t({
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
      value: e.yAxis.anchors[te].color ? e.yAxis.anchors[te].color : "",
      onChange: (ce) => {
        ce.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re[te].color = ce.target.value, t({
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
      value: e.yAxis.anchors[te].lineStyle || "",
      onChange: (ce) => {
        const Re = [...e.yAxis.anchors];
        Re[te].lineStyle = ce.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    },
    /* @__PURE__ */ i.createElement("option", null, "Select"),
    O.map((ce) => /* @__PURE__ */ i.createElement("option", { key: ce.key }, ce.value))
  )))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (re) => {
        re.preventDefault();
        const te = [...e.yAxis.anchors];
        te.push({}), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: te
          }
        });
      }
    },
    "Add Anchor"
  )))), /* @__PURE__ */ i.createElement(Fa.Regions, { name: "Regions" }), e.visualizationType !== "Box Plot" && /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(_n, null, "Columns")), /* @__PURE__ */ i.createElement(Mn, null, e.type !== "navigation" && /* @__PURE__ */ i.createElement("fieldset", { className: "primary-fieldset edit-block" }, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Additional Columns", /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "You can specify additional columns to display in tooltips and / or the supporting data table."))))), Qt.map((re) => /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: re }, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (te) => {
        te.preventDefault(), yt(re);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.columns[re] ? e.columns[re].name : K()[0],
      onChange: (te) => {
        ct(re, "name", te.target.value);
      }
    },
    K().map((te) => /* @__PURE__ */ i.createElement("option", null, te))
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Associate to Series"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.columns[re] ? e.columns[re].series : "",
      onChange: (te) => {
        ct(re, "series", te.target.value);
      }
    },
    /* @__PURE__ */ i.createElement("option", { value: "" }, "Select series"),
    e.series.map((te) => /* @__PURE__ */ i.createElement("option", null, te.dataKey))
  )), /* @__PURE__ */ i.createElement(Ge, { value: e.columns[re].label, section: "columns", subsection: re, fieldName: "label", label: "Label", updateField: Fe }), /* @__PURE__ */ i.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ i.createElement("li", { className: "three-col" }, /* @__PURE__ */ i.createElement(Ge, { value: e.columns[re].prefix, section: "columns", subsection: re, fieldName: "prefix", label: "Prefix", updateField: Fe }), /* @__PURE__ */ i.createElement(Ge, { value: e.columns[re].suffix, section: "columns", subsection: re, fieldName: "suffix", label: "Suffix", updateField: Fe }), /* @__PURE__ */ i.createElement(Ge, { type: "number", value: e.columns[re].roundToPlace, section: "columns", subsection: re, fieldName: "roundToPlace", label: "Round", updateField: Fe })), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[re].commas,
      onChange: (te) => {
        ct(re, "commas", te.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Add Commas to Numbers"))), /* @__PURE__ */ i.createElement("li", null, e.table.showVertical && /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[re].dataTable,
      onChange: (te) => {
        ct(re, "dataTable", te.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in Data Table"))), e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[re].showInViz,
      onChange: (te) => {
        ct(re, "showInViz", te.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in Visualization"))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[re].tooltips || !1,
      onChange: (te) => {
        nr(re, te.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in tooltip"))), e.visualizationType === "Forest Plot" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[re].forestPlot || !1,
      onChange: (te) => {
        ct(re, "forestPlot", te.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in Forest Plot"))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[re].forestPlotAlignRight || !1,
      onChange: (te) => {
        ct(re, "forestPlotAlignRight", te.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Align Right"))), !e.columns[re].forestPlotAlignRight && /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "text" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Forest Plot Starting Point"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "number",
      value: e.columns[re].forestPlotStartingPoint || 0,
      onChange: (te) => {
        ct(re, "forestPlotStartingPoint", te.target.value);
      }
    }
  ))))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (re) => {
        re.preventDefault(), mn(Qt.length + 1);
      }
    },
    "Add Column"
  )), e.legend.type === "category" && /* @__PURE__ */ i.createElement("fieldset", { className: "primary-fieldset edit-block" }, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Additional Category", /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "You can provide additional categories to ensure they appear in the legend"))))), e.legend.additionalCategories && e.legend.additionalCategories.map((re, te) => /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: re }, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (ce) => {
        ce.preventDefault();
        const Re = [...e.legend.additionalCategories];
        Re.splice(te, 1), Fe("legend", null, "additionalCategories", Re);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement(
    Ge,
    {
      value: re,
      label: "Category",
      section: "legend",
      subsection: null,
      fieldName: "additionalCategories",
      updateField: (ce, Re, Rt, ln) => {
        const Un = [...e.legend.additionalCategories];
        Un[te] = ln, Fe(ce, Re, Rt, Un);
      }
    }
  ))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (re) => {
        re.preventDefault();
        const te = [...e.legend.additionalCategories || []];
        te.push(""), Fe("legend", null, "additionalCategories", te);
      }
    },
    "Add Category"
  )))), he() && /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(_n, null, "Legend")), /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(vt, { value: e.legend.reverseLabelOrder, section: "legend", fieldName: "reverseLabelOrder", label: "Reverse Labels", updateField: Fe }), /* @__PURE__ */ i.createElement(
    vt,
    {
      value: !!e.legend.hide,
      section: "legend",
      fieldName: "hide",
      label: "Hide Legend",
      updateField: Fe,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "With a single-series chart, consider hiding the legend to reduce visual clutter.")))
    }
  ), e.visualizationType === "Line" && /* @__PURE__ */ i.createElement(vt, { value: e.legend.lineMode, section: "legend", fieldName: "lineMode", label: "Show Lined Style Legend", updateField: Fe }), e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1 && /* @__PURE__ */ i.createElement(wt, { value: e.legend.colorCode, section: "legend", fieldName: "colorCode", label: "Color code by category", initial: "Select", updateField: Fe, options: He(a) }), /* @__PURE__ */ i.createElement(wt, { value: e.legend.behavior, section: "legend", fieldName: "behavior", label: "Legend Behavior (When clicked)", updateField: (...[re, , te, ce]) => rr(re, te, ce), options: ["highlight", "isolate"] }), e.legend.behavior === "highlight" && e.tooltips.singleSeries && /* @__PURE__ */ i.createElement(vt, { value: e.legend.highlightOnHover, section: "legend", fieldName: "highlightOnHover", label: "HIGHLIGHT DATA SERIES ON HOVER", updateField: Fe }), J && e.legend.behavior === "isolate" && !gr && /* @__PURE__ */ i.createElement("fieldset", { className: "primary-fieldset edit-block", key: "additional-highlight-values" }, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Isolate Data Series", /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "You can choose data series that are shown on load. Others will be added when the user clicks on them in the legend."))))), e.legend.seriesHighlight && e.legend.seriesHighlight.map((re, te) => /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: `${re}-${te}` }, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (ce) => {
        ce.preventDefault();
        const Re = [...e.legend.seriesHighlight];
        Re.splice(te, 1), Fe("legend", null, "seriesHighlight", Re), Re.length || A();
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement(
    wt,
    {
      value: e.legend.seriesHighlight[te],
      fieldName: "seriesHighlight",
      label: "Isolate Value",
      onChange: (ce) => {
        const Re = [...e.legend.seriesHighlight];
        Re.includes(ce.target.value) || (Re[te] = ce.target.value, cr([...Re]));
      },
      options: yr()
    }
  ))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (re) => {
        re.preventDefault();
        const te = yr(), ce = [...e.legend.seriesHighlight];
        if (ce.length < te.length) {
          const [Rt] = te.filter((ln) => !ce.includes(ln));
          ce.push(Rt), cr([...ce]);
        }
      }
    },
    "Add Isolate Value"
  )), /* @__PURE__ */ i.createElement(Ge, { value: e.legend.label, section: "legend", fieldName: "label", label: "Title", updateField: Fe }), /* @__PURE__ */ i.createElement(wt, { value: e.legend.position, section: "legend", fieldName: "position", label: "Position", updateField: Fe, options: ["right", "left", "bottom"] }), e.legend.position === "bottom" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(vt, { value: e.legend.singleRow, section: "legend", fieldName: "singleRow", label: "Single Row Legend", updateField: Fe }), /* @__PURE__ */ i.createElement(vt, { value: e.legend.verticalSorted, section: "legend", fieldName: "verticalSorted", label: "Vertical sorted Legend", updateField: Fe })), /* @__PURE__ */ i.createElement(Ge, { type: "textarea", value: e.legend.description, updateField: Fe, section: "legend", fieldName: "description", label: "Legend Description" }))), Ne() && /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(_n, null, "Filters")), /* @__PURE__ */ i.createElement(Mn, null, e.filters && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    wt,
    {
      value: e.filterBehavior,
      fieldName: "filterBehavior",
      label: "Filter Behavior",
      updateField: Fe,
      options: ["Apply Button", "Filter Change"],
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(Tt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, 'The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.')))
    }
  ), /* @__PURE__ */ i.createElement("br", null)), e.filters && /* @__PURE__ */ i.createElement("ul", { className: "filters-list" }, e.filters.map((re, te) => re.type === "url" ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: te }, /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        Je(te);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Filter"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: re.columnName,
      onChange: (ce) => {
        fn("columnName", te, ce.target.value);
      }
    },
    /* @__PURE__ */ i.createElement("option", { value: "" }, "- Select Option -"),
    Ht().map((ce, Re) => /* @__PURE__ */ i.createElement("option", { value: ce, key: Re }, ce))
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-showDropdown column-heading" }, "Show Filter Input"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: re.showDropdown === void 0 ? !0 : re.showDropdown,
      onChange: (ce) => {
        fn("showDropdown", te, ce.target.checked);
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Filter Style"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: re.filterStyle,
      onChange: (ce) => {
        fn("filterStyle", te, ce.target.value);
      }
    },
    rn.map((ce, Re) => /* @__PURE__ */ i.createElement("option", { key: `filter-style-${Re}`, value: ce }, ce))
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Label"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: re.label,
      onChange: (ce) => {
        fn("label", te, ce.target.value);
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-filterOrder column-heading" }, "Filter Order"), /* @__PURE__ */ i.createElement("select", { value: re.order ? re.order : "asc", onChange: (ce) => fn("order", te, ce.target.value) }, qt.map((ce, Re) => /* @__PURE__ */ i.createElement("option", { value: ce.value, key: `filter-${Re}` }, ce.label))), re.order === "cust" && /* @__PURE__ */ i.createElement(Mh, { onDragEnd: ({ source: ce, destination: Re }) => cn(ce.index, Re.index, te, e.filters[te]) }, /* @__PURE__ */ i.createElement(Nh, { droppableId: "filter_order" }, (ce) => {
    var Re;
    return /* @__PURE__ */ i.createElement("ul", { ...ce.droppableProps, className: "sort-list", ref: ce.innerRef, style: { marginTop: "1em" } }, (Re = e.filters[te]) == null ? void 0 : Re.values.map((Rt, ln) => /* @__PURE__ */ i.createElement(ym, { key: Rt, draggableId: `draggableFilter-${Rt}`, index: ln }, (Un, Pr) => /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("div", { className: Pr.isDragging ? "currently-dragging" : "", style: kt(Pr.isDragging, Un.draggableProps.style), ref: Un.innerRef, ...Un.draggableProps, ...Un.dragHandleProps }, Rt)))), ce.placeholder);
  })))))), !e.filters && /* @__PURE__ */ i.createElement("p", { style: { textAlign: "center" } }, "There are currently no filters."), /* @__PURE__ */ i.createElement("button", { type: "button", onClick: hn, className: "btn full-width" }, "Add Filter"))), /* @__PURE__ */ i.createElement(Fa.Visual, { name: "Visual" }), e.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement(Ln, null, /* @__PURE__ */ i.createElement(On, null, /* @__PURE__ */ i.createElement(_n, null, "Data Table")), /* @__PURE__ */ i.createElement(Mn, null, /* @__PURE__ */ i.createElement(Ny, { config: e, columns: Object.keys(a[0] || {}), updateField: Fe, isDashboard: g, isLoadedFromUrl: Ot }), " "))), e.type !== "Spark Line" && /* @__PURE__ */ i.createElement(vy, { loadConfig: t, state: e, convertStateToConfig: we })))));
}, fm = (e) => {
  let t = "", n = Math.abs(e);
  return n >= 1e9 ? (t = "B", e = e / 1e9) : n >= 1e6 ? (t = "M", e = e / 1e6) : n >= 1e3 && (t = "K", e = e / 1e3), e + t;
}, bw = (e) => {
  e.sort((f, g) => f - g);
  const t = Math.floor(e.length / 2), n = e.length % 2 === 0, a = n ? e.slice(0, t) : e.slice(0, t + 1), r = n ? e.slice(t) : e.slice(t + 1), o = Math.floor(a.length / 2), s = n ? (a[o - 1] + a[o]) / 2 : a[o], u = Math.floor(r.length / 2), d = n ? (r[u - 1] + r[u]) / 2 : r[u];
  return { q1: s, q3: d };
}, Sw = (e, t) => e.toString().localeCompare(t.toString(), "en", { numeric: !0 }), Ew = (e, t) => t.toString().localeCompare(e.toString(), "en", { numeric: !0 }), _i = (e, t) => {
  let n = [];
  return t.forEach((a) => {
    let r = !0;
    e.filter((o) => o.type !== "url").forEach((o) => {
      a[o.columnName] != o.active && (r = !1);
    }), r && n.push(a);
  }), n;
}, kw = [
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
  let n = zr(e), a = t ? n.brighten(0.5).hex() : n.saturate(1.3).hex();
  return [e, a, n.darken(0.3).hex()];
}, pm = (e, t, n) => {
  var g, v;
  const a = t.position === "bottom" || ["sm", "xs", "xxs"].includes(n), r = e.orientation === "horizontal", o = Number(e.xAxis.tickRotation) > 0 ? Number(e.xAxis.tickRotation) : 0, s = (g = e == null ? void 0 : e.brush) == null ? void 0 : g.active, u = 20, d = (v = e == null ? void 0 : e.brush) == null ? void 0 : v.height;
  let f = 0;
  return !a && r && !e.yAxis.label && (f = Number(e.xAxis.labelOffset)), !a && r && e.yAxis.label && !e.isResponsiveTicks && (f = Number(e.runtime.xAxis.size) + Number(e.xAxis.labelOffset)), !a && r && e.yAxis.label && e.isResponsiveTicks && (f = e.dynamicMarginTop + u), !a && r && !e.yAxis.label && e.isResponsiveTicks && (f = e.dynamicMarginTop ? e.dynamicMarginTop - u : Number(e.xAxis.labelOffset) - u), !a && r && e.yAxis.label && e.isResponsiveTicks && (f = e.dynamicMarginTop ? e.dynamicMarginTop + u : Number(e.xAxis.labelOffset)), !r && !a && e.xAxis.label && o && !e.isResponsiveTicks && (f = s ? d + e.xAxis.tickWidthMax + -e.xAxis.size + e.xAxis.labelOffset + u : e.xAxis.tickWidthMax + u + -e.xAxis.size + e.xAxis.labelOffset), !r && !a && !e.xAxis.label && o && e.isResponsiveTicks, !r && !a && !e.xAxis.label && o && !e.dynamicMarginTop && !e.isResponsiveTicks && (f = s ? e.xAxis.tickWidthMax + d + u + -e.xAxis.size : 0), !r && !a && e.xAxis.label && !o && !e.isResponsiveTicks && (f = s ? d + -e.xAxis.size + e.xAxis.labelOffset + u : -e.xAxis.size + e.xAxis.labelOffset + u), !r && !a && e.xAxis.label && e.dynamicMarginTop && e.isResponsiveTicks && (f = s ? d + e.xAxis.labelOffset + -e.xAxis.size + e.xAxis.tickWidthMax : e.dynamicMarginTop + -e.xAxis.size + u), !r && !a && !e.xAxis.label && e.dynamicMarginTop && e.isResponsiveTicks && (f = s ? d + e.xAxis.labelOffset + -e.xAxis.size + e.xAxis.tickWidthMax : e.dynamicMarginTop + -e.xAxis.size - u), !r && !a && e.xAxis.label && !e.dynamicMarginTop && e.isResponsiveTicks && (f = s ? d + e.xAxis.labelOffset + -e.xAxis.size + 25 : e.xAxis.labelOffset + -e.xAxis.size + u), !r && !a && !e.xAxis.label && !e.dynamicMarginTop && e.isResponsiveTicks && (f = -e.xAxis.size + u + e.xAxis.labelOffset), !r && !a && !e.xAxis.label && !o && !e.dynamicMarginTop && !e.isResponsiveTicks && (f = s ? d + -e.xAxis.size + e.xAxis.labelOffset : 0), `${f}px`;
};
const mm = (e) => {
  const t = /(?:\.([^.]+))$/, n = /[?&]wt=(csv|json)(?:&|$)/, a = new URL(e, window.location.origin), r = a.pathname, o = a.search, s = t.exec(r);
  if (s && s[1])
    return s[1];
  const u = n.exec(o);
  return u && u[1] ? u[1] : "";
};
function Zw({ configUrl: e, config: t, isEditor: n = !1, isDebug: a = !1, isDashboard: r = !1, setConfig: o, setEditing: s, hostname: u, link: d, setSharedFilter: f, setSharedFilterValue: g, dashboardConfig: v }) {
  var dn, Je, fn, hn, Tn, Sn, un, Mt, Ht;
  const y = new vm(), [E, w] = ue.useState(!0), [O, T] = ue.useState(null), [m, A] = ue.useState({}), [_, L] = ue.useState(m.data || []), [N, M] = ue.useState(void 0), [U, j] = ue.useState(void 0), [$, V] = ue.useState(t && ((Je = (dn = t == null ? void 0 : t.legend) == null ? void 0 : dn.seriesHighlight) != null && Je.length) ? [...(fn = t == null ? void 0 : t.legend) == null ? void 0 : fn.seriesHighlight] : []), [ne, H] = ue.useState("lg"), [oe, fe] = ue.useState([]), [I, Q] = ue.useState(), [q, se] = ue.useState(), [ae, J] = ue.useState(!1), [G, he] = ue.useState([]), [ee] = ue.useState(`cove-${Math.random().toString(16).slice(-4)}`);
  ue.useRef(/* @__PURE__ */ new Map()), ue.useRef(), a && console.log("Chart config, isEditor", m, n);
  let { legend: ge, title: be, description: _e, visualizationType: Ve } = m;
  n && (!be || be === "") && (be = "Chart Title"), m.table && (!((hn = m.table) != null && hn.label) || ((Tn = m.table) == null ? void 0 : Tn.label) === "") && (m.table.label = "Data Table");
  const { barBorderClass: Qe, lineDatapointClass: Ae, contentClasses: ve, sparkLineStyles: Ee } = zy(m), le = m.showSidebar ? "#legend" : m != null && m.title ? `#dataTableSection__${m.title.replace(/\s/g, "")}` : "#dataTableSection", Be = async () => {
    var K;
    if (m.dataUrl) {
      const He = new URL(m.runtimeDataUrl || m.dataUrl, window.location.origin);
      let et = Object.fromEntries(new URLSearchParams(He.search)), Ie = !1;
      if ((K = m.filters) == null || K.forEach((we) => {
        we.type === "url" && et[we.queryParameter] !== decodeURIComponent(we.active) && (et[we.queryParameter] = we.active, Ie = !0);
      }), (!m.formattedData || m.formattedData.urlFiltered) && !Ie)
        return;
      let bt = `${He.origin}${He.pathname}${Object.keys(et).map((we, Ye) => {
        let $e = Ye === 0 ? "?" : "&";
        return $e += we + "=", $e += et[we], $e;
      }).join("")}`, ft = [];
      try {
        const we = mm(He.href);
        we === "csv" || Dh(bt) ? ft = await fetch(bt).then((Ye) => Ye.text()).then((Ye) => Oh.parse(Ye, {
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0
        }).data) : we === "json" || Lh(bt) ? ft = await fetch(bt).then((Ye) => Ye.json()) : ft = [];
      } catch {
        console.error(`Cannot parse URL: ${bt}`), ft = [];
      }
      m.dataDescription && (ft = y.autoStandardize(ft), ft = y.developerStandardize(ft, m.dataDescription)), Object.assign(ft, { urlFiltered: !0 }), qe({ ...m, runtimeDataUrl: bt, data: ft, formattedData: ft }), ft && (L(ft), M(ft), j(_i(m.filters, ft)));
    }
  }, Ne = async () => {
    let K = t || await (await fetch(e)).json(), He = K.data || [];
    const et = K.filters ? K.filters.filter((ft) => ft.type === "url").length > 0 : !1;
    if (K.dataUrl && !et)
      try {
        const ft = mm(K.dataUrl);
        (ft === "csv" || Dh(K.dataUrl)) && (He = await fetch(K.dataUrl + `?v=${Wh()}`).then((we) => we.text()).then((we) => (we = we.replace(/(".*?")|,/g, (...$e) => $e[1] || "|"), we = we.replace(/["]+/g, ""), Oh.parse(we, {
          //quotes: "true",  // dont need these
          //quoteChar: "'",  // has no effect that I can tell
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0,
          delimiter: "|"
          // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
        }).data))), (ft === "json" || Lh(K.dataUrl)) && (He = await fetch(K.dataUrl + `?v=${Wh()}`).then((we) => we.json()));
      } catch {
        console.error(`COVE: Cannot parse URL: ${K.dataUrl}`), He = [];
      }
    K.dataDescription && (He = y.autoStandardize(He), He = y.developerStandardize(He, K.dataDescription)), He && (L(He), M(He)), K !== void 0 && K.table !== void 0 && (!K.table || !K.table.showVertical) && (K.table = K.table || {}, K.table.showVertical = !1);
    let Ie = { ...qd, ...K };
    Ie.visualizationType === "Box Plot" && (Ie.legend.hide = !0), Ie.table.show === void 0 && (Ie.table.show = !r), Ie.series.map((ft) => {
      ft.tooltip || (ft.tooltip = !0), ft.axis || (ft.axis = "Left");
    }), !Ie.data && He && (Ie.data = He);
    const bt = { ...await Hy(Ie) };
    qe(bt, He);
  }, qe = (K, He) => {
    var ft, we, Ye;
    let et = He || _;
    Object.keys(qd).forEach(($e) => {
      K[$e] && typeof K[$e] == "object" && !Array.isArray(K[$e]) && (K[$e] = { ...qd[$e], ...K[$e] });
    });
    let Ie = [];
    if (K.exclusions && K.exclusions.active)
      if (K.xAxis.type === "categorical" && ((ft = K.exclusions.keys) == null ? void 0 : ft.length) > 0)
        Ie = et.filter(($e) => !K.exclusions.keys.includes($e[K.xAxis.dataKey]));
      else if (K.xAxis.type === "date" && (K.exclusions.dateStart || K.exclusions.dateEnd) && K.xAxis.dateParseFormat) {
        const $e = (Kt) => new Date(Kt).getTime();
        let Xe = $e(K.exclusions.dateStart), Lt = $e(K.exclusions.dateEnd) + 86399999, Wt = typeof Xe !== void 0 && isNaN(Xe) === !1, Ut = typeof Lt !== void 0 && isNaN(Lt) === !1;
        Wt && Ut ? Ie = et.filter((Kt) => $e(Kt[K.xAxis.dataKey]) >= Xe && $e(Kt[K.xAxis.dataKey]) <= Lt) : Wt ? Ie = et.filter((Kt) => $e(Kt[K.xAxis.dataKey]) >= Xe) : Ut && (Ie = et.filter((Kt) => $e(Kt[K.xAxis.dataKey]) <= Lt));
      } else
        Ie = He || _;
    else
      Ie = He || _;
    M(Ie);
    let bt = [];
    if (K.filters && (K.filters.forEach(($e, Xe) => {
      let Lt = [];
      Lt = $e.orderedValues || Ke($e.columnName, Ie).sort($e.order === "desc" ? Ew : Sw), K.filters[Xe].values = Lt, K.filters[Xe].active = K.filters[Xe].active || Lt[0], K.filters[Xe].filterStyle = K.filters[Xe].filterStyle ? K.filters[Xe].filterStyle : "dropdown";
    }), bt = _i(K.filters, Ie), j(bt)), (!["Area Chart", "Bar", "Line", "Combo"].includes(K.visualizationType) || K.orientation === "horizontal") && (K.xAxis.sortDates = !1), K.xAxis.sortDates && K.barThickness > 0.1 ? K.barThickness = 0.035 : !K.xAxis.sortDates && K.barThickness < 0.1 && (K.barThickness = 0.35), K.runtime = {}, K.runtime.seriesLabels = {}, K.runtime.seriesLabelsAll = [], K.runtime.originalXAxis = K.xAxis, K.visualizationType === "Pie" ? (K.runtime.seriesKeys = (He || et).map(($e) => $e[K.xAxis.dataKey]), K.runtime.seriesLabelsAll = K.runtime.seriesKeys) : K.runtime.seriesKeys = K.series ? K.series.map(($e) => (K.runtime.seriesLabels[$e.dataKey] = $e.name || $e.label || $e.dataKey, K.runtime.seriesLabelsAll.push($e.name || $e.dataKey), $e.dataKey)) : [], K.visualizationType === "Box Plot" && K.series) {
      let $e = Ie ? Ie.map((Ot) => Ot[K.xAxis.dataKey]) : et.map((Ot) => Ot[K.xAxis.dataKey]), Xe = Ie ? Ie.map((Ot) => {
        var $t;
        return Number(Ot[($t = K == null ? void 0 : K.series[0]) == null ? void 0 : $t.dataKey]);
      }) : et.map((Ot) => {
        var $t;
        return Number(Ot[($t = K == null ? void 0 : K.series[0]) == null ? void 0 : $t.dataKey]);
      });
      const Wt = function(Ot) {
        return Ot.filter(function($t, Zt, an) {
          return an.indexOf($t) === Zt;
        });
      }($e);
      let Ut = [];
      const Kt = [];
      if (!Wt)
        return;
      Wt.forEach((Ot) => {
        try {
          if (!Ot)
            throw new Error("No groups resolved in box plots");
          let $t = Ie ? Ie.filter((jt) => jt[K.xAxis.dataKey] === Ot) : et.filter((jt) => jt[K.xAxis.dataKey] === Ot), Zt = $t.map((jt) => {
            var Yt;
            return Number(jt[(Yt = K == null ? void 0 : K.series[0]) == null ? void 0 : Yt.dataKey]);
          }), an = Zt.sort((jt, Yt) => jt - Yt);
          const pn = bw(an);
          if (!$t)
            throw new Error("boxplots dont have data yet");
          if (!Kt)
            throw new Error("boxplots dont have plots yet");
          K.boxplot.firstQuartilePercentage === "" && (K.boxplot.firstQuartilePercentage = 0), K.boxplot.thirdQuartilePercentage === "" && (K.boxplot.thirdQuartilePercentage = 0);
          const Qt = pn.q1, mn = pn.q3, yt = mn - Qt, ct = Qt - (mn - Qt) * 1.5, on = mn + (mn - Qt) * 1.5, xn = an.filter((jt) => jt < ct || jt > on);
          let en = Zt;
          en = en.filter((jt) => !xn.includes(jt));
          const Bn = ls(Zt) || 0, Cn = os([Bn, Qt - 1.5 * yt]);
          Kt.push({
            columnCategory: Ot,
            columnMax: ls([os(Zt), Qt + 1.5 * yt]),
            columnThirdQuartile: Number(mn).toFixed(K.dataFormat.roundTo),
            columnMedian: Number(Xy(Zt)).toFixed(K.dataFormat.roundTo),
            columnFirstQuartile: Qt.toFixed(K.dataFormat.roundTo),
            columnMin: Cn,
            columnTotal: Zt.reduce((jt, Yt) => jt + Yt, 0),
            columnSd: Number(Uy(Zt)).toFixed(K.dataFormat.roundTo),
            columnMean: Number(Yy(Zt)).toFixed(K.dataFormat.roundTo),
            columnIqr: Number(yt).toFixed(K.dataFormat.roundTo),
            columnLowerBounds: Cn,
            columnUpperBounds: ls([os(an), Qt + 1.5 * yt]),
            columnOutliers: xn,
            values: Zt,
            nonOutlierValues: en
          });
        } catch ($t) {
          console.error("COVE: ", $t.message);
        }
      }), Ut = JSON.parse(JSON.stringify(Kt)), Ut.map((Ot) => (Ot.columnIqr = void 0, Ot.nonOutlierValues = void 0, Ot.columnLowerBounds = void 0, Ot.columnUpperBounds = void 0, null)), K.boxplot.allValues = Xe, K.boxplot.categories = Wt, K.boxplot.plots = Kt, K.boxplot.tableData = Ut;
    }
    K.visualizationType === "Combo" && K.series && (K.runtime.barSeriesKeys = [], K.runtime.lineSeriesKeys = [], K.runtime.areaSeriesKeys = [], K.runtime.forecastingSeriesKeys = [], K.series.forEach(($e) => {
      $e.type === "Area Chart" && K.runtime.areaSeriesKeys.push($e), $e.type === "Forecasting" && K.runtime.forecastingSeriesKeys.push($e), $e.type === "Bar" && K.runtime.barSeriesKeys.push($e.dataKey), ($e.type === "Line" || $e.type === "dashed-sm" || $e.type === "dashed-md" || $e.type === "dashed-lg") && K.runtime.lineSeriesKeys.push($e.dataKey), $e.type === "Combo" && ($e.type = "Bar");
    })), K.visualizationType === "Forecasting" && K.series && (K.runtime.forecastingSeriesKeys = [], K.series.forEach(($e) => {
      $e.type === "Forecasting" && K.runtime.forecastingSeriesKeys.push($e);
    })), K.visualizationType === "Area Chart" && K.series && (K.runtime.areaSeriesKeys = [], K.series.forEach(($e) => {
      K.runtime.areaSeriesKeys.push({ ...$e, type: "Area Chart" });
    })), K.visualizationType === "Bar" && K.orientation === "horizontal" || ["Deviation Bar", "Paired Bar", "Forest Plot"].includes(K.visualizationType) ? (K.runtime.xAxis = K.yAxis.yAxis ? K.yAxis.yAxis : K.yAxis, K.runtime.yAxis = K.xAxis.xAxis ? K.xAxis.xAxis : K.xAxis, K.runtime.horizontal = !1, K.orientation = "horizontal") : ["Box Plot", "Scatter Plot", "Area Chart", "Line", "Forecasting"].includes(K.visualizationType) ? (K.runtime.xAxis = K.xAxis, K.runtime.yAxis = K.yAxis, K.runtime.horizontal = !1, K.orientation = "vertical") : (K.runtime.xAxis = K.xAxis, K.runtime.yAxis = K.yAxis, K.runtime.horizontal = !1), K.runtime.uniqueId = Date.now(), K.runtime.editorErrorMessage = K.visualizationType === "Pie" && !K.yAxis.dataKey ? "Data Key property in Y Axis section must be set for pie charts." : "", K.runtime.editorErrorMessage = K.visualizationType === "Sankey" && !K.description ? "SUBTEXT/CITATION field is empty: A description of the Sankey Diagram data must be inputted." : "", (we = K.legend.seriesHighlight) != null && we.length && V((Ye = K.legend) == null ? void 0 : Ye.seriesHighlight), A(K);
  }, Ke = (K, He = this.state.data) => {
    const et = [];
    return He.forEach((Ie) => {
      const bt = Ie[K];
      bt && et.includes(bt) === !1 && et.push(bt);
    }), et;
  }, nt = (K, He) => {
    let et = m.visualizationType === "Bar" && m.visualizationSubType === "horizontal" ? m.xAxis.dataKey : m.yAxis.sortKey, Ie = parseFloat(K[et]), bt = parseFloat(He[et]);
    return Ie < bt ? m.sortData === "ascending" ? 1 : -1 : Ie > bt ? m.sortData === "ascending" ? -1 : 1 : 0;
  }, at = new gy((K) => {
    for (let He of K) {
      let { width: et, height: Ie } = He.contentRect, bt = yy(et), ft = 32, we = 350;
      H(bt), n && (et = et - we), He.target.dataset.lollipop === "true" && (et = et - 2.5), et = et - ft, fe([et, Ie]);
    }
  }), lt = ue.useCallback((K) => {
    K !== null && at.observe(K), se(K);
  }, []);
  function ot(K) {
    return Object.keys(K).length === 0;
  }
  ue.useEffect(() => {
    Ne();
  }, []), ue.useEffect(() => {
    Be();
  }, [JSON.stringify(m.filters)]), ue.useEffect(() => {
    q && !ot(m) && !ae && (By("cove_loaded", { config: m }), J(!0));
  }, [q, m]), ue.useEffect(() => {
    const K = (He) => {
      let et = [];
      et.push(He.detail), Q(et);
    };
    return $y("cove_filterData", (He) => K(He)), () => {
      Iy("cove_filterData", K);
    };
  }, [m]), ue.useEffect(() => {
    if (I && I[0] && !I[0].hasOwnProperty("active")) {
      let He = { ...m };
      delete He.filters, A(He), j(_i(I, N));
    }
    if (I && I.length > 0 && I.length > 0 && I[0].hasOwnProperty("active")) {
      let K = { ...m, filters: I };
      A(K), j(_i(I, N));
    }
  }, [I]), t && ue.useEffect(() => {
    Ne();
  }, [t.data]), ue.useEffect(() => {
    var K;
    if (_ && m.xAxis && ((K = m.runtime) != null && K.seriesKeys)) {
      const He = ["Paired Bar", "Deviation Bar"].includes(m.visualizationType) ? m.twoColor.palette : m.palette, et = { ...ur, ...Wu };
      let Ie = m.customColors || et[He], bt = m.runtime.seriesKeys.length, ft;
      for (; bt > Ie.length; )
        Ie = Ie.concat(Ie);
      Ie = Ie.slice(0, bt), ft = () => jf({
        domain: m.runtime.seriesLabelsAll,
        range: Ie,
        unknown: null
      }), T(ft), w(!1);
    }
    m && _ && m.sortData && _.sort(nt);
  }, [m, _]);
  const Ze = (K) => {
    if ($.length + 1 === m.runtime.seriesKeys.length && m.visualizationType !== "Forecasting") {
      Me();
      return;
    }
    const He = [...$];
    let et = K.datum;
    m.runtime.seriesLabels && m.runtime.seriesKeys.forEach((Ie) => {
      m.runtime.seriesLabels[Ie] === K.datum && (et = Ie);
    }), He.indexOf(et) !== -1 ? He.splice(He.indexOf(et), 1) : He.push(et), V(He);
  }, Me = () => {
    try {
      const K = document.getElementById("legend");
      if (!K)
        throw new Error("No legend available to set previous focus on.");
      K.focus();
    } catch (K) {
      console.error("COVE:", K.message);
    }
    V([]);
  }, De = m.orientation === "horizontal" ? "yAxis" : "xAxis", ht = (K, He = !0) => {
    let et = ag(m.runtime[De].dateParseFormat)(K);
    return et || (He && (m.runtime.editorErrorMessage = `Error parsing date "${K}". Try reviewing your data and date parse settings in the X Axis section.`), /* @__PURE__ */ new Date());
  }, Ue = (K) => Qd(m.runtime[De].dateDisplayFormat)(K), dt = (K) => Qd(m.tooltips.dateDisplayFormat)(K);
  function pt(K, He) {
    const Ie = document.createElement("canvas").getContext("2d");
    if (!Ie) {
      console.error("2d context not found");
      return;
    }
    return Ie.font = He || getComputedStyle(document.body).font, Math.ceil(Ie.measureText(K).width);
  }
  const gt = (K, He, et = !1, Ie, bt, ft) => {
    if (isNaN(K) || !K)
      return K;
    const we = K < 0;
    (He === void 0 || !He) && (He = "left"), we && (K = Math.abs(K));
    let {
      dataFormat: { commas: Ye, abbreviated: $e, roundTo: Xe, prefix: Lt, suffix: Wt, rightRoundTo: Ut, bottomRoundTo: Kt, rightPrefix: Ot, rightSuffix: $t, bottomPrefix: Zt, bottomSuffix: an, bottomAbbreviated: pn }
    } = m;
    String(K).indexOf(",") !== -1 && (K = K.replaceAll(",", ""));
    let Qt = K, mn = {
      useGrouping: !!Ye
      // for old chart data table to work right cant just leave this to undefined
    };
    if (He === "left" || He === void 0) {
      let on;
      ft !== void 0 ? on = ft ? Number(ft) : 0 : on = Xe ? Number(Xe) : 0, mn = {
        useGrouping: ft ? !0 : !!m.dataFormat.commas,
        minimumFractionDigits: on,
        maximumFractionDigits: on
      };
    }
    He === "right" && (mn = {
      useGrouping: !!m.dataFormat.rightCommas,
      minimumFractionDigits: Ut ? Number(Ut) : 0,
      maximumFractionDigits: Ut ? Number(Ut) : 0
    });
    const yt = () => m.forestPlot.type === "Logarithmic" && !Kt ? 2 : Number(Kt) ? Number(Kt) : 0;
    if (He === "bottom" && (mn = {
      useGrouping: !!m.dataFormat.bottomCommas,
      minimumFractionDigits: yt(),
      maximumFractionDigits: yt()
    }), K = Hh(K), isNaN(K))
      return m.runtime.editorErrorMessage = `Unable to parse number from data ${Qt}. Try reviewing your data and selections in the Data Series section.`, Qt;
    if (!m.dataFormat)
      return K;
    if (m.dataCutoff) {
      let on = Hh(m.dataCutoff);
      K < on && (K = on);
    }
    He === "left" && Ye && $e && et || He === "bottom" && Ye && $e && et ? K = K : K = K.toLocaleString("en-US", mn);
    let ct = "";
    return $e && He === "left" && et && (K = fm(parseFloat(K))), pn && He === "bottom" && et && (K = fm(parseFloat(K))), Ie && He === "left" ? ct = Ie + ct : Lt && He === "left" && (ct += Lt), Ot && He === "right" && (ct += Ot), Zt && He === "bottom" && (ct += Zt), ct += K, bt && He === "left" ? ct += bt : Wt && He === "left" && (ct += Wt), $t && He === "right" && (ct += $t), an && He === "bottom" && (ct += an), we && (ct = "-" + ct), String(ct);
  }, _t = {
    "Paired Bar": /* @__PURE__ */ i.createElement(Yr, null),
    Forecasting: /* @__PURE__ */ i.createElement(Yr, null),
    Bar: /* @__PURE__ */ i.createElement(Yr, null),
    Line: /* @__PURE__ */ i.createElement(Yr, null),
    Combo: /* @__PURE__ */ i.createElement(Yr, null),
    Pie: /* @__PURE__ */ i.createElement(QS, null),
    "Box Plot": /* @__PURE__ */ i.createElement(Yr, null),
    "Area Chart": /* @__PURE__ */ i.createElement(Yr, null),
    "Scatter Plot": /* @__PURE__ */ i.createElement(Yr, null),
    "Deviation Bar": /* @__PURE__ */ i.createElement(Yr, null),
    "Forest Plot": /* @__PURE__ */ i.createElement(Yr, null)
  }, It = () => {
    if (m.visualizationType === "Sankey" || m.visualizationType === "Forecasting" || m.visualizationType === "Forest Plot")
      return !1;
    if (m.visualizationType === "Pie") {
      if ((m == null ? void 0 : m.yAxis.dataKey) === void 0)
        return !0;
    } else if ((m == null ? void 0 : m.series) === void 0 || !((m == null ? void 0 : m.series.length) > 0))
      return !0;
    return !m.xAxis.dataKey;
  }, cn = (K, He) => {
    if (K === null || K === "" || K === void 0)
      return "";
    if (typeof K == "string" && K.length > 0 && m.legend.type === "equalnumber")
      return K;
    let et = K, Ie;
    if (Object.keys(m.columns).length > 0 && Object.keys(m.columns).forEach(function(bt) {
      var ft = m.columns[bt];
      ft.name === He && (Ie = ft);
    }), Ie === void 0 && (Ie = m.type === "chart" ? m.dataFormat : m.primary, Ie.useCommas = Ie.commas, Ie.roundToPlace = Ie.roundTo ? Ie.roundTo : ""), Ie) {
      let bt = !1, ft = 0;
      Number(K) && (Ie.roundToPlace >= 0 && (bt = Ie.roundToPlace ? Ie.roundToPlace !== "" || Ie.roundToPlace !== null : !1, ft = Ie.roundToPlace ? Number(Ie.roundToPlace) : 0, Ie.hasOwnProperty("roundToPlace") && bt && (et = Number(K).toFixed(ft))), Ie.hasOwnProperty("useCommas") && Ie.useCommas === !0 && (et = Number(K).toLocaleString("en-US", {
        style: "decimal",
        minimumFractionDigits: bt ? ft : 0,
        maximumFractionDigits: bt ? ft : 5
      }))), et = (Ie.prefix || "") + et + (Ie.suffix || "");
    }
    return et;
  }, qt = (K) => {
    try {
      if (!K)
        throw new Error("COVE: No rowObj in applyLegendToRow");
      if (m.type === "navigation") {
        let He = ur[m.color] || ur.bluegreenreverse;
        return hm(He[3]);
      }
      return hm();
    } catch (He) {
      console.error("COVE: ", He);
    }
  }, rn = (K) => {
    var He;
    return Array.isArray(K) ? m.visualizationType === "Forecasting" ? K : (He = m == null ? void 0 : m.xAxis) != null && He.dataKey ? y.cleanData(K, m.xAxis.dataKey) : K : [];
  }, Et = (K) => K;
  let kt = /* @__PURE__ */ i.createElement(Ay, null);
  if (!E) {
    const K = /* @__PURE__ */ i.createElement("a", { href: `#data-table-${m.dataKey}`, className: "margin-left-href" }, m.dataKey, " (Go to Table)");
    kt = /* @__PURE__ */ i.createElement(i.Fragment, null, n && /* @__PURE__ */ i.createElement(xw, null), !It() && !m.newViz && /* @__PURE__ */ i.createElement("div", { className: "cdc-chart-inner-container" }, /* @__PURE__ */ i.createElement(by, { showTitle: m.showTitle, isDashboard: r, title: be, superTitle: m.superTitle, classes: ["chart-title", `${m.theme}`, "cove-component__header"], style: void 0 }), /* @__PURE__ */ i.createElement("a", { id: "skip-chart-container", className: "cdcdataviz-sr-only-focusable", href: le }, "Skip Over Chart Container"), m.filters && !I && /* @__PURE__ */ i.createElement(ky, { config: m, setConfig: A, setFilteredData: j, filteredData: U, excludedData: N, filterData: _i, dimensions: oe }), (m == null ? void 0 : m.introText) && m.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement("section", { className: "introText" }, Ni(m.introText)), /* @__PURE__ */ i.createElement(
      "div",
      {
        style: { marginBottom: pm(m, ge, ne) },
        className: `chart-container  p-relative ${m.legend.position === "bottom" ? "bottom" : ""}${m.legend.hide ? " legend-hidden" : ""}${Ae}${Qe} ${ve.join(" ")} ${a ? "debug" : ""}`
      },
      m.visualizationType !== "Spark Line" && _t[m.visualizationType],
      m.visualizationType === "Spark Line" && /* @__PURE__ */ i.createElement(i.Fragment, null, (m == null ? void 0 : m.introText) && /* @__PURE__ */ i.createElement("section", { className: "introText", style: { padding: "0px 0 35px" } }, Ni(m.introText)), /* @__PURE__ */ i.createElement("div", { style: { height: "100px", width: "100%", ...Ee } }, /* @__PURE__ */ i.createElement(ip, null, (He) => /* @__PURE__ */ i.createElement(Zk, { width: He.width, height: He.height }))), _e && /* @__PURE__ */ i.createElement("div", { className: "subtext", style: { padding: "35px 0 15px" } }, Ni(_e))),
      m.visualizationType === "Sankey" && /* @__PURE__ */ i.createElement(ip, { "aria-hidden": "true" }, (He) => /* @__PURE__ */ i.createElement(AE, { width: He.width, height: He.height })),
      !m.legend.hide && m.visualizationType !== "Spark Line" && m.visualizationType !== "Sankey" && /* @__PURE__ */ i.createElement(Qk, null)
    ), r && m.table && m.table.show && m.table.showDataTableLink ? K : d && d, _e && m.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement("div", { className: "column " + m.isResponsiveTicks ? "subtext--responsive-ticks" : "subtext" }, Ni(_e)), /* @__PURE__ */ i.createElement(Td.Section, { classes: ["download-buttons"] }, m.table.showDownloadImgButton && /* @__PURE__ */ i.createElement(Td.Button, { text: "Download Image", title: "Download Chart as Image", type: "image", state: m, elementToCapture: ee }), m.table.showDownloadPdfButton && /* @__PURE__ */ i.createElement(Td.Button, { text: "Download PDF", title: "Download Chart as PDF", type: "pdf", state: m, elementToCapture: ee })), (m.xAxis.dataKey && m.table.show && m.visualizationType !== "Spark Line" && m.visualizationType !== "Sankey" || m.visualizationType === "Sankey" && m.table.show) && /* @__PURE__ */ i.createElement(
      Cy,
      {
        config: m,
        rawData: m.visualizationType === "Sankey" ? (un = (Sn = m == null ? void 0 : m.data) == null ? void 0 : Sn[0]) == null ? void 0 : un.tableData : m.table.customTableConfig ? _i(m.filters, m.data) : m.data,
        runtimeData: m.visualizationType === "Sankey" ? (Ht = (Mt = m == null ? void 0 : m.data) == null ? void 0 : Mt[0]) == null ? void 0 : Ht.tableData : y.applySuppression(U || N, m.suppressedData),
        expandDataTable: m.table.expanded,
        columns: m.columns,
        displayDataAsText: cn,
        displayGeoName: Et,
        applyLegendToRow: qt,
        tableTitle: m.table.label,
        indexTitle: m.table.indexLabel,
        vizTitle: be,
        viewport: ne,
        tabbingId: le,
        colorScale: O
      }
    ), (m == null ? void 0 : m.footnotes) && /* @__PURE__ */ i.createElement("section", { className: "footnotes" }, Ni(m.footnotes))));
  }
  const Gt = {
    capitalize: (K) => K.charAt(0).toUpperCase() + K.slice(1),
    computeMarginBottom: pm,
    getXAxisData: (K) => m.runtime.xAxis.type === "date" ? ht(K[m.runtime.originalXAxis.dataKey]).getTime() : K[m.runtime.originalXAxis.dataKey],
    getYAxisData: (K, He) => K[He],
    config: m,
    setConfig: A,
    rawData: _ ?? {},
    excludedData: N,
    transformedData: rn(U || N),
    // do this right before passing to components
    tableData: U || N,
    // do not clean table data
    unfilteredData: _,
    seriesHighlight: $,
    colorScale: O,
    dimensions: oe,
    currentViewport: ne,
    parseDate: ht,
    formatDate: Ue,
    formatTooltipsDate: dt,
    formatNumber: gt,
    loading: E,
    updateConfig: qe,
    colorPalettes: ur,
    isDashboard: r,
    setParentConfig: o,
    missingRequiredSections: It,
    setEditing: s,
    setFilteredData: j,
    handleChartAriaLabels: Bg,
    highlight: Ze,
    highlightReset: Me,
    legend: ge,
    setSeriesHighlight: V,
    dynamicLegendItems: G,
    setDynamicLegendItems: he,
    filterData: _i,
    imageId: ee,
    handleLineType: Tf,
    lineOptions: kw,
    isNumber: Iu,
    getTextWidth: pt,
    twoColorPalette: Wu,
    isEditor: n,
    isDebug: a,
    setSharedFilter: f,
    setSharedFilterValue: g,
    dashboardConfig: v,
    debugSvg: a
  }, Ft = ["cdc-open-viz-module", "type-chart", `${ne}`, `font-${m.fontSize}`, `${m.theme}`];
  return m.visualizationType === "Spark Line" && Ft.push("type-sparkline"), n && Ft.push("spacing-wrapper"), n && Ft.push("isEditor"), /* @__PURE__ */ i.createElement(Ct.Provider, { value: Gt }, /* @__PURE__ */ i.createElement("div", { className: `${Ft.join(" ")}`, ref: lt, "data-lollipop": m.isLollipopChart, "data-download-id": ee }, kt));
}
export {
  Zw as C
};
