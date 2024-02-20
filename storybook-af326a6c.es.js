import { r as $, R as r } from "./storybook-e61d95ab.es.js";
import { i as Nu, g as Lu } from "./storybook-a2b11335.es.js";
import { A as Ou } from "./storybook-fa75dc84.es.js";
import { p as Ns, P as R } from "./storybook-b8c9afe4.es.js";
import { d as _u } from "./storybook-2eb5481e.es.js";
import { a as Yi } from "./storybook-c5d32002.es.js";
import { P as el } from "./storybook-76833471.es.js";
import { H as vn, T as Du } from "./storybook-826feda6.es.js";
import { _ as Xe } from "./storybook-70f3d2a3.es.js";
import { _ as jt, G as Mu, t as Ua, a as Ct, s as Ya, T as Fe, P as Ls, I as tl, u as $u, D as nl, C as al, F as zu } from "./storybook-4401f3a1.es.js";
import { c as Ft } from "./storybook-1d43892b.es.js";
import { D as Os, a as it, b as ot, c as lt, d as st, A as bn } from "./storybook-441ad5c2.es.js";
import { t as Ru, f as _s, L as rl, g as un, M as Fr, D as Fu } from "./storybook-b751bff6.es.js";
import { E as Bt, L as Bu } from "./storybook-a0c99f4a.es.js";
import { s as Gn, t as Ds, a as Ms, b as $s, d as ya, B as _t, c as pt, C as Vu, S as zs } from "./storybook-0cd4c30f.es.js";
import { b as kr, t as Hu, e as Rs, f as il, g as Wu, h as Ku, j as Fs, k as ol, m as Iu, G as be, c as rt } from "./storybook-14e8f9f9.es.js";
import { R as ju } from "./storybook-e604ac6e.es.js";
import "./storybook-9c2b8003.es.js";
import { i as Bs, m as Br, c as Vs, j as wa, k as Ca, l as Pa, n as ll, o as qu, p as sl, b as Hs, d as Ws } from "./storybook-bedc547d.es.js";
import { a as Re } from "./storybook-e798b70d.es.js";
import { T as Z } from "./storybook-46a89ba7.es.js";
import { S as De, T as de, C as Te, D as Uu } from "./storybook-a08d0592.es.js";
import { I as ln } from "./storybook-deb084b6.es.js";
import { u as Yu, p as Xu, s as Qu, a as Zu, c as Gu } from "./storybook-a9880235.es.js";
import { n as cl } from "./storybook-24623c03.es.js";
import { c as ul } from "./storybook-7a3dd9ba.es.js";
function Ks(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function dl(e) {
  let t = e, n = e;
  e.length === 1 && (t = (l, s) => e(l) - s, n = Ju(e));
  function a(l, s, c, u) {
    for (c == null && (c = 0), u == null && (u = l.length); c < u; ) {
      const d = c + u >>> 1;
      n(l[d], s) < 0 ? c = d + 1 : u = d;
    }
    return c;
  }
  function i(l, s, c, u) {
    for (c == null && (c = 0), u == null && (u = l.length); c < u; ) {
      const d = c + u >>> 1;
      n(l[d], s) > 0 ? u = d : c = d + 1;
    }
    return c;
  }
  function o(l, s, c, u) {
    c == null && (c = 0), u == null && (u = l.length);
    const d = a(l, s, c, u - 1);
    return d > c && t(l[d - 1], s) > -t(l[d], s) ? d - 1 : d;
  }
  return { left: a, center: o, right: i };
}
function Ju(e) {
  return (t, n) => Ks(e(t), n);
}
function* ed(e, t) {
  if (t === void 0)
    for (let n of e)
      n != null && (n = +n) >= n && (yield n);
  else {
    let n = -1;
    for (let a of e)
      (a = t(a, ++n, e)) != null && (a = +a) >= a && (yield a);
  }
}
function td(e, t) {
  let n = 0, a, i = 0, o = 0;
  if (t === void 0)
    for (let l of e)
      l != null && (l = +l) >= l && (a = l - i, i += a / ++n, o += a * (l - i));
  else {
    let l = -1;
    for (let s of e)
      (s = t(s, ++l, e)) != null && (s = +s) >= s && (a = s - i, i += a / ++n, o += a * (s - i));
  }
  if (n > 1)
    return o / (n - 1);
}
function nd(e, t) {
  const n = td(e, t);
  return n && Math.sqrt(n);
}
function Jn(e, t) {
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
function ea(e, t) {
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
function Is(e, t, n = 0, a = e.length - 1, i = Ks) {
  for (; a > n; ) {
    if (a - n > 600) {
      const c = a - n + 1, u = t - n + 1, d = Math.log(c), h = 0.5 * Math.exp(2 * d / 3), m = 0.5 * Math.sqrt(d * h * (c - h) / c) * (u - c / 2 < 0 ? -1 : 1), p = Math.max(n, Math.floor(t - u * h / c + m)), y = Math.min(a, Math.floor(t + (c - u) * h / c + m));
      Is(e, t, p, y, i);
    }
    const o = e[t];
    let l = n, s = a;
    for (Un(e, n, t), i(e[a], o) > 0 && Un(e, n, a); l < s; ) {
      for (Un(e, l, s), ++l, --s; i(e[l], o) < 0; )
        ++l;
      for (; i(e[s], o) > 0; )
        --s;
    }
    i(e[n], o) === 0 ? Un(e, n, s) : (++s, Un(e, s, a)), s <= t && (n = s + 1), t <= s && (a = s - 1);
  }
  return e;
}
function Un(e, t, n) {
  const a = e[t];
  e[t] = e[n], e[n] = a;
}
function ad(e, t, n) {
  if (e = Float64Array.from(ed(e, n)), !!(a = e.length)) {
    if ((t = +t) <= 0 || a < 2)
      return ea(e);
    if (t >= 1)
      return Jn(e);
    var a, i = (a - 1) * t, o = Math.floor(i), l = Jn(Is(e, o).subarray(0, o + 1)), s = ea(e.subarray(o + 1));
    return l + (s - l) * (i - o);
  }
}
function rd(e, t) {
  let n = 0, a = 0;
  if (t === void 0)
    for (let i of e)
      i != null && (i = +i) >= i && (++n, a += i);
  else {
    let i = -1;
    for (let o of e)
      (o = t(o, ++i, e)) != null && (o = +o) >= o && (++n, a += o);
  }
  if (n)
    return a / n;
}
function id(e, t) {
  return ad(e, 0.5, t);
}
class ml extends Map {
  constructor(t, n = sd) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null)
      for (const [a, i] of t)
        this.set(a, i);
  }
  get(t) {
    return super.get(fl(this, t));
  }
  has(t) {
    return super.has(fl(this, t));
  }
  set(t, n) {
    return super.set(od(this, t), n);
  }
  delete(t) {
    return super.delete(ld(this, t));
  }
}
function fl({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function od({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function ld({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function sd(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function cd(e, t, n) {
  e = +e, t = +t, n = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +n;
  for (var a = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, o = new Array(i); ++a < i; )
    o[a] = e + a * n;
  return o;
}
const hl = Symbol("implicit");
function Xi() {
  var e = new ml(), t = [], n = [], a = hl;
  function i(o) {
    let l = e.get(o);
    if (l === void 0) {
      if (a !== hl)
        return a;
      e.set(o, l = t.push(o) - 1);
    }
    return n[l % n.length];
  }
  return i.domain = function(o) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new ml();
    for (const l of o)
      e.has(l) || e.set(l, t.push(l) - 1);
    return i;
  }, i.range = function(o) {
    return arguments.length ? (n = Array.from(o), i) : n.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (a = o, i) : a;
  }, i.copy = function() {
    return Xi(t, n).unknown(a);
  }, kr.apply(i, arguments), i;
}
function Qi() {
  var e = Xi().unknown(void 0), t = e.domain, n = e.range, a = 0, i = 1, o, l, s = !1, c = 0, u = 0, d = 0.5;
  delete e.unknown;
  function h() {
    var m = t().length, p = i < a, y = p ? i : a, E = p ? a : i;
    o = (E - y) / Math.max(1, m - c + u * 2), s && (o = Math.floor(o)), y += (E - y - o * (m - c)) * d, l = o * (1 - c), s && (y = Math.round(y), l = Math.round(l));
    var g = cd(m).map(function(f) {
      return y + o * f;
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
    return l;
  }, e.step = function() {
    return o;
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
    return Qi(t(), [a, i]).round(s).paddingInner(c).paddingOuter(u).align(d);
  }, kr.apply(h(), arguments);
}
function js(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return js(t());
  }, e;
}
function ud() {
  return js(Qi.apply(null, arguments).paddingInner(1));
}
function qs(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, i = e[n], o = e[a], l;
  return o < i && (l = n, n = a, a = l, l = i, i = o, o = l), e[n] = t.floor(i), e[a] = t.ceil(o), e;
}
function pl(e) {
  return Math.log(e);
}
function yl(e) {
  return Math.exp(e);
}
function dd(e) {
  return -Math.log(-e);
}
function md(e) {
  return -Math.exp(-e);
}
function fd(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function hd(e) {
  return e === 10 ? fd : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function pd(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function gl(e) {
  return (t, n) => -e(-t, n);
}
function yd(e) {
  const t = e(pl, yl), n = t.domain;
  let a = 10, i, o;
  function l() {
    return i = pd(a), o = hd(a), n()[0] < 0 ? (i = gl(i), o = gl(o), e(dd, md)) : e(pl, yl), t;
  }
  return t.base = function(s) {
    return arguments.length ? (a = +s, l()) : a;
  }, t.domain = function(s) {
    return arguments.length ? (n(s), l()) : n();
  }, t.ticks = (s) => {
    const c = n();
    let u = c[0], d = c[c.length - 1];
    const h = d < u;
    h && ([u, d] = [d, u]);
    let m = i(u), p = i(d), y, E;
    const g = s == null ? 10 : +s;
    let f = [];
    if (!(a % 1) && p - m < g) {
      if (m = Math.floor(m), p = Math.ceil(p), u > 0) {
        for (; m <= p; ++m)
          for (y = 1; y < a; ++y)
            if (E = m < 0 ? y / o(-m) : y * o(m), !(E < u)) {
              if (E > d)
                break;
              f.push(E);
            }
      } else
        for (; m <= p; ++m)
          for (y = a - 1; y >= 1; --y)
            if (E = m > 0 ? y / o(-m) : y * o(m), !(E < u)) {
              if (E > d)
                break;
              f.push(E);
            }
      f.length * 2 < g && (f = il(u, d, g));
    } else
      f = il(m, p, Math.min(p - m, g)).map(o);
    return h ? f.reverse() : f;
  }, t.tickFormat = (s, c) => {
    if (s == null && (s = 10), c == null && (c = a === 10 ? "s" : ","), typeof c != "function" && (!(a % 1) && (c = Wu(c)).precision == null && (c.trim = !0), c = Ku(c)), s === 1 / 0)
      return c;
    const u = Math.max(1, a * s / t.ticks().length);
    return (d) => {
      let h = d / o(Math.round(i(d)));
      return h * a < a - 0.5 && (h *= a), h <= u ? c(d) : "";
    };
  }, t.nice = () => n(qs(n(), {
    floor: (s) => o(Math.floor(i(s))),
    ceil: (s) => o(Math.ceil(i(s)))
  })), t;
}
function Us() {
  const e = yd(Hu()).domain([1, 10]);
  return e.copy = () => Rs(e, Us()).base(e.base()), kr.apply(e, arguments), e;
}
const Xa = Bs(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Xa.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Bs((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Xa);
Xa.range;
function gd(e, t, n, a, i, o) {
  const l = [
    [Gn, 1, wa],
    [Gn, 5, 5 * wa],
    [Gn, 15, 15 * wa],
    [Gn, 30, 30 * wa],
    [o, 1, Ca],
    [o, 5, 5 * Ca],
    [o, 15, 15 * Ca],
    [o, 30, 30 * Ca],
    [i, 1, Pa],
    [i, 3, 3 * Pa],
    [i, 6, 6 * Pa],
    [i, 12, 12 * Pa],
    [a, 1, ll],
    [a, 2, 2 * ll],
    [n, 1, qu],
    [t, 1, sl],
    [t, 3, 3 * sl],
    [e, 1, Br]
  ];
  function s(u, d, h) {
    const m = d < u;
    m && ([u, d] = [d, u]);
    const p = h && typeof h.range == "function" ? h : c(u, d, h), y = p ? p.range(u, +d + 1) : [];
    return m ? y.reverse() : y;
  }
  function c(u, d, h) {
    const m = Math.abs(d - u) / h, p = Fs(([, , g]) => g).right(l, m);
    if (p === l.length)
      return e.every(ol(u / Br, d / Br, h));
    if (p === 0)
      return Xa.every(Math.max(ol(u, d, h), 1));
    const [y, E] = l[m / l[p - 1][2] < l[p][2] / m ? p - 1 : p];
    return y.every(E);
  }
  return [s, c];
}
const [xd, vd] = gd(Vs, $s, Ws, Hs, Ms, Ds);
function bd(e) {
  return new Date(e);
}
function Ed(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Ys(e, t, n, a, i, o, l, s, c, u) {
  var d = Iu(), h = d.invert, m = d.domain, p = u(".%L"), y = u(":%S"), E = u("%I:%M"), g = u("%I %p"), f = u("%a %d"), x = u("%b %d"), v = u("%B"), b = u("%Y");
  function S(A) {
    return (c(A) < A ? p : s(A) < A ? y : l(A) < A ? E : o(A) < A ? g : a(A) < A ? i(A) < A ? f : x : n(A) < A ? v : b)(A);
  }
  return d.invert = function(A) {
    return new Date(h(A));
  }, d.domain = function(A) {
    return arguments.length ? m(Array.from(A, Ed)) : m().map(bd);
  }, d.ticks = function(A) {
    var T = m();
    return e(T[0], T[T.length - 1], A ?? 10);
  }, d.tickFormat = function(A, T) {
    return T == null ? S : u(T);
  }, d.nice = function(A) {
    var T = m();
    return (!A || typeof A.range != "function") && (A = t(T[0], T[T.length - 1], A ?? 10)), A ? m(qs(T, A)) : d;
  }, d.copy = function() {
    return Rs(d, Ys(e, t, n, a, i, o, l, s, c, u));
  }, d;
}
function Ad() {
  return kr.apply(Ys(xd, vd, Vs, $s, Ws, Hs, Ms, Ds, Gn, Ru).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var Sd = ya("domain", "range", "reverse", "align", "padding", "round");
function li(e) {
  return Sd(Qi(), e);
}
var Td = ya("domain", "range", "reverse", "align", "padding", "round");
function Dn(e) {
  return Td(ud(), e);
}
var kd = ya("domain", "range", "reverse", "clamp", "interpolate", "nice", "round");
function wd(e) {
  return kd(Ad(), e);
}
var Cd = ya("domain", "range", "reverse", "base", "clamp", "interpolate", "nice", "round");
function Qa(e) {
  return Cd(Us(), e);
}
var Pd = ya("domain", "range", "reverse", "unknown");
function Zi(e) {
  return Pd(Xi(), e);
}
function Nd(e) {
  if ((typeof e == "function" || typeof e == "object" && e) && "valueOf" in e) {
    var t = e.valueOf();
    if (typeof t == "number")
      return t;
  }
  return e;
}
function Ld(e, t) {
  var n = e;
  return "ticks" in n ? n.ticks(t) : n.domain().filter(function(a, i, o) {
    return t == null || o.length <= t || i % Math.round((o.length - 1) / t) === 0;
  });
}
function Od(e) {
  return e == null ? void 0 : e.toString();
}
var En = [], _d = function() {
  return En.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, Dd = function() {
  return En.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, xl = "ResizeObserver loop completed with undelivered notifications.", Md = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: xl
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = xl), window.dispatchEvent(e);
}, ua;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(ua || (ua = {}));
var An = function(e) {
  return Object.freeze(e);
}, Xs = function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, An(this);
  }
  return e;
}(), Qs = function() {
  function e(t, n, a, i) {
    return this.x = t, this.y = n, this.width = a, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, An(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, n = t.x, a = t.y, i = t.top, o = t.right, l = t.bottom, s = t.left, c = t.width, u = t.height;
    return { x: n, y: a, top: i, right: o, bottom: l, left: s, width: c, height: u };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), Gi = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, Zs = function(e) {
  if (Gi(e)) {
    var t = e.getBBox(), n = t.width, a = t.height;
    return !n && !a;
  }
  var i = e, o = i.offsetWidth, l = i.offsetHeight;
  return !(o || l || e.getClientRects().length);
}, vl = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var n = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(n && e instanceof n.Element);
}, $d = function(e) {
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
}, ta = typeof window < "u" ? window : {}, Na = /* @__PURE__ */ new WeakMap(), bl = /auto|scroll/, zd = /^tb|vertical/, Rd = /msie|trident/i.test(ta.navigator && ta.navigator.userAgent), Ht = function(e) {
  return parseFloat(e || "0");
}, zn = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new Xs((n ? t : e) || 0, (n ? e : t) || 0);
}, El = An({
  devicePixelContentBoxSize: zn(),
  borderBoxSize: zn(),
  contentBoxSize: zn(),
  contentRect: new Qs(0, 0, 0, 0)
}), Gs = function(e, t) {
  if (t === void 0 && (t = !1), Na.has(e) && !t)
    return Na.get(e);
  if (Zs(e))
    return Na.set(e, El), El;
  var n = getComputedStyle(e), a = Gi(e) && e.ownerSVGElement && e.getBBox(), i = !Rd && n.boxSizing === "border-box", o = zd.test(n.writingMode || ""), l = !a && bl.test(n.overflowY || ""), s = !a && bl.test(n.overflowX || ""), c = a ? 0 : Ht(n.paddingTop), u = a ? 0 : Ht(n.paddingRight), d = a ? 0 : Ht(n.paddingBottom), h = a ? 0 : Ht(n.paddingLeft), m = a ? 0 : Ht(n.borderTopWidth), p = a ? 0 : Ht(n.borderRightWidth), y = a ? 0 : Ht(n.borderBottomWidth), E = a ? 0 : Ht(n.borderLeftWidth), g = h + u, f = c + d, x = E + p, v = m + y, b = s ? e.offsetHeight - v - e.clientHeight : 0, S = l ? e.offsetWidth - x - e.clientWidth : 0, A = i ? g + x : 0, T = i ? f + v : 0, N = a ? a.width : Ht(n.width) - A - S, w = a ? a.height : Ht(n.height) - T - b, C = N + g + S + x, _ = w + f + b + v, k = An({
    devicePixelContentBoxSize: zn(Math.round(N * devicePixelRatio), Math.round(w * devicePixelRatio), o),
    borderBoxSize: zn(C, _, o),
    contentBoxSize: zn(N, w, o),
    contentRect: new Qs(h, c, N, w)
  });
  return Na.set(e, k), k;
}, Js = function(e, t, n) {
  var a = Gs(e, n), i = a.borderBoxSize, o = a.contentBoxSize, l = a.devicePixelContentBoxSize;
  switch (t) {
    case ua.DEVICE_PIXEL_CONTENT_BOX:
      return l;
    case ua.BORDER_BOX:
      return i;
    default:
      return o;
  }
}, ec = function() {
  function e(t) {
    var n = Gs(t);
    this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = An([n.borderBoxSize]), this.contentBoxSize = An([n.contentBoxSize]), this.devicePixelContentBoxSize = An([n.devicePixelContentBoxSize]);
  }
  return e;
}(), tc = function(e) {
  if (Zs(e))
    return 1 / 0;
  for (var t = 0, n = e.parentNode; n; )
    t += 1, n = n.parentNode;
  return t;
}, Fd = function() {
  var e = 1 / 0, t = [];
  En.forEach(function(l) {
    if (l.activeTargets.length !== 0) {
      var s = [];
      l.activeTargets.forEach(function(u) {
        var d = new ec(u.target), h = tc(u.target);
        s.push(d), u.lastReportedSize = Js(u.target, u.observedBox), h < e && (e = h);
      }), t.push(function() {
        l.callback.call(l.observer, s, l.observer);
      }), l.activeTargets.splice(0, l.activeTargets.length);
    }
  });
  for (var n = 0, a = t; n < a.length; n++) {
    var i = a[n];
    i();
  }
  return e;
}, Al = function(e) {
  En.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(i) {
      i.isActive() && (tc(i.target) > e ? n.activeTargets.push(i) : n.skippedTargets.push(i));
    });
  });
}, Bd = function() {
  var e = 0;
  for (Al(e); _d(); )
    e = Fd(), Al(e);
  return Dd() && Md(), e > 0;
}, Vr, nc = [], Vd = function() {
  return nc.splice(0).forEach(function(e) {
    return e();
  });
}, Hd = function(e) {
  if (!Vr) {
    var t = 0, n = document.createTextNode(""), a = { characterData: !0 };
    new MutationObserver(function() {
      return Vd();
    }).observe(n, a), Vr = function() {
      n.textContent = "".concat(t ? t-- : t++);
    };
  }
  nc.push(e), Vr();
}, Wd = function(e) {
  Hd(function() {
    requestAnimationFrame(e);
  });
}, Va = 0, Kd = function() {
  return !!Va;
}, Id = 250, jd = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Sl = [
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
], Tl = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Hr = !1, qd = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var n = this;
    if (t === void 0 && (t = Id), !Hr) {
      Hr = !0;
      var a = Tl(t);
      Wd(function() {
        var i = !1;
        try {
          i = Bd();
        } finally {
          if (Hr = !1, t = a - Tl(), !Kd())
            return;
          i ? n.run(1e3) : t > 0 ? n.run(t) : n.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, n = function() {
      return t.observer && t.observer.observe(document.body, jd);
    };
    document.body ? n() : ta.addEventListener("DOMContentLoaded", n);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Sl.forEach(function(n) {
      return ta.addEventListener(n, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), Sl.forEach(function(n) {
      return ta.removeEventListener(n, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), si = new qd(), kl = function(e) {
  !Va && e > 0 && si.start(), Va += e, !Va && si.stop();
}, Ud = function(e) {
  return !Gi(e) && !$d(e) && getComputedStyle(e).display === "inline";
}, Yd = function() {
  function e(t, n) {
    this.target = t, this.observedBox = n || ua.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = Js(this.target, this.observedBox, !0);
    return Ud(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), Xd = function() {
  function e(t, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = n;
  }
  return e;
}(), La = /* @__PURE__ */ new WeakMap(), wl = function(e, t) {
  for (var n = 0; n < e.length; n += 1)
    if (e[n].target === t)
      return n;
  return -1;
}, Oa = function() {
  function e() {
  }
  return e.connect = function(t, n) {
    var a = new Xd(t, n);
    La.set(t, a);
  }, e.observe = function(t, n, a) {
    var i = La.get(t), o = i.observationTargets.length === 0;
    wl(i.observationTargets, n) < 0 && (o && En.push(i), i.observationTargets.push(new Yd(n, a && a.box)), kl(1), si.schedule());
  }, e.unobserve = function(t, n) {
    var a = La.get(t), i = wl(a.observationTargets, n), o = a.observationTargets.length === 1;
    i >= 0 && (o && En.splice(En.indexOf(a), 1), a.observationTargets.splice(i, 1), kl(-1));
  }, e.disconnect = function(t) {
    var n = this, a = La.get(t);
    a.observationTargets.slice().forEach(function(i) {
      return n.unobserve(t, i.target);
    }), a.activeTargets.splice(0, a.activeTargets.length);
  }, e;
}(), Qd = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Oa.connect(this, t);
  }
  return e.prototype.observe = function(t, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!vl(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Oa.observe(this, t, n);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!vl(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Oa.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    Oa.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
const Zd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ResizeObserver: Qd,
  ResizeObserverEntry: ec,
  ResizeObserverSize: Xs
}, Symbol.toStringTag, { value: "Module" })), Gd = /* @__PURE__ */ Yi(Zd);
var Jd = ic, en = rc(Ns), em = rc(_u), Nn = am($), tm = Gd, nm = ["className", "children", "debounceTime", "ignoreDimensions", "parentSizeStyles", "enableDebounceLeadingCall"];
function ac(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (ac = function(i) {
    return i ? n : t;
  })(e);
}
function am(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var n = ac(t);
  if (n && n.has(e))
    return n.get(e);
  var a = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = i ? Object.getOwnPropertyDescriptor(e, o) : null;
      l && (l.get || l.set) ? Object.defineProperty(a, o, l) : a[o] = e[o];
    }
  return a.default = e, n && n.set(e, a), a;
}
function rc(e) {
  return e && e.__esModule ? e : { default: e };
}
function Za() {
  return Za = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Za.apply(this, arguments);
}
function rm(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var im = [];
function ic(e) {
  var t = e.className, n = e.children, a = e.debounceTime, i = a === void 0 ? 300 : a, o = e.ignoreDimensions, l = o === void 0 ? im : o, s = e.parentSizeStyles, c = s === void 0 ? {
    width: "100%",
    height: "100%"
  } : s, u = e.enableDebounceLeadingCall, d = u === void 0 ? !0 : u, h = rm(e, nm), m = (0, Nn.useRef)(null), p = (0, Nn.useRef)(0), y = (0, Nn.useState)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), E = y[0], g = y[1], f = (0, Nn.useMemo)(function() {
    var x = Array.isArray(l) ? l : [l];
    return (0, em.default)(function(v) {
      g(function(b) {
        var S = Object.keys(b), A = S.filter(function(N) {
          return b[N] !== v[N];
        }), T = A.every(function(N) {
          return x.includes(N);
        });
        return T ? b : v;
      });
    }, i, {
      leading: d
    });
  }, [i, d, l]);
  return (0, Nn.useEffect)(function() {
    var x = new tm.ResizeObserver(function(v) {
      v === void 0 && (v = []), v.forEach(function(b) {
        var S = b.contentRect, A = S.left, T = S.top, N = S.width, w = S.height;
        p.current = window.requestAnimationFrame(function() {
          f({
            width: N,
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
  }, [f]), /* @__PURE__ */ Nn.default.createElement("div", Za({
    style: c,
    ref: m,
    className: t
  }, h), n(Za({}, E, {
    ref: m.current,
    resize: f
  })));
}
ic.propTypes = {
  className: en.default.string,
  debounceTime: en.default.number,
  enableDebounceLeadingCall: en.default.bool,
  ignoreDimensions: en.default.oneOfType([en.default.any, en.default.arrayOf(en.default.any)]),
  children: en.default.func.isRequired
};
var Wr = /* @__PURE__ */ new Date(), Kr = /* @__PURE__ */ new Date();
function Gt(e, t, n, a) {
  function i(o) {
    return e(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
  }
  return i.floor = function(o) {
    return e(o = /* @__PURE__ */ new Date(+o)), o;
  }, i.ceil = function(o) {
    return e(o = new Date(o - 1)), t(o, 1), e(o), o;
  }, i.round = function(o) {
    var l = i(o), s = i.ceil(o);
    return o - l < s - o ? l : s;
  }, i.offset = function(o, l) {
    return t(o = /* @__PURE__ */ new Date(+o), l == null ? 1 : Math.floor(l)), o;
  }, i.range = function(o, l, s) {
    var c = [], u;
    if (o = i.ceil(o), s = s == null ? 1 : Math.floor(s), !(o < l) || !(s > 0))
      return c;
    do
      c.push(u = /* @__PURE__ */ new Date(+o)), t(o, s), e(o);
    while (u < o && o < l);
    return c;
  }, i.filter = function(o) {
    return Gt(function(l) {
      if (l >= l)
        for (; e(l), !o(l); )
          l.setTime(l - 1);
    }, function(l, s) {
      if (l >= l)
        if (s < 0)
          for (; ++s <= 0; )
            for (; t(l, -1), !o(l); )
              ;
        else
          for (; --s >= 0; )
            for (; t(l, 1), !o(l); )
              ;
    });
  }, n && (i.count = function(o, l) {
    return Wr.setTime(+o), Kr.setTime(+l), e(Wr), e(Kr), Math.floor(n(Wr, Kr));
  }, i.every = function(o) {
    return o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? i.filter(a ? function(l) {
      return a(l) % o === 0;
    } : function(l) {
      return i.count(0, l) % o === 0;
    }) : i;
  }), i;
}
const om = 1e3, Ji = om * 60, lm = Ji * 60, eo = lm * 24, oc = eo * 7;
var lc = Gt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Ji) / eo,
  (e) => e.getDate() - 1
);
const sc = lc;
lc.range;
function wn(e) {
  return Gt(function(t) {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setDate(t.getDate() + n * 7);
  }, function(t, n) {
    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Ji) / oc;
  });
}
var cc = wn(0), Ga = wn(1), sm = wn(2), cm = wn(3), Fn = wn(4), um = wn(5), dm = wn(6);
cc.range;
Ga.range;
sm.range;
cm.range;
Fn.range;
um.range;
dm.range;
var to = Gt(function(e) {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, function(e, t) {
  e.setFullYear(e.getFullYear() + t);
}, function(e, t) {
  return t.getFullYear() - e.getFullYear();
}, function(e) {
  return e.getFullYear();
});
to.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Gt(function(t) {
    t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setFullYear(t.getFullYear() + n * e);
  });
};
const da = to;
to.range;
var uc = Gt(function(e) {
  e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCDate(e.getUTCDate() + t);
}, function(e, t) {
  return (t - e) / eo;
}, function(e) {
  return e.getUTCDate() - 1;
});
const dc = uc;
uc.range;
function Cn(e) {
  return Gt(function(t) {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, function(t, n) {
    return (n - t) / oc;
  });
}
var mc = Cn(0), Ja = Cn(1), mm = Cn(2), fm = Cn(3), Bn = Cn(4), hm = Cn(5), pm = Cn(6);
mc.range;
Ja.range;
mm.range;
fm.range;
Bn.range;
hm.range;
pm.range;
var no = Gt(function(e) {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, function(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}, function(e) {
  return e.getUTCFullYear();
});
no.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Gt(function(t) {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function(t, n) {
    t.setUTCFullYear(t.getUTCFullYear() + n * e);
  });
};
const ma = no;
no.range;
function Ir(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function jr(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Yn(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function ym(e) {
  var t = e.dateTime, n = e.date, a = e.time, i = e.periods, o = e.days, l = e.shortDays, s = e.months, c = e.shortMonths, u = Xn(i), d = Qn(i), h = Xn(o), m = Qn(o), p = Xn(l), y = Qn(l), E = Xn(s), g = Qn(s), f = Xn(c), x = Qn(c), v = {
    a: H,
    A: Y,
    b: z,
    B: q,
    c: null,
    d: _l,
    e: _l,
    f: Bm,
    g: Xm,
    G: Zm,
    H: zm,
    I: Rm,
    j: Fm,
    L: fc,
    m: Vm,
    M: Hm,
    p: B,
    q: j,
    Q: $l,
    s: zl,
    S: Wm,
    u: Km,
    U: Im,
    V: jm,
    w: qm,
    W: Um,
    x: null,
    X: null,
    y: Ym,
    Y: Qm,
    Z: Gm,
    "%": Ml
  }, b = {
    a: U,
    A: X,
    b: ne,
    B: ce,
    c: null,
    d: Dl,
    e: Dl,
    f: nf,
    g: ff,
    G: pf,
    H: Jm,
    I: ef,
    j: tf,
    L: pc,
    m: af,
    M: rf,
    p: we,
    q: Ce,
    Q: $l,
    s: zl,
    S: of,
    u: lf,
    U: sf,
    V: cf,
    w: uf,
    W: df,
    x: null,
    X: null,
    y: mf,
    Y: hf,
    Z: yf,
    "%": Ml
  }, S = {
    a: C,
    A: _,
    b: k,
    B: O,
    c: K,
    d: Ll,
    e: Ll,
    f: _m,
    g: Nl,
    G: Pl,
    H: Ol,
    I: Ol,
    j: Pm,
    L: Om,
    m: Cm,
    M: Nm,
    p: w,
    q: wm,
    Q: Mm,
    s: $m,
    S: Lm,
    u: Em,
    U: Am,
    V: Sm,
    w: bm,
    W: Tm,
    x: V,
    X: F,
    y: Nl,
    Y: Pl,
    Z: km,
    "%": Dm
  };
  v.x = A(n, v), v.X = A(a, v), v.c = A(t, v), b.x = A(n, b), b.X = A(a, b), b.c = A(t, b);
  function A(G, W) {
    return function(ae) {
      var D = [], ue = -1, oe = 0, ye = G.length, he, Ee, Ne;
      for (ae instanceof Date || (ae = /* @__PURE__ */ new Date(+ae)); ++ue < ye; )
        G.charCodeAt(ue) === 37 && (D.push(G.slice(oe, ue)), (Ee = Cl[he = G.charAt(++ue)]) != null ? he = G.charAt(++ue) : Ee = he === "e" ? " " : "0", (Ne = W[he]) && (he = Ne(ae, Ee)), D.push(he), oe = ue + 1);
      return D.push(G.slice(oe, ue)), D.join("");
    };
  }
  function T(G, W) {
    return function(ae) {
      var D = Yn(1900, void 0, 1), ue = N(D, G, ae += "", 0), oe, ye;
      if (ue != ae.length)
        return null;
      if ("Q" in D)
        return new Date(D.Q);
      if ("s" in D)
        return new Date(D.s * 1e3 + ("L" in D ? D.L : 0));
      if (W && !("Z" in D) && (D.Z = 0), "p" in D && (D.H = D.H % 12 + D.p * 12), D.m === void 0 && (D.m = "q" in D ? D.q : 0), "V" in D) {
        if (D.V < 1 || D.V > 53)
          return null;
        "w" in D || (D.w = 1), "Z" in D ? (oe = jr(Yn(D.y, 0, 1)), ye = oe.getUTCDay(), oe = ye > 4 || ye === 0 ? Ja.ceil(oe) : Ja(oe), oe = dc.offset(oe, (D.V - 1) * 7), D.y = oe.getUTCFullYear(), D.m = oe.getUTCMonth(), D.d = oe.getUTCDate() + (D.w + 6) % 7) : (oe = Ir(Yn(D.y, 0, 1)), ye = oe.getDay(), oe = ye > 4 || ye === 0 ? Ga.ceil(oe) : Ga(oe), oe = sc.offset(oe, (D.V - 1) * 7), D.y = oe.getFullYear(), D.m = oe.getMonth(), D.d = oe.getDate() + (D.w + 6) % 7);
      } else
        ("W" in D || "U" in D) && ("w" in D || (D.w = "u" in D ? D.u % 7 : "W" in D ? 1 : 0), ye = "Z" in D ? jr(Yn(D.y, 0, 1)).getUTCDay() : Ir(Yn(D.y, 0, 1)).getDay(), D.m = 0, D.d = "W" in D ? (D.w + 6) % 7 + D.W * 7 - (ye + 5) % 7 : D.w + D.U * 7 - (ye + 6) % 7);
      return "Z" in D ? (D.H += D.Z / 100 | 0, D.M += D.Z % 100, jr(D)) : Ir(D);
    };
  }
  function N(G, W, ae, D) {
    for (var ue = 0, oe = W.length, ye = ae.length, he, Ee; ue < oe; ) {
      if (D >= ye)
        return -1;
      if (he = W.charCodeAt(ue++), he === 37) {
        if (he = W.charAt(ue++), Ee = S[he in Cl ? W.charAt(ue++) : he], !Ee || (D = Ee(G, ae, D)) < 0)
          return -1;
      } else if (he != ae.charCodeAt(D++))
        return -1;
    }
    return D;
  }
  function w(G, W, ae) {
    var D = u.exec(W.slice(ae));
    return D ? (G.p = d.get(D[0].toLowerCase()), ae + D[0].length) : -1;
  }
  function C(G, W, ae) {
    var D = p.exec(W.slice(ae));
    return D ? (G.w = y.get(D[0].toLowerCase()), ae + D[0].length) : -1;
  }
  function _(G, W, ae) {
    var D = h.exec(W.slice(ae));
    return D ? (G.w = m.get(D[0].toLowerCase()), ae + D[0].length) : -1;
  }
  function k(G, W, ae) {
    var D = f.exec(W.slice(ae));
    return D ? (G.m = x.get(D[0].toLowerCase()), ae + D[0].length) : -1;
  }
  function O(G, W, ae) {
    var D = E.exec(W.slice(ae));
    return D ? (G.m = g.get(D[0].toLowerCase()), ae + D[0].length) : -1;
  }
  function K(G, W, ae) {
    return N(G, t, W, ae);
  }
  function V(G, W, ae) {
    return N(G, n, W, ae);
  }
  function F(G, W, ae) {
    return N(G, a, W, ae);
  }
  function H(G) {
    return l[G.getDay()];
  }
  function Y(G) {
    return o[G.getDay()];
  }
  function z(G) {
    return c[G.getMonth()];
  }
  function q(G) {
    return s[G.getMonth()];
  }
  function B(G) {
    return i[+(G.getHours() >= 12)];
  }
  function j(G) {
    return 1 + ~~(G.getMonth() / 3);
  }
  function U(G) {
    return l[G.getUTCDay()];
  }
  function X(G) {
    return o[G.getUTCDay()];
  }
  function ne(G) {
    return c[G.getUTCMonth()];
  }
  function ce(G) {
    return s[G.getUTCMonth()];
  }
  function we(G) {
    return i[+(G.getUTCHours() >= 12)];
  }
  function Ce(G) {
    return 1 + ~~(G.getUTCMonth() / 3);
  }
  return {
    format: function(G) {
      var W = A(G += "", v);
      return W.toString = function() {
        return G;
      }, W;
    },
    parse: function(G) {
      var W = T(G += "", !1);
      return W.toString = function() {
        return G;
      }, W;
    },
    utcFormat: function(G) {
      var W = A(G += "", b);
      return W.toString = function() {
        return G;
      }, W;
    },
    utcParse: function(G) {
      var W = T(G += "", !0);
      return W.toString = function() {
        return G;
      }, W;
    }
  };
}
var Cl = { "-": "", _: " ", 0: "0" }, dt = /^\s*\d+/, gm = /^%/, xm = /[\\^$*+?|[\]().{}]/g;
function Ke(e, t, n) {
  var a = e < 0 ? "-" : "", i = (a ? -e : e) + "", o = i.length;
  return a + (o < n ? new Array(n - o + 1).join(t) + i : i);
}
function vm(e) {
  return e.replace(xm, "\\$&");
}
function Xn(e) {
  return new RegExp("^(?:" + e.map(vm).join("|") + ")", "i");
}
function Qn(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function bm(e, t, n) {
  var a = dt.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function Em(e, t, n) {
  var a = dt.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function Am(e, t, n) {
  var a = dt.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function Sm(e, t, n) {
  var a = dt.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function Tm(e, t, n) {
  var a = dt.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function Pl(e, t, n) {
  var a = dt.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function Nl(e, t, n) {
  var a = dt.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function km(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function wm(e, t, n) {
  var a = dt.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function Cm(e, t, n) {
  var a = dt.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function Ll(e, t, n) {
  var a = dt.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function Pm(e, t, n) {
  var a = dt.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function Ol(e, t, n) {
  var a = dt.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function Nm(e, t, n) {
  var a = dt.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function Lm(e, t, n) {
  var a = dt.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function Om(e, t, n) {
  var a = dt.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function _m(e, t, n) {
  var a = dt.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function Dm(e, t, n) {
  var a = gm.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function Mm(e, t, n) {
  var a = dt.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function $m(e, t, n) {
  var a = dt.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function _l(e, t) {
  return Ke(e.getDate(), t, 2);
}
function zm(e, t) {
  return Ke(e.getHours(), t, 2);
}
function Rm(e, t) {
  return Ke(e.getHours() % 12 || 12, t, 2);
}
function Fm(e, t) {
  return Ke(1 + sc.count(da(e), e), t, 3);
}
function fc(e, t) {
  return Ke(e.getMilliseconds(), t, 3);
}
function Bm(e, t) {
  return fc(e, t) + "000";
}
function Vm(e, t) {
  return Ke(e.getMonth() + 1, t, 2);
}
function Hm(e, t) {
  return Ke(e.getMinutes(), t, 2);
}
function Wm(e, t) {
  return Ke(e.getSeconds(), t, 2);
}
function Km(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Im(e, t) {
  return Ke(cc.count(da(e) - 1, e), t, 2);
}
function hc(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Fn(e) : Fn.ceil(e);
}
function jm(e, t) {
  return e = hc(e), Ke(Fn.count(da(e), e) + (da(e).getDay() === 4), t, 2);
}
function qm(e) {
  return e.getDay();
}
function Um(e, t) {
  return Ke(Ga.count(da(e) - 1, e), t, 2);
}
function Ym(e, t) {
  return Ke(e.getFullYear() % 100, t, 2);
}
function Xm(e, t) {
  return e = hc(e), Ke(e.getFullYear() % 100, t, 2);
}
function Qm(e, t) {
  return Ke(e.getFullYear() % 1e4, t, 4);
}
function Zm(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? Fn(e) : Fn.ceil(e), Ke(e.getFullYear() % 1e4, t, 4);
}
function Gm(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Ke(t / 60 | 0, "0", 2) + Ke(t % 60, "0", 2);
}
function Dl(e, t) {
  return Ke(e.getUTCDate(), t, 2);
}
function Jm(e, t) {
  return Ke(e.getUTCHours(), t, 2);
}
function ef(e, t) {
  return Ke(e.getUTCHours() % 12 || 12, t, 2);
}
function tf(e, t) {
  return Ke(1 + dc.count(ma(e), e), t, 3);
}
function pc(e, t) {
  return Ke(e.getUTCMilliseconds(), t, 3);
}
function nf(e, t) {
  return pc(e, t) + "000";
}
function af(e, t) {
  return Ke(e.getUTCMonth() + 1, t, 2);
}
function rf(e, t) {
  return Ke(e.getUTCMinutes(), t, 2);
}
function of(e, t) {
  return Ke(e.getUTCSeconds(), t, 2);
}
function lf(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function sf(e, t) {
  return Ke(mc.count(ma(e) - 1, e), t, 2);
}
function yc(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Bn(e) : Bn.ceil(e);
}
function cf(e, t) {
  return e = yc(e), Ke(Bn.count(ma(e), e) + (ma(e).getUTCDay() === 4), t, 2);
}
function uf(e) {
  return e.getUTCDay();
}
function df(e, t) {
  return Ke(Ja.count(ma(e) - 1, e), t, 2);
}
function mf(e, t) {
  return Ke(e.getUTCFullYear() % 100, t, 2);
}
function ff(e, t) {
  return e = yc(e), Ke(e.getUTCFullYear() % 100, t, 2);
}
function hf(e, t) {
  return Ke(e.getUTCFullYear() % 1e4, t, 4);
}
function pf(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Bn(e) : Bn.ceil(e), Ke(e.getUTCFullYear() % 1e4, t, 4);
}
function yf() {
  return "+0000";
}
function Ml() {
  return "%";
}
function $l(e) {
  return +e;
}
function zl(e) {
  return Math.floor(+e / 1e3);
}
var Ln, ci, gc;
gf({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function gf(e) {
  return Ln = ym(e), ci = Ln.format, gc = Ln.parse, Ln.utcFormat, Ln.utcParse, Ln;
}
const Me = $.createContext({}), Be = {
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
    if (Be.str(e) || Be.num(e))
      return e === t;
    if (Be.obj(e) && Be.obj(t) && Object.keys(e).length + Object.keys(t).length === 0)
      return !0;
    let n;
    for (n in e)
      if (!(n in t))
        return !1;
    for (n in t)
      if (e[n] !== t[n])
        return !1;
    return Be.und(n) ? e === t : !0;
  }
};
function xf(e, t) {
  return t === void 0 && (t = !0), (n) => (Be.arr(n) ? n : Object.keys(n)).reduce((a, i) => {
    const o = t ? i[0].toLowerCase() + i.substring(1) : i;
    return a[o] = e(o), a;
  }, e);
}
function xc() {
  const e = $.useState(!1), t = e[1];
  return $.useCallback(() => t((a) => !a), []);
}
function dn(e, t) {
  return Be.und(e) || Be.nul(e) ? t : e;
}
function Mn(e) {
  return Be.und(e) ? [] : Be.arr(e) ? e : [e];
}
function $t(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  return Be.fun(e) ? e(...n) : e;
}
function vf(e) {
  return e.to, e.from, e.config, e.onStart, e.onRest, e.onFrame, e.children, e.reset, e.reverse, e.force, e.immediate, e.delay, e.attach, e.destroyed, e.interpolateTo, e.ref, e.lazy, jt(e, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);
}
function qr(e) {
  const t = vf(e);
  if (Be.und(t))
    return Xe({
      to: t
    }, e);
  const n = Object.keys(e).reduce((a, i) => Be.und(t[i]) ? Xe({}, a, {
    [i]: e[i]
  }) : a, {});
  return Xe({
    to: t
  }, n);
}
function bf(e, t) {
  return t && (Be.fun(t) ? t(e) : Be.obj(t) && (t.current = e)), e;
}
class zt {
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
class ui extends zt {
  constructor() {
    super(...arguments), this.payload = [], this.attach = () => this.payload.forEach((t) => t instanceof zt && t.addChild(this)), this.detach = () => this.payload.forEach((t) => t instanceof zt && t.removeChild(this));
  }
}
class vc extends zt {
  constructor() {
    super(...arguments), this.payload = {}, this.attach = () => Object.values(this.payload).forEach((t) => t instanceof zt && t.addChild(this)), this.detach = () => Object.values(this.payload).forEach((t) => t instanceof zt && t.removeChild(this));
  }
  getValue(t) {
    t === void 0 && (t = !1);
    const n = {};
    for (const a in this.payload) {
      const i = this.payload[a];
      t && !(i instanceof zt) || (n[a] = i instanceof zt ? i[t ? "getAnimatedValue" : "getValue"]() : i);
    }
    return n;
  }
  getAnimatedValue() {
    return this.getValue(!0);
  }
}
let ao;
function Ef(e, t) {
  ao = {
    fn: e,
    transform: t
  };
}
let bc;
function Af(e) {
  bc = e;
}
let Ec = (e) => typeof window < "u" ? window.requestAnimationFrame(e) : -1, er;
function Sf(e) {
  er = e;
}
let Ac = () => Date.now(), Tf = (e) => e.current, Sc;
function kf(e) {
  Sc = e;
}
class wf extends vc {
  constructor(t, n) {
    super(), this.update = void 0, this.payload = t.style ? Xe({}, t, {
      style: Sc(t.style)
    }) : t, this.update = n, this.attach();
  }
}
const Cf = (e) => Be.fun(e) && !(e.prototype instanceof r.Component), Pf = (e) => $.forwardRef((n, a) => {
  const i = xc(), o = $.useRef(!0), l = $.useRef(null), s = $.useRef(null), c = $.useCallback((m) => {
    const p = l.current, y = () => {
      let E = !1;
      s.current && (E = ao.fn(s.current, l.current.getAnimatedValue())), (!s.current || E === !1) && i();
    };
    l.current = new wf(m, y), p && p.detach();
  }, []);
  $.useEffect(() => () => {
    o.current = !1, l.current && l.current.detach();
  }, []), $.useImperativeHandle(a, () => Tf(s)), c(n);
  const u = l.current.getValue();
  u.scrollTop, u.scrollLeft;
  const d = jt(u, ["scrollTop", "scrollLeft"]), h = Cf(e) ? void 0 : (m) => s.current = bf(m, a);
  return r.createElement(e, Xe({}, d, {
    ref: h
  }));
});
let na = !1;
const Sn = /* @__PURE__ */ new Set(), Tc = () => {
  if (!na)
    return !1;
  let e = Ac();
  for (let t of Sn) {
    let n = !1;
    for (let a = 0; a < t.configs.length; a++) {
      let i = t.configs[a], o, l;
      for (let s = 0; s < i.animatedValues.length; s++) {
        let c = i.animatedValues[s];
        if (c.done)
          continue;
        let u = i.fromValues[s], d = i.toValues[s], h = c.lastPosition, m = d instanceof zt, p = Array.isArray(i.initialVelocity) ? i.initialVelocity[s] : i.initialVelocity;
        if (m && (d = d.getValue()), i.immediate) {
          c.setValue(d), c.done = !0;
          continue;
        }
        if (typeof u == "string" || typeof d == "string") {
          c.setValue(d), c.done = !0;
          continue;
        }
        if (i.duration !== void 0)
          h = u + i.easing((e - c.startTime) / i.duration) * (d - u), o = e >= c.startTime + i.duration;
        else if (i.decay)
          h = u + p / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (e - c.startTime))), o = Math.abs(c.lastPosition - h) < 0.1, o && (d = h);
        else {
          l = c.lastTime !== void 0 ? c.lastTime : e, p = c.lastVelocity !== void 0 ? c.lastVelocity : i.initialVelocity, e > l + 64 && (l = e);
          let y = Math.floor(e - l);
          for (let x = 0; x < y; ++x) {
            let v = -i.tension * (h - d), b = -i.friction * p, S = (v + b) / i.mass;
            p = p + S * 1 / 1e3, h = h + p * 1 / 1e3;
          }
          let E = i.clamp && i.tension !== 0 ? u < d ? h > d : h < d : !1, g = Math.abs(p) <= i.precision, f = i.tension !== 0 ? Math.abs(d - h) <= i.precision : !0;
          o = E || g && f, c.lastVelocity = p, c.lastTime = e;
        }
        m && !i.toValues[s].done && (o = !1), o ? (c.value !== d && (h = d), c.done = !0) : n = !0, c.setValue(h), c.lastPosition = h;
      }
      t.props.onFrame && (t.values[i.name] = i.interpolation.getValue());
    }
    t.props.onFrame && t.props.onFrame(t.values), n || (Sn.delete(t), t.stop(!0));
  }
  return Sn.size ? Ec(Tc) : na = !1, na;
}, Nf = (e) => {
  Sn.has(e) || Sn.add(e), na || (na = !0, Ec(Tc));
}, Lf = (e) => {
  Sn.has(e) && Sn.delete(e);
};
function tr(e, t, n) {
  if (typeof e == "function")
    return e;
  if (Array.isArray(e))
    return tr({
      range: e,
      output: t,
      extrapolate: n
    });
  if (er && typeof e.output[0] == "string")
    return er(e);
  const a = e, i = a.output, o = a.range || [0, 1], l = a.extrapolateLeft || a.extrapolate || "extend", s = a.extrapolateRight || a.extrapolate || "extend", c = a.easing || ((u) => u);
  return (u) => {
    const d = _f(u, o);
    return Of(u, o[d], o[d + 1], i[d], i[d + 1], c, l, s, a.map);
  };
}
function Of(e, t, n, a, i, o, l, s, c) {
  let u = c ? c(e) : e;
  if (u < t) {
    if (l === "identity")
      return u;
    l === "clamp" && (u = t);
  }
  if (u > n) {
    if (s === "identity")
      return u;
    s === "clamp" && (u = n);
  }
  return a === i ? a : t === n ? e <= t ? a : i : (t === -1 / 0 ? u = -u : n === 1 / 0 ? u = u - t : u = (u - t) / (n - t), u = o(u), a === -1 / 0 ? u = -u : i === 1 / 0 ? u = u + a : u = u * (i - a) + a, u);
}
function _f(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
    ;
  return n - 1;
}
class Vn extends ui {
  constructor(t, n, a, i) {
    super(), this.calc = void 0, this.payload = t instanceof ui && !(t instanceof Vn) ? t.getPayload() : Array.isArray(t) ? t : [t], this.calc = tr(n, a, i);
  }
  getValue() {
    return this.calc(...this.payload.map((t) => t.getValue()));
  }
  updateConfig(t, n, a) {
    this.calc = tr(t, n, a);
  }
  interpolate(t, n, a) {
    return new Vn(this, t, n, a);
  }
}
const Df = (e, t, n) => e && new Vn(e, t, n);
function kc(e, t) {
  "update" in e ? t.add(e) : e.getChildren().forEach((n) => kc(n, t));
}
class di extends zt {
  constructor(t) {
    var n;
    super(), n = this, this.animatedStyles = /* @__PURE__ */ new Set(), this.value = void 0, this.startPosition = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.startTime = void 0, this.lastTime = void 0, this.done = !1, this.setValue = function(a, i) {
      i === void 0 && (i = !0), n.value = a, i && n.flush();
    }, this.value = t, this.startPosition = t, this.lastPosition = t;
  }
  flush() {
    this.animatedStyles.size === 0 && kc(this, this.animatedStyles), this.animatedStyles.forEach((t) => t.update());
  }
  clearStyles() {
    this.animatedStyles.clear();
  }
  getValue() {
    return this.value;
  }
  interpolate(t, n, a) {
    return new Vn(this, t, n, a);
  }
}
class Mf extends ui {
  constructor(t) {
    super(), this.payload = t.map((n) => new di(n));
  }
  setValue(t, n) {
    n === void 0 && (n = !0), Array.isArray(t) ? t.length === this.payload.length && t.forEach((a, i) => this.payload[i].setValue(a, n)) : this.payload.forEach((a) => a.setValue(t, n));
  }
  getValue() {
    return this.payload.map((t) => t.getValue());
  }
  interpolate(t, n) {
    return new Vn(this, t, n);
  }
}
let $f = 0;
class zf {
  constructor() {
    this.id = void 0, this.idle = !0, this.hasChanged = !1, this.guid = 0, this.local = 0, this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.values = {}, this.configs = [], this.listeners = [], this.queue = [], this.localQueue = void 0, this.getValues = () => this.interpolations, this.id = $f++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */
  update(t) {
    if (!t)
      return this;
    const n = qr(t), a = n.delay, i = a === void 0 ? 0 : a, o = n.to, l = jt(n, ["delay", "to"]);
    if (Be.arr(o) || Be.fun(o))
      this.queue.push(Xe({}, l, {
        delay: i,
        to: o
      }));
    else if (o) {
      let s = {};
      Object.entries(o).forEach((c) => {
        let u = c[0], d = c[1];
        const h = Xe({
          to: {
            [u]: d
          },
          delay: $t(i, u)
        }, l), m = s[h.delay] && s[h.delay].to;
        s[h.delay] = Xe({}, s[h.delay], h, {
          to: Xe({}, m, h.to)
        });
      }), this.queue = Object.values(s);
    }
    return this.queue = this.queue.sort((s, c) => s.delay - c.delay), this.diff(l), this;
  }
  /** start(onEnd)
   *  This function either executes a queue, if present, or starts the frameloop, which animates */
  start(t) {
    if (this.queue.length) {
      this.idle = !1, this.localQueue && this.localQueue.forEach((i) => {
        let o = i.from, l = o === void 0 ? {} : o, s = i.to, c = s === void 0 ? {} : s;
        Be.obj(l) && (this.merged = Xe({}, l, this.merged)), Be.obj(c) && (this.merged = Xe({}, this.merged, c));
      });
      const n = this.local = ++this.guid, a = this.localQueue = this.queue;
      this.queue = [], a.forEach((i, o) => {
        let l = i.delay, s = jt(i, ["delay"]);
        const c = (d) => {
          o === a.length - 1 && n === this.guid && d && (this.idle = !0, this.props.onRest && this.props.onRest(this.merged)), t && t();
        };
        let u = Be.arr(s.to) || Be.fun(s.to);
        l ? setTimeout(() => {
          n === this.guid && (u ? this.runAsync(s, c) : this.diff(s).start(c));
        }, l) : u ? this.runAsync(s, c) : this.diff(s).start(c);
      });
    } else
      Be.fun(t) && this.listeners.push(t), this.props.onStart && this.props.onStart(), Nf(this);
    return this;
  }
  stop(t) {
    return this.listeners.forEach((n) => n(t)), this.listeners = [], this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */
  pause(t) {
    return this.stop(!0), t && Lf(this), this;
  }
  runAsync(t, n) {
    var a = this;
    t.delay;
    let i = jt(t, ["delay"]);
    const o = this.local;
    let l = Promise.resolve(void 0);
    if (Be.arr(i.to))
      for (let s = 0; s < i.to.length; s++) {
        const c = s, u = Xe({}, i, qr(i.to[c]));
        Be.arr(u.config) && (u.config = u.config[c]), l = l.then(() => {
          if (o === this.guid)
            return new Promise((d) => this.diff(u).start(d));
        });
      }
    else if (Be.fun(i.to)) {
      let s = 0, c;
      l = l.then(() => i.to(
        // next(props)
        (u) => {
          const d = Xe({}, i, qr(u));
          if (Be.arr(d.config) && (d.config = d.config[s]), s++, o === this.guid)
            return c = new Promise((h) => this.diff(d).start(h));
        },
        // cancel()
        function(u) {
          return u === void 0 && (u = !0), a.stop(u);
        }
      ).then(() => c));
    }
    l.then(n);
  }
  diff(t) {
    this.props = Xe({}, this.props, t);
    let n = this.props, a = n.from, i = a === void 0 ? {} : a, o = n.to, l = o === void 0 ? {} : o, s = n.config, c = s === void 0 ? {} : s, u = n.reverse, d = n.attach, h = n.reset, m = n.immediate;
    if (u) {
      var p = [l, i];
      i = p[0], l = p[1];
    }
    this.merged = Xe({}, i, this.merged, l), this.hasChanged = !1;
    let y = d && d(this);
    if (this.animations = Object.entries(this.merged).reduce((E, g) => {
      let f = g[0], x = g[1], v = E[f] || {};
      const b = Be.num(x), S = Be.str(x) && !x.startsWith("#") && !/\d/.test(x) && !bc[x], A = Be.arr(x), T = !b && !A && !S;
      let N = Be.und(i[f]) ? x : i[f], w = b || A || S ? x : 1, C = $t(c, f);
      y && (w = y.animations[f].parent);
      let _ = v.parent, k = v.interpolation, O = Mn(y ? w.getPayload() : w), K, V = x;
      T && (V = er({
        range: [0, 1],
        output: [x, x]
      })(1));
      let F = k && k.getValue();
      const Y = !Be.und(_) && v.animatedValues.some((j) => !j.done), z = !Be.equ(V, F), q = !Be.equ(V, v.previous), B = !Be.equ(C, v.config);
      if (h || q && z || B) {
        if (b || S)
          _ = k = v.parent || new di(N);
        else if (A)
          _ = k = v.parent || new Mf(N);
        else if (T) {
          let j = v.interpolation && v.interpolation.calc(v.parent.value);
          j = j !== void 0 && !h ? j : N, v.parent ? (_ = v.parent, _.setValue(0, !1)) : _ = new di(0);
          const U = {
            output: [j, x]
          };
          v.interpolation ? (k = v.interpolation, v.interpolation.updateConfig(U)) : k = _.interpolate(U);
        }
        return O = Mn(y ? w.getPayload() : w), K = Mn(_.getPayload()), h && !T && _.setValue(N, !1), this.hasChanged = !0, K.forEach((j) => {
          j.startPosition = j.value, j.lastPosition = j.value, j.lastVelocity = Y ? j.lastVelocity : void 0, j.lastTime = Y ? j.lastTime : void 0, j.startTime = Ac(), j.done = !1, j.animatedStyles.clear();
        }), $t(m, f) && _.setValue(T ? w : x, !1), Xe({}, E, {
          [f]: Xe({}, v, {
            name: f,
            parent: _,
            interpolation: k,
            animatedValues: K,
            toValues: O,
            previous: V,
            config: C,
            fromValues: Mn(_.getValue()),
            immediate: $t(m, f),
            initialVelocity: dn(C.velocity, 0),
            clamp: dn(C.clamp, !1),
            precision: dn(C.precision, 0.01),
            tension: dn(C.tension, 170),
            friction: dn(C.friction, 26),
            mass: dn(C.mass, 1),
            duration: C.duration,
            easing: dn(C.easing, (j) => j),
            decay: C.decay
          })
        });
      } else
        return z ? E : (T && (_.setValue(1, !1), k.updateConfig({
          output: [V, V]
        })), _.done = !0, this.hasChanged = !0, Xe({}, E, {
          [f]: Xe({}, E[f], {
            previous: V
          })
        }));
    }, this.animations), this.hasChanged) {
      this.configs = Object.values(this.animations), this.values = {}, this.interpolations = {};
      for (let E in this.animations)
        this.interpolations[E] = this.animations[E].interpolation, this.values[E] = this.animations[E].interpolation.getValue();
    }
    return this;
  }
  destroy() {
    this.stop(), this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.values = {}, this.configs = [], this.local = 0;
  }
}
let Rf = 0;
const Ha = "enter", Ur = "leave", Yr = "update", Ff = (e, t) => (typeof t == "function" ? e.map(t) : Mn(t)).map(String), mi = (e) => {
  let t = e.items, n = e.keys, a = n === void 0 ? (o) => o : n, i = jt(e, ["items", "keys"]);
  return t = Mn(t !== void 0 ? t : null), Xe({
    items: t,
    keys: Ff(t, a)
  }, i);
};
function Bf(e, t, n) {
  const a = Xe({
    items: e,
    keys: t || ((x) => x)
  }, n), i = mi(a), o = i.lazy, l = o === void 0 ? !1 : o;
  i.unique;
  const s = i.reset, c = s === void 0 ? !1 : s;
  i.enter, i.leave, i.update;
  const u = i.onDestroyed;
  i.keys, i.items;
  const d = i.onFrame, h = i.onRest, m = i.onStart, p = i.ref, y = jt(i, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]), E = xc(), g = $.useRef(!1), f = $.useRef({
    mounted: !1,
    first: !0,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!a.ref,
    instances: !g.current && /* @__PURE__ */ new Map(),
    forceUpdate: E
  });
  return $.useImperativeHandle(a.ref, () => ({
    start: () => Promise.all(Array.from(f.current.instances).map((x) => {
      let v = x[1];
      return new Promise((b) => v.start(b));
    })),
    stop: (x) => Array.from(f.current.instances).forEach((v) => v[1].stop(x)),
    get controllers() {
      return Array.from(f.current.instances).map((x) => x[1]);
    }
  })), f.current = Vf(f.current, a), f.current.changed && f.current.transitions.forEach((x) => {
    const v = x.slot, b = x.from, S = x.to, A = x.config, T = x.trail, N = x.key, w = x.item;
    f.current.instances.has(N) || f.current.instances.set(N, new zf());
    const C = f.current.instances.get(N), _ = Xe({}, y, {
      to: S,
      from: b,
      config: A,
      ref: p,
      onRest: (k) => {
        f.current.mounted && (x.destroyed && (!p && !l && Rl(f, N), u && u(w)), !Array.from(f.current.instances).some((V) => !V[1].idle) && (p || l) && f.current.deleted.length > 0 && Rl(f), h && h(w, v, k));
      },
      onStart: m && (() => m(w, v)),
      onFrame: d && ((k) => d(w, v, k)),
      delay: T,
      reset: c && v === Ha
      // Update controller
    });
    C.update(_), f.current.paused || C.start();
  }), $.useEffect(() => (f.current.mounted = g.current = !0, () => {
    f.current.mounted = g.current = !1, Array.from(f.current.instances).map((x) => x[1].destroy()), f.current.instances.clear();
  }), []), f.current.transitions.map((x) => {
    let v = x.item, b = x.slot, S = x.key;
    return {
      item: v,
      key: S,
      state: b,
      props: f.current.instances.get(S).getValues()
    };
  });
}
function Rl(e, t) {
  const n = e.current.deleted;
  for (let a of n) {
    let i = a.key;
    const o = (l) => l.key !== i;
    (Be.und(t) || t === i) && (e.current.instances.delete(i), e.current.transitions = e.current.transitions.filter(o), e.current.deleted = e.current.deleted.filter(o));
  }
  e.current.forceUpdate();
}
function Vf(e, t) {
  let n = e.first, a = e.prevProps, i = jt(e, ["first", "prevProps"]), o = mi(t), l = o.items, s = o.keys, c = o.initial, u = o.from, d = o.enter, h = o.leave, m = o.update, p = o.trail, y = p === void 0 ? 0 : p, E = o.unique, g = o.config, f = o.order, x = f === void 0 ? [Ha, Ur, Yr] : f, v = mi(a), b = v.keys, S = v.items, A = Xe({}, i.current), T = [...i.deleted], N = Object.keys(A), w = new Set(N), C = new Set(s), _ = s.filter((F) => !w.has(F)), k = i.transitions.filter((F) => !F.destroyed && !C.has(F.originalKey)).map((F) => F.originalKey), O = s.filter((F) => w.has(F)), K = -y;
  for (; x.length; )
    switch (x.shift()) {
      case Ha: {
        _.forEach((H, Y) => {
          E && T.find((j) => j.originalKey === H) && (T = T.filter((j) => j.originalKey !== H));
          const z = s.indexOf(H), q = l[z], B = n && c !== void 0 ? "initial" : Ha;
          A[H] = {
            slot: B,
            originalKey: H,
            key: E ? String(H) : Rf++,
            item: q,
            trail: K = K + y,
            config: $t(g, q, B),
            from: $t(n && c !== void 0 ? c || {} : u, q),
            to: $t(d, q)
          };
        });
        break;
      }
      case Ur: {
        k.forEach((H) => {
          const Y = b.indexOf(H), z = S[Y], q = Ur;
          T.unshift(Xe({}, A[H], {
            slot: q,
            destroyed: !0,
            left: b[Math.max(0, Y - 1)],
            right: b[Math.min(b.length, Y + 1)],
            trail: K = K + y,
            config: $t(g, z, q),
            to: $t(h, z)
          })), delete A[H];
        });
        break;
      }
      case Yr: {
        O.forEach((H) => {
          const Y = s.indexOf(H), z = l[Y], q = Yr;
          A[H] = Xe({}, A[H], {
            item: z,
            slot: q,
            trail: K = K + y,
            config: $t(g, z, q),
            to: $t(m, z)
          });
        });
        break;
      }
    }
  let V = s.map((F) => A[F]);
  return T.forEach((F) => {
    let H = F.left;
    F.right;
    let Y = jt(F, ["left", "right"]), z;
    (z = V.findIndex((q) => q.originalKey === H)) !== -1 && (z += 1), z = Math.max(0, z), V = [...V.slice(0, z), Y, ...V.slice(z)];
  }), Xe({}, i, {
    changed: _.length || k.length || O.length,
    first: n && _.length === 0,
    transitions: V,
    current: A,
    deleted: T,
    prevProps: t
  });
}
class Hf extends vc {
  constructor(t) {
    t === void 0 && (t = {}), super(), t.transform && !(t.transform instanceof zt) && (t = ao.transform(t)), this.payload = t;
  }
}
const nr = {
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
}, Rt = "[-+]?\\d*\\.?\\d+", ar = Rt + "%";
function wr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const Wf = new RegExp("rgb" + wr(Rt, Rt, Rt)), Kf = new RegExp("rgba" + wr(Rt, Rt, Rt, Rt)), If = new RegExp("hsl" + wr(Rt, ar, ar)), jf = new RegExp("hsla" + wr(Rt, ar, ar, Rt)), qf = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Uf = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Yf = /^#([0-9a-fA-F]{6})$/, Xf = /^#([0-9a-fA-F]{8})$/;
function Qf(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Yf.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : nr.hasOwnProperty(e) ? nr[e] : (t = Wf.exec(e)) ? (On(t[1]) << 24 | // r
  On(t[2]) << 16 | // g
  On(t[3]) << 8 | // b
  255) >>> // a
  0 : (t = Kf.exec(e)) ? (On(t[1]) << 24 | // r
  On(t[2]) << 16 | // g
  On(t[3]) << 8 | // b
  Vl(t[4])) >>> // a
  0 : (t = qf.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (t = Xf.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Uf.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    t[4] + t[4],
    // a
    16
  ) >>> 0 : (t = If.exec(e)) ? (Fl(
    Bl(t[1]),
    // h
    _a(t[2]),
    // s
    _a(t[3])
    // l
  ) | 255) >>> // a
  0 : (t = jf.exec(e)) ? (Fl(
    Bl(t[1]),
    // h
    _a(t[2]),
    // s
    _a(t[3])
    // l
  ) | Vl(t[4])) >>> // a
  0 : null;
}
function Xr(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Fl(e, t, n) {
  const a = n < 0.5 ? n * (1 + t) : n + t - n * t, i = 2 * n - a, o = Xr(i, a, e + 1 / 3), l = Xr(i, a, e), s = Xr(i, a, e - 1 / 3);
  return Math.round(o * 255) << 24 | Math.round(l * 255) << 16 | Math.round(s * 255) << 8;
}
function On(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Bl(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function Vl(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function _a(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Hl(e) {
  let t = Qf(e);
  if (t === null)
    return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, a = (t & 16711680) >>> 16, i = (t & 65280) >>> 8, o = (t & 255) / 255;
  return `rgba(${n}, ${a}, ${i}, ${o})`;
}
const Da = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, Zf = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, Gf = new RegExp(`(${Object.keys(nr).join("|")})`, "g"), Jf = (e) => {
  const t = e.output.map((i) => i.replace(Zf, Hl)).map((i) => i.replace(Gf, Hl)), n = t[0].match(Da).map(() => []);
  t.forEach((i) => {
    i.match(Da).forEach((o, l) => n[l].push(+o));
  });
  const a = t[0].match(Da).map((i, o) => tr(Xe({}, e, {
    output: n[o]
  })));
  return (i) => {
    let o = 0;
    return t[0].replace(Da, () => a[o++](i)).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (l, s, c, u, d) => `rgba(${Math.round(s)}, ${Math.round(c)}, ${Math.round(u)}, ${d})`);
  };
};
let aa = {
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
const eh = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), th = ["Webkit", "Ms", "Moz", "O"];
aa = Object.keys(aa).reduce((e, t) => (th.forEach((n) => e[eh(n, t)] = e[t]), e), aa);
function nh(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : !n && typeof t == "number" && t !== 0 && !(aa.hasOwnProperty(e) && aa[e]) ? t + "px" : ("" + t).trim();
}
const Wl = {};
kf((e) => new Hf(e));
Sf(Jf);
Af(nr);
Ef((e, t) => {
  if (e.nodeType && e.setAttribute !== void 0) {
    const i = t.style, o = t.children, l = t.scrollTop, s = t.scrollLeft, c = jt(t, ["style", "children", "scrollTop", "scrollLeft"]), u = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter";
    l !== void 0 && (e.scrollTop = l), s !== void 0 && (e.scrollLeft = s), o !== void 0 && (e.textContent = o);
    for (let d in i)
      if (i.hasOwnProperty(d)) {
        var n = d.indexOf("--") === 0, a = nh(d, i[d], n);
        d === "float" && (d = "cssFloat"), n ? e.style.setProperty(d, a) : e.style[d] = a;
      }
    for (let d in c) {
      const h = u ? d : Wl[d] || (Wl[d] = d.replace(/([A-Z])/g, (m) => "-" + m.toLowerCase()));
      typeof e.getAttribute(h) < "u" && e.setAttribute(h, c[d]);
    }
    return;
  } else
    return !1;
}, (e) => e);
const ah = [
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
], rh = xf(Pf, !1), Kl = rh(ah);
var fi = Math.PI, hi = 2 * fi, xn = 1e-6, ih = hi - xn;
function pi() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null, this._ = "";
}
function Cr() {
  return new pi();
}
pi.prototype = Cr.prototype = {
  constructor: pi,
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
  bezierCurveTo: function(e, t, n, a, i, o) {
    this._ += "C" + +e + "," + +t + "," + +n + "," + +a + "," + (this._x1 = +i) + "," + (this._y1 = +o);
  },
  arcTo: function(e, t, n, a, i) {
    e = +e, t = +t, n = +n, a = +a, i = +i;
    var o = this._x1, l = this._y1, s = n - e, c = a - t, u = o - e, d = l - t, h = u * u + d * d;
    if (i < 0)
      throw new Error("negative radius: " + i);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
    else if (h > xn)
      if (!(Math.abs(d * s - c * u) > xn) || !i)
        this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
      else {
        var m = n - o, p = a - l, y = s * s + c * c, E = m * m + p * p, g = Math.sqrt(y), f = Math.sqrt(h), x = i * Math.tan((fi - Math.acos((y + h - E) / (2 * g * f))) / 2), v = x / f, b = x / g;
        Math.abs(v - 1) > xn && (this._ += "L" + (e + v * u) + "," + (t + v * d)), this._ += "A" + i + "," + i + ",0,0," + +(d * m > u * p) + "," + (this._x1 = e + b * s) + "," + (this._y1 = t + b * c);
      }
  },
  arc: function(e, t, n, a, i, o) {
    e = +e, t = +t, n = +n, o = !!o;
    var l = n * Math.cos(a), s = n * Math.sin(a), c = e + l, u = t + s, d = 1 ^ o, h = o ? a - i : i - a;
    if (n < 0)
      throw new Error("negative radius: " + n);
    this._x1 === null ? this._ += "M" + c + "," + u : (Math.abs(this._x1 - c) > xn || Math.abs(this._y1 - u) > xn) && (this._ += "L" + c + "," + u), n && (h < 0 && (h = h % hi + hi), h > ih ? this._ += "A" + n + "," + n + ",0,1," + d + "," + (e - l) + "," + (t - s) + "A" + n + "," + n + ",0,1," + d + "," + (this._x1 = c) + "," + (this._y1 = u) : h > xn && (this._ += "A" + n + "," + n + ",0," + +(h >= fi) + "," + d + "," + (this._x1 = e + n * Math.cos(i)) + "," + (this._y1 = t + n * Math.sin(i))));
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
var Il = Math.abs, gt = Math.atan2, mn = Math.cos, oh = Math.max, Qr = Math.min, Wt = Math.sin, $n = Math.sqrt, xt = 1e-12, fa = Math.PI, rr = fa / 2, Wa = 2 * fa;
function lh(e) {
  return e > 1 ? 0 : e < -1 ? fa : Math.acos(e);
}
function jl(e) {
  return e >= 1 ? rr : e <= -1 ? -rr : Math.asin(e);
}
function sh(e) {
  return e.innerRadius;
}
function ch(e) {
  return e.outerRadius;
}
function uh(e) {
  return e.startAngle;
}
function dh(e) {
  return e.endAngle;
}
function mh(e) {
  return e && e.padAngle;
}
function fh(e, t, n, a, i, o, l, s) {
  var c = n - e, u = a - t, d = l - i, h = s - o, m = h * c - d * u;
  if (!(m * m < xt))
    return m = (d * (t - o) - h * (e - i)) / m, [e + m * c, t + m * u];
}
function Ma(e, t, n, a, i, o, l) {
  var s = e - n, c = t - a, u = (l ? o : -o) / $n(s * s + c * c), d = u * c, h = -u * s, m = e + d, p = t + h, y = n + d, E = a + h, g = (m + y) / 2, f = (p + E) / 2, x = y - m, v = E - p, b = x * x + v * v, S = i - o, A = m * E - y * p, T = (v < 0 ? -1 : 1) * $n(oh(0, S * S * b - A * A)), N = (A * v - x * T) / b, w = (-A * x - v * T) / b, C = (A * v + x * T) / b, _ = (-A * x + v * T) / b, k = N - g, O = w - f, K = C - g, V = _ - f;
  return k * k + O * O > K * K + V * V && (N = C, w = _), {
    cx: N,
    cy: w,
    x01: -d,
    y01: -h,
    x11: N * (i / S - 1),
    y11: w * (i / S - 1)
  };
}
function hh() {
  var e = sh, t = ch, n = We(0), a = null, i = uh, o = dh, l = mh, s = null;
  function c() {
    var u, d, h = +e.apply(this, arguments), m = +t.apply(this, arguments), p = i.apply(this, arguments) - rr, y = o.apply(this, arguments) - rr, E = Il(y - p), g = y > p;
    if (s || (s = u = Cr()), m < h && (d = m, m = h, h = d), !(m > xt))
      s.moveTo(0, 0);
    else if (E > Wa - xt)
      s.moveTo(m * mn(p), m * Wt(p)), s.arc(0, 0, m, p, y, !g), h > xt && (s.moveTo(h * mn(y), h * Wt(y)), s.arc(0, 0, h, y, p, g));
    else {
      var f = p, x = y, v = p, b = y, S = E, A = E, T = l.apply(this, arguments) / 2, N = T > xt && (a ? +a.apply(this, arguments) : $n(h * h + m * m)), w = Qr(Il(m - h) / 2, +n.apply(this, arguments)), C = w, _ = w, k, O;
      if (N > xt) {
        var K = jl(N / h * Wt(T)), V = jl(N / m * Wt(T));
        (S -= K * 2) > xt ? (K *= g ? 1 : -1, v += K, b -= K) : (S = 0, v = b = (p + y) / 2), (A -= V * 2) > xt ? (V *= g ? 1 : -1, f += V, x -= V) : (A = 0, f = x = (p + y) / 2);
      }
      var F = m * mn(f), H = m * Wt(f), Y = h * mn(b), z = h * Wt(b);
      if (w > xt) {
        var q = m * mn(x), B = m * Wt(x), j = h * mn(v), U = h * Wt(v), X;
        if (E < fa && (X = fh(F, H, j, U, q, B, Y, z))) {
          var ne = F - X[0], ce = H - X[1], we = q - X[0], Ce = B - X[1], G = 1 / Wt(lh((ne * we + ce * Ce) / ($n(ne * ne + ce * ce) * $n(we * we + Ce * Ce))) / 2), W = $n(X[0] * X[0] + X[1] * X[1]);
          C = Qr(w, (h - W) / (G - 1)), _ = Qr(w, (m - W) / (G + 1));
        }
      }
      A > xt ? _ > xt ? (k = Ma(j, U, F, H, m, _, g), O = Ma(q, B, Y, z, m, _, g), s.moveTo(k.cx + k.x01, k.cy + k.y01), _ < w ? s.arc(k.cx, k.cy, _, gt(k.y01, k.x01), gt(O.y01, O.x01), !g) : (s.arc(k.cx, k.cy, _, gt(k.y01, k.x01), gt(k.y11, k.x11), !g), s.arc(0, 0, m, gt(k.cy + k.y11, k.cx + k.x11), gt(O.cy + O.y11, O.cx + O.x11), !g), s.arc(O.cx, O.cy, _, gt(O.y11, O.x11), gt(O.y01, O.x01), !g))) : (s.moveTo(F, H), s.arc(0, 0, m, f, x, !g)) : s.moveTo(F, H), !(h > xt) || !(S > xt) ? s.lineTo(Y, z) : C > xt ? (k = Ma(Y, z, q, B, h, -C, g), O = Ma(F, H, j, U, h, -C, g), s.lineTo(k.cx + k.x01, k.cy + k.y01), C < w ? s.arc(k.cx, k.cy, C, gt(k.y01, k.x01), gt(O.y01, O.x01), !g) : (s.arc(k.cx, k.cy, C, gt(k.y01, k.x01), gt(k.y11, k.x11), !g), s.arc(0, 0, h, gt(k.cy + k.y11, k.cx + k.x11), gt(O.cy + O.y11, O.cx + O.x11), g), s.arc(O.cx, O.cy, C, gt(O.y11, O.x11), gt(O.y01, O.x01), !g))) : s.arc(0, 0, h, b, v, g);
    }
    if (s.closePath(), u)
      return s = null, u + "" || null;
  }
  return c.centroid = function() {
    var u = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, d = (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 - fa / 2;
    return [mn(d) * u, Wt(d) * u];
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
    return arguments.length ? (o = typeof u == "function" ? u : We(+u), c) : o;
  }, c.padAngle = function(u) {
    return arguments.length ? (l = typeof u == "function" ? u : We(+u), c) : l;
  }, c.context = function(u) {
    return arguments.length ? (s = u ?? null, c) : s;
  }, c;
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
function Pr(e) {
  return new wc(e);
}
function Cc(e) {
  return e[0];
}
function Pc(e) {
  return e[1];
}
function Nc() {
  var e = Cc, t = Pc, n = We(!0), a = null, i = Pr, o = null;
  function l(s) {
    var c, u = s.length, d, h = !1, m;
    for (a == null && (o = i(m = Cr())), c = 0; c <= u; ++c)
      !(c < u && n(d = s[c], c, s)) === h && ((h = !h) ? o.lineStart() : o.lineEnd()), h && o.point(+e(d, c, s), +t(d, c, s));
    if (m)
      return o = null, m + "" || null;
  }
  return l.x = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : We(+s), l) : e;
  }, l.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : We(+s), l) : t;
  }, l.defined = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : We(!!s), l) : n;
  }, l.curve = function(s) {
    return arguments.length ? (i = s, a != null && (o = i(a)), l) : i;
  }, l.context = function(s) {
    return arguments.length ? (s == null ? a = o = null : o = i(a = s), l) : a;
  }, l;
}
function ph() {
  var e = Cc, t = null, n = We(0), a = Pc, i = We(!0), o = null, l = Pr, s = null;
  function c(d) {
    var h, m, p, y = d.length, E, g = !1, f, x = new Array(y), v = new Array(y);
    for (o == null && (s = l(f = Cr())), h = 0; h <= y; ++h) {
      if (!(h < y && i(E = d[h], h, d)) === g)
        if (g = !g)
          m = h, s.areaStart(), s.lineStart();
        else {
          for (s.lineEnd(), s.lineStart(), p = h - 1; p >= m; --p)
            s.point(x[p], v[p]);
          s.lineEnd(), s.areaEnd();
        }
      g && (x[h] = +e(E, h, d), v[h] = +n(E, h, d), s.point(t ? +t(E, h, d) : x[h], a ? +a(E, h, d) : v[h]));
    }
    if (f)
      return s = null, f + "" || null;
  }
  function u() {
    return Nc().defined(i).curve(l).context(o);
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
    return arguments.length ? (l = d, o != null && (s = l(o)), c) : l;
  }, c.context = function(d) {
    return arguments.length ? (d == null ? o = s = null : s = l(o = d), c) : o;
  }, c;
}
function yh(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function gh(e) {
  return e;
}
function xh() {
  var e = gh, t = yh, n = null, a = We(0), i = We(Wa), o = We(0);
  function l(s) {
    var c, u = s.length, d, h, m = 0, p = new Array(u), y = new Array(u), E = +a.apply(this, arguments), g = Math.min(Wa, Math.max(-Wa, i.apply(this, arguments) - E)), f, x = Math.min(Math.abs(g) / u, o.apply(this, arguments)), v = x * (g < 0 ? -1 : 1), b;
    for (c = 0; c < u; ++c)
      (b = y[p[c] = c] = +e(s[c], c, s)) > 0 && (m += b);
    for (t != null ? p.sort(function(S, A) {
      return t(y[S], y[A]);
    }) : n != null && p.sort(function(S, A) {
      return n(s[S], s[A]);
    }), c = 0, h = m ? (g - u * v) / m : 0; c < u; ++c, E = f)
      d = p[c], b = y[d], f = E + (b > 0 ? b * h : 0) + v, y[d] = {
        data: s[d],
        index: c,
        value: b,
        startAngle: E,
        endAngle: f,
        padAngle: x
      };
    return y;
  }
  return l.value = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : We(+s), l) : e;
  }, l.sortValues = function(s) {
    return arguments.length ? (t = s, n = null, l) : t;
  }, l.sort = function(s) {
    return arguments.length ? (n = s, t = null, l) : n;
  }, l.startAngle = function(s) {
    return arguments.length ? (a = typeof s == "function" ? s : We(+s), l) : a;
  }, l.endAngle = function(s) {
    return arguments.length ? (i = typeof s == "function" ? s : We(+s), l) : i;
  }, l.padAngle = function(s) {
    return arguments.length ? (o = typeof s == "function" ? s : We(+s), l) : o;
  }, l;
}
var ql = Array.prototype.slice;
function sn() {
}
function ir(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6
  );
}
function Nr(e) {
  this._context = e;
}
Nr.prototype = {
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
        ir(this, this._x1, this._y1);
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
        ir(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function vh(e) {
  return new Nr(e);
}
function Lc(e) {
  this._context = e;
}
Lc.prototype = {
  areaStart: sn,
  areaEnd: sn,
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
        ir(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function bh(e) {
  return new Lc(e);
}
function Oc(e) {
  this._context = e;
}
Oc.prototype = {
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
        ir(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Eh(e) {
  return new Oc(e);
}
function _c(e, t) {
  this._basis = new Nr(e), this._beta = t;
}
_c.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e = this._x, t = this._y, n = e.length - 1;
    if (n > 0)
      for (var a = e[0], i = t[0], o = e[n] - a, l = t[n] - i, s = -1, c; ++s <= n; )
        c = s / n, this._basis.point(
          this._beta * e[s] + (1 - this._beta) * (a + c * o),
          this._beta * t[s] + (1 - this._beta) * (i + c * l)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
const Ah = function e(t) {
  function n(a) {
    return t === 1 ? new Nr(a) : new _c(a, t);
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
function ro(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
ro.prototype = {
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
const Sh = function e(t) {
  function n(a) {
    return new ro(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function io(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
io.prototype = {
  areaStart: sn,
  areaEnd: sn,
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
const Th = function e(t) {
  function n(a) {
    return new io(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function oo(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
oo.prototype = {
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
const kh = function e(t) {
  function n(a) {
    return new oo(a, t);
  }
  return n.tension = function(a) {
    return e(+a);
  }, n;
}(0);
function lo(e, t, n) {
  var a = e._x1, i = e._y1, o = e._x2, l = e._y2;
  if (e._l01_a > xt) {
    var s = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, c = 3 * e._l01_a * (e._l01_a + e._l12_a);
    a = (a * s - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / c, i = (i * s - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / c;
  }
  if (e._l23_a > xt) {
    var u = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, d = 3 * e._l23_a * (e._l23_a + e._l12_a);
    o = (o * u + e._x1 * e._l23_2a - t * e._l12_2a) / d, l = (l * u + e._y1 * e._l23_2a - n * e._l12_2a) / d;
  }
  e._context.bezierCurveTo(a, i, o, l, e._x2, e._y2);
}
function Dc(e, t) {
  this._context = e, this._alpha = t;
}
Dc.prototype = {
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
        lo(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const wh = function e(t) {
  function n(a) {
    return t ? new Dc(a, t) : new ro(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function Mc(e, t) {
  this._context = e, this._alpha = t;
}
Mc.prototype = {
  areaStart: sn,
  areaEnd: sn,
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
        lo(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Ch = function e(t) {
  function n(a) {
    return t ? new Mc(a, t) : new io(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
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
        lo(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Ph = function e(t) {
  function n(a) {
    return t ? new $c(a, t) : new oo(a, 0);
  }
  return n.alpha = function(a) {
    return e(+a);
  }, n;
}(0.5);
function zc(e) {
  this._context = e;
}
zc.prototype = {
  areaStart: sn,
  areaEnd: sn,
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
function yi(e) {
  return new zc(e);
}
function Ul(e) {
  return e < 0 ? -1 : 1;
}
function Yl(e, t, n) {
  var a = e._x1 - e._x0, i = t - e._x1, o = (e._y1 - e._y0) / (a || i < 0 && -0), l = (n - e._y1) / (i || a < 0 && -0), s = (o * i + l * a) / (a + i);
  return (Ul(o) + Ul(l)) * Math.min(Math.abs(o), Math.abs(l), 0.5 * Math.abs(s)) || 0;
}
function Xl(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Zr(e, t, n) {
  var a = e._x0, i = e._y0, o = e._x1, l = e._y1, s = (o - a) / 3;
  e._context.bezierCurveTo(a + s, i + s * t, o - s, l - s * n, o, l);
}
function lr(e) {
  this._context = e;
}
lr.prototype = {
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
        Zr(this, this._t0, Xl(this, this._t0));
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
          this._point = 3, Zr(this, Xl(this, n = Yl(this, e, t)), n);
          break;
        default:
          Zr(this, this._t0, n = Yl(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
function Rc(e) {
  this._context = new Fc(e);
}
(Rc.prototype = Object.create(lr.prototype)).point = function(e, t) {
  lr.prototype.point.call(this, t, e);
};
function Fc(e) {
  this._context = e;
}
Fc.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, n, a, i, o) {
    this._context.bezierCurveTo(t, e, a, n, o, i);
  }
};
function Ka(e) {
  return new lr(e);
}
function Nh(e) {
  return new Rc(e);
}
function Bc(e) {
  this._context = e;
}
Bc.prototype = {
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
        for (var a = Ql(e), i = Ql(t), o = 0, l = 1; l < n; ++o, ++l)
          this._context.bezierCurveTo(a[0][o], i[0][o], a[1][o], i[1][o], e[l], t[l]);
    (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Ql(e) {
  var t, n = e.length - 1, a, i = new Array(n), o = new Array(n), l = new Array(n);
  for (i[0] = 0, o[0] = 2, l[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t)
    i[t] = 1, o[t] = 4, l[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[n - 1] = 2, o[n - 1] = 7, l[n - 1] = 8 * e[n - 1] + e[n], t = 1; t < n; ++t)
    a = i[t] / o[t - 1], o[t] -= a, l[t] -= a * l[t - 1];
  for (i[n - 1] = l[n - 1] / o[n - 1], t = n - 2; t >= 0; --t)
    i[t] = (l[t] - i[t + 1]) / o[t];
  for (o[n - 1] = (e[n] + i[n - 1]) / 2, t = 0; t < n - 1; ++t)
    o[t] = 2 * e[t + 1] - i[t + 1];
  return [i, o];
}
function Lh(e) {
  return new Bc(e);
}
function Lr(e, t) {
  this._context = e, this._t = t;
}
Lr.prototype = {
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
function Oh(e) {
  return new Lr(e, 0.5);
}
function _h(e) {
  return new Lr(e, 0);
}
function Dh(e) {
  return new Lr(e, 1);
}
function Hn(e, t) {
  if ((l = e.length) > 1)
    for (var n = 1, a, i, o = e[t[0]], l, s = o.length; n < l; ++n)
      for (i = o, o = e[t[n]], a = 0; a < s; ++a)
        o[a][1] += o[a][0] = isNaN(i[a][1]) ? i[a][0] : i[a][1];
}
function Wn(e) {
  for (var t = e.length, n = new Array(t); --t >= 0; )
    n[t] = t;
  return n;
}
function Mh(e, t) {
  return e[t];
}
function so() {
  var e = We([]), t = Wn, n = Hn, a = Mh;
  function i(o) {
    var l = e.apply(this, arguments), s, c = o.length, u = l.length, d = new Array(u), h;
    for (s = 0; s < u; ++s) {
      for (var m = l[s], p = d[s] = new Array(c), y = 0, E; y < c; ++y)
        p[y] = E = [0, +a(o[y], m, y, o)], E.data = o[y];
      p.key = m;
    }
    for (s = 0, h = t(d); s < u; ++s)
      d[h[s]].index = s;
    return n(d, h), d;
  }
  return i.keys = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : We(ql.call(o)), i) : e;
  }, i.value = function(o) {
    return arguments.length ? (a = typeof o == "function" ? o : We(+o), i) : a;
  }, i.order = function(o) {
    return arguments.length ? (t = o == null ? Wn : typeof o == "function" ? o : We(ql.call(o)), i) : t;
  }, i.offset = function(o) {
    return arguments.length ? (n = o ?? Hn, i) : n;
  }, i;
}
function $h(e, t) {
  if ((a = e.length) > 0) {
    for (var n, a, i = 0, o = e[0].length, l; i < o; ++i) {
      for (l = n = 0; n < a; ++n)
        l += e[n][i][1] || 0;
      if (l)
        for (n = 0; n < a; ++n)
          e[n][i][1] /= l;
    }
    Hn(e, t);
  }
}
function zh(e, t) {
  if ((c = e.length) > 0)
    for (var n, a = 0, i, o, l, s, c, u = e[t[0]].length; a < u; ++a)
      for (l = s = 0, n = 0; n < c; ++n)
        (o = (i = e[t[n]][a])[1] - i[0]) > 0 ? (i[0] = l, i[1] = l += o) : o < 0 ? (i[1] = s, i[0] = s += o) : (i[0] = 0, i[1] = o);
}
function Rh(e, t) {
  if ((i = e.length) > 0) {
    for (var n = 0, a = e[t[0]], i, o = a.length; n < o; ++n) {
      for (var l = 0, s = 0; l < i; ++l)
        s += e[l][n][1] || 0;
      a[n][1] += a[n][0] = -s / 2;
    }
    Hn(e, t);
  }
}
function Fh(e, t) {
  if (!(!((l = e.length) > 0) || !((o = (i = e[t[0]]).length) > 0))) {
    for (var n = 0, a = 1, i, o, l; a < o; ++a) {
      for (var s = 0, c = 0, u = 0; s < l; ++s) {
        for (var d = e[t[s]], h = d[a][1] || 0, m = d[a - 1][1] || 0, p = (h - m) / 2, y = 0; y < s; ++y) {
          var E = e[t[y]], g = E[a][1] || 0, f = E[a - 1][1] || 0;
          p += g - f;
        }
        c += h, u += p * h;
      }
      i[a - 1][1] += i[a - 1][0] = n, c && (n -= u / c);
    }
    i[a - 1][1] += i[a - 1][0] = n, Hn(e, t);
  }
}
function Bh(e) {
  var t = e.map(Vh);
  return Wn(e).sort(function(n, a) {
    return t[n] - t[a];
  });
}
function Vh(e) {
  for (var t = -1, n = 0, a = e.length, i, o = -1 / 0; ++t < a; )
    (i = +e[t][1]) > o && (o = i, n = t);
  return n;
}
function Vc(e) {
  var t = e.map(Hc);
  return Wn(e).sort(function(n, a) {
    return t[n] - t[a];
  });
}
function Hc(e) {
  for (var t = 0, n = -1, a = e.length, i; ++n < a; )
    (i = +e[n][1]) && (t += i);
  return t;
}
function Hh(e) {
  return Vc(e).reverse();
}
function Wh(e) {
  var t = e.length, n, a, i = e.map(Hc), o = Bh(e), l = 0, s = 0, c = [], u = [];
  for (n = 0; n < t; ++n)
    a = o[n], l < s ? (l += i[a], c.push(a)) : (s += i[a], u.push(a));
  return u.reverse().concat(c);
}
function Kh(e) {
  return Wn(e).reverse();
}
function Ze(e, t) {
  e(t);
}
var Zl = {
  ascending: Vc,
  descending: Hh,
  insideout: Wh,
  none: Wn,
  reverse: Kh
};
function co(e) {
  return e && Zl[e] || Zl.none;
}
var Gl = {
  expand: $h,
  diverging: zh,
  none: Hn,
  silhouette: Rh,
  wiggle: Fh
};
function uo(e) {
  return e && Gl[e] || Gl.none;
}
function Ih(e) {
  var t = e === void 0 ? {} : e, n = t.innerRadius, a = t.outerRadius, i = t.cornerRadius, o = t.startAngle, l = t.endAngle, s = t.padAngle, c = t.padRadius, u = hh();
  return n != null && Ze(u.innerRadius, n), a != null && Ze(u.outerRadius, a), i != null && Ze(u.cornerRadius, i), o != null && Ze(u.startAngle, o), l != null && Ze(u.endAngle, l), s != null && Ze(u.padAngle, s), c != null && Ze(u.padRadius, c), u;
}
function mo(e) {
  var t = e === void 0 ? {} : e, n = t.x, a = t.x0, i = t.x1, o = t.y, l = t.y0, s = t.y1, c = t.defined, u = t.curve, d = ph();
  return n && Ze(d.x, n), a && Ze(d.x0, a), i && Ze(d.x1, i), o && Ze(d.y, o), l && Ze(d.y0, l), s && Ze(d.y1, s), c && d.defined(c), u && d.curve(u), d;
}
function Wc(e) {
  var t = e === void 0 ? {} : e, n = t.x, a = t.y, i = t.defined, o = t.curve, l = Nc();
  return n && Ze(l.x, n), a && Ze(l.y, a), i && l.defined(i), o && l.curve(o), l;
}
function jh(e) {
  var t = e === void 0 ? {} : e, n = t.startAngle, a = t.endAngle, i = t.padAngle, o = t.value, l = t.sort, s = t.sortValues, c = xh();
  return (l === null || l != null) && c.sort(l), (s === null || s != null) && c.sortValues(s), o != null && c.value(o), i != null && Ze(c.padAngle, i), n != null && Ze(c.startAngle, n), a != null && Ze(c.endAngle, a), c;
}
function qh(e) {
  var t = e.keys, n = e.value, a = e.order, i = e.offset, o = so();
  return t && o.keys(t), n && Ze(o.value, n), a && o.order(co(a)), i && o.offset(uo(i)), o;
}
var Uh = ["className", "top", "left", "data", "centroid", "innerRadius", "outerRadius", "cornerRadius", "startAngle", "endAngle", "padAngle", "padRadius", "pieSort", "pieSortValues", "pieValue", "children", "fill"];
function gi() {
  return gi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, gi.apply(this, arguments);
}
function Yh(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Xh(e) {
  var t = e.className, n = e.top, a = e.left, i = e.data, o = i === void 0 ? [] : i, l = e.centroid, s = e.innerRadius, c = s === void 0 ? 0 : s, u = e.outerRadius, d = e.cornerRadius, h = e.startAngle, m = e.endAngle, p = e.padAngle, y = e.padRadius, E = e.pieSort, g = e.pieSortValues, f = e.pieValue, x = e.children, v = e.fill, b = v === void 0 ? "" : v, S = Yh(e, Uh), A = Ih({
    innerRadius: c,
    outerRadius: u,
    cornerRadius: d,
    padRadius: y
  }), T = jh({
    startAngle: h,
    endAngle: m,
    padAngle: p,
    value: f,
    sort: E,
    sortValues: g
  }), N = T(o);
  return x ? /* @__PURE__ */ r.createElement(r.Fragment, null, x({
    arcs: N,
    path: A,
    pie: T
  })) : /* @__PURE__ */ r.createElement(be, {
    className: "visx-pie-arcs-group",
    top: n,
    left: a
  }, N.map(function(w, C) {
    return /* @__PURE__ */ r.createElement("g", {
      key: "pie-arc-" + C
    }, /* @__PURE__ */ r.createElement("path", gi({
      className: rt("visx-pie-arc", t),
      d: A(w) || "",
      fill: b == null || typeof b == "string" ? b : b(w)
    }, S)), l == null ? void 0 : l(A.centroid(w), w));
  }));
}
var Qh = ["from", "to", "fill", "className", "innerRef"];
function xi() {
  return xi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, xi.apply(this, arguments);
}
function Zh(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function qe(e) {
  var t = e.from, n = t === void 0 ? {
    x: 0,
    y: 0
  } : t, a = e.to, i = a === void 0 ? {
    x: 1,
    y: 1
  } : a, o = e.fill, l = o === void 0 ? "transparent" : o, s = e.className, c = e.innerRef, u = Zh(e, Qh), d = n.x === i.x || n.y === i.y;
  return /* @__PURE__ */ r.createElement("line", xi({
    ref: c,
    className: rt("visx-line", s),
    x1: n.x,
    y1: n.y,
    x2: i.x,
    y2: i.y,
    fill: l,
    shapeRendering: d ? "crispEdges" : "auto"
  }, u));
}
var Gh = ["children", "data", "x", "y", "fill", "className", "curve", "innerRef", "defined"];
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
function Jh(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Zt(e) {
  var t = e.children, n = e.data, a = n === void 0 ? [] : n, i = e.x, o = e.y, l = e.fill, s = l === void 0 ? "transparent" : l, c = e.className, u = e.curve, d = e.innerRef, h = e.defined, m = h === void 0 ? function() {
    return !0;
  } : h, p = Jh(e, Gh), y = Wc({
    x: i,
    y: o,
    defined: m,
    curve: u
  });
  return t ? /* @__PURE__ */ r.createElement(r.Fragment, null, t({
    path: y
  })) : /* @__PURE__ */ r.createElement("path", vi({
    ref: d,
    className: rt("visx-linepath", c),
    d: y(a) || "",
    fill: s,
    strokeLinecap: "round"
  }, p));
}
var ep = ["children", "x", "x0", "x1", "y", "y0", "y1", "data", "defined", "className", "curve", "innerRef"];
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
function tp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function np(e) {
  var t = e.children, n = e.x, a = e.x0, i = e.x1, o = e.y, l = e.y0, s = e.y1, c = e.data, u = c === void 0 ? [] : c, d = e.defined, h = d === void 0 ? function() {
    return !0;
  } : d, m = e.className, p = e.curve, y = e.innerRef, E = tp(e, ep), g = mo({
    x: n,
    x0: a,
    x1: i,
    y: o,
    y0: l,
    y1: s,
    defined: h,
    curve: p
  });
  return t ? /* @__PURE__ */ r.createElement(r.Fragment, null, t({
    path: g
  })) : /* @__PURE__ */ r.createElement("path", bi({
    ref: y,
    className: rt("visx-area", m),
    d: g(u) || ""
  }, E));
}
var ap = ["x", "x0", "x1", "y", "y1", "y0", "yScale", "data", "defined", "className", "curve", "innerRef", "children"];
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
function rp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function ip(e) {
  var t = e.x, n = e.x0, a = e.x1, i = e.y, o = e.y1, l = e.y0, s = e.yScale, c = e.data, u = c === void 0 ? [] : c, d = e.defined, h = d === void 0 ? function() {
    return !0;
  } : d, m = e.className, p = e.curve, y = e.innerRef, E = e.children, g = rp(e, ap), f = mo({
    x: t,
    x0: n,
    x1: a,
    defined: h,
    curve: p
  });
  return l == null ? f.y0(s.range()[0]) : Ze(f.y0, l), i && !o && Ze(f.y1, i), o && !i && Ze(f.y1, o), E ? /* @__PURE__ */ r.createElement(r.Fragment, null, E({
    path: f
  })) : /* @__PURE__ */ r.createElement("path", Ei({
    ref: y,
    className: rt("visx-area-closed", m),
    d: f(u) || ""
  }, g));
}
var op = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
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
function lp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function sp(e) {
  var t = e.className, n = e.top, a = e.left, i = e.keys, o = e.data, l = e.curve, s = e.defined, c = e.x, u = e.x0, d = e.x1, h = e.y0, m = e.y1, p = e.value, y = e.order, E = e.offset, g = e.color, f = e.children, x = lp(e, op), v = qh({
    keys: i,
    value: p,
    order: y,
    offset: E
  }), b = mo({
    x: c,
    x0: u,
    x1: d,
    y0: h,
    y1: m,
    curve: l,
    defined: s
  }), S = v(o);
  return f ? /* @__PURE__ */ r.createElement(r.Fragment, null, f({
    stacks: S,
    path: b,
    stack: v
  })) : /* @__PURE__ */ r.createElement(be, {
    top: n,
    left: a
  }, S.map(function(A, T) {
    return /* @__PURE__ */ r.createElement("path", Ai({
      className: rt("visx-stack", t),
      key: "stack-" + T + "-" + (A.key || ""),
      d: b(A) || "",
      fill: g == null ? void 0 : g(A.key, T)
    }, x));
  }));
}
var cp = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
function sr() {
  return sr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, sr.apply(this, arguments);
}
function up(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function dp(e) {
  var t = e.className, n = e.top, a = e.left, i = e.keys, o = e.data, l = e.curve, s = e.defined, c = e.x, u = e.x0, d = e.x1, h = e.y0, m = e.y1, p = e.value, y = e.order, E = e.offset, g = e.color, f = e.children, x = up(e, cp);
  return /* @__PURE__ */ r.createElement(sp, sr({
    className: t,
    top: n,
    left: a,
    keys: i,
    data: o,
    curve: l,
    defined: s,
    x: c,
    x0: u,
    x1: d,
    y0: h,
    y1: m,
    value: p,
    order: y,
    offset: E,
    color: g
  }, x), f || function(v) {
    var b = v.stacks, S = v.path;
    return b.map(function(A, T) {
      return /* @__PURE__ */ r.createElement("path", sr({
        className: rt("visx-area-stack", t),
        key: "area-stack-" + T + "-" + (A.key || ""),
        d: S(A) || "",
        fill: g == null ? void 0 : g(A.key, T)
      }, x));
    });
  });
}
function fo(e) {
  if ("bandwidth" in e)
    return e.bandwidth();
  var t = e.range(), n = e.domain();
  return Math.abs(t[t.length - 1] - t[0]) / n.length;
}
var mp = ["data", "className", "top", "left", "x0", "x0Scale", "x1Scale", "yScale", "color", "keys", "height", "children"];
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
function fp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Kc(e) {
  var t = e.data, n = e.className, a = e.top, i = e.left, o = e.x0, l = e.x0Scale, s = e.x1Scale, c = e.yScale, u = e.color, d = e.keys, h = e.height, m = e.children, p = fp(e, mp), y = fo(s), E = t.map(function(g, f) {
    return {
      index: f,
      x0: l(o(g)),
      bars: d.map(function(x, v) {
        var b = g[x];
        return {
          index: v,
          key: x,
          value: b,
          width: y,
          x: s(x) || 0,
          y: c(b) || 0,
          color: u(x, v),
          height: h - (c(b) || 0)
        };
      })
    };
  });
  return m ? /* @__PURE__ */ r.createElement(r.Fragment, null, m(E)) : /* @__PURE__ */ r.createElement(be, {
    className: rt("visx-bar-group", n),
    top: a,
    left: i
  }, E.map(function(g) {
    return /* @__PURE__ */ r.createElement(be, {
      key: "bar-group-" + g.index + "-" + g.x0,
      left: g.x0
    }, g.bars.map(function(f) {
      return /* @__PURE__ */ r.createElement(_t, Si({
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
function Ic(e) {
  return e == null ? void 0 : e[0];
}
function jc(e) {
  return e == null ? void 0 : e[1];
}
var hp = ["data", "className", "top", "left", "x", "y0", "y1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
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
function pp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function yp(e) {
  var t = e.data, n = e.className, a = e.top, i = e.left, o = e.x, l = e.y0, s = l === void 0 ? Ic : l, c = e.y1, u = c === void 0 ? jc : c, d = e.xScale, h = e.yScale, m = e.color, p = e.keys, y = e.value, E = e.order, g = e.offset, f = e.children, x = pp(e, hp), v = so();
  p && v.keys(p), y && Ze(v.value, y), E && v.order(co(E)), g && v.offset(uo(g));
  var b = v(t), S = fo(d), A = b.map(function(T, N) {
    var w = T.key;
    return {
      index: N,
      key: w,
      bars: T.map(function(C, _) {
        var k = (h(s(C)) || 0) - (h(u(C)) || 0), O = h(u(C)), K = "bandwidth" in d ? d(o(C.data)) : Math.max((d(o(C.data)) || 0) - S / 2);
        return {
          bar: C,
          key: w,
          index: _,
          height: k,
          width: S,
          x: K || 0,
          y: O || 0,
          color: m(T.key, _)
        };
      })
    };
  });
  return f ? /* @__PURE__ */ r.createElement(r.Fragment, null, f(A)) : /* @__PURE__ */ r.createElement(be, {
    className: rt("visx-bar-stack", n),
    top: a,
    left: i
  }, A.map(function(T) {
    return T.bars.map(function(N) {
      return /* @__PURE__ */ r.createElement(_t, Ti({
        key: "bar-stack-" + T.index + "-" + N.index,
        x: N.x,
        y: N.y,
        height: N.height,
        width: N.width,
        fill: N.color
      }, x));
    });
  }));
}
var gp = ["data", "className", "top", "left", "y", "x0", "x1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
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
function xp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function vp(e) {
  var t = e.data, n = e.className, a = e.top, i = e.left, o = e.y, l = e.x0, s = l === void 0 ? Ic : l, c = e.x1, u = c === void 0 ? jc : c, d = e.xScale, h = e.yScale, m = e.color, p = e.keys, y = e.value, E = e.order, g = e.offset, f = e.children, x = xp(e, gp), v = so();
  p && v.keys(p), y && Ze(v.value, y), E && v.order(co(E)), g && v.offset(uo(g));
  var b = v(t), S = fo(h), A = b.map(function(T, N) {
    var w = T.key;
    return {
      index: N,
      key: w,
      bars: T.map(function(C, _) {
        var k = (d(u(C)) || 0) - (d(s(C)) || 0), O = d(s(C)), K = "bandwidth" in h ? h(o(C.data)) : Math.max((h(o(C.data)) || 0) - k / 2);
        return {
          bar: C,
          key: w,
          index: _,
          height: S,
          width: k,
          x: O || 0,
          y: K || 0,
          color: m(T.key, _)
        };
      })
    };
  });
  return f ? /* @__PURE__ */ r.createElement(r.Fragment, null, f(A)) : /* @__PURE__ */ r.createElement(be, {
    className: rt("visx-bar-stack-horizontal", n),
    top: a,
    left: i
  }, A.map(function(T) {
    return T.bars.map(function(N) {
      return /* @__PURE__ */ r.createElement(_t, ki({
        key: "bar-stack-" + T.index + "-" + N.index,
        x: N.x,
        y: N.y,
        height: N.height,
        width: N.width,
        fill: N.color
      }, x));
    });
  }));
}
var Jl = "http://www.w3.org/2000/svg";
function bp(e) {
  var t = document.getElementById(e);
  if (!t) {
    var n = document.createElementNS(Jl, "svg");
    n.setAttribute("aria-hidden", "true"), n.style.opacity = "0", n.style.width = "0", n.style.height = "0", n.style.position = "absolute", n.style.top = "-100%", n.style.left = "-100%", n.style.pointerEvents = "none", t = document.createElementNS(Jl, "path"), t.setAttribute("id", e), n.appendChild(t), document.body.appendChild(n);
  }
  return t;
}
var Ep = "__visx_splitpath_svg_path_measurement_id", es = function() {
  return !0;
};
function Ap(e) {
  var t = e.path, n = e.pointsInSegments, a = e.segmentation, i = a === void 0 ? "x" : a, o = e.sampleRate, l = o === void 0 ? 1 : o;
  try {
    var s = bp(Ep);
    s.setAttribute("d", t);
    var c = s.getTotalLength(), u = n.length, d = n.map(function() {
      return [];
    });
    if (i === "x" || i === "y")
      for (var h = n.map(function(O) {
        var K;
        return (K = O.find(function(V) {
          return typeof V[i] == "number";
        })) == null ? void 0 : K[i];
      }), m = s.getPointAtLength(0), p = s.getPointAtLength(c), y = p[i] > m[i], E = y ? h.map(function(O) {
        return typeof O > "u" ? es : function(K) {
          return K >= O;
        };
      }) : h.map(function(O) {
        return typeof O > "u" ? es : function(K) {
          return K <= O;
        };
      }), g = 0, f = 0; f <= c; f += l) {
        for (var x = s.getPointAtLength(f), v = x[i]; g < u - 1 && E[g + 1](v); )
          g += 1;
        d[g].push(x);
      }
    else {
      var b = n.map(function(O) {
        return O.length;
      }), S = b.reduce(function(O, K) {
        return O + K;
      }, 0), A = c / Math.max(1, S - 1), T = b.slice(0, u - 1);
      T.unshift(0);
      for (var N = 2; N < u; N += 1)
        T[N] += T[N - 1];
      for (var w = 0; w < u; w += 1)
        T[w] *= A;
      for (var C = 0, _ = 0; _ <= c; _ += l) {
        for (var k = s.getPointAtLength(_); C < u - 1 && _ >= T[C + 1]; )
          C += 1;
        d[C].push(k);
      }
    }
    return d;
  } catch {
    return [];
  }
}
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
var Sp = function(t) {
  return t.x || 0;
}, Tp = function(t) {
  return t.y || 0;
};
function qc(e) {
  var t = e.children, n = e.className, a = e.curve, i = e.defined, o = e.segmentation, l = e.sampleRate, s = e.segments, c = e.x, u = e.y, d = e.styles, h = $.useMemo(function() {
    var y = typeof c == "number" || typeof c > "u" ? function() {
      return c;
    } : c, E = typeof u == "number" || typeof u > "u" ? function() {
      return u;
    } : u;
    return s.map(function(g) {
      return g.map(function(f, x) {
        return {
          x: y(f, x, g),
          y: E(f, x, g)
        };
      });
    });
  }, [c, u, s]), m = $.useMemo(function() {
    var y = Wc({
      x: c,
      y: u,
      defined: i,
      curve: a
    });
    return y(s.flat()) || "";
  }, [c, u, i, a, s]), p = $.useMemo(function() {
    return Ap({
      path: m,
      segmentation: o,
      pointsInSegments: h,
      sampleRate: l
    });
  }, [m, o, h, l]);
  return /* @__PURE__ */ r.createElement("g", null, p.map(function(y, E) {
    return t ? /* @__PURE__ */ r.createElement(r.Fragment, {
      key: E
    }, t({
      index: E,
      segment: y,
      styles: d[E] || d[E % d.length]
    })) : /* @__PURE__ */ r.createElement(Zt, wi({
      key: E,
      className: n,
      data: y,
      x: Sp,
      y: Tp
    }, d[E] || d[E % d.length]));
  }));
}
qc.propTypes = {
  segments: R.arrayOf(R.array).isRequired,
  styles: R.array.isRequired,
  children: R.func,
  className: R.string
};
var kp = ["tooltipOpen"];
function wp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
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
function Uc(e) {
  var t = $.useState(cr({
    tooltipOpen: !1
  }, e)), n = t[0], a = t[1], i = $.useCallback(function(l) {
    return a(typeof l == "function" ? function(s) {
      s.tooltipOpen;
      var c = wp(s, kp);
      return cr({}, l(c), {
        tooltipOpen: !0
      });
    } : {
      tooltipOpen: !0,
      tooltipLeft: l.tooltipLeft,
      tooltipTop: l.tooltipTop,
      tooltipData: l.tooltipData
    });
  }, [a]), o = $.useCallback(function() {
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
    hideTooltip: o
  };
}
var Cp = ["className", "top", "left", "offsetLeft", "offsetTop", "style", "children", "unstyled", "applyPositionStyle"];
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
function Pp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Yc = {
  position: "absolute",
  backgroundColor: "white",
  color: "#666666",
  padding: ".3rem .5rem",
  borderRadius: "3px",
  fontSize: "14px",
  boxShadow: "0 1px 2px rgba(33,33,33,0.2)",
  lineHeight: "1em",
  pointerEvents: "none"
}, ho = /* @__PURE__ */ r.forwardRef(function(e, t) {
  var n = e.className, a = e.top, i = e.left, o = e.offsetLeft, l = o === void 0 ? 10 : o, s = e.offsetTop, c = s === void 0 ? 10 : s, u = e.style, d = u === void 0 ? Yc : u, h = e.children, m = e.unstyled, p = m === void 0 ? !1 : m, y = e.applyPositionStyle, E = y === void 0 ? !1 : y, g = Pp(e, Cp);
  return /* @__PURE__ */ r.createElement("div", ur({
    ref: t,
    className: rt("visx-tooltip", n),
    style: ur({
      top: a == null || c == null ? a : a + c,
      left: i == null || l == null ? i : i + l
    }, E && {
      position: "absolute"
    }, !p && d)
  }, g), h);
});
ho.propTypes = {
  children: R.node,
  className: R.string,
  left: R.number,
  offsetLeft: R.number,
  offsetTop: R.number,
  top: R.number,
  applyPositionStyle: R.bool,
  unstyled: R.bool
};
ho.displayName = "Tooltip";
const Np = ho;
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
function Lp(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Op(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Pi(e, t);
}
function Pi(e, t) {
  return Pi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, i) {
    return a.__proto__ = i, a;
  }, Pi(e, t);
}
var ts = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0
};
function _p(e) {
  var t;
  return t = /* @__PURE__ */ function(n) {
    Op(a, n);
    function a(o) {
      var l;
      return l = n.call(this, o) || this, l.state = {
        rect: void 0,
        parentRect: void 0
      }, l.nodeRef = /* @__PURE__ */ r.createRef(), l.getRects = l.getRects.bind(Lp(l)), l;
    }
    var i = a.prototype;
    return i.componentDidMount = function() {
      var l, s = this;
      this.node = (l = this.nodeRef) != null && l.current ? this.nodeRef.current : ju.findDOMNode(this), this.setState(function() {
        return s.getRects();
      });
    }, i.getRects = function() {
      if (!this.node)
        return this.state;
      var l = this.node, s = l.parentNode, c = l.getBoundingClientRect ? l.getBoundingClientRect() : ts, u = s != null && s.getBoundingClientRect ? s.getBoundingClientRect() : ts;
      return {
        rect: c,
        parentRect: u
      };
    }, i.render = function() {
      return /* @__PURE__ */ r.createElement(e, Ci({
        nodeRef: this.nodeRef,
        getRects: this.getRects
      }, this.state, this.props));
    }, a;
  }(r.PureComponent), t.displayName = "withBoundingRects(" + (e.displayName || "") + ")", t;
}
var Xc = /* @__PURE__ */ $.createContext({
  isFlippedVertically: !1,
  isFlippedHorizontally: !1
}), Dp = Xc.Provider;
Xc.Consumer;
var Mp = ["children", "getRects", "left", "offsetLeft", "offsetTop", "parentRect", "rect", "style", "top", "unstyled", "nodeRef"];
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
function $p(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Qc(e) {
  var t = e.children;
  e.getRects;
  var n = e.left, a = n === void 0 ? 0 : n, i = e.offsetLeft, o = i === void 0 ? 10 : i, l = e.offsetTop, s = l === void 0 ? 10 : l, c = e.parentRect, u = e.rect, d = e.style, h = d === void 0 ? Yc : d, m = e.top, p = m === void 0 ? 0 : m, y = e.unstyled, E = y === void 0 ? !1 : y, g = e.nodeRef, f = $p(e, Mp), x, v = !1, b = !1;
  if (u && c) {
    var S = a, A = p;
    if (c.width) {
      var T = S + o + u.width - c.width, N = u.width - S - o;
      v = T > 0 && T > N;
    } else {
      var w = S + o + u.width - window.innerWidth, C = u.width - S - o;
      v = w > 0 && w > C;
    }
    if (c.height) {
      var _ = A + s + u.height - c.height, k = u.height - A - s;
      b = _ > 0 && _ > k;
    } else
      b = A + s + u.height > window.innerHeight;
    S = v ? S - u.width - o : S + o, A = b ? A - u.height - s : A + s, S = Math.round(S), A = Math.round(A), x = "translate(" + S + "px, " + A + "px)";
  }
  return /* @__PURE__ */ r.createElement(Np, dr({
    ref: g,
    style: dr({
      left: 0,
      top: 0,
      transform: x
    }, !E && h)
  }, f), /* @__PURE__ */ r.createElement(Dp, {
    value: {
      isFlippedVertically: !b,
      isFlippedHorizontally: !v
    }
  }, t));
}
Qc.propTypes = {
  nodeRef: R.oneOfType([R.string, R.func, R.object])
};
const Zc = _p(Qc);
var Kn = /* @__PURE__ */ function() {
  function e(n) {
    var a = n.x, i = a === void 0 ? 0 : a, o = n.y, l = o === void 0 ? 0 : o;
    this.x = 0, this.y = 0, this.x = i, this.y = l;
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
function zp(e, t) {
  return new Kn({
    x: e.x + t.x,
    y: e.y + t.y
  });
}
function Rp(e, t) {
  return new Kn({
    x: e.x - t.x,
    y: e.y - t.y
  });
}
const Fp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Point: Kn,
  subtractPoints: Rp,
  sumPoints: zp
}, Symbol.toStringTag, { value: "Module" }));
function Bp(e) {
  return !!e && e instanceof Element;
}
function Vp(e) {
  return !!e && (e instanceof SVGElement || "ownerSVGElement" in e);
}
function Hp(e) {
  return !!e && "createSVGPoint" in e;
}
function Wp(e) {
  return !!e && "getScreenCTM" in e;
}
function Kp(e) {
  return !!e && "changedTouches" in e;
}
function Ip(e) {
  return !!e && "clientX" in e;
}
function jp(e) {
  return !!e && (e instanceof Event || "nativeEvent" in e && e.nativeEvent instanceof Event);
}
function ra() {
  return ra = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ra.apply(this, arguments);
}
var Gr = {
  x: 0,
  y: 0
};
function qp(e) {
  if (!e)
    return ra({}, Gr);
  if (Kp(e))
    return e.changedTouches.length > 0 ? {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    } : ra({}, Gr);
  if (Ip(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  var t = e == null ? void 0 : e.target, n = t && "getBoundingClientRect" in t ? t.getBoundingClientRect() : null;
  return n ? {
    x: n.x + n.width / 2,
    y: n.y + n.height / 2
  } : ra({}, Gr);
}
function Ni(e, t) {
  if (!e || !t)
    return null;
  var n = qp(t), a = Vp(e) ? e.ownerSVGElement : e, i = Wp(a) ? a.getScreenCTM() : null;
  if (Hp(a) && i) {
    var o = a.createSVGPoint();
    return o.x = n.x, o.y = n.y, o = o.matrixTransform(i.inverse()), new Kn({
      x: o.x,
      y: o.y
    });
  }
  var l = e.getBoundingClientRect();
  return new Kn({
    x: n.x - l.left - e.clientLeft,
    y: n.y - l.top - e.clientTop
  });
}
function Li(e, t) {
  if (Bp(e) && t)
    return Ni(e, t);
  if (jp(e)) {
    var n = e, a = n.target;
    if (a)
      return Ni(a, n);
  }
  return null;
}
const Up = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  localPoint: Li,
  touchPoint: Ni
}, Symbol.toStringTag, { value: "Module" })), Yp = new Os(), Gc = (e) => {
  const { tableData: t, config: n, formatNumber: a, capitalize: i, formatDate: o, formatTooltipsDate: l, parseDate: s, setSharedFilter: c } = $.useContext(Me), { xScale: u, yScale: d, showTooltip: h, hideTooltip: m } = e, { xAxis: p, visualizationType: y, orientation: E, yAxis: g, runtime: f } = n, x = Yp.applySuppression(t, n.suppressedData), v = (V, F) => {
    const { x: H, y: Y } = F, q = {
      data: V || {},
      dataXPosition: H + 10,
      dataYPosition: Y
    };
    return {
      tooltipLeft: q.dataXPosition,
      tooltipTop: q.dataYPosition,
      tooltipData: q
    };
  }, b = (V, F) => {
    V.stopPropagation();
    const H = Li(V), { x: Y, y: z } = H, { data: q, arc: B } = F ?? {}, j = T(Y - Number(n.yAxis.size || 0)), U = y !== "Pie" ? n.series.filter((D) => D.tooltip === !0).map((D) => D.dataKey) : n.series.map((D) => D.dataKey);
    U.push(n.xAxis.dataKey), n.visualizationType === "Forecasting" && n.series.map((D) => {
      D.confidenceIntervals.map((ue) => {
        ue.showInTooltip && (U.push(ue.high), U.push(ue.low));
      });
    });
    function X(D) {
      let ue = [];
      for (let oe in D)
        D.hasOwnProperty(oe) && ue.push(D[oe].name);
      return ue;
    }
    U.push(...X(n.columns)), U.push(...X(n.columns));
    const ne = C(j, U), ce = x.filter((D) => D[p.dataKey] === N(z)), we = E === "vertical" ? ne : ce, Ce = (D) => {
      const ue = n.series.filter((ye) => ye.dataKey === D)[0];
      return ue != null && ue.axis ? String(ue.axis).toLowerCase() : "left";
    }, W = (() => {
      var he, Ee, Ne;
      const D = n.columns, ue = [], oe = [];
      for (const [ke, Se] of Object.entries(D)) {
        const xe = {
          addColPrefix: n.columns[ke].prefix,
          addColSuffix: n.columns[ke].suffix,
          addColRoundTo: n.columns[ke].roundToPlace ? n.columns[ke].roundToPlace : "",
          addColCommas: n.columns[ke].commas
        };
        let re = null;
        n.visualizationType === "Pie" ? re = B == null ? void 0 : B.data[Se.name] : re = (he = we[0]) == null ? void 0 : he[Se.name];
        const J = _s(re, "left", !0, n, xe);
        Se.tooltips && ue.push([Se.label, J]);
      }
      const ye = [];
      return ue.forEach((ke) => {
        ye.push([ke[0], ke[1]]);
      }), y === "Pie" && oe.push(
        // ignore
        [n.xAxis.dataKey, q],
        [n.runtime.yAxis.dataKey, a(B == null ? void 0 : B.data[n.runtime.yAxis.dataKey])],
        ["Percent", `${Math.round(((B == null ? void 0 : B.endAngle) - (B == null ? void 0 : B.startAngle)) * 180 / Math.PI / 360 * 100) + "%"}`]
      ), y === "Forest Plot" && oe.push([n.xAxis.dataKey, N(z)]), y !== "Pie" && y !== "Forest Plot" && oe.push(
        ...(Ne = (Ee = _()) == null ? void 0 : Ee.filter(Boolean)) == null ? void 0 : Ne.flatMap((ke) => {
          var xe, re, J;
          const Se = ke === n.xAxis.dataKey ? (xe = we[0]) == null ? void 0 : xe[ke] : a((re = we[0]) == null ? void 0 : re[ke], Ce(ke));
          return (J = we == null ? void 0 : we[0]) != null && J[ke] ? [[ke, Se, Ce(ke)]] : [];
        })
      ), [...oe, ...ye];
    })();
    if (!W)
      return;
    const ae = v(W, H);
    h(ae);
  }, S = () => {
    n.visualizationType === "Area Chart" ? setTimeout(() => {
      m();
    }, 3e3) : m();
  }, A = (V) => {
    if (n.xAxis.type === "categorical" || n.visualizationType === "Combo") {
      let F = u.step();
      const Y = Math.floor(Number(V) / F);
      return u.domain()[Y - 1];
    }
    if (n.xAxis.type === "date" && n.visualizationType !== "Combo") {
      const F = dl((q) => s(q[n.xAxis.dataKey])).left, H = u.invert(u(V)), Y = F(n.data, H, 1);
      return s(n.data[Y - 1][n.xAxis.dataKey]);
    }
  }, T = (V, F = !1) => {
    if (y !== "Pie" && E !== "horizontal") {
      if (u.type === "point" || p.type === "continuous" || p.type === "date") {
        let H = null, Y = Number.MAX_VALUE, z = V;
        return x.forEach((q) => {
          const B = p.type === "date" ? u(s(q[p.dataKey])) : u(q[p.dataKey]);
          let j = n.barHeight;
          const U = Math.abs(Number(B - z + (F ? j * 2 : 0)));
          U <= Y && (Y = U, H = (p.type === "date", q[p.dataKey]));
        }), H;
      }
      if (n.xAxis.type === "categorical" || y === "Combo" && E !== "horizontal" && y !== "Forest Plot") {
        let H = u.step();
        const z = Math.floor(Number(V) / H);
        return u.domain()[z - 1];
      }
      if (n.xAxis.type === "date" && y !== "Combo" && E !== "horizontal") {
        const H = dl((B) => s(B[n.xAxis.dataKey])).left, Y = u.invert(V), z = H(n.data, Y, 1);
        return s(n.data[z - 1][n.xAxis.dataKey]);
      }
    }
  }, N = (V, F) => {
    if (y === "Pie")
      return;
    let H = Number.MAX_VALUE, Y = null;
    return x.forEach((z, q) => {
      const B = d(y !== "Forest Plot" ? z[n.xAxis.dataKey] : q), j = Math.abs(B - V);
      j < H && (H = j, Y = F ? z[F] : z[n.xAxis.dataKey]);
    }), Y;
  }, w = (V) => {
    var F, H;
    try {
      const Y = Li(V), { x: z } = Y;
      if (!z)
        throw new Error("COVE: no x value in handleTooltipClick.");
      let q = T(z, !0), B = (F = n.data) == null ? void 0 : F.filter((j) => j[n.xAxis.dataKey] === q);
      if (!q)
        throw new Error("COVE: no closest x scale value in handleTooltipClick");
      if (p.type === "date" && q && (q = new Date(q), q = o(q), B = (H = n.data) == null ? void 0 : H.filter((j) => o(new Date(j[n.xAxis.dataKey])) === q)), !B[0])
        throw new Error(`COVE: no data found matching the closest xScale value: ${q}`);
      c && (n != null && n.uid) && (B != null && B[0]) && c(n.uid, B[0]);
    } catch (Y) {
      console.error(Y.message);
    }
  }, C = (V, F) => {
    try {
      let H;
      return p.type === "categorical" ? H = x.filter((z) => z[p.dataKey] === V) : H = x.filter((z) => z[p.dataKey] === V), !H || H.length === 0 ? [] : H.map((z) => Object.fromEntries(Object.entries(z).filter(([q, B]) => F.includes(q))));
    } catch (H) {
      console.error("COVE", H);
    }
  }, _ = () => {
    var V;
    try {
      let F, H = [], Y = [];
      if ((V = n.series) == null || V.forEach((z) => {
        z.type === "Forecasting" && (H.push(z.stageColumn), z == null || z.confidenceIntervals.forEach((q) => {
          q.showInTooltip === !0 && (Y.push(q.low), Y.push(q.high));
        }));
      }), !n.dashboard)
        switch (y) {
          case "Combo":
            F = [f.xAxis.dataKey, ...f == null ? void 0 : f.seriesKeys, ...Y];
            break;
          case "Forecasting":
            F = [f.xAxis.dataKey, ...H, ...Y];
            break;
          case "Line":
            F = [f.xAxis.dataKey, ...f == null ? void 0 : f.seriesKeys];
            break;
          case "Area Chart":
            F = [f.xAxis.dataKey, ...f == null ? void 0 : f.seriesKeys];
            break;
          case "Bar":
            F = E === "vertical" ? [f.xAxis.dataKey, ...f == null ? void 0 : f.seriesKeys] : [f.yAxis.dataKey, ...f == null ? void 0 : f.seriesKeys];
            break;
          case "Pie":
            F = [f.xAxis.dataKey, ...f == null ? void 0 : f.seriesKeys];
          default:
            throw new Error("No visualization type found in handleTooltipMouseOver");
        }
      return n.dashboard && (F = [f.xAxis.dataKey, ...f == null ? void 0 : f.barSeriesKeys, ...f == null ? void 0 : f.lineSeriesKeys, ...H, ...Y]), F;
    } catch (F) {
      console.error("COVE", F);
    }
  }, k = (V) => {
    const { dataXPosition: F, dataYPosition: H } = V;
    return {
      opacity: n.tooltips.opacity ? n.tooltips.opacity / 100 : 1,
      position: "absolute",
      backgroundColor: "white",
      borderRadius: "4px",
      transform: `translate(${F}px, ${Number(H)}px)`
    };
  }, O = (V) => {
    var H, Y;
    let F = n.series.filter((z) => z.dataKey === V);
    return (H = F[0]) != null && H.name ? (Y = F[0]) == null ? void 0 : Y.name : V;
  };
  return {
    getIncludedTooltipSeries: _,
    getXValueFromCoordinate: T,
    getXValueFromCoordinateDate: A,
    getYScaleValues: C,
    handleTooltipClick: w,
    handleTooltipMouseOff: S,
    handleTooltipMouseOver: b,
    TooltipListItem: ({ item: V }) => {
      const [F, H] = V, [Y, z, q] = H;
      if (y === "Forest Plot")
        return Y === n.xAxis.dataKey ? /* @__PURE__ */ r.createElement("li", { className: "tooltip-heading" }, `${i(n.xAxis.dataKey ? `${n.xAxis.dataKey}: ` : "")} ${n.yAxis.type === "date" ? o(s(Y, !1)) : z}`) : /* @__PURE__ */ r.createElement("li", { className: "tooltip-body" }, `${O(Y)}: ${a(z, "left")}`);
      const B = n.tooltips.dateDisplayFormat ? l(s(z, !1)) : o(s(z, !1));
      return y === "Bar" && E === "horizontal" && Y === n.xAxis.dataKey ? /* @__PURE__ */ r.createElement("li", { className: "tooltip-heading" }, `${i(n.runtime.yAxis.label ? `${n.runtime.yAxis.label}: ` : "")} ${n.xAxis.type === "date" ? B : z}`) : Y === n.xAxis.dataKey ? /* @__PURE__ */ r.createElement("li", { className: "tooltip-heading" }, `${i(n.runtime.xAxis.label ? `${n.runtime.xAxis.label}: ` : "")} ${n.xAxis.type === "date" ? B : z}`) : /* @__PURE__ */ r.createElement("li", { className: "tooltip-body" }, `${O(Y)}: ${z}`);
    },
    tooltipStyles: k
  };
};
function po(e, { threshold: t = 0, root: n = null, rootMargin: a = "0%", freezeOnceVisible: i = !1 }) {
  const [o, l] = $.useState(), s = (o == null ? void 0 : o.isIntersecting) && i, c = ([u]) => {
    l(u);
  };
  return $.useEffect(() => {
    setTimeout(() => {
      const u = e == null ? void 0 : e.current;
      if (!!!window.IntersectionObserver || s || !u)
        return;
      const h = { threshold: t, root: n, rootMargin: a }, m = new IntersectionObserver(c, h);
      return m.observe(u), () => m.disconnect();
    }, 500);
  }, [e, t, n, a, s]), o;
}
const Jc = (e, t = !1) => {
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
var Xp = ["flexDirection", "alignItems", "margin", "display", "children"];
function Oi() {
  return Oi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Oi.apply(this, arguments);
}
function Qp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function mr(e) {
  var t = e.flexDirection, n = t === void 0 ? "row" : t, a = e.alignItems, i = a === void 0 ? "center" : a, o = e.margin, l = o === void 0 ? "0" : o, s = e.display, c = s === void 0 ? "flex" : s, u = e.children, d = Qp(e, Xp);
  return /* @__PURE__ */ r.createElement("div", Oi({
    className: "visx-legend-item",
    style: {
      display: c,
      alignItems: i,
      flexDirection: n,
      margin: l
    }
  }, d), u);
}
mr.propTypes = {
  alignItems: R.string,
  margin: R.oneOfType([R.string, R.number]),
  children: R.node,
  display: R.string
};
var Zp = ["flex", "label", "margin", "align", "children"];
function _i() {
  return _i = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, _i.apply(this, arguments);
}
function Gp(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function fr(e) {
  var t = e.flex, n = t === void 0 ? "1" : t, a = e.label, i = e.margin, o = i === void 0 ? "5px 0" : i, l = e.align, s = l === void 0 ? "left" : l, c = e.children, u = Gp(e, Zp);
  return /* @__PURE__ */ r.createElement("div", _i({
    className: "visx-legend-label",
    style: {
      justifyContent: s,
      display: "flex",
      flex: n,
      margin: o
    }
  }, u), c || a);
}
fr.propTypes = {
  align: R.string,
  label: R.node,
  flex: R.oneOfType([R.string, R.number]),
  margin: R.oneOfType([R.string, R.number]),
  children: R.node
};
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
function yo(e) {
  var t = e.fill, n = e.width, a = e.height, i = e.style;
  return /* @__PURE__ */ r.createElement("div", {
    style: Di({
      width: n,
      height: a,
      background: t
    }, i)
  });
}
yo.propTypes = {
  fill: R.string,
  width: R.oneOfType([R.string, R.number]),
  height: R.oneOfType([R.string, R.number])
};
function eu(e) {
  var t = e.fill, n = e.width, a = e.height, i = e.style, o = typeof n == "string" || typeof n > "u" ? 0 : n, l = typeof a == "string" || typeof a > "u" ? 0 : a, s = Math.max(o, l), c = s / 2;
  return /* @__PURE__ */ r.createElement("svg", {
    width: s,
    height: s
  }, /* @__PURE__ */ r.createElement(be, {
    top: c,
    left: c
  }, /* @__PURE__ */ r.createElement("circle", {
    r: c,
    fill: t,
    style: i
  })));
}
eu.propTypes = {
  fill: R.string,
  width: R.oneOfType([R.string, R.number]),
  height: R.oneOfType([R.string, R.number])
};
function tu(e) {
  var t = e.fill, n = e.width, a = e.height, i = e.style, o = typeof a == "string" || typeof a > "u" ? 0 : a, l = typeof (i == null ? void 0 : i.strokeWidth) == "number" ? i == null ? void 0 : i.strokeWidth : 2;
  return /* @__PURE__ */ r.createElement("svg", {
    width: n,
    height: a
  }, /* @__PURE__ */ r.createElement(be, {
    top: o / 2 - l / 2
  }, /* @__PURE__ */ r.createElement("line", {
    x1: 0,
    x2: n,
    y1: 0,
    y2: 0,
    stroke: t,
    strokeWidth: l,
    style: i
  })));
}
tu.propTypes = {
  fill: R.string,
  width: R.oneOfType([R.string, R.number]),
  height: R.oneOfType([R.string, R.number])
};
function ia() {
  return ia = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ia.apply(this, arguments);
}
var Jr = function() {
};
function Jp(e) {
  var t = e.shape, n = t === void 0 ? "rect" : t, a = e.fill, i = a === void 0 ? Jr : a, o = e.size, l = o === void 0 ? Jr : o, s = e.width, c = e.height, u = e.label, d = e.item, h = e.itemIndex, m = e.shapeStyle, p = m === void 0 ? Jr : m, y = {
    width: s,
    height: c,
    item: d,
    itemIndex: h,
    label: u,
    fill: i(ia({}, u)),
    size: l(ia({}, u)),
    style: p(ia({}, u))
  };
  return typeof n == "string" ? n === "circle" ? /* @__PURE__ */ r.createElement(eu, y) : n === "line" ? /* @__PURE__ */ r.createElement(tu, y) : /* @__PURE__ */ r.createElement(yo, y) : /* @__PURE__ */ r.isValidElement(n) ? /* @__PURE__ */ r.cloneElement(n, y) : n ? /* @__PURE__ */ r.createElement(n, y) : null;
}
function hr() {
  return hr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, hr.apply(this, arguments);
}
function nu(e) {
  var t = e.shape, n = t === void 0 ? yo : t, a = e.width, i = e.height, o = e.margin, l = e.label, s = e.item, c = e.itemIndex, u = e.fill, d = e.size, h = e.shapeStyle;
  return /* @__PURE__ */ r.createElement("div", {
    className: "visx-legend-shape",
    style: {
      display: "flex",
      width: d ? d(hr({}, l)) : a,
      height: d ? d(hr({}, l)) : i,
      margin: o
    }
  }, Jp({
    shape: n,
    item: s,
    itemIndex: c,
    label: l,
    width: a,
    height: i,
    fill: u,
    shapeStyle: h
  }));
}
nu.propTypes = {
  itemIndex: R.number.isRequired,
  margin: R.oneOfType([R.string, R.number]),
  width: R.oneOfType([R.string, R.number]),
  height: R.oneOfType([R.string, R.number])
};
function au(e) {
  return e && typeof e == "object" && "value" in e && typeof e.value < "u" ? e.value : e;
}
function ns(e) {
  return String(au(e));
}
function ey(e) {
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
var ty = ["className", "style", "scale", "shape", "domain", "fill", "size", "labelFormat", "labelTransform", "shapeWidth", "shapeHeight", "shapeMargin", "shapeStyle", "labelAlign", "labelFlex", "labelMargin", "itemMargin", "direction", "itemDirection", "legendLabelProps", "children"];
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
function ny(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var ay = {
  display: "flex"
};
function ru(e) {
  var t = e.className, n = e.style, a = n === void 0 ? ay : n, i = e.scale, o = e.shape, l = e.domain, s = e.fill, c = s === void 0 ? ns : s, u = e.size, d = u === void 0 ? ns : u, h = e.labelFormat, m = h === void 0 ? au : h, p = e.labelTransform, y = p === void 0 ? ey : p, E = e.shapeWidth, g = E === void 0 ? 15 : E, f = e.shapeHeight, x = f === void 0 ? 15 : f, v = e.shapeMargin, b = v === void 0 ? "2px 4px 2px 0" : v, S = e.shapeStyle, A = e.labelAlign, T = A === void 0 ? "left" : A, N = e.labelFlex, w = N === void 0 ? "1" : N, C = e.labelMargin, _ = C === void 0 ? "0 4px" : C, k = e.itemMargin, O = k === void 0 ? "0" : k, K = e.direction, V = K === void 0 ? "column" : K, F = e.itemDirection, H = F === void 0 ? "row" : F, Y = e.legendLabelProps, z = e.children, q = ny(e, ty), B = l || ("domain" in i ? i.domain() : []), j = y({
    scale: i,
    labelFormat: m
  }), U = B.map(j);
  return z ? /* @__PURE__ */ r.createElement(r.Fragment, null, z(U)) : /* @__PURE__ */ r.createElement("div", {
    className: rt("visx-legend", t),
    style: oa({}, a, {
      flexDirection: V
    })
  }, U.map(function(X, ne) {
    return /* @__PURE__ */ r.createElement(mr, oa({
      key: "legend-" + X.text + "-" + ne,
      margin: O,
      flexDirection: H
    }, q), /* @__PURE__ */ r.createElement(nu, {
      shape: o,
      height: x,
      width: g,
      margin: b,
      item: B[ne],
      itemIndex: ne,
      label: X,
      fill: c,
      size: d,
      shapeStyle: S
    }), /* @__PURE__ */ r.createElement(fr, oa({
      label: X.text,
      flex: w,
      margin: _,
      align: T
    }, Y)));
  }));
}
ru.propTypes = {
  children: R.func,
  className: R.string,
  domain: R.array,
  shapeWidth: R.oneOfType([R.string, R.number]),
  shapeHeight: R.oneOfType([R.string, R.number]),
  shapeMargin: R.oneOfType([R.string, R.number]),
  labelAlign: R.string,
  labelFlex: R.oneOfType([R.string, R.number]),
  labelMargin: R.oneOfType([R.string, R.number]),
  itemMargin: R.oneOfType([R.string, R.number]),
  fill: R.func,
  size: R.func,
  shapeStyle: R.func
};
function ry(e) {
  return /* @__PURE__ */ r.createElement(ru, e);
}
function iy(e) {
  let t = ["legend-container"], n = ["legend-container__inner"];
  return e.legend.position === "left" && t.push("left"), e.legend.position === "bottom" && (t.push("bottom"), n.push("bottom")), e.legend.position === "bottom" && e.legend.singleRow && n.push("single-row"), e.legend.reverseLabelOrder && (n.push("d-flex"), n.push("flex-column-reverse")), e.legend.position === "bottom" && e.legend.verticalSorted && n.push("vertical-sorted"), {
    containerClasses: t,
    innerClasses: n
  };
}
const Or = (e, t) => {
  var E;
  const { formatDate: n, parseDate: a } = $.useContext(Me);
  let i = [], o = "", l = [], s = [];
  ((E = e.series) == null ? void 0 : E.length) > 0 && e.data ? (i = e.series[0], o = e.series[0].dataKey, l = e.highlightedBarValues, s = e.data.map((g) => g[e.xAxis.dataKey])) : (i = [], o = "", l = [], s = []);
  const c = (g, f) => {
    const x = [...e.highlightedBarValues];
    x[f].borderWidth = g.target.value, t({
      ...e,
      highlightedBarValues: x
    });
  }, u = (g, f) => {
    g.preventDefault();
    const x = [...e.highlightedBarValues];
    x[f].value = g.target.value, x[f].dataKey = o, t({
      ...e,
      highlightedBarValues: x
    });
  }, d = (g, f) => {
    g.preventDefault();
    const x = [...e.highlightedBarValues];
    x.push({ dataKey: o }), t({
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
    return g.filter((v) => {
      const { legendLabel: b } = v;
      return f[b] ? !1 : (f[b] = !0, !0);
    });
  }, {
    HighLightedBarUtils: y,
    highlightedSeries: i,
    highlightedSeriesKey: o,
    highlightedBarValues: l,
    highlightedSeriesValues: s,
    handleUpdateHighlightedBar: u,
    handleAddNewHighlightedBar: d,
    handleRemoveHighlightedBar: h,
    handleUpdateHighlightedBarColor: m,
    handleHighlightedBarLegendLabel: p,
    handleUpdateHighlightedBorderWidth: c
  };
}, Mi = (e) => {
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
}, iu = ({ config: e, colorScale: t, seriesHighlight: n, highlight: a, highlightReset: i, currentViewport: o, formatLabels: l }) => {
  var f;
  const { innerClasses: s, containerClasses: c } = iy(e), { runtime: u, orientation: d, legend: h } = e;
  if (!h)
    return null;
  const m = Zi({
    domain: (f = e.suppressedData) == null ? void 0 : f.map((x) => x.label),
    range: ["none"],
    unknown: "block"
  }), p = h.position === "bottom" || ["sm", "xs", "xxs"].includes(o), y = {
    marginBottom: p ? "15px" : "0px",
    marginTop: p && d === "horizontal" ? `${e.yAxis.label && e.isResponsiveTicks ? e.dynamicMarginTop : e.runtime.xAxis.size}px` : `${p ? e.dynamicMarginTop + 15 : 0}px`
  }, { HighLightedBarUtils: E } = Or(e);
  let g = E.findDuplicates(e.highlightedBarValues);
  return /* @__PURE__ */ r.createElement("aside", { style: y, id: "legend", className: c.join(" "), role: "region", "aria-label": "legend", tabIndex: 0 }, h.label && /* @__PURE__ */ r.createElement("h2", null, vn(h.label)), h.description && /* @__PURE__ */ r.createElement("p", null, vn(h.description)), /* @__PURE__ */ r.createElement(ry, { scale: t, itemDirection: "row", labelMargin: "0 20px 0 0", shapeMargin: "0 10px 0" }, (x) => /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: s.join(" ") }, l(x).map((v, b) => {
    var T, N, w, C;
    let S = ["legend-item", `legend-text--${v.text.replace(" ", "").toLowerCase()}`], A = v.datum;
    if (e.exclusions.active && ((T = e.exclusions.keys) != null && T.includes(A)))
      return null;
    if (u.seriesLabels) {
      let _ = e.runtime.seriesLabelsAll.indexOf(A);
      A = e.runtime.seriesKeys[_], ((N = u == null ? void 0 : u.forecastingSeriesKeys) == null ? void 0 : N.length) > 0 && (A = v.text);
    }
    return n.length > 0 && n.includes(A) === !1 && S.push("inactive"), /* @__PURE__ */ r.createElement(
      mr,
      {
        className: S.join(" "),
        tabIndex: 0,
        key: `legend-quantile-${b}`,
        onKeyPress: (_) => {
          _.key === "Enter" && a(v);
        },
        onClick: () => {
          a(v);
        }
      },
      e.visualizationType === "Line" && e.legend.lineMode ? /* @__PURE__ */ r.createElement("svg", { width: 40, height: 20 }, /* @__PURE__ */ r.createElement(qe, { from: { x: 10, y: 10 }, to: { x: 40, y: 10 }, stroke: v.value, strokeWidth: 2, strokeDasharray: Mi((w = e.series[b]) != null && w.type ? (C = e.series[b]) == null ? void 0 : C.type : "") })) : /* @__PURE__ */ r.createElement("div", { style: { display: "flex", flexDirection: "column" } }, /* @__PURE__ */ r.createElement(rl, { margin: "0", fill: v.value, display: m(v.datum) }), /* @__PURE__ */ r.createElement("div", { style: { marginTop: "2px", marginRight: "6px" } }, v.icon)),
      /* @__PURE__ */ r.createElement(fr, { align: "left", margin: "0 0 0 4px" }, v.text)
    );
  }), g.map((v, b) => {
    let S = "legend-item", A = v.legendLabel;
    return A ? (n.length > 0 && n.includes(A) === !1 && (S += " inactive"), /* @__PURE__ */ r.createElement(
      mr,
      {
        className: S,
        tabIndex: 0,
        key: `legend-quantile-${b}`,
        onKeyPress: (T) => {
          T.key === "Enter" && a(v.legendLabel);
        },
        onClick: () => {
          a(v.legendLabel);
        }
      },
      /* @__PURE__ */ r.createElement(rl, { fill: "transparent", borderColor: v.color ? v.color : "rgba(255, 102, 1)" }),
      " ",
      /* @__PURE__ */ r.createElement(fr, { align: "left", margin: "0 0 0 4px" }, v.legendLabel ? v.legendLabel : v.value)
    )) : !1;
  }), n.length > 0 && /* @__PURE__ */ r.createElement("button", { className: `legend-reset ${e.theme}`, onClick: (v) => i(v), tabIndex: 0 }, "Reset")), /* @__PURE__ */ r.createElement(r.Fragment, null, e.preliminaryData.some((v) => v.label) && e.visualizationType === "Line" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("div", { className: e.legend.singleRow && p ? "legend-container__inner bottom single-row" : "" }, e.preliminaryData.map((v, b) => /* @__PURE__ */ r.createElement(r.Fragment, null, v.label && /* @__PURE__ */ r.createElement("div", { style: { display: "flex", flexDirection: "row", alignItems: "center" } }, /* @__PURE__ */ r.createElement("svg", { style: { width: "50px" }, key: b, height: "23px" }, v.style.includes("Dashed") ? /* @__PURE__ */ r.createElement(qe, { from: { x: 10, y: 10 }, to: { x: 40, y: 10 }, stroke: "#000", strokeWidth: 2, strokeDasharray: Mi(v.style) }) : /* @__PURE__ */ r.createElement("circle", { r: 6, strokeWidth: 2, stroke: "#000", cx: 22, cy: 10, fill: "transparent" })), /* @__PURE__ */ r.createElement("span", { style: {} }, " ", v.label))))))))));
};
function go(e) {
  return Mu({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" } }] })(e);
}
const ou = (e, t, n, a) => (i) => {
  var m, p, y, E, g;
  const { visualizationType: o, visualizationSubType: l, series: s, runtime: c } = e, u = (f) => e.legend.reverseLabelOrder && e.legend.position === "bottom" ? f.reverse() : f, d = (m = e.legend) == null ? void 0 : m.colorCode;
  if (o === "Deviation Bar") {
    const [f, x] = Ua[e.twoColor.palette], v = {
      datum: "X",
      index: 0,
      text: `Below ${e.xAxis.targetLabel}`,
      value: f
    }, b = {
      datum: "X",
      index: 1,
      text: `Above ${e.xAxis.targetLabel}`,
      value: x
    };
    return u([v, b]);
  }
  if (o === "Bar" && l === "regular" && d && (s == null ? void 0 : s.length) === 1) {
    let f = Ct[e.palette];
    for (; t.length > f.length; )
      f = f.concat(f);
    f = f.slice(0, n.length);
    const x = /* @__PURE__ */ new Set();
    t.forEach((b) => x.add(b[d]));
    const v = Array.from(x).map((b, S) => ({
      datum: b,
      index: S,
      text: b,
      value: f[S]
    }));
    return u(v);
  }
  if (((p = c == null ? void 0 : c.forecastingSeriesKeys) == null ? void 0 : p.length) > 0) {
    let f = [];
    return (E = (y = e.runtime) == null ? void 0 : y.forecastingSeriesKeys) == null || E.map((x, v) => {
      var b;
      return (b = x == null ? void 0 : x.stages) == null ? void 0 : b.map((S, A) => {
        var w, C, _, k;
        let T = (w = Ya[S.color]) != null && w[2] ? (C = Ya[S.color]) == null ? void 0 : C[2] : (_ = Ct[S.color]) != null && _[2] ? (k = Ct[S.color]) == null ? void 0 : k[2] : "#ccc";
        const N = {
          datum: S.key,
          index: A,
          text: S.key,
          value: T
        };
        f.push(N);
      });
    }), e.runtime.barSeriesKeys && e.runtime.barSeriesKeys.forEach((x, v) => {
      let b = Ct[e.palette][v] ? Ct[e.palette][v] : "#ccc";
      const S = {
        datum: x,
        index: v,
        text: x,
        value: b
      };
      f.push(S);
    }), u(f);
  }
  if (e.series.filter((f) => !!f.name).length > 0) {
    const f = /* @__PURE__ */ new Set();
    e.series.forEach((v) => {
      f.add(v.name || v.dataKey);
    });
    const x = Array.from(f).map((v, b) => ({
      datum: v,
      index: b,
      text: v,
      value: a(v)
    }));
    return u(x);
  }
  if ((e.visualizationType === "Bar" || e.visualizationType === "Combo") && e.visualizationSubType === "regular" && e.suppressedData) {
    const f = i.length - 1;
    let x = [];
    return (g = e.suppressedData) == null || g.forEach(({ label: v, icon: b }, S) => {
      if (v && b) {
        const A = {
          datum: v,
          index: f + S,
          text: v,
          icon: /* @__PURE__ */ r.createElement(go, { color: "#000", size: 15 })
        };
        x.push(A);
      }
    }), [...i, ...x];
  }
  return u(i);
}, $a = ({ startAngle: e, endAngle: t }) => ({
  startAngle: e,
  endAngle: t
}), oy = (e) => {
  const { transformedData: t, config: n, colorScale: a, currentViewport: i, dimensions: o, highlight: l, highlightReset: s, seriesHighlight: c } = $.useContext(Me), { tooltipData: u, showTooltip: d, hideTooltip: h, tooltipOpen: m, tooltipLeft: p, tooltipTop: y } = Uc(), { handleTooltipMouseOver: E, handleTooltipMouseOff: g, TooltipListItem: f } = Gc({
    xScale: !1,
    yScale: !1,
    showTooltip: d,
    hideTooltip: h
  }), [x, v] = $.useState(void 0), [b, S] = $.useState(!1), A = Object.values(n.columns).filter((B) => B.showInViz), T = A.length > 0, N = T ? "pivotColumn" : void 0, w = $.useMemo(() => {
    if (T) {
      let B = [];
      const j = n.yAxis.dataKey, U = A.map((ce) => ce.name), X = [j, ...U], ne = n.xAxis.dataKey;
      return t.forEach((ce) => {
        X.forEach((we) => {
          const Ce = ce[we];
          Ce && B.push({
            [N]: Ce,
            [ne]: `${ce[ne]} - ${we}`
          });
        });
      }), B;
    }
    return t;
  }, [t, T]), C = $.useMemo(() => {
    if (T) {
      const B = {};
      w.forEach((X) => {
        B[X[n.xAxis.dataKey]] || (B[X[n.xAxis.dataKey]] = !0);
      });
      const j = Object.entries(B).length;
      let U = n.customColors || Ct[n.palette];
      return U = U.slice(0, j), Zi({
        domain: Object.keys(B),
        range: U,
        unknown: null
      });
    }
    return a;
  }, [a, T]), _ = $.useRef(), k = po(_, {
    freezeOnceVisible: !1
  });
  $.useEffect(() => {
    document.querySelector(".isEditor") && S((j) => !0);
  }), $.useEffect(() => {
    k != null && k.isIntersecting && n.animate && !b && setTimeout(() => {
      S(!0);
    }, 500);
  }, [k == null ? void 0 : k.isIntersecting, n.animate]);
  const O = ({ arcs: B, path: j, getKey: U }) => {
    const X = Bf(B, U, {
      from: $a,
      enter: $a,
      update: $a,
      leave: $a
    });
    return $.useEffect(() => {
      const ne = setTimeout(() => {
        h();
      }, 500);
      return () => {
        clearTimeout(ne);
      };
    }, [u]), /* @__PURE__ */ r.createElement(r.Fragment, null, X.map(({ item: ne, props: ce, key: we }, Ce) => /* @__PURE__ */ r.createElement(be, { className: ne.data[n.xAxis.dataKey], key: `${we}-${Ce}`, style: { opacity: n.legend.behavior === "highlight" && c.length > 0 && c.indexOf(ne.data[n.runtime.xAxis.dataKey]) === -1 ? 0.5 : 1 } }, /* @__PURE__ */ r.createElement(
      Kl.path,
      {
        d: Df(
          [ce.startAngle, ce.endAngle],
          (G, W) => j({
            ...ne,
            startAngle: G,
            endAngle: W
          })
        ),
        fill: C(ne.data[n.runtime.xAxis.dataKey]),
        onMouseEnter: (G) => E(G, { data: ne.data[n.runtime.xAxis.dataKey], arc: ne }),
        onMouseLeave: (G) => g()
      }
    ))), X.map(({ item: ne, key: ce }, we) => {
      const [Ce, G] = j.centroid(ne), W = ne.endAngle - ne.startAngle >= 0.1;
      let ae = "#FFF";
      return C(ne.data[n.runtime.xAxis.dataKey]) && Ft.contrast(ae, C(ne.data[n.runtime.xAxis.dataKey])) < 3.5 && (ae = "000"), /* @__PURE__ */ r.createElement(Kl.g, { key: `${ce}${we}` }, W && /* @__PURE__ */ r.createElement(Fe, { style: { fill: ae }, x: Ce, y: G, dy: ".33em", textAnchor: "middle", pointerEvents: "none" }, Math.round((ne.endAngle - ne.startAngle) * 180 / Math.PI / 360 * 100) + "%"));
    }));
  };
  let [K] = o;
  n && n.legend && !n.legend.hide && i === "lg" && (K = K * 0.73);
  const V = n.heights.vertical, F = Math.min(K, V) / 2, H = V / 2, Y = K / 2, z = n.pieType === "Donut" ? 75 : F;
  $.useEffect(() => {
    if (c.length > 0 && n.legend.behavior !== "highlight") {
      let B = [];
      w.forEach((j) => {
        c.indexOf(j[n.runtime.xAxis.dataKey]) !== -1 && B.push(j);
      }), v(B);
    } else
      v(void 0);
  }, [c]);
  const q = ou(n, [], w, C);
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Bt, { component: "PieChart" }, /* @__PURE__ */ r.createElement("svg", { width: K, height: V, className: `animated-pie group ${n.animate === !1 || b ? "animated" : ""}`, role: "img", "aria-label": Jc(n) }, /* @__PURE__ */ r.createElement(be, { top: H, left: Y }, /* @__PURE__ */ r.createElement(
    Xh,
    {
      data: x || w,
      pieValue: (B) => B[N || n.runtime.yAxis.dataKey],
      pieSortValues: () => -1,
      innerRadius: F - z,
      outerRadius: F
    },
    (B) => /* @__PURE__ */ r.createElement(O, { ...B, getKey: (j) => j.data[n.runtime.xAxis.dataKey] })
  ))), /* @__PURE__ */ r.createElement("div", { ref: _ }), u && Object.entries(u.data).length > 0 && m && d && u.dataYPosition && u.dataXPosition && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${n.tooltips.opacity / 100}) !important`), /* @__PURE__ */ r.createElement(Zc, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: p, top: y }, /* @__PURE__ */ r.createElement("ul", null, typeof u == "object" && Object.entries(u.data).map((B, j) => /* @__PURE__ */ r.createElement(f, { item: B, key: j })))))), /* @__PURE__ */ r.createElement(iu, { config: n, colorScale: C, seriesHighlight: c, highlight: l, highlightReset: s, currentViewport: i, formatLabels: q }));
};
var ly = {
  top: "top",
  left: "left",
  right: "right",
  bottom: "bottom"
};
const Tt = ly;
function sy(e) {
  var t = e.labelOffset, n = e.labelProps, a = e.orientation, i = e.range, o = e.tickLabelFontSize, l = e.tickLength, s = a === Tt.left || a === Tt.top ? -1 : 1, c, u, d;
  if (a === Tt.top || a === Tt.bottom) {
    var h = a === Tt.bottom && typeof n.fontSize == "number" ? n.fontSize : 0;
    c = (Number(i[0]) + Number(i[i.length - 1])) / 2, u = s * (l + t + o + h);
  } else
    c = s * ((Number(i[0]) + Number(i[i.length - 1])) / 2), u = -(l + t), d = "rotate(" + s * 90 + ")";
  return {
    x: c,
    y: u,
    transform: d
  };
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
function cy(e) {
  var t = e.hideTicks, n = e.horizontal, a = e.orientation, i = e.tickClassName, o = e.tickComponent, l = e.tickLabelProps, s = e.tickStroke, c = s === void 0 ? "#222" : s, u = e.tickTransform, d = e.ticks, h = e.strokeWidth, m = e.tickLineProps;
  return d.map(function(p) {
    var y, E = p.value, g = p.index, f = p.from, x = p.to, v = p.formattedValue, b = (y = l[g]) != null ? y : {}, S = Math.max(10, typeof b.fontSize == "number" && b.fontSize || 0), A = x.y + (n && a !== Tt.top ? S : 0);
    return /* @__PURE__ */ r.createElement(be, {
      key: "visx-tick-" + E + "-" + g,
      className: rt("visx-axis-tick", i),
      transform: u
    }, !t && /* @__PURE__ */ r.createElement(qe, la({
      from: f,
      to: x,
      stroke: c,
      strokeWidth: h,
      strokeLinecap: "square"
    }, m)), o ? o(la({}, b, {
      x: x.x,
      y: A,
      formattedValue: v
    })) : /* @__PURE__ */ r.createElement(Fe, la({
      x: x.x,
      y: A
    }, b), v));
  });
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
var as = {
  textAnchor: "middle",
  fontFamily: "Arial",
  fontSize: 10,
  fill: "#222"
};
function uy(e) {
  var t = e.axisFromPoint, n = e.axisLineClassName, a = e.axisToPoint, i = e.hideAxisLine, o = e.hideTicks, l = e.horizontal, s = e.label, c = s === void 0 ? "" : s, u = e.labelClassName, d = e.labelOffset, h = d === void 0 ? 14 : d, m = e.labelProps, p = m === void 0 ? as : m, y = e.orientation, E = y === void 0 ? Tt.bottom : y, g = e.scale, f = e.stroke, x = f === void 0 ? "#222" : f, v = e.strokeDasharray, b = e.strokeWidth, S = b === void 0 ? 1 : b, A = e.tickClassName, T = e.tickComponent, N = e.tickLineProps, w = e.tickLabelProps, C = e.tickLength, _ = C === void 0 ? 8 : C, k = e.tickStroke, O = k === void 0 ? "#222" : k, K = e.tickTransform, V = e.ticks, F = e.ticksComponent, H = F === void 0 ? cy : F, Y = pr({}, as, typeof w == "object" ? w : null), z = V.map(function(B) {
    var j = B.value, U = B.index;
    return typeof w == "function" ? w(j, U, V) : Y;
  }), q = Math.max.apply(Math, [10].concat(z.map(function(B) {
    return typeof B.fontSize == "number" ? B.fontSize : 0;
  })));
  return /* @__PURE__ */ r.createElement(r.Fragment, null, H({
    hideTicks: o,
    horizontal: l,
    orientation: E,
    scale: g,
    tickClassName: A,
    tickComponent: T,
    tickLabelProps: z,
    tickStroke: O,
    tickTransform: K,
    ticks: V,
    strokeWidth: S,
    tickLineProps: N
  }), !i && /* @__PURE__ */ r.createElement(qe, {
    className: rt("visx-axis-line", n),
    from: t,
    to: a,
    stroke: x,
    strokeWidth: S,
    strokeDasharray: v
  }), c && /* @__PURE__ */ r.createElement(Fe, pr({
    className: rt("visx-axis-label", u)
  }, sy({
    labelOffset: h,
    labelProps: p,
    orientation: E,
    range: g.range(),
    tickLabelFontSize: q,
    tickLength: _
  }), p), c));
}
function dy(e, t) {
  t === void 0 && (t = "center");
  var n = e;
  if (t !== "start" && "bandwidth" in n) {
    var a = n.bandwidth();
    return t === "center" && (a /= 2), n.round() && (a = Math.round(a)), function(i) {
      var o = n(i);
      return typeof o == "number" ? o + a : o;
    };
  }
  return e;
}
function my(e) {
  var t = e;
  return "tickFormat" in t ? t.tickFormat() : Od;
}
function za(e, t) {
  var n = e.x, a = e.y;
  return new Kn(t ? {
    x: n,
    y: a
  } : {
    x: a,
    y: n
  });
}
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
var ei = 0;
function fy(e) {
  return e === void 0 && (e = ei), typeof e == "number" ? {
    start: e,
    end: e
  } : $i({
    start: ei,
    end: ei
  }, e);
}
var hy = ["children", "axisClassName", "hideAxisLine", "hideTicks", "hideZero", "innerRef", "left", "numTicks", "orientation", "rangePadding", "scale", "tickFormat", "tickLength", "tickValues", "top"];
function zi() {
  return zi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, zi.apply(this, arguments);
}
function py(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function _r(e) {
  var t = e.children, n = t === void 0 ? uy : t, a = e.axisClassName, i = e.hideAxisLine, o = i === void 0 ? !1 : i, l = e.hideTicks, s = l === void 0 ? !1 : l, c = e.hideZero, u = c === void 0 ? !1 : c, d = e.innerRef, h = e.left, m = h === void 0 ? 0 : h, p = e.numTicks, y = p === void 0 ? 10 : p, E = e.orientation, g = E === void 0 ? Tt.bottom : E, f = e.rangePadding, x = f === void 0 ? 0 : f, v = e.scale, b = e.tickFormat, S = e.tickLength, A = S === void 0 ? 8 : S, T = e.tickValues, N = e.top, w = N === void 0 ? 0 : N, C = py(e, hy), _ = b ?? my(v), k = g === Tt.left, O = g === Tt.top, K = O || g === Tt.bottom, V = dy(v), F = k || O ? -1 : 1, H = v.range(), Y = fy(x), z = za({
    x: Number(H[0]) + 0.5 - Y.start,
    y: 0
  }, K), q = za({
    x: Number(H[H.length - 1]) + 0.5 + Y.end,
    y: 0
  }, K), B = (T ?? Ld(v, y)).filter(function(U) {
    return !u || U !== 0 && U !== "0";
  }).map(function(U, X) {
    return {
      value: U,
      index: X
    };
  }), j = B.map(function(U) {
    var X = U.value, ne = U.index, ce = Nd(V(X));
    return {
      value: X,
      index: ne,
      from: za({
        x: ce,
        y: 0
      }, K),
      to: za({
        x: ce,
        y: A * F
      }, K),
      formattedValue: _(X, ne, B)
    };
  });
  return /* @__PURE__ */ r.createElement(be, {
    className: rt("visx-axis", a),
    innerRef: d,
    top: w,
    left: m
  }, n(zi({}, C, {
    axisFromPoint: z,
    axisToPoint: q,
    hideAxisLine: o,
    hideTicks: s,
    hideZero: u,
    horizontal: K,
    numTicks: y,
    orientation: g,
    rangePadding: x,
    scale: v,
    tickFormat: _,
    tickLength: A,
    tickPosition: V,
    tickSign: F,
    ticks: j
  })));
}
var yy = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
function gy(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var xy = {
  dx: "-0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "end"
};
function vy(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 36 : n, i = e.tickLength, o = i === void 0 ? 8 : i, l = e.tickLabelProps, s = gy(e, yy), c = typeof l == "function" ? l : yr({}, xy, l);
  return /* @__PURE__ */ r.createElement(_r, yr({
    axisClassName: rt("visx-axis-left", t),
    labelOffset: a,
    orientation: Tt.left,
    tickLabelProps: c,
    tickLength: o
  }, s));
}
var by = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
function Ey(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Ay = {
  dx: "0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "start"
};
function Sy(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 36 : n, i = e.tickLength, o = i === void 0 ? 8 : i, l = e.tickLabelProps, s = Ey(e, by), c = typeof l == "function" ? l : gr({}, Ay, l);
  return /* @__PURE__ */ r.createElement(_r, gr({
    axisClassName: rt("visx-axis-right", t),
    labelOffset: a,
    orientation: Tt.right,
    tickLabelProps: c,
    tickLength: o
  }, s));
}
var Ty = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
function ky(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var wy = {
  dy: "-0.75em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function Cy(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 8 : n, i = e.tickLength, o = i === void 0 ? 8 : i, l = e.tickLabelProps, s = ky(e, Ty), c = typeof l == "function" ? l : xr({}, wy, l);
  return /* @__PURE__ */ r.createElement(_r, xr({
    axisClassName: rt("visx-axis-top", t),
    labelOffset: a,
    orientation: Tt.top,
    tickLabelProps: c,
    tickLength: o
  }, s));
}
var Py = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
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
function Ny(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Ly = {
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function Ia(e) {
  var t = e.axisClassName, n = e.labelOffset, a = n === void 0 ? 8 : n, i = e.tickLength, o = i === void 0 ? 8 : i, l = e.tickLabelProps, s = Ny(e, Py), c = typeof l == "function" ? l : vr({}, Ly, l);
  return /* @__PURE__ */ r.createElement(_r, vr({
    axisClassName: rt("visx-axis-bottom", t),
    labelOffset: a,
    orientation: Tt.bottom,
    tickLabelProps: c,
    tickLength: o
  }, s));
}
function ga(e) {
  return e.split("-")[1];
}
function xo(e) {
  return e === "y" ? "height" : "width";
}
function Tn(e) {
  return e.split("-")[0];
}
function xa(e) {
  return ["top", "bottom"].includes(Tn(e)) ? "x" : "y";
}
function rs(e, t, n) {
  let { reference: a, floating: i } = e;
  const o = a.x + a.width / 2 - i.width / 2, l = a.y + a.height / 2 - i.height / 2, s = xa(t), c = xo(s), u = a[c] / 2 - i[c] / 2, d = s === "x";
  let h;
  switch (Tn(t)) {
    case "top":
      h = { x: o, y: a.y - i.height };
      break;
    case "bottom":
      h = { x: o, y: a.y + a.height };
      break;
    case "right":
      h = { x: a.x + a.width, y: l };
      break;
    case "left":
      h = { x: a.x - i.width, y: l };
      break;
    default:
      h = { x: a.x, y: a.y };
  }
  switch (ga(t)) {
    case "start":
      h[s] -= u * (n && d ? -1 : 1);
      break;
    case "end":
      h[s] += u * (n && d ? -1 : 1);
  }
  return h;
}
function lu(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function sa(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function su(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: a, y: i, platform: o, rects: l, elements: s, strategy: c } = e, { boundary: u = "clippingAncestors", rootBoundary: d = "viewport", elementContext: h = "floating", altBoundary: m = !1, padding: p = 0 } = t, y = lu(p), E = s[m ? h === "floating" ? "reference" : "floating" : h], g = sa(await o.getClippingRect({ element: (n = await (o.isElement == null ? void 0 : o.isElement(E))) == null || n ? E : E.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(s.floating)), boundary: u, rootBoundary: d, strategy: c })), f = h === "floating" ? { ...l.floating, x: a, y: i } : l.reference, x = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(s.floating)), v = await (o.isElement == null ? void 0 : o.isElement(x)) && await (o.getScale == null ? void 0 : o.getScale(x)) || { x: 1, y: 1 }, b = sa(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: f, offsetParent: x, strategy: c }) : f);
  return { top: (g.top - b.top + y.top) / v.y, bottom: (b.bottom - g.bottom + y.bottom) / v.y, left: (g.left - b.left + y.left) / v.x, right: (b.right - g.right + y.right) / v.x };
}
const Oy = Math.min, _y = Math.max;
function Ri(e, t, n) {
  return _y(e, Oy(t, n));
}
["top", "right", "bottom", "left"].reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Dy = { left: "right", right: "left", bottom: "top", top: "bottom" };
function br(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Dy[t]);
}
function My(e, t, n) {
  n === void 0 && (n = !1);
  const a = ga(e), i = xa(e), o = xo(i);
  let l = i === "x" ? a === (n ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (l = br(l)), { main: l, cross: br(l) };
}
const $y = { start: "end", end: "start" };
function ti(e) {
  return e.replace(/start|end/g, (t) => $y[t]);
}
const zy = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: a, middlewareData: i, rects: o, initialPlacement: l, platform: s, elements: c } = t, { mainAxis: u = !0, crossAxis: d = !0, fallbackPlacements: h, fallbackStrategy: m = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: y = !0, ...E } = e, g = Tn(a), f = Tn(l) === l, x = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), v = h || (f || !y ? [br(l)] : function(_) {
      const k = br(_);
      return [ti(_), k, ti(k)];
    }(l));
    h || p === "none" || v.push(...function(_, k, O, K) {
      const V = ga(_);
      let F = function(H, Y, z) {
        const q = ["left", "right"], B = ["right", "left"], j = ["top", "bottom"], U = ["bottom", "top"];
        switch (H) {
          case "top":
          case "bottom":
            return z ? Y ? B : q : Y ? q : B;
          case "left":
          case "right":
            return Y ? j : U;
          default:
            return [];
        }
      }(Tn(_), O === "start", K);
      return V && (F = F.map((H) => H + "-" + V), k && (F = F.concat(F.map(ti)))), F;
    }(l, y, p, x));
    const b = [l, ...v], S = await su(t, E), A = [];
    let T = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (u && A.push(S[g]), d) {
      const { main: _, cross: k } = My(a, o, x);
      A.push(S[_], S[k]);
    }
    if (T = [...T, { placement: a, overflows: A }], !A.every((_) => _ <= 0)) {
      var N, w;
      const _ = (((N = i.flip) == null ? void 0 : N.index) || 0) + 1, k = b[_];
      if (k)
        return { data: { index: _, overflows: T }, reset: { placement: k } };
      let O = (w = T.find((K) => K.overflows[0] <= 0)) == null ? void 0 : w.placement;
      if (!O)
        switch (m) {
          case "bestFit": {
            var C;
            const K = (C = T.map((V) => [V.placement, V.overflows.filter((F) => F > 0).reduce((F, H) => F + H, 0)]).sort((V, F) => V[1] - F[1])[0]) == null ? void 0 : C[0];
            K && (O = K);
            break;
          }
          case "initialPlacement":
            O = l;
        }
      if (a !== O)
        return { reset: { placement: O } };
    }
    return {};
  } };
}, Ry = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: a } = t, i = await async function(o, l) {
      const { placement: s, platform: c, elements: u } = o, d = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)), h = Tn(s), m = ga(s), p = xa(s) === "x", y = ["left", "top"].includes(h) ? -1 : 1, E = d && p ? -1 : 1, g = typeof l == "function" ? l(o) : l;
      let { mainAxis: f, crossAxis: x, alignmentAxis: v } = typeof g == "number" ? { mainAxis: g, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...g };
      return m && typeof v == "number" && (x = m === "end" ? -1 * v : v), p ? { x: x * E, y: f * y } : { x: f * y, y: x * E };
    }(t, e);
    return { x: n + i.x, y: a + i.y, data: i };
  } };
}, Fy = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: a, placement: i } = t, { mainAxis: o = !0, crossAxis: l = !1, limiter: s = { fn: (g) => {
      let { x: f, y: x } = g;
      return { x: f, y: x };
    } }, ...c } = e, u = { x: n, y: a }, d = await su(t, c), h = xa(Tn(i)), m = h === "x" ? "y" : "x";
    let p = u[h], y = u[m];
    if (o) {
      const g = h === "y" ? "bottom" : "right";
      p = Ri(p + d[h === "y" ? "top" : "left"], p, p - d[g]);
    }
    if (l) {
      const g = m === "y" ? "bottom" : "right";
      y = Ri(y + d[m === "y" ? "top" : "left"], y, y - d[g]);
    }
    const E = s.fn({ ...t, [h]: p, [m]: y });
    return { ...E, data: { x: E.x - n, y: E.y - a } };
  } };
};
function Mt(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function qt(e) {
  return Mt(e).getComputedStyle(e);
}
const is = Math.min, ca = Math.max, Er = Math.round;
function cu(e) {
  const t = qt(e);
  let n = parseFloat(t.width), a = parseFloat(t.height);
  const i = e.offsetWidth, o = e.offsetHeight, l = Er(n) !== i || Er(a) !== o;
  return l && (n = i, a = o), { width: n, height: a, fallback: l };
}
function cn(e) {
  return du(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Ra;
function uu() {
  if (Ra)
    return Ra;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Ra = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Ra) : navigator.userAgent;
}
function Ut(e) {
  return e instanceof Mt(e).HTMLElement;
}
function rn(e) {
  return e instanceof Mt(e).Element;
}
function du(e) {
  return e instanceof Mt(e).Node;
}
function os(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Mt(e).ShadowRoot || e instanceof ShadowRoot;
}
function Dr(e) {
  const { overflow: t, overflowX: n, overflowY: a, display: i } = qt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + a + n) && !["inline", "contents"].includes(i);
}
function By(e) {
  return ["table", "td", "th"].includes(cn(e));
}
function Fi(e) {
  const t = /firefox/i.test(uu()), n = qt(e), a = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!a && a !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const o = n.contain;
    return o != null && o.includes(i);
  });
}
function mu() {
  return !/^((?!chrome|android).)*safari/i.test(uu());
}
function vo(e) {
  return ["html", "body", "#document"].includes(cn(e));
}
function fu(e) {
  return rn(e) ? e : e.contextElement;
}
const hu = { x: 1, y: 1 };
function Rn(e) {
  const t = fu(e);
  if (!Ut(t))
    return hu;
  const n = t.getBoundingClientRect(), { width: a, height: i, fallback: o } = cu(t);
  let l = (o ? Er(n.width) : n.width) / a, s = (o ? Er(n.height) : n.height) / i;
  return l && Number.isFinite(l) || (l = 1), s && Number.isFinite(s) || (s = 1), { x: l, y: s };
}
function ha(e, t, n, a) {
  var i, o;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const l = e.getBoundingClientRect(), s = fu(e);
  let c = hu;
  t && (a ? rn(a) && (c = Rn(a)) : c = Rn(e));
  const u = s ? Mt(s) : window, d = !mu() && n;
  let h = (l.left + (d && ((i = u.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / c.x, m = (l.top + (d && ((o = u.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / c.y, p = l.width / c.x, y = l.height / c.y;
  if (s) {
    const E = Mt(s), g = a && rn(a) ? Mt(a) : a;
    let f = E.frameElement;
    for (; f && a && g !== E; ) {
      const x = Rn(f), v = f.getBoundingClientRect(), b = getComputedStyle(f);
      v.x += (f.clientLeft + parseFloat(b.paddingLeft)) * x.x, v.y += (f.clientTop + parseFloat(b.paddingTop)) * x.y, h *= x.x, m *= x.y, p *= x.x, y *= x.y, h += v.x, m += v.y, f = Mt(f).frameElement;
    }
  }
  return { width: p, height: y, top: m, right: h + p, bottom: m + y, left: h, x: h, y: m };
}
function on(e) {
  return ((du(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Mr(e) {
  return rn(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function pu(e) {
  return ha(on(e)).left + Mr(e).scrollLeft;
}
function pa(e) {
  if (cn(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || os(e) && e.host || on(e);
  return os(t) ? t.host : t;
}
function yu(e) {
  const t = pa(e);
  return vo(t) ? t.ownerDocument.body : Ut(t) && Dr(t) ? t : yu(t);
}
function gu(e, t) {
  var n;
  t === void 0 && (t = []);
  const a = yu(e), i = a === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Mt(a);
  return i ? t.concat(o, o.visualViewport || [], Dr(a) ? a : []) : t.concat(a, gu(a));
}
function ls(e, t, n) {
  return t === "viewport" ? sa(function(a, i) {
    const o = Mt(a), l = on(a), s = o.visualViewport;
    let c = l.clientWidth, u = l.clientHeight, d = 0, h = 0;
    if (s) {
      c = s.width, u = s.height;
      const m = mu();
      (m || !m && i === "fixed") && (d = s.offsetLeft, h = s.offsetTop);
    }
    return { width: c, height: u, x: d, y: h };
  }(e, n)) : rn(t) ? sa(function(a, i) {
    const o = ha(a, !0, i === "fixed"), l = o.top + a.clientTop, s = o.left + a.clientLeft, c = Ut(a) ? Rn(a) : { x: 1, y: 1 };
    return { width: a.clientWidth * c.x, height: a.clientHeight * c.y, x: s * c.x, y: l * c.y };
  }(t, n)) : sa(function(a) {
    const i = on(a), o = Mr(a), l = a.ownerDocument.body, s = ca(i.scrollWidth, i.clientWidth, l.scrollWidth, l.clientWidth), c = ca(i.scrollHeight, i.clientHeight, l.scrollHeight, l.clientHeight);
    let u = -o.scrollLeft + pu(a);
    const d = -o.scrollTop;
    return qt(l).direction === "rtl" && (u += ca(i.clientWidth, l.clientWidth) - s), { width: s, height: c, x: u, y: d };
  }(on(e)));
}
function ss(e) {
  return Ut(e) && qt(e).position !== "fixed" ? e.offsetParent : null;
}
function cs(e) {
  const t = Mt(e);
  let n = ss(e);
  for (; n && By(n) && qt(n).position === "static"; )
    n = ss(n);
  return n && (cn(n) === "html" || cn(n) === "body" && qt(n).position === "static" && !Fi(n)) ? t : n || function(a) {
    let i = pa(a);
    for (; Ut(i) && !vo(i); ) {
      if (Fi(i))
        return i;
      i = pa(i);
    }
    return null;
  }(e) || t;
}
function Vy(e, t, n) {
  const a = Ut(t), i = on(t), o = ha(e, !0, n === "fixed", t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const s = { x: 0, y: 0 };
  if (a || !a && n !== "fixed")
    if ((cn(t) !== "body" || Dr(i)) && (l = Mr(t)), Ut(t)) {
      const c = ha(t, !0);
      s.x = c.x + t.clientLeft, s.y = c.y + t.clientTop;
    } else
      i && (s.x = pu(i));
  return { x: o.left + l.scrollLeft - s.x, y: o.top + l.scrollTop - s.y, width: o.width, height: o.height };
}
const Hy = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: a, strategy: i } = e;
  const o = n === "clippingAncestors" ? function(u, d) {
    const h = d.get(u);
    if (h)
      return h;
    let m = gu(u).filter((g) => rn(g) && cn(g) !== "body"), p = null;
    const y = qt(u).position === "fixed";
    let E = y ? pa(u) : u;
    for (; rn(E) && !vo(E); ) {
      const g = qt(E), f = Fi(E);
      (y ? f || p : f || g.position !== "static" || !p || !["absolute", "fixed"].includes(p.position)) ? p = g : m = m.filter((x) => x !== E), E = pa(E);
    }
    return d.set(u, m), m;
  }(t, this._c) : [].concat(n), l = [...o, a], s = l[0], c = l.reduce((u, d) => {
    const h = ls(t, d, i);
    return u.top = ca(h.top, u.top), u.right = is(h.right, u.right), u.bottom = is(h.bottom, u.bottom), u.left = ca(h.left, u.left), u;
  }, ls(t, s, i));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: a } = e;
  const i = Ut(n), o = on(n);
  if (n === o)
    return t;
  let l = { scrollLeft: 0, scrollTop: 0 }, s = { x: 1, y: 1 };
  const c = { x: 0, y: 0 };
  if ((i || !i && a !== "fixed") && ((cn(n) !== "body" || Dr(o)) && (l = Mr(n)), Ut(n))) {
    const u = ha(n);
    s = Rn(n), c.x = u.x + n.clientLeft, c.y = u.y + n.clientTop;
  }
  return { width: t.width * s.x, height: t.height * s.y, x: t.x * s.x - l.scrollLeft * s.x + c.x, y: t.y * s.y - l.scrollTop * s.y + c.y };
}, isElement: rn, getDimensions: function(e) {
  return Ut(e) ? cu(e) : e.getBoundingClientRect();
}, getOffsetParent: cs, getDocumentElement: on, getScale: Rn, async getElementRects(e) {
  let { reference: t, floating: n, strategy: a } = e;
  const i = this.getOffsetParent || cs, o = this.getDimensions;
  return { reference: Vy(t, await i(n), a), floating: { x: 0, y: 0, ...await o(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => qt(e).direction === "rtl" }, us = (e, t, n) => {
  const a = /* @__PURE__ */ new Map(), i = { platform: Hy, ...n }, o = { ...i.platform, _c: a };
  return (async (l, s, c) => {
    const { placement: u = "bottom", strategy: d = "absolute", middleware: h = [], platform: m } = c, p = h.filter(Boolean), y = await (m.isRTL == null ? void 0 : m.isRTL(s));
    if (m == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), p.filter((S) => {
      let { name: A } = S;
      return A === "autoPlacement" || A === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    l && s || console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
    let E = await m.getElementRects({ reference: l, floating: s, strategy: d }), { x: g, y: f } = rs(E, u, y), x = u, v = {}, b = 0;
    for (let S = 0; S < p.length; S++) {
      const { name: A, fn: T } = p[S], { x: N, y: w, data: C, reset: _ } = await T({ x: g, y: f, initialPlacement: u, placement: x, strategy: d, middlewareData: v, rects: E, platform: m, elements: { reference: l, floating: s } });
      g = N ?? g, f = w ?? f, v = { ...v, [A]: { ...v[A], ...C } }, b > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), _ && b <= 50 && (b++, typeof _ == "object" && (_.placement && (x = _.placement), _.rects && (E = _.rects === !0 ? await m.getElementRects({ reference: l, floating: s, strategy: d }) : _.rects), { x: g, y: f } = rs(E, x, y)), S = -1);
    }
    return { x: g, y: f, placement: x, strategy: d, middlewareData: v };
  })(e, t, { ...i, platform: o });
};
var tn, kn = { exports: {} }, ds = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
tn = ds, function() {
  var e = r, t = 60103, n = 60106;
  tn.Fragment = 60107;
  var a = 60108, i = 60114, o = 60109, l = 60110, s = 60112, c = 60113, u = 60120, d = 60115, h = 60116, m = 60121, p = 60122, y = 60117, E = 60129, g = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var f = Symbol.for;
    t = f("react.element"), n = f("react.portal"), tn.Fragment = f("react.fragment"), a = f("react.strict_mode"), i = f("react.profiler"), o = f("react.provider"), l = f("react.context"), s = f("react.forward_ref"), c = f("react.suspense"), u = f("react.suspense_list"), d = f("react.memo"), h = f("react.lazy"), m = f("react.block"), p = f("react.server.block"), y = f("react.fundamental"), f("react.scope"), f("react.opaque.id"), E = f("react.debug_trace_mode"), f("react.offscreen"), g = f("react.legacy_hidden");
  }
  var x = typeof Symbol == "function" && Symbol.iterator, v = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function b(W) {
    for (var ae = arguments.length, D = new Array(ae > 1 ? ae - 1 : 0), ue = 1; ue < ae; ue++)
      D[ue - 1] = arguments[ue];
    S("error", W, D);
  }
  function S(W, ae, D) {
    var ue = v.ReactDebugCurrentFrame, oe = "";
    if (w) {
      var ye = T(w.type), he = w._owner;
      oe += function(Ne, ke, Se) {
        var xe = "";
        if (ke) {
          var re = ke.fileName, J = re.replace(A, "");
          if (/^index\./.test(J)) {
            var He = re.match(A);
            if (He) {
              var fe = He[1];
              fe && (J = fe.replace(A, "") + "/" + J);
            }
          }
          xe = " (at " + J + ":" + ke.lineNumber + ")";
        } else
          Se && (xe = " (created by " + Se + ")");
        return `
    in ` + (Ne || "Unknown") + xe;
      }(ye, w._source, he && T(he.type));
    }
    (oe += ue.getStackAddendum()) !== "" && (ae += "%s", D = D.concat([oe]));
    var Ee = D.map(function(Ne) {
      return "" + Ne;
    });
    Ee.unshift("Warning: " + ae), Function.prototype.apply.call(console[W], console, Ee);
  }
  var A = /^(.*)[\\\/]/;
  function T(W) {
    if (W == null)
      return null;
    if (typeof W.tag == "number" && b("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof W == "function")
      return W.displayName || W.name || null;
    if (typeof W == "string")
      return W;
    switch (W) {
      case tn.Fragment:
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
    if (typeof W == "object")
      switch (W.$$typeof) {
        case l:
          return "Context.Consumer";
        case o:
          return "Context.Provider";
        case s:
          return ue = W, oe = W.render, ye = "ForwardRef", he = oe.displayName || oe.name || "", ue.displayName || (he !== "" ? ye + "(" + he + ")" : ye);
        case d:
          return T(W.type);
        case m:
          return T(W.render);
        case h:
          var ae = (D = W)._status === 1 ? D._result : null;
          if (ae)
            return T(ae);
      }
    var D, ue, oe, ye, he;
    return null;
  }
  var N = {};
  v.ReactDebugCurrentFrame;
  var w = null;
  function C(W) {
    w = W;
  }
  var _, k, O, K = v.ReactCurrentOwner, V = Object.prototype.hasOwnProperty, F = { key: !0, ref: !0, __self: !0, __source: !0 };
  function H(W, ae, D, ue, oe) {
    var ye, he = {}, Ee = null, Ne = null;
    for (ye in D !== void 0 && (Ee = "" + D), function(xe) {
      if (V.call(xe, "key")) {
        var re = Object.getOwnPropertyDescriptor(xe, "key").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return xe.key !== void 0;
    }(ae) && (Ee = "" + ae.key), function(xe) {
      if (V.call(xe, "ref")) {
        var re = Object.getOwnPropertyDescriptor(xe, "ref").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return xe.ref !== void 0;
    }(ae) && (Ne = ae.ref, function(xe, re) {
      if (typeof xe.ref == "string" && K.current && re && K.current.stateNode !== re) {
        var J = T(K.current.type);
        O[J] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(K.current.type), xe.ref), O[J] = !0);
      }
    }(ae, oe)), ae)
      V.call(ae, ye) && !F.hasOwnProperty(ye) && (he[ye] = ae[ye]);
    if (W && W.defaultProps) {
      var ke = W.defaultProps;
      for (ye in ke)
        he[ye] === void 0 && (he[ye] = ke[ye]);
    }
    if (Ee || Ne) {
      var Se = typeof W == "function" ? W.displayName || W.name || "Unknown" : W;
      Ee && function(xe, re) {
        var J = function() {
          _ || (_ = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        J.isReactWarning = !0, Object.defineProperty(xe, "key", { get: J, configurable: !0 });
      }(he, Se), Ne && function(xe, re) {
        var J = function() {
          k || (k = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        J.isReactWarning = !0, Object.defineProperty(xe, "ref", { get: J, configurable: !0 });
      }(he, Se);
    }
    return function(xe, re, J, He, fe, Le, Oe) {
      var je = { $$typeof: t, type: xe, key: re, ref: J, props: Oe, _owner: Le, _store: {} };
      return Object.defineProperty(je._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: !1 }), Object.defineProperty(je, "_self", { configurable: !1, enumerable: !1, writable: !1, value: He }), Object.defineProperty(je, "_source", { configurable: !1, enumerable: !1, writable: !1, value: fe }), Object.freeze && (Object.freeze(je.props), Object.freeze(je)), je;
    }(W, Ee, Ne, oe, ue, K.current, he);
  }
  O = {};
  var Y, z = v.ReactCurrentOwner;
  function q(W) {
    w = W;
  }
  function B(W) {
    return typeof W == "object" && W !== null && W.$$typeof === t;
  }
  function j() {
    if (z.current) {
      var W = T(z.current.type);
      if (W)
        return `

Check the render method of \`` + W + "`.";
    }
    return "";
  }
  v.ReactDebugCurrentFrame, Y = !1;
  var U = {};
  function X(W, ae) {
    if (W._store && !W._store.validated && W.key == null) {
      W._store.validated = !0;
      var D = function(oe) {
        var ye = j();
        if (!ye) {
          var he = typeof oe == "string" ? oe : oe.displayName || oe.name;
          he && (ye = `

Check the top-level render call using <` + he + ">.");
        }
        return ye;
      }(ae);
      if (!U[D]) {
        U[D] = !0;
        var ue = "";
        W && W._owner && W._owner !== z.current && (ue = " It was passed a child from " + T(W._owner.type) + "."), q(W), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', D, ue), q(null);
      }
    }
  }
  function ne(W, ae) {
    if (typeof W == "object") {
      if (Array.isArray(W))
        for (var D = 0; D < W.length; D++) {
          var ue = W[D];
          B(ue) && X(ue, ae);
        }
      else if (B(W))
        W._store && (W._store.validated = !0);
      else if (W) {
        var oe = function(Ee) {
          if (Ee === null || typeof Ee != "object")
            return null;
          var Ne = x && Ee[x] || Ee["@@iterator"];
          return typeof Ne == "function" ? Ne : null;
        }(W);
        if (typeof oe == "function" && oe !== W.entries)
          for (var ye, he = oe.call(W); !(ye = he.next()).done; )
            B(ye.value) && X(ye.value, ae);
      }
    }
  }
  function ce(W) {
    var ae, D = W.type;
    if (D != null && typeof D != "string") {
      if (typeof D == "function")
        ae = D.propTypes;
      else {
        if (typeof D != "object" || D.$$typeof !== s && D.$$typeof !== d)
          return;
        ae = D.propTypes;
      }
      if (ae) {
        var ue = T(D);
        (function(oe, ye, he, Ee, Ne) {
          var ke = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var Se in oe)
            if (ke(oe, Se)) {
              var xe = void 0;
              try {
                if (typeof oe[Se] != "function") {
                  var re = Error((Ee || "React class") + ": " + he + " type `" + Se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof oe[Se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw re.name = "Invariant Violation", re;
                }
                xe = oe[Se](ye, Se, Ee, he, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (J) {
                xe = J;
              }
              !xe || xe instanceof Error || (C(Ne), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ee || "React class", he, Se, typeof xe), C(null)), xe instanceof Error && !(xe.message in N) && (N[xe.message] = !0, C(Ne), b("Failed %s type: %s", he, xe.message), C(null));
            }
        })(ae, W.props, "prop", ue, W);
      } else
        D.PropTypes === void 0 || Y || (Y = !0, b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", T(D) || "Unknown"));
      typeof D.getDefaultProps != "function" || D.getDefaultProps.isReactClassApproved || b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function we(W, ae, D, ue, oe, ye) {
    var he = function(J) {
      return typeof J == "string" || typeof J == "function" || J === tn.Fragment || J === i || J === E || J === a || J === c || J === u || J === g || typeof J == "object" && J !== null && (J.$$typeof === h || J.$$typeof === d || J.$$typeof === o || J.$$typeof === l || J.$$typeof === s || J.$$typeof === y || J.$$typeof === m || J[0] === p);
    }(W);
    if (!he) {
      var Ee = "";
      (W === void 0 || typeof W == "object" && W !== null && Object.keys(W).length === 0) && (Ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
      var Ne, ke = function(J) {
        return J !== void 0 ? `

Check your code at ` + J.fileName.replace(/^.*[\\\/]/, "") + ":" + J.lineNumber + "." : "";
      }(oe);
      Ee += ke || j(), W === null ? Ne = "null" : Array.isArray(W) ? Ne = "array" : W !== void 0 && W.$$typeof === t ? (Ne = "<" + (T(W.type) || "Unknown") + " />", Ee = " Did you accidentally export a JSX literal instead of a component?") : Ne = typeof W, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ne, Ee);
    }
    var Se = H(W, ae, D, oe, ye);
    if (Se == null)
      return Se;
    if (he) {
      var xe = ae.children;
      if (xe !== void 0)
        if (ue)
          if (Array.isArray(xe)) {
            for (var re = 0; re < xe.length; re++)
              ne(xe[re], W);
            Object.freeze && Object.freeze(xe);
          } else
            b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          ne(xe, W);
    }
    return W === tn.Fragment ? function(J) {
      for (var He = Object.keys(J.props), fe = 0; fe < He.length; fe++) {
        var Le = He[fe];
        if (Le !== "children" && Le !== "key") {
          q(J), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Le), q(null);
          break;
        }
      }
      J.ref !== null && (q(J), b("Invalid attribute `ref` supplied to `React.Fragment`."), q(null));
    }(Se) : ce(Se), Se;
  }
  var Ce = function(W, ae, D) {
    return we(W, ae, D, !1);
  }, G = function(W, ae, D) {
    return we(W, ae, D, !0);
  };
  tn.jsx = Ce, tn.jsxs = G;
}(), kn.exports = ds;
var ni, xu = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
ni = xu, function() {
  var e = {}.hasOwnProperty;
  function t() {
    for (var n = [], a = 0; a < arguments.length; a++) {
      var i = arguments[a];
      if (i) {
        var o = typeof i;
        if (o === "string" || o === "number")
          n.push(i);
        else if (Array.isArray(i)) {
          if (i.length) {
            var l = t.apply(null, i);
            l && n.push(l);
          }
        } else if (o === "object") {
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
  ni.exports ? (t.default = t, ni.exports = t) : window.classNames = t;
}();
var ms = xu.exports;
const fs = (e, t, n) => {
  let a = null;
  return function(...i) {
    a && clearTimeout(a), a = setTimeout(() => {
      a = null, n || e.apply(this, i);
    }, t);
  };
}, Wy = ({ content: e }) => kn.exports.jsx("span", { dangerouslySetInnerHTML: { __html: e } }), Ky = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, Iy = $.createContext({ getTooltipData: () => Ky });
function vu(e = "DEFAULT_TOOLTIP_ID") {
  return $.useContext(Iy).getTooltipData(e);
}
const hs = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: n = null, place: a = "top", offset: i = 10, strategy: o = "absolute", middlewares: l = [Ry(Number(i)), zy(), Fy({ padding: 5 })] }) => {
  if (!e)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  if (t === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  const s = l;
  return n ? (s.push({ name: "arrow", options: c = { element: n, padding: 5 }, async fn(u) {
    const { element: d, padding: h = 0 } = c || {}, { x: m, y: p, placement: y, rects: E, platform: g } = u;
    if (d == null)
      return console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const f = lu(h), x = { x: m, y: p }, v = xa(y), b = xo(v), S = await g.getDimensions(d), A = v === "y" ? "top" : "left", T = v === "y" ? "bottom" : "right", N = E.reference[b] + E.reference[v] - x[v] - E.floating[b], w = x[v] - E.reference[v], C = await (g.getOffsetParent == null ? void 0 : g.getOffsetParent(d));
    let _ = C ? v === "y" ? C.clientHeight || 0 : C.clientWidth || 0 : 0;
    _ === 0 && (_ = E.floating[b]);
    const k = N / 2 - w / 2, O = f[A], K = _ - S[b] - f[T], V = _ / 2 - S[b] / 2 + k, F = Ri(O, V, K), H = ga(y) != null && V != F && E.reference[b] / 2 - (V < O ? f[A] : f[T]) - S[b] / 2 < 0;
    return { [v]: x[v] - (H ? V < O ? O - V : K - V : 0), data: { [v]: F, centerOffset: V - F } };
  } }), us(e, t, { placement: a, strategy: o, middleware: s }).then(({ x: u, y: d, placement: h, middlewareData: m }) => {
    var p, y;
    const E = { left: `${u}px`, top: `${d}px` }, { x: g, y: f } = (p = m.arrow) !== null && p !== void 0 ? p : { x: 0, y: 0 };
    return { tooltipStyles: E, tooltipArrowStyles: { left: g != null ? `${g}px` : "", top: f != null ? `${f}px` : "", right: "", bottom: "", [(y = { top: "bottom", right: "left", bottom: "top", left: "right" }[h.split("-")[0]]) !== null && y !== void 0 ? y : "bottom"]: "-4px" } };
  })) : us(e, t, { placement: "bottom", strategy: o, middleware: s }).then(({ x: u, y: d }) => ({ tooltipStyles: { left: `${u}px`, top: `${d}px` }, tooltipArrowStyles: {} }));
  var c;
};
var fn = { tooltip: "styles-module_tooltip__mnnfp", fixed: "styles-module_fixed__7ciUi", arrow: "styles-module_arrow__K0L3T", "no-arrow": "styles-module_no-arrow__KcFZN", clickable: "styles-module_clickable__Bv9o7", show: "styles-module_show__2NboJ", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const ps = ({ id: e, className: t, classNameArrow: n, variant: a = "dark", anchorId: i, anchorSelect: o, place: l = "top", offset: s = 10, events: c = ["hover"], positionStrategy: u = "absolute", middlewares: d, wrapper: h, children: m = null, delayShow: p = 0, delayHide: y = 0, float: E = !1, noArrow: g = !1, clickable: f = !1, closeOnEsc: x = !1, style: v, position: b, afterShow: S, afterHide: A, content: T, html: N, isOpen: w, setIsOpen: C, activeAnchor: _, setActiveAnchor: k }) => {
  const O = $.useRef(null), K = $.useRef(null), V = $.useRef(null), F = $.useRef(null), [H, Y] = $.useState({}), [z, q] = $.useState({}), [B, j] = $.useState(!1), [U, X] = $.useState(!1), ne = $.useRef(!1), ce = $.useRef(null), { anchorRefs: we, setActiveAnchor: Ce } = vu(e), G = $.useRef(!1), [W, ae] = $.useState([]), D = $.useRef(!1);
  $.useLayoutEffect(() => (D.current = !0, () => {
    D.current = !1;
  }), []), $.useEffect(() => {
    if (!B) {
      const fe = setTimeout(() => {
        X(!1);
      }, 150);
      return () => {
        clearTimeout(fe);
      };
    }
    return () => null;
  }, [B]);
  const ue = (fe) => {
    D.current && (fe && X(!0), setTimeout(() => {
      D.current && (C == null || C(fe), w === void 0 && j(fe));
    }, 10));
  };
  $.useEffect(() => {
    if (w === void 0)
      return () => null;
    w && X(!0);
    const fe = setTimeout(() => {
      j(w);
    }, 10);
    return () => {
      clearTimeout(fe);
    };
  }, [w]), $.useEffect(() => {
    B !== ne.current && (ne.current = B, B ? S == null || S() : A == null || A());
  }, [B]);
  const oe = (fe = y) => {
    F.current && clearTimeout(F.current), F.current = setTimeout(() => {
      G.current || ue(!1);
    }, fe);
  }, ye = (fe) => {
    var Le;
    if (!fe)
      return;
    p ? (V.current && clearTimeout(V.current), V.current = setTimeout(() => {
      ue(!0);
    }, p)) : ue(!0);
    const Oe = (Le = fe.currentTarget) !== null && Le !== void 0 ? Le : fe.target;
    k(Oe), Ce({ current: Oe }), F.current && clearTimeout(F.current);
  }, he = () => {
    f ? oe(y || 100) : y ? oe() : ue(!1), V.current && clearTimeout(V.current);
  }, Ee = ({ x: fe, y: Le }) => {
    hs({ place: l, offset: s, elementReference: { getBoundingClientRect: () => ({ x: fe, y: Le, width: 0, height: 0, top: Le, left: fe, right: fe, bottom: Le }) }, tooltipReference: O.current, tooltipArrowReference: K.current, strategy: u, middlewares: d }).then((Oe) => {
      Object.keys(Oe.tooltipStyles).length && Y(Oe.tooltipStyles), Object.keys(Oe.tooltipArrowStyles).length && q(Oe.tooltipArrowStyles);
    });
  }, Ne = (fe) => {
    if (!fe)
      return;
    const Le = fe, Oe = { x: Le.clientX, y: Le.clientY };
    Ee(Oe), ce.current = Oe;
  }, ke = (fe) => {
    ye(fe), y && oe();
  }, Se = (fe) => {
    const Le = document.querySelector(`[id='${i}']`);
    Le != null && Le.contains(fe.target) || W.some((Oe) => Oe.contains(fe.target)) || ue(!1);
  }, xe = (fe) => {
    fe.key === "Escape" && ue(!1);
  }, re = fs(ye, 50), J = fs(he, 50);
  $.useEffect(() => {
    var fe, Le;
    const Oe = new Set(we);
    W.forEach((et) => {
      Oe.add({ current: et });
    });
    const je = document.querySelector(`[id='${i}']`);
    je && Oe.add({ current: je }), x && window.addEventListener("keydown", xe);
    const Ie = [];
    c.find((et) => et === "click") && (window.addEventListener("click", Se), Ie.push({ event: "click", listener: ke })), c.find((et) => et === "hover") && (Ie.push({ event: "mouseenter", listener: re }, { event: "mouseleave", listener: J }, { event: "focus", listener: re }, { event: "blur", listener: J }), E && Ie.push({ event: "mousemove", listener: Ne }));
    const Ue = () => {
      G.current = !0;
    }, ct = () => {
      G.current = !1, he();
    };
    return f && ((fe = O.current) === null || fe === void 0 || fe.addEventListener("mouseenter", Ue), (Le = O.current) === null || Le === void 0 || Le.addEventListener("mouseleave", ct)), Ie.forEach(({ event: et, listener: te }) => {
      Oe.forEach((ze) => {
        var Ve;
        (Ve = ze.current) === null || Ve === void 0 || Ve.addEventListener(et, te);
      });
    }), () => {
      var et, te;
      c.find((ze) => ze === "click") && window.removeEventListener("click", Se), x && window.removeEventListener("keydown", xe), f && ((et = O.current) === null || et === void 0 || et.removeEventListener("mouseenter", Ue), (te = O.current) === null || te === void 0 || te.removeEventListener("mouseleave", ct)), Ie.forEach(({ event: ze, listener: Ve }) => {
        Oe.forEach((Pt) => {
          var Nt;
          (Nt = Pt.current) === null || Nt === void 0 || Nt.removeEventListener(ze, Ve);
        });
      });
    };
  }, [U, we, W, x, c]), $.useEffect(() => {
    let fe = o ?? "";
    !fe && e && (fe = `[data-tooltip-id='${e}']`);
    const Le = new MutationObserver((Oe) => {
      const je = [];
      Oe.forEach((Ie) => {
        if (Ie.type === "attributes" && Ie.attributeName === "data-tooltip-id" && Ie.target.getAttribute("data-tooltip-id") === e && je.push(Ie.target), Ie.type === "childList" && (_ && [...Ie.removedNodes].some((Ue) => !!Ue.contains(_) && (X(!1), ue(!1), k(null), !0)), fe))
          try {
            const Ue = [...Ie.addedNodes].filter((ct) => ct.nodeType === 1);
            je.push(...Ue.filter((ct) => ct.matches(fe))), je.push(...Ue.flatMap((ct) => [...ct.querySelectorAll(fe)]));
          } catch {
          }
      }), je.length && ae((Ie) => [...Ie, ...je]);
    });
    return Le.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"] }), () => {
      Le.disconnect();
    };
  }, [e, o, _]), $.useEffect(() => {
    b ? Ee(b) : E ? ce.current && Ee(ce.current) : hs({ place: l, offset: s, elementReference: _, tooltipReference: O.current, tooltipArrowReference: K.current, strategy: u, middlewares: d }).then((fe) => {
      D.current && (Object.keys(fe.tooltipStyles).length && Y(fe.tooltipStyles), Object.keys(fe.tooltipArrowStyles).length && q(fe.tooltipArrowStyles));
    });
  }, [B, _, T, N, l, s, u, b]), $.useEffect(() => {
    var fe;
    const Le = document.querySelector(`[id='${i}']`), Oe = [...W, Le];
    _ && Oe.includes(_) || k((fe = W[0]) !== null && fe !== void 0 ? fe : Le);
  }, [i, W, _]), $.useEffect(() => () => {
    V.current && clearTimeout(V.current), F.current && clearTimeout(F.current);
  }, []), $.useEffect(() => {
    let fe = o;
    if (!fe && e && (fe = `[data-tooltip-id='${e}']`), fe)
      try {
        const Le = Array.from(document.querySelectorAll(fe));
        ae(Le);
      } catch {
        ae([]);
      }
  }, [e, o]);
  const He = !!(N || T || m) && B && Object.keys(H).length > 0;
  return U ? kn.exports.jsxs(h, { id: e, role: "tooltip", className: ms("react-tooltip", fn.tooltip, fn[a], t, { [fn.show]: He, [fn.fixed]: u === "fixed", [fn.clickable]: f }), style: { ...v, ...H }, ref: O, children: [N && kn.exports.jsx(Wy, { content: N }) || T || m, kn.exports.jsx(h, { className: ms("react-tooltip-arrow", fn.arrow, n, { [fn["no-arrow"]]: g }), style: z, ref: K })] }) : null;
}, jy = ({ id: e, anchorId: t, anchorSelect: n, content: a, html: i, className: o, classNameArrow: l, variant: s = "dark", place: c = "top", offset: u = 10, wrapper: d = "div", children: h = null, events: m = ["hover"], positionStrategy: p = "absolute", middlewares: y, delayShow: E = 0, delayHide: g = 0, float: f = !1, noArrow: x = !1, clickable: v = !1, closeOnEsc: b = !1, style: S, position: A, isOpen: T, setIsOpen: N, afterShow: w, afterHide: C }) => {
  const [_, k] = $.useState(a), [O, K] = $.useState(i), [V, F] = $.useState(c), [H, Y] = $.useState(s), [z, q] = $.useState(u), [B, j] = $.useState(E), [U, X] = $.useState(g), [ne, ce] = $.useState(f), [we, Ce] = $.useState(d), [G, W] = $.useState(m), [ae, D] = $.useState(p), [ue, oe] = $.useState(null), { anchorRefs: ye, activeAnchor: he } = vu(e), Ee = (Se) => Se == null ? void 0 : Se.getAttributeNames().reduce((xe, re) => {
    var J;
    return re.startsWith("data-tooltip-") && (xe[re.replace(/^data-tooltip-/, "")] = (J = Se == null ? void 0 : Se.getAttribute(re)) !== null && J !== void 0 ? J : null), xe;
  }, {}), Ne = (Se) => {
    const xe = { place: (re) => {
      var J;
      F((J = re) !== null && J !== void 0 ? J : c);
    }, content: (re) => {
      k(re ?? a);
    }, html: (re) => {
      K(re ?? i);
    }, variant: (re) => {
      var J;
      Y((J = re) !== null && J !== void 0 ? J : s);
    }, offset: (re) => {
      q(re === null ? u : Number(re));
    }, wrapper: (re) => {
      var J;
      Ce((J = re) !== null && J !== void 0 ? J : d);
    }, events: (re) => {
      const J = re == null ? void 0 : re.split(" ");
      W(J ?? m);
    }, "position-strategy": (re) => {
      var J;
      D((J = re) !== null && J !== void 0 ? J : p);
    }, "delay-show": (re) => {
      j(re === null ? E : Number(re));
    }, "delay-hide": (re) => {
      X(re === null ? g : Number(re));
    }, float: (re) => {
      ce(re === null ? f : !!re);
    } };
    Object.values(xe).forEach((re) => re(null)), Object.entries(Se).forEach(([re, J]) => {
      var He;
      (He = xe[re]) === null || He === void 0 || He.call(xe, J);
    });
  };
  $.useEffect(() => {
    k(a);
  }, [a]), $.useEffect(() => {
    K(i);
  }, [i]), $.useEffect(() => {
    F(c);
  }, [c]), $.useEffect(() => {
    var Se;
    const xe = new Set(ye);
    let re = n;
    if (!re && e && (re = `[data-tooltip-id='${e}']`), re)
      try {
        document.querySelectorAll(re).forEach((Oe) => {
          xe.add({ current: Oe });
        });
      } catch {
        console.warn(`[react-tooltip] "${n}" is not a valid CSS selector`);
      }
    const J = document.querySelector(`[id='${t}']`);
    if (J && xe.add({ current: J }), !xe.size)
      return () => null;
    const He = (Se = ue ?? J) !== null && Se !== void 0 ? Se : he.current, fe = new MutationObserver((Oe) => {
      Oe.forEach((je) => {
        var Ie;
        if (!He || je.type !== "attributes" || !(!((Ie = je.attributeName) === null || Ie === void 0) && Ie.startsWith("data-tooltip-")))
          return;
        const Ue = Ee(He);
        Ne(Ue);
      });
    }), Le = { attributes: !0, childList: !1, subtree: !1 };
    if (He) {
      const Oe = Ee(He);
      Ne(Oe), fe.observe(He, Le);
    }
    return () => {
      fe.disconnect();
    };
  }, [ye, he, ue, t, n]);
  const ke = { id: e, anchorId: t, anchorSelect: n, className: o, classNameArrow: l, content: _, html: O, place: V, variant: H, offset: z, wrapper: we, events: G, positionStrategy: ae, middlewares: y, delayShow: B, delayHide: U, float: ne, noArrow: x, clickable: v, closeOnEsc: b, style: S, position: A, isOpen: T, setIsOpen: N, afterShow: w, afterHide: C, activeAnchor: ue, setActiveAnchor: (Se) => oe(Se) };
  return h ? kn.exports.jsx(ps, { ...ke, children: h }) : kn.exports.jsx(ps, { ...ke });
}, Ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  curveBasis: vh,
  curveBasisClosed: bh,
  curveBasisOpen: Eh,
  curveBundle: Ah,
  curveCardinal: Sh,
  curveCardinalClosed: Th,
  curveCardinalOpen: kh,
  curveCatmullRom: wh,
  curveCatmullRomClosed: Ch,
  curveCatmullRomOpen: Ph,
  curveLinear: Pr,
  curveLinearClosed: yi,
  curveMonotoneX: Ka,
  curveMonotoneY: Nh,
  curveNatural: Lh,
  curveStep: Oh,
  curveStepAfter: Dh,
  curveStepBefore: _h
}, Symbol.toStringTag, { value: "Module" })), qy = (e) => {
  var S;
  const { xScale: t, yScale: n, yMax: a, xMax: i, handleTooltipMouseOver: o, handleTooltipMouseOff: l, isDebug: s, children: c } = e;
  let { transformedData: u, config: d, handleLineType: h, parseDate: m, formatDate: p, formatNumber: y, seriesHighlight: E, colorScale: g, rawData: f } = $.useContext(Me);
  const x = d.brush.active && ((S = d.brush.data) != null && S.length) ? d.brush.data : u;
  if (!x)
    return;
  const v = (A) => (d.xAxis.type === "date" ? t(m(A[d.xAxis.dataKey], !1)) : t(A[d.xAxis.dataKey])) + (t.bandwidth ? t.bandwidth() / 2 : 0), b = (A, T, N = void 0) => n(A[N.dataKey]);
  return x && /* @__PURE__ */ r.createElement("svg", null, /* @__PURE__ */ r.createElement(Bt, { component: "AreaChart" }, /* @__PURE__ */ r.createElement(be, { className: "area-chart", key: "area-wrapper", left: Number(d.yAxis.size) }, (d.runtime.areaSeriesKeys || d.series).map((A, T) => {
    let N = x.map((k) => ({
      [d.xAxis.dataKey]: k[d.xAxis.dataKey],
      [A.dataKey]: k[A.dataKey]
    })), w = Ar[A.lineType], C = d.legend.behavior === "highlight" && E.length > 0 && E.indexOf(A.dataKey) === -1, _ = d.legend.behavior === "highlight" || E.length === 0 || E.indexOf(A.dataKey) !== -1;
    return /* @__PURE__ */ r.createElement(r.Fragment, { key: T }, /* @__PURE__ */ r.createElement(
      Zt,
      {
        data: N,
        x: (k) => v(k),
        y: (k) => b(k, T, A),
        stroke: _ ? g ? g(d.runtime.seriesLabels ? d.runtime.seriesLabels[A.dataKey] : A.dataKey) : "#000" : "transparent",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        curve: w,
        strokeDasharray: A.type ? h(A.type) : 0
      }
    ), /* @__PURE__ */ r.createElement(
      ip,
      {
        key: "area-chart",
        fill: _ ? g ? g(d.runtime.seriesLabels ? d.runtime.seriesLabels[A.dataKey] : A.dataKey) : "#000" : "transparent",
        fillOpacity: C ? 0.25 : 0.5,
        data: N,
        x: (k) => v(k),
        y: (k) => b(k, T, A),
        yScale: n,
        curve: w,
        strokeDasharray: A.type ? h(A.type) : 0
      }
    ));
  }), /* @__PURE__ */ r.createElement(_t, { width: Number(i), height: Number(a), fill: "transparent", fillOpacity: 0.05, onMouseMove: (A) => o(A, f), onMouseLeave: l }))));
}, Uy = $.memo(qy), Sr = {
  Linear: "curveLinear",
  Cardinal: "curveCardinal",
  Natural: "curveNatural",
  "Monotone X": "curveMonotoneX",
  Step: "curveStep"
}, Yy = ({ xScale: e, yScale: t, yMax: n, xMax: a, handleTooltipMouseOver: i, handleTooltipMouseOff: o, isDebug: l }) => {
  var E;
  let { transformedData: s, config: c, seriesHighlight: u, colorScale: d, rawData: h } = $.useContext(Me);
  const m = c.brush.active && ((E = c.brush.data) != null && E.length) ? c.brush.data : s;
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
  return m && /* @__PURE__ */ r.createElement("svg", { height: Number(n) }, /* @__PURE__ */ r.createElement(Bt, { component: "AreaChartStacked" }, /* @__PURE__ */ r.createElement(be, { className: "area-chart", key: "area-wrapper", left: Number(c.yAxis.size) + y / 2, height: Number(n), style: { overflow: "hidden" } }, /* @__PURE__ */ r.createElement(
    dp,
    {
      data: m,
      keys: c.runtime.areaSeriesKeys.map((g) => g.dataKey) || c.series.map((g) => g.dataKey),
      x0: (g) => p(g.data[c.xAxis.dataKey]),
      y0: (g) => Number(t(g[0])),
      y1: (g) => Number(t(g[1])),
      curve: Ar[Sr[c.stackedAreaChartLineType]]
    },
    ({ stacks: g, path: f }) => g.map((x, v) => {
      let b = c.legend.behavior === "highlight" && u.length > 0 && u.indexOf(x.key) === -1, S = c.legend.behavior === "highlight" || u.length === 0 || u.indexOf(x.key) !== -1;
      return (
        // prettier-ignore
        /* @__PURE__ */ r.createElement(
          "path",
          {
            key: x.key,
            d: f(x) || "",
            strokeWidth: 2,
            stroke: S ? d ? d(c.runtime.seriesLabels ? c.runtime.seriesLabels[x.key] : x.key) : "#000" : "transparent",
            fillOpacity: b ? 0.2 : 1,
            fill: S ? d ? d(c.runtime.seriesLabels ? c.runtime.seriesLabels[x.key] : x.key) : "#000" : "transparent"
          }
        )
      );
    })
  ), /* @__PURE__ */ r.createElement(_t, { width: Number(a), height: Number(n), fill: "transparent", onMouseMove: (g) => i(g, h), onMouseLeave: o }))));
}, Xy = $.memo(Yy), va = () => {
  const { config: e, colorPalettes: t, tableData: n, updateConfig: a, parseDate: i, formatDate: o, setSeriesHighlight: l } = $.useContext(Me), { orientation: s } = e, [c, u] = $.useState(null), d = s === "horizontal", h = 1, m = e.lollipopSize === "large" ? 7 : e.lollipopSize === "medium" ? 6 : 5, p = e.lollipopSize === "large" ? 14 : e.lollipopSize === "medium" ? 12 : 10, y = e.yAxis.labelPlacement === "Below Bar", E = e.yAxis.displayNumbersOnBar, g = e.orientation === "horizontal" ? "yAxis" : "xAxis", f = e.barStyle === "rounded", x = e.visualizationSubType === "stacked", v = e.tipRounding, b = e.roundingStyle === "standard" ? "8px" : e.roundingStyle === "shallow" ? "5px" : e.roundingStyle === "finger" ? "15px" : "0px", S = e.runtime.seriesKeys.length, A = { small: 16, medium: 18, large: 20 }, T = Object.keys(e.runtime.seriesLabels).length > 1;
  return $.useEffect(() => {
    s === "horizontal" && !e.yAxis.labelPlacement && a({
      ...e,
      yAxis: {
        ...e,
        labelPlacement: "Below Bar"
      }
    });
  }, [e, a]), $.useEffect(() => {
    e.isLollipopChart === !1 && e.barHeight < 25 && a({ ...e, barHeight: 25 });
  }, [e.isLollipopChart]), $.useEffect(() => {
    e.visualizationSubType === "horizontal" && a({
      ...e,
      orientation: "horizontal"
    });
  }, []), $.useEffect(() => {
    e.barStyle === "lollipop" && !e.isLollipopChart && a({ ...e, isLollipopChart: !0 }), (f || e.barStyle === "flat") && a({ ...e, isLollipopChart: !1 });
  }, [e.barStyle]), {
    generateIconSize: (H) => H < 4 ? 1 : H < 5 ? 4 : H < 10 ? 6 : H < 15 ? 7 : H < 20 || H < 90 ? 8 : 0,
    isHorizontal: d,
    barBorderWidth: h,
    lollipopBarWidth: m,
    lollipopShapeSize: p,
    isLabelBelowBar: y,
    displayNumbersOnBar: E,
    section: g,
    isRounded: f,
    isStacked: x,
    tipRounding: v,
    radius: b,
    stackCount: S,
    fontSize: A,
    hasMultipleSeries: T,
    applyRadius: (H) => {
      if (H == null || !f)
        return {};
      let Y = {};
      return (x && H + 1 === S || !x) && (Y = d ? { borderRadius: `0 ${b}  ${b}  0` } : { borderRadius: `${b} ${b} 0 0` }), !x && H === -1 && (Y = d ? { borderRadius: `${b} 0  0 ${b} ` } : { borderRadius: ` 0  0 ${b} ${b}` }), v === "full" && x && H === 0 && S > 1 && (Y = d ? { borderRadius: `${b} 0 0 ${b}` } : { borderRadius: `0 0 ${b} ${b}` }), v === "full" && (x && H === 0 && S === 1 || !x) && (Y = { borderRadius: b }), Y;
    },
    updateBars: (H) => {
      if (e.visualizationType !== "Bar" && !d)
        return H;
      const Y = [...H];
      let z;
      const q = {
        stacked: e.barHeight,
        lollipop: m
      };
      x ? z = q.stacked : z = q[e.isLollipopChart ? "lollipop" : "stacked"] * S;
      const B = y ? A[e.fontSize] * 1.2 : 0;
      let j = Number(e.barSpace), U = Y.length * (z + B + j);
      return d && (e.heights.horizontal = U), Y.map((X, ne) => {
        let ce = 0;
        return X.index !== 0 && (ce = (z + j + B) * ne), { ...X, y: ce, height: z };
      });
    },
    assignColorsToValues: (H, Y, z) => {
      if (!e.legend.colorCode && e.series.length > 1)
        return z;
      const q = e.customColors ?? t[e.palette], B = n.map((ne) => ne[e.legend.colorCode]);
      let j = /* @__PURE__ */ new Map(), U = [];
      for (let ne = 0; ne < B.length; ne++)
        j.has(B[ne]) || j.set(B[ne], q[j.size % q.length]), U.push(j.get(B[ne]));
      for (; U.length < H; )
        U = U.concat(U);
      return U[Y];
    },
    getHighlightedBarColorByValue: (H) => {
      const Y = e == null ? void 0 : e.highlightedBarValues.find((z) => {
        if (z.value)
          return e.xAxis.type === "date" ? o(i(z.value)) === H : z.value === H;
      });
      return Y != null && Y.color ? Y.color : "rgba(255, 102, 1)";
    },
    getHighlightedBarByValue: (H) => {
      const Y = e == null ? void 0 : e.highlightedBarValues.filter((z) => {
        if (z.value)
          return e.xAxis.type === "date" ? o(i(z.value)) === H : z.value === H;
      })[0];
      return Y != null && Y.color ? Y : !1;
    },
    getAdditionalColumn: (H, Y) => {
      if (!Y)
        return "";
      const z = e.columns, q = [];
      let B = "";
      const j = n.find((U) => U[e.xAxis.dataKey] === Y) || {};
      return Object.keys(z).forEach((U) => {
        if (H && e.columns[U].series && e.columns[U].series !== H)
          return;
        const X = {
          addColPrefix: e.columns[U].prefix,
          addColSuffix: e.columns[U].suffix,
          addColRoundTo: e.columns[U].roundToPlace ? e.columns[U].roundToPlace : "",
          addColCommas: e.columns[U].commas
        }, ne = _s(j[e.columns[U].name], "left", !0, e, X);
        e.columns[U].tooltips && q.push([e.columns[U].label, ne]);
      }), q.forEach((U) => {
        B += `${U[0]} : ${U[1]} <br/>`;
      }), B;
    },
    hoveredBar: c,
    setHoveredBar: u,
    onMouseOverBar: (H, Y) => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && Y && l([Y]), u(H);
    },
    onMouseLeaveBar: () => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && l([]);
    }
  };
}, ba = $.createContext(null), bo = ({ xScale: e, barWidth: t = 0, totalBarsInGroup: n = 1, yMax: a, handleTooltipMouseOff: i, handleTooltipMouseOver: o, handleTooltipClick: l, tooltipData: s, showTooltip: c, hideTooltip: u }) => {
  const { parseDate: d, config: h } = $.useContext(Me), { runtime: m, regions: p, visualizationType: y, orientation: E, xAxis: g } = h;
  let f, x, v;
  if (p && E === "vertical")
    return p.map((b) => {
      if (g.type === "date" && b.fromType !== "Previous Days" && (f = e(d(b.from).getTime()), x = e(d(b.to).getTime()), v = x - f), g.type === "categorical" && (f = e(b.from), x = e(b.to), v = x - f), (y === "Bar" || h.visualizationType === "Combo") && g.type === "date" && (f = b.fromType !== "Previous Days" ? e(d(b.from).getTime()) - t * n / 2 : null, x = b.toType !== "Last Date" ? e(d(b.to).getTime()) + t * n / 2 : null, v = x - f), (y === "Bar" || h.visualizationType === "Combo") && h.xAxis.type === "categorical" && (f = e(b.from), x = e(b.to), v = x - f), b.fromType === "Previous Days") {
        x = b.toType !== "Last Date" ? e(d(b.to).getTime()) + t * n / 2 : null;
        let T = e.domain(), N = Fs((V) => V).left, w, C = Number(b.from), _ = b.toType === "Last Date" ? T[T.length - 1] : b.to, k = new Date(_);
        f = new Date(k.setDate(k.getDate() - C)).getTime();
        let O = f, K = N(T, O);
        if (K === 0)
          w = T[0];
        else if (K === T.length)
          w = T[T.length - 1];
        else {
          let V = T[K - 1], F = T[K];
          w = O - V > F - O ? F : V;
        }
        f = Number(e(w) - (y === "Bar" || y === "Combo" ? t * n / 2 : 0)), v = x - f;
      }
      if (b.toType === "Last Date") {
        let T = e.domain(), N = T[T.length - 1];
        x = Number(e(N) + (y === "Bar" || y === "Combo" ? t * n / 2 : 0)), v = x - f;
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
      ), A = () => /* @__PURE__ */ r.createElement("rect", { x: f, y: 0, width: v, height: a, fill: b.background, opacity: 0.3 });
      return /* @__PURE__ */ r.createElement(
        be,
        {
          className: "regions regions-group--line",
          left: h.visualizationType === "Bar" || h.visualizationType === "Combo" ? 0 : (h == null ? void 0 : h.visualizationType) === "Line" ? Number(m.yAxis.size) : 0,
          key: b.label,
          onMouseMove: o,
          onMouseLeave: i,
          handleTooltipClick: l,
          tooltipData: JSON.stringify(s),
          showTooltip: c
        },
        /* @__PURE__ */ r.createElement(S, null),
        /* @__PURE__ */ r.createElement(A, null),
        /* @__PURE__ */ r.createElement(Fe, { x: f + v / 2, y: 5, fill: b.color, verticalAnchor: "start", textAnchor: "middle" }, b.label)
      );
    });
}, Qy = () => {
  var T;
  const [e, t] = $.useState(0), { xScale: n, yScale: a, xMax: i, yMax: o } = $.useContext(ba), { transformedData: l, colorScale: s, seriesHighlight: c, config: u, formatNumber: d, formatDate: h, parseDate: m, setSharedFilter: p } = $.useContext(Me), { isHorizontal: y, barBorderWidth: E, applyRadius: g, hoveredBar: f, getAdditionalColumn: x, onMouseLeaveBar: v, onMouseOverBar: b } = va(), { orientation: S } = u, A = u.brush.active && ((T = u.brush.data) != null && T.length) ? u.brush.data : l;
  return u.visualizationSubType === "stacked" && !y && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(yp, { data: A, keys: u.runtime.barSeriesKeys || u.runtime.seriesKeys, x: (N) => N[u.runtime.xAxis.dataKey], xScale: n, yScale: a, color: s }, (N) => N.reverse().map(
    (w) => w.bars.map((C) => {
      let _ = u.legend.behavior === "highlight" && c.length > 0 && c.indexOf(C.key) === -1, k = u.legend.behavior === "highlight" || c.length === 0 || c.indexOf(C.key) !== -1, O = u.xAxis.type === "date" && u.xAxis.sortDates ? u.barThickness * (n.range()[1] - n.range()[0]) : i / w.bars.length, K = O * (u.xAxis.type === "date" && u.xAxis.sortDates ? 1 : u.barThickness || 0.8);
      O * (1 - (u.barThickness || 0.8)) / 2;
      const V = C.bar.data[u.runtime.xAxis.dataKey], F = u.runtime.xAxis.type === "date" ? h(m(V)) : V, H = d(C.bar ? C.bar.data[C.key] : 0, "left");
      if (!H)
        return;
      const Y = n(u.runtime.xAxis.type === "date" ? m(V) : V) - (u.xAxis.type === "date" && u.xAxis.sortDates ? K / 2 : 0), z = g(w.index), q = u.runtime.xAxis.label ? `${u.runtime.xAxis.label}: ${F}` : F, B = x(f), j = `${u.runtime.seriesLabels[C.key]}: ${H}`, U = `<ul>
                  <li class="tooltip-heading"">${q}</li>
                  <li class="tooltip-body ">${j}</li>
                  <li class="tooltip-body ">${B}</li>
                    </li></ul>`;
      return t(K), /* @__PURE__ */ r.createElement(be, { key: `${w.index}--${C.index}--${S}` }, /* @__PURE__ */ r.createElement("style", null, `
                           #barStack${w.index}-${C.index} rect,
                           #barStack${w.index}-${C.index} foreignObject div{
                            animation-delay: ${w.index * 0.5}s;
                            transform-origin: ${K / 2}px ${C.y + C.height}px
                          }
                        `), /* @__PURE__ */ r.createElement(be, { key: `bar-stack-${w.index}-${C.index}`, id: `barStack${w.index}-${C.index}`, className: "stack vertical" }, /* @__PURE__ */ r.createElement(Fe, { display: u.labels && k ? "block" : "none", opacity: _ ? 0.5 : 1, x: Y, y: C.y - 5, fill: "#000", textAnchor: "middle" }, H), /* @__PURE__ */ r.createElement(
        "foreignObject",
        {
          onMouseOver: () => b(F, C.key),
          onMouseLeave: v,
          key: `bar-stack-${w.index}-${C.index}`,
          x: Y,
          y: C.y,
          width: K,
          height: C.height,
          display: k ? "block" : "none",
          "data-tooltip-html": U,
          "data-tooltip-id": `cdc-open-viz-tooltip-${u.runtime.uniqueId}`,
          onClick: (X) => {
            X.preventDefault(), p && (C[u.xAxis.dataKey] = F, p(u.uid, C));
          }
        },
        /* @__PURE__ */ r.createElement(
          "div",
          {
            style: {
              transition: "all 0.2s linear",
              opacity: _ ? 0.2 : 1,
              width: K,
              height: C.height,
              background: s(u.runtime.seriesLabels[C.key]),
              border: `${u.barHasBorder === "true" ? E : 0}px solid #333`,
              ...z
            }
          }
        )
      )));
    })
  )), /* @__PURE__ */ r.createElement(bo, { xScale: n, yMax: o, barWidth: e, totalBarsInGroup: 1 }));
}, Zy = () => {
  const { yMax: e, yScale: t, xScale: n } = $.useContext(ba), {
    animatedChart: a,
    colorScale: i,
    config: o,
    formatDate: l,
    formatNumber: s,
    getTextWidth: c,
    parseDate: u,
    seriesHighlight: d,
    setSharedFilter: h,
    transformedData: m
  } = $.useContext(Me), {
    applyRadius: p,
    barBorderWidth: y,
    displayNumbersOnBar: E,
    fontSize: g,
    getAdditionalColumn: f,
    hoveredBar: x,
    isHorizontal: v,
    isLabelBelowBar: b,
    onMouseLeaveBar: S,
    onMouseOverBar: A,
    updateBars: T
  } = va(), { orientation: N, visualizationSubType: w } = o;
  return o.visualizationSubType === "stacked" && v && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(vp, { data: m, keys: o.runtime.barSeriesKeys || o.runtime.seriesKeys, height: e, y: (C) => C[o.runtime.yAxis.dataKey], xScale: n, yScale: t, color: i, offset: "none" }, (C) => C.map(
    (_) => T(_.bars).map((k, O) => {
      let K = o.legend.behavior === "highlight" && d.length > 0 && d.indexOf(k.key) === -1, V = o.legend.behavior === "highlight" || d.length === 0 || d.indexOf(k.key) !== -1;
      o.barHeight = Number(o.barHeight);
      let F = "#000000";
      const H = s(m[k.index][k.key], "left"), Y = o.runtime.yAxis.type === "date" ? l(u(m[k.index][o.runtime.originalXAxis.dataKey])) : m[k.index][o.runtime.originalXAxis.dataKey], z = p(_.index);
      let q = o.runtime.yAxis.label ? `${o.runtime.yAxis.label}: ${Y}` : Y, B = c(H, `normal ${g[o.fontSize]}px sans-serif`);
      const j = f(x), U = `${o.runtime.seriesLabels[k.key]}: ${H}`, X = `<ul>
                  <li class="tooltip-heading"">${q}</li>
                  <li class="tooltip-body ">${U}</li>
                  <li class="tooltip-body ">${j}</li>
                    </li></ul>`;
      return Ft.contrast(F, i(o.runtime.seriesLabels[k.key])) < 4.9 && (F = "#FFFFFF"), /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `
                         #barStack${_.index}-${k.index} rect,
                         #barStack${_.index}-${k.index} foreignObject div{
                          animation-delay: ${_.index * 0.5}s;
                          transform-origin: ${k.x}px
                        }
                      `), /* @__PURE__ */ r.createElement(be, { key: O, id: `barStack${_.index}-${k.index}`, className: "stack horizontal" }, /* @__PURE__ */ r.createElement(
        "foreignObject",
        {
          onMouseOver: () => A(Y, k.key),
          onMouseLeave: S,
          key: `barstack-horizontal-${_.index}-${k.index}-${O}`,
          className: `animated-chart group ${a ? "animated" : ""}`,
          x: k.x,
          y: k.y,
          style: { transition: "all 0.2s linear" },
          width: k.width,
          height: k.height,
          opacity: K ? 0.2 : 1,
          display: V ? "block" : "none",
          "data-tooltip-html": X,
          "data-tooltip-id": `cdc-open-viz-tooltip-${o.runtime.uniqueId}`,
          onClick: (ne) => {
            ne.preventDefault(), h && (k[o.xAxis.dataKey] = H, h(o.uid, k));
          }
        },
        /* @__PURE__ */ r.createElement("div", { style: { width: k.width, height: k.height, background: i(o.runtime.seriesLabels[k.key]), border: `${o.barHasBorder === "true" ? y : 0}px solid #333`, ...z } })
      ), N === "horizontal" && w === "stacked" && b && _.index === 0 && !o.yAxis.hideLabel && /* @__PURE__ */ r.createElement(
        Fe,
        {
          x: `${k.x + (o.isLollipopChart ? 15 : 5)}`,
          y: k.y + k.height * 1.2,
          fill: "#000000",
          textAnchor: "start",
          verticalAnchor: "start"
        },
        Y
      ), E && B < k.width && /* @__PURE__ */ r.createElement(
        Fe,
        {
          display: V ? "block" : "none",
          x: k.x + _.bars[k.index].width / 2,
          y: k.y + k.height / 2,
          fill: F,
          textAnchor: "middle",
          verticalAnchor: "middle"
        },
        H
      )));
    })
  )));
}, Gy = () => {
  var q;
  const { xScale: e, yScale: t, xMax: n, yMax: a, seriesScale: i } = $.useContext(ba), [o, l] = $.useState(0), [s, c] = $.useState(0), {
    applyRadius: u,
    assignColorsToValues: d,
    barBorderWidth: h,
    generateIconSize: m,
    getAdditionalColumn: p,
    getHighlightedBarByValue: y,
    getHighlightedBarColorByValue: E,
    lollipopBarWidth: g,
    lollipopShapeSize: f,
    onMouseLeaveBar: x,
    onMouseOverBar: v,
    section: b
  } = va(), {
    colorScale: S,
    config: A,
    dashboardConfig: T,
    formatDate: N,
    formatNumber: w,
    getXAxisData: C,
    getYAxisData: _,
    isNumber: k,
    parseDate: O,
    seriesHighlight: K,
    setSharedFilter: V,
    transformedData: F
  } = $.useContext(Me), { HighLightedBarUtils: H } = Or(A), Y = A.brush.active && ((q = A.brush.data) != null && q.length) ? A.brush.data : F, z = (B, j) => {
    var ne;
    let U = null;
    const X = m(j);
    return (ne = A.suppressedData) == null || ne.forEach((ce) => {
      B.key === ce.column && String(B.value) === String(ce.value) && ce.icon && (U = /* @__PURE__ */ r.createElement(go, { color: "#000", size: X }));
    }), U;
  };
  return A.visualizationSubType !== "stacked" && (A.visualizationType === "Bar" || A.visualizationType === "Combo") && A.orientation === "vertical" && /* @__PURE__ */ r.createElement(be, null, /* @__PURE__ */ r.createElement(
    Kc,
    {
      data: Y,
      keys: A.runtime.barSeriesKeys || A.runtime.seriesKeys,
      height: a,
      x0: (B) => {
        const j = B[A.runtime.originalXAxis.dataKey];
        return A.runtime.xAxis.type === "date" ? O(j) : j;
      },
      x0Scale: e,
      x1Scale: i,
      yScale: t,
      color: () => ""
    },
    (B) => B.map((j, U) => /* @__PURE__ */ r.createElement(be, { className: `bar-group-${j.index}-${j.x0}--${U} ${A.orientation}`, key: `bar-group-${j.index}-${j.x0}--${U}`, id: `bar-group-${j.index}-${j.x0}--${U}`, left: j.x0 }, j.bars.map((X, ne) => {
      const ce = A.useLogScale ? 0.1 : 0, we = 20;
      let Ce = A.highlightedBarValues.map(($e) => $e.value).filter(($e) => $e !== void 0);
      Ce = A.xAxis.type === "date" ? H.formatDates(Ce) : Ce;
      let G = A.legend.behavior === "highlight" && K.length > 0 && K.indexOf(X.key) === -1, W = A.legend.behavior === "highlight" || K.length === 0 || K.indexOf(X.key) !== -1, ae = Math.abs(t(X.value) - t(ce)), D = X.value >= 0 && k(X.value) ? X.y : t(0);
      const ue = X.value >= 0 && k(X.value) ? t(ce) - we : t(0), oe = A.suppressedData.some(($e) => X.key === $e.column && String(X.value) === String($e.value)) ? ue : D;
      let ye = i.range()[1], he = A.isLollipopChart ? g : ye / j.bars.length, Ee = X.x + (A.isLollipopChart ? (ye / j.bars.length - g) / 2 : 0) - (A.xAxis.type === "date" && A.xAxis.sortDates ? ye / 2 : 0);
      l(he), c(j.bars.length);
      let Ne = w(X.value, "left"), ke = A.runtime[b].type === "date" ? N(O(Y[j.index][A.runtime.originalXAxis.dataKey])) : Y[j.index][A.runtime.originalXAxis.dataKey];
      const Se = X.value < 0 ? -1 : ne, xe = u(Se), re = p(X.key, Y[j.index][A.runtime.originalXAxis.dataKey]);
      let J = A.runtime.xAxis.label ? `${A.runtime.xAxis.label}: ${ke}` : ke;
      const He = `${A.runtime.seriesLabels[X.key]}: ${Ne}`, fe = `<ul>
                  <li class="tooltip-heading">${J}</li>
                  <li class="tooltip-body ">${He}</li>
                  ${re ? '<li class="tooltip-body ">' + re + "</li>" : ""}
                    </li></ul>`;
      let Le = "#000000";
      Le = H.checkFontColor(Ne, Ce, Le);
      let Oe = A.runtime.seriesLabels && A.runtime.seriesLabels[X.key] ? S(A.runtime.seriesLabels[X.key]) : S(X.key);
      Oe = d(B.length, j.index, Oe);
      const je = A.isLollipopChart && A.lollipopColorStyle === "regular", Ie = A.isLollipopChart && A.lollipopColorStyle === "two-tone", Ue = Ce == null ? void 0 : Ce.includes(ke), ct = E(ke), et = y(ke), te = Ue ? ct : A.barHasBorder === "true" ? "#000" : "transparent", ze = Ue ? et.borderWidth : A.isLollipopChart ? 0 : A.barHasBorder === "true" ? h : 0, Ve = A.suppressedData.some(($e) => X.key === $e.column && X.value === $e.value) ? "" : Ne;
      let Pt = A.suppressedData.some(($e) => X.key === $e.column && String(X.value) === String($e.value)) ? we : ae;
      const Nt = A.suppressedData.some(($e) => X.key === $e.column && X.value === $e.value) ? "none" : "block", kt = ($e, P) => {
        let ie = $e, pe = P || "#f2f2f2";
        if (T && T.dashboard.sharedFilters) {
          const { sharedFilters: se } = T.dashboard;
          return ie = se.map((Ae) => Ae.setBy === A.uid ? Ae.resetLabel === Ae.active || Ae.active === F[j.index][A.xAxis.dataKey] ? $e : pe : $e)[0], je && (ie = $e), Ie && (ie = Ft($e).brighten(1)), Ue && (ie = "transparent"), ie;
        }
        return Ie && (ie = Ft($e).brighten(1)), Ue && (ie = "transparent"), ie;
      }, Yt = () => he < 50 && he > 15 ? he / 2.5 : he < 15 && he > 5 ? he / 6 : he < 5 ? 0 : he / 2, tt = {
        position: "absolute",
        top: X.value >= 0 && k(X.value) ? -we : void 0,
        bottom: X.value >= 0 && k(X.value) ? void 0 : `-${we}px`,
        left: Yt()
      };
      A.isLollipopChart && (tt.left = 0, tt.transform = "translateX(0)");
      const vt = {
        background: kt(Oe),
        borderColor: te,
        borderStyle: "solid",
        borderWidth: `${ze}px`,
        width: he,
        height: Pt,
        ...xe,
        cursor: T ? "pointer" : "default"
      };
      return /* @__PURE__ */ r.createElement(be, { key: `${j.index}--${ne}` }, /* @__PURE__ */ r.createElement("style", null, `
                        .linear #barGroup${j.index} div,
                        .Combo #barGroup${j.index} div {
                          transform-origin: 0 ${oe + Pt}px;
                        }
                      `), /* @__PURE__ */ r.createElement(be, { key: `bar-sub-group-${j.index}-${j.x0}-${oe}--${ne}` }, /* @__PURE__ */ r.createElement(
        "foreignObject",
        {
          onMouseOver: () => v(ke, X.key),
          onMouseLeave: x,
          style: { overflow: "visible", transition: "all 0.2s linear" },
          id: `barGroup${j.index}`,
          key: `bar-group-bar-${j.index}-${X.index}-${X.value}-${X.key}`,
          x: Ee,
          y: oe,
          width: he,
          height: Pt,
          opacity: G ? 0.2 : 1,
          display: W ? "block" : "none",
          "data-tooltip-html": fe,
          "data-tooltip-id": `cdc-open-viz-tooltip-${A.runtime.uniqueId}`,
          onClick: ($e) => {
            $e.preventDefault(), V && (X[A.xAxis.dataKey] = ke, V(A.uid, X));
          }
        },
        /* @__PURE__ */ r.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ r.createElement("div", { style: tt }, z(X, he)), /* @__PURE__ */ r.createElement("div", { style: { ...vt } }))
      ), /* @__PURE__ */ r.createElement(
        Fe,
        {
          display: A.labels && W ? "block" : "none",
          opacity: G ? 0.5 : 1,
          x: Ee,
          y: oe - 5,
          fill: Le,
          textAnchor: "middle"
        },
        Ve
      ), A.isLollipopChart && A.lollipopShape === "circle" && /* @__PURE__ */ r.createElement(
        "circle",
        {
          display: Nt,
          cx: Ee + f / 3.5,
          cy: X.y,
          r: f / 2,
          fill: Oe,
          key: `circle--${X.index}`,
          "data-tooltip-html": fe,
          "data-tooltip-id": `cdc-open-viz-tooltip-${A.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), A.isLollipopChart && A.lollipopShape === "square" && /* @__PURE__ */ r.createElement(
        "rect",
        {
          display: Nt,
          x: Ee - g / 2,
          y: oe,
          width: f,
          height: f,
          fill: Oe,
          key: `circle--${X.index}`,
          "data-tooltip-html": fe,
          "data-tooltip-id": `cdc-open-viz-tooltip-${A.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ r.createElement("animate", { attributeName: "height", values: `0, ${f}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(A.confidenceKeys).length > 0 ? Y.map((B) => {
    let j, U, X, ne, ce = 5;
    return j = e(C(B)), X = t(_(B, A.confidenceKeys.lower)), ne = t(_(B, A.confidenceKeys.upper)), /* @__PURE__ */ r.createElement(
      "path",
      {
        key: `confidence-interval-v-${U}-${B[A.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${j - ce} ${X}
                    L${j + ce} ${X}
                    M${j} ${X}
                    L${j} ${ne}
                    M${j - ce} ${ne}
                    L${j + ce} ${ne}`
      }
    );
  }) : "", /* @__PURE__ */ r.createElement(bo, { xScale: e, yMax: a, barWidth: o, totalBarsInGroup: s }));
}, Jy = () => {
  const { xScale: e, yScale: t, yMax: n, seriesScale: a } = $.useContext(ba), { transformedData: i, colorScale: o, seriesHighlight: l, config: s, formatNumber: c, formatDate: u, parseDate: d, setSharedFilter: h, isNumber: m, getTextWidth: p, getYAxisData: y, getXAxisData: E } = $.useContext(Me), {
    isHorizontal: g,
    barBorderWidth: f,
    applyRadius: x,
    updateBars: v,
    assignColorsToValues: b,
    section: S,
    fontSize: A,
    isLabelBelowBar: T,
    displayNumbersOnBar: N,
    lollipopBarWidth: w,
    lollipopShapeSize: C,
    getHighlightedBarColorByValue: _,
    getHighlightedBarByValue: k,
    generateIconSize: O,
    getAdditionalColumn: K,
    hoveredBar: V,
    onMouseLeaveBar: F,
    onMouseOverBar: H
  } = va(), { HighLightedBarUtils: Y } = Or(s), z = (q, B) => {
    var X;
    let j = null;
    const U = O(B);
    return (X = s.suppressedData) == null || X.forEach((ne) => {
      q.key === ne.column && String(q.value) === String(ne.value) && ne.icon && (j = /* @__PURE__ */ r.createElement(go, { color: "#000", size: U }));
    }), j;
  };
  return s.visualizationSubType !== "stacked" && s.visualizationType === "Bar" && s.orientation === "horizontal" && /* @__PURE__ */ r.createElement(be, null, /* @__PURE__ */ r.createElement(
    Kc,
    {
      data: i,
      keys: s.runtime.barSeriesKeys || s.runtime.seriesKeys,
      height: n,
      x0: (q) => q[s.runtime.originalXAxis.dataKey],
      x0Scale: t,
      x1Scale: a,
      yScale: e,
      color: () => ""
    },
    (q) => v(q).map((B, j) => /* @__PURE__ */ r.createElement(be, { className: `bar-group-${B.index}-${B.x0}--${j} ${s.orientation}`, key: `bar-group-${B.index}-${B.x0}--${j}`, id: `bar-group-${B.index}-${B.x0}--${j}`, top: B.y }, B.bars.map((U, X) => {
      const ne = s.useLogScale ? 0.1 : 0;
      let ce = s.highlightedBarValues.map((ve) => ve.value).filter((ve) => ve !== void 0);
      ce = s.xAxis.type === "date" ? Y.formatDates(ce) : ce;
      let we = s.legend.behavior === "highlight" && l.length > 0 && l.indexOf(U.key) === -1, Ce = s.legend.behavior === "highlight" || l.length === 0 || l.indexOf(U.key) !== -1, G = s.barHeight, W = U.value >= 0 && m(U.value) ? U.y : t(ne);
      const ae = U.value < 0 ? Math.abs(e(U.value)) : e(ne), D = Math.abs(e(U.value) - e(ne)), ue = 25, oe = U.value >= 0 && m(U.value);
      let ye = U.value && s.suppressedData.some(({ column: ve, value: me }) => U.key === ve && U.value === me) ? ue : D;
      const he = oe ? e(0) : e(ne) - ue, Ee = s.suppressedData.some((ve) => U.key === ve.column && String(U.value) === String(ve.value)) ? he : ae, Ne = c(U.value, "left"), ke = s.runtime[S].type === "date" ? u(d(i[B.index][s.runtime.originalXAxis.dataKey])) : i[B.index][s.runtime.originalXAxis.dataKey], Se = oe ? "above" : "below", xe = s.suppressedData.some((ve) => U.key === ve.column && U.value === ve.value) ? "" : Ne;
      let J = p(ke, `normal ${A[s.fontSize]}px sans-serif`) < D - 5, He = J ? "end" : "start", fe = "start", Le = J ? -5 : 5, Oe = 10;
      Se === "below" && (He = J ? "start" : "end", Le = J ? 5 : -5, s.isLollipopChart && (fe = "end", Oe = -10));
      const je = U.value < 0 ? -1 : X, Ie = x(je);
      let Ue = s.runtime.yAxis.label ? `${s.runtime.yAxis.label}: ${ke}` : ke;
      const ct = K(V), et = `${s.runtime.seriesLabels[U.key]}: ${Ne}`, te = `<ul>
                  <li class="tooltip-heading"">${Ue}</li>
                  <li class="tooltip-body ">${et}</li>
                  <li class="tooltip-body ">${ct}</li>
                    </li></ul>`;
      let ze = "#000000";
      ze = Y.checkFontColor(Ne, ce, ze);
      let Ve = s.runtime.seriesLabels && s.runtime.seriesLabels[U.key] ? o(s.runtime.seriesLabels[U.key]) : o(U.key);
      Ve = b(q.length, B.index, Ve);
      const Pt = s.isLollipopChart && s.lollipopColorStyle === "regular", Nt = s.isLollipopChart && s.lollipopColorStyle === "two-tone", kt = ce == null ? void 0 : ce.includes(Ne), Yt = _(Ne), tt = k(Ne), vt = kt ? Yt : s.barHasBorder === "true" ? "#000" : "transparent", $e = kt ? tt.borderWidth : s.isLollipopChart ? 0 : s.barHasBorder === "true" ? f : 0, P = s.suppressedData.some((ve) => U.key === ve.column && U.value === ve.value) ? "none" : "block";
      Ve && ze && Ft.contrast(ze, Ve) < 4.9 && (ze = J ? "#FFFFFF" : "#000000");
      const pe = {
        position: "absolute",
        top: (() => Number(G) < 20 ? -4 : Number(G) < 25 ? -1 : Number(G) < 30 ? 2 : Number(G) < 35 ? 4 : Number(G) < 40 ? 5 : Number(G) < 50 ? 9 : Number(G) < 60 ? 10 : 12)(),
        left: ue * 1.2
      };
      s.isLollipopChart && (pe.top = -9);
      const Ae = {
        background: (() => Pt ? Ve : Nt ? Ft(Ve).brighten(1) : kt ? "transparent" : Ve)(),
        borderColor: vt,
        borderStyle: "solid",
        borderWidth: $e,
        width: ye,
        transition: "all 0.2s linear",
        height: s.isLollipopChart ? w : G,
        ...Ie
      };
      return /* @__PURE__ */ r.createElement(be, { key: `${B.index}--${X}` }, /* @__PURE__ */ r.createElement("style", null, `
                        .linear #barGroup${B.index} div,
                        .Combo #barGroup${B.index} div {
                          transform-origin: 0 ${W + G}px;
                        }
                      `), /* @__PURE__ */ r.createElement(be, { key: `bar-sub-group-${B.index}-${B.x0}-${W}--${X}` }, /* @__PURE__ */ r.createElement(
        "foreignObject",
        {
          onMouseOver: () => H(ke, U.key),
          onMouseLeave: F,
          id: `barGroup${B.index}`,
          key: `bar-group-bar-${B.index}-${U.index}-${U.value}-${U.key}`,
          x: Ee,
          style: { overflow: "visible", ...Ae },
          y: G * U.index,
          height: s.isLollipopChart ? w : G,
          width: ye,
          opacity: we ? 0.2 : 1,
          display: Ce ? "block" : "none",
          "data-tooltip-html": te,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          onClick: (ve) => {
            ve.preventDefault(), h && (U[s.xAxis.dataKey] = Ne, h(s.uid, U));
          }
        },
        /* @__PURE__ */ r.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ r.createElement("div", { style: pe }, z(U, ye)), /* @__PURE__ */ r.createElement("div", { style: { ...Ae } }))
      ), !s.isLollipopChart && N && /* @__PURE__ */ r.createElement(
        Fe,
        {
          display: Ce ? "block" : "none",
          x: U.y,
          y: s.barHeight / 2 + s.barHeight * U.index,
          fill: ze,
          dx: Le,
          verticalAnchor: "middle",
          textAnchor: He
        },
        xe
      ), s.isLollipopChart && N && /* @__PURE__ */ r.createElement(
        Fe,
        {
          display: Ce ? "block" : "none",
          x: U.y,
          y: 0,
          fill: "#000000",
          dx: Oe,
          textAnchor: fe,
          verticalAnchor: "middle",
          fontWeight: "normal"
        },
        xe
      ), T && !s.yAxis.hideLabel && /* @__PURE__ */ r.createElement(Fe, { x: s.yAxis.hideAxis ? 0 : 5, y: B.height, dy: 4, verticalAnchor: "start", textAnchor: "start" }, s.runtime.yAxis.type === "date" ? u(d(i[B.index][s.runtime.originalXAxis.dataKey])) : g ? i[B.index][s.runtime.originalXAxis.dataKey] : c(i[B.index][s.runtime.originalXAxis.dataKey])), s.isLollipopChart && s.lollipopShape === "circle" && /* @__PURE__ */ r.createElement(
        "circle",
        {
          display: P,
          cx: U.y,
          cy: 0 + w / 2,
          r: C / 2,
          fill: Ve,
          key: `circle--${U.index}`,
          "data-tooltip-html": te,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), s.isLollipopChart && s.lollipopShape === "square" && /* @__PURE__ */ r.createElement(
        "rect",
        {
          display: P,
          x: U.y > 10 ? U.y - C / 2 : 0,
          y: 0 - w / 2,
          width: C,
          height: C,
          fill: Ve,
          key: `circle--${U.index}`,
          "data-tooltip-html": te,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ r.createElement("animate", { attributeName: "height", values: `0, ${C}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(s.confidenceKeys).length > 0 ? i.map((q) => {
    let B, j, U, X = 5;
    return B = t(E(q)) - 0.75 * s.barHeight, j = e(y(q, s.confidenceKeys.upper)), U = e(y(q, s.confidenceKeys.lower)), /* @__PURE__ */ r.createElement(
      "path",
      {
        key: `confidence-interval-h-${B}-${q[s.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${U} ${B - X}
                    L${U} ${B + X}
                    M${U} ${B}
                    L${j} ${B}
                    M${j} ${B - X}
                    L${j} ${B + X} `
      }
    );
  }) : "");
}, Fa = {
  Vertical: Gy,
  Horizontal: Jy,
  StackedVertical: Qy,
  StackedHorizontal: Zy
}, eg = ({ xScale: e, yScale: t, seriesScale: n, xMax: a, yMax: i, handleTooltipMouseOver: o, handleTooltipMouseOff: l, handleTooltipClick: s }) => {
  const { transformedData: c, config: u } = $.useContext(Me), d = {
    xScale: e,
    yScale: t,
    xMax: a,
    yMax: i,
    seriesScale: n
  };
  return /* @__PURE__ */ r.createElement(Bt, { component: "BarChart" }, /* @__PURE__ */ r.createElement(ba.Provider, { value: d }, /* @__PURE__ */ r.createElement(be, { left: parseFloat(u.runtime.yAxis.size) }, /* @__PURE__ */ r.createElement(Fa.StackedVertical, null), /* @__PURE__ */ r.createElement(Fa.StackedHorizontal, null), /* @__PURE__ */ r.createElement(Fa.Vertical, null), /* @__PURE__ */ r.createElement(Fa.Horizontal, null), /* @__PURE__ */ r.createElement(_t, { key: "bars", display: u.tooltips.singleSeries ? "none" : "block", width: Number(a), height: Number(i), fill: "transparent", fillOpacity: 0.05, onMouseMove: (h) => o(h, c), onMouseOut: l, onClick: (h) => s(h, c) }))));
};
function nn() {
  return nn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, nn.apply(this, arguments);
}
function hn(e) {
  var t = e.x1, n = e.x2, a = e.y1, i = e.y2;
  return {
    x1: a,
    x2: i,
    y1: t,
    y2: n
  };
}
function bu(e) {
  var t = e.left, n = t === void 0 ? 0 : t, a = e.top, i = a === void 0 ? 0 : a, o = e.className, l = e.max, s = e.min, c = e.firstQuartile, u = e.thirdQuartile, d = e.median, h = e.boxWidth, m = h === void 0 ? 10 : h, p = e.fill, y = e.fillOpacity, E = e.stroke, g = e.strokeWidth, f = e.rx, x = f === void 0 ? 2 : f, v = e.ry, b = v === void 0 ? 2 : v, S = e.valueScale, A = e.outliers, T = A === void 0 ? [] : A, N = e.horizontal, w = e.medianProps, C = w === void 0 ? {} : w, _ = e.maxProps, k = _ === void 0 ? {} : _, O = e.minProps, K = O === void 0 ? {} : O, V = e.boxProps, F = V === void 0 ? {} : V, H = e.outlierProps, Y = H === void 0 ? {} : H, z = e.container, q = z === void 0 ? !1 : z, B = e.containerProps, j = B === void 0 ? {} : B, U = e.children, X = N ? i : n, ne = X + (m || 0) / 2, ce = S.range(), we = S(s ?? 0), Ce = S(c ?? 0), G = S(d ?? 0), W = S(u ?? 0), ae = S(l ?? 0), D = {
    valueRange: ce,
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
      y2: W
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
      y1: Ce,
      y2: we
    },
    min: {
      x1: ne - (m || 0) / 4,
      x2: ne + (m || 0) / 4,
      y1: we,
      y2: we
    },
    box: {
      x1: X,
      x2: m || 0,
      y1: W,
      y2: Math.abs(W - Ce)
    },
    container: {
      x1: X,
      x2: m || 0,
      y1: Math.min.apply(Math, ce),
      y2: Math.abs(ce[0] - ce[1])
    }
  };
  return N && (D.max = hn(D.max), D.maxToThird = hn(D.maxToThird), D.box.y1 = Ce, D.box = hn(D.box), D.median = hn(D.median), D.minToFirst = hn(D.minToFirst), D.min = hn(D.min), D.container = hn(D.container), D.container.y1 = Math.min.apply(Math, ce)), U ? /* @__PURE__ */ r.createElement(r.Fragment, null, U(D)) : /* @__PURE__ */ r.createElement(be, {
    className: rt("visx-boxplot", o)
  }, T.map(function(ue, oe) {
    var ye = N ? S(ue) : ne, he = N ? ne : S(ue);
    return /* @__PURE__ */ r.createElement("circle", nn({
      key: "visx-boxplot-outlier-" + oe,
      className: "visx-boxplot-outlier",
      cx: ye,
      cy: he,
      r: 4,
      stroke: E,
      strokeWidth: g,
      fill: p,
      fillOpacity: y
    }, Y));
  }), /* @__PURE__ */ r.createElement("line", nn({
    className: "visx-boxplot-max",
    x1: D.max.x1,
    y1: D.max.y1,
    x2: D.max.x2,
    y2: D.max.y2,
    stroke: E,
    strokeWidth: g
  }, k)), /* @__PURE__ */ r.createElement("line", {
    className: "visx-boxplot-max-to-third",
    x1: D.maxToThird.x1,
    y1: D.maxToThird.y1,
    x2: D.maxToThird.x2,
    y2: D.maxToThird.y2,
    stroke: E,
    strokeWidth: g
  }), /* @__PURE__ */ r.createElement("rect", nn({
    className: "visx-boxplot-box",
    x: D.box.x1,
    y: D.box.y1,
    width: D.box.x2,
    height: D.box.y2,
    stroke: E,
    strokeWidth: g,
    fill: p,
    fillOpacity: y,
    rx: x,
    ry: b
  }, F)), /* @__PURE__ */ r.createElement("line", nn({
    className: "visx-boxplot-median",
    x1: D.median.x1,
    y1: D.median.y1,
    x2: D.median.x2,
    y2: D.median.y2,
    stroke: E,
    strokeWidth: g
  }, C)), /* @__PURE__ */ r.createElement("line", {
    className: "visx-boxplot-min-to-first",
    x1: D.minToFirst.x1,
    y1: D.minToFirst.y1,
    x2: D.minToFirst.x2,
    y2: D.minToFirst.y2,
    stroke: E,
    strokeWidth: g
  }), /* @__PURE__ */ r.createElement("line", nn({
    className: "visx-boxplot-min",
    x1: D.min.x1,
    y1: D.min.y1,
    x2: D.min.x2,
    y2: D.min.y2,
    stroke: E,
    strokeWidth: g
  }, K)), q && /* @__PURE__ */ r.createElement("rect", nn({
    x: D.container.x1,
    y: D.container.y1,
    width: D.container.x2,
    height: D.container.y2,
    fillOpacity: "0"
  }, j)));
}
bu.propTypes = {
  max: R.number,
  min: R.number,
  firstQuartile: R.number,
  thirdQuartile: R.number,
  median: R.number,
  boxWidth: R.number,
  fill: R.string,
  fillOpacity: R.oneOfType([R.number, R.string]),
  stroke: R.string,
  strokeWidth: R.oneOfType([R.number, R.string]),
  rx: R.number,
  ry: R.number,
  outliers: R.arrayOf(R.number),
  container: R.bool,
  children: R.func
};
const tg = ({ xScale: e, yScale: t }) => {
  const { config: n, setConfig: a } = $.useContext(Me), { boxplot: i } = n;
  $.useEffect(() => {
    n.legend.hide === !1 && a({
      ...n,
      legend: {
        ...n.legend,
        hide: !0
      }
    });
  }, []);
  const o = `cdc-open-viz-tooltip-${n.runtime.uniqueId}`, l = (g) => `
      <strong>${g.columnCategory}</strong></br>
      ${i.labels.q1}: ${g.columnFirstQuartile}<br/>
      ${i.labels.q3}: ${g.columnThirdQuartile}<br/>
      ${i.labels.iqr}: ${g.columnIqr}<br/>
      ${i.labels.median}: ${g.columnMedian}
    `, s = (g) => Number(g.columnMax), c = (g) => Number(g.columnMin), u = (g) => Number(g.columnMedian), d = (g) => Number(g.columnThirdQuartile), h = (g) => Number(g.columnFirstQuartile), m = 0.5, p = e.bandwidth(), y = Math.min(40, p), E = Ct[n == null ? void 0 : n.palette][0] ? Ct[n == null ? void 0 : n.palette][0] : "#000";
  return /* @__PURE__ */ r.createElement(Bt, { component: "BoxPlot" }, /* @__PURE__ */ r.createElement(be, { className: "boxplot", key: "boxplot-group" }, i.plots.map((g, f) => {
    const x = p - y, v = 4;
    return /* @__PURE__ */ r.createElement(be, { key: `boxplotplot-${f}` }, i.plotNonOutlierValues && g.nonOutlierValues.map((b, S) => /* @__PURE__ */ r.createElement("circle", { cx: e(g.columnCategory) + Number(n.yAxis.size) + p / 2, cy: t(b), r: v, fill: "#ccc", style: { opacity: 1, fillOpacity: 1, stroke: "black" }, key: `boxplot-${f}--circle-${S}` })), /* @__PURE__ */ r.createElement(
      bu,
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
        fill: E,
        fillOpacity: m,
        stroke: "black",
        valueScale: t,
        outliers: i.plotOutlierValues ? g.columnOutliers : [],
        outlierProps: {
          style: {
            fill: `${E}`,
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
          "data-tooltip-html": l(g),
          "data-tooltip-id": o
        }
      }
    ));
  })));
}, ng = ({ xScale: e, yScale: t, getXAxisData: n, getYAxisData: a }) => {
  const { colorScale: i, transformedData: o, config: l, formatNumber: s, seriesHighlight: c, colorPalettes: u } = $.useContext(Me);
  let d = 4.5;
  const h = Object.keys(l.runtime.seriesLabels).length > 1, m = (p, y) => `<div>
    ${l.legend.showLegendValuesTooltip && l.runtime.seriesLabels && h ? `${l.runtime.seriesLabels[y] || ""}<br/>` : ""}
    ${l.xAxis.label}: ${s(p[l.xAxis.dataKey], "bottom")} <br/>
    ${l.yAxis.label}: ${s(p[y], "left")}
</div>`;
  return /* @__PURE__ */ r.createElement(be, { className: "scatter-plot", left: l.yAxis.size }, o.map((p, y) => l.runtime.seriesKeys.map((E, g) => {
    const f = l.legend.behavior === "highlight" && c.length > 0 && c.indexOf(E) === -1, x = l.legend.behavior === "highlight" || c.length === 0 || c.indexOf(E) !== -1, v = l.palette ? u[l.palette][g] : "#000";
    let b = {
      filter: "unset",
      opacity: 1,
      stroke: x ? "black" : ""
    };
    return /* @__PURE__ */ r.createElement(
      "circle",
      {
        key: `${y}-${g}`,
        r: d,
        cx: e(p[l.xAxis.dataKey]),
        cy: t(p[E]),
        fill: x ? v : "transparent",
        fillOpacity: f ? 0.25 : 1,
        style: b,
        "data-tooltip-html": m(p, E),
        "data-tooltip-id": `cdc-open-viz-tooltip-${l.runtime.uniqueId}`
      }
    );
  })));
};
function ag({ height: e, xScale: t }) {
  const { transformedData: n, config: a, formatNumber: i, twoColorPalette: o, getTextWidth: l, updateConfig: s, parseDate: c, formatDate: u, currentViewport: d } = $.useContext(Me), { barStyle: h, tipRounding: m, roundingStyle: p, twoColor: y } = a, E = $.useRef([]), [g, f] = $.useState(window.innerWidth), x = p === "standard" ? "8px" : p === "shallow" ? "5px" : p === "finger" ? "15px" : "0px", v = { small: 16, medium: 18, large: 20 };
  a.barStyle;
  const b = Number(a.xAxis.target), S = a.series[0].dataKey, A = Number(t.domain()[1]), N = n.some((z) => z[S] < 0) || b > 0 || t.domain()[0] < 0, w = a.barHasBorder === "true" ? 1 : 0, C = a.lollipopSize === "large" ? 7 : a.lollipopSize === "medium" ? 6 : 5, _ = a.lollipopSize === "large" ? 14 : a.lollipopSize === "medium" ? 12 : 10, k = Math.max(t(0), Math.min(t(b), t(A))), O = (z) => {
    if (z == null || h !== "rounded")
      return;
    let q = {};
    return z === "left" && (q = { borderRadius: `${x} 0 0 ${x}` }), z === "right" && (q = { borderRadius: `0 ${x} ${x} 0` }), m === "full" && (q = { borderRadius: x }), q;
  }, K = {
    calculate: function() {
      const q = n[0][S] < b ? "left" : "right", B = `${a.xAxis.targetLabel} ${i(a.xAxis.target || 0, "left")}`, j = l(B, `bold ${v[a.fontSize]}px sans-serif`);
      let U = a.isLollipopChart ? C / 2 : Number(a.barHeight) / 2, X = 0, ne = 0, ce = !1;
      q === "right" && (X = -10, ce = j - X < k, ne = k - j), q === "left" && (X = 10, ce = t(A) - k > j + X, ne = k), this.text = B, this.y = U, this.x = ne, this.padding = X, this.showLabel = a.xAxis.showTargetLabel ? ce : !1;
    }
  };
  K.calculate();
  const V = $.useRef(null), F = po(V, {});
  $.useEffect(() => {
    const z = () => {
      f(window.innerWidth), E.current.forEach((q) => {
        q.style.transition = "none", q.style.transform = "translate(0) scale(1)";
      });
    };
    return window.addEventListener("resize", z), () => {
      window.removeEventListener("resize", z);
    };
  }, []);
  const [H, Y] = $.useState(!1);
  return $.useEffect(() => {
    F != null && F.isIntersecting && setTimeout(() => {
      Y(!0);
    }, 100);
  }, [F == null ? void 0 : F.isIntersecting, a.animate]), $.useEffect(() => {
    E.current.forEach((z, q) => {
      if (a.animate) {
        const B = b / A * 100;
        z.style.opacity = "0", z.style.transform = `translate(${B / 1.07}%) scale(0, 1)`, setTimeout(() => {
          z.style.opacity = "1", z.style.transform = "translate(0) scale(1)", z.style.transition = "transform 0.5s ease";
        }, 100);
      } else
        z.style.transition = "none", z.style.opacity = "0";
      a.animate || (z.style.transition = "none", z.style.opacity = "1");
    });
  }, [a.animate, a, H]), /* @__PURE__ */ r.createElement(Bt, { component: "Deviation Bar" }, /* @__PURE__ */ r.createElement(be, { left: Number(a.xAxis.size) }, n.map((z, q) => {
    const B = Number(z[S]), j = a.isLollipopChart ? C : Number(a.barHeight), U = Number(a.barSpace), X = Math.abs(t(B) - k), ne = t(B), ce = B > b ? k : ne, we = B < b ? "left" : "right";
    let Ce = 0;
    Ce = q !== 0 ? (U + j + w) * q : Ce;
    const G = (U + j + w) * n.length;
    a.heights.horizontal = G;
    const ae = l(i(B, "left"), `normal ${v[a.fontSize]}px sans-serif`) < X - 6, D = ne, ue = Ce + j / 2, oe = ne, ye = Ce + j / 2, he = ne, Ee = Ce - j / 2, Ne = O(we), [ke, Se] = o[y.palette], xe = { left: ke, right: Se }, J = Ft.contrast("#000000", xe[we]) < 4.9 ? "#FFFFFF" : "#000000";
    let He = rg(a.isLollipopChart, ae, _, J);
    const fe = i(B, "left"), Le = a.runtime.yAxis.type === "date" ? u(c(n[q][a.runtime.originalXAxis.dataKey])) : n[q][a.runtime.originalXAxis.dataKey];
    let Oe = a.runtime.yAxis.label ? `${a.runtime.yAxis.label}: ${Le}` : Le, je = a.runtime.xAxis.label ? `${a.runtime.xAxis.label}: ${fe}` : fe;
    const Ie = `<div>
          ${Oe}<br />
          ${je}
            </div>`;
    return /* @__PURE__ */ r.createElement(be, { key: `deviation-bar-${a.orientation}-${S}-${q}` }, /* @__PURE__ */ r.createElement(
      "foreignObject",
      {
        ref: (Ue) => {
          E.current[q] = Ue;
        },
        x: ce,
        y: Ce,
        width: X,
        height: j,
        "data-tooltip-html": Ie,
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`
      },
      /* @__PURE__ */ r.createElement("div", { style: { width: X, height: j, border: `${w}px solid #333`, backgroundColor: xe[we], ...Ne } })
    ), a.yAxis.displayNumbersOnBar && /* @__PURE__ */ r.createElement(Fe, { verticalAnchor: "middle", x: D, y: ue, ...He[we] }, i(z[S], "left")), a.isLollipopChart && a.lollipopShape === "circle" && /* @__PURE__ */ r.createElement("circle", { cx: oe, cy: ye, r: _ / 2, fill: xe[we], style: { filter: "unset", opacity: 1 } }), a.isLollipopChart && a.lollipopShape === "square" && /* @__PURE__ */ r.createElement("rect", { x: he, y: Ee, width: _, height: _, fill: xe[we], style: { opacity: 1, filter: "unset" } }));
  }), K.showLabel && /* @__PURE__ */ r.createElement(Fe, { fontWeight: "bold", dx: K.padding, verticalAnchor: "middle", x: K.x, y: K.y }, K.text), N && /* @__PURE__ */ r.createElement(qe, { from: { x: k, y: 0 }, to: { x: k, y: e }, stroke: "#333", strokeWidth: 2 })), /* @__PURE__ */ r.createElement("foreignObject", { y: e / 2, ref: V }));
}
function rg(e, t, n, a) {
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
const ig = ({ xScale: e, yScale: t, height: n, width: a, handleTooltipMouseOver: i, handleTooltipMouseOff: o }) => {
  var y;
  const { transformedData: l, rawData: s, config: c, seriesHighlight: u } = $.useContext(Me), { xAxis: d, yAxis: h, legend: m, runtime: p } = c;
  return l && /* @__PURE__ */ r.createElement(Bt, { component: "ForecastingChart" }, /* @__PURE__ */ r.createElement(be, { className: "forecasting-items", key: "forecasting-items-wrapper", left: Number(h.size) }, (y = p.forecastingSeriesKeys) == null ? void 0 : y.map((E, g) => !E || !E.stages ? !1 : E.stages.map((f, x) => {
    var T;
    const { behavior: v } = m, b = s.filter((N) => N[E.stageColumn] === f.key);
    let S = v === "highlight" && u.length > 0 && u.indexOf(f.key) === -1, A = v === "highlight" || u.length === 0 || u.indexOf(f.key) !== -1;
    return /* @__PURE__ */ r.createElement(be, { className: `forecasting-areas-combo-${g}`, key: `forecasting-areas--stage-${f.key.replaceAll(" ", "-")}-${g}` }, (T = E.confidenceIntervals) == null ? void 0 : T.map((N, w) => {
      const C = Ya[f.color] || Ct[f.color] || !1, _ = () => A && C[2] ? C[2] : "transparent", k = () => A && C[1] ? C[1] : "transparent";
      if (!(N.high === "" || N.low === ""))
        return /* @__PURE__ */ r.createElement(be, { key: `forecasting-areas--stage-${f.key.replaceAll(" ", "-")}--group-${x}-${w}` }, /* @__PURE__ */ r.createElement(
          np,
          {
            curve: Ka,
            data: b,
            fill: _(),
            opacity: S ? 0.1 : 0.5,
            x: (O) => e(Date.parse(O[d.dataKey])),
            y0: (O) => t(O[N.low]),
            y1: (O) => t(O[N.high])
          }
        ), w === 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Zt, { data: b, x: (O) => Number(e(Date.parse(O[d.dataKey]))), y: (O) => Number(t(O[N.high])), curve: Ka, stroke: k(), strokeWidth: 1, strokeOpacity: 1 }), /* @__PURE__ */ r.createElement(Zt, { data: b, x: (O) => Number(e(Date.parse(O[d.dataKey]))), y: (O) => Number(t(O[N.low])), curve: Ka, stroke: k(), strokeWidth: 1, strokeOpacity: 1 })));
    }));
  })), /* @__PURE__ */ r.createElement(be, { key: "tooltip-hover-section" }, /* @__PURE__ */ r.createElement(_t, { key: "bars", width: Number(a), height: Number(n), fill: "transparent", fillOpacity: 0.05, onMouseMove: (E) => i(E, l), onMouseOut: o }))));
};
function ja(e = "") {
  return typeof e == "number" ? !Number.isNaN(e) : typeof e == "string" ? e !== null && e !== "" && /\d+\.?\d*/.test(e) : !1;
}
function $r(e, t) {
  const n = e.series.every(({ type: m }) => m === "Bar"), a = e.series.every(({ type: m }) => ["Line", "dashed-sm", "dashed-md", "dashed-lg"].includes(m)), i = (m) => (p) => m.reduce((y, E) => isNaN(Number(p[E])) ? y : y + Number(p[E]), 0), o = () => {
    let m = Math.max(...t.map((p) => Math.max(...e.runtime.seriesKeys.map((y) => ja(p[y]) ? Number(c(p[y])) : 0))));
    if ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && n) && e.visualizationSubType === "stacked") {
      const p = t.map(i(e.runtime.seriesKeys)).filter((y) => !isNaN(y));
      m = Math.max(...p);
    }
    if (e.visualizationSubType === "stacked" && e.visualizationType === "Area Chart") {
      const p = t.map(i(e.runtime.seriesKeys));
      m = Math.max(...p);
    }
    if ((e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.series && e.series.dataKey && (m = Math.max(...t.map((p) => ja(p[e.series.dataKey]) ? Number(c(p[e.series.dataKey])) : 0))), e.visualizationType === "Combo" && e.visualizationSubType === "stacked" && !n && e.runtime.barSeriesKeys && e.runtime.lineSeriesKeys) {
      const p = t.map(i(e.runtime.barSeriesKeys)), y = Math.max(...t.map((g) => Math.max(...e.runtime.lineSeriesKeys.map((f) => Number(c(g[f])))))), E = Math.max(...p);
      m = Math.max(E, y);
    }
    return m;
  }, l = () => {
    const m = Math.min(...t.map((p) => Math.min(...e.runtime.seriesKeys.map((y) => ja(p[y]) ? Number(c(p[y])) : 1 / 0))));
    return String(m);
  }, s = () => e.runtime.seriesKeys ? e.runtime.seriesKeys.some((m) => t.some((p) => p[m] >= 0)) : !1, c = (m) => m === null || m === "" ? "" : typeof m == "string" ? m.replace(/[,$]/g, "") : m, u = Number(o()), d = Number(l()), h = s();
  return { minValue: d, maxValue: u, existPositiveValue: h, isAllLine: a };
}
function Eo({ config: e, yMax: t = 0, data: n = [], updateConfig: a }) {
  var m, p, y, E;
  const i = e.visualizationType === "Combo" && e.orientation === "vertical", o = e.series && e.series.filter((g) => g.axis === "Right").map((g) => g.dataKey);
  let { minValue: l } = $r(e, n);
  const s = (g) => {
    if (!g)
      return [0];
    let f = [];
    return g.map((x, v) => f = [...f, ...n.map((b) => Number(b[x]))]), f;
  };
  let c = Math.max.apply(null, s(o));
  e.yAxis.rightMax > c && (c = e.yAxis.rightMax), e.yAxis.rightMin < l && (l = e.yAxis.rightMin);
  const u = ((p = (m = e.runtime) == null ? void 0 : m.barSeriesKeys) == null ? void 0 : p.length) > 0, d = ((E = (y = e.runtime) == null ? void 0 : y.lineSeriesKeys) == null ? void 0 : E.length) > 0;
  return (u || d) && l > 0 && (l = 0), { yScaleRight: pt({
    domain: [l, c],
    range: [t, 0]
  }), hasRightAxis: i };
}
const og = (e) => {
  const { preliminaryData: t, rawData: n, stroke: a, handleLineType: i, lineType: o, seriesKey: l } = e, s = t.filter((h) => h.seriesKey && h.column && h.value && h.type && h.style), c = (h) => s.find((m) => m.seriesKey === l && h[m.column] === m.value && m.type === "effect" && m.style !== "Open Circles");
  let u = [];
  const d = (h) => ({
    stroke: a,
    strokeWidth: 2,
    strokeDasharray: h
  });
  return n.forEach((h, m) => {
    let p = c(h), y = d(i(p ? p.style : o));
    u.push(y), p && m > 0 && (u[m - 1] = d(i(p.style)));
  }), u;
}, lg = (e, t, n) => {
  const a = e.filter((o) => o.style === "Open Circles" && o.type === "effect").map((o) => ({ column: o.column, value: o.value, seriesKey: o.seriesKey }));
  let i = [];
  return t.forEach((o) => {
    a.some((l) => o[l.column] === l.value && l.seriesKey === n) && i.push(o);
  }), i;
}, ai = (e) => {
  var x, v, b, S, A, T;
  const { config: t, d: n, displayArea: a, seriesKey: i, tooltipData: o, xScale: l, yScale: s, colorScale: c, parseDate: u, yScaleRight: d, data: h, circleData: m, dataIndex: p, mode: y } = e, { lineDatapointStyle: E } = t, g = (x = t == null ? void 0 : t.series.filter((N) => N.dataKey === i)) == null ? void 0 : x[0], f = (N, w, C, _, k) => {
    const O = C.runtime.seriesLabels || [];
    let K;
    return N ? K = w(O[_] || k) : K = "transparent", C.lineDatapointColor === "Lighter than Line" && K !== "transparent" && K && (K = Ft(K).brighten(1)), K;
  };
  if (y === "ALWAYS_SHOW_POINTS") {
    if (E === "hidden")
      return /* @__PURE__ */ r.createElement(r.Fragment, null);
    if (E === "always show")
      return (m == null ? void 0 : m.some((w) => w[t.xAxis.dataKey] === n[t.xAxis.dataKey] && w[i] === n[i])) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement(
        "circle",
        {
          cx: t.xAxis.type === "categorical" ? l(n[t.xAxis.dataKey]) : l(u(n[t.xAxis.dataKey])),
          cy: g.axis === "Right" ? d(n[g.dataKey]) : s(n[g.dataKey]),
          r: 4.5,
          opacity: n[i] ? 1 : 0,
          fillOpacity: 1,
          fill: f(a, c, t, i, i),
          style: { filter: "unset", opacity: 1 }
        }
      );
  }
  if (y === "HOVER_POINTS" && E === "hover") {
    if (!o || !i || !o.data)
      return;
    let N = (b = (v = o == null ? void 0 : o.data) == null ? void 0 : v[0]) == null ? void 0 : b[1];
    if (!N)
      return;
    let w, C = o.data.filter((O) => O[0] === i), _ = (S = C == null ? void 0 : C[0]) == null ? void 0 : S[0], k = (A = C == null ? void 0 : C[0]) == null ? void 0 : A[2];
    return _ ? (o == null || o.data.indexOf(_), w = (T = h == null ? void 0 : h.find((O) => O[t == null ? void 0 : t.xAxis.dataKey] === N)) == null ? void 0 : T[i], o == null ? void 0 : o.data.map((O, K) => (t.runtime.seriesLabelsAll.indexOf(N), isNaN(w) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : (m == null ? void 0 : m.some((F) => F[t.xAxis.dataKey] === N)) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement(
      "circle",
      {
        cx: t.xAxis.type === "categorical" ? l(N) : l(u(N)),
        cy: k === "right" ? d(w) : s(w),
        r: 4.5,
        opacity: 1,
        fillOpacity: 1,
        fill: f(a, c, t, _, i),
        style: { filter: "unset", opacity: 1 },
        key: `line-chart-circle--${JSON.stringify(O)}--${K}`
      }
    )))) : void 0;
  }
  return y === "ISOLATED_POINTS" && y && ((w, C) => {
    const _ = h[w], k = h[w - 1], O = h[w + 1];
    if (w === 0 && O[C] === "" || w === h.length - 1 && k[C] === "" || w !== 0 && _[C] !== "" && k[C] === "" && O[C] === "")
      return !0;
  })(p, i) ? /* @__PURE__ */ r.createElement(
    "circle",
    {
      cx: t.xAxis.type === "categorical" ? l(n[t.xAxis.dataKey]) : l(u(n[t.xAxis.dataKey])),
      cy: g.axis === "Right" ? d(n[g.dataKey]) : s(n[g.dataKey]),
      r: 6,
      strokeWidth: 2,
      stroke: c(t.runtime.seriesLabels[i]),
      fill: c(t.runtime.seriesLabels[i])
    }
  ) : null;
}, ys = (e) => {
  const {
    getXAxisData: t,
    getYAxisData: n,
    handleTooltipClick: a,
    handleTooltipMouseOff: i,
    handleTooltipMouseOver: o,
    tooltipData: l,
    xMax: s,
    xScale: c,
    yMax: u,
    yScale: d
  } = e, {
    colorScale: h,
    config: m,
    formatNumber: p,
    handleLineType: y,
    isNumber: E,
    parseDate: g,
    seriesHighlight: f,
    tableData: x,
    transformedData: v,
    updateConfig: b,
    rawData: S
  } = $.useContext(Me), { yScaleRight: A } = Eo({ config: m, yMax: u, data: v, updateConfig: b });
  if (!o)
    return;
  const { lineDatapointStyle: T, showLineSeriesLabels: N, legend: w } = m;
  return /* @__PURE__ */ r.createElement(Bt, { component: "LineChart" }, /* @__PURE__ */ r.createElement(be, { left: m.runtime.yAxis.size ? parseInt(m.runtime.yAxis.size) : 66 }, " ", (m.runtime.lineSeriesKeys || m.runtime.seriesKeys).map((C, _) => {
    let k = m.series.filter((z) => z.dataKey === C)[0].type;
    const O = m.series.filter((z) => z.dataKey === C), K = O[0].axis ? O[0].axis : "left";
    let V = w.behavior === "highlight" || f.length === 0 || f.indexOf(C) !== -1;
    const F = lg(m.preliminaryData, S, C);
    let H = og({ preliminaryData: m.preliminaryData, rawData: S, stroke: h(m.runtime.seriesLabels[C]), handleLineType: y, lineType: k, seriesKey: C }), Y = (z) => c(t(z)) + (c.bandwidth ? c.bandwidth() / 2 : 0);
    return /* @__PURE__ */ r.createElement(
      be,
      {
        key: `series-${C}`,
        opacity: w.behavior === "highlight" && f.length > 0 && f.indexOf(C) === -1 ? 0.5 : 1,
        display: w.behavior === "highlight" || f.length === 0 && !w.dynamicLegend || f.indexOf(C) !== -1 ? "block" : "none"
      },
      v.map((z, q) => {
        const B = m.series.find(({ dataKey: ce }) => ce === C), { axis: j } = B, U = Object.keys(m.runtime.seriesLabels).length > 1, X = j === "Right" ? "rightLabel" : "label";
        let ne = m.runtime.yAxis[X];
        return U || (ne = m.isLegendValue ? m.runtime.seriesLabels[C] : ne), z[C] !== void 0 && z[C] !== "" && z[C] !== null && E(z[C]) && /* @__PURE__ */ r.createElement(be, { key: `series-${C}-point-${q}`, className: "checkwidth" }, /* @__PURE__ */ r.createElement(_t, { key: "bars", width: Number(s), height: Number(u), fill: "transparent", fillOpacity: 0.05, onMouseMove: (ce) => o(ce, x), onMouseOut: i, onClick: (ce) => a(ce, v) }), /* @__PURE__ */ r.createElement(Fe, { display: m.labels ? "block" : "none", x: Y(z), y: K === "Right" ? A(n(z, C)) : d(n(z, C)), fill: "#000", textAnchor: "middle" }, p(z[C], "left")), (T === "hidden" || T === "always show") && /* @__PURE__ */ r.createElement(
          ai,
          {
            mode: "ALWAYS_SHOW_POINTS",
            dataIndex: q,
            circleData: F,
            data: v,
            d: z,
            config: m,
            seriesKey: C,
            displayArea: V,
            tooltipData: l,
            xScale: c,
            yScale: d,
            colorScale: h,
            parseDate: g,
            yScaleRight: A,
            seriesAxis: K,
            key: `line-circle--${q}`
          }
        ), /* @__PURE__ */ r.createElement(
          ai,
          {
            mode: "ISOLATED_POINTS",
            dataIndex: q,
            circleData: F,
            data: v,
            d: z,
            config: m,
            seriesKey: C,
            displayArea: V,
            tooltipData: l,
            xScale: c,
            yScale: d,
            colorScale: h,
            parseDate: g,
            yScaleRight: A,
            seriesAxis: K,
            key: `isolated-circle-${q}`
          }
        ));
      }),
      /* @__PURE__ */ r.createElement(r.Fragment, null, T === "hover" && /* @__PURE__ */ r.createElement(
        ai,
        {
          dataIndex: 0,
          mode: "HOVER_POINTS",
          circleData: F,
          data: v,
          config: m,
          seriesKey: C,
          displayArea: V,
          tooltipData: l,
          xScale: c,
          yScale: d,
          colorScale: h,
          parseDate: g,
          yScaleRight: A,
          seriesAxis: K
        }
      )),
      m.preliminaryData.some((z) => z.value && z.column) ? /* @__PURE__ */ r.createElement(
        qc,
        {
          curve: Ar[O[0].lineType],
          segments: v.map((z) => [z]),
          segmentation: "x",
          x: (z) => Y(z),
          y: (z) => K === "Right" ? A(n(z, C)) : d(Number(n(z, C))),
          styles: H,
          defined: (z, q) => z[C] !== "" && z[C] !== null && z[C] !== void 0
        }
      ) : /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
        Zt,
        {
          curve: Ar[O[0].lineType],
          data: v,
          x: (z) => Y(z),
          y: (z) => K === "Right" ? A(n(z, C)) : d(Number(n(z, C))),
          stroke: h(m.runtime.seriesLabels[C]),
          strokeWidth: 2,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: k ? y(k) : 0,
          defined: (z, q) => z[C] !== "" && z[C] !== null && z[C] !== void 0
        }
      )),
      F.map((z, q) => /* @__PURE__ */ r.createElement("circle", { key: q, cx: Y(z), cy: d(Number(n(z, C))), r: 6, strokeWidth: 2, stroke: h ? h(m.runtime.seriesLabels[C]) : "#000", fill: "#fff" })),
      m.animate && /* @__PURE__ */ r.createElement(
        Zt,
        {
          className: "animation",
          curve: O.lineType,
          data: v,
          x: (z) => Y(z),
          y: (z) => K === "Right" ? A(n(z, C)) : d(Number(n(z, C))),
          stroke: "#fff",
          strokeWidth: 3,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: k ? y(k) : 0,
          defined: (z, q) => z[C] !== "" && z[C] !== null && z[C] !== void 0
        }
      ),
      N && (m.runtime.lineSeriesKeys || m.runtime.seriesKeys).map((z) => {
        let q;
        for (let B = v.length - 1; B >= 0; B--)
          if (v[B][z]) {
            q = v[B];
            break;
          }
        return q ? /* @__PURE__ */ r.createElement("text", { x: Y(q) + 5, y: d(n(q, z)), alignmentBaseline: "middle", fill: m.colorMatchLineSeriesLabels && h ? h(m.runtime.seriesLabels[z] || z) : "black" }, m.runtime.seriesLabels[z] || z) : /* @__PURE__ */ r.createElement(r.Fragment, null);
      })
    );
  }), m.legend.dynamicLegend && f.length === 0 && /* @__PURE__ */ r.createElement(Fe, { x: s / 2, y: u / 2, fill: "black", textAnchor: "middle", color: "black" }, m.legend.dynamicLegendChartMessage)));
}, sg = (e) => {
  const { rawData: t, updateConfig: n } = $.useContext(Me), { xScale: a, yScale: i, config: o, height: l, width: s, handleTooltipMouseOff: c, handleTooltipMouseOver: u } = e, { forestPlot: d } = o, h = o.xAxis.tickWidthMax + 10, [m, p] = $.useState(!1);
  $.useEffect(() => {
    try {
      const b = ["estimateField", "lower", "upper", "estimateRadius"], S = o, A = 10;
      for (let T = 0; T < A; T++)
        b.forEach((N) => {
          var w;
          o.forestPlot[N] && o.forestPlot[N] !== ((w = S.columns[o.forestPlot[`additionalColumn${T}`]]) == null ? void 0 : w.name) && (delete S.columns[`additionalColumn${T}`], S.columns[o.forestPlot[N]] = {}, S.columns[o.forestPlot[N]].dataKey = S.forestPlot[N], S.columns[o.forestPlot[N]].name = S.forestPlot[N], S.columns[o.forestPlot[N]].dataTable = !0, S.columns[o.forestPlot[N]].tooltips = !0, S.columns[o.forestPlot[N]].label = S.forestPlot[N]);
        });
      o.forestPlot.radius.scalingColumn && (S.columns[o.forestPlot.radius.scalingColumn] = {}, S.columns[o.forestPlot.radius.scalingColumn].dataKey = S.forestPlot.radius.scalingColumn, S.columns[o.forestPlot.radius.scalingColumn].name = S.forestPlot.radius.scalingColumn, S.columns[o.forestPlot.radius.scalingColumn].label = S.forestPlot.radius.scalingColumn, S.columns[o.forestPlot.radius.scalingColumn].dataTable = !0, S.columns[o.forestPlot.radius.scalingColumn].tooltips = !0), S.table.showVertical && (S.table.indexLabel = o.xAxis.dataKey), n(S);
    } catch (b) {
      console.log(b.message);
    }
  }, []), $.useEffect(() => {
    !m && o.forestPlot.type === "Logarithmic" && (n({
      ...o,
      dataFormat: {
        ...o.dataFormat,
        roundTo: 2
      }
    }), p(!0));
  }, [o.forestPlot.type]);
  const y = o.data.find((b) => b[o.xAxis.dataKey] === o.forestPlot.pooledResult.column), E = y ? [
    { x: a(y[o.forestPlot.lower]), y: l - Number(o.forestPlot.rowHeight) },
    { x: a(y[o.forestPlot.estimateField]), y: l - d.pooledResult.diamondHeight - Number(o.forestPlot.rowHeight) },
    { x: a(y[o.forestPlot.upper]), y: l - Number(o.forestPlot.rowHeight) },
    { x: a(y[o.forestPlot.estimateField]), y: l + d.pooledResult.diamondHeight - Number(o.forestPlot.rowHeight) },
    { x: a(y[o.forestPlot.lower]), y: l - Number(o.forestPlot.rowHeight) }
  ] : [], g = o.forestPlot.rowHeight, f = [
    { x: 0, y: g },
    { x: s, y: g }
  ], x = [
    { x: 0, y: l },
    { x: s, y: l }
  ], v = Object.entries(o.columns).map((b) => b[1]).filter((b) => b.forestPlot === !0);
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(be, { width: s }, d.title && /* @__PURE__ */ r.createElement(Fe, { className: "forest-plot--title", x: d.type === "Linear" ? a(0) : a(1), y: 0, textAnchor: "middle", verticalAnchor: "start", fontSize: un(o.fontSize), fill: "black" }, d.title), d.lineOfNoEffect.show && d.type === "Linear" && /* @__PURE__ */ r.createElement(qe, { from: { x: a(0), y: 0 + g }, to: { x: a(0), y: l }, className: "forestplot__line-of-no-effect", stroke: d.regression.baseLineColor || "black" }), d.lineOfNoEffect.show && d.type === "Logarithmic" && /* @__PURE__ */ r.createElement(qe, { from: { x: a(1), y: 0 + g }, to: { x: a(1), y: l }, className: "forestplot__line-of-no-effect", stroke: d.regression.baseLineColor || "black" }), t.map((b, S) => {
    const A = pt({
      domain: t.map((k) => k[d.radius.scalingColumn]),
      range: [d.radius.min, d.radius.max]
    }), T = d.radius.scalingColumn !== "" ? A(t[S][d.radius.scalingColumn]) : 4, N = d.colors.shape ? d.colors.shape : "black", w = d.colors.line ? d.colors.line : "black", C = 4;
    return b[o.xAxis.dataKey] === d.pooledResult.column ? /* @__PURE__ */ r.createElement(Zt, { data: E, x: (k) => k.x, y: (k) => k.y - un(o.fontSize) / 2, stroke: "black", strokeWidth: 2, fill: "black", curve: yi }) : /* @__PURE__ */ r.createElement(be, null, /* @__PURE__ */ r.createElement(
      "path",
      {
        stroke: w,
        strokeWidth: 1,
        className: "lower-ci",
        d: `
                    M${a(b[d.lower])} ${i(S) - Number(C)}
                    L${a(b[d.lower])} ${i(S) + Number(C)}
                `
      }
    ), /* @__PURE__ */ r.createElement(
      "path",
      {
        stroke: w,
        strokeWidth: 1,
        className: "upper-ci",
        d: `
                    M${a(b[d.upper])} ${i(S) - Number(C)}
                    L${a(b[d.upper])} ${i(S) + Number(C)}
                `
      }
    ), /* @__PURE__ */ r.createElement("line", { stroke: w, className: `line-${b[o.yAxis.dataKey]}`, key: S, x1: a(b[d.lower]), x2: a(b[d.upper]), y1: i(S), y2: i(S) }), d.shape === "circle" && /* @__PURE__ */ r.createElement(Vu, { className: "forest-plot--circle", cx: a(Number(b[d.estimateField])), cy: i(S), r: d.radius.scalingColumn !== "" ? A(t[S][d.radius.scalingColumn]) : 4, fill: N, style: { opacity: 1, filter: "unset" } }), d.shape === "square" && /* @__PURE__ */ r.createElement("rect", { className: "forest-plot--square", x: a(Number(b[d.estimateField])), y: i(S) - T / 2, width: T, height: T, fill: N, style: { opacity: 1, filter: "unset" } }), d.shape === "text" && /* @__PURE__ */ r.createElement(Fe, { className: "forest-plot--text", x: a(Number(b[d.estimateField])), y: i(S), textAnchor: "middle", verticalAnchor: "middle", fontSize: un(o.fontSize), fill: N }, b[d.estimateField]));
  }), E && d.regression.showDiamond && /* @__PURE__ */ r.createElement(Zt, { data: E, x: (b) => b.x, y: (b) => b.y, stroke: "black", strokeWidth: 2, fill: d.regression.baseLineColor, curve: yi }), d.regression.description && /* @__PURE__ */ r.createElement(Fe, { x: 0 - Number(o.xAxis.size), width: s, y: l - o.forestPlot.rowHeight - Number(d.rowHeight) / 3, verticalAnchor: "start", textAnchor: "start", style: { fontWeight: "bold", fontSize: 12 } }, d.regression.description), /* @__PURE__ */ r.createElement(_t, { key: "forest-plot-tooltip-area", className: "forest-plot-tooltip-area", width: s, height: l, fill: "transparent", fillOpacity: 0.5, onMouseMove: (b) => u(b, t), onMouseOut: c })), /* @__PURE__ */ r.createElement(qe, { from: f[0], to: f[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__top-line" }), /* @__PURE__ */ r.createElement(qe, { from: x[0], to: x[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__bottom-line" }), v.map((b) => t.map((S, A) => /* @__PURE__ */ r.createElement(Fe, { className: `${S[b.name]}`, x: b.forestPlotAlignRight ? s : b.forestPlotStartingPoint, y: i(A), textAnchor: b.forestPlotAlignRight ? "end" : "start", verticalAnchor: "middle", fontSize: un(o.fontSize), fill: "black" }, S[b.name]))), !d.hideDateCategoryCol && t.map((b, S) => /* @__PURE__ */ r.createElement(Fe, { className: `${b[o.xAxis.dataKey]}`, x: 0, y: i(S), textAnchor: "start", verticalAnchor: "middle", fontSize: un(o.fontSize), fill: "black" }, b[o.xAxis.dataKey])), !d.hideDateCategoryCol && o.xAxis.dataKey && /* @__PURE__ */ r.createElement(Fe, { className: o.xAxis.dataKey, x: 0, y: 0, textAnchor: "start", verticalAnchor: "start", fontSize: un(o.fontSize), fill: "black" }, o.xAxis.dataKey), v.map((b) => /* @__PURE__ */ r.createElement(Fe, { className: `${b.label}`, x: b.forestPlotAlignRight ? s : b.forestPlotStartingPoint, y: 0, textAnchor: b.forestPlotAlignRight ? "end" : "start", verticalAnchor: "start", fontSize: un(o.fontSize), fill: "black" }, b.label)), d.leftLabel && /* @__PURE__ */ r.createElement(Fe, { className: "forest-plot__left-label", x: d.type === "Linear" ? a(0) - 25 : a(1) - 25, y: l + h, textAnchor: "end", verticalAnchor: "start" }, d.leftLabel), d.rightLabel && /* @__PURE__ */ r.createElement(Fe, { className: "forest-plot__right-label", x: d.type === "Linear" ? a(0) + 25 : a(1) + 25, y: l + h, textAnchor: "start", verticalAnchor: "start" }, d.rightLabel));
}, cg = ({ width: e, height: t, originalWidth: n }) => {
  var b;
  const { config: a, colorScale: i, transformedData: o, formatNumber: l, seriesHighlight: s, getTextWidth: c } = $.useContext(Me);
  if (!a || ((b = a == null ? void 0 : a.series) == null ? void 0 : b.length) < 2)
    return;
  const u = a.barHasBorder === "true" ? 1 : 0, d = e / 2, h = { small: 16, medium: 18, large: 20 }, m = 1.02, p = {
    parentKey: a.dataDescription.seriesKey,
    dataKey: a.series[0].dataKey,
    dataKeyLabel: a.runtime.seriesLabels[a.series[0].dataKey] || a.series[0].dataKey,
    color: i(a.runtime.seriesLabels[a.series[0].dataKey]),
    max: Math.max.apply(
      Math,
      o.map((S) => S[a.series[0].dataKey])
    ),
    labelColor: ""
  }, y = {
    parentKey: a.dataDescription.seriesKey,
    dataKey: a.series[1].dataKey,
    dataKeyLabel: a.runtime.seriesLabels[a.series[1].dataKey] || a.series[1].dataKey,
    color: i(a.runtime.seriesLabels[a.series[1].dataKey]),
    max: Math.max.apply(
      Math,
      o.map((S) => S[a.series[1].dataKey])
    ),
    labelColor: ""
  }, E = pt({
    domain: [0, Math.max(p.max * m, y.max * 1.1)],
    range: [0, d]
  });
  let g = "#000000";
  p.color && Ft.contrast(g, p.color) < 4.9 && (p.labelColor = "#FFFFFF"), y.color && Ft.contrast(g, y.color) < 4.9 && (y.labelColor = "#FFFFFF");
  const f = a.yAxis.label ? `${a.yAxis.label}: ` : "", x = (S) => `<p>
				${a.dataDescription.seriesKey}: ${p.dataKeyLabel}<br/>
				${a.xAxis.dataKey}: ${S[a.xAxis.dataKey]}<br/>
				${f}${l(S[p.dataKey], "left")}
			</p>`, v = (S) => `<p>
				${a.dataDescription.seriesKey}: ${y.dataKeyLabel}<br/>
				${a.xAxis.dataKey}: ${S[a.xAxis.dataKey]}<br/>
				${f}${l(S[y.dataKey], "left")}
			</p>`;
  return e > 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `
				#cdc-visualization__paired-bar-chart,
				 #cdc-visualization__paired-bar-chart > .visx-group {
					transform-origin: center
				}
				`), /* @__PURE__ */ r.createElement("svg", { id: "cdc-visualization__paired-bar-chart", width: n, height: t, viewBox: `0 0 ${e + Number(a.runtime.yAxis.size)} ${t}`, role: "img", tabIndex: 0 }, /* @__PURE__ */ r.createElement(be, { top: 0, left: Number(a.xAxis.size) }, o.filter((S) => a.series[0].dataKey === p.dataKey).map((S, A) => {
    let T = a.legend.behavior === "highlight" && s.length > 0 && s.indexOf(a.series[0].dataKey) === -1, N = a.legend.behavior === "highlight" || s.length === 0 || s.indexOf(a.series[0].dataKey) !== -1, w = E(S[a.series[0].dataKey]), C = Number(a.barHeight) ? Number(a.barHeight) : 25, _ = 0;
    _ = A !== 0 ? (Number(a.barSpace) + C + u) * A : _;
    const k = (Number(a.barSpace) + C + u) * o.length;
    a.heights.horizontal = k;
    const K = c(l(S[p.dataKey], "left"), `normal ${h[a.fontSize]}px sans-serif`) < w - 5;
    return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(be, { key: `group-${p.dataKey}-${S[a.xAxis.dataKey]}`, className: "horizontal" }, /* @__PURE__ */ r.createElement(
      _t,
      {
        id: `bar-${p.dataKey}-${S[a.dataDescription.xKey]}`,
        className: "bar group-1",
        key: `bar-${p.dataKey}-${S[a.dataDescription.xKey]}`,
        x: d - w,
        y: _,
        width: E(S[a.series[0].dataKey]),
        height: C,
        fill: p.color,
        "data-tooltip-html": x(S),
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`,
        stroke: "#333",
        strokeWidth: u,
        opacity: T ? 0.5 : 1,
        display: N ? "block" : "none"
      }
    ), a.yAxis.displayNumbersOnBar && N && /* @__PURE__ */ r.createElement(Fe, { textAnchor: K ? "start" : "end", dx: K ? 5 : -5, verticalAnchor: "middle", x: d - w, y: _ + a.barHeight / 2, fill: K ? p.labelColor : "#000" }, l(S[p.dataKey], "left"))));
  }), o.filter((S) => a.series[1].dataKey === y.dataKey).map((S, A) => {
    let T = E(S[a.series[1].dataKey]), N = a.legend.behavior === "highlight" && s.length > 0 && s.indexOf(a.series[1].dataKey) === -1, w = a.legend.behavior === "highlight" || s.length === 0 || s.indexOf(a.series[1].dataKey) !== -1, C = a.barHeight ? Number(a.barHeight) : 25, _ = 0;
    _ = A !== 0 ? (Number(a.barSpace) + C + u) * A : _;
    const k = (Number(a.barSpace) + C + u) * o.length;
    a.heights.horizontal = k;
    const K = c(l(S[y.dataKey], "left"), `normal ${h[a.fontSize]}px sans-serif`) < T - 5;
    return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `
                      .bar-${y.dataKey}-${S[a.xAxis.dataKey]} {
                          transform-origin: ${d}px ${_}px
                      }
							      `), /* @__PURE__ */ r.createElement(be, { key: `group-${y.dataKey}-${S[a.dataDescription.xKey]}`, className: "horizontal" }, /* @__PURE__ */ r.createElement(
      _t,
      {
        id: `bar-${y.dataKey}-${S[a.dataDescription.xKey]}`,
        className: "bar group-2",
        key: `bar-${y.dataKey}-${S[a.dataDescription.xKey]}`,
        x: d,
        y: _,
        width: E(S[a.series[1].dataKey]),
        height: C,
        fill: y.color,
        "data-tooltip-html": v(S),
        "data-tooltip-id": `cdc-open-viz-tooltip-${a.runtime.uniqueId}`,
        strokeWidth: u,
        stroke: "#333",
        opacity: N ? 0.5 : 1,
        display: w ? "block" : "none"
      }
    ), a.yAxis.displayNumbersOnBar && w && /* @__PURE__ */ r.createElement(Fe, { textAnchor: K ? "end" : "start", dx: K ? -5 : 5, verticalAnchor: "middle", x: d + T, y: _ + a.barHeight / 2, fill: K ? y.labelColor : "#000" }, l(S[y.dataKey], "left"))));
  }))));
}, Eu = ({ config: e, minValue: t, maxValue: n, existPositiveValue: a, data: i, isAllLine: o }) => {
  let l = 0, s = 0, c = 0, u = 0;
  if (!i)
    return { min: l, max: s };
  const { visualizationType: d, series: h } = e, { max: m, min: p } = e.runtime.yAxis, y = a ? m >= n : m >= 0, E = e.useLogScale ? p >= 0 : p <= 0 && t >= 0 || p <= t && t < 0;
  l = p && E ? p : t, s = m && y ? m : Number.MIN_VALUE;
  const { lower: g, upper: f } = (e == null ? void 0 : e.confidenceKeys) || {};
  if (g && f && e.visualizationType === "Bar") {
    const x = l < 0 ? 1.1 : 0;
    s = Math.max(n, Math.max(...i.flatMap((v) => [v[f], v[g]])) * 1.15), l = Math.min(t, Math.min(...i.flatMap((v) => [v[f], v[g]])) * 1.15) * x;
  }
  if (e.series.filter((x) => (x == null ? void 0 : x.type) === "Forecasting")) {
    const {
      runtime: { forecastingSeriesKeys: x }
    } = e;
    if ((x == null ? void 0 : x.length) > 0) {
      let v = [];
      x.forEach((T) => {
        var N;
        (N = T.confidenceIntervals) == null || N.map((w) => {
          v.push(w.high), v.push(w.low);
        });
      });
      const b = i.map((T) => v.map((N) => T[N])), S = Math.max.apply(
        null,
        b.map((T) => T[0])
      ), A = Math.min.apply(
        null,
        b.map((T) => T[1])
      );
      S > s && (s = S), A < l && (l = A);
    }
  }
  if (d === "Combo")
    try {
      if (!i)
        throw new Error("COVE: missing data while getting min/max for combo chart.");
      let x = h.filter((S) => S.axis === "Left"), v = h.filter((S) => S.axis === "Right");
      const b = (S, A, T, N = "left") => {
        let w = 0;
        return (A.map((_) => _.dataKey) || []).forEach((_) => {
          let k = A.find((V) => V.dataKey === _), O = S.map((V) => V[_]), K = Math.max.apply(null, O);
          e.visualizationSubType === "stacked" && N === "left" && k.type === "Bar" && (w += K), K > T && (T = K), T < w && (T = w);
        }), T;
      };
      c = b(i, x, c, "left"), u = b(i, v, u, "right"), c < m && (c = m);
    } catch (x) {
      console.error(x.message);
    }
  if ((d === "Bar" || d === "Combo" && !o) && l > 0 && (l = 0), (e.visualizationType === "Bar" || e.visualizationType === "Combo" && !o) && l < 0 && (l = l * 1.1), e.visualizationType === "Combo" && o && ((p == null || p === "") && l > 0 && (l = 0), p)) {
    const x = e.useLogScale ? p >= 0 && p < t : p < t;
    l = p && x ? p : t;
  }
  if (e.visualizationType === "Deviation Bar" && l > 0) {
    const x = Number(p) < Math.min(t, Number(e.xAxis.target));
    l = p && x ? p : 0;
  }
  if (e.visualizationType === "Line") {
    const x = e.useLogScale ? p >= 0 && p < t : p < t;
    l = p && x ? p : t;
  }
  if (s === Number.MIN_VALUE && (s = a ? n : 0), e.runtime.yAxis.paddingPercent) {
    let x = (s - l) * e.runtime.yAxis.paddingPercent;
    l -= x, s += x;
  }
  if (e.isLollipopChart && e.yAxis.displayNumbersOnBar) {
    const x = i.map((b) => b[e.series[0].dataKey]), v = Math.max(...x).toString().length;
    switch (!0) {
      case (v > 8 && v <= 12):
        s = s * 1.3;
        break;
      case (v > 4 && v <= 7):
        s = s * 1.1;
        break;
    }
  }
  return e.yAxis.enablePadding && (l < 0 ? (s *= 1 + e.yAxis.scalePadding * 2 / 100, l *= 1 + e.yAxis.scalePadding * 2 / 100) : s *= 1 + e.yAxis.scalePadding / 100), { min: l, max: s, leftMax: c, rightMax: u };
}, ug = (e) => {
  let { xAxisDataMapped: t, xMax: n, yMax: a, min: i, max: o, config: l, data: s } = e;
  const { rawData: c, dimensions: u } = $.useContext(Me), [d, h] = u, m = l.runtime.barSeriesKeys || l.runtime.seriesKeys, p = l.runtime.xAxis.type, y = l.orientation === "horizontal", E = (C) => C[l.runtime.originalXAxis.dataKey], g = s.map((C) => E(C)), { visualizationType: f } = l;
  let x = null, v = null, b = null, S = null, A = null, T = null, N = null;
  const w = {
    TIME: "time",
    LOG: "log",
    POINT: "point",
    LINEAR: "linear",
    BAND: "band"
  };
  if (y && (x = dg({ min: i * 1.03, ...e }), x.type = l.useLogScale ? w.LOG : w.LINEAR, v = fg(p, t), v.rangeRound([0, a]), A = gs(m, [0, a])), y || (N = gs(g, [0, n], 0.5), x = ri(t, [0, n], 1 - l.barThickness), v = mg(e), A = ri(m, [0, x.bandwidth()], 0)), l.xAxis.type === "date" && l.xAxis.sortDates) {
    let C = Math.min(...t), _ = Math.max(...t);
    C -= (l.xAxis.padding ? l.xAxis.padding * 0.01 : 0) * (_ - C), _ += (l.xAxis.padding ? l.xAxis.padding * 0.01 : 0) * (_ - C), x = wd({
      domain: [C, _],
      range: [0, n]
    }), N = x, x.type = w.LINEAR, A = ri(m, [0, l.barThickness * n], 0);
  }
  if (l.visualizationType === "Deviation Bar") {
    const C = l.isLollipopChart ? 1.05 : 1.03;
    v = li({
      domain: t,
      range: [0, a]
    }), x = pt({
      domain: [i * C, Math.max(Number(l.xAxis.target), o)],
      range: [0, n],
      round: !0,
      nice: !0
    }), x.type = w.LINEAR;
  }
  if (l.visualizationType === "Scatter Plot" && l.xAxis.type === "continuous" && (x = pt({
    domain: [0, Math.max.apply(null, x.domain())],
    range: [0, n]
  }), x.type = w.LINEAR), f === "Box Plot") {
    const C = [];
    if (l.boxplot.plots.map((K) => K.columnOutliers.map((V) => C.push(V))) && !l.boxplot.hideOutliers) {
      let K = Math.min(...C), V = Math.max(...C);
      K < i && (i = K), V > o && (o = V);
    }
    let k = Math.min(...l.boxplot.plots.map((K) => K.columnLowerBounds)), O = Math.max(...l.boxplot.plots.map((K) => K.columnUpperBounds));
    k < i && (i = k), O > o && (o = O), v = pt({
      range: [a, 0],
      round: !0,
      domain: [i, o]
    }), x = li({
      range: [0, n],
      round: !0,
      domain: l.boxplot.categories,
      padding: 0.4
    }), x.type = w.BAND;
  }
  if (f === "Paired Bar") {
    let _ = Math.max.apply(
      Math,
      s.map((O) => {
        var K;
        return O[(K = l.series[0]) == null ? void 0 : K.dataKey];
      })
    ), k = Math.max.apply(
      Math,
      s.map((O) => {
        var K;
        return O[(K = l.series[1]) == null ? void 0 : K.dataKey];
      })
    );
    S = pt({
      domain: [0, Math.max(_, k) * 1.02],
      range: [n / 2, 0]
    }), b = pt({
      domain: S.domain(),
      range: [n / 2, n],
      nice: !0
    });
  }
  if (f === "Forest Plot") {
    const C = () => l.forestPlot.regression.showDiamond || l.forestPlot.regression.description ? [0 + l.forestPlot.rowHeight * 2, a - l.forestPlot.rowHeight] : [0 + l.forestPlot.rowHeight * 2, a];
    v = pt({
      domain: [0, c.length],
      range: C()
    });
    const _ = 5, k = Number(l.forestPlot.leftWidthOffset) / 100 * n, O = Number(l.forestPlot.rightWidthOffset) / 100 * n, K = Number(l.forestPlot.rightWidthOffsetMobile) / 100 * n, V = Number(l.forestPlot.leftWidthOffsetMobile) / 100 * n;
    if (d > 480) {
      if (l.forestPlot.type === "Linear" && (x = pt({
        domain: [Math.min(...s.map((F) => parseFloat(F[l.forestPlot.lower]))) - _, Math.max(...s.map((F) => parseFloat(F[l.forestPlot.upper]))) + _],
        range: [k, u[0] - O]
      }), x.type = w.LINEAR), l.forestPlot.type === "Logarithmic") {
        let F = Math.max(...s.map((Y) => parseFloat(Y[l.forestPlot.upper]))), H = Math.min(...s.map((Y) => parseFloat(Y[l.forestPlot.lower])));
        x = Qa({
          domain: [H, F],
          range: [k, n - O],
          nice: !0
        }), x.type = w.LOG;
      }
    } else if (l.forestPlot.type === "Linear" && (x = pt({
      domain: [Math.min(...s.map((F) => parseFloat(F[l.forestPlot.lower]))) - _, Math.max(...s.map((F) => parseFloat(F[l.forestPlot.upper]))) + _],
      range: [V, n - K],
      type: w.LINEAR
    })), l.forestPlot.type === "Logarithmic") {
      let F = Math.max(...s.map((Y) => parseFloat(Y[l.forestPlot.upper]))), H = Math.min(...s.map((Y) => parseFloat(Y[l.forestPlot.lower])));
      x = Qa({
        domain: [H, F],
        range: [k, n - O],
        nice: !0,
        base: F > 1 ? 10 : 2,
        round: !1,
        type: w.LOG
      });
    }
  }
  return { xScale: x, yScale: v, seriesScale: A, g1xScale: S, g2xScale: b, xScaleNoPadding: T, xScaleBrush: N };
}, dg = ({ min: e, max: t, xMax: n, config: a }) => (e = a.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e, (a.useLogScale ? Qa : pt)({
  domain: [e, t],
  range: [0, n],
  nice: a.useLogScale,
  zero: a.useLogScale,
  type: a.useLogScale ? "log" : "linear"
})), mg = ({ min: e, max: t, yMax: n, config: a, leftMax: i }) => {
  e = a.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e;
  const o = a.useLogScale ? Qa : pt;
  return a.visualizationType === "Combo" && (t = i), o({
    domain: [e, t],
    range: [n, 0],
    nice: a.useLogScale,
    zero: a.useLogScale
  });
}, fg = (e, t) => e === "date" ? pt({
  domain: [Math.min(...t), Math.max(...t)]
}) : Dn({ domain: t, padding: 0.5 }), gs = (e, t, n = 0) => Dn({
  domain: e,
  range: t,
  padding: n,
  type: "point"
}), ri = (e, t, n = 0) => li({
  domain: e,
  range: t,
  padding: n,
  type: "band"
});
function hg(e) {
  return { hasTopAxis: e.visualizationType === "Bar" || e.visualizationType === "Combo" || e.visualizationType === "Line" };
}
const Ea = () => {
  const { config: e } = $.useContext(Me), { visualizationType: t, series: n, orientation: a, visualizationSubType: i } = e;
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
      const W = ["Forest Plot"];
      return !(a === "horizontal" || W.includes(t));
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
var Ao = {};
const pg = /* @__PURE__ */ Yi(Fp), yg = /* @__PURE__ */ Yi(Up);
var So = {};
So.__esModule = !0;
So.default = gg;
var Ba = $;
function gg(e) {
  var t = (0, Ba.useState)(e), n = t[0], a = t[1], i = (0, Ba.useRef)(null), o = (0, Ba.useCallback)(function(l, s) {
    i.current = s || null, a(l);
  }, [a]);
  return (0, Ba.useLayoutEffect)(function() {
    i.current && (i.current(n), i.current = null);
  }, [n]), [n, o];
}
var To = {}, ko = {};
ko.__esModule = !0;
ko.default = xg;
function xg(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var wo = {};
wo.__esModule = !0;
wo.default = Eg;
function vg(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = bg(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var a = 0;
    return function() {
      return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bg(e, t) {
  if (e) {
    if (typeof e == "string")
      return xs(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return xs(e, t);
  }
}
function xs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function Eg(e, t) {
  for (var n = e, a = 1 / 0, i = vg(t), o; !(o = i()).done; ) {
    var l = o.value, s = Math.sqrt(Math.pow(l.x - e.x, 2) + Math.pow(l.y - e.y, 2));
    s < a && (a = s, n = {
      x: l.x,
      y: l.y
    });
  }
  return n;
}
To.__esModule = !0;
To.default = Sg;
var vs = Au(ko), Ag = Au(wo);
function Au(e) {
  return e && e.__esModule ? e : { default: e };
}
function Sg(e, t, n) {
  var a, i, o, l;
  return n === void 0 && (n = {}), t.length > 0 ? (0, Ag.default)(e, t) : {
    x: (0, vs.default)(e.x, (a = n.xMin) != null ? a : -1 / 0, (i = n.xMax) != null ? i : 1 / 0),
    y: (0, vs.default)(e.y, (o = n.yMin) != null ? o : -1 / 0, (l = n.yMax) != null ? l : 1 / 0)
  };
}
var Co = {};
Co.__esModule = !0;
Co.default = wg;
var Tg = $;
function kg(e, t, n) {
  if (n === void 0 && (n = 1), !e)
    return [];
  for (var a = [], i = e.getTotalLength(), o = 0; o <= i; o += n) {
    var l = e.getPointAtLength(o), s = l.matrixTransform(t);
    a.push(s);
  }
  return a;
}
function wg(e) {
  var t = (0, Tg.useMemo)(function() {
    if (!e)
      return [];
    var n = e.getCTM() || new DOMMatrix();
    return kg(e, n);
  }, [e == null ? void 0 : e.getTotalLength()]);
  return t;
}
Ao.__esModule = !0;
Ao.default = Ng;
var pn = $, _n = pg, bs = yg, Cg = Po(So), Es = Po(To), Pg = Po(Co);
function Po(e) {
  return e && e.__esModule ? e : { default: e };
}
function It() {
  return It = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, It.apply(this, arguments);
}
function Ng(e) {
  var t = e === void 0 ? {} : e, n = t.resetOnStart, a = n === void 0 ? !1 : n, i = t.snapToPointer, o = i === void 0 ? !0 : i, l = t.onDragEnd, s = t.onDragMove, c = t.onDragStart, u = t.x, d = t.y, h = t.dx, m = t.dy, p = t.isDragging, y = t.restrict, E = y === void 0 ? {} : y, g = t.restrictToPath, f = (0, pn.useRef)({
    x: u,
    y: d,
    dx: h,
    dy: m
  }), x = (0, Cg.default)({
    x: u,
    y: d,
    dx: h ?? 0,
    dy: m ?? 0,
    isDragging: !1
  }), v = x[0], b = x[1], S = (0, pn.useState)(new _n.Point({
    x: 0,
    y: 0
  })), A = S[0], T = S[1];
  (0, pn.useEffect)(function() {
    (f.current.x !== u || f.current.y !== d || f.current.dx !== h || f.current.dy !== m) && (f.current = {
      x: u,
      y: d,
      dx: h,
      dy: m
    }, b(function(k) {
      return It({}, k, {
        x: u,
        y: d,
        dx: h ?? 0,
        dy: m ?? 0
      });
    }));
  }), (0, pn.useEffect)(function() {
    p !== void 0 && v.isDragging !== p && b(function(k) {
      return It({}, k, {
        isDragging: p
      });
    });
  }, [v.isDragging, p, b]);
  var N = (0, Pg.default)(g), w = (0, pn.useCallback)(function(k) {
    k.persist(), b(function(O) {
      var K = O.x, V = K === void 0 ? 0 : K, F = O.y, H = F === void 0 ? 0 : F, Y = O.dx, z = O.dy, q = new _n.Point({
        x: (V || 0) + Y,
        y: (H || 0) + z
      }), B = (0, bs.localPoint)(k) || new _n.Point({
        x: 0,
        y: 0
      }), j = o ? B : q, U = (0, Es.default)(j, N, E);
      return T((0, _n.subtractPoints)(q, B)), {
        isDragging: !0,
        dx: a ? 0 : O.dx,
        dy: a ? 0 : O.dy,
        x: a ? U.x : U.x - O.dx,
        y: a ? U.y : U.y - O.dy
      };
    }, c && function(O) {
      c(It({}, O, {
        event: k
      }));
    });
  }, [c, a, E, N, b, o]), C = (0, pn.useCallback)(function(k) {
    k.persist(), b(function(O) {
      if (!O.isDragging)
        return O;
      var K = O.x, V = K === void 0 ? 0 : K, F = O.y, H = F === void 0 ? 0 : F, Y = (0, bs.localPoint)(k) || new _n.Point({
        x: 0,
        y: 0
      }), z = o ? Y : (0, _n.sumPoints)(Y, A), q = (0, Es.default)(z, N, E);
      return It({}, O, {
        dx: q.x - V,
        dy: q.y - H
      });
    }, s && function(O) {
      O.isDragging && s(It({}, O, {
        event: k
      }));
    });
  }, [b, s, o, A, N, E]), _ = (0, pn.useCallback)(function(k) {
    k.persist(), b(function(O) {
      return It({}, O, {
        isDragging: !1
      });
    }, l && function(O) {
      l(It({}, O, {
        event: k
      }));
    });
  }, [l, b]);
  return It({}, v, {
    dragEnd: _,
    dragMove: C,
    dragStart: w
  });
}
var zr = Su, Zn = No(Ns), ii = No($), Lg = No(Ao);
function No(e) {
  return e && e.__esModule ? e : { default: e };
}
function Su(e) {
  var t = e.captureDragArea, n = t === void 0 ? !0 : t, a = e.snapToPointer, i = a === void 0 ? !0 : a, o = e.children, l = e.dx, s = e.dy, c = e.height, u = e.onDragEnd, d = e.onDragMove, h = e.onDragStart, m = e.resetOnStart, p = e.width, y = e.x, E = e.y, g = e.isDragging, f = e.restrict, x = e.restrictToPath, v = (0, Lg.default)({
    resetOnStart: m,
    snapToPointer: i,
    onDragEnd: u,
    onDragMove: d,
    onDragStart: h,
    x: y,
    y: E,
    dx: l,
    dy: s,
    isDragging: g,
    restrict: f,
    restrictToPath: x
  });
  return /* @__PURE__ */ ii.default.createElement(ii.default.Fragment, null, v.isDragging && n && /* @__PURE__ */ ii.default.createElement("rect", {
    width: p,
    height: c,
    onPointerDown: v.dragStart,
    onPointerMove: v.dragMove,
    onPointerUp: v.dragEnd,
    fill: "transparent"
  }), o(v));
}
Su.propTypes = {
  children: Zn.default.func.isRequired,
  width: Zn.default.number.isRequired,
  height: Zn.default.number.isRequired,
  captureDragArea: Zn.default.bool,
  isDragging: Zn.default.bool
};
function Tr(e, t) {
  if ("invert" in e && typeof e.invert < "u")
    return e.invert(t).valueOf();
  var n = e.range(), a = n[0], i = n[1], o = 0, l = "step" in e && typeof e.step < "u" ? e.step() : 1, s = l * (i - a) / Math.abs(i - a);
  if (s > 0)
    for (; t > a + s * (o + 1); )
      o += 1;
  else
    for (; t < a + s * (o + 1); )
      o += 1;
  return o;
}
function As(e, t, n, a) {
  var i, o = Tr(e, t + (t < n ? -a : a)), l = Tr(e, n + (n < t ? -a : a)), s = Math.min(o, l), c = Math.max(o, l);
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
function Lo(e) {
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
function Dt() {
  return Dt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Dt.apply(this, arguments);
}
function Og(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Bi(e, t);
}
function Bi(e, t) {
  return Bi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, i) {
    return a.__proto__ = i, a;
  }, Bi(e, t);
}
var Tu = /* @__PURE__ */ function(e) {
  Og(t, e);
  function t() {
    for (var a, i = arguments.length, o = new Array(i), l = 0; l < i; l++)
      o[l] = arguments[l];
    return a = e.call.apply(e, [this].concat(o)) || this, a.handleDragStart = function(s) {
      var c = a.props, u = c.onBrushHandleChange, d = c.type, h = c.onBrushStart;
      u && u(d, Lo(s.event)), h && h(s);
    }, a.handleDragMove = function(s) {
      var c = a.props, u = c.updateBrush, d = c.type, h = c.isControlled;
      !s.isDragging || h || u(function(m) {
        var p = m.start, y = m.end, E = 0, g = Math.max(p.x, y.x), f = Math.min(p.x, y.x), x = Math.max(p.y, y.y), v = Math.min(p.y, y.y);
        switch (d) {
          case "right":
            return E = g + s.dx, Dt({}, m, {
              activeHandle: d,
              extent: Dt({}, m.extent, {
                x0: Math.max(Math.min(E, p.x), m.bounds.x0),
                x1: Math.min(Math.max(E, p.x), m.bounds.x1)
              })
            });
          case "left":
            return E = f + s.dx, Dt({}, m, {
              activeHandle: d,
              extent: Dt({}, m.extent, {
                x0: Math.min(E, y.x),
                x1: Math.max(E, y.x)
              })
            });
          case "bottom":
            return E = x + s.dy, Dt({}, m, {
              activeHandle: d,
              extent: Dt({}, m.extent, {
                y0: Math.min(E, p.y),
                y1: Math.max(E, p.y)
              })
            });
          case "top":
            return E = v + s.dy, Dt({}, m, {
              activeHandle: d,
              extent: Dt({}, m.extent, {
                y0: Math.min(E, y.y),
                y1: Math.max(E, y.y)
              })
            });
          default:
            return m;
        }
      });
    }, a.handleDragEnd = function() {
      var s = a.props, c = s.updateBrush, u = s.onBrushEnd, d = s.onBrushHandleChange, h = s.isControlled;
      h || c(function(m) {
        var p = m.start, y = m.end, E = m.extent;
        p.x = Math.min(E.x0, E.x1), p.y = Math.min(E.y0, E.y0), y.x = Math.max(E.x0, E.x1), y.y = Math.max(E.y0, E.y1);
        var g = Dt({}, m, {
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
    var i = this, o = this.props, l = o.stageWidth, s = o.stageHeight, c = o.brush, u = o.type, d = o.handle, h = o.isControlled, m = o.isDragInProgress, p = o.renderBrushHandle, y = d.x, E = d.y, g = d.width, f = d.height, x = u === "right" || u === "left" ? "ew-resize" : "ns-resize";
    return /* @__PURE__ */ r.createElement(zr, {
      width: l,
      height: s,
      onDragStart: this.handleDragStart,
      onDragMove: this.handleDragMove,
      onDragEnd: this.handleDragEnd,
      resetOnStart: !0,
      isDragging: h ? m : void 0
    }, function(v) {
      var b = v.dragStart, S = v.dragEnd, A = v.dragMove, T = v.isDragging;
      return /* @__PURE__ */ r.createElement("g", null, T && /* @__PURE__ */ r.createElement("rect", {
        fill: "transparent",
        width: l,
        height: s,
        style: {
          cursor: x
        },
        onPointerMove: A,
        onPointerUp: h ? void 0 : S,
        onPointerLeave: h ? void 0 : S
      }), !p && /* @__PURE__ */ r.createElement("rect", {
        x: y,
        y: E,
        width: g,
        height: f,
        fill: "transparent",
        className: "visx-brush-handle-" + u,
        onPointerDown: b,
        onPointerMove: A,
        onPointerUp: h ? void 0 : S,
        style: {
          cursor: x,
          pointerEvents: c.activeHandle || c.isBrushing ? "none" : "all"
        }
      }), p && /* @__PURE__ */ r.createElement("g", {
        onPointerDown: b,
        onPointerMove: A,
        onPointerUp: h ? void 0 : S
      }, p(Dt({}, i.props.handle, {
        height: s,
        className: "visx-brush-handle-" + u,
        isBrushActive: c.extent.x0 !== -1 && c.extent.x1 !== -1
      }))));
    });
  }, t;
}(r.Component);
Tu.propTypes = {
  stageWidth: R.number.isRequired,
  stageHeight: R.number.isRequired,
  updateBrush: R.func.isRequired,
  onBrushStart: R.func,
  onBrushEnd: R.func,
  handle: R.shape({
    x: R.number.isRequired,
    y: R.number.isRequired,
    width: R.number.isRequired,
    height: R.number.isRequired
  }).isRequired,
  isControlled: R.bool,
  isDragInProgress: R.bool,
  onBrushHandleChange: R.func,
  renderBrushHandle: R.func
};
function Ot() {
  return Ot = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ot.apply(this, arguments);
}
function _g(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Vi(e, t);
}
function Vi(e, t) {
  return Vi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, i) {
    return a.__proto__ = i, a;
  }, Vi(e, t);
}
var Oo = /* @__PURE__ */ function(e) {
  _g(t, e);
  function t() {
    for (var a, i = arguments.length, o = new Array(i), l = 0; l < i; l++)
      o[l] = arguments[l];
    return a = e.call.apply(e, [this].concat(o)) || this, a.cornerDragMove = function(s) {
      var c = a.props, u = c.updateBrush, d = c.type;
      s.isDragging && u(function(h) {
        var m = h.start, p = h.end, y = Math.max(m.x, p.x), E = Math.min(m.x, p.x), g = Math.max(m.y, p.y), f = Math.min(m.y, p.y), x = 0, v = 0;
        switch (d) {
          case "topRight":
            return x = y + s.dx, v = f + s.dy, Ot({}, h, {
              activeHandle: d,
              extent: Ot({}, h.extent, {
                x0: Math.max(Math.min(x, m.x), h.bounds.x0),
                x1: Math.min(Math.max(x, m.x), h.bounds.x1),
                y0: Math.max(Math.min(v, p.y), h.bounds.y0),
                y1: Math.min(Math.max(v, p.y), h.bounds.y1)
              })
            });
          case "topLeft":
            return x = E + s.dx, v = f + s.dy, Ot({}, h, {
              activeHandle: d,
              extent: Ot({}, h.extent, {
                x0: Math.max(Math.min(x, p.x), h.bounds.x0),
                x1: Math.min(Math.max(x, p.x), h.bounds.x1),
                y0: Math.max(Math.min(v, p.y), h.bounds.y0),
                y1: Math.min(Math.max(v, p.y), h.bounds.y1)
              })
            });
          case "bottomLeft":
            return x = E + s.dx, v = g + s.dy, Ot({}, h, {
              activeHandle: d,
              extent: Ot({}, h.extent, {
                x0: Math.max(Math.min(x, p.x), h.bounds.x0),
                x1: Math.min(Math.max(x, p.x), h.bounds.x1),
                y0: Math.max(Math.min(v, m.y), h.bounds.y0),
                y1: Math.min(Math.max(v, m.y), h.bounds.y1)
              })
            });
          case "bottomRight":
            return x = y + s.dx, v = g + s.dy, Ot({}, h, {
              activeHandle: d,
              extent: Ot({}, h.extent, {
                x0: Math.max(Math.min(x, m.x), h.bounds.x0),
                x1: Math.min(Math.max(x, m.x), h.bounds.x1),
                y0: Math.max(Math.min(v, m.y), h.bounds.y0),
                y1: Math.min(Math.max(v, m.y), h.bounds.y1)
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
        var y = Ot({}, d, {
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
    var i = this.props, o = i.type, l = i.brush, s = i.stageWidth, c = i.stageHeight, u = i.style, d = i.corner, h = (u == null ? void 0 : u.cursor) || (o === "topLeft" || o === "bottomRight" ? "nwse-resize" : "nesw-resize"), m = l.activeHandle || l.isBrushing ? "none" : "all";
    return /* @__PURE__ */ r.createElement(zr, {
      width: s,
      height: c,
      onDragMove: this.cornerDragMove,
      onDragEnd: this.cornerDragEnd,
      resetOnStart: !0
    }, function(p) {
      var y = p.dragMove, E = p.dragEnd, g = p.dragStart, f = p.isDragging;
      return /* @__PURE__ */ r.createElement("g", null, f && /* @__PURE__ */ r.createElement("rect", {
        fill: "transparent",
        width: s,
        height: c,
        style: {
          cursor: h
        },
        onPointerMove: y,
        onPointerUp: E
      }), /* @__PURE__ */ r.createElement("rect", Ot({
        fill: "transparent",
        onPointerDown: g,
        onPointerMove: y,
        onPointerUp: E,
        className: "visx-brush-corner-" + o,
        style: Ot({
          cursor: h,
          pointerEvents: m
        }, u)
      }, d)));
    });
  }, t;
}(r.Component);
Oo.propTypes = {
  stageWidth: R.number.isRequired,
  stageHeight: R.number.isRequired,
  updateBrush: R.func.isRequired,
  onBrushEnd: R.func,
  corner: R.shape({
    x: R.number.isRequired,
    y: R.number.isRequired,
    width: R.number.isRequired,
    height: R.number.isRequired
  }).isRequired
};
Oo.defaultProps = {
  style: {}
};
function an() {
  return an = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, an.apply(this, arguments);
}
function Dg(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Hi(e, t);
}
function Hi(e, t) {
  return Hi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, i) {
    return a.__proto__ = i, a;
  }, Hi(e, t);
}
var Mg = {
  cursor: "move"
}, _o = /* @__PURE__ */ function(e) {
  Dg(t, e);
  function t() {
    for (var a, i = arguments.length, o = new Array(i), l = 0; l < i; l++)
      o[l] = arguments[l];
    return a = e.call.apply(e, [this].concat(o)) || this, a.selectionDragStart = function(s) {
      var c = a.props, u = c.onMoveSelectionChange, d = c.onBrushStart;
      u && u("move", Lo(s.event)), d && d(s);
    }, a.selectionDragMove = function(s) {
      var c = a.props, u = c.updateBrush, d = c.isControlled;
      d || u(function(h) {
        var m = h.start, p = m.x, y = m.y, E = h.end, g = E.x, f = E.y, x = s.dx > 0 ? Math.min(s.dx, h.bounds.x1 - g) : Math.max(s.dx, h.bounds.x0 - p), v = s.dy > 0 ? Math.min(s.dy, h.bounds.y1 - f) : Math.max(s.dy, h.bounds.y0 - y);
        return an({}, h, {
          isBrushing: !0,
          extent: an({}, h.extent, {
            x0: p + x,
            x1: g + x,
            y0: y + v,
            y1: f + v
          })
        });
      });
    }, a.selectionDragEnd = function() {
      var s = a.props, c = s.updateBrush, u = s.onBrushEnd, d = s.onMoveSelectionChange, h = s.isControlled;
      h || c(function(m) {
        var p = an({}, m, {
          isBrushing: !1,
          start: an({}, m.start, {
            x: Math.min(m.extent.x0, m.extent.x1),
            y: Math.min(m.extent.y0, m.extent.y1)
          }),
          end: an({}, m.end, {
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
    var i = this.props, o = i.width, l = i.height, s = i.stageWidth, c = i.stageHeight, u = i.brush, d = i.disableDraggingSelection, h = i.onMouseLeave, m = i.onMouseMove, p = i.onMouseUp, y = i.onClick, E = i.selectedBoxStyle, g = i.isControlled, f = i.isDragInProgress;
    return /* @__PURE__ */ r.createElement(zr, {
      width: o,
      height: l,
      resetOnStart: !0,
      onDragStart: this.selectionDragStart,
      onDragMove: this.selectionDragMove,
      onDragEnd: this.selectionDragEnd,
      isDragging: g ? f : void 0
    }, function(x) {
      var v = x.isDragging, b = x.dragStart, S = x.dragEnd, A = x.dragMove;
      return /* @__PURE__ */ r.createElement("g", null, v && /* @__PURE__ */ r.createElement("rect", {
        width: s,
        height: c,
        fill: "transparent",
        onPointerUp: g ? void 0 : S,
        onPointerMove: A,
        onPointerLeave: g ? void 0 : S,
        style: Mg
      }), /* @__PURE__ */ r.createElement("rect", an({
        x: Math.min(u.extent.x0, u.extent.x1),
        y: Math.min(u.extent.y0, u.extent.y1),
        width: o,
        height: l,
        className: "visx-brush-selection",
        onPointerDown: d ? void 0 : b,
        onPointerLeave: function(N) {
          h && h(N);
        },
        onPointerMove: function(N) {
          A(N), m && m(N);
        },
        onPointerUp: function(N) {
          g || S(N), p && p(N);
        },
        onClick: function(N) {
          y && y(N);
        },
        style: {
          pointerEvents: u.isBrushing || u.activeHandle ? "none" : "all",
          cursor: d ? void 0 : "move"
        }
      }, E)));
    });
  }, t;
}(r.Component);
_o.propTypes = {
  width: R.number.isRequired,
  height: R.number.isRequired,
  stageWidth: R.number.isRequired,
  stageHeight: R.number.isRequired,
  updateBrush: R.func.isRequired,
  onMoveSelectionChange: R.func,
  onBrushStart: R.func,
  onBrushEnd: R.func,
  disableDraggingSelection: R.bool.isRequired,
  onMouseLeave: R.func,
  onMouseMove: R.func,
  onMouseUp: R.func,
  onClick: R.func,
  isControlled: R.bool,
  isDragInProgress: R.bool
};
_o.defaultProps = {
  onMouseLeave: null,
  onMouseUp: null,
  onMouseMove: null,
  onClick: null
};
function Wi() {
  return Wi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Wi.apply(this, arguments);
}
function Ki(e) {
  return /* @__PURE__ */ r.createElement(_t, Wi({
    className: "visx-brush-overlay",
    fill: "transparent",
    x: 0,
    y: 0
  }, e));
}
Ki.propTypes = {
  width: R.number.isRequired,
  height: R.number.isRequired,
  onClick: R.func,
  onDoubleClick: R.func,
  onPointerDown: R.func,
  onPointerLeave: R.func,
  onPointerMove: R.func,
  onPointerUp: R.func
};
function St() {
  return St = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, St.apply(this, arguments);
}
function $g(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ii(e, t);
}
function Ii(e, t) {
  return Ii = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, i) {
    return a.__proto__ = i, a;
  }, Ii(e, t);
}
var Do = /* @__PURE__ */ function(e) {
  $g(t, e);
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
        var p = m.start, y = m.end, E = m.extent;
        p.x = Math.min(E.x0, E.x1), p.y = Math.min(E.y0, E.y0), y.x = Math.max(E.x0, E.x1), y.y = Math.max(E.y0, E.y1);
        var g = St({}, m, {
          activeHandle: null,
          isBrushing: !1,
          brushingType: void 0
        });
        return u && u(g), d && (g = St({}, g, i.getIdleState())), g;
      });
    }, i.handleWindowPointerMove = function(s) {
      var c = i.props.useWindowMoveEvents, u = i.state, d = u.brushingType, h = u.isBrushing, m = u.brushPageOffset, p = u.start;
      if (!(!c || !h)) {
        var y = s.pageX - ((m == null ? void 0 : m.pageX) || 0), E = s.pageY - ((m == null ? void 0 : m.pageY) || 0);
        ["left", "right", "top", "bottom"].includes(d ?? "") && i.updateBrush(function(g) {
          var f = g.start, x = f.x, v = f.y, b = g.end, S = b.x, A = b.y;
          return St({}, g, {
            isBrushing: !0,
            extent: St({}, g.extent, i.getExtent({
              x: d === "left" ? Math.min(Math.max(x + y, g.bounds.x0), g.bounds.x1) : x,
              y: d === "top" ? Math.min(Math.max(v + E, g.bounds.y0), g.bounds.y1) : v
            }, {
              x: d === "right" ? Math.min(Math.max(S + y, g.bounds.x0), g.bounds.x1) : S,
              y: d === "bottom" ? Math.min(Math.max(A + E, g.bounds.y0), g.bounds.y1) : A
            }))
          });
        }), d === "move" && i.updateBrush(function(g) {
          var f = g.start, x = f.x, v = f.y, b = g.end, S = b.x, A = b.y, T = y > 0 ? Math.min(y, g.bounds.x1 - S) : Math.max(y, g.bounds.x0 - x), N = E > 0 ? Math.min(E, g.bounds.y1 - A) : Math.max(E, g.bounds.y0 - v);
          return St({}, g, {
            isBrushing: !0,
            extent: St({}, g.extent, {
              x0: x + T,
              y0: v + N,
              x1: S + T,
              y1: A + N
            })
          });
        }), d === "select" && i.updateBrush(function(g) {
          var f = g.start, x = f.x, v = f.y, b = {
            x: Math.min(Math.max(x + y, g.bounds.x0), g.bounds.x1),
            y: Math.min(Math.max(v + E, g.bounds.y0), g.bounds.y1)
          }, S = i.getExtent(p, b), A = St({}, g, {
            end: b,
            extent: S
          });
          return A;
        });
      }
    }, i.getExtent = function(s, c) {
      var u = i.props, d = u.brushDirection, h = u.width, m = u.height, p = d === "vertical" ? 0 : Math.min(s.x || 0, c.x || 0), y = d === "vertical" ? h : Math.max(s.x || 0, c.x || 0), E = d === "horizontal" ? 0 : Math.min(s.y || 0, c.y || 0), g = d === "horizontal" ? m : Math.max(s.y || 0, c.y || 0);
      return {
        x0: p,
        x1: y,
        y0: E,
        y1: g
      };
    }, i.handleDragStart = function(s) {
      var c = i.props, u = c.onBrushStart, d = c.left, h = c.top, m = c.inheritedMargin, p = c.useWindowMoveEvents, y = m != null && m.left ? m.left : 0, E = m != null && m.top ? m.top : 0, g = {
        x: (s.x || 0) + s.dx - d - y,
        y: (s.y || 0) + s.dy - h - E
      }, f = St({}, g);
      u && u(g), i.updateBrush(function(x) {
        return St({}, x, {
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
          brushPageOffset: p ? Lo(s.event) : void 0
        });
      });
    }, i.handleBrushStart = function(s) {
      var c = i.props, u = c.onBrushStart, d = c.left, h = c.top, m = c.inheritedMargin;
      if (u) {
        var p = m != null && m.left ? m.left : 0, y = m != null && m.top ? m.top : 0, E = {
          x: (s.x || 0) + s.dx - d - p,
          y: (s.y || 0) + s.dy - h - y
        };
        u(E);
      }
    }, i.handleDragMove = function(s) {
      var c = i.props, u = c.left, d = c.top, h = c.inheritedMargin, m = c.useWindowMoveEvents;
      if (!(!s.isDragging || m)) {
        var p = (h == null ? void 0 : h.left) || 0, y = (h == null ? void 0 : h.top) || 0, E = {
          x: (s.x || 0) + s.dx - u - p,
          y: (s.y || 0) + s.dy - d - y
        };
        i.updateBrush(function(g) {
          var f = g.start, x = i.getExtent(f, E);
          return St({}, g, {
            end: E,
            extent: x
          });
        });
      }
    }, i.handleDragEnd = function() {
      var s = i.props, c = s.onBrushEnd, u = s.resetOnEnd, d = s.useWindowMoveEvents;
      d || i.updateBrush(function(h) {
        var m = h.extent, p = St({}, h, {
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
        return c && c(p), u && (p = St({}, p, i.getIdleState())), p;
      });
    }, i.getBrushWidth = function() {
      var s = i.state.extent, c = s.x0, u = s.x1;
      return Math.max(Math.max(c, u) - Math.min(c, u), 0);
    }, i.getBrushHeight = function() {
      var s = i.state.extent, c = s.y1, u = s.y0;
      return Math.max(Math.max(u, c) - Math.min(u, c), 0);
    }, i.handles = function() {
      var s = i.props.handleSize, c = i.state.extent, u = c.x0, d = c.x1, h = c.y0, m = c.y1, p = s / 2, y = i.getBrushWidth(), E = i.getBrushHeight();
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
          height: E + s,
          width: s
        },
        left: {
          x: u - p,
          y: h - p,
          height: E + s,
          width: s
        }
      };
    }, i.corners = function() {
      var s = i.props.handleSize, c = i.state.extent, u = c.x0, d = c.x1, h = c.y0, m = c.y1, p = s / 2, y = s, E = s;
      return {
        topLeft: {
          x: Math.min(u, d) - p,
          y: Math.min(h, m) - p,
          width: y,
          height: E
        },
        topRight: {
          x: Math.max(u, d) - p,
          y: Math.min(h, m) - p,
          width: y,
          height: E
        },
        bottomLeft: {
          x: Math.min(u, d) - p,
          y: Math.max(h, m) - p,
          width: y,
          height: E
        },
        bottomRight: {
          x: Math.max(u, d) - p,
          y: Math.max(h, m) - p,
          width: y,
          height: E
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
        var d = St({}, u, {
          brushingType: s,
          isBrushing: s !== void 0
        });
        return (c || s === void 0) && (d.brushPageOffset = c), d;
      });
    };
    var o = a.initialBrushPosition, l = o ? i.getExtent(o.start, o.end) : {
      x0: -1,
      x1: -1,
      y0: -1,
      y1: -1
    };
    return i.state = {
      start: {
        x: Math.max(0, l.x0),
        y: Math.max(0, l.y0)
      },
      end: {
        x: Math.max(0, l.x1),
        y: Math.max(0, l.y1)
      },
      extent: l,
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
    var o = this;
    (this.props.width !== i.width || this.props.height !== i.height) && this.setState(function(l) {
      var s = l.start, c = l.end, u = l.extent;
      if (!(u.x0 === -1 && u.x1 === -1 && u.y0 === -1 && u.y1 === -1)) {
        var d = o.props.width / i.width, h = o.props.height / i.height;
        s = {
          x: d * u.x0,
          y: h * u.y0
        }, c = {
          x: d * u.x1,
          y: h * u.y1
        }, u = o.getExtent(s, c);
      }
      return {
        start: s,
        end: c,
        extent: u,
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
    var i = this, o = this.state, l = o.start, s = o.end, c = this.props, u = c.top, d = c.left, h = c.width, m = c.height, p = c.onMouseLeave, y = c.onMouseUp, E = c.onMouseMove, g = c.onBrushEnd, f = c.onClick, x = c.resizeTriggerAreas, v = c.selectedBoxStyle, b = c.disableDraggingSelection, S = c.disableDraggingOverlay, A = c.clickSensitivity, T = c.useWindowMoveEvents, N = c.renderBrushHandle, w = this.state.brushingType, C = this.handles(), _ = this.corners(), k = this.getBrushWidth(), O = this.getBrushHeight(), K = new Set(x);
    return /* @__PURE__ */ r.createElement(be, {
      className: "visx-brush",
      top: u,
      left: d
    }, S ? /* @__PURE__ */ r.createElement(Ki, {
      width: h,
      height: m,
      onClick: function(F) {
        var H = i.mouseUpTime - i.mouseDownTime;
        f && H < A && f(F);
      },
      style: {
        cursor: "default"
      }
    }) : /* @__PURE__ */ r.createElement(zr, {
      width: h,
      height: m,
      resetOnStart: !0,
      onDragStart: this.handleDragStart,
      onDragMove: this.handleDragMove,
      onDragEnd: this.handleDragEnd,
      isDragging: T ? w === "select" : void 0
    }, function(V) {
      var F = V.dragStart, H = V.isDragging, Y = V.dragMove, z = V.dragEnd;
      return /* @__PURE__ */ r.createElement(Ki, {
        width: h,
        height: m,
        onDoubleClick: function() {
          return i.reset();
        },
        onClick: function(B) {
          var j = i.mouseUpTime - i.mouseDownTime;
          f && j < A && f(B);
        },
        onPointerDown: function(B) {
          i.mouseDownTime = Date.now(), F(B);
        },
        onPointerLeave: function(B) {
          p && p(B);
        },
        onPointerMove: function(B) {
          !H && E && E(B), H && Y(B);
        },
        onPointerUp: function(B) {
          i.mouseUpTime = Date.now(), y && y(B), z(B);
        },
        style: {
          cursor: "crosshair"
        }
      });
    }), l && s && /* @__PURE__ */ r.createElement(_o, {
      updateBrush: this.updateBrush,
      width: k,
      height: O,
      stageWidth: h,
      stageHeight: m,
      brush: this.state,
      disableDraggingSelection: b,
      onBrushEnd: g,
      onBrushStart: this.handleBrushStart,
      onMouseLeave: p,
      onMouseMove: E,
      onMouseUp: y,
      onMoveSelectionChange: this.handleBrushingTypeChange,
      onClick: f,
      selectedBoxStyle: v,
      isControlled: T,
      isDragInProgress: T ? w === "move" : void 0
    }), l && s && Object.keys(C).filter(function(V) {
      return K.has(V);
    }).map(function(V) {
      var F = C[V];
      return F && /* @__PURE__ */ r.createElement(Tu, {
        key: "handle-" + V,
        type: V,
        handle: F,
        stageWidth: h,
        stageHeight: m,
        updateBrush: i.updateBrush,
        brush: i.state,
        onBrushStart: i.handleBrushStart,
        onBrushEnd: g,
        isControlled: T,
        isDragInProgress: T ? w === V : void 0,
        onBrushHandleChange: i.handleBrushingTypeChange,
        renderBrushHandle: N
      });
    }), l && s && Object.keys(_).filter(function(V) {
      return K.has(V);
    }).map(function(V) {
      var F = _[V];
      return F && /* @__PURE__ */ r.createElement(Oo, {
        key: "corner-" + V,
        type: V,
        brush: i.state,
        updateBrush: i.updateBrush,
        stageWidth: h,
        stageHeight: m,
        corner: F,
        onBrushEnd: g
      });
    }));
  }, t;
}(r.Component);
Do.propTypes = {
  brushDirection: R.oneOf(["horizontal", "vertical", "both"]),
  width: R.number.isRequired,
  height: R.number.isRequired,
  left: R.number.isRequired,
  top: R.number.isRequired,
  onChange: R.func,
  handleSize: R.number,
  resizeTriggerAreas: R.array,
  onBrushStart: R.func,
  onBrushEnd: R.func,
  onMouseLeave: R.func,
  onMouseUp: R.func,
  onMouseMove: R.func,
  onClick: R.func,
  clickSensitivity: R.number,
  disableDraggingSelection: R.bool,
  disableDraggingOverlay: R.bool,
  resetOnEnd: R.bool,
  useWindowMoveEvents: R.bool,
  renderBrushHandle: R.func
};
Do.defaultProps = {
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
function zg(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ji(e, t);
}
function ji(e, t) {
  return ji = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, i) {
    return a.__proto__ = i, a;
  }, ji(e, t);
}
var Ss = 2, Ts = "steelblue", Mo = /* @__PURE__ */ function(e) {
  zg(t, e);
  function t() {
    for (var a, i = arguments.length, o = new Array(i), l = 0; l < i; l++)
      o[l] = arguments[l];
    return a = e.call.apply(e, [this].concat(o)) || this, a.handleChange = function(s) {
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
        var u = s.x, d = s.y, h = a.props, m = h.xScale, p = h.yScale, y = Tr(m, u), E = Tr(p, d);
        c({
          x: "invert" in m && typeof m.invert < "u" ? y : m.domain()[y],
          y: "invert" in p && typeof p.invert < "u" ? E : p.domain()[E]
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
    var o = this.props, l = o.xScale, s = o.yScale, c = i.extent, u = c.x0, d = c.x1, h = c.y0, m = c.y1, p = As(l, u || 0, d || 0, Ss), y = As(s, h || 0, m || 0, Ss), E = {
      x0: p.start || 0,
      x1: p.end || 0,
      xValues: p.values,
      y0: y.start || 0,
      y1: y.end || 0,
      yValues: y.values
    };
    return E;
  }, n.render = function() {
    var i = this.props, o = i.xScale, l = i.yScale, s = i.height, c = i.width, u = i.margin, d = i.brushDirection, h = i.initialBrushPosition, m = i.innerRef, p = i.resizeTriggerAreas, y = i.brushRegion, E = i.yAxisOrientation, g = i.xAxisOrientation, f = i.selectedBoxStyle, x = i.disableDraggingSelection, v = i.disableDraggingOverlay, b = i.resetOnEnd, S = i.onMouseLeave, A = i.onMouseMove, T = i.onClick, N = i.handleSize, w = i.useWindowMoveEvents, C = i.renderBrushHandle;
    if (!o || !l)
      return null;
    var _, k, O, K, V = u != null && u.left ? u.left : 0, F = u != null && u.top ? u.top : 0, H = u != null && u.right ? u.right : 0, Y = u != null && u.bottom ? u.bottom : 0;
    return y === "chart" ? (O = 0, K = 0, _ = c, k = s) : y === "yAxis" ? (K = 0, k = s, E === "right" ? (O = c, _ = H) : (O = -V, _ = V)) : (O = 0, _ = c, g === "bottom" ? (K = s, k = Y) : (K = -F, k = F)), /* @__PURE__ */ r.createElement(Do, {
      width: _,
      height: k,
      left: O,
      top: K,
      brushDirection: d,
      disableDraggingSelection: x,
      disableDraggingOverlay: v,
      handleSize: N,
      inheritedMargin: u,
      initialBrushPosition: h,
      ref: m,
      resetOnEnd: b,
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
}($.Component);
Mo.propTypes = {
  height: R.number,
  width: R.number,
  onChange: R.func,
  onBrushEnd: R.func,
  brushDirection: R.oneOf(["vertical", "horizontal", "both"]),
  resizeTriggerAreas: R.array,
  brushRegion: R.oneOf(["xAxis", "yAxis", "chart"]),
  yAxisOrientation: R.oneOf(["left", "right"]),
  xAxisOrientation: R.oneOf(["top", "bottom"]),
  disableDraggingSelection: R.bool,
  disableDraggingOverlay: R.bool,
  resetOnEnd: R.bool,
  handleSize: R.number,
  useWindowMoveEvents: R.bool,
  renderBrushHandle: R.func
};
Mo.defaultProps = {
  xScale: null,
  yScale: null,
  onChange: null,
  height: 0,
  width: 0,
  selectedBoxStyle: {
    fill: Ts,
    fillOpacity: 0.2,
    stroke: Ts,
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
const Rg = Mo, Fg = (e) => {
  const { transformedData: t, config: n, parseDate: a, formatDate: i, updateConfig: o } = $.useContext(Me), { fontSize: l } = va(), [s, c] = $.useState([...t]), u = $.useRef(null), d = 15, [h, m] = $.useState({
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
  }, E = (f) => {
    var N;
    if (!f)
      return;
    const { xValues: x } = f, v = (N = n.xAxis) == null ? void 0 : N.dataKey, b = t.filter((w) => x.includes(w[v])), S = x.slice().reverse().find((w) => w !== void 0), A = x.find((w) => w !== void 0), T = (w) => n.runtime.xAxis.type === "date" ? i(a(w)) : w;
    m((w) => {
      var C, _;
      return {
        ...w,
        startPosition: (C = u.current) == null ? void 0 : C.state.start.x,
        endPosition: (_ = u.current) == null ? void 0 : _.state.end.x,
        endValue: T(S),
        startValue: T(A)
      };
    }), c(b);
  };
  $.useEffect(() => {
    o({
      ...n,
      brush: {
        ...n.brush,
        data: s
      }
    });
  }, [s]), $.useEffect(() => {
    n.brush.active || c(t);
  }, [n.brush.active]);
  const g = () => {
    const f = Number(n.xAxis.tickRotation) > 0 ? Number(n.xAxis.tickRotation) : 0;
    let x = 0;
    const v = 20;
    return n.xAxis.label || (!n.isResponsiveTicks && f && (x = Number(f + n.xAxis.tickWidthMax) / 1.6), !n.isResponsiveTicks && !f && (x = Number(n.xAxis.labelOffset) - v), n.isResponsiveTicks && n.dynamicMarginTop && (x = Number(n.xAxis.labelOffset + n.xAxis.tickWidthMax / 1.6)), n.isResponsiveTicks && !n.dynamicMarginTop && (x = Number(n.xAxis.labelOffset - v))), n.xAxis.label && (!n.isResponsiveTicks && f && (x = Number(n.xAxis.tickWidthMax + f)), !n.isResponsiveTicks && !f && (x = n.xAxis.labelOffset + v), n.isResponsiveTicks && !f && (x = Number(n.dynamicMarginTop ? n.dynamicMarginTop : n.xAxis.labelOffset) + v)), x;
  };
  if (["Line", "Bar", "Area Chart", "Combo"].includes(n.visualizationType))
    return /* @__PURE__ */ r.createElement(be, { display: n.brush.active ? "block" : "none", top: Number(e.yMax) + g(), left: Number(n.runtime.yAxis.size), pointerEvents: "fill" }, /* @__PURE__ */ r.createElement("rect", { fill: "#eee", width: e.xMax, height: n.brush.height, rx: d }), /* @__PURE__ */ r.createElement(
      Rg,
      {
        renderBrushHandle: (f) => {
          var x;
          return /* @__PURE__ */ r.createElement(Bg, { textProps: h, fontSize: l[n.fontSize], ...f, isBrushing: (x = u.current) == null ? void 0 : x.state.isBrushing });
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
        onChange: E
      }
    ));
}, Bg = (e) => {
  const { x: t, isBrushActive: n, isBrushing: a, className: i, textProps: o } = e, l = 8;
  if (!n)
    return null;
  const s = i.includes("left"), c = s ? "scale(-1, 1)" : "translate(0,0)", u = s ? "end" : "start";
  return /* @__PURE__ */ r.createElement(be, { left: t + l / 2, top: -2 }, /* @__PURE__ */ r.createElement(Fe, { pointerEvents: "visiblePainted", dominantBaseline: "hanging", x: 0, verticalAnchor: "start", textAnchor: u, fontSize: e.fontSize / 1.4, dy: 10, y: 15 }, s ? o.startValue : o.endValue), /* @__PURE__ */ r.createElement("path", { cursor: "ew-resize", d: "M0.5,10A6,6 0 0 1 6.5,16V14A6,6 0 0 1 0.5,20ZM2.5,18V12M4.5,18V12", fill: a ? "#297EF1" : "#666", strokeWidth: "1", transform: c }));
}, Kt = (e) => {
  var at, bt, Et;
  const {
    isEditor: t,
    isDashboard: n,
    computeMarginBottom: a,
    transformedData: i,
    dimensions: o,
    config: l,
    parseDate: s,
    formatDate: c,
    currentViewport: u,
    formatNumber: d,
    handleChartAriaLabels: h,
    updateConfig: m,
    handleLineType: p,
    rawData: y,
    capitalize: E,
    setSharedFilter: g,
    setSharedFilterValue: f,
    getTextWidth: x,
    isDebug: v
  } = $.useContext(Me), { visualizationType: b, visualizationSubType: S, orientation: A, xAxis: T, yAxis: N, runtime: w, debugSvg: C } = l;
  let [_] = o;
  l && l.legend && !l.legend.hide && l.legend.position !== "bottom" && ["lg", "md"].includes(u) && (_ = _ * 0.73);
  const { horizontal: k } = l.heights, O = A === "horizontal" || l.visualizationType === "Forest Plot", K = !0;
  let V = l.aspectRatio ? _ * l.aspectRatio : l.visualizationType === "Forest Plot" ? l.heights.vertical : l.heights[A];
  const F = _ - w.yAxis.size - (b === "Combo" ? l.yAxis.rightAxisSize : 0);
  let H = V - (A === "horizontal" ? 0 : w.xAxis.size);
  l.visualizationType === "Forest Plot" && (V = V + l.data.length * l.forestPlot.rowHeight, H = H + l.data.length * l.forestPlot.rowHeight, _ = o[0]), l.brush.active && (V = V + l.brush.height);
  const { minValue: Y, maxValue: z, existPositiveValue: q, isAllLine: B } = $r(l, i), { visSupportsReactTooltip: j } = Ea(), { hasTopAxis: U } = hg(l), [X, ne] = $.useState(!1), [ce, we] = $.useState({ x: 0, y: 0 }), Ce = $.useRef(), G = $.useRef(), W = po(Ce, {
    freezeOnceVisible: !1
  }), ae = (Q) => l.runtime.xAxis.type === "date" ? s(Q[l.runtime.originalXAxis.dataKey]).getTime() : Q[l.runtime.originalXAxis.dataKey], D = (Q, le) => Q[le], ue = l.brush.active && ((at = l.brush.data) != null && at.length) ? l.brush.data.map((Q) => ae(Q)) : i.map((Q) => ae(Q)), oe = l.orientation === "horizontal" || l.visualizationType === "Forest Plot" ? "yAxis" : "xAxis", ye = { data: i, config: l, minValue: Y, maxValue: z, isAllLine: B, existPositiveValue: q, xAxisDataMapped: ue, xMax: F, yMax: H }, { min: he, max: Ee, leftMax: Ne, rightMax: ke } = Eu(ye), { yScaleRight: Se, hasRightAxis: xe } = Eo({ config: l, yMax: H, data: i, updateConfig: m }), { xScale: re, yScale: J, seriesScale: He, g1xScale: fe, g2xScale: Le, xScaleNoPadding: Oe, xScaleBrush: je } = ug({ ...ye, min: he, max: Ee, leftMax: Ne, rightMax: ke, dimensions: o }), [Ie, Ue] = $.useState(null);
  $.useEffect(() => {
    var Q;
    Ue((Q = G == null ? void 0 : G.current) == null ? void 0 : Q.getBoundingClientRect());
  }, [G, l.legend]);
  const ct = (Q, le) => {
    if (l.useLogScale && Q === 0.1 && (Q = 0), !(l.data && !l.data[le] && b === "Forest Plot"))
      return l.visualizationType === "Forest Plot" ? l.data[le][l.xAxis.dataKey] : w.yAxis.type === "date" ? c(s(Q)) : A === "vertical" ? d(Q, "left", K) : Q;
  }, et = (Q) => (l.useLogScale && Q === 0.1 && (Q = 0), w.xAxis.type === "date" && l.visualizationType !== "Forest Plot" ? c(Q) : A === "horizontal" && l.visualizationType !== "Forest Plot" ? d(Q, "left", K) : l.xAxis.type === "continuous" && l.visualizationType !== "Forest Plot" ? d(Q, "bottom", K) : l.visualizationType === "Forest Plot" ? d(Q, "left", l.dataFormat.abbreviated, l.runtime.xAxis.prefix, l.runtime.xAxis.suffix, Number(l.dataFormat.roundTo)) : Q), te = (Q) => {
    const { numTicks: le } = w[Q];
    let Pe;
    return Q === "yAxis" && (Pe = O && !le ? i.length : O && le ? le : !O && !le ? void 0 : !O && le && le, Pe === void 0 && !l.dataFormat.roundTo && (Number(Ee) <= 3 ? Pe = 2 : Pe = 4), Number(Pe) > Number(Ee) && (Pe = Number(he) < 0 ? Math.round(Ee) * 2 : Math.round(Ee))), Q === "xAxis" && (Pe = O && !le ? void 0 : O && le ? le : !O && !le ? void 0 : !O && le && le, O && Pe === void 0 && !l.dataFormat.roundTo && (Ee <= 3 ? Pe = 2 : Pe = 4), l.visualizationType === "Forest Plot" && (Pe = l.yAxis.numTicks !== "" ? l.yAxis.numTicks : 4)), Pe;
  }, { tooltipData: ze, showTooltip: Ve, hideTooltip: Pt, tooltipOpen: Nt, tooltipLeft: kt, tooltipTop: Yt } = Uc(), {
    handleTooltipMouseOver: tt,
    handleTooltipClick: vt,
    handleTooltipMouseOff: $e,
    tooltipStyles: P,
    TooltipListItem: ie,
    getXValueFromCoordinateDate: pe,
    getXValueFromCoordinate: se
  } = Gc({
    xScale: re,
    yScale: J,
    showTooltip: Ve,
    hideTooltip: Pt
  });
  $.useEffect(() => {
    document.querySelector(".isEditor") && ne((le) => !0);
  }), $.useEffect(() => {
    (W == null ? void 0 : W.isIntersecting) === !0 && l.animate && setTimeout(() => {
      ne((Q) => !0);
    }, 500);
  }, [W == null ? void 0 : W.isIntersecting, l.animate]);
  const Ae = () => {
    const { visualizationType: Q } = l;
    return Q === "Combo" && w.forecastingSeriesKeys > 0 || Q === "Area Chart" || Q === "Line" || Q === "Bar";
  }, ve = Number(A === "horizontal" ? l.xAxis.size : l.yAxis.size), me = () => l.visualizationType === "Forest Plot" ? l.data.length : te("yAxis"), Ye = (Q) => {
    const le = Q.currentTarget.getBoundingClientRect(), Pe = Q.clientX - le.left, ge = Q.clientY - le.top;
    we({
      x: Pe,
      y: ge
    });
  };
  return isNaN(_) ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement(Bt, { component: "LinearChart" }, /* @__PURE__ */ r.createElement("div", { style: { width: `${_}px`, height: `${V}px`, overflow: "visible" }, className: "tooltip-boundary" }, /* @__PURE__ */ r.createElement(
    "svg",
    {
      onMouseMove: Ye,
      width: "100%",
      height: "100%",
      className: `linear ${l.animate ? "animated" : ""} ${X && l.animate ? "animate" : ""} ${C && "debug"}`,
      role: "img",
      "aria-label": h(l),
      ref: G,
      style: { overflow: "visible" }
    },
    /* @__PURE__ */ r.createElement(_t, { width: _, height: V, fill: "transparent" }),
    " ",
    !["Spark Line", "Forest Plot"].includes(b) && /* @__PURE__ */ r.createElement(vy, { scale: J, tickLength: l.useLogScale ? 6 : 8, left: Number(w.yAxis.size) - l.yAxis.axisPadding, label: ((bt = w.yAxis.yAxis) == null ? void 0 : bt.label) || w.yAxis.label, stroke: "#333", tickFormat: (Q, le) => ct(Q, le), numTicks: me() }, (Q) => {
      const le = l.orientation === "horizontal" ? (Q.axisToPoint.y - Q.axisFromPoint.y) / 2 : (Q.axisFromPoint.y - Q.axisToPoint.y) / 2, Pe = H / Q.ticks.length / 2 - H / Q.ticks.length * (1 - l.barThickness) + 5;
      return /* @__PURE__ */ r.createElement(be, { className: "left-axis" }, Q.ticks.map((ge, nt) => {
        const mt = Q.ticks[0].to.y, Ge = 15, At = String(ge.value).startsWith("1") || ge.value === 0.1 ? "block" : "none", ft = At === "block" ? 7 : 0, Lt = { x: ge.to.x - ft, y: ge.to.y };
        return /* @__PURE__ */ r.createElement(be, { key: `vx-tick-${ge.value}-${nt}`, className: "vx-axis-tick" }, !w.yAxis.hideTicks && /* @__PURE__ */ r.createElement(qe, { key: `${ge.value}--hide-hideTicks`, from: ge.from, to: l.useLogScale ? Lt : ge.to, stroke: l.yAxis.tickColor, display: A === "horizontal" ? "none" : "block" }), w.yAxis.gridLines ? /* @__PURE__ */ r.createElement(qe, { key: `${ge.value}--hide-hideGridLines`, display: (l.useLogScale && At).toString(), from: { x: ge.from.x + F, y: ge.from.y }, to: ge.from, stroke: "rgba(0,0,0,0.3)" }) : "", A === "horizontal" && S !== "stacked" && l.yAxis.labelPlacement === "On Date/Category Axis" && !l.yAxis.hideLabel && /* @__PURE__ */ r.createElement(
          Fe,
          {
            transform: `translate(${ge.to.x - 5}, ${l.isLollipopChart ? ge.to.y - mt : ge.to.y - mt + (Number(l.barHeight * l.series.length) - Ge) / 2}) rotate(-${l.runtime.horizontal && l.runtime.yAxis.tickRotation || 0})`,
            verticalAnchor: "start",
            textAnchor: "end"
          },
          ge.formattedValue
        ), A === "horizontal" && S === "stacked" && l.yAxis.labelPlacement === "On Date/Category Axis" && !l.yAxis.hideLabel && /* @__PURE__ */ r.createElement(Fe, { transform: `translate(${ge.to.x - 5}, ${ge.to.y - mt + (Number(l.barHeight) - Ge) / 2}) rotate(-${w.horizontal ? w.yAxis.tickRotation : 0})`, verticalAnchor: "start", textAnchor: "end" }, ge.formattedValue), A === "horizontal" && b === "Paired Bar" && !l.yAxis.hideLabel && /* @__PURE__ */ r.createElement(Fe, { transform: `translate(${ge.to.x - 5}, ${ge.to.y - mt + Number(l.barHeight) / 2}) rotate(-${w.horizontal ? w.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, ge.formattedValue), A === "horizontal" && b === "Deviation Bar" && !l.yAxis.hideLabel && /* @__PURE__ */ r.createElement(Fe, { transform: `translate(${ge.to.x - 5}, ${l.isLollipopChart ? ge.to.y - mt + 2 : ge.to.y - mt + Number(l.barHeight) / 2}) rotate(-${w.horizontal ? w.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, ge.formattedValue), A === "vertical" && b !== "Paired Bar" && !l.yAxis.hideLabel && /* @__PURE__ */ r.createElement(
          Fe,
          {
            display: l.useLogScale ? At : "block",
            dx: l.useLogScale ? -6 : 0,
            x: l.runtime.horizontal ? ge.from.x + 2 : ge.to.x,
            y: ge.to.y + (l.runtime.horizontal ? Pe : 0),
            angle: -Number(l.yAxis.tickRotation) || 0,
            verticalAnchor: l.runtime.horizontal ? "start" : "middle",
            textAnchor: l.runtime.horizontal ? "start" : "end",
            fill: l.yAxis.tickLabelColor
          },
          ge.formattedValue
        ));
      }), !l.yAxis.hideAxis && /* @__PURE__ */ r.createElement(qe, { from: Q.axisFromPoint, to: w.horizontal ? { x: 0, y: l.visualizationType === "Forest Plot" ? V : Number(k) } : Q.axisToPoint, stroke: "#000" }), J.domain()[0] < 0 && /* @__PURE__ */ r.createElement(qe, { from: { x: Q.axisFromPoint.x, y: J(0) }, to: { x: F, y: J(0) }, stroke: "#333" }), b === "Bar" && A === "horizontal" && re.domain()[0] < 0 && /* @__PURE__ */ r.createElement(qe, { from: { x: re(0), y: 0 }, to: { x: re(0), y: H }, stroke: "#333", strokeWidth: 2 }), /* @__PURE__ */ r.createElement(Fe, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${-1 * w.yAxis.size}, ${le}) rotate(-90)`, fontWeight: "bold", fill: l.yAxis.labelColor }, Q.label));
    }),
    xe && /* @__PURE__ */ r.createElement(Sy, { scale: Se, left: Number(_ - l.yAxis.rightAxisSize), label: l.yAxis.rightLabel, tickFormat: (Q) => d(Q, "right"), numTicks: w.yAxis.rightNumTicks || void 0, labelOffset: 45 }, (Q) => {
      const le = l.orientation === "horizontal" ? (Q.axisToPoint.y - Q.axisFromPoint.y) / 2 : (Q.axisFromPoint.y - Q.axisToPoint.y) / 2, Pe = H / Q.ticks.length / 2 - H / Q.ticks.length * (1 - l.barThickness) + 5;
      return /* @__PURE__ */ r.createElement(be, { className: "right-axis" }, Q.ticks.map((ge, nt) => /* @__PURE__ */ r.createElement(be, { key: `vx-tick-${ge.value}-${nt}`, className: "vx-axis-tick" }, !w.yAxis.rightHideTicks && /* @__PURE__ */ r.createElement(qe, { from: ge.from, to: ge.to, display: w.horizontal ? "none" : "block", stroke: l.yAxis.rightAxisTickColor }), w.yAxis.rightGridLines ? /* @__PURE__ */ r.createElement(qe, { from: { x: ge.from.x + F, y: ge.from.y }, to: ge.from, stroke: "rgba(0,0,0,0.3)" }) : "", !l.yAxis.rightHideLabel && /* @__PURE__ */ r.createElement(Fe, { x: ge.to.x, y: ge.to.y + (w.horizontal ? Pe : 0), verticalAnchor: w.horizontal ? "start" : "middle", textAnchor: "start", fill: l.yAxis.rightAxisTickLabelColor }, ge.formattedValue))), !l.yAxis.rightHideAxis && /* @__PURE__ */ r.createElement(qe, { from: Q.axisFromPoint, to: Q.axisToPoint, stroke: "#333" }), /* @__PURE__ */ r.createElement(Fe, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${l.yAxis.rightLabelOffsetSize ? l.yAxis.rightLabelOffsetSize : 0}, ${le}) rotate(-90)`, fontWeight: "bold", fill: l.yAxis.rightAxisLabelColor }, Q.label));
    }),
    U && l.topAxis.hasLine && /* @__PURE__ */ r.createElement(
      Cy,
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
    b !== "Paired Bar" && b !== "Spark Line" && /* @__PURE__ */ r.createElement(
      Ia,
      {
        top: w.horizontal && l.visualizationType !== "Forest Plot" ? Number(k) + Number(l.xAxis.axisPadding) : (l.visualizationType === "Forest Plot", H + Number(l.xAxis.axisPadding)),
        left: l.visualizationType !== "Forest Plot" ? Number(w.yAxis.size) : 0,
        label: w.xAxis.label,
        tickFormat: et,
        scale: re,
        stroke: "#333",
        numTicks: te("xAxis"),
        tickStroke: "#333"
      },
      (Q) => {
        const le = l.visualizationType !== "Forest Plot" ? (Q.axisToPoint.x - Q.axisFromPoint.x) / 2 : o[0] / 2, Pe = (_e) => /\s/.test(_e), ge = Q.ticks.some((_e) => Pe(_e.value)), nt = { small: 16, medium: 18, large: 20 }, mt = 8, Ge = Math.max(...Q.ticks.map((_e) => x(_e.formattedValue, `normal ${nt[l.fontSize]}px sans-serif`))), At = ge ? 180 : 100, ft = Q.ticks.map((_e) => x(_e.formattedValue, `normal ${nt[l.fontSize]}px sans-serif`)), Lt = ft.reduce((_e, ht) => _e + ht, At), Xt = (F - Lt) / (Q.ticks.length - 1);
        let Je = [0];
        for (let _e = 1; _e < ft.length; _e++)
          Je[_e] = Je[_e - 1] + ft[_e - 1] + Xt;
        let ut = !1;
        ft.forEach((_e, ht) => {
          if (Je[ht] + ft[ht] > Je[ht + 1]) {
            ut = !0;
            return;
          }
        });
        const yt = ut && l.isResponsiveTicks ? Ge + mt + 20 : 0, Jt = Number(l.xAxis.tickRotation) > 0 ? Number(l.xAxis.tickRotation) : 0;
        return l.dynamicMarginTop = yt, l.xAxis.tickWidthMax = Ge, /* @__PURE__ */ r.createElement(be, { className: "bottom-axis", width: o[0] }, Q.ticks.map((_e, ht, Aa) => {
          const Pn = String(_e.value).startsWith("1") || _e.value === 0.1 ? "block" : "none", Sa = Pn === "block" ? 16 : mt, Ta = { x: _e.to.x, y: Sa };
          let ka = x(_e.formattedValue, `normal ${nt[l.fontSize]}px sans-serif`), Rr = 100 / Aa.length;
          l.yAxis.tickRotation = l.isResponsiveTicks && l.orientation === "horizontal" ? 0 : l.yAxis.tickRotation, l.xAxis.tickRotation = l.isResponsiveTicks && l.orientation === "vertical" ? 0 : l.xAxis.tickRotation;
          const jn = l.isResponsiveTicks && ut ? -Number(l.xAxis.maxTickRotation) || -90 : -Number(l.runtime.xAxis.tickRotation);
          return /* @__PURE__ */ r.createElement(be, { key: `vx-tick-${_e.value}-${ht}`, className: "vx-axis-tick" }, !l.xAxis.hideTicks && /* @__PURE__ */ r.createElement(qe, { from: _e.from, to: A === "horizontal" && l.useLogScale ? Ta : _e.to, stroke: l.xAxis.tickColor, strokeWidth: Pn === "block" && l.useLogScale ? 1.3 : 1 }), !l.xAxis.hideLabel && /* @__PURE__ */ r.createElement(
            Fe,
            {
              dy: l.orientation === "horizontal" && l.useLogScale ? 8 : 0,
              display: l.orientation === "horizontal" && l.useLogScale ? Pn : "block",
              x: _e.to.x,
              y: _e.to.y,
              angle: jn,
              verticalAnchor: jn < -50 ? "middle" : "start",
              textAnchor: jn ? "end" : "middle",
              width: ut && !l.isResponsiveTicks && !Number(l[oe].tickRotation) ? Rr : ka,
              fill: l.xAxis.tickLabelColor
            },
            _e.formattedValue
          ));
        }), !l.xAxis.hideAxis && /* @__PURE__ */ r.createElement(qe, { from: Q.axisFromPoint, to: Q.axisToPoint, stroke: "#333" }), /* @__PURE__ */ r.createElement(
          Fe,
          {
            x: le,
            y: l.visualizationType === "Forest Plot" ? l.xAxis.tickWidthMax + 40 : l.orientation === "horizontal" ? yt || l.xAxis.labelOffset : l.isResponsiveTicks && yt && !O ? yt : Number(Jt) && !l.isResponsiveTicks && !O ? Number(Jt + Ge / 1.3) : Number(l.xAxis.labelOffset),
            textAnchor: "middle",
            verticalAnchor: "start",
            fontWeight: "bold",
            fill: l.xAxis.labelColor
          },
          Q.label
        ));
      }
    ),
    b === "Paired Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Ia, { top: H, left: Number(w.yAxis.size), label: w.xAxis.label, tickFormat: w.xAxis.type === "date" ? c : d, scale: fe, stroke: "#333", tickStroke: "#333", numTicks: w.xAxis.numTicks || void 0 }, (Q) => /* @__PURE__ */ r.createElement(be, { className: "bottom-axis" }, Q.ticks.map((le, Pe) => {
      const ge = le.index !== 0 ? l.yAxis.tickRotation : 0, nt = le.index !== 0 && l.yAxis.tickRotation && l.yAxis.tickRotation > 0 ? "end" : "middle";
      return /* @__PURE__ */ r.createElement(be, { key: `vx-tick-${le.value}-${Pe}`, className: "vx-axis-tick" }, !w.yAxis.hideTicks && /* @__PURE__ */ r.createElement(qe, { from: le.from, to: le.to, stroke: "#333" }), !w.yAxis.hideLabel && /* @__PURE__ */ r.createElement(Fe, { x: le.to.x, y: le.to.y, angle: -ge, verticalAnchor: "start", textAnchor: nt }, d(le.value, "left")));
    }), !w.yAxis.hideAxis && /* @__PURE__ */ r.createElement(qe, { from: Q.axisFromPoint, to: Q.axisToPoint, stroke: "#333" }))), /* @__PURE__ */ r.createElement(
      Ia,
      {
        top: H,
        left: Number(w.yAxis.size),
        label: w.xAxis.label,
        tickFormat: w.xAxis.type === "date" ? c : w.xAxis.dataKey !== "Year" ? d : (Q) => Q,
        scale: Le,
        stroke: "#333",
        tickStroke: "#333",
        numTicks: w.xAxis.numTicks || void 0
      },
      (Q) => /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(be, { className: "bottom-axis" }, Q.ticks.map((le, Pe) => {
        const ge = le.index !== 0 ? l.yAxis.tickRotation : 0, nt = le.index !== 0 && l.yAxis.tickRotation && l.yAxis.tickRotation > 0 ? "end" : "middle";
        return /* @__PURE__ */ r.createElement(be, { key: `vx-tick-${le.value}-${Pe}`, className: "vx-axis-tick" }, !w.yAxis.hideTicks && /* @__PURE__ */ r.createElement(qe, { from: le.from, to: le.to, stroke: "#333" }), !w.yAxis.hideLabel && /* @__PURE__ */ r.createElement(Fe, { x: le.to.x, y: le.to.y, angle: -ge, verticalAnchor: "start", textAnchor: nt }, d(le.value, "left")));
      }), !w.yAxis.hideAxis && /* @__PURE__ */ r.createElement(qe, { from: Q.axisFromPoint, to: Q.axisToPoint, stroke: "#333" })), /* @__PURE__ */ r.createElement(be, null, /* @__PURE__ */ r.createElement(Fe, { x: F / 2, y: l.xAxis.labelOffset, stroke: "#333", textAnchor: "middle", verticalAnchor: "start" }, w.xAxis.label)))
    )),
    b === "Deviation Bar" && ((Et = l.series) == null ? void 0 : Et.length) === 1 && /* @__PURE__ */ r.createElement(ag, { animatedChart: X, xScale: re, yScale: J, width: F, height: H }),
    b === "Paired Bar" && /* @__PURE__ */ r.createElement(cg, { originalWidth: _, width: F, height: H }),
    b === "Scatter Plot" && /* @__PURE__ */ r.createElement(
      ng,
      {
        xScale: re,
        yScale: J,
        getXAxisData: ae,
        getYAxisData: D,
        xMax: F,
        yMax: H,
        handleTooltipMouseOver: tt,
        handleTooltipMouseOff: $e,
        handleTooltipClick: vt,
        tooltipData: ze,
        showTooltip: Ve
      }
    ),
    b === "Box Plot" && /* @__PURE__ */ r.createElement(tg, { xScale: re, yScale: J }),
    (b === "Area Chart" && l.visualizationSubType === "regular" || b === "Combo") && /* @__PURE__ */ r.createElement(Uy, { xScale: re, yScale: J, yMax: H, xMax: F, chartRef: G, width: F, height: H, handleTooltipMouseOver: tt, handleTooltipMouseOff: $e, tooltipData: ze, showTooltip: Ve }),
    (b === "Area Chart" && l.visualizationSubType === "stacked" || b === "Combo") && /* @__PURE__ */ r.createElement(Xy, { xScale: re, yScale: J, yMax: H, xMax: F, chartRef: G, width: F, height: H, handleTooltipMouseOver: tt, handleTooltipMouseOff: $e, tooltipData: ze, showTooltip: Ve }),
    (b === "Bar" || b === "Combo") && /* @__PURE__ */ r.createElement(
      eg,
      {
        xScale: re,
        yScale: J,
        seriesScale: He,
        xMax: F,
        yMax: H,
        getXAxisData: ae,
        getYAxisData: D,
        animatedChart: X,
        visible: X,
        handleTooltipMouseOver: tt,
        handleTooltipMouseOff: $e,
        handleTooltipClick: vt,
        tooltipData: ze,
        showTooltip: Ve,
        chartRef: G
      }
    ),
    (b === "Line" || b === "Combo") && /* @__PURE__ */ r.createElement(
      ys,
      {
        xScale: re,
        yScale: J,
        getXAxisData: ae,
        getYAxisData: D,
        xMax: F,
        yMax: H,
        seriesStyle: l.series,
        handleTooltipMouseOver: tt,
        handleTooltipMouseOff: $e,
        handleTooltipClick: vt,
        tooltipData: ze,
        showTooltip: Ve,
        chartRef: G
      }
    ),
    (b === "Forecasting" || b === "Combo") && /* @__PURE__ */ r.createElement(
      ig,
      {
        showTooltip: Ve,
        tooltipData: ze,
        xScale: re,
        yScale: J,
        width: F,
        le: !0,
        height: H,
        xScaleNoPadding: Oe,
        chartRef: G,
        getXValueFromCoordinate: se,
        handleTooltipMouseOver: tt,
        handleTooltipMouseOff: $e,
        isBrush: !1
      }
    ),
    l.yAxis.anchors && l.yAxis.anchors.map((Q) => /* @__PURE__ */ r.createElement(qe, { strokeDasharray: p(Q.lineStyle), stroke: "rgba(0,0,0,1)", className: "customAnchor", from: { x: 0 + l.yAxis.size, y: J(Q.value) }, to: { x: F, y: J(Q.value) }, display: w.horizontal ? "none" : "block" })),
    b === "Forest Plot" && /* @__PURE__ */ r.createElement(
      sg,
      {
        xScale: re,
        yScale: J,
        seriesScale: He,
        width: _,
        height: V,
        getXAxisData: ae,
        getYAxisData: D,
        animatedChart: X,
        visible: X,
        handleTooltipMouseOver: tt,
        handleTooltipMouseOff: $e,
        handleTooltipClick: vt,
        tooltipData: ze,
        showTooltip: Ve,
        chartRef: G,
        config: l
      }
    ),
    ["Line", "Bar", "Combo", "Area Chart"].includes(l.visualizationType) && !O && /* @__PURE__ */ r.createElement(Fg, { xScaleBrush: je, yScale: J, xMax: F, yMax: H }),
    b !== "Bar" && b !== "Paired Bar" && b !== "Box Plot" && b !== "Area Chart" && b !== "Scatter Plot" && b !== "Deviation Bar" && b !== "Forecasting" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ys, { xScale: re, yScale: J, getXAxisData: ae, getYAxisData: D, xMax: F, yMax: H, seriesStyle: l.series })),
    l.yAxis.anchors && l.yAxis.anchors.map((Q, le) => {
      let Pe = J(Q.value);
      if (!Q.value)
        return;
      const ge = A === "horizontal" && b === "Bar" ? l.barHeight / 4 : 0;
      if (Pe)
        return (
          // prettier-ignore
          /* @__PURE__ */ r.createElement(
            qe,
            {
              key: `yAxis-${Q.value}--${le}`,
              strokeDasharray: p(Q.lineStyle),
              stroke: Q.color ? Q.color : "rgba(0,0,0,1)",
              className: "anchor-y",
              from: { x: 0 + ve, y: Pe - ge },
              to: { x: _ - l.yAxis.rightAxisSize, y: Pe - ge }
            }
          )
        );
    }),
    l.xAxis.anchors && l.xAxis.anchors.map((Q, le) => {
      let Pe = T;
      A === "horizontal" && (Pe = N);
      let ge = Pe.type === "date" ? re(s(Q.value, !1)) : re(Q.value);
      if (ge)
        return (
          // prettier-ignore
          /* @__PURE__ */ r.createElement(
            qe,
            {
              key: `xAxis-${Q.value}--${le}`,
              strokeDasharray: p(Q.lineStyle),
              stroke: Q.color ? Q.color : "rgba(0,0,0,1)",
              fill: Q.color ? Q.color : "rgba(0,0,0,1)",
              className: "anchor-x",
              from: { x: Number(ge) + Number(ve), y: 0 },
              to: { x: Number(ge) + Number(ve), y: H }
            }
          )
        );
    }),
    l.visualizationType !== "Bar" && l.visualizationType !== "Combo" && /* @__PURE__ */ r.createElement(bo, { xScale: re, handleTooltipClick: vt, handleTooltipMouseOff: $e, handleTooltipMouseOver: tt, showTooltip: Ve, hideTooltip: Pt, tooltipData: ze, yMax: H, width: _ }),
    Ae && Ve && ze && l.visual.verticalHoverLine && /* @__PURE__ */ r.createElement(be, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ r.createElement(qe, { from: { x: ze.dataXPosition - 10, y: 0 }, to: { x: ze.dataXPosition - 10, y: H }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" })),
    Ae && Ve && ze && l.visual.horizontalHoverLine && /* @__PURE__ */ r.createElement(be, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: l.yAxis.size ? l.yAxis.size : 0 }, /* @__PURE__ */ r.createElement(qe, { from: { x: 0, y: ze.dataYPosition }, to: { x: F, y: ze.dataYPosition }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    l.filters && l.filters.values.length === 0 && i.length === 0 && /* @__PURE__ */ r.createElement(Fe, { x: Number(l.yAxis.size) + Number(F / 2), y: V / 2 - l.xAxis.size / 2, textAnchor: "middle" }, l.chartMessage.noData),
    l.visualizationType === "Bar" && l.tooltips.singleSeries && l.visual.horizontalHoverLine && /* @__PURE__ */ r.createElement(be, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: l.yAxis.size ? l.yAxis.size : 0 }, /* @__PURE__ */ r.createElement(qe, { from: { x: 0, y: ce.y }, to: { x: F, y: ce.y }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    l.visualizationType === "Bar" && l.tooltips.singleSeries && l.visual.verticalHoverLine && /* @__PURE__ */ r.createElement(be, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ r.createElement(qe, { from: { x: ce.x, y: 0 }, to: { x: ce.x, y: H }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" }))
  ), ze && Object.entries(ze.data).length > 0 && Nt && Ve && ze.dataYPosition && ze.dataXPosition && !l.tooltips.singleSeries && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${l.tooltips.opacity / 100}) !important`), /* @__PURE__ */ r.createElement(Zc, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: kt, top: Yt }, /* @__PURE__ */ r.createElement("ul", null, typeof ze == "object" && Object.entries(ze.data).map((Q, le) => /* @__PURE__ */ r.createElement(ie, { item: Q, key: le }))))), j() && /* @__PURE__ */ r.createElement(jy, { id: `cdc-open-viz-tooltip-${w.uniqueId}`, variant: "light", arrowColor: "rgba(0,0,0,0)", className: "tooltip", style: { background: `rgba(255,255,255, ${l.tooltips.opacity / 100})`, color: "black" } }), /* @__PURE__ */ r.createElement("div", { className: "animation-trigger", ref: Ce })));
};
var Vg = ["id", "markerWidth", "markerHeight", "markerUnits", "children"];
function qi() {
  return qi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, qi.apply(this, arguments);
}
function Hg(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function ku(e) {
  var t = e.id, n = e.markerWidth, a = n === void 0 ? 3 : n, i = e.markerHeight, o = i === void 0 ? 3 : i, l = e.markerUnits, s = l === void 0 ? "userSpaceOnUse" : l, c = e.children, u = Hg(e, Vg);
  return /* @__PURE__ */ r.createElement("defs", null, /* @__PURE__ */ r.createElement("marker", qi({
    id: t,
    markerWidth: a,
    markerHeight: o,
    markerUnits: s
  }, u), c));
}
ku.propTypes = {
  id: R.string.isRequired,
  size: R.number,
  markerWidth: R.oneOfType([R.string, R.number]),
  markerHeight: R.oneOfType([R.string, R.number]),
  markerUnits: R.string,
  refX: R.oneOfType([R.string, R.number]),
  refY: R.oneOfType([R.string, R.number]),
  strokeWidth: R.number,
  children: R.node.isRequired
};
var Wg = ["id", "size", "strokeWidth"];
function Ui() {
  return Ui = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ui.apply(this, arguments);
}
function Kg(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Ig(e) {
  var t = e.id, n = e.size, a = n === void 0 ? 9 : n, i = e.strokeWidth, o = i === void 0 ? 1 : i, l = Kg(e, Wg), s = a + o * 2, c = a, u = s / 2, d = "0 0, " + a + " " + a / 2 + ", 0 " + a;
  return /* @__PURE__ */ r.createElement(ku, Ui({
    id: t,
    markerWidth: s,
    markerHeight: s,
    refX: c,
    refY: u,
    orient: "auto",
    markerUnits: "strokeWidth",
    fill: "none",
    strokeWidth: o
  }, l), /* @__PURE__ */ r.createElement("g", {
    transform: "translate(" + o + ", " + o + ")"
  }, /* @__PURE__ */ r.createElement("polyline", {
    points: d
  })));
}
const jg = (e) => {
  var _;
  const { width: t, height: n } = e, { transformedData: a, config: i, parseDate: o, formatDate: l, seriesHighlight: s, formatNumber: c, colorScale: u, handleChartAriaLabels: d } = $.useContext(Me);
  let h = t;
  const { minValue: m, maxValue: p } = $r(i, a), y = { top: 5, right: 10, bottom: 10, left: 10 }, E = n, g = h - i.runtime.yAxis.size, f = E - y.top - 20, x = (k) => i.runtime.xAxis.type === "date" ? o(k[i.runtime.originalXAxis.dataKey]).getTime() : k[i.runtime.originalXAxis.dataKey], v = (k, O) => k[O];
  let b, S;
  const { max: A, min: T } = i.runtime.yAxis, N = Number(A) >= Number(p), w = Number(T) <= Number(m);
  if (a) {
    let k = T && w ? T : m, O = A && N ? A : Number.MIN_VALUE;
    if (O === Number.MIN_VALUE && (O = p), i.runtime.yAxis.paddingPercent) {
      let V = (O - k) * i.runtime.yAxis.paddingPercent;
      k -= V, O += V;
    }
    let K = a.map((V) => x(V));
    i.runtime.horizontal ? (b = pt({
      domain: [k, O],
      range: [0, g]
    }), S = i.runtime.xAxis.type === "date" ? pt({ domain: [Math.min(...K), Math.max(...K)] }) : Dn({ domain: K, padding: 0.5 }), Dn({
      domain: i.runtime.barSeriesKeys || i.runtime.seriesKeys,
      range: [0, f]
    }), S.rangeRound([0, f])) : (k = k < 0 ? k * 1.11 : k, S = pt({
      domain: [k, O],
      range: [f - y.bottom, y.top]
    }), b = Dn({
      domain: K,
      range: [y.left, h - y.right]
    }), Dn({
      domain: i.runtime.barSeriesKeys || i.runtime.seriesKeys,
      range: [0, g]
    }));
  }
  const C = [b.domain()[0], b.domain()[b.domain().length - 1]];
  return /* @__PURE__ */ r.createElement(Bt, { component: "SparkLine" }, /* @__PURE__ */ r.createElement("svg", { role: "img", "aria-label": d(i), width: t, height: 100, className: "sparkline", tabIndex: 0 }, ((_ = i.runtime.lineSeriesKeys) == null ? void 0 : _.length) > 0 ? i.runtime.lineSeriesKeys : i.runtime.seriesKeys.map((k, O) => /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    be,
    {
      style: { width: h },
      className: "sparkline-group",
      key: `series-${k}`,
      opacity: i.legend.behavior === "highlight" && s.length > 0 && s.indexOf(k) === -1 ? 0.5 : 1,
      display: i.legend.behavior === "highlight" || s.length === 0 || s.indexOf(k) !== -1 ? "block" : "none"
    },
    a.map((K, V) => {
      let F = i.runtime.yAxis.label ? `${i.runtime.yAxis.label}: ${c(v(K, k))}` : c(v(K, k)), H = i.runtime.xAxis.label ? `${i.runtime.xAxis.label}: ${K[i.runtime.xAxis.dataKey]}` : K[i.runtime.xAxis.dataKey];
      return `${F}${H}`, i.seriesLabel && `${i.seriesLabel}${k}`, /* @__PURE__ */ r.createElement(be, { key: `series-${k}-point-${V}` }, /* @__PURE__ */ r.createElement(Fe, { display: i.labels ? "block" : "none", x: b(x(K)), y: S(v(K, k)), fill: u ? u(i.runtime.seriesLabels ? i.runtime.seriesLabels[k] : k) : "#000", textAnchor: "middle" }, c(K[k])));
    }),
    /* @__PURE__ */ r.createElement(
      Zt,
      {
        curve: Pr,
        data: a,
        x: (K) => b(x(K)),
        y: (K) => S(v(K, k)),
        stroke: u ? u(i.runtime.seriesLabels ? i.runtime.seriesLabels[k] : k) : "#000",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        markerEnd: `url(#arrow--${O})`
      }
    ),
    /* @__PURE__ */ r.createElement(
      Ig,
      {
        id: `arrow--${O}`,
        refX: 2,
        size: 6,
        markerEnd: `url(#arrow--${O})`,
        strokeOpacity: 1,
        fillOpacity: 1,
        fill: u ? u(i.runtime.seriesLabels ? i.runtime.seriesLabels[k] : k) : "#000"
      }
    )
  ), /* @__PURE__ */ r.createElement(
    Ia,
    {
      top: f + y.top,
      hideAxisLine: !0,
      hideTicks: !0,
      scale: b,
      tickValues: C,
      tickFormat: (K) => i.xAxis.type === "date" ? l(K) : null,
      stroke: "black",
      tickStroke: "black",
      tickLabelProps: () => ({
        fill: "black",
        fontSize: 11,
        textAnchor: "middle"
      })
    }
  )))));
}, qg = () => {
  const {
    config: e,
    colorScale: t,
    seriesHighlight: n,
    highlight: a,
    tableData: i,
    highlightReset: o,
    transformedData: l,
    currentViewport: s
  } = $.useContext(Me);
  if (!e.legend)
    return null;
  const c = ou(e, i, l, t);
  return !["Box Plot", "Pie"].includes(e.visualizationType) && /* @__PURE__ */ r.createElement(iu, { config: e, colorScale: t, seriesHighlight: n, highlight: a, highlightReset: o, currentViewport: s, formatLabels: c });
}, oi = {
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
}, qa = (e) => /* @__PURE__ */ $.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...e }, /* @__PURE__ */ $.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), Ug = ({ name: e }) => {
  var s, c, u, d, h;
  const { config: t, rawData: n, updateConfig: a } = $.useContext(Me);
  if (t.visualizationType !== "Forest Plot")
    return;
  const i = (m) => {
    m.orientation === "horizontal" && (m.labels = !1), m.table.show === void 0 && (m.table.show = !isDashboard), m.visualizationType === "Combo" && (m.orientation = "vertical");
  }, o = (m = !0) => {
    let p = {};
    return n.forEach((y) => {
      Object.keys(y).forEach((E) => p[E] = !0);
    }), m && Object.keys(p).forEach((y) => {
      (t.series && t.series.filter((E) => E.dataKey === y).length > 0 || t.confidenceKeys && Object.keys(t.confidenceKeys).includes(y)) && delete p[y];
    }), Object.keys(p);
  }, l = (m, p, y, E) => {
    if (m === "boxplot" && p === "legend") {
      a({
        ...t,
        [m]: {
          ...t[m],
          [p]: {
            ...t.boxplot[p],
            [y]: E
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
            [y]: E
          }
        }
      });
      return;
    }
    if (m === "forestPlot" && p) {
      let v = {
        ...t,
        [m]: {
          ...t[m],
          [p]: {
            ...t.forestPlot[p],
            [y]: E
          }
        }
      };
      a(v);
      return;
    }
    if (m === "columns" && p !== "" && y !== "") {
      a({
        ...t,
        [m]: {
          ...t[m],
          [p]: {
            ...t[m][p],
            [y]: E
          }
        }
      });
      return;
    }
    if (m === null && p === null) {
      let v = { ...t, [y]: E };
      i(v), a(v);
      return;
    }
    const g = Array.isArray(t[m]);
    let f = g ? [...t[m], E] : { ...t[m], [y]: E };
    p !== null && (g ? (f = [...t[m]], f[p] = { ...f[p], [y]: E }) : typeof E == "string" ? f[p] = E : f = { ...t[m], [p]: { ...t[m][p], [y]: E } });
    let x = { ...t, [m]: f };
    i(x), a(x);
  };
  return /* @__PURE__ */ r.createElement(it, null, /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(lt, null, e, (!t.forestPlot.estimateField || !t.forestPlot.upper || !t.forestPlot.lower) && /* @__PURE__ */ r.createElement(qa, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement(
    De,
    {
      value: t.xAxis.dataKey || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Study Column",
      initial: "Select",
      required: !0,
      updateField: l,
      options: o(!1),
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
    }
  ), /* @__PURE__ */ r.createElement(
    De,
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
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "Linear - Typically used for continuous outcomes. Line of no effect is positioned on 0 (zero) ", /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("br", null), " Logarithmic - Typically used for binary outcomes such as risk ratios and odds ratios. Line of no effect is positioned on 1.")))
    }
  ), /* @__PURE__ */ r.createElement(de, { type: "text", value: ((s = t.forestPlot) == null ? void 0 : s.title) || "", updateField: l, section: "forestPlot", fieldName: "title", label: "Plot Title" }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", null, "Column Settings"), /* @__PURE__ */ r.createElement(
    De,
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
      options: o(!1)
    }
  ), /* @__PURE__ */ r.createElement(
    De,
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
    De,
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
      options: o(!1)
    }
  ), /* @__PURE__ */ r.createElement(
    De,
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
      options: o(!1)
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
  ))), /* @__PURE__ */ r.createElement(Te, { value: ((u = (c = t.forestPlot) == null ? void 0 : c.lineOfNoEffect) == null ? void 0 : u.show) || !1, section: "forestPlot", subsection: "lineOfNoEffect", fieldName: "show", label: "Show Line of No Effect", updateField: l }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", null, "Width Settings"), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Left (%)"), /* @__PURE__ */ r.createElement(
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
  )), /* @__PURE__ */ r.createElement(de, { type: "number", min: 20, max: 45, value: t.forestPlot.rowHeight ? t.forestPlot.rowHeight : 10, updateField: l, section: "forestPlot", fieldName: "rowHeight", label: "Row Height", placeholder: "10" }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", null, "Labels Settings"), /* @__PURE__ */ r.createElement(de, { type: "text", value: ((d = t.forestPlot) == null ? void 0 : d.leftLabel) || "", updateField: l, section: "forestPlot", fieldName: "leftLabel", label: "Left Label" }), /* @__PURE__ */ r.createElement(de, { type: "text", value: ((h = t.forestPlot) == null ? void 0 : h.rightLabel) || "", updateField: l, section: "forestPlot", fieldName: "rightLabel", label: "Right Label" }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement(
    De,
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
      options: o(!1)
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
}, In = r.createContext(), Yg = (e) => {
  const { updateConfig: t, config: n, rawData: a } = $.useContext(Me), { getColumns: i, selectComponent: o } = e, l = ["Line", "dashed-sm", "dashed-md", "dashed-lg"], s = (c, u, d) => {
    let h = [...n.series];
    if (h[c][d] = u, d === "type" && u === "Bar" && (h[c].axis = "Left"), h[c].type === "Forecasting") {
      let m = Array.from(new Set(a.map((y) => y[h[c].dataKey]))), p = [];
      m.forEach((y) => {
        p.push({ key: y });
      }), h[c].stages = p, h[c].stageColumn = h[c].dataKey;
    }
    t({ ...n, series: h });
  };
  return /* @__PURE__ */ r.createElement(In.Provider, { value: { updateSeries: s, supportedRightAxisTypes: l, getColumns: i, selectComponent: o } }, e.children);
}, Xg = (e) => {
  const { config: t, updateConfig: n } = $.useContext(Me), { series: a, index: i } = e;
  if (!(() => {
    let c = !1;
    return t.visualizationSubType === "stacked" || ["Line", "dashed-sm", "dashed-md", "dashed-lg", "Area Chart"].some((d) => d.includes(a.type)) && (c = !0), c;
  })())
    return;
  const l = (c, u) => {
    let d = [...t.series];
    d[c].lineType = u, n({ ...t, series: d });
  };
  let s = [];
  return Object.keys(Sr).map((c) => s.push(Sr[c])), /* @__PURE__ */ r.createElement(
    ln,
    {
      initial: "Select an option",
      value: a.lineType ? a.lineType : "curveLinear",
      label: "Series Line Type",
      onChange: (c) => {
        l(i, c.target.value);
      },
      options: s
    }
  );
}, Qg = (e) => {
  const { config: t } = $.useContext(Me), { updateSeries: n } = $.useContext(In), { index: a, series: i } = e, o = () => {
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
      ln,
      {
        initial: "Select an option",
        value: i.type,
        label: "Series Type",
        onChange: (l) => {
          n(a, l.target.value, "type");
        },
        options: o()
      }
    );
}, Zg = (e) => {
  const { config: t, updateConfig: n, rawData: a } = $.useContext(Me), { updateSeries: i, getColumns: o } = $.useContext(In), { index: l, series: s } = e;
  return /* @__PURE__ */ r.createElement(
    ln,
    {
      initial: "Select an option",
      value: s.stageColumn,
      label: "Add Forecasting Stages",
      onChange: (c) => {
        let u = [], d = new Set(a == null ? void 0 : a.map((m) => m[c.target.value]));
        d = Array.from(d), d = d.filter((m) => m !== void 0), d.forEach((m) => u.push({ key: m }));
        const h = [...t.series];
        h[l] = { ...h[l], stages: u, stageColumn: c.target.value }, n({
          ...t,
          series: h
        });
      },
      options: o(!1)
    }
  );
}, Gg = (e) => {
  const { config: t, rawData: n } = $.useContext(Me), { updateSeries: a } = $.useContext(In), { index: i, series: o } = e;
  if (o.type !== "Forecasting" || !n || !o.stageColumn)
    return;
  let l = new Set(n.map((s) => s[o.stageColumn]));
  return l = Array.from(l), l = l.filter((s) => s !== void 0), /* @__PURE__ */ r.createElement(
    ln,
    {
      initial: "Select an option",
      value: o.stageItem,
      label: "Forecasting Item Column",
      onChange: (s) => {
        a(i, s.target.value, "stageItem");
      },
      options: l
    }
  );
}, Jg = (e) => {
  const { config: t } = $.useContext(Me), { updateSeries: n, supportedRightAxisTypes: a } = $.useContext(In), { index: i, series: o } = e;
  if (!(t.visualizationType !== "Combo" || !o) && a.includes(o.type))
    return /* @__PURE__ */ r.createElement(
      ln,
      {
        initial: "Select an option",
        value: o.axis ? o.axis : "Left",
        label: "Series Axis",
        onChange: (l) => {
          n(i, l.target.value, "axis");
        },
        options: {
          Left: "Left",
          Right: "Right"
        }
      }
    );
}, ex = (e) => {
  var o;
  const { config: t, updateConfig: n } = $.useContext(Me), { index: a, series: i } = e;
  if (i.type === "Forecasting" && i)
    return (o = i == null ? void 0 : i.stages) == null ? void 0 : o.map((l, s) => {
      var c, u, d, h;
      return /* @__PURE__ */ r.createElement(
        ln,
        {
          key: `${l}--${s}`,
          initial: "Select an option",
          value: (u = (c = t.series) == null ? void 0 : c[a].stages) != null && u[s].color ? (h = (d = t.series) == null ? void 0 : d[a].stages) == null ? void 0 : h[s].color : "Select",
          label: `${l.key} Series Color`,
          onChange: (m) => {
            const p = [...t.series], y = p[a].stages;
            y[s].color = m.target.value, p[a] = { ...p[a], stages: y }, n({
              ...t,
              series: p
            });
          },
          options: Object.keys(Ya)
        }
      );
    });
}, tx = (e) => {
  var l;
  const { config: t, updateConfig: n } = $.useContext(Me), { series: a, index: i } = e, { getColumns: o } = $.useContext(In);
  if (a.type === "Forecasting")
    return /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Confidence Interval Groups"), /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement(bn, { allowZeroExpanded: !0 }, (l = a == null ? void 0 : a.confidenceIntervals) == null ? void 0 : l.map((s, c) => {
      const u = s.showInTooltip ? s.showInTooltip : !1, d = (h, m, p) => {
        h.preventDefault();
        let y = [...t.series];
        y[m].confidenceIntervals[p].showInTooltip = !u, n({
          ...t,
          series: y
        });
      };
      return /* @__PURE__ */ r.createElement(it, { className: "series-item series-item--chart", key: `${c}` }, /* @__PURE__ */ r.createElement(ot, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(lt, { className: "accordion__button accordion__button" }, "Group ", c + 1, /* @__PURE__ */ r.createElement(
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
      )))), /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement("div", { className: "input-group" }, /* @__PURE__ */ r.createElement("label", { htmlFor: "showInTooltip" }, "Show In Tooltip"), /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox--small", onClick: (h) => d(h, i, c) }, /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, u && /* @__PURE__ */ r.createElement(zs, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ r.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: "showInTooltip", checked: u || !1, readOnly: !0 }))), /* @__PURE__ */ r.createElement(
        ln,
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
          options: o()
        }
      ), /* @__PURE__ */ r.createElement(
        ln,
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
          options: o()
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
}, nx = (e) => {
  const { series: t, index: n } = e, { config: a, updateConfig: i } = $.useContext(Me);
  if (!["Bar", "Line", "Area Chart", "Combo", "Deviation", "Paired", "Scatter", "dashed-sm", "dashed-md", "dashed-lg"].includes(t.type))
    return;
  let l = (s, c) => {
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
        l(n, s.target.value);
      }
    }
  ));
}, ax = (e) => {
  const { series: t, index: n } = e, { config: a, updateConfig: i } = $.useContext(Me);
  if (["Paired Bar", "Scatter Plot", "Deviation Bar"].includes(a.visualizationType))
    return;
  const o = (l) => {
    let s = [...a.series];
    s[l].tooltip && s[l].tooltip, s[l].tooltip = !s[l].tooltip, i({
      ...a,
      series: s
    });
  };
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: "input-group" }, /* @__PURE__ */ r.createElement("label", { htmlFor: `series-tooltip--${n}` }, "Show In Tooltip"), /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox--small", onClick: (l) => o(n) }, /* @__PURE__ */ r.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, t.tooltip && /* @__PURE__ */ r.createElement(zs, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ r.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: `series-tooltip--${n}`, checked: t.tooltip ? t.tooltip : !1, readOnly: !0 }))));
}, rx = (e) => {
  const { config: t, updateConfig: n } = $.useContext(Me), { series: a, index: i } = e, o = (s) => {
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
  }, l = (s, c, u) => {
    s.preventDefault(), o(c.dataKey);
  };
  return t.series && t.series.length > 1 && /* @__PURE__ */ r.createElement("button", { className: "series-list__remove", onClick: (s) => l(s, a) }, "Remove");
}, wu = (e) => {
  const { config: t } = $.useContext(Me), { series: n, getItemStyle: a, sortableItemStyles: i, chartsWithOptions: o, index: l } = e;
  return /* @__PURE__ */ r.createElement(Ls, { key: n.dataKey, draggableId: `draggableFilter-${n.dataKey}`, index: l }, (s, c) => /* @__PURE__ */ r.createElement("div", { key: l, className: c.isDragging ? "currently-dragging" : "", style: a(c.isDragging, s.draggableProps.style, i), ref: s.innerRef, ...s.draggableProps, ...s.dragHandleProps }, /* @__PURE__ */ r.createElement(bn, { allowZeroExpanded: !0 }, /* @__PURE__ */ r.createElement(it, { className: "series-item series-item--chart" }, /* @__PURE__ */ r.createElement(ot, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(lt, { className: o.includes(t.visualizationType) ? "accordion__button" : "accordion__button hide-arrow" }, /* @__PURE__ */ r.createElement(Re, { display: "move", size: 15, style: { cursor: "default" } }), n.dataKey, /* @__PURE__ */ r.createElement(Qt.Button.Remove, { series: n, index: l }))), o.includes(t.visualizationType) && /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement(Qt.Input.Name, { series: n, index: l }), /* @__PURE__ */ r.createElement(Qt.Dropdown.SeriesType, { series: n, index: l }), /* @__PURE__ */ r.createElement(Qt.Dropdown.AxisPosition, { series: n, index: l }), /* @__PURE__ */ r.createElement(Qt.Dropdown.LineType, { series: n, index: l }), /* @__PURE__ */ r.createElement(Qt.Dropdown.ForecastingColor, { series: n, index: l }), /* @__PURE__ */ r.createElement(Qt.Dropdown.ConfidenceInterval, { series: n, index: l }), /* @__PURE__ */ r.createElement(Qt.Checkbox.DisplayInTooltip, { series: n, index: l }))))));
}, ix = (e) => {
  const { series: t, getItemStyle: n, sortableItemStyles: a, chartsWithOptions: i } = e;
  return t.map((o, l) => /* @__PURE__ */ r.createElement(wu, { getItemStyle: n, sortableItemStyles: a, chartsWithOptions: i, series: o, index: l, key: `series-list-${l}` }));
}, Qt = {
  Wrapper: Yg,
  Dropdown: {
    SeriesType: Qg,
    AxisPosition: Jg,
    ConfidenceInterval: tx,
    LineType: Xg,
    ForecastingStage: Zg,
    ForecastingColumn: Gg,
    ForecastingColor: ex
  },
  Input: {
    Name: nx
  },
  Checkbox: {
    DisplayInTooltip: ax
  },
  Button: {
    Remove: rx
  },
  Item: wu,
  List: ix
}, ox = $.memo(({ config: e, updateConfig: t }) => {
  let n = (c, u, d) => {
    let h = [];
    e.regions && (h = [...e.regions]), h[d][c] = u, t({ ...e, regions: h });
  }, a = (c, u, d, h, m) => n(d, h, m), i = (c) => {
    let u = [];
    e.regions && (u = [...e.regions]), u.splice(c, 1), t({ ...e, regions: u });
  }, o = () => {
    let c = [];
    e.regions && (c = [...e.regions]), c.push({}), t({ ...e, regions: c });
  };
  const l = ["Fixed", "Previous Days"], s = ["Last Date", "Fixed"];
  return /* @__PURE__ */ r.createElement(r.Fragment, null, e.regions && e.regions.map(({ label: c, color: u, from: d, to: h, background: m, range: p = "Custom" }, y) => {
    var E;
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
    ), /* @__PURE__ */ r.createElement(de, { value: c, label: "Region Label", fieldName: "label", i: y, updateField: a }), /* @__PURE__ */ r.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ r.createElement(de, { value: u, label: "Text Color", fieldName: "color", updateField: (g, f, x, v) => n(x, v, y) }), /* @__PURE__ */ r.createElement(de, { value: m, label: "Background", fieldName: "background", updateField: (g, f, x, v) => n(x, v, y) })), /* @__PURE__ */ r.createElement(
      De,
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
        options: l
      }
    ), (e.regions[y].fromType === "Fixed" || e.regions[y].fromType === "Previous Days" || !e.regions[y].fromType) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
      de,
      {
        value: d,
        label: e.regions[y].fromType === "Fixed" || !((E = e.regions[y]) != null && E.fromType) ? "From Value" : "Previous Number of Days",
        fieldName: "from",
        updateField: (g, f, x, v) => n(x, v, y),
        tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "The date needs to be in the original format of the data. Not the displayed format of the data.")))
      }
    )), /* @__PURE__ */ r.createElement(
      De,
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
    ), (e.regions[y].toType === "Fixed" || !e.regions[y].toType) && /* @__PURE__ */ r.createElement(de, { value: h, label: "To Value", fieldName: "to", updateField: (g, f, x, v) => n(x, v, y) }));
  }), !e.regions && /* @__PURE__ */ r.createElement("p", { style: { textAlign: "center" } }, "There are currently no regions."), /* @__PURE__ */ r.createElement(
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
}), lx = ({ name: e }) => {
  const { visSupportsRegions: t } = Ea(), { config: n, updateConfig: a } = $.useContext(Me);
  return t() ? /* @__PURE__ */ r.createElement(it, null, /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(lt, null, e)), /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement(ox, { config: n, updateConfig: a }))) : null;
}, Cu = $.createContext(null), $o = () => {
  const e = $.useContext(Cu);
  if (e === null)
    throw new Error("COVE: editor panel context is null.");
  return e;
}, sx = (e) => {
  const { config: t } = $.useContext(Me), { updateField: n } = $o(), { enabledChartTypes: a, visHasNumbersOnBars: i, visHasLabelOnData: o, visSupportsChartHeight: l, visSupportsSuperTitle: s, visSupportsFootnotes: c } = Ea(), { visualizationType: u, visualizationSubType: d, barStyle: h } = t, m = () => (u === "Bar" || u === "Deviation Bar") && d !== "stacked" && (t.orientation === "horizontal" || t.orientation === "vertical") ? ["flat", "rounded", "lollipop"] : ["flat", "rounded"];
  return /* @__PURE__ */ r.createElement(it, null, " ", /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(lt, null, "General")), /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement(De, { value: u, fieldName: "visualizationType", label: "Chart Type", updateField: n, options: a }), (u === "Bar" || u === "Combo" || u === "Area Chart") && /* @__PURE__ */ r.createElement(De, { value: d || "Regular", fieldName: "visualizationSubType", label: "Chart Subtype", updateField: n, options: ["regular", "stacked"] }), u === "Area Chart" && d === "stacked" && /* @__PURE__ */ r.createElement(De, { value: t.stackedAreaChartLineType || "Linear", fieldName: "stackedAreaChartLineType", label: "Stacked Area Chart Line Type", updateField: n, options: Object.keys(Sr) }), u === "Bar" && /* @__PURE__ */ r.createElement(De, { value: t.orientation || "vertical", fieldName: "orientation", label: "Orientation", updateField: n, options: ["vertical", "horizontal"] }), u === "Deviation Bar" && /* @__PURE__ */ r.createElement(De, { label: "Orientation", options: ["horizontal"] }), (u === "Bar" || u === "Deviation Bar") && /* @__PURE__ */ r.createElement(De, { value: t.isLollipopChart ? "lollipop" : h || "flat", fieldName: "barStyle", label: "bar style", updateField: n, options: m() }), (u === "Bar" || u === "Deviation Bar") && h === "rounded" && /* @__PURE__ */ r.createElement(De, { value: t.tipRounding || "top", fieldName: "tipRounding", label: "tip rounding", updateField: n, options: ["top", "full"] }), (u === "Bar" || u === "Deviation Bar") && h === "rounded" && /* @__PURE__ */ r.createElement(De, { value: t.roundingStyle || "standard", fieldName: "roundingStyle", label: "rounding style", updateField: n, options: ["standard", "shallow", "finger"] }), u === "Bar" && t.orientation === "horizontal" && /* @__PURE__ */ r.createElement(De, { value: t.yAxis.labelPlacement || "Below Bar", section: "yAxis", fieldName: "labelPlacement", label: "Label Placement", updateField: n, options: ["Below Bar", "On Date/Category Axis"] }), i() ? /* @__PURE__ */ r.createElement(Te, { value: t.yAxis.displayNumbersOnBar, section: "yAxis", fieldName: "displayNumbersOnBar", label: t.isLollipopChart ? "Display Numbers after Bar" : "Display Numbers on Bar", updateField: n }) : o() && /* @__PURE__ */ r.createElement(Te, { value: t.labels, fieldName: "labels", label: "Display label on data", updateField: n }), u === "Pie" && /* @__PURE__ */ r.createElement(De, { fieldName: "pieType", label: "Pie Chart Type", updateField: n, options: ["Regular", "Donut"] }), /* @__PURE__ */ r.createElement(
    de,
    {
      value: t.title || "Chart Title",
      fieldName: "title",
      id: "title",
      label: "Title",
      placeholder: "Chart Title",
      updateField: n,
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "Title is required to set the name of the download file but can be hidden using the option below.")))
    }
  ), /* @__PURE__ */ r.createElement(Te, { value: t.showTitle, fieldName: "showTitle", label: "Show Title", updateField: n }), s() && /* @__PURE__ */ r.createElement(
    de,
    {
      value: t.superTitle,
      updateField: n,
      fieldName: "superTitle",
      label: "Super Title",
      placeholder: "Super Title",
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "Super Title")))
    }
  ), /* @__PURE__ */ r.createElement(
    de,
    {
      type: "textarea",
      value: t.introText,
      updateField: n,
      fieldName: "introText",
      label: "Message",
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "Intro Text")))
    }
  ), /* @__PURE__ */ r.createElement(
    de,
    {
      type: "textarea",
      value: t.description,
      fieldName: "description",
      label: "Subtext/Citation",
      updateField: n,
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), c() && /* @__PURE__ */ r.createElement(
    de,
    {
      type: "textarea",
      value: t.footnotes,
      updateField: n,
      fieldName: "footnotes",
      label: "Footnotes",
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "Footnotes")))
    }
  ), l() && t.orientation === "vertical" && /* @__PURE__ */ r.createElement(de, { type: "number", value: t.heights.vertical, section: "heights", fieldName: "vertical", label: "Chart Height", updateField: n })));
}, cx = (e) => {
  const { config: t } = $.useContext(Me), { boxplot: n } = t;
  if (t.visualizationType !== "Box Plot")
    return;
  const { updateField: a } = $o();
  return /* @__PURE__ */ r.createElement(it, null, /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(lt, null, e.name)), /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement("h4", { style: { fontSize: "18px" } }, "Labels for 5-Number Summary"), /* @__PURE__ */ r.createElement(
    de,
    {
      type: "text",
      value: n.labels.maximum,
      fieldName: "maximum",
      section: "boxplot",
      subsection: "labels",
      label: "Maximum",
      updateField: a,
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "Highest value, excluding outliers")))
    }
  ), /* @__PURE__ */ r.createElement(
    de,
    {
      type: "text",
      value: n.labels.q3,
      fieldName: "q3",
      section: "boxplot",
      subsection: "labels",
      label: "Upper Quartile",
      updateField: a,
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "Represented by top line of box. 25% of data are higher.")))
    }
  ), /* @__PURE__ */ r.createElement(
    de,
    {
      type: "text",
      value: n.labels.median,
      fieldName: "median",
      section: "boxplot",
      subsection: "labels",
      label: "Median",
      updateField: a,
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "Middle data point. Half of data are higher value.")))
    }
  ), /* @__PURE__ */ r.createElement(
    de,
    {
      type: "text",
      value: n.labels.q1,
      fieldName: "q1",
      section: "boxplot",
      subsection: "labels",
      label: "Lower Quartile",
      updateField: a,
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "Represented by bottom line of box. 25% of data are lower.")))
    }
  ), /* @__PURE__ */ r.createElement(
    de,
    {
      type: "text",
      value: n.labels.minimum,
      fieldName: "minimum",
      section: "boxplot",
      subsection: "labels",
      label: "Minimum",
      updateField: a,
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "Lowest value, excluding outliers")))
    }
  ), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("h4", { style: { fontSize: "18px" } }, "Labels for Additional Measures"), /* @__PURE__ */ r.createElement(de, { type: "text", value: n.labels.iqr, fieldName: "iqr", section: "boxplot", subsection: "labels", label: "Interquartile Range", updateField: a }), /* @__PURE__ */ r.createElement(de, { type: "text", value: n.labels.total, fieldName: "total", section: "boxplot", subsection: "labels", label: "Total", updateField: a }), /* @__PURE__ */ r.createElement(de, { type: "text", value: n.labels.mean, fieldName: "mean", section: "boxplot", subsection: "labels", label: "Mean", updateField: a }), /* @__PURE__ */ r.createElement(de, { type: "text", value: n.labels.outliers, fieldName: "outliers", section: "boxplot", subsection: "labels", label: "Outliers", updateField: a }), /* @__PURE__ */ r.createElement(de, { type: "text", value: n.labels.values, fieldName: "values", section: "boxplot", subsection: "labels", label: "Values", updateField: a })));
}, Pu = (e, t) => {
  let n = [], a = [], i = [];
  if (e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar") {
    const o = e.twoColor.isPaletteReversed;
    n = Object.keys(Ua).filter((l) => o ? l.endsWith("reverse") : !l.endsWith("reverse"));
  } else {
    const o = [], l = [];
    for (const s in Ct) {
      const c = s.startsWith("sequential"), u = s.startsWith("qualitative"), d = s.endsWith("reverse");
      c && (!e.isPaletteReversed && !d || e.isPaletteReversed && d) && o.push(s), u && (!e.isPaletteReversed && !d || e.isPaletteReversed && d) && l.push(s);
    }
    a = o, i = l;
  }
  return $.useEffect(() => {
    let o = "";
    e.twoColor.isPaletteReversed && !e.twoColor.palette.endsWith("reverse") && (o = e.twoColor.palette + "reverse"), !e.twoColor.isPaletteReversed && e.twoColor.palette.endsWith("reverse") && (o = e.twoColor.palette.slice(0, -7)), t({ ...e, twoColor: { ...e.twoColor, palette: o } });
  }, [e.twoColor.isPaletteReversed]), $.useEffect(() => {
    let o = "";
    e.isPaletteReversed && !e.palette.endsWith("reverse") && (o = e.palette + "reverse"), !e.isPaletteReversed && e.palette.endsWith("reverse") && (o = e.palette.slice(0, -7)), t({ ...e, palette: o });
  }, [e.isPaletteReversed]), { twoColorPalettes: n, sequential: a, nonSequential: i };
}, ux = (e) => {
  var A;
  const { config: t, updateConfig: n, colorPalettes: a, twoColorPalette: i } = $.useContext(Me), { visual: o } = t, { setLollipopShape: l, updateField: s } = $o(), { visHasBarBorders: c, visCanAnimate: u, visSupportsNonSequentialPallete: d, headerColors: h, visSupportsTooltipOpacity: m, visSupportsTooltipLines: p, visSupportsBarSpace: y, visSupportsBarThickness: E, visHasDataCutoff: g, visSupportsSequentialPallete: f, visSupportsReverseColorPalette: x } = Ea(), { twoColorPalettes: v, sequential: b, nonSequential: S } = Pu(t, n);
  return /* @__PURE__ */ r.createElement(it, null, /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(lt, null, "Visual")), /* @__PURE__ */ r.createElement(st, null, t.isLollipopChart && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("fieldset", { className: "header" }, /* @__PURE__ */ r.createElement("legend", { className: "edit-label" }, "Lollipop Shape"), /* @__PURE__ */ r.createElement(
    "div",
    {
      onChange: (T) => {
        l(T.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("label", { className: "radio-label" }, /* @__PURE__ */ r.createElement("input", { type: "radio", name: "lollipopShape", value: "circle", checked: t.lollipopShape === "circle" }), "Circle"),
    /* @__PURE__ */ r.createElement("label", { className: "radio-label" }, /* @__PURE__ */ r.createElement("input", { type: "radio", name: "lollipopShape", value: "square", checked: t.lollipopShape === "square" }), "Square")
  )), /* @__PURE__ */ r.createElement(De, { value: t.lollipopColorStyle ? t.lollipopColorStyle : "two-tone", fieldName: "lollipopColorStyle", label: "Lollipop Color Style", updateField: s, options: ["regular", "two-tone"] }), /* @__PURE__ */ r.createElement(De, { value: t.lollipopSize ? t.lollipopSize : "small", fieldName: "lollipopSize", label: "Lollipop Size", updateField: s, options: ["small", "medium", "large"] })), t.visualizationType === "Box Plot" && /* @__PURE__ */ r.createElement("fieldset", { className: "fieldset fieldset--boxplot" }, /* @__PURE__ */ r.createElement("legend", { className: "" }, "Box Plot Settings"), /* @__PURE__ */ r.createElement(De, { value: t.boxplot.borders, fieldName: "borders", section: "boxplot", label: "Box Plot Borders", updateField: s, options: ["true", "false"] }), /* @__PURE__ */ r.createElement(Te, { value: t.boxplot.plotOutlierValues, fieldName: "plotOutlierValues", section: "boxplot", label: "Plot Outliers", updateField: s }), /* @__PURE__ */ r.createElement(Te, { value: t.boxplot.plotNonOutlierValues, fieldName: "plotNonOutlierValues", section: "boxplot", label: "Plot non-outlier values", updateField: s })), /* @__PURE__ */ r.createElement(De, { value: t.fontSize, fieldName: "fontSize", label: "Font Size", updateField: s, options: ["small", "medium", "large"] }), c() && /* @__PURE__ */ r.createElement(De, { value: t.barHasBorder, fieldName: "barHasBorder", label: "Bar Borders", updateField: s, options: ["true", "false"] }), u() && /* @__PURE__ */ r.createElement(Te, { value: t.animate, fieldName: "animate", label: "Animate Visualization", updateField: s }), (((A = t.series) == null ? void 0 : A.some((T) => T.type === "Line" || T.type === "dashed-lg" || T.type === "dashed-sm" || T.type === "dashed-md")) && t.visualizationType === "Combo" || t.visualizationType === "Line") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(De, { value: t.lineDatapointStyle, fieldName: "lineDatapointStyle", label: "Line Datapoint Style", updateField: s, options: ["hidden", "hover", "always show"] }), /* @__PURE__ */ r.createElement(De, { value: t.lineDatapointColor, fieldName: "lineDatapointColor", label: "Line Datapoint Color", updateField: s, options: ["Same as Line", "Lighter than Line"] })), /* @__PURE__ */ r.createElement("label", { className: "header" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Header Theme"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, h.map((T) => /* @__PURE__ */ r.createElement(
    "button",
    {
      title: T,
      key: T,
      onClick: (N) => {
        N.preventDefault(), n({ ...t, theme: T });
      },
      className: t.theme === T ? "selected " + T : T
    }
  )))), (d() || d()) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Chart Color Palette")), x() && /* @__PURE__ */ r.createElement(tl, { fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: s, value: t.isPaletteReversed }), f() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("span", null, "Sequential"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, b.map((T) => {
    const N = {
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
        onClick: (_) => {
          _.preventDefault(), n({ ...t, palette: T });
        },
        className: t.palette === T ? "selected" : ""
      },
      /* @__PURE__ */ r.createElement("span", { style: N }),
      /* @__PURE__ */ r.createElement("span", { style: w }),
      /* @__PURE__ */ r.createElement("span", { style: C })
    );
  }))), d() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("span", null, "Non-Sequential"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, S.map((T) => {
    const N = {
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
        onClick: (_) => {
          _.preventDefault(), n({ ...t, palette: T });
        },
        className: t.palette === T ? "selected" : ""
      },
      /* @__PURE__ */ r.createElement("span", { style: N }),
      /* @__PURE__ */ r.createElement("span", { style: w }),
      /* @__PURE__ */ r.createElement("span", { style: C })
    );
  })))), (t.visualizationType === "Paired Bar" || t.visualizationType === "Deviation Bar") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(tl, { section: "twoColor", fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: s, value: t.twoColor.isPaletteReversed }), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, v.map((T) => {
    const N = {
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
      /* @__PURE__ */ r.createElement("span", { className: "two-color", style: N }),
      /* @__PURE__ */ r.createElement("span", { className: "two-color", style: w })
    );
  }))), g() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    de,
    {
      value: t.dataCutoff,
      type: "number",
      fieldName: "dataCutoff",
      className: "number-narrow",
      label: "Data Cutoff",
      updateField: s,
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Any value below the cut-off value is included in a special "less than" category. This option supports special conditions like suppressed data.')))
    }
  )), E() && t.orientation === "horizontal" && !t.isLollipopChart && t.yAxis.labelPlacement !== "On Bar" && /* @__PURE__ */ r.createElement(de, { type: "number", value: t.barHeight || "25", fieldName: "barHeight", label: " Bar Thickness", updateField: s, min: 15 }), (t.visualizationType === "Bar" && t.orientation !== "horizontal" || t.visualizationType === "Combo") && /* @__PURE__ */ r.createElement(de, { value: t.barThickness, type: "number", fieldName: "barThickness", label: "Bar Thickness", updateField: s }), y() && /* @__PURE__ */ r.createElement(de, { type: "number", value: t.barSpace || "15", fieldName: "barSpace", label: "Bar Space", updateField: s, min: 0 }), (t.visualizationType === "Bar" || t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ r.createElement(Te, { value: t.topAxis.hasLine, section: "topAxis", fieldName: "hasLine", label: "Add Top Axis Line", updateField: s }), t.visualizationType === "Spark Line" && /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ r.createElement(Te, { value: o == null ? void 0 : o.border, section: "visual", fieldName: "border", label: "Show Border", updateField: s }), /* @__PURE__ */ r.createElement(Te, { value: o == null ? void 0 : o.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: s }), /* @__PURE__ */ r.createElement(Te, { value: o == null ? void 0 : o.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: s }), /* @__PURE__ */ r.createElement(Te, { value: o == null ? void 0 : o.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: s }), /* @__PURE__ */ r.createElement(Te, { value: o == null ? void 0 : o.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: s })), (t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ r.createElement(Te, { value: t.showLineSeriesLabels, fieldName: "showLineSeriesLabels", label: "Append Series Name to End of Line Charts", updateField: s }), (t.visualizationType === "Line" || t.visualizationType === "Combo") && t.showLineSeriesLabels && /* @__PURE__ */ r.createElement(Te, { value: t.colorMatchLineSeriesLabels, fieldName: "colorMatchLineSeriesLabels", label: "Match Series Color to Name at End of Line Charts", updateField: s }), p() && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Te, { value: o.verticalHoverLine, fieldName: "verticalHoverLine", section: "visual", label: "Vertical Hover Line", updateField: s }), /* @__PURE__ */ r.createElement(Te, { value: o.horizontalHoverLine, fieldName: "horizontalHoverLine", section: "visual", label: "Horizontal Hover Line", updateField: s })), m() && /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Tooltip Opacity"), /* @__PURE__ */ r.createElement(
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
}, yn = {
  ForestPlot: Ug,
  Series: Qt,
  Regions: lx,
  General: sx,
  BoxPlot: cx,
  Visual: ux
};
$.memo(({ config: e, updateConfig: t, data: n }) => {
  const a = () => {
    const c = /* @__PURE__ */ new Set();
    return n.forEach((u) => {
      Object.keys(u).forEach((d) => {
        c.add(d);
      });
    }), [...c];
  }, i = () => ["star"];
  let o = (c) => {
    let u = [];
    e.suppressedData && (u = [...e.suppressedData]), u.splice(c, 1), t({ ...e, suppressedData: u });
  }, l = () => {
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
        p.preventDefault(), o(m);
      }
    },
    "Remove"
  ), /* @__PURE__ */ r.createElement(De, { value: u, initial: "Select", fieldName: "column", label: "Column", updateField: (p, y, E, g) => s(E, g, m), options: a() }), /* @__PURE__ */ r.createElement(de, { value: d, fieldName: "value", label: "Value", updateField: (p, y, E, g) => s(E, g, m) }), /* @__PURE__ */ r.createElement(De, { value: h, initial: "Select", fieldName: "icon", label: "Icon", updateField: (p, y, E, g) => s(E, g, m), options: i() }), /* @__PURE__ */ r.createElement(de, { value: c, fieldName: "label", label: "Label", placeholder: "suppressed", updateField: (p, y, E, g) => s(E, g, m) }))), /* @__PURE__ */ r.createElement("button", { type: "button", onClick: l, className: "btn full-width" }, "Add Suppression Class"));
});
const dx = $.memo(({ config: e, updateConfig: t, data: n }) => {
  const a = () => {
    const u = /* @__PURE__ */ new Set();
    return n.forEach((d) => {
      Object.keys(d).forEach((h) => {
        u.add(h);
      });
    }), [...u];
  }, i = () => e.visualizationType === "Line" || e.visualizationType === "Combo" ? ["effect"] : ["suppression"], o = () => {
    if (e.visualizationType === "Line" || e.visualizationType === "Combo")
      return ["Dashed Small", "Dashed Medium", "Dashed Large", "Open Circles"];
    if (e.visualizationType === "Bar")
      return ["star"];
  };
  let l = (u) => {
    let d = [];
    e.preliminaryData && (d = [...e.preliminaryData]), d.splice(u, 1), t({ ...e, preliminaryData: d });
  }, s = () => {
    let u = e.preliminaryData ? [...e.preliminaryData] : [];
    u.push({ type: "", label: "", column: "", value: "", style: "" }), t({ ...e, preliminaryData: u });
  }, c = (u, d, h) => {
    let m = [];
    e.preliminaryData && (m = [...e.preliminaryData]), m[h][u] = d, t({ ...e, preliminaryData: m });
  };
  return /* @__PURE__ */ r.createElement(r.Fragment, null, e.preliminaryData && e.preliminaryData.map(({ seriesKey: u, type: d, label: h, column: m, value: p, style: y }, E) => {
    var g;
    return /* @__PURE__ */ r.createElement("div", { key: `preliminaryData-${E}`, className: "edit-block" }, /* @__PURE__ */ r.createElement(
      "button",
      {
        type: "button",
        className: "remove-column",
        onClick: (f) => {
          f.preventDefault(), l(E);
        }
      },
      "Remove"
    ), /* @__PURE__ */ r.createElement(De, { value: d, initial: "Select", fieldName: "type", label: "Type", updateField: (f, x, v, b) => c(v, b, E), options: i() }), /* @__PURE__ */ r.createElement(De, { value: u, initial: "Select", fieldName: "seriesKey", label: "ASSOCIATE TO SERIES", updateField: (f, x, v, b) => c(v, b, E), options: (g = e.runtime) == null ? void 0 : g.seriesKeys }), /* @__PURE__ */ r.createElement(De, { value: m, initial: "Select", fieldName: "column", label: "COLUMN WITH CONFIGURATION VALUE", updateField: (f, x, v, b) => c(v, b, E), options: a() }), /* @__PURE__ */ r.createElement(de, { value: p, fieldName: "value", label: "VALUE TO TRIGGER", updateField: (f, x, v, b) => c(v, b, E) }), /* @__PURE__ */ r.createElement(De, { value: y, initial: "Select", fieldName: "style", label: "Style", updateField: (f, x, v, b) => c(v, b, E), options: o() }), /* @__PURE__ */ r.createElement(de, { value: h, fieldName: "label", label: "Label", placeholder: "", updateField: (f, x, v, b) => c(v, b, E) }));
  }), /* @__PURE__ */ r.createElement("button", { type: "button", onClick: s, className: "btn full-width" }, e.visualizationType === "Line" ? "Add Special Line" : e.visualizationType === "Bar" ? " Add Special Bar" : "Add Special Line/Bar"));
}), mx = () => {
  var zo, Ro, Fo, Bo, Vo, Ho, Wo, Ko, Io, jo, qo, Uo, Yo, Xo, Qo, Zo, Go, Jo;
  const { config: e, updateConfig: t, transformedData: n, loading: a, colorPalettes: i, twoColorPalette: o, unfilteredData: l, excludedData: s, isDashboard: c, setParentConfig: u, missingRequiredSections: d, isDebug: h, setFilteredData: m, lineOptions: p, rawData: y } = $.useContext(Me), { minValue: E, maxValue: g, existPositiveValue: f, isAllLine: x } = $r(e, l);
  Pu(e, t);
  const v = { data: n, config: e }, { leftMax: b, rightMax: S } = Eu(v), {
    headerColors: A,
    visSupportsTooltipLines: T,
    visSupportsNonSequentialPallete: N,
    visSupportsSequentialPallete: w,
    visSupportsReverseColorPalette: C,
    visHasLabelOnData: _,
    visHasNumbersOnBars: k,
    visHasAnchors: O,
    visHasBarBorders: K,
    visHasDataCutoff: V,
    visCanAnimate: F,
    visHasLegend: H,
    visHasBrushChart: Y,
    visSupportsDateCategoryAxis: z,
    visSupportsValueAxisMin: q,
    visSupportsValueAxisMax: B,
    visSupportsDateCategoryAxisLabel: j,
    visSupportsDateCategoryAxisLine: U,
    visSupportsDateCategoryAxisTicks: X,
    visSupportsDateCategoryTickRotation: ne,
    visSupportsDateCategoryNumTicks: ce,
    visSupportsDateCategoryAxisPadding: we,
    visSupportsRegions: Ce,
    visSupportsFilters: G,
    visSupportsValueAxisGridLines: W,
    visSupportsValueAxisLine: ae,
    visSupportsValueAxisTicks: D,
    visSupportsValueAxisLabels: ue,
    visSupportsBarSpace: oe,
    visSupportsBarThickness: ye,
    visSupportsFootnotes: he,
    visSupportsSuperTitle: Ee,
    visSupportsDataCutoff: Ne,
    visSupportsChartHeight: ke,
    visSupportsLeftValueAxis: Se,
    visSupportsTooltipOpacity: xe,
    visSupportsRankByValue: re,
    visSupportsResponsiveTicks: J,
    visSupportsDateCategoryHeight: He,
    visHasDataSuppression: fe
  } = Ea(), { handleFilterOrder: Le, filterOrderOptions: Oe, filterStyleOptions: je } = $u({ config: e, setConfig: t, filteredData: n, setFilteredData: m });
  $.useEffect(() => {
    let M = [];
    e.series && (M = e.series.map((L) => ({
      ...L,
      type: e.visualizationType === "Combo" ? "Bar" : e.visualizationType ? e.visualizationType : "Bar",
      axis: "Left"
    }))), t({
      ...e,
      series: M
    });
  }, [e.visualizationType]), $.useEffect(() => {
    e.visualizationType === "Scatter Plot" && t({
      ...e,
      xAxis: {
        ...e.xAxis,
        type: "continuous"
      }
    });
  }, []), $.useEffect(() => {
    e.visualizationType !== "Bar" && t({ ...e, tooltips: { ...e.tooltips, singleSeries: !1 } });
  }, [e.visualizationType]);
  const { hasRightAxis: Ie } = Eo({ config: e, yMax: e.yAxis.size, data: e.data, updateConfig: t }), Ue = (M, L) => ({
    ...L
  }), ct = {
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
  }, et = (M) => {
    M.orientation === "horizontal" && (M.labels = !1), M.table.show === void 0 && (M.table.show = !c), M.visualizationType === "Combo" && (M.orientation = "vertical");
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
      let qn = { ...e, [I]: ee };
      et(qn), t(qn);
      return;
    }
    const Qe = Array.isArray(e[M]);
    let wt = Qe ? [...e[M], ee] : { ...e[M], [I]: ee };
    L !== null && (Qe ? (wt = [...e[M]], wt[L] = { ...wt[L], [I]: ee }) : typeof ee == "string" ? wt[L] = ee : wt = { ...e[M], [L]: { ...e[M][L], [I]: ee } });
    let Vt = { ...e, [M]: wt };
    et(Vt), t(Vt);
  }, [ze, Ve] = $.useState(!0);
  if (a)
    return null;
  $.useEffect(() => {
    var M;
    (M = e.general) != null && M.boxplot && (e.general.boxplot.firstQuartilePercentage || t({
      ...e,
      boxplot: {
        ...e.boxplot,
        firstQuartilePercentage: 25
      }
    }));
  }, [e]);
  const Pt = (M) => {
    t({
      ...e,
      lollipopShape: M
    });
  }, Nt = (M) => {
    let L = [...e.filters];
    L.splice(M, 1), t({ ...e, filters: L });
  }, kt = (M, L, I) => {
    let ee = [...e.filters];
    ee[L][M] = I, t({ ...e, filters: ee });
  }, Yt = () => {
    let M = e.filters ? [...e.filters] : [];
    M.push({ values: [] }), t({ ...e, filters: M });
  }, tt = (M) => {
    let L = e.series ? [...e.series] : [], I = Array.from(new Set(n.map((Qe) => Qe[M]))), ee = [];
    I.forEach((Qe) => {
      ee.push({ key: Qe });
    }), e.visualizationType === "Forecasting" ? L.push({ dataKey: M, type: e.visualizationType, stages: ee, stageColumn: M, axis: "Left", tooltip: !0 }) : L.push({ dataKey: M, type: e.visualizationType, axis: "Left", tooltip: !0 }), t({ ...e, series: L });
  }, vt = (M) => {
    const L = e.series[0].dataKey, I = n.sort((Qe, wt) => Qe[L] - wt[L]), ee = M === "asc" ? I : I.reverse();
    t({ ...e }, ee);
  }, $e = (M) => {
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
      let ee = { ...e.exclusions, keys: I }, Qe = { ...e, exclusions: ee };
      I.length === 0 && delete Qe.exclusions.keys, t(Qe);
    }
  }, ie = () => {
    let M = {};
    return l.forEach((L) => {
      Object.keys(L).forEach((I) => M[I] = !0);
    }), Object.keys(M);
  }, pe = (M = !0) => {
    let L = {};
    if (l.forEach((I) => {
      Object.keys(I).forEach((ee) => L[ee] = !0);
    }), M) {
      const { lower: I, upper: ee } = e.confidenceKeys || {};
      Object.keys(L).forEach((Qe) => {
        (e.series && e.series.filter((wt) => wt.dataKey === Qe).length > 0 || e.confidenceKeys && Object.keys(e.confidenceKeys).includes(Qe) && (I && ee || I || ee) && Qe !== I && Qe !== ee) && delete L[Qe];
      });
    }
    return Object.keys(L);
  }, se = (M) => {
    if (!M)
      return [];
    const L = /* @__PURE__ */ new Set();
    for (let I = 0; I < M.length; I++)
      for (const [ee] of Object.entries(M[I]))
        L.add(ee);
    return Array.from(L);
  }, Ae = (M, L = !1) => {
    let I = [];
    return s.forEach((ee) => {
      I.push(ee[M]);
    }), L ? [...new Set(I)] : I;
  }, ve = () => {
    Ve(!ze);
  }, me = () => /* @__PURE__ */ r.createElement("section", { className: "waiting" }, /* @__PURE__ */ r.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ r.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ r.createElement("p", null, e.runtime.editorErrorMessage))), Ye = () => {
    const M = (L) => {
      L.preventDefault();
      let I = { ...e };
      delete I.newViz, t(I);
    };
    return /* @__PURE__ */ r.createElement("section", { className: "waiting" }, /* @__PURE__ */ r.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ r.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ r.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ r.createElement("button", { className: "btn", style: { margin: "1em auto" }, disabled: d(), onClick: M }, "I'm Done")));
  }, at = () => {
    let M = JSON.parse(JSON.stringify(e));
    return d() === !1 && delete M.newViz, delete M.runtime, M;
  };
  $.useEffect(() => {
    if (u) {
      const M = at();
      u(M);
    }
  }, [e]), $.useEffect(() => {
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
  }, [e.orientation]), $.useEffect(() => {
    e.visualizationType === "Paired Bar" && t({
      ...e,
      orientation: "horizontal"
    });
  }, []), $.useEffect(() => {
    e.orientation === "horizontal" && t({
      ...e,
      lollipopShape: e.lollipopShape
    });
  }, [e.isLollipopChart, e.lollipopShape]), $.useEffect(() => {
    e.visualizationType === "Deviation Bar" && t({ ...e, orientation: "horizontal" });
  }, [e.visualizationType]);
  const bt = $.useCallback(() => {
    const M = [...e.exclusions.keys];
    return /* @__PURE__ */ r.createElement("ul", { className: "series-list" }, M.map((L, I) => /* @__PURE__ */ r.createElement("li", { key: L }, /* @__PURE__ */ r.createElement("div", { className: "series-list__name", "data-title": L }, /* @__PURE__ */ r.createElement("div", { className: "series-list__name--text" }, L)), /* @__PURE__ */ r.createElement("button", { className: "series-list__remove", onClick: () => P(L) }, "×"))));
  }, [e]), Et = (M, L) => {
    let I = e.series, [ee] = I.splice(M, 1);
    I.splice(L, 0, ee), t({ ...e, series: I });
  };
  e.isLollipopChart && ((zo = e == null ? void 0 : e.series) == null ? void 0 : zo.length) > 1 && (e.runtime.editorErrorMessage = "Lollipop charts must use only one data series"), e.visualizationType === "Paired Bar" && ((Ro = e == null ? void 0 : e.series) == null ? void 0 : Ro.length) !== 2 && (e.runtime.editorErrorMessage = "Paired Bar charts must use exactly two data series"), e.visualizationType === "Deviation Bar" && ((Fo = e == null ? void 0 : e.series) == null ? void 0 : Fo.length) !== 1 && (e.runtime.editorErrorMessage = "Deviation Bar charts must use exactly one data series"), e.isLollipopChart && ((Bo = e == null ? void 0 : e.series) == null ? void 0 : Bo.length) === 0 && (e.runtime.editorErrorMessage = "Add a data series");
  const Q = e.orientation === "horizontal" ? "xAxis" : "yAxis", [le, Pe] = $.useState({ maxMsg: "", minMsg: "", rightMaxMessage: "", minMsgRight: "" }), ge = () => {
    const M = e[Q].max, L = e[Q].rightMax;
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
        case (M && parseFloat(M) < b):
          I = "Max value must be more than " + b;
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
    Pe((Qe) => ({ ...Qe, maxMsg: I, rightMaxMessage: ee }));
  }, nt = () => {
    const M = parseFloat(e[Q].min);
    let L = Number(E), I = "";
    switch (!0) {
      case (e.useLogScale && ["Line", "Combo", "Bar"].includes(e.visualizationType) && M < 0):
        I = "Negative numbers are not supported in logarithmic scale";
        break;
      case ((e.visualizationType === "Line" || e.visualizationType === "Spark Line") && M > L):
        I = "Value should not exceed " + E;
        break;
      case (e.visualizationType === "Combo" && x && M > L):
        I = "Value should not exceed " + E;
        break;
      case ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && !x) && L > 0 && M > 0):
        I = e.useLogScale ? "Value must be equal to 0" : "Value must be less than or equal to 0";
        break;
      case (e.visualizationType === "Deviation Bar" && M >= Math.min(L, e.xAxis.target)):
        I = "Value must be less than " + Math.min(L, e.xAxis.target);
        break;
      case (e.visualizationType !== "Deviation Bar" && M && L < 0 && M > L):
        I = "Value should not exceed " + E;
        break;
      default:
        I = "";
    }
    Pe((ee) => ({ ...ee, minMsg: I }));
  };
  $.useEffect(() => {
    nt(), ge();
  }, [E, g, e]);
  const mt = ((Vo = e == null ? void 0 : e.dataKey) == null ? void 0 : Vo.includes("http://")) || ((Ho = e == null ? void 0 : e.dataKey) == null ? void 0 : Ho.includes("https://")), Ge = () => {
    var M, L;
    if (h !== void 0 && h && !((M = e == null ? void 0 : e.xAxis) != null && M.dataKey)) {
      let I = pe(!1);
      if (I.includes("Date"))
        return "Date";
      if (I.includes("Race"))
        return "Race";
      if (I.includes("Month"))
        return "Month";
    }
    return ((L = e == null ? void 0 : e.xAxis) == null ? void 0 : L.dataKey) || "";
  }, At = () => {
    if (h !== void 0 && h && pe(!1).length > 0) {
      let M = pe(!1).filter((L) => L !== Ge());
      if (M.length > 0)
        return M[0];
    }
    return "";
  };
  if (h && !e.xAxis.dataKey && (e.xAxis.dataKey = Ge()), h && ((Wo = e == null ? void 0 : e.series) == null ? void 0 : Wo.length) === 0) {
    let M = At();
    M !== "" && tt(M), h && console.log("### COVE DEBUG: Chart: Setting default datacol=", M);
  }
  const ft = ["Area Chart", "Combo", "Line", "Bar", "Forecasting", "Scatter Plot", "Paired Bar", "Deviation Bar"], Lt = [
    /* @__PURE__ */ r.createElement("option", { value: "", key: "Select Option" }, "- Select Option -")
  ];
  if (e.data && e.series) {
    Object.keys(((Ko = e.data) == null ? void 0 : Ko[0]) || []).map((L) => {
      const I = e == null ? void 0 : e.series.some((ee) => ee.dataKey === L);
      if (L !== e.xAxis.dataKey && !I)
        return Lt.push(
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
        return Lt.push(
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
  const Xt = Object.keys(e.columns).filter((M) => [e.xAxis.dataKey].includes(M) !== !0), Je = (M) => {
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
  }, ut = (M) => {
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
    highlightedBarValues: Jt,
    highlightedSeriesValues: _e,
    handleUpdateHighlightedBar: ht,
    handleAddNewHighlightedBar: Aa,
    handleRemoveHighlightedBar: Pn,
    handleUpdateHighlightedBarColor: Sa,
    handleHighlightedBarLegendLabel: Ta,
    handleUpdateHighlightedBorderWidth: ka
  } = Or(e, t), Rr = (M, L) => {
    let I = e.columns;
    I[M].tooltips = L, t({
      ...e,
      columns: I
    });
  }, jn = {
    addNewExclusion: $e,
    data: n,
    editColumn: yt,
    getColumns: pe,
    getDataValueOptions: se,
    getDataValues: Ae,
    getItemStyle: Ue,
    handleSeriesChange: Et,
    handleAddNewHighlightedBar: Aa,
    setCategoryAxis: Ge,
    sortSeries: vt,
    updateField: te,
    warningMsg: le,
    highlightedBarValues: Jt,
    handleHighlightedBarLegendLabel: Ta,
    handleUpdateHighlightedBar: ht,
    handleRemoveHighlightedBar: Pn,
    isPaletteReversed: e.isPaletteReversed,
    highlightedSeriesValues: _e,
    handleUpdateHighlightedBorderWidth: ka,
    handleUpdateHighlightedBarColor: Sa,
    setLollipopShape: Pt
  };
  return /* @__PURE__ */ r.createElement(Cu.Provider, { value: jn }, /* @__PURE__ */ r.createElement(Bt, { component: "EditorPanel" }, e.newViz && /* @__PURE__ */ r.createElement(Ye, null), e.newViz === void 0 && e.runtime && ((Io = e.runtime) == null ? void 0 : Io.editorErrorMessage) && /* @__PURE__ */ r.createElement(me, null), /* @__PURE__ */ r.createElement("button", { className: ze ? "editor-toggle" : "editor-toggle collapsed", title: ze ? "Collapse Editor" : "Expand Editor", onClick: ve }), /* @__PURE__ */ r.createElement("section", { className: `${ze ? "editor-panel cove" : "hidden editor-panel cove"}${c ? " dashboard" : ""}` }, /* @__PURE__ */ r.createElement("div", { "aria-level": 2, role: "heading", className: "heading-2" }, "Configure Chart"), /* @__PURE__ */ r.createElement("section", { className: "form-container" }, /* @__PURE__ */ r.createElement(bn, { allowZeroExpanded: !0 }, /* @__PURE__ */ r.createElement(yn.General, { name: "General" }), /* @__PURE__ */ r.createElement(yn.ForestPlot, { name: "Forest Plot Settings" }), e.visualizationType !== "Pie" && e.visualizationType !== "Forest Plot" && /* @__PURE__ */ r.createElement(it, null, /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(lt, null, "Data Series ", (!e.series || e.series.length === 0 || e.visualizationType === "Paired Bar" && e.series.length < 2) && /* @__PURE__ */ r.createElement(qa, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(st, null, (!e.series || e.series.length === 0) && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement("p", { className: "warning" }, "At least one series is required"), (!e.series || e.series.length === 0 || e.series.length < 2) && e.visualizationType === "Paired Bar" && /* @__PURE__ */ r.createElement("p", { className: "warning" }, "Select two data series for paired bar chart (e.g., Male and Female)."), /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    De,
    {
      fieldName: "visualizationType",
      label: "Add Data Series",
      initial: "Select",
      onChange: (M) => {
        M.target.value !== "" && M.target.value !== "Select" && tt(M.target.value), M.target.value = "";
      },
      options: pe()
    }
  ), e.series && e.series.length !== 0 && /* @__PURE__ */ r.createElement(yn.Series.Wrapper, { getColumns: pe }, /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("legend", { className: "edit-label float-left" }, "Displaying"), /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "A data series is a set of related data points plotted in a chart and typically represented in the chart legend.")))), /* @__PURE__ */ r.createElement(nl, { onDragEnd: ({ source: M, destination: L }) => Et(M.index, L.index) }, /* @__PURE__ */ r.createElement(al, { droppableId: "filter_order" }, (M) => /* @__PURE__ */ r.createElement("ul", { ...M.droppableProps, className: "series-list", ref: M.innerRef }, /* @__PURE__ */ r.createElement(yn.Series.List, { series: e.series, getItemStyle: Ue, sortableItemStyles: ct, chartsWithOptions: ft }), M.placeholder))))), e.series && e.series.length <= 1 && e.visualizationType === "Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("span", { className: "divider-heading" }, "Confidence Keys"), /* @__PURE__ */ r.createElement(De, { value: e.confidenceKeys.upper || "", section: "confidenceKeys", fieldName: "upper", label: "Upper", updateField: te, initial: "Select", options: pe() }), /* @__PURE__ */ r.createElement(De, { value: e.confidenceKeys.lower || "", section: "confidenceKeys", fieldName: "lower", label: "Lower", updateField: te, initial: "Select", options: pe() })), re() && e.series && e.series.length === 1 && /* @__PURE__ */ r.createElement(De, { fieldName: "visualizationType", label: "Rank by Value", initial: "Select", onChange: (M) => vt(M.target.value), options: ["asc", "desc"] }), e.visualizationType === "Line" && /* @__PURE__ */ r.createElement(dx, { config: e, updateConfig: t, data: n }))), /* @__PURE__ */ r.createElement(yn.BoxPlot, { name: "Measures" }), Se() && /* @__PURE__ */ r.createElement(it, null, /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(lt, null, e.visualizationType === "Pie" ? "Data Format" : e.orientation === "vertical" ? "Left Value Axis" : "Value Axis", e.visualizationType === "Pie" && !e.yAxis.dataKey && /* @__PURE__ */ r.createElement(qa, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(st, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement(
    De,
    {
      value: e.yAxis.dataKey || "",
      section: "yAxis",
      fieldName: "dataKey",
      label: "Data Column",
      initial: "Select",
      required: !0,
      updateField: te,
      options: pe(!1),
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select the source data to be visually represented.")))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(de, { value: e.yAxis.label, section: "yAxis", fieldName: "label", label: "Label ", updateField: te }), e.runtime.seriesKeys && e.runtime.seriesKeys.length === 1 && !["Box Plot", "Deviation Bar", "Forest Plot"].includes(e.visualizationType) && /* @__PURE__ */ r.createElement(Te, { value: e.isLegendValue, fieldName: "isLegendValue", label: "Use Legend Value in Hover", updateField: te }), /* @__PURE__ */ r.createElement(de, { value: e.yAxis.numTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "numTicks", label: "Number of ticks", className: "number-narrow", updateField: te }), e.visualizationType === "Paired Bar" && /* @__PURE__ */ r.createElement(de, { value: e.yAxis.tickRotation || 0, type: "number", min: 0, section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: te }), /* @__PURE__ */ r.createElement(
    de,
    {
      value: e.yAxis.size,
      type: "number",
      section: "yAxis",
      fieldName: "size",
      label: e.orientation === "horizontal" ? "Size (Height)" : "Size (Width)",
      className: "number-narrow",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, `Increase the size if elements in the ${e.orientation} axis are being crowded or hidden behind other elements.  Decrease if less space is required for the value axis.`)))
    }
  ), e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(Te, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: te }), (e.orientation === "vertical" || !e.isResponsiveTicks) && /* @__PURE__ */ r.createElement(de, { value: e.yAxis.tickRotation, type: "number", min: 0, section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: te }), e.isResponsiveTicks && e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(
    de,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" && /* @__PURE__ */ r.createElement(de, { value: e.xAxis.labelOffset, section: "xAxis", fieldName: "labelOffset", label: "Label offset", type: "number", className: "number-narrow", updateField: te }), W() && /* @__PURE__ */ r.createElement(Te, { value: e.yAxis.gridLines, section: "yAxis", fieldName: "gridLines", label: "Show Gridlines", updateField: te }), /* @__PURE__ */ r.createElement(Te, { value: e.yAxis.enablePadding, section: "yAxis", fieldName: "enablePadding", label: "Add Padding to Value Axis Scale", updateField: te }), e.yAxis.enablePadding && /* @__PURE__ */ r.createElement(de, { type: "number", section: "yAxis", fieldName: "scalePadding", label: "Padding Percentage", className: "number-narrow", updateField: te, value: e.yAxis.scalePadding }), e.visualizationSubType === "regular" && e.visualizationType !== "Forest Plot" && /* @__PURE__ */ r.createElement(Te, { value: e.useLogScale, fieldName: "useLogScale", label: "use logarithmic scale", updateField: te })), /* @__PURE__ */ r.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ r.createElement(Te, { value: e.dataFormat.commas, section: "dataFormat", fieldName: "commas", label: "Add commas", updateField: te }), /* @__PURE__ */ r.createElement(
    Te,
    {
      value: e.dataFormat.abbreviated,
      section: "dataFormat",
      fieldName: "abbreviated",
      label: "Abbreviate Axis Values",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  ), /* @__PURE__ */ r.createElement(de, { value: e.dataFormat.roundTo ? e.dataFormat.roundTo : 0, type: "number", section: "dataFormat", fieldName: "roundTo", label: "Round to decimal point", className: "number-narrow", updateField: te, min: 0 }), /* @__PURE__ */ r.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ r.createElement(
    de,
    {
      value: e.dataFormat.prefix,
      section: "dataFormat",
      fieldName: "prefix",
      label: "Prefix",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    de,
    {
      value: e.dataFormat.suffix,
      section: "dataFormat",
      fieldName: "suffix",
      label: "Suffix",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), e.orientation === "horizontal" ? (
    // horizontal - x is vertical y is horizontal
    /* @__PURE__ */ r.createElement(r.Fragment, null, ae() && /* @__PURE__ */ r.createElement(Te, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: te }), ue() && /* @__PURE__ */ r.createElement(Te, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Label", updateField: te }), D() && /* @__PURE__ */ r.createElement(Te, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: te }), B() && /* @__PURE__ */ r.createElement(de, { value: e.xAxis.max, section: "xAxis", fieldName: "max", label: "max value", type: "number", placeholder: "Auto", updateField: te }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, le.maxMsg), q() && /* @__PURE__ */ r.createElement(de, { value: e.xAxis.min, section: "xAxis", fieldName: "min", type: "number", label: "min value", placeholder: "Auto", updateField: te }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, le.minMsg), e.visualizationType === "Deviation Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(de, { value: e.xAxis.target, section: "xAxis", fieldName: "target", type: "number", label: "Deviation point", placeholder: "Auto", updateField: te }), /* @__PURE__ */ r.createElement(de, { value: e.xAxis.targetLabel || "Target", section: "xAxis", fieldName: "targetLabel", type: "text", label: "Deviation point Label", updateField: te }), /* @__PURE__ */ r.createElement(Te, { value: e.xAxis.showTargetLabel, section: "xAxis", fieldName: "showTargetLabel", label: "Show Deviation point label", updateField: te })))
  ) : e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Te, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: te }), /* @__PURE__ */ r.createElement(Te, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Label", updateField: te }), /* @__PURE__ */ r.createElement(Te, { value: e.yAxis.hideTicks, section: "yAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: te }), /* @__PURE__ */ r.createElement(de, { value: e.yAxis.max, section: "yAxis", fieldName: "max", type: "number", label: "left axis max value", placeholder: "Auto", updateField: te }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, le.maxMsg), /* @__PURE__ */ r.createElement(de, { value: e.yAxis.min, section: "yAxis", fieldName: "min", type: "number", label: "left axis min value", placeholder: "Auto", updateField: te }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, le.minMsg)), O() && e.orientation !== "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(bn, { allowZeroExpanded: !0 }, (qo = (jo = e.yAxis) == null ? void 0 : jo.anchors) == null ? void 0 : qo.map((M, L) => /* @__PURE__ */ r.createElement(it, { className: "series-item series-item--chart", key: `yaxis-anchors-2-${L}` }, /* @__PURE__ */ r.createElement(ot, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(lt, { className: "accordion__button accordion__button" }, "Anchor ", L + 1, /* @__PURE__ */ r.createElement(
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
  )))), /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
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
  )), O() && e.orientation === "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(bn, { allowZeroExpanded: !0 }, (Yo = (Uo = e.xAxis) == null ? void 0 : Uo.anchors) == null ? void 0 : Yo.map((M, L) => /* @__PURE__ */ r.createElement(it, { className: "series-item series-item--chart", key: `xaxis-anchors-${L}` }, /* @__PURE__ */ r.createElement(ot, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(lt, { className: "accordion__button accordion__button" }, "Anchor ", L + 1, /* @__PURE__ */ r.createElement(
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
  )))), /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
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
  )))), Ie && /* @__PURE__ */ r.createElement(it, null, /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(lt, null, "Right Value Axis")), /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement(de, { value: e.yAxis.rightLabel, section: "yAxis", fieldName: "rightLabel", label: "Label", updateField: te }), /* @__PURE__ */ r.createElement(de, { value: e.yAxis.rightNumTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "rightNumTicks", label: "Number of ticks", className: "number-narrow", updateField: te }), /* @__PURE__ */ r.createElement(de, { value: e.yAxis.rightAxisSize, type: "number", section: "yAxis", fieldName: "rightAxisSize", label: "Size (Width)", className: "number-narrow", updateField: te }), /* @__PURE__ */ r.createElement(de, { value: e.yAxis.rightLabelOffsetSize, type: "number", section: "yAxis", fieldName: "rightLabelOffsetSize", label: "Label Offset", className: "number-narrow", updateField: te }), /* @__PURE__ */ r.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ r.createElement(Te, { value: e.dataFormat.rightCommas, section: "dataFormat", fieldName: "rightCommas", label: "Add commas", updateField: te }), /* @__PURE__ */ r.createElement(de, { value: e.dataFormat.rightRoundTo, type: "number", section: "dataFormat", fieldName: "rightRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: te, min: 0 }), /* @__PURE__ */ r.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ r.createElement(
    de,
    {
      value: e.dataFormat.rightPrefix,
      section: "dataFormat",
      fieldName: "rightPrefix",
      label: "Prefix",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    de,
    {
      value: e.dataFormat.rightSuffix,
      section: "dataFormat",
      fieldName: "rightSuffix",
      label: "Suffix",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), /* @__PURE__ */ r.createElement(Te, { value: e.yAxis.rightHideAxis, section: "yAxis", fieldName: "rightHideAxis", label: "Hide Axis", updateField: te }), /* @__PURE__ */ r.createElement(Te, { value: e.yAxis.rightHideLabel, section: "yAxis", fieldName: "rightHideLabel", label: "Hide Label", updateField: te }), /* @__PURE__ */ r.createElement(Te, { value: e.yAxis.rightHideTicks, section: "yAxis", fieldName: "rightHideTicks", label: "Hide Ticks", updateField: te }), /* @__PURE__ */ r.createElement(de, { value: e.yAxis.max, section: "yAxis", fieldName: "rightMax", type: "number", label: "right axis max value", placeholder: "Auto", updateField: te }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, le.rightMaxMessage), /* @__PURE__ */ r.createElement(de, { value: e.yAxis.min, section: "yAxis", fieldName: "rightMin", type: "number", label: "right axis min value", placeholder: "Auto", updateField: te }), /* @__PURE__ */ r.createElement("span", { style: { color: "red", display: "block" } }, le.minMsg))), z() && /* @__PURE__ */ r.createElement(it, null, /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(lt, null, e.visualizationType === "Pie" ? "Segments" : "Date/Category Axis", !e.xAxis.dataKey && /* @__PURE__ */ r.createElement(qa, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ r.createElement(st, null, e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, e.visualizationType !== "Forest Plot" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(De, { value: e.xAxis.type, section: "xAxis", fieldName: "type", label: "Data Type", updateField: te, options: e.visualizationType !== "Scatter Plot" ? ["categorical", "date"] : ["categorical", "continuous", "date"] }), (e.visualizationType === "Bar" || e.visualizationType === "Line" || e.visualizationType === "Combo" || e.visualizationType === "Area Chart") && e.orientation !== "horizontal" && /* @__PURE__ */ r.createElement(Te, { value: e.xAxis.sortDates, section: "xAxis", fieldName: "sortDates", label: "Force Date Scale (Sort Dates)", updateField: te }), " "), /* @__PURE__ */ r.createElement(
    De,
    {
      value: e.xAxis.dataKey || Ge() || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Data Key",
      initial: "Select",
      required: !0,
      updateField: te,
      options: pe(!1),
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
    }
  )), e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement(
    De,
    {
      value: e.xAxis.dataKey || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Segment Labels",
      initial: "Select",
      required: !0,
      updateField: te,
      options: pe(!1),
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Select the source row or column that contains the segment labels. Depending on the data structure, it may be listed as "Key."')))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(de, { value: e.xAxis.label, section: "xAxis", fieldName: "label", label: "Label", updateField: te }), e.xAxis.type === "continuous" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    de,
    {
      value: e.dataFormat.bottomPrefix,
      section: "dataFormat",
      fieldName: "bottomPrefix",
      label: "Prefix",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    de,
    {
      value: e.dataFormat.bottomSuffix,
      section: "dataFormat",
      fieldName: "bottomSuffix",
      label: "Suffix",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ r.createElement(
    Te,
    {
      value: e.dataFormat.bottomAbbreviated,
      section: "dataFormat",
      fieldName: "bottomAbbreviated",
      label: "Abbreviate Axis Values",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  )), e.xAxis.type === "date" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("p", { style: { padding: "1.5em 0 0.5em", fontSize: ".9rem", lineHeight: "1rem" } }, "Format how charts should parse and display your dates using", " ", /* @__PURE__ */ r.createElement("a", { href: "https://github.com/d3/d3-time-format#locale_format", target: "_blank", rel: "noreferrer" }, "these guidelines"), "."), /* @__PURE__ */ r.createElement(de, { value: e.xAxis.dateParseFormat, section: "xAxis", fieldName: "dateParseFormat", placeholder: "Ex. %Y-%m-%d", label: "Date Parse Format", updateField: te }), /* @__PURE__ */ r.createElement(de, { value: e.xAxis.dateDisplayFormat, section: "xAxis", fieldName: "dateDisplayFormat", placeholder: "Ex. %Y-%m-%d", label: "AXIS DATE DISPLAY FORMAT", updateField: te }), /* @__PURE__ */ r.createElement(
    de,
    {
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "If not populated, Axis Date Display format will be used. "))),
      value: e.table.dateDisplayFormat,
      section: "table",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "DATA TABLE DATE FORMAT",
      updateField: te
    }
  ), /* @__PURE__ */ r.createElement(
    de,
    {
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "If not populated, Axis Date Display format will be used. "))),
      value: e.tooltips.dateDisplayFormat,
      section: "tooltips",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "HOVER DATE FORMAT",
      updateField: te
    }
  )), /* @__PURE__ */ r.createElement(
    Te,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: e.xAxis.type === "date" ? "Limit by start and/or end dates" : "Exclude one or more values",
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "When this option is checked, you can select source-file values for exclusion from the date/category axis. "))),
      updateField: te
    }
  ), e.exclusions.active && /* @__PURE__ */ r.createElement(r.Fragment, null, e.xAxis.type === "categorical" && /* @__PURE__ */ r.createElement(r.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ r.createElement(bt, null)), /* @__PURE__ */ r.createElement(
    De,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (M) => {
        M.target.value !== "" && M.target.value !== "Select" && $e(M.target.value), M.target.value = "";
      },
      options: Ae(e.xAxis.dataKey, !0)
    }
  )), e.xAxis.type === "date" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(de, { type: "date", section: "exclusions", fieldName: "dateStart", label: "Start Date", updateField: te, value: e.exclusions.dateStart || "" }), /* @__PURE__ */ r.createElement(de, { type: "date", section: "exclusions", fieldName: "dateEnd", label: "End Date", updateField: te, value: e.exclusions.dateEnd || "" }))), ce() && /* @__PURE__ */ r.createElement(de, { value: e.xAxis.numTicks, placeholder: "Auto", type: "number", min: 1, section: "xAxis", fieldName: "numTicks", label: "Number of ticks", className: "number-narrow", updateField: te }), He() && /* @__PURE__ */ r.createElement(de, { value: e.xAxis.size, type: "number", min: 0, section: "xAxis", fieldName: "size", label: e.orientation === "horizontal" ? "Size (Width)" : "Size (Height)", className: "number-narrow", updateField: te }), we() && /* @__PURE__ */ r.createElement(de, { value: e.xAxis.padding, type: "number", min: 0, section: "xAxis", fieldName: "padding", label: "Padding (Percent)", className: "number-narrow", updateField: te }), (e.xAxis.type === "continuous" || e.forestPlot.type === "Logarithmic") && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Te, { value: e.dataFormat.bottomCommas, section: "dataFormat", fieldName: "bottomCommas", label: "Add commas", updateField: te }), /* @__PURE__ */ r.createElement(de, { value: e.dataFormat.bottomRoundTo, type: "number", section: "dataFormat", fieldName: "bottomRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: te, min: 0 })), J() && e.orientation === "vertical" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(Te, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: te }), (e.orientation === "horizontal" || !e.isResponsiveTicks) && ne() && /* @__PURE__ */ r.createElement(de, { value: e.xAxis.tickRotation, type: "number", min: 0, section: "xAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: te }), e.orientation === "vertical" && e.isResponsiveTicks && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ r.createElement(
    de,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" ? /* @__PURE__ */ r.createElement(r.Fragment, null, U() && /* @__PURE__ */ r.createElement(Te, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: te }), j() && /* @__PURE__ */ r.createElement(Te, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Label", updateField: te })) : /* @__PURE__ */ r.createElement(r.Fragment, null, U() && /* @__PURE__ */ r.createElement(Te, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: te }), j() && /* @__PURE__ */ r.createElement(Te, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Label", updateField: te }), X() && /* @__PURE__ */ r.createElement(Te, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: te })), ((Xo = e.series) == null ? void 0 : Xo.length) === 1 && e.visualizationType === "Bar" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", { htmlFor: "barHighlight" }, "Bar Highlighting"), e.series.length === 1 && Jt.map((M, L) => /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("div", { className: "edit-block", key: `highlighted-bar-${L}` }, /* @__PURE__ */ r.createElement("button", { className: "remove-column", onClick: (I) => Pn(I, L) }, "Remove"), /* @__PURE__ */ r.createElement("p", null, "Highlighted Bar ", L + 1), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Value"), /* @__PURE__ */ r.createElement("select", { value: e.highlightedBarValues[L].value, onChange: (I) => ht(I, L) }, /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Value -"), _e && [...new Set(_e)].sort().map((I) => /* @__PURE__ */ r.createElement("option", { key: `special-class-value-option-${L}-${I}` }, I)))), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Color"), /* @__PURE__ */ r.createElement("input", { type: "text", value: e.highlightedBarValues[L].color ? e.highlightedBarValues[L].color : "", onChange: (I) => Sa(I, L) })), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Border Width"), /* @__PURE__ */ r.createElement("input", { max: "5", min: "0", type: "number", value: e.highlightedBarValues[L].borderWidth ? e.highlightedBarValues[L].borderWidth : "", onChange: (I) => ka(I, L) })), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Legend Label"), /* @__PURE__ */ r.createElement("input", { type: "text", value: e.highlightedBarValues[L].legendLabel ? e.highlightedBarValues[L].legendLabel : "", onChange: (I) => Ta(I, L) }))))), /* @__PURE__ */ r.createElement("button", { className: "btn full-width", onClick: (M) => Aa(M) }, "Add Highlighted Bar"))), e.visualizationType === "Pie" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    Te,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: "Exclude one or more values",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "When this option is checked, you can select values for exclusion from the pie segments.")))
    }
  ), e.exclusions.active && /* @__PURE__ */ r.createElement(r.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("fieldset", null, /* @__PURE__ */ r.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ r.createElement(bt, null)), /* @__PURE__ */ r.createElement(
    De,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (M) => {
        M.target.value !== "" && M.target.value !== "Select" && $e(M.target.value), M.target.value = "";
      },
      options: Ae(e.xAxis.dataKey, !0)
    }
  ))), O() && e.orientation !== "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(bn, { allowZeroExpanded: !0 }, (Zo = (Qo = e.xAxis) == null ? void 0 : Qo.anchors) == null ? void 0 : Zo.map((M, L) => /* @__PURE__ */ r.createElement(it, { className: "series-item series-item--chart", key: `xaxis-anchors-2-${L}` }, /* @__PURE__ */ r.createElement(ot, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(lt, { className: "accordion__button accordion__button" }, "Anchor ", L + 1, /* @__PURE__ */ r.createElement(
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
  )))), /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
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
  )), O() && e.orientation === "horizontal" && /* @__PURE__ */ r.createElement("div", { className: "edit-block" }, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ r.createElement(bn, { allowZeroExpanded: !0 }, (Jo = (Go = e.yAxis) == null ? void 0 : Go.anchors) == null ? void 0 : Jo.map((M, L) => /* @__PURE__ */ r.createElement(it, { className: "series-item series-item--chart", key: `accordion-yaxis-anchors-${L}` }, /* @__PURE__ */ r.createElement(ot, { className: "series-item__title" }, /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(lt, { className: "accordion__button accordion__button" }, "Anchor ", L + 1, /* @__PURE__ */ r.createElement(
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
  )))), /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", null, "Anchor Value"), /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ r.createElement(
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
  )))), /* @__PURE__ */ r.createElement(yn.Regions, { name: "Regions" }), e.visualizationType !== "Box Plot" && /* @__PURE__ */ r.createElement(it, null, /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(lt, null, "Columns")), /* @__PURE__ */ r.createElement(st, null, e.type !== "navigation" && /* @__PURE__ */ r.createElement("fieldset", { className: "primary-fieldset edit-block" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Additional Columns", /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "You can specify additional columns to display in tooltips and / or the supporting data table."))))), Xt.map((M) => /* @__PURE__ */ r.createElement("fieldset", { className: "edit-block", key: M }, /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (L) => {
        L.preventDefault(), ut(M);
      }
    },
    "Remove"
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.columns[M] ? e.columns[M].name : pe()[0],
      onChange: (L) => {
        yt(M, "name", L.target.value);
      }
    },
    pe().map((L) => /* @__PURE__ */ r.createElement("option", null, L))
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
  )), /* @__PURE__ */ r.createElement(de, { value: e.columns[M].label, section: "columns", subsection: M, fieldName: "label", label: "Label", updateField: te }), /* @__PURE__ */ r.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ r.createElement("li", { className: "three-col" }, /* @__PURE__ */ r.createElement(de, { value: e.columns[M].prefix, section: "columns", subsection: M, fieldName: "prefix", label: "Prefix", updateField: te }), /* @__PURE__ */ r.createElement(de, { value: e.columns[M].suffix, section: "columns", subsection: M, fieldName: "suffix", label: "Suffix", updateField: te }), /* @__PURE__ */ r.createElement(de, { type: "number", value: e.columns[M].roundToPlace, section: "columns", subsection: M, fieldName: "roundToPlace", label: "Round", updateField: te })), /* @__PURE__ */ r.createElement("li", null, /* @__PURE__ */ r.createElement("label", { className: "checkbox" }, /* @__PURE__ */ r.createElement(
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
        Rr(M, L.target.checked);
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
        M.preventDefault(), Je(Xt.length + 1);
      }
    },
    "Add Column"
  )), e.legend.type === "category" && /* @__PURE__ */ r.createElement("fieldset", { className: "primary-fieldset edit-block" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Additional Category", /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "You can provide additional categories to ensure they appear in the legend"))))), e.legend.additionalCategories && e.legend.additionalCategories.map((M, L) => /* @__PURE__ */ r.createElement("fieldset", { className: "edit-block", key: M }, /* @__PURE__ */ r.createElement(
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
    de,
    {
      value: M,
      label: "Category",
      section: "legend",
      subsection: null,
      fieldName: "additionalCategories",
      updateField: (I, ee, Qe, wt) => {
        const Vt = [...e.legend.additionalCategories];
        Vt[L] = wt, te(I, ee, Qe, Vt);
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
  )))), H() && /* @__PURE__ */ r.createElement(it, null, /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(lt, null, "Legend")), /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement(Te, { value: e.legend.reverseLabelOrder, section: "legend", fieldName: "reverseLabelOrder", label: "Reverse Labels", updateField: te }), /* @__PURE__ */ r.createElement(
    Te,
    {
      value: !!e.legend.hide,
      section: "legend",
      fieldName: "hide",
      label: "Hide Legend",
      updateField: te,
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, "With a single-series chart, consider hiding the legend to reduce visual clutter.")))
    }
  ), e.visualizationType === "Line" && /* @__PURE__ */ r.createElement(Te, { value: e.legend.lineMode, section: "legend", fieldName: "lineMode", label: "Show Lined Style Legend", updateField: te }), e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1 && /* @__PURE__ */ r.createElement(De, { value: e.legend.colorCode, section: "legend", fieldName: "colorCode", label: "Color code by category", initial: "Select", updateField: te, options: se(n) }), /* @__PURE__ */ r.createElement(De, { value: e.legend.behavior, section: "legend", fieldName: "behavior", label: "Legend Behavior (When clicked)", updateField: te, options: ["highlight", "isolate"] }), e.legend.behavior === "highlight" && e.tooltips.singleSeries && /* @__PURE__ */ r.createElement(Te, { value: e.legend.highlightOnHover, section: "legend", fieldName: "highlightOnHover", label: "HIGHLIGHT DATA SERIES ON HOVER", updateField: te }), /* @__PURE__ */ r.createElement(de, { value: e.legend.label, section: "legend", fieldName: "label", label: "Title", updateField: te }), /* @__PURE__ */ r.createElement(De, { value: e.legend.position, section: "legend", fieldName: "position", label: "Position", updateField: te, options: ["right", "left", "bottom"] }), e.legend.position === "bottom" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(Te, { value: e.legend.singleRow, section: "legend", fieldName: "singleRow", label: "Single Row Legend", updateField: te }), /* @__PURE__ */ r.createElement(Te, { value: e.legend.verticalSorted, section: "legend", fieldName: "verticalSorted", label: "Vertical sorted Legend", updateField: te })), /* @__PURE__ */ r.createElement(de, { type: "textarea", value: e.legend.description, updateField: te, section: "legend", fieldName: "description", label: "Legend Description" }))), G() && /* @__PURE__ */ r.createElement(it, null, /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(lt, null, "Filters")), /* @__PURE__ */ r.createElement(st, null, e.filters && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    De,
    {
      value: e.filterBehavior,
      fieldName: "filterBehavior",
      label: "Filter Behavior",
      updateField: te,
      options: ["Apply Button", "Filter Change"],
      tooltip: /* @__PURE__ */ r.createElement(Z, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(Z.Target, null, /* @__PURE__ */ r.createElement(Re, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(Z.Content, null, /* @__PURE__ */ r.createElement("p", null, 'The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.')))
    }
  ), /* @__PURE__ */ r.createElement("br", null)), e.filters && /* @__PURE__ */ r.createElement("ul", { className: "filters-list" }, e.filters.map((M, L) => M.type === "url" ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement("fieldset", { className: "edit-block", key: L }, /* @__PURE__ */ r.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        Nt(L);
      }
    },
    "Remove"
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Filter"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: M.columnName,
      onChange: (I) => {
        kt("columnName", L, I.target.value);
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
        kt("showDropdown", L, I.target.checked);
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Filter Style"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: M.filterStyle,
      onChange: (I) => {
        kt("filterStyle", L, I.target.value);
      }
    },
    je.map((I, ee) => /* @__PURE__ */ r.createElement("option", { key: `filter-style-${ee}`, value: I }, I))
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Label"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      value: M.label,
      onChange: (I) => {
        kt("label", L, I.target.value);
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-filterOrder column-heading" }, "Filter Order"), /* @__PURE__ */ r.createElement("select", { value: M.order ? M.order : "asc", onChange: (I) => kt("order", L, I.target.value) }, Oe.map((I, ee) => /* @__PURE__ */ r.createElement("option", { value: I.value, key: `filter-${ee}` }, I.label))), M.order === "cust" && /* @__PURE__ */ r.createElement(nl, { onDragEnd: ({ source: I, destination: ee }) => Le(I.index, ee.index, L, e.filters[L]) }, /* @__PURE__ */ r.createElement(al, { droppableId: "filter_order" }, (I) => {
    var ee;
    return /* @__PURE__ */ r.createElement("ul", { ...I.droppableProps, className: "sort-list", ref: I.innerRef, style: { marginTop: "1em" } }, (ee = e.filters[L]) == null ? void 0 : ee.values.map((Qe, wt) => /* @__PURE__ */ r.createElement(Ls, { key: Qe, draggableId: `draggableFilter-${Qe}`, index: wt }, (Vt, qn) => /* @__PURE__ */ r.createElement("li", null, /* @__PURE__ */ r.createElement("div", { className: qn.isDragging ? "currently-dragging" : "", style: Ue(qn.isDragging, Vt.draggableProps.style), ref: Vt.innerRef, ...Vt.draggableProps, ...Vt.dragHandleProps }, Qe)))), I.placeholder);
  })))))), !e.filters && /* @__PURE__ */ r.createElement("p", { style: { textAlign: "center" } }, "There are currently no filters."), /* @__PURE__ */ r.createElement("button", { type: "button", onClick: Yt, className: "btn full-width" }, "Add Filter"))), /* @__PURE__ */ r.createElement(yn.Visual, { name: "Visual" }), e.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement(it, null, /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(lt, null, "Data Table")), /* @__PURE__ */ r.createElement(st, null, /* @__PURE__ */ r.createElement(Uu, { config: e, columns: Object.keys(n[0] || {}), updateField: te, isDashboard: c, isLoadedFromUrl: mt }), " "))), e.type !== "Spark Line" && /* @__PURE__ */ r.createElement(Ou, { loadConfig: t, state: e, convertStateToConfig: at })))));
}, ks = (e) => {
  let t = "", n = Math.abs(e);
  return n >= 1e9 ? (t = "B", e = e / 1e9) : n >= 1e6 ? (t = "M", e = e / 1e6) : n >= 1e3 && (t = "K", e = e / 1e3), e + t;
}, fx = (e) => {
  e.sort((u, d) => u - d);
  const t = Math.floor(e.length / 2), n = e.length % 2 === 0, a = n ? e.slice(0, t) : e.slice(0, t + 1), i = n ? e.slice(t) : e.slice(t + 1), o = Math.floor(a.length / 2), l = n ? (a[o - 1] + a[o]) / 2 : a[o], s = Math.floor(i.length / 2), c = n ? (i[s - 1] + i[s]) / 2 : i[s];
  return { q1: l, q3: c };
}, hx = (e, t) => e.toString().localeCompare(t.toString(), "en", { numeric: !0 }), px = (e, t) => t.toString().localeCompare(e.toString(), "en", { numeric: !0 }), gn = (e, t) => {
  let n = [];
  return t.forEach((a) => {
    let i = !0;
    e.filter((o) => o.type !== "url").forEach((o) => {
      a[o.columnName] != o.active && (i = !1);
    }), i && n.push(a);
  }), n;
}, yx = [
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
], ws = (e = "#000000", t = !1) => {
  let n = Ft(e), a = t ? n.brighten(0.5).hex() : n.saturate(1.3).hex();
  return [e, a, n.darken(0.3).hex()];
}, Cs = (e, t, n) => {
  const a = t.position === "bottom" || ["sm", "xs", "xxs"].includes(n), i = e.orientation === "horizontal", o = Number(e.xAxis.tickRotation) > 0 ? Number(e.xAxis.tickRotation) : 0, l = e.brush.active, s = 20, c = e.brush.height;
  let u = 0;
  return !a && i && !e.yAxis.label && (u = Number(e.xAxis.labelOffset)), !a && i && e.yAxis.label && !e.isResponsiveTicks && (u = Number(e.runtime.xAxis.size) + Number(e.xAxis.labelOffset)), !a && i && e.yAxis.label && e.isResponsiveTicks && (u = e.dynamicMarginTop + s), !a && i && !e.yAxis.label && e.isResponsiveTicks && (u = e.dynamicMarginTop ? e.dynamicMarginTop - s : Number(e.xAxis.labelOffset) - s), !a && i && e.yAxis.label && e.isResponsiveTicks && (u = e.dynamicMarginTop ? e.dynamicMarginTop + s : Number(e.xAxis.labelOffset)), !i && !a && e.xAxis.label && o && !e.isResponsiveTicks && (u = l ? c + e.xAxis.tickWidthMax + -e.xAxis.size + e.xAxis.labelOffset + s : e.xAxis.tickWidthMax + s + -e.xAxis.size + e.xAxis.labelOffset), !i && !a && !e.xAxis.label && o && e.isResponsiveTicks, !i && !a && !e.xAxis.label && o && !e.dynamicMarginTop && !e.isResponsiveTicks && (u = l ? e.xAxis.tickWidthMax + c + s + -e.xAxis.size : 0), !i && !a && e.xAxis.label && !o && !e.isResponsiveTicks && (u = l ? c + -e.xAxis.size + e.xAxis.labelOffset + s : -e.xAxis.size + e.xAxis.labelOffset + s), !i && !a && e.xAxis.label && e.dynamicMarginTop && e.isResponsiveTicks && (u = l ? c + e.xAxis.labelOffset + -e.xAxis.size + e.xAxis.tickWidthMax : e.dynamicMarginTop + -e.xAxis.size + s), !i && !a && !e.xAxis.label && e.dynamicMarginTop && e.isResponsiveTicks && (u = l ? c + e.xAxis.labelOffset + -e.xAxis.size + e.xAxis.tickWidthMax : e.dynamicMarginTop + -e.xAxis.size - s), !i && !a && e.xAxis.label && !e.dynamicMarginTop && e.isResponsiveTicks && (u = l ? c + e.xAxis.labelOffset + -e.xAxis.size + 25 : e.xAxis.labelOffset + -e.xAxis.size + s), !i && !a && !e.xAxis.label && !e.dynamicMarginTop && e.isResponsiveTicks && (u = -e.xAxis.size + s + e.xAxis.labelOffset), !i && !a && !e.xAxis.label && !o && !e.dynamicMarginTop && !e.isResponsiveTicks && (u = l ? c + -e.xAxis.size + e.xAxis.labelOffset : 0), `${u}px`;
};
const Ps = (e) => {
  const t = /(?:\.([^.]+))$/, n = /[?&]wt=(csv|json)(?:&|$)/, a = new URL(e, window.location.origin), i = a.pathname, o = a.search, l = t.exec(i);
  if (l && l[1])
    return l[1];
  const s = n.exec(o);
  return s && s[1] ? s[1] : "";
};
function Kx({ configUrl: e, config: t, isEditor: n = !1, isDebug: a = !1, isDashboard: i = !1, setConfig: o, setEditing: l, hostname: s, link: c, setSharedFilter: u, setSharedFilterValue: d, dashboardConfig: h }) {
  var vt, $e;
  const m = new Os(), [p, y] = $.useState(!0), [E, g] = $.useState(null), [f, x] = $.useState(t || {}), [v, b] = $.useState(f.data || []), [S, A] = $.useState(void 0), [T, N] = $.useState(void 0), [w, C] = $.useState([]), [_, k] = $.useState("lg"), [O, K] = $.useState([]), [V, F] = $.useState(), [H, Y] = $.useState(), [z, q] = $.useState(!1), [B, j] = $.useState([]), [U] = $.useState(`cove-${Math.random().toString(16).slice(-4)}`);
  $.useRef(/* @__PURE__ */ new Map()), $.useRef(), a && console.log("Chart config, isEditor", f, n);
  let { legend: X, title: ne, description: ce, visualizationType: we } = f;
  n && (!ne || ne === "") && (ne = "Chart Title"), f.table && (!((vt = f.table) != null && vt.label) || (($e = f.table) == null ? void 0 : $e.label) === "") && (f.table.label = "Data Table");
  const { barBorderClass: Ce, lineDatapointClass: G, contentClasses: W, sparkLineStyles: ae } = Yu(f), D = f.showSidebar ? "#legend" : f != null && f.title ? `#dataTableSection__${f.title.replace(/\s/g, "")}` : "#dataTableSection", ue = async () => {
    if (f.dataUrl) {
      const P = new URL(f.runtimeDataUrl || f.dataUrl, window.location.origin);
      let ie = Object.fromEntries(new URLSearchParams(P.search)), pe = !1;
      if (f.filters.forEach((ve) => {
        ve.type === "url" && ie[ve.queryParameter] !== decodeURIComponent(ve.active) && (ie[ve.queryParameter] = ve.active, pe = !0);
      }), (!f.formattedData || f.formattedData.urlFiltered) && !pe)
        return;
      let se = `${P.origin}${P.pathname}${Object.keys(ie).map((ve, me) => {
        let Ye = me === 0 ? "?" : "&";
        return Ye += ve + "=", Ye += ie[ve], Ye;
      }).join("")}`, Ae = [];
      try {
        const ve = Ps(P.href);
        ve === "csv" ? Ae = await fetch(se).then((me) => me.text()).then((me) => el.parse(me, {
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0
        }).data) : ve === "json" ? Ae = await fetch(se).then((me) => me.json()) : Ae = [];
      } catch {
        console.error(`Cannot parse URL: ${se}`), Ae = [];
      }
      f.dataDescription && (Ae = m.autoStandardize(Ae), Ae = m.developerStandardize(Ae, f.dataDescription)), Object.assign(Ae, { urlFiltered: !0 }), ye({ ...f, runtimeDataUrl: se, data: Ae, formattedData: Ae }), Ae && (b(Ae), A(Ae), N(gn(f.filters, Ae)));
    }
  }, oe = async () => {
    let P = t || await (await fetch(e)).json(), ie = P.data || [];
    const pe = P.filters ? P.filters.filter((ve) => ve.type === "url").length > 0 : !1;
    if (P.dataUrl && !pe)
      try {
        const ve = Ps(P.dataUrl);
        ve === "csv" && (ie = await fetch(P.dataUrl + `?v=${ul()}`).then((me) => me.text()).then((me) => (me = me.replace(/(".*?")|,/g, (...at) => at[1] || "|"), me = me.replace(/["]+/g, ""), el.parse(me, {
          //quotes: "true",  // dont need these
          //quoteChar: "'",  // has no effect that I can tell
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0,
          delimiter: "|"
          // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
        }).data))), ve === "json" && (ie = await fetch(P.dataUrl + `?v=${ul()}`).then((me) => me.json()));
      } catch {
        console.error(`COVE: Cannot parse URL: ${P.dataUrl}`), ie = [];
      }
    P.dataDescription && (ie = m.autoStandardize(ie), ie = m.developerStandardize(ie, P.dataDescription)), ie && (b(ie), A(ie)), P !== void 0 && P.table !== void 0 && (!P.table || !P.table.showVertical) && (P.table = P.table || {}, P.table.showVertical = !1);
    let se = { ...oi, ...P };
    se.visualizationType === "Box Plot" && (se.legend.hide = !0), se.table.show === void 0 && (se.table.show = !i), se.series.map((ve) => {
      ve.tooltip || (ve.tooltip = !0), ve.axis || (ve.axis = "Left");
    }), !se.data && ie && (se.data = ie);
    const Ae = { ...await Gu(se) };
    ye(Ae, ie);
  }, ye = (P, ie) => {
    var ve;
    let pe = ie || v;
    Object.keys(oi).forEach((me) => {
      P[me] && typeof P[me] == "object" && !Array.isArray(P[me]) && (P[me] = { ...oi[me], ...P[me] });
    });
    let se = [];
    if (P.exclusions && P.exclusions.active)
      if (P.xAxis.type === "categorical" && ((ve = P.exclusions.keys) == null ? void 0 : ve.length) > 0)
        se = pe.filter((me) => !P.exclusions.keys.includes(me[P.xAxis.dataKey]));
      else if (P.xAxis.type === "date" && (P.exclusions.dateStart || P.exclusions.dateEnd) && P.xAxis.dateParseFormat) {
        const me = (Q) => new Date(Q).getTime();
        let Ye = me(P.exclusions.dateStart), at = me(P.exclusions.dateEnd) + 86399999, bt = typeof Ye !== void 0 && isNaN(Ye) === !1, Et = typeof at !== void 0 && isNaN(at) === !1;
        bt && Et ? se = pe.filter((Q) => me(Q[P.xAxis.dataKey]) >= Ye && me(Q[P.xAxis.dataKey]) <= at) : bt ? se = pe.filter((Q) => me(Q[P.xAxis.dataKey]) >= Ye) : Et && (se = pe.filter((Q) => me(Q[P.xAxis.dataKey]) <= at));
      } else
        se = ie || v;
    else
      se = ie || v;
    A(se);
    let Ae = [];
    if (P.filters && (P.filters.forEach((me, Ye) => {
      let at = [];
      at = me.orderedValues || he(me.columnName, se).sort(me.order === "desc" ? px : hx), P.filters[Ye].values = at, P.filters[Ye].active = P.filters[Ye].active || at[0], P.filters[Ye].filterStyle = P.filters[Ye].filterStyle ? P.filters[Ye].filterStyle : "dropdown";
    }), Ae = gn(P.filters, se), N(Ae)), (!["Area Chart", "Bar", "Line", "Combo"].includes(P.visualizationType) || P.orientation === "horizontal") && (P.xAxis.sortDates = !1), P.runtime = {}, P.runtime.seriesLabels = {}, P.runtime.seriesLabelsAll = [], P.runtime.originalXAxis = P.xAxis, P.visualizationType === "Pie" ? (P.runtime.seriesKeys = (ie || pe).map((me) => me[P.xAxis.dataKey]), P.runtime.seriesLabelsAll = P.runtime.seriesKeys) : P.runtime.seriesKeys = P.series ? P.series.map((me) => (P.runtime.seriesLabels[me.dataKey] = me.name || me.label || me.dataKey, P.runtime.seriesLabelsAll.push(me.name || me.dataKey), me.dataKey)) : [], P.visualizationType === "Box Plot" && P.series) {
      let me = se ? se.map((le) => le[P.xAxis.dataKey]) : pe.map((le) => le[P.xAxis.dataKey]), Ye = se ? se.map((le) => {
        var Pe;
        return Number(le[(Pe = P == null ? void 0 : P.series[0]) == null ? void 0 : Pe.dataKey]);
      }) : pe.map((le) => {
        var Pe;
        return Number(le[(Pe = P == null ? void 0 : P.series[0]) == null ? void 0 : Pe.dataKey]);
      });
      const bt = function(le) {
        return le.filter(function(Pe, ge, nt) {
          return nt.indexOf(Pe) === ge;
        });
      }(me);
      let Et = [];
      const Q = [];
      if (!bt)
        return;
      bt.forEach((le) => {
        try {
          if (!le)
            throw new Error("No groups resolved in box plots");
          let Pe = se ? se.filter((_e) => _e[P.xAxis.dataKey] === le) : pe.filter((_e) => _e[P.xAxis.dataKey] === le), ge = Pe.map((_e) => {
            var ht;
            return Number(_e[(ht = P == null ? void 0 : P.series[0]) == null ? void 0 : ht.dataKey]);
          }), nt = ge.sort((_e, ht) => _e - ht);
          const mt = fx(nt);
          if (!Pe)
            throw new Error("boxplots dont have data yet");
          if (!Q)
            throw new Error("boxplots dont have plots yet");
          P.boxplot.firstQuartilePercentage === "" && (P.boxplot.firstQuartilePercentage = 0), P.boxplot.thirdQuartilePercentage === "" && (P.boxplot.thirdQuartilePercentage = 0);
          const Ge = mt.q1, At = mt.q3, ft = At - Ge, Lt = Ge - (At - Ge) * 1.5, Xt = At + (At - Ge) * 1.5, Je = nt.filter((_e) => _e < Lt || _e > Xt);
          let ut = ge;
          ut = ut.filter((_e) => !Je.includes(_e));
          const yt = ea(ge) || 0, Jt = Jn([yt, Ge - 1.5 * ft]);
          Q.push({
            columnCategory: le,
            columnMax: ea([Jn(ge), Ge + 1.5 * ft]),
            columnThirdQuartile: Number(At).toFixed(P.dataFormat.roundTo),
            columnMedian: Number(id(ge)).toFixed(P.dataFormat.roundTo),
            columnFirstQuartile: Ge.toFixed(P.dataFormat.roundTo),
            columnMin: Jt,
            columnTotal: ge.reduce((_e, ht) => _e + ht, 0),
            columnSd: Number(nd(ge)).toFixed(P.dataFormat.roundTo),
            columnMean: Number(rd(ge)).toFixed(P.dataFormat.roundTo),
            columnIqr: Number(ft).toFixed(P.dataFormat.roundTo),
            columnLowerBounds: Jt,
            columnUpperBounds: ea([Jn(nt), Ge + 1.5 * ft]),
            columnOutliers: Je,
            values: ge,
            nonOutlierValues: ut
          });
        } catch (Pe) {
          console.error("COVE: ", Pe.message);
        }
      }), Et = JSON.parse(JSON.stringify(Q)), Et.map((le) => (le.columnIqr = void 0, le.nonOutlierValues = void 0, le.columnLowerBounds = void 0, le.columnUpperBounds = void 0, null)), P.boxplot.allValues = Ye, P.boxplot.categories = bt, P.boxplot.plots = Q, P.boxplot.tableData = Et;
    }
    P.visualizationType === "Combo" && P.series && (P.runtime.barSeriesKeys = [], P.runtime.lineSeriesKeys = [], P.runtime.areaSeriesKeys = [], P.runtime.forecastingSeriesKeys = [], P.series.forEach((me) => {
      me.type === "Area Chart" && P.runtime.areaSeriesKeys.push(me), me.type === "Forecasting" && P.runtime.forecastingSeriesKeys.push(me), me.type === "Bar" && P.runtime.barSeriesKeys.push(me.dataKey), (me.type === "Line" || me.type === "dashed-sm" || me.type === "dashed-md" || me.type === "dashed-lg") && P.runtime.lineSeriesKeys.push(me.dataKey), me.type === "Combo" && (me.type = "Bar");
    })), P.visualizationType === "Forecasting" && P.series && (P.runtime.forecastingSeriesKeys = [], P.series.forEach((me) => {
      me.type === "Forecasting" && P.runtime.forecastingSeriesKeys.push(me);
    })), P.visualizationType === "Area Chart" && P.series && (P.runtime.areaSeriesKeys = [], P.series.forEach((me) => {
      P.runtime.areaSeriesKeys.push({ ...me, type: "Area Chart" });
    })), P.visualizationType === "Bar" && P.orientation === "horizontal" || ["Deviation Bar", "Paired Bar", "Forest Plot"].includes(P.visualizationType) ? (P.runtime.xAxis = P.yAxis.yAxis ? P.yAxis.yAxis : P.yAxis, P.runtime.yAxis = P.xAxis.xAxis ? P.xAxis.xAxis : P.xAxis, P.runtime.horizontal = !1, P.orientation = "horizontal") : ["Box Plot", "Scatter Plot", "Area Chart", "Line", "Forecasting"].includes(P.visualizationType) ? (P.runtime.xAxis = P.xAxis, P.runtime.yAxis = P.yAxis, P.runtime.horizontal = !1, P.orientation = "vertical") : (P.runtime.xAxis = P.xAxis, P.runtime.yAxis = P.yAxis, P.runtime.horizontal = !1), P.runtime.uniqueId = Date.now(), P.runtime.editorErrorMessage = P.visualizationType === "Pie" && !P.yAxis.dataKey ? "Data Key property in Y Axis section must be set for pie charts." : "", x(P);
  }, he = (P, ie = this.state.data) => {
    const pe = [];
    return ie.forEach((se) => {
      const Ae = se[P];
      Ae && pe.includes(Ae) === !1 && pe.push(Ae);
    }), pe;
  }, Ee = (P, ie) => {
    let pe = f.visualizationType === "Bar" && f.visualizationSubType === "horizontal" ? f.xAxis.dataKey : f.yAxis.sortKey, se = parseFloat(P[pe]), Ae = parseFloat(ie[pe]);
    return se < Ae ? f.sortData === "ascending" ? 1 : -1 : se > Ae ? f.sortData === "ascending" ? -1 : 1 : 0;
  }, Ne = new Nu((P) => {
    for (let ie of P) {
      let { width: pe, height: se } = ie.contentRect, Ae = Lu(pe), ve = 32, me = 350;
      k(Ae), n && (pe = pe - me), ie.target.dataset.lollipop === "true" && (pe = pe - 2.5), pe = pe - ve, K([pe, se]);
    }
  }), ke = $.useCallback((P) => {
    P !== null && Ne.observe(P), Y(P);
  }, []);
  function Se(P) {
    return Object.keys(P).length === 0;
  }
  $.useEffect(() => {
    oe();
  }, []), $.useEffect(() => {
    ue();
  }, [JSON.stringify(f.filters)]), $.useEffect(() => {
    H && !Se(f) && !z && (Xu("cove_loaded", { config: f }), q(!0));
  }, [H, f]), $.useEffect(() => {
    const P = (ie) => {
      let pe = [];
      pe.push(ie.detail), F(pe);
    };
    return Qu("cove_filterData", (ie) => P(ie)), () => {
      Zu("cove_filterData", P);
    };
  }, [f]), $.useEffect(() => {
    if (V && V[0] && !V[0].hasOwnProperty("active")) {
      let ie = { ...f };
      delete ie.filters, x(ie), N(gn(V, S));
    }
    if (V && V.length > 0 && V.length > 0 && V[0].hasOwnProperty("active")) {
      let P = { ...f, filters: V };
      x(P), N(gn(V, S));
    }
  }, [V]), t && $.useEffect(() => {
    oe();
  }, [t.data]), $.useEffect(() => {
    var P;
    if (v && f.xAxis && ((P = f.runtime) != null && P.seriesKeys)) {
      const ie = ["Paired Bar", "Deviation Bar"].includes(f.visualizationType) ? f.twoColor.palette : f.palette, pe = { ...Ct, ...Ua };
      let se = f.customColors || pe[ie], Ae = f.runtime.seriesKeys.length, ve;
      for (; Ae > se.length; )
        se = se.concat(se);
      se = se.slice(0, Ae), ve = () => Zi({
        domain: f.runtime.seriesLabelsAll,
        range: se,
        unknown: null
      }), g(ve), y(!1);
    }
    f && v && f.sortData && v.sort(Ee);
  }, [f, v]);
  const xe = (P) => {
    if (w.length + 1 === f.runtime.seriesKeys.length && f.visualizationType !== "Forecasting") {
      re();
      return;
    }
    const ie = [...w];
    let pe = P.datum;
    f.runtime.seriesLabels && f.runtime.seriesKeys.forEach((se) => {
      f.runtime.seriesLabels[se] === P.datum && (pe = se);
    }), ie.indexOf(pe) !== -1 ? ie.splice(ie.indexOf(pe), 1) : ie.push(pe), C(ie);
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
    let pe = gc(f.runtime[J].dateParseFormat)(P);
    return pe || (ie && (f.runtime.editorErrorMessage = `Error parsing date "${P}". Try reviewing your data and date parse settings in the X Axis section.`), /* @__PURE__ */ new Date());
  }, fe = (P) => ci(f.runtime[J].dateDisplayFormat)(P), Le = (P) => ci(f.tooltips.dateDisplayFormat)(P);
  function Oe(P, ie) {
    const se = document.createElement("canvas").getContext("2d");
    if (!se) {
      console.error("2d context not found");
      return;
    }
    return se.font = ie || getComputedStyle(document.body).font, Math.ceil(se.measureText(P).width);
  }
  const je = (P, ie, pe = !1, se, Ae, ve) => {
    if (isNaN(P) || !P)
      return P;
    const me = P < 0;
    (ie === void 0 || !ie) && (ie = "left"), me && (P = Math.abs(P));
    let {
      dataFormat: { commas: Ye, abbreviated: at, roundTo: bt, prefix: Et, suffix: Q, rightRoundTo: le, bottomRoundTo: Pe, rightPrefix: ge, rightSuffix: nt, bottomPrefix: mt, bottomSuffix: Ge, bottomAbbreviated: At }
    } = f;
    String(P).indexOf(",") !== -1 && (P = P.replaceAll(",", ""));
    let ft = P, Lt = {
      useGrouping: !!Ye
      // for old chart data table to work right cant just leave this to undefined
    };
    if (ie === "left" || ie === void 0) {
      let ut;
      ve !== void 0 ? ut = ve ? Number(ve) : 0 : ut = bt ? Number(bt) : 0, Lt = {
        useGrouping: ve ? !0 : !!f.dataFormat.commas,
        minimumFractionDigits: ut,
        maximumFractionDigits: ut
      };
    }
    ie === "right" && (Lt = {
      useGrouping: !!f.dataFormat.rightCommas,
      minimumFractionDigits: le ? Number(le) : 0,
      maximumFractionDigits: le ? Number(le) : 0
    });
    const Xt = () => f.forestPlot.type === "Logarithmic" && !Pe ? 2 : Number(Pe) ? Number(Pe) : 0;
    if (ie === "bottom" && (Lt = {
      useGrouping: !!f.dataFormat.bottomCommas,
      minimumFractionDigits: Xt(),
      maximumFractionDigits: Xt()
    }), P = cl(P), isNaN(P))
      return f.runtime.editorErrorMessage = `Unable to parse number from data ${ft}. Try reviewing your data and selections in the Data Series section.`, ft;
    if (!f.dataFormat)
      return P;
    if (f.dataCutoff) {
      let ut = cl(f.dataCutoff);
      P < ut && (P = ut);
    }
    ie === "left" && Ye && at && pe || ie === "bottom" && Ye && at && pe ? P = P : P = P.toLocaleString("en-US", Lt);
    let Je = "";
    return at && ie === "left" && pe && (P = ks(parseFloat(P))), At && ie === "bottom" && pe && (P = ks(parseFloat(P))), se && ie === "left" ? Je = se + Je : Et && ie === "left" && (Je += Et), ge && ie === "right" && (Je += ge), mt && ie === "bottom" && (Je += mt), Je += P, Ae && ie === "left" ? Je += Ae : Q && ie === "left" && (Je += Q), nt && ie === "right" && (Je += nt), Ge && ie === "bottom" && (Je += Ge), me && (Je = "-" + Je), String(Je);
  }, Ie = {
    "Paired Bar": /* @__PURE__ */ r.createElement(Kt, null),
    Forecasting: /* @__PURE__ */ r.createElement(Kt, null),
    Bar: /* @__PURE__ */ r.createElement(Kt, null),
    Line: /* @__PURE__ */ r.createElement(Kt, null),
    Combo: /* @__PURE__ */ r.createElement(Kt, null),
    Pie: /* @__PURE__ */ r.createElement(oy, null),
    "Box Plot": /* @__PURE__ */ r.createElement(Kt, null),
    "Area Chart": /* @__PURE__ */ r.createElement(Kt, null),
    "Scatter Plot": /* @__PURE__ */ r.createElement(Kt, null),
    "Deviation Bar": /* @__PURE__ */ r.createElement(Kt, null),
    "Forest Plot": /* @__PURE__ */ r.createElement(Kt, null)
  }, Ue = () => {
    if (f.visualizationType === "Forecasting" || f.visualizationType === "Forest Plot")
      return !1;
    if (f.visualizationType === "Pie") {
      if ((f == null ? void 0 : f.yAxis.dataKey) === void 0)
        return !0;
    } else if ((f == null ? void 0 : f.series) === void 0 || !((f == null ? void 0 : f.series.length) > 0))
      return !0;
    return !f.xAxis.dataKey;
  }, ct = (P, ie) => {
    if (P === null || P === "" || P === void 0)
      return "";
    if (typeof P == "string" && P.length > 0 && f.legend.type === "equalnumber")
      return P;
    let pe = P, se;
    if (Object.keys(f.columns).length > 0 && Object.keys(f.columns).forEach(function(Ae) {
      var ve = f.columns[Ae];
      ve.name === ie && (se = ve);
    }), se === void 0 && (se = f.type === "chart" ? f.dataFormat : f.primary, se.useCommas = se.commas, se.roundToPlace = se.roundTo ? se.roundTo : ""), se) {
      let Ae = !1, ve = 0;
      Number(P) && (se.roundToPlace >= 0 && (Ae = se.roundToPlace ? se.roundToPlace !== "" || se.roundToPlace !== null : !1, ve = se.roundToPlace ? Number(se.roundToPlace) : 0, se.hasOwnProperty("roundToPlace") && Ae && (pe = Number(P).toFixed(ve))), se.hasOwnProperty("useCommas") && se.useCommas === !0 && (pe = Number(P).toLocaleString("en-US", {
        style: "decimal",
        minimumFractionDigits: Ae ? ve : 0,
        maximumFractionDigits: Ae ? ve : 5
      }))), pe = (se.prefix || "") + pe + (se.suffix || "");
    }
    return pe;
  }, et = (P) => {
    try {
      if (!P)
        throw new Error("COVE: No rowObj in applyLegendToRow");
      if (f.type === "navigation") {
        let ie = Ct[f.color] || Ct.bluegreenreverse;
        return ws(ie[3]);
      }
      return ws();
    } catch (ie) {
      console.error("COVE: ", ie);
    }
  }, te = (P) => {
    var ie;
    return Array.isArray(P) ? f.visualizationType === "Forecasting" ? P : (ie = f == null ? void 0 : f.xAxis) != null && ie.dataKey ? m.cleanData(P, f.xAxis.dataKey) : P : [];
  }, ze = (P) => P;
  let Ve = /* @__PURE__ */ r.createElement(Bu, null);
  if (!p) {
    const P = /* @__PURE__ */ r.createElement("a", { href: `#data-table-${f.dataKey}`, className: "margin-left-href" }, f.dataKey, " (Go to Table)");
    Ve = /* @__PURE__ */ r.createElement(r.Fragment, null, n && /* @__PURE__ */ r.createElement(mx, null), !Ue() && !f.newViz && /* @__PURE__ */ r.createElement("div", { className: "cdc-chart-inner-container" }, /* @__PURE__ */ r.createElement(Du, { showTitle: f.showTitle, isDashboard: i, title: ne, superTitle: f.superTitle, classes: ["chart-title", `${f.theme}`, "cove-component__header"], style: void 0 }), /* @__PURE__ */ r.createElement("a", { id: "skip-chart-container", className: "cdcdataviz-sr-only-focusable", href: D }, "Skip Over Chart Container"), f.filters && !V && /* @__PURE__ */ r.createElement(zu, { config: f, setConfig: x, setFilteredData: N, filteredData: T, excludedData: S, filterData: gn, dimensions: O }), (f == null ? void 0 : f.introText) && f.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement("section", { className: "introText" }, vn(f.introText)), /* @__PURE__ */ r.createElement(
      "div",
      {
        style: { marginBottom: Cs(f, X, _) },
        className: `chart-container  p-relative ${f.legend.position === "bottom" ? "bottom" : ""}${f.legend.hide ? " legend-hidden" : ""}${G}${Ce} ${W.join(" ")} ${a ? "debug" : ""}`
      },
      f.visualizationType !== "Spark Line" && Ie[f.visualizationType],
      f.visualizationType === "Spark Line" && /* @__PURE__ */ r.createElement(r.Fragment, null, (f == null ? void 0 : f.introText) && /* @__PURE__ */ r.createElement("section", { className: "introText", style: { padding: "0px 0 35px" } }, vn(f.introText)), /* @__PURE__ */ r.createElement("div", { style: { height: "100px", width: "100%", ...ae } }, /* @__PURE__ */ r.createElement(Jd, null, (ie) => /* @__PURE__ */ r.createElement(jg, { width: ie.width, height: ie.height }))), ce && /* @__PURE__ */ r.createElement("div", { className: "subtext", style: { padding: "35px 0 15px" } }, vn(ce))),
      !f.legend.hide && f.visualizationType !== "Spark Line" && f.visualizationType !== "Forest Plot" && /* @__PURE__ */ r.createElement(qg, null)
    ), i && f.table && f.table.show && f.table.showDataTableLink ? P : c && c, ce && f.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement("div", { className: "column " + f.isResponsiveTicks ? "subtext--responsive-ticks" : "subtext" }, vn(ce)), /* @__PURE__ */ r.createElement(Fr.Section, { classes: ["download-buttons"] }, f.table.showDownloadImgButton && /* @__PURE__ */ r.createElement(Fr.Button, { text: "Download Image", title: "Download Chart as Image", type: "image", state: f, elementToCapture: U }), f.table.showDownloadPdfButton && /* @__PURE__ */ r.createElement(Fr.Button, { text: "Download PDF", title: "Download Chart as PDF", type: "pdf", state: f, elementToCapture: U })), f.xAxis.dataKey && f.table.show && f.visualizationType !== "Spark Line" && /* @__PURE__ */ r.createElement(
      Fu,
      {
        config: f,
        rawData: f.table.customTableConfig ? gn(f.filters, f.data) : f.data,
        runtimeData: m.applySuppression(T || S, f.suppressedData),
        expandDataTable: f.table.expanded,
        columns: f.columns,
        displayDataAsText: ct,
        displayGeoName: ze,
        applyLegendToRow: et,
        tableTitle: f.table.label,
        indexTitle: f.table.indexLabel,
        vizTitle: ne,
        viewport: _,
        tabbingId: D,
        colorScale: E
      }
    ), (f == null ? void 0 : f.footnotes) && /* @__PURE__ */ r.createElement("section", { className: "footnotes" }, vn(f.footnotes))));
  }
  const Yt = {
    capitalize: (P) => P.charAt(0).toUpperCase() + P.slice(1),
    computeMarginBottom: Cs,
    getXAxisData: (P) => f.runtime.xAxis.type === "date" ? He(P[f.runtime.originalXAxis.dataKey]).getTime() : P[f.runtime.originalXAxis.dataKey],
    getYAxisData: (P, ie) => P[ie],
    config: f,
    setConfig: x,
    rawData: v ?? {},
    excludedData: S,
    transformedData: te(T || S),
    // do this right before passing to components
    tableData: T || S,
    // do not clean table data
    unfilteredData: v,
    seriesHighlight: w,
    colorScale: E,
    dimensions: O,
    currentViewport: _,
    parseDate: He,
    formatDate: fe,
    formatTooltipsDate: Le,
    formatNumber: je,
    loading: p,
    updateConfig: ye,
    colorPalettes: Ct,
    isDashboard: i,
    setParentConfig: o,
    missingRequiredSections: Ue,
    setEditing: l,
    setFilteredData: N,
    handleChartAriaLabels: Jc,
    highlight: xe,
    highlightReset: re,
    legend: X,
    setSeriesHighlight: C,
    dynamicLegendItems: B,
    setDynamicLegendItems: j,
    filterData: gn,
    imageId: U,
    handleLineType: Mi,
    lineOptions: yx,
    isNumber: ja,
    getTextWidth: Oe,
    twoColorPalette: Ua,
    isEditor: n,
    isDebug: a,
    setSharedFilter: u,
    setSharedFilterValue: d,
    dashboardConfig: h,
    debugSvg: a
  }, tt = ["cdc-open-viz-module", "type-chart", `${_}`, `font-${f.fontSize}`, `${f.theme}`];
  return f.visualizationType === "Spark Line" && tt.push("type-sparkline"), n && tt.push("spacing-wrapper"), n && tt.push("isEditor"), /* @__PURE__ */ r.createElement(Me.Provider, { value: Yt }, /* @__PURE__ */ r.createElement("div", { className: `${tt.join(" ")}`, ref: ke, "data-lollipop": f.isLollipopChart, "data-download-id": U }, Ve));
}
export {
  Kx as C
};
