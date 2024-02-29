import { r as z, R as r } from "./storybook-e61d95ab.es.js";
import { a as Ou, i as Jl, b as eo, g as _u } from "./storybook-6a0136d5.es.js";
import { A as Du } from "./storybook-80f88100.es.js";
import { p as Os, P as B } from "./storybook-b8c9afe4.es.js";
import { d as Mu } from "./storybook-2eb5481e.es.js";
import { a as Qi } from "./storybook-c5d32002.es.js";
import { P as to } from "./storybook-76833471.es.js";
import { H as En, T as $u } from "./storybook-826feda6.es.js";
import { _ as Ze } from "./storybook-70f3d2a3.es.js";
import { _ as Xt, G as zu, t as Ya, a as Nt, s as Xa, T as Re, P as _s, I as no, u as Ru, D as ao, C as ro, F as Fu } from "./storybook-f36a040c.es.js";
import { c as Vt } from "./storybook-1d43892b.es.js";
import { D as Ds, a as st, b as ct, c as ut, d as dt, A as An } from "./storybook-441ad5c2.es.js";
import { t as Bu, f as Ms, L as io, a as Vu, g as mn, M as Vr, D as Hu } from "./storybook-928872a4.es.js";
import { E as Ht, L as Wu } from "./storybook-a0c99f4a.es.js";
import { s as ea, t as $s, a as zs, b as Rs, d as xa, B as Dt, c as ht, C as Ku, S as Fs } from "./storybook-0cd4c30f.es.js";
import { b as wr, t as Iu, e as Bs, f as lo, g as ju, h as qu, j as Vs, k as oo, m as Uu, G as ve, c as lt } from "./storybook-14e8f9f9.es.js";
import { R as Yu } from "./storybook-e604ac6e.es.js";
import "./storybook-9c2b8003.es.js";
import { i as Hs, m as Hr, c as Ws, j as Ca, k as Pa, l as Na, n as so, o as Xu, p as co, b as Ks, d as Is } from "./storybook-bedc547d.es.js";
import { a as _e } from "./storybook-2ad7d390.es.js";
import { T as Q } from "./storybook-a16f6c8c.es.js";
import { S as Oe, T as se, C as Te, D as Qu } from "./storybook-5fa2d0f1.es.js";
import { I as cn } from "./storybook-deb084b6.es.js";
import { u as Zu, p as Gu, s as Ju, a as ed, c as td } from "./storybook-a9880235.es.js";
import { n as uo } from "./storybook-24623c03.es.js";
import { c as mo } from "./storybook-7a3dd9ba.es.js";
function js(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function fo(e) {
  let t = e, n = e;
  e.length === 1 && (t = (o, s) => e(o) - s, n = nd(e));
  function a(o, s, c, u) {
    for (c == null && (c = 0), u == null && (u = o.length); c < u; ) {
      const d = c + u >>> 1;
      n(o[d], s) < 0 ? c = d + 1 : u = d;
    }
    return c;
  }
  function i(o, s, c, u) {
    for (c == null && (c = 0), u == null && (u = o.length); c < u; ) {
      const d = c + u >>> 1;
      n(o[d], s) > 0 ? u = d : c = d + 1;
    }
    return c;
  }
  function l(o, s, c, u) {
    c == null && (c = 0), u == null && (u = o.length);
    const d = a(o, s, c, u - 1);
    return d > c && t(o[d - 1], s) > -t(o[d], s) ? d - 1 : d;
  }
  return { left: a, center: l, right: i };
}
function nd(e) {
  return (t, n) => js(e(t), n);
}
function* ad(e, t) {
  if (t === void 0)
    for (let n of e)
      n != null && (n = +n) >= n && (yield n);
  else {
    let n = -1;
    for (let a of e)
      (a = t(a, ++n, e)) != null && (a = +a) >= a && (yield a);
  }
}
function rd(e, t) {
  let n = 0, a, i = 0, l = 0;
  if (t === void 0)
    for (let o of e)
      o != null && (o = +o) >= o && (a = o - i, i += a / ++n, l += a * (o - i));
  else {
    let o = -1;
    for (let s of e)
      (s = t(s, ++o, e)) != null && (s = +s) >= s && (a = s - i, i += a / ++n, l += a * (s - i));
  }
  if (n > 1)
    return l / (n - 1);
}
function id(e, t) {
  const n = rd(e, t);
  return n && Math.sqrt(n);
}
function ta(e, t) {
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
function na(e, t) {
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
function qs(e, t, n = 0, a = e.length - 1, i = js) {
  for (; a > n; ) {
    if (a - n > 600) {
      const c = a - n + 1, u = t - n + 1, d = Math.log(c), h = 0.5 * Math.exp(2 * d / 3), m = 0.5 * Math.sqrt(d * h * (c - h) / c) * (u - c / 2 < 0 ? -1 : 1), p = Math.max(n, Math.floor(t - u * h / c + m)), y = Math.min(a, Math.floor(t + (c - u) * h / c + m));
      qs(e, t, p, y, i);
    }
    const l = e[t];
    let o = n, s = a;
    for (Xn(e, n, t), i(e[a], l) > 0 && Xn(e, n, a); o < s; ) {
      for (Xn(e, o, s), ++o, --s; i(e[o], l) < 0; )
        ++o;
      for (; i(e[s], l) > 0; )
        --s;
    }
    i(e[n], l) === 0 ? Xn(e, n, s) : (++s, Xn(e, s, a)), s <= t && (n = s + 1), t <= s && (a = s - 1);
  }
  return e;
}
function Xn(e, t, n) {
  const a = e[t];
  e[t] = e[n], e[n] = a;
}
function ld(e, t, n) {
  if (e = Float64Array.from(ad(e, n)), !!(a = e.length)) {
    if ((t = +t) <= 0 || a < 2)
      return na(e);
    if (t >= 1)
      return ta(e);
    var a, i = (a - 1) * t, l = Math.floor(i), o = ta(qs(e, l).subarray(0, l + 1)), s = na(e.subarray(l + 1));
    return o + (s - o) * (i - l);
  }
}
function od(e, t) {
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
function sd(e, t) {
  return ld(e, 0.5, t);
}
class ho extends Map {
  constructor(t, n = dd) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null)
      for (const [a, i] of t)
        this.set(a, i);
  }
  get(t) {
    return super.get(po(this, t));
  }
  has(t) {
    return super.has(po(this, t));
  }
  set(t, n) {
    return super.set(cd(this, t), n);
  }
  delete(t) {
    return super.delete(ud(this, t));
  }
}
function po({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function cd({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function ud({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function dd(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function md(e, t, n) {
  e = +e, t = +t, n = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +n;
  for (var a = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, l = new Array(i); ++a < i; )
    l[a] = e + a * n;
  return l;
}
const yo = Symbol("implicit");
function Zi() {
  var e = new ho(), t = [], n = [], a = yo;
  function i(l) {
    let o = e.get(l);
    if (o === void 0) {
      if (a !== yo)
        return a;
      e.set(l, o = t.push(l) - 1);
    }
    return n[o % n.length];
  }
  return i.domain = function(l) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new ho();
    for (const o of l)
      e.has(o) || e.set(o, t.push(o) - 1);
    return i;
  }, i.range = function(l) {
    return arguments.length ? (n = Array.from(l), i) : n.slice();
  }, i.unknown = function(l) {
    return arguments.length ? (a = l, i) : a;
  }, i.copy = function() {
    return Zi(t, n).unknown(a);
  }, wr.apply(i, arguments), i;
}
function Gi() {
  var e = Zi().unknown(void 0), t = e.domain, n = e.range, a = 0, i = 1, l, o, s = !1, c = 0, u = 0, d = 0.5;
  delete e.unknown;
  function h() {
    var m = t().length, p = i < a, y = p ? i : a, b = p ? a : i;
    l = (b - y) / Math.max(1, m - c + u * 2), s && (l = Math.floor(l)), y += (b - y - l * (m - c)) * d, o = l * (1 - c), s && (y = Math.round(y), o = Math.round(o));
    var g = md(m).map(function(f) {
      return y + l * f;
    });
    return n(p ? g.reverse() : g);
  }
  return e.domain = function(m) {
    return arguments.length ? (t(m), h()) : t();
  }, e.range = function(m) {
    return arguments.length ? ([a, i] = m, a = +a, i = +i, h()) : [a, i];
  }, e.rangeRound = function(m) {
    return [a, i] = m, a = +a, i = +i, s = !0, h();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return l;
  }, e.round = function(m) {
    return arguments.length ? (s = !!m, h()) : s;
  }, e.padding = function(m) {
    return arguments.length ? (c = Math.min(1, u = +m), h()) : c;
  }, e.paddingInner = function(m) {
    return arguments.length ? (c = Math.min(1, m), h()) : c;
  }, e.paddingOuter = function(m) {
    return arguments.length ? (u = +m, h()) : u;
  }, e.align = function(m) {
    return arguments.length ? (d = Math.max(0, Math.min(1, m)), h()) : d;
  }, e.copy = function() {
    return Gi(t(), [a, i]).round(s).paddingInner(c).paddingOuter(u).align(d);
  }, wr.apply(h(), arguments);
}
function Us(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Us(t());
  }, e;
}
function fd() {
  return Us(Gi.apply(null, arguments).paddingInner(1));
}
function Ys(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, i = e[n], l = e[a], o;
  return l < i && (o = n, n = a, a = o, o = i, i = l, l = o), e[n] = t.floor(i), e[a] = t.ceil(l), e;
}
function go(e) {
  return Math.log(e);
}
function xo(e) {
  return Math.exp(e);
}
function hd(e) {
  return -Math.log(-e);
}
function pd(e) {
  return -Math.exp(-e);
}
function yd(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function gd(e) {
  return e === 10 ? yd : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function xd(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function vo(e) {
  return (t, n) => -e(-t, n);
}
function vd(e) {
  const t = e(go, xo), n = t.domain;
  let a = 10, i, l;
  function o() {
    return i = xd(a), l = gd(a), n()[0] < 0 ? (i = vo(i), l = vo(l), e(hd, pd)) : e(go, xo), t;
  }
  return t.base = function(s) {
    return arguments.length ? (a = +s, o()) : a;
  }, t.domain = function(s) {
    return arguments.length ? (n(s), o()) : n();
  }, t.ticks = (s) => {
    const c = n();
    let u = c[0], d = c[c.length - 1];
    const h = d < u;
    h && ([u, d] = [d, u]);
    let m = i(u), p = i(d), y, b;
    const g = s == null ? 10 : +s;
    let f = [];
    if (!(a % 1) && p - m < g) {
      if (m = Math.floor(m), p = Math.ceil(p), u > 0) {
        for (; m <= p; ++m)
          for (y = 1; y < a; ++y)
            if (b = m < 0 ? y / l(-m) : y * l(m), !(b < u)) {
              if (b > d)
                break;
              f.push(b);
            }
      } else
        for (; m <= p; ++m)
          for (y = a - 1; y >= 1; --y)
            if (b = m > 0 ? y / l(-m) : y * l(m), !(b < u)) {
              if (b > d)
                break;
              f.push(b);
            }
      f.length * 2 < g && (f = lo(u, d, g));
    } else
      f = lo(m, p, Math.min(p - m, g)).map(l);
    return h ? f.reverse() : f;
  }, t.tickFormat = (s, c) => {
    if (s == null && (s = 10), c == null && (c = a === 10 ? "s" : ","), typeof c != "function" && (!(a % 1) && (c = ju(c)).precision == null && (c.trim = !0), c = qu(c)), s === 1 / 0)
      return c;
    const u = Math.max(1, a * s / t.ticks().length);
    return (d) => {
      let h = d / l(Math.round(i(d)));
      return h * a < a - 0.5 && (h *= a), h <= u ? c(d) : "";
    };
  }, t.nice = () => n(Ys(n(), {
    floor: (s) => l(Math.floor(i(s))),
    ceil: (s) => l(Math.ceil(i(s)))
  })), t;
}
function Xs() {
  const e = vd(Iu()).domain([1, 10]);
  return e.copy = () => Bs(e, Xs()).base(e.base()), wr.apply(e, arguments), e;
}
const Qa = Hs(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Qa.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Hs((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Qa);
Qa.range;
function bd(e, t, n, a, i, l) {
  const o = [
    [ea, 1, Ca],
    [ea, 5, 5 * Ca],
    [ea, 15, 15 * Ca],
    [ea, 30, 30 * Ca],
    [l, 1, Pa],
    [l, 5, 5 * Pa],
    [l, 15, 15 * Pa],
    [l, 30, 30 * Pa],
    [i, 1, Na],
    [i, 3, 3 * Na],
    [i, 6, 6 * Na],
    [i, 12, 12 * Na],
    [a, 1, so],
    [a, 2, 2 * so],
    [n, 1, Xu],
    [t, 1, co],
    [t, 3, 3 * co],
    [e, 1, Hr]
  ];
  function s(u, d, h) {
    const m = d < u;
    m && ([u, d] = [d, u]);
    const p = h && typeof h.range == "function" ? h : c(u, d, h), y = p ? p.range(u, +d + 1) : [];
    return m ? y.reverse() : y;
  }
  function c(u, d, h) {
    const m = Math.abs(d - u) / h, p = Vs(([, , g]) => g).right(o, m);
    if (p === o.length)
      return e.every(oo(u / Hr, d / Hr, h));
    if (p === 0)
      return Qa.every(Math.max(oo(u, d, h), 1));
    const [y, b] = o[m / o[p - 1][2] < o[p][2] / m ? p - 1 : p];
    return y.every(b);
  }
  return [s, c];
}
const [Ed, Ad] = bd(Ws, Rs, Is, Ks, zs, $s);
function Sd(e) {
  return new Date(e);
}
function Td(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Qs(e, t, n, a, i, l, o, s, c, u) {
  var d = Uu(), h = d.invert, m = d.domain, p = u(".%L"), y = u(":%S"), b = u("%I:%M"), g = u("%I %p"), f = u("%a %d"), x = u("%b %d"), E = u("%B"), v = u("%Y");
  function S(A) {
    return (c(A) < A ? p : s(A) < A ? y : o(A) < A ? b : l(A) < A ? g : a(A) < A ? i(A) < A ? f : x : n(A) < A ? E : v)(A);
  }
  return d.invert = function(A) {
    return new Date(h(A));
  }, d.domain = function(A) {
    return arguments.length ? m(Array.from(A, Td)) : m().map(Sd);
  }, d.ticks = function(A) {
    var T = m();
    return e(T[0], T[T.length - 1], A ?? 10);
  }, d.tickFormat = function(A, T) {
    return T == null ? S : u(T);
  }, d.nice = function(A) {
    var T = m();
    return (!A || typeof A.range != "function") && (A = t(T[0], T[T.length - 1], A ?? 10)), A ? m(Ys(T, A)) : d;
  }, d.copy = function() {
    return Bs(d, Qs(e, t, n, a, i, l, o, s, c, u));
  }, d;
}
function kd() {
  return wr.apply(Qs(Ed, Ad, Ws, Rs, Is, Ks, zs, $s, ea, Bu).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var wd = xa("domain", "range", "reverse", "align", "padding", "round");
function ci(e) {
  return wd(Gi(), e);
}
var Cd = xa("domain", "range", "reverse", "align", "padding", "round");
function zn(e) {
  return Cd(fd(), e);
}
var Pd = xa("domain", "range", "reverse", "clamp", "interpolate", "nice", "round");
function Nd(e) {
  return Pd(kd(), e);
}
var Ld = xa("domain", "range", "reverse", "base", "clamp", "interpolate", "nice", "round");
function Za(e) {
  return Ld(Xs(), e);
}
var Od = xa("domain", "range", "reverse", "unknown");
function Ji(e) {
  return Od(Zi(), e);
}
function _d(e) {
  if ((typeof e == "function" || typeof e == "object" && e) && "valueOf" in e) {
    var t = e.valueOf();
    if (typeof t == "number")
      return t;
  }
  return e;
}
function Dd(e, t) {
  var n = e;
  return "ticks" in n ? n.ticks(t) : n.domain().filter(function(a, i, l) {
    return t == null || l.length <= t || i % Math.round((l.length - 1) / t) === 0;
  });
}
function Md(e) {
  return e == null ? void 0 : e.toString();
}
var Sn = [], $d = function() {
  return Sn.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, zd = function() {
  return Sn.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, bo = "ResizeObserver loop completed with undelivered notifications.", Rd = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: bo
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = bo), window.dispatchEvent(e);
}, ma;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(ma || (ma = {}));
var Tn = function(e) {
  return Object.freeze(e);
}, Zs = function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, Tn(this);
  }
  return e;
}(), Gs = function() {
  function e(t, n, a, i) {
    return this.x = t, this.y = n, this.width = a, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Tn(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, n = t.x, a = t.y, i = t.top, l = t.right, o = t.bottom, s = t.left, c = t.width, u = t.height;
    return { x: n, y: a, top: i, right: l, bottom: o, left: s, width: c, height: u };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), el = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, Js = function(e) {
  if (el(e)) {
    var t = e.getBBox(), n = t.width, a = t.height;
    return !n && !a;
  }
  var i = e, l = i.offsetWidth, o = i.offsetHeight;
  return !(l || o || e.getClientRects().length);
}, Eo = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var n = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(n && e instanceof n.Element);
}, Fd = function(e) {
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
}, aa = typeof window < "u" ? window : {}, La = /* @__PURE__ */ new WeakMap(), Ao = /auto|scroll/, Bd = /^tb|vertical/, Vd = /msie|trident/i.test(aa.navigator && aa.navigator.userAgent), jt = function(e) {
  return parseFloat(e || "0");
}, Bn = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new Zs((n ? t : e) || 0, (n ? e : t) || 0);
}, So = Tn({
  devicePixelContentBoxSize: Bn(),
  borderBoxSize: Bn(),
  contentBoxSize: Bn(),
  contentRect: new Gs(0, 0, 0, 0)
}), ec = function(e, t) {
  if (t === void 0 && (t = !1), La.has(e) && !t)
    return La.get(e);
  if (Js(e))
    return La.set(e, So), So;
  var n = getComputedStyle(e), a = el(e) && e.ownerSVGElement && e.getBBox(), i = !Vd && n.boxSizing === "border-box", l = Bd.test(n.writingMode || ""), o = !a && Ao.test(n.overflowY || ""), s = !a && Ao.test(n.overflowX || ""), c = a ? 0 : jt(n.paddingTop), u = a ? 0 : jt(n.paddingRight), d = a ? 0 : jt(n.paddingBottom), h = a ? 0 : jt(n.paddingLeft), m = a ? 0 : jt(n.borderTopWidth), p = a ? 0 : jt(n.borderRightWidth), y = a ? 0 : jt(n.borderBottomWidth), b = a ? 0 : jt(n.borderLeftWidth), g = h + u, f = c + d, x = b + p, E = m + y, v = s ? e.offsetHeight - E - e.clientHeight : 0, S = o ? e.offsetWidth - x - e.clientWidth : 0, A = i ? g + x : 0, T = i ? f + E : 0, O = a ? a.width : jt(n.width) - A - S, w = a ? a.height : jt(n.height) - T - v, C = O + g + S + x, N = w + f + v + E, k = Tn({
    devicePixelContentBoxSize: Bn(Math.round(O * devicePixelRatio), Math.round(w * devicePixelRatio), l),
    borderBoxSize: Bn(C, N, l),
    contentBoxSize: Bn(O, w, l),
    contentRect: new Gs(h, c, O, w)
  });
  return La.set(e, k), k;
}, tc = function(e, t, n) {
  var a = ec(e, n), i = a.borderBoxSize, l = a.contentBoxSize, o = a.devicePixelContentBoxSize;
  switch (t) {
    case ma.DEVICE_PIXEL_CONTENT_BOX:
      return o;
    case ma.BORDER_BOX:
      return i;
    default:
      return l;
  }
}, nc = function() {
  function e(t) {
    var n = ec(t);
    this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = Tn([n.borderBoxSize]), this.contentBoxSize = Tn([n.contentBoxSize]), this.devicePixelContentBoxSize = Tn([n.devicePixelContentBoxSize]);
  }
  return e;
}(), ac = function(e) {
  if (Js(e))
    return 1 / 0;
  for (var t = 0, n = e.parentNode; n; )
    t += 1, n = n.parentNode;
  return t;
}, Hd = function() {
  var e = 1 / 0, t = [];
  Sn.forEach(function(o) {
    if (o.activeTargets.length !== 0) {
      var s = [];
      o.activeTargets.forEach(function(u) {
        var d = new nc(u.target), h = ac(u.target);
        s.push(d), u.lastReportedSize = tc(u.target, u.observedBox), h < e && (e = h);
      }), t.push(function() {
        o.callback.call(o.observer, s, o.observer);
      }), o.activeTargets.splice(0, o.activeTargets.length);
    }
  });
  for (var n = 0, a = t; n < a.length; n++) {
    var i = a[n];
    i();
  }
  return e;
}, To = function(e) {
  Sn.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(i) {
      i.isActive() && (ac(i.target) > e ? n.activeTargets.push(i) : n.skippedTargets.push(i));
    });
  });
}, Wd = function() {
  var e = 0;
  for (To(e); $d(); )
    e = Hd(), To(e);
  return zd() && Rd(), e > 0;
}, Wr, rc = [], Kd = function() {
  return rc.splice(0).forEach(function(e) {
    return e();
  });
}, Id = function(e) {
  if (!Wr) {
    var t = 0, n = document.createTextNode(""), a = { characterData: !0 };
    new MutationObserver(function() {
      return Kd();
    }).observe(n, a), Wr = function() {
      n.textContent = "".concat(t ? t-- : t++);
    };
  }
  rc.push(e), Wr();
}, jd = function(e) {
  Id(function() {
    requestAnimationFrame(e);
  });
}, Ha = 0, qd = function() {
  return !!Ha;
}, Ud = 250, Yd = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, ko = [
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
], wo = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Kr = !1, Xd = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var n = this;
    if (t === void 0 && (t = Ud), !Kr) {
      Kr = !0;
      var a = wo(t);
      jd(function() {
        var i = !1;
        try {
          i = Wd();
        } finally {
          if (Kr = !1, t = a - wo(), !qd())
            return;
          i ? n.run(1e3) : t > 0 ? n.run(t) : n.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, n = function() {
      return t.observer && t.observer.observe(document.body, Yd);
    };
    document.body ? n() : aa.addEventListener("DOMContentLoaded", n);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), ko.forEach(function(n) {
      return aa.addEventListener(n, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), ko.forEach(function(n) {
      return aa.removeEventListener(n, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), ui = new Xd(), Co = function(e) {
  !Ha && e > 0 && ui.start(), Ha += e, !Ha && ui.stop();
}, Qd = function(e) {
  return !el(e) && !Fd(e) && getComputedStyle(e).display === "inline";
}, Zd = function() {
  function e(t, n) {
    this.target = t, this.observedBox = n || ma.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = tc(this.target, this.observedBox, !0);
    return Qd(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), Gd = function() {
  function e(t, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = n;
  }
  return e;
}(), Oa = /* @__PURE__ */ new WeakMap(), Po = function(e, t) {
  for (var n = 0; n < e.length; n += 1)
    if (e[n].target === t)
      return n;
  return -1;
}, _a = function() {
  function e() {
  }
  return e.connect = function(t, n) {
    var a = new Gd(t, n);
    Oa.set(t, a);
  }, e.observe = function(t, n, a) {
    var i = Oa.get(t), l = i.observationTargets.length === 0;
    Po(i.observationTargets, n) < 0 && (l && Sn.push(i), i.observationTargets.push(new Zd(n, a && a.box)), Co(1), ui.schedule());
  }, e.unobserve = function(t, n) {
    var a = Oa.get(t), i = Po(a.observationTargets, n), l = a.observationTargets.length === 1;
    i >= 0 && (l && Sn.splice(Sn.indexOf(a), 1), a.observationTargets.splice(i, 1), Co(-1));
  }, e.disconnect = function(t) {
    var n = this, a = Oa.get(t);
    a.observationTargets.slice().forEach(function(i) {
      return n.unobserve(t, i.target);
    }), a.activeTargets.splice(0, a.activeTargets.length);
  }, e;
}(), Jd = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    _a.connect(this, t);
  }
  return e.prototype.observe = function(t, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Eo(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    _a.observe(this, t, n);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Eo(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    _a.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    _a.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
const em = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ResizeObserver: Jd,
  ResizeObserverEntry: nc,
  ResizeObserverSize: Zs
}, Symbol.toStringTag, { value: "Module" })), tm = /* @__PURE__ */ Qi(em);
var nm = oc, nn = lc(Os), am = lc(Mu), _n = lm(z), rm = tm, im = ["className", "children", "debounceTime", "ignoreDimensions", "parentSizeStyles", "enableDebounceLeadingCall"];
function ic(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (ic = function(i) {
    return i ? n : t;
  })(e);
}
function lm(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var n = ic(t);
  if (n && n.has(e))
    return n.get(e);
  var a = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var l in e)
    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, l) : null;
      o && (o.get || o.set) ? Object.defineProperty(a, l, o) : a[l] = e[l];
    }
  return a.default = e, n && n.set(e, a), a;
}
function lc(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ga() {
  return Ga = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ga.apply(this, arguments);
}
function om(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var sm = [];
function oc(e) {
  var t = e.className, n = e.children, a = e.debounceTime, i = a === void 0 ? 300 : a, l = e.ignoreDimensions, o = l === void 0 ? sm : l, s = e.parentSizeStyles, c = s === void 0 ? {
    width: "100%",
    height: "100%"
  } : s, u = e.enableDebounceLeadingCall, d = u === void 0 ? !0 : u, h = om(e, im), m = (0, _n.useRef)(null), p = (0, _n.useRef)(0), y = (0, _n.useState)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), b = y[0], g = y[1], f = (0, _n.useMemo)(function() {
    var x = Array.isArray(o) ? o : [o];
    return (0, am.default)(function(E) {
      g(function(v) {
        var S = Object.keys(v), A = S.filter(function(O) {
          return v[O] !== E[O];
        }), T = A.every(function(O) {
          return x.includes(O);
        });
        return T ? v : E;
      });
    }, i, {
      leading: d
    });
  }, [i, d, o]);
  return (0, _n.useEffect)(function() {
    var x = new rm.ResizeObserver(function(E) {
      E === void 0 && (E = []), E.forEach(function(v) {
        var S = v.contentRect, A = S.left, T = S.top, O = S.width, w = S.height;
        p.current = window.requestAnimationFrame(function() {
          f({
            width: O,
            height: w,
            top: T,
            left: A
          });
        });
      });
    });
    return m.current && x.observe(m.current), function() {
      window.cancelAnimationFrame(p.current), x.disconnect(), f != null && f.cancel && f.cancel();
    };
  }, [f]), /* @__PURE__ */ _n.default.createElement("div", Ga({
    style: c,
    ref: m,
    className: t
  }, h), n(Ga({}, b, {
    ref: m.current,
    resize: f
  })));
}
oc.propTypes = {
  className: nn.default.string,
  debounceTime: nn.default.number,
  enableDebounceLeadingCall: nn.default.bool,
  ignoreDimensions: nn.default.oneOfType([nn.default.any, nn.default.arrayOf(nn.default.any)]),
  children: nn.default.func.isRequired
};
var Ir = /* @__PURE__ */ new Date(), jr = /* @__PURE__ */ new Date();
function tn(e, t, n, a) {
  function i(l) {
    return e(l = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+l)), l;
  }
  return i.floor = function(l) {
    return e(l = /* @__PURE__ */ new Date(+l)), l;
  }, i.ceil = function(l) {
    return e(l = new Date(l - 1)), t(l, 1), e(l), l;
  }, i.round = function(l) {
    var o = i(l), s = i.ceil(l);
    return l - o < s - l ? o : s;
  }, i.offset = function(l, o) {
    return t(l = /* @__PURE__ */ new Date(+l), o == null ? 1 : Math.floor(o)), l;
  }, i.range = function(l, o, s) {
    var c = [], u;
    if (l = i.ceil(l), s = s == null ? 1 : Math.floor(s), !(l < o) || !(s > 0))
      return c;
    do
      c.push(u = /* @__PURE__ */ new Date(+l)), t(l, s), e(l);
    while (u < l && l < o);
    return c;
  }, i.filter = function(l) {
    return tn(function(o) {
      if (o >= o)
        for (; e(o), !l(o); )
          o.setTime(o - 1);
    }, function(o, s) {
      if (o >= o)
        if (s < 0)
          for (; ++s <= 0; )
            for (; t(o, -1), !l(o); )
              ;
        else
          for (; --s >= 0; )
            for (; t(o, 1), !l(o); )
              ;
    });
  }, n && (i.count = function(l, o) {
    return Ir.setTime(+l), jr.setTime(+o), e(Ir), e(jr), Math.floor(n(Ir, jr));
  }, i.every = function(l) {
    return l = Math.floor(l), !isFinite(l) || !(l > 0) ? null : l > 1 ? i.filter(a ? function(o) {
      return a(o) % l === 0;
    } : function(o) {
      return i.count(0, o) % l === 0;
    }) : i;
  }), i;
}
const cm = 1e3, tl = cm * 60, um = tl * 60, nl = um * 24, sc = nl * 7;
var cc = tn(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * tl) / nl,
  (e) => e.getDate() - 1
);
const uc = cc;
cc.range;
function Pn(e) {
  return tn(function(t) {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setDate(t.getDate() + n * 7);
  }, function(t, n) {
    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * tl) / sc;
  });
}
var dc = Pn(0), Ja = Pn(1), dm = Pn(2), mm = Pn(3), Hn = Pn(4), fm = Pn(5), hm = Pn(6);
dc.range;
Ja.range;
dm.range;
mm.range;
Hn.range;
fm.range;
hm.range;
var al = tn(function(e) {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, function(e, t) {
  e.setFullYear(e.getFullYear() + t);
}, function(e, t) {
  return t.getFullYear() - e.getFullYear();
}, function(e) {
  return e.getFullYear();
});
al.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : tn(function(t) {
    t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setFullYear(t.getFullYear() + n * e);
  });
};
const fa = al;
al.range;
var mc = tn(function(e) {
  e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCDate(e.getUTCDate() + t);
}, function(e, t) {
  return (t - e) / nl;
}, function(e) {
  return e.getUTCDate() - 1;
});
const fc = mc;
mc.range;
function Nn(e) {
  return tn(function(t) {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, function(t, n) {
    return (n - t) / sc;
  });
}
var hc = Nn(0), er = Nn(1), pm = Nn(2), ym = Nn(3), Wn = Nn(4), gm = Nn(5), xm = Nn(6);
hc.range;
er.range;
pm.range;
ym.range;
Wn.range;
gm.range;
xm.range;
var rl = tn(function(e) {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, function(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}, function(e) {
  return e.getUTCFullYear();
});
rl.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : tn(function(t) {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setUTCFullYear(t.getUTCFullYear() + n * e);
  });
};
const ha = rl;
rl.range;
function qr(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Ur(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Qn(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function vm(e) {
  var t = e.dateTime, n = e.date, a = e.time, i = e.periods, l = e.days, o = e.shortDays, s = e.months, c = e.shortMonths, u = Zn(i), d = Gn(i), h = Zn(l), m = Gn(l), p = Zn(o), y = Gn(o), b = Zn(s), g = Gn(s), f = Zn(c), x = Gn(c), E = {
    a: H,
    A: U,
    b: Y,
    B: R,
    c: null,
    d: Mo,
    e: Mo,
    f: Wm,
    g: Gm,
    G: ef,
    H: Bm,
    I: Vm,
    j: Hm,
    L: pc,
    m: Km,
    M: Im,
    p: $,
    q: j,
    Q: Ro,
    s: Fo,
    S: jm,
    u: qm,
    U: Um,
    V: Ym,
    w: Xm,
    W: Qm,
    x: null,
    X: null,
    y: Zm,
    Y: Jm,
    Z: tf,
    "%": zo
  }, v = {
    a: q,
    A: X,
    b: ne,
    B: de,
    c: null,
    d: $o,
    e: $o,
    f: lf,
    g: yf,
    G: xf,
    H: nf,
    I: af,
    j: rf,
    L: gc,
    m: of,
    M: sf,
    p: Ae,
    q: we,
    Q: Ro,
    s: Fo,
    S: cf,
    u: uf,
    U: df,
    V: mf,
    w: ff,
    W: hf,
    x: null,
    X: null,
    y: pf,
    Y: gf,
    Z: vf,
    "%": zo
  }, S = {
    a: C,
    A: N,
    b: k,
    B: _,
    c: W,
    d: _o,
    e: _o,
    f: $m,
    g: Oo,
    G: Lo,
    H: Do,
    I: Do,
    j: Om,
    L: Mm,
    m: Lm,
    M: _m,
    p: w,
    q: Nm,
    Q: Rm,
    s: Fm,
    S: Dm,
    u: Tm,
    U: km,
    V: wm,
    w: Sm,
    W: Cm,
    x: F,
    X: V,
    y: Oo,
    Y: Lo,
    Z: Pm,
    "%": zm
  };
  E.x = A(n, E), E.X = A(a, E), E.c = A(t, E), v.x = A(n, v), v.X = A(a, v), v.c = A(t, v);
  function A(G, K) {
    return function(ae) {
      var D = [], ce = -1, le = 0, pe = G.length, he, Ee, Ce;
      for (ae instanceof Date || (ae = /* @__PURE__ */ new Date(+ae)); ++ce < pe; )
        G.charCodeAt(ce) === 37 && (D.push(G.slice(le, ce)), (Ee = No[he = G.charAt(++ce)]) != null ? he = G.charAt(++ce) : Ee = he === "e" ? " " : "0", (Ce = K[he]) && (he = Ce(ae, Ee)), D.push(he), le = ce + 1);
      return D.push(G.slice(le, ce)), D.join("");
    };
  }
  function T(G, K) {
    return function(ae) {
      var D = Qn(1900, void 0, 1), ce = O(D, G, ae += "", 0), le, pe;
      if (ce != ae.length)
        return null;
      if ("Q" in D)
        return new Date(D.Q);
      if ("s" in D)
        return new Date(D.s * 1e3 + ("L" in D ? D.L : 0));
      if (K && !("Z" in D) && (D.Z = 0), "p" in D && (D.H = D.H % 12 + D.p * 12), D.m === void 0 && (D.m = "q" in D ? D.q : 0), "V" in D) {
        if (D.V < 1 || D.V > 53)
          return null;
        "w" in D || (D.w = 1), "Z" in D ? (le = Ur(Qn(D.y, 0, 1)), pe = le.getUTCDay(), le = pe > 4 || pe === 0 ? er.ceil(le) : er(le), le = fc.offset(le, (D.V - 1) * 7), D.y = le.getUTCFullYear(), D.m = le.getUTCMonth(), D.d = le.getUTCDate() + (D.w + 6) % 7) : (le = qr(Qn(D.y, 0, 1)), pe = le.getDay(), le = pe > 4 || pe === 0 ? Ja.ceil(le) : Ja(le), le = uc.offset(le, (D.V - 1) * 7), D.y = le.getFullYear(), D.m = le.getMonth(), D.d = le.getDate() + (D.w + 6) % 7);
      } else
        ("W" in D || "U" in D) && ("w" in D || (D.w = "u" in D ? D.u % 7 : "W" in D ? 1 : 0), pe = "Z" in D ? Ur(Qn(D.y, 0, 1)).getUTCDay() : qr(Qn(D.y, 0, 1)).getDay(), D.m = 0, D.d = "W" in D ? (D.w + 6) % 7 + D.W * 7 - (pe + 5) % 7 : D.w + D.U * 7 - (pe + 6) % 7);
      return "Z" in D ? (D.H += D.Z / 100 | 0, D.M += D.Z % 100, Ur(D)) : qr(D);
    };
  }
  function O(G, K, ae, D) {
    for (var ce = 0, le = K.length, pe = ae.length, he, Ee; ce < le; ) {
      if (D >= pe)
        return -1;
      if (he = K.charCodeAt(ce++), he === 37) {
        if (he = K.charAt(ce++), Ee = S[he in No ? K.charAt(ce++) : he], !Ee || (D = Ee(G, ae, D)) < 0)
          return -1;
      } else if (he != ae.charCodeAt(D++))
        return -1;
    }
    return D;
  }
  function w(G, K, ae) {
    var D = u.exec(K.slice(ae));
    return D ? (G.p = d.get(D[0].toLowerCase()), ae + D[0].length) : -1;
  }
  function C(G, K, ae) {
    var D = p.exec(K.slice(ae));
    return D ? (G.w = y.get(D[0].toLowerCase()), ae + D[0].length) : -1;
  }
  function N(G, K, ae) {
    var D = h.exec(K.slice(ae));
    return D ? (G.w = m.get(D[0].toLowerCase()), ae + D[0].length) : -1;
  }
  function k(G, K, ae) {
    var D = f.exec(K.slice(ae));
    return D ? (G.m = x.get(D[0].toLowerCase()), ae + D[0].length) : -1;
  }
  function _(G, K, ae) {
    var D = b.exec(K.slice(ae));
    return D ? (G.m = g.get(D[0].toLowerCase()), ae + D[0].length) : -1;
  }
  function W(G, K, ae) {
    return O(G, t, K, ae);
  }
  function F(G, K, ae) {
    return O(G, n, K, ae);
  }
  function V(G, K, ae) {
    return O(G, a, K, ae);
  }
  function H(G) {
    return o[G.getDay()];
  }
  function U(G) {
    return l[G.getDay()];
  }
  function Y(G) {
    return c[G.getMonth()];
  }
  function R(G) {
    return s[G.getMonth()];
  }
  function $(G) {
    return i[+(G.getHours() >= 12)];
  }
  function j(G) {
    return 1 + ~~(G.getMonth() / 3);
  }
  function q(G) {
    return o[G.getUTCDay()];
  }
  function X(G) {
    return l[G.getUTCDay()];
  }
  function ne(G) {
    return c[G.getUTCMonth()];
  }
  function de(G) {
    return s[G.getUTCMonth()];
  }
  function Ae(G) {
    return i[+(G.getUTCHours() >= 12)];
  }
  function we(G) {
    return 1 + ~~(G.getUTCMonth() / 3);
  }
  return {
    format: function(G) {
      var K = A(G += "", E);
      return K.toString = function() {
        return G;
      }, K;
    },
    parse: function(G) {
      var K = T(G += "", !1);
      return K.toString = function() {
        return G;
      }, K;
    },
    utcFormat: function(G) {
      var K = A(G += "", v);
      return K.toString = function() {
        return G;
      }, K;
    },
    utcParse: function(G) {
      var K = T(G += "", !0);
      return K.toString = function() {
        return G;
      }, K;
    }
  };
}
var No = { "-": "", _: " ", 0: "0" }, ft = /^\s*\d+/, bm = /^%/, Em = /[\\^$*+?|[\]().{}]/g;
function Ke(e, t, n) {
  var a = e < 0 ? "-" : "", i = (a ? -e : e) + "", l = i.length;
  return a + (l < n ? new Array(n - l + 1).join(t) + i : i);
}
function Am(e) {
  return e.replace(Em, "\\$&");
}
function Zn(e) {
  return new RegExp("^(?:" + e.map(Am).join("|") + ")", "i");
}
function Gn(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function Sm(e, t, n) {
  var a = ft.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function Tm(e, t, n) {
  var a = ft.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function km(e, t, n) {
  var a = ft.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function wm(e, t, n) {
  var a = ft.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function Cm(e, t, n) {
  var a = ft.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function Lo(e, t, n) {
  var a = ft.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function Oo(e, t, n) {
  var a = ft.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function Pm(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function Nm(e, t, n) {
  var a = ft.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function Lm(e, t, n) {
  var a = ft.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function _o(e, t, n) {
  var a = ft.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function Om(e, t, n) {
  var a = ft.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function Do(e, t, n) {
  var a = ft.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function _m(e, t, n) {
  var a = ft.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function Dm(e, t, n) {
  var a = ft.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function Mm(e, t, n) {
  var a = ft.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function $m(e, t, n) {
  var a = ft.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function zm(e, t, n) {
  var a = bm.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function Rm(e, t, n) {
  var a = ft.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function Fm(e, t, n) {
  var a = ft.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function Mo(e, t) {
  return Ke(e.getDate(), t, 2);
}
function Bm(e, t) {
  return Ke(e.getHours(), t, 2);
}
function Vm(e, t) {
  return Ke(e.getHours() % 12 || 12, t, 2);
}
function Hm(e, t) {
  return Ke(1 + uc.count(fa(e), e), t, 3);
}
function pc(e, t) {
  return Ke(e.getMilliseconds(), t, 3);
}
function Wm(e, t) {
  return pc(e, t) + "000";
}
function Km(e, t) {
  return Ke(e.getMonth() + 1, t, 2);
}
function Im(e, t) {
  return Ke(e.getMinutes(), t, 2);
}
function jm(e, t) {
  return Ke(e.getSeconds(), t, 2);
}
function qm(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Um(e, t) {
  return Ke(dc.count(fa(e) - 1, e), t, 2);
}
function yc(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Hn(e) : Hn.ceil(e);
}
function Ym(e, t) {
  return e = yc(e), Ke(Hn.count(fa(e), e) + (fa(e).getDay() === 4), t, 2);
}
function Xm(e) {
  return e.getDay();
}
function Qm(e, t) {
  return Ke(Ja.count(fa(e) - 1, e), t, 2);
}
function Zm(e, t) {
  return Ke(e.getFullYear() % 100, t, 2);
}
function Gm(e, t) {
  return e = yc(e), Ke(e.getFullYear() % 100, t, 2);
}
function Jm(e, t) {
  return Ke(e.getFullYear() % 1e4, t, 4);
}
function ef(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? Hn(e) : Hn.ceil(e), Ke(e.getFullYear() % 1e4, t, 4);
}
function tf(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Ke(t / 60 | 0, "0", 2) + Ke(t % 60, "0", 2);
}
function $o(e, t) {
  return Ke(e.getUTCDate(), t, 2);
}
function nf(e, t) {
  return Ke(e.getUTCHours(), t, 2);
}
function af(e, t) {
  return Ke(e.getUTCHours() % 12 || 12, t, 2);
}
function rf(e, t) {
  return Ke(1 + fc.count(ha(e), e), t, 3);
}
function gc(e, t) {
  return Ke(e.getUTCMilliseconds(), t, 3);
}
function lf(e, t) {
  return gc(e, t) + "000";
}
function of(e, t) {
  return Ke(e.getUTCMonth() + 1, t, 2);
}
function sf(e, t) {
  return Ke(e.getUTCMinutes(), t, 2);
}
function cf(e, t) {
  return Ke(e.getUTCSeconds(), t, 2);
}
function uf(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function df(e, t) {
  return Ke(hc.count(ha(e) - 1, e), t, 2);
}
function xc(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Wn(e) : Wn.ceil(e);
}
function mf(e, t) {
  return e = xc(e), Ke(Wn.count(ha(e), e) + (ha(e).getUTCDay() === 4), t, 2);
}
function ff(e) {
  return e.getUTCDay();
}
function hf(e, t) {
  return Ke(er.count(ha(e) - 1, e), t, 2);
}
function pf(e, t) {
  return Ke(e.getUTCFullYear() % 100, t, 2);
}
function yf(e, t) {
  return e = xc(e), Ke(e.getUTCFullYear() % 100, t, 2);
}
function gf(e, t) {
  return Ke(e.getUTCFullYear() % 1e4, t, 4);
}
function xf(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Wn(e) : Wn.ceil(e), Ke(e.getUTCFullYear() % 1e4, t, 4);
}
function vf() {
  return "+0000";
}
function zo() {
  return "%";
}
function Ro(e) {
  return +e;
}
function Fo(e) {
  return Math.floor(+e / 1e3);
}
var Dn, di, vc;
bf({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function bf(e) {
  return Dn = vm(e), di = Dn.format, vc = Dn.parse, Dn.utcFormat, Dn.utcParse, Dn;
}
const De = z.createContext({}), Fe = {
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
    if (Fe.str(e) || Fe.num(e))
      return e === t;
    if (Fe.obj(e) && Fe.obj(t) && Object.keys(e).length + Object.keys(t).length === 0)
      return !0;
    let n;
    for (n in e)
      if (!(n in t))
        return !1;
    for (n in t)
      if (e[n] !== t[n])
        return !1;
    return Fe.und(n) ? e === t : !0;
  }
};
function Ef(e, t) {
  return t === void 0 && (t = !0), (n) => (Fe.arr(n) ? n : Object.keys(n)).reduce((a, i) => {
    const l = t ? i[0].toLowerCase() + i.substring(1) : i;
    return a[l] = e(l), a;
  }, e);
}
function bc() {
  const e = z.useState(!1), t = e[1];
  return z.useCallback(() => t((a) => !a), []);
}
function fn(e, t) {
  return Fe.und(e) || Fe.nul(e) ? t : e;
}
function Rn(e) {
  return Fe.und(e) ? [] : Fe.arr(e) ? e : [e];
}
function Rt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  return Fe.fun(e) ? e(...n) : e;
}
function Af(e) {
  return e.to, e.from, e.config, e.onStart, e.onRest, e.onFrame, e.children, e.reset, e.reverse, e.force, e.immediate, e.delay, e.attach, e.destroyed, e.interpolateTo, e.ref, e.lazy, Xt(e, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);
}
function Yr(e) {
  const t = Af(e);
  if (Fe.und(t))
    return Ze({
      to: t
    }, e);
  const n = Object.keys(e).reduce((a, i) => Fe.und(t[i]) ? Ze({}, a, {
    [i]: e[i]
  }) : a, {});
  return Ze({
    to: t
  }, n);
}
function Sf(e, t) {
  return t && (Fe.fun(t) ? t(e) : Fe.obj(t) && (t.current = e)), e;
}
class Ft {
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
class mi extends Ft {
  constructor() {
    super(...arguments), this.payload = [], this.attach = () => this.payload.forEach((t) => t instanceof Ft && t.addChild(this)), this.detach = () => this.payload.forEach((t) => t instanceof Ft && t.removeChild(this));
  }
}
class Ec extends Ft {
  constructor() {
    super(...arguments), this.payload = {}, this.attach = () => Object.values(this.payload).forEach((t) => t instanceof Ft && t.addChild(this)), this.detach = () => Object.values(this.payload).forEach((t) => t instanceof Ft && t.removeChild(this));
  }
  getValue(t) {
    t === void 0 && (t = !1);
    const n = {};
    for (const a in this.payload) {
      const i = this.payload[a];
      t && !(i instanceof Ft) || (n[a] = i instanceof Ft ? i[t ? "getAnimatedValue" : "getValue"]() : i);
    }
    return n;
  }
  getAnimatedValue() {
    return this.getValue(!0);
  }
}
let il;
function Tf(e, t) {
  il = {
    fn: e,
    transform: t
  };
}
let Ac;
function kf(e) {
  Ac = e;
}
let Sc = (e) => typeof window < "u" ? window.requestAnimationFrame(e) : -1, tr;
function wf(e) {
  tr = e;
}
let Tc = () => Date.now(), Cf = (e) => e.current, kc;
function Pf(e) {
  kc = e;
}
class Nf extends Ec {
  constructor(t, n) {
    super(), this.update = void 0, this.payload = t.style ? Ze({}, t, {
      style: kc(t.style)
    }) : t, this.update = n, this.attach();
  }
}
const Lf = (e) => Fe.fun(e) && !(e.prototype instanceof r.Component), Of = (e) => z.forwardRef((n, a) => {
  const i = bc(), l = z.useRef(!0), o = z.useRef(null), s = z.useRef(null), c = z.useCallback((m) => {
    const p = o.current, y = () => {
      let b = !1;
      s.current && (b = il.fn(s.current, o.current.getAnimatedValue())), (!s.current || b === !1) && i();
    };
    o.current = new Nf(m, y), p && p.detach();
  }, []);
  z.useEffect(() => () => {
    l.current = !1, o.current && o.current.detach();
  }, []), z.useImperativeHandle(a, () => Cf(s)), c(n);
  const u = o.current.getValue();
  u.scrollTop, u.scrollLeft;
  const d = Xt(u, ["scrollTop", "scrollLeft"]), h = Lf(e) ? void 0 : (m) => s.current = Sf(m, a);
  return r.createElement(e, Ze({}, d, {
    ref: h
  }));
});
let ra = !1;
const kn = /* @__PURE__ */ new Set(), wc = () => {
  if (!ra)
    return !1;
  let e = Tc();
  for (let t of kn) {
    let n = !1;
    for (let a = 0; a < t.configs.length; a++) {
      let i = t.configs[a], l, o;
      for (let s = 0; s < i.animatedValues.length; s++) {
        let c = i.animatedValues[s];
        if (c.done)
          continue;
        let u = i.fromValues[s], d = i.toValues[s], h = c.lastPosition, m = d instanceof Ft, p = Array.isArray(i.initialVelocity) ? i.initialVelocity[s] : i.initialVelocity;
        if (m && (d = d.getValue()), i.immediate) {
          c.setValue(d), c.done = !0;
          continue;
        }
        if (typeof u == "string" || typeof d == "string") {
          c.setValue(d), c.done = !0;
          continue;
        }
        if (i.duration !== void 0)
          h = u + i.easing((e - c.startTime) / i.duration) * (d - u), l = e >= c.startTime + i.duration;
        else if (i.decay)
          h = u + p / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (e - c.startTime))), l = Math.abs(c.lastPosition - h) < 0.1, l && (d = h);
        else {
          o = c.lastTime !== void 0 ? c.lastTime : e, p = c.lastVelocity !== void 0 ? c.lastVelocity : i.initialVelocity, e > o + 64 && (o = e);
          let y = Math.floor(e - o);
          for (let x = 0; x < y; ++x) {
            let E = -i.tension * (h - d), v = -i.friction * p, S = (E + v) / i.mass;
            p = p + S * 1 / 1e3, h = h + p * 1 / 1e3;
          }
          let b = i.clamp && i.tension !== 0 ? u < d ? h > d : h < d : !1, g = Math.abs(p) <= i.precision, f = i.tension !== 0 ? Math.abs(d - h) <= i.precision : !0;
          l = b || g && f, c.lastVelocity = p, c.lastTime = e;
        }
        m && !i.toValues[s].done && (l = !1), l ? (c.value !== d && (h = d), c.done = !0) : n = !0, c.setValue(h), c.lastPosition = h;
      }
      t.props.onFrame && (t.values[i.name] = i.interpolation.getValue());
    }
    t.props.onFrame && t.props.onFrame(t.values), n || (kn.delete(t), t.stop(!0));
  }
  return kn.size ? Sc(wc) : ra = !1, ra;
}, _f = (e) => {
  kn.has(e) || kn.add(e), ra || (ra = !0, Sc(wc));
}, Df = (e) => {
  kn.has(e) && kn.delete(e);
};
function nr(e, t, n) {
  if (typeof e == "function")
    return e;
  if (Array.isArray(e))
    return nr({
      range: e,
      output: t,
      extrapolate: n
    });
  if (tr && typeof e.output[0] == "string")
    return tr(e);
  const a = e, i = a.output, l = a.range || [0, 1], o = a.extrapolateLeft || a.extrapolate || "extend", s = a.extrapolateRight || a.extrapolate || "extend", c = a.easing || ((u) => u);
  return (u) => {
    const d = $f(u, l);
    return Mf(u, l[d], l[d + 1], i[d], i[d + 1], c, o, s, a.map);
  };
}
function Mf(e, t, n, a, i, l, o, s, c) {
  let u = c ? c(e) : e;
  if (u < t) {
    if (o === "identity")
      return u;
    o === "clamp" && (u = t);
  }
  if (u > n) {
    if (s === "identity")
      return u;
    s === "clamp" && (u = n);
  }
  return a === i ? a : t === n ? e <= t ? a : i : (t === -1 / 0 ? u = -u : n === 1 / 0 ? u = u - t : u = (u - t) / (n - t), u = l(u), a === -1 / 0 ? u = -u : i === 1 / 0 ? u = u + a : u = u * (i - a) + a, u);
}
function $f(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
class Kn extends mi {
  constructor(t, n, a, i) {
    super(), this.calc = void 0, this.payload = t instanceof mi && !(t instanceof Kn) ? t.getPayload() : Array.isArray(t) ? t : [t], this.calc = nr(n, a, i);
  }
  getValue() {
    return this.calc(...this.payload.map((t) => t.getValue()));
  }
  updateConfig(t, n, a) {
    this.calc = nr(t, n, a);
  }
  interpolate(t, n, a) {
    return new Kn(this, t, n, a);
  }
}
const zf = (e, t, n) => e && new Kn(e, t, n);
function Cc(e, t) {
  "update" in e ? t.add(e) : e.getChildren().forEach((n) => Cc(n, t));
}
class fi extends Ft {
  constructor(t) {
    var n;
    super(), n = this, this.animatedStyles = /* @__PURE__ */ new Set(), this.value = void 0, this.startPosition = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.startTime = void 0, this.lastTime = void 0, this.done = !1, this.setValue = function(a, i) {
      i === void 0 && (i = !0), n.value = a, i && n.flush();
    }, this.value = t, this.startPosition = t, this.lastPosition = t;
  }
  flush() {
    this.animatedStyles.size === 0 && Cc(this, this.animatedStyles), this.animatedStyles.forEach((t) => t.update());
  }
  clearStyles() {
    this.animatedStyles.clear();
  }
  getValue() {
    return this.value;
  }
  interpolate(t, n, a) {
    return new Kn(this, t, n, a);
  }
}
class Rf extends mi {
  constructor(t) {
    super(), this.payload = t.map((n) => new fi(n));
  }
  setValue(t, n) {
    n === void 0 && (n = !0), Array.isArray(t) ? t.length === this.payload.length && t.forEach((a, i) => this.payload[i].setValue(a, n)) : this.payload.forEach((a) => a.setValue(t, n));
  }
  getValue() {
    return this.payload.map((t) => t.getValue());
  }
  interpolate(t, n) {
    return new Kn(this, t, n);
  }
}
let Ff = 0;
class Bf {
  constructor() {
    this.id = void 0, this.idle = !0, this.hasChanged = !1, this.guid = 0, this.local = 0, this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.values = {}, this.configs = [], this.listeners = [], this.queue = [], this.localQueue = void 0, this.getValues = () => this.interpolations, this.id = Ff++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */
  update(t) {
    if (!t)
      return this;
    const n = Yr(t), a = n.delay, i = a === void 0 ? 0 : a, l = n.to, o = Xt(n, ["delay", "to"]);
    if (Fe.arr(l) || Fe.fun(l))
      this.queue.push(Ze({}, o, {
        delay: i,
        to: l
      }));
    else if (l) {
      let s = {};
      Object.entries(l).forEach((c) => {
        let u = c[0], d = c[1];
        const h = Ze({
          to: {
            [u]: d
          },
          delay: Rt(i, u)
        }, o), m = s[h.delay] && s[h.delay].to;
        s[h.delay] = Ze({}, s[h.delay], h, {
          to: Ze({}, m, h.to)
        });
      }), this.queue = Object.values(s);
    }
    return this.queue = this.queue.sort((s, c) => s.delay - c.delay), this.diff(o), this;
  }
  /** start(onEnd)
   *  This function either executes a queue, if present, or starts the frameloop, which animates */
  start(t) {
    if (this.queue.length) {
      this.idle = !1, this.localQueue && this.localQueue.forEach((i) => {
        let l = i.from, o = l === void 0 ? {} : l, s = i.to, c = s === void 0 ? {} : s;
        Fe.obj(o) && (this.merged = Ze({}, o, this.merged)), Fe.obj(c) && (this.merged = Ze({}, this.merged, c));
      });
      const n = this.local = ++this.guid, a = this.localQueue = this.queue;
      this.queue = [], a.forEach((i, l) => {
        let o = i.delay, s = Xt(i, ["delay"]);
        const c = (d) => {
          l === a.length - 1 && n === this.guid && d && (this.idle = !0, this.props.onRest && this.props.onRest(this.merged)), t && t();
        };
        let u = Fe.arr(s.to) || Fe.fun(s.to);
        o ? setTimeout(() => {
          n === this.guid && (u ? this.runAsync(s, c) : this.diff(s).start(c));
        }, o) : u ? this.runAsync(s, c) : this.diff(s).start(c);
      });
    } else
      Fe.fun(t) && this.listeners.push(t), this.props.onStart && this.props.onStart(), _f(this);
    return this;
  }
  stop(t) {
    return this.listeners.forEach((n) => n(t)), this.listeners = [], this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */
  pause(t) {
    return this.stop(!0), t && Df(this), this;
  }
  runAsync(t, n) {
    var a = this;
    t.delay;
    let i = Xt(t, ["delay"]);
    const l = this.local;
    let o = Promise.resolve(void 0);
    if (Fe.arr(i.to))
      for (let s = 0; s < i.to.length; s++) {
        const c = s, u = Ze({}, i, Yr(i.to[c]));
        Fe.arr(u.config) && (u.config = u.config[c]), o = o.then(() => {
          if (l === this.guid)
            return new Promise((d) => this.diff(u).start(d));
        });
      }
    else if (Fe.fun(i.to)) {
      let s = 0, c;
      o = o.then(() => i.to(
        // next(props)
        (u) => {
          const d = Ze({}, i, Yr(u));
          if (Fe.arr(d.config) && (d.config = d.config[s]), s++, l === this.guid)
            return c = new Promise((h) => this.diff(d).start(h));
        },
        // cancel()
        function(u) {
          return u === void 0 && (u = !0), a.stop(u);
        }
      ).then(() => c));
    }
    o.then(n);
  }
  diff(t) {
    this.props = Ze({}, this.props, t);
    let n = this.props, a = n.from, i = a === void 0 ? {} : a, l = n.to, o = l === void 0 ? {} : l, s = n.config, c = s === void 0 ? {} : s, u = n.reverse, d = n.attach, h = n.reset, m = n.immediate;
    if (u) {
      var p = [o, i];
      i = p[0], o = p[1];
    }
    this.merged = Ze({}, i, this.merged, o), this.hasChanged = !1;
    let y = d && d(this);
    if (this.animations = Object.entries(this.merged).reduce((b, g) => {
      let f = g[0], x = g[1], E = b[f] || {};
      const v = Fe.num(x), S = Fe.str(x) && !x.startsWith("#") && !/\d/.test(x) && !Ac[x], A = Fe.arr(x), T = !v && !A && !S;
      let O = Fe.und(i[f]) ? x : i[f], w = v || A || S ? x : 1, C = Rt(c, f);
      y && (w = y.animations[f].parent);
      let N = E.parent, k = E.interpolation, _ = Rn(y ? w.getPayload() : w), W, F = x;
      T && (F = tr({
        range: [0, 1],
        output: [x, x]
      })(1));
      let V = k && k.getValue();
      const U = !Fe.und(N) && E.animatedValues.some((j) => !j.done), Y = !Fe.equ(F, V), R = !Fe.equ(F, E.previous), $ = !Fe.equ(C, E.config);
      if (h || R && Y || $) {
        if (v || S)
          N = k = E.parent || new fi(O);
        else if (A)
          N = k = E.parent || new Rf(O);
        else if (T) {
          let j = E.interpolation && E.interpolation.calc(E.parent.value);
          j = j !== void 0 && !h ? j : O, E.parent ? (N = E.parent, N.setValue(0, !1)) : N = new fi(0);
          const q = {
            output: [j, x]
          };
          E.interpolation ? (k = E.interpolation, E.interpolation.updateConfig(q)) : k = N.interpolate(q);
        }
        return _ = Rn(y ? w.getPayload() : w), W = Rn(N.getPayload()), h && !T && N.setValue(O, !1), this.hasChanged = !0, W.forEach((j) => {
          j.startPosition = j.value, j.lastPosition = j.value, j.lastVelocity = U ? j.lastVelocity : void 0, j.lastTime = U ? j.lastTime : void 0, j.startTime = Tc(), j.done = !1, j.animatedStyles.clear();
        }), Rt(m, f) && N.setValue(T ? w : x, !1), Ze({}, b, {
          [f]: Ze({}, E, {
            name: f,
            parent: N,
            interpolation: k,
            animatedValues: W,
            toValues: _,
            previous: F,
            config: C,
            fromValues: Rn(N.getValue()),
            immediate: Rt(m, f),
            initialVelocity: fn(C.velocity, 0),
            clamp: fn(C.clamp, !1),
            precision: fn(C.precision, 0.01),
            tension: fn(C.tension, 170),
            friction: fn(C.friction, 26),
            mass: fn(C.mass, 1),
            duration: C.duration,
            easing: fn(C.easing, (j) => j),
            decay: C.decay
          })
        });
      } else
        return Y ? b : (T && (N.setValue(1, !1), k.updateConfig({
          output: [F, F]
        })), N.done = !0, this.hasChanged = !0, Ze({}, b, {
          [f]: Ze({}, b[f], {
            previous: F
          })
        }));
    }, this.animations), this.hasChanged) {
      this.configs = Object.values(this.animations), this.values = {}, this.interpolations = {};
      for (let b in this.animations)
        this.interpolations[b] = this.animations[b].interpolation, this.values[b] = this.animations[b].interpolation.getValue();
    }
    return this;
  }
  destroy() {
    this.stop(), this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.values = {}, this.configs = [], this.local = 0;
  }
}
let Vf = 0;
const Wa = "enter", Xr = "leave", Qr = "update", Hf = (e, t) => (typeof t == "function" ? e.map(t) : Rn(t)).map(String), hi = (e) => {
  let t = e.items, n = e.keys, a = n === void 0 ? (l) => l : n, i = Xt(e, ["items", "keys"]);
  return t = Rn(t !== void 0 ? t : null), Ze({
    items: t,
    keys: Hf(t, a)
  }, i);
};
function Wf(e, t, n) {
  const a = Ze({
    items: e,
    keys: t || ((x) => x)
  }, n), i = hi(a), l = i.lazy, o = l === void 0 ? !1 : l;
  i.unique;
  const s = i.reset, c = s === void 0 ? !1 : s;
  i.enter, i.leave, i.update;
  const u = i.onDestroyed;
  i.keys, i.items;
  const d = i.onFrame, h = i.onRest, m = i.onStart, p = i.ref, y = Xt(i, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]), b = bc(), g = z.useRef(!1), f = z.useRef({
    mounted: !1,
    first: !0,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!a.ref,
    instances: !g.current && /* @__PURE__ */ new Map(),
    forceUpdate: b
  });
  return z.useImperativeHandle(a.ref, () => ({
    start: () => Promise.all(Array.from(f.current.instances).map((x) => {
      let E = x[1];
      return new Promise((v) => E.start(v));
    })),
    stop: (x) => Array.from(f.current.instances).forEach((E) => E[1].stop(x)),
    get controllers() {
      return Array.from(f.current.instances).map((x) => x[1]);
    }
  })), f.current = Kf(f.current, a), f.current.changed && f.current.transitions.forEach((x) => {
    const E = x.slot, v = x.from, S = x.to, A = x.config, T = x.trail, O = x.key, w = x.item;
    f.current.instances.has(O) || f.current.instances.set(O, new Bf());
    const C = f.current.instances.get(O), N = Ze({}, y, {
      to: S,
      from: v,
      config: A,
      ref: p,
      onRest: (k) => {
        f.current.mounted && (x.destroyed && (!p && !o && Bo(f, O), u && u(w)), !Array.from(f.current.instances).some((F) => !F[1].idle) && (p || o) && f.current.deleted.length > 0 && Bo(f), h && h(w, E, k));
      },
      onStart: m && (() => m(w, E)),
      onFrame: d && ((k) => d(w, E, k)),
      delay: T,
      reset: c && E === Wa
      // Update controller
    });
    C.update(N), f.current.paused || C.start();
  }), z.useEffect(() => (f.current.mounted = g.current = !0, () => {
    f.current.mounted = g.current = !1, Array.from(f.current.instances).map((x) => x[1].destroy()), f.current.instances.clear();
  }), []), f.current.transitions.map((x) => {
    let E = x.item, v = x.slot, S = x.key;
    return {
      item: E,
      key: S,
      state: v,
      props: f.current.instances.get(S).getValues()
    };
  });
}
function Bo(e, t) {
  const n = e.current.deleted;
  for (let a of n) {
    let i = a.key;
    const l = (o) => o.key !== i;
    (Fe.und(t) || t === i) && (e.current.instances.delete(i), e.current.transitions = e.current.transitions.filter(l), e.current.deleted = e.current.deleted.filter(l));
  }
  e.current.forceUpdate();
}
function Kf(e, t) {
  let n = e.first, a = e.prevProps, i = Xt(e, ["first", "prevProps"]), l = hi(t), o = l.items, s = l.keys, c = l.initial, u = l.from, d = l.enter, h = l.leave, m = l.update, p = l.trail, y = p === void 0 ? 0 : p, b = l.unique, g = l.config, f = l.order, x = f === void 0 ? [Wa, Xr, Qr] : f, E = hi(a), v = E.keys, S = E.items, A = Ze({}, i.current), T = [...i.deleted], O = Object.keys(A), w = new Set(O), C = new Set(s), N = s.filter((V) => !w.has(V)), k = i.transitions.filter((V) => !V.destroyed && !C.has(V.originalKey)).map((V) => V.originalKey), _ = s.filter((V) => w.has(V)), W = -y;
  for (; x.length; )
    switch (x.shift()) {
      case Wa: {
        N.forEach((H, U) => {
          b && T.find((j) => j.originalKey === H) && (T = T.filter((j) => j.originalKey !== H));
          const Y = s.indexOf(H), R = o[Y], $ = n && c !== void 0 ? "initial" : Wa;
          A[H] = {
            slot: $,
            originalKey: H,
            key: b ? String(H) : Vf++,
            item: R,
            trail: W = W + y,
            config: Rt(g, R, $),
            from: Rt(n && c !== void 0 ? c || {} : u, R),
            to: Rt(d, R)
          };
        });
        break;
      }
      case Xr: {
        k.forEach((H) => {
          const U = v.indexOf(H), Y = S[U], R = Xr;
          T.unshift(Ze({}, A[H], {
            slot: R,
            destroyed: !0,
            left: v[Math.max(0, U - 1)],
            right: v[Math.min(v.length, U + 1)],
            trail: W = W + y,
            config: Rt(g, Y, R),
            to: Rt(h, Y)
          })), delete A[H];
        });
        break;
      }
      case Qr: {
        _.forEach((H) => {
          const U = s.indexOf(H), Y = o[U], R = Qr;
          A[H] = Ze({}, A[H], {
            item: Y,
            slot: R,
            trail: W = W + y,
            config: Rt(g, Y, R),
            to: Rt(m, Y)
          });
        });
        break;
      }
    }
  let F = s.map((V) => A[V]);
  return T.forEach((V) => {
    let H = V.left;
    V.right;
    let U = Xt(V, ["left", "right"]), Y;
    (Y = F.findIndex((R) => R.originalKey === H)) !== -1 && (Y += 1), Y = Math.max(0, Y), F = [...F.slice(0, Y), U, ...F.slice(Y)];
  }), Ze({}, i, {
    changed: N.length || k.length || _.length,
    first: n && N.length === 0,
    transitions: F,
    current: A,
    deleted: T,
    prevProps: t
  });
}
class If extends Ec {
  constructor(t) {
    t === void 0 && (t = {}), super(), t.transform && !(t.transform instanceof Ft) && (t = il.transform(t)), this.payload = t;
  }
}
const ar = {
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
}, Bt = "[-+]?\\d*\\.?\\d+", rr = Bt + "%";
function Cr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const jf = new RegExp("rgb" + Cr(Bt, Bt, Bt)), qf = new RegExp("rgba" + Cr(Bt, Bt, Bt, Bt)), Uf = new RegExp("hsl" + Cr(Bt, rr, rr)), Yf = new RegExp("hsla" + Cr(Bt, rr, rr, Bt)), Xf = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Qf = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Zf = /^#([0-9a-fA-F]{6})$/, Gf = /^#([0-9a-fA-F]{8})$/;
function Jf(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Zf.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : ar.hasOwnProperty(e) ? ar[e] : (t = jf.exec(e)) ? (Mn(t[1]) << 24 | // r
  Mn(t[2]) << 16 | // g
  Mn(t[3]) << 8 | // b
  255) >>> // a
  0 : (t = qf.exec(e)) ? (Mn(t[1]) << 24 | // r
  Mn(t[2]) << 16 | // g
  Mn(t[3]) << 8 | // b
  Wo(t[4])) >>> // a
  0 : (t = Xf.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (t = Gf.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Qf.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    t[4] + t[4],
    // a
    16
  ) >>> 0 : (t = Uf.exec(e)) ? (Vo(
    Ho(t[1]),
    // h
    Da(t[2]),
    // s
    Da(t[3])
    // l
  ) | 255) >>> // a
  0 : (t = Yf.exec(e)) ? (Vo(
    Ho(t[1]),
    // h
    Da(t[2]),
    // s
    Da(t[3])
    // l
  ) | Wo(t[4])) >>> // a
  0 : null;
}
function Zr(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Vo(e, t, n) {
  const a = n < 0.5 ? n * (1 + t) : n + t - n * t, i = 2 * n - a, l = Zr(i, a, e + 1 / 3), o = Zr(i, a, e), s = Zr(i, a, e - 1 / 3);
  return Math.round(l * 255) << 24 | Math.round(o * 255) << 16 | Math.round(s * 255) << 8;
}
function Mn(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Ho(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function Wo(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function Da(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Ko(e) {
  let t = Jf(e);
  if (t === null)
    return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, a = (t & 16711680) >>> 16, i = (t & 65280) >>> 8, l = (t & 255) / 255;
  return `rgba(${n}, ${a}, ${i}, ${l})`;
}
const Ma = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, eh = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, th = new RegExp(`(${Object.keys(ar).join("|")})`, "g"), nh = (e) => {
  const t = e.output.map((i) => i.replace(eh, Ko)).map((i) => i.replace(th, Ko)), n = t[0].match(Ma).map(() => []);
  t.forEach((i) => {
    i.match(Ma).forEach((l, o) => n[o].push(+l));
  });
  const a = t[0].match(Ma).map((i, l) => nr(Ze({}, e, {
    output: n[l]
  })));
  return (i) => {
    let l = 0;
    return t[0].replace(Ma, () => a[l++](i)).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (o, s, c, u, d) => `rgba(${Math.round(s)}, ${Math.round(c)}, ${Math.round(u)}, ${d})`);
  };
};
let ia = {
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
const ah = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), rh = ["Webkit", "Ms", "Moz", "O"];
ia = Object.keys(ia).reduce((e, t) => (rh.forEach((n) => e[ah(n, t)] = e[t]), e), ia);
function ih(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : !n && typeof t == "number" && t !== 0 && !(ia.hasOwnProperty(e) && ia[e]) ? t + "px" : ("" + t).trim();
}
const Io = {};
Pf((e) => new If(e));
wf(nh);
kf(ar);
Tf((e, t) => {
  if (e.nodeType && e.setAttribute !== void 0) {
    const i = t.style, l = t.children, o = t.scrollTop, s = t.scrollLeft, c = Xt(t, ["style", "children", "scrollTop", "scrollLeft"]), u = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter";
    o !== void 0 && (e.scrollTop = o), s !== void 0 && (e.scrollLeft = s), l !== void 0 && (e.textContent = l);
    for (let d in i)
      if (i.hasOwnProperty(d)) {
        var n = d.indexOf("--") === 0, a = ih(d, i[d], n);
        d === "float" && (d = "cssFloat"), n ? e.style.setProperty(d, a) : e.style[d] = a;
      }
    for (let d in c) {
      const h = u ? d : Io[d] || (Io[d] = d.replace(/([A-Z])/g, (m) => "-" + m.toLowerCase()));
      typeof e.getAttribute(h) < "u" && e.setAttribute(h, c[d]);
    }
    return;
  } else
    return !1;
}, (e) => e);
const lh = [
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
], oh = Ef(Of, !1), jo = oh(lh);
var pi = Math.PI, yi = 2 * pi, bn = 1e-6, sh = yi - bn;
function gi() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null, this._ = "";
}
function Pr() {
  return new gi();
}
gi.prototype = Pr.prototype = {
  constructor: gi,
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
  bezierCurveTo: function(e, t, n, a, i, l) {
    this._ += "C" + +e + "," + +t + "," + +n + "," + +a + "," + (this._x1 = +i) + "," + (this._y1 = +l);
  },
  arcTo: function(e, t, n, a, i) {
    e = +e, t = +t, n = +n, a = +a, i = +i;
    var l = this._x1, o = this._y1, s = n - e, c = a - t, u = l - e, d = o - t, h = u * u + d * d;
    if (i < 0)
      throw new Error("negative radius: " + i);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
    else if (h > bn)
      if (!(Math.abs(d * s - c * u) > bn) || !i)
        this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
      else {
        var m = n - l, p = a - o, y = s * s + c * c, b = m * m + p * p, g = Math.sqrt(y), f = Math.sqrt(h), x = i * Math.tan((pi - Math.acos((y + h - b) / (2 * g * f))) / 2), E = x / f, v = x / g;
        Math.abs(E - 1) > bn && (this._ += "L" + (e + E * u) + "," + (t + E * d)), this._ += "A" + i + "," + i + ",0,0," + +(d * m > u * p) + "," + (this._x1 = e + v * s) + "," + (this._y1 = t + v * c);
      }
  },
  arc: function(e, t, n, a, i, l) {
    e = +e, t = +t, n = +n, l = !!l;
    var o = n * Math.cos(a), s = n * Math.sin(a), c = e + o, u = t + s, d = 1 ^ l, h = l ? a - i : i - a;
    if (n < 0)
      throw new Error("negative radius: " + n);
    this._x1 === null ? this._ += "M" + c + "," + u : (Math.abs(this._x1 - c) > bn || Math.abs(this._y1 - u) > bn) && (this._ += "L" + c + "," + u), n && (h < 0 && (h = h % yi + yi), h > sh ? this._ += "A" + n + "," + n + ",0,1," + d + "," + (e - o) + "," + (t - s) + "A" + n + "," + n + ",0,1," + d + "," + (this._x1 = c) + "," + (this._y1 = u) : h > bn && (this._ += "A" + n + "," + n + ",0," + +(h >= pi) + "," + d + "," + (this._x1 = e + n * Math.cos(i)) + "," + (this._y1 = t + n * Math.sin(i))));
  },
  rect: function(e, t, n, a) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +n + "v" + +a + "h" + -n + "Z";
  },
  toString: function() {
    return this._;
  }
};
function We(e) {
  return function() {
    return e;
  };
}
var qo = Math.abs, gt = Math.atan2, hn = Math.cos, ch = Math.max, Gr = Math.min, qt = Math.sin, Fn = Math.sqrt, xt = 1e-12, pa = Math.PI, ir = pa / 2, Ka = 2 * pa;
function uh(e) {
  return e > 1 ? 0 : e < -1 ? pa : Math.acos(e);
}
function Uo(e) {
  return e >= 1 ? ir : e <= -1 ? -ir : Math.asin(e);
}
function dh(e) {
  return e.innerRadius;
}
function mh(e) {
  return e.outerRadius;
}
function fh(e) {
  return e.startAngle;
}
function hh(e) {
  return e.endAngle;
}
function ph(e) {
  return e && e.padAngle;
}
function yh(e, t, n, a, i, l, o, s) {
  var c = n - e, u = a - t, d = o - i, h = s - l, m = h * c - d * u;
  if (!(m * m < xt))
    return m = (d * (t - l) - h * (e - i)) / m, [e + m * c, t + m * u];
}
function $a(e, t, n, a, i, l, o) {
  var s = e - n, c = t - a, u = (o ? l : -l) / Fn(s * s + c * c), d = u * c, h = -u * s, m = e + d, p = t + h, y = n + d, b = a + h, g = (m + y) / 2, f = (p + b) / 2, x = y - m, E = b - p, v = x * x + E * E, S = i - l, A = m * b - y * p, T = (E < 0 ? -1 : 1) * Fn(ch(0, S * S * v - A * A)), O = (A * E - x * T) / v, w = (-A * x - E * T) / v, C = (A * E + x * T) / v, N = (-A * x + E * T) / v, k = O - g, _ = w - f, W = C - g, F = N - f;
  return k * k + _ * _ > W * W + F * F && (O = C, w = N), {
    cx: O,
    cy: w,
    x01: -d,
    y01: -h,
    x11: O * (i / S - 1),
    y11: w * (i / S - 1)
  };
}
function gh() {
  var e = dh, t = mh, n = We(0), a = null, i = fh, l = hh, o = ph, s = null;
  function c() {
    var u, d, h = +e.apply(this, arguments), m = +t.apply(this, arguments), p = i.apply(this, arguments) - ir, y = l.apply(this, arguments) - ir, b = qo(y - p), g = y > p;
    if (s || (s = u = Pr()), m < h && (d = m, m = h, h = d), !(m > xt))
      s.moveTo(0, 0);
    else if (b > Ka - xt)
      s.moveTo(m * hn(p), m * qt(p)), s.arc(0, 0, m, p, y, !g), h > xt && (s.moveTo(h * hn(y), h * qt(y)), s.arc(0, 0, h, y, p, g));
    else {
      var f = p, x = y, E = p, v = y, S = b, A = b, T = o.apply(this, arguments) / 2, O = T > xt && (a ? +a.apply(this, arguments) : Fn(h * h + m * m)), w = Gr(qo(m - h) / 2, +n.apply(this, arguments)), C = w, N = w, k, _;
      if (O > xt) {
        var W = Uo(O / h * qt(T)), F = Uo(O / m * qt(T));
        (S -= W * 2) > xt ? (W *= g ? 1 : -1, E += W, v -= W) : (S = 0, E = v = (p + y) / 2), (A -= F * 2) > xt ? (F *= g ? 1 : -1, f += F, x -= F) : (A = 0, f = x = (p + y) / 2);
      }
      var V = m * hn(f), H = m * qt(f), U = h * hn(v), Y = h * qt(v);
      if (w > xt) {
        var R = m * hn(x), $ = m * qt(x), j = h * hn(E), q = h * qt(E), X;
        if (b < pa && (X = yh(V, H, j, q, R, $, U, Y))) {
          var ne = V - X[0], de = H - X[1], Ae = R - X[0], we = $ - X[1], G = 1 / qt(uh((ne * Ae + de * we) / (Fn(ne * ne + de * de) * Fn(Ae * Ae + we * we))) / 2), K = Fn(X[0] * X[0] + X[1] * X[1]);
          C = Gr(w, (h - K) / (G - 1)), N = Gr(w, (m - K) / (G + 1));
        }
      }
      A > xt ? N > xt ? (k = $a(j, q, V, H, m, N, g), _ = $a(R, $, U, Y, m, N, g), s.moveTo(k.cx + k.x01, k.cy + k.y01), N < w ? s.arc(k.cx, k.cy, N, gt(k.y01, k.x01), gt(_.y01, _.x01), !g) : (s.arc(k.cx, k.cy, N, gt(k.y01, k.x01), gt(k.y11, k.x11), !g), s.arc(0, 0, m, gt(k.cy + k.y11, k.cx + k.x11), gt(_.cy + _.y11, _.cx + _.x11), !g), s.arc(_.cx, _.cy, N, gt(_.y11, _.x11), gt(_.y01, _.x01), !g))) : (s.moveTo(V, H), s.arc(0, 0, m, f, x, !g)) : s.moveTo(V, H), !(h > xt) || !(S > xt) ? s.lineTo(U, Y) : C > xt ? (k = $a(U, Y, R, $, h, -C, g), _ = $a(V, H, j, q, h, -C, g), s.lineTo(k.cx + k.x01, k.cy + k.y01), C < w ? s.arc(k.cx, k.cy, C, gt(k.y01, k.x01), gt(_.y01, _.x01), !g) : (s.arc(k.cx, k.cy, C, gt(k.y01, k.x01), gt(k.y11, k.x11), !g), s.arc(0, 0, h, gt(k.cy + k.y11, k.cx + k.x11), gt(_.cy + _.y11, _.cx + _.x11), g), s.arc(_.cx, _.cy, C, gt(_.y11, _.x11), gt(_.y01, _.x01), !g))) : s.arc(0, 0, h, v, E, g);
    }
    if (s.closePath(), u)
      return s = null, u + "" || null;
  }
  return c.centroid = function() {
    var u = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, d = (+i.apply(this, arguments) + +l.apply(this, arguments)) / 2 - pa / 2;
    return [hn(d) * u, qt(d) * u];
  }, c.innerRadius = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : We(+u), c) : e;
  }, c.outerRadius = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : We(+u), c) : t;
  }, c.cornerRadius = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : We(+u), c) : n;
  }, c.padRadius = function(u) {
    return arguments.length ? (a = u == null ? null : typeof u == "function" ? u : We(+u), c) : a;
  }, c.startAngle = function(u) {
    return arguments.length ? (i = typeof u == "function" ? u : We(+u), c) : i;
  }, c.endAngle = function(u) {
    return arguments.length ? (l = typeof u == "function" ? u : We(+u), c) : l;
  }, c.padAngle = function(u) {
    return arguments.length ? (o = typeof u == "function" ? u : We(+u), c) : o;
  }, c.context = function(u) {
    return arguments.length ? (s = u ?? null, c) : s;
  }, c;
}
function Pc(e) {
  this._context = e;
}
Pc.prototype = {
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
function Nr(e) {
  return new Pc(e);
}
function Nc(e) {
  return e[0];
}
function Lc(e) {
  return e[1];
}
function Oc() {
  var e = Nc, t = Lc, n = We(!0), a = null, i = Nr, l = null;
  function o(s) {
    var c, u = s.length, d, h = !1, m;
    for (a == null && (l = i(m = Pr())), c = 0; c <= u; ++c)
      !(c < u && n(d = s[c], c, s)) === h && ((h = !h) ? l.lineStart() : l.lineEnd()), h && l.point(+e(d, c, s), +t(d, c, s));
    if (m)
      return l = null, m + "" || null;
  }
  return o.x = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : We(+s), o) : e;
  }, o.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : We(+s), o) : t;
  }, o.defined = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : We(!!s), o) : n;
  }, o.curve = function(s) {
    return arguments.length ? (i = s, a != null && (l = i(a)), o) : i;
  }, o.context = function(s) {
    return arguments.length ? (s == null ? a = l = null : l = i(a = s), o) : a;
  }, o;
}
function xh() {
  var e = Nc, t = null, n = We(0), a = Lc, i = We(!0), l = null, o = Nr, s = null;
  function c(d) {
    var h, m, p, y = d.length, b, g = !1, f, x = new Array(y), E = new Array(y);
    for (l == null && (s = o(f = Pr())), h = 0; h <= y; ++h) {
      if (!(h < y && i(b = d[h], h, d)) === g)
        if (g = !g)
          m = h, s.areaStart(), s.lineStart();
        else {
          for (s.lineEnd(), s.lineStart(), p = h - 1; p >= m; --p)
            s.point(x[p], E[p]);
          s.lineEnd(), s.areaEnd();
        }
      g && (x[h] = +e(b, h, d), E[h] = +n(b, h, d), s.point(t ? +t(b, h, d) : x[h], a ? +a(b, h, d) : E[h]));
    }
    if (f)
      return s = null, f + "" || null;
  }
  function u() {
    return Oc().defined(i).curve(o).context(l);
  }
  return c.x = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : We(+d), t = null, c) : e;
  }, c.x0 = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : We(+d), c) : e;
  }, c.x1 = function(d) {
    return arguments.length ? (t = d == null ? null : typeof d == "function" ? d : We(+d), c) : t;
  }, c.y = function(d) {
    return arguments.length ? (n = typeof d == "function" ? d : We(+d), a = null, c) : n;
  }, c.y0 = function(d) {
    return arguments.length ? (n = typeof d == "function" ? d : We(+d), c) : n;
  }, c.y1 = function(d) {
    return arguments.length ? (a = d == null ? null : typeof d == "function" ? d : We(+d), c) : a;
  }, c.lineX0 = c.lineY0 = function() {
    return u().x(e).y(n);
  }, c.lineY1 = function() {
    return u().x(e).y(a);
  }, c.lineX1 = function() {
    return u().x(t).y(n);
  }, c.defined = function(d) {
    return arguments.length ? (i = typeof d == "function" ? d : We(!!d), c) : i;
  }, c.curve = function(d) {
    return arguments.length ? (o = d, l != null && (s = o(l)), c) : o;
  }, c.context = function(d) {
    return arguments.length ? (d == null ? l = s = null : s = o(l = d), c) : l;
  }, c;
}
function vh(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function bh(e) {
  return e;
}
function Eh() {
  var e = bh, t = vh, n = null, a = We(0), i = We(Ka), l = We(0);
  function o(s) {
    var c, u = s.length, d, h, m = 0, p = new Array(u), y = new Array(u), b = +a.apply(this, arguments), g = Math.min(Ka, Math.max(-Ka, i.apply(this, arguments) - b)), f, x = Math.min(Math.abs(g) / u, l.apply(this, arguments)), E = x * (g < 0 ? -1 : 1), v;
    for (c = 0; c < u; ++c)
      (v = y[p[c] = c] = +e(s[c], c, s)) > 0 && (m += v);
    for (t != null ? p.sort(function(S, A) {
      return t(y[S], y[A]);
    }) : n != null && p.sort(function(S, A) {
      return n(s[S], s[A]);
    }), c = 0, h = m ? (g - u * E) / m : 0; c < u; ++c, b = f)
      d = p[c], v = y[d], f = b + (v > 0 ? v * h : 0) + E, y[d] = {
        data: s[d],
        index: c,
        value: v,
        startAngle: b,
        endAngle: f,
        padAngle: x
      };
    return y;
  }
  return o.value = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : We(+s), o) : e;
  }, o.sortValues = function(s) {
    return arguments.length ? (t = s, n = null, o) : t;
  }, o.sort = function(s) {
    return arguments.length ? (n = s, t = null, o) : n;
  }, o.startAngle = function(s) {
    return arguments.length ? (a = typeof s == "function" ? s : We(+s), o) : a;
  }, o.endAngle = function(s) {
    return arguments.length ? (i = typeof s == "function" ? s : We(+s), o) : i;
  }, o.padAngle = function(s) {
    return arguments.length ? (l = typeof s == "function" ? s : We(+s), o) : l;
  }, o;
}
var Yo = Array.prototype.slice;
function un() {
}
function lr(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6
  );
}
function Lr(e) {
  this._context = e;
}
Lr.prototype = {
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
        lr(this, this._x1, this._y1);
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
        lr(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Ah(e) {
  return new Lr(e);
}
function _c(e) {
  this._context = e;
}
_c.prototype = {
  areaStart: un,
  areaEnd: un,
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
        lr(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Sh(e) {
  return new _c(e);
}
function Dc(e) {
  this._context = e;
}
Dc.prototype = {
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
        lr(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Th(e) {
  return new Dc(e);
}
function Mc(e, t) {
  this._basis = new Lr(e), this._beta = t;
}
Mc.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e = this._x, t = this._y, n = e.length - 1;
    if (n > 0)
      for (var a = e[0], i = t[0], l = e[n] - a, o = t[n] - i, s = -1, c; ++s <= n; )
        c = s / n, this._basis.point(
          this._beta * e[s] + (1 - this._beta) * (a + c * l),
          this._beta * t[s] + (1 - this._beta) * (i + c * o)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
const kh = function e(t) {
  function n(a) {
    return t === 1 ? new Lr(a) : new Mc(a, t);
  }
  return n.beta = function(a) {
    return e(+a);
  }, n;
}(0.85);
function or(e, t, n) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - n),
    e._x2,
    e._y2
  );
}
function ll(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
ll.prototype = {
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
        or(this, this._x1, this._y1);
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
        or(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const wh = function e(t) {
  function n(a) {
    return new ll(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function ol(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
ol.prototype = {
  areaStart: un,
  areaEnd: un,
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
        or(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Ch = function e(t) {
  function n(a) {
    return new ol(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function sl(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
sl.prototype = {
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
        or(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Ph = function e(t) {
  function n(a) {
    return new sl(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function cl(e, t, n) {
  var a = e._x1, i = e._y1, l = e._x2, o = e._y2;
  if (e._l01_a > xt) {
    var s = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, c = 3 * e._l01_a * (e._l01_a + e._l12_a);
    a = (a * s - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / c, i = (i * s - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / c;
  }
  if (e._l23_a > xt) {
    var u = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, d = 3 * e._l23_a * (e._l23_a + e._l12_a);
    l = (l * u + e._x1 * e._l23_2a - t * e._l12_2a) / d, o = (o * u + e._y1 * e._l23_2a - n * e._l12_2a) / d;
  }
  e._context.bezierCurveTo(a, i, l, o, e._x2, e._y2);
}
function $c(e, t) {
  this._context = e, this._alpha = t;
}
$c.prototype = {
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
        cl(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Nh = function e(t) {
  function n(a) {
    return t ? new $c(a, t) : new ll(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function zc(e, t) {
  this._context = e, this._alpha = t;
}
zc.prototype = {
  areaStart: un,
  areaEnd: un,
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
        cl(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Lh = function e(t) {
  function n(a) {
    return t ? new zc(a, t) : new ol(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function Rc(e, t) {
  this._context = e, this._alpha = t;
}
Rc.prototype = {
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
        cl(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Oh = function e(t) {
  function n(a) {
    return t ? new Rc(a, t) : new sl(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function Fc(e) {
  this._context = e;
}
Fc.prototype = {
  areaStart: un,
  areaEnd: un,
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
function xi(e) {
  return new Fc(e);
}
function Xo(e) {
  return e < 0 ? -1 : 1;
}
function Qo(e, t, n) {
  var a = e._x1 - e._x0, i = t - e._x1, l = (e._y1 - e._y0) / (a || i < 0 && -0), o = (n - e._y1) / (i || a < 0 && -0), s = (l * i + o * a) / (a + i);
  return (Xo(l) + Xo(o)) * Math.min(Math.abs(l), Math.abs(o), 0.5 * Math.abs(s)) || 0;
}
function Zo(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Jr(e, t, n) {
  var a = e._x0, i = e._y0, l = e._x1, o = e._y1, s = (l - a) / 3;
  e._context.bezierCurveTo(a + s, i + s * t, l - s, o - s * n, l, o);
}
function sr(e) {
  this._context = e;
}
sr.prototype = {
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
        Jr(this, this._t0, Zo(this, this._t0));
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
          this._point = 3, Jr(this, Zo(this, n = Qo(this, e, t)), n);
          break;
        default:
          Jr(this, this._t0, n = Qo(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
function Bc(e) {
  this._context = new Vc(e);
}
(Bc.prototype = Object.create(sr.prototype)).point = function(e, t) {
  sr.prototype.point.call(this, t, e);
};
function Vc(e) {
  this._context = e;
}
Vc.prototype = {
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
function Ia(e) {
  return new sr(e);
}
function _h(e) {
  return new Bc(e);
}
function Hc(e) {
  this._context = e;
}
Hc.prototype = {
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
        for (var a = Go(e), i = Go(t), l = 0, o = 1; o < n; ++l, ++o)
          this._context.bezierCurveTo(a[0][l], i[0][l], a[1][l], i[1][l], e[o], t[o]);
    (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Go(e) {
  var t, n = e.length - 1, a, i = new Array(n), l = new Array(n), o = new Array(n);
  for (i[0] = 0, l[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t)
    i[t] = 1, l[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[n - 1] = 2, l[n - 1] = 7, o[n - 1] = 8 * e[n - 1] + e[n], t = 1; t < n; ++t)
    a = i[t] / l[t - 1], l[t] -= a, o[t] -= a * o[t - 1];
  for (i[n - 1] = o[n - 1] / l[n - 1], t = n - 2; t >= 0; --t)
    i[t] = (o[t] - i[t + 1]) / l[t];
  for (l[n - 1] = (e[n] + i[n - 1]) / 2, t = 0; t < n - 1; ++t)
    l[t] = 2 * e[t + 1] - i[t + 1];
  return [i, l];
}
function Dh(e) {
  return new Hc(e);
}
function Or(e, t) {
  this._context = e, this._t = t;
}
Or.prototype = {
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
function Mh(e) {
  return new Or(e, 0.5);
}
function $h(e) {
  return new Or(e, 0);
}
function zh(e) {
  return new Or(e, 1);
}
function In(e, t) {
  if ((o = e.length) > 1)
    for (var n = 1, a, i, l = e[t[0]], o, s = l.length; n < o; ++n)
      for (i = l, l = e[t[n]], a = 0; a < s; ++a)
        l[a][1] += l[a][0] = isNaN(i[a][1]) ? i[a][0] : i[a][1];
}
function jn(e) {
  for (var t = e.length, n = new Array(t); --t >= 0; )
    n[t] = t;
  return n;
}
function Rh(e, t) {
  return e[t];
}
function ul() {
  var e = We([]), t = jn, n = In, a = Rh;
  function i(l) {
    var o = e.apply(this, arguments), s, c = l.length, u = o.length, d = new Array(u), h;
    for (s = 0; s < u; ++s) {
      for (var m = o[s], p = d[s] = new Array(c), y = 0, b; y < c; ++y)
        p[y] = b = [0, +a(l[y], m, y, l)], b.data = l[y];
      p.key = m;
    }
    for (s = 0, h = t(d); s < u; ++s)
      d[h[s]].index = s;
    return n(d, h), d;
  }
  return i.keys = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : We(Yo.call(l)), i) : e;
  }, i.value = function(l) {
    return arguments.length ? (a = typeof l == "function" ? l : We(+l), i) : a;
  }, i.order = function(l) {
    return arguments.length ? (t = l == null ? jn : typeof l == "function" ? l : We(Yo.call(l)), i) : t;
  }, i.offset = function(l) {
    return arguments.length ? (n = l ?? In, i) : n;
  }, i;
}
function Fh(e, t) {
  if ((a = e.length) > 0) {
    for (var n, a, i = 0, l = e[0].length, o; i < l; ++i) {
      for (o = n = 0; n < a; ++n)
        o += e[n][i][1] || 0;
      if (o)
        for (n = 0; n < a; ++n)
          e[n][i][1] /= o;
    }
    In(e, t);
  }
}
function Bh(e, t) {
  if ((c = e.length) > 0)
    for (var n, a = 0, i, l, o, s, c, u = e[t[0]].length; a < u; ++a)
      for (o = s = 0, n = 0; n < c; ++n)
        (l = (i = e[t[n]][a])[1] - i[0]) > 0 ? (i[0] = o, i[1] = o += l) : l < 0 ? (i[1] = s, i[0] = s += l) : (i[0] = 0, i[1] = l);
}
function Vh(e, t) {
  if ((i = e.length) > 0) {
    for (var n = 0, a = e[t[0]], i, l = a.length; n < l; ++n) {
      for (var o = 0, s = 0; o < i; ++o)
        s += e[o][n][1] || 0;
      a[n][1] += a[n][0] = -s / 2;
    }
    In(e, t);
  }
}
function Hh(e, t) {
  if (!(!((o = e.length) > 0) || !((l = (i = e[t[0]]).length) > 0))) {
    for (var n = 0, a = 1, i, l, o; a < l; ++a) {
      for (var s = 0, c = 0, u = 0; s < o; ++s) {
        for (var d = e[t[s]], h = d[a][1] || 0, m = d[a - 1][1] || 0, p = (h - m) / 2, y = 0; y < s; ++y) {
          var b = e[t[y]], g = b[a][1] || 0, f = b[a - 1][1] || 0;
          p += g - f;
        }
        c += h, u += p * h;
      }
      i[a - 1][1] += i[a - 1][0] = n, c && (n -= u / c);
    }
    i[a - 1][1] += i[a - 1][0] = n, In(e, t);
  }
}
function Wh(e) {
  var t = e.map(Kh);
  return jn(e).sort(function(n, a) {
    return t[n] - t[a];
  });
}
function Kh(e) {
  for (var t = -1, n = 0, a = e.length, i, l = -1 / 0; ++t < a; )
    (i = +e[t][1]) > l && (l = i, n = t);
  return n;
}
function Wc(e) {
  var t = e.map(Kc);
  return jn(e).sort(function(n, a) {
    return t[n] - t[a];
  });
}
function Kc(e) {
  for (var t = 0, n = -1, a = e.length, i; ++n < a; )
    (i = +e[n][1]) && (t += i);
  return t;
}
function Ih(e) {
  return Wc(e).reverse();
}
function jh(e) {
  var t = e.length, n, a, i = e.map(Kc), l = Wh(e), o = 0, s = 0, c = [], u = [];
  for (n = 0; n < t; ++n)
    a = l[n], o < s ? (o += i[a], c.push(a)) : (s += i[a], u.push(a));
  return u.reverse().concat(c);
}
function qh(e) {
  return jn(e).reverse();
}
function et(e, t) {
  e(t);
}
var Jo = {
  ascending: Wc,
  descending: Ih,
  insideout: jh,
  none: jn,
  reverse: qh
};
function dl(e) {
  return e && Jo[e] || Jo.none;
}
var es = {
  expand: Fh,
  diverging: Bh,
  none: In,
  silhouette: Vh,
  wiggle: Hh
};
function ml(e) {
  return e && es[e] || es.none;
}
function Uh(e) {
  var t = e === void 0 ? {} : e, n = t.innerRadius, a = t.outerRadius, i = t.cornerRadius, l = t.startAngle, o = t.endAngle, s = t.padAngle, c = t.padRadius, u = gh();
  return n != null && et(u.innerRadius, n), a != null && et(u.outerRadius, a), i != null && et(u.cornerRadius, i), l != null && et(u.startAngle, l), o != null && et(u.endAngle, o), s != null && et(u.padAngle, s), c != null && et(u.padRadius, c), u;
}
function fl(e) {
  var t = e === void 0 ? {} : e, n = t.x, a = t.x0, i = t.x1, l = t.y, o = t.y0, s = t.y1, c = t.defined, u = t.curve, d = xh();
  return n && et(d.x, n), a && et(d.x0, a), i && et(d.x1, i), l && et(d.y, l), o && et(d.y0, o), s && et(d.y1, s), c && d.defined(c), u && d.curve(u), d;
}
function Ic(e) {
  var t = e === void 0 ? {} : e, n = t.x, a = t.y, i = t.defined, l = t.curve, o = Oc();
  return n && et(o.x, n), a && et(o.y, a), i && o.defined(i), l && o.curve(l), o;
}
function Yh(e) {
  var t = e === void 0 ? {} : e, n = t.startAngle, a = t.endAngle, i = t.padAngle, l = t.value, o = t.sort, s = t.sortValues, c = Eh();
  return (o === null || o != null) && c.sort(o), (s === null || s != null) && c.sortValues(s), l != null && c.value(l), i != null && et(c.padAngle, i), n != null && et(c.startAngle, n), a != null && et(c.endAngle, a), c;
}
function Xh(e) {
  var t = e.keys, n = e.value, a = e.order, i = e.offset, l = ul();
  return t && l.keys(t), n && et(l.value, n), a && l.order(dl(a)), i && l.offset(ml(i)), l;
}
var Qh = ["className", "top", "left", "data", "centroid", "innerRadius", "outerRadius", "cornerRadius", "startAngle", "endAngle", "padAngle", "padRadius", "pieSort", "pieSortValues", "pieValue", "children", "fill"];
function vi() {
  return vi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, vi.apply(this, arguments);
}
function Zh(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Gh(e) {
  var t = e.className, n = e.top, a = e.left, i = e.data, l = i === void 0 ? [] : i, o = e.centroid, s = e.innerRadius, c = s === void 0 ? 0 : s, u = e.outerRadius, d = e.cornerRadius, h = e.startAngle, m = e.endAngle, p = e.padAngle, y = e.padRadius, b = e.pieSort, g = e.pieSortValues, f = e.pieValue, x = e.children, E = e.fill, v = E === void 0 ? "" : E, S = Zh(e, Qh), A = Uh({
    innerRadius: c,
    outerRadius: u,
    cornerRadius: d,
    padRadius: y
  }), T = Yh({
    startAngle: h,
    endAngle: m,
    padAngle: p,
    value: f,
    sort: b,
    sortValues: g
  }), O = T(l);
  return x ? /* @__PURE__ */ r.createElement(r.Fragment, null, x({
    arcs: O,
    path: A,
    pie: T
  })) : /* @__PURE__ */ r.createElement(ve, {
    className: "visx-pie-arcs-group",
    top: n,
    left: a
  }, O.map(function(w, C) {
    return /* @__PURE__ */ r.createElement("g", {
      key: "pie-arc-" + C
    }, /* @__PURE__ */ r.createElement("path", vi({
      className: lt("visx-pie-arc", t),
      d: A(w) || "",
      fill: v == null || typeof v == "string" ? v : v(w)
    }, S)), o == null ? void 0 : o(A.centroid(w), w));
  }));
}
var Jh = ["from", "to", "fill", "className", "innerRef"];
function bi() {
  return bi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, bi.apply(this, arguments);
}
function ep(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Ye(e) {
  var t = e.from, n = t === void 0 ? {
    x: 0,
    y: 0
  } : t, a = e.to, i = a === void 0 ? {
    x: 1,
    y: 1
  } : a, l = e.fill, o = l === void 0 ? "transparent" : l, s = e.className, c = e.innerRef, u = ep(e, Jh), d = n.x === i.x || n.y === i.y;
  return /* @__PURE__ */ r.createElement("line", bi({
    ref: c,
    className: lt("visx-line", s),
    x1: n.x,
    y1: n.y,
    x2: i.x,
    y2: i.y,
    fill: o,
    shapeRendering: d ? "crispEdges" : "auto"
  }, u));
}
var tp = ["children", "data", "x", "y", "fill", "className", "curve", "innerRef", "defined"];
function Ei() {
  return Ei = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ei.apply(this, arguments);
}
function np(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function en(e) {
  var t = e.children, n = e.data, a = n === void 0 ? [] : n, i = e.x, l = e.y, o = e.fill, s = o === void 0 ? "transparent" : o, c = e.className, u = e.curve, d = e.innerRef, h = e.defined, m = h === void 0 ? function() {
    return !0;
  } : h, p = np(e, tp), y = Ic({
    x: i,
    y: l,
    defined: m,
    curve: u
  });
  return t ? /* @__PURE__ */ r.createElement(r.Fragment, null, t({
    path: y
  })) : /* @__PURE__ */ r.createElement("path", Ei({
    ref: d,
    className: lt("visx-linepath", c),
    d: y(a) || "",
    fill: s,
    strokeLinecap: "round"
  }, p));
}
var ap = ["children", "x", "x0", "x1", "y", "y0", "y1", "data", "defined", "className", "curve", "innerRef"];
function Ai() {
  return Ai = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ai.apply(this, arguments);
}
function rp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function ip(e) {
  var t = e.children, n = e.x, a = e.x0, i = e.x1, l = e.y, o = e.y0, s = e.y1, c = e.data, u = c === void 0 ? [] : c, d = e.defined, h = d === void 0 ? function() {
    return !0;
  } : d, m = e.className, p = e.curve, y = e.innerRef, b = rp(e, ap), g = fl({
    x: n,
    x0: a,
    x1: i,
    y: l,
    y0: o,
    y1: s,
    defined: h,
    curve: p
  });
  return t ? /* @__PURE__ */ r.createElement(r.Fragment, null, t({
    path: g
  })) : /* @__PURE__ */ r.createElement("path", Ai({
    ref: y,
    className: lt("visx-area", m),
    d: g(u) || ""
  }, b));
}
var lp = ["x", "x0", "x1", "y", "y1", "y0", "yScale", "data", "defined", "className", "curve", "innerRef", "children"];
function Si() {
  return Si = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Si.apply(this, arguments);
}
function op(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function sp(e) {
  var t = e.x, n = e.x0, a = e.x1, i = e.y, l = e.y1, o = e.y0, s = e.yScale, c = e.data, u = c === void 0 ? [] : c, d = e.defined, h = d === void 0 ? function() {
    return !0;
  } : d, m = e.className, p = e.curve, y = e.innerRef, b = e.children, g = op(e, lp), f = fl({
    x: t,
    x0: n,
    x1: a,
    defined: h,
    curve: p
  });
  return o == null ? f.y0(s.range()[0]) : et(f.y0, o), i && !l && et(f.y1, i), l && !i && et(f.y1, l), b ? /* @__PURE__ */ r.createElement(r.Fragment, null, b({
    path: f
  })) : /* @__PURE__ */ r.createElement("path", Si({
    ref: y,
    className: lt("visx-area-closed", m),
    d: f(u) || ""
  }, g));
}
var cp = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
function Ti() {
  return Ti = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ti.apply(this, arguments);
}
function up(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function dp(e) {
  var t = e.className, n = e.top, a = e.left, i = e.keys, l = e.data, o = e.curve, s = e.defined, c = e.x, u = e.x0, d = e.x1, h = e.y0, m = e.y1, p = e.value, y = e.order, b = e.offset, g = e.color, f = e.children, x = up(e, cp), E = Xh({
    keys: i,
    value: p,
    order: y,
    offset: b
  }), v = fl({
    x: c,
    x0: u,
    x1: d,
    y0: h,
    y1: m,
    curve: o,
    defined: s
  }), S = E(l);
  return f ? /* @__PURE__ */ r.createElement(r.Fragment, null, f({
    stacks: S,
    path: v,
    stack: E
  })) : /* @__PURE__ */ r.createElement(ve, {
    top: n,
    left: a
  }, S.map(function(A, T) {
    return /* @__PURE__ */ r.createElement("path", Ti({
      className: lt("visx-stack", t),
      key: "stack-" + T + "-" + (A.key || ""),
      d: v(A) || "",
      fill: g == null ? void 0 : g(A.key, T)
    }, x));
  }));
}
var mp = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
function cr() {
  return cr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, cr.apply(this, arguments);
}
function fp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function hp(e) {
  var t = e.className, n = e.top, a = e.left, i = e.keys, l = e.data, o = e.curve, s = e.defined, c = e.x, u = e.x0, d = e.x1, h = e.y0, m = e.y1, p = e.value, y = e.order, b = e.offset, g = e.color, f = e.children, x = fp(e, mp);
  return /* @__PURE__ */ r.createElement(dp, cr({
    className: t,
    top: n,
    left: a,
    keys: i,
    data: l,
    curve: o,
    defined: s,
    x: c,
    x0: u,
    x1: d,
    y0: h,
    y1: m,
    value: p,
    order: y,
    offset: b,
    color: g
  }, x), f || function(E) {
    var v = E.stacks, S = E.path;
    return v.map(function(A, T) {
      return /* @__PURE__ */ r.createElement("path", cr({
        className: lt("visx-area-stack", t),
        key: "area-stack-" + T + "-" + (A.key || ""),
        d: S(A) || "",
        fill: g == null ? void 0 : g(A.key, T)
      }, x));
    });
  });
}
function hl(e) {
  if ("bandwidth" in e)
    return e.bandwidth();
  var t = e.range(), n = e.domain();
  return Math.abs(t[t.length - 1] - t[0]) / n.length;
}
var pp = ["data", "className", "top", "left", "x0", "x0Scale", "x1Scale", "yScale", "color", "keys", "height", "children"];
function ki() {
  return ki = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ki.apply(this, arguments);
}
function yp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function jc(e) {
  var t = e.data, n = e.className, a = e.top, i = e.left, l = e.x0, o = e.x0Scale, s = e.x1Scale, c = e.yScale, u = e.color, d = e.keys, h = e.height, m = e.children, p = yp(e, pp), y = hl(s), b = t.map(function(g, f) {
    return {
      index: f,
      x0: o(l(g)),
      bars: d.map(function(x, E) {
        var v = g[x];
        return {
          index: E,
          key: x,
          value: v,
          width: y,
          x: s(x) || 0,
          y: c(v) || 0,
          color: u(x, E),
          height: h - (c(v) || 0)
        };
      })
    };
  });
  return m ? /* @__PURE__ */ r.createElement(r.Fragment, null, m(b)) : /* @__PURE__ */ r.createElement(ve, {
    className: lt("visx-bar-group", n),
    top: a,
    left: i
  }, b.map(function(g) {
    return /* @__PURE__ */ r.createElement(ve, {
      key: "bar-group-" + g.index + "-" + g.x0,
      left: g.x0
    }, g.bars.map(function(f) {
      return /* @__PURE__ */ r.createElement(Dt, ki({
        key: "bar-group-bar-" + g.index + "-" + f.index + "-" + f.value + "-" + f.key,
        x: f.x,
        y: f.y,
        width: f.width,
        height: f.height,
        fill: f.color
      }, p));
    }));
  }));
}
function qc(e) {
  return e == null ? void 0 : e[0];
}
function Uc(e) {
  return e == null ? void 0 : e[1];
}
var gp = ["data", "className", "top", "left", "x", "y0", "y1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
function wi() {
  return wi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, wi.apply(this, arguments);
}
function xp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function vp(e) {
  var t = e.data, n = e.className, a = e.top, i = e.left, l = e.x, o = e.y0, s = o === void 0 ? qc : o, c = e.y1, u = c === void 0 ? Uc : c, d = e.xScale, h = e.yScale, m = e.color, p = e.keys, y = e.value, b = e.order, g = e.offset, f = e.children, x = xp(e, gp), E = ul();
  p && E.keys(p), y && et(E.value, y), b && E.order(dl(b)), g && E.offset(ml(g));
  var v = E(t), S = hl(d), A = v.map(function(T, O) {
    var w = T.key;
    return {
      index: O,
      key: w,
      bars: T.map(function(C, N) {
        var k = (h(s(C)) || 0) - (h(u(C)) || 0), _ = h(u(C)), W = "bandwidth" in d ? d(l(C.data)) : Math.max((d(l(C.data)) || 0) - S / 2);
        return {
          bar: C,
          key: w,
          index: N,
          height: k,
          width: S,
          x: W || 0,
          y: _ || 0,
          color: m(T.key, N)
        };
      })
    };
  });
  return f ? /* @__PURE__ */ r.createElement(r.Fragment, null, f(A)) : /* @__PURE__ */ r.createElement(ve, {
    className: lt("visx-bar-stack", n),
    top: a,
    left: i
  }, A.map(function(T) {
    return T.bars.map(function(O) {
      return /* @__PURE__ */ r.createElement(Dt, wi({
        key: "bar-stack-" + T.index + "-" + O.index,
        x: O.x,
        y: O.y,
        height: O.height,
        width: O.width,
        fill: O.color
      }, x));
    });
  }));
}
var bp = ["data", "className", "top", "left", "y", "x0", "x1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
function Ci() {
  return Ci = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ci.apply(this, arguments);
}
function Ep(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Ap(e) {
  var t = e.data, n = e.className, a = e.top, i = e.left, l = e.y, o = e.x0, s = o === void 0 ? qc : o, c = e.x1, u = c === void 0 ? Uc : c, d = e.xScale, h = e.yScale, m = e.color, p = e.keys, y = e.value, b = e.order, g = e.offset, f = e.children, x = Ep(e, bp), E = ul();
  p && E.keys(p), y && et(E.value, y), b && E.order(dl(b)), g && E.offset(ml(g));
  var v = E(t), S = hl(h), A = v.map(function(T, O) {
    var w = T.key;
    return {
      index: O,
      key: w,
      bars: T.map(function(C, N) {
        var k = (d(u(C)) || 0) - (d(s(C)) || 0), _ = d(s(C)), W = "bandwidth" in h ? h(l(C.data)) : Math.max((h(l(C.data)) || 0) - k / 2);
        return {
          bar: C,
          key: w,
          index: N,
          height: S,
          width: k,
          x: _ || 0,
          y: W || 0,
          color: m(T.key, N)
        };
      })
    };
  });
  return f ? /* @__PURE__ */ r.createElement(r.Fragment, null, f(A)) : /* @__PURE__ */ r.createElement(ve, {
    className: lt("visx-bar-stack-horizontal", n),
    top: a,
    left: i
  }, A.map(function(T) {
    return T.bars.map(function(O) {
      return /* @__PURE__ */ r.createElement(Dt, Ci({
        key: "bar-stack-" + T.index + "-" + O.index,
        x: O.x,
        y: O.y,
        height: O.height,
        width: O.width,
        fill: O.color
      }, x));
    });
  }));
}
var ts = "http://www.w3.org/2000/svg";
function Sp(e) {
  var t = document.getElementById(e);
  if (!t) {
    var n = document.createElementNS(ts, "svg");
    n.setAttribute("aria-hidden", "true"), n.style.opacity = "0", n.style.width = "0", n.style.height = "0", n.style.position = "absolute", n.style.top = "-100%", n.style.left = "-100%", n.style.pointerEvents = "none", t = document.createElementNS(ts, "path"), t.setAttribute("id", e), n.appendChild(t), document.body.appendChild(n);
  }
  return t;
}
var Tp = "__visx_splitpath_svg_path_measurement_id", ns = function() {
  return !0;
};
function kp(e) {
  var t = e.path, n = e.pointsInSegments, a = e.segmentation, i = a === void 0 ? "x" : a, l = e.sampleRate, o = l === void 0 ? 1 : l;
  try {
    var s = Sp(Tp);
    s.setAttribute("d", t);
    var c = s.getTotalLength(), u = n.length, d = n.map(function() {
      return [];
    });
    if (i === "x" || i === "y")
      for (var h = n.map(function(_) {
        var W;
        return (W = _.find(function(F) {
          return typeof F[i] == "number";
        })) == null ? void 0 : W[i];
      }), m = s.getPointAtLength(0), p = s.getPointAtLength(c), y = p[i] > m[i], b = y ? h.map(function(_) {
        return typeof _ > "u" ? ns : function(W) {
          return W >= _;
        };
      }) : h.map(function(_) {
        return typeof _ > "u" ? ns : function(W) {
          return W <= _;
        };
      }), g = 0, f = 0; f <= c; f += o) {
        for (var x = s.getPointAtLength(f), E = x[i]; g < u - 1 && b[g + 1](E); )
          g += 1;
        d[g].push(x);
      }
    else {
      var v = n.map(function(_) {
        return _.length;
      }), S = v.reduce(function(_, W) {
        return _ + W;
      }, 0), A = c / Math.max(1, S - 1), T = v.slice(0, u - 1);
      T.unshift(0);
      for (var O = 2; O < u; O += 1)
        T[O] += T[O - 1];
      for (var w = 0; w < u; w += 1)
        T[w] *= A;
      for (var C = 0, N = 0; N <= c; N += o) {
        for (var k = s.getPointAtLength(N); C < u - 1 && N >= T[C + 1]; )
          C += 1;
        d[C].push(k);
      }
    }
    return d;
  } catch {
    return [];
  }
}
function Pi() {
  return Pi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Pi.apply(this, arguments);
}
var wp = function(t) {
  return t.x || 0;
}, Cp = function(t) {
  return t.y || 0;
};
function Yc(e) {
  var t = e.children, n = e.className, a = e.curve, i = e.defined, l = e.segmentation, o = e.sampleRate, s = e.segments, c = e.x, u = e.y, d = e.styles, h = z.useMemo(function() {
    var y = typeof c == "number" || typeof c > "u" ? function() {
      return c;
    } : c, b = typeof u == "number" || typeof u > "u" ? function() {
      return u;
    } : u;
    return s.map(function(g) {
      return g.map(function(f, x) {
        return {
          x: y(f, x, g),
          y: b(f, x, g)
        };
      });
    });
  }, [c, u, s]), m = z.useMemo(function() {
    var y = Ic({
      x: c,
      y: u,
      defined: i,
      curve: a
    });
    return y(s.flat()) || "";
  }, [c, u, i, a, s]), p = z.useMemo(function() {
    return kp({
      path: m,
      segmentation: l,
      pointsInSegments: h,
      sampleRate: o
    });
  }, [m, l, h, o]);
  return /* @__PURE__ */ r.createElement("g", null, p.map(function(y, b) {
    return t ? /* @__PURE__ */ r.createElement(r.Fragment, {
      key: b
    }, t({
      index: b,
      segment: y,
      styles: d[b] || d[b % d.length]
    })) : /* @__PURE__ */ r.createElement(en, Pi({
      key: b,
      className: n,
      data: y,
      x: wp,
      y: Cp
    }, d[b] || d[b % d.length]));
  }));
}
Yc.propTypes = {
  segments: B.arrayOf(B.array).isRequired,
  styles: B.array.isRequired,
  children: B.func,
  className: B.string
};
var Pp = ["tooltipOpen"];
function Np(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function ur() {
  return ur = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ur.apply(this, arguments);
}
function Xc(e) {
  var t = z.useState(ur({
    tooltipOpen: !1
  }, e)), n = t[0], a = t[1], i = z.useCallback(function(o) {
    return a(typeof o == "function" ? function(s) {
      s.tooltipOpen;
      var c = Np(s, Pp);
      return ur({}, o(c), {
        tooltipOpen: !0
      });
    } : {
      tooltipOpen: !0,
      tooltipLeft: o.tooltipLeft,
      tooltipTop: o.tooltipTop,
      tooltipData: o.tooltipData
    });
  }, [a]), l = z.useCallback(function() {
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
var Lp = ["className", "top", "left", "offsetLeft", "offsetTop", "style", "children", "unstyled", "applyPositionStyle"];
function dr() {
  return dr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, dr.apply(this, arguments);
}
function Op(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Qc = {
  position: "absolute",
  backgroundColor: "white",
  color: "#666666",
  padding: ".3rem .5rem",
  borderRadius: "3px",
  fontSize: "14px",
  boxShadow: "0 1px 2px rgba(33,33,33,0.2)",
  lineHeight: "1em",
  pointerEvents: "none"
}, pl = /* @__PURE__ */ r.forwardRef(function(e, t) {
  var n = e.className, a = e.top, i = e.left, l = e.offsetLeft, o = l === void 0 ? 10 : l, s = e.offsetTop, c = s === void 0 ? 10 : s, u = e.style, d = u === void 0 ? Qc : u, h = e.children, m = e.unstyled, p = m === void 0 ? !1 : m, y = e.applyPositionStyle, b = y === void 0 ? !1 : y, g = Op(e, Lp);
  return /* @__PURE__ */ r.createElement("div", dr({
    ref: t,
    className: lt("visx-tooltip", n),
    style: dr({
      top: a == null || c == null ? a : a + c,
      left: i == null || o == null ? i : i + o
    }, b && {
      position: "absolute"
    }, !p && d)
  }, g), h);
});
pl.propTypes = {
  children: B.node,
  className: B.string,
  left: B.number,
  offsetLeft: B.number,
  offsetTop: B.number,
  top: B.number,
  applyPositionStyle: B.bool,
  unstyled: B.bool
};
pl.displayName = "Tooltip";
const _p = pl;
function Ni() {
  return Ni = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ni.apply(this, arguments);
}
function Dp(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Mp(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Li(e, t);
}
function Li(e, t) {
  return Li = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, i) {
    return a.__proto__ = i, a;
  }, Li(e, t);
}
var as = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0
};
function $p(e) {
  var t;
  return t = /* @__PURE__ */ function(n) {
    Mp(a, n);
    function a(l) {
      var o;
      return o = n.call(this, l) || this, o.state = {
        rect: void 0,
        parentRect: void 0
      }, o.nodeRef = /* @__PURE__ */ r.createRef(), o.getRects = o.getRects.bind(Dp(o)), o;
    }
    var i = a.prototype;
    return i.componentDidMount = function() {
      var o, s = this;
      this.node = (o = this.nodeRef) != null && o.current ? this.nodeRef.current : Yu.findDOMNode(this), this.setState(function() {
        return s.getRects();
      });
    }, i.getRects = function() {
      if (!this.node)
        return this.state;
      var o = this.node, s = o.parentNode, c = o.getBoundingClientRect ? o.getBoundingClientRect() : as, u = s != null && s.getBoundingClientRect ? s.getBoundingClientRect() : as;
      return {
        rect: c,
        parentRect: u
      };
    }, i.render = function() {
      return /* @__PURE__ */ r.createElement(e, Ni({
        nodeRef: this.nodeRef,
        getRects: this.getRects
      }, this.state, this.props));
    }, a;
  }(r.PureComponent), t.displayName = "withBoundingRects(" + (e.displayName || "") + ")", t;
}
var Zc = /* @__PURE__ */ z.createContext({
  isFlippedVertically: !1,
  isFlippedHorizontally: !1
}), zp = Zc.Provider;
Zc.Consumer;
var Rp = ["children", "getRects", "left", "offsetLeft", "offsetTop", "parentRect", "rect", "style", "top", "unstyled", "nodeRef"];
function mr() {
  return mr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, mr.apply(this, arguments);
}
function Fp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Gc(e) {
  var t = e.children;
  e.getRects;
  var n = e.left, a = n === void 0 ? 0 : n, i = e.offsetLeft, l = i === void 0 ? 10 : i, o = e.offsetTop, s = o === void 0 ? 10 : o, c = e.parentRect, u = e.rect, d = e.style, h = d === void 0 ? Qc : d, m = e.top, p = m === void 0 ? 0 : m, y = e.unstyled, b = y === void 0 ? !1 : y, g = e.nodeRef, f = Fp(e, Rp), x, E = !1, v = !1;
  if (u && c) {
    var S = a, A = p;
    if (c.width) {
      var T = S + l + u.width - c.width, O = u.width - S - l;
      E = T > 0 && T > O;
    } else {
      var w = S + l + u.width - window.innerWidth, C = u.width - S - l;
      E = w > 0 && w > C;
    }
    if (c.height) {
      var N = A + s + u.height - c.height, k = u.height - A - s;
      v = N > 0 && N > k;
    } else
      v = A + s + u.height > window.innerHeight;
    S = E ? S - u.width - l : S + l, A = v ? A - u.height - s : A + s, S = Math.round(S), A = Math.round(A), x = "translate(" + S + "px, " + A + "px)";
  }
  return /* @__PURE__ */ r.createElement(_p, mr({
    ref: g,
    style: mr({
      left: 0,
      top: 0,
      transform: x
    }, !b && h)
  }, f), /* @__PURE__ */ r.createElement(zp, {
    value: {
      isFlippedVertically: !v,
      isFlippedHorizontally: !E
    }
  }, t));
}
Gc.propTypes = {
  nodeRef: B.oneOfType([B.string, B.func, B.object])
};
const Jc = $p(Gc);
var qn = /* @__PURE__ */ function() {
  function e(n) {
    var a = n.x, i = a === void 0 ? 0 : a, l = n.y, o = l === void 0 ? 0 : l;
    this.x = 0, this.y = 0, this.x = i, this.y = o;
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
function Bp(e, t) {
  return new qn({
    x: e.x + t.x,
    y: e.y + t.y
  });
}
function Vp(e, t) {
  return new qn({
    x: e.x - t.x,
    y: e.y - t.y
  });
}
const Hp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Point: qn,
  subtractPoints: Vp,
  sumPoints: Bp
}, Symbol.toStringTag, { value: "Module" }));
function Wp(e) {
  return !!e && e instanceof Element;
}
function Kp(e) {
  return !!e && (e instanceof SVGElement || "ownerSVGElement" in e);
}
function Ip(e) {
  return !!e && "createSVGPoint" in e;
}
function jp(e) {
  return !!e && "getScreenCTM" in e;
}
function qp(e) {
  return !!e && "changedTouches" in e;
}
function Up(e) {
  return !!e && "clientX" in e;
}
function Yp(e) {
  return !!e && (e instanceof Event || "nativeEvent" in e && e.nativeEvent instanceof Event);
}
function la() {
  return la = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, la.apply(this, arguments);
}
var ei = {
  x: 0,
  y: 0
};
function Xp(e) {
  if (!e)
    return la({}, ei);
  if (qp(e))
    return e.changedTouches.length > 0 ? {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    } : la({}, ei);
  if (Up(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  var t = e == null ? void 0 : e.target, n = t && "getBoundingClientRect" in t ? t.getBoundingClientRect() : null;
  return n ? {
    x: n.x + n.width / 2,
    y: n.y + n.height / 2
  } : la({}, ei);
}
function Oi(e, t) {
  if (!e || !t)
    return null;
  var n = Xp(t), a = Kp(e) ? e.ownerSVGElement : e, i = jp(a) ? a.getScreenCTM() : null;
  if (Ip(a) && i) {
    var l = a.createSVGPoint();
    return l.x = n.x, l.y = n.y, l = l.matrixTransform(i.inverse()), new qn({
      x: l.x,
      y: l.y
    });
  }
  var o = e.getBoundingClientRect();
  return new qn({
    x: n.x - o.left - e.clientLeft,
    y: n.y - o.top - e.clientTop
  });
}
function _i(e, t) {
  if (Wp(e) && t)
    return Oi(e, t);
  if (Yp(e)) {
    var n = e, a = n.target;
    if (a)
      return Oi(a, n);
  }
  return null;
}
const Qp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  localPoint: _i,
  touchPoint: Oi
}, Symbol.toStringTag, { value: "Module" })), Zp = new Ds(), eu = (e) => {
  const { tableData: t, config: n, formatNumber: a, capitalize: i, formatDate: l, formatTooltipsDate: o, parseDate: s, setSharedFilter: c } = z.useContext(De), { xScale: u, yScale: d, showTooltip: h, hideTooltip: m } = e, { xAxis: p, visualizationType: y, orientation: b, yAxis: g, runtime: f } = n, x = Zp.applySuppression(t, n.suppressedData), E = (F, V) => {
    const { x: H, y: U } = V, R = {
      data: F || {},
      dataXPosition: H + 10,
      dataYPosition: U
    };
    return {
      tooltipLeft: R.dataXPosition,
      tooltipTop: R.dataYPosition,
      tooltipData: R
    };
  }, v = (F, V) => {
    F.stopPropagation();
    const H = _i(F), { x: U, y: Y } = H, { data: R, arc: $ } = V ?? {}, j = T(U - Number(n.yAxis.size || 0)), q = y !== "Pie" ? n.series.filter((D) => D.tooltip === !0).map((D) => D.dataKey) : n.series.map((D) => D.dataKey);
    q.push(n.xAxis.dataKey), n.visualizationType === "Forecasting" && n.series.map((D) => {
      D.confidenceIntervals.map((ce) => {
        ce.showInTooltip && (q.push(ce.high), q.push(ce.low));
      });
    });
    function X(D) {
      let ce = [];
      for (let le in D)
        D.hasOwnProperty(le) && ce.push(D[le].name);
      return ce;
    }
    q.push(...X(n.columns)), q.push(...X(n.columns));
    const ne = C(j, q), de = x.filter((D) => D[p.dataKey] === O(Y)), Ae = b === "vertical" ? ne : de, we = (D) => {
      const ce = n.series.filter((pe) => pe.dataKey === D)[0];
      return ce != null && ce.axis ? String(ce.axis).toLowerCase() : "left";
    }, K = (() => {
      var he, Ee, Ce;
      const D = n.columns, ce = [], le = [];
      for (const [ke, Se] of Object.entries(D)) {
        const ye = {
          addColPrefix: n.columns[ke].prefix,
          addColSuffix: n.columns[ke].suffix,
          addColRoundTo: n.columns[ke].roundToPlace ? n.columns[ke].roundToPlace : "",
          addColCommas: n.columns[ke].commas
        };
        let re = null;
        n.visualizationType === "Pie" ? re = $ == null ? void 0 : $.data[Se.name] : re = (he = Ae[0]) == null ? void 0 : he[Se.name];
        const J = Ms(re, "left", !0, n, ye);
        Se.tooltips && ce.push([Se.label, J]);
      }
      const pe = [];
      return ce.forEach((ke) => {
        pe.push([ke[0], ke[1]]);
      }), y === "Pie" && le.push(
        // ignore
        [n.xAxis.dataKey, R],
        [n.runtime.yAxis.dataKey, a($ == null ? void 0 : $.data[n.runtime.yAxis.dataKey])],
        ["Percent", `${Math.round((($ == null ? void 0 : $.endAngle) - ($ == null ? void 0 : $.startAngle)) * 180 / Math.PI / 360 * 100) + "%"}`]
      ), y === "Forest Plot" && le.push([n.xAxis.dataKey, O(Y)]), y !== "Pie" && y !== "Forest Plot" && le.push(
        ...(Ce = (Ee = N()) == null ? void 0 : Ee.filter(Boolean)) == null ? void 0 : Ce.flatMap((ke) => {
          var ye, re, J;
          const Se = ke === n.xAxis.dataKey ? (ye = Ae[0]) == null ? void 0 : ye[ke] : a((re = Ae[0]) == null ? void 0 : re[ke], we(ke));
          return (J = Ae == null ? void 0 : Ae[0]) != null && J[ke] ? [[ke, Se, we(ke)]] : [];
        })
      ), [...le, ...pe];
    })();
    if (!K)
      return;
    const ae = E(K, H);
    h(ae);
  }, S = () => {
    n.visualizationType === "Area Chart" ? setTimeout(() => {
      m();
    }, 3e3) : m();
  }, A = (F) => {
    if (n.xAxis.type === "categorical" || n.visualizationType === "Combo") {
      let V = u.step();
      const U = Math.floor(Number(F) / V);
      return u.domain()[U - 1];
    }
    if (n.xAxis.type === "date" && n.visualizationType !== "Combo") {
      const V = fo((R) => s(R[n.xAxis.dataKey])).left, H = u.invert(u(F)), U = V(n.data, H, 1);
      return s(n.data[U - 1][n.xAxis.dataKey]);
    }
  }, T = (F, V = !1) => {
    if (y !== "Pie" && b !== "horizontal") {
      if (u.type === "point" || p.type === "continuous" || p.type === "date") {
        let H = null, U = Number.MAX_VALUE, Y = F;
        return x.forEach((R) => {
          const $ = p.type === "date" ? u(s(R[p.dataKey])) : u(R[p.dataKey]);
          let j = n.barHeight;
          const q = Math.abs(Number($ - Y + (V ? j * 2 : 0)));
          q <= U && (U = q, H = (p.type === "date", R[p.dataKey]));
        }), H;
      }
      if (n.xAxis.type === "categorical" || y === "Combo" && b !== "horizontal" && y !== "Forest Plot") {
        let U = (u.range()[1] - u.range()[0]) / (u.domain().length + 1);
        const R = Math.floor((Number(F) - U / 2) / U);
        return u.domain()[R];
      }
      if (n.xAxis.type === "date" && y !== "Combo" && b !== "horizontal") {
        const H = fo(($) => s($[n.xAxis.dataKey])).left, U = u.invert(F), Y = H(n.data, U, 1);
        return s(n.data[Y - 1][n.xAxis.dataKey]);
      }
    }
  }, O = (F, V) => {
    if (y === "Pie")
      return;
    let H = Number.MAX_VALUE, U = null;
    return x.forEach((Y, R) => {
      const $ = d(y !== "Forest Plot" ? Y[n.xAxis.dataKey] : R), j = Math.abs($ - F);
      j < H && (H = j, U = V ? Y[V] : Y[n.xAxis.dataKey]);
    }), U;
  }, w = (F) => {
    var V, H;
    try {
      const U = _i(F), { x: Y } = U;
      if (!Y)
        throw new Error("COVE: no x value in handleTooltipClick.");
      let R = T(Y, !0), $ = (V = n.data) == null ? void 0 : V.filter((j) => j[n.xAxis.dataKey] === R);
      if (!R)
        throw new Error("COVE: no closest x scale value in handleTooltipClick");
      if (p.type === "date" && R && (R = new Date(R), R = l(R), $ = (H = n.data) == null ? void 0 : H.filter((j) => l(new Date(j[n.xAxis.dataKey])) === R)), !$[0])
        throw new Error(`COVE: no data found matching the closest xScale value: ${R}`);
      c && (n != null && n.uid) && ($ != null && $[0]) && c(n.uid, $[0]);
    } catch (U) {
      console.error(U.message);
    }
  }, C = (F, V) => {
    try {
      let H;
      return p.type === "categorical" ? H = x.filter((Y) => Y[p.dataKey] === F) : H = x.filter((Y) => Y[p.dataKey] === F), !H || H.length === 0 ? [] : H.map((Y) => Object.fromEntries(Object.entries(Y).filter(([R, $]) => V.includes(R))));
    } catch (H) {
      console.error("COVE", H);
    }
  }, N = () => {
    var F;
    try {
      let V, H = [], U = [];
      if ((F = n.series) == null || F.forEach((Y) => {
        Y.type === "Forecasting" && (H.push(Y.stageColumn), Y == null || Y.confidenceIntervals.forEach((R) => {
          R.showInTooltip === !0 && (U.push(R.low), U.push(R.high));
        }));
      }), !n.dashboard)
        switch (y) {
          case "Combo":
            V = [f.xAxis.dataKey, ...f == null ? void 0 : f.seriesKeys, ...U];
            break;
          case "Forecasting":
            V = [f.xAxis.dataKey, ...H, ...U];
            break;
          case "Line":
            V = [f.xAxis.dataKey, ...f == null ? void 0 : f.seriesKeys];
            break;
          case "Area Chart":
            V = [f.xAxis.dataKey, ...f == null ? void 0 : f.seriesKeys];
            break;
          case "Bar":
            V = b === "vertical" ? [f.xAxis.dataKey, ...f == null ? void 0 : f.seriesKeys] : [f.yAxis.dataKey, ...f == null ? void 0 : f.seriesKeys];
            break;
          case "Pie":
            V = [f.xAxis.dataKey, ...f == null ? void 0 : f.seriesKeys];
          default:
            throw new Error("No visualization type found in handleTooltipMouseOver");
        }
      return n.dashboard && (V = [f.xAxis.dataKey, ...f == null ? void 0 : f.barSeriesKeys, ...f == null ? void 0 : f.lineSeriesKeys, ...H, ...U]), V;
    } catch (V) {
      console.error("COVE", V);
    }
  }, k = (F) => {
    const { dataXPosition: V, dataYPosition: H } = F;
    return {
      opacity: n.tooltips.opacity ? n.tooltips.opacity / 100 : 1,
      position: "absolute",
      backgroundColor: "white",
      borderRadius: "4px",
      transform: `translate(${V}px, ${Number(H)}px)`
    };
  }, _ = (F) => {
    var H, U;
    let V = n.series.filter((Y) => Y.dataKey === F);
    return (H = V[0]) != null && H.name ? (U = V[0]) == null ? void 0 : U.name : F;
  };
  return {
    getIncludedTooltipSeries: N,
    getXValueFromCoordinate: T,
    getXValueFromCoordinateDate: A,
    getYScaleValues: C,
    handleTooltipClick: w,
    handleTooltipMouseOff: S,
    handleTooltipMouseOver: v,
    TooltipListItem: ({ item: F }) => {
      const [V, H] = F, [U, Y, R] = H;
      if (y === "Forest Plot")
        return U === n.xAxis.dataKey ? /* @__PURE__ */ r.createElement("li", { className: "tooltip-heading" }, `${i(n.xAxis.dataKey ? `${n.xAxis.dataKey}: ` : "")} ${n.yAxis.type === "date" ? l(s(U, !1)) : Y}`) : /* @__PURE__ */ r.createElement("li", { className: "tooltip-body" }, `${_(U)}: ${a(Y, "left")}`);
      const $ = n.tooltips.dateDisplayFormat ? o(s(Y, !1)) : l(s(Y, !1));
      return y === "Bar" && b === "horizontal" && U === n.xAxis.dataKey ? /* @__PURE__ */ r.createElement("li", { className: "tooltip-heading" }, `${i(n.runtime.yAxis.label ? `${n.runtime.yAxis.label}: ` : "")} ${n.xAxis.type === "date" ? $ : Y}`) : U === n.xAxis.dataKey ? /* @__PURE__ */ r.createElement("li", { className: "tooltip-heading" }, `${i(n.runtime.xAxis.label ? `${n.runtime.xAxis.label}: ` : "")} ${n.xAxis.type === "date" ? $ : Y}`) : /* @__PURE__ */ r.createElement("li", { className: "tooltip-body" }, `${_(U)}: ${Y}`);
    },
    tooltipStyles: k
  };
};
function yl(e, { threshold: t = 0, root: n = null, rootMargin: a = "0%", freezeOnceVisible: i = !1 }) {
  const [l, o] = z.useState(), s = (l == null ? void 0 : l.isIntersecting) && i, c = ([u]) => {
    o(u);
  };
  return z.useEffect(() => {
    setTimeout(() => {
      const u = e == null ? void 0 : e.current;
      if (!!!window.IntersectionObserver || s || !u)
        return;
      const h = { threshold: t, root: n, rootMargin: a }, m = new IntersectionObserver(c, h);
      return m.observe(u), () => m.disconnect();
    }, 500);
  }, [e, t, n, a, s]), l;
}
const tu = (e, t = !1) => {
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
var Gp = ["flexDirection", "alignItems", "margin", "display", "children"];
function Di() {
  return Di = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Di.apply(this, arguments);
}
function Jp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function fr(e) {
  var t = e.flexDirection, n = t === void 0 ? "row" : t, a = e.alignItems, i = a === void 0 ? "center" : a, l = e.margin, o = l === void 0 ? "0" : l, s = e.display, c = s === void 0 ? "flex" : s, u = e.children, d = Jp(e, Gp);
  return /* @__PURE__ */ r.createElement("div", Di({
    className: "visx-legend-item",
    style: {
      display: c,
      alignItems: i,
      flexDirection: n,
      margin: o
    }
  }, d), u);
}
fr.propTypes = {
  alignItems: B.string,
  margin: B.oneOfType([B.string, B.number]),
  children: B.node,
  display: B.string
};
var ey = ["flex", "label", "margin", "align", "children"];
function Mi() {
  return Mi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Mi.apply(this, arguments);
}
function ty(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function hr(e) {
  var t = e.flex, n = t === void 0 ? "1" : t, a = e.label, i = e.margin, l = i === void 0 ? "5px 0" : i, o = e.align, s = o === void 0 ? "left" : o, c = e.children, u = ty(e, ey);
  return /* @__PURE__ */ r.createElement("div", Mi({
    className: "visx-legend-label",
    style: {
      justifyContent: s,
      display: "flex",
      flex: n,
      margin: l
    }
  }, u), c || a);
}
hr.propTypes = {
  align: B.string,
  label: B.node,
  flex: B.oneOfType([B.string, B.number]),
  margin: B.oneOfType([B.string, B.number]),
  children: B.node
};
function $i() {
  return $i = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, $i.apply(this, arguments);
}
function gl(e) {
  var t = e.fill, n = e.width, a = e.height, i = e.style;
  return /* @__PURE__ */ r.createElement("div", {
    style: $i({
      width: n,
      height: a,
      background: t
    }, i)
  });
}
gl.propTypes = {
  fill: B.string,
  width: B.oneOfType([B.string, B.number]),
  height: B.oneOfType([B.string, B.number])
};
function nu(e) {
  var t = e.fill, n = e.width, a = e.height, i = e.style, l = typeof n == "string" || typeof n > "u" ? 0 : n, o = typeof a == "string" || typeof a > "u" ? 0 : a, s = Math.max(l, o), c = s / 2;
  return /* @__PURE__ */ r.createElement("svg", {
    width: s,
    height: s
  }, /* @__PURE__ */ r.createElement(ve, {
    top: c,
    left: c
  }, /* @__PURE__ */ r.createElement("circle", {
    r: c,
    fill: t,
    style: i
  })));
}
nu.propTypes = {
  fill: B.string,
  width: B.oneOfType([B.string, B.number]),
  height: B.oneOfType([B.string, B.number])
};
function au(e) {
  var t = e.fill, n = e.width, a = e.height, i = e.style, l = typeof a == "string" || typeof a > "u" ? 0 : a, o = typeof (i == null ? void 0 : i.strokeWidth) == "number" ? i == null ? void 0 : i.strokeWidth : 2;
  return /* @__PURE__ */ r.createElement("svg", {
    width: n,
    height: a
  }, /* @__PURE__ */ r.createElement(ve, {
    top: l / 2 - o / 2
  }, /* @__PURE__ */ r.createElement("line", {
    x1: 0,
    x2: n,
    y1: 0,
    y2: 0,
    stroke: t,
    strokeWidth: o,
    style: i
  })));
}
au.propTypes = {
  fill: B.string,
  width: B.oneOfType([B.string, B.number]),
  height: B.oneOfType([B.string, B.number])
};
function oa() {
  return oa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, oa.apply(this, arguments);
}
var ti = function() {
};
function ny(e) {
  var t = e.shape, n = t === void 0 ? "rect" : t, a = e.fill, i = a === void 0 ? ti : a, l = e.size, o = l === void 0 ? ti : l, s = e.width, c = e.height, u = e.label, d = e.item, h = e.itemIndex, m = e.shapeStyle, p = m === void 0 ? ti : m, y = {
    width: s,
    height: c,
    item: d,
    itemIndex: h,
    label: u,
    fill: i(oa({}, u)),
    size: o(oa({}, u)),
    style: p(oa({}, u))
  };
  return typeof n == "string" ? n === "circle" ? /* @__PURE__ */ r.createElement(nu, y) : n === "line" ? /* @__PURE__ */ r.createElement(au, y) : /* @__PURE__ */ r.createElement(gl, y) : /* @__PURE__ */ r.isValidElement(n) ? /* @__PURE__ */ r.cloneElement(n, y) : n ? /* @__PURE__ */ r.createElement(n, y) : null;
}
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
function ru(e) {
  var t = e.shape, n = t === void 0 ? gl : t, a = e.width, i = e.height, l = e.margin, o = e.label, s = e.item, c = e.itemIndex, u = e.fill, d = e.size, h = e.shapeStyle;
  return /* @__PURE__ */ r.createElement("div", {
    className: "visx-legend-shape",
    style: {
      display: "flex",
      width: d ? d(pr({}, o)) : a,
      height: d ? d(pr({}, o)) : i,
      margin: l
    }
  }, ny({
    shape: n,
    item: s,
    itemIndex: c,
    label: o,
    width: a,
    height: i,
    fill: u,
    shapeStyle: h
  }));
}
ru.propTypes = {
  itemIndex: B.number.isRequired,
  margin: B.oneOfType([B.string, B.number]),
  width: B.oneOfType([B.string, B.number]),
  height: B.oneOfType([B.string, B.number])
};
function iu(e) {
  return e && typeof e == "object" && "value" in e && typeof e.value < "u" ? e.value : e;
}
function rs(e) {
  return String(iu(e));
}
function ay(e) {
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
var ry = ["className", "style", "scale", "shape", "domain", "fill", "size", "labelFormat", "labelTransform", "shapeWidth", "shapeHeight", "shapeMargin", "shapeStyle", "labelAlign", "labelFlex", "labelMargin", "itemMargin", "direction", "itemDirection", "legendLabelProps", "children"];
function sa() {
  return sa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, sa.apply(this, arguments);
}
function iy(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var ly = {
  display: "flex"
};
function lu(e) {
  var t = e.className, n = e.style, a = n === void 0 ? ly : n, i = e.scale, l = e.shape, o = e.domain, s = e.fill, c = s === void 0 ? rs : s, u = e.size, d = u === void 0 ? rs : u, h = e.labelFormat, m = h === void 0 ? iu : h, p = e.labelTransform, y = p === void 0 ? ay : p, b = e.shapeWidth, g = b === void 0 ? 15 : b, f = e.shapeHeight, x = f === void 0 ? 15 : f, E = e.shapeMargin, v = E === void 0 ? "2px 4px 2px 0" : E, S = e.shapeStyle, A = e.labelAlign, T = A === void 0 ? "left" : A, O = e.labelFlex, w = O === void 0 ? "1" : O, C = e.labelMargin, N = C === void 0 ? "0 4px" : C, k = e.itemMargin, _ = k === void 0 ? "0" : k, W = e.direction, F = W === void 0 ? "column" : W, V = e.itemDirection, H = V === void 0 ? "row" : V, U = e.legendLabelProps, Y = e.children, R = iy(e, ry), $ = o || ("domain" in i ? i.domain() : []), j = y({
    scale: i,
    labelFormat: m
  }), q = $.map(j);
  return Y ? /* @__PURE__ */ r.createElement(r.Fragment, null, Y(q)) : /* @__PURE__ */ r.createElement("div", {
    className: lt("visx-legend", t),
    style: sa({}, a, {
      flexDirection: F
    })
  }, q.map(function(X, ne) {
    return /* @__PURE__ */ r.createElement(fr, sa({
      key: "legend-" + X.text + "-" + ne,
      margin: _,
      flexDirection: H
    }, R), /* @__PURE__ */ r.createElement(ru, {
      shape: l,
      height: x,
      width: g,
      margin: v,
      item: $[ne],
      itemIndex: ne,
      label: X,
      fill: c,
      size: d,
      shapeStyle: S
    }), /* @__PURE__ */ r.createElement(hr, sa({
      label: X.text,
      flex: w,
      margin: N,
      align: T
    }, U)));
  }));
}
lu.propTypes = {
  children: B.func,
  className: B.string,
  domain: B.array,
  shapeWidth: B.oneOfType([B.string, B.number]),
  shapeHeight: B.oneOfType([B.string, B.number]),
  shapeMargin: B.oneOfType([B.string, B.number]),
  labelAlign: B.string,
  labelFlex: B.oneOfType([B.string, B.number]),
  labelMargin: B.oneOfType([B.string, B.number]),
  itemMargin: B.oneOfType([B.string, B.number]),
  fill: B.func,
  size: B.func,
  shapeStyle: B.func
};
function oy(e) {
  return /* @__PURE__ */ r.createElement(lu, e);
}
function sy(e) {
  let t = ["legend-container"], n = ["legend-container__inner"];
  return e.legend.position === "left" && t.push("left"), e.legend.position === "bottom" && (t.push("bottom"), n.push("bottom")), e.legend.position === "bottom" && e.legend.singleRow && n.push("single-row"), e.legend.reverseLabelOrder && (n.push("d-flex"), n.push("flex-column-reverse")), e.legend.position === "bottom" && e.legend.verticalSorted && n.push("vertical-sorted"), {
    containerClasses: t,
    innerClasses: n
  };
}
const _r = (e, t) => {
  var b;
  const { formatDate: n, parseDate: a } = z.useContext(De);
  let i = [], l = "", o = [], s = [];
  ((b = e.series) == null ? void 0 : b.length) > 0 && e.data ? (i = e.series[0], l = e.series[0].dataKey, o = e.highlightedBarValues, s = e.data.map((g) => g[e.xAxis.dataKey])) : (i = [], l = "", o = [], s = []);
  const c = (g, f) => {
    const x = [...e.highlightedBarValues];
    x[f].borderWidth = g.target.value, t({
      ...e,
      highlightedBarValues: x
    });
  }, u = (g, f) => {
    g.preventDefault();
    const x = [...e.highlightedBarValues];
    x[f].value = g.target.value, x[f].dataKey = l, t({
      ...e,
      highlightedBarValues: x
    });
  }, d = (g, f) => {
    g.preventDefault();
    const x = [...e.highlightedBarValues];
    x.push({ dataKey: l }), t({
      ...e,
      highlightedBarValues: x
    });
  }, h = (g, f) => {
    g.preventDefault();
    const x = [...e.highlightedBarValues];
    x.splice(f, 1), t({
      ...e,
      highlightedBarValues: x
    });
  }, m = (g, f) => {
    const x = [...e.highlightedBarValues];
    x[f].color = g.target.value, t({
      ...e
    });
  }, p = (g, f) => {
    const x = [...e.highlightedBarValues];
    x[f].legendLabel = g.target.value, t({
      ...e,
      copyOfHighlightedBarValues: x
    });
  }, y = () => {
  };
  return y.checkFontColor = (g, f, x) => {
    if (e.xAxis.type === "date") {
      if (y.formatDates(f).includes(g))
        return "#000";
    } else if (f.includes(g))
      return "#000";
    return x;
  }, y.formatDates = (g) => g.map((f) => f ? n(a(f)) : !1), y.findDuplicates = (g) => {
    const f = {};
    return g == null ? void 0 : g.filter((E) => {
      const { legendLabel: v } = E;
      return f[v] ? !1 : (f[v] = !0, !0);
    });
  }, {
    HighLightedBarUtils: y,
    highlightedSeries: i,
    highlightedSeriesKey: l,
    highlightedBarValues: o,
    highlightedSeriesValues: s,
    handleUpdateHighlightedBar: u,
    handleAddNewHighlightedBar: d,
    handleRemoveHighlightedBar: h,
    handleUpdateHighlightedBarColor: m,
    handleHighlightedBarLegendLabel: p,
    handleUpdateHighlightedBorderWidth: c
  };
}, zi = (e) => {
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
}, ou = ({ config: e, colorScale: t, seriesHighlight: n, highlight: a, highlightReset: i, currentViewport: l, formatLabels: o }) => {
  var f;
  const { innerClasses: s, containerClasses: c } = sy(e), { runtime: u, orientation: d, legend: h } = e;
  if (!h)
    return null;
  const m = Ji({
    domain: (f = e.suppressedData) == null ? void 0 : f.map((x) => x.label),
    range: ["none"],
    unknown: "block"
  }), p = h.position === "bottom" || ["sm", "xs", "xxs"].includes(l), y = {
    marginBottom: p ? "15px" : "0px",
    marginTop: p && d === "horizontal" ? `${e.yAxis.label && e.isResponsiveTicks ? e.dynamicMarginTop : e.runtime.xAxis.size}px` : `${p ? e.dynamicMarginTop + 15 : 0}px`
  }, { HighLightedBarUtils: b } = _r(e);
  let g = b.findDuplicates(e.highlightedBarValues);
  return /* @__PURE__ */ r.createElement("aside", { style: y, id: "legend", className: c.join(" "), role: "region", "aria-label": "legend", tabIndex: 0 }, h.label && /* @__PURE__ */ r.createElement("h2", null, En(h.label)), h.description && /* @__PURE__ */ r.createElement("p", null, En(h.description)), /* @__PURE__ */ r.createElement(oy, { scale: t, itemDirection: "row", labelMargin: "0 20px 0 0", shapeMargin: "0 10px 0" }, (x) => {
    var E, v;
    return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: s.join(" ") }, o(x).map((S, A) => {
      var w, C, N, k;
      let T = ["legend-item", `legend-text--${S.text.replace(" ", "").toLowerCase()}`], O = S.datum;
      if (e.exclusions.active && ((w = e.exclusions.keys) != null && w.includes(O)))
        return null;
      if (u.seriesLabels) {
        let _ = e.runtime.seriesLabelsAll.indexOf(O);
        O = e.runtime.seriesKeys[_], ((C = u == null ? void 0 : u.forecastingSeriesKeys) == null ? void 0 : C.length) > 0 && (O = S.text);
      }
      return n.length > 0 && n.includes(O) === !1 && T.push("inactive"), /* @__PURE__ */ r.createElement(
        fr,
        {
          className: T.join(" "),
          tabIndex: 0,
          key: `legend-quantile-${A}`,
          onKeyPress: (_) => {
            _.key === "Enter" && a(S);
          },
          onClick: () => {
            a(S);
          }
        },
        e.visualizationType === "Line" && e.legend.lineMode ? /* @__PURE__ */ r.createElement("svg", { width: 40, height: 20 }, /* @__PURE__ */ r.createElement(Ye, { from: { x: 10, y: 10 }, to: { x: 40, y: 10 }, stroke: S.value, strokeWidth: 2, strokeDasharray: zi((N = e.series[A]) != null && N.type ? (k = e.series[A]) == null ? void 0 : k.type : "") })) : /* @__PURE__ */ r.createElement("div", { style: { display: "flex", flexDirection: "column" } }, /* @__PURE__ */ r.createElement(io, { margin: "0", fill: S.value, display: m(S.datum) }), /* @__PURE__ */ r.createElement("div", { style: { marginTop: "2px", marginRight: "6px" } }, S.icon)),
        /* @__PURE__ */ r.createElement(hr, { align: "left", margin: "0 0 0 4px" }, S.text)
      );
    }), g.map((S, A) => {
      let T = "legend-item", O = S.legendLabel;
      return O ? (n.length > 0 && n.includes(O) === !1 && (T += " inactive"), /* @__PURE__ */ r.createElement(
        fr,
        {
          className: T,
          tabIndex: 0,
          key: `legend-quantile-${A}`,
          onKeyPress: (w) => {
            w.key === "Enter" && a(S.legendLabel);
          },
          onClick: () => {
            a(S.legendLabel);
          }
        },
        /* @__PURE__ */ r.createElement(io, { fill: "transparent", borderColor: S.color ? S.color : "rgba(255, 102, 1)" }),
        " ",
        /* @__PURE__ */ r.createElement(hr, { align: "left", margin: "0 0 0 4px" }, S.legendLabel ? S.legendLabel : S.value)
      )) : !1;
    }), n.length > 0 && /* @__PURE__ */ r.createElement("button", { className: `legend-reset ${e.theme}`, onClick: (S) => i(S), tabIndex: 0 }, "Reset")), /* @__PURE__ */ r.createElement(r.Fragment, null, ((E = e == null ? void 0 : e.preliminaryData) == null ? void 0 : E.some((S) => S.label)) && e.visualizationType === "Line" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("div", { className: e.legend.singleRow && p ? "legend-container__inner bottom single-row" : "" }, (v = e == null ? void 0 : e.preliminaryData) == null ? void 0 : v.map((S, A) => /* @__PURE__ */ r.createElement(r.Fragment, null, S.label && /* @__PURE__ */ r.createElement("div", { style: { display: "flex", flexDirection: "row", alignItems: "center" } }, /* @__PURE__ */ r.createElement("svg", { style: { width: "50px" }, key: A, height: "23px" }, S.style.includes("Dashed") ? /* @__PURE__ */ r.createElement(Ye, { from: { x: 10, y: 10 }, to: { x: 40, y: 10 }, stroke: "#000", strokeWidth: 2, strokeDasharray: zi(S.style) }) : /* @__PURE__ */ r.createElement("circle", { r: 6, strokeWidth: 2, stroke: "#000", cx: 22, cy: 10, fill: "transparent" })), /* @__PURE__ */ r.createElement("span", { style: {} }, " ", S.label))))))));
  }));
};
function xl(e) {
  return zu({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" } }] })(e);
}
const su = (e, t, n, a) => (i) => {
  var m, p, y, b, g;
  const { visualizationType: l, visualizationSubType: o, series: s, runtime: c } = e, u = (f) => e.legend.reverseLabelOrder && e.legend.position === "bottom" ? f.reverse() : f, d = (m = e.legend) == null ? void 0 : m.colorCode;
  if (l === "Deviation Bar") {
    const [f, x] = Ya[e.twoColor.palette], E = {
      datum: "X",
      index: 0,
      text: `Below ${e.xAxis.targetLabel}`,
      value: f
    }, v = {
      datum: "X",
      index: 1,
      text: `Above ${e.xAxis.targetLabel}`,
      value: x
    };
    return u([E, v]);
  }
  if (l === "Bar" && o === "regular" && d && (s == null ? void 0 : s.length) === 1) {
    let f = Nt[e.palette];
    for (; t.length > f.length; )
      f = f.concat(f);
    f = f.slice(0, n.length);
    const x = /* @__PURE__ */ new Set();
    t.forEach((v) => x.add(v[d]));
    const E = Array.from(x).map((v, S) => ({
      datum: v,
      index: S,
      text: v,
      value: f[S]
    }));
    return u(E);
  }
  if (((p = c == null ? void 0 : c.forecastingSeriesKeys) == null ? void 0 : p.length) > 0) {
    let f = [];
    return (b = (y = e.runtime) == null ? void 0 : y.forecastingSeriesKeys) == null || b.map((x, E) => {
      var v;
      return (v = x == null ? void 0 : x.stages) == null ? void 0 : v.map((S, A) => {
        var w, C, N, k;
        let T = (w = Xa[S.color]) != null && w[2] ? (C = Xa[S.color]) == null ? void 0 : C[2] : (N = Nt[S.color]) != null && N[2] ? (k = Nt[S.color]) == null ? void 0 : k[2] : "#ccc";
        const O = {
          datum: S.key,
          index: A,
          text: S.key,
          value: T
        };
        f.push(O);
      });
    }), e.runtime.barSeriesKeys && e.runtime.barSeriesKeys.forEach((x, E) => {
      let v = Nt[e.palette][E] ? Nt[e.palette][E] : "#ccc";
      const S = {
        datum: x,
        index: E,
        text: x,
        value: v
      };
      f.push(S);
    }), u(f);
  }
  if (e.series.filter((f) => !!f.name).length > 0) {
    const f = /* @__PURE__ */ new Set();
    e.series.forEach((E) => {
      f.add(E.name || E.dataKey);
    });
    const x = Array.from(f).map((E, v) => ({
      datum: E,
      index: v,
      text: E,
      value: a(E)
    }));
    return u(x);
  }
  if ((e.visualizationType === "Bar" || e.visualizationType === "Combo") && e.visualizationSubType === "regular" && e.suppressedData) {
    const f = i.length - 1;
    let x = [];
    return (g = e.suppressedData) == null || g.forEach(({ label: E, icon: v }, S) => {
      if (E && v) {
        const A = {
          datum: E,
          index: f + S,
          text: E,
          icon: /* @__PURE__ */ r.createElement(xl, { color: "#000", size: 15 })
        };
        x.push(A);
      }
    }), [...i, ...x];
  }
  return u(i);
}, za = ({ startAngle: e, endAngle: t }) => ({
  startAngle: e,
  endAngle: t
}), cy = (e) => {
  const { transformedData: t, config: n, colorScale: a, currentViewport: i, dimensions: l, highlight: o, highlightReset: s, seriesHighlight: c } = z.useContext(De), { tooltipData: u, showTooltip: d, hideTooltip: h, tooltipOpen: m, tooltipLeft: p, tooltipTop: y } = Xc(), { handleTooltipMouseOver: b, handleTooltipMouseOff: g, TooltipListItem: f } = eu({
    xScale: !1,
    yScale: !1,
    showTooltip: d,
    hideTooltip: h
  }), [x, E] = z.useState(void 0), [v, S] = z.useState(!1), A = Object.values(n.columns).filter(($) => $.showInViz), T = A.length > 0, O = T ? "pivotColumn" : void 0, w = z.useMemo(() => {
    if (T) {
      let $ = [];
      const j = n.yAxis.dataKey, q = A.map((de) => de.name), X = [j, ...q], ne = n.xAxis.dataKey;
      return t.forEach((de) => {
        X.forEach((Ae) => {
          const we = de[Ae];
          we && $.push({
            [O]: we,
            [ne]: `${de[ne]} - ${Ae}`
          });
        });
      }), $;
    }
    return t;
  }, [t, T]), C = z.useMemo(() => {
    if (T) {
      const $ = {};
      w.forEach((X) => {
        $[X[n.xAxis.dataKey]] || ($[X[n.xAxis.dataKey]] = !0);
      });
      const j = Object.entries($).length;
      let q = n.customColors || Nt[n.palette];
      return q = q.slice(0, j), Ji({
        domain: Object.keys($),
        range: q,
        unknown: null
      });
    }
    return a;
  }, [a, T]), N = z.useRef(), k = yl(N, {
    freezeOnceVisible: !1
  });
  z.useEffect(() => {
    document.querySelector(".isEditor") && S((j) => !0);
  }), z.useEffect(() => {
    k != null && k.isIntersecting && n.animate && !v && setTimeout(() => {
      S(!0);
    }, 500);
  }, [k == null ? void 0 : k.isIntersecting, n.animate]);
  const _ = ({ arcs: $, path: j, getKey: q }) => {
    const X = Wf($, q, {
      from: za,
      enter: za,
      update: za,
      leave: za
    });
    return z.useEffect(() => {
      const ne = setTimeout(() => {
        h();
      }, 500);
      return () => {
        clearTimeout(ne);
      };
    }, [u]), /* @__PURE__ */ r.createElement(r.Fragment, null, X.map(({ item: ne, props: de, key: Ae }, we) => /* @__PURE__ */ r.createElement(ve, { className: ne.data[n.xAxis.dataKey], key: `${Ae}-${we}`, style: { opacity: n.legend.behavior === "highlight" && c.length > 0 && c.indexOf(ne.data[n.runtime.xAxis.dataKey]) === -1 ? 0.5 : 1 } }, /* @__PURE__ */ r.createElement(
      jo.path,
      {
        d: zf(
          [de.startAngle, de.endAngle],
          (G, K) => j({
            ...ne,
            startAngle: G,
            endAngle: K
          })
        ),
        fill: C(ne.data[n.runtime.xAxis.dataKey]),
        onMouseEnter: (G) => b(G, { data: ne.data[n.runtime.xAxis.dataKey], arc: ne }),
        onMouseLeave: (G) => g()
      }
    ))), X.map(({ item: ne, key: de }, Ae) => {
      const [we, G] = j.centroid(ne), K = ne.endAngle - ne.startAngle >= 0.1;
      let ae = "#FFF";
      return C(ne.data[n.runtime.xAxis.dataKey]) && Vt.contrast(ae, C(ne.data[n.runtime.xAxis.dataKey])) < 3.5 && (ae = "000"), /* @__PURE__ */ r.createElement(jo.g, { key: `${de}${Ae}` }, K && /* @__PURE__ */ r.createElement(Re, { style: { fill: ae }, x: we, y: G, dy: ".33em", textAnchor: "middle", pointerEvents: "none" }, Math.round((ne.endAngle - ne.startAngle) * 180 / Math.PI / 360 * 100) + "%"));
    }));
  };
  let [W] = l;
  n && n.legend && !n.legend.hide && i === "lg" && (W = W * 0.73);
  const F = n.heights.vertical, V = Math.min(W, F) / 2, H = F / 2, U = W / 2, Y = n.pieType === "Donut" ? 75 : V;
  z.useEffect(() => {
    if (c.length > 0 && n.legend.behavior !== "highlight") {
      let $ = [];
      w.forEach((j) => {
        c.indexOf(j[n.runtime.xAxis.dataKey]) !== -1 && $.push(j);
      }), E($);
    } else
      E(void 0);
  }, [c]);
  const R = su(n, [], w, C);
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Ht, { component: "PieChart" }, /* @__PURE__ */ r.createElement("svg", { width: W, height: F, className: `animated-pie group ${n.animate === !1 || v ? "animated" : ""}`, role: "img", "aria-label": tu(n) }, /* @__PURE__ */ r.createElement(ve, { top: H, left: U }, /* @__PURE__ */ r.createElement(
    Gh,
    {
      data: x || w,
      pieValue: ($) => $[O || n.runtime.yAxis.dataKey],
      pieSortValues: () => -1,
      innerRadius: V - Y,
      outerRadius: V
    },
    ($) => /* @__PURE__ */ r.createElement(_, { ...$, getKey: (j) => j.data[n.runtime.xAxis.dataKey] })
  ))), /* @__PURE__ */ r.createElement("div", { ref: N }), u && Object.entries(u.data).length > 0 && m && d && u.dataYPosition && u.dataXPosition && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${n.tooltips.opacity / 100}) !important`), /* @__PURE__ */ r.createElement(Jc, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: p, top: y }, /* @__PURE__ */ r.createElement("ul", null, typeof u == "object" && Object.entries(u.data).map(($, j) => /* @__PURE__ */ r.createElement(f, { item: $, key: j })))))), /* @__PURE__ */ r.createElement(ou, { config: n, colorScale: C, seriesHighlight: c, highlight: o, highlightReset: s, currentViewport: i, formatLabels: R }));
};
var uy = {
  top: "top",
  left: "left",
  right: "right",
  bottom: "bottom"
};
const wt = uy;
function dy(e) {
  var t = e.labelOffset, n = e.labelProps, a = e.orientation, i = e.range, l = e.tickLabelFontSize, o = e.tickLength, s = a === wt.left || a === wt.top ? -1 : 1, c, u, d;
  if (a === wt.top || a === wt.bottom) {
    var h = a === wt.bottom && typeof n.fontSize == "number" ? n.fontSize : 0;
    c = (Number(i[0]) + Number(i[i.length - 1])) / 2, u = s * (o + t + l + h);
  } else
    c = s * ((Number(i[0]) + Number(i[i.length - 1])) / 2), u = -(o + t), d = "rotate(" + s * 90 + ")";
  return {
    x: c,
    y: u,
    transform: d
  };
}
function ca() {
  return ca = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ca.apply(this, arguments);
}
function my(e) {
  var t = e.hideTicks, n = e.horizontal, a = e.orientation, i = e.tickClassName, l = e.tickComponent, o = e.tickLabelProps, s = e.tickStroke, c = s === void 0 ? "#222" : s, u = e.tickTransform, d = e.ticks, h = e.strokeWidth, m = e.tickLineProps;
  return d.map(function(p) {
    var y, b = p.value, g = p.index, f = p.from, x = p.to, E = p.formattedValue, v = (y = o[g]) != null ? y : {}, S = Math.max(10, typeof v.fontSize == "number" && v.fontSize || 0), A = x.y + (n && a !== wt.top ? S : 0);
    return /* @__PURE__ */ r.createElement(ve, {
      key: "visx-tick-" + b + "-" + g,
      className: lt("visx-axis-tick", i),
      transform: u
    }, !t && /* @__PURE__ */ r.createElement(Ye, ca({
      from: f,
      to: x,
      stroke: c,
      strokeWidth: h,
      strokeLinecap: "square"
    }, m)), l ? l(ca({}, v, {
      x: x.x,
      y: A,
      formattedValue: E
    })) : /* @__PURE__ */ r.createElement(Re, ca({
      x: x.x,
      y: A
    }, v), E));
  });
}
function yr() {
  return yr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, yr.apply(this, arguments);
}
var is = {
  textAnchor: "middle",
  fontFamily: "Arial",
  fontSize: 10,
  fill: "#222"
};
function fy(e) {
  var t = e.axisFromPoint, n = e.axisLineClassName, a = e.axisToPoint, i = e.hideAxisLine, l = e.hideTicks, o = e.horizontal, s = e.label, c = s === void 0 ? "" : s, u = e.labelClassName, d = e.labelOffset, h = d === void 0 ? 14 : d, m = e.labelProps, p = m === void 0 ? is : m, y = e.orientation, b = y === void 0 ? wt.bottom : y, g = e.scale, f = e.stroke, x = f === void 0 ? "#222" : f, E = e.strokeDasharray, v = e.strokeWidth, S = v === void 0 ? 1 : v, A = e.tickClassName, T = e.tickComponent, O = e.tickLineProps, w = e.tickLabelProps, C = e.tickLength, N = C === void 0 ? 8 : C, k = e.tickStroke, _ = k === void 0 ? "#222" : k, W = e.tickTransform, F = e.ticks, V = e.ticksComponent, H = V === void 0 ? my : V, U = yr({}, is, typeof w == "object" ? w : null), Y = F.map(function($) {
    var j = $.value, q = $.index;
    return typeof w == "function" ? w(j, q, F) : U;
  }), R = Math.max.apply(Math, [10].concat(Y.map(function($) {
    return typeof $.fontSize == "number" ? $.fontSize : 0;
  })));
  return /* @__PURE__ */ r.createElement(r.Fragment, null, H({
    hideTicks: l,
    horizontal: o,
    orientation: b,
    scale: g,
    tickClassName: A,
    tickComponent: T,
    tickLabelProps: Y,
    tickStroke: _,
    tickTransform: W,
    ticks: F,
    strokeWidth: S,
    tickLineProps: O
  }), !i && /* @__PURE__ */ r.createElement(Ye, {
    className: lt("visx-axis-line", n),
    from: t,
    to: a,
    stroke: x,
    strokeWidth: S,
    strokeDasharray: E
  }), c && /* @__PURE__ */ r.createElement(Re, yr({
    className: lt("visx-axis-label", u)
  }, dy({
    labelOffset: h,
    labelProps: p,
    orientation: b,
    range: g.range(),
    tickLabelFontSize: R,
    tickLength: N
  }), p), c));
}
function hy(e, t) {
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
function py(e) {
  var t = e;
  return "tickFormat" in t ? t.tickFormat() : Md;
}
function Ra(e, t) {
  var n = e.x, a = e.y;
  return new qn(t ? {
    x: n,
    y: a
  } : {
    x: a,
    y: n
  });
}
function Ri() {
  return Ri = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ri.apply(this, arguments);
}
var ni = 0;
function yy(e) {
  return e === void 0 && (e = ni), typeof e == "number" ? {
    start: e,
    end: e
  } : Ri({
    start: ni,
    end: ni
  }, e);
}
var gy = ["children", "axisClassName", "hideAxisLine", "hideTicks", "hideZero", "innerRef", "left", "numTicks", "orientation", "rangePadding", "scale", "tickFormat", "tickLength", "tickValues", "top"];
function Fi() {
  return Fi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Fi.apply(this, arguments);
}
function xy(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Dr(e) {
  var t = e.children, n = t === void 0 ? fy : t, a = e.axisClassName, i = e.hideAxisLine, l = i === void 0 ? !1 : i, o = e.hideTicks, s = o === void 0 ? !1 : o, c = e.hideZero, u = c === void 0 ? !1 : c, d = e.innerRef, h = e.left, m = h === void 0 ? 0 : h, p = e.numTicks, y = p === void 0 ? 10 : p, b = e.orientation, g = b === void 0 ? wt.bottom : b, f = e.rangePadding, x = f === void 0 ? 0 : f, E = e.scale, v = e.tickFormat, S = e.tickLength, A = S === void 0 ? 8 : S, T = e.tickValues, O = e.top, w = O === void 0 ? 0 : O, C = xy(e, gy), N = v ?? py(E), k = g === wt.left, _ = g === wt.top, W = _ || g === wt.bottom, F = hy(E), V = k || _ ? -1 : 1, H = E.range(), U = yy(x), Y = Ra({
    x: Number(H[0]) + 0.5 - U.start,
    y: 0
  }, W), R = Ra({
    x: Number(H[H.length - 1]) + 0.5 + U.end,
    y: 0
  }, W), $ = (T ?? Dd(E, y)).filter(function(q) {
    return !u || q !== 0 && q !== "0";
  }).map(function(q, X) {
    return {
      value: q,
      index: X
    };
  }), j = $.map(function(q) {
    var X = q.value, ne = q.index, de = _d(F(X));
    return {
      value: X,
      index: ne,
      from: Ra({
        x: de,
        y: 0
      }, W),
      to: Ra({
        x: de,
        y: A * V
      }, W),
      formattedValue: N(X, ne, $)
    };
  });
  return /* @__PURE__ */ r.createElement(ve, {
    className: lt("visx-axis", a),
    innerRef: d,
    top: w,
    left: m
  }, n(Fi({}, C, {
    axisFromPoint: Y,
    axisToPoint: R,
    hideAxisLine: l,
    hideTicks: s,
    hideZero: u,
    horizontal: W,
    numTicks: y,
    orientation: g,
    rangePadding: x,
    scale: E,
    tickFormat: N,
    tickLength: A,
    tickPosition: F,
    tickSign: V,
    ticks: j
  })));
}
var vy = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function gr() {
  return gr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, gr.apply(this, arguments);
}
function by(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Ey = {
  dx: "-0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "end"
};
function Ay(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 36 : n, i = e.tickLength, l = i === void 0 ? 8 : i, o = e.tickLabelProps, s = by(e, vy), c = typeof o == "function" ? o : gr({}, Ey, o);
  return /* @__PURE__ */ r.createElement(Dr, gr({
    axisClassName: lt("visx-axis-left", t),
    labelOffset: a,
    orientation: wt.left,
    tickLabelProps: c,
    tickLength: l
  }, s));
}
var Sy = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function xr() {
  return xr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, xr.apply(this, arguments);
}
function Ty(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var ky = {
  dx: "0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "start"
};
function wy(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 36 : n, i = e.tickLength, l = i === void 0 ? 8 : i, o = e.tickLabelProps, s = Ty(e, Sy), c = typeof o == "function" ? o : xr({}, ky, o);
  return /* @__PURE__ */ r.createElement(Dr, xr({
    axisClassName: lt("visx-axis-right", t),
    labelOffset: a,
    orientation: wt.right,
    tickLabelProps: c,
    tickLength: l
  }, s));
}
var Cy = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function vr() {
  return vr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, vr.apply(this, arguments);
}
function Py(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Ny = {
  dy: "-0.75em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function Ly(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 8 : n, i = e.tickLength, l = i === void 0 ? 8 : i, o = e.tickLabelProps, s = Py(e, Cy), c = typeof o == "function" ? o : vr({}, Ny, o);
  return /* @__PURE__ */ r.createElement(Dr, vr({
    axisClassName: lt("visx-axis-top", t),
    labelOffset: a,
    orientation: wt.top,
    tickLabelProps: c,
    tickLength: l
  }, s));
}
var Oy = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function br() {
  return br = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, br.apply(this, arguments);
}
function _y(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Dy = {
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function ja(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 8 : n, i = e.tickLength, l = i === void 0 ? 8 : i, o = e.tickLabelProps, s = _y(e, Oy), c = typeof o == "function" ? o : br({}, Dy, o);
  return /* @__PURE__ */ r.createElement(Dr, br({
    axisClassName: lt("visx-axis-bottom", t),
    labelOffset: a,
    orientation: wt.bottom,
    tickLabelProps: c,
    tickLength: l
  }, s));
}
function va(e) {
  return e.split("-")[1];
}
function vl(e) {
  return e === "y" ? "height" : "width";
}
function wn(e) {
  return e.split("-")[0];
}
function ba(e) {
  return ["top", "bottom"].includes(wn(e)) ? "x" : "y";
}
function ls(e, t, n) {
  let { reference: a, floating: i } = e;
  const l = a.x + a.width / 2 - i.width / 2, o = a.y + a.height / 2 - i.height / 2, s = ba(t), c = vl(s), u = a[c] / 2 - i[c] / 2, d = s === "x";
  let h;
  switch (wn(t)) {
    case "top":
      h = { x: l, y: a.y - i.height };
      break;
    case "bottom":
      h = { x: l, y: a.y + a.height };
      break;
    case "right":
      h = { x: a.x + a.width, y: o };
      break;
    case "left":
      h = { x: a.x - i.width, y: o };
      break;
    default:
      h = { x: a.x, y: a.y };
  }
  switch (va(t)) {
    case "start":
      h[s] -= u * (n && d ? -1 : 1);
      break;
    case "end":
      h[s] += u * (n && d ? -1 : 1);
  }
  return h;
}
function cu(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function ua(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function uu(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: a, y: i, platform: l, rects: o, elements: s, strategy: c } = e, { boundary: u = "clippingAncestors", rootBoundary: d = "viewport", elementContext: h = "floating", altBoundary: m = !1, padding: p = 0 } = t, y = cu(p), b = s[m ? h === "floating" ? "reference" : "floating" : h], g = ua(await l.getClippingRect({ element: (n = await (l.isElement == null ? void 0 : l.isElement(b))) == null || n ? b : b.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(s.floating)), boundary: u, rootBoundary: d, strategy: c })), f = h === "floating" ? { ...o.floating, x: a, y: i } : o.reference, x = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(s.floating)), E = await (l.isElement == null ? void 0 : l.isElement(x)) && await (l.getScale == null ? void 0 : l.getScale(x)) || { x: 1, y: 1 }, v = ua(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: f, offsetParent: x, strategy: c }) : f);
  return { top: (g.top - v.top + y.top) / E.y, bottom: (v.bottom - g.bottom + y.bottom) / E.y, left: (g.left - v.left + y.left) / E.x, right: (v.right - g.right + y.right) / E.x };
}
const My = Math.min, $y = Math.max;
function Bi(e, t, n) {
  return $y(e, My(t, n));
}
["top", "right", "bottom", "left"].reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const zy = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Er(e) {
  return e.replace(/left|right|bottom|top/g, (t) => zy[t]);
}
function Ry(e, t, n) {
  n === void 0 && (n = !1);
  const a = va(e), i = ba(e), l = vl(i);
  let o = i === "x" ? a === (n ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return t.reference[l] > t.floating[l] && (o = Er(o)), { main: o, cross: Er(o) };
}
const Fy = { start: "end", end: "start" };
function ai(e) {
  return e.replace(/start|end/g, (t) => Fy[t]);
}
const By = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: a, middlewareData: i, rects: l, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: u = !0, crossAxis: d = !0, fallbackPlacements: h, fallbackStrategy: m = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: y = !0, ...b } = e, g = wn(a), f = wn(o) === o, x = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), E = h || (f || !y ? [Er(o)] : function(N) {
      const k = Er(N);
      return [ai(N), k, ai(k)];
    }(o));
    h || p === "none" || E.push(...function(N, k, _, W) {
      const F = va(N);
      let V = function(H, U, Y) {
        const R = ["left", "right"], $ = ["right", "left"], j = ["top", "bottom"], q = ["bottom", "top"];
        switch (H) {
          case "top":
          case "bottom":
            return Y ? U ? $ : R : U ? R : $;
          case "left":
          case "right":
            return U ? j : q;
          default:
            return [];
        }
      }(wn(N), _ === "start", W);
      return F && (V = V.map((H) => H + "-" + F), k && (V = V.concat(V.map(ai)))), V;
    }(o, y, p, x));
    const v = [o, ...E], S = await uu(t, b), A = [];
    let T = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (u && A.push(S[g]), d) {
      const { main: N, cross: k } = Ry(a, l, x);
      A.push(S[N], S[k]);
    }
    if (T = [...T, { placement: a, overflows: A }], !A.every((N) => N <= 0)) {
      var O, w;
      const N = (((O = i.flip) == null ? void 0 : O.index) || 0) + 1, k = v[N];
      if (k)
        return { data: { index: N, overflows: T }, reset: { placement: k } };
      let _ = (w = T.find((W) => W.overflows[0] <= 0)) == null ? void 0 : w.placement;
      if (!_)
        switch (m) {
          case "bestFit": {
            var C;
            const W = (C = T.map((F) => [F.placement, F.overflows.filter((V) => V > 0).reduce((V, H) => V + H, 0)]).sort((F, V) => F[1] - V[1])[0]) == null ? void 0 : C[0];
            W && (_ = W);
            break;
          }
          case "initialPlacement":
            _ = o;
        }
      if (a !== _)
        return { reset: { placement: _ } };
    }
    return {};
  } };
}, Vy = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: a } = t, i = await async function(l, o) {
      const { placement: s, platform: c, elements: u } = l, d = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)), h = wn(s), m = va(s), p = ba(s) === "x", y = ["left", "top"].includes(h) ? -1 : 1, b = d && p ? -1 : 1, g = typeof o == "function" ? o(l) : o;
      let { mainAxis: f, crossAxis: x, alignmentAxis: E } = typeof g == "number" ? { mainAxis: g, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...g };
      return m && typeof E == "number" && (x = m === "end" ? -1 * E : E), p ? { x: x * b, y: f * y } : { x: f * y, y: x * b };
    }(t, e);
    return { x: n + i.x, y: a + i.y, data: i };
  } };
}, Hy = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: a, placement: i } = t, { mainAxis: l = !0, crossAxis: o = !1, limiter: s = { fn: (g) => {
      let { x: f, y: x } = g;
      return { x: f, y: x };
    } }, ...c } = e, u = { x: n, y: a }, d = await uu(t, c), h = ba(wn(i)), m = h === "x" ? "y" : "x";
    let p = u[h], y = u[m];
    if (l) {
      const g = h === "y" ? "bottom" : "right";
      p = Bi(p + d[h === "y" ? "top" : "left"], p, p - d[g]);
    }
    if (o) {
      const g = m === "y" ? "bottom" : "right";
      y = Bi(y + d[m === "y" ? "top" : "left"], y, y - d[g]);
    }
    const b = s.fn({ ...t, [h]: p, [m]: y });
    return { ...b, data: { x: b.x - n, y: b.y - a } };
  } };
};
function zt(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Qt(e) {
  return zt(e).getComputedStyle(e);
}
const os = Math.min, da = Math.max, Ar = Math.round;
function du(e) {
  const t = Qt(e);
  let n = parseFloat(t.width), a = parseFloat(t.height);
  const i = e.offsetWidth, l = e.offsetHeight, o = Ar(n) !== i || Ar(a) !== l;
  return o && (n = i, a = l), { width: n, height: a, fallback: o };
}
function dn(e) {
  return fu(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Fa;
function mu() {
  if (Fa)
    return Fa;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Fa = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Fa) : navigator.userAgent;
}
function Zt(e) {
  return e instanceof zt(e).HTMLElement;
}
function on(e) {
  return e instanceof zt(e).Element;
}
function fu(e) {
  return e instanceof zt(e).Node;
}
function ss(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof zt(e).ShadowRoot || e instanceof ShadowRoot;
}
function Mr(e) {
  const { overflow: t, overflowX: n, overflowY: a, display: i } = Qt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + a + n) && !["inline", "contents"].includes(i);
}
function Wy(e) {
  return ["table", "td", "th"].includes(dn(e));
}
function Vi(e) {
  const t = /firefox/i.test(mu()), n = Qt(e), a = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!a && a !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const l = n.contain;
    return l != null && l.includes(i);
  });
}
function hu() {
  return !/^((?!chrome|android).)*safari/i.test(mu());
}
function bl(e) {
  return ["html", "body", "#document"].includes(dn(e));
}
function pu(e) {
  return on(e) ? e : e.contextElement;
}
const yu = { x: 1, y: 1 };
function Vn(e) {
  const t = pu(e);
  if (!Zt(t))
    return yu;
  const n = t.getBoundingClientRect(), { width: a, height: i, fallback: l } = du(t);
  let o = (l ? Ar(n.width) : n.width) / a, s = (l ? Ar(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), s && Number.isFinite(s) || (s = 1), { x: o, y: s };
}
function ya(e, t, n, a) {
  var i, l;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = pu(e);
  let c = yu;
  t && (a ? on(a) && (c = Vn(a)) : c = Vn(e));
  const u = s ? zt(s) : window, d = !hu() && n;
  let h = (o.left + (d && ((i = u.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / c.x, m = (o.top + (d && ((l = u.visualViewport) == null ? void 0 : l.offsetTop) || 0)) / c.y, p = o.width / c.x, y = o.height / c.y;
  if (s) {
    const b = zt(s), g = a && on(a) ? zt(a) : a;
    let f = b.frameElement;
    for (; f && a && g !== b; ) {
      const x = Vn(f), E = f.getBoundingClientRect(), v = getComputedStyle(f);
      E.x += (f.clientLeft + parseFloat(v.paddingLeft)) * x.x, E.y += (f.clientTop + parseFloat(v.paddingTop)) * x.y, h *= x.x, m *= x.y, p *= x.x, y *= x.y, h += E.x, m += E.y, f = zt(f).frameElement;
    }
  }
  return { width: p, height: y, top: m, right: h + p, bottom: m + y, left: h, x: h, y: m };
}
function sn(e) {
  return ((fu(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function $r(e) {
  return on(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function gu(e) {
  return ya(sn(e)).left + $r(e).scrollLeft;
}
function ga(e) {
  if (dn(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || ss(e) && e.host || sn(e);
  return ss(t) ? t.host : t;
}
function xu(e) {
  const t = ga(e);
  return bl(t) ? t.ownerDocument.body : Zt(t) && Mr(t) ? t : xu(t);
}
function vu(e, t) {
  var n;
  t === void 0 && (t = []);
  const a = xu(e), i = a === ((n = e.ownerDocument) == null ? void 0 : n.body), l = zt(a);
  return i ? t.concat(l, l.visualViewport || [], Mr(a) ? a : []) : t.concat(a, vu(a));
}
function cs(e, t, n) {
  return t === "viewport" ? ua(function(a, i) {
    const l = zt(a), o = sn(a), s = l.visualViewport;
    let c = o.clientWidth, u = o.clientHeight, d = 0, h = 0;
    if (s) {
      c = s.width, u = s.height;
      const m = hu();
      (m || !m && i === "fixed") && (d = s.offsetLeft, h = s.offsetTop);
    }
    return { width: c, height: u, x: d, y: h };
  }(e, n)) : on(t) ? ua(function(a, i) {
    const l = ya(a, !0, i === "fixed"), o = l.top + a.clientTop, s = l.left + a.clientLeft, c = Zt(a) ? Vn(a) : { x: 1, y: 1 };
    return { width: a.clientWidth * c.x, height: a.clientHeight * c.y, x: s * c.x, y: o * c.y };
  }(t, n)) : ua(function(a) {
    const i = sn(a), l = $r(a), o = a.ownerDocument.body, s = da(i.scrollWidth, i.clientWidth, o.scrollWidth, o.clientWidth), c = da(i.scrollHeight, i.clientHeight, o.scrollHeight, o.clientHeight);
    let u = -l.scrollLeft + gu(a);
    const d = -l.scrollTop;
    return Qt(o).direction === "rtl" && (u += da(i.clientWidth, o.clientWidth) - s), { width: s, height: c, x: u, y: d };
  }(sn(e)));
}
function us(e) {
  return Zt(e) && Qt(e).position !== "fixed" ? e.offsetParent : null;
}
function ds(e) {
  const t = zt(e);
  let n = us(e);
  for (; n && Wy(n) && Qt(n).position === "static"; )
    n = us(n);
  return n && (dn(n) === "html" || dn(n) === "body" && Qt(n).position === "static" && !Vi(n)) ? t : n || function(a) {
    let i = ga(a);
    for (; Zt(i) && !bl(i); ) {
      if (Vi(i))
        return i;
      i = ga(i);
    }
    return null;
  }(e) || t;
}
function Ky(e, t, n) {
  const a = Zt(t), i = sn(t), l = ya(e, !0, n === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const s = { x: 0, y: 0 };
  if (a || !a && n !== "fixed")
    if ((dn(t) !== "body" || Mr(i)) && (o = $r(t)), Zt(t)) {
      const c = ya(t, !0);
      s.x = c.x + t.clientLeft, s.y = c.y + t.clientTop;
    } else
      i && (s.x = gu(i));
  return { x: l.left + o.scrollLeft - s.x, y: l.top + o.scrollTop - s.y, width: l.width, height: l.height };
}
const Iy = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: a, strategy: i } = e;
  const l = n === "clippingAncestors" ? function(u, d) {
    const h = d.get(u);
    if (h)
      return h;
    let m = vu(u).filter((g) => on(g) && dn(g) !== "body"), p = null;
    const y = Qt(u).position === "fixed";
    let b = y ? ga(u) : u;
    for (; on(b) && !bl(b); ) {
      const g = Qt(b), f = Vi(b);
      (y ? f || p : f || g.position !== "static" || !p || !["absolute", "fixed"].includes(p.position)) ? p = g : m = m.filter((x) => x !== b), b = ga(b);
    }
    return d.set(u, m), m;
  }(t, this._c) : [].concat(n), o = [...l, a], s = o[0], c = o.reduce((u, d) => {
    const h = cs(t, d, i);
    return u.top = da(h.top, u.top), u.right = os(h.right, u.right), u.bottom = os(h.bottom, u.bottom), u.left = da(h.left, u.left), u;
  }, cs(t, s, i));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: a } = e;
  const i = Zt(n), l = sn(n);
  if (n === l)
    return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, s = { x: 1, y: 1 };
  const c = { x: 0, y: 0 };
  if ((i || !i && a !== "fixed") && ((dn(n) !== "body" || Mr(l)) && (o = $r(n)), Zt(n))) {
    const u = ya(n);
    s = Vn(n), c.x = u.x + n.clientLeft, c.y = u.y + n.clientTop;
  }
  return { width: t.width * s.x, height: t.height * s.y, x: t.x * s.x - o.scrollLeft * s.x + c.x, y: t.y * s.y - o.scrollTop * s.y + c.y };
}, isElement: on, getDimensions: function(e) {
  return Zt(e) ? du(e) : e.getBoundingClientRect();
}, getOffsetParent: ds, getDocumentElement: sn, getScale: Vn, async getElementRects(e) {
  let { reference: t, floating: n, strategy: a } = e;
  const i = this.getOffsetParent || ds, l = this.getDimensions;
  return { reference: Ky(t, await i(n), a), floating: { x: 0, y: 0, ...await l(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Qt(e).direction === "rtl" }, ms = (e, t, n) => {
  const a = /* @__PURE__ */ new Map(), i = { platform: Iy, ...n }, l = { ...i.platform, _c: a };
  return (async (o, s, c) => {
    const { placement: u = "bottom", strategy: d = "absolute", middleware: h = [], platform: m } = c, p = h.filter(Boolean), y = await (m.isRTL == null ? void 0 : m.isRTL(s));
    if (m == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), p.filter((S) => {
      let { name: A } = S;
      return A === "autoPlacement" || A === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    o && s || console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
    let b = await m.getElementRects({ reference: o, floating: s, strategy: d }), { x: g, y: f } = ls(b, u, y), x = u, E = {}, v = 0;
    for (let S = 0; S < p.length; S++) {
      const { name: A, fn: T } = p[S], { x: O, y: w, data: C, reset: N } = await T({ x: g, y: f, initialPlacement: u, placement: x, strategy: d, middlewareData: E, rects: b, platform: m, elements: { reference: o, floating: s } });
      g = O ?? g, f = w ?? f, E = { ...E, [A]: { ...E[A], ...C } }, v > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), N && v <= 50 && (v++, typeof N == "object" && (N.placement && (x = N.placement), N.rects && (b = N.rects === !0 ? await m.getElementRects({ reference: o, floating: s, strategy: d }) : N.rects), { x: g, y: f } = ls(b, x, y)), S = -1);
    }
    return { x: g, y: f, placement: x, strategy: d, middlewareData: E };
  })(e, t, { ...i, platform: l });
};
var an, Cn = { exports: {} }, fs = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
an = fs, function() {
  var e = r, t = 60103, n = 60106;
  an.Fragment = 60107;
  var a = 60108, i = 60114, l = 60109, o = 60110, s = 60112, c = 60113, u = 60120, d = 60115, h = 60116, m = 60121, p = 60122, y = 60117, b = 60129, g = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var f = Symbol.for;
    t = f("react.element"), n = f("react.portal"), an.Fragment = f("react.fragment"), a = f("react.strict_mode"), i = f("react.profiler"), l = f("react.provider"), o = f("react.context"), s = f("react.forward_ref"), c = f("react.suspense"), u = f("react.suspense_list"), d = f("react.memo"), h = f("react.lazy"), m = f("react.block"), p = f("react.server.block"), y = f("react.fundamental"), f("react.scope"), f("react.opaque.id"), b = f("react.debug_trace_mode"), f("react.offscreen"), g = f("react.legacy_hidden");
  }
  var x = typeof Symbol == "function" && Symbol.iterator, E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function v(K) {
    for (var ae = arguments.length, D = new Array(ae > 1 ? ae - 1 : 0), ce = 1; ce < ae; ce++)
      D[ce - 1] = arguments[ce];
    S("error", K, D);
  }
  function S(K, ae, D) {
    var ce = E.ReactDebugCurrentFrame, le = "";
    if (w) {
      var pe = T(w.type), he = w._owner;
      le += function(Ce, ke, Se) {
        var ye = "";
        if (ke) {
          var re = ke.fileName, J = re.replace(A, "");
          if (/^index\./.test(J)) {
            var He = re.match(A);
            if (He) {
              var me = He[1];
              me && (J = me.replace(A, "") + "/" + J);
            }
          }
          ye = " (at " + J + ":" + ke.lineNumber + ")";
        } else
          Se && (ye = " (created by " + Se + ")");
        return `
    in ` + (Ce || "Unknown") + ye;
      }(pe, w._source, he && T(he.type));
    }
    (le += ce.getStackAddendum()) !== "" && (ae += "%s", D = D.concat([le]));
    var Ee = D.map(function(Ce) {
      return "" + Ce;
    });
    Ee.unshift("Warning: " + ae), Function.prototype.apply.call(console[K], console, Ee);
  }
  var A = /^(.*)[\\\/]/;
  function T(K) {
    if (K == null)
      return null;
    if (typeof K.tag == "number" && v("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof K == "function")
      return K.displayName || K.name || null;
    if (typeof K == "string")
      return K;
    switch (K) {
      case an.Fragment:
        return "Fragment";
      case n:
        return "Portal";
      case i:
        return "Profiler";
      case a:
        return "StrictMode";
      case c:
        return "Suspense";
      case u:
        return "SuspenseList";
    }
    if (typeof K == "object")
      switch (K.$$typeof) {
        case o:
          return "Context.Consumer";
        case l:
          return "Context.Provider";
        case s:
          return ce = K, le = K.render, pe = "ForwardRef", he = le.displayName || le.name || "", ce.displayName || (he !== "" ? pe + "(" + he + ")" : pe);
        case d:
          return T(K.type);
        case m:
          return T(K.render);
        case h:
          var ae = (D = K)._status === 1 ? D._result : null;
          if (ae)
            return T(ae);
      }
    var D, ce, le, pe, he;
    return null;
  }
  var O = {};
  E.ReactDebugCurrentFrame;
  var w = null;
  function C(K) {
    w = K;
  }
  var N, k, _, W = E.ReactCurrentOwner, F = Object.prototype.hasOwnProperty, V = { key: !0, ref: !0, __self: !0, __source: !0 };
  function H(K, ae, D, ce, le) {
    var pe, he = {}, Ee = null, Ce = null;
    for (pe in D !== void 0 && (Ee = "" + D), function(ye) {
      if (F.call(ye, "key")) {
        var re = Object.getOwnPropertyDescriptor(ye, "key").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return ye.key !== void 0;
    }(ae) && (Ee = "" + ae.key), function(ye) {
      if (F.call(ye, "ref")) {
        var re = Object.getOwnPropertyDescriptor(ye, "ref").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return ye.ref !== void 0;
    }(ae) && (Ce = ae.ref, function(ye, re) {
      if (typeof ye.ref == "string" && W.current && re && W.current.stateNode !== re) {
        var J = T(W.current.type);
        _[J] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(W.current.type), ye.ref), _[J] = !0);
      }
    }(ae, le)), ae)
      F.call(ae, pe) && !V.hasOwnProperty(pe) && (he[pe] = ae[pe]);
    if (K && K.defaultProps) {
      var ke = K.defaultProps;
      for (pe in ke)
        he[pe] === void 0 && (he[pe] = ke[pe]);
    }
    if (Ee || Ce) {
      var Se = typeof K == "function" ? K.displayName || K.name || "Unknown" : K;
      Ee && function(ye, re) {
        var J = function() {
          N || (N = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        J.isReactWarning = !0, Object.defineProperty(ye, "key", { get: J, configurable: !0 });
      }(he, Se), Ce && function(ye, re) {
        var J = function() {
          k || (k = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        J.isReactWarning = !0, Object.defineProperty(ye, "ref", { get: J, configurable: !0 });
      }(he, Se);
    }
    return function(ye, re, J, He, me, Pe, Le) {
      var je = { $$typeof: t, type: ye, key: re, ref: J, props: Le, _owner: Pe, _store: {} };
      return Object.defineProperty(je._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: !1 }), Object.defineProperty(je, "_self", { configurable: !1, enumerable: !1, writable: !1, value: He }), Object.defineProperty(je, "_source", { configurable: !1, enumerable: !1, writable: !1, value: me }), Object.freeze && (Object.freeze(je.props), Object.freeze(je)), je;
    }(K, Ee, Ce, le, ce, W.current, he);
  }
  _ = {};
  var U, Y = E.ReactCurrentOwner;
  function R(K) {
    w = K;
  }
  function $(K) {
    return typeof K == "object" && K !== null && K.$$typeof === t;
  }
  function j() {
    if (Y.current) {
      var K = T(Y.current.type);
      if (K)
        return `

Check the render method of \`` + K + "`.";
    }
    return "";
  }
  E.ReactDebugCurrentFrame, U = !1;
  var q = {};
  function X(K, ae) {
    if (K._store && !K._store.validated && K.key == null) {
      K._store.validated = !0;
      var D = function(le) {
        var pe = j();
        if (!pe) {
          var he = typeof le == "string" ? le : le.displayName || le.name;
          he && (pe = `

Check the top-level render call using <` + he + ">.");
        }
        return pe;
      }(ae);
      if (!q[D]) {
        q[D] = !0;
        var ce = "";
        K && K._owner && K._owner !== Y.current && (ce = " It was passed a child from " + T(K._owner.type) + "."), R(K), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', D, ce), R(null);
      }
    }
  }
  function ne(K, ae) {
    if (typeof K == "object") {
      if (Array.isArray(K))
        for (var D = 0; D < K.length; D++) {
          var ce = K[D];
          $(ce) && X(ce, ae);
        }
      else if ($(K))
        K._store && (K._store.validated = !0);
      else if (K) {
        var le = function(Ee) {
          if (Ee === null || typeof Ee != "object")
            return null;
          var Ce = x && Ee[x] || Ee["@@iterator"];
          return typeof Ce == "function" ? Ce : null;
        }(K);
        if (typeof le == "function" && le !== K.entries)
          for (var pe, he = le.call(K); !(pe = he.next()).done; )
            $(pe.value) && X(pe.value, ae);
      }
    }
  }
  function de(K) {
    var ae, D = K.type;
    if (D != null && typeof D != "string") {
      if (typeof D == "function")
        ae = D.propTypes;
      else {
        if (typeof D != "object" || D.$$typeof !== s && D.$$typeof !== d)
          return;
        ae = D.propTypes;
      }
      if (ae) {
        var ce = T(D);
        (function(le, pe, he, Ee, Ce) {
          var ke = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var Se in le)
            if (ke(le, Se)) {
              var ye = void 0;
              try {
                if (typeof le[Se] != "function") {
                  var re = Error((Ee || "React class") + ": " + he + " type `" + Se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof le[Se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw re.name = "Invariant Violation", re;
                }
                ye = le[Se](pe, Se, Ee, he, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (J) {
                ye = J;
              }
              !ye || ye instanceof Error || (C(Ce), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ee || "React class", he, Se, typeof ye), C(null)), ye instanceof Error && !(ye.message in O) && (O[ye.message] = !0, C(Ce), v("Failed %s type: %s", he, ye.message), C(null));
            }
        })(ae, K.props, "prop", ce, K);
      } else
        D.PropTypes === void 0 || U || (U = !0, v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", T(D) || "Unknown"));
      typeof D.getDefaultProps != "function" || D.getDefaultProps.isReactClassApproved || v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function Ae(K, ae, D, ce, le, pe) {
    var he = function(J) {
      return typeof J == "string" || typeof J == "function" || J === an.Fragment || J === i || J === b || J === a || J === c || J === u || J === g || typeof J == "object" && J !== null && (J.$$typeof === h || J.$$typeof === d || J.$$typeof === l || J.$$typeof === o || J.$$typeof === s || J.$$typeof === y || J.$$typeof === m || J[0] === p);
    }(K);
    if (!he) {
      var Ee = "";
      (K === void 0 || typeof K == "object" && K !== null && Object.keys(K).length === 0) && (Ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
      var Ce, ke = function(J) {
        return J !== void 0 ? `

Check your code at ` + J.fileName.replace(/^.*[\\\/]/, "") + ":" + J.lineNumber + "." : "";
      }(le);
      Ee += ke || j(), K === null ? Ce = "null" : Array.isArray(K) ? Ce = "array" : K !== void 0 && K.$$typeof === t ? (Ce = "<" + (T(K.type) || "Unknown") + " />", Ee = " Did you accidentally export a JSX literal instead of a component?") : Ce = typeof K, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ce, Ee);
    }
    var Se = H(K, ae, D, le, pe);
    if (Se == null)
      return Se;
    if (he) {
      var ye = ae.children;
      if (ye !== void 0)
        if (ce)
          if (Array.isArray(ye)) {
            for (var re = 0; re < ye.length; re++)
              ne(ye[re], K);
            Object.freeze && Object.freeze(ye);
          } else
            v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          ne(ye, K);
    }
    return K === an.Fragment ? function(J) {
      for (var He = Object.keys(J.props), me = 0; me < He.length; me++) {
        var Pe = He[me];
        if (Pe !== "children" && Pe !== "key") {
          R(J), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Pe), R(null);
          break;
        }
      }
      J.ref !== null && (R(J), v("Invalid attribute `ref` supplied to `React.Fragment`."), R(null));
    }(Se) : de(Se), Se;
  }
  var we = function(K, ae, D) {
    return Ae(K, ae, D, !1);
  }, G = function(K, ae, D) {
    return Ae(K, ae, D, !0);
  };
  an.jsx = we, an.jsxs = G;
}(), Cn.exports = fs;
var ri, bu = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
ri = bu, function() {
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
            var o = t.apply(null, i);
            o && n.push(o);
          }
        } else if (l === "object") {
          if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
            n.push(i.toString());
            continue;
          }
          for (var s in i)
            e.call(i, s) && i[s] && n.push(s);
        }
      }
    }
    return n.join(" ");
  }
  ri.exports ? (t.default = t, ri.exports = t) : window.classNames = t;
}();
var hs = bu.exports;
const ps = (e, t, n) => {
  let a = null;
  return function(...i) {
    a && clearTimeout(a), a = setTimeout(() => {
      a = null, n || e.apply(this, i);
    }, t);
  };
}, jy = ({ content: e }) => Cn.exports.jsx("span", { dangerouslySetInnerHTML: { __html: e } }), qy = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, Uy = z.createContext({ getTooltipData: () => qy });
function Eu(e = "DEFAULT_TOOLTIP_ID") {
  return z.useContext(Uy).getTooltipData(e);
}
const ys = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: n = null, place: a = "top", offset: i = 10, strategy: l = "absolute", middlewares: o = [Vy(Number(i)), By(), Hy({ padding: 5 })] }) => {
  if (!e)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  if (t === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  const s = o;
  return n ? (s.push({ name: "arrow", options: c = { element: n, padding: 5 }, async fn(u) {
    const { element: d, padding: h = 0 } = c || {}, { x: m, y: p, placement: y, rects: b, platform: g } = u;
    if (d == null)
      return console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const f = cu(h), x = { x: m, y: p }, E = ba(y), v = vl(E), S = await g.getDimensions(d), A = E === "y" ? "top" : "left", T = E === "y" ? "bottom" : "right", O = b.reference[v] + b.reference[E] - x[E] - b.floating[v], w = x[E] - b.reference[E], C = await (g.getOffsetParent == null ? void 0 : g.getOffsetParent(d));
    let N = C ? E === "y" ? C.clientHeight || 0 : C.clientWidth || 0 : 0;
    N === 0 && (N = b.floating[v]);
    const k = O / 2 - w / 2, _ = f[A], W = N - S[v] - f[T], F = N / 2 - S[v] / 2 + k, V = Bi(_, F, W), H = va(y) != null && F != V && b.reference[v] / 2 - (F < _ ? f[A] : f[T]) - S[v] / 2 < 0;
    return { [E]: x[E] - (H ? F < _ ? _ - F : W - F : 0), data: { [E]: V, centerOffset: F - V } };
  } }), ms(e, t, { placement: a, strategy: l, middleware: s }).then(({ x: u, y: d, placement: h, middlewareData: m }) => {
    var p, y;
    const b = { left: `${u}px`, top: `${d}px` }, { x: g, y: f } = (p = m.arrow) !== null && p !== void 0 ? p : { x: 0, y: 0 };
    return { tooltipStyles: b, tooltipArrowStyles: { left: g != null ? `${g}px` : "", top: f != null ? `${f}px` : "", right: "", bottom: "", [(y = { top: "bottom", right: "left", bottom: "top", left: "right" }[h.split("-")[0]]) !== null && y !== void 0 ? y : "bottom"]: "-4px" } };
  })) : ms(e, t, { placement: "bottom", strategy: l, middleware: s }).then(({ x: u, y: d }) => ({ tooltipStyles: { left: `${u}px`, top: `${d}px` }, tooltipArrowStyles: {} }));
  var c;
};
var pn = { tooltip: "styles-module_tooltip__mnnfp", fixed: "styles-module_fixed__7ciUi", arrow: "styles-module_arrow__K0L3T", "no-arrow": "styles-module_no-arrow__KcFZN", clickable: "styles-module_clickable__Bv9o7", show: "styles-module_show__2NboJ", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const gs = ({ id: e, className: t, classNameArrow: n, variant: a = "dark", anchorId: i, anchorSelect: l, place: o = "top", offset: s = 10, events: c = ["hover"], positionStrategy: u = "absolute", middlewares: d, wrapper: h, children: m = null, delayShow: p = 0, delayHide: y = 0, float: b = !1, noArrow: g = !1, clickable: f = !1, closeOnEsc: x = !1, style: E, position: v, afterShow: S, afterHide: A, content: T, html: O, isOpen: w, setIsOpen: C, activeAnchor: N, setActiveAnchor: k }) => {
  const _ = z.useRef(null), W = z.useRef(null), F = z.useRef(null), V = z.useRef(null), [H, U] = z.useState({}), [Y, R] = z.useState({}), [$, j] = z.useState(!1), [q, X] = z.useState(!1), ne = z.useRef(!1), de = z.useRef(null), { anchorRefs: Ae, setActiveAnchor: we } = Eu(e), G = z.useRef(!1), [K, ae] = z.useState([]), D = z.useRef(!1);
  z.useLayoutEffect(() => (D.current = !0, () => {
    D.current = !1;
  }), []), z.useEffect(() => {
    if (!$) {
      const me = setTimeout(() => {
        X(!1);
      }, 150);
      return () => {
        clearTimeout(me);
      };
    }
    return () => null;
  }, [$]);
  const ce = (me) => {
    D.current && (me && X(!0), setTimeout(() => {
      D.current && (C == null || C(me), w === void 0 && j(me));
    }, 10));
  };
  z.useEffect(() => {
    if (w === void 0)
      return () => null;
    w && X(!0);
    const me = setTimeout(() => {
      j(w);
    }, 10);
    return () => {
      clearTimeout(me);
    };
  }, [w]), z.useEffect(() => {
    $ !== ne.current && (ne.current = $, $ ? S == null || S() : A == null || A());
  }, [$]);
  const le = (me = y) => {
    V.current && clearTimeout(V.current), V.current = setTimeout(() => {
      G.current || ce(!1);
    }, me);
  }, pe = (me) => {
    var Pe;
    if (!me)
      return;
    p ? (F.current && clearTimeout(F.current), F.current = setTimeout(() => {
      ce(!0);
    }, p)) : ce(!0);
    const Le = (Pe = me.currentTarget) !== null && Pe !== void 0 ? Pe : me.target;
    k(Le), we({ current: Le }), V.current && clearTimeout(V.current);
  }, he = () => {
    f ? le(y || 100) : y ? le() : ce(!1), F.current && clearTimeout(F.current);
  }, Ee = ({ x: me, y: Pe }) => {
    ys({ place: o, offset: s, elementReference: { getBoundingClientRect: () => ({ x: me, y: Pe, width: 0, height: 0, top: Pe, left: me, right: me, bottom: Pe }) }, tooltipReference: _.current, tooltipArrowReference: W.current, strategy: u, middlewares: d }).then((Le) => {
      Object.keys(Le.tooltipStyles).length && U(Le.tooltipStyles), Object.keys(Le.tooltipArrowStyles).length && R(Le.tooltipArrowStyles);
    });
  }, Ce = (me) => {
    if (!me)
      return;
    const Pe = me, Le = { x: Pe.clientX, y: Pe.clientY };
    Ee(Le), de.current = Le;
  }, ke = (me) => {
    pe(me), y && le();
  }, Se = (me) => {
    const Pe = document.querySelector(`[id='${i}']`);
    Pe != null && Pe.contains(me.target) || K.some((Le) => Le.contains(me.target)) || ce(!1);
  }, ye = (me) => {
    me.key === "Escape" && ce(!1);
  }, re = ps(pe, 50), J = ps(he, 50);
  z.useEffect(() => {
    var me, Pe;
    const Le = new Set(Ae);
    K.forEach((at) => {
      Le.add({ current: at });
    });
    const je = document.querySelector(`[id='${i}']`);
    je && Le.add({ current: je }), x && window.addEventListener("keydown", ye);
    const Ie = [];
    c.find((at) => at === "click") && (window.addEventListener("click", Se), Ie.push({ event: "click", listener: ke })), c.find((at) => at === "hover") && (Ie.push({ event: "mouseenter", listener: re }, { event: "mouseleave", listener: J }, { event: "focus", listener: re }, { event: "blur", listener: J }), b && Ie.push({ event: "mousemove", listener: Ce }));
    const Xe = () => {
      G.current = !0;
    }, mt = () => {
      G.current = !1, he();
    };
    return f && ((me = _.current) === null || me === void 0 || me.addEventListener("mouseenter", Xe), (Pe = _.current) === null || Pe === void 0 || Pe.addEventListener("mouseleave", mt)), Ie.forEach(({ event: at, listener: te }) => {
      Le.forEach(($e) => {
        var Be;
        (Be = $e.current) === null || Be === void 0 || Be.addEventListener(at, te);
      });
    }), () => {
      var at, te;
      c.find(($e) => $e === "click") && window.removeEventListener("click", Se), x && window.removeEventListener("keydown", ye), f && ((at = _.current) === null || at === void 0 || at.removeEventListener("mouseenter", Xe), (te = _.current) === null || te === void 0 || te.removeEventListener("mouseleave", mt)), Ie.forEach(({ event: $e, listener: Be }) => {
        Le.forEach((Lt) => {
          var Ot;
          (Ot = Lt.current) === null || Ot === void 0 || Ot.removeEventListener($e, Be);
        });
      });
    };
  }, [q, Ae, K, x, c]), z.useEffect(() => {
    let me = l ?? "";
    !me && e && (me = `[data-tooltip-id='${e}']`);
    const Pe = new MutationObserver((Le) => {
      const je = [];
      Le.forEach((Ie) => {
        if (Ie.type === "attributes" && Ie.attributeName === "data-tooltip-id" && Ie.target.getAttribute("data-tooltip-id") === e && je.push(Ie.target), Ie.type === "childList" && (N && [...Ie.removedNodes].some((Xe) => !!Xe.contains(N) && (X(!1), ce(!1), k(null), !0)), me))
          try {
            const Xe = [...Ie.addedNodes].filter((mt) => mt.nodeType === 1);
            je.push(...Xe.filter((mt) => mt.matches(me))), je.push(...Xe.flatMap((mt) => [...mt.querySelectorAll(me)]));
          } catch {
          }
      }), je.length && ae((Ie) => [...Ie, ...je]);
    });
    return Pe.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"] }), () => {
      Pe.disconnect();
    };
  }, [e, l, N]), z.useEffect(() => {
    v ? Ee(v) : b ? de.current && Ee(de.current) : ys({ place: o, offset: s, elementReference: N, tooltipReference: _.current, tooltipArrowReference: W.current, strategy: u, middlewares: d }).then((me) => {
      D.current && (Object.keys(me.tooltipStyles).length && U(me.tooltipStyles), Object.keys(me.tooltipArrowStyles).length && R(me.tooltipArrowStyles));
    });
  }, [$, N, T, O, o, s, u, v]), z.useEffect(() => {
    var me;
    const Pe = document.querySelector(`[id='${i}']`), Le = [...K, Pe];
    N && Le.includes(N) || k((me = K[0]) !== null && me !== void 0 ? me : Pe);
  }, [i, K, N]), z.useEffect(() => () => {
    F.current && clearTimeout(F.current), V.current && clearTimeout(V.current);
  }, []), z.useEffect(() => {
    let me = l;
    if (!me && e && (me = `[data-tooltip-id='${e}']`), me)
      try {
        const Pe = Array.from(document.querySelectorAll(me));
        ae(Pe);
      } catch {
        ae([]);
      }
  }, [e, l]);
  const He = !!(O || T || m) && $ && Object.keys(H).length > 0;
  return q ? Cn.exports.jsxs(h, { id: e, role: "tooltip", className: hs("react-tooltip", pn.tooltip, pn[a], t, { [pn.show]: He, [pn.fixed]: u === "fixed", [pn.clickable]: f }), style: { ...E, ...H }, ref: _, children: [O && Cn.exports.jsx(jy, { content: O }) || T || m, Cn.exports.jsx(h, { className: hs("react-tooltip-arrow", pn.arrow, n, { [pn["no-arrow"]]: g }), style: Y, ref: W })] }) : null;
}, Yy = ({ id: e, anchorId: t, anchorSelect: n, content: a, html: i, className: l, classNameArrow: o, variant: s = "dark", place: c = "top", offset: u = 10, wrapper: d = "div", children: h = null, events: m = ["hover"], positionStrategy: p = "absolute", middlewares: y, delayShow: b = 0, delayHide: g = 0, float: f = !1, noArrow: x = !1, clickable: E = !1, closeOnEsc: v = !1, style: S, position: A, isOpen: T, setIsOpen: O, afterShow: w, afterHide: C }) => {
  const [N, k] = z.useState(a), [_, W] = z.useState(i), [F, V] = z.useState(c), [H, U] = z.useState(s), [Y, R] = z.useState(u), [$, j] = z.useState(b), [q, X] = z.useState(g), [ne, de] = z.useState(f), [Ae, we] = z.useState(d), [G, K] = z.useState(m), [ae, D] = z.useState(p), [ce, le] = z.useState(null), { anchorRefs: pe, activeAnchor: he } = Eu(e), Ee = (Se) => Se == null ? void 0 : Se.getAttributeNames().reduce((ye, re) => {
    var J;
    return re.startsWith("data-tooltip-") && (ye[re.replace(/^data-tooltip-/, "")] = (J = Se == null ? void 0 : Se.getAttribute(re)) !== null && J !== void 0 ? J : null), ye;
  }, {}), Ce = (Se) => {
    const ye = { place: (re) => {
      var J;
      V((J = re) !== null && J !== void 0 ? J : c);
    }, content: (re) => {
      k(re ?? a);
    }, html: (re) => {
      W(re ?? i);
    }, variant: (re) => {
      var J;
      U((J = re) !== null && J !== void 0 ? J : s);
    }, offset: (re) => {
      R(re === null ? u : Number(re));
    }, wrapper: (re) => {
      var J;
      we((J = re) !== null && J !== void 0 ? J : d);
    }, events: (re) => {
      const J = re == null ? void 0 : re.split(" ");
      K(J ?? m);
    }, "position-strategy": (re) => {
      var J;
      D((J = re) !== null && J !== void 0 ? J : p);
    }, "delay-show": (re) => {
      j(re === null ? b : Number(re));
    }, "delay-hide": (re) => {
      X(re === null ? g : Number(re));
    }, float: (re) => {
      de(re === null ? f : !!re);
    } };
    Object.values(ye).forEach((re) => re(null)), Object.entries(Se).forEach(([re, J]) => {
      var He;
      (He = ye[re]) === null || He === void 0 || He.call(ye, J);
    });
  };
  z.useEffect(() => {
    k(a);
  }, [a]), z.useEffect(() => {
    W(i);
  }, [i]), z.useEffect(() => {
    V(c);
  }, [c]), z.useEffect(() => {
    var Se;
    const ye = new Set(pe);
    let re = n;
    if (!re && e && (re = `[data-tooltip-id='${e}']`), re)
      try {
        document.querySelectorAll(re).forEach((Le) => {
          ye.add({ current: Le });
        });
      } catch {
        console.warn(`[react-tooltip] "${n}" is not a valid CSS selector`);
      }
    const J = document.querySelector(`[id='${t}']`);
    if (J && ye.add({ current: J }), !ye.size)
      return () => null;
    const He = (Se = ce ?? J) !== null && Se !== void 0 ? Se : he.current, me = new MutationObserver((Le) => {
      Le.forEach((je) => {
        var Ie;
        if (!He || je.type !== "attributes" || !(!((Ie = je.attributeName) === null || Ie === void 0) && Ie.startsWith("data-tooltip-")))
          return;
        const Xe = Ee(He);
        Ce(Xe);
      });
    }), Pe = { attributes: !0, childList: !1, subtree: !1 };
    if (He) {
      const Le = Ee(He);
      Ce(Le), me.observe(He, Pe);
    }
    return () => {
      me.disconnect();
    };
  }, [pe, he, ce, t, n]);
  const ke = { id: e, anchorId: t, anchorSelect: n, className: l, classNameArrow: o, content: N, html: _, place: F, variant: H, offset: Y, wrapper: Ae, events: G, positionStrategy: ae, middlewares: y, delayShow: $, delayHide: q, float: ne, noArrow: x, clickable: E, closeOnEsc: v, style: S, position: A, isOpen: T, setIsOpen: O, afterShow: w, afterHide: C, activeAnchor: ce, setActiveAnchor: (Se) => le(Se) };
  return h ? Cn.exports.jsx(gs, { ...ke, children: h }) : Cn.exports.jsx(gs, { ...ke });
}, Sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  curveBasis: Ah,
  curveBasisClosed: Sh,
  curveBasisOpen: Th,
  curveBundle: kh,
  curveCardinal: wh,
  curveCardinalClosed: Ch,
  curveCardinalOpen: Ph,
  curveCatmullRom: Nh,
  curveCatmullRomClosed: Lh,
  curveCatmullRomOpen: Oh,
  curveLinear: Nr,
  curveLinearClosed: xi,
  curveMonotoneX: Ia,
  curveMonotoneY: _h,
  curveNatural: Dh,
  curveStep: Mh,
  curveStepAfter: zh,
  curveStepBefore: $h
}, Symbol.toStringTag, { value: "Module" })), Xy = (e) => {
  var S;
  const { xScale: t, yScale: n, yMax: a, xMax: i, handleTooltipMouseOver: l, handleTooltipMouseOff: o, isDebug: s, children: c } = e;
  let { transformedData: u, config: d, handleLineType: h, parseDate: m, formatDate: p, formatNumber: y, seriesHighlight: b, colorScale: g, rawData: f } = z.useContext(De);
  const x = d.brush.active && ((S = d.brush.data) != null && S.length) ? d.brush.data : u;
  if (!x)
    return;
  const E = (A) => (d.xAxis.type === "date" ? t(m(A[d.xAxis.dataKey], !1)) : t(A[d.xAxis.dataKey])) + (t.bandwidth ? t.bandwidth() / 2 : 0), v = (A, T, O = void 0) => n(A[O.dataKey]);
  return x && /* @__PURE__ */ r.createElement("svg", null, /* @__PURE__ */ r.createElement(Ht, { component: "AreaChart" }, /* @__PURE__ */ r.createElement(ve, { className: "area-chart", key: "area-wrapper", left: Number(d.yAxis.size) }, (d.runtime.areaSeriesKeys || d.series).map((A, T) => {
    let O = x.map((k) => ({
      [d.xAxis.dataKey]: k[d.xAxis.dataKey],
      [A.dataKey]: k[A.dataKey]
    })), w = Sr[A.lineType], C = d.legend.behavior === "highlight" && b.length > 0 && b.indexOf(A.dataKey) === -1, N = d.legend.behavior === "highlight" || b.length === 0 || b.indexOf(A.dataKey) !== -1;
    return /* @__PURE__ */ r.createElement(r.Fragment, { key: T }, /* @__PURE__ */ r.createElement(
      en,
      {
        data: O,
        x: (k) => E(k),
        y: (k) => v(k, T, A),
        stroke: N ? g ? g(d.runtime.seriesLabels ? d.runtime.seriesLabels[A.dataKey] : A.dataKey) : "#000" : "transparent",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        curve: w,
        strokeDasharray: A.type ? h(A.type) : 0
      }
    ), /* @__PURE__ */ r.createElement(
      sp,
      {
        key: "area-chart",
        fill: N ? g ? g(d.runtime.seriesLabels ? d.runtime.seriesLabels[A.dataKey] : A.dataKey) : "#000" : "transparent",
        fillOpacity: C ? 0.25 : 0.5,
        data: O,
        x: (k) => E(k),
        y: (k) => v(k, T, A),
        yScale: n,
        curve: w,
        strokeDasharray: A.type ? h(A.type) : 0
      }
    ));
  }), /* @__PURE__ */ r.createElement(Dt, { width: Number(i), height: Number(a), fill: "transparent", fillOpacity: 0.05, onMouseMove: (A) => l(A, f), onMouseLeave: o }))));
}, Qy = z.memo(Xy), Tr = {
  Linear: "curveLinear",
  Cardinal: "curveCardinal",
  Natural: "curveNatural",
  "Monotone X": "curveMonotoneX",
  Step: "curveStep"
}, Zy = ({ xScale: e, yScale: t, yMax: n, xMax: a, handleTooltipMouseOver: i, handleTooltipMouseOff: l, isDebug: o }) => {
  var b;
  let { transformedData: s, config: c, seriesHighlight: u, colorScale: d, rawData: h } = z.useContext(De);
  const m = c.brush.active && ((b = c.brush.data) != null && b.length) ? c.brush.data : s;
  if (!m)
    return;
  const p = (g) => {
    if (c.xAxis.type === "categorical")
      return e(g);
    if (c.xAxis.type === "date") {
      let f = new Date(g);
      return e(f);
    }
  }, y = 2;
  return m && /* @__PURE__ */ r.createElement("svg", { height: Number(n) }, /* @__PURE__ */ r.createElement(Ht, { component: "AreaChartStacked" }, /* @__PURE__ */ r.createElement(ve, { className: "area-chart", key: "area-wrapper", left: Number(c.yAxis.size) + y / 2, height: Number(n), style: { overflow: "hidden" } }, /* @__PURE__ */ r.createElement(
    hp,
    {
      data: m,
      keys: c.runtime.areaSeriesKeys.map((g) => g.dataKey) || c.series.map((g) => g.dataKey),
      x0: (g) => p(g.data[c.xAxis.dataKey]),
      y0: (g) => Number(t(g[0])),
      y1: (g) => Number(t(g[1])),
      curve: Sr[Tr[c.stackedAreaChartLineType]]
    },
    ({ stacks: g, path: f }) => g.map((x, E) => {
      let v = c.legend.behavior === "highlight" && u.length > 0 && u.indexOf(x.key) === -1, S = c.legend.behavior === "highlight" || u.length === 0 || u.indexOf(x.key) !== -1;
      return (
        // prettier-ignore
        /* @__PURE__ */ r.createElement(
          "path",
          {
            key: x.key,
            d: f(x) || "",
            strokeWidth: 2,
            stroke: S ? d ? d(c.runtime.seriesLabels ? c.runtime.seriesLabels[x.key] : x.key) : "#000" : "transparent",
            fillOpacity: v ? 0.2 : 1,
            fill: S ? d ? d(c.runtime.seriesLabels ? c.runtime.seriesLabels[x.key] : x.key) : "#000" : "transparent"
          }
        )
      );
    })
  ), /* @__PURE__ */ r.createElement(Dt, { width: Number(a), height: Number(n), fill: "transparent", onMouseMove: (g) => i(g, h), onMouseLeave: l }))));
}, Gy = z.memo(Zy), Ea = () => {
  const { config: e, colorPalettes: t, tableData: n, updateConfig: a, parseDate: i, formatDate: l, setSeriesHighlight: o } = z.useContext(De), { orientation: s } = e, [c, u] = z.useState(null), d = s === "horizontal", h = 1, m = e.lollipopSize === "large" ? 7 : e.lollipopSize === "medium" ? 6 : 5, p = e.lollipopSize === "large" ? 14 : e.lollipopSize === "medium" ? 12 : 10, y = e.yAxis.labelPlacement === "Below Bar", b = e.yAxis.displayNumbersOnBar, g = e.orientation === "horizontal" ? "yAxis" : "xAxis", f = e.barStyle === "rounded", x = e.visualizationSubType === "stacked", E = e.tipRounding, v = e.roundingStyle === "standard" ? "8px" : e.roundingStyle === "shallow" ? "5px" : e.roundingStyle === "finger" ? "15px" : "0px", S = e.runtime.seriesKeys.length, A = { small: 16, medium: 18, large: 20 }, T = Object.keys(e.runtime.seriesLabels).length > 1;
  return z.useEffect(() => {
    s === "horizontal" && !e.yAxis.labelPlacement && a({
      ...e,
      yAxis: {
        ...e,
        labelPlacement: "Below Bar"
      }
    });
  }, [e, a]), z.useEffect(() => {
    e.isLollipopChart === !1 && e.barHeight < 25 && a({ ...e, barHeight: 25 });
  }, [e.isLollipopChart]), z.useEffect(() => {
    e.visualizationSubType === "horizontal" && a({
      ...e,
      orientation: "horizontal"
    });
  }, []), z.useEffect(() => {
    e.barStyle === "lollipop" && !e.isLollipopChart && a({ ...e, isLollipopChart: !0 }), (f || e.barStyle === "flat") && a({ ...e, isLollipopChart: !1 });
  }, [e.barStyle]), {
    generateIconSize: (H) => H < 4 ? 1 : H < 5 ? 4 : H < 10 ? 6 : H < 15 ? 7 : H < 20 || H < 90 ? 8 : 0,
    isHorizontal: d,
    barBorderWidth: h,
    lollipopBarWidth: m,
    lollipopShapeSize: p,
    isLabelBelowBar: y,
    displayNumbersOnBar: b,
    section: g,
    isRounded: f,
    isStacked: x,
    tipRounding: E,
    radius: v,
    stackCount: S,
    fontSize: A,
    hasMultipleSeries: T,
    applyRadius: (H) => {
      if (H == null || !f)
        return {};
      let U = {};
      return (x && H + 1 === S || !x) && (U = d ? { borderRadius: `0 ${v}  ${v}  0` } : { borderRadius: `${v} ${v} 0 0` }), !x && H === -1 && (U = d ? { borderRadius: `${v} 0  0 ${v} ` } : { borderRadius: ` 0  0 ${v} ${v}` }), E === "full" && x && H === 0 && S > 1 && (U = d ? { borderRadius: `${v} 0 0 ${v}` } : { borderRadius: `0 0 ${v} ${v}` }), E === "full" && (x && H === 0 && S === 1 || !x) && (U = { borderRadius: v }), U;
    },
    updateBars: (H) => {
      if (e.visualizationType !== "Bar" && !d)
        return H;
      const U = [...H];
      let Y;
      const R = {
        stacked: e.barHeight,
        lollipop: m
      };
      x ? Y = R.stacked : Y = R[e.isLollipopChart ? "lollipop" : "stacked"] * S;
      const $ = y ? A[e.fontSize] * 1.2 : 0;
      let j = Number(e.barSpace), q = U.length * (Y + $ + j);
      return d && (e.heights.horizontal = q), U.map((X, ne) => {
        let de = 0;
        return X.index !== 0 && (de = (Y + j + $) * ne), { ...X, y: de, height: Y };
      });
    },
    assignColorsToValues: (H, U, Y) => {
      if (!e.legend.colorCode && e.series.length > 1)
        return Y;
      const R = e.customColors ?? t[e.palette], $ = n.map((ne) => ne[e.legend.colorCode]);
      let j = /* @__PURE__ */ new Map(), q = [];
      for (let ne = 0; ne < $.length; ne++)
        j.has($[ne]) || j.set($[ne], R[j.size % R.length]), q.push(j.get($[ne]));
      for (; q.length < H; )
        q = q.concat(q);
      return q[U];
    },
    getHighlightedBarColorByValue: (H) => {
      const U = e == null ? void 0 : e.highlightedBarValues.find((Y) => {
        if (Y.value)
          return e.xAxis.type === "date" ? l(i(Y.value)) === H : Y.value === H;
      });
      return U != null && U.color ? U.color : "rgba(255, 102, 1)";
    },
    getHighlightedBarByValue: (H) => {
      const U = e == null ? void 0 : e.highlightedBarValues.filter((Y) => {
        if (Y.value)
          return e.xAxis.type === "date" ? l(i(Y.value)) === H : Y.value === H;
      })[0];
      return U != null && U.color ? U : !1;
    },
    getAdditionalColumn: (H, U) => {
      if (!U)
        return "";
      const Y = e.columns, R = [];
      let $ = "";
      const j = n.find((q) => q[e.xAxis.dataKey] === U) || {};
      return Object.keys(Y).forEach((q) => {
        if (H && e.columns[q].series && e.columns[q].series !== H)
          return;
        const X = {
          addColPrefix: e.columns[q].prefix,
          addColSuffix: e.columns[q].suffix,
          addColRoundTo: e.columns[q].roundToPlace ? e.columns[q].roundToPlace : "",
          addColCommas: e.columns[q].commas
        }, ne = Ms(j[e.columns[q].name], "left", !0, e, X);
        e.columns[q].tooltips && R.push([e.columns[q].label, ne]);
      }), R.forEach((q) => {
        $ += `${q[0]} : ${q[1]} <br/>`;
      }), $;
    },
    hoveredBar: c,
    setHoveredBar: u,
    onMouseOverBar: (H, U) => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && U && o([U]), u(H);
    },
    onMouseLeaveBar: () => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && o([]);
    }
  };
}, Aa = z.createContext(null), El = ({ xScale: e, barWidth: t = 0, totalBarsInGroup: n = 1, yMax: a, handleTooltipMouseOff: i, handleTooltipMouseOver: l, handleTooltipClick: o, tooltipData: s, showTooltip: c, hideTooltip: u }) => {
  const { parseDate: d, config: h } = z.useContext(De), { runtime: m, regions: p, visualizationType: y, orientation: b, xAxis: g } = h;
  let f, x, E;
  if (p && b === "vertical")
    return p.map((v) => {
      if (g.type === "date" && v.fromType !== "Previous Days" && (f = e(d(v.from).getTime()), x = e(d(v.to).getTime()), E = x - f), g.type === "categorical" && (f = e(v.from), x = e(v.to), E = x - f), (y === "Bar" || h.visualizationType === "Combo") && g.type === "date" && (f = v.fromType !== "Previous Days" ? e(d(v.from).getTime()) - t * n / 2 : null, x = v.toType !== "Last Date" ? e(d(v.to).getTime()) + t * n / 2 : null, E = x - f), (y === "Bar" || h.visualizationType === "Combo") && h.xAxis.type === "categorical" && (f = e(v.from), x = e(v.to), E = x - f), v.fromType === "Previous Days") {
        x = v.toType !== "Last Date" ? e(d(v.to).getTime()) + t * n / 2 : null;
        let T = e.domain(), O = Vs((F) => F).left, w, C = Number(v.from), N = v.toType === "Last Date" ? T[T.length - 1] : v.to, k = new Date(N);
        f = new Date(k.setDate(k.getDate() - C)).getTime();
        let _ = f, W = O(T, _);
        if (W === 0)
          w = T[0];
        else if (W === T.length)
          w = T[T.length - 1];
        else {
          let F = T[W - 1], V = T[W];
          w = _ - F > V - _ ? V : F;
        }
        f = Number(e(w) - (y === "Bar" || y === "Combo" ? t * n / 2 : 0)), E = x - f;
      }
      if (v.toType === "Last Date") {
        let T = e.domain(), O = T[T.length - 1];
        x = Number(e(O) + (y === "Bar" || y === "Combo" ? t * n / 2 : 0)), E = x - f;
      }
      if (v.fromType === "Previous Days" && g.type === "date" && g.sortDates && h.visualizationType === "Line") {
        let T = e.domain(), O = Number(v.from), w = v.toType === "Last Date" ? Vu(h.xAxis.dateParseFormat, T[T.length - 1]) : v.to, C = new Date(w);
        f = new Date(C.setDate(C.getDate() - O)).getTime(), f = e(f), w = e(d(w)), E = w - f;
      }
      if (!f || !x)
        return null;
      const S = () => /* @__PURE__ */ r.createElement(
        "path",
        {
          stroke: "#333",
          d: `M${f} -5
                L${f} 5
                M${f} 0
                L${x} 0
                M${x} -5
                L${x} 5`
        }
      ), A = () => /* @__PURE__ */ r.createElement("rect", { x: f, y: 0, width: E, height: a, fill: v.background, opacity: 0.3 });
      return /* @__PURE__ */ r.createElement(
        ve,
        {
          className: "regions regions-group--line",
          left: h.visualizationType === "Bar" || h.visualizationType === "Combo" ? 0 : (h == null ? void 0 : h.visualizationType) === "Line" ? Number(m.yAxis.size) : 0,
          key: v.label,
          onMouseMove: l,
          onMouseLeave: i,
          handleTooltipClick: o,
          tooltipData: JSON.stringify(s),
          showTooltip: c
        },
        /* @__PURE__ */ r.createElement(S, null),
        /* @__PURE__ */ r.createElement(A, null),
        /* @__PURE__ */ r.createElement(Re, { x: f + E / 2, y: 5, fill: v.color, verticalAnchor: "start", textAnchor: "middle" }, v.label)
      );
    });
}, Jy = () => {
  var T;
  const [e, t] = z.useState(0), { xScale: n, yScale: a, xMax: i, yMax: l } = z.useContext(Aa), { transformedData: o, colorScale: s, seriesHighlight: c, config: u, formatNumber: d, formatDate: h, parseDate: m, setSharedFilter: p } = z.useContext(De), { isHorizontal: y, barBorderWidth: b, applyRadius: g, hoveredBar: f, getAdditionalColumn: x, onMouseLeaveBar: E, onMouseOverBar: v } = Ea(), { orientation: S } = u, A = u.brush.active && ((T = u.brush.data) != null && T.length) ? u.brush.data : o;
  return u.visualizationSubType === "stacked" && !y && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(vp, { data: A, keys: u.runtime.barSeriesKeys || u.runtime.seriesKeys, x: (O) => O[u.runtime.xAxis.dataKey], xScale: n, yScale: a, color: s }, (O) => O.reverse().map(
    (w) => w.bars.map((C) => {
      let N = u.legend.behavior === "highlight" && c.length > 0 && c.indexOf(C.key) === -1, k = u.legend.behavior === "highlight" || c.length === 0 || c.indexOf(C.key) !== -1, _ = u.xAxis.type === "date" && u.xAxis.sortDates ? u.barThickness * (n.range()[1] - n.range()[0]) : i / w.bars.length, W = _ * (u.xAxis.type === "date" && u.xAxis.sortDates ? 1 : u.barThickness || 0.8);
      _ * (1 - (u.barThickness || 0.8)) / 2;
      const F = C.bar.data[u.runtime.xAxis.dataKey], V = u.runtime.xAxis.type === "date" ? h(m(F)) : F, H = d(C.bar ? C.bar.data[C.key] : 0, "left");
      if (!H)
        return;
      const U = n(u.runtime.xAxis.type === "date" ? m(F) : F) - (u.xAxis.type === "date" && u.xAxis.sortDates ? W / 2 : 0), Y = g(w.index), R = u.runtime.xAxis.label ? `${u.runtime.xAxis.label}: ${V}` : V, $ = x(f), j = `${u.runtime.seriesLabels[C.key]}: ${H}`, q = `<ul>
                  <li class="tooltip-heading"">${R}</li>
                  <li class="tooltip-body ">${j}</li>
                  <li class="tooltip-body ">${$}</li>
                    </li></ul>`;
      return t(W), /* @__PURE__ */ r.createElement(ve, { key: `${w.index}--${C.index}--${S}` }, /* @__PURE__ */ r.createElement("style", null, `
                           #barStack${w.index}-${C.index} rect,
                           #barStack${w.index}-${C.index} foreignObject div{
                            animation-delay: ${w.index * 0.5}s;
                            transform-origin: ${W / 2}px ${C.y + C.height}px
                          }
                        `), /* @__PURE__ */ r.createElement(ve, { key: `bar-stack-${w.index}-${C.index}`, id: `barStack${w.index}-${C.index}`, className: "stack vertical" }, /* @__PURE__ */ r.createElement(Re, { display: u.labels && k ? "block" : "none", opacity: N ? 0.5 : 1, x: U + e / 2, y: C.y - 5, fill: "#000", textAnchor: "middle" }, H), /* @__PURE__ */ r.createElement(
        "foreignObject",
        {
          onMouseOver: () => v(V, C.key),
          onMouseLeave: E,
          key: `bar-stack-${w.index}-${C.index}`,
          x: U,
          y: C.y,
          width: W,
          height: C.height,
          display: k ? "block" : "none",
          "data-tooltip-html": q,
          "data-tooltip-id": `cdc-open-viz-tooltip-${u.runtime.uniqueId}`,
          onClick: (X) => {
            X.preventDefault(), p && (C[u.xAxis.dataKey] = V, p(u.uid, C));
          }
        },
        /* @__PURE__ */ r.createElement(
          "div",
          {
            style: {
              transition: "all 0.2s linear",
              opacity: N ? 0.2 : 1,
              width: W,
              height: C.height,
              background: s(u.runtime.seriesLabels[C.key]),
              border: `${u.barHasBorder === "true" ? b : 0}px solid #333`,
              ...Y
            }
          }
        )
      )));
    })
  )), /* @__PURE__ */ r.createElement(El, { xScale: n, yMax: l, barWidth: e, totalBarsInGroup: 1 }));
}, eg = () => {
  const { yMax: e, yScale: t, xScale: n } = z.useContext(Aa), {
    animatedChart: a,
    colorScale: i,
    config: l,
    formatDate: o,
    formatNumber: s,
    getTextWidth: c,
    parseDate: u,
    seriesHighlight: d,
    setSharedFilter: h,
    transformedData: m
  } = z.useContext(De), {
    applyRadius: p,
    barBorderWidth: y,
    displayNumbersOnBar: b,
    fontSize: g,
    getAdditionalColumn: f,
    hoveredBar: x,
    isHorizontal: E,
    isLabelBelowBar: v,
    onMouseLeaveBar: S,
    onMouseOverBar: A,
    updateBars: T
  } = Ea(), { orientation: O, visualizationSubType: w } = l;
  return l.visualizationSubType === "stacked" && E && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Ap, { data: m, keys: l.runtime.barSeriesKeys || l.runtime.seriesKeys, height: e, y: (C) => C[l.runtime.yAxis.dataKey], xScale: n, yScale: t, color: i, offset: "none" }, (C) => C.map(
    (N) => T(N.bars).map((k, _) => {
      let W = l.legend.behavior === "highlight" && d.length > 0 && d.indexOf(k.key) === -1, F = l.legend.behavior === "highlight" || d.length === 0 || d.indexOf(k.key) !== -1;
      l.barHeight = Number(l.barHeight);
      let V = "#000000";
      const H = s(m[k.index][k.key], "left"), U = l.runtime.yAxis.type === "date" ? o(u(m[k.index][l.runtime.originalXAxis.dataKey])) : m[k.index][l.runtime.originalXAxis.dataKey], Y = p(N.index);
      let R = l.runtime.yAxis.label ? `${l.runtime.yAxis.label}: ${U}` : U, $ = c(H, `normal ${g[l.fontSize]}px sans-serif`);
      const j = f(x), q = `${l.runtime.seriesLabels[k.key]}: ${H}`, X = `<ul>
                  <li class="tooltip-heading"">${R}</li>
                  <li class="tooltip-body ">${q}</li>
                  <li class="tooltip-body ">${j}</li>
                    </li></ul>`;
      return Vt.contrast(V, i(l.runtime.seriesLabels[k.key])) < 4.9 && (V = "#FFFFFF"), /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `
                         #barStack${N.index}-${k.index} rect,
                         #barStack${N.index}-${k.index} foreignObject div{
                          animation-delay: ${N.index * 0.5}s;
                          transform-origin: ${k.x}px
                        }
                      `), /* @__PURE__ */ r.createElement(ve, { key: _, id: `barStack${N.index}-${k.index}`, className: "stack horizontal" }, /* @__PURE__ */ r.createElement(
        "foreignObject",
        {
          onMouseOver: () => A(U, k.key),
          onMouseLeave: S,
          key: `barstack-horizontal-${N.index}-${k.index}-${_}`,
          className: `animated-chart group ${a ? "animated" : ""}`,
          x: k.x,
          y: k.y,
          style: { transition: "all 0.2s linear" },
          width: k.width,
          height: k.height,
          opacity: W ? 0.2 : 1,
          display: F ? "block" : "none",
          "data-tooltip-html": X,
          "data-tooltip-id": `cdc-open-viz-tooltip-${l.runtime.uniqueId}`,
          onClick: (ne) => {
            ne.preventDefault(), h && (k[l.xAxis.dataKey] = H, h(l.uid, k));
          }
        },
        /* @__PURE__ */ r.createElement("div", { style: { width: k.width, height: k.height, background: i(l.runtime.seriesLabels[k.key]), border: `${l.barHasBorder === "true" ? y : 0}px solid #333`, ...Y } })
      ), O === "horizontal" && w === "stacked" && v && N.index === 0 && !l.yAxis.hideLabel && /* @__PURE__ */ r.createElement(
        Re,
        {
          x: `${k.x + (l.isLollipopChart ? 15 : 5)}`,
          y: k.y + k.height * 1.2,
          fill: "#000000",
          textAnchor: "start",
          verticalAnchor: "start"
        },
        U
      ), b && $ < k.width && /* @__PURE__ */ r.createElement(
        Re,
        {
          display: F ? "block" : "none",
          x: k.x + N.bars[k.index].width / 2,
          y: k.y + k.height / 2,
          fill: V,
          textAnchor: "middle",
          verticalAnchor: "middle"
        },
        H
      )));
    })
  )));
}, tg = () => {
  var R;
  const { xScale: e, yScale: t, xMax: n, yMax: a, seriesScale: i } = z.useContext(Aa), [l, o] = z.useState(0), [s, c] = z.useState(0), {
    applyRadius: u,
    assignColorsToValues: d,
    barBorderWidth: h,
    generateIconSize: m,
    getAdditionalColumn: p,
    getHighlightedBarByValue: y,
    getHighlightedBarColorByValue: b,
    lollipopBarWidth: g,
    lollipopShapeSize: f,
    onMouseLeaveBar: x,
    onMouseOverBar: E,
    section: v
  } = Ea(), {
    colorScale: S,
    config: A,
    dashboardConfig: T,
    formatDate: O,
    formatNumber: w,
    getXAxisData: C,
    getYAxisData: N,
    isNumber: k,
    parseDate: _,
    seriesHighlight: W,
    setSharedFilter: F,
    transformedData: V
  } = z.useContext(De), { HighLightedBarUtils: H } = _r(A), U = A.brush.active && ((R = A.brush.data) != null && R.length) ? A.brush.data : V, Y = ($, j) => {
    var ne;
    let q = null;
    const X = m(j);
    return (ne = A.suppressedData) == null || ne.forEach((de) => {
      $.key === de.column && String($.value) === String(de.value) && de.icon && (q = /* @__PURE__ */ r.createElement(xl, { color: "#000", size: X }));
    }), q;
  };
  return A.visualizationSubType !== "stacked" && (A.visualizationType === "Bar" || A.visualizationType === "Combo") && A.orientation === "vertical" && /* @__PURE__ */ r.createElement(ve, null, /* @__PURE__ */ r.createElement(
    jc,
    {
      data: U,
      keys: A.runtime.barSeriesKeys || A.runtime.seriesKeys,
      height: a,
      x0: ($) => {
        const j = $[A.runtime.originalXAxis.dataKey];
        return A.runtime.xAxis.type === "date" ? _(j) : j;
      },
      x0Scale: e,
      x1Scale: i,
      yScale: t,
      color: () => ""
    },
    ($) => $.map((j, q) => /* @__PURE__ */ r.createElement(ve, { className: `bar-group-${j.index}-${j.x0}--${q} ${A.orientation}`, key: `bar-group-${j.index}-${j.x0}--${q}`, id: `bar-group-${j.index}-${j.x0}--${q}`, left: j.x0 }, j.bars.map((X, ne) => {
      const de = A.useLogScale ? 0.1 : 0, Ae = 20;
      let we = A.highlightedBarValues.map((Me) => Me.value).filter((Me) => Me !== void 0);
      we = A.xAxis.type === "date" ? H.formatDates(we) : we;
      let G = A.legend.behavior === "highlight" && W.length > 0 && W.indexOf(X.key) === -1, K = A.legend.behavior === "highlight" || W.length === 0 || W.indexOf(X.key) !== -1, ae = Math.abs(t(X.value) - t(de)), D = X.value >= 0 && k(X.value) ? X.y : t(0);
      const ce = X.value >= 0 && k(X.value) ? t(de) - Ae : t(0), le = A.suppressedData.some((Me) => X.key === Me.column && String(X.value) === String(Me.value)) ? ce : D;
      let pe = i.range()[1], he = A.isLollipopChart ? g : pe / j.bars.length, Ee = X.x + (A.isLollipopChart ? (pe / j.bars.length - g) / 2 : 0) - (A.xAxis.type === "date" && A.xAxis.sortDates ? pe / 2 : 0);
      o(he), c(j.bars.length);
      let Ce = w(X.value, "left"), ke = A.runtime[v].type === "date" ? O(_(U[j.index][A.runtime.originalXAxis.dataKey])) : U[j.index][A.runtime.originalXAxis.dataKey];
      const Se = X.value < 0 ? -1 : ne, ye = u(Se), re = p(X.key, U[j.index][A.runtime.originalXAxis.dataKey]);
      let J = A.runtime.xAxis.label ? `${A.runtime.xAxis.label}: ${ke}` : ke;
      const He = `${A.runtime.seriesLabels[X.key]}: ${Ce}`, me = `<ul>
                  <li class="tooltip-heading">${J}</li>
                  <li class="tooltip-body ">${He}</li>
                  ${re ? '<li class="tooltip-body ">' + re + "</li>" : ""}
                    </li></ul>`;
      let Pe = "#000000";
      Pe = H.checkFontColor(Ce, we, Pe);
      let Le = A.runtime.seriesLabels && A.runtime.seriesLabels[X.key] ? S(A.runtime.seriesLabels[X.key]) : S(X.key);
      Le = d($.length, j.index, Le);
      const je = A.isLollipopChart && A.lollipopColorStyle === "regular", Ie = A.isLollipopChart && A.lollipopColorStyle === "two-tone", Xe = we == null ? void 0 : we.includes(ke), mt = b(ke), at = y(ke), te = Xe ? mt : A.barHasBorder === "true" ? "#000" : "transparent", $e = Xe ? at.borderWidth : A.isLollipopChart ? 0 : A.barHasBorder === "true" ? h : 0, Be = A.suppressedData.some((Me) => X.key === Me.column && X.value === Me.value) ? "" : Ce;
      let Lt = A.suppressedData.some((Me) => X.key === Me.column && String(X.value) === String(Me.value)) ? Ae : ae;
      const Ot = A.suppressedData.some((Me) => X.key === Me.column && X.value === Me.value) ? "none" : "block", Ct = (Me, P) => {
        let ie = Me, fe = P || "#f2f2f2";
        if (T && T.dashboard.sharedFilters) {
          const { sharedFilters: ue } = T.dashboard;
          return ie = ue.map((Ne) => Ne.setBy === A.uid ? Ne.resetLabel === Ne.active || Ne.active === V[j.index][A.xAxis.dataKey] ? Me : fe : Me)[0], je && (ie = Me), Ie && (ie = Vt(Me).brighten(1)), Xe && (ie = "transparent"), ie;
        }
        return Ie && (ie = Vt(Me).brighten(1)), Xe && (ie = "transparent"), ie;
      }, Gt = () => he < 50 && he > 15 ? he / 2.5 : he < 15 && he > 5 ? he / 6 : he < 5 ? 0 : he / 2, rt = {
        position: "absolute",
        top: X.value >= 0 && k(X.value) ? -Ae : void 0,
        bottom: X.value >= 0 && k(X.value) ? void 0 : `-${Ae}px`,
        left: Gt()
      };
      A.isLollipopChart && (rt.left = 0, rt.transform = "translateX(0)");
      const vt = {
        background: Ct(Le),
        borderColor: te,
        borderStyle: "solid",
        borderWidth: `${$e}px`,
        width: he,
        height: Lt,
        ...ye,
        cursor: T ? "pointer" : "default"
      };
      return /* @__PURE__ */ r.createElement(ve, { key: `${j.index}--${ne}` }, /* @__PURE__ */ r.createElement("style", null, `
                        .linear #barGroup${j.index} div,
                        .Combo #barGroup${j.index} div {
                          transform-origin: 0 ${le + Lt}px;
                        }
                      `), /* @__PURE__ */ r.createElement(ve, { key: `bar-sub-group-${j.index}-${j.x0}-${le}--${ne}` }, /* @__PURE__ */ r.createElement(
        "foreignObject",
        {
          onMouseOver: () => E(ke, X.key),
          onMouseLeave: x,
          style: { overflow: "visible", transition: "all 0.2s linear" },
          id: `barGroup${j.index}`,
          key: `bar-group-bar-${j.index}-${X.index}-${X.value}-${X.key}`,
          x: Ee,
          y: le,
          width: he,
          height: Lt,
          opacity: G ? 0.2 : 1,
          display: K ? "block" : "none",
          "data-tooltip-html": me,
          "data-tooltip-id": `cdc-open-viz-tooltip-${A.runtime.uniqueId}`,
          onClick: (Me) => {
            Me.preventDefault(), F && (X[A.xAxis.dataKey] = ke, F(A.uid, X));
          }
        },
        /* @__PURE__ */ r.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ r.createElement("div", { style: rt }, Y(X, he)), /* @__PURE__ */ r.createElement("div", { style: { ...vt } }))
      ), /* @__PURE__ */ r.createElement(
        Re,
        {
          display: A.labels && K ? "block" : "none",
          opacity: G ? 0.5 : 1,
          x: Ee + he / 2,
          y: le - 5,
          fill: Pe,
          textAnchor: "middle"
        },
        Be
      ), A.isLollipopChart && A.lollipopShape === "circle" && /* @__PURE__ */ r.createElement(
        "circle",
        {
          display: Ot,
          cx: Ee + f / 3.5,
          cy: X.y,
          r: f / 2,
          fill: Le,
          key: `circle--${X.index}`,
          "data-tooltip-html": me,
          "data-tooltip-id": `cdc-open-viz-tooltip-${A.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), A.isLollipopChart && A.lollipopShape === "square" && /* @__PURE__ */ r.createElement(
        "rect",
        {
          display: Ot,
          x: Ee - g / 2,
          y: le,
          width: f,
          height: f,
          fill: Le,
          key: `circle--${X.index}`,
          "data-tooltip-html": me,
          "data-tooltip-id": `cdc-open-viz-tooltip-${A.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ r.createElement("animate", { attributeName: "height", values: `0, ${f}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(A.confidenceKeys).length > 0 ? U.map(($) => {
    let j, q, X, ne, de = 5;
    return j = e(C($)) + (A.xAxis.type !== "date" || !A.xAxis.sortDates ? i.range()[1] / 2 : 0), X = t(N($, A.confidenceKeys.lower)), ne = t(N($, A.confidenceKeys.upper)), /* @__PURE__ */ r.createElement(
      "path",
      {
        key: `confidence-interval-v-${q}-${$[A.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${j - de} ${X}
                    L${j + de} ${X}
                    M${j} ${X}
                    L${j} ${ne}
                    M${j - de} ${ne}
                    L${j + de} ${ne}`
      }
    );
  }) : "", /* @__PURE__ */ r.createElement(El, { xScale: e, yMax: a, barWidth: l, totalBarsInGroup: s }));
}, ng = () => {
  const { xScale: e, yScale: t, yMax: n, seriesScale: a } = z.useContext(Aa), { transformedData: i, colorScale: l, seriesHighlight: o, config: s, formatNumber: c, formatDate: u, parseDate: d, setSharedFilter: h, isNumber: m, getTextWidth: p, getYAxisData: y, getXAxisData: b } = z.useContext(De), {
    isHorizontal: g,
    barBorderWidth: f,
    applyRadius: x,
    updateBars: E,
    assignColorsToValues: v,
    section: S,
    fontSize: A,
    isLabelBelowBar: T,
    displayNumbersOnBar: O,
    lollipopBarWidth: w,
    lollipopShapeSize: C,
    getHighlightedBarColorByValue: N,
    getHighlightedBarByValue: k,
    generateIconSize: _,
    getAdditionalColumn: W,
    hoveredBar: F,
    onMouseLeaveBar: V,
    onMouseOverBar: H
  } = Ea(), { HighLightedBarUtils: U } = _r(s), Y = (R, $) => {
    var X;
    let j = null;
    const q = _($);
    return (X = s.suppressedData) == null || X.forEach((ne) => {
      R.key === ne.column && String(R.value) === String(ne.value) && ne.icon && (j = /* @__PURE__ */ r.createElement(xl, { color: "#000", size: q }));
    }), j;
  };
  return s.visualizationSubType !== "stacked" && s.visualizationType === "Bar" && s.orientation === "horizontal" && /* @__PURE__ */ r.createElement(ve, null, /* @__PURE__ */ r.createElement(
    jc,
    {
      data: i,
      keys: s.runtime.barSeriesKeys || s.runtime.seriesKeys,
      height: n,
      x0: (R) => R[s.runtime.originalXAxis.dataKey],
      x0Scale: t,
      x1Scale: a,
      yScale: e,
      color: () => ""
    },
    (R) => E(R).map(($, j) => /* @__PURE__ */ r.createElement(ve, { className: `bar-group-${$.index}-${$.x0}--${j} ${s.orientation}`, key: `bar-group-${$.index}-${$.x0}--${j}`, id: `bar-group-${$.index}-${$.x0}--${j}`, top: $.y }, $.bars.map((q, X) => {
      const ne = s.useLogScale ? 0.1 : 0;
      let de = s.highlightedBarValues.map((xe) => xe.value).filter((xe) => xe !== void 0);
      de = s.xAxis.type === "date" ? U.formatDates(de) : de;
      let Ae = s.legend.behavior === "highlight" && o.length > 0 && o.indexOf(q.key) === -1, we = s.legend.behavior === "highlight" || o.length === 0 || o.indexOf(q.key) !== -1, G = s.barHeight, K = q.value >= 0 && m(q.value) ? q.y : t(ne);
      const ae = q.value < 0 ? Math.abs(e(q.value)) : e(ne), D = Math.abs(e(q.value) - e(ne)), ce = 25, le = q.value >= 0 && m(q.value);
      let pe = q.value && s.suppressedData.some(({ column: xe, value: oe }) => q.key === xe && q.value === oe) ? ce : D;
      const he = le ? e(0) : e(ne) - ce, Ee = s.suppressedData.some((xe) => q.key === xe.column && String(q.value) === String(xe.value)) ? he : ae, Ce = c(q.value, "left"), ke = s.runtime[S].type === "date" ? u(d(i[$.index][s.runtime.originalXAxis.dataKey])) : i[$.index][s.runtime.originalXAxis.dataKey], Se = le ? "above" : "below", ye = s.suppressedData.some((xe) => q.key === xe.column && q.value === xe.value) ? "" : Ce;
      let J = p(ke, `normal ${A[s.fontSize]}px sans-serif`) < D - 5, He = J ? "end" : "start", me = "start", Pe = J ? -5 : 5, Le = 10;
      Se === "below" && (He = J ? "start" : "end", Pe = J ? 5 : -5, s.isLollipopChart && (me = "end", Le = -10));
      const je = q.value < 0 ? -1 : X, Ie = x(je);
      let Xe = s.runtime.yAxis.label ? `${s.runtime.yAxis.label}: ${ke}` : ke;
      const mt = W(F), at = `${s.runtime.seriesLabels[q.key]}: ${Ce}`, te = `<ul>
                  <li class="tooltip-heading"">${Xe}</li>
                  <li class="tooltip-body ">${at}</li>
                  <li class="tooltip-body ">${mt}</li>
                    </li></ul>`;
      let $e = "#000000";
      $e = U.checkFontColor(Ce, de, $e);
      let Be = s.runtime.seriesLabels && s.runtime.seriesLabels[q.key] ? l(s.runtime.seriesLabels[q.key]) : l(q.key);
      Be = v(R.length, $.index, Be);
      const Lt = s.isLollipopChart && s.lollipopColorStyle === "regular", Ot = s.isLollipopChart && s.lollipopColorStyle === "two-tone", Ct = de == null ? void 0 : de.includes(Ce), Gt = N(Ce), rt = k(Ce), vt = Ct ? Gt : s.barHasBorder === "true" ? "#000" : "transparent", Me = Ct ? rt.borderWidth : s.isLollipopChart ? 0 : s.barHasBorder === "true" ? f : 0, P = s.suppressedData.some((xe) => q.key === xe.column && q.value === xe.value) ? "none" : "block";
      Be && $e && Vt.contrast($e, Be) < 4.9 && ($e = J ? "#FFFFFF" : "#000000");
      const fe = {
        position: "absolute",
        top: (() => Number(G) < 20 ? -4 : Number(G) < 25 ? -1 : Number(G) < 30 ? 2 : Number(G) < 35 ? 4 : Number(G) < 40 ? 5 : Number(G) < 50 ? 9 : Number(G) < 60 ? 10 : 12)(),
        left: ce * 1.2
      };
      s.isLollipopChart && (fe.top = -9);
      const Ne = {
        background: (() => Lt ? Be : Ot ? Vt(Be).brighten(1) : Ct ? "transparent" : Be)(),
        borderColor: vt,
        borderStyle: "solid",
        borderWidth: Me,
        width: pe,
        transition: "all 0.2s linear",
        height: s.isLollipopChart ? w : G,
        ...Ie
      };
      return /* @__PURE__ */ r.createElement(ve, { key: `${$.index}--${X}` }, /* @__PURE__ */ r.createElement("style", null, `
                        .linear #barGroup${$.index} div,
                        .Combo #barGroup${$.index} div {
                          transform-origin: 0 ${K + G}px;
                        }
                      `), /* @__PURE__ */ r.createElement(ve, { key: `bar-sub-group-${$.index}-${$.x0}-${K}--${X}` }, /* @__PURE__ */ r.createElement(
        "foreignObject",
        {
          onMouseOver: () => H(ke, q.key),
          onMouseLeave: V,
          id: `barGroup${$.index}`,
          key: `bar-group-bar-${$.index}-${q.index}-${q.value}-${q.key}`,
          x: Ee,
          style: { overflow: "visible", ...Ne },
          y: G * q.index,
          height: s.isLollipopChart ? w : G,
          width: pe,
          opacity: Ae ? 0.2 : 1,
          display: we ? "block" : "none",
          "data-tooltip-html": te,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          onClick: (xe) => {
            xe.preventDefault(), h && (q[s.xAxis.dataKey] = Ce, h(s.uid, q));
          }
        },
        /* @__PURE__ */ r.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ r.createElement("div", { style: fe }, Y(q, pe)), /* @__PURE__ */ r.createElement("div", { style: { ...Ne } }))
      ), !s.isLollipopChart && O && /* @__PURE__ */ r.createElement(
        Re,
        {
          display: we ? "block" : "none",
          x: q.y,
          y: s.barHeight / 2 + s.barHeight * q.index,
          fill: $e,
          dx: Pe,
          verticalAnchor: "middle",
          textAnchor: He
        },
        ye
      ), s.isLollipopChart && O && /* @__PURE__ */ r.createElement(
        Re,
        {
          display: we ? "block" : "none",
          x: q.y,
          y: 0,
          fill: "#000000",
          dx: Le,
          textAnchor: me,
          verticalAnchor: "middle",
          fontWeight: "normal"
        },
        ye
      ), T && !s.yAxis.hideLabel && /* @__PURE__ */ r.createElement(Re, { x: s.yAxis.hideAxis ? 0 : 5, y: $.height, dy: 4, verticalAnchor: "start", textAnchor: "start" }, s.runtime.yAxis.type === "date" ? u(d(i[$.index][s.runtime.originalXAxis.dataKey])) : g ? i[$.index][s.runtime.originalXAxis.dataKey] : c(i[$.index][s.runtime.originalXAxis.dataKey])), s.isLollipopChart && s.lollipopShape === "circle" && /* @__PURE__ */ r.createElement(
        "circle",
        {
          display: P,
          cx: q.y,
          cy: 0 + w / 2,
          r: C / 2,
          fill: Be,
          key: `circle--${q.index}`,
          "data-tooltip-html": te,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), s.isLollipopChart && s.lollipopShape === "square" && /* @__PURE__ */ r.createElement(
        "rect",
        {
          display: P,
          x: q.y > 10 ? q.y - C / 2 : 0,
          y: 0 - w / 2,
          width: C,
          height: C,
          fill: Be,
          key: `circle--${q.index}`,
          "data-tooltip-html": te,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ r.createElement("animate", { attributeName: "height", values: `0, ${C}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(s.confidenceKeys).length > 0 ? i.map((R) => {
    let $, j, q, X = 5;
    return $ = t(b(R)) - 0.75 * s.barHeight, j = e(y(R, s.confidenceKeys.upper)), q = e(y(R, s.confidenceKeys.lower)), /* @__PURE__ */ r.createElement(
      "path",
      {
        key: `confidence-interval-h-${$}-${R[s.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${q} ${$ - X}
                    L${q} ${$ + X}
                    M${q} ${$}
                    L${j} ${$}
                    M${j} ${$ - X}
                    L${j} ${$ + X} `
      }
    );
  }) : "");
}, Ba = {
  Vertical: tg,
  Horizontal: ng,
  StackedVertical: Jy,
  StackedHorizontal: eg
}, ag = ({ xScale: e, yScale: t, seriesScale: n, xMax: a, yMax: i, handleTooltipMouseOver: l, handleTooltipMouseOff: o, handleTooltipClick: s }) => {
  const { transformedData: c, config: u } = z.useContext(De), d = {
    xScale: e,
    yScale: t,
    xMax: a,
    yMax: i,
    seriesScale: n
  };
  return /* @__PURE__ */ r.createElement(Ht, { component: "BarChart" }, /* @__PURE__ */ r.createElement(Aa.Provider, { value: d }, /* @__PURE__ */ r.createElement(ve, { left: parseFloat(u.runtime.yAxis.size) }, /* @__PURE__ */ r.createElement(Ba.StackedVertical, null), /* @__PURE__ */ r.createElement(Ba.StackedHorizontal, null), /* @__PURE__ */ r.createElement(Ba.Vertical, null), /* @__PURE__ */ r.createElement(Ba.Horizontal, null), /* @__PURE__ */ r.createElement(Dt, { key: "bars", display: u.tooltips.singleSeries ? "none" : "block", width: Number(a), height: Number(i), fill: "transparent", fillOpacity: 0.05, onMouseMove: (h) => l(h, c), onMouseOut: o, onClick: (h) => s(h, c) }))));
};
function rn() {
  return rn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, rn.apply(this, arguments);
}
function yn(e) {
  var t = e.x1, n = e.x2, a = e.y1, i = e.y2;
  return {
    x1: a,
    x2: i,
    y1: t,
    y2: n
  };
}
function Au(e) {
  var t = e.left, n = t === void 0 ? 0 : t, a = e.top, i = a === void 0 ? 0 : a, l = e.className, o = e.max, s = e.min, c = e.firstQuartile, u = e.thirdQuartile, d = e.median, h = e.boxWidth, m = h === void 0 ? 10 : h, p = e.fill, y = e.fillOpacity, b = e.stroke, g = e.strokeWidth, f = e.rx, x = f === void 0 ? 2 : f, E = e.ry, v = E === void 0 ? 2 : E, S = e.valueScale, A = e.outliers, T = A === void 0 ? [] : A, O = e.horizontal, w = e.medianProps, C = w === void 0 ? {} : w, N = e.maxProps, k = N === void 0 ? {} : N, _ = e.minProps, W = _ === void 0 ? {} : _, F = e.boxProps, V = F === void 0 ? {} : F, H = e.outlierProps, U = H === void 0 ? {} : H, Y = e.container, R = Y === void 0 ? !1 : Y, $ = e.containerProps, j = $ === void 0 ? {} : $, q = e.children, X = O ? i : n, ne = X + (m || 0) / 2, de = S.range(), Ae = S(s ?? 0), we = S(c ?? 0), G = S(d ?? 0), K = S(u ?? 0), ae = S(o ?? 0), D = {
    valueRange: de,
    center: ne,
    offset: X,
    boxWidth: m,
    max: {
      x1: ne - (m || 0) / 4,
      x2: ne + (m || 0) / 4,
      y1: ae,
      y2: ae
    },
    maxToThird: {
      x1: ne,
      x2: ne,
      y1: ae,
      y2: K
    },
    median: {
      x1: X,
      x2: X + (m || 0),
      y1: G,
      y2: G
    },
    minToFirst: {
      x1: ne,
      x2: ne,
      y1: we,
      y2: Ae
    },
    min: {
      x1: ne - (m || 0) / 4,
      x2: ne + (m || 0) / 4,
      y1: Ae,
      y2: Ae
    },
    box: {
      x1: X,
      x2: m || 0,
      y1: K,
      y2: Math.abs(K - we)
    },
    container: {
      x1: X,
      x2: m || 0,
      y1: Math.min.apply(Math, de),
      y2: Math.abs(de[0] - de[1])
    }
  };
  return O && (D.max = yn(D.max), D.maxToThird = yn(D.maxToThird), D.box.y1 = we, D.box = yn(D.box), D.median = yn(D.median), D.minToFirst = yn(D.minToFirst), D.min = yn(D.min), D.container = yn(D.container), D.container.y1 = Math.min.apply(Math, de)), q ? /* @__PURE__ */ r.createElement(r.Fragment, null, q(D)) : /* @__PURE__ */ r.createElement(ve, {
    className: lt("visx-boxplot", l)
  }, T.map(function(ce, le) {
    var pe = O ? S(ce) : ne, he = O ? ne : S(ce);
    return /* @__PURE__ */ r.createElement("circle", rn({
      key: "visx-boxplot-outlier-" + le,
      className: "visx-boxplot-outlier",
      cx: pe,
      cy: he,
      r: 4,
      stroke: b,
      strokeWidth: g,
      fill: p,
      fillOpacity: y
    }, U));
  }), /* @__PURE__ */ r.createElement("line", rn({
    className: "visx-boxplot-max",
    x1: D.max.x1,
    y1: D.max.y1,
    x2: D.max.x2,
    y2: D.max.y2,
    stroke: b,
    strokeWidth: g
  }, k)), /* @__PURE__ */ r.createElement("line", {
    className: "visx-boxplot-max-to-third",
    x1: D.maxToThird.x1,
    y1: D.maxToThird.y1,
    x2: D.maxToThird.x2,
    y2: D.maxToThird.y2,
    stroke: b,
    strokeWidth: g
  }), /* @__PURE__ */ r.createElement("rect", rn({
    className: "visx-boxplot-box",
    x: D.box.x1,
    y: D.box.y1,
    width: D.box.x2,
    height: D.box.y2,
    stroke: b,
    strokeWidth: g,
    fill: p,
    fillOpacity: y,
    rx: x,
    ry: v
  }, V)), /* @__PURE__ */ r.createElement("line", rn({
    className: "visx-boxplot-median",
    x1: D.median.x1,
    y1: D.median.y1,
    x2: D.median.x2,
    y2: D.median.y2,
    stroke: b,
    strokeWidth: g
  }, C)), /* @__PURE__ */ r.createElement("line", {
    className: "visx-boxplot-min-to-first",
    x1: D.minToFirst.x1,
    y1: D.minToFirst.y1,
    x2: D.minToFirst.x2,
    y2: D.minToFirst.y2,
    stroke: b,
    strokeWidth: g
  }), /* @__PURE__ */ r.createElement("line", rn({
    className: "visx-boxplot-min",
    x1: D.min.x1,
    y1: D.min.y1,
    x2: D.min.x2,
    y2: D.min.y2,
    stroke: b,
    strokeWidth: g
  }, W)), R && /* @__PURE__ */ r.createElement("rect", rn({
    x: D.container.x1,
    y: D.container.y1,
    width: D.container.x2,
    height: D.container.y2,
    fillOpacity: "0"
  }, j)));
}
Au.propTypes = {
  max: B.number,
  min: B.number,
  firstQuartile: B.number,
  thirdQuartile: B.number,
  median: B.number,
  boxWidth: B.number,
  fill: B.string,
  fillOpacity: B.oneOfType([B.number, B.string]),
  stroke: B.string,
  strokeWidth: B.oneOfType([B.number, B.string]),
  rx: B.number,
  ry: B.number,
  outliers: B.arrayOf(B.number),
  container: B.bool,
  children: B.func
};
const rg = ({ xScale: e, yScale: t }) => {
  const { config: n, setConfig: a } = z.useContext(De), { boxplot: i } = n;
  z.useEffect(() => {
    n.legend.hide === !1 && a({
      ...n,
      legend: {
        ...n.legend,
        hide: !0
      }
    });
  }, []);
  const l = `cdc-open-viz-tooltip-${n.runtime.uniqueId}`, o = (g) => `
      <strong>${g.columnCategory}</strong></br>
      ${i.labels.q1}: ${g.columnFirstQuartile}<br/>
      ${i.labels.q3}: ${g.columnThirdQuartile}<br/>
      ${i.labels.iqr}: ${g.columnIqr}<br/>
      ${i.labels.median}: ${g.columnMedian}
    `, s = (g) => Number(g.columnMax), c = (g) => Number(g.columnMin), u = (g) => Number(g.columnMedian), d = (g) => Number(g.columnThirdQuartile), h = (g) => Number(g.columnFirstQuartile), m = 0.5, p = e.bandwidth(), y = Math.min(40, p), b = Nt[n == null ? void 0 : n.palette][0] ? Nt[n == null ? void 0 : n.palette][0] : "#000";
  return /* @__PURE__ */ r.createElement(Ht, { component: "BoxPlot" }, /* @__PURE__ */ r.createElement(ve, { className: "boxplot", key: "boxplot-group" }, i.plots.map((g, f) => {
    const x = p - y, E = 4;
    return /* @__PURE__ */ r.createElement(ve, { key: `boxplotplot-${f}` }, i.plotNonOutlierValues && g.nonOutlierValues.map((v, S) => /* @__PURE__ */ r.createElement("circle", { cx: e(g.columnCategory) + Number(n.yAxis.size) + p / 2, cy: t(v), r: E, fill: "#ccc", style: { opacity: 1, fillOpacity: 1, stroke: "black" }, key: `boxplot-${f}--circle-${S}` })), /* @__PURE__ */ r.createElement(
      Au,
      {
        "data-left": e(g.columnCategory) + n.yAxis.size + x / 2 + 0.5,
        key: `box-plot-${f}`,
        min: c(g),
        max: s(g),
        left: Number(e(g.columnCategory)) + Number(n.yAxis.size) + x / 2 + 0.5,
        firstQuartile: h(g),
        thirdQuartile: d(g),
        median: u(g),
        boxWidth: y,
        fill: b,
        fillOpacity: m,
        stroke: "black",
        valueScale: t,
        outliers: i.plotOutlierValues ? g.columnOutliers : [],
        outlierProps: {
          style: {
            fill: `${b}`,
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
          "data-tooltip-html": o(g),
          "data-tooltip-id": l
        }
      }
    ));
  })));
}, ig = ({ xScale: e, yScale: t, getXAxisData: n, getYAxisData: a }) => {
  const { colorScale: i, transformedData: l, config: o, formatNumber: s, seriesHighlight: c, colorPalettes: u } = z.useContext(De);
  let d = 4.5;
  const h = Object.keys(o.runtime.seriesLabels).length > 1, m = (p, y) => `<div>
    ${o.legend.showLegendValuesTooltip && o.runtime.seriesLabels && h ? `${o.runtime.seriesLabels[y] || ""}<br/>` : ""}
    ${o.xAxis.label}: ${s(p[o.xAxis.dataKey], "bottom")} <br/>
    ${o.yAxis.label}: ${s(p[y], "left")}
</div>`;
  return /* @__PURE__ */ r.createElement(ve, { className: "scatter-plot", left: o.yAxis.size }, l.map((p, y) => o.runtime.seriesKeys.map((b, g) => {
    const f = o.legend.behavior === "highlight" && c.length > 0 && c.indexOf(b) === -1, x = o.legend.behavior === "highlight" || c.length === 0 || c.indexOf(b) !== -1, E = o.palette ? u[o.palette][g] : "#000";
    let v = {
      filter: "unset",
      opacity: 1,
      stroke: x ? "black" : ""
    };
    return /* @__PURE__ */ r.createElement(
      "circle",
      {
        key: `${y}-${g}`,
        r: d,
        cx: e(p[o.xAxis.dataKey]),
        cy: t(p[b]),
        fill: x ? E : "transparent",
        fillOpacity: f ? 0.25 : 1,
        style: v,
        "data-tooltip-html": m(p, b),
        "data-tooltip-id": `cdc-open-viz-tooltip-${o.runtime.uniqueId}`
      }
    );
  })));
};
function lg({ height: e, xScale: t }) {
  const { transformedData: n, config: a, formatNumber: i, twoColorPalette: l, getTextWidth: o, updateConfig: s, parseDate: c, formatDate: u, currentViewport: d } = z.useContext(De), { barStyle: h, tipRounding: m, roundingStyle: p, twoColor: y } = a, b = z.useRef([]), [g, f] = z.useState(window.innerWidth), x = p === "standard" ? "8px" : p === "shallow" ? "5px" : p === "finger" ? "15px" : "0px", E = { small: 16, medium: 18, large: 20 };
  a.barStyle;
  const v = Number(a.xAxis.target), S = a.series[0].dataKey, A = Number(t.domain()[1]), O = n.some((Y) => Y[S] < 0) || v > 0 || t.domain()[0] < 0, w = a.barHasBorder === "true" ? 1 : 0, C = a.lollipopSize === "large" ? 7 : a.lollipopSize === "medium" ? 6 : 5, N = a.lollipopSize === "large" ? 14 : a.lollipopSize === "medium" ? 12 : 10, k = Math.max(t(0), Math.min(t(v), t(A))), _ = (Y) => {
    if (Y == null || h !== "rounded")
      return;
    let R = {};
    return Y === "left" && (R = { borderRadius: `${x} 0 0 ${x}` }), Y === "right" && (R = { borderRadius: `0 ${x} ${x} 0` }), m === "full" && (R = { borderRadius: x }), R;
  }, W = {
    calculate: function() {
      const R = n[0][S] < v ? "left" : "right", $ = `${a.xAxis.targetLabel} ${i(a.xAxis.target || 0, "left")}`, j = o($, `bold ${E[a.fontSize]}px sans-serif`);
      let q = a.isLollipopChart ? C / 2 : Number(a.barHeight) / 2, X = 0, ne = 0, de = !1;
      R === "right" && (X = -10, de = j - X < k, ne = k - j), R === "left" && (X = 10, de = t(A) - k > j + X, ne = k), this.text = $, this.y = q, this.x = ne, this.padding = X, this.showLabel = a.xAxis.showTargetLabel ? de : !1;
    }
  };
  W.calculate();
  const F = z.useRef(null), V = yl(F, {});
  z.useEffect(() => {
    const Y = () => {
      f(window.innerWidth), b.current.forEach((R) => {
        R.style.transition = "none", R.style.transform = "translate(0) scale(1)";
      });
    };
    return window.addEventListener("resize", Y), () => {
      window.removeEventListener("resize", Y);
    };
  }, []);
  const [H, U] = z.useState(!1);
  return z.useEffect(() => {
    V != null && V.isIntersecting && setTimeout(() => {
      U(!0);
    }, 100);
  }, [V == null ? void 0 : V.isIntersecting, a.animate]), z.useEffect(() => {
    b.current.forEach((Y, R) => {
      if (a.animate) {
        const $ = v / A * 100;
        Y.style.opacity = "0", Y.style.transform = `translate(${$ / 1.07}%) scale(0, 1)`, setTimeout(() => {
          Y.style.opacity = "1", Y.style.transform = "translate(0) scale(1)", Y.style.transition = "transform 0.5s ease";
        }, 100);
      } else
        Y.style.transition = "none", Y.style.opacity = "0";
      a.animate || (Y.style.transition = "none", Y.style.opacity = "1");
    });
  }, [a.animate, a, H]), /* @__PURE__ */ r.createElement(Ht, { component: "Deviation Bar" }, /* @__PURE__ */ r.createElement(ve, { left: Number(a.xAxis.size) }, n.map((Y, R) => {
    const $ = Number(Y[S]), j = a.isLollipopChart ? C : Number(a.barHeight), q = Number(a.barSpace), X = Math.abs(t($) - k), ne = t($), de = $ > v ? k : ne, Ae = $ < v ? "left" : "right";
    let we = 0;
    we = R !== 0 ? (q + j + w) * R : we;
    const G = (q + j + w) * n.length;
    a.heights.horizontal = G;
    const ae = o(i($, "left"), `normal ${E[a.fontSize]}px sans-serif`) < X - 6, D = ne, ce = we + j / 2, le = ne, pe = we + j / 2, he = ne, Ee = we - j / 2, Ce = _(Ae), [ke, Se] = l[y.palette], ye = { left: ke, right: Se }, J = Vt.contrast("#000000", ye[Ae]) < 4.9 ? "#FFFFFF" : "#000000";
    let He = og(a.isLollipopChart, ae, N, J);
    const me = i($, "left"), Pe = a.runtime.yAxis.type === "date" ? u(c(n[R][a.runtime.originalXAxis.dataKey])) : n[R][a.runtime.originalXAxis.dataKey];
    let Le = a.runtime.yAxis.label ? `${a.runtime.yAxis.label}: ${Pe}` : Pe, je = a.runtime.xAxis.label ? `${a.runtime.xAxis.label}: ${me}` : me;
    const Ie = `<div>
          ${Le}<br />
          ${je}
            </div>`;
    return /* @__PURE__ */ r.createElement(ve, { key: `deviation-bar-${a.orientation}-${S}-${R}` }, /* @__PURE__ */ r.createElement(
      "foreignObject",
      {
        ref: (Xe) => {
          b.current[R] = Xe;
        },
        x: de,
        y: we,
        width: X,
        height: j,
        "data-tooltip-html": Ie,
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`
      },
      /* @__PURE__ */ r.createElement("div", { style: { width: X, height: j, border: `${w}px solid #333`, backgroundColor: ye[Ae], ...Ce } })
    ), a.yAxis.displayNumbersOnBar && /* @__PURE__ */ r.createElement(Re, { verticalAnchor: "middle", x: D, y: ce, ...He[Ae] }, i(Y[S], "left")), a.isLollipopChart && a.lollipopShape === "circle" && /* @__PURE__ */ r.createElement("circle", { cx: le, cy: pe, r: N / 2, fill: ye[Ae], style: { filter: "unset", opacity: 1 } }), a.isLollipopChart && a.lollipopShape === "square" && /* @__PURE__ */ r.createElement("rect", { x: he, y: Ee, width: N, height: N, fill: ye[Ae], style: { opacity: 1, filter: "unset" } }));
  }), W.showLabel && /* @__PURE__ */ r.createElement(Re, { fontWeight: "bold", dx: W.padding, verticalAnchor: "middle", x: W.x, y: W.y }, W.text), O && /* @__PURE__ */ r.createElement(Ye, { from: { x: k, y: 0 }, to: { x: k, y: e }, stroke: "#333", strokeWidth: 2 })), /* @__PURE__ */ r.createElement("foreignObject", { y: e / 2, ref: F }));
}
function og(e, t, n, a) {
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
const sg = ({ xScale: e, yScale: t, height: n, width: a, handleTooltipMouseOver: i, handleTooltipMouseOff: l }) => {
  var y;
  const { transformedData: o, rawData: s, config: c, seriesHighlight: u } = z.useContext(De), { xAxis: d, yAxis: h, legend: m, runtime: p } = c;
  return o && /* @__PURE__ */ r.createElement(Ht, { component: "ForecastingChart" }, /* @__PURE__ */ r.createElement(ve, { className: "forecasting-items", key: "forecasting-items-wrapper", left: Number(h.size) }, (y = p.forecastingSeriesKeys) == null ? void 0 : y.map((b, g) => !b || !b.stages ? !1 : b.stages.map((f, x) => {
    var T;
    const { behavior: E } = m, v = s.filter((O) => O[b.stageColumn] === f.key);
    let S = E === "highlight" && u.length > 0 && u.indexOf(f.key) === -1, A = E === "highlight" || u.length === 0 || u.indexOf(f.key) !== -1;
    return /* @__PURE__ */ r.createElement(ve, { className: `forecasting-areas-combo-${g}`, key: `forecasting-areas--stage-${f.key.replaceAll(" ", "-")}-${g}` }, (T = b.confidenceIntervals) == null ? void 0 : T.map((O, w) => {
      const C = Xa[f.color] || Nt[f.color] || !1, N = () => A && C[2] ? C[2] : "transparent", k = () => A && C[1] ? C[1] : "transparent";
      if (!(O.high === "" || O.low === ""))
        return /* @__PURE__ */ r.createElement(ve, { key: `forecasting-areas--stage-${f.key.replaceAll(" ", "-")}--group-${x}-${w}` }, /* @__PURE__ */ r.createElement(
          ip,
          {
            curve: Ia,
            data: v,
            fill: N(),
            opacity: S ? 0.1 : 0.5,
            x: (_) => e(Date.parse(_[d.dataKey])),
            y0: (_) => t(_[O.low]),
            y1: (_) => t(_[O.high])
          }
        ), w === 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(en, { data: v, x: (_) => Number(e(Date.parse(_[d.dataKey]))), y: (_) => Number(t(_[O.high])), curve: Ia, stroke: k(), strokeWidth: 1, strokeOpacity: 1 }), /* @__PURE__ */ r.createElement(en, { data: v, x: (_) => Number(e(Date.parse(_[d.dataKey]))), y: (_) => Number(t(_[O.low])), curve: Ia, stroke: k(), strokeWidth: 1, strokeOpacity: 1 })));
    }));
  })), /* @__PURE__ */ r.createElement(ve, { key: "tooltip-hover-section" }, /* @__PURE__ */ r.createElement(Dt, { key: "bars", width: Number(a), height: Number(n), fill: "transparent", fillOpacity: 0.05, onMouseMove: (b) => i(b, o), onMouseOut: l }))));
};
function qa(e = "") {
  return typeof e == "number" ? !Number.isNaN(e) : typeof e == "string" ? e !== null && e !== "" && /\d+\.?\d*/.test(e) : !1;
}
function zr(e, t) {
  const n = e.series.every(({ type: m }) => m === "Bar"), a = e.series.every(({ type: m }) => ["Line", "dashed-sm", "dashed-md", "dashed-lg"].includes(m)), i = (m) => (p) => m.reduce((y, b) => isNaN(Number(p[b])) ? y : y + Number(p[b]), 0), l = () => {
    let m = Math.max(...t.map((p) => Math.max(...e.runtime.seriesKeys.map((y) => qa(p[y]) ? Number(c(p[y])) : 0))));
    if ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && n) && e.visualizationSubType === "stacked") {
      const p = t.map(i(e.runtime.seriesKeys)).filter((y) => !isNaN(y));
      m = Math.max(...p);
    }
    if (e.visualizationSubType === "stacked" && e.visualizationType === "Area Chart") {
      const p = t.map(i(e.runtime.seriesKeys));
      m = Math.max(...p);
    }
    if ((e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.series && e.series.dataKey && (m = Math.max(...t.map((p) => qa(p[e.series.dataKey]) ? Number(c(p[e.series.dataKey])) : 0))), e.visualizationType === "Combo" && e.visualizationSubType === "stacked" && !n && e.runtime.barSeriesKeys && e.runtime.lineSeriesKeys) {
      const p = t.map(i(e.runtime.barSeriesKeys)), y = Math.max(...t.map((g) => Math.max(...e.runtime.lineSeriesKeys.map((f) => Number(c(g[f])))))), b = Math.max(...p);
      m = Math.max(b, y);
    }
    return m;
  }, o = () => {
    const m = Math.min(...t.map((p) => Math.min(...e.runtime.seriesKeys.map((y) => qa(p[y]) ? Number(c(p[y])) : 1 / 0))));
    return String(m);
  }, s = () => e.runtime.seriesKeys ? e.runtime.seriesKeys.some((m) => t.some((p) => p[m] >= 0)) : !1, c = (m) => m === null || m === "" ? "" : typeof m == "string" ? m.replace(/[,$]/g, "") : m, u = Number(l()), d = Number(o()), h = s();
  return { minValue: d, maxValue: u, existPositiveValue: h, isAllLine: a };
}
function Al({ config: e, yMax: t = 0, data: n = [], updateConfig: a }) {
  var m, p, y, b;
  const i = e.visualizationType === "Combo" && e.orientation === "vertical", l = e.series && e.series.filter((g) => g.axis === "Right").map((g) => g.dataKey);
  let { minValue: o } = zr(e, n);
  const s = (g) => {
    if (!g)
      return [0];
    let f = [];
    return g.map((x, E) => f = [...f, ...n.map((v) => Number(v[x]))]), f;
  };
  let c = Math.max.apply(null, s(l));
  e.yAxis.rightMax > c && (c = e.yAxis.rightMax), e.yAxis.rightMin < o && (o = e.yAxis.rightMin);
  const u = ((p = (m = e.runtime) == null ? void 0 : m.barSeriesKeys) == null ? void 0 : p.length) > 0, d = ((b = (y = e.runtime) == null ? void 0 : y.lineSeriesKeys) == null ? void 0 : b.length) > 0;
  return (u || d) && o > 0 && (o = 0), { yScaleRight: ht({
    domain: [o, c],
    range: [t, 0]
  }), hasRightAxis: i };
}
const cg = (e) => {
  const { preliminaryData: t, data: n, stroke: a, handleLineType: i, lineType: l, seriesKey: o } = e, s = t.filter((h) => h.seriesKey && h.column && h.value && h.type && h.style), c = (h) => s.find((m) => m.seriesKey === o && h[m.column] === m.value && m.type === "effect" && m.style !== "Open Circles");
  let u = [];
  const d = (h) => ({
    stroke: a,
    strokeWidth: 2,
    strokeDasharray: h
  });
  return n.forEach((h, m) => {
    let p = c(h), y = d(i(p ? p.style : l));
    u.push(y), p && m > 0 && (u[m - 1] = d(i(p.style)));
  }), u;
}, ug = (e, t, n) => {
  const a = e.filter((l) => l.style === "Open Circles" && l.type === "effect").map((l) => ({ column: l.column, value: l.value, seriesKey: l.seriesKey }));
  let i = [];
  return t.forEach((l) => {
    a.some((o) => l[o.column] === o.value && o.seriesKey === n) && i.push(l);
  }), i;
}, ii = (e) => {
  var E, v, S, A, T, O;
  const { config: t, d: n, displayArea: a, seriesKey: i, tooltipData: l, xScale: o, yScale: s, colorScale: c, parseDate: u, yScaleRight: d, data: h, circleData: m, dataIndex: p, mode: y } = e, { lineDatapointStyle: b } = t, g = (E = t == null ? void 0 : t.series.filter((w) => w.dataKey === i)) == null ? void 0 : E[0], f = (w, C, N, k, _) => {
    const W = N.runtime.seriesLabels || [];
    let F;
    return w ? F = C(W[k] || _) : F = "transparent", N.lineDatapointColor === "Lighter than Line" && F !== "transparent" && F && (F = Vt(F).brighten(1)), F;
  }, x = (w) => (t.xAxis.type === "categorical" ? o(w) : o(u(w))) + (o.bandwidth ? o.bandwidth() / 2 : 0);
  if (y === "ALWAYS_SHOW_POINTS") {
    if (b === "hidden")
      return /* @__PURE__ */ r.createElement(r.Fragment, null);
    if (b === "always show")
      return (m == null ? void 0 : m.some((C) => C[t.xAxis.dataKey] === n[t.xAxis.dataKey] && C[i] === n[i])) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement(
        "circle",
        {
          cx: x(n[t.xAxis.dataKey]),
          cy: g.axis === "Right" ? d(n[g.dataKey]) : s(n[g.dataKey]),
          r: 4.5,
          opacity: n[i] ? 1 : 0,
          fillOpacity: 1,
          fill: f(a, c, t, i, i),
          style: { filter: "unset", opacity: 1 }
        }
      );
  }
  if (y === "HOVER_POINTS" && b === "hover") {
    if (!l || !i || !l.data)
      return;
    let w = (S = (v = l == null ? void 0 : l.data) == null ? void 0 : v[0]) == null ? void 0 : S[1];
    if (!w)
      return;
    let C, N = l.data.filter((W) => W[0] === i), k = (A = N == null ? void 0 : N[0]) == null ? void 0 : A[0], _ = (T = N == null ? void 0 : N[0]) == null ? void 0 : T[2];
    return k ? (l == null || l.data.indexOf(k), C = (O = h == null ? void 0 : h.find((W) => W[t == null ? void 0 : t.xAxis.dataKey] === w)) == null ? void 0 : O[i], l == null ? void 0 : l.data.map((W, F) => (t.runtime.seriesLabelsAll.indexOf(w), isNaN(C) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : (m == null ? void 0 : m.some((H) => H[t.xAxis.dataKey] === w)) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement(
      "circle",
      {
        cx: x(w),
        cy: _ === "right" ? d(C) : s(C),
        r: 4.5,
        opacity: 1,
        fillOpacity: 1,
        fill: f(a, c, t, k, i),
        style: { filter: "unset", opacity: 1 },
        key: `line-chart-circle--${JSON.stringify(W)}--${F}`
      }
    )))) : void 0;
  }
  return y === "ISOLATED_POINTS" && y && ((C, N) => {
    const k = h[C], _ = h[C - 1], W = h[C + 1];
    if (C === 0 && !W[N] || C === h.length - 1 && !_[N] || C !== 0 && k[N] && !_[N] && !W[N])
      return !0;
  })(p, i) ? /* @__PURE__ */ r.createElement("circle", { cx: x(n[t.xAxis.dataKey]), cy: g.axis === "Right" ? d(n[g.dataKey]) : s(n[g.dataKey]), r: 5.3, strokeWidth: 2, stroke: c(t.runtime.seriesLabels[i]), fill: c(t.runtime.seriesLabels[i]) }) : null;
}, xs = (e) => {
  const {
    getXAxisData: t,
    getYAxisData: n,
    handleTooltipClick: a,
    handleTooltipMouseOff: i,
    handleTooltipMouseOver: l,
    tooltipData: o,
    xMax: s,
    xScale: c,
    yMax: u,
    yScale: d
  } = e, {
    colorScale: h,
    config: m,
    formatNumber: p,
    handleLineType: y,
    isNumber: b,
    parseDate: g,
    seriesHighlight: f,
    tableData: x,
    transformedData: E,
    updateConfig: v,
    rawData: S
  } = z.useContext(De), { yScaleRight: A } = Al({ config: m, yMax: u, data: E, updateConfig: v });
  if (!l)
    return;
  const { lineDatapointStyle: T, showLineSeriesLabels: O, legend: w } = m;
  return /* @__PURE__ */ r.createElement(Ht, { component: "LineChart" }, /* @__PURE__ */ r.createElement(ve, { left: m.runtime.yAxis.size ? parseInt(m.runtime.yAxis.size) : 66 }, " ", (m.runtime.lineSeriesKeys || m.runtime.seriesKeys).map((C, N) => {
    var Y;
    let k = m.series.filter((R) => R.dataKey === C)[0].type;
    const _ = m.series.filter((R) => R.dataKey === C), W = _[0].axis ? _[0].axis : "left";
    let F = w.behavior === "highlight" || f.length === 0 || f.indexOf(C) !== -1;
    const V = ug(m.preliminaryData, S, C);
    let H = cg({ preliminaryData: m.preliminaryData, data: x, stroke: h(m.runtime.seriesLabels[C]), handleLineType: y, lineType: k, seriesKey: C }), U = (R) => c(t(R)) + (c.bandwidth ? c.bandwidth() / 2 : 0);
    return /* @__PURE__ */ r.createElement(
      ve,
      {
        key: `series-${C}`,
        opacity: w.behavior === "highlight" && f.length > 0 && f.indexOf(C) === -1 ? 0.5 : 1,
        display: w.behavior === "highlight" || f.length === 0 && !w.dynamicLegend || f.indexOf(C) !== -1 ? "block" : "none"
      },
      E.map((R, $) => {
        const j = m.series.find(({ dataKey: Ae }) => Ae === C), { axis: q } = j, X = Object.keys(m.runtime.seriesLabels).length > 1, ne = q === "Right" ? "rightLabel" : "label";
        let de = m.runtime.yAxis[ne];
        return X || (de = m.isLegendValue ? m.runtime.seriesLabels[C] : de), R[C] !== void 0 && R[C] !== "" && R[C] !== null && b(R[C]) && /* @__PURE__ */ r.createElement(ve, { key: `series-${C}-point-${$}`, className: "checkwidth" }, /* @__PURE__ */ r.createElement(Dt, { key: "bars", width: Number(s), height: Number(u), fill: "transparent", fillOpacity: 0.05, onMouseMove: (Ae) => l(Ae, x), onMouseOut: i, onClick: (Ae) => a(Ae, E) }), /* @__PURE__ */ r.createElement(Re, { display: m.labels ? "block" : "none", x: U(R), y: W === "Right" ? A(n(R, C)) : d(n(R, C)), fill: "#000", textAnchor: "middle" }, p(R[C], "left")), (T === "hidden" || T === "always show") && /* @__PURE__ */ r.createElement(
          ii,
          {
            mode: "ALWAYS_SHOW_POINTS",
            dataIndex: $,
            circleData: V,
            data: E,
            d: R,
            config: m,
            seriesKey: C,
            displayArea: F,
            tooltipData: o,
            xScale: c,
            yScale: d,
            colorScale: h,
            parseDate: g,
            yScaleRight: A,
            seriesAxis: W,
            key: `line-circle--${$}`
          }
        ), /* @__PURE__ */ r.createElement(
          ii,
          {
            mode: "ISOLATED_POINTS",
            dataIndex: $,
            circleData: V,
            data: E,
            d: R,
            config: m,
            seriesKey: C,
            displayArea: F,
            tooltipData: o,
            xScale: c,
            yScale: d,
            colorScale: h,
            parseDate: g,
            yScaleRight: A,
            seriesAxis: W,
            key: `isolated-circle-${$}`
          }
        ));
      }),
      /* @__PURE__ */ r.createElement(r.Fragment, null, T === "hover" && /* @__PURE__ */ r.createElement(
        ii,
        {
          dataIndex: 0,
          mode: "HOVER_POINTS",
          circleData: V,
          data: E,
          config: m,
          seriesKey: C,
          displayArea: F,
          tooltipData: o,
          xScale: c,
          yScale: d,
          colorScale: h,
          parseDate: g,
          yScaleRight: A,
          seriesAxis: W
        }
      )),
      (Y = m == null ? void 0 : m.preliminaryData) != null && Y.some((R) => R.value && R.column) ? /* @__PURE__ */ r.createElement(
        Yc,
        {
          curve: Sr[_[0].lineType],
          segments: (m.xAxis.type === "date" && m.xAxis.sortDates ? E.sort((R, $) => {
            let j = t(R), q = t($);
            return j < q ? -1 : q < j ? 1 : 0;
          }) : E).map((R) => [R]),
          segmentation: "x",
          x: (R) => U(R),
          y: (R) => W === "Right" ? A(n(R, C)) : d(Number(n(R, C))),
          styles: H,
          defined: (R, $) => R[C] !== "" && R[C] !== null && R[C] !== void 0
        }
      ) : /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
        en,
        {
          curve: Sr[_[0].lineType],
          data: m.xAxis.type === "date" && m.xAxis.sortDates ? E.sort((R, $) => {
            let j = t(R), q = t($);
            return j < q ? -1 : q < j ? 1 : 0;
          }) : E,
          x: (R) => U(R),
          y: (R) => W === "Right" ? A(n(R, C)) : d(Number(n(R, C))),
          stroke: h(m.runtime.seriesLabels[C]),
          strokeWidth: 2,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: k ? y(k) : 0,
          defined: (R, $) => R[C] !== "" && R[C] !== null && R[C] !== void 0
        }
      )),
      V.map((R, $) => /* @__PURE__ */ r.createElement("circle", { key: $, cx: U(R), cy: d(Number(n(R, C))), r: 6, strokeWidth: 2, stroke: h ? h(m.runtime.seriesLabels[C]) : "#000", fill: "#fff" })),
      m.animate && /* @__PURE__ */ r.createElement(
        en,
        {
          className: "animation",
          curve: _.lineType,
          data: E,
          x: (R) => U(R),
          y: (R) => W === "Right" ? A(n(R, C)) : d(Number(n(R, C))),
          stroke: "#fff",
          strokeWidth: 3,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: k ? y(k) : 0,
          defined: (R, $) => R[C] !== "" && R[C] !== null && R[C] !== void 0
        }
      ),
      O && (m.runtime.lineSeriesKeys || m.runtime.seriesKeys).map((R) => {
        let $;
        for (let j = E.length - 1; j >= 0; j--)
          if (E[j][R]) {
            $ = E[j];
            break;
          }
        return $ ? /* @__PURE__ */ r.createElement("text", { x: U($) + 5, y: d(n($, R)), alignmentBaseline: "middle", fill: m.colorMatchLineSeriesLabels && h ? h(m.runtime.seriesLabels[R] || R) : "black" }, m.runtime.seriesLabels[R] || R) : /* @__PURE__ */ r.createElement(r.Fragment, null);
      })
    );
  }), m.legend.dynamicLegend && f.length === 0 && /* @__PURE__ */ r.createElement(Re, { x: s / 2, y: u / 2, fill: "black", textAnchor: "middle", color: "black" }, m.legend.dynamicLegendChartMessage)));
}, dg = (e) => {
  const { rawData: t, updateConfig: n } = z.useContext(De), { xScale: a, yScale: i, config: l, height: o, width: s, handleTooltipMouseOff: c, handleTooltipMouseOver: u } = e, { forestPlot: d } = l, h = l.xAxis.tickWidthMax + 10, [m, p] = z.useState(!1);
  z.useEffect(() => {
    try {
      const v = ["estimateField", "lower", "upper", "estimateRadius"], S = l, A = 10;
      for (let T = 0; T < A; T++)
        v.forEach((O) => {
          var w;
          l.forestPlot[O] && l.forestPlot[O] !== ((w = S.columns[l.forestPlot[`additionalColumn${T}`]]) == null ? void 0 : w.name) && (delete S.columns[`additionalColumn${T}`], S.columns[l.forestPlot[O]] = {}, S.columns[l.forestPlot[O]].dataKey = S.forestPlot[O], S.columns[l.forestPlot[O]].name = S.forestPlot[O], S.columns[l.forestPlot[O]].dataTable = !0, S.columns[l.forestPlot[O]].tooltips = !0, S.columns[l.forestPlot[O]].label = S.forestPlot[O]);
        });
      l.forestPlot.radius.scalingColumn && (S.columns[l.forestPlot.radius.scalingColumn] = {}, S.columns[l.forestPlot.radius.scalingColumn].dataKey = S.forestPlot.radius.scalingColumn, S.columns[l.forestPlot.radius.scalingColumn].name = S.forestPlot.radius.scalingColumn, S.columns[l.forestPlot.radius.scalingColumn].label = S.forestPlot.radius.scalingColumn, S.columns[l.forestPlot.radius.scalingColumn].dataTable = !0, S.columns[l.forestPlot.radius.scalingColumn].tooltips = !0), S.table.showVertical && (S.table.indexLabel = l.xAxis.dataKey), n(S);
    } catch (v) {
      console.log(v.message);
    }
  }, []), z.useEffect(() => {
    !m && l.forestPlot.type === "Logarithmic" && (n({
      ...l,
      dataFormat: {
        ...l.dataFormat,
        roundTo: 2
      }
    }), p(!0));
  }, [l.forestPlot.type]);
  const y = l.data.find((v) => v[l.xAxis.dataKey] === l.forestPlot.pooledResult.column), b = y ? [
    { x: a(y[l.forestPlot.lower]), y: o - Number(l.forestPlot.rowHeight) },
    { x: a(y[l.forestPlot.estimateField]), y: o - d.pooledResult.diamondHeight - Number(l.forestPlot.rowHeight) },
    { x: a(y[l.forestPlot.upper]), y: o - Number(l.forestPlot.rowHeight) },
    { x: a(y[l.forestPlot.estimateField]), y: o + d.pooledResult.diamondHeight - Number(l.forestPlot.rowHeight) },
    { x: a(y[l.forestPlot.lower]), y: o - Number(l.forestPlot.rowHeight) }
  ] : [], g = l.forestPlot.rowHeight, f = [
    { x: 0, y: g },
    { x: s, y: g }
  ], x = [
    { x: 0, y: o },
    { x: s, y: o }
  ], E = Object.entries(l.columns).map((v) => v[1]).filter((v) => v.forestPlot === !0);
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ve, { width: s }, d.title && /* @__PURE__ */ r.createElement(Re, { className: "forest-plot--title", x: d.type === "Linear" ? a(0) : a(1), y: 0, textAnchor: "middle", verticalAnchor: "start", fontSize: mn(l.fontSize), fill: "black" }, d.title), d.lineOfNoEffect.show && d.type === "Linear" && /* @__PURE__ */ r.createElement(Ye, { from: { x: a(0), y: 0 + g }, to: { x: a(0), y: o }, className: "forestplot__line-of-no-effect", stroke: d.regression.baseLineColor || "black" }), d.lineOfNoEffect.show && d.type === "Logarithmic" && /* @__PURE__ */ r.createElement(Ye, { from: { x: a(1), y: 0 + g }, to: { x: a(1), y: o }, className: "forestplot__line-of-no-effect", stroke: d.regression.baseLineColor || "black" }), t.map((v, S) => {
    const A = ht({
      domain: t.map((k) => k[d.radius.scalingColumn]),
      range: [d.radius.min, d.radius.max]
    }), T = d.radius.scalingColumn !== "" ? A(t[S][d.radius.scalingColumn]) : 4, O = d.colors.shape ? d.colors.shape : "black", w = d.colors.line ? d.colors.line : "black", C = 4;
    return v[l.xAxis.dataKey] === d.pooledResult.column ? /* @__PURE__ */ r.createElement(en, { data: b, x: (k) => k.x, y: (k) => k.y - mn(l.fontSize) / 2, stroke: "black", strokeWidth: 2, fill: "black", curve: xi }) : /* @__PURE__ */ r.createElement(ve, null, /* @__PURE__ */ r.createElement(
      "path",
      {
        stroke: w,
        strokeWidth: 1,
        className: "lower-ci",
        d: `
                    M${a(v[d.lower])} ${i(S) - Number(C)}
                    L${a(v[d.lower])} ${i(S) + Number(C)}
                `
      }
    ), /* @__PURE__ */ r.createElement(
      "path",
      {
        stroke: w,
        strokeWidth: 1,
        className: "upper-ci",
        d: `
                    M${a(v[d.upper])} ${i(S) - Number(C)}
                    L${a(v[d.upper])} ${i(S) + Number(C)}
                `
      }
    ), /* @__PURE__ */ r.createElement("line", { stroke: w, className: `line-${v[l.yAxis.dataKey]}`, key: S, x1: a(v[d.lower]), x2: a(v[d.upper]), y1: i(S), y2: i(S) }), d.shape === "circle" && /* @__PURE__ */ r.createElement(Ku, { className: "forest-plot--circle", cx: a(Number(v[d.estimateField])), cy: i(S), r: d.radius.scalingColumn !== "" ? A(t[S][d.radius.scalingColumn]) : 4, fill: O, style: { opacity: 1, filter: "unset" } }), d.shape === "square" && /* @__PURE__ */ r.createElement("rect", { className: "forest-plot--square", x: a(Number(v[d.estimateField])), y: i(S) - T / 2, width: T, height: T, fill: O, style: { opacity: 1, filter: "unset" } }), d.shape === "text" && /* @__PURE__ */ r.createElement(Re, { className: "forest-plot--text", x: a(Number(v[d.estimateField])), y: i(S), textAnchor: "middle", verticalAnchor: "middle", fontSize: mn(l.fontSize), fill: O }, v[d.estimateField]));
  }), b && d.regression.showDiamond && /* @__PURE__ */ r.createElement(en, { data: b, x: (v) => v.x, y: (v) => v.y, stroke: "black", strokeWidth: 2, fill: d.regression.baseLineColor, curve: xi }), d.regression.description && /* @__PURE__ */ r.createElement(Re, { x: 0 - Number(l.xAxis.size), width: s, y: o - l.forestPlot.rowHeight - Number(d.rowHeight) / 3, verticalAnchor: "start", textAnchor: "start", style: { fontWeight: "bold", fontSize: 12 } }, d.regression.description), /* @__PURE__ */ r.createElement(Dt, { key: "forest-plot-tooltip-area", className: "forest-plot-tooltip-area", width: s, height: o, fill: "transparent", fillOpacity: 0.5, onMouseMove: (v) => u(v, t), onMouseOut: c })), /* @__PURE__ */ r.createElement(Ye, { from: f[0], to: f[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__top-line" }), /* @__PURE__ */ r.createElement(Ye, { from: x[0], to: x[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__bottom-line" }), E.map((v) => t.map((S, A) => /* @__PURE__ */ r.createElement(Re, { className: `${S[v.name]}`, x: v.forestPlotAlignRight ? s : v.forestPlotStartingPoint, y: i(A), textAnchor: v.forestPlotAlignRight ? "end" : "start", verticalAnchor: "middle", fontSize: mn(l.fontSize), fill: "black" }, S[v.name]))), !d.hideDateCategoryCol && t.map((v, S) => /* @__PURE__ */ r.createElement(Re, { className: `${v[l.xAxis.dataKey]}`, x: 0, y: i(S), textAnchor: "start", verticalAnchor: "middle", fontSize: mn(l.fontSize), fill: "black" }, v[l.xAxis.dataKey])), !d.hideDateCategoryCol && l.xAxis.dataKey && /* @__PURE__ */ r.createElement(Re, { className: l.xAxis.dataKey, x: 0, y: 0, textAnchor: "start", verticalAnchor: "start", fontSize: mn(l.fontSize), fill: "black" }, l.xAxis.dataKey), E.map((v) => /* @__PURE__ */ r.createElement(Re, { className: `${v.label}`, x: v.forestPlotAlignRight ? s : v.forestPlotStartingPoint, y: 0, textAnchor: v.forestPlotAlignRight ? "end" : "start", verticalAnchor: "start", fontSize: mn(l.fontSize), fill: "black" }, v.label)), d.leftLabel && /* @__PURE__ */ r.createElement(Re, { className: "forest-plot__left-label", x: d.type === "Linear" ? a(0) - 25 : a(1) - 25, y: o + h, textAnchor: "end", verticalAnchor: "start" }, d.leftLabel), d.rightLabel && /* @__PURE__ */ r.createElement(Re, { className: "forest-plot__right-label", x: d.type === "Linear" ? a(0) + 25 : a(1) + 25, y: o + h, textAnchor: "start", verticalAnchor: "start" }, d.rightLabel));
}, mg = ({ width: e, height: t, originalWidth: n }) => {
  var v;
  const { config: a, colorScale: i, transformedData: l, formatNumber: o, seriesHighlight: s, getTextWidth: c } = z.useContext(De);
  if (!a || ((v = a == null ? void 0 : a.series) == null ? void 0 : v.length) < 2)
    return;
  const u = a.barHasBorder === "true" ? 1 : 0, d = e / 2, h = { small: 16, medium: 18, large: 20 }, m = 1.02, p = {
    parentKey: a.dataDescription.seriesKey,
    dataKey: a.series[0].dataKey,
    dataKeyLabel: a.runtime.seriesLabels[a.series[0].dataKey] || a.series[0].dataKey,
    color: i(a.runtime.seriesLabels[a.series[0].dataKey]),
    max: Math.max.apply(
      Math,
      l.map((S) => S[a.series[0].dataKey])
    ),
    labelColor: ""
  }, y = {
    parentKey: a.dataDescription.seriesKey,
    dataKey: a.series[1].dataKey,
    dataKeyLabel: a.runtime.seriesLabels[a.series[1].dataKey] || a.series[1].dataKey,
    color: i(a.runtime.seriesLabels[a.series[1].dataKey]),
    max: Math.max.apply(
      Math,
      l.map((S) => S[a.series[1].dataKey])
    ),
    labelColor: ""
  }, b = ht({
    domain: [0, Math.max(p.max * m, y.max * 1.1)],
    range: [0, d]
  });
  let g = "#000000";
  p.color && Vt.contrast(g, p.color) < 4.9 && (p.labelColor = "#FFFFFF"), y.color && Vt.contrast(g, y.color) < 4.9 && (y.labelColor = "#FFFFFF");
  const f = a.yAxis.label ? `${a.yAxis.label}: ` : "", x = (S) => `<p>
				${a.dataDescription.seriesKey}: ${p.dataKeyLabel}<br/>
				${a.xAxis.dataKey}: ${S[a.xAxis.dataKey]}<br/>
				${f}${o(S[p.dataKey], "left")}
			</p>`, E = (S) => `<p>
				${a.dataDescription.seriesKey}: ${y.dataKeyLabel}<br/>
				${a.xAxis.dataKey}: ${S[a.xAxis.dataKey]}<br/>
				${f}${o(S[y.dataKey], "left")}
			</p>`;
  return e > 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `
				#cdc-visualization__paired-bar-chart,
				 #cdc-visualization__paired-bar-chart > .visx-group {
					transform-origin: center
				}
				`), /* @__PURE__ */ r.createElement("svg", { id: "cdc-visualization__paired-bar-chart", width: n, height: t, viewBox: `0 0 ${e + Number(a.runtime.yAxis.size)} ${t}`, role: "img", tabIndex: 0 }, /* @__PURE__ */ r.createElement(ve, { top: 0, left: Number(a.xAxis.size) }, l.filter((S) => a.series[0].dataKey === p.dataKey).map((S, A) => {
    let T = a.legend.behavior === "highlight" && s.length > 0 && s.indexOf(a.series[0].dataKey) === -1, O = a.legend.behavior === "highlight" || s.length === 0 || s.indexOf(a.series[0].dataKey) !== -1, w = b(S[a.series[0].dataKey]), C = Number(a.barHeight) ? Number(a.barHeight) : 25, N = 0;
    N = A !== 0 ? (Number(a.barSpace) + C + u) * A : N;
    const k = (Number(a.barSpace) + C + u) * l.length;
    a.heights.horizontal = k;
    const W = c(o(S[p.dataKey], "left"), `normal ${h[a.fontSize]}px sans-serif`) < w - 5;
    return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ve, { key: `group-${p.dataKey}-${S[a.xAxis.dataKey]}`, className: "horizontal" }, /* @__PURE__ */ r.createElement(
      Dt,
      {
        id: `bar-${p.dataKey}-${S[a.dataDescription.xKey]}`,
        className: "bar group-1",
        key: `bar-${p.dataKey}-${S[a.dataDescription.xKey]}`,
        x: d - w,
        y: N,
        width: b(S[a.series[0].dataKey]),
        height: C,
        fill: p.color,
        "data-tooltip-html": x(S),
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`,
        stroke: "#333",
        strokeWidth: u,
        opacity: T ? 0.5 : 1,
        display: O ? "block" : "none"
      }
    ), a.yAxis.displayNumbersOnBar && O && /* @__PURE__ */ r.createElement(Re, { textAnchor: W ? "start" : "end", dx: W ? 5 : -5, verticalAnchor: "middle", x: d - w, y: N + a.barHeight / 2, fill: W ? p.labelColor : "#000" }, o(S[p.dataKey], "left"))));
  }), l.filter((S) => a.series[1].dataKey === y.dataKey).map((S, A) => {
    let T = b(S[a.series[1].dataKey]), O = a.legend.behavior === "highlight" && s.length > 0 && s.indexOf(a.series[1].dataKey) === -1, w = a.legend.behavior === "highlight" || s.length === 0 || s.indexOf(a.series[1].dataKey) !== -1, C = a.barHeight ? Number(a.barHeight) : 25, N = 0;
    N = A !== 0 ? (Number(a.barSpace) + C + u) * A : N;
    const k = (Number(a.barSpace) + C + u) * l.length;
    a.heights.horizontal = k;
    const W = c(o(S[y.dataKey], "left"), `normal ${h[a.fontSize]}px sans-serif`) < T - 5;
    return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `
                      .bar-${y.dataKey}-${S[a.xAxis.dataKey]} {
                          transform-origin: ${d}px ${N}px
                      }
							      `), /* @__PURE__ */ r.createElement(ve, { key: `group-${y.dataKey}-${S[a.dataDescription.xKey]}`, className: "horizontal" }, /* @__PURE__ */ r.createElement(
      Dt,
      {
        id: `bar-${y.dataKey}-${S[a.dataDescription.xKey]}`,
        className: "bar group-2",
        key: `bar-${y.dataKey}-${S[a.dataDescription.xKey]}`,
        x: d,
        y: N,
        width: b(S[a.series[1].dataKey]),
        height: C,
        fill: y.color,
        "data-tooltip-html": E(S),
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`,
        strokeWidth: u,
        stroke: "#333",
        opacity: O ? 0.5 : 1,
        display: w ? "block" : "none"
      }
    ), a.yAxis.displayNumbersOnBar && w && /* @__PURE__ */ r.createElement(Re, { textAnchor: W ? "end" : "start", dx: W ? -5 : 5, verticalAnchor: "middle", x: d + T, y: N + a.barHeight / 2, fill: W ? y.labelColor : "#000" }, o(S[y.dataKey], "left"))));
  }))));
}, Su = ({ config: e, minValue: t, maxValue: n, existPositiveValue: a, data: i, isAllLine: l }) => {
  let o = 0, s = 0, c = 0, u = 0;
  if (!i)
    return { min: o, max: s };
  const { visualizationType: d, series: h } = e, { max: m, min: p } = e.runtime.yAxis, y = a ? m >= n : m >= 0, b = e.useLogScale ? p >= 0 : p <= 0 && t >= 0 || p <= t && t < 0;
  o = p && b ? p : t, s = m && y ? m : Number.MIN_VALUE;
  const { lower: g, upper: f } = (e == null ? void 0 : e.confidenceKeys) || {};
  if (g && f && e.visualizationType === "Bar") {
    const x = o < 0 ? 1.1 : 0;
    s = Math.max(n, Math.max(...i.flatMap((E) => [E[f], E[g]])) * 1.15), o = Math.min(t, Math.min(...i.flatMap((E) => [E[f], E[g]])) * 1.15) * x;
  }
  if (e.series.filter((x) => (x == null ? void 0 : x.type) === "Forecasting")) {
    const {
      runtime: { forecastingSeriesKeys: x }
    } = e;
    if ((x == null ? void 0 : x.length) > 0) {
      let E = [];
      x.forEach((T) => {
        var O;
        (O = T.confidenceIntervals) == null || O.map((w) => {
          E.push(w.high), E.push(w.low);
        });
      });
      const v = i.map((T) => E.map((O) => T[O])), S = Math.max.apply(
        null,
        v.map((T) => T[0])
      ), A = Math.min.apply(
        null,
        v.map((T) => T[1])
      );
      S > s && (s = S), A < o && (o = A);
    }
  }
  if (d === "Combo")
    try {
      if (!i)
        throw new Error("COVE: missing data while getting min/max for combo chart.");
      let x = h.filter((S) => S.axis === "Left"), E = h.filter((S) => S.axis === "Right");
      const v = (S, A, T, O = "left") => {
        let w = 0;
        return (A.map((N) => N.dataKey) || []).forEach((N) => {
          let k = A.find((F) => F.dataKey === N), _ = S.map((F) => F[N]), W = Math.max.apply(null, _);
          e.visualizationSubType === "stacked" && O === "left" && k.type === "Bar" && (w += W), W > T && (T = W), T < w && (T = w);
        }), T;
      };
      c = v(i, x, c, "left"), u = v(i, E, u, "right"), c < m && (c = m);
    } catch (x) {
      console.error(x.message);
    }
  if ((d === "Bar" || d === "Combo" && !l) && o > 0 && (o = 0), (e.visualizationType === "Bar" || e.visualizationType === "Combo" && !l) && o < 0 && (o = o * 1.1), e.visualizationType === "Combo" && l && ((p == null || p === "") && o > 0 && (o = 0), p)) {
    const x = e.useLogScale ? p >= 0 && p < t : p < t;
    o = p && x ? p : t;
  }
  if (e.visualizationType === "Deviation Bar" && o > 0) {
    const x = Number(p) < Math.min(t, Number(e.xAxis.target));
    o = p && x ? p : 0;
  }
  if (e.visualizationType === "Line") {
    const x = e.useLogScale ? p >= 0 && p < t : p < t;
    o = p && x ? p : t;
  }
  if (s === Number.MIN_VALUE && (s = a ? n : 0), e.runtime.yAxis.paddingPercent) {
    let x = (s - o) * e.runtime.yAxis.paddingPercent;
    o -= x, s += x;
  }
  if (e.isLollipopChart && e.yAxis.displayNumbersOnBar) {
    const x = i.map((v) => v[e.series[0].dataKey]), E = Math.max(...x).toString().length;
    switch (!0) {
      case (E > 8 && E <= 12):
        s = s * 1.3;
        break;
      case (E > 4 && E <= 7):
        s = s * 1.1;
        break;
    }
  }
  return e.yAxis.enablePadding && (o < 0 ? (s *= 1 + e.yAxis.scalePadding * 2 / 100, o *= 1 + e.yAxis.scalePadding * 2 / 100) : s *= 1 + e.yAxis.scalePadding / 100), { min: o, max: s, leftMax: c, rightMax: u };
}, fg = (e) => {
  let { xAxisDataMapped: t, xMax: n, yMax: a, min: i, max: l, config: o, data: s } = e;
  const { rawData: c, dimensions: u } = z.useContext(De), [d, h] = u, m = o.runtime.barSeriesKeys || o.runtime.seriesKeys, p = o.runtime.xAxis.type, y = o.orientation === "horizontal", b = (C) => C[o.runtime.originalXAxis.dataKey], g = s.map((C) => b(C)), { visualizationType: f } = o;
  let x = null, E = null, v = null, S = null, A = null, T = null, O = null;
  const w = {
    TIME: "time",
    LOG: "log",
    POINT: "point",
    LINEAR: "linear",
    BAND: "band"
  };
  if (y && (x = hg({ min: i * 1.03, ...e }), x.type = o.useLogScale ? w.LOG : w.LINEAR, E = yg(p, t), E.rangeRound([0, a]), A = vs(m, [0, a])), y || (O = vs(g, [0, n], 0.5), x = li(t, [0, n], 1 - o.barThickness), E = pg(e), A = li(m, [0, x.bandwidth()], 0)), o.xAxis.type === "date" && o.xAxis.sortDates) {
    let C = Math.min(...t), N = Math.max(...t);
    C -= (o.xAxis.padding ? o.xAxis.padding * 0.01 : 0) * (N - C), N += (o.xAxis.padding ? o.xAxis.padding * 0.01 : 0) * (N - C), x = Nd({
      domain: [C, N],
      range: [0, n]
    }), O = x, x.type = w.LINEAR, A = li(m, [0, o.barThickness * n], 0);
  }
  if (o.visualizationType === "Deviation Bar") {
    const C = o.isLollipopChart ? 1.05 : 1.03;
    E = ci({
      domain: t,
      range: [0, a]
    }), x = ht({
      domain: [i * C, Math.max(Number(o.xAxis.target), l)],
      range: [0, n],
      round: !0,
      nice: !0
    }), x.type = w.LINEAR;
  }
  if (o.visualizationType === "Scatter Plot" && o.xAxis.type === "continuous" && (x = ht({
    domain: [0, Math.max.apply(null, x.domain())],
    range: [0, n]
  }), x.type = w.LINEAR), f === "Box Plot") {
    const C = [];
    if (o.boxplot.plots.map((W) => W.columnOutliers.map((F) => C.push(F))) && !o.boxplot.hideOutliers) {
      let W = Math.min(...C), F = Math.max(...C);
      W < i && (i = W), F > l && (l = F);
    }
    let k = Math.min(...o.boxplot.plots.map((W) => W.columnLowerBounds)), _ = Math.max(...o.boxplot.plots.map((W) => W.columnUpperBounds));
    k < i && (i = k), _ > l && (l = _), E = ht({
      range: [a, 0],
      round: !0,
      domain: [i, l]
    }), x = ci({
      range: [0, n],
      round: !0,
      domain: o.boxplot.categories,
      padding: 0.4
    }), x.type = w.BAND;
  }
  if (f === "Paired Bar") {
    let N = Math.max.apply(
      Math,
      s.map((_) => {
        var W;
        return _[(W = o.series[0]) == null ? void 0 : W.dataKey];
      })
    ), k = Math.max.apply(
      Math,
      s.map((_) => {
        var W;
        return _[(W = o.series[1]) == null ? void 0 : W.dataKey];
      })
    );
    S = ht({
      domain: [0, Math.max(N, k) * 1.02],
      range: [n / 2, 0]
    }), v = ht({
      domain: S.domain(),
      range: [n / 2, n],
      nice: !0
    });
  }
  if (f === "Forest Plot") {
    const C = () => o.forestPlot.regression.showDiamond || o.forestPlot.regression.description ? [0 + o.forestPlot.rowHeight * 2, a - o.forestPlot.rowHeight] : [0 + o.forestPlot.rowHeight * 2, a];
    E = ht({
      domain: [0, c.length],
      range: C()
    });
    const N = 5, k = Number(o.forestPlot.leftWidthOffset) / 100 * n, _ = Number(o.forestPlot.rightWidthOffset) / 100 * n, W = Number(o.forestPlot.rightWidthOffsetMobile) / 100 * n, F = Number(o.forestPlot.leftWidthOffsetMobile) / 100 * n;
    if (d > 480) {
      if (o.forestPlot.type === "Linear" && (x = ht({
        domain: [Math.min(...s.map((V) => parseFloat(V[o.forestPlot.lower]))) - N, Math.max(...s.map((V) => parseFloat(V[o.forestPlot.upper]))) + N],
        range: [k, u[0] - _]
      }), x.type = w.LINEAR), o.forestPlot.type === "Logarithmic") {
        let V = Math.max(...s.map((U) => parseFloat(U[o.forestPlot.upper]))), H = Math.min(...s.map((U) => parseFloat(U[o.forestPlot.lower])));
        x = Za({
          domain: [H, V],
          range: [k, n - _],
          nice: !0
        }), x.type = w.LOG;
      }
    } else if (o.forestPlot.type === "Linear" && (x = ht({
      domain: [Math.min(...s.map((V) => parseFloat(V[o.forestPlot.lower]))) - N, Math.max(...s.map((V) => parseFloat(V[o.forestPlot.upper]))) + N],
      range: [F, n - W],
      type: w.LINEAR
    })), o.forestPlot.type === "Logarithmic") {
      let V = Math.max(...s.map((U) => parseFloat(U[o.forestPlot.upper]))), H = Math.min(...s.map((U) => parseFloat(U[o.forestPlot.lower])));
      x = Za({
        domain: [H, V],
        range: [k, n - _],
        nice: !0,
        base: V > 1 ? 10 : 2,
        round: !1,
        type: w.LOG
      });
    }
  }
  return { xScale: x, yScale: E, seriesScale: A, g1xScale: S, g2xScale: v, xScaleNoPadding: T, xScaleBrush: O };
}, hg = ({ min: e, max: t, xMax: n, config: a }) => (e = a.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e, (a.useLogScale ? Za : ht)({
  domain: [e, t],
  range: [0, n],
  nice: a.useLogScale,
  zero: a.useLogScale,
  type: a.useLogScale ? "log" : "linear"
})), pg = ({ min: e, max: t, yMax: n, config: a, leftMax: i }) => {
  e = a.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e;
  const l = a.useLogScale ? Za : ht;
  return a.visualizationType === "Combo" && (t = i), l({
    domain: [e, t],
    range: [n, 0],
    nice: a.useLogScale,
    zero: a.useLogScale
  });
}, yg = (e, t) => e === "date" ? ht({
  domain: [Math.min(...t), Math.max(...t)]
}) : zn({ domain: t, padding: 0.5 }), vs = (e, t, n = 0) => zn({
  domain: e,
  range: t,
  padding: n,
  type: "point"
}), li = (e, t, n = 0) => ci({
  domain: e,
  range: t,
  padding: n,
  type: "band"
});
function gg(e) {
  return { hasTopAxis: e.visualizationType === "Bar" || e.visualizationType === "Combo" || e.visualizationType === "Line" };
}
const Sa = () => {
  const { config: e } = z.useContext(De), { visualizationType: t, series: n, orientation: a, visualizationSubType: i } = e;
  return {
    enabledChartTypes: [
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
      "Spark Line"
    ],
    headerColors: ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"],
    visCanAnimate: () => !["Area Chart", "Scatter Plot", "Box Plot", "Forest Plot", "Spark Line"].includes(t),
    visHasAnchors: () => {
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
    },
    visHasBarBorders: () => ["Box Plot", "Scatter Plot", "Pie"].includes(t) ? !1 : n == null ? void 0 : n.some((ae) => ae.type === "Bar" || ae.type === "Paired Bar" || ae.type === "Deviation Bar"),
    visHasDataCutoff: () => {
      switch (t) {
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
    },
    visHasLabelOnData: () => !["Area Chart", "Box Plot", "Pie", "Scatter Plot", "Forest Plot", "Spark Line"].includes(t),
    visHasDataSuppression: () => {
      if ((t === "Bar" || "Combo") && i === "regular")
        return !0;
    },
    visHasLegend: () => {
      switch (t) {
        case "Box Plot":
          return !1;
        case "Forest Plot":
          return !1;
        case "Spark Line":
          return !1;
        default:
          return !0;
      }
    },
    visHasBrushChart: () => ["Line", "Bar", "Area Chart", "Combo"].includes(t) && a === "vertical",
    visHasNumbersOnBars: () => t === "Forest Plot" ? !1 : e.orientation === "horizontal" && (e.yAxis.labelPlacement === "Below Bar" || e.yAxis.labelPlacement === "On Date/Category Axis" || e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar"),
    visSupportsBarSpace: () => ["Forest Plot"].includes(t) ? !1 : a === "horizontal" || t === "Paired Bar",
    visSupportsBarThickness: () => !["Forest Plot"].includes(t),
    visSupportsChartHeight: () => !["Spark Line"].includes(t),
    visSupportsDateCategoryAxis: () => !["Forest Plot"].includes(t),
    visSupportsDateCategoryAxisLabel: () => !["Forest Plot", "Spark Line"].includes(t),
    visSupportsDateCategoryAxisLine: () => !["Forest Plot", "Spark Line"].includes(t),
    visSupportsDateCategoryAxisTicks: () => !["Forest Plot", "Spark Line"].includes(t),
    visSupportsDateCategoryHeight: () => !["Spark Line"].includes(t),
    visSupportsDateCategoryNumTicks: () => !["Spark Line"].includes(t),
    visSupportsDateCategoryTickRotation: () => !["Spark Line"].includes(t),
    visSupportsDateCategoryAxisPadding: () => e.xAxis.type === "date" && e.xAxis.sortDates,
    visSupportsFilters: () => !["Forest Plot"].includes(t),
    visSupportsFootnotes: () => !["Spark Line"].includes(t),
    visSupportsLeftValueAxis: () => !["Spark Line"].includes(t),
    visSupportsNonSequentialPallete: () => !["Paired Bar", "Deviation Bar", "Forest Plot", "Forecasting"].includes(t),
    visSupportsRankByValue: () => !["Spark Line"].includes(t),
    visSupportsRegions: () => !["Forest Plot", "Pie", "Paired Bar", "Spark Line"].includes(t),
    visSupportsResponsiveTicks: () => !["Spark Line"].includes(t),
    visSupportsReverseColorPalette: () => !["Forest Plot", "Paired Bar", "Deviation Bar"].includes(t),
    visSupportsSequentialPallete: () => !["Paired Bar", "Deviation Bar", "Forest Plot", "Forecasting"].includes(t),
    visSupportsSuperTitle: () => !["Spark Line"].includes(t),
    visSupportsTooltipLines: () => !!["Combo", "Forecasting", "Area Chart", "Line", "Bar"].includes(t),
    visSupportsTooltipOpacity: () => !["Spark Line"].includes(t),
    visSupportsValueAxisGridLines: () => {
      const K = ["Forest Plot"];
      return !(a === "horizontal" || K.includes(t));
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
var Sl = {};
const xg = /* @__PURE__ */ Qi(Hp), vg = /* @__PURE__ */ Qi(Qp);
var Tl = {};
Tl.__esModule = !0;
Tl.default = bg;
var Va = z;
function bg(e) {
  var t = (0, Va.useState)(e), n = t[0], a = t[1], i = (0, Va.useRef)(null), l = (0, Va.useCallback)(function(o, s) {
    i.current = s || null, a(o);
  }, [a]);
  return (0, Va.useLayoutEffect)(function() {
    i.current && (i.current(n), i.current = null);
  }, [n]), [n, l];
}
var kl = {}, wl = {};
wl.__esModule = !0;
wl.default = Eg;
function Eg(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var Cl = {};
Cl.__esModule = !0;
Cl.default = Tg;
function Ag(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = Sg(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var a = 0;
    return function() {
      return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sg(e, t) {
  if (e) {
    if (typeof e == "string")
      return bs(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return bs(e, t);
  }
}
function bs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function Tg(e, t) {
  for (var n = e, a = 1 / 0, i = Ag(t), l; !(l = i()).done; ) {
    var o = l.value, s = Math.sqrt(Math.pow(o.x - e.x, 2) + Math.pow(o.y - e.y, 2));
    s < a && (a = s, n = {
      x: o.x,
      y: o.y
    });
  }
  return n;
}
kl.__esModule = !0;
kl.default = wg;
var Es = Tu(wl), kg = Tu(Cl);
function Tu(e) {
  return e && e.__esModule ? e : { default: e };
}
function wg(e, t, n) {
  var a, i, l, o;
  return n === void 0 && (n = {}), t.length > 0 ? (0, kg.default)(e, t) : {
    x: (0, Es.default)(e.x, (a = n.xMin) != null ? a : -1 / 0, (i = n.xMax) != null ? i : 1 / 0),
    y: (0, Es.default)(e.y, (l = n.yMin) != null ? l : -1 / 0, (o = n.yMax) != null ? o : 1 / 0)
  };
}
var Pl = {};
Pl.__esModule = !0;
Pl.default = Ng;
var Cg = z;
function Pg(e, t, n) {
  if (n === void 0 && (n = 1), !e)
    return [];
  for (var a = [], i = e.getTotalLength(), l = 0; l <= i; l += n) {
    var o = e.getPointAtLength(l), s = o.matrixTransform(t);
    a.push(s);
  }
  return a;
}
function Ng(e) {
  var t = (0, Cg.useMemo)(function() {
    if (!e)
      return [];
    var n = e.getCTM() || new DOMMatrix();
    return Pg(e, n);
  }, [e == null ? void 0 : e.getTotalLength()]);
  return t;
}
Sl.__esModule = !0;
Sl.default = _g;
var gn = z, $n = xg, As = vg, Lg = Nl(Tl), Ss = Nl(kl), Og = Nl(Pl);
function Nl(e) {
  return e && e.__esModule ? e : { default: e };
}
function Yt() {
  return Yt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Yt.apply(this, arguments);
}
function _g(e) {
  var t = e === void 0 ? {} : e, n = t.resetOnStart, a = n === void 0 ? !1 : n, i = t.snapToPointer, l = i === void 0 ? !0 : i, o = t.onDragEnd, s = t.onDragMove, c = t.onDragStart, u = t.x, d = t.y, h = t.dx, m = t.dy, p = t.isDragging, y = t.restrict, b = y === void 0 ? {} : y, g = t.restrictToPath, f = (0, gn.useRef)({
    x: u,
    y: d,
    dx: h,
    dy: m
  }), x = (0, Lg.default)({
    x: u,
    y: d,
    dx: h ?? 0,
    dy: m ?? 0,
    isDragging: !1
  }), E = x[0], v = x[1], S = (0, gn.useState)(new $n.Point({
    x: 0,
    y: 0
  })), A = S[0], T = S[1];
  (0, gn.useEffect)(function() {
    (f.current.x !== u || f.current.y !== d || f.current.dx !== h || f.current.dy !== m) && (f.current = {
      x: u,
      y: d,
      dx: h,
      dy: m
    }, v(function(k) {
      return Yt({}, k, {
        x: u,
        y: d,
        dx: h ?? 0,
        dy: m ?? 0
      });
    }));
  }), (0, gn.useEffect)(function() {
    p !== void 0 && E.isDragging !== p && v(function(k) {
      return Yt({}, k, {
        isDragging: p
      });
    });
  }, [E.isDragging, p, v]);
  var O = (0, Og.default)(g), w = (0, gn.useCallback)(function(k) {
    k.persist(), v(function(_) {
      var W = _.x, F = W === void 0 ? 0 : W, V = _.y, H = V === void 0 ? 0 : V, U = _.dx, Y = _.dy, R = new $n.Point({
        x: (F || 0) + U,
        y: (H || 0) + Y
      }), $ = (0, As.localPoint)(k) || new $n.Point({
        x: 0,
        y: 0
      }), j = l ? $ : R, q = (0, Ss.default)(j, O, b);
      return T((0, $n.subtractPoints)(R, $)), {
        isDragging: !0,
        dx: a ? 0 : _.dx,
        dy: a ? 0 : _.dy,
        x: a ? q.x : q.x - _.dx,
        y: a ? q.y : q.y - _.dy
      };
    }, c && function(_) {
      c(Yt({}, _, {
        event: k
      }));
    });
  }, [c, a, b, O, v, l]), C = (0, gn.useCallback)(function(k) {
    k.persist(), v(function(_) {
      if (!_.isDragging)
        return _;
      var W = _.x, F = W === void 0 ? 0 : W, V = _.y, H = V === void 0 ? 0 : V, U = (0, As.localPoint)(k) || new $n.Point({
        x: 0,
        y: 0
      }), Y = l ? U : (0, $n.sumPoints)(U, A), R = (0, Ss.default)(Y, O, b);
      return Yt({}, _, {
        dx: R.x - F,
        dy: R.y - H
      });
    }, s && function(_) {
      _.isDragging && s(Yt({}, _, {
        event: k
      }));
    });
  }, [v, s, l, A, O, b]), N = (0, gn.useCallback)(function(k) {
    k.persist(), v(function(_) {
      return Yt({}, _, {
        isDragging: !1
      });
    }, o && function(_) {
      o(Yt({}, _, {
        event: k
      }));
    });
  }, [o, v]);
  return Yt({}, E, {
    dragEnd: N,
    dragMove: C,
    dragStart: w
  });
}
var Rr = ku, Jn = Ll(Os), oi = Ll(z), Dg = Ll(Sl);
function Ll(e) {
  return e && e.__esModule ? e : { default: e };
}
function ku(e) {
  var t = e.captureDragArea, n = t === void 0 ? !0 : t, a = e.snapToPointer, i = a === void 0 ? !0 : a, l = e.children, o = e.dx, s = e.dy, c = e.height, u = e.onDragEnd, d = e.onDragMove, h = e.onDragStart, m = e.resetOnStart, p = e.width, y = e.x, b = e.y, g = e.isDragging, f = e.restrict, x = e.restrictToPath, E = (0, Dg.default)({
    resetOnStart: m,
    snapToPointer: i,
    onDragEnd: u,
    onDragMove: d,
    onDragStart: h,
    x: y,
    y: b,
    dx: o,
    dy: s,
    isDragging: g,
    restrict: f,
    restrictToPath: x
  });
  return /* @__PURE__ */ oi.default.createElement(oi.default.Fragment, null, E.isDragging && n && /* @__PURE__ */ oi.default.createElement("rect", {
    width: p,
    height: c,
    onPointerDown: E.dragStart,
    onPointerMove: E.dragMove,
    onPointerUp: E.dragEnd,
    fill: "transparent"
  }), l(E));
}
ku.propTypes = {
  children: Jn.default.func.isRequired,
  width: Jn.default.number.isRequired,
  height: Jn.default.number.isRequired,
  captureDragArea: Jn.default.bool,
  isDragging: Jn.default.bool
};
function kr(e, t) {
  if ("invert" in e && typeof e.invert < "u")
    return e.invert(t).valueOf();
  var n = e.range(), a = n[0], i = n[1], l = 0, o = "step" in e && typeof e.step < "u" ? e.step() : 1, s = o * (i - a) / Math.abs(i - a);
  if (s > 0)
    for (; t > a + s * (l + 1); )
      l += 1;
  else
    for (; t < a + s * (l + 1); )
      l += 1;
  return l;
}
function Ts(e, t, n, a) {
  var i, l = kr(e, t + (t < n ? -a : a)), o = kr(e, n + (n < t ? -a : a)), s = Math.min(l, o), c = Math.max(l, o);
  if ("invert" in e && typeof e.invert < "u")
    i = {
      start: s,
      end: c
    };
  else {
    for (var u = [], d = e.domain(), h = s; h <= c; h += 1)
      u.push(d[h]);
    i = {
      values: u
    };
  }
  return i;
}
function Ol(e) {
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
function $t() {
  return $t = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, $t.apply(this, arguments);
}
function Mg(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Hi(e, t);
}
function Hi(e, t) {
  return Hi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, i) {
    return a.__proto__ = i, a;
  }, Hi(e, t);
}
var wu = /* @__PURE__ */ function(e) {
  Mg(t, e);
  function t() {
    for (var a, i = arguments.length, l = new Array(i), o = 0; o < i; o++)
      l[o] = arguments[o];
    return a = e.call.apply(e, [this].concat(l)) || this, a.handleDragStart = function(s) {
      var c = a.props, u = c.onBrushHandleChange, d = c.type, h = c.onBrushStart;
      u && u(d, Ol(s.event)), h && h(s);
    }, a.handleDragMove = function(s) {
      var c = a.props, u = c.updateBrush, d = c.type, h = c.isControlled;
      !s.isDragging || h || u(function(m) {
        var p = m.start, y = m.end, b = 0, g = Math.max(p.x, y.x), f = Math.min(p.x, y.x), x = Math.max(p.y, y.y), E = Math.min(p.y, y.y);
        switch (d) {
          case "right":
            return b = g + s.dx, $t({}, m, {
              activeHandle: d,
              extent: $t({}, m.extent, {
                x0: Math.max(Math.min(b, p.x), m.bounds.x0),
                x1: Math.min(Math.max(b, p.x), m.bounds.x1)
              })
            });
          case "left":
            return b = f + s.dx, $t({}, m, {
              activeHandle: d,
              extent: $t({}, m.extent, {
                x0: Math.min(b, y.x),
                x1: Math.max(b, y.x)
              })
            });
          case "bottom":
            return b = x + s.dy, $t({}, m, {
              activeHandle: d,
              extent: $t({}, m.extent, {
                y0: Math.min(b, p.y),
                y1: Math.max(b, p.y)
              })
            });
          case "top":
            return b = E + s.dy, $t({}, m, {
              activeHandle: d,
              extent: $t({}, m.extent, {
                y0: Math.min(b, y.y),
                y1: Math.max(b, y.y)
              })
            });
          default:
            return m;
        }
      });
    }, a.handleDragEnd = function() {
      var s = a.props, c = s.updateBrush, u = s.onBrushEnd, d = s.onBrushHandleChange, h = s.isControlled;
      h || c(function(m) {
        var p = m.start, y = m.end, b = m.extent;
        p.x = Math.min(b.x0, b.x1), p.y = Math.min(b.y0, b.y0), y.x = Math.max(b.x0, b.x1), y.y = Math.max(b.y0, b.y1);
        var g = $t({}, m, {
          start: p,
          end: y,
          activeHandle: null,
          isBrushing: !1,
          extent: {
            x0: Math.min(p.x, y.x),
            x1: Math.max(p.x, y.x),
            y0: Math.min(p.y, y.y),
            y1: Math.max(p.y, y.y)
          }
        });
        return u && u(g), g;
      }), d && d();
    }, a;
  }
  var n = t.prototype;
  return n.render = function() {
    var i = this, l = this.props, o = l.stageWidth, s = l.stageHeight, c = l.brush, u = l.type, d = l.handle, h = l.isControlled, m = l.isDragInProgress, p = l.renderBrushHandle, y = d.x, b = d.y, g = d.width, f = d.height, x = u === "right" || u === "left" ? "ew-resize" : "ns-resize";
    return /* @__PURE__ */ r.createElement(Rr, {
      width: o,
      height: s,
      onDragStart: this.handleDragStart,
      onDragMove: this.handleDragMove,
      onDragEnd: this.handleDragEnd,
      resetOnStart: !0,
      isDragging: h ? m : void 0
    }, function(E) {
      var v = E.dragStart, S = E.dragEnd, A = E.dragMove, T = E.isDragging;
      return /* @__PURE__ */ r.createElement("g", null, T && /* @__PURE__ */ r.createElement("rect", {
        fill: "transparent",
        width: o,
        height: s,
        style: {
          cursor: x
        },
        onPointerMove: A,
        onPointerUp: h ? void 0 : S,
        onPointerLeave: h ? void 0 : S
      }), !p && /* @__PURE__ */ r.createElement("rect", {
        x: y,
        y: b,
        width: g,
        height: f,
        fill: "transparent",
        className: "visx-brush-handle-" + u,
        onPointerDown: v,
        onPointerMove: A,
        onPointerUp: h ? void 0 : S,
        style: {
          cursor: x,
          pointerEvents: c.activeHandle || c.isBrushing ? "none" : "all"
        }
      }), p && /* @__PURE__ */ r.createElement("g", {
        onPointerDown: v,
        onPointerMove: A,
        onPointerUp: h ? void 0 : S
      }, p($t({}, i.props.handle, {
        height: s,
        className: "visx-brush-handle-" + u,
        isBrushActive: c.extent.x0 !== -1 && c.extent.x1 !== -1
      }))));
    });
  }, t;
}(r.Component);
wu.propTypes = {
  stageWidth: B.number.isRequired,
  stageHeight: B.number.isRequired,
  updateBrush: B.func.isRequired,
  onBrushStart: B.func,
  onBrushEnd: B.func,
  handle: B.shape({
    x: B.number.isRequired,
    y: B.number.isRequired,
    width: B.number.isRequired,
    height: B.number.isRequired
  }).isRequired,
  isControlled: B.bool,
  isDragInProgress: B.bool,
  onBrushHandleChange: B.func,
  renderBrushHandle: B.func
};
function _t() {
  return _t = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, _t.apply(this, arguments);
}
function $g(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Wi(e, t);
}
function Wi(e, t) {
  return Wi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, i) {
    return a.__proto__ = i, a;
  }, Wi(e, t);
}
var _l = /* @__PURE__ */ function(e) {
  $g(t, e);
  function t() {
    for (var a, i = arguments.length, l = new Array(i), o = 0; o < i; o++)
      l[o] = arguments[o];
    return a = e.call.apply(e, [this].concat(l)) || this, a.cornerDragMove = function(s) {
      var c = a.props, u = c.updateBrush, d = c.type;
      s.isDragging && u(function(h) {
        var m = h.start, p = h.end, y = Math.max(m.x, p.x), b = Math.min(m.x, p.x), g = Math.max(m.y, p.y), f = Math.min(m.y, p.y), x = 0, E = 0;
        switch (d) {
          case "topRight":
            return x = y + s.dx, E = f + s.dy, _t({}, h, {
              activeHandle: d,
              extent: _t({}, h.extent, {
                x0: Math.max(Math.min(x, m.x), h.bounds.x0),
                x1: Math.min(Math.max(x, m.x), h.bounds.x1),
                y0: Math.max(Math.min(E, p.y), h.bounds.y0),
                y1: Math.min(Math.max(E, p.y), h.bounds.y1)
              })
            });
          case "topLeft":
            return x = b + s.dx, E = f + s.dy, _t({}, h, {
              activeHandle: d,
              extent: _t({}, h.extent, {
                x0: Math.max(Math.min(x, p.x), h.bounds.x0),
                x1: Math.min(Math.max(x, p.x), h.bounds.x1),
                y0: Math.max(Math.min(E, p.y), h.bounds.y0),
                y1: Math.min(Math.max(E, p.y), h.bounds.y1)
              })
            });
          case "bottomLeft":
            return x = b + s.dx, E = g + s.dy, _t({}, h, {
              activeHandle: d,
              extent: _t({}, h.extent, {
                x0: Math.max(Math.min(x, p.x), h.bounds.x0),
                x1: Math.min(Math.max(x, p.x), h.bounds.x1),
                y0: Math.max(Math.min(E, m.y), h.bounds.y0),
                y1: Math.min(Math.max(E, m.y), h.bounds.y1)
              })
            });
          case "bottomRight":
            return x = y + s.dx, E = g + s.dy, _t({}, h, {
              activeHandle: d,
              extent: _t({}, h.extent, {
                x0: Math.max(Math.min(x, m.x), h.bounds.x0),
                x1: Math.min(Math.max(x, m.x), h.bounds.x1),
                y0: Math.max(Math.min(E, m.y), h.bounds.y0),
                y1: Math.min(Math.max(E, m.y), h.bounds.y1)
              })
            });
          default:
            return h;
        }
      });
    }, a.cornerDragEnd = function() {
      var s = a.props, c = s.updateBrush, u = s.onBrushEnd;
      c(function(d) {
        var h = d.start, m = d.end, p = d.extent;
        h.x = Math.min(p.x0, p.x1), h.y = Math.min(p.y0, p.y0), m.x = Math.max(p.x0, p.x1), m.y = Math.max(p.y0, p.y1);
        var y = _t({}, d, {
          start: h,
          end: m,
          activeHandle: null,
          domain: {
            x0: Math.min(h.x, m.x),
            x1: Math.max(h.x, m.x),
            y0: Math.min(h.y, m.y),
            y1: Math.max(h.y, m.y)
          }
        });
        return u && u(y), y;
      });
    }, a;
  }
  var n = t.prototype;
  return n.render = function() {
    var i = this.props, l = i.type, o = i.brush, s = i.stageWidth, c = i.stageHeight, u = i.style, d = i.corner, h = (u == null ? void 0 : u.cursor) || (l === "topLeft" || l === "bottomRight" ? "nwse-resize" : "nesw-resize"), m = o.activeHandle || o.isBrushing ? "none" : "all";
    return /* @__PURE__ */ r.createElement(Rr, {
      width: s,
      height: c,
      onDragMove: this.cornerDragMove,
      onDragEnd: this.cornerDragEnd,
      resetOnStart: !0
    }, function(p) {
      var y = p.dragMove, b = p.dragEnd, g = p.dragStart, f = p.isDragging;
      return /* @__PURE__ */ r.createElement("g", null, f && /* @__PURE__ */ r.createElement("rect", {
        fill: "transparent",
        width: s,
        height: c,
        style: {
          cursor: h
        },
        onPointerMove: y,
        onPointerUp: b
      }), /* @__PURE__ */ r.createElement("rect", _t({
        fill: "transparent",
        onPointerDown: g,
        onPointerMove: y,
        onPointerUp: b,
        className: "visx-brush-corner-" + l,
        style: _t({
          cursor: h,
          pointerEvents: m
        }, u)
      }, d)));
    });
  }, t;
}(r.Component);
_l.propTypes = {
  stageWidth: B.number.isRequired,
  stageHeight: B.number.isRequired,
  updateBrush: B.func.isRequired,
  onBrushEnd: B.func,
  corner: B.shape({
    x: B.number.isRequired,
    y: B.number.isRequired,
    width: B.number.isRequired,
    height: B.number.isRequired
  }).isRequired
};
_l.defaultProps = {
  style: {}
};
function ln() {
  return ln = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ln.apply(this, arguments);
}
function zg(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ki(e, t);
}
function Ki(e, t) {
  return Ki = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, i) {
    return a.__proto__ = i, a;
  }, Ki(e, t);
}
var Rg = {
  cursor: "move"
}, Dl = /* @__PURE__ */ function(e) {
  zg(t, e);
  function t() {
    for (var a, i = arguments.length, l = new Array(i), o = 0; o < i; o++)
      l[o] = arguments[o];
    return a = e.call.apply(e, [this].concat(l)) || this, a.selectionDragStart = function(s) {
      var c = a.props, u = c.onMoveSelectionChange, d = c.onBrushStart;
      u && u("move", Ol(s.event)), d && d(s);
    }, a.selectionDragMove = function(s) {
      var c = a.props, u = c.updateBrush, d = c.isControlled;
      d || u(function(h) {
        var m = h.start, p = m.x, y = m.y, b = h.end, g = b.x, f = b.y, x = s.dx > 0 ? Math.min(s.dx, h.bounds.x1 - g) : Math.max(s.dx, h.bounds.x0 - p), E = s.dy > 0 ? Math.min(s.dy, h.bounds.y1 - f) : Math.max(s.dy, h.bounds.y0 - y);
        return ln({}, h, {
          isBrushing: !0,
          extent: ln({}, h.extent, {
            x0: p + x,
            x1: g + x,
            y0: y + E,
            y1: f + E
          })
        });
      });
    }, a.selectionDragEnd = function() {
      var s = a.props, c = s.updateBrush, u = s.onBrushEnd, d = s.onMoveSelectionChange, h = s.isControlled;
      h || c(function(m) {
        var p = ln({}, m, {
          isBrushing: !1,
          start: ln({}, m.start, {
            x: Math.min(m.extent.x0, m.extent.x1),
            y: Math.min(m.extent.y0, m.extent.y1)
          }),
          end: ln({}, m.end, {
            x: Math.max(m.extent.x0, m.extent.x1),
            y: Math.max(m.extent.y0, m.extent.y1)
          })
        });
        return u && u(p), p;
      }), d && d();
    }, a;
  }
  var n = t.prototype;
  return n.render = function() {
    var i = this.props, l = i.width, o = i.height, s = i.stageWidth, c = i.stageHeight, u = i.brush, d = i.disableDraggingSelection, h = i.onMouseLeave, m = i.onMouseMove, p = i.onMouseUp, y = i.onClick, b = i.selectedBoxStyle, g = i.isControlled, f = i.isDragInProgress;
    return /* @__PURE__ */ r.createElement(Rr, {
      width: l,
      height: o,
      resetOnStart: !0,
      onDragStart: this.selectionDragStart,
      onDragMove: this.selectionDragMove,
      onDragEnd: this.selectionDragEnd,
      isDragging: g ? f : void 0
    }, function(x) {
      var E = x.isDragging, v = x.dragStart, S = x.dragEnd, A = x.dragMove;
      return /* @__PURE__ */ r.createElement("g", null, E && /* @__PURE__ */ r.createElement("rect", {
        width: s,
        height: c,
        fill: "transparent",
        onPointerUp: g ? void 0 : S,
        onPointerMove: A,
        onPointerLeave: g ? void 0 : S,
        style: Rg
      }), /* @__PURE__ */ r.createElement("rect", ln({
        x: Math.min(u.extent.x0, u.extent.x1),
        y: Math.min(u.extent.y0, u.extent.y1),
        width: l,
        height: o,
        className: "visx-brush-selection",
        onPointerDown: d ? void 0 : v,
        onPointerLeave: function(O) {
          h && h(O);
        },
        onPointerMove: function(O) {
          A(O), m && m(O);
        },
        onPointerUp: function(O) {
          g || S(O), p && p(O);
        },
        onClick: function(O) {
          y && y(O);
        },
        style: {
          pointerEvents: u.isBrushing || u.activeHandle ? "none" : "all",
          cursor: d ? void 0 : "move"
        }
      }, b)));
    });
  }, t;
}(r.Component);
Dl.propTypes = {
  width: B.number.isRequired,
  height: B.number.isRequired,
  stageWidth: B.number.isRequired,
  stageHeight: B.number.isRequired,
  updateBrush: B.func.isRequired,
  onMoveSelectionChange: B.func,
  onBrushStart: B.func,
  onBrushEnd: B.func,
  disableDraggingSelection: B.bool.isRequired,
  onMouseLeave: B.func,
  onMouseMove: B.func,
  onMouseUp: B.func,
  onClick: B.func,
  isControlled: B.bool,
  isDragInProgress: B.bool
};
Dl.defaultProps = {
  onMouseLeave: null,
  onMouseUp: null,
  onMouseMove: null,
  onClick: null
};
function Ii() {
  return Ii = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ii.apply(this, arguments);
}
function ji(e) {
  return /* @__PURE__ */ r.createElement(Dt, Ii({
    className: "visx-brush-overlay",
    fill: "transparent",
    x: 0,
    y: 0
  }, e));
}
ji.propTypes = {
  width: B.number.isRequired,
  height: B.number.isRequired,
  onClick: B.func,
  onDoubleClick: B.func,
  onPointerDown: B.func,
  onPointerLeave: B.func,
  onPointerMove: B.func,
  onPointerUp: B.func
};
function kt() {
  return kt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, kt.apply(this, arguments);
}
function Fg(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, qi(e, t);
}
function qi(e, t) {
  return qi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, i) {
    return a.__proto__ = i, a;
  }, qi(e, t);
}
var Ml = /* @__PURE__ */ function(e) {
  Fg(t, e);
  function t(a) {
    var i;
    i = e.call(this, a) || this, i.mouseUpTime = 0, i.mouseDownTime = 0, i.getIdleState = function() {
      var s = i.props, c = s.width, u = s.height;
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
          y1: u
        },
        isBrushing: !1,
        brushPageOffset: void 0,
        activeHandle: null,
        brushingType: void 0
      };
    }, i.handleWindowPointerUp = function() {
      var s = i.props, c = s.useWindowMoveEvents, u = s.onBrushEnd, d = s.resetOnEnd, h = i.state.brushingType;
      c && h && i.updateBrush(function(m) {
        var p = m.start, y = m.end, b = m.extent;
        p.x = Math.min(b.x0, b.x1), p.y = Math.min(b.y0, b.y0), y.x = Math.max(b.x0, b.x1), y.y = Math.max(b.y0, b.y1);
        var g = kt({}, m, {
          activeHandle: null,
          isBrushing: !1,
          brushingType: void 0
        });
        return u && u(g), d && (g = kt({}, g, i.getIdleState())), g;
      });
    }, i.handleWindowPointerMove = function(s) {
      var c = i.props.useWindowMoveEvents, u = i.state, d = u.brushingType, h = u.isBrushing, m = u.brushPageOffset, p = u.start;
      if (!(!c || !h)) {
        var y = s.pageX - ((m == null ? void 0 : m.pageX) || 0), b = s.pageY - ((m == null ? void 0 : m.pageY) || 0);
        ["left", "right", "top", "bottom"].includes(d ?? "") && i.updateBrush(function(g) {
          var f = g.start, x = f.x, E = f.y, v = g.end, S = v.x, A = v.y;
          return kt({}, g, {
            isBrushing: !0,
            extent: kt({}, g.extent, i.getExtent({
              x: d === "left" ? Math.min(Math.max(x + y, g.bounds.x0), g.bounds.x1) : x,
              y: d === "top" ? Math.min(Math.max(E + b, g.bounds.y0), g.bounds.y1) : E
            }, {
              x: d === "right" ? Math.min(Math.max(S + y, g.bounds.x0), g.bounds.x1) : S,
              y: d === "bottom" ? Math.min(Math.max(A + b, g.bounds.y0), g.bounds.y1) : A
            }))
          });
        }), d === "move" && i.updateBrush(function(g) {
          var f = g.start, x = f.x, E = f.y, v = g.end, S = v.x, A = v.y, T = y > 0 ? Math.min(y, g.bounds.x1 - S) : Math.max(y, g.bounds.x0 - x), O = b > 0 ? Math.min(b, g.bounds.y1 - A) : Math.max(b, g.bounds.y0 - E);
          return kt({}, g, {
            isBrushing: !0,
            extent: kt({}, g.extent, {
              x0: x + T,
              y0: E + O,
              x1: S + T,
              y1: A + O
            })
          });
        }), d === "select" && i.updateBrush(function(g) {
          var f = g.start, x = f.x, E = f.y, v = {
            x: Math.min(Math.max(x + y, g.bounds.x0), g.bounds.x1),
            y: Math.min(Math.max(E + b, g.bounds.y0), g.bounds.y1)
          }, S = i.getExtent(p, v), A = kt({}, g, {
            end: v,
            extent: S
          });
          return A;
        });
      }
    }, i.getExtent = function(s, c) {
      var u = i.props, d = u.brushDirection, h = u.width, m = u.height, p = d === "vertical" ? 0 : Math.min(s.x || 0, c.x || 0), y = d === "vertical" ? h : Math.max(s.x || 0, c.x || 0), b = d === "horizontal" ? 0 : Math.min(s.y || 0, c.y || 0), g = d === "horizontal" ? m : Math.max(s.y || 0, c.y || 0);
      return {
        x0: p,
        x1: y,
        y0: b,
        y1: g
      };
    }, i.handleDragStart = function(s) {
      var c = i.props, u = c.onBrushStart, d = c.left, h = c.top, m = c.inheritedMargin, p = c.useWindowMoveEvents, y = m != null && m.left ? m.left : 0, b = m != null && m.top ? m.top : 0, g = {
        x: (s.x || 0) + s.dx - d - y,
        y: (s.y || 0) + s.dy - h - b
      }, f = kt({}, g);
      u && u(g), i.updateBrush(function(x) {
        return kt({}, x, {
          start: g,
          end: f,
          extent: {
            x0: -1,
            x1: -1,
            y0: -1,
            y1: -1
          },
          isBrushing: !0,
          brushingType: "select",
          brushPageOffset: p ? Ol(s.event) : void 0
        });
      });
    }, i.handleBrushStart = function(s) {
      var c = i.props, u = c.onBrushStart, d = c.left, h = c.top, m = c.inheritedMargin;
      if (u) {
        var p = m != null && m.left ? m.left : 0, y = m != null && m.top ? m.top : 0, b = {
          x: (s.x || 0) + s.dx - d - p,
          y: (s.y || 0) + s.dy - h - y
        };
        u(b);
      }
    }, i.handleDragMove = function(s) {
      var c = i.props, u = c.left, d = c.top, h = c.inheritedMargin, m = c.useWindowMoveEvents;
      if (!(!s.isDragging || m)) {
        var p = (h == null ? void 0 : h.left) || 0, y = (h == null ? void 0 : h.top) || 0, b = {
          x: (s.x || 0) + s.dx - u - p,
          y: (s.y || 0) + s.dy - d - y
        };
        i.updateBrush(function(g) {
          var f = g.start, x = i.getExtent(f, b);
          return kt({}, g, {
            end: b,
            extent: x
          });
        });
      }
    }, i.handleDragEnd = function() {
      var s = i.props, c = s.onBrushEnd, u = s.resetOnEnd, d = s.useWindowMoveEvents;
      d || i.updateBrush(function(h) {
        var m = h.extent, p = kt({}, h, {
          start: {
            x: m.x0,
            y: m.y0
          },
          end: {
            x: m.x1,
            y: m.y1
          },
          isBrushing: !1,
          brushingType: void 0,
          activeHandle: null
        });
        return c && c(p), u && (p = kt({}, p, i.getIdleState())), p;
      });
    }, i.getBrushWidth = function() {
      var s = i.state.extent, c = s.x0, u = s.x1;
      return Math.max(Math.max(c, u) - Math.min(c, u), 0);
    }, i.getBrushHeight = function() {
      var s = i.state.extent, c = s.y1, u = s.y0;
      return Math.max(Math.max(u, c) - Math.min(u, c), 0);
    }, i.handles = function() {
      var s = i.props.handleSize, c = i.state.extent, u = c.x0, d = c.x1, h = c.y0, m = c.y1, p = s / 2, y = i.getBrushWidth(), b = i.getBrushHeight();
      return {
        top: {
          x: u - p,
          y: h - p,
          height: s,
          width: y + s
        },
        bottom: {
          x: u - p,
          y: m - p,
          height: s,
          width: y + s
        },
        right: {
          x: d - p,
          y: h - p,
          height: b + s,
          width: s
        },
        left: {
          x: u - p,
          y: h - p,
          height: b + s,
          width: s
        }
      };
    }, i.corners = function() {
      var s = i.props.handleSize, c = i.state.extent, u = c.x0, d = c.x1, h = c.y0, m = c.y1, p = s / 2, y = s, b = s;
      return {
        topLeft: {
          x: Math.min(u, d) - p,
          y: Math.min(h, m) - p,
          width: y,
          height: b
        },
        topRight: {
          x: Math.max(u, d) - p,
          y: Math.min(h, m) - p,
          width: y,
          height: b
        },
        bottomLeft: {
          x: Math.min(u, d) - p,
          y: Math.max(h, m) - p,
          width: y,
          height: b
        },
        bottomRight: {
          x: Math.max(u, d) - p,
          y: Math.max(h, m) - p,
          width: y,
          height: b
        }
      };
    }, i.updateBrush = function(s) {
      var c = i.props.onChange;
      i.setState(s, function() {
        c && c(i.state);
      });
    }, i.reset = function() {
      return i.updateBrush(function() {
        return i.getIdleState();
      });
    }, i.handleBrushingTypeChange = function(s, c) {
      i.updateBrush(function(u) {
        var d = kt({}, u, {
          brushingType: s,
          isBrushing: s !== void 0
        });
        return (c || s === void 0) && (d.brushPageOffset = c), d;
      });
    };
    var l = a.initialBrushPosition, o = l ? i.getExtent(l.start, l.end) : {
      x0: -1,
      x1: -1,
      y0: -1,
      y1: -1
    };
    return i.state = {
      start: {
        x: Math.max(0, o.x0),
        y: Math.max(0, o.y0)
      },
      end: {
        x: Math.max(0, o.x1),
        y: Math.max(0, o.y1)
      },
      extent: o,
      bounds: {
        x0: 0,
        x1: i.props.width,
        y0: 0,
        y1: i.props.height
      },
      isBrushing: !1,
      brushingType: void 0,
      activeHandle: null
    }, i;
  }
  var n = t.prototype;
  return n.componentDidUpdate = function(i) {
    var l = this;
    (this.props.width !== i.width || this.props.height !== i.height) && this.setState(function(o) {
      var s = o.start, c = o.end, u = o.extent;
      if (!(u.x0 === -1 && u.x1 === -1 && u.y0 === -1 && u.y1 === -1)) {
        var d = l.props.width / i.width, h = l.props.height / i.height;
        s = {
          x: d * u.x0,
          y: h * u.y0
        }, c = {
          x: d * u.x1,
          y: h * u.y1
        }, u = l.getExtent(s, c);
      }
      return {
        start: s,
        end: c,
        extent: u,
        bounds: {
          x0: 0,
          x1: l.props.width,
          y0: 0,
          y1: l.props.height
        }
      };
    });
  }, n.componentDidMount = function() {
    this.props.useWindowMoveEvents && (window.addEventListener("mouseup", this.handleWindowPointerUp), window.addEventListener("mousemove", this.handleWindowPointerMove));
  }, n.componentWillUnmount = function() {
    this.props.useWindowMoveEvents && (window.removeEventListener("mouseup", this.handleWindowPointerUp), window.removeEventListener("mousemove", this.handleWindowPointerMove));
  }, n.render = function() {
    var i = this, l = this.state, o = l.start, s = l.end, c = this.props, u = c.top, d = c.left, h = c.width, m = c.height, p = c.onMouseLeave, y = c.onMouseUp, b = c.onMouseMove, g = c.onBrushEnd, f = c.onClick, x = c.resizeTriggerAreas, E = c.selectedBoxStyle, v = c.disableDraggingSelection, S = c.disableDraggingOverlay, A = c.clickSensitivity, T = c.useWindowMoveEvents, O = c.renderBrushHandle, w = this.state.brushingType, C = this.handles(), N = this.corners(), k = this.getBrushWidth(), _ = this.getBrushHeight(), W = new Set(x);
    return /* @__PURE__ */ r.createElement(ve, {
      className: "visx-brush",
      top: u,
      left: d
    }, S ? /* @__PURE__ */ r.createElement(ji, {
      width: h,
      height: m,
      onClick: function(V) {
        var H = i.mouseUpTime - i.mouseDownTime;
        f && H < A && f(V);
      },
      style: {
        cursor: "default"
      }
    }) : /* @__PURE__ */ r.createElement(Rr, {
      width: h,
      height: m,
      resetOnStart: !0,
      onDragStart: this.handleDragStart,
      onDragMove: this.handleDragMove,
      onDragEnd: this.handleDragEnd,
      isDragging: T ? w === "select" : void 0
    }, function(F) {
      var V = F.dragStart, H = F.isDragging, U = F.dragMove, Y = F.dragEnd;
      return /* @__PURE__ */ r.createElement(ji, {
        width: h,
        height: m,
        onDoubleClick: function() {
          return i.reset();
        },
        onClick: function($) {
          var j = i.mouseUpTime - i.mouseDownTime;
          f && j < A && f($);
        },
        onPointerDown: function($) {
          i.mouseDownTime = Date.now(), V($);
        },
        onPointerLeave: function($) {
          p && p($);
        },
        onPointerMove: function($) {
          !H && b && b($), H && U($);
        },
        onPointerUp: function($) {
          i.mouseUpTime = Date.now(), y && y($), Y($);
        },
        style: {
          cursor: "crosshair"
        }
      });
    }), o && s && /* @__PURE__ */ r.createElement(Dl, {
      updateBrush: this.updateBrush,
      width: k,
      height: _,
      stageWidth: h,
      stageHeight: m,
      brush: this.state,
      disableDraggingSelection: v,
      onBrushEnd: g,
      onBrushStart: this.handleBrushStart,
      onMouseLeave: p,
      onMouseMove: b,
      onMouseUp: y,
      onMoveSelectionChange: this.handleBrushingTypeChange,
      onClick: f,
      selectedBoxStyle: E,
      isControlled: T,
      isDragInProgress: T ? w === "move" : void 0
    }), o && s && Object.keys(C).filter(function(F) {
      return W.has(F);
    }).map(function(F) {
      var V = C[F];
      return V && /* @__PURE__ */ r.createElement(wu, {
        key: "handle-" + F,
        type: F,
        handle: V,
        stageWidth: h,
        stageHeight: m,
        updateBrush: i.updateBrush,
        brush: i.state,
        onBrushStart: i.handleBrushStart,
        onBrushEnd: g,
        isControlled: T,
        isDragInProgress: T ? w === F : void 0,
        onBrushHandleChange: i.handleBrushingTypeChange,
        renderBrushHandle: O
      });
    }), o && s && Object.keys(N).filter(function(F) {
      return W.has(F);
    }).map(function(F) {
      var V = N[F];
      return V && /* @__PURE__ */ r.createElement(_l, {
        key: "corner-" + F,
        type: F,
        brush: i.state,
        updateBrush: i.updateBrush,
        stageWidth: h,
        stageHeight: m,
        corner: V,
        onBrushEnd: g
      });
    }));
  }, t;
}(r.Component);
Ml.propTypes = {
  brushDirection: B.oneOf(["horizontal", "vertical", "both"]),
  width: B.number.isRequired,
  height: B.number.isRequired,
  left: B.number.isRequired,
  top: B.number.isRequired,
  onChange: B.func,
  handleSize: B.number,
  resizeTriggerAreas: B.array,
  onBrushStart: B.func,
  onBrushEnd: B.func,
  onMouseLeave: B.func,
  onMouseUp: B.func,
  onMouseMove: B.func,
  onClick: B.func,
  clickSensitivity: B.number,
  disableDraggingSelection: B.bool,
  disableDraggingOverlay: B.bool,
  resetOnEnd: B.bool,
  useWindowMoveEvents: B.bool,
  renderBrushHandle: B.func
};
Ml.defaultProps = {
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
function Bg(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ui(e, t);
}
function Ui(e, t) {
  return Ui = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, i) {
    return a.__proto__ = i, a;
  }, Ui(e, t);
}
var ks = 2, ws = "steelblue", $l = /* @__PURE__ */ function(e) {
  Bg(t, e);
  function t() {
    for (var a, i = arguments.length, l = new Array(i), o = 0; o < i; o++)
      l[o] = arguments[o];
    return a = e.call.apply(e, [this].concat(l)) || this, a.handleChange = function(s) {
      var c = a.props.onChange;
      if (c) {
        var u = s.extent.x0;
        if (typeof u > "u" || u < 0) {
          c(null);
          return;
        }
        var d = a.convertRangeToDomain(s);
        c(d);
      }
    }, a.handleBrushStart = function(s) {
      var c = a.props.onBrushStart;
      if (c) {
        var u = s.x, d = s.y, h = a.props, m = h.xScale, p = h.yScale, y = kr(m, u), b = kr(p, d);
        c({
          x: "invert" in m && typeof m.invert < "u" ? y : m.domain()[y],
          y: "invert" in p && typeof p.invert < "u" ? b : p.domain()[b]
        });
      }
    }, a.handleBrushEnd = function(s) {
      var c = a.props.onBrushEnd;
      if (c) {
        var u = s.extent.x0;
        if (typeof u > "u" || u < 0) {
          c(null);
          return;
        }
        var d = a.convertRangeToDomain(s);
        c(d);
      }
    }, a;
  }
  var n = t.prototype;
  return n.convertRangeToDomain = function(i) {
    var l = this.props, o = l.xScale, s = l.yScale, c = i.extent, u = c.x0, d = c.x1, h = c.y0, m = c.y1, p = Ts(o, u || 0, d || 0, ks), y = Ts(s, h || 0, m || 0, ks), b = {
      x0: p.start || 0,
      x1: p.end || 0,
      xValues: p.values,
      y0: y.start || 0,
      y1: y.end || 0,
      yValues: y.values
    };
    return b;
  }, n.render = function() {
    var i = this.props, l = i.xScale, o = i.yScale, s = i.height, c = i.width, u = i.margin, d = i.brushDirection, h = i.initialBrushPosition, m = i.innerRef, p = i.resizeTriggerAreas, y = i.brushRegion, b = i.yAxisOrientation, g = i.xAxisOrientation, f = i.selectedBoxStyle, x = i.disableDraggingSelection, E = i.disableDraggingOverlay, v = i.resetOnEnd, S = i.onMouseLeave, A = i.onMouseMove, T = i.onClick, O = i.handleSize, w = i.useWindowMoveEvents, C = i.renderBrushHandle;
    if (!l || !o)
      return null;
    var N, k, _, W, F = u != null && u.left ? u.left : 0, V = u != null && u.top ? u.top : 0, H = u != null && u.right ? u.right : 0, U = u != null && u.bottom ? u.bottom : 0;
    return y === "chart" ? (_ = 0, W = 0, N = c, k = s) : y === "yAxis" ? (W = 0, k = s, b === "right" ? (_ = c, N = H) : (_ = -F, N = F)) : (_ = 0, N = c, g === "bottom" ? (W = s, k = U) : (W = -V, k = V)), /* @__PURE__ */ r.createElement(Ml, {
      width: N,
      height: k,
      left: _,
      top: W,
      brushDirection: d,
      disableDraggingSelection: x,
      disableDraggingOverlay: E,
      handleSize: O,
      inheritedMargin: u,
      initialBrushPosition: h,
      ref: m,
      resetOnEnd: v,
      resizeTriggerAreas: p,
      selectedBoxStyle: f,
      onBrushEnd: this.handleBrushEnd,
      onBrushStart: this.handleBrushStart,
      onChange: this.handleChange,
      onClick: T,
      onMouseLeave: S,
      onMouseMove: A,
      useWindowMoveEvents: w,
      renderBrushHandle: C
    });
  }, t;
}(z.Component);
$l.propTypes = {
  height: B.number,
  width: B.number,
  onChange: B.func,
  onBrushEnd: B.func,
  brushDirection: B.oneOf(["vertical", "horizontal", "both"]),
  resizeTriggerAreas: B.array,
  brushRegion: B.oneOf(["xAxis", "yAxis", "chart"]),
  yAxisOrientation: B.oneOf(["left", "right"]),
  xAxisOrientation: B.oneOf(["top", "bottom"]),
  disableDraggingSelection: B.bool,
  disableDraggingOverlay: B.bool,
  resetOnEnd: B.bool,
  handleSize: B.number,
  useWindowMoveEvents: B.bool,
  renderBrushHandle: B.func
};
$l.defaultProps = {
  xScale: null,
  yScale: null,
  onChange: null,
  height: 0,
  width: 0,
  selectedBoxStyle: {
    fill: ws,
    fillOpacity: 0.2,
    stroke: ws,
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
const Vg = $l, Hg = (e) => {
  const { transformedData: t, config: n, parseDate: a, formatDate: i, updateConfig: l } = z.useContext(De), { fontSize: o } = Ea(), [s, c] = z.useState([...t]), u = z.useRef(null), d = 15, [h, m] = z.useState({
    startPosition: 0,
    endPosition: 0,
    startValue: "",
    endValue: ""
  }), p = {
    start: { x: 0 },
    end: { x: e.xMax }
  }, y = {
    fill: "#ddd",
    stroke: "blue",
    fillOpacity: 0.8,
    strokeOpacity: 0,
    rx: d
  }, b = (f) => {
    var O;
    if (!f)
      return;
    const { xValues: x } = f, E = (O = n.xAxis) == null ? void 0 : O.dataKey, v = t.filter((w) => x.includes(w[E])), S = x.slice().reverse().find((w) => w !== void 0), A = x.find((w) => w !== void 0), T = (w) => n.runtime.xAxis.type === "date" ? i(a(w)) : w;
    m((w) => {
      var C, N;
      return {
        ...w,
        startPosition: (C = u.current) == null ? void 0 : C.state.start.x,
        endPosition: (N = u.current) == null ? void 0 : N.state.end.x,
        endValue: T(S),
        startValue: T(A)
      };
    }), c(v);
  };
  z.useEffect(() => {
    l({
      ...n,
      brush: {
        ...n.brush,
        data: s
      }
    });
  }, [s]), z.useEffect(() => {
    n.brush.active || c(t);
  }, [n.brush.active]);
  const g = () => {
    const f = Number(n.xAxis.tickRotation) > 0 ? Number(n.xAxis.tickRotation) : 0;
    let x = 0;
    const E = 20;
    return n.xAxis.label || (!n.isResponsiveTicks && f && (x = Number(f + n.xAxis.tickWidthMax) / 1.6), !n.isResponsiveTicks && !f && (x = Number(n.xAxis.labelOffset) - E), n.isResponsiveTicks && n.dynamicMarginTop && (x = Number(n.xAxis.labelOffset + n.xAxis.tickWidthMax / 1.6)), n.isResponsiveTicks && !n.dynamicMarginTop && (x = Number(n.xAxis.labelOffset - E))), n.xAxis.label && (!n.isResponsiveTicks && f && (x = Number(n.xAxis.tickWidthMax + f)), !n.isResponsiveTicks && !f && (x = n.xAxis.labelOffset + E), n.isResponsiveTicks && !f && (x = Number(n.dynamicMarginTop ? n.dynamicMarginTop : n.xAxis.labelOffset) + E)), x;
  };
  if (["Line", "Bar", "Area Chart", "Combo"].includes(n.visualizationType))
    return /* @__PURE__ */ r.createElement(ve, { display: n.brush.active ? "block" : "none", top: Number(e.yMax) + g(), left: Number(n.runtime.yAxis.size), pointerEvents: "fill" }, /* @__PURE__ */ r.createElement("rect", { fill: "#eee", width: e.xMax, height: n.brush.height, rx: d }), /* @__PURE__ */ r.createElement(
      Vg,
      {
        renderBrushHandle: (f) => {
          var x;
          return /* @__PURE__ */ r.createElement(Wg, { textProps: h, fontSize: o[n.fontSize], ...f, isBrushing: (x = u.current) == null ? void 0 : x.state.isBrushing });
        },
        innerRef: u,
        useWindowMoveEvents: !0,
        selectedBoxStyle: y,
        xScale: e.xScaleBrush,
        yScale: e.yScale,
        width: e.xMax,
        resizeTriggerAreas: ["left", "right"],
        height: n.brush.height,
        handleSize: 8,
        brushDirection: "horizontal",
        initialBrushPosition: p,
        onChange: b
      }
    ));
}, Wg = (e) => {
  const { x: t, isBrushActive: n, isBrushing: a, className: i, textProps: l } = e, o = 8;
  if (!n)
    return null;
  const s = i.includes("left"), c = s ? "scale(-1, 1)" : "translate(0,0)", u = s ? "end" : "start";
  return /* @__PURE__ */ r.createElement(ve, { left: t + o / 2, top: -2 }, /* @__PURE__ */ r.createElement(Re, { pointerEvents: "visiblePainted", dominantBaseline: "hanging", x: 0, verticalAnchor: "start", textAnchor: u, fontSize: e.fontSize / 1.4, dy: 10, y: 15 }, s ? l.startValue : l.endValue), /* @__PURE__ */ r.createElement("path", { cursor: "ew-resize", d: "M0.5,10A6,6 0 0 1 6.5,16V14A6,6 0 0 1 0.5,20ZM2.5,18V12M4.5,18V12", fill: a ? "#297EF1" : "#666", strokeWidth: "1", transform: c }));
}, Ut = (e) => {
  var Ge, bt, Et, tt, Ve;
  const {
    isEditor: t,
    isDashboard: n,
    computeMarginBottom: a,
    transformedData: i,
    dimensions: l,
    config: o,
    parseDate: s,
    formatDate: c,
    currentViewport: u,
    formatNumber: d,
    handleChartAriaLabels: h,
    updateConfig: m,
    handleLineType: p,
    rawData: y,
    capitalize: b,
    setSharedFilter: g,
    setSharedFilterValue: f,
    getTextWidth: x,
    isDebug: E
  } = z.useContext(De), { visualizationType: v, visualizationSubType: S, orientation: A, xAxis: T, yAxis: O, runtime: w, debugSvg: C } = o;
  let [N] = l;
  o && o.legend && !o.legend.hide && o.legend.position !== "bottom" && ["lg", "md"].includes(u) && (N = N * 0.73);
  const { horizontal: k } = o.heights, _ = A === "horizontal" || o.visualizationType === "Forest Plot", W = !0;
  let F = o.aspectRatio ? N * o.aspectRatio : o.visualizationType === "Forest Plot" ? o.heights.vertical : o.heights[A];
  const V = N - w.yAxis.size - (v === "Combo" ? o.yAxis.rightAxisSize : 0);
  let H = F - (A === "horizontal" ? 0 : w.xAxis.size);
  o.visualizationType === "Forest Plot" && (F = F + o.data.length * o.forestPlot.rowHeight, H = H + o.data.length * o.forestPlot.rowHeight, N = l[0]), (Ge = o.brush) != null && Ge.active && (F = F + ((bt = o.brush) == null ? void 0 : bt.height));
  const { minValue: U, maxValue: Y, existPositiveValue: R, isAllLine: $ } = zr(o, i), { visSupportsReactTooltip: j } = Sa(), { hasTopAxis: q } = gg(o), [X, ne] = z.useState(!1), [de, Ae] = z.useState({ x: 0, y: 0 }), we = z.useRef(), G = z.useRef(), K = yl(we, {
    freezeOnceVisible: !1
  }), ae = (Z) => o.runtime.xAxis.type === "date" ? s(Z[o.runtime.originalXAxis.dataKey]).getTime() : Z[o.runtime.originalXAxis.dataKey], D = (Z, ge) => Z[ge], ce = o.brush.active && ((Et = o.brush.data) != null && Et.length) ? o.brush.data.map((Z) => ae(Z)) : i.map((Z) => ae(Z)), le = o.orientation === "horizontal" || o.visualizationType === "Forest Plot" ? "yAxis" : "xAxis", pe = { data: i, config: o, minValue: U, maxValue: Y, isAllLine: $, existPositiveValue: R, xAxisDataMapped: ce, xMax: V, yMax: H }, { min: he, max: Ee, leftMax: Ce, rightMax: ke } = Su(pe), { yScaleRight: Se, hasRightAxis: ye } = Al({ config: o, yMax: H, data: i, updateConfig: m }), { xScale: re, yScale: J, seriesScale: He, g1xScale: me, g2xScale: Pe, xScaleNoPadding: Le, xScaleBrush: je } = fg({ ...pe, min: he, max: Ee, leftMax: Ce, rightMax: ke, dimensions: l }), [Ie, Xe] = z.useState(null);
  z.useEffect(() => {
    var Z;
    Xe((Z = G == null ? void 0 : G.current) == null ? void 0 : Z.getBoundingClientRect());
  }, [G, o.legend]);
  const mt = (Z, ge) => {
    if (o.useLogScale && Z === 0.1 && (Z = 0), !(o.data && !o.data[ge] && v === "Forest Plot"))
      return o.visualizationType === "Forest Plot" ? o.data[ge][o.xAxis.dataKey] : w.yAxis.type === "date" ? c(s(Z)) : A === "vertical" ? d(Z, "left", W) : Z;
  }, at = (Z) => (o.useLogScale && Z === 0.1 && (Z = 0), w.xAxis.type === "date" && o.visualizationType !== "Forest Plot" ? c(Z) : A === "horizontal" && o.visualizationType !== "Forest Plot" ? d(Z, "left", W) : o.xAxis.type === "continuous" && o.visualizationType !== "Forest Plot" ? d(Z, "bottom", W) : o.visualizationType === "Forest Plot" ? d(Z, "left", o.dataFormat.abbreviated, o.runtime.xAxis.prefix, o.runtime.xAxis.suffix, Number(o.dataFormat.roundTo)) : Z), te = (Z) => {
    const { numTicks: ge } = w[Z];
    let ze;
    return Z === "yAxis" && (ze = _ && !ge ? i.length : _ && ge ? ge : !_ && !ge ? void 0 : !_ && ge && ge, ze === void 0 && !o.dataFormat.roundTo && (Number(Ee) <= 3 ? ze = 2 : ze = 4), Number(ze) > Number(Ee) && (ze = Number(he) < 0 ? Math.round(Ee) * 2 : Math.round(Ee))), Z === "xAxis" && (ze = _ && !ge ? void 0 : _ && ge ? ge : !_ && !ge ? void 0 : !_ && ge && ge, _ && ze === void 0 && !o.dataFormat.roundTo && (Ee <= 3 ? ze = 2 : ze = 4), o.visualizationType === "Forest Plot" && (ze = o.yAxis.numTicks !== "" ? o.yAxis.numTicks : 4)), ze;
  }, { tooltipData: $e, showTooltip: Be, hideTooltip: Lt, tooltipOpen: Ot, tooltipLeft: Ct, tooltipTop: Gt } = Xc(), {
    handleTooltipMouseOver: rt,
    handleTooltipClick: vt,
    handleTooltipMouseOff: Me,
    tooltipStyles: P,
    TooltipListItem: ie,
    getXValueFromCoordinateDate: fe,
    getXValueFromCoordinate: ue
  } = eu({
    xScale: re,
    yScale: J,
    showTooltip: Be,
    hideTooltip: Lt
  });
  z.useEffect(() => {
    document.querySelector(".isEditor") && ne((ge) => !0);
  }), z.useEffect(() => {
    (K == null ? void 0 : K.isIntersecting) === !0 && o.animate && setTimeout(() => {
      ne((Z) => !0);
    }, 500);
  }, [K == null ? void 0 : K.isIntersecting, o.animate]);
  const Ne = () => {
    const { visualizationType: Z } = o;
    return Z === "Combo" && w.forecastingSeriesKeys > 0 || Z === "Area Chart" || Z === "Line" || Z === "Bar";
  }, xe = Number(A === "horizontal" ? o.xAxis.size : o.yAxis.size), oe = () => o.visualizationType === "Forest Plot" ? o.data.length : te("yAxis"), qe = (Z) => {
    const ge = Z.currentTarget.getBoundingClientRect(), ze = Z.clientX - ge.left, be = Z.clientY - ge.top;
    Ae({
      x: ze,
      y: be
    });
  };
  return isNaN(N) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement(Ht, { component: "LinearChart" }, /* @__PURE__ */ r.createElement("div", { style: { width: `${N}px`, height: `${F}px`, overflow: "visible" }, className: "tooltip-boundary" }, /* @__PURE__ */ r.createElement(
    "svg",
    {
      onMouseMove: qe,
      width: "100%",
      height: "100%",
      className: `linear ${o.animate ? "animated" : ""} ${X && o.animate ? "animate" : ""} ${C && "debug"}`,
      role: "img",
      "aria-label": h(o),
      ref: G,
      style: { overflow: "visible" }
    },
    /* @__PURE__ */ r.createElement(Dt, { width: N, height: F, fill: "transparent" }),
    " ",
    !["Spark Line", "Forest Plot"].includes(v) && /* @__PURE__ */ r.createElement(Ay, { scale: J, tickLength: o.useLogScale ? 6 : 8, left: Number(w.yAxis.size) - o.yAxis.axisPadding, label: ((tt = w.yAxis.yAxis) == null ? void 0 : tt.label) || w.yAxis.label, stroke: "#333", tickFormat: (Z, ge) => mt(Z, ge), numTicks: oe() }, (Z) => {
      const ge = o.orientation === "horizontal" ? (Z.axisToPoint.y - Z.axisFromPoint.y) / 2 : (Z.axisFromPoint.y - Z.axisToPoint.y) / 2, ze = H / Z.ticks.length / 2 - H / Z.ticks.length * (1 - o.barThickness) + 5;
      return /* @__PURE__ */ r.createElement(ve, { className: "left-axis" }, Z.ticks.map((be, Qe) => {
        const ot = Z.ticks[0].to.y, pt = 15, At = String(be.value).startsWith("1") || be.value === 0.1 ? "block" : "none", St = At === "block" ? 7 : 0, it = { x: be.to.x - St, y: be.to.y };
        return /* @__PURE__ */ r.createElement(ve, { key: `vx-tick-${be.value}-${Qe}`, className: "vx-axis-tick" }, !w.yAxis.hideTicks && /* @__PURE__ */ r.createElement(Ye, { key: `${be.value}--hide-hideTicks`, from: be.from, to: o.useLogScale ? it : be.to, stroke: o.yAxis.tickColor, display: A === "horizontal" ? "none" : "block" }), w.yAxis.gridLines ? /* @__PURE__ */ r.createElement(Ye, { key: `${be.value}--hide-hideGridLines`, display: (o.useLogScale && At).toString(), from: { x: be.from.x + V, y: be.from.y }, to: be.from, stroke: "rgba(0,0,0,0.3)" }) : "", A === "horizontal" && S !== "stacked" && o.yAxis.labelPlacement === "On Date/Category Axis" && !o.yAxis.hideLabel && /* @__PURE__ */ r.createElement(
          Re,
          {
            transform: `translate(${be.to.x - 5}, ${o.isLollipopChart ? be.to.y - ot : be.to.y - ot + (Number(o.barHeight * o.series.length) - pt) / 2}) rotate(-${o.runtime.horizontal && o.runtime.yAxis.tickRotation || 0})`,
            verticalAnchor: "start",
            textAnchor: "end"
          },
          be.formattedValue
        ), A === "horizontal" && S === "stacked" && o.yAxis.labelPlacement === "On Date/Category Axis" && !o.yAxis.hideLabel && /* @__PURE__ */ r.createElement(Re, { transform: `translate(${be.to.x - 5}, ${be.to.y - ot + (Number(o.barHeight) - pt) / 2}) rotate(-${w.horizontal ? w.yAxis.tickRotation : 0})`, verticalAnchor: "start", textAnchor: "end" }, be.formattedValue), A === "horizontal" && v === "Paired Bar" && !o.yAxis.hideLabel && /* @__PURE__ */ r.createElement(Re, { transform: `translate(${be.to.x - 5}, ${be.to.y - ot + Number(o.barHeight) / 2}) rotate(-${w.horizontal ? w.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, be.formattedValue), A === "horizontal" && v === "Deviation Bar" && !o.yAxis.hideLabel && /* @__PURE__ */ r.createElement(Re, { transform: `translate(${be.to.x - 5}, ${o.isLollipopChart ? be.to.y - ot + 2 : be.to.y - ot + Number(o.barHeight) / 2}) rotate(-${w.horizontal ? w.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, be.formattedValue), A === "vertical" && v !== "Paired Bar" && !o.yAxis.hideLabel && /* @__PURE__ */ r.createElement(
          Re,
          {
            display: o.useLogScale ? At : "block",
            dx: o.useLogScale ? -6 : 0,
            x: o.runtime.horizontal ? be.from.x + 2 : be.to.x,
            y: be.to.y + (o.runtime.horizontal ? ze : 0),
            angle: -Number(o.yAxis.tickRotation) || 0,
            verticalAnchor: o.runtime.horizontal ? "start" : "middle",
            textAnchor: o.runtime.horizontal ? "start" : "end",
            fill: o.yAxis.tickLabelColor
          },
          be.formattedValue
        ));
      }), !o.yAxis.hideAxis && /* @__PURE__ */ r.createElement(Ye, { from: Z.axisFromPoint, to: w.horizontal ? { x: 0, y: o.visualizationType === "Forest Plot" ? F : Number(k) } : Z.axisToPoint, stroke: "#000" }), J.domain()[0] < 0 && /* @__PURE__ */ r.createElement(Ye, { from: { x: Z.axisFromPoint.x, y: J(0) }, to: { x: V, y: J(0) }, stroke: "#333" }), v === "Bar" && A === "horizontal" && re.domain()[0] < 0 && /* @__PURE__ */ r.createElement(Ye, { from: { x: re(0), y: 0 }, to: { x: re(0), y: H }, stroke: "#333", strokeWidth: 2 }), /* @__PURE__ */ r.createElement(Re, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${-1 * w.yAxis.size}, ${ge}) rotate(-90)`, fontWeight: "bold", fill: o.yAxis.labelColor }, Z.label));
    }),
    ye && /* @__PURE__ */ r.createElement(wy, { scale: Se, left: Number(N - o.yAxis.rightAxisSize), label: o.yAxis.rightLabel, tickFormat: (Z) => d(Z, "right"), numTicks: w.yAxis.rightNumTicks || void 0, labelOffset: 45 }, (Z) => {
      const ge = o.orientation === "horizontal" ? (Z.axisToPoint.y - Z.axisFromPoint.y) / 2 : (Z.axisFromPoint.y - Z.axisToPoint.y) / 2, ze = H / Z.ticks.length / 2 - H / Z.ticks.length * (1 - o.barThickness) + 5;
      return /* @__PURE__ */ r.createElement(ve, { className: "right-axis" }, Z.ticks.map((be, Qe) => /* @__PURE__ */ r.createElement(ve, { key: `vx-tick-${be.value}-${Qe}`, className: "vx-axis-tick" }, !w.yAxis.rightHideTicks && /* @__PURE__ */ r.createElement(Ye, { from: be.from, to: be.to, display: w.horizontal ? "none" : "block", stroke: o.yAxis.rightAxisTickColor }), w.yAxis.rightGridLines ? /* @__PURE__ */ r.createElement(Ye, { from: { x: be.from.x + V, y: be.from.y }, to: be.from, stroke: "rgba(0,0,0,0.3)" }) : "", !o.yAxis.rightHideLabel && /* @__PURE__ */ r.createElement(Re, { x: be.to.x, y: be.to.y + (w.horizontal ? ze : 0), verticalAnchor: w.horizontal ? "start" : "middle", textAnchor: "start", fill: o.yAxis.rightAxisTickLabelColor }, be.formattedValue))), !o.yAxis.rightHideAxis && /* @__PURE__ */ r.createElement(Ye, { from: Z.axisFromPoint, to: Z.axisToPoint, stroke: "#333" }), /* @__PURE__ */ r.createElement(Re, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${o.yAxis.rightLabelOffsetSize ? o.yAxis.rightLabelOffsetSize : 0}, ${ge}) rotate(-90)`, fontWeight: "bold", fill: o.yAxis.rightAxisLabelColor }, Z.label));
    }),
    q && o.topAxis.hasLine && /* @__PURE__ */ r.createElement(
      Ly,
      {
        stroke: "#333",
        left: Number(w.yAxis.size),
        scale: re,
        hideTicks: !0,
        hideZero: !0,
        tickLabelProps: () => ({
          fill: "transparent"
        })
      }
    ),
    v !== "Paired Bar" && v !== "Spark Line" && /* @__PURE__ */ r.createElement(
      ja,
      {
        top: w.horizontal && o.visualizationType !== "Forest Plot" ? Number(k) + Number(o.xAxis.axisPadding) : (o.visualizationType === "Forest Plot", H + Number(o.xAxis.axisPadding)),
        left: o.visualizationType !== "Forest Plot" ? Number(w.yAxis.size) : 0,
        label: w.xAxis.label,
        tickFormat: at,
        scale: re,
        stroke: "#333",
        numTicks: te("xAxis"),
        tickStroke: "#333"
      },
      (Z) => {
        const ge = o.visualizationType !== "Forest Plot" ? (Z.axisToPoint.x - Z.axisFromPoint.x) / 2 : l[0] / 2, ze = (Ue) => /\s/.test(Ue), be = Z.ticks.some((Ue) => ze(Ue.value)), Qe = { small: 16, medium: 18, large: 20 }, ot = 8, pt = Math.max(...Z.ticks.map((Ue) => x(Ue.formattedValue, `normal ${Qe[o.fontSize]}px sans-serif`))), At = be ? 180 : 100, St = Z.ticks.map((Ue) => x(Ue.formattedValue, `normal ${Qe[o.fontSize]}px sans-serif`)), it = St.reduce((Ue, Kt) => Ue + Kt, At), Tt = (V - it) / (Z.ticks.length - 1);
        let yt = [0];
        for (let Ue = 1; Ue < St.length; Ue++)
          yt[Ue] = yt[Ue - 1] + St[Ue - 1] + Tt;
        let Wt = !1;
        St.forEach((Ue, Kt) => {
          if (yt[Kt] + St[Kt] > yt[Kt + 1]) {
            Wt = !0;
            return;
          }
        });
        const nt = Wt && o.isResponsiveTicks ? pt + ot + 20 : 0, Mt = Number(o.xAxis.tickRotation) > 0 ? Number(o.xAxis.tickRotation) : 0;
        return o.dynamicMarginTop = nt, o.xAxis.tickWidthMax = pt, /* @__PURE__ */ r.createElement(ve, { className: "bottom-axis", width: l[0] }, Z.ticks.map((Ue, Kt, Ta) => {
          const Ln = String(Ue.value).startsWith("1") || Ue.value === 0.1 ? "block" : "none", ka = Ln === "block" ? 16 : ot, Fr = { x: Ue.to.x, y: ka };
          let Br = x(Ue.formattedValue, `normal ${Qe[o.fontSize]}px sans-serif`), wa = 100 / Ta.length;
          o.yAxis.tickRotation = o.isResponsiveTicks && o.orientation === "horizontal" ? 0 : o.yAxis.tickRotation, o.xAxis.tickRotation = o.isResponsiveTicks && o.orientation === "vertical" ? 0 : o.xAxis.tickRotation;
          const On = o.isResponsiveTicks && Wt ? -Number(o.xAxis.maxTickRotation) || -90 : -Number(o.runtime.xAxis.tickRotation);
          return /* @__PURE__ */ r.createElement(ve, { key: `vx-tick-${Ue.value}-${Kt}`, className: "vx-axis-tick" }, !o.xAxis.hideTicks && /* @__PURE__ */ r.createElement(Ye, { from: Ue.from, to: A === "horizontal" && o.useLogScale ? Fr : Ue.to, stroke: o.xAxis.tickColor, strokeWidth: Ln === "block" && o.useLogScale ? 1.3 : 1 }), !o.xAxis.hideLabel && /* @__PURE__ */ r.createElement(
            Re,
            {
              dy: o.orientation === "horizontal" && o.useLogScale ? 8 : 0,
              display: o.orientation === "horizontal" && o.useLogScale ? Ln : "block",
              x: Ue.to.x,
              y: Ue.to.y,
              angle: On,
              verticalAnchor: On < -50 ? "middle" : "start",
              textAnchor: On ? "end" : "middle",
              width: Wt && !o.isResponsiveTicks && !Number(o[le].tickRotation) ? wa : Br,
              fill: o.xAxis.tickLabelColor
            },
            Ue.formattedValue
          ));
        }), !o.xAxis.hideAxis && /* @__PURE__ */ r.createElement(Ye, { from: Z.axisFromPoint, to: Z.axisToPoint, stroke: "#333" }), /* @__PURE__ */ r.createElement(
          Re,
          {
            x: ge,
            y: o.visualizationType === "Forest Plot" ? o.xAxis.tickWidthMax + 40 : o.orientation === "horizontal" ? nt || o.xAxis.labelOffset : o.isResponsiveTicks && nt && !_ ? nt : Number(Mt) && !o.isResponsiveTicks && !_ ? Number(Mt + pt / 1.3) : Number(o.xAxis.labelOffset),
            textAnchor: "middle",
            verticalAnchor: "start",
            fontWeight: "bold",
            fill: o.xAxis.labelColor
          },
          Z.label
        ));
      }
    ),
    v === "Paired Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ja, { top: H, left: Number(w.yAxis.size), label: w.xAxis.label, tickFormat: w.xAxis.type === "date" ? c : d, scale: me, stroke: "#333", tickStroke: "#333", numTicks: w.xAxis.numTicks || void 0 }, (Z) => /* @__PURE__ */ r.createElement(ve, { className: "bottom-axis" }, Z.ticks.map((ge, ze) => {
      const be = ge.index !== 0 ? o.yAxis.tickRotation : 0, Qe = ge.index !== 0 && o.yAxis.tickRotation && o.yAxis.tickRotation > 0 ? "end" : "middle";
      return /* @__PURE__ */ r.createElement(ve, { key: `vx-tick-${ge.value}-${ze}`, className: "vx-axis-tick" }, !w.yAxis.hideTicks && /* @__PURE__ */ r.createElement(Ye, { from: ge.from, to: ge.to, stroke: "#333" }), !w.yAxis.hideLabel && /* @__PURE__ */ r.createElement(Re, { x: ge.to.x, y: ge.to.y, angle: -be, verticalAnchor: "start", textAnchor: Qe }, d(ge.value, "left")));
    }), !w.yAxis.hideAxis && /* @__PURE__ */ r.createElement(Ye, { from: Z.axisFromPoint, to: Z.axisToPoint, stroke: "#333" }))), /* @__PURE__ */ r.createElement(
      ja,
      {
        top: H,
        left: Number(w.yAxis.size),
        label: w.xAxis.label,
        tickFormat: w.xAxis.type === "date" ? c : w.xAxis.dataKey !== "Year" ? d : (Z) => Z,
        scale: Pe,
        stroke: "#333",
        tickStroke: "#333",
        numTicks: w.xAxis.numTicks || void 0
      },
      (Z) => /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ve, { className: "bottom-axis" }, Z.ticks.map((ge, ze) => {
        const be = ge.index !== 0 ? o.yAxis.tickRotation : 0, Qe = ge.index !== 0 && o.yAxis.tickRotation && o.yAxis.tickRotation > 0 ? "end" : "middle";
        return /* @__PURE__ */ r.createElement(ve, { key: `vx-tick-${ge.value}-${ze}`, className: "vx-axis-tick" }, !w.yAxis.hideTicks && /* @__PURE__ */ r.createElement(Ye, { from: ge.from, to: ge.to, stroke: "#333" }), !w.yAxis.hideLabel && /* @__PURE__ */ r.createElement(Re, { x: ge.to.x, y: ge.to.y, angle: -be, verticalAnchor: "start", textAnchor: Qe }, d(ge.value, "left")));
      }), !w.yAxis.hideAxis && /* @__PURE__ */ r.createElement(Ye, { from: Z.axisFromPoint, to: Z.axisToPoint, stroke: "#333" })), /* @__PURE__ */ r.createElement(ve, null, /* @__PURE__ */ r.createElement(Re, { x: V / 2, y: o.xAxis.labelOffset, stroke: "#333", textAnchor: "middle", verticalAnchor: "start" }, w.xAxis.label)))
    )),
    v === "Deviation Bar" && ((Ve = o.series) == null ? void 0 : Ve.length) === 1 && /* @__PURE__ */ r.createElement(lg, { animatedChart: X, xScale: re, yScale: J, width: V, height: H }),
    v === "Paired Bar" && /* @__PURE__ */ r.createElement(mg, { originalWidth: N, width: V, height: H }),
    v === "Scatter Plot" && /* @__PURE__ */ r.createElement(
      ig,
      {
        xScale: re,
        yScale: J,
        getXAxisData: ae,
        getYAxisData: D,
        xMax: V,
        yMax: H,
        handleTooltipMouseOver: rt,
        handleTooltipMouseOff: Me,
        handleTooltipClick: vt,
        tooltipData: $e,
        showTooltip: Be
      }
    ),
    v === "Box Plot" && /* @__PURE__ */ r.createElement(rg, { xScale: re, yScale: J }),
    (v === "Area Chart" && o.visualizationSubType === "regular" || v === "Combo") && /* @__PURE__ */ r.createElement(Qy, { xScale: re, yScale: J, yMax: H, xMax: V, chartRef: G, width: V, height: H, handleTooltipMouseOver: rt, handleTooltipMouseOff: Me, tooltipData: $e, showTooltip: Be }),
    (v === "Area Chart" && o.visualizationSubType === "stacked" || v === "Combo") && /* @__PURE__ */ r.createElement(Gy, { xScale: re, yScale: J, yMax: H, xMax: V, chartRef: G, width: V, height: H, handleTooltipMouseOver: rt, handleTooltipMouseOff: Me, tooltipData: $e, showTooltip: Be }),
    (v === "Bar" || v === "Combo") && /* @__PURE__ */ r.createElement(
      ag,
      {
        xScale: re,
        yScale: J,
        seriesScale: He,
        xMax: V,
        yMax: H,
        getXAxisData: ae,
        getYAxisData: D,
        animatedChart: X,
        visible: X,
        handleTooltipMouseOver: rt,
        handleTooltipMouseOff: Me,
        handleTooltipClick: vt,
        tooltipData: $e,
        showTooltip: Be,
        chartRef: G
      }
    ),
    (v === "Line" || v === "Combo") && /* @__PURE__ */ r.createElement(
      xs,
      {
        xScale: re,
        yScale: J,
        getXAxisData: ae,
        getYAxisData: D,
        xMax: V,
        yMax: H,
        seriesStyle: o.series,
        handleTooltipMouseOver: rt,
        handleTooltipMouseOff: Me,
        handleTooltipClick: vt,
        tooltipData: $e,
        showTooltip: Be,
        chartRef: G
      }
    ),
    (v === "Forecasting" || v === "Combo") && /* @__PURE__ */ r.createElement(
      sg,
      {
        showTooltip: Be,
        tooltipData: $e,
        xScale: re,
        yScale: J,
        width: V,
        le: !0,
        height: H,
        xScaleNoPadding: Le,
        chartRef: G,
        getXValueFromCoordinate: ue,
        handleTooltipMouseOver: rt,
        handleTooltipMouseOff: Me,
        isBrush: !1
      }
    ),
    o.yAxis.anchors && o.yAxis.anchors.map((Z) => /* @__PURE__ */ r.createElement(Ye, { strokeDasharray: p(Z.lineStyle), stroke: "rgba(0,0,0,1)", className: "customAnchor", from: { x: 0 + o.yAxis.size, y: J(Z.value) }, to: { x: V, y: J(Z.value) }, display: w.horizontal ? "none" : "block" })),
    v === "Forest Plot" && /* @__PURE__ */ r.createElement(
      dg,
      {
        xScale: re,
        yScale: J,
        seriesScale: He,
        width: N,
        height: F,
        getXAxisData: ae,
        getYAxisData: D,
        animatedChart: X,
        visible: X,
        handleTooltipMouseOver: rt,
        handleTooltipMouseOff: Me,
        handleTooltipClick: vt,
        tooltipData: $e,
        showTooltip: Be,
        chartRef: G,
        config: o
      }
    ),
    ["Line", "Bar", "Combo", "Area Chart"].includes(o.visualizationType) && !_ && /* @__PURE__ */ r.createElement(Hg, { xScaleBrush: je, yScale: J, xMax: V, yMax: H }),
    v !== "Bar" && v !== "Paired Bar" && v !== "Box Plot" && v !== "Area Chart" && v !== "Scatter Plot" && v !== "Deviation Bar" && v !== "Forecasting" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(xs, { xScale: re, yScale: J, getXAxisData: ae, getYAxisData: D, xMax: V, yMax: H, seriesStyle: o.series })),
    o.yAxis.anchors && o.yAxis.anchors.map((Z, ge) => {
      let ze = J(Z.value);
      if (!Z.value)
        return;
      const be = A === "horizontal" && v === "Bar" ? o.barHeight / 4 : 0;
      if (ze)
        return (
          // prettier-ignore
          /* @__PURE__ */ r.createElement(
            Ye,
            {
              key: `yAxis-${Z.value}--${ge}`,
              strokeDasharray: p(Z.lineStyle),
              stroke: Z.color ? Z.color : "rgba(0,0,0,1)",
              className: "anchor-y",
              from: { x: 0 + xe, y: ze - be },
              to: { x: N - o.yAxis.rightAxisSize, y: ze - be }
            }
          )
        );
    }),
    o.xAxis.anchors && o.xAxis.anchors.map((Z, ge) => {
      let ze = T;
      A === "horizontal" && (ze = O);
      let be = ze.type === "date" ? re(s(Z.value, !1)) : re(Z.value);
      if (be)
        return (
          // prettier-ignore
          /* @__PURE__ */ r.createElement(
            Ye,
            {
              key: `xAxis-${Z.value}--${ge}`,
              strokeDasharray: p(Z.lineStyle),
              stroke: Z.color ? Z.color : "rgba(0,0,0,1)",
              fill: Z.color ? Z.color : "rgba(0,0,0,1)",
              className: "anchor-x",
              from: { x: Number(be) + Number(xe), y: 0 },
              to: { x: Number(be) + Number(xe), y: H }
            }
          )
        );
    }),
    o.visualizationType !== "Bar" && o.visualizationType !== "Combo" && /* @__PURE__ */ r.createElement(El, { xScale: re, handleTooltipClick: vt, handleTooltipMouseOff: Me, handleTooltipMouseOver: rt, showTooltip: Be, hideTooltip: Lt, tooltipData: $e, yMax: H, width: N }),
    Ne && Be && $e && o.visual.verticalHoverLine && /* @__PURE__ */ r.createElement(ve, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ r.createElement(Ye, { from: { x: $e.dataXPosition - 10, y: 0 }, to: { x: $e.dataXPosition - 10, y: H }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" })),
    Ne && Be && $e && o.visual.horizontalHoverLine && /* @__PURE__ */ r.createElement(ve, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: o.yAxis.size ? o.yAxis.size : 0 }, /* @__PURE__ */ r.createElement(Ye, { from: { x: 0, y: $e.dataYPosition }, to: { x: V, y: $e.dataYPosition }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    o.filters && o.filters.values.length === 0 && i.length === 0 && /* @__PURE__ */ r.createElement(Re, { x: Number(o.yAxis.size) + Number(V / 2), y: F / 2 - o.xAxis.size / 2, textAnchor: "middle" }, o.chartMessage.noData),
    o.visualizationType === "Bar" && o.tooltips.singleSeries && o.visual.horizontalHoverLine && /* @__PURE__ */ r.createElement(ve, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: o.yAxis.size ? o.yAxis.size : 0 }, /* @__PURE__ */ r.createElement(Ye, { from: { x: 0, y: de.y }, to: { x: V, y: de.y }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    o.visualizationType === "Bar" && o.tooltips.singleSeries && o.visual.verticalHoverLine && /* @__PURE__ */ r.createElement(ve, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ r.createElement(Ye, { from: { x: de.x, y: 0 }, to: { x: de.x, y: H }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" }))
  ), $e && Object.entries($e.data).length > 0 && Ot && Be && $e.dataYPosition && $e.dataXPosition && !o.tooltips.singleSeries && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${o.tooltips.opacity / 100}) !important`), /* @__PURE__ */ r.createElement(Jc, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: Ct, top: Gt }, /* @__PURE__ */ r.createElement("ul", null, typeof $e == "object" && Object.entries($e.data).map((Z, ge) => /* @__PURE__ */ r.createElement(ie, { item: Z, key: ge }))))), j() && /* @__PURE__ */ r.createElement(Yy, { id: `cdc-open-viz-tooltip-${w.uniqueId}`, variant: "light", arrowColor: "rgba(0,0,0,0)", className: "tooltip", style: { background: `rgba(255,255,255, ${o.tooltips.opacity / 100})`, color: "black" } }), /* @__PURE__ */ r.createElement("div", { className: "animation-trigger", ref: we })));
};
var Kg = ["id", "markerWidth", "markerHeight", "markerUnits", "children"];
function Yi() {
  return Yi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Yi.apply(this, arguments);
}
function Ig(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Cu(e) {
  var t = e.id, n = e.markerWidth, a = n === void 0 ? 3 : n, i = e.markerHeight, l = i === void 0 ? 3 : i, o = e.markerUnits, s = o === void 0 ? "userSpaceOnUse" : o, c = e.children, u = Ig(e, Kg);
  return /* @__PURE__ */ r.createElement("defs", null, /* @__PURE__ */ r.createElement("marker", Yi({
    id: t,
    markerWidth: a,
    markerHeight: l,
    markerUnits: s
  }, u), c));
}
Cu.propTypes = {
  id: B.string.isRequired,
  size: B.number,
  markerWidth: B.oneOfType([B.string, B.number]),
  markerHeight: B.oneOfType([B.string, B.number]),
  markerUnits: B.string,
  refX: B.oneOfType([B.string, B.number]),
  refY: B.oneOfType([B.string, B.number]),
  strokeWidth: B.number,
  children: B.node.isRequired
};
var jg = ["id", "size", "strokeWidth"];
function Xi() {
  return Xi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Xi.apply(this, arguments);
}
function qg(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, l;
  for (l = 0; l < a.length; l++)
    i = a[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Ug(e) {
  var t = e.id, n = e.size, a = n === void 0 ? 9 : n, i = e.strokeWidth, l = i === void 0 ? 1 : i, o = qg(e, jg), s = a + l * 2, c = a, u = s / 2, d = "0 0, " + a + " " + a / 2 + ", 0 " + a;
  return /* @__PURE__ */ r.createElement(Cu, Xi({
    id: t,
    markerWidth: s,
    markerHeight: s,
    refX: c,
    refY: u,
    orient: "auto",
    markerUnits: "strokeWidth",
    fill: "none",
    strokeWidth: l
  }, o), /* @__PURE__ */ r.createElement("g", {
    transform: "translate(" + l + ", " + l + ")"
  }, /* @__PURE__ */ r.createElement("polyline", {
    points: d
  })));
}
const Yg = (e) => {
  var N;
  const { width: t, height: n } = e, { transformedData: a, config: i, parseDate: l, formatDate: o, seriesHighlight: s, formatNumber: c, colorScale: u, handleChartAriaLabels: d } = z.useContext(De);
  let h = t;
  const { minValue: m, maxValue: p } = zr(i, a), y = { top: 5, right: 10, bottom: 10, left: 10 }, b = n, g = h - i.runtime.yAxis.size, f = b - y.top - 20, x = (k) => i.runtime.xAxis.type === "date" ? l(k[i.runtime.originalXAxis.dataKey]).getTime() : k[i.runtime.originalXAxis.dataKey], E = (k, _) => k[_];
  let v, S;
  const { max: A, min: T } = i.runtime.yAxis, O = Number(A) >= Number(p), w = Number(T) <= Number(m);
  if (a) {
    let k = T && w ? T : m, _ = A && O ? A : Number.MIN_VALUE;
    if (_ === Number.MIN_VALUE && (_ = p), i.runtime.yAxis.paddingPercent) {
      let F = (_ - k) * i.runtime.yAxis.paddingPercent;
      k -= F, _ += F;
    }
    let W = a.map((F) => x(F));
    i.runtime.horizontal ? (v = ht({
      domain: [k, _],
      range: [0, g]
    }), S = i.runtime.xAxis.type === "date" ? ht({ domain: [Math.min(...W), Math.max(...W)] }) : zn({ domain: W, padding: 0.5 }), zn({
      domain: i.runtime.barSeriesKeys || i.runtime.seriesKeys,
      range: [0, f]
    }), S.rangeRound([0, f])) : (k = k < 0 ? k * 1.11 : k, S = ht({
      domain: [k, _],
      range: [f - y.bottom, y.top]
    }), v = zn({
      domain: W,
      range: [y.left, h - y.right]
    }), zn({
      domain: i.runtime.barSeriesKeys || i.runtime.seriesKeys,
      range: [0, g]
    }));
  }
  const C = [v.domain()[0], v.domain()[v.domain().length - 1]];
  return /* @__PURE__ */ r.createElement(Ht, { component: "SparkLine" }, /* @__PURE__ */ r.createElement("svg", { role: "img", "aria-label": d(i), width: t, height: 100, className: "sparkline", tabIndex: 0 }, ((N = i.runtime.lineSeriesKeys) == null ? void 0 : N.length) > 0 ? i.runtime.lineSeriesKeys : i.runtime.seriesKeys.map((k, _) => /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    ve,
    {
      style: { width: h },
      className: "sparkline-group",
      key: `series-${k}`,
      opacity: i.legend.behavior === "highlight" && s.length > 0 && s.indexOf(k) === -1 ? 0.5 : 1,
      display: i.legend.behavior === "highlight" || s.length === 0 || s.indexOf(k) !== -1 ? "block" : "none"
    },
    a.map((W, F) => {
      let V = i.runtime.yAxis.label ? `${i.runtime.yAxis.label}: ${c(E(W, k))}` : c(E(W, k)), H = i.runtime.xAxis.label ? `${i.runtime.xAxis.label}: ${W[i.runtime.xAxis.dataKey]}` : W[i.runtime.xAxis.dataKey];
      return `${V}${H}`, i.seriesLabel && `${i.seriesLabel}${k}`, /* @__PURE__ */ r.createElement(ve, { key: `series-${k}-point-${F}` }, /* @__PURE__ */ r.createElement(Re, { display: i.labels ? "block" : "none", x: v(x(W)), y: S(E(W, k)), fill: u ? u(i.runtime.seriesLabels ? i.runtime.seriesLabels[k] : k) : "#000", textAnchor: "middle" }, c(W[k])));
    }),
    /* @__PURE__ */ r.createElement(
      en,
      {
        curve: Nr,
        data: a,
        x: (W) => v(x(W)),
        y: (W) => S(E(W, k)),
        stroke: u ? u(i.runtime.seriesLabels ? i.runtime.seriesLabels[k] : k) : "#000",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        markerEnd: `url(#arrow--${_})`
      }
    ),
    /* @__PURE__ */ r.createElement(
      Ug,
      {
        id: `arrow--${_}`,
        refX: 2,
        size: 6,
        markerEnd: `url(#arrow--${_})`,
        strokeOpacity: 1,
        fillOpacity: 1,
        fill: u ? u(i.runtime.seriesLabels ? i.runtime.seriesLabels[k] : k) : "#000"
      }
    )
  ), /* @__PURE__ */ r.createElement(
    ja,
    {
      top: f + y.top,
      hideAxisLine: !0,
      hideTicks: !0,
      scale: v,
      tickValues: C,
      tickFormat: (W) => i.xAxis.type === "date" ? o(W) : null,
      stroke: "black",
      tickStroke: "black",
      tickLabelProps: () => ({
        fill: "black",
        fontSize: 11,
        textAnchor: "middle"
      })
    }
  )))));
}, Xg = () => {
  const {
    config: e,
    colorScale: t,
    seriesHighlight: n,
    highlight: a,
    tableData: i,
    highlightReset: l,
    transformedData: o,
    currentViewport: s
  } = z.useContext(De);
  if (!e.legend)
    return null;
  const c = su(e, i, o, t);
  return !["Box Plot", "Pie"].includes(e.visualizationType) && /* @__PURE__ */ r.createElement(ou, { config: e, colorScale: t, seriesHighlight: n, highlight: a, highlightReset: l, currentViewport: s, formatLabels: c });
}, si = {
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
    highlightOnHover: !1
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
  }
}, Ua = (e) => /* @__PURE__ */ z.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...e }, /* @__PURE__ */ z.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), Qg = ({ name: e }) => {
  var s, c, u, d, h;
  const { config: t, rawData: n, updateConfig: a } = z.useContext(De);
  if (t.visualizationType !== "Forest Plot")
    return;
  const i = (m) => {
    m.orientation === "horizontal" && (m.labels = !1), m.table.show === void 0 && (m.table.show = !isDashboard), m.visualizationType === "Combo" && (m.orientation = "vertical");
  }, l = (m = !0) => {
    let p = {};
    return n.forEach((y) => {
      Object.keys(y).forEach((b) => p[b] = !0);
    }), m && Object.keys(p).forEach((y) => {
      (t.series && t.series.filter((b) => b.dataKey === y).length > 0 || t.confidenceKeys && Object.keys(t.confidenceKeys).includes(y)) && delete p[y];
    }), Object.keys(p);
  }, o = (m, p, y, b) => {
    if (m === "boxplot" && p === "legend") {
      a({
        ...t,
        [m]: {
          ...t[m],
          [p]: {
            ...t.boxplot[p],
            [y]: b
          }
        }
      });
      return;
    }
    if (m === "boxplot" && p === "labels") {
      a({
        ...t,
        [m]: {
          ...t[m],
          [p]: {
            ...t.boxplot[p],
            [y]: b
          }
        }
      });
      return;
    }
    if (m === "forestPlot" && p) {
      let E = {
        ...t,
        [m]: {
          ...t[m],
          [p]: {
            ...t.forestPlot[p],
            [y]: b
          }
        }
      };
      a(E);
      return;
    }
    if (m === "columns" && p !== "" && y !== "") {
      a({
        ...t,
        [m]: {
          ...t[m],
          [p]: {
            ...t[m][p],
            [y]: b
          }
        }
      });
      return;
    }
    if (m === null && p === null) {
      let E = { ...t, [y]: b };
      i(E), a(E);
      return;
    }
    const g = Array.isArray(t[m]);
    let f = g ? [...t[m], b] : { ...t[m], [y]: b };
    p !== null && (g ? (f = [...t[m]], f[p] = { ...f[p], [y]: b }) : typeof b == "string" ? f[p] = b : f = { ...t[m], [p]: { ...t[m][p], [y]: b } });
    let x = { ...t, [m]: f };
    i(x), a(x);
  };
  return /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement(ct, null, /* @__PURE__ */ r.createElement(ut, null, e, (!t.forestPlot.estimateField || !t.forestPlot.upper || !t.forestPlot.lower) && /* @__PURE__ */ r.createElement(Ua, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(dt, null, /* @__PURE__ */ r.createElement(
    Oe,
    {
      value: t.xAxis.dataKey || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Study Column",
      initial: "Select",
      required: !0,
      updateField: o,
      options: l(!1),
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
    }
  ), /* @__PURE__ */ r.createElement(
    Oe,
    {
      value: t.forestPlot.type,
      label: "Forest Plot Type",
      initial: "Select",
      required: !0,
      onChange: (m) => {
        m.target.value !== "" && m.target.value !== "Select" && a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            type: m.target.value
          }
        }), m.target.value = "";
      },
      options: ["Linear", "Logarithmic"],
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "Linear - Typically used for continuous outcomes. Line of no effect is positioned on 0 (zero) ", /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("br", null), " Logarithmic - Typically used for binary outcomes such as risk ratios and odds ratios. Line of no effect is positioned on 1.")))
    }
  ), /* @__PURE__ */ r.createElement(se, { type: "text", value: ((s = t.forestPlot) == null ? void 0 : s.title) || "", updateField: o, section: "forestPlot", fieldName: "title", label: "Plot Title" }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", null, "Column Settings"), /* @__PURE__ */ r.createElement(
    Oe,
    {
      value: t.forestPlot.estimateField,
      label: "Point Estimate Column",
      initial: t.forestPlot.estimateField || "Select",
      required: !0,
      onChange: (m) => {
        m.target.value !== "" && m.target.value !== "Select" && a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            estimateField: m.target.value
          }
        }), m.target.value = "";
      },
      options: l(!1)
    }
  ), /* @__PURE__ */ r.createElement(
    Oe,
    {
      value: t.forestPlot.shape,
      label: "Point Estimate Shape",
      onChange: (m) => {
        m.target.value !== "" && m.target.value !== "Select" && a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            shape: m.target.value
          }
        }), m.target.value = "";
      },
      options: ["text", "circle", "square"]
    }
  ), /* @__PURE__ */ r.createElement(
    Oe,
    {
      value: t.forestPlot.lower,
      label: "Lower CI Column",
      required: !0,
      initial: t.forestPlot.lower || "Select",
      onChange: (m) => {
        m.target.value !== "" && m.target.value !== "Select" && a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            lower: m.target.value
          }
        }), m.target.value = "";
      },
      options: l(!1)
    }
  ), /* @__PURE__ */ r.createElement(
    Oe,
    {
      value: t.forestPlot.upper,
      label: "Upper CI Column",
      initial: t.forestPlot.upper || "Select",
      required: !0,
      onChange: (m) => {
        m.target.value !== "" && m.target.value !== "Select" && a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            upper: m.target.value
          }
        }), m.target.value = "";
      },
      options: l(!1)
    }
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Pooled Result Column", /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: t.forestPlot.pooledResult.column || "",
      label: "Pooled Result Row",
      onChange: (m) => {
        a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            pooledResult: {
              ...t.forestPlot.pooledResult,
              column: m.target.value
            }
          }
        }), m.target.value = "";
      }
    }
  ))), /* @__PURE__ */ r.createElement(Te, { value: ((u = (c = t.forestPlot) == null ? void 0 : c.lineOfNoEffect) == null ? void 0 : u.show) || !1, section: "forestPlot", subsection: "lineOfNoEffect", fieldName: "show", label: "Show Line of No Effect", updateField: o }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", null, "Width Settings"), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Left (%)"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "number",
      min: 0,
      max: 100,
      value: t.forestPlot.leftWidthOffset || 0,
      onChange: (m) => {
        a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            leftWidthOffset: m.target.value
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
      onChange: (m) => {
        a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            leftWidthOffsetMobile: m.target.value
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
      onChange: (m) => {
        a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            rightWidthOffset: m.target.value
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
      onChange: (m) => {
        a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            rightWidthOffsetMobile: m.target.value
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement(se, { type: "number", min: 20, max: 45, value: t.forestPlot.rowHeight ? t.forestPlot.rowHeight : 10, updateField: o, section: "forestPlot", fieldName: "rowHeight", label: "Row Height", placeholder: "10" }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", null, "Labels Settings"), /* @__PURE__ */ r.createElement(se, { type: "text", value: ((d = t.forestPlot) == null ? void 0 : d.leftLabel) || "", updateField: o, section: "forestPlot", fieldName: "leftLabel", label: "Left Label" }), /* @__PURE__ */ r.createElement(se, { type: "text", value: ((h = t.forestPlot) == null ? void 0 : h.rightLabel) || "", updateField: o, section: "forestPlot", fieldName: "rightLabel", label: "Right Label" }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement(
    Oe,
    {
      value: t.forestPlot.radius.scalingColumn,
      label: "Weight Column",
      initial: "Select",
      onChange: (m) => {
        m.target.value !== "" && m.target.value !== "Select" && a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            radius: {
              ...t.forestPlot.radius,
              scalingColumn: m.target.value
            }
          }
        }), m.target.value = "";
      },
      options: l(!1)
    }
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Radius Minimum Size"), /* @__PURE__ */ r.createElement(
    "input",
    {
      min: 3,
      max: 6,
      value: t.forestPlot.radius.min || 3,
      onChange: (m) => {
        a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            radius: {
              ...t.forestPlot.radius,
              min: Number(m.target.value)
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
      onChange: (m) => {
        a({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            radius: {
              ...t.forestPlot.radius,
              max: Number(m.target.value)
            }
          }
        });
      },
      type: "number",
      label: "Radius Minimum",
      placeholder: " 1"
    }
  ))));
}, Un = r.createContext(), Zg = (e) => {
  const { updateConfig: t, config: n, rawData: a } = z.useContext(De), { getColumns: i, selectComponent: l } = e, o = ["Line", "dashed-sm", "dashed-md", "dashed-lg"], s = (c, u, d) => {
    let h = [...n.series];
    if (h[c][d] = u, d === "type" && u === "Bar" && (h[c].axis = "Left"), h[c].type === "Forecasting") {
      let m = Array.from(new Set(a.map((y) => y[h[c].dataKey]))), p = [];
      m.forEach((y) => {
        p.push({ key: y });
      }), h[c].stages = p, h[c].stageColumn = h[c].dataKey;
    }
    t({ ...n, series: h });
  };
  return /* @__PURE__ */ r.createElement(Un.Provider, { value: { updateSeries: s, supportedRightAxisTypes: o, getColumns: i, selectComponent: l } }, e.children);
}, Gg = (e) => {
  const { config: t, updateConfig: n } = z.useContext(De), { series: a, index: i } = e;
  if (!(() => {
    let c = !1;
    return t.visualizationSubType === "stacked" || ["Line", "dashed-sm", "dashed-md", "dashed-lg", "Area Chart"].some((d) => d.includes(a.type)) && (c = !0), c;
  })())
    return;
  const o = (c, u) => {
    let d = [...t.series];
    d[c].lineType = u, n({ ...t, series: d });
  };
  let s = [];
  return Object.keys(Tr).map((c) => s.push(Tr[c])), /* @__PURE__ */ r.createElement(
    cn,
    {
      initial: "Select an option",
      value: a.lineType ? a.lineType : "curveLinear",
      label: "Series Line Type",
      onChange: (c) => {
        o(i, c.target.value);
      },
      options: s
    }
  );
}, Jg = (e) => {
  const { config: t } = z.useContext(De), { updateSeries: n } = z.useContext(Un), { index: a, series: i } = e, l = () => {
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
      cn,
      {
        initial: "Select an option",
        value: i.type,
        label: "Series Type",
        onChange: (o) => {
          n(a, o.target.value, "type");
        },
        options: l()
      }
    );
}, ex = (e) => {
  const { config: t, updateConfig: n, rawData: a } = z.useContext(De), { updateSeries: i, getColumns: l } = z.useContext(Un), { index: o, series: s } = e;
  return /* @__PURE__ */ r.createElement(
    cn,
    {
      initial: "Select an option",
      value: s.stageColumn,
      label: "Add Forecasting Stages",
      onChange: (c) => {
        let u = [], d = new Set(a == null ? void 0 : a.map((m) => m[c.target.value]));
        d = Array.from(d), d = d.filter((m) => m !== void 0), d.forEach((m) => u.push({ key: m }));
        const h = [...t.series];
        h[o] = { ...h[o], stages: u, stageColumn: c.target.value }, n({
          ...t,
          series: h
        });
      },
      options: l(!1)
    }
  );
}, tx = (e) => {
  const { config: t, rawData: n } = z.useContext(De), { updateSeries: a } = z.useContext(Un), { index: i, series: l } = e;
  if (l.type !== "Forecasting" || !n || !l.stageColumn)
    return;
  let o = new Set(n.map((s) => s[l.stageColumn]));
  return o = Array.from(o), o = o.filter((s) => s !== void 0), /* @__PURE__ */ r.createElement(
    cn,
    {
      initial: "Select an option",
      value: l.stageItem,
      label: "Forecasting Item Column",
      onChange: (s) => {
        a(i, s.target.value, "stageItem");
      },
      options: o
    }
  );
}, nx = (e) => {
  const { config: t } = z.useContext(De), { updateSeries: n, supportedRightAxisTypes: a } = z.useContext(Un), { index: i, series: l } = e;
  if (!(t.visualizationType !== "Combo" || !l) && a.includes(l.type))
    return /* @__PURE__ */ r.createElement(
      cn,
      {
        initial: "Select an option",
        value: l.axis ? l.axis : "Left",
        label: "Series Axis",
        onChange: (o) => {
          n(i, o.target.value, "axis");
        },
        options: {
          Left: "Left",
          Right: "Right"
        }
      }
    );
}, ax = (e) => {
  var l;
  const { config: t, updateConfig: n } = z.useContext(De), { index: a, series: i } = e;
  if (i.type === "Forecasting" && i)
    return (l = i == null ? void 0 : i.stages) == null ? void 0 : l.map((o, s) => {
      var c, u, d, h;
      return /* @__PURE__ */ r.createElement(
        cn,
        {
          key: `${o}--${s}`,
          initial: "Select an option",
          value: (u = (c = t.series) == null ? void 0 : c[a].stages) != null && u[s].color ? (h = (d = t.series) == null ? void 0 : d[a].stages) == null ? void 0 : h[s].color : "Select",
          label: `${o.key} Series Color`,
          onChange: (m) => {
            const p = [...t.series], y = p[a].stages;
            y[s].color = m.target.value, p[a] = { ...p[a], stages: y }, n({
              ...t,
              series: p
            });
          },
          options: Object.keys(Xa)
        }
      );
    });
}, rx = (e) => {
  var o;
  const { config: t, updateConfig: n } = z.useContext(De), { series: a, index: i } = e, { getColumns: l } = z.useContext(Un);
  if (a.type === "Forecasting")
    return /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Confidence Interval Groups"), /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement(An, { allowZeroExpanded: !0 }, (o = a == null ? void 0 : a.confidenceIntervals) == null ? void 0 : o.map((s, c) => {
      const u = s.showInTooltip ? s.showInTooltip : !1, d = (h, m, p) => {
        h.preventDefault();
        let y = [...t.series];
        y[m].confidenceIntervals[p].showInTooltip = !u, n({
          ...t,
          series: y
        });
      };
      return /* @__PURE__ */ r.createElement(st, { className: "series-item series-item--chart", key: `${c}` }, /* @__PURE__ */ r.createElement(ct, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ut, { className: "accordion__button accordion__button" }, "Group ", c + 1, /* @__PURE__ */ r.createElement(
        "button",
        {
          className: "series-list__remove",
          onClick: (h) => {
            h.preventDefault();
            const m = [...t.series[i].confidenceIntervals];
            m.splice(c, 1);
            const p = [...t.series];
            p[i] = { ...p[i], confidenceIntervals: [...m] }, n({
              ...t,
              series: p
            });
          }
        },
        "Remove"
      )))), /* @__PURE__ */ r.createElement(dt, null, /* @__PURE__ */ r.createElement("div", { className: "input-group" }, /* @__PURE__ */ r.createElement("label", { htmlFor: "showInTooltip" }, "Show In Tooltip"), /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox--small", onClick: (h) => d(h, i, c) }, /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, u && /* @__PURE__ */ r.createElement(Fs, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ r.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: "showInTooltip", checked: u || !1, readOnly: !0 }))), /* @__PURE__ */ r.createElement(
        cn,
        {
          initial: "Select an option",
          value: t.series[i].confidenceIntervals[c].low ? t.series[i].confidenceIntervals[c].low : "Select",
          label: "Low Confidence Interval",
          onChange: (h) => {
            const m = [...t.series[i].confidenceIntervals];
            m[c].low = h.target.value;
            const p = [...t.series];
            p[i] = { ...p[i], confidenceIntervals: m }, n({
              ...t,
              series: p
            });
          },
          options: l()
        }
      ), /* @__PURE__ */ r.createElement(
        cn,
        {
          initial: "Select an option",
          value: t.series[i].confidenceIntervals[c].high ? t.series[i].confidenceIntervals[c].high : "Select",
          label: "High Confidence Interval",
          onChange: (h) => {
            const m = [...t.series[i].confidenceIntervals];
            m[c].high = h.target.value;
            const p = [...t.series];
            p[i] = { ...p[i], confidenceIntervals: m }, n({
              ...t,
              series: p
            });
          },
          options: l()
        }
      )));
    })), /* @__PURE__ */ r.createElement(
      "button",
      {
        className: "btn full-width",
        onClick: (s) => {
          s.preventDefault();
          let c = null;
          t.series[i].confidenceIntervals ? c = [...t.series[i].confidenceIntervals] : c = [];
          const u = [...t.series];
          u[i] = { ...u[i], confidenceIntervals: [...c, { high: "", low: "" }] }, n({
            ...t,
            series: u
          });
        }
      },
      "Add Confidence Interval Group"
    )));
}, ix = (e) => {
  const { series: t, index: n } = e, { config: a, updateConfig: i } = z.useContext(De);
  if (!["Bar", "Line", "Area Chart", "Combo", "Deviation", "Paired", "Scatter", "dashed-sm", "dashed-md", "dashed-lg"].includes(t.type))
    return;
  let o = (s, c) => {
    let u = [...a.series], d = { ...a.runtime.seriesLabels };
    u[s].name = c, d[u[s].dataKey] = u[s].name ? u[s].name : u[s].dataKey;
    let h = {
      ...a,
      series: u,
      runtime: {
        ...a.runtime,
        seriesLabels: d
      }
    };
    i(h);
  };
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", { htmlFor: "series-name" }, "Series Name"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      key: `series-name-${n}`,
      value: t.name ? t.name : "",
      onChange: (s) => {
        o(n, s.target.value);
      }
    }
  ));
}, lx = (e) => {
  const { series: t, index: n } = e, { config: a, updateConfig: i } = z.useContext(De);
  if (["Paired Bar", "Scatter Plot", "Deviation Bar"].includes(a.visualizationType))
    return;
  const l = (o) => {
    let s = [...a.series];
    s[o].tooltip && s[o].tooltip, s[o].tooltip = !s[o].tooltip, i({
      ...a,
      series: s
    });
  };
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: "input-group" }, /* @__PURE__ */ r.createElement("label", { htmlFor: `series-tooltip--${n}` }, "Show In Tooltip"), /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox--small", onClick: (o) => l(n) }, /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, t.tooltip && /* @__PURE__ */ r.createElement(Fs, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ r.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: `series-tooltip--${n}`, checked: t.tooltip ? t.tooltip : !1, readOnly: !0 }))));
}, ox = (e) => {
  const { config: t, updateConfig: n } = z.useContext(De), { series: a, index: i } = e, l = (s) => {
    let c = [...t.series], u = -1;
    for (let d = 0; d < c.length; d++)
      if (c[d].dataKey === s) {
        u = d;
        break;
      }
    if (u !== -1) {
      c.splice(u, 1);
      let d = { ...t, series: c };
      c.length === 0 && delete d.series, n(d);
    }
    t.visualizationType === "Paired Bar" && n({
      ...t,
      series: []
    });
  }, o = (s, c, u) => {
    s.preventDefault(), l(c.dataKey);
  };
  return t.series && t.series.length > 1 && /* @__PURE__ */ r.createElement("button", { className: "series-list__remove", onClick: (s) => o(s, a) }, "Remove");
}, Pu = (e) => {
  const { config: t } = z.useContext(De), { series: n, getItemStyle: a, sortableItemStyles: i, chartsWithOptions: l, index: o } = e;
  return /* @__PURE__ */ r.createElement(_s, { key: n.dataKey, draggableId: `draggableFilter-${n.dataKey}`, index: o }, (s, c) => /* @__PURE__ */ r.createElement("div", { key: o, className: c.isDragging ? "currently-dragging" : "", style: a(c.isDragging, s.draggableProps.style, i), ref: s.innerRef, ...s.draggableProps, ...s.dragHandleProps }, /* @__PURE__ */ r.createElement(An, { allowZeroExpanded: !0 }, /* @__PURE__ */ r.createElement(st, { className: "series-item series-item--chart" }, /* @__PURE__ */ r.createElement(ct, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(ut, { className: l.includes(t.visualizationType) ? "accordion__button" : "accordion__button hide-arrow" }, /* @__PURE__ */ r.createElement(_e, { display: "move", size: 15, style: { cursor: "default" } }), n.dataKey, /* @__PURE__ */ r.createElement(Jt.Button.Remove, { series: n, index: o }))), l.includes(t.visualizationType) && /* @__PURE__ */ r.createElement(dt, null, /* @__PURE__ */ r.createElement(Jt.Input.Name, { series: n, index: o }), /* @__PURE__ */ r.createElement(Jt.Dropdown.SeriesType, { series: n, index: o }), /* @__PURE__ */ r.createElement(Jt.Dropdown.AxisPosition, { series: n, index: o }), /* @__PURE__ */ r.createElement(Jt.Dropdown.LineType, { series: n, index: o }), /* @__PURE__ */ r.createElement(Jt.Dropdown.ForecastingColor, { series: n, index: o }), /* @__PURE__ */ r.createElement(Jt.Dropdown.ConfidenceInterval, { series: n, index: o }), /* @__PURE__ */ r.createElement(Jt.Checkbox.DisplayInTooltip, { series: n, index: o }))))));
}, sx = (e) => {
  const { series: t, getItemStyle: n, sortableItemStyles: a, chartsWithOptions: i } = e;
  return t.map((l, o) => /* @__PURE__ */ r.createElement(Pu, { getItemStyle: n, sortableItemStyles: a, chartsWithOptions: i, series: l, index: o, key: `series-list-${o}` }));
}, Jt = {
  Wrapper: Zg,
  Dropdown: {
    SeriesType: Jg,
    AxisPosition: nx,
    ConfidenceInterval: rx,
    LineType: Gg,
    ForecastingStage: ex,
    ForecastingColumn: tx,
    ForecastingColor: ax
  },
  Input: {
    Name: ix
  },
  Checkbox: {
    DisplayInTooltip: lx
  },
  Button: {
    Remove: ox
  },
  Item: Pu,
  List: sx
}, cx = z.memo(({ config: e, updateConfig: t }) => {
  let n = (c, u, d) => {
    let h = [];
    e.regions && (h = [...e.regions]), h[d][c] = u, t({ ...e, regions: h });
  }, a = (c, u, d, h, m) => n(d, h, m), i = (c) => {
    let u = [];
    e.regions && (u = [...e.regions]), u.splice(c, 1), t({ ...e, regions: u });
  }, l = () => {
    let c = [];
    e.regions && (c = [...e.regions]), c.push({}), t({ ...e, regions: c });
  };
  const o = ["Fixed", "Previous Days"], s = ["Last Date", "Fixed"];
  return /* @__PURE__ */ r.createElement(r.Fragment, null, e.regions && e.regions.map(({ label: c, color: u, from: d, to: h, background: m, range: p = "Custom" }, y) => {
    var b;
    return /* @__PURE__ */ r.createElement("div", { className: "edit-block", key: `region-${y}` }, /* @__PURE__ */ r.createElement(
      "button",
      {
        type: "button",
        className: "remove-column",
        onClick: (g) => {
          g.preventDefault(), i(y);
        }
      },
      "Remove"
    ), /* @__PURE__ */ r.createElement(se, { value: c, label: "Region Label", fieldName: "label", i: y, updateField: a }), /* @__PURE__ */ r.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ r.createElement(se, { value: u, label: "Text Color", fieldName: "color", updateField: (g, f, x, E) => n(x, E, y) }), /* @__PURE__ */ r.createElement(se, { value: m, label: "Background", fieldName: "background", updateField: (g, f, x, E) => n(x, E, y) })), /* @__PURE__ */ r.createElement(
      Oe,
      {
        value: e.regions[y].fromType ?? "Fixed",
        label: "Minimum Region Type",
        initial: "Select",
        required: !0,
        onChange: (g) => {
          if (g.target.value !== "" && g.target.value !== "Select") {
            const f = [...e.regions];
            f[y].fromType = g.target.value, t({
              ...e,
              regions: f
            });
          }
          g.target.value = "";
        },
        options: o
      }
    ), (e.regions[y].fromType === "Fixed" || e.regions[y].fromType === "Previous Days" || !e.regions[y].fromType) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      se,
      {
        value: d,
        label: e.regions[y].fromType === "Fixed" || !((b = e.regions[y]) != null && b.fromType) ? "From Value" : "Previous Number of Days",
        fieldName: "from",
        updateField: (g, f, x, E) => n(x, E, y),
        tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "The date needs to be in the original format of the data. Not the displayed format of the data.")))
      }
    )), /* @__PURE__ */ r.createElement(
      Oe,
      {
        value: e.regions[y].toType ?? "Fixed",
        label: "Maximum Region Type",
        initial: "Select",
        required: !0,
        onChange: (g) => {
          if (g.target.value !== "" && g.target.value !== "Select") {
            const f = [...e.regions];
            f[y].toType = g.target.value, t({
              ...e,
              regions: f
            });
          }
          g.target.value = "";
        },
        options: s
      }
    ), (e.regions[y].toType === "Fixed" || !e.regions[y].toType) && /* @__PURE__ */ r.createElement(se, { value: h, label: "To Value", fieldName: "to", updateField: (g, f, x, E) => n(x, E, y) }));
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
}), ux = ({ name: e }) => {
  const { visSupportsRegions: t } = Sa(), { config: n, updateConfig: a } = z.useContext(De);
  return t() ? /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement(ct, null, /* @__PURE__ */ r.createElement(ut, null, e)), /* @__PURE__ */ r.createElement(dt, null, /* @__PURE__ */ r.createElement(cx, { config: n, updateConfig: a }))) : null;
}, Nu = z.createContext(null), zl = () => {
  const e = z.useContext(Nu);
  if (e === null)
    throw new Error("COVE: editor panel context is null.");
  return e;
}, dx = (e) => {
  const { config: t } = z.useContext(De), { updateField: n } = zl(), { enabledChartTypes: a, visHasNumbersOnBars: i, visHasLabelOnData: l, visSupportsChartHeight: o, visSupportsSuperTitle: s, visSupportsFootnotes: c } = Sa(), { visualizationType: u, visualizationSubType: d, barStyle: h } = t, m = () => (u === "Bar" || u === "Deviation Bar") && d !== "stacked" && (t.orientation === "horizontal" || t.orientation === "vertical") ? ["flat", "rounded", "lollipop"] : ["flat", "rounded"];
  return /* @__PURE__ */ r.createElement(st, null, " ", /* @__PURE__ */ r.createElement(ct, null, /* @__PURE__ */ r.createElement(ut, null, "General")), /* @__PURE__ */ r.createElement(dt, null, /* @__PURE__ */ r.createElement(Oe, { value: u, fieldName: "visualizationType", label: "Chart Type", updateField: n, options: a }), (u === "Bar" || u === "Combo" || u === "Area Chart") && /* @__PURE__ */ r.createElement(Oe, { value: d || "Regular", fieldName: "visualizationSubType", label: "Chart Subtype", updateField: n, options: ["regular", "stacked"] }), u === "Area Chart" && d === "stacked" && /* @__PURE__ */ r.createElement(Oe, { value: t.stackedAreaChartLineType || "Linear", fieldName: "stackedAreaChartLineType", label: "Stacked Area Chart Line Type", updateField: n, options: Object.keys(Tr) }), u === "Bar" && /* @__PURE__ */ r.createElement(Oe, { value: t.orientation || "vertical", fieldName: "orientation", label: "Orientation", updateField: n, options: ["vertical", "horizontal"] }), u === "Deviation Bar" && /* @__PURE__ */ r.createElement(Oe, { label: "Orientation", options: ["horizontal"] }), (u === "Bar" || u === "Deviation Bar") && /* @__PURE__ */ r.createElement(Oe, { value: t.isLollipopChart ? "lollipop" : h || "flat", fieldName: "barStyle", label: "bar style", updateField: n, options: m() }), (u === "Bar" || u === "Deviation Bar") && h === "rounded" && /* @__PURE__ */ r.createElement(Oe, { value: t.tipRounding || "top", fieldName: "tipRounding", label: "tip rounding", updateField: n, options: ["top", "full"] }), (u === "Bar" || u === "Deviation Bar") && h === "rounded" && /* @__PURE__ */ r.createElement(Oe, { value: t.roundingStyle || "standard", fieldName: "roundingStyle", label: "rounding style", updateField: n, options: ["standard", "shallow", "finger"] }), u === "Bar" && t.orientation === "horizontal" && /* @__PURE__ */ r.createElement(Oe, { value: t.yAxis.labelPlacement || "Below Bar", section: "yAxis", fieldName: "labelPlacement", label: "Label Placement", updateField: n, options: ["Below Bar", "On Date/Category Axis"] }), i() ? /* @__PURE__ */ r.createElement(Te, { value: t.yAxis.displayNumbersOnBar, section: "yAxis", fieldName: "displayNumbersOnBar", label: t.isLollipopChart ? "Display Numbers after Bar" : "Display Numbers on Bar", updateField: n }) : l() && /* @__PURE__ */ r.createElement(Te, { value: t.labels, fieldName: "labels", label: "Display label on data", updateField: n }), u === "Pie" && /* @__PURE__ */ r.createElement(Oe, { fieldName: "pieType", label: "Pie Chart Type", updateField: n, options: ["Regular", "Donut"] }), /* @__PURE__ */ r.createElement(
    se,
    {
      value: t.title || "Chart Title",
      fieldName: "title",
      id: "title",
      label: "Title",
      placeholder: "Chart Title",
      updateField: n,
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "Title is required to set the name of the download file but can be hidden using the option below.")))
    }
  ), /* @__PURE__ */ r.createElement(Te, { value: t.showTitle, fieldName: "showTitle", label: "Show Title", updateField: n }), s() && /* @__PURE__ */ r.createElement(
    se,
    {
      value: t.superTitle,
      updateField: n,
      fieldName: "superTitle",
      label: "Super Title",
      placeholder: "Super Title",
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "Super Title")))
    }
  ), /* @__PURE__ */ r.createElement(
    se,
    {
      type: "textarea",
      value: t.introText,
      updateField: n,
      fieldName: "introText",
      label: "Message",
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "Intro Text")))
    }
  ), /* @__PURE__ */ r.createElement(
    se,
    {
      type: "textarea",
      value: t.description,
      fieldName: "description",
      label: "Subtext/Citation",
      updateField: n,
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), c() && /* @__PURE__ */ r.createElement(
    se,
    {
      type: "textarea",
      value: t.footnotes,
      updateField: n,
      fieldName: "footnotes",
      label: "Footnotes",
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "Footnotes")))
    }
  ), o() && t.orientation === "vertical" && /* @__PURE__ */ r.createElement(se, { type: "number", value: t.heights.vertical, section: "heights", fieldName: "vertical", label: "Chart Height", updateField: n })));
}, mx = (e) => {
  const { config: t } = z.useContext(De), { boxplot: n } = t;
  if (t.visualizationType !== "Box Plot")
    return;
  const { updateField: a } = zl();
  return /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement(ct, null, /* @__PURE__ */ r.createElement(ut, null, e.name)), /* @__PURE__ */ r.createElement(dt, null, /* @__PURE__ */ r.createElement("h4", { style: { fontSize: "18px" } }, "Labels for 5-Number Summary"), /* @__PURE__ */ r.createElement(
    se,
    {
      type: "text",
      value: n.labels.maximum,
      fieldName: "maximum",
      section: "boxplot",
      subsection: "labels",
      label: "Maximum",
      updateField: a,
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "Highest value, excluding outliers")))
    }
  ), /* @__PURE__ */ r.createElement(
    se,
    {
      type: "text",
      value: n.labels.q3,
      fieldName: "q3",
      section: "boxplot",
      subsection: "labels",
      label: "Upper Quartile",
      updateField: a,
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "Represented by top line of box. 25% of data are higher.")))
    }
  ), /* @__PURE__ */ r.createElement(
    se,
    {
      type: "text",
      value: n.labels.median,
      fieldName: "median",
      section: "boxplot",
      subsection: "labels",
      label: "Median",
      updateField: a,
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "Middle data point. Half of data are higher value.")))
    }
  ), /* @__PURE__ */ r.createElement(
    se,
    {
      type: "text",
      value: n.labels.q1,
      fieldName: "q1",
      section: "boxplot",
      subsection: "labels",
      label: "Lower Quartile",
      updateField: a,
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "Represented by bottom line of box. 25% of data are lower.")))
    }
  ), /* @__PURE__ */ r.createElement(
    se,
    {
      type: "text",
      value: n.labels.minimum,
      fieldName: "minimum",
      section: "boxplot",
      subsection: "labels",
      label: "Minimum",
      updateField: a,
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "Lowest value, excluding outliers")))
    }
  ), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", { style: { fontSize: "18px" } }, "Labels for Additional Measures"), /* @__PURE__ */ r.createElement(se, { type: "text", value: n.labels.iqr, fieldName: "iqr", section: "boxplot", subsection: "labels", label: "Interquartile Range", updateField: a }), /* @__PURE__ */ r.createElement(se, { type: "text", value: n.labels.total, fieldName: "total", section: "boxplot", subsection: "labels", label: "Total", updateField: a }), /* @__PURE__ */ r.createElement(se, { type: "text", value: n.labels.mean, fieldName: "mean", section: "boxplot", subsection: "labels", label: "Mean", updateField: a }), /* @__PURE__ */ r.createElement(se, { type: "text", value: n.labels.outliers, fieldName: "outliers", section: "boxplot", subsection: "labels", label: "Outliers", updateField: a }), /* @__PURE__ */ r.createElement(se, { type: "text", value: n.labels.values, fieldName: "values", section: "boxplot", subsection: "labels", label: "Values", updateField: a })));
}, Lu = (e, t) => {
  let n = [], a = [], i = [];
  if (e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar") {
    const l = e.twoColor.isPaletteReversed;
    n = Object.keys(Ya).filter((o) => l ? o.endsWith("reverse") : !o.endsWith("reverse"));
  } else {
    const l = [], o = [];
    for (const s in Nt) {
      const c = s.startsWith("sequential"), u = s.startsWith("qualitative"), d = s.endsWith("reverse");
      c && (!e.isPaletteReversed && !d || e.isPaletteReversed && d) && l.push(s), u && (!e.isPaletteReversed && !d || e.isPaletteReversed && d) && o.push(s);
    }
    a = l, i = o;
  }
  return z.useEffect(() => {
    let l = "";
    e.twoColor.isPaletteReversed && !e.twoColor.palette.endsWith("reverse") && (l = e.twoColor.palette + "reverse"), !e.twoColor.isPaletteReversed && e.twoColor.palette.endsWith("reverse") && (l = e.twoColor.palette.slice(0, -7)), t({ ...e, twoColor: { ...e.twoColor, palette: l } });
  }, [e.twoColor.isPaletteReversed]), z.useEffect(() => {
    let l = "";
    e.isPaletteReversed && !e.palette.endsWith("reverse") && (l = e.palette + "reverse"), !e.isPaletteReversed && e.palette.endsWith("reverse") && (l = e.palette.slice(0, -7)), t({ ...e, palette: l });
  }, [e.isPaletteReversed]), { twoColorPalettes: n, sequential: a, nonSequential: i };
}, fx = (e) => {
  var A;
  const { config: t, updateConfig: n, colorPalettes: a, twoColorPalette: i } = z.useContext(De), { visual: l } = t, { setLollipopShape: o, updateField: s } = zl(), { visHasBarBorders: c, visCanAnimate: u, visSupportsNonSequentialPallete: d, headerColors: h, visSupportsTooltipOpacity: m, visSupportsTooltipLines: p, visSupportsBarSpace: y, visSupportsBarThickness: b, visHasDataCutoff: g, visSupportsSequentialPallete: f, visSupportsReverseColorPalette: x } = Sa(), { twoColorPalettes: E, sequential: v, nonSequential: S } = Lu(t, n);
  return /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement(ct, null, /* @__PURE__ */ r.createElement(ut, null, "Visual")), /* @__PURE__ */ r.createElement(dt, null, t.isLollipopChart && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("fieldset", { className: "header" }, /* @__PURE__ */ r.createElement("legend", { className: "edit-label" }, "Lollipop Shape"), /* @__PURE__ */ r.createElement(
    "div",
    {
      onChange: (T) => {
        o(T.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("label", { className: "radio-label" }, /* @__PURE__ */ r.createElement("input", { type: "radio", name: "lollipopShape", value: "circle", checked: t.lollipopShape === "circle" }), "Circle"),
    /* @__PURE__ */ r.createElement("label", { className: "radio-label" }, /* @__PURE__ */ r.createElement("input", { type: "radio", name: "lollipopShape", value: "square", checked: t.lollipopShape === "square" }), "Square")
  )), /* @__PURE__ */ r.createElement(Oe, { value: t.lollipopColorStyle ? t.lollipopColorStyle : "two-tone", fieldName: "lollipopColorStyle", label: "Lollipop Color Style", updateField: s, options: ["regular", "two-tone"] }), /* @__PURE__ */ r.createElement(Oe, { value: t.lollipopSize ? t.lollipopSize : "small", fieldName: "lollipopSize", label: "Lollipop Size", updateField: s, options: ["small", "medium", "large"] })), t.visualizationType === "Box Plot" && /* @__PURE__ */ r.createElement("fieldset", { className: "fieldset fieldset--boxplot" }, /* @__PURE__ */ r.createElement("legend", { className: "" }, "Box Plot Settings"), /* @__PURE__ */ r.createElement(Oe, { value: t.boxplot.borders, fieldName: "borders", section: "boxplot", label: "Box Plot Borders", updateField: s, options: ["true", "false"] }), /* @__PURE__ */ r.createElement(Te, { value: t.boxplot.plotOutlierValues, fieldName: "plotOutlierValues", section: "boxplot", label: "Plot Outliers", updateField: s }), /* @__PURE__ */ r.createElement(Te, { value: t.boxplot.plotNonOutlierValues, fieldName: "plotNonOutlierValues", section: "boxplot", label: "Plot non-outlier values", updateField: s })), /* @__PURE__ */ r.createElement(Oe, { value: t.fontSize, fieldName: "fontSize", label: "Font Size", updateField: s, options: ["small", "medium", "large"] }), c() && /* @__PURE__ */ r.createElement(Oe, { value: t.barHasBorder, fieldName: "barHasBorder", label: "Bar Borders", updateField: s, options: ["true", "false"] }), u() && /* @__PURE__ */ r.createElement(Te, { value: t.animate, fieldName: "animate", label: "Animate Visualization", updateField: s }), (((A = t.series) == null ? void 0 : A.some((T) => T.type === "Line" || T.type === "dashed-lg" || T.type === "dashed-sm" || T.type === "dashed-md")) && t.visualizationType === "Combo" || t.visualizationType === "Line") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Oe, { value: t.lineDatapointStyle, fieldName: "lineDatapointStyle", label: "Line Datapoint Style", updateField: s, options: ["hidden", "hover", "always show"] }), /* @__PURE__ */ r.createElement(Oe, { value: t.lineDatapointColor, fieldName: "lineDatapointColor", label: "Line Datapoint Color", updateField: s, options: ["Same as Line", "Lighter than Line"] })), /* @__PURE__ */ r.createElement("label", { className: "header" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Header Theme"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, h.map((T) => /* @__PURE__ */ r.createElement(
    "button",
    {
      title: T,
      key: T,
      onClick: (O) => {
        O.preventDefault(), n({ ...t, theme: T });
      },
      className: t.theme === T ? "selected " + T : T
    }
  )))), (d() || d()) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Chart Color Palette")), x() && /* @__PURE__ */ r.createElement(no, { fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: s, value: t.isPaletteReversed }), f() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("span", null, "Sequential"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, v.map((T) => {
    const O = {
      backgroundColor: a[T][2]
    }, w = {
      backgroundColor: a[T][3]
    }, C = {
      backgroundColor: a[T][5]
    };
    return /* @__PURE__ */ r.createElement(
      "button",
      {
        title: T,
        key: T,
        onClick: (N) => {
          N.preventDefault(), n({ ...t, palette: T });
        },
        className: t.palette === T ? "selected" : ""
      },
      /* @__PURE__ */ r.createElement("span", { style: O }),
      /* @__PURE__ */ r.createElement("span", { style: w }),
      /* @__PURE__ */ r.createElement("span", { style: C })
    );
  }))), d() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("span", null, "Non-Sequential"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, S.map((T) => {
    const O = {
      backgroundColor: a[T][2]
    }, w = {
      backgroundColor: a[T][4]
    }, C = {
      backgroundColor: a[T][6]
    };
    return /* @__PURE__ */ r.createElement(
      "button",
      {
        title: T,
        key: T,
        onClick: (N) => {
          N.preventDefault(), n({ ...t, palette: T });
        },
        className: t.palette === T ? "selected" : ""
      },
      /* @__PURE__ */ r.createElement("span", { style: O }),
      /* @__PURE__ */ r.createElement("span", { style: w }),
      /* @__PURE__ */ r.createElement("span", { style: C })
    );
  })))), (t.visualizationType === "Paired Bar" || t.visualizationType === "Deviation Bar") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(no, { section: "twoColor", fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: s, value: t.twoColor.isPaletteReversed }), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, E.map((T) => {
    const O = {
      backgroundColor: i[T][0]
    }, w = {
      backgroundColor: i[T][1]
    };
    return /* @__PURE__ */ r.createElement(
      "button",
      {
        title: T,
        key: T,
        onClick: (C) => {
          C.preventDefault(), n({ ...t, twoColor: { ...t.twoColor, palette: T } });
        },
        className: t.twoColor.palette === T ? "selected" : ""
      },
      /* @__PURE__ */ r.createElement("span", { className: "two-color", style: O }),
      /* @__PURE__ */ r.createElement("span", { className: "two-color", style: w })
    );
  }))), g() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    se,
    {
      value: t.dataCutoff,
      type: "number",
      fieldName: "dataCutoff",
      className: "number-narrow",
      label: "Data Cutoff",
      updateField: s,
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Any value below the cut-off value is included in a special "less than" category. This option supports special conditions like suppressed data.')))
    }
  )), b() && t.orientation === "horizontal" && !t.isLollipopChart && t.yAxis.labelPlacement !== "On Bar" && /* @__PURE__ */ r.createElement(se, { type: "number", value: t.barHeight || "25", fieldName: "barHeight", label: " Bar Thickness", updateField: s, min: 15 }), (t.visualizationType === "Bar" && t.orientation !== "horizontal" || t.visualizationType === "Combo") && /* @__PURE__ */ r.createElement(se, { value: t.barThickness, type: "number", fieldName: "barThickness", label: "Bar Thickness", updateField: s }), y() && /* @__PURE__ */ r.createElement(se, { type: "number", value: t.barSpace || "15", fieldName: "barSpace", label: "Bar Space", updateField: s, min: 0 }), (t.visualizationType === "Bar" || t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ r.createElement(Te, { value: t.topAxis.hasLine, section: "topAxis", fieldName: "hasLine", label: "Add Top Axis Line", updateField: s }), t.visualizationType === "Spark Line" && /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ r.createElement(Te, { value: l == null ? void 0 : l.border, section: "visual", fieldName: "border", label: "Show Border", updateField: s }), /* @__PURE__ */ r.createElement(Te, { value: l == null ? void 0 : l.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: s }), /* @__PURE__ */ r.createElement(Te, { value: l == null ? void 0 : l.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: s }), /* @__PURE__ */ r.createElement(Te, { value: l == null ? void 0 : l.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: s }), /* @__PURE__ */ r.createElement(Te, { value: l == null ? void 0 : l.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: s })), (t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ r.createElement(Te, { value: t.showLineSeriesLabels, fieldName: "showLineSeriesLabels", label: "Append Series Name to End of Line Charts", updateField: s }), (t.visualizationType === "Line" || t.visualizationType === "Combo") && t.showLineSeriesLabels && /* @__PURE__ */ r.createElement(Te, { value: t.colorMatchLineSeriesLabels, fieldName: "colorMatchLineSeriesLabels", label: "Match Series Color to Name at End of Line Charts", updateField: s }), p() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Te, { value: l.verticalHoverLine, fieldName: "verticalHoverLine", section: "visual", label: "Vertical Hover Line", updateField: s }), /* @__PURE__ */ r.createElement(Te, { value: l.horizontalHoverLine, fieldName: "horizontalHoverLine", section: "visual", label: "Horizontal Hover Line", updateField: s })), m() && /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Tooltip Opacity"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "number",
      value: t.tooltips.opacity ? t.tooltips.opacity : 100,
      onChange: (T) => n({
        ...t,
        tooltips: {
          ...t.tooltips,
          opacity: T.target.value
        }
      })
    }
  )), t.visualizationType === "Bar" && /* @__PURE__ */ r.createElement(Te, { value: t.tooltips.singleSeries, fieldName: "singleSeries", section: "tooltips", label: "SHOW HOVER FOR SINGLE DATA SERIES", updateField: s }), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "No Data Message"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: t.chartMessage.noData ? t.chartMessage.noData : "",
      onChange: (T) => n({
        ...t,
        chartMessage: {
          ...t.chartMessage,
          noData: T.target.value
        }
      })
    }
  ))));
}, xn = {
  ForestPlot: Qg,
  Series: Jt,
  Regions: ux,
  General: dx,
  BoxPlot: mx,
  Visual: fx
};
z.memo(({ config: e, updateConfig: t, data: n }) => {
  const a = () => {
    const c = /* @__PURE__ */ new Set();
    return n.forEach((u) => {
      Object.keys(u).forEach((d) => {
        c.add(d);
      });
    }), [...c];
  }, i = () => ["star"];
  let l = (c) => {
    let u = [];
    e.suppressedData && (u = [...e.suppressedData]), u.splice(c, 1), t({ ...e, suppressedData: u });
  }, o = () => {
    let c = e.suppressedData ? [...e.suppressedData] : [];
    c.push({ label: "", column: "", value: "", icon: "" }), t({ ...e, suppressedData: c });
  }, s = (c, u, d) => {
    let h = [];
    e.suppressedData && (h = [...e.suppressedData]), h[d][c] = u, t({ ...e, suppressedData: h });
  };
  return /* @__PURE__ */ r.createElement(r.Fragment, null, e.suppressedData && e.suppressedData.map(({ label: c, column: u, value: d, icon: h }, m) => /* @__PURE__ */ r.createElement("div", { key: `suppressed-${m}`, className: "edit-block" }, /* @__PURE__ */ r.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: (p) => {
        p.preventDefault(), l(m);
      }
    },
    "Remove"
  ), /* @__PURE__ */ r.createElement(Oe, { value: u, initial: "Select", fieldName: "column", label: "Column", updateField: (p, y, b, g) => s(b, g, m), options: a() }), /* @__PURE__ */ r.createElement(se, { value: d, fieldName: "value", label: "Value", updateField: (p, y, b, g) => s(b, g, m) }), /* @__PURE__ */ r.createElement(Oe, { value: h, initial: "Select", fieldName: "icon", label: "Icon", updateField: (p, y, b, g) => s(b, g, m), options: i() }), /* @__PURE__ */ r.createElement(se, { value: c, fieldName: "label", label: "Label", placeholder: "suppressed", updateField: (p, y, b, g) => s(b, g, m) }))), /* @__PURE__ */ r.createElement("button", { type: "button", onClick: o, className: "btn full-width" }, "Add Suppression Class"));
});
const hx = z.memo(({ config: e, updateConfig: t, data: n }) => {
  const a = () => {
    const u = /* @__PURE__ */ new Set();
    return n.forEach((d) => {
      Object.keys(d).forEach((h) => {
        u.add(h);
      });
    }), [...u];
  }, i = () => e.visualizationType === "Line" || e.visualizationType === "Combo" ? ["effect"] : ["suppression"], l = () => {
    if (e.visualizationType === "Line" || e.visualizationType === "Combo")
      return ["Dashed Small", "Dashed Medium", "Dashed Large", "Open Circles"];
    if (e.visualizationType === "Bar")
      return ["star"];
  };
  let o = (u) => {
    let d = [];
    e.preliminaryData && (d = [...e.preliminaryData]), d.splice(u, 1), t({ ...e, preliminaryData: d });
  }, s = () => {
    let u = e.preliminaryData ? [...e.preliminaryData] : [];
    u.push({ type: "", label: "", column: "", value: "", style: "" }), t({ ...e, preliminaryData: u });
  }, c = (u, d, h) => {
    let m = [];
    e.preliminaryData && (m = [...e.preliminaryData]), m[h][u] = d, t({ ...e, preliminaryData: m });
  };
  return /* @__PURE__ */ r.createElement(r.Fragment, null, e.preliminaryData && e.preliminaryData.map(({ seriesKey: u, type: d, label: h, column: m, value: p, style: y }, b) => {
    var g;
    return /* @__PURE__ */ r.createElement("div", { key: `preliminaryData-${b}`, className: "edit-block" }, /* @__PURE__ */ r.createElement(
      "button",
      {
        type: "button",
        className: "remove-column",
        onClick: (f) => {
          f.preventDefault(), o(b);
        }
      },
      "Remove"
    ), /* @__PURE__ */ r.createElement(Oe, { value: d, initial: "Select", fieldName: "type", label: "Type", updateField: (f, x, E, v) => c(E, v, b), options: i() }), /* @__PURE__ */ r.createElement(Oe, { value: u, initial: "Select", fieldName: "seriesKey", label: "ASSOCIATE TO SERIES", updateField: (f, x, E, v) => c(E, v, b), options: (g = e.runtime) == null ? void 0 : g.seriesKeys }), /* @__PURE__ */ r.createElement(Oe, { value: m, initial: "Select", fieldName: "column", label: "COLUMN WITH CONFIGURATION VALUE", updateField: (f, x, E, v) => c(E, v, b), options: a() }), /* @__PURE__ */ r.createElement(se, { value: p, fieldName: "value", label: "VALUE TO TRIGGER", updateField: (f, x, E, v) => c(E, v, b) }), /* @__PURE__ */ r.createElement(Oe, { value: y, initial: "Select", fieldName: "style", label: "Style", updateField: (f, x, E, v) => c(E, v, b), options: l() }), /* @__PURE__ */ r.createElement(se, { value: h, fieldName: "label", label: "Label", placeholder: "", updateField: (f, x, E, v) => c(E, v, b) }));
  }), /* @__PURE__ */ r.createElement("button", { type: "button", onClick: s, className: "btn full-width" }, e.visualizationType === "Line" ? "Add Special Line" : e.visualizationType === "Bar" ? " Add Special Bar" : "Add Special Line/Bar"));
}), px = () => {
  var wa, On, Rl, Fl, Bl, Vl, Hl, Wl, Kl, Il, jl, ql, Ul, Yl, Xl, Ql, Zl, Gl;
  const { config: e, updateConfig: t, transformedData: n, loading: a, colorPalettes: i, twoColorPalette: l, unfilteredData: o, excludedData: s, isDashboard: c, setParentConfig: u, missingRequiredSections: d, isDebug: h, setFilteredData: m, lineOptions: p, rawData: y } = z.useContext(De), { minValue: b, maxValue: g, existPositiveValue: f, isAllLine: x } = zr(e, o);
  Lu(e, t);
  const E = { data: n, config: e }, { leftMax: v, rightMax: S } = Su(E), {
    headerColors: A,
    visSupportsTooltipLines: T,
    visSupportsNonSequentialPallete: O,
    visSupportsSequentialPallete: w,
    visSupportsReverseColorPalette: C,
    visHasLabelOnData: N,
    visHasNumbersOnBars: k,
    visHasAnchors: _,
    visHasBarBorders: W,
    visHasDataCutoff: F,
    visCanAnimate: V,
    visHasLegend: H,
    visHasBrushChart: U,
    visSupportsDateCategoryAxis: Y,
    visSupportsValueAxisMin: R,
    visSupportsValueAxisMax: $,
    visSupportsDateCategoryAxisLabel: j,
    visSupportsDateCategoryAxisLine: q,
    visSupportsDateCategoryAxisTicks: X,
    visSupportsDateCategoryTickRotation: ne,
    visSupportsDateCategoryNumTicks: de,
    visSupportsDateCategoryAxisPadding: Ae,
    visSupportsRegions: we,
    visSupportsFilters: G,
    visSupportsValueAxisGridLines: K,
    visSupportsValueAxisLine: ae,
    visSupportsValueAxisTicks: D,
    visSupportsValueAxisLabels: ce,
    visSupportsBarSpace: le,
    visSupportsBarThickness: pe,
    visSupportsFootnotes: he,
    visSupportsSuperTitle: Ee,
    visSupportsDataCutoff: Ce,
    visSupportsChartHeight: ke,
    visSupportsLeftValueAxis: Se,
    visSupportsTooltipOpacity: ye,
    visSupportsRankByValue: re,
    visSupportsResponsiveTicks: J,
    visSupportsDateCategoryHeight: He,
    visHasDataSuppression: me
  } = Sa(), { handleFilterOrder: Pe, filterOrderOptions: Le, filterStyleOptions: je } = Ru({ config: e, setConfig: t, filteredData: n, setFilteredData: m });
  z.useEffect(() => {
    let M = [];
    e.series && (M = e.series.map((L) => ({
      ...L,
      type: e.visualizationType === "Combo" ? "Bar" : e.visualizationType ? e.visualizationType : "Bar",
      axis: "Left"
    }))), t({
      ...e,
      series: M
    });
  }, [e.visualizationType]), z.useEffect(() => {
    e.visualizationType === "Scatter Plot" && t({
      ...e,
      xAxis: {
        ...e.xAxis,
        type: "continuous"
      }
    });
  }, []), z.useEffect(() => {
    e.visualizationType !== "Bar" && t({ ...e, tooltips: { ...e.tooltips, singleSeries: !1 } });
  }, [e.visualizationType]);
  const { hasRightAxis: Ie } = Al({ config: e, yMax: e.yAxis.size, data: e.data, updateConfig: t }), Xe = (M, L) => ({
    ...L
  }), mt = {
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
  }, at = (M) => {
    M.orientation === "horizontal" && (M.labels = !1), M.table.show === void 0 && (M.table.show = !c), M.visualizationType === "Combo" && (M.orientation = "vertical"), M.xAxis.sortDates && !M.xAxis.padding && (M.xAxis.padding = 6);
  }, te = (M, L, I, ee) => {
    if (h && console.log("#COVE: CHART: EditorPanel: section, subsection, fieldName, newValue", M, L, I, ee), M === "boxplot" && L === "legend") {
      t({
        ...e,
        [M]: {
          ...e[M],
          [L]: {
            ...e.boxplot[L],
            [I]: ee
          }
        }
      });
      return;
    }
    if (M === "boxplot" && L === "labels") {
      t({
        ...e,
        [M]: {
          ...e[M],
          [L]: {
            ...e.boxplot[L],
            [I]: ee
          }
        }
      });
      return;
    }
    if (M === "columns" && L !== "" && I !== "") {
      t({
        ...e,
        [M]: {
          ...e[M],
          [L]: {
            ...e[M][L],
            [I]: ee
          }
        }
      });
      return;
    }
    if (M === null && L === null) {
      let Yn = { ...e, [I]: ee };
      at(Yn), t(Yn);
      return;
    }
    const Je = Array.isArray(e[M]);
    let Pt = Je ? [...e[M], ee] : { ...e[M], [I]: ee };
    L !== null && (Je ? (Pt = [...e[M]], Pt[L] = { ...Pt[L], [I]: ee }) : typeof ee == "string" ? Pt[L] = ee : Pt = { ...e[M], [L]: { ...e[M][L], [I]: ee } });
    let It = { ...e, [M]: Pt };
    at(It), t(It);
  }, [$e, Be] = z.useState(!0);
  if (a)
    return null;
  z.useEffect(() => {
    var M;
    (M = e.general) != null && M.boxplot && (e.general.boxplot.firstQuartilePercentage || t({
      ...e,
      boxplot: {
        ...e.boxplot,
        firstQuartilePercentage: 25
      }
    }));
  }, [e]);
  const Lt = (M) => {
    t({
      ...e,
      lollipopShape: M
    });
  }, Ot = (M) => {
    let L = [...e.filters];
    L.splice(M, 1), t({ ...e, filters: L });
  }, Ct = (M, L, I) => {
    let ee = [...e.filters];
    ee[L][M] = I, t({ ...e, filters: ee });
  }, Gt = () => {
    let M = e.filters ? [...e.filters] : [];
    M.push({ values: [] }), t({ ...e, filters: M });
  }, rt = (M) => {
    let L = e.series ? [...e.series] : [], I = Array.from(new Set(n.map((Je) => Je[M]))), ee = [];
    I.forEach((Je) => {
      ee.push({ key: Je });
    }), e.visualizationType === "Forecasting" ? L.push({ dataKey: M, type: e.visualizationType, stages: ee, stageColumn: M, axis: "Left", tooltip: !0 }) : L.push({ dataKey: M, type: e.visualizationType, axis: "Left", tooltip: !0 }), t({ ...e, series: L });
  }, vt = (M) => {
    const L = e.series[0].dataKey, I = n.sort((Je, Pt) => Je[L] - Pt[L]), ee = M === "asc" ? I : I.reverse();
    t({ ...e }, ee);
  }, Me = (M) => {
    let L = [...e.exclusions.keys];
    L.push(M);
    let I = { ...e.exclusions, keys: L };
    t({ ...e, exclusions: I });
  }, P = (M) => {
    let L = -1, I = [...e.exclusions.keys];
    for (let ee = 0; ee < I.length; ee++)
      if (I[ee] === M) {
        L = ee;
        break;
      }
    if (L !== -1) {
      I.splice(L, 1);
      let ee = { ...e.exclusions, keys: I }, Je = { ...e, exclusions: ee };
      I.length === 0 && delete Je.exclusions.keys, t(Je);
    }
  }, ie = () => {
    let M = {};
    return o.forEach((L) => {
      Object.keys(L).forEach((I) => M[I] = !0);
    }), Object.keys(M);
  }, fe = (M = !0) => {
    let L = {};
    if (o.forEach((I) => {
      Object.keys(I).forEach((ee) => L[ee] = !0);
    }), M) {
      const { lower: I, upper: ee } = e.confidenceKeys || {};
      Object.keys(L).forEach((Je) => {
        (e.series && e.series.filter((Pt) => Pt.dataKey === Je).length > 0 || e.confidenceKeys && Object.keys(e.confidenceKeys).includes(Je) && (I && ee || I || ee) && Je !== I && Je !== ee) && delete L[Je];
      });
    }
    return Object.keys(L);
  }, ue = (M) => {
    if (!M)
      return [];
    const L = /* @__PURE__ */ new Set();
    for (let I = 0; I < M.length; I++)
      for (const [ee] of Object.entries(M[I]))
        L.add(ee);
    return Array.from(L);
  }, Ne = (M, L = !1) => {
    let I = [];
    return s.forEach((ee) => {
      I.push(ee[M]);
    }), L ? [...new Set(I)] : I;
  }, xe = () => {
    Be(!$e);
  }, oe = () => /* @__PURE__ */ r.createElement("section", { className: "waiting" }, /* @__PURE__ */ r.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ r.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ r.createElement("p", null, e.runtime.editorErrorMessage))), qe = () => {
    const M = (L) => {
      L.preventDefault();
      let I = { ...e };
      delete I.newViz, t(I);
    };
    return /* @__PURE__ */ r.createElement("section", { className: "waiting" }, /* @__PURE__ */ r.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ r.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ r.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ r.createElement("button", { className: "btn", style: { margin: "1em auto" }, disabled: d(), onClick: M }, "I'm Done")));
  }, Ge = () => {
    let M = JSON.parse(JSON.stringify(e));
    return d() === !1 && delete M.newViz, delete M.runtime, M;
  };
  z.useEffect(() => {
    if (u) {
      const M = Ge();
      u(M);
    }
  }, [e]), z.useEffect(() => {
    const M = e.xAxis.anchors.length > 0 ? e.xAxis.anchors : [], L = e.yAxis.anchors.length > 0 ? e.yAxis.anchors : [];
    t({
      ...e,
      xAxis: {
        ...e.xAxis,
        anchors: L
      },
      yAxis: {
        ...e.yAxis,
        anchors: M
      }
    });
  }, [e.orientation]), z.useEffect(() => {
    e.visualizationType === "Paired Bar" && t({
      ...e,
      orientation: "horizontal"
    });
  }, []), z.useEffect(() => {
    e.orientation === "horizontal" && t({
      ...e,
      lollipopShape: e.lollipopShape
    });
  }, [e.isLollipopChart, e.lollipopShape]), z.useEffect(() => {
    e.visualizationType === "Deviation Bar" && t({ ...e, orientation: "horizontal" });
  }, [e.visualizationType]);
  const bt = z.useCallback(() => {
    const M = [...e.exclusions.keys];
    return /* @__PURE__ */ r.createElement("ul", { className: "series-list" }, M.map((L, I) => /* @__PURE__ */ r.createElement("li", { key: L }, /* @__PURE__ */ r.createElement("div", { className: "series-list__name", "data-title": L }, /* @__PURE__ */ r.createElement("div", { className: "series-list__name--text" }, L)), /* @__PURE__ */ r.createElement("button", { className: "series-list__remove", onClick: () => P(L) }, "×"))));
  }, [e]), Et = (M, L) => {
    let I = e.series, [ee] = I.splice(M, 1);
    I.splice(L, 0, ee), t({ ...e, series: I });
  };
  e.isLollipopChart && ((wa = e == null ? void 0 : e.series) == null ? void 0 : wa.length) > 1 && (e.runtime.editorErrorMessage = "Lollipop charts must use only one data series"), e.visualizationType === "Paired Bar" && ((On = e == null ? void 0 : e.series) == null ? void 0 : On.length) !== 2 && (e.runtime.editorErrorMessage = "Paired Bar charts must use exactly two data series"), e.visualizationType === "Deviation Bar" && ((Rl = e == null ? void 0 : e.series) == null ? void 0 : Rl.length) !== 1 && (e.runtime.editorErrorMessage = "Deviation Bar charts must use exactly one data series"), e.isLollipopChart && ((Fl = e == null ? void 0 : e.series) == null ? void 0 : Fl.length) === 0 && (e.runtime.editorErrorMessage = "Add a data series");
  const tt = e.orientation === "horizontal" ? "xAxis" : "yAxis", [Ve, Z] = z.useState({ maxMsg: "", minMsg: "", rightMaxMessage: "", minMsgRight: "" }), ge = () => {
    const M = e[tt].max, L = e[tt].rightMax;
    let I = "", ee = "";
    if (e.visualizationType !== "Combo")
      switch (!0) {
        case (M && parseFloat(M) < parseFloat(g) && f):
          I = "Max value must be more than " + g;
          break;
        case (M && parseFloat(M) < 0 && !f):
          I = "Value must be more than or equal to 0";
          break;
        default:
          I = "";
      }
    if (e.visualizationType === "Combo")
      switch (!0) {
        case (M && parseFloat(M) < v):
          I = "Max value must be more than " + v;
          break;
        case (L && parseFloat(L) < S):
          ee = "Max value must be more than " + S;
          break;
        case (M && parseFloat(M) < 0 && !f):
          I = "Value must be more than or equal to 0";
          break;
        default:
          I = "";
      }
    Z((Je) => ({ ...Je, maxMsg: I, rightMaxMessage: ee }));
  }, ze = () => {
    const M = parseFloat(e[tt].min);
    let L = Number(b), I = "";
    switch (!0) {
      case (e.useLogScale && ["Line", "Combo", "Bar"].includes(e.visualizationType) && M < 0):
        I = "Negative numbers are not supported in logarithmic scale";
        break;
      case ((e.visualizationType === "Line" || e.visualizationType === "Spark Line") && M > L):
        I = "Value should not exceed " + b;
        break;
      case (e.visualizationType === "Combo" && x && M > L):
        I = "Value should not exceed " + b;
        break;
      case ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && !x) && L > 0 && M > 0):
        I = e.useLogScale ? "Value must be equal to 0" : "Value must be less than or equal to 0";
        break;
      case (e.visualizationType === "Deviation Bar" && M >= Math.min(L, e.xAxis.target)):
        I = "Value must be less than " + Math.min(L, e.xAxis.target);
        break;
      case (e.visualizationType !== "Deviation Bar" && M && L < 0 && M > L):
        I = "Value should not exceed " + b;
        break;
      default:
        I = "";
    }
    Z((ee) => ({ ...ee, minMsg: I }));
  };
  z.useEffect(() => {
    ze(), ge();
  }, [b, g, e]);
  const be = ((Bl = e == null ? void 0 : e.dataKey) == null ? void 0 : Bl.includes("http://")) || ((Vl = e == null ? void 0 : e.dataKey) == null ? void 0 : Vl.includes("https://")), Qe = () => {
    var M, L;
    if (h !== void 0 && h && !((M = e == null ? void 0 : e.xAxis) != null && M.dataKey)) {
      let I = fe(!1);
      if (I.includes("Date"))
        return "Date";
      if (I.includes("Race"))
        return "Race";
      if (I.includes("Month"))
        return "Month";
    }
    return ((L = e == null ? void 0 : e.xAxis) == null ? void 0 : L.dataKey) || "";
  }, ot = () => {
    if (h !== void 0 && h && fe(!1).length > 0) {
      let M = fe(!1).filter((L) => L !== Qe());
      if (M.length > 0)
        return M[0];
    }
    return "";
  };
  if (h && !e.xAxis.dataKey && (e.xAxis.dataKey = Qe()), h && ((Hl = e == null ? void 0 : e.series) == null ? void 0 : Hl.length) === 0) {
    let M = ot();
    M !== "" && rt(M), h && console.log("### COVE DEBUG: Chart: Setting default datacol=", M);
  }
  const pt = ["Area Chart", "Combo", "Line", "Bar", "Forecasting", "Scatter Plot", "Paired Bar", "Deviation Bar"], At = [
    /* @__PURE__ */ r.createElement("option", { value: "", key: "Select Option" }, "- Select Option -")
  ];
  if (e.data && e.series) {
    Object.keys(((Wl = e.data) == null ? void 0 : Wl[0]) || []).map((L) => {
      const I = e == null ? void 0 : e.series.some((ee) => ee.dataKey === L);
      if (L !== e.xAxis.dataKey && !I)
        return At.push(
          /* @__PURE__ */ r.createElement("option", { value: L, key: L }, L)
        );
    });
    let M = {};
    e.data.forEach((L) => {
      Object.keys(L).forEach((I) => {
        M[I] = M[I] || [];
        const ee = typeof L[I] == "number" ? L[I].toString() : L[I];
        M[I].indexOf(ee) === -1 && M[I].push(ee);
      });
    });
  }
  if (!e.data && n) {
    if (!n[0])
      return;
    Object.keys(n[0]).map((L) => {
      const I = n.some((ee) => ee.dataKey === L);
      if (L !== e.xAxis.dataKey && !I)
        return At.push(
          /* @__PURE__ */ r.createElement("option", { value: L, key: L }, L)
        );
    });
    let M = {};
    n.forEach((L) => {
      Object.keys(L).forEach((I) => {
        M[I] = M[I] || [];
        const ee = typeof L[I] == "number" ? L[I].toString() : L[I];
        M[I].indexOf(ee) === -1 && M[I].push(ee);
      });
    });
  }
  const St = Object.keys(e.columns).filter((M) => [e.xAxis.dataKey].includes(M) !== !0), it = (M) => {
    const L = `additionalColumn${M}`;
    t({
      ...e,
      columns: {
        ...e.columns,
        [L]: {
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
  }, Tt = (M) => {
    const L = e.columns;
    delete L[M], t({
      ...e,
      columns: L
    });
  }, yt = async (M, L, I) => {
    switch (L) {
      case "name":
        t({
          ...e,
          columns: {
            ...e.columns,
            [M]: {
              ...e.columns[M],
              [L]: I
            }
          }
        });
        break;
      default:
        t({
          ...e,
          columns: {
            ...e.columns,
            [M]: {
              ...e.columns[M],
              [L]: I
            }
          }
        });
        break;
    }
  }, {
    highlightedBarValues: Wt,
    highlightedSeriesValues: nt,
    handleUpdateHighlightedBar: Mt,
    handleAddNewHighlightedBar: Ue,
    handleRemoveHighlightedBar: Kt,
    handleUpdateHighlightedBarColor: Ta,
    handleHighlightedBarLegendLabel: Ln,
    handleUpdateHighlightedBorderWidth: ka
  } = _r(e, t), Fr = (M, L) => {
    let I = e.columns;
    I[M].tooltips = L, t({
      ...e,
      columns: I
    });
  }, Br = {
    addNewExclusion: Me,
    data: n,
    editColumn: yt,
    getColumns: fe,
    getDataValueOptions: ue,
    getDataValues: Ne,
    getItemStyle: Xe,
    handleSeriesChange: Et,
    handleAddNewHighlightedBar: Ue,
    setCategoryAxis: Qe,
    sortSeries: vt,
    updateField: te,
    warningMsg: Ve,
    highlightedBarValues: Wt,
    handleHighlightedBarLegendLabel: Ln,
    handleUpdateHighlightedBar: Mt,
    handleRemoveHighlightedBar: Kt,
    isPaletteReversed: e.isPaletteReversed,
    highlightedSeriesValues: nt,
    handleUpdateHighlightedBorderWidth: ka,
    handleUpdateHighlightedBarColor: Ta,
    setLollipopShape: Lt
  };
  return /* @__PURE__ */ r.createElement(Nu.Provider, { value: Br }, /* @__PURE__ */ r.createElement(Ht, { component: "EditorPanel" }, e.newViz && /* @__PURE__ */ r.createElement(qe, null), e.newViz === void 0 && e.runtime && ((Kl = e.runtime) == null ? void 0 : Kl.editorErrorMessage) && /* @__PURE__ */ r.createElement(oe, null), /* @__PURE__ */ r.createElement("button", { className: $e ? "editor-toggle" : "editor-toggle collapsed", title: $e ? "Collapse Editor" : "Expand Editor", onClick: xe }), /* @__PURE__ */ r.createElement("section", { className: `${$e ? "editor-panel cove" : "hidden editor-panel cove"}${c ? " dashboard" : ""}` }, /* @__PURE__ */ r.createElement("div", { "aria-level": 2, role: "heading", className: "heading-2" }, "Configure Chart"), /* @__PURE__ */ r.createElement("section", { className: "form-container" }, /* @__PURE__ */ r.createElement(An, { allowZeroExpanded: !0 }, /* @__PURE__ */ r.createElement(xn.General, { name: "General" }), /* @__PURE__ */ r.createElement(xn.ForestPlot, { name: "Forest Plot Settings" }), e.visualizationType !== "Pie" && e.visualizationType !== "Forest Plot" && /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement(ct, null, /* @__PURE__ */ r.createElement(ut, null, "Data Series ", (!e.series || e.series.length === 0 || e.visualizationType === "Paired Bar" && e.series.length < 2) && /* @__PURE__ */ r.createElement(Ua, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(dt, null, (!e.series || e.series.length === 0) && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement("p", { className: "warning" }, "At least one series is required"), (!e.series || e.series.length === 0 || e.series.length < 2) && e.visualizationType === "Paired Bar" && /* @__PURE__ */ r.createElement("p", { className: "warning" }, "Select two data series for paired bar chart (e.g., Male and Female)."), /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    Oe,
    {
      fieldName: "visualizationType",
      label: "Add Data Series",
      initial: "Select",
      onChange: (M) => {
        M.target.value !== "" && M.target.value !== "Select" && rt(M.target.value), M.target.value = "";
      },
      options: fe()
    }
  ), e.series && e.series.length !== 0 && /* @__PURE__ */ r.createElement(xn.Series.Wrapper, { getColumns: fe }, /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("legend", { className: "edit-label float-left" }, "Displaying"), /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "A data series is a set of related data points plotted in a chart and typically represented in the chart legend.")))), /* @__PURE__ */ r.createElement(ao, { onDragEnd: ({ source: M, destination: L }) => Et(M.index, L.index) }, /* @__PURE__ */ r.createElement(ro, { droppableId: "filter_order" }, (M) => /* @__PURE__ */ r.createElement("ul", { ...M.droppableProps, className: "series-list", ref: M.innerRef }, /* @__PURE__ */ r.createElement(xn.Series.List, { series: e.series, getItemStyle: Xe, sortableItemStyles: mt, chartsWithOptions: pt }), M.placeholder))))), e.series && e.series.length <= 1 && e.visualizationType === "Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("span", { className: "divider-heading" }, "Confidence Keys"), /* @__PURE__ */ r.createElement(Oe, { value: e.confidenceKeys.upper || "", section: "confidenceKeys", fieldName: "upper", label: "Upper", updateField: te, initial: "Select", options: fe() }), /* @__PURE__ */ r.createElement(Oe, { value: e.confidenceKeys.lower || "", section: "confidenceKeys", fieldName: "lower", label: "Lower", updateField: te, initial: "Select", options: fe() })), re() && e.series && e.series.length === 1 && /* @__PURE__ */ r.createElement(Oe, { fieldName: "visualizationType", label: "Rank by Value", initial: "Select", onChange: (M) => vt(M.target.value), options: ["asc", "desc"] }), e.visualizationType === "Line" && /* @__PURE__ */ r.createElement(hx, { config: e, updateConfig: t, data: n }))), /* @__PURE__ */ r.createElement(xn.BoxPlot, { name: "Measures" }), Se() && /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement(ct, null, /* @__PURE__ */ r.createElement(ut, null, e.visualizationType === "Pie" ? "Data Format" : e.orientation === "vertical" ? "Left Value Axis" : "Value Axis", e.visualizationType === "Pie" && !e.yAxis.dataKey && /* @__PURE__ */ r.createElement(Ua, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(dt, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement(
    Oe,
    {
      value: e.yAxis.dataKey || "",
      section: "yAxis",
      fieldName: "dataKey",
      label: "Data Column",
      initial: "Select",
      required: !0,
      updateField: te,
      options: fe(!1),
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select the source data to be visually represented.")))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(se, { value: e.yAxis.label, section: "yAxis", fieldName: "label", label: "Label ", updateField: te }), e.runtime.seriesKeys && e.runtime.seriesKeys.length === 1 && !["Box Plot", "Deviation Bar", "Forest Plot"].includes(e.visualizationType) && /* @__PURE__ */ r.createElement(Te, { value: e.isLegendValue, fieldName: "isLegendValue", label: "Use Legend Value in Hover", updateField: te }), /* @__PURE__ */ r.createElement(se, { value: e.yAxis.numTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "numTicks", label: "Number of ticks", className: "number-narrow", updateField: te }), e.visualizationType === "Paired Bar" && /* @__PURE__ */ r.createElement(se, { value: e.yAxis.tickRotation || 0, type: "number", min: 0, section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: te }), /* @__PURE__ */ r.createElement(
    se,
    {
      value: e.yAxis.size,
      type: "number",
      section: "yAxis",
      fieldName: "size",
      label: e.orientation === "horizontal" ? "Size (Height)" : "Size (Width)",
      className: "number-narrow",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, `Increase the size if elements in the ${e.orientation} axis are being crowded or hidden behind other elements.  Decrease if less space is required for the value axis.`)))
    }
  ), e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(Te, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: te }), (e.orientation === "vertical" || !e.isResponsiveTicks) && /* @__PURE__ */ r.createElement(se, { value: e.yAxis.tickRotation, type: "number", min: 0, section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: te }), e.isResponsiveTicks && e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(
    se,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" && /* @__PURE__ */ r.createElement(se, { value: e.xAxis.labelOffset, section: "xAxis", fieldName: "labelOffset", label: "Label offset", type: "number", className: "number-narrow", updateField: te }), K() && /* @__PURE__ */ r.createElement(Te, { value: e.yAxis.gridLines, section: "yAxis", fieldName: "gridLines", label: "Show Gridlines", updateField: te }), /* @__PURE__ */ r.createElement(Te, { value: e.yAxis.enablePadding, section: "yAxis", fieldName: "enablePadding", label: "Add Padding to Value Axis Scale", updateField: te }), e.yAxis.enablePadding && /* @__PURE__ */ r.createElement(se, { type: "number", section: "yAxis", fieldName: "scalePadding", label: "Padding Percentage", className: "number-narrow", updateField: te, value: e.yAxis.scalePadding }), e.visualizationSubType === "regular" && e.visualizationType !== "Forest Plot" && /* @__PURE__ */ r.createElement(Te, { value: e.useLogScale, fieldName: "useLogScale", label: "use logarithmic scale", updateField: te })), /* @__PURE__ */ r.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ r.createElement(Te, { value: e.dataFormat.commas, section: "dataFormat", fieldName: "commas", label: "Add commas", updateField: te }), /* @__PURE__ */ r.createElement(
    Te,
    {
      value: e.dataFormat.abbreviated,
      section: "dataFormat",
      fieldName: "abbreviated",
      label: "Abbreviate Axis Values",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  ), /* @__PURE__ */ r.createElement(se, { value: e.dataFormat.roundTo ? e.dataFormat.roundTo : 0, type: "number", section: "dataFormat", fieldName: "roundTo", label: "Round to decimal point", className: "number-narrow", updateField: te, min: 0 }), /* @__PURE__ */ r.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ r.createElement(
    se,
    {
      value: e.dataFormat.prefix,
      section: "dataFormat",
      fieldName: "prefix",
      label: "Prefix",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Q.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    se,
    {
      value: e.dataFormat.suffix,
      section: "dataFormat",
      fieldName: "suffix",
      label: "Suffix",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Q.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), e.orientation === "horizontal" ? (
    // horizontal - x is vertical y is horizontal
    /* @__PURE__ */ r.createElement(r.Fragment, null, ae() && /* @__PURE__ */ r.createElement(Te, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: te }), ce() && /* @__PURE__ */ r.createElement(Te, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Label", updateField: te }), D() && /* @__PURE__ */ r.createElement(Te, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: te }), $() && /* @__PURE__ */ r.createElement(se, { value: e.xAxis.max, section: "xAxis", fieldName: "max", label: "max value", type: "number", placeholder: "Auto", updateField: te }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, Ve.maxMsg), R() && /* @__PURE__ */ r.createElement(se, { value: e.xAxis.min, section: "xAxis", fieldName: "min", type: "number", label: "min value", placeholder: "Auto", updateField: te }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, Ve.minMsg), e.visualizationType === "Deviation Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(se, { value: e.xAxis.target, section: "xAxis", fieldName: "target", type: "number", label: "Deviation point", placeholder: "Auto", updateField: te }), /* @__PURE__ */ r.createElement(se, { value: e.xAxis.targetLabel || "Target", section: "xAxis", fieldName: "targetLabel", type: "text", label: "Deviation point Label", updateField: te }), /* @__PURE__ */ r.createElement(Te, { value: e.xAxis.showTargetLabel, section: "xAxis", fieldName: "showTargetLabel", label: "Show Deviation point label", updateField: te })))
  ) : e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Te, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: te }), /* @__PURE__ */ r.createElement(Te, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Label", updateField: te }), /* @__PURE__ */ r.createElement(Te, { value: e.yAxis.hideTicks, section: "yAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: te }), /* @__PURE__ */ r.createElement(se, { value: e.yAxis.max, section: "yAxis", fieldName: "max", type: "number", label: "left axis max value", placeholder: "Auto", updateField: te }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, Ve.maxMsg), /* @__PURE__ */ r.createElement(se, { value: e.yAxis.min, section: "yAxis", fieldName: "min", type: "number", label: "left axis min value", placeholder: "Auto", updateField: te }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, Ve.minMsg)), _() && e.orientation !== "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(An, { allowZeroExpanded: !0 }, (jl = (Il = e.yAxis) == null ? void 0 : Il.anchors) == null ? void 0 : jl.map((M, L) => /* @__PURE__ */ r.createElement(st, { className: "series-item series-item--chart", key: `yaxis-anchors-2-${L}` }, /* @__PURE__ */ r.createElement(ct, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ut, { className: "accordion__button accordion__button" }, "Anchor ", L + 1, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (I) => {
        I.preventDefault();
        const ee = [...e.yAxis.anchors];
        ee.splice(L, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: ee
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ r.createElement(dt, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[L].value ? e.yAxis.anchors[L].value : "",
      onChange: (I) => {
        I.preventDefault();
        const ee = [...e.yAxis.anchors];
        ee[L].value = I.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: ee
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Color"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[L].color ? e.yAxis.anchors[L].color : "",
      onChange: (I) => {
        I.preventDefault();
        const ee = [...e.yAxis.anchors];
        ee[L].color = I.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: ee
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.yAxis.anchors[L].lineStyle || "",
      onChange: (I) => {
        const ee = [...e.yAxis.anchors];
        ee[L].lineStyle = I.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: ee
          }
        });
      }
    },
    /* @__PURE__ */ r.createElement("option", null, "Select"),
    p.map((I) => /* @__PURE__ */ r.createElement("option", { key: I.key }, I.value))
  )))))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (M) => {
        M.preventDefault();
        const L = [...e.yAxis.anchors];
        L.push({}), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: L
          }
        });
      }
    },
    "Add Anchor"
  )), _() && e.orientation === "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(An, { allowZeroExpanded: !0 }, (Ul = (ql = e.xAxis) == null ? void 0 : ql.anchors) == null ? void 0 : Ul.map((M, L) => /* @__PURE__ */ r.createElement(st, { className: "series-item series-item--chart", key: `xaxis-anchors-${L}` }, /* @__PURE__ */ r.createElement(ct, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ut, { className: "accordion__button accordion__button" }, "Anchor ", L + 1, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (I) => {
        I.preventDefault();
        const ee = [...e.xAxis.anchors];
        ee.splice(L, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: ee
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ r.createElement(dt, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[L].value ? e.xAxis.anchors[L].value : "",
      onChange: (I) => {
        I.preventDefault();
        const ee = [...e.xAxis.anchors];
        ee[L].value = I.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: ee
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Color"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[L].color ? e.xAxis.anchors[L].color : "",
      onChange: (I) => {
        I.preventDefault();
        const ee = [...e.xAxis.anchors];
        ee[L].color = I.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: ee
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.xAxis.anchors[L].lineStyle || "",
      onChange: (I) => {
        const ee = [...e.xAxis.anchors];
        ee[L].lineStyle = I.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: ee
          }
        });
      }
    },
    /* @__PURE__ */ r.createElement("option", null, "Select"),
    p.map((I) => /* @__PURE__ */ r.createElement("option", { key: I.key }, I.value))
  )))))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (M) => {
        M.preventDefault();
        const L = [...e.xAxis.anchors];
        L.push({}), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: L
          }
        });
      }
    },
    "Add Anchor"
  )))), Ie && /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement(ct, null, /* @__PURE__ */ r.createElement(ut, null, "Right Value Axis")), /* @__PURE__ */ r.createElement(dt, null, /* @__PURE__ */ r.createElement(se, { value: e.yAxis.rightLabel, section: "yAxis", fieldName: "rightLabel", label: "Label", updateField: te }), /* @__PURE__ */ r.createElement(se, { value: e.yAxis.rightNumTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "rightNumTicks", label: "Number of ticks", className: "number-narrow", updateField: te }), /* @__PURE__ */ r.createElement(se, { value: e.yAxis.rightAxisSize, type: "number", section: "yAxis", fieldName: "rightAxisSize", label: "Size (Width)", className: "number-narrow", updateField: te }), /* @__PURE__ */ r.createElement(se, { value: e.yAxis.rightLabelOffsetSize, type: "number", section: "yAxis", fieldName: "rightLabelOffsetSize", label: "Label Offset", className: "number-narrow", updateField: te }), /* @__PURE__ */ r.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ r.createElement(Te, { value: e.dataFormat.rightCommas, section: "dataFormat", fieldName: "rightCommas", label: "Add commas", updateField: te }), /* @__PURE__ */ r.createElement(se, { value: e.dataFormat.rightRoundTo, type: "number", section: "dataFormat", fieldName: "rightRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: te, min: 0 }), /* @__PURE__ */ r.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ r.createElement(
    se,
    {
      value: e.dataFormat.rightPrefix,
      section: "dataFormat",
      fieldName: "rightPrefix",
      label: "Prefix",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Q.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    se,
    {
      value: e.dataFormat.rightSuffix,
      section: "dataFormat",
      fieldName: "rightSuffix",
      label: "Suffix",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Q.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), /* @__PURE__ */ r.createElement(Te, { value: e.yAxis.rightHideAxis, section: "yAxis", fieldName: "rightHideAxis", label: "Hide Axis", updateField: te }), /* @__PURE__ */ r.createElement(Te, { value: e.yAxis.rightHideLabel, section: "yAxis", fieldName: "rightHideLabel", label: "Hide Label", updateField: te }), /* @__PURE__ */ r.createElement(Te, { value: e.yAxis.rightHideTicks, section: "yAxis", fieldName: "rightHideTicks", label: "Hide Ticks", updateField: te }), /* @__PURE__ */ r.createElement(se, { value: e.yAxis.max, section: "yAxis", fieldName: "rightMax", type: "number", label: "right axis max value", placeholder: "Auto", updateField: te }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, Ve.rightMaxMessage), /* @__PURE__ */ r.createElement(se, { value: e.yAxis.min, section: "yAxis", fieldName: "rightMin", type: "number", label: "right axis min value", placeholder: "Auto", updateField: te }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, Ve.minMsg))), Y() && /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement(ct, null, /* @__PURE__ */ r.createElement(ut, null, e.visualizationType === "Pie" ? "Segments" : "Date/Category Axis", !e.xAxis.dataKey && /* @__PURE__ */ r.createElement(Ua, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(dt, null, e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, e.visualizationType !== "Forest Plot" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Oe, { value: e.xAxis.type, section: "xAxis", fieldName: "type", label: "Data Type", updateField: te, options: e.visualizationType !== "Scatter Plot" ? ["categorical", "date"] : ["categorical", "continuous", "date"] }), (e.visualizationType === "Bar" || e.visualizationType === "Line" || e.visualizationType === "Combo" || e.visualizationType === "Area Chart") && e.xAxis.type === "date" && e.orientation !== "horizontal" && /* @__PURE__ */ r.createElement(Te, { value: e.xAxis.sortDates, section: "xAxis", fieldName: "sortDates", label: "Force Date Scale (Sort Dates)", updateField: te }), " ", Ae() && /* @__PURE__ */ r.createElement(
    se,
    {
      value: e.xAxis.padding,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "padding",
      label: "Padding (Percent)",
      className: "number-narrow",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "For use with date scale. Extends the earliest and latest dates represented on the scale by the percentage specified.")))
    }
  )), /* @__PURE__ */ r.createElement(
    Oe,
    {
      value: e.xAxis.dataKey || Qe() || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Data Key",
      initial: "Select",
      required: !0,
      updateField: te,
      options: fe(!1),
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
    }
  )), e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement(
    Oe,
    {
      value: e.xAxis.dataKey || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Segment Labels",
      initial: "Select",
      required: !0,
      updateField: te,
      options: fe(!1),
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Select the source row or column that contains the segment labels. Depending on the data structure, it may be listed as "Key."')))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(se, { value: e.xAxis.label, section: "xAxis", fieldName: "label", label: "Label", updateField: te }), e.xAxis.type === "continuous" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    se,
    {
      value: e.dataFormat.bottomPrefix,
      section: "dataFormat",
      fieldName: "bottomPrefix",
      label: "Prefix",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    se,
    {
      value: e.dataFormat.bottomSuffix,
      section: "dataFormat",
      fieldName: "bottomSuffix",
      label: "Suffix",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    Te,
    {
      value: e.dataFormat.bottomAbbreviated,
      section: "dataFormat",
      fieldName: "bottomAbbreviated",
      label: "Abbreviate Axis Values",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  )), e.xAxis.type === "date" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("p", { style: { padding: "1.5em 0 0.5em", fontSize: ".9rem", lineHeight: "1rem" } }, "Format how charts should parse and display your dates using", " ", /* @__PURE__ */ r.createElement("a", { href: "https://github.com/d3/d3-time-format#locale_format", target: "_blank", rel: "noreferrer" }, "these guidelines"), "."), /* @__PURE__ */ r.createElement(
    se,
    {
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "This field specifies the pattern used to read and interpret dates in your dataset, ensuring the dates are correctly understood and processed. "))),
      value: e.xAxis.dateParseFormat,
      section: "xAxis",
      fieldName: "dateParseFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "Date Parse Format",
      updateField: te
    }
  ), /* @__PURE__ */ r.createElement(
    se,
    {
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, " Adjusts the date display format on the axis for clear, visual date representation."))),
      value: e.xAxis.dateDisplayFormat,
      section: "xAxis",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "AXIS DATE DISPLAY FORMAT",
      updateField: te
    }
  ), /* @__PURE__ */ r.createElement(
    se,
    {
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "Specify a custom format for displaying dates in data table. If left empty, dates will adopt the Axis Date Display format. "))),
      value: e.table.dateDisplayFormat,
      section: "table",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "DATA TABLE DATE DISPLAY FORMAT",
      updateField: te
    }
  ), /* @__PURE__ */ r.createElement(
    se,
    {
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "Specify a custom format for displaying dates on hovers. If left empty, dates will adopt the Axis Date Display format. "))),
      value: e.tooltips.dateDisplayFormat,
      section: "tooltips",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "HOVER DATE DISPLAY FORMAT",
      updateField: te
    }
  )), /* @__PURE__ */ r.createElement(
    Te,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: e.xAxis.type === "date" ? "Limit by start and/or end dates" : "Exclude one or more values",
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "When this option is checked, you can select source-file values for exclusion from the date/category axis. "))),
      updateField: te
    }
  ), e.exclusions.active && /* @__PURE__ */ r.createElement(r.Fragment, null, e.xAxis.type === "categorical" && /* @__PURE__ */ r.createElement(r.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ r.createElement(bt, null)), /* @__PURE__ */ r.createElement(
    Oe,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (M) => {
        M.target.value !== "" && M.target.value !== "Select" && Me(M.target.value), M.target.value = "";
      },
      options: Ne(e.xAxis.dataKey, !0)
    }
  )), e.xAxis.type === "date" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(se, { type: "date", section: "exclusions", fieldName: "dateStart", label: "Start Date", updateField: te, value: e.exclusions.dateStart || "" }), /* @__PURE__ */ r.createElement(se, { type: "date", section: "exclusions", fieldName: "dateEnd", label: "End Date", updateField: te, value: e.exclusions.dateEnd || "" }))), de() && /* @__PURE__ */ r.createElement(se, { value: e.xAxis.numTicks, placeholder: "Auto", type: "number", min: 1, section: "xAxis", fieldName: "numTicks", label: "Number of ticks", className: "number-narrow", updateField: te }), He() && /* @__PURE__ */ r.createElement(se, { value: e.xAxis.size, type: "number", min: 0, section: "xAxis", fieldName: "size", label: e.orientation === "horizontal" ? "Size (Width)" : "Size (Height)", className: "number-narrow", updateField: te }), Ae() && /* @__PURE__ */ r.createElement(se, { value: e.xAxis.padding, type: "number", min: 0, section: "xAxis", fieldName: "padding", label: "Padding (Percent)", className: "number-narrow", updateField: te }), (e.xAxis.type === "continuous" || e.forestPlot.type === "Logarithmic") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Te, { value: e.dataFormat.bottomCommas, section: "dataFormat", fieldName: "bottomCommas", label: "Add commas", updateField: te }), /* @__PURE__ */ r.createElement(se, { value: e.dataFormat.bottomRoundTo, type: "number", section: "dataFormat", fieldName: "bottomRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: te, min: 0 })), J() && e.orientation === "vertical" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(Te, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: te }), (e.orientation === "horizontal" || !e.isResponsiveTicks) && ne() && /* @__PURE__ */ r.createElement(se, { value: e.xAxis.tickRotation, type: "number", min: 0, section: "xAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: te }), e.orientation === "vertical" && e.isResponsiveTicks && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(
    se,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" ? /* @__PURE__ */ r.createElement(r.Fragment, null, q() && /* @__PURE__ */ r.createElement(Te, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: te }), j() && /* @__PURE__ */ r.createElement(Te, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Label", updateField: te })) : /* @__PURE__ */ r.createElement(r.Fragment, null, q() && /* @__PURE__ */ r.createElement(Te, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: te }), j() && /* @__PURE__ */ r.createElement(Te, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Label", updateField: te }), X() && /* @__PURE__ */ r.createElement(Te, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: te })), ((Yl = e.series) == null ? void 0 : Yl.length) === 1 && e.visualizationType === "Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", { htmlFor: "barHighlight" }, "Bar Highlighting"), e.series.length === 1 && Wt.map((M, L) => /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("div", { className: "edit-block", key: `highlighted-bar-${L}` }, /* @__PURE__ */ r.createElement("button", { className: "remove-column", onClick: (I) => Kt(I, L) }, "Remove"), /* @__PURE__ */ r.createElement("p", null, "Highlighted Bar ", L + 1), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Value"), /* @__PURE__ */ r.createElement("select", { value: e.highlightedBarValues[L].value, onChange: (I) => Mt(I, L) }, /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Value -"), nt && [...new Set(nt)].sort().map((I) => /* @__PURE__ */ r.createElement("option", { key: `special-class-value-option-${L}-${I}` }, I)))), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Color"), /* @__PURE__ */ r.createElement("input", { type: "text", value: e.highlightedBarValues[L].color ? e.highlightedBarValues[L].color : "", onChange: (I) => Ta(I, L) })), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Border Width"), /* @__PURE__ */ r.createElement("input", { max: "5", min: "0", type: "number", value: e.highlightedBarValues[L].borderWidth ? e.highlightedBarValues[L].borderWidth : "", onChange: (I) => ka(I, L) })), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Legend Label"), /* @__PURE__ */ r.createElement("input", { type: "text", value: e.highlightedBarValues[L].legendLabel ? e.highlightedBarValues[L].legendLabel : "", onChange: (I) => Ln(I, L) }))))), /* @__PURE__ */ r.createElement("button", { className: "btn full-width", onClick: (M) => Ue(M) }, "Add Highlighted Bar"))), e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    Te,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: "Exclude one or more values",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "When this option is checked, you can select values for exclusion from the pie segments.")))
    }
  ), e.exclusions.active && /* @__PURE__ */ r.createElement(r.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ r.createElement(bt, null)), /* @__PURE__ */ r.createElement(
    Oe,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (M) => {
        M.target.value !== "" && M.target.value !== "Select" && Me(M.target.value), M.target.value = "";
      },
      options: Ne(e.xAxis.dataKey, !0)
    }
  ))), _() && e.orientation !== "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(An, { allowZeroExpanded: !0 }, (Ql = (Xl = e.xAxis) == null ? void 0 : Xl.anchors) == null ? void 0 : Ql.map((M, L) => /* @__PURE__ */ r.createElement(st, { className: "series-item series-item--chart", key: `xaxis-anchors-2-${L}` }, /* @__PURE__ */ r.createElement(ct, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ut, { className: "accordion__button accordion__button" }, "Anchor ", L + 1, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (I) => {
        I.preventDefault();
        const ee = [...e.xAxis.anchors];
        ee.splice(L, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: ee
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ r.createElement(dt, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[L].value ? e.xAxis.anchors[L].value : "",
      onChange: (I) => {
        I.preventDefault();
        const ee = [...e.xAxis.anchors];
        ee[L].value = I.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: ee
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Color"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[L].color ? e.xAxis.anchors[L].color : "",
      onChange: (I) => {
        I.preventDefault();
        const ee = [...e.xAxis.anchors];
        ee[L].color = I.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: ee
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.xAxis.anchors[L].lineStyle || "",
      onChange: (I) => {
        const ee = [...e.xAxis.anchors];
        ee[L].lineStyle = I.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: ee
          }
        });
      }
    },
    /* @__PURE__ */ r.createElement("option", null, "Select"),
    p.map((I) => /* @__PURE__ */ r.createElement("option", { key: I.key }, I.value))
  )))))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (M) => {
        M.preventDefault();
        const L = [...e.xAxis.anchors];
        L.push({}), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: L
          }
        });
      }
    },
    "Add Anchor"
  )), _() && e.orientation === "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(An, { allowZeroExpanded: !0 }, (Gl = (Zl = e.yAxis) == null ? void 0 : Zl.anchors) == null ? void 0 : Gl.map((M, L) => /* @__PURE__ */ r.createElement(st, { className: "series-item series-item--chart", key: `accordion-yaxis-anchors-${L}` }, /* @__PURE__ */ r.createElement(ct, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ut, { className: "accordion__button accordion__button" }, "Anchor ", L + 1, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (I) => {
        I.preventDefault();
        const ee = [...e.yAxis.anchors];
        ee.splice(L, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: ee
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ r.createElement(dt, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[L].value ? e.yAxis.anchors[L].value : "",
      onChange: (I) => {
        I.preventDefault();
        const ee = [...e.yAxis.anchors];
        ee[L].value = I.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: ee
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Color"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[L].color ? e.yAxis.anchors[L].color : "",
      onChange: (I) => {
        I.preventDefault();
        const ee = [...e.yAxis.anchors];
        ee[L].color = I.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: ee
          }
        });
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.yAxis.anchors[L].lineStyle || "",
      onChange: (I) => {
        const ee = [...e.yAxis.anchors];
        ee[L].lineStyle = I.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: ee
          }
        });
      }
    },
    /* @__PURE__ */ r.createElement("option", null, "Select"),
    p.map((I) => /* @__PURE__ */ r.createElement("option", { key: I.key }, I.value))
  )))))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (M) => {
        M.preventDefault();
        const L = [...e.yAxis.anchors];
        L.push({}), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: L
          }
        });
      }
    },
    "Add Anchor"
  )))), /* @__PURE__ */ r.createElement(xn.Regions, { name: "Regions" }), e.visualizationType !== "Box Plot" && /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement(ct, null, /* @__PURE__ */ r.createElement(ut, null, "Columns")), /* @__PURE__ */ r.createElement(dt, null, e.type !== "navigation" && /* @__PURE__ */ r.createElement("fieldset", { className: "primary-fieldset edit-block" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Additional Columns", /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "You can specify additional columns to display in tooltips and / or the supporting data table."))))), St.map((M) => /* @__PURE__ */ r.createElement("fieldset", { className: "edit-block", key: M }, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (L) => {
        L.preventDefault(), Tt(M);
      }
    },
    "Remove"
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.columns[M] ? e.columns[M].name : fe()[0],
      onChange: (L) => {
        yt(M, "name", L.target.value);
      }
    },
    fe().map((L) => /* @__PURE__ */ r.createElement("option", null, L))
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Associate to Series"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.columns[M] ? e.columns[M].series : "",
      onChange: (L) => {
        yt(M, "series", L.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "Select series"),
    e.series.map((L) => /* @__PURE__ */ r.createElement("option", null, L.dataKey))
  )), /* @__PURE__ */ r.createElement(se, { value: e.columns[M].label, section: "columns", subsection: M, fieldName: "label", label: "Label", updateField: te }), /* @__PURE__ */ r.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ r.createElement("li", { className: "three-col" }, /* @__PURE__ */ r.createElement(se, { value: e.columns[M].prefix, section: "columns", subsection: M, fieldName: "prefix", label: "Prefix", updateField: te }), /* @__PURE__ */ r.createElement(se, { value: e.columns[M].suffix, section: "columns", subsection: M, fieldName: "suffix", label: "Suffix", updateField: te }), /* @__PURE__ */ r.createElement(se, { type: "number", value: e.columns[M].roundToPlace, section: "columns", subsection: M, fieldName: "roundToPlace", label: "Round", updateField: te })), /* @__PURE__ */ r.createElement("li", null, /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[M].commas,
      onChange: (L) => {
        yt(M, "commas", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Add Commas to Numbers"))), /* @__PURE__ */ r.createElement("li", null, e.table.showVertical && /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[M].dataTable,
      onChange: (L) => {
        yt(M, "dataTable", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Show in Data Table"))), e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("li", null, /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[M].showInViz,
      onChange: (L) => {
        yt(M, "showInViz", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Show in Visualization"))), /* @__PURE__ */ r.createElement("li", null, /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[M].tooltips || !1,
      onChange: (L) => {
        Fr(M, L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Show in tooltip"))), e.visualizationType === "Forest Plot" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("li", null, /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[M].forestPlot || !1,
      onChange: (L) => {
        yt(M, "forestPlot", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Show in Forest Plot"))), /* @__PURE__ */ r.createElement("li", null, /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[M].forestPlotAlignRight || !1,
      onChange: (L) => {
        yt(M, "forestPlotAlignRight", L.target.checked);
      }
    }
  ), /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Align Right"))), !e.columns[M].forestPlotAlignRight && /* @__PURE__ */ r.createElement("li", null, /* @__PURE__ */ r.createElement("label", { className: "text" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Forest Plot Starting Point"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "number",
      value: e.columns[M].forestPlotStartingPoint || 0,
      onChange: (L) => {
        yt(M, "forestPlotStartingPoint", L.target.value);
      }
    }
  ))))))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (M) => {
        M.preventDefault(), it(St.length + 1);
      }
    },
    "Add Column"
  )), e.legend.type === "category" && /* @__PURE__ */ r.createElement("fieldset", { className: "primary-fieldset edit-block" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Additional Category", /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "You can provide additional categories to ensure they appear in the legend"))))), e.legend.additionalCategories && e.legend.additionalCategories.map((M, L) => /* @__PURE__ */ r.createElement("fieldset", { className: "edit-block", key: M }, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (I) => {
        I.preventDefault();
        const ee = [...e.legend.additionalCategories];
        ee.splice(L, 1), te("legend", null, "additionalCategories", ee);
      }
    },
    "Remove"
  ), /* @__PURE__ */ r.createElement(
    se,
    {
      value: M,
      label: "Category",
      section: "legend",
      subsection: null,
      fieldName: "additionalCategories",
      updateField: (I, ee, Je, Pt) => {
        const It = [...e.legend.additionalCategories];
        It[L] = Pt, te(I, ee, Je, It);
      }
    }
  ))), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (M) => {
        M.preventDefault();
        const L = [...e.legend.additionalCategories || []];
        L.push(""), te("legend", null, "additionalCategories", L);
      }
    },
    "Add Category"
  )))), H() && /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement(ct, null, /* @__PURE__ */ r.createElement(ut, null, "Legend")), /* @__PURE__ */ r.createElement(dt, null, /* @__PURE__ */ r.createElement(Te, { value: e.legend.reverseLabelOrder, section: "legend", fieldName: "reverseLabelOrder", label: "Reverse Labels", updateField: te }), /* @__PURE__ */ r.createElement(
    Te,
    {
      value: !!e.legend.hide,
      section: "legend",
      fieldName: "hide",
      label: "Hide Legend",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, "With a single-series chart, consider hiding the legend to reduce visual clutter.")))
    }
  ), e.visualizationType === "Line" && /* @__PURE__ */ r.createElement(Te, { value: e.legend.lineMode, section: "legend", fieldName: "lineMode", label: "Show Lined Style Legend", updateField: te }), e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1 && /* @__PURE__ */ r.createElement(Oe, { value: e.legend.colorCode, section: "legend", fieldName: "colorCode", label: "Color code by category", initial: "Select", updateField: te, options: ue(n) }), /* @__PURE__ */ r.createElement(Oe, { value: e.legend.behavior, section: "legend", fieldName: "behavior", label: "Legend Behavior (When clicked)", updateField: te, options: ["highlight", "isolate"] }), e.legend.behavior === "highlight" && e.tooltips.singleSeries && /* @__PURE__ */ r.createElement(Te, { value: e.legend.highlightOnHover, section: "legend", fieldName: "highlightOnHover", label: "HIGHLIGHT DATA SERIES ON HOVER", updateField: te }), /* @__PURE__ */ r.createElement(se, { value: e.legend.label, section: "legend", fieldName: "label", label: "Title", updateField: te }), /* @__PURE__ */ r.createElement(Oe, { value: e.legend.position, section: "legend", fieldName: "position", label: "Position", updateField: te, options: ["right", "left", "bottom"] }), e.legend.position === "bottom" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Te, { value: e.legend.singleRow, section: "legend", fieldName: "singleRow", label: "Single Row Legend", updateField: te }), /* @__PURE__ */ r.createElement(Te, { value: e.legend.verticalSorted, section: "legend", fieldName: "verticalSorted", label: "Vertical sorted Legend", updateField: te })), /* @__PURE__ */ r.createElement(se, { type: "textarea", value: e.legend.description, updateField: te, section: "legend", fieldName: "description", label: "Legend Description" }))), G() && /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement(ct, null, /* @__PURE__ */ r.createElement(ut, null, "Filters")), /* @__PURE__ */ r.createElement(dt, null, e.filters && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    Oe,
    {
      value: e.filterBehavior,
      fieldName: "filterBehavior",
      label: "Filter Behavior",
      updateField: te,
      options: ["Apply Button", "Filter Change"],
      tooltip: /* @__PURE__ */ r.createElement(Q, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Q.Target, null, /* @__PURE__ */ r.createElement(_e, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Q.Content, null, /* @__PURE__ */ r.createElement("p", null, 'The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.')))
    }
  ), /* @__PURE__ */ r.createElement("br", null)), e.filters && /* @__PURE__ */ r.createElement("ul", { className: "filters-list" }, e.filters.map((M, L) => M.type === "url" ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement("fieldset", { className: "edit-block", key: L }, /* @__PURE__ */ r.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        Ot(L);
      }
    },
    "Remove"
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Filter"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: M.columnName,
      onChange: (I) => {
        Ct("columnName", L, I.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    ie().map((I, ee) => /* @__PURE__ */ r.createElement("option", { value: I, key: ee }, I))
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-showDropdown column-heading" }, "Show Filter Input"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: M.showDropdown === void 0 ? !0 : M.showDropdown,
      onChange: (I) => {
        Ct("showDropdown", L, I.target.checked);
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Filter Style"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: M.filterStyle,
      onChange: (I) => {
        Ct("filterStyle", L, I.target.value);
      }
    },
    je.map((I, ee) => /* @__PURE__ */ r.createElement("option", { key: `filter-style-${ee}`, value: I }, I))
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Label"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: M.label,
      onChange: (I) => {
        Ct("label", L, I.target.value);
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-filterOrder column-heading" }, "Filter Order"), /* @__PURE__ */ r.createElement("select", { value: M.order ? M.order : "asc", onChange: (I) => Ct("order", L, I.target.value) }, Le.map((I, ee) => /* @__PURE__ */ r.createElement("option", { value: I.value, key: `filter-${ee}` }, I.label))), M.order === "cust" && /* @__PURE__ */ r.createElement(ao, { onDragEnd: ({ source: I, destination: ee }) => Pe(I.index, ee.index, L, e.filters[L]) }, /* @__PURE__ */ r.createElement(ro, { droppableId: "filter_order" }, (I) => {
    var ee;
    return /* @__PURE__ */ r.createElement("ul", { ...I.droppableProps, className: "sort-list", ref: I.innerRef, style: { marginTop: "1em" } }, (ee = e.filters[L]) == null ? void 0 : ee.values.map((Je, Pt) => /* @__PURE__ */ r.createElement(_s, { key: Je, draggableId: `draggableFilter-${Je}`, index: Pt }, (It, Yn) => /* @__PURE__ */ r.createElement("li", null, /* @__PURE__ */ r.createElement("div", { className: Yn.isDragging ? "currently-dragging" : "", style: Xe(Yn.isDragging, It.draggableProps.style), ref: It.innerRef, ...It.draggableProps, ...It.dragHandleProps }, Je)))), I.placeholder);
  })))))), !e.filters && /* @__PURE__ */ r.createElement("p", { style: { textAlign: "center" } }, "There are currently no filters."), /* @__PURE__ */ r.createElement("button", { type: "button", onClick: Gt, className: "btn full-width" }, "Add Filter"))), /* @__PURE__ */ r.createElement(xn.Visual, { name: "Visual" }), e.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement(ct, null, /* @__PURE__ */ r.createElement(ut, null, "Data Table")), /* @__PURE__ */ r.createElement(dt, null, /* @__PURE__ */ r.createElement(Qu, { config: e, columns: Object.keys(n[0] || {}), updateField: te, isDashboard: c, isLoadedFromUrl: be }), " "))), e.type !== "Spark Line" && /* @__PURE__ */ r.createElement(Du, { loadConfig: t, state: e, convertStateToConfig: Ge })))));
}, Cs = (e) => {
  let t = "", n = Math.abs(e);
  return n >= 1e9 ? (t = "B", e = e / 1e9) : n >= 1e6 ? (t = "M", e = e / 1e6) : n >= 1e3 && (t = "K", e = e / 1e3), e + t;
}, yx = (e) => {
  e.sort((u, d) => u - d);
  const t = Math.floor(e.length / 2), n = e.length % 2 === 0, a = n ? e.slice(0, t) : e.slice(0, t + 1), i = n ? e.slice(t) : e.slice(t + 1), l = Math.floor(a.length / 2), o = n ? (a[l - 1] + a[l]) / 2 : a[l], s = Math.floor(i.length / 2), c = n ? (i[s - 1] + i[s]) / 2 : i[s];
  return { q1: o, q3: c };
}, gx = (e, t) => e.toString().localeCompare(t.toString(), "en", { numeric: !0 }), xx = (e, t) => t.toString().localeCompare(e.toString(), "en", { numeric: !0 }), vn = (e, t) => {
  let n = [];
  return t.forEach((a) => {
    let i = !0;
    e.filter((l) => l.type !== "url").forEach((l) => {
      a[l.columnName] != l.active && (i = !1);
    }), i && n.push(a);
  }), n;
}, vx = [
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
], Ps = (e = "#000000", t = !1) => {
  let n = Vt(e), a = t ? n.brighten(0.5).hex() : n.saturate(1.3).hex();
  return [e, a, n.darken(0.3).hex()];
}, Ns = (e, t, n) => {
  var d, h;
  const a = t.position === "bottom" || ["sm", "xs", "xxs"].includes(n), i = e.orientation === "horizontal", l = Number(e.xAxis.tickRotation) > 0 ? Number(e.xAxis.tickRotation) : 0, o = (d = e == null ? void 0 : e.brush) == null ? void 0 : d.active, s = 20, c = (h = e == null ? void 0 : e.brush) == null ? void 0 : h.height;
  let u = 0;
  return !a && i && !e.yAxis.label && (u = Number(e.xAxis.labelOffset)), !a && i && e.yAxis.label && !e.isResponsiveTicks && (u = Number(e.runtime.xAxis.size) + Number(e.xAxis.labelOffset)), !a && i && e.yAxis.label && e.isResponsiveTicks && (u = e.dynamicMarginTop + s), !a && i && !e.yAxis.label && e.isResponsiveTicks && (u = e.dynamicMarginTop ? e.dynamicMarginTop - s : Number(e.xAxis.labelOffset) - s), !a && i && e.yAxis.label && e.isResponsiveTicks && (u = e.dynamicMarginTop ? e.dynamicMarginTop + s : Number(e.xAxis.labelOffset)), !i && !a && e.xAxis.label && l && !e.isResponsiveTicks && (u = o ? c + e.xAxis.tickWidthMax + -e.xAxis.size + e.xAxis.labelOffset + s : e.xAxis.tickWidthMax + s + -e.xAxis.size + e.xAxis.labelOffset), !i && !a && !e.xAxis.label && l && e.isResponsiveTicks, !i && !a && !e.xAxis.label && l && !e.dynamicMarginTop && !e.isResponsiveTicks && (u = o ? e.xAxis.tickWidthMax + c + s + -e.xAxis.size : 0), !i && !a && e.xAxis.label && !l && !e.isResponsiveTicks && (u = o ? c + -e.xAxis.size + e.xAxis.labelOffset + s : -e.xAxis.size + e.xAxis.labelOffset + s), !i && !a && e.xAxis.label && e.dynamicMarginTop && e.isResponsiveTicks && (u = o ? c + e.xAxis.labelOffset + -e.xAxis.size + e.xAxis.tickWidthMax : e.dynamicMarginTop + -e.xAxis.size + s), !i && !a && !e.xAxis.label && e.dynamicMarginTop && e.isResponsiveTicks && (u = o ? c + e.xAxis.labelOffset + -e.xAxis.size + e.xAxis.tickWidthMax : e.dynamicMarginTop + -e.xAxis.size - s), !i && !a && e.xAxis.label && !e.dynamicMarginTop && e.isResponsiveTicks && (u = o ? c + e.xAxis.labelOffset + -e.xAxis.size + 25 : e.xAxis.labelOffset + -e.xAxis.size + s), !i && !a && !e.xAxis.label && !e.dynamicMarginTop && e.isResponsiveTicks && (u = -e.xAxis.size + s + e.xAxis.labelOffset), !i && !a && !e.xAxis.label && !l && !e.dynamicMarginTop && !e.isResponsiveTicks && (u = o ? c + -e.xAxis.size + e.xAxis.labelOffset : 0), `${u}px`;
};
const Ls = (e) => {
  const t = /(?:\.([^.]+))$/, n = /[?&]wt=(csv|json)(?:&|$)/, a = new URL(e, window.location.origin), i = a.pathname, l = a.search, o = t.exec(i);
  if (o && o[1])
    return o[1];
  const s = n.exec(l);
  return s && s[1] ? s[1] : "";
};
function qx({ configUrl: e, config: t, isEditor: n = !1, isDebug: a = !1, isDashboard: i = !1, setConfig: l, setEditing: o, hostname: s, link: c, setSharedFilter: u, setSharedFilterValue: d, dashboardConfig: h }) {
  var vt, Me;
  const m = new Ds(), [p, y] = z.useState(!0), [b, g] = z.useState(null), [f, x] = z.useState({}), [E, v] = z.useState(f.data || []), [S, A] = z.useState(void 0), [T, O] = z.useState(void 0), [w, C] = z.useState([]), [N, k] = z.useState("lg"), [_, W] = z.useState([]), [F, V] = z.useState(), [H, U] = z.useState(), [Y, R] = z.useState(!1), [$, j] = z.useState([]), [q] = z.useState(`cove-${Math.random().toString(16).slice(-4)}`);
  z.useRef(/* @__PURE__ */ new Map()), z.useRef(), a && console.log("Chart config, isEditor", f, n);
  let { legend: X, title: ne, description: de, visualizationType: Ae } = f;
  n && (!ne || ne === "") && (ne = "Chart Title"), f.table && (!((vt = f.table) != null && vt.label) || ((Me = f.table) == null ? void 0 : Me.label) === "") && (f.table.label = "Data Table");
  const { barBorderClass: we, lineDatapointClass: G, contentClasses: K, sparkLineStyles: ae } = Zu(f), D = f.showSidebar ? "#legend" : f != null && f.title ? `#dataTableSection__${f.title.replace(/\s/g, "")}` : "#dataTableSection", ce = async () => {
    var P;
    if (f.dataUrl) {
      const ie = new URL(f.runtimeDataUrl || f.dataUrl, window.location.origin);
      let fe = Object.fromEntries(new URLSearchParams(ie.search)), ue = !1;
      if ((P = f.filters) == null || P.forEach((oe) => {
        oe.type === "url" && fe[oe.queryParameter] !== decodeURIComponent(oe.active) && (fe[oe.queryParameter] = oe.active, ue = !0);
      }), (!f.formattedData || f.formattedData.urlFiltered) && !ue)
        return;
      let Ne = `${ie.origin}${ie.pathname}${Object.keys(fe).map((oe, qe) => {
        let Ge = qe === 0 ? "?" : "&";
        return Ge += oe + "=", Ge += fe[oe], Ge;
      }).join("")}`, xe = [];
      try {
        const oe = Ls(ie.href);
        oe === "csv" || Jl(Ne) ? xe = await fetch(Ne).then((qe) => qe.text()).then((qe) => to.parse(qe, {
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0
        }).data) : oe === "json" || eo(Ne) ? xe = await fetch(Ne).then((qe) => qe.json()) : xe = [];
      } catch {
        console.error(`Cannot parse URL: ${Ne}`), xe = [];
      }
      f.dataDescription && (xe = m.autoStandardize(xe), xe = m.developerStandardize(xe, f.dataDescription)), Object.assign(xe, { urlFiltered: !0 }), pe({ ...f, runtimeDataUrl: Ne, data: xe, formattedData: xe }), xe && (v(xe), A(xe), O(vn(f.filters, xe)));
    }
  }, le = async () => {
    let P = t || await (await fetch(e)).json(), ie = P.data || [];
    const fe = P.filters ? P.filters.filter((xe) => xe.type === "url").length > 0 : !1;
    if (P.dataUrl && !fe)
      try {
        const xe = Ls(P.dataUrl);
        (xe === "csv" || Jl(P.dataUrl)) && (ie = await fetch(P.dataUrl + `?v=${mo()}`).then((oe) => oe.text()).then((oe) => (oe = oe.replace(/(".*?")|,/g, (...Ge) => Ge[1] || "|"), oe = oe.replace(/["]+/g, ""), to.parse(oe, {
          //quotes: "true",  // dont need these
          //quoteChar: "'",  // has no effect that I can tell
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0,
          delimiter: "|"
          // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
        }).data))), (xe === "json" || eo(P.dataUrl)) && (ie = await fetch(P.dataUrl + `?v=${mo()}`).then((oe) => oe.json()));
      } catch {
        console.error(`COVE: Cannot parse URL: ${P.dataUrl}`), ie = [];
      }
    P.dataDescription && (ie = m.autoStandardize(ie), ie = m.developerStandardize(ie, P.dataDescription)), ie && (v(ie), A(ie)), P !== void 0 && P.table !== void 0 && (!P.table || !P.table.showVertical) && (P.table = P.table || {}, P.table.showVertical = !1);
    let ue = { ...si, ...P };
    ue.visualizationType === "Box Plot" && (ue.legend.hide = !0), ue.table.show === void 0 && (ue.table.show = !i), ue.series.map((xe) => {
      xe.tooltip || (xe.tooltip = !0), xe.axis || (xe.axis = "Left");
    }), !ue.data && ie && (ue.data = ie);
    const Ne = { ...await td(ue) };
    pe(Ne, ie);
  }, pe = (P, ie) => {
    var xe;
    let fe = ie || E;
    Object.keys(si).forEach((oe) => {
      P[oe] && typeof P[oe] == "object" && !Array.isArray(P[oe]) && (P[oe] = { ...si[oe], ...P[oe] });
    });
    let ue = [];
    if (P.exclusions && P.exclusions.active)
      if (P.xAxis.type === "categorical" && ((xe = P.exclusions.keys) == null ? void 0 : xe.length) > 0)
        ue = fe.filter((oe) => !P.exclusions.keys.includes(oe[P.xAxis.dataKey]));
      else if (P.xAxis.type === "date" && (P.exclusions.dateStart || P.exclusions.dateEnd) && P.xAxis.dateParseFormat) {
        const oe = (tt) => new Date(tt).getTime();
        let qe = oe(P.exclusions.dateStart), Ge = oe(P.exclusions.dateEnd) + 86399999, bt = typeof qe !== void 0 && isNaN(qe) === !1, Et = typeof Ge !== void 0 && isNaN(Ge) === !1;
        bt && Et ? ue = fe.filter((tt) => oe(tt[P.xAxis.dataKey]) >= qe && oe(tt[P.xAxis.dataKey]) <= Ge) : bt ? ue = fe.filter((tt) => oe(tt[P.xAxis.dataKey]) >= qe) : Et && (ue = fe.filter((tt) => oe(tt[P.xAxis.dataKey]) <= Ge));
      } else
        ue = ie || E;
    else
      ue = ie || E;
    A(ue);
    let Ne = [];
    if (P.filters && (P.filters.forEach((oe, qe) => {
      let Ge = [];
      Ge = oe.orderedValues || he(oe.columnName, ue).sort(oe.order === "desc" ? xx : gx), P.filters[qe].values = Ge, P.filters[qe].active = P.filters[qe].active || Ge[0], P.filters[qe].filterStyle = P.filters[qe].filterStyle ? P.filters[qe].filterStyle : "dropdown";
    }), Ne = vn(P.filters, ue), O(Ne)), (!["Area Chart", "Bar", "Line", "Combo"].includes(P.visualizationType) || P.orientation === "horizontal") && (P.xAxis.sortDates = !1), P.xAxis.sortDates && P.barThickness > 0.1 ? P.barThickness = 0.035 : !P.xAxis.sortDates && P.barThickness < 0.1 && (P.barThickness = 0.35), P.runtime = {}, P.runtime.seriesLabels = {}, P.runtime.seriesLabelsAll = [], P.runtime.originalXAxis = P.xAxis, P.visualizationType === "Pie" ? (P.runtime.seriesKeys = (ie || fe).map((oe) => oe[P.xAxis.dataKey]), P.runtime.seriesLabelsAll = P.runtime.seriesKeys) : P.runtime.seriesKeys = P.series ? P.series.map((oe) => (P.runtime.seriesLabels[oe.dataKey] = oe.name || oe.label || oe.dataKey, P.runtime.seriesLabelsAll.push(oe.name || oe.dataKey), oe.dataKey)) : [], P.visualizationType === "Box Plot" && P.series) {
      let oe = ue ? ue.map((Ve) => Ve[P.xAxis.dataKey]) : fe.map((Ve) => Ve[P.xAxis.dataKey]), qe = ue ? ue.map((Ve) => {
        var Z;
        return Number(Ve[(Z = P == null ? void 0 : P.series[0]) == null ? void 0 : Z.dataKey]);
      }) : fe.map((Ve) => {
        var Z;
        return Number(Ve[(Z = P == null ? void 0 : P.series[0]) == null ? void 0 : Z.dataKey]);
      });
      const bt = function(Ve) {
        return Ve.filter(function(Z, ge, ze) {
          return ze.indexOf(Z) === ge;
        });
      }(oe);
      let Et = [];
      const tt = [];
      if (!bt)
        return;
      bt.forEach((Ve) => {
        try {
          if (!Ve)
            throw new Error("No groups resolved in box plots");
          let Z = ue ? ue.filter((nt) => nt[P.xAxis.dataKey] === Ve) : fe.filter((nt) => nt[P.xAxis.dataKey] === Ve), ge = Z.map((nt) => {
            var Mt;
            return Number(nt[(Mt = P == null ? void 0 : P.series[0]) == null ? void 0 : Mt.dataKey]);
          }), ze = ge.sort((nt, Mt) => nt - Mt);
          const be = yx(ze);
          if (!Z)
            throw new Error("boxplots dont have data yet");
          if (!tt)
            throw new Error("boxplots dont have plots yet");
          P.boxplot.firstQuartilePercentage === "" && (P.boxplot.firstQuartilePercentage = 0), P.boxplot.thirdQuartilePercentage === "" && (P.boxplot.thirdQuartilePercentage = 0);
          const Qe = be.q1, ot = be.q3, pt = ot - Qe, At = Qe - (ot - Qe) * 1.5, St = ot + (ot - Qe) * 1.5, it = ze.filter((nt) => nt < At || nt > St);
          let Tt = ge;
          Tt = Tt.filter((nt) => !it.includes(nt));
          const yt = na(ge) || 0, Wt = ta([yt, Qe - 1.5 * pt]);
          tt.push({
            columnCategory: Ve,
            columnMax: na([ta(ge), Qe + 1.5 * pt]),
            columnThirdQuartile: Number(ot).toFixed(P.dataFormat.roundTo),
            columnMedian: Number(sd(ge)).toFixed(P.dataFormat.roundTo),
            columnFirstQuartile: Qe.toFixed(P.dataFormat.roundTo),
            columnMin: Wt,
            columnTotal: ge.reduce((nt, Mt) => nt + Mt, 0),
            columnSd: Number(id(ge)).toFixed(P.dataFormat.roundTo),
            columnMean: Number(od(ge)).toFixed(P.dataFormat.roundTo),
            columnIqr: Number(pt).toFixed(P.dataFormat.roundTo),
            columnLowerBounds: Wt,
            columnUpperBounds: na([ta(ze), Qe + 1.5 * pt]),
            columnOutliers: it,
            values: ge,
            nonOutlierValues: Tt
          });
        } catch (Z) {
          console.error("COVE: ", Z.message);
        }
      }), Et = JSON.parse(JSON.stringify(tt)), Et.map((Ve) => (Ve.columnIqr = void 0, Ve.nonOutlierValues = void 0, Ve.columnLowerBounds = void 0, Ve.columnUpperBounds = void 0, null)), P.boxplot.allValues = qe, P.boxplot.categories = bt, P.boxplot.plots = tt, P.boxplot.tableData = Et;
    }
    P.visualizationType === "Combo" && P.series && (P.runtime.barSeriesKeys = [], P.runtime.lineSeriesKeys = [], P.runtime.areaSeriesKeys = [], P.runtime.forecastingSeriesKeys = [], P.series.forEach((oe) => {
      oe.type === "Area Chart" && P.runtime.areaSeriesKeys.push(oe), oe.type === "Forecasting" && P.runtime.forecastingSeriesKeys.push(oe), oe.type === "Bar" && P.runtime.barSeriesKeys.push(oe.dataKey), (oe.type === "Line" || oe.type === "dashed-sm" || oe.type === "dashed-md" || oe.type === "dashed-lg") && P.runtime.lineSeriesKeys.push(oe.dataKey), oe.type === "Combo" && (oe.type = "Bar");
    })), P.visualizationType === "Forecasting" && P.series && (P.runtime.forecastingSeriesKeys = [], P.series.forEach((oe) => {
      oe.type === "Forecasting" && P.runtime.forecastingSeriesKeys.push(oe);
    })), P.visualizationType === "Area Chart" && P.series && (P.runtime.areaSeriesKeys = [], P.series.forEach((oe) => {
      P.runtime.areaSeriesKeys.push({ ...oe, type: "Area Chart" });
    })), P.visualizationType === "Bar" && P.orientation === "horizontal" || ["Deviation Bar", "Paired Bar", "Forest Plot"].includes(P.visualizationType) ? (P.runtime.xAxis = P.yAxis.yAxis ? P.yAxis.yAxis : P.yAxis, P.runtime.yAxis = P.xAxis.xAxis ? P.xAxis.xAxis : P.xAxis, P.runtime.horizontal = !1, P.orientation = "horizontal") : ["Box Plot", "Scatter Plot", "Area Chart", "Line", "Forecasting"].includes(P.visualizationType) ? (P.runtime.xAxis = P.xAxis, P.runtime.yAxis = P.yAxis, P.runtime.horizontal = !1, P.orientation = "vertical") : (P.runtime.xAxis = P.xAxis, P.runtime.yAxis = P.yAxis, P.runtime.horizontal = !1), P.runtime.uniqueId = Date.now(), P.runtime.editorErrorMessage = P.visualizationType === "Pie" && !P.yAxis.dataKey ? "Data Key property in Y Axis section must be set for pie charts." : "", x(P);
  }, he = (P, ie = this.state.data) => {
    const fe = [];
    return ie.forEach((ue) => {
      const Ne = ue[P];
      Ne && fe.includes(Ne) === !1 && fe.push(Ne);
    }), fe;
  }, Ee = (P, ie) => {
    let fe = f.visualizationType === "Bar" && f.visualizationSubType === "horizontal" ? f.xAxis.dataKey : f.yAxis.sortKey, ue = parseFloat(P[fe]), Ne = parseFloat(ie[fe]);
    return ue < Ne ? f.sortData === "ascending" ? 1 : -1 : ue > Ne ? f.sortData === "ascending" ? -1 : 1 : 0;
  }, Ce = new Ou((P) => {
    for (let ie of P) {
      let { width: fe, height: ue } = ie.contentRect, Ne = _u(fe), xe = 32, oe = 350;
      k(Ne), n && (fe = fe - oe), ie.target.dataset.lollipop === "true" && (fe = fe - 2.5), fe = fe - xe, W([fe, ue]);
    }
  }), ke = z.useCallback((P) => {
    P !== null && Ce.observe(P), U(P);
  }, []);
  function Se(P) {
    return Object.keys(P).length === 0;
  }
  z.useEffect(() => {
    le();
  }, []), z.useEffect(() => {
    ce();
  }, [JSON.stringify(f.filters)]), z.useEffect(() => {
    H && !Se(f) && !Y && (Gu("cove_loaded", { config: f }), R(!0));
  }, [H, f]), z.useEffect(() => {
    const P = (ie) => {
      let fe = [];
      fe.push(ie.detail), V(fe);
    };
    return Ju("cove_filterData", (ie) => P(ie)), () => {
      ed("cove_filterData", P);
    };
  }, [f]), z.useEffect(() => {
    if (F && F[0] && !F[0].hasOwnProperty("active")) {
      let ie = { ...f };
      delete ie.filters, x(ie), O(vn(F, S));
    }
    if (F && F.length > 0 && F.length > 0 && F[0].hasOwnProperty("active")) {
      let P = { ...f, filters: F };
      x(P), O(vn(F, S));
    }
  }, [F]), t && z.useEffect(() => {
    le();
  }, [t.data]), z.useEffect(() => {
    var P;
    if (E && f.xAxis && ((P = f.runtime) != null && P.seriesKeys)) {
      const ie = ["Paired Bar", "Deviation Bar"].includes(f.visualizationType) ? f.twoColor.palette : f.palette, fe = { ...Nt, ...Ya };
      let ue = f.customColors || fe[ie], Ne = f.runtime.seriesKeys.length, xe;
      for (; Ne > ue.length; )
        ue = ue.concat(ue);
      ue = ue.slice(0, Ne), xe = () => Ji({
        domain: f.runtime.seriesLabelsAll,
        range: ue,
        unknown: null
      }), g(xe), y(!1);
    }
    f && E && f.sortData && E.sort(Ee);
  }, [f, E]);
  const ye = (P) => {
    if (w.length + 1 === f.runtime.seriesKeys.length && f.visualizationType !== "Forecasting") {
      re();
      return;
    }
    const ie = [...w];
    let fe = P.datum;
    f.runtime.seriesLabels && f.runtime.seriesKeys.forEach((ue) => {
      f.runtime.seriesLabels[ue] === P.datum && (fe = ue);
    }), ie.indexOf(fe) !== -1 ? ie.splice(ie.indexOf(fe), 1) : ie.push(fe), C(ie);
  }, re = () => {
    try {
      const P = document.getElementById("legend");
      if (!P)
        throw new Error("No legend available to set previous focus on.");
      P.focus();
    } catch (P) {
      console.error("COVE:", P.message);
    }
    C([]);
  }, J = f.orientation === "horizontal" ? "yAxis" : "xAxis", He = (P, ie = !0) => {
    let fe = vc(f.runtime[J].dateParseFormat)(P);
    return fe || (ie && (f.runtime.editorErrorMessage = `Error parsing date "${P}". Try reviewing your data and date parse settings in the X Axis section.`), /* @__PURE__ */ new Date());
  }, me = (P) => di(f.runtime[J].dateDisplayFormat)(P), Pe = (P) => di(f.tooltips.dateDisplayFormat)(P);
  function Le(P, ie) {
    const ue = document.createElement("canvas").getContext("2d");
    if (!ue) {
      console.error("2d context not found");
      return;
    }
    return ue.font = ie || getComputedStyle(document.body).font, Math.ceil(ue.measureText(P).width);
  }
  const je = (P, ie, fe = !1, ue, Ne, xe) => {
    if (isNaN(P) || !P)
      return P;
    const oe = P < 0;
    (ie === void 0 || !ie) && (ie = "left"), oe && (P = Math.abs(P));
    let {
      dataFormat: { commas: qe, abbreviated: Ge, roundTo: bt, prefix: Et, suffix: tt, rightRoundTo: Ve, bottomRoundTo: Z, rightPrefix: ge, rightSuffix: ze, bottomPrefix: be, bottomSuffix: Qe, bottomAbbreviated: ot }
    } = f;
    String(P).indexOf(",") !== -1 && (P = P.replaceAll(",", ""));
    let pt = P, At = {
      useGrouping: !!qe
      // for old chart data table to work right cant just leave this to undefined
    };
    if (ie === "left" || ie === void 0) {
      let Tt;
      xe !== void 0 ? Tt = xe ? Number(xe) : 0 : Tt = bt ? Number(bt) : 0, At = {
        useGrouping: xe ? !0 : !!f.dataFormat.commas,
        minimumFractionDigits: Tt,
        maximumFractionDigits: Tt
      };
    }
    ie === "right" && (At = {
      useGrouping: !!f.dataFormat.rightCommas,
      minimumFractionDigits: Ve ? Number(Ve) : 0,
      maximumFractionDigits: Ve ? Number(Ve) : 0
    });
    const St = () => f.forestPlot.type === "Logarithmic" && !Z ? 2 : Number(Z) ? Number(Z) : 0;
    if (ie === "bottom" && (At = {
      useGrouping: !!f.dataFormat.bottomCommas,
      minimumFractionDigits: St(),
      maximumFractionDigits: St()
    }), P = uo(P), isNaN(P))
      return f.runtime.editorErrorMessage = `Unable to parse number from data ${pt}. Try reviewing your data and selections in the Data Series section.`, pt;
    if (!f.dataFormat)
      return P;
    if (f.dataCutoff) {
      let Tt = uo(f.dataCutoff);
      P < Tt && (P = Tt);
    }
    ie === "left" && qe && Ge && fe || ie === "bottom" && qe && Ge && fe ? P = P : P = P.toLocaleString("en-US", At);
    let it = "";
    return Ge && ie === "left" && fe && (P = Cs(parseFloat(P))), ot && ie === "bottom" && fe && (P = Cs(parseFloat(P))), ue && ie === "left" ? it = ue + it : Et && ie === "left" && (it += Et), ge && ie === "right" && (it += ge), be && ie === "bottom" && (it += be), it += P, Ne && ie === "left" ? it += Ne : tt && ie === "left" && (it += tt), ze && ie === "right" && (it += ze), Qe && ie === "bottom" && (it += Qe), oe && (it = "-" + it), String(it);
  }, Ie = {
    "Paired Bar": /* @__PURE__ */ r.createElement(Ut, null),
    Forecasting: /* @__PURE__ */ r.createElement(Ut, null),
    Bar: /* @__PURE__ */ r.createElement(Ut, null),
    Line: /* @__PURE__ */ r.createElement(Ut, null),
    Combo: /* @__PURE__ */ r.createElement(Ut, null),
    Pie: /* @__PURE__ */ r.createElement(cy, null),
    "Box Plot": /* @__PURE__ */ r.createElement(Ut, null),
    "Area Chart": /* @__PURE__ */ r.createElement(Ut, null),
    "Scatter Plot": /* @__PURE__ */ r.createElement(Ut, null),
    "Deviation Bar": /* @__PURE__ */ r.createElement(Ut, null),
    "Forest Plot": /* @__PURE__ */ r.createElement(Ut, null)
  }, Xe = () => {
    if (f.visualizationType === "Forecasting" || f.visualizationType === "Forest Plot")
      return !1;
    if (f.visualizationType === "Pie") {
      if ((f == null ? void 0 : f.yAxis.dataKey) === void 0)
        return !0;
    } else if ((f == null ? void 0 : f.series) === void 0 || !((f == null ? void 0 : f.series.length) > 0))
      return !0;
    return !f.xAxis.dataKey;
  }, mt = (P, ie) => {
    if (P === null || P === "" || P === void 0)
      return "";
    if (typeof P == "string" && P.length > 0 && f.legend.type === "equalnumber")
      return P;
    let fe = P, ue;
    if (Object.keys(f.columns).length > 0 && Object.keys(f.columns).forEach(function(Ne) {
      var xe = f.columns[Ne];
      xe.name === ie && (ue = xe);
    }), ue === void 0 && (ue = f.type === "chart" ? f.dataFormat : f.primary, ue.useCommas = ue.commas, ue.roundToPlace = ue.roundTo ? ue.roundTo : ""), ue) {
      let Ne = !1, xe = 0;
      Number(P) && (ue.roundToPlace >= 0 && (Ne = ue.roundToPlace ? ue.roundToPlace !== "" || ue.roundToPlace !== null : !1, xe = ue.roundToPlace ? Number(ue.roundToPlace) : 0, ue.hasOwnProperty("roundToPlace") && Ne && (fe = Number(P).toFixed(xe))), ue.hasOwnProperty("useCommas") && ue.useCommas === !0 && (fe = Number(P).toLocaleString("en-US", {
        style: "decimal",
        minimumFractionDigits: Ne ? xe : 0,
        maximumFractionDigits: Ne ? xe : 5
      }))), fe = (ue.prefix || "") + fe + (ue.suffix || "");
    }
    return fe;
  }, at = (P) => {
    try {
      if (!P)
        throw new Error("COVE: No rowObj in applyLegendToRow");
      if (f.type === "navigation") {
        let ie = Nt[f.color] || Nt.bluegreenreverse;
        return Ps(ie[3]);
      }
      return Ps();
    } catch (ie) {
      console.error("COVE: ", ie);
    }
  }, te = (P) => {
    var ie;
    return Array.isArray(P) ? f.visualizationType === "Forecasting" ? P : (ie = f == null ? void 0 : f.xAxis) != null && ie.dataKey ? m.cleanData(P, f.xAxis.dataKey) : P : [];
  }, $e = (P) => P;
  let Be = /* @__PURE__ */ r.createElement(Wu, null);
  if (!p) {
    const P = /* @__PURE__ */ r.createElement("a", { href: `#data-table-${f.dataKey}`, className: "margin-left-href" }, f.dataKey, " (Go to Table)");
    Be = /* @__PURE__ */ r.createElement(r.Fragment, null, n && /* @__PURE__ */ r.createElement(px, null), !Xe() && !f.newViz && /* @__PURE__ */ r.createElement("div", { className: "cdc-chart-inner-container" }, /* @__PURE__ */ r.createElement($u, { showTitle: f.showTitle, isDashboard: i, title: ne, superTitle: f.superTitle, classes: ["chart-title", `${f.theme}`, "cove-component__header"], style: void 0 }), /* @__PURE__ */ r.createElement("a", { id: "skip-chart-container", className: "cdcdataviz-sr-only-focusable", href: D }, "Skip Over Chart Container"), f.filters && !F && /* @__PURE__ */ r.createElement(Fu, { config: f, setConfig: x, setFilteredData: O, filteredData: T, excludedData: S, filterData: vn, dimensions: _ }), (f == null ? void 0 : f.introText) && f.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement("section", { className: "introText" }, En(f.introText)), /* @__PURE__ */ r.createElement(
      "div",
      {
        style: { marginBottom: Ns(f, X, N) },
        className: `chart-container  p-relative ${f.legend.position === "bottom" ? "bottom" : ""}${f.legend.hide ? " legend-hidden" : ""}${G}${we} ${K.join(" ")} ${a ? "debug" : ""}`
      },
      f.visualizationType !== "Spark Line" && Ie[f.visualizationType],
      f.visualizationType === "Spark Line" && /* @__PURE__ */ r.createElement(r.Fragment, null, (f == null ? void 0 : f.introText) && /* @__PURE__ */ r.createElement("section", { className: "introText", style: { padding: "0px 0 35px" } }, En(f.introText)), /* @__PURE__ */ r.createElement("div", { style: { height: "100px", width: "100%", ...ae } }, /* @__PURE__ */ r.createElement(nm, null, (ie) => /* @__PURE__ */ r.createElement(Yg, { width: ie.width, height: ie.height }))), de && /* @__PURE__ */ r.createElement("div", { className: "subtext", style: { padding: "35px 0 15px" } }, En(de))),
      !f.legend.hide && f.visualizationType !== "Spark Line" && f.visualizationType !== "Forest Plot" && /* @__PURE__ */ r.createElement(Xg, null)
    ), i && f.table && f.table.show && f.table.showDataTableLink ? P : c && c, de && f.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement("div", { className: "column " + f.isResponsiveTicks ? "subtext--responsive-ticks" : "subtext" }, En(de)), /* @__PURE__ */ r.createElement(Vr.Section, { classes: ["download-buttons"] }, f.table.showDownloadImgButton && /* @__PURE__ */ r.createElement(Vr.Button, { text: "Download Image", title: "Download Chart as Image", type: "image", state: f, elementToCapture: q }), f.table.showDownloadPdfButton && /* @__PURE__ */ r.createElement(Vr.Button, { text: "Download PDF", title: "Download Chart as PDF", type: "pdf", state: f, elementToCapture: q })), f.xAxis.dataKey && f.table.show && f.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement(
      Hu,
      {
        config: f,
        rawData: f.table.customTableConfig ? vn(f.filters, f.data) : f.data,
        runtimeData: m.applySuppression(T || S, f.suppressedData),
        expandDataTable: f.table.expanded,
        columns: f.columns,
        displayDataAsText: mt,
        displayGeoName: $e,
        applyLegendToRow: at,
        tableTitle: f.table.label,
        indexTitle: f.table.indexLabel,
        vizTitle: ne,
        viewport: N,
        tabbingId: D,
        colorScale: b
      }
    ), (f == null ? void 0 : f.footnotes) && /* @__PURE__ */ r.createElement("section", { className: "footnotes" }, En(f.footnotes))));
  }
  const Gt = {
    capitalize: (P) => P.charAt(0).toUpperCase() + P.slice(1),
    computeMarginBottom: Ns,
    getXAxisData: (P) => f.runtime.xAxis.type === "date" ? He(P[f.runtime.originalXAxis.dataKey]).getTime() : P[f.runtime.originalXAxis.dataKey],
    getYAxisData: (P, ie) => P[ie],
    config: f,
    setConfig: x,
    rawData: E ?? {},
    excludedData: S,
    transformedData: te(T || S),
    // do this right before passing to components
    tableData: T || S,
    // do not clean table data
    unfilteredData: E,
    seriesHighlight: w,
    colorScale: b,
    dimensions: _,
    currentViewport: N,
    parseDate: He,
    formatDate: me,
    formatTooltipsDate: Pe,
    formatNumber: je,
    loading: p,
    updateConfig: pe,
    colorPalettes: Nt,
    isDashboard: i,
    setParentConfig: l,
    missingRequiredSections: Xe,
    setEditing: o,
    setFilteredData: O,
    handleChartAriaLabels: tu,
    highlight: ye,
    highlightReset: re,
    legend: X,
    setSeriesHighlight: C,
    dynamicLegendItems: $,
    setDynamicLegendItems: j,
    filterData: vn,
    imageId: q,
    handleLineType: zi,
    lineOptions: vx,
    isNumber: qa,
    getTextWidth: Le,
    twoColorPalette: Ya,
    isEditor: n,
    isDebug: a,
    setSharedFilter: u,
    setSharedFilterValue: d,
    dashboardConfig: h,
    debugSvg: a
  }, rt = ["cdc-open-viz-module", "type-chart", `${N}`, `font-${f.fontSize}`, `${f.theme}`];
  return f.visualizationType === "Spark Line" && rt.push("type-sparkline"), n && rt.push("spacing-wrapper"), n && rt.push("isEditor"), /* @__PURE__ */ r.createElement(De.Provider, { value: Gt }, /* @__PURE__ */ r.createElement("div", { className: `${rt.join(" ")}`, ref: ke, "data-lollipop": f.isLollipopChart, "data-download-id": q }, Be));
}
export {
  qx as C
};
