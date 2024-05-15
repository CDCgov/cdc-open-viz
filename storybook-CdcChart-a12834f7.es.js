import { r as fe, R as a } from "./storybook-index-45401197.es.js";
import { a as Em, i as _f, b as Nf, g as km } from "./storybook-isSolr-6a0136d5.es.js";
import { _ as Ur, P as Tm, D as wm, C as Cm, A as Am, F as Ff, g as Pm } from "./storybook-Filters-353637cd.es.js";
import { L as sd, a as Rm } from "./storybook-coveUpdateWorker-36d7a51c.es.js";
import { B as qd } from "./storybook-Button-d74e310e.es.js";
import { p as Qh, P as se } from "./storybook-index-43433e35.es.js";
import { d as Lm } from "./storybook-debounce-cc216a80.es.js";
import { a as Gd } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { P as zf } from "./storybook-papaparse.min-b07ddc33.es.js";
import { H as Ei, T as Dm } from "./storybook-index-e5bf02db.es.js";
import { d as Om, p as Bf, e as mi, s as $r, c as Dt, h as $f, a as zu, f as Hn, t as ru, i as Ro, m as Hc, j as If, k as In, l as Hf, n as Mm, o as _m, G as Nm, r as cu, u as ar, v as du, g as Mo, T as it, I as Wf, w as Wc, x as Vc } from "./storybook-InputToggle-5c413799.es.js";
import { _ as nn } from "./storybook-extends-70f3d2a3.es.js";
import { D as Jh } from "./storybook-DataTransform-b554456e.es.js";
import { t as ud, a as yn, f as ep, L as Vf, b as Fl, g as gi, S as Fm, M as jc, D as zm, c as Bm } from "./storybook-DataTable-b33b00b6.es.js";
import { c as Bu, t as $m, e as tp, f as jf, g as Im, h as Hm, j as cd, k as Uf, m as Wm, G as Ke } from "./storybook-Group-6a29c5f6.es.js";
import { E as Dr, L as Vm } from "./storybook-Loading-f180d060.es.js";
import { c as Sn, D as np, T as Te } from "./storybook-Tooltip-5f8a49cd.es.js";
import { s as Bl, t as rp, a as ap, b as ip, d as ql, B as dr, c as $n, C as jm, S as op } from "./storybook-icon-check-c4a42d0f.es.js";
import { R as Um } from "./storybook-index-633d712d.es.js";
import { c as Yl } from "./storybook-chroma-b564050a.es.js";
import { i as lp, m as Uc, c as sp, j as Hs, k as Ws, l as Vs, n as Kf, o as Km, p as Yf, b as up, d as cp } from "./storybook-year-bedc547d.es.js";
import { a as Tn, b as wn, c as Cn, d as An, A as ki } from "./storybook-index-a12b60a7.es.js";
import { a as pt } from "./storybook-Icon-48ed169f.es.js";
import { C as Ym, V as Xm } from "./storybook-VizFilterEditor-8dacf469.es.js";
import { S as dt, T as He, C as et, D as qm } from "./storybook-DataTableEditor-e2d92ec0.es.js";
import { I as Oa } from "./storybook-InputSelect-a65afd95.es.js";
import { _ as Gm } from "./storybook-lodash-c15d8e1c.es.js";
import { u as Zm, p as Qm, s as Jm, a as eg } from "./storybook-useDataVizClasses-d9099587.es.js";
import { n as Xf } from "./storybook-numberFromString-24623c03.es.js";
import { c as qf } from "./storybook-cacheBustingString-7a3dd9ba.es.js";
function tg(e, t) {
  let r = 0, n, i = 0, l = 0;
  if (t === void 0)
    for (let p of e)
      p != null && (p = +p) >= p && (n = p - i, i += n / ++r, l += n * (p - i));
  else {
    let p = -1;
    for (let u of e)
      (u = t(u, ++p, e)) != null && (u = +u) >= u && (n = u - i, i += n / ++r, l += n * (u - i));
  }
  if (r > 1)
    return l / (r - 1);
}
function ng(e, t) {
  const r = tg(e, t);
  return r && Math.sqrt(r);
}
class Gf extends Map {
  constructor(t, r = ig) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null)
      for (const [n, i] of t)
        this.set(n, i);
  }
  get(t) {
    return super.get(Zf(this, t));
  }
  has(t) {
    return super.has(Zf(this, t));
  }
  set(t, r) {
    return super.set(rg(this, t), r);
  }
  delete(t) {
    return super.delete(ag(this, t));
  }
}
function Zf({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function rg({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function ag({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function ig(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function og(e, t) {
  let r = 0, n = 0;
  if (t === void 0)
    for (let i of e)
      i != null && (i = +i) >= i && (++r, n += i);
  else {
    let i = -1;
    for (let l of e)
      (l = t(l, ++i, e)) != null && (l = +l) >= l && (++r, n += l);
  }
  if (r)
    return n / r;
}
function lg(e, t) {
  return Om(e, 0.5, t);
}
function sg(e, t, r) {
  e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, l = new Array(i); ++n < i; )
    l[n] = e + n * r;
  return l;
}
const Qf = Symbol("implicit");
function Zd() {
  var e = new Gf(), t = [], r = [], n = Qf;
  function i(l) {
    let p = e.get(l);
    if (p === void 0) {
      if (n !== Qf)
        return n;
      e.set(l, p = t.push(l) - 1);
    }
    return r[p % r.length];
  }
  return i.domain = function(l) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new Gf();
    for (const p of l)
      e.has(p) || e.set(p, t.push(p) - 1);
    return i;
  }, i.range = function(l) {
    return arguments.length ? (r = Array.from(l), i) : r.slice();
  }, i.unknown = function(l) {
    return arguments.length ? (n = l, i) : n;
  }, i.copy = function() {
    return Zd(t, r).unknown(n);
  }, Bu.apply(i, arguments), i;
}
function Qd() {
  var e = Zd().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, l, p, u = !1, d = 0, f = 0, g = 0.5;
  delete e.unknown;
  function v() {
    var y = t().length, k = i < n, T = k ? i : n, M = k ? n : i;
    l = (M - T) / Math.max(1, y - d + f * 2), u && (l = Math.floor(l)), T += (M - T - l * (y - d)) * g, p = l * (1 - d), u && (T = Math.round(T), p = Math.round(p));
    var C = sg(y).map(function(m) {
      return T + l * m;
    });
    return r(k ? C.reverse() : C);
  }
  return e.domain = function(y) {
    return arguments.length ? (t(y), v()) : t();
  }, e.range = function(y) {
    return arguments.length ? ([n, i] = y, n = +n, i = +i, v()) : [n, i];
  }, e.rangeRound = function(y) {
    return [n, i] = y, n = +n, i = +i, u = !0, v();
  }, e.bandwidth = function() {
    return p;
  }, e.step = function() {
    return l;
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
    return Qd(t(), [n, i]).round(u).paddingInner(d).paddingOuter(f).align(g);
  }, Bu.apply(v(), arguments);
}
function dp(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return dp(t());
  }, e;
}
function ug() {
  return dp(Qd.apply(null, arguments).paddingInner(1));
}
function fp(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, i = e[r], l = e[n], p;
  return l < i && (p = r, r = n, n = p, p = i, i = l, l = p), e[r] = t.floor(i), e[n] = t.ceil(l), e;
}
function Jf(e) {
  return Math.log(e);
}
function eh(e) {
  return Math.exp(e);
}
function cg(e) {
  return -Math.log(-e);
}
function dg(e) {
  return -Math.exp(-e);
}
function fg(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function hg(e) {
  return e === 10 ? fg : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function pg(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function th(e) {
  return (t, r) => -e(-t, r);
}
function mg(e) {
  const t = e(Jf, eh), r = t.domain;
  let n = 10, i, l;
  function p() {
    return i = pg(n), l = hg(n), r()[0] < 0 ? (i = th(i), l = th(l), e(cg, dg)) : e(Jf, eh), t;
  }
  return t.base = function(u) {
    return arguments.length ? (n = +u, p()) : n;
  }, t.domain = function(u) {
    return arguments.length ? (r(u), p()) : r();
  }, t.ticks = (u) => {
    const d = r();
    let f = d[0], g = d[d.length - 1];
    const v = g < f;
    v && ([f, g] = [g, f]);
    let y = i(f), k = i(g), T, M;
    const C = u == null ? 10 : +u;
    let m = [];
    if (!(n % 1) && k - y < C) {
      if (y = Math.floor(y), k = Math.ceil(k), f > 0) {
        for (; y <= k; ++y)
          for (T = 1; T < n; ++T)
            if (M = y < 0 ? T / l(-y) : T * l(y), !(M < f)) {
              if (M > g)
                break;
              m.push(M);
            }
      } else
        for (; y <= k; ++y)
          for (T = n - 1; T >= 1; --T)
            if (M = y > 0 ? T / l(-y) : T * l(y), !(M < f)) {
              if (M > g)
                break;
              m.push(M);
            }
      m.length * 2 < C && (m = jf(f, g, C));
    } else
      m = jf(y, k, Math.min(k - y, C)).map(l);
    return v ? m.reverse() : m;
  }, t.tickFormat = (u, d) => {
    if (u == null && (u = 10), d == null && (d = n === 10 ? "s" : ","), typeof d != "function" && (!(n % 1) && (d = Im(d)).precision == null && (d.trim = !0), d = Hm(d)), u === 1 / 0)
      return d;
    const f = Math.max(1, n * u / t.ticks().length);
    return (g) => {
      let v = g / l(Math.round(i(g)));
      return v * n < n - 0.5 && (v *= n), v <= f ? d(g) : "";
    };
  }, t.nice = () => r(fp(r(), {
    floor: (u) => l(Math.floor(i(u))),
    ceil: (u) => l(Math.ceil(i(u)))
  })), t;
}
function hp() {
  const e = mg($m()).domain([1, 10]);
  return e.copy = () => tp(e, hp()).base(e.base()), Bu.apply(e, arguments), e;
}
const fu = lp(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
fu.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? lp((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : fu);
fu.range;
function gg(e, t, r, n, i, l) {
  const p = [
    [Bl, 1, Hs],
    [Bl, 5, 5 * Hs],
    [Bl, 15, 15 * Hs],
    [Bl, 30, 30 * Hs],
    [l, 1, Ws],
    [l, 5, 5 * Ws],
    [l, 15, 15 * Ws],
    [l, 30, 30 * Ws],
    [i, 1, Vs],
    [i, 3, 3 * Vs],
    [i, 6, 6 * Vs],
    [i, 12, 12 * Vs],
    [n, 1, Kf],
    [n, 2, 2 * Kf],
    [r, 1, Km],
    [t, 1, Yf],
    [t, 3, 3 * Yf],
    [e, 1, Uc]
  ];
  function u(f, g, v) {
    const y = g < f;
    y && ([f, g] = [g, f]);
    const k = v && typeof v.range == "function" ? v : d(f, g, v), T = k ? k.range(f, +g + 1) : [];
    return y ? T.reverse() : T;
  }
  function d(f, g, v) {
    const y = Math.abs(g - f) / v, k = cd(([, , C]) => C).right(p, y);
    if (k === p.length)
      return e.every(Uf(f / Uc, g / Uc, v));
    if (k === 0)
      return fu.every(Math.max(Uf(f, g, v), 1));
    const [T, M] = p[y / p[k - 1][2] < p[k][2] / y ? k - 1 : k];
    return T.every(M);
  }
  return [u, d];
}
const [yg, vg] = gg(sp, ip, cp, up, ap, rp);
function xg(e) {
  return new Date(e);
}
function bg(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function pp(e, t, r, n, i, l, p, u, d, f) {
  var g = Wm(), v = g.invert, y = g.domain, k = f(".%L"), T = f(":%S"), M = f("%I:%M"), C = f("%I %p"), m = f("%a %d"), D = f("%b %d"), O = f("%B"), _ = f("%Y");
  function $(L) {
    return (d(L) < L ? k : u(L) < L ? T : p(L) < L ? M : l(L) < L ? C : n(L) < L ? i(L) < L ? m : D : r(L) < L ? O : _)(L);
  }
  return g.invert = function(L) {
    return new Date(v(L));
  }, g.domain = function(L) {
    return arguments.length ? y(Array.from(L, bg)) : y().map(xg);
  }, g.ticks = function(L) {
    var q = y();
    return e(q[0], q[q.length - 1], L ?? 10);
  }, g.tickFormat = function(L, q) {
    return q == null ? $ : f(q);
  }, g.nice = function(L) {
    var q = y();
    return (!L || typeof L.range != "function") && (L = t(q[0], q[q.length - 1], L ?? 10)), L ? y(fp(q, L)) : g;
  }, g.copy = function() {
    return tp(g, pp(e, t, r, n, i, l, p, u, d, f));
  }, g;
}
function Sg() {
  return Bu.apply(pp(yg, vg, sp, ip, cp, up, ap, rp, Bl, ud).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var Eg = ql("domain", "range", "reverse", "align", "padding", "round");
function dd(e) {
  return Eg(Qd(), e);
}
var kg = ql("domain", "range", "reverse", "align", "padding", "round");
function Lo(e) {
  return kg(ug(), e);
}
var Tg = ql("domain", "range", "reverse", "clamp", "interpolate", "nice", "round");
function wg(e) {
  return Tg(Sg(), e);
}
var Cg = ql("domain", "range", "reverse", "base", "clamp", "interpolate", "nice", "round");
function hu(e) {
  return Cg(hp(), e);
}
var Ag = ql("domain", "range", "reverse", "unknown");
function mp(e) {
  return Ag(Zd(), e);
}
function Pg(e) {
  if ((typeof e == "function" || typeof e == "object" && e) && "valueOf" in e) {
    var t = e.valueOf();
    if (typeof t == "number")
      return t;
  }
  return e;
}
function Rg(e, t) {
  var r = e;
  return "ticks" in r ? r.ticks(t) : r.domain().filter(function(n, i, l) {
    return t == null || l.length <= t || i % Math.round((l.length - 1) / t) === 0;
  });
}
function Lg(e) {
  return e == null ? void 0 : e.toString();
}
var Ti = [], Dg = function() {
  return Ti.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, Og = function() {
  return Ti.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, nh = "ResizeObserver loop completed with undelivered notifications.", Mg = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: nh
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = nh), window.dispatchEvent(e);
}, Xl;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Xl || (Xl = {}));
var wi = function(e) {
  return Object.freeze(e);
}, gp = function() {
  function e(t, r) {
    this.inlineSize = t, this.blockSize = r, wi(this);
  }
  return e;
}(), yp = function() {
  function e(t, r, n, i) {
    return this.x = t, this.y = r, this.width = n, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, wi(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, r = t.x, n = t.y, i = t.top, l = t.right, p = t.bottom, u = t.left, d = t.width, f = t.height;
    return { x: r, y: n, top: i, right: l, bottom: p, left: u, width: d, height: f };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), Jd = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, vp = function(e) {
  if (Jd(e)) {
    var t = e.getBBox(), r = t.width, n = t.height;
    return !r && !n;
  }
  var i = e, l = i.offsetWidth, p = i.offsetHeight;
  return !(l || p || e.getClientRects().length);
}, rh = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var r = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(r && e instanceof r.Element);
}, _g = function(e) {
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
}, $l = typeof window < "u" ? window : {}, js = /* @__PURE__ */ new WeakMap(), ah = /auto|scroll/, Ng = /^tb|vertical/, Fg = /msie|trident/i.test($l.navigator && $l.navigator.userAgent), Ir = function(e) {
  return parseFloat(e || "0");
}, Oo = function(e, t, r) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = !1), new gp((r ? t : e) || 0, (r ? e : t) || 0);
}, ih = wi({
  devicePixelContentBoxSize: Oo(),
  borderBoxSize: Oo(),
  contentBoxSize: Oo(),
  contentRect: new yp(0, 0, 0, 0)
}), xp = function(e, t) {
  if (t === void 0 && (t = !1), js.has(e) && !t)
    return js.get(e);
  if (vp(e))
    return js.set(e, ih), ih;
  var r = getComputedStyle(e), n = Jd(e) && e.ownerSVGElement && e.getBBox(), i = !Fg && r.boxSizing === "border-box", l = Ng.test(r.writingMode || ""), p = !n && ah.test(r.overflowY || ""), u = !n && ah.test(r.overflowX || ""), d = n ? 0 : Ir(r.paddingTop), f = n ? 0 : Ir(r.paddingRight), g = n ? 0 : Ir(r.paddingBottom), v = n ? 0 : Ir(r.paddingLeft), y = n ? 0 : Ir(r.borderTopWidth), k = n ? 0 : Ir(r.borderRightWidth), T = n ? 0 : Ir(r.borderBottomWidth), M = n ? 0 : Ir(r.borderLeftWidth), C = v + f, m = d + g, D = M + k, O = y + T, _ = u ? e.offsetHeight - O - e.clientHeight : 0, $ = p ? e.offsetWidth - D - e.clientWidth : 0, L = i ? C + D : 0, q = i ? m + O : 0, W = n ? n.width : Ir(r.width) - L - $, Y = n ? n.height : Ir(r.height) - q - _, J = W + C + $ + D, le = Y + m + _ + O, U = wi({
    devicePixelContentBoxSize: Oo(Math.round(W * devicePixelRatio), Math.round(Y * devicePixelRatio), l),
    borderBoxSize: Oo(J, le, l),
    contentBoxSize: Oo(W, Y, l),
    contentRect: new yp(v, d, W, Y)
  });
  return js.set(e, U), U;
}, bp = function(e, t, r) {
  var n = xp(e, r), i = n.borderBoxSize, l = n.contentBoxSize, p = n.devicePixelContentBoxSize;
  switch (t) {
    case Xl.DEVICE_PIXEL_CONTENT_BOX:
      return p;
    case Xl.BORDER_BOX:
      return i;
    default:
      return l;
  }
}, Sp = function() {
  function e(t) {
    var r = xp(t);
    this.target = t, this.contentRect = r.contentRect, this.borderBoxSize = wi([r.borderBoxSize]), this.contentBoxSize = wi([r.contentBoxSize]), this.devicePixelContentBoxSize = wi([r.devicePixelContentBoxSize]);
  }
  return e;
}(), Ep = function(e) {
  if (vp(e))
    return 1 / 0;
  for (var t = 0, r = e.parentNode; r; )
    t += 1, r = r.parentNode;
  return t;
}, zg = function() {
  var e = 1 / 0, t = [];
  Ti.forEach(function(p) {
    if (p.activeTargets.length !== 0) {
      var u = [];
      p.activeTargets.forEach(function(f) {
        var g = new Sp(f.target), v = Ep(f.target);
        u.push(g), f.lastReportedSize = bp(f.target, f.observedBox), v < e && (e = v);
      }), t.push(function() {
        p.callback.call(p.observer, u, p.observer);
      }), p.activeTargets.splice(0, p.activeTargets.length);
    }
  });
  for (var r = 0, n = t; r < n.length; r++) {
    var i = n[r];
    i();
  }
  return e;
}, oh = function(e) {
  Ti.forEach(function(r) {
    r.activeTargets.splice(0, r.activeTargets.length), r.skippedTargets.splice(0, r.skippedTargets.length), r.observationTargets.forEach(function(i) {
      i.isActive() && (Ep(i.target) > e ? r.activeTargets.push(i) : r.skippedTargets.push(i));
    });
  });
}, Bg = function() {
  var e = 0;
  for (oh(e); Dg(); )
    e = zg(), oh(e);
  return Og() && Mg(), e > 0;
}, Kc, kp = [], $g = function() {
  return kp.splice(0).forEach(function(e) {
    return e();
  });
}, Ig = function(e) {
  if (!Kc) {
    var t = 0, r = document.createTextNode(""), n = { characterData: !0 };
    new MutationObserver(function() {
      return $g();
    }).observe(r, n), Kc = function() {
      r.textContent = "".concat(t ? t-- : t++);
    };
  }
  kp.push(e), Kc();
}, Hg = function(e) {
  Ig(function() {
    requestAnimationFrame(e);
  });
}, au = 0, Wg = function() {
  return !!au;
}, Vg = 250, jg = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, lh = [
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
], sh = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Yc = !1, Ug = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var r = this;
    if (t === void 0 && (t = Vg), !Yc) {
      Yc = !0;
      var n = sh(t);
      Hg(function() {
        var i = !1;
        try {
          i = Bg();
        } finally {
          if (Yc = !1, t = n - sh(), !Wg())
            return;
          i ? r.run(1e3) : t > 0 ? r.run(t) : r.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, r = function() {
      return t.observer && t.observer.observe(document.body, jg);
    };
    document.body ? r() : $l.addEventListener("DOMContentLoaded", r);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), lh.forEach(function(r) {
      return $l.addEventListener(r, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), lh.forEach(function(r) {
      return $l.removeEventListener(r, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), fd = new Ug(), uh = function(e) {
  !au && e > 0 && fd.start(), au += e, !au && fd.stop();
}, Kg = function(e) {
  return !Jd(e) && !_g(e) && getComputedStyle(e).display === "inline";
}, Yg = function() {
  function e(t, r) {
    this.target = t, this.observedBox = r || Xl.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = bp(this.target, this.observedBox, !0);
    return Kg(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), Xg = function() {
  function e(t, r) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = r;
  }
  return e;
}(), Us = /* @__PURE__ */ new WeakMap(), ch = function(e, t) {
  for (var r = 0; r < e.length; r += 1)
    if (e[r].target === t)
      return r;
  return -1;
}, Ks = function() {
  function e() {
  }
  return e.connect = function(t, r) {
    var n = new Xg(t, r);
    Us.set(t, n);
  }, e.observe = function(t, r, n) {
    var i = Us.get(t), l = i.observationTargets.length === 0;
    ch(i.observationTargets, r) < 0 && (l && Ti.push(i), i.observationTargets.push(new Yg(r, n && n.box)), uh(1), fd.schedule());
  }, e.unobserve = function(t, r) {
    var n = Us.get(t), i = ch(n.observationTargets, r), l = n.observationTargets.length === 1;
    i >= 0 && (l && Ti.splice(Ti.indexOf(n), 1), n.observationTargets.splice(i, 1), uh(-1));
  }, e.disconnect = function(t) {
    var r = this, n = Us.get(t);
    n.observationTargets.slice().forEach(function(i) {
      return r.unobserve(t, i.target);
    }), n.activeTargets.splice(0, n.activeTargets.length);
  }, e;
}(), qg = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Ks.connect(this, t);
  }
  return e.prototype.observe = function(t, r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!rh(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Ks.observe(this, t, r);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!rh(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Ks.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    Ks.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
const Gg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ResizeObserver: qg,
  ResizeObserverEntry: Sp,
  ResizeObserverSize: gp
}, Symbol.toStringTag, { value: "Module" })), Zg = /* @__PURE__ */ Gd(Gg);
var dh = Cp, Aa = wp(Qh), Qg = wp(Lm), Co = ty(fe), Jg = Zg, ey = ["className", "children", "debounceTime", "ignoreDimensions", "parentSizeStyles", "enableDebounceLeadingCall"];
function Tp(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Tp = function(i) {
    return i ? r : t;
  })(e);
}
function ty(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Tp(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var l in e)
    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
      var p = i ? Object.getOwnPropertyDescriptor(e, l) : null;
      p && (p.get || p.set) ? Object.defineProperty(n, l, p) : n[l] = e[l];
    }
  return n.default = e, r && r.set(e, n), n;
}
function wp(e) {
  return e && e.__esModule ? e : { default: e };
}
function pu() {
  return pu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pu.apply(this, arguments);
}
function ny(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, l;
  for (l = 0; l < n.length; l++)
    i = n[l], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var ry = [];
function Cp(e) {
  var t = e.className, r = e.children, n = e.debounceTime, i = n === void 0 ? 300 : n, l = e.ignoreDimensions, p = l === void 0 ? ry : l, u = e.parentSizeStyles, d = u === void 0 ? {
    width: "100%",
    height: "100%"
  } : u, f = e.enableDebounceLeadingCall, g = f === void 0 ? !0 : f, v = ny(e, ey), y = (0, Co.useRef)(null), k = (0, Co.useRef)(0), T = (0, Co.useState)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), M = T[0], C = T[1], m = (0, Co.useMemo)(function() {
    var D = Array.isArray(p) ? p : [p];
    return (0, Qg.default)(function(O) {
      C(function(_) {
        var $ = Object.keys(_), L = $.filter(function(W) {
          return _[W] !== O[W];
        }), q = L.every(function(W) {
          return D.includes(W);
        });
        return q ? _ : O;
      });
    }, i, {
      leading: g
    });
  }, [i, g, p]);
  return (0, Co.useEffect)(function() {
    var D = new Jg.ResizeObserver(function(O) {
      O === void 0 && (O = []), O.forEach(function(_) {
        var $ = _.contentRect, L = $.left, q = $.top, W = $.width, Y = $.height;
        k.current = window.requestAnimationFrame(function() {
          m({
            width: W,
            height: Y,
            top: q,
            left: L
          });
        });
      });
    });
    return y.current && D.observe(y.current), function() {
      window.cancelAnimationFrame(k.current), D.disconnect(), m != null && m.cancel && m.cancel();
    };
  }, [m]), /* @__PURE__ */ Co.default.createElement("div", pu({
    style: d,
    ref: y,
    className: t
  }, v), r(pu({}, M, {
    ref: y.current,
    resize: m
  })));
}
Cp.propTypes = {
  className: Aa.default.string,
  debounceTime: Aa.default.number,
  enableDebounceLeadingCall: Aa.default.bool,
  ignoreDimensions: Aa.default.oneOfType([Aa.default.any, Aa.default.arrayOf(Aa.default.any)]),
  children: Aa.default.func.isRequired
};
const lt = fe.createContext({}), Pt = {
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
    if (Pt.str(e) || Pt.num(e))
      return e === t;
    if (Pt.obj(e) && Pt.obj(t) && Object.keys(e).length + Object.keys(t).length === 0)
      return !0;
    let r;
    for (r in e)
      if (!(r in t))
        return !1;
    for (r in t)
      if (e[r] !== t[r])
        return !1;
    return Pt.und(r) ? e === t : !0;
  }
};
function ay(e, t) {
  return t === void 0 && (t = !0), (r) => (Pt.arr(r) ? r : Object.keys(r)).reduce((n, i) => {
    const l = t ? i[0].toLowerCase() + i.substring(1) : i;
    return n[l] = e(l), n;
  }, e);
}
function Ap() {
  const e = fe.useState(!1), t = e[1];
  return fe.useCallback(() => t((n) => !n), []);
}
function yi(e, t) {
  return Pt.und(e) || Pt.nul(e) ? t : e;
}
function Do(e) {
  return Pt.und(e) ? [] : Pt.arr(e) ? e : [e];
}
function Pr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return Pt.fun(e) ? e(...r) : e;
}
function iy(e) {
  return e.to, e.from, e.config, e.onStart, e.onRest, e.onFrame, e.children, e.reset, e.reverse, e.force, e.immediate, e.delay, e.attach, e.destroyed, e.interpolateTo, e.ref, e.lazy, Ur(e, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);
}
function Xc(e) {
  const t = iy(e);
  if (Pt.und(t))
    return nn({
      to: t
    }, e);
  const r = Object.keys(e).reduce((n, i) => Pt.und(t[i]) ? nn({}, n, {
    [i]: e[i]
  }) : n, {});
  return nn({
    to: t
  }, r);
}
function oy(e, t) {
  return t && (Pt.fun(t) ? t(e) : Pt.obj(t) && (t.current = e)), e;
}
class Rr {
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
class hd extends Rr {
  constructor() {
    super(...arguments), this.payload = [], this.attach = () => this.payload.forEach((t) => t instanceof Rr && t.addChild(this)), this.detach = () => this.payload.forEach((t) => t instanceof Rr && t.removeChild(this));
  }
}
class Pp extends Rr {
  constructor() {
    super(...arguments), this.payload = {}, this.attach = () => Object.values(this.payload).forEach((t) => t instanceof Rr && t.addChild(this)), this.detach = () => Object.values(this.payload).forEach((t) => t instanceof Rr && t.removeChild(this));
  }
  getValue(t) {
    t === void 0 && (t = !1);
    const r = {};
    for (const n in this.payload) {
      const i = this.payload[n];
      t && !(i instanceof Rr) || (r[n] = i instanceof Rr ? i[t ? "getAnimatedValue" : "getValue"]() : i);
    }
    return r;
  }
  getAnimatedValue() {
    return this.getValue(!0);
  }
}
let ef;
function ly(e, t) {
  ef = {
    fn: e,
    transform: t
  };
}
let Rp;
function sy(e) {
  Rp = e;
}
let Lp = (e) => typeof window < "u" ? window.requestAnimationFrame(e) : -1, mu;
function uy(e) {
  mu = e;
}
let Dp = () => Date.now(), cy = (e) => e.current, Op;
function dy(e) {
  Op = e;
}
class fy extends Pp {
  constructor(t, r) {
    super(), this.update = void 0, this.payload = t.style ? nn({}, t, {
      style: Op(t.style)
    }) : t, this.update = r, this.attach();
  }
}
const hy = (e) => Pt.fun(e) && !(e.prototype instanceof a.Component), py = (e) => fe.forwardRef((r, n) => {
  const i = Ap(), l = fe.useRef(!0), p = fe.useRef(null), u = fe.useRef(null), d = fe.useCallback((y) => {
    const k = p.current, T = () => {
      let M = !1;
      u.current && (M = ef.fn(u.current, p.current.getAnimatedValue())), (!u.current || M === !1) && i();
    };
    p.current = new fy(y, T), k && k.detach();
  }, []);
  fe.useEffect(() => () => {
    l.current = !1, p.current && p.current.detach();
  }, []), fe.useImperativeHandle(n, () => cy(u)), d(r);
  const f = p.current.getValue();
  f.scrollTop, f.scrollLeft;
  const g = Ur(f, ["scrollTop", "scrollLeft"]), v = hy(e) ? void 0 : (y) => u.current = oy(y, n);
  return a.createElement(e, nn({}, g, {
    ref: v
  }));
});
let Il = !1;
const Ci = /* @__PURE__ */ new Set(), Mp = () => {
  if (!Il)
    return !1;
  let e = Dp();
  for (let t of Ci) {
    let r = !1;
    for (let n = 0; n < t.configs.length; n++) {
      let i = t.configs[n], l, p;
      for (let u = 0; u < i.animatedValues.length; u++) {
        let d = i.animatedValues[u];
        if (d.done)
          continue;
        let f = i.fromValues[u], g = i.toValues[u], v = d.lastPosition, y = g instanceof Rr, k = Array.isArray(i.initialVelocity) ? i.initialVelocity[u] : i.initialVelocity;
        if (y && (g = g.getValue()), i.immediate) {
          d.setValue(g), d.done = !0;
          continue;
        }
        if (typeof f == "string" || typeof g == "string") {
          d.setValue(g), d.done = !0;
          continue;
        }
        if (i.duration !== void 0)
          v = f + i.easing((e - d.startTime) / i.duration) * (g - f), l = e >= d.startTime + i.duration;
        else if (i.decay)
          v = f + k / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (e - d.startTime))), l = Math.abs(d.lastPosition - v) < 0.1, l && (g = v);
        else {
          p = d.lastTime !== void 0 ? d.lastTime : e, k = d.lastVelocity !== void 0 ? d.lastVelocity : i.initialVelocity, e > p + 64 && (p = e);
          let T = Math.floor(e - p);
          for (let D = 0; D < T; ++D) {
            let O = -i.tension * (v - g), _ = -i.friction * k, $ = (O + _) / i.mass;
            k = k + $ * 1 / 1e3, v = v + k * 1 / 1e3;
          }
          let M = i.clamp && i.tension !== 0 ? f < g ? v > g : v < g : !1, C = Math.abs(k) <= i.precision, m = i.tension !== 0 ? Math.abs(g - v) <= i.precision : !0;
          l = M || C && m, d.lastVelocity = k, d.lastTime = e;
        }
        y && !i.toValues[u].done && (l = !1), l ? (d.value !== g && (v = g), d.done = !0) : r = !0, d.setValue(v), d.lastPosition = v;
      }
      t.props.onFrame && (t.values[i.name] = i.interpolation.getValue());
    }
    t.props.onFrame && t.props.onFrame(t.values), r || (Ci.delete(t), t.stop(!0));
  }
  return Ci.size ? Lp(Mp) : Il = !1, Il;
}, my = (e) => {
  Ci.has(e) || Ci.add(e), Il || (Il = !0, Lp(Mp));
}, gy = (e) => {
  Ci.has(e) && Ci.delete(e);
};
function gu(e, t, r) {
  if (typeof e == "function")
    return e;
  if (Array.isArray(e))
    return gu({
      range: e,
      output: t,
      extrapolate: r
    });
  if (mu && typeof e.output[0] == "string")
    return mu(e);
  const n = e, i = n.output, l = n.range || [0, 1], p = n.extrapolateLeft || n.extrapolate || "extend", u = n.extrapolateRight || n.extrapolate || "extend", d = n.easing || ((f) => f);
  return (f) => {
    const g = vy(f, l);
    return yy(f, l[g], l[g + 1], i[g], i[g + 1], d, p, u, n.map);
  };
}
function yy(e, t, r, n, i, l, p, u, d) {
  let f = d ? d(e) : e;
  if (f < t) {
    if (p === "identity")
      return f;
    p === "clamp" && (f = t);
  }
  if (f > r) {
    if (u === "identity")
      return f;
    u === "clamp" && (f = r);
  }
  return n === i ? n : t === r ? e <= t ? n : i : (t === -1 / 0 ? f = -f : r === 1 / 0 ? f = f - t : f = (f - t) / (r - t), f = l(f), n === -1 / 0 ? f = -f : i === 1 / 0 ? f = f + n : f = f * (i - n) + n, f);
}
function vy(e, t) {
  for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r)
    ;
  return r - 1;
}
class _o extends hd {
  constructor(t, r, n, i) {
    super(), this.calc = void 0, this.payload = t instanceof hd && !(t instanceof _o) ? t.getPayload() : Array.isArray(t) ? t : [t], this.calc = gu(r, n, i);
  }
  getValue() {
    return this.calc(...this.payload.map((t) => t.getValue()));
  }
  updateConfig(t, r, n) {
    this.calc = gu(t, r, n);
  }
  interpolate(t, r, n) {
    return new _o(this, t, r, n);
  }
}
const xy = (e, t, r) => e && new _o(e, t, r);
function _p(e, t) {
  "update" in e ? t.add(e) : e.getChildren().forEach((r) => _p(r, t));
}
class pd extends Rr {
  constructor(t) {
    var r;
    super(), r = this, this.animatedStyles = /* @__PURE__ */ new Set(), this.value = void 0, this.startPosition = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.startTime = void 0, this.lastTime = void 0, this.done = !1, this.setValue = function(n, i) {
      i === void 0 && (i = !0), r.value = n, i && r.flush();
    }, this.value = t, this.startPosition = t, this.lastPosition = t;
  }
  flush() {
    this.animatedStyles.size === 0 && _p(this, this.animatedStyles), this.animatedStyles.forEach((t) => t.update());
  }
  clearStyles() {
    this.animatedStyles.clear();
  }
  getValue() {
    return this.value;
  }
  interpolate(t, r, n) {
    return new _o(this, t, r, n);
  }
}
class by extends hd {
  constructor(t) {
    super(), this.payload = t.map((r) => new pd(r));
  }
  setValue(t, r) {
    r === void 0 && (r = !0), Array.isArray(t) ? t.length === this.payload.length && t.forEach((n, i) => this.payload[i].setValue(n, r)) : this.payload.forEach((n) => n.setValue(t, r));
  }
  getValue() {
    return this.payload.map((t) => t.getValue());
  }
  interpolate(t, r) {
    return new _o(this, t, r);
  }
}
let Sy = 0;
class Ey {
  constructor() {
    this.id = void 0, this.idle = !0, this.hasChanged = !1, this.guid = 0, this.local = 0, this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.values = {}, this.configs = [], this.listeners = [], this.queue = [], this.localQueue = void 0, this.getValues = () => this.interpolations, this.id = Sy++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */
  update(t) {
    if (!t)
      return this;
    const r = Xc(t), n = r.delay, i = n === void 0 ? 0 : n, l = r.to, p = Ur(r, ["delay", "to"]);
    if (Pt.arr(l) || Pt.fun(l))
      this.queue.push(nn({}, p, {
        delay: i,
        to: l
      }));
    else if (l) {
      let u = {};
      Object.entries(l).forEach((d) => {
        let f = d[0], g = d[1];
        const v = nn({
          to: {
            [f]: g
          },
          delay: Pr(i, f)
        }, p), y = u[v.delay] && u[v.delay].to;
        u[v.delay] = nn({}, u[v.delay], v, {
          to: nn({}, y, v.to)
        });
      }), this.queue = Object.values(u);
    }
    return this.queue = this.queue.sort((u, d) => u.delay - d.delay), this.diff(p), this;
  }
  /** start(onEnd)
   *  This function either executes a queue, if present, or starts the frameloop, which animates */
  start(t) {
    if (this.queue.length) {
      this.idle = !1, this.localQueue && this.localQueue.forEach((i) => {
        let l = i.from, p = l === void 0 ? {} : l, u = i.to, d = u === void 0 ? {} : u;
        Pt.obj(p) && (this.merged = nn({}, p, this.merged)), Pt.obj(d) && (this.merged = nn({}, this.merged, d));
      });
      const r = this.local = ++this.guid, n = this.localQueue = this.queue;
      this.queue = [], n.forEach((i, l) => {
        let p = i.delay, u = Ur(i, ["delay"]);
        const d = (g) => {
          l === n.length - 1 && r === this.guid && g && (this.idle = !0, this.props.onRest && this.props.onRest(this.merged)), t && t();
        };
        let f = Pt.arr(u.to) || Pt.fun(u.to);
        p ? setTimeout(() => {
          r === this.guid && (f ? this.runAsync(u, d) : this.diff(u).start(d));
        }, p) : f ? this.runAsync(u, d) : this.diff(u).start(d);
      });
    } else
      Pt.fun(t) && this.listeners.push(t), this.props.onStart && this.props.onStart(), my(this);
    return this;
  }
  stop(t) {
    return this.listeners.forEach((r) => r(t)), this.listeners = [], this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */
  pause(t) {
    return this.stop(!0), t && gy(this), this;
  }
  runAsync(t, r) {
    var n = this;
    t.delay;
    let i = Ur(t, ["delay"]);
    const l = this.local;
    let p = Promise.resolve(void 0);
    if (Pt.arr(i.to))
      for (let u = 0; u < i.to.length; u++) {
        const d = u, f = nn({}, i, Xc(i.to[d]));
        Pt.arr(f.config) && (f.config = f.config[d]), p = p.then(() => {
          if (l === this.guid)
            return new Promise((g) => this.diff(f).start(g));
        });
      }
    else if (Pt.fun(i.to)) {
      let u = 0, d;
      p = p.then(() => i.to(
        // next(props)
        (f) => {
          const g = nn({}, i, Xc(f));
          if (Pt.arr(g.config) && (g.config = g.config[u]), u++, l === this.guid)
            return d = new Promise((v) => this.diff(g).start(v));
        },
        // cancel()
        function(f) {
          return f === void 0 && (f = !0), n.stop(f);
        }
      ).then(() => d));
    }
    p.then(r);
  }
  diff(t) {
    this.props = nn({}, this.props, t);
    let r = this.props, n = r.from, i = n === void 0 ? {} : n, l = r.to, p = l === void 0 ? {} : l, u = r.config, d = u === void 0 ? {} : u, f = r.reverse, g = r.attach, v = r.reset, y = r.immediate;
    if (f) {
      var k = [p, i];
      i = k[0], p = k[1];
    }
    this.merged = nn({}, i, this.merged, p), this.hasChanged = !1;
    let T = g && g(this);
    if (this.animations = Object.entries(this.merged).reduce((M, C) => {
      let m = C[0], D = C[1], O = M[m] || {};
      const _ = Pt.num(D), $ = Pt.str(D) && !D.startsWith("#") && !/\d/.test(D) && !Rp[D], L = Pt.arr(D), q = !_ && !L && !$;
      let W = Pt.und(i[m]) ? D : i[m], Y = _ || L || $ ? D : 1, J = Pr(d, m);
      T && (Y = T.animations[m].parent);
      let le = O.parent, U = O.interpolation, te = Do(T ? Y.getPayload() : Y), me, K = D;
      q && (K = mu({
        range: [0, 1],
        output: [D, D]
      })(1));
      let ce = U && U.getValue();
      const he = !Pt.und(le) && O.animatedValues.some((ne) => !ne.done), ae = !Pt.equ(K, ce), V = !Pt.equ(K, O.previous), ee = !Pt.equ(J, O.config);
      if (v || V && ae || ee) {
        if (_ || $)
          le = U = O.parent || new pd(W);
        else if (L)
          le = U = O.parent || new by(W);
        else if (q) {
          let ne = O.interpolation && O.interpolation.calc(O.parent.value);
          ne = ne !== void 0 && !v ? ne : W, O.parent ? (le = O.parent, le.setValue(0, !1)) : le = new pd(0);
          const ke = {
            output: [ne, D]
          };
          O.interpolation ? (U = O.interpolation, O.interpolation.updateConfig(ke)) : U = le.interpolate(ke);
        }
        return te = Do(T ? Y.getPayload() : Y), me = Do(le.getPayload()), v && !q && le.setValue(W, !1), this.hasChanged = !0, me.forEach((ne) => {
          ne.startPosition = ne.value, ne.lastPosition = ne.value, ne.lastVelocity = he ? ne.lastVelocity : void 0, ne.lastTime = he ? ne.lastTime : void 0, ne.startTime = Dp(), ne.done = !1, ne.animatedStyles.clear();
        }), Pr(y, m) && le.setValue(q ? Y : D, !1), nn({}, M, {
          [m]: nn({}, O, {
            name: m,
            parent: le,
            interpolation: U,
            animatedValues: me,
            toValues: te,
            previous: K,
            config: J,
            fromValues: Do(le.getValue()),
            immediate: Pr(y, m),
            initialVelocity: yi(J.velocity, 0),
            clamp: yi(J.clamp, !1),
            precision: yi(J.precision, 0.01),
            tension: yi(J.tension, 170),
            friction: yi(J.friction, 26),
            mass: yi(J.mass, 1),
            duration: J.duration,
            easing: yi(J.easing, (ne) => ne),
            decay: J.decay
          })
        });
      } else
        return ae ? M : (q && (le.setValue(1, !1), U.updateConfig({
          output: [K, K]
        })), le.done = !0, this.hasChanged = !0, nn({}, M, {
          [m]: nn({}, M[m], {
            previous: K
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
let ky = 0;
const iu = "enter", qc = "leave", Gc = "update", Ty = (e, t) => (typeof t == "function" ? e.map(t) : Do(t)).map(String), md = (e) => {
  let t = e.items, r = e.keys, n = r === void 0 ? (l) => l : r, i = Ur(e, ["items", "keys"]);
  return t = Do(t !== void 0 ? t : null), nn({
    items: t,
    keys: Ty(t, n)
  }, i);
};
function wy(e, t, r) {
  const n = nn({
    items: e,
    keys: t || ((D) => D)
  }, r), i = md(n), l = i.lazy, p = l === void 0 ? !1 : l;
  i.unique;
  const u = i.reset, d = u === void 0 ? !1 : u;
  i.enter, i.leave, i.update;
  const f = i.onDestroyed;
  i.keys, i.items;
  const g = i.onFrame, v = i.onRest, y = i.onStart, k = i.ref, T = Ur(i, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]), M = Ap(), C = fe.useRef(!1), m = fe.useRef({
    mounted: !1,
    first: !0,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!n.ref,
    instances: !C.current && /* @__PURE__ */ new Map(),
    forceUpdate: M
  });
  return fe.useImperativeHandle(n.ref, () => ({
    start: () => Promise.all(Array.from(m.current.instances).map((D) => {
      let O = D[1];
      return new Promise((_) => O.start(_));
    })),
    stop: (D) => Array.from(m.current.instances).forEach((O) => O[1].stop(D)),
    get controllers() {
      return Array.from(m.current.instances).map((D) => D[1]);
    }
  })), m.current = Cy(m.current, n), m.current.changed && m.current.transitions.forEach((D) => {
    const O = D.slot, _ = D.from, $ = D.to, L = D.config, q = D.trail, W = D.key, Y = D.item;
    m.current.instances.has(W) || m.current.instances.set(W, new Ey());
    const J = m.current.instances.get(W), le = nn({}, T, {
      to: $,
      from: _,
      config: L,
      ref: k,
      onRest: (U) => {
        m.current.mounted && (D.destroyed && (!k && !p && fh(m, W), f && f(Y)), !Array.from(m.current.instances).some((K) => !K[1].idle) && (k || p) && m.current.deleted.length > 0 && fh(m), v && v(Y, O, U));
      },
      onStart: y && (() => y(Y, O)),
      onFrame: g && ((U) => g(Y, O, U)),
      delay: q,
      reset: d && O === iu
      // Update controller
    });
    J.update(le), m.current.paused || J.start();
  }), fe.useEffect(() => (m.current.mounted = C.current = !0, () => {
    m.current.mounted = C.current = !1, Array.from(m.current.instances).map((D) => D[1].destroy()), m.current.instances.clear();
  }), []), m.current.transitions.map((D) => {
    let O = D.item, _ = D.slot, $ = D.key;
    return {
      item: O,
      key: $,
      state: _,
      props: m.current.instances.get($).getValues()
    };
  });
}
function fh(e, t) {
  const r = e.current.deleted;
  for (let n of r) {
    let i = n.key;
    const l = (p) => p.key !== i;
    (Pt.und(t) || t === i) && (e.current.instances.delete(i), e.current.transitions = e.current.transitions.filter(l), e.current.deleted = e.current.deleted.filter(l));
  }
  e.current.forceUpdate();
}
function Cy(e, t) {
  let r = e.first, n = e.prevProps, i = Ur(e, ["first", "prevProps"]), l = md(t), p = l.items, u = l.keys, d = l.initial, f = l.from, g = l.enter, v = l.leave, y = l.update, k = l.trail, T = k === void 0 ? 0 : k, M = l.unique, C = l.config, m = l.order, D = m === void 0 ? [iu, qc, Gc] : m, O = md(n), _ = O.keys, $ = O.items, L = nn({}, i.current), q = [...i.deleted], W = Object.keys(L), Y = new Set(W), J = new Set(u), le = u.filter((ce) => !Y.has(ce)), U = i.transitions.filter((ce) => !ce.destroyed && !J.has(ce.originalKey)).map((ce) => ce.originalKey), te = u.filter((ce) => Y.has(ce)), me = -T;
  for (; D.length; )
    switch (D.shift()) {
      case iu: {
        le.forEach((ue, he) => {
          M && q.find((ne) => ne.originalKey === ue) && (q = q.filter((ne) => ne.originalKey !== ue));
          const ae = u.indexOf(ue), V = p[ae], ee = r && d !== void 0 ? "initial" : iu;
          L[ue] = {
            slot: ee,
            originalKey: ue,
            key: M ? String(ue) : ky++,
            item: V,
            trail: me = me + T,
            config: Pr(C, V, ee),
            from: Pr(r && d !== void 0 ? d || {} : f, V),
            to: Pr(g, V)
          };
        });
        break;
      }
      case qc: {
        U.forEach((ue) => {
          const he = _.indexOf(ue), ae = $[he], V = qc;
          q.unshift(nn({}, L[ue], {
            slot: V,
            destroyed: !0,
            left: _[Math.max(0, he - 1)],
            right: _[Math.min(_.length, he + 1)],
            trail: me = me + T,
            config: Pr(C, ae, V),
            to: Pr(v, ae)
          })), delete L[ue];
        });
        break;
      }
      case Gc: {
        te.forEach((ue) => {
          const he = u.indexOf(ue), ae = p[he], V = Gc;
          L[ue] = nn({}, L[ue], {
            item: ae,
            slot: V,
            trail: me = me + T,
            config: Pr(C, ae, V),
            to: Pr(y, ae)
          });
        });
        break;
      }
    }
  let K = u.map((ce) => L[ce]);
  return q.forEach((ce) => {
    let ue = ce.left;
    ce.right;
    let he = Ur(ce, ["left", "right"]), ae;
    (ae = K.findIndex((V) => V.originalKey === ue)) !== -1 && (ae += 1), ae = Math.max(0, ae), K = [...K.slice(0, ae), he, ...K.slice(ae)];
  }), nn({}, i, {
    changed: le.length || U.length || te.length,
    first: r && le.length === 0,
    transitions: K,
    current: L,
    deleted: q,
    prevProps: t
  });
}
class Ay extends Pp {
  constructor(t) {
    t === void 0 && (t = {}), super(), t.transform && !(t.transform instanceof Rr) && (t = ef.transform(t)), this.payload = t;
  }
}
const yu = {
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
}, Lr = "[-+]?\\d*\\.?\\d+", vu = Lr + "%";
function $u() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const Py = new RegExp("rgb" + $u(Lr, Lr, Lr)), Ry = new RegExp("rgba" + $u(Lr, Lr, Lr, Lr)), Ly = new RegExp("hsl" + $u(Lr, vu, vu)), Dy = new RegExp("hsla" + $u(Lr, vu, vu, Lr)), Oy = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, My = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, _y = /^#([0-9a-fA-F]{6})$/, Ny = /^#([0-9a-fA-F]{8})$/;
function Fy(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = _y.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : yu.hasOwnProperty(e) ? yu[e] : (t = Py.exec(e)) ? (Ao(t[1]) << 24 | // r
  Ao(t[2]) << 16 | // g
  Ao(t[3]) << 8 | // b
  255) >>> // a
  0 : (t = Ry.exec(e)) ? (Ao(t[1]) << 24 | // r
  Ao(t[2]) << 16 | // g
  Ao(t[3]) << 8 | // b
  mh(t[4])) >>> // a
  0 : (t = Oy.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (t = Ny.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = My.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    t[4] + t[4],
    // a
    16
  ) >>> 0 : (t = Ly.exec(e)) ? (hh(
    ph(t[1]),
    // h
    Ys(t[2]),
    // s
    Ys(t[3])
    // l
  ) | 255) >>> // a
  0 : (t = Dy.exec(e)) ? (hh(
    ph(t[1]),
    // h
    Ys(t[2]),
    // s
    Ys(t[3])
    // l
  ) | mh(t[4])) >>> // a
  0 : null;
}
function Zc(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function hh(e, t, r) {
  const n = r < 0.5 ? r * (1 + t) : r + t - r * t, i = 2 * r - n, l = Zc(i, n, e + 1 / 3), p = Zc(i, n, e), u = Zc(i, n, e - 1 / 3);
  return Math.round(l * 255) << 24 | Math.round(p * 255) << 16 | Math.round(u * 255) << 8;
}
function Ao(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function ph(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function mh(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function Ys(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function gh(e) {
  let t = Fy(e);
  if (t === null)
    return e;
  t = t || 0;
  let r = (t & 4278190080) >>> 24, n = (t & 16711680) >>> 16, i = (t & 65280) >>> 8, l = (t & 255) / 255;
  return `rgba(${r}, ${n}, ${i}, ${l})`;
}
const Xs = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, zy = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, By = new RegExp(`(${Object.keys(yu).join("|")})`, "g"), $y = (e) => {
  const t = e.output.map((i) => i.replace(zy, gh)).map((i) => i.replace(By, gh)), r = t[0].match(Xs).map(() => []);
  t.forEach((i) => {
    i.match(Xs).forEach((l, p) => r[p].push(+l));
  });
  const n = t[0].match(Xs).map((i, l) => gu(nn({}, e, {
    output: r[l]
  })));
  return (i) => {
    let l = 0;
    return t[0].replace(Xs, () => n[l++](i)).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (p, u, d, f, g) => `rgba(${Math.round(u)}, ${Math.round(d)}, ${Math.round(f)}, ${g})`);
  };
};
let Hl = {
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
const Iy = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), Hy = ["Webkit", "Ms", "Moz", "O"];
Hl = Object.keys(Hl).reduce((e, t) => (Hy.forEach((r) => e[Iy(r, t)] = e[t]), e), Hl);
function Wy(e, t, r) {
  return t == null || typeof t == "boolean" || t === "" ? "" : !r && typeof t == "number" && t !== 0 && !(Hl.hasOwnProperty(e) && Hl[e]) ? t + "px" : ("" + t).trim();
}
const yh = {};
dy((e) => new Ay(e));
uy($y);
sy(yu);
ly((e, t) => {
  if (e.nodeType && e.setAttribute !== void 0) {
    const i = t.style, l = t.children, p = t.scrollTop, u = t.scrollLeft, d = Ur(t, ["style", "children", "scrollTop", "scrollLeft"]), f = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter";
    p !== void 0 && (e.scrollTop = p), u !== void 0 && (e.scrollLeft = u), l !== void 0 && (e.textContent = l);
    for (let g in i)
      if (i.hasOwnProperty(g)) {
        var r = g.indexOf("--") === 0, n = Wy(g, i[g], r);
        g === "float" && (g = "cssFloat"), r ? e.style.setProperty(g, n) : e.style[g] = n;
      }
    for (let g in d) {
      const v = f ? g : yh[g] || (yh[g] = g.replace(/([A-Z])/g, (y) => "-" + y.toLowerCase()));
      typeof e.getAttribute(v) < "u" && e.setAttribute(v, d[g]);
    }
    return;
  } else
    return !1;
}, (e) => e);
const Vy = [
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
], jy = ay(py, !1), vh = jy(Vy);
function Uy(e) {
  return e.innerRadius;
}
function Ky(e) {
  return e.outerRadius;
}
function Yy(e) {
  return e.startAngle;
}
function Xy(e) {
  return e.endAngle;
}
function qy(e) {
  return e && e.padAngle;
}
function Gy(e, t, r, n, i, l, p, u) {
  var d = r - e, f = n - t, g = p - i, v = u - l, y = v * d - g * f;
  if (!(y * y < Hn))
    return y = (g * (t - l) - v * (e - i)) / y, [e + y * d, t + y * f];
}
function qs(e, t, r, n, i, l, p) {
  var u = e - r, d = t - n, f = (p ? l : -l) / Ro(u * u + d * d), g = f * d, v = -f * u, y = e + g, k = t + v, T = r + g, M = n + v, C = (y + T) / 2, m = (k + M) / 2, D = T - y, O = M - k, _ = D * D + O * O, $ = i - l, L = y * M - T * k, q = (O < 0 ? -1 : 1) * Ro(_m(0, $ * $ * _ - L * L)), W = (L * O - D * q) / _, Y = (-L * D - O * q) / _, J = (L * O + D * q) / _, le = (-L * D + O * q) / _, U = W - C, te = Y - m, me = J - C, K = le - m;
  return U * U + te * te > me * me + K * K && (W = J, Y = le), {
    cx: W,
    cy: Y,
    x01: -g,
    y01: -v,
    x11: W * (i / $ - 1),
    y11: Y * (i / $ - 1)
  };
}
function Zy() {
  var e = Uy, t = Ky, r = Dt(0), n = null, i = Yy, l = Xy, p = qy, u = null;
  function d() {
    var f, g, v = +e.apply(this, arguments), y = +t.apply(this, arguments), k = i.apply(this, arguments) - $f, T = l.apply(this, arguments) - $f, M = If(T - k), C = T > k;
    if (u || (u = f = zu()), y < v && (g = y, y = v, v = g), !(y > Hn))
      u.moveTo(0, 0);
    else if (M > ru - Hn)
      u.moveTo(y * mi(k), y * $r(k)), u.arc(0, 0, y, k, T, !C), v > Hn && (u.moveTo(v * mi(T), v * $r(T)), u.arc(0, 0, v, T, k, C));
    else {
      var m = k, D = T, O = k, _ = T, $ = M, L = M, q = p.apply(this, arguments) / 2, W = q > Hn && (n ? +n.apply(this, arguments) : Ro(v * v + y * y)), Y = Hc(If(y - v) / 2, +r.apply(this, arguments)), J = Y, le = Y, U, te;
      if (W > Hn) {
        var me = Hf(W / v * $r(q)), K = Hf(W / y * $r(q));
        ($ -= me * 2) > Hn ? (me *= C ? 1 : -1, O += me, _ -= me) : ($ = 0, O = _ = (k + T) / 2), (L -= K * 2) > Hn ? (K *= C ? 1 : -1, m += K, D -= K) : (L = 0, m = D = (k + T) / 2);
      }
      var ce = y * mi(m), ue = y * $r(m), he = v * mi(_), ae = v * $r(_);
      if (Y > Hn) {
        var V = y * mi(D), ee = y * $r(D), ne = v * mi(O), ke = v * $r(O), xe;
        if (M < Bf && (xe = Gy(ce, ue, ne, ke, V, ee, he, ae))) {
          var we = ce - xe[0], ie = ue - xe[1], Le = V - xe[0], Me = ee - xe[1], We = 1 / $r(Mm((we * Le + ie * Me) / (Ro(we * we + ie * ie) * Ro(Le * Le + Me * Me))) / 2), qe = Ro(xe[0] * xe[0] + xe[1] * xe[1]);
          J = Hc(Y, (v - qe) / (We - 1)), le = Hc(Y, (y - qe) / (We + 1));
        }
      }
      L > Hn ? le > Hn ? (U = qs(ne, ke, ce, ue, y, le, C), te = qs(V, ee, he, ae, y, le, C), u.moveTo(U.cx + U.x01, U.cy + U.y01), le < Y ? u.arc(U.cx, U.cy, le, In(U.y01, U.x01), In(te.y01, te.x01), !C) : (u.arc(U.cx, U.cy, le, In(U.y01, U.x01), In(U.y11, U.x11), !C), u.arc(0, 0, y, In(U.cy + U.y11, U.cx + U.x11), In(te.cy + te.y11, te.cx + te.x11), !C), u.arc(te.cx, te.cy, le, In(te.y11, te.x11), In(te.y01, te.x01), !C))) : (u.moveTo(ce, ue), u.arc(0, 0, y, m, D, !C)) : u.moveTo(ce, ue), !(v > Hn) || !($ > Hn) ? u.lineTo(he, ae) : J > Hn ? (U = qs(he, ae, V, ee, v, -J, C), te = qs(ce, ue, ne, ke, v, -J, C), u.lineTo(U.cx + U.x01, U.cy + U.y01), J < Y ? u.arc(U.cx, U.cy, J, In(U.y01, U.x01), In(te.y01, te.x01), !C) : (u.arc(U.cx, U.cy, J, In(U.y01, U.x01), In(U.y11, U.x11), !C), u.arc(0, 0, v, In(U.cy + U.y11, U.cx + U.x11), In(te.cy + te.y11, te.cx + te.x11), C), u.arc(te.cx, te.cy, J, In(te.y11, te.x11), In(te.y01, te.x01), !C))) : u.arc(0, 0, v, _, O, C);
    }
    if (u.closePath(), f)
      return u = null, f + "" || null;
  }
  return d.centroid = function() {
    var f = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, g = (+i.apply(this, arguments) + +l.apply(this, arguments)) / 2 - Bf / 2;
    return [mi(g) * f, $r(g) * f];
  }, d.innerRadius = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Dt(+f), d) : e;
  }, d.outerRadius = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Dt(+f), d) : t;
  }, d.cornerRadius = function(f) {
    return arguments.length ? (r = typeof f == "function" ? f : Dt(+f), d) : r;
  }, d.padRadius = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : Dt(+f), d) : n;
  }, d.startAngle = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : Dt(+f), d) : i;
  }, d.endAngle = function(f) {
    return arguments.length ? (l = typeof f == "function" ? f : Dt(+f), d) : l;
  }, d.padAngle = function(f) {
    return arguments.length ? (p = typeof f == "function" ? f : Dt(+f), d) : p;
  }, d.context = function(f) {
    return arguments.length ? (u = f ?? null, d) : u;
  }, d;
}
function Np(e) {
  this._context = e;
}
Np.prototype = {
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
function Iu(e) {
  return new Np(e);
}
function tf(e) {
  return e[0];
}
function nf(e) {
  return e[1];
}
function Fp() {
  var e = tf, t = nf, r = Dt(!0), n = null, i = Iu, l = null;
  function p(u) {
    var d, f = u.length, g, v = !1, y;
    for (n == null && (l = i(y = zu())), d = 0; d <= f; ++d)
      !(d < f && r(g = u[d], d, u)) === v && ((v = !v) ? l.lineStart() : l.lineEnd()), v && l.point(+e(g, d, u), +t(g, d, u));
    if (y)
      return l = null, y + "" || null;
  }
  return p.x = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : Dt(+u), p) : e;
  }, p.y = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : Dt(+u), p) : t;
  }, p.defined = function(u) {
    return arguments.length ? (r = typeof u == "function" ? u : Dt(!!u), p) : r;
  }, p.curve = function(u) {
    return arguments.length ? (i = u, n != null && (l = i(n)), p) : i;
  }, p.context = function(u) {
    return arguments.length ? (u == null ? n = l = null : l = i(n = u), p) : n;
  }, p;
}
function Qy() {
  var e = tf, t = null, r = Dt(0), n = nf, i = Dt(!0), l = null, p = Iu, u = null;
  function d(g) {
    var v, y, k, T = g.length, M, C = !1, m, D = new Array(T), O = new Array(T);
    for (l == null && (u = p(m = zu())), v = 0; v <= T; ++v) {
      if (!(v < T && i(M = g[v], v, g)) === C)
        if (C = !C)
          y = v, u.areaStart(), u.lineStart();
        else {
          for (u.lineEnd(), u.lineStart(), k = v - 1; k >= y; --k)
            u.point(D[k], O[k]);
          u.lineEnd(), u.areaEnd();
        }
      C && (D[v] = +e(M, v, g), O[v] = +r(M, v, g), u.point(t ? +t(M, v, g) : D[v], n ? +n(M, v, g) : O[v]));
    }
    if (m)
      return u = null, m + "" || null;
  }
  function f() {
    return Fp().defined(i).curve(p).context(l);
  }
  return d.x = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : Dt(+g), t = null, d) : e;
  }, d.x0 = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : Dt(+g), d) : e;
  }, d.x1 = function(g) {
    return arguments.length ? (t = g == null ? null : typeof g == "function" ? g : Dt(+g), d) : t;
  }, d.y = function(g) {
    return arguments.length ? (r = typeof g == "function" ? g : Dt(+g), n = null, d) : r;
  }, d.y0 = function(g) {
    return arguments.length ? (r = typeof g == "function" ? g : Dt(+g), d) : r;
  }, d.y1 = function(g) {
    return arguments.length ? (n = g == null ? null : typeof g == "function" ? g : Dt(+g), d) : n;
  }, d.lineX0 = d.lineY0 = function() {
    return f().x(e).y(r);
  }, d.lineY1 = function() {
    return f().x(e).y(n);
  }, d.lineX1 = function() {
    return f().x(t).y(r);
  }, d.defined = function(g) {
    return arguments.length ? (i = typeof g == "function" ? g : Dt(!!g), d) : i;
  }, d.curve = function(g) {
    return arguments.length ? (p = g, l != null && (u = p(l)), d) : p;
  }, d.context = function(g) {
    return arguments.length ? (g == null ? l = u = null : u = p(l = g), d) : l;
  }, d;
}
function Jy(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ev(e) {
  return e;
}
function tv() {
  var e = ev, t = Jy, r = null, n = Dt(0), i = Dt(ru), l = Dt(0);
  function p(u) {
    var d, f = u.length, g, v, y = 0, k = new Array(f), T = new Array(f), M = +n.apply(this, arguments), C = Math.min(ru, Math.max(-ru, i.apply(this, arguments) - M)), m, D = Math.min(Math.abs(C) / f, l.apply(this, arguments)), O = D * (C < 0 ? -1 : 1), _;
    for (d = 0; d < f; ++d)
      (_ = T[k[d] = d] = +e(u[d], d, u)) > 0 && (y += _);
    for (t != null ? k.sort(function($, L) {
      return t(T[$], T[L]);
    }) : r != null && k.sort(function($, L) {
      return r(u[$], u[L]);
    }), d = 0, v = y ? (C - f * O) / y : 0; d < f; ++d, M = m)
      g = k[d], _ = T[g], m = M + (_ > 0 ? _ * v : 0) + O, T[g] = {
        data: u[g],
        index: d,
        value: _,
        startAngle: M,
        endAngle: m,
        padAngle: D
      };
    return T;
  }
  return p.value = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : Dt(+u), p) : e;
  }, p.sortValues = function(u) {
    return arguments.length ? (t = u, r = null, p) : t;
  }, p.sort = function(u) {
    return arguments.length ? (r = u, t = null, p) : r;
  }, p.startAngle = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : Dt(+u), p) : n;
  }, p.endAngle = function(u) {
    return arguments.length ? (i = typeof u == "function" ? u : Dt(+u), p) : i;
  }, p.padAngle = function(u) {
    return arguments.length ? (l = typeof u == "function" ? u : Dt(+u), p) : l;
  }, p;
}
var gd = Array.prototype.slice;
function nv(e) {
  return e.source;
}
function rv(e) {
  return e.target;
}
function av(e) {
  var t = nv, r = rv, n = tf, i = nf, l = null;
  function p() {
    var u, d = gd.call(arguments), f = t.apply(this, d), g = r.apply(this, d);
    if (l || (l = u = zu()), e(l, +n.apply(this, (d[0] = f, d)), +i.apply(this, d), +n.apply(this, (d[0] = g, d)), +i.apply(this, d)), u)
      return l = null, u + "" || null;
  }
  return p.source = function(u) {
    return arguments.length ? (t = u, p) : t;
  }, p.target = function(u) {
    return arguments.length ? (r = u, p) : r;
  }, p.x = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : Dt(+u), p) : n;
  }, p.y = function(u) {
    return arguments.length ? (i = typeof u == "function" ? u : Dt(+u), p) : i;
  }, p.context = function(u) {
    return arguments.length ? (l = u ?? null, p) : l;
  }, p;
}
function iv(e, t, r, n, i) {
  e.moveTo(t, r), e.bezierCurveTo(t = (t + n) / 2, r, t, i, n, i);
}
function ov() {
  return av(iv);
}
function Ma() {
}
function xu(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function Hu(e) {
  this._context = e;
}
Hu.prototype = {
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
        xu(this, this._x1, this._y1);
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
        xu(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function lv(e) {
  return new Hu(e);
}
function zp(e) {
  this._context = e;
}
zp.prototype = {
  areaStart: Ma,
  areaEnd: Ma,
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
        xu(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function sv(e) {
  return new zp(e);
}
function Bp(e) {
  this._context = e;
}
Bp.prototype = {
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
        xu(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function uv(e) {
  return new Bp(e);
}
function $p(e, t) {
  this._basis = new Hu(e), this._beta = t;
}
$p.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length - 1;
    if (r > 0)
      for (var n = e[0], i = t[0], l = e[r] - n, p = t[r] - i, u = -1, d; ++u <= r; )
        d = u / r, this._basis.point(
          this._beta * e[u] + (1 - this._beta) * (n + d * l),
          this._beta * t[u] + (1 - this._beta) * (i + d * p)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
const cv = function e(t) {
  function r(n) {
    return t === 1 ? new Hu(n) : new $p(n, t);
  }
  return r.beta = function(n) {
    return e(+n);
  }, r;
}(0.85);
function bu(e, t, r) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - r),
    e._x2,
    e._y2
  );
}
function rf(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
rf.prototype = {
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
        bu(this, this._x1, this._y1);
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
        bu(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const dv = function e(t) {
  function r(n) {
    return new rf(n, t);
  }
  return r.tension = function(n) {
    return e(+n);
  }, r;
}(0);
function af(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
af.prototype = {
  areaStart: Ma,
  areaEnd: Ma,
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
        bu(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const fv = function e(t) {
  function r(n) {
    return new af(n, t);
  }
  return r.tension = function(n) {
    return e(+n);
  }, r;
}(0);
function of(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
of.prototype = {
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
        bu(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const hv = function e(t) {
  function r(n) {
    return new of(n, t);
  }
  return r.tension = function(n) {
    return e(+n);
  }, r;
}(0);
function lf(e, t, r) {
  var n = e._x1, i = e._y1, l = e._x2, p = e._y2;
  if (e._l01_a > Hn) {
    var u = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, d = 3 * e._l01_a * (e._l01_a + e._l12_a);
    n = (n * u - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / d, i = (i * u - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / d;
  }
  if (e._l23_a > Hn) {
    var f = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, g = 3 * e._l23_a * (e._l23_a + e._l12_a);
    l = (l * f + e._x1 * e._l23_2a - t * e._l12_2a) / g, p = (p * f + e._y1 * e._l23_2a - r * e._l12_2a) / g;
  }
  e._context.bezierCurveTo(n, i, l, p, e._x2, e._y2);
}
function Ip(e, t) {
  this._context = e, this._alpha = t;
}
Ip.prototype = {
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
        lf(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const pv = function e(t) {
  function r(n) {
    return t ? new Ip(n, t) : new rf(n, 0);
  }
  return r.alpha = function(n) {
    return e(+n);
  }, r;
}(0.5);
function Hp(e, t) {
  this._context = e, this._alpha = t;
}
Hp.prototype = {
  areaStart: Ma,
  areaEnd: Ma,
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
        lf(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const mv = function e(t) {
  function r(n) {
    return t ? new Hp(n, t) : new af(n, 0);
  }
  return r.alpha = function(n) {
    return e(+n);
  }, r;
}(0.5);
function Wp(e, t) {
  this._context = e, this._alpha = t;
}
Wp.prototype = {
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
        lf(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const gv = function e(t) {
  function r(n) {
    return t ? new Wp(n, t) : new of(n, 0);
  }
  return r.alpha = function(n) {
    return e(+n);
  }, r;
}(0.5);
function Vp(e) {
  this._context = e;
}
Vp.prototype = {
  areaStart: Ma,
  areaEnd: Ma,
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
function yd(e) {
  return new Vp(e);
}
function xh(e) {
  return e < 0 ? -1 : 1;
}
function bh(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, l = (e._y1 - e._y0) / (n || i < 0 && -0), p = (r - e._y1) / (i || n < 0 && -0), u = (l * i + p * n) / (n + i);
  return (xh(l) + xh(p)) * Math.min(Math.abs(l), Math.abs(p), 0.5 * Math.abs(u)) || 0;
}
function Sh(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Qc(e, t, r) {
  var n = e._x0, i = e._y0, l = e._x1, p = e._y1, u = (l - n) / 3;
  e._context.bezierCurveTo(n + u, i + u * t, l - u, p - u * r, l, p);
}
function Su(e) {
  this._context = e;
}
Su.prototype = {
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
        Qc(this, this._t0, Sh(this, this._t0));
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
          this._point = 3, Qc(this, Sh(this, r = bh(this, e, t)), r);
          break;
        default:
          Qc(this, this._t0, r = bh(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function jp(e) {
  this._context = new Up(e);
}
(jp.prototype = Object.create(Su.prototype)).point = function(e, t) {
  Su.prototype.point.call(this, t, e);
};
function Up(e) {
  this._context = e;
}
Up.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, n, i, l) {
    this._context.bezierCurveTo(t, e, n, r, l, i);
  }
};
function ou(e) {
  return new Su(e);
}
function yv(e) {
  return new jp(e);
}
function Kp(e) {
  this._context = e;
}
Kp.prototype = {
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
        for (var n = Eh(e), i = Eh(t), l = 0, p = 1; p < r; ++l, ++p)
          this._context.bezierCurveTo(n[0][l], i[0][l], n[1][l], i[1][l], e[p], t[p]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Eh(e) {
  var t, r = e.length - 1, n, i = new Array(r), l = new Array(r), p = new Array(r);
  for (i[0] = 0, l[0] = 2, p[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t)
    i[t] = 1, l[t] = 4, p[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[r - 1] = 2, l[r - 1] = 7, p[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t)
    n = i[t] / l[t - 1], l[t] -= n, p[t] -= n * p[t - 1];
  for (i[r - 1] = p[r - 1] / l[r - 1], t = r - 2; t >= 0; --t)
    i[t] = (p[t] - i[t + 1]) / l[t];
  for (l[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t)
    l[t] = 2 * e[t + 1] - i[t + 1];
  return [i, l];
}
function vv(e) {
  return new Kp(e);
}
function Wu(e, t) {
  this._context = e, this._t = t;
}
Wu.prototype = {
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
function xv(e) {
  return new Wu(e, 0.5);
}
function bv(e) {
  return new Wu(e, 0);
}
function Sv(e) {
  return new Wu(e, 1);
}
function No(e, t) {
  if ((p = e.length) > 1)
    for (var r = 1, n, i, l = e[t[0]], p, u = l.length; r < p; ++r)
      for (i = l, l = e[t[r]], n = 0; n < u; ++n)
        l[n][1] += l[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function Fo(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; )
    r[t] = t;
  return r;
}
function Ev(e, t) {
  return e[t];
}
function sf() {
  var e = Dt([]), t = Fo, r = No, n = Ev;
  function i(l) {
    var p = e.apply(this, arguments), u, d = l.length, f = p.length, g = new Array(f), v;
    for (u = 0; u < f; ++u) {
      for (var y = p[u], k = g[u] = new Array(d), T = 0, M; T < d; ++T)
        k[T] = M = [0, +n(l[T], y, T, l)], M.data = l[T];
      k.key = y;
    }
    for (u = 0, v = t(g); u < f; ++u)
      g[v[u]].index = u;
    return r(g, v), g;
  }
  return i.keys = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : Dt(gd.call(l)), i) : e;
  }, i.value = function(l) {
    return arguments.length ? (n = typeof l == "function" ? l : Dt(+l), i) : n;
  }, i.order = function(l) {
    return arguments.length ? (t = l == null ? Fo : typeof l == "function" ? l : Dt(gd.call(l)), i) : t;
  }, i.offset = function(l) {
    return arguments.length ? (r = l ?? No, i) : r;
  }, i;
}
function kv(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, l = e[0].length, p; i < l; ++i) {
      for (p = r = 0; r < n; ++r)
        p += e[r][i][1] || 0;
      if (p)
        for (r = 0; r < n; ++r)
          e[r][i][1] /= p;
    }
    No(e, t);
  }
}
function Tv(e, t) {
  if ((d = e.length) > 0)
    for (var r, n = 0, i, l, p, u, d, f = e[t[0]].length; n < f; ++n)
      for (p = u = 0, r = 0; r < d; ++r)
        (l = (i = e[t[r]][n])[1] - i[0]) > 0 ? (i[0] = p, i[1] = p += l) : l < 0 ? (i[1] = u, i[0] = u += l) : (i[0] = 0, i[1] = l);
}
function wv(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, l = n.length; r < l; ++r) {
      for (var p = 0, u = 0; p < i; ++p)
        u += e[p][r][1] || 0;
      n[r][1] += n[r][0] = -u / 2;
    }
    No(e, t);
  }
}
function Cv(e, t) {
  if (!(!((p = e.length) > 0) || !((l = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, l, p; n < l; ++n) {
      for (var u = 0, d = 0, f = 0; u < p; ++u) {
        for (var g = e[t[u]], v = g[n][1] || 0, y = g[n - 1][1] || 0, k = (v - y) / 2, T = 0; T < u; ++T) {
          var M = e[t[T]], C = M[n][1] || 0, m = M[n - 1][1] || 0;
          k += C - m;
        }
        d += v, f += k * v;
      }
      i[n - 1][1] += i[n - 1][0] = r, d && (r -= f / d);
    }
    i[n - 1][1] += i[n - 1][0] = r, No(e, t);
  }
}
function Av(e) {
  var t = e.map(Pv);
  return Fo(e).sort(function(r, n) {
    return t[r] - t[n];
  });
}
function Pv(e) {
  for (var t = -1, r = 0, n = e.length, i, l = -1 / 0; ++t < n; )
    (i = +e[t][1]) > l && (l = i, r = t);
  return r;
}
function Yp(e) {
  var t = e.map(Xp);
  return Fo(e).sort(function(r, n) {
    return t[r] - t[n];
  });
}
function Xp(e) {
  for (var t = 0, r = -1, n = e.length, i; ++r < n; )
    (i = +e[r][1]) && (t += i);
  return t;
}
function Rv(e) {
  return Yp(e).reverse();
}
function Lv(e) {
  var t = e.length, r, n, i = e.map(Xp), l = Av(e), p = 0, u = 0, d = [], f = [];
  for (r = 0; r < t; ++r)
    n = l[r], p < u ? (p += i[n], d.push(n)) : (u += i[n], f.push(n));
  return f.reverse().concat(d);
}
function Dv(e) {
  return Fo(e).reverse();
}
function hn(e, t) {
  e(t);
}
var kh = {
  ascending: Yp,
  descending: Rv,
  insideout: Lv,
  none: Fo,
  reverse: Dv
};
function uf(e) {
  return e && kh[e] || kh.none;
}
var Th = {
  expand: kv,
  diverging: Tv,
  none: No,
  silhouette: wv,
  wiggle: Cv
};
function cf(e) {
  return e && Th[e] || Th.none;
}
function Ov(e) {
  var t = e === void 0 ? {} : e, r = t.innerRadius, n = t.outerRadius, i = t.cornerRadius, l = t.startAngle, p = t.endAngle, u = t.padAngle, d = t.padRadius, f = Zy();
  return r != null && hn(f.innerRadius, r), n != null && hn(f.outerRadius, n), i != null && hn(f.cornerRadius, i), l != null && hn(f.startAngle, l), p != null && hn(f.endAngle, p), u != null && hn(f.padAngle, u), d != null && hn(f.padRadius, d), f;
}
function df(e) {
  var t = e === void 0 ? {} : e, r = t.x, n = t.x0, i = t.x1, l = t.y, p = t.y0, u = t.y1, d = t.defined, f = t.curve, g = Qy();
  return r && hn(g.x, r), n && hn(g.x0, n), i && hn(g.x1, i), l && hn(g.y, l), p && hn(g.y0, p), u && hn(g.y1, u), d && g.defined(d), f && g.curve(f), g;
}
function qp(e) {
  var t = e === void 0 ? {} : e, r = t.x, n = t.y, i = t.defined, l = t.curve, p = Fp();
  return r && hn(p.x, r), n && hn(p.y, n), i && p.defined(i), l && p.curve(l), p;
}
function Mv(e) {
  var t = e === void 0 ? {} : e, r = t.startAngle, n = t.endAngle, i = t.padAngle, l = t.value, p = t.sort, u = t.sortValues, d = tv();
  return (p === null || p != null) && d.sort(p), (u === null || u != null) && d.sortValues(u), l != null && d.value(l), i != null && hn(d.padAngle, i), r != null && hn(d.startAngle, r), n != null && hn(d.endAngle, n), d;
}
function _v(e) {
  var t = e.keys, r = e.value, n = e.order, i = e.offset, l = sf();
  return t && l.keys(t), r && hn(l.value, r), n && l.order(uf(n)), i && l.offset(cf(i)), l;
}
var Nv = ["className", "top", "left", "data", "centroid", "innerRadius", "outerRadius", "cornerRadius", "startAngle", "endAngle", "padAngle", "padRadius", "pieSort", "pieSortValues", "pieValue", "children", "fill"];
function vd() {
  return vd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vd.apply(this, arguments);
}
function Fv(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, l;
  for (l = 0; l < n.length; l++)
    i = n[l], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function zv(e) {
  var t = e.className, r = e.top, n = e.left, i = e.data, l = i === void 0 ? [] : i, p = e.centroid, u = e.innerRadius, d = u === void 0 ? 0 : u, f = e.outerRadius, g = e.cornerRadius, v = e.startAngle, y = e.endAngle, k = e.padAngle, T = e.padRadius, M = e.pieSort, C = e.pieSortValues, m = e.pieValue, D = e.children, O = e.fill, _ = O === void 0 ? "" : O, $ = Fv(e, Nv), L = Ov({
    innerRadius: d,
    outerRadius: f,
    cornerRadius: g,
    padRadius: T
  }), q = Mv({
    startAngle: v,
    endAngle: y,
    padAngle: k,
    value: m,
    sort: M,
    sortValues: C
  }), W = q(l);
  return D ? /* @__PURE__ */ a.createElement(a.Fragment, null, D({
    arcs: W,
    path: L,
    pie: q
  })) : /* @__PURE__ */ a.createElement(Ke, {
    className: "visx-pie-arcs-group",
    top: r,
    left: n
  }, W.map(function(Y, J) {
    return /* @__PURE__ */ a.createElement("g", {
      key: "pie-arc-" + J
    }, /* @__PURE__ */ a.createElement("path", vd({
      className: Sn("visx-pie-arc", t),
      d: L(Y) || "",
      fill: _ == null || typeof _ == "string" ? _ : _(Y)
    }, $)), p == null ? void 0 : p(L.centroid(Y), Y));
  }));
}
var Bv = ["from", "to", "fill", "className", "innerRef"];
function xd() {
  return xd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xd.apply(this, arguments);
}
function $v(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, l;
  for (l = 0; l < n.length; l++)
    i = n[l], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Yt(e) {
  var t = e.from, r = t === void 0 ? {
    x: 0,
    y: 0
  } : t, n = e.to, i = n === void 0 ? {
    x: 1,
    y: 1
  } : n, l = e.fill, p = l === void 0 ? "transparent" : l, u = e.className, d = e.innerRef, f = $v(e, Bv), g = r.x === i.x || r.y === i.y;
  return /* @__PURE__ */ a.createElement("line", xd({
    ref: d,
    className: Sn("visx-line", u),
    x1: r.x,
    y1: r.y,
    x2: i.x,
    y2: i.y,
    fill: p,
    shapeRendering: g ? "crispEdges" : "auto"
  }, f));
}
var Iv = ["children", "data", "x", "y", "fill", "className", "curve", "innerRef", "defined"];
function bd() {
  return bd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bd.apply(this, arguments);
}
function Hv(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, l;
  for (l = 0; l < n.length; l++)
    i = n[l], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function oa(e) {
  var t = e.children, r = e.data, n = r === void 0 ? [] : r, i = e.x, l = e.y, p = e.fill, u = p === void 0 ? "transparent" : p, d = e.className, f = e.curve, g = e.innerRef, v = e.defined, y = v === void 0 ? function() {
    return !0;
  } : v, k = Hv(e, Iv), T = qp({
    x: i,
    y: l,
    defined: y,
    curve: f
  });
  return t ? /* @__PURE__ */ a.createElement(a.Fragment, null, t({
    path: T
  })) : /* @__PURE__ */ a.createElement("path", bd({
    ref: g,
    className: Sn("visx-linepath", d),
    d: T(n) || "",
    fill: u,
    strokeLinecap: "round"
  }, k));
}
var Wv = ["children", "x", "x0", "x1", "y", "y0", "y1", "data", "defined", "className", "curve", "innerRef"];
function Sd() {
  return Sd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Sd.apply(this, arguments);
}
function Vv(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, l;
  for (l = 0; l < n.length; l++)
    i = n[l], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function jv(e) {
  var t = e.children, r = e.x, n = e.x0, i = e.x1, l = e.y, p = e.y0, u = e.y1, d = e.data, f = d === void 0 ? [] : d, g = e.defined, v = g === void 0 ? function() {
    return !0;
  } : g, y = e.className, k = e.curve, T = e.innerRef, M = Vv(e, Wv), C = df({
    x: r,
    x0: n,
    x1: i,
    y: l,
    y0: p,
    y1: u,
    defined: v,
    curve: k
  });
  return t ? /* @__PURE__ */ a.createElement(a.Fragment, null, t({
    path: C
  })) : /* @__PURE__ */ a.createElement("path", Sd({
    ref: T,
    className: Sn("visx-area", y),
    d: C(f) || ""
  }, M));
}
var Uv = ["x", "x0", "x1", "y", "y1", "y0", "yScale", "data", "defined", "className", "curve", "innerRef", "children"];
function Ed() {
  return Ed = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ed.apply(this, arguments);
}
function Kv(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, l;
  for (l = 0; l < n.length; l++)
    i = n[l], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Yv(e) {
  var t = e.x, r = e.x0, n = e.x1, i = e.y, l = e.y1, p = e.y0, u = e.yScale, d = e.data, f = d === void 0 ? [] : d, g = e.defined, v = g === void 0 ? function() {
    return !0;
  } : g, y = e.className, k = e.curve, T = e.innerRef, M = e.children, C = Kv(e, Uv), m = df({
    x: t,
    x0: r,
    x1: n,
    defined: v,
    curve: k
  });
  return p == null ? m.y0(u.range()[0]) : hn(m.y0, p), i && !l && hn(m.y1, i), l && !i && hn(m.y1, l), M ? /* @__PURE__ */ a.createElement(a.Fragment, null, M({
    path: m
  })) : /* @__PURE__ */ a.createElement("path", Ed({
    ref: T,
    className: Sn("visx-area-closed", y),
    d: m(f) || ""
  }, C));
}
var Xv = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
function kd() {
  return kd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, kd.apply(this, arguments);
}
function qv(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, l;
  for (l = 0; l < n.length; l++)
    i = n[l], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Gv(e) {
  var t = e.className, r = e.top, n = e.left, i = e.keys, l = e.data, p = e.curve, u = e.defined, d = e.x, f = e.x0, g = e.x1, v = e.y0, y = e.y1, k = e.value, T = e.order, M = e.offset, C = e.color, m = e.children, D = qv(e, Xv), O = _v({
    keys: i,
    value: k,
    order: T,
    offset: M
  }), _ = df({
    x: d,
    x0: f,
    x1: g,
    y0: v,
    y1: y,
    curve: p,
    defined: u
  }), $ = O(l);
  return m ? /* @__PURE__ */ a.createElement(a.Fragment, null, m({
    stacks: $,
    path: _,
    stack: O
  })) : /* @__PURE__ */ a.createElement(Ke, {
    top: r,
    left: n
  }, $.map(function(L, q) {
    return /* @__PURE__ */ a.createElement("path", kd({
      className: Sn("visx-stack", t),
      key: "stack-" + q + "-" + (L.key || ""),
      d: _(L) || "",
      fill: C == null ? void 0 : C(L.key, q)
    }, D));
  }));
}
var Zv = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
function Eu() {
  return Eu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Eu.apply(this, arguments);
}
function Qv(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, l;
  for (l = 0; l < n.length; l++)
    i = n[l], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Jv(e) {
  var t = e.className, r = e.top, n = e.left, i = e.keys, l = e.data, p = e.curve, u = e.defined, d = e.x, f = e.x0, g = e.x1, v = e.y0, y = e.y1, k = e.value, T = e.order, M = e.offset, C = e.color, m = e.children, D = Qv(e, Zv);
  return /* @__PURE__ */ a.createElement(Gv, Eu({
    className: t,
    top: r,
    left: n,
    keys: i,
    data: l,
    curve: p,
    defined: u,
    x: d,
    x0: f,
    x1: g,
    y0: v,
    y1: y,
    value: k,
    order: T,
    offset: M,
    color: C
  }, D), m || function(O) {
    var _ = O.stacks, $ = O.path;
    return _.map(function(L, q) {
      return /* @__PURE__ */ a.createElement("path", Eu({
        className: Sn("visx-area-stack", t),
        key: "area-stack-" + q + "-" + (L.key || ""),
        d: $(L) || "",
        fill: C == null ? void 0 : C(L.key, q)
      }, D));
    });
  });
}
function ff(e) {
  if ("bandwidth" in e)
    return e.bandwidth();
  var t = e.range(), r = e.domain();
  return Math.abs(t[t.length - 1] - t[0]) / r.length;
}
var ex = ["data", "className", "top", "left", "x0", "x0Scale", "x1Scale", "yScale", "color", "keys", "height", "children"];
function Td() {
  return Td = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Td.apply(this, arguments);
}
function tx(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, l;
  for (l = 0; l < n.length; l++)
    i = n[l], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Gp(e) {
  var t = e.data, r = e.className, n = e.top, i = e.left, l = e.x0, p = e.x0Scale, u = e.x1Scale, d = e.yScale, f = e.color, g = e.keys, v = e.height, y = e.children, k = tx(e, ex), T = ff(u), M = t.map(function(C, m) {
    return {
      index: m,
      x0: p(l(C)),
      bars: g.map(function(D, O) {
        var _ = C[D];
        return {
          index: O,
          key: D,
          value: _,
          width: T,
          x: u(D) || 0,
          y: d(_) || 0,
          color: f(D, O),
          height: v - (d(_) || 0)
        };
      })
    };
  });
  return y ? /* @__PURE__ */ a.createElement(a.Fragment, null, y(M)) : /* @__PURE__ */ a.createElement(Ke, {
    className: Sn("visx-bar-group", r),
    top: n,
    left: i
  }, M.map(function(C) {
    return /* @__PURE__ */ a.createElement(Ke, {
      key: "bar-group-" + C.index + "-" + C.x0,
      left: C.x0
    }, C.bars.map(function(m) {
      return /* @__PURE__ */ a.createElement(dr, Td({
        key: "bar-group-bar-" + C.index + "-" + m.index + "-" + m.value + "-" + m.key,
        x: m.x,
        y: m.y,
        width: m.width,
        height: m.height,
        fill: m.color
      }, k));
    }));
  }));
}
function Zp(e) {
  return e == null ? void 0 : e[0];
}
function Qp(e) {
  return e == null ? void 0 : e[1];
}
var nx = ["data", "className", "top", "left", "x", "y0", "y1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
function wd() {
  return wd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wd.apply(this, arguments);
}
function rx(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, l;
  for (l = 0; l < n.length; l++)
    i = n[l], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function ax(e) {
  var t = e.data, r = e.className, n = e.top, i = e.left, l = e.x, p = e.y0, u = p === void 0 ? Zp : p, d = e.y1, f = d === void 0 ? Qp : d, g = e.xScale, v = e.yScale, y = e.color, k = e.keys, T = e.value, M = e.order, C = e.offset, m = e.children, D = rx(e, nx), O = sf();
  k && O.keys(k), T && hn(O.value, T), M && O.order(uf(M)), C && O.offset(cf(C));
  var _ = O(t), $ = ff(g), L = _.map(function(q, W) {
    var Y = q.key;
    return {
      index: W,
      key: Y,
      bars: q.map(function(J, le) {
        var U = (v(u(J)) || 0) - (v(f(J)) || 0), te = v(f(J)), me = "bandwidth" in g ? g(l(J.data)) : Math.max((g(l(J.data)) || 0) - $ / 2);
        return {
          bar: J,
          key: Y,
          index: le,
          height: U,
          width: $,
          x: me || 0,
          y: te || 0,
          color: y(q.key, le)
        };
      })
    };
  });
  return m ? /* @__PURE__ */ a.createElement(a.Fragment, null, m(L)) : /* @__PURE__ */ a.createElement(Ke, {
    className: Sn("visx-bar-stack", r),
    top: n,
    left: i
  }, L.map(function(q) {
    return q.bars.map(function(W) {
      return /* @__PURE__ */ a.createElement(dr, wd({
        key: "bar-stack-" + q.index + "-" + W.index,
        x: W.x,
        y: W.y,
        height: W.height,
        width: W.width,
        fill: W.color
      }, D));
    });
  }));
}
var ix = ["data", "className", "top", "left", "y", "x0", "x1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
function Cd() {
  return Cd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Cd.apply(this, arguments);
}
function ox(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, l;
  for (l = 0; l < n.length; l++)
    i = n[l], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function lx(e) {
  var t = e.data, r = e.className, n = e.top, i = e.left, l = e.y, p = e.x0, u = p === void 0 ? Zp : p, d = e.x1, f = d === void 0 ? Qp : d, g = e.xScale, v = e.yScale, y = e.color, k = e.keys, T = e.value, M = e.order, C = e.offset, m = e.children, D = ox(e, ix), O = sf();
  k && O.keys(k), T && hn(O.value, T), M && O.order(uf(M)), C && O.offset(cf(C));
  var _ = O(t), $ = ff(v), L = _.map(function(q, W) {
    var Y = q.key;
    return {
      index: W,
      key: Y,
      bars: q.map(function(J, le) {
        var U = (g(f(J)) || 0) - (g(u(J)) || 0), te = g(u(J)), me = "bandwidth" in v ? v(l(J.data)) : Math.max((v(l(J.data)) || 0) - U / 2);
        return {
          bar: J,
          key: Y,
          index: le,
          height: $,
          width: U,
          x: te || 0,
          y: me || 0,
          color: y(q.key, le)
        };
      })
    };
  });
  return m ? /* @__PURE__ */ a.createElement(a.Fragment, null, m(L)) : /* @__PURE__ */ a.createElement(Ke, {
    className: Sn("visx-bar-stack-horizontal", r),
    top: n,
    left: i
  }, L.map(function(q) {
    return q.bars.map(function(W) {
      return /* @__PURE__ */ a.createElement(dr, Cd({
        key: "bar-stack-" + q.index + "-" + W.index,
        x: W.x,
        y: W.y,
        height: W.height,
        width: W.width,
        fill: W.color
      }, D));
    });
  }));
}
var wh = "http://www.w3.org/2000/svg";
function sx(e) {
  var t = document.getElementById(e);
  if (!t) {
    var r = document.createElementNS(wh, "svg");
    r.setAttribute("aria-hidden", "true"), r.style.opacity = "0", r.style.width = "0", r.style.height = "0", r.style.position = "absolute", r.style.top = "-100%", r.style.left = "-100%", r.style.pointerEvents = "none", t = document.createElementNS(wh, "path"), t.setAttribute("id", e), r.appendChild(t), document.body.appendChild(r);
  }
  return t;
}
var ux = "__visx_splitpath_svg_path_measurement_id", Ch = function() {
  return !0;
};
function cx(e) {
  var t = e.path, r = e.pointsInSegments, n = e.segmentation, i = n === void 0 ? "x" : n, l = e.sampleRate, p = l === void 0 ? 1 : l;
  try {
    var u = sx(ux);
    u.setAttribute("d", t);
    var d = u.getTotalLength(), f = r.length, g = r.map(function() {
      return [];
    });
    if (i === "x" || i === "y")
      for (var v = r.map(function(te) {
        var me;
        return (me = te.find(function(K) {
          return typeof K[i] == "number";
        })) == null ? void 0 : me[i];
      }), y = u.getPointAtLength(0), k = u.getPointAtLength(d), T = k[i] > y[i], M = T ? v.map(function(te) {
        return typeof te > "u" ? Ch : function(me) {
          return me >= te;
        };
      }) : v.map(function(te) {
        return typeof te > "u" ? Ch : function(me) {
          return me <= te;
        };
      }), C = 0, m = 0; m <= d; m += p) {
        for (var D = u.getPointAtLength(m), O = D[i]; C < f - 1 && M[C + 1](O); )
          C += 1;
        g[C].push(D);
      }
    else {
      var _ = r.map(function(te) {
        return te.length;
      }), $ = _.reduce(function(te, me) {
        return te + me;
      }, 0), L = d / Math.max(1, $ - 1), q = _.slice(0, f - 1);
      q.unshift(0);
      for (var W = 2; W < f; W += 1)
        q[W] += q[W - 1];
      for (var Y = 0; Y < f; Y += 1)
        q[Y] *= L;
      for (var J = 0, le = 0; le <= d; le += p) {
        for (var U = u.getPointAtLength(le); J < f - 1 && le >= q[J + 1]; )
          J += 1;
        g[J].push(U);
      }
    }
    return g;
  } catch {
    return [];
  }
}
function Ad() {
  return Ad = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ad.apply(this, arguments);
}
var dx = function(t) {
  return t.x || 0;
}, fx = function(t) {
  return t.y || 0;
};
function Jp(e) {
  var t = e.children, r = e.className, n = e.curve, i = e.defined, l = e.segmentation, p = e.sampleRate, u = e.segments, d = e.x, f = e.y, g = e.styles, v = fe.useMemo(function() {
    var T = typeof d == "number" || typeof d > "u" ? function() {
      return d;
    } : d, M = typeof f == "number" || typeof f > "u" ? function() {
      return f;
    } : f;
    return u.map(function(C) {
      return C.map(function(m, D) {
        return {
          x: T(m, D, C),
          y: M(m, D, C)
        };
      });
    });
  }, [d, f, u]), y = fe.useMemo(function() {
    var T = qp({
      x: d,
      y: f,
      defined: i,
      curve: n
    });
    return T(u.flat()) || "";
  }, [d, f, i, n, u]), k = fe.useMemo(function() {
    return cx({
      path: y,
      segmentation: l,
      pointsInSegments: v,
      sampleRate: p
    });
  }, [y, l, v, p]);
  return /* @__PURE__ */ a.createElement("g", null, k.map(function(T, M) {
    return t ? /* @__PURE__ */ a.createElement(a.Fragment, {
      key: M
    }, t({
      index: M,
      segment: T,
      styles: g[M] || g[M % g.length]
    })) : /* @__PURE__ */ a.createElement(oa, Ad({
      key: M,
      className: r,
      data: T,
      x: dx,
      y: fx
    }, g[M] || g[M % g.length]));
  }));
}
Jp.propTypes = {
  segments: se.arrayOf(se.array).isRequired,
  styles: se.array.isRequired,
  children: se.func,
  className: se.string
};
var hx = ["tooltipOpen"];
function px(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, l;
  for (l = 0; l < n.length; l++)
    i = n[l], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function ku() {
  return ku = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ku.apply(this, arguments);
}
function em(e) {
  var t = fe.useState(ku({
    tooltipOpen: !1
  }, e)), r = t[0], n = t[1], i = fe.useCallback(function(p) {
    return n(typeof p == "function" ? function(u) {
      u.tooltipOpen;
      var d = px(u, hx);
      return ku({}, p(d), {
        tooltipOpen: !0
      });
    } : {
      tooltipOpen: !0,
      tooltipLeft: p.tooltipLeft,
      tooltipTop: p.tooltipTop,
      tooltipData: p.tooltipData
    });
  }, [n]), l = fe.useCallback(function() {
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
    showTooltip: i,
    hideTooltip: l
  };
}
var mx = ["className", "top", "left", "offsetLeft", "offsetTop", "style", "children", "unstyled", "applyPositionStyle"];
function Tu() {
  return Tu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Tu.apply(this, arguments);
}
function gx(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, l;
  for (l = 0; l < n.length; l++)
    i = n[l], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var tm = {
  position: "absolute",
  backgroundColor: "white",
  color: "#666666",
  padding: ".3rem .5rem",
  borderRadius: "3px",
  fontSize: "14px",
  boxShadow: "0 1px 2px rgba(33,33,33,0.2)",
  lineHeight: "1em",
  pointerEvents: "none"
}, hf = /* @__PURE__ */ a.forwardRef(function(e, t) {
  var r = e.className, n = e.top, i = e.left, l = e.offsetLeft, p = l === void 0 ? 10 : l, u = e.offsetTop, d = u === void 0 ? 10 : u, f = e.style, g = f === void 0 ? tm : f, v = e.children, y = e.unstyled, k = y === void 0 ? !1 : y, T = e.applyPositionStyle, M = T === void 0 ? !1 : T, C = gx(e, mx);
  return /* @__PURE__ */ a.createElement("div", Tu({
    ref: t,
    className: Sn("visx-tooltip", r),
    style: Tu({
      top: n == null || d == null ? n : n + d,
      left: i == null || p == null ? i : i + p
    }, M && {
      position: "absolute"
    }, !k && g)
  }, C), v);
});
hf.propTypes = {
  children: se.node,
  className: se.string,
  left: se.number,
  offsetLeft: se.number,
  offsetTop: se.number,
  top: se.number,
  applyPositionStyle: se.bool,
  unstyled: se.bool
};
hf.displayName = "Tooltip";
const yx = hf;
function Pd() {
  return Pd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Pd.apply(this, arguments);
}
function vx(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function xx(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Rd(e, t);
}
function Rd(e, t) {
  return Rd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Rd(e, t);
}
var Ah = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0
};
function bx(e) {
  var t;
  return t = /* @__PURE__ */ function(r) {
    xx(n, r);
    function n(l) {
      var p;
      return p = r.call(this, l) || this, p.state = {
        rect: void 0,
        parentRect: void 0
      }, p.nodeRef = /* @__PURE__ */ a.createRef(), p.getRects = p.getRects.bind(vx(p)), p;
    }
    var i = n.prototype;
    return i.componentDidMount = function() {
      var p, u = this;
      this.node = (p = this.nodeRef) != null && p.current ? this.nodeRef.current : Um.findDOMNode(this), this.setState(function() {
        return u.getRects();
      });
    }, i.getRects = function() {
      if (!this.node)
        return this.state;
      var p = this.node, u = p.parentNode, d = p.getBoundingClientRect ? p.getBoundingClientRect() : Ah, f = u != null && u.getBoundingClientRect ? u.getBoundingClientRect() : Ah;
      return {
        rect: d,
        parentRect: f
      };
    }, i.render = function() {
      return /* @__PURE__ */ a.createElement(e, Pd({
        nodeRef: this.nodeRef,
        getRects: this.getRects
      }, this.state, this.props));
    }, n;
  }(a.PureComponent), t.displayName = "withBoundingRects(" + (e.displayName || "") + ")", t;
}
var nm = /* @__PURE__ */ fe.createContext({
  isFlippedVertically: !1,
  isFlippedHorizontally: !1
}), Sx = nm.Provider;
nm.Consumer;
var Ex = ["children", "getRects", "left", "offsetLeft", "offsetTop", "parentRect", "rect", "style", "top", "unstyled", "nodeRef"];
function wu() {
  return wu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wu.apply(this, arguments);
}
function kx(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, l;
  for (l = 0; l < n.length; l++)
    i = n[l], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function rm(e) {
  var t = e.children;
  e.getRects;
  var r = e.left, n = r === void 0 ? 0 : r, i = e.offsetLeft, l = i === void 0 ? 10 : i, p = e.offsetTop, u = p === void 0 ? 10 : p, d = e.parentRect, f = e.rect, g = e.style, v = g === void 0 ? tm : g, y = e.top, k = y === void 0 ? 0 : y, T = e.unstyled, M = T === void 0 ? !1 : T, C = e.nodeRef, m = kx(e, Ex), D, O = !1, _ = !1;
  if (f && d) {
    var $ = n, L = k;
    if (d.width) {
      var q = $ + l + f.width - d.width, W = f.width - $ - l;
      O = q > 0 && q > W;
    } else {
      var Y = $ + l + f.width - window.innerWidth, J = f.width - $ - l;
      O = Y > 0 && Y > J;
    }
    if (d.height) {
      var le = L + u + f.height - d.height, U = f.height - L - u;
      _ = le > 0 && le > U;
    } else
      _ = L + u + f.height > window.innerHeight;
    $ = O ? $ - f.width - l : $ + l, L = _ ? L - f.height - u : L + u, $ = Math.round($), L = Math.round(L), D = "translate(" + $ + "px, " + L + "px)";
  }
  return /* @__PURE__ */ a.createElement(yx, wu({
    ref: C,
    style: wu({
      left: 0,
      top: 0,
      transform: D
    }, !M && v)
  }, m), /* @__PURE__ */ a.createElement(Sx, {
    value: {
      isFlippedVertically: !_,
      isFlippedHorizontally: !O
    }
  }, t));
}
rm.propTypes = {
  nodeRef: se.oneOfType([se.string, se.func, se.object])
};
const am = bx(rm);
var zo = /* @__PURE__ */ function() {
  function e(r) {
    var n = r.x, i = n === void 0 ? 0 : n, l = r.y, p = l === void 0 ? 0 : l;
    this.x = 0, this.y = 0, this.x = i, this.y = p;
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
function Tx(e, t) {
  return new zo({
    x: e.x + t.x,
    y: e.y + t.y
  });
}
function wx(e, t) {
  return new zo({
    x: e.x - t.x,
    y: e.y - t.y
  });
}
const Cx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Point: zo,
  subtractPoints: wx,
  sumPoints: Tx
}, Symbol.toStringTag, { value: "Module" }));
function Ax(e) {
  return !!e && e instanceof Element;
}
function Px(e) {
  return !!e && (e instanceof SVGElement || "ownerSVGElement" in e);
}
function Rx(e) {
  return !!e && "createSVGPoint" in e;
}
function Lx(e) {
  return !!e && "getScreenCTM" in e;
}
function Dx(e) {
  return !!e && "changedTouches" in e;
}
function Ox(e) {
  return !!e && "clientX" in e;
}
function Mx(e) {
  return !!e && (e instanceof Event || "nativeEvent" in e && e.nativeEvent instanceof Event);
}
function Wl() {
  return Wl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wl.apply(this, arguments);
}
var Jc = {
  x: 0,
  y: 0
};
function _x(e) {
  if (!e)
    return Wl({}, Jc);
  if (Dx(e))
    return e.changedTouches.length > 0 ? {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    } : Wl({}, Jc);
  if (Ox(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  var t = e == null ? void 0 : e.target, r = t && "getBoundingClientRect" in t ? t.getBoundingClientRect() : null;
  return r ? {
    x: r.x + r.width / 2,
    y: r.y + r.height / 2
  } : Wl({}, Jc);
}
function Ld(e, t) {
  if (!e || !t)
    return null;
  var r = _x(t), n = Px(e) ? e.ownerSVGElement : e, i = Lx(n) ? n.getScreenCTM() : null;
  if (Rx(n) && i) {
    var l = n.createSVGPoint();
    return l.x = r.x, l.y = r.y, l = l.matrixTransform(i.inverse()), new zo({
      x: l.x,
      y: l.y
    });
  }
  var p = e.getBoundingClientRect();
  return new zo({
    x: r.x - p.left - e.clientLeft,
    y: r.y - p.top - e.clientTop
  });
}
function Dd(e, t) {
  if (Ax(e) && t)
    return Ld(e, t);
  if (Mx(e)) {
    var r = e, n = r.target;
    if (n)
      return Ld(n, r);
  }
  return null;
}
const Nx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  localPoint: Dd,
  touchPoint: Ld
}, Symbol.toStringTag, { value: "Module" })), Fx = new Jh(), im = (e) => {
  const { tableData: t, config: r, formatNumber: n, capitalize: i, formatDate: l, formatTooltipsDate: p, parseDate: u, setSharedFilter: d } = fe.useContext(lt), { xScale: f, yScale: g, showTooltip: v, hideTooltip: y } = e, { xAxis: k, visualizationType: T, orientation: M, yAxis: C, runtime: m } = r, D = Fx.applySuppression(t, r.suppressedData), O = (K, ce) => {
    const { x: ue, y: he } = ce, V = {
      data: K || {},
      dataXPosition: ue + 10,
      dataYPosition: he
    };
    return {
      tooltipLeft: V.dataXPosition,
      tooltipTop: V.dataYPosition,
      tooltipData: V
    };
  }, _ = (K, ce) => {
    K.stopPropagation();
    const ue = Dd(K), { x: he, y: ae } = ue, { data: V, arc: ee } = ce ?? {}, ne = q(he - Number(r.yAxis.size || 0)), ke = T !== "Pie" ? r.series.filter((De) => De.tooltip === !0).map((De) => De.dataKey) : r.series.map((De) => De.dataKey);
    ke.push(r.xAxis.dataKey), r.visualizationType === "Forecasting" && r.series.map((De) => {
      De.confidenceIntervals.map((_e) => {
        _e.showInTooltip && (ke.push(_e.high), ke.push(_e.low));
      });
    });
    function xe(De) {
      let _e = [];
      for (let $e in De)
        De.hasOwnProperty($e) && _e.push(De[$e].name);
      return _e;
    }
    ke.push(...xe(r.columns)), ke.push(...xe(r.columns));
    const we = J(ne, ke), ie = D.filter((De) => De[k.dataKey] === W(ae)), Le = M === "vertical" ? we : ie, Me = (De) => {
      const _e = r.series.filter((Ze) => Ze.dataKey === De)[0];
      return _e != null && _e.axis ? String(_e.axis).toLowerCase() : "left";
    }, qe = (() => {
      var Et, vt, Ct;
      const De = r.columns, _e = [], $e = [];
      for (const [Je, Vt] of Object.entries(De)) {
        const qt = {
          addColPrefix: r.columns[Je].prefix,
          addColSuffix: r.columns[Je].suffix,
          addColRoundTo: r.columns[Je].roundToPlace ? r.columns[Je].roundToPlace : "",
          addColCommas: r.columns[Je].commas
        };
        let zt = null;
        r.visualizationType === "Pie" ? zt = ee == null ? void 0 : ee.data[Vt.name] : zt = (Et = Le[0]) == null ? void 0 : Et[Vt.name];
        const bt = ep(zt, "left", !0, r, qt);
        Vt.tooltips && _e.push([Vt.label, bt]);
      }
      const Ze = [];
      return _e.forEach((Je) => {
        Ze.push([Je[0], Je[1]]);
      }), T === "Pie" && $e.push(
        // ignore
        [r.xAxis.dataKey, V],
        [r.runtime.yAxis.dataKey, n(ee == null ? void 0 : ee.data[r.runtime.yAxis.dataKey])],
        ["Percent", `${Math.round(((ee == null ? void 0 : ee.endAngle) - (ee == null ? void 0 : ee.startAngle)) * 180 / Math.PI / 360 * 100) + "%"}`]
      ), T === "Forest Plot" && $e.push([r.xAxis.dataKey, W(ae)]), T !== "Pie" && T !== "Forest Plot" && $e.push(
        ...(Ct = (vt = le()) == null ? void 0 : vt.filter(Boolean)) == null ? void 0 : Ct.flatMap((Je) => {
          var qt, zt, bt;
          const Vt = Je === r.xAxis.dataKey ? (qt = Le[0]) == null ? void 0 : qt[Je] : n((zt = Le[0]) == null ? void 0 : zt[Je], Me(Je));
          return (bt = Le == null ? void 0 : Le[0]) != null && bt[Je] ? [[Je, Vt, Me(Je)]] : [];
        })
      ), [...$e, ...Ze];
    })();
    if (!qe)
      return;
    const Ge = O(qe, ue);
    v(Ge);
  }, $ = () => {
    r.visualizationType === "Area Chart" ? setTimeout(() => {
      y();
    }, 3e3) : y();
  }, L = (K) => {
    if (r.xAxis.type === "categorical" || r.visualizationType === "Combo") {
      let ce = f.step();
      const he = Math.floor(Number(K) / ce);
      return f.domain()[he - 1];
    }
    if (yn(r.xAxis) && r.visualizationType !== "Combo") {
      const ce = cd((V) => u(V[r.xAxis.dataKey])).left, ue = f.invert(f(K)), he = ce(r.data, ue, 1);
      return u(r.data[he - 1][r.xAxis.dataKey]);
    }
  }, q = (K, ce = !1) => {
    if (T !== "Pie" && M !== "horizontal") {
      if (f.type === "point" || k.type === "continuous" || yn(k)) {
        let ue = null, he = Number.MAX_VALUE, ae = K;
        return D.forEach((V) => {
          const ee = yn(k) ? f(u(V[k.dataKey])) : f(V[k.dataKey]);
          let ne = r.barHeight;
          const ke = Math.abs(Number(ee - ae + (ce ? ne * 2 : 0)));
          ke <= he && (he = ke, ue = (yn(k), V[k.dataKey]));
        }), ue;
      }
      if (r.xAxis.type === "categorical" || T === "Combo" && M !== "horizontal" && T !== "Forest Plot") {
        let he = (f.range()[1] - f.range()[0]) / (f.domain().length + 1);
        const V = Math.floor((Number(K) - he / 2) / he);
        return f.domain()[V];
      }
      if (yn(k) && T !== "Combo" && M !== "horizontal") {
        const ue = cd((ee) => u(ee[r.xAxis.dataKey])).left, he = f.invert(K), ae = ue(r.data, he, 1);
        return u(r.data[ae - 1][r.xAxis.dataKey]);
      }
    }
  }, W = (K, ce) => {
    if (T === "Pie")
      return;
    let ue = Number.MAX_VALUE, he = null;
    return D.forEach((ae, V) => {
      const ee = g(T !== "Forest Plot" ? ae[r.xAxis.dataKey] : V), ne = Math.abs(ee - K);
      ne < ue && (ue = ne, he = ce ? ae[ce] : ae[r.xAxis.dataKey]);
    }), he;
  }, Y = (K) => {
    var ce, ue;
    try {
      const he = Dd(K), { x: ae } = he;
      if (!ae)
        throw new Error("COVE: no x value in handleTooltipClick.");
      let V = q(ae, !0), ee = (ce = r.data) == null ? void 0 : ce.filter((ne) => ne[r.xAxis.dataKey] === V);
      if (!V)
        throw new Error("COVE: no closest x scale value in handleTooltipClick");
      if (yn(k) && V && (V = new Date(V), V = l(V), ee = (ue = r.data) == null ? void 0 : ue.filter((ne) => l(new Date(ne[r.xAxis.dataKey])) === V)), !ee[0])
        throw new Error(`COVE: no data found matching the closest xScale value: ${V}`);
      d && (r != null && r.uid) && (ee != null && ee[0]) && d(r.uid, ee[0]);
    } catch (he) {
      console.error(he.message);
    }
  }, J = (K, ce) => {
    try {
      let ue;
      return k.type === "categorical" ? ue = D.filter((ae) => ae[k.dataKey] === K) : ue = D.filter((ae) => ae[k.dataKey] === K), !ue || ue.length === 0 ? [] : ue.map((ae) => Object.fromEntries(Object.entries(ae).filter(([V, ee]) => ce.includes(V))));
    } catch (ue) {
      console.error("COVE", ue);
    }
  }, le = () => {
    var K;
    try {
      let ce, ue = [], he = [];
      if ((K = r.series) == null || K.forEach((ae) => {
        ae.type === "Forecasting" && (ue.push(ae.stageColumn), ae == null || ae.confidenceIntervals.forEach((V) => {
          V.showInTooltip === !0 && (he.push(V.low), he.push(V.high));
        }));
      }), !r.dashboard)
        switch (T) {
          case "Combo":
            ce = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys, ...he];
            break;
          case "Forecasting":
            ce = [m.xAxis.dataKey, ...ue, ...he];
            break;
          case "Line":
            ce = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
            break;
          case "Area Chart":
            ce = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
            break;
          case "Bar":
            ce = M === "vertical" ? [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys] : [m.yAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
            break;
          case "Pie":
            ce = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
          default:
            throw new Error("No visualization type found in handleTooltipMouseOver");
        }
      return r.dashboard && (ce = [m.xAxis.dataKey, ...m == null ? void 0 : m.barSeriesKeys, ...m == null ? void 0 : m.lineSeriesKeys, ...ue, ...he]), ce;
    } catch (ce) {
      console.error("COVE", ce);
    }
  }, U = (K) => {
    const { dataXPosition: ce, dataYPosition: ue } = K;
    return {
      opacity: r.tooltips.opacity ? r.tooltips.opacity / 100 : 1,
      position: "absolute",
      backgroundColor: "white",
      borderRadius: "4px",
      transform: `translate(${ce}px, ${Number(ue)}px)`
    };
  }, te = (K) => {
    var ue, he;
    let ce = r.series.filter((ae) => ae.dataKey === K);
    return (ue = ce[0]) != null && ue.name ? (he = ce[0]) == null ? void 0 : he.name : K;
  };
  return {
    getIncludedTooltipSeries: le,
    getXValueFromCoordinate: q,
    getXValueFromCoordinateDate: L,
    getYScaleValues: J,
    handleTooltipClick: Y,
    handleTooltipMouseOff: $,
    handleTooltipMouseOver: _,
    TooltipListItem: ({ item: K }) => {
      const [ce, ue] = K, [he, ae, V] = ue;
      if (T === "Forest Plot")
        return he === r.xAxis.dataKey ? /* @__PURE__ */ a.createElement("li", { className: "tooltip-heading" }, `${i(r.xAxis.dataKey ? `${r.xAxis.dataKey}: ` : "")} ${yn(C) ? l(u(he, !1)) : ae}`) : /* @__PURE__ */ a.createElement("li", { className: "tooltip-body" }, `${te(he)}: ${n(ae, "left")}`);
      const ee = r.tooltips.dateDisplayFormat ? p(u(ae, !1)) : l(u(ae, !1));
      return T === "Bar" && M === "horizontal" && he === r.xAxis.dataKey ? /* @__PURE__ */ a.createElement("li", { className: "tooltip-heading" }, `${i(r.runtime.yAxis.label ? `${r.runtime.yAxis.label}: ` : "")} ${r.xAxis.type === "date" ? ee : ae}`) : he === r.xAxis.dataKey ? /* @__PURE__ */ a.createElement("li", { className: "tooltip-heading" }, `${i(r.runtime.xAxis.label ? `${r.runtime.xAxis.label}: ` : "")} ${yn(k) ? ee : ae}`) : /* @__PURE__ */ a.createElement("li", { className: "tooltip-body" }, `${te(he)}: ${ae}`);
    },
    tooltipStyles: U
  };
};
function pf(e, { threshold: t = 0, root: r = null, rootMargin: n = "0%", freezeOnceVisible: i = !1 }) {
  const [l, p] = fe.useState(), u = (l == null ? void 0 : l.isIntersecting) && i, d = ([f]) => {
    p(f);
  };
  return fe.useEffect(() => {
    setTimeout(() => {
      const f = e == null ? void 0 : e.current;
      if (!!!window.IntersectionObserver || u || !f)
        return;
      const v = { threshold: t, root: r, rootMargin: n }, y = new IntersectionObserver(d, v);
      return y.observe(f), () => y.disconnect();
    }, 500);
  }, [e, t, r, n, u]), l;
}
const Od = (e, t = !1) => {
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
var zx = ["flexDirection", "alignItems", "margin", "display", "children"];
function Md() {
  return Md = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Md.apply(this, arguments);
}
function Bx(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, l;
  for (l = 0; l < n.length; l++)
    i = n[l], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Cu(e) {
  var t = e.flexDirection, r = t === void 0 ? "row" : t, n = e.alignItems, i = n === void 0 ? "center" : n, l = e.margin, p = l === void 0 ? "0" : l, u = e.display, d = u === void 0 ? "flex" : u, f = e.children, g = Bx(e, zx);
  return /* @__PURE__ */ a.createElement("div", Md({
    className: "visx-legend-item",
    style: {
      display: d,
      alignItems: i,
      flexDirection: r,
      margin: p
    }
  }, g), f);
}
Cu.propTypes = {
  alignItems: se.string,
  margin: se.oneOfType([se.string, se.number]),
  children: se.node,
  display: se.string
};
var $x = ["flex", "label", "margin", "align", "children"];
function _d() {
  return _d = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _d.apply(this, arguments);
}
function Ix(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, l;
  for (l = 0; l < n.length; l++)
    i = n[l], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Au(e) {
  var t = e.flex, r = t === void 0 ? "1" : t, n = e.label, i = e.margin, l = i === void 0 ? "5px 0" : i, p = e.align, u = p === void 0 ? "left" : p, d = e.children, f = Ix(e, $x);
  return /* @__PURE__ */ a.createElement("div", _d({
    className: "visx-legend-label",
    style: {
      justifyContent: u,
      display: "flex",
      flex: r,
      margin: l
    }
  }, f), d || n);
}
Au.propTypes = {
  align: se.string,
  label: se.node,
  flex: se.oneOfType([se.string, se.number]),
  margin: se.oneOfType([se.string, se.number]),
  children: se.node
};
function Nd() {
  return Nd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Nd.apply(this, arguments);
}
function mf(e) {
  var t = e.fill, r = e.width, n = e.height, i = e.style;
  return /* @__PURE__ */ a.createElement("div", {
    style: Nd({
      width: r,
      height: n,
      background: t
    }, i)
  });
}
mf.propTypes = {
  fill: se.string,
  width: se.oneOfType([se.string, se.number]),
  height: se.oneOfType([se.string, se.number])
};
function om(e) {
  var t = e.fill, r = e.width, n = e.height, i = e.style, l = typeof r == "string" || typeof r > "u" ? 0 : r, p = typeof n == "string" || typeof n > "u" ? 0 : n, u = Math.max(l, p), d = u / 2;
  return /* @__PURE__ */ a.createElement("svg", {
    width: u,
    height: u
  }, /* @__PURE__ */ a.createElement(Ke, {
    top: d,
    left: d
  }, /* @__PURE__ */ a.createElement("circle", {
    r: d,
    fill: t,
    style: i
  })));
}
om.propTypes = {
  fill: se.string,
  width: se.oneOfType([se.string, se.number]),
  height: se.oneOfType([se.string, se.number])
};
function lm(e) {
  var t = e.fill, r = e.width, n = e.height, i = e.style, l = typeof n == "string" || typeof n > "u" ? 0 : n, p = typeof (i == null ? void 0 : i.strokeWidth) == "number" ? i == null ? void 0 : i.strokeWidth : 2;
  return /* @__PURE__ */ a.createElement("svg", {
    width: r,
    height: n
  }, /* @__PURE__ */ a.createElement(Ke, {
    top: l / 2 - p / 2
  }, /* @__PURE__ */ a.createElement("line", {
    x1: 0,
    x2: r,
    y1: 0,
    y2: 0,
    stroke: t,
    strokeWidth: p,
    style: i
  })));
}
lm.propTypes = {
  fill: se.string,
  width: se.oneOfType([se.string, se.number]),
  height: se.oneOfType([se.string, se.number])
};
function Vl() {
  return Vl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Vl.apply(this, arguments);
}
var ed = function() {
};
function Hx(e) {
  var t = e.shape, r = t === void 0 ? "rect" : t, n = e.fill, i = n === void 0 ? ed : n, l = e.size, p = l === void 0 ? ed : l, u = e.width, d = e.height, f = e.label, g = e.item, v = e.itemIndex, y = e.shapeStyle, k = y === void 0 ? ed : y, T = {
    width: u,
    height: d,
    item: g,
    itemIndex: v,
    label: f,
    fill: i(Vl({}, f)),
    size: p(Vl({}, f)),
    style: k(Vl({}, f))
  };
  return typeof r == "string" ? r === "circle" ? /* @__PURE__ */ a.createElement(om, T) : r === "line" ? /* @__PURE__ */ a.createElement(lm, T) : /* @__PURE__ */ a.createElement(mf, T) : /* @__PURE__ */ a.isValidElement(r) ? /* @__PURE__ */ a.cloneElement(r, T) : r ? /* @__PURE__ */ a.createElement(r, T) : null;
}
function Pu() {
  return Pu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Pu.apply(this, arguments);
}
function sm(e) {
  var t = e.shape, r = t === void 0 ? mf : t, n = e.width, i = e.height, l = e.margin, p = e.label, u = e.item, d = e.itemIndex, f = e.fill, g = e.size, v = e.shapeStyle;
  return /* @__PURE__ */ a.createElement("div", {
    className: "visx-legend-shape",
    style: {
      display: "flex",
      width: g ? g(Pu({}, p)) : n,
      height: g ? g(Pu({}, p)) : i,
      margin: l
    }
  }, Hx({
    shape: r,
    item: u,
    itemIndex: d,
    label: p,
    width: n,
    height: i,
    fill: f,
    shapeStyle: v
  }));
}
sm.propTypes = {
  itemIndex: se.number.isRequired,
  margin: se.oneOfType([se.string, se.number]),
  width: se.oneOfType([se.string, se.number]),
  height: se.oneOfType([se.string, se.number])
};
function um(e) {
  return e && typeof e == "object" && "value" in e && typeof e.value < "u" ? e.value : e;
}
function Ph(e) {
  return String(um(e));
}
function Wx(e) {
  var t = e.scale, r = e.labelFormat;
  return function(n, i) {
    return {
      datum: n,
      index: i,
      text: "" + r(n, i),
      value: t(n)
    };
  };
}
var Vx = ["className", "style", "scale", "shape", "domain", "fill", "size", "labelFormat", "labelTransform", "shapeWidth", "shapeHeight", "shapeMargin", "shapeStyle", "labelAlign", "labelFlex", "labelMargin", "itemMargin", "direction", "itemDirection", "legendLabelProps", "children"];
function jl() {
  return jl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, jl.apply(this, arguments);
}
function jx(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, l;
  for (l = 0; l < n.length; l++)
    i = n[l], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Ux = {
  display: "flex"
};
function cm(e) {
  var t = e.className, r = e.style, n = r === void 0 ? Ux : r, i = e.scale, l = e.shape, p = e.domain, u = e.fill, d = u === void 0 ? Ph : u, f = e.size, g = f === void 0 ? Ph : f, v = e.labelFormat, y = v === void 0 ? um : v, k = e.labelTransform, T = k === void 0 ? Wx : k, M = e.shapeWidth, C = M === void 0 ? 15 : M, m = e.shapeHeight, D = m === void 0 ? 15 : m, O = e.shapeMargin, _ = O === void 0 ? "2px 4px 2px 0" : O, $ = e.shapeStyle, L = e.labelAlign, q = L === void 0 ? "left" : L, W = e.labelFlex, Y = W === void 0 ? "1" : W, J = e.labelMargin, le = J === void 0 ? "0 4px" : J, U = e.itemMargin, te = U === void 0 ? "0" : U, me = e.direction, K = me === void 0 ? "column" : me, ce = e.itemDirection, ue = ce === void 0 ? "row" : ce, he = e.legendLabelProps, ae = e.children, V = jx(e, Vx), ee = p || ("domain" in i ? i.domain() : []), ne = T({
    scale: i,
    labelFormat: y
  }), ke = ee.map(ne);
  return ae ? /* @__PURE__ */ a.createElement(a.Fragment, null, ae(ke)) : /* @__PURE__ */ a.createElement("div", {
    className: Sn("visx-legend", t),
    style: jl({}, n, {
      flexDirection: K
    })
  }, ke.map(function(xe, we) {
    return /* @__PURE__ */ a.createElement(Cu, jl({
      key: "legend-" + xe.text + "-" + we,
      margin: te,
      flexDirection: ue
    }, V), /* @__PURE__ */ a.createElement(sm, {
      shape: l,
      height: D,
      width: C,
      margin: _,
      item: ee[we],
      itemIndex: we,
      label: xe,
      fill: d,
      size: g,
      shapeStyle: $
    }), /* @__PURE__ */ a.createElement(Au, jl({
      label: xe.text,
      flex: Y,
      margin: le,
      align: q
    }, he)));
  }));
}
cm.propTypes = {
  children: se.func,
  className: se.string,
  domain: se.array,
  shapeWidth: se.oneOfType([se.string, se.number]),
  shapeHeight: se.oneOfType([se.string, se.number]),
  shapeMargin: se.oneOfType([se.string, se.number]),
  labelAlign: se.string,
  labelFlex: se.oneOfType([se.string, se.number]),
  labelMargin: se.oneOfType([se.string, se.number]),
  itemMargin: se.oneOfType([se.string, se.number]),
  fill: se.func,
  size: se.func,
  shapeStyle: se.func
};
function Kx(e) {
  return /* @__PURE__ */ a.createElement(cm, e);
}
function Yx(e) {
  let t = ["legend-container"], r = ["legend-container__inner"];
  return e.legend.position === "left" && t.push("left"), e.legend.position === "bottom" && (t.push("bottom"), r.push("bottom")), e.legend.position === "bottom" && e.legend.singleRow && r.push("single-row"), e.legend.reverseLabelOrder && (r.push("d-flex"), r.push("flex-column-reverse")), e.legend.position === "bottom" && e.legend.verticalSorted && r.push("vertical-sorted"), {
    containerClasses: t,
    innerClasses: r
  };
}
const Vu = (e, t) => {
  var M;
  const { formatDate: r, parseDate: n } = fe.useContext(lt);
  let i = [], l = "", p = [], u = [];
  ((M = e.series) == null ? void 0 : M.length) > 0 && e.data ? (i = e.series[0], l = e.series[0].dataKey, p = e.highlightedBarValues, u = e.data.map((C) => C[e.xAxis.dataKey])) : (i = [], l = "", p = [], u = []);
  const d = (C, m) => {
    const D = [...e.highlightedBarValues];
    D[m].borderWidth = C.target.value, t({
      ...e,
      highlightedBarValues: D
    });
  }, f = (C, m) => {
    C.preventDefault();
    const D = [...e.highlightedBarValues];
    D[m].value = C.target.value, D[m].dataKey = l, t({
      ...e,
      highlightedBarValues: D
    });
  }, g = (C, m) => {
    C.preventDefault();
    const D = [...e.highlightedBarValues];
    D.push({ dataKey: l }), t({
      ...e,
      highlightedBarValues: D
    });
  }, v = (C, m) => {
    C.preventDefault();
    const D = [...e.highlightedBarValues];
    D.splice(m, 1), t({
      ...e,
      highlightedBarValues: D
    });
  }, y = (C, m) => {
    const D = [...e.highlightedBarValues];
    D[m].color = C.target.value, t({
      ...e
    });
  }, k = (C, m) => {
    const D = [...e.highlightedBarValues];
    D[m].legendLabel = C.target.value, t({
      ...e,
      copyOfHighlightedBarValues: D
    });
  }, T = () => {
  };
  return T.checkFontColor = (C, m, D) => {
    if (e.xAxis.type === "date") {
      if (T.formatDates(m).includes(C))
        return "#000";
    } else if (m.includes(C))
      return "#000";
    return D;
  }, T.formatDates = (C) => C.map((m) => m ? r(n(m)) : !1), T.findDuplicates = (C) => {
    const m = {};
    return C == null ? void 0 : C.filter((O) => {
      const { legendLabel: _ } = O;
      return m[_] ? !1 : (m[_] = !0, !0);
    });
  }, {
    HighLightedBarUtils: T,
    highlightedSeries: i,
    highlightedSeriesKey: l,
    highlightedBarValues: p,
    highlightedSeriesValues: u,
    handleUpdateHighlightedBar: f,
    handleAddNewHighlightedBar: g,
    handleRemoveHighlightedBar: v,
    handleUpdateHighlightedBarColor: y,
    handleHighlightedBarLegendLabel: k,
    handleUpdateHighlightedBorderWidth: d
  };
}, Fd = (e) => {
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
}, dm = fe.forwardRef(({ config: e, colorScale: t, seriesHighlight: r, highlight: n, highlightReset: i, currentViewport: l, formatLabels: p, skipId: u = "legend" }, d) => {
  const { innerClasses: f, containerClasses: g } = Yx(e), { runtime: v, orientation: y, legend: k } = e;
  if (!k)
    return null;
  const T = k.position === "bottom" || ["sm", "xs", "xxs"].includes(l), M = {
    marginBottom: T ? "15px" : "0px",
    marginTop: T && y === "horizontal" ? `${e.yAxis.label && e.isResponsiveTicks ? e.dynamicMarginTop : e.runtime.xAxis.size}px` : `${T ? e.dynamicMarginTop + 15 : 0}px`
  }, { HighLightedBarUtils: C } = Vu(e);
  let m = C.findDuplicates(e.highlightedBarValues);
  const D = ["sm", "xs", "xxs"].includes(l) ? { fontSize: "11px" } : null;
  return /* @__PURE__ */ a.createElement("aside", { ref: d, style: M, id: u || "legend", className: g.join(" "), role: "region", "aria-label": "legend", tabIndex: 0 }, k.label && /* @__PURE__ */ a.createElement("h3", null, Ei(k.label)), k.description && /* @__PURE__ */ a.createElement("p", { style: D }, Ei(k.description)), /* @__PURE__ */ a.createElement(Kx, { scale: t, itemDirection: "row", labelMargin: "0 20px 0 0", shapeMargin: "0 10px 0" }, (O) => {
    var _, $;
    return /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("div", { className: f.join(" ") }, p(O).map((L, q) => {
      var J, le, U, te;
      let W = ["legend-item", `legend-text--${L.text.replace(" ", "").toLowerCase()}`], Y = L.datum;
      if (e.exclusions.active && ((J = e.exclusions.keys) != null && J.includes(Y)))
        return null;
      if (v.seriesLabels) {
        let me = e.runtime.seriesLabelsAll.indexOf(Y);
        Y = e.runtime.seriesKeys[me], ((le = v == null ? void 0 : v.forecastingSeriesKeys) == null ? void 0 : le.length) > 0 && (Y = L.text);
      }
      return r.length > 0 && r.includes(Y) === !1 && W.push("inactive"), /* @__PURE__ */ a.createElement(
        Cu,
        {
          className: W.join(" "),
          tabIndex: 0,
          key: `legend-quantile-${q}`,
          onKeyDown: (me) => {
            me.key === "Enter" && (me.preventDefault(), n(L));
          },
          onClick: (me) => {
            me.preventDefault(), n(L);
          },
          role: "button"
        },
        /* @__PURE__ */ a.createElement("div", null, e.visualizationType === "Line" && e.legend.lineMode ? /* @__PURE__ */ a.createElement("svg", { width: 40, height: 20 }, /* @__PURE__ */ a.createElement(Yt, { from: { x: 10, y: 10 }, to: { x: 40, y: 10 }, stroke: L.value, strokeWidth: 2, strokeDasharray: Fd((U = e.series[q]) != null && U.type ? (te = e.series[q]) == null ? void 0 : te.type : "") })) : /* @__PURE__ */ a.createElement("div", { style: { display: "flex", flexDirection: "column" } }, /* @__PURE__ */ a.createElement(Vf, { viewport: l, margin: "0", fill: L.value, display: !0 }))),
        /* @__PURE__ */ a.createElement(Au, { style: D, align: "left", margin: "0 0 0 4px" }, L.text)
      );
    }), m.map((L, q) => {
      let W = "legend-item", Y = L.legendLabel;
      return Y ? (r.length > 0 && r.includes(Y) === !1 && (W += " inactive"), /* @__PURE__ */ a.createElement(
        Cu,
        {
          className: W,
          tabIndex: 0,
          key: `legend-quantile-${q}`,
          onKeyDown: (J) => {
            J.key === "Enter" && (J.preventDefault(), n(L.legendLabel));
          },
          onClick: (J) => {
            J.preventDefault(), n(L.legendLabel);
          }
        },
        /* @__PURE__ */ a.createElement(Vf, { fill: "transparent", borderColor: L.color ? L.color : "rgba(255, 102, 1)" }),
        " ",
        /* @__PURE__ */ a.createElement(Au, { align: "left", margin: "0 0 0 4px" }, L.legendLabel ? L.legendLabel : L.value)
      )) : !1;
    })), /* @__PURE__ */ a.createElement(a.Fragment, null, ((_ = e == null ? void 0 : e.preliminaryData) == null ? void 0 : _.some((L) => L.label)) && ["Line", "Combo"].includes(e.visualizationType) && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("hr", null), /* @__PURE__ */ a.createElement("div", { className: e.legend.singleRow && T ? "legend-container__inner bottom single-row" : "" }, ($ = e == null ? void 0 : e.preliminaryData) == null ? void 0 : $.map((L, q) => /* @__PURE__ */ a.createElement(a.Fragment, null, L.label && /* @__PURE__ */ a.createElement("div", { key: q, className: "legend-preliminary" }, /* @__PURE__ */ a.createElement("svg", null, L.style.includes("Dashed") ? /* @__PURE__ */ a.createElement(Yt, { from: { x: 10, y: 10 }, to: { x: 40, y: 10 }, stroke: "#000", strokeWidth: 2, strokeDasharray: Fd(L.style) }) : /* @__PURE__ */ a.createElement("circle", { r: 6, strokeWidth: 2, stroke: "#000", cx: 22, cy: 10, fill: "transparent" })), /* @__PURE__ */ a.createElement("span", null, " ", L.label))))))));
  }), r.length > 0 && /* @__PURE__ */ a.createElement(qd, { onClick: (O) => i(O), style: { marginTop: "1rem" } }, "Reset"));
});
function gf(e) {
  return Nm({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" } }] })(e);
}
const fm = (e, t, r, n) => (i) => {
  var y, k, T, M, C;
  const { visualizationType: l, visualizationSubType: p, series: u, runtime: d } = e, f = (m) => e.legend.reverseLabelOrder && e.legend.position === "bottom" ? m.reverse() : m, g = (y = e.legend) == null ? void 0 : y.colorCode;
  if (l === "Deviation Bar") {
    const [m, D] = cu[e.twoColor.palette], O = {
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
    return f([O, _]);
  }
  if (l === "Bar" && p === "regular" && g && (u == null ? void 0 : u.length) === 1) {
    let m = ar[e.palette];
    for (; t.length > m.length; )
      m = m.concat(m);
    m = m.slice(0, r.length);
    const D = /* @__PURE__ */ new Set();
    t.forEach((_) => D.add(_[g]));
    const O = Array.from(D).map((_, $) => ({
      datum: _,
      index: $,
      text: _,
      value: m[$]
    }));
    return f(O);
  }
  if (((k = d == null ? void 0 : d.forecastingSeriesKeys) == null ? void 0 : k.length) > 0) {
    let m = [];
    return (M = (T = e.runtime) == null ? void 0 : T.forecastingSeriesKeys) == null || M.map((D, O) => {
      var _;
      return (_ = D == null ? void 0 : D.stages) == null ? void 0 : _.map(($, L) => {
        var Y, J, le, U;
        let q = (Y = du[$.color]) != null && Y[2] ? (J = du[$.color]) == null ? void 0 : J[2] : (le = ar[$.color]) != null && le[2] ? (U = ar[$.color]) == null ? void 0 : U[2] : "#ccc";
        const W = {
          datum: $.key,
          index: L,
          text: $.key,
          value: q
        };
        m.push(W);
      });
    }), e.runtime.barSeriesKeys && e.runtime.barSeriesKeys.forEach((D, O) => {
      let _ = ar[e.palette][O] ? ar[e.palette][O] : "#ccc";
      const $ = {
        datum: D,
        index: O,
        text: D,
        value: _
      };
      m.push($);
    }), f(m);
  }
  if (e.series.filter((m) => !!m.name).length > 0) {
    const m = /* @__PURE__ */ new Set();
    e.series.forEach((O) => {
      m.add(O.name || O.dataKey);
    });
    const D = Array.from(m).map((O, _) => ({
      datum: O,
      index: _,
      text: O,
      value: n(O)
    }));
    return f(D);
  }
  if ((e.visualizationType === "Bar" || e.visualizationType === "Combo") && e.visualizationSubType === "regular" && e.suppressedData) {
    const m = i.length - 1;
    let D = [];
    return (C = e.suppressedData) == null || C.forEach(({ label: O, icon: _ }, $) => {
      if (O && _) {
        const L = {
          datum: O,
          index: m + $,
          text: O,
          icon: /* @__PURE__ */ a.createElement(gf, { color: "#000", size: 15 })
        };
        D.push(L);
      }
    }), [...i, ...D];
  }
  return f(i);
}, Gs = ({ startAngle: e, endAngle: t }) => ({
  startAngle: e,
  endAngle: t
}), Xx = (e) => {
  const { transformedData: t, config: r, colorScale: n, currentViewport: i, dimensions: l, highlight: p, highlightReset: u, seriesHighlight: d } = fe.useContext(lt), { tooltipData: f, showTooltip: g, hideTooltip: v, tooltipOpen: y, tooltipLeft: k, tooltipTop: T } = em(), { handleTooltipMouseOver: M, handleTooltipMouseOff: C, TooltipListItem: m } = im({
    xScale: !1,
    yScale: !1,
    showTooltip: g,
    hideTooltip: v
  }), [D, O] = fe.useState(void 0), [_, $] = fe.useState(!1), L = Object.values(r.columns).filter((ee) => ee.showInViz), q = L.length > 0, W = q ? "pivotColumn" : void 0, Y = fe.useMemo(() => {
    if (q) {
      let ee = [];
      const ne = r.yAxis.dataKey, ke = L.map((ie) => ie.name), xe = [ne, ...ke], we = r.xAxis.dataKey;
      return t.forEach((ie) => {
        xe.forEach((Le) => {
          const Me = ie[Le];
          Me && ee.push({
            [W]: Me,
            [we]: `${ie[we]} - ${Le}`
          });
        });
      }), ee;
    }
    return t;
  }, [t, q]), J = fe.useMemo(() => {
    if (q) {
      const ee = {};
      Y.forEach((xe) => {
        ee[xe[r.xAxis.dataKey]] || (ee[xe[r.xAxis.dataKey]] = !0);
      });
      const ne = Object.entries(ee).length;
      let ke = r.customColors || ar[r.palette];
      return ke = ke.slice(0, ne), mp({
        domain: Object.keys(ee),
        range: ke,
        unknown: null
      });
    }
    return n;
  }, [n, q]), le = fe.useRef(), U = pf(le, {
    freezeOnceVisible: !1
  });
  fe.useEffect(() => {
    document.querySelector(".isEditor") && $((ne) => !0);
  }), fe.useEffect(() => {
    U != null && U.isIntersecting && r.animate && !_ && setTimeout(() => {
      $(!0);
    }, 500);
  }, [U == null ? void 0 : U.isIntersecting, r.animate]);
  const te = ({ arcs: ee, path: ne, getKey: ke }) => {
    const xe = wy(ee, ke, {
      from: Gs,
      enter: Gs,
      update: Gs,
      leave: Gs
    });
    return fe.useEffect(() => {
      const we = setTimeout(() => {
        v();
      }, 500);
      return () => {
        clearTimeout(we);
      };
    }, [f]), /* @__PURE__ */ a.createElement(a.Fragment, null, xe.map(({ item: we, props: ie, key: Le }, Me) => /* @__PURE__ */ a.createElement(Ke, { className: we.data[r.xAxis.dataKey], key: `${Le}-${Me}`, style: { opacity: r.legend.behavior === "highlight" && d.length > 0 && d.indexOf(we.data[r.runtime.xAxis.dataKey]) === -1 ? 0.5 : 1 } }, /* @__PURE__ */ a.createElement(
      vh.path,
      {
        d: xy(
          [ie.startAngle, ie.endAngle],
          (We, qe) => ne({
            ...we,
            startAngle: We,
            endAngle: qe
          })
        ),
        fill: J(we.data[r.runtime.xAxis.dataKey]),
        onMouseEnter: (We) => M(We, { data: we.data[r.runtime.xAxis.dataKey], arc: we }),
        onMouseLeave: (We) => C()
      }
    ))), xe.map(({ item: we, key: ie }, Le) => {
      const [Me, We] = ne.centroid(we), qe = we.endAngle - we.startAngle >= 0.1;
      let Ge = "#FFF";
      return J(we.data[r.runtime.xAxis.dataKey]) && (Ge = Mo(Ge, J(we.data[r.runtime.xAxis.dataKey]))), /* @__PURE__ */ a.createElement(vh.g, { key: `${ie}${Le}` }, qe && /* @__PURE__ */ a.createElement(it, { style: { fill: Ge }, x: Me, y: We, dy: ".33em", textAnchor: "middle", pointerEvents: "none" }, Math.round((we.endAngle - we.startAngle) * 180 / Math.PI / 360 * 100) + "%"));
    }));
  };
  let [me] = l;
  r && r.legend && !r.legend.hide && i === "lg" && (me = me * 0.73);
  const K = r.heights.vertical, ce = Math.min(me, K) / 2, ue = K / 2, he = me / 2, ae = r.pieType === "Donut" ? 75 : ce;
  fe.useEffect(() => {
    if (d.length > 0 && r.legend.behavior !== "highlight") {
      let ee = [];
      Y.forEach((ne) => {
        d.indexOf(ne[r.runtime.xAxis.dataKey]) !== -1 && ee.push(ne);
      }), O(ee);
    } else
      O(void 0);
  }, [d]);
  const V = fm(r, [], Y, J);
  return /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(Dr, { component: "PieChart" }, /* @__PURE__ */ a.createElement("svg", { width: me, height: K, className: `animated-pie group ${r.animate === !1 || _ ? "animated" : ""}`, role: "img", "aria-label": Od(r) }, /* @__PURE__ */ a.createElement(Ke, { top: ue, left: he }, /* @__PURE__ */ a.createElement(
    zv,
    {
      data: D || Y,
      pieValue: (ee) => ee[W || r.runtime.yAxis.dataKey],
      pieSortValues: () => -1,
      innerRadius: ce - ae,
      outerRadius: ce
    },
    (ee) => /* @__PURE__ */ a.createElement(te, { ...ee, getKey: (ne) => ne.data[r.runtime.xAxis.dataKey] })
  ))), /* @__PURE__ */ a.createElement("div", { ref: le }), f && Object.entries(f.data).length > 0 && y && g && f.dataYPosition && f.dataXPosition && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${r.tooltips.opacity / 100}) !important`), /* @__PURE__ */ a.createElement(am, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: k, top: T }, /* @__PURE__ */ a.createElement("ul", null, typeof f == "object" && Object.entries(f.data).map((ee, ne) => /* @__PURE__ */ a.createElement(m, { item: ee, key: ne })))))), /* @__PURE__ */ a.createElement(dm, { config: r, colorScale: J, seriesHighlight: d, highlight: p, highlightReset: u, currentViewport: i, formatLabels: V }));
};
function Rh(e, t) {
  let r;
  if (t === void 0)
    for (const n of e)
      n != null && (r < n || r === void 0 && n >= n) && (r = n);
  else {
    let n = -1;
    for (let i of e)
      (i = t(i, ++n, e)) != null && (r < i || r === void 0 && i >= i) && (r = i);
  }
  return r;
}
function qx(e, t) {
  let r;
  if (t === void 0)
    for (const n of e)
      n != null && (r > n || r === void 0 && n >= n) && (r = n);
  else {
    let n = -1;
    for (let i of e)
      (i = t(i, ++n, e)) != null && (r > i || r === void 0 && i >= i) && (r = i);
  }
  return r;
}
function td(e, t) {
  let r = 0;
  if (t === void 0)
    for (let n of e)
      (n = +n) && (r += n);
  else {
    let n = -1;
    for (let i of e)
      (i = +t(i, ++n, e)) && (r += i);
  }
  return r;
}
function Gx(e) {
  return e.depth;
}
function Zx(e, t) {
  return e.sourceLinks.length ? e.depth : t - 1;
}
function Zs(e) {
  return function() {
    return e;
  };
}
function Lh(e, t) {
  return Ru(e.source, t.source) || e.index - t.index;
}
function Dh(e, t) {
  return Ru(e.target, t.target) || e.index - t.index;
}
function Ru(e, t) {
  return e.y0 - t.y0;
}
function nd(e) {
  return e.value;
}
function Qx(e) {
  return e.index;
}
function Jx(e) {
  return e.nodes;
}
function eb(e) {
  return e.links;
}
function Oh(e, t) {
  const r = e.get(t);
  if (!r)
    throw new Error("missing: " + t);
  return r;
}
function Mh({ nodes: e }) {
  for (const t of e) {
    let r = t.y0, n = r;
    for (const i of t.sourceLinks)
      i.y0 = r + i.width / 2, r += i.width;
    for (const i of t.targetLinks)
      i.y1 = n + i.width / 2, n += i.width;
  }
}
function tb() {
  let e = 0, t = 0, r = 1, n = 1, i = 24, l = 8, p, u = Qx, d = Zx, f, g, v = Jx, y = eb, k = 6;
  function T() {
    const K = { nodes: v.apply(null, arguments), links: y.apply(null, arguments) };
    return M(K), C(K), m(K), D(K), $(K), Mh(K), K;
  }
  T.update = function(K) {
    return Mh(K), K;
  }, T.nodeId = function(K) {
    return arguments.length ? (u = typeof K == "function" ? K : Zs(K), T) : u;
  }, T.nodeAlign = function(K) {
    return arguments.length ? (d = typeof K == "function" ? K : Zs(K), T) : d;
  }, T.nodeSort = function(K) {
    return arguments.length ? (f = K, T) : f;
  }, T.nodeWidth = function(K) {
    return arguments.length ? (i = +K, T) : i;
  }, T.nodePadding = function(K) {
    return arguments.length ? (l = p = +K, T) : l;
  }, T.nodes = function(K) {
    return arguments.length ? (v = typeof K == "function" ? K : Zs(K), T) : v;
  }, T.links = function(K) {
    return arguments.length ? (y = typeof K == "function" ? K : Zs(K), T) : y;
  }, T.linkSort = function(K) {
    return arguments.length ? (g = K, T) : g;
  }, T.size = function(K) {
    return arguments.length ? (e = t = 0, r = +K[0], n = +K[1], T) : [r - e, n - t];
  }, T.extent = function(K) {
    return arguments.length ? (e = +K[0][0], r = +K[1][0], t = +K[0][1], n = +K[1][1], T) : [[e, t], [r, n]];
  }, T.iterations = function(K) {
    return arguments.length ? (k = +K, T) : k;
  };
  function M({ nodes: K, links: ce }) {
    for (const [he, ae] of K.entries())
      ae.index = he, ae.sourceLinks = [], ae.targetLinks = [];
    const ue = new Map(K.map((he, ae) => [u(he, ae, K), he]));
    for (const [he, ae] of ce.entries()) {
      ae.index = he;
      let { source: V, target: ee } = ae;
      typeof V != "object" && (V = ae.source = Oh(ue, V)), typeof ee != "object" && (ee = ae.target = Oh(ue, ee)), V.sourceLinks.push(ae), ee.targetLinks.push(ae);
    }
    if (g != null)
      for (const { sourceLinks: he, targetLinks: ae } of K)
        he.sort(g), ae.sort(g);
  }
  function C({ nodes: K }) {
    for (const ce of K)
      ce.value = ce.fixedValue === void 0 ? Math.max(td(ce.sourceLinks, nd), td(ce.targetLinks, nd)) : ce.fixedValue;
  }
  function m({ nodes: K }) {
    const ce = K.length;
    let ue = new Set(K), he = /* @__PURE__ */ new Set(), ae = 0;
    for (; ue.size; ) {
      for (const V of ue) {
        V.depth = ae;
        for (const { target: ee } of V.sourceLinks)
          he.add(ee);
      }
      if (++ae > ce)
        throw new Error("circular link");
      ue = he, he = /* @__PURE__ */ new Set();
    }
  }
  function D({ nodes: K }) {
    const ce = K.length;
    let ue = new Set(K), he = /* @__PURE__ */ new Set(), ae = 0;
    for (; ue.size; ) {
      for (const V of ue) {
        V.height = ae;
        for (const { source: ee } of V.targetLinks)
          he.add(ee);
      }
      if (++ae > ce)
        throw new Error("circular link");
      ue = he, he = /* @__PURE__ */ new Set();
    }
  }
  function O({ nodes: K }) {
    const ce = Rh(K, (ae) => ae.depth) + 1, ue = (r - e - i) / (ce - 1), he = new Array(ce);
    for (const ae of K) {
      const V = Math.max(0, Math.min(ce - 1, Math.floor(d.call(null, ae, ce))));
      ae.layer = V, ae.x0 = e + V * ue, ae.x1 = ae.x0 + i, he[V] ? he[V].push(ae) : he[V] = [ae];
    }
    if (f)
      for (const ae of he)
        ae.sort(f);
    return he;
  }
  function _(K) {
    const ce = qx(K, (ue) => (n - t - (ue.length - 1) * p) / td(ue, nd));
    for (const ue of K) {
      let he = t;
      for (const ae of ue) {
        ae.y0 = he, ae.y1 = he + ae.value * ce, he = ae.y1 + p;
        for (const V of ae.sourceLinks)
          V.width = V.value * ce;
      }
      he = (n - he + p) / (ue.length + 1);
      for (let ae = 0; ae < ue.length; ++ae) {
        const V = ue[ae];
        V.y0 += he * (ae + 1), V.y1 += he * (ae + 1);
      }
      U(ue);
    }
  }
  function $(K) {
    const ce = O(K);
    p = Math.min(l, (n - t) / (Rh(ce, (ue) => ue.length) - 1)), _(ce);
    for (let ue = 0; ue < k; ++ue) {
      const he = Math.pow(0.99, ue), ae = Math.max(1 - he, (ue + 1) / k);
      q(ce, he, ae), L(ce, he, ae);
    }
  }
  function L(K, ce, ue) {
    for (let he = 1, ae = K.length; he < ae; ++he) {
      const V = K[he];
      for (const ee of V) {
        let ne = 0, ke = 0;
        for (const { source: we, value: ie } of ee.targetLinks) {
          let Le = ie * (ee.layer - we.layer);
          ne += te(we, ee) * Le, ke += Le;
        }
        if (!(ke > 0))
          continue;
        let xe = (ne / ke - ee.y0) * ce;
        ee.y0 += xe, ee.y1 += xe, le(ee);
      }
      f === void 0 && V.sort(Ru), W(V, ue);
    }
  }
  function q(K, ce, ue) {
    for (let he = K.length, ae = he - 2; ae >= 0; --ae) {
      const V = K[ae];
      for (const ee of V) {
        let ne = 0, ke = 0;
        for (const { target: we, value: ie } of ee.sourceLinks) {
          let Le = ie * (we.layer - ee.layer);
          ne += me(ee, we) * Le, ke += Le;
        }
        if (!(ke > 0))
          continue;
        let xe = (ne / ke - ee.y0) * ce;
        ee.y0 += xe, ee.y1 += xe, le(ee);
      }
      f === void 0 && V.sort(Ru), W(V, ue);
    }
  }
  function W(K, ce) {
    const ue = K.length >> 1, he = K[ue];
    J(K, he.y0 - p, ue - 1, ce), Y(K, he.y1 + p, ue + 1, ce), J(K, n, K.length - 1, ce), Y(K, t, 0, ce);
  }
  function Y(K, ce, ue, he) {
    for (; ue < K.length; ++ue) {
      const ae = K[ue], V = (ce - ae.y0) * he;
      V > 1e-6 && (ae.y0 += V, ae.y1 += V), ce = ae.y1 + p;
    }
  }
  function J(K, ce, ue, he) {
    for (; ue >= 0; --ue) {
      const ae = K[ue], V = (ae.y1 - ce) * he;
      V > 1e-6 && (ae.y0 -= V, ae.y1 -= V), ce = ae.y0 - p;
    }
  }
  function le({ sourceLinks: K, targetLinks: ce }) {
    if (g === void 0) {
      for (const { source: { sourceLinks: ue } } of ce)
        ue.sort(Dh);
      for (const { target: { targetLinks: ue } } of K)
        ue.sort(Lh);
    }
  }
  function U(K) {
    if (g === void 0)
      for (const { sourceLinks: ce, targetLinks: ue } of K)
        ce.sort(Dh), ue.sort(Lh);
  }
  function te(K, ce) {
    let ue = K.y0 - (K.sourceLinks.length - 1) * p / 2;
    for (const { target: he, width: ae } of K.sourceLinks) {
      if (he === ce)
        break;
      ue += ae + p;
    }
    for (const { source: he, width: ae } of ce.targetLinks) {
      if (he === K)
        break;
      ue -= ae;
    }
    return ue;
  }
  function me(K, ce) {
    let ue = ce.y0 - (ce.targetLinks.length - 1) * p / 2;
    for (const { source: he, width: ae } of ce.targetLinks) {
      if (he === K)
        break;
      ue += ae + p;
    }
    for (const { target: he, width: ae } of K.sourceLinks) {
      if (he === ce)
        break;
      ue -= ae;
    }
    return ue;
  }
  return T;
}
function nb(e) {
  return [e.source.x1, e.y0];
}
function rb(e) {
  return [e.target.x0, e.y1];
}
function ab() {
  return ov().source(nb).target(rb);
}
var _a = {}, vi = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _h;
function ib() {
  if (_h)
    return vi;
  _h = 1;
  var e = fe;
  function t(x) {
    for (var A = "https://reactjs.org/docs/error-decoder.html?invariant=" + x, z = 1; z < arguments.length; z++)
      A += "&args[]=" + encodeURIComponent(arguments[z]);
    return "Minified React error #" + x + "; visit " + A + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, n = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, i = {}, l = {};
  function p(x) {
    return r.call(l, x) ? !0 : r.call(i, x) ? !1 : n.test(x) ? l[x] = !0 : (i[x] = !0, !1);
  }
  function u(x, A, z, X, ye, B, I) {
    this.acceptsBooleans = A === 2 || A === 3 || A === 4, this.attributeName = X, this.attributeNamespace = ye, this.mustUseProperty = z, this.propertyName = x, this.type = A, this.sanitizeURL = B, this.removeEmptyString = I;
  }
  var d = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(x) {
    d[x] = new u(x, 0, !1, x, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(x) {
    var A = x[0];
    d[A] = new u(A, 1, !1, x[1], null, !1, !1);
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
    var A = x.replace(
      f,
      g
    );
    d[A] = new u(A, 1, !1, x, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(x) {
    var A = x.replace(f, g);
    d[A] = new u(A, 1, !1, x, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(x) {
    var A = x.replace(f, g);
    d[A] = new u(A, 1, !1, x, "http://www.w3.org/XML/1998/namespace", !1, !1);
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
    y.forEach(function(A) {
      A = A + x.charAt(0).toUpperCase() + x.substring(1), v[A] = v[x];
    });
  });
  var k = /["'&<>]/;
  function T(x) {
    if (typeof x == "boolean" || typeof x == "number")
      return "" + x;
    x = "" + x;
    var A = k.exec(x);
    if (A) {
      var z = "", X, ye = 0;
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
        ye !== X && (z += x.substring(ye, X)), ye = X + 1, z += A;
      }
      x = ye !== X ? z + x.substring(ye, X) : z;
    }
    return x;
  }
  var M = /([A-Z])/g, C = /^ms-/, m = Array.isArray;
  function D(x, A) {
    return { insertionMode: x, selectedValue: A };
  }
  function O(x, A, z) {
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
  function $(x, A, z) {
    if (typeof z != "object")
      throw Error(t(62));
    A = !0;
    for (var X in z)
      if (r.call(z, X)) {
        var ye = z[X];
        if (ye != null && typeof ye != "boolean" && ye !== "") {
          if (X.indexOf("--") === 0) {
            var B = T(X);
            ye = T(("" + ye).trim());
          } else {
            B = X;
            var I = _.get(B);
            I !== void 0 || (I = T(B.replace(M, "-$1").toLowerCase().replace(C, "-ms-")), _.set(B, I)), B = I, ye = typeof ye == "number" ? ye === 0 || r.call(v, X) ? "" + ye : ye + "px" : T(("" + ye).trim());
          }
          A ? (A = !1, x.push(' style="', B, ":", ye)) : x.push(";", B, ":", ye);
        }
      }
    A || x.push('"');
  }
  function L(x, A, z, X) {
    switch (z) {
      case "style":
        $(x, A, X);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < z.length) || z[0] !== "o" && z[0] !== "O" || z[1] !== "n" && z[1] !== "N") {
      if (A = d.hasOwnProperty(z) ? d[z] : null, A !== null) {
        switch (typeof X) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!A.acceptsBooleans)
              return;
        }
        switch (z = A.attributeName, A.type) {
          case 3:
            X && x.push(" ", z, '=""');
            break;
          case 4:
            X === !0 ? x.push(" ", z, '=""') : X !== !1 && x.push(" ", z, '="', T(X), '"');
            break;
          case 5:
            isNaN(X) || x.push(" ", z, '="', T(X), '"');
            break;
          case 6:
            !isNaN(X) && 1 <= X && x.push(" ", z, '="', T(X), '"');
            break;
          default:
            A.sanitizeURL && (X = "" + X), x.push(" ", z, '="', T(X), '"');
        }
      } else if (p(z)) {
        switch (typeof X) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (A = z.toLowerCase().slice(0, 5), A !== "data-" && A !== "aria-")
              return;
        }
        x.push(" ", z, '="', T(X), '"');
      }
    }
  }
  function q(x, A, z) {
    if (A != null) {
      if (z != null)
        throw Error(t(60));
      if (typeof A != "object" || !("__html" in A))
        throw Error(t(61));
      A = A.__html, A != null && x.push("" + A);
    }
  }
  function W(x) {
    var A = "";
    return e.Children.forEach(x, function(z) {
      z != null && (A += z);
    }), A;
  }
  function Y(x, A, z, X) {
    x.push(U(z));
    var ye = z = null, B;
    for (B in A)
      if (r.call(A, B)) {
        var I = A[B];
        if (I != null)
          switch (B) {
            case "children":
              z = I;
              break;
            case "dangerouslySetInnerHTML":
              ye = I;
              break;
            default:
              L(x, X, B, I);
          }
      }
    return x.push(">"), q(x, ye, z), typeof z == "string" ? (x.push(T(z)), null) : z;
  }
  var J = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, le = /* @__PURE__ */ new Map();
  function U(x) {
    var A = le.get(x);
    if (A === void 0) {
      if (!J.test(x))
        throw Error(t(65, x));
      A = "<" + x, le.set(x, A);
    }
    return A;
  }
  function te(x, A, z, X, ye) {
    switch (A) {
      case "select":
        x.push(U("select"));
        var B = null, I = null;
        for (je in z)
          if (r.call(z, je)) {
            var Q = z[je];
            if (Q != null)
              switch (je) {
                case "children":
                  B = Q;
                  break;
                case "dangerouslySetInnerHTML":
                  I = Q;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  L(x, X, je, Q);
              }
          }
        return x.push(">"), q(x, I, B), B;
      case "option":
        I = ye.selectedValue, x.push(U("option"));
        var pe = Q = null, Be = null, je = null;
        for (B in z)
          if (r.call(z, B)) {
            var gt = z[B];
            if (gt != null)
              switch (B) {
                case "children":
                  Q = gt;
                  break;
                case "selected":
                  Be = gt;
                  break;
                case "dangerouslySetInnerHTML":
                  je = gt;
                  break;
                case "value":
                  pe = gt;
                default:
                  L(x, X, B, gt);
              }
          }
        if (I != null)
          if (z = pe !== null ? "" + pe : W(Q), m(I)) {
            for (X = 0; X < I.length; X++)
              if ("" + I[X] === z) {
                x.push(' selected=""');
                break;
              }
          } else
            "" + I === z && x.push(' selected=""');
        else
          Be && x.push(' selected=""');
        return x.push(">"), q(x, je, Q), Q;
      case "textarea":
        x.push(U("textarea")), je = I = B = null;
        for (Q in z)
          if (r.call(z, Q) && (pe = z[Q], pe != null))
            switch (Q) {
              case "children":
                je = pe;
                break;
              case "value":
                B = pe;
                break;
              case "defaultValue":
                I = pe;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(91));
              default:
                L(
                  x,
                  X,
                  Q,
                  pe
                );
            }
        if (B === null && I !== null && (B = I), x.push(">"), je != null) {
          if (B != null)
            throw Error(t(92));
          if (m(je) && 1 < je.length)
            throw Error(t(93));
          B = "" + je;
        }
        return typeof B == "string" && B[0] === `
` && x.push(`
`), B !== null && x.push(T("" + B)), null;
      case "input":
        x.push(U("input")), pe = je = Q = B = null;
        for (I in z)
          if (r.call(z, I) && (Be = z[I], Be != null))
            switch (I) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, "input"));
              case "defaultChecked":
                pe = Be;
                break;
              case "defaultValue":
                Q = Be;
                break;
              case "checked":
                je = Be;
                break;
              case "value":
                B = Be;
                break;
              default:
                L(x, X, I, Be);
            }
        return je !== null ? L(x, X, "checked", je) : pe !== null && L(x, X, "checked", pe), B !== null ? L(x, X, "value", B) : Q !== null && L(x, X, "value", Q), x.push("/>"), null;
      case "menuitem":
        x.push(U("menuitem"));
        for (var kn in z)
          if (r.call(z, kn) && (B = z[kn], B != null))
            switch (kn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(400));
              default:
                L(x, X, kn, B);
            }
        return x.push(">"), null;
      case "title":
        x.push(U("title")), B = null;
        for (gt in z)
          if (r.call(z, gt) && (I = z[gt], I != null))
            switch (gt) {
              case "children":
                B = I;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(434));
              default:
                L(x, X, gt, I);
            }
        return x.push(">"), B;
      case "listing":
      case "pre":
        x.push(U(A)), I = B = null;
        for (pe in z)
          if (r.call(z, pe) && (Q = z[pe], Q != null))
            switch (pe) {
              case "children":
                B = Q;
                break;
              case "dangerouslySetInnerHTML":
                I = Q;
                break;
              default:
                L(x, X, pe, Q);
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
        x.push(U(A));
        for (var ln in z)
          if (r.call(z, ln) && (B = z[ln], B != null))
            switch (ln) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, A));
              default:
                L(x, X, ln, B);
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
          X
        );
      case "html":
        return ye.insertionMode === 0 && x.push("<!DOCTYPE html>"), Y(x, z, A, X);
      default:
        if (A.indexOf("-") === -1 && typeof z.is != "string")
          return Y(x, z, A, X);
        x.push(U(A)), I = B = null;
        for (Be in z)
          if (r.call(z, Be) && (Q = z[Be], Q != null))
            switch (Be) {
              case "children":
                B = Q;
                break;
              case "dangerouslySetInnerHTML":
                I = Q;
                break;
              case "style":
                $(x, X, Q);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                p(Be) && typeof Q != "function" && typeof Q != "symbol" && x.push(" ", Be, '="', T(Q), '"');
            }
        return x.push(">"), q(x, I, B), B;
    }
  }
  function me(x, A, z) {
    if (x.push('<!--$?--><template id="'), z === null)
      throw Error(t(395));
    return x.push(z), x.push('"></template>');
  }
  function K(x, A, z, X) {
    switch (z.insertionMode) {
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
  function ce(x, A) {
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
  function he(x) {
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
  function V(x, A, z, X) {
    return z.generateStaticMarkup ? (x.push(T(A)), !1) : (A === "" ? x = X : (X && x.push("<!-- -->"), x.push(T(A)), x = !0), x);
  }
  var ee = Object.assign, ne = Symbol.for("react.element"), ke = Symbol.for("react.portal"), xe = Symbol.for("react.fragment"), we = Symbol.for("react.strict_mode"), ie = Symbol.for("react.profiler"), Le = Symbol.for("react.provider"), Me = Symbol.for("react.context"), We = Symbol.for("react.forward_ref"), qe = Symbol.for("react.suspense"), Ge = Symbol.for("react.suspense_list"), De = Symbol.for("react.memo"), _e = Symbol.for("react.lazy"), $e = Symbol.for("react.scope"), Ze = Symbol.for("react.debug_trace_mode"), Et = Symbol.for("react.legacy_hidden"), vt = Symbol.for("react.default_value"), Ct = Symbol.iterator;
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
      case ke:
        return "Portal";
      case ie:
        return "Profiler";
      case we:
        return "StrictMode";
      case qe:
        return "Suspense";
      case Ge:
        return "SuspenseList";
    }
    if (typeof x == "object")
      switch (x.$$typeof) {
        case Me:
          return (x.displayName || "Context") + ".Consumer";
        case Le:
          return (x._context.displayName || "Context") + ".Provider";
        case We:
          var A = x.render;
          return x = x.displayName, x || (x = A.displayName || A.name || "", x = x !== "" ? "ForwardRef(" + x + ")" : "ForwardRef"), x;
        case De:
          return A = x.displayName || null, A !== null ? A : Je(x.type) || "Memo";
        case _e:
          A = x._payload, x = x._init;
          try {
            return Je(x(A));
          } catch {
          }
      }
    return null;
  }
  var Vt = {};
  function qt(x, A) {
    if (x = x.contextTypes, !x)
      return Vt;
    var z = {}, X;
    for (X in x)
      z[X] = A[X];
    return z;
  }
  var zt = null;
  function bt(x, A) {
    if (x !== A) {
      x.context._currentValue2 = x.parentValue, x = x.parent;
      var z = A.parent;
      if (x === null) {
        if (z !== null)
          throw Error(t(401));
      } else {
        if (z === null)
          throw Error(t(401));
        bt(x, z);
      }
      A.context._currentValue2 = A.value;
    }
  }
  function St(x) {
    x.context._currentValue2 = x.parentValue, x = x.parent, x !== null && St(x);
  }
  function Jt(x) {
    var A = x.parent;
    A !== null && Jt(A), x.context._currentValue2 = x.value;
  }
  function ft(x, A) {
    if (x.context._currentValue2 = x.parentValue, x = x.parent, x === null)
      throw Error(t(402));
    x.depth === A.depth ? bt(x, A) : ft(x, A);
  }
  function Ot(x, A) {
    var z = A.parent;
    if (z === null)
      throw Error(t(402));
    x.depth === z.depth ? bt(x, z) : Ot(x, z), A.context._currentValue2 = A.value;
  }
  function wt(x) {
    var A = zt;
    A !== x && (A === null ? Jt(x) : x === null ? St(A) : A.depth === x.depth ? bt(A, x) : A.depth > x.depth ? ft(A, x) : Ot(A, x), zt = x);
  }
  var un = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(x, A) {
    x = x._reactInternals, x.queue !== null && x.queue.push(A);
  }, enqueueReplaceState: function(x, A) {
    x = x._reactInternals, x.replace = !0, x.queue = [A];
  }, enqueueForceUpdate: function() {
  } };
  function Mn(x, A, z, X) {
    var ye = x.state !== void 0 ? x.state : null;
    x.updater = un, x.props = z, x.state = ye;
    var B = { queue: [], replace: !1 };
    x._reactInternals = B;
    var I = A.contextType;
    if (x.context = typeof I == "object" && I !== null ? I._currentValue2 : X, I = A.getDerivedStateFromProps, typeof I == "function" && (I = I(z, ye), ye = I == null ? ye : ee({}, ye, I), x.state = ye), typeof A.getDerivedStateFromProps != "function" && typeof x.getSnapshotBeforeUpdate != "function" && (typeof x.UNSAFE_componentWillMount == "function" || typeof x.componentWillMount == "function"))
      if (A = x.state, typeof x.componentWillMount == "function" && x.componentWillMount(), typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount(), A !== x.state && un.enqueueReplaceState(x, x.state, null), B.queue !== null && 0 < B.queue.length)
        if (A = B.queue, I = B.replace, B.queue = null, B.replace = !1, I && A.length === 1)
          x.state = A[0];
        else {
          for (B = I ? A[0] : x.state, ye = !0, I = I ? 1 : 0; I < A.length; I++) {
            var Q = A[I];
            Q = typeof Q == "function" ? Q.call(x, B, z, X) : Q, Q != null && (ye ? (ye = !1, B = ee({}, B, Q)) : ee(B, Q));
          }
          x.state = B;
        }
      else
        B.queue = null;
  }
  var _n = { id: 1, overflow: "" };
  function jt(x, A, z) {
    var X = x.id;
    x = x.overflow;
    var ye = 32 - Gt(X) - 1;
    X &= ~(1 << ye), z += 1;
    var B = 32 - Gt(A) + ye;
    if (30 < B) {
      var I = ye - ye % 5;
      return B = (X & (1 << I) - 1).toString(32), X >>= I, ye -= I, { id: 1 << 32 - Gt(A) + ye | z << ye | X, overflow: B + x };
    }
    return { id: 1 << B | z << ye | X, overflow: x };
  }
  var Gt = Math.clz32 ? Math.clz32 : dn, Mt = Math.log, cn = Math.LN2;
  function dn(x) {
    return x >>>= 0, x === 0 ? 32 : 31 - (Mt(x) / cn | 0) | 0;
  }
  function Ae(x, A) {
    return x === A && (x !== 0 || 1 / x === 1 / A) || x !== x && A !== A;
  }
  var mt = typeof Object.is == "function" ? Object.is : Ae, Ut = null, _t = null, vn = null, st = null, fn = !1, xt = !1, Bt = 0, pn = null, En = 0;
  function Ee() {
    if (Ut === null)
      throw Error(t(321));
    return Ut;
  }
  function Fe() {
    if (0 < En)
      throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function ot() {
    return st === null ? vn === null ? (fn = !1, vn = st = Fe()) : (fn = !0, st = vn) : st.next === null ? (fn = !1, st = st.next = Fe()) : (fn = !0, st = st.next), st;
  }
  function Ve() {
    _t = Ut = null, xt = !1, vn = null, En = 0, st = pn = null;
  }
  function en(x, A) {
    return typeof A == "function" ? A(x) : A;
  }
  function ut(x, A, z) {
    if (Ut = Ee(), st = ot(), fn) {
      var X = st.queue;
      if (A = X.dispatch, pn !== null && (z = pn.get(X), z !== void 0)) {
        pn.delete(X), X = st.memoizedState;
        do
          X = x(X, z.action), z = z.next;
        while (z !== null);
        return st.memoizedState = X, [X, A];
      }
      return [st.memoizedState, A];
    }
    return x = x === en ? typeof A == "function" ? A() : A : z !== void 0 ? z(A) : A, st.memoizedState = x, x = st.queue = { last: null, dispatch: null }, x = x.dispatch = Nn.bind(null, Ut, x), [st.memoizedState, x];
  }
  function xn(x, A) {
    if (Ut = Ee(), st = ot(), A = A === void 0 ? null : A, st !== null) {
      var z = st.memoizedState;
      if (z !== null && A !== null) {
        var X = z[1];
        e:
          if (X === null)
            X = !1;
          else {
            for (var ye = 0; ye < X.length && ye < A.length; ye++)
              if (!mt(A[ye], X[ye])) {
                X = !1;
                break e;
              }
            X = !0;
          }
        if (X)
          return z[0];
      }
    }
    return x = x(), st.memoizedState = [x, A], x;
  }
  function Nn(x, A, z) {
    if (25 <= En)
      throw Error(t(301));
    if (x === Ut)
      if (xt = !0, x = { action: z, next: null }, pn === null && (pn = /* @__PURE__ */ new Map()), z = pn.get(A), z === void 0)
        pn.set(A, x);
      else {
        for (A = z; A.next !== null; )
          A = A.next;
        A.next = x;
      }
  }
  function j() {
    throw Error(t(394));
  }
  function Pe() {
  }
  var Ie = { readContext: function(x) {
    return x._currentValue2;
  }, useContext: function(x) {
    return Ee(), x._currentValue2;
  }, useMemo: xn, useReducer: ut, useRef: function(x) {
    Ut = Ee(), st = ot();
    var A = st.memoizedState;
    return A === null ? (x = { current: x }, st.memoizedState = x) : A;
  }, useState: function(x) {
    return ut(en, x);
  }, useInsertionEffect: Pe, useLayoutEffect: function() {
  }, useCallback: function(x, A) {
    return xn(function() {
      return x;
    }, A);
  }, useImperativeHandle: Pe, useEffect: Pe, useDebugValue: Pe, useDeferredValue: function(x) {
    return Ee(), x;
  }, useTransition: function() {
    return Ee(), [
      !1,
      j
    ];
  }, useId: function() {
    var x = _t.treeContext, A = x.overflow;
    x = x.id, x = (x & ~(1 << 32 - Gt(x) - 1)).toString(32) + A;
    var z = Oe;
    if (z === null)
      throw Error(t(404));
    return A = Bt++, x = ":" + z.idPrefix + "R" + x, 0 < A && (x += "H" + A.toString(32)), x + ":";
  }, useMutableSource: function(x, A) {
    return Ee(), A(x._source);
  }, useSyncExternalStore: function(x, A, z) {
    if (z === void 0)
      throw Error(t(407));
    return z();
  } }, Oe = null, nt = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Ye(x) {
    return console.error(x), null;
  }
  function rt() {
  }
  function Qe(x, A, z, X, ye, B, I, Q, pe) {
    var Be = [], je = /* @__PURE__ */ new Set();
    return A = { destination: null, responseState: A, progressiveChunkSize: X === void 0 ? 12800 : X, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: je, pingedTasks: Be, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: ye === void 0 ? Ye : ye, onAllReady: B === void 0 ? rt : B, onShellReady: I === void 0 ? rt : I, onShellError: Q === void 0 ? rt : Q, onFatalError: pe === void 0 ? rt : pe }, z = Nt(A, 0, null, z, !1, !1), z.parentFlushed = !0, x = ze(A, x, null, z, je, Vt, null, _n), Be.push(x), A;
  }
  function ze(x, A, z, X, ye, B, I, Q) {
    x.allPendingTasks++, z === null ? x.pendingRootTasks++ : z.pendingTasks++;
    var pe = { node: A, ping: function() {
      var Be = x.pingedTasks;
      Be.push(pe), Be.length === 1 && Ht(x);
    }, blockedBoundary: z, blockedSegment: X, abortSet: ye, legacyContext: B, context: I, treeContext: Q };
    return ye.add(pe), pe;
  }
  function Nt(x, A, z, X, ye, B) {
    return { status: 0, id: -1, index: A, parentFlushed: !1, chunks: [], children: [], formatContext: X, boundary: z, lastPushedText: ye, textEmbedded: B };
  }
  function $t(x, A) {
    if (x = x.onError(A), x != null && typeof x != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof x + '" instead');
    return x;
  }
  function Zt(x, A) {
    var z = x.onShellError;
    z(A), z = x.onFatalError, z(A), x.destination !== null ? (x.status = 2, x.destination.destroy(A)) : (x.status = 1, x.fatalError = A);
  }
  function It(x, A, z, X, ye) {
    for (Ut = {}, _t = A, Bt = 0, x = z(X, ye); xt; )
      xt = !1, Bt = 0, En += 1, st = null, x = z(X, ye);
    return Ve(), x;
  }
  function Lt(x, A, z, X) {
    var ye = z.render(), B = X.childContextTypes;
    if (B != null) {
      var I = A.legacyContext;
      if (typeof z.getChildContext != "function")
        X = I;
      else {
        z = z.getChildContext();
        for (var Q in z)
          if (!(Q in B))
            throw Error(t(108, Je(X) || "Unknown", Q));
        X = ee({}, I, z);
      }
      A.legacyContext = X, ht(x, A, ye), A.legacyContext = I;
    } else
      ht(x, A, ye);
  }
  function kt(x, A) {
    if (x && x.defaultProps) {
      A = ee({}, A), x = x.defaultProps;
      for (var z in x)
        A[z] === void 0 && (A[z] = x[z]);
      return A;
    }
    return A;
  }
  function Tt(x, A, z, X, ye) {
    if (typeof z == "function")
      if (z.prototype && z.prototype.isReactComponent) {
        ye = qt(z, A.legacyContext);
        var B = z.contextType;
        B = new z(X, typeof B == "object" && B !== null ? B._currentValue2 : ye), Mn(B, z, X, ye), Lt(x, A, B, z);
      } else {
        B = qt(z, A.legacyContext), ye = It(x, A, z, X, B);
        var I = Bt !== 0;
        if (typeof ye == "object" && ye !== null && typeof ye.render == "function" && ye.$$typeof === void 0)
          Mn(ye, z, X, B), Lt(x, A, ye, z);
        else if (I) {
          X = A.treeContext, A.treeContext = jt(X, 1, 0);
          try {
            ht(x, A, ye);
          } finally {
            A.treeContext = X;
          }
        } else
          ht(x, A, ye);
      }
    else if (typeof z == "string") {
      switch (ye = A.blockedSegment, B = te(ye.chunks, z, X, x.responseState, ye.formatContext), ye.lastPushedText = !1, I = ye.formatContext, ye.formatContext = O(I, z, X), mn(x, A, B), ye.formatContext = I, z) {
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
          ye.chunks.push("</", z, ">");
      }
      ye.lastPushedText = !1;
    } else {
      switch (z) {
        case Et:
        case Ze:
        case we:
        case ie:
        case xe:
          ht(x, A, X.children);
          return;
        case Ge:
          ht(x, A, X.children);
          return;
        case $e:
          throw Error(t(343));
        case qe:
          e: {
            z = A.blockedBoundary, ye = A.blockedSegment, B = X.fallback, X = X.children, I = /* @__PURE__ */ new Set();
            var Q = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: I, errorDigest: null }, pe = Nt(x, ye.chunks.length, Q, ye.formatContext, !1, !1);
            ye.children.push(pe), ye.lastPushedText = !1;
            var Be = Nt(x, 0, null, ye.formatContext, !1, !1);
            Be.parentFlushed = !0, A.blockedBoundary = Q, A.blockedSegment = Be;
            try {
              if (mn(
                x,
                A,
                X
              ), x.responseState.generateStaticMarkup || Be.lastPushedText && Be.textEmbedded && Be.chunks.push("<!-- -->"), Be.status = 1, on(Q, Be), Q.pendingTasks === 0)
                break e;
            } catch (je) {
              Be.status = 4, Q.forceClientRender = !0, Q.errorDigest = $t(x, je);
            } finally {
              A.blockedBoundary = z, A.blockedSegment = ye;
            }
            A = ze(x, B, z, pe, I, A.legacyContext, A.context, A.treeContext), x.pingedTasks.push(A);
          }
          return;
      }
      if (typeof z == "object" && z !== null)
        switch (z.$$typeof) {
          case We:
            if (X = It(x, A, z.render, X, ye), Bt !== 0) {
              z = A.treeContext, A.treeContext = jt(z, 1, 0);
              try {
                ht(x, A, X);
              } finally {
                A.treeContext = z;
              }
            } else
              ht(x, A, X);
            return;
          case De:
            z = z.type, X = kt(z, X), Tt(x, A, z, X, ye);
            return;
          case Le:
            if (ye = X.children, z = z._context, X = X.value, B = z._currentValue2, z._currentValue2 = X, I = zt, zt = X = { parent: I, depth: I === null ? 0 : I.depth + 1, context: z, parentValue: B, value: X }, A.context = X, ht(x, A, ye), x = zt, x === null)
              throw Error(t(403));
            X = x.parentValue, x.context._currentValue2 = X === vt ? x.context._defaultValue : X, x = zt = x.parent, A.context = x;
            return;
          case Me:
            X = X.children, X = X(z._currentValue2), ht(x, A, X);
            return;
          case _e:
            ye = z._init, z = ye(z._payload), X = kt(z, X), Tt(
              x,
              A,
              z,
              X,
              void 0
            );
            return;
        }
      throw Error(t(130, z == null ? z : typeof z, ""));
    }
  }
  function ht(x, A, z) {
    if (A.node = z, typeof z == "object" && z !== null) {
      switch (z.$$typeof) {
        case ne:
          Tt(x, A, z.type, z.props, z.ref);
          return;
        case ke:
          throw Error(t(257));
        case _e:
          var X = z._init;
          z = X(z._payload), ht(x, A, z);
          return;
      }
      if (m(z)) {
        rn(x, A, z);
        return;
      }
      if (z === null || typeof z != "object" ? X = null : (X = Ct && z[Ct] || z["@@iterator"], X = typeof X == "function" ? X : null), X && (X = X.call(z))) {
        if (z = X.next(), !z.done) {
          var ye = [];
          do
            ye.push(z.value), z = X.next();
          while (!z.done);
          rn(x, A, ye);
        }
        return;
      }
      throw x = Object.prototype.toString.call(z), Error(t(31, x === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : x));
    }
    typeof z == "string" ? (X = A.blockedSegment, X.lastPushedText = V(A.blockedSegment.chunks, z, x.responseState, X.lastPushedText)) : typeof z == "number" && (X = A.blockedSegment, X.lastPushedText = V(A.blockedSegment.chunks, "" + z, x.responseState, X.lastPushedText));
  }
  function rn(x, A, z) {
    for (var X = z.length, ye = 0; ye < X; ye++) {
      var B = A.treeContext;
      A.treeContext = jt(B, X, ye);
      try {
        mn(x, A, z[ye]);
      } finally {
        A.treeContext = B;
      }
    }
  }
  function mn(x, A, z) {
    var X = A.blockedSegment.formatContext, ye = A.legacyContext, B = A.context;
    try {
      return ht(x, A, z);
    } catch (pe) {
      if (Ve(), typeof pe == "object" && pe !== null && typeof pe.then == "function") {
        z = pe;
        var I = A.blockedSegment, Q = Nt(x, I.chunks.length, null, I.formatContext, I.lastPushedText, !0);
        I.children.push(Q), I.lastPushedText = !1, x = ze(x, A.node, A.blockedBoundary, Q, A.abortSet, A.legacyContext, A.context, A.treeContext).ping, z.then(x, x), A.blockedSegment.formatContext = X, A.legacyContext = ye, A.context = B, wt(B);
      } else
        throw A.blockedSegment.formatContext = X, A.legacyContext = ye, A.context = B, wt(B), pe;
    }
  }
  function Rt(x) {
    var A = x.blockedBoundary;
    x = x.blockedSegment, x.status = 3, Ft(this, A, x);
  }
  function gn(x, A, z) {
    var X = x.blockedBoundary;
    x.blockedSegment.status = 3, X === null ? (A.allPendingTasks--, A.status !== 2 && (A.status = 2, A.destination !== null && A.destination.push(null))) : (X.pendingTasks--, X.forceClientRender || (X.forceClientRender = !0, x = z === void 0 ? Error(t(432)) : z, X.errorDigest = A.onError(x), X.parentFlushed && A.clientRenderedBoundaries.push(X)), X.fallbackAbortableTasks.forEach(function(ye) {
      return gn(ye, A, z);
    }), X.fallbackAbortableTasks.clear(), A.allPendingTasks--, A.allPendingTasks === 0 && (X = A.onAllReady, X()));
  }
  function on(x, A) {
    if (A.chunks.length === 0 && A.children.length === 1 && A.children[0].boundary === null) {
      var z = A.children[0];
      z.id = A.id, z.parentFlushed = !0, z.status === 1 && on(x, z);
    } else
      x.completedSegments.push(A);
  }
  function Ft(x, A, z) {
    if (A === null) {
      if (z.parentFlushed) {
        if (x.completedRootSegment !== null)
          throw Error(t(389));
        x.completedRootSegment = z;
      }
      x.pendingRootTasks--, x.pendingRootTasks === 0 && (x.onShellError = rt, A = x.onShellReady, A());
    } else
      A.pendingTasks--, A.forceClientRender || (A.pendingTasks === 0 ? (z.parentFlushed && z.status === 1 && on(A, z), A.parentFlushed && x.completedBoundaries.push(A), A.fallbackAbortableTasks.forEach(Rt, x), A.fallbackAbortableTasks.clear()) : z.parentFlushed && z.status === 1 && (on(A, z), A.completedSegments.length === 1 && A.parentFlushed && x.partialBoundaries.push(A)));
    x.allPendingTasks--, x.allPendingTasks === 0 && (x = x.onAllReady, x());
  }
  function Ht(x) {
    if (x.status !== 2) {
      var A = zt, z = nt.current;
      nt.current = Ie;
      var X = Oe;
      Oe = x.responseState;
      try {
        var ye = x.pingedTasks, B;
        for (B = 0; B < ye.length; B++) {
          var I = ye[B], Q = x, pe = I.blockedSegment;
          if (pe.status === 0) {
            wt(I.context);
            try {
              ht(Q, I, I.node), Q.responseState.generateStaticMarkup || pe.lastPushedText && pe.textEmbedded && pe.chunks.push("<!-- -->"), I.abortSet.delete(I), pe.status = 1, Ft(Q, I.blockedBoundary, pe);
            } catch (Ln) {
              if (Ve(), typeof Ln == "object" && Ln !== null && typeof Ln.then == "function") {
                var Be = I.ping;
                Ln.then(Be, Be);
              } else {
                I.abortSet.delete(I), pe.status = 4;
                var je = I.blockedBoundary, gt = Ln, kn = $t(Q, gt);
                if (je === null ? Zt(Q, gt) : (je.pendingTasks--, je.forceClientRender || (je.forceClientRender = !0, je.errorDigest = kn, je.parentFlushed && Q.clientRenderedBoundaries.push(je))), Q.allPendingTasks--, Q.allPendingTasks === 0) {
                  var ln = Q.onAllReady;
                  ln();
                }
              }
            } finally {
            }
          }
        }
        ye.splice(0, B), x.destination !== null && bn(x, x.destination);
      } catch (Ln) {
        $t(x, Ln), Zt(x, Ln);
      } finally {
        Oe = X, nt.current = z, z === Ie && wt(A);
      }
    }
  }
  function Pn(x, A, z) {
    switch (z.parentFlushed = !0, z.status) {
      case 0:
        var X = z.id = x.nextSegmentId++;
        return z.lastPushedText = !1, z.textEmbedded = !1, x = x.responseState, A.push('<template id="'), A.push(x.placeholderPrefix), x = X.toString(16), A.push(x), A.push('"></template>');
      case 1:
        z.status = 2;
        var ye = !0;
        X = z.chunks;
        var B = 0;
        z = z.children;
        for (var I = 0; I < z.length; I++) {
          for (ye = z[I]; B < ye.index; B++)
            A.push(X[B]);
          ye = Rn(x, A, ye);
        }
        for (; B < X.length - 1; B++)
          A.push(X[B]);
        return B < X.length && (ye = A.push(X[B])), ye;
      default:
        throw Error(t(390));
    }
  }
  function Rn(x, A, z) {
    var X = z.boundary;
    if (X === null)
      return Pn(x, A, z);
    if (X.parentFlushed = !0, X.forceClientRender)
      return x.responseState.generateStaticMarkup || (X = X.errorDigest, A.push("<!--$!-->"), A.push("<template"), X && (A.push(' data-dgst="'), X = T(X), A.push(X), A.push('"')), A.push("></template>")), Pn(x, A, z), x = x.responseState.generateStaticMarkup ? !0 : A.push("<!--/$-->"), x;
    if (0 < X.pendingTasks) {
      X.rootSegmentID = x.nextSegmentId++, 0 < X.completedSegments.length && x.partialBoundaries.push(X);
      var ye = x.responseState, B = ye.nextSuspenseID++;
      return ye = ye.boundaryPrefix + B.toString(16), X = X.id = ye, me(A, x.responseState, X), Pn(x, A, z), A.push("<!--/$-->");
    }
    if (X.byteSize > x.progressiveChunkSize)
      return X.rootSegmentID = x.nextSegmentId++, x.completedBoundaries.push(X), me(A, x.responseState, X.id), Pn(x, A, z), A.push("<!--/$-->");
    if (x.responseState.generateStaticMarkup || A.push("<!--$-->"), z = X.completedSegments, z.length !== 1)
      throw Error(t(391));
    return Rn(x, A, z[0]), x = x.responseState.generateStaticMarkup ? !0 : A.push("<!--/$-->"), x;
  }
  function Qn(x, A, z) {
    return K(A, x.responseState, z.formatContext, z.id), Rn(x, A, z), ce(A, z.formatContext);
  }
  function Wn(x, A, z) {
    for (var X = z.completedSegments, ye = 0; ye < X.length; ye++)
      Qt(x, A, z, X[ye]);
    if (X.length = 0, x = x.responseState, X = z.id, z = z.rootSegmentID, A.push(x.startInlineScript), x.sentCompleteBoundaryFunction ? A.push('$RC("') : (x.sentCompleteBoundaryFunction = !0, A.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), X === null)
      throw Error(t(395));
    return z = z.toString(16), A.push(X), A.push('","'), A.push(x.segmentPrefix), A.push(z), A.push('")<\/script>');
  }
  function Qt(x, A, z, X) {
    if (X.status === 2)
      return !0;
    var ye = X.id;
    if (ye === -1) {
      if ((X.id = z.rootSegmentID) === -1)
        throw Error(t(392));
      return Qn(x, A, X);
    }
    return Qn(x, A, X), x = x.responseState, A.push(x.startInlineScript), x.sentCompleteSegmentFunction ? A.push('$RS("') : (x.sentCompleteSegmentFunction = !0, A.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), A.push(x.segmentPrefix), ye = ye.toString(16), A.push(ye), A.push('","'), A.push(x.placeholderPrefix), A.push(ye), A.push('")<\/script>');
  }
  function bn(x, A) {
    try {
      var z = x.completedRootSegment;
      if (z !== null && x.pendingRootTasks === 0) {
        Rn(x, A, z), x.completedRootSegment = null;
        var X = x.responseState.bootstrapChunks;
        for (z = 0; z < X.length - 1; z++)
          A.push(X[z]);
        z < X.length && A.push(X[z]);
      }
      var ye = x.clientRenderedBoundaries, B;
      for (B = 0; B < ye.length; B++) {
        var I = ye[B];
        X = A;
        var Q = x.responseState, pe = I.id, Be = I.errorDigest, je = I.errorMessage, gt = I.errorComponentStack;
        if (X.push(Q.startInlineScript), Q.sentClientRenderFunction ? X.push('$RX("') : (Q.sentClientRenderFunction = !0, X.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), pe === null)
          throw Error(t(395));
        if (X.push(pe), X.push('"'), Be || je || gt) {
          X.push(",");
          var kn = he(Be || "");
          X.push(kn);
        }
        if (je || gt) {
          X.push(",");
          var ln = he(je || "");
          X.push(ln);
        }
        if (gt) {
          X.push(",");
          var Ln = he(gt);
          X.push(Ln);
        }
        if (!X.push(")<\/script>")) {
          x.destination = null, B++, ye.splice(0, B);
          return;
        }
      }
      ye.splice(0, B);
      var lr = x.completedBoundaries;
      for (B = 0; B < lr.length; B++)
        if (!Wn(x, A, lr[B])) {
          x.destination = null, B++, lr.splice(0, B);
          return;
        }
      lr.splice(0, B);
      var Vn = x.partialBoundaries;
      for (B = 0; B < Vn.length; B++) {
        var Or = Vn[B];
        e: {
          ye = x, I = A;
          var hr = Or.completedSegments;
          for (Q = 0; Q < hr.length; Q++)
            if (!Qt(ye, I, Or, hr[Q])) {
              Q++, hr.splice(0, Q);
              var Er = !1;
              break e;
            }
          hr.splice(0, Q), Er = !0;
        }
        if (!Er) {
          x.destination = null, B++, Vn.splice(0, B);
          return;
        }
      }
      Vn.splice(0, B);
      var sr = x.completedBoundaries;
      for (B = 0; B < sr.length; B++)
        if (!Wn(x, A, sr[B])) {
          x.destination = null, B++, sr.splice(0, B);
          return;
        }
      sr.splice(0, B);
    } finally {
      x.allPendingTasks === 0 && x.pingedTasks.length === 0 && x.clientRenderedBoundaries.length === 0 && x.completedBoundaries.length === 0 && A.push(null);
    }
  }
  function fr(x, A) {
    try {
      var z = x.abortableTasks;
      z.forEach(function(X) {
        return gn(X, x, A);
      }), z.clear(), x.destination !== null && bn(x, x.destination);
    } catch (X) {
      $t(x, X), Zt(x, X);
    }
  }
  function ir() {
  }
  function or(x, A, z, X) {
    var ye = !1, B = null, I = "", Q = { push: function(Be) {
      return Be !== null && (I += Be), !0;
    }, destroy: function(Be) {
      ye = !0, B = Be;
    } }, pe = !1;
    if (x = Qe(x, ae(z, A ? A.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, ir, void 0, function() {
      pe = !0;
    }, void 0, void 0), Ht(x), fr(x, X), x.status === 1)
      x.status = 2, Q.destroy(x.fatalError);
    else if (x.status !== 2 && x.destination === null) {
      x.destination = Q;
      try {
        bn(x, Q);
      } catch (Be) {
        $t(x, Be), Zt(x, Be);
      }
    }
    if (ye)
      throw B;
    if (!pe)
      throw Error(t(426));
    return I;
  }
  return vi.renderToNodeStream = function() {
    throw Error(t(207));
  }, vi.renderToStaticMarkup = function(x, A) {
    return or(x, A, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, vi.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, vi.renderToString = function(x, A) {
    return or(x, A, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, vi.version = "18.2.0", vi;
}
var Qs = {};
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nh;
function ob() {
  if (Nh)
    return Qs;
  Nh = 1;
  var e = fe;
  function t(b) {
    for (var P = "https://reactjs.org/docs/error-decoder.html?invariant=" + b, F = 1; F < arguments.length; F++)
      P += "&args[]=" + encodeURIComponent(arguments[F]);
    return "Minified React error #" + b + "; visit " + P + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = null, n = 0;
  function i(b, P) {
    if (P.length !== 0)
      if (512 < P.length)
        0 < n && (b.enqueue(new Uint8Array(r.buffer, 0, n)), r = new Uint8Array(512), n = 0), b.enqueue(P);
      else {
        var F = r.length - n;
        F < P.length && (F === 0 ? b.enqueue(r) : (r.set(P.subarray(0, F), n), b.enqueue(r), P = P.subarray(F)), r = new Uint8Array(512), n = 0), r.set(P, n), n += P.length;
      }
  }
  function l(b, P) {
    return i(b, P), !0;
  }
  function p(b) {
    r && 0 < n && (b.enqueue(new Uint8Array(r.buffer, 0, n)), r = null, n = 0);
  }
  var u = new TextEncoder();
  function d(b) {
    return u.encode(b);
  }
  function f(b) {
    return u.encode(b);
  }
  function g(b, P) {
    typeof b.error == "function" ? b.error(P) : b.close();
  }
  var v = Object.prototype.hasOwnProperty, y = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, k = {}, T = {};
  function M(b) {
    return v.call(T, b) ? !0 : v.call(k, b) ? !1 : y.test(b) ? T[b] = !0 : (k[b] = !0, !1);
  }
  function C(b, P, F, G, ve, ge, Ce) {
    this.acceptsBooleans = P === 2 || P === 3 || P === 4, this.attributeName = G, this.attributeNamespace = ve, this.mustUseProperty = F, this.propertyName = b, this.type = P, this.sanitizeURL = ge, this.removeEmptyString = Ce;
  }
  var m = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(b) {
    m[b] = new C(b, 0, !1, b, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(b) {
    var P = b[0];
    m[P] = new C(P, 1, !1, b[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(b) {
    m[b] = new C(b, 2, !1, b.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(b) {
    m[b] = new C(b, 2, !1, b, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(b) {
    m[b] = new C(b, 3, !1, b.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(b) {
    m[b] = new C(b, 3, !0, b, null, !1, !1);
  }), ["capture", "download"].forEach(function(b) {
    m[b] = new C(b, 4, !1, b, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(b) {
    m[b] = new C(b, 6, !1, b, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(b) {
    m[b] = new C(b, 5, !1, b.toLowerCase(), null, !1, !1);
  });
  var D = /[\-:]([a-z])/g;
  function O(b) {
    return b[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(b) {
    var P = b.replace(
      D,
      O
    );
    m[P] = new C(P, 1, !1, b, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(b) {
    var P = b.replace(D, O);
    m[P] = new C(P, 1, !1, b, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(b) {
    var P = b.replace(D, O);
    m[P] = new C(P, 1, !1, b, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(b) {
    m[b] = new C(b, 1, !1, b.toLowerCase(), null, !1, !1);
  }), m.xlinkHref = new C("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(b) {
    m[b] = new C(b, 1, !1, b.toLowerCase(), null, !0, !0);
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
  }, $ = ["Webkit", "ms", "Moz", "O"];
  Object.keys(_).forEach(function(b) {
    $.forEach(function(P) {
      P = P + b.charAt(0).toUpperCase() + b.substring(1), _[P] = _[b];
    });
  });
  var L = /["'&<>]/;
  function q(b) {
    if (typeof b == "boolean" || typeof b == "number")
      return "" + b;
    b = "" + b;
    var P = L.exec(b);
    if (P) {
      var F = "", G, ve = 0;
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
        ve !== G && (F += b.substring(ve, G)), ve = G + 1, F += P;
      }
      b = ve !== G ? F + b.substring(ve, G) : F;
    }
    return b;
  }
  var W = /([A-Z])/g, Y = /^ms-/, J = Array.isArray, le = f("<script>"), U = f("<\/script>"), te = f('<script src="'), me = f('<script type="module" src="'), K = f('" async=""><\/script>'), ce = /(<\/|<)(s)(cript)/gi;
  function ue(b, P, F, G) {
    return "" + P + (F === "s" ? "\\u0073" : "\\u0053") + G;
  }
  function he(b, P, F, G, ve) {
    b = b === void 0 ? "" : b, P = P === void 0 ? le : f('<script nonce="' + q(P) + '">');
    var ge = [];
    if (F !== void 0 && ge.push(P, d(("" + F).replace(ce, ue)), U), G !== void 0)
      for (F = 0; F < G.length; F++)
        ge.push(te, d(q(G[F])), K);
    if (ve !== void 0)
      for (G = 0; G < ve.length; G++)
        ge.push(me, d(q(ve[G])), K);
    return { bootstrapChunks: ge, startInlineScript: P, placeholderPrefix: f(b + "P:"), segmentPrefix: f(b + "S:"), boundaryPrefix: b + "B:", idPrefix: b, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function ae(b, P) {
    return { insertionMode: b, selectedValue: P };
  }
  function V(b) {
    return ae(b === "http://www.w3.org/2000/svg" ? 2 : b === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function ee(b, P, F) {
    switch (P) {
      case "select":
        return ae(1, F.value != null ? F.value : F.defaultValue);
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
  var ne = f("<!-- -->");
  function ke(b, P, F, G) {
    return P === "" ? G : (G && b.push(ne), b.push(d(q(P))), !0);
  }
  var xe = /* @__PURE__ */ new Map(), we = f(' style="'), ie = f(":"), Le = f(";");
  function Me(b, P, F) {
    if (typeof F != "object")
      throw Error(t(62));
    P = !0;
    for (var G in F)
      if (v.call(F, G)) {
        var ve = F[G];
        if (ve != null && typeof ve != "boolean" && ve !== "") {
          if (G.indexOf("--") === 0) {
            var ge = d(q(G));
            ve = d(q(("" + ve).trim()));
          } else {
            ge = G;
            var Ce = xe.get(ge);
            Ce !== void 0 || (Ce = f(q(ge.replace(W, "-$1").toLowerCase().replace(Y, "-ms-"))), xe.set(ge, Ce)), ge = Ce, ve = typeof ve == "number" ? ve === 0 || v.call(_, G) ? d("" + ve) : d(ve + "px") : d(q(("" + ve).trim()));
          }
          P ? (P = !1, b.push(we, ge, ie, ve)) : b.push(Le, ge, ie, ve);
        }
      }
    P || b.push(Ge);
  }
  var We = f(" "), qe = f('="'), Ge = f('"'), De = f('=""');
  function _e(b, P, F, G) {
    switch (F) {
      case "style":
        Me(b, P, G);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < F.length) || F[0] !== "o" && F[0] !== "O" || F[1] !== "n" && F[1] !== "N") {
      if (P = m.hasOwnProperty(F) ? m[F] : null, P !== null) {
        switch (typeof G) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!P.acceptsBooleans)
              return;
        }
        switch (F = d(P.attributeName), P.type) {
          case 3:
            G && b.push(We, F, De);
            break;
          case 4:
            G === !0 ? b.push(We, F, De) : G !== !1 && b.push(We, F, qe, d(q(G)), Ge);
            break;
          case 5:
            isNaN(G) || b.push(We, F, qe, d(q(G)), Ge);
            break;
          case 6:
            !isNaN(G) && 1 <= G && b.push(We, F, qe, d(q(G)), Ge);
            break;
          default:
            P.sanitizeURL && (G = "" + G), b.push(We, F, qe, d(q(G)), Ge);
        }
      } else if (M(F)) {
        switch (typeof G) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (P = F.toLowerCase().slice(0, 5), P !== "data-" && P !== "aria-")
              return;
        }
        b.push(We, d(F), qe, d(q(G)), Ge);
      }
    }
  }
  var $e = f(">"), Ze = f("/>");
  function Et(b, P, F) {
    if (P != null) {
      if (F != null)
        throw Error(t(60));
      if (typeof P != "object" || !("__html" in P))
        throw Error(t(61));
      P = P.__html, P != null && b.push(d("" + P));
    }
  }
  function vt(b) {
    var P = "";
    return e.Children.forEach(b, function(F) {
      F != null && (P += F);
    }), P;
  }
  var Ct = f(' selected=""');
  function Je(b, P, F, G) {
    b.push(bt(F));
    var ve = F = null, ge;
    for (ge in P)
      if (v.call(P, ge)) {
        var Ce = P[ge];
        if (Ce != null)
          switch (ge) {
            case "children":
              F = Ce;
              break;
            case "dangerouslySetInnerHTML":
              ve = Ce;
              break;
            default:
              _e(b, G, ge, Ce);
          }
      }
    return b.push($e), Et(b, ve, F), typeof F == "string" ? (b.push(d(q(F))), null) : F;
  }
  var Vt = f(`
`), qt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, zt = /* @__PURE__ */ new Map();
  function bt(b) {
    var P = zt.get(b);
    if (P === void 0) {
      if (!qt.test(b))
        throw Error(t(65, b));
      P = f("<" + b), zt.set(b, P);
    }
    return P;
  }
  var St = f("<!DOCTYPE html>");
  function Jt(b, P, F, G, ve) {
    switch (P) {
      case "select":
        b.push(bt("select"));
        var ge = null, Ce = null;
        for (ct in F)
          if (v.call(F, ct)) {
            var Ne = F[ct];
            if (Ne != null)
              switch (ct) {
                case "children":
                  ge = Ne;
                  break;
                case "dangerouslySetInnerHTML":
                  Ce = Ne;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  _e(b, G, ct, Ne);
              }
          }
        return b.push($e), Et(b, Ce, ge), ge;
      case "option":
        Ce = ve.selectedValue, b.push(bt("option"));
        var tt = Ne = null, yt = null, ct = null;
        for (ge in F)
          if (v.call(F, ge)) {
            var Xt = F[ge];
            if (Xt != null)
              switch (ge) {
                case "children":
                  Ne = Xt;
                  break;
                case "selected":
                  yt = Xt;
                  break;
                case "dangerouslySetInnerHTML":
                  ct = Xt;
                  break;
                case "value":
                  tt = Xt;
                default:
                  _e(b, G, ge, Xt);
              }
          }
        if (Ce != null)
          if (F = tt !== null ? "" + tt : vt(Ne), J(Ce)) {
            for (G = 0; G < Ce.length; G++)
              if ("" + Ce[G] === F) {
                b.push(Ct);
                break;
              }
          } else
            "" + Ce === F && b.push(Ct);
        else
          yt && b.push(Ct);
        return b.push($e), Et(b, ct, Ne), Ne;
      case "textarea":
        b.push(bt("textarea")), ct = Ce = ge = null;
        for (Ne in F)
          if (v.call(F, Ne) && (tt = F[Ne], tt != null))
            switch (Ne) {
              case "children":
                ct = tt;
                break;
              case "value":
                ge = tt;
                break;
              case "defaultValue":
                Ce = tt;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(91));
              default:
                _e(b, G, Ne, tt);
            }
        if (ge === null && Ce !== null && (ge = Ce), b.push($e), ct != null) {
          if (ge != null)
            throw Error(t(92));
          if (J(ct) && 1 < ct.length)
            throw Error(t(93));
          ge = "" + ct;
        }
        return typeof ge == "string" && ge[0] === `
` && b.push(Vt), ge !== null && b.push(d(q("" + ge))), null;
      case "input":
        b.push(bt("input")), tt = ct = Ne = ge = null;
        for (Ce in F)
          if (v.call(F, Ce) && (yt = F[Ce], yt != null))
            switch (Ce) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, "input"));
              case "defaultChecked":
                tt = yt;
                break;
              case "defaultValue":
                Ne = yt;
                break;
              case "checked":
                ct = yt;
                break;
              case "value":
                ge = yt;
                break;
              default:
                _e(b, G, Ce, yt);
            }
        return ct !== null ? _e(
          b,
          G,
          "checked",
          ct
        ) : tt !== null && _e(b, G, "checked", tt), ge !== null ? _e(b, G, "value", ge) : Ne !== null && _e(b, G, "value", Ne), b.push(Ze), null;
      case "menuitem":
        b.push(bt("menuitem"));
        for (var Bn in F)
          if (v.call(F, Bn) && (ge = F[Bn], ge != null))
            switch (Bn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(400));
              default:
                _e(b, G, Bn, ge);
            }
        return b.push($e), null;
      case "title":
        b.push(bt("title")), ge = null;
        for (Xt in F)
          if (v.call(F, Xt) && (Ce = F[Xt], Ce != null))
            switch (Xt) {
              case "children":
                ge = Ce;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(434));
              default:
                _e(b, G, Xt, Ce);
            }
        return b.push($e), ge;
      case "listing":
      case "pre":
        b.push(bt(P)), Ce = ge = null;
        for (tt in F)
          if (v.call(F, tt) && (Ne = F[tt], Ne != null))
            switch (tt) {
              case "children":
                ge = Ne;
                break;
              case "dangerouslySetInnerHTML":
                Ce = Ne;
                break;
              default:
                _e(b, G, tt, Ne);
            }
        if (b.push($e), Ce != null) {
          if (ge != null)
            throw Error(t(60));
          if (typeof Ce != "object" || !("__html" in Ce))
            throw Error(t(61));
          F = Ce.__html, F != null && (typeof F == "string" && 0 < F.length && F[0] === `
` ? b.push(Vt, d(F)) : b.push(d("" + F)));
        }
        return typeof ge == "string" && ge[0] === `
` && b.push(Vt), ge;
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
        b.push(bt(P));
        for (var Un in F)
          if (v.call(F, Un) && (ge = F[Un], ge != null))
            switch (Un) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, P));
              default:
                _e(b, G, Un, ge);
            }
        return b.push(Ze), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Je(b, F, P, G);
      case "html":
        return ve.insertionMode === 0 && b.push(St), Je(b, F, P, G);
      default:
        if (P.indexOf("-") === -1 && typeof F.is != "string")
          return Je(b, F, P, G);
        b.push(bt(P)), Ce = ge = null;
        for (yt in F)
          if (v.call(F, yt) && (Ne = F[yt], Ne != null))
            switch (yt) {
              case "children":
                ge = Ne;
                break;
              case "dangerouslySetInnerHTML":
                Ce = Ne;
                break;
              case "style":
                Me(b, G, Ne);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                M(yt) && typeof Ne != "function" && typeof Ne != "symbol" && b.push(We, d(yt), qe, d(q(Ne)), Ge);
            }
        return b.push($e), Et(b, Ce, ge), ge;
    }
  }
  var ft = f("</"), Ot = f(">"), wt = f('<template id="'), un = f('"></template>'), Mn = f("<!--$-->"), _n = f('<!--$?--><template id="'), jt = f('"></template>'), Gt = f("<!--$!-->"), Mt = f("<!--/$-->"), cn = f("<template"), dn = f('"'), Ae = f(' data-dgst="');
  f(' data-msg="'), f(' data-stck="');
  var mt = f("></template>");
  function Ut(b, P, F) {
    if (i(b, _n), F === null)
      throw Error(t(395));
    return i(b, F), l(b, jt);
  }
  var _t = f('<div hidden id="'), vn = f('">'), st = f("</div>"), fn = f('<svg aria-hidden="true" style="display:none" id="'), xt = f('">'), Bt = f("</svg>"), pn = f('<math aria-hidden="true" style="display:none" id="'), En = f('">'), Ee = f("</math>"), Fe = f('<table hidden id="'), ot = f('">'), Ve = f("</table>"), en = f('<table hidden><tbody id="'), ut = f('">'), xn = f("</tbody></table>"), Nn = f('<table hidden><tr id="'), j = f('">'), Pe = f("</tr></table>"), Ie = f('<table hidden><colgroup id="'), Oe = f('">'), nt = f("</colgroup></table>");
  function Ye(b, P, F, G) {
    switch (F.insertionMode) {
      case 0:
      case 1:
        return i(b, _t), i(b, P.segmentPrefix), i(b, d(G.toString(16))), l(b, vn);
      case 2:
        return i(b, fn), i(b, P.segmentPrefix), i(b, d(G.toString(16))), l(b, xt);
      case 3:
        return i(b, pn), i(b, P.segmentPrefix), i(b, d(G.toString(16))), l(b, En);
      case 4:
        return i(b, Fe), i(b, P.segmentPrefix), i(b, d(G.toString(16))), l(b, ot);
      case 5:
        return i(b, en), i(b, P.segmentPrefix), i(b, d(G.toString(16))), l(b, ut);
      case 6:
        return i(b, Nn), i(b, P.segmentPrefix), i(b, d(G.toString(16))), l(b, j);
      case 7:
        return i(
          b,
          Ie
        ), i(b, P.segmentPrefix), i(b, d(G.toString(16))), l(b, Oe);
      default:
        throw Error(t(397));
    }
  }
  function rt(b, P) {
    switch (P.insertionMode) {
      case 0:
      case 1:
        return l(b, st);
      case 2:
        return l(b, Bt);
      case 3:
        return l(b, Ee);
      case 4:
        return l(b, Ve);
      case 5:
        return l(b, xn);
      case 6:
        return l(b, Pe);
      case 7:
        return l(b, nt);
      default:
        throw Error(t(397));
    }
  }
  var Qe = f('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), ze = f('$RS("'), Nt = f('","'), $t = f('")<\/script>'), Zt = f('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), It = f('$RC("'), Lt = f('","'), kt = f('")<\/script>'), Tt = f('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), ht = f('$RX("'), rn = f('"'), mn = f(")<\/script>"), Rt = f(","), gn = /[<\u2028\u2029]/g;
  function on(b) {
    return JSON.stringify(b).replace(gn, function(P) {
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
  var Ft = Object.assign, Ht = Symbol.for("react.element"), Pn = Symbol.for("react.portal"), Rn = Symbol.for("react.fragment"), Qn = Symbol.for("react.strict_mode"), Wn = Symbol.for("react.profiler"), Qt = Symbol.for("react.provider"), bn = Symbol.for("react.context"), fr = Symbol.for("react.forward_ref"), ir = Symbol.for("react.suspense"), or = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), z = Symbol.for("react.scope"), X = Symbol.for("react.debug_trace_mode"), ye = Symbol.for("react.legacy_hidden"), B = Symbol.for("react.default_value"), I = Symbol.iterator;
  function Q(b) {
    if (b == null)
      return null;
    if (typeof b == "function")
      return b.displayName || b.name || null;
    if (typeof b == "string")
      return b;
    switch (b) {
      case Rn:
        return "Fragment";
      case Pn:
        return "Portal";
      case Wn:
        return "Profiler";
      case Qn:
        return "StrictMode";
      case ir:
        return "Suspense";
      case or:
        return "SuspenseList";
    }
    if (typeof b == "object")
      switch (b.$$typeof) {
        case bn:
          return (b.displayName || "Context") + ".Consumer";
        case Qt:
          return (b._context.displayName || "Context") + ".Provider";
        case fr:
          var P = b.render;
          return b = b.displayName, b || (b = P.displayName || P.name || "", b = b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef"), b;
        case x:
          return P = b.displayName || null, P !== null ? P : Q(b.type) || "Memo";
        case A:
          P = b._payload, b = b._init;
          try {
            return Q(b(P));
          } catch {
          }
      }
    return null;
  }
  var pe = {};
  function Be(b, P) {
    if (b = b.contextTypes, !b)
      return pe;
    var F = {}, G;
    for (G in b)
      F[G] = P[G];
    return F;
  }
  var je = null;
  function gt(b, P) {
    if (b !== P) {
      b.context._currentValue = b.parentValue, b = b.parent;
      var F = P.parent;
      if (b === null) {
        if (F !== null)
          throw Error(t(401));
      } else {
        if (F === null)
          throw Error(t(401));
        gt(b, F);
      }
      P.context._currentValue = P.value;
    }
  }
  function kn(b) {
    b.context._currentValue = b.parentValue, b = b.parent, b !== null && kn(b);
  }
  function ln(b) {
    var P = b.parent;
    P !== null && ln(P), b.context._currentValue = b.value;
  }
  function Ln(b, P) {
    if (b.context._currentValue = b.parentValue, b = b.parent, b === null)
      throw Error(t(402));
    b.depth === P.depth ? gt(b, P) : Ln(b, P);
  }
  function lr(b, P) {
    var F = P.parent;
    if (F === null)
      throw Error(t(402));
    b.depth === F.depth ? gt(b, F) : lr(b, F), P.context._currentValue = P.value;
  }
  function Vn(b) {
    var P = je;
    P !== b && (P === null ? ln(b) : b === null ? kn(P) : P.depth === b.depth ? gt(P, b) : P.depth > b.depth ? Ln(P, b) : lr(P, b), je = b);
  }
  var Or = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(b, P) {
    b = b._reactInternals, b.queue !== null && b.queue.push(P);
  }, enqueueReplaceState: function(b, P) {
    b = b._reactInternals, b.replace = !0, b.queue = [P];
  }, enqueueForceUpdate: function() {
  } };
  function hr(b, P, F, G) {
    var ve = b.state !== void 0 ? b.state : null;
    b.updater = Or, b.props = F, b.state = ve;
    var ge = { queue: [], replace: !1 };
    b._reactInternals = ge;
    var Ce = P.contextType;
    if (b.context = typeof Ce == "object" && Ce !== null ? Ce._currentValue : G, Ce = P.getDerivedStateFromProps, typeof Ce == "function" && (Ce = Ce(F, ve), ve = Ce == null ? ve : Ft({}, ve, Ce), b.state = ve), typeof P.getDerivedStateFromProps != "function" && typeof b.getSnapshotBeforeUpdate != "function" && (typeof b.UNSAFE_componentWillMount == "function" || typeof b.componentWillMount == "function"))
      if (P = b.state, typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount(), P !== b.state && Or.enqueueReplaceState(b, b.state, null), ge.queue !== null && 0 < ge.queue.length)
        if (P = ge.queue, Ce = ge.replace, ge.queue = null, ge.replace = !1, Ce && P.length === 1)
          b.state = P[0];
        else {
          for (ge = Ce ? P[0] : b.state, ve = !0, Ce = Ce ? 1 : 0; Ce < P.length; Ce++) {
            var Ne = P[Ce];
            Ne = typeof Ne == "function" ? Ne.call(b, ge, F, G) : Ne, Ne != null && (ve ? (ve = !1, ge = Ft({}, ge, Ne)) : Ft(ge, Ne));
          }
          b.state = ge;
        }
      else
        ge.queue = null;
  }
  var Er = { id: 1, overflow: "" };
  function sr(b, P, F) {
    var G = b.id;
    b = b.overflow;
    var ve = 32 - Kr(G) - 1;
    G &= ~(1 << ve), F += 1;
    var ge = 32 - Kr(P) + ve;
    if (30 < ge) {
      var Ce = ve - ve % 5;
      return ge = (G & (1 << Ce) - 1).toString(32), G >>= Ce, ve -= Ce, { id: 1 << 32 - Kr(P) + ve | F << ve | G, overflow: ge + b };
    }
    return { id: 1 << ge | F << ve | G, overflow: b };
  }
  var Kr = Math.clz32 ? Math.clz32 : Na, $o = Math.log, Io = Math.LN2;
  function Na(b) {
    return b >>>= 0, b === 0 ? 32 : 31 - ($o(b) / Io | 0) | 0;
  }
  function Ho(b, P) {
    return b === P && (b !== 0 || 1 / b === 1 / P) || b !== b && P !== P;
  }
  var Fa = typeof Object.is == "function" ? Object.is : Ho, ur = null, Yr = null, la = null, Kt = null, pr = !1, Fn = !1, kr = 0, mr = null, sa = 0;
  function gr() {
    if (ur === null)
      throw Error(t(321));
    return ur;
  }
  function jn() {
    if (0 < sa)
      throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function za() {
    return Kt === null ? la === null ? (pr = !1, la = Kt = jn()) : (pr = !0, Kt = la) : Kt.next === null ? (pr = !1, Kt = Kt.next = jn()) : (pr = !0, Kt = Kt.next), Kt;
  }
  function Ba() {
    Yr = ur = null, Fn = !1, la = null, sa = 0, Kt = mr = null;
  }
  function Pi(b, P) {
    return typeof P == "function" ? P(b) : P;
  }
  function Ri(b, P, F) {
    if (ur = gr(), Kt = za(), pr) {
      var G = Kt.queue;
      if (P = G.dispatch, mr !== null && (F = mr.get(G), F !== void 0)) {
        mr.delete(G), G = Kt.memoizedState;
        do
          G = b(G, F.action), F = F.next;
        while (F !== null);
        return Kt.memoizedState = G, [G, P];
      }
      return [Kt.memoizedState, P];
    }
    return b = b === Pi ? typeof P == "function" ? P() : P : F !== void 0 ? F(P) : P, Kt.memoizedState = b, b = Kt.queue = { last: null, dispatch: null }, b = b.dispatch = Wo.bind(null, ur, b), [Kt.memoizedState, b];
  }
  function Li(b, P) {
    if (ur = gr(), Kt = za(), P = P === void 0 ? null : P, Kt !== null) {
      var F = Kt.memoizedState;
      if (F !== null && P !== null) {
        var G = F[1];
        e:
          if (G === null)
            G = !1;
          else {
            for (var ve = 0; ve < G.length && ve < P.length; ve++)
              if (!Fa(P[ve], G[ve])) {
                G = !1;
                break e;
              }
            G = !0;
          }
        if (G)
          return F[0];
      }
    }
    return b = b(), Kt.memoizedState = [b, P], b;
  }
  function Wo(b, P, F) {
    if (25 <= sa)
      throw Error(t(301));
    if (b === ur)
      if (Fn = !0, b = { action: F, next: null }, mr === null && (mr = /* @__PURE__ */ new Map()), F = mr.get(P), F === void 0)
        mr.set(P, b);
      else {
        for (P = F; P.next !== null; )
          P = P.next;
        P.next = b;
      }
  }
  function Vo() {
    throw Error(t(394));
  }
  function ua() {
  }
  var ca = { readContext: function(b) {
    return b._currentValue;
  }, useContext: function(b) {
    return gr(), b._currentValue;
  }, useMemo: Li, useReducer: Ri, useRef: function(b) {
    ur = gr(), Kt = za();
    var P = Kt.memoizedState;
    return P === null ? (b = { current: b }, Kt.memoizedState = b) : P;
  }, useState: function(b) {
    return Ri(Pi, b);
  }, useInsertionEffect: ua, useLayoutEffect: function() {
  }, useCallback: function(b, P) {
    return Li(function() {
      return b;
    }, P);
  }, useImperativeHandle: ua, useEffect: ua, useDebugValue: ua, useDeferredValue: function(b) {
    return gr(), b;
  }, useTransition: function() {
    return gr(), [!1, Vo];
  }, useId: function() {
    var b = Yr.treeContext, P = b.overflow;
    b = b.id, b = (b & ~(1 << 32 - Kr(b) - 1)).toString(32) + P;
    var F = da;
    if (F === null)
      throw Error(t(404));
    return P = kr++, b = ":" + F.idPrefix + "R" + b, 0 < P && (b += "H" + P.toString(32)), b + ":";
  }, useMutableSource: function(b, P) {
    return gr(), P(b._source);
  }, useSyncExternalStore: function(b, P, F) {
    if (F === void 0)
      throw Error(t(407));
    return F();
  } }, da = null, Xr = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function jo(b) {
    return console.error(b), null;
  }
  function qr() {
  }
  function $a(b, P, F, G, ve, ge, Ce, Ne, tt) {
    var yt = [], ct = /* @__PURE__ */ new Set();
    return P = { destination: null, responseState: P, progressiveChunkSize: G === void 0 ? 12800 : G, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ct, pingedTasks: yt, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: ve === void 0 ? jo : ve, onAllReady: ge === void 0 ? qr : ge, onShellReady: Ce === void 0 ? qr : Ce, onShellError: Ne === void 0 ? qr : Ne, onFatalError: tt === void 0 ? qr : tt }, F = Mr(P, 0, null, F, !1, !1), F.parentFlushed = !0, b = Ia(P, b, null, F, ct, pe, null, Er), yt.push(b), P;
  }
  function Ia(b, P, F, G, ve, ge, Ce, Ne) {
    b.allPendingTasks++, F === null ? b.pendingRootTasks++ : F.pendingTasks++;
    var tt = { node: P, ping: function() {
      var yt = b.pingedTasks;
      yt.push(tt), yt.length === 1 && Fi(b);
    }, blockedBoundary: F, blockedSegment: G, abortSet: ve, legacyContext: ge, context: Ce, treeContext: Ne };
    return ve.add(tt), tt;
  }
  function Mr(b, P, F, G, ve, ge) {
    return { status: 0, id: -1, index: P, parentFlushed: !1, chunks: [], children: [], formatContext: G, boundary: F, lastPushedText: ve, textEmbedded: ge };
  }
  function _r(b, P) {
    if (b = b.onError(P), b != null && typeof b != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof b + '" instead');
    return b;
  }
  function fa(b, P) {
    var F = b.onShellError;
    F(P), F = b.onFatalError, F(P), b.destination !== null ? (b.status = 2, g(b.destination, P)) : (b.status = 1, b.fatalError = P);
  }
  function Di(b, P, F, G, ve) {
    for (ur = {}, Yr = P, kr = 0, b = F(G, ve); Fn; )
      Fn = !1, kr = 0, sa += 1, Kt = null, b = F(G, ve);
    return Ba(), b;
  }
  function Ha(b, P, F, G) {
    var ve = F.render(), ge = G.childContextTypes;
    if (ge != null) {
      var Ce = P.legacyContext;
      if (typeof F.getChildContext != "function")
        G = Ce;
      else {
        F = F.getChildContext();
        for (var Ne in F)
          if (!(Ne in ge))
            throw Error(t(108, Q(G) || "Unknown", Ne));
        G = Ft({}, Ce, F);
      }
      P.legacyContext = G, zn(b, P, ve), P.legacyContext = Ce;
    } else
      zn(b, P, ve);
  }
  function Oi(b, P) {
    if (b && b.defaultProps) {
      P = Ft({}, P), b = b.defaultProps;
      for (var F in b)
        P[F] === void 0 && (P[F] = b[F]);
      return P;
    }
    return P;
  }
  function ha(b, P, F, G, ve) {
    if (typeof F == "function")
      if (F.prototype && F.prototype.isReactComponent) {
        ve = Be(F, P.legacyContext);
        var ge = F.contextType;
        ge = new F(G, typeof ge == "object" && ge !== null ? ge._currentValue : ve), hr(ge, F, G, ve), Ha(b, P, ge, F);
      } else {
        ge = Be(F, P.legacyContext), ve = Di(b, P, F, G, ge);
        var Ce = kr !== 0;
        if (typeof ve == "object" && ve !== null && typeof ve.render == "function" && ve.$$typeof === void 0)
          hr(ve, F, G, ge), Ha(b, P, ve, F);
        else if (Ce) {
          G = P.treeContext, P.treeContext = sr(G, 1, 0);
          try {
            zn(b, P, ve);
          } finally {
            P.treeContext = G;
          }
        } else
          zn(b, P, ve);
      }
    else if (typeof F == "string") {
      switch (ve = P.blockedSegment, ge = Jt(ve.chunks, F, G, b.responseState, ve.formatContext), ve.lastPushedText = !1, Ce = ve.formatContext, ve.formatContext = ee(Ce, F, G), pa(b, P, ge), ve.formatContext = Ce, F) {
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
          ve.chunks.push(ft, d(F), Ot);
      }
      ve.lastPushedText = !1;
    } else {
      switch (F) {
        case ye:
        case X:
        case Qn:
        case Wn:
        case Rn:
          zn(b, P, G.children);
          return;
        case or:
          zn(b, P, G.children);
          return;
        case z:
          throw Error(t(343));
        case ir:
          e: {
            F = P.blockedBoundary, ve = P.blockedSegment, ge = G.fallback, G = G.children, Ce = /* @__PURE__ */ new Set();
            var Ne = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: Ce, errorDigest: null }, tt = Mr(b, ve.chunks.length, Ne, ve.formatContext, !1, !1);
            ve.children.push(tt), ve.lastPushedText = !1;
            var yt = Mr(b, 0, null, ve.formatContext, !1, !1);
            yt.parentFlushed = !0, P.blockedBoundary = Ne, P.blockedSegment = yt;
            try {
              if (pa(
                b,
                P,
                G
              ), yt.lastPushedText && yt.textEmbedded && yt.chunks.push(ne), yt.status = 1, ma(Ne, yt), Ne.pendingTasks === 0)
                break e;
            } catch (ct) {
              yt.status = 4, Ne.forceClientRender = !0, Ne.errorDigest = _r(b, ct);
            } finally {
              P.blockedBoundary = F, P.blockedSegment = ve;
            }
            P = Ia(b, ge, F, tt, Ce, P.legacyContext, P.context, P.treeContext), b.pingedTasks.push(P);
          }
          return;
      }
      if (typeof F == "object" && F !== null)
        switch (F.$$typeof) {
          case fr:
            if (G = Di(b, P, F.render, G, ve), kr !== 0) {
              F = P.treeContext, P.treeContext = sr(F, 1, 0);
              try {
                zn(b, P, G);
              } finally {
                P.treeContext = F;
              }
            } else
              zn(b, P, G);
            return;
          case x:
            F = F.type, G = Oi(F, G), ha(b, P, F, G, ve);
            return;
          case Qt:
            if (ve = G.children, F = F._context, G = G.value, ge = F._currentValue, F._currentValue = G, Ce = je, je = G = { parent: Ce, depth: Ce === null ? 0 : Ce.depth + 1, context: F, parentValue: ge, value: G }, P.context = G, zn(b, P, ve), b = je, b === null)
              throw Error(t(403));
            G = b.parentValue, b.context._currentValue = G === B ? b.context._defaultValue : G, b = je = b.parent, P.context = b;
            return;
          case bn:
            G = G.children, G = G(F._currentValue), zn(b, P, G);
            return;
          case A:
            ve = F._init, F = ve(F._payload), G = Oi(F, G), ha(b, P, F, G, void 0);
            return;
        }
      throw Error(t(
        130,
        F == null ? F : typeof F,
        ""
      ));
    }
  }
  function zn(b, P, F) {
    if (P.node = F, typeof F == "object" && F !== null) {
      switch (F.$$typeof) {
        case Ht:
          ha(b, P, F.type, F.props, F.ref);
          return;
        case Pn:
          throw Error(t(257));
        case A:
          var G = F._init;
          F = G(F._payload), zn(b, P, F);
          return;
      }
      if (J(F)) {
        Mi(b, P, F);
        return;
      }
      if (F === null || typeof F != "object" ? G = null : (G = I && F[I] || F["@@iterator"], G = typeof G == "function" ? G : null), G && (G = G.call(F))) {
        if (F = G.next(), !F.done) {
          var ve = [];
          do
            ve.push(F.value), F = G.next();
          while (!F.done);
          Mi(b, P, ve);
        }
        return;
      }
      throw b = Object.prototype.toString.call(F), Error(t(31, b === "[object Object]" ? "object with keys {" + Object.keys(F).join(", ") + "}" : b));
    }
    typeof F == "string" ? (G = P.blockedSegment, G.lastPushedText = ke(P.blockedSegment.chunks, F, b.responseState, G.lastPushedText)) : typeof F == "number" && (G = P.blockedSegment, G.lastPushedText = ke(P.blockedSegment.chunks, "" + F, b.responseState, G.lastPushedText));
  }
  function Mi(b, P, F) {
    for (var G = F.length, ve = 0; ve < G; ve++) {
      var ge = P.treeContext;
      P.treeContext = sr(ge, G, ve);
      try {
        pa(b, P, F[ve]);
      } finally {
        P.treeContext = ge;
      }
    }
  }
  function pa(b, P, F) {
    var G = P.blockedSegment.formatContext, ve = P.legacyContext, ge = P.context;
    try {
      return zn(b, P, F);
    } catch (tt) {
      if (Ba(), typeof tt == "object" && tt !== null && typeof tt.then == "function") {
        F = tt;
        var Ce = P.blockedSegment, Ne = Mr(b, Ce.chunks.length, null, Ce.formatContext, Ce.lastPushedText, !0);
        Ce.children.push(Ne), Ce.lastPushedText = !1, b = Ia(b, P.node, P.blockedBoundary, Ne, P.abortSet, P.legacyContext, P.context, P.treeContext).ping, F.then(b, b), P.blockedSegment.formatContext = G, P.legacyContext = ve, P.context = ge, Vn(ge);
      } else
        throw P.blockedSegment.formatContext = G, P.legacyContext = ve, P.context = ge, Vn(ge), tt;
    }
  }
  function Uo(b) {
    var P = b.blockedBoundary;
    b = b.blockedSegment, b.status = 3, Ni(this, P, b);
  }
  function _i(b, P, F) {
    var G = b.blockedBoundary;
    b.blockedSegment.status = 3, G === null ? (P.allPendingTasks--, P.status !== 2 && (P.status = 2, P.destination !== null && P.destination.close())) : (G.pendingTasks--, G.forceClientRender || (G.forceClientRender = !0, b = F === void 0 ? Error(t(432)) : F, G.errorDigest = P.onError(b), G.parentFlushed && P.clientRenderedBoundaries.push(G)), G.fallbackAbortableTasks.forEach(function(ve) {
      return _i(ve, P, F);
    }), G.fallbackAbortableTasks.clear(), P.allPendingTasks--, P.allPendingTasks === 0 && (G = P.onAllReady, G()));
  }
  function ma(b, P) {
    if (P.chunks.length === 0 && P.children.length === 1 && P.children[0].boundary === null) {
      var F = P.children[0];
      F.id = P.id, F.parentFlushed = !0, F.status === 1 && ma(b, F);
    } else
      b.completedSegments.push(P);
  }
  function Ni(b, P, F) {
    if (P === null) {
      if (F.parentFlushed) {
        if (b.completedRootSegment !== null)
          throw Error(t(389));
        b.completedRootSegment = F;
      }
      b.pendingRootTasks--, b.pendingRootTasks === 0 && (b.onShellError = qr, P = b.onShellReady, P());
    } else
      P.pendingTasks--, P.forceClientRender || (P.pendingTasks === 0 ? (F.parentFlushed && F.status === 1 && ma(P, F), P.parentFlushed && b.completedBoundaries.push(P), P.fallbackAbortableTasks.forEach(Uo, b), P.fallbackAbortableTasks.clear()) : F.parentFlushed && F.status === 1 && (ma(P, F), P.completedSegments.length === 1 && P.parentFlushed && b.partialBoundaries.push(P)));
    b.allPendingTasks--, b.allPendingTasks === 0 && (b = b.onAllReady, b());
  }
  function Fi(b) {
    if (b.status !== 2) {
      var P = je, F = Xr.current;
      Xr.current = ca;
      var G = da;
      da = b.responseState;
      try {
        var ve = b.pingedTasks, ge;
        for (ge = 0; ge < ve.length; ge++) {
          var Ce = ve[ge], Ne = b, tt = Ce.blockedSegment;
          if (tt.status === 0) {
            Vn(Ce.context);
            try {
              zn(Ne, Ce, Ce.node), tt.lastPushedText && tt.textEmbedded && tt.chunks.push(ne), Ce.abortSet.delete(Ce), tt.status = 1, Ni(Ne, Ce.blockedBoundary, tt);
            } catch (Kn) {
              if (Ba(), typeof Kn == "object" && Kn !== null && typeof Kn.then == "function") {
                var yt = Ce.ping;
                Kn.then(yt, yt);
              } else {
                Ce.abortSet.delete(Ce), tt.status = 4;
                var ct = Ce.blockedBoundary, Xt = Kn, Bn = _r(Ne, Xt);
                if (ct === null ? fa(Ne, Xt) : (ct.pendingTasks--, ct.forceClientRender || (ct.forceClientRender = !0, ct.errorDigest = Bn, ct.parentFlushed && Ne.clientRenderedBoundaries.push(ct))), Ne.allPendingTasks--, Ne.allPendingTasks === 0) {
                  var Un = Ne.onAllReady;
                  Un();
                }
              }
            } finally {
            }
          }
        }
        ve.splice(0, ge), b.destination !== null && Wa(b, b.destination);
      } catch (Kn) {
        _r(b, Kn), fa(b, Kn);
      } finally {
        da = G, Xr.current = F, F === ca && Vn(P);
      }
    }
  }
  function ga(b, P, F) {
    switch (F.parentFlushed = !0, F.status) {
      case 0:
        var G = F.id = b.nextSegmentId++;
        return F.lastPushedText = !1, F.textEmbedded = !1, b = b.responseState, i(P, wt), i(P, b.placeholderPrefix), b = d(G.toString(16)), i(P, b), l(P, un);
      case 1:
        F.status = 2;
        var ve = !0;
        G = F.chunks;
        var ge = 0;
        F = F.children;
        for (var Ce = 0; Ce < F.length; Ce++) {
          for (ve = F[Ce]; ge < ve.index; ge++)
            i(P, G[ge]);
          ve = ya(b, P, ve);
        }
        for (; ge < G.length - 1; ge++)
          i(P, G[ge]);
        return ge < G.length && (ve = l(P, G[ge])), ve;
      default:
        throw Error(t(390));
    }
  }
  function ya(b, P, F) {
    var G = F.boundary;
    if (G === null)
      return ga(b, P, F);
    if (G.parentFlushed = !0, G.forceClientRender)
      G = G.errorDigest, l(P, Gt), i(P, cn), G && (i(P, Ae), i(P, d(q(G))), i(P, dn)), l(P, mt), ga(b, P, F);
    else if (0 < G.pendingTasks) {
      G.rootSegmentID = b.nextSegmentId++, 0 < G.completedSegments.length && b.partialBoundaries.push(G);
      var ve = b.responseState, ge = ve.nextSuspenseID++;
      ve = f(ve.boundaryPrefix + ge.toString(16)), G = G.id = ve, Ut(P, b.responseState, G), ga(b, P, F);
    } else if (G.byteSize > b.progressiveChunkSize)
      G.rootSegmentID = b.nextSegmentId++, b.completedBoundaries.push(G), Ut(P, b.responseState, G.id), ga(b, P, F);
    else {
      if (l(P, Mn), F = G.completedSegments, F.length !== 1)
        throw Error(t(391));
      ya(b, P, F[0]);
    }
    return l(P, Mt);
  }
  function zi(b, P, F) {
    return Ye(P, b.responseState, F.formatContext, F.id), ya(b, P, F), rt(P, F.formatContext);
  }
  function Bi(b, P, F) {
    for (var G = F.completedSegments, ve = 0; ve < G.length; ve++)
      $i(b, P, F, G[ve]);
    if (G.length = 0, b = b.responseState, G = F.id, F = F.rootSegmentID, i(P, b.startInlineScript), b.sentCompleteBoundaryFunction ? i(P, It) : (b.sentCompleteBoundaryFunction = !0, i(P, Zt)), G === null)
      throw Error(t(395));
    return F = d(F.toString(16)), i(P, G), i(P, Lt), i(P, b.segmentPrefix), i(P, F), l(P, kt);
  }
  function $i(b, P, F, G) {
    if (G.status === 2)
      return !0;
    var ve = G.id;
    if (ve === -1) {
      if ((G.id = F.rootSegmentID) === -1)
        throw Error(t(392));
      return zi(b, P, G);
    }
    return zi(b, P, G), b = b.responseState, i(P, b.startInlineScript), b.sentCompleteSegmentFunction ? i(P, ze) : (b.sentCompleteSegmentFunction = !0, i(P, Qe)), i(P, b.segmentPrefix), ve = d(ve.toString(16)), i(P, ve), i(P, Nt), i(P, b.placeholderPrefix), i(P, ve), l(P, $t);
  }
  function Wa(b, P) {
    r = new Uint8Array(512), n = 0;
    try {
      var F = b.completedRootSegment;
      if (F !== null && b.pendingRootTasks === 0) {
        ya(b, P, F), b.completedRootSegment = null;
        var G = b.responseState.bootstrapChunks;
        for (F = 0; F < G.length - 1; F++)
          i(P, G[F]);
        F < G.length && l(P, G[F]);
      }
      var ve = b.clientRenderedBoundaries, ge;
      for (ge = 0; ge < ve.length; ge++) {
        var Ce = ve[ge];
        G = P;
        var Ne = b.responseState, tt = Ce.id, yt = Ce.errorDigest, ct = Ce.errorMessage, Xt = Ce.errorComponentStack;
        if (i(G, Ne.startInlineScript), Ne.sentClientRenderFunction ? i(G, ht) : (Ne.sentClientRenderFunction = !0, i(
          G,
          Tt
        )), tt === null)
          throw Error(t(395));
        i(G, tt), i(G, rn), (yt || ct || Xt) && (i(G, Rt), i(G, d(on(yt || "")))), (ct || Xt) && (i(G, Rt), i(G, d(on(ct || "")))), Xt && (i(G, Rt), i(G, d(on(Xt)))), l(G, mn);
      }
      ve.splice(0, ge);
      var Bn = b.completedBoundaries;
      for (ge = 0; ge < Bn.length; ge++)
        Bi(b, P, Bn[ge]);
      Bn.splice(0, ge), p(P), r = new Uint8Array(512), n = 0;
      var Un = b.partialBoundaries;
      for (ge = 0; ge < Un.length; ge++) {
        var Kn = Un[ge];
        e: {
          ve = b, Ce = P;
          var va = Kn.completedSegments;
          for (Ne = 0; Ne < va.length; Ne++)
            if (!$i(
              ve,
              Ce,
              Kn,
              va[Ne]
            )) {
              Ne++, va.splice(0, Ne);
              var Hi = !1;
              break e;
            }
          va.splice(0, Ne), Hi = !0;
        }
        if (!Hi) {
          b.destination = null, ge++, Un.splice(0, ge);
          return;
        }
      }
      Un.splice(0, ge);
      var Va = b.completedBoundaries;
      for (ge = 0; ge < Va.length; ge++)
        Bi(b, P, Va[ge]);
      Va.splice(0, ge);
    } finally {
      p(P), b.allPendingTasks === 0 && b.pingedTasks.length === 0 && b.clientRenderedBoundaries.length === 0 && b.completedBoundaries.length === 0 && P.close();
    }
  }
  function Ii(b, P) {
    try {
      var F = b.abortableTasks;
      F.forEach(function(G) {
        return _i(G, b, P);
      }), F.clear(), b.destination !== null && Wa(b, b.destination);
    } catch (G) {
      _r(b, G), fa(b, G);
    }
  }
  return Qs.renderToReadableStream = function(b, P) {
    return new Promise(function(F, G) {
      var ve, ge, Ce = new Promise(function(ct, Xt) {
        ge = ct, ve = Xt;
      }), Ne = $a(b, he(P ? P.identifierPrefix : void 0, P ? P.nonce : void 0, P ? P.bootstrapScriptContent : void 0, P ? P.bootstrapScripts : void 0, P ? P.bootstrapModules : void 0), V(P ? P.namespaceURI : void 0), P ? P.progressiveChunkSize : void 0, P ? P.onError : void 0, ge, function() {
        var ct = new ReadableStream({ type: "bytes", pull: function(Xt) {
          if (Ne.status === 1)
            Ne.status = 2, g(Xt, Ne.fatalError);
          else if (Ne.status !== 2 && Ne.destination === null) {
            Ne.destination = Xt;
            try {
              Wa(Ne, Xt);
            } catch (Bn) {
              _r(Ne, Bn), fa(Ne, Bn);
            }
          }
        }, cancel: function() {
          Ii(Ne);
        } }, { highWaterMark: 0 });
        ct.allReady = Ce, F(ct);
      }, function(ct) {
        Ce.catch(function() {
        }), G(ct);
      }, ve);
      if (P && P.signal) {
        var tt = P.signal, yt = function() {
          Ii(Ne, tt.reason), tt.removeEventListener("abort", yt);
        };
        tt.addEventListener("abort", yt);
      }
      Fi(Ne);
    });
  }, Qs.version = "18.2.0", Qs;
}
var xi = {};
/**
 * @license React
 * react-dom-server-legacy.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fh;
function lb() {
  return Fh || (Fh = 1, process.env.NODE_ENV !== "production" && function() {
    var e = fe, t = "18.2.0", r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(o) {
      {
        for (var c = arguments.length, S = new Array(c > 1 ? c - 1 : 0), w = 1; w < c; w++)
          S[w - 1] = arguments[w];
        l("warn", o, S);
      }
    }
    function i(o) {
      {
        for (var c = arguments.length, S = new Array(c > 1 ? c - 1 : 0), w = 1; w < c; w++)
          S[w - 1] = arguments[w];
        l("error", o, S);
      }
    }
    function l(o, c, S) {
      {
        var w = r.ReactDebugCurrentFrame, N = w.getStackAddendum();
        N !== "" && (c += "%s", S = S.concat([N]));
        var Z = S.map(function(oe) {
          return String(oe);
        });
        Z.unshift("Warning: " + c), Function.prototype.apply.call(console[o], console, Z);
      }
    }
    function p(o) {
      o();
    }
    function u(o) {
    }
    function d(o, c) {
      f(o, c);
    }
    function f(o, c) {
      return o.push(c);
    }
    function g(o) {
    }
    function v(o) {
      o.push(null);
    }
    function y(o) {
      return o;
    }
    function k(o) {
      return o;
    }
    function T(o, c) {
      o.destroy(c);
    }
    function M(o) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, S = c && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return S;
      }
    }
    function C(o) {
      try {
        return m(o), !1;
      } catch {
        return !0;
      }
    }
    function m(o) {
      return "" + o;
    }
    function D(o, c) {
      if (C(o))
        return i("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", c, M(o)), m(o);
    }
    function O(o, c) {
      if (C(o))
        return i("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", c, M(o)), m(o);
    }
    function _(o) {
      if (C(o))
        return i("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", M(o)), m(o);
    }
    var $ = Object.prototype.hasOwnProperty, L = 0, q = 1, W = 2, Y = 3, J = 4, le = 5, U = 6, te = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", me = te + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", K = new RegExp("^[" + te + "][" + me + "]*$"), ce = {}, ue = {};
    function he(o) {
      return $.call(ue, o) ? !0 : $.call(ce, o) ? !1 : K.test(o) ? (ue[o] = !0, !0) : (ce[o] = !0, i("Invalid attribute name: `%s`", o), !1);
    }
    function ae(o, c, S, w) {
      if (S !== null && S.type === L)
        return !1;
      switch (typeof c) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (w)
            return !1;
          if (S !== null)
            return !S.acceptsBooleans;
          var N = o.toLowerCase().slice(0, 5);
          return N !== "data-" && N !== "aria-";
        }
        default:
          return !1;
      }
    }
    function V(o) {
      return ne.hasOwnProperty(o) ? ne[o] : null;
    }
    function ee(o, c, S, w, N, Z, oe) {
      this.acceptsBooleans = c === W || c === Y || c === J, this.attributeName = w, this.attributeNamespace = N, this.mustUseProperty = S, this.propertyName = o, this.type = c, this.sanitizeURL = Z, this.removeEmptyString = oe;
    }
    var ne = {}, ke = [
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
    ke.forEach(function(o) {
      ne[o] = new ee(
        o,
        L,
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
      ne[c] = new ee(
        c,
        q,
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
      ne[o] = new ee(
        o,
        W,
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
      ne[o] = new ee(
        o,
        W,
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
      ne[o] = new ee(
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
      ne[o] = new ee(
        o,
        Y,
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
      ne[o] = new ee(
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
      ne[o] = new ee(
        o,
        U,
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
      ne[o] = new ee(
        o,
        le,
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
    var xe = /[\-\:]([a-z])/g, we = function(o) {
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
      var c = o.replace(xe, we);
      ne[c] = new ee(
        c,
        q,
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
      var c = o.replace(xe, we);
      ne[c] = new ee(
        c,
        q,
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
      var c = o.replace(xe, we);
      ne[c] = new ee(
        c,
        q,
        !1,
        // mustUseProperty
        o,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(o) {
      ne[o] = new ee(
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
    });
    var ie = "xlinkHref";
    ne[ie] = new ee(
      "xlinkHref",
      q,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(o) {
      ne[o] = new ee(
        o,
        q,
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
    function Me(o, c) {
      return o + c.charAt(0).toUpperCase() + c.substring(1);
    }
    var We = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Le).forEach(function(o) {
      We.forEach(function(c) {
        Le[Me(c, o)] = Le[o];
      });
    });
    var qe = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Ge(o, c) {
      qe[c.type] || c.onChange || c.onInput || c.readOnly || c.disabled || c.value == null || i("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), c.onChange || c.readOnly || c.disabled || c.checked == null || i("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function De(o, c) {
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
    var _e = {
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
    }, $e = {}, Ze = new RegExp("^(aria)-[" + me + "]*$"), Et = new RegExp("^(aria)[A-Z][" + me + "]*$");
    function vt(o, c) {
      {
        if ($.call($e, c) && $e[c])
          return !0;
        if (Et.test(c)) {
          var S = "aria-" + c.slice(4).toLowerCase(), w = _e.hasOwnProperty(S) ? S : null;
          if (w == null)
            return i("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", c), $e[c] = !0, !0;
          if (c !== w)
            return i("Invalid ARIA attribute `%s`. Did you mean `%s`?", c, w), $e[c] = !0, !0;
        }
        if (Ze.test(c)) {
          var N = c.toLowerCase(), Z = _e.hasOwnProperty(N) ? N : null;
          if (Z == null)
            return $e[c] = !0, !1;
          if (c !== Z)
            return i("Unknown ARIA attribute `%s`. Did you mean `%s`?", c, Z), $e[c] = !0, !0;
        }
      }
      return !0;
    }
    function Ct(o, c) {
      {
        var S = [];
        for (var w in c) {
          var N = vt(o, w);
          N || S.push(w);
        }
        var Z = S.map(function(oe) {
          return "`" + oe + "`";
        }).join(", ");
        S.length === 1 ? i("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", Z, o) : S.length > 1 && i("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", Z, o);
      }
    }
    function Je(o, c) {
      De(o, c) || Ct(o, c);
    }
    var Vt = !1;
    function qt(o, c) {
      {
        if (o !== "input" && o !== "textarea" && o !== "select")
          return;
        c != null && c.value === null && !Vt && (Vt = !0, o === "select" && c.multiple ? i("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", o) : i("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", o));
      }
    }
    var zt = {
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
      var St = {}, Jt = /^on./, ft = /^on[^A-Z]/, Ot = new RegExp("^(aria)-[" + me + "]*$"), wt = new RegExp("^(aria)[A-Z][" + me + "]*$");
      bt = function(o, c, S, w) {
        if ($.call(St, c) && St[c])
          return !0;
        var N = c.toLowerCase();
        if (N === "onfocusin" || N === "onfocusout")
          return i("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), St[c] = !0, !0;
        if (w != null) {
          var Z = w.registrationNameDependencies, oe = w.possibleRegistrationNames;
          if (Z.hasOwnProperty(c))
            return !0;
          var be = oe.hasOwnProperty(N) ? oe[N] : null;
          if (be != null)
            return i("Invalid event handler property `%s`. Did you mean `%s`?", c, be), St[c] = !0, !0;
          if (Jt.test(c))
            return i("Unknown event handler property `%s`. It will be ignored.", c), St[c] = !0, !0;
        } else if (Jt.test(c))
          return ft.test(c) && i("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", c), St[c] = !0, !0;
        if (Ot.test(c) || wt.test(c))
          return !0;
        if (N === "innerhtml")
          return i("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), St[c] = !0, !0;
        if (N === "aria")
          return i("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), St[c] = !0, !0;
        if (N === "is" && S !== null && S !== void 0 && typeof S != "string")
          return i("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof S), St[c] = !0, !0;
        if (typeof S == "number" && isNaN(S))
          return i("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", c), St[c] = !0, !0;
        var Re = V(c), Ue = Re !== null && Re.type === L;
        if (zt.hasOwnProperty(N)) {
          var Xe = zt[N];
          if (Xe !== c)
            return i("Invalid DOM property `%s`. Did you mean `%s`?", c, Xe), St[c] = !0, !0;
        } else if (!Ue && c !== N)
          return i("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", c, N), St[c] = !0, !0;
        return typeof S == "boolean" && ae(c, S, Re, !1) ? (S ? i('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', S, c, c, S, c) : i('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', S, c, c, S, c, c, c), St[c] = !0, !0) : Ue ? !0 : ae(c, S, Re, !1) ? (St[c] = !0, !1) : ((S === "false" || S === "true") && Re !== null && Re.type === Y && (i("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", S, c, S === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', c, S), St[c] = !0), !0);
      };
    }
    var un = function(o, c, S) {
      {
        var w = [];
        for (var N in c) {
          var Z = bt(o, N, c[N], S);
          Z || w.push(N);
        }
        var oe = w.map(function(be) {
          return "`" + be + "`";
        }).join(", ");
        w.length === 1 ? i("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", oe, o) : w.length > 1 && i("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", oe, o);
      }
    };
    function Mn(o, c, S) {
      De(o, c) || un(o, c, S);
    }
    var _n = function() {
    };
    {
      var jt = /^(?:webkit|moz|o)[A-Z]/, Gt = /^-ms-/, Mt = /-(.)/g, cn = /;\s*$/, dn = {}, Ae = {}, mt = !1, Ut = !1, _t = function(o) {
        return o.replace(Mt, function(c, S) {
          return S.toUpperCase();
        });
      }, vn = function(o) {
        dn.hasOwnProperty(o) && dn[o] || (dn[o] = !0, i(
          "Unsupported style property %s. Did you mean %s?",
          o,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          _t(o.replace(Gt, "ms-"))
        ));
      }, st = function(o) {
        dn.hasOwnProperty(o) && dn[o] || (dn[o] = !0, i("Unsupported vendor-prefixed style property %s. Did you mean %s?", o, o.charAt(0).toUpperCase() + o.slice(1)));
      }, fn = function(o, c) {
        Ae.hasOwnProperty(c) && Ae[c] || (Ae[c] = !0, i(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, o, c.replace(cn, "")));
      }, xt = function(o, c) {
        mt || (mt = !0, i("`NaN` is an invalid value for the `%s` css style property.", o));
      }, Bt = function(o, c) {
        Ut || (Ut = !0, i("`Infinity` is an invalid value for the `%s` css style property.", o));
      };
      _n = function(o, c) {
        o.indexOf("-") > -1 ? vn(o) : jt.test(o) ? st(o) : cn.test(c) && fn(o, c), typeof c == "number" && (isNaN(c) ? xt(o, c) : isFinite(c) || Bt(o, c));
      };
    }
    var pn = _n, En = /["'&<>]/;
    function Ee(o) {
      _(o);
      var c = "" + o, S = En.exec(c);
      if (!S)
        return c;
      var w, N = "", Z, oe = 0;
      for (Z = S.index; Z < c.length; Z++) {
        switch (c.charCodeAt(Z)) {
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
        oe !== Z && (N += c.substring(oe, Z)), oe = Z + 1, N += w;
      }
      return oe !== Z ? N + c.substring(oe, Z) : N;
    }
    function Fe(o) {
      return typeof o == "boolean" || typeof o == "number" ? "" + o : Ee(o);
    }
    var ot = /([A-Z])/g, Ve = /^ms-/;
    function en(o) {
      return o.replace(ot, "-$1").toLowerCase().replace(Ve, "-ms-");
    }
    var ut = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, xn = !1;
    function Nn(o) {
      !xn && ut.test(o) && (xn = !0, i("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(o)));
    }
    var j = Array.isArray;
    function Pe(o) {
      return j(o);
    }
    var Ie = "<script>", Oe = "<\/script>", nt = '<script src="', Ye = '<script type="module" src="', rt = '" async=""><\/script>';
    function Qe(o) {
      return _(o), ("" + o).replace(ze, Nt);
    }
    var ze = /(<\/|<)(s)(cript)/gi, Nt = function(o, c, S, w) {
      return "" + c + (S === "s" ? "\\u0073" : "\\u0053") + w;
    };
    function $t(o, c, S, w, N) {
      var Z = o === void 0 ? "" : o, oe = c === void 0 ? Ie : '<script nonce="' + Fe(c) + '">', be = [];
      if (S !== void 0 && be.push(oe, Qe(S), Oe), w !== void 0)
        for (var Re = 0; Re < w.length; Re++)
          be.push(nt, Fe(w[Re]), rt);
      if (N !== void 0)
        for (var Ue = 0; Ue < N.length; Ue++)
          be.push(Ye, Fe(N[Ue]), rt);
      return {
        bootstrapChunks: be,
        startInlineScript: oe,
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
    var Zt = 0, It = 1, Lt = 2, kt = 3, Tt = 4, ht = 5, rn = 6, mn = 7;
    function Rt(o, c) {
      return {
        insertionMode: o,
        selectedValue: c
      };
    }
    function gn(o, c, S) {
      switch (c) {
        case "select":
          return Rt(It, S.value != null ? S.value : S.defaultValue);
        case "svg":
          return Rt(Lt, null);
        case "math":
          return Rt(kt, null);
        case "foreignObject":
          return Rt(It, null);
        case "table":
          return Rt(Tt, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return Rt(ht, null);
        case "colgroup":
          return Rt(mn, null);
        case "tr":
          return Rt(rn, null);
      }
      return o.insertionMode >= Tt || o.insertionMode === Zt ? Rt(It, null) : o;
    }
    var on = null;
    function Ft(o) {
      var c = o.nextSuspenseID++;
      return o.boundaryPrefix + c.toString(16);
    }
    function Ht(o, c, S) {
      var w = o.idPrefix, N = ":" + w + "R" + c;
      return S > 0 && (N += "H" + S.toString(32)), N + ":";
    }
    function Pn(o) {
      return Fe(o);
    }
    var Rn = "<!-- -->";
    function Qn(o, c, S, w) {
      return c === "" ? w : (w && o.push(Rn), o.push(Pn(c)), !0);
    }
    function Wn(o, c, S, w) {
      S && w && o.push(Rn);
    }
    var Qt = /* @__PURE__ */ new Map();
    function bn(o) {
      var c = Qt.get(o);
      if (c !== void 0)
        return c;
      var S = Fe(en(o));
      return Qt.set(o, S), S;
    }
    var fr = ' style="', ir = ":", or = ";";
    function x(o, c, S) {
      if (typeof S != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var w = !0;
      for (var N in S)
        if ($.call(S, N)) {
          var Z = S[N];
          if (!(Z == null || typeof Z == "boolean" || Z === "")) {
            var oe = void 0, be = void 0, Re = N.indexOf("--") === 0;
            Re ? (oe = Fe(N), O(Z, N), be = Fe(("" + Z).trim())) : (pn(N, Z), oe = bn(N), typeof Z == "number" ? Z !== 0 && !$.call(Le, N) ? be = Z + "px" : be = "" + Z : (O(Z, N), be = Fe(("" + Z).trim()))), w ? (w = !1, o.push(fr, oe, ir, be)) : o.push(or, oe, ir, be);
          }
        }
      w || o.push(X);
    }
    var A = " ", z = '="', X = '"', ye = '=""';
    function B(o, c, S, w) {
      switch (S) {
        case "style": {
          x(o, c, w);
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
        var N = V(S);
        if (N !== null) {
          switch (typeof w) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!N.acceptsBooleans)
                return;
          }
          var Z = N.attributeName, oe = Z;
          switch (N.type) {
            case Y:
              w && o.push(A, oe, ye);
              return;
            case J:
              w === !0 ? o.push(A, oe, ye) : w === !1 || o.push(A, oe, z, Fe(w), X);
              return;
            case le:
              isNaN(w) || o.push(A, oe, z, Fe(w), X);
              break;
            case U:
              !isNaN(w) && w >= 1 && o.push(A, oe, z, Fe(w), X);
              break;
            default:
              N.sanitizeURL && (D(w, Z), w = "" + w, Nn(w)), o.push(A, oe, z, Fe(w), X);
          }
        } else if (he(S)) {
          switch (typeof w) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var be = S.toLowerCase().slice(0, 5);
              if (be !== "data-" && be !== "aria-")
                return;
            }
          }
          o.push(A, S, z, Fe(w), X);
        }
      }
    }
    var I = ">", Q = "/>";
    function pe(o, c, S) {
      if (c != null) {
        if (S != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof c != "object" || !("__html" in c))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var w = c.__html;
        w != null && (_(w), o.push("" + w));
      }
    }
    var Be = !1, je = !1, gt = !1, kn = !1, ln = !1, Ln = !1, lr = !1;
    function Vn(o, c) {
      {
        var S = o[c];
        if (S != null) {
          var w = Pe(S);
          o.multiple && !w ? i("The `%s` prop supplied to <select> must be an array if `multiple` is true.", c) : !o.multiple && w && i("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", c);
        }
      }
    }
    function Or(o, c, S) {
      Ge("select", c), Vn(c, "value"), Vn(c, "defaultValue"), c.value !== void 0 && c.defaultValue !== void 0 && !gt && (i("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), gt = !0), o.push(Fn("select"));
      var w = null, N = null;
      for (var Z in c)
        if ($.call(c, Z)) {
          var oe = c[Z];
          if (oe == null)
            continue;
          switch (Z) {
            case "children":
              w = oe;
              break;
            case "dangerouslySetInnerHTML":
              N = oe;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              B(o, S, Z, oe);
              break;
          }
        }
      return o.push(I), pe(o, N, w), w;
    }
    function hr(o) {
      var c = "";
      return e.Children.forEach(o, function(S) {
        S != null && (c += S, !ln && typeof S != "string" && typeof S != "number" && (ln = !0, i("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), c;
    }
    var Er = ' selected=""';
    function sr(o, c, S, w) {
      var N = w.selectedValue;
      o.push(Fn("option"));
      var Z = null, oe = null, be = null, Re = null;
      for (var Ue in c)
        if ($.call(c, Ue)) {
          var Xe = c[Ue];
          if (Xe == null)
            continue;
          switch (Ue) {
            case "children":
              Z = Xe;
              break;
            case "selected":
              be = Xe, lr || (i("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), lr = !0);
              break;
            case "dangerouslySetInnerHTML":
              Re = Xe;
              break;
            case "value":
              oe = Xe;
            default:
              B(o, S, Ue, Xe);
              break;
          }
        }
      if (N != null) {
        var at;
        if (oe !== null ? (D(oe, "value"), at = "" + oe) : (Re !== null && (Ln || (Ln = !0, i("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), at = hr(Z)), Pe(N))
          for (var tn = 0; tn < N.length; tn++) {
            D(N[tn], "value");
            var On = "" + N[tn];
            if (On === at) {
              o.push(Er);
              break;
            }
          }
        else
          D(N, "select.value"), "" + N === at && o.push(Er);
      } else
        be && o.push(Er);
      return o.push(I), pe(o, Re, Z), Z;
    }
    function Kr(o, c, S) {
      Ge("input", c), c.checked !== void 0 && c.defaultChecked !== void 0 && !je && (i("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", c.type), je = !0), c.value !== void 0 && c.defaultValue !== void 0 && !Be && (i("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", c.type), Be = !0), o.push(Fn("input"));
      var w = null, N = null, Z = null, oe = null;
      for (var be in c)
        if ($.call(c, be)) {
          var Re = c[be];
          if (Re == null)
            continue;
          switch (be) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              oe = Re;
              break;
            case "defaultValue":
              N = Re;
              break;
            case "checked":
              Z = Re;
              break;
            case "value":
              w = Re;
              break;
            default:
              B(o, S, be, Re);
              break;
          }
        }
      return Z !== null ? B(o, S, "checked", Z) : oe !== null && B(o, S, "checked", oe), w !== null ? B(o, S, "value", w) : N !== null && B(o, S, "value", N), o.push(Q), null;
    }
    function $o(o, c, S) {
      Ge("textarea", c), c.value !== void 0 && c.defaultValue !== void 0 && !kn && (i("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), kn = !0), o.push(Fn("textarea"));
      var w = null, N = null, Z = null;
      for (var oe in c)
        if ($.call(c, oe)) {
          var be = c[oe];
          if (be == null)
            continue;
          switch (oe) {
            case "children":
              Z = be;
              break;
            case "value":
              w = be;
              break;
            case "defaultValue":
              N = be;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              B(o, S, oe, be);
              break;
          }
        }
      if (w === null && N !== null && (w = N), o.push(I), Z != null) {
        if (i("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), w != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (Pe(Z)) {
          if (Z.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          _(Z[0]), w = "" + Z[0];
        }
        _(Z), w = "" + Z;
      }
      return typeof w == "string" && w[0] === `
` && o.push(Yr), w !== null && (D(w, "value"), o.push(Pn("" + w))), null;
    }
    function Io(o, c, S, w) {
      o.push(Fn(S));
      for (var N in c)
        if ($.call(c, N)) {
          var Z = c[N];
          if (Z == null)
            continue;
          switch (N) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(S + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              B(o, w, N, Z);
              break;
          }
        }
      return o.push(Q), null;
    }
    function Na(o, c, S) {
      o.push(Fn("menuitem"));
      for (var w in c)
        if ($.call(c, w)) {
          var N = c[w];
          if (N == null)
            continue;
          switch (w) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              B(o, S, w, N);
              break;
          }
        }
      return o.push(I), null;
    }
    function Ho(o, c, S) {
      o.push(Fn("title"));
      var w = null;
      for (var N in c)
        if ($.call(c, N)) {
          var Z = c[N];
          if (Z == null)
            continue;
          switch (N) {
            case "children":
              w = Z;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              B(o, S, N, Z);
              break;
          }
        }
      o.push(I);
      {
        var oe = Array.isArray(w) && w.length < 2 ? w[0] || null : w;
        Array.isArray(w) && w.length > 1 ? i("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : oe != null && oe.$$typeof != null ? i("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : oe != null && typeof oe != "string" && typeof oe != "number" && i("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return w;
    }
    function Fa(o, c, S, w) {
      o.push(Fn(S));
      var N = null, Z = null;
      for (var oe in c)
        if ($.call(c, oe)) {
          var be = c[oe];
          if (be == null)
            continue;
          switch (oe) {
            case "children":
              N = be;
              break;
            case "dangerouslySetInnerHTML":
              Z = be;
              break;
            default:
              B(o, w, oe, be);
              break;
          }
        }
      return o.push(I), pe(o, Z, N), typeof N == "string" ? (o.push(Pn(N)), null) : N;
    }
    function ur(o, c, S, w) {
      o.push(Fn(S));
      var N = null, Z = null;
      for (var oe in c)
        if ($.call(c, oe)) {
          var be = c[oe];
          if (be == null)
            continue;
          switch (oe) {
            case "children":
              N = be;
              break;
            case "dangerouslySetInnerHTML":
              Z = be;
              break;
            case "style":
              x(o, w, be);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              he(oe) && typeof be != "function" && typeof be != "symbol" && o.push(A, oe, z, Fe(be), X);
              break;
          }
        }
      return o.push(I), pe(o, Z, N), N;
    }
    var Yr = `
`;
    function la(o, c, S, w) {
      o.push(Fn(S));
      var N = null, Z = null;
      for (var oe in c)
        if ($.call(c, oe)) {
          var be = c[oe];
          if (be == null)
            continue;
          switch (oe) {
            case "children":
              N = be;
              break;
            case "dangerouslySetInnerHTML":
              Z = be;
              break;
            default:
              B(o, w, oe, be);
              break;
          }
        }
      if (o.push(I), Z != null) {
        if (N != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof Z != "object" || !("__html" in Z))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var Re = Z.__html;
        Re != null && (typeof Re == "string" && Re.length > 0 && Re[0] === `
` ? o.push(Yr, Re) : (_(Re), o.push("" + Re)));
      }
      return typeof N == "string" && N[0] === `
` && o.push(Yr), N;
    }
    var Kt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, pr = /* @__PURE__ */ new Map();
    function Fn(o) {
      var c = pr.get(o);
      if (c === void 0) {
        if (!Kt.test(o))
          throw new Error("Invalid tag: " + o);
        c = "<" + o, pr.set(o, c);
      }
      return c;
    }
    var kr = "<!DOCTYPE html>";
    function mr(o, c, S, w, N) {
      switch (Je(c, S), qt(c, S), Mn(c, S, null), !S.suppressContentEditableWarning && S.contentEditable && S.children != null && i("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), N.insertionMode !== Lt && N.insertionMode !== kt && c.indexOf("-") === -1 && typeof S.is != "string" && c.toLowerCase() !== c && i("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", c), c) {
        case "select":
          return Or(o, S, w);
        case "option":
          return sr(o, S, w, N);
        case "textarea":
          return $o(o, S, w);
        case "input":
          return Kr(o, S, w);
        case "menuitem":
          return Na(o, S, w);
        case "title":
          return Ho(o, S, w);
        case "listing":
        case "pre":
          return la(o, S, c, w);
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
          return Io(o, S, c, w);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return Fa(o, S, c, w);
        case "html":
          return N.insertionMode === Zt && o.push(kr), Fa(o, S, c, w);
        default:
          return c.indexOf("-") === -1 && typeof S.is != "string" ? Fa(o, S, c, w) : ur(o, S, c, w);
      }
    }
    var sa = "</", gr = ">";
    function jn(o, c, S) {
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
          o.push(sa, c, gr);
      }
    }
    function za(o, c) {
      for (var S = c.bootstrapChunks, w = 0; w < S.length - 1; w++)
        d(o, S[w]);
      return w < S.length ? f(o, S[w]) : !0;
    }
    var Ba = '<template id="', Pi = '"></template>';
    function Ri(o, c, S) {
      d(o, Ba), d(o, c.placeholderPrefix);
      var w = S.toString(16);
      return d(o, w), f(o, Pi);
    }
    var Li = "<!--$-->", Wo = '<!--$?--><template id="', Vo = '"></template>', ua = "<!--$!-->", ca = "<!--/$-->", da = "<template", Xr = '"', jo = ' data-dgst="', qr = ' data-msg="', $a = ' data-stck="', Ia = "></template>";
    function Mr(o, c) {
      return f(o, Li);
    }
    function _r(o, c, S) {
      if (d(o, Wo), S === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return d(o, S), f(o, Vo);
    }
    function fa(o, c, S, w, N) {
      var Z;
      return Z = f(o, ua), d(o, da), S && (d(o, jo), d(o, Fe(S)), d(o, Xr)), w && (d(o, qr), d(o, Fe(w)), d(o, Xr)), N && (d(o, $a), d(o, Fe(N)), d(o, Xr)), Z = f(o, Ia), Z;
    }
    function Di(o, c) {
      return f(o, ca);
    }
    function Ha(o, c) {
      return f(o, ca);
    }
    function Oi(o, c) {
      return f(o, ca);
    }
    var ha = '<div hidden id="', zn = '">', Mi = "</div>", pa = '<svg aria-hidden="true" style="display:none" id="', Uo = '">', _i = "</svg>", ma = '<math aria-hidden="true" style="display:none" id="', Ni = '">', Fi = "</math>", ga = '<table hidden id="', ya = '">', zi = "</table>", Bi = '<table hidden><tbody id="', $i = '">', Wa = "</tbody></table>", Ii = '<table hidden><tr id="', b = '">', P = "</tr></table>", F = '<table hidden><colgroup id="', G = '">', ve = "</colgroup></table>";
    function ge(o, c, S, w) {
      switch (S.insertionMode) {
        case Zt:
        case It:
          return d(o, ha), d(o, c.segmentPrefix), d(o, w.toString(16)), f(o, zn);
        case Lt:
          return d(o, pa), d(o, c.segmentPrefix), d(o, w.toString(16)), f(o, Uo);
        case kt:
          return d(o, ma), d(o, c.segmentPrefix), d(o, w.toString(16)), f(o, Ni);
        case Tt:
          return d(o, ga), d(o, c.segmentPrefix), d(o, w.toString(16)), f(o, ya);
        case ht:
          return d(o, Bi), d(o, c.segmentPrefix), d(o, w.toString(16)), f(o, $i);
        case rn:
          return d(o, Ii), d(o, c.segmentPrefix), d(o, w.toString(16)), f(o, b);
        case mn:
          return d(o, F), d(o, c.segmentPrefix), d(o, w.toString(16)), f(o, G);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Ce(o, c) {
      switch (c.insertionMode) {
        case Zt:
        case It:
          return f(o, Mi);
        case Lt:
          return f(o, _i);
        case kt:
          return f(o, Fi);
        case Tt:
          return f(o, zi);
        case ht:
          return f(o, Wa);
        case rn:
          return f(o, P);
        case mn:
          return f(o, ve);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Ne = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", tt = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', yt = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', ct = Ne + ';$RS("', Xt = '$RS("', Bn = '","', Un = '")<\/script>';
    function Kn(o, c, S) {
      d(o, c.startInlineScript), c.sentCompleteSegmentFunction ? d(o, Xt) : (c.sentCompleteSegmentFunction = !0, d(o, ct)), d(o, c.segmentPrefix);
      var w = S.toString(16);
      return d(o, w), d(o, Bn), d(o, c.placeholderPrefix), d(o, w), f(o, Un);
    }
    var va = tt + ';$RC("', Hi = '$RC("', Va = '","', Xu = '")<\/script>';
    function qu(o, c, S, w) {
      if (d(o, c.startInlineScript), c.sentCompleteBoundaryFunction ? d(o, Hi) : (c.sentCompleteBoundaryFunction = !0, d(o, va)), S === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var N = w.toString(16);
      return d(o, S), d(o, Va), d(o, c.segmentPrefix), d(o, N), f(o, Xu);
    }
    var Gu = yt + ';$RX("', Zu = '$RX("', Qu = '"', Ju = ")<\/script>", Ko = ",";
    function ec(o, c, S, w, N, Z) {
      if (d(o, c.startInlineScript), c.sentClientRenderFunction ? d(o, Zu) : (c.sentClientRenderFunction = !0, d(o, Gu)), S === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return d(o, S), d(o, Qu), (w || N || Z) && (d(o, Ko), d(o, Yo(w || ""))), (N || Z) && (d(o, Ko), d(o, Yo(N || ""))), Z && (d(o, Ko), d(o, Yo(Z))), f(o, Ju);
    }
    var tc = /[<\u2028\u2029]/g;
    function Yo(o) {
      var c = JSON.stringify(o);
      return c.replace(tc, function(S) {
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
    function nc(o, c) {
      var S = $t(c, void 0);
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
    function Xo() {
      return {
        insertionMode: It,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function Jl(o, c, S, w) {
      return S.generateStaticMarkup ? (o.push(Fe(c)), !1) : Qn(o, c, S, w);
    }
    function es(o, c, S, w) {
      if (!c.generateStaticMarkup)
        return Wn(o, c, S, w);
    }
    function qo(o, c) {
      return c.generateStaticMarkup ? !0 : Mr(o);
    }
    function Jn(o, c, S, w, N) {
      return c.generateStaticMarkup ? !0 : fa(o, c, S, w, N);
    }
    function rc(o, c) {
      return c.generateStaticMarkup ? !0 : Di(o);
    }
    function ts(o, c) {
      return c.generateStaticMarkup ? !0 : Oi(o);
    }
    var Yn = Object.assign, ns = Symbol.for("react.element"), Go = Symbol.for("react.portal"), Wi = Symbol.for("react.fragment"), Vi = Symbol.for("react.strict_mode"), ji = Symbol.for("react.profiler"), ja = Symbol.for("react.provider"), Ua = Symbol.for("react.context"), Ka = Symbol.for("react.forward_ref"), xa = Symbol.for("react.suspense"), Zo = Symbol.for("react.suspense_list"), Qo = Symbol.for("react.memo"), Ui = Symbol.for("react.lazy"), ac = Symbol.for("react.scope"), rs = Symbol.for("react.debug_trace_mode"), ic = Symbol.for("react.legacy_hidden"), oc = Symbol.for("react.default_value"), as = Symbol.iterator, is = "@@iterator";
    function sn(o) {
      if (o === null || typeof o != "object")
        return null;
      var c = as && o[as] || o[is];
      return typeof c == "function" ? c : null;
    }
    function Ya(o, c, S) {
      var w = o.displayName;
      if (w)
        return w;
      var N = c.displayName || c.name || "";
      return N !== "" ? S + "(" + N + ")" : S;
    }
    function Jo(o) {
      return o.displayName || "Context";
    }
    function an(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && i("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case Wi:
          return "Fragment";
        case Go:
          return "Portal";
        case ji:
          return "Profiler";
        case Vi:
          return "StrictMode";
        case xa:
          return "Suspense";
        case Zo:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case Ua:
            var c = o;
            return Jo(c) + ".Consumer";
          case ja:
            var S = o;
            return Jo(S._context) + ".Provider";
          case Ka:
            return Ya(o, o.render, "ForwardRef");
          case Qo:
            var w = o.displayName || null;
            return w !== null ? w : an(o.type) || "Memo";
          case Ui: {
            var N = o, Z = N._payload, oe = N._init;
            try {
              return an(oe(Z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ba = 0, el, tl, nl, rl, al, os, ls;
    function Ki() {
    }
    Ki.__reactDisabledLog = !0;
    function il() {
      {
        if (ba === 0) {
          el = console.log, tl = console.info, nl = console.warn, rl = console.error, al = console.group, os = console.groupCollapsed, ls = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: Ki,
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
        ba++;
      }
    }
    function Xa() {
      {
        if (ba--, ba === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Yn({}, o, {
              value: el
            }),
            info: Yn({}, o, {
              value: tl
            }),
            warn: Yn({}, o, {
              value: nl
            }),
            error: Yn({}, o, {
              value: rl
            }),
            group: Yn({}, o, {
              value: al
            }),
            groupCollapsed: Yn({}, o, {
              value: os
            }),
            groupEnd: Yn({}, o, {
              value: ls
            })
          });
        }
        ba < 0 && i("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var qa = r.ReactCurrentDispatcher, Sa;
    function Ga(o, c, S) {
      {
        if (Sa === void 0)
          try {
            throw Error();
          } catch (N) {
            var w = N.stack.trim().match(/\n( *(at )?)/);
            Sa = w && w[1] || "";
          }
        return `
` + Sa + o;
      }
    }
    var Za = !1, Yi;
    {
      var ss = typeof WeakMap == "function" ? WeakMap : Map;
      Yi = new ss();
    }
    function ol(o, c) {
      if (!o || Za)
        return "";
      {
        var S = Yi.get(o);
        if (S !== void 0)
          return S;
      }
      var w;
      Za = !0;
      var N = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Z;
      Z = qa.current, qa.current = null, il();
      try {
        if (c) {
          var oe = function() {
            throw Error();
          };
          if (Object.defineProperty(oe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(oe, []);
            } catch (rr) {
              w = rr;
            }
            Reflect.construct(o, [], oe);
          } else {
            try {
              oe.call();
            } catch (rr) {
              w = rr;
            }
            o.call(oe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (rr) {
            w = rr;
          }
          o();
        }
      } catch (rr) {
        if (rr && w && typeof rr.stack == "string") {
          for (var be = rr.stack.split(`
`), Re = w.stack.split(`
`), Ue = be.length - 1, Xe = Re.length - 1; Ue >= 1 && Xe >= 0 && be[Ue] !== Re[Xe]; )
            Xe--;
          for (; Ue >= 1 && Xe >= 0; Ue--, Xe--)
            if (be[Ue] !== Re[Xe]) {
              if (Ue !== 1 || Xe !== 1)
                do
                  if (Ue--, Xe--, Xe < 0 || be[Ue] !== Re[Xe]) {
                    var at = `
` + be[Ue].replace(" at new ", " at ");
                    return o.displayName && at.includes("<anonymous>") && (at = at.replace("<anonymous>", o.displayName)), typeof o == "function" && Yi.set(o, at), at;
                  }
                while (Ue >= 1 && Xe >= 0);
              break;
            }
        }
      } finally {
        Za = !1, qa.current = Z, Xa(), Error.prepareStackTrace = N;
      }
      var tn = o ? o.displayName || o.name : "", On = tn ? Ga(tn) : "";
      return typeof o == "function" && Yi.set(o, On), On;
    }
    function ll(o, c, S) {
      return ol(o, !0);
    }
    function sl(o, c, S) {
      return ol(o, !1);
    }
    function us(o) {
      var c = o.prototype;
      return !!(c && c.isReactComponent);
    }
    function Ea(o, c, S) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return ol(o, us(o));
      if (typeof o == "string")
        return Ga(o);
      switch (o) {
        case xa:
          return Ga("Suspense");
        case Zo:
          return Ga("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case Ka:
            return sl(o.render);
          case Qo:
            return Ea(o.type, c, S);
          case Ui: {
            var w = o, N = w._payload, Z = w._init;
            try {
              return Ea(Z(N), c, S);
            } catch {
            }
          }
        }
      return "";
    }
    var ul = {}, Xi = r.ReactDebugCurrentFrame;
    function Gr(o) {
      if (o) {
        var c = o._owner, S = Ea(o.type, o._source, c ? c.type : null);
        Xi.setExtraStackFrame(S);
      } else
        Xi.setExtraStackFrame(null);
    }
    function cl(o, c, S, w, N) {
      {
        var Z = Function.call.bind($);
        for (var oe in o)
          if (Z(o, oe)) {
            var be = void 0;
            try {
              if (typeof o[oe] != "function") {
                var Re = Error((w || "React class") + ": " + S + " type `" + oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[oe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Re.name = "Invariant Violation", Re;
              }
              be = o[oe](c, oe, w, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ue) {
              be = Ue;
            }
            be && !(be instanceof Error) && (Gr(N), i("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", w || "React class", S, oe, typeof be), Gr(null)), be instanceof Error && !(be.message in ul) && (ul[be.message] = !0, Gr(N), i("Failed %s type: %s", S, be.message), Gr(null));
          }
      }
    }
    var dl;
    dl = {};
    var Nr = {};
    Object.freeze(Nr);
    function cs(o, c) {
      {
        var S = o.contextTypes;
        if (!S)
          return Nr;
        var w = {};
        for (var N in S)
          w[N] = c[N];
        {
          var Z = an(o) || "Unknown";
          cl(S, w, "context", Z);
        }
        return w;
      }
    }
    function Zr(o, c, S, w) {
      {
        if (typeof o.getChildContext != "function") {
          {
            var N = an(c) || "Unknown";
            dl[N] || (dl[N] = !0, i("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", N, N));
          }
          return S;
        }
        var Z = o.getChildContext();
        for (var oe in Z)
          if (!(oe in w))
            throw new Error((an(c) || "Unknown") + '.getChildContext(): key "' + oe + '" is not defined in childContextTypes.');
        {
          var be = an(c) || "Unknown";
          cl(w, Z, "child context", be);
        }
        return Yn({}, S, Z);
      }
    }
    var Qr;
    Qr = {};
    var fl = null, yr = null;
    function qi(o) {
      o.context._currentValue2 = o.parentValue;
    }
    function Gi(o) {
      o.context._currentValue2 = o.value;
    }
    function Qa(o, c) {
      if (o !== c) {
        qi(o);
        var S = o.parent, w = c.parent;
        if (S === null) {
          if (w !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (w === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          Qa(S, w);
        }
        Gi(c);
      }
    }
    function hl(o) {
      qi(o);
      var c = o.parent;
      c !== null && hl(c);
    }
    function Ja(o) {
      var c = o.parent;
      c !== null && Ja(c), Gi(o);
    }
    function ds(o, c) {
      qi(o);
      var S = o.parent;
      if (S === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      S.depth === c.depth ? Qa(S, c) : ds(S, c);
    }
    function fs(o, c) {
      var S = c.parent;
      if (S === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      o.depth === S.depth ? Qa(o, S) : fs(o, S), Gi(c);
    }
    function Zi(o) {
      var c = yr, S = o;
      c !== S && (c === null ? Ja(S) : S === null ? hl(c) : c.depth === S.depth ? Qa(c, S) : c.depth > S.depth ? ds(c, S) : fs(c, S), yr = S);
    }
    function ei(o, c) {
      var S;
      S = o._currentValue2, o._currentValue2 = c, o._currentRenderer2 !== void 0 && o._currentRenderer2 !== null && o._currentRenderer2 !== Qr && i("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), o._currentRenderer2 = Qr;
      var w = yr, N = {
        parent: w,
        depth: w === null ? 0 : w.depth + 1,
        context: o,
        parentValue: S,
        value: c
      };
      return yr = N, N;
    }
    function pl(o) {
      var c = yr;
      if (c === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      c.context !== o && i("The parent context is not the expected context. This is probably a bug in React.");
      {
        var S = c.parentValue;
        S === oc ? c.context._currentValue2 = c.context._defaultValue : c.context._currentValue2 = S, o._currentRenderer2 !== void 0 && o._currentRenderer2 !== null && o._currentRenderer2 !== Qr && i("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), o._currentRenderer2 = Qr;
      }
      return yr = c.parent;
    }
    function lc() {
      return yr;
    }
    function ka(o) {
      var c = o._currentValue2;
      return c;
    }
    function Qi(o) {
      return o._reactInternals;
    }
    function ml(o, c) {
      o._reactInternals = c;
    }
    var Ji = {}, eo = {}, ti, to, Ta, ni, no, wa, ro, ao, io;
    {
      ti = /* @__PURE__ */ new Set(), to = /* @__PURE__ */ new Set(), Ta = /* @__PURE__ */ new Set(), ro = /* @__PURE__ */ new Set(), ni = /* @__PURE__ */ new Set(), ao = /* @__PURE__ */ new Set(), io = /* @__PURE__ */ new Set();
      var hs = /* @__PURE__ */ new Set();
      wa = function(o, c) {
        if (!(o === null || typeof o == "function")) {
          var S = c + "_" + o;
          hs.has(S) || (hs.add(S), i("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", c, o));
        }
      }, no = function(o, c) {
        if (c === void 0) {
          var S = an(o) || "Component";
          ni.has(S) || (ni.add(S), i("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", S));
        }
      };
    }
    function ps(o, c) {
      {
        var S = o.constructor, w = S && an(S) || "ReactClass", N = w + "." + c;
        if (Ji[N])
          return;
        i(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, c, c, w), Ji[N] = !0;
      }
    }
    var ms = {
      isMounted: function(o) {
        return !1;
      },
      enqueueSetState: function(o, c, S) {
        var w = Qi(o);
        w.queue === null ? ps(o, "setState") : (w.queue.push(c), S != null && wa(S, "setState"));
      },
      enqueueReplaceState: function(o, c, S) {
        var w = Qi(o);
        w.replace = !0, w.queue = [c], S != null && wa(S, "setState");
      },
      enqueueForceUpdate: function(o, c) {
        var S = Qi(o);
        S.queue === null ? ps(o, "forceUpdate") : c != null && wa(c, "setState");
      }
    };
    function sc(o, c, S, w, N) {
      var Z = S(N, w);
      no(c, Z);
      var oe = Z == null ? w : Yn({}, w, Z);
      return oe;
    }
    function uc(o, c, S) {
      var w = Nr, N = o.contextType;
      if ("contextType" in o) {
        var Z = (
          // Allow null for conditional declaration
          N === null || N !== void 0 && N.$$typeof === Ua && N._context === void 0
        );
        if (!Z && !io.has(o)) {
          io.add(o);
          var oe = "";
          N === void 0 ? oe = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof N != "object" ? oe = " However, it is set to a " + typeof N + "." : N.$$typeof === ja ? oe = " Did you accidentally pass the Context.Provider instead?" : N._context !== void 0 ? oe = " Did you accidentally pass the Context.Consumer instead?" : oe = " However, it is set to an object with keys {" + Object.keys(N).join(", ") + "}.", i("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", an(o) || "Component", oe);
        }
      }
      typeof N == "object" && N !== null ? w = ka(N) : w = S;
      var be = new o(c, w);
      {
        if (typeof o.getDerivedStateFromProps == "function" && (be.state === null || be.state === void 0)) {
          var Re = an(o) || "Component";
          ti.has(Re) || (ti.add(Re), i("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", Re, be.state === null ? "null" : "undefined", Re));
        }
        if (typeof o.getDerivedStateFromProps == "function" || typeof be.getSnapshotBeforeUpdate == "function") {
          var Ue = null, Xe = null, at = null;
          if (typeof be.componentWillMount == "function" && be.componentWillMount.__suppressDeprecationWarning !== !0 ? Ue = "componentWillMount" : typeof be.UNSAFE_componentWillMount == "function" && (Ue = "UNSAFE_componentWillMount"), typeof be.componentWillReceiveProps == "function" && be.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Xe = "componentWillReceiveProps" : typeof be.UNSAFE_componentWillReceiveProps == "function" && (Xe = "UNSAFE_componentWillReceiveProps"), typeof be.componentWillUpdate == "function" && be.componentWillUpdate.__suppressDeprecationWarning !== !0 ? at = "componentWillUpdate" : typeof be.UNSAFE_componentWillUpdate == "function" && (at = "UNSAFE_componentWillUpdate"), Ue !== null || Xe !== null || at !== null) {
            var tn = an(o) || "Component", On = typeof o.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Ta.has(tn) || (Ta.add(tn), i(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, tn, On, Ue !== null ? `
  ` + Ue : "", Xe !== null ? `
  ` + Xe : "", at !== null ? `
  ` + at : ""));
          }
        }
      }
      return be;
    }
    function gs(o, c, S) {
      {
        var w = an(c) || "Component", N = o.render;
        N || (c.prototype && typeof c.prototype.render == "function" ? i("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", w) : i("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", w)), o.getInitialState && !o.getInitialState.isReactClassApproved && !o.state && i("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", w), o.getDefaultProps && !o.getDefaultProps.isReactClassApproved && i("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", w), o.propTypes && i("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", w), o.contextType && i("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", w), o.contextTypes && i("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", w), c.contextType && c.contextTypes && !ao.has(c) && (ao.add(c), i("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", w)), typeof o.componentShouldUpdate == "function" && i("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", w), c.prototype && c.prototype.isPureReactComponent && typeof o.shouldComponentUpdate < "u" && i("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", an(c) || "A pure component"), typeof o.componentDidUnmount == "function" && i("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", w), typeof o.componentDidReceiveProps == "function" && i("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", w), typeof o.componentWillRecieveProps == "function" && i("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", w), typeof o.UNSAFE_componentWillRecieveProps == "function" && i("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", w);
        var Z = o.props !== S;
        o.props !== void 0 && Z && i("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", w, w), o.defaultProps && i("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", w, w), typeof o.getSnapshotBeforeUpdate == "function" && typeof o.componentDidUpdate != "function" && !to.has(c) && (to.add(c), i("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", an(c))), typeof o.getDerivedStateFromProps == "function" && i("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", w), typeof o.getDerivedStateFromError == "function" && i("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", w), typeof c.getSnapshotBeforeUpdate == "function" && i("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", w);
        var oe = o.state;
        oe && (typeof oe != "object" || Pe(oe)) && i("%s.state: must be set to an object or null", w), typeof o.getChildContext == "function" && typeof c.childContextTypes != "object" && i("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", w);
      }
    }
    function cc(o, c) {
      var S = c.state;
      if (typeof c.componentWillMount == "function") {
        if (c.componentWillMount.__suppressDeprecationWarning !== !0) {
          var w = an(o) || "Unknown";
          eo[w] || (n(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            w
          ), eo[w] = !0);
        }
        c.componentWillMount();
      }
      typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), S !== c.state && (i("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", an(o) || "Component"), ms.enqueueReplaceState(c, c.state, null));
    }
    function dc(o, c, S, w) {
      if (o.queue !== null && o.queue.length > 0) {
        var N = o.queue, Z = o.replace;
        if (o.queue = null, o.replace = !1, Z && N.length === 1)
          c.state = N[0];
        else {
          for (var oe = Z ? N[0] : c.state, be = !0, Re = Z ? 1 : 0; Re < N.length; Re++) {
            var Ue = N[Re], Xe = typeof Ue == "function" ? Ue.call(c, oe, S, w) : Ue;
            Xe != null && (be ? (be = !1, oe = Yn({}, oe, Xe)) : Yn(oe, Xe));
          }
          c.state = oe;
        }
      } else
        o.queue = null;
    }
    function oo(o, c, S, w) {
      gs(o, c, S);
      var N = o.state !== void 0 ? o.state : null;
      o.updater = ms, o.props = S, o.state = N;
      var Z = {
        queue: [],
        replace: !1
      };
      ml(o, Z);
      var oe = c.contextType;
      if (typeof oe == "object" && oe !== null ? o.context = ka(oe) : o.context = w, o.state === S) {
        var be = an(c) || "Component";
        ro.has(be) || (ro.add(be), i("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", be));
      }
      var Re = c.getDerivedStateFromProps;
      typeof Re == "function" && (o.state = sc(o, c, Re, N, S)), typeof c.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (cc(c, o), dc(Z, o, S, w));
    }
    var lo = {
      id: 1,
      overflow: ""
    };
    function fc(o) {
      var c = o.overflow, S = o.id, w = S & ~hc(S);
      return w.toString(32) + c;
    }
    function gl(o, c, S) {
      var w = o.id, N = o.overflow, Z = so(w) - 1, oe = w & ~(1 << Z), be = S + 1, Re = so(c) + Z;
      if (Re > 30) {
        var Ue = Z - Z % 5, Xe = (1 << Ue) - 1, at = (oe & Xe).toString(32), tn = oe >> Ue, On = Z - Ue, rr = so(c) + On, Bs = be << On, $s = Bs | tn, Is = at + N;
        return {
          id: 1 << rr | $s,
          overflow: Is
        };
      } else {
        var wo = be << Z, bm = wo | oe, Sm = N;
        return {
          id: 1 << Re | bm,
          overflow: Sm
        };
      }
    }
    function so(o) {
      return 32 - pc(o);
    }
    function hc(o) {
      return 1 << so(o) - 1;
    }
    var pc = Math.clz32 ? Math.clz32 : Tr, mc = Math.log, gc = Math.LN2;
    function Tr(o) {
      var c = o >>> 0;
      return c === 0 ? 32 : 31 - (mc(c) / gc | 0) | 0;
    }
    function yl(o, c) {
      return o === c && (o !== 0 || 1 / o === 1 / c) || o !== o && c !== c;
    }
    var uo = typeof Object.is == "function" ? Object.is : yl, At = null, Jr = null, ea = null, Wt = null, er = !1, ta = !1, co = 0, Dn = null, wr = 0, na = 25, vr = !1, ra;
    function Cr() {
      if (At === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return vr && i("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), At;
    }
    function yc(o, c) {
      if (c === null)
        return i("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ra), !1;
      o.length !== c.length && i(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ra, "[" + o.join(", ") + "]", "[" + c.join(", ") + "]");
      for (var S = 0; S < c.length && S < o.length; S++)
        if (!uo(o[S], c[S]))
          return !1;
      return !0;
    }
    function ys() {
      if (wr > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function fo() {
      return Wt === null ? ea === null ? (er = !1, ea = Wt = ys()) : (er = !0, Wt = ea) : Wt.next === null ? (er = !1, Wt = Wt.next = ys()) : (er = !0, Wt = Wt.next), Wt;
    }
    function vl(o, c) {
      At = c, Jr = o, vr = !1, co = 0;
    }
    function vc(o, c, S, w) {
      for (; ta; )
        ta = !1, co = 0, wr += 1, Wt = null, S = o(c, w);
      return ri(), S;
    }
    function vs() {
      var o = co !== 0;
      return o;
    }
    function ri() {
      vr = !1, At = null, Jr = null, ta = !1, ea = null, wr = 0, Dn = null, Wt = null;
    }
    function xc(o) {
      return vr && i("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), ka(o);
    }
    function xs(o) {
      return ra = "useContext", Cr(), ka(o);
    }
    function ho(o, c) {
      return typeof c == "function" ? c(o) : c;
    }
    function bc(o) {
      return ra = "useState", bs(
        ho,
        // useReducer has a special case to support lazy useState initializers
        o
      );
    }
    function bs(o, c, S) {
      if (o !== ho && (ra = "useReducer"), At = Cr(), Wt = fo(), er) {
        var w = Wt.queue, N = w.dispatch;
        if (Dn !== null) {
          var Z = Dn.get(w);
          if (Z !== void 0) {
            Dn.delete(w);
            var oe = Wt.memoizedState, be = Z;
            do {
              var Re = be.action;
              vr = !0, oe = o(oe, Re), vr = !1, be = be.next;
            } while (be !== null);
            return Wt.memoizedState = oe, [oe, N];
          }
        }
        return [Wt.memoizedState, N];
      } else {
        vr = !0;
        var Ue;
        o === ho ? Ue = typeof c == "function" ? c() : c : Ue = S !== void 0 ? S(c) : c, vr = !1, Wt.memoizedState = Ue;
        var Xe = Wt.queue = {
          last: null,
          dispatch: null
        }, at = Xe.dispatch = kc.bind(null, At, Xe);
        return [Wt.memoizedState, at];
      }
    }
    function Ss(o, c) {
      At = Cr(), Wt = fo();
      var S = c === void 0 ? null : c;
      if (Wt !== null) {
        var w = Wt.memoizedState;
        if (w !== null && S !== null) {
          var N = w[1];
          if (yc(S, N))
            return w[0];
        }
      }
      vr = !0;
      var Z = o();
      return vr = !1, Wt.memoizedState = [Z, S], Z;
    }
    function Sc(o) {
      At = Cr(), Wt = fo();
      var c = Wt.memoizedState;
      if (c === null) {
        var S = {
          current: o
        };
        return Object.seal(S), Wt.memoizedState = S, S;
      } else
        return c;
    }
    function Ec(o, c) {
      ra = "useLayoutEffect", i("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function kc(o, c, S) {
      if (wr >= na)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (o === At) {
        ta = !0;
        var w = {
          action: S,
          next: null
        };
        Dn === null && (Dn = /* @__PURE__ */ new Map());
        var N = Dn.get(c);
        if (N === void 0)
          Dn.set(c, w);
        else {
          for (var Z = N; Z.next !== null; )
            Z = Z.next;
          Z.next = w;
        }
      }
    }
    function Tc(o, c) {
      return Ss(function() {
        return o;
      }, c);
    }
    function wc(o, c, S) {
      return Cr(), c(o._source);
    }
    function Cc(o, c, S) {
      if (S === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return S();
    }
    function Ac(o) {
      return Cr(), o;
    }
    function po() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function Es() {
      return Cr(), [!1, po];
    }
    function xl() {
      var o = Jr, c = fc(o.treeContext), S = ii;
      if (S === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var w = co++;
      return Ht(S, c, w);
    }
    function ai() {
    }
    var ks = {
      readContext: xc,
      useContext: xs,
      useMemo: Ss,
      useReducer: bs,
      useRef: Sc,
      useState: bc,
      useInsertionEffect: ai,
      useLayoutEffect: Ec,
      useCallback: Tc,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: ai,
      // Effects are not run in the server environment.
      useEffect: ai,
      // Debugging effect
      useDebugValue: ai,
      useDeferredValue: Ac,
      useTransition: Es,
      useId: xl,
      // Subscriptions are not setup in a server environment.
      useMutableSource: wc,
      useSyncExternalStore: Cc
    }, ii = null;
    function mo(o) {
      ii = o;
    }
    function bl(o) {
      try {
        var c = "", S = o;
        do {
          switch (S.tag) {
            case 0:
              c += Ga(S.type, null, null);
              break;
            case 1:
              c += sl(S.type, null, null);
              break;
            case 2:
              c += ll(S.type, null, null);
              break;
          }
          S = S.parent;
        } while (S);
        return c;
      } catch (w) {
        return `
Error generating stack: ` + w.message + `
` + w.stack;
      }
    }
    var Fr = r.ReactCurrentDispatcher, go = r.ReactDebugCurrentFrame, yo = 0, aa = 1, Ts = 2, Sl = 3, ia = 4, Pc = 0, ws = 1, xr = 2, Rc = 12800;
    function Lc(o) {
      return console.error(o), null;
    }
    function oi() {
    }
    function El(o, c, S, w, N, Z, oe, be, Re) {
      var Ue = [], Xe = /* @__PURE__ */ new Set(), at = {
        destination: null,
        responseState: c,
        progressiveChunkSize: w === void 0 ? Rc : w,
        status: Pc,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: Xe,
        pingedTasks: Ue,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: N === void 0 ? Lc : N,
        onAllReady: Z === void 0 ? oi : Z,
        onShellReady: oe === void 0 ? oi : oe,
        onShellError: be === void 0 ? oi : be,
        onFatalError: Re === void 0 ? oi : Re
      }, tn = zr(
        at,
        0,
        null,
        S,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      tn.parentFlushed = !0;
      var On = li(at, o, null, tn, Xe, Nr, fl, lo);
      return Ue.push(On), at;
    }
    function vo(o, c) {
      var S = o.pingedTasks;
      S.push(c), S.length === 1 && p(function() {
        return Fs(o);
      });
    }
    function Ar(o, c) {
      return {
        id: on,
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
    function li(o, c, S, w, N, Z, oe, be) {
      o.allPendingTasks++, S === null ? o.pendingRootTasks++ : S.pendingTasks++;
      var Re = {
        node: c,
        ping: function() {
          return vo(o, Re);
        },
        blockedBoundary: S,
        blockedSegment: w,
        abortSet: N,
        legacyContext: Z,
        context: oe,
        treeContext: be
      };
      return Re.componentStack = null, N.add(Re), Re;
    }
    function zr(o, c, S, w, N, Z) {
      return {
        status: yo,
        id: -1,
        // lazily assigned later
        index: c,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: w,
        boundary: S,
        lastPushedText: N,
        textEmbedded: Z
      };
    }
    var br = null;
    function kl() {
      return br === null || br.componentStack === null ? "" : bl(br.componentStack);
    }
    function tr(o, c) {
      o.componentStack = {
        tag: 0,
        parent: o.componentStack,
        type: c
      };
    }
    function Ca(o, c) {
      o.componentStack = {
        tag: 1,
        parent: o.componentStack,
        type: c
      };
    }
    function Tl(o, c) {
      o.componentStack = {
        tag: 2,
        parent: o.componentStack,
        type: c
      };
    }
    function nr(o) {
      o.componentStack === null ? i("Unexpectedly popped too many stack frames. This is a bug in React.") : o.componentStack = o.componentStack.parent;
    }
    var Br = null;
    function wl(o, c) {
      {
        var S;
        typeof c == "string" ? S = c : c && typeof c.message == "string" ? S = c.message : S = String(c);
        var w = Br || kl();
        Br = null, o.errorMessage = S, o.errorComponentStack = w;
      }
    }
    function si(o, c) {
      var S = o.onError(c);
      if (S != null && typeof S != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof S + '" instead');
      return S;
    }
    function xo(o, c) {
      var S = o.onShellError;
      S(c);
      var w = o.onFatalError;
      w(c), o.destination !== null ? (o.status = xr, T(o.destination, c)) : (o.status = ws, o.fatalError = c);
    }
    function Cs(o, c, S) {
      tr(c, "Suspense");
      var w = c.blockedBoundary, N = c.blockedSegment, Z = S.fallback, oe = S.children, be = /* @__PURE__ */ new Set(), Re = Ar(o, be), Ue = N.chunks.length, Xe = zr(
        o,
        Ue,
        Re,
        N.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      N.children.push(Xe), N.lastPushedText = !1;
      var at = zr(
        o,
        0,
        null,
        N.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      at.parentFlushed = !0, c.blockedBoundary = Re, c.blockedSegment = at;
      try {
        if (bo(o, c, oe), es(at.chunks, o.responseState, at.lastPushedText, at.textEmbedded), at.status = aa, di(Re, at), Re.pendingTasks === 0) {
          nr(c);
          return;
        }
      } catch (On) {
        at.status = ia, Re.forceClientRender = !0, Re.errorDigest = si(o, On), wl(Re, On);
      } finally {
        c.blockedBoundary = w, c.blockedSegment = N;
      }
      var tn = li(o, Z, w, Xe, be, c.legacyContext, c.context, c.treeContext);
      tn.componentStack = c.componentStack, o.pingedTasks.push(tn), nr(c);
    }
    function As(o, c, S, w) {
      tr(c, S);
      var N = c.blockedSegment, Z = mr(N.chunks, S, w, o.responseState, N.formatContext);
      N.lastPushedText = !1;
      var oe = N.formatContext;
      N.formatContext = gn(oe, S, w), bo(o, c, Z), N.formatContext = oe, jn(N.chunks, S), N.lastPushedText = !1, nr(c);
    }
    function Dc(o) {
      return o.prototype && o.prototype.isReactComponent;
    }
    function Cl(o, c, S, w, N) {
      var Z = {};
      vl(c, Z);
      var oe = S(w, N);
      return vc(S, w, oe, N);
    }
    function ui(o, c, S, w, N) {
      var Z = S.render();
      S.props !== N && (Ll || i("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", an(w) || "a component"), Ll = !0);
      {
        var oe = w.childContextTypes;
        if (oe != null) {
          var be = c.legacyContext, Re = Zr(S, w, be, oe);
          c.legacyContext = Re, qn(o, c, Z), c.legacyContext = be;
          return;
        }
      }
      qn(o, c, Z);
    }
    function Ps(o, c, S, w) {
      Tl(c, S);
      var N = cs(S, c.legacyContext), Z = uc(S, w, N);
      oo(Z, S, w, N), ui(o, c, Z, S, w), nr(c);
    }
    var Al = {}, ci = {}, Pl = {}, Rl = {}, Ll = !1, Rs = !1, Ls = !1, Dl = !1;
    function Oc(o, c, S, w) {
      var N;
      if (N = cs(S, c.legacyContext), Ca(c, S), S.prototype && typeof S.prototype.render == "function") {
        var Z = an(S) || "Unknown";
        Al[Z] || (i("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", Z, Z), Al[Z] = !0);
      }
      var oe = Cl(o, c, S, w, N), be = vs();
      if (typeof oe == "object" && oe !== null && typeof oe.render == "function" && oe.$$typeof === void 0) {
        var Re = an(S) || "Unknown";
        ci[Re] || (i("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", Re, Re, Re), ci[Re] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof oe == "object" && oe !== null && typeof oe.render == "function" && oe.$$typeof === void 0
      ) {
        {
          var Ue = an(S) || "Unknown";
          ci[Ue] || (i("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", Ue, Ue, Ue), ci[Ue] = !0);
        }
        oo(oe, S, w, N), ui(o, c, oe, S, w);
      } else if (Mc(S), be) {
        var Xe = c.treeContext, at = 1, tn = 0;
        c.treeContext = gl(Xe, at, tn);
        try {
          qn(o, c, oe);
        } finally {
          c.treeContext = Xe;
        }
      } else
        qn(o, c, oe);
      nr(c);
    }
    function Mc(o) {
      {
        if (o && o.childContextTypes && i("%s(...): childContextTypes cannot be defined on a function component.", o.displayName || o.name || "Component"), typeof o.getDerivedStateFromProps == "function") {
          var c = an(o) || "Unknown";
          Rl[c] || (i("%s: Function components do not support getDerivedStateFromProps.", c), Rl[c] = !0);
        }
        if (typeof o.contextType == "object" && o.contextType !== null) {
          var S = an(o) || "Unknown";
          Pl[S] || (i("%s: Function components do not support contextType.", S), Pl[S] = !0);
        }
      }
    }
    function Ds(o, c) {
      if (o && o.defaultProps) {
        var S = Yn({}, c), w = o.defaultProps;
        for (var N in w)
          S[N] === void 0 && (S[N] = w[N]);
        return S;
      }
      return c;
    }
    function _c(o, c, S, w, N) {
      Ca(c, S.render);
      var Z = Cl(o, c, S.render, w, N), oe = vs();
      if (oe) {
        var be = c.treeContext, Re = 1, Ue = 0;
        c.treeContext = gl(be, Re, Ue);
        try {
          qn(o, c, Z);
        } finally {
          c.treeContext = be;
        }
      } else
        qn(o, c, Z);
      nr(c);
    }
    function Nc(o, c, S, w, N) {
      var Z = S.type, oe = Ds(Z, w);
      Ml(o, c, Z, oe, N);
    }
    function Ol(o, c, S, w) {
      S._context === void 0 ? S !== S.Consumer && (Dl || (Dl = !0, i("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : S = S._context;
      var N = w.children;
      typeof N != "function" && i("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var Z = ka(S), oe = N(Z);
      qn(o, c, oe);
    }
    function Fc(o, c, S, w) {
      var N = S._context, Z = w.value, oe = w.children, be;
      be = c.context, c.context = ei(N, Z), qn(o, c, oe), c.context = pl(N), be !== c.context && i("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function Xn(o, c, S, w, N) {
      tr(c, "Lazy");
      var Z = S._payload, oe = S._init, be = oe(Z), Re = Ds(be, w);
      Ml(o, c, be, Re, N), nr(c);
    }
    function Ml(o, c, S, w, N) {
      if (typeof S == "function")
        if (Dc(S)) {
          Ps(o, c, S, w);
          return;
        } else {
          Oc(o, c, S, w);
          return;
        }
      if (typeof S == "string") {
        As(o, c, S, w);
        return;
      }
      switch (S) {
        case ic:
        case rs:
        case Vi:
        case ji:
        case Wi: {
          qn(o, c, w.children);
          return;
        }
        case Zo: {
          tr(c, "SuspenseList"), qn(o, c, w.children), nr(c);
          return;
        }
        case ac:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case xa: {
          Cs(o, c, w);
          return;
        }
      }
      if (typeof S == "object" && S !== null)
        switch (S.$$typeof) {
          case Ka: {
            _c(o, c, S, w, N);
            return;
          }
          case Qo: {
            Nc(o, c, S, w, N);
            return;
          }
          case ja: {
            Fc(o, c, S, w);
            return;
          }
          case Ua: {
            Ol(o, c, S, w);
            return;
          }
          case Ui: {
            Xn(o, c, S, w);
            return;
          }
        }
      var Z = "";
      throw (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (Z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (S == null ? S : typeof S) + "." + Z));
    }
    function Os(o, c) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      o[Symbol.toStringTag] === "Generator" && (Rs || i("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Rs = !0), o.entries === c && (Ls || i("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ls = !0);
    }
    function qn(o, c, S) {
      try {
        return _l(o, c, S);
      } catch (w) {
        throw typeof w == "object" && w !== null && typeof w.then == "function" || (Br = Br !== null ? Br : kl()), w;
      }
    }
    function _l(o, c, S) {
      if (c.node = S, typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case ns: {
            var w = S, N = w.type, Z = w.props, oe = w.ref;
            Ml(o, c, N, Z, oe);
            return;
          }
          case Go:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case Ui: {
            var be = S, Re = be._payload, Ue = be._init, Xe;
            try {
              Xe = Ue(Re);
            } catch (wo) {
              throw typeof wo == "object" && wo !== null && typeof wo.then == "function" && tr(c, "Lazy"), wo;
            }
            qn(o, c, Xe);
            return;
          }
        }
        if (Pe(S)) {
          Ms(o, c, S);
          return;
        }
        var at = sn(S);
        if (at) {
          Os(S, at);
          var tn = at.call(S);
          if (tn) {
            var On = tn.next();
            if (!On.done) {
              var rr = [];
              do
                rr.push(On.value), On = tn.next();
              while (!On.done);
              Ms(o, c, rr);
              return;
            }
            return;
          }
        }
        var Bs = Object.prototype.toString.call(S);
        throw new Error("Objects are not valid as a React child (found: " + (Bs === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : Bs) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof S == "string") {
        var $s = c.blockedSegment;
        $s.lastPushedText = Jl(c.blockedSegment.chunks, S, o.responseState, $s.lastPushedText);
        return;
      }
      if (typeof S == "number") {
        var Is = c.blockedSegment;
        Is.lastPushedText = Jl(c.blockedSegment.chunks, "" + S, o.responseState, Is.lastPushedText);
        return;
      }
      typeof S == "function" && i("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function Ms(o, c, S) {
      for (var w = S.length, N = 0; N < w; N++) {
        var Z = c.treeContext;
        c.treeContext = gl(Z, w, N);
        try {
          bo(o, c, S[N]);
        } finally {
          c.treeContext = Z;
        }
      }
    }
    function zc(o, c, S) {
      var w = c.blockedSegment, N = w.chunks.length, Z = zr(
        o,
        N,
        null,
        w.formatContext,
        // Adopt the parent segment's leading text embed
        w.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      w.children.push(Z), w.lastPushedText = !1;
      var oe = li(o, c.node, c.blockedBoundary, Z, c.abortSet, c.legacyContext, c.context, c.treeContext);
      c.componentStack !== null && (oe.componentStack = c.componentStack.parent);
      var be = oe.ping;
      S.then(be, be);
    }
    function bo(o, c, S) {
      var w = c.blockedSegment.formatContext, N = c.legacyContext, Z = c.context, oe = null;
      oe = c.componentStack;
      try {
        return qn(o, c, S);
      } catch (be) {
        if (ri(), typeof be == "object" && be !== null && typeof be.then == "function") {
          zc(o, c, be), c.blockedSegment.formatContext = w, c.legacyContext = N, c.context = Z, Zi(Z), c.componentStack = oe;
          return;
        } else
          throw c.blockedSegment.formatContext = w, c.legacyContext = N, c.context = Z, Zi(Z), c.componentStack = oe, be;
      }
    }
    function So(o, c, S, w) {
      var N = si(o, w);
      if (c === null ? xo(o, w) : (c.pendingTasks--, c.forceClientRender || (c.forceClientRender = !0, c.errorDigest = N, wl(c, w), c.parentFlushed && o.clientRenderedBoundaries.push(c))), o.allPendingTasks--, o.allPendingTasks === 0) {
        var Z = o.onAllReady;
        Z();
      }
    }
    function _s(o) {
      var c = this, S = o.blockedBoundary, w = o.blockedSegment;
      w.status = Sl, fi(c, S, w);
    }
    function Ns(o, c, S) {
      var w = o.blockedBoundary, N = o.blockedSegment;
      if (N.status = Sl, w === null)
        c.allPendingTasks--, c.status !== xr && (c.status = xr, c.destination !== null && v(c.destination));
      else {
        if (w.pendingTasks--, !w.forceClientRender) {
          w.forceClientRender = !0;
          var Z = S === void 0 ? new Error("The render was aborted by the server without a reason.") : S;
          w.errorDigest = c.onError(Z);
          {
            var oe = "The server did not finish this Suspense boundary: ";
            Z && typeof Z.message == "string" ? Z = oe + Z.message : Z = oe + String(Z);
            var be = br;
            br = o;
            try {
              wl(w, Z);
            } finally {
              br = be;
            }
          }
          w.parentFlushed && c.clientRenderedBoundaries.push(w);
        }
        if (w.fallbackAbortableTasks.forEach(function(Ue) {
          return Ns(Ue, c, S);
        }), w.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0) {
          var Re = c.onAllReady;
          Re();
        }
      }
    }
    function di(o, c) {
      if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
        var S = c.children[0];
        S.id = c.id, S.parentFlushed = !0, S.status === aa && di(o, S);
      } else {
        var w = o.completedSegments;
        w.push(c);
      }
    }
    function fi(o, c, S) {
      if (c === null) {
        if (S.parentFlushed) {
          if (o.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          o.completedRootSegment = S;
        }
        if (o.pendingRootTasks--, o.pendingRootTasks === 0) {
          o.onShellError = oi;
          var w = o.onShellReady;
          w();
        }
      } else if (c.pendingTasks--, !c.forceClientRender) {
        if (c.pendingTasks === 0)
          S.parentFlushed && S.status === aa && di(c, S), c.parentFlushed && o.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(_s, o), c.fallbackAbortableTasks.clear();
        else if (S.parentFlushed && S.status === aa) {
          di(c, S);
          var N = c.completedSegments;
          N.length === 1 && c.parentFlushed && o.partialBoundaries.push(c);
        }
      }
      if (o.allPendingTasks--, o.allPendingTasks === 0) {
        var Z = o.onAllReady;
        Z();
      }
    }
    function Eo(o, c) {
      var S = c.blockedSegment;
      if (S.status === yo) {
        Zi(c.context);
        var w = null;
        w = br, br = c;
        try {
          qn(o, c, c.node), es(S.chunks, o.responseState, S.lastPushedText, S.textEmbedded), c.abortSet.delete(c), S.status = aa, fi(o, c.blockedBoundary, S);
        } catch (Z) {
          if (ri(), typeof Z == "object" && Z !== null && typeof Z.then == "function") {
            var N = c.ping;
            Z.then(N, N);
          } else
            c.abortSet.delete(c), S.status = ia, So(o, c.blockedBoundary, S, Z);
        } finally {
          br = w;
        }
      }
    }
    function Fs(o) {
      if (o.status !== xr) {
        var c = lc(), S = Fr.current;
        Fr.current = ks;
        var w;
        w = go.getCurrentStack, go.getCurrentStack = kl;
        var N = ii;
        mo(o.responseState);
        try {
          var Z = o.pingedTasks, oe;
          for (oe = 0; oe < Z.length; oe++) {
            var be = Z[oe];
            Eo(o, be);
          }
          Z.splice(0, oe), o.destination !== null && To(o, o.destination);
        } catch (Re) {
          si(o, Re), xo(o, Re);
        } finally {
          mo(N), Fr.current = S, go.getCurrentStack = w, S === ks && Zi(c);
        }
      }
    }
    function hi(o, c, S) {
      switch (S.parentFlushed = !0, S.status) {
        case yo: {
          var w = S.id = o.nextSegmentId++;
          return S.lastPushedText = !1, S.textEmbedded = !1, Ri(c, o.responseState, w);
        }
        case aa: {
          S.status = Ts;
          for (var N = !0, Z = S.chunks, oe = 0, be = S.children, Re = 0; Re < be.length; Re++) {
            for (var Ue = be[Re]; oe < Ue.index; oe++)
              d(c, Z[oe]);
            N = pi(o, c, Ue);
          }
          for (; oe < Z.length - 1; oe++)
            d(c, Z[oe]);
          return oe < Z.length && (N = f(c, Z[oe])), N;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function pi(o, c, S) {
      var w = S.boundary;
      if (w === null)
        return hi(o, c, S);
      if (w.parentFlushed = !0, w.forceClientRender)
        return Jn(c, o.responseState, w.errorDigest, w.errorMessage, w.errorComponentStack), hi(o, c, S), ts(c, o.responseState);
      if (w.pendingTasks > 0) {
        w.rootSegmentID = o.nextSegmentId++, w.completedSegments.length > 0 && o.partialBoundaries.push(w);
        var N = w.id = Ft(o.responseState);
        return _r(c, o.responseState, N), hi(o, c, S), Ha(c, o.responseState);
      } else {
        if (w.byteSize > o.progressiveChunkSize)
          return w.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(w), _r(c, o.responseState, w.id), hi(o, c, S), Ha(c, o.responseState);
        qo(c, o.responseState);
        var Z = w.completedSegments;
        if (Z.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var oe = Z[0];
        return pi(o, c, oe), rc(c, o.responseState);
      }
    }
    function Bc(o, c, S) {
      return ec(c, o.responseState, S.id, S.errorDigest, S.errorMessage, S.errorComponentStack);
    }
    function Nl(o, c, S) {
      return ge(c, o.responseState, S.formatContext, S.id), pi(o, c, S), Ce(c, S.formatContext);
    }
    function ko(o, c, S) {
      for (var w = S.completedSegments, N = 0; N < w.length; N++) {
        var Z = w[N];
        zs(o, c, S, Z);
      }
      return w.length = 0, qu(c, o.responseState, S.id, S.rootSegmentID);
    }
    function $c(o, c, S) {
      for (var w = S.completedSegments, N = 0; N < w.length; N++) {
        var Z = w[N];
        if (!zs(o, c, S, Z))
          return N++, w.splice(0, N), !1;
      }
      return w.splice(0, N), !0;
    }
    function zs(o, c, S, w) {
      if (w.status === Ts)
        return !0;
      var N = w.id;
      if (N === -1) {
        var Z = w.id = S.rootSegmentID;
        if (Z === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Nl(o, c, w);
      } else
        return Nl(o, c, w), Kn(c, o.responseState, N);
    }
    function To(o, c) {
      try {
        var S = o.completedRootSegment;
        S !== null && o.pendingRootTasks === 0 && (pi(o, c, S), o.completedRootSegment = null, za(c, o.responseState));
        var w = o.clientRenderedBoundaries, N;
        for (N = 0; N < w.length; N++) {
          var Z = w[N];
          if (!Bc(o, c, Z)) {
            o.destination = null, N++, w.splice(0, N);
            return;
          }
        }
        w.splice(0, N);
        var oe = o.completedBoundaries;
        for (N = 0; N < oe.length; N++) {
          var be = oe[N];
          if (!ko(o, c, be)) {
            o.destination = null, N++, oe.splice(0, N);
            return;
          }
        }
        oe.splice(0, N);
        var Re = o.partialBoundaries;
        for (N = 0; N < Re.length; N++) {
          var Ue = Re[N];
          if (!$c(o, c, Ue)) {
            o.destination = null, N++, Re.splice(0, N);
            return;
          }
        }
        Re.splice(0, N);
        var Xe = o.completedBoundaries;
        for (N = 0; N < Xe.length; N++) {
          var at = Xe[N];
          if (!ko(o, c, at)) {
            o.destination = null, N++, Xe.splice(0, N);
            return;
          }
        }
        Xe.splice(0, N);
      } finally {
        o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && (o.abortableTasks.size !== 0 && i("There was still abortable task at the root when we closed. This is a bug in React."), v(c));
      }
    }
    function Ic(o) {
      p(function() {
        return Fs(o);
      });
    }
    function s(o, c) {
      if (o.status === ws) {
        o.status = xr, T(c, o.fatalError);
        return;
      }
      if (o.status !== xr && o.destination === null) {
        o.destination = c;
        try {
          To(o, c);
        } catch (S) {
          si(o, S), xo(o, S);
        }
      }
    }
    function h(o, c) {
      try {
        var S = o.abortableTasks;
        S.forEach(function(w) {
          return Ns(w, o, c);
        }), S.clear(), o.destination !== null && To(o, o.destination);
      } catch (w) {
        si(o, w), xo(o, w);
      }
    }
    function E() {
    }
    function R(o, c, S, w) {
      var N = !1, Z = null, oe = "", be = {
        push: function(at) {
          return at !== null && (oe += at), !0;
        },
        destroy: function(at) {
          N = !0, Z = at;
        }
      }, Re = !1;
      function Ue() {
        Re = !0;
      }
      var Xe = El(o, nc(S, c ? c.identifierPrefix : void 0), Xo(), 1 / 0, E, void 0, Ue, void 0, void 0);
      if (Ic(Xe), h(Xe, w), s(Xe, be), N)
        throw Z;
      if (!Re)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return oe;
    }
    function H(o, c) {
      return R(o, c, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function re(o, c) {
      return R(o, c, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function de() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function Se() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    xi.renderToNodeStream = de, xi.renderToStaticMarkup = re, xi.renderToStaticNodeStream = Se, xi.renderToString = H, xi.version = t;
  }()), xi;
}
var Js = {};
/**
 * @license React
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zh;
function sb() {
  return zh || (zh = 1, process.env.NODE_ENV !== "production" && function() {
    var e = fe, t = "18.2.0", r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(s) {
      {
        for (var h = arguments.length, E = new Array(h > 1 ? h - 1 : 0), R = 1; R < h; R++)
          E[R - 1] = arguments[R];
        l("warn", s, E);
      }
    }
    function i(s) {
      {
        for (var h = arguments.length, E = new Array(h > 1 ? h - 1 : 0), R = 1; R < h; R++)
          E[R - 1] = arguments[R];
        l("error", s, E);
      }
    }
    function l(s, h, E) {
      {
        var R = r.ReactDebugCurrentFrame, H = R.getStackAddendum();
        H !== "" && (h += "%s", E = E.concat([H]));
        var re = E.map(function(de) {
          return String(de);
        });
        re.unshift("Warning: " + h), Function.prototype.apply.call(console[s], console, re);
      }
    }
    function p(s) {
      s();
    }
    var u = 512, d = null, f = 0;
    function g(s) {
      d = new Uint8Array(u), f = 0;
    }
    function v(s, h) {
      if (h.length !== 0) {
        if (h.length > u) {
          f > 0 && (s.enqueue(new Uint8Array(d.buffer, 0, f)), d = new Uint8Array(u), f = 0), s.enqueue(h);
          return;
        }
        var E = h, R = d.length - f;
        R < E.length && (R === 0 ? s.enqueue(d) : (d.set(E.subarray(0, R), f), s.enqueue(d), E = E.subarray(R)), d = new Uint8Array(u), f = 0), d.set(E, f), f += E.length;
      }
    }
    function y(s, h) {
      return v(s, h), !0;
    }
    function k(s) {
      d && f > 0 && (s.enqueue(new Uint8Array(d.buffer, 0, f)), d = null, f = 0);
    }
    function T(s) {
      s.close();
    }
    var M = new TextEncoder();
    function C(s) {
      return M.encode(s);
    }
    function m(s) {
      return M.encode(s);
    }
    function D(s, h) {
      typeof s.error == "function" ? s.error(h) : s.close();
    }
    function O(s) {
      {
        var h = typeof Symbol == "function" && Symbol.toStringTag, E = h && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return E;
      }
    }
    function _(s) {
      try {
        return $(s), !1;
      } catch {
        return !0;
      }
    }
    function $(s) {
      return "" + s;
    }
    function L(s, h) {
      if (_(s))
        return i("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", h, O(s)), $(s);
    }
    function q(s, h) {
      if (_(s))
        return i("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", h, O(s)), $(s);
    }
    function W(s) {
      if (_(s))
        return i("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", O(s)), $(s);
    }
    var Y = Object.prototype.hasOwnProperty, J = 0, le = 1, U = 2, te = 3, me = 4, K = 5, ce = 6, ue = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", he = ue + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ae = new RegExp("^[" + ue + "][" + he + "]*$"), V = {}, ee = {};
    function ne(s) {
      return Y.call(ee, s) ? !0 : Y.call(V, s) ? !1 : ae.test(s) ? (ee[s] = !0, !0) : (V[s] = !0, i("Invalid attribute name: `%s`", s), !1);
    }
    function ke(s, h, E, R) {
      if (E !== null && E.type === J)
        return !1;
      switch (typeof h) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (R)
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
      return ie.hasOwnProperty(s) ? ie[s] : null;
    }
    function we(s, h, E, R, H, re, de) {
      this.acceptsBooleans = h === U || h === te || h === me, this.attributeName = R, this.attributeNamespace = H, this.mustUseProperty = E, this.propertyName = s, this.type = h, this.sanitizeURL = re, this.removeEmptyString = de;
    }
    var ie = {}, Le = [
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
    Le.forEach(function(s) {
      ie[s] = new we(
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
      var h = s[0], E = s[1];
      ie[h] = new we(
        h,
        le,
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
      ie[s] = new we(
        s,
        U,
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
      ie[s] = new we(
        s,
        U,
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
      ie[s] = new we(
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
      ie[s] = new we(
        s,
        te,
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
      ie[s] = new we(
        s,
        me,
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
      ie[s] = new we(
        s,
        ce,
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
      ie[s] = new we(
        s,
        K,
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
    var Me = /[\-\:]([a-z])/g, We = function(s) {
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
      var h = s.replace(Me, We);
      ie[h] = new we(
        h,
        le,
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
      var h = s.replace(Me, We);
      ie[h] = new we(
        h,
        le,
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
      var h = s.replace(Me, We);
      ie[h] = new we(
        h,
        le,
        !1,
        // mustUseProperty
        s,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(s) {
      ie[s] = new we(
        s,
        le,
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
    var qe = "xlinkHref";
    ie[qe] = new we(
      "xlinkHref",
      le,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(s) {
      ie[s] = new we(
        s,
        le,
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
    var Ge = {
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
    function De(s, h) {
      return s + h.charAt(0).toUpperCase() + h.substring(1);
    }
    var _e = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Ge).forEach(function(s) {
      _e.forEach(function(h) {
        Ge[De(h, s)] = Ge[s];
      });
    });
    var $e = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Ze(s, h) {
      $e[h.type] || h.onChange || h.onInput || h.readOnly || h.disabled || h.value == null || i("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), h.onChange || h.readOnly || h.disabled || h.checked == null || i("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Et(s, h) {
      if (s.indexOf("-") === -1)
        return typeof h.is == "string";
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
    var vt = {
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
    }, Ct = {}, Je = new RegExp("^(aria)-[" + he + "]*$"), Vt = new RegExp("^(aria)[A-Z][" + he + "]*$");
    function qt(s, h) {
      {
        if (Y.call(Ct, h) && Ct[h])
          return !0;
        if (Vt.test(h)) {
          var E = "aria-" + h.slice(4).toLowerCase(), R = vt.hasOwnProperty(E) ? E : null;
          if (R == null)
            return i("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", h), Ct[h] = !0, !0;
          if (h !== R)
            return i("Invalid ARIA attribute `%s`. Did you mean `%s`?", h, R), Ct[h] = !0, !0;
        }
        if (Je.test(h)) {
          var H = h.toLowerCase(), re = vt.hasOwnProperty(H) ? H : null;
          if (re == null)
            return Ct[h] = !0, !1;
          if (h !== re)
            return i("Unknown ARIA attribute `%s`. Did you mean `%s`?", h, re), Ct[h] = !0, !0;
        }
      }
      return !0;
    }
    function zt(s, h) {
      {
        var E = [];
        for (var R in h) {
          var H = qt(s, R);
          H || E.push(R);
        }
        var re = E.map(function(de) {
          return "`" + de + "`";
        }).join(", ");
        E.length === 1 ? i("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", re, s) : E.length > 1 && i("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", re, s);
      }
    }
    function bt(s, h) {
      Et(s, h) || zt(s, h);
    }
    var St = !1;
    function Jt(s, h) {
      {
        if (s !== "input" && s !== "textarea" && s !== "select")
          return;
        h != null && h.value === null && !St && (St = !0, s === "select" && h.multiple ? i("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", s) : i("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", s));
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
    }, Ot = function() {
    };
    {
      var wt = {}, un = /^on./, Mn = /^on[^A-Z]/, _n = new RegExp("^(aria)-[" + he + "]*$"), jt = new RegExp("^(aria)[A-Z][" + he + "]*$");
      Ot = function(s, h, E, R) {
        if (Y.call(wt, h) && wt[h])
          return !0;
        var H = h.toLowerCase();
        if (H === "onfocusin" || H === "onfocusout")
          return i("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), wt[h] = !0, !0;
        if (R != null) {
          var re = R.registrationNameDependencies, de = R.possibleRegistrationNames;
          if (re.hasOwnProperty(h))
            return !0;
          var Se = de.hasOwnProperty(H) ? de[H] : null;
          if (Se != null)
            return i("Invalid event handler property `%s`. Did you mean `%s`?", h, Se), wt[h] = !0, !0;
          if (un.test(h))
            return i("Unknown event handler property `%s`. It will be ignored.", h), wt[h] = !0, !0;
        } else if (un.test(h))
          return Mn.test(h) && i("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", h), wt[h] = !0, !0;
        if (_n.test(h) || jt.test(h))
          return !0;
        if (H === "innerhtml")
          return i("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), wt[h] = !0, !0;
        if (H === "aria")
          return i("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), wt[h] = !0, !0;
        if (H === "is" && E !== null && E !== void 0 && typeof E != "string")
          return i("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof E), wt[h] = !0, !0;
        if (typeof E == "number" && isNaN(E))
          return i("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", h), wt[h] = !0, !0;
        var o = xe(h), c = o !== null && o.type === J;
        if (ft.hasOwnProperty(H)) {
          var S = ft[H];
          if (S !== h)
            return i("Invalid DOM property `%s`. Did you mean `%s`?", h, S), wt[h] = !0, !0;
        } else if (!c && h !== H)
          return i("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", h, H), wt[h] = !0, !0;
        return typeof E == "boolean" && ke(h, E, o, !1) ? (E ? i('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', E, h, h, E, h) : i('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', E, h, h, E, h, h, h), wt[h] = !0, !0) : c ? !0 : ke(h, E, o, !1) ? (wt[h] = !0, !1) : ((E === "false" || E === "true") && o !== null && o.type === te && (i("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", E, h, E === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', h, E), wt[h] = !0), !0);
      };
    }
    var Gt = function(s, h, E) {
      {
        var R = [];
        for (var H in h) {
          var re = Ot(s, H, h[H], E);
          re || R.push(H);
        }
        var de = R.map(function(Se) {
          return "`" + Se + "`";
        }).join(", ");
        R.length === 1 ? i("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", de, s) : R.length > 1 && i("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", de, s);
      }
    };
    function Mt(s, h, E) {
      Et(s, h) || Gt(s, h, E);
    }
    var cn = function() {
    };
    {
      var dn = /^(?:webkit|moz|o)[A-Z]/, Ae = /^-ms-/, mt = /-(.)/g, Ut = /;\s*$/, _t = {}, vn = {}, st = !1, fn = !1, xt = function(s) {
        return s.replace(mt, function(h, E) {
          return E.toUpperCase();
        });
      }, Bt = function(s) {
        _t.hasOwnProperty(s) && _t[s] || (_t[s] = !0, i(
          "Unsupported style property %s. Did you mean %s?",
          s,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          xt(s.replace(Ae, "ms-"))
        ));
      }, pn = function(s) {
        _t.hasOwnProperty(s) && _t[s] || (_t[s] = !0, i("Unsupported vendor-prefixed style property %s. Did you mean %s?", s, s.charAt(0).toUpperCase() + s.slice(1)));
      }, En = function(s, h) {
        vn.hasOwnProperty(h) && vn[h] || (vn[h] = !0, i(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, s, h.replace(Ut, "")));
      }, Ee = function(s, h) {
        st || (st = !0, i("`NaN` is an invalid value for the `%s` css style property.", s));
      }, Fe = function(s, h) {
        fn || (fn = !0, i("`Infinity` is an invalid value for the `%s` css style property.", s));
      };
      cn = function(s, h) {
        s.indexOf("-") > -1 ? Bt(s) : dn.test(s) ? pn(s) : Ut.test(h) && En(s, h), typeof h == "number" && (isNaN(h) ? Ee(s, h) : isFinite(h) || Fe(s, h));
      };
    }
    var ot = cn, Ve = /["'&<>]/;
    function en(s) {
      W(s);
      var h = "" + s, E = Ve.exec(h);
      if (!E)
        return h;
      var R, H = "", re, de = 0;
      for (re = E.index; re < h.length; re++) {
        switch (h.charCodeAt(re)) {
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
        de !== re && (H += h.substring(de, re)), de = re + 1, H += R;
      }
      return de !== re ? H + h.substring(de, re) : H;
    }
    function ut(s) {
      return typeof s == "boolean" || typeof s == "number" ? "" + s : en(s);
    }
    var xn = /([A-Z])/g, Nn = /^ms-/;
    function j(s) {
      return s.replace(xn, "-$1").toLowerCase().replace(Nn, "-ms-");
    }
    var Pe = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Ie = !1;
    function Oe(s) {
      !Ie && Pe.test(s) && (Ie = !0, i("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(s)));
    }
    var nt = Array.isArray;
    function Ye(s) {
      return nt(s);
    }
    var rt = m("<script>"), Qe = m("<\/script>"), ze = m('<script src="'), Nt = m('<script type="module" src="'), $t = m('" async=""><\/script>');
    function Zt(s) {
      return W(s), ("" + s).replace(It, Lt);
    }
    var It = /(<\/|<)(s)(cript)/gi, Lt = function(s, h, E, R) {
      return "" + h + (E === "s" ? "\\u0073" : "\\u0053") + R;
    };
    function kt(s, h, E, R, H) {
      var re = s === void 0 ? "" : s, de = h === void 0 ? rt : m('<script nonce="' + ut(h) + '">'), Se = [];
      if (E !== void 0 && Se.push(de, C(Zt(E)), Qe), R !== void 0)
        for (var o = 0; o < R.length; o++)
          Se.push(ze, C(ut(R[o])), $t);
      if (H !== void 0)
        for (var c = 0; c < H.length; c++)
          Se.push(Nt, C(ut(H[c])), $t);
      return {
        bootstrapChunks: Se,
        startInlineScript: de,
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
    var Tt = 0, ht = 1, rn = 2, mn = 3, Rt = 4, gn = 5, on = 6, Ft = 7;
    function Ht(s, h) {
      return {
        insertionMode: s,
        selectedValue: h
      };
    }
    function Pn(s) {
      var h = s === "http://www.w3.org/2000/svg" ? rn : s === "http://www.w3.org/1998/Math/MathML" ? mn : Tt;
      return Ht(h, null);
    }
    function Rn(s, h, E) {
      switch (h) {
        case "select":
          return Ht(ht, E.value != null ? E.value : E.defaultValue);
        case "svg":
          return Ht(rn, null);
        case "math":
          return Ht(mn, null);
        case "foreignObject":
          return Ht(ht, null);
        case "table":
          return Ht(Rt, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return Ht(gn, null);
        case "colgroup":
          return Ht(Ft, null);
        case "tr":
          return Ht(on, null);
      }
      return s.insertionMode >= Rt || s.insertionMode === Tt ? Ht(ht, null) : s;
    }
    var Qn = null;
    function Wn(s) {
      var h = s.nextSuspenseID++;
      return m(s.boundaryPrefix + h.toString(16));
    }
    function Qt(s, h, E) {
      var R = s.idPrefix, H = ":" + R + "R" + h;
      return E > 0 && (H += "H" + E.toString(32)), H + ":";
    }
    function bn(s) {
      return ut(s);
    }
    var fr = m("<!-- -->");
    function ir(s, h, E, R) {
      return h === "" ? R : (R && s.push(fr), s.push(C(bn(h))), !0);
    }
    function or(s, h, E, R) {
      E && R && s.push(fr);
    }
    var x = /* @__PURE__ */ new Map();
    function A(s) {
      var h = x.get(s);
      if (h !== void 0)
        return h;
      var E = m(ut(j(s)));
      return x.set(s, E), E;
    }
    var z = m(' style="'), X = m(":"), ye = m(";");
    function B(s, h, E) {
      if (typeof E != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var R = !0;
      for (var H in E)
        if (Y.call(E, H)) {
          var re = E[H];
          if (!(re == null || typeof re == "boolean" || re === "")) {
            var de = void 0, Se = void 0, o = H.indexOf("--") === 0;
            o ? (de = C(ut(H)), q(re, H), Se = C(ut(("" + re).trim()))) : (ot(H, re), de = A(H), typeof re == "number" ? re !== 0 && !Y.call(Ge, H) ? Se = C(re + "px") : Se = C("" + re) : (q(re, H), Se = C(ut(("" + re).trim())))), R ? (R = !1, s.push(z, de, X, Se)) : s.push(ye, de, X, Se);
          }
        }
      R || s.push(pe);
    }
    var I = m(" "), Q = m('="'), pe = m('"'), Be = m('=""');
    function je(s, h, E, R) {
      switch (E) {
        case "style": {
          B(s, h, R);
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
          switch (typeof R) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!H.acceptsBooleans)
                return;
          }
          var re = H.attributeName, de = C(re);
          switch (H.type) {
            case te:
              R && s.push(I, de, Be);
              return;
            case me:
              R === !0 ? s.push(I, de, Be) : R === !1 || s.push(I, de, Q, C(ut(R)), pe);
              return;
            case K:
              isNaN(R) || s.push(I, de, Q, C(ut(R)), pe);
              break;
            case ce:
              !isNaN(R) && R >= 1 && s.push(I, de, Q, C(ut(R)), pe);
              break;
            default:
              H.sanitizeURL && (L(R, re), R = "" + R, Oe(R)), s.push(I, de, Q, C(ut(R)), pe);
          }
        } else if (ne(E)) {
          switch (typeof R) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var Se = E.toLowerCase().slice(0, 5);
              if (Se !== "data-" && Se !== "aria-")
                return;
            }
          }
          s.push(I, C(E), Q, C(ut(R)), pe);
        }
      }
    }
    var gt = m(">"), kn = m("/>");
    function ln(s, h, E) {
      if (h != null) {
        if (E != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof h != "object" || !("__html" in h))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var R = h.__html;
        R != null && (W(R), s.push(C("" + R)));
      }
    }
    var Ln = !1, lr = !1, Vn = !1, Or = !1, hr = !1, Er = !1, sr = !1;
    function Kr(s, h) {
      {
        var E = s[h];
        if (E != null) {
          var R = Ye(E);
          s.multiple && !R ? i("The `%s` prop supplied to <select> must be an array if `multiple` is true.", h) : !s.multiple && R && i("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", h);
        }
      }
    }
    function $o(s, h, E) {
      Ze("select", h), Kr(h, "value"), Kr(h, "defaultValue"), h.value !== void 0 && h.defaultValue !== void 0 && !Vn && (i("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Vn = !0), s.push(jn("select"));
      var R = null, H = null;
      for (var re in h)
        if (Y.call(h, re)) {
          var de = h[re];
          if (de == null)
            continue;
          switch (re) {
            case "children":
              R = de;
              break;
            case "dangerouslySetInnerHTML":
              H = de;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              je(s, E, re, de);
              break;
          }
        }
      return s.push(gt), ln(s, H, R), R;
    }
    function Io(s) {
      var h = "";
      return e.Children.forEach(s, function(E) {
        E != null && (h += E, !hr && typeof E != "string" && typeof E != "number" && (hr = !0, i("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), h;
    }
    var Na = m(' selected=""');
    function Ho(s, h, E, R) {
      var H = R.selectedValue;
      s.push(jn("option"));
      var re = null, de = null, Se = null, o = null;
      for (var c in h)
        if (Y.call(h, c)) {
          var S = h[c];
          if (S == null)
            continue;
          switch (c) {
            case "children":
              re = S;
              break;
            case "selected":
              Se = S, sr || (i("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), sr = !0);
              break;
            case "dangerouslySetInnerHTML":
              o = S;
              break;
            case "value":
              de = S;
            default:
              je(s, E, c, S);
              break;
          }
        }
      if (H != null) {
        var w;
        if (de !== null ? (L(de, "value"), w = "" + de) : (o !== null && (Er || (Er = !0, i("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), w = Io(re)), Ye(H))
          for (var N = 0; N < H.length; N++) {
            L(H[N], "value");
            var Z = "" + H[N];
            if (Z === w) {
              s.push(Na);
              break;
            }
          }
        else
          L(H, "select.value"), "" + H === w && s.push(Na);
      } else
        Se && s.push(Na);
      return s.push(gt), ln(s, o, re), re;
    }
    function Fa(s, h, E) {
      Ze("input", h), h.checked !== void 0 && h.defaultChecked !== void 0 && !lr && (i("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", h.type), lr = !0), h.value !== void 0 && h.defaultValue !== void 0 && !Ln && (i("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", h.type), Ln = !0), s.push(jn("input"));
      var R = null, H = null, re = null, de = null;
      for (var Se in h)
        if (Y.call(h, Se)) {
          var o = h[Se];
          if (o == null)
            continue;
          switch (Se) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              de = o;
              break;
            case "defaultValue":
              H = o;
              break;
            case "checked":
              re = o;
              break;
            case "value":
              R = o;
              break;
            default:
              je(s, E, Se, o);
              break;
          }
        }
      return re !== null ? je(s, E, "checked", re) : de !== null && je(s, E, "checked", de), R !== null ? je(s, E, "value", R) : H !== null && je(s, E, "value", H), s.push(kn), null;
    }
    function ur(s, h, E) {
      Ze("textarea", h), h.value !== void 0 && h.defaultValue !== void 0 && !Or && (i("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Or = !0), s.push(jn("textarea"));
      var R = null, H = null, re = null;
      for (var de in h)
        if (Y.call(h, de)) {
          var Se = h[de];
          if (Se == null)
            continue;
          switch (de) {
            case "children":
              re = Se;
              break;
            case "value":
              R = Se;
              break;
            case "defaultValue":
              H = Se;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              je(s, E, de, Se);
              break;
          }
        }
      if (R === null && H !== null && (R = H), s.push(gt), re != null) {
        if (i("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), R != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (Ye(re)) {
          if (re.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          W(re[0]), R = "" + re[0];
        }
        W(re), R = "" + re;
      }
      return typeof R == "string" && R[0] === `
` && s.push(kr), R !== null && (L(R, "value"), s.push(C(bn("" + R)))), null;
    }
    function Yr(s, h, E, R) {
      s.push(jn(E));
      for (var H in h)
        if (Y.call(h, H)) {
          var re = h[H];
          if (re == null)
            continue;
          switch (H) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(E + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              je(s, R, H, re);
              break;
          }
        }
      return s.push(kn), null;
    }
    function la(s, h, E) {
      s.push(jn("menuitem"));
      for (var R in h)
        if (Y.call(h, R)) {
          var H = h[R];
          if (H == null)
            continue;
          switch (R) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              je(s, E, R, H);
              break;
          }
        }
      return s.push(gt), null;
    }
    function Kt(s, h, E) {
      s.push(jn("title"));
      var R = null;
      for (var H in h)
        if (Y.call(h, H)) {
          var re = h[H];
          if (re == null)
            continue;
          switch (H) {
            case "children":
              R = re;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              je(s, E, H, re);
              break;
          }
        }
      s.push(gt);
      {
        var de = Array.isArray(R) && R.length < 2 ? R[0] || null : R;
        Array.isArray(R) && R.length > 1 ? i("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : de != null && de.$$typeof != null ? i("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : de != null && typeof de != "string" && typeof de != "number" && i("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return R;
    }
    function pr(s, h, E, R) {
      s.push(jn(E));
      var H = null, re = null;
      for (var de in h)
        if (Y.call(h, de)) {
          var Se = h[de];
          if (Se == null)
            continue;
          switch (de) {
            case "children":
              H = Se;
              break;
            case "dangerouslySetInnerHTML":
              re = Se;
              break;
            default:
              je(s, R, de, Se);
              break;
          }
        }
      return s.push(gt), ln(s, re, H), typeof H == "string" ? (s.push(C(bn(H))), null) : H;
    }
    function Fn(s, h, E, R) {
      s.push(jn(E));
      var H = null, re = null;
      for (var de in h)
        if (Y.call(h, de)) {
          var Se = h[de];
          if (Se == null)
            continue;
          switch (de) {
            case "children":
              H = Se;
              break;
            case "dangerouslySetInnerHTML":
              re = Se;
              break;
            case "style":
              B(s, R, Se);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ne(de) && typeof Se != "function" && typeof Se != "symbol" && s.push(I, C(de), Q, C(ut(Se)), pe);
              break;
          }
        }
      return s.push(gt), ln(s, re, H), H;
    }
    var kr = m(`
`);
    function mr(s, h, E, R) {
      s.push(jn(E));
      var H = null, re = null;
      for (var de in h)
        if (Y.call(h, de)) {
          var Se = h[de];
          if (Se == null)
            continue;
          switch (de) {
            case "children":
              H = Se;
              break;
            case "dangerouslySetInnerHTML":
              re = Se;
              break;
            default:
              je(s, R, de, Se);
              break;
          }
        }
      if (s.push(gt), re != null) {
        if (H != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof re != "object" || !("__html" in re))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var o = re.__html;
        o != null && (typeof o == "string" && o.length > 0 && o[0] === `
` ? s.push(kr, C(o)) : (W(o), s.push(C("" + o))));
      }
      return typeof H == "string" && H[0] === `
` && s.push(kr), H;
    }
    var sa = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, gr = /* @__PURE__ */ new Map();
    function jn(s) {
      var h = gr.get(s);
      if (h === void 0) {
        if (!sa.test(s))
          throw new Error("Invalid tag: " + s);
        h = m("<" + s), gr.set(s, h);
      }
      return h;
    }
    var za = m("<!DOCTYPE html>");
    function Ba(s, h, E, R, H) {
      switch (bt(h, E), Jt(h, E), Mt(h, E, null), !E.suppressContentEditableWarning && E.contentEditable && E.children != null && i("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), H.insertionMode !== rn && H.insertionMode !== mn && h.indexOf("-") === -1 && typeof E.is != "string" && h.toLowerCase() !== h && i("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", h), h) {
        case "select":
          return $o(s, E, R);
        case "option":
          return Ho(s, E, R, H);
        case "textarea":
          return ur(s, E, R);
        case "input":
          return Fa(s, E, R);
        case "menuitem":
          return la(s, E, R);
        case "title":
          return Kt(s, E, R);
        case "listing":
        case "pre":
          return mr(s, E, h, R);
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
          return Yr(s, E, h, R);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return pr(s, E, h, R);
        case "html":
          return H.insertionMode === Tt && s.push(za), pr(s, E, h, R);
        default:
          return h.indexOf("-") === -1 && typeof E.is != "string" ? pr(s, E, h, R) : Fn(s, E, h, R);
      }
    }
    var Pi = m("</"), Ri = m(">");
    function Li(s, h, E) {
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
          s.push(Pi, C(h), Ri);
      }
    }
    function Wo(s, h) {
      for (var E = h.bootstrapChunks, R = 0; R < E.length - 1; R++)
        v(s, E[R]);
      return R < E.length ? y(s, E[R]) : !0;
    }
    var Vo = m('<template id="'), ua = m('"></template>');
    function ca(s, h, E) {
      v(s, Vo), v(s, h.placeholderPrefix);
      var R = C(E.toString(16));
      return v(s, R), y(s, ua);
    }
    var da = m("<!--$-->"), Xr = m('<!--$?--><template id="'), jo = m('"></template>'), qr = m("<!--$!-->"), $a = m("<!--/$-->"), Ia = m("<template"), Mr = m('"'), _r = m(' data-dgst="'), fa = m(' data-msg="'), Di = m(' data-stck="'), Ha = m("></template>");
    function Oi(s, h) {
      return y(s, da);
    }
    function ha(s, h, E) {
      if (v(s, Xr), E === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return v(s, E), y(s, jo);
    }
    function zn(s, h, E, R, H) {
      var re;
      return re = y(s, qr), v(s, Ia), E && (v(s, _r), v(s, C(ut(E))), v(s, Mr)), R && (v(s, fa), v(s, C(ut(R))), v(s, Mr)), H && (v(s, Di), v(s, C(ut(H))), v(s, Mr)), re = y(s, Ha), re;
    }
    function Mi(s, h) {
      return y(s, $a);
    }
    function pa(s, h) {
      return y(s, $a);
    }
    function Uo(s, h) {
      return y(s, $a);
    }
    var _i = m('<div hidden id="'), ma = m('">'), Ni = m("</div>"), Fi = m('<svg aria-hidden="true" style="display:none" id="'), ga = m('">'), ya = m("</svg>"), zi = m('<math aria-hidden="true" style="display:none" id="'), Bi = m('">'), $i = m("</math>"), Wa = m('<table hidden id="'), Ii = m('">'), b = m("</table>"), P = m('<table hidden><tbody id="'), F = m('">'), G = m("</tbody></table>"), ve = m('<table hidden><tr id="'), ge = m('">'), Ce = m("</tr></table>"), Ne = m('<table hidden><colgroup id="'), tt = m('">'), yt = m("</colgroup></table>");
    function ct(s, h, E, R) {
      switch (E.insertionMode) {
        case Tt:
        case ht:
          return v(s, _i), v(s, h.segmentPrefix), v(s, C(R.toString(16))), y(s, ma);
        case rn:
          return v(s, Fi), v(s, h.segmentPrefix), v(s, C(R.toString(16))), y(s, ga);
        case mn:
          return v(s, zi), v(s, h.segmentPrefix), v(s, C(R.toString(16))), y(s, Bi);
        case Rt:
          return v(s, Wa), v(s, h.segmentPrefix), v(s, C(R.toString(16))), y(s, Ii);
        case gn:
          return v(s, P), v(s, h.segmentPrefix), v(s, C(R.toString(16))), y(s, F);
        case on:
          return v(s, ve), v(s, h.segmentPrefix), v(s, C(R.toString(16))), y(s, ge);
        case Ft:
          return v(s, Ne), v(s, h.segmentPrefix), v(s, C(R.toString(16))), y(s, tt);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Xt(s, h) {
      switch (h.insertionMode) {
        case Tt:
        case ht:
          return y(s, Ni);
        case rn:
          return y(s, ya);
        case mn:
          return y(s, $i);
        case Rt:
          return y(s, b);
        case gn:
          return y(s, G);
        case on:
          return y(s, Ce);
        case Ft:
          return y(s, yt);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Bn = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", Un = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Kn = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', va = m(Bn + ';$RS("'), Hi = m('$RS("'), Va = m('","'), Xu = m('")<\/script>');
    function qu(s, h, E) {
      v(s, h.startInlineScript), h.sentCompleteSegmentFunction ? v(s, Hi) : (h.sentCompleteSegmentFunction = !0, v(s, va)), v(s, h.segmentPrefix);
      var R = C(E.toString(16));
      return v(s, R), v(s, Va), v(s, h.placeholderPrefix), v(s, R), y(s, Xu);
    }
    var Gu = m(Un + ';$RC("'), Zu = m('$RC("'), Qu = m('","'), Ju = m('")<\/script>');
    function Ko(s, h, E, R) {
      if (v(s, h.startInlineScript), h.sentCompleteBoundaryFunction ? v(s, Zu) : (h.sentCompleteBoundaryFunction = !0, v(s, Gu)), E === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var H = C(R.toString(16));
      return v(s, E), v(s, Qu), v(s, h.segmentPrefix), v(s, H), y(s, Ju);
    }
    var ec = m(Kn + ';$RX("'), tc = m('$RX("'), Yo = m('"'), nc = m(")<\/script>"), Xo = m(",");
    function Jl(s, h, E, R, H, re) {
      if (v(s, h.startInlineScript), h.sentClientRenderFunction ? v(s, tc) : (h.sentClientRenderFunction = !0, v(s, ec)), E === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return v(s, E), v(s, Yo), (R || H || re) && (v(s, Xo), v(s, C(qo(R || "")))), (H || re) && (v(s, Xo), v(s, C(qo(H || "")))), re && (v(s, Xo), v(s, C(qo(re)))), y(s, nc);
    }
    var es = /[<\u2028\u2029]/g;
    function qo(s) {
      var h = JSON.stringify(s);
      return h.replace(es, function(E) {
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
    var Jn = Object.assign, rc = Symbol.for("react.element"), ts = Symbol.for("react.portal"), Yn = Symbol.for("react.fragment"), ns = Symbol.for("react.strict_mode"), Go = Symbol.for("react.profiler"), Wi = Symbol.for("react.provider"), Vi = Symbol.for("react.context"), ji = Symbol.for("react.forward_ref"), ja = Symbol.for("react.suspense"), Ua = Symbol.for("react.suspense_list"), Ka = Symbol.for("react.memo"), xa = Symbol.for("react.lazy"), Zo = Symbol.for("react.scope"), Qo = Symbol.for("react.debug_trace_mode"), Ui = Symbol.for("react.legacy_hidden"), ac = Symbol.for("react.default_value"), rs = Symbol.iterator, ic = "@@iterator";
    function oc(s) {
      if (s === null || typeof s != "object")
        return null;
      var h = rs && s[rs] || s[ic];
      return typeof h == "function" ? h : null;
    }
    function as(s, h, E) {
      var R = s.displayName;
      if (R)
        return R;
      var H = h.displayName || h.name || "";
      return H !== "" ? E + "(" + H + ")" : E;
    }
    function is(s) {
      return s.displayName || "Context";
    }
    function sn(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && i("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case Yn:
          return "Fragment";
        case ts:
          return "Portal";
        case Go:
          return "Profiler";
        case ns:
          return "StrictMode";
        case ja:
          return "Suspense";
        case Ua:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case Vi:
            var h = s;
            return is(h) + ".Consumer";
          case Wi:
            var E = s;
            return is(E._context) + ".Provider";
          case ji:
            return as(s, s.render, "ForwardRef");
          case Ka:
            var R = s.displayName || null;
            return R !== null ? R : sn(s.type) || "Memo";
          case xa: {
            var H = s, re = H._payload, de = H._init;
            try {
              return sn(de(re));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ya = 0, Jo, an, ba, el, tl, nl, rl;
    function al() {
    }
    al.__reactDisabledLog = !0;
    function os() {
      {
        if (Ya === 0) {
          Jo = console.log, an = console.info, ba = console.warn, el = console.error, tl = console.group, nl = console.groupCollapsed, rl = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: al,
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
        Ya++;
      }
    }
    function ls() {
      {
        if (Ya--, Ya === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Jn({}, s, {
              value: Jo
            }),
            info: Jn({}, s, {
              value: an
            }),
            warn: Jn({}, s, {
              value: ba
            }),
            error: Jn({}, s, {
              value: el
            }),
            group: Jn({}, s, {
              value: tl
            }),
            groupCollapsed: Jn({}, s, {
              value: nl
            }),
            groupEnd: Jn({}, s, {
              value: rl
            })
          });
        }
        Ya < 0 && i("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ki = r.ReactCurrentDispatcher, il;
    function Xa(s, h, E) {
      {
        if (il === void 0)
          try {
            throw Error();
          } catch (H) {
            var R = H.stack.trim().match(/\n( *(at )?)/);
            il = R && R[1] || "";
          }
        return `
` + il + s;
      }
    }
    var qa = !1, Sa;
    {
      var Ga = typeof WeakMap == "function" ? WeakMap : Map;
      Sa = new Ga();
    }
    function Za(s, h) {
      if (!s || qa)
        return "";
      {
        var E = Sa.get(s);
        if (E !== void 0)
          return E;
      }
      var R;
      qa = !0;
      var H = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var re;
      re = Ki.current, Ki.current = null, os();
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
            } catch (oe) {
              R = oe;
            }
            Reflect.construct(s, [], de);
          } else {
            try {
              de.call();
            } catch (oe) {
              R = oe;
            }
            s.call(de.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (oe) {
            R = oe;
          }
          s();
        }
      } catch (oe) {
        if (oe && R && typeof oe.stack == "string") {
          for (var Se = oe.stack.split(`
`), o = R.stack.split(`
`), c = Se.length - 1, S = o.length - 1; c >= 1 && S >= 0 && Se[c] !== o[S]; )
            S--;
          for (; c >= 1 && S >= 0; c--, S--)
            if (Se[c] !== o[S]) {
              if (c !== 1 || S !== 1)
                do
                  if (c--, S--, S < 0 || Se[c] !== o[S]) {
                    var w = `
` + Se[c].replace(" at new ", " at ");
                    return s.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", s.displayName)), typeof s == "function" && Sa.set(s, w), w;
                  }
                while (c >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        qa = !1, Ki.current = re, ls(), Error.prepareStackTrace = H;
      }
      var N = s ? s.displayName || s.name : "", Z = N ? Xa(N) : "";
      return typeof s == "function" && Sa.set(s, Z), Z;
    }
    function Yi(s, h, E) {
      return Za(s, !0);
    }
    function ss(s, h, E) {
      return Za(s, !1);
    }
    function ol(s) {
      var h = s.prototype;
      return !!(h && h.isReactComponent);
    }
    function ll(s, h, E) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return Za(s, ol(s));
      if (typeof s == "string")
        return Xa(s);
      switch (s) {
        case ja:
          return Xa("Suspense");
        case Ua:
          return Xa("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case ji:
            return ss(s.render);
          case Ka:
            return ll(s.type, h, E);
          case xa: {
            var R = s, H = R._payload, re = R._init;
            try {
              return ll(re(H), h, E);
            } catch {
            }
          }
        }
      return "";
    }
    var sl = {}, us = r.ReactDebugCurrentFrame;
    function Ea(s) {
      if (s) {
        var h = s._owner, E = ll(s.type, s._source, h ? h.type : null);
        us.setExtraStackFrame(E);
      } else
        us.setExtraStackFrame(null);
    }
    function ul(s, h, E, R, H) {
      {
        var re = Function.call.bind(Y);
        for (var de in s)
          if (re(s, de)) {
            var Se = void 0;
            try {
              if (typeof s[de] != "function") {
                var o = Error((R || "React class") + ": " + E + " type `" + de + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[de] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw o.name = "Invariant Violation", o;
              }
              Se = s[de](h, de, R, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              Se = c;
            }
            Se && !(Se instanceof Error) && (Ea(H), i("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", R || "React class", E, de, typeof Se), Ea(null)), Se instanceof Error && !(Se.message in sl) && (sl[Se.message] = !0, Ea(H), i("Failed %s type: %s", E, Se.message), Ea(null));
          }
      }
    }
    var Xi;
    Xi = {};
    var Gr = {};
    Object.freeze(Gr);
    function cl(s, h) {
      {
        var E = s.contextTypes;
        if (!E)
          return Gr;
        var R = {};
        for (var H in E)
          R[H] = h[H];
        {
          var re = sn(s) || "Unknown";
          ul(E, R, "context", re);
        }
        return R;
      }
    }
    function dl(s, h, E, R) {
      {
        if (typeof s.getChildContext != "function") {
          {
            var H = sn(h) || "Unknown";
            Xi[H] || (Xi[H] = !0, i("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", H, H));
          }
          return E;
        }
        var re = s.getChildContext();
        for (var de in re)
          if (!(de in R))
            throw new Error((sn(h) || "Unknown") + '.getChildContext(): key "' + de + '" is not defined in childContextTypes.');
        {
          var Se = sn(h) || "Unknown";
          ul(R, re, "child context", Se);
        }
        return Jn({}, E, re);
      }
    }
    var Nr;
    Nr = {};
    var cs = null, Zr = null;
    function Qr(s) {
      s.context._currentValue = s.parentValue;
    }
    function fl(s) {
      s.context._currentValue = s.value;
    }
    function yr(s, h) {
      if (s !== h) {
        Qr(s);
        var E = s.parent, R = h.parent;
        if (E === null) {
          if (R !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (R === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          yr(E, R);
        }
        fl(h);
      }
    }
    function qi(s) {
      Qr(s);
      var h = s.parent;
      h !== null && qi(h);
    }
    function Gi(s) {
      var h = s.parent;
      h !== null && Gi(h), fl(s);
    }
    function Qa(s, h) {
      Qr(s);
      var E = s.parent;
      if (E === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      E.depth === h.depth ? yr(E, h) : Qa(E, h);
    }
    function hl(s, h) {
      var E = h.parent;
      if (E === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      s.depth === E.depth ? yr(s, E) : hl(s, E), fl(h);
    }
    function Ja(s) {
      var h = Zr, E = s;
      h !== E && (h === null ? Gi(E) : E === null ? qi(h) : h.depth === E.depth ? yr(h, E) : h.depth > E.depth ? Qa(h, E) : hl(h, E), Zr = E);
    }
    function ds(s, h) {
      var E;
      E = s._currentValue, s._currentValue = h, s._currentRenderer !== void 0 && s._currentRenderer !== null && s._currentRenderer !== Nr && i("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), s._currentRenderer = Nr;
      var R = Zr, H = {
        parent: R,
        depth: R === null ? 0 : R.depth + 1,
        context: s,
        parentValue: E,
        value: h
      };
      return Zr = H, H;
    }
    function fs(s) {
      var h = Zr;
      if (h === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      h.context !== s && i("The parent context is not the expected context. This is probably a bug in React.");
      {
        var E = h.parentValue;
        E === ac ? h.context._currentValue = h.context._defaultValue : h.context._currentValue = E, s._currentRenderer !== void 0 && s._currentRenderer !== null && s._currentRenderer !== Nr && i("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), s._currentRenderer = Nr;
      }
      return Zr = h.parent;
    }
    function Zi() {
      return Zr;
    }
    function ei(s) {
      var h = s._currentValue;
      return h;
    }
    function pl(s) {
      return s._reactInternals;
    }
    function lc(s, h) {
      s._reactInternals = h;
    }
    var ka = {}, Qi = {}, ml, Ji, eo, ti, to, Ta, ni, no, wa;
    {
      ml = /* @__PURE__ */ new Set(), Ji = /* @__PURE__ */ new Set(), eo = /* @__PURE__ */ new Set(), ni = /* @__PURE__ */ new Set(), ti = /* @__PURE__ */ new Set(), no = /* @__PURE__ */ new Set(), wa = /* @__PURE__ */ new Set();
      var ro = /* @__PURE__ */ new Set();
      Ta = function(s, h) {
        if (!(s === null || typeof s == "function")) {
          var E = h + "_" + s;
          ro.has(E) || (ro.add(E), i("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", h, s));
        }
      }, to = function(s, h) {
        if (h === void 0) {
          var E = sn(s) || "Component";
          ti.has(E) || (ti.add(E), i("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", E));
        }
      };
    }
    function ao(s, h) {
      {
        var E = s.constructor, R = E && sn(E) || "ReactClass", H = R + "." + h;
        if (ka[H])
          return;
        i(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, h, h, R), ka[H] = !0;
      }
    }
    var io = {
      isMounted: function(s) {
        return !1;
      },
      enqueueSetState: function(s, h, E) {
        var R = pl(s);
        R.queue === null ? ao(s, "setState") : (R.queue.push(h), E != null && Ta(E, "setState"));
      },
      enqueueReplaceState: function(s, h, E) {
        var R = pl(s);
        R.replace = !0, R.queue = [h], E != null && Ta(E, "setState");
      },
      enqueueForceUpdate: function(s, h) {
        var E = pl(s);
        E.queue === null ? ao(s, "forceUpdate") : h != null && Ta(h, "setState");
      }
    };
    function hs(s, h, E, R, H) {
      var re = E(H, R);
      to(h, re);
      var de = re == null ? R : Jn({}, R, re);
      return de;
    }
    function ps(s, h, E) {
      var R = Gr, H = s.contextType;
      if ("contextType" in s) {
        var re = (
          // Allow null for conditional declaration
          H === null || H !== void 0 && H.$$typeof === Vi && H._context === void 0
        );
        if (!re && !wa.has(s)) {
          wa.add(s);
          var de = "";
          H === void 0 ? de = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof H != "object" ? de = " However, it is set to a " + typeof H + "." : H.$$typeof === Wi ? de = " Did you accidentally pass the Context.Provider instead?" : H._context !== void 0 ? de = " Did you accidentally pass the Context.Consumer instead?" : de = " However, it is set to an object with keys {" + Object.keys(H).join(", ") + "}.", i("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", sn(s) || "Component", de);
        }
      }
      typeof H == "object" && H !== null ? R = ei(H) : R = E;
      var Se = new s(h, R);
      {
        if (typeof s.getDerivedStateFromProps == "function" && (Se.state === null || Se.state === void 0)) {
          var o = sn(s) || "Component";
          ml.has(o) || (ml.add(o), i("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", o, Se.state === null ? "null" : "undefined", o));
        }
        if (typeof s.getDerivedStateFromProps == "function" || typeof Se.getSnapshotBeforeUpdate == "function") {
          var c = null, S = null, w = null;
          if (typeof Se.componentWillMount == "function" && Se.componentWillMount.__suppressDeprecationWarning !== !0 ? c = "componentWillMount" : typeof Se.UNSAFE_componentWillMount == "function" && (c = "UNSAFE_componentWillMount"), typeof Se.componentWillReceiveProps == "function" && Se.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? S = "componentWillReceiveProps" : typeof Se.UNSAFE_componentWillReceiveProps == "function" && (S = "UNSAFE_componentWillReceiveProps"), typeof Se.componentWillUpdate == "function" && Se.componentWillUpdate.__suppressDeprecationWarning !== !0 ? w = "componentWillUpdate" : typeof Se.UNSAFE_componentWillUpdate == "function" && (w = "UNSAFE_componentWillUpdate"), c !== null || S !== null || w !== null) {
            var N = sn(s) || "Component", Z = typeof s.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            eo.has(N) || (eo.add(N), i(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, N, Z, c !== null ? `
  ` + c : "", S !== null ? `
  ` + S : "", w !== null ? `
  ` + w : ""));
          }
        }
      }
      return Se;
    }
    function ms(s, h, E) {
      {
        var R = sn(h) || "Component", H = s.render;
        H || (h.prototype && typeof h.prototype.render == "function" ? i("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", R) : i("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", R)), s.getInitialState && !s.getInitialState.isReactClassApproved && !s.state && i("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", R), s.getDefaultProps && !s.getDefaultProps.isReactClassApproved && i("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", R), s.propTypes && i("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", R), s.contextType && i("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", R), s.contextTypes && i("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", R), h.contextType && h.contextTypes && !no.has(h) && (no.add(h), i("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", R)), typeof s.componentShouldUpdate == "function" && i("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", R), h.prototype && h.prototype.isPureReactComponent && typeof s.shouldComponentUpdate < "u" && i("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", sn(h) || "A pure component"), typeof s.componentDidUnmount == "function" && i("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", R), typeof s.componentDidReceiveProps == "function" && i("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", R), typeof s.componentWillRecieveProps == "function" && i("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", R), typeof s.UNSAFE_componentWillRecieveProps == "function" && i("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", R);
        var re = s.props !== E;
        s.props !== void 0 && re && i("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", R, R), s.defaultProps && i("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", R, R), typeof s.getSnapshotBeforeUpdate == "function" && typeof s.componentDidUpdate != "function" && !Ji.has(h) && (Ji.add(h), i("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", sn(h))), typeof s.getDerivedStateFromProps == "function" && i("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", R), typeof s.getDerivedStateFromError == "function" && i("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", R), typeof h.getSnapshotBeforeUpdate == "function" && i("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", R);
        var de = s.state;
        de && (typeof de != "object" || Ye(de)) && i("%s.state: must be set to an object or null", R), typeof s.getChildContext == "function" && typeof h.childContextTypes != "object" && i("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", R);
      }
    }
    function sc(s, h) {
      var E = h.state;
      if (typeof h.componentWillMount == "function") {
        if (h.componentWillMount.__suppressDeprecationWarning !== !0) {
          var R = sn(s) || "Unknown";
          Qi[R] || (n(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            R
          ), Qi[R] = !0);
        }
        h.componentWillMount();
      }
      typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), E !== h.state && (i("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", sn(s) || "Component"), io.enqueueReplaceState(h, h.state, null));
    }
    function uc(s, h, E, R) {
      if (s.queue !== null && s.queue.length > 0) {
        var H = s.queue, re = s.replace;
        if (s.queue = null, s.replace = !1, re && H.length === 1)
          h.state = H[0];
        else {
          for (var de = re ? H[0] : h.state, Se = !0, o = re ? 1 : 0; o < H.length; o++) {
            var c = H[o], S = typeof c == "function" ? c.call(h, de, E, R) : c;
            S != null && (Se ? (Se = !1, de = Jn({}, de, S)) : Jn(de, S));
          }
          h.state = de;
        }
      } else
        s.queue = null;
    }
    function gs(s, h, E, R) {
      ms(s, h, E);
      var H = s.state !== void 0 ? s.state : null;
      s.updater = io, s.props = E, s.state = H;
      var re = {
        queue: [],
        replace: !1
      };
      lc(s, re);
      var de = h.contextType;
      if (typeof de == "object" && de !== null ? s.context = ei(de) : s.context = R, s.state === E) {
        var Se = sn(h) || "Component";
        ni.has(Se) || (ni.add(Se), i("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", Se));
      }
      var o = h.getDerivedStateFromProps;
      typeof o == "function" && (s.state = hs(s, h, o, H, E)), typeof h.getDerivedStateFromProps != "function" && typeof s.getSnapshotBeforeUpdate != "function" && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function") && (sc(h, s), uc(re, s, E, R));
    }
    var cc = {
      id: 1,
      overflow: ""
    };
    function dc(s) {
      var h = s.overflow, E = s.id, R = E & ~fc(E);
      return R.toString(32) + h;
    }
    function oo(s, h, E) {
      var R = s.id, H = s.overflow, re = lo(R) - 1, de = R & ~(1 << re), Se = E + 1, o = lo(h) + re;
      if (o > 30) {
        var c = re - re % 5, S = (1 << c) - 1, w = (de & S).toString(32), N = de >> c, Z = re - c, oe = lo(h) + Z, be = Se << Z, Re = be | N, Ue = w + H;
        return {
          id: 1 << oe | Re,
          overflow: Ue
        };
      } else {
        var Xe = Se << re, at = Xe | de, tn = H;
        return {
          id: 1 << o | at,
          overflow: tn
        };
      }
    }
    function lo(s) {
      return 32 - gl(s);
    }
    function fc(s) {
      return 1 << lo(s) - 1;
    }
    var gl = Math.clz32 ? Math.clz32 : pc, so = Math.log, hc = Math.LN2;
    function pc(s) {
      var h = s >>> 0;
      return h === 0 ? 32 : 31 - (so(h) / hc | 0) | 0;
    }
    function mc(s, h) {
      return s === h && (s !== 0 || 1 / s === 1 / h) || s !== s && h !== h;
    }
    var gc = typeof Object.is == "function" ? Object.is : mc, Tr = null, yl = null, uo = null, At = null, Jr = !1, ea = !1, Wt = 0, er = null, ta = 0, co = 25, Dn = !1, wr;
    function na() {
      if (Tr === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Dn && i("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Tr;
    }
    function vr(s, h) {
      if (h === null)
        return i("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", wr), !1;
      s.length !== h.length && i(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, wr, "[" + s.join(", ") + "]", "[" + h.join(", ") + "]");
      for (var E = 0; E < h.length && E < s.length; E++)
        if (!gc(s[E], h[E]))
          return !1;
      return !0;
    }
    function ra() {
      if (ta > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function Cr() {
      return At === null ? uo === null ? (Jr = !1, uo = At = ra()) : (Jr = !0, At = uo) : At.next === null ? (Jr = !1, At = At.next = ra()) : (Jr = !0, At = At.next), At;
    }
    function yc(s, h) {
      Tr = h, yl = s, Dn = !1, Wt = 0;
    }
    function ys(s, h, E, R) {
      for (; ea; )
        ea = !1, Wt = 0, ta += 1, At = null, E = s(h, R);
      return vl(), E;
    }
    function fo() {
      var s = Wt !== 0;
      return s;
    }
    function vl() {
      Dn = !1, Tr = null, yl = null, ea = !1, uo = null, ta = 0, er = null, At = null;
    }
    function vc(s) {
      return Dn && i("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), ei(s);
    }
    function vs(s) {
      return wr = "useContext", na(), ei(s);
    }
    function ri(s, h) {
      return typeof h == "function" ? h(s) : h;
    }
    function xc(s) {
      return wr = "useState", xs(
        ri,
        // useReducer has a special case to support lazy useState initializers
        s
      );
    }
    function xs(s, h, E) {
      if (s !== ri && (wr = "useReducer"), Tr = na(), At = Cr(), Jr) {
        var R = At.queue, H = R.dispatch;
        if (er !== null) {
          var re = er.get(R);
          if (re !== void 0) {
            er.delete(R);
            var de = At.memoizedState, Se = re;
            do {
              var o = Se.action;
              Dn = !0, de = s(de, o), Dn = !1, Se = Se.next;
            } while (Se !== null);
            return At.memoizedState = de, [de, H];
          }
        }
        return [At.memoizedState, H];
      } else {
        Dn = !0;
        var c;
        s === ri ? c = typeof h == "function" ? h() : h : c = E !== void 0 ? E(h) : h, Dn = !1, At.memoizedState = c;
        var S = At.queue = {
          last: null,
          dispatch: null
        }, w = S.dispatch = Ss.bind(null, Tr, S);
        return [At.memoizedState, w];
      }
    }
    function ho(s, h) {
      Tr = na(), At = Cr();
      var E = h === void 0 ? null : h;
      if (At !== null) {
        var R = At.memoizedState;
        if (R !== null && E !== null) {
          var H = R[1];
          if (vr(E, H))
            return R[0];
        }
      }
      Dn = !0;
      var re = s();
      return Dn = !1, At.memoizedState = [re, E], re;
    }
    function bc(s) {
      Tr = na(), At = Cr();
      var h = At.memoizedState;
      if (h === null) {
        var E = {
          current: s
        };
        return Object.seal(E), At.memoizedState = E, E;
      } else
        return h;
    }
    function bs(s, h) {
      wr = "useLayoutEffect", i("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Ss(s, h, E) {
      if (ta >= co)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (s === Tr) {
        ea = !0;
        var R = {
          action: E,
          next: null
        };
        er === null && (er = /* @__PURE__ */ new Map());
        var H = er.get(h);
        if (H === void 0)
          er.set(h, R);
        else {
          for (var re = H; re.next !== null; )
            re = re.next;
          re.next = R;
        }
      }
    }
    function Sc(s, h) {
      return ho(function() {
        return s;
      }, h);
    }
    function Ec(s, h, E) {
      return na(), h(s._source);
    }
    function kc(s, h, E) {
      if (E === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return E();
    }
    function Tc(s) {
      return na(), s;
    }
    function wc() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function Cc() {
      return na(), [!1, wc];
    }
    function Ac() {
      var s = yl, h = dc(s.treeContext), E = xl;
      if (E === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var R = Wt++;
      return Qt(E, h, R);
    }
    function po() {
    }
    var Es = {
      readContext: vc,
      useContext: vs,
      useMemo: ho,
      useReducer: xs,
      useRef: bc,
      useState: xc,
      useInsertionEffect: po,
      useLayoutEffect: bs,
      useCallback: Sc,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: po,
      // Effects are not run in the server environment.
      useEffect: po,
      // Debugging effect
      useDebugValue: po,
      useDeferredValue: Tc,
      useTransition: Cc,
      useId: Ac,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Ec,
      useSyncExternalStore: kc
    }, xl = null;
    function ai(s) {
      xl = s;
    }
    function ks(s) {
      try {
        var h = "", E = s;
        do {
          switch (E.tag) {
            case 0:
              h += Xa(E.type, null, null);
              break;
            case 1:
              h += ss(E.type, null, null);
              break;
            case 2:
              h += Yi(E.type, null, null);
              break;
          }
          E = E.parent;
        } while (E);
        return h;
      } catch (R) {
        return `
Error generating stack: ` + R.message + `
` + R.stack;
      }
    }
    var ii = r.ReactCurrentDispatcher, mo = r.ReactDebugCurrentFrame, bl = 0, Fr = 1, go = 2, yo = 3, aa = 4, Ts = 0, Sl = 1, ia = 2, Pc = 12800;
    function ws(s) {
      return console.error(s), null;
    }
    function xr() {
    }
    function Rc(s, h, E, R, H, re, de, Se, o) {
      var c = [], S = /* @__PURE__ */ new Set(), w = {
        destination: null,
        responseState: h,
        progressiveChunkSize: R === void 0 ? Pc : R,
        status: Ts,
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
        onError: H === void 0 ? ws : H,
        onAllReady: re === void 0 ? xr : re,
        onShellReady: de === void 0 ? xr : de,
        onShellError: Se === void 0 ? xr : Se,
        onFatalError: o === void 0 ? xr : o
      }, N = vo(
        w,
        0,
        null,
        E,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      N.parentFlushed = !0;
      var Z = El(w, s, null, N, S, Gr, cs, cc);
      return c.push(Z), w;
    }
    function Lc(s, h) {
      var E = s.pingedTasks;
      E.push(h), E.length === 1 && p(function() {
        return di(s);
      });
    }
    function oi(s, h) {
      return {
        id: Qn,
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
    function El(s, h, E, R, H, re, de, Se) {
      s.allPendingTasks++, E === null ? s.pendingRootTasks++ : E.pendingTasks++;
      var o = {
        node: h,
        ping: function() {
          return Lc(s, o);
        },
        blockedBoundary: E,
        blockedSegment: R,
        abortSet: H,
        legacyContext: re,
        context: de,
        treeContext: Se
      };
      return o.componentStack = null, H.add(o), o;
    }
    function vo(s, h, E, R, H, re) {
      return {
        status: bl,
        id: -1,
        // lazily assigned later
        index: h,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: R,
        boundary: E,
        lastPushedText: H,
        textEmbedded: re
      };
    }
    var Ar = null;
    function li() {
      return Ar === null || Ar.componentStack === null ? "" : ks(Ar.componentStack);
    }
    function zr(s, h) {
      s.componentStack = {
        tag: 0,
        parent: s.componentStack,
        type: h
      };
    }
    function br(s, h) {
      s.componentStack = {
        tag: 1,
        parent: s.componentStack,
        type: h
      };
    }
    function kl(s, h) {
      s.componentStack = {
        tag: 2,
        parent: s.componentStack,
        type: h
      };
    }
    function tr(s) {
      s.componentStack === null ? i("Unexpectedly popped too many stack frames. This is a bug in React.") : s.componentStack = s.componentStack.parent;
    }
    var Ca = null;
    function Tl(s, h) {
      {
        var E;
        typeof h == "string" ? E = h : h && typeof h.message == "string" ? E = h.message : E = String(h);
        var R = Ca || li();
        Ca = null, s.errorMessage = E, s.errorComponentStack = R;
      }
    }
    function nr(s, h) {
      var E = s.onError(h);
      if (E != null && typeof E != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof E + '" instead');
      return E;
    }
    function Br(s, h) {
      var E = s.onShellError;
      E(h);
      var R = s.onFatalError;
      R(h), s.destination !== null ? (s.status = ia, D(s.destination, h)) : (s.status = Sl, s.fatalError = h);
    }
    function wl(s, h, E) {
      zr(h, "Suspense");
      var R = h.blockedBoundary, H = h.blockedSegment, re = E.fallback, de = E.children, Se = /* @__PURE__ */ new Set(), o = oi(s, Se), c = H.chunks.length, S = vo(
        s,
        c,
        o,
        H.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      H.children.push(S), H.lastPushedText = !1;
      var w = vo(
        s,
        0,
        null,
        H.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      w.parentFlushed = !0, h.blockedBoundary = o, h.blockedSegment = w;
      try {
        if (_l(s, h, de), or(w.chunks, s.responseState, w.lastPushedText, w.textEmbedded), w.status = Fr, So(o, w), o.pendingTasks === 0) {
          tr(h);
          return;
        }
      } catch (Z) {
        w.status = aa, o.forceClientRender = !0, o.errorDigest = nr(s, Z), Tl(o, Z);
      } finally {
        h.blockedBoundary = R, h.blockedSegment = H;
      }
      var N = El(s, re, R, S, Se, h.legacyContext, h.context, h.treeContext);
      N.componentStack = h.componentStack, s.pingedTasks.push(N), tr(h);
    }
    function si(s, h, E, R) {
      zr(h, E);
      var H = h.blockedSegment, re = Ba(H.chunks, E, R, s.responseState, H.formatContext);
      H.lastPushedText = !1;
      var de = H.formatContext;
      H.formatContext = Rn(de, E, R), _l(s, h, re), H.formatContext = de, Li(H.chunks, E), H.lastPushedText = !1, tr(h);
    }
    function xo(s) {
      return s.prototype && s.prototype.isReactComponent;
    }
    function Cs(s, h, E, R, H) {
      var re = {};
      yc(h, re);
      var de = E(R, H);
      return ys(E, R, de, H);
    }
    function As(s, h, E, R, H) {
      var re = E.render();
      E.props !== H && (ci || i("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", sn(R) || "a component"), ci = !0);
      {
        var de = R.childContextTypes;
        if (de != null) {
          var Se = h.legacyContext, o = dl(E, R, Se, de);
          h.legacyContext = o, Xn(s, h, re), h.legacyContext = Se;
          return;
        }
      }
      Xn(s, h, re);
    }
    function Dc(s, h, E, R) {
      kl(h, E);
      var H = cl(E, h.legacyContext), re = ps(E, R, H);
      gs(re, E, R, H), As(s, h, re, E, R), tr(h);
    }
    var Cl = {}, ui = {}, Ps = {}, Al = {}, ci = !1, Pl = !1, Rl = !1, Ll = !1;
    function Rs(s, h, E, R) {
      var H;
      if (H = cl(E, h.legacyContext), br(h, E), E.prototype && typeof E.prototype.render == "function") {
        var re = sn(E) || "Unknown";
        Cl[re] || (i("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", re, re), Cl[re] = !0);
      }
      var de = Cs(s, h, E, R, H), Se = fo();
      if (typeof de == "object" && de !== null && typeof de.render == "function" && de.$$typeof === void 0) {
        var o = sn(E) || "Unknown";
        ui[o] || (i("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", o, o, o), ui[o] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof de == "object" && de !== null && typeof de.render == "function" && de.$$typeof === void 0
      ) {
        {
          var c = sn(E) || "Unknown";
          ui[c] || (i("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", c, c, c), ui[c] = !0);
        }
        gs(de, E, R, H), As(s, h, de, E, R);
      } else if (Ls(E), Se) {
        var S = h.treeContext, w = 1, N = 0;
        h.treeContext = oo(S, w, N);
        try {
          Xn(s, h, de);
        } finally {
          h.treeContext = S;
        }
      } else
        Xn(s, h, de);
      tr(h);
    }
    function Ls(s) {
      {
        if (s && s.childContextTypes && i("%s(...): childContextTypes cannot be defined on a function component.", s.displayName || s.name || "Component"), typeof s.getDerivedStateFromProps == "function") {
          var h = sn(s) || "Unknown";
          Al[h] || (i("%s: Function components do not support getDerivedStateFromProps.", h), Al[h] = !0);
        }
        if (typeof s.contextType == "object" && s.contextType !== null) {
          var E = sn(s) || "Unknown";
          Ps[E] || (i("%s: Function components do not support contextType.", E), Ps[E] = !0);
        }
      }
    }
    function Dl(s, h) {
      if (s && s.defaultProps) {
        var E = Jn({}, h), R = s.defaultProps;
        for (var H in R)
          E[H] === void 0 && (E[H] = R[H]);
        return E;
      }
      return h;
    }
    function Oc(s, h, E, R, H) {
      br(h, E.render);
      var re = Cs(s, h, E.render, R, H), de = fo();
      if (de) {
        var Se = h.treeContext, o = 1, c = 0;
        h.treeContext = oo(Se, o, c);
        try {
          Xn(s, h, re);
        } finally {
          h.treeContext = Se;
        }
      } else
        Xn(s, h, re);
      tr(h);
    }
    function Mc(s, h, E, R, H) {
      var re = E.type, de = Dl(re, R);
      Ol(s, h, re, de, H);
    }
    function Ds(s, h, E, R) {
      E._context === void 0 ? E !== E.Consumer && (Ll || (Ll = !0, i("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : E = E._context;
      var H = R.children;
      typeof H != "function" && i("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var re = ei(E), de = H(re);
      Xn(s, h, de);
    }
    function _c(s, h, E, R) {
      var H = E._context, re = R.value, de = R.children, Se;
      Se = h.context, h.context = ds(H, re), Xn(s, h, de), h.context = fs(H), Se !== h.context && i("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function Nc(s, h, E, R, H) {
      zr(h, "Lazy");
      var re = E._payload, de = E._init, Se = de(re), o = Dl(Se, R);
      Ol(s, h, Se, o, H), tr(h);
    }
    function Ol(s, h, E, R, H) {
      if (typeof E == "function")
        if (xo(E)) {
          Dc(s, h, E, R);
          return;
        } else {
          Rs(s, h, E, R);
          return;
        }
      if (typeof E == "string") {
        si(s, h, E, R);
        return;
      }
      switch (E) {
        case Ui:
        case Qo:
        case ns:
        case Go:
        case Yn: {
          Xn(s, h, R.children);
          return;
        }
        case Ua: {
          zr(h, "SuspenseList"), Xn(s, h, R.children), tr(h);
          return;
        }
        case Zo:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case ja: {
          wl(s, h, R);
          return;
        }
      }
      if (typeof E == "object" && E !== null)
        switch (E.$$typeof) {
          case ji: {
            Oc(s, h, E, R, H);
            return;
          }
          case Ka: {
            Mc(s, h, E, R, H);
            return;
          }
          case Wi: {
            _c(s, h, E, R);
            return;
          }
          case Vi: {
            Ds(s, h, E, R);
            return;
          }
          case xa: {
            Nc(s, h, E, R);
            return;
          }
        }
      var re = "";
      throw (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (re += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (E == null ? E : typeof E) + "." + re));
    }
    function Fc(s, h) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      s[Symbol.toStringTag] === "Generator" && (Pl || i("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Pl = !0), s.entries === h && (Rl || i("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Rl = !0);
    }
    function Xn(s, h, E) {
      try {
        return Ml(s, h, E);
      } catch (R) {
        throw typeof R == "object" && R !== null && typeof R.then == "function" || (Ca = Ca !== null ? Ca : li()), R;
      }
    }
    function Ml(s, h, E) {
      if (h.node = E, typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case rc: {
            var R = E, H = R.type, re = R.props, de = R.ref;
            Ol(s, h, H, re, de);
            return;
          }
          case ts:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case xa: {
            var Se = E, o = Se._payload, c = Se._init, S;
            try {
              S = c(o);
            } catch (Xe) {
              throw typeof Xe == "object" && Xe !== null && typeof Xe.then == "function" && zr(h, "Lazy"), Xe;
            }
            Xn(s, h, S);
            return;
          }
        }
        if (Ye(E)) {
          Os(s, h, E);
          return;
        }
        var w = oc(E);
        if (w) {
          Fc(E, w);
          var N = w.call(E);
          if (N) {
            var Z = N.next();
            if (!Z.done) {
              var oe = [];
              do
                oe.push(Z.value), Z = N.next();
              while (!Z.done);
              Os(s, h, oe);
              return;
            }
            return;
          }
        }
        var be = Object.prototype.toString.call(E);
        throw new Error("Objects are not valid as a React child (found: " + (be === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : be) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof E == "string") {
        var Re = h.blockedSegment;
        Re.lastPushedText = ir(h.blockedSegment.chunks, E, s.responseState, Re.lastPushedText);
        return;
      }
      if (typeof E == "number") {
        var Ue = h.blockedSegment;
        Ue.lastPushedText = ir(h.blockedSegment.chunks, "" + E, s.responseState, Ue.lastPushedText);
        return;
      }
      typeof E == "function" && i("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function Os(s, h, E) {
      for (var R = E.length, H = 0; H < R; H++) {
        var re = h.treeContext;
        h.treeContext = oo(re, R, H);
        try {
          _l(s, h, E[H]);
        } finally {
          h.treeContext = re;
        }
      }
    }
    function qn(s, h, E) {
      var R = h.blockedSegment, H = R.chunks.length, re = vo(
        s,
        H,
        null,
        R.formatContext,
        // Adopt the parent segment's leading text embed
        R.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      R.children.push(re), R.lastPushedText = !1;
      var de = El(s, h.node, h.blockedBoundary, re, h.abortSet, h.legacyContext, h.context, h.treeContext);
      h.componentStack !== null && (de.componentStack = h.componentStack.parent);
      var Se = de.ping;
      E.then(Se, Se);
    }
    function _l(s, h, E) {
      var R = h.blockedSegment.formatContext, H = h.legacyContext, re = h.context, de = null;
      de = h.componentStack;
      try {
        return Xn(s, h, E);
      } catch (Se) {
        if (vl(), typeof Se == "object" && Se !== null && typeof Se.then == "function") {
          qn(s, h, Se), h.blockedSegment.formatContext = R, h.legacyContext = H, h.context = re, Ja(re), h.componentStack = de;
          return;
        } else
          throw h.blockedSegment.formatContext = R, h.legacyContext = H, h.context = re, Ja(re), h.componentStack = de, Se;
      }
    }
    function Ms(s, h, E, R) {
      var H = nr(s, R);
      if (h === null ? Br(s, R) : (h.pendingTasks--, h.forceClientRender || (h.forceClientRender = !0, h.errorDigest = H, Tl(h, R), h.parentFlushed && s.clientRenderedBoundaries.push(h))), s.allPendingTasks--, s.allPendingTasks === 0) {
        var re = s.onAllReady;
        re();
      }
    }
    function zc(s) {
      var h = this, E = s.blockedBoundary, R = s.blockedSegment;
      R.status = yo, _s(h, E, R);
    }
    function bo(s, h, E) {
      var R = s.blockedBoundary, H = s.blockedSegment;
      if (H.status = yo, R === null)
        h.allPendingTasks--, h.status !== ia && (h.status = ia, h.destination !== null && T(h.destination));
      else {
        if (R.pendingTasks--, !R.forceClientRender) {
          R.forceClientRender = !0;
          var re = E === void 0 ? new Error("The render was aborted by the server without a reason.") : E;
          R.errorDigest = h.onError(re);
          {
            var de = "The server did not finish this Suspense boundary: ";
            re && typeof re.message == "string" ? re = de + re.message : re = de + String(re);
            var Se = Ar;
            Ar = s;
            try {
              Tl(R, re);
            } finally {
              Ar = Se;
            }
          }
          R.parentFlushed && h.clientRenderedBoundaries.push(R);
        }
        if (R.fallbackAbortableTasks.forEach(function(c) {
          return bo(c, h, E);
        }), R.fallbackAbortableTasks.clear(), h.allPendingTasks--, h.allPendingTasks === 0) {
          var o = h.onAllReady;
          o();
        }
      }
    }
    function So(s, h) {
      if (h.chunks.length === 0 && h.children.length === 1 && h.children[0].boundary === null) {
        var E = h.children[0];
        E.id = h.id, E.parentFlushed = !0, E.status === Fr && So(s, E);
      } else {
        var R = s.completedSegments;
        R.push(h);
      }
    }
    function _s(s, h, E) {
      if (h === null) {
        if (E.parentFlushed) {
          if (s.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          s.completedRootSegment = E;
        }
        if (s.pendingRootTasks--, s.pendingRootTasks === 0) {
          s.onShellError = xr;
          var R = s.onShellReady;
          R();
        }
      } else if (h.pendingTasks--, !h.forceClientRender) {
        if (h.pendingTasks === 0)
          E.parentFlushed && E.status === Fr && So(h, E), h.parentFlushed && s.completedBoundaries.push(h), h.fallbackAbortableTasks.forEach(zc, s), h.fallbackAbortableTasks.clear();
        else if (E.parentFlushed && E.status === Fr) {
          So(h, E);
          var H = h.completedSegments;
          H.length === 1 && h.parentFlushed && s.partialBoundaries.push(h);
        }
      }
      if (s.allPendingTasks--, s.allPendingTasks === 0) {
        var re = s.onAllReady;
        re();
      }
    }
    function Ns(s, h) {
      var E = h.blockedSegment;
      if (E.status === bl) {
        Ja(h.context);
        var R = null;
        R = Ar, Ar = h;
        try {
          Xn(s, h, h.node), or(E.chunks, s.responseState, E.lastPushedText, E.textEmbedded), h.abortSet.delete(h), E.status = Fr, _s(s, h.blockedBoundary, E);
        } catch (re) {
          if (vl(), typeof re == "object" && re !== null && typeof re.then == "function") {
            var H = h.ping;
            re.then(H, H);
          } else
            h.abortSet.delete(h), E.status = aa, Ms(s, h.blockedBoundary, E, re);
        } finally {
          Ar = R;
        }
      }
    }
    function di(s) {
      if (s.status !== ia) {
        var h = Zi(), E = ii.current;
        ii.current = Es;
        var R;
        R = mo.getCurrentStack, mo.getCurrentStack = li;
        var H = xl;
        ai(s.responseState);
        try {
          var re = s.pingedTasks, de;
          for (de = 0; de < re.length; de++) {
            var Se = re[de];
            Ns(s, Se);
          }
          re.splice(0, de), s.destination !== null && ko(s, s.destination);
        } catch (o) {
          nr(s, o), Br(s, o);
        } finally {
          ai(H), ii.current = E, mo.getCurrentStack = R, E === Es && Ja(h);
        }
      }
    }
    function fi(s, h, E) {
      switch (E.parentFlushed = !0, E.status) {
        case bl: {
          var R = E.id = s.nextSegmentId++;
          return E.lastPushedText = !1, E.textEmbedded = !1, ca(h, s.responseState, R);
        }
        case Fr: {
          E.status = go;
          for (var H = !0, re = E.chunks, de = 0, Se = E.children, o = 0; o < Se.length; o++) {
            for (var c = Se[o]; de < c.index; de++)
              v(h, re[de]);
            H = Eo(s, h, c);
          }
          for (; de < re.length - 1; de++)
            v(h, re[de]);
          return de < re.length && (H = y(h, re[de])), H;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function Eo(s, h, E) {
      var R = E.boundary;
      if (R === null)
        return fi(s, h, E);
      if (R.parentFlushed = !0, R.forceClientRender)
        return zn(h, s.responseState, R.errorDigest, R.errorMessage, R.errorComponentStack), fi(s, h, E), Uo(h, s.responseState);
      if (R.pendingTasks > 0) {
        R.rootSegmentID = s.nextSegmentId++, R.completedSegments.length > 0 && s.partialBoundaries.push(R);
        var H = R.id = Wn(s.responseState);
        return ha(h, s.responseState, H), fi(s, h, E), pa(h, s.responseState);
      } else {
        if (R.byteSize > s.progressiveChunkSize)
          return R.rootSegmentID = s.nextSegmentId++, s.completedBoundaries.push(R), ha(h, s.responseState, R.id), fi(s, h, E), pa(h, s.responseState);
        Oi(h, s.responseState);
        var re = R.completedSegments;
        if (re.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var de = re[0];
        return Eo(s, h, de), Mi(h, s.responseState);
      }
    }
    function Fs(s, h, E) {
      return Jl(h, s.responseState, E.id, E.errorDigest, E.errorMessage, E.errorComponentStack);
    }
    function hi(s, h, E) {
      return ct(h, s.responseState, E.formatContext, E.id), Eo(s, h, E), Xt(h, E.formatContext);
    }
    function pi(s, h, E) {
      for (var R = E.completedSegments, H = 0; H < R.length; H++) {
        var re = R[H];
        Nl(s, h, E, re);
      }
      return R.length = 0, Ko(h, s.responseState, E.id, E.rootSegmentID);
    }
    function Bc(s, h, E) {
      for (var R = E.completedSegments, H = 0; H < R.length; H++) {
        var re = R[H];
        if (!Nl(s, h, E, re))
          return H++, R.splice(0, H), !1;
      }
      return R.splice(0, H), !0;
    }
    function Nl(s, h, E, R) {
      if (R.status === go)
        return !0;
      var H = R.id;
      if (H === -1) {
        var re = R.id = E.rootSegmentID;
        if (re === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return hi(s, h, R);
      } else
        return hi(s, h, R), qu(h, s.responseState, H);
    }
    function ko(s, h) {
      g();
      try {
        var E = s.completedRootSegment;
        E !== null && s.pendingRootTasks === 0 && (Eo(s, h, E), s.completedRootSegment = null, Wo(h, s.responseState));
        var R = s.clientRenderedBoundaries, H;
        for (H = 0; H < R.length; H++) {
          var re = R[H];
          Fs(s, h, re);
        }
        R.splice(0, H);
        var de = s.completedBoundaries;
        for (H = 0; H < de.length; H++) {
          var Se = de[H];
          pi(s, h, Se);
        }
        de.splice(0, H), k(h), g(h);
        var o = s.partialBoundaries;
        for (H = 0; H < o.length; H++) {
          var c = o[H];
          if (!Bc(s, h, c)) {
            s.destination = null, H++, o.splice(0, H);
            return;
          }
        }
        o.splice(0, H);
        var S = s.completedBoundaries;
        for (H = 0; H < S.length; H++) {
          var w = S[H];
          pi(s, h, w);
        }
        S.splice(0, H);
      } finally {
        k(h), s.allPendingTasks === 0 && s.pingedTasks.length === 0 && s.clientRenderedBoundaries.length === 0 && s.completedBoundaries.length === 0 && (s.abortableTasks.size !== 0 && i("There was still abortable task at the root when we closed. This is a bug in React."), T(h));
      }
    }
    function $c(s) {
      p(function() {
        return di(s);
      });
    }
    function zs(s, h) {
      if (s.status === Sl) {
        s.status = ia, D(h, s.fatalError);
        return;
      }
      if (s.status !== ia && s.destination === null) {
        s.destination = h;
        try {
          ko(s, h);
        } catch (E) {
          nr(s, E), Br(s, E);
        }
      }
    }
    function To(s, h) {
      try {
        var E = s.abortableTasks;
        E.forEach(function(R) {
          return bo(R, s, h);
        }), E.clear(), s.destination !== null && ko(s, s.destination);
      } catch (R) {
        nr(s, R), Br(s, R);
      }
    }
    function Ic(s, h) {
      return new Promise(function(E, R) {
        var H, re, de = new Promise(function(N, Z) {
          re = N, H = Z;
        });
        function Se() {
          var N = new ReadableStream(
            {
              type: "bytes",
              pull: function(Z) {
                zs(c, Z);
              },
              cancel: function(Z) {
                To(c);
              }
            },
            // $FlowFixMe size() methods are not allowed on byte streams.
            {
              highWaterMark: 0
            }
          );
          N.allReady = de, E(N);
        }
        function o(N) {
          de.catch(function() {
          }), R(N);
        }
        var c = Rc(s, kt(h ? h.identifierPrefix : void 0, h ? h.nonce : void 0, h ? h.bootstrapScriptContent : void 0, h ? h.bootstrapScripts : void 0, h ? h.bootstrapModules : void 0), Pn(h ? h.namespaceURI : void 0), h ? h.progressiveChunkSize : void 0, h ? h.onError : void 0, re, Se, o, H);
        if (h && h.signal) {
          var S = h.signal, w = function() {
            To(c, S.reason), S.removeEventListener("abort", w);
          };
          S.addEventListener("abort", w);
        }
        $c(c);
      });
    }
    Js.renderToReadableStream = Ic, Js.version = t;
  }()), Js;
}
var Ai, zd;
process.env.NODE_ENV === "production" ? (Ai = ib(), zd = ob()) : (Ai = lb(), zd = sb());
_a.version = Ai.version;
_a.renderToString = Ai.renderToString;
_a.renderToStaticMarkup = Ai.renderToStaticMarkup;
_a.renderToNodeStream = Ai.renderToNodeStream;
_a.renderToStaticNodeStream = Ai.renderToStaticNodeStream;
_a.renderToReadableStream = zd.renderToReadableStream;
const ub = ({ width: e, height: t, runtime: r }) => {
  var xe, we;
  const { config: n } = fe.useContext(lt), { sankey: i } = n, l = n == null ? void 0 : n.data[0], [p, u] = fe.useState(0), d = fe.useRef([]), [f, g] = fe.useState(""), v = (ie) => {
    g(ie);
  }, y = () => {
    g("");
  }, [k, T] = fe.useState(!1);
  fe.useEffect(() => {
    window.innerWidth < 768 && window.innerHeight > window.innerWidth && T(!0);
  }, [window.innerWidth]);
  const M = () => {
    T(!1);
  };
  fe.useEffect(() => {
    var Le;
    let ie = 0;
    (Le = d == null ? void 0 : d.current) == null || Le.map((Me) => {
      const We = Me == null ? void 0 : Me.getBoundingClientRect().width;
      We > ie && (ie = We);
    }), u(ie);
  }, [d, i, window.innerWidth]);
  const C = Array.from(new Set((xe = l == null ? void 0 : l.links) == null ? void 0 : xe.flatMap((ie) => [ie.source, ie.target]))), m = {
    nodes: C.map((ie) => ({ id: ie })),
    links: (we = l == null ? void 0 : l.links) == null ? void 0 : we.map((ie) => ({
      source: C.findIndex((Le) => Le === ie.source),
      target: C.findIndex((Le) => Le === ie.target),
      value: ie.value
    }))
  };
  let D = 5;
  const O = 50, _ = tb().nodeWidth(i.nodeSize.nodeWidth).nodePadding(i.nodePadding).iterations(i.iterations).nodeAlign(Gx).extent([
    [i.margin.margin_x, Number(i.margin.margin_y)],
    [e - D - p, n.heights.vertical - O]
  ]), { nodes: $, links: L } = _(m), q = (ie) => {
    var Ge;
    let Le = 30, Me = 0, We = "node-value--storynode", qe = !0;
    return (Ge = l == null ? void 0 : l.storyNodeText) != null && Ge.every((De) => De.StoryNode !== ie) && (qe = !1, Me = 10, Le = 8, We = "node-value"), { textPositionHorizontal: Le, textPositionVertical: Me, classStyle: We, storyNodes: qe };
  }, W = (ie) => {
    const Le = m.nodes.find((qe) => qe.id === ie), Me = [], We = [];
    return Le && (L.forEach((qe) => {
      const Ge = qe.target, De = qe.source;
      Ge.id === ie && Me.push(De.id);
    }), Me.forEach((qe) => {
      L.forEach((Ge) => {
        const De = Ge.target, _e = Ge.source;
        De.id === f && _e.id === qe && We.push(Ge);
      });
    })), { sourceNodes: Me, activeLinks: We };
  }, Y = `${((l == null ? void 0 : l.tooltips.find((ie) => ie.node === f)) || {}).value}`, J = `${((l == null ? void 0 : l.tooltips.find((ie) => ie.node === f)) || {}).summary}`, le = ((l == null ? void 0 : l.tooltips.find((ie) => ie.node === f)) || {}).column1Label, U = ((l == null ? void 0 : l.tooltips.find((ie) => ie.node === f)) || {}).column2Label, te = ((l == null ? void 0 : l.tooltips.find((ie) => ie.node === f)) || {}).column1, me = ((l == null ? void 0 : l.tooltips.find((ie) => ie.node === f)) || {}).column2, K = ({ columnData: ie }) => /* @__PURE__ */ a.createElement("ul", null, ie == null ? void 0 : ie.map((Le, Me) => /* @__PURE__ */ a.createElement("li", { key: Me }, Le.label, ": ", Le.value, " (", Le.additional_info, "%)"))), ce = _a.renderToString(/* @__PURE__ */ a.createElement(K, { columnData: te })), ue = _a.renderToString(/* @__PURE__ */ a.createElement(K, { columnData: me })), he = `<div class="sankey-chart__tooltip">
                    <span class="sankey-chart__tooltip--tooltip-header">${f}</span>
                    <span class="sankey-chart__tooltip--tooltip-header">${Y}</span>
                    <div class="divider"></div>
                    <span><strong>Summary: </strong>${J}</span>
                    <div class="divider"></div>
                      <div class="sankey-chart__tooltip--info-section">
                        <div>
                          <span><strong>${le}<strong></span>
                          ${ce}
                        </div>
                        <div>
                          <span><strong>${U}<strong></span>
                          ${ue}
                        </div>
                      </div>
                    </div>`, ae = m.nodes.map((ie, Le) => {
    var Ze, Et;
    let { textPositionHorizontal: Me, textPositionVertical: We, classStyle: qe, storyNodes: Ge } = q(ie.id), { sourceNodes: De } = W(f), _e = i.opacity.nodeOpacityDefault, $e = i.nodeColor.default;
    return f !== ie.id && f !== "" && !De.includes(ie.id) && ($e = i.nodeColor.inactive, _e = i.opacity.nodeOpacityInactive), /* @__PURE__ */ a.createElement(Ke, { className: "", key: Le }, /* @__PURE__ */ a.createElement(
      "rect",
      {
        height: ie.y1 - ie.y0 + 2,
        width: _.nodeWidth(),
        x: ie.x0,
        y: ie.y0 - 1,
        fill: $e,
        fillOpacity: _e,
        rx: i.rxValue,
        "data-tooltip-html": l.tooltips && n.enableTooltips ? he : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${r.uniqueId}-sankey`,
        onClick: () => v(ie.id),
        style: { pointerEvents: "visible", cursor: "pointer" }
      }
    ), Ge ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      it,
      {
        x: ie.x0 + Me,
        textAnchor: m.nodes.length - 1 === Le ? "end" : "start",
        verticalAnchor: "end",
        y: (ie.y1 + ie.y0) / 2 - 30,
        fill: i.nodeFontColor,
        fontWeight: "bold",
        style: { pointerEvents: "none" },
        className: "node-text"
      },
      (((Ze = l == null ? void 0 : l.storyNodeText) == null ? void 0 : Ze.find((vt) => vt.StoryNode === ie.id)) || {}).segmentTextBefore
    ), /* @__PURE__ */ a.createElement(it, { verticalAnchor: "end", className: qe, x: ie.x0 + Me, y: (ie.y1 + ie.y0 + 25) / 2, fill: i.storyNodeFontColor || i.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, typeof ie.value == "number" ? ie.value.toLocaleString() : ie.value), /* @__PURE__ */ a.createElement(
      it,
      {
        x: ie.x0 + Me,
        y: (ie.y1 + ie.y0) / 2 + 50,
        fill: i.nodeFontColor,
        fontWeight: "bold",
        textAnchor: m.nodes.length === Le ? "end" : "start",
        style: { pointerEvents: "none" },
        className: "node-text",
        verticalAnchor: "end"
      },
      (((Et = l == null ? void 0 : l.storyNodeText) == null ? void 0 : Et.find((vt) => vt.StoryNode === ie.id)) || {}).segmentTextAfter
    )) : /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("text", { x: ie.x0 + Me, y: (ie.y1 + ie.y0) / 2 + We, dominantBaseline: "text-before-edge", fill: i.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, /* @__PURE__ */ a.createElement("tspan", { id: ie.id, className: "node-id" }, ie.id)), /* @__PURE__ */ a.createElement(
      "text",
      {
        x: ie.x0 + Me,
        y: (ie.y1 + ie.y0) / 2 + 30,
        dominantBaseline: "text-before-edge",
        fill: i.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start",
        style: { pointerEvents: "none" }
      },
      /* @__PURE__ */ a.createElement("tspan", { className: qe }, i.nodeValueStyle.textBefore + (typeof ie.value == "number" ? ie.value.toLocaleString() : ie.value) + i.nodeValueStyle.textAfter)
    )));
  }), V = L.map((ie, Le) => {
    const We = ab()(ie);
    let qe = i.opacity.LinkOpacityDefault, Ge = i.linkColor.default, { activeLinks: De } = W(f);
    return !De.includes(ie) && f !== "" && (Ge = i.linkColor.inactive, qe = i.opacity.LinkOpacityInactive), /* @__PURE__ */ a.createElement("path", { key: Le, d: We, stroke: Ge, fill: "none", strokeOpacity: qe, strokeWidth: ie.width + 2 });
  }), ee = m.nodes.reduce((ie, Le) => Math.max(ie, Le.depth), -1), ke = m.nodes.filter((ie) => ie.depth === ee).map((ie, Le) => {
    var Ze, Et;
    let { textPositionHorizontal: Me, textPositionVertical: We, classStyle: qe, storyNodes: Ge } = q(ie.id), { sourceNodes: De } = W(f), _e = i.opacity.nodeOpacityDefault, $e = i.nodeColor.default;
    return f !== ie.id && f !== "" && !De.includes(ie.id) && ($e = i.nodeColor.inactive, _e = i.opacity.nodeOpacityInactive), /* @__PURE__ */ a.createElement(Ke, { className: "", key: Le, innerRef: (vt) => d.current[Le] = vt }, /* @__PURE__ */ a.createElement(
      "rect",
      {
        height: ie.y1 - ie.y0 + 2,
        width: _.nodeWidth(),
        x: ie.x0,
        y: ie.y0 - 1,
        fill: $e,
        fillOpacity: _e,
        rx: i.rxValue,
        "data-tooltip-html": l.tooltips && n.enableTooltips ? he : null,
        "data-tooltip-id": "tooltip",
        onClick: () => v(ie.id),
        style: { pointerEvents: "visible", cursor: "pointer" }
      }
    ), Ge ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      it,
      {
        x: ie.x0 + Me,
        textAnchor: m.nodes.length - 1 === Le ? "end" : "start",
        verticalAnchor: "end",
        y: (ie.y1 + ie.y0) / 2 - 30,
        fill: i.nodeFontColor,
        fontWeight: "bold",
        style: { pointerEvents: "none" },
        className: "node-text"
      },
      (((Ze = l == null ? void 0 : l.storyNodeText) == null ? void 0 : Ze.find((vt) => vt.StoryNode === ie.id)) || {}).segmentTextBefore
    ), /* @__PURE__ */ a.createElement(it, { verticalAnchor: "end", className: qe, x: ie.x0 + Me, y: (ie.y1 + ie.y0 + 25) / 2, fill: i.storyNodeFontColor || i.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, typeof ie.value == "number" ? ie.value.toLocaleString() : ie.value), /* @__PURE__ */ a.createElement(
      it,
      {
        x: ie.x0 + Me,
        y: (ie.y1 + ie.y0) / 2 + 50,
        fill: i.nodeFontColor,
        fontWeight: "bold",
        textAnchor: m.nodes.length === Le ? "end" : "start",
        style: { pointerEvents: "none" },
        className: "node-text",
        verticalAnchor: "end"
      },
      (((Et = l == null ? void 0 : l.storyNodeText) == null ? void 0 : Et.find((vt) => vt.StoryNode === ie.id)) || {}).segmentTextAfter
    )) : /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("text", { x: ie.x0 + Me, y: (ie.y1 + ie.y0) / 2 + We, dominantBaseline: "text-before-edge", fill: i.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, /* @__PURE__ */ a.createElement("tspan", { id: ie.id, className: "node-id" }, ie.id)), /* @__PURE__ */ a.createElement(
      "text",
      {
        x: ie.x0 + Me,
        y: (ie.y1 + ie.y0) / 2 + 30,
        dominantBaseline: "text-before-edge",
        fill: i.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start",
        style: { pointerEvents: "none" }
      },
      /* @__PURE__ */ a.createElement("tspan", { className: qe }, i.nodeValueStyle.textBefore + (typeof ie.value == "number" ? ie.value.toLocaleString() : ie.value) + i.nodeValueStyle.textAfter)
    )));
  });
  return /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("div", { className: "sankey-chart" }, /* @__PURE__ */ a.createElement("svg", { className: "sankey-chart__diagram", width: e, height: Number(n.heights.vertical), style: { overflow: "visible" } }, /* @__PURE__ */ a.createElement(Ke, { className: "links" }, V), /* @__PURE__ */ a.createElement(Ke, { className: "nodes" }, ae), /* @__PURE__ */ a.createElement(Ke, { className: "finalNodes", style: { display: "none" } }, ke)), /* @__PURE__ */ a.createElement(np, { id: `cdc-open-viz-tooltip-${r.uniqueId}-sankey`, afterHide: () => y(), events: ["click"], place: "bottom", style: { backgroundColor: "rgba(238, 238, 238, 1)", color: "black", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" } }), k && /* @__PURE__ */ a.createElement("div", { className: "popup" }, /* @__PURE__ */ a.createElement("div", { className: "popup-content" }, /* @__PURE__ */ a.createElement("button", { className: "visually-hidden", onClick: M }, "Select for accessible version."), /* @__PURE__ */ a.createElement("p", null, /* @__PURE__ */ a.createElement("strong", null, "Please change the orientation of your screen or increase the size of your browser to view the diagram better."))))));
};
var cb = {
  top: "top",
  left: "left",
  right: "right",
  bottom: "bottom"
};
const Zn = cb;
function db(e) {
  var t = e.labelOffset, r = e.labelProps, n = e.orientation, i = e.range, l = e.tickLabelFontSize, p = e.tickLength, u = n === Zn.left || n === Zn.top ? -1 : 1, d, f, g;
  if (n === Zn.top || n === Zn.bottom) {
    var v = n === Zn.bottom && typeof r.fontSize == "number" ? r.fontSize : 0;
    d = (Number(i[0]) + Number(i[i.length - 1])) / 2, f = u * (p + t + l + v);
  } else
    d = u * ((Number(i[0]) + Number(i[i.length - 1])) / 2), f = -(p + t), g = "rotate(" + u * 90 + ")";
  return {
    x: d,
    y: f,
    transform: g
  };
}
function Ul() {
  return Ul = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ul.apply(this, arguments);
}
function fb(e) {
  var t = e.hideTicks, r = e.horizontal, n = e.orientation, i = e.tickClassName, l = e.tickComponent, p = e.tickLabelProps, u = e.tickStroke, d = u === void 0 ? "#222" : u, f = e.tickTransform, g = e.ticks, v = e.strokeWidth, y = e.tickLineProps;
  return g.map(function(k) {
    var T, M = k.value, C = k.index, m = k.from, D = k.to, O = k.formattedValue, _ = (T = p[C]) != null ? T : {}, $ = Math.max(10, typeof _.fontSize == "number" && _.fontSize || 0), L = D.y + (r && n !== Zn.top ? $ : 0);
    return /* @__PURE__ */ a.createElement(Ke, {
      key: "visx-tick-" + M + "-" + C,
      className: Sn("visx-axis-tick", i),
      transform: f
    }, !t && /* @__PURE__ */ a.createElement(Yt, Ul({
      from: m,
      to: D,
      stroke: d,
      strokeWidth: v,
      strokeLinecap: "square"
    }, y)), l ? l(Ul({}, _, {
      x: D.x,
      y: L,
      formattedValue: O
    })) : /* @__PURE__ */ a.createElement(it, Ul({
      x: D.x,
      y: L
    }, _), O));
  });
}
function Lu() {
  return Lu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Lu.apply(this, arguments);
}
var Bh = {
  textAnchor: "middle",
  fontFamily: "Arial",
  fontSize: 10,
  fill: "#222"
};
function hb(e) {
  var t = e.axisFromPoint, r = e.axisLineClassName, n = e.axisToPoint, i = e.hideAxisLine, l = e.hideTicks, p = e.horizontal, u = e.label, d = u === void 0 ? "" : u, f = e.labelClassName, g = e.labelOffset, v = g === void 0 ? 14 : g, y = e.labelProps, k = y === void 0 ? Bh : y, T = e.orientation, M = T === void 0 ? Zn.bottom : T, C = e.scale, m = e.stroke, D = m === void 0 ? "#222" : m, O = e.strokeDasharray, _ = e.strokeWidth, $ = _ === void 0 ? 1 : _, L = e.tickClassName, q = e.tickComponent, W = e.tickLineProps, Y = e.tickLabelProps, J = e.tickLength, le = J === void 0 ? 8 : J, U = e.tickStroke, te = U === void 0 ? "#222" : U, me = e.tickTransform, K = e.ticks, ce = e.ticksComponent, ue = ce === void 0 ? fb : ce, he = Lu({}, Bh, typeof Y == "object" ? Y : null), ae = K.map(function(ee) {
    var ne = ee.value, ke = ee.index;
    return typeof Y == "function" ? Y(ne, ke, K) : he;
  }), V = Math.max.apply(Math, [10].concat(ae.map(function(ee) {
    return typeof ee.fontSize == "number" ? ee.fontSize : 0;
  })));
  return /* @__PURE__ */ a.createElement(a.Fragment, null, ue({
    hideTicks: l,
    horizontal: p,
    orientation: M,
    scale: C,
    tickClassName: L,
    tickComponent: q,
    tickLabelProps: ae,
    tickStroke: te,
    tickTransform: me,
    ticks: K,
    strokeWidth: $,
    tickLineProps: W
  }), !i && /* @__PURE__ */ a.createElement(Yt, {
    className: Sn("visx-axis-line", r),
    from: t,
    to: n,
    stroke: D,
    strokeWidth: $,
    strokeDasharray: O
  }), d && /* @__PURE__ */ a.createElement(it, Lu({
    className: Sn("visx-axis-label", f)
  }, db({
    labelOffset: v,
    labelProps: k,
    orientation: M,
    range: C.range(),
    tickLabelFontSize: V,
    tickLength: le
  }), k), d));
}
function pb(e, t) {
  t === void 0 && (t = "center");
  var r = e;
  if (t !== "start" && "bandwidth" in r) {
    var n = r.bandwidth();
    return t === "center" && (n /= 2), r.round() && (n = Math.round(n)), function(i) {
      var l = r(i);
      return typeof l == "number" ? l + n : l;
    };
  }
  return e;
}
function mb(e) {
  var t = e;
  return "tickFormat" in t ? t.tickFormat() : Lg;
}
function eu(e, t) {
  var r = e.x, n = e.y;
  return new zo(t ? {
    x: r,
    y: n
  } : {
    x: n,
    y: r
  });
}
function Bd() {
  return Bd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Bd.apply(this, arguments);
}
var rd = 0;
function gb(e) {
  return e === void 0 && (e = rd), typeof e == "number" ? {
    start: e,
    end: e
  } : Bd({
    start: rd,
    end: rd
  }, e);
}
var yb = ["children", "axisClassName", "hideAxisLine", "hideTicks", "hideZero", "innerRef", "left", "numTicks", "orientation", "rangePadding", "scale", "tickFormat", "tickLength", "tickValues", "top"];
function $d() {
  return $d = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $d.apply(this, arguments);
}
function vb(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, l;
  for (l = 0; l < n.length; l++)
    i = n[l], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function ju(e) {
  var t = e.children, r = t === void 0 ? hb : t, n = e.axisClassName, i = e.hideAxisLine, l = i === void 0 ? !1 : i, p = e.hideTicks, u = p === void 0 ? !1 : p, d = e.hideZero, f = d === void 0 ? !1 : d, g = e.innerRef, v = e.left, y = v === void 0 ? 0 : v, k = e.numTicks, T = k === void 0 ? 10 : k, M = e.orientation, C = M === void 0 ? Zn.bottom : M, m = e.rangePadding, D = m === void 0 ? 0 : m, O = e.scale, _ = e.tickFormat, $ = e.tickLength, L = $ === void 0 ? 8 : $, q = e.tickValues, W = e.top, Y = W === void 0 ? 0 : W, J = vb(e, yb), le = _ ?? mb(O), U = C === Zn.left, te = C === Zn.top, me = te || C === Zn.bottom, K = pb(O), ce = U || te ? -1 : 1, ue = O.range(), he = gb(D), ae = eu({
    x: Number(ue[0]) + 0.5 - he.start,
    y: 0
  }, me), V = eu({
    x: Number(ue[ue.length - 1]) + 0.5 + he.end,
    y: 0
  }, me), ee = (q ?? Rg(O, T)).filter(function(ke) {
    return !f || ke !== 0 && ke !== "0";
  }).map(function(ke, xe) {
    return {
      value: ke,
      index: xe
    };
  }), ne = ee.map(function(ke) {
    var xe = ke.value, we = ke.index, ie = Pg(K(xe));
    return {
      value: xe,
      index: we,
      from: eu({
        x: ie,
        y: 0
      }, me),
      to: eu({
        x: ie,
        y: L * ce
      }, me),
      formattedValue: le(xe, we, ee)
    };
  });
  return /* @__PURE__ */ a.createElement(Ke, {
    className: Sn("visx-axis", n),
    innerRef: g,
    top: Y,
    left: y
  }, r($d({}, J, {
    axisFromPoint: ae,
    axisToPoint: V,
    hideAxisLine: l,
    hideTicks: u,
    hideZero: f,
    horizontal: me,
    numTicks: T,
    orientation: C,
    rangePadding: D,
    scale: O,
    tickFormat: le,
    tickLength: L,
    tickPosition: K,
    tickSign: ce,
    ticks: ne
  })));
}
var xb = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function Du() {
  return Du = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Du.apply(this, arguments);
}
function bb(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, l;
  for (l = 0; l < n.length; l++)
    i = n[l], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Sb = {
  dx: "-0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "end"
};
function Eb(e) {
  var t = e.axisClassName, r = e.labelOffset, n = r === void 0 ? 36 : r, i = e.tickLength, l = i === void 0 ? 8 : i, p = e.tickLabelProps, u = bb(e, xb), d = typeof p == "function" ? p : Du({}, Sb, p);
  return /* @__PURE__ */ a.createElement(ju, Du({
    axisClassName: Sn("visx-axis-left", t),
    labelOffset: n,
    orientation: Zn.left,
    tickLabelProps: d,
    tickLength: l
  }, u));
}
var kb = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function Ou() {
  return Ou = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ou.apply(this, arguments);
}
function Tb(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, l;
  for (l = 0; l < n.length; l++)
    i = n[l], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var wb = {
  dx: "0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "start"
};
function Cb(e) {
  var t = e.axisClassName, r = e.labelOffset, n = r === void 0 ? 36 : r, i = e.tickLength, l = i === void 0 ? 8 : i, p = e.tickLabelProps, u = Tb(e, kb), d = typeof p == "function" ? p : Ou({}, wb, p);
  return /* @__PURE__ */ a.createElement(ju, Ou({
    axisClassName: Sn("visx-axis-right", t),
    labelOffset: n,
    orientation: Zn.right,
    tickLabelProps: d,
    tickLength: l
  }, u));
}
var Ab = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function Mu() {
  return Mu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Mu.apply(this, arguments);
}
function Pb(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, l;
  for (l = 0; l < n.length; l++)
    i = n[l], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Rb = {
  dy: "-0.75em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function Lb(e) {
  var t = e.axisClassName, r = e.labelOffset, n = r === void 0 ? 8 : r, i = e.tickLength, l = i === void 0 ? 8 : i, p = e.tickLabelProps, u = Pb(e, Ab), d = typeof p == "function" ? p : Mu({}, Rb, p);
  return /* @__PURE__ */ a.createElement(ju, Mu({
    axisClassName: Sn("visx-axis-top", t),
    labelOffset: n,
    orientation: Zn.top,
    tickLabelProps: d,
    tickLength: l
  }, u));
}
var Db = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function _u() {
  return _u = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _u.apply(this, arguments);
}
function Ob(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, l;
  for (l = 0; l < n.length; l++)
    i = n[l], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Mb = {
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function lu(e) {
  var t = e.axisClassName, r = e.labelOffset, n = r === void 0 ? 8 : r, i = e.tickLength, l = i === void 0 ? 8 : i, p = e.tickLabelProps, u = Ob(e, Db), d = typeof p == "function" ? p : _u({}, Mb, p);
  return /* @__PURE__ */ a.createElement(ju, _u({
    axisClassName: Sn("visx-axis-bottom", t),
    labelOffset: n,
    orientation: Zn.bottom,
    tickLabelProps: d,
    tickLength: l
  }, u));
}
const Kl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  curveBasis: lv,
  curveBasisClosed: sv,
  curveBasisOpen: uv,
  curveBundle: cv,
  curveCardinal: dv,
  curveCardinalClosed: fv,
  curveCardinalOpen: hv,
  curveCatmullRom: pv,
  curveCatmullRomClosed: mv,
  curveCatmullRomOpen: gv,
  curveLinear: Iu,
  curveLinearClosed: yd,
  curveMonotoneX: ou,
  curveMonotoneY: yv,
  curveNatural: vv,
  curveStep: xv,
  curveStepAfter: Sv,
  curveStepBefore: bv
}, Symbol.toStringTag, { value: "Module" })), _b = (e) => {
  var $;
  const { xScale: t, yScale: r, yMax: n, xMax: i, handleTooltipMouseOver: l, handleTooltipMouseOff: p, isDebug: u, children: d } = e;
  let { transformedData: f, config: g, handleLineType: v, parseDate: y, formatDate: k, formatNumber: T, seriesHighlight: M, colorScale: C, rawData: m } = fe.useContext(lt);
  const D = g.brush.active && (($ = g.brush.data) != null && $.length) ? g.brush.data : f;
  if (!D)
    return;
  const O = (L) => (yn(g.xAxis) ? t(y(L[g.xAxis.dataKey], !1)) : t(L[g.xAxis.dataKey])) + (t.bandwidth ? t.bandwidth() / 2 : 0), _ = (L, q, W = void 0) => r(L[W.dataKey]);
  return D && /* @__PURE__ */ a.createElement("svg", null, /* @__PURE__ */ a.createElement(Dr, { component: "AreaChart" }, /* @__PURE__ */ a.createElement(Ke, { className: "area-chart", key: "area-wrapper", left: Number(g.yAxis.size) }, (g.runtime.areaSeriesKeys || g.series).map((L, q) => {
    let W = D.map((U) => ({
      [g.xAxis.dataKey]: U[g.xAxis.dataKey],
      [L.dataKey]: U[L.dataKey]
    })), Y = Kl[L.lineType], J = g.legend.behavior === "highlight" && M.length > 0 && M.indexOf(L.dataKey) === -1, le = g.legend.behavior === "highlight" || M.length === 0 || M.indexOf(L.dataKey) !== -1;
    return /* @__PURE__ */ a.createElement(a.Fragment, { key: q }, /* @__PURE__ */ a.createElement(
      oa,
      {
        data: W,
        x: (U) => O(U),
        y: (U) => _(U, q, L),
        stroke: le ? C ? C(g.runtime.seriesLabels ? g.runtime.seriesLabels[L.dataKey] : L.dataKey) : "#000" : "transparent",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        curve: Y,
        strokeDasharray: L.type ? v(L.type) : 0
      }
    ), /* @__PURE__ */ a.createElement(
      Yv,
      {
        key: "area-chart",
        fill: le ? C ? C(g.runtime.seriesLabels ? g.runtime.seriesLabels[L.dataKey] : L.dataKey) : "#000" : "transparent",
        fillOpacity: J ? 0.25 : 0.5,
        data: W,
        x: (U) => O(U),
        y: (U) => _(U, q, L),
        yScale: r,
        curve: Y,
        strokeDasharray: L.type ? v(L.type) : 0
      }
    ));
  }), /* @__PURE__ */ a.createElement(dr, { width: Number(i), height: Number(n), fill: "transparent", fillOpacity: 0.05, onMouseMove: (L) => l(L, m), onMouseLeave: p }))));
}, Nb = fe.memo(_b), Nu = {
  Linear: "curveLinear",
  Cardinal: "curveCardinal",
  Natural: "curveNatural",
  "Monotone X": "curveMonotoneX",
  Step: "curveStep"
}, Fb = ({ xScale: e, yScale: t, yMax: r, xMax: n, handleTooltipMouseOver: i, handleTooltipMouseOff: l, isDebug: p }) => {
  var M;
  let { transformedData: u, config: d, seriesHighlight: f, colorScale: g, rawData: v } = fe.useContext(lt);
  const y = d.brush.active && ((M = d.brush.data) != null && M.length) ? d.brush.data : u;
  if (!y)
    return;
  const k = (C) => {
    if (d.xAxis.type === "categorical")
      return e(C);
    if (yn(d.xAxis)) {
      let m = new Date(C);
      return e(m);
    }
  }, T = 2;
  return y && /* @__PURE__ */ a.createElement("svg", { height: Number(r) }, /* @__PURE__ */ a.createElement(Dr, { component: "AreaChartStacked" }, /* @__PURE__ */ a.createElement(Ke, { className: "area-chart", key: "area-wrapper", left: Number(d.yAxis.size) + T / 2, height: Number(r), style: { overflow: "hidden" } }, /* @__PURE__ */ a.createElement(
    Jv,
    {
      data: y,
      keys: d.runtime.areaSeriesKeys.map((C) => C.dataKey) || d.series.map((C) => C.dataKey),
      x0: (C) => k(C.data[d.xAxis.dataKey]),
      y0: (C) => Number(t(C[0])),
      y1: (C) => Number(t(C[1])),
      curve: Kl[Nu[d.stackedAreaChartLineType]]
    },
    ({ stacks: C, path: m }) => C.map((D, O) => {
      let _ = d.legend.behavior === "highlight" && f.length > 0 && f.indexOf(D.key) === -1, $ = d.legend.behavior === "highlight" || f.length === 0 || f.indexOf(D.key) !== -1;
      return (
        // prettier-ignore
        /* @__PURE__ */ a.createElement(
          "path",
          {
            key: D.key,
            d: m(D) || "",
            strokeWidth: 2,
            stroke: $ ? g ? g(d.runtime.seriesLabels ? d.runtime.seriesLabels[D.key] : D.key) : "#000" : "transparent",
            fillOpacity: _ ? 0.2 : 1,
            fill: $ ? g ? g(d.runtime.seriesLabels ? d.runtime.seriesLabels[D.key] : D.key) : "#000" : "transparent"
          }
        )
      );
    })
  ), /* @__PURE__ */ a.createElement(dr, { width: Number(n), height: Number(r), fill: "transparent", onMouseMove: (C) => i(C, v), onMouseLeave: l }))));
}, zb = fe.memo(Fb), Gl = () => {
  const { config: e, colorPalettes: t, tableData: r, updateConfig: n, parseDate: i, formatDate: l, setSeriesHighlight: p, seriesHighlight: u } = fe.useContext(lt), { orientation: d } = e, [f, g] = fe.useState(null), v = d === "horizontal", y = 1, k = e.lollipopSize === "large" ? 7 : e.lollipopSize === "medium" ? 6 : 5, T = e.lollipopSize === "large" ? 14 : e.lollipopSize === "medium" ? 12 : 10, M = e.yAxis.labelPlacement === "Below Bar", C = e.yAxis.displayNumbersOnBar, m = e.orientation === "horizontal" ? "yAxis" : "xAxis", D = e.barStyle === "rounded", O = e.visualizationSubType === "stacked", _ = e.tipRounding, $ = e.roundingStyle === "standard" ? "8px" : e.roundingStyle === "shallow" ? "5px" : e.roundingStyle === "finger" ? "15px" : "0px", L = e.runtime.seriesKeys.length, q = { small: 16, medium: 18, large: 20 }, W = Object.keys(e.runtime.seriesLabels).length > 1, J = e.visualizationType === "Bar" && e.legend.behavior === "isolate" && e.legend.axisAlign && (u != null && u.length) ? u : e.runtime.barSeriesKeys || e.runtime.seriesKeys;
  return fe.useEffect(() => {
    d === "horizontal" && !e.yAxis.labelPlacement && n({
      ...e,
      yAxis: {
        ...e,
        labelPlacement: "Below Bar"
      }
    });
  }, [e, n]), fe.useEffect(() => {
    e.isLollipopChart === !1 && e.barHeight < 25 && n({ ...e, barHeight: 25 });
  }, [e.isLollipopChart]), fe.useEffect(() => {
    e.visualizationSubType === "horizontal" && n({
      ...e,
      orientation: "horizontal"
    });
  }, []), fe.useEffect(() => {
    e.barStyle === "lollipop" && !e.isLollipopChart && n({ ...e, isLollipopChart: !0 }), (D || e.barStyle === "flat") && n({ ...e, isLollipopChart: !1 });
  }, [e.barStyle]), {
    generateIconSize: (V) => V < 4 ? 1 : V < 5 ? 4 : V < 10 ? 6 : V < 15 ? 7 : V < 20 || V < 90 ? 8 : 0,
    isHorizontal: v,
    barBorderWidth: y,
    lollipopBarWidth: k,
    lollipopShapeSize: T,
    isLabelBelowBar: M,
    displayNumbersOnBar: C,
    section: m,
    isRounded: D,
    isStacked: O,
    tipRounding: _,
    radius: $,
    stackCount: L,
    barStackedSeriesKeys: J,
    fontSize: q,
    hasMultipleSeries: W,
    applyRadius: (V) => {
      if (V == null || !D)
        return {};
      let ee = {};
      return (O && V + 1 === L || !O) && (ee = v ? { borderRadius: `0 ${$}  ${$}  0` } : { borderRadius: `${$} ${$} 0 0` }), !O && V === -1 && (ee = v ? { borderRadius: `${$} 0  0 ${$} ` } : { borderRadius: ` 0  0 ${$} ${$}` }), _ === "full" && O && V === 0 && L > 1 && (ee = v ? { borderRadius: `${$} 0 0 ${$}` } : { borderRadius: `0 0 ${$} ${$}` }), _ === "full" && (O && V === 0 && L === 1 || !O) && (ee = { borderRadius: $ }), ee;
    },
    updateBars: (V) => {
      if (e.visualizationType !== "Bar" && !v)
        return V;
      const ee = [...V];
      let ne;
      const ke = {
        stacked: e.barHeight,
        lollipop: k
      };
      O ? ne = ke.stacked : ne = ke[e.isLollipopChart ? "lollipop" : "stacked"] * L;
      const xe = M ? q[e.fontSize] * 1.2 : 0;
      let we = Number(e.barSpace), ie = ee.length * (ne + xe + we);
      return v && (e.heights.horizontal = ie), ee.map((Le, Me) => {
        let We = 0;
        return Le.index !== 0 && (We = (ne + we + xe) * Me), { ...Le, y: We, height: ne };
      });
    },
    assignColorsToValues: (V, ee, ne) => {
      if (!e.legend.colorCode && e.series.length > 1)
        return ne;
      const ke = e.customColors ?? t[e.palette], xe = r.map((Me) => Me[e.legend.colorCode]);
      let we = /* @__PURE__ */ new Map(), ie = [];
      for (let Me = 0; Me < xe.length; Me++)
        we.has(xe[Me]) || we.set(xe[Me], ke[we.size % ke.length]), ie.push(we.get(xe[Me]));
      for (; ie.length < V; )
        ie = ie.concat(ie);
      return ie[ee];
    },
    getHighlightedBarColorByValue: (V) => {
      const ee = e == null ? void 0 : e.highlightedBarValues.find((ne) => {
        if (ne.value)
          return e.xAxis.type === "date" ? l(i(ne.value)) === V : ne.value === V;
      });
      return ee != null && ee.color ? ee.color : "rgba(255, 102, 1)";
    },
    getHighlightedBarByValue: (V) => {
      const ee = e == null ? void 0 : e.highlightedBarValues.filter((ne) => {
        if (ne.value)
          return e.xAxis.type === "date" ? l(i(ne.value)) === V : ne.value === V;
      })[0];
      return ee != null && ee.color ? ee : !1;
    },
    getAdditionalColumn: (V, ee) => {
      if (!ee)
        return "";
      const ne = e.columns, ke = [];
      let xe = "";
      const we = r.find((ie) => ie[e.xAxis.dataKey] === ee) || {};
      return Object.keys(ne).forEach((ie) => {
        if (V && e.columns[ie].series && e.columns[ie].series !== V)
          return;
        const Le = {
          addColPrefix: e.columns[ie].prefix,
          addColSuffix: e.columns[ie].suffix,
          addColRoundTo: e.columns[ie].roundToPlace ? e.columns[ie].roundToPlace : "",
          addColCommas: e.columns[ie].commas
        }, Me = ep(we[e.columns[ie].name], "left", !0, e, Le);
        e.columns[ie].tooltips && ke.push([e.columns[ie].label, Me]);
      }), ke.forEach((ie) => {
        xe += `${ie[0]} : ${ie[1]} <br/>`;
      }), xe;
    },
    hoveredBar: f,
    setHoveredBar: g,
    onMouseOverBar: (V, ee) => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && ee && p([ee]), g(V);
    },
    onMouseLeaveBar: () => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && p([]);
    }
  };
}, Zl = fe.createContext(null), yf = ({ xScale: e, barWidth: t = 0, totalBarsInGroup: r = 1, yMax: n, handleTooltipMouseOff: i, handleTooltipMouseOver: l, handleTooltipClick: p, tooltipData: u, showTooltip: d, hideTooltip: f }) => {
  const { parseDate: g, config: v } = fe.useContext(lt), { runtime: y, regions: k, visualizationType: T, orientation: M, xAxis: C } = v, m = e.domain(), D = ($) => {
    let L;
    if (!($ != null && $.fromType) || $.fromType === "Fixed") {
      const q = new Date($.from), W = g(Fl(v.xAxis.dateParseFormat, q)).getTime();
      L = e(W), T === "Bar" && C.type === "date-time" && (L = L - t * r / 2);
    }
    if ($.fromType === "Previous Days") {
      const q = Number($.from) || 0;
      m.map((le) => Fl(v.xAxis.dateParseFormat, new Date(le)));
      const W = $.toType === "Last Date" ? new Date(m[m.length - 1]).getTime() : new Date($.to), Y = v.xAxis.type === "categorical" ? Fl(v.xAxis.dateParseFormat, W) : Fl(v.xAxis.dateParseFormat, W), J = new Date(Y);
      if (L = new Date(J.setDate(J.getDate() - Number(q))), C.type === "date") {
        L = new Date(Fl(C.dateParseFormat, L)).getTime();
        let le = m[0], U = Math.abs(L - le);
        for (let te = 1; te < m.length; te++) {
          const me = Math.abs(L - m[te]);
          me < U && (U = me, le = m[te]);
        }
        L = le;
      }
      if (C.type === "categorical") {
        let le = m[0], U = Math.abs(new Date(L).getTime() - new Date(le).getTime());
        for (let te = 1; te < m.length; te++) {
          const me = Math.abs(new Date(L).getTime() - new Date(m[te]).getTime());
          me < U && (U = me, le = m[te]);
        }
        L = le;
      }
      L = e(L);
    }
    if (C.type === "categorical" && $.fromType !== "Previous Days" && (L = e($.from)), T === "Line" || T === "Area Chart") {
      let q = Number(v.yAxis.size);
      e.bandwidth && (q += e.bandwidth() / 2), L = L + q;
    }
    return T === "Bar" && v.xAxis.type === "date-time" && $.fromType === "Previous Days" && (L = L - t * r / 2), L;
  }, O = ($) => {
    let L;
    if (C.type === "categorical" && (L = e($.to)), yn(C) && ((!($ != null && $.toType) || $.toType === "Fixed") && (L = e(g($.to).getTime())), (T === "Bar" || v.visualizationType === "Combo") && (L = $.toType !== "Last Date" ? e(g($.to).getTime()) + t * r : L)), $.toType === "Last Date") {
      const q = m[m.length - 1];
      L = Number(e(q) + ((T === "Bar" || T === "Combo") && v.xAxis.type === "date" ? t * r : 0));
    }
    if (T === "Line" || T === "Area Chart") {
      let q = Number(v.yAxis.size);
      e.bandwidth && (q += e.bandwidth() / 2), L = L + q;
    }
    return T === "Bar" && v.xAxis.type === "date-time" && $.toType !== "Last Date" && (L = L - t * r / 2), (T === "Bar" || T === "Combo") && C.type === "categorical" && (L = L + (T === "Bar" || T === "Combo" ? t * r : 0)), L;
  }, _ = ($, L) => $ - L;
  if (k && M === "vertical")
    return k.map(($) => {
      const L = D($), q = O($), W = _(q, L);
      if (!L || !q)
        return null;
      const Y = () => /* @__PURE__ */ a.createElement(
        "path",
        {
          stroke: "#333",
          d: `M${L} -5
                L${L} 5
                M${L} 0
                L${q} 0
                M${q} -5
                L${q} 5`
        }
      ), J = () => /* @__PURE__ */ a.createElement("rect", { x: L, y: 0, width: W, height: n, fill: $.background, opacity: 0.3 });
      return /* @__PURE__ */ a.createElement(Ke, { height: 100, fill: "red", className: "regions regions-group--line zzz", key: $.label, onMouseMove: l, onMouseLeave: i, handleTooltipClick: p, tooltipData: JSON.stringify(u), showTooltip: d }, /* @__PURE__ */ a.createElement(Y, null), /* @__PURE__ */ a.createElement(J, null), /* @__PURE__ */ a.createElement(it, { x: L + W / 2, y: 5, fill: $.color, verticalAnchor: "start", textAnchor: "middle" }, $.label));
    });
};
function Uu(e) {
  var ee, ne;
  const { config: t, index: r, id: n, className: i, background: l, borderColor: p, borderWidth: u, width: d, height: f, x: g, y: v, onMouseOver: y, onMouseLeave: k, onClick: T, tooltipHtml: M, tooltipId: C, styleOverrides: m, seriesHighlight: D } = e, O = Math.max(0, d), _ = Math.max(0, f), $ = t.orientation === "horizontal", L = t.barStyle === "rounded", q = t.visualizationSubType === "stacked", W = t.tipRounding, Y = t.visualizationType === "Combo" && ((ne = (ee = t.runtime) == null ? void 0 : ee.barSeriesKeys) == null ? void 0 : ne.length), J = t.runtime.seriesKeys.length, le = t.visualizationType === "Bar" && t.legend.axisAlign && (D != null && D.length) ? D == null ? void 0 : D.length : 0, U = Y || le || J;
  let te = t.roundingStyle === "standard" ? 8 : t.roundingStyle === "shallow" ? 5 : t.roundingStyle === "finger" ? 15 : 0;
  (te > O / 2 || te > _ / 2) && (te = Math.min(O / 2, _ / 2));
  const me = () => `M${g},${v + _}
      L${g},${v + te}
      Q${g},${v} ${g + te},${v}
      L${g + O - te},${v}
      Q${g + O},${v} ${g + O},${v + te}
      L${g + O},${v + _}
      L${g},${v + _}`, K = () => `M${g},${v + _}
      L${g},${v}
      L${g + O - te},${v}
      Q${g + O},${v} ${g + O},${v + te}
      L${g + O},${v + _ - te}
      Q${g + O},${v + _} ${g + O - te},${v + _}
      L${g},${v + _}`, ce = () => `M${g + te},${v + _}
      Q${g},${v + _} ${g},${v + _ - te}
      L${g},${v}
      L${g + O},${v}
      L${g + O},${v + _ - te}
      Q${g + O},${v + _} ${g + O - te},${v + _}
      L${g + te},${v + _}`, ue = () => `M${g + te},${v + _}
      Q${g},${v + _} ${g},${v + _ - te}
      L${g},${v + te}
      Q${g},${v} ${g + te},${v}
      L${g + O},${v}
      L${g + O},${v + _}
      L${g + te},${v + _}`, he = () => `M${g + te},${v + _}
      Q${g},${v + _} ${g},${v + _ - te}
      L${g},${v + te}
      Q${g},${v} ${g + te},${v}
      L${g + O - te},${v}
      Q${g + O},${v} ${g + O},${v + te}
      L${g + O},${v + _ - te}
      Q${g + O},${v + _} ${g + O - te},${v + _}
      L${g + te},${v + _}`, ae = () => `M${g},${v}
      L${g + O},${v}
      L${g + O},${v + _}
      L${g},${v + _}
      L${g},${v}`;
  let V;
  return r == null || !L ? V = ae() : (V = ae(), (q && r + 1 === U || !q) && (V = $ ? K() : me()), !q && r === -1 && (V = $ ? ue() : ce()), W === "full" && q && r === 0 && U > 1 && (V = $ ? ue() : ce()), W === "full" && (q && r === 0 && U === 1 || !q) && (V = he())), /* @__PURE__ */ a.createElement(
    "path",
    {
      id: n,
      className: i,
      d: V,
      fill: l,
      stroke: p,
      strokeWidth: u,
      onMouseOver: y,
      onMouseLeave: k,
      onClick: T,
      "data-tooltip-html": M,
      "data-tooltip-id": C,
      style: {
        transition: "all 0.2s linear",
        ...m
      }
    }
  );
}
const Bb = () => {
  var W;
  const [e, t] = fe.useState(0), { xScale: r, yScale: n, xMax: i, yMax: l } = fe.useContext(Zl), { transformedData: p, colorScale: u, seriesHighlight: d, config: f, formatNumber: g, formatDate: v, parseDate: y, setSharedFilter: k } = fe.useContext(lt), { isHorizontal: T, barBorderWidth: M, applyRadius: C, hoveredBar: m, getAdditionalColumn: D, onMouseLeaveBar: O, onMouseOverBar: _, barStackedSeriesKeys: $ } = Gl(), { orientation: L } = f, q = f.brush.active && ((W = f.brush.data) != null && W.length) ? f.brush.data : p;
  return f.visualizationSubType === "stacked" && !T && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(ax, { data: q, keys: $, x: (Y) => Y[f.runtime.xAxis.dataKey], xScale: r, yScale: n, color: u }, (Y) => Y.reverse().map(
    (J) => J.bars.map((le) => {
      let U = f.legend.behavior === "highlight" && d.length > 0 && d.indexOf(le.key) === -1, te = f.legend.behavior === "highlight" || d.length === 0 || d.indexOf(le.key) !== -1, me = f.xAxis.type === "date-time" ? f.barThickness * (r.range()[1] - r.range()[0]) : i / J.bars.length, K = me * (f.xAxis.type === "date-time" ? 1 : f.barThickness || 0.8);
      me * (1 - (f.barThickness || 0.8)) / 2;
      const ce = le.bar.data[f.runtime.xAxis.dataKey], ue = f.runtime.xAxis.type === "date" ? v(y(ce)) : ce, he = g(le.bar ? le.bar.data[le.key] : 0, "left");
      if (!he)
        return;
      const ae = r(f.runtime.xAxis.type === "date" ? y(ce) : ce) - (f.xAxis.type === "date" && f.xAxis.sortDates ? K / 2 : 0);
      C(J.index);
      const V = f.runtime.xAxis.label ? `${f.runtime.xAxis.label}: ${ue}` : ue, ee = D(m), ne = `${f.runtime.seriesLabels[le.key]}: ${he}`, ke = `<ul>
                  <li class="tooltip-heading"">${V}</li>
                  <li class="tooltip-body ">${ne}</li>
                  <li class="tooltip-body ">${ee}</li>
                    </li></ul>`;
      return t(K), /* @__PURE__ */ a.createElement(Ke, { key: `${J.index}--${le.index}--${L}` }, /* @__PURE__ */ a.createElement(Ke, { key: `bar-stack-${J.index}-${le.index}`, id: `barStack${J.index}-${le.index}`, className: "stack vertical" }, /* @__PURE__ */ a.createElement(it, { display: f.labels && te ? "block" : "none", opacity: U ? 0.5 : 1, x: ae + e / 2, y: le.y - 5, fill: "#000", textAnchor: "middle" }, he), Uu({
        config: f,
        seriesHighlight: d,
        index: J.index,
        background: u(f.runtime.seriesLabels[le.key]),
        borderColor: "#333",
        borderStyle: "solid",
        borderWidth: `${f.barHasBorder === "true" ? M : 0}px`,
        width: K,
        height: le.height,
        x: ae,
        y: le.y,
        onMouseOver: () => _(ue, le.key),
        onMouseLeave: O,
        tooltipHtml: ke,
        tooltipId: `cdc-open-viz-tooltip-${f.runtime.uniqueId}`,
        onClick: (xe) => {
          xe.preventDefault(), k && (le[f.xAxis.dataKey] = ue, k(f.uid, le));
        },
        styleOverrides: {
          animationDelay: `${J.index * 0.5}s`,
          transformOrigin: `${K / 2}px ${le.y + le.height}px`,
          opacity: U ? 0.2 : 1,
          display: te ? "block" : "none"
        }
      })));
    })
  )), /* @__PURE__ */ a.createElement(yf, { xScale: r, yMax: l, barWidth: e, totalBarsInGroup: 1 }));
}, $b = () => {
  const { yMax: e, yScale: t, xScale: r } = fe.useContext(Zl), {
    animatedChart: n,
    colorScale: i,
    config: l,
    formatDate: p,
    formatNumber: u,
    getTextWidth: d,
    parseDate: f,
    seriesHighlight: g,
    setSharedFilter: v,
    transformedData: y
  } = fe.useContext(lt), { barBorderWidth: k, displayNumbersOnBar: T, fontSize: M, getAdditionalColumn: C, hoveredBar: m, isHorizontal: D, isLabelBelowBar: O, onMouseLeaveBar: _, onMouseOverBar: $, updateBars: L, barStackedSeriesKeys: q } = Gl(), { orientation: W, visualizationSubType: Y } = l;
  return l.visualizationSubType === "stacked" && D && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(lx, { data: y, keys: q, height: e, y: (J) => J[l.runtime.yAxis.dataKey], xScale: r, yScale: t, color: i, offset: "none" }, (J) => J.map(
    (le) => L(le.bars).map((U, te) => {
      const me = l.legend.behavior === "highlight" && g.length > 0 && g.indexOf(U.key) === -1, K = l.legend.behavior === "highlight" || g.length === 0 || g.indexOf(U.key) !== -1;
      l.barHeight = Number(l.barHeight);
      const ce = Mo("#000", i(l.runtime.seriesLabels[U.key])), ue = u(y[U.index][U.key], "left"), he = l.runtime.yAxis.type === "date" ? p(f(y[U.index][l.runtime.originalXAxis.dataKey])) : y[U.index][l.runtime.originalXAxis.dataKey], ae = l.runtime.yAxis.label ? `${l.runtime.yAxis.label}: ${he}` : he, V = d(ue, `normal ${M[l.fontSize]}px sans-serif`), ee = C(m), ne = `${l.runtime.seriesLabels[U.key]}: ${ue}`, ke = `<ul>
                  <li class="tooltip-heading"">${ae}</li>
                  <li class="tooltip-body ">${ne}</li>
                  <li class="tooltip-body ">${ee}</li>
                    </li></ul>`;
      return /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(Ke, { key: te, id: `barStack${le.index}-${U.index}`, className: "stack horizontal" }, Uu({
        config: l,
        seriesHighlight: g,
        index: le.index,
        className: `animated-chart group ${n ? "animated" : ""}`,
        background: i(l.runtime.seriesLabels[U.key]),
        borderColor: "#333",
        borderStyle: "solid",
        borderWidth: `${l.barHasBorder === "true" ? k : 0}px`,
        width: U.width,
        height: U.height,
        x: U.x,
        y: U.y,
        onMouseOver: () => $(he, U.key),
        onMouseLeave: _,
        tooltipHtml: ke,
        tooltipId: `cdc-open-viz-tooltip-${l.runtime.uniqueId}`,
        onClick: (xe) => {
          xe.preventDefault(), v && (U[l.xAxis.dataKey] = ue, v(l.uid, U));
        },
        styleOverrides: {
          animationDelay: `${le.index * 0.5}s`,
          transformOrigin: `${U.x}px 0`,
          opacity: me ? 0.2 : 1,
          display: K ? "block" : "none"
        }
      }), W === "horizontal" && Y === "stacked" && O && le.index === 0 && !l.yAxis.hideLabel && /* @__PURE__ */ a.createElement(
        it,
        {
          x: `${U.x + (l.isLollipopChart ? 15 : 5)}`,
          y: U.y + U.height * 1.2,
          fill: "#000000",
          textAnchor: "start",
          verticalAnchor: "start"
        },
        he
      ), T && V < U.width && /* @__PURE__ */ a.createElement(
        it,
        {
          display: K ? "block" : "none",
          x: U.x + le.bars[U.index].width / 2,
          y: U.y + U.height / 2,
          fill: ce,
          textAnchor: "middle",
          verticalAnchor: "middle"
        },
        ue
      )));
    })
  )));
}, Ib = () => {
  var V;
  const { xScale: e, yScale: t, xMax: r, yMax: n, seriesScale: i } = fe.useContext(Zl), [l, p] = fe.useState(0), [u, d] = fe.useState(0), {
    applyRadius: f,
    assignColorsToValues: g,
    barBorderWidth: v,
    generateIconSize: y,
    getAdditionalColumn: k,
    getHighlightedBarByValue: T,
    getHighlightedBarColorByValue: M,
    lollipopBarWidth: C,
    lollipopShapeSize: m,
    onMouseLeaveBar: D,
    onMouseOverBar: O,
    section: _
  } = Gl(), {
    colorScale: $,
    config: L,
    dashboardConfig: q,
    formatDate: W,
    formatNumber: Y,
    getXAxisData: J,
    getYAxisData: le,
    isNumber: U,
    parseDate: te,
    seriesHighlight: me,
    setSharedFilter: K,
    transformedData: ce
  } = fe.useContext(lt), { HighLightedBarUtils: ue } = Vu(L), he = L.brush.active && ((V = L.brush.data) != null && V.length) ? L.brush.data : ce, ae = (ee, ne) => {
    var we;
    let ke = null;
    const xe = y(ne);
    return (we = L.suppressedData) == null || we.forEach((ie) => {
      ee.key === ie.column && String(ee.value) === String(ie.value) && ie.icon && (ke = /* @__PURE__ */ a.createElement(gf, { color: "#000", size: xe }));
    }), ke;
  };
  return L.visualizationSubType !== "stacked" && (L.visualizationType === "Bar" || L.visualizationType === "Combo") && L.orientation === "vertical" && /* @__PURE__ */ a.createElement(Ke, null, /* @__PURE__ */ a.createElement(
    Gp,
    {
      data: he,
      keys: L.runtime.barSeriesKeys || L.runtime.seriesKeys,
      height: n,
      x0: (ee) => {
        const ne = ee[L.runtime.originalXAxis.dataKey];
        return yn(L.runtime.xAxis) ? te(ne) : ne;
      },
      x0Scale: e,
      x1Scale: i,
      yScale: t,
      color: () => ""
    },
    (ee) => ee.map((ne, ke) => /* @__PURE__ */ a.createElement(Ke, { className: `bar-group-${ne.index}-${ne.x0}--${ke} ${L.orientation}`, key: `bar-group-${ne.index}-${ne.x0}--${ke}`, id: `bar-group-${ne.index}-${ne.x0}--${ke}`, left: ne.x0 }, ne.bars.map((xe, we) => {
      const ie = L.useLogScale ? 0.1 : 0, Le = 20;
      let Me = L.highlightedBarValues.map((mt) => mt.value).filter((mt) => mt !== void 0);
      Me = L.xAxis.type === "date" ? ue.formatDates(Me) : Me;
      let We = L.legend.behavior === "highlight" && me.length > 0 && me.indexOf(xe.key) === -1, qe = L.legend.behavior === "highlight" || me.length === 0 || me.indexOf(xe.key) !== -1, Ge = Math.abs(t(xe.value) - t(ie)), De = xe.value >= 0 && U(xe.value) ? xe.y : t(0);
      const _e = xe.value >= 0 && U(xe.value) ? t(ie) - Le : t(0), $e = L.suppressedData.some((mt) => xe.key === mt.column && String(xe.value) === String(mt.value)) ? _e : De;
      let Ze = i.range()[1], Et = L.isLollipopChart ? C : Ze / ne.bars.length, vt = xe.x + (L.isLollipopChart ? (Ze / ne.bars.length - C) / 2 : 0) - (L.xAxis.type === "date-time" ? Ze / 2 : 0);
      p(Et), d(ne.bars.length);
      let Ct = Y(xe.value, "left"), Je = L.runtime[_].type === "date" ? W(te(he[ne.index][L.runtime.originalXAxis.dataKey])) : he[ne.index][L.runtime.originalXAxis.dataKey];
      const Vt = xe.value < 0 ? -1 : we, qt = k(xe.key, he[ne.index][L.runtime.originalXAxis.dataKey]);
      let zt = L.runtime.xAxis.label ? `${L.runtime.xAxis.label}: ${Je}` : Je;
      const bt = `${L.runtime.seriesLabels[xe.key]}: ${Ct}`, St = `<ul>
                  <li class="tooltip-heading">${zt}</li>
                  <li class="tooltip-body ">${bt}</li>
                  ${qt ? '<li class="tooltip-body ">' + qt + "</li>" : ""}
                    </li></ul>`;
      let Jt = "#000000";
      Jt = ue.checkFontColor(Ct, Me, Jt);
      let ft = L.runtime.seriesLabels && L.runtime.seriesLabels[xe.key] ? $(L.runtime.seriesLabels[xe.key]) : $(xe.key);
      ft = g(ee.length, ne.index, ft);
      const Ot = L.isLollipopChart && L.lollipopColorStyle === "regular", wt = L.isLollipopChart && L.lollipopColorStyle === "two-tone", un = Me == null ? void 0 : Me.includes(Je), Mn = M(Je), _n = T(Je), jt = un ? Mn : L.barHasBorder === "true" ? "#000" : "transparent", Gt = un ? _n.borderWidth : L.isLollipopChart ? 0 : L.barHasBorder === "true" ? v : 0, Mt = L.suppressedData.some((mt) => xe.key === mt.column && xe.value === mt.value) ? "" : Ct;
      let cn = L.suppressedData.some((mt) => xe.key === mt.column && String(xe.value) === String(mt.value)) ? Le : Ge;
      const dn = L.suppressedData.some((mt) => xe.key === mt.column && xe.value === mt.value) ? "none" : "block", Ae = (mt, Ut) => {
        var st;
        let _t = mt, vn = Ut || "#f2f2f2";
        if (q && ((st = q.dashboard.sharedFilters) == null ? void 0 : st.length) !== 0) {
          const { sharedFilters: fn } = q.dashboard;
          return _t = fn.map((xt) => xt.setBy === L.uid ? xt.resetLabel === xt.active || xt.active === ce[ne.index][L.xAxis.dataKey] ? $(L.runtime.seriesLabels[xe.key]) : vn : $(L.runtime.seriesLabels[xe.key]))[0], Ot && (_t = mt), wt && (_t = Yl(mt).brighten(1)), un && (_t = "transparent"), _t;
        }
        return wt && (_t = Yl(mt).brighten(1)), un && (_t = "transparent"), _t;
      };
      return /* @__PURE__ */ a.createElement(Ke, { key: `${ne.index}--${we}` }, /* @__PURE__ */ a.createElement(Ke, { key: `bar-sub-group-${ne.index}-${ne.x0}-${$e}--${we}` }, Uu({
        config: L,
        index: Vt,
        id: `barGroup${ne.index}`,
        background: Ae($(L.runtime.seriesLabels[xe.key])),
        borderColor: jt,
        borderStyle: "solid",
        borderWidth: `${Gt}px`,
        width: Et,
        height: cn,
        x: vt,
        y: $e,
        onMouseOver: () => O(Je, xe.key),
        onMouseLeave: D,
        tooltipHtml: St,
        tooltipId: `cdc-open-viz-tooltip-${L.runtime.uniqueId}`,
        onClick: (mt) => {
          mt.preventDefault(), K && (xe[L.xAxis.dataKey] = Je, K(L.uid, xe));
        },
        styleOverrides: {
          transformOrigin: `0 ${$e + cn}px`,
          opacity: We ? 0.2 : 1,
          display: qe ? "block" : "none",
          cursor: q ? "pointer" : "default"
        }
      }), /* @__PURE__ */ a.createElement(
        "g",
        {
          transform: `translate(${vt},${n - Le})`,
          onMouseOver: () => O(Je, xe.key),
          onMouseLeave: D,
          opacity: We ? 0.2 : 1,
          display: qe ? "block" : "none",
          "data-tooltip-html": St,
          "data-tooltip-id": `cdc-open-viz-tooltip-${L.runtime.uniqueId}`,
          onClick: (mt) => {
            mt.preventDefault(), K && (xe[L.xAxis.dataKey] = Je, K(L.uid, xe));
          }
        },
        ae(xe, Et)
      ), /* @__PURE__ */ a.createElement(
        it,
        {
          display: L.labels && qe ? "block" : "none",
          opacity: We ? 0.5 : 1,
          x: vt + Et / 2,
          y: $e - 5,
          fill: Jt,
          textAnchor: "middle"
        },
        Mt
      ), L.isLollipopChart && L.lollipopShape === "circle" && /* @__PURE__ */ a.createElement(
        "circle",
        {
          display: dn,
          cx: vt + m / 3.5,
          cy: xe.y,
          r: m / 2,
          fill: ft,
          key: `circle--${xe.index}`,
          "data-tooltip-html": St,
          "data-tooltip-id": `cdc-open-viz-tooltip-${L.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), L.isLollipopChart && L.lollipopShape === "square" && /* @__PURE__ */ a.createElement(
        "rect",
        {
          display: dn,
          x: vt - C / 2,
          y: $e,
          width: m,
          height: m,
          fill: ft,
          key: `circle--${xe.index}`,
          "data-tooltip-html": St,
          "data-tooltip-id": `cdc-open-viz-tooltip-${L.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ a.createElement("animate", { attributeName: "height", values: `0, ${m}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(L.confidenceKeys).length > 0 ? he.map((ee) => {
    let ne, ke, xe, we, ie = 5;
    return ne = e(J(ee)) + (L.xAxis.type !== "date" || L.xAxis.type !== "date-time" ? i.range()[1] / 2 : 0), xe = t(le(ee, L.confidenceKeys.lower)), we = t(le(ee, L.confidenceKeys.upper)), /* @__PURE__ */ a.createElement(
      "path",
      {
        key: `confidence-interval-v-${ke}-${ee[L.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${ne - ie} ${xe}
                    L${ne + ie} ${xe}
                    M${ne} ${xe}
                    L${ne} ${we}
                    M${ne - ie} ${we}
                    L${ne + ie} ${we}`
      }
    );
  }) : "", /* @__PURE__ */ a.createElement(yf, { xScale: e, yMax: n, barWidth: l, totalBarsInGroup: u }));
}, Hb = () => {
  const { xScale: e, yScale: t, yMax: r, seriesScale: n } = fe.useContext(Zl), { transformedData: i, colorScale: l, seriesHighlight: p, config: u, formatNumber: d, formatDate: f, parseDate: g, setSharedFilter: v, isNumber: y, getTextWidth: k, getYAxisData: T, getXAxisData: M } = fe.useContext(lt), {
    isHorizontal: C,
    barBorderWidth: m,
    updateBars: D,
    assignColorsToValues: O,
    section: _,
    fontSize: $,
    isLabelBelowBar: L,
    displayNumbersOnBar: q,
    lollipopBarWidth: W,
    lollipopShapeSize: Y,
    getHighlightedBarColorByValue: J,
    getHighlightedBarByValue: le,
    generateIconSize: U,
    getAdditionalColumn: te,
    hoveredBar: me,
    onMouseLeaveBar: K,
    onMouseOverBar: ce
  } = Gl(), { HighLightedBarUtils: ue } = Vu(u), he = (ae, V) => {
    var ke;
    let ee = null;
    const ne = U(V);
    return (ke = u.suppressedData) == null || ke.forEach((xe) => {
      ae.key === xe.column && String(ae.value) === String(xe.value) && xe.icon && (ee = /* @__PURE__ */ a.createElement(gf, { color: "#000", size: ne }));
    }), ee;
  };
  return u.visualizationSubType !== "stacked" && u.visualizationType === "Bar" && u.orientation === "horizontal" && /* @__PURE__ */ a.createElement(Ke, null, /* @__PURE__ */ a.createElement(
    Gp,
    {
      data: i,
      keys: u.runtime.barSeriesKeys || u.runtime.seriesKeys,
      height: r,
      x0: (ae) => ae[u.runtime.originalXAxis.dataKey],
      x0Scale: t,
      x1Scale: n,
      yScale: e,
      color: () => ""
    },
    (ae) => D(ae).map((V, ee) => /* @__PURE__ */ a.createElement(Ke, { className: `bar-group-${V.index}-${V.x0}--${ee} ${u.orientation}`, key: `bar-group-${V.index}-${V.x0}--${ee}`, id: `bar-group-${V.index}-${V.x0}--${ee}`, top: V.y }, V.bars.map((ne, ke) => {
      const xe = u.useLogScale ? 0.1 : 0;
      let we = u.highlightedBarValues.map((xt) => xt.value).filter((xt) => xt !== void 0);
      we = u.xAxis.type === "date" ? ue.formatDates(we) : we;
      let ie = u.legend.behavior === "highlight" && p.length > 0 && p.indexOf(ne.key) === -1, Le = u.legend.behavior === "highlight" || p.length === 0 || p.indexOf(ne.key) !== -1, Me = u.barHeight, We = parseInt(u.isLollipopChart ? W : Me);
      isNaN(We) && (We = 25);
      let qe = ne.value >= 0 && y(ne.value) ? ne.y : t(xe);
      const Ge = ne.value < 0 ? Math.abs(e(ne.value)) : e(xe), De = Math.abs(e(ne.value) - e(xe)), _e = 25, $e = ne.value >= 0 && y(ne.value);
      let Ze = ne.value && u.suppressedData.some(({ column: xt, value: Bt }) => ne.key === xt && ne.value === Bt) ? _e : De;
      const Et = $e ? e(0) : e(xe) - _e, vt = u.suppressedData.some((xt) => ne.key === xt.column && String(ne.value) === String(xt.value)) ? Et : Ge, Ct = d(ne.value, "left"), Je = u.runtime[_].type === "date" ? f(g(i[V.index][u.runtime.originalXAxis.dataKey])) : i[V.index][u.runtime.originalXAxis.dataKey], Vt = $e ? "above" : "below", qt = u.suppressedData.some((xt) => ne.key === xt.column && ne.value === xt.value) ? "" : Ct;
      let bt = k(Je, `normal ${$[u.fontSize]}px sans-serif`) < De - 5, St = bt ? "end" : "start", Jt = "start", ft = bt ? -5 : 5, Ot = 10;
      Vt === "below" && (St = bt ? "start" : "end", ft = bt ? 5 : -5, u.isLollipopChart && (Jt = "end", Ot = -10));
      const wt = ne.value < 0 ? -1 : ke;
      let un = u.runtime.yAxis.label ? `${u.runtime.yAxis.label}: ${Je}` : Je;
      const Mn = te(me), _n = `${u.runtime.seriesLabels[ne.key]}: ${Ct}`, jt = `<ul>
                  <li class="tooltip-heading"">${un}</li>
                  <li class="tooltip-body ">${_n}</li>
                  <li class="tooltip-body ">${Mn}</li>
                    </li></ul>`;
      let Gt = "#000000";
      Gt = ue.checkFontColor(Ct, we, Gt);
      let Mt = u.runtime.seriesLabels && u.runtime.seriesLabels[ne.key] ? l(u.runtime.seriesLabels[ne.key]) : l(ne.key);
      Mt = O(ae.length, V.index, Mt);
      const cn = u.isLollipopChart && u.lollipopColorStyle === "regular", dn = u.isLollipopChart && u.lollipopColorStyle === "two-tone", Ae = we == null ? void 0 : we.includes(Je), mt = J(Je), Ut = le(Je), _t = Ae ? mt : u.barHasBorder === "true" ? "#000" : "transparent", vn = Ae ? Ut.borderWidth : u.isLollipopChart ? 0 : u.barHasBorder === "true" ? m : 0, st = u.suppressedData.some((xt) => ne.key === xt.column && ne.value === xt.value) ? "none" : "block";
      Mt && Gt && bt && (Gt = Mo("#000", Mt));
      const fn = () => cn ? Mt : dn ? Yl(Mt).brighten(1) : Ae ? "transparent" : Mt;
      return /* @__PURE__ */ a.createElement(Ke, { key: `${V.index}--${ke}` }, /* @__PURE__ */ a.createElement(Ke, { key: `bar-sub-group-${V.index}-${V.x0}-${qe}--${ke}` }, Uu({
        config: u,
        index: wt,
        id: `barGroup${V.index}`,
        background: fn(),
        borderColor: _t,
        borderStyle: "solid",
        borderWidth: `${vn}px`,
        width: Ze,
        height: We,
        x: vt,
        y: Me * ne.index,
        onMouseOver: () => ce(Je, ne.key),
        onMouseLeave: K,
        tooltipHtml: jt,
        tooltipId: `cdc-open-viz-tooltip-${u.runtime.uniqueId}`,
        onClick: (xt) => {
          xt.preventDefault(), v && (ne[u.xAxis.dataKey] = Ct, v(u.uid, ne));
        },
        styleOverrides: {
          transformOrigin: `0 ${qe + Me}px`,
          opacity: ie ? 0.2 : 1,
          display: Le ? "block" : "none"
        }
      }), /* @__PURE__ */ a.createElement(
        "g",
        {
          transform: `translate(${vt},${Me * ne.index})`,
          onMouseOver: () => ce(Je, ne.key),
          onMouseLeave: K,
          opacity: ie ? 0.2 : 1,
          display: Le ? "block" : "none",
          "data-tooltip-html": jt,
          "data-tooltip-id": `cdc-open-viz-tooltip-${u.runtime.uniqueId}`,
          onClick: (xt) => {
            xt.preventDefault(), v && (ne[u.xAxis.dataKey] = Ct, v(u.uid, ne));
          }
        },
        he(ne, Ze)
      ), !u.isLollipopChart && q && /* @__PURE__ */ a.createElement(
        it,
        {
          display: Le ? "block" : "none",
          x: ne.y,
          y: u.barHeight / 2 + u.barHeight * ne.index,
          fill: Gt,
          dx: ft,
          verticalAnchor: "middle",
          textAnchor: St
        },
        qt
      ), u.isLollipopChart && q && /* @__PURE__ */ a.createElement(
        it,
        {
          display: Le ? "block" : "none",
          x: ne.y,
          y: 0,
          fill: "#000000",
          dx: Ot,
          textAnchor: Jt,
          verticalAnchor: "middle",
          fontWeight: "normal"
        },
        qt
      ), L && !u.yAxis.hideLabel && /* @__PURE__ */ a.createElement(it, { x: u.yAxis.hideAxis ? 0 : 5, y: V.height, dy: 4, verticalAnchor: "start", textAnchor: "start" }, u.runtime.yAxis.type === "date" ? f(g(i[V.index][u.runtime.originalXAxis.dataKey])) : C ? i[V.index][u.runtime.originalXAxis.dataKey] : d(i[V.index][u.runtime.originalXAxis.dataKey])), u.isLollipopChart && u.lollipopShape === "circle" && /* @__PURE__ */ a.createElement(
        "circle",
        {
          display: st,
          cx: ne.y,
          cy: Me * ne.index + W / 2,
          r: Y / 2,
          fill: Mt,
          key: `circle--${ne.index}`,
          "data-tooltip-html": jt,
          "data-tooltip-id": `cdc-open-viz-tooltip-${u.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), u.isLollipopChart && u.lollipopShape === "square" && /* @__PURE__ */ a.createElement(
        "rect",
        {
          display: st,
          x: ne.y > 10 ? ne.y - Y / 2 : 0,
          y: 0 - W / 2,
          width: Y,
          height: Y,
          fill: Mt,
          key: `circle--${ne.index}`,
          "data-tooltip-html": jt,
          "data-tooltip-id": `cdc-open-viz-tooltip-${u.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ a.createElement("animate", { attributeName: "height", values: `0, ${Y}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(u.confidenceKeys).length > 0 ? i.map((ae) => {
    let V, ee, ne, ke = 5;
    return V = t(M(ae)) - 0.75 * u.barHeight, ee = e(T(ae, u.confidenceKeys.upper)), ne = e(T(ae, u.confidenceKeys.lower)), /* @__PURE__ */ a.createElement(
      "path",
      {
        key: `confidence-interval-h-${V}-${ae[u.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${ne} ${V - ke}
                    L${ne} ${V + ke}
                    M${ne} ${V}
                    L${ee} ${V}
                    M${ee} ${V - ke}
                    L${ee} ${V + ke} `
      }
    );
  }) : "");
}, tu = {
  Vertical: Ib,
  Horizontal: Hb,
  StackedVertical: Bb,
  StackedHorizontal: $b
}, Wb = ({ xScale: e, yScale: t, seriesScale: r, xMax: n, yMax: i, handleTooltipMouseOver: l, handleTooltipMouseOff: p, handleTooltipClick: u }) => {
  const { transformedData: d, config: f } = fe.useContext(lt), g = {
    xScale: e,
    yScale: t,
    xMax: n,
    yMax: i,
    seriesScale: r
  };
  return /* @__PURE__ */ a.createElement(Dr, { component: "BarChart" }, /* @__PURE__ */ a.createElement(Zl.Provider, { value: g }, /* @__PURE__ */ a.createElement(Ke, { left: parseFloat(f.runtime.yAxis.size) }, /* @__PURE__ */ a.createElement(tu.StackedVertical, null), /* @__PURE__ */ a.createElement(tu.StackedHorizontal, null), /* @__PURE__ */ a.createElement(tu.Vertical, null), /* @__PURE__ */ a.createElement(tu.Horizontal, null), /* @__PURE__ */ a.createElement(dr, { key: "bars", display: f.tooltips.singleSeries ? "none" : "block", width: Number(n), height: Number(i), fill: "transparent", fillOpacity: 0.05, onMouseMove: (v) => l(v, d), onMouseOut: p, onClick: (v) => u(v, d) }))));
};
function La() {
  return La = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, La.apply(this, arguments);
}
function bi(e) {
  var t = e.x1, r = e.x2, n = e.y1, i = e.y2;
  return {
    x1: n,
    x2: i,
    y1: t,
    y2: r
  };
}
function hm(e) {
  var t = e.left, r = t === void 0 ? 0 : t, n = e.top, i = n === void 0 ? 0 : n, l = e.className, p = e.max, u = e.min, d = e.firstQuartile, f = e.thirdQuartile, g = e.median, v = e.boxWidth, y = v === void 0 ? 10 : v, k = e.fill, T = e.fillOpacity, M = e.stroke, C = e.strokeWidth, m = e.rx, D = m === void 0 ? 2 : m, O = e.ry, _ = O === void 0 ? 2 : O, $ = e.valueScale, L = e.outliers, q = L === void 0 ? [] : L, W = e.horizontal, Y = e.medianProps, J = Y === void 0 ? {} : Y, le = e.maxProps, U = le === void 0 ? {} : le, te = e.minProps, me = te === void 0 ? {} : te, K = e.boxProps, ce = K === void 0 ? {} : K, ue = e.outlierProps, he = ue === void 0 ? {} : ue, ae = e.container, V = ae === void 0 ? !1 : ae, ee = e.containerProps, ne = ee === void 0 ? {} : ee, ke = e.children, xe = W ? i : r, we = xe + (y || 0) / 2, ie = $.range(), Le = $(u ?? 0), Me = $(d ?? 0), We = $(g ?? 0), qe = $(f ?? 0), Ge = $(p ?? 0), De = {
    valueRange: ie,
    center: we,
    offset: xe,
    boxWidth: y,
    max: {
      x1: we - (y || 0) / 4,
      x2: we + (y || 0) / 4,
      y1: Ge,
      y2: Ge
    },
    maxToThird: {
      x1: we,
      x2: we,
      y1: Ge,
      y2: qe
    },
    median: {
      x1: xe,
      x2: xe + (y || 0),
      y1: We,
      y2: We
    },
    minToFirst: {
      x1: we,
      x2: we,
      y1: Me,
      y2: Le
    },
    min: {
      x1: we - (y || 0) / 4,
      x2: we + (y || 0) / 4,
      y1: Le,
      y2: Le
    },
    box: {
      x1: xe,
      x2: y || 0,
      y1: qe,
      y2: Math.abs(qe - Me)
    },
    container: {
      x1: xe,
      x2: y || 0,
      y1: Math.min.apply(Math, ie),
      y2: Math.abs(ie[0] - ie[1])
    }
  };
  return W && (De.max = bi(De.max), De.maxToThird = bi(De.maxToThird), De.box.y1 = Me, De.box = bi(De.box), De.median = bi(De.median), De.minToFirst = bi(De.minToFirst), De.min = bi(De.min), De.container = bi(De.container), De.container.y1 = Math.min.apply(Math, ie)), ke ? /* @__PURE__ */ a.createElement(a.Fragment, null, ke(De)) : /* @__PURE__ */ a.createElement(Ke, {
    className: Sn("visx-boxplot", l)
  }, q.map(function(_e, $e) {
    var Ze = W ? $(_e) : we, Et = W ? we : $(_e);
    return /* @__PURE__ */ a.createElement("circle", La({
      key: "visx-boxplot-outlier-" + $e,
      className: "visx-boxplot-outlier",
      cx: Ze,
      cy: Et,
      r: 4,
      stroke: M,
      strokeWidth: C,
      fill: k,
      fillOpacity: T
    }, he));
  }), /* @__PURE__ */ a.createElement("line", La({
    className: "visx-boxplot-max",
    x1: De.max.x1,
    y1: De.max.y1,
    x2: De.max.x2,
    y2: De.max.y2,
    stroke: M,
    strokeWidth: C
  }, U)), /* @__PURE__ */ a.createElement("line", {
    className: "visx-boxplot-max-to-third",
    x1: De.maxToThird.x1,
    y1: De.maxToThird.y1,
    x2: De.maxToThird.x2,
    y2: De.maxToThird.y2,
    stroke: M,
    strokeWidth: C
  }), /* @__PURE__ */ a.createElement("rect", La({
    className: "visx-boxplot-box",
    x: De.box.x1,
    y: De.box.y1,
    width: De.box.x2,
    height: De.box.y2,
    stroke: M,
    strokeWidth: C,
    fill: k,
    fillOpacity: T,
    rx: D,
    ry: _
  }, ce)), /* @__PURE__ */ a.createElement("line", La({
    className: "visx-boxplot-median",
    x1: De.median.x1,
    y1: De.median.y1,
    x2: De.median.x2,
    y2: De.median.y2,
    stroke: M,
    strokeWidth: C
  }, J)), /* @__PURE__ */ a.createElement("line", {
    className: "visx-boxplot-min-to-first",
    x1: De.minToFirst.x1,
    y1: De.minToFirst.y1,
    x2: De.minToFirst.x2,
    y2: De.minToFirst.y2,
    stroke: M,
    strokeWidth: C
  }), /* @__PURE__ */ a.createElement("line", La({
    className: "visx-boxplot-min",
    x1: De.min.x1,
    y1: De.min.y1,
    x2: De.min.x2,
    y2: De.min.y2,
    stroke: M,
    strokeWidth: C
  }, me)), V && /* @__PURE__ */ a.createElement("rect", La({
    x: De.container.x1,
    y: De.container.y1,
    width: De.container.x2,
    height: De.container.y2,
    fillOpacity: "0"
  }, ne)));
}
hm.propTypes = {
  max: se.number,
  min: se.number,
  firstQuartile: se.number,
  thirdQuartile: se.number,
  median: se.number,
  boxWidth: se.number,
  fill: se.string,
  fillOpacity: se.oneOfType([se.number, se.string]),
  stroke: se.string,
  strokeWidth: se.oneOfType([se.number, se.string]),
  rx: se.number,
  ry: se.number,
  outliers: se.arrayOf(se.number),
  container: se.bool,
  children: se.func
};
const Vb = ({ xScale: e, yScale: t }) => {
  const { config: r, setConfig: n } = fe.useContext(lt), { boxplot: i } = r;
  fe.useEffect(() => {
    r.legend.hide === !1 && n({
      ...r,
      legend: {
        ...r.legend,
        hide: !0
      }
    });
  }, []);
  const l = `cdc-open-viz-tooltip-${r.runtime.uniqueId}`, p = (C) => `
      <strong>${C.columnCategory}</strong></br>
      ${i.labels.q1}: ${C.columnFirstQuartile}<br/>
      ${i.labels.q3}: ${C.columnThirdQuartile}<br/>
      ${i.labels.iqr}: ${C.columnIqr}<br/>
      ${i.labels.median}: ${C.columnMedian}
    `, u = (C) => Number(C.columnMax), d = (C) => Number(C.columnMin), f = (C) => Number(C.columnMedian), g = (C) => Number(C.columnThirdQuartile), v = (C) => Number(C.columnFirstQuartile), y = 0.5, k = e.bandwidth(), T = Math.min(40, k), M = ar[r == null ? void 0 : r.palette][0] ? ar[r == null ? void 0 : r.palette][0] : "#000";
  return /* @__PURE__ */ a.createElement(Dr, { component: "BoxPlot" }, /* @__PURE__ */ a.createElement(Ke, { className: "boxplot", key: "boxplot-group" }, i.plots.map((C, m) => {
    const D = k - T, O = 4;
    return /* @__PURE__ */ a.createElement(Ke, { key: `boxplotplot-${m}` }, i.plotNonOutlierValues && C.nonOutlierValues.map((_, $) => /* @__PURE__ */ a.createElement("circle", { cx: e(C.columnCategory) + Number(r.yAxis.size) + k / 2, cy: t(_), r: O, fill: "#ccc", style: { opacity: 1, fillOpacity: 1, stroke: "black" }, key: `boxplot-${m}--circle-${$}` })), /* @__PURE__ */ a.createElement(
      hm,
      {
        "data-left": e(C.columnCategory) + r.yAxis.size + D / 2 + 0.5,
        key: `box-plot-${m}`,
        min: d(C),
        max: u(C),
        left: Number(e(C.columnCategory)) + Number(r.yAxis.size) + D / 2 + 0.5,
        firstQuartile: v(C),
        thirdQuartile: g(C),
        median: f(C),
        boxWidth: T,
        fill: M,
        fillOpacity: y,
        stroke: "black",
        valueScale: t,
        outliers: i.plotOutlierValues ? C.columnOutliers : [],
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
          "data-tooltip-html": p(C),
          "data-tooltip-id": l,
          tabIndex: -1
        }
      }
    ));
  })));
}, jb = ({ xScale: e, yScale: t, getXAxisData: r, getYAxisData: n }) => {
  const { colorScale: i, transformedData: l, config: p, formatNumber: u, seriesHighlight: d, colorPalettes: f } = fe.useContext(lt);
  let g = 4.5;
  const v = Object.keys(p.runtime.seriesLabels).length > 1, y = (k, T) => `<div>
    ${p.legend.showLegendValuesTooltip && p.runtime.seriesLabels && v ? `${p.runtime.seriesLabels[T] || ""}<br/>` : ""}
    ${p.xAxis.label}: ${u(k[p.xAxis.dataKey], "bottom")} <br/>
    ${p.yAxis.label}: ${u(k[T], "left")}
</div>`;
  return /* @__PURE__ */ a.createElement(Ke, { className: "scatter-plot", left: p.yAxis.size }, l.map((k, T) => p.runtime.seriesKeys.map((M, C) => {
    const m = p.legend.behavior === "highlight" && d.length > 0 && d.indexOf(M) === -1, D = p.legend.behavior === "highlight" || d.length === 0 || d.indexOf(M) !== -1, O = p.palette ? f[p.palette][C] : "#000";
    let _ = {
      filter: "unset",
      opacity: 1,
      stroke: D ? "black" : ""
    };
    return /* @__PURE__ */ a.createElement(
      "circle",
      {
        key: `${T}-${C}`,
        r: g,
        cx: e(k[p.xAxis.dataKey]),
        cy: t(k[M]),
        fill: D ? O : "transparent",
        fillOpacity: m ? 0.25 : 1,
        style: _,
        "data-tooltip-html": y(k, M),
        "data-tooltip-id": `cdc-open-viz-tooltip-${p.runtime.uniqueId}`,
        tabIndex: -1
      }
    );
  })));
};
function Ub({ height: e, xScale: t }) {
  const { transformedData: r, config: n, formatNumber: i, twoColorPalette: l, getTextWidth: p, updateConfig: u, parseDate: d, formatDate: f, currentViewport: g } = fe.useContext(lt), { barStyle: v, tipRounding: y, roundingStyle: k, twoColor: T } = n, M = fe.useRef([]), [C, m] = fe.useState(window.innerWidth), D = k === "standard" ? "8px" : k === "shallow" ? "5px" : k === "finger" ? "15px" : "0px", O = { small: 16, medium: 18, large: 20 };
  n.barStyle;
  const _ = Number(n.xAxis.target), $ = n.series[0].dataKey, L = Number(t.domain()[1]), W = r.some((ae) => ae[$] < 0) || _ > 0 || t.domain()[0] < 0, Y = n.barHasBorder === "true" ? 1 : 0, J = n.lollipopSize === "large" ? 7 : n.lollipopSize === "medium" ? 6 : 5, le = n.lollipopSize === "large" ? 14 : n.lollipopSize === "medium" ? 12 : 10, U = Math.max(t(0), Math.min(t(_), t(L))), te = (ae) => {
    if (ae == null || v !== "rounded")
      return;
    let V = {};
    return ae === "left" && (V = { borderRadius: `${D} 0 0 ${D}` }), ae === "right" && (V = { borderRadius: `0 ${D} ${D} 0` }), y === "full" && (V = { borderRadius: D }), V;
  }, me = {
    calculate: function() {
      const V = r[0][$] < _ ? "left" : "right", ee = `${n.xAxis.targetLabel} ${i(n.xAxis.target || 0, "left")}`, ne = p(ee, `bold ${O[n.fontSize]}px sans-serif`);
      let ke = n.isLollipopChart ? J / 2 : Number(n.barHeight) / 2, xe = 0, we = 0, ie = !1;
      V === "right" && (xe = -10, ie = ne - xe < U, we = U - ne), V === "left" && (xe = 10, ie = t(L) - U > ne + xe, we = U), this.text = ee, this.y = ke, this.x = we, this.padding = xe, this.showLabel = n.xAxis.showTargetLabel ? ie : !1;
    }
  };
  me.calculate();
  const K = fe.useRef(null), ce = pf(K, {});
  fe.useEffect(() => {
    const ae = () => {
      m(window.innerWidth), M.current.forEach((V) => {
        V.style.transition = "none", V.style.transform = "translate(0) scale(1)";
      });
    };
    return window.addEventListener("resize", ae), () => {
      window.removeEventListener("resize", ae);
    };
  }, []);
  const [ue, he] = fe.useState(!1);
  return fe.useEffect(() => {
    ce != null && ce.isIntersecting && setTimeout(() => {
      he(!0);
    }, 100);
  }, [ce == null ? void 0 : ce.isIntersecting, n.animate]), fe.useEffect(() => {
    M.current.forEach((ae, V) => {
      if (n.animate) {
        const ee = _ / L * 100;
        ae.style.opacity = "0", ae.style.transform = `translate(${ee / 1.07}%) scale(0, 1)`, setTimeout(() => {
          ae.style.opacity = "1", ae.style.transform = "translate(0) scale(1)", ae.style.transition = "transform 0.5s ease";
        }, 100);
      } else
        ae.style.transition = "none", ae.style.opacity = "0";
      n.animate || (ae.style.transition = "none", ae.style.opacity = "1");
    });
  }, [n.animate, n, ue]), /* @__PURE__ */ a.createElement(Dr, { component: "Deviation Bar" }, /* @__PURE__ */ a.createElement(Ke, { left: Number(n.xAxis.size) }, r.map((ae, V) => {
    const ee = Number(ae[$]), ne = n.isLollipopChart ? J : Number(n.barHeight), ke = Number(n.barSpace), xe = Math.abs(t(ee) - U), we = t(ee), ie = ee > _ ? U : we, Le = ee < _ ? "left" : "right";
    let Me = 0;
    Me = V !== 0 ? (ke + ne + Y) * V : Me;
    const We = (ke + ne + Y) * r.length;
    n.heights.horizontal = We;
    const Ge = p(i(ee, "left"), `normal ${O[n.fontSize]}px sans-serif`) < xe - 6, De = we, _e = Me + ne / 2, $e = we, Ze = Me + ne / 2, Et = we, vt = Me - ne / 2, Ct = te(Le), [Je, Vt] = l[T.palette], qt = { left: Je, right: Vt }, zt = Mo("#000", qt[Le]);
    let bt = Kb(n.isLollipopChart, Ge, le, zt);
    const St = i(ee, "left"), Jt = n.runtime.yAxis.type === "date" ? f(d(r[V][n.runtime.originalXAxis.dataKey])) : r[V][n.runtime.originalXAxis.dataKey];
    let ft = n.runtime.yAxis.label ? `${n.runtime.yAxis.label}: ${Jt}` : Jt, Ot = n.runtime.xAxis.label ? `${n.runtime.xAxis.label}: ${St}` : St;
    const wt = `<div>
          ${ft}<br />
          ${Ot}
            </div>`;
    return /* @__PURE__ */ a.createElement(Ke, { key: `deviation-bar-${n.orientation}-${$}-${V}` }, /* @__PURE__ */ a.createElement(
      "foreignObject",
      {
        ref: (un) => {
          M.current[V] = un;
        },
        x: ie,
        y: Me,
        width: xe,
        height: ne,
        "data-tooltip-html": wt,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.runtime.uniqueId}`,
        tabIndex: -1
      },
      /* @__PURE__ */ a.createElement("div", { style: { width: xe, height: ne, border: `${Y}px solid #333`, backgroundColor: qt[Le], ...Ct } })
    ), n.yAxis.displayNumbersOnBar && /* @__PURE__ */ a.createElement(it, { verticalAnchor: "middle", x: De, y: _e, ...bt[Le] }, i(ae[$], "left")), n.isLollipopChart && n.lollipopShape === "circle" && /* @__PURE__ */ a.createElement("circle", { cx: $e, cy: Ze, r: le / 2, fill: qt[Le], style: { filter: "unset", opacity: 1 } }), n.isLollipopChart && n.lollipopShape === "square" && /* @__PURE__ */ a.createElement("rect", { x: Et, y: vt, width: le, height: le, fill: qt[Le], style: { opacity: 1, filter: "unset" } }));
  }), me.showLabel && /* @__PURE__ */ a.createElement(it, { fontWeight: "bold", dx: me.padding, verticalAnchor: "middle", x: me.x, y: me.y }, me.text), W && /* @__PURE__ */ a.createElement(Yt, { from: { x: U, y: 0 }, to: { x: U, y: e }, stroke: "#333", strokeWidth: 2 })), /* @__PURE__ */ a.createElement("foreignObject", { y: e / 2, ref: K }));
}
function Kb(e, t, r, n) {
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
const Yb = ({ xScale: e, yScale: t, height: r, width: n, handleTooltipMouseOver: i, handleTooltipMouseOff: l }) => {
  var T;
  const { transformedData: p, rawData: u, config: d, seriesHighlight: f } = fe.useContext(lt), { xAxis: g, yAxis: v, legend: y, runtime: k } = d;
  return p && /* @__PURE__ */ a.createElement(Dr, { component: "ForecastingChart" }, /* @__PURE__ */ a.createElement(Ke, { className: "forecasting-items", key: "forecasting-items-wrapper", left: Number(v.size) }, (T = k.forecastingSeriesKeys) == null ? void 0 : T.map((M, C) => !M || !M.stages ? !1 : M.stages.map((m, D) => {
    var q;
    const { behavior: O } = y, _ = u.filter((W) => W[M.stageColumn] === m.key);
    let $ = O === "highlight" && f.length > 0 && f.indexOf(m.key) === -1, L = O === "highlight" || f.length === 0 || f.indexOf(m.key) !== -1;
    return /* @__PURE__ */ a.createElement(Ke, { className: `forecasting-areas-combo-${C}`, key: `forecasting-areas--stage-${m.key.replaceAll(" ", "-")}-${C}` }, (q = M.confidenceIntervals) == null ? void 0 : q.map((W, Y) => {
      const J = du[m.color] || ar[m.color] || !1, le = () => L && J[2] ? J[2] : "transparent", U = () => L && J[1] ? J[1] : "transparent";
      if (!(W.high === "" || W.low === ""))
        return /* @__PURE__ */ a.createElement(Ke, { key: `forecasting-areas--stage-${m.key.replaceAll(" ", "-")}--group-${D}-${Y}` }, /* @__PURE__ */ a.createElement(
          jv,
          {
            curve: ou,
            data: _,
            fill: le(),
            opacity: $ ? 0.1 : 0.5,
            x: (te) => e(Date.parse(te[g.dataKey])),
            y0: (te) => t(te[W.low]),
            y1: (te) => t(te[W.high])
          }
        ), Y === 0 && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(oa, { data: _, x: (te) => Number(e(Date.parse(te[g.dataKey]))), y: (te) => Number(t(te[W.high])), curve: ou, stroke: U(), strokeWidth: 1, strokeOpacity: 1 }), /* @__PURE__ */ a.createElement(oa, { data: _, x: (te) => Number(e(Date.parse(te[g.dataKey]))), y: (te) => Number(t(te[W.low])), curve: ou, stroke: U(), strokeWidth: 1, strokeOpacity: 1 })));
    }));
  })), /* @__PURE__ */ a.createElement(Ke, { key: "tooltip-hover-section" }, /* @__PURE__ */ a.createElement(dr, { key: "bars", width: Number(n), height: Number(r), fill: "transparent", fillOpacity: 0.05, onMouseMove: (M) => i(M, p), onMouseOut: l }))));
};
function su(e = "") {
  return typeof e == "number" ? !Number.isNaN(e) : typeof e == "string" ? e !== null && e !== "" && /\d+\.?\d*/.test(e) : !1;
}
function Ku(e, t) {
  const r = e.series.every(({ type: y }) => y === "Bar"), n = e.series.every(({ type: y }) => ["Line", "dashed-sm", "dashed-md", "dashed-lg"].includes(y)), i = (y) => (k) => y.reduce((T, M) => isNaN(Number(k[M])) ? T : T + Number(k[M]), 0), l = () => {
    let y = Math.max(...t.map((k) => Math.max(...e.runtime.seriesKeys.map((T) => su(k[T]) ? Number(d(k[T])) : 0))));
    if ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && r) && e.visualizationSubType === "stacked") {
      const k = t.map(i(e.runtime.seriesKeys)).filter((T) => !isNaN(T));
      y = Math.max(...k);
    }
    if (e.visualizationSubType === "stacked" && e.visualizationType === "Area Chart") {
      const k = t.map(i(e.runtime.seriesKeys));
      y = Math.max(...k);
    }
    if ((e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.series && e.series.dataKey && (y = Math.max(...t.map((k) => su(k[e.series.dataKey]) ? Number(d(k[e.series.dataKey])) : 0))), e.visualizationType === "Combo" && e.visualizationSubType === "stacked" && !r && e.runtime.barSeriesKeys && e.runtime.lineSeriesKeys) {
      const k = t.map(i(e.runtime.barSeriesKeys)), T = Math.max(...t.map((C) => Math.max(...e.runtime.lineSeriesKeys.map((m) => Number(d(C[m])))))), M = Math.max(...k);
      y = Math.max(M, T);
    }
    return y;
  }, p = () => {
    const y = Math.min(...t.map((k) => Math.min(...e.runtime.seriesKeys.map((T) => su(k[T]) ? Number(d(k[T])) : 1 / 0))));
    return String(y);
  }, u = () => e.runtime.seriesKeys ? e.runtime.seriesKeys.some((y) => t.some((k) => k[y] >= 0)) : !1, d = (y) => y === null || y === "" ? "" : typeof y == "string" ? y.replace(/[,$]/g, "") : y, f = Number(l()), g = Number(p()), v = u();
  return { minValue: g, maxValue: f, existPositiveValue: v, isAllLine: n };
}
function vf({ config: e, yMax: t = 0, data: r = [], updateConfig: n }) {
  var y, k, T, M;
  const i = e.visualizationType === "Combo" && e.orientation === "vertical", l = e.series && e.series.filter((C) => C.axis === "Right").map((C) => C.dataKey);
  let { minValue: p } = Ku(e, r);
  const u = (C) => {
    if (!C)
      return [0];
    let m = [];
    return C.map((D, O) => m = [...m, ...r.map((_) => Number(_[D]))]), m;
  };
  let d = Math.max.apply(null, u(l));
  e.yAxis.rightMax > d && (d = e.yAxis.rightMax), e.yAxis.rightMin < p && (p = e.yAxis.rightMin);
  const f = ((k = (y = e.runtime) == null ? void 0 : y.barSeriesKeys) == null ? void 0 : k.length) > 0, g = ((M = (T = e.runtime) == null ? void 0 : T.lineSeriesKeys) == null ? void 0 : M.length) > 0;
  return (f || g) && p > 0 && (p = 0), { yScaleRight: $n({
    domain: [p, d],
    range: [t, 0]
  }), hasRightAxis: i };
}
const Xb = (e) => {
  const { preliminaryData: t, data: r, stroke: n, strokeWidth: i, handleLineType: l, lineType: p, seriesKey: u } = e, d = t.filter((y) => y.seriesKey && y.column && y.value && y.type && y.style), f = (y) => d.find((k) => k.seriesKey === u && y[k.column] === k.value && k.type === "effect" && k.style !== "Open Circles");
  let g = [];
  const v = (y) => ({
    stroke: n,
    strokeWidth: i,
    strokeDasharray: y
  });
  return r.forEach((y, k) => {
    let T = f(y), M = v(l(T ? T.style : p));
    g.push(M), T && k > 0 && (g[k - 1] = v(l(T.style)));
  }), g;
}, qb = (e, t, r) => {
  const n = e.filter((l) => l.style === "Open Circles" && l.type === "effect").map((l) => ({ column: l.column, value: l.value, seriesKey: l.seriesKey }));
  let i = [];
  return t.forEach((l) => {
    n.some((p) => l[p.column] === p.value && p.seriesKey === r) && i.push(l);
  }), i;
}, ad = (e) => {
  var O, _, $, L, q, W;
  const { config: t, d: r, displayArea: n, seriesKey: i, tooltipData: l, xScale: p, yScale: u, colorScale: d, parseDate: f, yScaleRight: g, data: v, circleData: y, dataIndex: k, mode: T } = e, { lineDatapointStyle: M } = t, C = (O = t == null ? void 0 : t.series.filter((Y) => Y.dataKey === i)) == null ? void 0 : O[0], m = (Y, J, le, U, te) => {
    const me = le.runtime.seriesLabels || [];
    let K;
    return Y ? K = J(me[U] || te) : K = "transparent", le.lineDatapointColor === "Lighter than Line" && K !== "transparent" && K && (K = Yl(K).brighten(1)), K;
  }, D = (Y) => (t.xAxis.type === "categorical" ? p(Y) : p(f(Y))) + (p.bandwidth ? p.bandwidth() / 2 : 0);
  if (T === "ALWAYS_SHOW_POINTS") {
    if (M === "hidden")
      return /* @__PURE__ */ a.createElement(a.Fragment, null);
    if (M === "always show")
      return (y == null ? void 0 : y.some((J) => J[t.xAxis.dataKey] === r[t.xAxis.dataKey] && J[i] === r[i])) ? /* @__PURE__ */ a.createElement(a.Fragment, null) : /* @__PURE__ */ a.createElement(
        "circle",
        {
          cx: D(r[t.xAxis.dataKey]),
          cy: C.axis === "Right" ? g(r[C.dataKey]) : u(r[C.dataKey]),
          r: 4.5,
          opacity: r[i] ? 1 : 0,
          fillOpacity: 1,
          fill: m(n, d, t, i, i),
          style: { filter: "unset", opacity: 1 }
        }
      );
  }
  if (T === "HOVER_POINTS" && M === "hover") {
    if (!l || !i || !l.data)
      return;
    let Y = ($ = (_ = l == null ? void 0 : l.data) == null ? void 0 : _[0]) == null ? void 0 : $[1];
    if (!Y)
      return;
    let J, le = l.data.filter((me) => me[0] === i), U = (L = le == null ? void 0 : le[0]) == null ? void 0 : L[0], te = (q = le == null ? void 0 : le[0]) == null ? void 0 : q[2];
    return U ? (l == null || l.data.indexOf(U), J = (W = v == null ? void 0 : v.find((me) => me[t == null ? void 0 : t.xAxis.dataKey] === Y)) == null ? void 0 : W[i], l == null ? void 0 : l.data.map((me, K) => (t.runtime.seriesLabelsAll.indexOf(Y), isNaN(J) ? /* @__PURE__ */ a.createElement(a.Fragment, null) : (y == null ? void 0 : y.some((ue) => ue[t.xAxis.dataKey] === Y)) ? /* @__PURE__ */ a.createElement(a.Fragment, null) : /* @__PURE__ */ a.createElement(
      "circle",
      {
        cx: D(Y),
        cy: te === "right" ? g(J) : u(J),
        r: 4.5,
        opacity: 1,
        fillOpacity: 1,
        fill: m(n, d, t, U, i),
        style: { filter: "unset", opacity: 1 },
        key: `line-chart-circle--${JSON.stringify(me)}--${K}`
      }
    )))) : void 0;
  }
  return T === "ISOLATED_POINTS" && T && ((J, le) => {
    const U = v[J], te = v[J - 1], me = v[J + 1];
    if (J === 0 && !me[le] || J === v.length - 1 && !te[le] || J !== 0 && U[le] && !te[le] && !me[le])
      return !0;
  })(k, i) ? /* @__PURE__ */ a.createElement("circle", { cx: D(r[t.xAxis.dataKey]), cy: C.axis === "Right" ? g(r[C.dataKey]) : u(r[C.dataKey]), r: 5.3, strokeWidth: 2, stroke: d(t.runtime.seriesLabels[i]), fill: d(t.runtime.seriesLabels[i]) }) : null;
}, $h = (e) => {
  const {
    getXAxisData: t,
    getYAxisData: r,
    handleTooltipClick: n,
    handleTooltipMouseOff: i,
    handleTooltipMouseOver: l,
    tooltipData: p,
    xMax: u,
    xScale: d,
    yMax: f,
    yScale: g
  } = e, {
    colorScale: v,
    config: y,
    formatNumber: k,
    handleLineType: T,
    isNumber: M,
    parseDate: C,
    seriesHighlight: m,
    tableData: D,
    transformedData: O,
    updateConfig: _,
    rawData: $
  } = fe.useContext(lt), { yScaleRight: L } = vf({ config: y, yMax: f, data: O, updateConfig: _ });
  if (!l)
    return;
  const { lineDatapointStyle: q, showLineSeriesLabels: W, legend: Y } = y;
  return /* @__PURE__ */ a.createElement(Dr, { component: "LineChart" }, /* @__PURE__ */ a.createElement(Ke, { left: y.runtime.yAxis.size }, " ", (y.runtime.lineSeriesKeys || y.runtime.seriesKeys).map((J, le) => {
    var ae;
    let U = y.series.filter((V) => V.dataKey === J)[0].type;
    const te = y.series.filter((V) => V.dataKey === J), me = te[0].axis ? te[0].axis : "left";
    let K = Y.behavior === "highlight" || m.length === 0 || m.indexOf(J) !== -1;
    const ce = qb(y.preliminaryData, $, J);
    let ue = Xb({ preliminaryData: y.preliminaryData, data: D, stroke: v(y.runtime.seriesLabels[J]), strokeWidth: te[0].weight || 2, handleLineType: T, lineType: U, seriesKey: J }), he = (V) => d(t(V)) + (d.bandwidth ? d.bandwidth() / 2 : 0);
    return /* @__PURE__ */ a.createElement(
      Ke,
      {
        key: `series-${J}`,
        opacity: Y.behavior === "highlight" && m.length > 0 && m.indexOf(J) === -1 ? 0.5 : 1,
        display: Y.behavior === "highlight" || m.length === 0 && !Y.dynamicLegend || m.indexOf(J) !== -1 ? "block" : "none"
      },
      O.map((V, ee) => {
        const ne = y.series.find(({ dataKey: Le }) => Le === J), { axis: ke } = ne, xe = Object.keys(y.runtime.seriesLabels).length > 1, we = ke === "Right" ? "rightLabel" : "label";
        let ie = y.runtime.yAxis[we];
        return xe || (ie = y.isLegendValue ? y.runtime.seriesLabels[J] : ie), V[J] !== void 0 && V[J] !== "" && V[J] !== null && M(V[J]) && /* @__PURE__ */ a.createElement(Ke, { key: `series-${J}-point-${ee}`, className: "checkwidth" }, /* @__PURE__ */ a.createElement(dr, { key: "bars", width: Number(u), height: Number(f), fill: "transparent", fillOpacity: 0.05, onMouseMove: (Le) => l(Le, D), onMouseOut: i, onClick: (Le) => n(Le, O) }), /* @__PURE__ */ a.createElement(it, { display: y.labels ? "block" : "none", x: he(V), y: me === "Right" ? L(r(V, J)) : g(r(V, J)), fill: "#000", textAnchor: "middle" }, k(V[J], "left")), (q === "hidden" || q === "always show") && /* @__PURE__ */ a.createElement(
          ad,
          {
            mode: "ALWAYS_SHOW_POINTS",
            dataIndex: ee,
            circleData: ce,
            data: O,
            d: V,
            config: y,
            seriesKey: J,
            displayArea: K,
            tooltipData: p,
            xScale: d,
            yScale: g,
            colorScale: v,
            parseDate: C,
            yScaleRight: L,
            seriesAxis: me,
            key: `line-circle--${ee}`
          }
        ), /* @__PURE__ */ a.createElement(
          ad,
          {
            mode: "ISOLATED_POINTS",
            dataIndex: ee,
            circleData: ce,
            data: O,
            d: V,
            config: y,
            seriesKey: J,
            displayArea: K,
            tooltipData: p,
            xScale: d,
            yScale: g,
            colorScale: v,
            parseDate: C,
            yScaleRight: L,
            seriesAxis: me,
            key: `isolated-circle-${ee}`
          }
        ));
      }),
      /* @__PURE__ */ a.createElement(a.Fragment, null, q === "hover" && /* @__PURE__ */ a.createElement(
        ad,
        {
          dataIndex: 0,
          mode: "HOVER_POINTS",
          circleData: ce,
          data: O,
          config: y,
          seriesKey: J,
          displayArea: K,
          tooltipData: p,
          xScale: d,
          yScale: g,
          colorScale: v,
          parseDate: C,
          yScaleRight: L,
          seriesAxis: me
        }
      )),
      (ae = y == null ? void 0 : y.preliminaryData) != null && ae.some((V) => V.value && V.column) ? /* @__PURE__ */ a.createElement(
        Jp,
        {
          curve: Kl[te[0].lineType],
          segments: (y.xAxis.type === "date-time" ? O.sort((V, ee) => {
            let ne = t(V), ke = t(ee);
            return ne < ke ? -1 : ke < ne ? 1 : 0;
          }) : O).map((V) => [V]),
          segmentation: "x",
          x: (V) => he(V),
          y: (V) => me === "Right" ? L(r(V, J)) : g(Number(r(V, J))),
          styles: ue,
          defined: (V, ee) => V[J] !== "" && V[J] !== null && V[J] !== void 0
        }
      ) : /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
        oa,
        {
          curve: Kl[te[0].lineType],
          data: y.xAxis.type === "date-time" ? O.sort((V, ee) => {
            let ne = t(V), ke = t(ee);
            return ne < ke ? -1 : ke < ne ? 1 : 0;
          }) : O,
          x: (V) => he(V),
          y: (V) => me === "Right" ? L(r(V, J)) : g(Number(r(V, J))),
          stroke: v(y.runtime.seriesLabels[J]),
          strokeWidth: te[0].weight || 2,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: U ? T(U) : 0,
          defined: (V, ee) => V[J] !== "" && V[J] !== null && V[J] !== void 0
        }
      )),
      ce.map((V, ee) => /* @__PURE__ */ a.createElement("circle", { key: ee, cx: he(V), cy: me === "Right" ? L(r(V, J)) : g(Number(r(V, J))), r: 6, strokeWidth: te[0].weight || 2, stroke: v ? v(y.runtime.seriesLabels[J]) : "#000", fill: "#fff" })),
      y.animate && /* @__PURE__ */ a.createElement(
        oa,
        {
          className: "animation",
          curve: Kl[te[0].lineType],
          data: O,
          x: (V) => he(V),
          y: (V) => me === "Right" ? L(r(V, J)) : g(Number(r(V, J))),
          stroke: "#fff",
          strokeWidth: 3,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: U ? T(U) : 0,
          defined: (V, ee) => V[J] !== "" && V[J] !== null && V[J] !== void 0
        }
      ),
      W && (y.runtime.lineSeriesKeys || y.runtime.seriesKeys).map((V) => {
        let ee;
        for (let ne = O.length - 1; ne >= 0; ne--)
          if (O[ne][V]) {
            ee = O[ne];
            break;
          }
        return ee ? /* @__PURE__ */ a.createElement("text", { x: he(ee) + 5, y: g(r(ee, V)), alignmentBaseline: "middle", fill: y.colorMatchLineSeriesLabels && v ? v(y.runtime.seriesLabels[V] || V) : "black" }, y.runtime.seriesLabels[V] || V) : /* @__PURE__ */ a.createElement(a.Fragment, null);
      })
    );
  }), y.legend.dynamicLegend && m.length === 0 && /* @__PURE__ */ a.createElement(it, { x: u / 2, y: f / 2, fill: "black", textAnchor: "middle", color: "black" }, y.legend.dynamicLegendChartMessage)));
}, Gb = (e) => {
  const { rawData: t, updateConfig: r } = fe.useContext(lt), { xScale: n, yScale: i, config: l, height: p, width: u, handleTooltipMouseOff: d, handleTooltipMouseOver: f } = e, { forestPlot: g } = l, v = l.xAxis.tickWidthMax + 10, [y, k] = fe.useState(!1);
  fe.useEffect(() => {
    try {
      const _ = ["estimateField", "lower", "upper", "estimateRadius"], $ = l, L = 10;
      for (let q = 0; q < L; q++)
        _.forEach((W) => {
          var Y;
          l.forestPlot[W] && l.forestPlot[W] !== ((Y = $.columns[l.forestPlot[`additionalColumn${q}`]]) == null ? void 0 : Y.name) && (delete $.columns[`additionalColumn${q}`], $.columns[l.forestPlot[W]] = {}, $.columns[l.forestPlot[W]].dataKey = $.forestPlot[W], $.columns[l.forestPlot[W]].name = $.forestPlot[W], $.columns[l.forestPlot[W]].dataTable = !0, $.columns[l.forestPlot[W]].tooltips = !0, $.columns[l.forestPlot[W]].label = $.forestPlot[W]);
        });
      l.forestPlot.radius.scalingColumn && ($.columns[l.forestPlot.radius.scalingColumn] = {}, $.columns[l.forestPlot.radius.scalingColumn].dataKey = $.forestPlot.radius.scalingColumn, $.columns[l.forestPlot.radius.scalingColumn].name = $.forestPlot.radius.scalingColumn, $.columns[l.forestPlot.radius.scalingColumn].label = $.forestPlot.radius.scalingColumn, $.columns[l.forestPlot.radius.scalingColumn].dataTable = !0, $.columns[l.forestPlot.radius.scalingColumn].tooltips = !0), $.table.showVertical && ($.table.indexLabel = l.xAxis.dataKey), r($);
    } catch (_) {
      console.log(_.message);
    }
  }, []), fe.useEffect(() => {
    !y && l.forestPlot.type === "Logarithmic" && (r({
      ...l,
      dataFormat: {
        ...l.dataFormat,
        roundTo: 2
      }
    }), k(!0));
  }, [l.forestPlot.type]);
  const T = l.data.find((_) => _[l.xAxis.dataKey] === l.forestPlot.pooledResult.column), M = T ? [
    { x: n(T[l.forestPlot.lower]), y: p - Number(l.forestPlot.rowHeight) },
    { x: n(T[l.forestPlot.estimateField]), y: p - g.pooledResult.diamondHeight - Number(l.forestPlot.rowHeight) },
    { x: n(T[l.forestPlot.upper]), y: p - Number(l.forestPlot.rowHeight) },
    { x: n(T[l.forestPlot.estimateField]), y: p + g.pooledResult.diamondHeight - Number(l.forestPlot.rowHeight) },
    { x: n(T[l.forestPlot.lower]), y: p - Number(l.forestPlot.rowHeight) }
  ] : [], C = l.forestPlot.rowHeight, m = [
    { x: 0, y: C },
    { x: u, y: C }
  ], D = [
    { x: 0, y: p },
    { x: u, y: p }
  ], O = Object.entries(l.columns).map((_) => _[1]).filter((_) => _.forestPlot === !0);
  return /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(Ke, { width: u }, g.title && /* @__PURE__ */ a.createElement(it, { className: "forest-plot--title", x: g.type === "Linear" ? n(0) : n(1), y: 0, textAnchor: "middle", verticalAnchor: "start", fontSize: gi(l.fontSize), fill: "black" }, g.title), g.lineOfNoEffect.show && g.type === "Linear" && /* @__PURE__ */ a.createElement(Yt, { from: { x: n(0), y: 0 + C }, to: { x: n(0), y: p }, className: "forestplot__line-of-no-effect", stroke: g.regression.baseLineColor || "black" }), g.lineOfNoEffect.show && g.type === "Logarithmic" && /* @__PURE__ */ a.createElement(Yt, { from: { x: n(1), y: 0 + C }, to: { x: n(1), y: p }, className: "forestplot__line-of-no-effect", stroke: g.regression.baseLineColor || "black" }), t.map((_, $) => {
    const L = $n({
      domain: t.map((U) => U[g.radius.scalingColumn]),
      range: [g.radius.min, g.radius.max]
    }), q = g.radius.scalingColumn !== "" ? L(t[$][g.radius.scalingColumn]) : 4, W = g.colors.shape ? g.colors.shape : "black", Y = g.colors.line ? g.colors.line : "black", J = 4;
    return _[l.xAxis.dataKey] === g.pooledResult.column ? /* @__PURE__ */ a.createElement(oa, { data: M, x: (U) => U.x, y: (U) => U.y - gi(l.fontSize) / 2, stroke: "black", strokeWidth: 2, fill: "black", curve: yd }) : /* @__PURE__ */ a.createElement(Ke, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        stroke: Y,
        strokeWidth: 1,
        className: "lower-ci",
        d: `
                    M${n(_[g.lower])} ${i($) - Number(J)}
                    L${n(_[g.lower])} ${i($) + Number(J)}
                `
      }
    ), /* @__PURE__ */ a.createElement(
      "path",
      {
        stroke: Y,
        strokeWidth: 1,
        className: "upper-ci",
        d: `
                    M${n(_[g.upper])} ${i($) - Number(J)}
                    L${n(_[g.upper])} ${i($) + Number(J)}
                `
      }
    ), /* @__PURE__ */ a.createElement("line", { stroke: Y, className: `line-${_[l.yAxis.dataKey]}`, key: $, x1: n(_[g.lower]), x2: n(_[g.upper]), y1: i($), y2: i($) }), g.shape === "circle" && /* @__PURE__ */ a.createElement(jm, { className: "forest-plot--circle", cx: n(Number(_[g.estimateField])), cy: i($), r: g.radius.scalingColumn !== "" ? L(t[$][g.radius.scalingColumn]) : 4, fill: W, style: { opacity: 1, filter: "unset" } }), g.shape === "square" && /* @__PURE__ */ a.createElement("rect", { className: "forest-plot--square", x: n(Number(_[g.estimateField])), y: i($) - q / 2, width: q, height: q, fill: W, style: { opacity: 1, filter: "unset" } }), g.shape === "text" && /* @__PURE__ */ a.createElement(it, { className: "forest-plot--text", x: n(Number(_[g.estimateField])), y: i($), textAnchor: "middle", verticalAnchor: "middle", fontSize: gi(l.fontSize), fill: W }, _[g.estimateField]));
  }), M && g.regression.showDiamond && /* @__PURE__ */ a.createElement(oa, { data: M, x: (_) => _.x, y: (_) => _.y, stroke: "black", strokeWidth: 2, fill: g.regression.baseLineColor, curve: yd }), g.regression.description && /* @__PURE__ */ a.createElement(it, { x: 0 - Number(l.xAxis.size), width: u, y: p - l.forestPlot.rowHeight - Number(g.rowHeight) / 3, verticalAnchor: "start", textAnchor: "start", style: { fontWeight: "bold", fontSize: 12 } }, g.regression.description), /* @__PURE__ */ a.createElement(dr, { key: "forest-plot-tooltip-area", className: "forest-plot-tooltip-area", width: u, height: p, fill: "transparent", fillOpacity: 0.5, onMouseMove: (_) => f(_, t), onMouseOut: d })), /* @__PURE__ */ a.createElement(Yt, { from: m[0], to: m[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__top-line" }), /* @__PURE__ */ a.createElement(Yt, { from: D[0], to: D[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__bottom-line" }), O.map((_) => t.map(($, L) => /* @__PURE__ */ a.createElement(it, { className: `${$[_.name]}`, x: _.forestPlotAlignRight ? u : _.forestPlotStartingPoint, y: i(L), textAnchor: _.forestPlotAlignRight ? "end" : "start", verticalAnchor: "middle", fontSize: gi(l.fontSize), fill: "black" }, $[_.name]))), !g.hideDateCategoryCol && t.map((_, $) => /* @__PURE__ */ a.createElement(it, { className: `${_[l.xAxis.dataKey]}`, x: 0, y: i($), textAnchor: "start", verticalAnchor: "middle", fontSize: gi(l.fontSize), fill: "black" }, _[l.xAxis.dataKey])), !g.hideDateCategoryCol && l.xAxis.dataKey && /* @__PURE__ */ a.createElement(it, { className: l.xAxis.dataKey, x: 0, y: 0, textAnchor: "start", verticalAnchor: "start", fontSize: gi(l.fontSize), fill: "black" }, l.xAxis.dataKey), O.map((_) => /* @__PURE__ */ a.createElement(it, { className: `${_.label}`, x: _.forestPlotAlignRight ? u : _.forestPlotStartingPoint, y: 0, textAnchor: _.forestPlotAlignRight ? "end" : "start", verticalAnchor: "start", fontSize: gi(l.fontSize), fill: "black" }, _.label)), g.leftLabel && /* @__PURE__ */ a.createElement(it, { className: "forest-plot__left-label", x: g.type === "Linear" ? n(0) - 25 : n(1) - 25, y: p + v, textAnchor: "end", verticalAnchor: "start" }, g.leftLabel), g.rightLabel && /* @__PURE__ */ a.createElement(it, { className: "forest-plot__right-label", x: g.type === "Linear" ? n(0) + 25 : n(1) + 25, y: p + v, textAnchor: "start", verticalAnchor: "start" }, g.rightLabel));
}, Zb = ({ width: e, height: t, originalWidth: r }) => {
  var O;
  const { config: n, colorScale: i, transformedData: l, formatNumber: p, seriesHighlight: u, getTextWidth: d } = fe.useContext(lt);
  if (!n || ((O = n == null ? void 0 : n.series) == null ? void 0 : O.length) < 2)
    return;
  const f = n.barHasBorder === "true" ? 1 : 0, g = e / 2, v = { small: 16, medium: 18, large: 20 }, y = 1.02, k = {
    parentKey: n.dataDescription.seriesKey,
    dataKey: n.series[0].dataKey,
    dataKeyLabel: n.runtime.seriesLabels[n.series[0].dataKey] || n.series[0].dataKey,
    color: i(n.runtime.seriesLabels[n.series[0].dataKey]),
    max: Math.max.apply(
      Math,
      l.map((_) => _[n.series[0].dataKey])
    ),
    labelColor: ""
  }, T = {
    parentKey: n.dataDescription.seriesKey,
    dataKey: n.series[1].dataKey,
    dataKeyLabel: n.runtime.seriesLabels[n.series[1].dataKey] || n.series[1].dataKey,
    color: i(n.runtime.seriesLabels[n.series[1].dataKey]),
    max: Math.max.apply(
      Math,
      l.map((_) => _[n.series[1].dataKey])
    ),
    labelColor: ""
  }, M = $n({
    domain: [0, Math.max(k.max * y, T.max * 1.1)],
    range: [0, g]
  });
  k.labelColor = k.color ? Mo("#000", k.color) : "#000", T.labelColor = T.color ? Mo("#000", T.color) : "#000";
  const C = n.yAxis.label ? `${n.yAxis.label}: ` : "", m = (_) => `<p>
				${n.dataDescription.seriesKey}: ${k.dataKeyLabel}<br/>
				${n.xAxis.dataKey}: ${_[n.xAxis.dataKey]}<br/>
				${C}${p(_[k.dataKey], "left")}
			</p>`, D = (_) => `<p>
				${n.dataDescription.seriesKey}: ${T.dataKeyLabel}<br/>
				${n.xAxis.dataKey}: ${_[n.xAxis.dataKey]}<br/>
				${C}${p(_[T.dataKey], "left")}
			</p>`;
  return e > 0 && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("style", null, `
				#cdc-visualization__paired-bar-chart,
				 #cdc-visualization__paired-bar-chart > .visx-group {
					transform-origin: center
				}
				`), /* @__PURE__ */ a.createElement("svg", { id: "cdc-visualization__paired-bar-chart", width: r, height: t, viewBox: `0 0 ${e + Number(n.runtime.yAxis.size)} ${t}`, role: "img", tabIndex: 0 }, /* @__PURE__ */ a.createElement("title", null, `Paired bar chart graphic with the title ${n.title ? n.title : "No Title Found"}`), /* @__PURE__ */ a.createElement(Ke, { top: 0, left: Number(n.xAxis.size) }, l.filter((_) => n.series[0].dataKey === k.dataKey).map((_, $) => {
    let L = n.legend.behavior === "highlight" && u.length > 0 && u.indexOf(n.series[0].dataKey) === -1, q = n.legend.behavior === "highlight" || u.length === 0 || u.indexOf(n.series[0].dataKey) !== -1, W = M(_[n.series[0].dataKey]), Y = Number(n.barHeight) ? Number(n.barHeight) : 25, J = 0;
    J = $ !== 0 ? (Number(n.barSpace) + Y + f) * $ : J;
    const le = (Number(n.barSpace) + Y + f) * l.length;
    n.heights.horizontal = le;
    const te = d(p(_[k.dataKey], "left"), `normal ${v[n.fontSize]}px sans-serif`) < W - 5;
    return /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(Ke, { key: `group-${k.dataKey}-${_[n.xAxis.dataKey]}`, className: "horizontal" }, /* @__PURE__ */ a.createElement(
      dr,
      {
        id: `bar-${k.dataKey}-${_[n.dataDescription.xKey]}`,
        className: "bar group-1",
        key: `bar-${k.dataKey}-${_[n.dataDescription.xKey]}`,
        x: g - W,
        y: J,
        width: M(_[n.series[0].dataKey]),
        height: Y,
        fill: k.color,
        "data-tooltip-html": m(_),
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.runtime.uniqueId}`,
        stroke: "#333",
        strokeWidth: f,
        opacity: L ? 0.5 : 1,
        display: q ? "block" : "none",
        tabIndex: -1
      }
    ), n.yAxis.displayNumbersOnBar && q && /* @__PURE__ */ a.createElement(it, { textAnchor: te ? "start" : "end", dx: te ? 5 : -5, verticalAnchor: "middle", x: g - W, y: J + n.barHeight / 2, fill: te ? k.labelColor : "#000" }, p(_[k.dataKey], "left"))));
  }), l.filter((_) => n.series[1].dataKey === T.dataKey).map((_, $) => {
    let L = M(_[n.series[1].dataKey]), q = n.legend.behavior === "highlight" && u.length > 0 && u.indexOf(n.series[1].dataKey) === -1, W = n.legend.behavior === "highlight" || u.length === 0 || u.indexOf(n.series[1].dataKey) !== -1, Y = n.barHeight ? Number(n.barHeight) : 25, J = 0;
    J = $ !== 0 ? (Number(n.barSpace) + Y + f) * $ : J;
    const le = (Number(n.barSpace) + Y + f) * l.length;
    n.heights.horizontal = le;
    const te = d(p(_[T.dataKey], "left"), `normal ${v[n.fontSize]}px sans-serif`) < L - 5;
    return /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("style", null, `
                      .bar-${T.dataKey}-${_[n.xAxis.dataKey]} {
                          transform-origin: ${g}px ${J}px
                      }
							      `), /* @__PURE__ */ a.createElement(Ke, { key: `group-${T.dataKey}-${_[n.dataDescription.xKey]}`, className: "horizontal" }, /* @__PURE__ */ a.createElement(
      dr,
      {
        id: `bar-${T.dataKey}-${_[n.dataDescription.xKey]}`,
        className: "bar group-2",
        key: `bar-${T.dataKey}-${_[n.dataDescription.xKey]}`,
        x: g,
        y: J,
        width: M(_[n.series[1].dataKey]),
        height: Y,
        fill: T.color,
        "data-tooltip-html": D(_),
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.runtime.uniqueId}`,
        strokeWidth: f,
        stroke: "#333",
        opacity: q ? 0.5 : 1,
        display: W ? "block" : "none",
        tabIndex: -1
      }
    ), n.yAxis.displayNumbersOnBar && W && /* @__PURE__ */ a.createElement(it, { textAnchor: te ? "end" : "start", dx: te ? -5 : 5, verticalAnchor: "middle", x: g + L, y: J + n.barHeight / 2, fill: te ? T.labelColor : "#000" }, p(_[T.dataKey], "left"))));
  }))));
}, pm = ({ config: e, minValue: t, maxValue: r, existPositiveValue: n, data: i, isAllLine: l }) => {
  let p = 0, u = 0, d = 0, f = 0;
  if (!i)
    return { min: p, max: u };
  const { visualizationType: g, series: v } = e, { max: y, min: k } = e.runtime.yAxis, T = n ? y >= r : y >= 0, M = e.useLogScale ? k >= 0 : k <= 0 && t >= 0 || k <= t && t < 0;
  p = k && M ? k : t, u = y && T ? y : Number.MIN_VALUE;
  const { lower: C, upper: m } = (e == null ? void 0 : e.confidenceKeys) || {};
  if (C && m && e.visualizationType === "Bar") {
    const D = p < 0 ? 1.1 : 0;
    u = Math.max(r, Math.max(...i.flatMap((O) => [O[m], O[C]])) * 1.15), p = Math.min(t, Math.min(...i.flatMap((O) => [O[m], O[C]])) * 1.15) * D;
  }
  if (e.series.filter((D) => (D == null ? void 0 : D.type) === "Forecasting")) {
    const {
      runtime: { forecastingSeriesKeys: D }
    } = e;
    if ((D == null ? void 0 : D.length) > 0) {
      let O = [];
      D.forEach((q) => {
        var W;
        (W = q.confidenceIntervals) == null || W.map((Y) => {
          O.push(Y.high), O.push(Y.low);
        });
      });
      const _ = i.map((q) => O.map((W) => q[W])), $ = Math.max.apply(
        null,
        _.map((q) => q[0])
      ), L = Math.min.apply(
        null,
        _.map((q) => q[1])
      );
      $ > u && (u = $), L < p && (p = L);
    }
  }
  if (g === "Combo")
    try {
      if (!i)
        throw new Error("COVE: missing data while getting min/max for combo chart.");
      let D = v.filter(($) => $.axis === "Left"), O = v.filter(($) => $.axis === "Right");
      const _ = ($, L, q, W = "left") => {
        let Y = 0;
        return (L.map((le) => le.dataKey) || []).forEach((le) => {
          let U = L.find((K) => K.dataKey === le), te = $.map((K) => K[le]), me = Math.max.apply(null, te);
          e.visualizationSubType === "stacked" && W === "left" && U.type === "Bar" && (Y += me), me > q && (q = me), q < Y && (q = Y);
        }), q;
      };
      d = _(i, D, d, "left"), f = _(i, O, f, "right"), d < y && (d = y);
    } catch (D) {
      console.error(D.message);
    }
  if ((g === "Bar" || g === "Combo" && !l) && p > 0 && (p = 0), (e.visualizationType === "Bar" || e.visualizationType === "Combo" && !l) && p < 0 && (p = p * 1.1), e.visualizationType === "Combo" && l && ((k == null || k === "") && p > 0 && (p = 0), k)) {
    const D = e.useLogScale ? k >= 0 && k < t : k < t;
    p = k && D ? k : t;
  }
  if (e.visualizationType === "Deviation Bar" && p > 0) {
    const D = Number(k) < Math.min(t, Number(e.xAxis.target));
    p = k && D ? k : 0;
  }
  if (e.visualizationType === "Line") {
    const D = e.useLogScale ? k >= 0 && k < t : k < t;
    p = k && D ? k : t;
  }
  if (u === Number.MIN_VALUE && (u = n ? r : 0), e.runtime.yAxis.paddingPercent) {
    let D = (u - p) * e.runtime.yAxis.paddingPercent;
    p -= D, u += D;
  }
  if (e.isLollipopChart && e.yAxis.displayNumbersOnBar) {
    const D = i.map((_) => _[e.series[0].dataKey]), O = Math.max(...D).toString().length;
    switch (!0) {
      case (O > 8 && O <= 12):
        u = u * 1.3;
        break;
      case (O > 4 && O <= 7):
        u = u * 1.1;
        break;
    }
  }
  return e.yAxis.enablePadding && (p < 0 ? (u *= 1 + e.yAxis.scalePadding * 2 / 100, p *= 1 + e.yAxis.scalePadding * 2 / 100) : u *= 1 + e.yAxis.scalePadding / 100), { min: p, max: u, leftMax: d, rightMax: f };
}, Hr = {
  TIME: "time",
  LOG: "log",
  POINT: "point",
  LINEAR: "linear",
  BAND: "band"
}, Qb = (e) => {
  let { xAxisDataMapped: t, xMax: r, yMax: n, min: i, max: l, config: p, data: u } = e;
  const { rawData: d, dimensions: f } = fe.useContext(lt), [g, v] = f, y = p.runtime.barSeriesKeys || p.runtime.seriesKeys, k = p.runtime.xAxis.type, T = p.orientation === "horizontal", M = (Y) => Y[p.runtime.originalXAxis.dataKey], C = u.map((Y) => M(Y)), { visualizationType: m } = p;
  let D = null, O = null, _ = null, $ = null, L = null, q = null, W = null;
  if (T && (D = e0({ min: i * 1.03, ...e }), D.type = p.useLogScale ? Hr.LOG : Hr.LINEAR, O = n0(k, t), O.rangeRound([0, n]), L = Ih(y, [0, n])), T || (W = Ih(C, [0, r], 0.5), D = id(t, [0, r], 1 - p.barThickness), O = t0(e), L = id(y, [0, D.bandwidth()], 0)), p.xAxis.type === "date-time") {
    let Y = Math.min(...t), J = Math.max(...t);
    Y -= (p.xAxis.padding ? p.xAxis.padding * 0.01 : 0) * (J - Y), J += (p.xAxis.padding ? p.xAxis.padding * 0.01 : 0) * (J - Y), D = wg({
      domain: [Y, J],
      range: [0, r]
    }), W = D, D.type = Hr.TIME, L = id(y, [0, p.barThickness * r], 0);
  }
  if (p.visualizationType === "Deviation Bar") {
    const Y = p.isLollipopChart ? 1.05 : 1.03;
    O = dd({
      domain: t,
      range: [0, n]
    }), D = $n({
      domain: [i * Y, Math.max(Number(p.xAxis.target), l)],
      range: [0, r],
      round: !0,
      nice: !0
    }), D.type = Hr.LINEAR;
  }
  if (p.visualizationType === "Scatter Plot" && p.xAxis.type === "continuous" && (D = $n({
    domain: [0, Math.max.apply(null, D.domain())],
    range: [0, r]
  }), D.type = Hr.LINEAR), m === "Box Plot") {
    const Y = [];
    if (p.boxplot.plots.map((te) => te.columnOutliers.map((me) => Y.push(me))) && !p.boxplot.hideOutliers) {
      let te = Math.min(...Y), me = Math.max(...Y);
      te < i && (i = te), me > l && (l = me);
    }
    let le = Math.min(...p.boxplot.plots.map((te) => te.columnLowerBounds)), U = Math.max(...p.boxplot.plots.map((te) => te.columnUpperBounds));
    le < i && (i = le), U > l && (l = U), O = $n({
      range: [n, 0],
      round: !0,
      domain: [i, l]
    }), D = dd({
      range: [0, r],
      round: !0,
      domain: p.boxplot.categories,
      padding: 0.4
    }), D.type = Hr.BAND;
  }
  if (m === "Paired Bar") {
    let J = Math.max.apply(
      Math,
      u.map((U) => {
        var te;
        return U[(te = p.series[0]) == null ? void 0 : te.dataKey];
      })
    ), le = Math.max.apply(
      Math,
      u.map((U) => {
        var te;
        return U[(te = p.series[1]) == null ? void 0 : te.dataKey];
      })
    );
    $ = $n({
      domain: [0, Math.max(J, le) * 1.02],
      range: [r / 2, 0]
    }), _ = $n({
      domain: $.domain(),
      range: [r / 2, r],
      nice: !0
    });
  }
  if (m === "Forest Plot") {
    const Y = () => p.forestPlot.regression.showDiamond || p.forestPlot.regression.description ? [0 + p.forestPlot.rowHeight * 2, n - p.forestPlot.rowHeight] : [0 + p.forestPlot.rowHeight * 2, n];
    O = $n({
      domain: [0, d.length],
      range: Y()
    });
    const J = 5, le = Number(p.forestPlot.leftWidthOffset) / 100 * r, U = Number(p.forestPlot.rightWidthOffset) / 100 * r, te = Number(p.forestPlot.rightWidthOffsetMobile) / 100 * r, me = Number(p.forestPlot.leftWidthOffsetMobile) / 100 * r;
    if (g > 480) {
      if (p.forestPlot.type === "Linear" && (D = $n({
        domain: [Math.min(...u.map((K) => parseFloat(K[p.forestPlot.lower]))) - J, Math.max(...u.map((K) => parseFloat(K[p.forestPlot.upper]))) + J],
        range: [le, f[0] - U]
      }), D.type = Hr.LINEAR), p.forestPlot.type === "Logarithmic") {
        let K = Math.max(...u.map((ue) => parseFloat(ue[p.forestPlot.upper]))), ce = Math.min(...u.map((ue) => parseFloat(ue[p.forestPlot.lower])));
        D = hu({
          domain: [ce, K],
          range: [le, r - U],
          nice: !0
        }), D.type = Hr.LOG;
      }
    } else if (p.forestPlot.type === "Linear" && (D = $n({
      domain: [Math.min(...u.map((K) => parseFloat(K[p.forestPlot.lower]))) - J, Math.max(...u.map((K) => parseFloat(K[p.forestPlot.upper]))) + J],
      range: [me, r - te],
      type: Hr.LINEAR
    })), p.forestPlot.type === "Logarithmic") {
      let K = Math.max(...u.map((ue) => parseFloat(ue[p.forestPlot.upper]))), ce = Math.min(...u.map((ue) => parseFloat(ue[p.forestPlot.lower])));
      D = hu({
        domain: [ce, K],
        range: [le, r - U],
        nice: !0,
        base: K > 1 ? 10 : 2,
        round: !1,
        type: Hr.LOG
      });
    }
  }
  return { xScale: D, yScale: O, seriesScale: L, g1xScale: $, g2xScale: _, xScaleNoPadding: q, xScaleBrush: W };
}, Jb = (e, t, r) => {
  const n = t.domain();
  if (t.type === "time") {
    const i = e[e.length - 1], l = e[0], p = (i - l) / (r - 1), u = [];
    for (let d = i; d >= l; d -= p)
      u.push(d);
    return u[u.length - 1] !== l && u.push(l), u.reverse(), u;
  }
  if (n.length > 2) {
    const i = r || 1, l = [];
    for (let p = n.length; p > 0; p -= i) {
      const u = Math.max(Math.round(p) - 1, 0);
      l.push(n[u]);
    }
    return l.reverse(), l;
  }
}, e0 = ({ min: e, max: t, xMax: r, config: n }) => (e = n.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e, (n.useLogScale ? hu : $n)({
  domain: [e, t],
  range: [0, r],
  nice: n.useLogScale,
  zero: n.useLogScale
})), t0 = ({ min: e, max: t, yMax: r, config: n, leftMax: i }) => {
  e = n.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e;
  const l = n.useLogScale ? hu : $n;
  return n.visualizationType === "Combo" && (t = i), l({
    domain: [e, t],
    range: [r, 0],
    nice: n.useLogScale,
    zero: n.useLogScale
  });
}, n0 = (e, t) => e === "date" ? $n({
  domain: [Math.min(...t), Math.max(...t)]
}) : Lo({ domain: t, padding: 0.5 }), Ih = (e, t, r = 0) => Lo({
  domain: e,
  range: t,
  padding: r
}), id = (e, t, r = 0) => dd({
  domain: e,
  range: t,
  padding: r
});
function r0(e) {
  return { hasTopAxis: e.visualizationType === "Bar" || e.visualizationType === "Combo" || e.visualizationType === "Line" };
}
const Ql = () => {
  const { config: e } = fe.useContext(lt), { visualizationType: t, series: r, orientation: n, visualizationSubType: i } = e, l = [
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
  ], p = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"], u = () => !["Forest Plot", "Sankey"].includes(t), d = () => !["Spark Line"].includes(t), f = () => !["Spark Line"].includes(t), g = () => !["Area Chart", "Box Plot", "Pie", "Scatter Plot", "Forest Plot", "Spark Line", "Sankey"].includes(t), v = () => !["Area Chart", "Scatter Plot", "Box Plot", "Forest Plot", "Spark Line", "Sankey"].includes(t), y = () => {
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
  }, k = () => t === "Forest Plot" ? !1 : e.orientation === "horizontal" && (e.yAxis.labelPlacement === "Below Bar" || e.yAxis.labelPlacement === "On Date/Category Axis" || e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar"), T = () => {
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
    if ((t === "Bar" || "Combo") && i === "regular")
      return !0;
  }, C = () => ["Line", "Bar", "Area Chart", "Combo"].includes(t) && n === "vertical", m = () => ["Box Plot", "Scatter Plot", "Pie"].includes(t) ? !1 : r == null ? void 0 : r.some(($e) => $e.type === "Bar" || $e.type === "Paired Bar" || $e.type === "Deviation Bar"), D = () => {
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
    headerColors: p,
    visCanAnimate: v,
    visHasAnchors: T,
    visHasBarBorders: m,
    visHasDataCutoff: D,
    visHasLabelOnData: g,
    visHasDataSuppression: M,
    visHasLegend: y,
    visHasLegendAxisAlign: () => t === "Bar" && i === "stacked" && e.legend.behavior === "isolate",
    visHasBrushChart: C,
    visHasNumbersOnBars: k,
    visSupportsBarSpace: () => ["Forest Plot"].includes(t) ? !1 : n === "horizontal" || t === "Paired Bar",
    visSupportsBarThickness: () => !["Forest Plot"].includes(t),
    visSupportsChartHeight: () => !["Spark Line"].includes(t),
    visSupportsDateCategoryAxis: u,
    visSupportsDateCategoryAxisLabel: () => !["Forest Plot", "Spark Line"].includes(t),
    visSupportsDateCategoryAxisLine: () => !["Forest Plot", "Spark Line"].includes(t),
    visSupportsDateCategoryAxisTicks: () => !["Forest Plot", "Spark Line"].includes(t),
    visSupportsDateCategoryHeight: () => !["Spark Line", "Sankey"].includes(t),
    visSupportsDateCategoryNumTicks: () => !["Spark Line"].includes(t),
    visSupportsDateCategoryTickRotation: () => !["Spark Line"].includes(t),
    visSupportsDateCategoryAxisPadding: () => e.xAxis.type === "date-time",
    visSupportsFilters: () => !["Forest Plot", "Sankey"].includes(t),
    visSupportsFootnotes: f,
    visSupportsLeftValueAxis: () => !["Spark Line", "Sankey"].includes(t),
    visSupportsNonSequentialPallete: () => !["Paired Bar", "Deviation Bar", "Forest Plot", "Forecasting", "Sankey"].includes(t),
    visSupportsPreliminaryData: () => {
      const _e = e == null ? void 0 : e.series.some(($e) => ["Line", "dashed-sm", "dashed-md", "dashed-lg"].includes($e == null ? void 0 : $e.type));
      return !!(t === "Line" || t === "Combo" && _e);
    },
    visSupportsRankByValue: () => !["Spark Line"].includes(t),
    visSupportsRegions: () => !["Forest Plot", "Pie", "Paired Bar", "Spark Line", "Sankey"].includes(t),
    visSupportsResponsiveTicks: () => !["Spark Line"].includes(t),
    visSupportsReverseColorPalette: () => !["Forest Plot", "Paired Bar", "Deviation Bar", "Sankey"].includes(t),
    visSupportsSequentialPallete: () => !["Paired Bar", "Deviation Bar", "Forest Plot", "Forecasting", "Sankey"].includes(t),
    visSupportsSuperTitle: d,
    visSupportsTooltipLines: () => !!["Combo", "Forecasting", "Area Chart", "Line", "Bar"].includes(t),
    visHasSelectableLegendValues: O,
    visSupportsTooltipOpacity: () => !["Spark Line", "Sankey"].includes(t),
    visSupportsValueAxisGridLines: () => {
      const _e = ["Forest Plot"];
      return !(n === "horizontal" || _e.includes(t));
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
var xf = {};
const a0 = /* @__PURE__ */ Gd(Cx), i0 = /* @__PURE__ */ Gd(Nx);
var bf = {};
bf.__esModule = !0;
bf.default = o0;
var nu = fe;
function o0(e) {
  var t = (0, nu.useState)(e), r = t[0], n = t[1], i = (0, nu.useRef)(null), l = (0, nu.useCallback)(function(p, u) {
    i.current = u || null, n(p);
  }, [n]);
  return (0, nu.useLayoutEffect)(function() {
    i.current && (i.current(r), i.current = null);
  }, [r]), [r, l];
}
var Sf = {}, Ef = {};
Ef.__esModule = !0;
Ef.default = l0;
function l0(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
var kf = {};
kf.__esModule = !0;
kf.default = c0;
function s0(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = u0(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function u0(e, t) {
  if (e) {
    if (typeof e == "string")
      return Hh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Hh(e, t);
  }
}
function Hh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function c0(e, t) {
  for (var r = e, n = 1 / 0, i = s0(t), l; !(l = i()).done; ) {
    var p = l.value, u = Math.sqrt(Math.pow(p.x - e.x, 2) + Math.pow(p.y - e.y, 2));
    u < n && (n = u, r = {
      x: p.x,
      y: p.y
    });
  }
  return r;
}
Sf.__esModule = !0;
Sf.default = f0;
var Wh = mm(Ef), d0 = mm(kf);
function mm(e) {
  return e && e.__esModule ? e : { default: e };
}
function f0(e, t, r) {
  var n, i, l, p;
  return r === void 0 && (r = {}), t.length > 0 ? (0, d0.default)(e, t) : {
    x: (0, Wh.default)(e.x, (n = r.xMin) != null ? n : -1 / 0, (i = r.xMax) != null ? i : 1 / 0),
    y: (0, Wh.default)(e.y, (l = r.yMin) != null ? l : -1 / 0, (p = r.yMax) != null ? p : 1 / 0)
  };
}
var Tf = {};
Tf.__esModule = !0;
Tf.default = m0;
var h0 = fe;
function p0(e, t, r) {
  if (r === void 0 && (r = 1), !e)
    return [];
  for (var n = [], i = e.getTotalLength(), l = 0; l <= i; l += r) {
    var p = e.getPointAtLength(l), u = p.matrixTransform(t);
    n.push(u);
  }
  return n;
}
function m0(e) {
  var t = (0, h0.useMemo)(function() {
    if (!e)
      return [];
    var r = e.getCTM() || new DOMMatrix();
    return p0(e, r);
  }, [e == null ? void 0 : e.getTotalLength()]);
  return t;
}
xf.__esModule = !0;
xf.default = v0;
var Si = fe, Po = a0, Vh = i0, g0 = wf(bf), jh = wf(Sf), y0 = wf(Tf);
function wf(e) {
  return e && e.__esModule ? e : { default: e };
}
function jr() {
  return jr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, jr.apply(this, arguments);
}
function v0(e) {
  var t = e === void 0 ? {} : e, r = t.resetOnStart, n = r === void 0 ? !1 : r, i = t.snapToPointer, l = i === void 0 ? !0 : i, p = t.onDragEnd, u = t.onDragMove, d = t.onDragStart, f = t.x, g = t.y, v = t.dx, y = t.dy, k = t.isDragging, T = t.restrict, M = T === void 0 ? {} : T, C = t.restrictToPath, m = (0, Si.useRef)({
    x: f,
    y: g,
    dx: v,
    dy: y
  }), D = (0, g0.default)({
    x: f,
    y: g,
    dx: v ?? 0,
    dy: y ?? 0,
    isDragging: !1
  }), O = D[0], _ = D[1], $ = (0, Si.useState)(new Po.Point({
    x: 0,
    y: 0
  })), L = $[0], q = $[1];
  (0, Si.useEffect)(function() {
    (m.current.x !== f || m.current.y !== g || m.current.dx !== v || m.current.dy !== y) && (m.current = {
      x: f,
      y: g,
      dx: v,
      dy: y
    }, _(function(U) {
      return jr({}, U, {
        x: f,
        y: g,
        dx: v ?? 0,
        dy: y ?? 0
      });
    }));
  }), (0, Si.useEffect)(function() {
    k !== void 0 && O.isDragging !== k && _(function(U) {
      return jr({}, U, {
        isDragging: k
      });
    });
  }, [O.isDragging, k, _]);
  var W = (0, y0.default)(C), Y = (0, Si.useCallback)(function(U) {
    U.persist(), _(function(te) {
      var me = te.x, K = me === void 0 ? 0 : me, ce = te.y, ue = ce === void 0 ? 0 : ce, he = te.dx, ae = te.dy, V = new Po.Point({
        x: (K || 0) + he,
        y: (ue || 0) + ae
      }), ee = (0, Vh.localPoint)(U) || new Po.Point({
        x: 0,
        y: 0
      }), ne = l ? ee : V, ke = (0, jh.default)(ne, W, M);
      return q((0, Po.subtractPoints)(V, ee)), {
        isDragging: !0,
        dx: n ? 0 : te.dx,
        dy: n ? 0 : te.dy,
        x: n ? ke.x : ke.x - te.dx,
        y: n ? ke.y : ke.y - te.dy
      };
    }, d && function(te) {
      d(jr({}, te, {
        event: U
      }));
    });
  }, [d, n, M, W, _, l]), J = (0, Si.useCallback)(function(U) {
    U.persist(), _(function(te) {
      if (!te.isDragging)
        return te;
      var me = te.x, K = me === void 0 ? 0 : me, ce = te.y, ue = ce === void 0 ? 0 : ce, he = (0, Vh.localPoint)(U) || new Po.Point({
        x: 0,
        y: 0
      }), ae = l ? he : (0, Po.sumPoints)(he, L), V = (0, jh.default)(ae, W, M);
      return jr({}, te, {
        dx: V.x - K,
        dy: V.y - ue
      });
    }, u && function(te) {
      te.isDragging && u(jr({}, te, {
        event: U
      }));
    });
  }, [_, u, l, L, W, M]), le = (0, Si.useCallback)(function(U) {
    U.persist(), _(function(te) {
      return jr({}, te, {
        isDragging: !1
      });
    }, p && function(te) {
      p(jr({}, te, {
        event: U
      }));
    });
  }, [p, _]);
  return jr({}, O, {
    dragEnd: le,
    dragMove: J,
    dragStart: Y
  });
}
var Yu = gm, zl = Cf(Qh), od = Cf(fe), x0 = Cf(xf);
function Cf(e) {
  return e && e.__esModule ? e : { default: e };
}
function gm(e) {
  var t = e.captureDragArea, r = t === void 0 ? !0 : t, n = e.snapToPointer, i = n === void 0 ? !0 : n, l = e.children, p = e.dx, u = e.dy, d = e.height, f = e.onDragEnd, g = e.onDragMove, v = e.onDragStart, y = e.resetOnStart, k = e.width, T = e.x, M = e.y, C = e.isDragging, m = e.restrict, D = e.restrictToPath, O = (0, x0.default)({
    resetOnStart: y,
    snapToPointer: i,
    onDragEnd: f,
    onDragMove: g,
    onDragStart: v,
    x: T,
    y: M,
    dx: p,
    dy: u,
    isDragging: C,
    restrict: m,
    restrictToPath: D
  });
  return /* @__PURE__ */ od.default.createElement(od.default.Fragment, null, O.isDragging && r && /* @__PURE__ */ od.default.createElement("rect", {
    width: k,
    height: d,
    onPointerDown: O.dragStart,
    onPointerMove: O.dragMove,
    onPointerUp: O.dragEnd,
    fill: "transparent"
  }), l(O));
}
gm.propTypes = {
  children: zl.default.func.isRequired,
  width: zl.default.number.isRequired,
  height: zl.default.number.isRequired,
  captureDragArea: zl.default.bool,
  isDragging: zl.default.bool
};
function Fu(e, t) {
  if ("invert" in e && typeof e.invert < "u")
    return e.invert(t).valueOf();
  var r = e.range(), n = r[0], i = r[1], l = 0, p = "step" in e && typeof e.step < "u" ? e.step() : 1, u = p * (i - n) / Math.abs(i - n);
  if (u > 0)
    for (; t > n + u * (l + 1); )
      l += 1;
  else
    for (; t < n + u * (l + 1); )
      l += 1;
  return l;
}
function Uh(e, t, r, n) {
  var i, l = Fu(e, t + (t < r ? -n : n)), p = Fu(e, r + (r < t ? -n : n)), u = Math.min(l, p), d = Math.max(l, p);
  if ("invert" in e && typeof e.invert < "u")
    i = {
      start: u,
      end: d
    };
  else {
    for (var f = [], g = e.domain(), v = u; v <= d; v += 1)
      f.push(g[v]);
    i = {
      values: f
    };
  }
  return i;
}
function Af(e) {
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
function Sr() {
  return Sr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Sr.apply(this, arguments);
}
function b0(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Id(e, t);
}
function Id(e, t) {
  return Id = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Id(e, t);
}
var ym = /* @__PURE__ */ function(e) {
  b0(t, e);
  function t() {
    for (var n, i = arguments.length, l = new Array(i), p = 0; p < i; p++)
      l[p] = arguments[p];
    return n = e.call.apply(e, [this].concat(l)) || this, n.handleDragStart = function(u) {
      var d = n.props, f = d.onBrushHandleChange, g = d.type, v = d.onBrushStart;
      f && f(g, Af(u.event)), v && v(u);
    }, n.handleDragMove = function(u) {
      var d = n.props, f = d.updateBrush, g = d.type, v = d.isControlled;
      !u.isDragging || v || f(function(y) {
        var k = y.start, T = y.end, M = 0, C = Math.max(k.x, T.x), m = Math.min(k.x, T.x), D = Math.max(k.y, T.y), O = Math.min(k.y, T.y);
        switch (g) {
          case "right":
            return M = C + u.dx, Sr({}, y, {
              activeHandle: g,
              extent: Sr({}, y.extent, {
                x0: Math.max(Math.min(M, k.x), y.bounds.x0),
                x1: Math.min(Math.max(M, k.x), y.bounds.x1)
              })
            });
          case "left":
            return M = m + u.dx, Sr({}, y, {
              activeHandle: g,
              extent: Sr({}, y.extent, {
                x0: Math.min(M, T.x),
                x1: Math.max(M, T.x)
              })
            });
          case "bottom":
            return M = D + u.dy, Sr({}, y, {
              activeHandle: g,
              extent: Sr({}, y.extent, {
                y0: Math.min(M, k.y),
                y1: Math.max(M, k.y)
              })
            });
          case "top":
            return M = O + u.dy, Sr({}, y, {
              activeHandle: g,
              extent: Sr({}, y.extent, {
                y0: Math.min(M, T.y),
                y1: Math.max(M, T.y)
              })
            });
          default:
            return y;
        }
      });
    }, n.handleDragEnd = function() {
      var u = n.props, d = u.updateBrush, f = u.onBrushEnd, g = u.onBrushHandleChange, v = u.isControlled;
      v || d(function(y) {
        var k = y.start, T = y.end, M = y.extent;
        k.x = Math.min(M.x0, M.x1), k.y = Math.min(M.y0, M.y0), T.x = Math.max(M.x0, M.x1), T.y = Math.max(M.y0, M.y1);
        var C = Sr({}, y, {
          start: k,
          end: T,
          activeHandle: null,
          isBrushing: !1,
          extent: {
            x0: Math.min(k.x, T.x),
            x1: Math.max(k.x, T.x),
            y0: Math.min(k.y, T.y),
            y1: Math.max(k.y, T.y)
          }
        });
        return f && f(C), C;
      }), g && g();
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this, l = this.props, p = l.stageWidth, u = l.stageHeight, d = l.brush, f = l.type, g = l.handle, v = l.isControlled, y = l.isDragInProgress, k = l.renderBrushHandle, T = g.x, M = g.y, C = g.width, m = g.height, D = f === "right" || f === "left" ? "ew-resize" : "ns-resize";
    return /* @__PURE__ */ a.createElement(Yu, {
      width: p,
      height: u,
      onDragStart: this.handleDragStart,
      onDragMove: this.handleDragMove,
      onDragEnd: this.handleDragEnd,
      resetOnStart: !0,
      isDragging: v ? y : void 0
    }, function(O) {
      var _ = O.dragStart, $ = O.dragEnd, L = O.dragMove, q = O.isDragging;
      return /* @__PURE__ */ a.createElement("g", null, q && /* @__PURE__ */ a.createElement("rect", {
        fill: "transparent",
        width: p,
        height: u,
        style: {
          cursor: D
        },
        onPointerMove: L,
        onPointerUp: v ? void 0 : $,
        onPointerLeave: v ? void 0 : $
      }), !k && /* @__PURE__ */ a.createElement("rect", {
        x: T,
        y: M,
        width: C,
        height: m,
        fill: "transparent",
        className: "visx-brush-handle-" + f,
        onPointerDown: _,
        onPointerMove: L,
        onPointerUp: v ? void 0 : $,
        style: {
          cursor: D,
          pointerEvents: d.activeHandle || d.isBrushing ? "none" : "all"
        }
      }), k && /* @__PURE__ */ a.createElement("g", {
        onPointerDown: _,
        onPointerMove: L,
        onPointerUp: v ? void 0 : $
      }, k(Sr({}, i.props.handle, {
        height: u,
        className: "visx-brush-handle-" + f,
        isBrushActive: d.extent.x0 !== -1 && d.extent.x1 !== -1
      }))));
    });
  }, t;
}(a.Component);
ym.propTypes = {
  stageWidth: se.number.isRequired,
  stageHeight: se.number.isRequired,
  updateBrush: se.func.isRequired,
  onBrushStart: se.func,
  onBrushEnd: se.func,
  handle: se.shape({
    x: se.number.isRequired,
    y: se.number.isRequired,
    width: se.number.isRequired,
    height: se.number.isRequired
  }).isRequired,
  isControlled: se.bool,
  isDragInProgress: se.bool,
  onBrushHandleChange: se.func,
  renderBrushHandle: se.func
};
function cr() {
  return cr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, cr.apply(this, arguments);
}
function S0(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Hd(e, t);
}
function Hd(e, t) {
  return Hd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Hd(e, t);
}
var Pf = /* @__PURE__ */ function(e) {
  S0(t, e);
  function t() {
    for (var n, i = arguments.length, l = new Array(i), p = 0; p < i; p++)
      l[p] = arguments[p];
    return n = e.call.apply(e, [this].concat(l)) || this, n.cornerDragMove = function(u) {
      var d = n.props, f = d.updateBrush, g = d.type;
      u.isDragging && f(function(v) {
        var y = v.start, k = v.end, T = Math.max(y.x, k.x), M = Math.min(y.x, k.x), C = Math.max(y.y, k.y), m = Math.min(y.y, k.y), D = 0, O = 0;
        switch (g) {
          case "topRight":
            return D = T + u.dx, O = m + u.dy, cr({}, v, {
              activeHandle: g,
              extent: cr({}, v.extent, {
                x0: Math.max(Math.min(D, y.x), v.bounds.x0),
                x1: Math.min(Math.max(D, y.x), v.bounds.x1),
                y0: Math.max(Math.min(O, k.y), v.bounds.y0),
                y1: Math.min(Math.max(O, k.y), v.bounds.y1)
              })
            });
          case "topLeft":
            return D = M + u.dx, O = m + u.dy, cr({}, v, {
              activeHandle: g,
              extent: cr({}, v.extent, {
                x0: Math.max(Math.min(D, k.x), v.bounds.x0),
                x1: Math.min(Math.max(D, k.x), v.bounds.x1),
                y0: Math.max(Math.min(O, k.y), v.bounds.y0),
                y1: Math.min(Math.max(O, k.y), v.bounds.y1)
              })
            });
          case "bottomLeft":
            return D = M + u.dx, O = C + u.dy, cr({}, v, {
              activeHandle: g,
              extent: cr({}, v.extent, {
                x0: Math.max(Math.min(D, k.x), v.bounds.x0),
                x1: Math.min(Math.max(D, k.x), v.bounds.x1),
                y0: Math.max(Math.min(O, y.y), v.bounds.y0),
                y1: Math.min(Math.max(O, y.y), v.bounds.y1)
              })
            });
          case "bottomRight":
            return D = T + u.dx, O = C + u.dy, cr({}, v, {
              activeHandle: g,
              extent: cr({}, v.extent, {
                x0: Math.max(Math.min(D, y.x), v.bounds.x0),
                x1: Math.min(Math.max(D, y.x), v.bounds.x1),
                y0: Math.max(Math.min(O, y.y), v.bounds.y0),
                y1: Math.min(Math.max(O, y.y), v.bounds.y1)
              })
            });
          default:
            return v;
        }
      });
    }, n.cornerDragEnd = function() {
      var u = n.props, d = u.updateBrush, f = u.onBrushEnd;
      d(function(g) {
        var v = g.start, y = g.end, k = g.extent;
        v.x = Math.min(k.x0, k.x1), v.y = Math.min(k.y0, k.y0), y.x = Math.max(k.x0, k.x1), y.y = Math.max(k.y0, k.y1);
        var T = cr({}, g, {
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
        return f && f(T), T;
      });
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this.props, l = i.type, p = i.brush, u = i.stageWidth, d = i.stageHeight, f = i.style, g = i.corner, v = (f == null ? void 0 : f.cursor) || (l === "topLeft" || l === "bottomRight" ? "nwse-resize" : "nesw-resize"), y = p.activeHandle || p.isBrushing ? "none" : "all";
    return /* @__PURE__ */ a.createElement(Yu, {
      width: u,
      height: d,
      onDragMove: this.cornerDragMove,
      onDragEnd: this.cornerDragEnd,
      resetOnStart: !0
    }, function(k) {
      var T = k.dragMove, M = k.dragEnd, C = k.dragStart, m = k.isDragging;
      return /* @__PURE__ */ a.createElement("g", null, m && /* @__PURE__ */ a.createElement("rect", {
        fill: "transparent",
        width: u,
        height: d,
        style: {
          cursor: v
        },
        onPointerMove: T,
        onPointerUp: M
      }), /* @__PURE__ */ a.createElement("rect", cr({
        fill: "transparent",
        onPointerDown: C,
        onPointerMove: T,
        onPointerUp: M,
        className: "visx-brush-corner-" + l,
        style: cr({
          cursor: v,
          pointerEvents: y
        }, f)
      }, g)));
    });
  }, t;
}(a.Component);
Pf.propTypes = {
  stageWidth: se.number.isRequired,
  stageHeight: se.number.isRequired,
  updateBrush: se.func.isRequired,
  onBrushEnd: se.func,
  corner: se.shape({
    x: se.number.isRequired,
    y: se.number.isRequired,
    width: se.number.isRequired,
    height: se.number.isRequired
  }).isRequired
};
Pf.defaultProps = {
  style: {}
};
function Da() {
  return Da = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Da.apply(this, arguments);
}
function E0(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Wd(e, t);
}
function Wd(e, t) {
  return Wd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Wd(e, t);
}
var k0 = {
  cursor: "move"
}, Rf = /* @__PURE__ */ function(e) {
  E0(t, e);
  function t() {
    for (var n, i = arguments.length, l = new Array(i), p = 0; p < i; p++)
      l[p] = arguments[p];
    return n = e.call.apply(e, [this].concat(l)) || this, n.selectionDragStart = function(u) {
      var d = n.props, f = d.onMoveSelectionChange, g = d.onBrushStart;
      f && f("move", Af(u.event)), g && g(u);
    }, n.selectionDragMove = function(u) {
      var d = n.props, f = d.updateBrush, g = d.isControlled;
      g || f(function(v) {
        var y = v.start, k = y.x, T = y.y, M = v.end, C = M.x, m = M.y, D = u.dx > 0 ? Math.min(u.dx, v.bounds.x1 - C) : Math.max(u.dx, v.bounds.x0 - k), O = u.dy > 0 ? Math.min(u.dy, v.bounds.y1 - m) : Math.max(u.dy, v.bounds.y0 - T);
        return Da({}, v, {
          isBrushing: !0,
          extent: Da({}, v.extent, {
            x0: k + D,
            x1: C + D,
            y0: T + O,
            y1: m + O
          })
        });
      });
    }, n.selectionDragEnd = function() {
      var u = n.props, d = u.updateBrush, f = u.onBrushEnd, g = u.onMoveSelectionChange, v = u.isControlled;
      v || d(function(y) {
        var k = Da({}, y, {
          isBrushing: !1,
          start: Da({}, y.start, {
            x: Math.min(y.extent.x0, y.extent.x1),
            y: Math.min(y.extent.y0, y.extent.y1)
          }),
          end: Da({}, y.end, {
            x: Math.max(y.extent.x0, y.extent.x1),
            y: Math.max(y.extent.y0, y.extent.y1)
          })
        });
        return f && f(k), k;
      }), g && g();
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var i = this.props, l = i.width, p = i.height, u = i.stageWidth, d = i.stageHeight, f = i.brush, g = i.disableDraggingSelection, v = i.onMouseLeave, y = i.onMouseMove, k = i.onMouseUp, T = i.onClick, M = i.selectedBoxStyle, C = i.isControlled, m = i.isDragInProgress;
    return /* @__PURE__ */ a.createElement(Yu, {
      width: l,
      height: p,
      resetOnStart: !0,
      onDragStart: this.selectionDragStart,
      onDragMove: this.selectionDragMove,
      onDragEnd: this.selectionDragEnd,
      isDragging: C ? m : void 0
    }, function(D) {
      var O = D.isDragging, _ = D.dragStart, $ = D.dragEnd, L = D.dragMove;
      return /* @__PURE__ */ a.createElement("g", null, O && /* @__PURE__ */ a.createElement("rect", {
        width: u,
        height: d,
        fill: "transparent",
        onPointerUp: C ? void 0 : $,
        onPointerMove: L,
        onPointerLeave: C ? void 0 : $,
        style: k0
      }), /* @__PURE__ */ a.createElement("rect", Da({
        x: Math.min(f.extent.x0, f.extent.x1),
        y: Math.min(f.extent.y0, f.extent.y1),
        width: l,
        height: p,
        className: "visx-brush-selection",
        onPointerDown: g ? void 0 : _,
        onPointerLeave: function(W) {
          v && v(W);
        },
        onPointerMove: function(W) {
          L(W), y && y(W);
        },
        onPointerUp: function(W) {
          C || $(W), k && k(W);
        },
        onClick: function(W) {
          T && T(W);
        },
        style: {
          pointerEvents: f.isBrushing || f.activeHandle ? "none" : "all",
          cursor: g ? void 0 : "move"
        }
      }, M)));
    });
  }, t;
}(a.Component);
Rf.propTypes = {
  width: se.number.isRequired,
  height: se.number.isRequired,
  stageWidth: se.number.isRequired,
  stageHeight: se.number.isRequired,
  updateBrush: se.func.isRequired,
  onMoveSelectionChange: se.func,
  onBrushStart: se.func,
  onBrushEnd: se.func,
  disableDraggingSelection: se.bool.isRequired,
  onMouseLeave: se.func,
  onMouseMove: se.func,
  onMouseUp: se.func,
  onClick: se.func,
  isControlled: se.bool,
  isDragInProgress: se.bool
};
Rf.defaultProps = {
  onMouseLeave: null,
  onMouseUp: null,
  onMouseMove: null,
  onClick: null
};
function Vd() {
  return Vd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Vd.apply(this, arguments);
}
function jd(e) {
  return /* @__PURE__ */ a.createElement(dr, Vd({
    className: "visx-brush-overlay",
    fill: "transparent",
    x: 0,
    y: 0
  }, e));
}
jd.propTypes = {
  width: se.number.isRequired,
  height: se.number.isRequired,
  onClick: se.func,
  onDoubleClick: se.func,
  onPointerDown: se.func,
  onPointerLeave: se.func,
  onPointerMove: se.func,
  onPointerUp: se.func
};
function Gn() {
  return Gn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Gn.apply(this, arguments);
}
function T0(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ud(e, t);
}
function Ud(e, t) {
  return Ud = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ud(e, t);
}
var Lf = /* @__PURE__ */ function(e) {
  T0(t, e);
  function t(n) {
    var i;
    i = e.call(this, n) || this, i.mouseUpTime = 0, i.mouseDownTime = 0, i.getIdleState = function() {
      var u = i.props, d = u.width, f = u.height;
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
    }, i.handleWindowPointerUp = function() {
      var u = i.props, d = u.useWindowMoveEvents, f = u.onBrushEnd, g = u.resetOnEnd, v = i.state.brushingType;
      d && v && i.updateBrush(function(y) {
        var k = y.start, T = y.end, M = y.extent;
        k.x = Math.min(M.x0, M.x1), k.y = Math.min(M.y0, M.y0), T.x = Math.max(M.x0, M.x1), T.y = Math.max(M.y0, M.y1);
        var C = Gn({}, y, {
          activeHandle: null,
          isBrushing: !1,
          brushingType: void 0
        });
        return f && f(C), g && (C = Gn({}, C, i.getIdleState())), C;
      });
    }, i.handleWindowPointerMove = function(u) {
      var d = i.props.useWindowMoveEvents, f = i.state, g = f.brushingType, v = f.isBrushing, y = f.brushPageOffset, k = f.start;
      if (!(!d || !v)) {
        var T = u.pageX - ((y == null ? void 0 : y.pageX) || 0), M = u.pageY - ((y == null ? void 0 : y.pageY) || 0);
        ["left", "right", "top", "bottom"].includes(g ?? "") && i.updateBrush(function(C) {
          var m = C.start, D = m.x, O = m.y, _ = C.end, $ = _.x, L = _.y;
          return Gn({}, C, {
            isBrushing: !0,
            extent: Gn({}, C.extent, i.getExtent({
              x: g === "left" ? Math.min(Math.max(D + T, C.bounds.x0), C.bounds.x1) : D,
              y: g === "top" ? Math.min(Math.max(O + M, C.bounds.y0), C.bounds.y1) : O
            }, {
              x: g === "right" ? Math.min(Math.max($ + T, C.bounds.x0), C.bounds.x1) : $,
              y: g === "bottom" ? Math.min(Math.max(L + M, C.bounds.y0), C.bounds.y1) : L
            }))
          });
        }), g === "move" && i.updateBrush(function(C) {
          var m = C.start, D = m.x, O = m.y, _ = C.end, $ = _.x, L = _.y, q = T > 0 ? Math.min(T, C.bounds.x1 - $) : Math.max(T, C.bounds.x0 - D), W = M > 0 ? Math.min(M, C.bounds.y1 - L) : Math.max(M, C.bounds.y0 - O);
          return Gn({}, C, {
            isBrushing: !0,
            extent: Gn({}, C.extent, {
              x0: D + q,
              y0: O + W,
              x1: $ + q,
              y1: L + W
            })
          });
        }), g === "select" && i.updateBrush(function(C) {
          var m = C.start, D = m.x, O = m.y, _ = {
            x: Math.min(Math.max(D + T, C.bounds.x0), C.bounds.x1),
            y: Math.min(Math.max(O + M, C.bounds.y0), C.bounds.y1)
          }, $ = i.getExtent(k, _), L = Gn({}, C, {
            end: _,
            extent: $
          });
          return L;
        });
      }
    }, i.getExtent = function(u, d) {
      var f = i.props, g = f.brushDirection, v = f.width, y = f.height, k = g === "vertical" ? 0 : Math.min(u.x || 0, d.x || 0), T = g === "vertical" ? v : Math.max(u.x || 0, d.x || 0), M = g === "horizontal" ? 0 : Math.min(u.y || 0, d.y || 0), C = g === "horizontal" ? y : Math.max(u.y || 0, d.y || 0);
      return {
        x0: k,
        x1: T,
        y0: M,
        y1: C
      };
    }, i.handleDragStart = function(u) {
      var d = i.props, f = d.onBrushStart, g = d.left, v = d.top, y = d.inheritedMargin, k = d.useWindowMoveEvents, T = y != null && y.left ? y.left : 0, M = y != null && y.top ? y.top : 0, C = {
        x: (u.x || 0) + u.dx - g - T,
        y: (u.y || 0) + u.dy - v - M
      }, m = Gn({}, C);
      f && f(C), i.updateBrush(function(D) {
        return Gn({}, D, {
          start: C,
          end: m,
          extent: {
            x0: -1,
            x1: -1,
            y0: -1,
            y1: -1
          },
          isBrushing: !0,
          brushingType: "select",
          brushPageOffset: k ? Af(u.event) : void 0
        });
      });
    }, i.handleBrushStart = function(u) {
      var d = i.props, f = d.onBrushStart, g = d.left, v = d.top, y = d.inheritedMargin;
      if (f) {
        var k = y != null && y.left ? y.left : 0, T = y != null && y.top ? y.top : 0, M = {
          x: (u.x || 0) + u.dx - g - k,
          y: (u.y || 0) + u.dy - v - T
        };
        f(M);
      }
    }, i.handleDragMove = function(u) {
      var d = i.props, f = d.left, g = d.top, v = d.inheritedMargin, y = d.useWindowMoveEvents;
      if (!(!u.isDragging || y)) {
        var k = (v == null ? void 0 : v.left) || 0, T = (v == null ? void 0 : v.top) || 0, M = {
          x: (u.x || 0) + u.dx - f - k,
          y: (u.y || 0) + u.dy - g - T
        };
        i.updateBrush(function(C) {
          var m = C.start, D = i.getExtent(m, M);
          return Gn({}, C, {
            end: M,
            extent: D
          });
        });
      }
    }, i.handleDragEnd = function() {
      var u = i.props, d = u.onBrushEnd, f = u.resetOnEnd, g = u.useWindowMoveEvents;
      g || i.updateBrush(function(v) {
        var y = v.extent, k = Gn({}, v, {
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
        return d && d(k), f && (k = Gn({}, k, i.getIdleState())), k;
      });
    }, i.getBrushWidth = function() {
      var u = i.state.extent, d = u.x0, f = u.x1;
      return Math.max(Math.max(d, f) - Math.min(d, f), 0);
    }, i.getBrushHeight = function() {
      var u = i.state.extent, d = u.y1, f = u.y0;
      return Math.max(Math.max(f, d) - Math.min(f, d), 0);
    }, i.handles = function() {
      var u = i.props.handleSize, d = i.state.extent, f = d.x0, g = d.x1, v = d.y0, y = d.y1, k = u / 2, T = i.getBrushWidth(), M = i.getBrushHeight();
      return {
        top: {
          x: f - k,
          y: v - k,
          height: u,
          width: T + u
        },
        bottom: {
          x: f - k,
          y: y - k,
          height: u,
          width: T + u
        },
        right: {
          x: g - k,
          y: v - k,
          height: M + u,
          width: u
        },
        left: {
          x: f - k,
          y: v - k,
          height: M + u,
          width: u
        }
      };
    }, i.corners = function() {
      var u = i.props.handleSize, d = i.state.extent, f = d.x0, g = d.x1, v = d.y0, y = d.y1, k = u / 2, T = u, M = u;
      return {
        topLeft: {
          x: Math.min(f, g) - k,
          y: Math.min(v, y) - k,
          width: T,
          height: M
        },
        topRight: {
          x: Math.max(f, g) - k,
          y: Math.min(v, y) - k,
          width: T,
          height: M
        },
        bottomLeft: {
          x: Math.min(f, g) - k,
          y: Math.max(v, y) - k,
          width: T,
          height: M
        },
        bottomRight: {
          x: Math.max(f, g) - k,
          y: Math.max(v, y) - k,
          width: T,
          height: M
        }
      };
    }, i.updateBrush = function(u) {
      var d = i.props.onChange;
      i.setState(u, function() {
        d && d(i.state);
      });
    }, i.reset = function() {
      return i.updateBrush(function() {
        return i.getIdleState();
      });
    }, i.handleBrushingTypeChange = function(u, d) {
      i.updateBrush(function(f) {
        var g = Gn({}, f, {
          brushingType: u,
          isBrushing: u !== void 0
        });
        return (d || u === void 0) && (g.brushPageOffset = d), g;
      });
    };
    var l = n.initialBrushPosition, p = l ? i.getExtent(l.start, l.end) : {
      x0: -1,
      x1: -1,
      y0: -1,
      y1: -1
    };
    return i.state = {
      start: {
        x: Math.max(0, p.x0),
        y: Math.max(0, p.y0)
      },
      end: {
        x: Math.max(0, p.x1),
        y: Math.max(0, p.y1)
      },
      extent: p,
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
  var r = t.prototype;
  return r.componentDidUpdate = function(i) {
    var l = this;
    (this.props.width !== i.width || this.props.height !== i.height) && this.setState(function(p) {
      var u = p.start, d = p.end, f = p.extent;
      if (!(f.x0 === -1 && f.x1 === -1 && f.y0 === -1 && f.y1 === -1)) {
        var g = l.props.width / i.width, v = l.props.height / i.height;
        u = {
          x: g * f.x0,
          y: v * f.y0
        }, d = {
          x: g * f.x1,
          y: v * f.y1
        }, f = l.getExtent(u, d);
      }
      return {
        start: u,
        end: d,
        extent: f,
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
    var i = this, l = this.state, p = l.start, u = l.end, d = this.props, f = d.top, g = d.left, v = d.width, y = d.height, k = d.onMouseLeave, T = d.onMouseUp, M = d.onMouseMove, C = d.onBrushEnd, m = d.onClick, D = d.resizeTriggerAreas, O = d.selectedBoxStyle, _ = d.disableDraggingSelection, $ = d.disableDraggingOverlay, L = d.clickSensitivity, q = d.useWindowMoveEvents, W = d.renderBrushHandle, Y = this.state.brushingType, J = this.handles(), le = this.corners(), U = this.getBrushWidth(), te = this.getBrushHeight(), me = new Set(D);
    return /* @__PURE__ */ a.createElement(Ke, {
      className: "visx-brush",
      top: f,
      left: g
    }, $ ? /* @__PURE__ */ a.createElement(jd, {
      width: v,
      height: y,
      onClick: function(ce) {
        var ue = i.mouseUpTime - i.mouseDownTime;
        m && ue < L && m(ce);
      },
      style: {
        cursor: "default"
      }
    }) : /* @__PURE__ */ a.createElement(Yu, {
      width: v,
      height: y,
      resetOnStart: !0,
      onDragStart: this.handleDragStart,
      onDragMove: this.handleDragMove,
      onDragEnd: this.handleDragEnd,
      isDragging: q ? Y === "select" : void 0
    }, function(K) {
      var ce = K.dragStart, ue = K.isDragging, he = K.dragMove, ae = K.dragEnd;
      return /* @__PURE__ */ a.createElement(jd, {
        width: v,
        height: y,
        onDoubleClick: function() {
          return i.reset();
        },
        onClick: function(ee) {
          var ne = i.mouseUpTime - i.mouseDownTime;
          m && ne < L && m(ee);
        },
        onPointerDown: function(ee) {
          i.mouseDownTime = Date.now(), ce(ee);
        },
        onPointerLeave: function(ee) {
          k && k(ee);
        },
        onPointerMove: function(ee) {
          !ue && M && M(ee), ue && he(ee);
        },
        onPointerUp: function(ee) {
          i.mouseUpTime = Date.now(), T && T(ee), ae(ee);
        },
        style: {
          cursor: "crosshair"
        }
      });
    }), p && u && /* @__PURE__ */ a.createElement(Rf, {
      updateBrush: this.updateBrush,
      width: U,
      height: te,
      stageWidth: v,
      stageHeight: y,
      brush: this.state,
      disableDraggingSelection: _,
      onBrushEnd: C,
      onBrushStart: this.handleBrushStart,
      onMouseLeave: k,
      onMouseMove: M,
      onMouseUp: T,
      onMoveSelectionChange: this.handleBrushingTypeChange,
      onClick: m,
      selectedBoxStyle: O,
      isControlled: q,
      isDragInProgress: q ? Y === "move" : void 0
    }), p && u && Object.keys(J).filter(function(K) {
      return me.has(K);
    }).map(function(K) {
      var ce = J[K];
      return ce && /* @__PURE__ */ a.createElement(ym, {
        key: "handle-" + K,
        type: K,
        handle: ce,
        stageWidth: v,
        stageHeight: y,
        updateBrush: i.updateBrush,
        brush: i.state,
        onBrushStart: i.handleBrushStart,
        onBrushEnd: C,
        isControlled: q,
        isDragInProgress: q ? Y === K : void 0,
        onBrushHandleChange: i.handleBrushingTypeChange,
        renderBrushHandle: W
      });
    }), p && u && Object.keys(le).filter(function(K) {
      return me.has(K);
    }).map(function(K) {
      var ce = le[K];
      return ce && /* @__PURE__ */ a.createElement(Pf, {
        key: "corner-" + K,
        type: K,
        brush: i.state,
        updateBrush: i.updateBrush,
        stageWidth: v,
        stageHeight: y,
        corner: ce,
        onBrushEnd: C
      });
    }));
  }, t;
}(a.Component);
Lf.propTypes = {
  brushDirection: se.oneOf(["horizontal", "vertical", "both"]),
  width: se.number.isRequired,
  height: se.number.isRequired,
  left: se.number.isRequired,
  top: se.number.isRequired,
  onChange: se.func,
  handleSize: se.number,
  resizeTriggerAreas: se.array,
  onBrushStart: se.func,
  onBrushEnd: se.func,
  onMouseLeave: se.func,
  onMouseUp: se.func,
  onMouseMove: se.func,
  onClick: se.func,
  clickSensitivity: se.number,
  disableDraggingSelection: se.bool,
  disableDraggingOverlay: se.bool,
  resetOnEnd: se.bool,
  useWindowMoveEvents: se.bool,
  renderBrushHandle: se.func
};
Lf.defaultProps = {
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
function w0(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Kd(e, t);
}
function Kd(e, t) {
  return Kd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Kd(e, t);
}
var Kh = 2, Yh = "steelblue", Df = /* @__PURE__ */ function(e) {
  w0(t, e);
  function t() {
    for (var n, i = arguments.length, l = new Array(i), p = 0; p < i; p++)
      l[p] = arguments[p];
    return n = e.call.apply(e, [this].concat(l)) || this, n.handleChange = function(u) {
      var d = n.props.onChange;
      if (d) {
        var f = u.extent.x0;
        if (typeof f > "u" || f < 0) {
          d(null);
          return;
        }
        var g = n.convertRangeToDomain(u);
        d(g);
      }
    }, n.handleBrushStart = function(u) {
      var d = n.props.onBrushStart;
      if (d) {
        var f = u.x, g = u.y, v = n.props, y = v.xScale, k = v.yScale, T = Fu(y, f), M = Fu(k, g);
        d({
          x: "invert" in y && typeof y.invert < "u" ? T : y.domain()[T],
          y: "invert" in k && typeof k.invert < "u" ? M : k.domain()[M]
        });
      }
    }, n.handleBrushEnd = function(u) {
      var d = n.props.onBrushEnd;
      if (d) {
        var f = u.extent.x0;
        if (typeof f > "u" || f < 0) {
          d(null);
          return;
        }
        var g = n.convertRangeToDomain(u);
        d(g);
      }
    }, n;
  }
  var r = t.prototype;
  return r.convertRangeToDomain = function(i) {
    var l = this.props, p = l.xScale, u = l.yScale, d = i.extent, f = d.x0, g = d.x1, v = d.y0, y = d.y1, k = Uh(p, f || 0, g || 0, Kh), T = Uh(u, v || 0, y || 0, Kh), M = {
      x0: k.start || 0,
      x1: k.end || 0,
      xValues: k.values,
      y0: T.start || 0,
      y1: T.end || 0,
      yValues: T.values
    };
    return M;
  }, r.render = function() {
    var i = this.props, l = i.xScale, p = i.yScale, u = i.height, d = i.width, f = i.margin, g = i.brushDirection, v = i.initialBrushPosition, y = i.innerRef, k = i.resizeTriggerAreas, T = i.brushRegion, M = i.yAxisOrientation, C = i.xAxisOrientation, m = i.selectedBoxStyle, D = i.disableDraggingSelection, O = i.disableDraggingOverlay, _ = i.resetOnEnd, $ = i.onMouseLeave, L = i.onMouseMove, q = i.onClick, W = i.handleSize, Y = i.useWindowMoveEvents, J = i.renderBrushHandle;
    if (!l || !p)
      return null;
    var le, U, te, me, K = f != null && f.left ? f.left : 0, ce = f != null && f.top ? f.top : 0, ue = f != null && f.right ? f.right : 0, he = f != null && f.bottom ? f.bottom : 0;
    return T === "chart" ? (te = 0, me = 0, le = d, U = u) : T === "yAxis" ? (me = 0, U = u, M === "right" ? (te = d, le = ue) : (te = -K, le = K)) : (te = 0, le = d, C === "bottom" ? (me = u, U = he) : (me = -ce, U = ce)), /* @__PURE__ */ a.createElement(Lf, {
      width: le,
      height: U,
      left: te,
      top: me,
      brushDirection: g,
      disableDraggingSelection: D,
      disableDraggingOverlay: O,
      handleSize: W,
      inheritedMargin: f,
      initialBrushPosition: v,
      ref: y,
      resetOnEnd: _,
      resizeTriggerAreas: k,
      selectedBoxStyle: m,
      onBrushEnd: this.handleBrushEnd,
      onBrushStart: this.handleBrushStart,
      onChange: this.handleChange,
      onClick: q,
      onMouseLeave: $,
      onMouseMove: L,
      useWindowMoveEvents: Y,
      renderBrushHandle: J
    });
  }, t;
}(fe.Component);
Df.propTypes = {
  height: se.number,
  width: se.number,
  onChange: se.func,
  onBrushEnd: se.func,
  brushDirection: se.oneOf(["vertical", "horizontal", "both"]),
  resizeTriggerAreas: se.array,
  brushRegion: se.oneOf(["xAxis", "yAxis", "chart"]),
  yAxisOrientation: se.oneOf(["left", "right"]),
  xAxisOrientation: se.oneOf(["top", "bottom"]),
  disableDraggingSelection: se.bool,
  disableDraggingOverlay: se.bool,
  resetOnEnd: se.bool,
  handleSize: se.number,
  useWindowMoveEvents: se.bool,
  renderBrushHandle: se.func
};
Df.defaultProps = {
  xScale: null,
  yScale: null,
  onChange: null,
  height: 0,
  width: 0,
  selectedBoxStyle: {
    fill: Yh,
    fillOpacity: 0.2,
    stroke: Yh,
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
const C0 = Df, A0 = (e) => {
  const { transformedData: t, config: r, parseDate: n, formatDate: i, updateConfig: l } = fe.useContext(lt), { fontSize: p } = Gl(), [u, d] = fe.useState([...t]), f = fe.useRef(null), g = 15, [v, y] = fe.useState({
    startPosition: 0,
    endPosition: 0,
    startValue: "",
    endValue: ""
  }), k = {
    start: { x: 0 },
    end: { x: e.xMax }
  }, T = {
    fill: "#ddd",
    stroke: "blue",
    fillOpacity: 0.8,
    strokeOpacity: 0,
    rx: g
  }, M = (m) => {
    var W;
    if (!m)
      return;
    const { xValues: D } = m, O = (W = r.xAxis) == null ? void 0 : W.dataKey, _ = t.filter((Y) => D.includes(Y[O])), $ = D.slice().reverse().find((Y) => Y !== void 0), L = D.find((Y) => Y !== void 0), q = (Y) => yn(r.runtime.xAxis) ? i(n(Y)) : Y;
    y((Y) => {
      var J, le;
      return {
        ...Y,
        startPosition: (J = f.current) == null ? void 0 : J.state.start.x,
        endPosition: (le = f.current) == null ? void 0 : le.state.end.x,
        endValue: q($),
        startValue: q(L)
      };
    }), d(_);
  };
  fe.useEffect(() => {
    l({
      ...r,
      brush: {
        ...r.brush,
        data: u
      }
    });
  }, [u]), fe.useEffect(() => {
    r.brush.active || d(t);
  }, [r.brush.active]);
  const C = () => {
    const m = Number(r.xAxis.tickRotation) > 0 ? Number(r.xAxis.tickRotation) : 0;
    let D = 0;
    const O = 20;
    return r.xAxis.label || (!r.isResponsiveTicks && m && (D = Number(m + r.xAxis.tickWidthMax) / 1.6), !r.isResponsiveTicks && !m && (D = Number(r.xAxis.labelOffset) - O), r.isResponsiveTicks && r.dynamicMarginTop && (D = Number(r.xAxis.labelOffset + r.xAxis.tickWidthMax / 1.6)), r.isResponsiveTicks && !r.dynamicMarginTop && (D = Number(r.xAxis.labelOffset - O))), r.xAxis.label && (!r.isResponsiveTicks && m && (D = Number(r.xAxis.tickWidthMax + m)), !r.isResponsiveTicks && !m && (D = r.xAxis.labelOffset + O), r.isResponsiveTicks && !m && (D = Number(r.dynamicMarginTop ? r.dynamicMarginTop : r.xAxis.labelOffset) + O)), D;
  };
  if (["Line", "Bar", "Area Chart", "Combo"].includes(r.visualizationType))
    return /* @__PURE__ */ a.createElement(Ke, { display: r.brush.active ? "block" : "none", top: Number(e.yMax) + C(), left: Number(r.runtime.yAxis.size), pointerEvents: "fill" }, /* @__PURE__ */ a.createElement("rect", { fill: "#eee", width: e.xMax, height: r.brush.height, rx: g }), /* @__PURE__ */ a.createElement(
      C0,
      {
        renderBrushHandle: (m) => {
          var D;
          return /* @__PURE__ */ a.createElement(P0, { textProps: v, fontSize: p[r.fontSize], ...m, isBrushing: (D = f.current) == null ? void 0 : D.state.isBrushing });
        },
        innerRef: f,
        useWindowMoveEvents: !0,
        selectedBoxStyle: T,
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
}, P0 = (e) => {
  const { x: t, isBrushActive: r, isBrushing: n, className: i, textProps: l } = e, p = 8;
  if (!r)
    return null;
  const u = i.includes("left"), d = u ? "scale(-1, 1)" : "translate(0,0)", f = u ? "end" : "start";
  return /* @__PURE__ */ a.createElement(Ke, { left: t + p / 2, top: -2 }, /* @__PURE__ */ a.createElement(it, { pointerEvents: "visiblePainted", dominantBaseline: "hanging", x: 0, verticalAnchor: "start", textAnchor: f, fontSize: e.fontSize / 1.4, dy: 10, y: 15 }, u ? l.startValue : l.endValue), /* @__PURE__ */ a.createElement("path", { cursor: "ew-resize", d: "M0.5,10A6,6 0 0 1 6.5,16V14A6,6 0 0 1 0.5,20ZM2.5,18V12M4.5,18V12", fill: n ? "#297EF1" : "#666", strokeWidth: "1", transform: d }));
}, Wr = (e) => {
  var fn, xt, Bt, pn, En;
  const { transformedData: t, dimensions: r, config: n, parseDate: i, formatDate: l, currentViewport: p, formatNumber: u, handleChartAriaLabels: d, updateConfig: f, handleLineType: g, getTextWidth: v } = fe.useContext(lt), { visualizationType: y, visualizationSubType: k, orientation: T, xAxis: M, yAxis: C, runtime: m, debugSvg: D } = n;
  let [O] = r;
  n && n.legend && !n.legend.hide && n.legend.position !== "bottom" && ["lg", "md"].includes(p) && (O = O * 0.73);
  const { horizontal: _ } = n.heights, $ = T === "horizontal" || n.visualizationType === "Forest Plot", L = !0;
  let q = n.aspectRatio ? O * n.aspectRatio : n.visualizationType === "Forest Plot" ? n.heights.vertical : n.heights[T];
  const W = O - m.yAxis.size - (y === "Combo" ? n.yAxis.rightAxisSize : 0);
  let Y = q - (T === "horizontal" ? 0 : m.xAxis.size);
  n.visualizationType === "Forest Plot" && (q = q + n.data.length * n.forestPlot.rowHeight, Y = Y + n.data.length * n.forestPlot.rowHeight, O = r[0]), (fn = n.brush) != null && fn.active && (q = q + ((xt = n.brush) == null ? void 0 : xt.height));
  const { minValue: J, maxValue: le, existPositiveValue: U, isAllLine: te } = Ku(n, t), { visSupportsReactTooltip: me } = Ql(), { hasTopAxis: K } = r0(n), [ce, ue] = fe.useState(!1), [he, ae] = fe.useState({ x: 0, y: 0 }), V = fe.useRef(), ee = fe.useRef(), ne = pf(V, {
    freezeOnceVisible: !1
  }), ke = (Ee) => yn(n.runtime.xAxis) ? i(Ee[n.runtime.originalXAxis.dataKey]).getTime() : Ee[n.runtime.originalXAxis.dataKey], xe = (Ee, Fe) => Ee[Fe], we = n.brush.active && ((Bt = n.brush.data) != null && Bt.length) ? n.brush.data.map((Ee) => ke(Ee)) : t.map((Ee) => ke(Ee)), ie = n.orientation === "horizontal" || n.visualizationType === "Forest Plot" ? "yAxis" : "xAxis", Le = { data: t, config: n, minValue: J, maxValue: le, isAllLine: te, existPositiveValue: U, xAxisDataMapped: we, xMax: W, yMax: Y }, { min: Me, max: We, leftMax: qe, rightMax: Ge } = pm(Le), { yScaleRight: De, hasRightAxis: _e } = vf({ config: n, yMax: Y, data: t, updateConfig: f }), { xScale: $e, yScale: Ze, seriesScale: Et, g1xScale: vt, g2xScale: Ct, xScaleNoPadding: Je, xScaleBrush: Vt } = Qb({ ...Le, min: Me, max: We, leftMax: qe, rightMax: Ge, dimensions: r }), [qt, zt] = fe.useState(null);
  fe.useEffect(() => {
    var Ee;
    zt((Ee = ee == null ? void 0 : ee.current) == null ? void 0 : Ee.getBoundingClientRect());
  }, [ee, n.legend]);
  const bt = (Ee, Fe) => {
    if (n.useLogScale && Ee === 0.1 && (Ee = 0), !(n.data && !n.data[Fe] && y === "Forest Plot"))
      return n.visualizationType === "Forest Plot" ? n.data[Fe][n.xAxis.dataKey] : yn(m.yAxis) ? l(i(Ee)) : T === "vertical" ? u(Ee, "left", L) : Ee;
  }, St = (Ee) => (n.useLogScale && Ee === 0.1 && (Ee = 0), yn(m.xAxis) && n.visualizationType !== "Forest Plot" ? l(Ee) : T === "horizontal" && n.visualizationType !== "Forest Plot" ? u(Ee, "left", L) : n.xAxis.type === "continuous" && n.visualizationType !== "Forest Plot" ? u(Ee, "bottom", L) : n.visualizationType === "Forest Plot" ? u(Ee, "left", n.dataFormat.abbreviated, n.runtime.xAxis.prefix, n.runtime.xAxis.suffix, Number(n.dataFormat.roundTo)) : Ee), Jt = (Ee) => {
    const { numTicks: Fe } = m[Ee];
    let ot;
    return Ee === "yAxis" && (ot = $ && !Fe ? t.length : $ && Fe ? Fe : !$ && !Fe ? void 0 : !$ && Fe && Fe, ot === void 0 && !n.dataFormat.roundTo && (Number(We) <= 3 ? ot = 2 : ot = 4), Number(ot) > Number(We) && (ot = Number(Me) < 0 ? Math.round(We) * 2 : Math.round(We))), Ee === "xAxis" && (ot = $ && !Fe ? void 0 : $ && Fe ? Fe : !$ && !Fe ? void 0 : !$ && Fe && Fe, $ && ot === void 0 && !n.dataFormat.roundTo && (We <= 3 ? ot = 2 : ot = 4), n.visualizationType === "Forest Plot" && (ot = n.yAxis.numTicks !== "" ? n.yAxis.numTicks : 4)), ot;
  }, { tooltipData: ft, showTooltip: Ot, hideTooltip: wt, tooltipOpen: un, tooltipLeft: Mn, tooltipTop: _n } = em(), {
    handleTooltipMouseOver: jt,
    handleTooltipClick: Gt,
    handleTooltipMouseOff: Mt,
    tooltipStyles: cn,
    TooltipListItem: dn,
    getXValueFromCoordinateDate: Ae,
    getXValueFromCoordinate: mt
  } = im({
    xScale: $e,
    yScale: Ze,
    showTooltip: Ot,
    hideTooltip: wt
  });
  fe.useEffect(() => {
    document.querySelector(".isEditor") && ue((Fe) => !0);
  }), fe.useEffect(() => {
    (ne == null ? void 0 : ne.isIntersecting) === !0 && n.animate && setTimeout(() => {
      ue((Ee) => !0);
    }, 500);
  }, [ne == null ? void 0 : ne.isIntersecting, n.animate]);
  const Ut = () => {
    const { visualizationType: Ee } = n;
    return Ee === "Combo" && m.forecastingSeriesKeys > 0 || Ee === "Area Chart" || Ee === "Line" || Ee === "Bar";
  }, _t = Number(T === "horizontal" ? n.xAxis.size : n.yAxis.size), vn = () => n.visualizationType === "Forest Plot" ? n.data.length : Jt("yAxis"), st = (Ee) => {
    const Fe = Ee.currentTarget.getBoundingClientRect(), ot = Ee.clientX - Fe.left, Ve = Ee.clientY - Fe.top;
    ae({
      x: ot,
      y: Ve
    });
  };
  return isNaN(O) ? /* @__PURE__ */ a.createElement(a.Fragment, null) : /* @__PURE__ */ a.createElement(Dr, { component: "LinearChart" }, /* @__PURE__ */ a.createElement("div", { style: { width: `${O}px`, height: `${q}px`, overflow: "visible" }, className: "tooltip-boundary" }, /* @__PURE__ */ a.createElement(
    "svg",
    {
      onMouseMove: st,
      width: "100%",
      height: "100%",
      className: `linear ${n.animate ? "animated" : ""} ${ce && n.animate ? "animate" : ""} ${D && "debug"}`,
      role: "img",
      "aria-label": d(n),
      ref: ee,
      style: { overflow: "visible" }
    },
    /* @__PURE__ */ a.createElement(dr, { width: O, height: q, fill: "transparent" }),
    " ",
    !["Spark Line", "Forest Plot"].includes(y) && /* @__PURE__ */ a.createElement(Eb, { scale: Ze, tickLength: n.useLogScale ? 6 : 8, left: Number(m.yAxis.size) - n.yAxis.axisPadding, label: ((pn = m.yAxis.yAxis) == null ? void 0 : pn.label) || m.yAxis.label, stroke: "#333", tickFormat: (Ee, Fe) => bt(Ee, Fe), numTicks: vn() }, (Ee) => {
      const Fe = n.orientation === "horizontal" ? (Ee.axisToPoint.y - Ee.axisFromPoint.y) / 2 : (Ee.axisFromPoint.y - Ee.axisToPoint.y) / 2, ot = Y / Ee.ticks.length / 2 - Y / Ee.ticks.length * (1 - n.barThickness) + 5;
      return /* @__PURE__ */ a.createElement(Ke, { className: "left-axis" }, Ee.ticks.map((Ve, en) => {
        const ut = Ee.ticks[0].to.y, xn = 15, Nn = String(Ve.value).startsWith("1") || Ve.value === 0.1 ? "block" : "none", j = Nn === "block" ? 7 : 0, Pe = { x: Ve.to.x - j, y: Ve.to.y };
        return /* @__PURE__ */ a.createElement(Ke, { key: `vx-tick-${Ve.value}-${en}`, className: "vx-axis-tick" }, !m.yAxis.hideTicks && /* @__PURE__ */ a.createElement(Yt, { key: `${Ve.value}--hide-hideTicks`, from: Ve.from, to: n.useLogScale ? Pe : Ve.to, stroke: n.yAxis.tickColor, display: T === "horizontal" ? "none" : "block" }), m.yAxis.gridLines ? /* @__PURE__ */ a.createElement(Yt, { key: `${Ve.value}--hide-hideGridLines`, display: (n.useLogScale && Nn).toString(), from: { x: Ve.from.x + W, y: Ve.from.y }, to: Ve.from, stroke: "rgba(0,0,0,0.3)" }) : "", T === "horizontal" && k !== "stacked" && n.yAxis.labelPlacement === "On Date/Category Axis" && !n.yAxis.hideLabel && /* @__PURE__ */ a.createElement(
          it,
          {
            transform: `translate(${Ve.to.x - 5}, ${n.isLollipopChart ? Ve.to.y - ut : Ve.to.y - ut + (Number(n.barHeight * n.series.length) - xn) / 2}) rotate(-${n.runtime.horizontal && n.runtime.yAxis.tickRotation || 0})`,
            verticalAnchor: "start",
            textAnchor: "end"
          },
          Ve.formattedValue
        ), T === "horizontal" && k === "stacked" && n.yAxis.labelPlacement === "On Date/Category Axis" && !n.yAxis.hideLabel && /* @__PURE__ */ a.createElement(it, { transform: `translate(${Ve.to.x - 5}, ${Ve.to.y - ut + (Number(n.barHeight) - xn) / 2}) rotate(-${m.horizontal ? m.yAxis.tickRotation : 0})`, verticalAnchor: "start", textAnchor: "end" }, Ve.formattedValue), T === "horizontal" && y === "Paired Bar" && !n.yAxis.hideLabel && /* @__PURE__ */ a.createElement(it, { transform: `translate(${Ve.to.x - 5}, ${Ve.to.y - ut + Number(n.barHeight) / 2}) rotate(-${m.horizontal ? m.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, Ve.formattedValue), T === "horizontal" && y === "Deviation Bar" && !n.yAxis.hideLabel && /* @__PURE__ */ a.createElement(it, { transform: `translate(${Ve.to.x - 5}, ${n.isLollipopChart ? Ve.to.y - ut + 2 : Ve.to.y - ut + Number(n.barHeight) / 2}) rotate(-${m.horizontal ? m.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, Ve.formattedValue), T === "vertical" && y !== "Paired Bar" && !n.yAxis.hideLabel && /* @__PURE__ */ a.createElement(
          it,
          {
            display: n.useLogScale ? Nn : "block",
            dx: n.useLogScale ? -6 : 0,
            x: n.runtime.horizontal ? Ve.from.x + 2 : Ve.to.x,
            y: Ve.to.y + (n.runtime.horizontal ? ot : 0),
            angle: -Number(n.yAxis.tickRotation) || 0,
            verticalAnchor: n.runtime.horizontal ? "start" : "middle",
            textAnchor: n.runtime.horizontal ? "start" : "end",
            fill: n.yAxis.tickLabelColor
          },
          Ve.formattedValue
        ));
      }), !n.yAxis.hideAxis && /* @__PURE__ */ a.createElement(Yt, { from: Ee.axisFromPoint, to: m.horizontal ? { x: 0, y: n.visualizationType === "Forest Plot" ? q : Number(_) } : Ee.axisToPoint, stroke: "#000" }), Ze.domain()[0] < 0 && /* @__PURE__ */ a.createElement(Yt, { from: { x: Ee.axisFromPoint.x, y: Ze(0) }, to: { x: W, y: Ze(0) }, stroke: "#333" }), y === "Bar" && T === "horizontal" && $e.domain()[0] < 0 && /* @__PURE__ */ a.createElement(Yt, { from: { x: $e(0), y: 0 }, to: { x: $e(0), y: Y }, stroke: "#333", strokeWidth: 2 }), /* @__PURE__ */ a.createElement(it, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${-1 * m.yAxis.size}, ${Fe}) rotate(-90)`, fontWeight: "bold", fill: n.yAxis.labelColor }, Ee.label));
    }),
    _e && /* @__PURE__ */ a.createElement(Cb, { scale: De, left: Number(O - n.yAxis.rightAxisSize), label: n.yAxis.rightLabel, tickFormat: (Ee) => u(Ee, "right"), numTicks: m.yAxis.rightNumTicks || void 0, labelOffset: 45 }, (Ee) => {
      const Fe = n.orientation === "horizontal" ? (Ee.axisToPoint.y - Ee.axisFromPoint.y) / 2 : (Ee.axisFromPoint.y - Ee.axisToPoint.y) / 2, ot = Y / Ee.ticks.length / 2 - Y / Ee.ticks.length * (1 - n.barThickness) + 5;
      return /* @__PURE__ */ a.createElement(Ke, { className: "right-axis" }, Ee.ticks.map((Ve, en) => /* @__PURE__ */ a.createElement(Ke, { key: `vx-tick-${Ve.value}-${en}`, className: "vx-axis-tick" }, !m.yAxis.rightHideTicks && /* @__PURE__ */ a.createElement(Yt, { from: Ve.from, to: Ve.to, display: m.horizontal ? "none" : "block", stroke: n.yAxis.rightAxisTickColor }), m.yAxis.rightGridLines ? /* @__PURE__ */ a.createElement(Yt, { from: { x: Ve.from.x + W, y: Ve.from.y }, to: Ve.from, stroke: "rgba(0,0,0,0.3)" }) : "", !n.yAxis.rightHideLabel && /* @__PURE__ */ a.createElement(it, { x: Ve.to.x, y: Ve.to.y + (m.horizontal ? ot : 0), verticalAnchor: m.horizontal ? "start" : "middle", textAnchor: "start", fill: n.yAxis.rightAxisTickLabelColor }, Ve.formattedValue))), !n.yAxis.rightHideAxis && /* @__PURE__ */ a.createElement(Yt, { from: Ee.axisFromPoint, to: Ee.axisToPoint, stroke: "#333" }), /* @__PURE__ */ a.createElement(it, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${n.yAxis.rightLabelOffsetSize ? n.yAxis.rightLabelOffsetSize : 0}, ${Fe}) rotate(-90)`, fontWeight: "bold", fill: n.yAxis.rightAxisLabelColor }, Ee.label));
    }),
    K && n.topAxis.hasLine && /* @__PURE__ */ a.createElement(
      Lb,
      {
        stroke: "#333",
        left: Number(m.yAxis.size),
        scale: $e,
        hideTicks: !0,
        hideZero: !0,
        tickLabelProps: () => ({
          fill: "transparent"
        })
      }
    ),
    y !== "Paired Bar" && y !== "Spark Line" && /* @__PURE__ */ a.createElement(
      lu,
      {
        top: m.horizontal && n.visualizationType !== "Forest Plot" ? Number(_) + Number(n.xAxis.axisPadding) : n.visualizationType === "Forest Plot" ? Y + Number(n.xAxis.axisPadding) : Y,
        left: n.visualizationType !== "Forest Plot" ? Number(m.yAxis.size) : 0,
        label: m.xAxis.label,
        tickFormat: St,
        scale: $e,
        stroke: "#333",
        numTicks: Jt("xAxis"),
        tickStroke: "#333",
        tickValues: n.xAxis.manual ? Jb(we, $e, n.xAxis.type === "date-time" ? Jt("xAxis") : n.xAxis.manualStep) : void 0
      },
      (Ee) => {
        const Fe = n.visualizationType !== "Forest Plot" ? (Ee.axisToPoint.x - Ee.axisFromPoint.x) / 2 : r[0] / 2, ot = (Qe) => /\s/.test(Qe), Ve = Ee.ticks.some((Qe) => ot(Qe.value)), en = { small: 16, medium: 18, large: 20 }, ut = 8, xn = Math.max(...Ee.ticks.map((Qe) => v(Qe.formattedValue, `normal ${en[n.fontSize]}px sans-serif`))), Nn = Ve ? 180 : 100, j = Ee.ticks.map((Qe) => v(Qe.formattedValue, `normal ${en[n.fontSize]}px sans-serif`)), Pe = j.reduce((Qe, ze) => Qe + ze, Nn), Ie = (W - Pe) / (Ee.ticks.length - 1);
        let Oe = [0];
        for (let Qe = 1; Qe < j.length; Qe++)
          Oe[Qe] = Oe[Qe - 1] + j[Qe - 1] + Ie;
        let nt = !1;
        j.forEach((Qe, ze) => {
          if (Oe[ze] + j[ze] > Oe[ze + 1]) {
            nt = !0;
            return;
          }
        });
        const Ye = nt && n.isResponsiveTicks ? xn + ut + 20 : 0, rt = Number(n.xAxis.tickRotation) > 0 ? Number(n.xAxis.tickRotation) : 0;
        return n.dynamicMarginTop = Ye, n.xAxis.tickWidthMax = xn, /* @__PURE__ */ a.createElement(Ke, { className: "bottom-axis", width: r[0] }, Ee.ticks.map((Qe, ze, Nt) => {
          const $t = String(Qe.value).startsWith("1") || Qe.value === 0.1 ? "block" : "none", Zt = $t === "block" ? 16 : ut, It = { x: Qe.to.x, y: Zt };
          let Lt = v(Qe.formattedValue, `normal ${en[n.fontSize]}px sans-serif`), kt = 100 / Nt.length;
          n.yAxis.tickRotation = n.isResponsiveTicks && n.orientation === "horizontal" ? 0 : n.yAxis.tickRotation, n.xAxis.tickRotation = n.isResponsiveTicks && n.orientation === "vertical" ? 0 : n.xAxis.tickRotation;
          const Tt = n.isResponsiveTicks && nt ? -Number(n.xAxis.maxTickRotation) || -90 : -Number(n.runtime.xAxis.tickRotation);
          return /* @__PURE__ */ a.createElement(Ke, { key: `vx-tick-${Qe.value}-${ze}`, className: "vx-axis-tick" }, !n.xAxis.hideTicks && /* @__PURE__ */ a.createElement(Yt, { from: Qe.from, to: T === "horizontal" && n.useLogScale ? It : Qe.to, stroke: n.xAxis.tickColor, strokeWidth: $t === "block" && n.useLogScale ? 1.3 : 1 }), !n.xAxis.hideLabel && /* @__PURE__ */ a.createElement(
            it,
            {
              dy: n.orientation === "horizontal" && n.useLogScale ? 8 : 0,
              display: n.orientation === "horizontal" && n.useLogScale ? $t : "block",
              x: Qe.to.x,
              y: Qe.to.y,
              angle: Tt,
              verticalAnchor: Tt < -50 ? "middle" : "start",
              textAnchor: Tt ? "end" : "middle",
              width: nt && !n.isResponsiveTicks && !Number(n[ie].tickRotation) ? kt : Lt,
              fill: n.xAxis.tickLabelColor
            },
            Qe.formattedValue
          ));
        }), !n.xAxis.hideAxis && /* @__PURE__ */ a.createElement(Yt, { from: Ee.axisFromPoint, to: Ee.axisToPoint, stroke: "#333" }), /* @__PURE__ */ a.createElement(
          it,
          {
            x: Fe,
            y: n.visualizationType === "Forest Plot" ? n.xAxis.tickWidthMax + 40 : n.orientation === "horizontal" ? Ye || n.xAxis.labelOffset : n.isResponsiveTicks && Ye && !$ ? Ye : Number(rt) && !n.isResponsiveTicks && !$ ? Number(rt + xn / 1.3) : Number(n.xAxis.labelOffset),
            textAnchor: "middle",
            verticalAnchor: "start",
            fontWeight: "bold",
            fill: n.xAxis.labelColor
          },
          Ee.label
        ));
      }
    ),
    y === "Paired Bar" && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(lu, { top: Y, left: Number(m.yAxis.size), label: m.xAxis.label, tickFormat: yn(m.xAxis) ? l : u, scale: vt, stroke: "#333", tickStroke: "#333", numTicks: m.xAxis.numTicks || void 0 }, (Ee) => /* @__PURE__ */ a.createElement(Ke, { className: "bottom-axis" }, Ee.ticks.map((Fe, ot) => {
      const Ve = Fe.index !== 0 ? n.yAxis.tickRotation : 0, en = Fe.index !== 0 && n.yAxis.tickRotation && n.yAxis.tickRotation > 0 ? "end" : "middle";
      return /* @__PURE__ */ a.createElement(Ke, { key: `vx-tick-${Fe.value}-${ot}`, className: "vx-axis-tick" }, !m.yAxis.hideTicks && /* @__PURE__ */ a.createElement(Yt, { from: Fe.from, to: Fe.to, stroke: "#333" }), !m.yAxis.hideLabel && /* @__PURE__ */ a.createElement(it, { x: Fe.to.x, y: Fe.to.y, angle: -Ve, verticalAnchor: "start", textAnchor: en }, u(Fe.value, "left")));
    }), !m.yAxis.hideAxis && /* @__PURE__ */ a.createElement(Yt, { from: Ee.axisFromPoint, to: Ee.axisToPoint, stroke: "#333" }))), /* @__PURE__ */ a.createElement(
      lu,
      {
        top: Y,
        left: Number(m.yAxis.size),
        label: m.xAxis.label,
        tickFormat: yn(m.xAxis) ? l : m.xAxis.dataKey !== "Year" ? u : (Ee) => Ee,
        scale: Ct,
        stroke: "#333",
        tickStroke: "#333",
        numTicks: m.xAxis.numTicks || void 0
      },
      (Ee) => /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(Ke, { className: "bottom-axis" }, Ee.ticks.map((Fe, ot) => {
        const Ve = Fe.index !== 0 ? n.yAxis.tickRotation : 0, en = Fe.index !== 0 && n.yAxis.tickRotation && n.yAxis.tickRotation > 0 ? "end" : "middle";
        return /* @__PURE__ */ a.createElement(Ke, { key: `vx-tick-${Fe.value}-${ot}`, className: "vx-axis-tick" }, !m.yAxis.hideTicks && /* @__PURE__ */ a.createElement(Yt, { from: Fe.from, to: Fe.to, stroke: "#333" }), !m.yAxis.hideLabel && /* @__PURE__ */ a.createElement(it, { x: Fe.to.x, y: Fe.to.y, angle: -Ve, verticalAnchor: "start", textAnchor: en }, u(Fe.value, "left")));
      }), !m.yAxis.hideAxis && /* @__PURE__ */ a.createElement(Yt, { from: Ee.axisFromPoint, to: Ee.axisToPoint, stroke: "#333" })), /* @__PURE__ */ a.createElement(Ke, null, /* @__PURE__ */ a.createElement(it, { x: W / 2, y: n.xAxis.labelOffset, stroke: "#333", textAnchor: "middle", verticalAnchor: "start" }, m.xAxis.label)))
    )),
    y === "Deviation Bar" && ((En = n.series) == null ? void 0 : En.length) === 1 && /* @__PURE__ */ a.createElement(Ub, { animatedChart: ce, xScale: $e, yScale: Ze, width: W, height: Y }),
    y === "Paired Bar" && /* @__PURE__ */ a.createElement(Zb, { originalWidth: O, width: W, height: Y }),
    y === "Scatter Plot" && /* @__PURE__ */ a.createElement(
      jb,
      {
        xScale: $e,
        yScale: Ze,
        getXAxisData: ke,
        getYAxisData: xe,
        xMax: W,
        yMax: Y,
        handleTooltipMouseOver: jt,
        handleTooltipMouseOff: Mt,
        handleTooltipClick: Gt,
        tooltipData: ft,
        showTooltip: Ot
      }
    ),
    y === "Box Plot" && /* @__PURE__ */ a.createElement(Vb, { xScale: $e, yScale: Ze }),
    (y === "Area Chart" && n.visualizationSubType === "regular" || y === "Combo") && /* @__PURE__ */ a.createElement(Nb, { xScale: $e, yScale: Ze, yMax: Y, xMax: W, chartRef: ee, width: W, height: Y, handleTooltipMouseOver: jt, handleTooltipMouseOff: Mt, tooltipData: ft, showTooltip: Ot }),
    (y === "Area Chart" && n.visualizationSubType === "stacked" || y === "Combo") && /* @__PURE__ */ a.createElement(zb, { xScale: $e, yScale: Ze, yMax: Y, xMax: W, chartRef: ee, width: W, height: Y, handleTooltipMouseOver: jt, handleTooltipMouseOff: Mt, tooltipData: ft, showTooltip: Ot }),
    (y === "Bar" || y === "Combo") && /* @__PURE__ */ a.createElement(
      Wb,
      {
        xScale: $e,
        yScale: Ze,
        seriesScale: Et,
        xMax: W,
        yMax: Y,
        getXAxisData: ke,
        getYAxisData: xe,
        animatedChart: ce,
        visible: ce,
        handleTooltipMouseOver: jt,
        handleTooltipMouseOff: Mt,
        handleTooltipClick: Gt,
        tooltipData: ft,
        showTooltip: Ot,
        chartRef: ee
      }
    ),
    (y === "Line" || y === "Combo") && /* @__PURE__ */ a.createElement(
      $h,
      {
        xScale: $e,
        yScale: Ze,
        getXAxisData: ke,
        getYAxisData: xe,
        xMax: W,
        yMax: Y,
        seriesStyle: n.series,
        handleTooltipMouseOver: jt,
        handleTooltipMouseOff: Mt,
        handleTooltipClick: Gt,
        tooltipData: ft,
        showTooltip: Ot,
        chartRef: ee
      }
    ),
    (y === "Forecasting" || y === "Combo") && /* @__PURE__ */ a.createElement(
      Yb,
      {
        showTooltip: Ot,
        tooltipData: ft,
        xScale: $e,
        yScale: Ze,
        width: W,
        le: !0,
        height: Y,
        xScaleNoPadding: Je,
        chartRef: ee,
        getXValueFromCoordinate: mt,
        handleTooltipMouseOver: jt,
        handleTooltipMouseOff: Mt,
        isBrush: !1
      }
    ),
    n.yAxis.anchors && n.yAxis.anchors.map((Ee) => /* @__PURE__ */ a.createElement(Yt, { strokeDasharray: g(Ee.lineStyle), stroke: "rgba(0,0,0,1)", className: "customAnchor", from: { x: 0 + n.yAxis.size, y: Ze(Ee.value) }, to: { x: W, y: Ze(Ee.value) }, display: m.horizontal ? "none" : "block" })),
    y === "Forest Plot" && /* @__PURE__ */ a.createElement(
      Gb,
      {
        xScale: $e,
        yScale: Ze,
        seriesScale: Et,
        width: O,
        height: q,
        getXAxisData: ke,
        getYAxisData: xe,
        animatedChart: ce,
        visible: ce,
        handleTooltipMouseOver: jt,
        handleTooltipMouseOff: Mt,
        handleTooltipClick: Gt,
        tooltipData: ft,
        showTooltip: Ot,
        chartRef: ee,
        config: n
      }
    ),
    ["Line", "Bar", "Combo", "Area Chart"].includes(n.visualizationType) && !$ && /* @__PURE__ */ a.createElement(A0, { xScaleBrush: Vt, yScale: Ze, xMax: W, yMax: Y }),
    y !== "Bar" && y !== "Paired Bar" && y !== "Box Plot" && y !== "Area Chart" && y !== "Scatter Plot" && y !== "Deviation Bar" && y !== "Forecasting" && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement($h, { xScale: $e, yScale: Ze, getXAxisData: ke, getYAxisData: xe, xMax: W, yMax: Y, seriesStyle: n.series })),
    n.yAxis.anchors && n.yAxis.anchors.map((Ee, Fe) => {
      let ot = Ze(Ee.value);
      if (!Ee.value)
        return;
      const Ve = T === "horizontal" && y === "Bar" ? n.barHeight / 4 : 0;
      if (ot)
        return (
          // prettier-ignore
          /* @__PURE__ */ a.createElement(
            Yt,
            {
              key: `yAxis-${Ee.value}--${Fe}`,
              strokeDasharray: g(Ee.lineStyle),
              stroke: Ee.color ? Ee.color : "rgba(0,0,0,1)",
              className: "anchor-y",
              from: { x: 0 + _t, y: ot - Ve },
              to: { x: O - n.yAxis.rightAxisSize, y: ot - Ve }
            }
          )
        );
    }),
    n.xAxis.anchors && n.xAxis.anchors.map((Ee, Fe) => {
      let ot = M;
      T === "horizontal" && (ot = C);
      let Ve = yn(ot) ? $e(i(Ee.value, !1)) : $e(Ee.value);
      if (Ve)
        return (
          // prettier-ignore
          /* @__PURE__ */ a.createElement(
            Yt,
            {
              key: `xAxis-${Ee.value}--${Fe}`,
              strokeDasharray: g(Ee.lineStyle),
              stroke: Ee.color ? Ee.color : "rgba(0,0,0,1)",
              fill: Ee.color ? Ee.color : "rgba(0,0,0,1)",
              className: "anchor-x",
              from: { x: Number(Ve) + Number(_t), y: 0 },
              to: { x: Number(Ve) + Number(_t), y: Y }
            }
          )
        );
    }),
    n.visualizationType !== "Bar" && n.visualizationType !== "Combo" && /* @__PURE__ */ a.createElement(yf, { xScale: $e, handleTooltipClick: Gt, handleTooltipMouseOff: Mt, handleTooltipMouseOver: jt, showTooltip: Ot, hideTooltip: wt, tooltipData: ft, yMax: Y, width: O }),
    Ut && Ot && ft && n.visual.verticalHoverLine && /* @__PURE__ */ a.createElement(Ke, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ a.createElement(Yt, { from: { x: ft.dataXPosition - 10, y: 0 }, to: { x: ft.dataXPosition - 10, y: Y }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" })),
    Ut && Ot && ft && n.visual.horizontalHoverLine && /* @__PURE__ */ a.createElement(Ke, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: n.yAxis.size ? n.yAxis.size : 0 }, /* @__PURE__ */ a.createElement(Yt, { from: { x: 0, y: ft.dataYPosition }, to: { x: W, y: ft.dataYPosition }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    n.filters && n.filters.values.length === 0 && t.length === 0 && /* @__PURE__ */ a.createElement(it, { x: Number(n.yAxis.size) + Number(W / 2), y: q / 2 - n.xAxis.size / 2, textAnchor: "middle" }, n.chartMessage.noData),
    n.visualizationType === "Bar" && n.tooltips.singleSeries && n.visual.horizontalHoverLine && /* @__PURE__ */ a.createElement(Ke, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: n.yAxis.size ? n.yAxis.size : 0 }, /* @__PURE__ */ a.createElement(Yt, { from: { x: 0, y: he.y }, to: { x: W, y: he.y }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    n.visualizationType === "Bar" && n.tooltips.singleSeries && n.visual.verticalHoverLine && /* @__PURE__ */ a.createElement(Ke, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ a.createElement(Yt, { from: { x: he.x, y: 0 }, to: { x: he.x, y: Y }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" }))
  ), ft && Object.entries(ft.data).length > 0 && un && Ot && ft.dataYPosition && ft.dataXPosition && !n.tooltips.singleSeries && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${n.tooltips.opacity / 100}) !important`), /* @__PURE__ */ a.createElement(am, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: Mn, top: _n }, /* @__PURE__ */ a.createElement("ul", null, typeof ft == "object" && Object.entries(ft.data).map((Ee, Fe) => /* @__PURE__ */ a.createElement(dn, { item: Ee, key: Fe }))))), me() && /* @__PURE__ */ a.createElement(np, { id: `cdc-open-viz-tooltip-${m.uniqueId}`, variant: "light", arrowColor: "rgba(0,0,0,0)", className: "tooltip", style: { background: `rgba(255,255,255, ${n.tooltips.opacity / 100})`, color: "black" } }), /* @__PURE__ */ a.createElement("div", { className: "animation-trigger", ref: V })));
};
var R0 = ["id", "markerWidth", "markerHeight", "markerUnits", "children"];
function Yd() {
  return Yd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Yd.apply(this, arguments);
}
function L0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, l;
  for (l = 0; l < n.length; l++)
    i = n[l], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function vm(e) {
  var t = e.id, r = e.markerWidth, n = r === void 0 ? 3 : r, i = e.markerHeight, l = i === void 0 ? 3 : i, p = e.markerUnits, u = p === void 0 ? "userSpaceOnUse" : p, d = e.children, f = L0(e, R0);
  return /* @__PURE__ */ a.createElement("defs", null, /* @__PURE__ */ a.createElement("marker", Yd({
    id: t,
    markerWidth: n,
    markerHeight: l,
    markerUnits: u
  }, f), d));
}
vm.propTypes = {
  id: se.string.isRequired,
  size: se.number,
  markerWidth: se.oneOfType([se.string, se.number]),
  markerHeight: se.oneOfType([se.string, se.number]),
  markerUnits: se.string,
  refX: se.oneOfType([se.string, se.number]),
  refY: se.oneOfType([se.string, se.number]),
  strokeWidth: se.number,
  children: se.node.isRequired
};
var D0 = ["id", "size", "strokeWidth"];
function Xd() {
  return Xd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xd.apply(this, arguments);
}
function O0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, l;
  for (l = 0; l < n.length; l++)
    i = n[l], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function M0(e) {
  var t = e.id, r = e.size, n = r === void 0 ? 9 : r, i = e.strokeWidth, l = i === void 0 ? 1 : i, p = O0(e, D0), u = n + l * 2, d = n, f = u / 2, g = "0 0, " + n + " " + n / 2 + ", 0 " + n;
  return /* @__PURE__ */ a.createElement(vm, Xd({
    id: t,
    markerWidth: u,
    markerHeight: u,
    refX: d,
    refY: f,
    orient: "auto",
    markerUnits: "strokeWidth",
    fill: "none",
    strokeWidth: l
  }, p), /* @__PURE__ */ a.createElement("g", {
    transform: "translate(" + l + ", " + l + ")"
  }, /* @__PURE__ */ a.createElement("polyline", {
    points: g
  })));
}
const _0 = (e) => {
  var le;
  const { width: t, height: r } = e, { transformedData: n, config: i, parseDate: l, formatDate: p, seriesHighlight: u, formatNumber: d, colorScale: f, handleChartAriaLabels: g } = fe.useContext(lt);
  let v = Number(t);
  const { minValue: y, maxValue: k } = Ku(i, n), T = { top: 5, right: 10, bottom: 10, left: 10 }, M = Number(r), C = v - i.runtime.yAxis.size, m = M - T.top - 20, D = (U) => i.runtime.xAxis.type === "date" ? l(U[i.runtime.originalXAxis.dataKey]).getTime() : U[i.runtime.originalXAxis.dataKey], O = (U, te) => U[te];
  let _, $;
  const { max: L, min: q } = i.runtime.yAxis, W = Number(L) >= Number(k), Y = Number(q) <= Number(y);
  if (n) {
    let U = Number(q && Y ? q : y), te = Number(L && W ? L : Number.MIN_VALUE);
    if (te === Number.MIN_VALUE && (te = k), i.runtime.yAxis.paddingPercent) {
      let K = (te - U) * i.runtime.yAxis.paddingPercent;
      U -= K, te += K;
    }
    let me = n.map((K) => D(K));
    i.runtime.horizontal ? (_ = $n({
      domain: [U, te],
      range: [0, C]
    }), $ = i.runtime.xAxis.type === "date" ? $n({ domain: [Math.min(...me), Math.max(...me)] }) : Lo({ domain: me, padding: 0.5 }), Lo({
      domain: i.runtime.barSeriesKeys || i.runtime.seriesKeys,
      range: [0, m]
    }), $.rangeRound([0, m])) : (U = U < 0 ? U * 1.11 : U, $ = $n({
      domain: [U, te],
      range: [m - T.bottom, T.top]
    }), _ = Lo({
      domain: me,
      range: [T.left, v - T.right]
    }), Lo({
      domain: i.runtime.barSeriesKeys || i.runtime.seriesKeys,
      range: [0, C]
    }));
  }
  const J = [_.domain()[0], _.domain()[_.domain().length - 1]];
  return /* @__PURE__ */ a.createElement(Dr, { component: "SparkLine" }, /* @__PURE__ */ a.createElement("svg", { role: "img", "aria-label": g(i), width: t, height: 100, className: "sparkline", tabIndex: 0 }, /* @__PURE__ */ a.createElement("title", null, `Spark line graphic with the title ${i.title ? i.title : "No Title Found"}`), ((le = i.runtime.lineSeriesKeys) == null ? void 0 : le.length) > 0 ? i.runtime.lineSeriesKeys : i.runtime.seriesKeys.map((U, te) => /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
    Ke,
    {
      style: { width: v },
      className: "sparkline-group",
      key: `series-${U}`,
      opacity: i.legend.behavior === "highlight" && u.length > 0 && u.indexOf(U) === -1 ? 0.5 : 1,
      display: i.legend.behavior === "highlight" || u.length === 0 || u.indexOf(U) !== -1 ? "block" : "none"
    },
    n.map((me, K) => /* @__PURE__ */ a.createElement(Ke, { key: `series-${U}-point-${K}` }, /* @__PURE__ */ a.createElement(it, { display: i.labels ? "block" : "none", x: _(D(me)), y: $(O(me, U)), fill: f ? f(i.runtime.seriesLabels ? i.runtime.seriesLabels[U] : U) : "#000", textAnchor: "middle" }, d(me[U])))),
    /* @__PURE__ */ a.createElement(
      oa,
      {
        curve: Iu,
        data: n,
        x: (me) => _(D(me)),
        y: (me) => $(O(me, U)),
        stroke: f ? f(i.runtime.seriesLabels ? i.runtime.seriesLabels[U] : U) : "#000",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        markerEnd: `url(#arrow--${te})`
      }
    ),
    /* @__PURE__ */ a.createElement(M0, { id: `arrow--${te}`, refX: 2, size: 6, markerEnd: `url(#arrow--${te})`, strokeOpacity: 1, fillOpacity: 1, fill: f ? f(i.runtime.seriesLabels ? i.runtime.seriesLabels[U] : U) : "#000" })
  ), /* @__PURE__ */ a.createElement(
    lu,
    {
      top: m + T.top,
      hideAxisLine: !0,
      hideTicks: !0,
      scale: _,
      tickValues: J,
      tickFormat: (me) => i.xAxis.type === "date" ? p(me) : null,
      stroke: "black",
      tickStroke: "black",
      tickLabelProps: () => ({
        fill: "black",
        fontSize: 11,
        textAnchor: "middle"
      })
    }
  )))));
}, N0 = fe.forwardRef((e, t) => {
  const {
    config: r,
    colorScale: n,
    seriesHighlight: i,
    highlight: l,
    tableData: p,
    highlightReset: u,
    transformedData: d,
    currentViewport: f
  } = fe.useContext(lt);
  if (!r.legend)
    return null;
  const g = fm(r, p, d, n);
  return !["Box Plot", "Pie"].includes(r.visualizationType) && /* @__PURE__ */ a.createElement(dm, { ref: t, skipId: e.skipId || "legend", config: r, colorScale: n, seriesHighlight: i, highlight: l, highlightReset: u, currentViewport: f, formatLabels: g });
}), ld = {
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
}, uu = (e) => /* @__PURE__ */ fe.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...e }, /* @__PURE__ */ fe.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), F0 = ({ name: e }) => {
  var u, d, f, g, v;
  const { config: t, rawData: r, updateConfig: n } = fe.useContext(lt);
  if (t.visualizationType !== "Forest Plot")
    return;
  const i = (y) => {
    y.orientation === "horizontal" && (y.labels = !1), y.table.show === void 0 && (y.table.show = !isDashboard), y.visualizationType === "Combo" && (y.orientation = "vertical");
  }, l = (y = !0) => {
    let k = {};
    return r.forEach((T) => {
      Object.keys(T).forEach((M) => k[M] = !0);
    }), y && Object.keys(k).forEach((T) => {
      (t.series && t.series.filter((M) => M.dataKey === T).length > 0 || t.confidenceKeys && Object.keys(t.confidenceKeys).includes(T)) && delete k[T];
    }), Object.keys(k);
  }, p = (y, k, T, M) => {
    if (y === "boxplot" && k === "legend") {
      n({
        ...t,
        [y]: {
          ...t[y],
          [k]: {
            ...t.boxplot[k],
            [T]: M
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
            [T]: M
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
            [T]: M
          }
        }
      };
      n(O);
      return;
    }
    if (y === "columns" && k !== "" && T !== "") {
      n({
        ...t,
        [y]: {
          ...t[y],
          [k]: {
            ...t[y][k],
            [T]: M
          }
        }
      });
      return;
    }
    if (y === null && k === null) {
      let O = { ...t, [T]: M };
      i(O), n(O);
      return;
    }
    const C = Array.isArray(t[y]);
    let m = C ? [...t[y], M] : { ...t[y], [T]: M };
    k !== null && (C ? (m = [...t[y]], m[k] = { ...m[k], [T]: M }) : typeof M == "string" ? m[k] = M : m = { ...t[y], [k]: { ...t[y][k], [T]: M } });
    let D = { ...t, [y]: m };
    i(D), n(D);
  };
  return /* @__PURE__ */ a.createElement(Tn, null, /* @__PURE__ */ a.createElement(wn, null, /* @__PURE__ */ a.createElement(Cn, null, e, (!t.forestPlot.estimateField || !t.forestPlot.upper || !t.forestPlot.lower) && /* @__PURE__ */ a.createElement(uu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ a.createElement(An, null, /* @__PURE__ */ a.createElement(
    dt,
    {
      value: t.xAxis.dataKey || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Study Column",
      initial: "Select",
      required: !0,
      updateField: p,
      options: l(!1),
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
    }
  ), /* @__PURE__ */ a.createElement(
    dt,
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
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "Linear - Typically used for continuous outcomes. Line of no effect is positioned on 0 (zero) ", /* @__PURE__ */ a.createElement("br", null), /* @__PURE__ */ a.createElement("br", null), " Logarithmic - Typically used for binary outcomes such as risk ratios and odds ratios. Line of no effect is positioned on 1.")))
    }
  ), /* @__PURE__ */ a.createElement(He, { type: "text", value: ((u = t.forestPlot) == null ? void 0 : u.title) || "", updateField: p, section: "forestPlot", fieldName: "title", label: "Plot Title" }), /* @__PURE__ */ a.createElement("br", null), /* @__PURE__ */ a.createElement("hr", null), /* @__PURE__ */ a.createElement("br", null), /* @__PURE__ */ a.createElement("h4", null, "Column Settings"), /* @__PURE__ */ a.createElement(
    dt,
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
      options: l(!1)
    }
  ), /* @__PURE__ */ a.createElement(
    dt,
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
  ), /* @__PURE__ */ a.createElement(
    dt,
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
      options: l(!1)
    }
  ), /* @__PURE__ */ a.createElement(
    dt,
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
      options: l(!1)
    }
  ), /* @__PURE__ */ a.createElement("label", null, /* @__PURE__ */ a.createElement("span", { className: "edit-label column-heading" }, "Pooled Result Column", /* @__PURE__ */ a.createElement(
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
  ))), /* @__PURE__ */ a.createElement(et, { value: ((f = (d = t.forestPlot) == null ? void 0 : d.lineOfNoEffect) == null ? void 0 : f.show) || !1, section: "forestPlot", subsection: "lineOfNoEffect", fieldName: "show", label: "Show Line of No Effect", updateField: p }), /* @__PURE__ */ a.createElement("br", null), /* @__PURE__ */ a.createElement("hr", null), /* @__PURE__ */ a.createElement("br", null), /* @__PURE__ */ a.createElement("h4", null, "Width Settings"), /* @__PURE__ */ a.createElement("label", null, /* @__PURE__ */ a.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Left (%)"), /* @__PURE__ */ a.createElement(
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
  )), /* @__PURE__ */ a.createElement("label", null, /* @__PURE__ */ a.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Left Mobile(%)"), /* @__PURE__ */ a.createElement(
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
  )), /* @__PURE__ */ a.createElement("label", null, /* @__PURE__ */ a.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Right (%)"), /* @__PURE__ */ a.createElement(
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
  )), /* @__PURE__ */ a.createElement("label", null, /* @__PURE__ */ a.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Right Mobile(%)"), /* @__PURE__ */ a.createElement(
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
  )), /* @__PURE__ */ a.createElement(He, { type: "number", min: 20, max: 45, value: t.forestPlot.rowHeight ? t.forestPlot.rowHeight : 10, updateField: p, section: "forestPlot", fieldName: "rowHeight", label: "Row Height", placeholder: "10" }), /* @__PURE__ */ a.createElement("br", null), /* @__PURE__ */ a.createElement("hr", null), /* @__PURE__ */ a.createElement("br", null), /* @__PURE__ */ a.createElement("h4", null, "Labels Settings"), /* @__PURE__ */ a.createElement(He, { type: "text", value: ((g = t.forestPlot) == null ? void 0 : g.leftLabel) || "", updateField: p, section: "forestPlot", fieldName: "leftLabel", label: "Left Label" }), /* @__PURE__ */ a.createElement(He, { type: "text", value: ((v = t.forestPlot) == null ? void 0 : v.rightLabel) || "", updateField: p, section: "forestPlot", fieldName: "rightLabel", label: "Right Label" }), /* @__PURE__ */ a.createElement("br", null), /* @__PURE__ */ a.createElement("hr", null), /* @__PURE__ */ a.createElement("br", null), /* @__PURE__ */ a.createElement(
    dt,
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
      options: l(!1)
    }
  ), /* @__PURE__ */ a.createElement("label", null, /* @__PURE__ */ a.createElement("span", { className: "edit-label column-heading" }, "Radius Minimum Size"), /* @__PURE__ */ a.createElement(
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
  )), /* @__PURE__ */ a.createElement("label", null, /* @__PURE__ */ a.createElement("span", { className: "edit-label column-heading" }, "Radius Maximum Size"), /* @__PURE__ */ a.createElement(
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
}, Bo = a.createContext(), z0 = (e) => {
  const { updateConfig: t, config: r, rawData: n } = fe.useContext(lt), { getColumns: i, selectComponent: l } = e, p = ["Line", "dashed-sm", "dashed-md", "dashed-lg"], u = (d, f, g) => {
    let v = [...r.series];
    if (v[d][g] = f, g === "type" && f === "Bar" && (v[d].axis = "Left"), v[d].type === "Forecasting") {
      let y = Array.from(new Set(n.map((T) => T[v[d].dataKey]))), k = [];
      y.forEach((T) => {
        k.push({ key: T });
      }), v[d].stages = k, v[d].stageColumn = v[d].dataKey;
    }
    t({ ...r, series: v });
  };
  return /* @__PURE__ */ a.createElement(Bo.Provider, { value: { updateSeries: u, supportedRightAxisTypes: p, getColumns: i, selectComponent: l } }, e.children);
}, B0 = (e) => {
  const { config: t, updateConfig: r } = fe.useContext(lt), { series: n, index: i } = e;
  if (!(() => {
    let d = !1;
    return t.visualizationSubType === "stacked" || ["Line", "dashed-sm", "dashed-md", "dashed-lg", "Area Chart"].some((g) => g.includes(n.type)) && (d = !0), d;
  })())
    return;
  const p = (d, f) => {
    let g = [...t.series];
    g[d].lineType = f, r({ ...t, series: g });
  };
  let u = [];
  return Object.keys(Nu).map((d) => u.push(Nu[d])), /* @__PURE__ */ a.createElement(
    Oa,
    {
      initial: "Select an option",
      value: n.lineType ? n.lineType : "curveLinear",
      label: "Series Line Type",
      onChange: (d) => {
        p(i, d.target.value);
      },
      options: u
    }
  );
}, $0 = (e) => {
  const { config: t } = fe.useContext(lt), { updateSeries: r } = fe.useContext(Bo), { index: n, series: i } = e, l = () => {
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
    return /* @__PURE__ */ a.createElement(
      Oa,
      {
        initial: "Select an option",
        value: i.type,
        label: "Series Type",
        onChange: (p) => {
          r(n, p.target.value, "type");
        },
        options: l()
      }
    );
}, I0 = (e) => {
  const { config: t, updateConfig: r, rawData: n } = fe.useContext(lt), { updateSeries: i, getColumns: l } = fe.useContext(Bo), { index: p, series: u } = e;
  return /* @__PURE__ */ a.createElement(
    Oa,
    {
      initial: "Select an option",
      value: u.stageColumn,
      label: "Add Forecasting Stages",
      onChange: (d) => {
        let f = [], g = new Set(n == null ? void 0 : n.map((y) => y[d.target.value]));
        g = Array.from(g), g = g.filter((y) => y !== void 0), g.forEach((y) => f.push({ key: y }));
        const v = [...t.series];
        v[p] = { ...v[p], stages: f, stageColumn: d.target.value }, r({
          ...t,
          series: v
        });
      },
      options: l(!1)
    }
  );
}, H0 = (e) => {
  const { config: t, rawData: r } = fe.useContext(lt), { updateSeries: n } = fe.useContext(Bo), { index: i, series: l } = e;
  if (l.type !== "Forecasting" || !r || !l.stageColumn)
    return;
  let p = new Set(r.map((u) => u[l.stageColumn]));
  return p = Array.from(p), p = p.filter((u) => u !== void 0), /* @__PURE__ */ a.createElement(
    Oa,
    {
      initial: "Select an option",
      value: l.stageItem,
      label: "Forecasting Item Column",
      onChange: (u) => {
        n(i, u.target.value, "stageItem");
      },
      options: p
    }
  );
}, W0 = (e) => {
  const { config: t } = fe.useContext(lt), { updateSeries: r, supportedRightAxisTypes: n } = fe.useContext(Bo), { index: i, series: l } = e;
  if (!(t.visualizationType !== "Combo" || !l) && n.includes(l.type))
    return /* @__PURE__ */ a.createElement(
      Oa,
      {
        initial: "Select an option",
        value: l.axis ? l.axis : "Left",
        label: "Series Axis",
        onChange: (p) => {
          r(i, p.target.value, "axis");
        },
        options: {
          Left: "Left",
          Right: "Right"
        }
      }
    );
}, V0 = (e) => {
  var l;
  const { config: t, updateConfig: r } = fe.useContext(lt), { index: n, series: i } = e;
  if (i.type === "Forecasting" && i)
    return (l = i == null ? void 0 : i.stages) == null ? void 0 : l.map((p, u) => {
      var d, f, g, v;
      return /* @__PURE__ */ a.createElement(
        Oa,
        {
          key: `${p}--${u}`,
          initial: "Select an option",
          value: (f = (d = t.series) == null ? void 0 : d[n].stages) != null && f[u].color ? (v = (g = t.series) == null ? void 0 : g[n].stages) == null ? void 0 : v[u].color : "Select",
          label: `${p.key} Series Color`,
          onChange: (y) => {
            const k = [...t.series], T = k[n].stages;
            T[u].color = y.target.value, k[n] = { ...k[n], stages: T }, r({
              ...t,
              series: k
            });
          },
          options: Object.keys(du)
        }
      );
    });
}, j0 = (e) => {
  var p;
  const { config: t, updateConfig: r } = fe.useContext(lt), { series: n, index: i } = e, { getColumns: l } = fe.useContext(Bo);
  if (n.type === "Forecasting")
    return /* @__PURE__ */ a.createElement("div", { className: "edit-block" }, /* @__PURE__ */ a.createElement("span", { className: "edit-label column-heading" }, "Confidence Interval Groups"), /* @__PURE__ */ a.createElement("fieldset", null, /* @__PURE__ */ a.createElement(ki, { allowZeroExpanded: !0 }, (p = n == null ? void 0 : n.confidenceIntervals) == null ? void 0 : p.map((u, d) => {
      const f = u.showInTooltip ? u.showInTooltip : !1, g = (v, y, k) => {
        v.preventDefault();
        let T = [...t.series];
        T[y].confidenceIntervals[k].showInTooltip = !f, r({
          ...t,
          series: T
        });
      };
      return /* @__PURE__ */ a.createElement(Tn, { className: "series-item series-item--chart", key: `${d}` }, /* @__PURE__ */ a.createElement(wn, { className: "series-item__title" }, /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(Cn, { className: "accordion__button accordion__button" }, "Group ", d + 1, /* @__PURE__ */ a.createElement(
        "button",
        {
          className: "series-list__remove",
          onClick: (v) => {
            v.preventDefault();
            const y = [...t.series[i].confidenceIntervals];
            y.splice(d, 1);
            const k = [...t.series];
            k[i] = { ...k[i], confidenceIntervals: [...y] }, r({
              ...t,
              series: k
            });
          }
        },
        "Remove"
      )))), /* @__PURE__ */ a.createElement(An, null, /* @__PURE__ */ a.createElement("div", { className: "input-group" }, /* @__PURE__ */ a.createElement("label", { htmlFor: "showInTooltip" }, "Show In Tooltip"), /* @__PURE__ */ a.createElement("div", { className: "cove-input__checkbox--small", onClick: (v) => g(v, i, d) }, /* @__PURE__ */ a.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, f && /* @__PURE__ */ a.createElement(op, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ a.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: "showInTooltip", checked: f || !1, readOnly: !0 }))), /* @__PURE__ */ a.createElement(
        Oa,
        {
          initial: "Select an option",
          value: t.series[i].confidenceIntervals[d].low ? t.series[i].confidenceIntervals[d].low : "Select",
          label: "Low Confidence Interval",
          onChange: (v) => {
            const y = [...t.series[i].confidenceIntervals];
            y[d].low = v.target.value;
            const k = [...t.series];
            k[i] = { ...k[i], confidenceIntervals: y }, r({
              ...t,
              series: k
            });
          },
          options: l()
        }
      ), /* @__PURE__ */ a.createElement(
        Oa,
        {
          initial: "Select an option",
          value: t.series[i].confidenceIntervals[d].high ? t.series[i].confidenceIntervals[d].high : "Select",
          label: "High Confidence Interval",
          onChange: (v) => {
            const y = [...t.series[i].confidenceIntervals];
            y[d].high = v.target.value;
            const k = [...t.series];
            k[i] = { ...k[i], confidenceIntervals: y }, r({
              ...t,
              series: k
            });
          },
          options: l()
        }
      )));
    })), /* @__PURE__ */ a.createElement(
      "button",
      {
        className: "btn full-width",
        onClick: (u) => {
          u.preventDefault();
          let d = null;
          t.series[i].confidenceIntervals ? d = [...t.series[i].confidenceIntervals] : d = [];
          const f = [...t.series];
          f[i] = { ...f[i], confidenceIntervals: [...d, { high: "", low: "" }] }, r({
            ...t,
            series: f
          });
        }
      },
      "Add Confidence Interval Group"
    )));
}, U0 = (e) => {
  const { series: t, index: r } = e, { config: n, updateConfig: i } = fe.useContext(lt);
  if (!["Line", "Combo", "dashed-sm", "dashed-md", "dashed-lg"].includes(t.type))
    return;
  const p = (u, d, f, g) => {
    let v = [...n.series], y = { ...n.runtime.seriesLabels };
    v[u].weight = d && Math.max(Number(f), Math.min(Number(g), Number(d))), y[v[u].dataKey] = v[u].weight ? v[u].weight : v[u].dataKey;
    const k = {
      ...n,
      series: v,
      runtime: {
        ...n.runtime,
        seriesLabels: y
      }
    };
    i(k);
  };
  return /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("label", { htmlFor: "series-weight" }, "Line Weight"), /* @__PURE__ */ a.createElement(
    "input",
    {
      type: "number",
      key: `series-weight-${r}`,
      value: t.weight ? t.weight : "",
      min: "1",
      max: "9",
      onChange: (u) => {
        p(r, u.target.value, u.target.min, u.target.max);
      }
    }
  ));
}, K0 = (e) => {
  const { series: t, index: r } = e, { config: n, updateConfig: i } = fe.useContext(lt);
  if (!["Bar", "Line", "Area Chart", "Combo", "Deviation Bar", "Paired Bar", "Scatter Plot", "dashed-sm", "dashed-md", "dashed-lg"].includes(t.type))
    return;
  const p = (u, d) => {
    let f = [...n.series], g = { ...n.runtime.seriesLabels };
    f[u].name = d, g[f[u].dataKey] = f[u].name ? f[u].name : f[u].dataKey;
    let v = {
      ...n,
      series: f,
      runtime: {
        ...n.runtime,
        seriesLabels: g
      }
    };
    i(v);
  };
  return /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("label", { htmlFor: "series-name" }, "Series Name"), /* @__PURE__ */ a.createElement(
    "input",
    {
      type: "text",
      key: `series-name-${r}`,
      value: t.name ? t.name : "",
      onChange: (u) => {
        p(r, u.target.value);
      }
    }
  ));
}, Y0 = (e) => {
  const { series: t, index: r } = e, { config: n, updateConfig: i } = fe.useContext(lt);
  if (["Paired Bar", "Scatter Plot", "Deviation Bar"].includes(n.visualizationType))
    return;
  const l = (p) => {
    let u = [...n.series];
    u[p].tooltip && u[p].tooltip, u[p].tooltip = !u[p].tooltip, i({
      ...n,
      series: u
    });
  };
  return /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("div", { className: "input-group" }, /* @__PURE__ */ a.createElement("label", { htmlFor: `series-tooltip--${r}` }, "Show In Tooltip"), /* @__PURE__ */ a.createElement("div", { className: "cove-input__checkbox--small", onClick: (p) => l(r) }, /* @__PURE__ */ a.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, t.tooltip && /* @__PURE__ */ a.createElement(op, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ a.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: `series-tooltip--${r}`, checked: t.tooltip ? t.tooltip : !1, readOnly: !0 }))));
}, X0 = (e) => {
  const { config: t, updateConfig: r } = fe.useContext(lt), { series: n, index: i } = e, l = (u) => {
    let d = [...t.series], f = -1;
    for (let g = 0; g < d.length; g++)
      if (d[g].dataKey === u) {
        f = g;
        break;
      }
    if (f !== -1) {
      d.splice(f, 1);
      let g = { ...t, series: d };
      d.length === 0 && delete g.series, r(g);
    }
    t.visualizationType === "Paired Bar" && r({
      ...t,
      series: []
    });
  }, p = (u, d, f) => {
    u.preventDefault(), l(d.dataKey);
  };
  return t.series && t.series.length > 1 && /* @__PURE__ */ a.createElement("button", { className: "series-list__remove", onClick: (u) => p(u, n) }, "Remove");
}, xm = (e) => {
  const { config: t } = fe.useContext(lt), { series: r, getItemStyle: n, sortableItemStyles: i, chartsWithOptions: l, index: p } = e;
  return /* @__PURE__ */ a.createElement(Tm, { key: r.dataKey, draggableId: `draggableFilter-${r.dataKey}`, index: p }, (u, d) => /* @__PURE__ */ a.createElement("div", { key: p, className: d.isDragging ? "currently-dragging" : "", style: n(d.isDragging, u.draggableProps.style, i), ref: u.innerRef, ...u.draggableProps, ...u.dragHandleProps }, /* @__PURE__ */ a.createElement(ki, { allowZeroExpanded: !0 }, /* @__PURE__ */ a.createElement(Tn, { className: "series-item series-item--chart" }, /* @__PURE__ */ a.createElement(wn, { className: "series-item__title" }, /* @__PURE__ */ a.createElement(Cn, { className: l.includes(t.visualizationType) ? "accordion__button" : "accordion__button hide-arrow" }, /* @__PURE__ */ a.createElement(pt, { display: "move", size: 15, style: { cursor: "default" } }), r.dataKey, /* @__PURE__ */ a.createElement(Vr.Button.Remove, { series: r, index: p }))), l.includes(t.visualizationType) && /* @__PURE__ */ a.createElement(An, null, /* @__PURE__ */ a.createElement(Vr.Input.Name, { series: r, index: p }), /* @__PURE__ */ a.createElement(Vr.Input.Weight, { series: r, index: p }), /* @__PURE__ */ a.createElement(Vr.Dropdown.SeriesType, { series: r, index: p }), /* @__PURE__ */ a.createElement(Vr.Dropdown.AxisPosition, { series: r, index: p }), /* @__PURE__ */ a.createElement(Vr.Dropdown.LineType, { series: r, index: p }), /* @__PURE__ */ a.createElement(Vr.Dropdown.ForecastingColor, { series: r, index: p }), /* @__PURE__ */ a.createElement(Vr.Dropdown.ConfidenceInterval, { series: r, index: p }), /* @__PURE__ */ a.createElement(Vr.Checkbox.DisplayInTooltip, { series: r, index: p }))))));
}, q0 = (e) => {
  const { series: t, getItemStyle: r, sortableItemStyles: n, chartsWithOptions: i } = e;
  return t.map((l, p) => /* @__PURE__ */ a.createElement(xm, { getItemStyle: r, sortableItemStyles: n, chartsWithOptions: i, series: l, index: p, key: `series-list-${p}` }));
}, Vr = {
  Wrapper: z0,
  Dropdown: {
    SeriesType: $0,
    AxisPosition: W0,
    ConfidenceInterval: j0,
    LineType: B0,
    ForecastingStage: I0,
    ForecastingColumn: H0,
    ForecastingColor: V0
  },
  Input: {
    Name: K0,
    Weight: U0
  },
  Checkbox: {
    DisplayInTooltip: Y0
  },
  Button: {
    Remove: X0
  },
  Item: xm,
  List: q0
}, G0 = fe.memo(({ config: e, updateConfig: t }) => {
  let r = (d, f, g) => {
    let v = [];
    e.regions && (v = [...e.regions]), v[g][d] = f, t({ ...e, regions: v });
  }, n = (d, f, g, v, y) => r(g, v, y), i = (d) => {
    let f = [];
    e.regions && (f = [...e.regions]), f.splice(d, 1), t({ ...e, regions: f });
  }, l = () => {
    let d = [];
    e.regions && (d = [...e.regions]), d.push({}), t({ ...e, regions: d });
  };
  const p = ["Fixed", "Previous Days"], u = ["Last Date", "Fixed"];
  return /* @__PURE__ */ a.createElement(a.Fragment, null, e.regions && e.regions.map(({ label: d, color: f, from: g, to: v, background: y, range: k = "Custom" }, T) => {
    var M;
    return /* @__PURE__ */ a.createElement("div", { className: "edit-block", key: `region-${T}` }, /* @__PURE__ */ a.createElement(
      "button",
      {
        type: "button",
        className: "remove-column",
        onClick: (C) => {
          C.preventDefault(), i(T);
        }
      },
      "Remove"
    ), /* @__PURE__ */ a.createElement(He, { value: d, label: "Region Label", fieldName: "label", i: T, updateField: n }), /* @__PURE__ */ a.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ a.createElement(He, { value: f, label: "Text Color", fieldName: "color", updateField: (C, m, D, O) => r(D, O, T) }), /* @__PURE__ */ a.createElement(He, { value: y, label: "Background", fieldName: "background", updateField: (C, m, D, O) => r(D, O, T) })), /* @__PURE__ */ a.createElement(
      dt,
      {
        value: e.regions[T].fromType ?? "Fixed",
        label: "Minimum Region Type",
        initial: "Select",
        required: !0,
        onChange: (C) => {
          if (C.target.value !== "" && C.target.value !== "Select") {
            const m = [...e.regions];
            m[T].fromType = C.target.value, t({
              ...e,
              regions: m
            });
          }
          C.target.value = "";
        },
        options: p
      }
    ), (e.regions[T].fromType === "Fixed" || e.regions[T].fromType === "Previous Days" || !e.regions[T].fromType) && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      He,
      {
        value: g,
        label: e.regions[T].fromType === "Fixed" || !((M = e.regions[T]) != null && M.fromType) ? "From Value" : "Previous Number of Days",
        fieldName: "from",
        updateField: (C, m, D, O) => r(D, O, T),
        tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "When using categorical (linear scale) match the data set value. When using date (linear / date time scale) match the x-axis value.")))
      }
    )), /* @__PURE__ */ a.createElement(
      dt,
      {
        value: e.regions[T].toType ?? "Fixed",
        label: "Maximum Region Type",
        initial: "Select",
        required: !0,
        onChange: (C) => {
          if (C.target.value !== "" && C.target.value !== "Select") {
            const m = [...e.regions];
            m[T].toType = C.target.value, t({
              ...e,
              regions: m
            });
          }
          C.target.value = "";
        },
        options: u
      }
    ), (e.regions[T].toType === "Fixed" || !e.regions[T].toType) && /* @__PURE__ */ a.createElement(He, { value: v, label: "To Value", fieldName: "to", updateField: (C, m, D, O) => r(D, O, T) }));
  }), !e.regions && /* @__PURE__ */ a.createElement("p", { style: { textAlign: "center" } }, "There are currently no regions."), /* @__PURE__ */ a.createElement(
    "button",
    {
      type: "button",
      className: "btn full-width",
      onClick: (d) => {
        d.preventDefault(), l();
      }
    },
    "Add Region"
  ));
}), Z0 = ({ name: e }) => {
  const { visSupportsRegions: t } = Ql(), { config: r, updateConfig: n } = fe.useContext(lt);
  return t() ? /* @__PURE__ */ a.createElement(Tn, null, /* @__PURE__ */ a.createElement(wn, null, /* @__PURE__ */ a.createElement(Cn, null, e)), /* @__PURE__ */ a.createElement(An, null, /* @__PURE__ */ a.createElement(G0, { config: r, updateConfig: n }))) : null;
}, Of = fe.createContext(null), Mf = () => {
  const e = fe.useContext(Of);
  if (e === null)
    throw new Error("COVE: editor panel context is null.");
  return e;
}, Q0 = (e) => {
  const { config: t } = fe.useContext(lt), { updateField: r } = Mf(), { enabledChartTypes: n, visHasNumbersOnBars: i, visHasLabelOnData: l, visSupportsChartHeight: p, visSupportsSuperTitle: u, visSupportsFootnotes: d } = Ql(), { visualizationType: f, visualizationSubType: g, barStyle: v } = t, y = () => (f === "Bar" || f === "Deviation Bar") && g !== "stacked" && (t.orientation === "horizontal" || t.orientation === "vertical") ? ["flat", "rounded", "lollipop"] : ["flat", "rounded"];
  return /* @__PURE__ */ a.createElement(Tn, null, " ", /* @__PURE__ */ a.createElement(wn, null, /* @__PURE__ */ a.createElement(Cn, null, "General")), /* @__PURE__ */ a.createElement(An, null, /* @__PURE__ */ a.createElement(dt, { value: f, fieldName: "visualizationType", label: "Chart Type", updateField: r, options: n }), (f === "Bar" || f === "Combo" || f === "Area Chart") && /* @__PURE__ */ a.createElement(dt, { value: g || "Regular", fieldName: "visualizationSubType", label: "Chart Subtype", updateField: r, options: ["regular", "stacked"] }), f === "Area Chart" && g === "stacked" && /* @__PURE__ */ a.createElement(dt, { value: t.stackedAreaChartLineType || "Linear", fieldName: "stackedAreaChartLineType", label: "Stacked Area Chart Line Type", updateField: r, options: Object.keys(Nu) }), f === "Bar" && /* @__PURE__ */ a.createElement(dt, { value: t.orientation || "vertical", fieldName: "orientation", label: "Orientation", updateField: r, options: ["vertical", "horizontal"] }), f === "Deviation Bar" && /* @__PURE__ */ a.createElement(dt, { label: "Orientation", options: ["horizontal"] }), (f === "Bar" || f === "Deviation Bar") && /* @__PURE__ */ a.createElement(dt, { value: t.isLollipopChart ? "lollipop" : v || "flat", fieldName: "barStyle", label: "bar style", updateField: r, options: y() }), (f === "Bar" || f === "Deviation Bar") && v === "rounded" && /* @__PURE__ */ a.createElement(dt, { value: t.tipRounding || "top", fieldName: "tipRounding", label: "tip rounding", updateField: r, options: ["top", "full"] }), (f === "Bar" || f === "Deviation Bar") && v === "rounded" && /* @__PURE__ */ a.createElement(dt, { value: t.roundingStyle || "standard", fieldName: "roundingStyle", label: "rounding style", updateField: r, options: ["standard", "shallow", "finger"] }), f === "Bar" && t.orientation === "horizontal" && /* @__PURE__ */ a.createElement(dt, { value: t.yAxis.labelPlacement || "Below Bar", section: "yAxis", fieldName: "labelPlacement", label: "Label Placement", updateField: r, options: ["Below Bar", "On Date/Category Axis"] }), i() ? /* @__PURE__ */ a.createElement(et, { value: t.yAxis.displayNumbersOnBar, section: "yAxis", fieldName: "displayNumbersOnBar", label: t.isLollipopChart ? "Display Numbers after Bar" : "Display Numbers on Bar", updateField: r }) : l() && /* @__PURE__ */ a.createElement(et, { value: t.labels, fieldName: "labels", label: "Display label on data", updateField: r }), f === "Pie" && /* @__PURE__ */ a.createElement(dt, { fieldName: "pieType", label: "Pie Chart Type", updateField: r, options: ["Regular", "Donut"] }), /* @__PURE__ */ a.createElement(
    He,
    {
      value: t.title || "Chart Title",
      fieldName: "title",
      id: "title",
      label: "Title",
      placeholder: "Chart Title",
      updateField: r,
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "Title is required to set the name of the download file but can be hidden using the option below.")))
    }
  ), /* @__PURE__ */ a.createElement(et, { value: t.showTitle, fieldName: "showTitle", label: "Show Title", updateField: r }), u() && /* @__PURE__ */ a.createElement(
    He,
    {
      value: t.superTitle,
      updateField: r,
      fieldName: "superTitle",
      label: "Super Title",
      placeholder: "Super Title",
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "Super Title")))
    }
  ), /* @__PURE__ */ a.createElement(
    He,
    {
      type: "textarea",
      value: t.introText,
      updateField: r,
      fieldName: "introText",
      label: "Message",
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "Intro Text")))
    }
  ), /* @__PURE__ */ a.createElement(
    He,
    {
      type: "textarea",
      value: t.description,
      fieldName: "description",
      label: "Subtext/Citation",
      updateField: r,
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), d() && /* @__PURE__ */ a.createElement(
    He,
    {
      type: "textarea",
      value: t.footnotes,
      updateField: r,
      fieldName: "footnotes",
      label: "Footnotes",
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "Footnotes")))
    }
  ), p() && t.orientation === "vertical" && /* @__PURE__ */ a.createElement(He, { type: "number", value: t.heights.vertical, section: "heights", fieldName: "vertical", label: "Chart Height", updateField: r })));
}, J0 = (e) => {
  const { config: t } = fe.useContext(lt), { boxplot: r } = t;
  if (t.visualizationType !== "Box Plot")
    return;
  const { updateField: n } = Mf();
  return /* @__PURE__ */ a.createElement(Tn, null, /* @__PURE__ */ a.createElement(wn, null, /* @__PURE__ */ a.createElement(Cn, null, e.name)), /* @__PURE__ */ a.createElement(An, null, /* @__PURE__ */ a.createElement("h4", { style: { fontSize: "18px" } }, "Labels for 5-Number Summary"), /* @__PURE__ */ a.createElement(
    He,
    {
      type: "text",
      value: r.labels.maximum,
      fieldName: "maximum",
      section: "boxplot",
      subsection: "labels",
      label: "Maximum",
      updateField: n,
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "Highest value, excluding outliers")))
    }
  ), /* @__PURE__ */ a.createElement(
    He,
    {
      type: "text",
      value: r.labels.q3,
      fieldName: "q3",
      section: "boxplot",
      subsection: "labels",
      label: "Upper Quartile",
      updateField: n,
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "Represented by top line of box. 25% of data are higher.")))
    }
  ), /* @__PURE__ */ a.createElement(
    He,
    {
      type: "text",
      value: r.labels.median,
      fieldName: "median",
      section: "boxplot",
      subsection: "labels",
      label: "Median",
      updateField: n,
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "Middle data point. Half of data are higher value.")))
    }
  ), /* @__PURE__ */ a.createElement(
    He,
    {
      type: "text",
      value: r.labels.q1,
      fieldName: "q1",
      section: "boxplot",
      subsection: "labels",
      label: "Lower Quartile",
      updateField: n,
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "Represented by bottom line of box. 25% of data are lower.")))
    }
  ), /* @__PURE__ */ a.createElement(
    He,
    {
      type: "text",
      value: r.labels.minimum,
      fieldName: "minimum",
      section: "boxplot",
      subsection: "labels",
      label: "Minimum",
      updateField: n,
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "Lowest value, excluding outliers")))
    }
  ), /* @__PURE__ */ a.createElement("br", null), /* @__PURE__ */ a.createElement("h4", { style: { fontSize: "18px" } }, "Labels for Additional Measures"), /* @__PURE__ */ a.createElement(He, { type: "text", value: r.labels.iqr, fieldName: "iqr", section: "boxplot", subsection: "labels", label: "Interquartile Range", updateField: n }), /* @__PURE__ */ a.createElement(He, { type: "text", value: r.labels.total, fieldName: "total", section: "boxplot", subsection: "labels", label: "Total", updateField: n }), /* @__PURE__ */ a.createElement(He, { type: "text", value: r.labels.mean, fieldName: "mean", section: "boxplot", subsection: "labels", label: "Mean", updateField: n }), /* @__PURE__ */ a.createElement(He, { type: "text", value: r.labels.outliers, fieldName: "outliers", section: "boxplot", subsection: "labels", label: "Outliers", updateField: n }), /* @__PURE__ */ a.createElement(He, { type: "text", value: r.labels.values, fieldName: "values", section: "boxplot", subsection: "labels", label: "Values", updateField: n })));
}, eS = (e, t) => {
  let r = [], n = [], i = [];
  if (e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar") {
    const l = e.twoColor.isPaletteReversed;
    r = Object.keys(cu).filter((p) => l ? p.endsWith("reverse") : !p.endsWith("reverse"));
  } else {
    const l = [], p = [];
    for (const u in ar) {
      const d = u.startsWith("sequential"), f = u.startsWith("qualitative"), g = u.endsWith("reverse");
      d && (!e.isPaletteReversed && !g || e.isPaletteReversed && g) && l.push(u), f && (!e.isPaletteReversed && !g || e.isPaletteReversed && g) && p.push(u);
    }
    n = l, i = p;
  }
  return fe.useEffect(() => {
    let l = "";
    e.twoColor.isPaletteReversed && !e.twoColor.palette.endsWith("reverse") && (l = e.twoColor.palette + "reverse"), !e.twoColor.isPaletteReversed && e.twoColor.palette.endsWith("reverse") && (l = e.twoColor.palette.slice(0, -7)), t({ ...e, twoColor: { ...e.twoColor, palette: l } });
  }, [e.twoColor.isPaletteReversed]), fe.useEffect(() => {
    let l = "";
    e.isPaletteReversed && !e.palette.endsWith("reverse") && (l = e.palette + "reverse"), !e.isPaletteReversed && e.palette.endsWith("reverse") && (l = e.palette.slice(0, -7)), t({ ...e, palette: l });
  }, [e.isPaletteReversed]), { twoColorPalettes: r, sequential: n, nonSequential: i };
}, tS = (e) => {
  var q;
  const { config: t, updateConfig: r, colorPalettes: n, twoColorPalette: i } = fe.useContext(lt), { visual: l } = t, { setLollipopShape: p, updateField: u } = Mf(), { visHasBarBorders: d, visCanAnimate: f, visSupportsNonSequentialPallete: g, headerColors: v, visSupportsTooltipOpacity: y, visSupportsTooltipLines: k, visSupportsBarSpace: T, visSupportsBarThickness: M, visHasDataCutoff: C, visSupportsSequentialPallete: m, visSupportsReverseColorPalette: D } = Ql(), { twoColorPalettes: O, sequential: _, nonSequential: $ } = eS(t, r), L = (W, Y) => {
    if (console.log("value", Y), W === "storyNodeFontColor") {
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
          [W]: {
            ...t.sankey[W],
            default: Y
          }
        }
      });
  };
  return /* @__PURE__ */ a.createElement(Tn, null, /* @__PURE__ */ a.createElement(wn, null, /* @__PURE__ */ a.createElement(Cn, null, "Visual")), /* @__PURE__ */ a.createElement(An, null, t.isLollipopChart && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("fieldset", { className: "header" }, /* @__PURE__ */ a.createElement("legend", { className: "edit-label" }, "Lollipop Shape"), /* @__PURE__ */ a.createElement(
    "div",
    {
      onChange: (W) => {
        p(W.target.value);
      }
    },
    /* @__PURE__ */ a.createElement("label", { className: "radio-label" }, /* @__PURE__ */ a.createElement("input", { type: "radio", name: "lollipopShape", value: "circle", checked: t.lollipopShape === "circle" }), "Circle"),
    /* @__PURE__ */ a.createElement("label", { className: "radio-label" }, /* @__PURE__ */ a.createElement("input", { type: "radio", name: "lollipopShape", value: "square", checked: t.lollipopShape === "square" }), "Square")
  )), /* @__PURE__ */ a.createElement(dt, { value: t.lollipopColorStyle ? t.lollipopColorStyle : "two-tone", fieldName: "lollipopColorStyle", label: "Lollipop Color Style", updateField: u, options: ["regular", "two-tone"] }), /* @__PURE__ */ a.createElement(dt, { value: t.lollipopSize ? t.lollipopSize : "small", fieldName: "lollipopSize", label: "Lollipop Size", updateField: u, options: ["small", "medium", "large"] })), t.visualizationType === "Box Plot" && /* @__PURE__ */ a.createElement("fieldset", { className: "fieldset fieldset--boxplot" }, /* @__PURE__ */ a.createElement("legend", { className: "" }, "Box Plot Settings"), /* @__PURE__ */ a.createElement(dt, { value: t.boxplot.borders, fieldName: "borders", section: "boxplot", label: "Box Plot Borders", updateField: u, options: ["true", "false"] }), /* @__PURE__ */ a.createElement(et, { value: t.boxplot.plotOutlierValues, fieldName: "plotOutlierValues", section: "boxplot", label: "Plot Outliers", updateField: u }), /* @__PURE__ */ a.createElement(et, { value: t.boxplot.plotNonOutlierValues, fieldName: "plotNonOutlierValues", section: "boxplot", label: "Plot non-outlier values", updateField: u })), /* @__PURE__ */ a.createElement(dt, { value: t.fontSize, fieldName: "fontSize", label: "Font Size", updateField: u, options: ["small", "medium", "large"] }), d() && /* @__PURE__ */ a.createElement(dt, { value: t.barHasBorder, fieldName: "barHasBorder", label: "Bar Borders", updateField: u, options: ["true", "false"] }), f() && /* @__PURE__ */ a.createElement(et, { value: t.animate, fieldName: "animate", label: "Animate Visualization", updateField: u }), (((q = t.series) == null ? void 0 : q.some((W) => W.type === "Line" || W.type === "dashed-lg" || W.type === "dashed-sm" || W.type === "dashed-md")) && t.visualizationType === "Combo" || t.visualizationType === "Line") && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(dt, { value: t.lineDatapointStyle, fieldName: "lineDatapointStyle", label: "Line Datapoint Style", updateField: u, options: ["hidden", "hover", "always show"] }), /* @__PURE__ */ a.createElement(dt, { value: t.lineDatapointColor, fieldName: "lineDatapointColor", label: "Line Datapoint Color", updateField: u, options: ["Same as Line", "Lighter than Line"] })), /* @__PURE__ */ a.createElement("label", { className: "header" }, /* @__PURE__ */ a.createElement("span", { className: "edit-label" }, "Header Theme"), /* @__PURE__ */ a.createElement("ul", { className: "color-palette" }, v.map((W) => /* @__PURE__ */ a.createElement(
    "button",
    {
      title: W,
      key: W,
      onClick: (Y) => {
        Y.preventDefault(), r({ ...t, theme: W });
      },
      className: t.theme === W ? "selected " + W : W
    }
  )))), (g() || g()) && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("label", null, /* @__PURE__ */ a.createElement("span", { className: "edit-label" }, "Chart Color Palette")), D() && /* @__PURE__ */ a.createElement(Wf, { fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: u, value: t.isPaletteReversed }), m() && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("span", null, "Sequential"), /* @__PURE__ */ a.createElement("ul", { className: "color-palette" }, _.map((W) => {
    const Y = {
      backgroundColor: n[W][2]
    }, J = {
      backgroundColor: n[W][3]
    }, le = {
      backgroundColor: n[W][5]
    };
    return /* @__PURE__ */ a.createElement(
      "button",
      {
        title: W,
        key: W,
        onClick: (U) => {
          U.preventDefault(), r({ ...t, palette: W });
        },
        className: t.palette === W ? "selected" : ""
      },
      /* @__PURE__ */ a.createElement("span", { style: Y }),
      /* @__PURE__ */ a.createElement("span", { style: J }),
      /* @__PURE__ */ a.createElement("span", { style: le })
    );
  }))), g() && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("span", null, "Non-Sequential"), /* @__PURE__ */ a.createElement("ul", { className: "color-palette" }, $.map((W) => {
    const Y = {
      backgroundColor: n[W][2]
    }, J = {
      backgroundColor: n[W][4]
    }, le = {
      backgroundColor: n[W][6]
    };
    return /* @__PURE__ */ a.createElement(
      "button",
      {
        title: W,
        key: W,
        onClick: (U) => {
          U.preventDefault(), r({ ...t, palette: W });
        },
        className: t.palette === W ? "selected" : ""
      },
      /* @__PURE__ */ a.createElement("span", { style: Y }),
      /* @__PURE__ */ a.createElement("span", { style: J }),
      /* @__PURE__ */ a.createElement("span", { style: le })
    );
  })))), t.visualizationType === "Sankey" && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ a.createElement("input", { type: "color", value: t.sankey.nodeColor.default, id: "storyNodeColor", name: "storyNodeColor", onChange: (W) => L("nodeColor", W.target.value) }), /* @__PURE__ */ a.createElement("label", { htmlFor: "storyNodeColor" }, "Story Node Color")), /* @__PURE__ */ a.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ a.createElement("input", { type: "color", value: t.sankey.storyNodeFontColor || "red", id: "storyNodeFontColor", name: "storyNodeFontColor", onChange: (W) => L("storyNodeFontColor", W.target.value) }), /* @__PURE__ */ a.createElement("label", { htmlFor: "storyNodeFontColor" }, "Story Node Font Color")), /* @__PURE__ */ a.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ a.createElement("input", { type: "color", value: t.sankey.linkColor.default, id: "linkColor", name: "linkColor", onChange: (W) => L("linkColor", W.target.value) }), /* @__PURE__ */ a.createElement("label", { htmlFor: "linkColor" }, "Link Color"))), (t.visualizationType === "Paired Bar" || t.visualizationType === "Deviation Bar") && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(Wf, { section: "twoColor", fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: u, value: t.twoColor.isPaletteReversed }), /* @__PURE__ */ a.createElement("ul", { className: "color-palette" }, O.map((W) => {
    const Y = {
      backgroundColor: i[W][0]
    }, J = {
      backgroundColor: i[W][1]
    };
    return /* @__PURE__ */ a.createElement(
      "button",
      {
        title: W,
        key: W,
        onClick: (le) => {
          le.preventDefault(), r({ ...t, twoColor: { ...t.twoColor, palette: W } });
        },
        className: t.twoColor.palette === W ? "selected" : ""
      },
      /* @__PURE__ */ a.createElement("span", { className: "two-color", style: Y }),
      /* @__PURE__ */ a.createElement("span", { className: "two-color", style: J })
    );
  }))), C() && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
    He,
    {
      value: t.dataCutoff,
      type: "number",
      fieldName: "dataCutoff",
      className: "number-narrow",
      label: "Data Cutoff",
      updateField: u,
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, 'Any value below the cut-off value is included in a special "less than" category. This option supports special conditions like suppressed data.')))
    }
  )), M() && t.orientation === "horizontal" && !t.isLollipopChart && t.yAxis.labelPlacement !== "On Bar" && /* @__PURE__ */ a.createElement(He, { type: "number", value: t.barHeight || "25", fieldName: "barHeight", label: " Bar Thickness", updateField: u, min: 15 }), (t.visualizationType === "Bar" && t.orientation !== "horizontal" || t.visualizationType === "Combo") && /* @__PURE__ */ a.createElement(He, { value: t.barThickness, type: "number", fieldName: "barThickness", label: "Bar Thickness", updateField: u }), T() && /* @__PURE__ */ a.createElement(He, { type: "number", value: t.barSpace || "15", fieldName: "barSpace", label: "Bar Space", updateField: u, min: 0 }), (t.visualizationType === "Bar" || t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ a.createElement(et, { value: t.topAxis.hasLine, section: "topAxis", fieldName: "hasLine", label: "Add Top Axis Line", updateField: u }), t.visualizationType === "Spark Line" && /* @__PURE__ */ a.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ a.createElement(et, { value: l == null ? void 0 : l.border, section: "visual", fieldName: "border", label: "Show Border", updateField: u }), /* @__PURE__ */ a.createElement(et, { value: l == null ? void 0 : l.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: u }), /* @__PURE__ */ a.createElement(et, { value: l == null ? void 0 : l.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: u }), /* @__PURE__ */ a.createElement(et, { value: l == null ? void 0 : l.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: u }), /* @__PURE__ */ a.createElement(et, { value: l == null ? void 0 : l.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: u })), (t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ a.createElement(et, { value: t.showLineSeriesLabels, fieldName: "showLineSeriesLabels", label: "Append Series Name to End of Line Charts", updateField: u }), (t.visualizationType === "Line" || t.visualizationType === "Combo") && t.showLineSeriesLabels && /* @__PURE__ */ a.createElement(et, { value: t.colorMatchLineSeriesLabels, fieldName: "colorMatchLineSeriesLabels", label: "Match Series Color to Name at End of Line Charts", updateField: u }), k() && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(et, { value: l.verticalHoverLine, fieldName: "verticalHoverLine", section: "visual", label: "Vertical Hover Line", updateField: u }), /* @__PURE__ */ a.createElement(et, { value: l.horizontalHoverLine, fieldName: "horizontalHoverLine", section: "visual", label: "Horizontal Hover Line", updateField: u })), y() && /* @__PURE__ */ a.createElement("label", null, /* @__PURE__ */ a.createElement("span", { className: "edit-label column-heading" }, "Tooltip Opacity"), /* @__PURE__ */ a.createElement(
    "input",
    {
      type: "number",
      value: t.tooltips.opacity ? t.tooltips.opacity : 100,
      onChange: (W) => r({
        ...t,
        tooltips: {
          ...t.tooltips,
          opacity: W.target.value
        }
      })
    }
  )), t.visualizationType === "Bar" && /* @__PURE__ */ a.createElement(et, { value: t.tooltips.singleSeries, fieldName: "singleSeries", section: "tooltips", label: "SHOW HOVER FOR SINGLE DATA SERIES", updateField: u }), /* @__PURE__ */ a.createElement("label", null, /* @__PURE__ */ a.createElement("span", { className: "edit-label column-heading" }, "No Data Message"), /* @__PURE__ */ a.createElement(
    "input",
    {
      type: "text",
      value: t.chartMessage.noData ? t.chartMessage.noData : "",
      onChange: (W) => r({
        ...t,
        chartMessage: {
          ...t.chartMessage,
          noData: W.target.value
        }
      })
    }
  ))));
}, nS = () => {
  var u, d, f;
  const { config: e, updateConfig: t } = fe.useContext(lt), r = (u = e.data) == null ? void 0 : u[0], { updateField: n } = fe.useContext(Of);
  if (e.visualizationType !== "Sankey")
    return;
  const i = (g, v, y) => {
    let k = [];
    r != null && r.storyNodeText && (k = [...r == null ? void 0 : r.storyNodeText]), k[y][g] = v, t({
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
  }, p = (g) => {
    const v = r;
    v.storyNodeText.splice(g, 1), t({ ...e, sankey: { ...e.sankey, data: { ...v } } });
  };
  return /* @__PURE__ */ a.createElement(Tn, null, /* @__PURE__ */ a.createElement(wn, null, /* @__PURE__ */ a.createElement(Cn, null, "Sankey Settings")), /* @__PURE__ */ a.createElement(An, null, (r == null ? void 0 : r.storyNodeText) && (r == null ? void 0 : r.storyNodeText.map(({ StoryNode: g, segmentTextBefore: v, segmentTextAfter: y }, k) => /* @__PURE__ */ a.createElement("div", { key: k, style: { border: "1px solid black", margin: "15px auto", padding: "15px", borderRadius: "10px" } }, /* @__PURE__ */ a.createElement("label", null, "Story Node Text", /* @__PURE__ */ a.createElement("input", { type: "text", value: g, fieldName: "StoryNode", label: "StoryNode", onChange: (T) => i("StoryNode", T.target.value, k) })), /* @__PURE__ */ a.createElement("label", null, "Story Text Before", /* @__PURE__ */ a.createElement("input", { type: "text", value: v, fieldName: "segmentTextBefore", label: "Segment Text Before", onChange: (T) => i("segmentTextBefore", T.target.value, k) })), /* @__PURE__ */ a.createElement("label", null, "Story Text After", /* @__PURE__ */ a.createElement("input", { type: "text", value: y, fieldName: "segmentTextAfter", label: "Segment Text After", onChange: (T) => i("segmentTextAfter", T.target.value, k) })), /* @__PURE__ */ a.createElement(qd, { onClick: (T) => p(k), className: "btn", style: { background: "tomato" } }, "Remove Story Node")))), `Total Story Nodes: ${(d = r == null ? void 0 : r.storyNodeText) == null ? void 0 : d.length}`, ((f = r == null ? void 0 : r.storyNodeText) == null ? void 0 : f.length) < 3 && /* @__PURE__ */ a.createElement(
    "button",
    {
      type: "button",
      className: "btn full-width",
      onClick: (g) => {
        g.preventDefault(), l();
      }
    },
    "Add StoryNode"
  ), /* @__PURE__ */ a.createElement(et, { value: e.enableTooltips, fieldName: "enableTooltips", label: "Enable Tooltips", updateField: n })));
}, Pa = {
  ForestPlot: F0,
  Series: Vr,
  Regions: Z0,
  General: Q0,
  BoxPlot: J0,
  Visual: tS,
  Sankey: nS
};
fe.memo(({ config: e, updateConfig: t, data: r }) => {
  const n = () => {
    const d = /* @__PURE__ */ new Set();
    return r.forEach((f) => {
      Object.keys(f).forEach((g) => {
        d.add(g);
      });
    }), [...d];
  }, i = () => ["star"];
  let l = (d) => {
    let f = [];
    e.suppressedData && (f = [...e.suppressedData]), f.splice(d, 1), t({ ...e, suppressedData: f });
  }, p = () => {
    let d = e.suppressedData ? [...e.suppressedData] : [];
    d.push({ label: "", column: "", value: "", icon: "" }), t({ ...e, suppressedData: d });
  }, u = (d, f, g) => {
    let v = [];
    e.suppressedData && (v = [...e.suppressedData]), v[g][d] = f, t({ ...e, suppressedData: v });
  };
  return /* @__PURE__ */ a.createElement(a.Fragment, null, e.suppressedData && e.suppressedData.map(({ label: d, column: f, value: g, icon: v }, y) => /* @__PURE__ */ a.createElement("div", { key: `suppressed-${y}`, className: "edit-block" }, /* @__PURE__ */ a.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: (k) => {
        k.preventDefault(), l(y);
      }
    },
    "Remove"
  ), /* @__PURE__ */ a.createElement(dt, { value: f, initial: "Select", fieldName: "column", label: "Column", updateField: (k, T, M, C) => u(M, C, y), options: n() }), /* @__PURE__ */ a.createElement(He, { value: g, fieldName: "value", label: "Value", updateField: (k, T, M, C) => u(M, C, y) }), /* @__PURE__ */ a.createElement(dt, { value: v, initial: "Select", fieldName: "icon", label: "Icon", updateField: (k, T, M, C) => u(M, C, y), options: i() }), /* @__PURE__ */ a.createElement(He, { value: d, fieldName: "label", label: "Label", placeholder: "suppressed", updateField: (k, T, M, C) => u(M, C, y) }))), /* @__PURE__ */ a.createElement("button", { type: "button", onClick: p, className: "btn full-width" }, "Add Suppression Class"));
});
const rS = fe.memo(({ config: e, updateConfig: t, data: r }) => {
  const n = () => {
    const f = /* @__PURE__ */ new Set();
    return r.forEach((g) => {
      Object.keys(g).forEach((v) => {
        f.add(v);
      });
    }), [...f];
  }, i = () => e.visualizationType === "Line" || e.visualizationType === "Combo" ? ["effect"] : ["suppression"], l = () => {
    if (e.visualizationType === "Line" || e.visualizationType === "Combo")
      return ["Dashed Small", "Dashed Medium", "Dashed Large", "Open Circles"];
    if (e.visualizationType === "Bar")
      return ["star"];
  };
  let p = (f) => {
    let g = [];
    e.preliminaryData && (g = [...e.preliminaryData]), g.splice(f, 1), t({ ...e, preliminaryData: g });
  }, u = () => {
    let f = e.preliminaryData ? [...e.preliminaryData] : [];
    f.push({ type: "", label: "", column: "", value: "", style: "" }), t({ ...e, preliminaryData: f });
  }, d = (f, g, v) => {
    let y = [];
    e.preliminaryData && (y = [...e.preliminaryData]), y[v][f] = g, t({ ...e, preliminaryData: y });
  };
  return /* @__PURE__ */ a.createElement(a.Fragment, null, e.preliminaryData && e.preliminaryData.map(({ seriesKey: f, type: g, label: v, column: y, value: k, style: T }, M) => {
    var C;
    return /* @__PURE__ */ a.createElement("div", { key: `preliminaryData-${M}`, className: "edit-block" }, /* @__PURE__ */ a.createElement(
      "button",
      {
        type: "button",
        className: "remove-column",
        onClick: (m) => {
          m.preventDefault(), p(M);
        }
      },
      "Remove"
    ), /* @__PURE__ */ a.createElement(dt, { value: g, initial: "Select", fieldName: "type", label: "Type", updateField: (m, D, O, _) => d(O, _, M), options: i() }), /* @__PURE__ */ a.createElement(dt, { value: f, initial: "Select", fieldName: "seriesKey", label: "ASSOCIATE TO SERIES", updateField: (m, D, O, _) => d(O, _, M), options: e.runtime.lineSeriesKeys ?? ((C = e.runtime) == null ? void 0 : C.seriesKeys) }), /* @__PURE__ */ a.createElement(dt, { value: y, initial: "Select", fieldName: "column", label: "COLUMN WITH CONFIGURATION VALUE", updateField: (m, D, O, _) => d(O, _, M), options: n() }), /* @__PURE__ */ a.createElement(He, { value: k, fieldName: "value", label: "VALUE TO TRIGGER", updateField: (m, D, O, _) => d(O, _, M) }), /* @__PURE__ */ a.createElement(dt, { value: T, initial: "Select", fieldName: "style", label: "Style", updateField: (m, D, O, _) => d(O, _, M), options: l() }), /* @__PURE__ */ a.createElement(He, { value: v, fieldName: "label", label: "Label", placeholder: "", updateField: (m, D, O, _) => d(O, _, M) }));
  }), /* @__PURE__ */ a.createElement("button", { type: "button", onClick: u, className: "btn full-width" }, e.visualizationType === "Line" || e.visualizationType === "Combo" ? "Add Special Line" : e.visualizationType === "Bar" ? " Add Special Bar" : "Add Special Line/Bar"));
}), aS = () => {
  var on, Ft, Ht, Pn, Rn, Qn, Wn, Qt, bn, fr, ir, or, x, A, z, X, ye;
  const {
    config: e,
    updateConfig: t,
    tableData: r,
    transformedData: n,
    loading: i,
    colorScale: l,
    colorPalettes: p,
    twoColorPalette: u,
    unfilteredData: d,
    excludedData: f,
    isDashboard: g,
    setParentConfig: v,
    missingRequiredSections: y,
    isDebug: k,
    setFilteredData: T,
    lineOptions: M,
    rawData: C,
    highlight: m,
    highlightReset: D
  } = fe.useContext(lt), { minValue: O, maxValue: _, existPositiveValue: $, isAllLine: L } = Ku(e, d), q = { data: n, config: e }, { leftMax: W, rightMax: Y } = pm(q), {
    headerColors: J,
    visSupportsTooltipLines: le,
    visSupportsNonSequentialPallete: U,
    visSupportsSequentialPallete: te,
    visSupportsReverseColorPalette: me,
    visHasLabelOnData: K,
    visHasNumbersOnBars: ce,
    visHasAnchors: ue,
    visHasBarBorders: he,
    visHasDataCutoff: ae,
    visHasSelectableLegendValues: V,
    visCanAnimate: ee,
    visHasLegend: ne,
    visHasLegendAxisAlign: ke,
    visHasBrushChart: xe,
    visSupportsDateCategoryAxis: we,
    visSupportsValueAxisMin: ie,
    visSupportsValueAxisMax: Le,
    visSupportsDateCategoryAxisLabel: Me,
    visSupportsDateCategoryAxisLine: We,
    visSupportsDateCategoryAxisTicks: qe,
    visSupportsDateCategoryTickRotation: Ge,
    visSupportsDateCategoryNumTicks: De,
    visSupportsDateCategoryAxisPadding: _e,
    visSupportsRegions: $e,
    visSupportsFilters: Ze,
    visSupportsPreliminaryData: Et,
    visSupportsValueAxisGridLines: vt,
    visSupportsValueAxisLine: Ct,
    visSupportsValueAxisTicks: Je,
    visSupportsValueAxisLabels: Vt,
    visSupportsBarSpace: qt,
    visSupportsBarThickness: zt,
    visSupportsFootnotes: bt,
    visSupportsSuperTitle: St,
    visSupportsDataCutoff: Jt,
    visSupportsChartHeight: ft,
    visSupportsLeftValueAxis: Ot,
    visSupportsTooltipOpacity: wt,
    visSupportsRankByValue: un,
    visSupportsResponsiveTicks: Mn,
    visSupportsDateCategoryHeight: _n,
    visHasDataSuppression: jt
  } = Ql();
  fe.useEffect(() => {
    let B = [];
    e.series && (B = e.series.map((I) => ({
      ...I,
      type: e.visualizationType === "Combo" ? "Bar" : e.visualizationType ? e.visualizationType : "Bar",
      axis: "Left"
    }))), t({
      ...e,
      series: B
    });
  }, [e.visualizationType]), fe.useEffect(() => {
    e.visualizationType === "Scatter Plot" && t({
      ...e,
      xAxis: {
        ...e.xAxis,
        type: "continuous"
      }
    });
  }, []), fe.useEffect(() => {
    e.visualizationType !== "Bar" && t({ ...e, tooltips: { ...e.tooltips, singleSeries: !1 } });
  }, [e.visualizationType]);
  const { hasRightAxis: Gt } = vf({ config: e, yMax: e.yAxis.size, data: e.data, updateConfig: t }), Mt = (B, I) => ({
    ...I
  }), cn = {
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
  }, dn = (B) => {
    B.orientation === "horizontal" && (B.labels = !1), B.table.show === void 0 && (B.table.show = !g), B.visualizationType === "Combo" && (B.orientation = "vertical"), yn(B.xAxis) && !B.xAxis.padding && (B.xAxis.padding = 6);
  }, Ae = (B, I, Q, pe) => {
    if (k && console.log("#COVE: CHART: EditorPanel: section, subsection, fieldName, newValue", B, I, Q, pe), B === "boxplot" && I === "legend") {
      t({
        ...e,
        [B]: {
          ...e[B],
          [I]: {
            ...e.boxplot[I],
            [Q]: pe
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
            [Q]: pe
          }
        }
      });
      return;
    }
    const Be = (ln) => ln === 0 ? !0 : !!ln;
    if (B === "columns" && Be(I) && Be(Q)) {
      t({
        ...e,
        columns: {
          ...e.columns,
          [I]: {
            ...e.columns[I],
            [Q]: pe
          }
        }
      });
      return;
    }
    if (B === null && I === null) {
      Be(Q) || console.error("fieldName is required");
      let ln = { ...e, [Q]: pe };
      dn(ln), t(ln);
      return;
    }
    const je = Array.isArray(e[B]);
    let gt = je ? [...e[B], pe] : { ...e[B], [Q]: pe };
    Be(I) && (je ? (gt = [...e[B]], gt[I] = { ...gt[I], [Q]: pe }) : typeof pe == "string" ? gt[I] = pe : Be(Q) && (gt = { ...e[B], [I]: { ...e[B][I], [Q]: pe } }));
    let kn = { ...e, [B]: gt };
    dn(kn), t(kn);
  }, [mt, Ut] = fe.useState(!0);
  if (i)
    return null;
  fe.useEffect(() => {
    var B;
    (B = e.general) != null && B.boxplot && (e.general.boxplot.firstQuartilePercentage || t({
      ...e,
      boxplot: {
        ...e.boxplot,
        firstQuartilePercentage: 25
      }
    }));
  }, [e]);
  const _t = (B) => {
    t({
      ...e,
      lollipopShape: B
    });
  }, vn = (B) => {
    let I = e.series ? [...e.series] : [], Q = Array.from(new Set(n.map((Be) => Be[B]))), pe = [];
    Q.forEach((Be) => {
      pe.push({ key: Be });
    }), e.visualizationType === "Forecasting" ? I.push({ dataKey: B, type: e.visualizationType, stages: pe, stageColumn: B, axis: "Left", tooltip: !0 }) : I.push({ dataKey: B, type: e.visualizationType, axis: "Left", tooltip: !0 }), t({ ...e, series: I });
  }, st = (B) => {
    const I = e.series[0].dataKey, Q = n.sort((Be, je) => Be[I] - je[I]), pe = B === "asc" ? Q : Q.reverse();
    t({ ...e }, pe);
  }, fn = (B) => {
    let I = [...e.exclusions.keys];
    I.push(B);
    let Q = { ...e.exclusions, keys: I };
    t({ ...e, exclusions: Q });
  }, xt = (B) => {
    let I = -1, Q = [...e.exclusions.keys];
    for (let pe = 0; pe < Q.length; pe++)
      if (Q[pe] === B) {
        I = pe;
        break;
      }
    if (I !== -1) {
      Q.splice(I, 1);
      let pe = { ...e.exclusions, keys: Q }, Be = { ...e, exclusions: pe };
      Q.length === 0 && delete Be.exclusions.keys, t(Be);
    }
  }, Bt = (B = !0) => {
    let I = {};
    if (d.forEach((Q) => {
      Object.keys(Q).forEach((pe) => I[pe] = !0);
    }), B) {
      const { lower: Q, upper: pe } = e.confidenceKeys || {};
      Object.keys(I).forEach((Be) => {
        (e.series && e.series.filter((je) => je.dataKey === Be).length > 0 || e.confidenceKeys && Object.keys(e.confidenceKeys).includes(Be) && (Q && pe || Q || pe) && Be !== Q && Be !== pe) && delete I[Be];
      });
    }
    return Object.keys(I);
  }, pn = (B) => {
    if (!B)
      return [];
    const I = /* @__PURE__ */ new Set();
    for (let Q = 0; Q < B.length; Q++)
      for (const [pe] of Object.entries(B[Q]))
        I.add(pe);
    return Array.from(I);
  }, En = (B, I = !1) => {
    let Q = [];
    return f.forEach((pe) => {
      Q.push(pe[B]);
    }), I ? [...new Set(Q)] : Q;
  }, Ee = () => {
    Ut(!mt), t({
      ...e,
      showEditorPanel: !mt
    });
  }, Fe = () => {
    let B = JSON.parse(JSON.stringify(e));
    return y() === !1 && delete B.newViz, delete B.runtime, B;
  };
  fe.useEffect(() => {
    if (v) {
      const B = Fe();
      v(B);
    }
  }, [e]), fe.useEffect(() => {
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
  }, [e.orientation]), fe.useEffect(() => {
    e.visualizationType === "Paired Bar" && t({
      ...e,
      orientation: "horizontal"
    });
  }, []), fe.useEffect(() => {
    e.orientation === "horizontal" && t({
      ...e,
      lollipopShape: e.lollipopShape
    });
  }, [e.isLollipopChart, e.lollipopShape]), fe.useEffect(() => {
    e.visualizationType === "Deviation Bar" && t({ ...e, orientation: "horizontal" });
  }, [e.visualizationType]);
  const ot = fe.useCallback(() => {
    const B = [...e.exclusions.keys];
    return /* @__PURE__ */ a.createElement("ul", { className: "series-list" }, B.map((I, Q) => /* @__PURE__ */ a.createElement("li", { key: I }, /* @__PURE__ */ a.createElement("div", { className: "series-list__name", "data-title": I }, /* @__PURE__ */ a.createElement("div", { className: "series-list__name--text" }, I)), /* @__PURE__ */ a.createElement("button", { className: "series-list__remove", onClick: () => xt(I) }, "×"))));
  }, [e]), Ve = (B, I) => {
    let Q = e.series, [pe] = Q.splice(B, 1);
    Q.splice(I, 0, pe), t({ ...e, series: Q });
  };
  e.isLollipopChart && ((on = e == null ? void 0 : e.series) == null ? void 0 : on.length) > 1 && (e.runtime.editorErrorMessage = "Lollipop charts must use only one data series"), e.visualizationType === "Paired Bar" && ((Ft = e == null ? void 0 : e.series) == null ? void 0 : Ft.length) !== 2 && (e.runtime.editorErrorMessage = "Paired Bar charts must use exactly two data series"), e.visualizationType === "Deviation Bar" && ((Ht = e == null ? void 0 : e.series) == null ? void 0 : Ht.length) !== 1 && (e.runtime.editorErrorMessage = "Deviation Bar charts must use exactly one data series"), e.isLollipopChart && ((Pn = e == null ? void 0 : e.series) == null ? void 0 : Pn.length) === 0 && (e.runtime.editorErrorMessage = "Add a data series");
  const en = e.orientation === "horizontal" ? "xAxis" : "yAxis", [ut, xn] = fe.useState({ maxMsg: "", minMsg: "", rightMaxMessage: "", minMsgRight: "" }), Nn = () => {
    const B = e[en].max, I = e[en].rightMax;
    let Q = "", pe = "";
    if (e.visualizationType !== "Combo")
      switch (!0) {
        case (B && parseFloat(B) < parseFloat(_) && $):
          Q = "Max value must be more than " + _;
          break;
        case (B && parseFloat(B) < 0 && !$):
          Q = "Value must be more than or equal to 0";
          break;
        default:
          Q = "";
      }
    if (e.visualizationType === "Combo")
      switch (!0) {
        case (B && parseFloat(B) < W):
          Q = "Max value must be more than " + W;
          break;
        case (I && parseFloat(I) < Y):
          pe = "Max value must be more than " + Y;
          break;
        case (B && parseFloat(B) < 0 && !$):
          Q = "Value must be more than or equal to 0";
          break;
        default:
          Q = "";
      }
    xn((Be) => ({ ...Be, maxMsg: Q, rightMaxMessage: pe }));
  }, j = () => {
    const B = parseFloat(e[en].min);
    let I = Number(O), Q = "";
    switch (!0) {
      case (e.useLogScale && ["Line", "Combo", "Bar"].includes(e.visualizationType) && B < 0):
        Q = "Negative numbers are not supported in logarithmic scale";
        break;
      case ((e.visualizationType === "Line" || e.visualizationType === "Spark Line") && B > I):
        Q = "Value should not exceed " + O;
        break;
      case (e.visualizationType === "Combo" && L && B > I):
        Q = "Value should not exceed " + O;
        break;
      case ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && !L) && I > 0 && B > 0):
        Q = e.useLogScale ? "Value must be equal to 0" : "Value must be less than or equal to 0";
        break;
      case (e.visualizationType === "Deviation Bar" && B >= Math.min(I, e.xAxis.target)):
        Q = "Value must be less than " + Math.min(I, e.xAxis.target);
        break;
      case (e.visualizationType !== "Deviation Bar" && B && I < 0 && B > I):
        Q = "Value should not exceed " + O;
        break;
      default:
        Q = "";
    }
    xn((pe) => ({ ...pe, minMsg: Q }));
  };
  fe.useEffect(() => {
    j(), Nn();
  }, [O, _, e]);
  const Pe = ((Rn = e == null ? void 0 : e.dataKey) == null ? void 0 : Rn.includes("http://")) || ((Qn = e == null ? void 0 : e.dataKey) == null ? void 0 : Qn.includes("https://")), Ie = () => {
    var B, I;
    if (k !== void 0 && k && !((B = e == null ? void 0 : e.xAxis) != null && B.dataKey)) {
      let Q = Bt(!1);
      if (Q.includes("Date"))
        return "Date";
      if (Q.includes("Race"))
        return "Race";
      if (Q.includes("Month"))
        return "Month";
    }
    return ((I = e == null ? void 0 : e.xAxis) == null ? void 0 : I.dataKey) || "";
  }, Oe = () => {
    if (k !== void 0 && k && Bt(!1).length > 0) {
      let B = Bt(!1).filter((I) => I !== Ie());
      if (B.length > 0)
        return B[0];
    }
    return "";
  };
  if (k && !e.xAxis.dataKey && (e.xAxis.dataKey = Ie()), k && ((Wn = e == null ? void 0 : e.series) == null ? void 0 : Wn.length) === 0) {
    let B = Oe();
    B !== "" && vn(B), k && console.log("### COVE DEBUG: Chart: Setting default datacol=", B);
  }
  const nt = ["Area Chart", "Combo", "Line", "Bar", "Forecasting", "Scatter Plot", "Paired Bar", "Deviation Bar"], Ye = [
    /* @__PURE__ */ a.createElement("option", { value: "", key: "Select Option" }, "- Select Option -")
  ];
  if (e.data && e.series) {
    Object.keys(((Qt = e.data) == null ? void 0 : Qt[0]) || []).map((I) => {
      const Q = e == null ? void 0 : e.series.some((pe) => pe.dataKey === I);
      if (I !== e.xAxis.dataKey && !Q)
        return Ye.push(
          /* @__PURE__ */ a.createElement("option", { value: I, key: I }, I)
        );
    });
    let B = {};
    e.data.forEach((I) => {
      Object.keys(I).forEach((Q) => {
        B[Q] = B[Q] || [];
        const pe = typeof I[Q] == "number" ? I[Q].toString() : I[Q];
        B[Q].indexOf(pe) === -1 && B[Q].push(pe);
      });
    });
  }
  if (!e.data && n) {
    if (!n[0])
      return;
    Object.keys(n[0]).map((I) => {
      const Q = n.some((pe) => pe.dataKey === I);
      if (I !== e.xAxis.dataKey && !Q)
        return Ye.push(
          /* @__PURE__ */ a.createElement("option", { value: I, key: I }, I)
        );
    });
    let B = {};
    n.forEach((I) => {
      Object.keys(I).forEach((Q) => {
        B[Q] = B[Q] || [];
        const pe = typeof I[Q] == "number" ? I[Q].toString() : I[Q];
        B[Q].indexOf(pe) === -1 && B[Q].push(pe);
      });
    });
  }
  const rt = (B) => {
    const I = Gm.cloneDeep(e.columns);
    delete I[B], t({
      ...e,
      columns: I
    });
  }, Qe = async (B, I, Q) => {
    switch (I) {
      case "name":
        t({
          ...e,
          columns: {
            ...e.columns,
            [B]: {
              ...e.columns[B],
              [I]: Q
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
              [I]: Q
            }
          }
        });
        break;
    }
  }, {
    highlightedBarValues: ze,
    highlightedSeriesValues: Nt,
    handleUpdateHighlightedBar: $t,
    handleAddNewHighlightedBar: Zt,
    handleRemoveHighlightedBar: It,
    handleUpdateHighlightedBarColor: Lt,
    handleHighlightedBarLegendLabel: kt,
    handleUpdateHighlightedBorderWidth: Tt
  } = Vu(e, t), ht = e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1, rn = () => {
    const B = n.map((I) => I[e.legend.colorCode]);
    return ht ? B : Bt(!1).filter((I) => I !== e.xAxis.dataKey);
  }, mn = (B) => {
    t({ ...e, legend: { ...e.legend, seriesHighlight: B } });
  }, Rt = (B, I, Q) => {
    var je;
    const pe = { ...e[B], [I]: Q }, Be = { ...e, [B]: pe };
    Q === "highlight" && ((je = e.legend.seriesHighlight) != null && je.length) && (Be.legend.seriesHighlight.length = 0), t(Be);
  }, gn = {
    addNewExclusion: fn,
    data: n,
    editColumn: Qe,
    getColumns: Bt,
    getDataValueOptions: pn,
    getDataValues: En,
    getItemStyle: Mt,
    handleSeriesChange: Ve,
    handleAddNewHighlightedBar: Zt,
    setCategoryAxis: Ie,
    sortSeries: st,
    updateField: Ae,
    warningMsg: ut,
    highlightedBarValues: ze,
    handleHighlightedBarLegendLabel: kt,
    handleUpdateHighlightedBar: $t,
    handleRemoveHighlightedBar: It,
    isPaletteReversed: e.isPaletteReversed,
    highlightedSeriesValues: Nt,
    handleUpdateHighlightedBorderWidth: Tt,
    handleUpdateHighlightedBarColor: Lt,
    setLollipopShape: _t
  };
  return /* @__PURE__ */ a.createElement(Of.Provider, { value: gn }, /* @__PURE__ */ a.createElement(Dr, { component: "EditorPanel" }, /* @__PURE__ */ a.createElement(sd.Sidebar, { displayPanel: mt, isDashboard: g, title: "Configure Chart", onBackClick: Ee }, /* @__PURE__ */ a.createElement(ki, { allowZeroExpanded: !0 }, /* @__PURE__ */ a.createElement(Pa.General, { name: "General" }), /* @__PURE__ */ a.createElement(Pa.ForestPlot, { name: "Forest Plot Settings" }), /* @__PURE__ */ a.createElement(Pa.Sankey, { name: "Sankey" }), e.visualizationType !== "Pie" && e.visualizationType !== "Forest Plot" && e.visualizationType !== "Sankey" && /* @__PURE__ */ a.createElement(Tn, null, /* @__PURE__ */ a.createElement(wn, null, /* @__PURE__ */ a.createElement(Cn, null, "Data Series ", (!e.series || e.series.length === 0 || e.visualizationType === "Paired Bar" && e.series.length < 2) && /* @__PURE__ */ a.createElement(uu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ a.createElement(An, null, (!e.series || e.series.length === 0) && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ a.createElement("p", { className: "warning" }, "At least one series is required"), (!e.series || e.series.length === 0 || e.series.length < 2) && e.visualizationType === "Paired Bar" && /* @__PURE__ */ a.createElement("p", { className: "warning" }, "Select two data series for paired bar chart (e.g., Male and Female)."), /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
    dt,
    {
      fieldName: "visualizationType",
      label: "Add Data Series",
      initial: "Select",
      onChange: (B) => {
        B.target.value !== "" && B.target.value !== "Select" && vn(B.target.value), B.target.value = "";
      },
      options: Bt()
    }
  ), e.series && e.series.length !== 0 && /* @__PURE__ */ a.createElement(Pa.Series.Wrapper, { getColumns: Bt }, /* @__PURE__ */ a.createElement("fieldset", null, /* @__PURE__ */ a.createElement("legend", { className: "edit-label float-left" }, "Displaying"), /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "A data series is a set of related data points plotted in a chart and typically represented in the chart legend.")))), /* @__PURE__ */ a.createElement(wm, { onDragEnd: ({ source: B, destination: I }) => Ve(B.index, I.index) }, /* @__PURE__ */ a.createElement(Cm, { droppableId: "filter_order" }, (B) => /* @__PURE__ */ a.createElement("ul", { ...B.droppableProps, className: "series-list", ref: B.innerRef }, /* @__PURE__ */ a.createElement(Pa.Series.List, { series: e.series, getItemStyle: Mt, sortableItemStyles: cn, chartsWithOptions: nt }), B.placeholder))))), e.series && e.series.length <= 1 && e.visualizationType === "Bar" && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("span", { className: "divider-heading" }, "Confidence Keys"), /* @__PURE__ */ a.createElement(dt, { value: e.confidenceKeys.upper || "", section: "confidenceKeys", fieldName: "upper", label: "Upper", updateField: Ae, initial: "Select", options: Bt() }), /* @__PURE__ */ a.createElement(dt, { value: e.confidenceKeys.lower || "", section: "confidenceKeys", fieldName: "lower", label: "Lower", updateField: Ae, initial: "Select", options: Bt() })), un() && e.series && e.series.length === 1 && /* @__PURE__ */ a.createElement(dt, { fieldName: "visualizationType", label: "Rank by Value", initial: "Select", onChange: (B) => st(B.target.value), options: ["asc", "desc"] }), Et() && /* @__PURE__ */ a.createElement(rS, { config: e, updateConfig: t, data: n }))), /* @__PURE__ */ a.createElement(Pa.BoxPlot, { name: "Measures" }), Ot() && /* @__PURE__ */ a.createElement(Tn, null, /* @__PURE__ */ a.createElement(wn, null, /* @__PURE__ */ a.createElement(Cn, null, e.visualizationType === "Pie" ? "Data Format" : e.orientation === "vertical" ? "Left Value Axis" : "Value Axis", e.visualizationType === "Pie" && !e.yAxis.dataKey && /* @__PURE__ */ a.createElement(uu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ a.createElement(An, null, e.visualizationType === "Pie" && /* @__PURE__ */ a.createElement(
    dt,
    {
      value: e.yAxis.dataKey || "",
      section: "yAxis",
      fieldName: "dataKey",
      label: "Data Column",
      initial: "Select",
      required: !0,
      updateField: Ae,
      options: Bt(!1),
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "Select the source data to be visually represented.")))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(He, { value: e.yAxis.label, section: "yAxis", fieldName: "label", label: "Label ", updateField: Ae }), e.runtime.seriesKeys && e.runtime.seriesKeys.length === 1 && !["Box Plot", "Deviation Bar", "Forest Plot"].includes(e.visualizationType) && /* @__PURE__ */ a.createElement(et, { value: e.isLegendValue, fieldName: "isLegendValue", label: "Use Legend Value in Hover", updateField: Ae }), /* @__PURE__ */ a.createElement(He, { value: e.yAxis.numTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "numTicks", label: "Number of ticks", className: "number-narrow", updateField: Ae }), /* @__PURE__ */ a.createElement(
    He,
    {
      value: e.yAxis.size,
      type: "number",
      section: "yAxis",
      fieldName: "size",
      label: e.orientation === "horizontal" ? "Size (Height)" : "Size (Width)",
      className: "number-narrow",
      updateField: Ae,
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, `Increase the size if elements in the ${e.orientation} axis are being crowded or hidden behind other elements.  Decrease if less space is required for the value axis.`)))
    }
  ), e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ a.createElement(et, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: Ae }), (e.orientation === "vertical" || !e.isResponsiveTicks) && /* @__PURE__ */ a.createElement(He, { value: e.yAxis.tickRotation || 0, type: "number", min: 0, section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: Ae }), e.isResponsiveTicks && e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ a.createElement(
    He,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: Ae,
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" && /* @__PURE__ */ a.createElement(He, { value: e.xAxis.labelOffset, section: "xAxis", fieldName: "labelOffset", label: "Label offset", type: "number", className: "number-narrow", updateField: Ae }), vt() && /* @__PURE__ */ a.createElement(et, { value: e.yAxis.gridLines, section: "yAxis", fieldName: "gridLines", label: "Show Gridlines", updateField: Ae }), /* @__PURE__ */ a.createElement(et, { value: e.yAxis.enablePadding, section: "yAxis", fieldName: "enablePadding", label: "Add Padding to Value Axis Scale", updateField: Ae }), e.yAxis.enablePadding && /* @__PURE__ */ a.createElement(He, { type: "number", section: "yAxis", fieldName: "scalePadding", label: "Padding Percentage", className: "number-narrow", updateField: Ae, value: e.yAxis.scalePadding }), e.visualizationSubType === "regular" && e.visualizationType !== "Forest Plot" && /* @__PURE__ */ a.createElement(et, { value: e.useLogScale, fieldName: "useLogScale", label: "use logarithmic scale", updateField: Ae })), /* @__PURE__ */ a.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ a.createElement(et, { value: e.dataFormat.commas, section: "dataFormat", fieldName: "commas", label: "Add commas", updateField: Ae }), /* @__PURE__ */ a.createElement(
    et,
    {
      value: e.dataFormat.abbreviated,
      section: "dataFormat",
      fieldName: "abbreviated",
      label: "Abbreviate Axis Values",
      updateField: Ae,
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  ), /* @__PURE__ */ a.createElement(He, { value: e.dataFormat.roundTo ? e.dataFormat.roundTo : 0, type: "number", section: "dataFormat", fieldName: "roundTo", label: "Round to decimal point", className: "number-narrow", updateField: Ae, min: 0 }), /* @__PURE__ */ a.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ a.createElement(
    He,
    {
      value: e.dataFormat.prefix,
      section: "dataFormat",
      fieldName: "prefix",
      label: "Prefix",
      updateField: Ae,
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ a.createElement(Te.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ a.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ a.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ a.createElement(
    He,
    {
      value: e.dataFormat.suffix,
      section: "dataFormat",
      fieldName: "suffix",
      label: "Suffix",
      updateField: Ae,
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ a.createElement(Te.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ a.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ a.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), e.orientation === "horizontal" ? (
    // horizontal - x is vertical y is horizontal
    /* @__PURE__ */ a.createElement(a.Fragment, null, Ct() && /* @__PURE__ */ a.createElement(et, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Ae }), Vt() && /* @__PURE__ */ a.createElement(et, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Label", updateField: Ae }), Je() && /* @__PURE__ */ a.createElement(et, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: Ae }), Le() && /* @__PURE__ */ a.createElement(He, { value: e.xAxis.max, section: "xAxis", fieldName: "max", label: "max value", type: "number", placeholder: "Auto", updateField: Ae }), /* @__PURE__ */ a.createElement("span", { style: { color: "red", display: "block" } }, ut.maxMsg), ie() && /* @__PURE__ */ a.createElement(He, { value: e.xAxis.min, section: "xAxis", fieldName: "min", type: "number", label: "min value", placeholder: "Auto", updateField: Ae }), /* @__PURE__ */ a.createElement("span", { style: { color: "red", display: "block" } }, ut.minMsg), e.visualizationType === "Deviation Bar" && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(He, { value: e.xAxis.target, section: "xAxis", fieldName: "target", type: "number", label: "Deviation point", placeholder: "Auto", updateField: Ae }), /* @__PURE__ */ a.createElement(He, { value: e.xAxis.targetLabel || "Target", section: "xAxis", fieldName: "targetLabel", type: "text", label: "Deviation point Label", updateField: Ae }), /* @__PURE__ */ a.createElement(et, { value: e.xAxis.showTargetLabel, section: "xAxis", fieldName: "showTargetLabel", label: "Show Deviation point label", updateField: Ae })))
  ) : e.visualizationType !== "Pie" && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(et, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Ae }), /* @__PURE__ */ a.createElement(et, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Label", updateField: Ae }), /* @__PURE__ */ a.createElement(et, { value: e.yAxis.hideTicks, section: "yAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: Ae }), /* @__PURE__ */ a.createElement(He, { value: e.yAxis.max, section: "yAxis", fieldName: "max", type: "number", label: "left axis max value", placeholder: "Auto", updateField: Ae }), /* @__PURE__ */ a.createElement("span", { style: { color: "red", display: "block" } }, ut.maxMsg), /* @__PURE__ */ a.createElement(He, { value: e.yAxis.min, section: "yAxis", fieldName: "min", type: "number", label: "left axis min value", placeholder: "Auto", updateField: Ae }), /* @__PURE__ */ a.createElement("span", { style: { color: "red", display: "block" } }, ut.minMsg)), ue() && e.orientation !== "horizontal" && /* @__PURE__ */ a.createElement("div", { className: "edit-block" }, /* @__PURE__ */ a.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ a.createElement(ki, { allowZeroExpanded: !0 }, (fr = (bn = e.yAxis) == null ? void 0 : bn.anchors) == null ? void 0 : fr.map((B, I) => /* @__PURE__ */ a.createElement(Tn, { className: "series-item series-item--chart", key: `yaxis-anchors-2-${I}` }, /* @__PURE__ */ a.createElement(wn, { className: "series-item__title" }, /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(Cn, { className: "accordion__button accordion__button" }, "Anchor ", I + 1, /* @__PURE__ */ a.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (Q) => {
        Q.preventDefault();
        const pe = [...e.yAxis.anchors];
        pe.splice(I, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: pe
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ a.createElement(An, null, /* @__PURE__ */ a.createElement("label", null, /* @__PURE__ */ a.createElement("span", null, "Anchor Value"), /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ a.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[I].value ? e.yAxis.anchors[I].value : "",
      onChange: (Q) => {
        Q.preventDefault();
        const pe = [...e.yAxis.anchors];
        pe[I].value = Q.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: pe
          }
        });
      }
    }
  )), /* @__PURE__ */ a.createElement("label", null, /* @__PURE__ */ a.createElement("span", null, "Anchor Color"), /* @__PURE__ */ a.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[I].color ? e.yAxis.anchors[I].color : "",
      onChange: (Q) => {
        Q.preventDefault();
        const pe = [...e.yAxis.anchors];
        pe[I].color = Q.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: pe
          }
        });
      }
    }
  )), /* @__PURE__ */ a.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ a.createElement(
    "select",
    {
      value: e.yAxis.anchors[I].lineStyle || "",
      onChange: (Q) => {
        const pe = [...e.yAxis.anchors];
        pe[I].lineStyle = Q.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: pe
          }
        });
      }
    },
    /* @__PURE__ */ a.createElement("option", null, "Select"),
    M.map((Q) => /* @__PURE__ */ a.createElement("option", { key: Q.key }, Q.value))
  )))))), /* @__PURE__ */ a.createElement(
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
  )), ue() && e.orientation === "horizontal" && /* @__PURE__ */ a.createElement("div", { className: "edit-block" }, /* @__PURE__ */ a.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ a.createElement(ki, { allowZeroExpanded: !0 }, (or = (ir = e.xAxis) == null ? void 0 : ir.anchors) == null ? void 0 : or.map((B, I) => /* @__PURE__ */ a.createElement(Tn, { className: "series-item series-item--chart", key: `xaxis-anchors-${I}` }, /* @__PURE__ */ a.createElement(wn, { className: "series-item__title" }, /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(Cn, { className: "accordion__button accordion__button" }, "Anchor ", I + 1, /* @__PURE__ */ a.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (Q) => {
        Q.preventDefault();
        const pe = [...e.xAxis.anchors];
        pe.splice(I, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: pe
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ a.createElement(An, null, /* @__PURE__ */ a.createElement("label", null, /* @__PURE__ */ a.createElement("span", null, "Anchor Value"), /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ a.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[I].value ? e.xAxis.anchors[I].value : "",
      onChange: (Q) => {
        Q.preventDefault();
        const pe = [...e.xAxis.anchors];
        pe[I].value = Q.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: pe
          }
        });
      }
    }
  )), /* @__PURE__ */ a.createElement("label", null, /* @__PURE__ */ a.createElement("span", null, "Anchor Color"), /* @__PURE__ */ a.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[I].color ? e.xAxis.anchors[I].color : "",
      onChange: (Q) => {
        Q.preventDefault();
        const pe = [...e.xAxis.anchors];
        pe[I].color = Q.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: pe
          }
        });
      }
    }
  )), /* @__PURE__ */ a.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ a.createElement(
    "select",
    {
      value: e.xAxis.anchors[I].lineStyle || "",
      onChange: (Q) => {
        const pe = [...e.xAxis.anchors];
        pe[I].lineStyle = Q.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: pe
          }
        });
      }
    },
    /* @__PURE__ */ a.createElement("option", null, "Select"),
    M.map((Q) => /* @__PURE__ */ a.createElement("option", { key: Q.key }, Q.value))
  )))))), /* @__PURE__ */ a.createElement(
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
  )))), Gt && /* @__PURE__ */ a.createElement(Tn, null, /* @__PURE__ */ a.createElement(wn, null, /* @__PURE__ */ a.createElement(Cn, null, "Right Value Axis")), /* @__PURE__ */ a.createElement(An, null, /* @__PURE__ */ a.createElement(He, { value: e.yAxis.rightLabel, section: "yAxis", fieldName: "rightLabel", label: "Label", updateField: Ae }), /* @__PURE__ */ a.createElement(He, { value: e.yAxis.rightNumTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "rightNumTicks", label: "Number of ticks", className: "number-narrow", updateField: Ae }), /* @__PURE__ */ a.createElement(He, { value: e.yAxis.rightAxisSize, type: "number", section: "yAxis", fieldName: "rightAxisSize", label: "Size (Width)", className: "number-narrow", updateField: Ae }), /* @__PURE__ */ a.createElement(He, { value: e.yAxis.rightLabelOffsetSize, type: "number", section: "yAxis", fieldName: "rightLabelOffsetSize", label: "Label Offset", className: "number-narrow", updateField: Ae }), /* @__PURE__ */ a.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ a.createElement(et, { value: e.dataFormat.rightCommas, section: "dataFormat", fieldName: "rightCommas", label: "Add commas", updateField: Ae }), /* @__PURE__ */ a.createElement(He, { value: e.dataFormat.rightRoundTo, type: "number", section: "dataFormat", fieldName: "rightRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: Ae, min: 0 }), /* @__PURE__ */ a.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ a.createElement(
    He,
    {
      value: e.dataFormat.rightPrefix,
      section: "dataFormat",
      fieldName: "rightPrefix",
      label: "Prefix",
      updateField: Ae,
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ a.createElement(Te.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ a.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ a.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ a.createElement(
    He,
    {
      value: e.dataFormat.rightSuffix,
      section: "dataFormat",
      fieldName: "rightSuffix",
      label: "Suffix",
      updateField: Ae,
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ a.createElement(Te.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ a.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ a.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), /* @__PURE__ */ a.createElement(et, { value: e.yAxis.rightHideAxis, section: "yAxis", fieldName: "rightHideAxis", label: "Hide Axis", updateField: Ae }), /* @__PURE__ */ a.createElement(et, { value: e.yAxis.rightHideLabel, section: "yAxis", fieldName: "rightHideLabel", label: "Hide Label", updateField: Ae }), /* @__PURE__ */ a.createElement(et, { value: e.yAxis.rightHideTicks, section: "yAxis", fieldName: "rightHideTicks", label: "Hide Ticks", updateField: Ae }), /* @__PURE__ */ a.createElement(He, { value: e.yAxis.max, section: "yAxis", fieldName: "rightMax", type: "number", label: "right axis max value", placeholder: "Auto", updateField: Ae }), /* @__PURE__ */ a.createElement("span", { style: { color: "red", display: "block" } }, ut.rightMaxMessage), /* @__PURE__ */ a.createElement(He, { value: e.yAxis.min, section: "yAxis", fieldName: "rightMin", type: "number", label: "right axis min value", placeholder: "Auto", updateField: Ae }), /* @__PURE__ */ a.createElement("span", { style: { color: "red", display: "block" } }, ut.minMsg))), we() && /* @__PURE__ */ a.createElement(Tn, null, /* @__PURE__ */ a.createElement(wn, null, /* @__PURE__ */ a.createElement(Cn, null, e.visualizationType === "Pie" ? "Segments" : "Date/Category Axis", !e.xAxis.dataKey && /* @__PURE__ */ a.createElement(uu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ a.createElement(An, null, e.visualizationType !== "Pie" && /* @__PURE__ */ a.createElement(a.Fragment, null, e.visualizationType !== "Forest Plot" && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("label", null, /* @__PURE__ */ a.createElement("span", { className: "edit-label" }, "Data Scaling Type", /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none", display: "inline-block" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ a.createElement(Te.Content, null, "Linear scales are employed for quantitative data, while time scales are used for time-series data."))), /* @__PURE__ */ a.createElement(
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
    /* @__PURE__ */ a.createElement("option", { value: "categorical" }, "Categorical (Linear Scale)"),
    /* @__PURE__ */ a.createElement("option", { value: "date" }, "Date (Linear Scale)"),
    /* @__PURE__ */ a.createElement("option", { value: "date-time" }, "Date (Date Time Scale)"),
    e.visualizationType === "Scatter Plot" && /* @__PURE__ */ a.createElement("option", { value: "continuous" }, "Continuous")
  )), /* @__PURE__ */ a.createElement(et, { value: e.xAxis.manual, section: "xAxis", fieldName: "manual", label: "Manual Ticks", updateField: Ae }), _e() && /* @__PURE__ */ a.createElement(
    He,
    {
      value: e.xAxis.padding,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "padding",
      label: "Padding (Percent)",
      className: "number-narrow",
      updateField: Ae,
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "For use with date scale. Extends the earliest and latest dates represented on the scale by the percentage specified.")))
    }
  )), /* @__PURE__ */ a.createElement(
    dt,
    {
      value: e.xAxis.dataKey || Ie() || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Data Key",
      initial: "Select",
      required: !0,
      updateField: Ae,
      options: Bt(!1),
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
    }
  )), e.visualizationType === "Pie" && /* @__PURE__ */ a.createElement(
    dt,
    {
      value: e.xAxis.dataKey || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Segment Labels",
      initial: "Select",
      required: !0,
      updateField: Ae,
      options: Bt(!1),
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, 'Select the source row or column that contains the segment labels. Depending on the data structure, it may be listed as "Key."')))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(He, { value: e.xAxis.label, section: "xAxis", fieldName: "label", label: "Label", updateField: Ae }), e.xAxis.type === "continuous" && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
    He,
    {
      value: e.dataFormat.bottomPrefix,
      section: "dataFormat",
      fieldName: "bottomPrefix",
      label: "Prefix",
      updateField: Ae,
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ a.createElement(
    He,
    {
      value: e.dataFormat.bottomSuffix,
      section: "dataFormat",
      fieldName: "bottomSuffix",
      label: "Suffix",
      updateField: Ae,
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ a.createElement(
    et,
    {
      value: e.dataFormat.bottomAbbreviated,
      section: "dataFormat",
      fieldName: "bottomAbbreviated",
      label: "Abbreviate Axis Values",
      updateField: Ae,
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  )), yn(e.xAxis) && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("p", { style: { padding: "1.5em 0 0.5em", fontSize: ".9rem", lineHeight: "1rem" } }, "Format how charts should parse and display your dates using", " ", /* @__PURE__ */ a.createElement("a", { href: "https://github.com/d3/d3-time-format#locale_format", target: "_blank", rel: "noreferrer" }, "these guidelines"), "."), /* @__PURE__ */ a.createElement(
    He,
    {
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "This field specifies the pattern used to read and interpret dates in your dataset, ensuring the dates are correctly understood and processed. "))),
      value: e.xAxis.dateParseFormat,
      section: "xAxis",
      fieldName: "dateParseFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "Date Parse Format",
      updateField: Ae
    }
  ), /* @__PURE__ */ a.createElement(
    He,
    {
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, " Adjusts the date display format on the axis for clear, visual date representation."))),
      value: e.xAxis.dateDisplayFormat,
      section: "xAxis",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "AXIS DATE DISPLAY FORMAT",
      updateField: Ae
    }
  ), /* @__PURE__ */ a.createElement(
    He,
    {
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "Specify a custom format for displaying dates in data table. If left empty, dates will adopt the Axis Date Display format. "))),
      value: e.table.dateDisplayFormat,
      section: "table",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "DATA TABLE DATE DISPLAY FORMAT",
      updateField: Ae
    }
  ), /* @__PURE__ */ a.createElement(
    He,
    {
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "Specify a custom format for displaying dates on hovers. If left empty, dates will adopt the Axis Date Display format. "))),
      value: e.tooltips.dateDisplayFormat,
      section: "tooltips",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "HOVER DATE DISPLAY FORMAT",
      updateField: Ae
    }
  )), /* @__PURE__ */ a.createElement(
    et,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: e.xAxis.type === "date" ? "Limit by start and/or end dates" : "Exclude one or more values",
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "When this option is checked, you can select source-file values for exclusion from the date/category axis. "))),
      updateField: Ae
    }
  ), e.exclusions.active && /* @__PURE__ */ a.createElement(a.Fragment, null, e.xAxis.type === "categorical" && /* @__PURE__ */ a.createElement(a.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("fieldset", null, /* @__PURE__ */ a.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ a.createElement(ot, null)), /* @__PURE__ */ a.createElement(
    dt,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (B) => {
        B.target.value !== "" && B.target.value !== "Select" && fn(B.target.value), B.target.value = "";
      },
      options: En(e.xAxis.dataKey, !0)
    }
  )), e.xAxis.type === "date" && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(He, { type: "date", section: "exclusions", fieldName: "dateStart", label: "Start Date", updateField: Ae, value: e.exclusions.dateStart || "" }), /* @__PURE__ */ a.createElement(He, { type: "date", section: "exclusions", fieldName: "dateEnd", label: "End Date", updateField: Ae, value: e.exclusions.dateEnd || "" }))), De() && e.xAxis.type !== "date-time" && e.xAxis.manual && /* @__PURE__ */ a.createElement(He, { value: e.xAxis.manualStep, placeholder: "Auto", type: "number", min: 1, section: "xAxis", fieldName: "manualStep", label: "Step count", className: "number-narrow", updateField: Ae }), De() && (e.xAxis.type === "date-time" || !e.xAxis.manual) && /* @__PURE__ */ a.createElement(He, { value: e.xAxis.numTicks, placeholder: "Auto", type: "number", min: 1, section: "xAxis", fieldName: "numTicks", label: "Number of ticks", className: "number-narrow", updateField: Ae }), _n() && /* @__PURE__ */ a.createElement(He, { value: e.xAxis.size, type: "number", min: 0, section: "xAxis", fieldName: "size", label: e.orientation === "horizontal" ? "Size (Width)" : "Size (Height)", className: "number-narrow", updateField: Ae }), (e.xAxis.type === "continuous" || e.forestPlot.type === "Logarithmic") && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(et, { value: e.dataFormat.bottomCommas, section: "dataFormat", fieldName: "bottomCommas", label: "Add commas", updateField: Ae }), /* @__PURE__ */ a.createElement(He, { value: e.dataFormat.bottomRoundTo, type: "number", section: "dataFormat", fieldName: "bottomRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: Ae, min: 0 })), Mn() && e.orientation === "vertical" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ a.createElement(et, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: Ae }), (e.orientation === "horizontal" || !e.isResponsiveTicks) && Ge() && /* @__PURE__ */ a.createElement(He, { value: e.xAxis.tickRotation, type: "number", min: 0, section: "xAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: Ae }), e.orientation === "vertical" && e.isResponsiveTicks && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ a.createElement(
    He,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: Ae,
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" ? /* @__PURE__ */ a.createElement(a.Fragment, null, We() && /* @__PURE__ */ a.createElement(et, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Ae }), Me() && /* @__PURE__ */ a.createElement(et, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Label", updateField: Ae })) : /* @__PURE__ */ a.createElement(a.Fragment, null, We() && /* @__PURE__ */ a.createElement(et, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: Ae }), Me() && /* @__PURE__ */ a.createElement(et, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Label", updateField: Ae }), qe() && /* @__PURE__ */ a.createElement(et, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: Ae })), ((x = e.series) == null ? void 0 : x.length) === 1 && e.visualizationType === "Bar" && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("label", { htmlFor: "barHighlight" }, "Bar Highlighting"), e.series.length === 1 && ze.map((B, I) => /* @__PURE__ */ a.createElement("fieldset", null, /* @__PURE__ */ a.createElement("div", { className: "edit-block", key: `highlighted-bar-${I}` }, /* @__PURE__ */ a.createElement("button", { className: "remove-column", onClick: (Q) => It(Q, I) }, "Remove"), /* @__PURE__ */ a.createElement("p", null, "Highlighted Bar ", I + 1), /* @__PURE__ */ a.createElement("label", null, /* @__PURE__ */ a.createElement("span", { className: "edit-label column-heading" }, "Value"), /* @__PURE__ */ a.createElement("select", { value: e.highlightedBarValues[I].value, onChange: (Q) => $t(Q, I) }, /* @__PURE__ */ a.createElement("option", { value: "" }, "- Select Value -"), Nt && [...new Set(Nt)].sort().map((Q) => /* @__PURE__ */ a.createElement("option", { key: `special-class-value-option-${I}-${Q}` }, Q)))), /* @__PURE__ */ a.createElement("label", null, /* @__PURE__ */ a.createElement("span", { className: "edit-label column-heading" }, "Color"), /* @__PURE__ */ a.createElement("input", { type: "text", value: e.highlightedBarValues[I].color ? e.highlightedBarValues[I].color : "", onChange: (Q) => Lt(Q, I) })), /* @__PURE__ */ a.createElement("label", null, /* @__PURE__ */ a.createElement("span", { className: "edit-label column-heading" }, "Border Width"), /* @__PURE__ */ a.createElement("input", { max: "5", min: "0", type: "number", value: e.highlightedBarValues[I].borderWidth ? e.highlightedBarValues[I].borderWidth : "", onChange: (Q) => Tt(Q, I) })), /* @__PURE__ */ a.createElement("label", null, /* @__PURE__ */ a.createElement("span", { className: "edit-label column-heading" }, "Legend Label"), /* @__PURE__ */ a.createElement("input", { type: "text", value: e.highlightedBarValues[I].legendLabel ? e.highlightedBarValues[I].legendLabel : "", onChange: (Q) => kt(Q, I) }))))), /* @__PURE__ */ a.createElement("button", { className: "btn full-width", onClick: (B) => Zt(B) }, "Add Highlighted Bar"))), e.visualizationType === "Pie" && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
    et,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: "Exclude one or more values",
      updateField: Ae,
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "When this option is checked, you can select values for exclusion from the pie segments.")))
    }
  ), e.exclusions.active && /* @__PURE__ */ a.createElement(a.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("fieldset", null, /* @__PURE__ */ a.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ a.createElement(ot, null)), /* @__PURE__ */ a.createElement(
    dt,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (B) => {
        B.target.value !== "" && B.target.value !== "Select" && fn(B.target.value), B.target.value = "";
      },
      options: En(e.xAxis.dataKey, !0)
    }
  ))), ue() && e.orientation !== "horizontal" && /* @__PURE__ */ a.createElement("div", { className: "edit-block" }, /* @__PURE__ */ a.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ a.createElement(ki, { allowZeroExpanded: !0 }, (z = (A = e.xAxis) == null ? void 0 : A.anchors) == null ? void 0 : z.map((B, I) => /* @__PURE__ */ a.createElement(Tn, { className: "series-item series-item--chart", key: `xaxis-anchors-2-${I}` }, /* @__PURE__ */ a.createElement(wn, { className: "series-item__title" }, /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(Cn, { className: "accordion__button accordion__button" }, "Anchor ", I + 1, /* @__PURE__ */ a.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (Q) => {
        Q.preventDefault();
        const pe = [...e.xAxis.anchors];
        pe.splice(I, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: pe
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ a.createElement(An, null, /* @__PURE__ */ a.createElement("label", null, /* @__PURE__ */ a.createElement("span", null, "Anchor Value"), /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ a.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[I].value ? e.xAxis.anchors[I].value : "",
      onChange: (Q) => {
        Q.preventDefault();
        const pe = [...e.xAxis.anchors];
        pe[I].value = Q.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: pe
          }
        });
      }
    }
  )), /* @__PURE__ */ a.createElement("label", null, /* @__PURE__ */ a.createElement("span", null, "Anchor Color"), /* @__PURE__ */ a.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[I].color ? e.xAxis.anchors[I].color : "",
      onChange: (Q) => {
        Q.preventDefault();
        const pe = [...e.xAxis.anchors];
        pe[I].color = Q.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: pe
          }
        });
      }
    }
  )), /* @__PURE__ */ a.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ a.createElement(
    "select",
    {
      value: e.xAxis.anchors[I].lineStyle || "",
      onChange: (Q) => {
        const pe = [...e.xAxis.anchors];
        pe[I].lineStyle = Q.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: pe
          }
        });
      }
    },
    /* @__PURE__ */ a.createElement("option", null, "Select"),
    M.map((Q) => /* @__PURE__ */ a.createElement("option", { key: Q.key }, Q.value))
  )))))), /* @__PURE__ */ a.createElement(
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
  )), ue() && e.orientation === "horizontal" && /* @__PURE__ */ a.createElement("div", { className: "edit-block" }, /* @__PURE__ */ a.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ a.createElement(ki, { allowZeroExpanded: !0 }, (ye = (X = e.yAxis) == null ? void 0 : X.anchors) == null ? void 0 : ye.map((B, I) => /* @__PURE__ */ a.createElement(Tn, { className: "series-item series-item--chart", key: `accordion-yaxis-anchors-${I}` }, /* @__PURE__ */ a.createElement(wn, { className: "series-item__title" }, /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(Cn, { className: "accordion__button accordion__button" }, "Anchor ", I + 1, /* @__PURE__ */ a.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (Q) => {
        Q.preventDefault();
        const pe = [...e.yAxis.anchors];
        pe.splice(I, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: pe
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ a.createElement(An, null, /* @__PURE__ */ a.createElement("label", null, /* @__PURE__ */ a.createElement("span", null, "Anchor Value"), /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ a.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[I].value ? e.yAxis.anchors[I].value : "",
      onChange: (Q) => {
        Q.preventDefault();
        const pe = [...e.yAxis.anchors];
        pe[I].value = Q.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: pe
          }
        });
      }
    }
  )), /* @__PURE__ */ a.createElement("label", null, /* @__PURE__ */ a.createElement("span", null, "Anchor Color"), /* @__PURE__ */ a.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[I].color ? e.yAxis.anchors[I].color : "",
      onChange: (Q) => {
        Q.preventDefault();
        const pe = [...e.yAxis.anchors];
        pe[I].color = Q.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: pe
          }
        });
      }
    }
  )), /* @__PURE__ */ a.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ a.createElement(
    "select",
    {
      value: e.yAxis.anchors[I].lineStyle || "",
      onChange: (Q) => {
        const pe = [...e.yAxis.anchors];
        pe[I].lineStyle = Q.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: pe
          }
        });
      }
    },
    /* @__PURE__ */ a.createElement("option", null, "Select"),
    M.map((Q) => /* @__PURE__ */ a.createElement("option", { key: Q.key }, Q.value))
  )))))), /* @__PURE__ */ a.createElement(
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
  )))), /* @__PURE__ */ a.createElement(Pa.Regions, { name: "Regions" }), e.visualizationType !== "Box Plot" && /* @__PURE__ */ a.createElement(Tn, null, /* @__PURE__ */ a.createElement(wn, null, /* @__PURE__ */ a.createElement(Cn, null, "Columns")), /* @__PURE__ */ a.createElement(An, null, /* @__PURE__ */ a.createElement(Ym, { config: e, updateField: Ae, deleteColumn: rt }), " ")), ne() && /* @__PURE__ */ a.createElement(Tn, null, /* @__PURE__ */ a.createElement(wn, null, /* @__PURE__ */ a.createElement(Cn, null, "Legend")), /* @__PURE__ */ a.createElement(An, null, /* @__PURE__ */ a.createElement(et, { value: e.legend.reverseLabelOrder, section: "legend", fieldName: "reverseLabelOrder", label: "Reverse Labels", updateField: Ae }), /* @__PURE__ */ a.createElement(
    et,
    {
      value: !!e.legend.hide,
      section: "legend",
      fieldName: "hide",
      label: "Hide Legend",
      updateField: Ae,
      tooltip: /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "With a single-series chart, consider hiding the legend to reduce visual clutter.")))
    }
  ), e.visualizationType === "Line" && /* @__PURE__ */ a.createElement(et, { value: e.legend.lineMode, section: "legend", fieldName: "lineMode", label: "Show Lined Style Legend", updateField: Ae }), e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1 && /* @__PURE__ */ a.createElement(dt, { value: e.legend.colorCode, section: "legend", fieldName: "colorCode", label: "Color code by category", initial: "Select", updateField: Ae, options: pn(n) }), /* @__PURE__ */ a.createElement(dt, { value: e.legend.behavior, section: "legend", fieldName: "behavior", label: "Legend Behavior (When clicked)", updateField: (...[B, , I, Q]) => Rt(B, I, Q), options: ["highlight", "isolate"] }), ke() && /* @__PURE__ */ a.createElement(et, { value: e.legend.axisAlign, fieldName: "axisAlign", section: "legend", label: "Align to Axis on Isolate", updateField: Ae }), e.legend.behavior === "highlight" && e.tooltips.singleSeries && /* @__PURE__ */ a.createElement(et, { value: e.legend.highlightOnHover, section: "legend", fieldName: "highlightOnHover", label: "HIGHLIGHT DATA SERIES ON HOVER", updateField: Ae }), V && e.legend.behavior === "isolate" && !ht && /* @__PURE__ */ a.createElement("fieldset", { className: "primary-fieldset edit-block", key: "additional-highlight-values" }, /* @__PURE__ */ a.createElement("label", null, /* @__PURE__ */ a.createElement("span", { className: "edit-label" }, "Isolate Data Series", /* @__PURE__ */ a.createElement(Te, { style: { textTransform: "none" } }, /* @__PURE__ */ a.createElement(Te.Target, null, /* @__PURE__ */ a.createElement(pt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ a.createElement(Te.Content, null, /* @__PURE__ */ a.createElement("p", null, "You can choose data series that are shown on load. Others will be added when the user clicks on them in the legend."))))), e.legend.seriesHighlight && e.legend.seriesHighlight.map((B, I) => /* @__PURE__ */ a.createElement("fieldset", { className: "edit-block", key: `${B}-${I}` }, /* @__PURE__ */ a.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (Q) => {
        Q.preventDefault();
        const pe = [...e.legend.seriesHighlight];
        pe.splice(I, 1), Ae("legend", null, "seriesHighlight", pe), pe.length || D();
      }
    },
    "Remove"
  ), /* @__PURE__ */ a.createElement(
    dt,
    {
      value: e.legend.seriesHighlight[I],
      fieldName: "seriesHighlight",
      label: "Isolate Value",
      onChange: (Q) => {
        const pe = [...e.legend.seriesHighlight];
        pe.includes(Q.target.value) || (pe[I] = Q.target.value, mn([...pe]));
      },
      options: rn()
    }
  ))), /* @__PURE__ */ a.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (B) => {
        B.preventDefault();
        const I = rn(), Q = [...e.legend.seriesHighlight];
        if (Q.length < I.length) {
          const [Be] = I.filter((je) => !Q.includes(je));
          Q.push(Be), mn([...Q]);
        }
      }
    },
    "Add Isolate Value"
  )), /* @__PURE__ */ a.createElement(He, { value: e.legend.label, section: "legend", fieldName: "label", label: "Title", updateField: Ae }), /* @__PURE__ */ a.createElement(dt, { value: e.legend.position, section: "legend", fieldName: "position", label: "Position", updateField: Ae, options: ["right", "left", "bottom"] }), e.legend.position === "bottom" && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(et, { value: e.legend.singleRow, section: "legend", fieldName: "singleRow", label: "Single Row Legend", updateField: Ae }), /* @__PURE__ */ a.createElement(et, { value: e.legend.verticalSorted, section: "legend", fieldName: "verticalSorted", label: "Vertical sorted Legend", updateField: Ae })), /* @__PURE__ */ a.createElement(He, { type: "textarea", value: e.legend.description, updateField: Ae, section: "legend", fieldName: "description", label: "Legend Description" }))), Ze() && /* @__PURE__ */ a.createElement(Tn, null, /* @__PURE__ */ a.createElement(wn, null, /* @__PURE__ */ a.createElement(Cn, null, "Filters")), /* @__PURE__ */ a.createElement(An, null, /* @__PURE__ */ a.createElement(Xm, { config: e, updateField: Ae, rawData: C }))), /* @__PURE__ */ a.createElement(Pa.Visual, { name: "Visual" }), e.visualizationType !== "Spark Line" && /* @__PURE__ */ a.createElement(Tn, null, /* @__PURE__ */ a.createElement(wn, null, /* @__PURE__ */ a.createElement(Cn, null, "Data Table")), /* @__PURE__ */ a.createElement(An, null, /* @__PURE__ */ a.createElement(qm, { config: e, columns: Object.keys(n[0] || {}), updateField: Ae, isDashboard: g, isLoadedFromUrl: Pe }), " "))), e.type !== "Spark Line" && /* @__PURE__ */ a.createElement(Am, { loadConfig: t, state: e, convertStateToConfig: Fe }))));
}, Xh = (e) => {
  let t = "", r = Math.abs(e);
  return r >= 1e9 ? (t = "B", e = e / 1e9) : r >= 1e6 ? (t = "M", e = e / 1e6) : r >= 1e3 && (t = "K", e = e / 1e3), e + t;
}, iS = (e) => {
  e.sort((f, g) => f - g);
  const t = Math.floor(e.length / 2), r = e.length % 2 === 0, n = r ? e.slice(0, t) : e.slice(0, t + 1), i = r ? e.slice(t) : e.slice(t + 1), l = Math.floor(n.length / 2), p = r ? (n[l - 1] + n[l]) / 2 : n[l], u = Math.floor(i.length / 2), d = r ? (i[u - 1] + i[u]) / 2 : i[u];
  return { q1: p, q3: d };
}, oS = (e, t) => e.toString().localeCompare(t.toString(), "en", { numeric: !0 }), lS = (e, t) => t.toString().localeCompare(e.toString(), "en", { numeric: !0 }), Ra = (e, t) => {
  let r = [];
  return t.forEach((n) => {
    let i = !0;
    e.filter((l) => l.type !== "url").forEach((l) => {
      n[l.columnName] != l.active && (i = !1);
    }), i && r.push(n);
  }), r;
}, sS = [
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
], qh = (e = "#000000", t = !1) => {
  let r = Yl(e), n = t ? r.brighten(0.5).hex() : r.saturate(1.3).hex();
  return [e, n, r.darken(0.3).hex()];
}, Gh = (e, t, r) => {
  var g, v;
  const n = t.position === "bottom" || ["sm", "xs", "xxs"].includes(r), i = e.orientation === "horizontal", l = Number(e.xAxis.tickRotation) > 0 ? Number(e.xAxis.tickRotation) : 0, p = (g = e == null ? void 0 : e.brush) == null ? void 0 : g.active, u = 20, d = (v = e == null ? void 0 : e.brush) == null ? void 0 : v.height;
  let f = 0;
  return !n && i && !e.yAxis.label && (f = Number(e.xAxis.labelOffset)), !n && i && e.yAxis.label && !e.isResponsiveTicks && (f = Number(e.runtime.xAxis.size) + Number(e.xAxis.labelOffset)), !n && i && e.yAxis.label && e.isResponsiveTicks && (f = e.dynamicMarginTop + u), !n && i && !e.yAxis.label && e.isResponsiveTicks && (f = e.dynamicMarginTop ? e.dynamicMarginTop - u : Number(e.xAxis.labelOffset) - u), !n && i && e.yAxis.label && e.isResponsiveTicks && (f = e.dynamicMarginTop ? e.dynamicMarginTop + u : Number(e.xAxis.labelOffset)), !i && !n && e.xAxis.label && l && !e.isResponsiveTicks && (f = p ? d + e.xAxis.tickWidthMax + -e.xAxis.size + e.xAxis.labelOffset + u : e.xAxis.tickWidthMax + u + -e.xAxis.size + e.xAxis.labelOffset), !i && !n && !e.xAxis.label && l && e.isResponsiveTicks, !i && !n && !e.xAxis.label && l && !e.dynamicMarginTop && !e.isResponsiveTicks && (f = p ? e.xAxis.tickWidthMax + d + u + -e.xAxis.size : 0), !i && !n && e.xAxis.label && !l && !e.isResponsiveTicks && (f = p ? d + -e.xAxis.size + e.xAxis.labelOffset + u : -e.xAxis.size + e.xAxis.labelOffset + u), !i && !n && e.xAxis.label && e.dynamicMarginTop && e.isResponsiveTicks && (f = p ? d + e.xAxis.labelOffset + -e.xAxis.size + e.xAxis.tickWidthMax : e.dynamicMarginTop + -e.xAxis.size + u), !i && !n && !e.xAxis.label && e.dynamicMarginTop && e.isResponsiveTicks && (f = p ? d + e.xAxis.labelOffset + -e.xAxis.size + e.xAxis.tickWidthMax : e.dynamicMarginTop + -e.xAxis.size - u), !i && !n && e.xAxis.label && !e.dynamicMarginTop && e.isResponsiveTicks && (f = p ? d + e.xAxis.labelOffset + -e.xAxis.size + 25 : e.xAxis.labelOffset + -e.xAxis.size + u), !i && !n && !e.xAxis.label && !e.dynamicMarginTop && e.isResponsiveTicks && (f = -e.xAxis.size + u + e.xAxis.labelOffset), !i && !n && !e.xAxis.label && !l && !e.dynamicMarginTop && !e.isResponsiveTicks && (f = p ? d + -e.xAxis.size + e.xAxis.labelOffset : 0), `${f}px`;
};
const Zh = (e) => {
  const t = /(?:\.([^.]+))$/, r = /[?&]wt=(csv|json)(?:&|$)/, n = new URL(e, window.location.origin), i = n.pathname, l = n.search, p = t.exec(i);
  if (p && p[1])
    return p[1];
  const u = r.exec(l);
  return u && u[1] ? u[1] : "";
};
function $S({ configUrl: e, config: t, isEditor: r = !1, isDebug: n = !1, isDashboard: i = !1, setConfig: l, setEditing: p, hostname: u, link: d, setSharedFilter: f, setSharedFilterValue: g, dashboardConfig: v }) {
  var Bt, pn, En, Ee, Fe, ot, Ve, en, ut, xn, Nn;
  const y = new Jh(), [k, T] = fe.useState(!0), [M, C] = fe.useState(null), [m, D] = fe.useState({}), [O, _] = fe.useState(m.data || []), [$, L] = fe.useState(void 0), [q, W] = fe.useState(void 0), [Y, J] = fe.useState(t && ((pn = (Bt = t == null ? void 0 : t.legend) == null ? void 0 : Bt.seriesHighlight) != null && pn.length) ? [...(En = t == null ? void 0 : t.legend) == null ? void 0 : En.seriesHighlight] : []), [le, U] = fe.useState("lg"), [te, me] = fe.useState([]), [K, ce] = fe.useState(), [ue, he] = fe.useState(), [ae, V] = fe.useState(!1), [ee, ne] = fe.useState([]), [ke] = fe.useState(`cove-${Math.random().toString(16).slice(-4)}`);
  fe.useRef(/* @__PURE__ */ new Map()), fe.useRef();
  const xe = fe.useRef(null);
  n && console.log("Chart config, isEditor", m, r);
  let { legend: we, title: ie, description: Le, visualizationType: Me } = m;
  r && (!ie || ie === "") && (ie = "Chart Title"), m.table && (!((Ee = m.table) != null && Ee.label) || ((Fe = m.table) == null ? void 0 : Fe.label) === "") && (m.table.label = "Data Table");
  const { barBorderClass: We, lineDatapointClass: qe, contentClasses: Ge, sparkLineStyles: De } = Zm(m), _e = fe.useId(), $e = (ot = m.legend) != null && ot.hide ? m != null && m.title ? `dataTableSection__${m.title.replace(/\s/g, "")}` : "dataTableSection" : _e, Ze = async () => {
    var j;
    if (m.dataUrl) {
      const Pe = new URL(m.runtimeDataUrl || m.dataUrl, window.location.origin);
      let Ie = Object.fromEntries(new URLSearchParams(Pe.search)), Oe = !1;
      if ((j = m.filters) == null || j.forEach((rt) => {
        rt.type === "url" && Ie[rt.queryParameter] !== decodeURIComponent(rt.active) && (Ie[rt.queryParameter] = rt.active, Oe = !0);
      }), (!m.formattedData || m.formattedData.urlFiltered) && !Oe)
        return;
      let nt = `${Pe.origin}${Pe.pathname}${Object.keys(Ie).map((rt, Qe) => {
        let ze = Qe === 0 ? "?" : "&";
        return ze += rt + "=", ze += Ie[rt], ze;
      }).join("")}`, Ye = [];
      try {
        const rt = Zh(Pe.href);
        rt === "csv" || _f(nt) ? Ye = await fetch(nt).then((Qe) => Qe.text()).then((Qe) => zf.parse(Qe, {
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0
        }).data) : rt === "json" || Nf(nt) ? Ye = await fetch(nt).then((Qe) => Qe.json()) : Ye = [];
      } catch {
        console.error(`Cannot parse URL: ${nt}`), Ye = [];
      }
      m.dataDescription && (Ye = y.autoStandardize(Ye), Ye = y.developerStandardize(Ye, m.dataDescription)), Object.assign(Ye, { urlFiltered: !0 }), vt({ ...m, runtimeDataUrl: nt, data: Ye, formattedData: Ye }), Ye && (_(Ye), L(Ye), W(Ra(m.filters, Ye)));
    }
  }, Et = async () => {
    let j = t || await (await fetch(e)).json(), Pe = j.data || [];
    const Ie = j.filters ? j.filters.filter((Ye) => Ye.type === "url").length > 0 : !1;
    if (j.dataUrl && !Ie)
      try {
        const Ye = Zh(j.dataUrl);
        (Ye === "csv" || _f(j.dataUrl)) && (Pe = await fetch(j.dataUrl + `?v=${qf()}`).then((rt) => rt.text()).then((rt) => (rt = rt.replace(/(".*?")|,/g, (...ze) => ze[1] || "|"), rt = rt.replace(/["]+/g, ""), zf.parse(rt, {
          //quotes: "true",  // dont need these
          //quoteChar: "'",  // has no effect that I can tell
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0,
          delimiter: "|"
          // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
        }).data))), (Ye === "json" || Nf(j.dataUrl)) && (Pe = await fetch(j.dataUrl + `?v=${qf()}`).then((rt) => rt.json()));
      } catch {
        console.error(`COVE: Cannot parse URL: ${j.dataUrl}`), Pe = [];
      }
    j.dataDescription && (Pe = y.autoStandardize(Pe), Pe = y.developerStandardize(Pe, j.dataDescription)), Pe && (_(Pe), L(Pe)), j !== void 0 && j.table !== void 0 && (!j.table || !j.table.showVertical) && (j.table = j.table || {}, j.table.showVertical = !1);
    let Oe = { ...ld, ...j };
    Oe.filters && Oe.filters.forEach((Ye, rt) => {
      const Qe = Pm(Ye);
      Qe && (Oe.filters[rt].active = Qe);
    }), Oe.visualizationType === "Box Plot" && (Oe.legend.hide = !0), Oe.table.show === void 0 && (Oe.table.show = !i), Oe.series.map((Ye) => {
      Ye.tooltip || (Ye.tooltip = !0), Ye.axis || (Ye.axis = "Left");
    }), !Oe.data && Pe && (Oe.data = Pe);
    const nt = { ...await Rm(Oe) };
    vt(nt, Pe);
  }, vt = (j, Pe) => {
    var Ye, rt, Qe;
    let Ie = Pe || O;
    Object.keys(ld).forEach((ze) => {
      j[ze] && typeof j[ze] == "object" && !Array.isArray(j[ze]) && (j[ze] = { ...ld[ze], ...j[ze] });
    });
    let Oe = [];
    if (j.exclusions && j.exclusions.active)
      if (j.xAxis.type === "categorical" && ((Ye = j.exclusions.keys) == null ? void 0 : Ye.length) > 0)
        Oe = Ie.filter((ze) => !j.exclusions.keys.includes(ze[j.xAxis.dataKey]));
      else if (yn(j.xAxis) && (j.exclusions.dateStart || j.exclusions.dateEnd) && j.xAxis.dateParseFormat) {
        const ze = (Lt) => new Date(Lt).getTime();
        let Nt = ze(j.exclusions.dateStart), $t = ze(j.exclusions.dateEnd) + 86399999, Zt = typeof Nt !== void 0 && isNaN(Nt) === !1, It = typeof $t !== void 0 && isNaN($t) === !1;
        Zt && It ? Oe = Ie.filter((Lt) => ze(Lt[j.xAxis.dataKey]) >= Nt && ze(Lt[j.xAxis.dataKey]) <= $t) : Zt ? Oe = Ie.filter((Lt) => ze(Lt[j.xAxis.dataKey]) >= Nt) : It && (Oe = Ie.filter((Lt) => ze(Lt[j.xAxis.dataKey]) <= $t));
      } else
        Oe = Pe || O;
    else
      Oe = Pe || O;
    L(Oe);
    let nt = [];
    if (j.filters && (j.filters.forEach((ze, Nt) => {
      let $t = [];
      $t = ze.orderedValues || Ct(ze.columnName, Oe).sort(ze.order === "desc" ? lS : oS), j.filters[Nt].values = $t, j.filters[Nt].active = j.filters[Nt].active || $t[0], j.filters[Nt].filterStyle = j.filters[Nt].filterStyle ? j.filters[Nt].filterStyle : "dropdown";
    }), nt = Ra(j.filters, Oe), W(nt)), j.xAxis.type === "date-time" && j.barThickness > 0.1 ? j.barThickness = 0.035 : j.xAxis.type !== "date-time" && j.barThickness < 0.1 && (j.barThickness = 0.35), j.runtime = {}, j.runtime.seriesLabels = {}, j.runtime.seriesLabelsAll = [], j.runtime.originalXAxis = j.xAxis, j.visualizationType === "Pie" ? (j.runtime.seriesKeys = (Pe || Ie).map((ze) => ze[j.xAxis.dataKey]), j.runtime.seriesLabelsAll = j.runtime.seriesKeys) : j.runtime.seriesKeys = j.series ? j.series.map((ze) => (j.runtime.seriesLabels[ze.dataKey] = ze.name || ze.label || ze.dataKey, j.runtime.seriesLabelsAll.push(ze.name || ze.dataKey), ze.dataKey)) : [], j.visualizationType === "Box Plot" && j.series) {
      let ze = Oe ? Oe.map((kt) => kt[j.xAxis.dataKey]) : Ie.map((kt) => kt[j.xAxis.dataKey]), Nt = Oe ? Oe.map((kt) => {
        var Tt;
        return Number(kt[(Tt = j == null ? void 0 : j.series[0]) == null ? void 0 : Tt.dataKey]);
      }) : Ie.map((kt) => {
        var Tt;
        return Number(kt[(Tt = j == null ? void 0 : j.series[0]) == null ? void 0 : Tt.dataKey]);
      });
      const Zt = function(kt) {
        return kt.filter(function(Tt, ht, rn) {
          return rn.indexOf(Tt) === ht;
        });
      }(ze);
      let It = [];
      const Lt = [];
      if (!Zt)
        return;
      Zt.forEach((kt) => {
        try {
          if (!kt)
            throw new cn("No groups resolved in box plots");
          let Tt = Oe ? Oe.filter((Qt) => Qt[j.xAxis.dataKey] === kt) : Ie.filter((Qt) => Qt[j.xAxis.dataKey] === kt), ht = Tt.map((Qt) => {
            var bn;
            return Number(Qt[(bn = j == null ? void 0 : j.series[0]) == null ? void 0 : bn.dataKey]);
          }), rn = ht.sort((Qt, bn) => Qt - bn);
          const mn = iS(rn);
          if (!Tt)
            throw new cn("boxplots dont have data yet");
          if (!Lt)
            throw new cn("boxplots dont have plots yet");
          j.boxplot.firstQuartilePercentage === "" && (j.boxplot.firstQuartilePercentage = 0), j.boxplot.thirdQuartilePercentage === "" && (j.boxplot.thirdQuartilePercentage = 0);
          const Rt = mn.q1, gn = mn.q3, on = gn - Rt, Ft = Rt - (gn - Rt) * 1.5, Ht = gn + (gn - Rt) * 1.5, Pn = rn.filter((Qt) => Qt < Ft || Qt > Ht);
          let Rn = ht;
          Rn = Rn.filter((Qt) => !Pn.includes(Qt));
          const Qn = Wc(ht) || 0, Wn = Vc([Qn, Rt - 1.5 * on]);
          Lt.push({
            columnCategory: kt,
            columnMax: Wc([Vc(ht), Rt + 1.5 * on]),
            columnThirdQuartile: Number(gn).toFixed(j.dataFormat.roundTo),
            columnMedian: Number(lg(ht)).toFixed(j.dataFormat.roundTo),
            columnFirstQuartile: Rt.toFixed(j.dataFormat.roundTo),
            columnMin: Wn,
            columnTotal: ht.reduce((Qt, bn) => Qt + bn, 0),
            columnSd: Number(ng(ht)).toFixed(j.dataFormat.roundTo),
            columnMean: Number(og(ht)).toFixed(j.dataFormat.roundTo),
            columnIqr: Number(on).toFixed(j.dataFormat.roundTo),
            columnLowerBounds: Wn,
            columnUpperBounds: Wc([Vc(rn), Rt + 1.5 * on]),
            columnOutliers: Pn,
            values: ht,
            nonOutlierValues: Rn
          });
        } catch (Tt) {
          console.error("COVE: ", Tt.message);
        }
      }), It = JSON.parse(JSON.stringify(Lt)), It.map((kt) => (kt.columnIqr = void 0, kt.nonOutlierValues = void 0, kt.columnLowerBounds = void 0, kt.columnUpperBounds = void 0, null)), j.boxplot.allValues = Nt, j.boxplot.categories = Zt, j.boxplot.plots = Lt, j.boxplot.tableData = It;
    }
    j.visualizationType === "Combo" && j.series && (j.runtime.barSeriesKeys = [], j.runtime.lineSeriesKeys = [], j.runtime.areaSeriesKeys = [], j.runtime.forecastingSeriesKeys = [], j.series.forEach((ze) => {
      ze.type === "Area Chart" && j.runtime.areaSeriesKeys.push(ze), ze.type === "Forecasting" && j.runtime.forecastingSeriesKeys.push(ze), (ze.type === "Bar" || ze.type === "Combo") && j.runtime.barSeriesKeys.push(ze.dataKey), (ze.type === "Line" || ze.type === "dashed-sm" || ze.type === "dashed-md" || ze.type === "dashed-lg") && j.runtime.lineSeriesKeys.push(ze.dataKey), ze.type === "Combo" && (ze.type = "Bar");
    })), j.visualizationType === "Forecasting" && j.series && (j.runtime.forecastingSeriesKeys = [], j.series.forEach((ze) => {
      ze.type === "Forecasting" && j.runtime.forecastingSeriesKeys.push(ze);
    })), j.visualizationType === "Area Chart" && j.series && (j.runtime.areaSeriesKeys = [], j.series.forEach((ze) => {
      j.runtime.areaSeriesKeys.push({ ...ze, type: "Area Chart" });
    })), j.visualizationType === "Bar" && j.orientation === "horizontal" || ["Deviation Bar", "Paired Bar", "Forest Plot"].includes(j.visualizationType) ? (j.runtime.xAxis = j.yAxis.yAxis ? j.yAxis.yAxis : j.yAxis, j.runtime.yAxis = j.xAxis.xAxis ? j.xAxis.xAxis : j.xAxis, j.runtime.horizontal = !1, j.orientation = "horizontal") : ["Box Plot", "Scatter Plot", "Area Chart", "Line", "Forecasting"].includes(j.visualizationType) ? (j.runtime.xAxis = j.xAxis, j.runtime.yAxis = j.yAxis, j.runtime.horizontal = !1, j.orientation = "vertical") : (j.runtime.xAxis = j.xAxis, j.runtime.yAxis = j.yAxis, j.runtime.horizontal = !1), j.runtime.uniqueId = Date.now(), j.runtime.editorErrorMessage = j.visualizationType === "Pie" && !j.yAxis.dataKey ? "Data Key property in Y Axis section must be set for pie charts." : "", j.runtime.editorErrorMessage = j.visualizationType === "Sankey" && !j.description ? "SUBTEXT/CITATION field is empty: A description of the Sankey Diagram data must be inputted." : "", (rt = j.legend.seriesHighlight) != null && rt.length && J((Qe = j.legend) == null ? void 0 : Qe.seriesHighlight), D(j);
  }, Ct = (j, Pe = this.state.data) => {
    const Ie = [];
    return Pe.forEach((Oe) => {
      const nt = Oe[j];
      nt && Ie.includes(nt) === !1 && Ie.push(nt);
    }), Ie;
  }, Je = (j, Pe) => {
    let Ie = m.visualizationType === "Bar" && m.visualizationSubType === "horizontal" ? m.xAxis.dataKey : m.yAxis.sortKey, Oe = parseFloat(j[Ie]), nt = parseFloat(Pe[Ie]);
    return Oe < nt ? m.sortData === "ascending" ? 1 : -1 : Oe > nt ? m.sortData === "ascending" ? -1 : 1 : 0;
  }, Vt = new Em((j) => {
    for (let Pe of j) {
      let { width: Ie, height: Oe } = Pe.contentRect, nt = km(Ie), Ye = 32, rt = 350;
      U(nt), r && (Ie = Ie - rt), Pe.target.dataset.lollipop === "true" && (Ie = Ie - 2.5), Ie = Ie - Ye, me([Ie, Oe]);
    }
  }), qt = fe.useCallback((j) => {
    j !== null && Vt.observe(j), he(j);
  }, []);
  function zt(j) {
    return Object.keys(j).length === 0;
  }
  fe.useEffect(() => {
    Et();
  }, []), fe.useEffect(() => {
    Ze();
  }, [JSON.stringify(m.filters)]), fe.useEffect(() => {
    ue && !zt(m) && !ae && (Qm("cove_loaded", { config: m }), V(!0));
  }, [ue, m]), fe.useEffect(() => {
    const j = (Pe) => {
      let Ie = [];
      Ie.push(Pe.detail), ce(Ie);
    };
    return Jm("cove_filterData", (Pe) => j(Pe)), () => {
      eg("cove_filterData", j);
    };
  }, [m]), fe.useEffect(() => {
    if (K && K[0] && !K[0].hasOwnProperty("active")) {
      let Pe = { ...m };
      delete Pe.filters, D(Pe), W(Ra(K, $));
    }
    if (K && K.length > 0 && K.length > 0 && K[0].hasOwnProperty("active")) {
      let j = { ...m, filters: K };
      D(j), W(Ra(K, $));
    }
  }, [K]), t && fe.useEffect(() => {
    Et();
  }, [t.data]), fe.useEffect(() => {
    var j;
    if (O && m.xAxis && ((j = m.runtime) != null && j.seriesKeys)) {
      const Pe = ["Paired Bar", "Deviation Bar"].includes(m.visualizationType) ? m.twoColor.palette : m.palette, Ie = { ...ar, ...cu };
      let Oe = m.customColors || Ie[Pe], nt = m.runtime.seriesKeys.length, Ye;
      for (; nt > Oe.length; )
        Oe = Oe.concat(Oe);
      Oe = Oe.slice(0, nt), Ye = () => mp({
        domain: m.runtime.seriesLabelsAll,
        range: Oe,
        unknown: null
      }), C(Ye), T(!1);
    }
    m && O && m.sortData && O.sort(Je);
  }, [m, O]);
  const bt = (j) => {
    if (Y.length + 1 === m.runtime.seriesKeys.length && m.visualizationType !== "Forecasting") {
      St();
      return;
    }
    const Pe = [...Y];
    let Ie = j.datum;
    m.runtime.seriesLabels && m.runtime.seriesKeys.forEach((Oe) => {
      m.runtime.seriesLabels[Oe] === j.datum && (Ie = Oe);
    }), Pe.indexOf(Ie) !== -1 ? Pe.splice(Pe.indexOf(Ie), 1) : Pe.push(Ie), J(Pe);
  }, St = () => {
    try {
      const j = xe.current;
      if (!j)
        throw new cn("No legend available to set previous focus on.");
      j.focus();
    } catch (j) {
      console.error("COVE:", j.message);
    }
    J([]);
  }, Jt = m.orientation === "horizontal" ? "yAxis" : "xAxis", ft = (j, Pe = !0) => {
    let Ie = Bm(m.runtime[Jt].dateParseFormat)(j);
    return Ie || (Pe && (m.runtime.editorErrorMessage = `Error parsing date "${j}". Try reviewing your data and date parse settings in the X Axis section.`), /* @__PURE__ */ new Date());
  }, Ot = (j) => ud(m.runtime[Jt].dateDisplayFormat)(j), wt = (j) => ud(m.tooltips.dateDisplayFormat)(j);
  function un(j, Pe) {
    const Oe = document.createElement("canvas").getContext("2d");
    if (!Oe) {
      console.error("2d context not found");
      return;
    }
    return Oe.font = Pe || getComputedStyle(document.body).font, Math.ceil(Oe.measureText(j).width);
  }
  const Mn = (j, Pe, Ie = !1, Oe, nt, Ye) => {
    if (isNaN(j) || !j)
      return j;
    const rt = j < 0;
    (Pe === void 0 || !Pe) && (Pe = "left"), rt && (j = Math.abs(j));
    let {
      dataFormat: { commas: Qe, abbreviated: ze, roundTo: Nt, prefix: $t, suffix: Zt, rightRoundTo: It, bottomRoundTo: Lt, rightPrefix: kt, rightSuffix: Tt, bottomPrefix: ht, bottomSuffix: rn, bottomAbbreviated: mn }
    } = m;
    String(j).indexOf(",") !== -1 && (j = j.replaceAll(",", ""));
    let Rt = j, gn = {
      useGrouping: !!Qe
      // for old chart data table to work right cant just leave this to undefined
    };
    if (Pe === "left" || Pe === void 0) {
      let Ht;
      Ye !== void 0 ? Ht = Ye ? Number(Ye) : 0 : Ht = Nt ? Number(Nt) : 0, gn = {
        useGrouping: Ye ? !0 : !!m.dataFormat.commas,
        minimumFractionDigits: Ht,
        maximumFractionDigits: Ht
      };
    }
    Pe === "right" && (gn = {
      useGrouping: !!m.dataFormat.rightCommas,
      minimumFractionDigits: It ? Number(It) : 0,
      maximumFractionDigits: It ? Number(It) : 0
    });
    const on = () => m.forestPlot.type === "Logarithmic" && !Lt ? 2 : Number(Lt) ? Number(Lt) : 0;
    if (Pe === "bottom" && (gn = {
      useGrouping: !!m.dataFormat.bottomCommas,
      minimumFractionDigits: on(),
      maximumFractionDigits: on()
    }), j = Xf(j), isNaN(j))
      return m.runtime.editorErrorMessage = `Unable to parse number from data ${Rt}. Try reviewing your data and selections in the Data Series section.`, Rt;
    if (!m.dataFormat)
      return j;
    if (m.dataCutoff) {
      let Ht = Xf(m.dataCutoff);
      j < Ht && (j = Ht);
    }
    Pe === "left" && Qe && ze && Ie || Pe === "bottom" && Qe && ze && Ie ? j = j : j = j.toLocaleString("en-US", gn);
    let Ft = "";
    return ze && Pe === "left" && Ie && (j = Xh(parseFloat(j))), mn && Pe === "bottom" && Ie && (j = Xh(parseFloat(j))), Oe && Pe === "left" ? Ft = Oe + Ft : $t && Pe === "left" && (Ft += $t), kt && Pe === "right" && (Ft += kt), ht && Pe === "bottom" && (Ft += ht), Ft += j, nt && Pe === "left" ? Ft += nt : Zt && Pe === "left" && (Ft += Zt), Tt && Pe === "right" && (Ft += Tt), rn && Pe === "bottom" && (Ft += rn), rt && (Ft = "-" + Ft), String(Ft);
  }, _n = {
    "Paired Bar": /* @__PURE__ */ a.createElement(Wr, null),
    Forecasting: /* @__PURE__ */ a.createElement(Wr, null),
    Bar: /* @__PURE__ */ a.createElement(Wr, null),
    Line: /* @__PURE__ */ a.createElement(Wr, null),
    Combo: /* @__PURE__ */ a.createElement(Wr, null),
    Pie: /* @__PURE__ */ a.createElement(Xx, null),
    "Box Plot": /* @__PURE__ */ a.createElement(Wr, null),
    "Area Chart": /* @__PURE__ */ a.createElement(Wr, null),
    "Scatter Plot": /* @__PURE__ */ a.createElement(Wr, null),
    "Deviation Bar": /* @__PURE__ */ a.createElement(Wr, null),
    "Forest Plot": /* @__PURE__ */ a.createElement(Wr, null)
  }, jt = () => {
    if (m.visualizationType === "Sankey" || m.visualizationType === "Forecasting" || m.visualizationType === "Forest Plot")
      return !1;
    if (m.visualizationType === "Pie") {
      if ((m == null ? void 0 : m.yAxis.dataKey) === void 0)
        return !0;
    } else if ((m == null ? void 0 : m.series) === void 0 || !((m == null ? void 0 : m.series.length) > 0))
      return !0;
    return !m.xAxis.dataKey;
  }, Gt = (j, Pe) => {
    if (j === null || j === "" || j === void 0)
      return "";
    if (typeof j == "string" && j.length > 0 && m.legend.type === "equalnumber")
      return j;
    let Ie = j, Oe;
    if (Object.keys(m.columns).length > 0 && Object.keys(m.columns).forEach(function(nt) {
      var Ye = m.columns[nt];
      Ye.name === Pe && (Oe = Ye);
    }), Oe === void 0 && (Oe = m.type === "chart" ? m.dataFormat : m.primary, Oe.useCommas = Oe.commas, Oe.roundToPlace = Oe.roundTo ? Oe.roundTo : ""), Oe) {
      let nt = !1, Ye = 0;
      Number(j) && (Oe.roundToPlace >= 0 && (nt = Oe.roundToPlace ? Oe.roundToPlace !== "" || Oe.roundToPlace !== null : !1, Ye = Oe.roundToPlace ? Number(Oe.roundToPlace) : 0, Oe.hasOwnProperty("roundToPlace") && nt && (Ie = Number(j).toFixed(Ye))), Oe.hasOwnProperty("useCommas") && Oe.useCommas === !0 && (Ie = Number(j).toLocaleString("en-US", {
        style: "decimal",
        minimumFractionDigits: nt ? Ye : 0,
        maximumFractionDigits: nt ? Ye : 5
      }))), Ie = (Oe.prefix || "") + Ie + (Oe.suffix || "");
    }
    return Ie;
  }, Mt = () => {
    const j = (Ie) => {
      Ie && Ie.preventDefault();
      let Oe = { ...m };
      delete Oe.newViz, vt(Oe);
    }, Pe = {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gridArea: "content"
    };
    return /* @__PURE__ */ a.createElement("section", { className: "waiting", style: Pe }, /* @__PURE__ */ a.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ a.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ a.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ a.createElement(qd, { className: "btn", style: { margin: "1em auto" }, disabled: jt(), onClick: (Ie) => j(Ie) }, "I'm Done")));
  }, cn = () => {
    const j = {
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
    return /* @__PURE__ */ a.createElement("section", { className: "waiting", style: j }, /* @__PURE__ */ a.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ a.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ a.createElement("p", null, m.runtime.editorErrorMessage)));
  }, dn = (j) => {
    try {
      if (!j)
        throw new cn("COVE: No rowObj in applyLegendToRow");
      if (m.type === "navigation") {
        let Pe = ar[m.color] || ar.bluegreenreverse;
        return qh(Pe[3]);
      }
      return qh();
    } catch (Pe) {
      console.error("COVE: ", Pe);
    }
  }, Ae = (j) => {
    var Pe;
    return Array.isArray(j) ? m.visualizationType === "Forecasting" ? j : (Pe = m == null ? void 0 : m.xAxis) != null && Pe.dataKey ? y.cleanData(j, m.xAxis.dataKey) : j : [];
  }, mt = (j) => j;
  let Ut = /* @__PURE__ */ a.createElement(Vm, null);
  const _t = () => {
    const j = ["chart-container", "p-relative"];
    return m.legend.position === "bottom" && j.push("bottom"), m.legend.hide && j.push("legend-hidden"), qe && j.push(qe), m.barHasBorder || j.push("chart-bar--no-border"), n && j.push("debug"), j.push(...Ge), j;
  };
  if (!k) {
    const j = /* @__PURE__ */ a.createElement("a", { href: `#data-table-${m.dataKey}`, className: "margin-left-href" }, m.dataKey, " (Go to Table)");
    Ut = /* @__PURE__ */ a.createElement(a.Fragment, null, r && /* @__PURE__ */ a.createElement(aS, null), /* @__PURE__ */ a.createElement(sd.Responsive, { isEditor: r }, m.newViz && /* @__PURE__ */ a.createElement(Mt, null), m.newViz === void 0 && r && m.runtime && ((Ve = m.runtime) == null ? void 0 : Ve.editorErrorMessage) && /* @__PURE__ */ a.createElement(cn, null), !jt() && !m.newViz && /* @__PURE__ */ a.createElement("div", { className: "cdc-chart-inner-container cove-component__content", "aria-label": Od(m), tabIndex: 0 }, /* @__PURE__ */ a.createElement(Dm, { showTitle: m.showTitle, isDashboard: i, title: ie, superTitle: m.superTitle, classes: ["chart-title", `${m.theme}`, "cove-component__header"], style: void 0 }), m.filters && !K && m.visualizationType !== "Spark Line" && /* @__PURE__ */ a.createElement(Ff, { config: m, setConfig: D, setFilteredData: W, filteredData: q, excludedData: $, filterData: Ra, dimensions: te }), /* @__PURE__ */ a.createElement(Fm, { skipId: $e, skipMessage: "Skip Over Chart Container" }), (m == null ? void 0 : m.introText) && m.visualizationType !== "Spark Line" && /* @__PURE__ */ a.createElement("section", { className: "introText" }, Ei(m.introText)), /* @__PURE__ */ a.createElement("div", { style: { marginBottom: Gh(m, we, le) }, className: _t().join(" ") }, m.visualizationType !== "Spark Line" && _n[m.visualizationType], m.visualizationType === "Spark Line" && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(Ff, { config: m, setConfig: D, setFilteredData: W, filteredData: q, excludedData: $, filterData: Ra, dimensions: te }), (m == null ? void 0 : m.introText) && /* @__PURE__ */ a.createElement("section", { className: "introText", style: { padding: "0px 0 35px" } }, Ei(m.introText)), /* @__PURE__ */ a.createElement("div", { style: { height: "100px", width: "100%", ...De } }, /* @__PURE__ */ a.createElement(dh, null, (Pe) => /* @__PURE__ */ a.createElement(_0, { width: Pe.width, height: Pe.height }))), Le && /* @__PURE__ */ a.createElement("div", { className: "subtext", style: { padding: "35px 0 15px" } }, Ei(Le))), m.visualizationType === "Sankey" && /* @__PURE__ */ a.createElement(dh, { "aria-hidden": "true" }, (Pe) => /* @__PURE__ */ a.createElement(ub, { runtime: m.runtime, width: Pe.width, height: Pe.height })), !m.legend.hide && m.visualizationType !== "Spark Line" && m.visualizationType !== "Sankey" && /* @__PURE__ */ a.createElement(N0, { ref: xe })), i && m.table && m.table.show && m.table.showDataTableLink ? j : d && d, Le && m.visualizationType !== "Spark Line" && /* @__PURE__ */ a.createElement("div", { className: "column " + m.isResponsiveTicks ? "subtext--responsive-ticks" : "subtext" }, Ei(Le)), /* @__PURE__ */ a.createElement(jc.Section, { classes: ["download-buttons"] }, m.table.showDownloadImgButton && /* @__PURE__ */ a.createElement(jc.Button, { text: "Download Image", title: "Download Chart as Image", type: "image", state: m, elementToCapture: ke }), m.table.showDownloadPdfButton && /* @__PURE__ */ a.createElement(jc.Button, { text: "Download PDF", title: "Download Chart as PDF", type: "pdf", state: m, elementToCapture: ke })), (m.xAxis.dataKey && m.table.show && m.visualizationType !== "Spark Line" && m.visualizationType !== "Sankey" || m.visualizationType === "Sankey" && m.table.show) && /* @__PURE__ */ a.createElement(
      zm,
      {
        config: m,
        rawData: m.visualizationType === "Sankey" ? (ut = (en = m == null ? void 0 : m.data) == null ? void 0 : en[0]) == null ? void 0 : ut.tableData : m.table.customTableConfig ? Ra(m.filters, m.data) : m.data,
        runtimeData: m.visualizationType === "Sankey" ? (Nn = (xn = m == null ? void 0 : m.data) == null ? void 0 : xn[0]) == null ? void 0 : Nn.tableData : y.applySuppression(q || $, m.suppressedData),
        expandDataTable: m.table.expanded,
        columns: m.columns,
        displayDataAsText: Gt,
        displayGeoName: mt,
        applyLegendToRow: dn,
        tableTitle: m.table.label,
        indexTitle: m.table.indexLabel,
        vizTitle: ie,
        viewport: le,
        tabbingId: $e,
        colorScale: M
      }
    ), (m == null ? void 0 : m.footnotes) && /* @__PURE__ */ a.createElement("section", { className: "footnotes" }, Ei(m.footnotes)))));
  }
  const xt = {
    capitalize: (j) => j.charAt(0).toUpperCase() + j.slice(1),
    computeMarginBottom: Gh,
    getXAxisData: (j) => yn(m.runtime.xAxis) ? ft(j[m.runtime.originalXAxis.dataKey]).getTime() : j[m.runtime.originalXAxis.dataKey],
    getYAxisData: (j, Pe) => j[Pe],
    config: m,
    setConfig: D,
    rawData: O ?? {},
    excludedData: $,
    transformedData: Ae(q || $),
    // do this right before passing to components
    tableData: q || $,
    // do not clean table data
    unfilteredData: O,
    seriesHighlight: Y,
    colorScale: M,
    dimensions: te,
    currentViewport: le,
    parseDate: ft,
    formatDate: Ot,
    formatTooltipsDate: wt,
    formatNumber: Mn,
    loading: k,
    updateConfig: vt,
    colorPalettes: ar,
    isDashboard: i,
    setParentConfig: l,
    missingRequiredSections: jt,
    setEditing: p,
    setFilteredData: W,
    handleChartAriaLabels: Od,
    highlight: bt,
    highlightReset: St,
    legend: we,
    setSeriesHighlight: J,
    dynamicLegendItems: ee,
    setDynamicLegendItems: ne,
    filterData: Ra,
    imageId: ke,
    handleLineType: Fd,
    lineOptions: sS,
    isNumber: su,
    getTextWidth: un,
    twoColorPalette: cu,
    isEditor: r,
    isDebug: n,
    setSharedFilter: f,
    setSharedFilterValue: g,
    dashboardConfig: v,
    debugSvg: n
  };
  return /* @__PURE__ */ a.createElement(lt.Provider, { value: xt }, /* @__PURE__ */ a.createElement(sd.VisualizationWrapper, { config: m, isEditor: r, currentViewport: le, ref: qt, imageId: ke, showEditorPanel: m == null ? void 0 : m.showEditorPanel }, Ut));
}
export {
  $S as C
};
